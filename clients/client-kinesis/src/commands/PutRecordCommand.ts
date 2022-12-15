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
  PutRecordInput,
  PutRecordInputFilterSensitiveLog,
  PutRecordOutput,
  PutRecordOutputFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1PutRecordCommand, serializeAws_json1_1PutRecordCommand } from "../protocols/Aws_json1_1";

export interface PutRecordCommandInput extends PutRecordInput {}
export interface PutRecordCommandOutput extends PutRecordOutput, __MetadataBearer {}

/**
 * <p>Writes a single data record into an Amazon Kinesis data stream. Call
 *                 <code>PutRecord</code> to send data into the stream for real-time ingestion and
 *             subsequent processing, one record at a time. Each shard can support writes up to 1,000
 *             records per second, up to a maximum data write total of 1 MiB per second.</p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 *          <p>You must specify the name of the stream that captures, stores, and transports the
 *             data; a partition key; and the data blob itself.</p>
 *          <p>The data blob can be any type of data; for example, a segment from a log file,
 *             geographic/location data, website clickstream data, and so on.</p>
 *          <p>The partition key is used by Kinesis Data Streams to distribute data across shards.
 *             Kinesis Data Streams segregates the data records that belong to a stream into multiple
 *             shards, using the partition key associated with each data record to determine the shard
 *             to which a given data record belongs.</p>
 *          <p>Partition keys are Unicode strings, with a maximum length limit of 256 characters for
 *             each key. An MD5 hash function is used to map partition keys to 128-bit integer values
 *             and to map associated data records to shards using the hash key ranges of the shards.
 *             You can override hashing the partition key to determine the shard by explicitly
 *             specifying a hash value using the <code>ExplicitHashKey</code> parameter. For more
 *             information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams
 *                 Developer Guide</i>.</p>
 *          <p>
 *             <code>PutRecord</code> returns the shard ID of where the data record was placed and the
 *             sequence number that was assigned to the data record.</p>
 *          <p>Sequence numbers increase over time and are specific to a shard within a stream, not
 *             across all shards within a stream. To guarantee strictly increasing ordering, write
 *             serially to a shard and use the <code>SequenceNumberForOrdering</code> parameter. For
 *             more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/developing-producers-with-sdk.html#kinesis-using-sdk-java-add-data-to-stream">Adding Data to a Stream</a> in the <i>Amazon Kinesis Data Streams
 *                 Developer Guide</i>.</p>
 *          <important>
 *             <p>After you write a record to a stream, you cannot modify that record or its order
 *                 within the stream.</p>
 *          </important>
 *          <p>If a <code>PutRecord</code> request cannot be processed because of insufficient
 *             provisioned throughput on the shard involved in the request, <code>PutRecord</code>
 *             throws <code>ProvisionedThroughputExceededException</code>. </p>
 *          <p>By default, data records are accessible for 24 hours from the time that they are added
 *             to a stream. You can use <a>IncreaseStreamRetentionPeriod</a> or <a>DecreaseStreamRetentionPeriod</a> to modify this retention period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, PutRecordCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, PutRecordCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new PutRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRecordCommandInput} for command's `input` shape.
 * @see {@link PutRecordCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 */
export class PutRecordCommand extends $Command<
  PutRecordCommandInput,
  PutRecordCommandOutput,
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

  constructor(readonly input: PutRecordCommandInput) {
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
  ): Handler<PutRecordCommandInput, PutRecordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutRecordCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "PutRecordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRecordInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutRecordOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRecordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutRecordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRecordCommandOutput> {
    return deserializeAws_json1_1PutRecordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
