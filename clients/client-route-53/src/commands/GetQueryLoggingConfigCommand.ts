// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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
  GetQueryLoggingConfigRequest,
  GetQueryLoggingConfigRequestFilterSensitiveLog,
  GetQueryLoggingConfigResponse,
  GetQueryLoggingConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetQueryLoggingConfigCommand,
  serializeAws_restXmlGetQueryLoggingConfigCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface GetQueryLoggingConfigCommandInput extends GetQueryLoggingConfigRequest {}
export interface GetQueryLoggingConfigCommandOutput extends GetQueryLoggingConfigResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specified configuration for DNS query logging.</p>
 *          <p>For more information about DNS query logs, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateQueryLoggingConfig.html">CreateQueryLoggingConfig</a> and <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html">Logging DNS
 * 			Queries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetQueryLoggingConfigCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetQueryLoggingConfigCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetQueryLoggingConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetQueryLoggingConfigCommandInput} for command's `input` shape.
 * @see {@link GetQueryLoggingConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class GetQueryLoggingConfigCommand extends $Command<
  GetQueryLoggingConfigCommandInput,
  GetQueryLoggingConfigCommandOutput,
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

  constructor(readonly input: GetQueryLoggingConfigCommandInput) {
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
  ): Handler<GetQueryLoggingConfigCommandInput, GetQueryLoggingConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetQueryLoggingConfigCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetQueryLoggingConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetQueryLoggingConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetQueryLoggingConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetQueryLoggingConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetQueryLoggingConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQueryLoggingConfigCommandOutput> {
    return deserializeAws_restXmlGetQueryLoggingConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
