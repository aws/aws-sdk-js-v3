import { lstatSync } from "fs";

import { runtimeConfigShared as shared } from "./runtimeConfig.shared";

/**
 * @internal
 */
export const runtimeConfig = {
  ...shared,
  runtime: "node",
  lstatSync,
};
