import { ReadStream, statSync } from "node:fs";

import { runtimeConfigShared as shared } from "./runtimeConfig.shared";

/**
 * @internal
 */
export const runtimeConfig = {
  ...shared,
  runtime: "node",
  // Use statSync (follows symlinks) rather than lstatSync so that the size of an
  // fs.ReadStream opened on a symlink matches the target file the stream reads.
  statSync,
  isFileReadStream(f: unknown): f is ReadStream {
    return f instanceof ReadStream;
  },
};
