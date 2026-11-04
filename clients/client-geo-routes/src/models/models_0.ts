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
 * Special road types or features that should be considered available for routing. For example, this attribute can be used to allow the use of HOV (high-occupancy vehicle) or HOT (high-occupancy toll) lanes, even if they would otherwise not be.
 *
 * @public
 */
export interface IsolineAllowOptions {
  /**
   * When true, allows the use of HOT (high-occupancy toll) lanes, which may affect travel times and reachable areas.
   *
   * Default value: `false`
   *
   * @public
   */
  Hot?: boolean | undefined;

  /**
   * When true, allows the use of HOV (high-occupancy vehicle) lanes, which may affect travel times and reachable areas.
   *
   * Default value: `false`
   *
   * @public
   */
  Hov?: boolean | undefined;
}

/**
 * Geometry defined as a corridor - a LineString with a radius that defines the width of the corridor.
 *
 * @public
 */
export interface Corridor {
  /**
   * An ordered list of positions used to plot a route on a map.
   *
   * > **Note:** LineString and Polyline are mutually exclusive properties.
   *
   * @public
   */
  LineString: number[][] | undefined;

  /**
   * Radius that defines the width of the corridor.
   *
   * @public
   */
  Radius: number | undefined;
}

/**
 * Geometry defined as an encoded corridor - an encoded polyline with a radius that defines the width of the corridor.
 *
 * @public
 */
export interface PolylineCorridor {
  /**
   * An ordered list of positions used to plot a route on a map in a lossy compression format.
   *
   * > **Note:** LineString and Polyline are mutually exclusive properties.
   *
   * @public
   */
  Polyline: string | undefined;

  /**
   * Considers all roads within the provided radius to match the provided destination to. The roads that are considered are determined by the provided Strategy.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Radius: number | undefined;
}

/**
 * Defines an area to avoid during calculations using one of several supported geometry types. The service will prefer routes that avoid these areas when possible.
 *
 * @public
 */
export interface IsolineAvoidanceAreaGeometry {
  /**
   * A rectangular area defined by its southwest and northeast corners: `[min longitude, min latitude, max longitude, max latitude]`.
   *
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * A buffer zone around a line, defined by a series of coordinates and a radius in meters.
   *
   * @public
   */
  Corridor?: Corridor | undefined;

  /**
   * A polygon defined by a list of coordinate rings. The first ring defines the outer boundary; subsequent rings will be ignored.
   *
   * @public
   */
  Polygon?: number[][][] | undefined;

  /**
   * A buffer zone around a compressed polyline, defined by an encoded polyline string and a radius in meters. For more information on polyline encoding, see [https://github.com/aws-geospatial/polyline](https://github.com/aws-geospatial/polyline).
   *
   * @public
   */
  PolylineCorridor?: PolylineCorridor | undefined;

  /**
   * A polygon defined by encoded polyline strings. The first string defines the outer boundary; subsequent strings will be ignored. For more information on polyline encoding, see [https://github.com/aws-geospatial/polyline](https://github.com/aws-geospatial/polyline).
   *
   * @public
   */
  PolylinePolygon?: string[] | undefined;
}

/**
 * Defines an area to avoid when calculating routes. Consists of a primary geometry to avoid, with the ability to specify exception areas within that geometry where travel is permitted.
 *
 * @public
 */
export interface IsolineAvoidanceArea {
  /**
   * Areas within the primary avoidance geometry where travel is allowed. For example, you might want to avoid a neighborhood but allow travel on a major road that passes through it.
   *
   * @public
   */
  Except?: IsolineAvoidanceAreaGeometry[] | undefined;

  /**
   * The primary area to avoid, specified using a bounding box, corridor, polygon, or polyline corridor.
   *
   * @public
   */
  Geometry: IsolineAvoidanceAreaGeometry | undefined;
}

/**
 * Types of regulated zones that may affect routing.
 *
 * @public
 */
export interface IsolineAvoidanceZoneCategory {
  /**
   * The type of regulated zone: `CongestionPricing` for toll zones based on traffic levels, `Environmental` for low-emission zones, or `Vignette` for areas requiring special permits or stickers.
   *
   * @public
   */
  Category?: IsolineZoneCategory | undefined;
}

/**
 * Specifies features of the road network to avoid when calculating reachable areas. These preferences guide route calculations but may be overridden when no reasonable alternative exists. For example, if avoiding toll roads would make an area unreachable, toll roads may still be used.
 *
 * Avoidance options include physical features (like ferries and tunnels), road characteristics (like dirt roads and highways), and regulated areas (like congestion zones). They can be combined to match specific routing needs, such as avoiding both toll roads and ferries.
 *
 * @public
 */
export interface IsolineAvoidanceOptions {
  /**
   * Specifies geographic areas to avoid where possible. Routes may still pass through these areas if no reasonable alternative exists.
   *
   * @public
   */
  Areas?: IsolineAvoidanceArea[] | undefined;

  /**
   * Indicates a preference to avoid car shuttle trains (auto trains) where possible. These may still be included if no reasonable alternative route exists.
   *
   * @public
   */
  CarShuttleTrains?: boolean | undefined;

  /**
   * Indicates a preference to avoid controlled-access highways (such as interstate highways or motorways) where possible. If a viable route cannot be calculated using only local roads, controlled-access highways may still be included.
   *
   * @public
   */
  ControlledAccessHighways?: boolean | undefined;

  /**
   * Indicates a preference to avoid unpaved or dirt roads where possible. Routes may still include dirt roads if no reasonable paved alternative exists.
   *
   * @public
   */
  DirtRoads?: boolean | undefined;

  /**
   * Indicates a preference to avoid ferries where possible. If a viable route cannot be calculated without using ferries, they may still be included.
   *
   * @public
   */
  Ferries?: boolean | undefined;

  /**
   * Indicates a preference to avoid roads that may be subject to seasonal closures where possible. These roads may still be included if no reasonable year-round alternative exists.
   *
   * @public
   */
  SeasonalClosure?: boolean | undefined;

  /**
   * Indicates a preference to avoid toll roads where possible. If a viable route cannot be calculated without using toll roads, they may still be included.
   *
   * @public
   */
  TollRoads?: boolean | undefined;

  /**
   * Indicates a preference to avoid roads that require electronic toll collection transponders where possible. These roads may still be included if no viable alternative route exists.
   *
   * @public
   */
  TollTransponders?: boolean | undefined;

  /**
   * For truck travel modes, indicates specific road classification types in Sweden (`BK1` through `BK4`) and Mexico (`A2, A4, B2, B4, C, D, ET2, ET4`) to avoid where possible. These road types may still be used if no reasonable alternative exists.
   *
   * > **Note:** There are currently no other supported values as of 26th April 2024.
   *
   * @public
   */
  TruckRoadTypes?: string[] | undefined;

  /**
   * Indicates a preference to avoid tunnels where possible. If a viable route cannot be calculated without using tunnels, they may still be included.
   *
   * @public
   */
  Tunnels?: boolean | undefined;

  /**
   * Indicates a preference to avoid U-turns where possible. U-turns may still be included if necessary to reach certain areas or when no reasonable alternative exists.
   *
   * @public
   */
  UTurns?: boolean | undefined;

  /**
   * Indicates types of regulated zones (such as congestion pricing or environmental zones) to avoid where possible. Routes may still pass through these zones if no reasonable alternative exists.
   *
   * @public
   */
  ZoneCategories?: IsolineAvoidanceZoneCategory[] | undefined;
}

/**
 * Controls how origin and destination points are matched to the road network when they don't fall exactly on a road. Matching options help ensure realistic routing by connecting points to appropriate roads.
 *
 * @public
 */
export interface IsolineMatchingOptions {
  /**
   * The expected street name near the point. Helps disambiguate matching when multiple roads are within range.
   *
   * @public
   */
  NameHint?: string | undefined;

  /**
   * The maximum distance in meters that a point can be from a road while still being considered "on" that road. Points further than this distance require explicit matching.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  OnRoadThreshold?: number | undefined;

  /**
   * The maximum distance in meters to search for roads to match to. Points with no roads within this radius will fail to match. The roads that are considered within this radius are determined by the specified `Strategy`
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Radius?: number | undefined;

  /**
   * Determines how points are matched to the road network. `MatchAny` finds the nearest viable road segment, while `MatchMostSignificantRoad` prioritizes major roads.
   *
   * @public
   */
  Strategy?: MatchingStrategy | undefined;
}

/**
 * Controls how points are matched to specific sides of streets. This is important when the side of the street matters for accessibility - for example, when building entrances or parking lot access points can only be reached from one side of a divided road.
 *
 * @public
 */
export interface IsolineSideOfStreetOptions {
  /**
   * The `[longitude, latitude]` coordinates of the point that should be matched to a specific side of the street.
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Controls whether side-of-street matching is applied to any street (`AnyStreet`) or only to divided roads (`DividedStreetOnly`). This is important when the exact side of the street matters - for example, if a building entrance is only accessible from one side of a divided highway, or if a parking lot can only be entered from northbound lanes. Without correct side-of-street matching, travel time estimates may be inaccurate because they don't account for necessary U-turns or detours to reach the correct side.
   *
   * Default value: `DividedStreetOnly`
   *
   * @public
   */
  UseWith?: SideOfStreetMatchingStrategy | undefined;
}

/**
 * Options that control how the destination point is interpreted and matched to the road network when calculating reachable areas. This affects which roads are considered accessible near the destination and how the final approach is calculated.
 *
 * @public
 */
export interface IsolineDestinationOptions {
  /**
   * The distance in meters from the destination point within which certain routing actions (such as U-turns or left turns across traffic) are restricted. This helps generate more practical routes by avoiding potentially dangerous maneuvers near the endpoint.
   *
   * @public
   */
  AvoidActionsForDistance?: number | undefined;

  /**
   * The initial direction of travel in degrees (0-360, where 0 is north). This can affect which road segments are considered accessible from the starting point.
   *
   * @public
   */
  Heading?: number | undefined;

  /**
   * Controls how the destination point is matched to the road network, including search radius and name-based matching preferences.
   *
   * @public
   */
  Matching?: IsolineMatchingOptions | undefined;

  /**
   * Specifies which side of the street should be considered accessible, which is important when building entrances or parking access points are only reachable from one side of the road.
   *
   * @public
   */
  SideOfStreet?: IsolineSideOfStreetOptions | undefined;
}

/**
 * Controls the detail level and smoothness of generated isolines. More detailed isolines provide better visual representation of reachable areas but require more processing time and result in larger responses.
 *
 * @public
 */
export interface IsolineGranularityOptions {
  /**
   * The maximum number of points used to define each isoline. Higher values create smoother, more detailed shapes.
   *
   * @public
   */
  MaxPoints?: number | undefined;

  /**
   * The maximum distance in meters between points along the isoline. Smaller values create more detailed shapes.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  MaxResolution?: number | undefined;
}

/**
 * Options that control how the origin point is interpreted when calculating reachable areas. These options affect which roads are considered accessible from the starting point and how initial routing decisions are made.
 *
 * @public
 */
export interface IsolineOriginOptions {
  /**
   * The distance in meters from the origin point within which certain routing actions (such as U-turns or left turns across traffic) are restricted. This helps generate more practical routes by avoiding potentially dangerous maneuvers near the starting point.
   *
   * @public
   */
  AvoidActionsForDistance?: number | undefined;

  /**
   * Initial direction of travel in degrees (0-360, where 0 is north). This affects which road segments are considered accessible from the starting point and is particularly useful when the origin is on a divided road or at a complex intersection.
   *
   * @public
   */
  Heading?: number | undefined;

  /**
   * Controls how the origin point is matched to the road network, including search radius and matching strategy.
   *
   * @public
   */
  Matching?: IsolineMatchingOptions | undefined;

  /**
   * Controls which side of the street is considered accessible from the origin point, particularly important for divided roads where building entrances or parking access may only be available from one direction.
   *
   * @public
   */
  SideOfStreet?: IsolineSideOfStreetOptions | undefined;
}

/**
 * Specifies the time or distance limits used to calculate reachable areas. You can provide up to five thresholds for a single type to generate multiple isolines in a single request. For example, you might request areas reachable within 5, 10, and 15 minutes, or within 1, 2, and 5 kilometers.
 *
 * @public
 */
export interface IsolineThresholds {
  /**
   * List of travel distances in meters. For example, [1000, 2000, 5000] would calculate areas reachable within 1, 2, and 5 kilometers.
   *
   * @public
   */
  Distance?: number[] | undefined;

  /**
   * List of travel times in seconds. For example, [300, 600, 900] would calculate areas reachable within 5, 10, and 15 minutes.
   *
   * @public
   */
  Time?: number[] | undefined;
}

/**
 * Controls how real-time and historical traffic data is used when calculating reachable areas. This affects both the size and shape of isolines by accounting for expected travel speeds based on congestion patterns.
 *
 * @public
 */
export interface IsolineTrafficOptions {
  /**
   * The duration in seconds that real-time congestion data is considered valid before reverting to historical traffic patterns. This helps balance between using current conditions and more predictable historical data when calculating travel times.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  FlowEventThresholdOverride?: number | undefined;

  /**
   * Controls whether traffic data is used in calculations. `UseTrafficData` considers both real-time congestion and historical patterns, while `IgnoreTrafficData` calculates routes based solely on road types and speed limits. Using traffic data provides more accurate real-world estimates but may produce different results at different times of day.
   *
   * Default value: `UseTrafficData`
   *
   * @public
   */
  Usage?: TrafficUsage | undefined;
}

/**
 * License plate information used in regions where road access or routing restrictions are based on license plate numbers.
 *
 * @public
 */
export interface IsolineVehicleLicensePlate {
  /**
   * The last character of the vehicle's license plate. Used to determine road access restrictions in regions with license plate-based traffic management systems.
   *
   * @public
   */
  LastCharacter?: string | undefined;
}

/**
 * Vehicle characteristics and preferences that affect routing for passenger cars. This includes vehicle type, occupancy, and speed restrictions that may influence which roads can be used and expected travel times.
 *
 * @public
 */
export interface IsolineCarOptions {
  /**
   * The type of engine powering the vehicle, which may affect route calculation due to road restrictions or vehicle characteristics.
   *
   * - `INTERNAL_COMBUSTION`—Standard gasoline or diesel engine.
   * - `ELECTRIC`—Battery electric vehicle.
   * - `PLUGIN_HYBRID`—Combination of electric and internal combustion engines with plug-in charging capability.
   *
   * @public
   */
  EngineType?: IsolineEngineType | undefined;

  /**
   * License plate information used in regions where road access or routing restrictions are based on license plate numbers.
   *
   * @public
   */
  LicensePlate?: IsolineVehicleLicensePlate | undefined;

  /**
   * The maximum speed of the vehicle in kilometers per hour. When specified, routes will not include roads with higher speed limits. Valid values range from 3.6 km/h (1 m/s) to 252 km/h (70 m/s).
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * The number of occupants in the vehicle. This can affect route calculations by enabling the use of high-occupancy vehicle (HOV) lanes where minimum occupancy requirements are met.
   *
   * Default value: `1`
   *
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * Vehicle characteristics that affect which roads and paths can be used when calculating reachable areas for scooters. This includes areas such as bike lanes, shared paths, and roads where scooters are permitted.
 *
 * @public
 */
export interface IsolineScooterOptions {
  /**
   * The type of engine powering the vehicle, which may affect route calculation due to road restrictions or vehicle characteristics.
   *
   * - `INTERNAL_COMBUSTION`—Standard gasoline or diesel engine.
   * - `ELECTRIC`—Battery electric vehicle.
   * - `PLUGIN_HYBRID`—Combination of electric and internal combustion engines with plug-in charging capability.
   *
   * @public
   */
  EngineType?: IsolineEngineType | undefined;

  /**
   * License plate information used in regions where road access or routing restrictions are based on license plate numbers.
   *
   * @public
   */
  LicensePlate?: IsolineVehicleLicensePlate | undefined;

  /**
   * The maximum speed of the vehicle in kilometers per hour. When specified, routes will not include roads with higher speed limits. Valid values range from 3.6 km/h (1 m/s) to 252 km/h (70 m/s).
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * The number of occupants in the vehicle. This can affect route calculations by enabling the use of high-occupancy vehicle (HOV) lanes where minimum occupancy requirements are met.
   *
   * Default value: `1`
   *
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * Additional specifications when the vehicle includes one or more trailers.
 *
 * @public
 */
export interface IsolineTrailerOptions {
  /**
   * The total number of axles across all trailers. Used for weight distribution calculations and road restrictions.
   *
   * @public
   */
  AxleCount?: number | undefined;

  /**
   * The number of trailers being pulled. Affects which roads can be used based on local regulations.
   *
   * Default value: `0`
   *
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * Specifies the total weight for different axle group configurations. Used in regions where regulations set different weight limits based on axle group types.
 *
 * **Unit**: `kilograms`
 *
 * @public
 */
export interface WeightPerAxleGroup {
  /**
   * Total weight in kilograms for single axle configurations.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  Single?: number | undefined;

  /**
   * Total weight in kilograms for tandem (two adjacent) axle configurations.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  Tandem?: number | undefined;

  /**
   * Total weight in kilograms for triple (three adjacent) axle configurations.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  Triple?: number | undefined;

  /**
   * Total weight in kilograms for quad (four adjacent) axle configurations.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  Quad?: number | undefined;

  /**
   * Total weight in kilograms for quint (five adjacent) axle configurations.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  Quint?: number | undefined;
}

/**
 * Vehicle characteristics and restrictions that affect which roads can be used when calculating reachable areas for trucks. These details ensure that routes respect physical limitations and legal requirements.
 *
 * These apply when the provided travel mode is `Truck`
 *
 * @public
 */
export interface IsolineTruckOptions {
  /**
   * The total number of axles on the vehicle. Required for certain road restrictions and weight limit calculations.
   *
   * @public
   */
  AxleCount?: number | undefined;

  /**
   * The type of engine powering the vehicle, which may affect route calculation due to road restrictions or vehicle characteristics.
   *
   * - `INTERNAL_COMBUSTION`—Standard gasoline or diesel engine.
   * - `ELECTRIC`—Battery electric vehicle.
   * - `PLUGIN_HYBRID`—Combination of electric and internal combustion engines with plug-in charging capability.
   *
   * @public
   */
  EngineType?: IsolineEngineType | undefined;

  /**
   * The gross vehicle weight (the maximum weight a vehicle can safely operate at, as specified by the manufacturer) in kilograms. Used to avoid roads with weight restrictions and ensure compliance with maximum allowed vehicle weight regulations.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  GrossWeight?: number | undefined;

  /**
   * Types of hazardous materials being transported. This affects which roads and tunnels can be used based on local regulations.
   *
   * - `Combustible`—Materials that can burn readily
   * - `Corrosive`—Materials that can destroy or irreversibly damage other substances
   * - `Explosive`—Materials that can produce an explosion by chemical reaction
   * - `Flammable`—Materials that can easily ignite
   * - `Gas`—Hazardous materials in gaseous form
   * - `HarmfulToWater`—Materials that pose a risk to water sources if released
   * - `Organic`—Hazardous organic compounds
   * - `Other`—Hazardous materials not covered by other categories
   * - `Poison`—Toxic materials
   * - `PoisonousInhalation`—Materials that are toxic when inhaled
   * - `Radioactive`—Materials that emit ionizing radiation
   *
   * @public
   */
  HazardousCargos?: IsolineHazardousCargoType[] | undefined;

  /**
   * The vehicle height in centimeters. Used to avoid routes with low bridges or other height restrictions.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  Height?: number | undefined;

  /**
   * The height in centimeters measured from the ground to the highest point above the first axle. Used for specific bridge and tunnel clearance restrictions.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  HeightAboveFirstAxle?: number | undefined;

  /**
   * The kingpin to rear axle (KPRA) length in centimeters. Used to determine if the vehicle can safely navigate turns and intersections.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  KpraLength?: number | undefined;

  /**
   * The total vehicle length in centimeters. Used to avoid roads with length restrictions and determine if the vehicle can safely navigate turns.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  Length?: number | undefined;

  /**
   * License plate information used in regions where road access or routing restrictions are based on license plate numbers.
   *
   * @public
   */
  LicensePlate?: IsolineVehicleLicensePlate | undefined;

  /**
   * The maximum speed in kilometers per hour at which the vehicle can or is permitted to travel. This affects travel time calculations and may result in different reachable areas compared to using default speed limits. Value must be between 3.6 and 252 kilometers per hour.
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * The number of occupants in the vehicle. This can affect route calculations by enabling the use of high-occupancy vehicle (HOV) lanes where minimum occupancy requirements are met.
   *
   * Default value: `1`
   *
   * @public
   */
  Occupancy?: number | undefined;

  /**
   * The maximum cargo weight in kilograms that the vehicle (including attached trailers) is rated to carry.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  PayloadCapacity?: number | undefined;

  /**
   * The total number of tires on the vehicle.
   *
   * @public
   */
  TireCount?: number | undefined;

  /**
   * Optional specifications for attached trailers. When provided, trailer characteristics affect route calculations to ensure compliance with trailer-specific restrictions such as length limits, weight distribution requirements, and access restrictions for multi-trailer configurations.
   *
   * @public
   */
  Trailer?: IsolineTrailerOptions | undefined;

  /**
   * The type of truck: `LightTruck` for smaller delivery vehicles, `StraightTruck` for rigid body trucks, or `Tractor` for tractor-trailer combinations.
   *
   * @public
   */
  TruckType?: IsolineTruckType | undefined;

  /**
   * The tunnel restriction code.
   *
   * Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.
   *
   * - *Tunnel Category B*
   *
   *   - *Risk Level*: Limited risk
   *   - *Restrictions*: Few restrictions
   * - *Tunnel Category C*
   *
   *   - *Risk Level*: Medium risk
   *   - *Restrictions*: Some restrictions
   * - *Tunnel Category D*
   *
   *   - *Risk Level*: High risk
   *   - *Restrictions*: Many restrictions occur
   * - *Tunnel Category E*
   *
   *   - *Risk Level*: Very high risk
   *   - *Restrictions*: Restricted tunnel
   *
   * @public
   */
  TunnelRestrictionCode?: string | undefined;

  /**
   * The heaviest weight per axle in kilograms, regardless of axle type or grouping. Used for roads with axle-weight restrictions in regions where regulations don't distinguish between different axle configurations.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  WeightPerAxle?: number | undefined;

  /**
   * Specifies the total weight for different axle group configurations. Used in regions where regulations set different weight limits based on axle group types.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  WeightPerAxleGroup?: WeightPerAxleGroup | undefined;

  /**
   * The vehicle width in centimeters. Used to avoid routes with width restrictions.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  Width?: number | undefined;
}

/**
 * Mode-specific routing options that further refine how reachable areas are calculated. Options are only considered when they match the selected travel mode.
 *
 * @public
 */
export interface IsolineTravelModeOptions {
  /**
   * Options specific to passenger vehicle routing (`Car`, such as vehicle characteristics and license plate restrictions.
   *
   * @public
   */
  Car?: IsolineCarOptions | undefined;

  /**
   * Options specific to scooter routing (`Scooter`, such as vehicle characteristics and license plate restrictions.
   *
   * > **Note:** When using the `Scooter` travel mode, controlled-access highways are automatically avoided unless explicitly allowed.
   *
   * @public
   */
  Scooter?: IsolineScooterOptions | undefined;

