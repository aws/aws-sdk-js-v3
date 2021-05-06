import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteUserRequest } from "../models/models_0";
import { deserializeAws_queryDeleteUserCommand, serializeAws_queryDeleteUserCommand } from "../protocols/Aws_query";
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

export interface DeleteUserCommandInput extends DeleteUserRequest {}
export interface DeleteUserCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified IAM user. Unlike the AWS Management Console, when you delete a user
 *             programmatically, you must delete the items attached to the user manually, or the
 *             deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM
 *                 user</a>. Before attempting to delete a user, remove the following items:</p>
 *         <ul>
 *             <li>
 *                 <p>Password (<a>DeleteLoginProfile</a>)</p>
 *             </li>
 *             <li>
 *                 <p>Access keys (<a>DeleteAccessKey</a>)</p>
 *             </li>
 *             <li>
 *                 <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p>
 *             </li>
 *             <li>
 *                 <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p>
 *             </li>
 *             <li>
 *                 <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p>
 *             </li>
 *             <li>
 *                 <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p>
 *             </li>
 *             <li>
 *                 <p>Inline policies (<a>DeleteUserPolicy</a>)</p>
 *             </li>
 *             <li>
 *                 <p>Attached managed policies (<a>DetachUserPolicy</a>)</p>
 *             </li>
 *             <li>
 *                 <p>Group memberships (<a>RemoveUserFromGroup</a>)</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserCommandInput} for command's `input` shape.
 * @see {@link DeleteUserCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteUserCommand extends $Command<
  DeleteUserCommandInput,
  DeleteUserCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteUserCommandInput) {
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
  ): Handler<DeleteUserCommandInput, DeleteUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteUserCommandOutput> {
    return deserializeAws_queryDeleteUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
