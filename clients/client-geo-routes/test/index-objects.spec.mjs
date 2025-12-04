import {
  CalculateIsolinesCommand,
  CalculateRouteMatrixCommand,
  CalculateRoutesCommand,
  DayOfWeek,
  GeoRoutes,
  GeoRoutesClient,
  GeoRoutesServiceException,
  GeometryFormat,
  IsolineEngineType,
  IsolineHazardousCargoType,
  IsolineOptimizationObjective,
  IsolineTravelMode,
  IsolineTruckType,
  IsolineZoneCategory,
  MatchingStrategy,
  MeasurementSystem,
  OptimizeWaypointsCommand,
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
  SnapToRoadsCommand,
  TrafficUsage,
  WaypointOptimizationClusteringAlgorithm,
  WaypointOptimizationConstraint,
  WaypointOptimizationHazardousCargoType,
  WaypointOptimizationSequencingObjective,
  WaypointOptimizationServiceTimeTreatment,
  WaypointOptimizationTravelMode,
  WaypointOptimizationTruckType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GeoRoutesClient === "function")
assert(typeof GeoRoutes === "function")
// commands
assert(typeof CalculateIsolinesCommand === "function")
assert(typeof CalculateRouteMatrixCommand === "function")
assert(typeof CalculateRoutesCommand === "function")
assert(typeof OptimizeWaypointsCommand === "function")
assert(typeof SnapToRoadsCommand === "function")
// enums
assert(typeof DayOfWeek === "object");
assert(typeof GeometryFormat === "object");
assert(typeof IsolineEngineType === "object");
assert(typeof IsolineHazardousCargoType === "object");
assert(typeof IsolineOptimizationObjective === "object");
assert(typeof IsolineTravelMode === "object");
assert(typeof IsolineTruckType === "object");
assert(typeof IsolineZoneCategory === "object");
assert(typeof MatchingStrategy === "object");
assert(typeof MeasurementSystem === "object");
assert(typeof RoadSnapHazardousCargoType === "object");
assert(typeof RoadSnapNoticeCode === "object");
assert(typeof RoadSnapTravelMode === "object");
assert(typeof RouteDirection === "object");
assert(typeof RouteEngineType === "object");
assert(typeof RouteFerryAfterTravelStepType === "object");
assert(typeof RouteFerryBeforeTravelStepType === "object");
assert(typeof RouteFerryNoticeCode === "object");
assert(typeof RouteFerryTravelStepType === "object");
assert(typeof RouteHazardousCargoType === "object");
assert(typeof RouteLegAdditionalFeature === "object");
assert(typeof RouteLegTravelMode === "object");
assert(typeof RouteLegType === "object");
assert(typeof RouteMatrixErrorCode === "object");
assert(typeof RouteMatrixHazardousCargoType === "object");
assert(typeof RouteMatrixTravelMode === "object");
assert(typeof RouteMatrixTruckType === "object");
assert(typeof RouteMatrixZoneCategory === "object");
assert(typeof RouteNoticeImpact === "object");
assert(typeof RoutePedestrianNoticeCode === "object");
assert(typeof RoutePedestrianTravelStepType === "object");
assert(typeof RouteResponseNoticeCode === "object");
assert(typeof RouteRoadType === "object");
assert(typeof RouteSideOfStreet === "object");
assert(typeof RouteSpanAdditionalFeature === "object");
assert(typeof RouteSpanCarAccessAttribute === "object");
assert(typeof RouteSpanGateAttribute === "object");
assert(typeof RouteSpanPedestrianAccessAttribute === "object");
assert(typeof RouteSpanRailwayCrossingAttribute === "object");
assert(typeof RouteSpanRoadAttribute === "object");
assert(typeof RouteSpanScooterAccessAttribute === "object");
assert(typeof RouteSpanTruckAccessAttribute === "object");
assert(typeof RouteSteeringDirection === "object");
assert(typeof RouteTollPassValidityPeriodType === "object");
assert(typeof RouteTollPaymentMethod === "object");
assert(typeof RouteTollVehicleCategory === "object");
assert(typeof RouteTravelMode === "object");
assert(typeof RouteTravelStepType === "object");
assert(typeof RouteTruckType === "object");
assert(typeof RouteTurnIntensity === "object");
assert(typeof RouteVehicleIncidentSeverity === "object");
assert(typeof RouteVehicleIncidentType === "object");
assert(typeof RouteVehicleNoticeCode === "object");
assert(typeof RouteVehicleTravelStepType === "object");
assert(typeof RouteWeightConstraintType === "object");
assert(typeof RouteZoneCategory === "object");
assert(typeof RoutingObjective === "object");
assert(typeof SideOfStreetMatchingStrategy === "object");
assert(typeof TrafficUsage === "object");
assert(typeof WaypointOptimizationClusteringAlgorithm === "object");
assert(typeof WaypointOptimizationConstraint === "object");
assert(typeof WaypointOptimizationHazardousCargoType === "object");
assert(typeof WaypointOptimizationSequencingObjective === "object");
assert(typeof WaypointOptimizationServiceTimeTreatment === "object");
assert(typeof WaypointOptimizationTravelMode === "object");
assert(typeof WaypointOptimizationTruckType === "object");
// errors
assert(GeoRoutesServiceException.prototype instanceof Error)
console.log(`GeoRoutes index test passed.`);
