// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GeoRoutesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GeoRoutesClient";
import type { CalculateRoutesRequest, CalculateRoutesResponse } from "../models/models_0";
import { CalculateRoutes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CalculateRoutesCommand}.
 */
export interface CalculateRoutesCommandInput extends CalculateRoutesRequest {}
/**
 * @public
 *
 * The output of {@link CalculateRoutesCommand}.
 */
export interface CalculateRoutesCommandOutput extends CalculateRoutesResponse, __MetadataBearer {}

/**
 * <p> <code>CalculateRoutes</code> computes routes given the following required parameters: <code>Origin</code> and <code>Destination</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoRoutesClient, CalculateRoutesCommand } from "@aws-sdk/client-geo-routes"; // ES Modules import
 * // const { GeoRoutesClient, CalculateRoutesCommand } = require("@aws-sdk/client-geo-routes"); // CommonJS import
 * // import type { GeoRoutesClientConfig } from "@aws-sdk/client-geo-routes";
 * const config = {}; // type is GeoRoutesClientConfig
 * const client = new GeoRoutesClient(config);
 * const input = { // CalculateRoutesRequest
 *   Allow: { // RouteAllowOptions
 *     Hot: true || false,
 *     Hov: true || false,
 *   },
 *   ArrivalTime: "STRING_VALUE",
 *   Avoid: { // RouteAvoidanceOptions
 *     Areas: [ // RouteAvoidanceAreaList
 *       { // RouteAvoidanceArea
 *         Except: [ // RouteAvoidanceAreaGeometryList
 *           { // RouteAvoidanceAreaGeometry
 *             Corridor: { // Corridor
 *               LineString: [ // LineString // required
 *                 [ // Position
 *                   Number("double"),
 *                 ],
 *               ],
 *               Radius: Number("int"), // required
 *             },
 *             BoundingBox: [ // BoundingBox
 *               Number("double"),
 *             ],
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
 *           Corridor: {
 *             LineString: [ // required
 *               [
 *                 Number("double"),
 *               ],
 *             ],
 *             Radius: Number("int"), // required
 *           },
 *           BoundingBox: [
 *             Number("double"),
 *           ],
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
 *     ZoneCategories: [ // RouteAvoidanceZoneCategoryList
 *       { // RouteAvoidanceZoneCategory
 *         Category: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   DepartNow: true || false,
 *   DepartureTime: "STRING_VALUE",
 *   Destination: "<Position>", // required
 *   DestinationOptions: { // RouteDestinationOptions
 *     AvoidActionsForDistance: Number("long"),
 *     AvoidUTurns: true || false,
 *     Heading: Number("double"),
 *     Matching: { // RouteMatchingOptions
 *       NameHint: "STRING_VALUE",
 *       OnRoadThreshold: Number("long"),
 *       Radius: Number("long"),
 *       Strategy: "STRING_VALUE",
 *     },
 *     SideOfStreet: { // RouteSideOfStreetOptions
 *       Position: "<Position>", // required
 *       UseWith: "STRING_VALUE",
 *     },
 *     StopDuration: Number("long"),
 *   },
 *   Driver: { // RouteDriverOptions
 *     Schedule: [ // RouteDriverScheduleIntervalList
 *       { // RouteDriverScheduleInterval
 *         DriveDuration: Number("long"), // required
 *         RestDuration: Number("long"), // required
 *       },
 *     ],
 *   },
 *   Exclude: { // RouteExclusionOptions
 *     Countries: [ // CountryCodeList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   InstructionsMeasurementSystem: "STRING_VALUE",
 *   Key: "STRING_VALUE",
 *   Languages: [ // LanguageTagList
 *     "STRING_VALUE",
 *   ],
 *   LegAdditionalFeatures: [ // RouteLegAdditionalFeatureList
 *     "STRING_VALUE",
 *   ],
 *   LegGeometryFormat: "STRING_VALUE",
 *   MaxAlternatives: Number("int"),
 *   OptimizeRoutingFor: "STRING_VALUE",
 *   Origin: "<Position>", // required
 *   OriginOptions: { // RouteOriginOptions
 *     AvoidActionsForDistance: Number("long"),
 *     AvoidUTurns: true || false,
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
 *   SpanAdditionalFeatures: [ // RouteSpanAdditionalFeatureList
 *     "STRING_VALUE",
 *   ],
 *   Tolls: { // RouteTollOptions
 *     AllTransponders: true || false,
 *     AllVignettes: true || false,
 *     Currency: "STRING_VALUE",
 *     EmissionType: { // RouteEmissionType
 *       Co2EmissionClass: "STRING_VALUE",
 *       Type: "STRING_VALUE", // required
 *     },
 *     VehicleCategory: "STRING_VALUE",
 *   },
 *   Traffic: { // RouteTrafficOptions
 *     FlowEventThresholdOverride: Number("long"),
 *     Usage: "STRING_VALUE",
 *   },
 *   TravelMode: "STRING_VALUE",
 *   TravelModeOptions: { // RouteTravelModeOptions
 *     Car: { // RouteCarOptions
 *       EngineType: "STRING_VALUE",
 *       LicensePlate: { // RouteVehicleLicensePlate
 *         LastCharacter: "STRING_VALUE",
 *       },
 *       MaxSpeed: Number("double"),
 *       Occupancy: Number("int"),
 *     },
 *     Pedestrian: { // RoutePedestrianOptions
 *       Speed: Number("double"),
 *     },
 *     Scooter: { // RouteScooterOptions
 *       EngineType: "STRING_VALUE",
 *       LicensePlate: {
 *         LastCharacter: "STRING_VALUE",
 *       },
 *       MaxSpeed: Number("double"),
 *       Occupancy: Number("int"),
 *     },
 *     Truck: { // RouteTruckOptions
 *       AxleCount: Number("int"),
 *       EngineType: "STRING_VALUE",
 *       GrossWeight: Number("long"),
 *       HazardousCargos: [ // RouteHazardousCargoTypeList
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
 *       Trailer: { // RouteTrailerOptions
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
 *   TravelStepType: "STRING_VALUE",
 *   Waypoints: [ // RouteWaypointList
 *     { // RouteWaypoint
 *       AvoidActionsForDistance: Number("long"),
 *       AvoidUTurns: true || false,
 *       Heading: Number("double"),
 *       Matching: {
 *         NameHint: "STRING_VALUE",
 *         OnRoadThreshold: Number("long"),
 *         Radius: Number("long"),
 *         Strategy: "STRING_VALUE",
 *       },
 *       PassThrough: true || false,
 *       Position: "<Position>", // required
 *       SideOfStreet: {
 *         Position: "<Position>", // required
 *         UseWith: "STRING_VALUE",
 *       },
 *       StopDuration: Number("long"),
 *     },
 *   ],
 * };
 * const command = new CalculateRoutesCommand(input);
 * const response = await client.send(command);
 * // { // CalculateRoutesResponse
 * //   LegGeometryFormat: "STRING_VALUE", // required
 * //   Notices: [ // RouteResponseNoticeList // required
 * //     { // RouteResponseNotice
 * //       Code: "STRING_VALUE", // required
 * //       Impact: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PricingBucket: "STRING_VALUE", // required
 * //   Routes: [ // RouteList // required
 * //     { // Route
 * //       Legs: [ // RouteLegList // required
 * //         { // RouteLeg
 * //           FerryLegDetails: { // RouteFerryLegDetails
 * //             AfterTravelSteps: [ // RouteFerryAfterTravelStepList // required
 * //               { // RouteFerryAfterTravelStep
 * //                 Duration: Number("long"), // required
 * //                 Instruction: "STRING_VALUE",
 * //                 Type: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             Arrival: { // RouteFerryArrival
 * //               Place: { // RouteFerryPlace
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: [ // Position23
 * //                   Number("double"),
 * //                 ],
 * //                 Position: [ // required
 * //                   Number("double"),
 * //                 ],
 * //                 WaypointIndex: Number("int"),
 * //               },
 * //               Time: "STRING_VALUE",
 * //             },
 * //             BeforeTravelSteps: [ // RouteFerryBeforeTravelStepList // required
 * //               { // RouteFerryBeforeTravelStep
 * //                 Duration: Number("long"), // required
 * //                 Instruction: "STRING_VALUE",
 * //                 Type: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             Departure: { // RouteFerryDeparture
 * //               Place: {
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: [
 * //                   Number("double"),
 * //                 ],
 * //                 Position: [ // required
 * //                   Number("double"),
 * //                 ],
 * //                 WaypointIndex: Number("int"),
 * //               },
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Notices: [ // RouteFerryNoticeList // required
 * //               { // RouteFerryNotice
 * //                 Code: "STRING_VALUE", // required
 * //                 Impact: "STRING_VALUE",
 * //               },
 * //             ],
 * //             PassThroughWaypoints: [ // RoutePassThroughWaypointList // required
 * //               { // RoutePassThroughWaypoint
 * //                 GeometryOffset: Number("int"),
 * //                 Place: { // RoutePassThroughPlace
 * //                   OriginalPosition: [
 * //                     Number("double"),
 * //                   ],
 * //                   Position: "<Position23>", // required
 * //                   WaypointIndex: Number("int"),
 * //                 },
 * //               },
 * //             ],
 * //             RouteName: "STRING_VALUE",
 * //             Spans: [ // RouteFerrySpanList // required
 * //               { // RouteFerrySpan
 * //                 Country: "STRING_VALUE",
 * //                 Distance: Number("long"),
 * //                 Duration: Number("long"),
 * //                 GeometryOffset: Number("int"),
 * //                 Names: [ // LocalizedStringList
 * //                   { // LocalizedString
 * //                     Language: "STRING_VALUE",
 * //                     Value: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 Region: "STRING_VALUE",
 * //               },
 * //             ],
 * //             Summary: { // RouteFerrySummary
 * //               Overview: { // RouteFerryOverviewSummary
 * //                 Distance: Number("long"), // required
 * //                 Duration: Number("long"), // required
 * //               },
 * //               TravelOnly: { // RouteFerryTravelOnlySummary
 * //                 Duration: Number("long"), // required
 * //               },
 * //             },
 * //             TravelSteps: [ // RouteFerryTravelStepList // required
 * //               { // RouteFerryTravelStep
 * //                 Distance: Number("long"),
 * //                 Duration: Number("long"), // required
 * //                 GeometryOffset: Number("int"),
 * //                 Instruction: "STRING_VALUE",
 * //                 Type: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           Geometry: { // RouteLegGeometry
 * //             LineString: [ // LineString
 * //               [ // Position
 * //                 Number("double"),
 * //               ],
 * //             ],
 * //             Polyline: "STRING_VALUE",
 * //           },
 * //           Language: "STRING_VALUE",
 * //           PedestrianLegDetails: { // RoutePedestrianLegDetails
 * //             Arrival: { // RoutePedestrianArrival
 * //               Place: { // RoutePedestrianPlace
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: "<Position23>",
 * //                 Position: "<Position23>", // required
 * //                 SideOfStreet: "STRING_VALUE",
 * //                 WaypointIndex: Number("int"),
 * //               },
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Departure: { // RoutePedestrianDeparture
 * //               Place: {
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: "<Position23>",
 * //                 Position: "<Position23>", // required
 * //                 SideOfStreet: "STRING_VALUE",
 * //                 WaypointIndex: Number("int"),
 * //               },
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Notices: [ // RoutePedestrianNoticeList // required
 * //               { // RoutePedestrianNotice
 * //                 Code: "STRING_VALUE", // required
 * //                 Impact: "STRING_VALUE",
 * //               },
 * //             ],
 * //             PassThroughWaypoints: [ // required
 * //               {
 * //                 GeometryOffset: Number("int"),
 * //                 Place: {
 * //                   OriginalPosition: "<Position23>",
 * //                   Position: "<Position23>", // required
 * //                   WaypointIndex: Number("int"),
 * //                 },
 * //               },
 * //             ],
 * //             Spans: [ // RoutePedestrianSpanList // required
 * //               { // RoutePedestrianSpan
 * //                 BestCaseDuration: Number("long"),
 * //                 Country: "STRING_VALUE",
 * //                 Distance: Number("long"),
 * //                 Duration: Number("long"),
 * //                 DynamicSpeed: { // RouteSpanDynamicSpeedDetails
 * //                   BestCaseSpeed: Number("double"),
 * //                   TurnDuration: Number("long"),
 * //                   TypicalSpeed: Number("double"),
 * //                 },
 * //                 FunctionalClassification: Number("int"),
 * //                 GeometryOffset: Number("int"),
 * //                 Incidents: [ // IndexList
 * //                   Number("int"),
 * //                 ],
 * //                 Names: [
 * //                   {
 * //                     Language: "STRING_VALUE",
 * //                     Value: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 PedestrianAccess: [ // RouteSpanPedestrianAccessAttributeList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 Region: "STRING_VALUE",
 * //                 RoadAttributes: [ // RouteSpanRoadAttributeList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 RouteNumbers: [ // RouteNumberList
 * //                   { // RouteNumber
 * //                     Direction: "STRING_VALUE",
 * //                     Language: "STRING_VALUE",
 * //                     Value: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 SpeedLimit: { // RouteSpanSpeedLimitDetails
 * //                   MaxSpeed: Number("double"),
 * //                   Unlimited: true || false,
 * //                 },
 * //                 TypicalDuration: Number("long"),
 * //               },
 * //             ],
 * //             Summary: { // RoutePedestrianSummary
 * //               Overview: { // RoutePedestrianOverviewSummary
 * //                 Distance: Number("long"), // required
 * //                 Duration: Number("long"), // required
 * //               },
 * //               TravelOnly: { // RoutePedestrianTravelOnlySummary
 * //                 Duration: Number("long"), // required
 * //               },
 * //             },
 * //             TravelSteps: [ // RoutePedestrianTravelStepList // required
 * //               { // RoutePedestrianTravelStep
 * //                 ContinueStepDetails: { // RouteContinueStepDetails
 * //                   Intersection: [ // required
 * //                     {
 * //                       Language: "STRING_VALUE",
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                 },
 * //                 CurrentRoad: { // RouteRoad
 * //                   RoadName: [ // required
 * //                     {
 * //                       Language: "STRING_VALUE",
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                   RouteNumber: [ // required
 * //                     {
 * //                       Direction: "STRING_VALUE",
 * //                       Language: "STRING_VALUE",
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                   Towards: [ // required
 * //                     {
 * //                       Language: "STRING_VALUE",
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //                 Distance: Number("long"),
 * //                 Duration: Number("long"), // required
 * //                 ExitNumber: "<LocalizedStringList>",
 * //                 GeometryOffset: Number("int"),
 * //                 Instruction: "STRING_VALUE",
 * //                 KeepStepDetails: { // RouteKeepStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "STRING_VALUE",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "STRING_VALUE",
 * //                 },
 * //                 NextRoad: {
 * //                   RoadName: "<LocalizedStringList>", // required
 * //                   RouteNumber: [ // required
 * //                     {
 * //                       Direction: "STRING_VALUE",
 * //                       Language: "STRING_VALUE",
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                   Towards: "<LocalizedStringList>", // required
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //                 RoundaboutEnterStepDetails: { // RouteRoundaboutEnterStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "STRING_VALUE",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "STRING_VALUE",
 * //                 },
 * //                 RoundaboutExitStepDetails: { // RouteRoundaboutExitStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   RelativeExit: Number("int"),
 * //                   RoundaboutAngle: Number("double"),
 * //                   SteeringDirection: "STRING_VALUE",
 * //                 },
 * //                 RoundaboutPassStepDetails: { // RouteRoundaboutPassStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "STRING_VALUE",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "STRING_VALUE",
 * //                 },
 * //                 Signpost: { // RouteSignpost
 * //                   Labels: [ // RouteSignpostLabelList // required
 * //                     { // RouteSignpostLabel
 * //                       RouteNumber: "<RouteNumber>",
 * //                       Text: "<LocalizedString>",
 * //                     },
 * //                   ],
 * //                 },
 * //                 TurnStepDetails: { // RouteTurnStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "STRING_VALUE",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "STRING_VALUE",
 * //                 },
 * //                 Type: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //           TravelMode: "STRING_VALUE", // required
 * //           Type: "STRING_VALUE", // required
 * //           VehicleLegDetails: { // RouteVehicleLegDetails
 * //             Arrival: { // RouteVehicleArrival
 * //               Place: { // RouteVehiclePlace
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: "<Position23>",
 * //                 Position: "<Position23>", // required
 * //                 SideOfStreet: "STRING_VALUE",
 * //                 WaypointIndex: Number("int"),
 * //               },
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Departure: { // RouteVehicleDeparture
 * //               Place: {
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: "<Position23>",
 * //                 Position: "<Position23>", // required
 * //                 SideOfStreet: "STRING_VALUE",
 * //                 WaypointIndex: Number("int"),
 * //               },
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Incidents: [ // RouteVehicleIncidentList // required
 * //               { // RouteVehicleIncident
 * //                 Description: "STRING_VALUE",
 * //                 EndTime: "STRING_VALUE",
 * //                 Severity: "STRING_VALUE",
 * //                 StartTime: "STRING_VALUE",
 * //                 Type: "STRING_VALUE",
 * //               },
 * //             ],
 * //             Notices: [ // RouteVehicleNoticeList // required
 * //               { // RouteVehicleNotice
 * //                 Code: "STRING_VALUE", // required
 * //                 Details: [ // RouteVehicleNoticeDetailList // required
 * //                   { // RouteVehicleNoticeDetail
 * //                     Title: "STRING_VALUE",
 * //                     ViolatedConstraints: { // RouteViolatedConstraints
 * //                       AllHazardsRestricted: true || false,
 * //                       AxleCount: { // RouteNoticeDetailRange
 * //                         Min: Number("int"),
 * //                         Max: Number("int"),
 * //                       },
 * //                       HazardousCargos: [ // RouteHazardousCargoTypeList // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       MaxHeight: Number("long"),
 * //                       MaxKpraLength: Number("long"),
 * //                       MaxLength: Number("long"),
 * //                       MaxPayloadCapacity: Number("long"),
 * //                       MaxWeight: { // RouteWeightConstraint
 * //                         Type: "STRING_VALUE", // required
 * //                         Value: Number("long"), // required
 * //                       },
 * //                       MaxWeightPerAxle: Number("long"),
 * //                       MaxWeightPerAxleGroup: { // WeightPerAxleGroup
 * //                         Single: Number("long"),
 * //                         Tandem: Number("long"),
 * //                         Triple: Number("long"),
 * //                         Quad: Number("long"),
 * //                         Quint: Number("long"),
 * //                       },
 * //                       MaxWidth: Number("long"),
 * //                       Occupancy: {
 * //                         Min: Number("int"),
 * //                         Max: Number("int"),
 * //                       },
 * //                       RestrictedTimes: "STRING_VALUE",
 * //                       TimeDependent: true || false,
 * //                       TrailerCount: {
 * //                         Min: Number("int"),
 * //                         Max: Number("int"),
 * //                       },
 * //                       TravelMode: true || false,
 * //                       TruckRoadType: "STRING_VALUE",
 * //                       TruckType: "STRING_VALUE",
 * //                       TunnelRestrictionCode: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 ],
 * //                 Impact: "STRING_VALUE",
 * //               },
 * //             ],
 * //             PassThroughWaypoints: [ // required
 * //               {
 * //                 GeometryOffset: Number("int"),
 * //                 Place: {
 * //                   OriginalPosition: "<Position23>",
 * //                   Position: "<Position23>", // required
 * //                   WaypointIndex: Number("int"),
 * //                 },
 * //               },
 * //             ],
 * //             Spans: [ // RouteVehicleSpanList // required
 * //               { // RouteVehicleSpan
 * //                 BestCaseDuration: Number("long"),
 * //                 CarAccess: [ // RouteSpanCarAccessAttributeList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 Country: "STRING_VALUE",
 * //                 Distance: Number("long"),
 * //                 Duration: Number("long"),
 * //                 DynamicSpeed: {
 * //                   BestCaseSpeed: Number("double"),
 * //                   TurnDuration: Number("long"),
 * //                   TypicalSpeed: Number("double"),
 * //                 },
 * //                 FunctionalClassification: Number("int"),
 * //                 Gate: "STRING_VALUE",
 * //                 GeometryOffset: Number("int"),
 * //                 Incidents: [
 * //                   Number("int"),
 * //                 ],
 * //                 Names: "<LocalizedStringList>",
 * //                 Notices: [
 * //                   Number("int"),
 * //                 ],
 * //                 RailwayCrossing: "STRING_VALUE",
 * //                 Region: "STRING_VALUE",
 * //                 RoadAttributes: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 RouteNumbers: [
 * //                   "<RouteNumber>",
 * //                 ],
 * //                 ScooterAccess: [ // RouteSpanScooterAccessAttributeList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 SpeedLimit: {
 * //                   MaxSpeed: Number("double"),
 * //                   Unlimited: true || false,
 * //                 },
 * //                 TollSystems: [
 * //                   Number("int"),
 * //                 ],
 * //                 TruckAccess: [ // RouteSpanTruckAccessAttributeList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 TruckRoadTypes: [
 * //                   Number("int"),
 * //                 ],
 * //                 TypicalDuration: Number("long"),
 * //                 Zones: "<IndexList>",
 * //               },
 * //             ],
 * //             Summary: { // RouteVehicleSummary
 * //               Overview: { // RouteVehicleOverviewSummary
 * //                 BestCaseDuration: Number("long"),
 * //                 Distance: Number("long"), // required
 * //                 Duration: Number("long"), // required
 * //                 TypicalDuration: Number("long"),
 * //               },
 * //               TravelOnly: { // RouteVehicleTravelOnlySummary
 * //                 BestCaseDuration: Number("long"),
 * //                 Duration: Number("long"), // required
 * //                 TypicalDuration: Number("long"),
 * //               },
 * //             },
 * //             Tolls: [ // RouteTollList // required
 * //               { // RouteToll
 * //                 Country: "STRING_VALUE",
 * //                 PaymentSites: [ // RouteTollPaymentSiteList // required
 * //                   { // RouteTollPaymentSite
 * //                     Name: "STRING_VALUE",
 * //                     Position: "<Position23>", // required
 * //                   },
 * //                 ],
 * //                 Rates: [ // RouteTollRateList // required
 * //                   { // RouteTollRate
 * //                     ApplicableTimes: "STRING_VALUE",
 * //                     ConvertedPrice: { // RouteTollPrice
 * //                       Currency: "STRING_VALUE", // required
 * //                       Estimate: true || false, // required
 * //                       PerDuration: Number("long"),
 * //                       Range: true || false, // required
 * //                       RangeValue: { // RouteTollPriceValueRange
 * //                         Min: Number("double"), // required
 * //                         Max: Number("double"), // required
 * //                       },
 * //                       Value: Number("double"), // required
 * //                     },
 * //                     Id: "STRING_VALUE", // required
 * //                     LocalPrice: {
 * //                       Currency: "STRING_VALUE", // required
 * //                       Estimate: true || false, // required
 * //                       PerDuration: Number("long"),
 * //                       Range: true || false, // required
 * //                       RangeValue: {
 * //                         Min: Number("double"), // required
 * //                         Max: Number("double"), // required
 * //                       },
 * //                       Value: Number("double"), // required
 * //                     },
 * //                     Name: "STRING_VALUE", // required
 * //                     Pass: { // RouteTollPass
 * //                       IncludesReturnTrip: true || false,
 * //                       SeniorPass: true || false,
 * //                       TransferCount: Number("int"),
 * //                       TripCount: Number("int"),
 * //                       ValidityPeriod: { // RouteTollPassValidityPeriod
 * //                         Period: "STRING_VALUE", // required
 * //                         PeriodCount: Number("int"),
 * //                       },
 * //                     },
 * //                     PaymentMethods: [ // RouteTollPaymentMethodList // required
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     Transponders: [ // RouteTransponderList // required
 * //                       { // RouteTransponder
 * //                         SystemName: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                   },
 * //                 ],
 * //                 Systems: "<IndexList>", // required
 * //               },
 * //             ],
 * //             TollSystems: [ // RouteTollSystemList // required
 * //               { // RouteTollSystem
 * //                 Name: "STRING_VALUE",
 * //               },
 * //             ],
 * //             TravelSteps: [ // RouteVehicleTravelStepList // required
 * //               { // RouteVehicleTravelStep
 * //                 ContinueHighwayStepDetails: { // RouteContinueHighwayStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "STRING_VALUE",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "STRING_VALUE",
 * //                 },
 * //                 ContinueStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                 },
 * //                 CurrentRoad: {
 * //                   RoadName: "<LocalizedStringList>", // required
 * //                   RouteNumber: [ // required
 * //                     "<RouteNumber>",
 * //                   ],
 * //                   Towards: "<LocalizedStringList>", // required
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //                 Distance: Number("long"),
 * //                 Duration: Number("long"), // required
 * //                 EnterHighwayStepDetails: { // RouteEnterHighwayStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "STRING_VALUE",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "STRING_VALUE",
 * //                 },
 * //                 ExitNumber: "<LocalizedStringList>",
 * //                 ExitStepDetails: { // RouteExitStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   RelativeExit: Number("int"),
 * //                   SteeringDirection: "STRING_VALUE",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "STRING_VALUE",
 * //                 },
 * //                 GeometryOffset: Number("int"),
 * //                 Instruction: "STRING_VALUE",
 * //                 KeepStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "STRING_VALUE",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "STRING_VALUE",
 * //                 },
 * //                 NextRoad: {
 * //                   RoadName: "<LocalizedStringList>", // required
 * //                   RouteNumber: "<RouteNumberList>", // required
 * //                   Towards: "<LocalizedStringList>", // required
 * //                   Type: "STRING_VALUE",
 * //                 },
 * //                 RampStepDetails: { // RouteRampStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "STRING_VALUE",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "STRING_VALUE",
 * //                 },
 * //                 RoundaboutEnterStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "STRING_VALUE",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "STRING_VALUE",
 * //                 },
 * //                 RoundaboutExitStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   RelativeExit: Number("int"),
 * //                   RoundaboutAngle: Number("double"),
 * //                   SteeringDirection: "STRING_VALUE",
 * //                 },
 * //                 RoundaboutPassStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "STRING_VALUE",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "STRING_VALUE",
 * //                 },
 * //                 Signpost: {
 * //                   Labels: [ // required
 * //                     {
 * //                       RouteNumber: "<RouteNumber>",
 * //                       Text: "<LocalizedString>",
 * //                     },
 * //                   ],
 * //                 },
 * //                 TurnStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "STRING_VALUE",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "STRING_VALUE",
 * //                 },
 * //                 Type: "STRING_VALUE", // required
 * //                 UTurnStepDetails: { // RouteUTurnStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "STRING_VALUE",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //             TruckRoadTypes: [ // TruckRoadTypeList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             Zones: [ // RouteZoneList // required
 * //               { // RouteZone
 * //                 Category: "STRING_VALUE",
 * //                 Name: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       MajorRoadLabels: [ // RouteMajorRoadLabelList // required
 * //         { // RouteMajorRoadLabel
 * //           RoadName: "<LocalizedString>",
 * //           RouteNumber: "<RouteNumber>",
 * //         },
 * //       ],
 * //       Summary: { // RouteSummary
 * //         Distance: Number("long"),
 * //         Duration: Number("long"),
 * //         Tolls: { // RouteTollSummary
 * //           Total: { // RouteTollPriceSummary
 * //             Currency: "STRING_VALUE", // required
 * //             Estimate: true || false, // required
 * //             Range: true || false, // required
 * //             RangeValue: {
 * //               Min: Number("double"), // required
 * //               Max: Number("double"), // required
 * //             },
 * //             Value: Number("double"), // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CalculateRoutesCommandInput - {@link CalculateRoutesCommandInput}
 * @returns {@link CalculateRoutesCommandOutput}
 * @see {@link CalculateRoutesCommandInput} for command's `input` shape.
 * @see {@link CalculateRoutesCommandOutput} for command's `response` shape.
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
export class CalculateRoutesCommand extends $Command
  .classBuilder<
    CalculateRoutesCommandInput,
    CalculateRoutesCommandOutput,
    GeoRoutesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GeoRoutesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RoutesService", "CalculateRoutes", {})
  .n("GeoRoutesClient", "CalculateRoutesCommand")
  .sc(CalculateRoutes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CalculateRoutesRequest;
      output: CalculateRoutesResponse;
    };
    sdk: {
      input: CalculateRoutesCommandInput;
      output: CalculateRoutesCommandOutput;
    };
  };
}
