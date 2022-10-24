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
  DeleteGeoMatchSetRequest,
  DeleteGeoMatchSetRequestFilterSensitiveLog,
  DeleteGeoMatchSetResponse,
  DeleteGeoMatchSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteGeoMatchSetCommand,
  serializeAws_json1_1DeleteGeoMatchSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

export interface DeleteGeoMatchSetCommandInput extends DeleteGeoMatchSetRequest {}
export interface DeleteGeoMatchSetCommandOutput extends DeleteGeoMatchSetResponse, __MetadataBearer {}

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, DeleteGeoMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, DeleteGeoMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new DeleteGeoMatchSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGeoMatchSetCommandInput} for command's `input` shape.
 * @see {@link DeleteGeoMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 */
export class DeleteGeoMatchSetCommand extends $Command<
  DeleteGeoMatchSetCommandInput,
  DeleteGeoMatchSetCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteGeoMatchSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "DeleteGeoMatchSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGeoMatchSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteGeoMatchSetResponseFilterSensitiveLog,
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