  /**
   * Options specific to commercial truck routing (`Truck`, including vehicle dimensions, weight limits, and hazardous cargo specifications.
   *
   * @public
   */
  Truck?: IsolineTruckOptions | undefined;
}

/**
 * @public
 */
export interface CalculateIsolinesRequest {
  /**
   * Enables special road types or features that should be considered for routing even if they might be restricted by default for the selected travel mode. These include high-occupancy vehicle and toll lanes.
   *
   * @public
   */
  Allow?: IsolineAllowOptions | undefined;

  /**
   * Determine areas from which `Destination` can be reached by this time, taking into account predicted traffic conditions and working backward to account for congestion patterns. This attribute cannot be used together with `DepartureTime` or `DepartNow`. Specified as an ISO-8601 timestamp with timezone offset.
   *
   * Time format: `YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm`
   *
   * Examples:
   *
   * `2020-04-22T17:57:24Z`
   *
   * `2020-04-22T17:57:24+02:00`
   *
   * @public
   */
  ArrivalTime?: string | undefined;

  /**
   * Specifies road types, features, or areas to avoid (if possible) when calculating reachable areas. These are treated as preferences rather than strict constraints—if a route cannot be calculated without using an avoided feature, that avoidance preference may be ignored.
   *
   * @public
   */
  Avoid?: IsolineAvoidanceOptions | undefined;

  /**
   * When true, uses the current time as the departure time and takes current traffic conditions into account. This attribute cannot be used together with `DepartureTime` or `ArrivalTime`.
   *
   * @public
   */
  DepartNow?: boolean | undefined;

  /**
   * Determine areas that can be reached when departing at this time, taking into account predicted traffic conditions. This attribute cannot be used together with `ArrivalTime` or `DepartNow`. Specified as an ISO-8601 timestamp with timezone offset.
   *
   * Time format:`YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm`
   *
   * Examples:
   *
   * `2020-04-22T17:57:24Z`
   *
   * `2020-04-22T17:57:24+02:00`
   *
   * @public
   */
  DepartureTime?: string | undefined;

  /**
   * An optional destination point, specified as `[longitude, latitude]` coordinates. When provided, the service calculates areas from which this destination can be reached within the specified thresholds. This reverses the usual isoline calculation to show areas that could reach your location, rather than areas you could reach from your location. Either `Origin` or `Destination` must be provided.
   *
   * @public
   */
  Destination?: number[] | undefined;

  /**
   * Options that control how the destination point is matched to the road network and how routes can approach it. These options help improve travel time accuracy by accounting for real-world access to the destination.
   *
   * @public
   */
  DestinationOptions?: IsolineDestinationOptions | undefined;

  /**
   * The format of the returned IsolineGeometry.
   *
   * Default value:`FlexiblePolyline`
   *
   * @public
   */
  IsolineGeometryFormat?: GeometryFormat | undefined;

  /**
   * Controls the detail level of the generated isolines. Higher granularity produces smoother shapes but requires more processing time and results in larger responses.
   *
   * @public
   */
  IsolineGranularity?: IsolineGranularityOptions | undefined;

  /**
   * An Amazon Location Service API Key with access to this action. If omitted, the request must be signed using Signature Version 4.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Controls the trade-off between calculation speed and isoline precision. Choose `FastCalculation` for quicker results with less detail, `AccurateCalculation` for more precise results, or `BalancedCalculation` for a middle ground.
   *
   * Default value: `BalancedCalculation`
   *
   * @public
   */
  OptimizeIsolineFor?: IsolineOptimizationObjective | undefined;

  /**
   * Determines whether routes prioritize shortest travel time (`FastestRoute`) or shortest physical distance (`ShortestRoute`) when calculating reachable areas.
   *
   * Default value: `FastestRoute`
   *
   * @public
   */
  OptimizeRoutingFor?: RoutingObjective | undefined;

  /**
   * The starting point for isoline calculations, specified as `[longitude, latitude]` coordinates. For example, this could be a store location, service center, or any point from which you want to calculate reachable areas. Either `Origin` or `Destination` must be provided.
   *
   * @public
   */
  Origin?: number[] | undefined;

  /**
   * Options that control how the origin point is matched to the road network and how routes can depart from it. These options help improve travel time accuracy by accounting for real-world access from the origin.
   *
   * @public
   */
  OriginOptions?: IsolineOriginOptions | undefined;

  /**
   * The distance or time thresholds used to determine reachable areas. You can specify up to five thresholds (which all must be the same type) to calculate multiple isolines in a single request. For example, to determine the areas that are reachable within 10 and 20 minutes of the origin, specify time thresholds of 600 and 1200 seconds.
   *
   * You incur a calculation charge for each threshold. Using a large number of thresholds in a request can lead to unexpected charges. For more information, see [Routes pricing](https://docs.aws.amazon.com/location/latest/developerguide/routes-pricing.html) in the *Amazon Location Service Developer Guide*.
   *
   * @public
   */
  Thresholds: IsolineThresholds | undefined;

  /**
   * Configures how real-time and historical traffic data affects isoline calculations. Traffic patterns can significantly impact reachable areas, especially during peak hours.
   *
   * @public
   */
  Traffic?: IsolineTrafficOptions | undefined;

  /**
   * The mode of transportation to use for calculations. This affects which road types or features can be used, estimated speed, and the traffic levels that are applied.
   *
   * - `Car`—Standard passenger vehicle routing using roads accessible to cars
   * - `Pedestrian`—Walking routes using pedestrian paths, sidewalks, and crossings
   * - `Scooter`—Light two-wheeled vehicle routing using roads and paths accessible to scooters
   * - `Truck`—Commercial truck routing considering vehicle dimensions, weight restrictions, and hazardous material regulations
   *
   * > **Note:** The mode `Scooter` also applies to motorcycles; set this to `Scooter` when calculating isolines for motorcycles.
   *
   * Default value: `Car`
   *
   * @public
   */
  TravelMode?: IsolineTravelMode | undefined;

  /**
   * Additional attributes that refine how reachable areas are calculated based on specific vehicle characteristics. These options help produce more accurate results by accounting for real-world constraints and capabilities.
   *
   * For example:
   *
   * - For trucks (`Truck`), specify dimensions, weight limits, and hazardous cargo restrictions to ensure isolines only include roads that can physically and legally accommodate the vehicle
   * - For cars (`Car`), set maximum speed capabilities or indicate high-occupancy vehicle eligibility to better estimate reachable areas
   * - For scooters (`Scooter`), specify engine type and speed limitations to more accurately model their travel capabilities
   *
   * Without these options, calculations use default assumptions that may not match your specific use case.
   *
   * @public
   */
  TravelModeOptions?: IsolineTravelModeOptions | undefined;
}

/**
 * Represents the geometry of connections between non-contiguous parts of an isoline. These connections can be provided in either coordinate pairs (LineString) or encoded (Polyline) format, matching the format specified in the request.
 *
 * @public
 */
export interface IsolineConnectionGeometry {
  /**
   * A series of `[longitude, latitude]` coordinate pairs defining the connection path when `Simple` geometry format is requested. These coordinates can be directly used as the coordinates array in a GeoJSON LineString without transformation.
   *
   * > **Note:** LineString and Polyline are mutually exclusive properties.
   *
   * @public
   */
  LineString?: number[][] | undefined;

  /**
   * An encoded representation of the connection path when `FlexiblePolyline` geometry format is requested. This provides a more compact representation suitable for transmission and storage. To convert to GeoJSON, first decode to obtain coordinate pairs, then use those coordinates as the coordinates array in a GeoJSON LineString.
   *
   * > **Note:** LineString and Polyline are mutually exclusive properties.
   *
   * @public
   */
  Polyline?: string | undefined;
}

/**
 * Represents a segment of the transportation network that connects separate parts of a reachable area. These connections show how discontinuous areas are linked, such as by ferry routes or bridges crossing unroutable terrain.
 *
 * @public
 */
export interface IsolineConnection {
  /**
   * The index of the starting polygon in the isoline's `Geometries` list.
   *
   * @public
   */
  FromPolygonIndex: number | undefined;

  /**
   * The shape of the connection, representing the actual path through the transportation network that links the polygons.
   *
   * @public
   */
  Geometry: IsolineConnectionGeometry | undefined;

  /**
   * The index of the ending polygon in the isoline's `Geometries` list.
   *
   * @public
   */
  ToPolygonIndex: number | undefined;
}

/**
 * Represents the shape of a reachable area. The geometry can be provided either as coordinate pairs (`Polygon`) or in encoded format (`PolylinePolygon`), matching the format specified in the request.
 *
 * @public
 */
export interface IsolineShapeGeometry {
  /**
   * A series of coordinate rings defining the reachable area when Simple geometry format is requested. Each ring is a list of `[longitude, latitude]` coordinate pairs. The first ring defines the outer boundary; subsequent rings define holes representing unreachable areas.
   *
   * > **Note:** Polygon and PolylinePolygon are mutually exclusive properties.
   *
   * @public
   */
  Polygon?: number[][][] | undefined;

  /**
   * An encoded representation of the reachable area when FlexiblePolyline geometry format is requested. Provides a compact representation suitable for transmission and storage. The first string defines the outer boundary; subsequent strings define holes representing unreachable areas. For more information on polyline encoding, see [https://github.com/aws-geospatial/polyline](https://github.com/aws-geospatial/polyline).
   *
   * > **Note:** Polygon and PolylinePolygon are mutually exclusive properties.
   *
   * @public
   */
  PolylinePolygon?: string[] | undefined;
}

/**
 * Represents a single reachable area calculated for a specific threshold.
 *
 * @public
 */
export interface Isoline {
  /**
   * Lines connecting separate parts of the reachable area that can be reached within the same threshold. These occur when areas are reachable but not contiguous, such as when separated by water or unroutable areas. When present, these lines represent actual transportation network segments (such as ferry routes or bridges) that connect the separated areas.
   *
   * @public
   */
  Connections: IsolineConnection[] | undefined;

  /**
   * The travel distance in meters used to calculate this isoline, if distance-based thresholds were specified in the request.
   *
   * @public
   */
  DistanceThreshold?: number | undefined;

  /**
   * The shapes that define the reachable area, provided in the requested geometry format.
   *
   * @public
   */
  Geometries: IsolineShapeGeometry[] | undefined;

  /**
   * The travel time in seconds used to calculate this isoline, if time-based thresholds were specified in the request.
   *
   * @public
   */
  TimeThreshold?: number | undefined;
}

/**
 * @public
 */
export interface CalculateIsolinesResponse {
  /**
   * Time of arrival at the destination, used for traffic calculations. This attribute is returned only if the `Destination` and `ArrivalTime` attributes were provided in the request.
   *
   * Time format: `YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm`
   *
   * Examples:
   *
   * `2020-04-22T17:57:24Z`
   *
   * `2020-04-22T17:57:24+02:00`
   *
   * @public
   */
  ArrivalTime?: string | undefined;

  /**
   * Time of departure from the origin, used for traffic calculations. This attribute is returned when `Origin` was provided in the request and either a specific departure time was requested (`DepartureTime`) or `DepartNow` was set to true.
   *
   * Time format: `YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm`
   *
   * Examples:
   *
   * `2020-04-22T17:57:24Z`
   *
   * `2020-04-22T17:57:24+02:00`
   *
   * @public
   */
  DepartureTime?: string | undefined;

  /**
   * The format of the returned geometries, matching the format specified in the request. Either `FlexiblePolyline` for compact encoding or `Simple` for GeoJSON-compatible coordinates.
   *
   * Default value:`FlexiblePolyline`
   *
   * @public
   */
  IsolineGeometryFormat: GeometryFormat | undefined;

  /**
   * Reachable areas, or isolines, for each threshold specified in the request.
   *
   * @public
   */
  Isolines: Isoline[] | undefined;

  /**
   * The pricing bucket applied to this calculation. Different buckets apply based on the travel mode and thresholds used.
   *
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * The actual point on the road network used for calculations, which may differ from the requested destination if `Destination` was not directly on a road.
   *
   * @public
   */
  SnappedDestination?: number[] | undefined;

  /**
   * The actual point on the road network used for calculations, which may differ from the requested origin if `Origin` was not directly on a road.
   *
   * @public
   */
  SnappedOrigin?: number[] | undefined;
}

/**
 * The input fails to satisfy the constraints specified by the Amazon Location service.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the Validation Exception Field.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * Allow Options related to the route matrix.
 *
 * @public
 */
export interface RouteMatrixAllowOptions {
  /**
   * Allow Hot (High Occupancy Toll) lanes while calculating the route.
   *
   * Default value: `false`
   *
   * @public
   */
  Hot?: boolean | undefined;

  /**
   * Allow Hov (High Occupancy vehicle) lanes while calculating the route.
   *
   * Default value: `false`
   *
   * @public
   */
  Hov?: boolean | undefined;
}

/**
 * Geometry of the area to be avoided.
 *
 * @public
 */
export interface RouteMatrixAvoidanceAreaGeometry {
  /**
   * Geometry defined as a bounding box. The first pair represents the X and Y coordinates (longitude and latitude,) of the southwest corner of the bounding box; the second pair represents the X and Y coordinates (longitude and latitude) of the northeast corner.
   *
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * Geometry defined as a polygon with only one linear ring.
   *
   * @public
   */
  Polygon?: number[][][] | undefined;

  /**
   * A list of Isoline PolylinePolygon, for each isoline PolylinePolygon, it contains PolylinePolygon of the first linear ring (the outer ring) and from second item to the last item (the inner rings). For more information on polyline encoding, see [https://github.com/aws-geospatial/polyline](https://github.com/aws-geospatial/polyline).
   *
   * @public
   */
  PolylinePolygon?: string[] | undefined;
}

/**
 * Area to be avoided.
 *
 * @public
 */
export interface RouteMatrixAvoidanceArea {
  /**
   * Geometry of the area to be avoided.
   *
   * @public
   */
  Geometry: RouteMatrixAvoidanceAreaGeometry | undefined;
}

/**
 * Zone categories to be avoided.
 *
 * @public
 */
export interface RouteMatrixAvoidanceZoneCategory {
  /**
   * Zone category to be avoided.
   *
   * @public
   */
  Category?: RouteMatrixZoneCategory | undefined;
}

/**
 * Specifies options for areas to avoid when calculating the route. This is a best-effort avoidance setting, meaning the router will try to honor the avoidance preferences but may still include restricted areas if no feasible alternative route exists. If avoidance options are not followed, the response will indicate that the avoidance criteria were violated.
 *
 * @public
 */
export interface RouteMatrixAvoidanceOptions {
  /**
   * Areas to be avoided.
   *
   * @public
   */
  Areas?: RouteMatrixAvoidanceArea[] | undefined;

  /**
   * Avoid car-shuttle-trains while calculating the route.
   *
   * @public
   */
  CarShuttleTrains?: boolean | undefined;

  /**
   * Avoid controlled access highways while calculating the route.
   *
   * @public
   */
  ControlledAccessHighways?: boolean | undefined;

  /**
   * Avoid dirt roads while calculating the route.
   *
   * @public
   */
  DirtRoads?: boolean | undefined;

  /**
   * Avoid ferries while calculating the route.
   *
   * @public
   */
  Ferries?: boolean | undefined;

  /**
   * Avoids roads where the specified toll transponders are the only mode of payment.
   *
   * @public
   */
  TollRoads?: boolean | undefined;

  /**
   * Avoids roads where the specified toll transponders are the only mode of payment.
   *
   * @public
   */
  TollTransponders?: boolean | undefined;

  /**
   * Truck road type identifiers. `BK1` through `BK4` apply only to Sweden. `A2,A4,B2,B4,C,D,ET2,ET4` apply only to Mexico.
   *
   * > **Note:** There are currently no other supported values as of 26th April 2024.
   *
   * @public
   */
  TruckRoadTypes?: string[] | undefined;

  /**
   * Avoid tunnels while calculating the route.
   *
   * @public
   */
  Tunnels?: boolean | undefined;

  /**
   * Avoid U-turns for calculation on highways and motorways.
   *
   * @public
   */
  UTurns?: boolean | undefined;

  /**
   * Zone categories to be avoided.
   *
   * @public
   */
  ZoneCategories?: RouteMatrixAvoidanceZoneCategory[] | undefined;
}

/**
 * Matching options.
 *
 * @public
 */
export interface RouteMatrixMatchingOptions {
  /**
   * Attempts to match the provided position to a road similar to the provided name.
   *
   * @public
   */
  NameHint?: string | undefined;

  /**
   * If the distance to a highway/bridge/tunnel/sliproad is within threshold, the waypoint will be snapped to the highway/bridge/tunnel/sliproad.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  OnRoadThreshold?: number | undefined;

  /**
   * Considers all roads within the provided radius to match the provided destination to. The roads that are considered are determined by the provided Strategy.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Radius?: number | undefined;

  /**
   * Strategy that defines matching of the position onto the road network. MatchAny considers all roads possible, whereas MatchMostSignificantRoad matches to the most significant road.
   *
   * @public
   */
  Strategy?: MatchingStrategy | undefined;
}

/**
 * Options to configure matching the provided position to a side of the street.
 *
 * @public
 */
export interface RouteMatrixSideOfStreetOptions {
  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Strategy that defines when the side of street position should be used. AnyStreet will always use the provided position.
   *
   * Default value: `DividedStreetOnly`
   *
   * @public
   */
  UseWith?: SideOfStreetMatchingStrategy | undefined;
}

/**
 * Options related to the destination.
 *
 * @public
 */
export interface RouteMatrixDestinationOptions {
  /**
   * Avoids actions for the provided distance. This is typically to consider for users in moving vehicles who may not have sufficient time to make an action at an origin or a destination.
   *
   * @public
   */
  AvoidActionsForDistance?: number | undefined;

  /**
   * GPS Heading at the position.
   *
   * @public
   */
  Heading?: number | undefined;

  /**
   * Options to configure matching the provided position to the road network.
   *
   * @public
   */
  Matching?: RouteMatrixMatchingOptions | undefined;

  /**
   * Options to configure matching the provided position to a side of the street.
   *
   * @public
   */
  SideOfStreet?: RouteMatrixSideOfStreetOptions | undefined;
}

/**
 * The route destination.
 *
 * @public
 */
export interface RouteMatrixDestination {
  /**
   * Destination related options. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Options?: RouteMatrixDestinationOptions | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;
}

/**
 * Specifies strict exclusion options for the route calculation. This setting mandates that the router will avoid any routes that include the specified options, rather than merely attempting to minimize them.
 *
 * @public
 */
export interface RouteMatrixExclusionOptions {
  /**
   * List of countries to be avoided defined by two-letter or three-letter country codes.
   *
   * @public
   */
  Countries: string[] | undefined;
}

/**
 * Origin related options.
 *
 * @public
 */
export interface RouteMatrixOriginOptions {
  /**
   * Avoids actions for the provided distance. This is typically to consider for users in moving vehicles who may not have sufficient time to make an action at an origin or a destination.
   *
   * @public
   */
  AvoidActionsForDistance?: number | undefined;

  /**
   * GPS Heading at the position.
   *
   * @public
   */
  Heading?: number | undefined;

  /**
   * Options to configure matching the provided position to the road network.
   *
   * @public
   */
  Matching?: RouteMatrixMatchingOptions | undefined;

  /**
   * Options to configure matching the provided position to a side of the street.
   *
   * @public
   */
  SideOfStreet?: RouteMatrixSideOfStreetOptions | undefined;
}

/**
 * The start position for the route in World Geodetic System (WGS 84) format: [longitude, latitude].
 *
 * @public
 */
export interface RouteMatrixOrigin {
  /**
   * Origin related options. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Options?: RouteMatrixOriginOptions | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;
}

/**
 * `AutoCircle` requests the route matrix service to define a `Circle` boundary that best attempts to include most waypoints (`Origins` and `Destinations`) using the `AutoCircle` settings. Any waypoints outside of the auto-defined `Circle` boundary will be considered out of the routing boundary, which results in a route matrix entry error.
 *
 * `AutoCircle` is only used in the request to configure a `Circle` for the route calculation. The derived `Circle` will also be provided in the response.
 *
 * @public
 */
export interface RouteMatrixAutoCircle {
  /**
   * The minimal distance, in meters, between any waypoint and the perimeter of the circle auto-defined for the boundary. Some margin is usually recommended so that the routing has enough leeway to travel from one waypoint to another optimally without conflicting with the routing boundary.
   *
   * The total of `MaxRadius` and `Margin` must be less than or equal to 200,000 meters.
   *
   * @public
   */
  Margin?: number | undefined;

  /**
   * The maximum radius, in meters, that the auto-defined `Circle` boundary should have, before the `Margin` distance is added to the circle.
   *
   * The total of `MaxRadius` and `Margin` must be less than or equal to 200,000 meters.
   *
   * @public
   */
  MaxRadius?: number | undefined;
}

/**
 * Geometry defined as a circle. The circle defines the routing boundary area. Any waypoints outside the circle will result in a route matrix entry error.
 *
 * You can specify a `Circle` directly in the request, or it will be auto-derived when `AutoCircle` is used. When `AutoCircle` is set in the request, the response routing boundary will return `Circle` derived from the `AutoCircle` settings.
 *
 * @public
 */
export interface Circle {
  /**
   * Center of the Circle in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * Example: `[-123.1174, 49.2847]` represents the position with longitude `-123.1174` and latitude `49.2847`.
   *
   * @public
   */
  Center: number[] | undefined;

  /**
   * Radius of the Circle.
   *
   * **Unit**: `meters`
   *
   * Valid Range: Minimum value of 0. Maximum value of 200000.
   *
   * @public
   */
  Radius: number | undefined;
}

/**
 * Geometry of the routing boundary.
 *
 * @public
 */
export interface RouteMatrixBoundaryGeometry {
  /**
   * `AutoCircle` requests the route matrix service to define a `Circle` boundary that best attempts to include most waypoints (`Origins` and `Destinations`) using the `AutoCircle` settings. Any waypoints outside of the auto-defined `Circle` boundary will be considered out of the routing boundary, which results in a route matrix entry error.
   *
   * `AutoCircle` is only used in the request to configure a `Circle` for the route calculation. The derived `Circle` will also be provided in the response.
   *
   * @public
   */
  AutoCircle?: RouteMatrixAutoCircle | undefined;

  /**
   * Geometry defined as a circle. The circle defines the routing boundary area. Any waypoints outside the circle will result in a route matrix entry error.
   *
   * You can specify a `Circle` directly in the request, or it will be auto-derived when `AutoCircle` is used. When `AutoCircle` is set in the request, the response routing boundary will return `Circle` derived from the `AutoCircle` settings.
   *
   * @public
   */
  Circle?: Circle | undefined;

  /**
   * Geometry defined as a bounding box. The first pair represents the X and Y coordinates (longitude and latitude,) of the southwest corner of the bounding box; the second pair represents the X and Y coordinates (longitude and latitude) of the northeast corner.
   *
   * Diagonal distance of the bounding box must be less than or equal to 400,000 meters.
   *
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * Geometry defined as a polygon with only one linear ring. A linear ring is a closed sequence of four or more coordinates. The first and last coordinates are the same, forming a closed boundary. Each coordinate is a position in [longitude, latitude] format.
   *
   * The structure is an array of linear rings (only 1 allowed). Each linear ring is an array of coordinates (minimum 4), and each coordinate is an array of two doubles [longitude, latitude].
   *
   * Maximum distance between any two vertices must be less than or equal to 400,000 meters.
   *
   * @public
   */
  Polygon?: number[][][] | undefined;
}

/**
 * Boundary within which the matrix is to be calculated. All data, origins and destinations outside the boundary are considered invalid.
 *
 * @public
 */
export interface RouteMatrixBoundary {
  /**
   * Geometry of the area to be avoided.
   *
   * @public
   */
  Geometry?: RouteMatrixBoundaryGeometry | undefined;

