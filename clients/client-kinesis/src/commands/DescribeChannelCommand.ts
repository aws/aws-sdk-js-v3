// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
import type { DescribeChannelInput, DescribeChannelOutput } from "../models/models_0";
import { DescribeChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeChannelCommand}.
 */
export interface DescribeChannelCommandInput extends DescribeChannelInput {}
/**
 * @public
 *
 * The output of {@link DescribeChannelCommand}.
 */
export interface DescribeChannelCommandOutput extends DescribeChannelOutput, __MetadataBearer {}

/**
 * <p>Describes the specified channel, including its configuration and current status.</p>
 *          <p>Use this operation to verify that a channel reached the <code>ACTIVE</code> state after creation, or to diagnose a channel in the <code>FAILED</code> state by reading the <code>ChannelStatusReason</code>.</p>
 *          <p>This API has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a <code>LimitExceededException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DescribeChannelCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DescribeChannelCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // DescribeChannelInput
 *   ChannelARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeChannelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChannelOutput
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
 * @param DescribeChannelCommandInput - {@link DescribeChannelCommandInput}
 * @returns {@link DescribeChannelCommandOutput}
 * @see {@link DescribeChannelCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelCommandOutput} for command's `response` shape.
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
 * @example To describe a channel
 * ```javascript
 * //
 * const input = {
 *   ChannelARN: "arn:aws:kinesis:us-east-1:123456789012:channel/my-channel-id"
 * };
 * const command = new DescribeChannelCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ChannelDescription: {
 *     ChannelARN: "arn:aws:kinesis:us-east-1:123456789012:channel/my-channel-id",
 *     ChannelCreationTimestamp: "2024-07-02T00:00:00Z",
 *     ChannelId: "my-channel-id",
 *     ChannelName: "my-channel-name",
 *     ChannelStatus: "ACTIVE",
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
 * @public
 */
export class DescribeChannelCommand extends command<DescribeChannelCommandInput, DescribeChannelCommandOutput>(
  _ep2,
  _mw0,
  "DescribeChannel",
  DescribeChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeChannelInput;
      output: DescribeChannelOutput;
    };
    sdk: {
      input: DescribeChannelCommandInput;
      output: DescribeChannelCommandOutput;
    };
  };
}
