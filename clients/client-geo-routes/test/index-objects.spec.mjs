import {
  AccessDeniedException,
  AccessDeniedException$,
  CalculateIsolines$,
  CalculateIsolinesCommand,
  CalculateIsolinesRequest$,
  CalculateIsolinesResponse$,
  CalculateRouteMatrix$,
  CalculateRouteMatrixCommand,
  CalculateRouteMatrixRequest$,
  CalculateRouteMatrixResponse$,
  CalculateRoutes$,
  CalculateRoutesCommand,
  CalculateRoutesRequest$,
  CalculateRoutesResponse$,
  Circle$,
  Corridor$,
  DayOfWeek,
  GeoRoutes,
  GeoRoutesClient,
  GeoRoutesServiceException,
  GeometryFormat,
  InternalServerException,
  InternalServerException$,
  Isoline$,
  IsolineAllowOptions$,
  IsolineAvoidanceArea$,
  IsolineAvoidanceAreaGeometry$,
  IsolineAvoidanceOptions$,
  IsolineAvoidanceZoneCategory$,
  IsolineCarOptions$,
  IsolineConnection$,
  IsolineConnectionGeometry$,
  IsolineDestinationOptions$,
  IsolineEngineType,
  IsolineGranularityOptions$,
  IsolineHazardousCargoType,
  IsolineMatchingOptions$,
  IsolineOptimizationObjective,
  IsolineOriginOptions$,
  IsolineScooterOptions$,
  IsolineShapeGeometry$,
  IsolineSideOfStreetOptions$,
  IsolineThresholds$,
  IsolineTrafficOptions$,
  IsolineTrailerOptions$,
  IsolineTravelMode,
  IsolineTravelModeOptions$,
  IsolineTruckOptions$,
  IsolineTruckType,
  IsolineVehicleLicensePlate$,
  IsolineZoneCategory,
  LocalizedString$,
  MatchingStrategy,
  MeasurementSystem,
  OptimizeWaypoints$,
  OptimizeWaypointsCommand,
  OptimizeWaypointsRequest$,
  OptimizeWaypointsResponse$,
  PolylineCorridor$,
  RoadSnapHazardousCargoType,
  RoadSnapNotice$,
  RoadSnapNoticeCode,
  RoadSnapSnappedGeometry$,
  RoadSnapSnappedTracePoint$,
  RoadSnapTracePoint$,
  RoadSnapTrailerOptions$,
  RoadSnapTravelMode,
  RoadSnapTravelModeOptions$,
  RoadSnapTruckOptions$,
  Route$,
  RouteAllowOptions$,
  RouteAvoidanceArea$,
  RouteAvoidanceAreaGeometry$,
  RouteAvoidanceOptions$,
  RouteAvoidanceZoneCategory$,
  RouteCarOptions$,
  RouteContinueHighwayStepDetails$,
  RouteContinueStepDetails$,
  RouteDestinationOptions$,
  RouteDirection,
  RouteDriverOptions$,
  RouteDriverScheduleInterval$,
  RouteEmissionType$,
  RouteEngineType,
  RouteEnterHighwayStepDetails$,
  RouteExclusionOptions$,
  RouteExitStepDetails$,
  RouteFerryAfterTravelStep$,
  RouteFerryAfterTravelStepType,
  RouteFerryArrival$,
  RouteFerryBeforeTravelStep$,
  RouteFerryBeforeTravelStepType,
  RouteFerryDeparture$,
  RouteFerryLegDetails$,
  RouteFerryNotice$,
  RouteFerryNoticeCode,
  RouteFerryOverviewSummary$,
  RouteFerryPlace$,
  RouteFerrySpan$,
  RouteFerrySummary$,
  RouteFerryTravelOnlySummary$,
  RouteFerryTravelStep$,
  RouteFerryTravelStepType,
  RouteHazardousCargoType,
  RouteKeepStepDetails$,
  RouteLeg$,
  RouteLegAdditionalFeature,
  RouteLegGeometry$,
  RouteLegTravelMode,
  RouteLegType,
  RouteMajorRoadLabel$,
  RouteMatchingOptions$,
  RouteMatrixAllowOptions$,
  RouteMatrixAutoCircle$,
  RouteMatrixAvoidanceArea$,
  RouteMatrixAvoidanceAreaGeometry$,
  RouteMatrixAvoidanceOptions$,
  RouteMatrixAvoidanceZoneCategory$,
  RouteMatrixBoundary$,
  RouteMatrixBoundaryGeometry$,
  RouteMatrixCarOptions$,
  RouteMatrixDestination$,
  RouteMatrixDestinationOptions$,
  RouteMatrixEntry$,
  RouteMatrixErrorCode,
  RouteMatrixExclusionOptions$,
  RouteMatrixHazardousCargoType,
  RouteMatrixMatchingOptions$,
  RouteMatrixOrigin$,
  RouteMatrixOriginOptions$,
  RouteMatrixScooterOptions$,
  RouteMatrixSideOfStreetOptions$,
  RouteMatrixTrafficOptions$,
  RouteMatrixTrailerOptions$,
  RouteMatrixTravelMode,
  RouteMatrixTravelModeOptions$,
  RouteMatrixTruckOptions$,
  RouteMatrixTruckType,
  RouteMatrixVehicleLicensePlate$,
  RouteMatrixZoneCategory,
  RouteNoticeDetailRange$,
  RouteNoticeImpact,
  RouteNumber$,
  RouteOriginOptions$,
  RoutePassThroughPlace$,
  RoutePassThroughWaypoint$,
  RoutePedestrianArrival$,
  RoutePedestrianDeparture$,
  RoutePedestrianLegDetails$,
  RoutePedestrianNotice$,
  RoutePedestrianNoticeCode,
  RoutePedestrianOptions$,
  RoutePedestrianOverviewSummary$,
  RoutePedestrianPlace$,
  RoutePedestrianSpan$,
  RoutePedestrianSummary$,
  RoutePedestrianTravelOnlySummary$,
  RoutePedestrianTravelStep$,
  RoutePedestrianTravelStepType,
  RouteRampStepDetails$,
  RouteResponseNotice$,
  RouteResponseNoticeCode,
  RouteRoad$,
  RouteRoadType,
  RouteRoundaboutEnterStepDetails$,
  RouteRoundaboutExitStepDetails$,
  RouteRoundaboutPassStepDetails$,
  RouteScooterOptions$,
  RouteSideOfStreet,
  RouteSideOfStreetOptions$,
  RouteSignpost$,
  RouteSignpostLabel$,
  RouteSpanAdditionalFeature,
  RouteSpanCarAccessAttribute,
  RouteSpanDynamicSpeedDetails$,
  RouteSpanGateAttribute,
  RouteSpanPedestrianAccessAttribute,
  RouteSpanRailwayCrossingAttribute,
  RouteSpanRoadAttribute,
  RouteSpanScooterAccessAttribute,
  RouteSpanSpeedLimitDetails$,
  RouteSpanTruckAccessAttribute,
  RouteSteeringDirection,
  RouteSummary$,
  RouteToll$,
  RouteTollOptions$,
  RouteTollPass$,
  RouteTollPassValidityPeriod$,
  RouteTollPassValidityPeriodType,
  RouteTollPaymentMethod,
  RouteTollPaymentSite$,
  RouteTollPrice$,
  RouteTollPriceSummary$,
  RouteTollPriceValueRange$,
  RouteTollRate$,
  RouteTollSummary$,
  RouteTollSystem$,
  RouteTollVehicleCategory,
  RouteTrafficOptions$,
  RouteTrailerOptions$,
  RouteTransponder$,
  RouteTravelMode,
  RouteTravelModeOptions$,
  RouteTravelStepType,
  RouteTruckOptions$,
  RouteTruckType,
  RouteTurnIntensity,
  RouteTurnStepDetails$,
  RouteUTurnStepDetails$,
  RouteVehicleArrival$,
  RouteVehicleDeparture$,
  RouteVehicleIncident$,
  RouteVehicleIncidentSeverity,
  RouteVehicleIncidentType,
  RouteVehicleLegDetails$,
  RouteVehicleLicensePlate$,
  RouteVehicleNotice$,
  RouteVehicleNoticeCode,
  RouteVehicleNoticeDetail$,
  RouteVehicleOverviewSummary$,
  RouteVehiclePlace$,
  RouteVehicleSpan$,
  RouteVehicleSummary$,
  RouteVehicleTravelOnlySummary$,
  RouteVehicleTravelStep$,
  RouteVehicleTravelStepType,
  RouteViolatedConstraints$,
  RouteWaypoint$,
  RouteWeightConstraint$,
  RouteWeightConstraintType,
  RouteZone$,
  RouteZoneCategory,
  RoutingObjective,
  SideOfStreetMatchingStrategy,
  SnapToRoads$,
  SnapToRoadsCommand,
  SnapToRoadsRequest$,
  SnapToRoadsResponse$,
  ThrottlingException,
  ThrottlingException$,
  TrafficUsage,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  WaypointOptimizationAccessHours$,
  WaypointOptimizationAccessHoursEntry$,
  WaypointOptimizationAvoidanceArea$,
  WaypointOptimizationAvoidanceAreaGeometry$,
  WaypointOptimizationAvoidanceOptions$,
  WaypointOptimizationClusteringAlgorithm,
  WaypointOptimizationClusteringOptions$,
  WaypointOptimizationConnection$,
  WaypointOptimizationConstraint,
  WaypointOptimizationDestinationOptions$,
  WaypointOptimizationDriverOptions$,
  WaypointOptimizationDrivingDistanceOptions$,
  WaypointOptimizationExclusionOptions$,
  WaypointOptimizationFailedConstraint$,
  WaypointOptimizationHazardousCargoType,
  WaypointOptimizationImpedingWaypoint$,
  WaypointOptimizationOptimizedWaypoint$,
  WaypointOptimizationOriginOptions$,
  WaypointOptimizationPedestrianOptions$,
  WaypointOptimizationRestCycleDurations$,
  WaypointOptimizationRestCycles$,
  WaypointOptimizationRestProfile$,
  WaypointOptimizationSequencingObjective,
  WaypointOptimizationServiceTimeTreatment,
  WaypointOptimizationSideOfStreetOptions$,
  WaypointOptimizationTimeBreakdown$,
  WaypointOptimizationTrafficOptions$,
  WaypointOptimizationTrailerOptions$,
  WaypointOptimizationTravelMode,
  WaypointOptimizationTravelModeOptions$,
  WaypointOptimizationTruckOptions$,
  WaypointOptimizationTruckType,
  WaypointOptimizationWaypoint$,
  WeightPerAxleGroup$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GeoRoutesClient === "function");
