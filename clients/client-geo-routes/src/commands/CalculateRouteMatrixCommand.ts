// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GeoRoutesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GeoRoutesClient";
import {
  CalculateRouteMatrixRequest,
  CalculateRouteMatrixRequestFilterSensitiveLog,
  CalculateRouteMatrixResponse,
  CalculateRouteMatrixResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CalculateRouteMatrixCommand, se_CalculateRouteMatrixCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CalculateRouteMatrixCommand}.
 */
export interface CalculateRouteMatrixCommandInput extends CalculateRouteMatrixRequest {}
/**
 * @public
 *
 * The output of {@link CalculateRouteMatrixCommand}.
 */
export interface CalculateRouteMatrixCommandOutput extends CalculateRouteMatrixResponse, __MetadataBearer {}

/**
 * <p> Use <code>CalculateRouteMatrix</code> to compute results for all pairs of Origins to
 *          Destinations. Each row corresponds to one entry in Origins. Each entry in the row
 *          corresponds to the route from that entry in Origins to an entry in Destinations
 *          positions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoRoutesClient, CalculateRouteMatrixCommand } from "@aws-sdk/client-geo-routes"; // ES Modules import
 * // const { GeoRoutesClient, CalculateRouteMatrixCommand } = require("@aws-sdk/client-geo-routes"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GeoRoutesClient(config);
 * const input = { // CalculateRouteMatrixRequest
 *   Allow: { // RouteMatrixAllowOptions
 *     Hot: true || false,
 *     Hov: true || false,
 *   },
 *   Avoid: { // RouteMatrixAvoidanceOptions
 *     Areas: [ // RouteMatrixAvoidanceAreaList
 *       { // RouteMatrixAvoidanceArea
 *         Geometry: { // RouteMatrixAvoidanceAreaGeometry
 *           BoundingBox: [ // BoundingBox
 *             Number("double"),
 *           ],
 *           Polygon: [ // LinearRings
 *             [ // LinearRing
 *               [ // Position
 *                 Number("double"),
 *               ],
 *             ],
 *           ],
 *           PolylinePolygon: [ // PolylineRingList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *     CarShuttleTrains: true || false,
 *     ControlledAccessHighways: true || false,
 *     DirtRoads: true || false,
 *     Ferries: true || false,
 *     TollRoads: true || false,
 *     TollTransponders: true || false,
 *     TruckRoadTypes: [ // TruckRoadTypeList
 *       "STRING_VALUE",
 *     ],
 *     Tunnels: true || false,
 *     UTurns: true || false,
 *     ZoneCategories: [ // RouteMatrixAvoidanceZoneCategoryList
 *       { // RouteMatrixAvoidanceZoneCategory
 *         Category: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   DepartNow: true || false,
 *   DepartureTime: "STRING_VALUE",
 *   Destinations: [ // RouteMatrixDestinationList // required
 *     { // RouteMatrixDestination
 *       Options: { // RouteMatrixDestinationOptions
 *         AvoidActionsForDistance: Number("long"),
 *         Heading: Number("double"),
 *         Matching: { // RouteMatrixMatchingOptions
 *           NameHint: "STRING_VALUE",
 *           OnRoadThreshold: Number("long"),
 *           Radius: Number("long"),
 *           Strategy: "STRING_VALUE",
 *         },
 *         SideOfStreet: { // RouteMatrixSideOfStreetOptions
 *           Position: [ // required
 *             Number("double"),
 *           ],
 *           UseWith: "STRING_VALUE",
 *         },
 *       },
 *       Position: "<Position>", // required
 *     },
 *   ],
 *   Exclude: { // RouteMatrixExclusionOptions
 *     Countries: [ // CountryCodeList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Key: "STRING_VALUE",
 *   OptimizeRoutingFor: "STRING_VALUE",
 *   Origins: [ // RouteMatrixOriginList // required
 *     { // RouteMatrixOrigin
 *       Options: { // RouteMatrixOriginOptions
 *         AvoidActionsForDistance: Number("long"),
 *         Heading: Number("double"),
 *         Matching: {
 *           NameHint: "STRING_VALUE",
 *           OnRoadThreshold: Number("long"),
 *           Radius: Number("long"),
 *           Strategy: "STRING_VALUE",
 *         },
 *         SideOfStreet: {
 *           Position: "<Position>", // required
 *           UseWith: "STRING_VALUE",
 *         },
 *       },
 *       Position: "<Position>", // required
 *     },
 *   ],
 *   RoutingBoundary: { // RouteMatrixBoundary
 *     Geometry: { // RouteMatrixBoundaryGeometry
 *       AutoCircle: { // RouteMatrixAutoCircle
 *         Margin: Number("long"),
 *         MaxRadius: Number("long"),
 *       },
 *       Circle: { // Circle
 *         Center: "<Position>", // required
 *         Radius: Number("double"), // required
 *       },
 *       BoundingBox: [
 *         Number("double"),
 *       ],
 *       Polygon: [
 *         [
 *           "<Position>",
 *         ],
 *       ],
 *     },
 *     Unbounded: true || false,
 *   },
 *   Traffic: { // RouteMatrixTrafficOptions
 *     FlowEventThresholdOverride: Number("long"),
 *     Usage: "STRING_VALUE",
 *   },
 *   TravelMode: "STRING_VALUE",
 *   TravelModeOptions: { // RouteMatrixTravelModeOptions
 *     Car: { // RouteMatrixCarOptions
 *       LicensePlate: { // RouteMatrixVehicleLicensePlate
 *         LastCharacter: "STRING_VALUE",
 *       },
 *       MaxSpeed: Number("double"),
 *       Occupancy: Number("int"),
 *     },
 *     Scooter: { // RouteMatrixScooterOptions
 *       LicensePlate: {
 *         LastCharacter: "STRING_VALUE",
 *       },
 *       MaxSpeed: Number("double"),
 *       Occupancy: Number("int"),
 *     },
 *     Truck: { // RouteMatrixTruckOptions
 *       AxleCount: Number("int"),
 *       GrossWeight: Number("long"),
 *       HazardousCargos: [ // RouteMatrixHazardousCargoTypeList
 *         "STRING_VALUE",
 *       ],
 *       Height: Number("long"),
 *       KpraLength: Number("long"),
 *       Length: Number("long"),
 *       LicensePlate: {
 *         LastCharacter: "STRING_VALUE",
 *       },
 *       MaxSpeed: Number("double"),
 *       Occupancy: Number("int"),
 *       PayloadCapacity: Number("long"),
 *       Trailer: { // RouteMatrixTrailerOptions
 *         TrailerCount: Number("int"),
 *       },
 *       TruckType: "STRING_VALUE",
 *       TunnelRestrictionCode: "STRING_VALUE",
 *       WeightPerAxle: Number("long"),
 *       WeightPerAxleGroup: { // WeightPerAxleGroup
 *         Single: Number("long"),
 *         Tandem: Number("long"),
 *         Triple: Number("long"),
 *         Quad: Number("long"),
 *         Quint: Number("long"),
 *       },
 *       Width: Number("long"),
 *     },
 *   },
 * };
 * const command = new CalculateRouteMatrixCommand(input);
 * const response = await client.send(command);
 * // { // CalculateRouteMatrixResponse
 * //   ErrorCount: Number("int"), // required
 * //   PricingBucket: "STRING_VALUE", // required
 * //   RouteMatrix: [ // RouteMatrix // required
 * //     [ // RouteMatrixRow
 * //       { // RouteMatrixEntry
 * //         Distance: Number("long"), // required
 * //         Duration: Number("long"), // required
 * //         Error: "STRING_VALUE",
 * //       },
 * //     ],
 * //   ],
 * //   RoutingBoundary: { // RouteMatrixBoundary
 * //     Geometry: { // RouteMatrixBoundaryGeometry
 * //       AutoCircle: { // RouteMatrixAutoCircle
 * //         Margin: Number("long"),
 * //         MaxRadius: Number("long"),
 * //       },
 * //       Circle: { // Circle
 * //         Center: [ // Position // required
 * //           Number("double"),
 * //         ],
 * //         Radius: Number("double"), // required
 * //       },
 * //       BoundingBox: [ // BoundingBox
 * //         Number("double"),
 * //       ],
 * //       Polygon: [ // LinearRings
 * //         [ // LinearRing
 * //           [
 * //             Number("double"),
 * //           ],
 * //         ],
 * //       ],
 * //     },
 * //     Unbounded: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CalculateRouteMatrixCommandInput - {@link CalculateRouteMatrixCommandInput}
 * @returns {@link CalculateRouteMatrixCommandOutput}
 * @see {@link CalculateRouteMatrixCommandInput} for command's `input` shape.
 * @see {@link CalculateRouteMatrixCommandOutput} for command's `response` shape.
 * @see {@link GeoRoutesClientResolvedConfig | config} for GeoRoutesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
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
 * @public
 */
export class CalculateRouteMatrixCommand extends $Command
  .classBuilder<
    CalculateRouteMatrixCommandInput,
    CalculateRouteMatrixCommandOutput,
    GeoRoutesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GeoRoutesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RoutesService", "CalculateRouteMatrix", {})
  .n("GeoRoutesClient", "CalculateRouteMatrixCommand")
  .f(CalculateRouteMatrixRequestFilterSensitiveLog, CalculateRouteMatrixResponseFilterSensitiveLog)
  .ser(se_CalculateRouteMatrixCommand)
  .de(de_CalculateRouteMatrixCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CalculateRouteMatrixRequest;
      output: CalculateRouteMatrixResponse;
    };
    sdk: {
      input: CalculateRouteMatrixCommandInput;
      output: CalculateRouteMatrixCommandOutput;
    };
  };
}
