// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>AWS Support Authorization</fullname> <p>AWS SupportAuthZ enables you to control and authorize the actions that AWS support operators can perform on your resources. You create cryptographically signed support permits specifying which actions operators can perform, on which resources, and under what time-window conditions. Permits are signed using a customer-managed AWS KMS key (ECC_NIST_P384, SIGN_VERIFY) to ensure non-repudiation.</p>
 *
 * @packageDocumentation
 */
export * from "./SupportAuthZClient";
export * from "./SupportAuthZ";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SupportAuthZExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { SupportAuthZServiceException } from "./models/SupportAuthZServiceException";
