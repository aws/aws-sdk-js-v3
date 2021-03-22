import { ClientSharedValues } from "./runtimeConfig.shared";
import { lstatSync } from "fs";

/**
 * @internal
 */
export const ClientDefaultValues = {
  ...ClientSharedValues,
  runtime: "node",
  lstatSync,
};
