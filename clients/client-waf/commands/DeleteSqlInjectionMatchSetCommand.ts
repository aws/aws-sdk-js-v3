import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { DeleteSqlInjectionMatchSetRequest, DeleteSqlInjectionMatchSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSqlInjectionMatchSetCommand,
  serializeAws_json1_1DeleteSqlInjectionMatchSetCommand,
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

export type DeleteSqlInjectionMatchSetCommandInput = DeleteSqlInjectionMatchSetRequest;
export type DeleteSqlInjectionMatchSetCommandOutput = DeleteSqlInjectionMatchSetResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Permanently deletes a <a>SqlInjectionMatchSet</a>. You can't delete a <code>SqlInjectionMatchSet</code> if it's
 * 			still used in any <code>Rules</code> or if it still contains any <a>SqlInjectionMatchTuple</a> objects.</p>
 * 		       <p>If you just want to remove a <code>SqlInjectionMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
 * 		       <p>To permanently delete a <code>SqlInjectionMatchSet</code> from AWS WAF, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Update the <code>SqlInjectionMatchSet</code> to remove filters, if any. For more information, see
 * 				<a>UpdateSqlInjectionMatchSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>DeleteSqlInjectionMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DeleteSqlInjectionMatchSet</code> request.</p>
 *             </li>
 *          </ol>
 */
export class DeleteSqlInjectionMatchSetCommand extends $Command<
  DeleteSqlInjectionMatchSetCommandInput,
  DeleteSqlInjectionMatchSetCommandOutput,
  WAFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSqlInjectionMatchSetCommandInput) {
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
  ): Handler<DeleteSqlInjectionMatchSetCommandInput, DeleteSqlInjectionMatchSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "DeleteSqlInjectionMatchSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSqlInjectionMatchSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSqlInjectionMatchSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSqlInjectionMatchSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteSqlInjectionMatchSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteSqlInjectionMatchSetCommandOutput> {
    return deserializeAws_json1_1DeleteSqlInjectionMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
