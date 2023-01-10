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
  parseRfc3339DateTime as __parseRfc3339DateTime,
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

export const serializeAws_restJson1AssociateTrackerConsumerCommand = async (
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

export const serializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = async (
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
    ...(input.DeviceIds != null && { DeviceIds: serializeAws_restJson1DeviceIdsList(input.DeviceIds, context) }),
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

export const serializeAws_restJson1BatchDeleteGeofenceCommand = async (
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
    ...(input.GeofenceIds != null && { GeofenceIds: serializeAws_restJson1IdList(input.GeofenceIds, context) }),
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

export const serializeAws_restJson1BatchEvaluateGeofencesCommand = async (
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
      DevicePositionUpdates: serializeAws_restJson1DevicePositionUpdateList(input.DevicePositionUpdates, context),
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

export const serializeAws_restJson1BatchGetDevicePositionCommand = async (
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
    ...(input.DeviceIds != null && { DeviceIds: serializeAws_restJson1IdList(input.DeviceIds, context) }),
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

export const serializeAws_restJson1BatchPutGeofenceCommand = async (
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
    ...(input.Entries != null && {
      Entries: serializeAws_restJson1BatchPutGeofenceRequestEntryList(input.Entries, context),
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

export const serializeAws_restJson1BatchUpdateDevicePositionCommand = async (
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
    ...(input.Updates != null && { Updates: serializeAws_restJson1DevicePositionUpdateList(input.Updates, context) }),
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

export const serializeAws_restJson1CalculateRouteCommand = async (
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
      CarModeOptions: serializeAws_restJson1CalculateRouteCarModeOptions(input.CarModeOptions, context),
    }),
    ...(input.DepartNow != null && { DepartNow: input.DepartNow }),
    ...(input.DeparturePosition != null && {
      DeparturePosition: serializeAws_restJson1Position(input.DeparturePosition, context),
    }),
    ...(input.DepartureTime != null && { DepartureTime: input.DepartureTime.toISOString().split(".")[0] + "Z" }),
    ...(input.DestinationPosition != null && {
      DestinationPosition: serializeAws_restJson1Position(input.DestinationPosition, context),
    }),
    ...(input.DistanceUnit != null && { DistanceUnit: input.DistanceUnit }),
    ...(input.IncludeLegGeometry != null && { IncludeLegGeometry: input.IncludeLegGeometry }),
    ...(input.TravelMode != null && { TravelMode: input.TravelMode }),
    ...(input.TruckModeOptions != null && {
      TruckModeOptions: serializeAws_restJson1CalculateRouteTruckModeOptions(input.TruckModeOptions, context),
    }),
    ...(input.WaypointPositions != null && {
      WaypointPositions: serializeAws_restJson1WaypointPositionList(input.WaypointPositions, context),
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

export const serializeAws_restJson1CalculateRouteMatrixCommand = async (
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
      CarModeOptions: serializeAws_restJson1CalculateRouteCarModeOptions(input.CarModeOptions, context),
    }),
    ...(input.DepartNow != null && { DepartNow: input.DepartNow }),
    ...(input.DeparturePositions != null && {
      DeparturePositions: serializeAws_restJson1PositionList(input.DeparturePositions, context),
    }),
    ...(input.DepartureTime != null && { DepartureTime: input.DepartureTime.toISOString().split(".")[0] + "Z" }),
    ...(input.DestinationPositions != null && {
      DestinationPositions: serializeAws_restJson1PositionList(input.DestinationPositions, context),
    }),
    ...(input.DistanceUnit != null && { DistanceUnit: input.DistanceUnit }),
    ...(input.TravelMode != null && { TravelMode: input.TravelMode }),
    ...(input.TruckModeOptions != null && {
      TruckModeOptions: serializeAws_restJson1CalculateRouteTruckModeOptions(input.TruckModeOptions, context),
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

export const serializeAws_restJson1CreateGeofenceCollectionCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateMapCommand = async (
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
    ...(input.Configuration != null && {
      Configuration: serializeAws_restJson1MapConfiguration(input.Configuration, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.MapName != null && { MapName: input.MapName }),
    ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreatePlaceIndexCommand = async (
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
      DataSourceConfiguration: serializeAws_restJson1DataSourceConfiguration(input.DataSourceConfiguration, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.PricingPlan != null && { PricingPlan: input.PricingPlan }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateRouteCalculatorCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateTrackerCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteGeofenceCollectionCommand = async (
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

export const serializeAws_restJson1DeleteMapCommand = async (
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

export const serializeAws_restJson1DeletePlaceIndexCommand = async (
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

export const serializeAws_restJson1DeleteRouteCalculatorCommand = async (
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

export const serializeAws_restJson1DeleteTrackerCommand = async (
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

export const serializeAws_restJson1DescribeGeofenceCollectionCommand = async (
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

export const serializeAws_restJson1DescribeMapCommand = async (
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

export const serializeAws_restJson1DescribePlaceIndexCommand = async (
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

export const serializeAws_restJson1DescribeRouteCalculatorCommand = async (
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

export const serializeAws_restJson1DescribeTrackerCommand = async (
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

export const serializeAws_restJson1DisassociateTrackerConsumerCommand = async (
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

export const serializeAws_restJson1GetDevicePositionCommand = async (
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

export const serializeAws_restJson1GetDevicePositionHistoryCommand = async (
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

export const serializeAws_restJson1GetGeofenceCommand = async (
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

export const serializeAws_restJson1GetMapGlyphsCommand = async (
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

export const serializeAws_restJson1GetMapSpritesCommand = async (
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

export const serializeAws_restJson1GetMapStyleDescriptorCommand = async (
  input: GetMapStyleDescriptorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/maps/v0/maps/{MapName}/style-descriptor";
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

export const serializeAws_restJson1GetMapTileCommand = async (
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

export const serializeAws_restJson1GetPlaceCommand = async (
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

export const serializeAws_restJson1ListDevicePositionsCommand = async (
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

export const serializeAws_restJson1ListGeofenceCollectionsCommand = async (
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

export const serializeAws_restJson1ListGeofencesCommand = async (
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

export const serializeAws_restJson1ListMapsCommand = async (
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

export const serializeAws_restJson1ListPlaceIndexesCommand = async (
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

export const serializeAws_restJson1ListRouteCalculatorsCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListTrackerConsumersCommand = async (
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

export const serializeAws_restJson1ListTrackersCommand = async (
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

export const serializeAws_restJson1PutGeofenceCommand = async (
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
    ...(input.Geometry != null && { Geometry: serializeAws_restJson1GeofenceGeometry(input.Geometry, context) }),
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

export const serializeAws_restJson1SearchPlaceIndexForPositionCommand = async (
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
    ...(input.Position != null && { Position: serializeAws_restJson1Position(input.Position, context) }),
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

export const serializeAws_restJson1SearchPlaceIndexForSuggestionsCommand = async (
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
    ...(input.BiasPosition != null && { BiasPosition: serializeAws_restJson1Position(input.BiasPosition, context) }),
    ...(input.FilterBBox != null && { FilterBBox: serializeAws_restJson1BoundingBox(input.FilterBBox, context) }),
    ...(input.FilterCountries != null && {
      FilterCountries: serializeAws_restJson1CountryCodeList(input.FilterCountries, context),
    }),
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

export const serializeAws_restJson1SearchPlaceIndexForTextCommand = async (
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
    ...(input.BiasPosition != null && { BiasPosition: serializeAws_restJson1Position(input.BiasPosition, context) }),
    ...(input.FilterBBox != null && { FilterBBox: serializeAws_restJson1BoundingBox(input.FilterBBox, context) }),
    ...(input.FilterCountries != null && {
      FilterCountries: serializeAws_restJson1CountryCodeList(input.FilterCountries, context),
    }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateGeofenceCollectionCommand = async (
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

export const serializeAws_restJson1UpdateMapCommand = async (
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

export const serializeAws_restJson1UpdatePlaceIndexCommand = async (
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
      DataSourceConfiguration: serializeAws_restJson1DataSourceConfiguration(input.DataSourceConfiguration, context),
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

export const serializeAws_restJson1UpdateRouteCalculatorCommand = async (
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

export const serializeAws_restJson1UpdateTrackerCommand = async (
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

export const deserializeAws_restJson1AssociateTrackerConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTrackerConsumerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateTrackerConsumerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateTrackerConsumerCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.location#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.location#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDevicePositionHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1BatchDeleteDevicePositionHistoryErrorList(data.Errors, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchDeleteDevicePositionHistoryCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchDeleteGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDeleteGeofenceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1BatchDeleteGeofenceErrorList(data.Errors, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchDeleteGeofenceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchEvaluateGeofencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEvaluateGeofencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchEvaluateGeofencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1BatchEvaluateGeofencesErrorList(data.Errors, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchEvaluateGeofencesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchGetDevicePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDevicePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchGetDevicePositionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DevicePositions != null) {
    contents.DevicePositions = deserializeAws_restJson1DevicePositionList(data.DevicePositions, context);
  }
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1BatchGetDevicePositionErrorList(data.Errors, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchGetDevicePositionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchPutGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchPutGeofenceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1BatchPutGeofenceErrorList(data.Errors, context);
  }
  if (data.Successes != null) {
    contents.Successes = deserializeAws_restJson1BatchPutGeofenceSuccessList(data.Successes, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchPutGeofenceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchUpdateDevicePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateDevicePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchUpdateDevicePositionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Errors != null) {
    contents.Errors = deserializeAws_restJson1BatchUpdateDevicePositionErrorList(data.Errors, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchUpdateDevicePositionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CalculateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CalculateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CalculateRouteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Legs != null) {
    contents.Legs = deserializeAws_restJson1LegList(data.Legs, context);
  }
  if (data.Summary != null) {
    contents.Summary = deserializeAws_restJson1CalculateRouteSummary(data.Summary, context);
  }
  return contents;
};

const deserializeAws_restJson1CalculateRouteCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CalculateRouteMatrixCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CalculateRouteMatrixCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CalculateRouteMatrixCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.RouteMatrix != null) {
    contents.RouteMatrix = deserializeAws_restJson1RouteMatrix(data.RouteMatrix, context);
  }
  if (data.SnappedDeparturePositions != null) {
    contents.SnappedDeparturePositions = deserializeAws_restJson1PositionList(data.SnappedDeparturePositions, context);
  }
  if (data.SnappedDestinationPositions != null) {
    contents.SnappedDestinationPositions = deserializeAws_restJson1PositionList(
      data.SnappedDestinationPositions,
      context
    );
  }
  if (data.Summary != null) {
    contents.Summary = deserializeAws_restJson1CalculateRouteMatrixSummary(data.Summary, context);
  }
  return contents;
};

const deserializeAws_restJson1CalculateRouteMatrixCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGeofenceCollectionCommandError(output, context);
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
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
  }
  return contents;
};

const deserializeAws_restJson1CreateGeofenceCollectionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.location#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.location#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMapCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
  }
  if (data.MapArn != null) {
    contents.MapArn = __expectString(data.MapArn);
  }
  if (data.MapName != null) {
    contents.MapName = __expectString(data.MapName);
  }
  return contents;
};

const deserializeAws_restJson1CreateMapCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.location#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.location#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreatePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePlaceIndexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
  }
  if (data.IndexArn != null) {
    contents.IndexArn = __expectString(data.IndexArn);
  }
  if (data.IndexName != null) {
    contents.IndexName = __expectString(data.IndexName);
  }
  return contents;
};

const deserializeAws_restJson1CreatePlaceIndexCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.location#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.location#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateRouteCalculatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCalculatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRouteCalculatorCommandError(output, context);
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
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
  }
  return contents;
};

const deserializeAws_restJson1CreateRouteCalculatorCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.location#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.location#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTrackerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
  }
  if (data.TrackerArn != null) {
    contents.TrackerArn = __expectString(data.TrackerArn);
  }
  if (data.TrackerName != null) {
    contents.TrackerName = __expectString(data.TrackerName);
  }
  return contents;
};

const deserializeAws_restJson1CreateTrackerCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.location#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGeofenceCollectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteGeofenceCollectionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMapCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteMapCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeletePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePlaceIndexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeletePlaceIndexCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteRouteCalculatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCalculatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteCalculatorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRouteCalculatorCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTrackerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteTrackerCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGeofenceCollectionCommandError(output, context);
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
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
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
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
  }
  return contents;
};

const deserializeAws_restJson1DescribeGeofenceCollectionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeMapCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Configuration != null) {
    contents.Configuration = deserializeAws_restJson1MapConfiguration(data.Configuration, context);
  }
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
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
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
  }
  return contents;
};

const deserializeAws_restJson1DescribeMapCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePlaceIndexCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
  }
  if (data.DataSource != null) {
    contents.DataSource = __expectString(data.DataSource);
  }
  if (data.DataSourceConfiguration != null) {
    contents.DataSourceConfiguration = deserializeAws_restJson1DataSourceConfiguration(
      data.DataSourceConfiguration,
      context
    );
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
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
  }
  return contents;
};

const deserializeAws_restJson1DescribePlaceIndexCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeRouteCalculatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouteCalculatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRouteCalculatorCommandError(output, context);
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
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
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
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
  }
  return contents;
};

const deserializeAws_restJson1DescribeRouteCalculatorCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeTrackerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
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
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.TrackerArn != null) {
    contents.TrackerArn = __expectString(data.TrackerArn);
  }
  if (data.TrackerName != null) {
    contents.TrackerName = __expectString(data.TrackerName);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
  }
  return contents;
};

const deserializeAws_restJson1DescribeTrackerCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateTrackerConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTrackerConsumerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateTrackerConsumerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateTrackerConsumerCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDevicePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDevicePositionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Accuracy != null) {
    contents.Accuracy = deserializeAws_restJson1PositionalAccuracy(data.Accuracy, context);
  }
  if (data.DeviceId != null) {
    contents.DeviceId = __expectString(data.DeviceId);
  }
  if (data.Position != null) {
    contents.Position = deserializeAws_restJson1Position(data.Position, context);
  }
  if (data.PositionProperties != null) {
    contents.PositionProperties = deserializeAws_restJson1PropertyMap(data.PositionProperties, context);
  }
  if (data.ReceivedTime != null) {
    contents.ReceivedTime = __expectNonNull(__parseRfc3339DateTime(data.ReceivedTime));
  }
  if (data.SampleTime != null) {
    contents.SampleTime = __expectNonNull(__parseRfc3339DateTime(data.SampleTime));
  }
  return contents;
};

const deserializeAws_restJson1GetDevicePositionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDevicePositionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePositionHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDevicePositionHistoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DevicePositions != null) {
    contents.DevicePositions = deserializeAws_restJson1DevicePositionList(data.DevicePositions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetDevicePositionHistoryCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGeofenceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
  }
  if (data.GeofenceId != null) {
    contents.GeofenceId = __expectString(data.GeofenceId);
  }
  if (data.Geometry != null) {
    contents.Geometry = deserializeAws_restJson1GeofenceGeometry(data.Geometry, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
  }
  return contents;
};

const deserializeAws_restJson1GetGeofenceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMapGlyphsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapGlyphsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMapGlyphsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ContentType: [, output.headers["content-type"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

const deserializeAws_restJson1GetMapGlyphsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMapSpritesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapSpritesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMapSpritesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ContentType: [, output.headers["content-type"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

const deserializeAws_restJson1GetMapSpritesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMapStyleDescriptorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapStyleDescriptorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMapStyleDescriptorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ContentType: [, output.headers["content-type"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

const deserializeAws_restJson1GetMapStyleDescriptorCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMapTileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapTileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMapTileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    ContentType: [, output.headers["content-type"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return contents;
};

const deserializeAws_restJson1GetMapTileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPlaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlaceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPlaceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Place != null) {
    contents.Place = deserializeAws_restJson1Place(data.Place, context);
  }
  return contents;
};

const deserializeAws_restJson1GetPlaceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDevicePositionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicePositionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDevicePositionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Entries != null) {
    contents.Entries = deserializeAws_restJson1ListDevicePositionsResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDevicePositionsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListGeofenceCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeofenceCollectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGeofenceCollectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Entries != null) {
    contents.Entries = deserializeAws_restJson1ListGeofenceCollectionsResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListGeofenceCollectionsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListGeofencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeofencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGeofencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Entries != null) {
    contents.Entries = deserializeAws_restJson1ListGeofenceResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListGeofencesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMapsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Entries != null) {
    contents.Entries = deserializeAws_restJson1ListMapsResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMapsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPlaceIndexesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaceIndexesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPlaceIndexesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Entries != null) {
    contents.Entries = deserializeAws_restJson1ListPlaceIndexesResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListPlaceIndexesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListRouteCalculatorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRouteCalculatorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRouteCalculatorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Entries != null) {
    contents.Entries = deserializeAws_restJson1ListRouteCalculatorsResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListRouteCalculatorsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTrackerConsumersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrackerConsumersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTrackerConsumersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConsumerArns != null) {
    contents.ConsumerArns = deserializeAws_restJson1ArnList(data.ConsumerArns, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListTrackerConsumersCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTrackersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrackersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTrackersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Entries != null) {
    contents.Entries = deserializeAws_restJson1ListTrackersResponseEntryList(data.Entries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListTrackersCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutGeofenceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreateTime != null) {
    contents.CreateTime = __expectNonNull(__parseRfc3339DateTime(data.CreateTime));
  }
  if (data.GeofenceId != null) {
    contents.GeofenceId = __expectString(data.GeofenceId);
  }
  if (data.UpdateTime != null) {
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
  }
  return contents;
};

const deserializeAws_restJson1PutGeofenceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.location#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SearchPlaceIndexForPositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForPositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchPlaceIndexForPositionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Results != null) {
    contents.Results = deserializeAws_restJson1SearchForPositionResultList(data.Results, context);
  }
  if (data.Summary != null) {
    contents.Summary = deserializeAws_restJson1SearchPlaceIndexForPositionSummary(data.Summary, context);
  }
  return contents;
};

const deserializeAws_restJson1SearchPlaceIndexForPositionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForSuggestionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Results != null) {
    contents.Results = deserializeAws_restJson1SearchForSuggestionsResultList(data.Results, context);
  }
  if (data.Summary != null) {
    contents.Summary = deserializeAws_restJson1SearchPlaceIndexForSuggestionsSummary(data.Summary, context);
  }
  return contents;
};

const deserializeAws_restJson1SearchPlaceIndexForSuggestionsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SearchPlaceIndexForTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForTextCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchPlaceIndexForTextCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Results != null) {
    contents.Results = deserializeAws_restJson1SearchForTextResultList(data.Results, context);
  }
  if (data.Summary != null) {
    contents.Summary = deserializeAws_restJson1SearchPlaceIndexForTextSummary(data.Summary, context);
  }
  return contents;
};

const deserializeAws_restJson1SearchPlaceIndexForTextCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGeofenceCollectionCommandError(output, context);
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
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
  }
  return contents;
};

const deserializeAws_restJson1UpdateGeofenceCollectionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMapCommandError(output, context);
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
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
  }
  return contents;
};

const deserializeAws_restJson1UpdateMapCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdatePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePlaceIndexCommandError(output, context);
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
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
  }
  return contents;
};

const deserializeAws_restJson1UpdatePlaceIndexCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateRouteCalculatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCalculatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRouteCalculatorCommandError(output, context);
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
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
  }
  return contents;
};

const deserializeAws_restJson1UpdateRouteCalculatorCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTrackerCommandError(output, context);
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
    contents.UpdateTime = __expectNonNull(__parseRfc3339DateTime(data.UpdateTime));
  }
  return contents;
};

const deserializeAws_restJson1UpdateTrackerCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.fieldList != null) {
    contents.FieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
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

const serializeAws_restJson1BatchPutGeofenceRequestEntry = (
  input: BatchPutGeofenceRequestEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.GeofenceId != null && { GeofenceId: input.GeofenceId }),
    ...(input.Geometry != null && { Geometry: serializeAws_restJson1GeofenceGeometry(input.Geometry, context) }),
  };
};

const serializeAws_restJson1BatchPutGeofenceRequestEntryList = (
  input: BatchPutGeofenceRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1BatchPutGeofenceRequestEntry(entry, context);
    });
};

const serializeAws_restJson1BoundingBox = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

const serializeAws_restJson1CalculateRouteCarModeOptions = (
  input: CalculateRouteCarModeOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvoidFerries != null && { AvoidFerries: input.AvoidFerries }),
    ...(input.AvoidTolls != null && { AvoidTolls: input.AvoidTolls }),
  };
};

const serializeAws_restJson1CalculateRouteTruckModeOptions = (
  input: CalculateRouteTruckModeOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvoidFerries != null && { AvoidFerries: input.AvoidFerries }),
    ...(input.AvoidTolls != null && { AvoidTolls: input.AvoidTolls }),
    ...(input.Dimensions != null && { Dimensions: serializeAws_restJson1TruckDimensions(input.Dimensions, context) }),
    ...(input.Weight != null && { Weight: serializeAws_restJson1TruckWeight(input.Weight, context) }),
  };
};

const serializeAws_restJson1Circle = (input: Circle, context: __SerdeContext): any => {
  return {
    ...(input.Center != null && { Center: serializeAws_restJson1Position(input.Center, context) }),
    ...(input.Radius != null && { Radius: __serializeFloat(input.Radius) }),
  };
};

const serializeAws_restJson1CountryCodeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DataSourceConfiguration = (
  input: DataSourceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.IntendedUse != null && { IntendedUse: input.IntendedUse }),
  };
};

const serializeAws_restJson1DeviceIdsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DevicePositionUpdate = (input: DevicePositionUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Accuracy != null && { Accuracy: serializeAws_restJson1PositionalAccuracy(input.Accuracy, context) }),
    ...(input.DeviceId != null && { DeviceId: input.DeviceId }),
    ...(input.Position != null && { Position: serializeAws_restJson1Position(input.Position, context) }),
    ...(input.PositionProperties != null && {
      PositionProperties: serializeAws_restJson1PropertyMap(input.PositionProperties, context),
    }),
    ...(input.SampleTime != null && { SampleTime: input.SampleTime.toISOString().split(".")[0] + "Z" }),
  };
};

const serializeAws_restJson1DevicePositionUpdateList = (
  input: DevicePositionUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DevicePositionUpdate(entry, context);
    });
};

const serializeAws_restJson1GeofenceGeometry = (input: GeofenceGeometry, context: __SerdeContext): any => {
  return {
    ...(input.Circle != null && { Circle: serializeAws_restJson1Circle(input.Circle, context) }),
    ...(input.Polygon != null && { Polygon: serializeAws_restJson1LinearRings(input.Polygon, context) }),
  };
};

const serializeAws_restJson1IdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1LinearRing = (input: number[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Position(entry, context);
    });
};

const serializeAws_restJson1LinearRings = (input: number[][][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LinearRing(entry, context);
    });
};