  /**
   * No restrictions in terms of a routing boundary, and is typically used for longer routes.
   *
   * @public
   */
  Unbounded?: boolean | undefined;
}

/**
 * Traffic related options.
 *
 * @public
 */
export interface RouteMatrixTrafficOptions {
  /**
   * Duration for which flow traffic is considered valid. For this period, the flow traffic is used over historical traffic data. Flow traffic refers to congestion, which changes very quickly. Duration in seconds for which flow traffic event would be considered valid. While flow traffic event is valid it will be used over the historical traffic data.
   *
   * @public
   */
  FlowEventThresholdOverride?: number | undefined;

  /**
   * Determines if traffic should be used or ignored while calculating the route.
   *
   * Default value: `UseTrafficData`
   *
   * @public
   */
  Usage?: TrafficUsage | undefined;
}

/**
 * The vehicle License Plate.
 *
 * @public
 */
export interface RouteMatrixVehicleLicensePlate {
  /**
   * The last character of the License Plate.
   *
   * @public
   */
  LastCharacter?: string | undefined;
}

/**
 * Travel mode options when the provided travel mode is `Car`.
 *
 * @public
 */
export interface RouteMatrixCarOptions {
  /**
   * The vehicle License Plate.
   *
   * @public
   */
  LicensePlate?: RouteMatrixVehicleLicensePlate | undefined;

  /**
   * Maximum speed
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * The number of occupants in the vehicle.
   *
   * Default value: `1`
   *
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * Travel mode options when the provided travel mode is `Scooter`.
 *
 * @public
 */
export interface RouteMatrixScooterOptions {
  /**
   * The vehicle License Plate.
   *
   * @public
   */
  LicensePlate?: RouteMatrixVehicleLicensePlate | undefined;

  /**
   * Maximum speed.
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * The number of occupants in the vehicle.
   *
   * Default value: `1`
   *
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * Trailer options corresponding to the vehicle.
 *
 * @public
 */
export interface RouteMatrixTrailerOptions {
  /**
   * Number of trailers attached to the vehicle.
   *
   * Default value: `0`
   *
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * Travel mode options when the provided travel mode is `Truck`.
 *
 * @public
 */
export interface RouteMatrixTruckOptions {
  /**
   * Total number of axles of the vehicle.
   *
   * @public
   */
  AxleCount?: number | undefined;

  /**
   * Gross weight of the vehicle including trailers, and goods at capacity.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  GrossWeight?: number | undefined;

  /**
   * List of Hazardous cargo contained in the vehicle.
   *
   * @public
   */
  HazardousCargos?: RouteMatrixHazardousCargoType[] | undefined;

  /**
   * Height of the vehicle.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  Height?: number | undefined;

  /**
   * Kingpin to rear axle length of the vehicle
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  KpraLength?: number | undefined;

  /**
   * Length of the vehicle.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  Length?: number | undefined;

  /**
   * The vehicle License Plate.
   *
   * @public
   */
  LicensePlate?: RouteMatrixVehicleLicensePlate | undefined;

  /**
   * Maximum speed
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * The number of occupants in the vehicle.
   *
   * Default value: `1`
   *
   * @public
   */
  Occupancy?: number | undefined;

  /**
   * Payload capacity of the vehicle and trailers attached.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  PayloadCapacity?: number | undefined;

  /**
   * Trailer options corresponding to the vehicle.
   *
   * @public
   */
  Trailer?: RouteMatrixTrailerOptions | undefined;

  /**
   * The type of truck: `LightTruck` for smaller delivery vehicles, `StraightTruck` for rigid body trucks, or `Tractor` for tractor-trailer combinations.
   *
   * @public
   */
  TruckType?: RouteMatrixTruckType | undefined;

  /**
   * The tunnel restriction code.
   *
   * Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.
   *
   * - *Tunnel Category B*
   *
   *   - *Risk Level*: Limited risk
   *   - *Restrictions*: Few restrictions
   * - *Tunnel Category C*
   *
   *   - *Risk Level*: Medium risk
   *   - *Restrictions*: Some restrictions
   * - *Tunnel Category D*
   *
   *   - *Risk Level*: High risk
   *   - *Restrictions*: Many restrictions occur
   * - *Tunnel Category E*
   *
   *   - *Risk Level*: Very high risk
   *   - *Restrictions*: Restricted tunnel
   *
   * @public
   */
  TunnelRestrictionCode?: string | undefined;

  /**
   * Heaviest weight per axle irrespective of the axle type or the axle group. Meant for usage in countries where the differences in axle types or axle groups are not distinguished.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  WeightPerAxle?: number | undefined;

  /**
   * Specifies the total weight for the specified axle group. Meant for usage in countries that have different regulations based on the axle group type.
   *
   * @public
   */
  WeightPerAxleGroup?: WeightPerAxleGroup | undefined;

  /**
   * Width of the vehicle.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  Width?: number | undefined;
}

/**
 * Travel mode related options for the provided travel mode.
 *
 * @public
 */
export interface RouteMatrixTravelModeOptions {
  /**
   * Travel mode options when the provided travel mode is `Car`.
   *
   * @public
   */
  Car?: RouteMatrixCarOptions | undefined;

  /**
   * Travel mode options when the provided travel mode is `Scooter`.
   *
   * > **Note:** When travel mode is set to `Scooter`, then the avoidance option `ControlledAccessHighways` defaults to `true`.
   *
   * @public
   */
  Scooter?: RouteMatrixScooterOptions | undefined;

  /**
   * Travel mode options when the provided travel mode is `Truck`.
   *
   * @public
   */
  Truck?: RouteMatrixTruckOptions | undefined;
}

/**
 * @public
 */
export interface CalculateRouteMatrixRequest {
  /**
   * Features that are allowed while calculating a route.
   *
   * @public
   */
  Allow?: RouteMatrixAllowOptions | undefined;

  /**
   * Features that are avoided while calculating a route. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, it violates the avoidance and the returned response produces a notice for the violation. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only `TollRoads`, `Ferries`, and `ControlledAccessHighways`.
   *
   * @public
   */
  Avoid?: RouteMatrixAvoidanceOptions | undefined;

  /**
   * Uses the current time as the time of departure.
   *
   * @public
   */
  DepartNow?: boolean | undefined;

  /**
   * Time of departure from the origin.
   *
   * Time format:`YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm`
   *
   * Examples:
   *
   * `2020-04-22T17:57:24Z`
   *
   * `2020-04-22T17:57:24+02:00`
   *
   * @public
   */
  DepartureTime?: string | undefined;

  /**
   * List of destinations for the route in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * > **Note:** Route calculations are billed for each origin and destination pair. If you use a large matrix of origins and destinations, your costs will increase accordingly. For more information, see [Routes pricing](https://docs.aws.amazon.com/location/latest/developerguide/routes-pricing.html) in the *Amazon Location Service Developer Guide*.
   *
   * The maximum number of destinations depends on the routing boundary configuration:
   *
   * - With `RoutingBoundary.Geometry` set: maximum 500 destinations
   * - With `RoutingBoundary.Unbounded` set to `true`: maximum 100 destinations
   * - For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers in `ap-southeast-1` and `ap-southeast-5`: maximum 350 destinations
   *
   * The total matrix size (origins × destinations) must not exceed:
   *
   * - With `RoutingBoundary.Geometry`: 160,000
   * - With `RoutingBoundary.Unbounded`: 100
   * - For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers in `ap-southeast-1` and `ap-southeast-5`: 122,500
   *
   * @public
   */
  Destinations: RouteMatrixDestination[] | undefined;

  /**
   * Features to be strictly excluded while calculating the route. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Exclude?: RouteMatrixExclusionOptions | undefined;

  /**
   * Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Controls the trade-off between finding the shortest travel time (`FastestRoute`) and the shortest distance (`ShortestRoute`) when calculating reachable areas.
   *
   * Default value: `FastestRoute`
   *
   * @public
   */
  OptimizeRoutingFor?: RoutingObjective | undefined;

  /**
   * List of origins for the route in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * > **Note:** Route calculations are billed for each origin and destination pair. Using a large amount of Origins in a request can lead you to incur unexpected charges. For more information, see [Routes pricing](https://docs.aws.amazon.com/location/latest/developerguide/routes-pricing.html) in the *Amazon Location Service Developer Guide*.
   *
   * The maximum number of origins depends on the routing boundary configuration:
   *
   * - With `RoutingBoundary.Geometry` set: maximum 500 origins
   * - With `RoutingBoundary.Unbounded` set to `true`: maximum 15 origins
   * - For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers in `ap-southeast-1` and `ap-southeast-5`: maximum 350 origins
   *
   * The total matrix size (origins × destinations) must not exceed:
   *
   * - With `RoutingBoundary.Geometry`: 160,000
   * - With `RoutingBoundary.Unbounded`: 100
   * - For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers in `ap-southeast-1` and `ap-southeast-5`: 122,500
   *
   * @public
   */
  Origins: RouteMatrixOrigin[] | undefined;

  /**
   * Boundary within which the matrix is to be calculated. All data, origins and destinations outside the boundary are considered invalid. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only `Unbounded` set to `true`.
   *
   * Default value: `Unbounded set to true`
   *
   * > **Note:** When `AutoCircle` is set in the request, the response routing boundary will return `Circle` derived from the `AutoCircle` settings.
   *
   * @public
   */
  RoutingBoundary?: RouteMatrixBoundary | undefined;

  /**
   * Traffic related options. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Traffic?: RouteMatrixTrafficOptions | undefined;

  /**
   * Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only `Car`, `Pedestrian`, and `Scooter`.
   *
   * Default value: `Car`
   *
   * @public
   */
  TravelMode?: RouteMatrixTravelMode | undefined;

  /**
   * Travel mode related options for the provided travel mode. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  TravelModeOptions?: RouteMatrixTravelModeOptions | undefined;
}

/**
 * The calculated route matrix containing the results for all pairs of Origins to Destination positions. Each row corresponds to one entry in Origins. Each entry in the row corresponds to the route from that entry in Origins to an entry in Destination positions.
 *
 * @public
 */
export interface RouteMatrixEntry {
  /**
   * The total distance of travel for the route.
   *
   * @public
   */
  Distance: number | undefined;

  /**
   * The expected duration of travel for the route.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Error code that occurred during calculation of the route.
   *
   * @public
   */
  Error?: RouteMatrixErrorCode | undefined;
}

/**
 * @public
 */
export interface CalculateRouteMatrixResponse {
  /**
   * The count of error results in the route matrix. If this number is 0, all routes were calculated successfully.
   *
   * @public
   */
  ErrorCount: number | undefined;

  /**
   * The pricing bucket for which the query is charged at.
   *
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * The calculated route matrix containing the results for all pairs of Origins to Destination positions. Each row corresponds to one entry in Origins. Each entry in the row corresponds to the route from that entry in Origins to an entry in Destination positions.
   *
   * @public
   */
  RouteMatrix: RouteMatrixEntry[][] | undefined;

  /**
   * Boundary within which the matrix is to be calculated. All data, origins and destinations outside the boundary are considered invalid.
   *
   * > **Note:** When `AutoCircle` is set in the request, the response routing boundary will return `Circle` derived from the `AutoCircle` settings.
   *
   * @public
   */
  RoutingBoundary: RouteMatrixBoundary | undefined;
}

/**
 * Features that are allowed while calculating a route.
 *
 * @public
 */
export interface RouteAllowOptions {
  /**
   * Allow Hot (High Occupancy Toll) lanes while calculating the route.
   *
   * Default value: `false`
   *
   * @public
   */
  Hot?: boolean | undefined;

  /**
   * Allow Hov (High Occupancy vehicle) lanes while calculating the route.
   *
   * Default value: `false`
   *
   * @public
   */
  Hov?: boolean | undefined;
}

/**
 * Geometry of the area to be avoided.
 *
 * @public
 */
export interface RouteAvoidanceAreaGeometry {
  /**
   * Geometry defined as a corridor - a LineString with a radius that defines the width of the corridor.
   *
   * @public
   */
  Corridor?: Corridor | undefined;

  /**
   * Geometry defined as a bounding box. The first pair represents the X and Y coordinates (longitude and latitude,) of the southwest corner of the bounding box; the second pair represents the X and Y coordinates (longitude and latitude) of the northeast corner.
   *
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * Geometry defined as a polygon with only one linear ring.
   *
   * @public
   */
  Polygon?: number[][][] | undefined;

  /**
   * Geometry defined as an encoded corridor - an encoded polyline with a radius that defines the width of the corridor.
   *
   * @public
   */
  PolylineCorridor?: PolylineCorridor | undefined;

  /**
   * A list of Isoline PolylinePolygon, for each isoline PolylinePolygon, it contains PolylinePolygon of the first linear ring (the outer ring) and from 2nd item to the last item (the inner rings). For more information on polyline encoding, see [https://github.com/aws-geospatial/polyline](https://github.com/aws-geospatial/polyline).
   *
   * @public
   */
  PolylinePolygon?: string[] | undefined;
}

/**
 * Areas to be avoided.
 *
 * @public
 */
export interface RouteAvoidanceArea {
  /**
   * Exceptions to the provided avoidance geometry, to be included while calculating the route.
   *
   * @public
   */
  Except?: RouteAvoidanceAreaGeometry[] | undefined;

  /**
   * Geometry of the area to be avoided.
   *
   * @public
   */
  Geometry: RouteAvoidanceAreaGeometry | undefined;
}

/**
 * Zone categories to be avoided. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
 *
 * @public
 */
export interface RouteAvoidanceZoneCategory {
  /**
   * Zone category to be avoided.
   *
   * @public
   */
  Category: RouteZoneCategory | undefined;
}

/**
 * Specifies options for areas to avoid when calculating the route. This is a best-effort avoidance setting, meaning the router will try to honor the avoidance preferences but may still include restricted areas if no feasible alternative route exists. If avoidance options are not followed, the response will indicate that the avoidance criteria were violated.
 *
 * @public
 */
export interface RouteAvoidanceOptions {
  /**
   * Areas to be avoided. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Areas?: RouteAvoidanceArea[] | undefined;

  /**
   * Avoid car-shuttle-trains while calculating the route. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  CarShuttleTrains?: boolean | undefined;

  /**
   * Avoid controlled access highways while calculating the route.
   *
   * @public
   */
  ControlledAccessHighways?: boolean | undefined;

  /**
   * Avoid dirt roads while calculating the route. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  DirtRoads?: boolean | undefined;

  /**
   * Avoid ferries while calculating the route.
   *
   * @public
   */
  Ferries?: boolean | undefined;

  /**
   * Avoid roads that have seasonal closure while calculating the route. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  SeasonalClosure?: boolean | undefined;

  /**
   * Avoids roads where the specified toll transponders are the only mode of payment.
   *
   * @public
   */
  TollRoads?: boolean | undefined;

  /**
   * Avoids roads where the specified toll transponders are the only mode of payment. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  TollTransponders?: boolean | undefined;

  /**
   * Truck road type identifiers. `BK1` through `BK4` apply only to Sweden. `A2,A4,B2,B4,C,D,ET2,ET4` apply only to Mexico. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * > **Note:** There are currently no other supported values as of 26th April 2024.
   *
   * @public
   */
  TruckRoadTypes?: string[] | undefined;

  /**
   * Avoid tunnels while calculating the route. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Tunnels?: boolean | undefined;

  /**
   * Avoid U-turns for calculation on highways and motorways. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  UTurns?: boolean | undefined;

  /**
   * Zone categories to be avoided. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  ZoneCategories?: RouteAvoidanceZoneCategory[] | undefined;
}

/**
 * Options related to route matching.
 *
 * @public
 */
export interface RouteMatchingOptions {
  /**
   * Attempts to match the provided position to a road similar to the provided name.
   *
   * @public
   */
  NameHint?: string | undefined;

  /**
   * If the distance to a highway/bridge/tunnel/sliproad is within threshold, the waypoint will be snapped to the highway/bridge/tunnel/sliproad.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  OnRoadThreshold?: number | undefined;

  /**
   * Considers all roads within the provided radius to match the provided destination to. The roads that are considered are determined by the provided Strategy.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Radius?: number | undefined;

  /**
   * Strategy that defines matching of the position onto the road network. MatchAny considers all roads possible, whereas MatchMostSignificantRoad matches to the most significant road.
   *
   * @public
   */
  Strategy?: MatchingStrategy | undefined;
}

/**
 * Options to configure matching the provided position to a side of the street.
 *
 * @public
 */
export interface RouteSideOfStreetOptions {
  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Strategy that defines when the side of street position should be used.
   *
   * Default value: `DividedStreetOnly`
   *
   * @public
   */
  UseWith?: SideOfStreetMatchingStrategy | undefined;
}

/**
 * Options related to the destination.
 *
 * @public
 */
export interface RouteDestinationOptions {
  /**
   * The distance in meters from the destination point within which certain routing actions (such as U-turns or left turns across traffic) are restricted. This helps generate more practical routes by avoiding potentially dangerous maneuvers near the endpoint.
   *
   * @public
   */
  AvoidActionsForDistance?: number | undefined;

  /**
   * Avoid U-turns for calculation on highways and motorways.
   *
   * @public
   */
  AvoidUTurns?: boolean | undefined;

  /**
   * GPS Heading at the position.
   *
   * @public
   */
  Heading?: number | undefined;

  /**
   * Options to configure matching the provided position to the road network.
   *
   * @public
   */
  Matching?: RouteMatchingOptions | undefined;

  /**
   * Options to configure matching the provided position to a side of the street.
   *
   * @public
   */
  SideOfStreet?: RouteSideOfStreetOptions | undefined;

  /**
   * Duration of the stop.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  StopDuration?: number | undefined;
}

/**
 * Interval of the driver work-rest schedule. Stops are added to fulfil the provided rest schedule.
 *
 * @public
 */
export interface RouteDriverScheduleInterval {
  /**
   * Maximum allowed driving time before stopping to rest.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  DriveDuration: number | undefined;

  /**
   * Resting time before the driver can continue driving.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  RestDuration: number | undefined;
}

/**
 * Driver related options.
 *
 * @public
 */
export interface RouteDriverOptions {
  /**
   * Driver work-rest schedule. Stops are added to fulfil the provided rest schedule.
   *
   * @public
   */
  Schedule?: RouteDriverScheduleInterval[] | undefined;
}

/**
 * Specifies strict exclusion options for the route calculation. This setting mandates that the router will avoid any routes that include the specified options, rather than merely attempting to minimize them.
 *
 * @public
 */
export interface RouteExclusionOptions {
  /**
   * List of countries to be avoided defined by two-letter or three-letter country codes.
   *
   * @public
   */
  Countries: string[] | undefined;
}

/**
 * Origin related options.
 *
 * @public
 */
export interface RouteOriginOptions {
  /**
   * Avoids actions for the provided distance. This is typically to consider for users in moving vehicles who may not have sufficient time to make an action at an origin or a destination.
   *
   * @public
   */
  AvoidActionsForDistance?: number | undefined;

  /**
   * Avoid U-turns for calculation on highways and motorways.
   *
   * @public
   */
  AvoidUTurns?: boolean | undefined;

  /**
   * GPS Heading at the position.
   *
   * @public
   */
  Heading?: number | undefined;

  /**
   * Options to configure matching the provided position to the road network.
   *
   * @public
   */
  Matching?: RouteMatchingOptions | undefined;

  /**
   * Options to configure matching the provided position to a side of the street.
   *
   * @public
   */
  SideOfStreet?: RouteSideOfStreetOptions | undefined;
}

/**
 * Type of the emission.
 *
 * **Valid values**: `Euro1, Euro2, Euro3, Euro4, Euro5, Euro6, EuroEev`
 *
 * @public
 */
export interface RouteEmissionType {
  /**
   * The CO 2 emission classes.
   *
   * @public
   */
  Co2EmissionClass?: string | undefined;

  /**
   * Type of the emission.
   *
   * **Valid values**: `Euro1, Euro2, Euro3, Euro4, Euro5, Euro6, EuroEev`
   *
   * @public
   */
  Type: string | undefined;
}

/**
 * Options related to Tolls on a route.
 *
 * @public
 */
export interface RouteTollOptions {
  /**
   * Specifies if the user has valid transponder with access to all toll systems. This impacts toll calculation, and if true the price with transponders is used.
   *
   * @public
   */
  AllTransponders?: boolean | undefined;

  /**
   * Specifies if the user has valid vignettes with access for all toll roads. If a user has a vignette for a toll road, then toll cost for that road is omitted since no further payment is necessary.
   *
   * @public
   */
  AllVignettes?: boolean | undefined;

  /**
   * Currency code corresponding to the price. This is the same as Currency specified in the request.
   *
   * @public
   */
  Currency?: string | undefined;

  /**
   * Emission type of the vehicle for toll cost calculation.
   *
   * **Valid values**: `Euro1, Euro2, Euro3, Euro4, Euro5, Euro6, EuroEev`
   *
   * @public
   */
  EmissionType?: RouteEmissionType | undefined;

  /**
   * Vehicle category for toll cost calculation.
   *
   * @public
   */
  VehicleCategory?: RouteTollVehicleCategory | undefined;
}

/**
 * Traffic options for the route.
 *
 * @public
 */
export interface RouteTrafficOptions {
  /**
   * Duration for which flow traffic is considered valid. For this period, the flow traffic is used over historical traffic data. Flow traffic refers to congestion, which changes very quickly. Duration in seconds for which flow traffic event would be considered valid. While flow traffic event is valid it will be used over the historical traffic data.
   *
   * @public
   */
  FlowEventThresholdOverride?: number | undefined;

  /**
   * Specifies how traffic data should be used when calculating routes.
   *
   * Default Value: `UseTrafficData`
   *
   * > **Note:**
   * >
   * > Traffic data usage depends on the time parameters in your route request:
   * >
   * > - When `Usage` is set to `UseTrafficData`:
   * >
   * >   - If `DepartNow` is set to `true`, or if you specify `DepartureTime` or `ArrivalTime`, then all traffic data is considered (including live traffic and closures).
   * >   - If `DepartNow`, `DepartureTime`, and `ArrivalTime` are all unspecified, then only long-term closures are considered, regardless of this setting.
   * > - When `Usage` is set to `IgnoreTrafficData`, then all traffic data is ignored regardless of the time parameters in your route request.
   *
   * @public
   */
  Usage?: TrafficUsage | undefined;
}

/**
 * License plate information of the vehicle. Currently, only the last character is used where license plate based controlled access is enforced.
 *
 * @public
 */
export interface RouteVehicleLicensePlate {
  /**
   * The last character of the License Plate.
   *
   * @public
   */
  LastCharacter?: string | undefined;
}

/**
 * Travel mode options when the provided travel mode is `Car`. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only `LicensePlate` options.
 *
 * @public
 */
export interface RouteCarOptions {
  /**
   * Engine type of the vehicle. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  EngineType?: RouteEngineType | undefined;

  /**
   * The vehicle License Plate.
   *
   * @public
   */
  LicensePlate?: RouteVehicleLicensePlate | undefined;

  /**
   * Maximum speed specified. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * The number of occupants in the vehicle. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * Default value: `1`
   *
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * Options for the pedestrian leg of the intermodal route.
 *
 * @public
 */
export interface RouteIntermodalPedestrianOptions {
  /**
   * Maximum walking distance allowed.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  MaxDistance?: number | undefined;

  /**
   * Walking speed.
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  Speed?: number | undefined;
}

/**
 * Options for the rental leg of the intermodal route.
 *
 * @public
 */
export interface RouteIntermodalRentalOptions {
  /**
   * Allowed rental transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with `ExcludedModes`.
   *
   * @public
   */
  AllowedModes?: RouteRentalMode[] | undefined;

