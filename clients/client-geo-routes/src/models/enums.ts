// smithy-typescript generated code
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
