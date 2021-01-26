import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { DeleteIPSetRequest, DeleteIPSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteIPSetCommand,
  serializeAws_json1_1DeleteIPSetCommand,
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

export type DeleteIPSetCommandInput = DeleteIPSetRequest;
export type DeleteIPSetCommandOutput = DeleteIPSetResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Permanently deletes an <a>IPSet</a>. You can't delete an <code>IPSet</code> if it's still used in any <code>Rules</code> or
 * 			if it still includes any IP addresses.</p>
 * 		       <p>If you just want to remove an <code>IPSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
 * 		       <p>To permanently delete an <code>IPSet</code> from AWS WAF, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Update the <code>IPSet</code> to remove IP address ranges, if any. For more information, see <a>UpdateIPSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>DeleteIPSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DeleteIPSet</code> request.</p>
 *             </li>
 *          </ol>
 */
export class DeleteIPSetCommand extends $Command<
  DeleteIPSetCommandInput,
  DeleteIPSetCommandOutput,
  WAFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteIPSetCommandInput) {
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
  ): Handler<DeleteIPSetCommandInput, DeleteIPSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "DeleteIPSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteIPSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteIPSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteIPSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteIPSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteIPSetCommandOutput> {
    return deserializeAws_json1_1DeleteIPSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
