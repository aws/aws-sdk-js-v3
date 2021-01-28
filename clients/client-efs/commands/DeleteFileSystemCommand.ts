import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DeleteFileSystemRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteFileSystemCommand,
  serializeAws_restJson1DeleteFileSystemCommand,
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

export type DeleteFileSystemCommandInput = DeleteFileSystemRequest;
export type DeleteFileSystemCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a file system, permanently severing access to its contents. Upon return, the
 *       file system no longer exists and you can't access any contents of the deleted file
 *       system.</p>
 *          <p> You can't delete a file system that is in use. That is, if the file system has
 *       any mount targets, you must first delete them. For more information, see <a>DescribeMountTargets</a> and <a>DeleteMountTarget</a>. </p>
 *
 *          <note>
 *             <p>The <code>DeleteFileSystem</code> call returns while the file system state is still
 *           <code>deleting</code>. You can check the file system deletion status by calling the <a>DescribeFileSystems</a> operation, which returns a list of file systems in your
 *         account. If you pass file system ID or creation token for the deleted file system, the <a>DescribeFileSystems</a> returns a <code>404 FileSystemNotFound</code>
 *         error.</p>
 *          </note>
 *
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:DeleteFileSystem</code> action.</p>
 */
export class DeleteFileSystemCommand extends $Command<
  DeleteFileSystemCommandInput,
  DeleteFileSystemCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFileSystemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DeleteFileSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFileSystemRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFileSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteFileSystemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFileSystemCommandOutput> {
    return deserializeAws_restJson1DeleteFileSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
