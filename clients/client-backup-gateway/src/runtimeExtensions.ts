// smithy-typescript generated code
import { getAwsRegionExtensionConfiguration, resolveAwsRegionExtensionConfiguration } from "@aws-sdk/core/client";
import { getDefaultExtensionConfiguration, resolveDefaultRuntimeConfig } from "@smithy/core/client";
import { getHttpHandlerExtensionConfiguration, resolveHttpHandlerRuntimeConfig } from "@smithy/core/protocols";

import { getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig } from "./auth/httpAuthExtensionConfiguration";
import type { BackupGatewayExtensionConfiguration } from "./extensionConfiguration";

/**
 * @public
 */
export interface RuntimeExtension {
  configure(extensionConfiguration: BackupGatewayExtensionConfiguration): void;
}

/**
 * @public
 */
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}

/**
 * @internal
 */
export const resolveRuntimeExtensions = (runtimeConfig: any, extensions: RuntimeExtension[]) => {
  const extensionConfiguration: BackupGatewayExtensionConfiguration = Object.assign(
    getAwsRegionExtensionConfiguration(runtimeConfig),
    getDefaultExtensionConfiguration(runtimeConfig),
    getHttpHandlerExtensionConfiguration(runtimeConfig),
    getHttpAuthExtensionConfiguration(runtimeConfig)
  );

  extensions.forEach((extension) => extension.configure(extensionConfiguration));

  return Object.assign(
    runtimeConfig,
    resolveAwsRegionExtensionConfiguration(extensionConfiguration),
    resolveDefaultRuntimeConfig(extensionConfiguration),
    resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    resolveHttpAuthRuntimeConfig(extensionConfiguration)
  );
};
