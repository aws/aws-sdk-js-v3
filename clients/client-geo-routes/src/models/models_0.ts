// smithy-typescript generated code
import {
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
  RouteDirection,
  RouteEngineType,
  RouteFerryAfterTravelStepType,
  RouteFerryBeforeTravelStepType,
  RouteFerryNoticeCode,
  RouteFerryTravelStepType,
  RouteHazardousCargoType,
  RouteLegAdditionalFeature,
  RouteLegTravelMode,
  RouteLegType,
  RouteMatrixErrorCode,
  RouteMatrixHazardousCargoType,
  RouteMatrixTravelMode,
  RouteMatrixTruckType,
  RouteMatrixZoneCategory,
  RouteNoticeImpact,
  RoutePedestrianNoticeCode,
  RoutePedestrianTravelStepType,
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
  RouteTollPassValidityPeriodType,
  RouteTollPaymentMethod,
  RouteTollVehicleCategory,
  RouteTravelMode,
  RouteTravelStepType,
  RouteTruckType,
  RouteTurnIntensity,
  RouteVehicleIncidentSeverity,
  RouteVehicleIncidentType,
  RouteVehicleNoticeCode,
  RouteVehicleTravelStepType,
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
   * <p>Determines if traffic should be used or ignored while calculating the route.</p> <p>Default Value: <code>UseTrafficData</code> </p>
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
   * <p>Determines if traffic should be used or ignored while calculating the route.</p> <p>Default Value: <code>UseTrafficData</code> </p>
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
   * <p>Walking speed.</p> <p> <b>Unit</b>: <code>KilometersPerHour</code> </p>
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
   * <p>Number of trailers attached to the vehicle.</p> <p>Default Value: <code>0</code> </p>
   * @public
   */
  TrailerCount?: number | undefined;
}

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
