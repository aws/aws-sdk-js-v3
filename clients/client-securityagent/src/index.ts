// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>AWS Security Agent is a frontier agent that proactively secures your applications throughout the development lifecycle. It conducts automated security reviews tailored to your organizational requirements and delivers context-aware penetration testing on demand. By continuously validating security from design to deployment, AWS Security Agent helps prevent vulnerabilities early across all your environments. Key capabilities include design security review for architecture documents, code security review for pull requests in connected repositories, and on-demand penetration testing that discovers, validates, and remediates security vulnerabilities through tailored multi-step attack scenarios. For more information, see the <a href="https://docs.aws.amazon.com/securityagent/latest/userguide/what-is.html">AWS Security Agent User Guide</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./SecurityAgentClient";
export * from "./SecurityAgent";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SecurityAgentExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { SecurityAgentServiceException } from "./models/SecurityAgentServiceException";
