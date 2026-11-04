// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon CloudWatch Synthetics
 *
 * You can use Amazon CloudWatch Synthetics to continually monitor your services. You can create and manage *canaries*, which are modular, lightweight scripts that monitor your endpoints and APIs from the outside-in. You can set up your canaries to run 24 hours a day, once per minute. The canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. The canaries seamlessly integrate with CloudWatch ServiceLens to help you trace the causes of impacted nodes in your applications. For more information, see [Using ServiceLens to Monitor the Health of Your Applications](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ServiceLens.html) in the *Amazon CloudWatch User Guide*.
 *
 * Before you create and manage canaries, be aware of the security considerations. For more information, see [Security Considerations for Synthetics Canaries](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html).
 *
 * @packageDocumentation
 */
export * from "./SyntheticsClient";
export * from "./Synthetics";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SyntheticsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { SyntheticsServiceException } from "./models/SyntheticsServiceException";
