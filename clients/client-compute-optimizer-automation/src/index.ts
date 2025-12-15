// smithy-typescript generated code
/* eslint-disable */
/**
 * <p> Automation is a feature within Amazon Web Services Compute Optimizer that enables you to apply optimization recommendations to your Amazon Web Services resources, reducing costs and improving performance. You can apply recommended actions directly or create automation rules that implement recommendations on a recurring schedule when they match your specified criteria. With automation rules, set criteria such as Amazon Web Services Region and Resource Tags to target specific geographies and workloads. Configure rules to run daily, weekly, or monthly, and Compute Optimizer continuously evaluates new recommendations against your criteria. Track automation events over time, examine detailed step history, estimate savings achieved, and reverse actions directly from Compute Optimizer when needed. </p>
 *
 * @packageDocumentation
 */
export * from "./ComputeOptimizerAutomationClient";
export * from "./ComputeOptimizerAutomation";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ComputeOptimizerAutomationExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { ComputeOptimizerAutomationServiceException } from "./models/ComputeOptimizerAutomationServiceException";
