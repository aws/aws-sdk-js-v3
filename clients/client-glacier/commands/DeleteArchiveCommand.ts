import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { DeleteArchiveInput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteArchiveCommand,
  serializeAws_restJson1DeleteArchiveCommand,
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

export type DeleteArchiveCommandInput = DeleteArchiveInput;
export type DeleteArchiveCommandOutput = __MetadataBearer;

/**
 * <p>This operation deletes an archive from a vault. Subsequent requests to initiate a
 *          retrieval of this archive will fail. Archive retrievals that are in progress for this
 *          archive ID may or may not succeed according to the following scenarios:</p>
 *          <ul>
 *             <li>
 *                <p>If the archive retrieval job is actively preparing the data for download when
 *                Amazon S3 Glacier receives the delete archive request, the archival retrieval operation
 *                might fail.</p>
 *             </li>
 *             <li>
 *                <p>If the archive retrieval job has successfully prepared the archive for download
 *                when Amazon S3 Glacier receives the delete archive request, you will be able to download
 *                the output.</p>
 *             </li>
 *          </ul>
 *
 *          <p>This operation is idempotent. Attempting to delete an already-deleted archive does
 *          not result in an error.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-an-archive.html">Deleting an Archive in Amazon
 *             Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-archive-delete.html">Delete Archive</a> in the
 *             <i>Amazon Glacier Developer Guide</i>. </p>
 */
export class DeleteArchiveCommand extends $Command<
  DeleteArchiveCommandInput,
  DeleteArchiveCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteArchiveCommandInput) {
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
  ): Handler<DeleteArchiveCommandInput, DeleteArchiveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "DeleteArchiveCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteArchiveInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteArchiveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteArchiveCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteArchiveCommandOutput> {
    return deserializeAws_restJson1DeleteArchiveCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
