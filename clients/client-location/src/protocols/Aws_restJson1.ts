// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AssociateTrackerConsumerCommandInput,
  AssociateTrackerConsumerCommandOutput,
} from "../commands/AssociateTrackerConsumerCommand";
import {
  BatchDeleteDevicePositionHistoryCommandInput,
  BatchDeleteDevicePositionHistoryCommandOutput,
} from "../commands/BatchDeleteDevicePositionHistoryCommand";
import {
  BatchDeleteGeofenceCommandInput,
  BatchDeleteGeofenceCommandOutput,
} from "../commands/BatchDeleteGeofenceCommand";
import {
  BatchEvaluateGeofencesCommandInput,
  BatchEvaluateGeofencesCommandOutput,
} from "../commands/BatchEvaluateGeofencesCommand";
import {
  BatchGetDevicePositionCommandInput,
  BatchGetDevicePositionCommandOutput,
} from "../commands/BatchGetDevicePositionCommand";
import { BatchPutGeofenceCommandInput, BatchPutGeofenceCommandOutput } from "../commands/BatchPutGeofenceCommand";
import {
  BatchUpdateDevicePositionCommandInput,
  BatchUpdateDevicePositionCommandOutput,
} from "../commands/BatchUpdateDevicePositionCommand";
import { CalculateRouteCommandInput, CalculateRouteCommandOutput } from "../commands/CalculateRouteCommand";
import {
  CalculateRouteMatrixCommandInput,
  CalculateRouteMatrixCommandOutput,
} from "../commands/CalculateRouteMatrixCommand";
import {
  CreateGeofenceCollectionCommandInput,
  CreateGeofenceCollectionCommandOutput,
} from "../commands/CreateGeofenceCollectionCommand";
import { CreateKeyCommandInput, CreateKeyCommandOutput } from "../commands/CreateKeyCommand";
import { CreateMapCommandInput, CreateMapCommandOutput } from "../commands/CreateMapCommand";
import { CreatePlaceIndexCommandInput, CreatePlaceIndexCommandOutput } from "../commands/CreatePlaceIndexCommand";
import {
  CreateRouteCalculatorCommandInput,
  CreateRouteCalculatorCommandOutput,
} from "../commands/CreateRouteCalculatorCommand";
import { CreateTrackerCommandInput, CreateTrackerCommandOutput } from "../commands/CreateTrackerCommand";
import {
  DeleteGeofenceCollectionCommandInput,
  DeleteGeofenceCollectionCommandOutput,
} from "../commands/DeleteGeofenceCollectionCommand";
import { DeleteKeyCommandInput, DeleteKeyCommandOutput } from "../commands/DeleteKeyCommand";
import { DeleteMapCommandInput, DeleteMapCommandOutput } from "../commands/DeleteMapCommand";
import { DeletePlaceIndexCommandInput, DeletePlaceIndexCommandOutput } from "../commands/DeletePlaceIndexCommand";
import {
  DeleteRouteCalculatorCommandInput,
  DeleteRouteCalculatorCommandOutput,
} from "../commands/DeleteRouteCalculatorCommand";
import { DeleteTrackerCommandInput, DeleteTrackerCommandOutput } from "../commands/DeleteTrackerCommand";
import {
  DescribeGeofenceCollectionCommandInput,
  DescribeGeofenceCollectionCommandOutput,
} from "../commands/DescribeGeofenceCollectionCommand";
import { DescribeKeyCommandInput, DescribeKeyCommandOutput } from "../commands/DescribeKeyCommand";
import { DescribeMapCommandInput, DescribeMapCommandOutput } from "../commands/DescribeMapCommand";
import { DescribePlaceIndexCommandInput, DescribePlaceIndexCommandOutput } from "../commands/DescribePlaceIndexCommand";
import {
  DescribeRouteCalculatorCommandInput,
  DescribeRouteCalculatorCommandOutput,
} from "../commands/DescribeRouteCalculatorCommand";
import { DescribeTrackerCommandInput, DescribeTrackerCommandOutput } from "../commands/DescribeTrackerCommand";
import {
  DisassociateTrackerConsumerCommandInput,
  DisassociateTrackerConsumerCommandOutput,
} from "../commands/DisassociateTrackerConsumerCommand";
import {
  ForecastGeofenceEventsCommandInput,
  ForecastGeofenceEventsCommandOutput,
} from "../commands/ForecastGeofenceEventsCommand";
import { GetDevicePositionCommandInput, GetDevicePositionCommandOutput } from "../commands/GetDevicePositionCommand";
import {
  GetDevicePositionHistoryCommandInput,
  GetDevicePositionHistoryCommandOutput,
} from "../commands/GetDevicePositionHistoryCommand";
import { GetGeofenceCommandInput, GetGeofenceCommandOutput } from "../commands/GetGeofenceCommand";
import { GetMapGlyphsCommandInput, GetMapGlyphsCommandOutput } from "../commands/GetMapGlyphsCommand";
import { GetMapSpritesCommandInput, GetMapSpritesCommandOutput } from "../commands/GetMapSpritesCommand";
import {
  GetMapStyleDescriptorCommandInput,
  GetMapStyleDescriptorCommandOutput,
} from "../commands/GetMapStyleDescriptorCommand";
import { GetMapTileCommandInput, GetMapTileCommandOutput } from "../commands/GetMapTileCommand";
import { GetPlaceCommandInput, GetPlaceCommandOutput } from "../commands/GetPlaceCommand";
import {
  ListDevicePositionsCommandInput,
  ListDevicePositionsCommandOutput,
} from "../commands/ListDevicePositionsCommand";
import {
  ListGeofenceCollectionsCommandInput,
  ListGeofenceCollectionsCommandOutput,
} from "../commands/ListGeofenceCollectionsCommand";
import { ListGeofencesCommandInput, ListGeofencesCommandOutput } from "../commands/ListGeofencesCommand";
import { ListKeysCommandInput, ListKeysCommandOutput } from "../commands/ListKeysCommand";
import { ListMapsCommandInput, ListMapsCommandOutput } from "../commands/ListMapsCommand";
import { ListPlaceIndexesCommandInput, ListPlaceIndexesCommandOutput } from "../commands/ListPlaceIndexesCommand";
import {
  ListRouteCalculatorsCommandInput,
  ListRouteCalculatorsCommandOutput,
} from "../commands/ListRouteCalculatorsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTrackerConsumersCommandInput,
  ListTrackerConsumersCommandOutput,
} from "../commands/ListTrackerConsumersCommand";
import { ListTrackersCommandInput, ListTrackersCommandOutput } from "../commands/ListTrackersCommand";
import { PutGeofenceCommandInput, PutGeofenceCommandOutput } from "../commands/PutGeofenceCommand";
import {
  SearchPlaceIndexForPositionCommandInput,
  SearchPlaceIndexForPositionCommandOutput,
} from "../commands/SearchPlaceIndexForPositionCommand";
import {
  SearchPlaceIndexForSuggestionsCommandInput,
  SearchPlaceIndexForSuggestionsCommandOutput,
} from "../commands/SearchPlaceIndexForSuggestionsCommand";
import {
  SearchPlaceIndexForTextCommandInput,
  SearchPlaceIndexForTextCommandOutput,
} from "../commands/SearchPlaceIndexForTextCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateGeofenceCollectionCommandInput,
  UpdateGeofenceCollectionCommandOutput,
} from "../commands/UpdateGeofenceCollectionCommand";
import { UpdateKeyCommandInput, UpdateKeyCommandOutput } from "../commands/UpdateKeyCommand";
import { UpdateMapCommandInput, UpdateMapCommandOutput } from "../commands/UpdateMapCommand";
import { UpdatePlaceIndexCommandInput, UpdatePlaceIndexCommandOutput } from "../commands/UpdatePlaceIndexCommand";
import {
  UpdateRouteCalculatorCommandInput,
  UpdateRouteCalculatorCommandOutput,
} from "../commands/UpdateRouteCalculatorCommand";
import { UpdateTrackerCommandInput, UpdateTrackerCommandOutput } from "../commands/UpdateTrackerCommand";
import {
  VerifyDevicePositionCommandInput,
  VerifyDevicePositionCommandOutput,
} from "../commands/VerifyDevicePositionCommand";
import { LocationServiceException as __BaseException } from "../models/LocationServiceException";
import {
  AccessDeniedException,
  ApiKeyFilter,
  ApiKeyRestrictions,
  BatchEvaluateGeofencesError,
  BatchPutGeofenceRequestEntry,
  BatchPutGeofenceSuccess,
  BatchUpdateDevicePositionError,
  CalculateRouteCarModeOptions,
  CalculateRouteSummary,
  CalculateRouteTruckModeOptions,
  CellSignals,
  Circle,
  ConflictException,
  DataSourceConfiguration,
  DevicePosition,
  DevicePositionUpdate,
  DeviceState,
  ForecastedEvent,
  ForecastGeofenceEventsDeviceState,
  GeofenceGeometry,
  InferredState,
  InternalServerException,
  Leg,
  LegGeometry,
  ListDevicePositionsResponseEntry,
  ListGeofenceCollectionsResponseEntry,
  ListGeofenceResponseEntry,
  ListKeysResponseEntry,
  ListMapsResponseEntry,
  ListPlaceIndexesResponseEntry,
  ListRouteCalculatorsResponseEntry,
  ListTrackersResponseEntry,
  LteCellDetails,
  LteLocalId,
  LteNetworkMeasurements,
  MapConfiguration,
  MapConfigurationUpdate,
  Place,
  PlaceGeometry,
  PositionalAccuracy,
  ResourceNotFoundException,
  RouteMatrixEntry,
  SearchForPositionResult,
  SearchForTextResult,
  SearchPlaceIndexForPositionSummary,
  SearchPlaceIndexForSuggestionsSummary,
  SearchPlaceIndexForTextSummary,
  ServiceQuotaExceededException,
  Step,
  ThrottlingException,
  TrackingFilterGeometry,
  TruckDimensions,
  TruckWeight,
  ValidationException,
  ValidationExceptionField,
  WiFiAccessPoint,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateTrackerConsumerCommand
 */
export const se_AssociateTrackerConsumerCommand = async (
  input: AssociateTrackerConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tracking/v0/trackers/{TrackerName}/consumers");
  b.p("TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConsumerArn: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand
 */
export const se_BatchDeleteDevicePositionHistoryCommand = async (
  input: BatchDeleteDevicePositionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tracking/v0/trackers/{TrackerName}/delete-positions");
  b.p("TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeviceIds: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDeleteGeofenceCommand
 */
export const se_BatchDeleteGeofenceCommand = async (
  input: BatchDeleteGeofenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/geofencing/v0/collections/{CollectionName}/delete-geofences");
  b.p("CollectionName", () => input.CollectionName!, "{CollectionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      GeofenceIds: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchEvaluateGeofencesCommand
 */
export const se_BatchEvaluateGeofencesCommand = async (
  input: BatchEvaluateGeofencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/geofencing/v0/collections/{CollectionName}/positions");
  b.p("CollectionName", () => input.CollectionName!, "{CollectionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DevicePositionUpdates: (_) => se_DevicePositionUpdateList(_, context),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetDevicePositionCommand
 */
export const se_BatchGetDevicePositionCommand = async (
  input: BatchGetDevicePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tracking/v0/trackers/{TrackerName}/get-positions");
  b.p("TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeviceIds: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchPutGeofenceCommand
 */
export const se_BatchPutGeofenceCommand = async (
  input: BatchPutGeofenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/geofencing/v0/collections/{CollectionName}/put-geofences");
  b.p("CollectionName", () => input.CollectionName!, "{CollectionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Entries: (_) => se_BatchPutGeofenceRequestEntryList(_, context),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUpdateDevicePositionCommand
 */
export const se_BatchUpdateDevicePositionCommand = async (
  input: BatchUpdateDevicePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tracking/v0/trackers/{TrackerName}/positions");
  b.p("TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Updates: (_) => se_DevicePositionUpdateList(_, context),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CalculateRouteCommand
 */
export const se_CalculateRouteCommand = async (
  input: CalculateRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/routes/v0/calculators/{CalculatorName}/calculate/route");
  b.p("CalculatorName", () => input.CalculatorName!, "{CalculatorName}", false);
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ArrivalTime: (_) => __serializeDateTime(_),
      CarModeOptions: (_) => _json(_),
      DepartNow: [],
      DeparturePosition: (_) => se_Position(_, context),
      DepartureTime: (_) => __serializeDateTime(_),
      DestinationPosition: (_) => se_Position(_, context),
      DistanceUnit: [],
      IncludeLegGeometry: [],
      OptimizeFor: [],
      TravelMode: [],
      TruckModeOptions: (_) => se_CalculateRouteTruckModeOptions(_, context),
      WaypointPositions: (_) => se_WaypointPositionList(_, context),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "routes." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
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
  b.bp("/routes/v0/calculators/{CalculatorName}/calculate/route-matrix");
  b.p("CalculatorName", () => input.CalculatorName!, "{CalculatorName}", false);
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      CarModeOptions: (_) => _json(_),
      DepartNow: [],
      DeparturePositions: (_) => se_PositionList(_, context),
      DepartureTime: (_) => __serializeDateTime(_),
      DestinationPositions: (_) => se_PositionList(_, context),
      DistanceUnit: [],
      TravelMode: [],
      TruckModeOptions: (_) => se_CalculateRouteTruckModeOptions(_, context),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "routes." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGeofenceCollectionCommand
 */
export const se_CreateGeofenceCollectionCommand = async (
  input: CreateGeofenceCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/geofencing/v0/collections");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CollectionName: [],
      Description: [],
      KmsKeyId: [],
      PricingPlan: [],
      PricingPlanDataSource: [],
      Tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateKeyCommand
 */
export const se_CreateKeyCommand = async (
  input: CreateKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/metadata/v0/keys");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      ExpireTime: (_) => __serializeDateTime(_),
      KeyName: [],
      NoExpiry: [],
      Restrictions: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.metadata." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMapCommand
 */
export const se_CreateMapCommand = async (
  input: CreateMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/maps/v0/maps");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Configuration: (_) => _json(_),
      Description: [],
      MapName: [],
      PricingPlan: [],
      Tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePlaceIndexCommand
 */
export const se_CreatePlaceIndexCommand = async (
  input: CreatePlaceIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/places/v0/indexes");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DataSource: [],
      DataSourceConfiguration: (_) => _json(_),
      Description: [],
      IndexName: [],
      PricingPlan: [],
      Tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRouteCalculatorCommand
 */
export const se_CreateRouteCalculatorCommand = async (
  input: CreateRouteCalculatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/routes/v0/calculators");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CalculatorName: [],
      DataSource: [],
      Description: [],
      PricingPlan: [],
      Tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.routes." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTrackerCommand
 */
export const se_CreateTrackerCommand = async (
  input: CreateTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tracking/v0/trackers");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      EventBridgeEnabled: [],
      KmsKeyEnableGeospatialQueries: [],
      KmsKeyId: [],
      PositionFiltering: [],
      PricingPlan: [],
      PricingPlanDataSource: [],
      Tags: (_) => _json(_),
      TrackerName: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGeofenceCollectionCommand
 */
export const se_DeleteGeofenceCollectionCommand = async (
  input: DeleteGeofenceCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/geofencing/v0/collections/{CollectionName}");
  b.p("CollectionName", () => input.CollectionName!, "{CollectionName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteKeyCommand
 */
export const se_DeleteKeyCommand = async (
  input: DeleteKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/metadata/v0/keys/{KeyName}");
  b.p("KeyName", () => input.KeyName!, "{KeyName}", false);
  const query: any = map({
    [_fD]: [() => input.ForceDelete !== void 0, () => input[_FD]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.metadata." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMapCommand
 */
export const se_DeleteMapCommand = async (
  input: DeleteMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/maps/v0/maps/{MapName}");
  b.p("MapName", () => input.MapName!, "{MapName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePlaceIndexCommand
 */
export const se_DeletePlaceIndexCommand = async (
  input: DeletePlaceIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/places/v0/indexes/{IndexName}");
  b.p("IndexName", () => input.IndexName!, "{IndexName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRouteCalculatorCommand
 */
export const se_DeleteRouteCalculatorCommand = async (
  input: DeleteRouteCalculatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/routes/v0/calculators/{CalculatorName}");
  b.p("CalculatorName", () => input.CalculatorName!, "{CalculatorName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.routes." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTrackerCommand
 */
export const se_DeleteTrackerCommand = async (
  input: DeleteTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tracking/v0/trackers/{TrackerName}");
  b.p("TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeGeofenceCollectionCommand
 */
export const se_DescribeGeofenceCollectionCommand = async (
  input: DescribeGeofenceCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/geofencing/v0/collections/{CollectionName}");
  b.p("CollectionName", () => input.CollectionName!, "{CollectionName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeKeyCommand
 */
export const se_DescribeKeyCommand = async (
  input: DescribeKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/metadata/v0/keys/{KeyName}");
  b.p("KeyName", () => input.KeyName!, "{KeyName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.metadata." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeMapCommand
 */
export const se_DescribeMapCommand = async (
  input: DescribeMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/maps/v0/maps/{MapName}");
  b.p("MapName", () => input.MapName!, "{MapName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribePlaceIndexCommand
 */
export const se_DescribePlaceIndexCommand = async (
  input: DescribePlaceIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/places/v0/indexes/{IndexName}");
  b.p("IndexName", () => input.IndexName!, "{IndexName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRouteCalculatorCommand
 */
export const se_DescribeRouteCalculatorCommand = async (
  input: DescribeRouteCalculatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/routes/v0/calculators/{CalculatorName}");
  b.p("CalculatorName", () => input.CalculatorName!, "{CalculatorName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.routes." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeTrackerCommand
 */
export const se_DescribeTrackerCommand = async (
  input: DescribeTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tracking/v0/trackers/{TrackerName}");
  b.p("TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateTrackerConsumerCommand
 */
export const se_DisassociateTrackerConsumerCommand = async (
  input: DisassociateTrackerConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}");
  b.p("TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  b.p("ConsumerArn", () => input.ConsumerArn!, "{ConsumerArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ForecastGeofenceEventsCommand
 */
export const se_ForecastGeofenceEventsCommand = async (
  input: ForecastGeofenceEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/geofencing/v0/collections/{CollectionName}/forecast-geofence-events");
  b.p("CollectionName", () => input.CollectionName!, "{CollectionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeviceState: (_) => se_ForecastGeofenceEventsDeviceState(_, context),
      DistanceUnit: [],
      MaxResults: [],
      NextToken: [],
      SpeedUnit: [],
      TimeHorizonMinutes: (_) => __serializeFloat(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDevicePositionCommand
 */
export const se_GetDevicePositionCommand = async (
  input: GetDevicePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest");
  b.p("TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  b.p("DeviceId", () => input.DeviceId!, "{DeviceId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDevicePositionHistoryCommand
 */
export const se_GetDevicePositionHistoryCommand = async (
  input: GetDevicePositionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions");
  b.p("TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  b.p("DeviceId", () => input.DeviceId!, "{DeviceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EndTimeExclusive: (_) => __serializeDateTime(_),
      MaxResults: [],
      NextToken: [],
      StartTimeInclusive: (_) => __serializeDateTime(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGeofenceCommand
 */
export const se_GetGeofenceCommand = async (
  input: GetGeofenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}");
  b.p("CollectionName", () => input.CollectionName!, "{CollectionName}", false);
  b.p("GeofenceId", () => input.GeofenceId!, "{GeofenceId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMapGlyphsCommand
 */
export const se_GetMapGlyphsCommand = async (
  input: GetMapGlyphsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}");
  b.p("MapName", () => input.MapName!, "{MapName}", false);
  b.p("FontStack", () => input.FontStack!, "{FontStack}", false);
  b.p("FontUnicodeRange", () => input.FontUnicodeRange!, "{FontUnicodeRange}", false);
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMapSpritesCommand
 */
export const se_GetMapSpritesCommand = async (
  input: GetMapSpritesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/maps/v0/maps/{MapName}/sprites/{FileName}");
  b.p("MapName", () => input.MapName!, "{MapName}", false);
  b.p("FileName", () => input.FileName!, "{FileName}", false);
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMapStyleDescriptorCommand
 */
export const se_GetMapStyleDescriptorCommand = async (
  input: GetMapStyleDescriptorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/maps/v0/maps/{MapName}/style-descriptor");
  b.p("MapName", () => input.MapName!, "{MapName}", false);
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMapTileCommand
 */
export const se_GetMapTileCommand = async (
  input: GetMapTileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}");
  b.p("MapName", () => input.MapName!, "{MapName}", false);
  b.p("Z", () => input.Z!, "{Z}", false);
  b.p("X", () => input.X!, "{X}", false);
  b.p("Y", () => input.Y!, "{Y}", false);
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPlaceCommand
 */
export const se_GetPlaceCommand = async (
  input: GetPlaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/places/v0/indexes/{IndexName}/places/{PlaceId}");
  b.p("IndexName", () => input.IndexName!, "{IndexName}", false);
  b.p("PlaceId", () => input.PlaceId!, "{PlaceId}", false);
  const query: any = map({
    [_l]: [, input[_L]!],
    [_k]: [, input[_K]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDevicePositionsCommand
 */
export const se_ListDevicePositionsCommand = async (
  input: ListDevicePositionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tracking/v0/trackers/{TrackerName}/list-positions");
  b.p("TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      FilterGeometry: (_) => se_TrackingFilterGeometry(_, context),
      MaxResults: [],
      NextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGeofenceCollectionsCommand
 */
export const se_ListGeofenceCollectionsCommand = async (
  input: ListGeofenceCollectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/geofencing/v0/list-collections");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGeofencesCommand
 */
export const se_ListGeofencesCommand = async (
  input: ListGeofencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/geofencing/v0/collections/{CollectionName}/list-geofences");
  b.p("CollectionName", () => input.CollectionName!, "{CollectionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListKeysCommand
 */
export const se_ListKeysCommand = async (
  input: ListKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/metadata/v0/list-keys");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filter: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.metadata." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMapsCommand
 */
export const se_ListMapsCommand = async (
  input: ListMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/maps/v0/list-maps");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPlaceIndexesCommand
 */
export const se_ListPlaceIndexesCommand = async (
  input: ListPlaceIndexesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/places/v0/list-indexes");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRouteCalculatorsCommand
 */
export const se_ListRouteCalculatorsCommand = async (
  input: ListRouteCalculatorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/routes/v0/list-calculators");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.routes." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.metadata." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTrackerConsumersCommand
 */
export const se_ListTrackerConsumersCommand = async (
  input: ListTrackerConsumersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tracking/v0/trackers/{TrackerName}/list-consumers");
  b.p("TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTrackersCommand
 */
export const se_ListTrackersCommand = async (
  input: ListTrackersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tracking/v0/list-trackers");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutGeofenceCommand
 */
export const se_PutGeofenceCommand = async (
  input: PutGeofenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}");
  b.p("CollectionName", () => input.CollectionName!, "{CollectionName}", false);
  b.p("GeofenceId", () => input.GeofenceId!, "{GeofenceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      GeofenceProperties: (_) => _json(_),
      Geometry: (_) => se_GeofenceGeometry(_, context),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchPlaceIndexForPositionCommand
 */
export const se_SearchPlaceIndexForPositionCommand = async (
  input: SearchPlaceIndexForPositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/places/v0/indexes/{IndexName}/search/position");
  b.p("IndexName", () => input.IndexName!, "{IndexName}", false);
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Language: [],
      MaxResults: [],
      Position: (_) => se_Position(_, context),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchPlaceIndexForSuggestionsCommand
 */
export const se_SearchPlaceIndexForSuggestionsCommand = async (
  input: SearchPlaceIndexForSuggestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/places/v0/indexes/{IndexName}/search/suggestions");
  b.p("IndexName", () => input.IndexName!, "{IndexName}", false);
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      BiasPosition: (_) => se_Position(_, context),
      FilterBBox: (_) => se_BoundingBox(_, context),
      FilterCategories: (_) => _json(_),
      FilterCountries: (_) => _json(_),
      Language: [],
      MaxResults: [],
      Text: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchPlaceIndexForTextCommand
 */
export const se_SearchPlaceIndexForTextCommand = async (
  input: SearchPlaceIndexForTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/places/v0/indexes/{IndexName}/search/text");
  b.p("IndexName", () => input.IndexName!, "{IndexName}", false);
  const query: any = map({
    [_k]: [, input[_K]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      BiasPosition: (_) => se_Position(_, context),
      FilterBBox: (_) => se_BoundingBox(_, context),
      FilterCategories: (_) => _json(_),
      FilterCountries: (_) => _json(_),
      Language: [],
      MaxResults: [],
      Text: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.metadata." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.metadata." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGeofenceCollectionCommand
 */
export const se_UpdateGeofenceCollectionCommand = async (
  input: UpdateGeofenceCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/geofencing/v0/collections/{CollectionName}");
  b.p("CollectionName", () => input.CollectionName!, "{CollectionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      PricingPlan: [],
      PricingPlanDataSource: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateKeyCommand
 */
export const se_UpdateKeyCommand = async (
  input: UpdateKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/metadata/v0/keys/{KeyName}");
  b.p("KeyName", () => input.KeyName!, "{KeyName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      ExpireTime: (_) => __serializeDateTime(_),
      ForceUpdate: [],
      NoExpiry: [],
      Restrictions: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.metadata." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMapCommand
 */
export const se_UpdateMapCommand = async (
  input: UpdateMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/maps/v0/maps/{MapName}");
  b.p("MapName", () => input.MapName!, "{MapName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConfigurationUpdate: (_) => _json(_),
      Description: [],
      PricingPlan: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePlaceIndexCommand
 */
export const se_UpdatePlaceIndexCommand = async (
  input: UpdatePlaceIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/places/v0/indexes/{IndexName}");
  b.p("IndexName", () => input.IndexName!, "{IndexName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DataSourceConfiguration: (_) => _json(_),
      Description: [],
      PricingPlan: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRouteCalculatorCommand
 */
export const se_UpdateRouteCalculatorCommand = async (
  input: UpdateRouteCalculatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/routes/v0/calculators/{CalculatorName}");
  b.p("CalculatorName", () => input.CalculatorName!, "{CalculatorName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      PricingPlan: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.routes." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTrackerCommand
 */
export const se_UpdateTrackerCommand = async (
  input: UpdateTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tracking/v0/trackers/{TrackerName}");
  b.p("TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      EventBridgeEnabled: [],
      KmsKeyEnableGeospatialQueries: [],
      PositionFiltering: [],
      PricingPlan: [],
      PricingPlanDataSource: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1VerifyDevicePositionCommand
 */
export const se_VerifyDevicePositionCommand = async (
  input: VerifyDevicePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tracking/v0/trackers/{TrackerName}/positions/verify");
  b.p("TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeviceState: (_) => se_DeviceState(_, context),
      DistanceUnit: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateTrackerConsumerCommand
 */
export const de_AssociateTrackerConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTrackerConsumerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand
 */
export const de_BatchDeleteDevicePositionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDevicePositionHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteGeofenceCommand
 */
export const de_BatchDeleteGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchEvaluateGeofencesCommand
 */
export const de_BatchEvaluateGeofencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEvaluateGeofencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: (_) => de_BatchEvaluateGeofencesErrorList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetDevicePositionCommand
 */
export const de_BatchGetDevicePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDevicePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DevicePositions: (_) => de_DevicePositionList(_, context),
    Errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchPutGeofenceCommand
 */
export const de_BatchPutGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: _json,
    Successes: (_) => de_BatchPutGeofenceSuccessList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateDevicePositionCommand
 */
export const de_BatchUpdateDevicePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateDevicePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Errors: (_) => de_BatchUpdateDevicePositionErrorList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CalculateRouteCommand
 */
export const de_CalculateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CalculateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Legs: (_) => de_LegList(_, context),
    Summary: (_) => de_CalculateRouteSummary(_, context),
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
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RouteMatrix: (_) => de_RouteMatrix(_, context),
    SnappedDeparturePositions: (_) => de_PositionList(_, context),
    SnappedDestinationPositions: (_) => de_PositionList(_, context),
    Summary: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGeofenceCollectionCommand
 */
export const de_CreateGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CollectionArn: __expectString,
    CollectionName: __expectString,
    CreateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateKeyCommand
 */
export const de_CreateKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Key: __expectString,
    KeyArn: __expectString,
    KeyName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMapCommand
 */
export const de_CreateMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    MapArn: __expectString,
    MapName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePlaceIndexCommand
 */
export const de_CreatePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    IndexArn: __expectString,
    IndexName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRouteCalculatorCommand
 */
export const de_CreateRouteCalculatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCalculatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CalculatorArn: __expectString,
    CalculatorName: __expectString,
    CreateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTrackerCommand
 */
export const de_CreateTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    TrackerArn: __expectString,
    TrackerName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGeofenceCollectionCommand
 */
export const de_DeleteGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteKeyCommand
 */
export const de_DeleteKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMapCommand
 */
export const de_DeleteMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePlaceIndexCommand
 */
export const de_DeletePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRouteCalculatorCommand
 */
export const de_DeleteRouteCalculatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCalculatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTrackerCommand
 */
export const de_DeleteTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeGeofenceCollectionCommand
 */
export const de_DescribeGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CollectionArn: __expectString,
    CollectionName: __expectString,
    CreateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    GeofenceCount: __expectInt32,
    KmsKeyId: __expectString,
    PricingPlan: __expectString,
    PricingPlanDataSource: __expectString,
    Tags: _json,
    UpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeKeyCommand
 */
export const de_DescribeKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    ExpireTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Key: __expectString,
    KeyArn: __expectString,
    KeyName: __expectString,
    Restrictions: _json,
    Tags: _json,
    UpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeMapCommand
 */
export const de_DescribeMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Configuration: _json,
    CreateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSource: __expectString,
    Description: __expectString,
    MapArn: __expectString,
    MapName: __expectString,
    PricingPlan: __expectString,
    Tags: _json,
    UpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePlaceIndexCommand
 */
export const de_DescribePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSource: __expectString,
    DataSourceConfiguration: _json,
    Description: __expectString,
    IndexArn: __expectString,
    IndexName: __expectString,
    PricingPlan: __expectString,
    Tags: _json,
    UpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRouteCalculatorCommand
 */
export const de_DescribeRouteCalculatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouteCalculatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CalculatorArn: __expectString,
    CalculatorName: __expectString,
    CreateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSource: __expectString,
    Description: __expectString,
    PricingPlan: __expectString,
    Tags: _json,
    UpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTrackerCommand
 */
export const de_DescribeTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    EventBridgeEnabled: __expectBoolean,
    KmsKeyEnableGeospatialQueries: __expectBoolean,
    KmsKeyId: __expectString,
    PositionFiltering: __expectString,
    PricingPlan: __expectString,
    PricingPlanDataSource: __expectString,
    Tags: _json,
    TrackerArn: __expectString,
    TrackerName: __expectString,
    UpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateTrackerConsumerCommand
 */
export const de_DisassociateTrackerConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTrackerConsumerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ForecastGeofenceEventsCommand
 */
export const de_ForecastGeofenceEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ForecastGeofenceEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DistanceUnit: __expectString,
    ForecastedEvents: (_) => de_ForecastedEventsList(_, context),
    NextToken: __expectString,
    SpeedUnit: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDevicePositionCommand
 */
export const de_GetDevicePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Accuracy: (_) => de_PositionalAccuracy(_, context),
    DeviceId: __expectString,
    Position: (_) => de_Position(_, context),
    PositionProperties: _json,
    ReceivedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SampleTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDevicePositionHistoryCommand
 */
export const de_GetDevicePositionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePositionHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DevicePositions: (_) => de_DevicePositionList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGeofenceCommand
 */
export const de_GetGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    GeofenceId: __expectString,
    GeofenceProperties: _json,
    Geometry: (_) => de_GeofenceGeometry(_, context),
    Status: __expectString,
    UpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMapGlyphsCommand
 */
export const de_GetMapGlyphsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapGlyphsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CT]: [, output.headers[_ct]],
    [_CC]: [, output.headers[_cc]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetMapSpritesCommand
 */
export const de_GetMapSpritesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapSpritesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CT]: [, output.headers[_ct]],
    [_CC]: [, output.headers[_cc]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetMapStyleDescriptorCommand
 */
export const de_GetMapStyleDescriptorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapStyleDescriptorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CT]: [, output.headers[_ct]],
    [_CC]: [, output.headers[_cc]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetMapTileCommand
 */
export const de_GetMapTileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapTileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_CT]: [, output.headers[_ct]],
    [_CC]: [, output.headers[_cc]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetPlaceCommand
 */
export const de_GetPlaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Place: (_) => de_Place(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDevicePositionsCommand
 */
export const de_ListDevicePositionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicePositionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Entries: (_) => de_ListDevicePositionsResponseEntryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGeofenceCollectionsCommand
 */
export const de_ListGeofenceCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeofenceCollectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Entries: (_) => de_ListGeofenceCollectionsResponseEntryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGeofencesCommand
 */
export const de_ListGeofencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeofencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Entries: (_) => de_ListGeofenceResponseEntryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListKeysCommand
 */
export const de_ListKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Entries: (_) => de_ListKeysResponseEntryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMapsCommand
 */
export const de_ListMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Entries: (_) => de_ListMapsResponseEntryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPlaceIndexesCommand
 */
export const de_ListPlaceIndexesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaceIndexesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Entries: (_) => de_ListPlaceIndexesResponseEntryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRouteCalculatorsCommand
 */
export const de_ListRouteCalculatorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRouteCalculatorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Entries: (_) => de_ListRouteCalculatorsResponseEntryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTrackerConsumersCommand
 */
export const de_ListTrackerConsumersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrackerConsumersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConsumerArns: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTrackersCommand
 */
export const de_ListTrackersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrackersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Entries: (_) => de_ListTrackersResponseEntryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutGeofenceCommand
 */
export const de_PutGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    GeofenceId: __expectString,
    UpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchPlaceIndexForPositionCommand
 */
export const de_SearchPlaceIndexForPositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForPositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Results: (_) => de_SearchForPositionResultList(_, context),
    Summary: (_) => de_SearchPlaceIndexForPositionSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommand
 */
export const de_SearchPlaceIndexForSuggestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForSuggestionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Results: _json,
    Summary: (_) => de_SearchPlaceIndexForSuggestionsSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchPlaceIndexForTextCommand
 */
export const de_SearchPlaceIndexForTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForTextCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Results: (_) => de_SearchForTextResultList(_, context),
    Summary: (_) => de_SearchPlaceIndexForTextSummary(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGeofenceCollectionCommand
 */
export const de_UpdateGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CollectionArn: __expectString,
    CollectionName: __expectString,
    UpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateKeyCommand
 */
export const de_UpdateKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    KeyArn: __expectString,
    KeyName: __expectString,
    UpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMapCommand
 */
export const de_UpdateMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MapArn: __expectString,
    MapName: __expectString,
    UpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePlaceIndexCommand
 */
export const de_UpdatePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IndexArn: __expectString,
    IndexName: __expectString,
    UpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRouteCalculatorCommand
 */
export const de_UpdateRouteCalculatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCalculatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CalculatorArn: __expectString,
    CalculatorName: __expectString,
    UpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTrackerCommand
 */
export const de_UpdateTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TrackerArn: __expectString,
    TrackerName: __expectString,
    UpdateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1VerifyDevicePositionCommand
 */
export const de_VerifyDevicePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyDevicePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeviceId: __expectString,
    DistanceUnit: __expectString,
    InferredState: (_) => de_InferredState(_, context),
    ReceivedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SampleTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
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
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.location#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.location#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
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
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
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

// se_ApiKeyActionList omitted.

// se_ApiKeyFilter omitted.

// se_ApiKeyRestrictions omitted.

/**
 * serializeAws_restJson1BatchPutGeofenceRequestEntry
 */
const se_BatchPutGeofenceRequestEntry = (input: BatchPutGeofenceRequestEntry, context: __SerdeContext): any => {
  return take(input, {
    GeofenceId: [],
    GeofenceProperties: _json,
    Geometry: (_) => se_GeofenceGeometry(_, context),
  });
};

/**
 * serializeAws_restJson1BatchPutGeofenceRequestEntryList
 */
const se_BatchPutGeofenceRequestEntryList = (input: BatchPutGeofenceRequestEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchPutGeofenceRequestEntry(entry, context);
    });
};

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

// se_CalculateRouteCarModeOptions omitted.

/**
 * serializeAws_restJson1CalculateRouteTruckModeOptions
 */
const se_CalculateRouteTruckModeOptions = (input: CalculateRouteTruckModeOptions, context: __SerdeContext): any => {
  return take(input, {
    AvoidFerries: [],
    AvoidTolls: [],
    Dimensions: (_) => se_TruckDimensions(_, context),
    Weight: (_) => se_TruckWeight(_, context),
  });
};

/**
 * serializeAws_restJson1CellSignals
 */
const se_CellSignals = (input: CellSignals, context: __SerdeContext): any => {
  return take(input, {
    LteCellDetails: (_) => se_LteCellDetailsList(_, context),
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

// se_CountryCodeList omitted.

// se_CustomLayerList omitted.

// se_DataSourceConfiguration omitted.

// se_DeviceIdsList omitted.

/**
 * serializeAws_restJson1DevicePositionUpdate
 */
const se_DevicePositionUpdate = (input: DevicePositionUpdate, context: __SerdeContext): any => {
  return take(input, {
    Accuracy: (_) => se_PositionalAccuracy(_, context),
    DeviceId: [],
    Position: (_) => se_Position(_, context),
    PositionProperties: _json,
    SampleTime: __serializeDateTime,
  });
};

/**
 * serializeAws_restJson1DevicePositionUpdateList
 */
const se_DevicePositionUpdateList = (input: DevicePositionUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DevicePositionUpdate(entry, context);
    });
};

/**
 * serializeAws_restJson1DeviceState
 */
const se_DeviceState = (input: DeviceState, context: __SerdeContext): any => {
  return take(input, {
    Accuracy: (_) => se_PositionalAccuracy(_, context),
    CellSignals: (_) => se_CellSignals(_, context),
    DeviceId: [],
    Ipv4Address: [],
    Position: (_) => se_Position(_, context),
    SampleTime: __serializeDateTime,
    WiFiAccessPoints: _json,
  });
};

// se_FilterPlaceCategoryList omitted.

/**
 * serializeAws_restJson1ForecastGeofenceEventsDeviceState
 */
const se_ForecastGeofenceEventsDeviceState = (
  input: ForecastGeofenceEventsDeviceState,
  context: __SerdeContext
): any => {
  return take(input, {
    Position: (_) => se_Position(_, context),
    Speed: __serializeFloat,
  });
};

// se_GeoArnList omitted.

/**
 * serializeAws_restJson1GeofenceGeometry
 */
const se_GeofenceGeometry = (input: GeofenceGeometry, context: __SerdeContext): any => {
  return take(input, {
    Circle: (_) => se_Circle(_, context),
    Geobuf: context.base64Encoder,
    Polygon: (_) => se_LinearRings(_, context),
  });
};

// se_IdList omitted.

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
 * serializeAws_restJson1LteCellDetails
 */
const se_LteCellDetails = (input: LteCellDetails, context: __SerdeContext): any => {
  return take(input, {
    CellId: [],
    LocalId: _json,
    Mcc: [],
    Mnc: [],
    NetworkMeasurements: (_) => se_LteNetworkMeasurementsList(_, context),
    NrCapable: [],
    Rsrp: [],
    Rsrq: __serializeFloat,
    Tac: [],
    TimingAdvance: [],
  });
};

/**
 * serializeAws_restJson1LteCellDetailsList
 */
const se_LteCellDetailsList = (input: LteCellDetails[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LteCellDetails(entry, context);
    });
};

// se_LteLocalId omitted.

/**
 * serializeAws_restJson1LteNetworkMeasurements
 */
const se_LteNetworkMeasurements = (input: LteNetworkMeasurements, context: __SerdeContext): any => {
  return take(input, {
    CellId: [],
    Earfcn: [],
    Pci: [],
    Rsrp: [],
    Rsrq: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1LteNetworkMeasurementsList
 */
const se_LteNetworkMeasurementsList = (input: LteNetworkMeasurements[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LteNetworkMeasurements(entry, context);
    });
};

// se_MapConfiguration omitted.

// se_MapConfigurationUpdate omitted.

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

/**
 * serializeAws_restJson1PositionalAccuracy
 */
const se_PositionalAccuracy = (input: PositionalAccuracy, context: __SerdeContext): any => {
  return take(input, {
    Horizontal: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1PositionList
 */
const se_PositionList = (input: number[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Position(entry, context);
    });
};

// se_PropertyMap omitted.

// se_RefererPatternList omitted.

// se_TagMap omitted.

/**
 * serializeAws_restJson1TrackingFilterGeometry
 */
const se_TrackingFilterGeometry = (input: TrackingFilterGeometry, context: __SerdeContext): any => {
  return take(input, {
    Polygon: (_) => se_LinearRings(_, context),
  });
};

/**
 * serializeAws_restJson1TruckDimensions
 */
const se_TruckDimensions = (input: TruckDimensions, context: __SerdeContext): any => {
  return take(input, {
    Height: __serializeFloat,
    Length: __serializeFloat,
    Unit: [],
    Width: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1TruckWeight
 */
const se_TruckWeight = (input: TruckWeight, context: __SerdeContext): any => {
  return take(input, {
    Total: __serializeFloat,
    Unit: [],
  });
};

/**
 * serializeAws_restJson1WaypointPositionList
 */
const se_WaypointPositionList = (input: number[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Position(entry, context);
    });
};

// se_WiFiAccessPoint omitted.

// se_WiFiAccessPointList omitted.

// de_ApiKeyActionList omitted.

// de_ApiKeyRestrictions omitted.

// de_ArnList omitted.

// de_BatchDeleteDevicePositionHistoryError omitted.

// de_BatchDeleteDevicePositionHistoryErrorList omitted.

// de_BatchDeleteGeofenceError omitted.

// de_BatchDeleteGeofenceErrorList omitted.

/**
 * deserializeAws_restJson1BatchEvaluateGeofencesError
 */
const de_BatchEvaluateGeofencesError = (output: any, context: __SerdeContext): BatchEvaluateGeofencesError => {
  return take(output, {
    DeviceId: __expectString,
    Error: _json,
    SampleTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1BatchEvaluateGeofencesErrorList
 */
const de_BatchEvaluateGeofencesErrorList = (output: any, context: __SerdeContext): BatchEvaluateGeofencesError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchEvaluateGeofencesError(entry, context);
    });
  return retVal;
};

// de_BatchGetDevicePositionError omitted.

// de_BatchGetDevicePositionErrorList omitted.

// de_BatchItemError omitted.

// de_BatchPutGeofenceError omitted.

// de_BatchPutGeofenceErrorList omitted.

/**
 * deserializeAws_restJson1BatchPutGeofenceSuccess
 */
const de_BatchPutGeofenceSuccess = (output: any, context: __SerdeContext): BatchPutGeofenceSuccess => {
  return take(output, {
    CreateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    GeofenceId: __expectString,
    UpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1BatchPutGeofenceSuccessList
 */
const de_BatchPutGeofenceSuccessList = (output: any, context: __SerdeContext): BatchPutGeofenceSuccess[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchPutGeofenceSuccess(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchUpdateDevicePositionError
 */
const de_BatchUpdateDevicePositionError = (output: any, context: __SerdeContext): BatchUpdateDevicePositionError => {
  return take(output, {
    DeviceId: __expectString,
    Error: _json,
    SampleTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1BatchUpdateDevicePositionErrorList
 */
const de_BatchUpdateDevicePositionErrorList = (
  output: any,
  context: __SerdeContext
): BatchUpdateDevicePositionError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchUpdateDevicePositionError(entry, context);
    });
  return retVal;
};

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

// de_CalculateRouteMatrixSummary omitted.

/**
 * deserializeAws_restJson1CalculateRouteSummary
 */
const de_CalculateRouteSummary = (output: any, context: __SerdeContext): CalculateRouteSummary => {
  return take(output, {
    DataSource: __expectString,
    Distance: __limitedParseDouble,
    DistanceUnit: __expectString,
    DurationSeconds: __limitedParseDouble,
    RouteBBox: (_: any) => de_BoundingBox(_, context),
  }) as any;
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

// de_CountryCodeList omitted.

// de_CustomLayerList omitted.

// de_DataSourceConfiguration omitted.

/**
 * deserializeAws_restJson1DevicePosition
 */
const de_DevicePosition = (output: any, context: __SerdeContext): DevicePosition => {
  return take(output, {
    Accuracy: (_: any) => de_PositionalAccuracy(_, context),
    DeviceId: __expectString,
    Position: (_: any) => de_Position(_, context),
    PositionProperties: _json,
    ReceivedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SampleTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1DevicePositionList
 */
const de_DevicePositionList = (output: any, context: __SerdeContext): DevicePosition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DevicePosition(entry, context);
    });
  return retVal;
};

// de_FilterPlaceCategoryList omitted.

/**
 * deserializeAws_restJson1ForecastedEvent
 */
const de_ForecastedEvent = (output: any, context: __SerdeContext): ForecastedEvent => {
  return take(output, {
    EventId: __expectString,
    EventType: __expectString,
    ForecastedBreachTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    GeofenceId: __expectString,
    GeofenceProperties: _json,
    IsDeviceInGeofence: __expectBoolean,
    NearestDistance: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ForecastedEventsList
 */
const de_ForecastedEventsList = (output: any, context: __SerdeContext): ForecastedEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ForecastedEvent(entry, context);
    });
  return retVal;
};

// de_GeoArnList omitted.

/**
 * deserializeAws_restJson1GeofenceGeometry
 */
const de_GeofenceGeometry = (output: any, context: __SerdeContext): GeofenceGeometry => {
  return take(output, {
    Circle: (_: any) => de_Circle(_, context),
    Geobuf: context.base64Decoder,
    Polygon: (_: any) => de_LinearRings(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1InferredState
 */
const de_InferredState = (output: any, context: __SerdeContext): InferredState => {
  return take(output, {
    Accuracy: (_: any) => de_PositionalAccuracy(_, context),
    DeviationDistance: __limitedParseDouble,
    Position: (_: any) => de_Position(_, context),
    ProxyDetected: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1Leg
 */
const de_Leg = (output: any, context: __SerdeContext): Leg => {
  return take(output, {
    Distance: __limitedParseDouble,
    DurationSeconds: __limitedParseDouble,
    EndPosition: (_: any) => de_Position(_, context),
    Geometry: (_: any) => de_LegGeometry(_, context),
    StartPosition: (_: any) => de_Position(_, context),
    Steps: (_: any) => de_StepList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1LegGeometry
 */
const de_LegGeometry = (output: any, context: __SerdeContext): LegGeometry => {
  return take(output, {
    LineString: (_: any) => de_LineString(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1LegList
 */
const de_LegList = (output: any, context: __SerdeContext): Leg[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Leg(entry, context);
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

/**
 * deserializeAws_restJson1ListDevicePositionsResponseEntry
 */
const de_ListDevicePositionsResponseEntry = (
  output: any,
  context: __SerdeContext
): ListDevicePositionsResponseEntry => {
  return take(output, {
    Accuracy: (_: any) => de_PositionalAccuracy(_, context),
    DeviceId: __expectString,
    Position: (_: any) => de_Position(_, context),
    PositionProperties: _json,
    SampleTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ListDevicePositionsResponseEntryList
 */
const de_ListDevicePositionsResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListDevicePositionsResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListDevicePositionsResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListGeofenceCollectionsResponseEntry
 */
const de_ListGeofenceCollectionsResponseEntry = (
  output: any,
  context: __SerdeContext
): ListGeofenceCollectionsResponseEntry => {
  return take(output, {
    CollectionName: __expectString,
    CreateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    PricingPlan: __expectString,
    PricingPlanDataSource: __expectString,
    UpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ListGeofenceCollectionsResponseEntryList
 */
const de_ListGeofenceCollectionsResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListGeofenceCollectionsResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListGeofenceCollectionsResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListGeofenceResponseEntry
 */
const de_ListGeofenceResponseEntry = (output: any, context: __SerdeContext): ListGeofenceResponseEntry => {
  return take(output, {
    CreateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    GeofenceId: __expectString,
    GeofenceProperties: _json,
    Geometry: (_: any) => de_GeofenceGeometry(_, context),
    Status: __expectString,
    UpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ListGeofenceResponseEntryList
 */
const de_ListGeofenceResponseEntryList = (output: any, context: __SerdeContext): ListGeofenceResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListGeofenceResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListKeysResponseEntry
 */
const de_ListKeysResponseEntry = (output: any, context: __SerdeContext): ListKeysResponseEntry => {
  return take(output, {
    CreateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    ExpireTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    KeyName: __expectString,
    Restrictions: _json,
    UpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ListKeysResponseEntryList
 */
const de_ListKeysResponseEntryList = (output: any, context: __SerdeContext): ListKeysResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListKeysResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListMapsResponseEntry
 */
const de_ListMapsResponseEntry = (output: any, context: __SerdeContext): ListMapsResponseEntry => {
  return take(output, {
    CreateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSource: __expectString,
    Description: __expectString,
    MapName: __expectString,
    PricingPlan: __expectString,
    UpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ListMapsResponseEntryList
 */
const de_ListMapsResponseEntryList = (output: any, context: __SerdeContext): ListMapsResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListMapsResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListPlaceIndexesResponseEntry
 */
const de_ListPlaceIndexesResponseEntry = (output: any, context: __SerdeContext): ListPlaceIndexesResponseEntry => {
  return take(output, {
    CreateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSource: __expectString,
    Description: __expectString,
    IndexName: __expectString,
    PricingPlan: __expectString,
    UpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ListPlaceIndexesResponseEntryList
 */
const de_ListPlaceIndexesResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListPlaceIndexesResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListPlaceIndexesResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListRouteCalculatorsResponseEntry
 */
const de_ListRouteCalculatorsResponseEntry = (
  output: any,
  context: __SerdeContext
): ListRouteCalculatorsResponseEntry => {
  return take(output, {
    CalculatorName: __expectString,
    CreateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DataSource: __expectString,
    Description: __expectString,
    PricingPlan: __expectString,
    UpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ListRouteCalculatorsResponseEntryList
 */
const de_ListRouteCalculatorsResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListRouteCalculatorsResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListRouteCalculatorsResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListTrackersResponseEntry
 */
const de_ListTrackersResponseEntry = (output: any, context: __SerdeContext): ListTrackersResponseEntry => {
  return take(output, {
    CreateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Description: __expectString,
    PricingPlan: __expectString,
    PricingPlanDataSource: __expectString,
    TrackerName: __expectString,
    UpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ListTrackersResponseEntryList
 */
const de_ListTrackersResponseEntryList = (output: any, context: __SerdeContext): ListTrackersResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListTrackersResponseEntry(entry, context);
    });
  return retVal;
};

// de_MapConfiguration omitted.

/**
 * deserializeAws_restJson1Place
 */
const de_Place = (output: any, context: __SerdeContext): Place => {
  return take(output, {
    AddressNumber: __expectString,
    Categories: _json,
    Country: __expectString,
    Geometry: (_: any) => de_PlaceGeometry(_, context),
    Interpolated: __expectBoolean,
    Label: __expectString,
    Municipality: __expectString,
    Neighborhood: __expectString,
    PostalCode: __expectString,
    Region: __expectString,
    Street: __expectString,
    SubMunicipality: __expectString,
    SubRegion: __expectString,
    SupplementalCategories: _json,
    TimeZone: _json,
    UnitNumber: __expectString,
    UnitType: __expectString,
  }) as any;
};

// de_PlaceCategoryList omitted.

/**
 * deserializeAws_restJson1PlaceGeometry
 */
const de_PlaceGeometry = (output: any, context: __SerdeContext): PlaceGeometry => {
  return take(output, {
    Point: (_: any) => de_Position(_, context),
  }) as any;
};

// de_PlaceSupplementalCategoryList omitted.

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
 * deserializeAws_restJson1PositionalAccuracy
 */
const de_PositionalAccuracy = (output: any, context: __SerdeContext): PositionalAccuracy => {
  return take(output, {
    Horizontal: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1PositionList
 */
const de_PositionList = (output: any, context: __SerdeContext): number[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Position(entry, context);
    });
  return retVal;
};

// de_PropertyMap omitted.

// de_RefererPatternList omitted.

/**
 * deserializeAws_restJson1RouteMatrix
 */
const de_RouteMatrix = (output: any, context: __SerdeContext): RouteMatrixEntry[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RouteMatrixRow(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RouteMatrixEntry
 */
const de_RouteMatrixEntry = (output: any, context: __SerdeContext): RouteMatrixEntry => {
  return take(output, {
    Distance: __limitedParseDouble,
    DurationSeconds: __limitedParseDouble,
    Error: _json,
  }) as any;
};

// de_RouteMatrixEntryError omitted.

/**
 * deserializeAws_restJson1RouteMatrixRow
 */
const de_RouteMatrixRow = (output: any, context: __SerdeContext): RouteMatrixEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RouteMatrixEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchForPositionResult
 */
const de_SearchForPositionResult = (output: any, context: __SerdeContext): SearchForPositionResult => {
  return take(output, {
    Distance: __limitedParseDouble,
    Place: (_: any) => de_Place(_, context),
    PlaceId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SearchForPositionResultList
 */
const de_SearchForPositionResultList = (output: any, context: __SerdeContext): SearchForPositionResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchForPositionResult(entry, context);
    });
  return retVal;
};

// de_SearchForSuggestionsResult omitted.

// de_SearchForSuggestionsResultList omitted.

/**
 * deserializeAws_restJson1SearchForTextResult
 */
const de_SearchForTextResult = (output: any, context: __SerdeContext): SearchForTextResult => {
  return take(output, {
    Distance: __limitedParseDouble,
    Place: (_: any) => de_Place(_, context),
    PlaceId: __expectString,
    Relevance: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1SearchForTextResultList
 */
const de_SearchForTextResultList = (output: any, context: __SerdeContext): SearchForTextResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchForTextResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchPlaceIndexForPositionSummary
 */
const de_SearchPlaceIndexForPositionSummary = (
  output: any,
  context: __SerdeContext
): SearchPlaceIndexForPositionSummary => {
  return take(output, {
    DataSource: __expectString,
    Language: __expectString,
    MaxResults: __expectInt32,
    Position: (_: any) => de_Position(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SearchPlaceIndexForSuggestionsSummary
 */
const de_SearchPlaceIndexForSuggestionsSummary = (
  output: any,
  context: __SerdeContext
): SearchPlaceIndexForSuggestionsSummary => {
  return take(output, {
    BiasPosition: (_: any) => de_Position(_, context),
    DataSource: __expectString,
    FilterBBox: (_: any) => de_BoundingBox(_, context),
    FilterCategories: _json,
    FilterCountries: _json,
    Language: __expectString,
    MaxResults: __expectInt32,
    Text: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SearchPlaceIndexForTextSummary
 */
const de_SearchPlaceIndexForTextSummary = (output: any, context: __SerdeContext): SearchPlaceIndexForTextSummary => {
  return take(output, {
    BiasPosition: (_: any) => de_Position(_, context),
    DataSource: __expectString,
    FilterBBox: (_: any) => de_BoundingBox(_, context),
    FilterCategories: _json,
    FilterCountries: _json,
    Language: __expectString,
    MaxResults: __expectInt32,
    ResultBBox: (_: any) => de_BoundingBox(_, context),
    Text: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Step
 */
const de_Step = (output: any, context: __SerdeContext): Step => {
  return take(output, {
    Distance: __limitedParseDouble,
    DurationSeconds: __limitedParseDouble,
    EndPosition: (_: any) => de_Position(_, context),
    GeometryOffset: __expectInt32,
    StartPosition: (_: any) => de_Position(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1StepList
 */
const de_StepList = (output: any, context: __SerdeContext): Step[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Step(entry, context);
    });
  return retVal;
};

// de_TagMap omitted.

// de_TimeZone omitted.

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

const _CC = "CacheControl";
const _CT = "ContentType";
const _FD = "ForceDelete";
const _K = "Key";
const _L = "Language";
const _TK = "TagKeys";
const _cc = "cache-control";
const _ct = "content-type";
const _fD = "forceDelete";
const _k = "key";
const _l = "language";
const _tK = "tagKeys";
