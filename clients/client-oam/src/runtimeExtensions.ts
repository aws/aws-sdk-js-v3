// smithy-typescript generated code
import { getDefaultExtensionConfiguration, resolveDefaultRuntimeConfig } from "@smithy/smithy-client";

import { OAMExtensionConfiguration } from "./extensionConfiguration";

/**
 * @public
 */
export interface RuntimeExtension {
  configure(clientConfiguration: OAMExtensionConfiguration): void;
}

/**
 * @public
 */
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}

const asPartial = <T extends Partial<OAMExtensionConfiguration>>(t: T) => t;

/**
 * @internal
 */
export const resolveRuntimeExtensions = (runtimeConfig: any, extensions: RuntimeExtension[]) => {
  const extensionConfiguration: OAMExtensionConfiguration = {
    ...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
  };

  extensions.forEach((extension) => extension.configure(extensionConfiguration));

  return {
    ...runtimeConfig,
    ...resolveDefaultRuntimeConfig(extensionConfiguration),
  };
};
