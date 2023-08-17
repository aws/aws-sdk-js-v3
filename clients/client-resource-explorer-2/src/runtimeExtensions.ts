// smithy-typescript generated code
import { getDefaultClientConfiguration, resolveDefaultRuntimeConfig } from "@smithy/types";

import { ResourceExplorer2ClientConfiguration } from "./clientConfiguration";

/**
 * @public
 */
export interface RuntimeExtension {
  configureClient(clientConfiguration: ResourceExplorer2ClientConfiguration): void;
}

/**
 * @public
 */
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}

const asPartial = <T extends Partial<ResourceExplorer2ClientConfiguration>>(t: T) => t;

/**
 * @internal
 */
export const resolveRuntimeExtensions = (runtimeConfig: any, extensions: RuntimeExtension[]) => {
  const clientConfiguration: ResourceExplorer2ClientConfiguration = {
    ...asPartial(getDefaultClientConfiguration(runtimeConfig)),
  };

  extensions.forEach((extension) => extension.configureClient(clientConfiguration));

  return {
    ...runtimeConfig,
    ...resolveDefaultRuntimeConfig(clientConfiguration),
  };
};
