// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep2, _mw0, command } from "../commandBuilder";
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
 * <p>Creates a channel that delivers records from a Kinesis data stream to a destination. A channel reads records from the specified stream and writes them to streaming tables on Apache Iceberg (Amazon S3 Tables) or to a general purpose Amazon S3 bucket.</p>
 *          <p>You must specify either <code>S3DestinationConfiguration</code> or <code>S3TablesDestinationConfiguration</code>, but not both.</p>
 *          <p>To use this operation, you must have permission to pass the specified service execution IAM role to Amazon Kinesis Data Streams (the <code>iam:PassRole</code> permission on that role).</p>
 *          <p>Creating a channel is an asynchronous operation. Upon receiving the request, Amazon Kinesis Data Streams returns immediately with the channel in the <code>CREATING</code> state. After provisioning is complete, Amazon Kinesis Data Streams sets the state to <code>ACTIVE</code>. You can use <a>DescribeChannel</a> to check the current state.</p>
 *          <p>This operation is only supported for data streams with the on-demand capacity mode.</p>
 *          <p>This operation has a call limit of 5 transactions per second (TPS) for each Amazon Web Services account. Exceeding 5 TPS results in a <code>LimitExceededException</code>.</p>
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
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link KMSAccessDeniedException} (client fault)
 *  <p>The ciphertext references a key that doesn't exist or that you don't have access
 *             to.</p>
 *
 * @throws {@link KMSDisabledException} (client fault)
 *  <p>The request was rejected because the specified KMS key isn't
 *             enabled.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource isn't valid for
 *             this request. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a
 *                 Customer Master Key</a> in the <i>Amazon Web Services Key Management
 *                 Service Developer Guide</i>.</p>
 *
 * @throws {@link KMSNotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource can't be
 *             found.</p>
 *
 * @throws {@link KMSOptInRequired} (client fault)
 *  <p>The Amazon Web Services access key ID needs a subscription for the service.</p>
 *
 * @throws {@link KMSThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. For more information about
 *             throttling, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in
 *             the <i>Amazon Web Services Key Management Service Developer
 *             Guide</i>.</p>
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
 *  <p>The request failed validation. For example, a parameter value is not valid, a
 *             combination of parameters is not supported, or the operation is not supported for the
 *             stream's capacity mode. The error message describes the specific reason.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @public
 */
export class CreateChannelCommand extends command<CreateChannelCommandInput, CreateChannelCommandOutput>(
  _ep2,
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
