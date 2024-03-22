import type {
  ISmithyModelOperationShape,
  ISmithyModelShapeId,
  ISmithyModelStructureShape,
  ISmithyModelTraits,
  RuntimeModelInterpreterDeserialization,
  RuntimeModelInterpreterSerialization,
} from "@smithy/core";
import { RequestBuilder, requestBuilder } from "@smithy/core";
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

/**
 *
 * Model runtime interpreter for RestJson1.
 *
 * @internal
 *
 */
export class AwsRestJson1
  extends AwsRuntimeModelInterpreter
  implements RuntimeModelInterpreterSerialization, RuntimeModelInterpreterDeserialization
{
  protected parameterNameMap = parameterNameMap;

  public async serialize(
    input: any,
    operationShapeId: ISmithyModelShapeId,
    context: SerdeContext
  ): Promise<HttpRequest> {
    const operationShape = this.se_0_getOperationShape(operationShapeId);
    const requestShape = this.se_1_getRequestShape(operationShape.input.target);
    const b = requestBuilder(input, context);
    const http = operationShape.traits["smithy.api#http"];
    this.se_2_traitHttp(http, b);

    const headers = this.se_2_initHeaders();
    const query = this.se_2_initQuery();

    let body: any = undefined;
    let jsonStringifyBody: boolean | undefined = undefined;

    await this.se_3_iterateRequestShapeMembers(
      Object.entries(requestShape.members),
      async ([name, { target, traits = {} }]) => {
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
          body = this.se_4_memberTraitHttpPayload(httpPayload, name, input);
        } else if (httpHeader) {
          this.se_4_memberTraitHttpHeader(httpHeader, name, input, headers);
        } else if (httpLabel) {
          this.se_4_memberTraitHttpLabel(httpLabel, name, input, b);
        } else if (httpQuery) {
          this.se_4_memberTraitHttpQuery(httpQuery, name, input, query);
        } else {
          this.se_4_memberWithoutTrait(() => {
            if (jsonStringifyBody === false) {
              throw new Error("incompatible httpPayload member and body member.");
            }
            if (input[name] != null) {
              body[jsonName ?? name] = this.serializeShape(input[name], target, context);
            }
            jsonStringifyBody = true;
          });
        }
      }
    );

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
      this.de_0_handleErrorStatusCode(httpResponse);
    }

    const operationShape = this.de_1_getOperationShape(operationShapeId);
    const responseShape = this.de_2_getResponseShape(operationShape.output.target);

    let parsedJsonBody: any;
    const output = this.de_3_initializeOutputWithMetadata(httpResponse);

    await this.de_5_iterateResponseShapeMembers(
      Object.entries(responseShape.members),
      async ([name, { target, traits = {} }]) => {
        const jsonName = traits["smithy.api#jsonName"];
        const httpResponseCode = traits["smithy.api#httpResponseCode"];
        const httpHeader = traits["smithy.api#httpHeader"];
        const httpPayload = traits["smithy.api#httpPayload"];

        if (httpResponseCode) {
          this.de_6_memberTraitHttpResponseCode(httpResponseCode, name, output, httpResponse);
        } else if (httpHeader) {
          this.de_6_memberTraitHttpHeader(httpHeader, name, output, httpResponse);
        } else if (httpPayload) {
          await this.de_6_memberTraitHttpPayload(httpPayload, name, output, httpResponse, context);
        } else {
          await this.de_6_memberWithoutTrait(async () => {
            if (!parsedJsonBody) {
              parsedJsonBody = await parseJsonBody(httpResponse.body, context);
            }
            output[name] = this.deserializeShape(parsedJsonBody[jsonName ?? name], target, context);
          });
        }
      }
    );

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

  de_0_handleErrorStatusCode(httpResponse: HttpResponse): void {
    // TODO: defer to de_CommandError.
    throw new Error("error handler not yet implemented");
  }

  de_1_getOperationShape(operationShapeId: ISmithyModelShapeId): ISmithyModelOperationShape {
    return this.getShape(operationShapeId);
  }

  de_2_getResponseShape(responseShapeId: ISmithyModelShapeId): ISmithyModelStructureShape {
    return this.getShape(responseShapeId);
  }

  de_3_initializeOutputWithMetadata(httpResponse: HttpResponse): any {
    return {
      $metadata: deserializeMetadata(httpResponse),
    };
  }

  async de_5_iterateResponseShapeMembers(
    entries: [string, ISmithyModelStructureShape["members"][""]][],
    iterationFn: (entry: (typeof entries)[0]) => Promise<void>
  ): Promise<void> {
    await Promise.all(entries.map(iterationFn));
  }

  de_6_memberTraitHttpHeader(
    httpHeader: ISmithyModelTraits["smithy.api#httpHeader"],
    memberName: string,
    output: any,
    httpResponse: HttpResponse
  ): void {
    if (httpResponse.headers[httpHeader!.toLowerCase()]) {
      output[memberName] = httpResponse.headers[httpHeader!.toLowerCase()];
    }
  }

  async de_6_memberTraitHttpPayload(
    httpPayload: ISmithyModelTraits["smithy.api#httpPayload"],
    memberName: string,
    output: any,
    httpResponse: HttpResponse,
    context: SerdeContext
  ): Promise<void> {
    output[memberName] = await collectBody(httpResponse.body, context);
  }

  de_6_memberTraitHttpResponseCode(
    httpResponseCode: ISmithyModelTraits["smithy.api#httpResponseCode"],
    memberName: string,
    output: any,
    httpResponse: HttpResponse
  ): void {
    output[memberName] = httpResponse.statusCode;
  }

  async de_6_memberWithoutTrait(fn: () => void | Promise<void>): Promise<void> {
    await fn();
  }

  se_0_getOperationShape(operationShapeId: ISmithyModelShapeId): ISmithyModelOperationShape {
    return this.getShape(operationShapeId);
  }

  se_1_getRequestShape(requestShapeId: ISmithyModelShapeId): ISmithyModelStructureShape {
    return this.getShape(requestShapeId);
  }

  se_2_initHeaders(): Record<string, string> {
    return {
      "content-type": "application/json",
    };
  }

  se_2_initQuery(): Record<string, string> {
    return {};
  }

  se_2_traitHttp(http: ISmithyModelTraits["smithy.api#http"], b: RequestBuilder): void {
    b.bp(http!.uri);
  }

  async se_3_iterateRequestShapeMembers(
    entries: [string, ISmithyModelStructureShape["members"][""]][],
    iterationFn: (entry: (typeof entries)[0]) => Promise<void>
  ): Promise<void> {
    await Promise.all(entries.map(iterationFn));
  }

  se_4_memberTraitHttpHeader(
    httpHeader: ISmithyModelTraits["smithy.api#httpHeader"],
    memberName: string,
    input: any,
    headers: Record<string, string>
  ): void {
    headers[httpHeader!] = input[memberName];
  }

  se_4_memberTraitHttpLabel(
    httpLabel: ISmithyModelTraits["smithy.api#httpLabel"],
    memberName: string,
    input: any,
    b: RequestBuilder
  ): void {
    // TODO: determine label greediness.
    const isGreedyLabel = false;
    b.p(memberName, () => input[memberName], `{${memberName}}`, isGreedyLabel);
  }

  se_4_memberTraitHttpPayload(
    httpPayload: ISmithyModelTraits["smithy.api#httpPayload"],
    memberName: string,
    input: any
  ): any {
    return input[memberName];
  }

  se_4_memberTraitHttpQuery(
    httpQuery: ISmithyModelTraits["smithy.api#httpQuery"],
    memberName: string,
    input: any,
    query: Record<string, string>
  ): void {
    query[httpQuery!] = input[memberName];
  }

  se_4_memberWithoutTrait(fn: () => void | Promise<void>): void | Promise<void> {
    return fn();
  }
}

const deserializeMetadata = (output: HttpResponse): ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});
