// smithy-typescript generated code
import type {
  DayOfWeek,
  GeometryFormat,
  IsolineEngineType,
  IsolineHazardousCargoType,
  IsolineOptimizationObjective,
  IsolineTravelMode,
  IsolineTruckType,
  IsolineZoneCategory,
  MatchingStrategy,
  MeasurementSystem,
  RoadSnapHazardousCargoType,
  RoadSnapNoticeCode,
  RoadSnapTravelMode,
  RouteAccessibilityAttribute,
  RouteAccessibilityAvailability,
  RouteAttributionType,
  RouteDirection,
  RouteEngineType,
  RouteFerryAfterTravelStepType,
  RouteFerryBeforeTravelStepType,
  RouteFerryNoticeCode,
  RouteFerryTravelStepType,
  RouteHazardousCargoType,
  RouteIntermodalEnabledLegs,
  RouteLegAdditionalFeature,
  RouteLegTravelMode,
  RouteLegType,
  RouteMatrixErrorCode,
  RouteMatrixHazardousCargoType,
  RouteMatrixTravelMode,
  RouteMatrixTruckType,
  RouteMatrixZoneCategory,
  RouteNoticeImpact,
  RoutePedestrianAfterTravelStepType,
  RoutePedestrianNoticeCode,
  RoutePedestrianPlaceType,
  RoutePedestrianTravelStepType,
  RouteRentalAfterTravelStepType,
  RouteRentalBeforeTravelStepType,
  RouteRentalMode,
  RouteRentalPlaceType,
  RouteRentalTravelStepType,
  RouteResponseNoticeCode,
  RouteRoadType,
  RouteSideOfStreet,
  RouteSpanAdditionalFeature,
  RouteSpanCarAccessAttribute,
  RouteSpanGateAttribute,
  RouteSpanPedestrianAccessAttribute,
  RouteSpanRailwayCrossingAttribute,
  RouteSpanRoadAttribute,
  RouteSpanScooterAccessAttribute,
  RouteSpanTruckAccessAttribute,
  RouteSteeringDirection,
  RouteTaxiAfterTravelStepType,
  RouteTaxiBeforeTravelStepType,
  RouteTaxiMode,
  RouteTaxiNoticeCode,
  RouteTaxiPlaceType,
  RouteTaxiTravelStepType,
  RouteTollPassValidityPeriodType,
  RouteTollPaymentMethod,
  RouteTollVehicleCategory,
  RouteTransitAfterTravelStepType,
  RouteTransitBeforeTravelStepType,
  RouteTransitIncidentEffect,
  RouteTransitIncidentType,
  RouteTransitIntermediateStopAttribute,
  RouteTransitMode,
  RouteTransitNoticeCode,
  RouteTransitPlaceType,
  RouteTransitTravelStepType,
  RouteTransitTripStatus,
  RouteTravelMode,
  RouteTravelStepType,
  RouteTruckType,
  RouteTurnIntensity,
  RouteVehicleAfterTravelStepType,
  RouteVehicleIncidentSeverity,
  RouteVehicleIncidentType,
  RouteVehicleMode,
  RouteVehicleNoticeCode,
  RouteVehiclePlaceType,
  RouteVehicleTravelStepType,
  RouteWebLinkDeviceType,
  RouteWeightConstraintType,
  RouteZoneCategory,
  RoutingObjective,
  SideOfStreetMatchingStrategy,
  TrafficUsage,
  WaypointOptimizationClusteringAlgorithm,
  WaypointOptimizationConstraint,
  WaypointOptimizationHazardousCargoType,
  WaypointOptimizationSequencingObjective,
  WaypointOptimizationServiceTimeTreatment,
  WaypointOptimizationTravelMode,
  WaypointOptimizationTruckType,
} from "./enums";

/**
 * <p>Special road types or features that should be considered available for routing. For example, this attribute can be used to allow the use of HOV (high-occupancy vehicle) or HOT (high-occupancy toll) lanes, even if they would otherwise not be.</p>
 * @public
 */
export interface IsolineAllowOptions {
  /**
   * <p>When true, allows the use of HOT (high-occupancy toll) lanes, which may affect travel times and reachable areas.</p> <p>Default value: <code>false</code> </p>
   * @public
   */
  Hot?: boolean | undefined;

  /**
   * <p>When true, allows the use of HOV (high-occupancy vehicle) lanes, which may affect travel times and reachable areas.</p> <p>Default value: <code>false</code> </p>
   * @public
   */
  Hov?: boolean | undefined;
}

/**
 * <p>Geometry defined as a corridor - a LineString with a radius that defines the width of the corridor.</p>
 * @public
 */
export interface Corridor {
  /**
   * <p>An ordered list of positions used to plot a route on a map.</p> <note> <p>LineString and Polyline are mutually exclusive properties.</p> </note>
   * @public
   */
  LineString: number[][] | undefined;

  /**
   * <p>Radius that defines the width of the corridor.</p>
   * @public
   */
  Radius: number | undefined;
}

/**
 * <p>Geometry defined as an encoded corridor - an encoded polyline with a radius that defines the width of the corridor.</p>
 * @public
 */
export interface PolylineCorridor {
  /**
   * <p>An ordered list of positions used to plot a route on a map in a lossy compression format.</p> <note> <p>LineString and Polyline are mutually exclusive properties.</p> </note>
   * @public
   */
  Polyline: string | undefined;

  /**
   * <p>Considers all roads within the provided radius to match the provided destination to. The roads that are considered are determined by the provided Strategy.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Radius: number | undefined;
}

/**
 * <p>Defines an area to avoid during calculations using one of several supported geometry types. The service will prefer routes that avoid these areas when possible.</p>
 * @public
 */
export interface IsolineAvoidanceAreaGeometry {
  /**
   * <p>A rectangular area defined by its southwest and northeast corners: <code>[min longitude, min latitude, max longitude, max latitude]</code>.</p>
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * <p>A buffer zone around a line, defined by a series of coordinates and a radius in meters.</p>
   * @public
   */
  Corridor?: Corridor | undefined;

  /**
   * <p>A polygon defined by a list of coordinate rings. The first ring defines the outer boundary; subsequent rings will be ignored.</p>
   * @public
   */
  Polygon?: number[][][] | undefined;

  /**
   * <p>A buffer zone around a compressed polyline, defined by an encoded polyline string and a radius in meters. For more information on polyline encoding, see <a href="https://github.com/aws-geospatial/polyline">https://github.com/aws-geospatial/polyline</a>.</p>
   * @public
   */
  PolylineCorridor?: PolylineCorridor | undefined;

  /**
   * <p>A polygon defined by encoded polyline strings. The first string defines the outer boundary; subsequent strings will be ignored. For more information on polyline encoding, see <a href="https://github.com/aws-geospatial/polyline">https://github.com/aws-geospatial/polyline</a>.</p>
   * @public
   */
  PolylinePolygon?: string[] | undefined;
}

/**
 * <p>Defines an area to avoid when calculating routes. Consists of a primary geometry to avoid, with the ability to specify exception areas within that geometry where travel is permitted.</p>
 * @public
 */
export interface IsolineAvoidanceArea {
  /**
   * <p>Areas within the primary avoidance geometry where travel is allowed. For example, you might want to avoid a neighborhood but allow travel on a major road that passes through it.</p>
   * @public
   */
  Except?: IsolineAvoidanceAreaGeometry[] | undefined;

  /**
   * <p>The primary area to avoid, specified using a bounding box, corridor, polygon, or polyline corridor.</p>
   * @public
   */
  Geometry: IsolineAvoidanceAreaGeometry | undefined;
}

/**
 * <p>Types of regulated zones that may affect routing.</p>
 * @public
 */
export interface IsolineAvoidanceZoneCategory {
  /**
   * <p>The type of regulated zone: <code>CongestionPricing</code> for toll zones based on traffic levels, <code>Environmental</code> for low-emission zones, or <code>Vignette</code> for areas requiring special permits or stickers.</p>
   * @public
   */
  Category?: IsolineZoneCategory | undefined;
}

/**
 * <p>Specifies features of the road network to avoid when calculating reachable areas. These preferences guide route calculations but may be overridden when no reasonable alternative exists. For example, if avoiding toll roads would make an area unreachable, toll roads may still be used.</p> <p>Avoidance options include physical features (like ferries and tunnels), road characteristics (like dirt roads and highways), and regulated areas (like congestion zones). They can be combined to match specific routing needs, such as avoiding both toll roads and ferries.</p>
 * @public
 */
export interface IsolineAvoidanceOptions {
  /**
   * <p>Specifies geographic areas to avoid where possible. Routes may still pass through these areas if no reasonable alternative exists.</p>
   * @public
   */
  Areas?: IsolineAvoidanceArea[] | undefined;

  /**
   * <p>Indicates a preference to avoid car shuttle trains (auto trains) where possible. These may still be included if no reasonable alternative route exists.</p>
   * @public
   */
  CarShuttleTrains?: boolean | undefined;

  /**
   * <p>Indicates a preference to avoid controlled-access highways (such as interstate highways or motorways) where possible. If a viable route cannot be calculated using only local roads, controlled-access highways may still be included.</p>
   * @public
   */
  ControlledAccessHighways?: boolean | undefined;

  /**
   * <p>Indicates a preference to avoid unpaved or dirt roads where possible. Routes may still include dirt roads if no reasonable paved alternative exists.</p>
   * @public
   */
  DirtRoads?: boolean | undefined;

  /**
   * <p>Indicates a preference to avoid ferries where possible. If a viable route cannot be calculated without using ferries, they may still be included.</p>
   * @public
   */
  Ferries?: boolean | undefined;

  /**
   * <p>Indicates a preference to avoid roads that may be subject to seasonal closures where possible. These roads may still be included if no reasonable year-round alternative exists.</p>
   * @public
   */
  SeasonalClosure?: boolean | undefined;

  /**
   * <p>Indicates a preference to avoid toll roads where possible. If a viable route cannot be calculated without using toll roads, they may still be included.</p>
   * @public
   */
  TollRoads?: boolean | undefined;

  /**
   * <p>Indicates a preference to avoid roads that require electronic toll collection transponders where possible. These roads may still be included if no viable alternative route exists.</p>
   * @public
   */
  TollTransponders?: boolean | undefined;

  /**
   * <p>For truck travel modes, indicates specific road classification types in Sweden (<code> BK1</code> through <code>BK4</code>) and Mexico (<code>A2, A4, B2, B4, C, D, ET2, ET4</code>) to avoid where possible. These road types may still be used if no reasonable alternative exists.</p> <note> <p>There are currently no other supported values as of 26th April 2024.</p> </note>
   * @public
   */
  TruckRoadTypes?: string[] | undefined;

  /**
   * <p>Indicates a preference to avoid tunnels where possible. If a viable route cannot be calculated without using tunnels, they may still be included.</p>
   * @public
   */
  Tunnels?: boolean | undefined;

  /**
   * <p>Indicates a preference to avoid U-turns where possible. U-turns may still be included if necessary to reach certain areas or when no reasonable alternative exists.</p>
   * @public
   */
  UTurns?: boolean | undefined;

  /**
   * <p>Indicates types of regulated zones (such as congestion pricing or environmental zones) to avoid where possible. Routes may still pass through these zones if no reasonable alternative exists.</p>
   * @public
   */
  ZoneCategories?: IsolineAvoidanceZoneCategory[] | undefined;
}

/**
 * <p>Controls how origin and destination points are matched to the road network when they don't fall exactly on a road. Matching options help ensure realistic routing by connecting points to appropriate roads.</p>
 * @public
 */
export interface IsolineMatchingOptions {
  /**
   * <p>The expected street name near the point. Helps disambiguate matching when multiple roads are within range.</p>
   * @public
   */
  NameHint?: string | undefined;

  /**
   * <p>The maximum distance in meters that a point can be from a road while still being considered "on" that road. Points further than this distance require explicit matching.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  OnRoadThreshold?: number | undefined;

  /**
   * <p>The maximum distance in meters to search for roads to match to. Points with no roads within this radius will fail to match. The roads that are considered within this radius are determined by the specified <code>Strategy</code> </p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Radius?: number | undefined;

  /**
   * <p>Determines how points are matched to the road network. <code>MatchAny</code> finds the nearest viable road segment, while <code>MatchMostSignificantRoad</code> prioritizes major roads.</p>
   * @public
   */
  Strategy?: MatchingStrategy | undefined;
}

/**
 * <p>Controls how points are matched to specific sides of streets. This is important when the side of the street matters for accessibility - for example, when building entrances or parking lot access points can only be reached from one side of a divided road.</p>
 * @public
 */
export interface IsolineSideOfStreetOptions {
  /**
   * <p>The <code>[longitude, latitude]</code> coordinates of the point that should be matched to a specific side of the street.</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Controls whether side-of-street matching is applied to any street (<code>AnyStreet</code>) or only to divided roads (<code>DividedStreetOnly</code>). This is important when the exact side of the street matters - for example, if a building entrance is only accessible from one side of a divided highway, or if a parking lot can only be entered from northbound lanes. Without correct side-of-street matching, travel time estimates may be inaccurate because they don't account for necessary U-turns or detours to reach the correct side.</p> <p>Default value: <code>DividedStreetOnly</code> </p>
   * @public
   */
  UseWith?: SideOfStreetMatchingStrategy | undefined;
}

/**
 * <p>Options that control how the destination point is interpreted and matched to the road network when calculating reachable areas. This affects which roads are considered accessible near the destination and how the final approach is calculated.</p>
 * @public
 */
export interface IsolineDestinationOptions {
  /**
   * <p>The distance in meters from the destination point within which certain routing actions (such as U-turns or left turns across traffic) are restricted. This helps generate more practical routes by avoiding potentially dangerous maneuvers near the endpoint.</p>
   * @public
   */
  AvoidActionsForDistance?: number | undefined;

  /**
   * <p>The initial direction of travel in degrees (0-360, where 0 is north). This can affect which road segments are considered accessible from the starting point.</p>
   * @public
   */
  Heading?: number | undefined;

  /**
   * <p>Controls how the destination point is matched to the road network, including search radius and name-based matching preferences.</p>
   * @public
   */
  Matching?: IsolineMatchingOptions | undefined;

  /**
   * <p>Specifies which side of the street should be considered accessible, which is important when building entrances or parking access points are only reachable from one side of the road.</p>
   * @public
   */
  SideOfStreet?: IsolineSideOfStreetOptions | undefined;
}

/**
 * <p>Controls the detail level and smoothness of generated isolines. More detailed isolines provide better visual representation of reachable areas but require more processing time and result in larger responses.</p>
 * @public
 */
export interface IsolineGranularityOptions {
  /**
   * <p>The maximum number of points used to define each isoline. Higher values create smoother, more detailed shapes.</p>
   * @public
   */
  MaxPoints?: number | undefined;

  /**
   * <p>The maximum distance in meters between points along the isoline. Smaller values create more detailed shapes.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  MaxResolution?: number | undefined;
}

/**
 * <p>Options that control how the origin point is interpreted when calculating reachable areas. These options affect which roads are considered accessible from the starting point and how initial routing decisions are made.</p>
 * @public
 */
export interface IsolineOriginOptions {
  /**
   * <p>The distance in meters from the origin point within which certain routing actions (such as U-turns or left turns across traffic) are restricted. This helps generate more practical routes by avoiding potentially dangerous maneuvers near the starting point.</p>
   * @public
   */
  AvoidActionsForDistance?: number | undefined;

  /**
   * <p>Initial direction of travel in degrees (0-360, where 0 is north). This affects which road segments are considered accessible from the starting point and is particularly useful when the origin is on a divided road or at a complex intersection.</p>
   * @public
   */
  Heading?: number | undefined;

  /**
   * <p>Controls how the origin point is matched to the road network, including search radius and matching strategy.</p>
   * @public
   */
  Matching?: IsolineMatchingOptions | undefined;

  /**
   * <p>Controls which side of the street is considered accessible from the origin point, particularly important for divided roads where building entrances or parking access may only be available from one direction.</p>
   * @public
   */
  SideOfStreet?: IsolineSideOfStreetOptions | undefined;
}

/**
 * <p>Specifies the time or distance limits used to calculate reachable areas. You can provide up to five thresholds for a single type to generate multiple isolines in a single request. For example, you might request areas reachable within 5, 10, and 15 minutes, or within 1, 2, and 5 kilometers.</p>
 * @public
 */
export interface IsolineThresholds {
  /**
   * <p>List of travel distances in meters. For example, [1000, 2000, 5000] would calculate areas reachable within 1, 2, and 5 kilometers.</p>
   * @public
   */
  Distance?: number[] | undefined;

  /**
   * <p>List of travel times in seconds. For example, [300, 600, 900] would calculate areas reachable within 5, 10, and 15 minutes.</p>
   * @public
   */
  Time?: number[] | undefined;
}

/**
 * <p>Controls how real-time and historical traffic data is used when calculating reachable areas. This affects both the size and shape of isolines by accounting for expected travel speeds based on congestion patterns.</p>
 * @public
 */
export interface IsolineTrafficOptions {
  /**
   * <p>The duration in seconds that real-time congestion data is considered valid before reverting to historical traffic patterns. This helps balance between using current conditions and more predictable historical data when calculating travel times.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  FlowEventThresholdOverride?: number | undefined;

  /**
   * <p>Controls whether traffic data is used in calculations. <code>UseTrafficData</code> considers both real-time congestion and historical patterns, while <code>IgnoreTrafficData</code> calculates routes based solely on road types and speed limits. Using traffic data provides more accurate real-world estimates but may produce different results at different times of day.</p> <p>Default value: <code>UseTrafficData</code> </p>
   * @public
   */
  Usage?: TrafficUsage | undefined;
}

/**
 * <p>License plate information used in regions where road access or routing restrictions are based on license plate numbers.</p>
 * @public
 */
export interface IsolineVehicleLicensePlate {
  /**
   * <p>The last character of the vehicle's license plate. Used to determine road access restrictions in regions with license plate-based traffic management systems.</p>
   * @public
   */
  LastCharacter?: string | undefined;
}

/**
 * <p>Vehicle characteristics and preferences that affect routing for passenger cars. This includes vehicle type, occupancy, and speed restrictions that may influence which roads can be used and expected travel times.</p>
 * @public
 */
export interface IsolineCarOptions {
  /**
   * <p>The type of engine powering the vehicle, which may affect route calculation due to road restrictions or vehicle characteristics.</p> <ul> <li> <p> <code>INTERNAL_COMBUSTION</code>—Standard gasoline or diesel engine.</p> </li> <li> <p> <code>ELECTRIC</code>—Battery electric vehicle.</p> </li> <li> <p> <code>PLUGIN_HYBRID</code>—Combination of electric and internal combustion engines with plug-in charging capability.</p> </li> </ul>
   * @public
   */
  EngineType?: IsolineEngineType | undefined;

  /**
   * <p>License plate information used in regions where road access or routing restrictions are based on license plate numbers.</p>
   * @public
   */
  LicensePlate?: IsolineVehicleLicensePlate | undefined;

  /**
   * <p>The maximum speed of the vehicle in kilometers per hour. When specified, routes will not include roads with higher speed limits. Valid values range from 3.6 km/h (1 m/s) to 252 km/h (70 m/s).</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle. This can affect route calculations by enabling the use of high-occupancy vehicle (HOV) lanes where minimum occupancy requirements are met.</p> <p>Default value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * <p>Vehicle characteristics that affect which roads and paths can be used when calculating reachable areas for scooters. This includes areas such as bike lanes, shared paths, and roads where scooters are permitted.</p>
 * @public
 */
export interface IsolineScooterOptions {
  /**
   * <p>The type of engine powering the vehicle, which may affect route calculation due to road restrictions or vehicle characteristics.</p> <ul> <li> <p> <code>INTERNAL_COMBUSTION</code>—Standard gasoline or diesel engine.</p> </li> <li> <p> <code>ELECTRIC</code>—Battery electric vehicle.</p> </li> <li> <p> <code>PLUGIN_HYBRID</code>—Combination of electric and internal combustion engines with plug-in charging capability.</p> </li> </ul>
   * @public
   */
  EngineType?: IsolineEngineType | undefined;

  /**
   * <p>License plate information used in regions where road access or routing restrictions are based on license plate numbers.</p>
   * @public
   */
  LicensePlate?: IsolineVehicleLicensePlate | undefined;

  /**
   * <p>The maximum speed of the vehicle in kilometers per hour. When specified, routes will not include roads with higher speed limits. Valid values range from 3.6 km/h (1 m/s) to 252 km/h (70 m/s).</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle. This can affect route calculations by enabling the use of high-occupancy vehicle (HOV) lanes where minimum occupancy requirements are met.</p> <p>Default value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * <p>Additional specifications when the vehicle includes one or more trailers.</p>
 * @public
 */
export interface IsolineTrailerOptions {
  /**
   * <p>The total number of axles across all trailers. Used for weight distribution calculations and road restrictions.</p>
   * @public
   */
  AxleCount?: number | undefined;

  /**
   * <p>The number of trailers being pulled. Affects which roads can be used based on local regulations.</p> <p>Default value: <code>0</code> </p>
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * <p>Specifies the total weight for different axle group configurations. Used in regions where regulations set different weight limits based on axle group types.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
 * @public
 */
export interface WeightPerAxleGroup {
  /**
   * <p>Total weight in kilograms for single axle configurations.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  Single?: number | undefined;

  /**
   * <p>Total weight in kilograms for tandem (two adjacent) axle configurations.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  Tandem?: number | undefined;

  /**
   * <p>Total weight in kilograms for triple (three adjacent) axle configurations.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  Triple?: number | undefined;

  /**
   * <p>Total weight in kilograms for quad (four adjacent) axle configurations.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  Quad?: number | undefined;

  /**
   * <p>Total weight in kilograms for quint (five adjacent) axle configurations.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  Quint?: number | undefined;
}

/**
 * <p>Vehicle characteristics and restrictions that affect which roads can be used when calculating reachable areas for trucks. These details ensure that routes respect physical limitations and legal requirements.</p> <p>These apply when the provided travel mode is <code>Truck</code> </p>
 * @public
 */
export interface IsolineTruckOptions {
  /**
   * <p>The total number of axles on the vehicle. Required for certain road restrictions and weight limit calculations.</p>
   * @public
   */
  AxleCount?: number | undefined;

  /**
   * <p>The type of engine powering the vehicle, which may affect route calculation due to road restrictions or vehicle characteristics.</p> <ul> <li> <p> <code>INTERNAL_COMBUSTION</code>—Standard gasoline or diesel engine.</p> </li> <li> <p> <code>ELECTRIC</code>—Battery electric vehicle.</p> </li> <li> <p> <code>PLUGIN_HYBRID</code>—Combination of electric and internal combustion engines with plug-in charging capability.</p> </li> </ul>
   * @public
   */
  EngineType?: IsolineEngineType | undefined;

  /**
   * <p>The gross vehicle weight (the maximum weight a vehicle can safely operate at, as specified by the manufacturer) in kilograms. Used to avoid roads with weight restrictions and ensure compliance with maximum allowed vehicle weight regulations.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  GrossWeight?: number | undefined;

  /**
   * <p>Types of hazardous materials being transported. This affects which roads and tunnels can be used based on local regulations.</p> <ul> <li> <p> <code>Combustible</code>—Materials that can burn readily</p> </li> <li> <p> <code>Corrosive</code>—Materials that can destroy or irreversibly damage other substances</p> </li> <li> <p> <code>Explosive</code>—Materials that can produce an explosion by chemical reaction</p> </li> <li> <p> <code>Flammable</code>—Materials that can easily ignite</p> </li> <li> <p> <code>Gas</code>—Hazardous materials in gaseous form</p> </li> <li> <p> <code>HarmfulToWater</code>—Materials that pose a risk to water sources if released</p> </li> <li> <p> <code>Organic</code>—Hazardous organic compounds</p> </li> <li> <p> <code>Other</code>—Hazardous materials not covered by other categories</p> </li> <li> <p> <code>Poison</code>—Toxic materials</p> </li> <li> <p> <code>PoisonousInhalation</code>—Materials that are toxic when inhaled</p> </li> <li> <p> <code>Radioactive</code>—Materials that emit ionizing radiation</p> </li> </ul>
   * @public
   */
  HazardousCargos?: IsolineHazardousCargoType[] | undefined;

  /**
   * <p>The vehicle height in centimeters. Used to avoid routes with low bridges or other height restrictions.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  Height?: number | undefined;

  /**
   * <p>The height in centimeters measured from the ground to the highest point above the first axle. Used for specific bridge and tunnel clearance restrictions.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  HeightAboveFirstAxle?: number | undefined;

  /**
   * <p>The kingpin to rear axle (KPRA) length in centimeters. Used to determine if the vehicle can safely navigate turns and intersections.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  KpraLength?: number | undefined;

  /**
   * <p>The total vehicle length in centimeters. Used to avoid roads with length restrictions and determine if the vehicle can safely navigate turns.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  Length?: number | undefined;

  /**
   * <p>License plate information used in regions where road access or routing restrictions are based on license plate numbers.</p>
   * @public
   */
  LicensePlate?: IsolineVehicleLicensePlate | undefined;

