// smithy-typescript generated code
/* eslint-disable */
/**
 * Storage Gateway Service
 *
 * > **Important:** Amazon FSx File Gateway is no longer available to new customers. Existing customers of FSx File Gateway can continue to use the service normally. For capabilities similar to FSx File Gateway, visit [this blog post](https://aws.amazon.com/blogs/storage/switch-your-file-share-access-from-amazon-fsx-file-gateway-to-amazon-fsx-for-windows-file-server/).
 *
 * Storage Gateway is the service that connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between an organization's on-premises IT environment and the Amazon Web Services storage infrastructure. The service enables you to securely upload data to the Amazon Web Services Cloud for cost effective backup and rapid disaster recovery.
 *
 * Use the following links to get started using the *Storage Gateway Service API Reference*:
 *
 * - [Storage Gateway required request headers](https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewayHTTPRequestsHeaders): Describes the required headers that you must send with every POST request to Storage Gateway.
 * - [Signing requests](https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#AWSStorageGatewaySigningRequests): Storage Gateway requires that you authenticate every request you send; this topic describes how sign such a request.
 * - [Error responses](https://docs.aws.amazon.com/storagegateway/latest/userguide/AWSStorageGatewayAPI.html#APIErrorResponses): Provides reference information about Storage Gateway errors.
 * - [Operations in Storage Gateway](https://docs.aws.amazon.com/storagegateway/latest/APIReference/API_Operations.html): Contains detailed descriptions of all Storage Gateway operations, their request parameters, response elements, possible errors, and examples of requests and responses.
 * - [Storage Gateway endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/sg.html): Provides a list of each Amazon Web Services Region and the endpoints available for use with Storage Gateway.
 *
 * > **Note:** Storage Gateway resource IDs are in uppercase. When you use these resource IDs with the Amazon EC2 API, EC2 expects resource IDs in lowercase. You must change your resource ID to lowercase to use it with the EC2 API. For example, in Storage Gateway the ID for a volume might be `vol-AA22BB012345DAF670`. When you use this ID with the EC2 API, you must change it to `vol-aa22bb012345daf670`. Otherwise, the EC2 API might not behave as expected.
 *
 * > **Important:**
 * >
 * > IDs for Storage Gateway volumes and Amazon EBS snapshots created from gateway volumes are changing to a longer format. Starting in December 2016, all new volumes and snapshots will be created with a 17-character string. Starting in April 2016, you will be able to use these longer IDs so you can test your systems with the new format. For more information, see [Longer EC2 and EBS resource IDs](http://aws.amazon.com/ec2/faqs/#longer-ids).
 * >
 * > For example, a volume Amazon Resource Name (ARN) with the longer volume ID format looks like the following:
 * >
 * > `arn:aws:storagegateway:us-west-2:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABBCCDDEEFFG`.
 * >
 * > A snapshot ID with the longer ID format looks like the following: `snap-78e226633445566ee`.
 * >
 * > For more information, see [Announcement: Heads-up – Longer Storage Gateway volume and snapshot IDs coming in 2016](http://forums.aws.amazon.com/ann.jspa?annID=3557).
 *
 * @packageDocumentation
 */
export * from "./StorageGatewayClient";
export * from "./StorageGateway";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { StorageGatewayExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { StorageGatewayServiceException } from "./models/StorageGatewayServiceException";
