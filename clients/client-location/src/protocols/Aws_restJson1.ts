// smithy-typescript generated code
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
  Circle,
  ConflictException,
  DataSourceConfiguration,
  DevicePosition,
  DevicePositionUpdate,
  GeofenceGeometry,
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
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateTrackerConsumerCommand
 */
export const se_AssociateTrackerConsumerCommand = async (
  input: AssociateTrackerConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/tracking/v0/trackers/{TrackerName}/consumers";
  resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", () => input.TrackerName!, "{TrackerName}", false);
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand
 */
export const se_BatchDeleteDevicePositionHistoryCommand = async (
  input: BatchDeleteDevicePositionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/tracking/v0/trackers/{TrackerName}/delete-positions";
  resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", () => input.TrackerName!, "{TrackerName}", false);
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchDeleteGeofenceCommand
 */
export const se_BatchDeleteGeofenceCommand = async (
  input: BatchDeleteGeofenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/geofencing/v0/collections/{CollectionName}/delete-geofences";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CollectionName",
    () => input.CollectionName!,
    "{CollectionName}",
    false
  );
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchEvaluateGeofencesCommand
 */
export const se_BatchEvaluateGeofencesCommand = async (
  input: BatchEvaluateGeofencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/geofencing/v0/collections/{CollectionName}/positions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CollectionName",
    () => input.CollectionName!,
    "{CollectionName}",
    false
  );
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchGetDevicePositionCommand
 */
export const se_BatchGetDevicePositionCommand = async (
  input: BatchGetDevicePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/tracking/v0/trackers/{TrackerName}/get-positions";
  resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", () => input.TrackerName!, "{TrackerName}", false);
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchPutGeofenceCommand
 */
export const se_BatchPutGeofenceCommand = async (
  input: BatchPutGeofenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/geofencing/v0/collections/{CollectionName}/put-geofences";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CollectionName",
    () => input.CollectionName!,
    "{CollectionName}",
    false
  );
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchUpdateDevicePositionCommand
 */
export const se_BatchUpdateDevicePositionCommand = async (
  input: BatchUpdateDevicePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/tracking/v0/trackers/{TrackerName}/positions";
  resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", () => input.TrackerName!, "{TrackerName}", false);
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CalculateRouteCommand
 */
export const se_CalculateRouteCommand = async (
  input: CalculateRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/routes/v0/calculators/{CalculatorName}/calculate/route";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CalculatorName",
    () => input.CalculatorName!,
    "{CalculatorName}",
    false
  );
  const query: any = map({
    key: [, input.Key!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      CarModeOptions: (_) => _json(_),
      DepartNow: [],
      DeparturePosition: (_) => se_Position(_, context),
      DepartureTime: (_) => _.toISOString().split(".")[0] + "Z",
      DestinationPosition: (_) => se_Position(_, context),
      DistanceUnit: [],
      IncludeLegGeometry: [],
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CalculateRouteMatrixCommand
 */
export const se_CalculateRouteMatrixCommand = async (
  input: CalculateRouteMatrixCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/routes/v0/calculators/{CalculatorName}/calculate/route-matrix";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CalculatorName",
    () => input.CalculatorName!,
    "{CalculatorName}",
    false
  );
  const query: any = map({
    key: [, input.Key!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      CarModeOptions: (_) => _json(_),
      DepartNow: [],
      DeparturePositions: (_) => se_PositionList(_, context),
      DepartureTime: (_) => _.toISOString().split(".")[0] + "Z",
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateGeofenceCollectionCommand
 */
export const se_CreateGeofenceCollectionCommand = async (
  input: CreateGeofenceCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/geofencing/v0/collections";
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateKeyCommand
 */
export const se_CreateKeyCommand = async (
  input: CreateKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/metadata/v0/keys";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      ExpireTime: (_) => _.toISOString().split(".")[0] + "Z",
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateMapCommand
 */
export const se_CreateMapCommand = async (
  input: CreateMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/maps";
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreatePlaceIndexCommand
 */
export const se_CreatePlaceIndexCommand = async (
  input: CreatePlaceIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/places/v0/indexes";
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateRouteCalculatorCommand
 */
export const se_CreateRouteCalculatorCommand = async (
  input: CreateRouteCalculatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/routes/v0/calculators";
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateTrackerCommand
 */
export const se_CreateTrackerCommand = async (
  input: CreateTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tracking/v0/trackers";
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteGeofenceCollectionCommand
 */
export const se_DeleteGeofenceCollectionCommand = async (
  input: DeleteGeofenceCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/geofencing/v0/collections/{CollectionName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CollectionName",
    () => input.CollectionName!,
    "{CollectionName}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteKeyCommand
 */
export const se_DeleteKeyCommand = async (
  input: DeleteKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/metadata/v0/keys/{KeyName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "KeyName", () => input.KeyName!, "{KeyName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.metadata." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteMapCommand
 */
export const se_DeleteMapCommand = async (
  input: DeleteMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/maps/{MapName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MapName", () => input.MapName!, "{MapName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeletePlaceIndexCommand
 */
export const se_DeletePlaceIndexCommand = async (
  input: DeletePlaceIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/places/v0/indexes/{IndexName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "IndexName", () => input.IndexName!, "{IndexName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteRouteCalculatorCommand
 */
export const se_DeleteRouteCalculatorCommand = async (
  input: DeleteRouteCalculatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/routes/v0/calculators/{CalculatorName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CalculatorName",
    () => input.CalculatorName!,
    "{CalculatorName}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.routes." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteTrackerCommand
 */
export const se_DeleteTrackerCommand = async (
  input: DeleteTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tracking/v0/trackers/{TrackerName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeGeofenceCollectionCommand
 */
export const se_DescribeGeofenceCollectionCommand = async (
  input: DescribeGeofenceCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/geofencing/v0/collections/{CollectionName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CollectionName",
    () => input.CollectionName!,
    "{CollectionName}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeKeyCommand
 */
export const se_DescribeKeyCommand = async (
  input: DescribeKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/metadata/v0/keys/{KeyName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "KeyName", () => input.KeyName!, "{KeyName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.metadata." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeMapCommand
 */
export const se_DescribeMapCommand = async (
  input: DescribeMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/maps/{MapName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MapName", () => input.MapName!, "{MapName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribePlaceIndexCommand
 */
export const se_DescribePlaceIndexCommand = async (
  input: DescribePlaceIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/places/v0/indexes/{IndexName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "IndexName", () => input.IndexName!, "{IndexName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeRouteCalculatorCommand
 */
export const se_DescribeRouteCalculatorCommand = async (
  input: DescribeRouteCalculatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/routes/v0/calculators/{CalculatorName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CalculatorName",
    () => input.CalculatorName!,
    "{CalculatorName}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.routes." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeTrackerCommand
 */
export const se_DescribeTrackerCommand = async (
  input: DescribeTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tracking/v0/trackers/{TrackerName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateTrackerConsumerCommand
 */
export const se_DisassociateTrackerConsumerCommand = async (
  input: DisassociateTrackerConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "ConsumerArn", () => input.ConsumerArn!, "{ConsumerArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDevicePositionCommand
 */
export const se_GetDevicePositionCommand = async (
  input: GetDevicePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest";
  resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DeviceId", () => input.DeviceId!, "{DeviceId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDevicePositionHistoryCommand
 */
export const se_GetDevicePositionHistoryCommand = async (
  input: GetDevicePositionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions";
  resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", () => input.TrackerName!, "{TrackerName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DeviceId", () => input.DeviceId!, "{DeviceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EndTimeExclusive: (_) => _.toISOString().split(".")[0] + "Z",
      MaxResults: [],
      NextToken: [],
      StartTimeInclusive: (_) => _.toISOString().split(".")[0] + "Z",
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetGeofenceCommand
 */
export const se_GetGeofenceCommand = async (
  input: GetGeofenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CollectionName",
    () => input.CollectionName!,
    "{CollectionName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "GeofenceId", () => input.GeofenceId!, "{GeofenceId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetMapGlyphsCommand
 */
export const se_GetMapGlyphsCommand = async (
  input: GetMapGlyphsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MapName", () => input.MapName!, "{MapName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "FontStack", () => input.FontStack!, "{FontStack}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FontUnicodeRange",
    () => input.FontUnicodeRange!,
    "{FontUnicodeRange}",
    false
  );
  const query: any = map({
    key: [, input.Key!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetMapSpritesCommand
 */
export const se_GetMapSpritesCommand = async (
  input: GetMapSpritesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/maps/v0/maps/{MapName}/sprites/{FileName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MapName", () => input.MapName!, "{MapName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "FileName", () => input.FileName!, "{FileName}", false);
  const query: any = map({
    key: [, input.Key!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetMapStyleDescriptorCommand
 */
export const se_GetMapStyleDescriptorCommand = async (
  input: GetMapStyleDescriptorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/maps/{MapName}/style-descriptor";
  resolvedPath = __resolvedPath(resolvedPath, input, "MapName", () => input.MapName!, "{MapName}", false);
  const query: any = map({
    key: [, input.Key!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetMapTileCommand
 */
export const se_GetMapTileCommand = async (
  input: GetMapTileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MapName", () => input.MapName!, "{MapName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Z", () => input.Z!, "{Z}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "X", () => input.X!, "{X}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Y", () => input.Y!, "{Y}", false);
  const query: any = map({
    key: [, input.Key!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetPlaceCommand
 */
export const se_GetPlaceCommand = async (
  input: GetPlaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/places/v0/indexes/{IndexName}/places/{PlaceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "IndexName", () => input.IndexName!, "{IndexName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "PlaceId", () => input.PlaceId!, "{PlaceId}", false);
  const query: any = map({
    language: [, input.Language!],
    key: [, input.Key!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListDevicePositionsCommand
 */
export const se_ListDevicePositionsCommand = async (
  input: ListDevicePositionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/tracking/v0/trackers/{TrackerName}/list-positions";
  resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", () => input.TrackerName!, "{TrackerName}", false);
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListGeofenceCollectionsCommand
 */
export const se_ListGeofenceCollectionsCommand = async (
  input: ListGeofenceCollectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/geofencing/v0/list-collections";
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListGeofencesCommand
 */
export const se_ListGeofencesCommand = async (
  input: ListGeofencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/geofencing/v0/collections/{CollectionName}/list-geofences";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CollectionName",
    () => input.CollectionName!,
    "{CollectionName}",
    false
  );
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListKeysCommand
 */
export const se_ListKeysCommand = async (
  input: ListKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/metadata/v0/list-keys";
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListMapsCommand
 */
export const se_ListMapsCommand = async (
  input: ListMapsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/list-maps";
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListPlaceIndexesCommand
 */
export const se_ListPlaceIndexesCommand = async (
  input: ListPlaceIndexesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/places/v0/list-indexes";
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListRouteCalculatorsCommand
 */
export const se_ListRouteCalculatorsCommand = async (
  input: ListRouteCalculatorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/routes/v0/list-calculators";
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.metadata." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTrackerConsumersCommand
 */
export const se_ListTrackerConsumersCommand = async (
  input: ListTrackerConsumersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/tracking/v0/trackers/{TrackerName}/list-consumers";
  resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", () => input.TrackerName!, "{TrackerName}", false);
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTrackersCommand
 */
export const se_ListTrackersCommand = async (
  input: ListTrackersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tracking/v0/list-trackers";
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutGeofenceCommand
 */
export const se_PutGeofenceCommand = async (
  input: PutGeofenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CollectionName",
    () => input.CollectionName!,
    "{CollectionName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "GeofenceId", () => input.GeofenceId!, "{GeofenceId}", false);
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1SearchPlaceIndexForPositionCommand
 */
export const se_SearchPlaceIndexForPositionCommand = async (
  input: SearchPlaceIndexForPositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/places/v0/indexes/{IndexName}/search/position";
  resolvedPath = __resolvedPath(resolvedPath, input, "IndexName", () => input.IndexName!, "{IndexName}", false);
  const query: any = map({
    key: [, input.Key!],
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1SearchPlaceIndexForSuggestionsCommand
 */
export const se_SearchPlaceIndexForSuggestionsCommand = async (
  input: SearchPlaceIndexForSuggestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/places/v0/indexes/{IndexName}/search/suggestions";
  resolvedPath = __resolvedPath(resolvedPath, input, "IndexName", () => input.IndexName!, "{IndexName}", false);
  const query: any = map({
    key: [, input.Key!],
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1SearchPlaceIndexForTextCommand
 */
export const se_SearchPlaceIndexForTextCommand = async (
  input: SearchPlaceIndexForTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/places/v0/indexes/{IndexName}/search/text";
  resolvedPath = __resolvedPath(resolvedPath, input, "IndexName", () => input.IndexName!, "{IndexName}", false);
  const query: any = map({
    key: [, input.Key!],
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "cp.metadata." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateGeofenceCollectionCommand
 */
export const se_UpdateGeofenceCollectionCommand = async (
  input: UpdateGeofenceCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/geofencing/v0/collections/{CollectionName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CollectionName",
    () => input.CollectionName!,
    "{CollectionName}",
    false
  );
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateKeyCommand
 */
export const se_UpdateKeyCommand = async (
  input: UpdateKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/metadata/v0/keys/{KeyName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "KeyName", () => input.KeyName!, "{KeyName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      ExpireTime: (_) => _.toISOString().split(".")[0] + "Z",
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateMapCommand
 */
export const se_UpdateMapCommand = async (
  input: UpdateMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/maps/{MapName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MapName", () => input.MapName!, "{MapName}", false);
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdatePlaceIndexCommand
 */
export const se_UpdatePlaceIndexCommand = async (
  input: UpdatePlaceIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/places/v0/indexes/{IndexName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "IndexName", () => input.IndexName!, "{IndexName}", false);
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateRouteCalculatorCommand
 */
export const se_UpdateRouteCalculatorCommand = async (
  input: UpdateRouteCalculatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/routes/v0/calculators/{CalculatorName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CalculatorName",
    () => input.CalculatorName!,
    "{CalculatorName}",
    false
  );
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateTrackerCommand
 */
export const se_UpdateTrackerCommand = async (
  input: UpdateTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tracking/v0/trackers/{TrackerName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "TrackerName", () => input.TrackerName!, "{TrackerName}", false);
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
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AssociateTrackerConsumerCommand
 */
export const de_AssociateTrackerConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTrackerConsumerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateTrackerConsumerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateTrackerConsumerCommandError
 */
const de_AssociateTrackerConsumerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTrackerConsumerCommandOutput> => {
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
      });
  }
};

/**
 * deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand
 */
export const de_BatchDeleteDevicePositionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDevicePositionHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDeleteDevicePositionHistoryCommandError(output, context);
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
 * deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommandError
 */
const de_BatchDeleteDevicePositionHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDevicePositionHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1BatchDeleteGeofenceCommand
 */
export const de_BatchDeleteGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDeleteGeofenceCommandError(output, context);
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
 * deserializeAws_restJson1BatchDeleteGeofenceCommandError
 */
const de_BatchDeleteGeofenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteGeofenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1BatchEvaluateGeofencesCommand
 */
export const de_BatchEvaluateGeofencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEvaluateGeofencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchEvaluateGeofencesCommandError(output, context);
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
 * deserializeAws_restJson1BatchEvaluateGeofencesCommandError
 */
const de_BatchEvaluateGeofencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEvaluateGeofencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1BatchGetDevicePositionCommand
 */
export const de_BatchGetDevicePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDevicePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetDevicePositionCommandError(output, context);
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
 * deserializeAws_restJson1BatchGetDevicePositionCommandError
 */
const de_BatchGetDevicePositionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDevicePositionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1BatchPutGeofenceCommand
 */
export const de_BatchPutGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchPutGeofenceCommandError(output, context);
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
 * deserializeAws_restJson1BatchPutGeofenceCommandError
 */
const de_BatchPutGeofenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutGeofenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1BatchUpdateDevicePositionCommand
 */
export const de_BatchUpdateDevicePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateDevicePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchUpdateDevicePositionCommandError(output, context);
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
 * deserializeAws_restJson1BatchUpdateDevicePositionCommandError
 */
const de_BatchUpdateDevicePositionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateDevicePositionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1CalculateRouteCommand
 */
export const de_CalculateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CalculateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CalculateRouteCommandError(output, context);
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
 * deserializeAws_restJson1CalculateRouteCommandError
 */
const de_CalculateRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CalculateRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1CalculateRouteMatrixCommand
 */
export const de_CalculateRouteMatrixCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CalculateRouteMatrixCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CalculateRouteMatrixCommandError(output, context);
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
 * deserializeAws_restJson1CalculateRouteMatrixCommandError
 */
const de_CalculateRouteMatrixCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CalculateRouteMatrixCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1CreateGeofenceCollectionCommand
 */
export const de_CreateGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateGeofenceCollectionCommandError(output, context);
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
 * deserializeAws_restJson1CreateGeofenceCollectionCommandError
 */
const de_CreateGeofenceCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGeofenceCollectionCommandOutput> => {
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
      });
  }
};

/**
 * deserializeAws_restJson1CreateKeyCommand
 */
export const de_CreateKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateKeyCommandError(output, context);
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
 * deserializeAws_restJson1CreateKeyCommandError
 */
const de_CreateKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKeyCommandOutput> => {
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
      });
  }
};

/**
 * deserializeAws_restJson1CreateMapCommand
 */
export const de_CreateMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMapCommandError(output, context);
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
 * deserializeAws_restJson1CreateMapCommandError
 */
const de_CreateMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMapCommandOutput> => {
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
      });
  }
};

/**
 * deserializeAws_restJson1CreatePlaceIndexCommand
 */
export const de_CreatePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreatePlaceIndexCommandError(output, context);
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
 * deserializeAws_restJson1CreatePlaceIndexCommandError
 */
const de_CreatePlaceIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlaceIndexCommandOutput> => {
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
      });
  }
};

/**
 * deserializeAws_restJson1CreateRouteCalculatorCommand
 */
export const de_CreateRouteCalculatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCalculatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateRouteCalculatorCommandError(output, context);
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
 * deserializeAws_restJson1CreateRouteCalculatorCommandError
 */
const de_CreateRouteCalculatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCalculatorCommandOutput> => {
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
      });
  }
};

/**
 * deserializeAws_restJson1CreateTrackerCommand
 */
export const de_CreateTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateTrackerCommandError(output, context);
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
 * deserializeAws_restJson1CreateTrackerCommandError
 */
const de_CreateTrackerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrackerCommandOutput> => {
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
      });
  }
};

/**
 * deserializeAws_restJson1DeleteGeofenceCollectionCommand
 */
export const de_DeleteGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteGeofenceCollectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGeofenceCollectionCommandError
 */
const de_DeleteGeofenceCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGeofenceCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1DeleteKeyCommand
 */
export const de_DeleteKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteKeyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteKeyCommandError
 */
const de_DeleteKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1DeleteMapCommand
 */
export const de_DeleteMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteMapCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMapCommandError
 */
const de_DeleteMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1DeletePlaceIndexCommand
 */
export const de_DeletePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeletePlaceIndexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePlaceIndexCommandError
 */
const de_DeletePlaceIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaceIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1DeleteRouteCalculatorCommand
 */
export const de_DeleteRouteCalculatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCalculatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteRouteCalculatorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRouteCalculatorCommandError
 */
const de_DeleteRouteCalculatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCalculatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1DeleteTrackerCommand
 */
export const de_DeleteTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteTrackerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTrackerCommandError
 */
const de_DeleteTrackerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrackerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1DescribeGeofenceCollectionCommand
 */
export const de_DescribeGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeGeofenceCollectionCommandError(output, context);
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
 * deserializeAws_restJson1DescribeGeofenceCollectionCommandError
 */
const de_DescribeGeofenceCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGeofenceCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1DescribeKeyCommand
 */
export const de_DescribeKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeKeyCommandError(output, context);
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
 * deserializeAws_restJson1DescribeKeyCommandError
 */
const de_DescribeKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1DescribeMapCommand
 */
export const de_DescribeMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeMapCommandError(output, context);
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
 * deserializeAws_restJson1DescribeMapCommandError
 */
const de_DescribeMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1DescribePlaceIndexCommand
 */
export const de_DescribePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribePlaceIndexCommandError(output, context);
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
 * deserializeAws_restJson1DescribePlaceIndexCommandError
 */
const de_DescribePlaceIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlaceIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1DescribeRouteCalculatorCommand
 */
export const de_DescribeRouteCalculatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouteCalculatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeRouteCalculatorCommandError(output, context);
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
 * deserializeAws_restJson1DescribeRouteCalculatorCommandError
 */
const de_DescribeRouteCalculatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouteCalculatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1DescribeTrackerCommand
 */
export const de_DescribeTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeTrackerCommandError(output, context);
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
 * deserializeAws_restJson1DescribeTrackerCommandError
 */
const de_DescribeTrackerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrackerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateTrackerConsumerCommand
 */
export const de_DisassociateTrackerConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTrackerConsumerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateTrackerConsumerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateTrackerConsumerCommandError
 */
const de_DisassociateTrackerConsumerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTrackerConsumerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1GetDevicePositionCommand
 */
export const de_GetDevicePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDevicePositionCommandError(output, context);
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
 * deserializeAws_restJson1GetDevicePositionCommandError
 */
const de_GetDevicePositionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePositionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1GetDevicePositionHistoryCommand
 */
export const de_GetDevicePositionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePositionHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDevicePositionHistoryCommandError(output, context);
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
 * deserializeAws_restJson1GetDevicePositionHistoryCommandError
 */
const de_GetDevicePositionHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePositionHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1GetGeofenceCommand
 */
export const de_GetGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGeofenceCommandError(output, context);
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
 * deserializeAws_restJson1GetGeofenceCommandError
 */
const de_GetGeofenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeofenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1GetMapGlyphsCommand
 */
export const de_GetMapGlyphsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapGlyphsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMapGlyphsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ContentType: [, output.headers["content-type"]],
    CacheControl: [, output.headers["cache-control"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetMapGlyphsCommandError
 */
const de_GetMapGlyphsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapGlyphsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1GetMapSpritesCommand
 */
export const de_GetMapSpritesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapSpritesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMapSpritesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ContentType: [, output.headers["content-type"]],
    CacheControl: [, output.headers["cache-control"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetMapSpritesCommandError
 */
const de_GetMapSpritesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapSpritesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1GetMapStyleDescriptorCommand
 */
export const de_GetMapStyleDescriptorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapStyleDescriptorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMapStyleDescriptorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ContentType: [, output.headers["content-type"]],
    CacheControl: [, output.headers["cache-control"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetMapStyleDescriptorCommandError
 */
const de_GetMapStyleDescriptorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapStyleDescriptorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1GetMapTileCommand
 */
export const de_GetMapTileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapTileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMapTileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ContentType: [, output.headers["content-type"]],
    CacheControl: [, output.headers["cache-control"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetMapTileCommandError
 */
const de_GetMapTileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapTileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1GetPlaceCommand
 */
export const de_GetPlaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPlaceCommandError(output, context);
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
 * deserializeAws_restJson1GetPlaceCommandError
 */
const de_GetPlaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1ListDevicePositionsCommand
 */
export const de_ListDevicePositionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicePositionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDevicePositionsCommandError(output, context);
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
 * deserializeAws_restJson1ListDevicePositionsCommandError
 */
const de_ListDevicePositionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicePositionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1ListGeofenceCollectionsCommand
 */
export const de_ListGeofenceCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeofenceCollectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGeofenceCollectionsCommandError(output, context);
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
 * deserializeAws_restJson1ListGeofenceCollectionsCommandError
 */
const de_ListGeofenceCollectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeofenceCollectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1ListGeofencesCommand
 */
export const de_ListGeofencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeofencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGeofencesCommandError(output, context);
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
 * deserializeAws_restJson1ListGeofencesCommandError
 */
const de_ListGeofencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeofencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1ListKeysCommand
 */
export const de_ListKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListKeysCommandError(output, context);
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
 * deserializeAws_restJson1ListKeysCommandError
 */
const de_ListKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1ListMapsCommand
 */
export const de_ListMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMapsCommandError(output, context);
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
 * deserializeAws_restJson1ListMapsCommandError
 */
const de_ListMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1ListPlaceIndexesCommand
 */
export const de_ListPlaceIndexesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaceIndexesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPlaceIndexesCommandError(output, context);
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
 * deserializeAws_restJson1ListPlaceIndexesCommandError
 */
const de_ListPlaceIndexesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaceIndexesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1ListRouteCalculatorsCommand
 */
export const de_ListRouteCalculatorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRouteCalculatorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRouteCalculatorsCommandError(output, context);
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
 * deserializeAws_restJson1ListRouteCalculatorsCommandError
 */
const de_ListRouteCalculatorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRouteCalculatorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
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
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1ListTrackerConsumersCommand
 */
export const de_ListTrackerConsumersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrackerConsumersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTrackerConsumersCommandError(output, context);
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
 * deserializeAws_restJson1ListTrackerConsumersCommandError
 */
const de_ListTrackerConsumersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrackerConsumersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1ListTrackersCommand
 */
export const de_ListTrackersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrackersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTrackersCommandError(output, context);
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
 * deserializeAws_restJson1ListTrackersCommandError
 */
const de_ListTrackersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrackersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1PutGeofenceCommand
 */
export const de_PutGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutGeofenceCommandError(output, context);
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
 * deserializeAws_restJson1PutGeofenceCommandError
 */
const de_PutGeofenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGeofenceCommandOutput> => {
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
      });
  }
};

/**
 * deserializeAws_restJson1SearchPlaceIndexForPositionCommand
 */
export const de_SearchPlaceIndexForPositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForPositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchPlaceIndexForPositionCommandError(output, context);
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
 * deserializeAws_restJson1SearchPlaceIndexForPositionCommandError
 */
const de_SearchPlaceIndexForPositionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForPositionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommand
 */
export const de_SearchPlaceIndexForSuggestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForSuggestionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchPlaceIndexForSuggestionsCommandError(output, context);
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
 * deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommandError
 */
const de_SearchPlaceIndexForSuggestionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForSuggestionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1SearchPlaceIndexForTextCommand
 */
export const de_SearchPlaceIndexForTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForTextCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchPlaceIndexForTextCommandError(output, context);
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
 * deserializeAws_restJson1SearchPlaceIndexForTextCommandError
 */
const de_SearchPlaceIndexForTextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForTextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1UpdateGeofenceCollectionCommand
 */
export const de_UpdateGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateGeofenceCollectionCommandError(output, context);
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
 * deserializeAws_restJson1UpdateGeofenceCollectionCommandError
 */
const de_UpdateGeofenceCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGeofenceCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1UpdateKeyCommand
 */
export const de_UpdateKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateKeyCommandError(output, context);
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
 * deserializeAws_restJson1UpdateKeyCommandError
 */
const de_UpdateKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1UpdateMapCommand
 */
export const de_UpdateMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMapCommandError(output, context);
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
 * deserializeAws_restJson1UpdateMapCommandError
 */
const de_UpdateMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1UpdatePlaceIndexCommand
 */
export const de_UpdatePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePlaceIndexCommandError(output, context);
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
 * deserializeAws_restJson1UpdatePlaceIndexCommandError
 */
const de_UpdatePlaceIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePlaceIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1UpdateRouteCalculatorCommand
 */
export const de_UpdateRouteCalculatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCalculatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRouteCalculatorCommandError(output, context);
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
 * deserializeAws_restJson1UpdateRouteCalculatorCommandError
 */
const de_UpdateRouteCalculatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCalculatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
  }
};

/**
 * deserializeAws_restJson1UpdateTrackerCommand
 */
export const de_UpdateTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateTrackerCommandError(output, context);
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
 * deserializeAws_restJson1UpdateTrackerCommandError
 */
const de_UpdateTrackerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrackerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
      });
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
 * serializeAws_restJson1Circle
 */
const se_Circle = (input: Circle, context: __SerdeContext): any => {
  return take(input, {
    Center: (_) => se_Position(_, context),
    Radius: __serializeFloat,
  });
};

// se_CountryCodeList omitted.

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
    SampleTime: (_) => _.toISOString().split(".")[0] + "Z",
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

// se_FilterPlaceCategoryList omitted.

// se_GeoArnList omitted.

/**
 * serializeAws_restJson1GeofenceGeometry
 */
const se_GeofenceGeometry = (input: GeofenceGeometry, context: __SerdeContext): any => {
  return take(input, {
    Circle: (_) => se_Circle(_, context),
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

// de_GeoArnList omitted.

/**
 * deserializeAws_restJson1GeofenceGeometry
 */
const de_GeofenceGeometry = (output: any, context: __SerdeContext): GeofenceGeometry => {
  return take(output, {
    Circle: (_: any) => de_Circle(_, context),
    Polygon: (_: any) => de_LinearRings(_, context),
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
