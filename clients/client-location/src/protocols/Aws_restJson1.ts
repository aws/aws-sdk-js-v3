// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  BatchDeleteDevicePositionHistoryError,
  BatchDeleteGeofenceError,
  BatchEvaluateGeofencesError,
  BatchGetDevicePositionError,
  BatchItemError,
  BatchPutGeofenceError,
  BatchPutGeofenceRequestEntry,
  BatchPutGeofenceSuccess,
  BatchUpdateDevicePositionError,
  CalculateRouteCarModeOptions,
  CalculateRouteMatrixSummary,
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
  Place,
  PlaceGeometry,
  PositionalAccuracy,
  ResourceNotFoundException,
  RouteMatrixEntry,
  RouteMatrixEntryError,
  SearchForPositionResult,
  SearchForSuggestionsResult,
  SearchForTextResult,
  SearchPlaceIndexForPositionSummary,
  SearchPlaceIndexForSuggestionsSummary,
  SearchPlaceIndexForTextSummary,
  ServiceQuotaExceededException,
  Step,
  ThrottlingException,
  TimeZone,
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
  body = JSON.stringify({
    ...(input.ConsumerArn != null && { ConsumerArn: input.ConsumerArn }),
  });
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
  body = JSON.stringify({
    ...(input.DeviceIds != null && { DeviceIds: se_DeviceIdsList(input.DeviceIds, context) }),
  });
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
  body = JSON.stringify({
    ...(input.GeofenceIds != null && { GeofenceIds: se_IdList(input.GeofenceIds, context) }),
  });
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
  body = JSON.stringify({
    ...(input.DevicePositionUpdates != null && {
      DevicePositionUpdates: se_DevicePositionUpdateList(input.DevicePositionUpdates, context),
    }),
  });
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
  body = JSON.stringify({
    ...(input.DeviceIds != null && { DeviceIds: se_IdList(input.DeviceIds, context) }),
  });
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
  body = JSON.stringify({
    ...(input.Entries != null && { Entries: se_BatchPutGeofenceRequestEntryList(input.Entries, context) }),
  });
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
  body = JSON.stringify({
    ...(input.Updates != null && { Updates: se_DevicePositionUpdateList(input.Updates, context) }),
  });
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
  let body: any;
  body = JSON.stringify({
    ...(input.CarModeOptions != null && {
      CarModeOptions: se_CalculateRouteCarModeOptions(input.CarModeOptions, context),
    }),
    ...(input.DepartNow != null && { DepartNow: input.DepartNow }),
    ...(input.DeparturePosition != null && { DeparturePosition: se_Position(input.DeparturePosition, context) }),
    ...(input.DepartureTime != null && { DepartureTime: input.DepartureTime.toISOString().split(".")[0] + "Z" }),
    ...(input.DestinationPosition != null && { DestinationPosition: se_Position(input.DestinationPosition, context) }),
    ...(input.DistanceUnit != null && { DistanceUnit: input.DistanceUnit }),
    ...(input.IncludeLegGeometry != null && { IncludeLegGeometry: input.IncludeLegGeometry }),
    ...(input.TravelMode != null && { TravelMode: input.TravelMode }),
    ...(input.TruckModeOptions != null && {
      TruckModeOptions: se_CalculateRouteTruckModeOptions(input.TruckModeOptions, context),
    }),
    ...(input.WaypointPositions != null && {
      WaypointPositions: se_WaypointPositionList(input.WaypointPositions, context),
    }),
  });
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
  let body: any;
  body = JSON.stringify({
    ...(input.CarModeOptions != null && {
      CarModeOptions: se_CalculateRouteCarModeOptions(input.CarModeOptions, context),
    }),
    ...(input.DepartNow != null && { DepartNow: input.DepartNow }),
    ...(input.DeparturePositions != null && { DeparturePositions: se_PositionList(input.DeparturePositions, context) }),
    ...(input.DepartureTime != null && { DepartureTime: input.DepartureTime.toISOString().split(".")[0] + "Z" }),
    ...(input.DestinationPositions != null && {
      DestinationPositions: se_PositionList(input.DestinationPositions, context),
    }),
    ...(input.DistanceUnit != null && { DistanceUnit: input.DistanceUnit }),
    ...(input.TravelMode != null && { TravelMode: input.TravelMode }),
    ...(input.TruckModeOptions != null && {
      TruckModeOptions: se_CalculateRouteTruckModeOptions(input.TruckModeOptions, context),
    }),
  });
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
  body = JSON.stringify({
    ...(input.CollectionName != null && { CollectionName: input.CollectionName }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
    ...(input.PricingPlanDataSource != null && { PricingPlanDataSource: input.PricingPlanDataSource }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  });
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
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ExpireTime != null && { ExpireTime: input.ExpireTime.toISOString().split(".")[0] + "Z" }),
    ...(input.KeyName != null && { KeyName: input.KeyName }),
    ...(input.NoExpiry != null && { NoExpiry: input.NoExpiry }),
    ...(input.Restrictions != null && { Restrictions: se_ApiKeyRestrictions(input.Restrictions, context) }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "metadata." + resolvedHostname;
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
  body = JSON.stringify({
    ...(input.Configuration != null && { Configuration: se_MapConfiguration(input.Configuration, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.MapName != null && { MapName: input.MapName }),
    ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  });
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
  body = JSON.stringify({
    ...(input.DataSource != null && { DataSource: input.DataSource }),
    ...(input.DataSourceConfiguration != null && {
      DataSourceConfiguration: se_DataSourceConfiguration(input.DataSourceConfiguration, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  });
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
  body = JSON.stringify({
    ...(input.CalculatorName != null && { CalculatorName: input.CalculatorName }),
    ...(input.DataSource != null && { DataSource: input.DataSource }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  });
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
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.PositionFiltering != null && { PositionFiltering: input.PositionFiltering }),
    ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
    ...(input.PricingPlanDataSource != null && { PricingPlanDataSource: input.PricingPlanDataSource }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
    ...(input.TrackerName != null && { TrackerName: input.TrackerName }),
  });
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
    resolvedHostname = "geofencing." + resolvedHostname;
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
    resolvedHostname = "metadata." + resolvedHostname;
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
    resolvedHostname = "maps." + resolvedHostname;
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
    resolvedHostname = "places." + resolvedHostname;
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
    resolvedHostname = "routes." + resolvedHostname;
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
    resolvedHostname = "tracking." + resolvedHostname;
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
    resolvedHostname = "metadata." + resolvedHostname;
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
    resolvedHostname = "routes." + resolvedHostname;
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
    resolvedHostname = "tracking." + resolvedHostname;
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
  body = JSON.stringify({
    ...(input.EndTimeExclusive != null && {
      EndTimeExclusive: input.EndTimeExclusive.toISOString().split(".")[0] + "Z",
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTimeInclusive != null && {
      StartTimeInclusive: input.StartTimeInclusive.toISOString().split(".")[0] + "Z",
    }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
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
  body = JSON.stringify({
    ...(input.Filter != null && { Filter: se_ApiKeyFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "metadata." + resolvedHostname;
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
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
    resolvedHostname = "metadata." + resolvedHostname;
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
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
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
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
  body = JSON.stringify({
    ...(input.Geometry != null && { Geometry: se_GeofenceGeometry(input.Geometry, context) }),
  });
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
  let body: any;
  body = JSON.stringify({
    ...(input.Language != null && { Language: input.Language }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Position != null && { Position: se_Position(input.Position, context) }),
  });
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
  let body: any;
  body = JSON.stringify({
    ...(input.BiasPosition != null && { BiasPosition: se_Position(input.BiasPosition, context) }),
    ...(input.FilterBBox != null && { FilterBBox: se_BoundingBox(input.FilterBBox, context) }),
    ...(input.FilterCountries != null && { FilterCountries: se_CountryCodeList(input.FilterCountries, context) }),
    ...(input.Language != null && { Language: input.Language }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Text != null && { Text: input.Text }),
  });
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
  let body: any;
  body = JSON.stringify({
    ...(input.BiasPosition != null && { BiasPosition: se_Position(input.BiasPosition, context) }),
    ...(input.FilterBBox != null && { FilterBBox: se_BoundingBox(input.FilterBBox, context) }),
    ...(input.FilterCountries != null && { FilterCountries: se_CountryCodeList(input.FilterCountries, context) }),
    ...(input.Language != null && { Language: input.Language }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.Text != null && { Text: input.Text }),
  });
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
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "metadata." + resolvedHostname;
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
    resolvedHostname = "metadata." + resolvedHostname;
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
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
    ...(input.PricingPlanDataSource != null && { PricingPlanDataSource: input.PricingPlanDataSource }),
  });
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
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ExpireTime != null && { ExpireTime: input.ExpireTime.toISOString().split(".")[0] + "Z" }),
    ...(input.ForceUpdate != null && { ForceUpdate: input.ForceUpdate }),
    ...(input.NoExpiry != null && { NoExpiry: input.NoExpiry }),
    ...(input.Restrictions != null && { Restrictions: se_ApiKeyRestrictions(input.Restrictions, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "metadata." + resolvedHostname;
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
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
  });
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
  body = JSON.stringify({
    ...(input.DataSourceConfiguration != null && {
      DataSourceConfiguration: se_DataSourceConfiguration(input.DataSourceConfiguration, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
  });
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
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
  });
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
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.PositionFiltering != null && { PositionFiltering: input.PositionFiltering }),
    ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
    ...(input.PricingPlanDataSource != null && { PricingPlanDataSource: input.PricingPlanDataSource }),
  });
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Errors != null) {
    contents.Errors = de_BatchDeleteDevicePositionHistoryErrorList(data.Errors, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Errors != null) {
    contents.Errors = de_BatchDeleteGeofenceErrorList(data.Errors, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Errors != null) {
    contents.Errors = de_BatchEvaluateGeofencesErrorList(data.Errors, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.DevicePositions != null) {
    contents.DevicePositions = de_DevicePositionList(data.DevicePositions, context);
  }
  if (data.Errors != null) {
    contents.Errors = de_BatchGetDevicePositionErrorList(data.Errors, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Errors != null) {
    contents.Errors = de_BatchPutGeofenceErrorList(data.Errors, context);
  }
  if (data.Successes != null) {
    contents.Successes = de_BatchPutGeofenceSuccessList(data.Successes, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Errors != null) {
    contents.Errors = de_BatchUpdateDevicePositionErrorList(data.Errors, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Legs != null) {
    contents.Legs = de_LegList(data.Legs, context);
  }
  if (data.Summary != null) {
    contents.Summary = de_CalculateRouteSummary(data.Summary, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.RouteMatrix != null) {
    contents.RouteMatrix = de_RouteMatrix(data.RouteMatrix, context);
  }
  if (data.SnappedDeparturePositions != null) {
    contents.SnappedDeparturePositions = de_PositionList(data.SnappedDeparturePositions, context);
  }
  if (data.SnappedDestinationPositions != null) {
    contents.SnappedDestinationPositions = de_PositionList(data.SnappedDestinationPositions, context);
  }
  if (data.Summary != null) {
    contents.Summary = de_CalculateRouteMatrixSummary(data.Summary, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CollectionArn != null) {
    contents.CollectionArn = __expectString(data.CollectionArn);
  }
  if (data.CollectionName != null) {
    contents.CollectionName = __expectString(data.CollectionName);
  }
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreateTime));
  }
  if (data.Key != null) {
    contents.Key = __expectString(data.Key);
  }
  if (data.KeyArn != null) {
    contents.KeyArn = __expectString(data.KeyArn);
  }
  if (data.KeyName != null) {
    contents.KeyName = __expectString(data.KeyName);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreateTime));
  }
  if (data.MapArn != null) {
    contents.MapArn = __expectString(data.MapArn);
  }
  if (data.MapName != null) {
    contents.MapName = __expectString(data.MapName);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreateTime));
  }
  if (data.IndexArn != null) {
    contents.IndexArn = __expectString(data.IndexArn);
  }
  if (data.IndexName != null) {
    contents.IndexName = __expectString(data.IndexName);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CalculatorArn != null) {
    contents.CalculatorArn = __expectString(data.CalculatorArn);
  }
  if (data.CalculatorName != null) {
    contents.CalculatorName = __expectString(data.CalculatorName);
  }
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreateTime));
  }
  if (data.TrackerArn != null) {
    contents.TrackerArn = __expectString(data.TrackerArn);
  }
  if (data.TrackerName != null) {
    contents.TrackerName = __expectString(data.TrackerName);
  }
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
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CollectionArn != null) {
    contents.CollectionArn = __expectString(data.CollectionArn);
  }
  if (data.CollectionName != null) {
    contents.CollectionName = __expectString(data.CollectionName);
  }
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreateTime));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.KmsKeyId != null) {
    contents.KmsKeyId = __expectString(data.KmsKeyId);
  }
  if (data.PricingPlan != null) {
    contents.PricingPlan = __expectString(data.PricingPlan);
  }
  if (data.PricingPlanDataSource != null) {
    contents.PricingPlanDataSource = __expectString(data.PricingPlanDataSource);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.UpdateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreateTime));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.ExpireTime != null) {
    contents.ExpireTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.ExpireTime));
  }
  if (data.Key != null) {
    contents.Key = __expectString(data.Key);
  }
  if (data.KeyArn != null) {
    contents.KeyArn = __expectString(data.KeyArn);
  }
  if (data.KeyName != null) {
    contents.KeyName = __expectString(data.KeyName);
  }
  if (data.Restrictions != null) {
    contents.Restrictions = de_ApiKeyRestrictions(data.Restrictions, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.UpdateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Configuration != null) {
    contents.Configuration = de_MapConfiguration(data.Configuration, context);
  }
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreateTime));
  }
  if (data.DataSource != null) {
    contents.DataSource = __expectString(data.DataSource);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.MapArn != null) {
    contents.MapArn = __expectString(data.MapArn);
  }
  if (data.MapName != null) {
    contents.MapName = __expectString(data.MapName);
  }
  if (data.PricingPlan != null) {
    contents.PricingPlan = __expectString(data.PricingPlan);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.UpdateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreateTime));
  }
  if (data.DataSource != null) {
    contents.DataSource = __expectString(data.DataSource);
  }
  if (data.DataSourceConfiguration != null) {
    contents.DataSourceConfiguration = de_DataSourceConfiguration(data.DataSourceConfiguration, context);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.IndexArn != null) {
    contents.IndexArn = __expectString(data.IndexArn);
  }
  if (data.IndexName != null) {
    contents.IndexName = __expectString(data.IndexName);
  }
  if (data.PricingPlan != null) {
    contents.PricingPlan = __expectString(data.PricingPlan);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.UpdateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CalculatorArn != null) {
    contents.CalculatorArn = __expectString(data.CalculatorArn);
  }
  if (data.CalculatorName != null) {
    contents.CalculatorName = __expectString(data.CalculatorName);
  }
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreateTime));
  }
  if (data.DataSource != null) {
    contents.DataSource = __expectString(data.DataSource);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.PricingPlan != null) {
    contents.PricingPlan = __expectString(data.PricingPlan);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.UpdateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreateTime));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.KmsKeyId != null) {
    contents.KmsKeyId = __expectString(data.KmsKeyId);
  }
  if (data.PositionFiltering != null) {
    contents.PositionFiltering = __expectString(data.PositionFiltering);
  }
  if (data.PricingPlan != null) {
    contents.PricingPlan = __expectString(data.PricingPlan);
  }
  if (data.PricingPlanDataSource != null) {
    contents.PricingPlanDataSource = __expectString(data.PricingPlanDataSource);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  if (data.TrackerArn != null) {
    contents.TrackerArn = __expectString(data.TrackerArn);
  }
  if (data.TrackerName != null) {
    contents.TrackerName = __expectString(data.TrackerName);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.UpdateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Accuracy != null) {
    contents.Accuracy = de_PositionalAccuracy(data.Accuracy, context);
  }
  if (data.DeviceId != null) {
    contents.DeviceId = __expectString(data.DeviceId);
  }
  if (data.Position != null) {
    contents.Position = de_Position(data.Position, context);
  }
  if (data.PositionProperties != null) {
    contents.PositionProperties = de_PropertyMap(data.PositionProperties, context);
  }
  if (data.ReceivedTime != null) {
    contents.ReceivedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.ReceivedTime));
  }
  if (data.SampleTime != null) {
    contents.SampleTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.SampleTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.DevicePositions != null) {
    contents.DevicePositions = de_DevicePositionList(data.DevicePositions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreateTime));
  }
  if (data.GeofenceId != null) {
    contents.GeofenceId = __expectString(data.GeofenceId);
  }
  if (data.Geometry != null) {
    contents.Geometry = de_GeofenceGeometry(data.Geometry, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.UpdateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Place != null) {
    contents.Place = de_Place(data.Place, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Entries != null) {
    contents.Entries = de_ListDevicePositionsResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Entries != null) {
    contents.Entries = de_ListGeofenceCollectionsResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Entries != null) {
    contents.Entries = de_ListGeofenceResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Entries != null) {
    contents.Entries = de_ListKeysResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Entries != null) {
    contents.Entries = de_ListMapsResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Entries != null) {
    contents.Entries = de_ListPlaceIndexesResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Entries != null) {
    contents.Entries = de_ListRouteCalculatorsResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.ConsumerArns != null) {
    contents.ConsumerArns = de_ArnList(data.ConsumerArns, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Entries != null) {
    contents.Entries = de_ListTrackersResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreateTime));
  }
  if (data.GeofenceId != null) {
    contents.GeofenceId = __expectString(data.GeofenceId);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.UpdateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Results != null) {
    contents.Results = de_SearchForPositionResultList(data.Results, context);
  }
  if (data.Summary != null) {
    contents.Summary = de_SearchPlaceIndexForPositionSummary(data.Summary, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Results != null) {
    contents.Results = de_SearchForSuggestionsResultList(data.Results, context);
  }
  if (data.Summary != null) {
    contents.Summary = de_SearchPlaceIndexForSuggestionsSummary(data.Summary, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Results != null) {
    contents.Results = de_SearchForTextResultList(data.Results, context);
  }
  if (data.Summary != null) {
    contents.Summary = de_SearchPlaceIndexForTextSummary(data.Summary, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CollectionArn != null) {
    contents.CollectionArn = __expectString(data.CollectionArn);
  }
  if (data.CollectionName != null) {
    contents.CollectionName = __expectString(data.CollectionName);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.UpdateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.KeyArn != null) {
    contents.KeyArn = __expectString(data.KeyArn);
  }
  if (data.KeyName != null) {
    contents.KeyName = __expectString(data.KeyName);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.UpdateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.MapArn != null) {
    contents.MapArn = __expectString(data.MapArn);
  }
  if (data.MapName != null) {
    contents.MapName = __expectString(data.MapName);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.UpdateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.IndexArn != null) {
    contents.IndexArn = __expectString(data.IndexArn);
  }
  if (data.IndexName != null) {
    contents.IndexName = __expectString(data.IndexName);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.UpdateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CalculatorArn != null) {
    contents.CalculatorArn = __expectString(data.CalculatorArn);
  }
  if (data.CalculatorName != null) {
    contents.CalculatorName = __expectString(data.CalculatorName);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.UpdateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.TrackerArn != null) {
    contents.TrackerArn = __expectString(data.TrackerArn);
  }
  if (data.TrackerName != null) {
    contents.TrackerName = __expectString(data.TrackerName);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.UpdateTime));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
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
  if (data.fieldList != null) {
    contents.FieldList = de_ValidationExceptionFieldList(data.fieldList, context);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.Reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ApiKeyActionList
 */
const se_ApiKeyActionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ApiKeyFilter
 */
const se_ApiKeyFilter = (input: ApiKeyFilter, context: __SerdeContext): any => {
  return {
    ...(input.KeyStatus != null && { KeyStatus: input.KeyStatus }),
  };
};

/**
 * serializeAws_restJson1ApiKeyRestrictions
 */
const se_ApiKeyRestrictions = (input: ApiKeyRestrictions, context: __SerdeContext): any => {
  return {
    ...(input.AllowActions != null && { AllowActions: se_ApiKeyActionList(input.AllowActions, context) }),
    ...(input.AllowReferers != null && { AllowReferers: se_RefererPatternList(input.AllowReferers, context) }),
    ...(input.AllowResources != null && { AllowResources: se_GeoArnList(input.AllowResources, context) }),
  };
};

/**
 * serializeAws_restJson1BatchPutGeofenceRequestEntry
 */
const se_BatchPutGeofenceRequestEntry = (input: BatchPutGeofenceRequestEntry, context: __SerdeContext): any => {
  return {
    ...(input.GeofenceId != null && { GeofenceId: input.GeofenceId }),
    ...(input.Geometry != null && { Geometry: se_GeofenceGeometry(input.Geometry, context) }),
  };
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

/**
 * serializeAws_restJson1CalculateRouteCarModeOptions
 */
const se_CalculateRouteCarModeOptions = (input: CalculateRouteCarModeOptions, context: __SerdeContext): any => {
  return {
    ...(input.AvoidFerries != null && { AvoidFerries: input.AvoidFerries }),
    ...(input.AvoidTolls != null && { AvoidTolls: input.AvoidTolls }),
  };
};

/**
 * serializeAws_restJson1CalculateRouteTruckModeOptions
 */
const se_CalculateRouteTruckModeOptions = (input: CalculateRouteTruckModeOptions, context: __SerdeContext): any => {
  return {
    ...(input.AvoidFerries != null && { AvoidFerries: input.AvoidFerries }),
    ...(input.AvoidTolls != null && { AvoidTolls: input.AvoidTolls }),
    ...(input.Dimensions != null && { Dimensions: se_TruckDimensions(input.Dimensions, context) }),
    ...(input.Weight != null && { Weight: se_TruckWeight(input.Weight, context) }),
  };
};

/**
 * serializeAws_restJson1Circle
 */
const se_Circle = (input: Circle, context: __SerdeContext): any => {
  return {
    ...(input.Center != null && { Center: se_Position(input.Center, context) }),
    ...(input.Radius != null && { Radius: __serializeFloat(input.Radius) }),
  };
};

/**
 * serializeAws_restJson1CountryCodeList
 */
const se_CountryCodeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DataSourceConfiguration
 */
const se_DataSourceConfiguration = (input: DataSourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.IntendedUse != null && { IntendedUse: input.IntendedUse }),
  };
};

/**
 * serializeAws_restJson1DeviceIdsList
 */
const se_DeviceIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DevicePositionUpdate
 */
const se_DevicePositionUpdate = (input: DevicePositionUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Accuracy != null && { Accuracy: se_PositionalAccuracy(input.Accuracy, context) }),
    ...(input.DeviceId != null && { DeviceId: input.DeviceId }),
    ...(input.Position != null && { Position: se_Position(input.Position, context) }),
    ...(input.PositionProperties != null && { PositionProperties: se_PropertyMap(input.PositionProperties, context) }),
    ...(input.SampleTime != null && { SampleTime: input.SampleTime.toISOString().split(".")[0] + "Z" }),
  };
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
 * serializeAws_restJson1GeoArnList
 */
const se_GeoArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1GeofenceGeometry
 */
const se_GeofenceGeometry = (input: GeofenceGeometry, context: __SerdeContext): any => {
  return {
    ...(input.Circle != null && { Circle: se_Circle(input.Circle, context) }),
    ...(input.Polygon != null && { Polygon: se_LinearRings(input.Polygon, context) }),
  };
};

/**
 * serializeAws_restJson1IdList
 */
const se_IdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

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
 * serializeAws_restJson1MapConfiguration
 */
const se_MapConfiguration = (input: MapConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Style != null && { Style: input.Style }),
  };
};

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
  return {
    ...(input.Horizontal != null && { Horizontal: __serializeFloat(input.Horizontal) }),
  };
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

