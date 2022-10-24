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
  CreateRegexMatchSetRequest,
  CreateRegexMatchSetRequestFilterSensitiveLog,
  CreateRegexMatchSetResponse,
  CreateRegexMatchSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateRegexMatchSetCommand,
  serializeAws_json1_1CreateRegexMatchSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

export interface CreateRegexMatchSetCommandInput extends CreateRegexMatchSetRequest {}
export interface CreateRegexMatchSetCommandOutput extends CreateRegexMatchSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Creates a <a>RegexMatchSet</a>. You then use <a>UpdateRegexMatchSet</a> to identify the part of a
 *          web request that you want AWS WAF to inspect, such as the values of the <code>User-Agent</code> header or the query string.
 *          For example, you can create a <code>RegexMatchSet</code> that contains a <code>RegexMatchTuple</code> that looks for any requests with <code>User-Agent</code> headers
 *          that match a <code>RegexPatternSet</code> with pattern <code>B[a@]dB[o0]t</code>. You can then configure AWS WAF to reject those requests.</p>
 *          <p>To create and configure a <code>RegexMatchSet</code>, perform the following steps:</p>
 *          <ol>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 *                   <code>CreateRegexMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>CreateRegexMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 *                   <code>UpdateRegexMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <a>UpdateRegexMatchSet</a> request to specify the part of the request that you want AWS WAF to inspect
 *                   (for example, the header or the URI) and the value, using a <code>RegexPatternSet</code>, that you want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 *          <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 *             <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, CreateRegexMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, CreateRegexMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new CreateRegexMatchSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRegexMatchSetCommandInput} for command's `input` shape.
 * @see {@link CreateRegexMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 */
export class CreateRegexMatchSetCommand extends $Command<
  CreateRegexMatchSetCommandInput,
  CreateRegexMatchSetCommandOutput,
  WAFClientResolvedConfig
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

  constructor(readonly input: CreateRegexMatchSetCommandInput) {
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
  ): Handler<CreateRegexMatchSetCommandInput, CreateRegexMatchSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRegexMatchSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "CreateRegexMatchSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRegexMatchSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateRegexMatchSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRegexMatchSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateRegexMatchSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRegexMatchSetCommandOutput> {
    return deserializeAws_json1_1CreateRegexMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
