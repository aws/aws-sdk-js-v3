import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { BatchDeleteGeofenceRequest, BatchDeleteGeofenceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchDeleteGeofenceCommand,
  serializeAws_restJson1BatchDeleteGeofenceCommand,
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

export type BatchDeleteGeofenceCommandInput = BatchDeleteGeofenceRequest;
export type BatchDeleteGeofenceCommandOutput = BatchDeleteGeofenceResponse & __MetadataBearer;

/**
 * <p>Deletes a batch of geofences from a geofence collection.</p>
 *         <note>
 *             <p>This action deletes the resource permanently. You can't undo this action.</p>
 *         </note>
 */
export class BatchDeleteGeofenceCommand extends $Command<
  BatchDeleteGeofenceCommandInput,
  BatchDeleteGeofenceCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDeleteGeofenceCommandInput) {
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
  ): Handler<BatchDeleteGeofenceCommandInput, BatchDeleteGeofenceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "BatchDeleteGeofenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteGeofenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteGeofenceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeleteGeofenceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDeleteGeofenceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteGeofenceCommandOutput> {
    return deserializeAws_restJson1BatchDeleteGeofenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
