import { RuntimeTarget } from "@aws-sdk/build-types";
import { join, dirname } from "path";
export function defaultImportDestination(runtime: RuntimeTarget): string {
  const projectRoot = dirname(dirname(dirname(__dirname)));
  switch (runtime) {
    case "node":
      return join(projectRoot, "clients", "node");
    case "browser":
      return join(projectRoot, "clients", "browser");
    case "universal":
      return join(projectRoot, "clients", "universal");
    default:
      throw new Error(
        `Cannot infer default import target of the runtime ${runtime}`
      );
  }
}
