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
  GetSqlInjectionMatchSetRequest,
  GetSqlInjectionMatchSetRequestFilterSensitiveLog,
  GetSqlInjectionMatchSetResponse,
  GetSqlInjectionMatchSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetSqlInjectionMatchSetCommand,
  serializeAws_json1_1GetSqlInjectionMatchSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

export interface GetSqlInjectionMatchSetCommandInput extends GetSqlInjectionMatchSetRequest {}
export interface GetSqlInjectionMatchSetCommandOutput extends GetSqlInjectionMatchSetResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 		       <p>Returns the <a>SqlInjectionMatchSet</a> that is specified by <code>SqlInjectionMatchSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetSqlInjectionMatchSetCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetSqlInjectionMatchSetCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new GetSqlInjectionMatchSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSqlInjectionMatchSetCommandInput} for command's `input` shape.
 * @see {@link GetSqlInjectionMatchSetCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 */
export class GetSqlInjectionMatchSetCommand extends $Command<
  GetSqlInjectionMatchSetCommandInput,
  GetSqlInjectionMatchSetCommandOutput,
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

  constructor(readonly input: GetSqlInjectionMatchSetCommandInput) {
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
  ): Handler<GetSqlInjectionMatchSetCommandInput, GetSqlInjectionMatchSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSqlInjectionMatchSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "GetSqlInjectionMatchSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSqlInjectionMatchSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSqlInjectionMatchSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSqlInjectionMatchSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSqlInjectionMatchSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSqlInjectionMatchSetCommandOutput> {
    return deserializeAws_json1_1GetSqlInjectionMatchSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
