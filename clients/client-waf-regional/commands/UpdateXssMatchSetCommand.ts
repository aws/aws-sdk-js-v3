import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { UpdateXssMatchSetRequest, UpdateXssMatchSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateXssMatchSetCommand,
  serializeAws_json1_1UpdateXssMatchSetCommand,
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

export type UpdateXssMatchSetCommandInput = UpdateXssMatchSetRequest;
export type UpdateXssMatchSetCommandOutput = UpdateXssMatchSetResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Inserts or deletes <a>XssMatchTuple</a> objects (filters) in an <a>XssMatchSet</a>.
 * 			For each <code>XssMatchTuple</code> object, you specify the following values:</p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <code>Action</code>: Whether to insert the object into or delete the object from the
 *                array. To change an
 *                <code>XssMatchTuple</code>, you delete the existing object and add a new
 *                one.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FieldToMatch</code>: The part of web requests that you want AWS WAF to inspect and, if you want AWS WAF to inspect a header or custom query parameter,
 * 				the name of the header or parameter.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TextTransformation</code>: Which text transformation, if any, to perform on the web request before
 * 				inspecting the request for cross-site scripting attacks.</p>
 * 				           <p>You can only specify a single type of TextTransformation.</p>
 *             </li>
 *          </ul>
 * 		       <p>You use <code>XssMatchSet</code> objects to specify which CloudFront requests
 *          that
 *          you want to allow, block, or count. For example, if you're receiving
 *          requests that contain cross-site scripting attacks in the request body and you want to
 *          block the requests, you can create an <code>XssMatchSet</code> with the applicable
 *          settings, and then configure AWS WAF to block the requests. </p>
 * 		       <p>To create and configure an <code>XssMatchSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Submit a <a>CreateXssMatchSet</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<a>UpdateIPSet</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateXssMatchSet</code> request to specify the parts of web requests that you want AWS WAF to
 * 				inspect for cross-site scripting attacks.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 */
export class UpdateXssMatchSetCommand extends $Command<
  UpdateXssMatchSetCommandInput,
  UpdateXssMatchSetCommandOutput,
  WAFRegionalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateXssMatchSetCommandInput) {
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
  ): Handler<UpdateXssMatchSetCommandInput, UpdateXssMatchSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "UpdateXssMatchSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateXssMatchSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateXssMatchSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateXssMatchSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateXssMatchSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateXssMatchSetCommandOutput> {
    return deserializeAws_json1_1UpdateXssMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
