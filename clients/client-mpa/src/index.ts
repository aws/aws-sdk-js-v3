// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Multi-party approval is a capability of <a href="http://aws.amazon.com/organizations">Organizations</a> that allows you to protect a predefined list of operations through a distributed approval process. Use Multi-party approval to establish approval workflows and transform security processes into team-based decisions.</p> <p> <b>When to use Multi-party approval</b>:</p> <ul> <li> <p>You need to align with the Zero Trust principle of "never trust, always verify"</p> </li> <li> <p>You need to make sure that the right humans have access to the right things in the right way</p> </li> <li> <p>You need distributed decision-making for sensitive or critical operations</p> </li> <li> <p>You need to protect against unintended operations on sensitive or critical resources</p> </li> <li> <p>You need formal reviews and approvals for auditing or compliance reasons</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/what-is.html">What is Multi-party approval</a> in the <i>Multi-party approval User Guide</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./MPAClient";
export * from "./MPA";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { MPAExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { MPAServiceException } from "./models/MPAServiceException";
