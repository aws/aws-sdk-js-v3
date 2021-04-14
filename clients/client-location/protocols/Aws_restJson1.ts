import {
  AssociateTrackerConsumerCommandInput,
  AssociateTrackerConsumerCommandOutput,
} from "../commands/AssociateTrackerConsumerCommand";
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
import {
  CreateGeofenceCollectionCommandInput,
  CreateGeofenceCollectionCommandOutput,
} from "../commands/CreateGeofenceCollectionCommand";
import { CreateMapCommandInput, CreateMapCommandOutput } from "../commands/CreateMapCommand";
import { CreatePlaceIndexCommandInput, CreatePlaceIndexCommandOutput } from "../commands/CreatePlaceIndexCommand";
import { CreateTrackerCommandInput, CreateTrackerCommandOutput } from "../commands/CreateTrackerCommand";
import {
  DeleteGeofenceCollectionCommandInput,
  DeleteGeofenceCollectionCommandOutput,
} from "../commands/DeleteGeofenceCollectionCommand";
import { DeleteMapCommandInput, DeleteMapCommandOutput } from "../commands/DeleteMapCommand";
import { DeletePlaceIndexCommandInput, DeletePlaceIndexCommandOutput } from "../commands/DeletePlaceIndexCommand";
import { DeleteTrackerCommandInput, DeleteTrackerCommandOutput } from "../commands/DeleteTrackerCommand";
import {
  DescribeGeofenceCollectionCommandInput,
  DescribeGeofenceCollectionCommandOutput,
} from "../commands/DescribeGeofenceCollectionCommand";
import { DescribeMapCommandInput, DescribeMapCommandOutput } from "../commands/DescribeMapCommand";
import { DescribePlaceIndexCommandInput, DescribePlaceIndexCommandOutput } from "../commands/DescribePlaceIndexCommand";
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
import {
  ListGeofenceCollectionsCommandInput,
  ListGeofenceCollectionsCommandOutput,
} from "../commands/ListGeofenceCollectionsCommand";
import { ListGeofencesCommandInput, ListGeofencesCommandOutput } from "../commands/ListGeofencesCommand";
import { ListMapsCommandInput, ListMapsCommandOutput } from "../commands/ListMapsCommand";
import { ListPlaceIndexesCommandInput, ListPlaceIndexesCommandOutput } from "../commands/ListPlaceIndexesCommand";
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
  SearchPlaceIndexForTextCommandInput,
  SearchPlaceIndexForTextCommandOutput,
} from "../commands/SearchPlaceIndexForTextCommand";
import {
  AccessDeniedException,
  BatchDeleteGeofenceError,
  BatchEvaluateGeofencesError,
  BatchGetDevicePositionError,
  BatchItemError,
  BatchPutGeofenceError,
  BatchPutGeofenceRequestEntry,
  BatchPutGeofenceSuccess,
  BatchUpdateDevicePositionError,
  ConflictException,
  DataSourceConfiguration,
  DevicePosition,
  DevicePositionUpdate,
  GeofenceGeometry,
  InternalServerException,
  ListGeofenceCollectionsResponseEntry,
  ListGeofenceResponseEntry,
  ListMapsResponseEntry,
  ListPlaceIndexesResponseEntry,
  ListTrackersResponseEntry,
  MapConfiguration,
  Place,
  PlaceGeometry,
  ResourceNotFoundException,
  SearchForPositionResult,
  SearchForTextResult,
  SearchPlaceIndexForPositionSummary,
  SearchPlaceIndexForTextSummary,
  ThrottlingException,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1AssociateTrackerConsumerCommand = async (
  input: AssociateTrackerConsumerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tracking/v0/trackers/{TrackerName}/consumers";
  if (input.TrackerName !== undefined) {
    const labelValue: string = input.TrackerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TrackerName.");
    }
    resolvedPath = resolvedPath.replace("{TrackerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TrackerName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ConsumerArn !== undefined && input.ConsumerArn !== null && { ConsumerArn: input.ConsumerArn }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/geofencing/v0/collections/{CollectionName}/delete-geofences";
  if (input.CollectionName !== undefined) {
    const labelValue: string = input.CollectionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CollectionName.");
    }
    resolvedPath = resolvedPath.replace("{CollectionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CollectionName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.GeofenceIds !== undefined &&
      input.GeofenceIds !== null && { GeofenceIds: serializeAws_restJson1IdList(input.GeofenceIds, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/geofencing/v0/collections/{CollectionName}/positions";
  if (input.CollectionName !== undefined) {
    const labelValue: string = input.CollectionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CollectionName.");
    }
    resolvedPath = resolvedPath.replace("{CollectionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CollectionName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DevicePositionUpdates !== undefined &&
      input.DevicePositionUpdates !== null && {
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tracking/v0/trackers/{TrackerName}/get-positions";
  if (input.TrackerName !== undefined) {
    const labelValue: string = input.TrackerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TrackerName.");
    }
    resolvedPath = resolvedPath.replace("{TrackerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TrackerName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DeviceIds !== undefined &&
      input.DeviceIds !== null && { DeviceIds: serializeAws_restJson1IdList(input.DeviceIds, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/geofencing/v0/collections/{CollectionName}/put-geofences";
  if (input.CollectionName !== undefined) {
    const labelValue: string = input.CollectionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CollectionName.");
    }
    resolvedPath = resolvedPath.replace("{CollectionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CollectionName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Entries !== undefined &&
      input.Entries !== null && {
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tracking/v0/trackers/{TrackerName}/positions";
  if (input.TrackerName !== undefined) {
    const labelValue: string = input.TrackerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TrackerName.");
    }
    resolvedPath = resolvedPath.replace("{TrackerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TrackerName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Updates !== undefined &&
      input.Updates !== null && { Updates: serializeAws_restJson1DevicePositionUpdateList(input.Updates, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/geofencing/v0/collections";
  let body: any;
  body = JSON.stringify({
    ...(input.CollectionName !== undefined &&
      input.CollectionName !== null && { CollectionName: input.CollectionName }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.PricingPlan !== undefined && input.PricingPlan !== null && { PricingPlan: input.PricingPlan }),
    ...(input.PricingPlanDataSource !== undefined &&
      input.PricingPlanDataSource !== null && { PricingPlanDataSource: input.PricingPlanDataSource }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/maps/v0/maps";
  let body: any;
  body = JSON.stringify({
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        Configuration: serializeAws_restJson1MapConfiguration(input.Configuration, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.MapName !== undefined && input.MapName !== null && { MapName: input.MapName }),
    ...(input.PricingPlan !== undefined && input.PricingPlan !== null && { PricingPlan: input.PricingPlan }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/places/v0/indexes";
  let body: any;
  body = JSON.stringify({
    ...(input.DataSource !== undefined && input.DataSource !== null && { DataSource: input.DataSource }),
    ...(input.DataSourceConfiguration !== undefined &&
      input.DataSourceConfiguration !== null && {
        DataSourceConfiguration: serializeAws_restJson1DataSourceConfiguration(input.DataSourceConfiguration, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }),
    ...(input.PricingPlan !== undefined && input.PricingPlan !== null && { PricingPlan: input.PricingPlan }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tracking/v0/trackers";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.PricingPlan !== undefined && input.PricingPlan !== null && { PricingPlan: input.PricingPlan }),
    ...(input.PricingPlanDataSource !== undefined &&
      input.PricingPlanDataSource !== null && { PricingPlanDataSource: input.PricingPlanDataSource }),
    ...(input.TrackerName !== undefined && input.TrackerName !== null && { TrackerName: input.TrackerName }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/geofencing/v0/collections/{CollectionName}";
  if (input.CollectionName !== undefined) {
    const labelValue: string = input.CollectionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CollectionName.");
    }
    resolvedPath = resolvedPath.replace("{CollectionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CollectionName.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/maps/v0/maps/{MapName}";
  if (input.MapName !== undefined) {
    const labelValue: string = input.MapName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MapName.");
    }
    resolvedPath = resolvedPath.replace("{MapName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MapName.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/places/v0/indexes/{IndexName}";
  if (input.IndexName !== undefined) {
    const labelValue: string = input.IndexName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IndexName.");
    }
    resolvedPath = resolvedPath.replace("{IndexName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IndexName.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/tracking/v0/trackers/{TrackerName}";
  if (input.TrackerName !== undefined) {
    const labelValue: string = input.TrackerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TrackerName.");
    }
    resolvedPath = resolvedPath.replace("{TrackerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TrackerName.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/geofencing/v0/collections/{CollectionName}";
  if (input.CollectionName !== undefined) {
    const labelValue: string = input.CollectionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CollectionName.");
    }
    resolvedPath = resolvedPath.replace("{CollectionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CollectionName.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/maps/v0/maps/{MapName}";
  if (input.MapName !== undefined) {
    const labelValue: string = input.MapName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MapName.");
    }
    resolvedPath = resolvedPath.replace("{MapName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MapName.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/places/v0/indexes/{IndexName}";
  if (input.IndexName !== undefined) {
    const labelValue: string = input.IndexName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IndexName.");
    }
    resolvedPath = resolvedPath.replace("{IndexName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IndexName.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/tracking/v0/trackers/{TrackerName}";
  if (input.TrackerName !== undefined) {
    const labelValue: string = input.TrackerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TrackerName.");
    }
    resolvedPath = resolvedPath.replace("{TrackerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TrackerName.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/tracking/v0/trackers/{TrackerName}/consumers/{ConsumerArn}";
  if (input.TrackerName !== undefined) {
    const labelValue: string = input.TrackerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TrackerName.");
    }
    resolvedPath = resolvedPath.replace("{TrackerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TrackerName.");
  }
  if (input.ConsumerArn !== undefined) {
    const labelValue: string = input.ConsumerArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConsumerArn.");
    }
    resolvedPath = resolvedPath.replace("{ConsumerArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConsumerArn.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/positions/latest";
  if (input.TrackerName !== undefined) {
    const labelValue: string = input.TrackerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TrackerName.");
    }
    resolvedPath = resolvedPath.replace("{TrackerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TrackerName.");
  }
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace("{DeviceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tracking/v0/trackers/{TrackerName}/devices/{DeviceId}/list-positions";
  if (input.TrackerName !== undefined) {
    const labelValue: string = input.TrackerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TrackerName.");
    }
    resolvedPath = resolvedPath.replace("{TrackerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TrackerName.");
  }
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace("{DeviceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.EndTimeExclusive !== undefined &&
      input.EndTimeExclusive !== null && {
        EndTimeExclusive: input.EndTimeExclusive.toISOString().split(".")[0] + "Z",
      }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StartTimeInclusive !== undefined &&
      input.StartTimeInclusive !== null && {
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}";
  if (input.CollectionName !== undefined) {
    const labelValue: string = input.CollectionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CollectionName.");
    }
    resolvedPath = resolvedPath.replace("{CollectionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CollectionName.");
  }
  if (input.GeofenceId !== undefined) {
    const labelValue: string = input.GeofenceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GeofenceId.");
    }
    resolvedPath = resolvedPath.replace("{GeofenceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GeofenceId.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/maps/v0/maps/{MapName}/glyphs/{FontStack}/{FontUnicodeRange}";
  if (input.MapName !== undefined) {
    const labelValue: string = input.MapName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MapName.");
    }
    resolvedPath = resolvedPath.replace("{MapName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MapName.");
  }
  if (input.FontStack !== undefined) {
    const labelValue: string = input.FontStack;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FontStack.");
    }
    resolvedPath = resolvedPath.replace("{FontStack}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FontStack.");
  }
  if (input.FontUnicodeRange !== undefined) {
    const labelValue: string = input.FontUnicodeRange;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FontUnicodeRange.");
    }
    resolvedPath = resolvedPath.replace("{FontUnicodeRange}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FontUnicodeRange.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/maps/v0/maps/{MapName}/sprites/{FileName}";
  if (input.MapName !== undefined) {
    const labelValue: string = input.MapName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MapName.");
    }
    resolvedPath = resolvedPath.replace("{MapName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MapName.");
  }
  if (input.FileName !== undefined) {
    const labelValue: string = input.FileName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FileName.");
    }
    resolvedPath = resolvedPath.replace("{FileName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: FileName.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/maps/v0/maps/{MapName}/style-descriptor";
  if (input.MapName !== undefined) {
    const labelValue: string = input.MapName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MapName.");
    }
    resolvedPath = resolvedPath.replace("{MapName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MapName.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/maps/v0/maps/{MapName}/tiles/{Z}/{X}/{Y}";
  if (input.MapName !== undefined) {
    const labelValue: string = input.MapName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: MapName.");
    }
    resolvedPath = resolvedPath.replace("{MapName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: MapName.");
  }
  if (input.Z !== undefined) {
    const labelValue: string = input.Z;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Z.");
    }
    resolvedPath = resolvedPath.replace("{Z}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Z.");
  }
  if (input.X !== undefined) {
    const labelValue: string = input.X;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: X.");
    }
    resolvedPath = resolvedPath.replace("{X}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: X.");
  }
  if (input.Y !== undefined) {
    const labelValue: string = input.Y;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Y.");
    }
    resolvedPath = resolvedPath.replace("{Y}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Y.");
  }
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1ListGeofenceCollectionsCommand = async (
  input: ListGeofenceCollectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/geofencing/v0/list-collections";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/geofencing/v0/collections/{CollectionName}/list-geofences";
  if (input.CollectionName !== undefined) {
    const labelValue: string = input.CollectionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CollectionName.");
    }
    resolvedPath = resolvedPath.replace("{CollectionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CollectionName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/maps/v0/list-maps";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "maps." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/places/v0/list-indexes";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1ListTrackerConsumersCommand = async (
  input: ListTrackerConsumersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tracking/v0/trackers/{TrackerName}/list-consumers";
  if (input.TrackerName !== undefined) {
    const labelValue: string = input.TrackerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: TrackerName.");
    }
    resolvedPath = resolvedPath.replace("{TrackerName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: TrackerName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tracking/v0/list-trackers";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "tracking." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/geofencing/v0/collections/{CollectionName}/geofences/{GeofenceId}";
  if (input.CollectionName !== undefined) {
    const labelValue: string = input.CollectionName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CollectionName.");
    }
    resolvedPath = resolvedPath.replace("{CollectionName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CollectionName.");
  }
  if (input.GeofenceId !== undefined) {
    const labelValue: string = input.GeofenceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GeofenceId.");
    }
    resolvedPath = resolvedPath.replace("{GeofenceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GeofenceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Geometry !== undefined &&
      input.Geometry !== null && { Geometry: serializeAws_restJson1GeofenceGeometry(input.Geometry, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "geofencing." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/places/v0/indexes/{IndexName}/search/position";
  if (input.IndexName !== undefined) {
    const labelValue: string = input.IndexName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IndexName.");
    }
    resolvedPath = resolvedPath.replace("{IndexName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IndexName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.Position !== undefined &&
      input.Position !== null && { Position: serializeAws_restJson1Position(input.Position, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/places/v0/indexes/{IndexName}/search/text";
  if (input.IndexName !== undefined) {
    const labelValue: string = input.IndexName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IndexName.");
    }
    resolvedPath = resolvedPath.replace("{IndexName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IndexName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BiasPosition !== undefined &&
      input.BiasPosition !== null && { BiasPosition: serializeAws_restJson1Position(input.BiasPosition, context) }),
    ...(input.FilterBBox !== undefined &&
      input.FilterBBox !== null && { FilterBBox: serializeAws_restJson1BoundingBox(input.FilterBBox, context) }),
    ...(input.FilterCountries !== undefined &&
      input.FilterCountries !== null && {
        FilterCountries: serializeAws_restJson1CountryCodeList(input.FilterCountries, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "places." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const deserializeAws_restJson1AssociateTrackerConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTrackerConsumerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateTrackerConsumerCommandError(output, context);
  }
  const contents: AssociateTrackerConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateTrackerConsumerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTrackerConsumerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.location#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchDeleteGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDeleteGeofenceCommandError(output, context);
  }
  const contents: BatchDeleteGeofenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Errors: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Errors !== undefined && data.Errors !== null) {
    contents.Errors = deserializeAws_restJson1BatchDeleteGeofenceErrorList(data.Errors, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchDeleteGeofenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteGeofenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchEvaluateGeofencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEvaluateGeofencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchEvaluateGeofencesCommandError(output, context);
  }
  const contents: BatchEvaluateGeofencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Errors: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Errors !== undefined && data.Errors !== null) {
    contents.Errors = deserializeAws_restJson1BatchEvaluateGeofencesErrorList(data.Errors, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchEvaluateGeofencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEvaluateGeofencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchGetDevicePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDevicePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchGetDevicePositionCommandError(output, context);
  }
  const contents: BatchGetDevicePositionCommandOutput = {
    $metadata: deserializeMetadata(output),
    DevicePositions: undefined,
    Errors: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DevicePositions !== undefined && data.DevicePositions !== null) {
    contents.DevicePositions = deserializeAws_restJson1DevicePositionList(data.DevicePositions, context);
  }
  if (data.Errors !== undefined && data.Errors !== null) {
    contents.Errors = deserializeAws_restJson1BatchGetDevicePositionErrorList(data.Errors, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchGetDevicePositionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetDevicePositionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchPutGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchPutGeofenceCommandError(output, context);
  }
  const contents: BatchPutGeofenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Errors: undefined,
    Successes: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Errors !== undefined && data.Errors !== null) {
    contents.Errors = deserializeAws_restJson1BatchPutGeofenceErrorList(data.Errors, context);
  }
  if (data.Successes !== undefined && data.Successes !== null) {
    contents.Successes = deserializeAws_restJson1BatchPutGeofenceSuccessList(data.Successes, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchPutGeofenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutGeofenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1BatchUpdateDevicePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateDevicePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchUpdateDevicePositionCommandError(output, context);
  }
  const contents: BatchUpdateDevicePositionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Errors: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Errors !== undefined && data.Errors !== null) {
    contents.Errors = deserializeAws_restJson1BatchUpdateDevicePositionErrorList(data.Errors, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchUpdateDevicePositionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateDevicePositionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGeofenceCollectionCommandError(output, context);
  }
  const contents: CreateGeofenceCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    CollectionArn: undefined,
    CollectionName: undefined,
    CreateTime: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CollectionArn !== undefined && data.CollectionArn !== null) {
    contents.CollectionArn = data.CollectionArn;
  }
  if (data.CollectionName !== undefined && data.CollectionName !== null) {
    contents.CollectionName = data.CollectionName;
  }
  if (data.CreateTime !== undefined && data.CreateTime !== null) {
    contents.CreateTime = new Date(data.CreateTime);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateGeofenceCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGeofenceCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.location#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMapCommandError(output, context);
  }
  const contents: CreateMapCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateTime: undefined,
    MapArn: undefined,
    MapName: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreateTime !== undefined && data.CreateTime !== null) {
    contents.CreateTime = new Date(data.CreateTime);
  }
  if (data.MapArn !== undefined && data.MapArn !== null) {
    contents.MapArn = data.MapArn;
  }
  if (data.MapName !== undefined && data.MapName !== null) {
    contents.MapName = data.MapName;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.location#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreatePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePlaceIndexCommandError(output, context);
  }
  const contents: CreatePlaceIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateTime: undefined,
    IndexArn: undefined,
    IndexName: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreateTime !== undefined && data.CreateTime !== null) {
    contents.CreateTime = new Date(data.CreateTime);
  }
  if (data.IndexArn !== undefined && data.IndexArn !== null) {
    contents.IndexArn = data.IndexArn;
  }
  if (data.IndexName !== undefined && data.IndexName !== null) {
    contents.IndexName = data.IndexName;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePlaceIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePlaceIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.location#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTrackerCommandError(output, context);
  }
  const contents: CreateTrackerCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateTime: undefined,
    TrackerArn: undefined,
    TrackerName: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreateTime !== undefined && data.CreateTime !== null) {
    contents.CreateTime = new Date(data.CreateTime);
  }
  if (data.TrackerArn !== undefined && data.TrackerArn !== null) {
    contents.TrackerArn = data.TrackerArn;
  }
  if (data.TrackerName !== undefined && data.TrackerName !== null) {
    contents.TrackerName = data.TrackerName;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateTrackerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrackerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.location#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGeofenceCollectionCommandError(output, context);
  }
  const contents: DeleteGeofenceCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteGeofenceCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGeofenceCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMapCommandError(output, context);
  }
  const contents: DeleteMapCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeletePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePlaceIndexCommandError(output, context);
  }
  const contents: DeletePlaceIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePlaceIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePlaceIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTrackerCommandError(output, context);
  }
  const contents: DeleteTrackerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteTrackerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrackerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeGeofenceCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGeofenceCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGeofenceCollectionCommandError(output, context);
  }
  const contents: DescribeGeofenceCollectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    CollectionArn: undefined,
    CollectionName: undefined,
    CreateTime: undefined,
    Description: undefined,
    PricingPlan: undefined,
    PricingPlanDataSource: undefined,
    UpdateTime: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CollectionArn !== undefined && data.CollectionArn !== null) {
    contents.CollectionArn = data.CollectionArn;
  }
  if (data.CollectionName !== undefined && data.CollectionName !== null) {
    contents.CollectionName = data.CollectionName;
  }
  if (data.CreateTime !== undefined && data.CreateTime !== null) {
    contents.CreateTime = new Date(data.CreateTime);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.PricingPlan !== undefined && data.PricingPlan !== null) {
    contents.PricingPlan = data.PricingPlan;
  }
  if (data.PricingPlanDataSource !== undefined && data.PricingPlanDataSource !== null) {
    contents.PricingPlanDataSource = data.PricingPlanDataSource;
  }
  if (data.UpdateTime !== undefined && data.UpdateTime !== null) {
    contents.UpdateTime = new Date(data.UpdateTime);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeGeofenceCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGeofenceCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMapCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeMapCommandError(output, context);
  }
  const contents: DescribeMapCommandOutput = {
    $metadata: deserializeMetadata(output),
    Configuration: undefined,
    CreateTime: undefined,
    DataSource: undefined,
    Description: undefined,
    MapArn: undefined,
    MapName: undefined,
    PricingPlan: undefined,
    UpdateTime: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Configuration !== undefined && data.Configuration !== null) {
    contents.Configuration = deserializeAws_restJson1MapConfiguration(data.Configuration, context);
  }
  if (data.CreateTime !== undefined && data.CreateTime !== null) {
    contents.CreateTime = new Date(data.CreateTime);
  }
  if (data.DataSource !== undefined && data.DataSource !== null) {
    contents.DataSource = data.DataSource;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.MapArn !== undefined && data.MapArn !== null) {
    contents.MapArn = data.MapArn;
  }
  if (data.MapName !== undefined && data.MapName !== null) {
    contents.MapName = data.MapName;
  }
  if (data.PricingPlan !== undefined && data.PricingPlan !== null) {
    contents.PricingPlan = data.PricingPlan;
  }
  if (data.UpdateTime !== undefined && data.UpdateTime !== null) {
    contents.UpdateTime = new Date(data.UpdateTime);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribePlaceIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlaceIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePlaceIndexCommandError(output, context);
  }
  const contents: DescribePlaceIndexCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateTime: undefined,
    DataSource: undefined,
    DataSourceConfiguration: undefined,
    Description: undefined,
    IndexArn: undefined,
    IndexName: undefined,
    PricingPlan: undefined,
    UpdateTime: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreateTime !== undefined && data.CreateTime !== null) {
    contents.CreateTime = new Date(data.CreateTime);
  }
  if (data.DataSource !== undefined && data.DataSource !== null) {
    contents.DataSource = data.DataSource;
  }
  if (data.DataSourceConfiguration !== undefined && data.DataSourceConfiguration !== null) {
    contents.DataSourceConfiguration = deserializeAws_restJson1DataSourceConfiguration(
      data.DataSourceConfiguration,
      context
    );
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.IndexArn !== undefined && data.IndexArn !== null) {
    contents.IndexArn = data.IndexArn;
  }
  if (data.IndexName !== undefined && data.IndexName !== null) {
    contents.IndexName = data.IndexName;
  }
  if (data.PricingPlan !== undefined && data.PricingPlan !== null) {
    contents.PricingPlan = data.PricingPlan;
  }
  if (data.UpdateTime !== undefined && data.UpdateTime !== null) {
    contents.UpdateTime = new Date(data.UpdateTime);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribePlaceIndexCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePlaceIndexCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrackerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeTrackerCommandError(output, context);
  }
  const contents: DescribeTrackerCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateTime: undefined,
    Description: undefined,
    PricingPlan: undefined,
    PricingPlanDataSource: undefined,
    TrackerArn: undefined,
    TrackerName: undefined,
    UpdateTime: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreateTime !== undefined && data.CreateTime !== null) {
    contents.CreateTime = new Date(data.CreateTime);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.PricingPlan !== undefined && data.PricingPlan !== null) {
    contents.PricingPlan = data.PricingPlan;
  }
  if (data.PricingPlanDataSource !== undefined && data.PricingPlanDataSource !== null) {
    contents.PricingPlanDataSource = data.PricingPlanDataSource;
  }
  if (data.TrackerArn !== undefined && data.TrackerArn !== null) {
    contents.TrackerArn = data.TrackerArn;
  }
  if (data.TrackerName !== undefined && data.TrackerName !== null) {
    contents.TrackerName = data.TrackerName;
  }
  if (data.UpdateTime !== undefined && data.UpdateTime !== null) {
    contents.UpdateTime = new Date(data.UpdateTime);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeTrackerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrackerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateTrackerConsumerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTrackerConsumerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateTrackerConsumerCommandError(output, context);
  }
  const contents: DisassociateTrackerConsumerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateTrackerConsumerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTrackerConsumerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDevicePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDevicePositionCommandError(output, context);
  }
  const contents: GetDevicePositionCommandOutput = {
    $metadata: deserializeMetadata(output),
    DeviceId: undefined,
    Position: undefined,
    ReceivedTime: undefined,
    SampleTime: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DeviceId !== undefined && data.DeviceId !== null) {
    contents.DeviceId = data.DeviceId;
  }
  if (data.Position !== undefined && data.Position !== null) {
    contents.Position = deserializeAws_restJson1Position(data.Position, context);
  }
  if (data.ReceivedTime !== undefined && data.ReceivedTime !== null) {
    contents.ReceivedTime = new Date(data.ReceivedTime);
  }
  if (data.SampleTime !== undefined && data.SampleTime !== null) {
    contents.SampleTime = new Date(data.SampleTime);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDevicePositionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePositionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDevicePositionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePositionHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDevicePositionHistoryCommandError(output, context);
  }
  const contents: GetDevicePositionHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    DevicePositions: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.DevicePositions !== undefined && data.DevicePositions !== null) {
    contents.DevicePositions = deserializeAws_restJson1DevicePositionList(data.DevicePositions, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDevicePositionHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePositionHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGeofenceCommandError(output, context);
  }
  const contents: GetGeofenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateTime: undefined,
    GeofenceId: undefined,
    Geometry: undefined,
    Status: undefined,
    UpdateTime: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreateTime !== undefined && data.CreateTime !== null) {
    contents.CreateTime = new Date(data.CreateTime);
  }
  if (data.GeofenceId !== undefined && data.GeofenceId !== null) {
    contents.GeofenceId = data.GeofenceId;
  }
  if (data.Geometry !== undefined && data.Geometry !== null) {
    contents.Geometry = deserializeAws_restJson1GeofenceGeometry(data.Geometry, context);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = data.Status;
  }
  if (data.UpdateTime !== undefined && data.UpdateTime !== null) {
    contents.UpdateTime = new Date(data.UpdateTime);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetGeofenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeofenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetMapGlyphsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapGlyphsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMapGlyphsCommandError(output, context);
  }
  const contents: GetMapGlyphsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Blob: undefined,
    ContentType: undefined,
  };
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMapGlyphsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapGlyphsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetMapSpritesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapSpritesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMapSpritesCommandError(output, context);
  }
  const contents: GetMapSpritesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Blob: undefined,
    ContentType: undefined,
  };
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMapSpritesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapSpritesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetMapStyleDescriptorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapStyleDescriptorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMapStyleDescriptorCommandError(output, context);
  }
  const contents: GetMapStyleDescriptorCommandOutput = {
    $metadata: deserializeMetadata(output),
    Blob: undefined,
    ContentType: undefined,
  };
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMapStyleDescriptorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapStyleDescriptorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetMapTileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapTileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMapTileCommandError(output, context);
  }
  const contents: GetMapTileCommandOutput = {
    $metadata: deserializeMetadata(output),
    Blob: undefined,
    ContentType: undefined,
  };
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  const data: any = await collectBody(output.body, context);
  contents.Blob = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetMapTileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMapTileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListGeofenceCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeofenceCollectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGeofenceCollectionsCommandError(output, context);
  }
  const contents: ListGeofenceCollectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Entries: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Entries !== undefined && data.Entries !== null) {
    contents.Entries = deserializeAws_restJson1ListGeofenceCollectionsResponseEntryList(data.Entries, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListGeofenceCollectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeofenceCollectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListGeofencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeofencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGeofencesCommandError(output, context);
  }
  const contents: ListGeofencesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Entries: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Entries !== undefined && data.Entries !== null) {
    contents.Entries = deserializeAws_restJson1ListGeofenceResponseEntryList(data.Entries, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListGeofencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeofencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListMapsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMapsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMapsCommandError(output, context);
  }
  const contents: ListMapsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Entries: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Entries !== undefined && data.Entries !== null) {
    contents.Entries = deserializeAws_restJson1ListMapsResponseEntryList(data.Entries, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListMapsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMapsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListPlaceIndexesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaceIndexesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPlaceIndexesCommandError(output, context);
  }
  const contents: ListPlaceIndexesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Entries: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Entries !== undefined && data.Entries !== null) {
    contents.Entries = deserializeAws_restJson1ListPlaceIndexesResponseEntryList(data.Entries, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPlaceIndexesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPlaceIndexesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTrackerConsumersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrackerConsumersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTrackerConsumersCommandError(output, context);
  }
  const contents: ListTrackerConsumersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConsumerArns: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ConsumerArns !== undefined && data.ConsumerArns !== null) {
    contents.ConsumerArns = deserializeAws_restJson1ArnList(data.ConsumerArns, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTrackerConsumersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrackerConsumersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTrackersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrackersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTrackersCommandError(output, context);
  }
  const contents: ListTrackersCommandOutput = {
    $metadata: deserializeMetadata(output),
    Entries: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Entries !== undefined && data.Entries !== null) {
    contents.Entries = deserializeAws_restJson1ListTrackersResponseEntryList(data.Entries, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTrackersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrackersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutGeofenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGeofenceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutGeofenceCommandError(output, context);
  }
  const contents: PutGeofenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreateTime: undefined,
    GeofenceId: undefined,
    UpdateTime: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreateTime !== undefined && data.CreateTime !== null) {
    contents.CreateTime = new Date(data.CreateTime);
  }
  if (data.GeofenceId !== undefined && data.GeofenceId !== null) {
    contents.GeofenceId = data.GeofenceId;
  }
  if (data.UpdateTime !== undefined && data.UpdateTime !== null) {
    contents.UpdateTime = new Date(data.UpdateTime);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutGeofenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGeofenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.location#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SearchPlaceIndexForPositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForPositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchPlaceIndexForPositionCommandError(output, context);
  }
  const contents: SearchPlaceIndexForPositionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Results: undefined,
    Summary: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Results !== undefined && data.Results !== null) {
    contents.Results = deserializeAws_restJson1SearchForPositionResultList(data.Results, context);
  }
  if (data.Summary !== undefined && data.Summary !== null) {
    contents.Summary = deserializeAws_restJson1SearchPlaceIndexForPositionSummary(data.Summary, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SearchPlaceIndexForPositionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForPositionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SearchPlaceIndexForTextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForTextCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchPlaceIndexForTextCommandError(output, context);
  }
  const contents: SearchPlaceIndexForTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    Results: undefined,
    Summary: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Results !== undefined && data.Results !== null) {
    contents.Results = deserializeAws_restJson1SearchForTextResultList(data.Results, context);
  }
  if (data.Summary !== undefined && data.Summary !== null) {
    contents.Summary = deserializeAws_restJson1SearchPlaceIndexForTextSummary(data.Summary, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SearchPlaceIndexForTextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchPlaceIndexForTextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.location#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.location#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.location#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.location#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.location#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $retryable: {},
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $retryable: {},
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    FieldList: undefined,
    Message: undefined,
    Reason: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.fieldList !== undefined && data.fieldList !== null) {
    contents.FieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.Reason = data.reason;
  }
  return contents;
};

const serializeAws_restJson1BatchPutGeofenceRequestEntry = (
  input: BatchPutGeofenceRequestEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.GeofenceId !== undefined && input.GeofenceId !== null && { GeofenceId: input.GeofenceId }),
    ...(input.Geometry !== undefined &&
      input.Geometry !== null && { Geometry: serializeAws_restJson1GeofenceGeometry(input.Geometry, context) }),
  };
};

const serializeAws_restJson1BatchPutGeofenceRequestEntryList = (
  input: BatchPutGeofenceRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1BatchPutGeofenceRequestEntry(entry, context);
    });
};

const serializeAws_restJson1BoundingBox = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1CountryCodeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1DataSourceConfiguration = (
  input: DataSourceConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.IntendedUse !== undefined && input.IntendedUse !== null && { IntendedUse: input.IntendedUse }),
  };
};

const serializeAws_restJson1DevicePositionUpdate = (input: DevicePositionUpdate, context: __SerdeContext): any => {
  return {
    ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
    ...(input.Position !== undefined &&
      input.Position !== null && { Position: serializeAws_restJson1Position(input.Position, context) }),
    ...(input.SampleTime !== undefined &&
      input.SampleTime !== null && { SampleTime: input.SampleTime.toISOString().split(".")[0] + "Z" }),
  };
};

const serializeAws_restJson1DevicePositionUpdateList = (
  input: DevicePositionUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DevicePositionUpdate(entry, context);
    });
};

const serializeAws_restJson1GeofenceGeometry = (input: GeofenceGeometry, context: __SerdeContext): any => {
  return {
    ...(input.Polygon !== undefined &&
      input.Polygon !== null && { Polygon: serializeAws_restJson1LinearRings(input.Polygon, context) }),
  };
};

const serializeAws_restJson1IdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1LinearRing = (input: number[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Position(entry, context);
    });
};

const serializeAws_restJson1LinearRings = (input: number[][][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1LinearRing(entry, context);
    });
};

const serializeAws_restJson1MapConfiguration = (input: MapConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Style !== undefined && input.Style !== null && { Style: input.Style }),
  };
};

const serializeAws_restJson1Position = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ArnList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1BatchDeleteGeofenceError = (
  output: any,
  context: __SerdeContext
): BatchDeleteGeofenceError => {
  return {
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_restJson1BatchItemError(output.Error, context)
        : undefined,
    GeofenceId: output.GeofenceId !== undefined && output.GeofenceId !== null ? output.GeofenceId : undefined,
  } as any;
};

const deserializeAws_restJson1BatchDeleteGeofenceErrorList = (
  output: any,
  context: __SerdeContext
): BatchDeleteGeofenceError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchDeleteGeofenceError(entry, context);
    });
};

const deserializeAws_restJson1BatchEvaluateGeofencesError = (
  output: any,
  context: __SerdeContext
): BatchEvaluateGeofencesError => {
  return {
    DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_restJson1BatchItemError(output.Error, context)
        : undefined,
    SampleTime: output.SampleTime !== undefined && output.SampleTime !== null ? new Date(output.SampleTime) : undefined,
  } as any;
};

const deserializeAws_restJson1BatchEvaluateGeofencesErrorList = (
  output: any,
  context: __SerdeContext
): BatchEvaluateGeofencesError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchEvaluateGeofencesError(entry, context);
    });
};

const deserializeAws_restJson1BatchGetDevicePositionError = (
  output: any,
  context: __SerdeContext
): BatchGetDevicePositionError => {
  return {
    DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_restJson1BatchItemError(output.Error, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchGetDevicePositionErrorList = (
  output: any,
  context: __SerdeContext
): BatchGetDevicePositionError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchGetDevicePositionError(entry, context);
    });
};

const deserializeAws_restJson1BatchItemError = (output: any, context: __SerdeContext): BatchItemError => {
  return {
    Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_restJson1BatchPutGeofenceError = (output: any, context: __SerdeContext): BatchPutGeofenceError => {
  return {
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_restJson1BatchItemError(output.Error, context)
        : undefined,
    GeofenceId: output.GeofenceId !== undefined && output.GeofenceId !== null ? output.GeofenceId : undefined,
  } as any;
};

const deserializeAws_restJson1BatchPutGeofenceErrorList = (
  output: any,
  context: __SerdeContext
): BatchPutGeofenceError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchPutGeofenceError(entry, context);
    });
};

const deserializeAws_restJson1BatchPutGeofenceSuccess = (
  output: any,
  context: __SerdeContext
): BatchPutGeofenceSuccess => {
  return {
    CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? new Date(output.CreateTime) : undefined,
    GeofenceId: output.GeofenceId !== undefined && output.GeofenceId !== null ? output.GeofenceId : undefined,
    UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null ? new Date(output.UpdateTime) : undefined,
  } as any;
};

const deserializeAws_restJson1BatchPutGeofenceSuccessList = (
  output: any,
  context: __SerdeContext
): BatchPutGeofenceSuccess[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchPutGeofenceSuccess(entry, context);
    });
};

