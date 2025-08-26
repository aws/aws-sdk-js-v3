// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { GeoRoutesServiceException as __BaseException } from "./GeoRoutesServiceException";

/**
 * <p>You don't have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Features that are allowed while calculating an isoline.</p>
 * @public
 */
export interface IsolineAllowOptions {
  /**
   * <p>Allow Hot (High Occupancy Toll) lanes while calculating an isoline.</p> <p>Default value: <code>false</code> </p>
   * @public
   */
  Hot?: boolean | undefined;

  /**
   * <p>Allow Hov (High Occupancy vehicle) lanes while calculating an isoline.</p> <p>Default value: <code>false</code> </p>
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
   * <p>Considers all roads within the provided radius to match the provided destination to. The roads that are considered are determined by the provided Strategy.</p> <p> <b>Unit</b>: <code>Meters</code> </p>
   * @public
   */
  Radius: number | undefined;
}

/**
 * <p>The avoidance geometry, to be included while calculating an isoline.</p>
 * @public
 */
export interface IsolineAvoidanceAreaGeometry {
  /**
   * <p>Geometry defined as a bounding box. The first pair represents the X and Y coordinates (longitude and latitude,) of the southwest corner of the bounding box; the second pair represents the X and Y coordinates (longitude and latitude) of the northeast corner.</p>
   * @public
   */
  BoundingBox?: number[] | undefined;

  /**
   * <p>Geometry defined as a corridor - a LineString with a radius that defines the width of the corridor.</p>
   * @public
   */
  Corridor?: Corridor | undefined;

  /**
   * <p>A list of Polygon will be excluded for calculating isolines, the list can only contain 1 polygon.</p>
   * @public
   */
  Polygon?: number[][][] | undefined;

  /**
   * <p>Geometry defined as an encoded corridor – a polyline with a radius that defines the width of the corridor. For more information on polyline encoding, see <a href="https://github.com/heremaps/flexiblepolyline/blob/master/README.md">https://github.com/heremaps/flexiblepolyline/blob/master/README.md</a>.</p>
   * @public
   */
  PolylineCorridor?: PolylineCorridor | undefined;

  /**
   * <p>A list of PolylinePolygon's that are excluded for calculating isolines, the list can only contain 1 polygon. For more information on polyline encoding, see <a href="https://github.com/heremaps/flexiblepolyline/blob/master/README.md">https://github.com/heremaps/flexiblepolyline/blob/master/README.md</a>. </p>
   * @public
   */
  PolylinePolygon?: string[] | undefined;
}

/**
 * <p>The area to be avoided.</p>
 * @public
 */
export interface IsolineAvoidanceArea {
  /**
   * <p>Exceptions to the provided avoidance geometry, to be included while calculating an isoline.</p>
   * @public
   */
  Except?: IsolineAvoidanceAreaGeometry[] | undefined;

  /**
   * <p>Geometry of the area to be avoided.</p>
   * @public
   */
  Geometry: IsolineAvoidanceAreaGeometry | undefined;
}

/**
 * @public
 * @enum
 */
export const IsolineZoneCategory = {
  CONGESTION_PRICING: "CongestionPricing",
  ENVIRONMENTAL: "Environmental",
  VIGNETTE: "Vignette",
} as const;

/**
 * @public
 */
export type IsolineZoneCategory = (typeof IsolineZoneCategory)[keyof typeof IsolineZoneCategory];

/**
 * <p>Zone category to be avoided.</p>
 * @public
 */
export interface IsolineAvoidanceZoneCategory {
  /**
   * <p>Zone category to be avoided.</p>
   * @public
   */
  Category?: IsolineZoneCategory | undefined;
}

/**
 * <p>Features that are avoided while calculating isolines. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, it violates the avoidance and the returned response produces a notice for the violation.</p>
 * @public
 */
export interface IsolineAvoidanceOptions {
  /**
   * <p>Areas to be avoided.</p>
   * @public
   */
  Areas?: IsolineAvoidanceArea[] | undefined;

  /**
   * <p>Avoid car-shuttle-trains while calculating an isoline.</p>
   * @public
   */
  CarShuttleTrains?: boolean | undefined;

  /**
   * <p>Avoid controlled access highways while calculating an isoline.</p>
   * @public
   */
  ControlledAccessHighways?: boolean | undefined;

  /**
   * <p>Avoid dirt roads while calculating an isoline.</p>
   * @public
   */
  DirtRoads?: boolean | undefined;

  /**
   * <p>Avoid ferries while calculating an isoline.</p>
   * @public
   */
  Ferries?: boolean | undefined;

  /**
   * <p>Avoid roads that have seasonal closure while calculating an isoline.</p>
   * @public
   */
  SeasonalClosure?: boolean | undefined;

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
   * <p>Avoid tunnels while calculating an isoline.</p>
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
  ZoneCategories?: IsolineAvoidanceZoneCategory[] | undefined;
}

/**
 * @public
 * @enum
 */
export const MatchingStrategy = {
  MATCH_ANY: "MatchAny",
  MATCH_MOST_SIGNIFICANT_ROAD: "MatchMostSignificantRoad",
} as const;

/**
 * @public
 */
export type MatchingStrategy = (typeof MatchingStrategy)[keyof typeof MatchingStrategy];

/**
 * <p>Isoline matching related options.</p>
 * @public
 */
export interface IsolineMatchingOptions {
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
   * <p>Considers all roads within the provided radius to match the provided destination to. The roads that are considered are determined by the provided Strategy.</p> <p> <b>Unit</b>: <code>Meters</code> </p>
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
 * @public
 * @enum
 */
export const SideOfStreetMatchingStrategy = {
  ANY_STREET: "AnyStreet",
  DIVIDED_STREET_ONLY: "DividedStreetOnly",
} as const;

/**
 * @public
 */
export type SideOfStreetMatchingStrategy =
  (typeof SideOfStreetMatchingStrategy)[keyof typeof SideOfStreetMatchingStrategy];

/**
 * <p>Options to configure matching the provided position to a side of the street.</p>
 * @public
 */
export interface IsolineSideOfStreetOptions {
  /**
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Strategy that defines when the side of street position should be used. AnyStreet will always use the provided position.</p> <p>Default Value: <code>DividedStreetOnly</code> </p>
   * @public
   */
  UseWith?: SideOfStreetMatchingStrategy | undefined;
}

/**
 * <p>Destination related options.</p>
 * @public
 */
export interface IsolineDestinationOptions {
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
  Matching?: IsolineMatchingOptions | undefined;

  /**
   * <p>Options to configure matching the provided position to a side of the street.</p>
   * @public
   */
  SideOfStreet?: IsolineSideOfStreetOptions | undefined;
}

/**
 * @public
 * @enum
 */
export const GeometryFormat = {
  FLEXIBLE_POLYLINE: "FlexiblePolyline",
  SIMPLE: "Simple",
} as const;

/**
 * @public
 */
export type GeometryFormat = (typeof GeometryFormat)[keyof typeof GeometryFormat];

/**
 * <p>Isoline granularity related options.</p>
 * @public
 */
export interface IsolineGranularityOptions {
  /**
   * <p>Maximum number of points of returned Isoline.</p>
   * @public
   */
  MaxPoints?: number | undefined;

  /**
   * <p>Maximum resolution of the returned isoline.</p> <p> <b>Unit</b>: <code>meters</code> </p>
   * @public
   */
  MaxResolution?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const IsolineOptimizationObjective = {
  ACCURATE_CALCULATION: "AccurateCalculation",
  BALANCED_CALCULATION: "BalancedCalculation",
  FAST_CALCULATION: "FastCalculation",
} as const;

/**
 * @public
 */
export type IsolineOptimizationObjective =
  (typeof IsolineOptimizationObjective)[keyof typeof IsolineOptimizationObjective];

/**
 * @public
 * @enum
 */
export const RoutingObjective = {
  FASTEST_ROUTE: "FastestRoute",
  SHORTEST_ROUTE: "ShortestRoute",
} as const;

/**
 * @public
 */
export type RoutingObjective = (typeof RoutingObjective)[keyof typeof RoutingObjective];

/**
 * <p>Origin related options.</p>
 * @public
 */
export interface IsolineOriginOptions {
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
  Matching?: IsolineMatchingOptions | undefined;

  /**
   * <p>Options to configure matching the provided position to a side of the street.</p>
   * @public
   */
  SideOfStreet?: IsolineSideOfStreetOptions | undefined;
}

/**
 * <p>Threshold to be used for the isoline calculation. Up to 5 thresholds per provided type can be requested.</p>
 * @public
 */
export interface IsolineThresholds {
  /**
   * <p>Distance to be used for the isoline calculation.</p>
   * @public
   */
  Distance?: number[] | undefined;

