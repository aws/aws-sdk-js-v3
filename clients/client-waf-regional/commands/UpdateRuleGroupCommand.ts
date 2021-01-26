import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { UpdateRuleGroupRequest, UpdateRuleGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateRuleGroupCommand,
  serializeAws_json1_1UpdateRuleGroupCommand,
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

export type UpdateRuleGroupCommandInput = UpdateRuleGroupRequest;
export type UpdateRuleGroupCommandOutput = UpdateRuleGroupResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Inserts or deletes <a>ActivatedRule</a> objects in a <code>RuleGroup</code>.</p>
 * 	        <p>You can only insert <code>REGULAR</code> rules into a rule group.</p>
 *          <p>You can have a maximum of ten rules per rule group.</p>
 *
 *
 *          <p>To create and configure a <code>RuleGroup</code>, perform the following steps:</p>
 *          <ol>
 *             <li>
 *                <p>Create and update the <code>Rules</code> that you want to include in the <code>RuleGroup</code>. See <a>CreateRule</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 *                <a>UpdateRuleGroup</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateRuleGroup</code> request to add <code>Rules</code> to the <code>RuleGroup</code>.</p>
 *             </li>
 *             <li>
 *                <p>Create and update a <code>WebACL</code> that contains the <code>RuleGroup</code>. See <a>CreateWebACL</a>.</p>
 *             </li>
 *          </ol>
 *          <p>If you want to replace one <code>Rule</code> with another, you delete the existing one and
 *          add the new one.</p>
 *          <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 */
export class UpdateRuleGroupCommand extends $Command<
  UpdateRuleGroupCommandInput,
  UpdateRuleGroupCommandOutput,
  WAFRegionalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    configuration: WAFRegionalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "UpdateRuleGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRuleGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRuleGroupResponse.filterSensitiveLog,
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
