// smithy-typescript generated code
import { getDefaultExtensionConfiguration, resolveDefaultRuntimeConfig } from "@smithy/smithy-client";

import { ConnectParticipantExtensionConfiguration } from "./extensionConfiguration";

/**
 * @public
 */
export interface RuntimeExtension {
  configure(clientConfiguration: ConnectParticipantExtensionConfiguration): void;
}

/**
 * @public
 */
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}

const asPartial = <T extends Partial<ConnectParticipantExtensionConfiguration>>(t: T) => t;

/**
 * @internal
 */
export const resolveRuntimeExtensions = (runtimeConfig: any, extensions: RuntimeExtension[]) => {
  const extensionConfiguration: ConnectParticipantExtensionConfiguration = {
    ...asPartial(getDefaultExtensionConfiguration(runtimeConfig)),
  };

  extensions.forEach((extension) => extension.configure(extensionConfiguration));

  return {
    ...runtimeConfig,
    ...resolveDefaultRuntimeConfig(extensionConfiguration),
  };
};
