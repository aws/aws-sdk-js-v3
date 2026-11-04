// smithy-typescript generated code
/* eslint-disable */
/**
 * Welcome to the Audit Manager API reference. This guide is for developers who need detailed information about the Audit Manager API operations, data types, and errors.
 *
 * Audit Manager is a service that provides automated evidence collection so that you can continually audit your Amazon Web Services usage. You can use it to assess the effectiveness of your controls, manage risk, and simplify compliance.
 *
 * Audit Manager provides prebuilt frameworks that structure and automate assessments for a given compliance standard. Frameworks include a prebuilt collection of controls with descriptions and testing procedures. These controls are grouped according to the requirements of the specified compliance standard or regulation. You can also customize frameworks and controls to support internal audits with specific requirements.
 *
 * Use the following links to get started with the Audit Manager API:
 *
 * - [Actions](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Operations.html): An alphabetical list of all Audit Manager API operations.
 * - [Data types](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Types.html): An alphabetical list of all Audit Manager data types.
 * - [Common parameters](https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonParameters.html): Parameters that all operations can use.
 * - [Common errors](https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonErrors.html): Client and server errors that all operations can return.
 *
 * If you're new to Audit Manager, we recommend that you review the [Audit Manager User Guide](https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html).
 *
 * @packageDocumentation
 */
export * from "./AuditManagerClient";
export * from "./AuditManager";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { AuditManagerExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { AuditManagerServiceException } from "./models/AuditManagerServiceException";