/**
 * serializeAws_restJson1PropertyMap
 */
const se_PropertyMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1RefererPatternList
 */
const se_RefererPatternList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TruckDimensions
 */
const se_TruckDimensions = (input: TruckDimensions, context: __SerdeContext): any => {
  return {
    ...(input.Height != null && { Height: __serializeFloat(input.Height) }),
    ...(input.Length != null && { Length: __serializeFloat(input.Length) }),
    ...(input.Unit != null && { Unit: input.Unit }),
    ...(input.Width != null && { Width: __serializeFloat(input.Width) }),
  };
};

/**
 * serializeAws_restJson1TruckWeight
 */
const se_TruckWeight = (input: TruckWeight, context: __SerdeContext): any => {
  return {
    ...(input.Total != null && { Total: __serializeFloat(input.Total) }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
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

/**
 * deserializeAws_restJson1ApiKeyActionList
 */
const de_ApiKeyActionList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ApiKeyRestrictions
 */
const de_ApiKeyRestrictions = (output: any, context: __SerdeContext): ApiKeyRestrictions => {
  return {
    AllowActions: output.AllowActions != null ? de_ApiKeyActionList(output.AllowActions, context) : undefined,
    AllowReferers: output.AllowReferers != null ? de_RefererPatternList(output.AllowReferers, context) : undefined,
    AllowResources: output.AllowResources != null ? de_GeoArnList(output.AllowResources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ArnList
 */
const de_ArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchDeleteDevicePositionHistoryError
 */
const de_BatchDeleteDevicePositionHistoryError = (
  output: any,
  context: __SerdeContext
): BatchDeleteDevicePositionHistoryError => {
  return {
    DeviceId: __expectString(output.DeviceId),
    Error: output.Error != null ? de_BatchItemError(output.Error, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchDeleteDevicePositionHistoryErrorList
 */
const de_BatchDeleteDevicePositionHistoryErrorList = (
  output: any,
  context: __SerdeContext
): BatchDeleteDevicePositionHistoryError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchDeleteDevicePositionHistoryError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchDeleteGeofenceError
 */
const de_BatchDeleteGeofenceError = (output: any, context: __SerdeContext): BatchDeleteGeofenceError => {
  return {
    Error: output.Error != null ? de_BatchItemError(output.Error, context) : undefined,
    GeofenceId: __expectString(output.GeofenceId),
  } as any;
};

/**
 * deserializeAws_restJson1BatchDeleteGeofenceErrorList
 */
const de_BatchDeleteGeofenceErrorList = (output: any, context: __SerdeContext): BatchDeleteGeofenceError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchDeleteGeofenceError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchEvaluateGeofencesError
 */
const de_BatchEvaluateGeofencesError = (output: any, context: __SerdeContext): BatchEvaluateGeofencesError => {
  return {
    DeviceId: __expectString(output.DeviceId),
    Error: output.Error != null ? de_BatchItemError(output.Error, context) : undefined,
    SampleTime:
      output.SampleTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.SampleTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchEvaluateGeofencesErrorList
 */
const de_BatchEvaluateGeofencesErrorList = (output: any, context: __SerdeContext): BatchEvaluateGeofencesError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchEvaluateGeofencesError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchGetDevicePositionError
 */
const de_BatchGetDevicePositionError = (output: any, context: __SerdeContext): BatchGetDevicePositionError => {
  return {
    DeviceId: __expectString(output.DeviceId),
    Error: output.Error != null ? de_BatchItemError(output.Error, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetDevicePositionErrorList
 */
const de_BatchGetDevicePositionErrorList = (output: any, context: __SerdeContext): BatchGetDevicePositionError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetDevicePositionError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchItemError
 */
const de_BatchItemError = (output: any, context: __SerdeContext): BatchItemError => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_restJson1BatchPutGeofenceError
 */
const de_BatchPutGeofenceError = (output: any, context: __SerdeContext): BatchPutGeofenceError => {
  return {
    Error: output.Error != null ? de_BatchItemError(output.Error, context) : undefined,
    GeofenceId: __expectString(output.GeofenceId),
  } as any;
};

/**
 * deserializeAws_restJson1BatchPutGeofenceErrorList
 */
const de_BatchPutGeofenceErrorList = (output: any, context: __SerdeContext): BatchPutGeofenceError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchPutGeofenceError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchPutGeofenceSuccess
 */
const de_BatchPutGeofenceSuccess = (output: any, context: __SerdeContext): BatchPutGeofenceSuccess => {
  return {
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreateTime)) : undefined,
    GeofenceId: __expectString(output.GeofenceId),
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdateTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchPutGeofenceSuccessList
 */
const de_BatchPutGeofenceSuccessList = (output: any, context: __SerdeContext): BatchPutGeofenceSuccess[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchPutGeofenceSuccess(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchUpdateDevicePositionError
 */
const de_BatchUpdateDevicePositionError = (output: any, context: __SerdeContext): BatchUpdateDevicePositionError => {
  return {
    DeviceId: __expectString(output.DeviceId),
    Error: output.Error != null ? de_BatchItemError(output.Error, context) : undefined,
    SampleTime:
      output.SampleTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.SampleTime)) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CalculateRouteMatrixSummary
 */
const de_CalculateRouteMatrixSummary = (output: any, context: __SerdeContext): CalculateRouteMatrixSummary => {
  return {
    DataSource: __expectString(output.DataSource),
    DistanceUnit: __expectString(output.DistanceUnit),
    ErrorCount: __expectInt32(output.ErrorCount),
    RouteCount: __expectInt32(output.RouteCount),
  } as any;
};

/**
 * deserializeAws_restJson1CalculateRouteSummary
 */
const de_CalculateRouteSummary = (output: any, context: __SerdeContext): CalculateRouteSummary => {
  return {
    DataSource: __expectString(output.DataSource),
    Distance: __limitedParseDouble(output.Distance),
    DistanceUnit: __expectString(output.DistanceUnit),
    DurationSeconds: __limitedParseDouble(output.DurationSeconds),
    RouteBBox: output.RouteBBox != null ? de_BoundingBox(output.RouteBBox, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Circle
 */
const de_Circle = (output: any, context: __SerdeContext): Circle => {
  return {
    Center: output.Center != null ? de_Position(output.Center, context) : undefined,
    Radius: __limitedParseDouble(output.Radius),
  } as any;
};

/**
 * deserializeAws_restJson1CountryCodeList
 */
const de_CountryCodeList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataSourceConfiguration
 */
const de_DataSourceConfiguration = (output: any, context: __SerdeContext): DataSourceConfiguration => {
  return {
    IntendedUse: __expectString(output.IntendedUse),
  } as any;
};

/**
 * deserializeAws_restJson1DevicePosition
 */
const de_DevicePosition = (output: any, context: __SerdeContext): DevicePosition => {
  return {
    Accuracy: output.Accuracy != null ? de_PositionalAccuracy(output.Accuracy, context) : undefined,
    DeviceId: __expectString(output.DeviceId),
    Position: output.Position != null ? de_Position(output.Position, context) : undefined,
    PositionProperties:
      output.PositionProperties != null ? de_PropertyMap(output.PositionProperties, context) : undefined,
    ReceivedTime:
      output.ReceivedTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.ReceivedTime)) : undefined,
    SampleTime:
      output.SampleTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.SampleTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DevicePositionList
 */
const de_DevicePositionList = (output: any, context: __SerdeContext): DevicePosition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DevicePosition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GeoArnList
 */
const de_GeoArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GeofenceGeometry
 */
const de_GeofenceGeometry = (output: any, context: __SerdeContext): GeofenceGeometry => {
  return {
    Circle: output.Circle != null ? de_Circle(output.Circle, context) : undefined,
    Polygon: output.Polygon != null ? de_LinearRings(output.Polygon, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Leg
 */
const de_Leg = (output: any, context: __SerdeContext): Leg => {
  return {
    Distance: __limitedParseDouble(output.Distance),
    DurationSeconds: __limitedParseDouble(output.DurationSeconds),
    EndPosition: output.EndPosition != null ? de_Position(output.EndPosition, context) : undefined,
    Geometry: output.Geometry != null ? de_LegGeometry(output.Geometry, context) : undefined,
    StartPosition: output.StartPosition != null ? de_Position(output.StartPosition, context) : undefined,
    Steps: output.Steps != null ? de_StepList(output.Steps, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LegGeometry
 */
const de_LegGeometry = (output: any, context: __SerdeContext): LegGeometry => {
  return {
    LineString: output.LineString != null ? de_LineString(output.LineString, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LegList
 */
const de_LegList = (output: any, context: __SerdeContext): Leg[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
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
  return {
    Accuracy: output.Accuracy != null ? de_PositionalAccuracy(output.Accuracy, context) : undefined,
    DeviceId: __expectString(output.DeviceId),
    Position: output.Position != null ? de_Position(output.Position, context) : undefined,
    PositionProperties:
      output.PositionProperties != null ? de_PropertyMap(output.PositionProperties, context) : undefined,
    SampleTime:
      output.SampleTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.SampleTime)) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
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
  return {
    CollectionName: __expectString(output.CollectionName),
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreateTime)) : undefined,
    Description: __expectString(output.Description),
    PricingPlan: __expectString(output.PricingPlan),
    PricingPlanDataSource: __expectString(output.PricingPlanDataSource),
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdateTime)) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_ListGeofenceCollectionsResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListGeofenceResponseEntry
 */
const de_ListGeofenceResponseEntry = (output: any, context: __SerdeContext): ListGeofenceResponseEntry => {
  return {
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreateTime)) : undefined,
    GeofenceId: __expectString(output.GeofenceId),
    Geometry: output.Geometry != null ? de_GeofenceGeometry(output.Geometry, context) : undefined,
    Status: __expectString(output.Status),
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdateTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ListGeofenceResponseEntryList
 */
const de_ListGeofenceResponseEntryList = (output: any, context: __SerdeContext): ListGeofenceResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListGeofenceResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListKeysResponseEntry
 */
const de_ListKeysResponseEntry = (output: any, context: __SerdeContext): ListKeysResponseEntry => {
  return {
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreateTime)) : undefined,
    Description: __expectString(output.Description),
    ExpireTime:
      output.ExpireTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.ExpireTime)) : undefined,
    KeyName: __expectString(output.KeyName),
    Restrictions: output.Restrictions != null ? de_ApiKeyRestrictions(output.Restrictions, context) : undefined,
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdateTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ListKeysResponseEntryList
 */
const de_ListKeysResponseEntryList = (output: any, context: __SerdeContext): ListKeysResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListKeysResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListMapsResponseEntry
 */
const de_ListMapsResponseEntry = (output: any, context: __SerdeContext): ListMapsResponseEntry => {
  return {
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreateTime)) : undefined,
    DataSource: __expectString(output.DataSource),
    Description: __expectString(output.Description),
    MapName: __expectString(output.MapName),
    PricingPlan: __expectString(output.PricingPlan),
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdateTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ListMapsResponseEntryList
 */
const de_ListMapsResponseEntryList = (output: any, context: __SerdeContext): ListMapsResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListMapsResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListPlaceIndexesResponseEntry
 */
const de_ListPlaceIndexesResponseEntry = (output: any, context: __SerdeContext): ListPlaceIndexesResponseEntry => {
  return {
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreateTime)) : undefined,
    DataSource: __expectString(output.DataSource),
    Description: __expectString(output.Description),
    IndexName: __expectString(output.IndexName),
    PricingPlan: __expectString(output.PricingPlan),
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdateTime)) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
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
  return {
    CalculatorName: __expectString(output.CalculatorName),
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreateTime)) : undefined,
    DataSource: __expectString(output.DataSource),
    Description: __expectString(output.Description),
    PricingPlan: __expectString(output.PricingPlan),
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdateTime)) : undefined,
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_ListRouteCalculatorsResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListTrackersResponseEntry
 */
const de_ListTrackersResponseEntry = (output: any, context: __SerdeContext): ListTrackersResponseEntry => {
  return {
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreateTime)) : undefined,
    Description: __expectString(output.Description),
    PricingPlan: __expectString(output.PricingPlan),
    PricingPlanDataSource: __expectString(output.PricingPlanDataSource),
    TrackerName: __expectString(output.TrackerName),
    UpdateTime:
      output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.UpdateTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ListTrackersResponseEntryList
 */
const de_ListTrackersResponseEntryList = (output: any, context: __SerdeContext): ListTrackersResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListTrackersResponseEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MapConfiguration
 */
const de_MapConfiguration = (output: any, context: __SerdeContext): MapConfiguration => {
  return {
    Style: __expectString(output.Style),
  } as any;
};

/**
 * deserializeAws_restJson1Place
 */
const de_Place = (output: any, context: __SerdeContext): Place => {
  return {
    AddressNumber: __expectString(output.AddressNumber),
    Country: __expectString(output.Country),
    Geometry: output.Geometry != null ? de_PlaceGeometry(output.Geometry, context) : undefined,
    Interpolated: __expectBoolean(output.Interpolated),
    Label: __expectString(output.Label),
    Municipality: __expectString(output.Municipality),
    Neighborhood: __expectString(output.Neighborhood),
    PostalCode: __expectString(output.PostalCode),
    Region: __expectString(output.Region),
    Street: __expectString(output.Street),
    SubRegion: __expectString(output.SubRegion),
    TimeZone: output.TimeZone != null ? de_TimeZone(output.TimeZone, context) : undefined,
    UnitNumber: __expectString(output.UnitNumber),
    UnitType: __expectString(output.UnitType),
  } as any;
};

/**
 * deserializeAws_restJson1PlaceGeometry
 */
const de_PlaceGeometry = (output: any, context: __SerdeContext): PlaceGeometry => {
  return {
    Point: output.Point != null ? de_Position(output.Point, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Position
 */
const de_Position = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PositionalAccuracy
 */
const de_PositionalAccuracy = (output: any, context: __SerdeContext): PositionalAccuracy => {
  return {
    Horizontal: __limitedParseDouble(output.Horizontal),
  } as any;
};

/**
 * deserializeAws_restJson1PositionList
 */
const de_PositionList = (output: any, context: __SerdeContext): number[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Position(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PropertyMap
 */
const de_PropertyMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1RefererPatternList
 */
const de_RefererPatternList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RouteMatrix
 */
const de_RouteMatrix = (output: any, context: __SerdeContext): RouteMatrixEntry[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RouteMatrixRow(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RouteMatrixEntry
 */
const de_RouteMatrixEntry = (output: any, context: __SerdeContext): RouteMatrixEntry => {
  return {
    Distance: __limitedParseDouble(output.Distance),
    DurationSeconds: __limitedParseDouble(output.DurationSeconds),
    Error: output.Error != null ? de_RouteMatrixEntryError(output.Error, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RouteMatrixEntryError
 */
const de_RouteMatrixEntryError = (output: any, context: __SerdeContext): RouteMatrixEntryError => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_restJson1RouteMatrixRow
 */
const de_RouteMatrixRow = (output: any, context: __SerdeContext): RouteMatrixEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RouteMatrixEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchForPositionResult
 */
const de_SearchForPositionResult = (output: any, context: __SerdeContext): SearchForPositionResult => {
  return {
    Distance: __limitedParseDouble(output.Distance),
    Place: output.Place != null ? de_Place(output.Place, context) : undefined,
    PlaceId: __expectString(output.PlaceId),
  } as any;
};

/**
 * deserializeAws_restJson1SearchForPositionResultList
 */
const de_SearchForPositionResultList = (output: any, context: __SerdeContext): SearchForPositionResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SearchForPositionResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchForSuggestionsResult
 */
const de_SearchForSuggestionsResult = (output: any, context: __SerdeContext): SearchForSuggestionsResult => {
  return {
    PlaceId: __expectString(output.PlaceId),
    Text: __expectString(output.Text),
  } as any;
};

/**
 * deserializeAws_restJson1SearchForSuggestionsResultList
 */
const de_SearchForSuggestionsResultList = (output: any, context: __SerdeContext): SearchForSuggestionsResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SearchForSuggestionsResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchForTextResult
 */
const de_SearchForTextResult = (output: any, context: __SerdeContext): SearchForTextResult => {
  return {
    Distance: __limitedParseDouble(output.Distance),
    Place: output.Place != null ? de_Place(output.Place, context) : undefined,
    PlaceId: __expectString(output.PlaceId),
    Relevance: __limitedParseDouble(output.Relevance),
  } as any;
};

/**
 * deserializeAws_restJson1SearchForTextResultList
 */
const de_SearchForTextResultList = (output: any, context: __SerdeContext): SearchForTextResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
  return {
    DataSource: __expectString(output.DataSource),
    Language: __expectString(output.Language),
    MaxResults: __expectInt32(output.MaxResults),
    Position: output.Position != null ? de_Position(output.Position, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SearchPlaceIndexForSuggestionsSummary
 */
const de_SearchPlaceIndexForSuggestionsSummary = (
  output: any,
  context: __SerdeContext
): SearchPlaceIndexForSuggestionsSummary => {
  return {
    BiasPosition: output.BiasPosition != null ? de_Position(output.BiasPosition, context) : undefined,
    DataSource: __expectString(output.DataSource),
    FilterBBox: output.FilterBBox != null ? de_BoundingBox(output.FilterBBox, context) : undefined,
    FilterCountries: output.FilterCountries != null ? de_CountryCodeList(output.FilterCountries, context) : undefined,
    Language: __expectString(output.Language),
    MaxResults: __expectInt32(output.MaxResults),
    Text: __expectString(output.Text),
  } as any;
};

/**
 * deserializeAws_restJson1SearchPlaceIndexForTextSummary
 */
const de_SearchPlaceIndexForTextSummary = (output: any, context: __SerdeContext): SearchPlaceIndexForTextSummary => {
  return {
    BiasPosition: output.BiasPosition != null ? de_Position(output.BiasPosition, context) : undefined,
    DataSource: __expectString(output.DataSource),
    FilterBBox: output.FilterBBox != null ? de_BoundingBox(output.FilterBBox, context) : undefined,
    FilterCountries: output.FilterCountries != null ? de_CountryCodeList(output.FilterCountries, context) : undefined,
    Language: __expectString(output.Language),
    MaxResults: __expectInt32(output.MaxResults),
    ResultBBox: output.ResultBBox != null ? de_BoundingBox(output.ResultBBox, context) : undefined,
    Text: __expectString(output.Text),
  } as any;
};

/**
 * deserializeAws_restJson1Step
 */
const de_Step = (output: any, context: __SerdeContext): Step => {
  return {
    Distance: __limitedParseDouble(output.Distance),
    DurationSeconds: __limitedParseDouble(output.DurationSeconds),
    EndPosition: output.EndPosition != null ? de_Position(output.EndPosition, context) : undefined,
    GeometryOffset: __expectInt32(output.GeometryOffset),
    StartPosition: output.StartPosition != null ? de_Position(output.StartPosition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1StepList
 */
const de_StepList = (output: any, context: __SerdeContext): Step[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Step(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TimeZone
 */
const de_TimeZone = (output: any, context: __SerdeContext): TimeZone => {
  return {
    Name: __expectString(output.Name),
    Offset: __expectInt32(output.Offset),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    Message: __expectString(output.message),
    Name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

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
