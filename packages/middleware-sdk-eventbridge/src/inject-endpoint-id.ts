import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  HandlerExecutionContext,
  Pluggable,
  Provider,
} from "@aws-sdk/types";

type PreviouslyResolved = {
  isCustomEndpoint: boolean;
  useFipsEndpoint: Provider<boolean>;
  useDualstackEndpoint: Provider<boolean>;
};

type Input = {
  EndpointId?: string;
};

/**
 * If `EndpointId` parameter is specified in the request, attempt to modify the
 * request to format of `{EndpointId}.endpoint.events.{dnsSuffix}`.
 * @internal
 */
export const injectEndpointIdMiddleware =
  (config: PreviouslyResolved): BuildMiddleware<Input, any> =>
  (next: BuildHandler<Input, any>, context: HandlerExecutionContext): BuildHandler<Input, any> =>
  async (args: BuildHandlerArguments<Input>): Promise<BuildHandlerOutput<any>> => {
    if (typeof args.input.EndpointId === "undefined") {
      // Skip.
    } else if (config.isCustomEndpoint) {
      context.signing_region = "*";
    } else if ((await config.useFipsEndpoint()) === true) {
      throw new Error(
        "FIPS is not supported with EventBridge multi-region endpoints, please check the useFipsEndpoint configuration."
      );
    } else if (HttpRequest.isInstance(args.request)) {
      const endpointSuffix = getEndpointSuffix(args.request.hostname);
      if (!isValidHostnameComponent(args.input.EndpointId)) {
        throw new Error(`The EndpointId is not a valid domain name component, got ${args.input.EndpointId}.`);
      }
      args.request.hostname = `${args.input.EndpointId}.endpoint.events.${endpointSuffix}`;
      context.signing_region = "*";
    }

    return next(args);
  };

const getEndpointSuffix = (endpoint: string) => {
  const EVENTS_ENDPOINT_PATTERN = /^(.+\.)?events(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
  return endpoint.replace(new RegExp(EVENTS_ENDPOINT_PATTERN), "");
};

const isValidHostnameComponent = (component: string): boolean => {
  // reference: https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.1.
  const HOSTNAME_LABEL_PATTERN = /^[a-zA-Z0-9](([a-zA-Z0-9-]+)?[a-zA-Z0-9])?$/;
  for (const label of component.split(".")) {
    if (!HOSTNAME_LABEL_PATTERN.test(label) || label.length > 63) {
      return false;
    }
  }
  return true;
};

export const injectEndpointIdMiddlewareOptions: BuildHandlerOptions = {
  step: "build",
  tags: ["ENDPOINT_ID"],
  name: "injectEndpointIdMiddleware",
  override: true,
};

export const getInjectEndpointIdPlugin = (options: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (operationStack) => {
    operationStack.add(injectEndpointIdMiddleware(options), injectEndpointIdMiddlewareOptions);
  },
});
