// smithy-typescript generated code
import { getDefaultExtensionConfiguration, resolveDefaultRuntimeConfig } from "@smithy/smithy-client";

import { AlexaForBusinessExtensionConfiguration } from "./extensionConfiguration";

/**
 * @public
 */
export interface RuntimeExtension {
  configure(clientConfiguration: AlexaForBusinessExtensionConfiguration): void;
}

/**
 * @public
 */
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}

const asPartial = <T extends Partial<AlexaForBusinessExtensionConfiguration>>(t: T) => t;

/**
 * @internal
 */
export const resolveRuntimeExtensions = (runtimeConfig: any, extensions: RuntimeExtension[]) => {
  const extensionConfiguration: AlexaForBusinessExtensionConfiguration = {
    ...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
  };

  extensions.forEach((extension) => extension.configure(extensionConfiguration));

  return {
    ...runtimeConfig,
    ...resolveDefaultRuntimeConfig(extensionConfiguration),
  };
};