  /**
   * <p>The maximum speed in kilometers per hour at which the vehicle can or is permitted to travel. This affects travel time calculations and may result in different reachable areas compared to using default speed limits. Value must be between 3.6 and 252 kilometers per hour.</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle. This can affect route calculations by enabling the use of high-occupancy vehicle (HOV) lanes where minimum occupancy requirements are met.</p> <p>Default value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;

  /**
   * <p>The maximum cargo weight in kilograms that the vehicle (including attached trailers) is rated to carry.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  PayloadCapacity?: number | undefined;

  /**
   * <p>The total number of tires on the vehicle.</p>
   * @public
   */
  TireCount?: number | undefined;

  /**
   * <p>Optional specifications for attached trailers. When provided, trailer characteristics affect route calculations to ensure compliance with trailer-specific restrictions such as length limits, weight distribution requirements, and access restrictions for multi-trailer configurations.</p>
   * @public
   */
  Trailer?: IsolineTrailerOptions | undefined;

  /**
   * <p>The type of truck: <code>LightTruck</code> for smaller delivery vehicles, <code> StraightTruck </code> for rigid body trucks, or <code>Tractor</code> for tractor-trailer combinations.</p>
   * @public
   */
  TruckType?: IsolineTruckType | undefined;

  /**
   * <p>The tunnel restriction code.</p> <p>Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.</p> <ul> <li> <p> <i>Tunnel Category B</i> </p> <ul> <li> <p> <i>Risk Level</i>: Limited risk</p> </li> <li> <p> <i>Restrictions</i>: Few restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category C</i> </p> <ul> <li> <p> <i>Risk Level</i>: Medium risk</p> </li> <li> <p> <i>Restrictions</i>: Some restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category D</i> </p> <ul> <li> <p> <i>Risk Level</i>: High risk</p> </li> <li> <p> <i>Restrictions</i>: Many restrictions occur</p> </li> </ul> </li> <li> <p> <i>Tunnel Category E</i> </p> <ul> <li> <p> <i>Risk Level</i>: Very high risk</p> </li> <li> <p> <i>Restrictions</i>: Restricted tunnel</p> </li> </ul> </li> </ul>
   * @public
   */
  TunnelRestrictionCode?: string | undefined;

  /**
   * <p>The heaviest weight per axle in kilograms, regardless of axle type or grouping. Used for roads with axle-weight restrictions in regions where regulations don't distinguish between different axle configurations.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  WeightPerAxle?: number | undefined;

  /**
   * <p>Specifies the total weight for different axle group configurations. Used in regions where regulations set different weight limits based on axle group types.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  WeightPerAxleGroup?: WeightPerAxleGroup | undefined;

  /**
   * <p>The vehicle width in centimeters. Used to avoid routes with width restrictions.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  Width?: number | undefined;
}

/**
 * <p>Mode-specific routing options that further refine how reachable areas are calculated. Options are only considered when they match the selected travel mode.</p>
 * @public
 */
export interface IsolineTravelModeOptions {
  /**
   * <p>Options specific to passenger vehicle routing (<code>Car</code>, such as vehicle characteristics and license plate restrictions.</p>
   * @public
   */
  Car?: IsolineCarOptions | undefined;

  /**
   * <p>Options specific to scooter routing (<code>Scooter</code>, such as vehicle characteristics and license plate restrictions.</p> <note> <p>When using the <code>Scooter</code> travel mode, controlled-access highways are automatically avoided unless explicitly allowed.</p> </note>
   * @public
   */
  Scooter?: IsolineScooterOptions | undefined;

  /**
   * <p>Options specific to commercial truck routing (<code>Truck</code>, including vehicle dimensions, weight limits, and hazardous cargo specifications.</p>
   * @public
   */
  Truck?: IsolineTruckOptions | undefined;
}

/**
 * @public
 */
export interface CalculateIsolinesRequest {
  /**
   * <p>Enables special road types or features that should be considered for routing even if they might be restricted by default for the selected travel mode. These include high-occupancy vehicle and toll lanes.</p>
   * @public
   */
  Allow?: IsolineAllowOptions | undefined;

  /**
   * <p>Determine areas from which <code>Destination</code> can be reached by this time, taking into account predicted traffic conditions and working backward to account for congestion patterns. This attribute cannot be used together with <code>DepartureTime</code> or <code>DepartNow</code>. Specified as an ISO-8601 timestamp with timezone offset.</p> <p>Time format: <code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  ArrivalTime?: string | undefined;

  /**
   * <p>Specifies road types, features, or areas to avoid (if possible) when calculating reachable areas. These are treated as preferences rather than strict constraints—if a route cannot be calculated without using an avoided feature, that avoidance preference may be ignored.</p>
   * @public
   */
  Avoid?: IsolineAvoidanceOptions | undefined;

  /**
   * <p>When true, uses the current time as the departure time and takes current traffic conditions into account. This attribute cannot be used together with <code>DepartureTime</code> or <code>ArrivalTime</code>.</p>
   * @public
   */
  DepartNow?: boolean | undefined;

  /**
   * <p>Determine areas that can be reached when departing at this time, taking into account predicted traffic conditions. This attribute cannot be used together with <code>ArrivalTime</code> or <code>DepartNow</code>. Specified as an ISO-8601 timestamp with timezone offset.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  DepartureTime?: string | undefined;

  /**
   * <p>An optional destination point, specified as <code>[longitude, latitude]</code> coordinates. When provided, the service calculates areas from which this destination can be reached within the specified thresholds. This reverses the usual isoline calculation to show areas that could reach your location, rather than areas you could reach from your location. Either <code>Origin</code> or <code>Destination</code> must be provided.</p>
   * @public
   */
  Destination?: number[] | undefined;

  /**
   * <p>Options that control how the destination point is matched to the road network and how routes can approach it. These options help improve travel time accuracy by accounting for real-world access to the destination.</p>
   * @public
   */
  DestinationOptions?: IsolineDestinationOptions | undefined;

  /**
   * <p>The format of the returned IsolineGeometry. </p> <p>Default value:<code>FlexiblePolyline</code> </p>
   * @public
   */
  IsolineGeometryFormat?: GeometryFormat | undefined;

  /**
   * <p>Controls the detail level of the generated isolines. Higher granularity produces smoother shapes but requires more processing time and results in larger responses.</p>
   * @public
   */
  IsolineGranularity?: IsolineGranularityOptions | undefined;

  /**
   * <p>An Amazon Location Service API Key with access to this action. If omitted, the request must be signed using Signature Version 4.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Controls the trade-off between calculation speed and isoline precision. Choose <code> FastCalculation</code> for quicker results with less detail, <code>AccurateCalculation</code> for more precise results, or <code>BalancedCalculation</code> for a middle ground.</p> <p>Default value: <code>BalancedCalculation</code> </p>
   * @public
   */
  OptimizeIsolineFor?: IsolineOptimizationObjective | undefined;

  /**
   * <p>Determines whether routes prioritize shortest travel time (<code>FastestRoute</code>) or shortest physical distance (<code>ShortestRoute</code>) when calculating reachable areas.</p> <p>Default value: <code>FastestRoute</code> </p>
   * @public
   */
  OptimizeRoutingFor?: RoutingObjective | undefined;

  /**
   * <p>The starting point for isoline calculations, specified as <code>[longitude, latitude]</code> coordinates. For example, this could be a store location, service center, or any point from which you want to calculate reachable areas. Either <code>Origin</code> or <code>Destination</code> must be provided.</p>
   * @public
   */
  Origin?: number[] | undefined;

  /**
   * <p>Options that control how the origin point is matched to the road network and how routes can depart from it. These options help improve travel time accuracy by accounting for real-world access from the origin.</p>
   * @public
   */
  OriginOptions?: IsolineOriginOptions | undefined;

  /**
   * <p>The distance or time thresholds used to determine reachable areas. You can specify up to five thresholds (which all must be the same type) to calculate multiple isolines in a single request. For example, to determine the areas that are reachable within 10 and 20 minutes of the origin, specify time thresholds of 600 and 1200 seconds.</p> <p>You incur a calculation charge for each threshold. Using a large number of thresholds in a request can lead to unexpected charges. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/routes-pricing.html">Routes pricing</a> in the <i>Amazon Location Service Developer Guide</i>.</p>
   * @public
   */
  Thresholds: IsolineThresholds | undefined;

  /**
   * <p>Configures how real-time and historical traffic data affects isoline calculations. Traffic patterns can significantly impact reachable areas, especially during peak hours.</p>
   * @public
   */
  Traffic?: IsolineTrafficOptions | undefined;

  /**
   * <p>The mode of transportation to use for calculations. This affects which road types or features can be used, estimated speed, and the traffic levels that are applied.</p> <ul> <li> <p> <code>Car</code>—Standard passenger vehicle routing using roads accessible to cars</p> </li> <li> <p> <code>Pedestrian</code>—Walking routes using pedestrian paths, sidewalks, and crossings</p> </li> <li> <p> <code>Scooter</code>—Light two-wheeled vehicle routing using roads and paths accessible to scooters</p> </li> <li> <p> <code>Truck</code>—Commercial truck routing considering vehicle dimensions, weight restrictions, and hazardous material regulations</p> </li> </ul> <note> <p>The mode <code>Scooter</code> also applies to motorcycles; set this to <code>Scooter</code> when calculating isolines for motorcycles.</p> </note> <p>Default value: <code>Car</code> </p>
   * @public
   */
  TravelMode?: IsolineTravelMode | undefined;

  /**
   * <p>Additional attributes that refine how reachable areas are calculated based on specific vehicle characteristics. These options help produce more accurate results by accounting for real-world constraints and capabilities.</p> <p>For example:</p> <ul> <li> <p>For trucks (<code>Truck</code>), specify dimensions, weight limits, and hazardous cargo restrictions to ensure isolines only include roads that can physically and legally accommodate the vehicle</p> </li> <li> <p>For cars (<code>Car</code>), set maximum speed capabilities or indicate high-occupancy vehicle eligibility to better estimate reachable areas</p> </li> <li> <p>For scooters (<code>Scooter</code>), specify engine type and speed limitations to more accurately model their travel capabilities</p> </li> </ul> <p>Without these options, calculations use default assumptions that may not match your specific use case.</p>
   * @public
   */
  TravelModeOptions?: IsolineTravelModeOptions | undefined;
}

/**
 * <p>Represents the geometry of connections between non-contiguous parts of an isoline. These connections can be provided in either coordinate pairs (LineString) or encoded (Polyline) format, matching the format specified in the request.</p>
 * @public
 */
export interface IsolineConnectionGeometry {
  /**
   * <p>A series of <code>[longitude, latitude]</code> coordinate pairs defining the connection path when <code>Simple</code> geometry format is requested. These coordinates can be directly used as the coordinates array in a GeoJSON LineString without transformation.</p> <note> <p>LineString and Polyline are mutually exclusive properties.</p> </note>
   * @public
   */
  LineString?: number[][] | undefined;

  /**
   * <p>An encoded representation of the connection path when <code>FlexiblePolyline</code> geometry format is requested. This provides a more compact representation suitable for transmission and storage. To convert to GeoJSON, first decode to obtain coordinate pairs, then use those coordinates as the coordinates array in a GeoJSON LineString.</p> <note> <p>LineString and Polyline are mutually exclusive properties.</p> </note>
   * @public
   */
  Polyline?: string | undefined;
}

/**
 * <p>Represents a segment of the transportation network that connects separate parts of a reachable area. These connections show how discontinuous areas are linked, such as by ferry routes or bridges crossing unroutable terrain.</p>
 * @public
 */
export interface IsolineConnection {
  /**
   * <p>The index of the starting polygon in the isoline's <code>Geometries</code> list.</p>
   * @public
   */
  FromPolygonIndex: number | undefined;

  /**
   * <p>The shape of the connection, representing the actual path through the transportation network that links the polygons.</p>
   * @public
   */
  Geometry: IsolineConnectionGeometry | undefined;

  /**
   * <p>The index of the ending polygon in the isoline's <code>Geometries</code> list.</p>
   * @public
   */
  ToPolygonIndex: number | undefined;
}

/**
 * <p>Represents the shape of a reachable area. The geometry can be provided either as coordinate pairs (<code>Polygon</code>) or in encoded format (<code>PolylinePolygon</code>), matching the format specified in the request.</p>
 * @public
 */
export interface IsolineShapeGeometry {
  /**
   * <p>A series of coordinate rings defining the reachable area when Simple geometry format is requested. Each ring is a list of <code>[longitude, latitude]</code> coordinate pairs. The first ring defines the outer boundary; subsequent rings define holes representing unreachable areas.</p> <note> <p>Polygon and PolylinePolygon are mutually exclusive properties.</p> </note>
   * @public
   */
  Polygon?: number[][][] | undefined;

  /**
   * <p>An encoded representation of the reachable area when FlexiblePolyline geometry format is requested. Provides a compact representation suitable for transmission and storage. The first string defines the outer boundary; subsequent strings define holes representing unreachable areas. For more information on polyline encoding, see <a href="https://github.com/aws-geospatial/polyline">https://github.com/aws-geospatial/polyline</a>.</p> <note> <p>Polygon and PolylinePolygon are mutually exclusive properties.</p> </note>
   * @public
   */
  PolylinePolygon?: string[] | undefined;
}

/**
 * <p>Represents a single reachable area calculated for a specific threshold.</p>
 * @public
 */
export interface Isoline {
  /**
   * <p>Lines connecting separate parts of the reachable area that can be reached within the same threshold. These occur when areas are reachable but not contiguous, such as when separated by water or unroutable areas. When present, these lines represent actual transportation network segments (such as ferry routes or bridges) that connect the separated areas.</p>
   * @public
   */
  Connections: IsolineConnection[] | undefined;

  /**
   * <p>The travel distance in meters used to calculate this isoline, if distance-based thresholds were specified in the request.</p>
   * @public
   */
  DistanceThreshold?: number | undefined;

  /**
   * <p>The shapes that define the reachable area, provided in the requested geometry format.</p>
   * @public
   */
  Geometries: IsolineShapeGeometry[] | undefined;

  /**
   * <p>The travel time in seconds used to calculate this isoline, if time-based thresholds were specified in the request.</p>
   * @public
   */
  TimeThreshold?: number | undefined;
}

/**
 * @public
 */
export interface CalculateIsolinesResponse {
  /**
   * <p>Time of arrival at the destination, used for traffic calculations. This attribute is returned only if the <code>Destination</code> and <code>ArrivalTime</code> attributes were provided in the request.</p> <p>Time format: <code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  ArrivalTime?: string | undefined;

  /**
   * <p>Time of departure from the origin, used for traffic calculations. This attribute is returned when <code>Origin</code> was provided in the request and either a specific departure time was requested (<code>DepartureTime</code>) or <code>DepartNow</code> was set to true.</p> <p>Time format: <code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  DepartureTime?: string | undefined;

  /**
   * <p>The format of the returned geometries, matching the format specified in the request. Either <code> FlexiblePolyline</code> for compact encoding or <code>Simple</code> for GeoJSON-compatible coordinates.</p> <p>Default value:<code>FlexiblePolyline</code> </p>
   * @public
   */
  IsolineGeometryFormat: GeometryFormat | undefined;

  /**
   * <p>Reachable areas, or isolines, for each threshold specified in the request.</p>
   * @public
   */
  Isolines: Isoline[] | undefined;

  /**
   * <p>The pricing bucket applied to this calculation. Different buckets apply based on the travel mode and thresholds used.</p>
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * <p>The actual point on the road network used for calculations, which may differ from the requested destination if <code>Destination</code> was not directly on a road.</p>
   * @public
   */
  SnappedDestination?: number[] | undefined;

  /**
   * <p>The actual point on the road network used for calculations, which may differ from the requested origin if <code>Origin</code> was not directly on a road.</p>
   * @public
   */
  SnappedOrigin?: number[] | undefined;
}

/**
 * <p>The input fails to satisfy the constraints specified by the Amazon Location service.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the Validation Exception Field.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * <p>Allow Options related to the route matrix.</p>
 * @public
 */
export interface RouteMatrixAllowOptions {
  /**
   * <p>Allow Hot (High Occupancy Toll) lanes while calculating the route.</p> <p>Default value: <code>false</code> </p>
   * @public
   */
  Hot?: boolean | undefined;

  /**
   * <p>Allow Hov (High Occupancy vehicle) lanes while calculating the route.</p> <p>Default value: <code>false</code> </p>
   * @public
   */
  Hov?: boolean | undefined;
}

/**
 * <p>Geometry of the area to be avoided.</p>
 * @public
 */
export interface RouteMatrixAvoidanceAreaGeometry {
  /**
   * <p>Geometry defined as a bounding box. The first pair represents the X and Y coordinates (longitude and latitude,) of the southwest corner of the bounding box; the second pair represents the X and Y coordinates (longitude and latitude) of the northeast corner.</p>
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * <p>Geometry defined as a polygon with only one linear ring.</p>
   * @public
   */
  Polygon?: number[][][] | undefined;

  /**
   * <p>A list of Isoline PolylinePolygon, for each isoline PolylinePolygon, it contains PolylinePolygon of the first linear ring (the outer ring) and from second item to the last item (the inner rings). For more information on polyline encoding, see <a href="https://github.com/aws-geospatial/polyline">https://github.com/aws-geospatial/polyline</a>.</p>
   * @public
   */
  PolylinePolygon?: string[] | undefined;
}

/**
 * <p>Area to be avoided.</p>
 * @public
 */
export interface RouteMatrixAvoidanceArea {
  /**
   * <p>Geometry of the area to be avoided.</p>
   * @public
   */
  Geometry: RouteMatrixAvoidanceAreaGeometry | undefined;
}

/**
 * <p>Zone categories to be avoided.</p>
 * @public
 */
export interface RouteMatrixAvoidanceZoneCategory {
  /**
   * <p>Zone category to be avoided.</p>
   * @public
   */
  Category?: RouteMatrixZoneCategory | undefined;
}

/**
 * <p>Specifies options for areas to avoid when calculating the route. This is a best-effort avoidance setting, meaning the router will try to honor the avoidance preferences but may still include restricted areas if no feasible alternative route exists. If avoidance options are not followed, the response will indicate that the avoidance criteria were violated.</p>
 * @public
 */
export interface RouteMatrixAvoidanceOptions {
  /**
   * <p>Areas to be avoided.</p>
   * @public
   */
  Areas?: RouteMatrixAvoidanceArea[] | undefined;

  /**
   * <p>Avoid car-shuttle-trains while calculating the route.</p>
   * @public
   */
  CarShuttleTrains?: boolean | undefined;

  /**
   * <p>Avoid controlled access highways while calculating the route.</p>
   * @public
   */
  ControlledAccessHighways?: boolean | undefined;

  /**
   * <p>Avoid dirt roads while calculating the route.</p>
   * @public
   */
  DirtRoads?: boolean | undefined;

  /**
   * <p>Avoid ferries while calculating the route.</p>
   * @public
   */
  Ferries?: boolean | undefined;

  /**
   * <p>Avoids roads where the specified toll transponders are the only mode of payment.</p>
   * @public
   */
  TollRoads?: boolean | undefined;

  /**
   * <p>Avoids roads where the specified toll transponders are the only mode of payment.</p>
   * @public
   */
  TollTransponders?: boolean | undefined;

  /**
   * <p>Truck road type identifiers. <code>BK1</code> through <code>BK4</code> apply only to Sweden. <code>A2,A4,B2,B4,C,D,ET2,ET4</code> apply only to Mexico.</p> <note> <p>There are currently no other supported values as of 26th April 2024.</p> </note>
   * @public
   */
  TruckRoadTypes?: string[] | undefined;

  /**
   * <p>Avoid tunnels while calculating the route.</p>
   * @public
   */
  Tunnels?: boolean | undefined;

  /**
   * <p>Avoid U-turns for calculation on highways and motorways.</p>
   * @public
   */
  UTurns?: boolean | undefined;

  /**
   * <p>Zone categories to be avoided.</p>
   * @public
   */
  ZoneCategories?: RouteMatrixAvoidanceZoneCategory[] | undefined;
}

/**
 * <p>Matching options.</p>
 * @public
 */
export interface RouteMatrixMatchingOptions {
  /**
   * <p>Attempts to match the provided position to a road similar to the provided name.</p>
   * @public
   */
  NameHint?: string | undefined;

  /**
   * <p>If the distance to a highway/bridge/tunnel/sliproad is within threshold, the waypoint will be snapped to the highway/bridge/tunnel/sliproad.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  OnRoadThreshold?: number | undefined;

  /**
   * <p>Considers all roads within the provided radius to match the provided destination to. The roads that are considered are determined by the provided Strategy.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Radius?: number | undefined;

  /**
   * <p>Strategy that defines matching of the position onto the road network. MatchAny considers all roads possible, whereas MatchMostSignificantRoad matches to the most significant road.</p>
   * @public
   */
  Strategy?: MatchingStrategy | undefined;
}

/**
 * <p>Options to configure matching the provided position to a side of the street.</p>
 * @public
 */
export interface RouteMatrixSideOfStreetOptions {
  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Strategy that defines when the side of street position should be used. AnyStreet will always use the provided position.</p> <p>Default value: <code>DividedStreetOnly</code> </p>
   * @public
   */
  UseWith?: SideOfStreetMatchingStrategy | undefined;
}

/**
 * <p>Options related to the destination.</p>
 * @public
 */
export interface RouteMatrixDestinationOptions {
  /**
   * <p>Avoids actions for the provided distance. This is typically to consider for users in moving vehicles who may not have sufficient time to make an action at an origin or a destination.</p>
   * @public
   */
  AvoidActionsForDistance?: number | undefined;

  /**
   * <p>GPS Heading at the position.</p>
   * @public
   */
  Heading?: number | undefined;

  /**
   * <p>Options to configure matching the provided position to the road network.</p>
   * @public
   */
  Matching?: RouteMatrixMatchingOptions | undefined;

  /**
   * <p>Options to configure matching the provided position to a side of the street.</p>
   * @public
   */
  SideOfStreet?: RouteMatrixSideOfStreetOptions | undefined;
}

/**
 * <p>The route destination.</p>
 * @public
 */
export interface RouteMatrixDestination {
  /**
   * <p> Destination related options. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Options?: RouteMatrixDestinationOptions | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;
}

/**
 * <p>Specifies strict exclusion options for the route calculation. This setting mandates that the router will avoid any routes that include the specified options, rather than merely attempting to minimize them.</p>
 * @public
 */
export interface RouteMatrixExclusionOptions {
  /**
   * <p>List of countries to be avoided defined by two-letter or three-letter country codes.</p>
   * @public
   */
  Countries: string[] | undefined;
}

/**
 * <p>Origin related options.</p>
 * @public
 */
export interface RouteMatrixOriginOptions {
  /**
   * <p>Avoids actions for the provided distance. This is typically to consider for users in moving vehicles who may not have sufficient time to make an action at an origin or a destination.</p>
   * @public
   */
  AvoidActionsForDistance?: number | undefined;

  /**
   * <p>GPS Heading at the position.</p>
   * @public
   */
  Heading?: number | undefined;

  /**
   * <p>Options to configure matching the provided position to the road network.</p>
   * @public
   */
  Matching?: RouteMatrixMatchingOptions | undefined;

  /**
   * <p>Options to configure matching the provided position to a side of the street.</p>
   * @public
   */
  SideOfStreet?: RouteMatrixSideOfStreetOptions | undefined;
}

/**
 * <p>The start position for the route in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
 * @public
 */
export interface RouteMatrixOrigin {
  /**
   * <p> Origin related options. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Options?: RouteMatrixOriginOptions | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;
}

/**
 * <p> <code>AutoCircle</code> requests the route matrix service to define a <code>Circle</code> boundary that best attempts to include most waypoints (<code>Origins</code> and <code>Destinations</code>) using the <code>AutoCircle</code> settings. Any waypoints outside of the auto-defined <code>Circle</code> boundary will be considered out of the routing boundary, which results in a route matrix entry error.</p> <p> <code>AutoCircle</code> is only used in the request to configure a <code>Circle</code> for the route calculation. The derived <code>Circle</code> will also be provided in the response.</p>
 * @public
 */
export interface RouteMatrixAutoCircle {
  /**
   * <p>The minimal distance, in meters, between any waypoint and the perimeter of the circle auto-defined for the boundary. Some margin is usually recommended so that the routing has enough leeway to travel from one waypoint to another optimally without conflicting with the routing boundary.</p> <p>The total of <code>MaxRadius</code> and <code>Margin</code> must be less than or equal to 200,000 meters.</p>
   * @public
   */
  Margin?: number | undefined;

  /**
   * <p>The maximum radius, in meters, that the auto-defined <code>Circle</code> boundary should have, before the <code>Margin</code> distance is added to the circle.</p> <p>The total of <code>MaxRadius</code> and <code>Margin</code> must be less than or equal to 200,000 meters.</p>
   * @public
   */
  MaxRadius?: number | undefined;
}

/**
 * <p>Geometry defined as a circle. The circle defines the routing boundary area. Any waypoints outside the circle will result in a route matrix entry error.</p> <p>You can specify a <code>Circle</code> directly in the request, or it will be auto-derived when <code>AutoCircle</code> is used. When <code>AutoCircle</code> is set in the request, the response routing boundary will return <code>Circle</code> derived from the <code>AutoCircle</code> settings.</p>
 * @public
 */
export interface Circle {
  /**
   * <p>Center of the Circle in World Geodetic System (WGS 84) format: [longitude, latitude].</p> <p>Example: <code>[-123.1174, 49.2847]</code> represents the position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>. </p>
   * @public
   */
  Center: number[] | undefined;

