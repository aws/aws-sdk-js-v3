import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { CreateDeliveryStreamInput, CreateDeliveryStreamOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDeliveryStreamCommand,
  serializeAws_json1_1CreateDeliveryStreamCommand,
} from "../protocols/Aws_json1_1";
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

export type CreateDeliveryStreamCommandInput = CreateDeliveryStreamInput;
export type CreateDeliveryStreamCommandOutput = CreateDeliveryStreamOutput & __MetadataBearer;

/**
 * <p>Creates a Kinesis Data Firehose delivery stream.</p>
 *
 *          <p>By default, you can create up to 50 delivery streams per AWS Region.</p>
 *          <p>This is an asynchronous operation that immediately returns. The initial status of the
 *          delivery stream is <code>CREATING</code>. After the delivery stream is created, its status
 *          is <code>ACTIVE</code> and it now accepts data. If the delivery stream creation fails, the
 *          status transitions to <code>CREATING_FAILED</code>. Attempts to send data to a delivery
 *          stream that is not in the <code>ACTIVE</code> state cause an exception. To check the state
 *          of a delivery stream, use <a>DescribeDeliveryStream</a>.</p>
 *          <p>If the status of a delivery stream is <code>CREATING_FAILED</code>, this status
 *          doesn't change, and you can't invoke <code>CreateDeliveryStream</code> again on it.
 *          However, you can invoke the <a>DeleteDeliveryStream</a> operation to delete
 *          it.</p>
 *          <p>A Kinesis Data Firehose delivery stream can be configured to receive records directly
 *          from providers using <a>PutRecord</a> or <a>PutRecordBatch</a>, or it
 *          can be configured to use an existing Kinesis stream as its source. To specify a Kinesis
 *          data stream as input, set the <code>DeliveryStreamType</code> parameter to
 *             <code>KinesisStreamAsSource</code>, and provide the Kinesis stream Amazon Resource Name
 *          (ARN) and role ARN in the <code>KinesisStreamSourceConfiguration</code>
 *          parameter.</p>
 *          <p>To create a delivery stream with server-side encryption (SSE) enabled, include <a>DeliveryStreamEncryptionConfigurationInput</a> in your request. This is
 *          optional. You can also invoke <a>StartDeliveryStreamEncryption</a> to turn on
 *          SSE for an existing delivery stream that doesn't have SSE enabled.</p>
 *          <p>A delivery stream is configured with a single destination: Amazon S3, Amazon ES,
 *          Amazon Redshift, or Splunk. You must specify only one of the following destination
 *          configuration parameters: <code>ExtendedS3DestinationConfiguration</code>,
 *             <code>S3DestinationConfiguration</code>,
 *             <code>ElasticsearchDestinationConfiguration</code>,
 *             <code>RedshiftDestinationConfiguration</code>, or
 *             <code>SplunkDestinationConfiguration</code>.</p>
 *          <p>When you specify <code>S3DestinationConfiguration</code>, you can also provide the
 *          following optional values: BufferingHints, <code>EncryptionConfiguration</code>, and
 *             <code>CompressionFormat</code>. By default, if no <code>BufferingHints</code> value is
 *          provided, Kinesis Data Firehose buffers data up to 5 MB or for 5 minutes, whichever
 *          condition is satisfied first. <code>BufferingHints</code> is a hint, so there are some
 *          cases where the service cannot adhere to these conditions strictly. For example, record
 *          boundaries might be such that the size is a little over or under the configured buffering
 *          size. By default, no encryption is performed. We strongly recommend that you enable
 *          encryption to ensure secure data storage in Amazon S3.</p>
 *
 *          <p>A few notes about Amazon Redshift as a destination:</p>
 *          <ul>
 *             <li>
 *                <p>An Amazon Redshift destination requires an S3 bucket as intermediate location.
 *                Kinesis Data Firehose first delivers data to Amazon S3 and then uses
 *                   <code>COPY</code> syntax to load data into an Amazon Redshift table. This is
 *                specified in the <code>RedshiftDestinationConfiguration.S3Configuration</code>
 *                parameter.</p>
 *
 *             </li>
 *             <li>
 *                <p>The compression formats <code>SNAPPY</code> or <code>ZIP</code> cannot be
 *                specified in <code>RedshiftDestinationConfiguration.S3Configuration</code> because
 *                the Amazon Redshift <code>COPY</code> operation that reads from the S3 bucket doesn't
 *                support these compression formats.</p>
 *             </li>
 *             <li>
 *                <p>We strongly recommend that you use the user name and password you provide
 *                exclusively with Kinesis Data Firehose, and that the permissions for the account are
 *                restricted for Amazon Redshift <code>INSERT</code> permissions.</p>
 *
 *             </li>
 *          </ul>
 *          <p>Kinesis Data Firehose assumes the IAM role that is configured as part of the
 *          destination. The role should allow the Kinesis Data Firehose principal to assume the role,
 *          and the role should have permissions that allow the service to deliver the data. For more
 *          information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-s3">Grant Kinesis Data
 *             Firehose Access to an Amazon S3 Destination</a> in the <i>Amazon Kinesis Data
 *             Firehose Developer Guide</i>.</p>
 */
export class CreateDeliveryStreamCommand extends $Command<
  CreateDeliveryStreamCommandInput,
  CreateDeliveryStreamCommandOutput,
  FirehoseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDeliveryStreamCommandInput) {
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
  ): Handler<CreateDeliveryStreamCommandInput, CreateDeliveryStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FirehoseClient";
    const commandName = "CreateDeliveryStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDeliveryStreamInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDeliveryStreamOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDeliveryStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDeliveryStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDeliveryStreamCommandOutput> {
    return deserializeAws_json1_1CreateDeliveryStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
