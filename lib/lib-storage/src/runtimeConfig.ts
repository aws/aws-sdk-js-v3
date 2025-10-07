import { lstatSync, ReadStream } from "fs";

import { runtimeConfigShared as shared } from "./runtimeConfig.shared";

/**
 * @internal
 */
export const runtimeConfig = {
  ...shared,
  runtime: "node",
  lstatSync,
  isFileReadStream(f: unknown): f is ReadStream {
    return f instanceof ReadStream;
  },
};
