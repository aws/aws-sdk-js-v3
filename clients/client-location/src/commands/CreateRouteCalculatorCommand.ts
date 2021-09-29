import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { CreateRouteCalculatorRequest, CreateRouteCalculatorResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRouteCalculatorCommand,
  serializeAws_restJson1CreateRouteCalculatorCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface CreateRouteCalculatorCommandInput extends CreateRouteCalculatorRequest {}
export interface CreateRouteCalculatorCommandOutput extends CreateRouteCalculatorResponse, __MetadataBearer {}

/**
 * <p>Creates a route calculator resource in your AWS account.</p>
 *         <p>You can send requests to a route calculator resource to estimate travel time,
 *             distance, and get directions. A route calculator sources traffic and road network data
 *             from your chosen data provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreateRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreateRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new CreateRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link CreateRouteCalculatorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateRouteCalculatorCommand extends $Command<
  CreateRouteCalculatorCommandInput,
  CreateRouteCalculatorCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRouteCalculatorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRouteCalculatorCommandInput, CreateRouteCalculatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "CreateRouteCalculatorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRouteCalculatorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRouteCalculatorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRouteCalculatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRouteCalculatorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRouteCalculatorCommandOutput> {
    return deserializeAws_restJson1CreateRouteCalculatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
