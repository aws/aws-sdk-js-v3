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
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  CreateAssetModelCompositeModelCommandInput,
  CreateAssetModelCompositeModelCommandOutput,
} from "../commands/CreateAssetModelCompositeModelCommand";
import {
  CreateBulkImportJobCommandInput,
  CreateBulkImportJobCommandOutput,
} from "../commands/CreateBulkImportJobCommand";
import { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "../commands/CreateDashboardCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "../commands/CreateDatasetCommand";
import { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "../commands/CreateGatewayCommand";
import { CreatePortalCommandInput, CreatePortalCommandOutput } from "../commands/CreatePortalCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import { DeleteAccessPolicyCommandInput, DeleteAccessPolicyCommandOutput } from "../commands/DeleteAccessPolicyCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "../commands/DeleteAssetCommand";
import { DeleteAssetModelCommandInput, DeleteAssetModelCommandOutput } from "../commands/DeleteAssetModelCommand";
import {
  DeleteAssetModelCompositeModelCommandInput,
  DeleteAssetModelCompositeModelCommandOutput,
} from "../commands/DeleteAssetModelCompositeModelCommand";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "../commands/DeleteDashboardCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "../commands/DeleteGatewayCommand";
import { DeletePortalCommandInput, DeletePortalCommandOutput } from "../commands/DeletePortalCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import { DeleteTimeSeriesCommandInput, DeleteTimeSeriesCommandOutput } from "../commands/DeleteTimeSeriesCommand";
import {
  DescribeAccessPolicyCommandInput,
  DescribeAccessPolicyCommandOutput,
} from "../commands/DescribeAccessPolicyCommand";
import { DescribeActionCommandInput, DescribeActionCommandOutput } from "../commands/DescribeActionCommand";
import { DescribeAssetCommandInput, DescribeAssetCommandOutput } from "../commands/DescribeAssetCommand";
import {
  DescribeAssetCompositeModelCommandInput,
  DescribeAssetCompositeModelCommandOutput,
} from "../commands/DescribeAssetCompositeModelCommand";
import { DescribeAssetModelCommandInput, DescribeAssetModelCommandOutput } from "../commands/DescribeAssetModelCommand";
import {
  DescribeAssetModelCompositeModelCommandInput,
  DescribeAssetModelCompositeModelCommandOutput,
} from "../commands/DescribeAssetModelCompositeModelCommand";
import {
  DescribeAssetPropertyCommandInput,
  DescribeAssetPropertyCommandOutput,
} from "../commands/DescribeAssetPropertyCommand";
import {
  DescribeBulkImportJobCommandInput,
  DescribeBulkImportJobCommandOutput,
} from "../commands/DescribeBulkImportJobCommand";
import { DescribeDashboardCommandInput, DescribeDashboardCommandOutput } from "../commands/DescribeDashboardCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
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
import { ExecuteActionCommandInput, ExecuteActionCommandOutput } from "../commands/ExecuteActionCommand";
import { ExecuteQueryCommandInput, ExecuteQueryCommandOutput } from "../commands/ExecuteQueryCommand";
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
import { InvokeAssistantCommandInput, InvokeAssistantCommandOutput } from "../commands/InvokeAssistantCommand";
import { ListAccessPoliciesCommandInput, ListAccessPoliciesCommandOutput } from "../commands/ListAccessPoliciesCommand";
import { ListActionsCommandInput, ListActionsCommandOutput } from "../commands/ListActionsCommand";
import {
  ListAssetModelCompositeModelsCommandInput,
  ListAssetModelCompositeModelsCommandOutput,
} from "../commands/ListAssetModelCompositeModelsCommand";
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
import {
  ListCompositionRelationshipsCommandInput,
  ListCompositionRelationshipsCommandOutput,
} from "../commands/ListCompositionRelationshipsCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "../commands/ListDashboardsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
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
  UpdateAssetModelCompositeModelCommandInput,
  UpdateAssetModelCompositeModelCommandOutput,
} from "../commands/UpdateAssetModelCompositeModelCommand";
import {
  UpdateAssetPropertyCommandInput,
  UpdateAssetPropertyCommandOutput,
} from "../commands/UpdateAssetPropertyCommand";
import { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "../commands/UpdateDashboardCommand";
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "../commands/UpdateDatasetCommand";
import {
  UpdateGatewayCapabilityConfigurationCommandInput,
  UpdateGatewayCapabilityConfigurationCommandOutput,
} from "../commands/UpdateGatewayCapabilityConfigurationCommand";
import { UpdateGatewayCommandInput, UpdateGatewayCommandOutput } from "../commands/UpdateGatewayCommand";
import { UpdatePortalCommandInput, UpdatePortalCommandOutput } from "../commands/UpdatePortalCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "../commands/UpdateProjectCommand";
import { IoTSiteWiseServiceException as __BaseException } from "../models/IoTSiteWiseServiceException";
import {
  AccessDeniedException,
  AccessPolicySummary,
  ActionPayload,
  AggregatedValue,
  Aggregates,
  AggregateType,
  Alarms,
  AssetModelCompositeModel,
  AssetModelCompositeModelDefinition,
  AssetModelHierarchy,
  AssetModelHierarchyDefinition,
  AssetModelProperty,
  AssetModelPropertyDefinition,
  AssetModelPropertyPathSegment,
  AssetModelSummary,
  AssetPropertyValue,
  AssetSummary,
  AssociatedAssetsSummary,
  Attribute,
  BatchGetAssetPropertyAggregatesEntry,
  BatchGetAssetPropertyAggregatesErrorInfo,
  BatchGetAssetPropertyAggregatesSkippedEntry,
  BatchGetAssetPropertyAggregatesSuccessEntry,
  BatchGetAssetPropertyValueEntry,
  BatchGetAssetPropertyValueErrorInfo,
  BatchGetAssetPropertyValueHistoryEntry,
  BatchGetAssetPropertyValueHistoryErrorInfo,
  BatchGetAssetPropertyValueHistorySkippedEntry,
  BatchGetAssetPropertyValueHistorySuccessEntry,
  BatchGetAssetPropertyValueSkippedEntry,
  BatchGetAssetPropertyValueSuccessEntry,
  ColumnName,
  ConflictingOperationException,
  Csv,
  CustomerManagedS3Storage,
  DatasetSource,
  ErrorReportLocation,
  ExpressionVariable,
  File,
  FileFormat,
  ForwardingConfig,
  GatewayPlatform,
  Greengrass,
  GreengrassV2,
  GroupIdentity,
  IAMRoleIdentity,
  IAMUserIdentity,
  Identity,
  ImageFile,
  InternalFailureException,
  InterpolatedAssetPropertyValue,
  InvalidRequestException,
  InvocationOutput,
  JobConfiguration,
  KendraSourceDetail,
  LimitExceededException,
  LoggingOptions,
  Measurement,
  MeasurementProcessingConfig,
  Metric,
  MetricProcessingConfig,
  MetricWindow,
  MultiLayerStorage,
  Parquet,
  PortalResource,
  PortalTypeEntry,
  PreconditionFailedException,
  ProjectResource,
  PropertyType,
  PutAssetPropertyValueEntry,
  Quality,
  QueryTimeoutException,
  Resource,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ResponseStream,
  RetentionPeriod,
  ServiceUnavailableException,
  SiemensIE,
  SourceDetail,
  TargetResource,
  ThrottlingException,
  TimeInNanos,
  Trace,
  Transform,
  TransformProcessingConfig,
  TumblingWindow,
  UserIdentity,
  ValidationException,
  VariableValue,
  Variant,
  WarmTierRetentionPeriod,
} from "../models/models_0";
import {
  DashboardSummary,
  DatasetSummary,
  Datum,
  GatewaySummary,
  Image,
  PortalSummary,
  ProjectSummary,
  Row,
  TimeSeriesSummary,
  TooManyTagsException,
  UnauthorizedException,
} from "../models/models_1";

/**
 * serializeAws_restJson1AssociateAssetsCommand
 */
export const se_AssociateAssetsCommand = async (
  input: AssociateAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assets/{assetId}/associate");
  b.p("assetId", () => input.assetId!, "{assetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      childAssetId: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      hierarchyId: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateTimeSeriesToAssetPropertyCommand
 */
export const se_AssociateTimeSeriesToAssetPropertyCommand = async (
  input: AssociateTimeSeriesToAssetPropertyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/timeseries/associate");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_a]!, `alias`)],
    [_aI]: [, __expectNonNull(input[_aI]!, `assetId`)],
    [_pI]: [, __expectNonNull(input[_pI]!, `propertyId`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchAssociateProjectAssetsCommand
 */
export const se_BatchAssociateProjectAssetsCommand = async (
  input: BatchAssociateProjectAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/projects/{projectId}/assets/associate");
  b.p("projectId", () => input.projectId!, "{projectId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetIds: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDisassociateProjectAssetsCommand
 */
export const se_BatchDisassociateProjectAssetsCommand = async (
  input: BatchDisassociateProjectAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/projects/{projectId}/assets/disassociate");
  b.p("projectId", () => input.projectId!, "{projectId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetIds: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetAssetPropertyAggregatesCommand
 */
export const se_BatchGetAssetPropertyAggregatesCommand = async (
  input: BatchGetAssetPropertyAggregatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/properties/batch/aggregates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      entries: (_) => se_BatchGetAssetPropertyAggregatesEntries(_, context),
      maxResults: [],
      nextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetAssetPropertyValueCommand
 */
export const se_BatchGetAssetPropertyValueCommand = async (
  input: BatchGetAssetPropertyValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/properties/batch/latest");
  let body: any;
  body = JSON.stringify(
    take(input, {
      entries: (_) => _json(_),
      nextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetAssetPropertyValueHistoryCommand
 */
export const se_BatchGetAssetPropertyValueHistoryCommand = async (
  input: BatchGetAssetPropertyValueHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/properties/batch/history");
  let body: any;
  body = JSON.stringify(
    take(input, {
      entries: (_) => se_BatchGetAssetPropertyValueHistoryEntries(_, context),
      maxResults: [],
      nextToken: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchPutAssetPropertyValueCommand
 */
export const se_BatchPutAssetPropertyValueCommand = async (
  input: BatchPutAssetPropertyValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/properties");
  let body: any;
  body = JSON.stringify(
    take(input, {
      entries: (_) => se_PutAssetPropertyValueEntries(_, context),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAccessPolicyCommand
 */
export const se_CreateAccessPolicyCommand = async (
  input: CreateAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/access-policies");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accessPolicyIdentity: (_) => _json(_),
      accessPolicyPermission: [],
      accessPolicyResource: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAssetCommand
 */
export const se_CreateAssetCommand = async (
  input: CreateAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assets");
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetDescription: [],
      assetExternalId: [],
      assetId: [],
      assetModelId: [],
      assetName: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAssetModelCommand
 */
export const se_CreateAssetModelCommand = async (
  input: CreateAssetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/asset-models");
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetModelCompositeModels: (_) => se_AssetModelCompositeModelDefinitions(_, context),
      assetModelDescription: [],
      assetModelExternalId: [],
      assetModelHierarchies: (_) => _json(_),
      assetModelId: [],
      assetModelName: [],
      assetModelProperties: (_) => _json(_),
      assetModelType: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAssetModelCompositeModelCommand
 */
export const se_CreateAssetModelCompositeModelCommand = async (
  input: CreateAssetModelCompositeModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_im]: input[_iM]!,
    [_inm]: input[_iNM]!,
    [_mfvt]: input[_mFVT]!,
  });
  b.bp("/asset-models/{assetModelId}/composite-models");
  b.p("assetModelId", () => input.assetModelId!, "{assetModelId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetModelCompositeModelDescription: [],
      assetModelCompositeModelExternalId: [],
      assetModelCompositeModelId: [],
      assetModelCompositeModelName: [],
      assetModelCompositeModelProperties: (_) => _json(_),
      assetModelCompositeModelType: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      composedAssetModelId: [],
      parentAssetModelCompositeModelId: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateBulkImportJobCommand
 */
export const se_CreateBulkImportJobCommand = async (
  input: CreateBulkImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      adaptiveIngestion: [],
      deleteFilesAfterImport: [],
      errorReportLocation: (_) => _json(_),
      files: (_) => _json(_),
      jobConfiguration: (_) => _json(_),
      jobName: [],
      jobRoleArn: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDashboardCommand
 */
export const se_CreateDashboardCommand = async (
  input: CreateDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/dashboards");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      dashboardDefinition: [],
      dashboardDescription: [],
      dashboardName: [],
      projectId: [],
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDatasetCommand
 */
export const se_CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/datasets");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      datasetDescription: [],
      datasetId: [],
      datasetName: [],
      datasetSource: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGatewayCommand
 */
export const se_CreateGatewayCommand = async (
  input: CreateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/20200301/gateways");
  let body: any;
  body = JSON.stringify(
    take(input, {
      gatewayName: [],
      gatewayPlatform: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePortalCommand
 */
export const se_CreatePortalCommand = async (
  input: CreatePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/portals");
  let body: any;
  body = JSON.stringify(
    take(input, {
      alarms: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      notificationSenderEmail: [],
      portalAuthMode: [],
      portalContactEmail: [],
      portalDescription: [],
      portalLogoImageFile: (_) => se_ImageFile(_, context),
      portalName: [],
      portalType: [],
      portalTypeConfiguration: (_) => _json(_),
      roleArn: [],
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/projects");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      portalId: [],
      projectDescription: [],
      projectName: [],
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAccessPolicyCommand
 */
export const se_DeleteAccessPolicyCommand = async (
  input: DeleteAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/access-policies/{accessPolicyId}");
  b.p("accessPolicyId", () => input.accessPolicyId!, "{accessPolicyId}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAssetCommand
 */
export const se_DeleteAssetCommand = async (
  input: DeleteAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assets/{assetId}");
  b.p("assetId", () => input.assetId!, "{assetId}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAssetModelCommand
 */
export const se_DeleteAssetModelCommand = async (
  input: DeleteAssetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_iM]!,
    [_inm]: input[_iNM]!,
    [_mfvt]: input[_mFVT]!,
  });
  b.bp("/asset-models/{assetModelId}");
  b.p("assetModelId", () => input.assetModelId!, "{assetModelId}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAssetModelCompositeModelCommand
 */
export const se_DeleteAssetModelCompositeModelCommand = async (
  input: DeleteAssetModelCompositeModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_im]: input[_iM]!,
    [_inm]: input[_iNM]!,
    [_mfvt]: input[_mFVT]!,
  });
  b.bp("/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}");
  b.p("assetModelId", () => input.assetModelId!, "{assetModelId}", false);
  b.p("assetModelCompositeModelId", () => input.assetModelCompositeModelId!, "{assetModelCompositeModelId}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDashboardCommand
 */
export const se_DeleteDashboardCommand = async (
  input: DeleteDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/dashboards/{dashboardId}");
  b.p("dashboardId", () => input.dashboardId!, "{dashboardId}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDatasetCommand
 */
export const se_DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/datasets/{datasetId}");
  b.p("datasetId", () => input.datasetId!, "{datasetId}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGatewayCommand
 */
export const se_DeleteGatewayCommand = async (
  input: DeleteGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/20200301/gateways/{gatewayId}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePortalCommand
 */
export const se_DeletePortalCommand = async (
  input: DeletePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalId}");
  b.p("portalId", () => input.portalId!, "{portalId}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/projects/{projectId}");
  b.p("projectId", () => input.projectId!, "{projectId}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTimeSeriesCommand
 */
export const se_DeleteTimeSeriesCommand = async (
  input: DeleteTimeSeriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/timeseries/delete");
  const query: any = map({
    [_a]: [, input[_a]!],
    [_aI]: [, input[_aI]!],
    [_pI]: [, input[_pI]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAccessPolicyCommand
 */
export const se_DescribeAccessPolicyCommand = async (
  input: DescribeAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/access-policies/{accessPolicyId}");
  b.p("accessPolicyId", () => input.accessPolicyId!, "{accessPolicyId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeActionCommand
 */
export const se_DescribeActionCommand = async (
  input: DescribeActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/actions/{actionId}");
  b.p("actionId", () => input.actionId!, "{actionId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAssetCommand
 */
export const se_DescribeAssetCommand = async (
  input: DescribeAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assets/{assetId}");
  b.p("assetId", () => input.assetId!, "{assetId}", false);
  const query: any = map({
    [_eP]: [() => input.excludeProperties !== void 0, () => input[_eP]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAssetCompositeModelCommand
 */
export const se_DescribeAssetCompositeModelCommand = async (
  input: DescribeAssetCompositeModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assets/{assetId}/composite-models/{assetCompositeModelId}");
  b.p("assetId", () => input.assetId!, "{assetId}", false);
  b.p("assetCompositeModelId", () => input.assetCompositeModelId!, "{assetCompositeModelId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAssetModelCommand
 */
export const se_DescribeAssetModelCommand = async (
  input: DescribeAssetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/asset-models/{assetModelId}");
  b.p("assetModelId", () => input.assetModelId!, "{assetModelId}", false);
  const query: any = map({
    [_eP]: [() => input.excludeProperties !== void 0, () => input[_eP]!.toString()],
    [_aMV]: [, input[_aMV]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAssetModelCompositeModelCommand
 */
export const se_DescribeAssetModelCompositeModelCommand = async (
  input: DescribeAssetModelCompositeModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}");
  b.p("assetModelId", () => input.assetModelId!, "{assetModelId}", false);
  b.p("assetModelCompositeModelId", () => input.assetModelCompositeModelId!, "{assetModelCompositeModelId}", false);
  const query: any = map({
    [_aMV]: [, input[_aMV]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAssetPropertyCommand
 */
export const se_DescribeAssetPropertyCommand = async (
  input: DescribeAssetPropertyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assets/{assetId}/properties/{propertyId}");
  b.p("assetId", () => input.assetId!, "{assetId}", false);
  b.p("propertyId", () => input.propertyId!, "{propertyId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeBulkImportJobCommand
 */
export const se_DescribeBulkImportJobCommand = async (
  input: DescribeBulkImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/jobs/{jobId}");
  b.p("jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDashboardCommand
 */
export const se_DescribeDashboardCommand = async (
  input: DescribeDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/dashboards/{dashboardId}");
  b.p("dashboardId", () => input.dashboardId!, "{dashboardId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDatasetCommand
 */
export const se_DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/datasets/{datasetId}");
  b.p("datasetId", () => input.datasetId!, "{datasetId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand
 */
export const se_DescribeDefaultEncryptionConfigurationCommand = async (
  input: DescribeDefaultEncryptionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configuration/account/encryption");
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeGatewayCommand
 */
export const se_DescribeGatewayCommand = async (
  input: DescribeGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/20200301/gateways/{gatewayId}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand
 */
export const se_DescribeGatewayCapabilityConfigurationCommand = async (
  input: DescribeGatewayCapabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/20200301/gateways/{gatewayId}/capability/{capabilityNamespace}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  b.p("capabilityNamespace", () => input.capabilityNamespace!, "{capabilityNamespace}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeLoggingOptionsCommand
 */
export const se_DescribeLoggingOptionsCommand = async (
  input: DescribeLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/logging");
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribePortalCommand
 */
export const se_DescribePortalCommand = async (
  input: DescribePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals/{portalId}");
  b.p("portalId", () => input.portalId!, "{portalId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeProjectCommand
 */
export const se_DescribeProjectCommand = async (
  input: DescribeProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/projects/{projectId}");
  b.p("projectId", () => input.projectId!, "{projectId}", false);
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeStorageConfigurationCommand
 */
export const se_DescribeStorageConfigurationCommand = async (
  input: DescribeStorageConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configuration/account/storage");
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeTimeSeriesCommand
 */
export const se_DescribeTimeSeriesCommand = async (
  input: DescribeTimeSeriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/timeseries/describe");
  const query: any = map({
    [_a]: [, input[_a]!],
    [_aI]: [, input[_aI]!],
    [_pI]: [, input[_pI]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateAssetsCommand
 */
export const se_DisassociateAssetsCommand = async (
  input: DisassociateAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assets/{assetId}/disassociate");
  b.p("assetId", () => input.assetId!, "{assetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      childAssetId: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      hierarchyId: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateTimeSeriesFromAssetPropertyCommand
 */
export const se_DisassociateTimeSeriesFromAssetPropertyCommand = async (
  input: DisassociateTimeSeriesFromAssetPropertyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/timeseries/disassociate");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_a]!, `alias`)],
    [_aI]: [, __expectNonNull(input[_aI]!, `assetId`)],
    [_pI]: [, __expectNonNull(input[_pI]!, `propertyId`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExecuteActionCommand
 */
export const se_ExecuteActionCommand = async (
  input: ExecuteActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/actions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      actionDefinitionId: [],
      actionPayload: (_) => _json(_),
      clientToken: [],
      targetResource: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExecuteQueryCommand
 */
export const se_ExecuteQueryCommand = async (
  input: ExecuteQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/queries/execution");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      maxResults: [],
      nextToken: [],
      queryStatement: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssetPropertyAggregatesCommand
 */
export const se_GetAssetPropertyAggregatesCommand = async (
  input: GetAssetPropertyAggregatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/properties/aggregates");
  const query: any = map({
    [_aI]: [, input[_aI]!],
    [_pI]: [, input[_pI]!],
    [_pA]: [, input[_pA]!],
    [_aT]: [__expectNonNull(input.aggregateTypes, `aggregateTypes`) != null, () => input[_aT]! || []],
    [_r]: [, __expectNonNull(input[_r]!, `resolution`)],
    [_q]: [() => input.qualities !== void 0, () => input[_q]! || []],
    [_sD]: [__expectNonNull(input.startDate, `startDate`) != null, () => __serializeDateTime(input[_sD]!).toString()],
    [_eD]: [__expectNonNull(input.endDate, `endDate`) != null, () => __serializeDateTime(input[_eD]!).toString()],
    [_tO]: [, input[_tO]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssetPropertyValueCommand
 */
export const se_GetAssetPropertyValueCommand = async (
  input: GetAssetPropertyValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/properties/latest");
  const query: any = map({
    [_aI]: [, input[_aI]!],
    [_pI]: [, input[_pI]!],
    [_pA]: [, input[_pA]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAssetPropertyValueHistoryCommand
 */
export const se_GetAssetPropertyValueHistoryCommand = async (
  input: GetAssetPropertyValueHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/properties/history");
  const query: any = map({
    [_aI]: [, input[_aI]!],
    [_pI]: [, input[_pI]!],
    [_pA]: [, input[_pA]!],
    [_sD]: [() => input.startDate !== void 0, () => __serializeDateTime(input[_sD]!).toString()],
    [_eD]: [() => input.endDate !== void 0, () => __serializeDateTime(input[_eD]!).toString()],
    [_q]: [() => input.qualities !== void 0, () => input[_q]! || []],
    [_tO]: [, input[_tO]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand
 */
export const se_GetInterpolatedAssetPropertyValuesCommand = async (
  input: GetInterpolatedAssetPropertyValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/properties/interpolated");
  const query: any = map({
    [_aI]: [, input[_aI]!],
    [_pI]: [, input[_pI]!],
    [_pA]: [, input[_pA]!],
    [_sTIS]: [__expectNonNull(input.startTimeInSeconds, `startTimeInSeconds`) != null, () => input[_sTIS]!.toString()],
    [_sTOIN]: [() => input.startTimeOffsetInNanos !== void 0, () => input[_sTOIN]!.toString()],
    [_eTIS]: [__expectNonNull(input.endTimeInSeconds, `endTimeInSeconds`) != null, () => input[_eTIS]!.toString()],
    [_eTOIN]: [() => input.endTimeOffsetInNanos !== void 0, () => input[_eTOIN]!.toString()],
    [_qu]: [, __expectNonNull(input[_qu]!, `quality`)],
    [_iIS]: [__expectNonNull(input.intervalInSeconds, `intervalInSeconds`) != null, () => input[_iIS]!.toString()],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_t]: [, __expectNonNull(input[_t]!, `type`)],
    [_iWIS]: [() => input.intervalWindowInSeconds !== void 0, () => input[_iWIS]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1InvokeAssistantCommand
 */
export const se_InvokeAssistantCommand = async (
  input: InvokeAssistantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assistant/invocation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      conversationId: [],
      enableTrace: [],
      message: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAccessPoliciesCommand
 */
export const se_ListAccessPoliciesCommand = async (
  input: ListAccessPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/access-policies");
  const query: any = map({
    [_iT]: [, input[_iT]!],
    [_iI]: [, input[_iI]!],
    [_rT]: [, input[_rT]!],
    [_rI]: [, input[_rI]!],
    [_iA]: [, input[_iA]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListActionsCommand
 */
export const se_ListActionsCommand = async (
  input: ListActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/actions");
  const query: any = map({
    [_tRT]: [, __expectNonNull(input[_tRT]!, `targetResourceType`)],
    [_tRI]: [, __expectNonNull(input[_tRI]!, `targetResourceId`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssetModelCompositeModelsCommand
 */
export const se_ListAssetModelCompositeModelsCommand = async (
  input: ListAssetModelCompositeModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/asset-models/{assetModelId}/composite-models");
  b.p("assetModelId", () => input.assetModelId!, "{assetModelId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_aMV]: [, input[_aMV]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssetModelPropertiesCommand
 */
export const se_ListAssetModelPropertiesCommand = async (
  input: ListAssetModelPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/asset-models/{assetModelId}/properties");
  b.p("assetModelId", () => input.assetModelId!, "{assetModelId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_f]: [, input[_f]!],
    [_aMV]: [, input[_aMV]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssetModelsCommand
 */
export const se_ListAssetModelsCommand = async (
  input: ListAssetModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/asset-models");
  const query: any = map({
    [_aMT]: [() => input.assetModelTypes !== void 0, () => input[_aMT]! || []],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_aMV]: [, input[_aMV]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssetPropertiesCommand
 */
export const se_ListAssetPropertiesCommand = async (
  input: ListAssetPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assets/{assetId}/properties");
  b.p("assetId", () => input.assetId!, "{assetId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_f]: [, input[_f]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssetRelationshipsCommand
 */
export const se_ListAssetRelationshipsCommand = async (
  input: ListAssetRelationshipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assets/{assetId}/assetRelationships");
  b.p("assetId", () => input.assetId!, "{assetId}", false);
  const query: any = map({
    [_tT]: [, __expectNonNull(input[_tT]!, `traversalType`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssetsCommand
 */
export const se_ListAssetsCommand = async (
  input: ListAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assets");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_aMI]: [, input[_aMI]!],
    [_f]: [, input[_f]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssociatedAssetsCommand
 */
export const se_ListAssociatedAssetsCommand = async (
  input: ListAssociatedAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/assets/{assetId}/hierarchies");
  b.p("assetId", () => input.assetId!, "{assetId}", false);
  const query: any = map({
    [_hI]: [, input[_hI]!],
    [_tD]: [, input[_tD]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBulkImportJobsCommand
 */
export const se_ListBulkImportJobsCommand = async (
  input: ListBulkImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/jobs");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_f]: [, input[_f]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCompositionRelationshipsCommand
 */
export const se_ListCompositionRelationshipsCommand = async (
  input: ListCompositionRelationshipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/asset-models/{assetModelId}/composition-relationships");
  b.p("assetModelId", () => input.assetModelId!, "{assetModelId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDashboardsCommand
 */
export const se_ListDashboardsCommand = async (
  input: ListDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/dashboards");
  const query: any = map({
    [_pIr]: [, __expectNonNull(input[_pIr]!, `projectId`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDatasetsCommand
 */
export const se_ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/datasets");
  const query: any = map({
    [_sT]: [, __expectNonNull(input[_sT]!, `sourceType`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGatewaysCommand
 */
export const se_ListGatewaysCommand = async (
  input: ListGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/20200301/gateways");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPortalsCommand
 */
export const se_ListPortalsCommand = async (
  input: ListPortalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/portals");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProjectAssetsCommand
 */
export const se_ListProjectAssetsCommand = async (
  input: ListProjectAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/projects/{projectId}/assets");
  b.p("projectId", () => input.projectId!, "{projectId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProjectsCommand
 */
export const se_ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/projects");
  const query: any = map({
    [_pIo]: [, __expectNonNull(input[_pIo]!, `portalId`)],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
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
  b.bp("/tags");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_rA]!, `resourceArn`)],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTimeSeriesCommand
 */
export const se_ListTimeSeriesCommand = async (
  input: ListTimeSeriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/timeseries");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_aI]: [, input[_aI]!],
    [_aP]: [, input[_aP]!],
    [_tST]: [, input[_tST]!],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutDefaultEncryptionConfigurationCommand
 */
export const se_PutDefaultEncryptionConfigurationCommand = async (
  input: PutDefaultEncryptionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configuration/account/encryption");
  let body: any;
  body = JSON.stringify(
    take(input, {
      encryptionType: [],
      kmsKeyId: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutLoggingOptionsCommand
 */
export const se_PutLoggingOptionsCommand = async (
  input: PutLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/logging");
  let body: any;
  body = JSON.stringify(
    take(input, {
      loggingOptions: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutStorageConfigurationCommand
 */
export const se_PutStorageConfigurationCommand = async (
  input: PutStorageConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configuration/account/storage");
  let body: any;
  body = JSON.stringify(
    take(input, {
      disassociatedDataStorage: [],
      multiLayerStorage: (_) => _json(_),
      retentionPeriod: (_) => _json(_),
      storageType: [],
      warmTier: [],
      warmTierRetentionPeriod: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
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
  b.bp("/tags");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_rA]!, `resourceArn`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).q(query).b(body);
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
  b.bp("/tags");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_rA]!, `resourceArn`)],
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAccessPolicyCommand
 */
export const se_UpdateAccessPolicyCommand = async (
  input: UpdateAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/access-policies/{accessPolicyId}");
  b.p("accessPolicyId", () => input.accessPolicyId!, "{accessPolicyId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      accessPolicyIdentity: (_) => _json(_),
      accessPolicyPermission: [],
      accessPolicyResource: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAssetCommand
 */
export const se_UpdateAssetCommand = async (
  input: UpdateAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assets/{assetId}");
  b.p("assetId", () => input.assetId!, "{assetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetDescription: [],
      assetExternalId: [],
      assetName: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAssetModelCommand
 */
export const se_UpdateAssetModelCommand = async (
  input: UpdateAssetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_im]: input[_iM]!,
    [_inm]: input[_iNM]!,
    [_mfvt]: input[_mFVT]!,
  });
  b.bp("/asset-models/{assetModelId}");
  b.p("assetModelId", () => input.assetModelId!, "{assetModelId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetModelCompositeModels: (_) => se_AssetModelCompositeModels(_, context),
      assetModelDescription: [],
      assetModelExternalId: [],
      assetModelHierarchies: (_) => _json(_),
      assetModelName: [],
      assetModelProperties: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAssetModelCompositeModelCommand
 */
export const se_UpdateAssetModelCompositeModelCommand = async (
  input: UpdateAssetModelCompositeModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    [_im]: input[_iM]!,
    [_inm]: input[_iNM]!,
    [_mfvt]: input[_mFVT]!,
  });
  b.bp("/asset-models/{assetModelId}/composite-models/{assetModelCompositeModelId}");
  b.p("assetModelId", () => input.assetModelId!, "{assetModelId}", false);
  b.p("assetModelCompositeModelId", () => input.assetModelCompositeModelId!, "{assetModelCompositeModelId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      assetModelCompositeModelDescription: [],
      assetModelCompositeModelExternalId: [],
      assetModelCompositeModelName: [],
      assetModelCompositeModelProperties: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAssetPropertyCommand
 */
export const se_UpdateAssetPropertyCommand = async (
  input: UpdateAssetPropertyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/assets/{assetId}/properties/{propertyId}");
  b.p("assetId", () => input.assetId!, "{assetId}", false);
  b.p("propertyId", () => input.propertyId!, "{propertyId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      propertyAlias: [],
      propertyNotificationState: [],
      propertyUnit: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDashboardCommand
 */
export const se_UpdateDashboardCommand = async (
  input: UpdateDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/dashboards/{dashboardId}");
  b.p("dashboardId", () => input.dashboardId!, "{dashboardId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      dashboardDefinition: [],
      dashboardDescription: [],
      dashboardName: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDatasetCommand
 */
export const se_UpdateDatasetCommand = async (
  input: UpdateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/datasets/{datasetId}");
  b.p("datasetId", () => input.datasetId!, "{datasetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      datasetDescription: [],
      datasetName: [],
      datasetSource: (_) => _json(_),
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGatewayCommand
 */
export const se_UpdateGatewayCommand = async (
  input: UpdateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/20200301/gateways/{gatewayId}");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      gatewayName: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand
 */
export const se_UpdateGatewayCapabilityConfigurationCommand = async (
  input: UpdateGatewayCapabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/20200301/gateways/{gatewayId}/capability");
  b.p("gatewayId", () => input.gatewayId!, "{gatewayId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      capabilityConfiguration: [],
      capabilityNamespace: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "api." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePortalCommand
 */
export const se_UpdatePortalCommand = async (
  input: UpdatePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/portals/{portalId}");
  b.p("portalId", () => input.portalId!, "{portalId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      alarms: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      notificationSenderEmail: [],
      portalContactEmail: [],
      portalDescription: [],
      portalLogoImage: (_) => se_Image(_, context),
      portalName: [],
      portalType: [],
      portalTypeConfiguration: (_) => _json(_),
      roleArn: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProjectCommand
 */
export const se_UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/projects/{projectId}");
  b.p("projectId", () => input.projectId!, "{projectId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      projectDescription: [],
      projectName: [],
    })
  );
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "monitor." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  b.hn(resolvedHostname);
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateAssetsCommand
 */
export const de_AssociateAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAssetsCommandOutput> => {
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
 * deserializeAws_restJson1AssociateTimeSeriesToAssetPropertyCommand
 */
export const de_AssociateTimeSeriesToAssetPropertyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTimeSeriesToAssetPropertyCommandOutput> => {
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
 * deserializeAws_restJson1BatchAssociateProjectAssetsCommand
 */
export const de_BatchAssociateProjectAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateProjectAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDisassociateProjectAssetsCommand
 */
export const de_BatchDisassociateProjectAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateProjectAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyAggregatesCommand
 */
export const de_BatchGetAssetPropertyAggregatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAssetPropertyAggregatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorEntries: _json,
    nextToken: __expectString,
    skippedEntries: (_) => de_BatchGetAssetPropertyAggregatesSkippedEntries(_, context),
    successEntries: (_) => de_BatchGetAssetPropertyAggregatesSuccessEntries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueCommand
 */
export const de_BatchGetAssetPropertyValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAssetPropertyValueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorEntries: _json,
    nextToken: __expectString,
    skippedEntries: (_) => de_BatchGetAssetPropertyValueSkippedEntries(_, context),
    successEntries: (_) => de_BatchGetAssetPropertyValueSuccessEntries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueHistoryCommand
 */
export const de_BatchGetAssetPropertyValueHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetAssetPropertyValueHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorEntries: _json,
    nextToken: __expectString,
    skippedEntries: (_) => de_BatchGetAssetPropertyValueHistorySkippedEntries(_, context),
    successEntries: (_) => de_BatchGetAssetPropertyValueHistorySuccessEntries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchPutAssetPropertyValueCommand
 */
export const de_BatchPutAssetPropertyValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutAssetPropertyValueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorEntries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAccessPolicyCommand
 */
export const de_CreateAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessPolicyArn: __expectString,
    accessPolicyId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssetCommand
 */
export const de_CreateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetArn: __expectString,
    assetId: __expectString,
    assetStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssetModelCommand
 */
export const de_CreateAssetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetModelArn: __expectString,
    assetModelId: __expectString,
    assetModelStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateAssetModelCompositeModelCommand
 */
export const de_CreateAssetModelCompositeModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetModelCompositeModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetModelCompositeModelId: __expectString,
    assetModelCompositeModelPath: _json,
    assetModelStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateBulkImportJobCommand
 */
export const de_CreateBulkImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBulkImportJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobId: __expectString,
    jobName: __expectString,
    jobStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDashboardCommand
 */
export const de_CreateDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDashboardCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dashboardArn: __expectString,
    dashboardId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDatasetCommand
 */
export const de_CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datasetArn: __expectString,
    datasetId: __expectString,
    datasetStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGatewayCommand
 */
export const de_CreateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    gatewayArn: __expectString,
    gatewayId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePortalCommand
 */
export const de_CreatePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortalCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    portalArn: __expectString,
    portalId: __expectString,
    portalStartUrl: __expectString,
    portalStatus: _json,
    ssoApplicationId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProjectCommand
 */
export const de_CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    projectArn: __expectString,
    projectId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccessPolicyCommand
 */
export const de_DeleteAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssetCommand
 */
export const de_DeleteAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssetModelCommand
 */
export const de_DeleteAssetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetModelStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAssetModelCompositeModelCommand
 */
export const de_DeleteAssetModelCompositeModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetModelCompositeModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetModelStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDashboardCommand
 */
export const de_DeleteDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDatasetCommand
 */
export const de_DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datasetStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGatewayCommand
 */
export const de_DeleteGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
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
 * deserializeAws_restJson1DeletePortalCommand
 */
export const de_DeletePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortalCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    portalStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProjectCommand
 */
export const de_DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTimeSeriesCommand
 */
export const de_DeleteTimeSeriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTimeSeriesCommandOutput> => {
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
 * deserializeAws_restJson1DescribeAccessPolicyCommand
 */
export const de_DescribeAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessPolicyArn: __expectString,
    accessPolicyCreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    accessPolicyId: __expectString,
    accessPolicyIdentity: _json,
    accessPolicyLastUpdateDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    accessPolicyPermission: __expectString,
    accessPolicyResource: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeActionCommand
 */
export const de_DescribeActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionDefinitionId: __expectString,
    actionId: __expectString,
    actionPayload: _json,
    executionTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    targetResource: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAssetCommand
 */
export const de_DescribeAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetArn: __expectString,
    assetCompositeModelSummaries: _json,
    assetCompositeModels: _json,
    assetCreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    assetDescription: __expectString,
    assetExternalId: __expectString,
    assetHierarchies: _json,
    assetId: __expectString,
    assetLastUpdateDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    assetModelId: __expectString,
    assetName: __expectString,
    assetProperties: _json,
    assetStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAssetCompositeModelCommand
 */
export const de_DescribeAssetCompositeModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetCompositeModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionDefinitions: _json,
    assetCompositeModelDescription: __expectString,
    assetCompositeModelExternalId: __expectString,
    assetCompositeModelId: __expectString,
    assetCompositeModelName: __expectString,
    assetCompositeModelPath: _json,
    assetCompositeModelProperties: _json,
    assetCompositeModelSummaries: _json,
    assetCompositeModelType: __expectString,
    assetId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAssetModelCommand
 */
export const de_DescribeAssetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_eT]: [, output.headers[_e]],
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetModelArn: __expectString,
    assetModelCompositeModelSummaries: _json,
    assetModelCompositeModels: (_) => de_AssetModelCompositeModels(_, context),
    assetModelCreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    assetModelDescription: __expectString,
    assetModelExternalId: __expectString,
    assetModelHierarchies: _json,
    assetModelId: __expectString,
    assetModelLastUpdateDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    assetModelName: __expectString,
    assetModelProperties: _json,
    assetModelStatus: _json,
    assetModelType: __expectString,
    assetModelVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAssetModelCompositeModelCommand
 */
export const de_DescribeAssetModelCompositeModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetModelCompositeModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionDefinitions: _json,
    assetModelCompositeModelDescription: __expectString,
    assetModelCompositeModelExternalId: __expectString,
    assetModelCompositeModelId: __expectString,
    assetModelCompositeModelName: __expectString,
    assetModelCompositeModelPath: _json,
    assetModelCompositeModelProperties: _json,
    assetModelCompositeModelSummaries: _json,
    assetModelCompositeModelType: __expectString,
    assetModelId: __expectString,
    compositionDetails: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAssetPropertyCommand
 */
export const de_DescribeAssetPropertyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetPropertyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetExternalId: __expectString,
    assetId: __expectString,
    assetModelId: __expectString,
    assetName: __expectString,
    assetProperty: _json,
    compositeModel: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBulkImportJobCommand
 */
export const de_DescribeBulkImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBulkImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    adaptiveIngestion: __expectBoolean,
    deleteFilesAfterImport: __expectBoolean,
    errorReportLocation: _json,
    files: _json,
    jobConfiguration: _json,
    jobCreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    jobId: __expectString,
    jobLastUpdateDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    jobName: __expectString,
    jobRoleArn: __expectString,
    jobStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDashboardCommand
 */
export const de_DescribeDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dashboardArn: __expectString,
    dashboardCreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dashboardDefinition: __expectString,
    dashboardDescription: __expectString,
    dashboardId: __expectString,
    dashboardLastUpdateDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dashboardName: __expectString,
    projectId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDatasetCommand
 */
export const de_DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datasetArn: __expectString,
    datasetCreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetDescription: __expectString,
    datasetId: __expectString,
    datasetLastUpdateDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetName: __expectString,
    datasetSource: _json,
    datasetStatus: _json,
    datasetVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand
 */
export const de_DescribeDefaultEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultEncryptionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configurationStatus: _json,
    encryptionType: __expectString,
    kmsKeyArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeGatewayCommand
 */
export const de_DescribeGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    gatewayArn: __expectString,
    gatewayCapabilitySummaries: _json,
    gatewayId: __expectString,
    gatewayName: __expectString,
    gatewayPlatform: _json,
    lastUpdateDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand
 */
export const de_DescribeGatewayCapabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayCapabilityConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    capabilityConfiguration: __expectString,
    capabilityNamespace: __expectString,
    capabilitySyncStatus: __expectString,
    gatewayId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeLoggingOptionsCommand
 */
export const de_DescribeLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    loggingOptions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePortalCommand
 */
export const de_DescribePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    alarms: _json,
    notificationSenderEmail: __expectString,
    portalArn: __expectString,
    portalAuthMode: __expectString,
    portalClientId: __expectString,
    portalContactEmail: __expectString,
    portalCreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    portalDescription: __expectString,
    portalId: __expectString,
    portalLastUpdateDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    portalLogoImageLocation: _json,
    portalName: __expectString,
    portalStartUrl: __expectString,
    portalStatus: _json,
    portalType: __expectString,
    portalTypeConfiguration: _json,
    roleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeProjectCommand
 */
export const de_DescribeProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    portalId: __expectString,
    projectArn: __expectString,
    projectCreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    projectDescription: __expectString,
    projectId: __expectString,
    projectLastUpdateDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    projectName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeStorageConfigurationCommand
 */
export const de_DescribeStorageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configurationStatus: _json,
    disassociatedDataStorage: __expectString,
    lastUpdateDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    multiLayerStorage: _json,
    retentionPeriod: _json,
    storageType: __expectString,
    warmTier: __expectString,
    warmTierRetentionPeriod: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTimeSeriesCommand
 */
export const de_DescribeTimeSeriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeSeriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    alias: __expectString,
    assetId: __expectString,
    dataType: __expectString,
    dataTypeSpec: __expectString,
    propertyId: __expectString,
    timeSeriesArn: __expectString,
    timeSeriesCreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    timeSeriesId: __expectString,
    timeSeriesLastUpdateDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateAssetsCommand
 */
export const de_DisassociateAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAssetsCommandOutput> => {
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
 * deserializeAws_restJson1DisassociateTimeSeriesFromAssetPropertyCommand
 */
export const de_DisassociateTimeSeriesFromAssetPropertyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTimeSeriesFromAssetPropertyCommandOutput> => {
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
 * deserializeAws_restJson1ExecuteActionCommand
 */
export const de_ExecuteActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteActionCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExecuteQueryCommand
 */
export const de_ExecuteQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    columns: _json,
    nextToken: __expectString,
    rows: (_) => de_Rows(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssetPropertyAggregatesCommand
 */
export const de_GetAssetPropertyAggregatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyAggregatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    aggregatedValues: (_) => de_AggregatedValues(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssetPropertyValueCommand
 */
export const de_GetAssetPropertyValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyValueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    propertyValue: (_) => de_AssetPropertyValue(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAssetPropertyValueHistoryCommand
 */
export const de_GetAssetPropertyValueHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyValueHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetPropertyValueHistory: (_) => de_AssetPropertyValueHistory(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand
 */
export const de_GetInterpolatedAssetPropertyValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInterpolatedAssetPropertyValuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    interpolatedAssetPropertyValues: (_) => de_InterpolatedAssetPropertyValues(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1InvokeAssistantCommand
 */
export const de_InvokeAssistantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<InvokeAssistantCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cI]: [, output.headers[_xaiaci]],
  });
  const data: any = output.body;
  contents.body = de_ResponseStream(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1ListAccessPoliciesCommand
 */
export const de_ListAccessPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessPolicySummaries: (_) => de_AccessPolicySummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListActionsCommand
 */
export const de_ListActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    actionSummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetModelCompositeModelsCommand
 */
export const de_ListAssetModelCompositeModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetModelCompositeModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetModelCompositeModelSummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetModelPropertiesCommand
 */
export const de_ListAssetModelPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetModelPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetModelPropertySummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetModelsCommand
 */
export const de_ListAssetModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetModelSummaries: (_) => de_AssetModelSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetPropertiesCommand
 */
export const de_ListAssetPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetPropertySummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetRelationshipsCommand
 */
export const de_ListAssetRelationshipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetRelationshipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetRelationshipSummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetsCommand
 */
export const de_ListAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetSummaries: (_) => de_AssetSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssociatedAssetsCommand
 */
export const de_ListAssociatedAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetSummaries: (_) => de_AssociatedAssetsSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBulkImportJobsCommand
 */
export const de_ListBulkImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBulkImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobSummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCompositionRelationshipsCommand
 */
export const de_ListCompositionRelationshipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCompositionRelationshipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    compositionRelationshipSummaries: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDashboardsCommand
 */
export const de_ListDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dashboardSummaries: (_) => de_DashboardSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDatasetsCommand
 */
export const de_ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datasetSummaries: (_) => de_DatasetSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGatewaysCommand
 */
export const de_ListGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    gatewaySummaries: (_) => de_GatewaySummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPortalsCommand
 */
export const de_ListPortalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    portalSummaries: (_) => de_PortalSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProjectAssetsCommand
 */
export const de_ListProjectAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetIds: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProjectsCommand
 */
export const de_ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    projectSummaries: (_) => de_ProjectSummaries(_, context),
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
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTimeSeriesCommand
 */
export const de_ListTimeSeriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTimeSeriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TimeSeriesSummaries: (_) => de_TimeSeriesSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutDefaultEncryptionConfigurationCommand
 */
export const de_PutDefaultEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDefaultEncryptionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configurationStatus: _json,
    encryptionType: __expectString,
    kmsKeyArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutLoggingOptionsCommand
 */
export const de_PutLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
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
 * deserializeAws_restJson1PutStorageConfigurationCommand
 */
export const de_PutStorageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configurationStatus: _json,
    disassociatedDataStorage: __expectString,
    multiLayerStorage: _json,
    retentionPeriod: _json,
    storageType: __expectString,
    warmTier: __expectString,
    warmTierRetentionPeriod: _json,
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
 * deserializeAws_restJson1UpdateAccessPolicyCommand
 */
export const de_UpdateAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessPolicyCommandOutput> => {
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
 * deserializeAws_restJson1UpdateAssetCommand
 */
export const de_UpdateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssetModelCommand
 */
export const de_UpdateAssetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetModelStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssetModelCompositeModelCommand
 */
export const de_UpdateAssetModelCompositeModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetModelCompositeModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assetModelCompositeModelPath: _json,
    assetModelStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAssetPropertyCommand
 */
export const de_UpdateAssetPropertyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetPropertyCommandOutput> => {
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
 * deserializeAws_restJson1UpdateDashboardCommand
 */
export const de_UpdateDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardCommandOutput> => {
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
 * deserializeAws_restJson1UpdateDatasetCommand
 */
export const de_UpdateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datasetArn: __expectString,
    datasetId: __expectString,
    datasetStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGatewayCommand
 */
export const de_UpdateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCommandOutput> => {
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
 * deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand
 */
export const de_UpdateGatewayCapabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCapabilityConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    capabilityNamespace: __expectString,
    capabilitySyncStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePortalCommand
 */
export const de_UpdatePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortalCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    portalStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProjectCommand
 */
export const de_UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
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
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "ServiceUnavailableException":
    case "com.amazonaws.iotsitewise#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.iotsitewise#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.iotsitewise#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "QueryTimeoutException":
    case "com.amazonaws.iotsitewise#QueryTimeoutException":
      throw await de_QueryTimeoutExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotsitewise#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.iotsitewise#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.iotsitewise#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictingOperationExceptionRes
 */
const de_ConflictingOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictingOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceArn: __expectString,
    resourceId: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PreconditionFailedExceptionRes
 */
const de_PreconditionFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionFailedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceArn: __expectString,
    resourceId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new PreconditionFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1QueryTimeoutExceptionRes
 */
const de_QueryTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new QueryTimeoutException({
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
  const doc = take(data, {
    message: __expectString,
    resourceArn: __expectString,
    resourceId: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    resourceName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResponseStream
 */
const de_ResponseStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<ResponseStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["trace"] != null) {
      return {
        trace: await de_Trace_event(event["trace"], context),
      };
    }
    if (event["output"] != null) {
      return {
        output: await de_InvocationOutput_event(event["output"], context),
      };
    }
    if (event["accessDeniedException"] != null) {
      return {
        accessDeniedException: await de_AccessDeniedException_event(event["accessDeniedException"], context),
      };
    }
    if (event["conflictingOperationException"] != null) {
      return {
        conflictingOperationException: await de_ConflictingOperationException_event(
          event["conflictingOperationException"],
          context
        ),
      };
    }
    if (event["internalFailureException"] != null) {
      return {
        internalFailureException: await de_InternalFailureException_event(event["internalFailureException"], context),
      };
    }
    if (event["invalidRequestException"] != null) {
      return {
        invalidRequestException: await de_InvalidRequestException_event(event["invalidRequestException"], context),
      };
    }
    if (event["limitExceededException"] != null) {
      return {
        limitExceededException: await de_LimitExceededException_event(event["limitExceededException"], context),
      };
    }
    if (event["resourceNotFoundException"] != null) {
      return {
        resourceNotFoundException: await de_ResourceNotFoundException_event(
          event["resourceNotFoundException"],
          context
        ),
      };
    }
    if (event["throttlingException"] != null) {
      return {
        throttlingException: await de_ThrottlingException_event(event["throttlingException"], context),
      };
    }
    return { $unknown: output };
  });
};
const de_AccessDeniedException_event = async (output: any, context: __SerdeContext): Promise<AccessDeniedException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_AccessDeniedExceptionRes(parsedOutput, context);
};
const de_ConflictingOperationException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictingOperationException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ConflictingOperationExceptionRes(parsedOutput, context);
};
const de_InternalFailureException_event = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_InternalFailureExceptionRes(parsedOutput, context);
};
const de_InvalidRequestException_event = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_InvalidRequestExceptionRes(parsedOutput, context);
};
const de_InvocationOutput_event = async (output: any, context: __SerdeContext): Promise<InvocationOutput> => {
  const contents: InvocationOutput = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_LimitExceededException_event = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_LimitExceededExceptionRes(parsedOutput, context);
};
const de_ResourceNotFoundException_event = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ResourceNotFoundExceptionRes(parsedOutput, context);
};
const de_ThrottlingException_event = async (output: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_ThrottlingExceptionRes(parsedOutput, context);
};
const de_Trace_event = async (output: any, context: __SerdeContext): Promise<Trace> => {
  const contents: Trace = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
// se_ActionPayload omitted.

// se_AggregateTypes omitted.

// se_Alarms omitted.

// se_AssetModelCompositeModel omitted.

// se_AssetModelCompositeModelDefinition omitted.

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
      return _json(entry);
    });
};

/**
 * serializeAws_restJson1AssetModelCompositeModels
 */
const se_AssetModelCompositeModels = (input: AssetModelCompositeModel[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return _json(entry);
    });
};

// se_AssetModelHierarchies omitted.

// se_AssetModelHierarchy omitted.

// se_AssetModelHierarchyDefinition omitted.

// se_AssetModelHierarchyDefinitions omitted.

// se_AssetModelProperties omitted.

// se_AssetModelProperty omitted.

// se_AssetModelPropertyDefinition omitted.

// se_AssetModelPropertyDefinitions omitted.

// se_AssetModelPropertyPath omitted.

// se_AssetModelPropertyPathSegment omitted.

/**
 * serializeAws_restJson1AssetPropertyValue
 */
const se_AssetPropertyValue = (input: AssetPropertyValue, context: __SerdeContext): any => {
  return take(input, {
    quality: [],
    timestamp: _json,
    value: (_) => se_Variant(_, context),
  });
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

// se_Attribute omitted.

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
  return take(input, {
    aggregateTypes: _json,
    assetId: [],
    endDate: (_) => _.getTime() / 1_000,
    entryId: [],
    propertyAlias: [],
    propertyId: [],
    qualities: _json,
    resolution: [],
    startDate: (_) => _.getTime() / 1_000,
    timeOrdering: [],
  });
};

// se_BatchGetAssetPropertyValueEntries omitted.

// se_BatchGetAssetPropertyValueEntry omitted.

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
  return take(input, {
    assetId: [],
    endDate: (_) => _.getTime() / 1_000,
    entryId: [],
    propertyAlias: [],
    propertyId: [],
    qualities: _json,
    startDate: (_) => _.getTime() / 1_000,
    timeOrdering: [],
  });
};

// se_ColumnNames omitted.

// se_Csv omitted.

// se_CustomerManagedS3Storage omitted.

// se_DatasetSource omitted.

// se_ErrorReportLocation omitted.

// se_ExpressionVariable omitted.

// se_ExpressionVariables omitted.

// se_File omitted.

// se_FileFormat omitted.

// se_Files omitted.

// se_ForwardingConfig omitted.

// se_GatewayPlatform omitted.

// se_Greengrass omitted.

// se_GreengrassV2 omitted.

// se_GroupIdentity omitted.

// se_IAMRoleIdentity omitted.

// se_IAMUserIdentity omitted.

// se_Identity omitted.

// se_IDs omitted.

/**
 * serializeAws_restJson1Image
 */
const se_Image = (input: Image, context: __SerdeContext): any => {
  return take(input, {
    file: (_) => se_ImageFile(_, context),
    id: [],
  });
};

/**
 * serializeAws_restJson1ImageFile
 */
const se_ImageFile = (input: ImageFile, context: __SerdeContext): any => {
  return take(input, {
    data: context.base64Encoder,
    type: [],
  });
};

// se_JobConfiguration omitted.

// se_KendraSourceDetail omitted.

// se_LoggingOptions omitted.

// se_Measurement omitted.

// se_MeasurementProcessingConfig omitted.

// se_Metric omitted.

// se_MetricProcessingConfig omitted.

// se_MetricWindow omitted.

// se_MultiLayerStorage omitted.

// se_Parquet omitted.

// se_PortalResource omitted.

// se_PortalTools omitted.

// se_PortalTypeConfiguration omitted.

// se_PortalTypeEntry omitted.

// se_ProjectResource omitted.

// se_PropertyType omitted.

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
  return take(input, {
    assetId: [],
    entryId: [],
    propertyAlias: [],
    propertyId: [],
    propertyValues: (_) => se_AssetPropertyValues(_, context),
  });
};

// se_Qualities omitted.

// se_Resource omitted.

// se_RetentionPeriod omitted.

// se_SiemensIE omitted.

// se_SourceDetail omitted.

// se_TagMap omitted.

// se_TargetResource omitted.

// se_TimeInNanos omitted.

// se_Transform omitted.

// se_TransformProcessingConfig omitted.

// se_TumblingWindow omitted.

// se_UserIdentity omitted.

// se_VariableValue omitted.

/**
 * serializeAws_restJson1Variant
 */
const se_Variant = (input: Variant, context: __SerdeContext): any => {
  return take(input, {
    booleanValue: [],
    doubleValue: __serializeFloat,
    integerValue: [],
    stringValue: [],
  });
};

// se_WarmTierRetentionPeriod omitted.

/**
 * deserializeAws_restJson1AccessPolicySummaries
 */
const de_AccessPolicySummaries = (output: any, context: __SerdeContext): AccessPolicySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessPolicySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccessPolicySummary
 */
const de_AccessPolicySummary = (output: any, context: __SerdeContext): AccessPolicySummary => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    identity: _json,
    lastUpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    permission: __expectString,
    resource: _json,
  }) as any;
};

// de_ActionDefinition omitted.

// de_ActionDefinitions omitted.

// de_ActionPayload omitted.

// de_ActionSummaries omitted.

// de_ActionSummary omitted.

/**
 * deserializeAws_restJson1AggregatedValue
 */
const de_AggregatedValue = (output: any, context: __SerdeContext): AggregatedValue => {
  return take(output, {
    quality: __expectString,
    timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    value: (_: any) => de_Aggregates(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AggregatedValues
 */
const de_AggregatedValues = (output: any, context: __SerdeContext): AggregatedValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AggregatedValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Aggregates
 */
const de_Aggregates = (output: any, context: __SerdeContext): Aggregates => {
  return take(output, {
    average: __limitedParseDouble,
    count: __limitedParseDouble,
    maximum: __limitedParseDouble,
    minimum: __limitedParseDouble,
    standardDeviation: __limitedParseDouble,
    sum: __limitedParseDouble,
  }) as any;
};

// de_Alarms omitted.

// de_AssetCompositeModel omitted.

// de_AssetCompositeModelPath omitted.

// de_AssetCompositeModelPathSegment omitted.

// de_AssetCompositeModels omitted.

// de_AssetCompositeModelSummaries omitted.

// de_AssetCompositeModelSummary omitted.

// de_AssetErrorDetails omitted.

// de_AssetHierarchies omitted.

// de_AssetHierarchy omitted.

// de_AssetHierarchyInfo omitted.

// de_AssetIDs omitted.

// de_AssetModelCompositeModel omitted.

// de_AssetModelCompositeModelPath omitted.

// de_AssetModelCompositeModelPathSegment omitted.

/**
 * deserializeAws_restJson1AssetModelCompositeModels
 */
const de_AssetModelCompositeModels = (output: any, context: __SerdeContext): AssetModelCompositeModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return _json(entry);
    });
  return retVal;
};

// de_AssetModelCompositeModelSummaries omitted.

// de_AssetModelCompositeModelSummary omitted.

// de_AssetModelHierarchies omitted.

// de_AssetModelHierarchy omitted.

// de_AssetModelProperties omitted.

// de_AssetModelProperty omitted.

// de_AssetModelPropertyPath omitted.

// de_AssetModelPropertyPathSegment omitted.

// de_AssetModelPropertySummaries omitted.

// de_AssetModelPropertySummary omitted.

// de_AssetModelStatus omitted.

/**
 * deserializeAws_restJson1AssetModelSummaries
 */
const de_AssetModelSummaries = (output: any, context: __SerdeContext): AssetModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssetModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetModelSummary
 */
const de_AssetModelSummary = (output: any, context: __SerdeContext): AssetModelSummary => {
  return take(output, {
    arn: __expectString,
    assetModelType: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    externalId: __expectString,
    id: __expectString,
    lastUpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: _json,
    version: __expectString,
  }) as any;
};

// de_AssetProperties omitted.

// de_AssetProperty omitted.

// de_AssetPropertyPath omitted.

// de_AssetPropertyPathSegment omitted.

// de_AssetPropertySummaries omitted.

// de_AssetPropertySummary omitted.

/**
 * deserializeAws_restJson1AssetPropertyValue
 */
const de_AssetPropertyValue = (output: any, context: __SerdeContext): AssetPropertyValue => {
  return take(output, {
    quality: __expectString,
    timestamp: _json,
    value: (_: any) => de_Variant(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AssetPropertyValueHistory
 */
const de_AssetPropertyValueHistory = (output: any, context: __SerdeContext): AssetPropertyValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssetPropertyValue(entry, context);
    });
  return retVal;
};

// de_AssetRelationshipSummaries omitted.

// de_AssetRelationshipSummary omitted.

// de_AssetStatus omitted.

/**
 * deserializeAws_restJson1AssetSummaries
 */
const de_AssetSummaries = (output: any, context: __SerdeContext): AssetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetSummary
 */
const de_AssetSummary = (output: any, context: __SerdeContext): AssetSummary => {
  return take(output, {
    arn: __expectString,
    assetModelId: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    externalId: __expectString,
    hierarchies: _json,
    id: __expectString,
    lastUpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AssociatedAssetsSummaries
 */
const de_AssociatedAssetsSummaries = (output: any, context: __SerdeContext): AssociatedAssetsSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssociatedAssetsSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssociatedAssetsSummary
 */
const de_AssociatedAssetsSummary = (output: any, context: __SerdeContext): AssociatedAssetsSummary => {
  return take(output, {
    arn: __expectString,
    assetModelId: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    externalId: __expectString,
    hierarchies: _json,
    id: __expectString,
    lastUpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: _json,
  }) as any;
};

// de_Attribute omitted.

// de_BatchAssociateProjectAssetsErrors omitted.

// de_BatchDisassociateProjectAssetsErrors omitted.

// de_BatchGetAssetPropertyAggregatesErrorEntries omitted.

// de_BatchGetAssetPropertyAggregatesErrorEntry omitted.

/**
 * deserializeAws_restJson1BatchGetAssetPropertyAggregatesErrorInfo
 */
const de_BatchGetAssetPropertyAggregatesErrorInfo = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyAggregatesErrorInfo => {
  return take(output, {
    errorCode: __expectString,
    errorTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
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
  return take(output, {
    completionStatus: __expectString,
    entryId: __expectString,
    errorInfo: (_: any) => de_BatchGetAssetPropertyAggregatesErrorInfo(_, context),
  }) as any;
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
  return take(output, {
    aggregatedValues: (_: any) => de_AggregatedValues(_, context),
    entryId: __expectString,
  }) as any;
};

// de_BatchGetAssetPropertyValueErrorEntries omitted.

// de_BatchGetAssetPropertyValueErrorEntry omitted.

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueErrorInfo
 */
const de_BatchGetAssetPropertyValueErrorInfo = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueErrorInfo => {
  return take(output, {
    errorCode: __expectString,
    errorTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_BatchGetAssetPropertyValueHistoryErrorEntries omitted.

// de_BatchGetAssetPropertyValueHistoryErrorEntry omitted.

/**
 * deserializeAws_restJson1BatchGetAssetPropertyValueHistoryErrorInfo
 */
const de_BatchGetAssetPropertyValueHistoryErrorInfo = (
  output: any,
  context: __SerdeContext
): BatchGetAssetPropertyValueHistoryErrorInfo => {
  return take(output, {
    errorCode: __expectString,
    errorTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
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
  return take(output, {
    completionStatus: __expectString,
    entryId: __expectString,
    errorInfo: (_: any) => de_BatchGetAssetPropertyValueHistoryErrorInfo(_, context),
  }) as any;
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
  return take(output, {
    assetPropertyValueHistory: (_: any) => de_AssetPropertyValueHistory(_, context),
    entryId: __expectString,
  }) as any;
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
  return take(output, {
    completionStatus: __expectString,
    entryId: __expectString,
    errorInfo: (_: any) => de_BatchGetAssetPropertyValueErrorInfo(_, context),
  }) as any;
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
  return take(output, {
    assetPropertyValue: (_: any) => de_AssetPropertyValue(_, context),
    entryId: __expectString,
  }) as any;
};

// de_BatchPutAssetPropertyError omitted.

// de_BatchPutAssetPropertyErrorEntries omitted.

// de_BatchPutAssetPropertyErrorEntry omitted.

// de_BatchPutAssetPropertyErrors omitted.

// de_Citation omitted.

// de_Citations omitted.

// de_ColumnInfo omitted.

// de_ColumnNames omitted.

// de_ColumnsList omitted.

// de_ColumnType omitted.

// de_CompositeModelProperty omitted.

// de_CompositionDetails omitted.

// de_CompositionRelationship omitted.

// de_CompositionRelationshipItem omitted.

// de_CompositionRelationshipSummaries omitted.

// de_CompositionRelationshipSummary omitted.

// de_ConfigurationErrorDetails omitted.

// de_ConfigurationStatus omitted.

// de_Content omitted.

// de_Csv omitted.

// de_CustomerManagedS3Storage omitted.

/**
 * deserializeAws_restJson1DashboardSummaries
 */
const de_DashboardSummaries = (output: any, context: __SerdeContext): DashboardSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DashboardSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DashboardSummary
 */
const de_DashboardSummary = (output: any, context: __SerdeContext): DashboardSummary => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    lastUpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  }) as any;
};

// de_DataSetReference omitted.

// de_DatasetSource omitted.

// de_DatasetStatus omitted.

/**
 * deserializeAws_restJson1DatasetSummaries
 */
const de_DatasetSummaries = (output: any, context: __SerdeContext): DatasetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatasetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DatasetSummary
 */
const de_DatasetSummary = (output: any, context: __SerdeContext): DatasetSummary => {
  return take(output, {
    arn: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    lastUpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1Datum
 */
const de_Datum = (output: any, context: __SerdeContext): Datum => {
  return take(output, {
    arrayValue: (_: any) => de_DatumList(_, context),
    nullValue: __expectBoolean,
    rowValue: (_: any) => de_Row(_, context),
    scalarValue: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DatumList
 */
const de_DatumList = (output: any, context: __SerdeContext): Datum[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Datum(entry, context);
    });
  return retVal;
};

// de_DetailedError omitted.

// de_DetailedErrors omitted.

// de_ErrorDetails omitted.

// de_ErrorReportLocation omitted.

// de_ExpressionVariable omitted.

// de_ExpressionVariables omitted.

// de_File omitted.

// de_FileFormat omitted.

// de_Files omitted.

// de_ForwardingConfig omitted.

// de_GatewayCapabilitySummaries omitted.

// de_GatewayCapabilitySummary omitted.

// de_GatewayPlatform omitted.

/**
 * deserializeAws_restJson1GatewaySummaries
 */
const de_GatewaySummaries = (output: any, context: __SerdeContext): GatewaySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GatewaySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GatewaySummary
 */
const de_GatewaySummary = (output: any, context: __SerdeContext): GatewaySummary => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    gatewayCapabilitySummaries: _json,
    gatewayId: __expectString,
    gatewayName: __expectString,
    gatewayPlatform: _json,
    lastUpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_Greengrass omitted.

// de_GreengrassV2 omitted.

// de_GroupIdentity omitted.

// de_IAMRoleIdentity omitted.

// de_IAMUserIdentity omitted.

// de_Identity omitted.

// de_ImageLocation omitted.

/**
 * deserializeAws_restJson1InterpolatedAssetPropertyValue
 */
const de_InterpolatedAssetPropertyValue = (output: any, context: __SerdeContext): InterpolatedAssetPropertyValue => {
  return take(output, {
    timestamp: _json,
    value: (_: any) => de_Variant(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1InterpolatedAssetPropertyValues
 */
const de_InterpolatedAssetPropertyValues = (output: any, context: __SerdeContext): InterpolatedAssetPropertyValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InterpolatedAssetPropertyValue(entry, context);
    });
  return retVal;
};

// de_InvocationOutput omitted.

// de_JobConfiguration omitted.

// de_JobSummaries omitted.

// de_JobSummary omitted.

// de_KendraSourceDetail omitted.

// de_Location omitted.

// de_LoggingOptions omitted.

// de_Measurement omitted.

// de_MeasurementProcessingConfig omitted.

// de_Metric omitted.

// de_MetricProcessingConfig omitted.

// de_MetricWindow omitted.

// de_MonitorErrorDetails omitted.

// de_MultiLayerStorage omitted.

// de_Parquet omitted.

// de_PortalResource omitted.

// de_PortalStatus omitted.

/**
 * deserializeAws_restJson1PortalSummaries
 */
const de_PortalSummaries = (output: any, context: __SerdeContext): PortalSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PortalSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PortalSummary
 */
const de_PortalSummary = (output: any, context: __SerdeContext): PortalSummary => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    lastUpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    portalType: __expectString,
    roleArn: __expectString,
    startUrl: __expectString,
    status: _json,
  }) as any;
};

// de_PortalTools omitted.

// de_PortalTypeConfiguration omitted.

// de_PortalTypeEntry omitted.

// de_ProjectResource omitted.

/**
 * deserializeAws_restJson1ProjectSummaries
 */
const de_ProjectSummaries = (output: any, context: __SerdeContext): ProjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProjectSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProjectSummary
 */
const de_ProjectSummary = (output: any, context: __SerdeContext): ProjectSummary => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    lastUpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  }) as any;
};

// de_Property omitted.

// de_PropertyNotification omitted.

// de_PropertyType omitted.

// de_Reference omitted.

// de_Resource omitted.

// de_RetentionPeriod omitted.

/**
 * deserializeAws_restJson1Row
 */
const de_Row = (output: any, context: __SerdeContext): Row => {
  return take(output, {
    data: (_: any) => de_DatumList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1Rows
 */
const de_Rows = (output: any, context: __SerdeContext): Row[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Row(entry, context);
    });
  return retVal;
};

// de_SiemensIE omitted.

// de_Source omitted.

// de_SourceDetail omitted.

// de_TagMap omitted.

// de_TargetResource omitted.

// de_TimeInNanos omitted.

/**
 * deserializeAws_restJson1TimeSeriesSummaries
 */
const de_TimeSeriesSummaries = (output: any, context: __SerdeContext): TimeSeriesSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TimeSeriesSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TimeSeriesSummary
 */
const de_TimeSeriesSummary = (output: any, context: __SerdeContext): TimeSeriesSummary => {
  return take(output, {
    alias: __expectString,
    assetId: __expectString,
    dataType: __expectString,
    dataTypeSpec: __expectString,
    propertyId: __expectString,
    timeSeriesArn: __expectString,
    timeSeriesCreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    timeSeriesId: __expectString,
    timeSeriesLastUpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_Timestamps omitted.

// de_Trace omitted.

// de_Transform omitted.

// de_TransformProcessingConfig omitted.

// de_TumblingWindow omitted.

// de_UserIdentity omitted.

// de_VariableValue omitted.

/**
 * deserializeAws_restJson1Variant
 */
const de_Variant = (output: any, context: __SerdeContext): Variant => {
  return take(output, {
    booleanValue: __expectBoolean,
    doubleValue: __limitedParseDouble,
    integerValue: __expectInt32,
    stringValue: __expectString,
  }) as any;
};

// de_WarmTierRetentionPeriod omitted.

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

const _a = "alias";
const _aI = "assetId";
const _aMI = "assetModelId";
const _aMT = "assetModelTypes";
const _aMV = "assetModelVersion";
const _aP = "aliasPrefix";
const _aT = "aggregateTypes";
const _cI = "conversationId";
const _cT = "clientToken";
const _e = "etag";
const _eD = "endDate";
const _eP = "excludeProperties";
const _eT = "eTag";
const _eTIS = "endTimeInSeconds";
const _eTOIN = "endTimeOffsetInNanos";
const _f = "filter";
const _hI = "hierarchyId";
const _iA = "iamArn";
const _iI = "identityId";
const _iIS = "intervalInSeconds";
const _iM = "ifMatch";
const _iNM = "ifNoneMatch";
const _iT = "identityType";
const _iWIS = "intervalWindowInSeconds";
const _im = "if-match";
const _inm = "if-none-match";
const _mFVT = "matchForVersionType";
const _mR = "maxResults";
const _mfvt = "match-for-version-type";
const _nT = "nextToken";
const _pA = "propertyAlias";
const _pI = "propertyId";
const _pIo = "portalId";
const _pIr = "projectId";
const _q = "qualities";
const _qu = "quality";
const _r = "resolution";
const _rA = "resourceArn";
const _rI = "resourceId";
const _rT = "resourceType";
const _sD = "startDate";
const _sT = "sourceType";
const _sTIS = "startTimeInSeconds";
const _sTOIN = "startTimeOffsetInNanos";
const _t = "type";
const _tD = "traversalDirection";
const _tK = "tagKeys";
const _tO = "timeOrdering";
const _tRI = "targetResourceId";
const _tRT = "targetResourceType";
const _tST = "timeSeriesType";
const _tT = "traversalType";
const _xaiaci = "x-amz-iotsitewise-assistant-conversation-id";
