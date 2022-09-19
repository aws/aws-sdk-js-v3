import { HttpRequest } from "@aws-sdk/protocol-http";
import { parseQueryString } from "@aws-sdk/querystring-parser";
import {
  EndpointV2,
  HandlerExecutionContext,
  MetadataBearer,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOutput,
  SerializeMiddleware,
} from "@aws-sdk/types";

import { getEndpointFromInstructions } from "./adaptors/getEndpointFromInstructions";
import { EndpointResolvedConfig } from "./resolveEndpointConfig";
import { EndpointParameterInstructions } from "./types";

/**
 * @private
 */
export const endpointMiddleware = ({
  config,
  instructions,
}: {
  config: EndpointResolvedConfig;
  instructions: EndpointParameterInstructions;
}): SerializeMiddleware<any, any> => {
  return <Output extends MetadataBearer>(
      next: SerializeHandler<any, Output>,
      context: HandlerExecutionContext
    ): SerializeHandler<any, Output> =>
    async (args: SerializeHandlerArguments<any>): Promise<SerializeHandlerOutput<Output>> => {
      if (!HttpRequest.isInstance(args.request)) {
        return next(args);
      }
      const { request } = args;

      const endpoint: EndpointV2 = await getEndpointFromInstructions(args.input, instructions, config, context);

      context.endpointV2 = endpoint;
      context.authSchemes = endpoint.properties?.authSchemes;

      request.headers = Object.entries(endpoint.headers || {}).reduce(
        (headers, [name, values]) => ({
          ...headers,
          [name]: values.join(","),
        }),
        {} as Record<string, string>
      );
      request.hostname = endpoint.url.hostname;
      request.path = endpoint.url.pathname;
      request.port = parseInt(endpoint.url.port);
      request.protocol = endpoint.url.protocol;
      request.query = parseQueryString(endpoint.url.search);

      return next({
        ...args,
      });
    };
};
