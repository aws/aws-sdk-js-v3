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
  GetGeofenceRequest,
  GetGeofenceRequestFilterSensitiveLog,
  GetGeofenceResponse,
  GetGeofenceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetGeofenceCommand,
  serializeAws_restJson1GetGeofenceCommand,
} from "../protocols/Aws_restJson1";

export interface GetGeofenceCommandInput extends GetGeofenceRequest {}
export interface GetGeofenceCommandOutput extends GetGeofenceResponse, __MetadataBearer {}

/**
 * <p>Retrieves the geofence details from a geofence collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new GetGeofenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGeofenceCommandInput} for command's `input` shape.
 * @see {@link GetGeofenceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class GetGeofenceCommand extends $Command<
  GetGeofenceCommandInput,
  GetGeofenceCommandOutput,
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

  constructor(readonly input: GetGeofenceCommandInput) {
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
  ): Handler<GetGeofenceCommandInput, GetGeofenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetGeofenceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "GetGeofenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGeofenceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetGeofenceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGeofenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetGeofenceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGeofenceCommandOutput> {
    return deserializeAws_restJson1GetGeofenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
