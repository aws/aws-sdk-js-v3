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

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import {
  PutRecordsInput,
  PutRecordsInputFilterSensitiveLog,
  PutRecordsOutput,
  PutRecordsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutRecordsCommand,
  serializeAws_json1_1PutRecordsCommand,
} from "../protocols/Aws_json1_1";

export interface PutRecordsCommandInput extends PutRecordsInput {}
export interface PutRecordsCommandOutput extends PutRecordsOutput, __MetadataBearer {}

/**
 * <p>Writes multiple data records into a Kinesis data stream in a single call (also
 *             referred to as a <code>PutRecords</code> request). Use this operation to send data into
 *             the stream for data ingestion and processing. </p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 *          <p>Each <code>PutRecords</code> request can support up to 500 records. Each record in the
 *             request can be as large as 1 MiB, up to a limit of 5 MiB for the entire request,
 *             including partition keys. Each shard can support writes up to 1,000 records per second,
 *             up to a maximum data write total of 1 MiB per second.</p>
 *          <p>You must specify the name of the stream that captures, stores, and transports the
 *             data; and an array of request <code>Records</code>, with each record in the array
 *             requiring a partition key and data blob. The record size limit applies to the total size
 *             of the partition key and data blob.</p>
 *          <p>The data blob can be any type of data; for example, a segment from a log file,
 *             geographic/location data, website clickstream data, and so on.</p>
 *          <p>The partition key is used by Kinesis Data Streams as input to a hash function that
 *             maps the partition key and associated data to a specific shard. An MD5 hash function is
 *             used to map partition keys to 128-bit integer values and to map associated data records
 *             to shards. As a result of this hashing mechanism, all data records with the same
 *             partition key map to the same shard within the stream. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams
 *                 Developer Guide</i>.</p>
 *          <p>Each record in the <code>Records</code> array may include an optional parameter,
 *                 <code>ExplicitHashKey</code>, which overrides the partition key to shard mapping.
 *             This parameter allows a data producer to determine explicitly the shard where the record
 *             is stored. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-putrecords">Adding Multiple Records with PutRecords</a> in the <i>Amazon Kinesis
 *                 Data Streams Developer Guide</i>.</p>
 *          <p>The <code>PutRecords</code> response includes an array of response
 *                 <code>Records</code>. Each record in the response array directly correlates with a
 *             record in the request array using natural ordering, from the top to the bottom of the
 *             request and response. The response <code>Records</code> array always includes the same
 *             number of records as the request array.</p>
 *          <p>The response <code>Records</code> array includes both successfully and unsuccessfully
 *             processed records. Kinesis Data Streams attempts to process all records in each
 *                 <code>PutRecords</code> request. A single record failure does not stop the
 *             processing of subsequent records. As a result, PutRecords doesn't guarantee the ordering
 *             of records. If you need to read records in the same order they are written to the
 *             stream, use <a>PutRecord</a> instead of <code>PutRecords</code>, and write to
 *             the same shard.</p>
 *          <p>A successfully processed record includes <code>ShardId</code> and
 *                 <code>SequenceNumber</code> values. The <code>ShardId</code> parameter identifies
 *             the shard in the stream where the record is stored. The <code>SequenceNumber</code>
 *             parameter is an identifier assigned to the put record, unique to all records in the
 *             stream.</p>
 *          <p>An unsuccessfully processed record includes <code>ErrorCode</code> and
 *                 <code>ErrorMessage</code> values. <code>ErrorCode</code> reflects the type of error
 *             and can be one of the following values:
 *                 <code>ProvisionedThroughputExceededException</code> or <code>InternalFailure</code>.
 *                 <code>ErrorMessage</code> provides more detailed information about the
 *                 <code>ProvisionedThroughputExceededException</code> exception including the account
 *             ID, stream name, and shard ID of the record that was throttled. For more information
 *             about partially successful responses, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-add-data-to-stream.html#kinesis-using-sdk-java-putrecords">Adding Multiple Records with PutRecords</a> in the <i>Amazon Kinesis
 *                 Data Streams Developer Guide</i>.</p>
 *          <important>
 *             <p>After you write a record to a stream, you cannot modify that record or its order
 *                 within the stream.</p>
 *          </important>
 *          <p>By default, data records are accessible for 24 hours from the time that they are added
 *             to a stream. You can use <a>IncreaseStreamRetentionPeriod</a> or <a>DecreaseStreamRetentionPeriod</a> to modify this retention period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, PutRecordsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, PutRecordsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new PutRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRecordsCommandInput} for command's `input` shape.
 * @see {@link PutRecordsCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 */
export class PutRecordsCommand extends $Command<
  PutRecordsCommandInput,
  PutRecordsCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      OperationType: { type: "staticContextParams", value: `data` },
      StreamARN: { type: "contextParams", name: "StreamARN" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: PutRecordsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRecordsCommandInput, PutRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutRecordsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "PutRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRecordsInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutRecordsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutRecordsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRecordsCommandOutput> {
    return deserializeAws_json1_1PutRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
