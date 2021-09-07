import { BulkPublishCommandInput, BulkPublishCommandOutput } from "../commands/BulkPublishCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
import {
  DescribeIdentityPoolUsageCommandInput,
  DescribeIdentityPoolUsageCommandOutput,
} from "../commands/DescribeIdentityPoolUsageCommand";
import {
  DescribeIdentityUsageCommandInput,
  DescribeIdentityUsageCommandOutput,
} from "../commands/DescribeIdentityUsageCommand";
import {
  GetBulkPublishDetailsCommandInput,
  GetBulkPublishDetailsCommandOutput,
} from "../commands/GetBulkPublishDetailsCommand";
import { GetCognitoEventsCommandInput, GetCognitoEventsCommandOutput } from "../commands/GetCognitoEventsCommand";
import {
  GetIdentityPoolConfigurationCommandInput,
  GetIdentityPoolConfigurationCommandOutput,
} from "../commands/GetIdentityPoolConfigurationCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import {
  ListIdentityPoolUsageCommandInput,
  ListIdentityPoolUsageCommandOutput,
} from "../commands/ListIdentityPoolUsageCommand";
import { ListRecordsCommandInput, ListRecordsCommandOutput } from "../commands/ListRecordsCommand";
import { RegisterDeviceCommandInput, RegisterDeviceCommandOutput } from "../commands/RegisterDeviceCommand";
import { SetCognitoEventsCommandInput, SetCognitoEventsCommandOutput } from "../commands/SetCognitoEventsCommand";
import {
  SetIdentityPoolConfigurationCommandInput,
  SetIdentityPoolConfigurationCommandOutput,
} from "../commands/SetIdentityPoolConfigurationCommand";
import { SubscribeToDatasetCommandInput, SubscribeToDatasetCommandOutput } from "../commands/SubscribeToDatasetCommand";
import {
  UnsubscribeFromDatasetCommandInput,
  UnsubscribeFromDatasetCommandOutput,
} from "../commands/UnsubscribeFromDatasetCommand";
import { UpdateRecordsCommandInput, UpdateRecordsCommandOutput } from "../commands/UpdateRecordsCommand";
import {
  AlreadyStreamedException,
  CognitoStreams,
  ConcurrentModificationException,
  Dataset,
  DuplicateRequestException,
  IdentityPoolUsage,
  IdentityUsage,
  InternalErrorException,
  InvalidConfigurationException,
  InvalidLambdaFunctionOutputException,
  InvalidParameterException,
  LambdaThrottledException,
  LimitExceededException,
  NotAuthorizedException,
  PushSync,
  RecordPatch,
  ResourceConflictException,
  ResourceNotFoundException,
  TooManyRequestsException,
  _Record,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1BulkPublishCommand = async (
  input: BulkPublishCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/bulkpublish";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.DatasetName !== undefined) {
    const labelValue: string = input.DatasetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DatasetName.");
    }
    resolvedPath = resolvedPath.replace("{DatasetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DatasetName.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.DatasetName !== undefined) {
    const labelValue: string = input.DatasetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DatasetName.");
    }
    resolvedPath = resolvedPath.replace("{DatasetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DatasetName.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeIdentityPoolUsageCommand = async (
  input: DescribeIdentityPoolUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/identitypools/{IdentityPoolId}";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeIdentityUsageCommand = async (
  input: DescribeIdentityUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetBulkPublishDetailsCommand = async (
  input: GetBulkPublishDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/getBulkPublishDetails";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetCognitoEventsCommand = async (
  input: GetCognitoEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/identitypools/{IdentityPoolId}/events";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetIdentityPoolConfigurationCommand = async (
  input: GetIdentityPoolConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/configuration";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListIdentityPoolUsageCommand = async (
  input: ListIdentityPoolUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/identitypools";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListRecordsCommand = async (
  input: ListRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.DatasetName !== undefined) {
    const labelValue: string = input.DatasetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DatasetName.");
    }
    resolvedPath = resolvedPath.replace("{DatasetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DatasetName.");
  }
  const query: any = {
    ...(input.LastSyncCount !== undefined && { lastSyncCount: input.LastSyncCount.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.SyncSessionToken !== undefined && { syncSessionToken: input.SyncSessionToken }),
  };
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1RegisterDeviceCommand = async (
  input: RegisterDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identity/{IdentityId}/device";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Platform !== undefined && input.Platform !== null && { Platform: input.Platform }),
    ...(input.Token !== undefined && input.Token !== null && { Token: input.Token }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SetCognitoEventsCommand = async (
  input: SetCognitoEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/identitypools/{IdentityPoolId}/events";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Events !== undefined &&
      input.Events !== null && { Events: serializeAws_restJson1Events(input.Events, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SetIdentityPoolConfigurationCommand = async (
  input: SetIdentityPoolConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/configuration";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CognitoStreams !== undefined &&
      input.CognitoStreams !== null && {
        CognitoStreams: serializeAws_restJson1CognitoStreams(input.CognitoStreams, context),
      }),
    ...(input.PushSync !== undefined &&
      input.PushSync !== null && { PushSync: serializeAws_restJson1PushSync(input.PushSync, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1SubscribeToDatasetCommand = async (
  input: SubscribeToDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.DatasetName !== undefined) {
    const labelValue: string = input.DatasetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DatasetName.");
    }
    resolvedPath = resolvedPath.replace("{DatasetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DatasetName.");
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
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UnsubscribeFromDatasetCommand = async (
  input: UnsubscribeFromDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.DatasetName !== undefined) {
    const labelValue: string = input.DatasetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DatasetName.");
    }
    resolvedPath = resolvedPath.replace("{DatasetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DatasetName.");
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
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateRecordsCommand = async (
  input: UpdateRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
    ...(isSerializableHeaderValue(input.ClientContext) && { "x-amz-client-context": input.ClientContext! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}";
  if (input.IdentityPoolId !== undefined) {
    const labelValue: string = input.IdentityPoolId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityPoolId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityPoolId.");
  }
  if (input.IdentityId !== undefined) {
    const labelValue: string = input.IdentityId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IdentityId.");
    }
    resolvedPath = resolvedPath.replace("{IdentityId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IdentityId.");
  }
  if (input.DatasetName !== undefined) {
    const labelValue: string = input.DatasetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DatasetName.");
    }
    resolvedPath = resolvedPath.replace("{DatasetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DatasetName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
    ...(input.RecordPatches !== undefined &&
      input.RecordPatches !== null && {
        RecordPatches: serializeAws_restJson1RecordPatchList(input.RecordPatches, context),
      }),
    ...(input.SyncSessionToken !== undefined &&
      input.SyncSessionToken !== null && { SyncSessionToken: input.SyncSessionToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1BulkPublishCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BulkPublishCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BulkPublishCommandError(output, context);
  }
  const contents: BulkPublishCommandOutput = {
    $metadata: deserializeMetadata(output),
    IdentityPoolId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IdentityPoolId !== undefined && data.IdentityPoolId !== null) {
    contents.IdentityPoolId = __expectString(data.IdentityPoolId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BulkPublishCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BulkPublishCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyStreamedException":
    case "com.amazonaws.cognitosync#AlreadyStreamedException":
      response = {
        ...(await deserializeAws_restJson1AlreadyStreamedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DuplicateRequestException":
    case "com.amazonaws.cognitosync#DuplicateRequestException":
      response = {
        ...(await deserializeAws_restJson1DuplicateRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDatasetCommandError(output, context);
  }
  const contents: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Dataset: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Dataset !== undefined && data.Dataset !== null) {
    contents.Dataset = deserializeAws_restJson1Dataset(data.Dataset, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognitosync#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDatasetCommandError(output, context);
  }
  const contents: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    Dataset: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Dataset !== undefined && data.Dataset !== null) {
    contents.Dataset = deserializeAws_restJson1Dataset(data.Dataset, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeIdentityPoolUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityPoolUsageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeIdentityPoolUsageCommandError(output, context);
  }
  const contents: DescribeIdentityPoolUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    IdentityPoolUsage: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IdentityPoolUsage !== undefined && data.IdentityPoolUsage !== null) {
    contents.IdentityPoolUsage = deserializeAws_restJson1IdentityPoolUsage(data.IdentityPoolUsage, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeIdentityPoolUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityPoolUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeIdentityUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityUsageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeIdentityUsageCommandError(output, context);
  }
  const contents: DescribeIdentityUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    IdentityUsage: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IdentityUsage !== undefined && data.IdentityUsage !== null) {
    contents.IdentityUsage = deserializeAws_restJson1IdentityUsage(data.IdentityUsage, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeIdentityUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetBulkPublishDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBulkPublishDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBulkPublishDetailsCommandError(output, context);
  }
  const contents: GetBulkPublishDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    BulkPublishCompleteTime: undefined,
    BulkPublishStartTime: undefined,
    BulkPublishStatus: undefined,
    FailureMessage: undefined,
    IdentityPoolId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BulkPublishCompleteTime !== undefined && data.BulkPublishCompleteTime !== null) {
    contents.BulkPublishCompleteTime = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.BulkPublishCompleteTime))
    );
  }
  if (data.BulkPublishStartTime !== undefined && data.BulkPublishStartTime !== null) {
    contents.BulkPublishStartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.BulkPublishStartTime)));
  }
  if (data.BulkPublishStatus !== undefined && data.BulkPublishStatus !== null) {
    contents.BulkPublishStatus = __expectString(data.BulkPublishStatus);
  }
  if (data.FailureMessage !== undefined && data.FailureMessage !== null) {
    contents.FailureMessage = __expectString(data.FailureMessage);
  }
  if (data.IdentityPoolId !== undefined && data.IdentityPoolId !== null) {
    contents.IdentityPoolId = __expectString(data.IdentityPoolId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBulkPublishDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBulkPublishDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetCognitoEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCognitoEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCognitoEventsCommandError(output, context);
  }
  const contents: GetCognitoEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Events: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Events !== undefined && data.Events !== null) {
    contents.Events = deserializeAws_restJson1Events(data.Events, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCognitoEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCognitoEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetIdentityPoolConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoolConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIdentityPoolConfigurationCommandError(output, context);
  }
  const contents: GetIdentityPoolConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    CognitoStreams: undefined,
    IdentityPoolId: undefined,
    PushSync: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CognitoStreams !== undefined && data.CognitoStreams !== null) {
    contents.CognitoStreams = deserializeAws_restJson1CognitoStreams(data.CognitoStreams, context);
  }
  if (data.IdentityPoolId !== undefined && data.IdentityPoolId !== null) {
    contents.IdentityPoolId = __expectString(data.IdentityPoolId);
  }
  if (data.PushSync !== undefined && data.PushSync !== null) {
    contents.PushSync = deserializeAws_restJson1PushSync(data.PushSync, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetIdentityPoolConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoolConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDatasetsCommandError(output, context);
  }
  const contents: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Count: undefined,
    Datasets: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Count !== undefined && data.Count !== null) {
    contents.Count = __expectInt32(data.Count);
  }
  if (data.Datasets !== undefined && data.Datasets !== null) {
    contents.Datasets = deserializeAws_restJson1DatasetList(data.Datasets, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListIdentityPoolUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoolUsageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIdentityPoolUsageCommandError(output, context);
  }
  const contents: ListIdentityPoolUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    Count: undefined,
    IdentityPoolUsages: undefined,
    MaxResults: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Count !== undefined && data.Count !== null) {
    contents.Count = __expectInt32(data.Count);
  }
  if (data.IdentityPoolUsages !== undefined && data.IdentityPoolUsages !== null) {
    contents.IdentityPoolUsages = deserializeAws_restJson1IdentityPoolUsageList(data.IdentityPoolUsages, context);
  }
  if (data.MaxResults !== undefined && data.MaxResults !== null) {
    contents.MaxResults = __expectInt32(data.MaxResults);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListIdentityPoolUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoolUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecordsCommandError(output, context);
  }
  const contents: ListRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Count: undefined,
    DatasetDeletedAfterRequestedSyncCount: undefined,
    DatasetExists: undefined,
    DatasetSyncCount: undefined,
    LastModifiedBy: undefined,
    MergedDatasetNames: undefined,
    NextToken: undefined,
    Records: undefined,
    SyncSessionToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Count !== undefined && data.Count !== null) {
    contents.Count = __expectInt32(data.Count);
  }
  if (data.DatasetDeletedAfterRequestedSyncCount !== undefined && data.DatasetDeletedAfterRequestedSyncCount !== null) {
    contents.DatasetDeletedAfterRequestedSyncCount = __expectBoolean(data.DatasetDeletedAfterRequestedSyncCount);
  }
  if (data.DatasetExists !== undefined && data.DatasetExists !== null) {
    contents.DatasetExists = __expectBoolean(data.DatasetExists);
  }
  if (data.DatasetSyncCount !== undefined && data.DatasetSyncCount !== null) {
    contents.DatasetSyncCount = __expectLong(data.DatasetSyncCount);
  }
  if (data.LastModifiedBy !== undefined && data.LastModifiedBy !== null) {
    contents.LastModifiedBy = __expectString(data.LastModifiedBy);
  }
  if (data.MergedDatasetNames !== undefined && data.MergedDatasetNames !== null) {
    contents.MergedDatasetNames = deserializeAws_restJson1MergedDatasetNameList(data.MergedDatasetNames, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Records !== undefined && data.Records !== null) {
    contents.Records = deserializeAws_restJson1RecordList(data.Records, context);
  }
  if (data.SyncSessionToken !== undefined && data.SyncSessionToken !== null) {
    contents.SyncSessionToken = __expectString(data.SyncSessionToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1RegisterDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterDeviceCommandError(output, context);
  }
  const contents: RegisterDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    DeviceId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeviceId !== undefined && data.DeviceId !== null) {
    contents.DeviceId = __expectString(data.DeviceId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RegisterDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConfigurationException":
    case "com.amazonaws.cognitosync#InvalidConfigurationException":
      response = {
        ...(await deserializeAws_restJson1InvalidConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1SetCognitoEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetCognitoEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SetCognitoEventsCommandError(output, context);
  }
  const contents: SetCognitoEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SetCognitoEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetCognitoEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1SetIdentityPoolConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityPoolConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SetIdentityPoolConfigurationCommandError(output, context);
  }
  const contents: SetIdentityPoolConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    CognitoStreams: undefined,
    IdentityPoolId: undefined,
    PushSync: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CognitoStreams !== undefined && data.CognitoStreams !== null) {
    contents.CognitoStreams = deserializeAws_restJson1CognitoStreams(data.CognitoStreams, context);
  }
  if (data.IdentityPoolId !== undefined && data.IdentityPoolId !== null) {
    contents.IdentityPoolId = __expectString(data.IdentityPoolId);
  }
  if (data.PushSync !== undefined && data.PushSync !== null) {
    contents.PushSync = deserializeAws_restJson1PushSync(data.PushSync, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SetIdentityPoolConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityPoolConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitosync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1SubscribeToDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SubscribeToDatasetCommandError(output, context);
  }
  const contents: SubscribeToDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SubscribeToDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeToDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConfigurationException":
    case "com.amazonaws.cognitosync#InvalidConfigurationException":
      response = {
        ...(await deserializeAws_restJson1InvalidConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UnsubscribeFromDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeFromDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UnsubscribeFromDatasetCommandError(output, context);
  }
  const contents: UnsubscribeFromDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UnsubscribeFromDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeFromDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidConfigurationException":
    case "com.amazonaws.cognitosync#InvalidConfigurationException":
      response = {
        ...(await deserializeAws_restJson1InvalidConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRecordsCommandError(output, context);
  }
  const contents: UpdateRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Records: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Records !== undefined && data.Records !== null) {
    contents.Records = deserializeAws_restJson1RecordList(data.Records, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitosync#InternalErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLambdaFunctionOutputException":
    case "com.amazonaws.cognitosync#InvalidLambdaFunctionOutputException":
      response = {
        ...(await deserializeAws_restJson1InvalidLambdaFunctionOutputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitosync#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LambdaThrottledException":
    case "com.amazonaws.cognitosync#LambdaThrottledException":
      response = {
        ...(await deserializeAws_restJson1LambdaThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cognitosync#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitosync#NotAuthorizedException":
      response = {
        ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognitosync#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitosync#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitosync#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1AlreadyStreamedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyStreamedException> => {
  const contents: AlreadyStreamedException = {
    name: "AlreadyStreamedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1DuplicateRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateRequestException> => {
  const contents: DuplicateRequestException = {
    name: "DuplicateRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const contents: InternalErrorException = {
    name: "InternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationException> => {
  const contents: InvalidConfigurationException = {
    name: "InvalidConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidLambdaFunctionOutputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLambdaFunctionOutputException> => {
  const contents: InvalidLambdaFunctionOutputException = {
    name: "InvalidLambdaFunctionOutputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1LambdaThrottledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LambdaThrottledException> => {
  const contents: LambdaThrottledException = {
    name: "LambdaThrottledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1NotAuthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const contents: NotAuthorizedException = {
    name: "NotAuthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: ResourceConflictException = {
    name: "ResourceConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
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
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1ApplicationArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1CognitoStreams = (input: CognitoStreams, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName }),
    ...(input.StreamingStatus !== undefined &&
      input.StreamingStatus !== null && { StreamingStatus: input.StreamingStatus }),
  };
};

const serializeAws_restJson1Events = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1PushSync = (input: PushSync, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationArns !== undefined &&
      input.ApplicationArns !== null && {
        ApplicationArns: serializeAws_restJson1ApplicationArnList(input.ApplicationArns, context),
      }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_restJson1RecordPatch = (input: RecordPatch, context: __SerdeContext): any => {
  return {
    ...(input.DeviceLastModifiedDate !== undefined &&
      input.DeviceLastModifiedDate !== null && {
        DeviceLastModifiedDate: Math.round(input.DeviceLastModifiedDate.getTime() / 1000),
      }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Op !== undefined && input.Op !== null && { Op: input.Op }),
    ...(input.SyncCount !== undefined && input.SyncCount !== null && { SyncCount: input.SyncCount }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1RecordPatchList = (input: RecordPatch[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1RecordPatch(entry, context);
    });
};

const deserializeAws_restJson1ApplicationArnList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1CognitoStreams = (output: any, context: __SerdeContext): CognitoStreams => {
  return {
    RoleArn: __expectString(output.RoleArn),
    StreamName: __expectString(output.StreamName),
    StreamingStatus: __expectString(output.StreamingStatus),
  } as any;
};

const deserializeAws_restJson1Dataset = (output: any, context: __SerdeContext): Dataset => {
  return {
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    DataStorage: __expectLong(output.DataStorage),
    DatasetName: __expectString(output.DatasetName),
    IdentityId: __expectString(output.IdentityId),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    NumRecords: __expectLong(output.NumRecords),
  } as any;
};

const deserializeAws_restJson1DatasetList = (output: any, context: __SerdeContext): Dataset[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Dataset(entry, context);
    });
};

const deserializeAws_restJson1Events = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1IdentityPoolUsage = (output: any, context: __SerdeContext): IdentityPoolUsage => {
  return {
    DataStorage: __expectLong(output.DataStorage),
    IdentityPoolId: __expectString(output.IdentityPoolId),
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    SyncSessionsCount: __expectLong(output.SyncSessionsCount),
  } as any;
};

const deserializeAws_restJson1IdentityPoolUsageList = (output: any, context: __SerdeContext): IdentityPoolUsage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IdentityPoolUsage(entry, context);
    });
};

const deserializeAws_restJson1IdentityUsage = (output: any, context: __SerdeContext): IdentityUsage => {
  return {
    DataStorage: __expectLong(output.DataStorage),
    DatasetCount: __expectInt32(output.DatasetCount),
    IdentityId: __expectString(output.IdentityId),
    IdentityPoolId: __expectString(output.IdentityPoolId),
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1MergedDatasetNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1PushSync = (output: any, context: __SerdeContext): PushSync => {
  return {
    ApplicationArns:
      output.ApplicationArns !== undefined && output.ApplicationArns !== null
        ? deserializeAws_restJson1ApplicationArnList(output.ApplicationArns, context)
        : undefined,
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_restJson1_Record = (output: any, context: __SerdeContext): _Record => {
  return {
    DeviceLastModifiedDate:
      output.DeviceLastModifiedDate !== undefined && output.DeviceLastModifiedDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeviceLastModifiedDate)))
        : undefined,
    Key: __expectString(output.Key),
    LastModifiedBy: __expectString(output.LastModifiedBy),
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    SyncCount: __expectLong(output.SyncCount),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1RecordList = (output: any, context: __SerdeContext): _Record[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1_Record(entry, context);
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
