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
  PutGeofenceRequest,
  PutGeofenceRequestFilterSensitiveLog,
  PutGeofenceResponse,
  PutGeofenceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutGeofenceCommand,
  serializeAws_restJson1PutGeofenceCommand,
} from "../protocols/Aws_restJson1";

export interface PutGeofenceCommandInput extends PutGeofenceRequest {}
export interface PutGeofenceCommandOutput extends PutGeofenceResponse, __MetadataBearer {}

/**
 * <p>Stores a geofence geometry in a given geofence collection, or updates the geometry of
 *             an existing geofence if a geofence ID is included in the request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, PutGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, PutGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new PutGeofenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutGeofenceCommandInput} for command's `input` shape.
 * @see {@link PutGeofenceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class PutGeofenceCommand extends $Command<
  PutGeofenceCommandInput,
  PutGeofenceCommandOutput,
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

  constructor(readonly input: PutGeofenceCommandInput) {
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
  ): Handler<PutGeofenceCommandInput, PutGeofenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutGeofenceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "PutGeofenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutGeofenceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutGeofenceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutGeofenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutGeofenceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutGeofenceCommandOutput> {
    return deserializeAws_restJson1PutGeofenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
