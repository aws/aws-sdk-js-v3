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
  UpdateRegexPatternSetRequest,
  UpdateRegexPatternSetRequestFilterSensitiveLog,
  UpdateRegexPatternSetResponse,
  UpdateRegexPatternSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateRegexPatternSetCommand,
  serializeAws_json1_1UpdateRegexPatternSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

export interface UpdateRegexPatternSetCommandInput extends UpdateRegexPatternSetRequest {}
export interface UpdateRegexPatternSetCommandOutput extends UpdateRegexPatternSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Inserts or deletes <code>RegexPatternString</code> objects in a <a>RegexPatternSet</a>. For each <code>RegexPatternString</code> object,
 * 			you specify the following values: </p>
 * 		       <ul>
 *             <li>
 * 			            <p>Whether to insert or delete the <code>RegexPatternString</code>.</p>
 *             </li>
 *             <li>
 *                <p>The regular expression pattern that you want to insert or delete. For more information, see <a>RegexPatternSet</a>. </p>
 *             </li>
 *          </ul>
 * 		       <p> For example, you can create a <code>RegexPatternString</code> such as <code>B[a@]dB[o0]t</code>. AWS WAF will match this <code>RegexPatternString</code> to:</p>
 *                 <ul>
 *             <li>
 * 				           <p>BadBot</p>
 * 				        </li>
 *             <li>
 * 				           <p>BadB0t</p>
 * 				        </li>
 *             <li>
 * 				           <p>B@dBot</p>
 * 				        </li>
 *             <li>
 * 				           <p>B@dB0t</p>
 * 				        </li>
 *          </ul>
 * 		       <p>To create and configure a <code>RegexPatternSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Create a <code>RegexPatternSet.</code> For more information, see <a>CreateRegexPatternSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<code>UpdateRegexPatternSet</code> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateRegexPatternSet</code> request to specify the regular expression pattern that you want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, UpdateRegexPatternSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, UpdateRegexPatternSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new UpdateRegexPatternSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRegexPatternSetCommandInput} for command's `input` shape.
 * @see {@link UpdateRegexPatternSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 */
export class UpdateRegexPatternSetCommand extends $Command<
  UpdateRegexPatternSetCommandInput,
  UpdateRegexPatternSetCommandOutput,
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

  constructor(readonly input: UpdateRegexPatternSetCommandInput) {
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
  ): Handler<UpdateRegexPatternSetCommandInput, UpdateRegexPatternSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRegexPatternSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "UpdateRegexPatternSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRegexPatternSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateRegexPatternSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRegexPatternSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateRegexPatternSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRegexPatternSetCommandOutput> {
    return deserializeAws_json1_1UpdateRegexPatternSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
