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
  GetAccountLimitRequest,
  GetAccountLimitRequestFilterSensitiveLog,
  GetAccountLimitResponse,
  GetAccountLimitResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetAccountLimitCommand,
  serializeAws_restXmlGetAccountLimitCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface GetAccountLimitCommandInput extends GetAccountLimitRequest {}
export interface GetAccountLimitCommandOutput extends GetAccountLimitResponse, __MetadataBearer {}

/**
 * <p>Gets the specified limit for the current account, for example, the maximum number of
 * 			health checks that you can create using the account.</p>
 *          <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
 * 				<i>Amazon Route 53 Developer Guide</i>. To request a higher limit,
 * 				<a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53">open a case</a>.</p>
 *          <note>
 *             <p>You can also view account limits in Amazon Web Services Trusted Advisor. Sign in to
 * 				the Amazon Web Services Management Console and open the Trusted Advisor console at <a href="https://console.aws.amazon.com/trustedadvisor">https://console.aws.amazon.com/trustedadvisor/</a>. Then choose <b>Service limits</b> in the navigation pane.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetAccountLimitCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetAccountLimitCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetAccountLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountLimitCommandInput} for command's `input` shape.
 * @see {@link GetAccountLimitCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class GetAccountLimitCommand extends $Command<
  GetAccountLimitCommandInput,
  GetAccountLimitCommandOutput,
  Route53ClientResolvedConfig
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

  constructor(readonly input: GetAccountLimitCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccountLimitCommandInput, GetAccountLimitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAccountLimitCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetAccountLimitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAccountLimitRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAccountLimitResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccountLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetAccountLimitCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccountLimitCommandOutput> {
    return deserializeAws_restXmlGetAccountLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
