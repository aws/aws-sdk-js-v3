// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Web Services Outposts is a fully managed service that extends Amazon Web Services infrastructure, APIs, and tools to
 *       customer premises. By providing local access to Amazon Web Services managed infrastructure, Amazon Web Services Outposts enables
 *       customers to build and run applications on premises using the same programming interfaces as
 *       in Amazon Web Services Regions, while using local compute and storage resources for lower latency and local
 *       data processing needs.</p>
 *          <p>You can use certain Amazon EC2 API actions for Amazon Web Services Outposts. For more information on these API actions, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/operation-list-outposts.html">Amazon Web Services Outposts actions</a> in the <i>Amazon EC2 API Reference</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./OutpostsClient";
export * from "./Outposts";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { OutpostsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { OutpostsServiceException } from "./models/OutpostsServiceException";