const deserializeAws_restJson1BatchUpdateDevicePositionError = (
  output: any,
  context: __SerdeContext
): BatchUpdateDevicePositionError => {
  return {
    DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_restJson1BatchItemError(output.Error, context)
        : undefined,
    SampleTime: output.SampleTime !== undefined && output.SampleTime !== null ? new Date(output.SampleTime) : undefined,
  } as any;
};

const deserializeAws_restJson1BatchUpdateDevicePositionErrorList = (
  output: any,
  context: __SerdeContext
): BatchUpdateDevicePositionError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchUpdateDevicePositionError(entry, context);
    });
};

const deserializeAws_restJson1BoundingBox = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1CountryCodeList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1DataSourceConfiguration = (
  output: any,
  context: __SerdeContext
): DataSourceConfiguration => {
  return {
    IntendedUse: output.IntendedUse !== undefined && output.IntendedUse !== null ? output.IntendedUse : undefined,
  } as any;
};

const deserializeAws_restJson1DevicePosition = (output: any, context: __SerdeContext): DevicePosition => {
  return {
    DeviceId: output.DeviceId !== undefined && output.DeviceId !== null ? output.DeviceId : undefined,
    Position:
      output.Position !== undefined && output.Position !== null
        ? deserializeAws_restJson1Position(output.Position, context)
        : undefined,
    ReceivedTime:
      output.ReceivedTime !== undefined && output.ReceivedTime !== null ? new Date(output.ReceivedTime) : undefined,
    SampleTime: output.SampleTime !== undefined && output.SampleTime !== null ? new Date(output.SampleTime) : undefined,
  } as any;
};

