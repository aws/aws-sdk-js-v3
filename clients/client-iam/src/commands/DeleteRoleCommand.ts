import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteRoleRequest } from "../models/models_0";
import { deserializeAws_queryDeleteRoleCommand, serializeAws_queryDeleteRoleCommand } from "../protocols/Aws_query";
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

export interface DeleteRoleCommandInput extends DeleteRoleRequest {}
export interface DeleteRoleCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified role. The role must not have any policies attached. For more
 *             information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>.</p>
 *         <important>
 *             <p>Make sure that you do not have any Amazon EC2 instances running with the role you
 *                 are about to delete. Deleting a role or instance profile that is associated with a
 *                 running instance will break any applications running on the instance.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRoleCommandInput} for command's `input` shape.
 * @see {@link DeleteRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteRoleCommand extends $Command<
  DeleteRoleCommandInput,
  DeleteRoleCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRoleCommandInput, DeleteRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRoleCommandOutput> {
    return deserializeAws_queryDeleteRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
