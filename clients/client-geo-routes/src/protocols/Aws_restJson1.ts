// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CalculateIsolinesCommandInput, CalculateIsolinesCommandOutput } from "../commands/CalculateIsolinesCommand";
import {
  CalculateRouteMatrixCommandInput,
  CalculateRouteMatrixCommandOutput,
} from "../commands/CalculateRouteMatrixCommand";
import { CalculateRoutesCommandInput, CalculateRoutesCommandOutput } from "../commands/CalculateRoutesCommand";
import { OptimizeWaypointsCommandInput, OptimizeWaypointsCommandOutput } from "../commands/OptimizeWaypointsCommand";
import { SnapToRoadsCommandInput, SnapToRoadsCommandOutput } from "../commands/SnapToRoadsCommand";
import { GeoRoutesServiceException as __BaseException } from "../models/GeoRoutesServiceException";
import {
  AccessDeniedException,
  Circle,
  Corridor,
  InternalServerException,
  Isoline,
  IsolineAllowOptions,
  IsolineAvoidanceArea,
  IsolineAvoidanceAreaGeometry,
  IsolineAvoidanceOptions,
  IsolineAvoidanceZoneCategory,
  IsolineCarOptions,
  IsolineConnection,
  IsolineConnectionGeometry,
  IsolineDestinationOptions,
  IsolineGranularityOptions,
  IsolineHazardousCargoType,
  IsolineMatchingOptions,
  IsolineOriginOptions,
  IsolineScooterOptions,
  IsolineShapeGeometry,
  IsolineSideOfStreetOptions,
  IsolineThresholds,
  IsolineTrafficOptions,
  IsolineTrailerOptions,
  IsolineTravelModeOptions,
  IsolineTruckOptions,
  IsolineVehicleLicensePlate,
  PolylineCorridor,
  RoadSnapHazardousCargoType,
  RoadSnapSnappedGeometry,
  RoadSnapSnappedTracePoint,
  RoadSnapTracePoint,
  RoadSnapTrailerOptions,
  RoadSnapTravelModeOptions,
  RoadSnapTruckOptions,
  Route,
  RouteAllowOptions,
  RouteAvoidanceArea,
  RouteAvoidanceAreaGeometry,
  RouteAvoidanceOptions,
  RouteAvoidanceZoneCategory,
  RouteCarOptions,
  RouteContinueHighwayStepDetails,
  RouteDestinationOptions,
  RouteDriverOptions,
  RouteDriverScheduleInterval,
  RouteEmissionType,
  RouteEnterHighwayStepDetails,
  RouteExclusionOptions,
  RouteExitStepDetails,
  RouteFerryArrival,
  RouteFerryDeparture,
  RouteFerryLegDetails,
  RouteFerryPlace,
  RouteHazardousCargoType,
  RouteKeepStepDetails,
  RouteLeg,
  RouteLegAdditionalFeature,
  RouteLegGeometry,
  RouteMatchingOptions,
  RouteMatrixAllowOptions,
  RouteMatrixAutoCircle,
  RouteMatrixAvoidanceArea,
  RouteMatrixAvoidanceAreaGeometry,
  RouteMatrixAvoidanceOptions,
  RouteMatrixAvoidanceZoneCategory,
  RouteMatrixBoundary,
  RouteMatrixBoundaryGeometry,
  RouteMatrixCarOptions,
  RouteMatrixDestination,
  RouteMatrixDestinationOptions,
  RouteMatrixExclusionOptions,
  RouteMatrixHazardousCargoType,
  RouteMatrixMatchingOptions,
  RouteMatrixOrigin,
  RouteMatrixOriginOptions,
  RouteMatrixScooterOptions,
  RouteMatrixSideOfStreetOptions,
  RouteMatrixTrafficOptions,
  RouteMatrixTrailerOptions,
  RouteMatrixTravelModeOptions,
  RouteMatrixTruckOptions,
  RouteMatrixVehicleLicensePlate,
  RouteOriginOptions,
  RoutePassThroughPlace,
  RoutePassThroughWaypoint,
  RoutePedestrianArrival,
  RoutePedestrianDeparture,
  RoutePedestrianLegDetails,
  RoutePedestrianOptions,
  RoutePedestrianPlace,
  RoutePedestrianSpan,
  RoutePedestrianTravelStep,
  RouteRampStepDetails,
  RouteRoundaboutEnterStepDetails,
  RouteRoundaboutExitStepDetails,
  RouteRoundaboutPassStepDetails,
  RouteScooterOptions,
  RouteSideOfStreetOptions,
  RouteSpanAdditionalFeature,
  RouteSpanDynamicSpeedDetails,
  RouteSpanSpeedLimitDetails,
  RouteSummary,
  RouteToll,
  RouteTollOptions,
  RouteTollPaymentSite,
  RouteTollPrice,
  RouteTollPriceSummary,
  RouteTollPriceValueRange,
  RouteTollRate,
  RouteTollSummary,
  RouteTrafficOptions,
  RouteTrailerOptions,
  RouteTravelModeOptions,
  RouteTruckOptions,
  RouteTurnStepDetails,
  RouteUTurnStepDetails,
  RouteVehicleArrival,
  RouteVehicleDeparture,
  RouteVehicleLegDetails,
  RouteVehicleLicensePlate,
  RouteVehiclePlace,
  RouteVehicleSpan,
  RouteVehicleTravelStep,
  RouteWaypoint,
  ThrottlingException,
  ValidationException,
  ValidationExceptionField,
  WaypointOptimizationAccessHours,
  WaypointOptimizationAccessHoursEntry,
  WaypointOptimizationAvoidanceArea,
  WaypointOptimizationAvoidanceAreaGeometry,
  WaypointOptimizationAvoidanceOptions,
  WaypointOptimizationDestinationOptions,
  WaypointOptimizationDriverOptions,
  WaypointOptimizationExclusionOptions,
  WaypointOptimizationHazardousCargoType,
  WaypointOptimizationImpedingWaypoint,
  WaypointOptimizationOptimizedWaypoint,
  WaypointOptimizationOriginOptions,
  WaypointOptimizationPedestrianOptions,
  WaypointOptimizationRestCycleDurations,
  WaypointOptimizationRestCycles,
  WaypointOptimizationRestProfile,
  WaypointOptimizationSideOfStreetOptions,
  WaypointOptimizationTrafficOptions,
  WaypointOptimizationTrailerOptions,
  WaypointOptimizationTravelModeOptions,
  WaypointOptimizationTruckOptions,
  WaypointOptimizationWaypoint,
  WeightPerAxleGroup,
} from "../models/models_0";

/**
 * serializeAws_restJson1CalculateIsolinesCommand
 */
