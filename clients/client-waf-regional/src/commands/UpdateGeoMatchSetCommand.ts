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
  UpdateGeoMatchSetRequest,
  UpdateGeoMatchSetRequestFilterSensitiveLog,
  UpdateGeoMatchSetResponse,
  UpdateGeoMatchSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateGeoMatchSetCommand,
  serializeAws_json1_1UpdateGeoMatchSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

export interface UpdateGeoMatchSetCommandInput extends UpdateGeoMatchSetRequest {}
export interface UpdateGeoMatchSetCommandOutput extends UpdateGeoMatchSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Inserts or deletes <a>GeoMatchConstraint</a> objects in an <code>GeoMatchSet</code>. For each <code>GeoMatchConstraint</code> object,
 * 			you specify the following values: </p>
 * 		       <ul>
 *             <li>
 *                       <p>Whether to insert or delete the object from the array. If you want to change an <code>GeoMatchConstraint</code> object, you delete the existing object and add a new one.</p>
 *                   </li>
 *             <li>
 * 				           <p>The <code>Type</code>. The only valid value for <code>Type</code> is <code>Country</code>.</p>
 * 				        </li>
 *             <li>
 *                <p>The <code>Value</code>, which is a two character code for the country to add to the <code>GeoMatchConstraint</code> object. Valid codes are listed in <a>GeoMatchConstraint$Value</a>.</p>
 *             </li>
 *          </ul>
 *
 * 		       <p>To create and configure an <code>GeoMatchSet</code>, perform the following steps:</p>
 * 		       <ol>
 *             <li>
 *                <p>Submit a <a>CreateGeoMatchSet</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Use <a>GetChangeToken</a> to get the change token that you provide in the <code>ChangeToken</code> parameter of an
 * 				<a>UpdateGeoMatchSet</a> request.</p>
 *             </li>
 *             <li>
 *                <p>Submit an <code>UpdateGeoMatchSet</code> request to specify the country that you want AWS WAF to watch for.</p>
 *             </li>
 *          </ol>
 * 		       <p>When you update an <code>GeoMatchSet</code>, you specify the country that you want to add and/or the country that you want to delete.
 * 			If you want to change a country, you delete the existing country and add the new one.</p>
 * 		       <p>For more information about how to use the AWS WAF API to allow or block HTTP requests, see the
 * 			<a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, UpdateGeoMatchSetCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, UpdateGeoMatchSetCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const command = new UpdateGeoMatchSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGeoMatchSetCommandInput} for command's `input` shape.
 * @see {@link UpdateGeoMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 */
export class UpdateGeoMatchSetCommand extends $Command<
  UpdateGeoMatchSetCommandInput,
  UpdateGeoMatchSetCommandOutput,
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

  constructor(readonly input: UpdateGeoMatchSetCommandInput) {
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
  ): Handler<UpdateGeoMatchSetCommandInput, UpdateGeoMatchSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateGeoMatchSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFRegionalClient";
    const commandName = "UpdateGeoMatchSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGeoMatchSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateGeoMatchSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGeoMatchSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateGeoMatchSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGeoMatchSetCommandOutput> {
    return deserializeAws_json1_1UpdateGeoMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
