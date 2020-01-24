import {
  accountIdDefaultMiddleware,
  accountIdDefaultMiddlewareOptions
} from "./account-id-default";
import {
  addGlacierApiVersionMiddleware,
  addGlacierApiVersionMiddlewareOptions
} from "./add-glacier-api-version";
import { Decoder, HashConstructor, Pluggable } from "@aws-sdk/types";
import {
  addChecksumHeadersMiddleware,
  addChecksumHeadersMiddlewareOptions
} from "./add-checksum-headers";

export interface GlacierMiddlewareInputConfig {}

interface PreviouslyResolved {
  apiVersion: string;
  runtime: string;
  sha256: HashConstructor;
  utf8Decoder: Decoder;
  createReadStream: any;
  streamReader: any;
  blobReader: any;
}

export interface ResolvedGlacierMiddlewareConfig {
  apiVersion: string;
  runtime: string;
  sha256: HashConstructor;
  utf8Decoder: Decoder;
  createReadStream: any;
  streamReader: any;
  blobReader: any;
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
    clientStack.add(
      addChecksumHeadersMiddleware(config),
      addChecksumHeadersMiddlewareOptions
    );
  }
});
