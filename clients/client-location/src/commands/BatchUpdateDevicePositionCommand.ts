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
} from "@smithy/types";

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  BatchUpdateDevicePositionRequest,
  BatchUpdateDevicePositionRequestFilterSensitiveLog,
  BatchUpdateDevicePositionResponse,
} from "../models/models_0";
import { de_BatchUpdateDevicePositionCommand, se_BatchUpdateDevicePositionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateDevicePositionCommand}.
 */
export interface BatchUpdateDevicePositionCommandInput extends BatchUpdateDevicePositionRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateDevicePositionCommand}.
 */
export interface BatchUpdateDevicePositionCommandOutput extends BatchUpdateDevicePositionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Uploads position update data for one or more devices to a tracker resource (up to
 *            10 devices per batch). Amazon Location uses the data when it reports the last known device
 *            position and position history. Amazon Location retains location data for 30 days.</p>
 *          <note>
 *             <p>Position updates are handled based on the <code>PositionFiltering</code>
 *                property of the tracker. When <code>PositionFiltering</code> is set to
 *                <code>TimeBased</code>, updates are evaluated against linked geofence collections,
 *                and location data is stored at a maximum of one position per 30 second interval.
 *                If your update frequency is more often than every 30 seconds, only one update per
 *                30 seconds is stored for each unique device ID.</p>
 *             <p>When <code>PositionFiltering</code> is set to <code>DistanceBased</code>
 *                 filtering, location data is stored and evaluated against linked geofence
 *                 collections only if the device has moved more than 30 m (98.4 ft).</p>
 *             <p>When <code>PositionFiltering</code> is set to <code>AccuracyBased</code>
 *                 filtering, location data is stored and evaluated against linked geofence
 *                 collections only if the device has moved more than the measured accuracy. For
 *                 example, if two consecutive updates from a device have a horizontal accuracy of
 *                 5 m and 10 m, the second update is neither stored or evaluated if the device has
 *                 moved less than 15 m. If <code>PositionFiltering</code> is set to
 *                 <code>AccuracyBased</code> filtering, Amazon Location uses the default value
 *                 <code>\{ "Horizontal": 0\}</code> when accuracy is not provided on a
 *                 <code>DevicePositionUpdate</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchUpdateDevicePositionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchUpdateDevicePositionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // BatchUpdateDevicePositionRequest
 *   TrackerName: "STRING_VALUE", // required
 *   Updates: [ // DevicePositionUpdateList // required
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
 * const command = new BatchUpdateDevicePositionCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateDevicePositionResponse
 * //   Errors: [ // BatchUpdateDevicePositionErrorList // required
 * //     { // BatchUpdateDevicePositionError
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
 * @param BatchUpdateDevicePositionCommandInput - {@link BatchUpdateDevicePositionCommandInput}
 * @returns {@link BatchUpdateDevicePositionCommandOutput}
 * @see {@link BatchUpdateDevicePositionCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateDevicePositionCommandOutput} for command's `response` shape.
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
export class BatchUpdateDevicePositionCommand extends $Command<
  BatchUpdateDevicePositionCommandInput,
  BatchUpdateDevicePositionCommandOutput,
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
  constructor(readonly input: BatchUpdateDevicePositionCommandInput) {
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
  ): Handler<BatchUpdateDevicePositionCommandInput, BatchUpdateDevicePositionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchUpdateDevicePositionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "BatchUpdateDevicePositionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdateDevicePositionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: BatchUpdateDevicePositionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchUpdateDevicePositionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchUpdateDevicePositionCommandOutput> {
    return de_BatchUpdateDevicePositionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
