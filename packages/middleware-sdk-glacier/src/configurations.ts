import { Decoder, HashConstructor, HttpRequest, Pluggable } from "@aws-sdk/types";

import { accountIdDefaultMiddleware, accountIdDefaultMiddlewareOptions } from "./account-id-default";
import { addChecksumHeadersMiddleware, addChecksumHeadersMiddlewareOptions } from "./add-checksum-headers";
import { addGlacierApiVersionMiddleware, addGlacierApiVersionMiddlewareOptions } from "./add-glacier-api-version";

export interface GlacierMiddlewareInputConfig {}

interface PreviouslyResolved {
  apiVersion: string;
  sha256: HashConstructor;
  utf8Decoder: Decoder;
  bodyChecksumGenerator: (
    request: HttpRequest,
    Options: { sha256: HashConstructor; utf8Decoder: Decoder }
  ) => Promise<[string, string]>;
}

export interface ResolvedGlacierMiddlewareConfig {
  apiVersion: string;
  sha256: HashConstructor;
  utf8Decoder: Decoder;
  bodyChecksumGenerator: (
    request: HttpRequest,
    Options: { sha256: HashConstructor; utf8Decoder: Decoder }
  ) => Promise<[string, string]>;
}

export function resolveGlacierMiddlewareConfig<T>(
  input: T & PreviouslyResolved & GlacierMiddlewareInputConfig
): T & ResolvedGlacierMiddlewareConfig {
  return {
    ...input,
  };
}

export const getGlacierPlugin = (config: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(accountIdDefaultMiddleware(), accountIdDefaultMiddlewareOptions);
    clientStack.add(addGlacierApiVersionMiddleware(config), addGlacierApiVersionMiddlewareOptions);
    clientStack.add(addChecksumHeadersMiddleware(config), addChecksumHeadersMiddlewareOptions);
  },
});
