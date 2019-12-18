import {
  InitializeHandler,
  InitializeMiddleware,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  MetadataBearer,
  Pluggable
} from "@aws-sdk/types";
import { IDENTIFIER_PREFIX_PATTERN } from "./constants";

export interface IdentifierBearer {
  DelegationSetId?: string;
  HostedZoneId?: string;
  Id?: string;
}

const IDENTIFIER_PARAMETERS: Array<keyof IdentifierBearer> = [
  "DelegationSetId",
  "HostedZoneId",
  "Id"
];

export function idNormalizerMiddleware(): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: InitializeHandler<any, Output>
  ): InitializeHandler<any, Output> => async (
    args: InitializeHandlerArguments<any>
  ): Promise<InitializeHandlerOutput<Output>> => {
    const input = { ...(args.input as any) };
    for (const paramName of IDENTIFIER_PARAMETERS) {
      const param = input[paramName];
      if (param) {
        input[paramName] = param.replace(IDENTIFIER_PREFIX_PATTERN, "");
      }
    }

    return next({
      ...args,
      input
    });
  };
}

export const idNormalizerMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["ROUTE53_IDS"],
  name: "idNormalizerMiddleware"
};

export const getIdNormalizerPlugin = (unused: any): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(idNormalizerMiddleware(), idNormalizerMiddlewareOptions);
  }
});
