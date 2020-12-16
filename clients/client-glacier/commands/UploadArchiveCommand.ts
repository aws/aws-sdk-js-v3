import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ArchiveCreationOutput, UploadArchiveInput } from "../models/models_0";
import {
  deserializeAws_restJson1UploadArchiveCommand,
  serializeAws_restJson1UploadArchiveCommand,
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

export type UploadArchiveCommandInput = Omit<UploadArchiveInput, "body"> & {
  body?: UploadArchiveInput["body"] | string | Uint8Array | Buffer;
};
export type UploadArchiveCommandOutput = ArchiveCreationOutput & __MetadataBearer;

/**
 * <p>This operation adds an archive to a vault. This is a synchronous operation, and for a
 *          successful upload, your data is durably persisted. Amazon S3 Glacier returns the archive ID in
 *          the <code>x-amz-archive-id</code> header of the response. </p>
 *
 *          <p>You must use the archive ID to access your data in Amazon S3 Glacier. After you upload
 *          an archive, you should save the archive ID returned so that you can retrieve or delete the
 *          archive later. Besides saving the archive ID, you can also index it and give it a friendly
 *          name to allow for better searching. You can also use the optional archive description field
 *          to specify how the archive is referred to in an external index of archives, such as you
 *          might create in Amazon DynamoDB. You can also get the vault inventory to obtain a list of
 *          archive IDs in a vault. For more information, see <a>InitiateJob</a>. </p>
 *
 *          <p>You must provide a SHA256 tree hash of the data you are uploading. For information
 *          about computing a SHA256 tree hash, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/checksum-calculations.html">Computing Checksums</a>. </p>
 *
 *          <p>You can optionally specify an archive description of up to 1,024 printable ASCII
 *          characters. You can get the archive description when you either retrieve the archive or get
 *          the vault inventory. For more information, see <a>InitiateJob</a>. Amazon
 *          Glacier does not interpret the description in any way. An archive description does not need
 *          to be unique. You cannot use the description to retrieve or sort the archive list. </p>
 *
 *          <p>Archives are immutable. After you upload an archive, you cannot edit the archive or
 *          its description.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-an-archive.html">Uploading an Archive in Amazon
 *             Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-post.html">Upload Archive</a> in the
 *             <i>Amazon Glacier Developer Guide</i>. </p>
 */
export class UploadArchiveCommand extends $Command<
  UploadArchiveCommandInput,
  UploadArchiveCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UploadArchiveCommandInput) {
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
  ): Handler<UploadArchiveCommandInput, UploadArchiveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "UploadArchiveCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UploadArchiveInput.filterSensitiveLog,
      outputFilterSensitiveLog: ArchiveCreationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UploadArchiveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UploadArchiveCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UploadArchiveCommandOutput> {
    return deserializeAws_restJson1UploadArchiveCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
