import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { UpdateRuleRequest, UpdateRuleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateRuleCommand,
  serializeAws_json1_1UpdateRuleCommand,
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

export type UpdateRuleCommandInput = UpdateRuleRequest;
export type UpdateRuleCommandOutput = UpdateRuleResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Inserts or deletes <a>Predicate</a> objects in a <code>Rule</code>. Each
 *             <code>Predicate</code> object identifies a predicate, such as a <a>ByteMatchSet</a> or an <a>IPSet</a>, that specifies the web requests
 *          that you want to allow, block, or count. If you add more than one predicate to a
 *             <code>Rule</code>, a request must match all of the specifications to be allowed,
 *          blocked, or counted. For example, suppose
 *          that
 *          you add the following to a <code>Rule</code>: </p>
 * 		       <ul>
 *             <li>
 *                <p>A <code>ByteMatchSet</code> that matches the value <code>BadBot</code> in the <code>User-Agent</code> header</p>
 *             </li>
 *             <li>
 *                <p>An <code>IPSet</code> that matches the IP address <code>192.0.2.44</code>
 *                </p>
 *             </li>
 *          </ul>
 * 		       <p>You then add the <code>Rule</code> to a <code>WebACL</code> and specify that you want to block requests that satisfy the <code>Rule</code>.
 * 			For a request to be blocked, the <code>User-Agent</code> header in the request must contain the value <code>BadBot</code>
 * 			         <i>and</i> the request must originate from the IP address 192.0.2.44.</p>
 * 		       <p>To create and configure a <code>Rule</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Create and update the predicates that you want to include in the <code>Rule</code>.</p>
 *             </li>
 *             <li>
 *                <p>Create the <code>Rule</code>. See <a>CreateRule</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<a>UpdateRule</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateRule</code> request to add predicates to the <code>Rule</code>.</p>
 *             </li>
 *             <li>
 *                <p>Create and update a <code>WebACL</code> that contains the <code>Rule</code>. See <a>CreateWebACL</a>.</p>
 *             </li>
 *          </ol>
 * 		       <p>If you want to replace one <code>ByteMatchSet</code> or <code>IPSet</code> with another, you delete the existing one and
 * 			add the new one.</p>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 */
export class UpdateRuleCommand extends $Command<
  UpdateRuleCommandInput,
  UpdateRuleCommandOutput,
  WAFRegionalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRuleCommandInput) {
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
  ): Handler<UpdateRuleCommandInput, UpdateRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "UpdateRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRuleCommandOutput> {
    return deserializeAws_json1_1UpdateRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