export const se_CalculateIsolinesCommand = async (
  input: CalculateIsolinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/isolines");
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Allow: (_) => _json(_),
      ArrivalTime: [],
      Avoid: (_) => se_IsolineAvoidanceOptions(_, context),
      DepartNow: [],
      DepartureTime: [],
      Destination: (_) => se_Position(_, context),
      DestinationOptions: (_) => se_IsolineDestinationOptions(_, context),
      IsolineGeometryFormat: [],
      IsolineGranularity: (_) => _json(_),
      OptimizeIsolineFor: [],
      OptimizeRoutingFor: [],
      Origin: (_) => se_Position(_, context),
      OriginOptions: (_) => se_IsolineOriginOptions(_, context),
      Thresholds: (_) => _json(_),
      Traffic: (_) => _json(_),
      TravelMode: [],
      TravelModeOptions: (_) => se_IsolineTravelModeOptions(_, context),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CalculateRouteMatrixCommand
 */
export const se_CalculateRouteMatrixCommand = async (
  input: CalculateRouteMatrixCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/route-matrix");
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Allow: (_) => _json(_),
      Avoid: (_) => se_RouteMatrixAvoidanceOptions(_, context),
      DepartNow: [],
      DepartureTime: [],
      Destinations: (_) => se_RouteMatrixDestinationList(_, context),
      Exclude: (_) => _json(_),
      OptimizeRoutingFor: [],
      Origins: (_) => se_RouteMatrixOriginList(_, context),
      RoutingBoundary: (_) => se_RouteMatrixBoundary(_, context),
      Traffic: (_) => _json(_),
      TravelMode: [],
      TravelModeOptions: (_) => se_RouteMatrixTravelModeOptions(_, context),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CalculateRoutesCommand
 */
export const se_CalculateRoutesCommand = async (
  input: CalculateRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/routes");
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Allow: (_) => _json(_),
      ArrivalTime: [],
      Avoid: (_) => se_RouteAvoidanceOptions(_, context),
      DepartNow: [],
      DepartureTime: [],
      Destination: (_) => se_Position(_, context),
      DestinationOptions: (_) => se_RouteDestinationOptions(_, context),
      Driver: (_) => _json(_),
      Exclude: (_) => _json(_),
      InstructionsMeasurementSystem: [],
      Languages: (_) => _json(_),
      LegAdditionalFeatures: (_) => _json(_),
      LegGeometryFormat: [],
      MaxAlternatives: [],
      OptimizeRoutingFor: [],
      Origin: (_) => se_Position(_, context),
      OriginOptions: (_) => se_RouteOriginOptions(_, context),
      SpanAdditionalFeatures: (_) => _json(_),
      Tolls: (_) => _json(_),
      Traffic: (_) => _json(_),
      TravelMode: [],
      TravelModeOptions: (_) => se_RouteTravelModeOptions(_, context),
      TravelStepType: [],
      Waypoints: (_) => se_RouteWaypointList(_, context),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1OptimizeWaypointsCommand
 */
export const se_OptimizeWaypointsCommand = async (
  input: OptimizeWaypointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/optimize-waypoints");
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Avoid: (_) => se_WaypointOptimizationAvoidanceOptions(_, context),
      DepartureTime: [],
      Destination: (_) => se_Position(_, context),
      DestinationOptions: (_) => se_WaypointOptimizationDestinationOptions(_, context),
      Driver: (_) => _json(_),
      Exclude: (_) => _json(_),
      OptimizeSequencingFor: [],
      Origin: (_) => se_Position(_, context),
      OriginOptions: (_) => _json(_),
      Traffic: (_) => _json(_),
      TravelMode: [],
      TravelModeOptions: (_) => se_WaypointOptimizationTravelModeOptions(_, context),
      Waypoints: (_) => se_WaypointOptimizationWaypointList(_, context),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SnapToRoadsCommand
 */
export const se_SnapToRoadsCommand = async (
  input: SnapToRoadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/snap-to-roads");
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      SnapRadius: [],
      SnappedGeometryFormat: [],
      TracePoints: (_) => se_RoadSnapTracePointList(_, context),
      TravelMode: [],
      TravelModeOptions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CalculateIsolinesCommand
 */
export const de_CalculateIsolinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CalculateIsolinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_PB]: [, output.headers[_xagpb]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ArrivalTime: __expectString,
    DepartureTime: __expectString,
    IsolineGeometryFormat: __expectString,
    Isolines: (_) => de_IsolineList(_, context),
    SnappedDestination: (_) => de_Position(_, context),
    SnappedOrigin: (_) => de_Position(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CalculateRouteMatrixCommand
 */
export const de_CalculateRouteMatrixCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CalculateRouteMatrixCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_PB]: [, output.headers[_xagpb]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ErrorCount: __expectInt32,
    RouteMatrix: _json,
    RoutingBoundary: (_) => de_RouteMatrixBoundary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CalculateRoutesCommand
 */
export const de_CalculateRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CalculateRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_PB]: [, output.headers[_xagpb]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LegGeometryFormat: __expectString,
    Notices: _json,
    Routes: (_) => de_RouteList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1OptimizeWaypointsCommand
 */
export const de_OptimizeWaypointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<OptimizeWaypointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_PB]: [, output.headers[_xagpb]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Connections: _json,
    Distance: __expectLong,
    Duration: __expectLong,
    ImpedingWaypoints: (_) => de_WaypointOptimizationImpedingWaypointList(_, context),
    OptimizedWaypoints: (_) => de_WaypointOptimizationOptimizedWaypointList(_, context),
    TimeBreakdown: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SnapToRoadsCommand
 */
export const de_SnapToRoadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SnapToRoadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_PB]: [, output.headers[_xagpb]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Notices: _json,
    SnappedGeometry: (_) => de_RoadSnapSnappedGeometry(_, context),
    SnappedGeometryFormat: __expectString,
    SnappedTracePoints: (_) => de_RoadSnapSnappedTracePointList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.georoutes#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.georoutes#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.georoutes#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.georoutes#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    FieldList: [, (_) => de_ValidationExceptionFieldList(_, context), `fieldList`],
    Message: [, __expectString, `message`],
    Reason: [, __expectString, `reason`],
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_BeforeWaypointsList omitted.

/**
 * serializeAws_restJson1BoundingBox
 */
const se_BoundingBox = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

/**
 * serializeAws_restJson1Circle
 */
const se_Circle = (input: Circle, context: __SerdeContext): any => {
  return take(input, {
    Center: (_) => se_Position(_, context),
    Radius: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1Corridor
 */
const se_Corridor = (input: Corridor, context: __SerdeContext): any => {
  return take(input, {
    LineString: (_) => se_LineString(_, context),
    Radius: [],
  });
};

// se_CountryCodeList omitted.

// se_DistanceThresholdList omitted.

// se_IsolineAllowOptions omitted.

/**
 * serializeAws_restJson1IsolineAvoidanceArea
 */
const se_IsolineAvoidanceArea = (input: IsolineAvoidanceArea, context: __SerdeContext): any => {
  return take(input, {
    Except: (_) => se_IsolineAvoidanceAreaGeometryList(_, context),
    Geometry: (_) => se_IsolineAvoidanceAreaGeometry(_, context),
  });
};

/**
 * serializeAws_restJson1IsolineAvoidanceAreaGeometry
 */
const se_IsolineAvoidanceAreaGeometry = (input: IsolineAvoidanceAreaGeometry, context: __SerdeContext): any => {
  return take(input, {
    BoundingBox: (_) => se_BoundingBox(_, context),
    Corridor: (_) => se_Corridor(_, context),
    Polygon: (_) => se_LinearRings(_, context),
    PolylineCorridor: _json,
    PolylinePolygon: _json,
  });
};

/**
 * serializeAws_restJson1IsolineAvoidanceAreaGeometryList
 */
const se_IsolineAvoidanceAreaGeometryList = (input: IsolineAvoidanceAreaGeometry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_IsolineAvoidanceAreaGeometry(entry, context);
    });
};

/**
 * serializeAws_restJson1IsolineAvoidanceAreaList
 */
const se_IsolineAvoidanceAreaList = (input: IsolineAvoidanceArea[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_IsolineAvoidanceArea(entry, context);
    });
};

/**
 * serializeAws_restJson1IsolineAvoidanceOptions
 */
const se_IsolineAvoidanceOptions = (input: IsolineAvoidanceOptions, context: __SerdeContext): any => {
  return take(input, {
    Areas: (_) => se_IsolineAvoidanceAreaList(_, context),
    CarShuttleTrains: [],
    ControlledAccessHighways: [],
    DirtRoads: [],
    Ferries: [],
    SeasonalClosure: [],
    TollRoads: [],
    TollTransponders: [],
    TruckRoadTypes: _json,
    Tunnels: [],
    UTurns: [],
    ZoneCategories: _json,
  });
};

// se_IsolineAvoidanceZoneCategory omitted.

// se_IsolineAvoidanceZoneCategoryList omitted.

/**
 * serializeAws_restJson1IsolineCarOptions
 */
const se_IsolineCarOptions = (input: IsolineCarOptions, context: __SerdeContext): any => {
  return take(input, {
    EngineType: [],
    LicensePlate: _json,
    MaxSpeed: __serializeFloat,
    Occupancy: [],
  });
};

/**
 * serializeAws_restJson1IsolineDestinationOptions
 */
const se_IsolineDestinationOptions = (input: IsolineDestinationOptions, context: __SerdeContext): any => {
  return take(input, {
    AvoidActionsForDistance: [],
    Heading: __serializeFloat,
    Matching: _json,
    SideOfStreet: (_) => se_IsolineSideOfStreetOptions(_, context),
  });
};

// se_IsolineGranularityOptions omitted.

// se_IsolineHazardousCargoTypeList omitted.

// se_IsolineMatchingOptions omitted.

/**
 * serializeAws_restJson1IsolineOriginOptions
 */
const se_IsolineOriginOptions = (input: IsolineOriginOptions, context: __SerdeContext): any => {
  return take(input, {
    AvoidActionsForDistance: [],
    Heading: __serializeFloat,
    Matching: _json,
    SideOfStreet: (_) => se_IsolineSideOfStreetOptions(_, context),
  });
};

/**
 * serializeAws_restJson1IsolineScooterOptions
 */
const se_IsolineScooterOptions = (input: IsolineScooterOptions, context: __SerdeContext): any => {
  return take(input, {
    EngineType: [],
    LicensePlate: _json,
    MaxSpeed: __serializeFloat,
    Occupancy: [],
  });
};

/**
 * serializeAws_restJson1IsolineSideOfStreetOptions
 */
const se_IsolineSideOfStreetOptions = (input: IsolineSideOfStreetOptions, context: __SerdeContext): any => {
  return take(input, {
    Position: (_) => se_Position(_, context),
    UseWith: [],
  });
};

// se_IsolineThresholds omitted.

// se_IsolineTrafficOptions omitted.

// se_IsolineTrailerOptions omitted.

/**
 * serializeAws_restJson1IsolineTravelModeOptions
 */
const se_IsolineTravelModeOptions = (input: IsolineTravelModeOptions, context: __SerdeContext): any => {
  return take(input, {
    Car: (_) => se_IsolineCarOptions(_, context),
    Scooter: (_) => se_IsolineScooterOptions(_, context),
    Truck: (_) => se_IsolineTruckOptions(_, context),
  });
};

/**
 * serializeAws_restJson1IsolineTruckOptions
 */
const se_IsolineTruckOptions = (input: IsolineTruckOptions, context: __SerdeContext): any => {
  return take(input, {
    AxleCount: [],
    EngineType: [],
    GrossWeight: [],
    HazardousCargos: _json,
    Height: [],
    HeightAboveFirstAxle: [],
    KpraLength: [],
    Length: [],
    LicensePlate: _json,
    MaxSpeed: __serializeFloat,
    Occupancy: [],
    PayloadCapacity: [],
    TireCount: [],
    Trailer: _json,
    TruckType: [],
    TunnelRestrictionCode: [],
    WeightPerAxle: [],
    WeightPerAxleGroup: _json,
    Width: [],
  });
};

// se_IsolineVehicleLicensePlate omitted.

// se_LanguageTagList omitted.

/**
 * serializeAws_restJson1LinearRing
 */
const se_LinearRing = (input: number[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Position(entry, context);
    });
};

/**
 * serializeAws_restJson1LinearRings
 */
const se_LinearRings = (input: number[][][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LinearRing(entry, context);
    });
};

/**
 * serializeAws_restJson1LineString
 */
const se_LineString = (input: number[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Position(entry, context);
    });
};

// se_PolylineCorridor omitted.

// se_PolylineRingList omitted.

/**
 * serializeAws_restJson1Position
 */
const se_Position = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

// se_RoadSnapHazardousCargoTypeList omitted.

/**
 * serializeAws_restJson1RoadSnapTracePoint
 */
const se_RoadSnapTracePoint = (input: RoadSnapTracePoint, context: __SerdeContext): any => {
  return take(input, {
    Heading: __serializeFloat,
    Position: (_) => se_Position(_, context),
    Speed: __serializeFloat,
    Timestamp: [],
  });
};

/**
 * serializeAws_restJson1RoadSnapTracePointList
 */
const se_RoadSnapTracePointList = (input: RoadSnapTracePoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RoadSnapTracePoint(entry, context);
    });
};

// se_RoadSnapTrailerOptions omitted.

// se_RoadSnapTravelModeOptions omitted.

// se_RoadSnapTruckOptions omitted.

// se_RouteAllowOptions omitted.

/**
 * serializeAws_restJson1RouteAvoidanceArea
 */
const se_RouteAvoidanceArea = (input: RouteAvoidanceArea, context: __SerdeContext): any => {
  return take(input, {
    Except: (_) => se_RouteAvoidanceAreaGeometryList(_, context),
    Geometry: (_) => se_RouteAvoidanceAreaGeometry(_, context),
  });
};

/**
 * serializeAws_restJson1RouteAvoidanceAreaGeometry
 */
const se_RouteAvoidanceAreaGeometry = (input: RouteAvoidanceAreaGeometry, context: __SerdeContext): any => {
  return take(input, {
    BoundingBox: (_) => se_BoundingBox(_, context),
    Corridor: (_) => se_Corridor(_, context),
    Polygon: (_) => se_LinearRings(_, context),
    PolylineCorridor: _json,
    PolylinePolygon: _json,
  });
};

/**
 * serializeAws_restJson1RouteAvoidanceAreaGeometryList
 */
const se_RouteAvoidanceAreaGeometryList = (input: RouteAvoidanceAreaGeometry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RouteAvoidanceAreaGeometry(entry, context);
    });
};

