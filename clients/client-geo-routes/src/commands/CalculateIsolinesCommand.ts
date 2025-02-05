// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GeoRoutesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GeoRoutesClient";
import {
  CalculateIsolinesRequest,
  CalculateIsolinesRequestFilterSensitiveLog,
  CalculateIsolinesResponse,
  CalculateIsolinesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CalculateIsolinesCommand, se_CalculateIsolinesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CalculateIsolinesCommand}.
 */
export interface CalculateIsolinesCommandInput extends CalculateIsolinesRequest {}
/**
 * @public
 *
 * The output of {@link CalculateIsolinesCommand}.
 */
export interface CalculateIsolinesCommandOutput extends CalculateIsolinesResponse, __MetadataBearer {}

/**
 * <p>Use the <code>CalculateIsolines</code> action to find service areas that can be reached
 *          in a given threshold of time, distance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoRoutesClient, CalculateIsolinesCommand } from "@aws-sdk/client-geo-routes"; // ES Modules import
 * // const { GeoRoutesClient, CalculateIsolinesCommand } = require("@aws-sdk/client-geo-routes"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GeoRoutesClient(config);
 * const input = { // CalculateIsolinesRequest
 *   Allow: { // IsolineAllowOptions
 *     Hot: true || false,
 *     Hov: true || false,
 *   },
 *   ArrivalTime: "STRING_VALUE",
 *   Avoid: { // IsolineAvoidanceOptions
 *     Areas: [ // IsolineAvoidanceAreaList
 *       { // IsolineAvoidanceArea
 *         Except: [ // IsolineAvoidanceAreaGeometryList
 *           { // IsolineAvoidanceAreaGeometry
 *             BoundingBox: [ // BoundingBox
 *               Number("double"),
 *             ],
 *             Corridor: { // Corridor
 *               LineString: [ // LineString // required
 *                 [ // Position
 *                   Number("double"),
 *                 ],
 *               ],
 *               Radius: Number("int"), // required
 *             },
 *             Polygon: [ // LinearRings
 *               [ // LinearRing
 *                 [
 *                   Number("double"),
 *                 ],
 *               ],
 *             ],
 *             PolylineCorridor: { // PolylineCorridor
 *               Polyline: "STRING_VALUE", // required
 *               Radius: Number("int"), // required
 *             },
 *             PolylinePolygon: [ // PolylineRingList
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *         Geometry: {
 *           BoundingBox: [
 *             Number("double"),
 *           ],
 *           Corridor: {
 *             LineString: [ // required
 *               [
 *                 Number("double"),
 *               ],
 *             ],
 *             Radius: Number("int"), // required
 *           },
 *           Polygon: [
 *             [
 *               [
 *                 Number("double"),
 *               ],
 *             ],
 *           ],
 *           PolylineCorridor: {
 *             Polyline: "STRING_VALUE", // required
 *             Radius: Number("int"), // required
 *           },
 *           PolylinePolygon: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *     CarShuttleTrains: true || false,
 *     ControlledAccessHighways: true || false,
 *     DirtRoads: true || false,
 *     Ferries: true || false,
 *     SeasonalClosure: true || false,
 *     TollRoads: true || false,
 *     TollTransponders: true || false,
 *     TruckRoadTypes: [ // TruckRoadTypeList
 *       "STRING_VALUE",
 *     ],
 *     Tunnels: true || false,
 *     UTurns: true || false,
 *     ZoneCategories: [ // IsolineAvoidanceZoneCategoryList
 *       { // IsolineAvoidanceZoneCategory
 *         Category: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   DepartNow: true || false,
 *   DepartureTime: "STRING_VALUE",
 *   Destination: "<Position>",
 *   DestinationOptions: { // IsolineDestinationOptions
 *     AvoidActionsForDistance: Number("long"),
 *     Heading: Number("double"),
 *     Matching: { // IsolineMatchingOptions
 *       NameHint: "STRING_VALUE",
 *       OnRoadThreshold: Number("long"),
 *       Radius: Number("long"),
 *       Strategy: "STRING_VALUE",
 *     },
 *     SideOfStreet: { // IsolineSideOfStreetOptions
 *       Position: "<Position>", // required
 *       UseWith: "STRING_VALUE",
 *     },
 *   },
 *   IsolineGeometryFormat: "STRING_VALUE",
 *   IsolineGranularity: { // IsolineGranularityOptions
 *     MaxPoints: Number("int"),
 *     MaxResolution: Number("long"),
 *   },
 *   Key: "STRING_VALUE",
 *   OptimizeIsolineFor: "STRING_VALUE",
 *   OptimizeRoutingFor: "STRING_VALUE",
 *   Origin: "<Position>",
 *   OriginOptions: { // IsolineOriginOptions
 *     AvoidActionsForDistance: Number("long"),
 *     Heading: Number("double"),
 *     Matching: {
 *       NameHint: "STRING_VALUE",
 *       OnRoadThreshold: Number("long"),
 *       Radius: Number("long"),
 *       Strategy: "STRING_VALUE",
 *     },
 *     SideOfStreet: {
 *       Position: "<Position>", // required
 *       UseWith: "STRING_VALUE",
 *     },
 *   },
 *   Thresholds: { // IsolineThresholds
 *     Distance: [ // DistanceThresholdList
 *       Number("long"),
 *     ],
 *     Time: [ // TimeThresholdList
 *       Number("long"),
 *     ],
 *   },
 *   Traffic: { // IsolineTrafficOptions
 *     FlowEventThresholdOverride: Number("long"),
 *     Usage: "STRING_VALUE",
 *   },
 *   TravelMode: "STRING_VALUE",
 *   TravelModeOptions: { // IsolineTravelModeOptions
 *     Car: { // IsolineCarOptions
 *       EngineType: "STRING_VALUE",
 *       LicensePlate: { // IsolineVehicleLicensePlate
 *         LastCharacter: "STRING_VALUE",
 *       },
 *       MaxSpeed: Number("double"),
 *       Occupancy: Number("int"),
 *     },
 *     Scooter: { // IsolineScooterOptions
 *       EngineType: "STRING_VALUE",
 *       LicensePlate: {
 *         LastCharacter: "STRING_VALUE",
 *       },
 *       MaxSpeed: Number("double"),
 *       Occupancy: Number("int"),
 *     },
 *     Truck: { // IsolineTruckOptions
 *       AxleCount: Number("int"),
 *       EngineType: "STRING_VALUE",
 *       GrossWeight: Number("long"),
 *       HazardousCargos: [ // IsolineHazardousCargoTypeList
 *         "STRING_VALUE",
 *       ],
 *       Height: Number("long"),
 *       HeightAboveFirstAxle: Number("long"),
 *       KpraLength: Number("long"),
 *       Length: Number("long"),
 *       LicensePlate: {
 *         LastCharacter: "STRING_VALUE",
 *       },
 *       MaxSpeed: Number("double"),
 *       Occupancy: Number("int"),
 *       PayloadCapacity: Number("long"),
 *       TireCount: Number("int"),
 *       Trailer: { // IsolineTrailerOptions
 *         AxleCount: Number("int"),
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
 * const command = new CalculateIsolinesCommand(input);
 * const response = await client.send(command);
 * // { // CalculateIsolinesResponse
 * //   ArrivalTime: "STRING_VALUE",
 * //   DepartureTime: "STRING_VALUE",
 * //   IsolineGeometryFormat: "STRING_VALUE", // required
 * //   Isolines: [ // IsolineList // required
 * //     { // Isoline
 * //       Connections: [ // IsolineConnectionList // required
 * //         { // IsolineConnection
 * //           FromPolygonIndex: Number("int"), // required
 * //           Geometry: { // IsolineConnectionGeometry
 * //             LineString: [ // LineString
 * //               [ // Position
 * //                 Number("double"),
 * //               ],
 * //             ],
 * //             Polyline: "STRING_VALUE",
 * //           },
 * //           ToPolygonIndex: Number("int"), // required
 * //         },
 * //       ],
 * //       DistanceThreshold: Number("long"),
 * //       Geometries: [ // IsolineShapeGeometryList // required
 * //         { // IsolineShapeGeometry
 * //           Polygon: [ // LinearRings
 * //             [ // LinearRing
 * //               [
 * //                 Number("double"),
 * //               ],
 * //             ],
 * //           ],
 * //           PolylinePolygon: [ // PolylineRingList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       TimeThreshold: Number("long"),
 * //     },
 * //   ],
 * //   PricingBucket: "STRING_VALUE", // required
 * //   SnappedDestination: [
 * //     Number("double"),
 * //   ],
 * //   SnappedOrigin: [
 * //     Number("double"),
 * //   ],
 * // };
 *
 * ```
 *
 * @param CalculateIsolinesCommandInput - {@link CalculateIsolinesCommandInput}
 * @returns {@link CalculateIsolinesCommandOutput}
 * @see {@link CalculateIsolinesCommandInput} for command's `input` shape.
 * @see {@link CalculateIsolinesCommandOutput} for command's `response` shape.
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
export class CalculateIsolinesCommand extends $Command
  .classBuilder<
    CalculateIsolinesCommandInput,
    CalculateIsolinesCommandOutput,
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
  .s("RoutesService", "CalculateIsolines", {})
  .n("GeoRoutesClient", "CalculateIsolinesCommand")
  .f(CalculateIsolinesRequestFilterSensitiveLog, CalculateIsolinesResponseFilterSensitiveLog)
  .ser(se_CalculateIsolinesCommand)
  .de(de_CalculateIsolinesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CalculateIsolinesRequest;
      output: CalculateIsolinesResponse;
    };
    sdk: {
      input: CalculateIsolinesCommandInput;
      output: CalculateIsolinesCommandOutput;
    };
  };
}