  /**
   * Specifies the portion of the route for which this leg type is enabled. By default, the leg type is enabled for all legs. Valid values:
   *
   * - `FirstLeg` - Enable this leg type for the first non-pedestrian leg of the route.
   * - `LastLeg` - Enable this leg type for the last non-pedestrian leg of the route.
   * - `EntireRoute` - Enable this leg type for the entire route.
   * - `None` - Disable this leg type entirely.
   *
   * @public
   */
  EnabledFor?: RouteIntermodalEnabledLegs[] | undefined;

  /**
   * Excluded rental transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with `AllowedModes`.
   *
   * @public
   */
  ExcludedModes?: RouteRentalMode[] | undefined;
}

/**
 * Options for the taxi leg of the intermodal route.
 *
 * @public
 */
export interface RouteIntermodalTaxiOptions {
  /**
   * Allowed taxi transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with `ExcludedModes`.
   *
   * @public
   */
  AllowedModes?: RouteTaxiMode[] | undefined;

  /**
   * Specifies the portion of the route for which this leg type is enabled. By default, the leg type is enabled for all legs. Valid values:
   *
   * - `FirstLeg` - Enable this leg type for the first non-pedestrian leg of the route.
   * - `LastLeg` - Enable this leg type for the last non-pedestrian leg of the route.
   * - `EntireRoute` - Enable this leg type for the entire route.
   * - `None` - Disable this leg type entirely.
   *
   * @public
   */
  EnabledFor?: RouteIntermodalEnabledLegs[] | undefined;

  /**
   * Excluded taxi transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with `AllowedModes`.
   *
   * @public
   */
  ExcludedModes?: RouteTaxiMode[] | undefined;
}

/**
 * Options for the transit leg of the intermodal route.
 *
 * @public
 */
export interface RouteIntermodalTransitOptions {
  /**
   * Allowed transit transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with `ExcludedModes`.
   *
   * @public
   */
  AllowedModes?: RouteTransitMode[] | undefined;

  /**
   * Specifies the portion of the route for which this leg type is enabled. By default, the leg type is enabled for all legs. Valid values:
   *
   * - `FirstLeg` - Enable this leg type for the first non-pedestrian leg of the route.
   * - `LastLeg` - Enable this leg type for the last non-pedestrian leg of the route.
   * - `EntireRoute` - Enable this leg type for the entire route.
   * - `None` - Disable this leg type entirely.
   *
   * @public
   */
  EnabledFor?: RouteIntermodalEnabledLegs[] | undefined;

  /**
   * Excluded transit transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with `AllowedModes`.
   *
   * @public
   */
  ExcludedModes?: RouteTransitMode[] | undefined;
}

/**
 * Options for the vehicle leg of the intermodal route.
 *
 * @public
 */
export interface RouteIntermodalVehicleOptions {
  /**
   * Allowed vehicle transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with `ExcludedModes`.
   *
   * @public
   */
  AllowedModes?: RouteVehicleMode[] | undefined;

  /**
   * Specifies the portion of the route for which this leg type is enabled. By default, the leg type is enabled for all legs. Valid values:
   *
   * - `FirstLeg` - Enable this leg type for the first non-pedestrian leg of the route.
   * - `LastLeg` - Enable this leg type for the last non-pedestrian leg of the route.
   * - `EntireRoute` - Enable this leg type for the entire route.
   * - `None` - Disable this leg type entirely.
   *
   * @public
   */
  EnabledFor?: RouteIntermodalEnabledLegs[] | undefined;

  /**
   * Excluded vehicle transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with `AllowedModes`.
   *
   * @public
   */
  ExcludedModes?: RouteVehicleMode[] | undefined;
}

/**
 * Options related to intermodal routing.
 *
 * > **Note:** Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
 *
 * @public
 */
export interface RouteIntermodalOptions {
  /**
   * Accessibility attributes to consider when calculating the route.
   *
   * @public
   */
  AccessibilityAttributes?: RouteAccessibilityAttribute[] | undefined;

  /**
   * Maximum number of transfers allowed when calculating the route.
   *
   * @public
   */
  MaxTransfers?: number | undefined;

  /**
   * Options for the pedestrian leg of the intermodal route.
   *
   * @public
   */
  Pedestrian?: RouteIntermodalPedestrianOptions | undefined;

  /**
   * Options for the rental leg of the intermodal route.
   *
   * @public
   */
  Rental?: RouteIntermodalRentalOptions | undefined;

  /**
   * Options for the taxi leg of the intermodal route.
   *
   * @public
   */
  Taxi?: RouteIntermodalTaxiOptions | undefined;

  /**
   * Options for the transit leg of the intermodal route.
   *
   * @public
   */
  Transit?: RouteIntermodalTransitOptions | undefined;

  /**
   * Options for the vehicle leg of the intermodal route.
   *
   * @public
   */
  Vehicle?: RouteIntermodalVehicleOptions | undefined;
}

/**
 * Options related to the pedestrian. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
 *
 * @public
 */
export interface RoutePedestrianOptions {
  /**
   * Walking speed in Kilometers per hour.
   *
   * @public
   */
  Speed?: number | undefined;
}

/**
 * Travel mode options when the provided travel mode is `Scooter`. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only `LicensePlate` options.
 *
 * @public
 */
export interface RouteScooterOptions {
  /**
   * Engine type of the vehicle. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  EngineType?: RouteEngineType | undefined;

  /**
   * The vehicle License Plate.
   *
   * @public
   */
  LicensePlate?: RouteVehicleLicensePlate | undefined;

  /**
   * Maximum speed Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * The number of occupants in the vehicle. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * Default value: `1`
   *
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * Options for the pedestrian leg of the transit route.
 *
 * @public
 */
export interface RouteTransitPedestrianOptions {
  /**
   * Maximum walking distance allowed.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  MaxDistance?: number | undefined;

  /**
   * Walking speed.
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  Speed?: number | undefined;
}

/**
 * Options related to transit routing.
 *
 * > **Note:** Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
 *
 * @public
 */
export interface RouteTransitOptions {
  /**
   * Accessibility attributes to consider when calculating the route.
   *
   * @public
   */
  AccessibilityAttributes?: RouteAccessibilityAttribute[] | undefined;

  /**
   * Allowed transit transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with `ExcludedModes`.
   *
   * @public
   */
  AllowedModes?: RouteTransitMode[] | undefined;

  /**
   * Excluded transit transport modes when calculating the route. By default, all transport modes are allowed. Cannot be used together with `AllowedModes`.
   *
   * @public
   */
  ExcludedModes?: RouteTransitMode[] | undefined;

  /**
   * Maximum number of transfers allowed when calculating the route.
   *
   * @public
   */
  MaxTransfers?: number | undefined;

  /**
   * Options for the pedestrian leg of the transit route.
   *
   * @public
   */
  Pedestrian?: RouteTransitPedestrianOptions | undefined;
}

/**
 * Trailer options corresponding to the vehicle.
 *
 * @public
 */
export interface RouteTrailerOptions {
  /**
   * Total number of axles of the vehicle.
   *
   * @public
   */
  AxleCount?: number | undefined;

  /**
   * Number of trailers attached to the vehicle.
   *
   * Default value: `0`
   *
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * Travel mode options when the provided travel mode is `Truck`. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
 *
 * @public
 */
export interface RouteTruckOptions {
  /**
   * Total number of axles of the vehicle.
   *
   * @public
   */
  AxleCount?: number | undefined;

  /**
   * Engine type of the vehicle.
   *
   * @public
   */
  EngineType?: RouteEngineType | undefined;

  /**
   * Gross weight of the vehicle including trailers, and goods at capacity.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  GrossWeight?: number | undefined;

  /**
   * List of Hazardous cargo contained in the vehicle.
   *
   * @public
   */
  HazardousCargos?: RouteHazardousCargoType[] | undefined;

  /**
   * Height of the vehicle.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  Height?: number | undefined;

  /**
   * Height of the vehicle above its first axle.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  HeightAboveFirstAxle?: number | undefined;

  /**
   * Kingpin to rear axle length of the vehicle.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  KpraLength?: number | undefined;

  /**
   * Length of the vehicle.
   *
   * **Unit**: `c`
   *
   * @public
   */
  Length?: number | undefined;

  /**
   * The vehicle License Plate.
   *
   * @public
   */
  LicensePlate?: RouteVehicleLicensePlate | undefined;

  /**
   * Maximum speed
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * The number of occupants in the vehicle.
   *
   * Default value: `1`
   *
   * @public
   */
  Occupancy?: number | undefined;

  /**
   * Payload capacity of the vehicle and trailers attached.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  PayloadCapacity?: number | undefined;

  /**
   * Number of tires on the vehicle.
   *
   * @public
   */
  TireCount?: number | undefined;

  /**
   * Trailer options corresponding to the vehicle.
   *
   * @public
   */
  Trailer?: RouteTrailerOptions | undefined;

  /**
   * The type of truck: `LightTruck` for smaller delivery vehicles, `StraightTruck` for rigid body trucks, or `Tractor` for tractor-trailer combinations.
   *
   * @public
   */
  TruckType?: RouteTruckType | undefined;

  /**
   * The tunnel restriction code.
   *
   * Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.
   *
   * - *Tunnel Category B*
   *
   *   - *Risk Level*: Limited risk
   *   - *Restrictions*: Few restrictions
   * - *Tunnel Category C*
   *
   *   - *Risk Level*: Medium risk
   *   - *Restrictions*: Some restrictions
   * - *Tunnel Category D*
   *
   *   - *Risk Level*: High risk
   *   - *Restrictions*: Many restrictions occur
   * - *Tunnel Category E*
   *
   *   - *Risk Level*: Very high risk
   *   - *Restrictions*: Restricted tunnel
   *
   * @public
   */
  TunnelRestrictionCode?: string | undefined;

  /**
   * Heaviest weight per axle irrespective of the axle type or the axle group. Meant for usage in countries where the differences in axle types or axle groups are not distinguished.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  WeightPerAxle?: number | undefined;

  /**
   * Specifies the total weight for the specified axle group. Meant for usage in countries that have different regulations based on the axle group type.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  WeightPerAxleGroup?: WeightPerAxleGroup | undefined;

  /**
   * Width of the vehicle.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  Width?: number | undefined;
}

/**
 * Travel mode related options for the provided travel mode.
 *
 * @public
 */
export interface RouteTravelModeOptions {
  /**
   * Travel mode options when the provided travel mode is `Car`.
   *
   * @public
   */
  Car?: RouteCarOptions | undefined;

  /**
   * Travel mode options when the provided travel mode is `Pedestrian`.
   *
   * @public
   */
  Pedestrian?: RoutePedestrianOptions | undefined;

  /**
   * Travel mode options when the provided travel mode is `Scooter`.
   *
   * > **Note:** When travel mode is set to `Scooter`, then the avoidance option `ControlledAccessHighways` defaults to `true`.
   *
   * @public
   */
  Scooter?: RouteScooterOptions | undefined;

  /**
   * Travel mode options when the provided travel mode is `Truck`.
   *
   * @public
   */
  Truck?: RouteTruckOptions | undefined;

  /**
   * Travel mode options when the provided travel mode is `Intermodal`.
   *
   * > **Note:** Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Intermodal?: RouteIntermodalOptions | undefined;

  /**
   * Travel mode options when the provided travel mode is `Transit`.
   *
   * > **Note:** Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Transit?: RouteTransitOptions | undefined;
}

/**
 * Waypoint between the Origin and Destination.
 *
 * @public
 */
export interface RouteWaypoint {
  /**
   * Avoids actions for the provided distance. This is typically to consider for users in moving vehicles who may not have sufficient time to make an action at an origin or a destination. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  AvoidActionsForDistance?: number | undefined;

  /**
   * Avoid U-turns for calculation on highways and motorways. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  AvoidUTurns?: boolean | undefined;

  /**
   * GPS Heading at the position. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Heading?: number | undefined;

  /**
   * Options to configure matching the provided position to the road network. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Matching?: RouteMatchingOptions | undefined;

  /**
   * If the waypoint should not be treated as a stop. If yes, the waypoint is passed through and doesn't split the route into different legs. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  PassThrough?: boolean | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Options to configure matching the provided position to a side of the street. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  SideOfStreet?: RouteSideOfStreetOptions | undefined;

  /**
   * Duration of the stop. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  StopDuration?: number | undefined;
}

/**
 * @public
 */
export interface CalculateRoutesRequest {
  /**
   * Features that are allowed while calculating a route. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Allow?: RouteAllowOptions | undefined;

  /**
   * Time of arrival at the destination. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * Time format:`YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm`
   *
   * Examples:
   *
   * `2020-04-22T17:57:24Z`
   *
   * `2020-04-22T17:57:24+02:00`
   *
   * @public
   */
  ArrivalTime?: string | undefined;

  /**
   * Features that are avoided while calculating a route. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, it violates the avoidance and the returned response produces a notice for the violation. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only `ControlledAccessHighways`, `Ferries`, and `TollRoads`
   *
   * @public
   */
  Avoid?: RouteAvoidanceOptions | undefined;

  /**
   * Uses the current time as the time of departure.
   *
   * @public
   */
  DepartNow?: boolean | undefined;

  /**
   * Time of departure from the origin.
   *
   * Time format:`YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm`
   *
   * Examples:
   *
   * `2020-04-22T17:57:24Z`
   *
   * `2020-04-22T17:57:24+02:00`
   *
   * @public
   */
  DepartureTime?: string | undefined;

  /**
   * The final position for the route. In the World Geodetic System (WGS 84) format: `[longitude, latitude]`.
   *
   * @public
   */
  Destination: number[] | undefined;

  /**
   * Destination related options. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  DestinationOptions?: RouteDestinationOptions | undefined;

  /**
   * Driver related options. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Driver?: RouteDriverOptions | undefined;

  /**
   * Features to be strictly excluded while calculating the route. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Exclude?: RouteExclusionOptions | undefined;

  /**
   * Measurement system to be used for instructions within steps in the response.
   *
   * @public
   */
  InstructionsMeasurementSystem?: MeasurementSystem | undefined;

  /**
   * Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * List of languages for instructions within steps in the response. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * > **Note:** Instructions in the requested language are returned only if they are available.
   *
   * @public
   */
  Languages?: string[] | undefined;

  /**
   * A list of optional additional parameters such as timezone that can be requested for each result. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only `PassThroughWaypoints`, `Summary`, and `TravelStepInstructions`
   *
   * - `Elevation`: Retrieves the elevation information for each location.
   * - `Incidents`: Provides information on traffic incidents along the route.
   * - `PassThroughWaypoints`: Indicates waypoints that are passed through without stopping.
   * - `Summary`: Returns a summary of the route, including distance and duration.
   * - `Tolls`: Supplies toll cost information along the route.
   * - `TravelStepInstructions`: Provides step-by-step instructions for travel along the route.
   * - `TruckRoadTypes`: Returns information about road types suitable for trucks.
   * - `TypicalDuration`: Gives typical travel duration based on historical data.
   * - `Zones`: Specifies the time zone information for each waypoint.
   *
   * @public
   */
  LegAdditionalFeatures?: RouteLegAdditionalFeature[] | undefined;

  /**
   * Specifies the format of the geometry returned for each leg of the route. You can choose between two different geometry encoding formats.
   *
   * `FlexiblePolyline`: A compact and precise encoding format for the leg geometry. For more information on the format, see the GitHub repository for [https://github.com/aws-geospatial/polyline](https://github.com/aws-geospatial/polyline).
   *
   * `Simple`: A less compact encoding, which is easier to decode but may be less precise and result in larger payloads.
   *
   * @public
   */
  LegGeometryFormat?: GeometryFormat | undefined;

  /**
   * Maximum number of alternative routes to be provided in the response, if available. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only up to 3 alternative routes.
   *
   * @public
   */
  MaxAlternatives?: number | undefined;

  /**
   * Controls the trade-off between achieving the shortest travel time (`FastestRoute`) and achieving the shortest physical distance ((`ShortestRoute`) when calculating each route in the matrix.
   *
   * Default value: `FastestRoute`
   *
   * @public
   */
  OptimizeRoutingFor?: RoutingObjective | undefined;

  /**
   * The start position for the route in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Origin: number[] | undefined;

  /**
   * Specifies how the origin point should be matched to the road network and any routing constraints that apply when the traveler is departing the origin. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  OriginOptions?: RouteOriginOptions | undefined;

  /**
   * A list of optional features such as `SpeedLimit` that can be requested for a Span. A span is a section of a Leg for which the requested features have the same values. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  SpanAdditionalFeatures?: RouteSpanAdditionalFeature[] | undefined;

  /**
   * Toll related options. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Tolls?: RouteTollOptions | undefined;

  /**
   * Traffic related options. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Traffic?: RouteTrafficOptions | undefined;

  /**
   * Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only `Car`, `Pedestrian`, and `Scooter` values.
   *
   * Default value: `Car`
   *
   * @public
   */
  TravelMode?: RouteTravelMode | undefined;

  /**
   * Travel mode related options for the provided travel mode. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions support only `Car` and `Pedestrian` travel mode options.
   *
   * @public
   */
  TravelModeOptions?: RouteTravelModeOptions | undefined;

  /**
   * Type of step returned by the response. `Default` provides basic steps intended for web based applications. `TurnByTurn` provides detailed instructions with more granularity intended for a turn based navigation system. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions `Default` does not return any steps.
   *
   * @public
   */
  TravelStepType?: RouteTravelStepType | undefined;

  /**
   * List of waypoints between the Origin and Destination. For [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers, `ap-southeast-1` and `ap-southeast-5` regions max length is `100`.
   *
   * Max length: `23`
   *
   * @public
   */
  Waypoints?: RouteWaypoint[] | undefined;
}

/**
 * Notices are additional information returned that indicate issues that occurred during route calculation.
 *
 * @public
 */
export interface RouteResponseNotice {
  /**
   * Code corresponding to the issue.
   *
   * @public
   */
  Code: RouteResponseNoticeCode | undefined;

  /**
   * Impact corresponding to the issue. While Low impact notices can be safely ignored, High impact notices must be evaluated further to determine the impact.
   *
   * @public
   */
  Impact?: RouteNoticeImpact | undefined;
}

/**
 * Steps of a leg that must be performed after the travel portion of the leg.
 *
 * @public
 */
export interface RouteFerryAfterTravelStep {
  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * > **Note:** Only available when the TravelStepType is Default.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RouteFerryAfterTravelStepType | undefined;
}

/**
 * Position provided in the request.
 *
 * @public
 */
export interface RouteFerryPlace {
  /**
   * The name of the place.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Position provided in the request.
   *
   * @public
   */
  OriginalPosition?: number[] | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Index of the waypoint in the request.
   *
   * @public
   */
  WaypointIndex?: number | undefined;
}

/**
 * Details corresponding to the arrival for the leg.
 *
 * @public
 */
export interface RouteFerryArrival {
  /**
   * Place details corresponding to the arrival.
   *
   * @public
   */
  Place: RouteFerryPlace | undefined;

  /**
   * The arrival time.
   *
   * @public
   */
  Time?: string | undefined;
}

/**
 * Steps of a leg that must be performed before the travel portion of the leg.
 *
 * @public
 */
export interface RouteFerryBeforeTravelStep {
  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * > **Note:** Only available when the TravelStepType is Default.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RouteFerryBeforeTravelStepType | undefined;
}

/**
 * Details corresponding to the departure for the leg.
 *
 * @public
 */
export interface RouteFerryDeparture {
  /**
   * Place details corresponding to the departure.
   *
   * @public
   */
  Place: RouteFerryPlace | undefined;

  /**
   * The departure time.
   *
   * @public
   */
  Time?: string | undefined;
}

/**
 * Notices are additional information returned that indicate issues that occurred during route calculation.
 *
 * @public
 */
export interface RouteFerryNotice {
  /**
   * Code corresponding to the issue.
   *
   * @public
   */
  Code: RouteFerryNoticeCode | undefined;

  /**
   * Impact corresponding to the issue. While Low impact notices can be safely ignored, High impact notices must be evaluated further to determine the impact.
   *
   * @public
   */
  Impact?: RouteNoticeImpact | undefined;
}

/**
 * The place where the waypoint is passed through and not treated as a stop.
 *
 * @public
 */
export interface RoutePassThroughPlace {
  /**
   * Position provided in the request.
   *
   * @public
   */
  OriginalPosition?: number[] | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Index of the waypoint in the request.
   *
   * @public
   */
  WaypointIndex?: number | undefined;
}

/**
 * If the waypoint should be treated as a stop. If yes, the route is split up into different legs around the stop.
 *
 * @public
 */
export interface RoutePassThroughWaypoint {
  /**
   * Offset in the leg geometry corresponding to the start of this step.
   *
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * Place details corresponding to the pass-through waypoint.
   *
   * @public
   */
  Place: RoutePassThroughPlace | undefined;
}

/**
 * The localized string.
 *
 * @public
 */
export interface LocalizedString {
  /**
   * A list of BCP 47 compliant language codes for the results to be rendered in. The request uses the regional default as the fallback if the requested language can't be provided.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The value of the localized string.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Span computed for the requested SpanAdditionalFeatures.
 *
 * @public
 */
export interface RouteFerrySpan {
  /**
   * 3 letter Country code corresponding to the Span.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * Distance of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * Duration of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * Offset in the leg geometry corresponding to the start of this span.
   *
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * Names of the ferry span in available languages.
   *
   * @public
   */
  Names?: LocalizedString[] | undefined;

  /**
   * 2-3 letter Region code corresponding to the Span. This is either a province or a state.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * Summary including duration and distance for the entire leg.
 *
 * @public
 */
export interface RouteFerryOverviewSummary {
  /**
   * Distance of the entire leg.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Distance: number | undefined;

  /**
   * Duration of the entire leg.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;
}

/**
 * Summarized details for the leg including travel steps only. The Distance for the travel only portion of the journey is the same as the Distance within the Overview summary.
 *
 * @public
 */
export interface RouteFerryTravelOnlySummary {
  /**
   * Total duration in free flowing traffic, which is the best case or shortest duration possible to cover the leg.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;
}

/**
 * Summarized details for the leg including travel steps only. The Distance for the travel only portion of the journey is the same as the Distance within the Overview summary.
 *
 * @public
 */
export interface RouteFerrySummary {
  /**
   * Summarized details for the leg including before travel, travel and after travel steps.
   *
   * @public
   */
  Overview?: RouteFerryOverviewSummary | undefined;

  /**
   * Summarized details for the leg including travel steps only. The Distance for the travel only portion of the journey is in meters
   *
   * @public
   */
  TravelOnly?: RouteFerryTravelOnlySummary | undefined;
}

/**
 * Steps of a leg that must be performed during the travel portion of the leg.
 *
 * @public
 */
export interface RouteFerryTravelStep {
  /**
   * Distance of the step.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Offset in the leg geometry corresponding to the start of this step.
   *
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * > **Note:** Only available when the TravelStepType is Default.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RouteFerryTravelStepType | undefined;
}

/**
 * FerryLegDetails is populated when the Leg type is Ferry, and provides additional information that is specific to ferry travel.
 *
 * @public
 */
export interface RouteFerryLegDetails {
  /**
   * Steps of a leg that must be performed after the travel portion of the leg.
   *
   * @public
   */
  AfterTravelSteps: RouteFerryAfterTravelStep[] | undefined;

  /**
   * Details corresponding to the arrival for the leg.
   *
   * @public
   */
  Arrival: RouteFerryArrival | undefined;

  /**
   * Steps of a leg that must be performed before the travel portion of the leg.
   *
   * @public
   */
  BeforeTravelSteps: RouteFerryBeforeTravelStep[] | undefined;

