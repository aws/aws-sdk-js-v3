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
  GetHealthCheckCountRequest,
  GetHealthCheckCountRequestFilterSensitiveLog,
  GetHealthCheckCountResponse,
  GetHealthCheckCountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetHealthCheckCountCommand,
  serializeAws_restXmlGetHealthCheckCountCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface GetHealthCheckCountCommandInput extends GetHealthCheckCountRequest {}
export interface GetHealthCheckCountCommandOutput extends GetHealthCheckCountResponse, __MetadataBearer {}

/**
 * <p>Retrieves the number of health checks that are associated with the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckCountCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckCountCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHealthCheckCountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHealthCheckCountCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckCountCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class GetHealthCheckCountCommand extends $Command<
  GetHealthCheckCountCommandInput,
  GetHealthCheckCountCommandOutput,
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

  constructor(readonly input: GetHealthCheckCountCommandInput) {
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
  ): Handler<GetHealthCheckCountCommandInput, GetHealthCheckCountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetHealthCheckCountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetHealthCheckCountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHealthCheckCountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetHealthCheckCountResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHealthCheckCountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetHealthCheckCountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHealthCheckCountCommandOutput> {
    return deserializeAws_restXmlGetHealthCheckCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