/**
 * serializeAws_restJson1RouteAvoidanceAreaList
 */
const se_RouteAvoidanceAreaList = (input: RouteAvoidanceArea[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RouteAvoidanceArea(entry, context);
    });
};

/**
 * serializeAws_restJson1RouteAvoidanceOptions
 */
const se_RouteAvoidanceOptions = (input: RouteAvoidanceOptions, context: __SerdeContext): any => {
  return take(input, {
    Areas: (_) => se_RouteAvoidanceAreaList(_, context),
    CarShuttleTrains: [],
    ControlledAccessHighways: [],
    DirtRoads: [],
    Ferries: [],
    SeasonalClosure: [],
    TollRoads: [],
    TollTransponders: [],
    TruckRoadTypes: _json,
    Tunnels: [],
    UTurns: [],
    ZoneCategories: _json,
  });
};

// se_RouteAvoidanceZoneCategory omitted.

// se_RouteAvoidanceZoneCategoryList omitted.

/**
 * serializeAws_restJson1RouteCarOptions
 */
const se_RouteCarOptions = (input: RouteCarOptions, context: __SerdeContext): any => {
  return take(input, {
    EngineType: [],
    LicensePlate: _json,
    MaxSpeed: __serializeFloat,
    Occupancy: [],
  });
};

/**
 * serializeAws_restJson1RouteDestinationOptions
 */
const se_RouteDestinationOptions = (input: RouteDestinationOptions, context: __SerdeContext): any => {
  return take(input, {
    AvoidActionsForDistance: [],
    AvoidUTurns: [],
    Heading: __serializeFloat,
    Matching: _json,
    SideOfStreet: (_) => se_RouteSideOfStreetOptions(_, context),
    StopDuration: [],
  });
};

// se_RouteDriverOptions omitted.

// se_RouteDriverScheduleInterval omitted.

// se_RouteDriverScheduleIntervalList omitted.

// se_RouteEmissionType omitted.

// se_RouteExclusionOptions omitted.

// se_RouteHazardousCargoTypeList omitted.

// se_RouteLegAdditionalFeatureList omitted.

// se_RouteMatchingOptions omitted.

// se_RouteMatrixAllowOptions omitted.

// se_RouteMatrixAutoCircle omitted.

/**
 * serializeAws_restJson1RouteMatrixAvoidanceArea
 */
const se_RouteMatrixAvoidanceArea = (input: RouteMatrixAvoidanceArea, context: __SerdeContext): any => {
  return take(input, {
    Geometry: (_) => se_RouteMatrixAvoidanceAreaGeometry(_, context),
  });
};

/**
 * serializeAws_restJson1RouteMatrixAvoidanceAreaGeometry
 */
const se_RouteMatrixAvoidanceAreaGeometry = (input: RouteMatrixAvoidanceAreaGeometry, context: __SerdeContext): any => {
  return take(input, {
    BoundingBox: (_) => se_BoundingBox(_, context),
    Polygon: (_) => se_LinearRings(_, context),
    PolylinePolygon: _json,
  });
};

/**
 * serializeAws_restJson1RouteMatrixAvoidanceAreaList
 */
const se_RouteMatrixAvoidanceAreaList = (input: RouteMatrixAvoidanceArea[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RouteMatrixAvoidanceArea(entry, context);
    });
};

/**
 * serializeAws_restJson1RouteMatrixAvoidanceOptions
 */
const se_RouteMatrixAvoidanceOptions = (input: RouteMatrixAvoidanceOptions, context: __SerdeContext): any => {
  return take(input, {
    Areas: (_) => se_RouteMatrixAvoidanceAreaList(_, context),
    CarShuttleTrains: [],
    ControlledAccessHighways: [],
    DirtRoads: [],
    Ferries: [],
    TollRoads: [],
    TollTransponders: [],
    TruckRoadTypes: _json,
    Tunnels: [],
    UTurns: [],
    ZoneCategories: _json,
  });
};

