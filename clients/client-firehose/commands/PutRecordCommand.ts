import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { PutRecordInput, PutRecordOutput } from "../models/models_0";
import { deserializeAws_json1_1PutRecordCommand, serializeAws_json1_1PutRecordCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type PutRecordCommandInput = PutRecordInput;
export type PutRecordCommandOutput = PutRecordOutput & __MetadataBearer;

/**
 * <p>Writes a single data record into an Amazon Kinesis Data Firehose delivery stream. To
 *          write multiple data records into a delivery stream, use <a>PutRecordBatch</a>.
 *          Applications using these operations are referred to as producers.</p>
 *          <p>By default, each delivery stream can take in up to 2,000 transactions per second,
 *          5,000 records per second, or 5 MB per second. If you use <a>PutRecord</a> and
 *             <a>PutRecordBatch</a>, the limits are an aggregate across these two
 *          operations for each delivery stream. For more information about limits and how to request
 *          an increase, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/limits.html">Amazon
 *             Kinesis Data Firehose Limits</a>. </p>
 *          <p>You must specify the name of the delivery stream and the data record when using <a>PutRecord</a>. The data record consists of a data blob that can be up to 1,000
 *          KB in size, and any kind of data. For example, it can be a segment from a log file,
 *          geographic location data, website clickstream data, and so on.</p>
 *          <p>Kinesis Data Firehose buffers records before delivering them to the destination. To
 *          disambiguate the data blobs at the destination, a common solution is to use delimiters in
 *          the data, such as a newline (<code>\n</code>) or some other character unique within the
 *          data. This allows the consumer application to parse individual data items when reading the
 *          data from the destination.</p>
 *          <p>The <code>PutRecord</code> operation returns a <code>RecordId</code>, which is a
 *          unique string assigned to each record. Producer applications can use this ID for purposes
 *          such as auditability and investigation.</p>
 *          <p>If the <code>PutRecord</code> operation throws a
 *             <code>ServiceUnavailableException</code>, back off and retry. If the exception persists,
 *          it is possible that the throughput limits have been exceeded for the delivery stream. </p>
 *          <p>Data records sent to Kinesis Data Firehose are stored for 24 hours from the time they
 *          are added to a delivery stream as it tries to send the records to the destination. If the
 *          destination is unreachable for more than 24 hours, the data is no longer
 *          available.</p>
 *
 *          <important>
 *             <p>Don't concatenate two or more base64 strings to form the data fields of your records.
 *             Instead, concatenate the raw data, then perform base64 encoding.</p>
 *          </important>
 */
export class PutRecordCommand extends $Command<
  PutRecordCommandInput,
  PutRecordCommandOutput,
  FirehoseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    configuration: FirehoseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRecordCommandInput, PutRecordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "PutRecordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRecordInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutRecordOutput.filterSensitiveLog,
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