const deserializeAws_restJson1DevicePositionList = (output: any, context: __SerdeContext): DevicePosition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DevicePosition(entry, context);
    });
};

const deserializeAws_restJson1GeofenceGeometry = (output: any, context: __SerdeContext): GeofenceGeometry => {
  return {
    Polygon:
      output.Polygon !== undefined && output.Polygon !== null
        ? deserializeAws_restJson1LinearRings(output.Polygon, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LinearRing = (output: any, context: __SerdeContext): number[][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Position(entry, context);
    });
};

const deserializeAws_restJson1LinearRings = (output: any, context: __SerdeContext): number[][][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LinearRing(entry, context);
    });
};

const deserializeAws_restJson1ListGeofenceCollectionsResponseEntry = (
  output: any,
  context: __SerdeContext
): ListGeofenceCollectionsResponseEntry => {
  return {
    CollectionName:
      output.CollectionName !== undefined && output.CollectionName !== null ? output.CollectionName : undefined,
    CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? new Date(output.CreateTime) : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    PricingPlan: output.PricingPlan !== undefined && output.PricingPlan !== null ? output.PricingPlan : undefined,
    PricingPlanDataSource:
      output.PricingPlanDataSource !== undefined && output.PricingPlanDataSource !== null
        ? output.PricingPlanDataSource
        : undefined,
    UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null ? new Date(output.UpdateTime) : undefined,
  } as any;
};