  /**
   * <p>Radius of the Circle.</p> <p> <b>Unit</b>: <code>meters</code> </p> <p>Valid Range: Minimum value of 0. Maximum value of 200000.</p>
   * @public
   */
  Radius: number | undefined;
}

/**
 * <p>Geometry of the routing boundary.</p>
 * @public
 */
export interface RouteMatrixBoundaryGeometry {
  /**
   * <p> <code>AutoCircle</code> requests the route matrix service to define a <code>Circle</code> boundary that best attempts to include most waypoints (<code>Origins</code> and <code>Destinations</code>) using the <code>AutoCircle</code> settings. Any waypoints outside of the auto-defined <code>Circle</code> boundary will be considered out of the routing boundary, which results in a route matrix entry error.</p> <p> <code>AutoCircle</code> is only used in the request to configure a <code>Circle</code> for the route calculation. The derived <code>Circle</code> will also be provided in the response.</p>
   * @public
   */
  AutoCircle?: RouteMatrixAutoCircle | undefined;

  /**
   * <p>Geometry defined as a circle. The circle defines the routing boundary area. Any waypoints outside the circle will result in a route matrix entry error.</p> <p>You can specify a <code>Circle</code> directly in the request, or it will be auto-derived when <code>AutoCircle</code> is used. When <code>AutoCircle</code> is set in the request, the response routing boundary will return <code>Circle</code> derived from the <code>AutoCircle</code> settings.</p>
   * @public
   */
  Circle?: Circle | undefined;

  /**
   * <p>Geometry defined as a bounding box. The first pair represents the X and Y coordinates (longitude and latitude,) of the southwest corner of the bounding box; the second pair represents the X and Y coordinates (longitude and latitude) of the northeast corner.</p> <p>Diagonal distance of the bounding box must be less than or equal to 400,000 meters.</p>
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * <p>Geometry defined as a polygon with only one linear ring. A linear ring is a closed sequence of four or more coordinates. The first and last coordinates are the same, forming a closed boundary. Each coordinate is a position in [longitude, latitude] format.</p> <p>The structure is an array of linear rings (only 1 allowed). Each linear ring is an array of coordinates (minimum 4), and each coordinate is an array of two doubles [longitude, latitude].</p> <p>Maximum distance between any two vertices must be less than or equal to 400,000 meters.</p>
   * @public
   */
  Polygon?: number[][][] | undefined;
}

/**
 * <p>Boundary within which the matrix is to be calculated. All data, origins and destinations outside the boundary are considered invalid.</p>
 * @public
 */
export interface RouteMatrixBoundary {
  /**
   * <p>Geometry of the area to be avoided.</p>
   * @public
   */
  Geometry?: RouteMatrixBoundaryGeometry | undefined;

  /**
   * <p>No restrictions in terms of a routing boundary, and is typically used for longer routes.</p>
   * @public
   */
  Unbounded?: boolean | undefined;
}

/**
 * <p>Traffic related options.</p>
 * @public
 */
export interface RouteMatrixTrafficOptions {
  /**
   * <p>Duration for which flow traffic is considered valid. For this period, the flow traffic is used over historical traffic data. Flow traffic refers to congestion, which changes very quickly. Duration in seconds for which flow traffic event would be considered valid. While flow traffic event is valid it will be used over the historical traffic data. </p>
   * @public
   */
  FlowEventThresholdOverride?: number | undefined;

  /**
   * <p>Determines if traffic should be used or ignored while calculating the route.</p> <p>Default value: <code>UseTrafficData</code> </p>
   * @public
   */
  Usage?: TrafficUsage | undefined;
}

/**
 * <p>The vehicle License Plate.</p>
 * @public
 */
export interface RouteMatrixVehicleLicensePlate {
  /**
   * <p>The last character of the License Plate.</p>
   * @public
   */
  LastCharacter?: string | undefined;
}

/**
 * <p>Travel mode options when the provided travel mode is <code>Car</code>.</p>
 * @public
 */
export interface RouteMatrixCarOptions {
  /**
   * <p>The vehicle License Plate.</p>
   * @public
   */
  LicensePlate?: RouteMatrixVehicleLicensePlate | undefined;

  /**
   * <p>Maximum speed</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * <p>Travel mode options when the provided travel mode is <code>Scooter</code>.</p>
 * @public
 */
export interface RouteMatrixScooterOptions {
  /**
   * <p>The vehicle License Plate.</p>
   * @public
   */
  LicensePlate?: RouteMatrixVehicleLicensePlate | undefined;

  /**
   * <p>Maximum speed.</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * <p>Trailer options corresponding to the vehicle.</p>
 * @public
 */
export interface RouteMatrixTrailerOptions {
  /**
   * <p>Number of trailers attached to the vehicle.</p> <p>Default value: <code>0</code> </p>
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * <p>Travel mode options when the provided travel mode is <code>Truck</code>.</p>
 * @public
 */
export interface RouteMatrixTruckOptions {
  /**
   * <p>Total number of axles of the vehicle.</p>
   * @public
   */
  AxleCount?: number | undefined;

  /**
   * <p>Gross weight of the vehicle including trailers, and goods at capacity.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  GrossWeight?: number | undefined;

  /**
   * <p>List of Hazardous cargo contained in the vehicle.</p>
   * @public
   */
  HazardousCargos?: RouteMatrixHazardousCargoType[] | undefined;

  /**
   * <p>Height of the vehicle.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  Height?: number | undefined;

  /**
   * <p>Kingpin to rear axle length of the vehicle</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  KpraLength?: number | undefined;

  /**
   * <p>Length of the vehicle.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  Length?: number | undefined;

  /**
   * <p>The vehicle License Plate.</p>
   * @public
   */
  LicensePlate?: RouteMatrixVehicleLicensePlate | undefined;

  /**
   * <p>Maximum speed</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;

  /**
   * <p>Payload capacity of the vehicle and trailers attached.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  PayloadCapacity?: number | undefined;

  /**
   * <p>Trailer options corresponding to the vehicle.</p>
   * @public
   */
  Trailer?: RouteMatrixTrailerOptions | undefined;

  /**
   * <p>The type of truck: <code>LightTruck</code> for smaller delivery vehicles, <code> StraightTruck</code> for rigid body trucks, or <code>Tractor</code> for tractor-trailer combinations.</p>
   * @public
   */
  TruckType?: RouteMatrixTruckType | undefined;

  /**
   * <p>The tunnel restriction code.</p> <p>Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.</p> <ul> <li> <p> <i>Tunnel Category B</i> </p> <ul> <li> <p> <i>Risk Level</i>: Limited risk</p> </li> <li> <p> <i>Restrictions</i>: Few restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category C</i> </p> <ul> <li> <p> <i>Risk Level</i>: Medium risk</p> </li> <li> <p> <i>Restrictions</i>: Some restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category D</i> </p> <ul> <li> <p> <i>Risk Level</i>: High risk</p> </li> <li> <p> <i>Restrictions</i>: Many restrictions occur</p> </li> </ul> </li> <li> <p> <i>Tunnel Category E</i> </p> <ul> <li> <p> <i>Risk Level</i>: Very high risk</p> </li> <li> <p> <i>Restrictions</i>: Restricted tunnel</p> </li> </ul> </li> </ul>
   * @public
   */
  TunnelRestrictionCode?: string | undefined;

  /**
   * <p>Heaviest weight per axle irrespective of the axle type or the axle group. Meant for usage in countries where the differences in axle types or axle groups are not distinguished.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  WeightPerAxle?: number | undefined;

  /**
   * <p>Specifies the total weight for the specified axle group. Meant for usage in countries that have different regulations based on the axle group type.</p>
   * @public
   */
  WeightPerAxleGroup?: WeightPerAxleGroup | undefined;

  /**
   * <p>Width of the vehicle.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  Width?: number | undefined;
}

/**
 * <p>Travel mode related options for the provided travel mode.</p>
 * @public
 */
export interface RouteMatrixTravelModeOptions {
  /**
   * <p>Travel mode options when the provided travel mode is <code>Car</code>.</p>
   * @public
   */
  Car?: RouteMatrixCarOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is <code>Scooter</code>. </p> <note> <p>When travel mode is set to <code>Scooter</code>, then the avoidance option <code>ControlledAccessHighways</code> defaults to <code>true</code>.</p> </note>
   * @public
   */
  Scooter?: RouteMatrixScooterOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is <code>Truck</code>.</p>
   * @public
   */
  Truck?: RouteMatrixTruckOptions | undefined;
}

/**
 * @public
 */
export interface CalculateRouteMatrixRequest {
  /**
   * <p>Features that are allowed while calculating a route.</p>
   * @public
   */
  Allow?: RouteMatrixAllowOptions | undefined;

  /**
   * <p> Features that are avoided while calculating a route. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, it violates the avoidance and the returned response produces a notice for the violation. For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers, <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions support only <code>TollRoads</code>, <code>Ferries</code>, and <code>ControlledAccessHighways</code>. </p>
   * @public
   */
  Avoid?: RouteMatrixAvoidanceOptions | undefined;

  /**
   * <p>Uses the current time as the time of departure.</p>
   * @public
   */
  DepartNow?: boolean | undefined;

  /**
   * <p>Time of departure from the origin.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  DepartureTime?: string | undefined;

  /**
   * <p>List of destinations for the route in World Geodetic System (WGS 84) format: [longitude, latitude].</p> <note> <p>Route calculations are billed for each origin and destination pair. If you use a large matrix of origins and destinations, your costs will increase accordingly. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/routes-pricing.html">Routes pricing</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </note> <p>The maximum number of destinations depends on the routing boundary configuration:</p> <ul> <li> <p>With <code>RoutingBoundary.Geometry</code> set: maximum 500 destinations</p> </li> <li> <p>With <code>RoutingBoundary.Unbounded</code> set to <code>true</code>: maximum 100 destinations</p> </li> <li> <p>For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers in <code>ap-southeast-1</code> and <code>ap-southeast-5</code>: maximum 350 destinations</p> </li> </ul> <p>The total matrix size (origins × destinations) must not exceed:</p> <ul> <li> <p>With <code>RoutingBoundary.Geometry</code>: 160,000</p> </li> <li> <p>With <code>RoutingBoundary.Unbounded</code>: 100</p> </li> <li> <p>For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers in <code>ap-southeast-1</code> and <code>ap-southeast-5</code>: 122,500</p> </li> </ul>
   * @public
   */
  Destinations: RouteMatrixDestination[] | undefined;

  /**
   * <p> Features to be strictly excluded while calculating the route. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Exclude?: RouteMatrixExclusionOptions | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request. </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Controls the trade-off between finding the shortest travel time (<code>FastestRoute</code>) and the shortest distance (<code>ShortestRoute</code>) when calculating reachable areas.</p> <p>Default value: <code>FastestRoute</code> </p>
   * @public
   */
  OptimizeRoutingFor?: RoutingObjective | undefined;

  /**
   * <p>List of origins for the route in World Geodetic System (WGS 84) format: [longitude, latitude].</p> <note> <p>Route calculations are billed for each origin and destination pair. Using a large amount of Origins in a request can lead you to incur unexpected charges. For more information, see <a href="https://docs.aws.amazon.com/location/latest/developerguide/routes-pricing.html">Routes pricing</a> in the <i>Amazon Location Service Developer Guide</i>.</p> </note> <p>The maximum number of origins depends on the routing boundary configuration:</p> <ul> <li> <p>With <code>RoutingBoundary.Geometry</code> set: maximum 500 origins</p> </li> <li> <p>With <code>RoutingBoundary.Unbounded</code> set to <code>true</code>: maximum 15 origins</p> </li> <li> <p>For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers in <code>ap-southeast-1</code> and <code>ap-southeast-5</code>: maximum 350 origins</p> </li> </ul> <p>The total matrix size (origins × destinations) must not exceed:</p> <ul> <li> <p>With <code>RoutingBoundary.Geometry</code>: 160,000</p> </li> <li> <p>With <code>RoutingBoundary.Unbounded</code>: 100</p> </li> <li> <p>For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers in <code>ap-southeast-1</code> and <code>ap-southeast-5</code>: 122,500</p> </li> </ul>
   * @public
   */
  Origins: RouteMatrixOrigin[] | undefined;

  /**
   * <p> Boundary within which the matrix is to be calculated. All data, origins and destinations outside the boundary are considered invalid. For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers, <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions support only <code>Unbounded</code> set to <code>true</code>. </p> <p>Default value: <code>Unbounded set to true</code> </p> <note> <p>When <code>AutoCircle</code> is set in the request, the response routing boundary will return <code>Circle</code> derived from the <code>AutoCircle</code> settings.</p> </note>
   * @public
   */
  RoutingBoundary?: RouteMatrixBoundary | undefined;

  /**
   * <p> Traffic related options. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Traffic?: RouteMatrixTrafficOptions | undefined;

  /**
   * <p> Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers, <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions support only <code>Car</code>, <code>Pedestrian</code>, and <code>Scooter</code>. </p> <p>Default value: <code>Car</code> </p>
   * @public
   */
  TravelMode?: RouteMatrixTravelMode | undefined;

  /**
   * <p> Travel mode related options for the provided travel mode. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  TravelModeOptions?: RouteMatrixTravelModeOptions | undefined;
}

/**
 * <p>The calculated route matrix containing the results for all pairs of Origins to Destination positions. Each row corresponds to one entry in Origins. Each entry in the row corresponds to the route from that entry in Origins to an entry in Destination positions.</p>
 * @public
 */
export interface RouteMatrixEntry {
  /**
   * <p>The total distance of travel for the route.</p>
   * @public
   */
  Distance: number | undefined;

  /**
   * <p>The expected duration of travel for the route.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Error code that occurred during calculation of the route.</p>
   * @public
   */
  Error?: RouteMatrixErrorCode | undefined;
}

/**
 * @public
 */
export interface CalculateRouteMatrixResponse {
  /**
   * <p>The count of error results in the route matrix. If this number is 0, all routes were calculated successfully.</p>
   * @public
   */
  ErrorCount: number | undefined;

  /**
   * <p>The pricing bucket for which the query is charged at.</p>
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * <p>The calculated route matrix containing the results for all pairs of Origins to Destination positions. Each row corresponds to one entry in Origins. Each entry in the row corresponds to the route from that entry in Origins to an entry in Destination positions.</p>
   * @public
   */
  RouteMatrix: RouteMatrixEntry[][] | undefined;

  /**
   * <p>Boundary within which the matrix is to be calculated. All data, origins and destinations outside the boundary are considered invalid.</p> <note> <p>When <code>AutoCircle</code> is set in the request, the response routing boundary will return <code>Circle</code> derived from the <code>AutoCircle</code> settings.</p> </note>
   * @public
   */
  RoutingBoundary: RouteMatrixBoundary | undefined;
}

/**
 * <p>Features that are allowed while calculating a route.</p>
 * @public
 */
export interface RouteAllowOptions {
  /**
   * <p>Allow Hot (High Occupancy Toll) lanes while calculating the route.</p> <p>Default value: <code>false</code> </p>
   * @public
   */
  Hot?: boolean | undefined;

  /**
   * <p>Allow Hov (High Occupancy vehicle) lanes while calculating the route.</p> <p>Default value: <code>false</code> </p>
   * @public
   */
  Hov?: boolean | undefined;
}

/**
 * <p>Geometry of the area to be avoided.</p>
 * @public
 */
export interface RouteAvoidanceAreaGeometry {
  /**
   * <p>Geometry defined as a corridor - a LineString with a radius that defines the width of the corridor.</p>
   * @public
   */
  Corridor?: Corridor | undefined;

  /**
   * <p>Geometry defined as a bounding box. The first pair represents the X and Y coordinates (longitude and latitude,) of the southwest corner of the bounding box; the second pair represents the X and Y coordinates (longitude and latitude) of the northeast corner.</p>
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * <p>Geometry defined as a polygon with only one linear ring.</p>
   * @public
   */
  Polygon?: number[][][] | undefined;

  /**
   * <p>Geometry defined as an encoded corridor - an encoded polyline with a radius that defines the width of the corridor.</p>
   * @public
   */
  PolylineCorridor?: PolylineCorridor | undefined;

  /**
   * <p>A list of Isoline PolylinePolygon, for each isoline PolylinePolygon, it contains PolylinePolygon of the first linear ring (the outer ring) and from 2nd item to the last item (the inner rings). For more information on polyline encoding, see <a href="https://github.com/aws-geospatial/polyline">https://github.com/aws-geospatial/polyline</a>.</p>
   * @public
   */
  PolylinePolygon?: string[] | undefined;
}

/**
 * <p>Areas to be avoided.</p>
 * @public
 */
export interface RouteAvoidanceArea {
  /**
   * <p>Exceptions to the provided avoidance geometry, to be included while calculating the route.</p>
   * @public
   */
  Except?: RouteAvoidanceAreaGeometry[] | undefined;

  /**
   * <p>Geometry of the area to be avoided.</p>
   * @public
   */
  Geometry: RouteAvoidanceAreaGeometry | undefined;
}

/**
 * <p> Zone categories to be avoided. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
 * @public
 */
export interface RouteAvoidanceZoneCategory {
  /**
   * <p>Zone category to be avoided.</p>
   * @public
   */
  Category: RouteZoneCategory | undefined;
}

/**
 * <p>Specifies options for areas to avoid when calculating the route. This is a best-effort avoidance setting, meaning the router will try to honor the avoidance preferences but may still include restricted areas if no feasible alternative route exists. If avoidance options are not followed, the response will indicate that the avoidance criteria were violated.</p>
 * @public
 */
export interface RouteAvoidanceOptions {
  /**
   * <p> Areas to be avoided. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Areas?: RouteAvoidanceArea[] | undefined;

  /**
   * <p> Avoid car-shuttle-trains while calculating the route. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  CarShuttleTrains?: boolean | undefined;

  /**
   * <p>Avoid controlled access highways while calculating the route.</p>
   * @public
   */
  ControlledAccessHighways?: boolean | undefined;

  /**
   * <p> Avoid dirt roads while calculating the route. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  DirtRoads?: boolean | undefined;

  /**
   * <p>Avoid ferries while calculating the route.</p>
   * @public
   */
  Ferries?: boolean | undefined;

  /**
   * <p> Avoid roads that have seasonal closure while calculating the route. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  SeasonalClosure?: boolean | undefined;

  /**
   * <p>Avoids roads where the specified toll transponders are the only mode of payment.</p>
   * @public
   */
  TollRoads?: boolean | undefined;

  /**
   * <p> Avoids roads where the specified toll transponders are the only mode of payment. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  TollTransponders?: boolean | undefined;

  /**
   * <p> Truck road type identifiers. <code>BK1</code> through <code>BK4</code> apply only to Sweden. <code>A2,A4,B2,B4,C,D,ET2,ET4</code> apply only to Mexico. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p> <note> <p>There are currently no other supported values as of 26th April 2024.</p> </note>
   * @public
   */
  TruckRoadTypes?: string[] | undefined;

  /**
   * <p> Avoid tunnels while calculating the route. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Tunnels?: boolean | undefined;

  /**
   * <p> Avoid U-turns for calculation on highways and motorways. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  UTurns?: boolean | undefined;

  /**
   * <p> Zone categories to be avoided. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  ZoneCategories?: RouteAvoidanceZoneCategory[] | undefined;
}

/**
 * <p>Options related to route matching.</p>
 * @public
 */
export interface RouteMatchingOptions {
  /**
   * <p>Attempts to match the provided position to a road similar to the provided name.</p>
   * @public
   */
  NameHint?: string | undefined;

  /**
   * <p>If the distance to a highway/bridge/tunnel/sliproad is within threshold, the waypoint will be snapped to the highway/bridge/tunnel/sliproad.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  OnRoadThreshold?: number | undefined;

  /**
   * <p>Considers all roads within the provided radius to match the provided destination to. The roads that are considered are determined by the provided Strategy.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Radius?: number | undefined;

  /**
   * <p>Strategy that defines matching of the position onto the road network. MatchAny considers all roads possible, whereas MatchMostSignificantRoad matches to the most significant road.</p>
   * @public
   */
  Strategy?: MatchingStrategy | undefined;
}

/**
 * <p>Options to configure matching the provided position to a side of the street.</p>
 * @public
 */
export interface RouteSideOfStreetOptions {
  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Strategy that defines when the side of street position should be used.</p> <p>Default value: <code>DividedStreetOnly</code> </p>
   * @public
   */
  UseWith?: SideOfStreetMatchingStrategy | undefined;
}

/**
 * <p>Options related to the destination.</p>
 * @public
 */
export interface RouteDestinationOptions {
  /**
   * <p>The distance in meters from the destination point within which certain routing actions (such as U-turns or left turns across traffic) are restricted. This helps generate more practical routes by avoiding potentially dangerous maneuvers near the endpoint.</p>
   * @public
   */
  AvoidActionsForDistance?: number | undefined;

  /**
   * <p>Avoid U-turns for calculation on highways and motorways.</p>
   * @public
   */
  AvoidUTurns?: boolean | undefined;

  /**
   * <p>GPS Heading at the position.</p>
   * @public
   */
  Heading?: number | undefined;

  /**
   * <p>Options to configure matching the provided position to the road network.</p>
   * @public
   */
  Matching?: RouteMatchingOptions | undefined;

  /**
   * <p>Options to configure matching the provided position to a side of the street.</p>
   * @public
   */
  SideOfStreet?: RouteSideOfStreetOptions | undefined;

  /**
   * <p>Duration of the stop.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  StopDuration?: number | undefined;
}

/**
 * <p>Interval of the driver work-rest schedule. Stops are added to fulfil the provided rest schedule.</p>
 * @public
 */
export interface RouteDriverScheduleInterval {
  /**
   * <p>Maximum allowed driving time before stopping to rest.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  DriveDuration: number | undefined;

  /**
   * <p>Resting time before the driver can continue driving.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  RestDuration: number | undefined;
}

/**
 * <p>Driver related options.</p>
 * @public
 */
export interface RouteDriverOptions {
  /**
   * <p>Driver work-rest schedule. Stops are added to fulfil the provided rest schedule.</p>
   * @public
   */
  Schedule?: RouteDriverScheduleInterval[] | undefined;
}

/**
 * <p>Specifies strict exclusion options for the route calculation. This setting mandates that the router will avoid any routes that include the specified options, rather than merely attempting to minimize them.</p>
 * @public
 */
export interface RouteExclusionOptions {
  /**
   * <p>List of countries to be avoided defined by two-letter or three-letter country codes.</p>
   * @public
   */
  Countries: string[] | undefined;
}

/**
 * <p>Origin related options.</p>
 * @public
 */
export interface RouteOriginOptions {
  /**
   * <p>Avoids actions for the provided distance. This is typically to consider for users in moving vehicles who may not have sufficient time to make an action at an origin or a destination.</p>
   * @public
   */
  AvoidActionsForDistance?: number | undefined;

  /**
   * <p>Avoid U-turns for calculation on highways and motorways.</p>
   * @public
   */
  AvoidUTurns?: boolean | undefined;

  /**
   * <p>GPS Heading at the position.</p>
   * @public
   */
  Heading?: number | undefined;

  /**
   * <p>Options to configure matching the provided position to the road network.</p>
   * @public
   */
  Matching?: RouteMatchingOptions | undefined;

  /**
   * <p>Options to configure matching the provided position to a side of the street.</p>
   * @public
   */
  SideOfStreet?: RouteSideOfStreetOptions | undefined;
}

/**
 * <p>Type of the emission.</p> <p> <b>Valid values</b>: <code>Euro1, Euro2, Euro3, Euro4, Euro5, Euro6, EuroEev</code> </p>
 * @public
 */
export interface RouteEmissionType {
  /**
   * <p>The CO 2 emission classes.</p>
   * @public
   */
  Co2EmissionClass?: string | undefined;

  /**
   * <p>Type of the emission.</p> <p> <b>Valid values</b>: <code>Euro1, Euro2, Euro3, Euro4, Euro5, Euro6, EuroEev</code> </p>
   * @public
   */
  Type: string | undefined;
}

/**
 * <p>Options related to Tolls on a route.</p>
 * @public
 */
export interface RouteTollOptions {
  /**
   * <p>Specifies if the user has valid transponder with access to all toll systems. This impacts toll calculation, and if true the price with transponders is used.</p>
   * @public
   */
  AllTransponders?: boolean | undefined;

  /**
   * <p>Specifies if the user has valid vignettes with access for all toll roads. If a user has a vignette for a toll road, then toll cost for that road is omitted since no further payment is necessary.</p>
   * @public
   */
  AllVignettes?: boolean | undefined;

  /**
   * <p>Currency code corresponding to the price. This is the same as Currency specified in the request.</p>
   * @public
   */
  Currency?: string | undefined;

  /**
   * <p>Emission type of the vehicle for toll cost calculation.</p> <p> <b>Valid values</b>: <code>Euro1, Euro2, Euro3, Euro4, Euro5, Euro6, EuroEev</code> </p>
   * @public
   */
  EmissionType?: RouteEmissionType | undefined;