// se_RouteMatrixAvoidanceZoneCategory omitted.

// se_RouteMatrixAvoidanceZoneCategoryList omitted.

/**
 * serializeAws_restJson1RouteMatrixBoundary
 */
const se_RouteMatrixBoundary = (input: RouteMatrixBoundary, context: __SerdeContext): any => {
  return take(input, {
    Geometry: (_) => se_RouteMatrixBoundaryGeometry(_, context),
    Unbounded: [],
  });
};

/**
 * serializeAws_restJson1RouteMatrixBoundaryGeometry
 */
const se_RouteMatrixBoundaryGeometry = (input: RouteMatrixBoundaryGeometry, context: __SerdeContext): any => {
  return take(input, {
    AutoCircle: _json,
    BoundingBox: (_) => se_BoundingBox(_, context),
    Circle: (_) => se_Circle(_, context),
    Polygon: (_) => se_LinearRings(_, context),
  });
};

/**
 * serializeAws_restJson1RouteMatrixCarOptions
 */
const se_RouteMatrixCarOptions = (input: RouteMatrixCarOptions, context: __SerdeContext): any => {
  return take(input, {
    LicensePlate: _json,
    MaxSpeed: __serializeFloat,
    Occupancy: [],
  });
};

/**
 * serializeAws_restJson1RouteMatrixDestination
 */
const se_RouteMatrixDestination = (input: RouteMatrixDestination, context: __SerdeContext): any => {
  return take(input, {
    Options: (_) => se_RouteMatrixDestinationOptions(_, context),
    Position: (_) => se_Position(_, context),
  });
};

/**
 * serializeAws_restJson1RouteMatrixDestinationList
 */
const se_RouteMatrixDestinationList = (input: RouteMatrixDestination[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RouteMatrixDestination(entry, context);
    });
};

/**
 * serializeAws_restJson1RouteMatrixDestinationOptions
 */
const se_RouteMatrixDestinationOptions = (input: RouteMatrixDestinationOptions, context: __SerdeContext): any => {
  return take(input, {
    AvoidActionsForDistance: [],
    Heading: __serializeFloat,
    Matching: _json,
    SideOfStreet: (_) => se_RouteMatrixSideOfStreetOptions(_, context),
  });
};

// se_RouteMatrixExclusionOptions omitted.

// se_RouteMatrixHazardousCargoTypeList omitted.

// se_RouteMatrixMatchingOptions omitted.

/**
 * serializeAws_restJson1RouteMatrixOrigin
 */
const se_RouteMatrixOrigin = (input: RouteMatrixOrigin, context: __SerdeContext): any => {
  return take(input, {
    Options: (_) => se_RouteMatrixOriginOptions(_, context),
    Position: (_) => se_Position(_, context),
  });
};

/**
 * serializeAws_restJson1RouteMatrixOriginList
 */
const se_RouteMatrixOriginList = (input: RouteMatrixOrigin[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RouteMatrixOrigin(entry, context);
    });
};

/**
 * serializeAws_restJson1RouteMatrixOriginOptions
 */
const se_RouteMatrixOriginOptions = (input: RouteMatrixOriginOptions, context: __SerdeContext): any => {
  return take(input, {
    AvoidActionsForDistance: [],
    Heading: __serializeFloat,
    Matching: _json,
    SideOfStreet: (_) => se_RouteMatrixSideOfStreetOptions(_, context),
  });
};

/**
 * serializeAws_restJson1RouteMatrixScooterOptions
 */
const se_RouteMatrixScooterOptions = (input: RouteMatrixScooterOptions, context: __SerdeContext): any => {
  return take(input, {
    LicensePlate: _json,
    MaxSpeed: __serializeFloat,
    Occupancy: [],
  });
};

/**
 * serializeAws_restJson1RouteMatrixSideOfStreetOptions
 */
const se_RouteMatrixSideOfStreetOptions = (input: RouteMatrixSideOfStreetOptions, context: __SerdeContext): any => {
  return take(input, {
    Position: (_) => se_Position(_, context),
    UseWith: [],
  });
};

// se_RouteMatrixTrafficOptions omitted.

// se_RouteMatrixTrailerOptions omitted.

/**
 * serializeAws_restJson1RouteMatrixTravelModeOptions
 */
const se_RouteMatrixTravelModeOptions = (input: RouteMatrixTravelModeOptions, context: __SerdeContext): any => {
  return take(input, {
    Car: (_) => se_RouteMatrixCarOptions(_, context),
    Scooter: (_) => se_RouteMatrixScooterOptions(_, context),
    Truck: (_) => se_RouteMatrixTruckOptions(_, context),
  });
};

/**
 * serializeAws_restJson1RouteMatrixTruckOptions
 */
const se_RouteMatrixTruckOptions = (input: RouteMatrixTruckOptions, context: __SerdeContext): any => {
  return take(input, {
    AxleCount: [],
    GrossWeight: [],
    HazardousCargos: _json,
    Height: [],
    KpraLength: [],
    Length: [],
    LicensePlate: _json,
    MaxSpeed: __serializeFloat,
    Occupancy: [],
    PayloadCapacity: [],
    Trailer: _json,
    TruckType: [],
    TunnelRestrictionCode: [],
    WeightPerAxle: [],
    WeightPerAxleGroup: _json,
    Width: [],
  });
};

// se_RouteMatrixVehicleLicensePlate omitted.

/**
 * serializeAws_restJson1RouteOriginOptions
 */
const se_RouteOriginOptions = (input: RouteOriginOptions, context: __SerdeContext): any => {
  return take(input, {
    AvoidActionsForDistance: [],
    AvoidUTurns: [],
    Heading: __serializeFloat,
    Matching: _json,
    SideOfStreet: (_) => se_RouteSideOfStreetOptions(_, context),
  });
};

/**
 * serializeAws_restJson1RoutePedestrianOptions
 */
const se_RoutePedestrianOptions = (input: RoutePedestrianOptions, context: __SerdeContext): any => {
  return take(input, {
    Speed: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1RouteScooterOptions
 */
const se_RouteScooterOptions = (input: RouteScooterOptions, context: __SerdeContext): any => {
  return take(input, {
    EngineType: [],
    LicensePlate: _json,
    MaxSpeed: __serializeFloat,
    Occupancy: [],
  });
};

/**
 * serializeAws_restJson1RouteSideOfStreetOptions
 */
const se_RouteSideOfStreetOptions = (input: RouteSideOfStreetOptions, context: __SerdeContext): any => {
  return take(input, {
    Position: (_) => se_Position(_, context),
    UseWith: [],
  });
};

// se_RouteSpanAdditionalFeatureList omitted.

// se_RouteTollOptions omitted.

// se_RouteTrafficOptions omitted.

// se_RouteTrailerOptions omitted.

/**
 * serializeAws_restJson1RouteTravelModeOptions
 */
const se_RouteTravelModeOptions = (input: RouteTravelModeOptions, context: __SerdeContext): any => {
  return take(input, {
    Car: (_) => se_RouteCarOptions(_, context),
    Pedestrian: (_) => se_RoutePedestrianOptions(_, context),
    Scooter: (_) => se_RouteScooterOptions(_, context),
    Truck: (_) => se_RouteTruckOptions(_, context),
  });
};

/**
 * serializeAws_restJson1RouteTruckOptions
 */
const se_RouteTruckOptions = (input: RouteTruckOptions, context: __SerdeContext): any => {
  return take(input, {
    AxleCount: [],
    EngineType: [],
    GrossWeight: [],
    HazardousCargos: _json,
    Height: [],
    HeightAboveFirstAxle: [],
    KpraLength: [],
    Length: [],
    LicensePlate: _json,
    MaxSpeed: __serializeFloat,
    Occupancy: [],
    PayloadCapacity: [],
    TireCount: [],
    Trailer: _json,
    TruckType: [],
    TunnelRestrictionCode: [],
    WeightPerAxle: [],
    WeightPerAxleGroup: _json,
    Width: [],
  });
};

// se_RouteVehicleLicensePlate omitted.

/**
 * serializeAws_restJson1RouteWaypoint
 */
const se_RouteWaypoint = (input: RouteWaypoint, context: __SerdeContext): any => {
  return take(input, {
    AvoidActionsForDistance: [],
    AvoidUTurns: [],
    Heading: __serializeFloat,
    Matching: _json,
    PassThrough: [],
    Position: (_) => se_Position(_, context),
    SideOfStreet: (_) => se_RouteSideOfStreetOptions(_, context),
    StopDuration: [],
  });
};

/**
 * serializeAws_restJson1RouteWaypointList
 */
const se_RouteWaypointList = (input: RouteWaypoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RouteWaypoint(entry, context);
    });
};

// se_TimeThresholdList omitted.

// se_TruckRoadTypeList omitted.

// se_WaypointOptimizationAccessHours omitted.

// se_WaypointOptimizationAccessHoursEntry omitted.

/**
 * serializeAws_restJson1WaypointOptimizationAvoidanceArea
 */
const se_WaypointOptimizationAvoidanceArea = (
  input: WaypointOptimizationAvoidanceArea,
  context: __SerdeContext
): any => {
  return take(input, {
    Geometry: (_) => se_WaypointOptimizationAvoidanceAreaGeometry(_, context),
  });
};

/**
 * serializeAws_restJson1WaypointOptimizationAvoidanceAreaGeometry
 */
const se_WaypointOptimizationAvoidanceAreaGeometry = (
  input: WaypointOptimizationAvoidanceAreaGeometry,
  context: __SerdeContext
): any => {
  return take(input, {
    BoundingBox: (_) => se_BoundingBox(_, context),
  });
};

/**
 * serializeAws_restJson1WaypointOptimizationAvoidanceAreaList
 */
const se_WaypointOptimizationAvoidanceAreaList = (
  input: WaypointOptimizationAvoidanceArea[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WaypointOptimizationAvoidanceArea(entry, context);
    });
};

