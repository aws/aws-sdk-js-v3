// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { UpdateChannelInput, UpdateChannelOutput } from "../models/models_0";
import { UpdateChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateChannelCommand}.
 */
export interface UpdateChannelCommandInput extends UpdateChannelInput {}
/**
 * @public
 *
 * The output of {@link UpdateChannelCommand}.
 */
export interface UpdateChannelCommandOutput extends UpdateChannelOutput, __MetadataBearer {}

/**
 * <p>Updates the data freshness interval or the Amazon CloudWatch Logs configuration of an existing channel. You cannot change the destination, source stream, record format, schema, encryption configuration, or service execution role of an existing channel. To change any other setting, delete the channel and create a new one.</p>
 *          <p>Updating a channel is an asynchronous operation. Upon receiving the request, Amazon Kinesis Data Streams sets the channel to the <code>UPDATING</code> state and returns immediately. After the change is applied, Amazon Kinesis Data Streams sets the channel back to the <code>ACTIVE</code> state.</p>
 *          <p>This operation has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a <code>LimitExceededException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, UpdateChannelCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, UpdateChannelCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // UpdateChannelInput
 *   ChannelARN: "STRING_VALUE", // required
 *   S3DestinationConfiguration: { // S3DestinationUpdateInput
 *     DataFreshnessInSeconds: Number("int"), // required
 *   },
 *   S3TablesDestinationConfiguration: { // S3TablesDestinationUpdateInput
 *     DataFreshnessInSeconds: Number("int"), // required
 *   },
 *   LoggingConfiguration: { // ChannelLoggingUpdateInput
 *     CloudWatchLogs: { // CloudWatchLogsUpdateInput
 *       Enabled: true || false, // required
 *       LogGroupName: "STRING_VALUE",
 *       LogStreamName: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateChannelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChannelOutput
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
 * @param UpdateChannelCommandInput - {@link UpdateChannelCommandInput}
 * @returns {@link UpdateChannelCommandOutput}
 * @see {@link UpdateChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is not available for this operation. For successful operation, the
 *             resource must be in the <code>ACTIVE</code> state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Specifies that you tried to invoke this API for a data stream with the on-demand
 *             capacity mode. This API is only supported for data streams with the provisioned capacity
 *             mode. </p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @example To update a channel
 * ```javascript
 * //
 * const input = {
 *   ChannelARN: "arn:aws:kinesis:us-east-1:123456789012:channel/my-channel-id",
 *   LoggingConfiguration: {
 *     CloudWatchLogs: {
 *       Enabled: true,
 *       LogGroupName: "/aws/kinesis/my-channel",
 *       LogStreamName: "my-channel-log-stream"
 *     }
 *   },
 *   S3DestinationConfiguration: {
 *     DataFreshnessInSeconds: 600
 *   }
 * };
 * const command = new UpdateChannelCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChannelDescription: {
 *     ChannelARN: "arn:aws:kinesis:us-east-1:123456789012:channel/my-channel-id",
 *     ChannelCreationTimestamp: "2024-07-02T00:00:00Z",
 *     ChannelId: "my-channel-id",
 *     ChannelName: "my-channel-name",
 *     ChannelStatus: "UPDATING",
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
 *       DataFreshnessInSeconds: 600,
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
 * @public
 */
export class UpdateChannelCommand extends command<UpdateChannelCommandInput, UpdateChannelCommandOutput>(
  _ep2,
  _mw0,
  "UpdateChannel",
  UpdateChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateChannelInput;
      output: UpdateChannelOutput;
    };
    sdk: {
      input: UpdateChannelCommandInput;
      output: UpdateChannelCommandOutput;
    };
  };
}