assert(typeof GeoRoutes === "function");
// commands
assert(typeof CalculateIsolinesCommand === "function");
assert(typeof CalculateIsolines$ === "object");
assert(typeof CalculateRouteMatrixCommand === "function");
assert(typeof CalculateRouteMatrix$ === "object");
assert(typeof CalculateRoutesCommand === "function");
assert(typeof CalculateRoutes$ === "object");
assert(typeof OptimizeWaypointsCommand === "function");
assert(typeof OptimizeWaypoints$ === "object");
assert(typeof SnapToRoadsCommand === "function");
assert(typeof SnapToRoads$ === "object");
// structural schemas
assert(typeof CalculateIsolinesRequest$ === "object");
assert(typeof CalculateIsolinesResponse$ === "object");
assert(typeof CalculateRouteMatrixRequest$ === "object");
assert(typeof CalculateRouteMatrixResponse$ === "object");
assert(typeof CalculateRoutesRequest$ === "object");
assert(typeof CalculateRoutesResponse$ === "object");
assert(typeof Circle$ === "object");
assert(typeof Corridor$ === "object");
assert(typeof Isoline$ === "object");
assert(typeof IsolineAllowOptions$ === "object");
assert(typeof IsolineAvoidanceArea$ === "object");
assert(typeof IsolineAvoidanceAreaGeometry$ === "object");
assert(typeof IsolineAvoidanceOptions$ === "object");
assert(typeof IsolineAvoidanceZoneCategory$ === "object");
assert(typeof IsolineCarOptions$ === "object");
assert(typeof IsolineConnection$ === "object");
assert(typeof IsolineConnectionGeometry$ === "object");
assert(typeof IsolineDestinationOptions$ === "object");
assert(typeof IsolineGranularityOptions$ === "object");
assert(typeof IsolineMatchingOptions$ === "object");
assert(typeof IsolineOriginOptions$ === "object");
assert(typeof IsolineScooterOptions$ === "object");
assert(typeof IsolineShapeGeometry$ === "object");
assert(typeof IsolineSideOfStreetOptions$ === "object");
assert(typeof IsolineThresholds$ === "object");
assert(typeof IsolineTrafficOptions$ === "object");
assert(typeof IsolineTrailerOptions$ === "object");
assert(typeof IsolineTravelModeOptions$ === "object");
assert(typeof IsolineTruckOptions$ === "object");
assert(typeof IsolineVehicleLicensePlate$ === "object");
assert(typeof LocalizedString$ === "object");
assert(typeof OptimizeWaypointsRequest$ === "object");
assert(typeof OptimizeWaypointsResponse$ === "object");
assert(typeof PolylineCorridor$ === "object");
assert(typeof RoadSnapNotice$ === "object");
assert(typeof RoadSnapSnappedGeometry$ === "object");
assert(typeof RoadSnapSnappedTracePoint$ === "object");
assert(typeof RoadSnapTracePoint$ === "object");
assert(typeof RoadSnapTrailerOptions$ === "object");
assert(typeof RoadSnapTravelModeOptions$ === "object");
assert(typeof RoadSnapTruckOptions$ === "object");
assert(typeof Route$ === "object");
assert(typeof RouteAllowOptions$ === "object");
assert(typeof RouteAvoidanceArea$ === "object");
assert(typeof RouteAvoidanceAreaGeometry$ === "object");
assert(typeof RouteAvoidanceOptions$ === "object");
assert(typeof RouteAvoidanceZoneCategory$ === "object");
assert(typeof RouteCarOptions$ === "object");
assert(typeof RouteContinueHighwayStepDetails$ === "object");
assert(typeof RouteContinueStepDetails$ === "object");
assert(typeof RouteDestinationOptions$ === "object");
assert(typeof RouteDriverOptions$ === "object");
assert(typeof RouteDriverScheduleInterval$ === "object");
assert(typeof RouteEmissionType$ === "object");
assert(typeof RouteEnterHighwayStepDetails$ === "object");
assert(typeof RouteExclusionOptions$ === "object");
assert(typeof RouteExitStepDetails$ === "object");
assert(typeof RouteFerryAfterTravelStep$ === "object");
assert(typeof RouteFerryArrival$ === "object");
assert(typeof RouteFerryBeforeTravelStep$ === "object");
assert(typeof RouteFerryDeparture$ === "object");
assert(typeof RouteFerryLegDetails$ === "object");
assert(typeof RouteFerryNotice$ === "object");
assert(typeof RouteFerryOverviewSummary$ === "object");
assert(typeof RouteFerryPlace$ === "object");
assert(typeof RouteFerrySpan$ === "object");
assert(typeof RouteFerrySummary$ === "object");
assert(typeof RouteFerryTravelOnlySummary$ === "object");
assert(typeof RouteFerryTravelStep$ === "object");
assert(typeof RouteKeepStepDetails$ === "object");
assert(typeof RouteLeg$ === "object");
assert(typeof RouteLegGeometry$ === "object");
assert(typeof RouteMajorRoadLabel$ === "object");
assert(typeof RouteMatchingOptions$ === "object");
assert(typeof RouteMatrixAllowOptions$ === "object");
assert(typeof RouteMatrixAutoCircle$ === "object");
assert(typeof RouteMatrixAvoidanceArea$ === "object");
assert(typeof RouteMatrixAvoidanceAreaGeometry$ === "object");
assert(typeof RouteMatrixAvoidanceOptions$ === "object");
assert(typeof RouteMatrixAvoidanceZoneCategory$ === "object");
assert(typeof RouteMatrixBoundary$ === "object");
assert(typeof RouteMatrixBoundaryGeometry$ === "object");
assert(typeof RouteMatrixCarOptions$ === "object");
assert(typeof RouteMatrixDestination$ === "object");
assert(typeof RouteMatrixDestinationOptions$ === "object");
assert(typeof RouteMatrixEntry$ === "object");
assert(typeof RouteMatrixExclusionOptions$ === "object");
assert(typeof RouteMatrixMatchingOptions$ === "object");
assert(typeof RouteMatrixOrigin$ === "object");
assert(typeof RouteMatrixOriginOptions$ === "object");
assert(typeof RouteMatrixScooterOptions$ === "object");
assert(typeof RouteMatrixSideOfStreetOptions$ === "object");
assert(typeof RouteMatrixTrafficOptions$ === "object");
assert(typeof RouteMatrixTrailerOptions$ === "object");
assert(typeof RouteMatrixTravelModeOptions$ === "object");
assert(typeof RouteMatrixTruckOptions$ === "object");
assert(typeof RouteMatrixVehicleLicensePlate$ === "object");
assert(typeof RouteNoticeDetailRange$ === "object");
assert(typeof RouteNumber$ === "object");
assert(typeof RouteOriginOptions$ === "object");
assert(typeof RoutePassThroughPlace$ === "object");
assert(typeof RoutePassThroughWaypoint$ === "object");
assert(typeof RoutePedestrianArrival$ === "object");
assert(typeof RoutePedestrianDeparture$ === "object");
assert(typeof RoutePedestrianLegDetails$ === "object");
assert(typeof RoutePedestrianNotice$ === "object");
assert(typeof RoutePedestrianOptions$ === "object");
assert(typeof RoutePedestrianOverviewSummary$ === "object");
assert(typeof RoutePedestrianPlace$ === "object");
assert(typeof RoutePedestrianSpan$ === "object");
assert(typeof RoutePedestrianSummary$ === "object");
assert(typeof RoutePedestrianTravelOnlySummary$ === "object");
assert(typeof RoutePedestrianTravelStep$ === "object");
assert(typeof RouteRampStepDetails$ === "object");
assert(typeof RouteResponseNotice$ === "object");
assert(typeof RouteRoad$ === "object");
assert(typeof RouteRoundaboutEnterStepDetails$ === "object");
assert(typeof RouteRoundaboutExitStepDetails$ === "object");
assert(typeof RouteRoundaboutPassStepDetails$ === "object");
assert(typeof RouteScooterOptions$ === "object");
assert(typeof RouteSideOfStreetOptions$ === "object");
assert(typeof RouteSignpost$ === "object");
assert(typeof RouteSignpostLabel$ === "object");
assert(typeof RouteSpanDynamicSpeedDetails$ === "object");
assert(typeof RouteSpanSpeedLimitDetails$ === "object");
assert(typeof RouteSummary$ === "object");
assert(typeof RouteToll$ === "object");
assert(typeof RouteTollOptions$ === "object");
assert(typeof RouteTollPass$ === "object");
assert(typeof RouteTollPassValidityPeriod$ === "object");
assert(typeof RouteTollPaymentSite$ === "object");
assert(typeof RouteTollPrice$ === "object");
assert(typeof RouteTollPriceSummary$ === "object");
assert(typeof RouteTollPriceValueRange$ === "object");
assert(typeof RouteTollRate$ === "object");
assert(typeof RouteTollSummary$ === "object");
assert(typeof RouteTollSystem$ === "object");
assert(typeof RouteTrafficOptions$ === "object");
assert(typeof RouteTrailerOptions$ === "object");
assert(typeof RouteTransponder$ === "object");
assert(typeof RouteTravelModeOptions$ === "object");
assert(typeof RouteTruckOptions$ === "object");
assert(typeof RouteTurnStepDetails$ === "object");
assert(typeof RouteUTurnStepDetails$ === "object");
assert(typeof RouteVehicleArrival$ === "object");
assert(typeof RouteVehicleDeparture$ === "object");
assert(typeof RouteVehicleIncident$ === "object");
assert(typeof RouteVehicleLegDetails$ === "object");
assert(typeof RouteVehicleLicensePlate$ === "object");
assert(typeof RouteVehicleNotice$ === "object");
assert(typeof RouteVehicleNoticeDetail$ === "object");
assert(typeof RouteVehicleOverviewSummary$ === "object");
assert(typeof RouteVehiclePlace$ === "object");
assert(typeof RouteVehicleSpan$ === "object");
assert(typeof RouteVehicleSummary$ === "object");
assert(typeof RouteVehicleTravelOnlySummary$ === "object");
assert(typeof RouteVehicleTravelStep$ === "object");
assert(typeof RouteViolatedConstraints$ === "object");
assert(typeof RouteWaypoint$ === "object");
assert(typeof RouteWeightConstraint$ === "object");
assert(typeof RouteZone$ === "object");
assert(typeof SnapToRoadsRequest$ === "object");
assert(typeof SnapToRoadsResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof WaypointOptimizationAccessHours$ === "object");
assert(typeof WaypointOptimizationAccessHoursEntry$ === "object");
assert(typeof WaypointOptimizationAvoidanceArea$ === "object");
assert(typeof WaypointOptimizationAvoidanceAreaGeometry$ === "object");
assert(typeof WaypointOptimizationAvoidanceOptions$ === "object");
assert(typeof WaypointOptimizationClusteringOptions$ === "object");
assert(typeof WaypointOptimizationConnection$ === "object");
assert(typeof WaypointOptimizationDestinationOptions$ === "object");
assert(typeof WaypointOptimizationDriverOptions$ === "object");
assert(typeof WaypointOptimizationDrivingDistanceOptions$ === "object");
assert(typeof WaypointOptimizationExclusionOptions$ === "object");
assert(typeof WaypointOptimizationFailedConstraint$ === "object");
assert(typeof WaypointOptimizationImpedingWaypoint$ === "object");
assert(typeof WaypointOptimizationOptimizedWaypoint$ === "object");
assert(typeof WaypointOptimizationOriginOptions$ === "object");
assert(typeof WaypointOptimizationPedestrianOptions$ === "object");
assert(typeof WaypointOptimizationRestCycleDurations$ === "object");
assert(typeof WaypointOptimizationRestCycles$ === "object");
assert(typeof WaypointOptimizationRestProfile$ === "object");
assert(typeof WaypointOptimizationSideOfStreetOptions$ === "object");
assert(typeof WaypointOptimizationTimeBreakdown$ === "object");
assert(typeof WaypointOptimizationTrafficOptions$ === "object");
assert(typeof WaypointOptimizationTrailerOptions$ === "object");
assert(typeof WaypointOptimizationTravelModeOptions$ === "object");
assert(typeof WaypointOptimizationTruckOptions$ === "object");
assert(typeof WaypointOptimizationWaypoint$ === "object");
assert(typeof WeightPerAxleGroup$ === "object");
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
assert(typeof ValidationExceptionReason === "object");
assert(typeof WaypointOptimizationClusteringAlgorithm === "object");
assert(typeof WaypointOptimizationConstraint === "object");
assert(typeof WaypointOptimizationHazardousCargoType === "object");
assert(typeof WaypointOptimizationSequencingObjective === "object");
assert(typeof WaypointOptimizationServiceTimeTreatment === "object");
assert(typeof WaypointOptimizationTravelMode === "object");
assert(typeof WaypointOptimizationTruckType === "object");
// errors
assert(AccessDeniedException.prototype instanceof GeoRoutesServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof GeoRoutesServiceException);
assert(typeof InternalServerException$ === "object");
assert(ThrottlingException.prototype instanceof GeoRoutesServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof GeoRoutesServiceException);
assert(typeof ValidationException$ === "object");
assert(GeoRoutesServiceException.prototype instanceof Error);
console.log(`GeoRoutes index test passed.`);
