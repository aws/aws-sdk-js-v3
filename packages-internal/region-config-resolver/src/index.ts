export {
  REGION_ENV_NAME,
  REGION_INI_NAME,
  NODE_REGION_CONFIG_OPTIONS,
  NODE_REGION_CONFIG_FILE_OPTIONS,
  resolveRegionConfig,
  stsRegionDefaultResolver,
  stsRegionWarning as warning,
  getAwsRegionExtensionConfiguration,
  resolveAwsRegionExtensionConfiguration,
} from "@aws-sdk/core/client";
export type { RegionInputConfig, RegionResolvedConfig, RegionExtensionRuntimeConfigType } from "@aws-sdk/core/client";
