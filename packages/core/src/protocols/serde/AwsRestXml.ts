// import { XmlNode } from "[@aws-sdk]/xml-builder";
import { requestBuilder } from "@smithy/core";
import { RuntimeModelInterpreter } from "@smithy/core";
import { ISmithyModelShapeId, ISmithyModelStructureShape } from "@smithy/core";
import { HttpRequest as IHttpRequest, HttpResponse as IHttpResponse, SerdeContext } from "@smithy/types";

export class AwsRestXml extends RuntimeModelInterpreter {
  public async serialize<I>(
    input: I,
    requestShapeId: ISmithyModelShapeId,
    context: SerdeContext
  ): Promise<IHttpRequest> {
    const requestShape: ISmithyModelStructureShape = this.getShape(requestShapeId);
    const b = requestBuilder(input, context);
    const headers = {} as Record<string, string>;
    const query = {} as Record<string, string>;
    let body: any;
    for (const [name, { target, traits }] of Object.entries(requestShape.members)) {
      const headerName = traits["smithy.api#httpHeader"];
      const isPayload = traits["smithy.api#httpPayload"];
      if (traits["smithy.api#httpHeader"]) {
      }
    }
    return null as any;
  }

  public async deserialize<O>(
    httpResponse: IHttpResponse,
    responseShapeId: ISmithyModelShapeId,
    context: SerdeContext
  ): Promise<O> {
    const responseShape: ISmithyModelStructureShape = this.getShape(responseShapeId);
    return null as any;
  }
}