  /**
   * Details corresponding to the departure for the leg.
   *
   * @public
   */
  Departure: RouteFerryDeparture | undefined;

  /**
   * Notices are additional information returned that indicate issues that occurred during route calculation.
   *
   * @public
   */
  Notices: RouteFerryNotice[] | undefined;

  /**
   * Waypoints that were passed through during the leg. This includes the waypoints that were configured with the PassThrough option.
   *
   * @public
   */
  PassThroughWaypoints: RoutePassThroughWaypoint[] | undefined;

  /**
   * Route name of the ferry line.
   *
   * @public
   */
  RouteName?: string | undefined;

  /**
   * Spans that were computed for the requested SpanAdditionalFeatures.
   *
   * @public
   */
  Spans: RouteFerrySpan[] | undefined;

  /**
   * Summarized details of the leg.
   *
   * @public
   */
  Summary?: RouteFerrySummary | undefined;

  /**
   * Steps of a leg that must be performed before the travel portion of the leg.
   *
   * @public
   */
  TravelSteps: RouteFerryTravelStep[] | undefined;
}

/**
 * The returned Route leg geometry.
 *
 * @public
 */
export interface RouteLegGeometry {
  /**
   * An ordered list of positions used to plot a route on a map.
   *
   * > **Note:** LineString and Polyline are mutually exclusive properties.
   *
   * @public
   */
  LineString?: number[][] | undefined;

  /**
   * An ordered list of positions used to plot a route on a map in a lossy compression format.
   *
   * > **Note:** LineString and Polyline are mutually exclusive properties.
   *
   * @public
   */
  Polyline?: string | undefined;
}

/**
 * Steps of a leg that must be performed after the travel portion of the leg.
 *
 * @public
 */
export interface RoutePedestrianAfterTravelStep {
  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * > **Note:** Only available when the TravelStepType is Default.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RoutePedestrianAfterTravelStepType | undefined;
}

/**
 * Details about the availability of accessibility features.
 *
 * @public
 */
export interface RouteAccessibilityAvailabilityDetails {
  /**
   * Wheelchair accessibility status.
   *
   * @public
   */
  Wheelchair?: RouteAccessibilityAvailability | undefined;
}

/**
 * Details of the access point.
 *
 * @public
 */
export interface RouteAccessPointDetails {
  /**
   * Wheelchair accessibility information for the access point.
   *
   * @public
   */
  Accessibility?: RouteAccessibilityAvailabilityDetails | undefined;
}

/**
 * Details about the station.
 *
 * @public
 */
export interface RouteStationDetails {
  /**
   * Wheelchair accessibility information for the station.
   *
   * @public
   */
  Accessibility?: RouteAccessibilityAvailabilityDetails | undefined;

  /**
   * Platform name or number.
   *
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * Short text or a number that identifies the station.
   *
   * @public
   */
  ShortName?: string | undefined;
}

/**
 * Place details corresponding to the arrival or departure.
 *
 * @public
 */
export interface RoutePedestrianPlace {
  /**
   * Details of the access point.
   *
   * @public
   */
  AccessPointDetails?: RouteAccessPointDetails | undefined;

  /**
   * The name of the place.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Position provided in the request.
   *
   * @public
   */
  OriginalPosition?: number[] | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Options to configure matching the provided position to a side of the street.
   *
   * @public
   */
  SideOfStreet?: RouteSideOfStreet | undefined;

  /**
   * Details about the station.
   *
   * @public
   */
  StationDetails?: RouteStationDetails | undefined;

  /**
   * The type of the place.
   *
   * @public
   */
  Type?: RoutePedestrianPlaceType | undefined;

  /**
   * Index of the waypoint in the request.
   *
   * @public
   */
  WaypointIndex?: number | undefined;
}

/**
 * Details corresponding to the arrival for a leg.
 *
 * Time format:`YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm`
 *
 * Examples:
 *
 * `2020-04-22T17:57:24Z`
 *
 * `2020-04-22T17:57:24+02:00`
 *
 * @public
 */
export interface RoutePedestrianArrival {
  /**
   * Place details corresponding to the arrival.
   *
   * @public
   */
  Place: RoutePedestrianPlace | undefined;

  /**
   * The arrival time.
   *
   * @public
   */
  Time?: string | undefined;
}

/**
 * Details corresponding to the departure for a leg.
 *
 * Time format:`YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm`
 *
 * Examples:
 *
 * `2020-04-22T17:57:24Z`
 *
 * `2020-04-22T17:57:24+02:00`
 *
 * @public
 */
export interface RoutePedestrianDeparture {
  /**
   * Place details corresponding to the departure.
   *
   * @public
   */
  Place: RoutePedestrianPlace | undefined;

  /**
   * The departure time.
   *
   * @public
   */
  Time?: string | undefined;
}

/**
 * Notices are additional information returned that indicate issues that occurred during route calculation.
 *
 * @public
 */
export interface RoutePedestrianNotice {
  /**
   * Code corresponding to the issue.
   *
   * @public
   */
  Code: RoutePedestrianNoticeCode | undefined;

  /**
   * Impact corresponding to the issue. While Low impact notices can be safely ignored, High impact notices must be evaluated further to determine the impact.
   *
   * @public
   */
  Impact?: RouteNoticeImpact | undefined;
}

/**
 * Details about the dynamic speed.
 *
 * **Unit**: `kilometers per hour`
 *
 * @public
 */
export interface RouteSpanDynamicSpeedDetails {
  /**
   * Estimated speed while traversing the span without traffic congestion.
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  BestCaseSpeed?: number | undefined;

  /**
   * Estimated time to turn from this span into the next.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  TurnDuration?: number | undefined;

  /**
   * Estimated speed while traversing the span under typical traffic congestion.
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  TypicalSpeed?: number | undefined;
}

/**
 * The route number.
 *
 * @public
 */
export interface RouteNumber {
  /**
   * Directional identifier of the route.
   *
   * @public
   */
  Direction?: RouteDirection | undefined;

  /**
   * List of languages for instructions corresponding to the route number.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * The route number.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Details about the speed limit corresponding to the span.
 *
 * **Unit**: `kilometers per hour`
 *
 * @public
 */
export interface RouteSpanSpeedLimitDetails {
  /**
   * Maximum speed.
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * If the span doesn't have a speed limit like the Autobahn.
   *
   * @public
   */
  Unlimited?: boolean | undefined;
}

/**
 * Span computed for the requested SpanAdditionalFeatures.
 *
 * @public
 */
export interface RoutePedestrianSpan {
  /**
   * Duration of the computed span without traffic congestion.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  BestCaseDuration?: number | undefined;

  /**
   * 3 letter Country code corresponding to the Span.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * Distance of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * Duration of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * Dynamic speed details corresponding to the span.
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  DynamicSpeed?: RouteSpanDynamicSpeedDetails | undefined;

  /**
   * A numerical value indicating the functional classification of the road segment corresponding to the span.
   *
   * Classification values are part of the hierarchical network that helps determine a logical and efficient route, and have the following definitions:
   *
   * 1. Roads that allow for high volume, maximum speed traffic movement between and through major metropolitan areas.
   * 2. Roads that are used to channel traffic to functional class 1 roads for travel between and through cities in the shortest amount of time.
   * 3. Roads that intersect functional class 2 roads and provide a high volume of traffic movement at a lower level of mobility than functional class 2 roads.
   * 4. Roads that provide for a high volume of traffic movement at moderate speeds between neighborhoods.
   * 5. Roads with volume and traffic movement below the level of any other functional class.
   *
   * @public
   */
  FunctionalClassification?: number | undefined;

  /**
   * Offset in the leg geometry corresponding to the start of this span.
   *
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * Incidents corresponding to the span. These index into the Incidents in the parent Leg.
   *
   * @public
   */
  Incidents?: number[] | undefined;

  /**
   * Provides an array of names of the pedestrian span in available languages.
   *
   * @public
   */
  Names?: LocalizedString[] | undefined;

  /**
   * Access attributes for a pedestrian corresponding to the span.
   *
   * @public
   */
  PedestrianAccess?: RouteSpanPedestrianAccessAttribute[] | undefined;

  /**
   * 2-3 letter Region code corresponding to the Span. This is either a province or a state.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * Attributes for the road segment corresponding to the span.
   *
   * @public
   */
  RoadAttributes?: RouteSpanRoadAttribute[] | undefined;

  /**
   * Designated route name or number corresponding to the span.
   *
   * @public
   */
  RouteNumbers?: RouteNumber[] | undefined;

  /**
   * Speed limit details corresponding to the span.
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  SpeedLimit?: RouteSpanSpeedLimitDetails | undefined;

  /**
   * Duration of the computed span under typical traffic congestion.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  TypicalDuration?: number | undefined;
}

/**
 * Summary including duration and distance for the entire leg.
 *
 * @public
 */
export interface RoutePedestrianOverviewSummary {
  /**
   * Distance of the entire leg.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Distance: number | undefined;

  /**
   * Duration of the entire leg.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;
}

/**
 * Summarized details for the leg including travel steps.
 *
 * @public
 */
export interface RoutePedestrianTravelOnlySummary {
  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;
}

/**
 * Summarized details for the leg including before travel, travel and after travel steps.
 *
 * @public
 */
export interface RoutePedestrianSummary {
  /**
   * Summarized details for the leg including before travel, travel and after travel steps.
   *
   * @public
   */
  Overview?: RoutePedestrianOverviewSummary | undefined;

  /**
   * Summarized details for the leg including travel steps only. The Distance for the travel only portion of the journey is in meters
   *
   * @public
   */
  TravelOnly?: RoutePedestrianTravelOnlySummary | undefined;
}

/**
 * Details related to the continue step.
 *
 * @public
 */
export interface RouteContinueStepDetails {
  /**
   * Name of the intersection, if applicable to the step.
   *
   * @public
   */
  Intersection: LocalizedString[] | undefined;
}

/**
 * The road on the route.
 *
 * @public
 */
export interface RouteRoad {
  /**
   * Name of the road (localized).
   *
   * @public
   */
  RoadName: LocalizedString[] | undefined;

  /**
   * Route number of the road.
   *
   * @public
   */
  RouteNumber: RouteNumber[] | undefined;

  /**
   * Names of destinations that can be reached when traveling on the road.
   *
   * @public
   */
  Towards: LocalizedString[] | undefined;

  /**
   * The type of road.
   *
   * @public
   */
  Type?: RouteRoadType | undefined;
}

/**
 * Details that are specific to a Keep step.
 *
 * @public
 */
export interface RouteKeepStepDetails {
  /**
   * Name of the intersection, if applicable to the step.
   *
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * Steering direction for the step.
   *
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * Angle of the turn.
   *
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * Intensity of the turn.
   *
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * Details about the roundabout leg.
 *
 * @public
 */
export interface RouteRoundaboutEnterStepDetails {
  /**
   * Name of the intersection, if applicable to the step.
   *
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * Steering direction for the step.
   *
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * Angle of the turn.
   *
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * Intensity of the turn.
   *
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * Details about the roundabout step.
 *
 * @public
 */
export interface RouteRoundaboutExitStepDetails {
  /**
   * Name of the intersection, if applicable to the step.
   *
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * Exit to be taken.
   *
   * @public
   */
  RelativeExit?: number | undefined;

  /**
   * Angle of the roundabout.
   *
   * @public
   */
  RoundaboutAngle?: number | undefined;

  /**
   * Steering direction for the step.
   *
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;
}

/**
 * Details about the step.
 *
 * @public
 */
export interface RouteRoundaboutPassStepDetails {
  /**
   * Name of the intersection, if applicable to the step.
   *
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * Steering direction for the step.
   *
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * Angle of the turn.
   *
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * Intensity of the turn.
   *
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * Labels presented on the sign post.
 *
 * @public
 */
export interface RouteSignpostLabel {
  /**
   * Route number of the road.
   *
   * @public
   */
  RouteNumber?: RouteNumber | undefined;

  /**
   * The Signpost text.
   *
   * @public
   */
  Text?: LocalizedString | undefined;
}

/**
 * Sign post information of the action, applicable only for TurnByTurn steps. See RouteSignpost for details of sub-attributes.
 *
 * @public
 */
export interface RouteSignpost {
  /**
   * Labels present on the sign post.
   *
   * @public
   */
  Labels: RouteSignpostLabel[] | undefined;
}

/**
 * Details related to the turn step.
 *
 * @public
 */
export interface RouteTurnStepDetails {
  /**
   * Name of the intersection, if applicable to the step.
   *
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * Steering direction for the step.
   *
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * Angle of the turn.
   *
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * Intensity of the turn.
   *
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * Steps of a leg that must be performed during the travel portion of the leg.
 *
 * @public
 */
export interface RoutePedestrianTravelStep {
  /**
   * Details related to the continue step.
   *
   * @public
   */
  ContinueStepDetails?: RouteContinueStepDetails | undefined;

  /**
   * Details of the current road. See RouteRoad for details of sub-attributes.
   *
   * @public
   */
  CurrentRoad?: RouteRoad | undefined;

  /**
   * Distance of the step.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Exit number of the road exit, if applicable.
   *
   * @public
   */
  ExitNumber?: LocalizedString[] | undefined;

  /**
   * Offset in the leg geometry corresponding to the start of this step.
   *
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * > **Note:** Only available when the TravelStepType is Default.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Details that are specific to a Keep step.
   *
   * @public
   */
  KeepStepDetails?: RouteKeepStepDetails | undefined;

  /**
   * Details of the next road. See RouteRoad for details of sub-attributes.
   *
   * @public
   */
  NextRoad?: RouteRoad | undefined;

  /**
   * Details that are specific to a Roundabout Enter step.
   *
   * @public
   */
  RoundaboutEnterStepDetails?: RouteRoundaboutEnterStepDetails | undefined;

  /**
   * Details that are specific to a Roundabout Exit step.
   *
   * @public
   */
  RoundaboutExitStepDetails?: RouteRoundaboutExitStepDetails | undefined;

  /**
   * Details that are specific to a Roundabout Pass step.
   *
   * @public
   */
  RoundaboutPassStepDetails?: RouteRoundaboutPassStepDetails | undefined;

  /**
   * Sign post information of the action, applicable only for TurnByTurn steps. See RouteSignpost for details of sub-attributes.
   *
   * @public
   */
  Signpost?: RouteSignpost | undefined;

  /**
   * Details that are specific to a turn step.
   *
   * @public
   */
  TurnStepDetails?: RouteTurnStepDetails | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RoutePedestrianTravelStepType | undefined;
}

/**
 * Details that are specific to a pedestrian leg.
 *
 * @public
 */
export interface RoutePedestrianLegDetails {
  /**
   * Steps of a leg that must be performed after the travel portion of the leg.
   *
   * @public
   */
  AfterTravelSteps: RoutePedestrianAfterTravelStep[] | undefined;

  /**
   * Details corresponding to the arrival for the leg.
   *
   * @public
   */
  Arrival: RoutePedestrianArrival | undefined;

  /**
   * Details corresponding to the departure for the leg.
   *
   * @public
   */
  Departure: RoutePedestrianDeparture | undefined;

  /**
   * Notices are additional information returned that indicate issues that occurred during route calculation. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Notices: RoutePedestrianNotice[] | undefined;

  /**
   * Waypoints that were passed through during the leg. This includes the waypoints that were configured with the PassThrough option.
   *
   * @public
   */
  PassThroughWaypoints: RoutePassThroughWaypoint[] | undefined;

  /**
   * Spans that were computed for the requested SpanAdditionalFeatures. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Spans: RoutePedestrianSpan[] | undefined;

  /**
   * Summarized details of the leg.
   *
   * @public
   */
  Summary?: RoutePedestrianSummary | undefined;

  /**
   * Steps of a leg that must be performed before the travel portion of the leg.
   *
   * @public
   */
  TravelSteps: RoutePedestrianTravelStep[] | undefined;
}

/**
 * A step that must be performed after the travel portion of the leg.
 *
 * @public
 */
export interface RouteRentalAfterTravelStep {
  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RouteRentalAfterTravelStepType | undefined;
}

/**
 * Details about the rental agency.
 *
 * @public
 */
export interface RouteRentalAgency {
  /**
   * Name of the agency.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * URL to the agency's website.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Place details corresponding to the arrival or departure.
 *
 * @public
 */
export interface RouteRentalPlace {
  /**
   * Details of the access point.
   *
   * @public
   */
  AccessPointDetails?: RouteAccessPointDetails | undefined;

  /**
   * The name of the place.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Position provided in the request.
   *
   * @public
   */
  OriginalPosition?: number[] | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Details about the station.
   *
   * @public
   */
  StationDetails?: RouteStationDetails | undefined;

  /**
   * The type of the place.
   *
   * @public
   */
  Type?: RouteRentalPlaceType | undefined;

  /**
   * Index of the waypoint in the request.
   *
   * @public
   */
  WaypointIndex?: number | undefined;
}

/**
 * Details corresponding to the arrival for the leg.
 *
 * @public
 */
export interface RouteRentalArrival {
  /**
   * Place details corresponding to the arrival.
   *
   * @public
   */
  Place: RouteRentalPlace | undefined;

  /**
   * The arrival time.
   *
   * @public
   */
  Time?: string | undefined;
}

/**
 * The URL to an external resource.
 *
 * @public
 */
export interface RouteWebLink {
  /**
   * The interactive or clickable portion of the text.
   *
   * @public
   */
  AnchorText?: string | undefined;

  /**
   * Text describing the URL.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Device type for which the link is intended.
   *
   * @public
   */
  DeviceType?: RouteWebLinkDeviceType | undefined;

  /**
   * The URL of the link.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Required attribution to display.
 *
 * @public
 */
export interface RouteAttribution {
  /**
   * The type of the attribution link.
   *
   * @public
   */
  AttributionType?: RouteAttributionType | undefined;

  /**
   * The URL to an external resource.
   *
   * @public
   */
  WebLink: RouteWebLink | undefined;
}

/**
 * A step that must be performed before the travel portion of the leg.
 *
 * @public
 */
export interface RouteRentalBeforeTravelStep {
  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RouteRentalBeforeTravelStepType | undefined;
}

/**
 * Details corresponding to the departure for the leg.
 *
 * @public
 */
export interface RouteRentalDeparture {
  /**
   * Place details corresponding to the departure.
   *
   * @public
   */
  Place: RouteRentalPlace | undefined;

  /**
   * The departure time.
   *
   * @public
   */
  Time?: string | undefined;
}

/**
 * Summary including duration and distance for the entire leg.
 *
 * @public
 */
export interface RouteRentalOverviewSummary {
  /**
   * Duration of the entire leg.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Distance of the entire leg.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Distance: number | undefined;
}

/**
 * Summary including duration and distance for the travel portion of the leg only.
 *
 * @public
 */
export interface RouteRentalTravelOnlySummary {
  /**
   * Duration of the travel portion of the rental leg.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;
}

/**
 * Summary of the rental leg.
 *
 * @public
 */
export interface RouteRentalSummary {
  /**
   * Summary including duration and distance for the entire leg.
   *
   * @public
   */
  Overview?: RouteRentalOverviewSummary | undefined;

  /**
   * Summary including duration and distance for the travel portion of the leg only.
   *
   * @public
   */
  TravelOnly?: RouteRentalTravelOnlySummary | undefined;
}

/**
 * Transport mode details for the rental leg.
 *
 * @public
 */
export interface RouteRentalTransportModeDetails {
  /**
   * Number of available seats in the vehicle.
   *
   * @public
   */
  AvailableSeats?: number | undefined;

  /**
   * Human readable transport category.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * Color of the transport polyline and background for the transport name.
   *
   * @public
   */
  Color?: string | undefined;

  /**
   * Vehicle engine type.
   *
   * @public
   */
  Engine?: RouteEngineType | undefined;

  /**
   * Vehicle license plate number.
   *
   * @public
   */
  LicensePlate?: string | undefined;

  /**
   * Mode of the rental transport.
   *
   * @public
   */
  Mode: RouteRentalMode | undefined;

  /**
   * Vehicle model.
   *
   * @public
   */
  Model?: string | undefined;

  /**
   * Vehicle name or mobility provider name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Color of the transport name text.
   *
   * @public
   */
  TextColor?: string | undefined;
}

/**
 * Details related to the exit step.
 *
 * @public
 */
export interface RouteExitStepDetails {
  /**
   * Name of the intersection, if applicable to the step.
   *
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * Exit to be taken.
   *
   * @public
   */
  RelativeExit?: number | undefined;

  /**
   * Steering direction for the step.
   *
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * Angle of the turn.
   *
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * Intensity of the turn.
   *
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * Details that are specific to a ramp step.
 *
 * @public
 */
export interface RouteRampStepDetails {
  /**
   * Name of the intersection, if applicable to the step.
   *
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * Steering direction for the step.
   *
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * Angle of the turn.
   *
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * Intensity of the turn.
   *
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * Details related to the U-turn step.
 *
 * @public
 */
export interface RouteUTurnStepDetails {
  /**
   * Name of the intersection, if applicable to the step.
   *
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * Steering direction for the step.
   *
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * Angle of the turn.
   *
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * Intensity of the turn.
   *
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * A step that must be performed during the travel portion of the leg.
 *
 * @public
 */
export interface RouteRentalTravelStep {
  /**
   * Details related to the continue step.
   *
   * @public
   */
  ContinueStepDetails?: RouteContinueStepDetails | undefined;

  /**
   * Distance of the step.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Details related to the exit step.
   *
   * @public
   */
  ExitStepDetails?: RouteExitStepDetails | undefined;

  /**
   * Offset in the leg geometry corresponding to the start of this step.
   *
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Details that are specific to a Keep step.
   *
   * @public
   */
  KeepStepDetails?: RouteKeepStepDetails | undefined;

  /**
   * Details that are specific to a ramp step.
   *
   * @public
   */
  RampStepDetails?: RouteRampStepDetails | undefined;

  /**
   * Details about the roundabout leg.
   *
   * @public
   */
  RoundaboutEnterStepDetails?: RouteRoundaboutEnterStepDetails | undefined;

  /**
   * Details about the roundabout step.
   *
   * @public
   */
  RoundaboutExitStepDetails?: RouteRoundaboutExitStepDetails | undefined;

  /**
   * Details about the step.
   *
   * @public
   */
  RoundaboutPassStepDetails?: RouteRoundaboutPassStepDetails | undefined;

  /**
   * Details related to the turn step.
   *
   * @public
   */
  TurnStepDetails?: RouteTurnStepDetails | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RouteRentalTravelStepType | undefined;

  /**
   * Details related to the U-turn step.
   *
   * @public
   */
  UTurnStepDetails?: RouteUTurnStepDetails | undefined;
}

/**
 * Populated when the Leg type is Rental, and provides additional information that is specific to rental vehicle travel.
 *
 * @public
 */
export interface RouteRentalLegDetails {
  /**
   * Steps of a leg that must be performed after the travel portion of the leg.
   *
   * @public
   */
  AfterTravelSteps: RouteRentalAfterTravelStep[] | undefined;

  /**
   * Details about the rental agency.
   *
   * @public
   */
  Agency: RouteRentalAgency | undefined;

  /**
   * Details corresponding to the arrival for the leg.
   *
   * @public
   */
  Arrival: RouteRentalArrival | undefined;

  /**
   * List of required attributions to display.
   *
   * @public
   */
  Attributions: RouteAttribution[] | undefined;

  /**
   * Steps of a leg that must be performed before the travel portion of the leg.
   *
   * @public
   */
  BeforeTravelSteps: RouteRentalBeforeTravelStep[] | undefined;

  /**
   * Web links to external ticket booking services for the rental.
   *
   * @public
   */
  BookingWebLinks: RouteWebLink[] | undefined;