/**
 * serializeAws_restJson1WaypointOptimizationAvoidanceOptions
 */
const se_WaypointOptimizationAvoidanceOptions = (
  input: WaypointOptimizationAvoidanceOptions,
  context: __SerdeContext
): any => {
  return take(input, {
    Areas: (_) => se_WaypointOptimizationAvoidanceAreaList(_, context),
    CarShuttleTrains: [],
    ControlledAccessHighways: [],
    DirtRoads: [],
    Ferries: [],
    TollRoads: [],
    Tunnels: [],
    UTurns: [],
  });
};

/**
 * serializeAws_restJson1WaypointOptimizationDestinationOptions
 */
const se_WaypointOptimizationDestinationOptions = (
  input: WaypointOptimizationDestinationOptions,
  context: __SerdeContext
): any => {
  return take(input, {
    AccessHours: _json,
    AppointmentTime: [],
    Heading: __serializeFloat,
    Id: [],
    ServiceDuration: [],
    SideOfStreet: (_) => se_WaypointOptimizationSideOfStreetOptions(_, context),
  });
};

// se_WaypointOptimizationDriverOptions omitted.

// se_WaypointOptimizationExclusionOptions omitted.

// se_WaypointOptimizationHazardousCargoTypeList omitted.

// se_WaypointOptimizationOriginOptions omitted.

/**
 * serializeAws_restJson1WaypointOptimizationPedestrianOptions
 */
const se_WaypointOptimizationPedestrianOptions = (
  input: WaypointOptimizationPedestrianOptions,
  context: __SerdeContext
): any => {
  return take(input, {
    Speed: __serializeFloat,
  });
};

// se_WaypointOptimizationRestCycleDurations omitted.

// se_WaypointOptimizationRestCycles omitted.

// se_WaypointOptimizationRestProfile omitted.

/**
 * serializeAws_restJson1WaypointOptimizationSideOfStreetOptions
 */
const se_WaypointOptimizationSideOfStreetOptions = (
  input: WaypointOptimizationSideOfStreetOptions,
  context: __SerdeContext
): any => {
  return take(input, {
    Position: (_) => se_Position(_, context),
    UseWith: [],
  });
};

// se_WaypointOptimizationTrafficOptions omitted.

// se_WaypointOptimizationTrailerOptions omitted.

/**
 * serializeAws_restJson1WaypointOptimizationTravelModeOptions
 */
const se_WaypointOptimizationTravelModeOptions = (
  input: WaypointOptimizationTravelModeOptions,
  context: __SerdeContext
): any => {
  return take(input, {
    Pedestrian: (_) => se_WaypointOptimizationPedestrianOptions(_, context),
    Truck: _json,
  });
};

// se_WaypointOptimizationTruckOptions omitted.

/**
 * serializeAws_restJson1WaypointOptimizationWaypoint
 */
const se_WaypointOptimizationWaypoint = (input: WaypointOptimizationWaypoint, context: __SerdeContext): any => {
  return take(input, {
    AccessHours: _json,
    AppointmentTime: [],
    Before: _json,
    Heading: __serializeFloat,
    Id: [],
    Position: (_) => se_Position(_, context),
    ServiceDuration: [],
    SideOfStreet: (_) => se_WaypointOptimizationSideOfStreetOptions(_, context),
  });
};

/**
 * serializeAws_restJson1WaypointOptimizationWaypointList
 */
const se_WaypointOptimizationWaypointList = (input: WaypointOptimizationWaypoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WaypointOptimizationWaypoint(entry, context);
    });
};

// se_WeightPerAxleGroup omitted.

/**
 * deserializeAws_restJson1BoundingBox
 */
const de_BoundingBox = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Circle
 */
const de_Circle = (output: any, context: __SerdeContext): Circle => {
  return take(output, {
    Center: (_: any) => de_Position(_, context),
    Radius: __limitedParseDouble,
  }) as any;
};

// de_IndexList omitted.

/**
 * deserializeAws_restJson1Isoline
 */
