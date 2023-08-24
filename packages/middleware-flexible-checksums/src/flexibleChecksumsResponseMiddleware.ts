import { HttpRequest, HttpResponse } from "@smithy/protocol-http";
import {
  DeserializeHandler,
  DeserializeHandlerArguments,
  DeserializeHandlerOutput,
  DeserializeMiddleware,
  MetadataBearer,
  RelativeMiddlewareOptions,
} from "@smithy/types";

import { PreviouslyResolved } from "./configuration";
import { FlexibleChecksumsMiddlewareConfig } from "./getFlexibleChecksumsPlugin";
import { validateChecksumFromResponse } from "./validateChecksumFromResponse";

/**
 * @internal
 */
export const flexibleChecksumsResponseMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "flexibleChecksumsResponseMiddleware",
  toMiddleware: "deserializerMiddleware",
  relation: "after",
  tags: ["BODY_CHECKSUM"],
  override: true,
};

/**
 * @internal
 *
 * The validation counterpart to the flexibleChecksumsMiddleware.
 */
export const flexibleChecksumsResponseMiddleware =
  (config: PreviouslyResolved, middlewareConfig: FlexibleChecksumsMiddlewareConfig): DeserializeMiddleware<any, any> =>
  <Output extends MetadataBearer>(next: DeserializeHandler<any, Output>): DeserializeHandler<any, Output> =>
  async (args: DeserializeHandlerArguments<any>): Promise<DeserializeHandlerOutput<Output>> => {
    if (!HttpRequest.isInstance(args.request)) {
      return next(args);
    }

    const input = args.input;
    const result = await next(args);

    const { requestValidationModeMember, responseAlgorithms } = middlewareConfig;
    // @ts-ignore Element implicitly has an 'any' type for input[requestValidationModeMember]
    if (requestValidationModeMember && input[requestValidationModeMember] === "ENABLED") {
      await validateChecksumFromResponse(result.response as HttpResponse, {
        config,
        responseAlgorithms,
      });
    }

    return result;
  };