  /**
   * Details corresponding to the departure for the leg.
   *
   * @public
   */
  Departure: RouteRentalDeparture | undefined;

  /**
   * Summary of the rental leg.
   *
   * @public
   */
  Summary?: RouteRentalSummary | undefined;

  /**
   * Transport mode details for the rental leg.
   *
   * @public
   */
  Transport: RouteRentalTransportModeDetails | undefined;

  /**
   * Steps of a leg that must be performed during the travel portion of the leg.
   *
   * @public
   */
  TravelSteps: RouteRentalTravelStep[] | undefined;
}

/**
 * A step that must be performed after the travel portion of the leg.
 *
 * @public
 */
export interface RouteTaxiAfterTravelStep {
  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RouteTaxiAfterTravelStepType | undefined;
}

/**
 * Details about the taxi agency.
 *
 * @public
 */
export interface RouteTaxiAgency {
  /**
   * Name of the agency.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * URL to the agency's website.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Place details corresponding to the arrival or departure.
 *
 * @public
 */
export interface RouteTaxiPlace {
  /**
   * Details of the access point.
   *
   * @public
   */
  AccessPointDetails?: RouteAccessPointDetails | undefined;

  /**
   * The name of the place.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Position provided in the request.
   *
   * @public
   */
  OriginalPosition?: number[] | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Details about the station.
   *
   * @public
   */
  StationDetails?: RouteStationDetails | undefined;

  /**
   * The type of the place.
   *
   * @public
   */
  Type?: RouteTaxiPlaceType | undefined;

  /**
   * Index of the waypoint in the request.
   *
   * @public
   */
  WaypointIndex?: number | undefined;
}

/**
 * Details corresponding to the arrival for the leg.
 *
 * @public
 */
export interface RouteTaxiArrival {
  /**
   * Place details corresponding to the arrival.
   *
   * @public
   */
  Place: RouteTaxiPlace | undefined;

  /**
   * The arrival time.
   *
   * @public
   */
  Time?: string | undefined;
}

/**
 * A step that must be performed before the travel portion of the leg.
 *
 * @public
 */
export interface RouteTaxiBeforeTravelStep {
  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RouteTaxiBeforeTravelStepType | undefined;
}

/**
 * Details corresponding to the departure for the leg.
 *
 * @public
 */
export interface RouteTaxiDeparture {
  /**
   * Place details corresponding to the departure.
   *
   * @public
   */
  Place: RouteTaxiPlace | undefined;

  /**
   * The departure time.
   *
   * @public
   */
  Time?: string | undefined;
}

/**
 * A notice that indicates an issue that occurred during route calculation.
 *
 * @public
 */
export interface RouteTaxiNotice {
  /**
   * Code corresponding to the issue.
   *
   * @public
   */
  Code: RouteTaxiNoticeCode | undefined;

  /**
   * Impact corresponding to the issue. While Low impact notices can be safely ignored, High impact notices must be evaluated further to determine the impact.
   *
   * @public
   */
  Impact?: RouteNoticeImpact | undefined;
}

/**
 * Summary including duration and distance for the entire leg.
 *
 * @public
 */
export interface RouteTaxiOverviewSummary {
  /**
   * Duration of the entire leg.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Distance of the entire leg.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Distance: number | undefined;
}

/**
 * Summary including duration and distance for the travel portion of the leg only.
 *
 * @public
 */
export interface RouteTaxiTravelOnlySummary {
  /**
   * Duration of the travel portion of the taxi leg.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;
}

/**
 * Summary of the taxi leg.
 *
 * @public
 */
export interface RouteTaxiSummary {
  /**
   * Summary including duration and distance for the entire leg.
   *
   * @public
   */
  Overview?: RouteTaxiOverviewSummary | undefined;

  /**
   * Summary including duration and distance for the travel portion of the leg only.
   *
   * @public
   */
  TravelOnly?: RouteTaxiTravelOnlySummary | undefined;
}

/**
 * Transport mode details for the taxi leg.
 *
 * @public
 */
export interface RouteTaxiTransportModeDetails {
  /**
   * Number of available seats in the vehicle.
   *
   * @public
   */
  AvailableSeats?: number | undefined;

  /**
   * Human readable transport category.
   *
   * @public
   */
  Category?: string | undefined;

  /**
   * Color of the transport polyline and background for the transport name.
   *
   * @public
   */
  Color?: string | undefined;

  /**
   * Vehicle engine type.
   *
   * @public
   */
  Engine?: RouteEngineType | undefined;

  /**
   * Vehicle license plate number.
   *
   * @public
   */
  LicensePlate?: string | undefined;

  /**
   * Mode of the taxi transport.
   *
   * @public
   */
  Mode: RouteTaxiMode | undefined;

  /**
   * Vehicle model.
   *
   * @public
   */
  Model?: string | undefined;

  /**
   * Vehicle name or mobility provider name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Color of the transport name text.
   *
   * @public
   */
  TextColor?: string | undefined;
}

/**
 * A step that must be performed during the travel portion of the leg.
 *
 * @public
 */
export interface RouteTaxiTravelStep {
  /**
   * Details related to the continue step.
   *
   * @public
   */
  ContinueStepDetails?: RouteContinueStepDetails | undefined;

  /**
   * Distance of the step.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Details related to the exit step.
   *
   * @public
   */
  ExitStepDetails?: RouteExitStepDetails | undefined;

  /**
   * Offset in the leg geometry corresponding to the start of this step.
   *
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Details that are specific to a Keep step.
   *
   * @public
   */
  KeepStepDetails?: RouteKeepStepDetails | undefined;

  /**
   * Details that are specific to a ramp step.
   *
   * @public
   */
  RampStepDetails?: RouteRampStepDetails | undefined;

  /**
   * Details about the roundabout leg.
   *
   * @public
   */
  RoundaboutEnterStepDetails?: RouteRoundaboutEnterStepDetails | undefined;

  /**
   * Details about the roundabout step.
   *
   * @public
   */
  RoundaboutExitStepDetails?: RouteRoundaboutExitStepDetails | undefined;

  /**
   * Details about the step.
   *
   * @public
   */
  RoundaboutPassStepDetails?: RouteRoundaboutPassStepDetails | undefined;

  /**
   * Details related to the turn step.
   *
   * @public
   */
  TurnStepDetails?: RouteTurnStepDetails | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RouteTaxiTravelStepType | undefined;

  /**
   * Details related to the U-turn step.
   *
   * @public
   */
  UTurnStepDetails?: RouteUTurnStepDetails | undefined;
}

/**
 * Populated when the Leg type is Taxi, and provides additional information that is specific to taxi travel.
 *
 * @public
 */
export interface RouteTaxiLegDetails {
  /**
   * Steps of a leg that must be performed after the travel portion of the leg.
   *
   * @public
   */
  AfterTravelSteps: RouteTaxiAfterTravelStep[] | undefined;

  /**
   * Details about the taxi agency.
   *
   * @public
   */
  Agency: RouteTaxiAgency | undefined;

  /**
   * Details corresponding to the arrival for the leg.
   *
   * @public
   */
  Arrival: RouteTaxiArrival | undefined;

  /**
   * List of required attributions to display.
   *
   * @public
   */
  Attributions: RouteAttribution[] | undefined;

  /**
   * Steps of a leg that must be performed before the travel portion of the leg.
   *
   * @public
   */
  BeforeTravelSteps: RouteTaxiBeforeTravelStep[] | undefined;

  /**
   * Web links to external ticket booking services for the taxi.
   *
   * @public
   */
  BookingWebLinks: RouteWebLink[] | undefined;

  /**
   * Details corresponding to the departure for the leg.
   *
   * @public
   */
  Departure: RouteTaxiDeparture | undefined;

  /**
   * List of notices that indicate issues that occurred during route calculation.
   *
   * @public
   */
  Notices: RouteTaxiNotice[] | undefined;

  /**
   * Summary of the taxi leg.
   *
   * @public
   */
  Summary?: RouteTaxiSummary | undefined;

  /**
   * Transport mode details for the taxi leg.
   *
   * @public
   */
  Transport: RouteTaxiTransportModeDetails | undefined;

  /**
   * Steps of a leg that must be performed during the travel portion of the leg.
   *
   * @public
   */
  TravelSteps: RouteTaxiTravelStep[] | undefined;
}

/**
 * A step that must be performed after the travel portion of the leg.
 *
 * @public
 */
export interface RouteTransitAfterTravelStep {
  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RouteTransitAfterTravelStepType | undefined;
}

/**
 * Details about the transit agency.
 *
 * @public
 */
export interface RouteTransitAgency {
  /**
   * Name of the agency.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * URL to the agency's website.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Place details corresponding to the arrival or departure.
 *
 * @public
 */
export interface RouteTransitPlace {
  /**
   * The name of the place.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Position provided in the request.
   *
   * @public
   */
  OriginalPosition?: number[] | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Details about the station.
   *
   * @public
   */
  StationDetails?: RouteStationDetails | undefined;

  /**
   * The type of the place.
   *
   * @public
   */
  Type?: RouteTransitPlaceType | undefined;

  /**
   * Index of the waypoint in the request.
   *
   * @public
   */
  WaypointIndex?: number | undefined;
}

/**
 * Details corresponding to the arrival for the leg.
 *
 * @public
 */
export interface RouteTransitArrival {
  /**
   * The delay from the scheduled arrival time.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Delay?: number | undefined;

  /**
   * Place details corresponding to the arrival.
   *
   * @public
   */
  Place: RouteTransitPlace | undefined;

  /**
   * The status of the arrival.
   *
   * @public
   */
  Status?: RouteTransitTripStatus | undefined;

  /**
   * The arrival time.
   *
   * @public
   */
  Time?: string | undefined;
}

/**
 * A step that must be performed before the travel portion of the leg.
 *
 * @public
 */
export interface RouteTransitBeforeTravelStep {
  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RouteTransitBeforeTravelStepType | undefined;
}

/**
 * Details corresponding to the departure for the leg.
 *
 * @public
 */
export interface RouteTransitDeparture {
  /**
   * The delay from the scheduled departure time.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Delay?: number | undefined;

  /**
   * Place details corresponding to the departure.
   *
   * @public
   */
  Place: RouteTransitPlace | undefined;

  /**
   * The status of the departure.
   *
   * @public
   */
  Status?: RouteTransitTripStatus | undefined;

  /**
   * The departure time.
   *
   * @public
   */
  Time?: string | undefined;
}

/**
 * An incident describes disruptions on the transit route.
 *
 * @public
 */
export interface RouteTransitIncident {
  /**
   * A human readable description of the incident.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The effect of the incident on the transit service.
   *
   * @public
   */
  Effect: RouteTransitIncidentEffect | undefined;

  /**
   * The end time of the incident.
   *
   * @public
   */
  EndTime?: string | undefined;

  /**
   * The start time of the incident.
   *
   * @public
   */
  StartTime?: string | undefined;

  /**
   * Type of the incident.
   *
   * @public
   */
  Type: RouteTransitIncidentType | undefined;

  /**
   * URL to the original incident published at the agency website.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Transport mode details for the transit leg.
 *
 * @public
 */
export interface RouteTransitTransportModeDetails {
  /**
   * Wheelchair accessibility information for the transit vehicle.
   *
   * @public
   */
  Accessibility?: RouteAccessibilityAvailabilityDetails | undefined;

  /**
   * Color of the transport polyline and background for the transport name.
   *
   * @public
   */
  Color?: string | undefined;

  /**
   * Transit route headsign.
   *
   * @public
   */
  Headsign?: string | undefined;

  /**
   * Long name of the transit route.
   *
   * @public
   */
  LongRouteName?: string | undefined;

  /**
   * Mode of the transit transport.
   *
   * @public
   */
  Mode: RouteTransitMode | undefined;

  /**
   * Transit route name.
   *
   * @public
   */
  RouteName?: string | undefined;

  /**
   * Short name of the transit route.
   *
   * @public
   */
  ShortRouteName?: string | undefined;

  /**
   * Color of the transport name text.
   *
   * @public
   */
  TextColor?: string | undefined;
}

/**
 * An intermediate stop between departure and destination of the transit route.
 *
 * @public
 */
export interface RouteTransitIntermediateStop {
  /**
   * Attributes of the intermediate stop.
   *
   * @public
   */
  Attributes?: RouteTransitIntermediateStopAttribute[] | undefined;

  /**
   * Departure details for the intermediate stop.
   *
   * @public
   */
  Departure: RouteTransitDeparture | undefined;

  /**
   * Duration of the stop.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Offset in the leg geometry corresponding to the start of this stop.
   *
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * Transport mode details at the intermediate stop.
   *
   * @public
   */
  Transport?: RouteTransitTransportModeDetails | undefined;
}

/**
 * Details about the next available departure for the transit service.
 *
 * @public
 */
export interface RouteTransitNextDeparture {
  /**
   * The delay from the scheduled departure time.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Delay?: number | undefined;

  /**
   * Platform name or number for the departure.
   *
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * The status of the departure.
   *
   * @public
   */
  Status?: RouteTransitTripStatus | undefined;

  /**
   * The departure time.
   *
   * @public
   */
  Time: string | undefined;

  /**
   * Transport mode details for this departure.
   *
   * @public
   */
  Transport?: RouteTransitTransportModeDetails | undefined;
}

/**
 * A notice that indicates an issue that occurred during route calculation.
 *
 * @public
 */
export interface RouteTransitNotice {
  /**
   * Code corresponding to the issue.
   *
   * @public
   */
  Code: RouteTransitNoticeCode | undefined;

  /**
   * Impact corresponding to the issue. While Low impact notices can be safely ignored, High impact notices must be evaluated further to determine the impact.
   *
   * @public
   */
  Impact?: RouteNoticeImpact | undefined;
}

/**
 * Span computed for the requested SpanAdditionalFeatures.
 *
 * @public
 */
export interface RouteTransitSpan {
  /**
   * 3 letter Country code corresponding to the Span.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * Distance of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * Duration of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * Offset in the leg geometry corresponding to the start of this span.
   *
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * Names of the transit span in available languages.
   *
   * @public
   */
  Names?: LocalizedString[] | undefined;

  /**
   * 2-3 letter Region code corresponding to the Span. This is either a province or a state.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * Summary including duration and distance for the entire leg.
 *
 * @public
 */
export interface RouteTransitOverviewSummary {
  /**
   * Distance of the entire leg.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Distance: number | undefined;

  /**
   * Duration of the entire leg.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;
}

/**
 * Summary including duration and distance for the travel portion of the leg only.
 *
 * @public
 */
export interface RouteTransitTravelOnlySummary {
  /**
   * Duration of the travel portion of the transit leg.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;
}

/**
 * Summary of the transit leg.
 *
 * @public
 */
export interface RouteTransitSummary {
  /**
   * Summary including duration and distance for the entire leg.
   *
   * @public
   */
  Overview?: RouteTransitOverviewSummary | undefined;

  /**
   * Summary including duration and distance for the travel portion of the leg only.
   *
   * @public
   */
  TravelOnly?: RouteTransitTravelOnlySummary | undefined;
}

/**
 * A step that must be performed during the travel portion of the leg.
 *
 * @public
 */
export interface RouteTransitTravelStep {
  /**
   * Distance of the step.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Offset in the leg geometry corresponding to the start of this step.
   *
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RouteTransitTravelStepType | undefined;
}

/**
 * Populated when the Leg type is Transit, and provides additional information that is specific to public transit travel.
 *
 * @public
 */
export interface RouteTransitLegDetails {
  /**
   * Steps of a leg that must be performed after the travel portion of the leg.
   *
   * @public
   */
  AfterTravelSteps: RouteTransitAfterTravelStep[] | undefined;

  /**
   * Details about the transit agency.
   *
   * @public
   */
  Agency?: RouteTransitAgency | undefined;

  /**
   * Details corresponding to the arrival for the leg.
   *
   * @public
   */
  Arrival: RouteTransitArrival | undefined;

  /**
   * List of required attributions to display.
   *
   * @public
   */
  Attributions: RouteAttribution[] | undefined;

  /**
   * Steps of a leg that must be performed before the travel portion of the leg.
   *
   * @public
   */
  BeforeTravelSteps: RouteTransitBeforeTravelStep[] | undefined;

  /**
   * Web links to external ticket booking services for the transit.
   *
   * @public
   */
  BookingWebLinks: RouteWebLink[] | undefined;

  /**
   * Details corresponding to the departure for the leg.
   *
   * @public
   */
  Departure: RouteTransitDeparture | undefined;

  /**
   * Incidents affecting this leg of the transit route.
   *
   * @public
   */
  Incidents: RouteTransitIncident[] | undefined;

  /**
   * Intermediate stops between departure and destination of the transit route.
   *
   * @public
   */
  IntermediateStops: RouteTransitIntermediateStop[] | undefined;

  /**
   * List of next departures that cover the same section of the route.
   *
   * @public
   */
  NextDepartures: RouteTransitNextDeparture[] | undefined;

  /**
   * List of notices that indicate issues that occurred during route calculation.
   *
   * @public
   */
  Notices: RouteTransitNotice[] | undefined;

  /**
   * Waypoints that were passed through during the leg. This includes the waypoints that were configured with the PassThrough option. Not populated when the TravelMode is `Transit` or `Intermodal`.
   *
   * @public
   */
  PassThroughWaypoints: RoutePassThroughWaypoint[] | undefined;

  /**
   * Spans that were computed for the requested SpanAdditionalFeatures. Not populated when the TravelMode is `Transit` or `Intermodal`.
   *
   * @public
   */
  Spans: RouteTransitSpan[] | undefined;

  /**
   * Summary of the transit leg.
   *
   * @public
   */
  Summary?: RouteTransitSummary | undefined;

  /**
   * Transport mode details for the transit leg.
   *
   * @public
   */
  Transport: RouteTransitTransportModeDetails | undefined;

  /**
   * Steps of a leg that must be performed during the travel portion of the leg.
   *
   * @public
   */
  TravelSteps: RouteTransitTravelStep[] | undefined;
}

/**
 * Details about the EV charge at the current step.
 *
 * @public
 */
export interface RouteChargeStepDetails {
  /**
   * Estimated vehicle battery charge before this step (in kWh).
   *
   * @public
   */
  ArrivalCharge?: number | undefined;

  /**
   * Maximum charging power available to the vehicle.
   *
   * **Unit**: `KwH`
   *
   * @public
   */
  ConsumablePower?: number | undefined;

  /**
   * Details that are specific to a Charge step.
   *
   * **Unit**: `KwH`
   *
   * @public
   */
  DesiredCharge?: number | undefined;
}

/**
 * Steps of a leg that must be performed after the travel portion of the leg.
 *
 * @public
 */
export interface RouteVehicleAfterTravelStep {
  /**
   * Details that are specific to a Charge step.
   *
   * **Unit**: `KwH`
   *
   * @public
   */
  ChargeStepDetails?: RouteChargeStepDetails | undefined;

  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * > **Note:** Only available when the TravelStepType is Default.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RouteVehicleAfterTravelStepType | undefined;
}

/**
 * Place details corresponding to the arrival or departure.
 *
 * @public
 */
export interface RouteVehiclePlace {
  /**
   * The name of the place.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Position provided in the request.
   *
   * @public
   */
  OriginalPosition?: number[] | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Options to configure matching the provided position to a side of the street.
   *
   * @public
   */
  SideOfStreet?: RouteSideOfStreet | undefined;

  /**
   * Index of the waypoint in the request.
   *
   * @public
   */
  WaypointIndex?: number | undefined;

  /**
   * Details of the access point.
   *
   * @public
   */
  AccessPointDetails?: RouteAccessPointDetails | undefined;

  /**
   * Details about the station.
   *
   * @public
   */
  StationDetails?: RouteStationDetails | undefined;

  /**
   * The type of the place.
   *
   * @public
   */
  Type?: RouteVehiclePlaceType | undefined;
}

/**
 * Details corresponding to the arrival for a leg.
 *
 * @public
 */
export interface RouteVehicleArrival {
  /**
   * Place details corresponding to the arrival.
   *
   * @public
   */
  Place: RouteVehiclePlace | undefined;

  /**
   * The arrival time.
   *
   * @public
   */
  Time?: string | undefined;
}

/**
 * Details corresponding to the departure for the leg.
 *
 * @public
 */
export interface RouteVehicleDeparture {
  /**
   * Place details corresponding to the departure.
   *
   * @public
   */
  Place: RouteVehiclePlace | undefined;

  /**
   * The departure time.
   *
   * @public
   */
  Time?: string | undefined;
}

/**
 * Incidents corresponding to this leg of the route.
 *
 * @public
 */
export interface RouteVehicleIncident {
  /**
   * Brief readable description of the incident.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * End timestamp of the incident.
   *
   * @public
   */
  EndTime?: string | undefined;

  /**
   * Severity of the incident Critical - The part of the route the incident affects is unusable. Major- Major impact on the leg duration, for example stop and go Minor- Minor impact on the leg duration, for example traffic jam Low - Low on duration, for example slightly increased traffic
   *
   * @public
   */
  Severity?: RouteVehicleIncidentSeverity | undefined;

  /**
   * Start time of the incident.
   *
   * @public
   */
  StartTime?: string | undefined;

  /**
   * Type of the incident.
   *
   * @public
   */
  Type?: RouteVehicleIncidentType | undefined;
}

/**
 * Notice Detail that is a range.
 *
 * @public
 */
export interface RouteNoticeDetailRange {
  /**
   * Minimum value for the range.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * Maximum value for the range.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The weight constraint for the route.
 *
 * **Unit**: `kilograms`
 *
 * @public
 */
export interface RouteWeightConstraint {
  /**
   * The type of constraint.
   *
   * @public
   */
  Type: RouteWeightConstraintType | undefined;

  /**
   * The constraint value.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * This property contains a summary of violated constraints.
 *
 * @public
 */
export interface RouteViolatedConstraints {
  /**
   * This restriction applies to truck cargo, where the resulting route excludes roads on which hazardous materials are prohibited from being transported.
   *
   * @public
   */
  AllHazardsRestricted?: boolean | undefined;

  /**
   * Total number of axles of the vehicle.
   *
   * @public
   */
  AxleCount?: RouteNoticeDetailRange | undefined;

  /**
   * List of Hazardous cargo contained in the vehicle.
   *
   * @public
   */
  HazardousCargos: RouteHazardousCargoType[] | undefined;

  /**
   * The maximum height of the vehicle.
   *
   * @public
   */
  MaxHeight?: number | undefined;

  /**
   * The maximum Kpra length of the vehicle.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  MaxKpraLength?: number | undefined;

  /**
   * The maximum length of the vehicle.
   *
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * The maximum load capacity of the vehicle.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  MaxPayloadCapacity?: number | undefined;

  /**
   * The maximum weight of the route.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  MaxWeight?: RouteWeightConstraint | undefined;

  /**
   * The maximum weight per axle of the vehicle.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  MaxWeightPerAxle?: number | undefined;

  /**
   * The maximum weight per axle group of the vehicle.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  MaxWeightPerAxleGroup?: WeightPerAxleGroup | undefined;

  /**
   * The maximum width of the vehicle.
   *
   * @public
   */
  MaxWidth?: number | undefined;

  /**
   * The number of occupants in the vehicle.
   *
   * Default value: `1`
   *
   * @public
   */
  Occupancy?: RouteNoticeDetailRange | undefined;

  /**
   * Access radius restrictions based on time.
   *
   * @public
   */
  RestrictedTimes?: string | undefined;

  /**
   * The time dependent constraint.
   *
   * @public
   */
  TimeDependent?: boolean | undefined;