  /**
   * <p>Vehicle category for toll cost calculation.</p>
   * @public
   */
  VehicleCategory?: RouteTollVehicleCategory | undefined;
}

/**
 * <p>Traffic options for the route.</p>
 * @public
 */
export interface RouteTrafficOptions {
  /**
   * <p>Duration for which flow traffic is considered valid. For this period, the flow traffic is used over historical traffic data. Flow traffic refers to congestion, which changes very quickly. Duration in seconds for which flow traffic event would be considered valid. While flow traffic event is valid it will be used over the historical traffic data. </p>
   * @public
   */
  FlowEventThresholdOverride?: number | undefined;

  /**
   * <p>Specifies how traffic data should be used when calculating routes.</p> <p>Default Value: <code>UseTrafficData</code> </p> <note> <p>Traffic data usage depends on the time parameters in your route request:</p> <ul> <li> <p>When <code>Usage</code> is set to <code>UseTrafficData</code>:</p> <ul> <li> <p>If <code>DepartNow</code> is set to <code>true</code>, or if you specify <code>DepartureTime</code> or <code>ArrivalTime</code>, then all traffic data is considered (including live traffic and closures).</p> </li> <li> <p>If <code>DepartNow</code>, <code>DepartureTime</code>, and <code>ArrivalTime</code> are all unspecified, then only long-term closures are considered, regardless of this setting.</p> </li> </ul> </li> <li> <p>When <code>Usage</code> is set to <code>IgnoreTrafficData</code>, then all traffic data is ignored regardless of the time parameters in your route request.</p> </li> </ul> </note>
   * @public
   */
  Usage?: TrafficUsage | undefined;
}

/**
 * <p>License plate information of the vehicle. Currently, only the last character is used where license plate based controlled access is enforced.</p>
 * @public
 */
export interface RouteVehicleLicensePlate {
  /**
   * <p>The last character of the License Plate.</p>
   * @public
   */
  LastCharacter?: string | undefined;
}

/**
 * <p> Travel mode options when the provided travel mode is <code>Car</code>. For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers, <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions support only <code>LicensePlate</code> options. </p>
 * @public
 */
export interface RouteCarOptions {
  /**
   * <p> Engine type of the vehicle. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  EngineType?: RouteEngineType | undefined;

  /**
   * <p>The vehicle License Plate.</p>
   * @public
   */
  LicensePlate?: RouteVehicleLicensePlate | undefined;

  /**
   * <p> Maximum speed specified. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p> The number of occupants in the vehicle. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p> <p>Default value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * <p>Options for the pedestrian leg of the intermodal route.</p>
 * @public
 */
export interface RouteIntermodalPedestrianOptions {
  /**
   * <p>Maximum walking distance allowed.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  MaxDistance?: number | undefined;

  /**
   * <p>Walking speed.</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  Speed?: number | undefined;
}

/**
 * <p>Options for the rental leg of the intermodal route.</p>
 * @public
 */
export interface RouteIntermodalRentalOptions {
  /**
   * <p>Allowed rental transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with <code>ExcludedModes</code>.</p>
   * @public
   */
  AllowedModes?: RouteRentalMode[] | undefined;

  /**
   * <p>Specifies the portion of the route for which this leg type is enabled. By default, the leg type is enabled for all legs. Valid values:</p> <ul> <li> <p> <code>FirstLeg</code> - Enable this leg type for the first non-pedestrian leg of the route.</p> </li> <li> <p> <code>LastLeg</code> - Enable this leg type for the last non-pedestrian leg of the route.</p> </li> <li> <p> <code>EntireRoute</code> - Enable this leg type for the entire route.</p> </li> <li> <p> <code>None</code> - Disable this leg type entirely.</p> </li> </ul>
   * @public
   */
  EnabledFor?: RouteIntermodalEnabledLegs[] | undefined;

  /**
   * <p>Excluded rental transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with <code>AllowedModes</code>.</p>
   * @public
   */
  ExcludedModes?: RouteRentalMode[] | undefined;
}

/**
 * <p>Options for the taxi leg of the intermodal route.</p>
 * @public
 */
export interface RouteIntermodalTaxiOptions {
  /**
   * <p>Allowed taxi transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with <code>ExcludedModes</code>.</p>
   * @public
   */
  AllowedModes?: RouteTaxiMode[] | undefined;

  /**
   * <p>Specifies the portion of the route for which this leg type is enabled. By default, the leg type is enabled for all legs. Valid values:</p> <ul> <li> <p> <code>FirstLeg</code> - Enable this leg type for the first non-pedestrian leg of the route.</p> </li> <li> <p> <code>LastLeg</code> - Enable this leg type for the last non-pedestrian leg of the route.</p> </li> <li> <p> <code>EntireRoute</code> - Enable this leg type for the entire route.</p> </li> <li> <p> <code>None</code> - Disable this leg type entirely.</p> </li> </ul>
   * @public
   */
  EnabledFor?: RouteIntermodalEnabledLegs[] | undefined;

  /**
   * <p>Excluded taxi transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with <code>AllowedModes</code>.</p>
   * @public
   */
  ExcludedModes?: RouteTaxiMode[] | undefined;
}

/**
 * <p>Options for the transit leg of the intermodal route.</p>
 * @public
 */
export interface RouteIntermodalTransitOptions {
  /**
   * <p>Allowed transit transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with <code>ExcludedModes</code>.</p>
   * @public
   */
  AllowedModes?: RouteTransitMode[] | undefined;

  /**
   * <p>Specifies the portion of the route for which this leg type is enabled. By default, the leg type is enabled for all legs. Valid values:</p> <ul> <li> <p> <code>FirstLeg</code> - Enable this leg type for the first non-pedestrian leg of the route.</p> </li> <li> <p> <code>LastLeg</code> - Enable this leg type for the last non-pedestrian leg of the route.</p> </li> <li> <p> <code>EntireRoute</code> - Enable this leg type for the entire route.</p> </li> <li> <p> <code>None</code> - Disable this leg type entirely.</p> </li> </ul>
   * @public
   */
  EnabledFor?: RouteIntermodalEnabledLegs[] | undefined;

  /**
   * <p>Excluded transit transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with <code>AllowedModes</code>.</p>
   * @public
   */
  ExcludedModes?: RouteTransitMode[] | undefined;
}

/**
 * <p>Options for the vehicle leg of the intermodal route.</p>
 * @public
 */
export interface RouteIntermodalVehicleOptions {
  /**
   * <p>Allowed vehicle transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with <code>ExcludedModes</code>.</p>
   * @public
   */
  AllowedModes?: RouteVehicleMode[] | undefined;

  /**
   * <p>Specifies the portion of the route for which this leg type is enabled. By default, the leg type is enabled for all legs. Valid values:</p> <ul> <li> <p> <code>FirstLeg</code> - Enable this leg type for the first non-pedestrian leg of the route.</p> </li> <li> <p> <code>LastLeg</code> - Enable this leg type for the last non-pedestrian leg of the route.</p> </li> <li> <p> <code>EntireRoute</code> - Enable this leg type for the entire route.</p> </li> <li> <p> <code>None</code> - Disable this leg type entirely.</p> </li> </ul>
   * @public
   */
  EnabledFor?: RouteIntermodalEnabledLegs[] | undefined;

  /**
   * <p>Excluded vehicle transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with <code>AllowedModes</code>.</p>
   * @public
   */
  ExcludedModes?: RouteVehicleMode[] | undefined;
}

/**
 * <p>Options related to intermodal routing.</p> <note> <p>Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers.</p> </note>
 * @public
 */
export interface RouteIntermodalOptions {
  /**
   * <p>Accessibility attributes to consider when calculating the route.</p>
   * @public
   */
  AccessibilityAttributes?: RouteAccessibilityAttribute[] | undefined;

  /**
   * <p>Maximum number of transfers allowed when calculating the route.</p>
   * @public
   */
  MaxTransfers?: number | undefined;

  /**
   * <p>Options for the pedestrian leg of the intermodal route.</p>
   * @public
   */
  Pedestrian?: RouteIntermodalPedestrianOptions | undefined;

  /**
   * <p>Options for the rental leg of the intermodal route.</p>
   * @public
   */
  Rental?: RouteIntermodalRentalOptions | undefined;

  /**
   * <p>Options for the taxi leg of the intermodal route.</p>
   * @public
   */
  Taxi?: RouteIntermodalTaxiOptions | undefined;

  /**
   * <p>Options for the transit leg of the intermodal route.</p>
   * @public
   */
  Transit?: RouteIntermodalTransitOptions | undefined;

  /**
   * <p>Options for the vehicle leg of the intermodal route.</p>
   * @public
   */
  Vehicle?: RouteIntermodalVehicleOptions | undefined;
}

/**
 * <p> Options related to the pedestrian. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
 * @public
 */
export interface RoutePedestrianOptions {
  /**
   * <p>Walking speed in Kilometers per hour.</p>
   * @public
   */
  Speed?: number | undefined;
}

/**
 * <p> Travel mode options when the provided travel mode is <code>Scooter</code>. For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers, <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions support only <code>LicensePlate</code> options. </p>
 * @public
 */
export interface RouteScooterOptions {
  /**
   * <p> Engine type of the vehicle. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  EngineType?: RouteEngineType | undefined;

  /**
   * <p>The vehicle License Plate.</p>
   * @public
   */
  LicensePlate?: RouteVehicleLicensePlate | undefined;

  /**
   * <p> Maximum speed Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p> The number of occupants in the vehicle. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p> <p>Default value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * <p>Options for the pedestrian leg of the transit route.</p>
 * @public
 */
export interface RouteTransitPedestrianOptions {
  /**
   * <p>Maximum walking distance allowed.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  MaxDistance?: number | undefined;

  /**
   * <p>Walking speed.</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  Speed?: number | undefined;
}

/**
 * <p>Options related to transit routing.</p> <note> <p>Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers.</p> </note>
 * @public
 */
export interface RouteTransitOptions {
  /**
   * <p>Accessibility attributes to consider when calculating the route.</p>
   * @public
   */
  AccessibilityAttributes?: RouteAccessibilityAttribute[] | undefined;

  /**
   * <p>Allowed transit transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with <code>ExcludedModes</code>.</p>
   * @public
   */
  AllowedModes?: RouteTransitMode[] | undefined;

  /**
   * <p>Excluded transit transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with <code>AllowedModes</code>.</p>
   * @public
   */
  ExcludedModes?: RouteTransitMode[] | undefined;

  /**
   * <p>Maximum number of transfers allowed when calculating the route.</p>
   * @public
   */
  MaxTransfers?: number | undefined;

  /**
   * <p>Options for the pedestrian leg of the transit route.</p>
   * @public
   */
  Pedestrian?: RouteTransitPedestrianOptions | undefined;
}

/**
 * <p>Trailer options corresponding to the vehicle.</p>
 * @public
 */
export interface RouteTrailerOptions {
  /**
   * <p>Total number of axles of the vehicle.</p>
   * @public
   */
  AxleCount?: number | undefined;

  /**
   * <p>Number of trailers attached to the vehicle.</p> <p>Default value: <code>0</code> </p>
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * <p> Travel mode options when the provided travel mode is <code>Truck</code>. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
 * @public
 */
export interface RouteTruckOptions {
  /**
   * <p>Total number of axles of the vehicle.</p>
   * @public
   */
  AxleCount?: number | undefined;

  /**
   * <p>Engine type of the vehicle.</p>
   * @public
   */
  EngineType?: RouteEngineType | undefined;

  /**
   * <p>Gross weight of the vehicle including trailers, and goods at capacity.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  GrossWeight?: number | undefined;

  /**
   * <p>List of Hazardous cargo contained in the vehicle.</p>
   * @public
   */
  HazardousCargos?: RouteHazardousCargoType[] | undefined;

  /**
   * <p>Height of the vehicle.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  Height?: number | undefined;

  /**
   * <p>Height of the vehicle above its first axle.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  HeightAboveFirstAxle?: number | undefined;

  /**
   * <p>Kingpin to rear axle length of the vehicle.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  KpraLength?: number | undefined;

  /**
   * <p>Length of the vehicle.</p> <p> <b>Unit</b>: <code>c</code> </p>
   * @public
   */
  Length?: number | undefined;

  /**
   * <p>The vehicle License Plate.</p>
   * @public
   */
  LicensePlate?: RouteVehicleLicensePlate | undefined;

  /**
   * <p>Maximum speed</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;

  /**
   * <p>Payload capacity of the vehicle and trailers attached.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  PayloadCapacity?: number | undefined;

  /**
   * <p>Number of tires on the vehicle.</p>
   * @public
   */
  TireCount?: number | undefined;

  /**
   * <p>Trailer options corresponding to the vehicle.</p>
   * @public
   */
  Trailer?: RouteTrailerOptions | undefined;

  /**
   * <p>The type of truck: <code>LightTruck</code> for smaller delivery vehicles, <code> StraightTruck</code> for rigid body trucks, or <code>Tractor</code> for tractor-trailer combinations.</p>
   * @public
   */
  TruckType?: RouteTruckType | undefined;

  /**
   * <p>The tunnel restriction code.</p> <p>Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.</p> <ul> <li> <p> <i>Tunnel Category B</i> </p> <ul> <li> <p> <i>Risk Level</i>: Limited risk</p> </li> <li> <p> <i>Restrictions</i>: Few restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category C</i> </p> <ul> <li> <p> <i>Risk Level</i>: Medium risk</p> </li> <li> <p> <i>Restrictions</i>: Some restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category D</i> </p> <ul> <li> <p> <i>Risk Level</i>: High risk</p> </li> <li> <p> <i>Restrictions</i>: Many restrictions occur</p> </li> </ul> </li> <li> <p> <i>Tunnel Category E</i> </p> <ul> <li> <p> <i>Risk Level</i>: Very high risk</p> </li> <li> <p> <i>Restrictions</i>: Restricted tunnel</p> </li> </ul> </li> </ul>
   * @public
   */
  TunnelRestrictionCode?: string | undefined;

  /**
   * <p>Heaviest weight per axle irrespective of the axle type or the axle group. Meant for usage in countries where the differences in axle types or axle groups are not distinguished.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  WeightPerAxle?: number | undefined;

  /**
   * <p>Specifies the total weight for the specified axle group. Meant for usage in countries that have different regulations based on the axle group type.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  WeightPerAxleGroup?: WeightPerAxleGroup | undefined;

  /**
   * <p>Width of the vehicle.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  Width?: number | undefined;
}

/**
 * <p>Travel mode related options for the provided travel mode.</p>
 * @public
 */
export interface RouteTravelModeOptions {
  /**
   * <p>Travel mode options when the provided travel mode is <code>Car</code>.</p>
   * @public
   */
  Car?: RouteCarOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is <code>Pedestrian</code>.</p>
   * @public
   */
  Pedestrian?: RoutePedestrianOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is <code>Scooter</code>. </p> <note> <p>When travel mode is set to <code>Scooter</code>, then the avoidance option <code>ControlledAccessHighways</code> defaults to <code>true</code>.</p> </note>
   * @public
   */
  Scooter?: RouteScooterOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is <code>Truck</code>.</p>
   * @public
   */
  Truck?: RouteTruckOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is <code>Intermodal</code>.</p> <note> <p>Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers.</p> </note>
   * @public
   */
  Intermodal?: RouteIntermodalOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is <code>Transit</code>.</p> <note> <p>Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers.</p> </note>
   * @public
   */
  Transit?: RouteTransitOptions | undefined;
}

/**
 * <p>Waypoint between the Origin and Destination.</p>
 * @public
 */
export interface RouteWaypoint {
  /**
   * <p> Avoids actions for the provided distance. This is typically to consider for users in moving vehicles who may not have sufficient time to make an action at an origin or a destination. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  AvoidActionsForDistance?: number | undefined;

  /**
   * <p> Avoid U-turns for calculation on highways and motorways. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  AvoidUTurns?: boolean | undefined;

  /**
   * <p> GPS Heading at the position. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Heading?: number | undefined;

  /**
   * <p> Options to configure matching the provided position to the road network. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Matching?: RouteMatchingOptions | undefined;

  /**
   * <p> If the waypoint should not be treated as a stop. If yes, the waypoint is passed through and doesn't split the route into different legs. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  PassThrough?: boolean | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p> Options to configure matching the provided position to a side of the street. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  SideOfStreet?: RouteSideOfStreetOptions | undefined;

  /**
   * <p> Duration of the stop. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  StopDuration?: number | undefined;
}

/**
 * @public
 */
export interface CalculateRoutesRequest {
  /**
   * <p> Features that are allowed while calculating a route. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Allow?: RouteAllowOptions | undefined;

  /**
   * <p> Time of arrival at the destination. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  ArrivalTime?: string | undefined;

  /**
   * <p> Features that are avoided while calculating a route. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, it violates the avoidance and the returned response produces a notice for the violation. For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers, <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions support only <code>ControlledAccessHighways</code>, <code>Ferries</code>, and <code>TollRoads</code> </p>
   * @public
   */
  Avoid?: RouteAvoidanceOptions | undefined;

  /**
   * <p>Uses the current time as the time of departure.</p>
   * @public
   */
  DepartNow?: boolean | undefined;

  /**
   * <p>Time of departure from the origin.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  DepartureTime?: string | undefined;

  /**
   * <p>The final position for the route. In the World Geodetic System (WGS 84) format: <code>[longitude, latitude]</code>.</p>
   * @public
   */
  Destination: number[] | undefined;

  /**
   * <p> Destination related options. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  DestinationOptions?: RouteDestinationOptions | undefined;

  /**
   * <p> Driver related options. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Driver?: RouteDriverOptions | undefined;

  /**
   * <p> Features to be strictly excluded while calculating the route. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Exclude?: RouteExclusionOptions | undefined;

  /**
   * <p>Measurement system to be used for instructions within steps in the response.</p>
   * @public
   */
  InstructionsMeasurementSystem?: MeasurementSystem | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request. </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p> List of languages for instructions within steps in the response. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p> <note> <p>Instructions in the requested language are returned only if they are available.</p> </note>
   * @public
   */
  Languages?: string[] | undefined;

  /**
   * <p> A list of optional additional parameters such as timezone that can be requested for each result. For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers, <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions support only <code>PassThroughWaypoints</code>, <code>Summary</code>, and <code>TravelStepInstructions</code> </p> <ul> <li> <p> <code>Elevation</code>: Retrieves the elevation information for each location.</p> </li> <li> <p> <code>Incidents</code>: Provides information on traffic incidents along the route.</p> </li> <li> <p> <code>PassThroughWaypoints</code>: Indicates waypoints that are passed through without stopping.</p> </li> <li> <p> <code>Summary</code>: Returns a summary of the route, including distance and duration.</p> </li> <li> <p> <code>Tolls</code>: Supplies toll cost information along the route.</p> </li> <li> <p> <code>TravelStepInstructions</code>: Provides step-by-step instructions for travel along the route.</p> </li> <li> <p> <code>TruckRoadTypes</code>: Returns information about road types suitable for trucks.</p> </li> <li> <p> <code>TypicalDuration</code>: Gives typical travel duration based on historical data.</p> </li> <li> <p> <code>Zones</code>: Specifies the time zone information for each waypoint.</p> </li> </ul>
   * @public
   */
  LegAdditionalFeatures?: RouteLegAdditionalFeature[] | undefined;

  /**
   * <p>Specifies the format of the geometry returned for each leg of the route. You can choose between two different geometry encoding formats.</p> <p> <code>FlexiblePolyline</code>: A compact and precise encoding format for the leg geometry. For more information on the format, see the GitHub repository for <a href="https://github.com/aws-geospatial/polyline">https://github.com/aws-geospatial/polyline</a>.</p> <p> <code>Simple</code>: A less compact encoding, which is easier to decode but may be less precise and result in larger payloads.</p>
   * @public
   */
  LegGeometryFormat?: GeometryFormat | undefined;

  /**
   * <p>Maximum number of alternative routes to be provided in the response, if available. For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers, <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions support only up to 3 alternative routes. </p>
   * @public
   */
  MaxAlternatives?: number | undefined;

  /**
   * <p>Controls the trade-off between achieving the shortest travel time (<code>FastestRoute</code>) and achieving the shortest physical distance ((<code>ShortestRoute</code>) when calculating each route in the matrix.</p> <p>Default value: <code>FastestRoute</code> </p>
   * @public
   */
  OptimizeRoutingFor?: RoutingObjective | undefined;

  /**
   * <p>The start position for the route in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Origin: number[] | undefined;

  /**
   * <p> Specifies how the origin point should be matched to the road network and any routing constraints that apply when the traveler is departing the origin. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  OriginOptions?: RouteOriginOptions | undefined;

  /**
   * <p> A list of optional features such as <code>SpeedLimit</code> that can be requested for a Span. A span is a section of a Leg for which the requested features have the same values. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  SpanAdditionalFeatures?: RouteSpanAdditionalFeature[] | undefined;

  /**
   * <p> Toll related options. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Tolls?: RouteTollOptions | undefined;

  /**
   * <p> Traffic related options. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Traffic?: RouteTrafficOptions | undefined;

  /**
   * <p> Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers, <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions support only <code>Car</code>, <code>Pedestrian</code>, and <code>Scooter</code> values. </p> <p>Default value: <code>Car</code> </p>
   * @public
   */
  TravelMode?: RouteTravelMode | undefined;

  /**
   * <p> Travel mode related options for the provided travel mode. For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers, <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions support only <code>Car</code> and <code>Pedestrian</code> travel mode options. </p>
   * @public
   */
  TravelModeOptions?: RouteTravelModeOptions | undefined;

  /**
   * <p>Type of step returned by the response. <code>Default</code> provides basic steps intended for web based applications. <code>TurnByTurn</code> provides detailed instructions with more granularity intended for a turn based navigation system. For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers, <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions <code>Default</code> does not return any steps. </p>
   * @public
   */
  TravelStepType?: RouteTravelStepType | undefined;

  /**
   * <p> List of waypoints between the Origin and Destination. For <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers, <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions max length is <code>100</code>. </p> <p>Max length: <code>23</code> </p>
   * @public
   */
  Waypoints?: RouteWaypoint[] | undefined;
}

/**
 * <p>Notices are additional information returned that indicate issues that occurred during route calculation.</p>
 * @public
 */
export interface RouteResponseNotice {
  /**
   * <p>Code corresponding to the issue.</p>
   * @public
   */
  Code: RouteResponseNoticeCode | undefined;

  /**
   * <p>Impact corresponding to the issue. While Low impact notices can be safely ignored, High impact notices must be evaluated further to determine the impact.</p>
   * @public
   */
  Impact?: RouteNoticeImpact | undefined;
}

/**
 * <p>Steps of a leg that must be performed after the travel portion of the leg.</p>
 * @public
 */
export interface RouteFerryAfterTravelStep {
  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p> <note> <p>Only available when the TravelStepType is Default.</p> </note>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RouteFerryAfterTravelStepType | undefined;
}

/**
 * <p>Position provided in the request.</p>
 * @public
 */
export interface RouteFerryPlace {
  /**
   * <p>The name of the place.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Position provided in the request.</p>
   * @public
   */
  OriginalPosition?: number[] | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Index of the waypoint in the request.</p>
   * @public
   */
  WaypointIndex?: number | undefined;
}

/**
 * <p>Details corresponding to the arrival for the leg.</p>
 * @public
 */
export interface RouteFerryArrival {
  /**
   * <p>Place details corresponding to the arrival.</p>
   * @public
   */
  Place: RouteFerryPlace | undefined;

  /**
   * <p>The arrival time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * <p>Steps of a leg that must be performed before the travel portion of the leg.</p>
 * @public
 */
export interface RouteFerryBeforeTravelStep {
  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p> <note> <p>Only available when the TravelStepType is Default.</p> </note>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RouteFerryBeforeTravelStepType | undefined;
}

/**
 * <p>Details corresponding to the departure for the leg.</p>
 * @public
 */
export interface RouteFerryDeparture {
  /**
   * <p>Place details corresponding to the departure.</p>
   * @public
   */
  Place: RouteFerryPlace | undefined;

  /**
   * <p>The departure time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * <p>Notices are additional information returned that indicate issues that occurred during route calculation.</p>
 * @public
 */
export interface RouteFerryNotice {
  /**
   * <p>Code corresponding to the issue.</p>
   * @public
   */
  Code: RouteFerryNoticeCode | undefined;

  /**
   * <p>Impact corresponding to the issue. While Low impact notices can be safely ignored, High impact notices must be evaluated further to determine the impact.</p>
   * @public
   */
  Impact?: RouteNoticeImpact | undefined;
}

/**
 * <p>The place where the waypoint is passed through and not treated as a stop.</p>
 * @public
 */
export interface RoutePassThroughPlace {
  /**
   * <p>Position provided in the request.</p>
   * @public
   */
  OriginalPosition?: number[] | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Index of the waypoint in the request.</p>
   * @public
   */
  WaypointIndex?: number | undefined;
}

/**
 * <p>If the waypoint should be treated as a stop. If yes, the route is split up into different legs around the stop.</p>
 * @public
 */
export interface RoutePassThroughWaypoint {
  /**
   * <p>Offset in the leg geometry corresponding to the start of this step.</p>
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * <p>Place details corresponding to the pass-through waypoint.</p>
   * @public
   */
  Place: RoutePassThroughPlace | undefined;
}

/**
 * <p>The localized string.</p>
 * @public
 */
export interface LocalizedString {
  /**
   * <p>A list of BCP 47 compliant language codes for the results to be rendered in. The request uses the regional default as the fallback if the requested language can't be provided.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>The value of the localized string.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Span computed for the requested SpanAdditionalFeatures.</p>
 * @public
 */
export interface RouteFerrySpan {
  /**
   * <p>3 letter Country code corresponding to the Span.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>Distance of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>Duration of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>Offset in the leg geometry corresponding to the start of this span.</p>
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * <p>Names of the ferry span in available languages.</p>
   * @public
   */
  Names?: LocalizedString[] | undefined;