const deserializeAws_restJson1ListGeofenceCollectionsResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListGeofenceCollectionsResponseEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListGeofenceCollectionsResponseEntry(entry, context);
    });
};

const deserializeAws_restJson1ListGeofenceResponseEntry = (
  output: any,
  context: __SerdeContext
): ListGeofenceResponseEntry => {
  return {
    CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? new Date(output.CreateTime) : undefined,
    GeofenceId: output.GeofenceId !== undefined && output.GeofenceId !== null ? output.GeofenceId : undefined,
    Geometry:
      output.Geometry !== undefined && output.Geometry !== null
        ? deserializeAws_restJson1GeofenceGeometry(output.Geometry, context)
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null ? new Date(output.UpdateTime) : undefined,
  } as any;
};

const deserializeAws_restJson1ListGeofenceResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListGeofenceResponseEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListGeofenceResponseEntry(entry, context);
    });
};

const deserializeAws_restJson1ListMapsResponseEntry = (output: any, context: __SerdeContext): ListMapsResponseEntry => {
  return {
    CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? new Date(output.CreateTime) : undefined,
    DataSource: output.DataSource !== undefined && output.DataSource !== null ? output.DataSource : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    MapName: output.MapName !== undefined && output.MapName !== null ? output.MapName : undefined,
    PricingPlan: output.PricingPlan !== undefined && output.PricingPlan !== null ? output.PricingPlan : undefined,
    UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null ? new Date(output.UpdateTime) : undefined,
  } as any;
};

