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
  GetHealthCheckStatusRequest,
  GetHealthCheckStatusRequestFilterSensitiveLog,
  GetHealthCheckStatusResponse,
  GetHealthCheckStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetHealthCheckStatusCommand,
  serializeAws_restXmlGetHealthCheckStatusCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface GetHealthCheckStatusCommandInput extends GetHealthCheckStatusRequest {}
export interface GetHealthCheckStatusCommandOutput extends GetHealthCheckStatusResponse, __MetadataBearer {}

/**
 * <p>Gets status of a specified health check. </p>
 *          <important>
 *             <p>This API is intended for use during development to diagnose behavior. It doesn’t
 * 				support production use-cases with high query rates that require immediate and
 * 				actionable responses.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHealthCheckStatusCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHealthCheckStatusCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHealthCheckStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHealthCheckStatusCommandInput} for command's `input` shape.
 * @see {@link GetHealthCheckStatusCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class GetHealthCheckStatusCommand extends $Command<
  GetHealthCheckStatusCommandInput,
  GetHealthCheckStatusCommandOutput,
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

  constructor(readonly input: GetHealthCheckStatusCommandInput) {
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
  ): Handler<GetHealthCheckStatusCommandInput, GetHealthCheckStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetHealthCheckStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetHealthCheckStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHealthCheckStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetHealthCheckStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHealthCheckStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetHealthCheckStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHealthCheckStatusCommandOutput> {
    return deserializeAws_restXmlGetHealthCheckStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