  /**
   * <p>2-3 letter Region code corresponding to the Span. This is either a province or a state.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * <p>Summary including duration and distance for the entire leg.</p>
 * @public
 */
export interface RouteFerryOverviewSummary {
  /**
   * <p>Distance of the entire leg.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Distance: number | undefined;

  /**
   * <p>Duration of the entire leg.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;
}

/**
 * <p>Summarized details for the leg including travel steps only. The Distance for the travel only portion of the journey is the same as the Distance within the Overview summary.</p>
 * @public
 */
export interface RouteFerryTravelOnlySummary {
  /**
   * <p>Total duration in free flowing traffic, which is the best case or shortest duration possible to cover the leg.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;
}

/**
 * <p>Summarized details for the leg including travel steps only. The Distance for the travel only portion of the journey is the same as the Distance within the Overview summary.</p>
 * @public
 */
export interface RouteFerrySummary {
  /**
   * <p>Summarized details for the leg including before travel, travel and after travel steps.</p>
   * @public
   */
  Overview?: RouteFerryOverviewSummary | undefined;

  /**
   * <p>Summarized details for the leg including travel steps only. The Distance for the travel only portion of the journey is in meters</p>
   * @public
   */
  TravelOnly?: RouteFerryTravelOnlySummary | undefined;
}

/**
 * <p>Steps of a leg that must be performed during the travel portion of the leg.</p>
 * @public
 */
export interface RouteFerryTravelStep {
  /**
   * <p>Distance of the step.</p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Offset in the leg geometry corresponding to the start of this step.</p>
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p> <note> <p>Only available when the TravelStepType is Default.</p> </note>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RouteFerryTravelStepType | undefined;
}

/**
 * <p> FerryLegDetails is populated when the Leg type is Ferry, and provides additional information that is specific to ferry travel. </p>
 * @public
 */
export interface RouteFerryLegDetails {
  /**
   * <p>Steps of a leg that must be performed after the travel portion of the leg.</p>
   * @public
   */
  AfterTravelSteps: RouteFerryAfterTravelStep[] | undefined;

  /**
   * <p>Details corresponding to the arrival for the leg.</p>
   * @public
   */
  Arrival: RouteFerryArrival | undefined;

  /**
   * <p>Steps of a leg that must be performed before the travel portion of the leg.</p>
   * @public
   */
  BeforeTravelSteps: RouteFerryBeforeTravelStep[] | undefined;

  /**
   * <p>Details corresponding to the departure for the leg.</p>
   * @public
   */
  Departure: RouteFerryDeparture | undefined;

  /**
   * <p>Notices are additional information returned that indicate issues that occurred during route calculation.</p>
   * @public
   */
  Notices: RouteFerryNotice[] | undefined;

  /**
   * <p>Waypoints that were passed through during the leg. This includes the waypoints that were configured with the PassThrough option.</p>
   * @public
   */
  PassThroughWaypoints: RoutePassThroughWaypoint[] | undefined;

  /**
   * <p>Route name of the ferry line.</p>
   * @public
   */
  RouteName?: string | undefined;

  /**
   * <p>Spans that were computed for the requested SpanAdditionalFeatures.</p>
   * @public
   */
  Spans: RouteFerrySpan[] | undefined;

  /**
   * <p>Summarized details of the leg.</p>
   * @public
   */
  Summary?: RouteFerrySummary | undefined;

  /**
   * <p>Steps of a leg that must be performed before the travel portion of the leg.</p>
   * @public
   */
  TravelSteps: RouteFerryTravelStep[] | undefined;
}

/**
 * <p>The returned Route leg geometry.</p>
 * @public
 */
export interface RouteLegGeometry {
  /**
   * <p>An ordered list of positions used to plot a route on a map.</p> <note> <p>LineString and Polyline are mutually exclusive properties.</p> </note>
   * @public
   */
  LineString?: number[][] | undefined;

  /**
   * <p>An ordered list of positions used to plot a route on a map in a lossy compression format.</p> <note> <p>LineString and Polyline are mutually exclusive properties.</p> </note>
   * @public
   */
  Polyline?: string | undefined;
}

/**
 * <p>Steps of a leg that must be performed after the travel portion of the leg.</p>
 * @public
 */
export interface RoutePedestrianAfterTravelStep {
  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p> <note> <p>Only available when the TravelStepType is Default.</p> </note>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RoutePedestrianAfterTravelStepType | undefined;
}

/**
 * <p>Details about the availability of accessibility features.</p>
 * @public
 */
export interface RouteAccessibilityAvailabilityDetails {
  /**
   * <p>Wheelchair accessibility status.</p>
   * @public
   */
  Wheelchair?: RouteAccessibilityAvailability | undefined;
}

/**
 * <p>Details of the access point.</p>
 * @public
 */
export interface RouteAccessPointDetails {
  /**
   * <p>Wheelchair accessibility information for the access point.</p>
   * @public
   */
  Accessibility?: RouteAccessibilityAvailabilityDetails | undefined;
}

/**
 * <p>Details about the station.</p>
 * @public
 */
export interface RouteStationDetails {
  /**
   * <p>Wheelchair accessibility information for the station.</p>
   * @public
   */
  Accessibility?: RouteAccessibilityAvailabilityDetails | undefined;

  /**
   * <p>Platform name or number.</p>
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * <p>Short text or a number that identifies the station.</p>
   * @public
   */
  ShortName?: string | undefined;
}

/**
 * <p>Place details corresponding to the arrival or departure.</p>
 * @public
 */
export interface RoutePedestrianPlace {
  /**
   * <p>Details of the access point.</p>
   * @public
   */
  AccessPointDetails?: RouteAccessPointDetails | undefined;

  /**
   * <p>The name of the place.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Position provided in the request.</p>
   * @public
   */
  OriginalPosition?: number[] | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Options to configure matching the provided position to a side of the street.</p>
   * @public
   */
  SideOfStreet?: RouteSideOfStreet | undefined;

  /**
   * <p>Details about the station.</p>
   * @public
   */
  StationDetails?: RouteStationDetails | undefined;

  /**
   * <p>The type of the place.</p>
   * @public
   */
  Type?: RoutePedestrianPlaceType | undefined;

  /**
   * <p>Index of the waypoint in the request.</p>
   * @public
   */
  WaypointIndex?: number | undefined;
}

/**
 * <p>Details corresponding to the arrival for a leg.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
 * @public
 */
export interface RoutePedestrianArrival {
  /**
   * <p>Place details corresponding to the arrival.</p>
   * @public
   */
  Place: RoutePedestrianPlace | undefined;

  /**
   * <p>The arrival time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * <p>Details corresponding to the departure for a leg.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
 * @public
 */
export interface RoutePedestrianDeparture {
  /**
   * <p>Place details corresponding to the departure.</p>
   * @public
   */
  Place: RoutePedestrianPlace | undefined;

  /**
   * <p>The departure time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * <p>Notices are additional information returned that indicate issues that occurred during route calculation.</p>
 * @public
 */
export interface RoutePedestrianNotice {
  /**
   * <p>Code corresponding to the issue.</p>
   * @public
   */
  Code: RoutePedestrianNoticeCode | undefined;

  /**
   * <p>Impact corresponding to the issue. While Low impact notices can be safely ignored, High impact notices must be evaluated further to determine the impact.</p>
   * @public
   */
  Impact?: RouteNoticeImpact | undefined;
}

/**
 * <p>Details about the dynamic speed.</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
 * @public
 */
export interface RouteSpanDynamicSpeedDetails {
  /**
   * <p>Estimated speed while traversing the span without traffic congestion.</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  BestCaseSpeed?: number | undefined;

  /**
   * <p>Estimated time to turn from this span into the next. </p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  TurnDuration?: number | undefined;

  /**
   * <p>Estimated speed while traversing the span under typical traffic congestion.</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  TypicalSpeed?: number | undefined;
}

/**
 * <p>The route number.</p>
 * @public
 */
export interface RouteNumber {
  /**
   * <p>Directional identifier of the route.</p>
   * @public
   */
  Direction?: RouteDirection | undefined;

  /**
   * <p>List of languages for instructions corresponding to the route number.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>The route number.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Details about the speed limit corresponding to the span.</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
 * @public
 */
export interface RouteSpanSpeedLimitDetails {
  /**
   * <p>Maximum speed.</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>If the span doesn't have a speed limit like the Autobahn.</p>
   * @public
   */
  Unlimited?: boolean | undefined;
}

/**
 * <p>Span computed for the requested SpanAdditionalFeatures.</p>
 * @public
 */
export interface RoutePedestrianSpan {
  /**
   * <p>Duration of the computed span without traffic congestion.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  BestCaseDuration?: number | undefined;

  /**
   * <p>3 letter Country code corresponding to the Span.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>Distance of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.</p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>Duration of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>Dynamic speed details corresponding to the span.</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  DynamicSpeed?: RouteSpanDynamicSpeedDetails | undefined;

  /**
   * <p>A numerical value indicating the functional classification of the road segment corresponding to the span.</p> <p>Classification values are part of the hierarchical network that helps determine a logical and efficient route, and have the following definitions:</p> <ol> <li> <p>Roads that allow for high volume, maximum speed traffic movement between and through major metropolitan areas.</p> </li> <li> <p>Roads that are used to channel traffic to functional class 1 roads for travel between and through cities in the shortest amount of time.</p> </li> <li> <p>Roads that intersect functional class 2 roads and provide a high volume of traffic movement at a lower level of mobility than functional class 2 roads.</p> </li> <li> <p>Roads that provide for a high volume of traffic movement at moderate speeds between neighborhoods.</p> </li> <li> <p>Roads with volume and traffic movement below the level of any other functional class.</p> </li> </ol>
   * @public
   */
  FunctionalClassification?: number | undefined;

  /**
   * <p>Offset in the leg geometry corresponding to the start of this span.</p>
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * <p>Incidents corresponding to the span. These index into the Incidents in the parent Leg.</p>
   * @public
   */
  Incidents?: number[] | undefined;

  /**
   * <p>Provides an array of names of the pedestrian span in available languages.</p>
   * @public
   */
  Names?: LocalizedString[] | undefined;

  /**
   * <p>Access attributes for a pedestrian corresponding to the span.</p>
   * @public
   */
  PedestrianAccess?: RouteSpanPedestrianAccessAttribute[] | undefined;

  /**
   * <p>2-3 letter Region code corresponding to the Span. This is either a province or a state.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>Attributes for the road segment corresponding to the span. </p>
   * @public
   */
  RoadAttributes?: RouteSpanRoadAttribute[] | undefined;

  /**
   * <p>Designated route name or number corresponding to the span.</p>
   * @public
   */
  RouteNumbers?: RouteNumber[] | undefined;

  /**
   * <p>Speed limit details corresponding to the span.</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  SpeedLimit?: RouteSpanSpeedLimitDetails | undefined;

  /**
   * <p>Duration of the computed span under typical traffic congestion.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  TypicalDuration?: number | undefined;
}

/**
 * <p>Summary including duration and distance for the entire leg.</p>
 * @public
 */
export interface RoutePedestrianOverviewSummary {
  /**
   * <p>Distance of the entire leg.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Distance: number | undefined;

  /**
   * <p>Duration of the entire leg.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;
}

/**
 * <p>Summarized details for the leg including travel steps.</p>
 * @public
 */
export interface RoutePedestrianTravelOnlySummary {
  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;
}

/**
 * <p>Summarized details for the leg including before travel, travel and after travel steps.</p>
 * @public
 */
export interface RoutePedestrianSummary {
  /**
   * <p>Summarized details for the leg including before travel, travel and after travel steps.</p>
   * @public
   */
  Overview?: RoutePedestrianOverviewSummary | undefined;

  /**
   * <p>Summarized details for the leg including travel steps only. The Distance for the travel only portion of the journey is in meters</p>
   * @public
   */
  TravelOnly?: RoutePedestrianTravelOnlySummary | undefined;
}

/**
 * <p>Details related to the continue step.</p>
 * @public
 */
export interface RouteContinueStepDetails {
  /**
   * <p>Name of the intersection, if applicable to the step.</p>
   * @public
   */
  Intersection: LocalizedString[] | undefined;
}

/**
 * <p>The road on the route.</p>
 * @public
 */
export interface RouteRoad {
  /**
   * <p>Name of the road (localized).</p>
   * @public
   */
  RoadName: LocalizedString[] | undefined;

  /**
   * <p>Route number of the road.</p>
   * @public
   */
  RouteNumber: RouteNumber[] | undefined;

  /**
   * <p>Names of destinations that can be reached when traveling on the road.</p>
   * @public
   */
  Towards: LocalizedString[] | undefined;

  /**
   * <p>The type of road.</p>
   * @public
   */
  Type?: RouteRoadType | undefined;
}

/**
 * <p>Details that are specific to a Keep step.</p>
 * @public
 */
export interface RouteKeepStepDetails {
  /**
   * <p>Name of the intersection, if applicable to the step.</p>
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * <p>Steering direction for the step.</p>
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * <p>Angle of the turn.</p>
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * <p>Intensity of the turn.</p>
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * <p>Details about the roundabout leg.</p>
 * @public
 */
export interface RouteRoundaboutEnterStepDetails {
  /**
   * <p>Name of the intersection, if applicable to the step.</p>
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * <p>Steering direction for the step.</p>
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * <p>Angle of the turn.</p>
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * <p>Intensity of the turn.</p>
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * <p>Details about the roundabout step.</p>
 * @public
 */
export interface RouteRoundaboutExitStepDetails {
  /**
   * <p>Name of the intersection, if applicable to the step.</p>
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * <p>Exit to be taken.</p>
   * @public
   */
  RelativeExit?: number | undefined;

  /**
   * <p>Angle of the roundabout.</p>
   * @public
   */
  RoundaboutAngle?: number | undefined;

  /**
   * <p>Steering direction for the step.</p>
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;
}

/**
 * <p>Details about the step.</p>
 * @public
 */
export interface RouteRoundaboutPassStepDetails {
  /**
   * <p>Name of the intersection, if applicable to the step.</p>
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * <p>Steering direction for the step.</p>
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * <p>Angle of the turn.</p>
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * <p>Intensity of the turn.</p>
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * <p>Labels presented on the sign post.</p>
 * @public
 */
export interface RouteSignpostLabel {
  /**
   * <p>Route number of the road.</p>
   * @public
   */
  RouteNumber?: RouteNumber | undefined;

  /**
   * <p>The Signpost text.</p>
   * @public
   */
  Text?: LocalizedString | undefined;
}

/**
 * <p>Sign post information of the action, applicable only for TurnByTurn steps. See RouteSignpost for details of sub-attributes.</p>
 * @public
 */
export interface RouteSignpost {
  /**
   * <p>Labels present on the sign post.</p>
   * @public
   */
  Labels: RouteSignpostLabel[] | undefined;
}

/**
 * <p>Details related to the turn step.</p>
 * @public
 */
export interface RouteTurnStepDetails {
  /**
   * <p>Name of the intersection, if applicable to the step.</p>
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * <p>Steering direction for the step.</p>
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * <p>Angle of the turn.</p>
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * <p>Intensity of the turn.</p>
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * <p>Steps of a leg that must be performed during the travel portion of the leg.</p>
 * @public
 */
export interface RoutePedestrianTravelStep {
  /**
   * <p>Details related to the continue step.</p>
   * @public
   */
  ContinueStepDetails?: RouteContinueStepDetails | undefined;

  /**
   * <p>Details of the current road. See RouteRoad for details of sub-attributes.</p>
   * @public
   */
  CurrentRoad?: RouteRoad | undefined;

  /**
   * <p>Distance of the step.</p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Exit number of the road exit, if applicable.</p>
   * @public
   */
  ExitNumber?: LocalizedString[] | undefined;

  /**
   * <p>Offset in the leg geometry corresponding to the start of this step.</p>
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p> <note> <p>Only available when the TravelStepType is Default.</p> </note>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Details that are specific to a Keep step.</p>
   * @public
   */
  KeepStepDetails?: RouteKeepStepDetails | undefined;

  /**
   * <p>Details of the next road. See RouteRoad for details of sub-attributes.</p>
   * @public
   */
  NextRoad?: RouteRoad | undefined;

  /**
   * <p>Details that are specific to a Roundabout Enter step.</p>
   * @public
   */
  RoundaboutEnterStepDetails?: RouteRoundaboutEnterStepDetails | undefined;

  /**
   * <p>Details that are specific to a Roundabout Exit step.</p>
   * @public
   */
  RoundaboutExitStepDetails?: RouteRoundaboutExitStepDetails | undefined;

  /**
   * <p>Details that are specific to a Roundabout Pass step.</p>
   * @public
   */
  RoundaboutPassStepDetails?: RouteRoundaboutPassStepDetails | undefined;

  /**
   * <p>Sign post information of the action, applicable only for TurnByTurn steps. See RouteSignpost for details of sub-attributes.</p>
   * @public
   */
  Signpost?: RouteSignpost | undefined;

  /**
   * <p>Details that are specific to a turn step.</p>
   * @public
   */
  TurnStepDetails?: RouteTurnStepDetails | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RoutePedestrianTravelStepType | undefined;
}

/**
 * <p>Details that are specific to a pedestrian leg.</p>
 * @public
 */
export interface RoutePedestrianLegDetails {
  /**
   * <p>Steps of a leg that must be performed after the travel portion of the leg.</p>
   * @public
   */
  AfterTravelSteps: RoutePedestrianAfterTravelStep[] | undefined;

  /**
   * <p>Details corresponding to the arrival for the leg.</p>
   * @public
   */
  Arrival: RoutePedestrianArrival | undefined;

  /**
   * <p>Details corresponding to the departure for the leg.</p>
   * @public
   */
  Departure: RoutePedestrianDeparture | undefined;

  /**
   * <p> Notices are additional information returned that indicate issues that occurred during route calculation. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Notices: RoutePedestrianNotice[] | undefined;

  /**
   * <p>Waypoints that were passed through during the leg. This includes the waypoints that were configured with the PassThrough option.</p>
   * @public
   */
  PassThroughWaypoints: RoutePassThroughWaypoint[] | undefined;

  /**
   * <p> Spans that were computed for the requested SpanAdditionalFeatures. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Spans: RoutePedestrianSpan[] | undefined;

  /**
   * <p>Summarized details of the leg.</p>
   * @public
   */
  Summary?: RoutePedestrianSummary | undefined;

  /**
   * <p>Steps of a leg that must be performed before the travel portion of the leg.</p>
   * @public
   */
  TravelSteps: RoutePedestrianTravelStep[] | undefined;
}

/**
 * <p>A step that must be performed after the travel portion of the leg.</p>
 * @public
 */
export interface RouteRentalAfterTravelStep {
  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RouteRentalAfterTravelStepType | undefined;
}

/**
 * <p>Details about the rental agency.</p>
 * @public
 */
export interface RouteRentalAgency {
  /**
   * <p>Name of the agency.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>URL to the agency's website.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Place details corresponding to the arrival or departure.</p>
 * @public
 */
export interface RouteRentalPlace {
  /**
   * <p>Details of the access point.</p>
   * @public
   */
  AccessPointDetails?: RouteAccessPointDetails | undefined;

  /**
   * <p>The name of the place.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Position provided in the request.</p>
   * @public
   */
  OriginalPosition?: number[] | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Details about the station.</p>
   * @public
   */
  StationDetails?: RouteStationDetails | undefined;

  /**
   * <p>The type of the place.</p>
   * @public
   */
  Type?: RouteRentalPlaceType | undefined;

  /**
   * <p>Index of the waypoint in the request.</p>
   * @public
   */
  WaypointIndex?: number | undefined;
}

/**
 * <p>Details corresponding to the arrival for the leg.</p>
 * @public
 */
export interface RouteRentalArrival {
  /**
   * <p>Place details corresponding to the arrival.</p>
   * @public
   */
  Place: RouteRentalPlace | undefined;

  /**
   * <p>The arrival time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * <p>The URL to an external resource.</p>
 * @public
 */
export interface RouteWebLink {
  /**
   * <p>The interactive or clickable portion of the text.</p>
   * @public
   */
  AnchorText?: string | undefined;

  /**
   * <p>Text describing the URL.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>Device type for which the link is intended.</p>
   * @public
   */
  DeviceType?: RouteWebLinkDeviceType | undefined;

  /**
   * <p>The URL of the link.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Required attribution to display.</p>
 * @public
 */
export interface RouteAttribution {
  /**
   * <p>The type of the attribution link.</p>
   * @public
   */
  AttributionType?: RouteAttributionType | undefined;

  /**
   * <p>The URL to an external resource.</p>
   * @public
   */
  WebLink: RouteWebLink | undefined;
}

/**
 * <p>A step that must be performed before the travel portion of the leg.</p>
 * @public
 */
export interface RouteRentalBeforeTravelStep {
  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RouteRentalBeforeTravelStepType | undefined;
}

/**
 * <p>Details corresponding to the departure for the leg.</p>
 * @public
 */
export interface RouteRentalDeparture {
  /**
   * <p>Place details corresponding to the departure.</p>
   * @public
   */
  Place: RouteRentalPlace | undefined;

  /**
   * <p>The departure time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * <p>Summary including duration and distance for the entire leg.</p>
 * @public
 */
export interface RouteRentalOverviewSummary {
  /**
   * <p>Duration of the entire leg.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Distance of the entire leg.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Distance: number | undefined;
}

/**
 * <p>Summary including duration and distance for the travel portion of the leg only.</p>
 * @public
 */
export interface RouteRentalTravelOnlySummary {
  /**
   * <p>Duration of the travel portion of the rental leg.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;
}

/**
 * <p>Summary of the rental leg.</p>
 * @public
 */
export interface RouteRentalSummary {
  /**
   * <p>Summary including duration and distance for the entire leg.</p>
   * @public
   */
  Overview?: RouteRentalOverviewSummary | undefined;

  /**
   * <p>Summary including duration and distance for the travel portion of the leg only.</p>
   * @public
   */
  TravelOnly?: RouteRentalTravelOnlySummary | undefined;
}

/**
 * <p>Transport mode details for the rental leg.</p>
 * @public
 */
export interface RouteRentalTransportModeDetails {
  /**
   * <p>Number of available seats in the vehicle.</p>
   * @public
   */
  AvailableSeats?: number | undefined;

  /**
   * <p>Human readable transport category.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>Color of the transport polyline and background for the transport name.</p>
   * @public
   */
  Color?: string | undefined;

  /**
   * <p>Vehicle engine type.</p>
   * @public
   */
  Engine?: RouteEngineType | undefined;

  /**
   * <p>Vehicle license plate number.</p>
   * @public
   */
  LicensePlate?: string | undefined;

  /**
   * <p>Mode of the rental transport.</p>
   * @public
   */
  Mode: RouteRentalMode | undefined;

  /**
   * <p>Vehicle model.</p>
   * @public
   */
  Model?: string | undefined;

  /**
   * <p>Vehicle name or mobility provider name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Color of the transport name text.</p>
   * @public
   */
  TextColor?: string | undefined;
}

/**
 * <p>Details related to the exit step.</p>
 * @public
 */
export interface RouteExitStepDetails {
  /**
   * <p>Name of the intersection, if applicable to the step.</p>
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * <p>Exit to be taken.</p>
   * @public
   */
  RelativeExit?: number | undefined;

  /**
   * <p>Steering direction for the step.</p>
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * <p>Angle of the turn.</p>
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * <p>Intensity of the turn.</p>
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * <p>Details that are specific to a ramp step.</p>
 * @public
 */
export interface RouteRampStepDetails {
  /**
   * <p>Name of the intersection, if applicable to the step.</p>
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * <p>Steering direction for the step.</p>
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * <p>Angle of the turn.</p>
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * <p>Intensity of the turn.</p>
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * <p>Details related to the U-turn step.</p>
 * @public
 */
export interface RouteUTurnStepDetails {
  /**
   * <p>Name of the intersection, if applicable to the step.</p>
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * <p>Steering direction for the step.</p>
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * <p>Angle of the turn.</p>
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * <p>Intensity of the turn.</p>
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * <p>A step that must be performed during the travel portion of the leg.</p>
 * @public
 */
export interface RouteRentalTravelStep {
  /**
   * <p>Details related to the continue step.</p>
   * @public
   */
  ContinueStepDetails?: RouteContinueStepDetails | undefined;

  /**
   * <p>Distance of the step.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Details related to the exit step.</p>
   * @public
   */
  ExitStepDetails?: RouteExitStepDetails | undefined;

  /**
   * <p>Offset in the leg geometry corresponding to the start of this step.</p>
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Details that are specific to a Keep step.</p>
   * @public
   */
  KeepStepDetails?: RouteKeepStepDetails | undefined;

