// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GeoRoutesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GeoRoutesClient";
import { OptimizeWaypointsRequest, OptimizeWaypointsResponse } from "../models/models_0";
import { OptimizeWaypoints } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link OptimizeWaypointsCommand}.
 */
export interface OptimizeWaypointsCommandInput extends OptimizeWaypointsRequest {}
/**
 * @public
 *
 * The output of {@link OptimizeWaypointsCommand}.
 */
export interface OptimizeWaypointsCommandOutput extends OptimizeWaypointsResponse, __MetadataBearer {}

/**
 * <p> <code>OptimizeWaypoints</code> calculates the optimal order to travel between a set of waypoints to minimize either the travel time or the distance travelled during the journey, based on road network restrictions and the traffic pattern data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoRoutesClient, OptimizeWaypointsCommand } from "@aws-sdk/client-geo-routes"; // ES Modules import
 * // const { GeoRoutesClient, OptimizeWaypointsCommand } = require("@aws-sdk/client-geo-routes"); // CommonJS import
 * // import type { GeoRoutesClientConfig } from "@aws-sdk/client-geo-routes";
 * const config = {}; // type is GeoRoutesClientConfig
 * const client = new GeoRoutesClient(config);
 * const input = { // OptimizeWaypointsRequest
 *   Avoid: { // WaypointOptimizationAvoidanceOptions
 *     Areas: [ // WaypointOptimizationAvoidanceAreaList
 *       { // WaypointOptimizationAvoidanceArea
 *         Geometry: { // WaypointOptimizationAvoidanceAreaGeometry
 *           BoundingBox: [ // BoundingBox
 *             Number("double"),
 *           ],
 *         },
 *       },
 *     ],
 *     CarShuttleTrains: true || false,
 *     ControlledAccessHighways: true || false,
 *     DirtRoads: true || false,
 *     Ferries: true || false,
 *     TollRoads: true || false,
 *     Tunnels: true || false,
 *     UTurns: true || false,
 *   },
 *   Clustering: { // WaypointOptimizationClusteringOptions
 *     Algorithm: "STRING_VALUE", // required
 *     DrivingDistanceOptions: { // WaypointOptimizationDrivingDistanceOptions
 *       DrivingDistance: Number("long"), // required
 *     },
 *   },
 *   DepartureTime: "STRING_VALUE",
 *   Destination: [ // Position
 *     Number("double"),
 *   ],
 *   DestinationOptions: { // WaypointOptimizationDestinationOptions
 *     AccessHours: { // WaypointOptimizationAccessHours
 *       From: { // WaypointOptimizationAccessHoursEntry
 *         DayOfWeek: "STRING_VALUE", // required
 *         TimeOfDay: "STRING_VALUE", // required
 *       },
 *       To: {
 *         DayOfWeek: "STRING_VALUE", // required
 *         TimeOfDay: "STRING_VALUE", // required
 *       },
 *     },
 *     AppointmentTime: "STRING_VALUE",
 *     Heading: Number("double"),
 *     Id: "STRING_VALUE",
 *     ServiceDuration: Number("long"),
 *     SideOfStreet: { // WaypointOptimizationSideOfStreetOptions
 *       Position: [ // required
 *         Number("double"),
 *       ],
 *       UseWith: "STRING_VALUE",
 *     },
 *   },
 *   Driver: { // WaypointOptimizationDriverOptions
 *     RestCycles: { // WaypointOptimizationRestCycles
 *       LongCycle: { // WaypointOptimizationRestCycleDurations
 *         RestDuration: Number("long"), // required
 *         WorkDuration: Number("long"), // required
 *       },
 *       ShortCycle: {
 *         RestDuration: Number("long"), // required
 *         WorkDuration: Number("long"), // required
 *       },
 *     },
 *     RestProfile: { // WaypointOptimizationRestProfile
 *       Profile: "STRING_VALUE", // required
 *     },
 *     TreatServiceTimeAs: "STRING_VALUE",
 *   },
 *   Exclude: { // WaypointOptimizationExclusionOptions
 *     Countries: [ // CountryCodeList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Key: "STRING_VALUE",
 *   OptimizeSequencingFor: "STRING_VALUE",
 *   Origin: [ // required
 *     Number("double"),
 *   ],
 *   OriginOptions: { // WaypointOptimizationOriginOptions
 *     Id: "STRING_VALUE",
 *   },
 *   Traffic: { // WaypointOptimizationTrafficOptions
 *     Usage: "STRING_VALUE",
 *   },
 *   TravelMode: "STRING_VALUE",
 *   TravelModeOptions: { // WaypointOptimizationTravelModeOptions
 *     Pedestrian: { // WaypointOptimizationPedestrianOptions
 *       Speed: Number("double"),
 *     },
 *     Truck: { // WaypointOptimizationTruckOptions
 *       GrossWeight: Number("long"),
 *       HazardousCargos: [ // WaypointOptimizationHazardousCargoTypeList
 *         "STRING_VALUE",
 *       ],
 *       Height: Number("long"),
 *       Length: Number("long"),
 *       Trailer: { // WaypointOptimizationTrailerOptions
 *         TrailerCount: Number("int"),
 *       },
 *       TruckType: "STRING_VALUE",
 *       TunnelRestrictionCode: "STRING_VALUE",
 *       WeightPerAxle: Number("long"),
 *       Width: Number("long"),
 *     },
 *   },
 *   Waypoints: [ // WaypointOptimizationWaypointList
 *     { // WaypointOptimizationWaypoint
 *       AccessHours: {
 *         From: {
 *           DayOfWeek: "STRING_VALUE", // required
 *           TimeOfDay: "STRING_VALUE", // required
 *         },
 *         To: {
 *           DayOfWeek: "STRING_VALUE", // required
 *           TimeOfDay: "STRING_VALUE", // required
 *         },
 *       },
 *       AppointmentTime: "STRING_VALUE",
 *       Before: [ // BeforeWaypointsList
 *         Number("int"),
 *       ],
 *       Heading: Number("double"),
 *       Id: "STRING_VALUE",
 *       Position: [ // required
 *         Number("double"),
 *       ],
 *       ServiceDuration: Number("long"),
 *       SideOfStreet: {
 *         Position: "<Position>", // required
 *         UseWith: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new OptimizeWaypointsCommand(input);
 * const response = await client.send(command);
 * // { // OptimizeWaypointsResponse
 * //   Connections: [ // WaypointOptimizationConnectionList // required
 * //     { // WaypointOptimizationConnection
 * //       Distance: Number("long"), // required
 * //       From: "STRING_VALUE", // required
 * //       RestDuration: Number("long"), // required
 * //       To: "STRING_VALUE", // required
 * //       TravelDuration: Number("long"), // required
 * //       WaitDuration: Number("long"), // required
 * //     },
 * //   ],
 * //   Distance: Number("long"), // required
 * //   Duration: Number("long"), // required
 * //   ImpedingWaypoints: [ // WaypointOptimizationImpedingWaypointList // required
 * //     { // WaypointOptimizationImpedingWaypoint
 * //       FailedConstraints: [ // WaypointOptimizationFailedConstraintList // required
 * //         { // WaypointOptimizationFailedConstraint
 * //           Constraint: "STRING_VALUE",
 * //           Reason: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Id: "STRING_VALUE", // required
 * //       Position: [ // Position // required
 * //         Number("double"),
 * //       ],
 * //     },
 * //   ],
 * //   OptimizedWaypoints: [ // WaypointOptimizationOptimizedWaypointList // required
 * //     { // WaypointOptimizationOptimizedWaypoint
 * //       ArrivalTime: "STRING_VALUE",
 * //       ClusterIndex: Number("int"),
 * //       DepartureTime: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Position: [ // required
 * //         Number("double"),
 * //       ],
 * //     },
 * //   ],
 * //   PricingBucket: "STRING_VALUE", // required
 * //   TimeBreakdown: { // WaypointOptimizationTimeBreakdown
 * //     RestDuration: Number("long"), // required
 * //     ServiceDuration: Number("long"), // required
 * //     TravelDuration: Number("long"), // required
 * //     WaitDuration: Number("long"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param OptimizeWaypointsCommandInput - {@link OptimizeWaypointsCommandInput}
 * @returns {@link OptimizeWaypointsCommandOutput}
 * @see {@link OptimizeWaypointsCommandInput} for command's `input` shape.
 * @see {@link OptimizeWaypointsCommandOutput} for command's `response` shape.
 * @see {@link GeoRoutesClientResolvedConfig | config} for GeoRoutesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link GeoRoutesServiceException}
 * <p>Base exception class for all service exceptions from GeoRoutes service.</p>
 *
 *
 * @public
 */
export class OptimizeWaypointsCommand extends $Command
  .classBuilder<
    OptimizeWaypointsCommandInput,
    OptimizeWaypointsCommandOutput,
    GeoRoutesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GeoRoutesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RoutesService", "OptimizeWaypoints", {})
  .n("GeoRoutesClient", "OptimizeWaypointsCommand")
  .sc(OptimizeWaypoints)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: OptimizeWaypointsRequest;
      output: OptimizeWaypointsResponse;
    };
    sdk: {
      input: OptimizeWaypointsCommandInput;
      output: OptimizeWaypointsCommandOutput;
    };
  };
}
