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

import {
  UpdateRuleGroupRequest,
  UpdateRuleGroupRequestFilterSensitiveLog,
  UpdateRuleGroupResponse,
  UpdateRuleGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateRuleGroupCommand,
  serializeAws_json1_1UpdateRuleGroupCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

export interface UpdateRuleGroupCommandInput extends UpdateRuleGroupRequest {}
export interface UpdateRuleGroupCommandOutput extends UpdateRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Updates the specified <a>RuleGroup</a>.</p>
 *          <note>
 *             <p>This operation completely replaces the mutable specifications that you already have for the rule group with the ones that you provide to this call. </p>
 *             <p>To modify a rule group, do the following: </p>
 *             <ol>
 *                <li>
 *                   <p>Retrieve it by calling <a>GetRuleGroup</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>Update its settings as needed</p>
 *                </li>
 *                <li>
 *                   <p>Provide the complete rule group specification to this call</p>
 *                </li>
 *             </ol>
 *          </note>
 *          <p>When you make changes to web ACLs or web ACL components, like rules and rule groups, WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an Amazon Web Services resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.</p>
 *          <p> A rule group defines a collection of rules to inspect and control web requests that you can use in a <a>WebACL</a>. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, UpdateRuleGroupCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, UpdateRuleGroupCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new UpdateRuleGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRuleGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 */
export class UpdateRuleGroupCommand extends $Command<
  UpdateRuleGroupCommandInput,
  UpdateRuleGroupCommandOutput,
  WAFV2ClientResolvedConfig
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

  constructor(readonly input: UpdateRuleGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRuleGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "UpdateRuleGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRuleGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateRuleGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRuleGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateRuleGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRuleGroupCommandOutput> {
    return deserializeAws_json1_1UpdateRuleGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