const serializeAws_restJson1MapConfiguration = (input: MapConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Style != null && { Style: input.Style }),
  };
};

const serializeAws_restJson1Position = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

const serializeAws_restJson1PositionalAccuracy = (input: PositionalAccuracy, context: __SerdeContext): any => {
  return {
    ...(input.Horizontal != null && { Horizontal: __serializeFloat(input.Horizontal) }),
  };
};

const serializeAws_restJson1PositionList = (input: number[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Position(entry, context);
    });
};

const serializeAws_restJson1PropertyMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TruckDimensions = (input: TruckDimensions, context: __SerdeContext): any => {
  return {
    ...(input.Height != null && { Height: __serializeFloat(input.Height) }),
    ...(input.Length != null && { Length: __serializeFloat(input.Length) }),
    ...(input.Unit != null && { Unit: input.Unit }),
    ...(input.Width != null && { Width: __serializeFloat(input.Width) }),
  };
};

const serializeAws_restJson1TruckWeight = (input: TruckWeight, context: __SerdeContext): any => {
  return {
    ...(input.Total != null && { Total: __serializeFloat(input.Total) }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

const serializeAws_restJson1WaypointPositionList = (input: number[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Position(entry, context);
    });
};

const deserializeAws_restJson1ArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1BatchDeleteDevicePositionHistoryError = (
  output: any,
  context: __SerdeContext
): BatchDeleteDevicePositionHistoryError => {
  return {
    DeviceId: __expectString(output.DeviceId),
    Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
  } as any;
};

const deserializeAws_restJson1BatchDeleteDevicePositionHistoryErrorList = (
  output: any,
  context: __SerdeContext
): BatchDeleteDevicePositionHistoryError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchDeleteDevicePositionHistoryError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchDeleteGeofenceError = (
  output: any,
  context: __SerdeContext
): BatchDeleteGeofenceError => {
  return {
    Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
    GeofenceId: __expectString(output.GeofenceId),
  } as any;
};

const deserializeAws_restJson1BatchDeleteGeofenceErrorList = (
  output: any,
  context: __SerdeContext
): BatchDeleteGeofenceError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchDeleteGeofenceError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchEvaluateGeofencesError = (
  output: any,
  context: __SerdeContext
): BatchEvaluateGeofencesError => {
  return {
    DeviceId: __expectString(output.DeviceId),
    Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
    SampleTime: output.SampleTime != null ? __expectNonNull(__parseRfc3339DateTime(output.SampleTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1BatchEvaluateGeofencesErrorList = (
  output: any,
  context: __SerdeContext
): BatchEvaluateGeofencesError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchEvaluateGeofencesError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchGetDevicePositionError = (
  output: any,
  context: __SerdeContext
): BatchGetDevicePositionError => {
  return {
    DeviceId: __expectString(output.DeviceId),
    Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
  } as any;
};

const deserializeAws_restJson1BatchGetDevicePositionErrorList = (
  output: any,
  context: __SerdeContext
): BatchGetDevicePositionError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchGetDevicePositionError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchItemError = (output: any, context: __SerdeContext): BatchItemError => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1BatchPutGeofenceError = (output: any, context: __SerdeContext): BatchPutGeofenceError => {
  return {
    Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
    GeofenceId: __expectString(output.GeofenceId),
  } as any;
};

const deserializeAws_restJson1BatchPutGeofenceErrorList = (
  output: any,
  context: __SerdeContext
): BatchPutGeofenceError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchPutGeofenceError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchPutGeofenceSuccess = (
  output: any,
  context: __SerdeContext
): BatchPutGeofenceSuccess => {
  return {
    CreateTime: output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.CreateTime)) : undefined,
    GeofenceId: __expectString(output.GeofenceId),
    UpdateTime: output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdateTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1BatchPutGeofenceSuccessList = (
  output: any,
  context: __SerdeContext
): BatchPutGeofenceSuccess[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchPutGeofenceSuccess(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchUpdateDevicePositionError = (
  output: any,
  context: __SerdeContext
): BatchUpdateDevicePositionError => {
  return {
    DeviceId: __expectString(output.DeviceId),
    Error: output.Error != null ? deserializeAws_restJson1BatchItemError(output.Error, context) : undefined,
    SampleTime: output.SampleTime != null ? __expectNonNull(__parseRfc3339DateTime(output.SampleTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1BatchUpdateDevicePositionErrorList = (
  output: any,
  context: __SerdeContext
): BatchUpdateDevicePositionError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchUpdateDevicePositionError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BoundingBox = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_restJson1CalculateRouteMatrixSummary = (
  output: any,
  context: __SerdeContext
): CalculateRouteMatrixSummary => {
  return {
    DataSource: __expectString(output.DataSource),
    DistanceUnit: __expectString(output.DistanceUnit),
    ErrorCount: __expectInt32(output.ErrorCount),
    RouteCount: __expectInt32(output.RouteCount),
  } as any;
};

const deserializeAws_restJson1CalculateRouteSummary = (output: any, context: __SerdeContext): CalculateRouteSummary => {
  return {
    DataSource: __expectString(output.DataSource),
    Distance: __limitedParseDouble(output.Distance),
    DistanceUnit: __expectString(output.DistanceUnit),
    DurationSeconds: __limitedParseDouble(output.DurationSeconds),
    RouteBBox: output.RouteBBox != null ? deserializeAws_restJson1BoundingBox(output.RouteBBox, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Circle = (output: any, context: __SerdeContext): Circle => {
  return {
    Center: output.Center != null ? deserializeAws_restJson1Position(output.Center, context) : undefined,
    Radius: __limitedParseDouble(output.Radius),
  } as any;
};

const deserializeAws_restJson1CountryCodeList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1DataSourceConfiguration = (
  output: any,
  context: __SerdeContext
): DataSourceConfiguration => {
  return {
    IntendedUse: __expectString(output.IntendedUse),
  } as any;
};

const deserializeAws_restJson1DevicePosition = (output: any, context: __SerdeContext): DevicePosition => {
  return {
    Accuracy:
      output.Accuracy != null ? deserializeAws_restJson1PositionalAccuracy(output.Accuracy, context) : undefined,
    DeviceId: __expectString(output.DeviceId),
    Position: output.Position != null ? deserializeAws_restJson1Position(output.Position, context) : undefined,
    PositionProperties:
      output.PositionProperties != null
        ? deserializeAws_restJson1PropertyMap(output.PositionProperties, context)
        : undefined,
    ReceivedTime:
      output.ReceivedTime != null ? __expectNonNull(__parseRfc3339DateTime(output.ReceivedTime)) : undefined,
    SampleTime: output.SampleTime != null ? __expectNonNull(__parseRfc3339DateTime(output.SampleTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1DevicePositionList = (output: any, context: __SerdeContext): DevicePosition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DevicePosition(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GeofenceGeometry = (output: any, context: __SerdeContext): GeofenceGeometry => {
  return {
    Circle: output.Circle != null ? deserializeAws_restJson1Circle(output.Circle, context) : undefined,
    Polygon: output.Polygon != null ? deserializeAws_restJson1LinearRings(output.Polygon, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Leg = (output: any, context: __SerdeContext): Leg => {
  return {
    Distance: __limitedParseDouble(output.Distance),
    DurationSeconds: __limitedParseDouble(output.DurationSeconds),
    EndPosition: output.EndPosition != null ? deserializeAws_restJson1Position(output.EndPosition, context) : undefined,
    Geometry: output.Geometry != null ? deserializeAws_restJson1LegGeometry(output.Geometry, context) : undefined,
    StartPosition:
      output.StartPosition != null ? deserializeAws_restJson1Position(output.StartPosition, context) : undefined,
    Steps: output.Steps != null ? deserializeAws_restJson1StepList(output.Steps, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LegGeometry = (output: any, context: __SerdeContext): LegGeometry => {
  return {
    LineString: output.LineString != null ? deserializeAws_restJson1LineString(output.LineString, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LegList = (output: any, context: __SerdeContext): Leg[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Leg(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LinearRing = (output: any, context: __SerdeContext): number[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Position(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LinearRings = (output: any, context: __SerdeContext): number[][][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LinearRing(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LineString = (output: any, context: __SerdeContext): number[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Position(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListDevicePositionsResponseEntry = (
  output: any,
  context: __SerdeContext
): ListDevicePositionsResponseEntry => {
  return {
    Accuracy:
      output.Accuracy != null ? deserializeAws_restJson1PositionalAccuracy(output.Accuracy, context) : undefined,
    DeviceId: __expectString(output.DeviceId),
    Position: output.Position != null ? deserializeAws_restJson1Position(output.Position, context) : undefined,
    PositionProperties:
      output.PositionProperties != null
        ? deserializeAws_restJson1PropertyMap(output.PositionProperties, context)
        : undefined,
    SampleTime: output.SampleTime != null ? __expectNonNull(__parseRfc3339DateTime(output.SampleTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1ListDevicePositionsResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListDevicePositionsResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListDevicePositionsResponseEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListGeofenceCollectionsResponseEntry = (
  output: any,
  context: __SerdeContext
): ListGeofenceCollectionsResponseEntry => {
  return {
    CollectionName: __expectString(output.CollectionName),
    CreateTime: output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.CreateTime)) : undefined,
    Description: __expectString(output.Description),
    PricingPlan: __expectString(output.PricingPlan),
    PricingPlanDataSource: __expectString(output.PricingPlanDataSource),
    UpdateTime: output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdateTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1ListGeofenceCollectionsResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListGeofenceCollectionsResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListGeofenceCollectionsResponseEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListGeofenceResponseEntry = (
  output: any,
  context: __SerdeContext
): ListGeofenceResponseEntry => {
  return {
    CreateTime: output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.CreateTime)) : undefined,
    GeofenceId: __expectString(output.GeofenceId),
    Geometry: output.Geometry != null ? deserializeAws_restJson1GeofenceGeometry(output.Geometry, context) : undefined,
    Status: __expectString(output.Status),
    UpdateTime: output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdateTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1ListGeofenceResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListGeofenceResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListGeofenceResponseEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListMapsResponseEntry = (output: any, context: __SerdeContext): ListMapsResponseEntry => {
  return {
    CreateTime: output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.CreateTime)) : undefined,
    DataSource: __expectString(output.DataSource),
    Description: __expectString(output.Description),
    MapName: __expectString(output.MapName),
    PricingPlan: __expectString(output.PricingPlan),
    UpdateTime: output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdateTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1ListMapsResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListMapsResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListMapsResponseEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListPlaceIndexesResponseEntry = (
  output: any,
  context: __SerdeContext
): ListPlaceIndexesResponseEntry => {
  return {
    CreateTime: output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.CreateTime)) : undefined,
    DataSource: __expectString(output.DataSource),
    Description: __expectString(output.Description),
    IndexName: __expectString(output.IndexName),
    PricingPlan: __expectString(output.PricingPlan),
    UpdateTime: output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdateTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1ListPlaceIndexesResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListPlaceIndexesResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListPlaceIndexesResponseEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListRouteCalculatorsResponseEntry = (
  output: any,
  context: __SerdeContext
): ListRouteCalculatorsResponseEntry => {
  return {
    CalculatorName: __expectString(output.CalculatorName),
    CreateTime: output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.CreateTime)) : undefined,
    DataSource: __expectString(output.DataSource),
    Description: __expectString(output.Description),
    PricingPlan: __expectString(output.PricingPlan),
    UpdateTime: output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdateTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1ListRouteCalculatorsResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListRouteCalculatorsResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListRouteCalculatorsResponseEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListTrackersResponseEntry = (
  output: any,
  context: __SerdeContext
): ListTrackersResponseEntry => {
  return {
    CreateTime: output.CreateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.CreateTime)) : undefined,
    Description: __expectString(output.Description),
    PricingPlan: __expectString(output.PricingPlan),
    PricingPlanDataSource: __expectString(output.PricingPlanDataSource),
    TrackerName: __expectString(output.TrackerName),
    UpdateTime: output.UpdateTime != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdateTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1ListTrackersResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListTrackersResponseEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListTrackersResponseEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MapConfiguration = (output: any, context: __SerdeContext): MapConfiguration => {
  return {
    Style: __expectString(output.Style),
  } as any;
};

const deserializeAws_restJson1Place = (output: any, context: __SerdeContext): Place => {
  return {
    AddressNumber: __expectString(output.AddressNumber),
    Country: __expectString(output.Country),
    Geometry: output.Geometry != null ? deserializeAws_restJson1PlaceGeometry(output.Geometry, context) : undefined,
    Interpolated: __expectBoolean(output.Interpolated),
    Label: __expectString(output.Label),
    Municipality: __expectString(output.Municipality),
    Neighborhood: __expectString(output.Neighborhood),
    PostalCode: __expectString(output.PostalCode),
    Region: __expectString(output.Region),
    Street: __expectString(output.Street),
    SubRegion: __expectString(output.SubRegion),
    TimeZone: output.TimeZone != null ? deserializeAws_restJson1TimeZone(output.TimeZone, context) : undefined,
    UnitNumber: __expectString(output.UnitNumber),
    UnitType: __expectString(output.UnitType),
  } as any;
};

const deserializeAws_restJson1PlaceGeometry = (output: any, context: __SerdeContext): PlaceGeometry => {
  return {
    Point: output.Point != null ? deserializeAws_restJson1Position(output.Point, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Position = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_restJson1PositionalAccuracy = (output: any, context: __SerdeContext): PositionalAccuracy => {
  return {
    Horizontal: __limitedParseDouble(output.Horizontal),
  } as any;
};

const deserializeAws_restJson1PositionList = (output: any, context: __SerdeContext): number[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Position(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PropertyMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1RouteMatrix = (output: any, context: __SerdeContext): RouteMatrixEntry[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RouteMatrixRow(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RouteMatrixEntry = (output: any, context: __SerdeContext): RouteMatrixEntry => {
  return {
    Distance: __limitedParseDouble(output.Distance),
    DurationSeconds: __limitedParseDouble(output.DurationSeconds),
    Error: output.Error != null ? deserializeAws_restJson1RouteMatrixEntryError(output.Error, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RouteMatrixEntryError = (output: any, context: __SerdeContext): RouteMatrixEntryError => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1RouteMatrixRow = (output: any, context: __SerdeContext): RouteMatrixEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RouteMatrixEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SearchForPositionResult = (
  output: any,
  context: __SerdeContext
): SearchForPositionResult => {
  return {
    Distance: __limitedParseDouble(output.Distance),
    Place: output.Place != null ? deserializeAws_restJson1Place(output.Place, context) : undefined,
    PlaceId: __expectString(output.PlaceId),
  } as any;
};

const deserializeAws_restJson1SearchForPositionResultList = (
  output: any,
  context: __SerdeContext
): SearchForPositionResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SearchForPositionResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SearchForSuggestionsResult = (
  output: any,
  context: __SerdeContext
): SearchForSuggestionsResult => {
  return {
    PlaceId: __expectString(output.PlaceId),
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_restJson1SearchForSuggestionsResultList = (
  output: any,
  context: __SerdeContext
): SearchForSuggestionsResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SearchForSuggestionsResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SearchForTextResult = (output: any, context: __SerdeContext): SearchForTextResult => {
  return {
    Distance: __limitedParseDouble(output.Distance),
    Place: output.Place != null ? deserializeAws_restJson1Place(output.Place, context) : undefined,
    PlaceId: __expectString(output.PlaceId),
    Relevance: __limitedParseDouble(output.Relevance),
  } as any;
};

const deserializeAws_restJson1SearchForTextResultList = (
  output: any,
  context: __SerdeContext
): SearchForTextResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SearchForTextResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SearchPlaceIndexForPositionSummary = (
  output: any,
  context: __SerdeContext
): SearchPlaceIndexForPositionSummary => {
  return {
    DataSource: __expectString(output.DataSource),
    Language: __expectString(output.Language),
    MaxResults: __expectInt32(output.MaxResults),
    Position: output.Position != null ? deserializeAws_restJson1Position(output.Position, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SearchPlaceIndexForSuggestionsSummary = (
  output: any,
  context: __SerdeContext
): SearchPlaceIndexForSuggestionsSummary => {
  return {
    BiasPosition:
      output.BiasPosition != null ? deserializeAws_restJson1Position(output.BiasPosition, context) : undefined,
    DataSource: __expectString(output.DataSource),
    FilterBBox: output.FilterBBox != null ? deserializeAws_restJson1BoundingBox(output.FilterBBox, context) : undefined,
    FilterCountries:
      output.FilterCountries != null
        ? deserializeAws_restJson1CountryCodeList(output.FilterCountries, context)
        : undefined,
    Language: __expectString(output.Language),
    MaxResults: __expectInt32(output.MaxResults),
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_restJson1SearchPlaceIndexForTextSummary = (
  output: any,
  context: __SerdeContext
): SearchPlaceIndexForTextSummary => {
  return {
    BiasPosition:
      output.BiasPosition != null ? deserializeAws_restJson1Position(output.BiasPosition, context) : undefined,
    DataSource: __expectString(output.DataSource),
    FilterBBox: output.FilterBBox != null ? deserializeAws_restJson1BoundingBox(output.FilterBBox, context) : undefined,
    FilterCountries:
      output.FilterCountries != null
        ? deserializeAws_restJson1CountryCodeList(output.FilterCountries, context)
        : undefined,
    Language: __expectString(output.Language),
    MaxResults: __expectInt32(output.MaxResults),
    ResultBBox: output.ResultBBox != null ? deserializeAws_restJson1BoundingBox(output.ResultBBox, context) : undefined,
    Text: __expectString(output.Text),
  } as any;
};

const deserializeAws_restJson1Step = (output: any, context: __SerdeContext): Step => {
  return {
    Distance: __limitedParseDouble(output.Distance),
    DurationSeconds: __limitedParseDouble(output.DurationSeconds),
    EndPosition: output.EndPosition != null ? deserializeAws_restJson1Position(output.EndPosition, context) : undefined,
    GeometryOffset: __expectInt32(output.GeometryOffset),
    StartPosition:
      output.StartPosition != null ? deserializeAws_restJson1Position(output.StartPosition, context) : undefined,
  } as any;
};

const deserializeAws_restJson1StepList = (output: any, context: __SerdeContext): Step[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Step(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TimeZone = (output: any, context: __SerdeContext): TimeZone => {
  return {
    Name: __expectString(output.Name),
    Offset: __expectInt32(output.Offset),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    Message: __expectString(output.message),
    Name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
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
