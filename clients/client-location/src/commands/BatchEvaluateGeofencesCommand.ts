// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  BatchEvaluateGeofencesRequest,
  BatchEvaluateGeofencesRequestFilterSensitiveLog,
  BatchEvaluateGeofencesResponse,
} from "../models/models_0";
import { de_BatchEvaluateGeofencesCommand, se_BatchEvaluateGeofencesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchEvaluateGeofencesCommand}.
 */
export interface BatchEvaluateGeofencesCommandInput extends BatchEvaluateGeofencesRequest {}
/**
 * @public
 *
 * The output of {@link BatchEvaluateGeofencesCommand}.
 */
export interface BatchEvaluateGeofencesCommandOutput extends BatchEvaluateGeofencesResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // BatchEvaluateGeofencesRequest
 *   CollectionName: "STRING_VALUE", // required
 *   DevicePositionUpdates: [ // DevicePositionUpdateList // required
 *     { // DevicePositionUpdate
 *       DeviceId: "STRING_VALUE", // required
 *       SampleTime: new Date("TIMESTAMP"), // required
 *       Position: [ // Position // required
 *         Number("double"),
 *       ],
 *       Accuracy: { // PositionalAccuracy
 *         Horizontal: Number("double"), // required
 *       },
 *       PositionProperties: { // PropertyMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchEvaluateGeofencesCommand(input);
 * const response = await client.send(command);
 * // { // BatchEvaluateGeofencesResponse
 * //   Errors: [ // BatchEvaluateGeofencesErrorList // required
 * //     { // BatchEvaluateGeofencesError
 * //       DeviceId: "STRING_VALUE", // required
 * //       SampleTime: new Date("TIMESTAMP"), // required
 * //       Error: { // BatchItemError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchEvaluateGeofencesCommandInput - {@link BatchEvaluateGeofencesCommandInput}
 * @returns {@link BatchEvaluateGeofencesCommandOutput}
 * @see {@link BatchEvaluateGeofencesCommandInput} for command's `input` shape.
 * @see {@link BatchEvaluateGeofencesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
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

  /**
   * @public
   */
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
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LocationService",
        operation: "BatchEvaluateGeofences",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: BatchEvaluateGeofencesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchEvaluateGeofencesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchEvaluateGeofencesCommandOutput> {
    return de_BatchEvaluateGeofencesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
