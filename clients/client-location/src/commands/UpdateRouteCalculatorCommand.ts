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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  UpdateRouteCalculatorRequest,
  UpdateRouteCalculatorRequestFilterSensitiveLog,
  UpdateRouteCalculatorResponse,
  UpdateRouteCalculatorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRouteCalculatorCommand,
  serializeAws_restJson1UpdateRouteCalculatorCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateRouteCalculatorCommandInput extends UpdateRouteCalculatorRequest {}
export interface UpdateRouteCalculatorCommandOutput extends UpdateRouteCalculatorResponse, __MetadataBearer {}

/**
 * <p>Updates the specified properties for a given route calculator resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdateRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdateRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new UpdateRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link UpdateRouteCalculatorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class UpdateRouteCalculatorCommand extends $Command<
  UpdateRouteCalculatorCommandInput,
  UpdateRouteCalculatorCommandOutput,
  LocationClientResolvedConfig
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

  constructor(readonly input: UpdateRouteCalculatorCommandInput) {
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
  ): Handler<UpdateRouteCalculatorCommandInput, UpdateRouteCalculatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRouteCalculatorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "UpdateRouteCalculatorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRouteCalculatorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateRouteCalculatorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRouteCalculatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRouteCalculatorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRouteCalculatorCommandOutput> {
    return deserializeAws_restJson1UpdateRouteCalculatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
