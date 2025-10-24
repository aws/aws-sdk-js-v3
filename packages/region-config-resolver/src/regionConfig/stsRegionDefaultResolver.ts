import { NODE_REGION_CONFIG_FILE_OPTIONS, NODE_REGION_CONFIG_OPTIONS } from "@smithy/config-resolver";
import { type LocalConfigOptions, loadConfig } from "@smithy/node-config-provider";

/**
 * Default region provider for STS when used as an inner client.
 * Differs from the default region resolver in that us-east-1 is the fallback instead of throwing an error.
 *
 * @internal
 */
export function stsRegionDefaultResolver(loaderConfig: LocalConfigOptions = {}) {
  return loadConfig(
    {
      ...NODE_REGION_CONFIG_OPTIONS,
      async default() {
        return "us-east-1";
      },
    },
    { ...NODE_REGION_CONFIG_FILE_OPTIONS, ...loaderConfig }
  );
}
