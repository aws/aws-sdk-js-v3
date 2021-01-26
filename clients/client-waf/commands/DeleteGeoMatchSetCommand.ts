import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { DeleteGeoMatchSetRequest, DeleteGeoMatchSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteGeoMatchSetCommand,
  serializeAws_json1_1DeleteGeoMatchSetCommand,
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

export type DeleteGeoMatchSetCommandInput = DeleteGeoMatchSetRequest;
export type DeleteGeoMatchSetCommandOutput = DeleteGeoMatchSetResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Permanently deletes a <a>GeoMatchSet</a>. You can't delete a <code>GeoMatchSet</code> if it's still used in any <code>Rules</code> or
 * 			if it still includes any countries.</p>
 * 		       <p>If you just want to remove a <code>GeoMatchSet</code> from a <code>Rule</code>, use <a>UpdateRule</a>.</p>
 * 		       <p>To permanently delete a <code>GeoMatchSet</code> from AWS WAF, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Update the <code>GeoMatchSet</code> to remove any countries. For more information, see <a>UpdateGeoMatchSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>DeleteGeoMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>DeleteGeoMatchSet</code> request.</p>
 *             </li>
 *          </ol>
 */
export class DeleteGeoMatchSetCommand extends $Command<
  DeleteGeoMatchSetCommandInput,
  DeleteGeoMatchSetCommandOutput,
  WAFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteGeoMatchSetCommandInput) {
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
  ): Handler<DeleteGeoMatchSetCommandInput, DeleteGeoMatchSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "DeleteGeoMatchSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGeoMatchSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteGeoMatchSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteGeoMatchSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteGeoMatchSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGeoMatchSetCommandOutput> {
    return deserializeAws_json1_1DeleteGeoMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
