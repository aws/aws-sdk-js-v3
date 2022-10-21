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
import {
  GetPolicyRequest,
  GetPolicyRequestFilterSensitiveLog,
  GetPolicyResponse,
  GetPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryGetPolicyCommand, serializeAws_queryGetPolicyCommand } from "../protocols/Aws_query";

export interface GetPolicyCommandInput extends GetPolicyRequest {}
export interface GetPolicyCommandOutput extends GetPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified managed policy, including the policy's
 *             default version and the total number of IAM users, groups, and roles to which the
 *             policy is attached. To retrieve the list of the specific users, groups, and roles that
 *             the policy is attached to, use <a>ListEntitiesForPolicy</a>. This operation
 *             returns metadata about the policy. To retrieve the actual policy document for a specific
 *             version of the policy, use <a>GetPolicyVersion</a>.</p>
 *         <p>This operation retrieves information about managed policies. To retrieve information
 *             about an inline policy that is embedded with an IAM user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p>
 *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class GetPolicyCommand extends $Command<GetPolicyCommandInput, GetPolicyCommandOutput, IAMClientResolvedConfig> {
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

  constructor(readonly input: GetPolicyCommandInput) {
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
  ): Handler<GetPolicyCommandInput, GetPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetPolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPolicyCommandOutput> {
    return deserializeAws_queryGetPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
