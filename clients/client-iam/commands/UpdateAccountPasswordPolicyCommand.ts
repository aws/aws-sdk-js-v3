import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateAccountPasswordPolicyRequest } from "../models/models_1";
import {
  deserializeAws_queryUpdateAccountPasswordPolicyCommand,
  serializeAws_queryUpdateAccountPasswordPolicyCommand,
} from "../protocols/Aws_query";
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

export interface UpdateAccountPasswordPolicyCommandInput extends UpdateAccountPasswordPolicyRequest {}
export interface UpdateAccountPasswordPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the password policy settings for the AWS account.</p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>This operation does not support partial updates. No parameters are
 *                         required, but if you do not specify a parameter, that parameter's value
 *                         reverts to its default value. See the <b>Request
 *                             Parameters</b> section for each parameter's default value. Also
 *                         note that some parameters do not allow the default parameter to be
 *                         explicitly set. Instead, to invoke the default value, do not include that
 *                         parameter when you invoke the operation.</p>
 *                 </li>
 *             </ul>
 *         </note>
 *         <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM password
 *                 policy</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateAccountPasswordPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateAccountPasswordPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateAccountPasswordPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccountPasswordPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountPasswordPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateAccountPasswordPolicyCommand extends $Command<
  UpdateAccountPasswordPolicyCommandInput,
  UpdateAccountPasswordPolicyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAccountPasswordPolicyCommandInput) {
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
  ): Handler<UpdateAccountPasswordPolicyCommandInput, UpdateAccountPasswordPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateAccountPasswordPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAccountPasswordPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAccountPasswordPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateAccountPasswordPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAccountPasswordPolicyCommandOutput> {
    return deserializeAws_queryUpdateAccountPasswordPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
