// smithy-typescript generated code
/* eslint-disable */
/**
 * Multi-party approval is a capability of [Organizations](http://aws.amazon.com/organizations) that allows you to protect a predefined list of operations through a distributed approval process. Use Multi-party approval to establish approval workflows and transform security processes into team-based decisions.
 *
 * **When to use Multi-party approval**:
 *
 * - You need to align with the Zero Trust principle of "never trust, always verify"
 * - You need to make sure that the right humans have access to the right things in the right way
 * - You need distributed decision-making for sensitive or critical operations
 * - You need to protect against unintended operations on sensitive or critical resources
 * - You need formal reviews and approvals for auditing or compliance reasons
 *
 * For more information, see [What is Multi-party approval](https://docs.aws.amazon.com/mpa/latest/userguide/what-is.html) in the *Multi-party approval User Guide*.
 *
 * @packageDocumentation
 */
export * from "./MPAClient";
export * from "./MPA";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { MPAExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { MPAServiceException } from "./models/MPAServiceException";
