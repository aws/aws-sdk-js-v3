// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  ForecastGeofenceEventsRequest,
  ForecastGeofenceEventsRequestFilterSensitiveLog,
  ForecastGeofenceEventsResponse,
  ForecastGeofenceEventsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ForecastGeofenceEventsCommand, se_ForecastGeofenceEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ForecastGeofenceEventsCommand}.
 */
export interface ForecastGeofenceEventsCommandInput extends ForecastGeofenceEventsRequest {}
/**
 * @public
 *
 * The output of {@link ForecastGeofenceEventsCommand}.
 */
export interface ForecastGeofenceEventsCommandOutput extends ForecastGeofenceEventsResponse, __MetadataBearer {}

/**
 * <p>Evaluates device positions against
 *       geofence geometries from a given geofence collection. The event forecasts three states for which
 *       a device can be in relative to a geofence:</p>
 *          <p>
 *             <code>ENTER</code>: If a device is outside of a geofence, but would breach the fence if the device is moving at its current speed within time horizon window.</p>
 *          <p>
 *             <code>EXIT</code>: If a device is inside of a geofence, but would breach the fence if the device is moving at its current speed within time horizon window.</p>
 *          <p>
 *             <code>IDLE</code>: If a device is inside of a geofence, and the device is not moving.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ForecastGeofenceEventsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ForecastGeofenceEventsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LocationClient(config);
 * const input = { // ForecastGeofenceEventsRequest
 *   CollectionName: "STRING_VALUE", // required
 *   DeviceState: { // ForecastGeofenceEventsDeviceState
 *     Position: [ // Position // required
 *       Number("double"),
 *     ],
 *     Speed: Number("double"),
 *   },
 *   TimeHorizonMinutes: Number("double"),
 *   DistanceUnit: "STRING_VALUE",
 *   SpeedUnit: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ForecastGeofenceEventsCommand(input);
 * const response = await client.send(command);
 * // { // ForecastGeofenceEventsResponse
 * //   ForecastedEvents: [ // ForecastedEventsList // required
 * //     { // ForecastedEvent
 * //       EventId: "STRING_VALUE", // required
 * //       GeofenceId: "STRING_VALUE", // required
 * //       IsDeviceInGeofence: true || false, // required
 * //       NearestDistance: Number("double"), // required
 * //       EventType: "STRING_VALUE", // required
 * //       ForecastedBreachTime: new Date("TIMESTAMP"),
 * //       GeofenceProperties: { // PropertyMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   DistanceUnit: "STRING_VALUE", // required
 * //   SpeedUnit: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ForecastGeofenceEventsCommandInput - {@link ForecastGeofenceEventsCommandInput}
 * @returns {@link ForecastGeofenceEventsCommandOutput}
 * @see {@link ForecastGeofenceEventsCommandInput} for command's `input` shape.
 * @see {@link ForecastGeofenceEventsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ForecastGeofenceEventsCommand extends $Command
  .classBuilder<
    ForecastGeofenceEventsCommandInput,
    ForecastGeofenceEventsCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "ForecastGeofenceEvents", {})
  .n("LocationClient", "ForecastGeofenceEventsCommand")
  .f(ForecastGeofenceEventsRequestFilterSensitiveLog, ForecastGeofenceEventsResponseFilterSensitiveLog)
  .ser(se_ForecastGeofenceEventsCommand)
  .de(de_ForecastGeofenceEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ForecastGeofenceEventsRequest;
      output: ForecastGeofenceEventsResponse;
    };
    sdk: {
      input: ForecastGeofenceEventsCommandInput;
      output: ForecastGeofenceEventsCommandOutput;
    };
  };
}
