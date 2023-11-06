// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>The AWS Migration Hub API methods help to obtain server and application migration status
 *          and integrate your resource-specific migration tool by providing a programmatic interface
 *          to Migration Hub.</p>
 *          <p>Remember that you must set your AWS Migration Hub home region before you call any of
 *          these APIs, or a <code>HomeRegionNotSetException</code> error will be returned. Also, you
 *          must make the API calls while in your home region.</p>
 *
 * @packageDocumentation
 */
export * from "./MigrationHubClient";
export * from "./MigrationHub";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export { RuntimeExtension } from "./runtimeExtensions";
export { MigrationHubExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

import "@aws-sdk/util-endpoints";

export { MigrationHubServiceException } from "./models/MigrationHubServiceException";
