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
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AssociateAssetsCommandInput, AssociateAssetsCommandOutput } from "../commands/AssociateAssetsCommand";
import {
  AssociateTimeSeriesToAssetPropertyCommandInput,
  AssociateTimeSeriesToAssetPropertyCommandOutput,
} from "../commands/AssociateTimeSeriesToAssetPropertyCommand";
import {
  BatchAssociateProjectAssetsCommandInput,
  BatchAssociateProjectAssetsCommandOutput,
} from "../commands/BatchAssociateProjectAssetsCommand";
import {
  BatchDisassociateProjectAssetsCommandInput,
  BatchDisassociateProjectAssetsCommandOutput,
} from "../commands/BatchDisassociateProjectAssetsCommand";
import {
  BatchGetAssetPropertyAggregatesCommandInput,
  BatchGetAssetPropertyAggregatesCommandOutput,
} from "../commands/BatchGetAssetPropertyAggregatesCommand";
import {
  BatchGetAssetPropertyValueCommandInput,
  BatchGetAssetPropertyValueCommandOutput,
} from "../commands/BatchGetAssetPropertyValueCommand";
import {
  BatchGetAssetPropertyValueHistoryCommandInput,
  BatchGetAssetPropertyValueHistoryCommandOutput,
} from "../commands/BatchGetAssetPropertyValueHistoryCommand";
import {
  BatchPutAssetPropertyValueCommandInput,
  BatchPutAssetPropertyValueCommandOutput,
} from "../commands/BatchPutAssetPropertyValueCommand";
import { CreateAccessPolicyCommandInput, CreateAccessPolicyCommandOutput } from "../commands/CreateAccessPolicyCommand";
import { CreateAssetCommandInput, CreateAssetCommandOutput } from "../commands/CreateAssetCommand";
import { CreateAssetModelCommandInput, CreateAssetModelCommandOutput } from "../commands/CreateAssetModelCommand";
import {
  CreateBulkImportJobCommandInput,
  CreateBulkImportJobCommandOutput,
} from "../commands/CreateBulkImportJobCommand";
import { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "../commands/CreateDashboardCommand";
import { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "../commands/CreateGatewayCommand";
import { CreatePortalCommandInput, CreatePortalCommandOutput } from "../commands/CreatePortalCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import { DeleteAccessPolicyCommandInput, DeleteAccessPolicyCommandOutput } from "../commands/DeleteAccessPolicyCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "../commands/DeleteAssetCommand";
import { DeleteAssetModelCommandInput, DeleteAssetModelCommandOutput } from "../commands/DeleteAssetModelCommand";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "../commands/DeleteDashboardCommand";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "../commands/DeleteGatewayCommand";
import { DeletePortalCommandInput, DeletePortalCommandOutput } from "../commands/DeletePortalCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import { DeleteTimeSeriesCommandInput, DeleteTimeSeriesCommandOutput } from "../commands/DeleteTimeSeriesCommand";
import {
  DescribeAccessPolicyCommandInput,
  DescribeAccessPolicyCommandOutput,
} from "../commands/DescribeAccessPolicyCommand";
import { DescribeAssetCommandInput, DescribeAssetCommandOutput } from "../commands/DescribeAssetCommand";
import { DescribeAssetModelCommandInput, DescribeAssetModelCommandOutput } from "../commands/DescribeAssetModelCommand";
import {
  DescribeAssetPropertyCommandInput,
  DescribeAssetPropertyCommandOutput,
} from "../commands/DescribeAssetPropertyCommand";
import {
  DescribeBulkImportJobCommandInput,
  DescribeBulkImportJobCommandOutput,
} from "../commands/DescribeBulkImportJobCommand";
import { DescribeDashboardCommandInput, DescribeDashboardCommandOutput } from "../commands/DescribeDashboardCommand";
import {
  DescribeDefaultEncryptionConfigurationCommandInput,
  DescribeDefaultEncryptionConfigurationCommandOutput,
} from "../commands/DescribeDefaultEncryptionConfigurationCommand";
import {
  DescribeGatewayCapabilityConfigurationCommandInput,
  DescribeGatewayCapabilityConfigurationCommandOutput,
} from "../commands/DescribeGatewayCapabilityConfigurationCommand";
import { DescribeGatewayCommandInput, DescribeGatewayCommandOutput } from "../commands/DescribeGatewayCommand";
import {
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput,
} from "../commands/DescribeLoggingOptionsCommand";
import { DescribePortalCommandInput, DescribePortalCommandOutput } from "../commands/DescribePortalCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "../commands/DescribeProjectCommand";
import {
  DescribeStorageConfigurationCommandInput,
  DescribeStorageConfigurationCommandOutput,
} from "../commands/DescribeStorageConfigurationCommand";
import { DescribeTimeSeriesCommandInput, DescribeTimeSeriesCommandOutput } from "../commands/DescribeTimeSeriesCommand";
import { DisassociateAssetsCommandInput, DisassociateAssetsCommandOutput } from "../commands/DisassociateAssetsCommand";
import {
  DisassociateTimeSeriesFromAssetPropertyCommandInput,
  DisassociateTimeSeriesFromAssetPropertyCommandOutput,
} from "../commands/DisassociateTimeSeriesFromAssetPropertyCommand";
import {
  GetAssetPropertyAggregatesCommandInput,
  GetAssetPropertyAggregatesCommandOutput,
} from "../commands/GetAssetPropertyAggregatesCommand";
import {
  GetAssetPropertyValueCommandInput,
  GetAssetPropertyValueCommandOutput,
} from "../commands/GetAssetPropertyValueCommand";
import {
  GetAssetPropertyValueHistoryCommandInput,
  GetAssetPropertyValueHistoryCommandOutput,
} from "../commands/GetAssetPropertyValueHistoryCommand";
import {
  GetInterpolatedAssetPropertyValuesCommandInput,
  GetInterpolatedAssetPropertyValuesCommandOutput,
} from "../commands/GetInterpolatedAssetPropertyValuesCommand";
import { ListAccessPoliciesCommandInput, ListAccessPoliciesCommandOutput } from "../commands/ListAccessPoliciesCommand";
import {
  ListAssetModelPropertiesCommandInput,
  ListAssetModelPropertiesCommandOutput,
} from "../commands/ListAssetModelPropertiesCommand";
import { ListAssetModelsCommandInput, ListAssetModelsCommandOutput } from "../commands/ListAssetModelsCommand";
import {
  ListAssetPropertiesCommandInput,
  ListAssetPropertiesCommandOutput,
} from "../commands/ListAssetPropertiesCommand";
import {
  ListAssetRelationshipsCommandInput,
  ListAssetRelationshipsCommandOutput,
} from "../commands/ListAssetRelationshipsCommand";
import { ListAssetsCommandInput, ListAssetsCommandOutput } from "../commands/ListAssetsCommand";
import {
  ListAssociatedAssetsCommandInput,
  ListAssociatedAssetsCommandOutput,
} from "../commands/ListAssociatedAssetsCommand";
import { ListBulkImportJobsCommandInput, ListBulkImportJobsCommandOutput } from "../commands/ListBulkImportJobsCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "../commands/ListDashboardsCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "../commands/ListGatewaysCommand";
import { ListPortalsCommandInput, ListPortalsCommandOutput } from "../commands/ListPortalsCommand";
import { ListProjectAssetsCommandInput, ListProjectAssetsCommandOutput } from "../commands/ListProjectAssetsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTimeSeriesCommandInput, ListTimeSeriesCommandOutput } from "../commands/ListTimeSeriesCommand";
import {
  PutDefaultEncryptionConfigurationCommandInput,
  PutDefaultEncryptionConfigurationCommandOutput,
} from "../commands/PutDefaultEncryptionConfigurationCommand";
import { PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput } from "../commands/PutLoggingOptionsCommand";
import {
  PutStorageConfigurationCommandInput,
  PutStorageConfigurationCommandOutput,
} from "../commands/PutStorageConfigurationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAccessPolicyCommandInput, UpdateAccessPolicyCommandOutput } from "../commands/UpdateAccessPolicyCommand";
import { UpdateAssetCommandInput, UpdateAssetCommandOutput } from "../commands/UpdateAssetCommand";
import { UpdateAssetModelCommandInput, UpdateAssetModelCommandOutput } from "../commands/UpdateAssetModelCommand";
import {
  UpdateAssetPropertyCommandInput,
  UpdateAssetPropertyCommandOutput,
} from "../commands/UpdateAssetPropertyCommand";
import { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "../commands/UpdateDashboardCommand";
import {
  UpdateGatewayCapabilityConfigurationCommandInput,
  UpdateGatewayCapabilityConfigurationCommandOutput,
} from "../commands/UpdateGatewayCapabilityConfigurationCommand";
import { UpdateGatewayCommandInput, UpdateGatewayCommandOutput } from "../commands/UpdateGatewayCommand";
import { UpdatePortalCommandInput, UpdatePortalCommandOutput } from "../commands/UpdatePortalCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "../commands/UpdateProjectCommand";
import { IoTSiteWiseServiceException as __BaseException } from "../models/IoTSiteWiseServiceException";
import {
  AccessPolicySummary,
  AggregatedValue,
  Aggregates,
  AggregateType,
  Alarms,
  AssetCompositeModel,
  AssetErrorDetails,
  AssetHierarchy,
  AssetHierarchyInfo,
  AssetModelCompositeModel,
  AssetModelCompositeModelDefinition,
  AssetModelHierarchy,
  AssetModelHierarchyDefinition,
  AssetModelProperty,
  AssetModelPropertyDefinition,
  AssetModelPropertySummary,
  AssetModelStatus,
  AssetModelSummary,
  AssetProperty,
  AssetPropertySummary,
  AssetPropertyValue,
  AssetRelationshipSummary,
  AssetStatus,
  AssetSummary,
  AssociatedAssetsSummary,
  Attribute,
  BatchGetAssetPropertyAggregatesEntry,
  BatchGetAssetPropertyAggregatesErrorEntry,
  BatchGetAssetPropertyAggregatesErrorInfo,
  BatchGetAssetPropertyAggregatesSkippedEntry,
  BatchGetAssetPropertyAggregatesSuccessEntry,
  BatchGetAssetPropertyValueEntry,
  BatchGetAssetPropertyValueErrorEntry,
  BatchGetAssetPropertyValueErrorInfo,
  BatchGetAssetPropertyValueHistoryEntry,
  BatchGetAssetPropertyValueHistoryErrorEntry,
  BatchGetAssetPropertyValueHistoryErrorInfo,
  BatchGetAssetPropertyValueHistorySkippedEntry,
  BatchGetAssetPropertyValueHistorySuccessEntry,
  BatchGetAssetPropertyValueSkippedEntry,
  BatchGetAssetPropertyValueSuccessEntry,
  BatchPutAssetPropertyError,
  BatchPutAssetPropertyErrorEntry,
  ColumnName,
  CompositeModelProperty,
  ConfigurationErrorDetails,
  ConfigurationStatus,
  ConflictingOperationException,
  Csv,
  CustomerManagedS3Storage,
  DashboardSummary,
  DetailedError,
  ErrorDetails,
  ErrorReportLocation,
  ExpressionVariable,
  File,
  FileFormat,
  ForwardingConfig,
  GatewayCapabilitySummary,
  GatewayPlatform,
  GatewaySummary,
  Greengrass,
  GreengrassV2,
  GroupIdentity,
  IAMRoleIdentity,
  IAMUserIdentity,
  Identity,
  Image,
  ImageFile,
  ImageLocation,
  InternalFailureException,
  InterpolatedAssetPropertyValue,
  InvalidRequestException,
  JobConfiguration,
  JobSummary,
  LimitExceededException,
  LoggingOptions,
  Measurement,
  MeasurementProcessingConfig,
  Metric,
  MetricProcessingConfig,
  MetricWindow,
  MonitorErrorDetails,
  MultiLayerStorage,
  PortalResource,
  PortalStatus,
  PortalSummary,
  ProjectResource,
  ProjectSummary,
  Property,
  PropertyNotification,
  PropertyType,
  PutAssetPropertyValueEntry,
  Quality,
  Resource,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  RetentionPeriod,
  ServiceUnavailableException,
  ThrottlingException,
  TimeInNanos,
  TimeSeriesSummary,
  TooManyTagsException,
  Transform,
  TransformProcessingConfig,
  TumblingWindow,
  UnauthorizedException,
  UserIdentity,
  VariableValue,
  Variant,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateAssetsCommand
 */
export const se_AssociateAssetsCommand = async (
  input: AssociateAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}/associate";
  resolvedPath = __resolvedPath(resolvedPath, input, "assetId", () => input.assetId!, "{assetId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.childAssetId != null && { childAssetId: input.childAssetId }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.hierarchyId != null && { hierarchyId: input.hierarchyId }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1AssociateTimeSeriesToAssetPropertyCommand
 */
export const se_AssociateTimeSeriesToAssetPropertyCommand = async (
  input: AssociateTimeSeriesToAssetPropertyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/timeseries/associate";
  const query: any = map({
    alias: [, __expectNonNull(input.alias!, `alias`)],
    assetId: [, __expectNonNull(input.assetId!, `assetId`)],
    propertyId: [, __expectNonNull(input.propertyId!, `propertyId`)],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1BatchAssociateProjectAssetsCommand
 */
export const se_BatchAssociateProjectAssetsCommand = async (
  input: BatchAssociateProjectAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{projectId}/assets/associate";
  resolvedPath = __resolvedPath(resolvedPath, input, "projectId", () => input.projectId!, "{projectId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.assetIds != null && { assetIds: se_IDs(input.assetIds, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1BatchDisassociateProjectAssetsCommand
 */
export const se_BatchDisassociateProjectAssetsCommand = async (
  input: BatchDisassociateProjectAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{projectId}/assets/disassociate";
  resolvedPath = __resolvedPath(resolvedPath, input, "projectId", () => input.projectId!, "{projectId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.assetIds != null && { assetIds: se_IDs(input.assetIds, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1BatchGetAssetPropertyAggregatesCommand
 */
export const se_BatchGetAssetPropertyAggregatesCommand = async (
  input: BatchGetAssetPropertyAggregatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/properties/batch/aggregates";
  let body: any;
  body = JSON.stringify({
    ...(input.entries != null && { entries: se_BatchGetAssetPropertyAggregatesEntries(input.entries, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
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
 * serializeAws_restJson1BatchGetAssetPropertyValueCommand
 */
export const se_BatchGetAssetPropertyValueCommand = async (
  input: BatchGetAssetPropertyValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/properties/batch/latest";
  let body: any;
  body = JSON.stringify({
    ...(input.entries != null && { entries: se_BatchGetAssetPropertyValueEntries(input.entries, context) }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
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
 * serializeAws_restJson1BatchGetAssetPropertyValueHistoryCommand
 */
export const se_BatchGetAssetPropertyValueHistoryCommand = async (
  input: BatchGetAssetPropertyValueHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/properties/batch/history";
  let body: any;
  body = JSON.stringify({
    ...(input.entries != null && { entries: se_BatchGetAssetPropertyValueHistoryEntries(input.entries, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
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
 * serializeAws_restJson1BatchPutAssetPropertyValueCommand
 */
export const se_BatchPutAssetPropertyValueCommand = async (
  input: BatchPutAssetPropertyValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/properties";
  let body: any;
  body = JSON.stringify({
    ...(input.entries != null && { entries: se_PutAssetPropertyValueEntries(input.entries, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
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
 * serializeAws_restJson1CreateAccessPolicyCommand
 */
export const se_CreateAccessPolicyCommand = async (
  input: CreateAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-policies";
  let body: any;
  body = JSON.stringify({
    ...(input.accessPolicyIdentity != null && {
      accessPolicyIdentity: se_Identity(input.accessPolicyIdentity, context),
    }),
    ...(input.accessPolicyPermission != null && { accessPolicyPermission: input.accessPolicyPermission }),
    ...(input.accessPolicyResource != null && {
      accessPolicyResource: se_Resource(input.accessPolicyResource, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1CreateAssetCommand
 */
export const se_CreateAssetCommand = async (
  input: CreateAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets";
  let body: any;
  body = JSON.stringify({
    ...(input.assetDescription != null && { assetDescription: input.assetDescription }),
    ...(input.assetModelId != null && { assetModelId: input.assetModelId }),
    ...(input.assetName != null && { assetName: input.assetName }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1CreateAssetModelCommand
 */
export const se_CreateAssetModelCommand = async (
  input: CreateAssetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/asset-models";
  let body: any;
  body = JSON.stringify({
    ...(input.assetModelCompositeModels != null && {
      assetModelCompositeModels: se_AssetModelCompositeModelDefinitions(input.assetModelCompositeModels, context),
    }),
    ...(input.assetModelDescription != null && { assetModelDescription: input.assetModelDescription }),
    ...(input.assetModelHierarchies != null && {
      assetModelHierarchies: se_AssetModelHierarchyDefinitions(input.assetModelHierarchies, context),
    }),
    ...(input.assetModelName != null && { assetModelName: input.assetModelName }),
    ...(input.assetModelProperties != null && {
      assetModelProperties: se_AssetModelPropertyDefinitions(input.assetModelProperties, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1CreateBulkImportJobCommand
 */
export const se_CreateBulkImportJobCommand = async (
  input: CreateBulkImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.errorReportLocation != null && {
      errorReportLocation: se_ErrorReportLocation(input.errorReportLocation, context),
    }),
    ...(input.files != null && { files: se_Files(input.files, context) }),
    ...(input.jobConfiguration != null && { jobConfiguration: se_JobConfiguration(input.jobConfiguration, context) }),
    ...(input.jobName != null && { jobName: input.jobName }),
    ...(input.jobRoleArn != null && { jobRoleArn: input.jobRoleArn }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
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
 * serializeAws_restJson1CreateDashboardCommand
 */
export const se_CreateDashboardCommand = async (
  input: CreateDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dashboards";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.dashboardDefinition != null && { dashboardDefinition: input.dashboardDefinition }),
    ...(input.dashboardDescription != null && { dashboardDescription: input.dashboardDescription }),
    ...(input.dashboardName != null && { dashboardName: input.dashboardName }),
    ...(input.projectId != null && { projectId: input.projectId }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1CreateGatewayCommand
 */
export const se_CreateGatewayCommand = async (
  input: CreateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/20200301/gateways";
  let body: any;
  body = JSON.stringify({
    ...(input.gatewayName != null && { gatewayName: input.gatewayName }),
    ...(input.gatewayPlatform != null && { gatewayPlatform: se_GatewayPlatform(input.gatewayPlatform, context) }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1CreatePortalCommand
 */
export const se_CreatePortalCommand = async (
  input: CreatePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals";
  let body: any;
  body = JSON.stringify({
    ...(input.alarms != null && { alarms: se_Alarms(input.alarms, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.notificationSenderEmail != null && { notificationSenderEmail: input.notificationSenderEmail }),
    ...(input.portalAuthMode != null && { portalAuthMode: input.portalAuthMode }),
    ...(input.portalContactEmail != null && { portalContactEmail: input.portalContactEmail }),
    ...(input.portalDescription != null && { portalDescription: input.portalDescription }),
    ...(input.portalLogoImageFile != null && { portalLogoImageFile: se_ImageFile(input.portalLogoImageFile, context) }),
    ...(input.portalName != null && { portalName: input.portalName }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.portalId != null && { portalId: input.portalId }),
    ...(input.projectDescription != null && { projectDescription: input.projectDescription }),
    ...(input.projectName != null && { projectName: input.projectName }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1DeleteAccessPolicyCommand
 */
export const se_DeleteAccessPolicyCommand = async (
  input: DeleteAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-policies/{accessPolicyId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "accessPolicyId",
    () => input.accessPolicyId!,
    "{accessPolicyId}",
    false
  );
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1DeleteAssetCommand
 */
export const se_DeleteAssetCommand = async (
  input: DeleteAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "assetId", () => input.assetId!, "{assetId}", false);
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1DeleteAssetModelCommand
 */
export const se_DeleteAssetModelCommand = async (
  input: DeleteAssetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/asset-models/{assetModelId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assetModelId",
    () => input.assetModelId!,
    "{assetModelId}",
    false
  );
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1DeleteDashboardCommand
 */
export const se_DeleteDashboardCommand = async (
  input: DeleteDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dashboards/{dashboardId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "dashboardId", () => input.dashboardId!, "{dashboardId}", false);
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1DeleteGatewayCommand
 */
export const se_DeleteGatewayCommand = async (
  input: DeleteGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/20200301/gateways/{gatewayId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1DeletePortalCommand
 */
export const se_DeletePortalCommand = async (
  input: DeletePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalId", () => input.portalId!, "{portalId}", false);
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{projectId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "projectId", () => input.projectId!, "{projectId}", false);
  const query: any = map({
    clientToken: [, input.clientToken ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1DeleteTimeSeriesCommand
 */
export const se_DeleteTimeSeriesCommand = async (
  input: DeleteTimeSeriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/timeseries/delete";
  const query: any = map({
    alias: [, input.alias!],
    assetId: [, input.assetId!],
    propertyId: [, input.propertyId!],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1DescribeAccessPolicyCommand
 */
export const se_DescribeAccessPolicyCommand = async (
  input: DescribeAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-policies/{accessPolicyId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "accessPolicyId",
    () => input.accessPolicyId!,
    "{accessPolicyId}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1DescribeAssetCommand
 */
export const se_DescribeAssetCommand = async (
  input: DescribeAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "assetId", () => input.assetId!, "{assetId}", false);
  const query: any = map({
    excludeProperties: [() => input.excludeProperties !== void 0, () => input.excludeProperties!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1DescribeAssetModelCommand
 */
export const se_DescribeAssetModelCommand = async (
  input: DescribeAssetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/asset-models/{assetModelId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assetModelId",
    () => input.assetModelId!,
    "{assetModelId}",
    false
  );
  const query: any = map({
    excludeProperties: [() => input.excludeProperties !== void 0, () => input.excludeProperties!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1DescribeAssetPropertyCommand
 */
export const se_DescribeAssetPropertyCommand = async (
  input: DescribeAssetPropertyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}/properties/{propertyId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "assetId", () => input.assetId!, "{assetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "propertyId", () => input.propertyId!, "{propertyId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1DescribeBulkImportJobCommand
 */
export const se_DescribeBulkImportJobCommand = async (
  input: DescribeBulkImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
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
 * serializeAws_restJson1DescribeDashboardCommand
 */
export const se_DescribeDashboardCommand = async (
  input: DescribeDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dashboards/{dashboardId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "dashboardId", () => input.dashboardId!, "{dashboardId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand
 */
export const se_DescribeDefaultEncryptionConfigurationCommand = async (
  input: DescribeDefaultEncryptionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configuration/account/encryption";
  let body: any;
  body = "";
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1DescribeGatewayCommand
 */
export const se_DescribeGatewayCommand = async (
  input: DescribeGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/20200301/gateways/{gatewayId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand
 */
export const se_DescribeGatewayCapabilityConfigurationCommand = async (
  input: DescribeGatewayCapabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/20200301/gateways/{gatewayId}/capability/{capabilityNamespace}";
  resolvedPath = __resolvedPath(resolvedPath, input, "gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "capabilityNamespace",
    () => input.capabilityNamespace!,
    "{capabilityNamespace}",
    false
  );
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1DescribeLoggingOptionsCommand
 */
export const se_DescribeLoggingOptionsCommand = async (
  input: DescribeLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/logging";
  let body: any;
  body = "";
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1DescribePortalCommand
 */
export const se_DescribePortalCommand = async (
  input: DescribePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalId", () => input.portalId!, "{portalId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1DescribeProjectCommand
 */
export const se_DescribeProjectCommand = async (
  input: DescribeProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{projectId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "projectId", () => input.projectId!, "{projectId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1DescribeStorageConfigurationCommand
 */
export const se_DescribeStorageConfigurationCommand = async (
  input: DescribeStorageConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configuration/account/storage";
  let body: any;
  body = "";
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1DescribeTimeSeriesCommand
 */
export const se_DescribeTimeSeriesCommand = async (
  input: DescribeTimeSeriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/timeseries/describe";
  const query: any = map({
    alias: [, input.alias!],
    assetId: [, input.assetId!],
    propertyId: [, input.propertyId!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1DisassociateAssetsCommand
 */
export const se_DisassociateAssetsCommand = async (
  input: DisassociateAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}/disassociate";
  resolvedPath = __resolvedPath(resolvedPath, input, "assetId", () => input.assetId!, "{assetId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.childAssetId != null && { childAssetId: input.childAssetId }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.hierarchyId != null && { hierarchyId: input.hierarchyId }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1DisassociateTimeSeriesFromAssetPropertyCommand
 */
export const se_DisassociateTimeSeriesFromAssetPropertyCommand = async (
  input: DisassociateTimeSeriesFromAssetPropertyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/timeseries/disassociate";
  const query: any = map({
    alias: [, __expectNonNull(input.alias!, `alias`)],
    assetId: [, __expectNonNull(input.assetId!, `assetId`)],
    propertyId: [, __expectNonNull(input.propertyId!, `propertyId`)],
  });
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1GetAssetPropertyAggregatesCommand
 */
export const se_GetAssetPropertyAggregatesCommand = async (
  input: GetAssetPropertyAggregatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/properties/aggregates";
  const query: any = map({
    assetId: [, input.assetId!],
    propertyId: [, input.propertyId!],
    propertyAlias: [, input.propertyAlias!],
    aggregateTypes: [
      __expectNonNull(input.aggregateTypes, `aggregateTypes`) != null,
      () => (input.aggregateTypes! || []).map((_entry) => _entry as any),
    ],
    resolution: [, __expectNonNull(input.resolution!, `resolution`)],
    qualities: [() => input.qualities !== void 0, () => (input.qualities! || []).map((_entry) => _entry as any)],
    startDate: [
      __expectNonNull(input.startDate, `startDate`) != null,
      () => (input.startDate!.toISOString().split(".")[0] + "Z").toString(),
    ],
    endDate: [
      __expectNonNull(input.endDate, `endDate`) != null,
      () => (input.endDate!.toISOString().split(".")[0] + "Z").toString(),
    ],
    timeOrdering: [, input.timeOrdering!],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
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
 * serializeAws_restJson1GetAssetPropertyValueCommand
 */
export const se_GetAssetPropertyValueCommand = async (
  input: GetAssetPropertyValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/properties/latest";
  const query: any = map({
    assetId: [, input.assetId!],
    propertyId: [, input.propertyId!],
    propertyAlias: [, input.propertyAlias!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
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
 * serializeAws_restJson1GetAssetPropertyValueHistoryCommand
 */
export const se_GetAssetPropertyValueHistoryCommand = async (
  input: GetAssetPropertyValueHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/properties/history";
  const query: any = map({
    assetId: [, input.assetId!],
    propertyId: [, input.propertyId!],
    propertyAlias: [, input.propertyAlias!],
    startDate: [
      () => input.startDate !== void 0,
      () => (input.startDate!.toISOString().split(".")[0] + "Z").toString(),
    ],
    endDate: [() => input.endDate !== void 0, () => (input.endDate!.toISOString().split(".")[0] + "Z").toString()],
    qualities: [() => input.qualities !== void 0, () => (input.qualities! || []).map((_entry) => _entry as any)],
    timeOrdering: [, input.timeOrdering!],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
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
 * serializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand
 */
export const se_GetInterpolatedAssetPropertyValuesCommand = async (
  input: GetInterpolatedAssetPropertyValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/properties/interpolated";
  const query: any = map({
    assetId: [, input.assetId!],
    propertyId: [, input.propertyId!],
    propertyAlias: [, input.propertyAlias!],
    startTimeInSeconds: [
      __expectNonNull(input.startTimeInSeconds, `startTimeInSeconds`) != null,
      () => input.startTimeInSeconds!.toString(),
    ],
    startTimeOffsetInNanos: [
      () => input.startTimeOffsetInNanos !== void 0,
      () => input.startTimeOffsetInNanos!.toString(),
    ],
    endTimeInSeconds: [
      __expectNonNull(input.endTimeInSeconds, `endTimeInSeconds`) != null,
      () => input.endTimeInSeconds!.toString(),
    ],
    endTimeOffsetInNanos: [() => input.endTimeOffsetInNanos !== void 0, () => input.endTimeOffsetInNanos!.toString()],
    quality: [, __expectNonNull(input.quality!, `quality`)],
    intervalInSeconds: [
      __expectNonNull(input.intervalInSeconds, `intervalInSeconds`) != null,
      () => input.intervalInSeconds!.toString(),
    ],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    type: [, __expectNonNull(input.type!, `type`)],
    intervalWindowInSeconds: [
      () => input.intervalWindowInSeconds !== void 0,
      () => input.intervalWindowInSeconds!.toString(),
    ],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
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
 * serializeAws_restJson1ListAccessPoliciesCommand
 */
export const se_ListAccessPoliciesCommand = async (
  input: ListAccessPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-policies";
  const query: any = map({
    identityType: [, input.identityType!],
    identityId: [, input.identityId!],
    resourceType: [, input.resourceType!],
    resourceId: [, input.resourceId!],
    iamArn: [, input.iamArn!],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1ListAssetModelPropertiesCommand
 */
export const se_ListAssetModelPropertiesCommand = async (
  input: ListAssetModelPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/asset-models/{assetModelId}/properties";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assetModelId",
    () => input.assetModelId!,
    "{assetModelId}",
    false
  );
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    filter: [, input.filter!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1ListAssetModelsCommand
 */
export const se_ListAssetModelsCommand = async (
  input: ListAssetModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/asset-models";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1ListAssetPropertiesCommand
 */
export const se_ListAssetPropertiesCommand = async (
  input: ListAssetPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}/properties";
  resolvedPath = __resolvedPath(resolvedPath, input, "assetId", () => input.assetId!, "{assetId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    filter: [, input.filter!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1ListAssetRelationshipsCommand
 */
export const se_ListAssetRelationshipsCommand = async (
  input: ListAssetRelationshipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}/assetRelationships";
  resolvedPath = __resolvedPath(resolvedPath, input, "assetId", () => input.assetId!, "{assetId}", false);
  const query: any = map({
    traversalType: [, __expectNonNull(input.traversalType!, `traversalType`)],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1ListAssetsCommand
 */
export const se_ListAssetsCommand = async (
  input: ListAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    assetModelId: [, input.assetModelId!],
    filter: [, input.filter!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1ListAssociatedAssetsCommand
 */
export const se_ListAssociatedAssetsCommand = async (
  input: ListAssociatedAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}/hierarchies";
  resolvedPath = __resolvedPath(resolvedPath, input, "assetId", () => input.assetId!, "{assetId}", false);
  const query: any = map({
    hierarchyId: [, input.hierarchyId!],
    traversalDirection: [, input.traversalDirection!],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1ListBulkImportJobsCommand
 */
export const se_ListBulkImportJobsCommand = async (
  input: ListBulkImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    filter: [, input.filter!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
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
 * serializeAws_restJson1ListDashboardsCommand
 */
export const se_ListDashboardsCommand = async (
  input: ListDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dashboards";
  const query: any = map({
    projectId: [, __expectNonNull(input.projectId!, `projectId`)],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1ListGatewaysCommand
 */
export const se_ListGatewaysCommand = async (
  input: ListGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/20200301/gateways";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1ListPortalsCommand
 */
export const se_ListPortalsCommand = async (
  input: ListPortalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1ListProjectAssetsCommand
 */
export const se_ListProjectAssetsCommand = async (
  input: ListProjectAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{projectId}/assets";
  resolvedPath = __resolvedPath(resolvedPath, input, "projectId", () => input.projectId!, "{projectId}", false);
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1ListProjectsCommand
 */
export const se_ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects";
  const query: any = map({
    portalId: [, __expectNonNull(input.portalId!, `portalId`)],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1ListTimeSeriesCommand
 */
export const se_ListTimeSeriesCommand = async (
  input: ListTimeSeriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/timeseries";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    assetId: [, input.assetId!],
    aliasPrefix: [, input.aliasPrefix!],
    timeSeriesType: [, input.timeSeriesType!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1PutDefaultEncryptionConfigurationCommand
 */
export const se_PutDefaultEncryptionConfigurationCommand = async (
  input: PutDefaultEncryptionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configuration/account/encryption";
  let body: any;
  body = JSON.stringify({
    ...(input.encryptionType != null && { encryptionType: input.encryptionType }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1PutLoggingOptionsCommand
 */
export const se_PutLoggingOptionsCommand = async (
  input: PutLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/logging";
  let body: any;
  body = JSON.stringify({
    ...(input.loggingOptions != null && { loggingOptions: se_LoggingOptions(input.loggingOptions, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1PutStorageConfigurationCommand
 */
export const se_PutStorageConfigurationCommand = async (
  input: PutStorageConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configuration/account/storage";
  let body: any;
  body = JSON.stringify({
    ...(input.disassociatedDataStorage != null && { disassociatedDataStorage: input.disassociatedDataStorage }),
    ...(input.multiLayerStorage != null && {
      multiLayerStorage: se_MultiLayerStorage(input.multiLayerStorage, context),
    }),
    ...(input.retentionPeriod != null && { retentionPeriod: se_RetentionPeriod(input.retentionPeriod, context) }),
    ...(input.storageType != null && { storageType: input.storageType }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1UpdateAccessPolicyCommand
 */
export const se_UpdateAccessPolicyCommand = async (
  input: UpdateAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-policies/{accessPolicyId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "accessPolicyId",
    () => input.accessPolicyId!,
    "{accessPolicyId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.accessPolicyIdentity != null && {
      accessPolicyIdentity: se_Identity(input.accessPolicyIdentity, context),
    }),
    ...(input.accessPolicyPermission != null && { accessPolicyPermission: input.accessPolicyPermission }),
    ...(input.accessPolicyResource != null && {
      accessPolicyResource: se_Resource(input.accessPolicyResource, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1UpdateAssetCommand
 */
export const se_UpdateAssetCommand = async (
  input: UpdateAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "assetId", () => input.assetId!, "{assetId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.assetDescription != null && { assetDescription: input.assetDescription }),
    ...(input.assetName != null && { assetName: input.assetName }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1UpdateAssetModelCommand
 */
export const se_UpdateAssetModelCommand = async (
  input: UpdateAssetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/asset-models/{assetModelId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "assetModelId",
    () => input.assetModelId!,
    "{assetModelId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.assetModelCompositeModels != null && {
      assetModelCompositeModels: se_AssetModelCompositeModels(input.assetModelCompositeModels, context),
    }),
    ...(input.assetModelDescription != null && { assetModelDescription: input.assetModelDescription }),
    ...(input.assetModelHierarchies != null && {
      assetModelHierarchies: se_AssetModelHierarchies(input.assetModelHierarchies, context),
    }),
    ...(input.assetModelName != null && { assetModelName: input.assetModelName }),
    ...(input.assetModelProperties != null && {
      assetModelProperties: se_AssetModelProperties(input.assetModelProperties, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1UpdateAssetPropertyCommand
 */
export const se_UpdateAssetPropertyCommand = async (
  input: UpdateAssetPropertyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}/properties/{propertyId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "assetId", () => input.assetId!, "{assetId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "propertyId", () => input.propertyId!, "{propertyId}", false);
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.propertyAlias != null && { propertyAlias: input.propertyAlias }),
    ...(input.propertyNotificationState != null && { propertyNotificationState: input.propertyNotificationState }),
    ...(input.propertyUnit != null && { propertyUnit: input.propertyUnit }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1UpdateDashboardCommand
 */
export const se_UpdateDashboardCommand = async (
  input: UpdateDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dashboards/{dashboardId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "dashboardId", () => input.dashboardId!, "{dashboardId}", false);
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.dashboardDefinition != null && { dashboardDefinition: input.dashboardDefinition }),
    ...(input.dashboardDescription != null && { dashboardDescription: input.dashboardDescription }),
    ...(input.dashboardName != null && { dashboardName: input.dashboardName }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1UpdateGatewayCommand
 */
export const se_UpdateGatewayCommand = async (
  input: UpdateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/20200301/gateways/{gatewayId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.gatewayName != null && { gatewayName: input.gatewayName }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand
 */
export const se_UpdateGatewayCapabilityConfigurationCommand = async (
  input: UpdateGatewayCapabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/20200301/gateways/{gatewayId}/capability";
  resolvedPath = __resolvedPath(resolvedPath, input, "gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.capabilityConfiguration != null && { capabilityConfiguration: input.capabilityConfiguration }),
    ...(input.capabilityNamespace != null && { capabilityNamespace: input.capabilityNamespace }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
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
 * serializeAws_restJson1UpdatePortalCommand
 */
export const se_UpdatePortalCommand = async (
  input: UpdatePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "portalId", () => input.portalId!, "{portalId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.alarms != null && { alarms: se_Alarms(input.alarms, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.notificationSenderEmail != null && { notificationSenderEmail: input.notificationSenderEmail }),
    ...(input.portalContactEmail != null && { portalContactEmail: input.portalContactEmail }),
    ...(input.portalDescription != null && { portalDescription: input.portalDescription }),
    ...(input.portalLogoImage != null && { portalLogoImage: se_Image(input.portalLogoImage, context) }),
    ...(input.portalName != null && { portalName: input.portalName }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * serializeAws_restJson1UpdateProjectCommand
 */
export const se_UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{projectId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "projectId", () => input.projectId!, "{projectId}", false);
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.projectDescription != null && { projectDescription: input.projectDescription }),
    ...(input.projectName != null && { projectName: input.projectName }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
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
 * deserializeAws_restJson1AssociateAssetsCommand
 */
export const de_AssociateAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateAssetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateAssetsCommandError
 */
const de_AssociateAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AssociateTimeSeriesToAssetPropertyCommand
 */
export const de_AssociateTimeSeriesToAssetPropertyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTimeSeriesToAssetPropertyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateTimeSeriesToAssetPropertyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateTimeSeriesToAssetPropertyCommandError
 */
const de_AssociateTimeSeriesToAssetPropertyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTimeSeriesToAssetPropertyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchAssociateProjectAssetsCommand
 */
export const de_BatchAssociateProjectAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateProjectAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchAssociateProjectAssetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = de_BatchAssociateProjectAssetsErrors(data.errors, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchAssociateProjectAssetsCommandError
 */
const de_BatchAssociateProjectAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateProjectAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchDisassociateProjectAssetsCommand
 */
export const de_BatchDisassociateProjectAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateProjectAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDisassociateProjectAssetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = de_BatchDisassociateProjectAssetsErrors(data.errors, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchDisassociateProjectAssetsCommandError
 */
const de_BatchDisassociateProjectAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateProjectAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchGetAssetPropertyAggregatesCommand
 */
export const de_BatchGetAssetPropertyAggregatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAssetPropertyAggregatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetAssetPropertyAggregatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = de_BatchGetAssetPropertyAggregatesErrorEntries(data.errorEntries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.skippedEntries != null) {
    contents.skippedEntries = de_BatchGetAssetPropertyAggregatesSkippedEntries(data.skippedEntries, context);
  }
  if (data.successEntries != null) {
    contents.successEntries = de_BatchGetAssetPropertyAggregatesSuccessEntries(data.successEntries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyAggregatesCommandError
 */
const de_BatchGetAssetPropertyAggregatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAssetPropertyAggregatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotsitewise#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchGetAssetPropertyValueCommand
 */
export const de_BatchGetAssetPropertyValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAssetPropertyValueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetAssetPropertyValueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = de_BatchGetAssetPropertyValueErrorEntries(data.errorEntries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.skippedEntries != null) {
    contents.skippedEntries = de_BatchGetAssetPropertyValueSkippedEntries(data.skippedEntries, context);
  }
  if (data.successEntries != null) {
    contents.successEntries = de_BatchGetAssetPropertyValueSuccessEntries(data.successEntries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueCommandError
 */
const de_BatchGetAssetPropertyValueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAssetPropertyValueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotsitewise#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchGetAssetPropertyValueHistoryCommand
 */
export const de_BatchGetAssetPropertyValueHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAssetPropertyValueHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetAssetPropertyValueHistoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = de_BatchGetAssetPropertyValueHistoryErrorEntries(data.errorEntries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.skippedEntries != null) {
    contents.skippedEntries = de_BatchGetAssetPropertyValueHistorySkippedEntries(data.skippedEntries, context);
  }
  if (data.successEntries != null) {
    contents.successEntries = de_BatchGetAssetPropertyValueHistorySuccessEntries(data.successEntries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueHistoryCommandError
 */
const de_BatchGetAssetPropertyValueHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAssetPropertyValueHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotsitewise#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchPutAssetPropertyValueCommand
 */
export const de_BatchPutAssetPropertyValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutAssetPropertyValueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchPutAssetPropertyValueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = de_BatchPutAssetPropertyErrorEntries(data.errorEntries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchPutAssetPropertyValueCommandError
 */
const de_BatchPutAssetPropertyValueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutAssetPropertyValueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotsitewise#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateAccessPolicyCommand
 */
export const de_CreateAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessPolicyArn != null) {
    contents.accessPolicyArn = __expectString(data.accessPolicyArn);
  }
  if (data.accessPolicyId != null) {
    contents.accessPolicyId = __expectString(data.accessPolicyId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAccessPolicyCommandError
 */
const de_CreateAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateAssetCommand
 */
export const de_CreateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CreateAssetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetArn != null) {
    contents.assetArn = __expectString(data.assetArn);
  }
  if (data.assetId != null) {
    contents.assetId = __expectString(data.assetId);
  }
  if (data.assetStatus != null) {
    contents.assetStatus = de_AssetStatus(data.assetStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssetCommandError
 */
const de_CreateAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateAssetModelCommand
 */
export const de_CreateAssetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CreateAssetModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetModelArn != null) {
    contents.assetModelArn = __expectString(data.assetModelArn);
  }
  if (data.assetModelId != null) {
    contents.assetModelId = __expectString(data.assetModelId);
  }
  if (data.assetModelStatus != null) {
    contents.assetModelStatus = de_AssetModelStatus(data.assetModelStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssetModelCommandError
 */
const de_CreateAssetModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateBulkImportJobCommand
 */
export const de_CreateBulkImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBulkImportJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CreateBulkImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobId != null) {
    contents.jobId = __expectString(data.jobId);
  }
  if (data.jobName != null) {
    contents.jobName = __expectString(data.jobName);
  }
  if (data.jobStatus != null) {
    contents.jobStatus = __expectString(data.jobStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBulkImportJobCommandError
 */
const de_CreateBulkImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBulkImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDashboardCommand
 */
export const de_CreateDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDashboardCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateDashboardCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dashboardArn != null) {
    contents.dashboardArn = __expectString(data.dashboardArn);
  }
  if (data.dashboardId != null) {
    contents.dashboardId = __expectString(data.dashboardId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDashboardCommandError
 */
const de_CreateDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateGatewayCommand
 */
export const de_CreateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.gatewayArn != null) {
    contents.gatewayArn = __expectString(data.gatewayArn);
  }
  if (data.gatewayId != null) {
    contents.gatewayId = __expectString(data.gatewayId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateGatewayCommandError
 */
const de_CreateGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreatePortalCommand
 */
export const de_CreatePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortalCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CreatePortalCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.portalArn != null) {
    contents.portalArn = __expectString(data.portalArn);
  }
  if (data.portalId != null) {
    contents.portalId = __expectString(data.portalId);
  }
  if (data.portalStartUrl != null) {
    contents.portalStartUrl = __expectString(data.portalStartUrl);
  }
  if (data.portalStatus != null) {
    contents.portalStatus = de_PortalStatus(data.portalStatus, context);
  }
  if (data.ssoApplicationId != null) {
    contents.ssoApplicationId = __expectString(data.ssoApplicationId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePortalCommandError
 */
const de_CreatePortalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateProjectCommand
 */
export const de_CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.projectArn != null) {
    contents.projectArn = __expectString(data.projectArn);
  }
  if (data.projectId != null) {
    contents.projectId = __expectString(data.projectId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateProjectCommandError
 */
const de_CreateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAccessPolicyCommand
 */
export const de_DeleteAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccessPolicyCommandError
 */
const de_DeleteAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAssetCommand
 */
export const de_DeleteAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteAssetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetStatus != null) {
    contents.assetStatus = de_AssetStatus(data.assetStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssetCommandError
 */
const de_DeleteAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAssetModelCommand
 */
export const de_DeleteAssetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteAssetModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetModelStatus != null) {
    contents.assetModelStatus = de_AssetModelStatus(data.assetModelStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssetModelCommandError
 */
const de_DeleteAssetModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDashboardCommand
 */
export const de_DeleteDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDashboardCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDashboardCommandError
 */
const de_DeleteDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteGatewayCommand
 */
export const de_DeleteGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGatewayCommandError
 */
const de_DeleteGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeletePortalCommand
 */
export const de_DeletePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortalCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeletePortalCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.portalStatus != null) {
    contents.portalStatus = de_PortalStatus(data.portalStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeletePortalCommandError
 */
const de_DeletePortalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteProjectCommand
 */
export const de_DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProjectCommandError
 */
const de_DeleteProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteTimeSeriesCommand
 */
export const de_DeleteTimeSeriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTimeSeriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteTimeSeriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTimeSeriesCommandError
 */
const de_DeleteTimeSeriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTimeSeriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAccessPolicyCommand
 */
export const de_DescribeAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessPolicyArn != null) {
    contents.accessPolicyArn = __expectString(data.accessPolicyArn);
  }
  if (data.accessPolicyCreationDate != null) {
    contents.accessPolicyCreationDate = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.accessPolicyCreationDate))
    );
  }
  if (data.accessPolicyId != null) {
    contents.accessPolicyId = __expectString(data.accessPolicyId);
  }
  if (data.accessPolicyIdentity != null) {
    contents.accessPolicyIdentity = de_Identity(data.accessPolicyIdentity, context);
  }
  if (data.accessPolicyLastUpdateDate != null) {
    contents.accessPolicyLastUpdateDate = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.accessPolicyLastUpdateDate))
    );
  }
  if (data.accessPolicyPermission != null) {
    contents.accessPolicyPermission = __expectString(data.accessPolicyPermission);
  }
  if (data.accessPolicyResource != null) {
    contents.accessPolicyResource = de_Resource(data.accessPolicyResource, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAccessPolicyCommandError
 */
const de_DescribeAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAssetCommand
 */
export const de_DescribeAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAssetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetArn != null) {
    contents.assetArn = __expectString(data.assetArn);
  }
  if (data.assetCompositeModels != null) {
    contents.assetCompositeModels = de_AssetCompositeModels(data.assetCompositeModels, context);
  }
  if (data.assetCreationDate != null) {
    contents.assetCreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.assetCreationDate)));
  }
  if (data.assetDescription != null) {
    contents.assetDescription = __expectString(data.assetDescription);
  }
  if (data.assetHierarchies != null) {
    contents.assetHierarchies = de_AssetHierarchies(data.assetHierarchies, context);
  }
  if (data.assetId != null) {
    contents.assetId = __expectString(data.assetId);
  }
  if (data.assetLastUpdateDate != null) {
    contents.assetLastUpdateDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.assetLastUpdateDate)));
  }
  if (data.assetModelId != null) {
    contents.assetModelId = __expectString(data.assetModelId);
  }
  if (data.assetName != null) {
    contents.assetName = __expectString(data.assetName);
  }
  if (data.assetProperties != null) {
    contents.assetProperties = de_AssetProperties(data.assetProperties, context);
  }
  if (data.assetStatus != null) {
    contents.assetStatus = de_AssetStatus(data.assetStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAssetCommandError
 */
const de_DescribeAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAssetModelCommand
 */
export const de_DescribeAssetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAssetModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetModelArn != null) {
    contents.assetModelArn = __expectString(data.assetModelArn);
  }
  if (data.assetModelCompositeModels != null) {
    contents.assetModelCompositeModels = de_AssetModelCompositeModels(data.assetModelCompositeModels, context);
  }
  if (data.assetModelCreationDate != null) {
    contents.assetModelCreationDate = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.assetModelCreationDate))
    );
  }
  if (data.assetModelDescription != null) {
    contents.assetModelDescription = __expectString(data.assetModelDescription);
  }
  if (data.assetModelHierarchies != null) {
    contents.assetModelHierarchies = de_AssetModelHierarchies(data.assetModelHierarchies, context);
  }
  if (data.assetModelId != null) {
    contents.assetModelId = __expectString(data.assetModelId);
  }
  if (data.assetModelLastUpdateDate != null) {
    contents.assetModelLastUpdateDate = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.assetModelLastUpdateDate))
    );
  }
  if (data.assetModelName != null) {
    contents.assetModelName = __expectString(data.assetModelName);
  }
  if (data.assetModelProperties != null) {
    contents.assetModelProperties = de_AssetModelProperties(data.assetModelProperties, context);
  }
  if (data.assetModelStatus != null) {
    contents.assetModelStatus = de_AssetModelStatus(data.assetModelStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAssetModelCommandError
 */
const de_DescribeAssetModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAssetPropertyCommand
 */
export const de_DescribeAssetPropertyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetPropertyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAssetPropertyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetId != null) {
    contents.assetId = __expectString(data.assetId);
  }
  if (data.assetModelId != null) {
    contents.assetModelId = __expectString(data.assetModelId);
  }
  if (data.assetName != null) {
    contents.assetName = __expectString(data.assetName);
  }
  if (data.assetProperty != null) {
    contents.assetProperty = de_Property(data.assetProperty, context);
  }
  if (data.compositeModel != null) {
    contents.compositeModel = de_CompositeModelProperty(data.compositeModel, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAssetPropertyCommandError
 */
const de_DescribeAssetPropertyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetPropertyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeBulkImportJobCommand
 */
export const de_DescribeBulkImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBulkImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeBulkImportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorReportLocation != null) {
    contents.errorReportLocation = de_ErrorReportLocation(data.errorReportLocation, context);
  }
  if (data.files != null) {
    contents.files = de_Files(data.files, context);
  }
  if (data.jobConfiguration != null) {
    contents.jobConfiguration = de_JobConfiguration(data.jobConfiguration, context);
  }
  if (data.jobCreationDate != null) {
    contents.jobCreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.jobCreationDate)));
  }
  if (data.jobId != null) {
    contents.jobId = __expectString(data.jobId);
  }
  if (data.jobLastUpdateDate != null) {
    contents.jobLastUpdateDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.jobLastUpdateDate)));
  }
  if (data.jobName != null) {
    contents.jobName = __expectString(data.jobName);
  }
  if (data.jobRoleArn != null) {
    contents.jobRoleArn = __expectString(data.jobRoleArn);
  }
  if (data.jobStatus != null) {
    contents.jobStatus = __expectString(data.jobStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBulkImportJobCommandError
 */
const de_DescribeBulkImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBulkImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeDashboardCommand
 */
export const de_DescribeDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDashboardCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dashboardArn != null) {
    contents.dashboardArn = __expectString(data.dashboardArn);
  }
  if (data.dashboardCreationDate != null) {
    contents.dashboardCreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.dashboardCreationDate)));
  }
  if (data.dashboardDefinition != null) {
    contents.dashboardDefinition = __expectString(data.dashboardDefinition);
  }
  if (data.dashboardDescription != null) {
    contents.dashboardDescription = __expectString(data.dashboardDescription);
  }
  if (data.dashboardId != null) {
    contents.dashboardId = __expectString(data.dashboardId);
  }
  if (data.dashboardLastUpdateDate != null) {
    contents.dashboardLastUpdateDate = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.dashboardLastUpdateDate))
    );
  }
  if (data.dashboardName != null) {
    contents.dashboardName = __expectString(data.dashboardName);
  }
  if (data.projectId != null) {
    contents.projectId = __expectString(data.projectId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDashboardCommandError
 */
const de_DescribeDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand
 */
export const de_DescribeDefaultEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultEncryptionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDefaultEncryptionConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configurationStatus != null) {
    contents.configurationStatus = de_ConfigurationStatus(data.configurationStatus, context);
  }
  if (data.encryptionType != null) {
    contents.encryptionType = __expectString(data.encryptionType);
  }
  if (data.kmsKeyArn != null) {
    contents.kmsKeyArn = __expectString(data.kmsKeyArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommandError
 */
const de_DescribeDefaultEncryptionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultEncryptionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeGatewayCommand
 */
export const de_DescribeGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationDate != null) {
    contents.creationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDate)));
  }
  if (data.gatewayArn != null) {
    contents.gatewayArn = __expectString(data.gatewayArn);
  }
  if (data.gatewayCapabilitySummaries != null) {
    contents.gatewayCapabilitySummaries = de_GatewayCapabilitySummaries(data.gatewayCapabilitySummaries, context);
  }
  if (data.gatewayId != null) {
    contents.gatewayId = __expectString(data.gatewayId);
  }
  if (data.gatewayName != null) {
    contents.gatewayName = __expectString(data.gatewayName);
  }
  if (data.gatewayPlatform != null) {
    contents.gatewayPlatform = de_GatewayPlatform(data.gatewayPlatform, context);
  }
  if (data.lastUpdateDate != null) {
    contents.lastUpdateDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdateDate)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeGatewayCommandError
 */
const de_DescribeGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand
 */
export const de_DescribeGatewayCapabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayCapabilityConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeGatewayCapabilityConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.capabilityConfiguration != null) {
    contents.capabilityConfiguration = __expectString(data.capabilityConfiguration);
  }
  if (data.capabilityNamespace != null) {
    contents.capabilityNamespace = __expectString(data.capabilityNamespace);
  }
  if (data.capabilitySyncStatus != null) {
    contents.capabilitySyncStatus = __expectString(data.capabilitySyncStatus);
  }
  if (data.gatewayId != null) {
    contents.gatewayId = __expectString(data.gatewayId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommandError
 */
const de_DescribeGatewayCapabilityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayCapabilityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeLoggingOptionsCommand
 */
export const de_DescribeLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeLoggingOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.loggingOptions != null) {
    contents.loggingOptions = de_LoggingOptions(data.loggingOptions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeLoggingOptionsCommandError
 */
const de_DescribeLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribePortalCommand
 */
export const de_DescribePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribePortalCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarms != null) {
    contents.alarms = de_Alarms(data.alarms, context);
  }
  if (data.notificationSenderEmail != null) {
    contents.notificationSenderEmail = __expectString(data.notificationSenderEmail);
  }
  if (data.portalArn != null) {
    contents.portalArn = __expectString(data.portalArn);
  }
  if (data.portalAuthMode != null) {
    contents.portalAuthMode = __expectString(data.portalAuthMode);
  }
  if (data.portalClientId != null) {
    contents.portalClientId = __expectString(data.portalClientId);
  }
  if (data.portalContactEmail != null) {
    contents.portalContactEmail = __expectString(data.portalContactEmail);
  }
  if (data.portalCreationDate != null) {
    contents.portalCreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.portalCreationDate)));
  }
  if (data.portalDescription != null) {
    contents.portalDescription = __expectString(data.portalDescription);
  }
  if (data.portalId != null) {
    contents.portalId = __expectString(data.portalId);
  }
  if (data.portalLastUpdateDate != null) {
    contents.portalLastUpdateDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.portalLastUpdateDate)));
  }
  if (data.portalLogoImageLocation != null) {
    contents.portalLogoImageLocation = de_ImageLocation(data.portalLogoImageLocation, context);
  }
  if (data.portalName != null) {
    contents.portalName = __expectString(data.portalName);
  }
  if (data.portalStartUrl != null) {
    contents.portalStartUrl = __expectString(data.portalStartUrl);
  }
  if (data.portalStatus != null) {
    contents.portalStatus = de_PortalStatus(data.portalStatus, context);
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribePortalCommandError
 */
const de_DescribePortalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePortalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeProjectCommand
 */
export const de_DescribeProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.portalId != null) {
    contents.portalId = __expectString(data.portalId);
  }
  if (data.projectArn != null) {
    contents.projectArn = __expectString(data.projectArn);
  }
  if (data.projectCreationDate != null) {
    contents.projectCreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.projectCreationDate)));
  }
  if (data.projectDescription != null) {
    contents.projectDescription = __expectString(data.projectDescription);
  }
  if (data.projectId != null) {
    contents.projectId = __expectString(data.projectId);
  }
  if (data.projectLastUpdateDate != null) {
    contents.projectLastUpdateDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.projectLastUpdateDate)));
  }
  if (data.projectName != null) {
    contents.projectName = __expectString(data.projectName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeProjectCommandError
 */
const de_DescribeProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeStorageConfigurationCommand
 */
export const de_DescribeStorageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeStorageConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configurationStatus != null) {
    contents.configurationStatus = de_ConfigurationStatus(data.configurationStatus, context);
  }
  if (data.disassociatedDataStorage != null) {
    contents.disassociatedDataStorage = __expectString(data.disassociatedDataStorage);
  }
  if (data.lastUpdateDate != null) {
    contents.lastUpdateDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdateDate)));
  }
  if (data.multiLayerStorage != null) {
    contents.multiLayerStorage = de_MultiLayerStorage(data.multiLayerStorage, context);
  }
  if (data.retentionPeriod != null) {
    contents.retentionPeriod = de_RetentionPeriod(data.retentionPeriod, context);
  }
  if (data.storageType != null) {
    contents.storageType = __expectString(data.storageType);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeStorageConfigurationCommandError
 */
const de_DescribeStorageConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeTimeSeriesCommand
 */
export const de_DescribeTimeSeriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeSeriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeTimeSeriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alias != null) {
    contents.alias = __expectString(data.alias);
  }
  if (data.assetId != null) {
    contents.assetId = __expectString(data.assetId);
  }
  if (data.dataType != null) {
    contents.dataType = __expectString(data.dataType);
  }
  if (data.dataTypeSpec != null) {
    contents.dataTypeSpec = __expectString(data.dataTypeSpec);
  }
  if (data.propertyId != null) {
    contents.propertyId = __expectString(data.propertyId);
  }
  if (data.timeSeriesArn != null) {
    contents.timeSeriesArn = __expectString(data.timeSeriesArn);
  }
  if (data.timeSeriesCreationDate != null) {
    contents.timeSeriesCreationDate = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.timeSeriesCreationDate))
    );
  }
  if (data.timeSeriesId != null) {
    contents.timeSeriesId = __expectString(data.timeSeriesId);
  }
  if (data.timeSeriesLastUpdateDate != null) {
    contents.timeSeriesLastUpdateDate = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.timeSeriesLastUpdateDate))
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTimeSeriesCommandError
 */
const de_DescribeTimeSeriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeSeriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateAssetsCommand
 */
export const de_DisassociateAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateAssetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateAssetsCommandError
 */
const de_DisassociateAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisassociateTimeSeriesFromAssetPropertyCommand
 */
export const de_DisassociateTimeSeriesFromAssetPropertyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTimeSeriesFromAssetPropertyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateTimeSeriesFromAssetPropertyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateTimeSeriesFromAssetPropertyCommandError
 */
const de_DisassociateTimeSeriesFromAssetPropertyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTimeSeriesFromAssetPropertyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetAssetPropertyAggregatesCommand
 */
export const de_GetAssetPropertyAggregatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyAggregatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAssetPropertyAggregatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.aggregatedValues != null) {
    contents.aggregatedValues = de_AggregatedValues(data.aggregatedValues, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAssetPropertyAggregatesCommandError
 */
const de_GetAssetPropertyAggregatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyAggregatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotsitewise#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetAssetPropertyValueCommand
 */
export const de_GetAssetPropertyValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyValueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAssetPropertyValueCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.propertyValue != null) {
    contents.propertyValue = de_AssetPropertyValue(data.propertyValue, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAssetPropertyValueCommandError
 */
const de_GetAssetPropertyValueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyValueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotsitewise#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetAssetPropertyValueHistoryCommand
 */
export const de_GetAssetPropertyValueHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyValueHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAssetPropertyValueHistoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetPropertyValueHistory != null) {
    contents.assetPropertyValueHistory = de_AssetPropertyValueHistory(data.assetPropertyValueHistory, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAssetPropertyValueHistoryCommandError
 */
const de_GetAssetPropertyValueHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyValueHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotsitewise#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand
 */
export const de_GetInterpolatedAssetPropertyValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInterpolatedAssetPropertyValuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetInterpolatedAssetPropertyValuesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.interpolatedAssetPropertyValues != null) {
    contents.interpolatedAssetPropertyValues = de_InterpolatedAssetPropertyValues(
      data.interpolatedAssetPropertyValues,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetInterpolatedAssetPropertyValuesCommandError
 */
const de_GetInterpolatedAssetPropertyValuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInterpolatedAssetPropertyValuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotsitewise#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAccessPoliciesCommand
 */
export const de_ListAccessPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAccessPoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessPolicySummaries != null) {
    contents.accessPolicySummaries = de_AccessPolicySummaries(data.accessPolicySummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAccessPoliciesCommandError
 */
const de_ListAccessPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAssetModelPropertiesCommand
 */
export const de_ListAssetModelPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetModelPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssetModelPropertiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetModelPropertySummaries != null) {
    contents.assetModelPropertySummaries = de_AssetModelPropertySummaries(data.assetModelPropertySummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetModelPropertiesCommandError
 */
const de_ListAssetModelPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetModelPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAssetModelsCommand
 */
export const de_ListAssetModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssetModelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetModelSummaries != null) {
    contents.assetModelSummaries = de_AssetModelSummaries(data.assetModelSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetModelsCommandError
 */
const de_ListAssetModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAssetPropertiesCommand
 */
export const de_ListAssetPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssetPropertiesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetPropertySummaries != null) {
    contents.assetPropertySummaries = de_AssetPropertySummaries(data.assetPropertySummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetPropertiesCommandError
 */
const de_ListAssetPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAssetRelationshipsCommand
 */
export const de_ListAssetRelationshipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetRelationshipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssetRelationshipsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetRelationshipSummaries != null) {
    contents.assetRelationshipSummaries = de_AssetRelationshipSummaries(data.assetRelationshipSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetRelationshipsCommandError
 */
const de_ListAssetRelationshipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetRelationshipsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAssetsCommand
 */
export const de_ListAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetSummaries != null) {
    contents.assetSummaries = de_AssetSummaries(data.assetSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetsCommandError
 */
const de_ListAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAssociatedAssetsCommand
 */
export const de_ListAssociatedAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAssociatedAssetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetSummaries != null) {
    contents.assetSummaries = de_AssociatedAssetsSummaries(data.assetSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAssociatedAssetsCommandError
 */
const de_ListAssociatedAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListBulkImportJobsCommand
 */
export const de_ListBulkImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBulkImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBulkImportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobSummaries != null) {
    contents.jobSummaries = de_JobSummaries(data.jobSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBulkImportJobsCommandError
 */
const de_ListBulkImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBulkImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDashboardsCommand
 */
export const de_ListDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDashboardsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dashboardSummaries != null) {
    contents.dashboardSummaries = de_DashboardSummaries(data.dashboardSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDashboardsCommandError
 */
const de_ListDashboardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListGatewaysCommand
 */
export const de_ListGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGatewaysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.gatewaySummaries != null) {
    contents.gatewaySummaries = de_GatewaySummaries(data.gatewaySummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListGatewaysCommandError
 */
const de_ListGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListPortalsCommand
 */
export const de_ListPortalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPortalsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.portalSummaries != null) {
    contents.portalSummaries = de_PortalSummaries(data.portalSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPortalsCommandError
 */
const de_ListPortalsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortalsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListProjectAssetsCommand
 */
export const de_ListProjectAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProjectAssetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetIds != null) {
    contents.assetIds = de_AssetIDs(data.assetIds, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListProjectAssetsCommandError
 */
const de_ListProjectAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListProjectsCommand
 */
export const de_ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.projectSummaries != null) {
    contents.projectSummaries = de_ProjectSummaries(data.projectSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListProjectsCommandError
 */
const de_ListProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
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
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.iotsitewise#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListTimeSeriesCommand
 */
export const de_ListTimeSeriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTimeSeriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTimeSeriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TimeSeriesSummaries != null) {
    contents.TimeSeriesSummaries = de_TimeSeriesSummaries(data.TimeSeriesSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTimeSeriesCommandError
 */
const de_ListTimeSeriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTimeSeriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutDefaultEncryptionConfigurationCommand
 */
export const de_PutDefaultEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDefaultEncryptionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutDefaultEncryptionConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configurationStatus != null) {
    contents.configurationStatus = de_ConfigurationStatus(data.configurationStatus, context);
  }
  if (data.encryptionType != null) {
    contents.encryptionType = __expectString(data.encryptionType);
  }
  if (data.kmsKeyArn != null) {
    contents.kmsKeyArn = __expectString(data.kmsKeyArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutDefaultEncryptionConfigurationCommandError
 */
const de_PutDefaultEncryptionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDefaultEncryptionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutLoggingOptionsCommand
 */
export const de_PutLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutLoggingOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutLoggingOptionsCommandError
 */
const de_PutLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutStorageConfigurationCommand
 */
export const de_PutStorageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutStorageConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configurationStatus != null) {
    contents.configurationStatus = de_ConfigurationStatus(data.configurationStatus, context);
  }
  if (data.disassociatedDataStorage != null) {
    contents.disassociatedDataStorage = __expectString(data.disassociatedDataStorage);
  }
  if (data.multiLayerStorage != null) {
    contents.multiLayerStorage = de_MultiLayerStorage(data.multiLayerStorage, context);
  }
  if (data.retentionPeriod != null) {
    contents.retentionPeriod = de_RetentionPeriod(data.retentionPeriod, context);
  }
  if (data.storageType != null) {
    contents.storageType = __expectString(data.storageType);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutStorageConfigurationCommandError
 */
const de_PutStorageConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.iotsitewise#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.iotsitewise#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.iotsitewise#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateAccessPolicyCommand
 */
export const de_UpdateAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAccessPolicyCommandError
 */
const de_UpdateAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateAssetCommand
 */
export const de_UpdateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateAssetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetStatus != null) {
    contents.assetStatus = de_AssetStatus(data.assetStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssetCommandError
 */
const de_UpdateAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateAssetModelCommand
 */
export const de_UpdateAssetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateAssetModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.assetModelStatus != null) {
    contents.assetModelStatus = de_AssetModelStatus(data.assetModelStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssetModelCommandError
 */
const de_UpdateAssetModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateAssetPropertyCommand
 */
export const de_UpdateAssetPropertyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetPropertyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAssetPropertyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssetPropertyCommandError
 */
const de_UpdateAssetPropertyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetPropertyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateDashboardCommand
 */
export const de_UpdateDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDashboardCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDashboardCommandError
 */
const de_UpdateDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateGatewayCommand
 */
export const de_UpdateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGatewayCommandError
 */
const de_UpdateGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand
 */
export const de_UpdateGatewayCapabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCapabilityConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_UpdateGatewayCapabilityConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.capabilityNamespace != null) {
    contents.capabilityNamespace = __expectString(data.capabilityNamespace);
  }
  if (data.capabilitySyncStatus != null) {
    contents.capabilitySyncStatus = __expectString(data.capabilitySyncStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommandError
 */
const de_UpdateGatewayCapabilityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCapabilityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdatePortalCommand
 */
export const de_UpdatePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortalCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdatePortalCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.portalStatus != null) {
    contents.portalStatus = de_PortalStatus(data.portalStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePortalCommandError
 */
const de_UpdatePortalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      throw await de_ConflictingOperationExceptionRes(parsedOutput, context);
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateProjectCommand
 */
export const de_UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProjectCommandError
 */
const de_UpdateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ConflictingOperationExceptionRes
 */
const de_ConflictingOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictingOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceArn != null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  const exception = new ConflictingOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceArn != null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  const exception = new ResourceAlreadyExistsException({
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
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceUnavailableException({
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
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceName != null) {
    contents.resourceName = __expectString(data.resourceName);
  }
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AggregateTypes
 */
const se_AggregateTypes = (input: (AggregateType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Alarms
 */
const se_Alarms = (input: Alarms, context: __SerdeContext): any => {
  return {
    ...(input.alarmRoleArn != null && { alarmRoleArn: input.alarmRoleArn }),
    ...(input.notificationLambdaArn != null && { notificationLambdaArn: input.notificationLambdaArn }),
  };
};

/**
 * serializeAws_restJson1AssetModelCompositeModel
 */
const se_AssetModelCompositeModel = (input: AssetModelCompositeModel, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
    ...(input.properties != null && { properties: se_AssetModelProperties(input.properties, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1AssetModelCompositeModelDefinition
 */
const se_AssetModelCompositeModelDefinition = (
  input: AssetModelCompositeModelDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.properties != null && { properties: se_AssetModelPropertyDefinitions(input.properties, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1AssetModelCompositeModelDefinitions
 */
const se_AssetModelCompositeModelDefinitions = (
  input: AssetModelCompositeModelDefinition[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssetModelCompositeModelDefinition(entry, context);
    });
};

/**
 * serializeAws_restJson1AssetModelCompositeModels
 */
const se_AssetModelCompositeModels = (input: AssetModelCompositeModel[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssetModelCompositeModel(entry, context);
    });
};

/**
 * serializeAws_restJson1AssetModelHierarchies
 */
const se_AssetModelHierarchies = (input: AssetModelHierarchy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssetModelHierarchy(entry, context);
    });
};

/**
 * serializeAws_restJson1AssetModelHierarchy
 */
const se_AssetModelHierarchy = (input: AssetModelHierarchy, context: __SerdeContext): any => {
  return {
    ...(input.childAssetModelId != null && { childAssetModelId: input.childAssetModelId }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1AssetModelHierarchyDefinition
 */
const se_AssetModelHierarchyDefinition = (input: AssetModelHierarchyDefinition, context: __SerdeContext): any => {
  return {
    ...(input.childAssetModelId != null && { childAssetModelId: input.childAssetModelId }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1AssetModelHierarchyDefinitions
 */
const se_AssetModelHierarchyDefinitions = (input: AssetModelHierarchyDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssetModelHierarchyDefinition(entry, context);
    });
};

/**
 * serializeAws_restJson1AssetModelProperties
 */
const se_AssetModelProperties = (input: AssetModelProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssetModelProperty(entry, context);
    });
};

/**
 * serializeAws_restJson1AssetModelProperty
 */
const se_AssetModelProperty = (input: AssetModelProperty, context: __SerdeContext): any => {
  return {
    ...(input.dataType != null && { dataType: input.dataType }),
    ...(input.dataTypeSpec != null && { dataTypeSpec: input.dataTypeSpec }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: se_PropertyType(input.type, context) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

/**
 * serializeAws_restJson1AssetModelPropertyDefinition
 */
const se_AssetModelPropertyDefinition = (input: AssetModelPropertyDefinition, context: __SerdeContext): any => {
  return {
    ...(input.dataType != null && { dataType: input.dataType }),
    ...(input.dataTypeSpec != null && { dataTypeSpec: input.dataTypeSpec }),
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: se_PropertyType(input.type, context) }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

/**
 * serializeAws_restJson1AssetModelPropertyDefinitions
 */
const se_AssetModelPropertyDefinitions = (input: AssetModelPropertyDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssetModelPropertyDefinition(entry, context);
    });
};

/**
 * serializeAws_restJson1AssetPropertyValue
 */
const se_AssetPropertyValue = (input: AssetPropertyValue, context: __SerdeContext): any => {
  return {
    ...(input.quality != null && { quality: input.quality }),
    ...(input.timestamp != null && { timestamp: se_TimeInNanos(input.timestamp, context) }),
    ...(input.value != null && { value: se_Variant(input.value, context) }),
  };
};

/**
 * serializeAws_restJson1AssetPropertyValues
 */
const se_AssetPropertyValues = (input: AssetPropertyValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssetPropertyValue(entry, context);
    });
};

/**
 * serializeAws_restJson1Attribute
 */
const se_Attribute = (input: Attribute, context: __SerdeContext): any => {
  return {
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
  };
};

/**
 * serializeAws_restJson1BatchGetAssetPropertyAggregatesEntries
 */
const se_BatchGetAssetPropertyAggregatesEntries = (
  input: BatchGetAssetPropertyAggregatesEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchGetAssetPropertyAggregatesEntry(entry, context);
    });
};

/**
 * serializeAws_restJson1BatchGetAssetPropertyAggregatesEntry
 */
const se_BatchGetAssetPropertyAggregatesEntry = (
  input: BatchGetAssetPropertyAggregatesEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.aggregateTypes != null && { aggregateTypes: se_AggregateTypes(input.aggregateTypes, context) }),
    ...(input.assetId != null && { assetId: input.assetId }),
    ...(input.endDate != null && { endDate: Math.round(input.endDate.getTime() / 1000) }),
    ...(input.entryId != null && { entryId: input.entryId }),
    ...(input.propertyAlias != null && { propertyAlias: input.propertyAlias }),
    ...(input.propertyId != null && { propertyId: input.propertyId }),
    ...(input.qualities != null && { qualities: se_Qualities(input.qualities, context) }),
    ...(input.resolution != null && { resolution: input.resolution }),
    ...(input.startDate != null && { startDate: Math.round(input.startDate.getTime() / 1000) }),
    ...(input.timeOrdering != null && { timeOrdering: input.timeOrdering }),
  };
};

/**
 * serializeAws_restJson1BatchGetAssetPropertyValueEntries
 */
const se_BatchGetAssetPropertyValueEntries = (
  input: BatchGetAssetPropertyValueEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchGetAssetPropertyValueEntry(entry, context);
    });
};

/**
 * serializeAws_restJson1BatchGetAssetPropertyValueEntry
 */
const se_BatchGetAssetPropertyValueEntry = (input: BatchGetAssetPropertyValueEntry, context: __SerdeContext): any => {
  return {
    ...(input.assetId != null && { assetId: input.assetId }),
    ...(input.entryId != null && { entryId: input.entryId }),
    ...(input.propertyAlias != null && { propertyAlias: input.propertyAlias }),
    ...(input.propertyId != null && { propertyId: input.propertyId }),
  };
};

/**
 * serializeAws_restJson1BatchGetAssetPropertyValueHistoryEntries
 */
const se_BatchGetAssetPropertyValueHistoryEntries = (
  input: BatchGetAssetPropertyValueHistoryEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchGetAssetPropertyValueHistoryEntry(entry, context);
    });
};

/**
 * serializeAws_restJson1BatchGetAssetPropertyValueHistoryEntry
 */
const se_BatchGetAssetPropertyValueHistoryEntry = (
  input: BatchGetAssetPropertyValueHistoryEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.assetId != null && { assetId: input.assetId }),
    ...(input.endDate != null && { endDate: Math.round(input.endDate.getTime() / 1000) }),
    ...(input.entryId != null && { entryId: input.entryId }),
    ...(input.propertyAlias != null && { propertyAlias: input.propertyAlias }),
    ...(input.propertyId != null && { propertyId: input.propertyId }),
    ...(input.qualities != null && { qualities: se_Qualities(input.qualities, context) }),
    ...(input.startDate != null && { startDate: Math.round(input.startDate.getTime() / 1000) }),
    ...(input.timeOrdering != null && { timeOrdering: input.timeOrdering }),
  };
};

/**
 * serializeAws_restJson1ColumnNames
 */
const se_ColumnNames = (input: (ColumnName | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Csv
 */
const se_Csv = (input: Csv, context: __SerdeContext): any => {
  return {
    ...(input.columnNames != null && { columnNames: se_ColumnNames(input.columnNames, context) }),
  };
};

/**
 * serializeAws_restJson1CustomerManagedS3Storage
 */
const se_CustomerManagedS3Storage = (input: CustomerManagedS3Storage, context: __SerdeContext): any => {
  return {
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.s3ResourceArn != null && { s3ResourceArn: input.s3ResourceArn }),
  };
};

/**
 * serializeAws_restJson1ErrorReportLocation
 */
const se_ErrorReportLocation = (input: ErrorReportLocation, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

/**
 * serializeAws_restJson1ExpressionVariable
 */
const se_ExpressionVariable = (input: ExpressionVariable, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: se_VariableValue(input.value, context) }),
  };
};

/**
 * serializeAws_restJson1ExpressionVariables
 */
const se_ExpressionVariables = (input: ExpressionVariable[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ExpressionVariable(entry, context);
    });
};

/**
 * serializeAws_restJson1File
 */
const se_File = (input: File, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.key != null && { key: input.key }),
    ...(input.versionId != null && { versionId: input.versionId }),
  };
};

/**
 * serializeAws_restJson1FileFormat
 */
const se_FileFormat = (input: FileFormat, context: __SerdeContext): any => {
  return {
    ...(input.csv != null && { csv: se_Csv(input.csv, context) }),
  };
};

/**
 * serializeAws_restJson1Files
 */
const se_Files = (input: File[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_File(entry, context);
    });
};

/**
 * serializeAws_restJson1ForwardingConfig
 */
const se_ForwardingConfig = (input: ForwardingConfig, context: __SerdeContext): any => {
  return {
    ...(input.state != null && { state: input.state }),
  };
};

/**
 * serializeAws_restJson1GatewayPlatform
 */
const se_GatewayPlatform = (input: GatewayPlatform, context: __SerdeContext): any => {
  return {
    ...(input.greengrass != null && { greengrass: se_Greengrass(input.greengrass, context) }),
    ...(input.greengrassV2 != null && { greengrassV2: se_GreengrassV2(input.greengrassV2, context) }),
  };
};

/**
 * serializeAws_restJson1Greengrass
 */
const se_Greengrass = (input: Greengrass, context: __SerdeContext): any => {
  return {
    ...(input.groupArn != null && { groupArn: input.groupArn }),
  };
};

/**
 * serializeAws_restJson1GreengrassV2
 */
const se_GreengrassV2 = (input: GreengrassV2, context: __SerdeContext): any => {
  return {
    ...(input.coreDeviceThingName != null && { coreDeviceThingName: input.coreDeviceThingName }),
  };
};

/**
 * serializeAws_restJson1GroupIdentity
 */
const se_GroupIdentity = (input: GroupIdentity, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_restJson1IAMRoleIdentity
 */
const se_IAMRoleIdentity = (input: IAMRoleIdentity, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_restJson1IAMUserIdentity
 */
const se_IAMUserIdentity = (input: IAMUserIdentity, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_restJson1Identity
 */
const se_Identity = (input: Identity, context: __SerdeContext): any => {
  return {
    ...(input.group != null && { group: se_GroupIdentity(input.group, context) }),
    ...(input.iamRole != null && { iamRole: se_IAMRoleIdentity(input.iamRole, context) }),
    ...(input.iamUser != null && { iamUser: se_IAMUserIdentity(input.iamUser, context) }),
    ...(input.user != null && { user: se_UserIdentity(input.user, context) }),
  };
};

/**
 * serializeAws_restJson1IDs
 */
const se_IDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Image
 */
const se_Image = (input: Image, context: __SerdeContext): any => {
  return {
    ...(input.file != null && { file: se_ImageFile(input.file, context) }),
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_restJson1ImageFile
 */
const se_ImageFile = (input: ImageFile, context: __SerdeContext): any => {
  return {
    ...(input.data != null && { data: context.base64Encoder(input.data) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1JobConfiguration
 */
const se_JobConfiguration = (input: JobConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.fileFormat != null && { fileFormat: se_FileFormat(input.fileFormat, context) }),
  };
};

/**
 * serializeAws_restJson1LoggingOptions
 */
const se_LoggingOptions = (input: LoggingOptions, context: __SerdeContext): any => {
  return {
    ...(input.level != null && { level: input.level }),
  };
};

/**
 * serializeAws_restJson1Measurement
 */
const se_Measurement = (input: Measurement, context: __SerdeContext): any => {
  return {
    ...(input.processingConfig != null && {
      processingConfig: se_MeasurementProcessingConfig(input.processingConfig, context),
    }),
  };
};

/**
 * serializeAws_restJson1MeasurementProcessingConfig
 */
const se_MeasurementProcessingConfig = (input: MeasurementProcessingConfig, context: __SerdeContext): any => {
  return {
    ...(input.forwardingConfig != null && { forwardingConfig: se_ForwardingConfig(input.forwardingConfig, context) }),
  };
};

/**
 * serializeAws_restJson1Metric
 */
const se_Metric = (input: Metric, context: __SerdeContext): any => {
  return {
    ...(input.expression != null && { expression: input.expression }),
    ...(input.processingConfig != null && {
      processingConfig: se_MetricProcessingConfig(input.processingConfig, context),
    }),
    ...(input.variables != null && { variables: se_ExpressionVariables(input.variables, context) }),
    ...(input.window != null && { window: se_MetricWindow(input.window, context) }),
  };
};

/**
 * serializeAws_restJson1MetricProcessingConfig
 */
const se_MetricProcessingConfig = (input: MetricProcessingConfig, context: __SerdeContext): any => {
  return {
    ...(input.computeLocation != null && { computeLocation: input.computeLocation }),
  };
};

/**
 * serializeAws_restJson1MetricWindow
 */
const se_MetricWindow = (input: MetricWindow, context: __SerdeContext): any => {
  return {
    ...(input.tumbling != null && { tumbling: se_TumblingWindow(input.tumbling, context) }),
  };
};

/**
 * serializeAws_restJson1MultiLayerStorage
 */
const se_MultiLayerStorage = (input: MultiLayerStorage, context: __SerdeContext): any => {
  return {
    ...(input.customerManagedS3Storage != null && {
      customerManagedS3Storage: se_CustomerManagedS3Storage(input.customerManagedS3Storage, context),
    }),
  };
};

/**
 * serializeAws_restJson1PortalResource
 */
const se_PortalResource = (input: PortalResource, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_restJson1ProjectResource
 */
const se_ProjectResource = (input: ProjectResource, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_restJson1PropertyType
 */
const se_PropertyType = (input: PropertyType, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: se_Attribute(input.attribute, context) }),
    ...(input.measurement != null && { measurement: se_Measurement(input.measurement, context) }),
    ...(input.metric != null && { metric: se_Metric(input.metric, context) }),
    ...(input.transform != null && { transform: se_Transform(input.transform, context) }),
  };
};

/**
 * serializeAws_restJson1PutAssetPropertyValueEntries
 */
const se_PutAssetPropertyValueEntries = (input: PutAssetPropertyValueEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PutAssetPropertyValueEntry(entry, context);
    });
};

/**
 * serializeAws_restJson1PutAssetPropertyValueEntry
 */
const se_PutAssetPropertyValueEntry = (input: PutAssetPropertyValueEntry, context: __SerdeContext): any => {
  return {
    ...(input.assetId != null && { assetId: input.assetId }),
    ...(input.entryId != null && { entryId: input.entryId }),
    ...(input.propertyAlias != null && { propertyAlias: input.propertyAlias }),
    ...(input.propertyId != null && { propertyId: input.propertyId }),
    ...(input.propertyValues != null && { propertyValues: se_AssetPropertyValues(input.propertyValues, context) }),
  };
};

/**
 * serializeAws_restJson1Qualities
 */
const se_Qualities = (input: (Quality | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Resource
 */
const se_Resource = (input: Resource, context: __SerdeContext): any => {
  return {
    ...(input.portal != null && { portal: se_PortalResource(input.portal, context) }),
    ...(input.project != null && { project: se_ProjectResource(input.project, context) }),
  };
};

/**
 * serializeAws_restJson1RetentionPeriod
 */
const se_RetentionPeriod = (input: RetentionPeriod, context: __SerdeContext): any => {
  return {
    ...(input.numberOfDays != null && { numberOfDays: input.numberOfDays }),
    ...(input.unlimited != null && { unlimited: input.unlimited }),
  };
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
 * serializeAws_restJson1TimeInNanos
 */
const se_TimeInNanos = (input: TimeInNanos, context: __SerdeContext): any => {
  return {
    ...(input.offsetInNanos != null && { offsetInNanos: input.offsetInNanos }),
    ...(input.timeInSeconds != null && { timeInSeconds: input.timeInSeconds }),
  };
};

/**
 * serializeAws_restJson1Transform
 */
const se_Transform = (input: Transform, context: __SerdeContext): any => {
  return {
    ...(input.expression != null && { expression: input.expression }),
    ...(input.processingConfig != null && {
      processingConfig: se_TransformProcessingConfig(input.processingConfig, context),
    }),
    ...(input.variables != null && { variables: se_ExpressionVariables(input.variables, context) }),
  };
};

/**
 * serializeAws_restJson1TransformProcessingConfig
 */
const se_TransformProcessingConfig = (input: TransformProcessingConfig, context: __SerdeContext): any => {
  return {
    ...(input.computeLocation != null && { computeLocation: input.computeLocation }),
    ...(input.forwardingConfig != null && { forwardingConfig: se_ForwardingConfig(input.forwardingConfig, context) }),
  };
};

/**
 * serializeAws_restJson1TumblingWindow
 */
const se_TumblingWindow = (input: TumblingWindow, context: __SerdeContext): any => {
  return {
    ...(input.interval != null && { interval: input.interval }),
    ...(input.offset != null && { offset: input.offset }),
  };
};

/**
 * serializeAws_restJson1UserIdentity
 */
const se_UserIdentity = (input: UserIdentity, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_restJson1VariableValue
 */
const se_VariableValue = (input: VariableValue, context: __SerdeContext): any => {
  return {
    ...(input.hierarchyId != null && { hierarchyId: input.hierarchyId }),
    ...(input.propertyId != null && { propertyId: input.propertyId }),
  };
};

/**
 * serializeAws_restJson1Variant
 */
const se_Variant = (input: Variant, context: __SerdeContext): any => {
  return {
    ...(input.booleanValue != null && { booleanValue: input.booleanValue }),
    ...(input.doubleValue != null && { doubleValue: __serializeFloat(input.doubleValue) }),
    ...(input.integerValue != null && { integerValue: input.integerValue }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
  };
};

/**
 * deserializeAws_restJson1AccessPolicySummaries
 */
const de_AccessPolicySummaries = (output: any, context: __SerdeContext): AccessPolicySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccessPolicySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccessPolicySummary
 */
const de_AccessPolicySummary = (output: any, context: __SerdeContext): AccessPolicySummary => {
  return {
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    id: __expectString(output.id),
    identity: output.identity != null ? de_Identity(output.identity, context) : undefined,
    lastUpdateDate:
      output.lastUpdateDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateDate)))
        : undefined,
    permission: __expectString(output.permission),
    resource: output.resource != null ? de_Resource(output.resource, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AggregatedValue
 */
const de_AggregatedValue = (output: any, context: __SerdeContext): AggregatedValue => {
  return {
    quality: __expectString(output.quality),
    timestamp:
      output.timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestamp))) : undefined,
    value: output.value != null ? de_Aggregates(output.value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AggregatedValues
 */
const de_AggregatedValues = (output: any, context: __SerdeContext): AggregatedValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregatedValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Aggregates
 */
const de_Aggregates = (output: any, context: __SerdeContext): Aggregates => {
  return {
    average: __limitedParseDouble(output.average),
    count: __limitedParseDouble(output.count),
    maximum: __limitedParseDouble(output.maximum),
    minimum: __limitedParseDouble(output.minimum),
    standardDeviation: __limitedParseDouble(output.standardDeviation),
    sum: __limitedParseDouble(output.sum),
  } as any;
};

/**
 * deserializeAws_restJson1Alarms
 */
const de_Alarms = (output: any, context: __SerdeContext): Alarms => {
  return {
    alarmRoleArn: __expectString(output.alarmRoleArn),
    notificationLambdaArn: __expectString(output.notificationLambdaArn),
  } as any;
};

/**
 * deserializeAws_restJson1AssetCompositeModel
 */
const de_AssetCompositeModel = (output: any, context: __SerdeContext): AssetCompositeModel => {
  return {
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    properties: output.properties != null ? de_AssetProperties(output.properties, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1AssetCompositeModels
 */
const de_AssetCompositeModels = (output: any, context: __SerdeContext): AssetCompositeModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetCompositeModel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetErrorDetails
 */
const de_AssetErrorDetails = (output: any, context: __SerdeContext): AssetErrorDetails => {
  return {
    assetId: __expectString(output.assetId),
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1AssetHierarchies
 */
const de_AssetHierarchies = (output: any, context: __SerdeContext): AssetHierarchy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetHierarchy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetHierarchy
 */
const de_AssetHierarchy = (output: any, context: __SerdeContext): AssetHierarchy => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1AssetHierarchyInfo
 */
const de_AssetHierarchyInfo = (output: any, context: __SerdeContext): AssetHierarchyInfo => {
  return {
    childAssetId: __expectString(output.childAssetId),
    parentAssetId: __expectString(output.parentAssetId),
  } as any;
};

/**
 * deserializeAws_restJson1AssetIDs
 */
const de_AssetIDs = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1AssetModelCompositeModel
 */
const de_AssetModelCompositeModel = (output: any, context: __SerdeContext): AssetModelCompositeModel => {
  return {
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    properties: output.properties != null ? de_AssetModelProperties(output.properties, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1AssetModelCompositeModels
 */
const de_AssetModelCompositeModels = (output: any, context: __SerdeContext): AssetModelCompositeModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetModelCompositeModel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetModelHierarchies
 */
const de_AssetModelHierarchies = (output: any, context: __SerdeContext): AssetModelHierarchy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetModelHierarchy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetModelHierarchy
 */
const de_AssetModelHierarchy = (output: any, context: __SerdeContext): AssetModelHierarchy => {
  return {
    childAssetModelId: __expectString(output.childAssetModelId),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1AssetModelProperties
 */
const de_AssetModelProperties = (output: any, context: __SerdeContext): AssetModelProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetModelProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetModelProperty
 */
const de_AssetModelProperty = (output: any, context: __SerdeContext): AssetModelProperty => {
  return {
    dataType: __expectString(output.dataType),
    dataTypeSpec: __expectString(output.dataTypeSpec),
    id: __expectString(output.id),
    name: __expectString(output.name),
    type: output.type != null ? de_PropertyType(output.type, context) : undefined,
    unit: __expectString(output.unit),
  } as any;
};

/**
 * deserializeAws_restJson1AssetModelPropertySummaries
 */
const de_AssetModelPropertySummaries = (output: any, context: __SerdeContext): AssetModelPropertySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetModelPropertySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetModelPropertySummary
 */
const de_AssetModelPropertySummary = (output: any, context: __SerdeContext): AssetModelPropertySummary => {
  return {
    assetModelCompositeModelId: __expectString(output.assetModelCompositeModelId),
    dataType: __expectString(output.dataType),
    dataTypeSpec: __expectString(output.dataTypeSpec),
    id: __expectString(output.id),
    name: __expectString(output.name),
    type: output.type != null ? de_PropertyType(output.type, context) : undefined,
    unit: __expectString(output.unit),
  } as any;
};

/**
 * deserializeAws_restJson1AssetModelStatus
 */
const de_AssetModelStatus = (output: any, context: __SerdeContext): AssetModelStatus => {
  return {
    error: output.error != null ? de_ErrorDetails(output.error, context) : undefined,
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1AssetModelSummaries
 */
const de_AssetModelSummaries = (output: any, context: __SerdeContext): AssetModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetModelSummary
 */
const de_AssetModelSummary = (output: any, context: __SerdeContext): AssetModelSummary => {
  return {
    arn: __expectString(output.arn),
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdateDate:
      output.lastUpdateDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateDate)))
        : undefined,
    name: __expectString(output.name),
    status: output.status != null ? de_AssetModelStatus(output.status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AssetProperties
 */
const de_AssetProperties = (output: any, context: __SerdeContext): AssetProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetProperty
 */
const de_AssetProperty = (output: any, context: __SerdeContext): AssetProperty => {
  return {
    alias: __expectString(output.alias),
    dataType: __expectString(output.dataType),
    dataTypeSpec: __expectString(output.dataTypeSpec),
    id: __expectString(output.id),
    name: __expectString(output.name),
    notification: output.notification != null ? de_PropertyNotification(output.notification, context) : undefined,
    unit: __expectString(output.unit),
  } as any;
};

/**
 * deserializeAws_restJson1AssetPropertySummaries
 */
const de_AssetPropertySummaries = (output: any, context: __SerdeContext): AssetPropertySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetPropertySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetPropertySummary
 */
const de_AssetPropertySummary = (output: any, context: __SerdeContext): AssetPropertySummary => {
  return {
    alias: __expectString(output.alias),
    assetCompositeModelId: __expectString(output.assetCompositeModelId),
    id: __expectString(output.id),
    notification: output.notification != null ? de_PropertyNotification(output.notification, context) : undefined,
    unit: __expectString(output.unit),
  } as any;
};

/**
 * deserializeAws_restJson1AssetPropertyValue
 */
const de_AssetPropertyValue = (output: any, context: __SerdeContext): AssetPropertyValue => {
  return {
    quality: __expectString(output.quality),
    timestamp: output.timestamp != null ? de_TimeInNanos(output.timestamp, context) : undefined,
    value: output.value != null ? de_Variant(output.value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AssetPropertyValueHistory
 */
const de_AssetPropertyValueHistory = (output: any, context: __SerdeContext): AssetPropertyValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetPropertyValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetRelationshipSummaries
 */
const de_AssetRelationshipSummaries = (output: any, context: __SerdeContext): AssetRelationshipSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetRelationshipSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetRelationshipSummary
 */
const de_AssetRelationshipSummary = (output: any, context: __SerdeContext): AssetRelationshipSummary => {
  return {
    hierarchyInfo: output.hierarchyInfo != null ? de_AssetHierarchyInfo(output.hierarchyInfo, context) : undefined,
    relationshipType: __expectString(output.relationshipType),
  } as any;
};

/**
 * deserializeAws_restJson1AssetStatus
 */
const de_AssetStatus = (output: any, context: __SerdeContext): AssetStatus => {
  return {
    error: output.error != null ? de_ErrorDetails(output.error, context) : undefined,
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1AssetSummaries
 */
const de_AssetSummaries = (output: any, context: __SerdeContext): AssetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetSummary
 */
const de_AssetSummary = (output: any, context: __SerdeContext): AssetSummary => {
  return {
    arn: __expectString(output.arn),
    assetModelId: __expectString(output.assetModelId),
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    description: __expectString(output.description),
    hierarchies: output.hierarchies != null ? de_AssetHierarchies(output.hierarchies, context) : undefined,
    id: __expectString(output.id),
    lastUpdateDate:
      output.lastUpdateDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateDate)))
        : undefined,
    name: __expectString(output.name),
    status: output.status != null ? de_AssetStatus(output.status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AssociatedAssetsSummaries
 */
const de_AssociatedAssetsSummaries = (output: any, context: __SerdeContext): AssociatedAssetsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssociatedAssetsSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssociatedAssetsSummary
 */
const de_AssociatedAssetsSummary = (output: any, context: __SerdeContext): AssociatedAssetsSummary => {
  return {
    arn: __expectString(output.arn),
    assetModelId: __expectString(output.assetModelId),
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    description: __expectString(output.description),
    hierarchies: output.hierarchies != null ? de_AssetHierarchies(output.hierarchies, context) : undefined,
    id: __expectString(output.id),
    lastUpdateDate:
      output.lastUpdateDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateDate)))
        : undefined,
    name: __expectString(output.name),
    status: output.status != null ? de_AssetStatus(output.status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Attribute
 */
const de_Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    defaultValue: __expectString(output.defaultValue),
  } as any;
};

/**
 * deserializeAws_restJson1BatchAssociateProjectAssetsErrors
 */
const de_BatchAssociateProjectAssetsErrors = (output: any, context: __SerdeContext): AssetErrorDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetErrorDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchDisassociateProjectAssetsErrors
 */
const de_BatchDisassociateProjectAssetsErrors = (output: any, context: __SerdeContext): AssetErrorDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssetErrorDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyAggregatesErrorEntries
 */
const de_BatchGetAssetPropertyAggregatesErrorEntries = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyAggregatesErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetAssetPropertyAggregatesErrorEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyAggregatesErrorEntry
 */
const de_BatchGetAssetPropertyAggregatesErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyAggregatesErrorEntry => {
  return {
    entryId: __expectString(output.entryId),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyAggregatesErrorInfo
 */
const de_BatchGetAssetPropertyAggregatesErrorInfo = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyAggregatesErrorInfo => {
  return {
    errorCode: __expectString(output.errorCode),
    errorTimestamp:
      output.errorTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.errorTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyAggregatesSkippedEntries
 */
const de_BatchGetAssetPropertyAggregatesSkippedEntries = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyAggregatesSkippedEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetAssetPropertyAggregatesSkippedEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyAggregatesSkippedEntry
 */
const de_BatchGetAssetPropertyAggregatesSkippedEntry = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyAggregatesSkippedEntry => {
  return {
    completionStatus: __expectString(output.completionStatus),
    entryId: __expectString(output.entryId),
    errorInfo:
      output.errorInfo != null ? de_BatchGetAssetPropertyAggregatesErrorInfo(output.errorInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyAggregatesSuccessEntries
 */
const de_BatchGetAssetPropertyAggregatesSuccessEntries = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyAggregatesSuccessEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetAssetPropertyAggregatesSuccessEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyAggregatesSuccessEntry
 */
const de_BatchGetAssetPropertyAggregatesSuccessEntry = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyAggregatesSuccessEntry => {
  return {
    aggregatedValues:
      output.aggregatedValues != null ? de_AggregatedValues(output.aggregatedValues, context) : undefined,
    entryId: __expectString(output.entryId),
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueErrorEntries
 */
const de_BatchGetAssetPropertyValueErrorEntries = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetAssetPropertyValueErrorEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueErrorEntry
 */
const de_BatchGetAssetPropertyValueErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueErrorEntry => {
  return {
    entryId: __expectString(output.entryId),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueErrorInfo
 */
const de_BatchGetAssetPropertyValueErrorInfo = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueErrorInfo => {
  return {
    errorCode: __expectString(output.errorCode),
    errorTimestamp:
      output.errorTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.errorTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueHistoryErrorEntries
 */
const de_BatchGetAssetPropertyValueHistoryErrorEntries = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueHistoryErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetAssetPropertyValueHistoryErrorEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueHistoryErrorEntry
 */
const de_BatchGetAssetPropertyValueHistoryErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueHistoryErrorEntry => {
  return {
    entryId: __expectString(output.entryId),
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueHistoryErrorInfo
 */
const de_BatchGetAssetPropertyValueHistoryErrorInfo = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueHistoryErrorInfo => {
  return {
    errorCode: __expectString(output.errorCode),
    errorTimestamp:
      output.errorTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.errorTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueHistorySkippedEntries
 */
const de_BatchGetAssetPropertyValueHistorySkippedEntries = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueHistorySkippedEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetAssetPropertyValueHistorySkippedEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueHistorySkippedEntry
 */
const de_BatchGetAssetPropertyValueHistorySkippedEntry = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueHistorySkippedEntry => {
  return {
    completionStatus: __expectString(output.completionStatus),
    entryId: __expectString(output.entryId),
    errorInfo:
      output.errorInfo != null ? de_BatchGetAssetPropertyValueHistoryErrorInfo(output.errorInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueHistorySuccessEntries
 */
const de_BatchGetAssetPropertyValueHistorySuccessEntries = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueHistorySuccessEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetAssetPropertyValueHistorySuccessEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueHistorySuccessEntry
 */
const de_BatchGetAssetPropertyValueHistorySuccessEntry = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueHistorySuccessEntry => {
  return {
    assetPropertyValueHistory:
      output.assetPropertyValueHistory != null
        ? de_AssetPropertyValueHistory(output.assetPropertyValueHistory, context)
        : undefined,
    entryId: __expectString(output.entryId),
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueSkippedEntries
 */
const de_BatchGetAssetPropertyValueSkippedEntries = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueSkippedEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetAssetPropertyValueSkippedEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueSkippedEntry
 */
const de_BatchGetAssetPropertyValueSkippedEntry = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueSkippedEntry => {
  return {
    completionStatus: __expectString(output.completionStatus),
    entryId: __expectString(output.entryId),
    errorInfo: output.errorInfo != null ? de_BatchGetAssetPropertyValueErrorInfo(output.errorInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueSuccessEntries
 */
const de_BatchGetAssetPropertyValueSuccessEntries = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueSuccessEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchGetAssetPropertyValueSuccessEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueSuccessEntry
 */
const de_BatchGetAssetPropertyValueSuccessEntry = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueSuccessEntry => {
  return {
    assetPropertyValue:
      output.assetPropertyValue != null ? de_AssetPropertyValue(output.assetPropertyValue, context) : undefined,
    entryId: __expectString(output.entryId),
  } as any;
};

/**
 * deserializeAws_restJson1BatchPutAssetPropertyError
 */
const de_BatchPutAssetPropertyError = (output: any, context: __SerdeContext): BatchPutAssetPropertyError => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    timestamps: output.timestamps != null ? de_Timestamps(output.timestamps, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchPutAssetPropertyErrorEntries
 */
const de_BatchPutAssetPropertyErrorEntries = (
  output: any,
  context: __SerdeContext
): BatchPutAssetPropertyErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchPutAssetPropertyErrorEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchPutAssetPropertyErrorEntry
 */
const de_BatchPutAssetPropertyErrorEntry = (output: any, context: __SerdeContext): BatchPutAssetPropertyErrorEntry => {
  return {
    entryId: __expectString(output.entryId),
    errors: output.errors != null ? de_BatchPutAssetPropertyErrors(output.errors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchPutAssetPropertyErrors
 */
const de_BatchPutAssetPropertyErrors = (output: any, context: __SerdeContext): BatchPutAssetPropertyError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchPutAssetPropertyError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ColumnNames
 */
const de_ColumnNames = (output: any, context: __SerdeContext): (ColumnName | string)[] => {
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
 * deserializeAws_restJson1CompositeModelProperty
 */
const de_CompositeModelProperty = (output: any, context: __SerdeContext): CompositeModelProperty => {
  return {
    assetProperty: output.assetProperty != null ? de_Property(output.assetProperty, context) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1ConfigurationErrorDetails
 */
const de_ConfigurationErrorDetails = (output: any, context: __SerdeContext): ConfigurationErrorDetails => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1ConfigurationStatus
 */
const de_ConfigurationStatus = (output: any, context: __SerdeContext): ConfigurationStatus => {
  return {
    error: output.error != null ? de_ConfigurationErrorDetails(output.error, context) : undefined,
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1Csv
 */
const de_Csv = (output: any, context: __SerdeContext): Csv => {
  return {
    columnNames: output.columnNames != null ? de_ColumnNames(output.columnNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CustomerManagedS3Storage
 */
const de_CustomerManagedS3Storage = (output: any, context: __SerdeContext): CustomerManagedS3Storage => {
  return {
    roleArn: __expectString(output.roleArn),
    s3ResourceArn: __expectString(output.s3ResourceArn),
  } as any;
};

/**
 * deserializeAws_restJson1DashboardSummaries
 */
const de_DashboardSummaries = (output: any, context: __SerdeContext): DashboardSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DashboardSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DashboardSummary
 */
const de_DashboardSummary = (output: any, context: __SerdeContext): DashboardSummary => {
  return {
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdateDate:
      output.lastUpdateDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateDate)))
        : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1DetailedError
 */
const de_DetailedError = (output: any, context: __SerdeContext): DetailedError => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1DetailedErrors
 */
const de_DetailedErrors = (output: any, context: __SerdeContext): DetailedError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DetailedError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ErrorDetails
 */
const de_ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  return {
    code: __expectString(output.code),
    details: output.details != null ? de_DetailedErrors(output.details, context) : undefined,
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1ErrorReportLocation
 */
const de_ErrorReportLocation = (output: any, context: __SerdeContext): ErrorReportLocation => {
  return {
    bucket: __expectString(output.bucket),
    prefix: __expectString(output.prefix),
  } as any;
};

/**
 * deserializeAws_restJson1ExpressionVariable
 */
const de_ExpressionVariable = (output: any, context: __SerdeContext): ExpressionVariable => {
  return {
    name: __expectString(output.name),
    value: output.value != null ? de_VariableValue(output.value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExpressionVariables
 */
const de_ExpressionVariables = (output: any, context: __SerdeContext): ExpressionVariable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExpressionVariable(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1File
 */
const de_File = (output: any, context: __SerdeContext): File => {
  return {
    bucket: __expectString(output.bucket),
    key: __expectString(output.key),
    versionId: __expectString(output.versionId),
  } as any;
};

/**
 * deserializeAws_restJson1FileFormat
 */
const de_FileFormat = (output: any, context: __SerdeContext): FileFormat => {
  return {
    csv: output.csv != null ? de_Csv(output.csv, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Files
 */
const de_Files = (output: any, context: __SerdeContext): File[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_File(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ForwardingConfig
 */
const de_ForwardingConfig = (output: any, context: __SerdeContext): ForwardingConfig => {
  return {
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1GatewayCapabilitySummaries
 */
const de_GatewayCapabilitySummaries = (output: any, context: __SerdeContext): GatewayCapabilitySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GatewayCapabilitySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GatewayCapabilitySummary
 */
const de_GatewayCapabilitySummary = (output: any, context: __SerdeContext): GatewayCapabilitySummary => {
  return {
    capabilityNamespace: __expectString(output.capabilityNamespace),
    capabilitySyncStatus: __expectString(output.capabilitySyncStatus),
  } as any;
};

/**
 * deserializeAws_restJson1GatewayPlatform
 */
const de_GatewayPlatform = (output: any, context: __SerdeContext): GatewayPlatform => {
  return {
    greengrass: output.greengrass != null ? de_Greengrass(output.greengrass, context) : undefined,
    greengrassV2: output.greengrassV2 != null ? de_GreengrassV2(output.greengrassV2, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GatewaySummaries
 */
const de_GatewaySummaries = (output: any, context: __SerdeContext): GatewaySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GatewaySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GatewaySummary
 */
const de_GatewaySummary = (output: any, context: __SerdeContext): GatewaySummary => {
  return {
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    gatewayCapabilitySummaries:
      output.gatewayCapabilitySummaries != null
        ? de_GatewayCapabilitySummaries(output.gatewayCapabilitySummaries, context)
        : undefined,
    gatewayId: __expectString(output.gatewayId),
    gatewayName: __expectString(output.gatewayName),
    gatewayPlatform: output.gatewayPlatform != null ? de_GatewayPlatform(output.gatewayPlatform, context) : undefined,
    lastUpdateDate:
      output.lastUpdateDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateDate)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Greengrass
 */
const de_Greengrass = (output: any, context: __SerdeContext): Greengrass => {
  return {
    groupArn: __expectString(output.groupArn),
  } as any;
};

/**
 * deserializeAws_restJson1GreengrassV2
 */
const de_GreengrassV2 = (output: any, context: __SerdeContext): GreengrassV2 => {
  return {
    coreDeviceThingName: __expectString(output.coreDeviceThingName),
  } as any;
};

/**
 * deserializeAws_restJson1GroupIdentity
 */
const de_GroupIdentity = (output: any, context: __SerdeContext): GroupIdentity => {
  return {
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_restJson1IAMRoleIdentity
 */
const de_IAMRoleIdentity = (output: any, context: __SerdeContext): IAMRoleIdentity => {
  return {
    arn: __expectString(output.arn),
  } as any;
};

/**
 * deserializeAws_restJson1IAMUserIdentity
 */
const de_IAMUserIdentity = (output: any, context: __SerdeContext): IAMUserIdentity => {
  return {
    arn: __expectString(output.arn),
  } as any;
};

/**
 * deserializeAws_restJson1Identity
 */
const de_Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    group: output.group != null ? de_GroupIdentity(output.group, context) : undefined,
    iamRole: output.iamRole != null ? de_IAMRoleIdentity(output.iamRole, context) : undefined,
    iamUser: output.iamUser != null ? de_IAMUserIdentity(output.iamUser, context) : undefined,
    user: output.user != null ? de_UserIdentity(output.user, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImageLocation
 */
const de_ImageLocation = (output: any, context: __SerdeContext): ImageLocation => {
  return {
    id: __expectString(output.id),
    url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_restJson1InterpolatedAssetPropertyValue
 */
const de_InterpolatedAssetPropertyValue = (output: any, context: __SerdeContext): InterpolatedAssetPropertyValue => {
  return {
    timestamp: output.timestamp != null ? de_TimeInNanos(output.timestamp, context) : undefined,
    value: output.value != null ? de_Variant(output.value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InterpolatedAssetPropertyValues
 */
const de_InterpolatedAssetPropertyValues = (output: any, context: __SerdeContext): InterpolatedAssetPropertyValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InterpolatedAssetPropertyValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobConfiguration
 */
const de_JobConfiguration = (output: any, context: __SerdeContext): JobConfiguration => {
  return {
    fileFormat: output.fileFormat != null ? de_FileFormat(output.fileFormat, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1JobSummaries
 */
const de_JobSummaries = (output: any, context: __SerdeContext): JobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobSummary
 */
const de_JobSummary = (output: any, context: __SerdeContext): JobSummary => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1LoggingOptions
 */
const de_LoggingOptions = (output: any, context: __SerdeContext): LoggingOptions => {
  return {
    level: __expectString(output.level),
  } as any;
};

/**
 * deserializeAws_restJson1Measurement
 */
const de_Measurement = (output: any, context: __SerdeContext): Measurement => {
  return {
    processingConfig:
      output.processingConfig != null ? de_MeasurementProcessingConfig(output.processingConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MeasurementProcessingConfig
 */
const de_MeasurementProcessingConfig = (output: any, context: __SerdeContext): MeasurementProcessingConfig => {
  return {
    forwardingConfig:
      output.forwardingConfig != null ? de_ForwardingConfig(output.forwardingConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Metric
 */
const de_Metric = (output: any, context: __SerdeContext): Metric => {
  return {
    expression: __expectString(output.expression),
    processingConfig:
      output.processingConfig != null ? de_MetricProcessingConfig(output.processingConfig, context) : undefined,
    variables: output.variables != null ? de_ExpressionVariables(output.variables, context) : undefined,
    window: output.window != null ? de_MetricWindow(output.window, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MetricProcessingConfig
 */
const de_MetricProcessingConfig = (output: any, context: __SerdeContext): MetricProcessingConfig => {
  return {
    computeLocation: __expectString(output.computeLocation),
  } as any;
};

/**
 * deserializeAws_restJson1MetricWindow
 */
const de_MetricWindow = (output: any, context: __SerdeContext): MetricWindow => {
  return {
    tumbling: output.tumbling != null ? de_TumblingWindow(output.tumbling, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MonitorErrorDetails
 */
const de_MonitorErrorDetails = (output: any, context: __SerdeContext): MonitorErrorDetails => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1MultiLayerStorage
 */
const de_MultiLayerStorage = (output: any, context: __SerdeContext): MultiLayerStorage => {
  return {
    customerManagedS3Storage:
      output.customerManagedS3Storage != null
        ? de_CustomerManagedS3Storage(output.customerManagedS3Storage, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PortalResource
 */
const de_PortalResource = (output: any, context: __SerdeContext): PortalResource => {
  return {
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_restJson1PortalStatus
 */
const de_PortalStatus = (output: any, context: __SerdeContext): PortalStatus => {
  return {
    error: output.error != null ? de_MonitorErrorDetails(output.error, context) : undefined,
    state: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1PortalSummaries
 */
const de_PortalSummaries = (output: any, context: __SerdeContext): PortalSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PortalSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PortalSummary
 */
const de_PortalSummary = (output: any, context: __SerdeContext): PortalSummary => {
  return {
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdateDate:
      output.lastUpdateDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateDate)))
        : undefined,
    name: __expectString(output.name),
    roleArn: __expectString(output.roleArn),
    startUrl: __expectString(output.startUrl),
    status: output.status != null ? de_PortalStatus(output.status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ProjectResource
 */
const de_ProjectResource = (output: any, context: __SerdeContext): ProjectResource => {
  return {
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_restJson1ProjectSummaries
 */
const de_ProjectSummaries = (output: any, context: __SerdeContext): ProjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProjectSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProjectSummary
 */
const de_ProjectSummary = (output: any, context: __SerdeContext): ProjectSummary => {
  return {
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdateDate:
      output.lastUpdateDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateDate)))
        : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1Property
 */
const de_Property = (output: any, context: __SerdeContext): Property => {
  return {
    alias: __expectString(output.alias),
    dataType: __expectString(output.dataType),
    id: __expectString(output.id),
    name: __expectString(output.name),
    notification: output.notification != null ? de_PropertyNotification(output.notification, context) : undefined,
    type: output.type != null ? de_PropertyType(output.type, context) : undefined,
    unit: __expectString(output.unit),
  } as any;
};

/**
 * deserializeAws_restJson1PropertyNotification
 */
const de_PropertyNotification = (output: any, context: __SerdeContext): PropertyNotification => {
  return {
    state: __expectString(output.state),
    topic: __expectString(output.topic),
  } as any;
};

/**
 * deserializeAws_restJson1PropertyType
 */
const de_PropertyType = (output: any, context: __SerdeContext): PropertyType => {
  return {
    attribute: output.attribute != null ? de_Attribute(output.attribute, context) : undefined,
    measurement: output.measurement != null ? de_Measurement(output.measurement, context) : undefined,
    metric: output.metric != null ? de_Metric(output.metric, context) : undefined,
    transform: output.transform != null ? de_Transform(output.transform, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    portal: output.portal != null ? de_PortalResource(output.portal, context) : undefined,
    project: output.project != null ? de_ProjectResource(output.project, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RetentionPeriod
 */
const de_RetentionPeriod = (output: any, context: __SerdeContext): RetentionPeriod => {
  return {
    numberOfDays: __expectInt32(output.numberOfDays),
    unlimited: __expectBoolean(output.unlimited),
  } as any;
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
 * deserializeAws_restJson1TimeInNanos
 */
const de_TimeInNanos = (output: any, context: __SerdeContext): TimeInNanos => {
  return {
    offsetInNanos: __expectInt32(output.offsetInNanos),
    timeInSeconds: __expectLong(output.timeInSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1TimeSeriesSummaries
 */
const de_TimeSeriesSummaries = (output: any, context: __SerdeContext): TimeSeriesSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TimeSeriesSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TimeSeriesSummary
 */
const de_TimeSeriesSummary = (output: any, context: __SerdeContext): TimeSeriesSummary => {
  return {
    alias: __expectString(output.alias),
    assetId: __expectString(output.assetId),
    dataType: __expectString(output.dataType),
    dataTypeSpec: __expectString(output.dataTypeSpec),
    propertyId: __expectString(output.propertyId),
    timeSeriesArn: __expectString(output.timeSeriesArn),
    timeSeriesCreationDate:
      output.timeSeriesCreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timeSeriesCreationDate)))
        : undefined,
    timeSeriesId: __expectString(output.timeSeriesId),
    timeSeriesLastUpdateDate:
      output.timeSeriesLastUpdateDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timeSeriesLastUpdateDate)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Timestamps
 */
const de_Timestamps = (output: any, context: __SerdeContext): TimeInNanos[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TimeInNanos(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Transform
 */
const de_Transform = (output: any, context: __SerdeContext): Transform => {
  return {
    expression: __expectString(output.expression),
    processingConfig:
      output.processingConfig != null ? de_TransformProcessingConfig(output.processingConfig, context) : undefined,
    variables: output.variables != null ? de_ExpressionVariables(output.variables, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TransformProcessingConfig
 */
const de_TransformProcessingConfig = (output: any, context: __SerdeContext): TransformProcessingConfig => {
  return {
    computeLocation: __expectString(output.computeLocation),
    forwardingConfig:
      output.forwardingConfig != null ? de_ForwardingConfig(output.forwardingConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TumblingWindow
 */
const de_TumblingWindow = (output: any, context: __SerdeContext): TumblingWindow => {
  return {
    interval: __expectString(output.interval),
    offset: __expectString(output.offset),
  } as any;
};

/**
 * deserializeAws_restJson1UserIdentity
 */
const de_UserIdentity = (output: any, context: __SerdeContext): UserIdentity => {
  return {
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_restJson1VariableValue
 */
const de_VariableValue = (output: any, context: __SerdeContext): VariableValue => {
  return {
    hierarchyId: __expectString(output.hierarchyId),
    propertyId: __expectString(output.propertyId),
  } as any;
};

/**
 * deserializeAws_restJson1Variant
 */
const de_Variant = (output: any, context: __SerdeContext): Variant => {
  return {
    booleanValue: __expectBoolean(output.booleanValue),
    doubleValue: __limitedParseDouble(output.doubleValue),
    integerValue: __expectInt32(output.integerValue),
    stringValue: __expectString(output.stringValue),
  } as any;
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
