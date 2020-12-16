import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DeleteMountTargetRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMountTargetCommand,
  serializeAws_restJson1DeleteMountTargetCommand,
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

export type DeleteMountTargetCommandInput = DeleteMountTargetRequest;
export type DeleteMountTargetCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the specified mount target.</p>
 *
 *          <p>This operation forcibly breaks any mounts of the file system by using the mount target
 *       that is being deleted, which might disrupt instances or applications using those mounts. To
 *       avoid applications getting cut off abruptly, you might consider unmounting any mounts of the
 *       mount target, if feasible. The operation also deletes the associated network interface.
 *       Uncommitted writes might be lost, but breaking a mount target using this operation does not
 *       corrupt the file system itself. The file system you created remains. You can mount an EC2
 *       instance in your VPC by using another mount target.</p>
 *          <p>This operation requires permissions for the following action on the file
 *       system:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>elasticfilesystem:DeleteMountTarget</code>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <note>
 *             <p>The <code>DeleteMountTarget</code> call returns while the mount target state is still
 *           <code>deleting</code>. You can check the mount target deletion by calling the <a>DescribeMountTargets</a> operation, which returns a list of mount target
 *         descriptions for the given file system. </p>
 *          </note>
 *
 *          <p>The operation also requires permissions for the following Amazon EC2 action on the
 *       mount target's network interface:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ec2:DeleteNetworkInterface</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export class DeleteMountTargetCommand extends $Command<
  DeleteMountTargetCommandInput,
  DeleteMountTargetCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMountTargetCommandInput) {
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
  ): Handler<DeleteMountTargetCommandInput, DeleteMountTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DeleteMountTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMountTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMountTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteMountTargetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMountTargetCommandOutput> {
    return deserializeAws_restJson1DeleteMountTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
