// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateChannelRequest, CreateChannelResponse } from "../models/models_0";
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
export interface CreateChannelCommandInput extends CreateChannelRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandOutput extends CreateChannelResponse, __MetadataBearer {}

/**
 * <p>Creates a Channel that streams records from an Amazon MSK Express cluster topic to Amazon S3 or Apache Iceberg.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, CreateChannelCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, CreateChannelCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // CreateChannelRequest
 *   ChannelName: "STRING_VALUE", // required
 *   ClusterArn: "STRING_VALUE", // required
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KmsKeyArn: "STRING_VALUE", // required
 *   },
 *   IcebergDestinationConfiguration: { // IcebergDestinationConfiguration
 *     AppendOnly: true || false, // required
 *     Catalog: { // Catalog
 *       CatalogArn: "STRING_VALUE",
 *       WarehouseLocation: "STRING_VALUE",
 *     },
 *     DataFreshnessInSeconds: Number("int"),
 *     DeadLetterQueueS3: { // DeadLetterQueueS3
 *       BucketArn: "STRING_VALUE", // required
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       ExpectedBucketOwner: "STRING_VALUE",
 *     },
 *     DestinationTableList: [ // __listOfDestinationTable // required
 *       { // DestinationTable
 *         DestinationDatabaseName: "STRING_VALUE",
 *         DestinationTableName: "STRING_VALUE",
 *         PartitionSpec: { // PartitionSpec
 *           PartitionStrategy: "TIME_HOUR", // required
 *           SourceList: [ // __listOfPartitionSource
 *             { // PartitionSource
 *               SourceName: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *     SchemaEvolution: { // SchemaEvolution
 *       EnableSchemaEvolution: true || false,
 *     },
 *     ServiceExecutionRoleArn: "STRING_VALUE", // required
 *     TableCreation: { // TableCreation
 *       EnableTableCreation: true || false,
 *     },
 *     CompressionType: "ZSTD" || "SNAPPY",
 *   },
 *   S3DestinationConfiguration: { // S3DestinationConfiguration
 *     DataFreshnessInSeconds: Number("int"),
 *     DeadLetterQueueS3: {
 *       BucketArn: "STRING_VALUE", // required
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       ExpectedBucketOwner: "STRING_VALUE",
 *     },
 *     ServiceExecutionRoleArn: "STRING_VALUE", // required
 *     Storage: { // S3Storage
 *       BucketArn: "STRING_VALUE", // required
 *       CompressionType: "NONE" || "GZIP" || "ZSTD", // required
 *       OutputPrefix: "STRING_VALUE",
 *       OutputKeyTemplate: "STRING_VALUE",
 *       StorageClass: "STANDARD" || "INTELLIGENT_TIERING" || "GLACIER_IR", // required
 *       ExpectedBucketOwner: "STRING_VALUE",
 *     },
 *   },
 *   Tags: { // __mapOf__string
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TopicConfigurationList: [ // __listOfTopicConfiguration // required
 *     { // TopicConfiguration
 *       RecordConverter: { // RecordConverter
 *         ValueConverter: "BYTE_ARRAY" || "JSON" || "JSON_SCHEMA_GSR" || "STRING", // required
 *       },
 *       RecordSchema: { // RecordSchema
 *         GsrArn: "STRING_VALUE", // required
 *       },
 *       TopicArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   LoggingInfo: { // ChannelLoggingInfo
 *     CloudWatchLogs: { // CloudWatchLogs
 *       Enabled: true || false, // required
 *       LogGroup: "STRING_VALUE",
 *     },
 *     Firehose: { // Firehose
 *       DeliveryStream: "STRING_VALUE",
 *       Enabled: true || false, // required
 *     },
 *     S3: { // S3
 *       Bucket: "STRING_VALUE",
 *       Enabled: true || false, // required
 *       Prefix: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateChannelCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelResponse
 * //   ChannelArn: "STRING_VALUE", // required
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateChannelCommandInput - {@link CreateChannelCommandInput}
 * @returns {@link CreateChannelCommandOutput}
 * @see {@link CreateChannelCommandInput} for command's `input` shape.
 * @see {@link CreateChannelCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 *
 * @public
 */
export class CreateChannelCommand extends command<CreateChannelCommandInput, CreateChannelCommandOutput>(
  _ep0,
  _mw0,
  "CreateChannel",
  CreateChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChannelRequest;
      output: CreateChannelResponse;
    };
    sdk: {
      input: CreateChannelCommandInput;
      output: CreateChannelCommandOutput;
    };
  };
}
