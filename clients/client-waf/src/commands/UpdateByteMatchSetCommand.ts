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
  UpdateByteMatchSetRequest,
  UpdateByteMatchSetRequestFilterSensitiveLog,
  UpdateByteMatchSetResponse,
  UpdateByteMatchSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateByteMatchSetCommand,
  serializeAws_json1_1UpdateByteMatchSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

export interface UpdateByteMatchSetCommandInput extends UpdateByteMatchSetRequest {}
export interface UpdateByteMatchSetCommandOutput extends UpdateByteMatchSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Inserts or deletes <a>ByteMatchTuple</a> objects (filters) in a <a>ByteMatchSet</a>. For each <code>ByteMatchTuple</code> object,
 * 			you specify the following values: </p>
 * 		       <ul>
 *             <li>
 *                <p>Whether to insert or delete the object from the array. If you want to change a <code>ByteMatchSetUpdate</code> object,
 * 				you delete the existing object and add a new one.</p>
 *             </li>
 *             <li>
 *                <p>The part of a web request that you want AWS WAF to inspect, such as a query string or the value of the <code>User-Agent</code> header. </p>
 *             </li>
 *             <li>
 *                <p>The bytes (typically a string that corresponds with ASCII characters) that you want AWS WAF to look for. For more information, including how you specify
 * 				the values for the AWS WAF API and the AWS CLI or SDKs, see <code>TargetString</code> in the <a>ByteMatchTuple</a> data type. </p>
 *             </li>
 *             <li>
 *                <p>Where to look, such as at the beginning or the end of a query string.</p>
 *             </li>
 *             <li>
 *                <p>Whether to perform any conversions on the request, such as converting it to lowercase, before inspecting it for the specified string.</p>
 *             </li>
 *          </ul>
 * 		       <p>For example, you can add a <code>ByteMatchSetUpdate</code> object that matches web requests in which <code>User-Agent</code> headers contain
 * 			the string <code>BadBot</code>. You can then configure AWS WAF to block those requests.</p>
 * 		       <p>To create and configure a <code>ByteMatchSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Create a <code>ByteMatchSet.</code> For more information, see <a>CreateByteMatchSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<code>UpdateByteMatchSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateByteMatchSet</code> request to specify the part of the request that you want AWS WAF to inspect
 * 				(for example, the header or the URI) and the value that you want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, UpdateByteMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, UpdateByteMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new UpdateByteMatchSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateByteMatchSetCommandInput} for command's `input` shape.
 * @see {@link UpdateByteMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 */
export class UpdateByteMatchSetCommand extends $Command<
  UpdateByteMatchSetCommandInput,
  UpdateByteMatchSetCommandOutput,
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

  constructor(readonly input: UpdateByteMatchSetCommandInput) {
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
  ): Handler<UpdateByteMatchSetCommandInput, UpdateByteMatchSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateByteMatchSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "UpdateByteMatchSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateByteMatchSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateByteMatchSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateByteMatchSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateByteMatchSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateByteMatchSetCommandOutput> {
    return deserializeAws_json1_1UpdateByteMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
