import { requestBuilder } from "@smithy/core";
import {
  _json,
  collectBody,
  expectBoolean,
  expectByte,
  expectNonNull,
  expectNumber,
  expectString,
  expectUnion,
  parseEpochTimestamp,
  serializeFloat,
} from "@smithy/smithy-client";
import type { HttpRequest, HttpResponse, ResponseMetadata, SerdeContext } from "@smithy/types";

import { parseJsonBody } from "../json/parseJsonBody";
import { AwsRuntimeModelInterpreter } from "./AwsRuntimeModelInterpreter";
import { parameterNameMap } from "./parameterNameMap";
import type { ISmithyModelOperationShape, ISmithyModelShapeId, ISmithyModelStructureShape } from "./smithy/SmithyModel";

/**
 *
 * Model runtime interpreter for RestJson1.
 *
 * @internal
 *
 */
export class AwsRestJson1 extends AwsRuntimeModelInterpreter {
  protected parameterNameMap = parameterNameMap;

  public async serialize(
    input: any,
    operationShapeId: ISmithyModelShapeId,
    context: SerdeContext
  ): Promise<HttpRequest> {
    const operationShape = this.getShape(operationShapeId) as ISmithyModelOperationShape;
    const requestShape = this.getShape(operationShape.input.target) as ISmithyModelStructureShape;
    const b = requestBuilder(input, context);
    const http = operationShape.traits["smithy.api#http"];
    b.bp(http!.uri);

    const headers = {
      "content-type": "application/json",
    };
    const query = {};

    let body: any = undefined;
    let jsonStringifyBody: boolean | undefined = undefined;

    for (const [name, { target, traits = {} }] of Object.entries(requestShape.members)) {
      const httpHeader = traits["smithy.api#httpHeader"];
      const httpPayload = !!traits["smithy.api#httpPayload"];
      const httpLabel = !!traits["smithy.api#httpLabel"];
      const httpQuery = traits["smithy.api#httpQuery"];
      const jsonName = traits["smithy.api#jsonName"];

      if (input[name] == null) {
        return;
      }

      if (httpPayload) {
        if (body !== undefined) {
          throw new Error("incompatible httpPayload member and body member.");
        }
        jsonStringifyBody = false;
        body = input[name];
      } else if (httpHeader) {
        headers[httpHeader!] = input[name];
      } else if (httpLabel) {
        // TODO: determine label greediness.
        const isGreedyLabel = false;
        b.p(name, () => input[name], `{${name}}`, isGreedyLabel);
      } else if (httpQuery) {
        query[httpQuery!] = input[name];
      } else {
        if (jsonStringifyBody === false) {
          throw new Error("incompatible httpPayload member and body member.");
        }
        if (input[name] != null) {
          body[jsonName ?? name] = this.serializeShape(input[name], target, context);
        }
        jsonStringifyBody = true;
      }
    }

    if (jsonStringifyBody) {
      body = JSON.stringify(body);
    }

    return b.m(http!.method).h(headers).q(query).b(body).build();
  }

  public async deserialize<O = any>(
    httpResponse: HttpResponse,
    operationShapeId: ISmithyModelShapeId,
    context: SerdeContext
  ): Promise<O> {
    if (httpResponse.statusCode >= 300) {
      // TODO: defer to de_CommandError.
      throw new Error("error handler not yet implemented");
    }

    const operationShape = this.getShape(operationShapeId) as ISmithyModelOperationShape;
    const responseShape = this.getShape(operationShape.output.target) as ISmithyModelStructureShape;

    let parsedJsonBody: any;
    const output: any = {
      $metadata: deserializeMetadata(httpResponse),
    };

    for (const [name, { target, traits = {} }] of Object.entries(responseShape.members)) {
      const jsonName = traits["smithy.api#jsonName"];
      const httpResponseCode = traits["smithy.api#httpResponseCode"];
      const httpHeader = traits["smithy.api#httpHeader"];
      const httpPayload = traits["smithy.api#httpPayload"];

      if (httpResponseCode) {
        output[name] = httpResponse.statusCode;
      } else if (httpHeader) {
        if (httpResponse.headers[httpHeader!.toLowerCase()]) {
          output[name] = httpResponse.headers[httpHeader!.toLowerCase()];
        }
      } else if (httpPayload) {
        output[name] = await collectBody(httpResponse.body, context);
      } else {
        if (!parsedJsonBody) {
          parsedJsonBody = await parseJsonBody(httpResponse.body, context);
        }
        output[name] = this.deserializeShape(parsedJsonBody[jsonName ?? name], target, context);
      }
    }

    return output as O;
  }

  private serializeShape(input: any, shapeId: ISmithyModelShapeId, context: SerdeContext) {
    const shape = this.getShape(shapeId);
    switch (shape.type) {
      case "blob":
        return context.base64Encoder(input);
      case "float":
        return serializeFloat(input as number);
      case "structure":
        const struct = {} as any;
        for (const [name, { target, traits = {} }] of Object.entries((shape as ISmithyModelStructureShape).members)) {
          const jsonName = traits["smithy.api#jsonName"];
          if (input[name] != null) {
            struct[jsonName ?? name] = this.serializeShape(input[name], target, context);
          }
        }
        return struct;
      case "timestamp":
        // TODO handle various timestamp formats
        return Math.round((input as Date).getTime() / 1000);
      case "union":
      // TODO: handle other types
    }
    return _json(input);
  }

  private deserializeShape(output: any, shapeId: ISmithyModelShapeId, context: SerdeContext) {
    const shape = this.getShape(shapeId);
    switch (shape.type) {
      case "blob":
        return context.base64Decoder(output as string);
      case "union":
        return expectUnion(output as object);
      case "boolean":
        return expectBoolean(output as boolean);
      case "byte":
        return expectByte(output as number);
      case "string":
        return expectString(output as string);
      case "timestamp":
        // TODO handle various timestamp formats
        return expectNonNull(parseEpochTimestamp(expectNumber(output as number)));
      case "structure":
        const struct = {} as any;
        for (const [name, { target, traits = {} }] of Object.entries((shape as ISmithyModelStructureShape).members)) {
          const jsonName = traits["smithy.api#jsonName"];
          if (output?.[jsonName ?? name]) {
            struct[name] = this.deserializeShape(output[jsonName ?? name], target, context);
          }
        }
        return struct;
      case "float":
      // TODO: handle various number types, BigInt etc.
      // TODO: handle lazyjsonstring mediatype
      // TODO: handle other types
    }
    return _json(output);
  }
}

const deserializeMetadata = (output: HttpResponse): ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});
