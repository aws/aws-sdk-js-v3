import { HttpRequest } from "@aws-sdk/protocol-http";
import { parseQueryString } from "@aws-sdk/querystring-parser";
import {
  EndpointBearer,
  EndpointV2,
  HandlerExecutionContext,
  RequestSerializer,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOutput,
  SerializeMiddleware,
} from "@aws-sdk/types";

import type { V1OrV2Endpoint } from "./serdePlugin";

export const serializerMiddleware =
  <Input extends object, Output extends object, RuntimeUtils extends EndpointBearer>(
    options: V1OrV2Endpoint<RuntimeUtils>,
    serializer: RequestSerializer<any, RuntimeUtils>
  ): SerializeMiddleware<Input, Output> =>
  (next: SerializeHandler<Input, Output>, context: HandlerExecutionContext): SerializeHandler<Input, Output> =>
  async (args: SerializeHandlerArguments<Input>): Promise<SerializeHandlerOutput<Output>> => {
    const endpoint =
      context.endpointV2?.url && options.urlParser
        ? async () => options.urlParser!(context.endpointV2.url as URL)
        : options.endpoint;

    if (!endpoint) {
      throw new Error("No valid endpoint provider available.");
    }

    const request: HttpRequest = await serializer(args.input, { ...options, endpoint });

    return next({
      ...args,
      request,
    });
  };