  /**
   * Number of trailers attached to the vehicle.
   *
   * Default value: `0`
   *
   * @public
   */
  TrailerCount?: RouteNoticeDetailRange | undefined;

  /**
   * Travel mode corresponding to the leg.
   *
   * @public
   */
  TravelMode?: boolean | undefined;

  /**
   * Truck road type identifiers. `BK1` through `BK4` apply only to Sweden. `A2,A4,B2,B4,C,D,ET2,ET4` apply only to Mexico.
   *
   * > **Note:** There are currently no other supported values as of 26th April 2024.
   *
   * @public
   */
  TruckRoadType?: string | undefined;

  /**
   * The type of truck: `LightTruck` for smaller delivery vehicles, `StraightTruck` for rigid body trucks, or `Tractor` for tractor-trailer combinations.
   *
   * @public
   */
  TruckType?: RouteTruckType | undefined;

  /**
   * The tunnel restriction code.
   *
   * Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.
   *
   * - *Tunnel Category B*
   *
   *   - *Risk Level*: Limited risk
   *   - *Restrictions*: Few restrictions
   * - *Tunnel Category C*
   *
   *   - *Risk Level*: Medium risk
   *   - *Restrictions*: Some restrictions
   * - *Tunnel Category D*
   *
   *   - *Risk Level*: High risk
   *   - *Restrictions*: Many restrictions occur
   * - *Tunnel Category E*
   *
   *   - *Risk Level*: Very high risk
   *   - *Restrictions*: Restricted tunnel
   *
   * @public
   */
  TunnelRestrictionCode?: string | undefined;
}

/**
 * Additional details of the notice.
 *
 * @public
 */
export interface RouteVehicleNoticeDetail {
  /**
   * The notice title.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * Any violated constraints.
   *
   * @public
   */
  ViolatedConstraints?: RouteViolatedConstraints | undefined;
}

/**
 * Notices are additional information returned that indicate issues that occurred during route calculation.
 *
 * @public
 */
export interface RouteVehicleNotice {
  /**
   * Code corresponding to the issue.
   *
   * @public
   */
  Code: RouteVehicleNoticeCode | undefined;

  /**
   * Additional details of the notice.
   *
   * @public
   */
  Details: RouteVehicleNoticeDetail[] | undefined;

  /**
   * Impact corresponding to the issue. While Low impact notices can be safely ignored, High impact notices must be evaluated further to determine the impact.
   *
   * @public
   */
  Impact?: RouteNoticeImpact | undefined;
}

/**
 * Span computed for the requested SpanAdditionalFeatures.
 *
 * @public
 */
export interface RouteVehicleSpan {
  /**
   * Duration of the computed span without traffic congestion.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  BestCaseDuration?: number | undefined;

  /**
   * Access attributes for a car corresponding to the span.
   *
   * @public
   */
  CarAccess?: RouteSpanCarAccessAttribute[] | undefined;

  /**
   * 3 letter Country code corresponding to the Span.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * Distance of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * Duration of the computed span. This feature doesn't split a span, but is always computed on a span split by other properties.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * Dynamic speed details corresponding to the span.
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  DynamicSpeed?: RouteSpanDynamicSpeedDetails | undefined;

  /**
   * A numerical value indicating the functional classification of the road segment corresponding to the span.
   *
   * Classification values are part of the hierarchical network that helps determine a logical and efficient route, and have the following definitions:
   *
   * 1. Roads that allow for high volume, maximum speed traffic movement between and through major metropolitan areas.
   * 2. Roads that are used to channel traffic to functional class 1 roads for travel between and through cities in the shortest amount of time.
   * 3. Roads that intersect functional class 2 roads and provide a high volume of traffic movement at a lower level of mobility than functional class 2 roads.
   * 4. Roads that provide for a high volume of traffic movement at moderate speeds between neighborhoods.
   * 5. Roads with volume and traffic movement below the level of any other functional class.
   *
   * @public
   */
  FunctionalClassification?: number | undefined;

  /**
   * Attributes corresponding to a gate. The gate is present at the end of the returned span.
   *
   * @public
   */
  Gate?: RouteSpanGateAttribute | undefined;

  /**
   * Offset in the leg geometry corresponding to the start of this span.
   *
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * Incidents corresponding to the span. These index into the Incidents in the parent Leg.
   *
   * @public
   */
  Incidents?: number[] | undefined;

  /**
   * Provides an array of names of the vehicle span in available languages.
   *
   * @public
   */
  Names?: LocalizedString[] | undefined;

  /**
   * Notices are additional information returned that indicate issues that occurred during route calculation.
   *
   * @public
   */
  Notices?: number[] | undefined;

  /**
   * Attributes corresponding to a railway crossing. The gate is present at the end of the returned span.
   *
   * @public
   */
  RailwayCrossing?: RouteSpanRailwayCrossingAttribute | undefined;

  /**
   * 2-3 letter Region code corresponding to the Span. This is either a province or a state.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * Attributes for the road segment corresponding to the span.
   *
   * @public
   */
  RoadAttributes?: RouteSpanRoadAttribute[] | undefined;

  /**
   * Designated route name or number corresponding to the span.
   *
   * @public
   */
  RouteNumbers?: RouteNumber[] | undefined;

  /**
   * Access attributes for a scooter corresponding to the span.
   *
   * @public
   */
  ScooterAccess?: RouteSpanScooterAccessAttribute[] | undefined;

  /**
   * Speed limit details corresponding to the span.
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  SpeedLimit?: RouteSpanSpeedLimitDetails | undefined;

  /**
   * Toll systems are authorities that collect payments for the toll.
   *
   * @public
   */
  TollSystems?: number[] | undefined;

  /**
   * Access attributes for a truck corresponding to the span.
   *
   * @public
   */
  TruckAccess?: RouteSpanTruckAccessAttribute[] | undefined;

  /**
   * Truck road type identifiers. `BK1` through `BK4` apply only to Sweden. `A2,A4,B2,B4,C,D,ET2,ET4` apply only to Mexico.
   *
   * > **Note:** There are currently no other supported values as of 26th April 2024.
   *
   * @public
   */
  TruckRoadTypes?: number[] | undefined;

  /**
   * Duration of the computed span under typical traffic congestion.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  TypicalDuration?: number | undefined;

  /**
   * Zones corresponding to this leg of the route.
   *
   * @public
   */
  Zones?: number[] | undefined;
}

/**
 * Summary including duration and distance for the entire leg.
 *
 * @public
 */
export interface RouteVehicleOverviewSummary {
  /**
   * Total duration in free flowing traffic, which is the best case or shortest duration possible to cover the leg.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  BestCaseDuration?: number | undefined;

  /**
   * Distance of the entire leg.
   *
   * **Unit**: `meters`
   *
   * @public
   */
  Distance: number | undefined;

  /**
   * Duration of the entire leg.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Duration of the leg under typical traffic congestion.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  TypicalDuration?: number | undefined;
}

/**
 * Summarized details of the route.
 *
 * @public
 */
export interface RouteVehicleTravelOnlySummary {
  /**
   * Total duration in free flowing traffic, which is the best case or shortest duration possible to cover the leg.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  BestCaseDuration?: number | undefined;

  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Duration of the leg under typical traffic congestion.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  TypicalDuration?: number | undefined;
}

/**
 * Summarized details of the route.
 *
 * @public
 */
export interface RouteVehicleSummary {
  /**
   * Summarized details for the leg including before travel, travel and after travel steps.
   *
   * @public
   */
  Overview?: RouteVehicleOverviewSummary | undefined;

  /**
   * Summarized details for the leg including travel steps only. The Distance for the travel only portion of the journey is in meters
   *
   * @public
   */
  TravelOnly?: RouteVehicleTravelOnlySummary | undefined;
}

/**
 * Locations or sites where the toll fare is collected.
 *
 * @public
 */
export interface RouteTollPaymentSite {
  /**
   * Name of the payment site.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;
}

/**
 * Price range with a minimum and maximum value, if a range.
 *
 * @public
 */
export interface RouteTollPriceValueRange {
  /**
   * Minimum price.
   *
   * @public
   */
  Min: number | undefined;

  /**
   * Maximum price.
   *
   * @public
   */
  Max: number | undefined;
}

/**
 * The toll price.
 *
 * @public
 */
export interface RouteTollPrice {
  /**
   * Currency code corresponding to the price. This is the same as Currency specified in the request.
   *
   * @public
   */
  Currency: string | undefined;

  /**
   * If the price is an estimate or an exact value.
   *
   * @public
   */
  Estimate: boolean | undefined;

  /**
   * Duration for which the price corresponds to.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  PerDuration?: number | undefined;

  /**
   * If the price is a range or an exact value. If any of the toll fares making up the route is a range, the overall price is also a range.
   *
   * @public
   */
  Range: boolean | undefined;

  /**
   * Price range with a minimum and maximum value, if a range.
   *
   * @public
   */
  RangeValue?: RouteTollPriceValueRange | undefined;

  /**
   * Exact price, if not a range.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * Period for which the pass is valid.
 *
 * @public
 */
export interface RouteTollPassValidityPeriod {
  /**
   * Validity period.
   *
   * @public
   */
  Period: RouteTollPassValidityPeriodType | undefined;

  /**
   * Counts for the validity period.
   *
   * @public
   */
  PeriodCount?: number | undefined;
}

/**
 * Details if the toll rate can be a pass that supports multiple trips.
 *
 * @public
 */
export interface RouteTollPass {
  /**
   * If the pass includes the rate for the return leg of the trip.
   *
   * @public
   */
  IncludesReturnTrip?: boolean | undefined;

  /**
   * If the pass is only valid for senior persons.
   *
   * @public
   */
  SeniorPass?: boolean | undefined;

  /**
   * If the toll pass can be transferred, and how many times.
   *
   * @public
   */
  TransferCount?: number | undefined;

  /**
   * Number of trips the pass is valid for.
   *
   * @public
   */
  TripCount?: number | undefined;

  /**
   * Period for which the pass is valid.
   *
   * @public
   */
  ValidityPeriod?: RouteTollPassValidityPeriod | undefined;
}

/**
 * Transponders for which this toll can be applied.
 *
 * @public
 */
export interface RouteTransponder {
  /**
   * Names of the toll system collecting the toll.
   *
   * @public
   */
  SystemName?: string | undefined;
}

/**
 * The toll rate.
 *
 * @public
 */
export interface RouteTollRate {
  /**
   * Time when the rate is valid.
   *
   * @public
   */
  ApplicableTimes?: string | undefined;

  /**
   * Price in the converted currency as specified in the request.
   *
   * @public
   */
  ConvertedPrice?: RouteTollPrice | undefined;

  /**
   * The Toll rate Id.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Price in the local regional currency.
   *
   * @public
   */
  LocalPrice: RouteTollPrice | undefined;

  /**
   * The name of the toll.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Details if the toll rate can be a pass that supports multiple trips.
   *
   * @public
   */
  Pass?: RouteTollPass | undefined;

  /**
   * Accepted payment methods at the toll.
   *
   * @public
   */
  PaymentMethods: RouteTollPaymentMethod[] | undefined;

  /**
   * Transponders for which this toll can be applied.
   *
   * @public
   */
  Transponders: RouteTransponder[] | undefined;
}

/**
 * Provides details about toll information along a route, including the payment sites, applicable toll rates, toll systems, and the country associated with the toll collection.
 *
 * @public
 */
export interface RouteToll {
  /**
   * The alpha-2 or alpha-3 character code for the country.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * Locations or sites where the toll fare is collected.
   *
   * @public
   */
  PaymentSites: RouteTollPaymentSite[] | undefined;

  /**
   * Toll rates that need to be paid to travel this leg of the route.
   *
   * @public
   */
  Rates: RouteTollRate[] | undefined;

  /**
   * Toll systems are authorities that collect payments for the toll.
   *
   * @public
   */
  Systems: number[] | undefined;
}

/**
 * Toll systems are authorities that collect payments for the toll.
 *
 * @public
 */
export interface RouteTollSystem {
  /**
   * The toll system name.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Details related to the continue highway step.
 *
 * @public
 */
export interface RouteContinueHighwayStepDetails {
  /**
   * Name of the intersection, if applicable to the step.
   *
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * Steering direction for the step.
   *
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * Angle of the turn.
   *
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * Intensity of the turn.
   *
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * Details related to the enter highway step.
 *
 * @public
 */
export interface RouteEnterHighwayStepDetails {
  /**
   * Name of the intersection, if applicable to the step.
   *
   * @public
   */
  Intersection: LocalizedString[] | undefined;

  /**
   * Steering direction for the step.
   *
   * @public
   */
  SteeringDirection?: RouteSteeringDirection | undefined;

  /**
   * Angle of the turn.
   *
   * @public
   */
  TurnAngle?: number | undefined;

  /**
   * Intensity of the turn.
   *
   * @public
   */
  TurnIntensity?: RouteTurnIntensity | undefined;
}

/**
 * Steps of a leg that correspond to the travel portion of the leg.
 *
 * @public
 */
export interface RouteVehicleTravelStep {
  /**
   * Details that are specific to a Continue Highway step.
   *
   * @public
   */
  ContinueHighwayStepDetails?: RouteContinueHighwayStepDetails | undefined;

  /**
   * Details that are specific to a Continue step.
   *
   * @public
   */
  ContinueStepDetails?: RouteContinueStepDetails | undefined;

  /**
   * Details of the current road.
   *
   * @public
   */
  CurrentRoad?: RouteRoad | undefined;

  /**
   * Distance of the step.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * Duration of the step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Details that are specific to a Enter Highway step.
   *
   * @public
   */
  EnterHighwayStepDetails?: RouteEnterHighwayStepDetails | undefined;

  /**
   * Exit number of the road exit, if applicable.
   *
   * @public
   */
  ExitNumber?: LocalizedString[] | undefined;

  /**
   * Details that are specific to a Roundabout Exit step.
   *
   * @public
   */
  ExitStepDetails?: RouteExitStepDetails | undefined;

  /**
   * Offset in the leg geometry corresponding to the start of this step.
   *
   * @public
   */
  GeometryOffset?: number | undefined;

  /**
   * Brief description of the step in the requested language.
   *
   * > **Note:** Only available when the TravelStepType is Default.
   *
   * @public
   */
  Instruction?: string | undefined;

  /**
   * Details that are specific to a Keep step.
   *
   * @public
   */
  KeepStepDetails?: RouteKeepStepDetails | undefined;

  /**
   * Details of the next road. See RouteRoad for details of sub-attributes.
   *
   * @public
   */
  NextRoad?: RouteRoad | undefined;

  /**
   * Details that are specific to a Ramp step.
   *
   * @public
   */
  RampStepDetails?: RouteRampStepDetails | undefined;

  /**
   * Details that are specific to a Roundabout Enter step.
   *
   * @public
   */
  RoundaboutEnterStepDetails?: RouteRoundaboutEnterStepDetails | undefined;

  /**
   * Details that are specific to a Roundabout Exit step.
   *
   * @public
   */
  RoundaboutExitStepDetails?: RouteRoundaboutExitStepDetails | undefined;

  /**
   * Details that are specific to a Roundabout Pass step.
   *
   * @public
   */
  RoundaboutPassStepDetails?: RouteRoundaboutPassStepDetails | undefined;

  /**
   * Sign post information of the action, applicable only for TurnByTurn steps. See RouteSignpost for details of sub-attributes.
   *
   * @public
   */
  Signpost?: RouteSignpost | undefined;

  /**
   * Details that are specific to a Turn step.
   *
   * @public
   */
  TurnStepDetails?: RouteTurnStepDetails | undefined;

  /**
   * Type of the step.
   *
   * @public
   */
  Type: RouteVehicleTravelStepType | undefined;

  /**
   * Details that are specific to a Turn step.
   *
   * @public
   */
  UTurnStepDetails?: RouteUTurnStepDetails | undefined;
}

/**
 * The zone.
 *
 * @public
 */
export interface RouteZone {
  /**
   * The zone category.
   *
   * @public
   */
  Category?: RouteZoneCategory | undefined;

  /**
   * The name of the zone.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Steps of a leg that correspond to the travel portion of the leg.
 *
 * @public
 */
export interface RouteVehicleLegDetails {
  /**
   * Steps of a leg that must be performed after the travel portion of the leg.
   *
   * @public
   */
  AfterTravelSteps: RouteVehicleAfterTravelStep[] | undefined;

  /**
   * Details corresponding to the arrival for the leg.
   *
   * @public
   */
  Arrival: RouteVehicleArrival | undefined;

  /**
   * Details corresponding to the departure for the leg.
   *
   * @public
   */
  Departure: RouteVehicleDeparture | undefined;

  /**
   * Incidents corresponding to this leg of the route. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Incidents: RouteVehicleIncident[] | undefined;

  /**
   * Notices are additional information returned that indicate issues that occurred during route calculation. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Notices: RouteVehicleNotice[] | undefined;

  /**
   * Waypoints that were passed through during the leg. This includes the waypoints that were configured with the PassThrough option.
   *
   * @public
   */
  PassThroughWaypoints: RoutePassThroughWaypoint[] | undefined;

  /**
   * Spans that were computed for the requested SpanAdditionalFeatures. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Spans: RouteVehicleSpan[] | undefined;

  /**
   * Summarized details of the leg.
   *
   * @public
   */
  Summary?: RouteVehicleSummary | undefined;

  /**
   * Toll related options. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Tolls: RouteToll[] | undefined;

  /**
   * Toll systems are authorities that collect payments for the toll. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  TollSystems: RouteTollSystem[] | undefined;

  /**
   * Steps of a leg that must be performed before the travel portion of the leg.
   *
   * @public
   */
  TravelSteps: RouteVehicleTravelStep[] | undefined;

  /**
   * Truck road type identifiers. `BK1` through `BK4` apply only to Sweden. `A2,A4,B2,B4,C,D,ET2,ET4` apply only to Mexico. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * > **Note:** There are currently no other supported values as of 26th April 2024.
   *
   * @public
   */
  TruckRoadTypes: string[] | undefined;

  /**
   * Zones corresponding to this leg of the route. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Zones: RouteZone[] | undefined;
}

/**
 * A leg is a section of a route from one waypoint to the next. A leg could be of type Vehicle, Pedestrian or Ferry. Legs of different types could occur together within a single route. For example, a car employing the use of a Ferry will contain Vehicle legs corresponding to journey on land, and Ferry legs corresponding to the journey via Ferry.
 *
 * @public
 */
export interface RouteLeg {
  /**
   * FerryLegDetails is populated when the Leg type is Ferry, and provides additional information that is specific to ferry travel. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  FerryLegDetails?: RouteFerryLegDetails | undefined;

  /**
   * Geometry of the area to be avoided.
   *
   * @public
   */
  Geometry: RouteLegGeometry | undefined;

  /**
   * List of languages for instructions within steps in the response. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Language?: string | undefined;

  /**
   * Details related to the pedestrian leg.
   *
   * @public
   */
  PedestrianLegDetails?: RoutePedestrianLegDetails | undefined;

  /**
   * Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.
   *
   * Default value: `Car`
   *
   * @public
   */
  TravelMode: RouteLegTravelMode | undefined;

  /**
   * Type of the leg.
   *
   * @public
   */
  Type: RouteLegType | undefined;

  /**
   * Details related to the vehicle leg.
   *
   * @public
   */
  VehicleLegDetails?: RouteVehicleLegDetails | undefined;

  /**
   * Details related to the rental leg.
   *
   * > **Note:** Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  RentalLegDetails?: RouteRentalLegDetails | undefined;

  /**
   * Details related to the taxi leg.
   *
   * > **Note:** Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  TaxiLegDetails?: RouteTaxiLegDetails | undefined;

  /**
   * Details related to the transit leg.
   *
   * @public
   */
  TransitLegDetails?: RouteTransitLegDetails | undefined;
}

/**
 * Important labels including names and route numbers that differentiate the current route from the alternatives presented.
 *
 * @public
 */
export interface RouteMajorRoadLabel {
  /**
   * Name of the road (localized).
   *
   * @public
   */
  RoadName?: LocalizedString | undefined;

  /**
   * Route number of the road.
   *
   * @public
   */
  RouteNumber?: RouteNumber | undefined;
}

/**
 * Summary of the route and toll price.
 *
 * @public
 */
export interface RouteTollPriceSummary {
  /**
   * Currency code corresponding to the price. This is the same as Currency specified in the request.
   *
   * @public
   */
  Currency: string | undefined;

  /**
   * If the price is an estimate or an exact value.
   *
   * @public
   */
  Estimate: boolean | undefined;

  /**
   * If the price is a range or an exact value. If any of the toll fares making up the route is a range, the overall price is also a range.
   *
   * @public
   */
  Range: boolean | undefined;

  /**
   * Price range with a minimum and maximum value, if a range.
   *
   * @public
   */
  RangeValue?: RouteTollPriceValueRange | undefined;

  /**
   * Exact price, if not a range.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * The toll summary for the complete route.
 *
 * @public
 */
export interface RouteTollSummary {
  /**
   * Total toll summary for the complete route. Total is the only summary available today.
   *
   * @public
   */
  Total?: RouteTollPriceSummary | undefined;
}

/**
 * Summarized details for the leg including travel steps only. The Distance for the travel only portion of the journey is the same as the Distance within the Overview summary.
 *
 * @public
 */
export interface RouteSummary {
  /**
   * Distance of the route.
   *
   * @public
   */
  Distance?: number | undefined;

  /**
   * Duration of the route.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * Toll summary for the complete route.
   *
   * @public
   */
  Tolls?: RouteTollSummary | undefined;
}

/**
 * The route.
 *
 * @public
 */
export interface Route {
  /**
   * A leg is a section of a route from one waypoint to the next. A leg could be of type Vehicle, Pedestrian or Ferry. Legs of different types could occur together within a single route. For example, a car employing the use of a Ferry will contain Vehicle legs corresponding to journey on land, and Ferry legs corresponding to the journey via Ferry.
   *
   * @public
   */
  Legs: RouteLeg[] | undefined;

  /**
   * Important labels including names and route numbers that differentiate the current route from the alternatives presented.
   *
   * @public
   */
  MajorRoadLabels: RouteMajorRoadLabel[] | undefined;

  /**
   * Summarized details of the leg.
   *
   * @public
   */
  Summary?: RouteSummary | undefined;
}

/**
 * @public
 */
export interface CalculateRoutesResponse {
  /**
   * Specifies the format of the geometry returned for each leg of the route.
   *
   * @public
   */
  LegGeometryFormat: GeometryFormat | undefined;

  /**
   * Notices are additional information returned that indicate issues that occurred during route calculation. Not supported in `ap-southeast-1` and `ap-southeast-5` regions for [GrabMaps](https://docs.aws.amazon.com/location/latest/developerguide/GrabMaps.html) customers.
   *
   * @public
   */
  Notices: RouteResponseNotice[] | undefined;

  /**
   * The pricing bucket for which the query is charged at.
   *
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * The path from the origin to the destination.
   *
   * @public
   */
  Routes: Route[] | undefined;
}

/**
 * Geometry of the area to be avoided.
 *
 * @public
 */
export interface WaypointOptimizationAvoidanceAreaGeometry {
  /**
   * Geometry defined as a bounding box. The first pair represents the X and Y coordinates (longitude and latitude,) of the southwest corner of the bounding box; the second pair represents the X and Y coordinates (longitude and latitude) of the northeast corner.
   *
   * @public
   */
  BoundingBox?: number[] | undefined;
}

/**
 * The area to be avoided.
 *
 * @public
 */
export interface WaypointOptimizationAvoidanceArea {
  /**
   * Geometry of the area to be avoided.
   *
   * @public
   */
  Geometry: WaypointOptimizationAvoidanceAreaGeometry | undefined;
}

/**
 * Specifies options for areas to avoid. This is a best-effort avoidance setting, meaning the router will try to honor the avoidance preferences but may still include restricted areas if no feasible alternative route exists. If avoidance options are not followed, the response will indicate that the avoidance criteria were violated.
 *
 * @public
 */
export interface WaypointOptimizationAvoidanceOptions {
  /**
   * Areas to be avoided.
   *
   * @public
   */
  Areas?: WaypointOptimizationAvoidanceArea[] | undefined;

