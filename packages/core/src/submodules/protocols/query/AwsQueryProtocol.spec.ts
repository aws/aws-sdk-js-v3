import { HttpResponse } from "@smithy/protocol-http";
import { describe, expect, test as it } from "vitest";

import { context } from "../test-schema.spec";
import { AwsQueryProtocol } from "./AwsQueryProtocol";

describe(AwsQueryProtocol.name, () => {
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
});
