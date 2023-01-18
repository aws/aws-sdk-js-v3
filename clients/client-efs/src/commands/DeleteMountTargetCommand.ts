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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { DeleteMountTargetRequest, DeleteMountTargetRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMountTargetCommand,
  serializeAws_restJson1DeleteMountTargetCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteMountTargetCommandInput extends DeleteMountTargetRequest {}
export interface DeleteMountTargetCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified mount target.</p>
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
 *          <note>
 *             <p>The <code>DeleteMountTarget</code> call returns while the mount target state is still
 *           <code>deleting</code>. You can check the mount target deletion by calling the <a>DescribeMountTargets</a> operation, which returns a list of mount target
 *         descriptions for the given file system. </p>
 *          </note>
 *          <p>The operation also requires permissions for the following Amazon EC2 action on the
 *       mount target's network interface:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ec2:DeleteNetworkInterface</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DeleteMountTargetCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DeleteMountTargetCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DeleteMountTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMountTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteMountTargetCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 */
export class DeleteMountTargetCommand extends $Command<
  DeleteMountTargetCommandInput,
  DeleteMountTargetCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteMountTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DeleteMountTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMountTargetRequestFilterSensitiveLog,
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
