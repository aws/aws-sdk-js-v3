import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { DeleteRuleRequest, DeleteRuleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteRuleCommand,
  serializeAws_json1_1DeleteRuleCommand,
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

export type DeleteRuleCommandInput = DeleteRuleRequest;
export type DeleteRuleCommandOutput = DeleteRuleResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Permanently deletes a <a>Rule</a>. You can't delete a <code>Rule</code> if it's still used in any <code>WebACL</code>
 * 			objects or if it still includes any predicates, such as <code>ByteMatchSet</code> objects.</p>
 * 		       <p>If you just want to remove a <code>Rule</code> from a <code>WebACL</code>, use <a>UpdateWebACL</a>.</p>
 * 		       <p>To permanently delete a <code>Rule</code> from AWS WAF, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Update the <code>Rule</code> to remove predicates, if any. For more information, see <a>UpdateRule</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>DeleteRule</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DeleteRule</code> request.</p>
 *             </li>
 *          </ol>
 */
export class DeleteRuleCommand extends $Command<
  DeleteRuleCommandInput,
  DeleteRuleCommandOutput,
  WAFRegionalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRuleCommandInput) {
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
  ): Handler<DeleteRuleCommandInput, DeleteRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "DeleteRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRuleCommandOutput> {
    return deserializeAws_json1_1DeleteRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
