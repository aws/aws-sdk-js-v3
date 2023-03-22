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
  CheckCapacityRequest,
  CheckCapacityRequestFilterSensitiveLog,
  CheckCapacityResponse,
  CheckCapacityResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CheckCapacityCommand,
  serializeAws_json1_1CheckCapacityCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 *
 * The input for {@link CheckCapacityCommand}.
 */
export interface CheckCapacityCommandInput extends CheckCapacityRequest {}
/**
 * @public
 *
 * The output of {@link CheckCapacityCommand}.
 */
export interface CheckCapacityCommandOutput extends CheckCapacityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the web ACL capacity unit (WCU) requirements for a specified scope and set of rules.
 *          You can use this to check the capacity requirements for the rules you want to use in a
 *          <a>RuleGroup</a> or <a>WebACL</a>.
 *          </p>
 *          <p>WAF uses WCUs to calculate and control the operating
 *          resources that are used to run your rules, rule groups, and web ACLs. WAF
 *          calculates capacity differently for each rule type, to reflect the relative cost of each rule.
 *          Simple rules that cost little to run use fewer WCUs than more complex rules
 * 				that use more processing power.
 * 				Rule group capacity is fixed at creation, which helps users plan their
 *          web ACL WCU usage when they use a rule group.
 *          The WCU limit for web ACLs is 1,500.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, CheckCapacityCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, CheckCapacityCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new CheckCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CheckCapacityCommandInput - {@link CheckCapacityCommandInput}
 * @returns {@link CheckCapacityCommandOutput}
 * @see {@link CheckCapacityCommandInput} for command's `input` shape.
 * @see {@link CheckCapacityCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFExpiredManagedRuleGroupVersionException} (client fault)
 *  <p>The operation failed because the specified version for the managed rule group has
 *          expired. You can retrieve the available versions for the managed rule group by calling
 *             <a>ListAvailableManagedRuleGroupVersions</a>.</p>
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFInvalidResourceException} (client fault)
 *  <p>WAF couldn’t perform the operation because the resource that you requested isn’t
 *          valid. Check the resource, and try again.</p>
 *
 * @throws {@link WAFLimitsExceededException} (client fault)
 *  <p>WAF couldn’t perform the operation because you exceeded your resource limit. For
 *          example, the maximum number of <code>WebACL</code> objects that you can create for an Amazon Web Services
 *          account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">WAF quotas</a> in the
 *             <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFSubscriptionNotFoundException} (client fault)
 *  <p>You tried to use a managed rule group that's available by subscription, but you aren't
 *          subscribed to it yet. </p>
 *
 * @throws {@link WAFUnavailableEntityException} (client fault)
 *  <p>WAF couldn’t retrieve a resource that you specified for this operation.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. Verify the resources that you are specifying in your request
 *        parameters and then retry the operation.</p>
 *
 *
 */
export class CheckCapacityCommand extends $Command<
  CheckCapacityCommandInput,
  CheckCapacityCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: CheckCapacityCommandInput) {
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
  ): Handler<CheckCapacityCommandInput, CheckCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CheckCapacityCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "CheckCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckCapacityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CheckCapacityResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CheckCapacityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CheckCapacityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CheckCapacityCommandOutput> {
    return deserializeAws_json1_1CheckCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
