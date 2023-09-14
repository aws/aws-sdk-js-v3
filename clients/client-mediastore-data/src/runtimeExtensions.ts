// smithy-typescript generated code
import { getHttpHandlerExtensionConfiguration, resolveHttpHandlerRuntimeConfig } from "@smithy/protocol-http";
import { getDefaultExtensionConfiguration, resolveDefaultRuntimeConfig } from "@smithy/smithy-client";

import { MediaStoreDataExtensionConfiguration } from "./extensionConfiguration";

/**
 * @public
 */
export interface RuntimeExtension {
  configure(extensionConfiguration: MediaStoreDataExtensionConfiguration): void;
}

/**
 * @public
 */
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}

const asPartial = <T extends Partial<MediaStoreDataExtensionConfiguration>>(t: T) => t;

/**
 * @internal
 */
export const resolveRuntimeExtensions = (runtimeConfig: any, extensions: RuntimeExtension[]) => {
  const extensionConfiguration: MediaStoreDataExtensionConfiguration = {
    ...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
    ...asPartial(getHttpHandlerExtensionConfiguration(runtimeConfig)),
  };

  extensions.forEach((extension) => extension.configure(extensionConfiguration));

  return {
    ...runtimeConfig,
    ...resolveDefaultRuntimeConfig(extensionConfiguration),
    ...resolveHttpHandlerRuntimeConfig(extensionConfiguration),
  };
};