  /**
   * <p>Details that are specific to a ramp step.</p>
   * @public
   */
  RampStepDetails?: RouteRampStepDetails | undefined;

  /**
   * <p>Details about the roundabout leg.</p>
   * @public
   */
  RoundaboutEnterStepDetails?: RouteRoundaboutEnterStepDetails | undefined;

  /**
   * <p>Details about the roundabout step.</p>
   * @public
   */
  RoundaboutExitStepDetails?: RouteRoundaboutExitStepDetails | undefined;

  /**
   * <p>Details about the step.</p>
   * @public
   */
  RoundaboutPassStepDetails?: RouteRoundaboutPassStepDetails | undefined;

  /**
   * <p>Details related to the turn step.</p>
   * @public
   */
  TurnStepDetails?: RouteTurnStepDetails | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RouteRentalTravelStepType | undefined;

  /**
   * <p>Details related to the U-turn step.</p>
   * @public
   */
  UTurnStepDetails?: RouteUTurnStepDetails | undefined;
}

/**
 * <p>Populated when the Leg type is Rental, and provides additional information that is specific to rental vehicle travel.</p>
 * @public
 */
export interface RouteRentalLegDetails {
  /**
   * <p>Steps of a leg that must be performed after the travel portion of the leg.</p>
   * @public
   */
  AfterTravelSteps: RouteRentalAfterTravelStep[] | undefined;

  /**
   * <p>Details about the rental agency.</p>
   * @public
   */
  Agency: RouteRentalAgency | undefined;

  /**
   * <p>Details corresponding to the arrival for the leg.</p>
   * @public
   */
  Arrival: RouteRentalArrival | undefined;

  /**
   * <p>List of required attributions to display.</p>
   * @public
   */
  Attributions: RouteAttribution[] | undefined;

  /**
   * <p>Steps of a leg that must be performed before the travel portion of the leg.</p>
   * @public
   */
  BeforeTravelSteps: RouteRentalBeforeTravelStep[] | undefined;

  /**
   * <p>Web links to external ticket booking services for the rental.</p>
   * @public
   */
  BookingWebLinks: RouteWebLink[] | undefined;

  /**
   * <p>Details corresponding to the departure for the leg.</p>
   * @public
   */
  Departure: RouteRentalDeparture | undefined;

  /**
   * <p>Summary of the rental leg.</p>
   * @public
   */
  Summary?: RouteRentalSummary | undefined;

  /**
   * <p>Transport mode details for the rental leg.</p>
   * @public
   */
  Transport: RouteRentalTransportModeDetails | undefined;

  /**
   * <p>Steps of a leg that must be performed during the travel portion of the leg.</p>
   * @public
   */
  TravelSteps: RouteRentalTravelStep[] | undefined;
}

/**
 * <p>A step that must be performed after the travel portion of the leg.</p>
 * @public
 */
export interface RouteTaxiAfterTravelStep {
  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RouteTaxiAfterTravelStepType | undefined;
}

/**
 * <p>Details about the taxi agency.</p>
 * @public
 */
export interface RouteTaxiAgency {
  /**
   * <p>Name of the agency.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>URL to the agency's website.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Place details corresponding to the arrival or departure.</p>
 * @public
 */
export interface RouteTaxiPlace {
  /**
   * <p>Details of the access point.</p>
   * @public
   */
  AccessPointDetails?: RouteAccessPointDetails | undefined;

  /**
   * <p>The name of the place.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Position provided in the request.</p>
   * @public
   */
  OriginalPosition?: number[] | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Details about the station.</p>
   * @public
   */
  StationDetails?: RouteStationDetails | undefined;

  /**
   * <p>The type of the place.</p>
   * @public
   */
  Type?: RouteTaxiPlaceType | undefined;

  /**
   * <p>Index of the waypoint in the request.</p>
   * @public
   */
  WaypointIndex?: number | undefined;
}

/**
 * <p>Details corresponding to the arrival for the leg.</p>
 * @public
 */
export interface RouteTaxiArrival {
  /**
   * <p>Place details corresponding to the arrival.</p>
   * @public
   */
  Place: RouteTaxiPlace | undefined;

  /**
   * <p>The arrival time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * <p>A step that must be performed before the travel portion of the leg.</p>
 * @public
 */
export interface RouteTaxiBeforeTravelStep {
  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RouteTaxiBeforeTravelStepType | undefined;
}

/**
 * <p>Details corresponding to the departure for the leg.</p>
 * @public
 */
export interface RouteTaxiDeparture {
  /**
   * <p>Place details corresponding to the departure.</p>
   * @public
   */
  Place: RouteTaxiPlace | undefined;

  /**
   * <p>The departure time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * <p>A notice that indicates an issue that occurred during route calculation.</p>
 * @public
 */
export interface RouteTaxiNotice {
  /**
   * <p>Code corresponding to the issue.</p>
   * @public
   */
  Code: RouteTaxiNoticeCode | undefined;

  /**
   * <p>Impact corresponding to the issue. While Low impact notices can be safely ignored, High impact notices must be evaluated further to determine the impact.</p>
   * @public
   */
  Impact?: RouteNoticeImpact | undefined;
}

/**
 * <p>Summary including duration and distance for the entire leg.</p>
 * @public
 */
export interface RouteTaxiOverviewSummary {
  /**
   * <p>Duration of the entire leg.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Distance of the entire leg.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Distance: number | undefined;
}

/**
 * <p>Summary including duration and distance for the travel portion of the leg only.</p>
 * @public
 */
export interface RouteTaxiTravelOnlySummary {
  /**
   * <p>Duration of the travel portion of the taxi leg.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;
}

/**
 * <p>Summary of the taxi leg.</p>
 * @public
 */
export interface RouteTaxiSummary {
  /**
   * <p>Summary including duration and distance for the entire leg.</p>
   * @public
   */
  Overview?: RouteTaxiOverviewSummary | undefined;

  /**
   * <p>Summary including duration and distance for the travel portion of the leg only.</p>
   * @public
   */
  TravelOnly?: RouteTaxiTravelOnlySummary | undefined;
}

/**
 * <p>Transport mode details for the taxi leg.</p>
 * @public
 */
export interface RouteTaxiTransportModeDetails {
  /**
   * <p>Number of available seats in the vehicle.</p>
   * @public
   */
  AvailableSeats?: number | undefined;

  /**
   * <p>Human readable transport category.</p>
   * @public
   */
  Category?: string | undefined;

  /**
   * <p>Color of the transport polyline and background for the transport name.</p>
   * @public
   */
  Color?: string | undefined;

  /**
   * <p>Vehicle engine type.</p>
   * @public
   */
  Engine?: RouteEngineType | undefined;

  /**
   * <p>Vehicle license plate number.</p>
   * @public
   */
  LicensePlate?: string | undefined;

  /**
   * <p>Mode of the taxi transport.</p>
   * @public
   */
  Mode: RouteTaxiMode | undefined;

  /**
   * <p>Vehicle model.</p>
   * @public
   */
  Model?: string | undefined;

  /**
   * <p>Vehicle name or mobility provider name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Color of the transport name text.</p>
   * @public
   */
  TextColor?: string | undefined;
}

/**
 * <p>A step that must be performed during the travel portion of the leg.</p>
 * @public
 */
export interface RouteTaxiTravelStep {
  /**
   * <p>Details related to the continue step.</p>
   * @public
   */
  ContinueStepDetails?: RouteContinueStepDetails | undefined;

  /**
   * <p>Distance of the step.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Details related to the exit step.</p>
   * @public
   */
  ExitStepDetails?: RouteExitStepDetails | undefined;

  /**
   * <p>Offset in the leg geometry corresponding to the start of this step.</p>
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Details that are specific to a Keep step.</p>
   * @public
   */
  KeepStepDetails?: RouteKeepStepDetails | undefined;

  /**
   * <p>Details that are specific to a ramp step.</p>
   * @public
   */
  RampStepDetails?: RouteRampStepDetails | undefined;

  /**
   * <p>Details about the roundabout leg.</p>
   * @public
   */
  RoundaboutEnterStepDetails?: RouteRoundaboutEnterStepDetails | undefined;

  /**
   * <p>Details about the roundabout step.</p>
   * @public
   */
  RoundaboutExitStepDetails?: RouteRoundaboutExitStepDetails | undefined;

  /**
   * <p>Details about the step.</p>
   * @public
   */
  RoundaboutPassStepDetails?: RouteRoundaboutPassStepDetails | undefined;

  /**
   * <p>Details related to the turn step.</p>
   * @public
   */
  TurnStepDetails?: RouteTurnStepDetails | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RouteTaxiTravelStepType | undefined;

  /**
   * <p>Details related to the U-turn step.</p>
   * @public
   */
  UTurnStepDetails?: RouteUTurnStepDetails | undefined;
}

/**
 * <p>Populated when the Leg type is Taxi, and provides additional information that is specific to taxi travel.</p>
 * @public
 */
export interface RouteTaxiLegDetails {
  /**
   * <p>Steps of a leg that must be performed after the travel portion of the leg.</p>
   * @public
   */
  AfterTravelSteps: RouteTaxiAfterTravelStep[] | undefined;

  /**
   * <p>Details about the taxi agency.</p>
   * @public
   */
  Agency: RouteTaxiAgency | undefined;

  /**
   * <p>Details corresponding to the arrival for the leg.</p>
   * @public
   */
  Arrival: RouteTaxiArrival | undefined;

  /**
   * <p>List of required attributions to display.</p>
   * @public
   */
  Attributions: RouteAttribution[] | undefined;

  /**
   * <p>Steps of a leg that must be performed before the travel portion of the leg.</p>
   * @public
   */
  BeforeTravelSteps: RouteTaxiBeforeTravelStep[] | undefined;

  /**
   * <p>Web links to external ticket booking services for the taxi.</p>
   * @public
   */
  BookingWebLinks: RouteWebLink[] | undefined;

  /**
   * <p>Details corresponding to the departure for the leg.</p>
   * @public
   */
  Departure: RouteTaxiDeparture | undefined;

  /**
   * <p>List of notices that indicate issues that occurred during route calculation.</p>
   * @public
   */
  Notices: RouteTaxiNotice[] | undefined;

  /**
   * <p>Summary of the taxi leg.</p>
   * @public
   */
  Summary?: RouteTaxiSummary | undefined;

  /**
   * <p>Transport mode details for the taxi leg.</p>
   * @public
   */
  Transport: RouteTaxiTransportModeDetails | undefined;

  /**
   * <p>Steps of a leg that must be performed during the travel portion of the leg.</p>
   * @public
   */
  TravelSteps: RouteTaxiTravelStep[] | undefined;
}

/**
 * <p>A step that must be performed after the travel portion of the leg.</p>
 * @public
 */
export interface RouteTransitAfterTravelStep {
  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RouteTransitAfterTravelStepType | undefined;
}

/**
 * <p>Details about the transit agency.</p>
 * @public
 */
export interface RouteTransitAgency {
  /**
   * <p>Name of the agency.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>URL to the agency's website.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Place details corresponding to the arrival or departure.</p>
 * @public
 */
export interface RouteTransitPlace {
  /**
   * <p>The name of the place.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Position provided in the request.</p>
   * @public
   */
  OriginalPosition?: number[] | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Details about the station.</p>
   * @public
   */
  StationDetails?: RouteStationDetails | undefined;

  /**
   * <p>The type of the place.</p>
   * @public
   */
  Type?: RouteTransitPlaceType | undefined;

  /**
   * <p>Index of the waypoint in the request.</p>
   * @public
   */
  WaypointIndex?: number | undefined;
}

/**
 * <p>Details corresponding to the arrival for the leg.</p>
 * @public
 */
export interface RouteTransitArrival {
  /**
   * <p>The delay from the scheduled arrival time.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Delay?: number | undefined;

  /**
   * <p>Place details corresponding to the arrival.</p>
   * @public
   */
  Place: RouteTransitPlace | undefined;

  /**
   * <p>The status of the arrival.</p>
   * @public
   */
  Status?: RouteTransitTripStatus | undefined;

  /**
   * <p>The arrival time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * <p>A step that must be performed before the travel portion of the leg.</p>
 * @public
 */
export interface RouteTransitBeforeTravelStep {
  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RouteTransitBeforeTravelStepType | undefined;
}

/**
 * <p>Details corresponding to the departure for the leg.</p>
 * @public
 */
export interface RouteTransitDeparture {
  /**
   * <p>The delay from the scheduled departure time.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Delay?: number | undefined;

  /**
   * <p>Place details corresponding to the departure.</p>
   * @public
   */
  Place: RouteTransitPlace | undefined;

  /**
   * <p>The status of the departure.</p>
   * @public
   */
  Status?: RouteTransitTripStatus | undefined;

  /**
   * <p>The departure time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * <p>An incident describes disruptions on the transit route.</p>
 * @public
 */
export interface RouteTransitIncident {
  /**
   * <p>A human readable description of the incident.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The effect of the incident on the transit service.</p>
   * @public
   */
  Effect: RouteTransitIncidentEffect | undefined;

  /**
   * <p>The end time of the incident.</p>
   * @public
   */
  EndTime?: string | undefined;

  /**
   * <p>The start time of the incident.</p>
   * @public
   */
  StartTime?: string | undefined;

  /**
   * <p>Type of the incident.</p>
   * @public
   */
  Type: RouteTransitIncidentType | undefined;

  /**
   * <p>URL to the original incident published at the agency website.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Transport mode details for the transit leg.</p>
 * @public
 */
export interface RouteTransitTransportModeDetails {
  /**
   * <p>Wheelchair accessibility information for the transit vehicle.</p>
   * @public
   */
  Accessibility?: RouteAccessibilityAvailabilityDetails | undefined;

  /**
   * <p>Color of the transport polyline and background for the transport name.</p>
   * @public
   */
  Color?: string | undefined;

  /**
   * <p>Transit route headsign.</p>
   * @public
   */
  Headsign?: string | undefined;

  /**
   * <p>Long name of the transit route.</p>
   * @public
   */
  LongRouteName?: string | undefined;

  /**
   * <p>Mode of the transit transport.</p>
   * @public
   */
  Mode: RouteTransitMode | undefined;

  /**
   * <p>Transit route name.</p>
   * @public
   */
  RouteName?: string | undefined;

  /**
   * <p>Short name of the transit route.</p>
   * @public
   */
  ShortRouteName?: string | undefined;

  /**
   * <p>Color of the transport name text.</p>
   * @public
   */
  TextColor?: string | undefined;
}

/**
 * <p>An intermediate stop between departure and destination of the transit route.</p>
 * @public
 */
export interface RouteTransitIntermediateStop {
  /**
   * <p>Attributes of the intermediate stop.</p>
   * @public
   */
  Attributes?: RouteTransitIntermediateStopAttribute[] | undefined;

  /**
   * <p>Departure details for the intermediate stop.</p>
   * @public
   */
  Departure: RouteTransitDeparture | undefined;

  /**
   * <p>Duration of the stop.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Offset in the leg geometry corresponding to the start of this stop.</p>
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * <p>Transport mode details at the intermediate stop.</p>
   * @public
   */
  Transport?: RouteTransitTransportModeDetails | undefined;
}

/**
 * <p>Details about the next available departure for the transit service.</p>
 * @public
 */
export interface RouteTransitNextDeparture {
  /**
   * <p>The delay from the scheduled departure time.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Delay?: number | undefined;

  /**
   * <p>Platform name or number for the departure.</p>
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * <p>The status of the departure.</p>
   * @public
   */
  Status?: RouteTransitTripStatus | undefined;

  /**
   * <p>The departure time.</p>
   * @public
   */
  Time: string | undefined;

  /**
   * <p>Transport mode details for this departure.</p>
   * @public
   */
  Transport?: RouteTransitTransportModeDetails | undefined;
}

/**
 * <p>A notice that indicates an issue that occurred during route calculation.</p>
 * @public
 */
export interface RouteTransitNotice {
  /**
   * <p>Code corresponding to the issue.</p>
   * @public
   */
  Code: RouteTransitNoticeCode | undefined;

  /**
   * <p>Impact corresponding to the issue. While Low impact notices can be safely ignored, High impact notices must be evaluated further to determine the impact.</p>
   * @public
   */
  Impact?: RouteNoticeImpact | undefined;
}

/**
 * <p>Span computed for the requested SpanAdditionalFeatures.</p>
 * @public
 */
export interface RouteTransitSpan {
  /**
   * <p>3 letter Country code corresponding to the Span.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>Distance of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>Duration of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>Offset in the leg geometry corresponding to the start of this span.</p>
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * <p>Names of the transit span in available languages.</p>
   * @public
   */
  Names?: LocalizedString[] | undefined;

  /**
   * <p>2-3 letter Region code corresponding to the Span. This is either a province or a state.</p>
   * @public
   */
  Region?: string | undefined;
}

/**
 * <p>Summary including duration and distance for the entire leg.</p>
 * @public
 */
export interface RouteTransitOverviewSummary {
  /**
   * <p>Distance of the entire leg.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Distance: number | undefined;

  /**
   * <p>Duration of the entire leg.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;
}

/**
 * <p>Summary including duration and distance for the travel portion of the leg only.</p>
 * @public
 */
export interface RouteTransitTravelOnlySummary {
  /**
   * <p>Duration of the travel portion of the transit leg.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;
}

/**
 * <p>Summary of the transit leg.</p>
 * @public
 */
export interface RouteTransitSummary {
  /**
   * <p>Summary including duration and distance for the entire leg.</p>
   * @public
   */
  Overview?: RouteTransitOverviewSummary | undefined;

  /**
   * <p>Summary including duration and distance for the travel portion of the leg only.</p>
   * @public
   */
  TravelOnly?: RouteTransitTravelOnlySummary | undefined;
}

/**
 * <p>A step that must be performed during the travel portion of the leg.</p>
 * @public
 */
export interface RouteTransitTravelStep {
  /**
   * <p>Distance of the step.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Offset in the leg geometry corresponding to the start of this step.</p>
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RouteTransitTravelStepType | undefined;
}

/**
 * <p>Populated when the Leg type is Transit, and provides additional information that is specific to public transit travel.</p>
 * @public
 */
export interface RouteTransitLegDetails {
  /**
   * <p>Steps of a leg that must be performed after the travel portion of the leg.</p>
   * @public
   */
  AfterTravelSteps: RouteTransitAfterTravelStep[] | undefined;

  /**
   * <p>Details about the transit agency.</p>
   * @public
   */
  Agency?: RouteTransitAgency | undefined;

  /**
   * <p>Details corresponding to the arrival for the leg.</p>
   * @public
   */
  Arrival: RouteTransitArrival | undefined;

  /**
   * <p>List of required attributions to display.</p>
   * @public
   */
  Attributions: RouteAttribution[] | undefined;

  /**
   * <p>Steps of a leg that must be performed before the travel portion of the leg.</p>
   * @public
   */
  BeforeTravelSteps: RouteTransitBeforeTravelStep[] | undefined;

  /**
   * <p>Web links to external ticket booking services for the transit.</p>
   * @public
   */
  BookingWebLinks: RouteWebLink[] | undefined;

  /**
   * <p>Details corresponding to the departure for the leg.</p>
   * @public
   */
  Departure: RouteTransitDeparture | undefined;

  /**
   * <p>Incidents affecting this leg of the transit route.</p>
   * @public
   */
  Incidents: RouteTransitIncident[] | undefined;

  /**
   * <p>Intermediate stops between departure and destination of the transit route.</p>
   * @public
   */
  IntermediateStops: RouteTransitIntermediateStop[] | undefined;

  /**
   * <p>List of next departures that cover the same section of the route.</p>
   * @public
   */
  NextDepartures: RouteTransitNextDeparture[] | undefined;

  /**
   * <p>List of notices that indicate issues that occurred during route calculation.</p>
   * @public
   */
  Notices: RouteTransitNotice[] | undefined;

  /**
   * <p>Waypoints that were passed through during the leg. This includes the waypoints that were configured with the PassThrough option. Not populated when the TravelMode is <code>Transit</code> or <code>Intermodal</code>.</p>
   * @public
   */
  PassThroughWaypoints: RoutePassThroughWaypoint[] | undefined;

  /**
   * <p>Spans that were computed for the requested SpanAdditionalFeatures. Not populated when the TravelMode is <code>Transit</code> or <code>Intermodal</code>.</p>
   * @public
   */
  Spans: RouteTransitSpan[] | undefined;

  /**
   * <p>Summary of the transit leg.</p>
   * @public
   */
  Summary?: RouteTransitSummary | undefined;

  /**
   * <p>Transport mode details for the transit leg.</p>
   * @public
   */
  Transport: RouteTransitTransportModeDetails | undefined;

  /**
   * <p>Steps of a leg that must be performed during the travel portion of the leg.</p>
   * @public
   */
  TravelSteps: RouteTransitTravelStep[] | undefined;
}

/**
 * <p>Details about the EV charge at the current step.</p>
 * @public
 */
export interface RouteChargeStepDetails {
  /**
   * <p>Estimated vehicle battery charge before this step (in kWh). </p>
   * @public
   */
  ArrivalCharge?: number | undefined;

  /**
   * <p>Maximum charging power available to the vehicle.</p> <p> <b>Unit</b>: <code>KwH</code> </p>
   * @public
   */
  ConsumablePower?: number | undefined;

  /**
   * <p>Details that are specific to a Charge step.</p> <p> <b>Unit</b>: <code>KwH</code> </p>
   * @public
   */
  DesiredCharge?: number | undefined;
}

/**
 * <p>Steps of a leg that must be performed after the travel portion of the leg.</p>
 * @public
 */
export interface RouteVehicleAfterTravelStep {
  /**
   * <p>Details that are specific to a Charge step.</p> <p> <b>Unit</b>: <code>KwH </code> </p>
   * @public
   */
  ChargeStepDetails?: RouteChargeStepDetails | undefined;

  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p> <note> <p>Only available when the TravelStepType is Default.</p> </note>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RouteVehicleAfterTravelStepType | undefined;
}

/**
 * <p>Place details corresponding to the arrival or departure.</p>
 * @public
 */
export interface RouteVehiclePlace {
  /**
   * <p>The name of the place.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Position provided in the request.</p>
   * @public
   */
  OriginalPosition?: number[] | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Options to configure matching the provided position to a side of the street.</p>
   * @public
   */
  SideOfStreet?: RouteSideOfStreet | undefined;

  /**
   * <p>Index of the waypoint in the request.</p>
   * @public
   */
  WaypointIndex?: number | undefined;

  /**
   * <p>Details of the access point.</p>
   * @public
   */
  AccessPointDetails?: RouteAccessPointDetails | undefined;

  /**
   * <p>Details about the station.</p>
   * @public
   */
  StationDetails?: RouteStationDetails | undefined;

  /**
   * <p>The type of the place.</p>
   * @public
   */
  Type?: RouteVehiclePlaceType | undefined;
}

/**
 * <p>Details corresponding to the arrival for a leg.</p>
 * @public
 */
export interface RouteVehicleArrival {
  /**
   * <p>Place details corresponding to the arrival.</p>
   * @public
   */
  Place: RouteVehiclePlace | undefined;

  /**
   * <p>The arrival time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * <p>Details corresponding to the departure for the leg.</p>
 * @public
 */
export interface RouteVehicleDeparture {
  /**
   * <p>Place details corresponding to the departure.</p>
   * @public
   */
  Place: RouteVehiclePlace | undefined;

  /**
   * <p>The departure time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * <p>Incidents corresponding to this leg of the route.</p>
 * @public
 */
export interface RouteVehicleIncident {
  /**
   * <p>Brief readable description of the incident.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>End timestamp of the incident.</p>
   * @public
   */
  EndTime?: string | undefined;

  /**
   * <p>Severity of the incident Critical - The part of the route the incident affects is unusable. Major- Major impact on the leg duration, for example stop and go Minor- Minor impact on the leg duration, for example traffic jam Low - Low on duration, for example slightly increased traffic</p>
   * @public
   */
  Severity?: RouteVehicleIncidentSeverity | undefined;

  /**
   * <p>Start time of the incident.</p>
   * @public
   */
  StartTime?: string | undefined;

  /**
   * <p>Type of the incident.</p>
   * @public
   */
  Type?: RouteVehicleIncidentType | undefined;
}

/**
 * <p>Notice Detail that is a range.</p>
 * @public
 */
export interface RouteNoticeDetailRange {
  /**
   * <p>Minimum value for the range.</p>
   * @public
   */
  Min?: number | undefined;

  /**
   * <p>Maximum value for the range.</p>
   * @public
   */
  Max?: number | undefined;
}

/**
 * <p>The weight constraint for the route.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
 * @public
 */
export interface RouteWeightConstraint {
  /**
   * <p>The type of constraint.</p>
   * @public
   */
  Type: RouteWeightConstraintType | undefined;

  /**
   * <p>The constraint value.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  Value: number | undefined;
}

/**
 * <p>This property contains a summary of violated constraints.</p>
 * @public
 */
export interface RouteViolatedConstraints {
  /**
   * <p>This restriction applies to truck cargo, where the resulting route excludes roads on which hazardous materials are prohibited from being transported.</p>
   * @public
   */
  AllHazardsRestricted?: boolean | undefined;

  /**
   * <p>Total number of axles of the vehicle.</p>
   * @public
   */
  AxleCount?: RouteNoticeDetailRange | undefined;

