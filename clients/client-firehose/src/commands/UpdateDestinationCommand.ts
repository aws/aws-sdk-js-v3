// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import {
  UpdateDestinationInput,
  UpdateDestinationInputFilterSensitiveLog,
  UpdateDestinationOutput,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDestinationCommand,
  serializeAws_json1_1UpdateDestinationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateDestinationCommand}.
 */
export interface UpdateDestinationCommandInput extends UpdateDestinationInput {}
/**
 * @public
 *
 * The output of {@link UpdateDestinationCommand}.
 */
export interface UpdateDestinationCommandOutput extends UpdateDestinationOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified destination of the specified delivery stream.</p>
 *
 *          <p>Use this operation to change the destination type (for example, to replace the Amazon
 *          S3 destination with Amazon Redshift) or change the parameters associated with a destination
 *          (for example, to change the bucket name of the Amazon S3 destination). The update might not
 *          occur immediately. The target delivery stream remains active while the configurations are
 *          updated, so data writes to the delivery stream can continue during this process. The
 *          updated configurations are usually effective within a few minutes.</p>
 *          <p>Switching between Amazon ES and other services is not supported. For an Amazon ES
 *          destination, you can only update to another Amazon ES destination.</p>
 *          <p>If the destination type is the same, Kinesis Data Firehose merges the configuration
 *          parameters specified with the destination configuration that already exists on the delivery
 *          stream. If any of the parameters are not specified in the call, the existing values are
 *          retained. For example, in the Amazon S3 destination, if <a>EncryptionConfiguration</a> is not specified, then the existing
 *             <code>EncryptionConfiguration</code> is maintained on the destination.</p>
 *          <p>If the destination type is not the same, for example, changing the destination from
 *          Amazon S3 to Amazon Redshift, Kinesis Data Firehose does not merge any parameters. In this
 *          case, all parameters must be specified.</p>
 *
 *          <p>Kinesis Data Firehose uses <code>CurrentDeliveryStreamVersionId</code> to avoid race
 *          conditions and conflicting merges. This is a required field, and the service updates the
 *          configuration only if the existing configuration has a version ID that matches. After the
 *          update is applied successfully, the version ID is updated, and can be retrieved using <a>DescribeDeliveryStream</a>. Use the new version ID to set
 *             <code>CurrentDeliveryStreamVersionId</code> in the next call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FirehoseClient, UpdateDestinationCommand } from "@aws-sdk/client-firehose"; // ES Modules import
 * // const { FirehoseClient, UpdateDestinationCommand } = require("@aws-sdk/client-firehose"); // CommonJS import
 * const client = new FirehoseClient(config);
 * const input = {
 *   DeliveryStreamName: "STRING_VALUE", // required
 *   CurrentDeliveryStreamVersionId: "STRING_VALUE", // required
 *   DestinationId: "STRING_VALUE", // required
 *   S3DestinationUpdate: {
 *     RoleARN: "STRING_VALUE",
 *     BucketARN: "STRING_VALUE",
 *     Prefix: "STRING_VALUE",
 *     ErrorOutputPrefix: "STRING_VALUE",
 *     BufferingHints: {
 *       SizeInMBs: Number("int"),
 *       IntervalInSeconds: Number("int"),
 *     },
 *     CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *     EncryptionConfiguration: {
 *       NoEncryptionConfig: "NoEncryption",
 *       KMSEncryptionConfig: {
 *         AWSKMSKeyARN: "STRING_VALUE", // required
 *       },
 *     },
 *     CloudWatchLoggingOptions: {
 *       Enabled: true || false,
 *       LogGroupName: "STRING_VALUE",
 *       LogStreamName: "STRING_VALUE",
 *     },
 *   },
 *   ExtendedS3DestinationUpdate: {
 *     RoleARN: "STRING_VALUE",
 *     BucketARN: "STRING_VALUE",
 *     Prefix: "STRING_VALUE",
 *     ErrorOutputPrefix: "STRING_VALUE",
 *     BufferingHints: {
 *       SizeInMBs: Number("int"),
 *       IntervalInSeconds: Number("int"),
 *     },
 *     CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *     EncryptionConfiguration: {
 *       NoEncryptionConfig: "NoEncryption",
 *       KMSEncryptionConfig: {
 *         AWSKMSKeyARN: "STRING_VALUE", // required
 *       },
 *     },
 *     CloudWatchLoggingOptions: {
 *       Enabled: true || false,
 *       LogGroupName: "STRING_VALUE",
 *       LogStreamName: "STRING_VALUE",
 *     },
 *     ProcessingConfiguration: {
 *       Enabled: true || false,
 *       Processors: [
 *         {
 *           Type: "RecordDeAggregation" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter", // required
 *               ParameterValue: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *     S3BackupMode: "Disabled" || "Enabled",
 *     S3BackupUpdate: {
 *       RoleARN: "STRING_VALUE",
 *       BucketARN: "STRING_VALUE",
 *       Prefix: "STRING_VALUE",
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       BufferingHints: {
 *         SizeInMBs: Number("int"),
 *         IntervalInSeconds: Number("int"),
 *       },
 *       CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *       EncryptionConfiguration: {
 *         NoEncryptionConfig: "NoEncryption",
 *         KMSEncryptionConfig: {
 *           AWSKMSKeyARN: "STRING_VALUE", // required
 *         },
 *       },
 *       CloudWatchLoggingOptions: {
 *         Enabled: true || false,
 *         LogGroupName: "STRING_VALUE",
 *         LogStreamName: "STRING_VALUE",
 *       },
 *     },
 *     DataFormatConversionConfiguration: {
 *       SchemaConfiguration: {
 *         RoleARN: "STRING_VALUE",
 *         CatalogId: "STRING_VALUE",
 *         DatabaseName: "STRING_VALUE",
 *         TableName: "STRING_VALUE",
 *         Region: "STRING_VALUE",
 *         VersionId: "STRING_VALUE",
 *       },
 *       InputFormatConfiguration: {
 *         Deserializer: {
 *           OpenXJsonSerDe: {
 *             ConvertDotsInJsonKeysToUnderscores: true || false,
 *             CaseInsensitive: true || false,
 *             ColumnToJsonKeyMappings: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *           HiveJsonSerDe: {
 *             TimestampFormats: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *       },
 *       OutputFormatConfiguration: {
 *         Serializer: {
 *           ParquetSerDe: {
 *             BlockSizeBytes: Number("int"),
 *             PageSizeBytes: Number("int"),
 *             Compression: "UNCOMPRESSED" || "GZIP" || "SNAPPY",
 *             EnableDictionaryCompression: true || false,
 *             MaxPaddingBytes: Number("int"),
 *             WriterVersion: "V1" || "V2",
 *           },
 *           OrcSerDe: {
 *             StripeSizeBytes: Number("int"),
 *             BlockSizeBytes: Number("int"),
 *             RowIndexStride: Number("int"),
 *             EnablePadding: true || false,
 *             PaddingTolerance: Number("double"),
 *             Compression: "NONE" || "ZLIB" || "SNAPPY",
 *             BloomFilterColumns: [
 *               "STRING_VALUE",
 *             ],
 *             BloomFilterFalsePositiveProbability: Number("double"),
 *             DictionaryKeyThreshold: Number("double"),
 *             FormatVersion: "V0_11" || "V0_12",
 *           },
 *         },
 *       },
 *       Enabled: true || false,
 *     },
 *     DynamicPartitioningConfiguration: {
 *       RetryOptions: {
 *         DurationInSeconds: Number("int"),
 *       },
 *       Enabled: true || false,
 *     },
 *   },
 *   RedshiftDestinationUpdate: {
 *     RoleARN: "STRING_VALUE",
 *     ClusterJDBCURL: "STRING_VALUE",
 *     CopyCommand: {
 *       DataTableName: "STRING_VALUE", // required
 *       DataTableColumns: "STRING_VALUE",
 *       CopyOptions: "STRING_VALUE",
 *     },
 *     Username: "STRING_VALUE",
 *     Password: "STRING_VALUE",
 *     RetryOptions: {
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3Update: {
 *       RoleARN: "STRING_VALUE",
 *       BucketARN: "STRING_VALUE",
 *       Prefix: "STRING_VALUE",
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       BufferingHints: {
 *         SizeInMBs: Number("int"),
 *         IntervalInSeconds: Number("int"),
 *       },
 *       CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *       EncryptionConfiguration: {
 *         NoEncryptionConfig: "NoEncryption",
 *         KMSEncryptionConfig: {
 *           AWSKMSKeyARN: "STRING_VALUE", // required
 *         },
 *       },
 *       CloudWatchLoggingOptions: {
 *         Enabled: true || false,
 *         LogGroupName: "STRING_VALUE",
 *         LogStreamName: "STRING_VALUE",
 *       },
 *     },
 *     ProcessingConfiguration: {
 *       Enabled: true || false,
 *       Processors: [
 *         {
 *           Type: "RecordDeAggregation" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter", // required
 *               ParameterValue: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *     S3BackupMode: "Disabled" || "Enabled",
 *     S3BackupUpdate: {
 *       RoleARN: "STRING_VALUE",
 *       BucketARN: "STRING_VALUE",
 *       Prefix: "STRING_VALUE",
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       BufferingHints: {
 *         SizeInMBs: Number("int"),
 *         IntervalInSeconds: Number("int"),
 *       },
 *       CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *       EncryptionConfiguration: {
 *         NoEncryptionConfig: "NoEncryption",
 *         KMSEncryptionConfig: {
 *           AWSKMSKeyARN: "STRING_VALUE", // required
 *         },
 *       },
 *       CloudWatchLoggingOptions: {
 *         Enabled: true || false,
 *         LogGroupName: "STRING_VALUE",
 *         LogStreamName: "STRING_VALUE",
 *       },
 *     },
 *     CloudWatchLoggingOptions: {
 *       Enabled: true || false,
 *       LogGroupName: "STRING_VALUE",
 *       LogStreamName: "STRING_VALUE",
 *     },
 *   },
 *   ElasticsearchDestinationUpdate: {
 *     RoleARN: "STRING_VALUE",
 *     DomainARN: "STRING_VALUE",
 *     ClusterEndpoint: "STRING_VALUE",
 *     IndexName: "STRING_VALUE",
 *     TypeName: "STRING_VALUE",
 *     IndexRotationPeriod: "NoRotation" || "OneHour" || "OneDay" || "OneWeek" || "OneMonth",
 *     BufferingHints: {
 *       IntervalInSeconds: Number("int"),
 *       SizeInMBs: Number("int"),
 *     },
 *     RetryOptions: {
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3Update: {
 *       RoleARN: "STRING_VALUE",
 *       BucketARN: "STRING_VALUE",
 *       Prefix: "STRING_VALUE",
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       BufferingHints: {
 *         SizeInMBs: Number("int"),
 *         IntervalInSeconds: Number("int"),
 *       },
 *       CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *       EncryptionConfiguration: {
 *         NoEncryptionConfig: "NoEncryption",
 *         KMSEncryptionConfig: {
 *           AWSKMSKeyARN: "STRING_VALUE", // required
 *         },
 *       },
 *       CloudWatchLoggingOptions: {
 *         Enabled: true || false,
 *         LogGroupName: "STRING_VALUE",
 *         LogStreamName: "STRING_VALUE",
 *       },
 *     },
 *     ProcessingConfiguration: {
 *       Enabled: true || false,
 *       Processors: [
 *         {
 *           Type: "RecordDeAggregation" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter", // required
 *               ParameterValue: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *     CloudWatchLoggingOptions: {
 *       Enabled: true || false,
 *       LogGroupName: "STRING_VALUE",
 *       LogStreamName: "STRING_VALUE",
 *     },
 *   },
 *   AmazonopensearchserviceDestinationUpdate: {
 *     RoleARN: "STRING_VALUE",
 *     DomainARN: "STRING_VALUE",
 *     ClusterEndpoint: "STRING_VALUE",
 *     IndexName: "STRING_VALUE",
 *     TypeName: "STRING_VALUE",
 *     IndexRotationPeriod: "NoRotation" || "OneHour" || "OneDay" || "OneWeek" || "OneMonth",
 *     BufferingHints: {
 *       IntervalInSeconds: Number("int"),
 *       SizeInMBs: Number("int"),
 *     },
 *     RetryOptions: {
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3Update: {
 *       RoleARN: "STRING_VALUE",
 *       BucketARN: "STRING_VALUE",
 *       Prefix: "STRING_VALUE",
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       BufferingHints: {
 *         SizeInMBs: Number("int"),
 *         IntervalInSeconds: Number("int"),
 *       },
 *       CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *       EncryptionConfiguration: {
 *         NoEncryptionConfig: "NoEncryption",
 *         KMSEncryptionConfig: {
 *           AWSKMSKeyARN: "STRING_VALUE", // required
 *         },
 *       },
 *       CloudWatchLoggingOptions: {
 *         Enabled: true || false,
 *         LogGroupName: "STRING_VALUE",
 *         LogStreamName: "STRING_VALUE",
 *       },
 *     },
 *     ProcessingConfiguration: {
 *       Enabled: true || false,
 *       Processors: [
 *         {
 *           Type: "RecordDeAggregation" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter", // required
 *               ParameterValue: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *     CloudWatchLoggingOptions: {
 *       Enabled: true || false,
 *       LogGroupName: "STRING_VALUE",
 *       LogStreamName: "STRING_VALUE",
 *     },
 *   },
 *   SplunkDestinationUpdate: {
 *     HECEndpoint: "STRING_VALUE",
 *     HECEndpointType: "Raw" || "Event",
 *     HECToken: "STRING_VALUE",
 *     HECAcknowledgmentTimeoutInSeconds: Number("int"),
 *     RetryOptions: {
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3BackupMode: "FailedEventsOnly" || "AllEvents",
 *     S3Update: {
 *       RoleARN: "STRING_VALUE",
 *       BucketARN: "STRING_VALUE",
 *       Prefix: "STRING_VALUE",
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       BufferingHints: {
 *         SizeInMBs: Number("int"),
 *         IntervalInSeconds: Number("int"),
 *       },
 *       CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *       EncryptionConfiguration: {
 *         NoEncryptionConfig: "NoEncryption",
 *         KMSEncryptionConfig: {
 *           AWSKMSKeyARN: "STRING_VALUE", // required
 *         },
 *       },
 *       CloudWatchLoggingOptions: {
 *         Enabled: true || false,
 *         LogGroupName: "STRING_VALUE",
 *         LogStreamName: "STRING_VALUE",
 *       },
 *     },
 *     ProcessingConfiguration: {
 *       Enabled: true || false,
 *       Processors: [
 *         {
 *           Type: "RecordDeAggregation" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter", // required
 *               ParameterValue: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *     CloudWatchLoggingOptions: {
 *       Enabled: true || false,
 *       LogGroupName: "STRING_VALUE",
 *       LogStreamName: "STRING_VALUE",
 *     },
 *   },
 *   HttpEndpointDestinationUpdate: {
 *     EndpointConfiguration: {
 *       Url: "STRING_VALUE", // required
 *       Name: "STRING_VALUE",
 *       AccessKey: "STRING_VALUE",
 *     },
 *     BufferingHints: {
 *       SizeInMBs: Number("int"),
 *       IntervalInSeconds: Number("int"),
 *     },
 *     CloudWatchLoggingOptions: {
 *       Enabled: true || false,
 *       LogGroupName: "STRING_VALUE",
 *       LogStreamName: "STRING_VALUE",
 *     },
 *     RequestConfiguration: {
 *       ContentEncoding: "NONE" || "GZIP",
 *       CommonAttributes: [
 *         {
 *           AttributeName: "STRING_VALUE", // required
 *           AttributeValue: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     ProcessingConfiguration: {
 *       Enabled: true || false,
 *       Processors: [
 *         {
 *           Type: "RecordDeAggregation" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter", // required
 *               ParameterValue: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *     RoleARN: "STRING_VALUE",
 *     RetryOptions: {
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3BackupMode: "FailedDataOnly" || "AllData",
 *     S3Update: {
 *       RoleARN: "STRING_VALUE",
 *       BucketARN: "STRING_VALUE",
 *       Prefix: "STRING_VALUE",
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       BufferingHints: {
 *         SizeInMBs: Number("int"),
 *         IntervalInSeconds: Number("int"),
 *       },
 *       CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *       EncryptionConfiguration: {
 *         NoEncryptionConfig: "NoEncryption",
 *         KMSEncryptionConfig: {
 *           AWSKMSKeyARN: "STRING_VALUE", // required
 *         },
 *       },
 *       CloudWatchLoggingOptions: {
 *         Enabled: true || false,
 *         LogGroupName: "STRING_VALUE",
 *         LogStreamName: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   AmazonOpenSearchServerlessDestinationUpdate: {
 *     RoleARN: "STRING_VALUE",
 *     CollectionEndpoint: "STRING_VALUE",
 *     IndexName: "STRING_VALUE",
 *     BufferingHints: {
 *       IntervalInSeconds: Number("int"),
 *       SizeInMBs: Number("int"),
 *     },
 *     RetryOptions: {
 *       DurationInSeconds: Number("int"),
 *     },
 *     S3Update: {
 *       RoleARN: "STRING_VALUE",
 *       BucketARN: "STRING_VALUE",
 *       Prefix: "STRING_VALUE",
 *       ErrorOutputPrefix: "STRING_VALUE",
 *       BufferingHints: {
 *         SizeInMBs: Number("int"),
 *         IntervalInSeconds: Number("int"),
 *       },
 *       CompressionFormat: "UNCOMPRESSED" || "GZIP" || "ZIP" || "Snappy" || "HADOOP_SNAPPY",
 *       EncryptionConfiguration: {
 *         NoEncryptionConfig: "NoEncryption",
 *         KMSEncryptionConfig: {
 *           AWSKMSKeyARN: "STRING_VALUE", // required
 *         },
 *       },
 *       CloudWatchLoggingOptions: {
 *         Enabled: true || false,
 *         LogGroupName: "STRING_VALUE",
 *         LogStreamName: "STRING_VALUE",
 *       },
 *     },
 *     ProcessingConfiguration: {
 *       Enabled: true || false,
 *       Processors: [
 *         {
 *           Type: "RecordDeAggregation" || "Lambda" || "MetadataExtraction" || "AppendDelimiterToRecord", // required
 *           Parameters: [
 *             {
 *               ParameterName: "LambdaArn" || "NumberOfRetries" || "MetadataExtractionQuery" || "JsonParsingEngine" || "RoleArn" || "BufferSizeInMBs" || "BufferIntervalInSeconds" || "SubRecordType" || "Delimiter", // required
 *               ParameterValue: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *     },
 *     CloudWatchLoggingOptions: {
 *       Enabled: true || false,
 *       LogGroupName: "STRING_VALUE",
 *       LogStreamName: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateDestinationCommandInput - {@link UpdateDestinationCommandInput}
 * @returns {@link UpdateDestinationCommandOutput}
 * @see {@link UpdateDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateDestinationCommandOutput} for command's `response` shape.
 * @see {@link FirehoseClientResolvedConfig | config} for FirehoseClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification has already happened. Fetch <code>VersionId</code> again and use
 *          it to update the destination.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter has a value that is not valid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is already in use and not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 *
 */
export class UpdateDestinationCommand extends $Command<
  UpdateDestinationCommandInput,
  UpdateDestinationCommandOutput,
  FirehoseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDestinationCommandInput, UpdateDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "UpdateDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDestinationInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDestinationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDestinationCommandOutput> {
    return deserializeAws_json1_1UpdateDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
