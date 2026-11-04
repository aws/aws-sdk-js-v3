// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon CloudWatch enables you to publish, monitor, and manage various metrics, as well as configure alarm actions based on data from metrics. This guide provides detailed information about CloudWatch actions, data types, parameters, and errors. For more information about CloudWatch features, see [Amazon CloudWatch](https://aws.amazon.com/cloudwatch) and the *Amazon CloudWatch User Guide*.
 *
 * For information about the metrics that other Amazon Web Services products send to CloudWatch, see the [Amazon CloudWatch Metrics and Dimensions Reference](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the *Amazon CloudWatch User Guide*.
 *
 * Use the following links to get started using the CloudWatch Query API:
 *
 * : An alphabetical list of all CloudWatch actions.
 *
 * : An alphabetical list of all CloudWatch data types.
 *
 * CommonParameters: Parameters that all Query actions can use.
 *
 * CommonErrors: Client and server errors that all actions can return.
 *
 * [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#cw_region): Supported regions and endpoints for all Amazon Web Services products.
 *
 * Alternatively, you can use one of the [Amazon Web Services SDKs](https://aws.amazon.com/tools/#sdk) to access CloudWatch using an API tailored to your programming language or platform.
 *
 * Developers in the Amazon Web Services developer community also provide their own libraries, which you can find at the following Amazon Web Services developer centers:
 *
 * [Java Developer Center](http://aws.amazon.com/java/)
 *
 * [JavaScript Developer Center](http://aws.amazon.com/javascript/)
 *
 * [Amazon Web Services Mobile Services](http://aws.amazon.com/mobile/)
 *
 * [PHP Developer Center](http://aws.amazon.com/php/)
 *
 * [Python Developer Center](http://aws.amazon.com/python/)
 *
 * [Ruby Developer Center](http://aws.amazon.com/ruby/)
 *
 * [Windows and .NET Developer Center](http://aws.amazon.com/net/)
 *
 * @packageDocumentation
 */
export * from "./CloudWatchClient";
export * from "./CloudWatch";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { CloudWatchExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { CloudWatchServiceException } from "./models/CloudWatchServiceException";
