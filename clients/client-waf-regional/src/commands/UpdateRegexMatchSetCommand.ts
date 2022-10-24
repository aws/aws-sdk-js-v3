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
  UpdateRegexMatchSetRequest,
  UpdateRegexMatchSetRequestFilterSensitiveLog,
  UpdateRegexMatchSetResponse,
  UpdateRegexMatchSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateRegexMatchSetCommand,
  serializeAws_json1_1UpdateRegexMatchSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

export interface UpdateRegexMatchSetCommandInput extends UpdateRegexMatchSetRequest {}
export interface UpdateRegexMatchSetCommandOutput extends UpdateRegexMatchSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Inserts or deletes <a>RegexMatchTuple</a> objects (filters) in a <a>RegexMatchSet</a>. For each <code>RegexMatchSetUpdate</code> object,
 * 			you specify the following values: </p>
 * 		       <ul>
 *             <li>
 *                <p>Whether to insert or delete the object from the array. If you want to change a <code>RegexMatchSetUpdate</code> object,
 * 				you delete the existing object and add a new one.</p>
 *             </li>
 *             <li>
 *                <p>The part of a web request that you want AWS WAF to inspectupdate, such as a query string or the value of the <code>User-Agent</code> header. </p>
 *             </li>
 *             <li>
 *                <p>The identifier of the pattern (a regular expression) that you want AWS WAF to look for. For more information, see <a>RegexPatternSet</a>. </p>
 *             </li>
 *             <li>
 *                <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p>
 *             </li>
 *          </ul>
 * 		       <p> For example, you can create a <code>RegexPatternSet</code> that matches any requests with <code>User-Agent</code> headers
 *          that contain the string <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p>
 * 		       <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Create a <code>RegexMatchSet.</code> For more information, see <a>CreateRegexMatchSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<code>UpdateRegexMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateRegexMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect
 * 				(for example, the header or the URI) and the identifier of the <code>RegexPatternSet</code> that contain the regular expression patters you want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, UpdateRegexMatchSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, UpdateRegexMatchSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new UpdateRegexMatchSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRegexMatchSetCommandInput} for command's `input` shape.
 * @see {@link UpdateRegexMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 */
export class UpdateRegexMatchSetCommand extends $Command<
  UpdateRegexMatchSetCommandInput,
  UpdateRegexMatchSetCommandOutput,
  WAFRegionalClientResolvedConfig
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

  constructor(readonly input: UpdateRegexMatchSetCommandInput) {
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
  ): Handler<UpdateRegexMatchSetCommandInput, UpdateRegexMatchSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRegexMatchSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "UpdateRegexMatchSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRegexMatchSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateRegexMatchSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRegexMatchSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateRegexMatchSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRegexMatchSetCommandOutput> {
    return deserializeAws_json1_1UpdateRegexMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