  /**
   * Avoidance options for cars-shuttles-trains.
   *
   * @public
   */
  CarShuttleTrains?: boolean | undefined;

  /**
   * Avoid controlled access highways while calculating the route.
   *
   * @public
   */
  ControlledAccessHighways?: boolean | undefined;

  /**
   * Avoid dirt roads while calculating the route.
   *
   * @public
   */
  DirtRoads?: boolean | undefined;

  /**
   * Avoidance options for ferries.
   *
   * @public
   */
  Ferries?: boolean | undefined;

  /**
   * Avoids roads where the specified toll transponders are the only mode of payment.
   *
   * @public
   */
  TollRoads?: boolean | undefined;

  /**
   * Avoid tunnels while calculating the route.
   *
   * @public
   */
  Tunnels?: boolean | undefined;

  /**
   * Avoid U-turns for calculation on highways and motorways.
   *
   * @public
   */
  UTurns?: boolean | undefined;
}

/**
 * Driving distance related options.
 *
 * @public
 */
export interface WaypointOptimizationDrivingDistanceOptions {
  /**
   * DrivingDistance assigns all the waypoints that are within driving distance of each other into a single cluster.
   *
   * @public
   */
  DrivingDistance: number | undefined;
}

/**
 * Options for WaypointOptimizationClustering.
 *
 * @public
 */
export interface WaypointOptimizationClusteringOptions {
  /**
   * The algorithm to be used. `DrivingDistance` assigns all the waypoints that are within driving distance of each other into a single cluster. `TopologySegment` assigns all the waypoints that are within the same topology segment into a single cluster. A Topology segment is a linear stretch of road between two junctions.
   *
   * @public
   */
  Algorithm: WaypointOptimizationClusteringAlgorithm | undefined;

  /**
   * Driving distance options to be used when the clustering algorithm is DrivingDistance.
   *
   * @public
   */
  DrivingDistanceOptions?: WaypointOptimizationDrivingDistanceOptions | undefined;
}

/**
 * Hours of entry.
 *
 * @public
 */
export interface WaypointOptimizationAccessHoursEntry {
  /**
   * Day of the week.
   *
   * @public
   */
  DayOfWeek: DayOfWeek | undefined;

  /**
   * Time of the day.
   *
   * @public
   */
  TimeOfDay: string | undefined;
}

/**
 * Access hours corresponding to when a destination can be visited.
 *
 * @public
 */
export interface WaypointOptimizationAccessHours {
  /**
   * Contains the ID of the starting waypoint in this connection.
   *
   * @public
   */
  From: WaypointOptimizationAccessHoursEntry | undefined;

  /**
   * Contains the ID of the ending waypoint in this connection.
   *
   * @public
   */
  To: WaypointOptimizationAccessHoursEntry | undefined;
}

/**
 * Options to configure matching the provided position to a side of the street.
 *
 * @public
 */
export interface WaypointOptimizationSideOfStreetOptions {
  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Strategy that defines when the side of street position should be used. AnyStreet will always use the provided position.
   *
   * Default value: `DividedStreetOnly`
   *
   * @public
   */
  UseWith?: SideOfStreetMatchingStrategy | undefined;
}

/**
 * Destination related options.
 *
 * @public
 */
export interface WaypointOptimizationDestinationOptions {
  /**
   * Access hours corresponding to when a waypoint can be visited.
   *
   * @public
   */
  AccessHours?: WaypointOptimizationAccessHours | undefined;

  /**
   * Appointment time at the destination.
   *
   * @public
   */
  AppointmentTime?: string | undefined;

  /**
   * GPS Heading at the position.
   *
   * @public
   */
  Heading?: number | undefined;

  /**
   * The waypoint Id.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Service time spent at the destination. At an appointment, the service time should be the appointment duration.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  ServiceDuration?: number | undefined;

  /**
   * Options to configure matching the provided position to a side of the street.
   *
   * @public
   */
  SideOfStreet?: WaypointOptimizationSideOfStreetOptions | undefined;
}

/**
 * Driver work-rest schedules defined by a short and long cycle. A rest needs to be taken after the short work duration. The short cycle can be repeated until you hit the long work duration, at which point the long rest duration should be taken before restarting.
 *
 * **Unit**: `seconds`
 *
 * @public
 */
export interface WaypointOptimizationRestCycleDurations {
  /**
   * Resting phase of the cycle.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  RestDuration: number | undefined;

  /**
   * Working phase of the cycle.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  WorkDuration: number | undefined;
}

/**
 * Resting phase of the cycle.
 *
 * @public
 */
export interface WaypointOptimizationRestCycles {
  /**
   * Long cycle for a driver work-rest schedule.
   *
   * @public
   */
  LongCycle: WaypointOptimizationRestCycleDurations | undefined;

  /**
   * Short cycle for a driver work-rest schedule
   *
   * @public
   */
  ShortCycle: WaypointOptimizationRestCycleDurations | undefined;
}

/**
 * Pre defined rest profiles for a driver schedule. The only currently supported profile is EU.
 *
 * @public
 */
export interface WaypointOptimizationRestProfile {
  /**
   * Pre defined rest profiles for a driver schedule. The only currently supported profile is EU.
   *
   * @public
   */
  Profile: string | undefined;
}

/**
 * Driver related options.
 *
 * @public
 */
export interface WaypointOptimizationDriverOptions {
  /**
   * Driver work-rest schedules defined by a short and long cycle. A rest needs to be taken after the short work duration. The short cycle can be repeated until you hit the long work duration, at which point the long rest duration should be taken before restarting.
   *
   * @public
   */
  RestCycles?: WaypointOptimizationRestCycles | undefined;

  /**
   * Pre defined rest profiles for a driver schedule. The only currently supported profile is EU.
   *
   * @public
   */
  RestProfile?: WaypointOptimizationRestProfile | undefined;

  /**
   * If the service time provided at a waypoint/destination should be considered as rest or work. This contributes to the total time breakdown returned within the response.
   *
   * @public
   */
  TreatServiceTimeAs?: WaypointOptimizationServiceTimeTreatment | undefined;
}

/**
 * Specifies strict exclusion options for the route calculation. This setting mandates that the router will avoid any routes that include the specified options, rather than merely attempting to minimize them.
 *
 * @public
 */
export interface WaypointOptimizationExclusionOptions {
  /**
   * List of countries to be avoided defined by two-letter or three-letter country codes.
   *
   * @public
   */
  Countries: string[] | undefined;
}

/**
 * Origin related options.
 *
 * @public
 */
export interface WaypointOptimizationOriginOptions {
  /**
   * The Origin Id.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Options related to traffic.
 *
 * @public
 */
export interface WaypointOptimizationTrafficOptions {
  /**
   * Determines if traffic should be used or ignored while calculating the route.
   *
   * Default value: `UseTrafficData`
   *
   * @public
   */
  Usage?: TrafficUsage | undefined;
}

/**
 * Options related to a pedestrian.
 *
 * @public
 */
export interface WaypointOptimizationPedestrianOptions {
  /**
   * Walking speed.
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  Speed?: number | undefined;
}

/**
 * Trailer options corresponding to the vehicle.
 *
 * @public
 */
export interface WaypointOptimizationTrailerOptions {
  /**
   * Number of trailers attached to the vehicle.
   *
   * Default value: `0`
   *
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * Travel mode options when the provided travel mode is `Truck`.
 *
 * @public
 */
export interface WaypointOptimizationTruckOptions {
  /**
   * Gross weight of the vehicle including trailers, and goods at capacity.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  GrossWeight?: number | undefined;

  /**
   * List of Hazardous cargo contained in the vehicle.
   *
   * @public
   */
  HazardousCargos?: WaypointOptimizationHazardousCargoType[] | undefined;

  /**
   * Height of the vehicle.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  Height?: number | undefined;

  /**
   * Length of the vehicle.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  Length?: number | undefined;

  /**
   * Trailer options corresponding to the vehicle.
   *
   * @public
   */
  Trailer?: WaypointOptimizationTrailerOptions | undefined;

  /**
   * The type of truck: `LightTruck` for smaller delivery vehicles, `StraightTruck` for rigid body trucks, or `Tractor` for tractor-trailer combinations.
   *
   * @public
   */
  TruckType?: WaypointOptimizationTruckType | undefined;

  /**
   * The tunnel restriction code.
   *
   * Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.
   *
   * - *Tunnel Category B*
   *
   *   - *Risk Level*: Limited risk
   *   - *Restrictions*: Few restrictions
   * - *Tunnel Category C*
   *
   *   - *Risk Level*: Medium risk
   *   - *Restrictions*: Some restrictions
   * - *Tunnel Category D*
   *
   *   - *Risk Level*: High risk
   *   - *Restrictions*: Many restrictions occur
   * - *Tunnel Category E*
   *
   *   - *Risk Level*: Very high risk
   *   - *Restrictions*: Restricted tunnel
   *
   * @public
   */
  TunnelRestrictionCode?: string | undefined;

  /**
   * Heaviest weight per axle irrespective of the axle type or the axle group. Meant for usage in countries where the differences in axle types or axle groups are not distinguished.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  WeightPerAxle?: number | undefined;

  /**
   * Width of the vehicle.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  Width?: number | undefined;
}

/**
 * Travel mode related options for the provided travel mode.
 *
 * @public
 */
export interface WaypointOptimizationTravelModeOptions {
  /**
   * Travel mode options when the provided travel mode is `Pedestrian`.
   *
   * @public
   */
  Pedestrian?: WaypointOptimizationPedestrianOptions | undefined;

  /**
   * Travel mode options when the provided travel mode is `Truck`.
   *
   * @public
   */
  Truck?: WaypointOptimizationTruckOptions | undefined;
}

/**
 * Waypoint between the Origin and Destination.
 *
 * @public
 */
export interface WaypointOptimizationWaypoint {
  /**
   * Access hours corresponding to when a waypoint can be visited.
   *
   * @public
   */
  AccessHours?: WaypointOptimizationAccessHours | undefined;

  /**
   * Appointment time at the waypoint.
   *
   * @public
   */
  AppointmentTime?: string | undefined;

  /**
   * Constraint defining what waypoints are to be visited after this waypoint.
   *
   * @public
   */
  Before?: number[] | undefined;

  /**
   * GPS Heading at the position.
   *
   * @public
   */
  Heading?: number | undefined;

  /**
   * The waypoint Id.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Service time spent at the waypoint. At an appointment, the service time should be the appointment duration.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  ServiceDuration?: number | undefined;

  /**
   * Options to configure matching the provided position to a side of the street.
   *
   * @public
   */
  SideOfStreet?: WaypointOptimizationSideOfStreetOptions | undefined;
}

/**
 * @public
 */
export interface OptimizeWaypointsRequest {
  /**
   * Features that are avoided. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, this setting is ignored.
   *
   * @public
   */
  Avoid?: WaypointOptimizationAvoidanceOptions | undefined;

  /**
   * Clustering allows you to specify how nearby waypoints can be clustered to improve the optimized sequence.
   *
   * @public
   */
  Clustering?: WaypointOptimizationClusteringOptions | undefined;

  /**
   * Departure time from the waypoint.
   *
   * Time format:`YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm`
   *
   * Examples:
   *
   * `2020-04-22T17:57:24Z`
   *
   * `2020-04-22T17:57:24+02:00`
   *
   * @public
   */
  DepartureTime?: string | undefined;

  /**
   * The final position for the route in the World Geodetic System (WGS 84) format: `[longitude, latitude]`.
   *
   * @public
   */
  Destination?: number[] | undefined;

  /**
   * Destination related options.
   *
   * @public
   */
  DestinationOptions?: WaypointOptimizationDestinationOptions | undefined;

  /**
   * Driver related options.
   *
   * @public
   */
  Driver?: WaypointOptimizationDriverOptions | undefined;

  /**
   * Features to be strictly excluded while calculating the route.
   *
   * @public
   */
  Exclude?: WaypointOptimizationExclusionOptions | undefined;

  /**
   * Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Specifies the optimization criteria for the calculated sequence.
   *
   * Default value: `FastestRoute`.
   *
   * @public
   */
  OptimizeSequencingFor?: WaypointOptimizationSequencingObjective | undefined;

  /**
   * The start position for the route in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Origin: number[] | undefined;

  /**
   * Origin related options.
   *
   * @public
   */
  OriginOptions?: WaypointOptimizationOriginOptions | undefined;

  /**
   * Traffic-related options.
   *
   * @public
   */
  Traffic?: WaypointOptimizationTrafficOptions | undefined;

  /**
   * Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.
   *
   * Default value: `Car`
   *
   * @public
   */
  TravelMode?: WaypointOptimizationTravelMode | undefined;

  /**
   * Travel mode related options for the provided travel mode.
   *
   * @public
   */
  TravelModeOptions?: WaypointOptimizationTravelModeOptions | undefined;

  /**
   * List of waypoints between the `Origin` and `Destination`, in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * The maximum number of waypoints allowed per request:
   *
   * - Maximum 50 waypoints per request
   * - Maximum 20 waypoints when using constraints (`AccessHours`, `AppointmentTime`, `ServiceDuration`, `Heading`, `SideOfStreet`, `Before`)
   *
   * @public
   */
  Waypoints?: WaypointOptimizationWaypoint[] | undefined;
}

/**
 * This contains information such as distance and duration from one waypoint to the next waypoint in the sequence.
 *
 * @public
 */
export interface WaypointOptimizationConnection {
  /**
   * Distance of the step.
   *
   * @public
   */
  Distance: number | undefined;

  /**
   * contains the ID of the starting waypoint in this connection.
   *
   * @public
   */
  From: string | undefined;

  /**
   * Resting time before the driver can continue driving.
   *
   * @public
   */
  RestDuration: number | undefined;

  /**
   * Contains the ID of the ending waypoint in this connection.
   *
   * @public
   */
  To: string | undefined;

  /**
   * Total duration.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  TravelDuration: number | undefined;

  /**
   * Duration of a wait step.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  WaitDuration: number | undefined;
}

/**
 * The failed constraint.
 *
 * @public
 */
export interface WaypointOptimizationFailedConstraint {
  /**
   * The failed constraint.
   *
   * @public
   */
  Constraint?: WaypointOptimizationConstraint | undefined;

  /**
   * Reason for the failed constraint.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * The impeding waypoint.
 *
 * @public
 */
export interface WaypointOptimizationImpedingWaypoint {
  /**
   * Failed constraints for an impeding waypoint.
   *
   * @public
   */
  FailedConstraints: WaypointOptimizationFailedConstraint[] | undefined;

  /**
   * The waypoint Id.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;
}

/**
 * The optimized waypoint.
 *
 * @public
 */
export interface WaypointOptimizationOptimizedWaypoint {
  /**
   * Estimated time of arrival at the destination.
   *
   * Time format:`YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm`
   *
   * Examples:
   *
   * `2020-04-22T17:57:24Z`
   *
   * `2020-04-22T17:57:24+02:00`
   *
   * @public
   */
  ArrivalTime?: string | undefined;

  /**
   * Index of the cluster the waypoint is associated with. The index is included in the response only if clustering was performed while processing the request.
   *
   * @public
   */
  ClusterIndex?: number | undefined;

  /**
   * Estimated time of departure from the origin.
   *
   * Time format:`YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm`
   *
   * Examples:
   *
   * `2020-04-22T17:57:24Z`
   *
   * `2020-04-22T17:57:24+02:00`
   *
   * @public
   */
  DepartureTime: string | undefined;

  /**
   * The waypoint Id.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;
}

/**
 * Time breakdown for the sequence.
 *
 * @public
 */
export interface WaypointOptimizationTimeBreakdown {
  /**
   * Resting phase of the cycle.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  RestDuration: number | undefined;

  /**
   * Service time spent at the destination. At an appointment, the service time should be the appointment duration.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  ServiceDuration: number | undefined;

  /**
   * Traveling phase of the cycle.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  TravelDuration: number | undefined;

  /**
   * Waiting phase of the cycle.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  WaitDuration: number | undefined;
}

/**
 * @public
 */
export interface OptimizeWaypointsResponse {
  /**
   * Details about the connection from one waypoint to the next, within the optimized sequence.
   *
   * @public
   */
  Connections: WaypointOptimizationConnection[] | undefined;

  /**
   * Overall distance to travel the whole sequence.
   *
   * @public
   */
  Distance: number | undefined;

  /**
   * Overall duration to travel the whole sequence.
   *
   * **Unit**: `seconds`
   *
   * @public
   */
  Duration: number | undefined;

  /**
   * Returns waypoints that caused the optimization problem to fail, and the constraints that were unsatisfied leading to the failure.
   *
   * @public
   */
  ImpedingWaypoints: WaypointOptimizationImpedingWaypoint[] | undefined;

  /**
   * Waypoints in the order of the optimized sequence.
   *
   * @public
   */
  OptimizedWaypoints: WaypointOptimizationOptimizedWaypoint[] | undefined;

  /**
   * The pricing bucket for which the query is charged at.
   *
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * Time breakdown for the sequence.
   *
   * @public
   */
  TimeBreakdown: WaypointOptimizationTimeBreakdown | undefined;
}

/**
 * TracePoint indices for which the provided notice code corresponds to.
 *
 * @public
 */
export interface RoadSnapTracePoint {
  /**
   * GPS Heading at the position.
   *
   * @public
   */
  Heading?: number | undefined;

  /**
   * Position in World Geodetic System (WGS 84) format: [longitude, latitude].
   *
   * @public
   */
  Position: number[] | undefined;

  /**
   * Speed at the specified trace point .
   *
   * **Unit**: `kilometers per hour`
   *
   * @public
   */
  Speed?: number | undefined;

  /**
   * Timestamp of the event.
   *
   * @public
   */
  Timestamp?: string | undefined;
}

/**
 * Trailer options corresponding to the vehicle.
 *
 * @public
 */
export interface RoadSnapTrailerOptions {
  /**
   * Number of trailers attached to the vehicle.
   *
   * Default value: `0`
   *
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * Travel mode options when the provided travel mode is `Truck`.
 *
 * @public
 */
export interface RoadSnapTruckOptions {
  /**
   * Gross weight of the vehicle including trailers, and goods at capacity.
   *
   * **Unit**: `kilograms`
   *
   * @public
   */
  GrossWeight?: number | undefined;

  /**
   * List of Hazardous cargos contained in the vehicle.
   *
   * @public
   */
  HazardousCargos?: RoadSnapHazardousCargoType[] | undefined;

  /**
   * Height of the vehicle.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  Height?: number | undefined;

  /**
   * Length of the vehicle.
   *
   * **Unit**: `centimeters`
   *
   * @public
   */
  Length?: number | undefined;

  /**
   * Trailer options corresponding to the vehicle.
   *
   * @public
   */
  Trailer?: RoadSnapTrailerOptions | undefined;

  /**
   * The tunnel restriction code.
   *
   * Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.
   *
   * - *Tunnel Category B*
   *
   *   - *Risk Level*: Limited risk
   *   - *Restrictions*: Few restrictions
   * - *Tunnel Category C*
   *
   *   - *Risk Level*: Medium risk
   *   - *Restrictions*: Some restrictions
   * - *Tunnel Category D*
   *
   *   - *Risk Level*: High risk
   *   - *Restrictions*: Many restrictions occur
   * - *Tunnel Category E*
   *
   *   - *Risk Level*: Very high risk
   *   - *Restrictions*: Restricted tunnel
   *
   * @public
   */
  TunnelRestrictionCode?: string | undefined;

  /**
   * Width of the vehicle in centimeters.
   *
   * @public
   */
  Width?: number | undefined;
}

/**
 * Travel mode related options for the provided travel mode.
 *
 * @public
 */
export interface RoadSnapTravelModeOptions {
  /**
   * Travel mode options when the provided travel mode is `Truck`.
   *
   * @public
   */
  Truck?: RoadSnapTruckOptions | undefined;
}

/**
 * @public
 */
export interface SnapToRoadsRequest {
  /**
   * Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Chooses what the returned SnappedGeometry format should be.
   *
   * Default value: `FlexiblePolyline`
   *
   * @public
   */
  SnappedGeometryFormat?: GeometryFormat | undefined;

  /**
   * The radius around the provided tracepoint that is considered for snapping.
   *
   * **Unit**: `meters`
   *
   * Default value: `300`
   *
   * @public
   */
  SnapRadius?: number | undefined;

  /**
   * List of trace points to be snapped onto the road network.
   *
   * @public
   */
  TracePoints: RoadSnapTracePoint[] | undefined;

  /**
   * Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.
   *
   * Default value: `Car`
   *
   * @public
   */
  TravelMode?: RoadSnapTravelMode | undefined;

  /**
   * Travel mode related options for the provided travel mode.
   *
   * @public
   */
  TravelModeOptions?: RoadSnapTravelModeOptions | undefined;
}

/**
 * Notices provide information around factors that may have influenced snapping in a manner atypical to the standard use cases.
 *
 * @public
 */
export interface RoadSnapNotice {
  /**
   * Code corresponding to the issue.
   *
   * @public
   */
  Code: RoadSnapNoticeCode | undefined;

  /**
   * The notice title.
   *
   * @public
   */
  Title: string | undefined;

  /**
   * TracePoint indices for which the provided notice code corresponds to.
   *
   * @public
   */
  TracePointIndexes: number[] | undefined;
}

/**
 * Interpolated geometry for the snapped route that is overlay-able onto a map.
 *
 * @public
 */
export interface RoadSnapSnappedGeometry {
  /**
   * An ordered list of positions used to plot a route on a map.
   *
   * > **Note:** LineString and Polyline are mutually exclusive properties.
   *
   * @public
   */
  LineString?: number[][] | undefined;

  /**
   * An ordered list of positions used to plot a route on a map in a lossy compression format.
   *
   * > **Note:** LineString and Polyline are mutually exclusive properties.
   *
   * @public
   */
  Polyline?: string | undefined;
}

/**
 * TracePoints snapped onto the road network.
 *
 * @public
 */
export interface RoadSnapSnappedTracePoint {
  /**
   * Confidence value for the correctness of this point match.
   *
   * @public
   */
  Confidence: number | undefined;

  /**
   * Position of the TracePoint provided within the request, at the same index.
   *
   * @public
   */
  OriginalPosition: number[] | undefined;

  /**
   * Snapped position of the TracePoint provided within the request, at the same index.
   *
   * @public
   */
  SnappedPosition: number[] | undefined;
}

/**
 * @public
 */
export interface SnapToRoadsResponse {
  /**
   * Notices are additional information returned that indicate issues that occurred during route calculation.
   *
   * @public
   */
  Notices: RoadSnapNotice[] | undefined;

  /**
   * The pricing bucket for which the query is charged at.
   *
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * The interpolated geometry for the snapped route onto the road network.
   *
   * @public
   */
  SnappedGeometry?: RoadSnapSnappedGeometry | undefined;

  /**
   * Specifies the format of the geometry returned for each leg of the route.
   *
   * @public
   */
  SnappedGeometryFormat: GeometryFormat | undefined;

  /**
   * The trace points snapped onto the road network.
   *
   * @public
   */
  SnappedTracePoints: RoadSnapSnappedTracePoint[] | undefined;
}
