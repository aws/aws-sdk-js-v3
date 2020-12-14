import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DeleteFileSystemPolicyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteFileSystemPolicyCommand,
  serializeAws_restJson1DeleteFileSystemPolicyCommand,
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

export type DeleteFileSystemPolicyCommandInput = DeleteFileSystemPolicyRequest;
export type DeleteFileSystemPolicyCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the <code>FileSystemPolicy</code> for the specified file system.
 *       The default <code>FileSystemPolicy</code> goes into effect once the existing policy is deleted.
 *       For more information about the default file system policy, see <a href="https://docs.aws.amazon.com/efs/latest/ug/res-based-policies-efs.html">Using Resource-based Policies with EFS</a>.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:DeleteFileSystemPolicy</code> action.</p>
 */
export class DeleteFileSystemPolicyCommand extends $Command<
  DeleteFileSystemPolicyCommandInput,
  DeleteFileSystemPolicyCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFileSystemPolicyCommandInput) {
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
  ): Handler<DeleteFileSystemPolicyCommandInput, DeleteFileSystemPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DeleteFileSystemPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFileSystemPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFileSystemPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteFileSystemPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFileSystemPolicyCommandOutput> {
    return deserializeAws_restJson1DeleteFileSystemPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
