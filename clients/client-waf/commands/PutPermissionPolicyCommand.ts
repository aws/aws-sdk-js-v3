import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { PutPermissionPolicyRequest, PutPermissionPolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutPermissionPolicyCommand,
  serializeAws_json1_1PutPermissionPolicyCommand,
} from "../protocols/Aws_json1_1";
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

export type PutPermissionPolicyCommandInput = PutPermissionPolicyRequest;
export type PutPermissionPolicyCommandOutput = PutPermissionPolicyResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Attaches an IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.</p>
 *          <p>The <code>PutPermissionPolicy</code> is subject to the following restrictions:</p>
 *          <ul>
 *             <li>
 *                <p>You can attach only one policy with each <code>PutPermissionPolicy</code> request.</p>
 *             </li>
 *             <li>
 *                <p>The policy must include an <code>Effect</code>, <code>Action</code> and <code>Principal</code>. </p>
 *             </li>
 *             <li>
 *
 *                <p>
 *                   <code>Effect</code> must specify <code>Allow</code>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Action</code> in the policy must be <code>waf:UpdateWebACL</code>, <code>waf-regional:UpdateWebACL</code>, <code>waf:GetRuleGroup</code> and <code>waf-regional:GetRuleGroup</code> . Any extra or wildcard actions in the policy will be rejected.</p>
 *             </li>
 *             <li>
 *                <p>The policy cannot include a <code>Resource</code> parameter.</p>
 *             </li>
 *             <li>
 *                <p>The ARN in the request must be a valid WAF RuleGroup ARN and the RuleGroup must exist in the same region.</p>
 *             </li>
 *             <li>
 *                <p>The user making the request must be the owner of the RuleGroup.</p>
 *             </li>
 *             <li>
 *                <p>Your policy must be composed using IAM Policy version 2012-10-17.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html">IAM Policies</a>.  </p>
 *
 *          <p>An example of a valid policy parameter is shown in the Examples section below.</p>
 */
export class PutPermissionPolicyCommand extends $Command<
  PutPermissionPolicyCommandInput,
  PutPermissionPolicyCommandOutput,
  WAFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    configuration: WAFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPermissionPolicyCommandInput, PutPermissionPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "PutPermissionPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPermissionPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutPermissionPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPermissionPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutPermissionPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPermissionPolicyCommandOutput> {
    return deserializeAws_json1_1PutPermissionPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
