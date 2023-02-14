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
  BatchEvaluateGeofencesRequest,
  BatchEvaluateGeofencesRequestFilterSensitiveLog,
  BatchEvaluateGeofencesResponse,
  BatchEvaluateGeofencesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchEvaluateGeofencesCommand,
  serializeAws_restJson1BatchEvaluateGeofencesCommand,
} from "../protocols/Aws_restJson1";

export interface BatchEvaluateGeofencesCommandInput extends BatchEvaluateGeofencesRequest {}
export interface BatchEvaluateGeofencesCommandOutput extends BatchEvaluateGeofencesResponse, __MetadataBearer {}

/**
 * <p>Evaluates device positions against the geofence geometries from a given geofence
 *             collection.</p>
 *          <p>This operation always returns an empty response because geofences are asynchronously
 *             evaluated. The evaluation determines if the device has entered or exited a geofenced
 *             area, and then publishes one of the following events to Amazon EventBridge:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ENTER</code> if Amazon Location determines that the tracked device has entered
 *                     a geofenced area.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>EXIT</code> if Amazon Location determines that the tracked device has exited a
 *                     geofenced area.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The last geofence that a device was observed within is tracked for 30 days after
 *                 the most recent device position update.</p>
 *          </note>
 *          <note>
 *             <p>Geofence evaluation uses the given device position. It does not account for the
 *                 optional <code>Accuracy</code> of a <code>DevicePositionUpdate</code>.</p>
 *          </note>
 *          <note>
 *             <p>The <code>DeviceID</code> is used as a string to represent the device. You do not
 *                 need to have a <code>Tracker</code> associated with the <code>DeviceID</code>.</p>
 *          </note>
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
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class BatchEvaluateGeofencesCommand extends $Command<
  BatchEvaluateGeofencesCommandInput,
  BatchEvaluateGeofencesCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchEvaluateGeofencesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "BatchEvaluateGeofencesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchEvaluateGeofencesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchEvaluateGeofencesResponseFilterSensitiveLog,
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
