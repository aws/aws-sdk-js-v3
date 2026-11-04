// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CalculateRouteRequest, CalculateRouteResponse } from "../models/models_0";
import { CalculateRoute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CalculateRouteCommand}.
 */
export interface CalculateRouteCommandInput extends CalculateRouteRequest {}
/**
 * @public
 *
 * The output of {@link CalculateRouteCommand}.
 */
export interface CalculateRouteCommandOutput extends CalculateRouteResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This operation is no longer current and may be deprecated in the future. We recommend you upgrade to [`CalculateRoutes`](/location/latest/APIReference/API_CalculateRoutes.html) or [`CalculateIsolines`](/location/latest/APIReference/API_CalculateIsolines.html) unless you require Grab data.
 * >
 * > - `CalculateRoute` is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).
 * > - The version 2 `CalculateRoutes` operation gives better results for point-to-point routing, while the version 2 `CalculateIsolines` operation adds support for calculating service areas and travel time envelopes.
 * > - If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under `geo-routes` or `geo_routes`, not under `location`.
 * > - Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab.
 *
 * [Calculates a route](https://docs.aws.amazon.com/location/previous/developerguide/calculate-route.html) given the following required parameters: `DeparturePosition` and `DestinationPosition`. Requires that you first [create a route calculator resource](https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html).
 *
 * By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating the route.
 *
 * Additional options include:
 *
 * - [Specifying a departure time](https://docs.aws.amazon.com/location/previous/developerguide/departure-time.html) using either `DepartureTime` or `DepartNow`. This calculates a route based on predictive traffic data at the given time.
 *
 *   > **Note:** You can't specify both `DepartureTime` and `DepartNow` in a single request. Specifying both parameters returns a validation error.
 * - [Specifying a travel mode](https://docs.aws.amazon.com/location/previous/developerguide/travel-mode.html) using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in `CarModeOptions` if traveling by `Car`, or `TruckModeOptions` if traveling by `Truck`.
 *
 *   > **Note:** If you specify `walking` for the travel mode and your data provider is Esri, the start and destination must be within 40km.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CalculateRouteCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CalculateRouteCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // CalculateRouteRequest
 *   CalculatorName: "STRING_VALUE", // required
 *   DeparturePosition: [ // Position // required
 *     Number("double"),
 *   ],
 *   DestinationPosition: [ // required
 *     Number("double"),
 *   ],
 *   WaypointPositions: [ // WaypointPositionList
 *     [
 *       Number("double"),
 *     ],
 *   ],
 *   TravelMode: "STRING_VALUE",
 *   DepartureTime: new Date("TIMESTAMP"),
 *   DepartNow: true || false,
 *   DistanceUnit: "STRING_VALUE",
 *   IncludeLegGeometry: true || false,
 *   CarModeOptions: { // CalculateRouteCarModeOptions
 *     AvoidFerries: true || false,
 *     AvoidTolls: true || false,
 *   },
 *   TruckModeOptions: { // CalculateRouteTruckModeOptions
 *     AvoidFerries: true || false,
 *     AvoidTolls: true || false,
 *     Dimensions: { // TruckDimensions
 *       Length: Number("double"),
 *       Height: Number("double"),
 *       Width: Number("double"),
 *       Unit: "STRING_VALUE",
 *     },
 *     Weight: { // TruckWeight
 *       Total: Number("double"),
 *       Unit: "STRING_VALUE",
 *     },
 *   },
 *   ArrivalTime: new Date("TIMESTAMP"),
 *   OptimizeFor: "STRING_VALUE",
 *   Key: "STRING_VALUE",
 * };
 * const command = new CalculateRouteCommand(input);
 * const response = await client.send(command);
 * // { // CalculateRouteResponse
 * //   Legs: [ // LegList // required
 * //     { // Leg
 * //       StartPosition: [ // Position // required
 * //         Number("double"),
 * //       ],
 * //       EndPosition: [ // required
 * //         Number("double"),
 * //       ],
 * //       Distance: Number("double"), // required
 * //       DurationSeconds: Number("double"), // required
 * //       Geometry: { // LegGeometry
 * //         LineString: [ // LineString
 * //           [
 * //             Number("double"),
 * //           ],
 * //         ],
 * //       },
 * //       Steps: [ // StepList // required
 * //         { // Step
 * //           StartPosition: [ // required
 * //             Number("double"),
 * //           ],
 * //           EndPosition: [ // required
 * //             Number("double"),
 * //           ],
 * //           Distance: Number("double"), // required
 * //           DurationSeconds: Number("double"), // required
 * //           GeometryOffset: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Summary: { // CalculateRouteSummary
 * //     RouteBBox: [ // BoundingBox // required
 * //       Number("double"),
 * //     ],
 * //     DataSource: "STRING_VALUE", // required
 * //     Distance: Number("double"), // required
 * //     DurationSeconds: Number("double"), // required
 * //     DistanceUnit: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CalculateRouteCommandInput - {@link CalculateRouteCommandInput}
 * @returns {@link CalculateRouteCommandOutput}
 * @see {@link CalculateRouteCommandInput} for command's `input` shape.
 * @see {@link CalculateRouteCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that you've entered was not found in your AWS account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link LocationServiceException}
 *
 * Base exception class for all service exceptions from Location service.
 *
 * @public
 */
export class CalculateRouteCommand extends command<CalculateRouteCommandInput, CalculateRouteCommandOutput>(
  _ep0,
  _mw0,
  "CalculateRoute",
  CalculateRoute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CalculateRouteRequest;
      output: CalculateRouteResponse;
    };
    sdk: {
      input: CalculateRouteCommandInput;
      output: CalculateRouteCommandOutput;
    };
  };
}
