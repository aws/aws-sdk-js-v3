// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { CreateChannelInput, CreateChannelOutput } from "../models/models_0";
import { CreateChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandInput extends CreateChannelInput {}
/**
 * @public
 *
 * The output of {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandOutput extends CreateChannelOutput, __MetadataBearer {}

/**
 * Creates a channel that delivers records from a Kinesis data stream to a destination. A channel reads records from the specified stream and writes them to streaming tables on Apache Iceberg (Amazon S3 Tables) or to a general purpose Amazon S3 bucket.
 *
 * You must specify either `S3DestinationConfiguration` or `S3TablesDestinationConfiguration`, but not both.
 *
 * To use this operation, you must have permission to pass the specified service execution IAM role to Amazon Kinesis Data Streams (the `iam:PassRole` permission on that role).
 *
 * Creating a channel is an asynchronous operation. Upon receiving the request, Amazon Kinesis Data Streams returns immediately with the channel in the `CREATING` state. After provisioning is complete, Amazon Kinesis Data Streams sets the state to `ACTIVE`. You can use DescribeChannel to check the current state.
 *
 * This operation is only supported for data streams with the on-demand capacity mode.
 *
 * This operation has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a `LimitExceededException`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, CreateChannelCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, CreateChannelCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // CreateChannelInput
 *   ChannelName: "STRING_VALUE", // required
 *   ServiceExecutionRoleARN: "STRING_VALUE", // required
 *   StreamConfigurationList: [ // ChannelStreamConfigurationList // required
 *     { // ChannelStreamConfiguration
 *       StreamARN: "STRING_VALUE", // required
 *       RecordConfiguration: { // RecordConfiguration
 *         RecordFormatType: "GSR_JSON" || "JSON" || "STRING" || "BYTE_ARRAY", // required
 *         GSRSchemaARN: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   S3DestinationConfiguration: { // S3DestinationConfiguration
 *     DataFreshnessInSeconds: Number("int"),
 *     DeadLetterQueueS3Configuration: { // DeadLetterQueueS3Configuration
 *       BucketARN: "STRING_VALUE", // required
 *       ExpectedBucketOwner: "STRING_VALUE", // required
 *       ErrorOutputPrefix: "STRING_VALUE",
 *     },
 *     StorageConfiguration: { // S3StorageConfiguration
 *       BucketARN: "STRING_VALUE", // required
 *       ExpectedBucketOwner: "STRING_VALUE", // required
 *       OutputKeyTemplate: "STRING_VALUE",
 *       StorageClass: "STANDARD" || "INTELLIGENT_TIERING" || "GLACIER_IR",
 *       CompressionType: "NONE" || "GZIP" || "ZSTD", // required
 *     },
 *   },
 *   S3TablesDestinationConfiguration: { // S3TablesDestinationConfiguration
 *     DataFreshnessInSeconds: Number("int"),
 *     DeadLetterQueueS3Configuration: {
 *       BucketARN: "STRING_VALUE", // required
 *       ExpectedBucketOwner: "STRING_VALUE", // required
 *       ErrorOutputPrefix: "STRING_VALUE",
 *     },
 *     S3TablesConfigurationList: [ // S3TablesConfigurationList // required
 *       { // S3TablesConfiguration
 *         TableBucketARN: "STRING_VALUE", // required
 *         Namespace: "STRING_VALUE", // required
 *         TableName: "STRING_VALUE", // required
 *         CompressionType: "NONE" || "ZSTD" || "SNAPPY", // required
 *         PartitionSpec: { // PartitionSpec
 *           PartitionFields: [ // PartitionFieldList // required
 *             { // PartitionField
 *               Transform: "TIME_HOUR", // required
 *               SourceName: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *   },
 *   EncryptionConfiguration: { // ChannelEncryptionConfiguration
 *     EncryptionType: "KMS", // required
 *     KeyId: "STRING_VALUE", // required
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   LoggingConfiguration: { // ChannelLoggingConfiguration
 *     CloudWatchLogs: { // CloudWatchLogs
 *       Enabled: true || false, // required
 *       LogGroupName: "STRING_VALUE",
 *       LogStreamName: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateChannelCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelOutput
 * //   ChannelDescription: { // ChannelDescription
 * //     ChannelName: "STRING_VALUE", // required
 * //     ChannelARN: "STRING_VALUE", // required
 * //     ChannelId: "STRING_VALUE", // required
 * //     ChannelStatus: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED", // required
 * //     ChannelStatusReason: "STRING_VALUE",
 * //     ChannelCreationTimestamp: new Date("TIMESTAMP"), // required
 * //     ServiceExecutionRoleARN: "STRING_VALUE", // required
 * //     StreamConfigurationList: [ // ChannelStreamDescriptionList // required
 * //       { // ChannelStreamDescription
 * //         StreamARN: "STRING_VALUE", // required
 * //         StreamCreationTimestamp: new Date("TIMESTAMP"), // required
 * //         RecordConfiguration: { // RecordConfiguration
 * //           RecordFormatType: "GSR_JSON" || "JSON" || "STRING" || "BYTE_ARRAY", // required
 * //           GSRSchemaARN: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     S3DestinationConfiguration: { // S3DestinationDescription
 * //       DataFreshnessInSeconds: Number("int"), // required
 * //       DeadLetterQueueS3Configuration: { // DeadLetterQueueS3Configuration
 * //         BucketARN: "STRING_VALUE", // required
 * //         ExpectedBucketOwner: "STRING_VALUE", // required
 * //         ErrorOutputPrefix: "STRING_VALUE",
 * //       },
 * //       StorageConfiguration: { // S3StorageConfiguration
 * //         BucketARN: "STRING_VALUE", // required
 * //         ExpectedBucketOwner: "STRING_VALUE", // required
 * //         OutputKeyTemplate: "STRING_VALUE",
 * //         StorageClass: "STANDARD" || "INTELLIGENT_TIERING" || "GLACIER_IR",
 * //         CompressionType: "NONE" || "GZIP" || "ZSTD", // required
 * //       },
 * //     },
 * //     S3TablesDestinationConfiguration: { // S3TablesDestinationDescription
 * //       DataFreshnessInSeconds: Number("int"), // required
 * //       DeadLetterQueueS3Configuration: {
 * //         BucketARN: "STRING_VALUE", // required
 * //         ExpectedBucketOwner: "STRING_VALUE", // required
 * //         ErrorOutputPrefix: "STRING_VALUE",
 * //       },
 * //       S3TablesConfigurationList: [ // S3TablesConfigurationList // required
 * //         { // S3TablesConfiguration
 * //           TableBucketARN: "STRING_VALUE", // required
 * //           Namespace: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           CompressionType: "NONE" || "ZSTD" || "SNAPPY", // required
 * //           PartitionSpec: { // PartitionSpec
 * //             PartitionFields: [ // PartitionFieldList // required
 * //               { // PartitionField
 * //                 Transform: "TIME_HOUR", // required
 * //                 SourceName: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     EncryptionConfiguration: { // ChannelEncryptionConfiguration
 * //       EncryptionType: "KMS", // required
 * //       KeyId: "STRING_VALUE", // required
 * //     },
 * //     LoggingConfiguration: { // ChannelLoggingConfiguration
 * //       CloudWatchLogs: { // CloudWatchLogs
 * //         Enabled: true || false, // required
 * //         LogGroupName: "STRING_VALUE",
 * //         LogStreamName: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateChannelCommandInput - {@link CreateChannelCommandInput}
 * @returns {@link CreateChannelCommandOutput}
 * @see {@link CreateChannelCommandInput} for command's `input` shape.
 * @see {@link CreateChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Specifies that you do not have the permissions required to perform this operation.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message.
 *
 * @throws {@link KMSAccessDeniedException} (client fault)
 *
 * The ciphertext references a key that doesn't exist or that you don't have access to.
 *
 * @throws {@link KMSDisabledException} (client fault)
 *
 * The request was rejected because the specified customer master key (CMK) isn't enabled.
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *
 * The request was rejected because the state of the specified resource isn't valid for this request. For more information, see [How Key State Affects Use of a Customer Master Key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Amazon Web Services Key Management Service Developer Guide*.
 *
 * @throws {@link KMSNotFoundException} (client fault)
 *
 * The request was rejected because the specified entity or resource can't be found.
 *
 * @throws {@link KMSOptInRequired} (client fault)
 *
 * The Amazon Web Services access key ID needs a subscription for the service.
 *
 * @throws {@link KMSThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. For more information about throttling, see [Limits](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second) in the *Amazon Web Services Key Management Service Developer Guide*.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource is not available for this operation. For successful operation, the resource must be in the `ACTIVE` state.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found. The stream might not be specified correctly.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Specifies that you tried to invoke this API for a data stream with the on-demand capacity mode. This API is only supported for data streams with the provisioned capacity mode.
 *
 * @throws {@link KinesisServiceException}
 *
 * Base exception class for all service exceptions from Kinesis service.
 *
 * @example To create an S3 channel
 * ```javascript
 * //
 * const input = {
 *   ChannelName: "my-channel-name",
 *   EncryptionConfiguration: {
 *     EncryptionType: "KMS",
 *     KeyId: "arn:aws:kms:us-east-1:123456789012:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 *   },
 *   LoggingConfiguration: {
 *     CloudWatchLogs: {
 *       Enabled: true,
 *       LogGroupName: "/aws/kinesis/my-channel",
 *       LogStreamName: "my-channel-log-stream"
 *     }
 *   },
 *   S3DestinationConfiguration: {
 *     DeadLetterQueueS3Configuration: {
 *       BucketARN: "arn:aws:s3:::my-channel-dlq-bucket",
 *       ExpectedBucketOwner: "123456789012"
 *     },
 *     StorageConfiguration: {
 *       BucketARN: "arn:aws:s3:::my-channel-bucket",
 *       CompressionType: "ZSTD",
 *       ExpectedBucketOwner: "123456789012"
 *     }
 *   },
 *   ServiceExecutionRoleARN: "arn:aws:iam::123456789012:role/my-channel-role",
 *   StreamConfigurationList: [
 *     {
 *       RecordConfiguration: {
 *         RecordFormatType: "JSON"
 *       },
 *       StreamARN: "arn:aws:kinesis:us-east-1:123456789012:stream/my-stream-name"
 *     }
 *   ]
 * };
 * const command = new CreateChannelCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChannelDescription: {
 *     ChannelARN: "arn:aws:kinesis:us-east-1:123456789012:channel/my-channel-id",
 *     ChannelCreationTimestamp: "2024-07-02T00:00:00Z",
 *     ChannelId: "my-channel-id",
 *     ChannelName: "my-channel-name",
 *     ChannelStatus: "CREATING",
 *     EncryptionConfiguration: {
 *       EncryptionType: "KMS",
 *       KeyId: "arn:aws:kms:us-east-1:123456789012:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 *     },
 *     LoggingConfiguration: {
 *       CloudWatchLogs: {
 *         Enabled: true,
 *         LogGroupName: "/aws/kinesis/my-channel",
 *         LogStreamName: "my-channel-log-stream"
 *       }
 *     },
 *     S3DestinationConfiguration: {
 *       DataFreshnessInSeconds: 300,
 *       DeadLetterQueueS3Configuration: {
 *         BucketARN: "arn:aws:s3:::my-channel-dlq-bucket",
 *         ErrorOutputPrefix: "kinesis-channel/errors/my-channel/my-channel-id/",
 *         ExpectedBucketOwner: "123456789012"
 *       },
 *       StorageConfiguration: {
 *         BucketARN: "arn:aws:s3:::my-channel-bucket",
 *         CompressionType: "ZSTD",
 *         ExpectedBucketOwner: "123456789012",
 *         OutputKeyTemplate: "kinesis-channel/!{channel-name}/!{channel-id}/!{yyyy}/!{MM}/!{dd}/!{HH}/!{channel-name}-!{channel-id}-!{yyyy}-!{MM}-!{dd}-!{HH}-!{mm}!{extension}",
 *         StorageClass: "STANDARD"
 *       }
 *     },
 *     ServiceExecutionRoleARN: "arn:aws:iam::123456789012:role/my-channel-role",
 *     StreamConfigurationList: [
 *       {
 *         RecordConfiguration: {
 *           RecordFormatType: "JSON"
 *         },
 *         StreamARN: "arn:aws:kinesis:us-east-1:123456789012:stream/my-stream-name",
 *         StreamCreationTimestamp: "2024-07-01T00:00:00Z"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @example To create an S3 Tables channel
 * ```javascript
 * //
 * const input = {
 *   ChannelName: "my-channel-name",
 *   EncryptionConfiguration: {
 *     EncryptionType: "KMS",
 *     KeyId: "arn:aws:kms:us-east-1:123456789012:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 *   },
 *   LoggingConfiguration: {
 *     CloudWatchLogs: {
 *       Enabled: true,
 *       LogGroupName: "/aws/kinesis/my-channel",
 *       LogStreamName: "my-channel-log-stream"
 *     }
 *   },
 *   S3TablesDestinationConfiguration: {
 *     DeadLetterQueueS3Configuration: {
 *       BucketARN: "arn:aws:s3:::my-channel-dlq-bucket",
 *       ExpectedBucketOwner: "123456789012"
 *     },
 *     S3TablesConfigurationList: [
 *       {
 *         CompressionType: "ZSTD",
 *         Namespace: "my_namespace",
 *         PartitionSpec: {
 *           PartitionFields: [
 *             {
 *               SourceName: "creation_ts",
 *               Transform: "TIME_HOUR"
 *             }
 *           ]
 *         },
 *         TableBucketARN: "arn:aws:s3tables:us-east-1:123456789012:bucket/my-table-bucket",
 *         TableName: "my_table"
 *       }
 *     ]
 *   },
 *   ServiceExecutionRoleARN: "arn:aws:iam::123456789012:role/my-channel-role",
 *   StreamConfigurationList: [
 *     {
 *       RecordConfiguration: {
 *         GSRSchemaARN: "arn:aws:glue:us-east-1:123456789012:schema/my-registry/my-schema",
 *         RecordFormatType: "JSON"
 *       },
 *       StreamARN: "arn:aws:kinesis:us-east-1:123456789012:stream/my-stream-name"
 *     }
 *   ]
 * };
 * const command = new CreateChannelCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChannelDescription: {
 *     ChannelARN: "arn:aws:kinesis:us-east-1:123456789012:channel/my-channel-id",
 *     ChannelCreationTimestamp: "2024-07-02T00:00:00Z",
 *     ChannelId: "my-channel-id",
 *     ChannelName: "my-channel-name",
 *     ChannelStatus: "CREATING",
 *     EncryptionConfiguration: {
 *       EncryptionType: "KMS",
 *       KeyId: "arn:aws:kms:us-east-1:123456789012:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 *     },
 *     LoggingConfiguration: {
 *       CloudWatchLogs: {
 *         Enabled: true,
 *         LogGroupName: "/aws/kinesis/my-channel",
 *         LogStreamName: "my-channel-log-stream"
 *       }
 *     },
 *     S3TablesDestinationConfiguration: {
 *       DataFreshnessInSeconds: 300,
 *       DeadLetterQueueS3Configuration: {
 *         BucketARN: "arn:aws:s3:::my-channel-dlq-bucket",
 *         ErrorOutputPrefix: "kinesis-channel/errors/my-channel/my-channel-id/",
 *         ExpectedBucketOwner: "123456789012"
 *       },
 *       S3TablesConfigurationList: [
 *         {
 *           CompressionType: "ZSTD",
 *           Namespace: "my_namespace",
 *           PartitionSpec: {
 *             PartitionFields: [
 *               {
 *                 SourceName: "creation_ts",
 *                 Transform: "TIME_HOUR"
 *               }
 *             ]
 *           },
 *           TableBucketARN: "arn:aws:s3tables:us-east-1:123456789012:bucket/my-table-bucket",
 *           TableName: "my_table"
 *         }
 *       ]
 *     },
 *     ServiceExecutionRoleARN: "arn:aws:iam::123456789012:role/my-channel-role",
 *     StreamConfigurationList: [
 *       {
 *         RecordConfiguration: {
 *           GSRSchemaARN: "arn:aws:glue:us-east-1:123456789012:schema/my-registry/my-schema",
 *           RecordFormatType: "JSON"
 *         },
 *         StreamARN: "arn:aws:kinesis:us-east-1:123456789012:stream/my-stream-name",
 *         StreamCreationTimestamp: "2024-07-01T00:00:00Z"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateChannelCommand extends command<CreateChannelCommandInput, CreateChannelCommandOutput>(
  _ep1,
  _mw0,
  "CreateChannel",
  CreateChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChannelInput;
      output: CreateChannelOutput;
    };
    sdk: {
      input: CreateChannelCommandInput;
      output: CreateChannelCommandOutput;
    };
  };
}
