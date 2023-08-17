// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { PutPermissionPolicyRequest, PutPermissionPolicyResponse } from "../models/models_0";
import { de_PutPermissionPolicyCommand, se_PutPermissionPolicyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutPermissionPolicyCommand}.
 */
export interface PutPermissionPolicyCommandInput extends PutPermissionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutPermissionPolicyCommand}.
 */
export interface PutPermissionPolicyCommandOutput extends PutPermissionPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Attaches an IAM policy to the specified resource. Use this to share a rule group across
 *          accounts.</p>
 *          <p>You must be the owner of the rule group to perform this operation.</p>
 *          <p>This action is subject to the following restrictions:</p>
 *          <ul>
 *             <li>
 *                <p>You can attach only one policy with each <code>PutPermissionPolicy</code>
 *                request.</p>
 *             </li>
 *             <li>
 *                <p>The ARN in the request must be a valid WAF <a>RuleGroup</a> ARN and the
 *                rule group must exist in the same Region.</p>
 *             </li>
 *             <li>
 *                <p>The user making the request must be the owner of the rule group.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, PutPermissionPolicyCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, PutPermissionPolicyCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const input = { // PutPermissionPolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutPermissionPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPermissionPolicyCommandInput - {@link PutPermissionPolicyCommandInput}
 * @returns {@link PutPermissionPolicyCommandOutput}
 * @see {@link PutPermissionPolicyCommandInput} for command's `input` shape.
 * @see {@link PutPermissionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
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
 * @throws {@link WAFInvalidPermissionPolicyException} (client fault)
 *  <p>The operation failed because the specified policy isn't in the proper format. </p>
 *          <p>The policy specifications must conform to the following:</p>
 *          <ul>
 *             <li>
 *                <p>The policy must be composed using IAM Policy version 2012-10-17.</p>
 *             </li>
 *             <li>
 *                <p>The policy must include specifications for <code>Effect</code>, <code>Action</code>, and <code>Principal</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Effect</code> must specify <code>Allow</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Action</code> must specify <code>wafv2:CreateWebACL</code>, <code>wafv2:UpdateWebACL</code>, and
 *              <code>wafv2:PutFirewallManagerRuleGroups</code> and may optionally specify <code>wafv2:GetRuleGroup</code>.
 *                  WAF rejects any extra actions or wildcard actions in the policy.</p>
 *             </li>
 *             <li>
 *                <p>The policy must not include a <code>Resource</code> parameter.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>.  </p>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>WAF couldn’t perform the operation because your resource doesn't exist.
 *        If you've just created a resource that you're using in this operation, you might
 *        just need to wait a few minutes. It can take from a few seconds to a number of minutes
 *        for changes to propagate. </p>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 */
export class PutPermissionPolicyCommand extends $Command<
  PutPermissionPolicyCommandInput,
  PutPermissionPolicyCommandOutput,
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
  constructor(readonly input: PutPermissionPolicyCommandInput) {
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
  ): Handler<PutPermissionPolicyCommandInput, PutPermissionPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutPermissionPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFV2Client";
    const commandName = "PutPermissionPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: PutPermissionPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutPermissionPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPermissionPolicyCommandOutput> {
    return de_PutPermissionPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
