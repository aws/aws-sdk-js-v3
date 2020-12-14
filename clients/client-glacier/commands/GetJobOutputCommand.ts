import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { GetJobOutputInput, GetJobOutputOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetJobOutputCommand,
  serializeAws_restJson1GetJobOutputCommand,
} from "../protocols/Aws_restJson1";
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

export type GetJobOutputCommandInput = GetJobOutputInput;
export type GetJobOutputCommandOutput = GetJobOutputOutput & __MetadataBearer;

/**
 * <p>This operation downloads the output of the job you initiated using <a>InitiateJob</a>. Depending on the job type you specified when you initiated the
 *          job, the output will be either the content of an archive or a vault inventory.</p>
 *
 *          <p>You can download all the job output or download a portion of the output by specifying
 *          a byte range. In the case of an archive retrieval job, depending on the byte range you
 *          specify, Amazon S3 Glacier (Glacier) returns the checksum for the portion of the data. You can compute the
 *          checksum on the client and verify that the values match to ensure the portion you downloaded
 *          is the correct data.</p>
 *          <p>A job ID will not expire for at least 24 hours after Glacier completes the job. That
 *          a byte range. For both archive and inventory retrieval jobs, you should verify the downloaded
 *          size against the size returned in the headers from the
 *          <b>Get Job Output</b> response.</p>
 *          <p>For archive retrieval jobs, you should also verify that the size is what you expected. If
 *          you download a portion of the output, the expected size is based on the range of bytes
 *          you specified. For example, if you specify a range of <code>bytes=0-1048575</code>, you should
 *          verify your download size is 1,048,576 bytes. If you download an entire archive, the
 *          expected size is the size of the archive when you uploaded it to Amazon S3 Glacier
 *          The expected size is also returned in the headers from the
 *          <b>Get Job Output</b> response.</p>
 *          <p>In the case of an archive retrieval job, depending on the byte range you
 *          specify, Glacier returns the checksum for the portion of the data. To ensure the portion you downloaded
 *          is the correct data, compute the checksum on the client, verify that the values match,
 *          and verify that the size is what you expected.</p>
 *
 *          <p>A job ID does not expire for at least 24 hours after Glacier completes the
 *          job. That is, you can download the job output within the 24 hours period after Amazon
 *          Glacier completes the job.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and the underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/vault-inventory.html">Downloading a
 *             Vault Inventory</a>, <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/downloading-an-archive.html">Downloading an
 *             Archive</a>, and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-job-output-get.html">Get Job Output </a>
 *          </p>
 */
export class GetJobOutputCommand extends $Command<
  GetJobOutputCommandInput,
  GetJobOutputCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetJobOutputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetJobOutputCommandInput, GetJobOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "GetJobOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetJobOutputInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetJobOutputOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetJobOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetJobOutputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJobOutputCommandOutput> {
    return deserializeAws_restJson1GetJobOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