  /**
   * <p>List of Hazardous cargo contained in the vehicle.</p>
   * @public
   */
  HazardousCargos: RouteHazardousCargoType[] | undefined;

  /**
   * <p>The maximum height of the vehicle.</p>
   * @public
   */
  MaxHeight?: number | undefined;

  /**
   * <p>The maximum Kpra length of the vehicle.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  MaxKpraLength?: number | undefined;

  /**
   * <p>The maximum length of the vehicle.</p>
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * <p>The maximum load capacity of the vehicle.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  MaxPayloadCapacity?: number | undefined;

  /**
   * <p>The maximum weight of the route.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  MaxWeight?: RouteWeightConstraint | undefined;

  /**
   * <p>The maximum weight per axle of the vehicle.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  MaxWeightPerAxle?: number | undefined;

  /**
   * <p>The maximum weight per axle group of the vehicle.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  MaxWeightPerAxleGroup?: WeightPerAxleGroup | undefined;

  /**
   * <p>The maximum width of the vehicle.</p>
   * @public
   */
  MaxWidth?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default value: <code>1</code> </p>
   * @public
   */
  Occupancy?: RouteNoticeDetailRange | undefined;

  /**
   * <p>Access radius restrictions based on time.</p>
   * @public
   */
  RestrictedTimes?: string | undefined;

  /**
   * <p>The time dependent constraint.</p>
   * @public
   */
  TimeDependent?: boolean | undefined;

  /**
   * <p>Number of trailers attached to the vehicle.</p> <p>Default value: <code>0</code> </p>
   * @public
   */
  TrailerCount?: RouteNoticeDetailRange | undefined;

  /**
   * <p>Travel mode corresponding to the leg.</p>
   * @public
   */
  TravelMode?: boolean | undefined;

  /**
   * <p>Truck road type identifiers. <code>BK1</code> through <code>BK4</code> apply only to Sweden. <code>A2,A4,B2,B4,C,D,ET2,ET4</code> apply only to Mexico.</p> <note> <p>There are currently no other supported values as of 26th April 2024.</p> </note>
   * @public
   */
  TruckRoadType?: string | undefined;

  /**
   * <p>The type of truck: <code>LightTruck</code> for smaller delivery vehicles, <code> StraightTruck</code> for rigid body trucks, or <code>Tractor</code> for tractor-trailer combinations.</p>
   * @public
   */
  TruckType?: RouteTruckType | undefined;

  /**
   * <p>The tunnel restriction code.</p> <p>Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.</p> <ul> <li> <p> <i>Tunnel Category B</i> </p> <ul> <li> <p> <i>Risk Level</i>: Limited risk</p> </li> <li> <p> <i>Restrictions</i>: Few restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category C</i> </p> <ul> <li> <p> <i>Risk Level</i>: Medium risk</p> </li> <li> <p> <i>Restrictions</i>: Some restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category D</i> </p> <ul> <li> <p> <i>Risk Level</i>: High risk</p> </li> <li> <p> <i>Restrictions</i>: Many restrictions occur</p> </li> </ul> </li> <li> <p> <i>Tunnel Category E</i> </p> <ul> <li> <p> <i>Risk Level</i>: Very high risk</p> </li> <li> <p> <i>Restrictions</i>: Restricted tunnel</p> </li> </ul> </li> </ul>
   * @public
   */
  TunnelRestrictionCode?: string | undefined;
}

/**
 * <p>Additional details of the notice.</p>
 * @public
 */
export interface RouteVehicleNoticeDetail {
  /**
   * <p>The notice title.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>Any violated constraints.</p>
   * @public
   */
  ViolatedConstraints?: RouteViolatedConstraints | undefined;
}

/**
 * <p>Notices are additional information returned that indicate issues that occurred during route calculation.</p>
 * @public
 */
export interface RouteVehicleNotice {
  /**
   * <p>Code corresponding to the issue.</p>
   * @public
   */
  Code: RouteVehicleNoticeCode | undefined;

  /**
   * <p>Additional details of the notice.</p>
   * @public
   */
  Details: RouteVehicleNoticeDetail[] | undefined;

  /**
   * <p>Impact corresponding to the issue. While Low impact notices can be safely ignored, High impact notices must be evaluated further to determine the impact.</p>
   * @public
   */
  Impact?: RouteNoticeImpact | undefined;
}

/**
 * <p>Span computed for the requested SpanAdditionalFeatures.</p>
 * @public
 */
export interface RouteVehicleSpan {
  /**
   * <p>Duration of the computed span without traffic congestion.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  BestCaseDuration?: number | undefined;

  /**
   * <p>Access attributes for a car corresponding to the span.</p>
   * @public
   */
  CarAccess?: RouteSpanCarAccessAttribute[] | undefined;

  /**
   * <p>3 letter Country code corresponding to the Span.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>Distance of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.</p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>Duration of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>Dynamic speed details corresponding to the span.</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  DynamicSpeed?: RouteSpanDynamicSpeedDetails | undefined;

  /**
   * <p>A numerical value indicating the functional classification of the road segment corresponding to the span.</p> <p>Classification values are part of the hierarchical network that helps determine a logical and efficient route, and have the following definitions:</p> <ol> <li> <p>Roads that allow for high volume, maximum speed traffic movement between and through major metropolitan areas.</p> </li> <li> <p>Roads that are used to channel traffic to functional class 1 roads for travel between and through cities in the shortest amount of time.</p> </li> <li> <p>Roads that intersect functional class 2 roads and provide a high volume of traffic movement at a lower level of mobility than functional class 2 roads.</p> </li> <li> <p>Roads that provide for a high volume of traffic movement at moderate speeds between neighborhoods.</p> </li> <li> <p>Roads with volume and traffic movement below the level of any other functional class.</p> </li> </ol>
   * @public
   */
  FunctionalClassification?: number | undefined;

  /**
   * <p>Attributes corresponding to a gate. The gate is present at the end of the returned span.</p>
   * @public
   */
  Gate?: RouteSpanGateAttribute | undefined;

  /**
   * <p>Offset in the leg geometry corresponding to the start of this span.</p>
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * <p>Incidents corresponding to the span. These index into the Incidents in the parent Leg.</p>
   * @public
   */
  Incidents?: number[] | undefined;

  /**
   * <p>Provides an array of names of the vehicle span in available languages.</p>
   * @public
   */
  Names?: LocalizedString[] | undefined;

  /**
   * <p>Notices are additional information returned that indicate issues that occurred during route calculation.</p>
   * @public
   */
  Notices?: number[] | undefined;

  /**
   * <p>Attributes corresponding to a railway crossing. The gate is present at the end of the returned span.</p>
   * @public
   */
  RailwayCrossing?: RouteSpanRailwayCrossingAttribute | undefined;

  /**
   * <p>2-3 letter Region code corresponding to the Span. This is either a province or a state.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>Attributes for the road segment corresponding to the span. </p>
   * @public
   */
  RoadAttributes?: RouteSpanRoadAttribute[] | undefined;

  /**
   * <p>Designated route name or number corresponding to the span.</p>
   * @public
   */
  RouteNumbers?: RouteNumber[] | undefined;

  /**
   * <p>Access attributes for a scooter corresponding to the span.</p>
   * @public
   */
  ScooterAccess?: RouteSpanScooterAccessAttribute[] | undefined;

  /**
   * <p>Speed limit details corresponding to the span.</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  SpeedLimit?: RouteSpanSpeedLimitDetails | undefined;

  /**
   * <p>Toll systems are authorities that collect payments for the toll.</p>
   * @public
   */
  TollSystems?: number[] | undefined;

  /**
   * <p>Access attributes for a truck corresponding to the span.</p>
   * @public
   */
  TruckAccess?: RouteSpanTruckAccessAttribute[] | undefined;

  /**
   * <p>Truck road type identifiers. <code>BK1</code> through <code>BK4</code> apply only to Sweden. <code>A2,A4,B2,B4,C,D,ET2,ET4</code> apply only to Mexico.</p> <note> <p>There are currently no other supported values as of 26th April 2024.</p> </note>
   * @public
   */
  TruckRoadTypes?: number[] | undefined;

  /**
   * <p>Duration of the computed span under typical traffic congestion. </p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  TypicalDuration?: number | undefined;

  /**
   * <p>Zones corresponding to this leg of the route.</p>
   * @public
   */
  Zones?: number[] | undefined;
}

/**
 * <p>Summary including duration and distance for the entire leg.</p>
 * @public
 */
export interface RouteVehicleOverviewSummary {
  /**
   * <p>Total duration in free flowing traffic, which is the best case or shortest duration possible to cover the leg.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  BestCaseDuration?: number | undefined;

  /**
   * <p>Distance of the entire leg.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  Distance: number | undefined;

  /**
   * <p>Duration of the entire leg.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Duration of the leg under typical traffic congestion.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  TypicalDuration?: number | undefined;
}

/**
 * <p>Summarized details of the route.</p>
 * @public
 */
export interface RouteVehicleTravelOnlySummary {
  /**
   * <p>Total duration in free flowing traffic, which is the best case or shortest duration possible to cover the leg.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  BestCaseDuration?: number | undefined;

  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Duration of the leg under typical traffic congestion.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  TypicalDuration?: number | undefined;
}

/**
 * <p>Summarized details of the route.</p>
 * @public
 */
export interface RouteVehicleSummary {
  /**
   * <p>Summarized details for the leg including before travel, travel and after travel steps.</p>
   * @public
   */
  Overview?: RouteVehicleOverviewSummary | undefined;

  /**
   * <p>Summarized details for the leg including travel steps only. The Distance for the travel only portion of the journey is in meters</p>
   * @public
   */
  TravelOnly?: RouteVehicleTravelOnlySummary | undefined;
}

/**
 * <p>Locations or sites where the toll fare is collected.</p>
 * @public
 */
export interface RouteTollPaymentSite {
  /**
   * <p>Name of the payment site.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;
}

/**
 * <p>Price range with a minimum and maximum value, if a range.</p>
 * @public
 */
export interface RouteTollPriceValueRange {
  /**
   * <p>Minimum price.</p>
   * @public
   */
  Min: number | undefined;

  /**
   * <p>Maximum price.</p>
   * @public
   */
  Max: number | undefined;
}

/**
 * <p>The toll price.</p>
 * @public
 */
export interface RouteTollPrice {
  /**
   * <p>Currency code corresponding to the price. This is the same as Currency specified in the request.</p>
   * @public
   */
  Currency: string | undefined;

  /**
   * <p>If the price is an estimate or an exact value. </p>
   * @public
   */
  Estimate: boolean | undefined;

  /**
   * <p>Duration for which the price corresponds to.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  PerDuration?: number | undefined;

  /**
   * <p>If the price is a range or an exact value. If any of the toll fares making up the route is a range, the overall price is also a range.</p>
   * @public
   */
  Range: boolean | undefined;

  /**
   * <p>Price range with a minimum and maximum value, if a range.</p>
   * @public
   */
  RangeValue?: RouteTollPriceValueRange | undefined;

  /**
   * <p>Exact price, if not a range.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * <p>Period for which the pass is valid.</p>
 * @public
 */
export interface RouteTollPassValidityPeriod {
  /**
   * <p>Validity period.</p>
   * @public
   */
  Period: RouteTollPassValidityPeriodType | undefined;

  /**
   * <p>Counts for the validity period.</p>
   * @public
   */
  PeriodCount?: number | undefined;
}

/**
 * <p>Details if the toll rate can be a pass that supports multiple trips.</p>
 * @public
 */
export interface RouteTollPass {
  /**
   * <p>If the pass includes the rate for the return leg of the trip.</p>
   * @public
   */
  IncludesReturnTrip?: boolean | undefined;

  /**
   * <p>If the pass is only valid for senior persons.</p>
   * @public
   */
  SeniorPass?: boolean | undefined;

  /**
   * <p>If the toll pass can be transferred, and how many times.</p>
   * @public
   */
  TransferCount?: number | undefined;

  /**
   * <p>Number of trips the pass is valid for.</p>
   * @public
   */
  TripCount?: number | undefined;

  /**
   * <p>Period for which the pass is valid.</p>
   * @public
   */
  ValidityPeriod?: RouteTollPassValidityPeriod | undefined;
}

/**
 * <p>Transponders for which this toll can be applied.</p>
 * @public
 */
export interface RouteTransponder {
  /**
   * <p>Names of the toll system collecting the toll.</p>
   * @public
   */
  SystemName?: string | undefined;
}

/**
 * <p>The toll rate.</p>
 * @public
 */
export interface RouteTollRate {
  /**
   * <p>Time when the rate is valid.</p>
   * @public
   */
  ApplicableTimes?: string | undefined;

  /**
   * <p>Price in the converted currency as specified in the request.</p>
   * @public
   */
  ConvertedPrice?: RouteTollPrice | undefined;

  /**
   * <p>The Toll rate Id.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Price in the local regional currency.</p>
   * @public
   */
  LocalPrice: RouteTollPrice | undefined;

  /**
   * <p>The name of the toll.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Details if the toll rate can be a pass that supports multiple trips.</p>
   * @public
   */
  Pass?: RouteTollPass | undefined;

  /**
   * <p>Accepted payment methods at the toll.</p>
   * @public
   */
  PaymentMethods: RouteTollPaymentMethod[] | undefined;

  /**
   * <p>Transponders for which this toll can be applied.</p>
   * @public
   */
  Transponders: RouteTransponder[] | undefined;
}

/**
 * <p>Provides details about toll information along a route, including the payment sites, applicable toll rates, toll systems, and the country associated with the toll collection.</p>
 * @public
 */
export interface RouteToll {
  /**
   * <p>The alpha-2 or alpha-3 character code for the country.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>Locations or sites where the toll fare is collected.</p>
   * @public
   */
  PaymentSites: RouteTollPaymentSite[] | undefined;

  /**
   * <p>Toll rates that need to be paid to travel this leg of the route.</p>
   * @public
   */
  Rates: RouteTollRate[] | undefined;

  /**
   * <p>Toll systems are authorities that collect payments for the toll.</p>
   * @public
   */
  Systems: number[] | undefined;
}

/**
 * <p>Toll systems are authorities that collect payments for the toll.</p>
 * @public
 */
export interface RouteTollSystem {
  /**
   * <p>The toll system name.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Details related to the continue highway step.</p>
 * @public
 */
export interface RouteContinueHighwayStepDetails {
  /**
   * <p>Name of the intersection, if applicable to the step.</p>
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * <p>Steering direction for the step.</p>
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * <p>Angle of the turn.</p>
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * <p>Intensity of the turn.</p>
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * <p>Details related to the enter highway step.</p>
 * @public
 */
export interface RouteEnterHighwayStepDetails {
  /**
   * <p>Name of the intersection, if applicable to the step.</p>
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * <p>Steering direction for the step.</p>
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * <p>Angle of the turn.</p>
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * <p>Intensity of the turn.</p>
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * <p>Steps of a leg that correspond to the travel portion of the leg.</p>
 * @public
 */
export interface RouteVehicleTravelStep {
  /**
   * <p>Details that are specific to a Continue Highway step.</p>
   * @public
   */
  ContinueHighwayStepDetails?: RouteContinueHighwayStepDetails | undefined;

  /**
   * <p>Details that are specific to a Continue step.</p>
   * @public
   */
  ContinueStepDetails?: RouteContinueStepDetails | undefined;

  /**
   * <p>Details of the current road.</p>
   * @public
   */
  CurrentRoad?: RouteRoad | undefined;

  /**
   * <p>Distance of the step.</p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Details that are specific to a Enter Highway step.</p>
   * @public
   */
  EnterHighwayStepDetails?: RouteEnterHighwayStepDetails | undefined;

  /**
   * <p>Exit number of the road exit, if applicable.</p>
   * @public
   */
  ExitNumber?: LocalizedString[] | undefined;

  /**
   * <p>Details that are specific to a Roundabout Exit step.</p>
   * @public
   */
  ExitStepDetails?: RouteExitStepDetails | undefined;

  /**
   * <p>Offset in the leg geometry corresponding to the start of this step.</p>
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * <p>Brief description of the step in the requested language.</p> <note> <p>Only available when the TravelStepType is Default.</p> </note>
   * @public
   */
  Instruction?: string | undefined;

  /**
   * <p>Details that are specific to a Keep step.</p>
   * @public
   */
  KeepStepDetails?: RouteKeepStepDetails | undefined;

  /**
   * <p>Details of the next road. See RouteRoad for details of sub-attributes.</p>
   * @public
   */
  NextRoad?: RouteRoad | undefined;

  /**
   * <p>Details that are specific to a Ramp step.</p>
   * @public
   */
  RampStepDetails?: RouteRampStepDetails | undefined;

  /**
   * <p>Details that are specific to a Roundabout Enter step.</p>
   * @public
   */
  RoundaboutEnterStepDetails?: RouteRoundaboutEnterStepDetails | undefined;

  /**
   * <p>Details that are specific to a Roundabout Exit step.</p>
   * @public
   */
  RoundaboutExitStepDetails?: RouteRoundaboutExitStepDetails | undefined;

  /**
   * <p>Details that are specific to a Roundabout Pass step.</p>
   * @public
   */
  RoundaboutPassStepDetails?: RouteRoundaboutPassStepDetails | undefined;

  /**
   * <p>Sign post information of the action, applicable only for TurnByTurn steps. See RouteSignpost for details of sub-attributes.</p>
   * @public
   */
  Signpost?: RouteSignpost | undefined;

  /**
   * <p>Details that are specific to a Turn step.</p>
   * @public
   */
  TurnStepDetails?: RouteTurnStepDetails | undefined;

  /**
   * <p>Type of the step.</p>
   * @public
   */
  Type: RouteVehicleTravelStepType | undefined;

  /**
   * <p>Details that are specific to a Turn step.</p>
   * @public
   */
  UTurnStepDetails?: RouteUTurnStepDetails | undefined;
}

/**
 * <p>The zone.</p>
 * @public
 */
export interface RouteZone {
  /**
   * <p>The zone category.</p>
   * @public
   */
  Category?: RouteZoneCategory | undefined;

  /**
   * <p>The name of the zone.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Steps of a leg that correspond to the travel portion of the leg.</p>
 * @public
 */
export interface RouteVehicleLegDetails {
  /**
   * <p>Steps of a leg that must be performed after the travel portion of the leg.</p>
   * @public
   */
  AfterTravelSteps: RouteVehicleAfterTravelStep[] | undefined;

  /**
   * <p>Details corresponding to the arrival for the leg.</p>
   * @public
   */
  Arrival: RouteVehicleArrival | undefined;

  /**
   * <p>Details corresponding to the departure for the leg.</p>
   * @public
   */
  Departure: RouteVehicleDeparture | undefined;

  /**
   * <p> Incidents corresponding to this leg of the route. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Incidents: RouteVehicleIncident[] | undefined;

  /**
   * <p> Notices are additional information returned that indicate issues that occurred during route calculation. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Notices: RouteVehicleNotice[] | undefined;

  /**
   * <p>Waypoints that were passed through during the leg. This includes the waypoints that were configured with the PassThrough option.</p>
   * @public
   */
  PassThroughWaypoints: RoutePassThroughWaypoint[] | undefined;

  /**
   * <p> Spans that were computed for the requested SpanAdditionalFeatures. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Spans: RouteVehicleSpan[] | undefined;

  /**
   * <p>Summarized details of the leg.</p>
   * @public
   */
  Summary?: RouteVehicleSummary | undefined;

  /**
   * <p> Toll related options. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Tolls: RouteToll[] | undefined;

  /**
   * <p> Toll systems are authorities that collect payments for the toll. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  TollSystems: RouteTollSystem[] | undefined;

  /**
   * <p>Steps of a leg that must be performed before the travel portion of the leg.</p>
   * @public
   */
  TravelSteps: RouteVehicleTravelStep[] | undefined;

  /**
   * <p> Truck road type identifiers. <code>BK1</code> through <code>BK4</code> apply only to Sweden. <code>A2,A4,B2,B4,C,D,ET2,ET4</code> apply only to Mexico. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p> <note> <p>There are currently no other supported values as of 26th April 2024.</p> </note>
   * @public
   */
  TruckRoadTypes: string[] | undefined;

  /**
   * <p> Zones corresponding to this leg of the route. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Zones: RouteZone[] | undefined;
}

/**
 * <p>A leg is a section of a route from one waypoint to the next. A leg could be of type Vehicle, Pedestrian or Ferry. Legs of different types could occur together within a single route. For example, a car employing the use of a Ferry will contain Vehicle legs corresponding to journey on land, and Ferry legs corresponding to the journey via Ferry.</p>
 * @public
 */
export interface RouteLeg {
  /**
   * <p> FerryLegDetails is populated when the Leg type is Ferry, and provides additional information that is specific to ferry travel. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  FerryLegDetails?: RouteFerryLegDetails | undefined;

  /**
   * <p>Geometry of the area to be avoided.</p>
   * @public
   */
  Geometry: RouteLegGeometry | undefined;

  /**
   * <p> List of languages for instructions within steps in the response. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>Details related to the pedestrian leg.</p>
   * @public
   */
  PedestrianLegDetails?: RoutePedestrianLegDetails | undefined;

  /**
   * <p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.</p> <p>Default value: <code>Car</code> </p>
   * @public
   */
  TravelMode: RouteLegTravelMode | undefined;

  /**
   * <p>Type of the leg.</p>
   * @public
   */
  Type: RouteLegType | undefined;

  /**
   * <p>Details related to the vehicle leg.</p>
   * @public
   */
  VehicleLegDetails?: RouteVehicleLegDetails | undefined;

  /**
   * <p>Details related to the rental leg.</p> <note> <p>Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers.</p> </note>
   * @public
   */
  RentalLegDetails?: RouteRentalLegDetails | undefined;

  /**
   * <p>Details related to the taxi leg.</p> <note> <p>Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers.</p> </note>
   * @public
   */
  TaxiLegDetails?: RouteTaxiLegDetails | undefined;

  /**
   * <p>Details related to the transit leg.</p>
   * @public
   */
  TransitLegDetails?: RouteTransitLegDetails | undefined;
}

/**
 * <p>Important labels including names and route numbers that differentiate the current route from the alternatives presented.</p>
 * @public
 */
export interface RouteMajorRoadLabel {
  /**
   * <p>Name of the road (localized).</p>
   * @public
   */
  RoadName?: LocalizedString | undefined;

  /**
   * <p>Route number of the road.</p>
   * @public
   */
  RouteNumber?: RouteNumber | undefined;
}

/**
 * <p>Summary of the route and toll price.</p>
 * @public
 */
export interface RouteTollPriceSummary {
  /**
   * <p>Currency code corresponding to the price. This is the same as Currency specified in the request.</p>
   * @public
   */
  Currency: string | undefined;

  /**
   * <p>If the price is an estimate or an exact value. </p>
   * @public
   */
  Estimate: boolean | undefined;

  /**
   * <p>If the price is a range or an exact value. If any of the toll fares making up the route is a range, the overall price is also a range.</p>
   * @public
   */
  Range: boolean | undefined;

  /**
   * <p>Price range with a minimum and maximum value, if a range.</p>
   * @public
   */
  RangeValue?: RouteTollPriceValueRange | undefined;

  /**
   * <p>Exact price, if not a range.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * <p>The toll summary for the complete route.</p>
 * @public
 */
export interface RouteTollSummary {
  /**
   * <p>Total toll summary for the complete route. Total is the only summary available today.</p>
   * @public
   */
  Total?: RouteTollPriceSummary | undefined;
}

/**
 * <p>Summarized details for the leg including travel steps only. The Distance for the travel only portion of the journey is the same as the Distance within the Overview summary.</p>
 * @public
 */
export interface RouteSummary {
  /**
   * <p>Distance of the route.</p>
   * @public
   */
  Distance?: number | undefined;

  /**
   * <p>Duration of the route.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>Toll summary for the complete route.</p>
   * @public
   */
  Tolls?: RouteTollSummary | undefined;
}

/**
 * <p>The route.</p>
 * @public
 */
export interface Route {
  /**
   * <p>A leg is a section of a route from one waypoint to the next. A leg could be of type Vehicle, Pedestrian or Ferry. Legs of different types could occur together within a single route. For example, a car employing the use of a Ferry will contain Vehicle legs corresponding to journey on land, and Ferry legs corresponding to the journey via Ferry.</p>
   * @public
   */
  Legs: RouteLeg[] | undefined;

  /**
   * <p>Important labels including names and route numbers that differentiate the current route from the alternatives presented.</p>
   * @public
   */
  MajorRoadLabels: RouteMajorRoadLabel[] | undefined;

  /**
   * <p>Summarized details of the leg.</p>
   * @public
   */
  Summary?: RouteSummary | undefined;
}

/**
 * @public
 */
export interface CalculateRoutesResponse {
  /**
   * <p>Specifies the format of the geometry returned for each leg of the route.</p>
   * @public
   */
  LegGeometryFormat: GeometryFormat | undefined;

  /**
   * <p> Notices are additional information returned that indicate issues that occurred during route calculation. Not supported in <code>ap-southeast-1</code> and <code>ap-southeast-5</code> regions for <a href="https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html">GrabMaps</a> customers. </p>
   * @public
   */
  Notices: RouteResponseNotice[] | undefined;

