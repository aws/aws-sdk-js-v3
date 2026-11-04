// smithy-typescript generated code
/* eslint-disable */
/**
 * Welcome to the *Amazon SQS API Reference*.
 *
 * Amazon SQS is a reliable, highly-scalable hosted queue for storing messages as they travel between applications or microservices. Amazon SQS moves data between distributed application components and helps you decouple these components.
 *
 * For information on the permissions you need to use this API, see [Identity and access management](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-authentication-and-access-control.html) in the *Amazon SQS Developer Guide.*
 *
 * You can use [Amazon Web Services SDKs](http://aws.amazon.com/tools/#sdk) to access Amazon SQS using your favorite programming language. The SDKs perform tasks such as the following automatically:
 *
 * - Cryptographically sign your service requests
 * - Retry requests
 * - Handle error responses
 *
 * **Additional information**
 *
 * - [Amazon SQS Product Page](http://aws.amazon.com/sqs/)
 * - *Amazon SQS Developer Guide*
 *
 *   - [Making API Requests](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-making-api-requests.html)
 *   - [Amazon SQS Message Attributes](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-metadata.html#sqs-message-attributes)
 *   - [Amazon SQS Dead-Letter Queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html)
 * - [Amazon SQS in the Command Line Interface](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sqs/index.html)
 * - *Amazon Web Services General Reference*
 *
 *   - [Regions and Endpoints](https://docs.aws.amazon.com/general/latest/gr/rande.html#sqs_region)
 *
 * @packageDocumentation
 */
export * from "./SQSClient";
export * from "./SQS";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SQSExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { SQSServiceException } from "./models/SQSServiceException";
