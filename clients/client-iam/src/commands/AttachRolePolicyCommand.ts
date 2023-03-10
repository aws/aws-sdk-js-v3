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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AttachRolePolicyRequest, AttachRolePolicyRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryAttachRolePolicyCommand,
  serializeAws_queryAttachRolePolicyCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link AttachRolePolicyCommand}.
 */
export interface AttachRolePolicyCommandInput extends AttachRolePolicyRequest {}
/**
 * The output of {@link AttachRolePolicyCommand}.
 */
export interface AttachRolePolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Attaches the specified managed policy to the specified IAM role. When you attach a
 *             managed policy to a role, the managed policy becomes part of the role's permission
 *             (access) policy.</p>
 *          <note>
 *             <p>You cannot use a managed policy as the role's trust policy. The role's trust
 *                 policy is created at the same time as the role, using <a>CreateRole</a>.
 *                 You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p>
 *          </note>
 *          <p>Use this operation to attach a <i>managed</i> policy to a role. To embed
 *             an inline policy in a role, use <a>PutRolePolicy</a>. For more information
 *             about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *          <p>As a best practice, you can validate your IAM policies.
 *      To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a>
 *             in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AttachRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AttachRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new AttachRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachRolePolicyCommandInput} for command's `input` shape.
 * @see {@link AttachRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @example To attach a managed policy to an IAM role
 * ```javascript
 * // The following command attaches the AWS managed policy named ReadOnlyAccess to the IAM role named ReadOnlyRole.
 * const input = {
 *   "PolicyArn": "arn:aws:iam::aws:policy/ReadOnlyAccess",
 *   "RoleName": "ReadOnlyRole"
 * };
 * const command = new AttachRolePolicyCommand(input);
 * await client.send(command);
 * // example id: 3e1b8c7c-99c8-4fc4-a20c-131fe3f22c7e
 * ```
 *
 */
export class AttachRolePolicyCommand extends $Command<
  AttachRolePolicyCommandInput,
  AttachRolePolicyCommandOutput,
  IAMClientResolvedConfig
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

  constructor(readonly input: AttachRolePolicyCommandInput) {
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
  ): Handler<AttachRolePolicyCommandInput, AttachRolePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachRolePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "AttachRolePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachRolePolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachRolePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAttachRolePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachRolePolicyCommandOutput> {
    return deserializeAws_queryAttachRolePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
