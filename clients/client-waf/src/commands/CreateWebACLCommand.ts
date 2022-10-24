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
  CreateWebACLRequest,
  CreateWebACLRequestFilterSensitiveLog,
  CreateWebACLResponse,
  CreateWebACLResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateWebACLCommand,
  serializeAws_json1_1CreateWebACLCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

export interface CreateWebACLCommandInput extends CreateWebACLRequest {}
export interface CreateWebACLCommandOutput extends CreateWebACLResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Creates a <code>WebACL</code>, which contains the <code>Rules</code> that identify the CloudFront web requests that you want to allow, block, or count.
 * 			AWS WAF evaluates <code>Rules</code> in order based on the value of <code>Priority</code> for each <code>Rule</code>.</p>
 * 		       <p>You also specify a default action, either <code>ALLOW</code> or <code>BLOCK</code>. If a web request doesn't match
 * 			any of the <code>Rules</code> in a <code>WebACL</code>, AWS WAF responds to the request with the default action. </p>
 * 		       <p>To create and configure a <code>WebACL</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Create and update the <code>ByteMatchSet</code> objects and other predicates that you want to include in <code>Rules</code>.
 * 				For more information, see <a>CreateByteMatchSet</a>, <a>UpdateByteMatchSet</a>, <a>CreateIPSet</a>, <a>UpdateIPSet</a>,
 * 				<a>CreateSqlInjectionMatchSet</a>, and <a>UpdateSqlInjectionMatchSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Create and update the <code>Rules</code> that you want to include in the <code>WebACL</code>. For more information, see
 * 				<a>CreateRule</a> and <a>UpdateRule</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of a
 * 				<code>CreateWebACL</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit a <code>CreateWebACL</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>GetChangeToken</code> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<a>UpdateWebACL</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <a>UpdateWebACL</a> request to specify the <code>Rules</code> that you want to include in the <code>WebACL</code>,
 * 				to specify the default action, and to associate the <code>WebACL</code> with a CloudFront distribution.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, CreateWebACLCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, CreateWebACLCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new CreateWebACLCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWebACLCommandInput} for command's `input` shape.
 * @see {@link CreateWebACLCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 */
export class CreateWebACLCommand extends $Command<
  CreateWebACLCommandInput,
  CreateWebACLCommandOutput,
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

  constructor(readonly input: CreateWebACLCommandInput) {
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
  ): Handler<CreateWebACLCommandInput, CreateWebACLCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateWebACLCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "CreateWebACLCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWebACLRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateWebACLResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWebACLCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateWebACLCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWebACLCommandOutput> {
    return deserializeAws_json1_1CreateWebACLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