const de_Isoline = (output: any, context: __SerdeContext): Isoline => {
  return take(output, {
    Connections: (_: any) => de_IsolineConnectionList(_, context),
    DistanceThreshold: __expectLong,
    Geometries: (_: any) => de_IsolineShapeGeometryList(_, context),
    TimeThreshold: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1IsolineConnection
 */
const de_IsolineConnection = (output: any, context: __SerdeContext): IsolineConnection => {
  return take(output, {
    FromPolygonIndex: __expectInt32,
    Geometry: (_: any) => de_IsolineConnectionGeometry(_, context),
    ToPolygonIndex: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1IsolineConnectionGeometry
 */
const de_IsolineConnectionGeometry = (output: any, context: __SerdeContext): IsolineConnectionGeometry => {
  return take(output, {
    LineString: (_: any) => de_LineString(_, context),
    Polyline: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1IsolineConnectionList
 */
const de_IsolineConnectionList = (output: any, context: __SerdeContext): IsolineConnection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IsolineConnection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IsolineList
 */
const de_IsolineList = (output: any, context: __SerdeContext): Isoline[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Isoline(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IsolineShapeGeometry
 */
const de_IsolineShapeGeometry = (output: any, context: __SerdeContext): IsolineShapeGeometry => {
  return take(output, {
    Polygon: (_: any) => de_LinearRings(_, context),
    PolylinePolygon: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1IsolineShapeGeometryList
 */
const de_IsolineShapeGeometryList = (output: any, context: __SerdeContext): IsolineShapeGeometry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IsolineShapeGeometry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LinearRing
 */
const de_LinearRing = (output: any, context: __SerdeContext): number[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Position(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LinearRings
 */
const de_LinearRings = (output: any, context: __SerdeContext): number[][][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LinearRing(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LineString
 */
const de_LineString = (output: any, context: __SerdeContext): number[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Position(entry, context);
    });
  return retVal;
};

// de_LocalizedString omitted.

// de_LocalizedStringList omitted.

// de_PolylineRingList omitted.

/**
 * deserializeAws_restJson1Position
 */
const de_Position = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Position23
 */
const de_Position23 = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

// de_RoadSnapNotice omitted.

// de_RoadSnapNoticeList omitted.

/**
 * deserializeAws_restJson1RoadSnapSnappedGeometry
 */
const de_RoadSnapSnappedGeometry = (output: any, context: __SerdeContext): RoadSnapSnappedGeometry => {
  return take(output, {
    LineString: (_: any) => de_LineString(_, context),
    Polyline: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RoadSnapSnappedTracePoint
 */
const de_RoadSnapSnappedTracePoint = (output: any, context: __SerdeContext): RoadSnapSnappedTracePoint => {
  return take(output, {
    Confidence: __limitedParseDouble,
    OriginalPosition: (_: any) => de_Position(_, context),
    SnappedPosition: (_: any) => de_Position(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RoadSnapSnappedTracePointList
 */
const de_RoadSnapSnappedTracePointList = (output: any, context: __SerdeContext): RoadSnapSnappedTracePoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoadSnapSnappedTracePoint(entry, context);
    });
  return retVal;
};

// de_RoadSnapTracePointIndexList omitted.

/**
 * deserializeAws_restJson1Route
 */
const de_Route = (output: any, context: __SerdeContext): Route => {
  return take(output, {
    Legs: (_: any) => de_RouteLegList(_, context),
    MajorRoadLabels: _json,
    Summary: (_: any) => de_RouteSummary(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RouteContinueHighwayStepDetails
 */
const de_RouteContinueHighwayStepDetails = (output: any, context: __SerdeContext): RouteContinueHighwayStepDetails => {
  return take(output, {
    Intersection: _json,
    SteeringDirection: __expectString,
    TurnAngle: __limitedParseDouble,
    TurnIntensity: __expectString,
  }) as any;
};

// de_RouteContinueStepDetails omitted.

/**
 * deserializeAws_restJson1RouteEnterHighwayStepDetails
 */
const de_RouteEnterHighwayStepDetails = (output: any, context: __SerdeContext): RouteEnterHighwayStepDetails => {
  return take(output, {
    Intersection: _json,
    SteeringDirection: __expectString,
    TurnAngle: __limitedParseDouble,
    TurnIntensity: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteExitStepDetails
 */
const de_RouteExitStepDetails = (output: any, context: __SerdeContext): RouteExitStepDetails => {
  return take(output, {
    Intersection: _json,
    RelativeExit: __expectInt32,
    SteeringDirection: __expectString,
    TurnAngle: __limitedParseDouble,
    TurnIntensity: __expectString,
  }) as any;
};

// de_RouteFerryAfterTravelStep omitted.

// de_RouteFerryAfterTravelStepList omitted.

/**
 * deserializeAws_restJson1RouteFerryArrival
 */
const de_RouteFerryArrival = (output: any, context: __SerdeContext): RouteFerryArrival => {
  return take(output, {
    Place: (_: any) => de_RouteFerryPlace(_, context),
    Time: __expectString,
  }) as any;
};

// de_RouteFerryBeforeTravelStep omitted.

// de_RouteFerryBeforeTravelStepList omitted.

/**
 * deserializeAws_restJson1RouteFerryDeparture
 */
const de_RouteFerryDeparture = (output: any, context: __SerdeContext): RouteFerryDeparture => {
  return take(output, {
    Place: (_: any) => de_RouteFerryPlace(_, context),
    Time: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteFerryLegDetails
 */
const de_RouteFerryLegDetails = (output: any, context: __SerdeContext): RouteFerryLegDetails => {
  return take(output, {
    AfterTravelSteps: _json,
    Arrival: (_: any) => de_RouteFerryArrival(_, context),
    BeforeTravelSteps: _json,
    Departure: (_: any) => de_RouteFerryDeparture(_, context),
    Notices: _json,
    PassThroughWaypoints: (_: any) => de_RoutePassThroughWaypointList(_, context),
    RouteName: __expectString,
    Spans: _json,
    Summary: _json,
    TravelSteps: _json,
  }) as any;
};

// de_RouteFerryNotice omitted.

// de_RouteFerryNoticeList omitted.

// de_RouteFerryOverviewSummary omitted.

/**
 * deserializeAws_restJson1RouteFerryPlace
 */
const de_RouteFerryPlace = (output: any, context: __SerdeContext): RouteFerryPlace => {
  return take(output, {
    Name: __expectString,
    OriginalPosition: (_: any) => de_Position23(_, context),
    Position: (_: any) => de_Position23(_, context),
    WaypointIndex: __expectInt32,
  }) as any;
};

// de_RouteFerrySpan omitted.

// de_RouteFerrySpanList omitted.

// de_RouteFerrySummary omitted.

// de_RouteFerryTravelOnlySummary omitted.

// de_RouteFerryTravelStep omitted.

// de_RouteFerryTravelStepList omitted.

// de_RouteHazardousCargoTypeList omitted.

/**
 * deserializeAws_restJson1RouteKeepStepDetails
 */
const de_RouteKeepStepDetails = (output: any, context: __SerdeContext): RouteKeepStepDetails => {
  return take(output, {
    Intersection: _json,
    SteeringDirection: __expectString,
    TurnAngle: __limitedParseDouble,
    TurnIntensity: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteLeg
 */
const de_RouteLeg = (output: any, context: __SerdeContext): RouteLeg => {
  return take(output, {
    FerryLegDetails: (_: any) => de_RouteFerryLegDetails(_, context),
    Geometry: (_: any) => de_RouteLegGeometry(_, context),
    Language: __expectString,
    PedestrianLegDetails: (_: any) => de_RoutePedestrianLegDetails(_, context),
    TravelMode: __expectString,
    Type: __expectString,
    VehicleLegDetails: (_: any) => de_RouteVehicleLegDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RouteLegGeometry
 */
const de_RouteLegGeometry = (output: any, context: __SerdeContext): RouteLegGeometry => {
  return take(output, {
    LineString: (_: any) => de_LineString(_, context),
    Polyline: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteLegList
 */
const de_RouteLegList = (output: any, context: __SerdeContext): RouteLeg[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RouteLeg(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RouteList
 */
const de_RouteList = (output: any, context: __SerdeContext): Route[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Route(entry, context);
    });
  return retVal;
};

// de_RouteMajorRoadLabel omitted.

// de_RouteMajorRoadLabelList omitted.

// de_RouteMatrix omitted.

// de_RouteMatrixAutoCircle omitted.

/**
 * deserializeAws_restJson1RouteMatrixBoundary
 */
const de_RouteMatrixBoundary = (output: any, context: __SerdeContext): RouteMatrixBoundary => {
  return take(output, {
    Geometry: (_: any) => de_RouteMatrixBoundaryGeometry(_, context),
    Unbounded: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteMatrixBoundaryGeometry
 */
const de_RouteMatrixBoundaryGeometry = (output: any, context: __SerdeContext): RouteMatrixBoundaryGeometry => {
  return take(output, {
    AutoCircle: _json,
    BoundingBox: (_: any) => de_BoundingBox(_, context),
    Circle: (_: any) => de_Circle(_, context),
    Polygon: (_: any) => de_LinearRings(_, context),
  }) as any;
};

// de_RouteMatrixEntry omitted.

// de_RouteMatrixRow omitted.

// de_RouteNoticeDetailRange omitted.

// de_RouteNumber omitted.

// de_RouteNumberList omitted.

/**
 * deserializeAws_restJson1RoutePassThroughPlace
 */
const de_RoutePassThroughPlace = (output: any, context: __SerdeContext): RoutePassThroughPlace => {
  return take(output, {
    OriginalPosition: (_: any) => de_Position23(_, context),
    Position: (_: any) => de_Position23(_, context),
    WaypointIndex: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1RoutePassThroughWaypoint
 */
const de_RoutePassThroughWaypoint = (output: any, context: __SerdeContext): RoutePassThroughWaypoint => {
  return take(output, {
    GeometryOffset: __expectInt32,
    Place: (_: any) => de_RoutePassThroughPlace(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RoutePassThroughWaypointList
 */
const de_RoutePassThroughWaypointList = (output: any, context: __SerdeContext): RoutePassThroughWaypoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoutePassThroughWaypoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RoutePedestrianArrival
 */
const de_RoutePedestrianArrival = (output: any, context: __SerdeContext): RoutePedestrianArrival => {
  return take(output, {
    Place: (_: any) => de_RoutePedestrianPlace(_, context),
    Time: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RoutePedestrianDeparture
 */
const de_RoutePedestrianDeparture = (output: any, context: __SerdeContext): RoutePedestrianDeparture => {
  return take(output, {
    Place: (_: any) => de_RoutePedestrianPlace(_, context),
    Time: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RoutePedestrianLegDetails
 */
const de_RoutePedestrianLegDetails = (output: any, context: __SerdeContext): RoutePedestrianLegDetails => {
  return take(output, {
    Arrival: (_: any) => de_RoutePedestrianArrival(_, context),
    Departure: (_: any) => de_RoutePedestrianDeparture(_, context),
    Notices: _json,
    PassThroughWaypoints: (_: any) => de_RoutePassThroughWaypointList(_, context),
    Spans: (_: any) => de_RoutePedestrianSpanList(_, context),
    Summary: _json,
    TravelSteps: (_: any) => de_RoutePedestrianTravelStepList(_, context),
  }) as any;
};

// de_RoutePedestrianNotice omitted.

// de_RoutePedestrianNoticeList omitted.

// de_RoutePedestrianOverviewSummary omitted.

/**
 * deserializeAws_restJson1RoutePedestrianPlace
 */
const de_RoutePedestrianPlace = (output: any, context: __SerdeContext): RoutePedestrianPlace => {
  return take(output, {
    Name: __expectString,
    OriginalPosition: (_: any) => de_Position23(_, context),
    Position: (_: any) => de_Position23(_, context),
    SideOfStreet: __expectString,
    WaypointIndex: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1RoutePedestrianSpan
 */
const de_RoutePedestrianSpan = (output: any, context: __SerdeContext): RoutePedestrianSpan => {
  return take(output, {
    BestCaseDuration: __expectLong,
    Country: __expectString,
    Distance: __expectLong,
    Duration: __expectLong,
    DynamicSpeed: (_: any) => de_RouteSpanDynamicSpeedDetails(_, context),
    FunctionalClassification: __expectInt32,
    GeometryOffset: __expectInt32,
    Incidents: _json,
    Names: _json,
    PedestrianAccess: _json,
    Region: __expectString,
    RoadAttributes: _json,
    RouteNumbers: _json,
    SpeedLimit: (_: any) => de_RouteSpanSpeedLimitDetails(_, context),
    TypicalDuration: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1RoutePedestrianSpanList
 */
const de_RoutePedestrianSpanList = (output: any, context: __SerdeContext): RoutePedestrianSpan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoutePedestrianSpan(entry, context);
    });
  return retVal;
};

// de_RoutePedestrianSummary omitted.

// de_RoutePedestrianTravelOnlySummary omitted.

/**
 * deserializeAws_restJson1RoutePedestrianTravelStep
 */
const de_RoutePedestrianTravelStep = (output: any, context: __SerdeContext): RoutePedestrianTravelStep => {
  return take(output, {
    ContinueStepDetails: _json,
    CurrentRoad: _json,
    Distance: __expectLong,
    Duration: __expectLong,
    ExitNumber: _json,
    GeometryOffset: __expectInt32,
    Instruction: __expectString,
    KeepStepDetails: (_: any) => de_RouteKeepStepDetails(_, context),
    NextRoad: _json,
    RoundaboutEnterStepDetails: (_: any) => de_RouteRoundaboutEnterStepDetails(_, context),
    RoundaboutExitStepDetails: (_: any) => de_RouteRoundaboutExitStepDetails(_, context),
    RoundaboutPassStepDetails: (_: any) => de_RouteRoundaboutPassStepDetails(_, context),
    Signpost: _json,
    TurnStepDetails: (_: any) => de_RouteTurnStepDetails(_, context),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RoutePedestrianTravelStepList
 */
const de_RoutePedestrianTravelStepList = (output: any, context: __SerdeContext): RoutePedestrianTravelStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoutePedestrianTravelStep(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RouteRampStepDetails
 */
const de_RouteRampStepDetails = (output: any, context: __SerdeContext): RouteRampStepDetails => {
  return take(output, {
    Intersection: _json,
    SteeringDirection: __expectString,
    TurnAngle: __limitedParseDouble,
    TurnIntensity: __expectString,
  }) as any;
};

// de_RouteResponseNotice omitted.

// de_RouteResponseNoticeList omitted.

// de_RouteRoad omitted.

/**
 * deserializeAws_restJson1RouteRoundaboutEnterStepDetails
 */
const de_RouteRoundaboutEnterStepDetails = (output: any, context: __SerdeContext): RouteRoundaboutEnterStepDetails => {
  return take(output, {
    Intersection: _json,
    SteeringDirection: __expectString,
    TurnAngle: __limitedParseDouble,
    TurnIntensity: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteRoundaboutExitStepDetails
 */
const de_RouteRoundaboutExitStepDetails = (output: any, context: __SerdeContext): RouteRoundaboutExitStepDetails => {
  return take(output, {
    Intersection: _json,
    RelativeExit: __expectInt32,
    RoundaboutAngle: __limitedParseDouble,
    SteeringDirection: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteRoundaboutPassStepDetails
 */
const de_RouteRoundaboutPassStepDetails = (output: any, context: __SerdeContext): RouteRoundaboutPassStepDetails => {
  return take(output, {
    Intersection: _json,
    SteeringDirection: __expectString,
    TurnAngle: __limitedParseDouble,
    TurnIntensity: __expectString,
  }) as any;
};

// de_RouteSignpost omitted.

// de_RouteSignpostLabel omitted.

// de_RouteSignpostLabelList omitted.

// de_RouteSpanCarAccessAttributeList omitted.

/**
 * deserializeAws_restJson1RouteSpanDynamicSpeedDetails
 */
const de_RouteSpanDynamicSpeedDetails = (output: any, context: __SerdeContext): RouteSpanDynamicSpeedDetails => {
  return take(output, {
    BestCaseSpeed: __limitedParseDouble,
    TurnDuration: __expectLong,
    TypicalSpeed: __limitedParseDouble,
  }) as any;
};

// de_RouteSpanPedestrianAccessAttributeList omitted.

// de_RouteSpanRoadAttributeList omitted.

// de_RouteSpanScooterAccessAttributeList omitted.

/**
 * deserializeAws_restJson1RouteSpanSpeedLimitDetails
 */
const de_RouteSpanSpeedLimitDetails = (output: any, context: __SerdeContext): RouteSpanSpeedLimitDetails => {
  return take(output, {
    MaxSpeed: __limitedParseDouble,
    Unlimited: __expectBoolean,
  }) as any;
};

// de_RouteSpanTruckAccessAttributeList omitted.

/**
 * deserializeAws_restJson1RouteSummary
 */
const de_RouteSummary = (output: any, context: __SerdeContext): RouteSummary => {
  return take(output, {
    Distance: __expectLong,
    Duration: __expectLong,
    Tolls: (_: any) => de_RouteTollSummary(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RouteToll
 */
const de_RouteToll = (output: any, context: __SerdeContext): RouteToll => {
  return take(output, {
    Country: __expectString,
    PaymentSites: (_: any) => de_RouteTollPaymentSiteList(_, context),
    Rates: (_: any) => de_RouteTollRateList(_, context),
    Systems: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteTollList
 */
const de_RouteTollList = (output: any, context: __SerdeContext): RouteToll[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RouteToll(entry, context);
    });
  return retVal;
};

// de_RouteTollPass omitted.

// de_RouteTollPassValidityPeriod omitted.

// de_RouteTollPaymentMethodList omitted.

/**
 * deserializeAws_restJson1RouteTollPaymentSite
 */
const de_RouteTollPaymentSite = (output: any, context: __SerdeContext): RouteTollPaymentSite => {
  return take(output, {
    Name: __expectString,
    Position: (_: any) => de_Position23(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RouteTollPaymentSiteList
 */
const de_RouteTollPaymentSiteList = (output: any, context: __SerdeContext): RouteTollPaymentSite[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RouteTollPaymentSite(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RouteTollPrice
 */
const de_RouteTollPrice = (output: any, context: __SerdeContext): RouteTollPrice => {
  return take(output, {
    Currency: __expectString,
    Estimate: __expectBoolean,
    PerDuration: __expectLong,
    Range: __expectBoolean,
    RangeValue: (_: any) => de_RouteTollPriceValueRange(_, context),
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteTollPriceSummary
 */
const de_RouteTollPriceSummary = (output: any, context: __SerdeContext): RouteTollPriceSummary => {
  return take(output, {
    Currency: __expectString,
    Estimate: __expectBoolean,
    Range: __expectBoolean,
    RangeValue: (_: any) => de_RouteTollPriceValueRange(_, context),
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteTollPriceValueRange
 */
const de_RouteTollPriceValueRange = (output: any, context: __SerdeContext): RouteTollPriceValueRange => {
  return take(output, {
    Max: __limitedParseDouble,
    Min: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteTollRate
 */
const de_RouteTollRate = (output: any, context: __SerdeContext): RouteTollRate => {
  return take(output, {
    ApplicableTimes: __expectString,
    ConvertedPrice: (_: any) => de_RouteTollPrice(_, context),
    Id: __expectString,
    LocalPrice: (_: any) => de_RouteTollPrice(_, context),
    Name: __expectString,
    Pass: _json,
    PaymentMethods: _json,
    Transponders: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteTollRateList
 */
const de_RouteTollRateList = (output: any, context: __SerdeContext): RouteTollRate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RouteTollRate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RouteTollSummary
 */
const de_RouteTollSummary = (output: any, context: __SerdeContext): RouteTollSummary => {
  return take(output, {
    Total: (_: any) => de_RouteTollPriceSummary(_, context),
  }) as any;
};

// de_RouteTollSystem omitted.

// de_RouteTollSystemList omitted.

// de_RouteTransponder omitted.

// de_RouteTransponderList omitted.

/**
 * deserializeAws_restJson1RouteTurnStepDetails
 */
const de_RouteTurnStepDetails = (output: any, context: __SerdeContext): RouteTurnStepDetails => {
  return take(output, {
    Intersection: _json,
    SteeringDirection: __expectString,
    TurnAngle: __limitedParseDouble,
    TurnIntensity: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteUTurnStepDetails
 */
const de_RouteUTurnStepDetails = (output: any, context: __SerdeContext): RouteUTurnStepDetails => {
  return take(output, {
    Intersection: _json,
    SteeringDirection: __expectString,
    TurnAngle: __limitedParseDouble,
    TurnIntensity: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteVehicleArrival
 */
const de_RouteVehicleArrival = (output: any, context: __SerdeContext): RouteVehicleArrival => {
  return take(output, {
    Place: (_: any) => de_RouteVehiclePlace(_, context),
    Time: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteVehicleDeparture
 */
const de_RouteVehicleDeparture = (output: any, context: __SerdeContext): RouteVehicleDeparture => {
  return take(output, {
    Place: (_: any) => de_RouteVehiclePlace(_, context),
    Time: __expectString,
  }) as any;
};

// de_RouteVehicleIncident omitted.

// de_RouteVehicleIncidentList omitted.

/**
 * deserializeAws_restJson1RouteVehicleLegDetails
 */
const de_RouteVehicleLegDetails = (output: any, context: __SerdeContext): RouteVehicleLegDetails => {
  return take(output, {
    Arrival: (_: any) => de_RouteVehicleArrival(_, context),
    Departure: (_: any) => de_RouteVehicleDeparture(_, context),
    Incidents: _json,
    Notices: _json,
    PassThroughWaypoints: (_: any) => de_RoutePassThroughWaypointList(_, context),
    Spans: (_: any) => de_RouteVehicleSpanList(_, context),
    Summary: _json,
    TollSystems: _json,
    Tolls: (_: any) => de_RouteTollList(_, context),
    TravelSteps: (_: any) => de_RouteVehicleTravelStepList(_, context),
    TruckRoadTypes: _json,
    Zones: _json,
  }) as any;
};

// de_RouteVehicleNotice omitted.

// de_RouteVehicleNoticeDetail omitted.

// de_RouteVehicleNoticeDetailList omitted.

// de_RouteVehicleNoticeList omitted.

// de_RouteVehicleOverviewSummary omitted.

/**
 * deserializeAws_restJson1RouteVehiclePlace
 */
const de_RouteVehiclePlace = (output: any, context: __SerdeContext): RouteVehiclePlace => {
  return take(output, {
    Name: __expectString,
    OriginalPosition: (_: any) => de_Position23(_, context),
    Position: (_: any) => de_Position23(_, context),
    SideOfStreet: __expectString,
    WaypointIndex: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteVehicleSpan
 */
const de_RouteVehicleSpan = (output: any, context: __SerdeContext): RouteVehicleSpan => {
  return take(output, {
    BestCaseDuration: __expectLong,
    CarAccess: _json,
    Country: __expectString,
    Distance: __expectLong,
    Duration: __expectLong,
    DynamicSpeed: (_: any) => de_RouteSpanDynamicSpeedDetails(_, context),
    FunctionalClassification: __expectInt32,
    Gate: __expectString,
    GeometryOffset: __expectInt32,
    Incidents: _json,
    Names: _json,
    Notices: _json,
    RailwayCrossing: __expectString,
    Region: __expectString,
    RoadAttributes: _json,
    RouteNumbers: _json,
    ScooterAccess: _json,
    SpeedLimit: (_: any) => de_RouteSpanSpeedLimitDetails(_, context),
    TollSystems: _json,
    TruckAccess: _json,
    TruckRoadTypes: _json,
    TypicalDuration: __expectLong,
    Zones: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1RouteVehicleSpanList
 */
const de_RouteVehicleSpanList = (output: any, context: __SerdeContext): RouteVehicleSpan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RouteVehicleSpan(entry, context);
    });
  return retVal;
};

// de_RouteVehicleSummary omitted.

// de_RouteVehicleTravelOnlySummary omitted.

/**
 * deserializeAws_restJson1RouteVehicleTravelStep
 */
const de_RouteVehicleTravelStep = (output: any, context: __SerdeContext): RouteVehicleTravelStep => {
  return take(output, {
    ContinueHighwayStepDetails: (_: any) => de_RouteContinueHighwayStepDetails(_, context),
    ContinueStepDetails: _json,
    CurrentRoad: _json,
    Distance: __expectLong,
    Duration: __expectLong,
    EnterHighwayStepDetails: (_: any) => de_RouteEnterHighwayStepDetails(_, context),
    ExitNumber: _json,
    ExitStepDetails: (_: any) => de_RouteExitStepDetails(_, context),
    GeometryOffset: __expectInt32,
    Instruction: __expectString,
    KeepStepDetails: (_: any) => de_RouteKeepStepDetails(_, context),
    NextRoad: _json,
    RampStepDetails: (_: any) => de_RouteRampStepDetails(_, context),
    RoundaboutEnterStepDetails: (_: any) => de_RouteRoundaboutEnterStepDetails(_, context),
    RoundaboutExitStepDetails: (_: any) => de_RouteRoundaboutExitStepDetails(_, context),
    RoundaboutPassStepDetails: (_: any) => de_RouteRoundaboutPassStepDetails(_, context),
    Signpost: _json,
    TurnStepDetails: (_: any) => de_RouteTurnStepDetails(_, context),
    Type: __expectString,
    UTurnStepDetails: (_: any) => de_RouteUTurnStepDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RouteVehicleTravelStepList
 */
const de_RouteVehicleTravelStepList = (output: any, context: __SerdeContext): RouteVehicleTravelStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RouteVehicleTravelStep(entry, context);
    });
  return retVal;
};

// de_RouteViolatedConstraints omitted.

// de_RouteWeightConstraint omitted.

// de_RouteZone omitted.

// de_RouteZoneList omitted.

// de_TruckRoadTypeList omitted.

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return take(output, {
    Message: [, __expectString, `message`],
    Name: [, __expectString, `name`],
  }) as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ValidationExceptionField(entry, context);
    });
  return retVal;
};

// de_WaypointOptimizationConnection omitted.

// de_WaypointOptimizationConnectionList omitted.

// de_WaypointOptimizationFailedConstraint omitted.

// de_WaypointOptimizationFailedConstraintList omitted.

/**
 * deserializeAws_restJson1WaypointOptimizationImpedingWaypoint
 */
const de_WaypointOptimizationImpedingWaypoint = (
  output: any,
  context: __SerdeContext
): WaypointOptimizationImpedingWaypoint => {
  return take(output, {
    FailedConstraints: _json,
    Id: __expectString,
    Position: (_: any) => de_Position(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1WaypointOptimizationImpedingWaypointList
 */
const de_WaypointOptimizationImpedingWaypointList = (
  output: any,
  context: __SerdeContext
): WaypointOptimizationImpedingWaypoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WaypointOptimizationImpedingWaypoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WaypointOptimizationOptimizedWaypoint
 */
const de_WaypointOptimizationOptimizedWaypoint = (
  output: any,
  context: __SerdeContext
): WaypointOptimizationOptimizedWaypoint => {
  return take(output, {
    ArrivalTime: __expectString,
    DepartureTime: __expectString,
    Id: __expectString,
    Position: (_: any) => de_Position(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1WaypointOptimizationOptimizedWaypointList
 */
const de_WaypointOptimizationOptimizedWaypointList = (
  output: any,
  context: __SerdeContext
): WaypointOptimizationOptimizedWaypoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WaypointOptimizationOptimizedWaypoint(entry, context);
    });
  return retVal;
};

// de_WaypointOptimizationTimeBreakdown omitted.

// de_WeightPerAxleGroup omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _K = "Key";
const _PB = "PricingBucket";
const _k = "key";
const _xagpb = "x-amz-geo-pricing-bucket";