const deserializeAws_restJson1ListMapsResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListMapsResponseEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListMapsResponseEntry(entry, context);
    });
};

const deserializeAws_restJson1ListPlaceIndexesResponseEntry = (
  output: any,
  context: __SerdeContext
): ListPlaceIndexesResponseEntry => {
  return {
    CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? new Date(output.CreateTime) : undefined,
    DataSource: output.DataSource !== undefined && output.DataSource !== null ? output.DataSource : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
    PricingPlan: output.PricingPlan !== undefined && output.PricingPlan !== null ? output.PricingPlan : undefined,
    UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null ? new Date(output.UpdateTime) : undefined,
  } as any;
};

const deserializeAws_restJson1ListPlaceIndexesResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListPlaceIndexesResponseEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListPlaceIndexesResponseEntry(entry, context);
    });
};

const deserializeAws_restJson1ListTrackersResponseEntry = (
  output: any,
  context: __SerdeContext
): ListTrackersResponseEntry => {
  return {
    CreateTime: output.CreateTime !== undefined && output.CreateTime !== null ? new Date(output.CreateTime) : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    PricingPlan: output.PricingPlan !== undefined && output.PricingPlan !== null ? output.PricingPlan : undefined,
    PricingPlanDataSource:
      output.PricingPlanDataSource !== undefined && output.PricingPlanDataSource !== null
        ? output.PricingPlanDataSource
        : undefined,
    TrackerName: output.TrackerName !== undefined && output.TrackerName !== null ? output.TrackerName : undefined,
    UpdateTime: output.UpdateTime !== undefined && output.UpdateTime !== null ? new Date(output.UpdateTime) : undefined,
  } as any;
};

