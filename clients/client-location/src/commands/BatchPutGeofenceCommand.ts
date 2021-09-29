import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { BatchPutGeofenceRequest, BatchPutGeofenceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchPutGeofenceCommand,
  serializeAws_restJson1BatchPutGeofenceCommand,
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

export interface BatchPutGeofenceCommandInput extends BatchPutGeofenceRequest {}
export interface BatchPutGeofenceCommandOutput extends BatchPutGeofenceResponse, __MetadataBearer {}

/**
 * <p>A batch request for storing geofence geometries into a given geofence collection, or
 *             updates the geometry of an existing geofence if a geofence ID is included in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchPutGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchPutGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchPutGeofenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchPutGeofenceCommandInput} for command's `input` shape.
 * @see {@link BatchPutGeofenceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchPutGeofenceCommand extends $Command<
  BatchPutGeofenceCommandInput,
  BatchPutGeofenceCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchPutGeofenceCommandInput) {
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
  ): Handler<BatchPutGeofenceCommandInput, BatchPutGeofenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "BatchPutGeofenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchPutGeofenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchPutGeofenceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchPutGeofenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchPutGeofenceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchPutGeofenceCommandOutput> {
    return deserializeAws_restJson1BatchPutGeofenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
