// smithy-typescript generated code
/* eslint-disable */
/**
 * AWS Auto Scaling
 *
 *
 *
 * Use AWS Auto Scaling to create scaling plans for your applications to automatically scale your scalable AWS resources.
 *
 * **API Summary**
 *
 * You can use the AWS Auto Scaling service API to accomplish the following tasks:
 *
 * - Create and manage scaling plans
 * - Define target tracking scaling policies to dynamically scale your resources based on utilization
 * - Scale Amazon EC2 Auto Scaling groups using predictive scaling and dynamic scaling to scale your Amazon EC2 capacity faster
 * - Set minimum and maximum capacity limits
 * - Retrieve information on existing scaling plans
 * - Access current forecast data and historical forecast data for up to 56 days previous
 *
 *
 *
 * To learn more about AWS Auto Scaling, including information about granting IAM users required permissions for AWS Auto Scaling actions, see the [AWS Auto Scaling User Guide](https://docs.aws.amazon.com/autoscaling/plans/userguide/what-is-aws-auto-scaling.html).
 *
 * @packageDocumentation
 */
export * from "./AutoScalingPlansClient";
export * from "./AutoScalingPlans";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { AutoScalingPlansExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { AutoScalingPlansServiceException } from "./models/AutoScalingPlansServiceException";