const deserializeAws_restJson1ListTrackersResponseEntryList = (
  output: any,
  context: __SerdeContext
): ListTrackersResponseEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListTrackersResponseEntry(entry, context);
    });
};

const deserializeAws_restJson1MapConfiguration = (output: any, context: __SerdeContext): MapConfiguration => {
  return {
    Style: output.Style !== undefined && output.Style !== null ? output.Style : undefined,
  } as any;
};

const deserializeAws_restJson1Place = (output: any, context: __SerdeContext): Place => {
  return {
    AddressNumber:
      output.AddressNumber !== undefined && output.AddressNumber !== null ? output.AddressNumber : undefined,
    Country: output.Country !== undefined && output.Country !== null ? output.Country : undefined,
    Geometry:
      output.Geometry !== undefined && output.Geometry !== null
        ? deserializeAws_restJson1PlaceGeometry(output.Geometry, context)
        : undefined,
    Label: output.Label !== undefined && output.Label !== null ? output.Label : undefined,
    Municipality: output.Municipality !== undefined && output.Municipality !== null ? output.Municipality : undefined,
    Neighborhood: output.Neighborhood !== undefined && output.Neighborhood !== null ? output.Neighborhood : undefined,
    PostalCode: output.PostalCode !== undefined && output.PostalCode !== null ? output.PostalCode : undefined,
    Region: output.Region !== undefined && output.Region !== null ? output.Region : undefined,
    Street: output.Street !== undefined && output.Street !== null ? output.Street : undefined,
    SubRegion: output.SubRegion !== undefined && output.SubRegion !== null ? output.SubRegion : undefined,
  } as any;
};

