import {
  accountIdDefaultMiddleware,
  accountIdDefaultMiddlewareOptions
} from "./account-id-default";
import {
  addGlacierApiVersionMiddleware,
  addGlacierApiVersionMiddlewareOptions
} from "./add-glacier-api-version";
import { Pluggable } from "@aws-sdk/types";

export interface GlacierMiddlewareInputConfig {}

interface PreviouslyResolved {
  apiVersion: string;
}

export interface ResolvedGlacierMiddlewareConfig {
  apiVersion: string;
}

export function resolveGlacierMiddlewareConfig<T>(
  input: T & PreviouslyResolved & GlacierMiddlewareInputConfig
): T & ResolvedGlacierMiddlewareConfig {
  return {
    ...input
  };
}

export const getGlacierPlugin = (
  config: PreviouslyResolved
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.add(
      accountIdDefaultMiddleware(),
      accountIdDefaultMiddlewareOptions
    );
    clientStack.add(
      addGlacierApiVersionMiddleware(config),
      addGlacierApiVersionMiddlewareOptions
    );
  }
});
