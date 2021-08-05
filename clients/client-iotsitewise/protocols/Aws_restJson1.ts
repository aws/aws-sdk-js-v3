import { AssociateAssetsCommandInput, AssociateAssetsCommandOutput } from "../commands/AssociateAssetsCommand";
import {
  BatchAssociateProjectAssetsCommandInput,
  BatchAssociateProjectAssetsCommandOutput,
} from "../commands/BatchAssociateProjectAssetsCommand";
import {
  BatchDisassociateProjectAssetsCommandInput,
  BatchDisassociateProjectAssetsCommandOutput,
} from "../commands/BatchDisassociateProjectAssetsCommand";
import {
  BatchPutAssetPropertyValueCommandInput,
  BatchPutAssetPropertyValueCommandOutput,
} from "../commands/BatchPutAssetPropertyValueCommand";
import { CreateAccessPolicyCommandInput, CreateAccessPolicyCommandOutput } from "../commands/CreateAccessPolicyCommand";
import { CreateAssetCommandInput, CreateAssetCommandOutput } from "../commands/CreateAssetCommand";
import { CreateAssetModelCommandInput, CreateAssetModelCommandOutput } from "../commands/CreateAssetModelCommand";
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
import { DisassociateAssetsCommandInput, DisassociateAssetsCommandOutput } from "../commands/DisassociateAssetsCommand";
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
import { ListAssetModelsCommandInput, ListAssetModelsCommandOutput } from "../commands/ListAssetModelsCommand";
import {
  ListAssetRelationshipsCommandInput,
  ListAssetRelationshipsCommandOutput,
} from "../commands/ListAssetRelationshipsCommand";
import { ListAssetsCommandInput, ListAssetsCommandOutput } from "../commands/ListAssetsCommand";
import {
  ListAssociatedAssetsCommandInput,
  ListAssociatedAssetsCommandOutput,
} from "../commands/ListAssociatedAssetsCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "../commands/ListDashboardsCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "../commands/ListGatewaysCommand";
import { ListPortalsCommandInput, ListPortalsCommandOutput } from "../commands/ListPortalsCommand";
import { ListProjectAssetsCommandInput, ListProjectAssetsCommandOutput } from "../commands/ListProjectAssetsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
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
import {
  AccessPolicySummary,
  AggregatedValue,
  Aggregates,
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
  AssetModelStatus,
  AssetModelSummary,
  AssetProperty,
  AssetPropertyValue,
  AssetRelationshipSummary,
  AssetStatus,
  AssetSummary,
  AssociatedAssetsSummary,
  Attribute,
  BatchPutAssetPropertyError,
  BatchPutAssetPropertyErrorEntry,
  CompositeModelProperty,
  ConfigurationErrorDetails,
  ConfigurationStatus,
  ConflictingOperationException,
  CustomerManagedS3Storage,
  DashboardSummary,
  DetailedError,
  ErrorDetails,
  ExpressionVariable,
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
  Resource,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  ThrottlingException,
  TimeInNanos,
  TooManyTagsException,
  Transform,
  TransformProcessingConfig,
  TumblingWindow,
  UnauthorizedException,
  UserIdentity,
  VariableValue,
  Variant,
} from "../models/models_0";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectNumber as __expectNumber,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  handleFloat as __handleFloat,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1AssociateAssetsCommand = async (
  input: AssociateAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}/associate";
  if (input.assetId !== undefined) {
    const labelValue: string = input.assetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assetId.");
    }
    resolvedPath = resolvedPath.replace("{assetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.childAssetId !== undefined && input.childAssetId !== null && { childAssetId: input.childAssetId }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.hierarchyId !== undefined && input.hierarchyId !== null && { hierarchyId: input.hierarchyId }),
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

export const serializeAws_restJson1BatchAssociateProjectAssetsCommand = async (
  input: BatchAssociateProjectAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{projectId}/assets/associate";
  if (input.projectId !== undefined) {
    const labelValue: string = input.projectId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: projectId.");
    }
    resolvedPath = resolvedPath.replace("{projectId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: projectId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.assetIds !== undefined &&
      input.assetIds !== null && { assetIds: serializeAws_restJson1IDs(input.assetIds, context) }),
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

export const serializeAws_restJson1BatchDisassociateProjectAssetsCommand = async (
  input: BatchDisassociateProjectAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{projectId}/assets/disassociate";
  if (input.projectId !== undefined) {
    const labelValue: string = input.projectId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: projectId.");
    }
    resolvedPath = resolvedPath.replace("{projectId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: projectId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.assetIds !== undefined &&
      input.assetIds !== null && { assetIds: serializeAws_restJson1IDs(input.assetIds, context) }),
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

export const serializeAws_restJson1BatchPutAssetPropertyValueCommand = async (
  input: BatchPutAssetPropertyValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/properties";
  let body: any;
  body = JSON.stringify({
    ...(input.entries !== undefined &&
      input.entries !== null && {
        entries: serializeAws_restJson1PutAssetPropertyValueEntries(input.entries, context),
      }),
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

export const serializeAws_restJson1CreateAccessPolicyCommand = async (
  input: CreateAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-policies";
  let body: any;
  body = JSON.stringify({
    ...(input.accessPolicyIdentity !== undefined &&
      input.accessPolicyIdentity !== null && {
        accessPolicyIdentity: serializeAws_restJson1Identity(input.accessPolicyIdentity, context),
      }),
    ...(input.accessPolicyPermission !== undefined &&
      input.accessPolicyPermission !== null && { accessPolicyPermission: input.accessPolicyPermission }),
    ...(input.accessPolicyResource !== undefined &&
      input.accessPolicyResource !== null && {
        accessPolicyResource: serializeAws_restJson1Resource(input.accessPolicyResource, context),
      }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateAssetCommand = async (
  input: CreateAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets";
  let body: any;
  body = JSON.stringify({
    ...(input.assetModelId !== undefined && input.assetModelId !== null && { assetModelId: input.assetModelId }),
    ...(input.assetName !== undefined && input.assetName !== null && { assetName: input.assetName }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateAssetModelCommand = async (
  input: CreateAssetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/asset-models";
  let body: any;
  body = JSON.stringify({
    ...(input.assetModelCompositeModels !== undefined &&
      input.assetModelCompositeModels !== null && {
        assetModelCompositeModels: serializeAws_restJson1AssetModelCompositeModelDefinitions(
          input.assetModelCompositeModels,
          context
        ),
      }),
    ...(input.assetModelDescription !== undefined &&
      input.assetModelDescription !== null && { assetModelDescription: input.assetModelDescription }),
    ...(input.assetModelHierarchies !== undefined &&
      input.assetModelHierarchies !== null && {
        assetModelHierarchies: serializeAws_restJson1AssetModelHierarchyDefinitions(
          input.assetModelHierarchies,
          context
        ),
      }),
    ...(input.assetModelName !== undefined &&
      input.assetModelName !== null && { assetModelName: input.assetModelName }),
    ...(input.assetModelProperties !== undefined &&
      input.assetModelProperties !== null && {
        assetModelProperties: serializeAws_restJson1AssetModelPropertyDefinitions(input.assetModelProperties, context),
      }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateDashboardCommand = async (
  input: CreateDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dashboards";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.dashboardDefinition !== undefined &&
      input.dashboardDefinition !== null && { dashboardDefinition: input.dashboardDefinition }),
    ...(input.dashboardDescription !== undefined &&
      input.dashboardDescription !== null && { dashboardDescription: input.dashboardDescription }),
    ...(input.dashboardName !== undefined && input.dashboardName !== null && { dashboardName: input.dashboardName }),
    ...(input.projectId !== undefined && input.projectId !== null && { projectId: input.projectId }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateGatewayCommand = async (
  input: CreateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/20200301/gateways";
  let body: any;
  body = JSON.stringify({
    ...(input.gatewayName !== undefined && input.gatewayName !== null && { gatewayName: input.gatewayName }),
    ...(input.gatewayPlatform !== undefined &&
      input.gatewayPlatform !== null && {
        gatewayPlatform: serializeAws_restJson1GatewayPlatform(input.gatewayPlatform, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreatePortalCommand = async (
  input: CreatePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals";
  let body: any;
  body = JSON.stringify({
    ...(input.alarms !== undefined &&
      input.alarms !== null && { alarms: serializeAws_restJson1Alarms(input.alarms, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.notificationSenderEmail !== undefined &&
      input.notificationSenderEmail !== null && { notificationSenderEmail: input.notificationSenderEmail }),
    ...(input.portalAuthMode !== undefined &&
      input.portalAuthMode !== null && { portalAuthMode: input.portalAuthMode }),
    ...(input.portalContactEmail !== undefined &&
      input.portalContactEmail !== null && { portalContactEmail: input.portalContactEmail }),
    ...(input.portalDescription !== undefined &&
      input.portalDescription !== null && { portalDescription: input.portalDescription }),
    ...(input.portalLogoImageFile !== undefined &&
      input.portalLogoImageFile !== null && {
        portalLogoImageFile: serializeAws_restJson1ImageFile(input.portalLogoImageFile, context),
      }),
    ...(input.portalName !== undefined && input.portalName !== null && { portalName: input.portalName }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.portalId !== undefined && input.portalId !== null && { portalId: input.portalId }),
    ...(input.projectDescription !== undefined &&
      input.projectDescription !== null && { projectDescription: input.projectDescription }),
    ...(input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1DeleteAccessPolicyCommand = async (
  input: DeleteAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-policies/{accessPolicyId}";
  if (input.accessPolicyId !== undefined) {
    const labelValue: string = input.accessPolicyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accessPolicyId.");
    }
    resolvedPath = resolvedPath.replace("{accessPolicyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accessPolicyId.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
  };
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

export const serializeAws_restJson1DeleteAssetCommand = async (
  input: DeleteAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}";
  if (input.assetId !== undefined) {
    const labelValue: string = input.assetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assetId.");
    }
    resolvedPath = resolvedPath.replace("{assetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assetId.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
  };
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

export const serializeAws_restJson1DeleteAssetModelCommand = async (
  input: DeleteAssetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/asset-models/{assetModelId}";
  if (input.assetModelId !== undefined) {
    const labelValue: string = input.assetModelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assetModelId.");
    }
    resolvedPath = resolvedPath.replace("{assetModelId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assetModelId.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
  };
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

export const serializeAws_restJson1DeleteDashboardCommand = async (
  input: DeleteDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dashboards/{dashboardId}";
  if (input.dashboardId !== undefined) {
    const labelValue: string = input.dashboardId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: dashboardId.");
    }
    resolvedPath = resolvedPath.replace("{dashboardId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: dashboardId.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
  };
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

export const serializeAws_restJson1DeleteGatewayCommand = async (
  input: DeleteGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/20200301/gateways/{gatewayId}";
  if (input.gatewayId !== undefined) {
    const labelValue: string = input.gatewayId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: gatewayId.");
    }
    resolvedPath = resolvedPath.replace("{gatewayId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: gatewayId.");
  }
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

export const serializeAws_restJson1DeletePortalCommand = async (
  input: DeletePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalId}";
  if (input.portalId !== undefined) {
    const labelValue: string = input.portalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: portalId.");
    }
    resolvedPath = resolvedPath.replace("{portalId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: portalId.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
  };
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

export const serializeAws_restJson1DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{projectId}";
  if (input.projectId !== undefined) {
    const labelValue: string = input.projectId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: projectId.");
    }
    resolvedPath = resolvedPath.replace("{projectId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: projectId.");
  }
  const query: any = {
    ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
  };
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

export const serializeAws_restJson1DescribeAccessPolicyCommand = async (
  input: DescribeAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-policies/{accessPolicyId}";
  if (input.accessPolicyId !== undefined) {
    const labelValue: string = input.accessPolicyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accessPolicyId.");
    }
    resolvedPath = resolvedPath.replace("{accessPolicyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accessPolicyId.");
  }
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

export const serializeAws_restJson1DescribeAssetCommand = async (
  input: DescribeAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}";
  if (input.assetId !== undefined) {
    const labelValue: string = input.assetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assetId.");
    }
    resolvedPath = resolvedPath.replace("{assetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assetId.");
  }
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

export const serializeAws_restJson1DescribeAssetModelCommand = async (
  input: DescribeAssetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/asset-models/{assetModelId}";
  if (input.assetModelId !== undefined) {
    const labelValue: string = input.assetModelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assetModelId.");
    }
    resolvedPath = resolvedPath.replace("{assetModelId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assetModelId.");
  }
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

export const serializeAws_restJson1DescribeAssetPropertyCommand = async (
  input: DescribeAssetPropertyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}/properties/{propertyId}";
  if (input.assetId !== undefined) {
    const labelValue: string = input.assetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assetId.");
    }
    resolvedPath = resolvedPath.replace("{assetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assetId.");
  }
  if (input.propertyId !== undefined) {
    const labelValue: string = input.propertyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: propertyId.");
    }
    resolvedPath = resolvedPath.replace("{propertyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: propertyId.");
  }
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

export const serializeAws_restJson1DescribeDashboardCommand = async (
  input: DescribeDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dashboards/{dashboardId}";
  if (input.dashboardId !== undefined) {
    const labelValue: string = input.dashboardId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: dashboardId.");
    }
    resolvedPath = resolvedPath.replace("{dashboardId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: dashboardId.");
  }
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

export const serializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand = async (
  input: DescribeDefaultEncryptionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
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

export const serializeAws_restJson1DescribeGatewayCommand = async (
  input: DescribeGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/20200301/gateways/{gatewayId}";
  if (input.gatewayId !== undefined) {
    const labelValue: string = input.gatewayId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: gatewayId.");
    }
    resolvedPath = resolvedPath.replace("{gatewayId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: gatewayId.");
  }
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

export const serializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand = async (
  input: DescribeGatewayCapabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/20200301/gateways/{gatewayId}/capability/{capabilityNamespace}";
  if (input.gatewayId !== undefined) {
    const labelValue: string = input.gatewayId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: gatewayId.");
    }
    resolvedPath = resolvedPath.replace("{gatewayId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: gatewayId.");
  }
  if (input.capabilityNamespace !== undefined) {
    const labelValue: string = input.capabilityNamespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: capabilityNamespace.");
    }
    resolvedPath = resolvedPath.replace("{capabilityNamespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: capabilityNamespace.");
  }
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

export const serializeAws_restJson1DescribeLoggingOptionsCommand = async (
  input: DescribeLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/logging";
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

export const serializeAws_restJson1DescribePortalCommand = async (
  input: DescribePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalId}";
  if (input.portalId !== undefined) {
    const labelValue: string = input.portalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: portalId.");
    }
    resolvedPath = resolvedPath.replace("{portalId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: portalId.");
  }
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

export const serializeAws_restJson1DescribeProjectCommand = async (
  input: DescribeProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{projectId}";
  if (input.projectId !== undefined) {
    const labelValue: string = input.projectId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: projectId.");
    }
    resolvedPath = resolvedPath.replace("{projectId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: projectId.");
  }
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

export const serializeAws_restJson1DescribeStorageConfigurationCommand = async (
  input: DescribeStorageConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
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

export const serializeAws_restJson1DisassociateAssetsCommand = async (
  input: DisassociateAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}/disassociate";
  if (input.assetId !== undefined) {
    const labelValue: string = input.assetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assetId.");
    }
    resolvedPath = resolvedPath.replace("{assetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.childAssetId !== undefined && input.childAssetId !== null && { childAssetId: input.childAssetId }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.hierarchyId !== undefined && input.hierarchyId !== null && { hierarchyId: input.hierarchyId }),
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

export const serializeAws_restJson1GetAssetPropertyAggregatesCommand = async (
  input: GetAssetPropertyAggregatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/properties/aggregates";
  const query: any = {
    ...(input.assetId !== undefined && { assetId: input.assetId }),
    ...(input.propertyId !== undefined && { propertyId: input.propertyId }),
    ...(input.propertyAlias !== undefined && { propertyAlias: input.propertyAlias }),
    ...(input.aggregateTypes !== undefined && { aggregateTypes: (input.aggregateTypes || []).map((_entry) => _entry) }),
    ...(input.resolution !== undefined && { resolution: input.resolution }),
    ...(input.qualities !== undefined && { qualities: (input.qualities || []).map((_entry) => _entry) }),
    ...(input.startDate !== undefined && { startDate: (input.startDate.toISOString().split(".")[0] + "Z").toString() }),
    ...(input.endDate !== undefined && { endDate: (input.endDate.toISOString().split(".")[0] + "Z").toString() }),
    ...(input.timeOrdering !== undefined && { timeOrdering: input.timeOrdering }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1GetAssetPropertyValueCommand = async (
  input: GetAssetPropertyValueCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/properties/latest";
  const query: any = {
    ...(input.assetId !== undefined && { assetId: input.assetId }),
    ...(input.propertyId !== undefined && { propertyId: input.propertyId }),
    ...(input.propertyAlias !== undefined && { propertyAlias: input.propertyAlias }),
  };
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

export const serializeAws_restJson1GetAssetPropertyValueHistoryCommand = async (
  input: GetAssetPropertyValueHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/properties/history";
  const query: any = {
    ...(input.assetId !== undefined && { assetId: input.assetId }),
    ...(input.propertyId !== undefined && { propertyId: input.propertyId }),
    ...(input.propertyAlias !== undefined && { propertyAlias: input.propertyAlias }),
    ...(input.startDate !== undefined && { startDate: (input.startDate.toISOString().split(".")[0] + "Z").toString() }),
    ...(input.endDate !== undefined && { endDate: (input.endDate.toISOString().split(".")[0] + "Z").toString() }),
    ...(input.qualities !== undefined && { qualities: (input.qualities || []).map((_entry) => _entry) }),
    ...(input.timeOrdering !== undefined && { timeOrdering: input.timeOrdering }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand = async (
  input: GetInterpolatedAssetPropertyValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/properties/interpolated";
  const query: any = {
    ...(input.assetId !== undefined && { assetId: input.assetId }),
    ...(input.propertyId !== undefined && { propertyId: input.propertyId }),
    ...(input.propertyAlias !== undefined && { propertyAlias: input.propertyAlias }),
    ...(input.startTimeInSeconds !== undefined && { startTimeInSeconds: input.startTimeInSeconds.toString() }),
    ...(input.startTimeOffsetInNanos !== undefined && {
      startTimeOffsetInNanos: input.startTimeOffsetInNanos.toString(),
    }),
    ...(input.endTimeInSeconds !== undefined && { endTimeInSeconds: input.endTimeInSeconds.toString() }),
    ...(input.endTimeOffsetInNanos !== undefined && { endTimeOffsetInNanos: input.endTimeOffsetInNanos.toString() }),
    ...(input.quality !== undefined && { quality: input.quality }),
    ...(input.intervalInSeconds !== undefined && { intervalInSeconds: input.intervalInSeconds.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.type !== undefined && { type: input.type }),
  };
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

export const serializeAws_restJson1ListAccessPoliciesCommand = async (
  input: ListAccessPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-policies";
  const query: any = {
    ...(input.identityType !== undefined && { identityType: input.identityType }),
    ...(input.identityId !== undefined && { identityId: input.identityId }),
    ...(input.resourceType !== undefined && { resourceType: input.resourceType }),
    ...(input.resourceId !== undefined && { resourceId: input.resourceId }),
    ...(input.iamArn !== undefined && { iamArn: input.iamArn }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListAssetModelsCommand = async (
  input: ListAssetModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/asset-models";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListAssetRelationshipsCommand = async (
  input: ListAssetRelationshipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}/assetRelationships";
  if (input.assetId !== undefined) {
    const labelValue: string = input.assetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assetId.");
    }
    resolvedPath = resolvedPath.replace("{assetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assetId.");
  }
  const query: any = {
    ...(input.traversalType !== undefined && { traversalType: input.traversalType }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListAssetsCommand = async (
  input: ListAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.assetModelId !== undefined && { assetModelId: input.assetModelId }),
    ...(input.filter !== undefined && { filter: input.filter }),
  };
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

export const serializeAws_restJson1ListAssociatedAssetsCommand = async (
  input: ListAssociatedAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}/hierarchies";
  if (input.assetId !== undefined) {
    const labelValue: string = input.assetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assetId.");
    }
    resolvedPath = resolvedPath.replace("{assetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assetId.");
  }
  const query: any = {
    ...(input.hierarchyId !== undefined && { hierarchyId: input.hierarchyId }),
    ...(input.traversalDirection !== undefined && { traversalDirection: input.traversalDirection }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListDashboardsCommand = async (
  input: ListDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dashboards";
  const query: any = {
    ...(input.projectId !== undefined && { projectId: input.projectId }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListGatewaysCommand = async (
  input: ListGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/20200301/gateways";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListPortalsCommand = async (
  input: ListPortalsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListProjectAssetsCommand = async (
  input: ListProjectAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{projectId}/assets";
  if (input.projectId !== undefined) {
    const labelValue: string = input.projectId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: projectId.");
    }
    resolvedPath = resolvedPath.replace("{projectId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: projectId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects";
  const query: any = {
    ...(input.portalId !== undefined && { portalId: input.portalId }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
  };
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

export const serializeAws_restJson1PutDefaultEncryptionConfigurationCommand = async (
  input: PutDefaultEncryptionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configuration/account/encryption";
  let body: any;
  body = JSON.stringify({
    ...(input.encryptionType !== undefined &&
      input.encryptionType !== null && { encryptionType: input.encryptionType }),
    ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
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

export const serializeAws_restJson1PutLoggingOptionsCommand = async (
  input: PutLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/logging";
  let body: any;
  body = JSON.stringify({
    ...(input.loggingOptions !== undefined &&
      input.loggingOptions !== null && {
        loggingOptions: serializeAws_restJson1LoggingOptions(input.loggingOptions, context),
      }),
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

export const serializeAws_restJson1PutStorageConfigurationCommand = async (
  input: PutStorageConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/configuration/account/storage";
  let body: any;
  body = JSON.stringify({
    ...(input.multiLayerStorage !== undefined &&
      input.multiLayerStorage !== null && {
        multiLayerStorage: serializeAws_restJson1MultiLayerStorage(input.multiLayerStorage, context),
      }),
    ...(input.storageType !== undefined && input.storageType !== null && { storageType: input.storageType }),
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
  };
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

export const serializeAws_restJson1UpdateAccessPolicyCommand = async (
  input: UpdateAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/access-policies/{accessPolicyId}";
  if (input.accessPolicyId !== undefined) {
    const labelValue: string = input.accessPolicyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accessPolicyId.");
    }
    resolvedPath = resolvedPath.replace("{accessPolicyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accessPolicyId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.accessPolicyIdentity !== undefined &&
      input.accessPolicyIdentity !== null && {
        accessPolicyIdentity: serializeAws_restJson1Identity(input.accessPolicyIdentity, context),
      }),
    ...(input.accessPolicyPermission !== undefined &&
      input.accessPolicyPermission !== null && { accessPolicyPermission: input.accessPolicyPermission }),
    ...(input.accessPolicyResource !== undefined &&
      input.accessPolicyResource !== null && {
        accessPolicyResource: serializeAws_restJson1Resource(input.accessPolicyResource, context),
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

export const serializeAws_restJson1UpdateAssetCommand = async (
  input: UpdateAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}";
  if (input.assetId !== undefined) {
    const labelValue: string = input.assetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assetId.");
    }
    resolvedPath = resolvedPath.replace("{assetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assetId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.assetName !== undefined && input.assetName !== null && { assetName: input.assetName }),
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

export const serializeAws_restJson1UpdateAssetModelCommand = async (
  input: UpdateAssetModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/asset-models/{assetModelId}";
  if (input.assetModelId !== undefined) {
    const labelValue: string = input.assetModelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assetModelId.");
    }
    resolvedPath = resolvedPath.replace("{assetModelId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assetModelId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.assetModelCompositeModels !== undefined &&
      input.assetModelCompositeModels !== null && {
        assetModelCompositeModels: serializeAws_restJson1AssetModelCompositeModels(
          input.assetModelCompositeModels,
          context
        ),
      }),
    ...(input.assetModelDescription !== undefined &&
      input.assetModelDescription !== null && { assetModelDescription: input.assetModelDescription }),
    ...(input.assetModelHierarchies !== undefined &&
      input.assetModelHierarchies !== null && {
        assetModelHierarchies: serializeAws_restJson1AssetModelHierarchies(input.assetModelHierarchies, context),
      }),
    ...(input.assetModelName !== undefined &&
      input.assetModelName !== null && { assetModelName: input.assetModelName }),
    ...(input.assetModelProperties !== undefined &&
      input.assetModelProperties !== null && {
        assetModelProperties: serializeAws_restJson1AssetModelProperties(input.assetModelProperties, context),
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

export const serializeAws_restJson1UpdateAssetPropertyCommand = async (
  input: UpdateAssetPropertyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/assets/{assetId}/properties/{propertyId}";
  if (input.assetId !== undefined) {
    const labelValue: string = input.assetId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: assetId.");
    }
    resolvedPath = resolvedPath.replace("{assetId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: assetId.");
  }
  if (input.propertyId !== undefined) {
    const labelValue: string = input.propertyId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: propertyId.");
    }
    resolvedPath = resolvedPath.replace("{propertyId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: propertyId.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.propertyAlias !== undefined && input.propertyAlias !== null && { propertyAlias: input.propertyAlias }),
    ...(input.propertyNotificationState !== undefined &&
      input.propertyNotificationState !== null && { propertyNotificationState: input.propertyNotificationState }),
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

export const serializeAws_restJson1UpdateDashboardCommand = async (
  input: UpdateDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dashboards/{dashboardId}";
  if (input.dashboardId !== undefined) {
    const labelValue: string = input.dashboardId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: dashboardId.");
    }
    resolvedPath = resolvedPath.replace("{dashboardId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: dashboardId.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.dashboardDefinition !== undefined &&
      input.dashboardDefinition !== null && { dashboardDefinition: input.dashboardDefinition }),
    ...(input.dashboardDescription !== undefined &&
      input.dashboardDescription !== null && { dashboardDescription: input.dashboardDescription }),
    ...(input.dashboardName !== undefined && input.dashboardName !== null && { dashboardName: input.dashboardName }),
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

export const serializeAws_restJson1UpdateGatewayCommand = async (
  input: UpdateGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/20200301/gateways/{gatewayId}";
  if (input.gatewayId !== undefined) {
    const labelValue: string = input.gatewayId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: gatewayId.");
    }
    resolvedPath = resolvedPath.replace("{gatewayId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: gatewayId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.gatewayName !== undefined && input.gatewayName !== null && { gatewayName: input.gatewayName }),
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

export const serializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand = async (
  input: UpdateGatewayCapabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/20200301/gateways/{gatewayId}/capability";
  if (input.gatewayId !== undefined) {
    const labelValue: string = input.gatewayId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: gatewayId.");
    }
    resolvedPath = resolvedPath.replace("{gatewayId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: gatewayId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.capabilityConfiguration !== undefined &&
      input.capabilityConfiguration !== null && { capabilityConfiguration: input.capabilityConfiguration }),
    ...(input.capabilityNamespace !== undefined &&
      input.capabilityNamespace !== null && { capabilityNamespace: input.capabilityNamespace }),
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

export const serializeAws_restJson1UpdatePortalCommand = async (
  input: UpdatePortalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/portals/{portalId}";
  if (input.portalId !== undefined) {
    const labelValue: string = input.portalId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: portalId.");
    }
    resolvedPath = resolvedPath.replace("{portalId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: portalId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.alarms !== undefined &&
      input.alarms !== null && { alarms: serializeAws_restJson1Alarms(input.alarms, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.notificationSenderEmail !== undefined &&
      input.notificationSenderEmail !== null && { notificationSenderEmail: input.notificationSenderEmail }),
    ...(input.portalContactEmail !== undefined &&
      input.portalContactEmail !== null && { portalContactEmail: input.portalContactEmail }),
    ...(input.portalDescription !== undefined &&
      input.portalDescription !== null && { portalDescription: input.portalDescription }),
    ...(input.portalLogoImage !== undefined &&
      input.portalLogoImage !== null && {
        portalLogoImage: serializeAws_restJson1Image(input.portalLogoImage, context),
      }),
    ...(input.portalName !== undefined && input.portalName !== null && { portalName: input.portalName }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
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

export const serializeAws_restJson1UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{projectId}";
  if (input.projectId !== undefined) {
    const labelValue: string = input.projectId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: projectId.");
    }
    resolvedPath = resolvedPath.replace("{projectId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: projectId.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.projectDescription !== undefined &&
      input.projectDescription !== null && { projectDescription: input.projectDescription }),
    ...(input.projectName !== undefined && input.projectName !== null && { projectName: input.projectName }),
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

export const deserializeAws_restJson1AssociateAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateAssetsCommandError(output, context);
  }
  const contents: AssociateAssetsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1BatchAssociateProjectAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateProjectAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchAssociateProjectAssetsCommandError(output, context);
  }
  const contents: BatchAssociateProjectAssetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    errors: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.errors !== undefined && data.errors !== null) {
    contents.errors = deserializeAws_restJson1BatchAssociateProjectAssetsErrors(data.errors, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchAssociateProjectAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateProjectAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1BatchDisassociateProjectAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateProjectAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDisassociateProjectAssetsCommandError(output, context);
  }
  const contents: BatchDisassociateProjectAssetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    errors: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.errors !== undefined && data.errors !== null) {
    contents.errors = deserializeAws_restJson1BatchDisassociateProjectAssetsErrors(data.errors, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchDisassociateProjectAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateProjectAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1BatchPutAssetPropertyValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutAssetPropertyValueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchPutAssetPropertyValueCommandError(output, context);
  }
  const contents: BatchPutAssetPropertyValueCommandOutput = {
    $metadata: deserializeMetadata(output),
    errorEntries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.errorEntries !== undefined && data.errorEntries !== null) {
    contents.errorEntries = deserializeAws_restJson1BatchPutAssetPropertyErrorEntries(data.errorEntries, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchPutAssetPropertyValueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutAssetPropertyValueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotsitewise#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPolicyCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAccessPolicyCommandError(output, context);
  }
  const contents: CreateAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    accessPolicyArn: undefined,
    accessPolicyId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.accessPolicyArn !== undefined && data.accessPolicyArn !== null) {
    contents.accessPolicyArn = __expectString(data.accessPolicyArn);
  }
  if (data.accessPolicyId !== undefined && data.accessPolicyId !== null) {
    contents.accessPolicyId = __expectString(data.accessPolicyId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAssetCommandError(output, context);
  }
  const contents: CreateAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetArn: undefined,
    assetId: undefined,
    assetStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetArn !== undefined && data.assetArn !== null) {
    contents.assetArn = __expectString(data.assetArn);
  }
  if (data.assetId !== undefined && data.assetId !== null) {
    contents.assetId = __expectString(data.assetId);
  }
  if (data.assetStatus !== undefined && data.assetStatus !== null) {
    contents.assetStatus = deserializeAws_restJson1AssetStatus(data.assetStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateAssetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAssetModelCommandError(output, context);
  }
  const contents: CreateAssetModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetModelArn: undefined,
    assetModelId: undefined,
    assetModelStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetModelArn !== undefined && data.assetModelArn !== null) {
    contents.assetModelArn = __expectString(data.assetModelArn);
  }
  if (data.assetModelId !== undefined && data.assetModelId !== null) {
    contents.assetModelId = __expectString(data.assetModelId);
  }
  if (data.assetModelStatus !== undefined && data.assetModelStatus !== null) {
    contents.assetModelStatus = deserializeAws_restJson1AssetModelStatus(data.assetModelStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAssetModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAssetModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDashboardCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDashboardCommandError(output, context);
  }
  const contents: CreateDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    dashboardArn: undefined,
    dashboardId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.dashboardArn !== undefined && data.dashboardArn !== null) {
    contents.dashboardArn = __expectString(data.dashboardArn);
  }
  if (data.dashboardId !== undefined && data.dashboardId !== null) {
    contents.dashboardId = __expectString(data.dashboardId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGatewayCommandError(output, context);
  }
  const contents: CreateGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    gatewayArn: undefined,
    gatewayId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.gatewayArn !== undefined && data.gatewayArn !== null) {
    contents.gatewayArn = __expectString(data.gatewayArn);
  }
  if (data.gatewayId !== undefined && data.gatewayId !== null) {
    contents.gatewayId = __expectString(data.gatewayId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreatePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortalCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePortalCommandError(output, context);
  }
  const contents: CreatePortalCommandOutput = {
    $metadata: deserializeMetadata(output),
    portalArn: undefined,
    portalId: undefined,
    portalStartUrl: undefined,
    portalStatus: undefined,
    ssoApplicationId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.portalArn !== undefined && data.portalArn !== null) {
    contents.portalArn = __expectString(data.portalArn);
  }
  if (data.portalId !== undefined && data.portalId !== null) {
    contents.portalId = __expectString(data.portalId);
  }
  if (data.portalStartUrl !== undefined && data.portalStartUrl !== null) {
    contents.portalStartUrl = __expectString(data.portalStartUrl);
  }
  if (data.portalStatus !== undefined && data.portalStatus !== null) {
    contents.portalStatus = deserializeAws_restJson1PortalStatus(data.portalStatus, context);
  }
  if (data.ssoApplicationId !== undefined && data.ssoApplicationId !== null) {
    contents.ssoApplicationId = __expectString(data.ssoApplicationId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePortalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePortalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProjectCommandError(output, context);
  }
  const contents: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    projectArn: undefined,
    projectId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.projectArn !== undefined && data.projectArn !== null) {
    contents.projectArn = __expectString(data.projectArn);
  }
  if (data.projectId !== undefined && data.projectId !== null) {
    contents.projectId = __expectString(data.projectId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAccessPolicyCommandError(output, context);
  }
  const contents: DeleteAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAssetCommandError(output, context);
  }
  const contents: DeleteAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetStatus !== undefined && data.assetStatus !== null) {
    contents.assetStatus = deserializeAws_restJson1AssetStatus(data.assetStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteAssetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAssetModelCommandError(output, context);
  }
  const contents: DeleteAssetModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetModelStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetModelStatus !== undefined && data.assetModelStatus !== null) {
    contents.assetModelStatus = deserializeAws_restJson1AssetModelStatus(data.assetModelStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAssetModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssetModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDashboardCommandError(output, context);
  }
  const contents: DeleteDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGatewayCommandError(output, context);
  }
  const contents: DeleteGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeletePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortalCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePortalCommandError(output, context);
  }
  const contents: DeletePortalCommandOutput = {
    $metadata: deserializeMetadata(output),
    portalStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.portalStatus !== undefined && data.portalStatus !== null) {
    contents.portalStatus = deserializeAws_restJson1PortalStatus(data.portalStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePortalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePortalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteProjectCommandError(output, context);
  }
  const contents: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAccessPolicyCommandError(output, context);
  }
  const contents: DescribeAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    accessPolicyArn: undefined,
    accessPolicyCreationDate: undefined,
    accessPolicyId: undefined,
    accessPolicyIdentity: undefined,
    accessPolicyLastUpdateDate: undefined,
    accessPolicyPermission: undefined,
    accessPolicyResource: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.accessPolicyArn !== undefined && data.accessPolicyArn !== null) {
    contents.accessPolicyArn = __expectString(data.accessPolicyArn);
  }
  if (data.accessPolicyCreationDate !== undefined && data.accessPolicyCreationDate !== null) {
    contents.accessPolicyCreationDate = new Date(Math.round(data.accessPolicyCreationDate * 1000));
  }
  if (data.accessPolicyId !== undefined && data.accessPolicyId !== null) {
    contents.accessPolicyId = __expectString(data.accessPolicyId);
  }
  if (data.accessPolicyIdentity !== undefined && data.accessPolicyIdentity !== null) {
    contents.accessPolicyIdentity = deserializeAws_restJson1Identity(data.accessPolicyIdentity, context);
  }
  if (data.accessPolicyLastUpdateDate !== undefined && data.accessPolicyLastUpdateDate !== null) {
    contents.accessPolicyLastUpdateDate = new Date(Math.round(data.accessPolicyLastUpdateDate * 1000));
  }
  if (data.accessPolicyPermission !== undefined && data.accessPolicyPermission !== null) {
    contents.accessPolicyPermission = __expectString(data.accessPolicyPermission);
  }
  if (data.accessPolicyResource !== undefined && data.accessPolicyResource !== null) {
    contents.accessPolicyResource = deserializeAws_restJson1Resource(data.accessPolicyResource, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAssetCommandError(output, context);
  }
  const contents: DescribeAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetArn: undefined,
    assetCompositeModels: undefined,
    assetCreationDate: undefined,
    assetHierarchies: undefined,
    assetId: undefined,
    assetLastUpdateDate: undefined,
    assetModelId: undefined,
    assetName: undefined,
    assetProperties: undefined,
    assetStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetArn !== undefined && data.assetArn !== null) {
    contents.assetArn = __expectString(data.assetArn);
  }
  if (data.assetCompositeModels !== undefined && data.assetCompositeModels !== null) {
    contents.assetCompositeModels = deserializeAws_restJson1AssetCompositeModels(data.assetCompositeModels, context);
  }
  if (data.assetCreationDate !== undefined && data.assetCreationDate !== null) {
    contents.assetCreationDate = new Date(Math.round(data.assetCreationDate * 1000));
  }
  if (data.assetHierarchies !== undefined && data.assetHierarchies !== null) {
    contents.assetHierarchies = deserializeAws_restJson1AssetHierarchies(data.assetHierarchies, context);
  }
  if (data.assetId !== undefined && data.assetId !== null) {
    contents.assetId = __expectString(data.assetId);
  }
  if (data.assetLastUpdateDate !== undefined && data.assetLastUpdateDate !== null) {
    contents.assetLastUpdateDate = new Date(Math.round(data.assetLastUpdateDate * 1000));
  }
  if (data.assetModelId !== undefined && data.assetModelId !== null) {
    contents.assetModelId = __expectString(data.assetModelId);
  }
  if (data.assetName !== undefined && data.assetName !== null) {
    contents.assetName = __expectString(data.assetName);
  }
  if (data.assetProperties !== undefined && data.assetProperties !== null) {
    contents.assetProperties = deserializeAws_restJson1AssetProperties(data.assetProperties, context);
  }
  if (data.assetStatus !== undefined && data.assetStatus !== null) {
    contents.assetStatus = deserializeAws_restJson1AssetStatus(data.assetStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeAssetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAssetModelCommandError(output, context);
  }
  const contents: DescribeAssetModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetModelArn: undefined,
    assetModelCompositeModels: undefined,
    assetModelCreationDate: undefined,
    assetModelDescription: undefined,
    assetModelHierarchies: undefined,
    assetModelId: undefined,
    assetModelLastUpdateDate: undefined,
    assetModelName: undefined,
    assetModelProperties: undefined,
    assetModelStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetModelArn !== undefined && data.assetModelArn !== null) {
    contents.assetModelArn = __expectString(data.assetModelArn);
  }
  if (data.assetModelCompositeModels !== undefined && data.assetModelCompositeModels !== null) {
    contents.assetModelCompositeModels = deserializeAws_restJson1AssetModelCompositeModels(
      data.assetModelCompositeModels,
      context
    );
  }
  if (data.assetModelCreationDate !== undefined && data.assetModelCreationDate !== null) {
    contents.assetModelCreationDate = new Date(Math.round(data.assetModelCreationDate * 1000));
  }
  if (data.assetModelDescription !== undefined && data.assetModelDescription !== null) {
    contents.assetModelDescription = __expectString(data.assetModelDescription);
  }
  if (data.assetModelHierarchies !== undefined && data.assetModelHierarchies !== null) {
    contents.assetModelHierarchies = deserializeAws_restJson1AssetModelHierarchies(data.assetModelHierarchies, context);
  }
  if (data.assetModelId !== undefined && data.assetModelId !== null) {
    contents.assetModelId = __expectString(data.assetModelId);
  }
  if (data.assetModelLastUpdateDate !== undefined && data.assetModelLastUpdateDate !== null) {
    contents.assetModelLastUpdateDate = new Date(Math.round(data.assetModelLastUpdateDate * 1000));
  }
  if (data.assetModelName !== undefined && data.assetModelName !== null) {
    contents.assetModelName = __expectString(data.assetModelName);
  }
  if (data.assetModelProperties !== undefined && data.assetModelProperties !== null) {
    contents.assetModelProperties = deserializeAws_restJson1AssetModelProperties(data.assetModelProperties, context);
  }
  if (data.assetModelStatus !== undefined && data.assetModelStatus !== null) {
    contents.assetModelStatus = deserializeAws_restJson1AssetModelStatus(data.assetModelStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAssetModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeAssetPropertyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetPropertyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAssetPropertyCommandError(output, context);
  }
  const contents: DescribeAssetPropertyCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetId: undefined,
    assetModelId: undefined,
    assetName: undefined,
    assetProperty: undefined,
    compositeModel: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetId !== undefined && data.assetId !== null) {
    contents.assetId = __expectString(data.assetId);
  }
  if (data.assetModelId !== undefined && data.assetModelId !== null) {
    contents.assetModelId = __expectString(data.assetModelId);
  }
  if (data.assetName !== undefined && data.assetName !== null) {
    contents.assetName = __expectString(data.assetName);
  }
  if (data.assetProperty !== undefined && data.assetProperty !== null) {
    contents.assetProperty = deserializeAws_restJson1Property(data.assetProperty, context);
  }
  if (data.compositeModel !== undefined && data.compositeModel !== null) {
    contents.compositeModel = deserializeAws_restJson1CompositeModelProperty(data.compositeModel, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAssetPropertyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAssetPropertyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDashboardCommandError(output, context);
  }
  const contents: DescribeDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    dashboardArn: undefined,
    dashboardCreationDate: undefined,
    dashboardDefinition: undefined,
    dashboardDescription: undefined,
    dashboardId: undefined,
    dashboardLastUpdateDate: undefined,
    dashboardName: undefined,
    projectId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.dashboardArn !== undefined && data.dashboardArn !== null) {
    contents.dashboardArn = __expectString(data.dashboardArn);
  }
  if (data.dashboardCreationDate !== undefined && data.dashboardCreationDate !== null) {
    contents.dashboardCreationDate = new Date(Math.round(data.dashboardCreationDate * 1000));
  }
  if (data.dashboardDefinition !== undefined && data.dashboardDefinition !== null) {
    contents.dashboardDefinition = __expectString(data.dashboardDefinition);
  }
  if (data.dashboardDescription !== undefined && data.dashboardDescription !== null) {
    contents.dashboardDescription = __expectString(data.dashboardDescription);
  }
  if (data.dashboardId !== undefined && data.dashboardId !== null) {
    contents.dashboardId = __expectString(data.dashboardId);
  }
  if (data.dashboardLastUpdateDate !== undefined && data.dashboardLastUpdateDate !== null) {
    contents.dashboardLastUpdateDate = new Date(Math.round(data.dashboardLastUpdateDate * 1000));
  }
  if (data.dashboardName !== undefined && data.dashboardName !== null) {
    contents.dashboardName = __expectString(data.dashboardName);
  }
  if (data.projectId !== undefined && data.projectId !== null) {
    contents.projectId = __expectString(data.projectId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultEncryptionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommandError(output, context);
  }
  const contents: DescribeDefaultEncryptionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    configurationStatus: undefined,
    encryptionType: undefined,
    kmsKeyArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.configurationStatus !== undefined && data.configurationStatus !== null) {
    contents.configurationStatus = deserializeAws_restJson1ConfigurationStatus(data.configurationStatus, context);
  }
  if (data.encryptionType !== undefined && data.encryptionType !== null) {
    contents.encryptionType = __expectString(data.encryptionType);
  }
  if (data.kmsKeyArn !== undefined && data.kmsKeyArn !== null) {
    contents.kmsKeyArn = __expectString(data.kmsKeyArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDefaultEncryptionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGatewayCommandError(output, context);
  }
  const contents: DescribeGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
    creationDate: undefined,
    gatewayArn: undefined,
    gatewayCapabilitySummaries: undefined,
    gatewayId: undefined,
    gatewayName: undefined,
    gatewayPlatform: undefined,
    lastUpdateDate: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.creationDate !== undefined && data.creationDate !== null) {
    contents.creationDate = new Date(Math.round(data.creationDate * 1000));
  }
  if (data.gatewayArn !== undefined && data.gatewayArn !== null) {
    contents.gatewayArn = __expectString(data.gatewayArn);
  }
  if (data.gatewayCapabilitySummaries !== undefined && data.gatewayCapabilitySummaries !== null) {
    contents.gatewayCapabilitySummaries = deserializeAws_restJson1GatewayCapabilitySummaries(
      data.gatewayCapabilitySummaries,
      context
    );
  }
  if (data.gatewayId !== undefined && data.gatewayId !== null) {
    contents.gatewayId = __expectString(data.gatewayId);
  }
  if (data.gatewayName !== undefined && data.gatewayName !== null) {
    contents.gatewayName = __expectString(data.gatewayName);
  }
  if (data.gatewayPlatform !== undefined && data.gatewayPlatform !== null) {
    contents.gatewayPlatform = deserializeAws_restJson1GatewayPlatform(data.gatewayPlatform, context);
  }
  if (data.lastUpdateDate !== undefined && data.lastUpdateDate !== null) {
    contents.lastUpdateDate = new Date(Math.round(data.lastUpdateDate * 1000));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayCapabilityConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommandError(output, context);
  }
  const contents: DescribeGatewayCapabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    capabilityConfiguration: undefined,
    capabilityNamespace: undefined,
    capabilitySyncStatus: undefined,
    gatewayId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.capabilityConfiguration !== undefined && data.capabilityConfiguration !== null) {
    contents.capabilityConfiguration = __expectString(data.capabilityConfiguration);
  }
  if (data.capabilityNamespace !== undefined && data.capabilityNamespace !== null) {
    contents.capabilityNamespace = __expectString(data.capabilityNamespace);
  }
  if (data.capabilitySyncStatus !== undefined && data.capabilitySyncStatus !== null) {
    contents.capabilitySyncStatus = __expectString(data.capabilitySyncStatus);
  }
  if (data.gatewayId !== undefined && data.gatewayId !== null) {
    contents.gatewayId = __expectString(data.gatewayId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeGatewayCapabilityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGatewayCapabilityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeLoggingOptionsCommandError(output, context);
  }
  const contents: DescribeLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    loggingOptions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.loggingOptions !== undefined && data.loggingOptions !== null) {
    contents.loggingOptions = deserializeAws_restJson1LoggingOptions(data.loggingOptions, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePortalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePortalCommandError(output, context);
  }
  const contents: DescribePortalCommandOutput = {
    $metadata: deserializeMetadata(output),
    alarms: undefined,
    notificationSenderEmail: undefined,
    portalArn: undefined,
    portalAuthMode: undefined,
    portalClientId: undefined,
    portalContactEmail: undefined,
    portalCreationDate: undefined,
    portalDescription: undefined,
    portalId: undefined,
    portalLastUpdateDate: undefined,
    portalLogoImageLocation: undefined,
    portalName: undefined,
    portalStartUrl: undefined,
    portalStatus: undefined,
    roleArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.alarms !== undefined && data.alarms !== null) {
    contents.alarms = deserializeAws_restJson1Alarms(data.alarms, context);
  }
  if (data.notificationSenderEmail !== undefined && data.notificationSenderEmail !== null) {
    contents.notificationSenderEmail = __expectString(data.notificationSenderEmail);
  }
  if (data.portalArn !== undefined && data.portalArn !== null) {
    contents.portalArn = __expectString(data.portalArn);
  }
  if (data.portalAuthMode !== undefined && data.portalAuthMode !== null) {
    contents.portalAuthMode = __expectString(data.portalAuthMode);
  }
  if (data.portalClientId !== undefined && data.portalClientId !== null) {
    contents.portalClientId = __expectString(data.portalClientId);
  }
  if (data.portalContactEmail !== undefined && data.portalContactEmail !== null) {
    contents.portalContactEmail = __expectString(data.portalContactEmail);
  }
  if (data.portalCreationDate !== undefined && data.portalCreationDate !== null) {
    contents.portalCreationDate = new Date(Math.round(data.portalCreationDate * 1000));
  }
  if (data.portalDescription !== undefined && data.portalDescription !== null) {
    contents.portalDescription = __expectString(data.portalDescription);
  }
  if (data.portalId !== undefined && data.portalId !== null) {
    contents.portalId = __expectString(data.portalId);
  }
  if (data.portalLastUpdateDate !== undefined && data.portalLastUpdateDate !== null) {
    contents.portalLastUpdateDate = new Date(Math.round(data.portalLastUpdateDate * 1000));
  }
  if (data.portalLogoImageLocation !== undefined && data.portalLogoImageLocation !== null) {
    contents.portalLogoImageLocation = deserializeAws_restJson1ImageLocation(data.portalLogoImageLocation, context);
  }
  if (data.portalName !== undefined && data.portalName !== null) {
    contents.portalName = __expectString(data.portalName);
  }
  if (data.portalStartUrl !== undefined && data.portalStartUrl !== null) {
    contents.portalStartUrl = __expectString(data.portalStartUrl);
  }
  if (data.portalStatus !== undefined && data.portalStatus !== null) {
    contents.portalStatus = deserializeAws_restJson1PortalStatus(data.portalStatus, context);
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribePortalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePortalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeProjectCommandError(output, context);
  }
  const contents: DescribeProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    portalId: undefined,
    projectArn: undefined,
    projectCreationDate: undefined,
    projectDescription: undefined,
    projectId: undefined,
    projectLastUpdateDate: undefined,
    projectName: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.portalId !== undefined && data.portalId !== null) {
    contents.portalId = __expectString(data.portalId);
  }
  if (data.projectArn !== undefined && data.projectArn !== null) {
    contents.projectArn = __expectString(data.projectArn);
  }
  if (data.projectCreationDate !== undefined && data.projectCreationDate !== null) {
    contents.projectCreationDate = new Date(Math.round(data.projectCreationDate * 1000));
  }
  if (data.projectDescription !== undefined && data.projectDescription !== null) {
    contents.projectDescription = __expectString(data.projectDescription);
  }
  if (data.projectId !== undefined && data.projectId !== null) {
    contents.projectId = __expectString(data.projectId);
  }
  if (data.projectLastUpdateDate !== undefined && data.projectLastUpdateDate !== null) {
    contents.projectLastUpdateDate = new Date(Math.round(data.projectLastUpdateDate * 1000));
  }
  if (data.projectName !== undefined && data.projectName !== null) {
    contents.projectName = __expectString(data.projectName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeStorageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeStorageConfigurationCommandError(output, context);
  }
  const contents: DescribeStorageConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    configurationStatus: undefined,
    lastUpdateDate: undefined,
    multiLayerStorage: undefined,
    storageType: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.configurationStatus !== undefined && data.configurationStatus !== null) {
    contents.configurationStatus = deserializeAws_restJson1ConfigurationStatus(data.configurationStatus, context);
  }
  if (data.lastUpdateDate !== undefined && data.lastUpdateDate !== null) {
    contents.lastUpdateDate = new Date(Math.round(data.lastUpdateDate * 1000));
  }
  if (data.multiLayerStorage !== undefined && data.multiLayerStorage !== null) {
    contents.multiLayerStorage = deserializeAws_restJson1MultiLayerStorage(data.multiLayerStorage, context);
  }
  if (data.storageType !== undefined && data.storageType !== null) {
    contents.storageType = __expectString(data.storageType);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeStorageConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DisassociateAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateAssetsCommandError(output, context);
  }
  const contents: DisassociateAssetsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetAssetPropertyAggregatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyAggregatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssetPropertyAggregatesCommandError(output, context);
  }
  const contents: GetAssetPropertyAggregatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    aggregatedValues: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.aggregatedValues !== undefined && data.aggregatedValues !== null) {
    contents.aggregatedValues = deserializeAws_restJson1AggregatedValues(data.aggregatedValues, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAssetPropertyAggregatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyAggregatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotsitewise#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetAssetPropertyValueCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyValueCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssetPropertyValueCommandError(output, context);
  }
  const contents: GetAssetPropertyValueCommandOutput = {
    $metadata: deserializeMetadata(output),
    propertyValue: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.propertyValue !== undefined && data.propertyValue !== null) {
    contents.propertyValue = deserializeAws_restJson1AssetPropertyValue(data.propertyValue, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAssetPropertyValueCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyValueCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotsitewise#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetAssetPropertyValueHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyValueHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAssetPropertyValueHistoryCommandError(output, context);
  }
  const contents: GetAssetPropertyValueHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetPropertyValueHistory: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetPropertyValueHistory !== undefined && data.assetPropertyValueHistory !== null) {
    contents.assetPropertyValueHistory = deserializeAws_restJson1AssetPropertyValueHistory(
      data.assetPropertyValueHistory,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAssetPropertyValueHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssetPropertyValueHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotsitewise#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetInterpolatedAssetPropertyValuesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInterpolatedAssetPropertyValuesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInterpolatedAssetPropertyValuesCommandError(output, context);
  }
  const contents: GetInterpolatedAssetPropertyValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    interpolatedAssetPropertyValues: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.interpolatedAssetPropertyValues !== undefined && data.interpolatedAssetPropertyValues !== null) {
    contents.interpolatedAssetPropertyValues = deserializeAws_restJson1InterpolatedAssetPropertyValues(
      data.interpolatedAssetPropertyValues,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetInterpolatedAssetPropertyValuesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInterpolatedAssetPropertyValuesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotsitewise#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListAccessPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAccessPoliciesCommandError(output, context);
  }
  const contents: ListAccessPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    accessPolicySummaries: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.accessPolicySummaries !== undefined && data.accessPolicySummaries !== null) {
    contents.accessPolicySummaries = deserializeAws_restJson1AccessPolicySummaries(data.accessPolicySummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAccessPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListAssetModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssetModelsCommandError(output, context);
  }
  const contents: ListAssetModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetModelSummaries: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetModelSummaries !== undefined && data.assetModelSummaries !== null) {
    contents.assetModelSummaries = deserializeAws_restJson1AssetModelSummaries(data.assetModelSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAssetModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListAssetRelationshipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetRelationshipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssetRelationshipsCommandError(output, context);
  }
  const contents: ListAssetRelationshipsCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetRelationshipSummaries: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetRelationshipSummaries !== undefined && data.assetRelationshipSummaries !== null) {
    contents.assetRelationshipSummaries = deserializeAws_restJson1AssetRelationshipSummaries(
      data.assetRelationshipSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAssetRelationshipsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetRelationshipsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssetsCommandError(output, context);
  }
  const contents: ListAssetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetSummaries: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetSummaries !== undefined && data.assetSummaries !== null) {
    contents.assetSummaries = deserializeAws_restJson1AssetSummaries(data.assetSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListAssociatedAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssociatedAssetsCommandError(output, context);
  }
  const contents: ListAssociatedAssetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetSummaries: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetSummaries !== undefined && data.assetSummaries !== null) {
    contents.assetSummaries = deserializeAws_restJson1AssociatedAssetsSummaries(data.assetSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAssociatedAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociatedAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDashboardsCommandError(output, context);
  }
  const contents: ListDashboardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    dashboardSummaries: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.dashboardSummaries !== undefined && data.dashboardSummaries !== null) {
    contents.dashboardSummaries = deserializeAws_restJson1DashboardSummaries(data.dashboardSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDashboardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGatewaysCommandError(output, context);
  }
  const contents: ListGatewaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    gatewaySummaries: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.gatewaySummaries !== undefined && data.gatewaySummaries !== null) {
    contents.gatewaySummaries = deserializeAws_restJson1GatewaySummaries(data.gatewaySummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListPortalsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortalsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPortalsCommandError(output, context);
  }
  const contents: ListPortalsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    portalSummaries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.portalSummaries !== undefined && data.portalSummaries !== null) {
    contents.portalSummaries = deserializeAws_restJson1PortalSummaries(data.portalSummaries, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPortalsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPortalsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListProjectAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProjectAssetsCommandError(output, context);
  }
  const contents: ListProjectAssetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetIds: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetIds !== undefined && data.assetIds !== null) {
    contents.assetIds = deserializeAws_restJson1AssetIDs(data.assetIds, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProjectAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProjectsCommandError(output, context);
  }
  const contents: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    projectSummaries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.projectSummaries !== undefined && data.projectSummaries !== null) {
    contents.projectSummaries = deserializeAws_restJson1ProjectSummaries(data.projectSummaries, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.iotsitewise#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutDefaultEncryptionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDefaultEncryptionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutDefaultEncryptionConfigurationCommandError(output, context);
  }
  const contents: PutDefaultEncryptionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    configurationStatus: undefined,
    encryptionType: undefined,
    kmsKeyArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.configurationStatus !== undefined && data.configurationStatus !== null) {
    contents.configurationStatus = deserializeAws_restJson1ConfigurationStatus(data.configurationStatus, context);
  }
  if (data.encryptionType !== undefined && data.encryptionType !== null) {
    contents.encryptionType = __expectString(data.encryptionType);
  }
  if (data.kmsKeyArn !== undefined && data.kmsKeyArn !== null) {
    contents.kmsKeyArn = __expectString(data.kmsKeyArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutDefaultEncryptionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDefaultEncryptionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutLoggingOptionsCommandError(output, context);
  }
  const contents: PutLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutStorageConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutStorageConfigurationCommandError(output, context);
  }
  const contents: PutStorageConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    configurationStatus: undefined,
    multiLayerStorage: undefined,
    storageType: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.configurationStatus !== undefined && data.configurationStatus !== null) {
    contents.configurationStatus = deserializeAws_restJson1ConfigurationStatus(data.configurationStatus, context);
  }
  if (data.multiLayerStorage !== undefined && data.multiLayerStorage !== null) {
    contents.multiLayerStorage = deserializeAws_restJson1MultiLayerStorage(data.multiLayerStorage, context);
  }
  if (data.storageType !== undefined && data.storageType !== null) {
    contents.storageType = __expectString(data.storageType);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutStorageConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutStorageConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.iotsitewise#TooManyTagsException":
      response = {
        ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.iotsitewise#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.iotsitewise#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAccessPolicyCommandError(output, context);
  }
  const contents: UpdateAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssetCommandError(output, context);
  }
  const contents: UpdateAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetStatus !== undefined && data.assetStatus !== null) {
    contents.assetStatus = deserializeAws_restJson1AssetStatus(data.assetStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateAssetModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssetModelCommandError(output, context);
  }
  const contents: UpdateAssetModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    assetModelStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assetModelStatus !== undefined && data.assetModelStatus !== null) {
    contents.assetModelStatus = deserializeAws_restJson1AssetModelStatus(data.assetModelStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAssetModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotsitewise#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateAssetPropertyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetPropertyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAssetPropertyCommandError(output, context);
  }
  const contents: UpdateAssetPropertyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAssetPropertyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssetPropertyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDashboardCommandError(output, context);
  }
  const contents: UpdateDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGatewayCommandError(output, context);
  }
  const contents: UpdateGatewayCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCapabilityConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommandError(output, context);
  }
  const contents: UpdateGatewayCapabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    capabilityNamespace: undefined,
    capabilitySyncStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.capabilityNamespace !== undefined && data.capabilityNamespace !== null) {
    contents.capabilityNamespace = __expectString(data.capabilityNamespace);
  }
  if (data.capabilitySyncStatus !== undefined && data.capabilitySyncStatus !== null) {
    contents.capabilitySyncStatus = __expectString(data.capabilitySyncStatus);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateGatewayCapabilityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGatewayCapabilityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotsitewise#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdatePortalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortalCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePortalCommandError(output, context);
  }
  const contents: UpdatePortalCommandOutput = {
    $metadata: deserializeMetadata(output),
    portalStatus: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.portalStatus !== undefined && data.portalStatus !== null) {
    contents.portalStatus = deserializeAws_restJson1PortalStatus(data.portalStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdatePortalCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePortalCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictingOperationException":
    case "com.amazonaws.iotsitewise#ConflictingOperationException":
      response = {
        ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateProjectCommandError(output, context);
  }
  const contents: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotsitewise#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotsitewise#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotsitewise#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotsitewise#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1ConflictingOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictingOperationException> => {
  const contents: ConflictingOperationException = {
    name: "ConflictingOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceArn: undefined,
    resourceId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceArn !== undefined && data.resourceArn !== null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  return contents;
};

const deserializeAws_restJson1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
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

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
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

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceArn: undefined,
    resourceId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceArn !== undefined && data.resourceArn !== null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
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

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
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

const deserializeAws_restJson1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceName: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceName !== undefined && data.resourceName !== null) {
    contents.resourceName = __expectString(data.resourceName);
  }
  return contents;
};

const deserializeAws_restJson1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
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

const serializeAws_restJson1Alarms = (input: Alarms, context: __SerdeContext): any => {
  return {
    ...(input.alarmRoleArn !== undefined && input.alarmRoleArn !== null && { alarmRoleArn: input.alarmRoleArn }),
    ...(input.notificationLambdaArn !== undefined &&
      input.notificationLambdaArn !== null && { notificationLambdaArn: input.notificationLambdaArn }),
  };
};

const serializeAws_restJson1AssetModelCompositeModel = (
  input: AssetModelCompositeModel,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.properties !== undefined &&
      input.properties !== null && {
        properties: serializeAws_restJson1AssetModelProperties(input.properties, context),
      }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_restJson1AssetModelCompositeModelDefinition = (
  input: AssetModelCompositeModelDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.properties !== undefined &&
      input.properties !== null && {
        properties: serializeAws_restJson1AssetModelPropertyDefinitions(input.properties, context),
      }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_restJson1AssetModelCompositeModelDefinitions = (
  input: AssetModelCompositeModelDefinition[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AssetModelCompositeModelDefinition(entry, context);
    });
};

const serializeAws_restJson1AssetModelCompositeModels = (
  input: AssetModelCompositeModel[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AssetModelCompositeModel(entry, context);
    });
};

const serializeAws_restJson1AssetModelHierarchies = (input: AssetModelHierarchy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AssetModelHierarchy(entry, context);
    });
};

const serializeAws_restJson1AssetModelHierarchy = (input: AssetModelHierarchy, context: __SerdeContext): any => {
  return {
    ...(input.childAssetModelId !== undefined &&
      input.childAssetModelId !== null && { childAssetModelId: input.childAssetModelId }),
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_restJson1AssetModelHierarchyDefinition = (
  input: AssetModelHierarchyDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.childAssetModelId !== undefined &&
      input.childAssetModelId !== null && { childAssetModelId: input.childAssetModelId }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_restJson1AssetModelHierarchyDefinitions = (
  input: AssetModelHierarchyDefinition[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AssetModelHierarchyDefinition(entry, context);
    });
};

const serializeAws_restJson1AssetModelProperties = (input: AssetModelProperty[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AssetModelProperty(entry, context);
    });
};

const serializeAws_restJson1AssetModelProperty = (input: AssetModelProperty, context: __SerdeContext): any => {
  return {
    ...(input.dataType !== undefined && input.dataType !== null && { dataType: input.dataType }),
    ...(input.dataTypeSpec !== undefined && input.dataTypeSpec !== null && { dataTypeSpec: input.dataTypeSpec }),
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.type !== undefined &&
      input.type !== null && { type: serializeAws_restJson1PropertyType(input.type, context) }),
    ...(input.unit !== undefined && input.unit !== null && { unit: input.unit }),
  };
};

const serializeAws_restJson1AssetModelPropertyDefinition = (
  input: AssetModelPropertyDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.dataType !== undefined && input.dataType !== null && { dataType: input.dataType }),
    ...(input.dataTypeSpec !== undefined && input.dataTypeSpec !== null && { dataTypeSpec: input.dataTypeSpec }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.type !== undefined &&
      input.type !== null && { type: serializeAws_restJson1PropertyType(input.type, context) }),
    ...(input.unit !== undefined && input.unit !== null && { unit: input.unit }),
  };
};

const serializeAws_restJson1AssetModelPropertyDefinitions = (
  input: AssetModelPropertyDefinition[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AssetModelPropertyDefinition(entry, context);
    });
};

const serializeAws_restJson1AssetPropertyValue = (input: AssetPropertyValue, context: __SerdeContext): any => {
  return {
    ...(input.quality !== undefined && input.quality !== null && { quality: input.quality }),
    ...(input.timestamp !== undefined &&
      input.timestamp !== null && { timestamp: serializeAws_restJson1TimeInNanos(input.timestamp, context) }),
    ...(input.value !== undefined &&
      input.value !== null && { value: serializeAws_restJson1Variant(input.value, context) }),
  };
};

const serializeAws_restJson1AssetPropertyValues = (input: AssetPropertyValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AssetPropertyValue(entry, context);
    });
};

const serializeAws_restJson1Attribute = (input: Attribute, context: __SerdeContext): any => {
  return {
    ...(input.defaultValue !== undefined && input.defaultValue !== null && { defaultValue: input.defaultValue }),
  };
};

const serializeAws_restJson1CustomerManagedS3Storage = (
  input: CustomerManagedS3Storage,
  context: __SerdeContext
): any => {
  return {
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.s3ResourceArn !== undefined && input.s3ResourceArn !== null && { s3ResourceArn: input.s3ResourceArn }),
  };
};

const serializeAws_restJson1ExpressionVariable = (input: ExpressionVariable, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined &&
      input.value !== null && { value: serializeAws_restJson1VariableValue(input.value, context) }),
  };
};

const serializeAws_restJson1ExpressionVariables = (input: ExpressionVariable[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ExpressionVariable(entry, context);
    });
};

const serializeAws_restJson1ForwardingConfig = (input: ForwardingConfig, context: __SerdeContext): any => {
  return {
    ...(input.state !== undefined && input.state !== null && { state: input.state }),
  };
};

const serializeAws_restJson1GatewayPlatform = (input: GatewayPlatform, context: __SerdeContext): any => {
  return {
    ...(input.greengrass !== undefined &&
      input.greengrass !== null && { greengrass: serializeAws_restJson1Greengrass(input.greengrass, context) }),
    ...(input.greengrassV2 !== undefined &&
      input.greengrassV2 !== null && { greengrassV2: serializeAws_restJson1GreengrassV2(input.greengrassV2, context) }),
  };
};

const serializeAws_restJson1Greengrass = (input: Greengrass, context: __SerdeContext): any => {
  return {
    ...(input.groupArn !== undefined && input.groupArn !== null && { groupArn: input.groupArn }),
  };
};

const serializeAws_restJson1GreengrassV2 = (input: GreengrassV2, context: __SerdeContext): any => {
  return {
    ...(input.coreDeviceThingName !== undefined &&
      input.coreDeviceThingName !== null && { coreDeviceThingName: input.coreDeviceThingName }),
  };
};

const serializeAws_restJson1GroupIdentity = (input: GroupIdentity, context: __SerdeContext): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_restJson1IAMRoleIdentity = (input: IAMRoleIdentity, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_restJson1IAMUserIdentity = (input: IAMUserIdentity, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_restJson1Identity = (input: Identity, context: __SerdeContext): any => {
  return {
    ...(input.group !== undefined &&
      input.group !== null && { group: serializeAws_restJson1GroupIdentity(input.group, context) }),
    ...(input.iamRole !== undefined &&
      input.iamRole !== null && { iamRole: serializeAws_restJson1IAMRoleIdentity(input.iamRole, context) }),
    ...(input.iamUser !== undefined &&
      input.iamUser !== null && { iamUser: serializeAws_restJson1IAMUserIdentity(input.iamUser, context) }),
    ...(input.user !== undefined &&
      input.user !== null && { user: serializeAws_restJson1UserIdentity(input.user, context) }),
  };
};

const serializeAws_restJson1IDs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Image = (input: Image, context: __SerdeContext): any => {
  return {
    ...(input.file !== undefined &&
      input.file !== null && { file: serializeAws_restJson1ImageFile(input.file, context) }),
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_restJson1ImageFile = (input: ImageFile, context: __SerdeContext): any => {
  return {
    ...(input.data !== undefined && input.data !== null && { data: context.base64Encoder(input.data) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_restJson1LoggingOptions = (input: LoggingOptions, context: __SerdeContext): any => {
  return {
    ...(input.level !== undefined && input.level !== null && { level: input.level }),
  };
};

const serializeAws_restJson1Measurement = (input: Measurement, context: __SerdeContext): any => {
  return {
    ...(input.processingConfig !== undefined &&
      input.processingConfig !== null && {
        processingConfig: serializeAws_restJson1MeasurementProcessingConfig(input.processingConfig, context),
      }),
  };
};

const serializeAws_restJson1MeasurementProcessingConfig = (
  input: MeasurementProcessingConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.forwardingConfig !== undefined &&
      input.forwardingConfig !== null && {
        forwardingConfig: serializeAws_restJson1ForwardingConfig(input.forwardingConfig, context),
      }),
  };
};

const serializeAws_restJson1Metric = (input: Metric, context: __SerdeContext): any => {
  return {
    ...(input.expression !== undefined && input.expression !== null && { expression: input.expression }),
    ...(input.processingConfig !== undefined &&
      input.processingConfig !== null && {
        processingConfig: serializeAws_restJson1MetricProcessingConfig(input.processingConfig, context),
      }),
    ...(input.variables !== undefined &&
      input.variables !== null && { variables: serializeAws_restJson1ExpressionVariables(input.variables, context) }),
    ...(input.window !== undefined &&
      input.window !== null && { window: serializeAws_restJson1MetricWindow(input.window, context) }),
  };
};

const serializeAws_restJson1MetricProcessingConfig = (input: MetricProcessingConfig, context: __SerdeContext): any => {
  return {
    ...(input.computeLocation !== undefined &&
      input.computeLocation !== null && { computeLocation: input.computeLocation }),
  };
};

const serializeAws_restJson1MetricWindow = (input: MetricWindow, context: __SerdeContext): any => {
  return {
    ...(input.tumbling !== undefined &&
      input.tumbling !== null && { tumbling: serializeAws_restJson1TumblingWindow(input.tumbling, context) }),
  };
};

const serializeAws_restJson1MultiLayerStorage = (input: MultiLayerStorage, context: __SerdeContext): any => {
  return {
    ...(input.customerManagedS3Storage !== undefined &&
      input.customerManagedS3Storage !== null && {
        customerManagedS3Storage: serializeAws_restJson1CustomerManagedS3Storage(
          input.customerManagedS3Storage,
          context
        ),
      }),
  };
};

const serializeAws_restJson1PortalResource = (input: PortalResource, context: __SerdeContext): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_restJson1ProjectResource = (input: ProjectResource, context: __SerdeContext): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_restJson1PropertyType = (input: PropertyType, context: __SerdeContext): any => {
  return {
    ...(input.attribute !== undefined &&
      input.attribute !== null && { attribute: serializeAws_restJson1Attribute(input.attribute, context) }),
    ...(input.measurement !== undefined &&
      input.measurement !== null && { measurement: serializeAws_restJson1Measurement(input.measurement, context) }),
    ...(input.metric !== undefined &&
      input.metric !== null && { metric: serializeAws_restJson1Metric(input.metric, context) }),
    ...(input.transform !== undefined &&
      input.transform !== null && { transform: serializeAws_restJson1Transform(input.transform, context) }),
  };
};

const serializeAws_restJson1PutAssetPropertyValueEntries = (
  input: PutAssetPropertyValueEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1PutAssetPropertyValueEntry(entry, context);
    });
};

const serializeAws_restJson1PutAssetPropertyValueEntry = (
  input: PutAssetPropertyValueEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.assetId !== undefined && input.assetId !== null && { assetId: input.assetId }),
    ...(input.entryId !== undefined && input.entryId !== null && { entryId: input.entryId }),
    ...(input.propertyAlias !== undefined && input.propertyAlias !== null && { propertyAlias: input.propertyAlias }),
    ...(input.propertyId !== undefined && input.propertyId !== null && { propertyId: input.propertyId }),
    ...(input.propertyValues !== undefined &&
      input.propertyValues !== null && {
        propertyValues: serializeAws_restJson1AssetPropertyValues(input.propertyValues, context),
      }),
  };
};

const serializeAws_restJson1Resource = (input: Resource, context: __SerdeContext): any => {
  return {
    ...(input.portal !== undefined &&
      input.portal !== null && { portal: serializeAws_restJson1PortalResource(input.portal, context) }),
    ...(input.project !== undefined &&
      input.project !== null && { project: serializeAws_restJson1ProjectResource(input.project, context) }),
  };
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1TimeInNanos = (input: TimeInNanos, context: __SerdeContext): any => {
  return {
    ...(input.offsetInNanos !== undefined && input.offsetInNanos !== null && { offsetInNanos: input.offsetInNanos }),
    ...(input.timeInSeconds !== undefined && input.timeInSeconds !== null && { timeInSeconds: input.timeInSeconds }),
  };
};

const serializeAws_restJson1Transform = (input: Transform, context: __SerdeContext): any => {
  return {
    ...(input.expression !== undefined && input.expression !== null && { expression: input.expression }),
    ...(input.processingConfig !== undefined &&
      input.processingConfig !== null && {
        processingConfig: serializeAws_restJson1TransformProcessingConfig(input.processingConfig, context),
      }),
    ...(input.variables !== undefined &&
      input.variables !== null && { variables: serializeAws_restJson1ExpressionVariables(input.variables, context) }),
  };
};

const serializeAws_restJson1TransformProcessingConfig = (
  input: TransformProcessingConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.computeLocation !== undefined &&
      input.computeLocation !== null && { computeLocation: input.computeLocation }),
    ...(input.forwardingConfig !== undefined &&
      input.forwardingConfig !== null && {
        forwardingConfig: serializeAws_restJson1ForwardingConfig(input.forwardingConfig, context),
      }),
  };
};

const serializeAws_restJson1TumblingWindow = (input: TumblingWindow, context: __SerdeContext): any => {
  return {
    ...(input.interval !== undefined && input.interval !== null && { interval: input.interval }),
    ...(input.offset !== undefined && input.offset !== null && { offset: input.offset }),
  };
};

const serializeAws_restJson1UserIdentity = (input: UserIdentity, context: __SerdeContext): any => {
  return {
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
  };
};

const serializeAws_restJson1VariableValue = (input: VariableValue, context: __SerdeContext): any => {
  return {
    ...(input.hierarchyId !== undefined && input.hierarchyId !== null && { hierarchyId: input.hierarchyId }),
    ...(input.propertyId !== undefined && input.propertyId !== null && { propertyId: input.propertyId }),
  };
};

const serializeAws_restJson1Variant = (input: Variant, context: __SerdeContext): any => {
  return {
    ...(input.booleanValue !== undefined && input.booleanValue !== null && { booleanValue: input.booleanValue }),
    ...(input.doubleValue !== undefined &&
      input.doubleValue !== null && { doubleValue: __serializeFloat(input.doubleValue) }),
    ...(input.integerValue !== undefined && input.integerValue !== null && { integerValue: input.integerValue }),
    ...(input.stringValue !== undefined && input.stringValue !== null && { stringValue: input.stringValue }),
  };
};

const deserializeAws_restJson1AccessPolicySummaries = (output: any, context: __SerdeContext): AccessPolicySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AccessPolicySummary(entry, context);
    });
};

const deserializeAws_restJson1AccessPolicySummary = (output: any, context: __SerdeContext): AccessPolicySummary => {
  return {
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    id: __expectString(output.id),
    identity:
      output.identity !== undefined && output.identity !== null
        ? deserializeAws_restJson1Identity(output.identity, context)
        : undefined,
    lastUpdateDate:
      output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
        ? new Date(Math.round(output.lastUpdateDate * 1000))
        : undefined,
    permission: __expectString(output.permission),
    resource:
      output.resource !== undefined && output.resource !== null
        ? deserializeAws_restJson1Resource(output.resource, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AggregatedValue = (output: any, context: __SerdeContext): AggregatedValue => {
  return {
    quality: __expectString(output.quality),
    timestamp:
      output.timestamp !== undefined && output.timestamp !== null
        ? new Date(Math.round(output.timestamp * 1000))
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? deserializeAws_restJson1Aggregates(output.value, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AggregatedValues = (output: any, context: __SerdeContext): AggregatedValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AggregatedValue(entry, context);
    });
};

const deserializeAws_restJson1Aggregates = (output: any, context: __SerdeContext): Aggregates => {
  return {
    average: __handleFloat(output.average),
    count: __handleFloat(output.count),
    maximum: __handleFloat(output.maximum),
    minimum: __handleFloat(output.minimum),
    standardDeviation: __handleFloat(output.standardDeviation),
    sum: __handleFloat(output.sum),
  } as any;
};

const deserializeAws_restJson1Alarms = (output: any, context: __SerdeContext): Alarms => {
  return {
    alarmRoleArn: __expectString(output.alarmRoleArn),
    notificationLambdaArn: __expectString(output.notificationLambdaArn),
  } as any;
};

const deserializeAws_restJson1AssetCompositeModel = (output: any, context: __SerdeContext): AssetCompositeModel => {
  return {
    description: __expectString(output.description),
    name: __expectString(output.name),
    properties:
      output.properties !== undefined && output.properties !== null
        ? deserializeAws_restJson1AssetProperties(output.properties, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1AssetCompositeModels = (output: any, context: __SerdeContext): AssetCompositeModel[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetCompositeModel(entry, context);
    });
};

const deserializeAws_restJson1AssetErrorDetails = (output: any, context: __SerdeContext): AssetErrorDetails => {
  return {
    assetId: __expectString(output.assetId),
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1AssetHierarchies = (output: any, context: __SerdeContext): AssetHierarchy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetHierarchy(entry, context);
    });
};

const deserializeAws_restJson1AssetHierarchy = (output: any, context: __SerdeContext): AssetHierarchy => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1AssetHierarchyInfo = (output: any, context: __SerdeContext): AssetHierarchyInfo => {
  return {
    childAssetId: __expectString(output.childAssetId),
    parentAssetId: __expectString(output.parentAssetId),
  } as any;
};

const deserializeAws_restJson1AssetIDs = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1AssetModelCompositeModel = (
  output: any,
  context: __SerdeContext
): AssetModelCompositeModel => {
  return {
    description: __expectString(output.description),
    name: __expectString(output.name),
    properties:
      output.properties !== undefined && output.properties !== null
        ? deserializeAws_restJson1AssetModelProperties(output.properties, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1AssetModelCompositeModels = (
  output: any,
  context: __SerdeContext
): AssetModelCompositeModel[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetModelCompositeModel(entry, context);
    });
};

const deserializeAws_restJson1AssetModelHierarchies = (output: any, context: __SerdeContext): AssetModelHierarchy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetModelHierarchy(entry, context);
    });
};

const deserializeAws_restJson1AssetModelHierarchy = (output: any, context: __SerdeContext): AssetModelHierarchy => {
  return {
    childAssetModelId: __expectString(output.childAssetModelId),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1AssetModelProperties = (output: any, context: __SerdeContext): AssetModelProperty[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetModelProperty(entry, context);
    });
};

const deserializeAws_restJson1AssetModelProperty = (output: any, context: __SerdeContext): AssetModelProperty => {
  return {
    dataType: __expectString(output.dataType),
    dataTypeSpec: __expectString(output.dataTypeSpec),
    id: __expectString(output.id),
    name: __expectString(output.name),
    type:
      output.type !== undefined && output.type !== null
        ? deserializeAws_restJson1PropertyType(output.type, context)
        : undefined,
    unit: __expectString(output.unit),
  } as any;
};

const deserializeAws_restJson1AssetModelStatus = (output: any, context: __SerdeContext): AssetModelStatus => {
  return {
    error:
      output.error !== undefined && output.error !== null
        ? deserializeAws_restJson1ErrorDetails(output.error, context)
        : undefined,
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_restJson1AssetModelSummaries = (output: any, context: __SerdeContext): AssetModelSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetModelSummary(entry, context);
    });
};

const deserializeAws_restJson1AssetModelSummary = (output: any, context: __SerdeContext): AssetModelSummary => {
  return {
    arn: __expectString(output.arn),
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdateDate:
      output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
        ? new Date(Math.round(output.lastUpdateDate * 1000))
        : undefined,
    name: __expectString(output.name),
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1AssetModelStatus(output.status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AssetProperties = (output: any, context: __SerdeContext): AssetProperty[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetProperty(entry, context);
    });
};

const deserializeAws_restJson1AssetProperty = (output: any, context: __SerdeContext): AssetProperty => {
  return {
    alias: __expectString(output.alias),
    dataType: __expectString(output.dataType),
    dataTypeSpec: __expectString(output.dataTypeSpec),
    id: __expectString(output.id),
    name: __expectString(output.name),
    notification:
      output.notification !== undefined && output.notification !== null
        ? deserializeAws_restJson1PropertyNotification(output.notification, context)
        : undefined,
    unit: __expectString(output.unit),
  } as any;
};

const deserializeAws_restJson1AssetPropertyValue = (output: any, context: __SerdeContext): AssetPropertyValue => {
  return {
    quality: __expectString(output.quality),
    timestamp:
      output.timestamp !== undefined && output.timestamp !== null
        ? deserializeAws_restJson1TimeInNanos(output.timestamp, context)
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? deserializeAws_restJson1Variant(output.value, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AssetPropertyValueHistory = (
  output: any,
  context: __SerdeContext
): AssetPropertyValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetPropertyValue(entry, context);
    });
};

const deserializeAws_restJson1AssetRelationshipSummaries = (
  output: any,
  context: __SerdeContext
): AssetRelationshipSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetRelationshipSummary(entry, context);
    });
};

const deserializeAws_restJson1AssetRelationshipSummary = (
  output: any,
  context: __SerdeContext
): AssetRelationshipSummary => {
  return {
    hierarchyInfo:
      output.hierarchyInfo !== undefined && output.hierarchyInfo !== null
        ? deserializeAws_restJson1AssetHierarchyInfo(output.hierarchyInfo, context)
        : undefined,
    relationshipType: __expectString(output.relationshipType),
  } as any;
};

const deserializeAws_restJson1AssetStatus = (output: any, context: __SerdeContext): AssetStatus => {
  return {
    error:
      output.error !== undefined && output.error !== null
        ? deserializeAws_restJson1ErrorDetails(output.error, context)
        : undefined,
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_restJson1AssetSummaries = (output: any, context: __SerdeContext): AssetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetSummary(entry, context);
    });
};

const deserializeAws_restJson1AssetSummary = (output: any, context: __SerdeContext): AssetSummary => {
  return {
    arn: __expectString(output.arn),
    assetModelId: __expectString(output.assetModelId),
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    hierarchies:
      output.hierarchies !== undefined && output.hierarchies !== null
        ? deserializeAws_restJson1AssetHierarchies(output.hierarchies, context)
        : undefined,
    id: __expectString(output.id),
    lastUpdateDate:
      output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
        ? new Date(Math.round(output.lastUpdateDate * 1000))
        : undefined,
    name: __expectString(output.name),
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1AssetStatus(output.status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AssociatedAssetsSummaries = (
  output: any,
  context: __SerdeContext
): AssociatedAssetsSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssociatedAssetsSummary(entry, context);
    });
};

const deserializeAws_restJson1AssociatedAssetsSummary = (
  output: any,
  context: __SerdeContext
): AssociatedAssetsSummary => {
  return {
    arn: __expectString(output.arn),
    assetModelId: __expectString(output.assetModelId),
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    hierarchies:
      output.hierarchies !== undefined && output.hierarchies !== null
        ? deserializeAws_restJson1AssetHierarchies(output.hierarchies, context)
        : undefined,
    id: __expectString(output.id),
    lastUpdateDate:
      output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
        ? new Date(Math.round(output.lastUpdateDate * 1000))
        : undefined,
    name: __expectString(output.name),
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1AssetStatus(output.status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    defaultValue: __expectString(output.defaultValue),
  } as any;
};

const deserializeAws_restJson1BatchAssociateProjectAssetsErrors = (
  output: any,
  context: __SerdeContext
): AssetErrorDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetErrorDetails(entry, context);
    });
};

const deserializeAws_restJson1BatchDisassociateProjectAssetsErrors = (
  output: any,
  context: __SerdeContext
): AssetErrorDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetErrorDetails(entry, context);
    });
};

const deserializeAws_restJson1BatchPutAssetPropertyError = (
  output: any,
  context: __SerdeContext
): BatchPutAssetPropertyError => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    timestamps:
      output.timestamps !== undefined && output.timestamps !== null
        ? deserializeAws_restJson1Timestamps(output.timestamps, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchPutAssetPropertyErrorEntries = (
  output: any,
  context: __SerdeContext
): BatchPutAssetPropertyErrorEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchPutAssetPropertyErrorEntry(entry, context);
    });
};

const deserializeAws_restJson1BatchPutAssetPropertyErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchPutAssetPropertyErrorEntry => {
  return {
    entryId: __expectString(output.entryId),
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_restJson1BatchPutAssetPropertyErrors(output.errors, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchPutAssetPropertyErrors = (
  output: any,
  context: __SerdeContext
): BatchPutAssetPropertyError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchPutAssetPropertyError(entry, context);
    });
};

const deserializeAws_restJson1CompositeModelProperty = (
  output: any,
  context: __SerdeContext
): CompositeModelProperty => {
  return {
    assetProperty:
      output.assetProperty !== undefined && output.assetProperty !== null
        ? deserializeAws_restJson1Property(output.assetProperty, context)
        : undefined,
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ConfigurationErrorDetails = (
  output: any,
  context: __SerdeContext
): ConfigurationErrorDetails => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1ConfigurationStatus = (output: any, context: __SerdeContext): ConfigurationStatus => {
  return {
    error:
      output.error !== undefined && output.error !== null
        ? deserializeAws_restJson1ConfigurationErrorDetails(output.error, context)
        : undefined,
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_restJson1CustomerManagedS3Storage = (
  output: any,
  context: __SerdeContext
): CustomerManagedS3Storage => {
  return {
    roleArn: __expectString(output.roleArn),
    s3ResourceArn: __expectString(output.s3ResourceArn),
  } as any;
};

const deserializeAws_restJson1DashboardSummaries = (output: any, context: __SerdeContext): DashboardSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DashboardSummary(entry, context);
    });
};

const deserializeAws_restJson1DashboardSummary = (output: any, context: __SerdeContext): DashboardSummary => {
  return {
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdateDate:
      output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
        ? new Date(Math.round(output.lastUpdateDate * 1000))
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1DetailedError = (output: any, context: __SerdeContext): DetailedError => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1DetailedErrors = (output: any, context: __SerdeContext): DetailedError[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DetailedError(entry, context);
    });
};

const deserializeAws_restJson1ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  return {
    code: __expectString(output.code),
    details:
      output.details !== undefined && output.details !== null
        ? deserializeAws_restJson1DetailedErrors(output.details, context)
        : undefined,
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1ExpressionVariable = (output: any, context: __SerdeContext): ExpressionVariable => {
  return {
    name: __expectString(output.name),
    value:
      output.value !== undefined && output.value !== null
        ? deserializeAws_restJson1VariableValue(output.value, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExpressionVariables = (output: any, context: __SerdeContext): ExpressionVariable[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExpressionVariable(entry, context);
    });
};

const deserializeAws_restJson1ForwardingConfig = (output: any, context: __SerdeContext): ForwardingConfig => {
  return {
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_restJson1GatewayCapabilitySummaries = (
  output: any,
  context: __SerdeContext
): GatewayCapabilitySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GatewayCapabilitySummary(entry, context);
    });
};

const deserializeAws_restJson1GatewayCapabilitySummary = (
  output: any,
  context: __SerdeContext
): GatewayCapabilitySummary => {
  return {
    capabilityNamespace: __expectString(output.capabilityNamespace),
    capabilitySyncStatus: __expectString(output.capabilitySyncStatus),
  } as any;
};

const deserializeAws_restJson1GatewayPlatform = (output: any, context: __SerdeContext): GatewayPlatform => {
  return {
    greengrass:
      output.greengrass !== undefined && output.greengrass !== null
        ? deserializeAws_restJson1Greengrass(output.greengrass, context)
        : undefined,
    greengrassV2:
      output.greengrassV2 !== undefined && output.greengrassV2 !== null
        ? deserializeAws_restJson1GreengrassV2(output.greengrassV2, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GatewaySummaries = (output: any, context: __SerdeContext): GatewaySummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GatewaySummary(entry, context);
    });
};

const deserializeAws_restJson1GatewaySummary = (output: any, context: __SerdeContext): GatewaySummary => {
  return {
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    gatewayCapabilitySummaries:
      output.gatewayCapabilitySummaries !== undefined && output.gatewayCapabilitySummaries !== null
        ? deserializeAws_restJson1GatewayCapabilitySummaries(output.gatewayCapabilitySummaries, context)
        : undefined,
    gatewayId: __expectString(output.gatewayId),
    gatewayName: __expectString(output.gatewayName),
    gatewayPlatform:
      output.gatewayPlatform !== undefined && output.gatewayPlatform !== null
        ? deserializeAws_restJson1GatewayPlatform(output.gatewayPlatform, context)
        : undefined,
    lastUpdateDate:
      output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
        ? new Date(Math.round(output.lastUpdateDate * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1Greengrass = (output: any, context: __SerdeContext): Greengrass => {
  return {
    groupArn: __expectString(output.groupArn),
  } as any;
};

const deserializeAws_restJson1GreengrassV2 = (output: any, context: __SerdeContext): GreengrassV2 => {
  return {
    coreDeviceThingName: __expectString(output.coreDeviceThingName),
  } as any;
};

const deserializeAws_restJson1GroupIdentity = (output: any, context: __SerdeContext): GroupIdentity => {
  return {
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1IAMRoleIdentity = (output: any, context: __SerdeContext): IAMRoleIdentity => {
  return {
    arn: __expectString(output.arn),
  } as any;
};

const deserializeAws_restJson1IAMUserIdentity = (output: any, context: __SerdeContext): IAMUserIdentity => {
  return {
    arn: __expectString(output.arn),
  } as any;
};

const deserializeAws_restJson1Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    group:
      output.group !== undefined && output.group !== null
        ? deserializeAws_restJson1GroupIdentity(output.group, context)
        : undefined,
    iamRole:
      output.iamRole !== undefined && output.iamRole !== null
        ? deserializeAws_restJson1IAMRoleIdentity(output.iamRole, context)
        : undefined,
    iamUser:
      output.iamUser !== undefined && output.iamUser !== null
        ? deserializeAws_restJson1IAMUserIdentity(output.iamUser, context)
        : undefined,
    user:
      output.user !== undefined && output.user !== null
        ? deserializeAws_restJson1UserIdentity(output.user, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ImageLocation = (output: any, context: __SerdeContext): ImageLocation => {
  return {
    id: __expectString(output.id),
    url: __expectString(output.url),
  } as any;
};

const deserializeAws_restJson1InterpolatedAssetPropertyValue = (
  output: any,
  context: __SerdeContext
): InterpolatedAssetPropertyValue => {
  return {
    timestamp:
      output.timestamp !== undefined && output.timestamp !== null
        ? deserializeAws_restJson1TimeInNanos(output.timestamp, context)
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? deserializeAws_restJson1Variant(output.value, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InterpolatedAssetPropertyValues = (
  output: any,
  context: __SerdeContext
): InterpolatedAssetPropertyValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InterpolatedAssetPropertyValue(entry, context);
    });
};

const deserializeAws_restJson1LoggingOptions = (output: any, context: __SerdeContext): LoggingOptions => {
  return {
    level: __expectString(output.level),
  } as any;
};

const deserializeAws_restJson1Measurement = (output: any, context: __SerdeContext): Measurement => {
  return {
    processingConfig:
      output.processingConfig !== undefined && output.processingConfig !== null
        ? deserializeAws_restJson1MeasurementProcessingConfig(output.processingConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MeasurementProcessingConfig = (
  output: any,
  context: __SerdeContext
): MeasurementProcessingConfig => {
  return {
    forwardingConfig:
      output.forwardingConfig !== undefined && output.forwardingConfig !== null
        ? deserializeAws_restJson1ForwardingConfig(output.forwardingConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Metric = (output: any, context: __SerdeContext): Metric => {
  return {
    expression: __expectString(output.expression),
    processingConfig:
      output.processingConfig !== undefined && output.processingConfig !== null
        ? deserializeAws_restJson1MetricProcessingConfig(output.processingConfig, context)
        : undefined,
    variables:
      output.variables !== undefined && output.variables !== null
        ? deserializeAws_restJson1ExpressionVariables(output.variables, context)
        : undefined,
    window:
      output.window !== undefined && output.window !== null
        ? deserializeAws_restJson1MetricWindow(output.window, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MetricProcessingConfig = (
  output: any,
  context: __SerdeContext
): MetricProcessingConfig => {
  return {
    computeLocation: __expectString(output.computeLocation),
  } as any;
};

const deserializeAws_restJson1MetricWindow = (output: any, context: __SerdeContext): MetricWindow => {
  return {
    tumbling:
      output.tumbling !== undefined && output.tumbling !== null
        ? deserializeAws_restJson1TumblingWindow(output.tumbling, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MonitorErrorDetails = (output: any, context: __SerdeContext): MonitorErrorDetails => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1MultiLayerStorage = (output: any, context: __SerdeContext): MultiLayerStorage => {
  return {
    customerManagedS3Storage:
      output.customerManagedS3Storage !== undefined && output.customerManagedS3Storage !== null
        ? deserializeAws_restJson1CustomerManagedS3Storage(output.customerManagedS3Storage, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PortalResource = (output: any, context: __SerdeContext): PortalResource => {
  return {
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1PortalStatus = (output: any, context: __SerdeContext): PortalStatus => {
  return {
    error:
      output.error !== undefined && output.error !== null
        ? deserializeAws_restJson1MonitorErrorDetails(output.error, context)
        : undefined,
    state: __expectString(output.state),
  } as any;
};

const deserializeAws_restJson1PortalSummaries = (output: any, context: __SerdeContext): PortalSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PortalSummary(entry, context);
    });
};

const deserializeAws_restJson1PortalSummary = (output: any, context: __SerdeContext): PortalSummary => {
  return {
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdateDate:
      output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
        ? new Date(Math.round(output.lastUpdateDate * 1000))
        : undefined,
    name: __expectString(output.name),
    roleArn: __expectString(output.roleArn),
    startUrl: __expectString(output.startUrl),
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1PortalStatus(output.status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProjectResource = (output: any, context: __SerdeContext): ProjectResource => {
  return {
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1ProjectSummaries = (output: any, context: __SerdeContext): ProjectSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProjectSummary(entry, context);
    });
};

const deserializeAws_restJson1ProjectSummary = (output: any, context: __SerdeContext): ProjectSummary => {
  return {
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdateDate:
      output.lastUpdateDate !== undefined && output.lastUpdateDate !== null
        ? new Date(Math.round(output.lastUpdateDate * 1000))
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1Property = (output: any, context: __SerdeContext): Property => {
  return {
    alias: __expectString(output.alias),
    dataType: __expectString(output.dataType),
    id: __expectString(output.id),
    name: __expectString(output.name),
    notification:
      output.notification !== undefined && output.notification !== null
        ? deserializeAws_restJson1PropertyNotification(output.notification, context)
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? deserializeAws_restJson1PropertyType(output.type, context)
        : undefined,
    unit: __expectString(output.unit),
  } as any;
};

const deserializeAws_restJson1PropertyNotification = (output: any, context: __SerdeContext): PropertyNotification => {
  return {
    state: __expectString(output.state),
    topic: __expectString(output.topic),
  } as any;
};

const deserializeAws_restJson1PropertyType = (output: any, context: __SerdeContext): PropertyType => {
  return {
    attribute:
      output.attribute !== undefined && output.attribute !== null
        ? deserializeAws_restJson1Attribute(output.attribute, context)
        : undefined,
    measurement:
      output.measurement !== undefined && output.measurement !== null
        ? deserializeAws_restJson1Measurement(output.measurement, context)
        : undefined,
    metric:
      output.metric !== undefined && output.metric !== null
        ? deserializeAws_restJson1Metric(output.metric, context)
        : undefined,
    transform:
      output.transform !== undefined && output.transform !== null
        ? deserializeAws_restJson1Transform(output.transform, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    portal:
      output.portal !== undefined && output.portal !== null
        ? deserializeAws_restJson1PortalResource(output.portal, context)
        : undefined,
    project:
      output.project !== undefined && output.project !== null
        ? deserializeAws_restJson1ProjectResource(output.project, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1TimeInNanos = (output: any, context: __SerdeContext): TimeInNanos => {
  return {
    offsetInNanos: __expectNumber(output.offsetInNanos),
    timeInSeconds: __expectNumber(output.timeInSeconds),
  } as any;
};

const deserializeAws_restJson1Timestamps = (output: any, context: __SerdeContext): TimeInNanos[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TimeInNanos(entry, context);
    });
};

const deserializeAws_restJson1Transform = (output: any, context: __SerdeContext): Transform => {
  return {
    expression: __expectString(output.expression),
    processingConfig:
      output.processingConfig !== undefined && output.processingConfig !== null
        ? deserializeAws_restJson1TransformProcessingConfig(output.processingConfig, context)
        : undefined,
    variables:
      output.variables !== undefined && output.variables !== null
        ? deserializeAws_restJson1ExpressionVariables(output.variables, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TransformProcessingConfig = (
  output: any,
  context: __SerdeContext
): TransformProcessingConfig => {
  return {
    computeLocation: __expectString(output.computeLocation),
    forwardingConfig:
      output.forwardingConfig !== undefined && output.forwardingConfig !== null
        ? deserializeAws_restJson1ForwardingConfig(output.forwardingConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TumblingWindow = (output: any, context: __SerdeContext): TumblingWindow => {
  return {
    interval: __expectString(output.interval),
    offset: __expectString(output.offset),
  } as any;
};

const deserializeAws_restJson1UserIdentity = (output: any, context: __SerdeContext): UserIdentity => {
  return {
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1VariableValue = (output: any, context: __SerdeContext): VariableValue => {
  return {
    hierarchyId: __expectString(output.hierarchyId),
    propertyId: __expectString(output.propertyId),
  } as any;
};

const deserializeAws_restJson1Variant = (output: any, context: __SerdeContext): Variant => {
  return {
    booleanValue: __expectBoolean(output.booleanValue),
    doubleValue: __handleFloat(output.doubleValue),
    integerValue: __expectNumber(output.integerValue),
    stringValue: __expectString(output.stringValue),
  } as any;
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
