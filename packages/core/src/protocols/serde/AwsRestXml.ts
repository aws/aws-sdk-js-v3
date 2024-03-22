import type { ISmithyModelShapeId } from "@smithy/core";
import type { HttpRequest, HttpResponse, SerdeContext } from "@smithy/types";

import { AwsRuntimeModelInterpreter } from "./AwsRuntimeModelInterpreter";
import { parameterNameMap } from "./parameterNameMap";

/**
 *
 * Model runtime interpreter for AwsRestXml.
 *
 * @internal
 *
 */
export class AwsRestXml extends AwsRuntimeModelInterpreter {
  public parameterNameMap = parameterNameMap;

  public async serialize<I>(
    input: I,
    requestShapeId: ISmithyModelShapeId,
    context: SerdeContext
  ): Promise<HttpRequest> {
    throw new Error("not yet implemented");
  }

  public async deserialize<O>(
    httpResponse: HttpResponse,
    responseShapeId: ISmithyModelShapeId,
    context: SerdeContext
  ): Promise<O> {
    throw new Error("not yet implemented");
  }
}