const deserializeAws_restJson1PlaceGeometry = (output: any, context: __SerdeContext): PlaceGeometry => {
  return {
    Point:
      output.Point !== undefined && output.Point !== null
        ? deserializeAws_restJson1Position(output.Point, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Position = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1SearchForPositionResult = (
  output: any,
  context: __SerdeContext
): SearchForPositionResult => {
  return {
    Place:
      output.Place !== undefined && output.Place !== null
        ? deserializeAws_restJson1Place(output.Place, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SearchForPositionResultList = (
  output: any,
  context: __SerdeContext
): SearchForPositionResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SearchForPositionResult(entry, context);
    });
};

const deserializeAws_restJson1SearchForTextResult = (output: any, context: __SerdeContext): SearchForTextResult => {
  return {
    Place:
      output.Place !== undefined && output.Place !== null
        ? deserializeAws_restJson1Place(output.Place, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SearchForTextResultList = (
  output: any,
  context: __SerdeContext
): SearchForTextResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SearchForTextResult(entry, context);
    });
};

const deserializeAws_restJson1SearchPlaceIndexForPositionSummary = (
  output: any,
  context: __SerdeContext
): SearchPlaceIndexForPositionSummary => {
  return {
    DataSource: output.DataSource !== undefined && output.DataSource !== null ? output.DataSource : undefined,
    MaxResults: output.MaxResults !== undefined && output.MaxResults !== null ? output.MaxResults : undefined,
    Position:
      output.Position !== undefined && output.Position !== null
        ? deserializeAws_restJson1Position(output.Position, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SearchPlaceIndexForTextSummary = (
  output: any,
  context: __SerdeContext
): SearchPlaceIndexForTextSummary => {
  return {
    BiasPosition:
      output.BiasPosition !== undefined && output.BiasPosition !== null
        ? deserializeAws_restJson1Position(output.BiasPosition, context)
        : undefined,
    DataSource: output.DataSource !== undefined && output.DataSource !== null ? output.DataSource : undefined,
    FilterBBox:
      output.FilterBBox !== undefined && output.FilterBBox !== null
        ? deserializeAws_restJson1BoundingBox(output.FilterBBox, context)
        : undefined,
    FilterCountries:
      output.FilterCountries !== undefined && output.FilterCountries !== null
        ? deserializeAws_restJson1CountryCodeList(output.FilterCountries, context)
        : undefined,
    MaxResults: output.MaxResults !== undefined && output.MaxResults !== null ? output.MaxResults : undefined,
    ResultBBox:
      output.ResultBBox !== undefined && output.ResultBBox !== null
        ? deserializeAws_restJson1BoundingBox(output.ResultBBox, context)
        : undefined,
    Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
  } as any;
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    Message: output.message !== undefined && output.message !== null ? output.message : undefined,
    Name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
