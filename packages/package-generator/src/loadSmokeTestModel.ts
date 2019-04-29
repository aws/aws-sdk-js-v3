import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fromSmokeTestModelJson } from "@aws-sdk/service-model";
import { SmokeTestModel } from "@aws-sdk/build-types";

/**
 * Loads the smoke.json file within the given directory.
 */
export function loadSmokeTestModel(dir: string): SmokeTestModel | undefined {
  // /path/to/service/version/smoke.json
  const versionSmokePath = join(dir, "smoke.json");
  // /path/to/service/smoke.json
  const serviceSmokePath = join(dirname(dir), "smoke.json");

  const smokeFile = loadFile(versionSmokePath) || loadFile(serviceSmokePath);
  if (!smokeFile) {
    return;
  }

  return fromSmokeTestModelJson(smokeFile);
}

function loadFile(filePath: string): string | undefined {
  if (existsSync(filePath)) {
    return readFileSync(filePath, "utf8");
  }
}
