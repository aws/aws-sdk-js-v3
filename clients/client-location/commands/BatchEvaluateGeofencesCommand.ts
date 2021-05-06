import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { BatchEvaluateGeofencesRequest, BatchEvaluateGeofencesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchEvaluateGeofencesCommand,
  serializeAws_restJson1BatchEvaluateGeofencesCommand,
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

export interface BatchEvaluateGeofencesCommandInput extends BatchEvaluateGeofencesRequest {}
export interface BatchEvaluateGeofencesCommandOutput extends BatchEvaluateGeofencesResponse, __MetadataBearer {}

/**
 * <p>Evaluates device positions against the geofence geometries from a given geofence
 *             collection. The evaluation determines if the device has entered or exited a geofenced
 *             area, which publishes ENTER or EXIT geofence events to Amazon EventBridge.</p>
 *         <note>
 *             <p>The last geofence that a device was observed within, if any, is tracked for 30
 *                 days after the most recent device position update</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchEvaluateGeofencesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchEvaluateGeofencesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new BatchEvaluateGeofencesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchEvaluateGeofencesCommandInput} for command's `input` shape.
 * @see {@link BatchEvaluateGeofencesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchEvaluateGeofencesCommand extends $Command<
  BatchEvaluateGeofencesCommandInput,
  BatchEvaluateGeofencesCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchEvaluateGeofencesCommandInput) {
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
  ): Handler<BatchEvaluateGeofencesCommandInput, BatchEvaluateGeofencesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "BatchEvaluateGeofencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchEvaluateGeofencesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchEvaluateGeofencesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchEvaluateGeofencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchEvaluateGeofencesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchEvaluateGeofencesCommandOutput> {
    return deserializeAws_restJson1BatchEvaluateGeofencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
