import { ChecksumConstructor, Decoder, HashConstructor, HttpRequest, Pluggable } from "@smithy/types";

import { accountIdDefaultMiddleware, accountIdDefaultMiddlewareOptions } from "./account-id-default";
import { addChecksumHeadersMiddleware, addChecksumHeadersMiddlewareOptions } from "./add-checksum-headers";
import { addGlacierApiVersionMiddleware, addGlacierApiVersionMiddlewareOptions } from "./add-glacier-api-version";

/**
 * @public
 */
export interface GlacierMiddlewareInputConfig {}

export interface PreviouslyResolved {
  apiVersion: string;
  sha256: ChecksumConstructor | HashConstructor;
  utf8Decoder: Decoder;
  bodyChecksumGenerator: (
    request: HttpRequest,
    Options: { sha256: ChecksumConstructor | HashConstructor; utf8Decoder: Decoder }
  ) => Promise<[string, string]>;
}

export const getGlacierPlugin = (config: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(accountIdDefaultMiddleware(), accountIdDefaultMiddlewareOptions);
    clientStack.add(addGlacierApiVersionMiddleware(config), addGlacierApiVersionMiddlewareOptions);
    clientStack.add(addChecksumHeadersMiddleware(config), addChecksumHeadersMiddlewareOptions);
  },
});
