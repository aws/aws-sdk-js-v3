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
  GetRateBasedRuleManagedKeysRequest,
  GetRateBasedRuleManagedKeysRequestFilterSensitiveLog,
  GetRateBasedRuleManagedKeysResponse,
  GetRateBasedRuleManagedKeysResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand,
  serializeAws_json1_1GetRateBasedRuleManagedKeysCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";

export interface GetRateBasedRuleManagedKeysCommandInput extends GetRateBasedRuleManagedKeysRequest {}
export interface GetRateBasedRuleManagedKeysCommandOutput
  extends GetRateBasedRuleManagedKeysResponse,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns an array of IP addresses currently being blocked by the <a>RateBasedRule</a> that is specified by the <code>RuleId</code>. The maximum
 *          number of managed keys that will be blocked is 10,000. If more than 10,000 addresses exceed
 *          the rate limit, the 10,000 addresses with the highest rates will be blocked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, GetRateBasedRuleManagedKeysCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, GetRateBasedRuleManagedKeysCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new GetRateBasedRuleManagedKeysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRateBasedRuleManagedKeysCommandInput} for command's `input` shape.
 * @see {@link GetRateBasedRuleManagedKeysCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for WAFClient's `config` shape.
 *
 */
export class GetRateBasedRuleManagedKeysCommand extends $Command<
  GetRateBasedRuleManagedKeysCommandInput,
  GetRateBasedRuleManagedKeysCommandOutput,
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

  constructor(readonly input: GetRateBasedRuleManagedKeysCommandInput) {
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
  ): Handler<GetRateBasedRuleManagedKeysCommandInput, GetRateBasedRuleManagedKeysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRateBasedRuleManagedKeysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WAFClient";
    const commandName = "GetRateBasedRuleManagedKeysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRateBasedRuleManagedKeysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRateBasedRuleManagedKeysResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRateBasedRuleManagedKeysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRateBasedRuleManagedKeysCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRateBasedRuleManagedKeysCommandOutput> {
    return deserializeAws_json1_1GetRateBasedRuleManagedKeysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
