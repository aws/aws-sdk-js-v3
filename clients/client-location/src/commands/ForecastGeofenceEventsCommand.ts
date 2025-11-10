// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ForecastGeofenceEventsRequest, ForecastGeofenceEventsResponse } from "../models/models_0";
import { ForecastGeofenceEvents } from "../schemas/schemas_0";

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
 * <p>This action forecasts future geofence events that are likely to occur within a specified time horizon if a device continues moving at its current speed. Each forecasted event is associated with a geofence from a provided geofence collection. A forecast event can have one of the following states:</p> <p> <code>ENTER</code>: The device position is outside the referenced geofence, but the device may cross into the geofence during the forecasting time horizon if it maintains its current speed.</p> <p> <code>EXIT</code>: The device position is inside the referenced geofence, but the device may leave the geofence during the forecasted time horizon if the device maintains it's current speed.</p> <p> <code>IDLE</code>:The device is inside the geofence, and it will remain inside the geofence through the end of the time horizon if the device maintains it's current speed.</p> <note> <p>Heading direction is not considered in the current version. The API takes a conservative approach and includes events that can occur for any heading.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ForecastGeofenceEventsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ForecastGeofenceEventsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
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
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "ForecastGeofenceEvents", {})
  .n("LocationClient", "ForecastGeofenceEventsCommand")
  .sc(ForecastGeofenceEvents)
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