  /**
   * <p>Time to be used for the isoline calculation.</p>
   * @public
   */
  Time?: number[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TrafficUsage = {
  IGNORE_TRAFFIC_DATA: "IgnoreTrafficData",
  USE_TRAFFIC_DATA: "UseTrafficData",
} as const;

/**
 * @public
 */
export type TrafficUsage = (typeof TrafficUsage)[keyof typeof TrafficUsage];

/**
 * <p>Options related to traffic.</p>
 * @public
 */
export interface IsolineTrafficOptions {
  /**
   * <p>Duration for which flow traffic is considered valid. For this period, the flow traffic is used over historical traffic data. Flow traffic refers to congestion, which changes very quickly. Duration in seconds for which flow traffic event would be considered valid. While flow traffic event is valid it will be used over the historical traffic data. </p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  FlowEventThresholdOverride?: number | undefined;

  /**
   * <p>Determines if traffic should be used or ignored while calculating the route.</p> <p>Default Value: <code>UseTrafficData</code> </p>
   * @public
   */
  Usage?: TrafficUsage | undefined;
}

/**
 * @public
 * @enum
 */
export const IsolineTravelMode = {
  CAR: "Car",
  PEDESTRIAN: "Pedestrian",
  SCOOTER: "Scooter",
  TRUCK: "Truck",
} as const;

/**
 * @public
 */
export type IsolineTravelMode = (typeof IsolineTravelMode)[keyof typeof IsolineTravelMode];

/**
 * @public
 * @enum
 */
export const IsolineEngineType = {
  ELECTRIC: "Electric",
  INTERNAL_COMBUSTION: "InternalCombustion",
  PLUGIN_HYBRID: "PluginHybrid",
} as const;

/**
 * @public
 */
export type IsolineEngineType = (typeof IsolineEngineType)[keyof typeof IsolineEngineType];

/**
 * <p>The vehicle license plate.</p>
 * @public
 */
export interface IsolineVehicleLicensePlate {
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
export interface IsolineCarOptions {
  /**
   * <p>Engine type of the vehicle.</p>
   * @public
   */
  EngineType?: IsolineEngineType | undefined;

  /**
   * <p>The vehicle License Plate.</p>
   * @public
   */
  LicensePlate?: IsolineVehicleLicensePlate | undefined;

  /**
   * <p>Maximum speed.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default Value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * <p>Travel mode options when the provided travel mode is <code>Scooter</code> </p>
 * @public
 */
export interface IsolineScooterOptions {
  /**
   * <p>Engine type of the vehicle.</p>
   * @public
   */
  EngineType?: IsolineEngineType | undefined;

  /**
   * <p>The vehicle License Plate.</p>
   * @public
   */
  LicensePlate?: IsolineVehicleLicensePlate | undefined;

  /**
   * <p>Maximum speed specified.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default Value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const IsolineHazardousCargoType = {
  COMBUSTIBLE: "Combustible",
  CORROSIVE: "Corrosive",
  EXPLOSIVE: "Explosive",
  FLAMMABLE: "Flammable",
  GAS: "Gas",
  HARMFUL_TO_WATER: "HarmfulToWater",
  ORGANIC: "Organic",
  OTHER: "Other",
  POISON: "Poison",
  POISONOUS_INHALATION: "PoisonousInhalation",
  RADIOACTIVE: "Radioactive",
} as const;

/**
 * @public
 */
export type IsolineHazardousCargoType = (typeof IsolineHazardousCargoType)[keyof typeof IsolineHazardousCargoType];

/**
 * <p>Trailer options corresponding to the vehicle.</p>
 * @public
 */
export interface IsolineTrailerOptions {
  /**
   * <p>Total number of axles of the vehicle.</p>
   * @public
   */
  AxleCount?: number | undefined;

  /**
   * <p>Number of trailers attached to the vehicle.</p> <p>Default Value: <code>0</code> </p>
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const IsolineTruckType = {
  LIGHT_TRUCK: "LightTruck",
  STRAIGHT_TRUCK: "StraightTruck",
  TRACTOR: "Tractor",
} as const;

/**
 * @public
 */
export type IsolineTruckType = (typeof IsolineTruckType)[keyof typeof IsolineTruckType];

/**
 * <p>Specifies the total weight for the specified axle group. Meant for usage in countries that have different regulations based on the axle group type.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
 * @public
 */
export interface WeightPerAxleGroup {
  /**
   * <p>Weight for single axle group.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
   * @public
   */
  Single?: number | undefined;

  /**
   * <p>Weight for tandem axle group.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
   * @public
   */
  Tandem?: number | undefined;

  /**
   * <p>Weight for triple axle group.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
   * @public
   */
  Triple?: number | undefined;

  /**
   * <p>Weight for quad axle group.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
   * @public
   */
  Quad?: number | undefined;

  /**
   * <p>Weight for quad quint group.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
   * @public
   */
  Quint?: number | undefined;
}

/**
 * <p>Travel mode options when the provided travel mode is "Truck"</p>
 * @public
 */
export interface IsolineTruckOptions {
  /**
   * <p>Total number of axles of the vehicle.</p>
   * @public
   */
  AxleCount?: number | undefined;

  /**
   * <p>Engine type of the vehicle.</p>
   * @public
   */
  EngineType?: IsolineEngineType | undefined;

  /**
   * <p>Gross weight of the vehicle including trailers, and goods at capacity.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
   * @public
   */
  GrossWeight?: number | undefined;

  /**
   * <p>List of Hazardous cargo contained in the vehicle.</p>
   * @public
   */
  HazardousCargos?: IsolineHazardousCargoType[] | undefined;

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
   * <p>Length of the vehicle.</p> <p> <b>Unit</b>: <code>centimeters</code> </p>
   * @public
   */
  Length?: number | undefined;

  /**
   * <p>The vehicle License Plate.</p>
   * @public
   */
  LicensePlate?: IsolineVehicleLicensePlate | undefined;

  /**
   * <p>Maximum speed specified.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default Value: <code>1</code> </p>
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
  Trailer?: IsolineTrailerOptions | undefined;

  /**
   * <p>Type of the truck.</p>
   * @public
   */
  TruckType?: IsolineTruckType | undefined;

  /**
   * <p>The tunnel restriction code.</p> <p>Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.</p> <ul> <li> <p> <i>Tunnel Category B</i> </p> <ul> <li> <p> <i>Risk Level</i>: Limited risk</p> </li> <li> <p> <i>Restrictions</i>: Few restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category C</i> </p> <ul> <li> <p> <i>Risk Level</i>: Medium risk</p> </li> <li> <p> <i>Restrictions</i>: Some restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category D</i> </p> <ul> <li> <p> <i>Risk Level</i>: High risk</p> </li> <li> <p> <i>Restrictions</i>: Many restrictions occur</p> </li> </ul> </li> <li> <p> <i>Tunnel Category E</i> </p> <ul> <li> <p> <i>Risk Level</i>: Very high risk</p> </li> <li> <p> <i>Restrictions</i>: Restricted tunnel</p> </li> </ul> </li> </ul>
   * @public
   */
  TunnelRestrictionCode?: string | undefined;

  /**
   * <p>Heaviest weight per axle irrespective of the axle type or the axle group. Meant for usage in countries where the differences in axle types or axle groups are not distinguished.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
   * @public
   */
  WeightPerAxle?: number | undefined;

  /**
   * <p>Specifies the total weight for the specified axle group. Meant for usage in countries that have different regulations based on the axle group type.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
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
export interface IsolineTravelModeOptions {
  /**
   * <p>Travel mode options when the provided travel mode is "Car"</p>
   * @public
   */
  Car?: IsolineCarOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is <code>Scooter</code> </p> <note> <p>When travel mode is set to <code>Scooter</code>, then the avoidance option <code>ControlledAccessHighways</code> defaults to <code>true</code>.</p> </note>
   * @public
   */
  Scooter?: IsolineScooterOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is "Truck"</p>
   * @public
   */
  Truck?: IsolineTruckOptions | undefined;
}

/**
 * @public
 */
export interface CalculateIsolinesRequest {
  /**
   * <p>Features that are allowed while calculating an isoline.</p>
   * @public
   */
  Allow?: IsolineAllowOptions | undefined;

  /**
   * <p>Time of arrival at the destination.</p> <p>Time format: <code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  ArrivalTime?: string | undefined;

  /**
   * <p>Features that are avoided while calculating a route. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, it violates the avoidance and the returned response produces a notice for the violation.</p>
   * @public
   */
  Avoid?: IsolineAvoidanceOptions | undefined;

  /**
   * <p>Uses the current time as the time of departure.</p>
   * @public
   */
  DepartNow?: boolean | undefined;

  /**
   * <p>Time of departure from thr origin.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  DepartureTime?: string | undefined;

  /**
   * <p>The final position for the route. In the World Geodetic System (WGS 84) format: <code>[longitude, latitude]</code>.</p>
   * @public
   */
  Destination?: number[] | undefined;

  /**
   * <p>Destination related options.</p>
   * @public
   */
  DestinationOptions?: IsolineDestinationOptions | undefined;

  /**
   * <p>The format of the returned IsolineGeometry. </p> <p>Default Value:<code>FlexiblePolyline</code> </p>
   * @public
   */
  IsolineGeometryFormat?: GeometryFormat | undefined;

  /**
   * <p>Defines the granularity of the returned Isoline.</p>
   * @public
   */
  IsolineGranularity?: IsolineGranularityOptions | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request. </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Specifies the optimization criteria for when calculating an isoline. AccurateCalculation generates an isoline of higher granularity that is more precise. FastCalculation generates an isoline faster by reducing the granularity, and in turn the quality of the isoline. BalancedCalculation generates an isoline by balancing between quality and performance. </p> <p>Default Value: <code>BalancedCalculation</code> </p>
   * @public
   */
  OptimizeIsolineFor?: IsolineOptimizationObjective | undefined;

  /**
   * <p>Specifies the optimization criteria for calculating a route.</p> <p>Default Value: <code>FastestRoute</code> </p>
   * @public
   */
  OptimizeRoutingFor?: RoutingObjective | undefined;

  /**
   * <p>The start position for the route.</p>
   * @public
   */
  Origin?: number[] | undefined;

  /**
   * <p>Origin related options.</p>
   * @public
   */
  OriginOptions?: IsolineOriginOptions | undefined;

  /**
   * <p>Threshold to be used for the isoline calculation. Up to 3 thresholds per provided type can be requested.</p> <p> You incur a calculation charge for each threshold. Using a large amount of thresholds in a request can lead you to incur unexpected charges. See <a href="https://docs.aws.amazon.com/location/latest/developerguide/routes-pricing.html`"> Amazon Location's pricing page</a> for more information.</p>
   * @public
   */
  Thresholds: IsolineThresholds | undefined;

  /**
   * <p>Traffic related options.</p>
   * @public
   */
  Traffic?: IsolineTrafficOptions | undefined;

  /**
   * <p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.</p> <note> <p> The mode <code>Scooter</code> also applies to motorcycles, set to <code>Scooter</code> when wanted to calculate options for motorcycles.</p> </note> <p>Default Value: <code>Car</code> </p>
   * @public
   */
  TravelMode?: IsolineTravelMode | undefined;

  /**
   * <p>Travel mode related options for the provided travel mode.</p>
   * @public
   */
  TravelModeOptions?: IsolineTravelModeOptions | undefined;
}

/**
 * <p>Geometry of the connection between different isoline components.</p>
 * @public
 */
export interface IsolineConnectionGeometry {
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
 * <p>Isolines may contain multiple components, if these components are connected by ferry links. These components are returned as separate polygons while the ferry links are returned as connections.</p>
 * @public
 */
export interface IsolineConnection {
  /**
   * <p>Index of the polygon corresponding to the "from" component of the connection. The polygon is available from <code>Isoline[].Geometries</code>.</p>
   * @public
   */
  FromPolygonIndex: number | undefined;

  /**
   * <p>The isoline geometry.</p>
   * @public
   */
  Geometry: IsolineConnectionGeometry | undefined;

  /**
   * <p>Index of the polygon corresponding to the "to" component of the connection. The polygon is available from <code>Isoline[].Geometries</code>.</p>
   * @public
   */
  ToPolygonIndex: number | undefined;
}

/**
 * <p>Geometry of the connection between different Isoline components.</p>
 * @public
 */
export interface IsolineShapeGeometry {
  /**
   * <p>A list of Isoline Polygons, for each isoline polygon, it contains polygons of the first linear ring (the outer ring) and from 2nd item to the last item (the inner rings).</p>
   * @public
   */
  Polygon?: number[][][] | undefined;

  /**
   * <p>A list of Isoline PolylinePolygon, for each isoline PolylinePolygon, it contains PolylinePolygon of the first linear ring (the outer ring) and from 2nd item to the last item (the inner rings). For more information on polyline encoding, see <a href="https://github.com/heremaps/flexiblepolyline/blob/master/README.md">https://github.com/heremaps/flexiblepolyline/blob/master/README.md</a>.</p>
   * @public
   */
  PolylinePolygon?: string[] | undefined;
}

/**
 * <p>Calculated isolines and associated properties.</p>
 * @public
 */
export interface Isoline {
  /**
   * <p>Isolines may contain multiple components, if these components are connected by ferry links. These components are returned as separate polygons while the ferry links are returned as connections.</p>
   * @public
   */
  Connections: IsolineConnection[] | undefined;

  /**
   * <p>Distance threshold corresponding to the calculated Isoline.</p>
   * @public
   */
  DistanceThreshold?: number | undefined;

  /**
   * <p>Geometries for the Calculated isolines.</p>
   * @public
   */
  Geometries: IsolineShapeGeometry[] | undefined;

  /**
   * <p>Time threshold corresponding to the calculated isoline.</p>
   * @public
   */
  TimeThreshold?: number | undefined;
}

/**
 * @public
 */
export interface CalculateIsolinesResponse {
  /**
   * <p>Time of arrival at the destination. This parameter is returned only if the Destination parameters was provided in the request. </p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  ArrivalTime?: string | undefined;

  /**
   * <p>Time of departure from thr origin.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  DepartureTime?: string | undefined;

  /**
   * <p>The format of the returned IsolineGeometry. </p> <p>Default Value:<code>FlexiblePolyline</code> </p>
   * @public
   */
  IsolineGeometryFormat: GeometryFormat | undefined;

  /**
   * <p>Calculated isolines and associated properties.</p>
   * @public
   */
  Isolines: Isoline[] | undefined;

  /**
   * <p>The pricing bucket for which the query is charged at.</p>
   * @public
   */
  PricingBucket: string | undefined;

  /**
   * <p>Snapped destination that was used for the Isoline calculation.</p>
   * @public
   */
  SnappedDestination?: number[] | undefined;

  /**
   * <p>Snapped origin that was used for the Isoline calculation.</p>
   * @public
   */
  SnappedOrigin?: number[] | undefined;
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
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
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  /**
   *     The input cannot be parsed. For example a required JSON document, ARN identifier,
   *     date value, or numeric field cannot be parsed.
   *
   */
  CANNOT_PARSE: "CannotParse",
  /**
   *     The input is present and parsable, but it is otherwise invalid. For example, a
   *     required numeric argument is outside the allowed range.
   *
   */
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  /**
   * The required input is missing.
   */
  MISSING: "Missing",
  /**
   * The input is invalid but no more specific reason is applicable.
   */
  OTHER: "Other",
  /**
   * No such field is supported.
   */
  UNKNOWN_FIELD: "UnknownField",
  /**
   * No such operation is supported.
   */
  UNKNOWN_OPERATION: "UnknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>A message with the reason for the validation exception error.</p>
   * @public
   */
  Reason: ValidationExceptionReason | undefined;

  /**
   * <p>The field where the invalid entry was detected.</p>
   * @public
   */
  FieldList: ValidationExceptionField[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.FieldList = opts.FieldList;
  }
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
   * <p>A list of Isoline PolylinePolygon, for each isoline PolylinePolygon, it contains PolylinePolygon of the first linear ring (the outer ring) and from second item to the last item (the inner rings). For more information on polyline encoding, see <a href="https://github.com/heremaps/flexiblepolyline/blob/master/README.md">https://github.com/heremaps/flexiblepolyline/blob/master/README.md</a>.</p>
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
 * @public
 * @enum
 */
export const RouteMatrixZoneCategory = {
  CONGESTION_PRICING: "CongestionPricing",
  ENVIRONMENTAL: "Environmental",
  VIGNETTE: "Vignette",
} as const;

/**
 * @public
 */
export type RouteMatrixZoneCategory = (typeof RouteMatrixZoneCategory)[keyof typeof RouteMatrixZoneCategory];

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
   * <p>Considers all roads within the provided radius to match the provided destination to. The roads that are considered are determined by the provided Strategy.</p> <p> <b>Unit</b>: <code>Meters</code> </p>
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
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Strategy that defines when the side of street position should be used. AnyStreet will always use the provided position.</p> <p>Default Value: <code>DividedStreetOnly</code> </p>
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
   * <p>Destination related options.</p>
   * @public
   */
  Options?: RouteMatrixDestinationOptions | undefined;

  /**
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
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
 * <p>The start position for the route.</p>
 * @public
 */
export interface RouteMatrixOrigin {
  /**
   * <p>Origin related options.</p>
   * @public
   */
  Options?: RouteMatrixOriginOptions | undefined;

  /**
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
   * @public
   */
  Position: number[] | undefined;
}

/**
 * <p>Provides the circle that was used while calculating the route.</p>
 * @public
 */
export interface RouteMatrixAutoCircle {
  /**
   * <p>The margin provided for the calculation.</p>
   * @public
   */
  Margin?: number | undefined;

  /**
   * <p>The maximum size of the radius provided for the calculation.</p>
   * @public
   */
  MaxRadius?: number | undefined;
}

/**
 * <p>Geometry defined as a circle. When request routing boundary was set as <code>AutoCircle</code>, the response routing boundary will return <code>Circle</code> derived from the <code>AutoCircle</code> settings.</p>
 * @public
 */
export interface Circle {
  /**
   * <p>Center of the Circle defined in longitude and latitude coordinates.</p> <p>Example: <code>[-123.1174, 49.2847]</code> represents the position with longitude <code>-123.1174</code> and latitude <code>49.2847</code>. </p>
   * @public
   */
  Center: number[] | undefined;

  /**
   * <p>Radius of the Circle.</p> <p> <b>Unit</b>: <code>meters</code> </p>
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
   * <p>Provides the circle that was used while calculating the route.</p>
   * @public
   */
  AutoCircle?: RouteMatrixAutoCircle | undefined;

  /**
   * <p>Geometry defined as a circle. When request routing boundary was set as <code>AutoCircle</code>, the response routing boundary will return <code>Circle</code> derived from the <code>AutoCircle</code> settings.</p>
   * @public
   */
  Circle?: Circle | undefined;

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
   * <p>Determines if traffic should be used or ignored while calculating the route.</p> <p>Default Value: <code>UseTrafficData</code> </p>
   * @public
   */
  Usage?: TrafficUsage | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteMatrixTravelMode = {
  CAR: "Car",
  PEDESTRIAN: "Pedestrian",
  SCOOTER: "Scooter",
  TRUCK: "Truck",
} as const;

/**
 * @public
 */
export type RouteMatrixTravelMode = (typeof RouteMatrixTravelMode)[keyof typeof RouteMatrixTravelMode];

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
   * <p>Maximum speed</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default Value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * <p>Travel mode options when the provided travel mode is <code>Scooter</code> </p>
 * @public
 */
export interface RouteMatrixScooterOptions {
  /**
   * <p>The vehicle License Plate.</p>
   * @public
   */
  LicensePlate?: RouteMatrixVehicleLicensePlate | undefined;

  /**
   * <p>Maximum speed.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default Value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteMatrixHazardousCargoType = {
  COMBUSTIBLE: "Combustible",
  CORROSIVE: "Corrosive",
  EXPLOSIVE: "Explosive",
  FLAMMABLE: "Flammable",
  GAS: "Gas",
  HARMFUL_TO_WATER: "HarmfulToWater",
  ORGANIC: "Organic",
  OTHER: "Other",
  POISON: "Poison",
  POISONOUS_INHALATION: "PoisonousInhalation",
  RADIOACTIVE: "Radioactive",
} as const;

/**
 * @public
 */
export type RouteMatrixHazardousCargoType =
  (typeof RouteMatrixHazardousCargoType)[keyof typeof RouteMatrixHazardousCargoType];

/**
 * <p>Trailer options corresponding to the vehicle.</p>
 * @public
 */
export interface RouteMatrixTrailerOptions {
  /**
   * <p>Number of trailers attached to the vehicle.</p> <p>Default Value: <code>0</code> </p>
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteMatrixTruckType = {
  LIGHT_TRUCK: "LightTruck",
  STRAIGHT_TRUCK: "StraightTruck",
  TRACTOR: "Tractor",
} as const;

/**
 * @public
 */
export type RouteMatrixTruckType = (typeof RouteMatrixTruckType)[keyof typeof RouteMatrixTruckType];

/**
 * <p>Travel mode options when the provided travel mode is "Truck"</p>
 * @public
 */
export interface RouteMatrixTruckOptions {
  /**
   * <p>Total number of axles of the vehicle.</p>
   * @public
   */
  AxleCount?: number | undefined;

  /**
   * <p>Gross weight of the vehicle including trailers, and goods at capacity.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
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
   * <p>Maximum speed</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default Value: <code>1</code> </p>
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
   * <p>Type of the truck.</p>
   * @public
   */
  TruckType?: RouteMatrixTruckType | undefined;

  /**
   * <p>The tunnel restriction code.</p> <p>Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.</p> <ul> <li> <p> <i>Tunnel Category B</i> </p> <ul> <li> <p> <i>Risk Level</i>: Limited risk</p> </li> <li> <p> <i>Restrictions</i>: Few restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category C</i> </p> <ul> <li> <p> <i>Risk Level</i>: Medium risk</p> </li> <li> <p> <i>Restrictions</i>: Some restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category D</i> </p> <ul> <li> <p> <i>Risk Level</i>: High risk</p> </li> <li> <p> <i>Restrictions</i>: Many restrictions occur</p> </li> </ul> </li> <li> <p> <i>Tunnel Category E</i> </p> <ul> <li> <p> <i>Risk Level</i>: Very high risk</p> </li> <li> <p> <i>Restrictions</i>: Restricted tunnel</p> </li> </ul> </li> </ul>
   * @public
   */
  TunnelRestrictionCode?: string | undefined;

  /**
   * <p>Heaviest weight per axle irrespective of the axle type or the axle group. Meant for usage in countries where the differences in axle types or axle groups are not distinguished.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
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
   * <p>Travel mode options when the provided travel mode is "Car"</p>
   * @public
   */
  Car?: RouteMatrixCarOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is <code>Scooter</code> </p> <note> <p>When travel mode is set to <code>Scooter</code>, then the avoidance option <code>ControlledAccessHighways</code> defaults to <code>true</code>.</p> </note>
   * @public
   */
  Scooter?: RouteMatrixScooterOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is "Truck"</p>
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
   * <p>Features that are avoided while calculating a route. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, it violates the avoidance and the returned response produces a notice for the violation.</p>
   * @public
   */
  Avoid?: RouteMatrixAvoidanceOptions | undefined;

  /**
   * <p>Uses the current time as the time of departure.</p>
   * @public
   */
  DepartNow?: boolean | undefined;

  /**
   * <p>Time of departure from thr origin.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  DepartureTime?: string | undefined;

  /**
   * <p>List of destinations for the route.</p> <note> <p>Route calculations are billed for each origin and destination pair. If you use a large matrix of origins and destinations, your costs will increase accordingly. See <a href="https://docs.aws.amazon.com/location/latest/developerguide/routes-pricing.html`"> Amazon Location's pricing page</a> for more information.</p> </note>
   * @public
   */
  Destinations: RouteMatrixDestination[] | undefined;

  /**
   * <p>Features to be strictly excluded while calculating the route.</p>
   * @public
   */
  Exclude?: RouteMatrixExclusionOptions | undefined;

  /**
   * <p>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request. </p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Specifies the optimization criteria for calculating a route.</p> <p>Default Value: <code>FastestRoute</code> </p>
   * @public
   */
  OptimizeRoutingFor?: RoutingObjective | undefined;

  /**
   * <p>The position in longitude and latitude for the origin.</p> <note> <p>Route calculations are billed for each origin and destination pair. Using a large amount of Origins in a request can lead you to incur unexpected charges. See <a href="https://docs.aws.amazon.com/location/latest/developerguide/routes-pricing.html`"> Amazon Location's pricing page</a> for more information.</p> </note>
   * @public
   */
  Origins: RouteMatrixOrigin[] | undefined;

  /**
   * <p>Boundary within which the matrix is to be calculated. All data, origins and destinations outside the boundary are considered invalid.</p> <note> <p>When request routing boundary was set as AutoCircle, the response routing boundary will return Circle derived from the AutoCircle settings.</p> </note>
   * @public
   */
  RoutingBoundary: RouteMatrixBoundary | undefined;

  /**
   * <p>Traffic related options.</p>
   * @public
   */
  Traffic?: RouteMatrixTrafficOptions | undefined;

  /**
   * <p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.</p> <p>Default Value: <code>Car</code> </p>
   * @public
   */
  TravelMode?: RouteMatrixTravelMode | undefined;

  /**
   * <p>Travel mode related options for the provided travel mode.</p>
   * @public
   */
  TravelModeOptions?: RouteMatrixTravelModeOptions | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteMatrixErrorCode = {
  NO_MATCH: "NoMatch",
  NO_MATCH_DESTINATION: "NoMatchDestination",
  NO_MATCH_ORIGIN: "NoMatchOrigin",
  NO_ROUTE: "NoRoute",
  OTHER: "Other",
  OUT_OF_BOUNDS: "OutOfBounds",
  OUT_OF_BOUNDS_DESTINATION: "OutOfBoundsDestination",
  OUT_OF_BOUNDS_ORIGIN: "OutOfBoundsOrigin",
  VIOLATION: "Violation",
} as const;

/**
 * @public
 */
export type RouteMatrixErrorCode = (typeof RouteMatrixErrorCode)[keyof typeof RouteMatrixErrorCode];

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
   * <p>Boundary within which the matrix is to be calculated. All data, origins and destinations outside the boundary are considered invalid.</p> <note> <p>When request routing boundary was set as AutoCircle, the response routing boundary will return Circle derived from the AutoCircle settings.</p> </note>
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
   * <p>A list of Isoline PolylinePolygon, for each isoline PolylinePolygon, it contains PolylinePolygon of the first linear ring (the outer ring) and from 2nd item to the last item (the inner rings). For more information on polyline encoding, see <a href="https://github.com/heremaps/flexiblepolyline/blob/master/README.md">https://github.com/heremaps/flexiblepolyline/blob/master/README.md</a>.</p>
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
 * @public
 * @enum
 */
export const RouteZoneCategory = {
  CONGESTION_PRICING: "CongestionPricing",
  ENVIRONMENTAL: "Environmental",
  VIGNETTE: "Vignette",
} as const;

/**
 * @public
 */
export type RouteZoneCategory = (typeof RouteZoneCategory)[keyof typeof RouteZoneCategory];

/**
 * <p>Zone categories to be avoided.</p>
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
   * <p>Areas to be avoided.</p>
   * @public
   */
  Areas?: RouteAvoidanceArea[] | undefined;

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
   * <p>Avoid roads that have seasonal closure while calculating the route.</p>
   * @public
   */
  SeasonalClosure?: boolean | undefined;

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
   * <p>Considers all roads within the provided radius to match the provided destination to. The roads that are considered are determined by the provided Strategy.</p> <p> <b>Unit</b>: <code>Meters</code> </p>
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
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Strategy that defines when the side of street position should be used.</p> <p>Default Value: <code>DividedStreetOnly</code> </p>
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
 * @public
 * @enum
 */
export const MeasurementSystem = {
  IMPERIAL: "Imperial",
  METRIC: "Metric",
} as const;

/**
 * @public
 */
export type MeasurementSystem = (typeof MeasurementSystem)[keyof typeof MeasurementSystem];

/**
 * @public
 * @enum
 */
export const RouteLegAdditionalFeature = {
  ELEVATION: "Elevation",
  INCIDENTS: "Incidents",
  PASS_THROUGH_WAYPOINTS: "PassThroughWaypoints",
  SUMMARY: "Summary",
  TOLLS: "Tolls",
  TRAVEL_STEP_INSTRUCTIONS: "TravelStepInstructions",
  TRUCK_ROAD_TYPES: "TruckRoadTypes",
  TYPICAL_DURATION: "TypicalDuration",
  ZONES: "Zones",
} as const;

/**
 * @public
 */
export type RouteLegAdditionalFeature = (typeof RouteLegAdditionalFeature)[keyof typeof RouteLegAdditionalFeature];

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
 * @public
 * @enum
 */
export const RouteSpanAdditionalFeature = {
  BEST_CASE_DURATION: "BestCaseDuration",
  CAR_ACCESS: "CarAccess",
  CONSUMPTION: "Consumption",
  COUNTRY: "Country",
  DISTANCE: "Distance",
  DURATION: "Duration",
  DYNAMIC_SPEED: "DynamicSpeed",
  FUNCTIONAL_CLASSIFICATION: "FunctionalClassification",
  GATES: "Gates",
  INCIDENTS: "Incidents",
  NAMES: "Names",
  NOTICES: "Notices",
  PEDESTRIAN_ACCESS: "PedestrianAccess",
  RAILWAY_CROSSINGS: "RailwayCrossings",
  REGION: "Region",
  ROAD_ATTRIBUTES: "RoadAttributes",
  ROUTE_NUMBERS: "RouteNumbers",
  SCOOTER_ACCESS: "ScooterAccess",
  SPEED_LIMIT: "SpeedLimit",
  TOLL_SYSTEMS: "TollSystems",
  TRUCK_ACCESS: "TruckAccess",
  TRUCK_ROAD_TYPES: "TruckRoadTypes",
  TYPICAL_DURATION: "TypicalDuration",
  ZONES: "Zones",
} as const;

/**
 * @public
 */
export type RouteSpanAdditionalFeature = (typeof RouteSpanAdditionalFeature)[keyof typeof RouteSpanAdditionalFeature];

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
 * @public
 * @enum
 */
export const RouteTollVehicleCategory = {
  MINIBUS: "Minibus",
} as const;

/**
 * @public
 */
export type RouteTollVehicleCategory = (typeof RouteTollVehicleCategory)[keyof typeof RouteTollVehicleCategory];

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
   * <p>Determines if traffic should be used or ignored while calculating the route.</p> <p>Default Value: <code>UseTrafficData</code> </p>
   * @public
   */
  Usage?: TrafficUsage | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteTravelMode = {
  CAR: "Car",
  PEDESTRIAN: "Pedestrian",
  SCOOTER: "Scooter",
  TRUCK: "Truck",
} as const;

/**
 * @public
 */
export type RouteTravelMode = (typeof RouteTravelMode)[keyof typeof RouteTravelMode];

/**
 * @public
 * @enum
 */
export const RouteEngineType = {
  ELECTRIC: "Electric",
  INTERNAL_COMBUSTION: "InternalCombustion",
  PLUGIN_HYBRID: "PluginHybrid",
} as const;

/**
 * @public
 */
export type RouteEngineType = (typeof RouteEngineType)[keyof typeof RouteEngineType];

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
 * <p>Travel mode options when the provided travel mode is <code>Car</code>.</p>
 * @public
 */
export interface RouteCarOptions {
  /**
   * <p>Engine type of the vehicle.</p>
   * @public
   */
  EngineType?: RouteEngineType | undefined;

  /**
   * <p>The vehicle License Plate.</p>
   * @public
   */
  LicensePlate?: RouteVehicleLicensePlate | undefined;

  /**
   * <p>Maximum speed specified.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default Value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * <p>Options related to the pedestrian.</p>
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
 * <p>Travel mode options when the provided travel mode is <code>Scooter</code> </p>
 * @public
 */
export interface RouteScooterOptions {
  /**
   * <p>Engine type of the vehicle.</p>
   * @public
   */
  EngineType?: RouteEngineType | undefined;

  /**
   * <p>The vehicle License Plate.</p>
   * @public
   */
  LicensePlate?: RouteVehicleLicensePlate | undefined;

  /**
   * <p>Maximum speed</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default Value: <code>1</code> </p>
   * @public
   */
  Occupancy?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteHazardousCargoType = {
  COMBUSTIBLE: "Combustible",
  CORROSIVE: "Corrosive",
  EXPLOSIVE: "Explosive",
  FLAMMABLE: "Flammable",
  GAS: "Gas",
  HARMFUL_TO_WATER: "HarmfulToWater",
  ORGANIC: "Organic",
  OTHER: "Other",
  POISON: "Poison",
  POISONOUS_INHALATION: "PoisonousInhalation",
  RADIOACTIVE: "Radioactive",
} as const;

/**
 * @public
 */
export type RouteHazardousCargoType = (typeof RouteHazardousCargoType)[keyof typeof RouteHazardousCargoType];

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
   * <p>Number of trailers attached to the vehicle.</p> <p>Default Value: <code>0</code> </p>
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteTruckType = {
  LIGHT_TRUCK: "LightTruck",
  STRAIGHT_TRUCK: "StraightTruck",
  TRACTOR: "Tractor",
} as const;

/**
 * @public
 */
export type RouteTruckType = (typeof RouteTruckType)[keyof typeof RouteTruckType];

/**
 * <p>Travel mode options when the provided travel mode is "Truck"</p>
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
   * <p>Gross weight of the vehicle including trailers, and goods at capacity.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
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
   * <p>Maximum speed</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
   * @public
   */
  MaxSpeed?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default Value: <code>1</code> </p>
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
   * <p>Type of the truck.</p>
   * @public
   */
  TruckType?: RouteTruckType | undefined;

  /**
   * <p>The tunnel restriction code.</p> <p>Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.</p> <ul> <li> <p> <i>Tunnel Category B</i> </p> <ul> <li> <p> <i>Risk Level</i>: Limited risk</p> </li> <li> <p> <i>Restrictions</i>: Few restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category C</i> </p> <ul> <li> <p> <i>Risk Level</i>: Medium risk</p> </li> <li> <p> <i>Restrictions</i>: Some restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category D</i> </p> <ul> <li> <p> <i>Risk Level</i>: High risk</p> </li> <li> <p> <i>Restrictions</i>: Many restrictions occur</p> </li> </ul> </li> <li> <p> <i>Tunnel Category E</i> </p> <ul> <li> <p> <i>Risk Level</i>: Very high risk</p> </li> <li> <p> <i>Restrictions</i>: Restricted tunnel</p> </li> </ul> </li> </ul>
   * @public
   */
  TunnelRestrictionCode?: string | undefined;

  /**
   * <p>Heaviest weight per axle irrespective of the axle type or the axle group. Meant for usage in countries where the differences in axle types or axle groups are not distinguished.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
   * @public
   */
  WeightPerAxle?: number | undefined;

  /**
   * <p>Specifies the total weight for the specified axle group. Meant for usage in countries that have different regulations based on the axle group type.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
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
   * <p>Travel mode options when the provided travel mode is "Car"</p>
   * @public
   */
  Car?: RouteCarOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is "Pedestrian"</p>
   * @public
   */
  Pedestrian?: RoutePedestrianOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is <code>Scooter</code> </p> <note> <p>When travel mode is set to <code>Scooter</code>, then the avoidance option <code>ControlledAccessHighways</code> defaults to <code>true</code>.</p> </note>
   * @public
   */
  Scooter?: RouteScooterOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is "Truck"</p>
   * @public
   */
  Truck?: RouteTruckOptions | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteTravelStepType = {
  DEFAULT: "Default",
  TURN_BY_TURN: "TurnByTurn",
} as const;

/**
 * @public
 */
export type RouteTravelStepType = (typeof RouteTravelStepType)[keyof typeof RouteTravelStepType];

/**
 * <p>Waypoint between the Origin and Destination.</p>
 * @public
 */
export interface RouteWaypoint {
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
   * <p>If the waypoint should not be treated as a stop. If yes, the waypoint is passed through and doesn't split the route into different legs.</p>
   * @public
   */
  PassThrough?: boolean | undefined;

  /**
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
   * @public
   */
  Position: number[] | undefined;

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
 * @public
 */
export interface CalculateRoutesRequest {
  /**
   * <p>Features that are allowed while calculating a route.</p>
   * @public
   */
  Allow?: RouteAllowOptions | undefined;

  /**
   * <p>Time of arrival at the destination.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  ArrivalTime?: string | undefined;

  /**
   * <p>Features that are avoided while calculating a route. Avoidance is on a best-case basis. If an avoidance can't be satisfied for a particular case, it violates the avoidance and the returned response produces a notice for the violation.</p>
   * @public
   */
  Avoid?: RouteAvoidanceOptions | undefined;

  /**
   * <p>Uses the current time as the time of departure.</p>
   * @public
   */
  DepartNow?: boolean | undefined;

  /**
   * <p>Time of departure from thr origin.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  DepartureTime?: string | undefined;

  /**
   * <p>The final position for the route. In the World Geodetic System (WGS 84) format: <code>[longitude, latitude]</code>.</p>
   * @public
   */
  Destination: number[] | undefined;

  /**
   * <p>Destination related options.</p>
   * @public
   */
  DestinationOptions?: RouteDestinationOptions | undefined;

  /**
   * <p>Driver related options.</p>
   * @public
   */
  Driver?: RouteDriverOptions | undefined;

  /**
   * <p>Features to be strictly excluded while calculating the route.</p>
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
   * <p>List of languages for instructions within steps in the response.</p> <note> <p>Instructions in the requested language are returned only if they are available.</p> </note>
   * @public
   */
  Languages?: string[] | undefined;

  /**
   * <p>A list of optional additional parameters such as timezone that can be requested for each result.</p> <ul> <li> <p> <code>Elevation</code>: Retrieves the elevation information for each location.</p> </li> <li> <p> <code>Incidents</code>: Provides information on traffic incidents along the route.</p> </li> <li> <p> <code>PassThroughWaypoints</code>: Indicates waypoints that are passed through without stopping.</p> </li> <li> <p> <code>Summary</code>: Returns a summary of the route, including distance and duration.</p> </li> <li> <p> <code>Tolls</code>: Supplies toll cost information along the route.</p> </li> <li> <p> <code>TravelStepInstructions</code>: Provides step-by-step instructions for travel along the route.</p> </li> <li> <p> <code>TruckRoadTypes</code>: Returns information about road types suitable for trucks.</p> </li> <li> <p> <code>TypicalDuration</code>: Gives typical travel duration based on historical data.</p> </li> <li> <p> <code>Zones</code>: Specifies the time zone information for each waypoint.</p> </li> </ul>
   * @public
   */
  LegAdditionalFeatures?: RouteLegAdditionalFeature[] | undefined;

  /**
   * <p>Specifies the format of the geometry returned for each leg of the route. You can choose between two different geometry encoding formats.</p> <p> <code>FlexiblePolyline</code>: A compact and precise encoding format for the leg geometry. For more information on the format, see the GitHub repository for <a href="https://github.com/heremaps/flexible-polyline"> <code>FlexiblePolyline</code> </a>.</p> <p> <code>Simple</code>: A less compact encoding, which is easier to decode but may be less precise and result in larger payloads.</p>
   * @public
   */
  LegGeometryFormat?: GeometryFormat | undefined;

  /**
   * <p>Maximum number of alternative routes to be provided in the response, if available.</p>
   * @public
   */
  MaxAlternatives?: number | undefined;

  /**
   * <p>Specifies the optimization criteria for calculating a route.</p> <p>Default Value: <code>FastestRoute</code> </p>
   * @public
   */
  OptimizeRoutingFor?: RoutingObjective | undefined;

  /**
   * <p>The start position for the route.</p>
   * @public
   */
  Origin: number[] | undefined;

  /**
   * <p>Origin related options.</p>
   * @public
   */
  OriginOptions?: RouteOriginOptions | undefined;

  /**
   * <p>A list of optional features such as SpeedLimit that can be requested for a Span. A span is a section of a Leg for which the requested features have the same values.</p>
   * @public
   */
  SpanAdditionalFeatures?: RouteSpanAdditionalFeature[] | undefined;

  /**
   * <p>Toll related options.</p>
   * @public
   */
  Tolls?: RouteTollOptions | undefined;

  /**
   * <p>Traffic related options.</p>
   * @public
   */
  Traffic?: RouteTrafficOptions | undefined;

  /**
   * <p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.</p> <p>Default Value: <code>Car</code> </p>
   * @public
   */
  TravelMode?: RouteTravelMode | undefined;

  /**
   * <p>Travel mode related options for the provided travel mode.</p>
   * @public
   */
  TravelModeOptions?: RouteTravelModeOptions | undefined;

  /**
   * <p>Type of step returned by the response. Default provides basic steps intended for web based applications. TurnByTurn provides detailed instructions with more granularity intended for a turn based navigation system.</p>
   * @public
   */
  TravelStepType?: RouteTravelStepType | undefined;

  /**
   * <p>List of waypoints between the Origin and Destination.</p>
   * @public
   */
  Waypoints?: RouteWaypoint[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteResponseNoticeCode = {
  MAIN_LANGUAGE_NOT_FOUND: "MainLanguageNotFound",
  OTHER: "Other",
  TRAVEL_TIME_EXCEEDS_DRIVER_WORK_HOURS: "TravelTimeExceedsDriverWorkHours",
} as const;

/**
 * @public
 */
export type RouteResponseNoticeCode = (typeof RouteResponseNoticeCode)[keyof typeof RouteResponseNoticeCode];

/**
 * @public
 * @enum
 */
export const RouteNoticeImpact = {
  HIGH: "High",
  LOW: "Low",
} as const;

/**
 * @public
 */
export type RouteNoticeImpact = (typeof RouteNoticeImpact)[keyof typeof RouteNoticeImpact];

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
 * @public
 * @enum
 */
export const RouteFerryAfterTravelStepType = {
  DEBOARD: "Deboard",
} as const;

/**
 * @public
 */
export type RouteFerryAfterTravelStepType =
  (typeof RouteFerryAfterTravelStepType)[keyof typeof RouteFerryAfterTravelStepType];

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
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
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
   * <p>The place details.</p>
   * @public
   */
  Place: RouteFerryPlace | undefined;

  /**
   * <p>The time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteFerryBeforeTravelStepType = {
  BOARD: "Board",
} as const;

/**
 * @public
 */
export type RouteFerryBeforeTravelStepType =
  (typeof RouteFerryBeforeTravelStepType)[keyof typeof RouteFerryBeforeTravelStepType];

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
   * <p>The place details.</p>
   * @public
   */
  Place: RouteFerryPlace | undefined;

  /**
   * <p>The time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteFerryNoticeCode = {
  ACCURATE_POLYLINE_UNAVAILABLE: "AccuratePolylineUnavailable",
  NO_SCHEDULE: "NoSchedule",
  OTHER: "Other",
  POTENTIAL_VIOLATED_VEHICLE_RESTRICTION_USAGE: "PotentialViolatedVehicleRestrictionUsage",
  SEASONAL_CLOSURE: "SeasonalClosure",
  VIOLATED_AVOID_FERRY: "ViolatedAvoidFerry",
  VIOLATED_AVOID_RAIL_FERRY: "ViolatedAvoidRailFerry",
} as const;

/**
 * @public
 */
export type RouteFerryNoticeCode = (typeof RouteFerryNoticeCode)[keyof typeof RouteFerryNoticeCode];

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
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
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
   * <p>The place details.</p>
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
   * <p>Provides an array of names of the ferry span in available languages.</p>
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
 * <p>Summarized details of the leg.</p>
 * @public
 */
export interface RouteFerryOverviewSummary {
  /**
   * <p>Distance of the step.</p>
   * @public
   */
  Distance: number | undefined;

  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
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
 * @public
 * @enum
 */
export const RouteFerryTravelStepType = {
  ARRIVE: "Arrive",
  CONTINUE: "Continue",
  DEPART: "Depart",
} as const;

/**
 * @public
 */
export type RouteFerryTravelStepType = (typeof RouteFerryTravelStepType)[keyof typeof RouteFerryTravelStepType];

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
 * <p>FerryLegDetails is populated when the Leg type is Ferry, and provides additional information that is specific</p>
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
 * @public
 * @enum
 */
export const RouteSideOfStreet = {
  LEFT: "Left",
  RIGHT: "Right",
} as const;

/**
 * @public
 */
export type RouteSideOfStreet = (typeof RouteSideOfStreet)[keyof typeof RouteSideOfStreet];

/**
 * <p>Place details corresponding to the arrival or departure.</p>
 * @public
 */
export interface RoutePedestrianPlace {
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
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
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
}

/**
 * <p>Details corresponding to the arrival for a leg.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
 * @public
 */
export interface RoutePedestrianArrival {
  /**
   * <p>The place details.</p>
   * @public
   */
  Place: RoutePedestrianPlace | undefined;

  /**
   * <p>The time.</p>
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
   * <p>The place details.</p>
   * @public
   */
  Place: RoutePedestrianPlace | undefined;

  /**
   * <p>The time.</p>
   * @public
   */
  Time?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RoutePedestrianNoticeCode = {
  ACCURATE_POLYLINE_UNAVAILABLE: "AccuratePolylineUnavailable",
  OTHER: "Other",
  VIOLATED_AVOID_DIRT_ROAD: "ViolatedAvoidDirtRoad",
  VIOLATED_AVOID_TUNNEL: "ViolatedAvoidTunnel",
  VIOLATED_PEDESTRIAN_OPTION: "ViolatedPedestrianOption",
} as const;

/**
 * @public
 */
export type RoutePedestrianNoticeCode = (typeof RoutePedestrianNoticeCode)[keyof typeof RoutePedestrianNoticeCode];

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
 * <p>Details about the dynamic speed.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
 * @public
 */
export interface RouteSpanDynamicSpeedDetails {
  /**
   * <p>Estimated speed while traversing the span without traffic congestion.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
   * @public
   */
  BestCaseSpeed?: number | undefined;

  /**
   * <p>Estimated time to turn from this span into the next. </p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  TurnDuration?: number | undefined;

  /**
   * <p>Estimated speed while traversing the span under typical traffic congestion.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
   * @public
   */
  TypicalSpeed?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const RouteSpanPedestrianAccessAttribute = {
  ALLOWED: "Allowed",
  INDOORS: "Indoors",
  NO_THROUGH_TRAFFIC: "NoThroughTraffic",
  PARK: "Park",
  STAIRS: "Stairs",
  TOLL_ROAD: "TollRoad",
} as const;

/**
 * @public
 */
export type RouteSpanPedestrianAccessAttribute =
  (typeof RouteSpanPedestrianAccessAttribute)[keyof typeof RouteSpanPedestrianAccessAttribute];

/**
 * @public
 * @enum
 */
export const RouteSpanRoadAttribute = {
  BRIDGE: "Bridge",
  BUILT_UP_AREA: "BuiltUpArea",
  CONTROLLED_ACCESS_HIGHWAY: "ControlledAccessHighway",
  DIRT_ROAD: "DirtRoad",
  DIVIDED_ROAD: "DividedRoad",
  MOTORWAY: "Motorway",
  PRIVATE_ROAD: "PrivateRoad",
  RAMP: "Ramp",
  RIGHT_HAND_TRAFFIC: "RightHandTraffic",
  ROUNDABOUT: "Roundabout",
  TUNNEL: "Tunnel",
  UNDER_CONSTRUCTION: "UnderConstruction",
} as const;

/**
 * @public
 */
export type RouteSpanRoadAttribute = (typeof RouteSpanRoadAttribute)[keyof typeof RouteSpanRoadAttribute];

/**
 * @public
 * @enum
 */
export const RouteDirection = {
  EAST: "East",
  NORTH: "North",
  SOUTH: "South",
  WEST: "West",
} as const;

/**
 * @public
 */
export type RouteDirection = (typeof RouteDirection)[keyof typeof RouteDirection];

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
 * <p>Details about the speed limit corresponding to the span.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
 * @public
 */
export interface RouteSpanSpeedLimitDetails {
  /**
   * <p>Maximum speed.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
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
   * <p>Dynamic speed details corresponding to the span.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
   * @public
   */
  DynamicSpeed?: RouteSpanDynamicSpeedDetails | undefined;

  /**
   * <p>Functional classification of the road segment corresponding to the span.</p>
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
   * <p>Speed limit details corresponding to the span.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
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
 * <p>Provides a summary of a pedestrian route step.</p>
 * @public
 */
export interface RoutePedestrianOverviewSummary {
  /**
   * <p>Distance of the step.</p>
   * @public
   */
  Distance: number | undefined;

  /**
   * <p>Duration of the step.</p>
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
 * @public
 * @enum
 */
export const RouteRoadType = {
  HIGHWAY: "Highway",
  RURAL: "Rural",
  URBAN: "Urban",
} as const;

/**
 * @public
 */
export type RouteRoadType = (typeof RouteRoadType)[keyof typeof RouteRoadType];

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
 * @public
 * @enum
 */
export const RouteSteeringDirection = {
  LEFT: "Left",
  RIGHT: "Right",
  STRAIGHT: "Straight",
} as const;

/**
 * @public
 */
export type RouteSteeringDirection = (typeof RouteSteeringDirection)[keyof typeof RouteSteeringDirection];

/**
 * @public
 * @enum
 */
export const RouteTurnIntensity = {
  SHARP: "Sharp",
  SLIGHT: "Slight",
  TYPICAL: "Typical",
} as const;

/**
 * @public
 */
export type RouteTurnIntensity = (typeof RouteTurnIntensity)[keyof typeof RouteTurnIntensity];

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
 * @public
 * @enum
 */
export const RoutePedestrianTravelStepType = {
  ARRIVE: "Arrive",
  CONTINUE: "Continue",
  DEPART: "Depart",
  EXIT: "Exit",
  KEEP: "Keep",
  RAMP: "Ramp",
  ROUNDABOUT_ENTER: "RoundaboutEnter",
  ROUNDABOUT_EXIT: "RoundaboutExit",
  ROUNDABOUT_PASS: "RoundaboutPass",
  TURN: "Turn",
  U_TURN: "UTurn",
} as const;

/**
 * @public
 */
export type RoutePedestrianTravelStepType =
  (typeof RoutePedestrianTravelStepType)[keyof typeof RoutePedestrianTravelStepType];

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
   * <p>Notices are additional information returned that indicate issues that occurred during route calculation.</p>
   * @public
   */
  Notices: RoutePedestrianNotice[] | undefined;

  /**
   * <p>Waypoints that were passed through during the leg. This includes the waypoints that were configured with the PassThrough option.</p>
   * @public
   */
  PassThroughWaypoints: RoutePassThroughWaypoint[] | undefined;

  /**
   * <p>Spans that were computed for the requested SpanAdditionalFeatures.</p>
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
 * @public
 * @enum
 */
export const RouteLegTravelMode = {
  CAR: "Car",
  CAR_SHUTTLE_TRAIN: "CarShuttleTrain",
  FERRY: "Ferry",
  PEDESTRIAN: "Pedestrian",
  SCOOTER: "Scooter",
  TRUCK: "Truck",
} as const;

/**
 * @public
 */
export type RouteLegTravelMode = (typeof RouteLegTravelMode)[keyof typeof RouteLegTravelMode];

/**
 * @public
 * @enum
 */
export const RouteLegType = {
  FERRY: "Ferry",
  PEDESTRIAN: "Pedestrian",
  VEHICLE: "Vehicle",
} as const;

/**
 * @public
 */
export type RouteLegType = (typeof RouteLegType)[keyof typeof RouteLegType];

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
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
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
}

/**
 * <p>Details corresponding to the arrival for a leg.</p>
 * @public
 */
export interface RouteVehicleArrival {
  /**
   * <p>The place details.</p>
   * @public
   */
  Place: RouteVehiclePlace | undefined;

  /**
   * <p>The time.</p>
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
   * <p>The place details.</p>
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
 * @public
 * @enum
 */
export const RouteVehicleIncidentSeverity = {
  CRITICAL: "Critical",
  HIGH: "High",
  LOW: "Low",
  MEDIUM: "Medium",
} as const;

/**
 * @public
 */
export type RouteVehicleIncidentSeverity =
  (typeof RouteVehicleIncidentSeverity)[keyof typeof RouteVehicleIncidentSeverity];

/**
 * @public
 * @enum
 */
export const RouteVehicleIncidentType = {
  ACCIDENT: "Accident",
  CONGESTION: "Congestion",
  CONSTRUCTION: "Construction",
  DISABLED_VEHICLE: "DisabledVehicle",
  LANE_RESTRICTION: "LaneRestriction",
  MASS_TRANSIT: "MassTransit",
  OTHER: "Other",
  PLANNED_EVENT: "PlannedEvent",
  ROAD_CLOSURE: "RoadClosure",
  ROAD_HAZARD: "RoadHazard",
  WEATHER: "Weather",
} as const;

/**
 * @public
 */
export type RouteVehicleIncidentType = (typeof RouteVehicleIncidentType)[keyof typeof RouteVehicleIncidentType];

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
 * @public
 * @enum
 */
export const RouteVehicleNoticeCode = {
  ACCURATE_POLYLINE_UNAVAILABLE: "AccuratePolylineUnavailable",
  OTHER: "Other",
  POTENTIAL_VIOLATED_AVOID_TOLL_ROAD_USAGE: "PotentialViolatedAvoidTollRoadUsage",
  POTENTIAL_VIOLATED_CARPOOL_USAGE: "PotentialViolatedCarpoolUsage",
  POTENTIAL_VIOLATED_TURN_RESTRICTION_USAGE: "PotentialViolatedTurnRestrictionUsage",
  POTENTIAL_VIOLATED_VEHICLE_RESTRICTION_USAGE: "PotentialViolatedVehicleRestrictionUsage",
  POTENTIAL_VIOLATED_ZONE_RESTRICTION_USAGE: "PotentialViolatedZoneRestrictionUsage",
  SEASONAL_CLOSURE: "SeasonalClosure",
  TOLLS_DATA_TEMPORARILY_UNAVAILABLE: "TollsDataTemporarilyUnavailable",
  TOLLS_DATA_UNAVAILABLE: "TollsDataUnavailable",
  TOLL_TRANSPONDER: "TollTransponder",
  VIOLATED_AVOID_CONTROLLED_ACCESS_HIGHWAY: "ViolatedAvoidControlledAccessHighway",
  VIOLATED_AVOID_DIFFICULT_TURNS: "ViolatedAvoidDifficultTurns",
  VIOLATED_AVOID_DIRT_ROAD: "ViolatedAvoidDirtRoad",
  VIOLATED_AVOID_SEASONAL_CLOSURE: "ViolatedAvoidSeasonalClosure",
  VIOLATED_AVOID_TOLL_ROAD: "ViolatedAvoidTollRoad",
  VIOLATED_AVOID_TOLL_TRANSPONDER: "ViolatedAvoidTollTransponder",
  VIOLATED_AVOID_TRUCK_ROAD_TYPE: "ViolatedAvoidTruckRoadType",
  VIOLATED_AVOID_TUNNEL: "ViolatedAvoidTunnel",
  VIOLATED_AVOID_U_TURNS: "ViolatedAvoidUTurns",
  VIOLATED_BLOCKED_ROAD: "ViolatedBlockedRoad",
  VIOLATED_CARPOOL: "ViolatedCarpool",
  VIOLATED_EMERGENCY_GATE: "ViolatedEmergencyGate",
  VIOLATED_START_DIRECTION: "ViolatedStartDirection",
  VIOLATED_TURN_RESTRICTION: "ViolatedTurnRestriction",
  VIOLATED_VEHICLE_RESTRICTION: "ViolatedVehicleRestriction",
  VIOLATED_ZONE_RESTRICTION: "ViolatedZoneRestriction",
} as const;

/**
 * @public
 */
export type RouteVehicleNoticeCode = (typeof RouteVehicleNoticeCode)[keyof typeof RouteVehicleNoticeCode];

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
 * @public
 * @enum
 */
export const RouteWeightConstraintType = {
  CURRENT: "Current",
  GROSS: "Gross",
  UNKNOWN: "Unknown",
} as const;

/**
 * @public
 */
export type RouteWeightConstraintType = (typeof RouteWeightConstraintType)[keyof typeof RouteWeightConstraintType];

/**
 * <p>The weight constraint for the route.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
 * @public
 */
export interface RouteWeightConstraint {
  /**
   * <p>The type of constraint.</p>
   * @public
   */
  Type: RouteWeightConstraintType | undefined;

  /**
   * <p>The constraint value.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
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
   * <p>The maximum weight of the route.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
   * @public
   */
  MaxWeight?: RouteWeightConstraint | undefined;

  /**
   * <p>The maximum weight per axle of the vehicle.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
   * @public
   */
  MaxWeightPerAxle?: number | undefined;

  /**
   * <p>The maximum weight per axle group of the vehicle.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
   * @public
   */
  MaxWeightPerAxleGroup?: WeightPerAxleGroup | undefined;

  /**
   * <p>The maximum width of the vehicle.</p>
   * @public
   */
  MaxWidth?: number | undefined;

  /**
   * <p>The number of occupants in the vehicle.</p> <p>Default Value: <code>1</code> </p>
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
   * <p>Number of trailers attached to the vehicle.</p> <p>Default Value: <code>0</code> </p>
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
   * <p>Type of the truck.</p>
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
 * @public
 * @enum
 */
export const RouteSpanCarAccessAttribute = {
  ALLOWED: "Allowed",
  NO_THROUGH_TRAFFIC: "NoThroughTraffic",
  TOLL_ROAD: "TollRoad",
} as const;

/**
 * @public
 */
export type RouteSpanCarAccessAttribute =
  (typeof RouteSpanCarAccessAttribute)[keyof typeof RouteSpanCarAccessAttribute];

/**
 * @public
 * @enum
 */
export const RouteSpanGateAttribute = {
  EMERGENCY: "Emergency",
  KEY_ACCESS: "KeyAccess",
  PERMISSION_REQUIRED: "PermissionRequired",
} as const;

/**
 * @public
 */
export type RouteSpanGateAttribute = (typeof RouteSpanGateAttribute)[keyof typeof RouteSpanGateAttribute];

/**
 * @public
 * @enum
 */
export const RouteSpanRailwayCrossingAttribute = {
  PROTECTED: "Protected",
  UNPROTECTED: "Unprotected",
} as const;

/**
 * @public
 */
export type RouteSpanRailwayCrossingAttribute =
  (typeof RouteSpanRailwayCrossingAttribute)[keyof typeof RouteSpanRailwayCrossingAttribute];

/**
 * @public
 * @enum
 */
export const RouteSpanScooterAccessAttribute = {
  ALLOWED: "Allowed",
  NO_THROUGH_TRAFFIC: "NoThroughTraffic",
  TOLL_ROAD: "TollRoad",
} as const;

/**
 * @public
 */
export type RouteSpanScooterAccessAttribute =
  (typeof RouteSpanScooterAccessAttribute)[keyof typeof RouteSpanScooterAccessAttribute];

/**
 * @public
 * @enum
 */
export const RouteSpanTruckAccessAttribute = {
  ALLOWED: "Allowed",
  NO_THROUGH_TRAFFIC: "NoThroughTraffic",
  TOLL_ROAD: "TollRoad",
} as const;

/**
 * @public
 */
export type RouteSpanTruckAccessAttribute =
  (typeof RouteSpanTruckAccessAttribute)[keyof typeof RouteSpanTruckAccessAttribute];

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
   * <p>Dynamic speed details corresponding to the span.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
   * @public
   */
  DynamicSpeed?: RouteSpanDynamicSpeedDetails | undefined;

  /**
   * <p>Functional classification of the road segment corresponding to the span.</p>
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
   * <p>Speed limit details corresponding to the span.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
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
 * <p>Summarized details of the leg.</p>
 * @public
 */
export interface RouteVehicleOverviewSummary {
  /**
   * <p>Total duration in free flowing traffic, which is the best case or shortest duration possible to cover the leg.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  BestCaseDuration?: number | undefined;

  /**
   * <p>Distance of the step.</p>
   * @public
   */
  Distance: number | undefined;

  /**
   * <p>Duration of the step.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
   * @public
   */
  Duration: number | undefined;

  /**
   * <p>Duration of the computed span under typical traffic congestion. </p> <p> <b>Unit</b>: <code>seconds</code> </p>
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
   * <p>Duration of the computed span under typical traffic congestion.</p> <p> <b>Unit</b>: <code>seconds</code> </p>
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
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
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
 * @public
 * @enum
 */
export const RouteTollPassValidityPeriodType = {
  ANNUAL: "Annual",
  DAYS: "Days",
  EXTENDED_ANNUAL: "ExtendedAnnual",
  MINUTES: "Minutes",
  MONTHS: "Months",
} as const;

/**
 * @public
 */
export type RouteTollPassValidityPeriodType =
  (typeof RouteTollPassValidityPeriodType)[keyof typeof RouteTollPassValidityPeriodType];

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
 * @public
 * @enum
 */
export const RouteTollPaymentMethod = {
  BANK_CARD: "BankCard",
  CASH: "Cash",
  CASH_EXACT: "CashExact",
  CREDIT_CARD: "CreditCard",
  PASS_SUBSCRIPTION: "PassSubscription",
  TRANSPONDER: "Transponder",
  TRAVEL_CARD: "TravelCard",
  VIDEO_TOLL: "VideoToll",
} as const;

/**
 * @public
 */
export type RouteTollPaymentMethod = (typeof RouteTollPaymentMethod)[keyof typeof RouteTollPaymentMethod];

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
 * @public
 * @enum
 */
export const RouteVehicleTravelStepType = {
  ARRIVE: "Arrive",
  CONTINUE: "Continue",
  CONTINUE_HIGHWAY: "ContinueHighway",
  DEPART: "Depart",
  ENTER_HIGHWAY: "EnterHighway",
  EXIT: "Exit",
  KEEP: "Keep",
  RAMP: "Ramp",
  ROUNDABOUT_ENTER: "RoundaboutEnter",
  ROUNDABOUT_EXIT: "RoundaboutExit",
  ROUNDABOUT_PASS: "RoundaboutPass",
  TURN: "Turn",
  U_TURN: "UTurn",
} as const;

/**
 * @public
 */
export type RouteVehicleTravelStepType = (typeof RouteVehicleTravelStepType)[keyof typeof RouteVehicleTravelStepType];

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
   * <p>Incidents corresponding to this leg of the route.</p>
   * @public
   */
  Incidents: RouteVehicleIncident[] | undefined;

  /**
   * <p>Notices are additional information returned that indicate issues that occurred during route calculation.</p>
   * @public
   */
  Notices: RouteVehicleNotice[] | undefined;

  /**
   * <p>Waypoints that were passed through during the leg. This includes the waypoints that were configured with the PassThrough option.</p>
   * @public
   */
  PassThroughWaypoints: RoutePassThroughWaypoint[] | undefined;

  /**
   * <p>Spans that were computed for the requested SpanAdditionalFeatures.</p>
   * @public
   */
  Spans: RouteVehicleSpan[] | undefined;

  /**
   * <p>Summarized details of the leg.</p>
   * @public
   */
  Summary?: RouteVehicleSummary | undefined;

  /**
   * <p>Toll related options.</p>
   * @public
   */
  Tolls: RouteToll[] | undefined;

  /**
   * <p>Toll systems are authorities that collect payments for the toll.</p>
   * @public
   */
  TollSystems: RouteTollSystem[] | undefined;

  /**
   * <p>Steps of a leg that must be performed before the travel portion of the leg.</p>
   * @public
   */
  TravelSteps: RouteVehicleTravelStep[] | undefined;

  /**
   * <p>Truck road type identifiers. <code>BK1</code> through <code>BK4</code> apply only to Sweden. <code>A2,A4,B2,B4,C,D,ET2,ET4</code> apply only to Mexico.</p> <note> <p>There are currently no other supported values as of 26th April 2024.</p> </note>
   * @public
   */
  TruckRoadTypes: string[] | undefined;

  /**
   * <p>Zones corresponding to this leg of the route.</p>
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
   * <p>FerryLegDetails is populated when the Leg type is Ferry, and provides additional information that is specific</p>
   * @public
   */
  FerryLegDetails?: RouteFerryLegDetails | undefined;

  /**
   * <p>Geometry of the area to be avoided.</p>
   * @public
   */
  Geometry: RouteLegGeometry | undefined;

  /**
   * <p>List of languages for instructions within steps in the response.</p>
   * @public
   */
  Language?: string | undefined;

  /**
   * <p>Details related to the pedestrian leg.</p>
   * @public
   */
  PedestrianLegDetails?: RoutePedestrianLegDetails | undefined;

  /**
   * <p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.</p> <p>Default Value: <code>Car</code> </p>
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
   * <p>Notices are additional information returned that indicate issues that occurred during route calculation.</p>
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
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRIDAY: "Friday",
  MONDAY: "Monday",
  SATURDAY: "Saturday",
  SUNDAY: "Sunday",
  THURSDAY: "Thursday",
  TUESDAY: "Tuesday",
  WEDNESDAY: "Wednesday",
} as const;

/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

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
 * @public
 * @enum
 */
export const WaypointOptimizationClusteringAlgorithm = {
  DRIVING_DISTANCE: "DrivingDistance",
  TOPOLOGY_SEGMENT: "TopologySegment",
} as const;

/**
 * @public
 */
export type WaypointOptimizationClusteringAlgorithm =
  (typeof WaypointOptimizationClusteringAlgorithm)[keyof typeof WaypointOptimizationClusteringAlgorithm];

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
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Strategy that defines when the side of street position should be used. AnyStreet will always use the provided position.</p> <p>Default Value: <code>DividedStreetOnly</code> </p>
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
 * @public
 * @enum
 */
export const WaypointOptimizationServiceTimeTreatment = {
  REST: "Rest",
  WORK: "Work",
} as const;

/**
 * @public
 */
export type WaypointOptimizationServiceTimeTreatment =
  (typeof WaypointOptimizationServiceTimeTreatment)[keyof typeof WaypointOptimizationServiceTimeTreatment];

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
 * @public
 * @enum
 */
export const WaypointOptimizationSequencingObjective = {
  FASTEST_ROUTE: "FastestRoute",
  SHORTEST_ROUTE: "ShortestRoute",
} as const;

/**
 * @public
 */
export type WaypointOptimizationSequencingObjective =
  (typeof WaypointOptimizationSequencingObjective)[keyof typeof WaypointOptimizationSequencingObjective];

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
   * <p>Determines if traffic should be used or ignored while calculating the route.</p> <p>Default Value: <code>UseTrafficData</code> </p>
   * @public
   */
  Usage?: TrafficUsage | undefined;
}

/**
 * @public
 * @enum
 */
export const WaypointOptimizationTravelMode = {
  CAR: "Car",
  PEDESTRIAN: "Pedestrian",
  SCOOTER: "Scooter",
  TRUCK: "Truck",
} as const;

/**
 * @public
 */
export type WaypointOptimizationTravelMode =
  (typeof WaypointOptimizationTravelMode)[keyof typeof WaypointOptimizationTravelMode];

/**
 * <p>Options related to a pedestrian.</p>
 * @public
 */
export interface WaypointOptimizationPedestrianOptions {
  /**
   * <p>Walking speed.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
   * @public
   */
  Speed?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const WaypointOptimizationHazardousCargoType = {
  COMBUSTIBLE: "Combustible",
  CORROSIVE: "Corrosive",
  EXPLOSIVE: "Explosive",
  FLAMMABLE: "Flammable",
  GAS: "Gas",
  HARMFUL_TO_WATER: "HarmfulToWater",
  ORGANIC: "Organic",
  OTHER: "Other",
  POISON: "Poison",
  POISONOUS_INHALATION: "PoisonousInhalation",
  RADIOACTIVE: "Radioactive",
} as const;

/**
 * @public
 */
export type WaypointOptimizationHazardousCargoType =
  (typeof WaypointOptimizationHazardousCargoType)[keyof typeof WaypointOptimizationHazardousCargoType];

/**
 * <p>Trailer options corresponding to the vehicle.</p>
 * @public
 */
export interface WaypointOptimizationTrailerOptions {
  /**
   * <p>Number of trailers attached to the vehicle.</p> <p>Default Value: <code>0</code> </p>
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const WaypointOptimizationTruckType = {
  STRAIGHT_TRUCK: "StraightTruck",
  TRACTOR: "Tractor",
} as const;

/**
 * @public
 */
export type WaypointOptimizationTruckType =
  (typeof WaypointOptimizationTruckType)[keyof typeof WaypointOptimizationTruckType];

/**
 * <p>Travel mode options when the provided travel mode is "Truck"</p>
 * @public
 */
export interface WaypointOptimizationTruckOptions {
  /**
   * <p>Gross weight of the vehicle including trailers, and goods at capacity.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
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
   * <p>Type of the truck.</p>
   * @public
   */
  TruckType?: WaypointOptimizationTruckType | undefined;

  /**
   * <p>The tunnel restriction code.</p> <p>Tunnel categories in this list indicate the restrictions which apply to certain tunnels in Great Britain. They relate to the types of dangerous goods that can be transported through them.</p> <ul> <li> <p> <i>Tunnel Category B</i> </p> <ul> <li> <p> <i>Risk Level</i>: Limited risk</p> </li> <li> <p> <i>Restrictions</i>: Few restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category C</i> </p> <ul> <li> <p> <i>Risk Level</i>: Medium risk</p> </li> <li> <p> <i>Restrictions</i>: Some restrictions</p> </li> </ul> </li> <li> <p> <i>Tunnel Category D</i> </p> <ul> <li> <p> <i>Risk Level</i>: High risk</p> </li> <li> <p> <i>Restrictions</i>: Many restrictions occur</p> </li> </ul> </li> <li> <p> <i>Tunnel Category E</i> </p> <ul> <li> <p> <i>Risk Level</i>: Very high risk</p> </li> <li> <p> <i>Restrictions</i>: Restricted tunnel</p> </li> </ul> </li> </ul>
   * @public
   */
  TunnelRestrictionCode?: string | undefined;

  /**
   * <p>Heaviest weight per axle irrespective of the axle type or the axle group. Meant for usage in countries where the differences in axle types or axle groups are not distinguished.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
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
   * <p>Travel mode options when the provided travel mode is "Pedestrian"</p>
   * @public
   */
  Pedestrian?: WaypointOptimizationPedestrianOptions | undefined;

  /**
   * <p>Travel mode options when the provided travel mode is "Truck"</p>
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
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
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
   * <p>Specifies the optimization criteria for the calculated sequence.</p> <p>Default Value: <code>FastestRoute</code>.</p>
   * @public
   */
  OptimizeSequencingFor?: WaypointOptimizationSequencingObjective | undefined;

  /**
   * <p>The start position for the route.</p>
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
   * <p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.</p> <p>Default Value: <code>Car</code> </p>
   * @public
   */
  TravelMode?: WaypointOptimizationTravelMode | undefined;

  /**
   * <p>Travel mode related options for the provided travel mode.</p>
   * @public
   */
  TravelModeOptions?: WaypointOptimizationTravelModeOptions | undefined;

  /**
   * <p>List of waypoints between the <code>Origin</code> and <code>Destination</code>.</p>
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
 * @public
 * @enum
 */
export const WaypointOptimizationConstraint = {
  ACCESS_HOURS: "AccessHours",
  APPOINTMENT_TIME: "AppointmentTime",
  BEFORE: "Before",
  HEADING: "Heading",
  SERVICE_DURATION: "ServiceDuration",
  SIDE_OF_STREET: "SideOfStreet",
} as const;

/**
 * @public
 */
export type WaypointOptimizationConstraint =
  (typeof WaypointOptimizationConstraint)[keyof typeof WaypointOptimizationConstraint];

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
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
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
   * <p>Estimated time of departure from thr origin.</p> <p>Time format:<code>YYYY-MM-DDThh:mm:ss.sssZ | YYYY-MM-DDThh:mm:ss.sss+hh:mm</code> </p> <p>Examples:</p> <p> <code>2020-04-22T17:57:24Z</code> </p> <p> <code>2020-04-22T17:57:24+02:00</code> </p>
   * @public
   */
  DepartureTime: string | undefined;

  /**
   * <p>The waypoint Id.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
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
   * <p>Position defined as <code>[longitude, latitude]</code>.</p>
   * @public
   */
  Position: number[] | undefined;

  /**
   * <p>Speed at the specified trace point .</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
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
 * @public
 * @enum
 */
export const RoadSnapTravelMode = {
  CAR: "Car",
  PEDESTRIAN: "Pedestrian",
  SCOOTER: "Scooter",
  TRUCK: "Truck",
} as const;

/**
 * @public
 */
export type RoadSnapTravelMode = (typeof RoadSnapTravelMode)[keyof typeof RoadSnapTravelMode];

/**
 * @public
 * @enum
 */
export const RoadSnapHazardousCargoType = {
  COMBUSTIBLE: "Combustible",
  CORROSIVE: "Corrosive",
  EXPLOSIVE: "Explosive",
  FLAMMABLE: "Flammable",
  GAS: "Gas",
  HARMFUL_TO_WATER: "HarmfulToWater",
  ORGANIC: "Organic",
  OTHER: "Other",
  POISON: "Poison",
  POISONOUS_INHALATION: "PoisonousInhalation",
  RADIOACTIVE: "Radioactive",
} as const;

/**
 * @public
 */
export type RoadSnapHazardousCargoType = (typeof RoadSnapHazardousCargoType)[keyof typeof RoadSnapHazardousCargoType];

/**
 * <p>Trailer options corresponding to the vehicle.</p>
 * @public
 */
export interface RoadSnapTrailerOptions {
  /**
   * <p>Number of trailers attached to the vehicle.</p> <p>Default Value: <code>0</code> </p>
   * @public
   */
  TrailerCount?: number | undefined;
}

/**
 * <p>Travel mode options when the provided travel mode is "Truck".</p>
 * @public
 */
export interface RoadSnapTruckOptions {
  /**
   * <p>Gross weight of the vehicle including trailers, and goods at capacity.</p> <p> <b>Unit</b>: <code>Kilograms</code> </p>
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
   * <p>Width of the vehicle in centimenters.</p>
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
   * <p>Travel mode options when the provided travel mode is "Truck".</p>
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
   * <p>Chooses what the returned SnappedGeometry format should be.</p> <p>Default Value: <code>FlexiblePolyline</code> </p>
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
   * <p>Specifies the mode of transport when calculating a route. Used in estimating the speed of travel and road compatibility.</p> <p>Default Value: <code>Car</code> </p>
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
 * @public
 * @enum
 */
export const RoadSnapNoticeCode = {
  TRACE_POINTS_HEADING_IGNORED: "TracePointsHeadingIgnored",
  TRACE_POINTS_IGNORED: "TracePointsIgnored",
  TRACE_POINTS_MOVED_BY_LARGE_DISTANCE: "TracePointsMovedByLargeDistance",
  TRACE_POINTS_NOT_MATCHED: "TracePointsNotMatched",
  TRACE_POINTS_OUT_OF_SEQUENCE: "TracePointsOutOfSequence",
  TRACE_POINTS_SPEED_ESTIMATED: "TracePointsSpeedEstimated",
  TRACE_POINTS_SPEED_IGNORED: "TracePointsSpeedIgnored",
} as const;

/**
 * @public
 */
export type RoadSnapNoticeCode = (typeof RoadSnapNoticeCode)[keyof typeof RoadSnapNoticeCode];

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

/**
 * @internal
 */
export const IsolineAllowOptionsFilterSensitiveLog = (obj: IsolineAllowOptions): any => ({
  ...obj,
  ...(obj.Hot && { Hot: SENSITIVE_STRING }),
  ...(obj.Hov && { Hov: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CorridorFilterSensitiveLog = (obj: Corridor): any => ({
  ...obj,
  ...(obj.LineString && { LineString: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PolylineCorridorFilterSensitiveLog = (obj: PolylineCorridor): any => ({
  ...obj,
  ...(obj.Polyline && { Polyline: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsolineAvoidanceAreaGeometryFilterSensitiveLog = (obj: IsolineAvoidanceAreaGeometry): any => ({
  ...obj,
  ...(obj.BoundingBox && { BoundingBox: SENSITIVE_STRING }),
  ...(obj.Corridor && { Corridor: SENSITIVE_STRING }),
  ...(obj.Polygon && { Polygon: obj.Polygon.map((item) => SENSITIVE_STRING) }),
  ...(obj.PolylineCorridor && { PolylineCorridor: SENSITIVE_STRING }),
  ...(obj.PolylinePolygon && { PolylinePolygon: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsolineAvoidanceAreaFilterSensitiveLog = (obj: IsolineAvoidanceArea): any => ({
  ...obj,
  ...(obj.Except && { Except: obj.Except.map((item) => IsolineAvoidanceAreaGeometryFilterSensitiveLog(item)) }),
  ...(obj.Geometry && { Geometry: IsolineAvoidanceAreaGeometryFilterSensitiveLog(obj.Geometry) }),
});

/**
 * @internal
 */
export const IsolineAvoidanceOptionsFilterSensitiveLog = (obj: IsolineAvoidanceOptions): any => ({
  ...obj,
  ...(obj.Areas && { Areas: obj.Areas.map((item) => IsolineAvoidanceAreaFilterSensitiveLog(item)) }),
  ...(obj.CarShuttleTrains && { CarShuttleTrains: SENSITIVE_STRING }),
  ...(obj.ControlledAccessHighways && { ControlledAccessHighways: SENSITIVE_STRING }),
  ...(obj.DirtRoads && { DirtRoads: SENSITIVE_STRING }),
  ...(obj.Ferries && { Ferries: SENSITIVE_STRING }),
  ...(obj.SeasonalClosure && { SeasonalClosure: SENSITIVE_STRING }),
  ...(obj.TollRoads && { TollRoads: SENSITIVE_STRING }),
  ...(obj.TollTransponders && { TollTransponders: SENSITIVE_STRING }),
  ...(obj.TruckRoadTypes && { TruckRoadTypes: SENSITIVE_STRING }),
  ...(obj.Tunnels && { Tunnels: SENSITIVE_STRING }),
  ...(obj.UTurns && { UTurns: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsolineMatchingOptionsFilterSensitiveLog = (obj: IsolineMatchingOptions): any => ({
  ...obj,
  ...(obj.NameHint && { NameHint: SENSITIVE_STRING }),
  ...(obj.OnRoadThreshold && { OnRoadThreshold: SENSITIVE_STRING }),
  ...(obj.Radius && { Radius: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsolineSideOfStreetOptionsFilterSensitiveLog = (obj: IsolineSideOfStreetOptions): any => ({
  ...obj,
  ...(obj.Position && { Position: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsolineDestinationOptionsFilterSensitiveLog = (obj: IsolineDestinationOptions): any => ({
  ...obj,
  ...(obj.AvoidActionsForDistance && { AvoidActionsForDistance: SENSITIVE_STRING }),
  ...(obj.Heading && { Heading: SENSITIVE_STRING }),
  ...(obj.Matching && { Matching: IsolineMatchingOptionsFilterSensitiveLog(obj.Matching) }),
  ...(obj.SideOfStreet && { SideOfStreet: IsolineSideOfStreetOptionsFilterSensitiveLog(obj.SideOfStreet) }),
});

/**
 * @internal
 */
export const IsolineGranularityOptionsFilterSensitiveLog = (obj: IsolineGranularityOptions): any => ({
  ...obj,
  ...(obj.MaxResolution && { MaxResolution: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsolineOriginOptionsFilterSensitiveLog = (obj: IsolineOriginOptions): any => ({
  ...obj,
  ...(obj.AvoidActionsForDistance && { AvoidActionsForDistance: SENSITIVE_STRING }),
  ...(obj.Heading && { Heading: SENSITIVE_STRING }),
  ...(obj.Matching && { Matching: IsolineMatchingOptionsFilterSensitiveLog(obj.Matching) }),
  ...(obj.SideOfStreet && { SideOfStreet: IsolineSideOfStreetOptionsFilterSensitiveLog(obj.SideOfStreet) }),
});

/**
 * @internal
 */
export const IsolineThresholdsFilterSensitiveLog = (obj: IsolineThresholds): any => ({
  ...obj,
  ...(obj.Distance && { Distance: SENSITIVE_STRING }),
  ...(obj.Time && { Time: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsolineTrafficOptionsFilterSensitiveLog = (obj: IsolineTrafficOptions): any => ({
  ...obj,
  ...(obj.FlowEventThresholdOverride && { FlowEventThresholdOverride: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsolineVehicleLicensePlateFilterSensitiveLog = (obj: IsolineVehicleLicensePlate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IsolineCarOptionsFilterSensitiveLog = (obj: IsolineCarOptions): any => ({
  ...obj,
  ...(obj.EngineType && { EngineType: SENSITIVE_STRING }),
  ...(obj.LicensePlate && { LicensePlate: SENSITIVE_STRING }),
  ...(obj.MaxSpeed && { MaxSpeed: SENSITIVE_STRING }),
  ...(obj.Occupancy && { Occupancy: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsolineScooterOptionsFilterSensitiveLog = (obj: IsolineScooterOptions): any => ({
  ...obj,
  ...(obj.EngineType && { EngineType: SENSITIVE_STRING }),
  ...(obj.LicensePlate && { LicensePlate: SENSITIVE_STRING }),
  ...(obj.MaxSpeed && { MaxSpeed: SENSITIVE_STRING }),
  ...(obj.Occupancy && { Occupancy: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsolineTrailerOptionsFilterSensitiveLog = (obj: IsolineTrailerOptions): any => ({
  ...obj,
  ...(obj.AxleCount && { AxleCount: SENSITIVE_STRING }),
  ...(obj.TrailerCount && { TrailerCount: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WeightPerAxleGroupFilterSensitiveLog = (obj: WeightPerAxleGroup): any => ({
  ...obj,
  ...(obj.Single && { Single: SENSITIVE_STRING }),
  ...(obj.Tandem && { Tandem: SENSITIVE_STRING }),
  ...(obj.Triple && { Triple: SENSITIVE_STRING }),
  ...(obj.Quad && { Quad: SENSITIVE_STRING }),
  ...(obj.Quint && { Quint: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsolineTruckOptionsFilterSensitiveLog = (obj: IsolineTruckOptions): any => ({
  ...obj,
  ...(obj.AxleCount && { AxleCount: SENSITIVE_STRING }),
  ...(obj.EngineType && { EngineType: SENSITIVE_STRING }),
  ...(obj.GrossWeight && { GrossWeight: SENSITIVE_STRING }),
  ...(obj.HazardousCargos && { HazardousCargos: SENSITIVE_STRING }),
  ...(obj.Height && { Height: SENSITIVE_STRING }),
  ...(obj.HeightAboveFirstAxle && { HeightAboveFirstAxle: SENSITIVE_STRING }),
  ...(obj.KpraLength && { KpraLength: SENSITIVE_STRING }),
  ...(obj.Length && { Length: SENSITIVE_STRING }),
  ...(obj.LicensePlate && { LicensePlate: SENSITIVE_STRING }),
  ...(obj.MaxSpeed && { MaxSpeed: SENSITIVE_STRING }),
  ...(obj.Occupancy && { Occupancy: SENSITIVE_STRING }),
  ...(obj.PayloadCapacity && { PayloadCapacity: SENSITIVE_STRING }),
  ...(obj.TireCount && { TireCount: SENSITIVE_STRING }),
  ...(obj.Trailer && { Trailer: IsolineTrailerOptionsFilterSensitiveLog(obj.Trailer) }),
  ...(obj.TunnelRestrictionCode && { TunnelRestrictionCode: SENSITIVE_STRING }),
  ...(obj.WeightPerAxle && { WeightPerAxle: SENSITIVE_STRING }),
  ...(obj.WeightPerAxleGroup && { WeightPerAxleGroup: WeightPerAxleGroupFilterSensitiveLog(obj.WeightPerAxleGroup) }),
  ...(obj.Width && { Width: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsolineTravelModeOptionsFilterSensitiveLog = (obj: IsolineTravelModeOptions): any => ({
  ...obj,
  ...(obj.Car && { Car: IsolineCarOptionsFilterSensitiveLog(obj.Car) }),
  ...(obj.Scooter && { Scooter: IsolineScooterOptionsFilterSensitiveLog(obj.Scooter) }),
  ...(obj.Truck && { Truck: IsolineTruckOptionsFilterSensitiveLog(obj.Truck) }),
});

/**
 * @internal
 */
export const CalculateIsolinesRequestFilterSensitiveLog = (obj: CalculateIsolinesRequest): any => ({
  ...obj,
  ...(obj.Allow && { Allow: IsolineAllowOptionsFilterSensitiveLog(obj.Allow) }),
  ...(obj.ArrivalTime && { ArrivalTime: SENSITIVE_STRING }),
  ...(obj.Avoid && { Avoid: IsolineAvoidanceOptionsFilterSensitiveLog(obj.Avoid) }),
  ...(obj.DepartNow && { DepartNow: SENSITIVE_STRING }),
  ...(obj.DepartureTime && { DepartureTime: SENSITIVE_STRING }),
  ...(obj.Destination && { Destination: SENSITIVE_STRING }),
  ...(obj.DestinationOptions && {
    DestinationOptions: IsolineDestinationOptionsFilterSensitiveLog(obj.DestinationOptions),
  }),
  ...(obj.IsolineGranularity && {
    IsolineGranularity: IsolineGranularityOptionsFilterSensitiveLog(obj.IsolineGranularity),
  }),
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Origin && { Origin: SENSITIVE_STRING }),
  ...(obj.OriginOptions && { OriginOptions: IsolineOriginOptionsFilterSensitiveLog(obj.OriginOptions) }),
  ...(obj.Thresholds && { Thresholds: IsolineThresholdsFilterSensitiveLog(obj.Thresholds) }),
  ...(obj.Traffic && { Traffic: IsolineTrafficOptionsFilterSensitiveLog(obj.Traffic) }),
  ...(obj.TravelModeOptions && {
    TravelModeOptions: IsolineTravelModeOptionsFilterSensitiveLog(obj.TravelModeOptions),
  }),
});

/**
 * @internal
 */
export const IsolineConnectionGeometryFilterSensitiveLog = (obj: IsolineConnectionGeometry): any => ({
  ...obj,
  ...(obj.LineString && { LineString: SENSITIVE_STRING }),
  ...(obj.Polyline && { Polyline: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsolineConnectionFilterSensitiveLog = (obj: IsolineConnection): any => ({
  ...obj,
  ...(obj.Geometry && { Geometry: IsolineConnectionGeometryFilterSensitiveLog(obj.Geometry) }),
});

/**
 * @internal
 */
export const IsolineShapeGeometryFilterSensitiveLog = (obj: IsolineShapeGeometry): any => ({
  ...obj,
  ...(obj.Polygon && { Polygon: obj.Polygon.map((item) => SENSITIVE_STRING) }),
  ...(obj.PolylinePolygon && { PolylinePolygon: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IsolineFilterSensitiveLog = (obj: Isoline): any => ({
  ...obj,
  ...(obj.Connections && { Connections: obj.Connections.map((item) => IsolineConnectionFilterSensitiveLog(item)) }),
  ...(obj.DistanceThreshold && { DistanceThreshold: SENSITIVE_STRING }),
  ...(obj.Geometries && { Geometries: obj.Geometries.map((item) => IsolineShapeGeometryFilterSensitiveLog(item)) }),
  ...(obj.TimeThreshold && { TimeThreshold: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CalculateIsolinesResponseFilterSensitiveLog = (obj: CalculateIsolinesResponse): any => ({
  ...obj,
  ...(obj.ArrivalTime && { ArrivalTime: SENSITIVE_STRING }),
  ...(obj.DepartureTime && { DepartureTime: SENSITIVE_STRING }),
  ...(obj.Isolines && { Isolines: obj.Isolines.map((item) => IsolineFilterSensitiveLog(item)) }),
  ...(obj.SnappedDestination && { SnappedDestination: SENSITIVE_STRING }),
  ...(obj.SnappedOrigin && { SnappedOrigin: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixAllowOptionsFilterSensitiveLog = (obj: RouteMatrixAllowOptions): any => ({
  ...obj,
  ...(obj.Hot && { Hot: SENSITIVE_STRING }),
  ...(obj.Hov && { Hov: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixAvoidanceAreaGeometryFilterSensitiveLog = (obj: RouteMatrixAvoidanceAreaGeometry): any => ({
  ...obj,
  ...(obj.BoundingBox && { BoundingBox: SENSITIVE_STRING }),
  ...(obj.Polygon && { Polygon: obj.Polygon.map((item) => SENSITIVE_STRING) }),
  ...(obj.PolylinePolygon && { PolylinePolygon: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixAvoidanceAreaFilterSensitiveLog = (obj: RouteMatrixAvoidanceArea): any => ({
  ...obj,
  ...(obj.Geometry && { Geometry: RouteMatrixAvoidanceAreaGeometryFilterSensitiveLog(obj.Geometry) }),
});

/**
 * @internal
 */
export const RouteMatrixAvoidanceZoneCategoryFilterSensitiveLog = (obj: RouteMatrixAvoidanceZoneCategory): any => ({
  ...obj,
  ...(obj.Category && { Category: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixAvoidanceOptionsFilterSensitiveLog = (obj: RouteMatrixAvoidanceOptions): any => ({
  ...obj,
  ...(obj.Areas && { Areas: obj.Areas.map((item) => RouteMatrixAvoidanceAreaFilterSensitiveLog(item)) }),
  ...(obj.CarShuttleTrains && { CarShuttleTrains: SENSITIVE_STRING }),
  ...(obj.ControlledAccessHighways && { ControlledAccessHighways: SENSITIVE_STRING }),
  ...(obj.DirtRoads && { DirtRoads: SENSITIVE_STRING }),
  ...(obj.Ferries && { Ferries: SENSITIVE_STRING }),
  ...(obj.TollRoads && { TollRoads: SENSITIVE_STRING }),
  ...(obj.TollTransponders && { TollTransponders: SENSITIVE_STRING }),
  ...(obj.TruckRoadTypes && { TruckRoadTypes: SENSITIVE_STRING }),
  ...(obj.Tunnels && { Tunnels: SENSITIVE_STRING }),
  ...(obj.UTurns && { UTurns: SENSITIVE_STRING }),
  ...(obj.ZoneCategories && {
    ZoneCategories: obj.ZoneCategories.map((item) => RouteMatrixAvoidanceZoneCategoryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RouteMatrixMatchingOptionsFilterSensitiveLog = (obj: RouteMatrixMatchingOptions): any => ({
  ...obj,
  ...(obj.NameHint && { NameHint: SENSITIVE_STRING }),
  ...(obj.OnRoadThreshold && { OnRoadThreshold: SENSITIVE_STRING }),
  ...(obj.Radius && { Radius: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixSideOfStreetOptionsFilterSensitiveLog = (obj: RouteMatrixSideOfStreetOptions): any => ({
  ...obj,
  ...(obj.Position && { Position: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixDestinationOptionsFilterSensitiveLog = (obj: RouteMatrixDestinationOptions): any => ({
  ...obj,
  ...(obj.AvoidActionsForDistance && { AvoidActionsForDistance: SENSITIVE_STRING }),
  ...(obj.Heading && { Heading: SENSITIVE_STRING }),
  ...(obj.Matching && { Matching: RouteMatrixMatchingOptionsFilterSensitiveLog(obj.Matching) }),
  ...(obj.SideOfStreet && { SideOfStreet: RouteMatrixSideOfStreetOptionsFilterSensitiveLog(obj.SideOfStreet) }),
});

/**
 * @internal
 */
export const RouteMatrixDestinationFilterSensitiveLog = (obj: RouteMatrixDestination): any => ({
  ...obj,
  ...(obj.Options && { Options: RouteMatrixDestinationOptionsFilterSensitiveLog(obj.Options) }),
  ...(obj.Position && { Position: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixExclusionOptionsFilterSensitiveLog = (obj: RouteMatrixExclusionOptions): any => ({
  ...obj,
  ...(obj.Countries && { Countries: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixOriginOptionsFilterSensitiveLog = (obj: RouteMatrixOriginOptions): any => ({
  ...obj,
  ...(obj.AvoidActionsForDistance && { AvoidActionsForDistance: SENSITIVE_STRING }),
  ...(obj.Heading && { Heading: SENSITIVE_STRING }),
  ...(obj.Matching && { Matching: RouteMatrixMatchingOptionsFilterSensitiveLog(obj.Matching) }),
  ...(obj.SideOfStreet && { SideOfStreet: RouteMatrixSideOfStreetOptionsFilterSensitiveLog(obj.SideOfStreet) }),
});

/**
 * @internal
 */
export const RouteMatrixOriginFilterSensitiveLog = (obj: RouteMatrixOrigin): any => ({
  ...obj,
  ...(obj.Options && { Options: RouteMatrixOriginOptionsFilterSensitiveLog(obj.Options) }),
  ...(obj.Position && { Position: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixAutoCircleFilterSensitiveLog = (obj: RouteMatrixAutoCircle): any => ({
  ...obj,
  ...(obj.Margin && { Margin: SENSITIVE_STRING }),
  ...(obj.MaxRadius && { MaxRadius: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CircleFilterSensitiveLog = (obj: Circle): any => ({
  ...obj,
  ...(obj.Center && { Center: SENSITIVE_STRING }),
  ...(obj.Radius && { Radius: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixBoundaryGeometryFilterSensitiveLog = (obj: RouteMatrixBoundaryGeometry): any => ({
  ...obj,
  ...(obj.AutoCircle && { AutoCircle: RouteMatrixAutoCircleFilterSensitiveLog(obj.AutoCircle) }),
  ...(obj.Circle && { Circle: SENSITIVE_STRING }),
  ...(obj.BoundingBox && { BoundingBox: SENSITIVE_STRING }),
  ...(obj.Polygon && { Polygon: obj.Polygon.map((item) => SENSITIVE_STRING) }),
});

/**
 * @internal
 */
export const RouteMatrixBoundaryFilterSensitiveLog = (obj: RouteMatrixBoundary): any => ({
  ...obj,
  ...(obj.Geometry && { Geometry: RouteMatrixBoundaryGeometryFilterSensitiveLog(obj.Geometry) }),
  ...(obj.Unbounded && { Unbounded: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixTrafficOptionsFilterSensitiveLog = (obj: RouteMatrixTrafficOptions): any => ({
  ...obj,
  ...(obj.FlowEventThresholdOverride && { FlowEventThresholdOverride: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixVehicleLicensePlateFilterSensitiveLog = (obj: RouteMatrixVehicleLicensePlate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RouteMatrixCarOptionsFilterSensitiveLog = (obj: RouteMatrixCarOptions): any => ({
  ...obj,
  ...(obj.LicensePlate && { LicensePlate: SENSITIVE_STRING }),
  ...(obj.MaxSpeed && { MaxSpeed: SENSITIVE_STRING }),
  ...(obj.Occupancy && { Occupancy: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixScooterOptionsFilterSensitiveLog = (obj: RouteMatrixScooterOptions): any => ({
  ...obj,
  ...(obj.LicensePlate && { LicensePlate: SENSITIVE_STRING }),
  ...(obj.MaxSpeed && { MaxSpeed: SENSITIVE_STRING }),
  ...(obj.Occupancy && { Occupancy: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixTrailerOptionsFilterSensitiveLog = (obj: RouteMatrixTrailerOptions): any => ({
  ...obj,
  ...(obj.TrailerCount && { TrailerCount: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixTruckOptionsFilterSensitiveLog = (obj: RouteMatrixTruckOptions): any => ({
  ...obj,
  ...(obj.AxleCount && { AxleCount: SENSITIVE_STRING }),
  ...(obj.GrossWeight && { GrossWeight: SENSITIVE_STRING }),
  ...(obj.HazardousCargos && { HazardousCargos: SENSITIVE_STRING }),
  ...(obj.Height && { Height: SENSITIVE_STRING }),
  ...(obj.KpraLength && { KpraLength: SENSITIVE_STRING }),
  ...(obj.Length && { Length: SENSITIVE_STRING }),
  ...(obj.LicensePlate && { LicensePlate: SENSITIVE_STRING }),
  ...(obj.MaxSpeed && { MaxSpeed: SENSITIVE_STRING }),
  ...(obj.Occupancy && { Occupancy: SENSITIVE_STRING }),
  ...(obj.PayloadCapacity && { PayloadCapacity: SENSITIVE_STRING }),
  ...(obj.Trailer && { Trailer: RouteMatrixTrailerOptionsFilterSensitiveLog(obj.Trailer) }),
  ...(obj.TruckType && { TruckType: SENSITIVE_STRING }),
  ...(obj.TunnelRestrictionCode && { TunnelRestrictionCode: SENSITIVE_STRING }),
  ...(obj.WeightPerAxle && { WeightPerAxle: SENSITIVE_STRING }),
  ...(obj.WeightPerAxleGroup && { WeightPerAxleGroup: WeightPerAxleGroupFilterSensitiveLog(obj.WeightPerAxleGroup) }),
  ...(obj.Width && { Width: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteMatrixTravelModeOptionsFilterSensitiveLog = (obj: RouteMatrixTravelModeOptions): any => ({
  ...obj,
  ...(obj.Car && { Car: RouteMatrixCarOptionsFilterSensitiveLog(obj.Car) }),
  ...(obj.Scooter && { Scooter: RouteMatrixScooterOptionsFilterSensitiveLog(obj.Scooter) }),
  ...(obj.Truck && { Truck: RouteMatrixTruckOptionsFilterSensitiveLog(obj.Truck) }),
});

/**
 * @internal
 */
export const CalculateRouteMatrixRequestFilterSensitiveLog = (obj: CalculateRouteMatrixRequest): any => ({
  ...obj,
  ...(obj.Allow && { Allow: SENSITIVE_STRING }),
  ...(obj.Avoid && { Avoid: RouteMatrixAvoidanceOptionsFilterSensitiveLog(obj.Avoid) }),
  ...(obj.DepartNow && { DepartNow: SENSITIVE_STRING }),
  ...(obj.DepartureTime && { DepartureTime: SENSITIVE_STRING }),
  ...(obj.Destinations && {
    Destinations: obj.Destinations.map((item) => RouteMatrixDestinationFilterSensitiveLog(item)),
  }),
  ...(obj.Exclude && { Exclude: RouteMatrixExclusionOptionsFilterSensitiveLog(obj.Exclude) }),
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Origins && { Origins: obj.Origins.map((item) => RouteMatrixOriginFilterSensitiveLog(item)) }),
  ...(obj.RoutingBoundary && { RoutingBoundary: RouteMatrixBoundaryFilterSensitiveLog(obj.RoutingBoundary) }),
  ...(obj.Traffic && { Traffic: RouteMatrixTrafficOptionsFilterSensitiveLog(obj.Traffic) }),
  ...(obj.TravelModeOptions && {
    TravelModeOptions: RouteMatrixTravelModeOptionsFilterSensitiveLog(obj.TravelModeOptions),
  }),
});

/**
 * @internal
 */
export const RouteMatrixEntryFilterSensitiveLog = (obj: RouteMatrixEntry): any => ({
  ...obj,
  ...(obj.Distance && { Distance: SENSITIVE_STRING }),
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CalculateRouteMatrixResponseFilterSensitiveLog = (obj: CalculateRouteMatrixResponse): any => ({
  ...obj,
  ...(obj.RouteMatrix && {
    RouteMatrix: obj.RouteMatrix.map((item) => item.map((item) => RouteMatrixEntryFilterSensitiveLog(item))),
  }),
  ...(obj.RoutingBoundary && { RoutingBoundary: RouteMatrixBoundaryFilterSensitiveLog(obj.RoutingBoundary) }),
});

/**
 * @internal
 */
export const RouteAllowOptionsFilterSensitiveLog = (obj: RouteAllowOptions): any => ({
  ...obj,
  ...(obj.Hot && { Hot: SENSITIVE_STRING }),
  ...(obj.Hov && { Hov: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteAvoidanceAreaGeometryFilterSensitiveLog = (obj: RouteAvoidanceAreaGeometry): any => ({
  ...obj,
  ...(obj.Corridor && { Corridor: SENSITIVE_STRING }),
  ...(obj.BoundingBox && { BoundingBox: SENSITIVE_STRING }),
  ...(obj.Polygon && { Polygon: obj.Polygon.map((item) => SENSITIVE_STRING) }),
  ...(obj.PolylineCorridor && { PolylineCorridor: SENSITIVE_STRING }),
  ...(obj.PolylinePolygon && { PolylinePolygon: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteAvoidanceAreaFilterSensitiveLog = (obj: RouteAvoidanceArea): any => ({
  ...obj,
  ...(obj.Except && { Except: obj.Except.map((item) => RouteAvoidanceAreaGeometryFilterSensitiveLog(item)) }),
  ...(obj.Geometry && { Geometry: RouteAvoidanceAreaGeometryFilterSensitiveLog(obj.Geometry) }),
});

/**
 * @internal
 */
export const RouteAvoidanceZoneCategoryFilterSensitiveLog = (obj: RouteAvoidanceZoneCategory): any => ({
  ...obj,
  ...(obj.Category && { Category: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteAvoidanceOptionsFilterSensitiveLog = (obj: RouteAvoidanceOptions): any => ({
  ...obj,
  ...(obj.Areas && { Areas: obj.Areas.map((item) => RouteAvoidanceAreaFilterSensitiveLog(item)) }),
  ...(obj.CarShuttleTrains && { CarShuttleTrains: SENSITIVE_STRING }),
  ...(obj.ControlledAccessHighways && { ControlledAccessHighways: SENSITIVE_STRING }),
  ...(obj.DirtRoads && { DirtRoads: SENSITIVE_STRING }),
  ...(obj.Ferries && { Ferries: SENSITIVE_STRING }),
  ...(obj.SeasonalClosure && { SeasonalClosure: SENSITIVE_STRING }),
  ...(obj.TollRoads && { TollRoads: SENSITIVE_STRING }),
  ...(obj.TollTransponders && { TollTransponders: SENSITIVE_STRING }),
  ...(obj.TruckRoadTypes && { TruckRoadTypes: SENSITIVE_STRING }),
  ...(obj.Tunnels && { Tunnels: SENSITIVE_STRING }),
  ...(obj.UTurns && { UTurns: SENSITIVE_STRING }),
  ...(obj.ZoneCategories && {
    ZoneCategories: obj.ZoneCategories.map((item) => RouteAvoidanceZoneCategoryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RouteMatchingOptionsFilterSensitiveLog = (obj: RouteMatchingOptions): any => ({
  ...obj,
  ...(obj.NameHint && { NameHint: SENSITIVE_STRING }),
  ...(obj.OnRoadThreshold && { OnRoadThreshold: SENSITIVE_STRING }),
  ...(obj.Radius && { Radius: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteSideOfStreetOptionsFilterSensitiveLog = (obj: RouteSideOfStreetOptions): any => ({
  ...obj,
  ...(obj.Position && { Position: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteDestinationOptionsFilterSensitiveLog = (obj: RouteDestinationOptions): any => ({
  ...obj,
  ...(obj.AvoidActionsForDistance && { AvoidActionsForDistance: SENSITIVE_STRING }),
  ...(obj.AvoidUTurns && { AvoidUTurns: SENSITIVE_STRING }),
  ...(obj.Heading && { Heading: SENSITIVE_STRING }),
  ...(obj.Matching && { Matching: RouteMatchingOptionsFilterSensitiveLog(obj.Matching) }),
  ...(obj.SideOfStreet && { SideOfStreet: RouteSideOfStreetOptionsFilterSensitiveLog(obj.SideOfStreet) }),
  ...(obj.StopDuration && { StopDuration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteDriverScheduleIntervalFilterSensitiveLog = (obj: RouteDriverScheduleInterval): any => ({
  ...obj,
  ...(obj.DriveDuration && { DriveDuration: SENSITIVE_STRING }),
  ...(obj.RestDuration && { RestDuration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteDriverOptionsFilterSensitiveLog = (obj: RouteDriverOptions): any => ({
  ...obj,
  ...(obj.Schedule && { Schedule: obj.Schedule.map((item) => RouteDriverScheduleIntervalFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RouteExclusionOptionsFilterSensitiveLog = (obj: RouteExclusionOptions): any => ({
  ...obj,
  ...(obj.Countries && { Countries: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteOriginOptionsFilterSensitiveLog = (obj: RouteOriginOptions): any => ({
  ...obj,
  ...(obj.AvoidActionsForDistance && { AvoidActionsForDistance: SENSITIVE_STRING }),
  ...(obj.AvoidUTurns && { AvoidUTurns: SENSITIVE_STRING }),
  ...(obj.Heading && { Heading: SENSITIVE_STRING }),
  ...(obj.Matching && { Matching: RouteMatchingOptionsFilterSensitiveLog(obj.Matching) }),
  ...(obj.SideOfStreet && { SideOfStreet: RouteSideOfStreetOptionsFilterSensitiveLog(obj.SideOfStreet) }),
});

/**
 * @internal
 */
export const RouteEmissionTypeFilterSensitiveLog = (obj: RouteEmissionType): any => ({
  ...obj,
  ...(obj.Co2EmissionClass && { Co2EmissionClass: SENSITIVE_STRING }),
  ...(obj.Type && { Type: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteTollOptionsFilterSensitiveLog = (obj: RouteTollOptions): any => ({
  ...obj,
  ...(obj.AllTransponders && { AllTransponders: SENSITIVE_STRING }),
  ...(obj.AllVignettes && { AllVignettes: SENSITIVE_STRING }),
  ...(obj.EmissionType && { EmissionType: RouteEmissionTypeFilterSensitiveLog(obj.EmissionType) }),
  ...(obj.VehicleCategory && { VehicleCategory: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteTrafficOptionsFilterSensitiveLog = (obj: RouteTrafficOptions): any => ({
  ...obj,
  ...(obj.FlowEventThresholdOverride && { FlowEventThresholdOverride: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteVehicleLicensePlateFilterSensitiveLog = (obj: RouteVehicleLicensePlate): any => ({
  ...obj,
  ...(obj.LastCharacter && { LastCharacter: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteCarOptionsFilterSensitiveLog = (obj: RouteCarOptions): any => ({
  ...obj,
  ...(obj.EngineType && { EngineType: SENSITIVE_STRING }),
  ...(obj.LicensePlate && { LicensePlate: RouteVehicleLicensePlateFilterSensitiveLog(obj.LicensePlate) }),
  ...(obj.MaxSpeed && { MaxSpeed: SENSITIVE_STRING }),
  ...(obj.Occupancy && { Occupancy: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoutePedestrianOptionsFilterSensitiveLog = (obj: RoutePedestrianOptions): any => ({
  ...obj,
  ...(obj.Speed && { Speed: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteScooterOptionsFilterSensitiveLog = (obj: RouteScooterOptions): any => ({
  ...obj,
  ...(obj.EngineType && { EngineType: SENSITIVE_STRING }),
  ...(obj.LicensePlate && { LicensePlate: RouteVehicleLicensePlateFilterSensitiveLog(obj.LicensePlate) }),
  ...(obj.MaxSpeed && { MaxSpeed: SENSITIVE_STRING }),
  ...(obj.Occupancy && { Occupancy: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteTrailerOptionsFilterSensitiveLog = (obj: RouteTrailerOptions): any => ({
  ...obj,
  ...(obj.AxleCount && { AxleCount: SENSITIVE_STRING }),
  ...(obj.TrailerCount && { TrailerCount: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteTruckOptionsFilterSensitiveLog = (obj: RouteTruckOptions): any => ({
  ...obj,
  ...(obj.AxleCount && { AxleCount: SENSITIVE_STRING }),
  ...(obj.EngineType && { EngineType: SENSITIVE_STRING }),
  ...(obj.GrossWeight && { GrossWeight: SENSITIVE_STRING }),
  ...(obj.HazardousCargos && { HazardousCargos: SENSITIVE_STRING }),
  ...(obj.Height && { Height: SENSITIVE_STRING }),
  ...(obj.HeightAboveFirstAxle && { HeightAboveFirstAxle: SENSITIVE_STRING }),
  ...(obj.KpraLength && { KpraLength: SENSITIVE_STRING }),
  ...(obj.Length && { Length: SENSITIVE_STRING }),
  ...(obj.LicensePlate && { LicensePlate: RouteVehicleLicensePlateFilterSensitiveLog(obj.LicensePlate) }),
  ...(obj.MaxSpeed && { MaxSpeed: SENSITIVE_STRING }),
  ...(obj.Occupancy && { Occupancy: SENSITIVE_STRING }),
  ...(obj.PayloadCapacity && { PayloadCapacity: SENSITIVE_STRING }),
  ...(obj.TireCount && { TireCount: SENSITIVE_STRING }),
  ...(obj.Trailer && { Trailer: RouteTrailerOptionsFilterSensitiveLog(obj.Trailer) }),
  ...(obj.TruckType && { TruckType: SENSITIVE_STRING }),
  ...(obj.TunnelRestrictionCode && { TunnelRestrictionCode: SENSITIVE_STRING }),
  ...(obj.WeightPerAxle && { WeightPerAxle: SENSITIVE_STRING }),
  ...(obj.WeightPerAxleGroup && { WeightPerAxleGroup: WeightPerAxleGroupFilterSensitiveLog(obj.WeightPerAxleGroup) }),
  ...(obj.Width && { Width: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteTravelModeOptionsFilterSensitiveLog = (obj: RouteTravelModeOptions): any => ({
  ...obj,
  ...(obj.Car && { Car: RouteCarOptionsFilterSensitiveLog(obj.Car) }),
  ...(obj.Pedestrian && { Pedestrian: RoutePedestrianOptionsFilterSensitiveLog(obj.Pedestrian) }),
  ...(obj.Scooter && { Scooter: RouteScooterOptionsFilterSensitiveLog(obj.Scooter) }),
  ...(obj.Truck && { Truck: RouteTruckOptionsFilterSensitiveLog(obj.Truck) }),
});

/**
 * @internal
 */
export const RouteWaypointFilterSensitiveLog = (obj: RouteWaypoint): any => ({
  ...obj,
  ...(obj.AvoidActionsForDistance && { AvoidActionsForDistance: SENSITIVE_STRING }),
  ...(obj.AvoidUTurns && { AvoidUTurns: SENSITIVE_STRING }),
  ...(obj.Heading && { Heading: SENSITIVE_STRING }),
  ...(obj.Matching && { Matching: RouteMatchingOptionsFilterSensitiveLog(obj.Matching) }),
  ...(obj.PassThrough && { PassThrough: SENSITIVE_STRING }),
  ...(obj.Position && { Position: SENSITIVE_STRING }),
  ...(obj.SideOfStreet && { SideOfStreet: RouteSideOfStreetOptionsFilterSensitiveLog(obj.SideOfStreet) }),
  ...(obj.StopDuration && { StopDuration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CalculateRoutesRequestFilterSensitiveLog = (obj: CalculateRoutesRequest): any => ({
  ...obj,
  ...(obj.Allow && { Allow: RouteAllowOptionsFilterSensitiveLog(obj.Allow) }),
  ...(obj.ArrivalTime && { ArrivalTime: SENSITIVE_STRING }),
  ...(obj.Avoid && { Avoid: RouteAvoidanceOptionsFilterSensitiveLog(obj.Avoid) }),
  ...(obj.DepartNow && { DepartNow: SENSITIVE_STRING }),
  ...(obj.DepartureTime && { DepartureTime: SENSITIVE_STRING }),
  ...(obj.Destination && { Destination: SENSITIVE_STRING }),
  ...(obj.DestinationOptions && {
    DestinationOptions: RouteDestinationOptionsFilterSensitiveLog(obj.DestinationOptions),
  }),
  ...(obj.Driver && { Driver: RouteDriverOptionsFilterSensitiveLog(obj.Driver) }),
  ...(obj.Exclude && { Exclude: RouteExclusionOptionsFilterSensitiveLog(obj.Exclude) }),
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.LegAdditionalFeatures && { LegAdditionalFeatures: SENSITIVE_STRING }),
  ...(obj.Origin && { Origin: SENSITIVE_STRING }),
  ...(obj.OriginOptions && { OriginOptions: RouteOriginOptionsFilterSensitiveLog(obj.OriginOptions) }),
  ...(obj.Tolls && { Tolls: RouteTollOptionsFilterSensitiveLog(obj.Tolls) }),
  ...(obj.Traffic && { Traffic: RouteTrafficOptionsFilterSensitiveLog(obj.Traffic) }),
  ...(obj.TravelModeOptions && { TravelModeOptions: RouteTravelModeOptionsFilterSensitiveLog(obj.TravelModeOptions) }),
  ...(obj.Waypoints && { Waypoints: obj.Waypoints.map((item) => RouteWaypointFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RouteFerryAfterTravelStepFilterSensitiveLog = (obj: RouteFerryAfterTravelStep): any => ({
  ...obj,
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
  ...(obj.Instruction && { Instruction: SENSITIVE_STRING }),
  ...(obj.Type && { Type: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteFerryPlaceFilterSensitiveLog = (obj: RouteFerryPlace): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.OriginalPosition && { OriginalPosition: SENSITIVE_STRING }),
  ...(obj.Position && { Position: SENSITIVE_STRING }),
  ...(obj.WaypointIndex && { WaypointIndex: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteFerryArrivalFilterSensitiveLog = (obj: RouteFerryArrival): any => ({
  ...obj,
  ...(obj.Place && { Place: RouteFerryPlaceFilterSensitiveLog(obj.Place) }),
  ...(obj.Time && { Time: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteFerryBeforeTravelStepFilterSensitiveLog = (obj: RouteFerryBeforeTravelStep): any => ({
  ...obj,
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
  ...(obj.Instruction && { Instruction: SENSITIVE_STRING }),
  ...(obj.Type && { Type: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteFerryDepartureFilterSensitiveLog = (obj: RouteFerryDeparture): any => ({
  ...obj,
  ...(obj.Place && { Place: RouteFerryPlaceFilterSensitiveLog(obj.Place) }),
  ...(obj.Time && { Time: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoutePassThroughPlaceFilterSensitiveLog = (obj: RoutePassThroughPlace): any => ({
  ...obj,
  ...(obj.OriginalPosition && { OriginalPosition: SENSITIVE_STRING }),
  ...(obj.Position && { Position: SENSITIVE_STRING }),
  ...(obj.WaypointIndex && { WaypointIndex: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoutePassThroughWaypointFilterSensitiveLog = (obj: RoutePassThroughWaypoint): any => ({
  ...obj,
  ...(obj.Place && { Place: RoutePassThroughPlaceFilterSensitiveLog(obj.Place) }),
});

/**
 * @internal
 */
export const LocalizedStringFilterSensitiveLog = (obj: LocalizedString): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteFerrySpanFilterSensitiveLog = (obj: RouteFerrySpan): any => ({
  ...obj,
  ...(obj.Country && { Country: SENSITIVE_STRING }),
  ...(obj.Distance && { Distance: SENSITIVE_STRING }),
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
  ...(obj.Names && { Names: obj.Names.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.Region && { Region: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteFerryOverviewSummaryFilterSensitiveLog = (obj: RouteFerryOverviewSummary): any => ({
  ...obj,
  ...(obj.Distance && { Distance: SENSITIVE_STRING }),
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteFerryTravelOnlySummaryFilterSensitiveLog = (obj: RouteFerryTravelOnlySummary): any => ({
  ...obj,
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteFerrySummaryFilterSensitiveLog = (obj: RouteFerrySummary): any => ({
  ...obj,
  ...(obj.Overview && { Overview: RouteFerryOverviewSummaryFilterSensitiveLog(obj.Overview) }),
  ...(obj.TravelOnly && { TravelOnly: RouteFerryTravelOnlySummaryFilterSensitiveLog(obj.TravelOnly) }),
});

/**
 * @internal
 */
export const RouteFerryTravelStepFilterSensitiveLog = (obj: RouteFerryTravelStep): any => ({
  ...obj,
  ...(obj.Distance && { Distance: SENSITIVE_STRING }),
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
  ...(obj.Instruction && { Instruction: SENSITIVE_STRING }),
  ...(obj.Type && { Type: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteFerryLegDetailsFilterSensitiveLog = (obj: RouteFerryLegDetails): any => ({
  ...obj,
  ...(obj.AfterTravelSteps && {
    AfterTravelSteps: obj.AfterTravelSteps.map((item) => RouteFerryAfterTravelStepFilterSensitiveLog(item)),
  }),
  ...(obj.Arrival && { Arrival: RouteFerryArrivalFilterSensitiveLog(obj.Arrival) }),
  ...(obj.BeforeTravelSteps && {
    BeforeTravelSteps: obj.BeforeTravelSteps.map((item) => RouteFerryBeforeTravelStepFilterSensitiveLog(item)),
  }),
  ...(obj.Departure && { Departure: RouteFerryDepartureFilterSensitiveLog(obj.Departure) }),
  ...(obj.PassThroughWaypoints && {
    PassThroughWaypoints: obj.PassThroughWaypoints.map((item) => RoutePassThroughWaypointFilterSensitiveLog(item)),
  }),
  ...(obj.RouteName && { RouteName: SENSITIVE_STRING }),
  ...(obj.Spans && { Spans: obj.Spans.map((item) => RouteFerrySpanFilterSensitiveLog(item)) }),
  ...(obj.Summary && { Summary: RouteFerrySummaryFilterSensitiveLog(obj.Summary) }),
  ...(obj.TravelSteps && { TravelSteps: obj.TravelSteps.map((item) => RouteFerryTravelStepFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RouteLegGeometryFilterSensitiveLog = (obj: RouteLegGeometry): any => ({
  ...obj,
  ...(obj.LineString && { LineString: SENSITIVE_STRING }),
  ...(obj.Polyline && { Polyline: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoutePedestrianPlaceFilterSensitiveLog = (obj: RoutePedestrianPlace): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.OriginalPosition && { OriginalPosition: SENSITIVE_STRING }),
  ...(obj.Position && { Position: SENSITIVE_STRING }),
  ...(obj.SideOfStreet && { SideOfStreet: SENSITIVE_STRING }),
  ...(obj.WaypointIndex && { WaypointIndex: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoutePedestrianArrivalFilterSensitiveLog = (obj: RoutePedestrianArrival): any => ({
  ...obj,
  ...(obj.Place && { Place: RoutePedestrianPlaceFilterSensitiveLog(obj.Place) }),
  ...(obj.Time && { Time: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoutePedestrianDepartureFilterSensitiveLog = (obj: RoutePedestrianDeparture): any => ({
  ...obj,
  ...(obj.Place && { Place: RoutePedestrianPlaceFilterSensitiveLog(obj.Place) }),
  ...(obj.Time && { Time: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteSpanDynamicSpeedDetailsFilterSensitiveLog = (obj: RouteSpanDynamicSpeedDetails): any => ({
  ...obj,
  ...(obj.BestCaseSpeed && { BestCaseSpeed: SENSITIVE_STRING }),
  ...(obj.TurnDuration && { TurnDuration: SENSITIVE_STRING }),
  ...(obj.TypicalSpeed && { TypicalSpeed: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteNumberFilterSensitiveLog = (obj: RouteNumber): any => ({
  ...obj,
  ...(obj.Direction && { Direction: SENSITIVE_STRING }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteSpanSpeedLimitDetailsFilterSensitiveLog = (obj: RouteSpanSpeedLimitDetails): any => ({
  ...obj,
  ...(obj.MaxSpeed && { MaxSpeed: SENSITIVE_STRING }),
  ...(obj.Unlimited && { Unlimited: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoutePedestrianSpanFilterSensitiveLog = (obj: RoutePedestrianSpan): any => ({
  ...obj,
  ...(obj.BestCaseDuration && { BestCaseDuration: SENSITIVE_STRING }),
  ...(obj.Country && { Country: SENSITIVE_STRING }),
  ...(obj.Distance && { Distance: SENSITIVE_STRING }),
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
  ...(obj.DynamicSpeed && { DynamicSpeed: RouteSpanDynamicSpeedDetailsFilterSensitiveLog(obj.DynamicSpeed) }),
  ...(obj.FunctionalClassification && { FunctionalClassification: SENSITIVE_STRING }),
  ...(obj.Names && { Names: obj.Names.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.PedestrianAccess && { PedestrianAccess: SENSITIVE_STRING }),
  ...(obj.Region && { Region: SENSITIVE_STRING }),
  ...(obj.RoadAttributes && { RoadAttributes: SENSITIVE_STRING }),
  ...(obj.RouteNumbers && { RouteNumbers: obj.RouteNumbers.map((item) => RouteNumberFilterSensitiveLog(item)) }),
  ...(obj.SpeedLimit && { SpeedLimit: RouteSpanSpeedLimitDetailsFilterSensitiveLog(obj.SpeedLimit) }),
  ...(obj.TypicalDuration && { TypicalDuration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoutePedestrianOverviewSummaryFilterSensitiveLog = (obj: RoutePedestrianOverviewSummary): any => ({
  ...obj,
  ...(obj.Distance && { Distance: SENSITIVE_STRING }),
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoutePedestrianTravelOnlySummaryFilterSensitiveLog = (obj: RoutePedestrianTravelOnlySummary): any => ({
  ...obj,
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoutePedestrianSummaryFilterSensitiveLog = (obj: RoutePedestrianSummary): any => ({
  ...obj,
  ...(obj.Overview && { Overview: RoutePedestrianOverviewSummaryFilterSensitiveLog(obj.Overview) }),
  ...(obj.TravelOnly && { TravelOnly: RoutePedestrianTravelOnlySummaryFilterSensitiveLog(obj.TravelOnly) }),
});

/**
 * @internal
 */
export const RouteContinueStepDetailsFilterSensitiveLog = (obj: RouteContinueStepDetails): any => ({
  ...obj,
  ...(obj.Intersection && { Intersection: obj.Intersection.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RouteRoadFilterSensitiveLog = (obj: RouteRoad): any => ({
  ...obj,
  ...(obj.RoadName && { RoadName: obj.RoadName.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.RouteNumber && { RouteNumber: obj.RouteNumber.map((item) => RouteNumberFilterSensitiveLog(item)) }),
  ...(obj.Towards && { Towards: obj.Towards.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.Type && { Type: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteKeepStepDetailsFilterSensitiveLog = (obj: RouteKeepStepDetails): any => ({
  ...obj,
  ...(obj.Intersection && { Intersection: obj.Intersection.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.SteeringDirection && { SteeringDirection: SENSITIVE_STRING }),
  ...(obj.TurnIntensity && { TurnIntensity: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteRoundaboutEnterStepDetailsFilterSensitiveLog = (obj: RouteRoundaboutEnterStepDetails): any => ({
  ...obj,
  ...(obj.Intersection && { Intersection: obj.Intersection.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.SteeringDirection && { SteeringDirection: SENSITIVE_STRING }),
  ...(obj.TurnIntensity && { TurnIntensity: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteRoundaboutExitStepDetailsFilterSensitiveLog = (obj: RouteRoundaboutExitStepDetails): any => ({
  ...obj,
  ...(obj.Intersection && { Intersection: obj.Intersection.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.RelativeExit && { RelativeExit: SENSITIVE_STRING }),
  ...(obj.SteeringDirection && { SteeringDirection: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteRoundaboutPassStepDetailsFilterSensitiveLog = (obj: RouteRoundaboutPassStepDetails): any => ({
  ...obj,
  ...(obj.Intersection && { Intersection: obj.Intersection.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.SteeringDirection && { SteeringDirection: SENSITIVE_STRING }),
  ...(obj.TurnIntensity && { TurnIntensity: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteSignpostLabelFilterSensitiveLog = (obj: RouteSignpostLabel): any => ({
  ...obj,
  ...(obj.RouteNumber && { RouteNumber: RouteNumberFilterSensitiveLog(obj.RouteNumber) }),
  ...(obj.Text && { Text: LocalizedStringFilterSensitiveLog(obj.Text) }),
});

/**
 * @internal
 */
export const RouteSignpostFilterSensitiveLog = (obj: RouteSignpost): any => ({
  ...obj,
  ...(obj.Labels && { Labels: obj.Labels.map((item) => RouteSignpostLabelFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RouteTurnStepDetailsFilterSensitiveLog = (obj: RouteTurnStepDetails): any => ({
  ...obj,
  ...(obj.Intersection && { Intersection: obj.Intersection.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.SteeringDirection && { SteeringDirection: SENSITIVE_STRING }),
  ...(obj.TurnIntensity && { TurnIntensity: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoutePedestrianTravelStepFilterSensitiveLog = (obj: RoutePedestrianTravelStep): any => ({
  ...obj,
  ...(obj.ContinueStepDetails && {
    ContinueStepDetails: RouteContinueStepDetailsFilterSensitiveLog(obj.ContinueStepDetails),
  }),
  ...(obj.CurrentRoad && { CurrentRoad: RouteRoadFilterSensitiveLog(obj.CurrentRoad) }),
  ...(obj.Distance && { Distance: SENSITIVE_STRING }),
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
  ...(obj.ExitNumber && { ExitNumber: obj.ExitNumber.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.Instruction && { Instruction: SENSITIVE_STRING }),
  ...(obj.KeepStepDetails && { KeepStepDetails: RouteKeepStepDetailsFilterSensitiveLog(obj.KeepStepDetails) }),
  ...(obj.NextRoad && { NextRoad: RouteRoadFilterSensitiveLog(obj.NextRoad) }),
  ...(obj.RoundaboutEnterStepDetails && {
    RoundaboutEnterStepDetails: RouteRoundaboutEnterStepDetailsFilterSensitiveLog(obj.RoundaboutEnterStepDetails),
  }),
  ...(obj.RoundaboutExitStepDetails && {
    RoundaboutExitStepDetails: RouteRoundaboutExitStepDetailsFilterSensitiveLog(obj.RoundaboutExitStepDetails),
  }),
  ...(obj.RoundaboutPassStepDetails && {
    RoundaboutPassStepDetails: RouteRoundaboutPassStepDetailsFilterSensitiveLog(obj.RoundaboutPassStepDetails),
  }),
  ...(obj.Signpost && { Signpost: RouteSignpostFilterSensitiveLog(obj.Signpost) }),
  ...(obj.TurnStepDetails && { TurnStepDetails: RouteTurnStepDetailsFilterSensitiveLog(obj.TurnStepDetails) }),
  ...(obj.Type && { Type: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoutePedestrianLegDetailsFilterSensitiveLog = (obj: RoutePedestrianLegDetails): any => ({
  ...obj,
  ...(obj.Arrival && { Arrival: RoutePedestrianArrivalFilterSensitiveLog(obj.Arrival) }),
  ...(obj.Departure && { Departure: RoutePedestrianDepartureFilterSensitiveLog(obj.Departure) }),
  ...(obj.PassThroughWaypoints && {
    PassThroughWaypoints: obj.PassThroughWaypoints.map((item) => RoutePassThroughWaypointFilterSensitiveLog(item)),
  }),
  ...(obj.Spans && { Spans: obj.Spans.map((item) => RoutePedestrianSpanFilterSensitiveLog(item)) }),
  ...(obj.Summary && { Summary: RoutePedestrianSummaryFilterSensitiveLog(obj.Summary) }),
  ...(obj.TravelSteps && {
    TravelSteps: obj.TravelSteps.map((item) => RoutePedestrianTravelStepFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RouteVehiclePlaceFilterSensitiveLog = (obj: RouteVehiclePlace): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.OriginalPosition && { OriginalPosition: SENSITIVE_STRING }),
  ...(obj.Position && { Position: SENSITIVE_STRING }),
  ...(obj.SideOfStreet && { SideOfStreet: SENSITIVE_STRING }),
  ...(obj.WaypointIndex && { WaypointIndex: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteVehicleArrivalFilterSensitiveLog = (obj: RouteVehicleArrival): any => ({
  ...obj,
  ...(obj.Place && { Place: RouteVehiclePlaceFilterSensitiveLog(obj.Place) }),
  ...(obj.Time && { Time: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteVehicleDepartureFilterSensitiveLog = (obj: RouteVehicleDeparture): any => ({
  ...obj,
  ...(obj.Place && { Place: RouteVehiclePlaceFilterSensitiveLog(obj.Place) }),
  ...(obj.Time && { Time: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteVehicleIncidentFilterSensitiveLog = (obj: RouteVehicleIncident): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.EndTime && { EndTime: SENSITIVE_STRING }),
  ...(obj.Severity && { Severity: SENSITIVE_STRING }),
  ...(obj.StartTime && { StartTime: SENSITIVE_STRING }),
  ...(obj.Type && { Type: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteWeightConstraintFilterSensitiveLog = (obj: RouteWeightConstraint): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteViolatedConstraintsFilterSensitiveLog = (obj: RouteViolatedConstraints): any => ({
  ...obj,
  ...(obj.AllHazardsRestricted && { AllHazardsRestricted: SENSITIVE_STRING }),
  ...(obj.HazardousCargos && { HazardousCargos: SENSITIVE_STRING }),
  ...(obj.MaxHeight && { MaxHeight: SENSITIVE_STRING }),
  ...(obj.MaxKpraLength && { MaxKpraLength: SENSITIVE_STRING }),
  ...(obj.MaxLength && { MaxLength: SENSITIVE_STRING }),
  ...(obj.MaxPayloadCapacity && { MaxPayloadCapacity: SENSITIVE_STRING }),
  ...(obj.MaxWeight && { MaxWeight: RouteWeightConstraintFilterSensitiveLog(obj.MaxWeight) }),
  ...(obj.MaxWeightPerAxle && { MaxWeightPerAxle: SENSITIVE_STRING }),
  ...(obj.MaxWeightPerAxleGroup && {
    MaxWeightPerAxleGroup: WeightPerAxleGroupFilterSensitiveLog(obj.MaxWeightPerAxleGroup),
  }),
  ...(obj.MaxWidth && { MaxWidth: SENSITIVE_STRING }),
  ...(obj.TimeDependent && { TimeDependent: SENSITIVE_STRING }),
  ...(obj.TravelMode && { TravelMode: SENSITIVE_STRING }),
  ...(obj.TruckType && { TruckType: SENSITIVE_STRING }),
  ...(obj.TunnelRestrictionCode && { TunnelRestrictionCode: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteVehicleNoticeDetailFilterSensitiveLog = (obj: RouteVehicleNoticeDetail): any => ({
  ...obj,
  ...(obj.Title && { Title: SENSITIVE_STRING }),
  ...(obj.ViolatedConstraints && {
    ViolatedConstraints: RouteViolatedConstraintsFilterSensitiveLog(obj.ViolatedConstraints),
  }),
});

/**
 * @internal
 */
export const RouteVehicleNoticeFilterSensitiveLog = (obj: RouteVehicleNotice): any => ({
  ...obj,
  ...(obj.Details && { Details: obj.Details.map((item) => RouteVehicleNoticeDetailFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RouteVehicleSpanFilterSensitiveLog = (obj: RouteVehicleSpan): any => ({
  ...obj,
  ...(obj.BestCaseDuration && { BestCaseDuration: SENSITIVE_STRING }),
  ...(obj.CarAccess && { CarAccess: SENSITIVE_STRING }),
  ...(obj.Country && { Country: SENSITIVE_STRING }),
  ...(obj.Distance && { Distance: SENSITIVE_STRING }),
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
  ...(obj.DynamicSpeed && { DynamicSpeed: RouteSpanDynamicSpeedDetailsFilterSensitiveLog(obj.DynamicSpeed) }),
  ...(obj.FunctionalClassification && { FunctionalClassification: SENSITIVE_STRING }),
  ...(obj.Gate && { Gate: SENSITIVE_STRING }),
  ...(obj.Names && { Names: obj.Names.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.RailwayCrossing && { RailwayCrossing: SENSITIVE_STRING }),
  ...(obj.Region && { Region: SENSITIVE_STRING }),
  ...(obj.RoadAttributes && { RoadAttributes: SENSITIVE_STRING }),
  ...(obj.RouteNumbers && { RouteNumbers: obj.RouteNumbers.map((item) => RouteNumberFilterSensitiveLog(item)) }),
  ...(obj.ScooterAccess && { ScooterAccess: SENSITIVE_STRING }),
  ...(obj.SpeedLimit && { SpeedLimit: RouteSpanSpeedLimitDetailsFilterSensitiveLog(obj.SpeedLimit) }),
  ...(obj.TruckAccess && { TruckAccess: SENSITIVE_STRING }),
  ...(obj.TypicalDuration && { TypicalDuration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteVehicleOverviewSummaryFilterSensitiveLog = (obj: RouteVehicleOverviewSummary): any => ({
  ...obj,
  ...(obj.BestCaseDuration && { BestCaseDuration: SENSITIVE_STRING }),
  ...(obj.Distance && { Distance: SENSITIVE_STRING }),
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
  ...(obj.TypicalDuration && { TypicalDuration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteVehicleTravelOnlySummaryFilterSensitiveLog = (obj: RouteVehicleTravelOnlySummary): any => ({
  ...obj,
  ...(obj.BestCaseDuration && { BestCaseDuration: SENSITIVE_STRING }),
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
  ...(obj.TypicalDuration && { TypicalDuration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteVehicleSummaryFilterSensitiveLog = (obj: RouteVehicleSummary): any => ({
  ...obj,
  ...(obj.Overview && { Overview: RouteVehicleOverviewSummaryFilterSensitiveLog(obj.Overview) }),
  ...(obj.TravelOnly && { TravelOnly: RouteVehicleTravelOnlySummaryFilterSensitiveLog(obj.TravelOnly) }),
});

/**
 * @internal
 */
export const RouteTollPaymentSiteFilterSensitiveLog = (obj: RouteTollPaymentSite): any => ({
  ...obj,
  ...(obj.Position && { Position: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteTollPriceValueRangeFilterSensitiveLog = (obj: RouteTollPriceValueRange): any => ({
  ...obj,
  ...(obj.Min && { Min: SENSITIVE_STRING }),
  ...(obj.Max && { Max: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteTollPriceFilterSensitiveLog = (obj: RouteTollPrice): any => ({
  ...obj,
  ...(obj.Estimate && { Estimate: SENSITIVE_STRING }),
  ...(obj.PerDuration && { PerDuration: SENSITIVE_STRING }),
  ...(obj.Range && { Range: SENSITIVE_STRING }),
  ...(obj.RangeValue && { RangeValue: RouteTollPriceValueRangeFilterSensitiveLog(obj.RangeValue) }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteTollPassValidityPeriodFilterSensitiveLog = (obj: RouteTollPassValidityPeriod): any => ({
  ...obj,
  ...(obj.Period && { Period: SENSITIVE_STRING }),
  ...(obj.PeriodCount && { PeriodCount: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteTollPassFilterSensitiveLog = (obj: RouteTollPass): any => ({
  ...obj,
  ...(obj.IncludesReturnTrip && { IncludesReturnTrip: SENSITIVE_STRING }),
  ...(obj.SeniorPass && { SeniorPass: SENSITIVE_STRING }),
  ...(obj.TransferCount && { TransferCount: SENSITIVE_STRING }),
  ...(obj.TripCount && { TripCount: SENSITIVE_STRING }),
  ...(obj.ValidityPeriod && { ValidityPeriod: RouteTollPassValidityPeriodFilterSensitiveLog(obj.ValidityPeriod) }),
});

/**
 * @internal
 */
export const RouteTransponderFilterSensitiveLog = (obj: RouteTransponder): any => ({
  ...obj,
  ...(obj.SystemName && { SystemName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteTollRateFilterSensitiveLog = (obj: RouteTollRate): any => ({
  ...obj,
  ...(obj.ApplicableTimes && { ApplicableTimes: SENSITIVE_STRING }),
  ...(obj.ConvertedPrice && { ConvertedPrice: RouteTollPriceFilterSensitiveLog(obj.ConvertedPrice) }),
  ...(obj.Id && { Id: SENSITIVE_STRING }),
  ...(obj.LocalPrice && { LocalPrice: RouteTollPriceFilterSensitiveLog(obj.LocalPrice) }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Pass && { Pass: RouteTollPassFilterSensitiveLog(obj.Pass) }),
  ...(obj.PaymentMethods && { PaymentMethods: SENSITIVE_STRING }),
  ...(obj.Transponders && { Transponders: obj.Transponders.map((item) => RouteTransponderFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RouteTollFilterSensitiveLog = (obj: RouteToll): any => ({
  ...obj,
  ...(obj.Country && { Country: SENSITIVE_STRING }),
  ...(obj.PaymentSites && {
    PaymentSites: obj.PaymentSites.map((item) => RouteTollPaymentSiteFilterSensitiveLog(item)),
  }),
  ...(obj.Rates && { Rates: obj.Rates.map((item) => RouteTollRateFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RouteTollSystemFilterSensitiveLog = (obj: RouteTollSystem): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteContinueHighwayStepDetailsFilterSensitiveLog = (obj: RouteContinueHighwayStepDetails): any => ({
  ...obj,
  ...(obj.Intersection && { Intersection: obj.Intersection.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.SteeringDirection && { SteeringDirection: SENSITIVE_STRING }),
  ...(obj.TurnIntensity && { TurnIntensity: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteEnterHighwayStepDetailsFilterSensitiveLog = (obj: RouteEnterHighwayStepDetails): any => ({
  ...obj,
  ...(obj.Intersection && { Intersection: obj.Intersection.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.SteeringDirection && { SteeringDirection: SENSITIVE_STRING }),
  ...(obj.TurnIntensity && { TurnIntensity: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteExitStepDetailsFilterSensitiveLog = (obj: RouteExitStepDetails): any => ({
  ...obj,
  ...(obj.Intersection && { Intersection: obj.Intersection.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.RelativeExit && { RelativeExit: SENSITIVE_STRING }),
  ...(obj.SteeringDirection && { SteeringDirection: SENSITIVE_STRING }),
  ...(obj.TurnIntensity && { TurnIntensity: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteRampStepDetailsFilterSensitiveLog = (obj: RouteRampStepDetails): any => ({
  ...obj,
  ...(obj.Intersection && { Intersection: obj.Intersection.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.SteeringDirection && { SteeringDirection: SENSITIVE_STRING }),
  ...(obj.TurnIntensity && { TurnIntensity: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteUTurnStepDetailsFilterSensitiveLog = (obj: RouteUTurnStepDetails): any => ({
  ...obj,
  ...(obj.Intersection && { Intersection: obj.Intersection.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.SteeringDirection && { SteeringDirection: SENSITIVE_STRING }),
  ...(obj.TurnIntensity && { TurnIntensity: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteVehicleTravelStepFilterSensitiveLog = (obj: RouteVehicleTravelStep): any => ({
  ...obj,
  ...(obj.ContinueHighwayStepDetails && {
    ContinueHighwayStepDetails: RouteContinueHighwayStepDetailsFilterSensitiveLog(obj.ContinueHighwayStepDetails),
  }),
  ...(obj.ContinueStepDetails && {
    ContinueStepDetails: RouteContinueStepDetailsFilterSensitiveLog(obj.ContinueStepDetails),
  }),
  ...(obj.CurrentRoad && { CurrentRoad: RouteRoadFilterSensitiveLog(obj.CurrentRoad) }),
  ...(obj.Distance && { Distance: SENSITIVE_STRING }),
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
  ...(obj.EnterHighwayStepDetails && {
    EnterHighwayStepDetails: RouteEnterHighwayStepDetailsFilterSensitiveLog(obj.EnterHighwayStepDetails),
  }),
  ...(obj.ExitNumber && { ExitNumber: obj.ExitNumber.map((item) => LocalizedStringFilterSensitiveLog(item)) }),
  ...(obj.ExitStepDetails && { ExitStepDetails: RouteExitStepDetailsFilterSensitiveLog(obj.ExitStepDetails) }),
  ...(obj.Instruction && { Instruction: SENSITIVE_STRING }),
  ...(obj.KeepStepDetails && { KeepStepDetails: RouteKeepStepDetailsFilterSensitiveLog(obj.KeepStepDetails) }),
  ...(obj.NextRoad && { NextRoad: RouteRoadFilterSensitiveLog(obj.NextRoad) }),
  ...(obj.RampStepDetails && { RampStepDetails: RouteRampStepDetailsFilterSensitiveLog(obj.RampStepDetails) }),
  ...(obj.RoundaboutEnterStepDetails && {
    RoundaboutEnterStepDetails: RouteRoundaboutEnterStepDetailsFilterSensitiveLog(obj.RoundaboutEnterStepDetails),
  }),
  ...(obj.RoundaboutExitStepDetails && {
    RoundaboutExitStepDetails: RouteRoundaboutExitStepDetailsFilterSensitiveLog(obj.RoundaboutExitStepDetails),
  }),
  ...(obj.RoundaboutPassStepDetails && {
    RoundaboutPassStepDetails: RouteRoundaboutPassStepDetailsFilterSensitiveLog(obj.RoundaboutPassStepDetails),
  }),
  ...(obj.Signpost && { Signpost: RouteSignpostFilterSensitiveLog(obj.Signpost) }),
  ...(obj.TurnStepDetails && { TurnStepDetails: RouteTurnStepDetailsFilterSensitiveLog(obj.TurnStepDetails) }),
  ...(obj.Type && { Type: SENSITIVE_STRING }),
  ...(obj.UTurnStepDetails && { UTurnStepDetails: RouteUTurnStepDetailsFilterSensitiveLog(obj.UTurnStepDetails) }),
});

/**
 * @internal
 */
export const RouteZoneFilterSensitiveLog = (obj: RouteZone): any => ({
  ...obj,
  ...(obj.Category && { Category: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteVehicleLegDetailsFilterSensitiveLog = (obj: RouteVehicleLegDetails): any => ({
  ...obj,
  ...(obj.Arrival && { Arrival: RouteVehicleArrivalFilterSensitiveLog(obj.Arrival) }),
  ...(obj.Departure && { Departure: RouteVehicleDepartureFilterSensitiveLog(obj.Departure) }),
  ...(obj.Incidents && { Incidents: obj.Incidents.map((item) => RouteVehicleIncidentFilterSensitiveLog(item)) }),
  ...(obj.PassThroughWaypoints && {
    PassThroughWaypoints: obj.PassThroughWaypoints.map((item) => RoutePassThroughWaypointFilterSensitiveLog(item)),
  }),
  ...(obj.Spans && { Spans: obj.Spans.map((item) => RouteVehicleSpanFilterSensitiveLog(item)) }),
  ...(obj.Summary && { Summary: RouteVehicleSummaryFilterSensitiveLog(obj.Summary) }),
  ...(obj.Tolls && { Tolls: obj.Tolls.map((item) => RouteTollFilterSensitiveLog(item)) }),
  ...(obj.TollSystems && { TollSystems: obj.TollSystems.map((item) => RouteTollSystemFilterSensitiveLog(item)) }),
  ...(obj.TravelSteps && {
    TravelSteps: obj.TravelSteps.map((item) => RouteVehicleTravelStepFilterSensitiveLog(item)),
  }),
  ...(obj.TruckRoadTypes && { TruckRoadTypes: SENSITIVE_STRING }),
  ...(obj.Zones && { Zones: obj.Zones.map((item) => RouteZoneFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RouteLegFilterSensitiveLog = (obj: RouteLeg): any => ({
  ...obj,
  ...(obj.FerryLegDetails && { FerryLegDetails: RouteFerryLegDetailsFilterSensitiveLog(obj.FerryLegDetails) }),
  ...(obj.Geometry && { Geometry: RouteLegGeometryFilterSensitiveLog(obj.Geometry) }),
  ...(obj.PedestrianLegDetails && {
    PedestrianLegDetails: RoutePedestrianLegDetailsFilterSensitiveLog(obj.PedestrianLegDetails),
  }),
  ...(obj.TravelMode && { TravelMode: SENSITIVE_STRING }),
  ...(obj.Type && { Type: SENSITIVE_STRING }),
  ...(obj.VehicleLegDetails && { VehicleLegDetails: RouteVehicleLegDetailsFilterSensitiveLog(obj.VehicleLegDetails) }),
});

/**
 * @internal
 */
export const RouteMajorRoadLabelFilterSensitiveLog = (obj: RouteMajorRoadLabel): any => ({
  ...obj,
  ...(obj.RoadName && { RoadName: LocalizedStringFilterSensitiveLog(obj.RoadName) }),
  ...(obj.RouteNumber && { RouteNumber: RouteNumberFilterSensitiveLog(obj.RouteNumber) }),
});

/**
 * @internal
 */
export const RouteTollPriceSummaryFilterSensitiveLog = (obj: RouteTollPriceSummary): any => ({
  ...obj,
  ...(obj.Estimate && { Estimate: SENSITIVE_STRING }),
  ...(obj.Range && { Range: SENSITIVE_STRING }),
  ...(obj.RangeValue && { RangeValue: RouteTollPriceValueRangeFilterSensitiveLog(obj.RangeValue) }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RouteTollSummaryFilterSensitiveLog = (obj: RouteTollSummary): any => ({
  ...obj,
  ...(obj.Total && { Total: RouteTollPriceSummaryFilterSensitiveLog(obj.Total) }),
});

/**
 * @internal
 */
export const RouteSummaryFilterSensitiveLog = (obj: RouteSummary): any => ({
  ...obj,
  ...(obj.Distance && { Distance: SENSITIVE_STRING }),
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
  ...(obj.Tolls && { Tolls: RouteTollSummaryFilterSensitiveLog(obj.Tolls) }),
});

/**
 * @internal
 */
export const RouteFilterSensitiveLog = (obj: Route): any => ({
  ...obj,
  ...(obj.Legs && { Legs: obj.Legs.map((item) => RouteLegFilterSensitiveLog(item)) }),
  ...(obj.MajorRoadLabels && {
    MajorRoadLabels: obj.MajorRoadLabels.map((item) => RouteMajorRoadLabelFilterSensitiveLog(item)),
  }),
  ...(obj.Summary && { Summary: RouteSummaryFilterSensitiveLog(obj.Summary) }),
});

/**
 * @internal
 */
export const CalculateRoutesResponseFilterSensitiveLog = (obj: CalculateRoutesResponse): any => ({
  ...obj,
  ...(obj.Routes && { Routes: obj.Routes.map((item) => RouteFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const WaypointOptimizationAvoidanceAreaGeometryFilterSensitiveLog = (
  obj: WaypointOptimizationAvoidanceAreaGeometry
): any => ({
  ...obj,
  ...(obj.BoundingBox && { BoundingBox: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationAvoidanceAreaFilterSensitiveLog = (obj: WaypointOptimizationAvoidanceArea): any => ({
  ...obj,
  ...(obj.Geometry && { Geometry: WaypointOptimizationAvoidanceAreaGeometryFilterSensitiveLog(obj.Geometry) }),
});

/**
 * @internal
 */
export const WaypointOptimizationAvoidanceOptionsFilterSensitiveLog = (
  obj: WaypointOptimizationAvoidanceOptions
): any => ({
  ...obj,
  ...(obj.Areas && { Areas: obj.Areas.map((item) => WaypointOptimizationAvoidanceAreaFilterSensitiveLog(item)) }),
  ...(obj.CarShuttleTrains && { CarShuttleTrains: SENSITIVE_STRING }),
  ...(obj.ControlledAccessHighways && { ControlledAccessHighways: SENSITIVE_STRING }),
  ...(obj.DirtRoads && { DirtRoads: SENSITIVE_STRING }),
  ...(obj.Ferries && { Ferries: SENSITIVE_STRING }),
  ...(obj.TollRoads && { TollRoads: SENSITIVE_STRING }),
  ...(obj.Tunnels && { Tunnels: SENSITIVE_STRING }),
  ...(obj.UTurns && { UTurns: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationDrivingDistanceOptionsFilterSensitiveLog = (
  obj: WaypointOptimizationDrivingDistanceOptions
): any => ({
  ...obj,
  ...(obj.DrivingDistance && { DrivingDistance: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationClusteringOptionsFilterSensitiveLog = (
  obj: WaypointOptimizationClusteringOptions
): any => ({
  ...obj,
  ...(obj.Algorithm && { Algorithm: SENSITIVE_STRING }),
  ...(obj.DrivingDistanceOptions && {
    DrivingDistanceOptions: WaypointOptimizationDrivingDistanceOptionsFilterSensitiveLog(obj.DrivingDistanceOptions),
  }),
});

/**
 * @internal
 */
export const WaypointOptimizationAccessHoursEntryFilterSensitiveLog = (
  obj: WaypointOptimizationAccessHoursEntry
): any => ({
  ...obj,
  ...(obj.DayOfWeek && { DayOfWeek: SENSITIVE_STRING }),
  ...(obj.TimeOfDay && { TimeOfDay: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationAccessHoursFilterSensitiveLog = (obj: WaypointOptimizationAccessHours): any => ({
  ...obj,
  ...(obj.From && { From: WaypointOptimizationAccessHoursEntryFilterSensitiveLog(obj.From) }),
  ...(obj.To && { To: WaypointOptimizationAccessHoursEntryFilterSensitiveLog(obj.To) }),
});

/**
 * @internal
 */
export const WaypointOptimizationSideOfStreetOptionsFilterSensitiveLog = (
  obj: WaypointOptimizationSideOfStreetOptions
): any => ({
  ...obj,
  ...(obj.Position && { Position: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationDestinationOptionsFilterSensitiveLog = (
  obj: WaypointOptimizationDestinationOptions
): any => ({
  ...obj,
  ...(obj.AccessHours && { AccessHours: WaypointOptimizationAccessHoursFilterSensitiveLog(obj.AccessHours) }),
  ...(obj.AppointmentTime && { AppointmentTime: SENSITIVE_STRING }),
  ...(obj.Heading && { Heading: SENSITIVE_STRING }),
  ...(obj.ServiceDuration && { ServiceDuration: SENSITIVE_STRING }),
  ...(obj.SideOfStreet && {
    SideOfStreet: WaypointOptimizationSideOfStreetOptionsFilterSensitiveLog(obj.SideOfStreet),
  }),
});

/**
 * @internal
 */
export const WaypointOptimizationRestCycleDurationsFilterSensitiveLog = (
  obj: WaypointOptimizationRestCycleDurations
): any => ({
  ...obj,
  ...(obj.RestDuration && { RestDuration: SENSITIVE_STRING }),
  ...(obj.WorkDuration && { WorkDuration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationRestCyclesFilterSensitiveLog = (obj: WaypointOptimizationRestCycles): any => ({
  ...obj,
  ...(obj.LongCycle && { LongCycle: WaypointOptimizationRestCycleDurationsFilterSensitiveLog(obj.LongCycle) }),
  ...(obj.ShortCycle && { ShortCycle: WaypointOptimizationRestCycleDurationsFilterSensitiveLog(obj.ShortCycle) }),
});

/**
 * @internal
 */
export const WaypointOptimizationRestProfileFilterSensitiveLog = (obj: WaypointOptimizationRestProfile): any => ({
  ...obj,
  ...(obj.Profile && { Profile: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationDriverOptionsFilterSensitiveLog = (obj: WaypointOptimizationDriverOptions): any => ({
  ...obj,
  ...(obj.RestCycles && { RestCycles: WaypointOptimizationRestCyclesFilterSensitiveLog(obj.RestCycles) }),
  ...(obj.RestProfile && { RestProfile: WaypointOptimizationRestProfileFilterSensitiveLog(obj.RestProfile) }),
  ...(obj.TreatServiceTimeAs && { TreatServiceTimeAs: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationExclusionOptionsFilterSensitiveLog = (
  obj: WaypointOptimizationExclusionOptions
): any => ({
  ...obj,
  ...(obj.Countries && { Countries: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationPedestrianOptionsFilterSensitiveLog = (
  obj: WaypointOptimizationPedestrianOptions
): any => ({
  ...obj,
  ...(obj.Speed && { Speed: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationTrailerOptionsFilterSensitiveLog = (obj: WaypointOptimizationTrailerOptions): any => ({
  ...obj,
  ...(obj.TrailerCount && { TrailerCount: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationTruckOptionsFilterSensitiveLog = (obj: WaypointOptimizationTruckOptions): any => ({
  ...obj,
  ...(obj.GrossWeight && { GrossWeight: SENSITIVE_STRING }),
  ...(obj.HazardousCargos && { HazardousCargos: SENSITIVE_STRING }),
  ...(obj.Height && { Height: SENSITIVE_STRING }),
  ...(obj.Length && { Length: SENSITIVE_STRING }),
  ...(obj.Trailer && { Trailer: WaypointOptimizationTrailerOptionsFilterSensitiveLog(obj.Trailer) }),
  ...(obj.TruckType && { TruckType: SENSITIVE_STRING }),
  ...(obj.TunnelRestrictionCode && { TunnelRestrictionCode: SENSITIVE_STRING }),
  ...(obj.WeightPerAxle && { WeightPerAxle: SENSITIVE_STRING }),
  ...(obj.Width && { Width: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationTravelModeOptionsFilterSensitiveLog = (
  obj: WaypointOptimizationTravelModeOptions
): any => ({
  ...obj,
  ...(obj.Pedestrian && { Pedestrian: WaypointOptimizationPedestrianOptionsFilterSensitiveLog(obj.Pedestrian) }),
  ...(obj.Truck && { Truck: WaypointOptimizationTruckOptionsFilterSensitiveLog(obj.Truck) }),
});

/**
 * @internal
 */
export const WaypointOptimizationWaypointFilterSensitiveLog = (obj: WaypointOptimizationWaypoint): any => ({
  ...obj,
  ...(obj.AccessHours && { AccessHours: WaypointOptimizationAccessHoursFilterSensitiveLog(obj.AccessHours) }),
  ...(obj.AppointmentTime && { AppointmentTime: SENSITIVE_STRING }),
  ...(obj.Heading && { Heading: SENSITIVE_STRING }),
  ...(obj.Position && { Position: SENSITIVE_STRING }),
  ...(obj.ServiceDuration && { ServiceDuration: SENSITIVE_STRING }),
  ...(obj.SideOfStreet && {
    SideOfStreet: WaypointOptimizationSideOfStreetOptionsFilterSensitiveLog(obj.SideOfStreet),
  }),
});

/**
 * @internal
 */
export const OptimizeWaypointsRequestFilterSensitiveLog = (obj: OptimizeWaypointsRequest): any => ({
  ...obj,
  ...(obj.Avoid && { Avoid: WaypointOptimizationAvoidanceOptionsFilterSensitiveLog(obj.Avoid) }),
  ...(obj.Clustering && { Clustering: WaypointOptimizationClusteringOptionsFilterSensitiveLog(obj.Clustering) }),
  ...(obj.DepartureTime && { DepartureTime: SENSITIVE_STRING }),
  ...(obj.Destination && { Destination: SENSITIVE_STRING }),
  ...(obj.DestinationOptions && {
    DestinationOptions: WaypointOptimizationDestinationOptionsFilterSensitiveLog(obj.DestinationOptions),
  }),
  ...(obj.Driver && { Driver: WaypointOptimizationDriverOptionsFilterSensitiveLog(obj.Driver) }),
  ...(obj.Exclude && { Exclude: WaypointOptimizationExclusionOptionsFilterSensitiveLog(obj.Exclude) }),
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Origin && { Origin: SENSITIVE_STRING }),
  ...(obj.TravelModeOptions && {
    TravelModeOptions: WaypointOptimizationTravelModeOptionsFilterSensitiveLog(obj.TravelModeOptions),
  }),
  ...(obj.Waypoints && {
    Waypoints: obj.Waypoints.map((item) => WaypointOptimizationWaypointFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const WaypointOptimizationConnectionFilterSensitiveLog = (obj: WaypointOptimizationConnection): any => ({
  ...obj,
  ...(obj.Distance && { Distance: SENSITIVE_STRING }),
  ...(obj.RestDuration && { RestDuration: SENSITIVE_STRING }),
  ...(obj.TravelDuration && { TravelDuration: SENSITIVE_STRING }),
  ...(obj.WaitDuration && { WaitDuration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationFailedConstraintFilterSensitiveLog = (
  obj: WaypointOptimizationFailedConstraint
): any => ({
  ...obj,
  ...(obj.Constraint && { Constraint: SENSITIVE_STRING }),
  ...(obj.Reason && { Reason: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationImpedingWaypointFilterSensitiveLog = (
  obj: WaypointOptimizationImpedingWaypoint
): any => ({
  ...obj,
  ...(obj.FailedConstraints && {
    FailedConstraints: obj.FailedConstraints.map((item) =>
      WaypointOptimizationFailedConstraintFilterSensitiveLog(item)
    ),
  }),
  ...(obj.Position && { Position: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationOptimizedWaypointFilterSensitiveLog = (
  obj: WaypointOptimizationOptimizedWaypoint
): any => ({
  ...obj,
  ...(obj.ArrivalTime && { ArrivalTime: SENSITIVE_STRING }),
  ...(obj.DepartureTime && { DepartureTime: SENSITIVE_STRING }),
  ...(obj.Position && { Position: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const WaypointOptimizationTimeBreakdownFilterSensitiveLog = (obj: WaypointOptimizationTimeBreakdown): any => ({
  ...obj,
  ...(obj.RestDuration && { RestDuration: SENSITIVE_STRING }),
  ...(obj.ServiceDuration && { ServiceDuration: SENSITIVE_STRING }),
  ...(obj.TravelDuration && { TravelDuration: SENSITIVE_STRING }),
  ...(obj.WaitDuration && { WaitDuration: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OptimizeWaypointsResponseFilterSensitiveLog = (obj: OptimizeWaypointsResponse): any => ({
  ...obj,
  ...(obj.Connections && {
    Connections: obj.Connections.map((item) => WaypointOptimizationConnectionFilterSensitiveLog(item)),
  }),
  ...(obj.Distance && { Distance: SENSITIVE_STRING }),
  ...(obj.Duration && { Duration: SENSITIVE_STRING }),
  ...(obj.ImpedingWaypoints && {
    ImpedingWaypoints: obj.ImpedingWaypoints.map((item) =>
      WaypointOptimizationImpedingWaypointFilterSensitiveLog(item)
    ),
  }),
  ...(obj.OptimizedWaypoints && {
    OptimizedWaypoints: obj.OptimizedWaypoints.map((item) =>
      WaypointOptimizationOptimizedWaypointFilterSensitiveLog(item)
    ),
  }),
  ...(obj.TimeBreakdown && { TimeBreakdown: WaypointOptimizationTimeBreakdownFilterSensitiveLog(obj.TimeBreakdown) }),
});

/**
 * @internal
 */
export const RoadSnapTracePointFilterSensitiveLog = (obj: RoadSnapTracePoint): any => ({
  ...obj,
  ...(obj.Heading && { Heading: SENSITIVE_STRING }),
  ...(obj.Position && { Position: SENSITIVE_STRING }),
  ...(obj.Speed && { Speed: SENSITIVE_STRING }),
  ...(obj.Timestamp && { Timestamp: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoadSnapTrailerOptionsFilterSensitiveLog = (obj: RoadSnapTrailerOptions): any => ({
  ...obj,
  ...(obj.TrailerCount && { TrailerCount: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoadSnapTruckOptionsFilterSensitiveLog = (obj: RoadSnapTruckOptions): any => ({
  ...obj,
  ...(obj.GrossWeight && { GrossWeight: SENSITIVE_STRING }),
  ...(obj.HazardousCargos && { HazardousCargos: SENSITIVE_STRING }),
  ...(obj.Height && { Height: SENSITIVE_STRING }),
  ...(obj.Length && { Length: SENSITIVE_STRING }),
  ...(obj.Trailer && { Trailer: RoadSnapTrailerOptionsFilterSensitiveLog(obj.Trailer) }),
  ...(obj.TunnelRestrictionCode && { TunnelRestrictionCode: SENSITIVE_STRING }),
  ...(obj.Width && { Width: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoadSnapTravelModeOptionsFilterSensitiveLog = (obj: RoadSnapTravelModeOptions): any => ({
  ...obj,
  ...(obj.Truck && { Truck: RoadSnapTruckOptionsFilterSensitiveLog(obj.Truck) }),
});

/**
 * @internal
 */
export const SnapToRoadsRequestFilterSensitiveLog = (obj: SnapToRoadsRequest): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.SnapRadius && { SnapRadius: SENSITIVE_STRING }),
  ...(obj.TracePoints && { TracePoints: obj.TracePoints.map((item) => RoadSnapTracePointFilterSensitiveLog(item)) }),
  ...(obj.TravelModeOptions && {
    TravelModeOptions: RoadSnapTravelModeOptionsFilterSensitiveLog(obj.TravelModeOptions),
  }),
});

/**
 * @internal
 */
export const RoadSnapNoticeFilterSensitiveLog = (obj: RoadSnapNotice): any => ({
  ...obj,
  ...(obj.Code && { Code: SENSITIVE_STRING }),
  ...(obj.Title && { Title: SENSITIVE_STRING }),
  ...(obj.TracePointIndexes && { TracePointIndexes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoadSnapSnappedGeometryFilterSensitiveLog = (obj: RoadSnapSnappedGeometry): any => ({
  ...obj,
  ...(obj.LineString && { LineString: SENSITIVE_STRING }),
  ...(obj.Polyline && { Polyline: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoadSnapSnappedTracePointFilterSensitiveLog = (obj: RoadSnapSnappedTracePoint): any => ({
  ...obj,
  ...(obj.Confidence && { Confidence: SENSITIVE_STRING }),
  ...(obj.OriginalPosition && { OriginalPosition: SENSITIVE_STRING }),
  ...(obj.SnappedPosition && { SnappedPosition: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SnapToRoadsResponseFilterSensitiveLog = (obj: SnapToRoadsResponse): any => ({
  ...obj,
  ...(obj.Notices && { Notices: obj.Notices.map((item) => RoadSnapNoticeFilterSensitiveLog(item)) }),
  ...(obj.SnappedGeometry && { SnappedGeometry: RoadSnapSnappedGeometryFilterSensitiveLog(obj.SnappedGeometry) }),
  ...(obj.SnappedTracePoints && {
    SnappedTracePoints: obj.SnappedTracePoints.map((item) => RoadSnapSnappedTracePointFilterSensitiveLog(item)),
  }),
});
