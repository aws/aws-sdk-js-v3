// smithy-typescript generated code
import {
  getAwsRegionExtensionConfiguration,
  resolveAwsRegionExtensionConfiguration,
} from "@aws-sdk/region-config-resolver";
import { getHttpHandlerExtensionConfiguration, resolveHttpHandlerRuntimeConfig } from "@smithy/protocol-http";
import { getDefaultExtensionConfiguration, resolveDefaultRuntimeConfig } from "@smithy/smithy-client";

import { getHttpAuthExtensionConfiguration, resolveHttpAuthRuntimeConfig } from "./auth/httpAuthExtensionConfiguration";
import { NotificationsContactsExtensionConfiguration } from "./extensionConfiguration";

/**
 * @public
 */
export interface RuntimeExtension {
  configure(extensionConfiguration: NotificationsContactsExtensionConfiguration): void;
}

/**
 * @public
 */
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}

const asPartial = <T extends Partial<NotificationsContactsExtensionConfiguration>>(t: T) => t;

/**
 * @internal
 */
export const resolveRuntimeExtensions = (runtimeConfig: any, extensions: RuntimeExtension[]) => {
  const extensionConfiguration: NotificationsContactsExtensionConfiguration = {
    ...asPartial(getAwsRegionExtensionConfiguration(runtimeConfig)),
    ...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
    ...asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig)),
    ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig)),
  };

  extensions.forEach((extension) => extension.configure(extensionConfiguration));

  return {
    ...runtimeConfig,
    ...resolveAwsRegionExtensionConfiguration(extensionConfiguration),
    ...resolveDefaultRuntimeConfig(extensionConfiguration),
    ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
    ...resolveHttpAuthRuntimeConfig(extensionConfiguration),
  };
};