  /**
   * <p>The pricing bucket for which the query is charged at.</p>
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * <p>The path from the origin to the destination.</p>
   * @public
   */
  Routes: Route[] | undefined;
}

/**
 * <p>Geometry of the area to be avoided.</p>
 * @public
 */
export interface WaypointOptimizationAvoidanceAreaGeometry {
  /**
   * <p>Geometry defined as a bounding box. The first pair represents the X and Y coordinates (longitude and latitude,) of the southwest corner of the bounding box; the second pair represents the X and Y coordinates (longitude and latitude) of the northeast corner.</p>
   * @public
   */
  BoundingBox?: number[] | undefined;
}

/**
 * <p>The area to be avoided.</p>
 * @public
 */
export interface WaypointOptimizationAvoidanceArea {
  /**
   * <p>Geometry of the area to be avoided.</p>
   * @public
   */
  Geometry: WaypointOptimizationAvoidanceAreaGeometry | undefined;
}

/**
 * <p>Specifies options for areas to avoid. This is a best-effort avoidance setting, meaning the router will try to honor the avoidance preferences but may still include restricted areas if no feasible alternative route exists. If avoidance options are not followed, the response will indicate that the avoidance criteria were violated.</p>
 * @public
 */
export interface WaypointOptimizationAvoidanceOptions {
  /**
   * <p>Areas to be avoided.</p>
   * @public
   */
  Areas?: WaypointOptimizationAvoidanceArea[] | undefined;

  /**
   * <p>Avoidance options for cars-shuttles-trains.</p>
   * @public
   */
  CarShuttleTrains?: boolean | undefined;

  /**
   * <p>Avoid controlled access highways while calculating the route.</p>
   * @public
   */
  ControlledAccessHighways?: boolean | undefined;

  /**
   * <p>Avoid dirt roads while calculating the route.</p>
   * @public
   */
  DirtRoads?: boolean | undefined;

  /**
   * <p>Avoidance options for ferries.</p>
   * @public
   */
  Ferries?: boolean | undefined;

  /**
   * <p>Avoids roads where the specified toll transponders are the only mode of payment.</p>
   * @public
   */
  TollRoads?: boolean | undefined;

  /**
   * <p>Avoid tunnels while calculating the route.</p>
   * @public
   */
  Tunnels?: boolean | undefined;

  /**
   * <p>Avoid U-turns for calculation on highways and motorways.</p>
   * @public
   */
  UTurns?: boolean | undefined;
}

/**
 * <p>Driving distance related options.</p>
 * @public
 */
export interface WaypointOptimizationDrivingDistanceOptions {
  /**
   * <p>DrivingDistance assigns all the waypoints that are within driving distance of each other into a single cluster.</p>
   * @public
   */
  DrivingDistance: number | undefined;
}

/**
 * <p>Options for WaypointOptimizationClustering.</p>
 * @public
 */
export interface WaypointOptimizationClusteringOptions {
  /**
   * <p>The algorithm to be used. <code>DrivingDistance</code> assigns all the waypoints that are within driving distance of each other into a single cluster. <code>TopologySegment</code> assigns all the waypoints that are within the same topology segment into a single cluster. A Topology segment is a linear stretch of road between two junctions.</p>
   * @public
   */
  Algorithm: WaypointOptimizationClusteringAlgorithm | undefined;

  /**
   * <p>Driving distance options to be used when the clustering algorithm is DrivingDistance.</p>
   * @public
   */
  DrivingDistanceOptions?: WaypointOptimizationDrivingDistanceOptions | undefined;
}

/**
 * <p>Hours of entry.</p>
 * @public
 */
export interface WaypointOptimizationAccessHoursEntry {
  /**
   * <p>Day of the week.</p>
   * @public
   */
  DayOfWeek: DayOfWeek | undefined;

  /**
   * <p>Time of the day.</p>
   * @public
   */
  TimeOfDay: string | undefined;
}

/**
 * <p>Access hours corresponding to when a destination can be visited.</p>
 * @public
 */
export interface WaypointOptimizationAccessHours {
  /**
   * <p>Contains the ID of the starting waypoint in this connection.</p>
   * @public
   */
  From: WaypointOptimizationAccessHoursEntry | undefined;

  /**
   * <p>Contains the ID of the ending waypoint in this connection.</p>
   * @public
   */
  To: WaypointOptimizationAccessHoursEntry | undefined;
}

/**
 * <p>Options to configure matching the provided position to a side of the street.</p>
 * @public
 */
export interface WaypointOptimizationSideOfStreetOptions {
  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Strategy that defines when the side of street position should be used. AnyStreet will always use the provided position.</p> <p>Default value: <code>DividedStreetOnly</code> </p>
   * @public
   */
  UseWith?: SideOfStreetMatchingStrategy | undefined;
}

/**
 * <p>Destination related options.</p>
 * @public
 */
export interface WaypointOptimizationDestinationOptions {
  /**
   * <p>Access hours corresponding to when a waypoint can be visited.</p>
   * @public
   */
  AccessHours?: WaypointOptimizationAccessHours | undefined;

  /**
   * <p>Appointment time at the destination.</p>
   * @public
   */
  AppointmentTime?: string | undefined;

  /**
   * <p>GPS Heading at the position.</p>
   * @public
   */
  Heading?: number | undefined;

  /**
   * <p>The waypoint Id.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Service time spent at the destination. At an appointment, the service time should be the appointment duration.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  ServiceDuration?: number | undefined;

  /**
   * <p>Options to configure matching the provided position to a side of the street.</p>
   * @public
   */
  SideOfStreet?: WaypointOptimizationSideOfStreetOptions | undefined;
}

/**
 * <p>Driver work-rest schedules defined by a short and long cycle. A rest needs to be taken after the short work duration. The short cycle can be repeated until you hit the long work duration, at which point the long rest duration should be taken before restarting.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
 * @public
 */
export interface WaypointOptimizationRestCycleDurations {
  /**
   * <p>Resting phase of the cycle.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  RestDuration: number | undefined;

  /**
   * <p>Working phase of the cycle.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  WorkDuration: number | undefined;
}

/**
 * <p>Resting phase of the cycle.</p>
 * @public
 */
export interface WaypointOptimizationRestCycles {
  /**
   * <p>Long cycle for a driver work-rest schedule.</p>
   * @public
   */
  LongCycle: WaypointOptimizationRestCycleDurations | undefined;

  /**
   * <p>Short cycle for a driver work-rest schedule</p>
   * @public
   */
  ShortCycle: WaypointOptimizationRestCycleDurations | undefined;
}

/**
 * <p>Pre defined rest profiles for a driver schedule. The only currently supported profile is EU.</p>
 * @public
 */
export interface WaypointOptimizationRestProfile {
  /**
   * <p>Pre defined rest profiles for a driver schedule. The only currently supported profile is EU.</p>
   * @public
   */
  Profile: string | undefined;
}

/**
 * <p>Driver related options.</p>
 * @public
 */
export interface WaypointOptimizationDriverOptions {
  /**
   * <p>Driver work-rest schedules defined by a short and long cycle. A rest needs to be taken after the short work duration. The short cycle can be repeated until you hit the long work duration, at which point the long rest duration should be taken before restarting.</p>
   * @public
   */
  RestCycles?: WaypointOptimizationRestCycles | undefined;

  /**
   * <p>Pre defined rest profiles for a driver schedule. The only currently supported profile is EU.</p>
   * @public
   */
  RestProfile?: WaypointOptimizationRestProfile | undefined;

  /**
   * <p>If the service time provided at a waypoint/destination should be considered as rest or work. This contributes to the total time breakdown returned within the response.</p>
   * @public
   */
  TreatServiceTimeAs?: WaypointOptimizationServiceTimeTreatment | undefined;
}

/**
 * <p>Specifies strict exclusion options for the route calculation. This setting mandates that the router will avoid any routes that include the specified options, rather than merely attempting to minimize them.</p>
 * @public
 */
export interface WaypointOptimizationExclusionOptions {
  /**
   * <p>List of countries to be avoided defined by two-letter or three-letter country codes.</p>
   * @public
   */
  Countries: string[] | undefined;
}

/**
 * <p>Origin related options.</p>
 * @public
 */
export interface WaypointOptimizationOriginOptions {
  /**
   * <p>The Origin Id.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * <p>Options related to traffic.</p>
 * @public
 */
export interface WaypointOptimizationTrafficOptions {
  /**
   * <p>Determines if traffic should be used or ignored while calculating the route.</p> <p>Default value: <code>UseTrafficData</code> </p>
   * @public
   */
  Usage?: TrafficUsage | undefined;
}

/**
 * <p>Options related to a pedestrian.</p>
 * @public
 */
export interface WaypointOptimizationPedestrianOptions {
  /**
   * <p>Walking speed.</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  Speed?: number | undefined;
}

/**
 * <p>Trailer options corresponding to the vehicle.</p>
 * @public
 */
export interface WaypointOptimizationTrailerOptions {
  /**
   * <p>Number of trailers attached to the vehicle.</p> <p>Default value: <code>0</code> </p>
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * <p>Travel mode options when the provided travel mode is <code>Truck</code>.</p>
 * @public
 */
export interface WaypointOptimizationTruckOptions {
  /**
   * <p>Gross weight of the vehicle including trailers, and goods at capacity.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  GrossWeight?: number | undefined;

  /**
   * <p>List of Hazardous cargo contained in the vehicle.</p>
   * @public
   */
  HazardousCargos?: WaypointOptimizationHazardousCargoType[] | undefined;

  /**
   * <p>Height of the vehicle.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  Height?: number | undefined;

  /**
   * <p>Length of the vehicle.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  Length?: number | undefined;

  /**
   * <p>Trailer options corresponding to the vehicle.</p>
   * @public
   */
  Trailer?: WaypointOptimizationTrailerOptions | undefined;

  /**
   * <p>The type of truck: <code>LightTruck</code> for smaller delivery vehicles, <code> StraightTruck</code> for rigid body trucks, or <code>Tractor</code> for tractor-trailer combinations.</p>
   * @public
   */
  TruckType?: WaypointOptimizationTruckType | undefined;

  /**
   * <p>The tunnel restriction code.</p> <p>Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.</p> <ul> <li> <p> <i>Tunnel Category B</i> </p> <ul> <li> <p> <i>Risk Level</i>: Limited risk</p> </li> <li> <p> <i>Restrictions</i>: Few restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category C</i> </p> <ul> <li> <p> <i>Risk Level</i>: Medium risk</p> </li> <li> <p> <i>Restrictions</i>: Some restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category D</i> </p> <ul> <li> <p> <i>Risk Level</i>: High risk</p> </li> <li> <p> <i>Restrictions</i>: Many restrictions occur</p> </li> </ul> </li> <li> <p> <i>Tunnel Category E</i> </p> <ul> <li> <p> <i>Risk Level</i>: Very high risk</p> </li> <li> <p> <i>Restrictions</i>: Restricted tunnel</p> </li> </ul> </li> </ul>
   * @public
   */
  TunnelRestrictionCode?: string | undefined;

  /**
   * <p>Heaviest weight per axle irrespective of the axle type or the axle group. Meant for usage in countries where the differences in axle types or axle groups are not distinguished.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  WeightPerAxle?: number | undefined;

  /**
   * <p>Width of the vehicle.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  Width?: number | undefined;
}

/**
 * <p>Travel mode related options for the provided travel mode.</p>
 * @public
 */
export interface WaypointOptimizationTravelModeOptions {
  /**
   * <p>Travel mode options when the provided travel mode is <code>Pedestrian</code>.</p>
   * @public
   */
  Pedestrian?: WaypointOptimizationPedestrianOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is <code>Truck</code>.</p>
   * @public
   */
  Truck?: WaypointOptimizationTruckOptions | undefined;
}

/**
 * <p>Waypoint between the Origin and Destination.</p>
 * @public
 */
export interface WaypointOptimizationWaypoint {
  /**
   * <p>Access hours corresponding to when a waypoint can be visited.</p>
   * @public
   */
  AccessHours?: WaypointOptimizationAccessHours | undefined;

  /**
   * <p>Appointment time at the waypoint.</p>
   * @public
   */
  AppointmentTime?: string | undefined;

  /**
   * <p>Constraint defining what waypoints are to be visited after this waypoint.</p>
   * @public
   */
  Before?: number[] | undefined;

  /**
   * <p>GPS Heading at the position.</p>
   * @public
   */
  Heading?: number | undefined;

  /**
   * <p>The waypoint Id.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Service time spent at the waypoint. At an appointment, the service time should be the appointment duration.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  ServiceDuration?: number | undefined;

  /**
   * <p>Options to configure matching the provided position to a side of the street.</p>
   * @public
   */
  SideOfStreet?: WaypointOptimizationSideOfStreetOptions | undefined;
}

/**
 * @public
 */
export interface OptimizeWaypointsRequest {
  /**
   * <p>Features that are avoided. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, this setting is ignored.</p>
   * @public
   */
  Avoid?: WaypointOptimizationAvoidanceOptions | undefined;

  /**
   * <p>Clustering allows you to specify how nearby waypoints can be clustered to improve the optimized sequence.</p>
   * @public
   */
  Clustering?: WaypointOptimizationClusteringOptions | undefined;

  /**
   * <p>Departure time from the waypoint.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  DepartureTime?: string | undefined;

  /**
   * <p>The final position for the route in the World Geodetic System (WGS 84) format: <code>[longitude, latitude]</code>.</p>
   * @public
   */
  Destination?: number[] | undefined;

  /**
   * <p>Destination related options.</p>
   * @public
   */
  DestinationOptions?: WaypointOptimizationDestinationOptions | undefined;

  /**
   * <p>Driver related options.</p>
   * @public
   */
  Driver?: WaypointOptimizationDriverOptions | undefined;

  /**
   * <p>Features to be strictly excluded while calculating the route.</p>
   * @public
   */
  Exclude?: WaypointOptimizationExclusionOptions | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request. </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Specifies the optimization criteria for the calculated sequence.</p> <p>Default value: <code>FastestRoute</code>.</p>
   * @public
   */
  OptimizeSequencingFor?: WaypointOptimizationSequencingObjective | undefined;

  /**
   * <p>The start position for the route in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Origin: number[] | undefined;

  /**
   * <p>Origin related options.</p>
   * @public
   */
  OriginOptions?: WaypointOptimizationOriginOptions | undefined;

  /**
   * <p>Traffic-related options.</p>
   * @public
   */
  Traffic?: WaypointOptimizationTrafficOptions | undefined;

  /**
   * <p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.</p> <p>Default value: <code>Car</code> </p>
   * @public
   */
  TravelMode?: WaypointOptimizationTravelMode | undefined;

  /**
   * <p>Travel mode related options for the provided travel mode.</p>
   * @public
   */
  TravelModeOptions?: WaypointOptimizationTravelModeOptions | undefined;

  /**
   * <p>List of waypoints between the <code>Origin</code> and <code>Destination</code>, in World Geodetic System (WGS 84) format: [longitude, latitude].</p> <p>The maximum number of waypoints allowed per request:</p> <ul> <li> <p>Maximum 50 waypoints per request</p> </li> <li> <p>Maximum 20 waypoints when using constraints (<code>AccessHours</code>, <code>AppointmentTime</code>, <code>ServiceDuration</code>, <code>Heading</code>, <code>SideOfStreet</code>, <code>Before</code>)</p> </li> </ul>
   * @public
   */
  Waypoints?: WaypointOptimizationWaypoint[] | undefined;
}

/**
 * <p>This contains information such as distance and duration from one waypoint to the next waypoint in the sequence.</p>
 * @public
 */
export interface WaypointOptimizationConnection {
  /**
   * <p>Distance of the step.</p>
   * @public
   */
  Distance: number | undefined;

  /**
   * <p>contains the ID of the starting waypoint in this connection.</p>
   * @public
   */
  From: string | undefined;

  /**
   * <p>Resting time before the driver can continue driving.</p>
   * @public
   */
  RestDuration: number | undefined;

  /**
   * <p>Contains the ID of the ending waypoint in this connection.</p>
   * @public
   */
  To: string | undefined;

  /**
   * <p>Total duration.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  TravelDuration: number | undefined;

  /**
   * <p>Duration of a wait step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  WaitDuration: number | undefined;
}

/**
 * <p>The failed constraint.</p>
 * @public
 */
export interface WaypointOptimizationFailedConstraint {
  /**
   * <p>The failed constraint.</p>
   * @public
   */
  Constraint?: WaypointOptimizationConstraint | undefined;

  /**
   * <p>Reason for the failed constraint.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * <p>The impeding waypoint.</p>
 * @public
 */
export interface WaypointOptimizationImpedingWaypoint {
  /**
   * <p>Failed constraints for an impeding waypoint.</p>
   * @public
   */
  FailedConstraints: WaypointOptimizationFailedConstraint[] | undefined;

  /**
   * <p>The waypoint Id.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;
}

/**
 * <p>The optimized waypoint.</p>
 * @public
 */
export interface WaypointOptimizationOptimizedWaypoint {
  /**
   * <p>Estimated time of arrival at the destination.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  ArrivalTime?: string | undefined;

  /**
   * <p>Index of the cluster the waypoint is associated with. The index is included in the response only if clustering was performed while processing the request.</p>
   * @public
   */
  ClusterIndex?: number | undefined;

  /**
   * <p>Estimated time of departure from the origin.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  DepartureTime: string | undefined;

  /**
   * <p>The waypoint Id.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;
}

/**
 * <p>Time breakdown for the sequence.</p>
 * @public
 */
export interface WaypointOptimizationTimeBreakdown {
  /**
   * <p>Resting phase of the cycle.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  RestDuration: number | undefined;

  /**
   * <p>Service time spent at the destination. At an appointment, the service time should be the appointment duration.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  ServiceDuration: number | undefined;

  /**
   * <p>Traveling phase of the cycle.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  TravelDuration: number | undefined;

  /**
   * <p>Waiting phase of the cycle.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  WaitDuration: number | undefined;
}

/**
 * @public
 */
export interface OptimizeWaypointsResponse {
  /**
   * <p>Details about the connection from one waypoint to the next, within the optimized sequence.</p>
   * @public
   */
  Connections: WaypointOptimizationConnection[] | undefined;

  /**
   * <p>Overall distance to travel the whole sequence.</p>
   * @public
   */
  Distance: number | undefined;

  /**
   * <p>Overall duration to travel the whole sequence.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Returns waypoints that caused the optimization problem to fail, and the constraints that were unsatisfied leading to the failure.</p>
   * @public
   */
  ImpedingWaypoints: WaypointOptimizationImpedingWaypoint[] | undefined;

  /**
   * <p>Waypoints in the order of the optimized sequence.</p>
   * @public
   */
  OptimizedWaypoints: WaypointOptimizationOptimizedWaypoint[] | undefined;

  /**
   * <p>The pricing bucket for which the query is charged at.</p>
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * <p>Time breakdown for the sequence.</p>
   * @public
   */
  TimeBreakdown: WaypointOptimizationTimeBreakdown | undefined;
}

/**
 * <p>TracePoint indices for which the provided notice code corresponds to.</p>
 * @public
 */
export interface RoadSnapTracePoint {
  /**
   * <p>GPS Heading at the position.</p>
   * @public
   */
  Heading?: number | undefined;

  /**
   * <p>Position in World Geodetic System (WGS 84) format: [longitude, latitude].</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Speed at the specified trace point .</p> <p> <b>Unit</b>: <code>kilometers per hour</code> </p>
   * @public
   */
  Speed?: number | undefined;

  /**
   * <p>Timestamp of the event.</p>
   * @public
   */
  Timestamp?: string | undefined;
}

/**
 * <p>Trailer options corresponding to the vehicle.</p>
 * @public
 */
export interface RoadSnapTrailerOptions {
  /**
   * <p>Number of trailers attached to the vehicle.</p> <p>Default value: <code>0</code> </p>
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * <p>Travel mode options when the provided travel mode is <code>Truck</code>.</p>
 * @public
 */
export interface RoadSnapTruckOptions {
  /**
   * <p>Gross weight of the vehicle including trailers, and goods at capacity.</p> <p> <b>Unit</b>: <code>kilograms</code> </p>
   * @public
   */
  GrossWeight?: number | undefined;

  /**
   * <p>List of Hazardous cargos contained in the vehicle.</p>
   * @public
   */
  HazardousCargos?: RoadSnapHazardousCargoType[] | undefined;

  /**
   * <p>Height of the vehicle.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  Height?: number | undefined;

  /**
   * <p>Length of the vehicle.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  Length?: number | undefined;

  /**
   * <p>Trailer options corresponding to the vehicle.</p>
   * @public
   */
  Trailer?: RoadSnapTrailerOptions | undefined;

  /**
   * <p>The tunnel restriction code.</p> <p>Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.</p> <ul> <li> <p> <i>Tunnel Category B</i> </p> <ul> <li> <p> <i>Risk Level</i>: Limited risk</p> </li> <li> <p> <i>Restrictions</i>: Few restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category C</i> </p> <ul> <li> <p> <i>Risk Level</i>: Medium risk</p> </li> <li> <p> <i>Restrictions</i>: Some restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category D</i> </p> <ul> <li> <p> <i>Risk Level</i>: High risk</p> </li> <li> <p> <i>Restrictions</i>: Many restrictions occur</p> </li> </ul> </li> <li> <p> <i>Tunnel Category E</i> </p> <ul> <li> <p> <i>Risk Level</i>: Very high risk</p> </li> <li> <p> <i>Restrictions</i>: Restricted tunnel</p> </li> </ul> </li> </ul>
   * @public
   */
  TunnelRestrictionCode?: string | undefined;

  /**
   * <p>Width of the vehicle in centimeters.</p>
   * @public
   */
  Width?: number | undefined;
}

/**
 * <p>Travel mode related options for the provided travel mode.</p>
 * @public
 */
export interface RoadSnapTravelModeOptions {
  /**
   * <p>Travel mode options when the provided travel mode is <code>Truck</code>.</p>
   * @public
   */
  Truck?: RoadSnapTruckOptions | undefined;
}

/**
 * @public
 */
export interface SnapToRoadsRequest {
  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request. </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Chooses what the returned SnappedGeometry format should be.</p> <p>Default value: <code>FlexiblePolyline</code> </p>
   * @public
   */
  SnappedGeometryFormat?: GeometryFormat | undefined;

  /**
   * <p>The radius around the provided tracepoint that is considered for snapping.</p> <p> <b>Unit</b>: <code>meters</code> </p> <p>Default value: <code>300</code> </p>
   * @public
   */
  SnapRadius?: number | undefined;

  /**
   * <p>List of trace points to be snapped onto the road network.</p>
   * @public
   */
  TracePoints: RoadSnapTracePoint[] | undefined;

  /**
   * <p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.</p> <p>Default value: <code>Car</code> </p>
   * @public
   */
  TravelMode?: RoadSnapTravelMode | undefined;

  /**
   * <p>Travel mode related options for the provided travel mode.</p>
   * @public
   */
  TravelModeOptions?: RoadSnapTravelModeOptions | undefined;
}

/**
 * <p>Notices provide information around factors that may have influenced snapping in a manner atypical to the standard use cases.</p>
 * @public
 */
export interface RoadSnapNotice {
  /**
   * <p>Code corresponding to the issue.</p>
   * @public
   */
  Code: RoadSnapNoticeCode | undefined;

  /**
   * <p>The notice title.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>TracePoint indices for which the provided notice code corresponds to.</p>
   * @public
   */
  TracePointIndexes: number[] | undefined;
}

/**
 * <p>Interpolated geometry for the snapped route that is overlay-able onto a map.</p>
 * @public
 */
export interface RoadSnapSnappedGeometry {
  /**
   * <p>An ordered list of positions used to plot a route on a map.</p> <note> <p>LineString and Polyline are mutually exclusive properties.</p> </note>
   * @public
   */
  LineString?: number[][] | undefined;

  /**
   * <p>An ordered list of positions used to plot a route on a map in a lossy compression format.</p> <note> <p>LineString and Polyline are mutually exclusive properties.</p> </note>
   * @public
   */
  Polyline?: string | undefined;
}

/**
 * <p>TracePoints snapped onto the road network.</p>
 * @public
 */
export interface RoadSnapSnappedTracePoint {
  /**
   * <p>Confidence value for the correctness of this point match.</p>
   * @public
   */
  Confidence: number | undefined;

  /**
   * <p>Position of the TracePoint provided within the request, at the same index.</p>
   * @public
   */
  OriginalPosition: number[] | undefined;

  /**
   * <p>Snapped position of the TracePoint provided within the request, at the same index. </p>
   * @public
   */
  SnappedPosition: number[] | undefined;
}

/**
 * @public
 */
export interface SnapToRoadsResponse {
  /**
   * <p>Notices are additional information returned that indicate issues that occurred during route calculation.</p>
   * @public
   */
  Notices: RoadSnapNotice[] | undefined;

  /**
   * <p>The pricing bucket for which the query is charged at.</p>
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * <p>The interpolated geometry for the snapped route onto the road network.</p>
   * @public
   */
  SnappedGeometry?: RoadSnapSnappedGeometry | undefined;

  /**
   * <p>Specifies the format of the geometry returned for each leg of the route.</p>
   * @public
   */
  SnappedGeometryFormat: GeometryFormat | undefined;

  /**
   * <p>The trace points snapped onto the road network. </p>
   * @public
   */
  SnappedTracePoints: RoadSnapSnappedTracePoint[] | undefined;
}
