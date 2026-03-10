import { TypeRegistry } from "@smithy/core/schema";
import { HttpResponse } from "@smithy/protocol-http";
import type { ServiceExceptionOptions } from "@smithy/smithy-client";
import { ServiceException } from "@smithy/smithy-client";
import type { StaticErrorSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { context } from "../test-schema.spec";
import { AwsQueryProtocol } from "./AwsQueryProtocol";

describe(AwsQueryProtocol.name, () => {
  class GiraffeServiceException extends ServiceException {
    constructor(options: ServiceExceptionOptions) {
      super(options);
      Object.setPrototypeOf(this, GiraffeServiceException.prototype);
    }
  }

  const syntheticNamespace = "smithy.ts.sdk.synthetic.com.amazonaws.giraffes";
  TypeRegistry.for(syntheticNamespace).registerError(
    [-3, syntheticNamespace, "GiraffeServiceException", 0, [], []] satisfies StaticErrorSchema,
    GiraffeServiceException
  );

  it("should have a shapeId of aws.protocols#awsQuery", () => {
    expect(new AwsQueryProtocol({ version: "", defaultNamespace: "", xmlNamespace: "" }).getShapeId()).toEqual(
      "aws.protocols#awsQuery"
    );
  });

  it("decorates service exceptions with unmodeled fields", async () => {
    const httpResponse = new HttpResponse({
      statusCode: 400,
      headers: {},
      body: Buffer.from(`<Exception><Error><UnmodeledField>Oh no</UnmodeledField></Error></Exception>`),
    });

    const protocol = new AwsQueryProtocol({
      version: "",
      defaultNamespace: "",
      xmlNamespace: "ns",
    });

    const output = await protocol
      .deserializeResponse(
        {
          namespace: "ns",
          name: "Empty",
          traits: 0,
          input: "unit" as const,
          output: [3, "ns", "EmptyOutput", 0, [], []],
        },
        context,
        httpResponse
      )
      .catch((e) => {
        return e;
      });

    expect(output).toMatchObject({
      UnmodeledField: "Oh no",
      $metadata: {
        httpStatusCode: 400,
      },
    });
  });

  it("should copy Error.Code to error.name and Error.Message to error.message", async () => {
    const httpResponse = new HttpResponse({
      statusCode: 400,
      headers: {},
      body: Buffer.from(
        "<Exception>" +
          "<Error>" +
          "<Type>Sender</Type>" +
          "<Code>GiraffeServiceException</Code>" +
          "<Message>A giraffe has eaten your umbrella</Message>" +
          "</Error>" +
          "</Exception>"
      ),
    });

    const protocol = new AwsQueryProtocol({
      version: "1999-12-31",
      defaultNamespace: "com.amazonaws.giraffes",
      xmlNamespace: "ns",
    });

    const actual = await protocol
      .deserializeResponse(
        {
          namespace: "ns",
          name: "Empty",
          traits: 0,
          input: "unit" as const,
          output: [3, "ns", "EmptyOutput", 0, [], []],
        },
        context,
        httpResponse
      )
      .catch((e) => {
        return e;
      });

    const expected = Object.assign(
      new GiraffeServiceException({
        name: "GiraffeServiceException",
        $fault: "client",
        message: "A giraffe has eaten your umbrella",
        $metadata: {
          cfId: undefined,
          extendedRequestId: undefined,
          httpStatusCode: 400,
          requestId: undefined,
        },
      }),
      {
        Type: "Sender",
        Code: "GiraffeServiceException",
        Error: {
          Code: "GiraffeServiceException",
          Message: "A giraffe has eaten your umbrella",
          Type: "Sender",
        },
      }
    );

    expect(actual.constructor).toBe(expected.constructor);
    expect(actual.name).toEqual(expected.name);
    expect(actual.message).toEqual(expected.message);
    expect(actual.Type).toEqual(expected.Type);
    expect(actual.Code).toEqual(expected.Code);
    expect(actual.Error).toEqual(expected.Error);
  });
});

it("should not crash when error response body is empty", async () => {
  const httpResponse = new HttpResponse({
    statusCode: 500,
    headers: {
      "content-type": "text/xml",
    },
    body: Buffer.from(""),
  });

  const protocol = new AwsQueryProtocol({
    version: "1999-12-31",
    defaultNamespace: "com.amazonaws.giraffes",
    xmlNamespace: "ns",
  });

  const actual = await protocol
    .deserializeResponse(
      {
        namespace: "ns",
        name: "Empty",
        traits: 0,
        input: "unit" as const,
        output: [3, "ns", "EmptyOutput", 0, [], []],
      },
      context,
      httpResponse
    )
    .catch((e) => {
      return e;
    });

  // The error should be a proper ServiceException, not a raw TypeError
  expect(actual).toBeDefined();
  expect(actual).not.toBeInstanceOf(TypeError);
  expect(actual.$metadata.httpStatusCode).toBe(500);
  expect(actual.message).toBe("UnknownError");
  expect(actual.Error).toEqual({
    Type: undefined,
    Code: undefined,
    Message: "UnknownError",
  });
});
