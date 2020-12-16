import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { AbortMultipartUploadInput } from "../models/models_0";
import {
  deserializeAws_restJson1AbortMultipartUploadCommand,
  serializeAws_restJson1AbortMultipartUploadCommand,
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

export type AbortMultipartUploadCommandInput = AbortMultipartUploadInput;
export type AbortMultipartUploadCommandOutput = __MetadataBearer;

/**
 * <p>This operation aborts a multipart upload identified by the upload ID.</p>
 *
 *
 *          <p>After the Abort Multipart Upload request succeeds, you cannot upload any more parts
 *          to the multipart upload or complete the multipart upload. Aborting a completed upload
 *          fails. However, aborting an already-aborted upload will succeed, for a short time. For more
 *          information about uploading a part and completing a multipart upload, see <a>UploadMultipartPart</a> and <a>CompleteMultipartUpload</a>.</p>
 *
 *          <p>This operation is idempotent.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/working-with-archives.html">Working with Archives in
 *             Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-multipart-abort-upload.html">Abort Multipart
 *             Upload</a> in the <i>Amazon Glacier Developer Guide</i>. </p>
 */
export class AbortMultipartUploadCommand extends $Command<
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AbortMultipartUploadCommandInput) {
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
  ): Handler<AbortMultipartUploadCommandInput, AbortMultipartUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "AbortMultipartUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AbortMultipartUploadInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AbortMultipartUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AbortMultipartUploadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AbortMultipartUploadCommandOutput> {
    return deserializeAws_restJson1AbortMultipartUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
