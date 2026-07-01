// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CalculateRoutesRequest, CalculateRoutesResponse } from "../models/models_0";
import { CalculateRoutes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p> <code>CalculateRoutes</code> computes routes given the following required parameters: <code>Origin</code> and <code>Destination</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/calculate-routes.html">Calculate routes</a> in the <i>Amazon Location Service Developer Guide</i>.</p>
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
 *         Category: "CongestionPricing" || "Environmental" || "Vignette", // required
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
 *       Strategy: "MatchAny" || "MatchMostSignificantRoad",
 *     },
 *     SideOfStreet: { // RouteSideOfStreetOptions
 *       Position: "<Position>", // required
 *       UseWith: "AnyStreet" || "DividedStreetOnly",
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
 *   InstructionsMeasurementSystem: "Metric" || "Imperial",
 *   Key: "STRING_VALUE",
 *   Languages: [ // LanguageTagList
 *     "STRING_VALUE",
 *   ],
 *   LegAdditionalFeatures: [ // RouteLegAdditionalFeatureList
 *     "Elevation" || "Incidents" || "PassThroughWaypoints" || "Summary" || "Tolls" || "TravelStepInstructions" || "TruckRoadTypes" || "TypicalDuration" || "Zones" || "Bookings" || "IntermediateStops" || "NextDepartures",
 *   ],
 *   LegGeometryFormat: "FlexiblePolyline" || "Simple",
 *   MaxAlternatives: Number("int"),
 *   OptimizeRoutingFor: "FastestRoute" || "ShortestRoute",
 *   Origin: "<Position>", // required
 *   OriginOptions: { // RouteOriginOptions
 *     AvoidActionsForDistance: Number("long"),
 *     AvoidUTurns: true || false,
 *     Heading: Number("double"),
 *     Matching: {
 *       NameHint: "STRING_VALUE",
 *       OnRoadThreshold: Number("long"),
 *       Radius: Number("long"),
 *       Strategy: "MatchAny" || "MatchMostSignificantRoad",
 *     },
 *     SideOfStreet: {
 *       Position: "<Position>", // required
 *       UseWith: "AnyStreet" || "DividedStreetOnly",
 *     },
 *   },
 *   SpanAdditionalFeatures: [ // RouteSpanAdditionalFeatureList
 *     "BestCaseDuration" || "CarAccess" || "Country" || "Distance" || "Duration" || "DynamicSpeed" || "FunctionalClassification" || "Gates" || "Incidents" || "Names" || "Notices" || "PedestrianAccess" || "RailwayCrossings" || "Region" || "RoadAttributes" || "RouteNumbers" || "ScooterAccess" || "SpeedLimit" || "TollSystems" || "TruckAccess" || "TruckRoadTypes" || "TypicalDuration" || "Zones" || "Consumption",
 *   ],
 *   Tolls: { // RouteTollOptions
 *     AllTransponders: true || false,
 *     AllVignettes: true || false,
 *     Currency: "STRING_VALUE",
 *     EmissionType: { // RouteEmissionType
 *       Co2EmissionClass: "STRING_VALUE",
 *       Type: "STRING_VALUE", // required
 *     },
 *     VehicleCategory: "Minibus",
 *   },
 *   Traffic: { // RouteTrafficOptions
 *     FlowEventThresholdOverride: Number("long"),
 *     Usage: "IgnoreTrafficData" || "UseTrafficData",
 *   },
 *   TravelMode: "Car" || "Pedestrian" || "Scooter" || "Truck" || "Intermodal" || "Transit",
 *   TravelModeOptions: { // RouteTravelModeOptions
 *     Car: { // RouteCarOptions
 *       EngineType: "Electric" || "InternalCombustion" || "PluginHybrid",
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
 *       EngineType: "Electric" || "InternalCombustion" || "PluginHybrid",
 *       LicensePlate: {
 *         LastCharacter: "STRING_VALUE",
 *       },
 *       MaxSpeed: Number("double"),
 *       Occupancy: Number("int"),
 *     },
 *     Truck: { // RouteTruckOptions
 *       AxleCount: Number("int"),
 *       EngineType: "Electric" || "InternalCombustion" || "PluginHybrid",
 *       GrossWeight: Number("long"),
 *       HazardousCargos: [ // RouteHazardousCargoTypeList
 *         "Combustible" || "Corrosive" || "Explosive" || "Flammable" || "Gas" || "HarmfulToWater" || "Organic" || "Other" || "Poison" || "PoisonousInhalation" || "Radioactive",
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
 *       TruckType: "LightTruck" || "StraightTruck" || "Tractor",
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
 *     Intermodal: { // RouteIntermodalOptions
 *       AccessibilityAttributes: [ // RouteAccessibilityAttributeList
 *         "Wheelchair",
 *       ],
 *       MaxTransfers: Number("int"),
 *       Pedestrian: { // RouteIntermodalPedestrianOptions
 *         MaxDistance: Number("long"),
 *         Speed: Number("double"),
 *       },
 *       Rental: { // RouteIntermodalRentalOptions
 *         AllowedModes: [ // RouteRentalModeList
 *           "All" || "Car",
 *         ],
 *         EnabledFor: [ // RouteIntermodalEnabledLegsList
 *           "FirstLeg" || "LastLeg" || "EntireRoute" || "None",
 *         ],
 *         ExcludedModes: [
 *           "All" || "Car",
 *         ],
 *       },
 *       Taxi: { // RouteIntermodalTaxiOptions
 *         AllowedModes: [ // RouteTaxiModeList
 *           "All" || "Car",
 *         ],
 *         EnabledFor: [
 *           "FirstLeg" || "LastLeg" || "EntireRoute" || "None",
 *         ],
 *         ExcludedModes: [
 *           "All" || "Car",
 *         ],
 *       },
 *       Transit: { // RouteIntermodalTransitOptions
 *         AllowedModes: [ // RouteTransitModeList
 *           "AerialTramway" || "Airplane" || "All" || "Bus" || "BusRapidTransit" || "CityTrain" || "Ferry" || "FunicularRailway" || "HighSpeedTrain" || "IntercityTrain" || "InterregionalTrain" || "LightRail" || "Monorail" || "PrivateBus" || "RegionalTrain" || "Subway",
 *         ],
 *         EnabledFor: [
 *           "FirstLeg" || "LastLeg" || "EntireRoute" || "None",
 *         ],
 *         ExcludedModes: [
 *           "AerialTramway" || "Airplane" || "All" || "Bus" || "BusRapidTransit" || "CityTrain" || "Ferry" || "FunicularRailway" || "HighSpeedTrain" || "IntercityTrain" || "InterregionalTrain" || "LightRail" || "Monorail" || "PrivateBus" || "RegionalTrain" || "Subway",
 *         ],
 *       },
 *       Vehicle: { // RouteIntermodalVehicleOptions
 *         AllowedModes: [ // RouteVehicleModeList
 *           "All" || "Car",
 *         ],
 *         EnabledFor: [
 *           "FirstLeg" || "LastLeg" || "EntireRoute" || "None",
 *         ],
 *         ExcludedModes: [
 *           "All" || "Car",
 *         ],
 *       },
 *     },
 *     Transit: { // RouteTransitOptions
 *       AccessibilityAttributes: [
 *         "Wheelchair",
 *       ],
 *       AllowedModes: [
 *         "AerialTramway" || "Airplane" || "All" || "Bus" || "BusRapidTransit" || "CityTrain" || "Ferry" || "FunicularRailway" || "HighSpeedTrain" || "IntercityTrain" || "InterregionalTrain" || "LightRail" || "Monorail" || "PrivateBus" || "RegionalTrain" || "Subway",
 *       ],
 *       ExcludedModes: [
 *         "AerialTramway" || "Airplane" || "All" || "Bus" || "BusRapidTransit" || "CityTrain" || "Ferry" || "FunicularRailway" || "HighSpeedTrain" || "IntercityTrain" || "InterregionalTrain" || "LightRail" || "Monorail" || "PrivateBus" || "RegionalTrain" || "Subway",
 *       ],
 *       MaxTransfers: Number("int"),
 *       Pedestrian: { // RouteTransitPedestrianOptions
 *         MaxDistance: Number("long"),
 *         Speed: Number("double"),
 *       },
 *     },
 *   },
 *   TravelStepType: "Default" || "TurnByTurn",
 *   Waypoints: [ // RouteWaypointList
 *     { // RouteWaypoint
 *       AvoidActionsForDistance: Number("long"),
 *       AvoidUTurns: true || false,
 *       Heading: Number("double"),
 *       Matching: {
 *         NameHint: "STRING_VALUE",
 *         OnRoadThreshold: Number("long"),
 *         Radius: Number("long"),
 *         Strategy: "MatchAny" || "MatchMostSignificantRoad",
 *       },
 *       PassThrough: true || false,
 *       Position: "<Position>", // required
 *       SideOfStreet: {
 *         Position: "<Position>", // required
 *         UseWith: "AnyStreet" || "DividedStreetOnly",
 *       },
 *       StopDuration: Number("long"),
 *     },
 *   ],
 * };
 * const command = new CalculateRoutesCommand(input);
 * const response = await client.send(command);
 * // { // CalculateRoutesResponse
 * //   LegGeometryFormat: "FlexiblePolyline" || "Simple", // required
 * //   Notices: [ // RouteResponseNoticeList // required
 * //     { // RouteResponseNotice
 * //       Code: "MainLanguageNotFound" || "Other" || "TravelTimeExceedsDriverWorkHours" || "TransitDataUnavailable" || "TransitRouteUnavailable" || "NoTransitStationsFound", // required
 * //       Impact: "High" || "Low",
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
 * //                 Type: "Deboard", // required
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
 * //                 Type: "Board", // required
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
 * //                 Code: "AccuratePolylineUnavailable" || "NoSchedule" || "Other" || "ViolatedAvoidFerry" || "ViolatedAvoidRailFerry" || "SeasonalClosure" || "PotentialViolatedVehicleRestrictionUsage" || "ViolatedAvoidAreas" || "ViolatedVehicleRestriction", // required
 * //                 Impact: "High" || "Low",
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
 * //                 Type: "Depart" || "Continue" || "Arrive", // required
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
 * //             AfterTravelSteps: [ // RoutePedestrianAfterTravelStepList // required
 * //               { // RoutePedestrianAfterTravelStep
 * //                 Duration: Number("long"), // required
 * //                 Instruction: "STRING_VALUE",
 * //                 Type: "Wait", // required
 * //               },
 * //             ],
 * //             Arrival: { // RoutePedestrianArrival
 * //               Place: { // RoutePedestrianPlace
 * //                 AccessPointDetails: { // RouteAccessPointDetails
 * //                   Accessibility: { // RouteAccessibilityAvailabilityDetails
 * //                     Wheelchair: "Available" || "Limited" || "Unavailable" || "Unknown",
 * //                   },
 * //                 },
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: "<Position23>",
 * //                 Position: "<Position23>", // required
 * //                 SideOfStreet: "Left" || "Right",
 * //                 StationDetails: { // RouteStationDetails
 * //                   Accessibility: {
 * //                     Wheelchair: "Available" || "Limited" || "Unavailable" || "Unknown",
 * //                   },
 * //                   PlatformName: "STRING_VALUE",
 * //                   ShortName: "STRING_VALUE",
 * //                 },
 * //                 Type: "AccessPoint" || "DockingStation" || "ParkingLot" || "Station",
 * //                 WaypointIndex: Number("int"),
 * //               },
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Departure: { // RoutePedestrianDeparture
 * //               Place: {
 * //                 AccessPointDetails: {
 * //                   Accessibility: {
 * //                     Wheelchair: "Available" || "Limited" || "Unavailable" || "Unknown",
 * //                   },
 * //                 },
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: "<Position23>",
 * //                 Position: "<Position23>", // required
 * //                 SideOfStreet: "Left" || "Right",
 * //                 StationDetails: {
 * //                   Accessibility: {
 * //                     Wheelchair: "Available" || "Limited" || "Unavailable" || "Unknown",
 * //                   },
 * //                   PlatformName: "STRING_VALUE",
 * //                   ShortName: "STRING_VALUE",
 * //                 },
 * //                 Type: "AccessPoint" || "DockingStation" || "ParkingLot" || "Station",
 * //                 WaypointIndex: Number("int"),
 * //               },
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Notices: [ // RoutePedestrianNoticeList // required
 * //               { // RoutePedestrianNotice
 * //                 Code: "AccuratePolylineUnavailable" || "Other" || "ViolatedAvoidDirtRoad" || "ViolatedAvoidTunnel" || "ViolatedPedestrianOption" || "ViolatedAvoidAreas", // required
 * //                 Impact: "High" || "Low",
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
 * //                   "Allowed" || "Indoors" || "NoThroughTraffic" || "Park" || "Stairs" || "TollRoad",
 * //                 ],
 * //                 Region: "STRING_VALUE",
 * //                 RoadAttributes: [ // RouteSpanRoadAttributeList
 * //                   "Bridge" || "BuiltUpArea" || "ControlledAccessHighway" || "DirtRoad" || "DividedRoad" || "Motorway" || "PrivateRoad" || "Ramp" || "RightHandTraffic" || "Roundabout" || "Tunnel" || "UnderConstruction",
 * //                 ],
 * //                 RouteNumbers: [ // RouteNumberList
 * //                   { // RouteNumber
 * //                     Direction: "East" || "North" || "South" || "West",
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
 * //                       Direction: "East" || "North" || "South" || "West",
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
 * //                   Type: "Highway" || "Rural" || "Urban",
 * //                 },
 * //                 Distance: Number("long"),
 * //                 Duration: Number("long"), // required
 * //                 ExitNumber: "<LocalizedStringList>",
 * //                 GeometryOffset: Number("int"),
 * //                 Instruction: "STRING_VALUE",
 * //                 KeepStepDetails: { // RouteKeepStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 NextRoad: {
 * //                   RoadName: "<LocalizedStringList>", // required
 * //                   RouteNumber: [ // required
 * //                     {
 * //                       Direction: "East" || "North" || "South" || "West",
 * //                       Language: "STRING_VALUE",
 * //                       Value: "STRING_VALUE", // required
 * //                     },
 * //                   ],
 * //                   Towards: "<LocalizedStringList>", // required
 * //                   Type: "Highway" || "Rural" || "Urban",
 * //                 },
 * //                 RoundaboutEnterStepDetails: { // RouteRoundaboutEnterStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 RoundaboutExitStepDetails: { // RouteRoundaboutExitStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   RelativeExit: Number("int"),
 * //                   RoundaboutAngle: Number("double"),
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                 },
 * //                 RoundaboutPassStepDetails: { // RouteRoundaboutPassStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
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
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 Type: "Arrive" || "Continue" || "Depart" || "Keep" || "RoundaboutEnter" || "RoundaboutExit" || "RoundaboutPass" || "Turn", // required
 * //               },
 * //             ],
 * //           },
 * //           TravelMode: "Car" || "Ferry" || "Pedestrian" || "Scooter" || "Truck" || "CarShuttleTrain" || "AerialTramway" || "Airplane" || "Bus" || "BusRapidTransit" || "CityTrain" || "FunicularRailway" || "HighSpeedTrain" || "IntercityTrain" || "InterregionalTrain" || "LightRail" || "Monorail" || "PrivateBus" || "RegionalTrain" || "Subway", // required
 * //           Type: "Ferry" || "Pedestrian" || "Vehicle" || "Rental" || "Taxi" || "Transit", // required
 * //           VehicleLegDetails: { // RouteVehicleLegDetails
 * //             AfterTravelSteps: [ // RouteVehicleAfterTravelStepList // required
 * //               { // RouteVehicleAfterTravelStep
 * //                 ChargeStepDetails: { // RouteChargeStepDetails
 * //                   ArrivalCharge: Number("double"),
 * //                   ConsumablePower: Number("double"),
 * //                   DesiredCharge: Number("double"),
 * //                 },
 * //                 Duration: Number("long"), // required
 * //                 Instruction: "STRING_VALUE",
 * //                 Type: "Park", // required
 * //               },
 * //             ],
 * //             Arrival: { // RouteVehicleArrival
 * //               Place: { // RouteVehiclePlace
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: "<Position23>",
 * //                 Position: "<Position23>", // required
 * //                 SideOfStreet: "Left" || "Right",
 * //                 WaypointIndex: Number("int"),
 * //                 AccessPointDetails: {
 * //                   Accessibility: {
 * //                     Wheelchair: "Available" || "Limited" || "Unavailable" || "Unknown",
 * //                   },
 * //                 },
 * //                 StationDetails: {
 * //                   Accessibility: "<RouteAccessibilityAvailabilityDetails>",
 * //                   PlatformName: "STRING_VALUE",
 * //                   ShortName: "STRING_VALUE",
 * //                 },
 * //                 Type: "AccessPoint" || "DockingStation" || "ParkingLot" || "Station",
 * //               },
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Departure: { // RouteVehicleDeparture
 * //               Place: {
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: "<Position23>",
 * //                 Position: "<Position23>", // required
 * //                 SideOfStreet: "Left" || "Right",
 * //                 WaypointIndex: Number("int"),
 * //                 AccessPointDetails: {
 * //                   Accessibility: "<RouteAccessibilityAvailabilityDetails>",
 * //                 },
 * //                 StationDetails: {
 * //                   Accessibility: "<RouteAccessibilityAvailabilityDetails>",
 * //                   PlatformName: "STRING_VALUE",
 * //                   ShortName: "STRING_VALUE",
 * //                 },
 * //                 Type: "AccessPoint" || "DockingStation" || "ParkingLot" || "Station",
 * //               },
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Incidents: [ // RouteVehicleIncidentList // required
 * //               { // RouteVehicleIncident
 * //                 Description: "STRING_VALUE",
 * //                 EndTime: "STRING_VALUE",
 * //                 Severity: "Critical" || "High" || "Medium" || "Low",
 * //                 StartTime: "STRING_VALUE",
 * //                 Type: "Accident" || "Congestion" || "Construction" || "DisabledVehicle" || "LaneRestriction" || "MassTransit" || "Other" || "PlannedEvent" || "RoadClosure" || "RoadHazard" || "Weather",
 * //               },
 * //             ],
 * //             Notices: [ // RouteVehicleNoticeList // required
 * //               { // RouteVehicleNotice
 * //                 Code: "AccuratePolylineUnavailable" || "Other" || "PotentialViolatedAvoidTollRoadUsage" || "PotentialViolatedCarpoolUsage" || "PotentialViolatedTurnRestrictionUsage" || "PotentialViolatedVehicleRestrictionUsage" || "PotentialViolatedZoneRestrictionUsage" || "SeasonalClosure" || "TollsDataTemporarilyUnavailable" || "TollsDataUnavailable" || "TollTransponder" || "ViolatedAvoidControlledAccessHighway" || "ViolatedAvoidDifficultTurns" || "ViolatedAvoidDirtRoad" || "ViolatedAvoidSeasonalClosure" || "ViolatedAvoidTollRoad" || "ViolatedAvoidTollTransponder" || "ViolatedAvoidTruckRoadType" || "ViolatedAvoidTunnel" || "ViolatedAvoidUTurns" || "ViolatedBlockedRoad" || "ViolatedCarpool" || "ViolatedEmergencyGate" || "ViolatedStartDirection" || "ViolatedTurnRestriction" || "ViolatedVehicleRestriction" || "ViolatedZoneRestriction" || "TravelTimeExceedsDriverWorkHours", // required
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
 * //                         "Combustible" || "Corrosive" || "Explosive" || "Flammable" || "Gas" || "HarmfulToWater" || "Organic" || "Other" || "Poison" || "PoisonousInhalation" || "Radioactive",
 * //                       ],
 * //                       MaxHeight: Number("long"),
 * //                       MaxKpraLength: Number("long"),
 * //                       MaxLength: Number("long"),
 * //                       MaxPayloadCapacity: Number("long"),
 * //                       MaxWeight: { // RouteWeightConstraint
 * //                         Type: "Current" || "Gross" || "Unknown", // required
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
 * //                       TruckType: "LightTruck" || "StraightTruck" || "Tractor",
 * //                       TunnelRestrictionCode: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 ],
 * //                 Impact: "High" || "Low",
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
 * //                   "Allowed" || "NoThroughTraffic" || "TollRoad",
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
 * //                 Gate: "Emergency" || "KeyAccess" || "PermissionRequired",
 * //                 GeometryOffset: Number("int"),
 * //                 Incidents: [
 * //                   Number("int"),
 * //                 ],
 * //                 Names: "<LocalizedStringList>",
 * //                 Notices: [
 * //                   Number("int"),
 * //                 ],
 * //                 RailwayCrossing: "Protected" || "Unprotected",
 * //                 Region: "STRING_VALUE",
 * //                 RoadAttributes: [
 * //                   "Bridge" || "BuiltUpArea" || "ControlledAccessHighway" || "DirtRoad" || "DividedRoad" || "Motorway" || "PrivateRoad" || "Ramp" || "RightHandTraffic" || "Roundabout" || "Tunnel" || "UnderConstruction",
 * //                 ],
 * //                 RouteNumbers: [
 * //                   "<RouteNumber>",
 * //                 ],
 * //                 ScooterAccess: [ // RouteSpanScooterAccessAttributeList
 * //                   "Allowed" || "NoThroughTraffic" || "TollRoad",
 * //                 ],
 * //                 SpeedLimit: {
 * //                   MaxSpeed: Number("double"),
 * //                   Unlimited: true || false,
 * //                 },
 * //                 TollSystems: [
 * //                   Number("int"),
 * //                 ],
 * //                 TruckAccess: [ // RouteSpanTruckAccessAttributeList
 * //                   "Allowed" || "NoThroughTraffic" || "TollRoad",
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
 * //                         Period: "Annual" || "Days" || "ExtendedAnnual" || "Minutes" || "Months", // required
 * //                         PeriodCount: Number("int"),
 * //                       },
 * //                     },
 * //                     PaymentMethods: [ // RouteTollPaymentMethodList // required
 * //                       "BankCard" || "Cash" || "CashExact" || "CreditCard" || "PassSubscription" || "TravelCard" || "Transponder" || "VideoToll",
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
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
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
 * //                   Type: "Highway" || "Rural" || "Urban",
 * //                 },
 * //                 Distance: Number("long"),
 * //                 Duration: Number("long"), // required
 * //                 EnterHighwayStepDetails: { // RouteEnterHighwayStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 ExitNumber: "<LocalizedStringList>",
 * //                 ExitStepDetails: { // RouteExitStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   RelativeExit: Number("int"),
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 GeometryOffset: Number("int"),
 * //                 Instruction: "STRING_VALUE",
 * //                 KeepStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 NextRoad: {
 * //                   RoadName: "<LocalizedStringList>", // required
 * //                   RouteNumber: "<RouteNumberList>", // required
 * //                   Towards: "<LocalizedStringList>", // required
 * //                   Type: "Highway" || "Rural" || "Urban",
 * //                 },
 * //                 RampStepDetails: { // RouteRampStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 RoundaboutEnterStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 RoundaboutExitStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   RelativeExit: Number("int"),
 * //                   RoundaboutAngle: Number("double"),
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                 },
 * //                 RoundaboutPassStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
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
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 Type: "Arrive" || "Continue" || "ContinueHighway" || "Depart" || "EnterHighway" || "Exit" || "Keep" || "Ramp" || "RoundaboutEnter" || "RoundaboutExit" || "RoundaboutPass" || "Turn" || "UTurn", // required
 * //                 UTurnStepDetails: { // RouteUTurnStepDetails
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //               },
 * //             ],
 * //             TruckRoadTypes: [ // TruckRoadTypeList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             Zones: [ // RouteZoneList // required
 * //               { // RouteZone
 * //                 Category: "CongestionPricing" || "Environmental" || "Vignette",
 * //                 Name: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //           RentalLegDetails: { // RouteRentalLegDetails
 * //             AfterTravelSteps: [ // RouteRentalAfterTravelStepList // required
 * //               { // RouteRentalAfterTravelStep
 * //                 Duration: Number("long"), // required
 * //                 Instruction: "STRING_VALUE",
 * //                 Type: "Park", // required
 * //               },
 * //             ],
 * //             Agency: { // RouteRentalAgency
 * //               Name: "STRING_VALUE", // required
 * //               Url: "STRING_VALUE",
 * //             },
 * //             Arrival: { // RouteRentalArrival
 * //               Place: { // RouteRentalPlace
 * //                 AccessPointDetails: {
 * //                   Accessibility: "<RouteAccessibilityAvailabilityDetails>",
 * //                 },
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: "<Position23>",
 * //                 Position: "<Position23>", // required
 * //                 StationDetails: {
 * //                   Accessibility: "<RouteAccessibilityAvailabilityDetails>",
 * //                   PlatformName: "STRING_VALUE",
 * //                   ShortName: "STRING_VALUE",
 * //                 },
 * //                 Type: "AccessPoint" || "DockingStation" || "ParkingLot" || "Station",
 * //                 WaypointIndex: Number("int"),
 * //               },
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Attributions: [ // RouteAttributionList // required
 * //               { // RouteAttribution
 * //                 AttributionType: "Disclaimer" || "Tariff",
 * //                 WebLink: { // RouteWebLink
 * //                   AnchorText: "STRING_VALUE",
 * //                   Description: "STRING_VALUE", // required
 * //                   DeviceType: "Android" || "Ios" || "Web",
 * //                   Url: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //             BeforeTravelSteps: [ // RouteRentalBeforeTravelStepList // required
 * //               { // RouteRentalBeforeTravelStep
 * //                 Duration: Number("long"), // required
 * //                 Instruction: "STRING_VALUE",
 * //                 Type: "Setup", // required
 * //               },
 * //             ],
 * //             BookingWebLinks: [ // RouteWebLinkList // required
 * //               {
 * //                 AnchorText: "STRING_VALUE",
 * //                 Description: "STRING_VALUE", // required
 * //                 DeviceType: "Android" || "Ios" || "Web",
 * //                 Url: "STRING_VALUE",
 * //               },
 * //             ],
 * //             Departure: { // RouteRentalDeparture
 * //               Place: {
 * //                 AccessPointDetails: "<RouteAccessPointDetails>",
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: "<Position23>",
 * //                 Position: "<Position23>", // required
 * //                 StationDetails: "<RouteStationDetails>",
 * //                 Type: "AccessPoint" || "DockingStation" || "ParkingLot" || "Station",
 * //                 WaypointIndex: Number("int"),
 * //               },
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Summary: { // RouteRentalSummary
 * //               Overview: { // RouteRentalOverviewSummary
 * //                 Duration: Number("long"), // required
 * //                 Distance: Number("long"), // required
 * //               },
 * //               TravelOnly: { // RouteRentalTravelOnlySummary
 * //                 Duration: Number("long"), // required
 * //               },
 * //             },
 * //             Transport: { // RouteRentalTransportModeDetails
 * //               AvailableSeats: Number("int"),
 * //               Category: "STRING_VALUE",
 * //               Color: "STRING_VALUE",
 * //               Engine: "Electric" || "InternalCombustion" || "PluginHybrid",
 * //               LicensePlate: "STRING_VALUE",
 * //               Mode: "All" || "Car", // required
 * //               Model: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               TextColor: "STRING_VALUE",
 * //             },
 * //             TravelSteps: [ // RouteRentalTravelStepList // required
 * //               { // RouteRentalTravelStep
 * //                 ContinueStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                 },
 * //                 Distance: Number("long"),
 * //                 Duration: Number("long"), // required
 * //                 ExitStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   RelativeExit: Number("int"),
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 GeometryOffset: Number("int"),
 * //                 Instruction: "STRING_VALUE",
 * //                 KeepStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 RampStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 RoundaboutEnterStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 RoundaboutExitStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   RelativeExit: Number("int"),
 * //                   RoundaboutAngle: Number("double"),
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                 },
 * //                 RoundaboutPassStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 TurnStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 Type: "Arrive" || "Continue" || "Depart" || "Exit" || "Keep" || "Ramp" || "RoundaboutEnter" || "RoundaboutExit" || "RoundaboutPass" || "Turn" || "UTurn", // required
 * //                 UTurnStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //           TaxiLegDetails: { // RouteTaxiLegDetails
 * //             AfterTravelSteps: [ // RouteTaxiAfterTravelStepList // required
 * //               { // RouteTaxiAfterTravelStep
 * //                 Duration: Number("long"), // required
 * //                 Instruction: "STRING_VALUE",
 * //                 Type: "Park", // required
 * //               },
 * //             ],
 * //             Agency: { // RouteTaxiAgency
 * //               Name: "STRING_VALUE", // required
 * //               Url: "STRING_VALUE",
 * //             },
 * //             Arrival: { // RouteTaxiArrival
 * //               Place: { // RouteTaxiPlace
 * //                 AccessPointDetails: "<RouteAccessPointDetails>",
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: "<Position23>",
 * //                 Position: "<Position23>", // required
 * //                 StationDetails: "<RouteStationDetails>",
 * //                 Type: "AccessPoint" || "Station",
 * //                 WaypointIndex: Number("int"),
 * //               },
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Attributions: [ // required
 * //               {
 * //                 AttributionType: "Disclaimer" || "Tariff",
 * //                 WebLink: {
 * //                   AnchorText: "STRING_VALUE",
 * //                   Description: "STRING_VALUE", // required
 * //                   DeviceType: "Android" || "Ios" || "Web",
 * //                   Url: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //             BeforeTravelSteps: [ // RouteTaxiBeforeTravelStepList // required
 * //               { // RouteTaxiBeforeTravelStep
 * //                 Duration: Number("long"), // required
 * //                 Instruction: "STRING_VALUE",
 * //                 Type: "Wait", // required
 * //               },
 * //             ],
 * //             BookingWebLinks: [ // required
 * //               {
 * //                 AnchorText: "STRING_VALUE",
 * //                 Description: "STRING_VALUE", // required
 * //                 DeviceType: "Android" || "Ios" || "Web",
 * //                 Url: "STRING_VALUE",
 * //               },
 * //             ],
 * //             Departure: { // RouteTaxiDeparture
 * //               Place: {
 * //                 AccessPointDetails: "<RouteAccessPointDetails>",
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: "<Position23>",
 * //                 Position: "<Position23>", // required
 * //                 StationDetails: "<RouteStationDetails>",
 * //                 Type: "AccessPoint" || "Station",
 * //                 WaypointIndex: Number("int"),
 * //               },
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Notices: [ // RouteTaxiNoticeList // required
 * //               { // RouteTaxiNotice
 * //                 Code: "AccuratePolylineUnavailable" || "Other", // required
 * //                 Impact: "High" || "Low",
 * //               },
 * //             ],
 * //             Summary: { // RouteTaxiSummary
 * //               Overview: { // RouteTaxiOverviewSummary
 * //                 Duration: Number("long"), // required
 * //                 Distance: Number("long"), // required
 * //               },
 * //               TravelOnly: { // RouteTaxiTravelOnlySummary
 * //                 Duration: Number("long"), // required
 * //               },
 * //             },
 * //             Transport: { // RouteTaxiTransportModeDetails
 * //               AvailableSeats: Number("int"),
 * //               Category: "STRING_VALUE",
 * //               Color: "STRING_VALUE",
 * //               Engine: "Electric" || "InternalCombustion" || "PluginHybrid",
 * //               LicensePlate: "STRING_VALUE",
 * //               Mode: "All" || "Car", // required
 * //               Model: "STRING_VALUE",
 * //               Name: "STRING_VALUE",
 * //               TextColor: "STRING_VALUE",
 * //             },
 * //             TravelSteps: [ // RouteTaxiTravelStepList // required
 * //               { // RouteTaxiTravelStep
 * //                 ContinueStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                 },
 * //                 Distance: Number("long"),
 * //                 Duration: Number("long"), // required
 * //                 ExitStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   RelativeExit: Number("int"),
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 GeometryOffset: Number("int"),
 * //                 Instruction: "STRING_VALUE",
 * //                 KeepStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 RampStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 RoundaboutEnterStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 RoundaboutExitStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   RelativeExit: Number("int"),
 * //                   RoundaboutAngle: Number("double"),
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                 },
 * //                 RoundaboutPassStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 TurnStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //                 Type: "Arrive" || "Continue" || "Depart" || "Exit" || "Keep" || "Ramp" || "RoundaboutEnter" || "RoundaboutExit" || "RoundaboutPass" || "Turn" || "UTurn", // required
 * //                 UTurnStepDetails: {
 * //                   Intersection: "<LocalizedStringList>", // required
 * //                   SteeringDirection: "Left" || "Right" || "Straight",
 * //                   TurnAngle: Number("double"),
 * //                   TurnIntensity: "Sharp" || "Slight" || "Typical",
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //           TransitLegDetails: { // RouteTransitLegDetails
 * //             AfterTravelSteps: [ // RouteTransitAfterTravelStepList // required
 * //               { // RouteTransitAfterTravelStep
 * //                 Duration: Number("long"), // required
 * //                 Instruction: "STRING_VALUE",
 * //                 Type: "Deboard", // required
 * //               },
 * //             ],
 * //             Agency: { // RouteTransitAgency
 * //               Name: "STRING_VALUE", // required
 * //               Url: "STRING_VALUE",
 * //             },
 * //             Arrival: { // RouteTransitArrival
 * //               Delay: Number("long"),
 * //               Place: { // RouteTransitPlace
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: "<Position23>",
 * //                 Position: "<Position23>", // required
 * //                 StationDetails: "<RouteStationDetails>",
 * //                 Type: "Station",
 * //                 WaypointIndex: Number("int"),
 * //               },
 * //               Status: "Added" || "Cancelled" || "Replaced" || "Scheduled",
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Attributions: [ // required
 * //               {
 * //                 AttributionType: "Disclaimer" || "Tariff",
 * //                 WebLink: {
 * //                   AnchorText: "STRING_VALUE",
 * //                   Description: "STRING_VALUE", // required
 * //                   DeviceType: "Android" || "Ios" || "Web",
 * //                   Url: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //             BeforeTravelSteps: [ // RouteTransitBeforeTravelStepList // required
 * //               { // RouteTransitBeforeTravelStep
 * //                 Duration: Number("long"), // required
 * //                 Instruction: "STRING_VALUE",
 * //                 Type: "Board", // required
 * //               },
 * //             ],
 * //             BookingWebLinks: [ // required
 * //               "<RouteWebLink>",
 * //             ],
 * //             Departure: { // RouteTransitDeparture
 * //               Delay: Number("long"),
 * //               Place: {
 * //                 Name: "STRING_VALUE",
 * //                 OriginalPosition: "<Position23>",
 * //                 Position: "<Position23>", // required
 * //                 StationDetails: "<RouteStationDetails>",
 * //                 Type: "Station",
 * //                 WaypointIndex: Number("int"),
 * //               },
 * //               Status: "Added" || "Cancelled" || "Replaced" || "Scheduled",
 * //               Time: "STRING_VALUE",
 * //             },
 * //             Incidents: [ // RouteTransitIncidentList // required
 * //               { // RouteTransitIncident
 * //                 Description: "STRING_VALUE",
 * //                 Effect: "Delayed" || "Detoured" || "Other" || "ServiceAdded" || "ServiceCancelled" || "ServiceModified" || "ServiceReduced" || "StopMoved", // required
 * //                 EndTime: "STRING_VALUE",
 * //                 StartTime: "STRING_VALUE",
 * //                 Type: "Accident" || "Construction" || "Demonstration" || "Holiday" || "Maintenance" || "MedicalEmergency" || "Other" || "PoliceActivity" || "Strike" || "TechnicalProblem" || "Weather", // required
 * //                 Url: "STRING_VALUE",
 * //               },
 * //             ],
 * //             IntermediateStops: [ // RouteTransitIntermediateStopList // required
 * //               { // RouteTransitIntermediateStop
 * //                 Attributes: [ // RouteTransitIntermediateStopAttributeList
 * //                   "NoEntry" || "NoExit",
 * //                 ],
 * //                 Departure: {
 * //                   Delay: Number("long"),
 * //                   Place: {
 * //                     Name: "STRING_VALUE",
 * //                     OriginalPosition: "<Position23>",
 * //                     Position: "<Position23>", // required
 * //                     StationDetails: "<RouteStationDetails>",
 * //                     Type: "Station",
 * //                     WaypointIndex: Number("int"),
 * //                   },
 * //                   Status: "Added" || "Cancelled" || "Replaced" || "Scheduled",
 * //                   Time: "STRING_VALUE",
 * //                 },
 * //                 Duration: Number("long"), // required
 * //                 GeometryOffset: Number("int"),
 * //                 Transport: { // RouteTransitTransportModeDetails
 * //                   Accessibility: "<RouteAccessibilityAvailabilityDetails>",
 * //                   Color: "STRING_VALUE",
 * //                   Headsign: "STRING_VALUE",
 * //                   LongRouteName: "STRING_VALUE",
 * //                   Mode: "AerialTramway" || "Airplane" || "All" || "Bus" || "BusRapidTransit" || "CityTrain" || "Ferry" || "FunicularRailway" || "HighSpeedTrain" || "IntercityTrain" || "InterregionalTrain" || "LightRail" || "Monorail" || "PrivateBus" || "RegionalTrain" || "Subway", // required
 * //                   RouteName: "STRING_VALUE",
 * //                   ShortRouteName: "STRING_VALUE",
 * //                   TextColor: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //             NextDepartures: [ // RouteTransitNextDepartureList // required
 * //               { // RouteTransitNextDeparture
 * //                 Delay: Number("long"),
 * //                 PlatformName: "STRING_VALUE",
 * //                 Status: "Added" || "Cancelled" || "Replaced" || "Scheduled",
 * //                 Time: "STRING_VALUE", // required
 * //                 Transport: {
 * //                   Accessibility: "<RouteAccessibilityAvailabilityDetails>",
 * //                   Color: "STRING_VALUE",
 * //                   Headsign: "STRING_VALUE",
 * //                   LongRouteName: "STRING_VALUE",
 * //                   Mode: "AerialTramway" || "Airplane" || "All" || "Bus" || "BusRapidTransit" || "CityTrain" || "Ferry" || "FunicularRailway" || "HighSpeedTrain" || "IntercityTrain" || "InterregionalTrain" || "LightRail" || "Monorail" || "PrivateBus" || "RegionalTrain" || "Subway", // required
 * //                   RouteName: "STRING_VALUE",
 * //                   ShortRouteName: "STRING_VALUE",
 * //                   TextColor: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //             Notices: [ // RouteTransitNoticeList // required
 * //               { // RouteTransitNotice
 * //                 Code: "AccuratePolylineUnavailable" || "IntermediateStopsUnavailable" || "NoSchedule" || "Other" || "PotentialViolatedVehicleRestrictionUsage" || "ScheduledTimes" || "SeasonalClosure" || "ViolatedAvoidFerry" || "ViolatedAvoidRailFerry" || "ViolatedExcludedTransitMode" || "ViolatedVehicleRestriction" || "ViolatedAvoidAreas", // required
 * //                 Impact: "High" || "Low",
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
 * //             Spans: [ // RouteTransitSpanList // required
 * //               { // RouteTransitSpan
 * //                 Country: "STRING_VALUE",
 * //                 Distance: Number("long"),
 * //                 Duration: Number("long"),
 * //                 GeometryOffset: Number("int"),
 * //                 Names: "<LocalizedStringList>",
 * //                 Region: "STRING_VALUE",
 * //               },
 * //             ],
 * //             Summary: { // RouteTransitSummary
 * //               Overview: { // RouteTransitOverviewSummary
 * //                 Distance: Number("long"), // required
 * //                 Duration: Number("long"), // required
 * //               },
 * //               TravelOnly: { // RouteTransitTravelOnlySummary
 * //                 Duration: Number("long"), // required
 * //               },
 * //             },
 * //             Transport: {
 * //               Accessibility: "<RouteAccessibilityAvailabilityDetails>",
 * //               Color: "STRING_VALUE",
 * //               Headsign: "STRING_VALUE",
 * //               LongRouteName: "STRING_VALUE",
 * //               Mode: "AerialTramway" || "Airplane" || "All" || "Bus" || "BusRapidTransit" || "CityTrain" || "Ferry" || "FunicularRailway" || "HighSpeedTrain" || "IntercityTrain" || "InterregionalTrain" || "LightRail" || "Monorail" || "PrivateBus" || "RegionalTrain" || "Subway", // required
 * //               RouteName: "STRING_VALUE",
 * //               ShortRouteName: "STRING_VALUE",
 * //               TextColor: "STRING_VALUE",
 * //             },
 * //             TravelSteps: [ // RouteTransitTravelStepList // required
 * //               { // RouteTransitTravelStep
 * //                 Distance: Number("long"),
 * //                 Duration: Number("long"), // required
 * //                 GeometryOffset: Number("int"),
 * //                 Instruction: "STRING_VALUE",
 * //                 Type: "Depart", // required
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
export class CalculateRoutesCommand extends command<CalculateRoutesCommandInput, CalculateRoutesCommandOutput>(
  _ep0,
  _mw0,
  "CalculateRoutes",
  CalculateRoutes$
) {
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
