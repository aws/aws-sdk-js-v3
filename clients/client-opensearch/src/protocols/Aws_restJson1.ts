// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
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
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AcceptInboundConnectionCommandInput,
  AcceptInboundConnectionCommandOutput,
} from "../commands/AcceptInboundConnectionCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import { AssociatePackageCommandInput, AssociatePackageCommandOutput } from "../commands/AssociatePackageCommand";
import {
  AuthorizeVpcEndpointAccessCommandInput,
  AuthorizeVpcEndpointAccessCommandOutput,
} from "../commands/AuthorizeVpcEndpointAccessCommand";
import {
  CancelServiceSoftwareUpdateCommandInput,
  CancelServiceSoftwareUpdateCommandOutput,
} from "../commands/CancelServiceSoftwareUpdateCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import {
  CreateOutboundConnectionCommandInput,
  CreateOutboundConnectionCommandOutput,
} from "../commands/CreateOutboundConnectionCommand";
import { CreatePackageCommandInput, CreatePackageCommandOutput } from "../commands/CreatePackageCommand";
import { CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput } from "../commands/CreateVpcEndpointCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import {
  DeleteInboundConnectionCommandInput,
  DeleteInboundConnectionCommandOutput,
} from "../commands/DeleteInboundConnectionCommand";
import {
  DeleteOutboundConnectionCommandInput,
  DeleteOutboundConnectionCommandOutput,
} from "../commands/DeleteOutboundConnectionCommand";
import { DeletePackageCommandInput, DeletePackageCommandOutput } from "../commands/DeletePackageCommand";
import { DeleteVpcEndpointCommandInput, DeleteVpcEndpointCommandOutput } from "../commands/DeleteVpcEndpointCommand";
import {
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput,
} from "../commands/DescribeDomainAutoTunesCommand";
import {
  DescribeDomainChangeProgressCommandInput,
  DescribeDomainChangeProgressCommandOutput,
} from "../commands/DescribeDomainChangeProgressCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "../commands/DescribeDomainCommand";
import {
  DescribeDomainConfigCommandInput,
  DescribeDomainConfigCommandOutput,
} from "../commands/DescribeDomainConfigCommand";
import { DescribeDomainsCommandInput, DescribeDomainsCommandOutput } from "../commands/DescribeDomainsCommand";
import {
  DescribeDryRunProgressCommandInput,
  DescribeDryRunProgressCommandOutput,
} from "../commands/DescribeDryRunProgressCommand";
import {
  DescribeInboundConnectionsCommandInput,
  DescribeInboundConnectionsCommandOutput,
} from "../commands/DescribeInboundConnectionsCommand";
import {
  DescribeInstanceTypeLimitsCommandInput,
  DescribeInstanceTypeLimitsCommandOutput,
} from "../commands/DescribeInstanceTypeLimitsCommand";
import {
  DescribeOutboundConnectionsCommandInput,
  DescribeOutboundConnectionsCommandOutput,
} from "../commands/DescribeOutboundConnectionsCommand";
import { DescribePackagesCommandInput, DescribePackagesCommandOutput } from "../commands/DescribePackagesCommand";
import {
  DescribeReservedInstanceOfferingsCommandInput,
  DescribeReservedInstanceOfferingsCommandOutput,
} from "../commands/DescribeReservedInstanceOfferingsCommand";
import {
  DescribeReservedInstancesCommandInput,
  DescribeReservedInstancesCommandOutput,
} from "../commands/DescribeReservedInstancesCommand";
import {
  DescribeVpcEndpointsCommandInput,
  DescribeVpcEndpointsCommandOutput,
} from "../commands/DescribeVpcEndpointsCommand";
import { DissociatePackageCommandInput, DissociatePackageCommandOutput } from "../commands/DissociatePackageCommand";
import {
  GetCompatibleVersionsCommandInput,
  GetCompatibleVersionsCommandOutput,
} from "../commands/GetCompatibleVersionsCommand";
import {
  GetPackageVersionHistoryCommandInput,
  GetPackageVersionHistoryCommandOutput,
} from "../commands/GetPackageVersionHistoryCommand";
import { GetUpgradeHistoryCommandInput, GetUpgradeHistoryCommandOutput } from "../commands/GetUpgradeHistoryCommand";
import { GetUpgradeStatusCommandInput, GetUpgradeStatusCommandOutput } from "../commands/GetUpgradeStatusCommand";
import { ListDomainNamesCommandInput, ListDomainNamesCommandOutput } from "../commands/ListDomainNamesCommand";
import {
  ListDomainsForPackageCommandInput,
  ListDomainsForPackageCommandOutput,
} from "../commands/ListDomainsForPackageCommand";
import {
  ListInstanceTypeDetailsCommandInput,
  ListInstanceTypeDetailsCommandOutput,
} from "../commands/ListInstanceTypeDetailsCommand";
import {
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput,
} from "../commands/ListPackagesForDomainCommand";
import {
  ListScheduledActionsCommandInput,
  ListScheduledActionsCommandOutput,
} from "../commands/ListScheduledActionsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { ListVersionsCommandInput, ListVersionsCommandOutput } from "../commands/ListVersionsCommand";
import {
  ListVpcEndpointAccessCommandInput,
  ListVpcEndpointAccessCommandOutput,
} from "../commands/ListVpcEndpointAccessCommand";
import { ListVpcEndpointsCommandInput, ListVpcEndpointsCommandOutput } from "../commands/ListVpcEndpointsCommand";
import {
  ListVpcEndpointsForDomainCommandInput,
  ListVpcEndpointsForDomainCommandOutput,
} from "../commands/ListVpcEndpointsForDomainCommand";
import {
  PurchaseReservedInstanceOfferingCommandInput,
  PurchaseReservedInstanceOfferingCommandOutput,
} from "../commands/PurchaseReservedInstanceOfferingCommand";
import {
  RejectInboundConnectionCommandInput,
  RejectInboundConnectionCommandOutput,
} from "../commands/RejectInboundConnectionCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "../commands/RemoveTagsCommand";
import {
  RevokeVpcEndpointAccessCommandInput,
  RevokeVpcEndpointAccessCommandOutput,
} from "../commands/RevokeVpcEndpointAccessCommand";
import {
  StartServiceSoftwareUpdateCommandInput,
  StartServiceSoftwareUpdateCommandOutput,
} from "../commands/StartServiceSoftwareUpdateCommand";
import { UpdateDomainConfigCommandInput, UpdateDomainConfigCommandOutput } from "../commands/UpdateDomainConfigCommand";
import { UpdatePackageCommandInput, UpdatePackageCommandOutput } from "../commands/UpdatePackageCommand";
import {
  UpdateScheduledActionCommandInput,
  UpdateScheduledActionCommandOutput,
} from "../commands/UpdateScheduledActionCommand";
import { UpdateVpcEndpointCommandInput, UpdateVpcEndpointCommandOutput } from "../commands/UpdateVpcEndpointCommand";
import { UpgradeDomainCommandInput, UpgradeDomainCommandOutput } from "../commands/UpgradeDomainCommand";
import {
  AccessDeniedException,
  AccessPoliciesStatus,
  AdditionalLimit,
  AdvancedOptionsStatus,
  AdvancedSecurityOptions,
  AdvancedSecurityOptionsInput,
  AdvancedSecurityOptionsStatus,
  AuthorizedPrincipal,
  AutoTune,
  AutoTuneDetails,
  AutoTuneMaintenanceSchedule,
  AutoTuneOptions,
  AutoTuneOptionsInput,
  AutoTuneOptionsOutput,
  AutoTuneOptionsStatus,
  AutoTuneStatus,
  AWSDomainInformation,
  BaseException,
  ChangeProgressDetails,
  ChangeProgressStage,
  ChangeProgressStatusDetails,
  ClusterConfig,
  ClusterConfigStatus,
  CognitoOptions,
  CognitoOptionsStatus,
  ColdStorageOptions,
  CompatibleVersionsMap,
  ConflictException,
  ConnectionProperties,
  DescribePackagesFilter,
  DisabledOperationException,
  DomainConfig,
  DomainEndpointOptions,
  DomainEndpointOptionsStatus,
  DomainInfo,
  DomainInformationContainer,
  DomainPackageDetails,
  DomainStatus,
  DryRunProgressStatus,
  DryRunResults,
  Duration,
  EBSOptions,
  EBSOptionsStatus,
  EncryptionAtRestOptions,
  EncryptionAtRestOptionsStatus,
  ErrorDetails,
  Filter,
  InboundConnection,
  InboundConnectionStatus,
  InstanceCountLimits,
  InstanceLimits,
  InstanceTypeDetails,
  InternalException,
  InvalidPaginationTokenException,
  InvalidTypeException,
  LimitExceededException,
  Limits,
  LogPublishingOption,
  LogPublishingOptionsStatus,
  LogType,
  MasterUserOptions,
  NodeToNodeEncryptionOptions,
  NodeToNodeEncryptionOptionsStatus,
  OffPeakWindow,
  OffPeakWindowOptions,
  OffPeakWindowOptionsStatus,
  OptionStatus,
  OutboundConnection,
  OutboundConnectionStatus,
  PackageDetails,
  PackageSource,
  PackageVersionHistory,
  RecurringCharge,
  ReservedInstance,
  ReservedInstanceOffering,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  SAMLIdp,
  SAMLOptionsInput,
  SAMLOptionsOutput,
  ScheduledAction,
  ScheduledAutoTuneDetails,
  ServiceSoftwareOptions,
  SlotNotAvailableException,
  SnapshotOptions,
  SnapshotOptionsStatus,
  SoftwareUpdateOptions,
  SoftwareUpdateOptionsStatus,
  StorageType,
  StorageTypeLimit,
  Tag,
  UpgradeHistory,
  UpgradeStepItem,
  ValidationException,
  ValidationFailure,
  VersionStatus,
  VPCDerivedInfo,
  VPCDerivedInfoStatus,
  VpcEndpoint,
  VpcEndpointError,
  VpcEndpointSummary,
  VPCOptions,
  WindowStartTime,
  ZoneAwarenessConfig,
} from "../models/models_0";
import { OpenSearchServiceException as __BaseException } from "../models/OpenSearchServiceException";

/**
 * serializeAws_restJson1AcceptInboundConnectionCommand
 */
export const se_AcceptInboundConnectionCommand = async (
  input: AcceptInboundConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/accept";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectionId",
    () => input.ConnectionId!,
    "{ConnectionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AddTagsCommand
 */
export const se_AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/tags";
  let body: any;
  body = JSON.stringify({
    ...(input.ARN != null && { ARN: input.ARN }),
    ...(input.TagList != null && { TagList: se_TagList(input.TagList, context) }),
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

/**
 * serializeAws_restJson1AssociatePackageCommand
 */
export const se_AssociatePackageCommand = async (
  input: AssociatePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/packages/associate/{PackageID}/{DomainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PackageID", () => input.PackageID!, "{PackageID}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
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

/**
 * serializeAws_restJson1AuthorizeVpcEndpointAccessCommand
 */
export const se_AuthorizeVpcEndpointAccessCommand = async (
  input: AuthorizeVpcEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/domain/{DomainName}/authorizeVpcEndpointAccess";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Account != null && { Account: input.Account }),
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

/**
 * serializeAws_restJson1CancelServiceSoftwareUpdateCommand
 */
export const se_CancelServiceSoftwareUpdateCommand = async (
  input: CancelServiceSoftwareUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/serviceSoftwareUpdate/cancel";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainName != null && { DomainName: input.DomainName }),
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

/**
 * serializeAws_restJson1CreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/opensearch/domain";
  let body: any;
  body = JSON.stringify({
    ...(input.AccessPolicies != null && { AccessPolicies: input.AccessPolicies }),
    ...(input.AdvancedOptions != null && { AdvancedOptions: se_AdvancedOptions(input.AdvancedOptions, context) }),
    ...(input.AdvancedSecurityOptions != null && {
      AdvancedSecurityOptions: se_AdvancedSecurityOptionsInput(input.AdvancedSecurityOptions, context),
    }),
    ...(input.AutoTuneOptions != null && { AutoTuneOptions: se_AutoTuneOptionsInput(input.AutoTuneOptions, context) }),
    ...(input.ClusterConfig != null && { ClusterConfig: se_ClusterConfig(input.ClusterConfig, context) }),
    ...(input.CognitoOptions != null && { CognitoOptions: se_CognitoOptions(input.CognitoOptions, context) }),
    ...(input.DomainEndpointOptions != null && {
      DomainEndpointOptions: se_DomainEndpointOptions(input.DomainEndpointOptions, context),
    }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.EBSOptions != null && { EBSOptions: se_EBSOptions(input.EBSOptions, context) }),
    ...(input.EncryptionAtRestOptions != null && {
      EncryptionAtRestOptions: se_EncryptionAtRestOptions(input.EncryptionAtRestOptions, context),
    }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.LogPublishingOptions != null && {
      LogPublishingOptions: se_LogPublishingOptions(input.LogPublishingOptions, context),
    }),
    ...(input.NodeToNodeEncryptionOptions != null && {
      NodeToNodeEncryptionOptions: se_NodeToNodeEncryptionOptions(input.NodeToNodeEncryptionOptions, context),
    }),
    ...(input.OffPeakWindowOptions != null && {
      OffPeakWindowOptions: se_OffPeakWindowOptions(input.OffPeakWindowOptions, context),
    }),
    ...(input.SnapshotOptions != null && { SnapshotOptions: se_SnapshotOptions(input.SnapshotOptions, context) }),
    ...(input.SoftwareUpdateOptions != null && {
      SoftwareUpdateOptions: se_SoftwareUpdateOptions(input.SoftwareUpdateOptions, context),
    }),
    ...(input.TagList != null && { TagList: se_TagList(input.TagList, context) }),
    ...(input.VPCOptions != null && { VPCOptions: se_VPCOptions(input.VPCOptions, context) }),
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

/**
 * serializeAws_restJson1CreateOutboundConnectionCommand
 */
export const se_CreateOutboundConnectionCommand = async (
  input: CreateOutboundConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/cc/outboundConnection";
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectionAlias != null && { ConnectionAlias: input.ConnectionAlias }),
    ...(input.ConnectionMode != null && { ConnectionMode: input.ConnectionMode }),
    ...(input.LocalDomainInfo != null && {
      LocalDomainInfo: se_DomainInformationContainer(input.LocalDomainInfo, context),
    }),
    ...(input.RemoteDomainInfo != null && {
      RemoteDomainInfo: se_DomainInformationContainer(input.RemoteDomainInfo, context),
    }),
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

/**
 * serializeAws_restJson1CreatePackageCommand
 */
export const se_CreatePackageCommand = async (
  input: CreatePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/packages";
  let body: any;
  body = JSON.stringify({
    ...(input.PackageDescription != null && { PackageDescription: input.PackageDescription }),
    ...(input.PackageName != null && { PackageName: input.PackageName }),
    ...(input.PackageSource != null && { PackageSource: se_PackageSource(input.PackageSource, context) }),
    ...(input.PackageType != null && { PackageType: input.PackageType }),
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

/**
 * serializeAws_restJson1CreateVpcEndpointCommand
 */
export const se_CreateVpcEndpointCommand = async (
  input: CreateVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/opensearch/vpcEndpoints";
  let body: any;
  body = JSON.stringify({
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.DomainArn != null && { DomainArn: input.DomainArn }),
    ...(input.VpcOptions != null && { VpcOptions: se_VPCOptions(input.VpcOptions, context) }),
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

/**
 * serializeAws_restJson1DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/domain/{DomainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
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

/**
 * serializeAws_restJson1DeleteInboundConnectionCommand
 */
export const se_DeleteInboundConnectionCommand = async (
  input: DeleteInboundConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectionId",
    () => input.ConnectionId!,
    "{ConnectionId}",
    false
  );
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

/**
 * serializeAws_restJson1DeleteOutboundConnectionCommand
 */
export const se_DeleteOutboundConnectionCommand = async (
  input: DeleteOutboundConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/cc/outboundConnection/{ConnectionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectionId",
    () => input.ConnectionId!,
    "{ConnectionId}",
    false
  );
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

/**
 * serializeAws_restJson1DeletePackageCommand
 */
export const se_DeletePackageCommand = async (
  input: DeletePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/packages/{PackageID}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PackageID", () => input.PackageID!, "{PackageID}", false);
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

/**
 * serializeAws_restJson1DeleteVpcEndpointCommand
 */
export const se_DeleteVpcEndpointCommand = async (
  input: DeleteVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/vpcEndpoints/{VpcEndpointId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "VpcEndpointId",
    () => input.VpcEndpointId!,
    "{VpcEndpointId}",
    false
  );
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

/**
 * serializeAws_restJson1DescribeDomainCommand
 */
export const se_DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/domain/{DomainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
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

/**
 * serializeAws_restJson1DescribeDomainAutoTunesCommand
 */
export const se_DescribeDomainAutoTunesCommand = async (
  input: DescribeDomainAutoTunesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/domain/{DomainName}/autoTunes";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
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

/**
 * serializeAws_restJson1DescribeDomainChangeProgressCommand
 */
export const se_DescribeDomainChangeProgressCommand = async (
  input: DescribeDomainChangeProgressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/domain/{DomainName}/progress";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    changeid: [, input.ChangeId!],
  });
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

/**
 * serializeAws_restJson1DescribeDomainConfigCommand
 */
export const se_DescribeDomainConfigCommand = async (
  input: DescribeDomainConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/domain/{DomainName}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
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

/**
 * serializeAws_restJson1DescribeDomainsCommand
 */
export const se_DescribeDomainsCommand = async (
  input: DescribeDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/opensearch/domain-info";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainNames != null && { DomainNames: se_DomainNameList(input.DomainNames, context) }),
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

/**
 * serializeAws_restJson1DescribeDryRunProgressCommand
 */
export const se_DescribeDryRunProgressCommand = async (
  input: DescribeDryRunProgressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/domain/{DomainName}/dryRun";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    dryRunId: [, input.DryRunId!],
    loadDryRunConfig: [() => input.LoadDryRunConfig !== void 0, () => input.LoadDryRunConfig!.toString()],
  });
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

/**
 * serializeAws_restJson1DescribeInboundConnectionsCommand
 */
export const se_DescribeInboundConnectionsCommand = async (
  input: DescribeInboundConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/cc/inboundConnection/search";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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

/**
 * serializeAws_restJson1DescribeInstanceTypeLimitsCommand
 */
export const se_DescribeInstanceTypeLimitsCommand = async (
  input: DescribeInstanceTypeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/instanceTypeLimits/{EngineVersion}/{InstanceType}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "InstanceType",
    () => input.InstanceType!,
    "{InstanceType}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EngineVersion",
    () => input.EngineVersion!,
    "{EngineVersion}",
    false
  );
  const query: any = map({
    domainName: [, input.DomainName!],
  });
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

/**
 * serializeAws_restJson1DescribeOutboundConnectionsCommand
 */
export const se_DescribeOutboundConnectionsCommand = async (
  input: DescribeOutboundConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/cc/outboundConnection/search";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: se_FilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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

/**
 * serializeAws_restJson1DescribePackagesCommand
 */
export const se_DescribePackagesCommand = async (
  input: DescribePackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/packages/describe";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: se_DescribePackagesFilterList(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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

/**
 * serializeAws_restJson1DescribeReservedInstanceOfferingsCommand
 */
export const se_DescribeReservedInstanceOfferingsCommand = async (
  input: DescribeReservedInstanceOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/reservedInstanceOfferings";
  const query: any = map({
    offeringId: [, input.ReservedInstanceOfferingId!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
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

/**
 * serializeAws_restJson1DescribeReservedInstancesCommand
 */
export const se_DescribeReservedInstancesCommand = async (
  input: DescribeReservedInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/opensearch/reservedInstances";
  const query: any = map({
    reservationId: [, input.ReservedInstanceId!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
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

/**
 * serializeAws_restJson1DescribeVpcEndpointsCommand
 */
export const se_DescribeVpcEndpointsCommand = async (
  input: DescribeVpcEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/vpcEndpoints/describe";
  let body: any;
  body = JSON.stringify({
    ...(input.VpcEndpointIds != null && { VpcEndpointIds: se_VpcEndpointIdList(input.VpcEndpointIds, context) }),
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

/**
 * serializeAws_restJson1DissociatePackageCommand
 */
export const se_DissociatePackageCommand = async (
  input: DissociatePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/packages/dissociate/{PackageID}/{DomainName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "PackageID", () => input.PackageID!, "{PackageID}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
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

/**
 * serializeAws_restJson1GetCompatibleVersionsCommand
 */
export const se_GetCompatibleVersionsCommand = async (
  input: GetCompatibleVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/opensearch/compatibleVersions";
  const query: any = map({
    domainName: [, input.DomainName!],
  });
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

/**
 * serializeAws_restJson1GetPackageVersionHistoryCommand
 */
export const se_GetPackageVersionHistoryCommand = async (
  input: GetPackageVersionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/packages/{PackageID}/history";
  resolvedPath = __resolvedPath(resolvedPath, input, "PackageID", () => input.PackageID!, "{PackageID}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
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

/**
 * serializeAws_restJson1GetUpgradeHistoryCommand
 */
export const se_GetUpgradeHistoryCommand = async (
  input: GetUpgradeHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/upgradeDomain/{DomainName}/history";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
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

/**
 * serializeAws_restJson1GetUpgradeStatusCommand
 */
export const se_GetUpgradeStatusCommand = async (
  input: GetUpgradeStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/upgradeDomain/{DomainName}/status";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
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

/**
 * serializeAws_restJson1ListDomainNamesCommand
 */
export const se_ListDomainNamesCommand = async (
  input: ListDomainNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/domain";
  const query: any = map({
    engineType: [, input.EngineType!],
  });
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

/**
 * serializeAws_restJson1ListDomainsForPackageCommand
 */
export const se_ListDomainsForPackageCommand = async (
  input: ListDomainsForPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/packages/{PackageID}/domains";
  resolvedPath = __resolvedPath(resolvedPath, input, "PackageID", () => input.PackageID!, "{PackageID}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
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

/**
 * serializeAws_restJson1ListInstanceTypeDetailsCommand
 */
export const se_ListInstanceTypeDetailsCommand = async (
  input: ListInstanceTypeDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/instanceTypeDetails/{EngineVersion}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "EngineVersion",
    () => input.EngineVersion!,
    "{EngineVersion}",
    false
  );
  const query: any = map({
    domainName: [, input.DomainName!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
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

/**
 * serializeAws_restJson1ListPackagesForDomainCommand
 */
export const se_ListPackagesForDomainCommand = async (
  input: ListPackagesForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/domain/{DomainName}/packages";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
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

/**
 * serializeAws_restJson1ListScheduledActionsCommand
 */
export const se_ListScheduledActionsCommand = async (
  input: ListScheduledActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/domain/{DomainName}/scheduledActions";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
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

/**
 * serializeAws_restJson1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/tags";
  const query: any = map({
    arn: [, __expectNonNull(input.ARN!, `ARN`)],
  });
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

/**
 * serializeAws_restJson1ListVersionsCommand
 */
export const se_ListVersionsCommand = async (
  input: ListVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/opensearch/versions";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
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

/**
 * serializeAws_restJson1ListVpcEndpointAccessCommand
 */
export const se_ListVpcEndpointAccessCommand = async (
  input: ListVpcEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/domain/{DomainName}/listVpcEndpointAccess";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
  });
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

/**
 * serializeAws_restJson1ListVpcEndpointsCommand
 */
export const se_ListVpcEndpointsCommand = async (
  input: ListVpcEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/opensearch/vpcEndpoints";
  const query: any = map({
    nextToken: [, input.NextToken!],
  });
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

/**
 * serializeAws_restJson1ListVpcEndpointsForDomainCommand
 */
export const se_ListVpcEndpointsForDomainCommand = async (
  input: ListVpcEndpointsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/domain/{DomainName}/vpcEndpoints";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
  });
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

/**
 * serializeAws_restJson1PurchaseReservedInstanceOfferingCommand
 */
export const se_PurchaseReservedInstanceOfferingCommand = async (
  input: PurchaseReservedInstanceOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/purchaseReservedInstanceOffering";
  let body: any;
  body = JSON.stringify({
    ...(input.InstanceCount != null && { InstanceCount: input.InstanceCount }),
    ...(input.ReservationName != null && { ReservationName: input.ReservationName }),
    ...(input.ReservedInstanceOfferingId != null && { ReservedInstanceOfferingId: input.ReservedInstanceOfferingId }),
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

/**
 * serializeAws_restJson1RejectInboundConnectionCommand
 */
export const se_RejectInboundConnectionCommand = async (
  input: RejectInboundConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/reject";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConnectionId",
    () => input.ConnectionId!,
    "{ConnectionId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RemoveTagsCommand
 */
export const se_RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/tags-removal";
  let body: any;
  body = JSON.stringify({
    ...(input.ARN != null && { ARN: input.ARN }),
    ...(input.TagKeys != null && { TagKeys: se_StringList(input.TagKeys, context) }),
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

/**
 * serializeAws_restJson1RevokeVpcEndpointAccessCommand
 */
export const se_RevokeVpcEndpointAccessCommand = async (
  input: RevokeVpcEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/domain/{DomainName}/revokeVpcEndpointAccess";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Account != null && { Account: input.Account }),
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

/**
 * serializeAws_restJson1StartServiceSoftwareUpdateCommand
 */
export const se_StartServiceSoftwareUpdateCommand = async (
  input: StartServiceSoftwareUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/serviceSoftwareUpdate/start";
  let body: any;
  body = JSON.stringify({
    ...(input.DesiredStartTime != null && { DesiredStartTime: input.DesiredStartTime }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.ScheduleAt != null && { ScheduleAt: input.ScheduleAt }),
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

/**
 * serializeAws_restJson1UpdateDomainConfigCommand
 */
export const se_UpdateDomainConfigCommand = async (
  input: UpdateDomainConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/domain/{DomainName}/config";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AccessPolicies != null && { AccessPolicies: input.AccessPolicies }),
    ...(input.AdvancedOptions != null && { AdvancedOptions: se_AdvancedOptions(input.AdvancedOptions, context) }),
    ...(input.AdvancedSecurityOptions != null && {
      AdvancedSecurityOptions: se_AdvancedSecurityOptionsInput(input.AdvancedSecurityOptions, context),
    }),
    ...(input.AutoTuneOptions != null && { AutoTuneOptions: se_AutoTuneOptions(input.AutoTuneOptions, context) }),
    ...(input.ClusterConfig != null && { ClusterConfig: se_ClusterConfig(input.ClusterConfig, context) }),
    ...(input.CognitoOptions != null && { CognitoOptions: se_CognitoOptions(input.CognitoOptions, context) }),
    ...(input.DomainEndpointOptions != null && {
      DomainEndpointOptions: se_DomainEndpointOptions(input.DomainEndpointOptions, context),
    }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.DryRunMode != null && { DryRunMode: input.DryRunMode }),
    ...(input.EBSOptions != null && { EBSOptions: se_EBSOptions(input.EBSOptions, context) }),
    ...(input.EncryptionAtRestOptions != null && {
      EncryptionAtRestOptions: se_EncryptionAtRestOptions(input.EncryptionAtRestOptions, context),
    }),
    ...(input.LogPublishingOptions != null && {
      LogPublishingOptions: se_LogPublishingOptions(input.LogPublishingOptions, context),
    }),
    ...(input.NodeToNodeEncryptionOptions != null && {
      NodeToNodeEncryptionOptions: se_NodeToNodeEncryptionOptions(input.NodeToNodeEncryptionOptions, context),
    }),
    ...(input.OffPeakWindowOptions != null && {
      OffPeakWindowOptions: se_OffPeakWindowOptions(input.OffPeakWindowOptions, context),
    }),
    ...(input.SnapshotOptions != null && { SnapshotOptions: se_SnapshotOptions(input.SnapshotOptions, context) }),
    ...(input.SoftwareUpdateOptions != null && {
      SoftwareUpdateOptions: se_SoftwareUpdateOptions(input.SoftwareUpdateOptions, context),
    }),
    ...(input.VPCOptions != null && { VPCOptions: se_VPCOptions(input.VPCOptions, context) }),
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

/**
 * serializeAws_restJson1UpdatePackageCommand
 */
export const se_UpdatePackageCommand = async (
  input: UpdatePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/packages/update";
  let body: any;
  body = JSON.stringify({
    ...(input.CommitMessage != null && { CommitMessage: input.CommitMessage }),
    ...(input.PackageDescription != null && { PackageDescription: input.PackageDescription }),
    ...(input.PackageID != null && { PackageID: input.PackageID }),
    ...(input.PackageSource != null && { PackageSource: se_PackageSource(input.PackageSource, context) }),
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

/**
 * serializeAws_restJson1UpdateScheduledActionCommand
 */
export const se_UpdateScheduledActionCommand = async (
  input: UpdateScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/domain/{DomainName}/scheduledAction/update";
  resolvedPath = __resolvedPath(resolvedPath, input, "DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ActionID != null && { ActionID: input.ActionID }),
    ...(input.ActionType != null && { ActionType: input.ActionType }),
    ...(input.DesiredStartTime != null && { DesiredStartTime: input.DesiredStartTime }),
    ...(input.ScheduleAt != null && { ScheduleAt: input.ScheduleAt }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateVpcEndpointCommand
 */
export const se_UpdateVpcEndpointCommand = async (
  input: UpdateVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2021-01-01/opensearch/vpcEndpoints/update";
  let body: any;
  body = JSON.stringify({
    ...(input.VpcEndpointId != null && { VpcEndpointId: input.VpcEndpointId }),
    ...(input.VpcOptions != null && { VpcOptions: se_VPCOptions(input.VpcOptions, context) }),
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

/**
 * serializeAws_restJson1UpgradeDomainCommand
 */
export const se_UpgradeDomainCommand = async (
  input: UpgradeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2021-01-01/opensearch/upgradeDomain";
  let body: any;
  body = JSON.stringify({
    ...(input.AdvancedOptions != null && { AdvancedOptions: se_AdvancedOptions(input.AdvancedOptions, context) }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.PerformCheckOnly != null && { PerformCheckOnly: input.PerformCheckOnly }),
    ...(input.TargetVersion != null && { TargetVersion: input.TargetVersion }),
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

/**
 * deserializeAws_restJson1AcceptInboundConnectionCommand
 */
export const de_AcceptInboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AcceptInboundConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection != null) {
    contents.Connection = de_InboundConnection(data.Connection, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AcceptInboundConnectionCommandError
 */
const de_AcceptInboundConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInboundConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AddTagsCommand
 */
export const de_AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AddTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AddTagsCommandError
 */
const de_AddTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1AssociatePackageCommand
 */
export const de_AssociatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociatePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainPackageDetails != null) {
    contents.DomainPackageDetails = de_DomainPackageDetails(data.DomainPackageDetails, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociatePackageCommandError
 */
const de_AssociatePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.opensearch#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.opensearch#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1AuthorizeVpcEndpointAccessCommand
 */
export const de_AuthorizeVpcEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeVpcEndpointAccessCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AuthorizeVpcEndpointAccessCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AuthorizedPrincipal != null) {
    contents.AuthorizedPrincipal = de_AuthorizedPrincipal(data.AuthorizedPrincipal, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AuthorizeVpcEndpointAccessCommandError
 */
const de_AuthorizeVpcEndpointAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeVpcEndpointAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1CancelServiceSoftwareUpdateCommand
 */
export const de_CancelServiceSoftwareUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelServiceSoftwareUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelServiceSoftwareUpdateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ServiceSoftwareOptions != null) {
    contents.ServiceSoftwareOptions = de_ServiceSoftwareOptions(data.ServiceSoftwareOptions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CancelServiceSoftwareUpdateCommandError
 */
const de_CancelServiceSoftwareUpdateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelServiceSoftwareUpdateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1CreateDomainCommand
 */
export const de_CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainStatus != null) {
    contents.DomainStatus = de_DomainStatus(data.DomainStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainCommandError
 */
const de_CreateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidTypeException":
    case "com.amazonaws.opensearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.opensearch#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1CreateOutboundConnectionCommand
 */
export const de_CreateOutboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateOutboundConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectionAlias != null) {
    contents.ConnectionAlias = __expectString(data.ConnectionAlias);
  }
  if (data.ConnectionId != null) {
    contents.ConnectionId = __expectString(data.ConnectionId);
  }
  if (data.ConnectionMode != null) {
    contents.ConnectionMode = __expectString(data.ConnectionMode);
  }
  if (data.ConnectionProperties != null) {
    contents.ConnectionProperties = de_ConnectionProperties(data.ConnectionProperties, context);
  }
  if (data.ConnectionStatus != null) {
    contents.ConnectionStatus = de_OutboundConnectionStatus(data.ConnectionStatus, context);
  }
  if (data.LocalDomainInfo != null) {
    contents.LocalDomainInfo = de_DomainInformationContainer(data.LocalDomainInfo, context);
  }
  if (data.RemoteDomainInfo != null) {
    contents.RemoteDomainInfo = de_DomainInformationContainer(data.RemoteDomainInfo, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateOutboundConnectionCommandError
 */
const de_CreateOutboundConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutboundConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.opensearch#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreatePackageCommand
 */
export const de_CreatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreatePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PackageDetails != null) {
    contents.PackageDetails = de_PackageDetails(data.PackageDetails, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreatePackageCommandError
 */
const de_CreatePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.opensearch#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidTypeException":
    case "com.amazonaws.opensearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.opensearch#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1CreateVpcEndpointCommand
 */
export const de_CreateVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateVpcEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcEndpoint != null) {
    contents.VpcEndpoint = de_VpcEndpoint(data.VpcEndpoint, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateVpcEndpointCommandError
 */
const de_CreateVpcEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.opensearch#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1DeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainStatus != null) {
    contents.DomainStatus = de_DomainStatus(data.DomainStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDomainCommandError
 */
const de_DeleteDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1DeleteInboundConnectionCommand
 */
export const de_DeleteInboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteInboundConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection != null) {
    contents.Connection = de_InboundConnection(data.Connection, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInboundConnectionCommandError
 */
const de_DeleteInboundConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInboundConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteOutboundConnectionCommand
 */
export const de_DeleteOutboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteOutboundConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection != null) {
    contents.Connection = de_OutboundConnection(data.Connection, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteOutboundConnectionCommandError
 */
const de_DeleteOutboundConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutboundConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeletePackageCommand
 */
export const de_DeletePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeletePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PackageDetails != null) {
    contents.PackageDetails = de_PackageDetails(data.PackageDetails, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeletePackageCommandError
 */
const de_DeletePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.opensearch#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.opensearch#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1DeleteVpcEndpointCommand
 */
export const de_DeleteVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteVpcEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcEndpointSummary != null) {
    contents.VpcEndpointSummary = de_VpcEndpointSummary(data.VpcEndpointSummary, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVpcEndpointCommandError
 */
const de_DeleteVpcEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeDomainCommand
 */
export const de_DescribeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainStatus != null) {
    contents.DomainStatus = de_DomainStatus(data.DomainStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainCommandError
 */
const de_DescribeDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1DescribeDomainAutoTunesCommand
 */
export const de_DescribeDomainAutoTunesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainAutoTunesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDomainAutoTunesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AutoTunes != null) {
    contents.AutoTunes = de_AutoTuneList(data.AutoTunes, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainAutoTunesCommandError
 */
const de_DescribeDomainAutoTunesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainAutoTunesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1DescribeDomainChangeProgressCommand
 */
export const de_DescribeDomainChangeProgressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainChangeProgressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDomainChangeProgressCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChangeProgressStatus != null) {
    contents.ChangeProgressStatus = de_ChangeProgressStatusDetails(data.ChangeProgressStatus, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainChangeProgressCommandError
 */
const de_DescribeDomainChangeProgressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainChangeProgressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1DescribeDomainConfigCommand
 */
export const de_DescribeDomainConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDomainConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainConfig != null) {
    contents.DomainConfig = de_DomainConfig(data.DomainConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainConfigCommandError
 */
const de_DescribeDomainConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1DescribeDomainsCommand
 */
export const de_DescribeDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDomainsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainStatusList != null) {
    contents.DomainStatusList = de_DomainStatusList(data.DomainStatusList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainsCommandError
 */
const de_DescribeDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1DescribeDryRunProgressCommand
 */
export const de_DescribeDryRunProgressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDryRunProgressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDryRunProgressCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DryRunConfig != null) {
    contents.DryRunConfig = de_DomainStatus(data.DryRunConfig, context);
  }
  if (data.DryRunProgressStatus != null) {
    contents.DryRunProgressStatus = de_DryRunProgressStatus(data.DryRunProgressStatus, context);
  }
  if (data.DryRunResults != null) {
    contents.DryRunResults = de_DryRunResults(data.DryRunResults, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDryRunProgressCommandError
 */
const de_DescribeDryRunProgressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDryRunProgressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1DescribeInboundConnectionsCommand
 */
export const de_DescribeInboundConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInboundConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeInboundConnectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connections != null) {
    contents.Connections = de_InboundConnections(data.Connections, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInboundConnectionsCommandError
 */
const de_DescribeInboundConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInboundConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.opensearch#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeInstanceTypeLimitsCommand
 */
export const de_DescribeInstanceTypeLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceTypeLimitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeInstanceTypeLimitsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LimitsByRole != null) {
    contents.LimitsByRole = de_LimitsByRole(data.LimitsByRole, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInstanceTypeLimitsCommandError
 */
const de_DescribeInstanceTypeLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceTypeLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidTypeException":
    case "com.amazonaws.opensearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1DescribeOutboundConnectionsCommand
 */
export const de_DescribeOutboundConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOutboundConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeOutboundConnectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connections != null) {
    contents.Connections = de_OutboundConnections(data.Connections, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeOutboundConnectionsCommandError
 */
const de_DescribeOutboundConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOutboundConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.opensearch#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribePackagesCommand
 */
export const de_DescribePackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribePackagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PackageDetailsList != null) {
    contents.PackageDetailsList = de_PackageDetailsList(data.PackageDetailsList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackagesCommandError
 */
const de_DescribePackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.opensearch#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1DescribeReservedInstanceOfferingsCommand
 */
export const de_DescribeReservedInstanceOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedInstanceOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeReservedInstanceOfferingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ReservedInstanceOfferings != null) {
    contents.ReservedInstanceOfferings = de_ReservedInstanceOfferingList(data.ReservedInstanceOfferings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeReservedInstanceOfferingsCommandError
 */
const de_DescribeReservedInstanceOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedInstanceOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1DescribeReservedInstancesCommand
 */
export const de_DescribeReservedInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeReservedInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ReservedInstances != null) {
    contents.ReservedInstances = de_ReservedInstanceList(data.ReservedInstances, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeReservedInstancesCommandError
 */
const de_DescribeReservedInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1DescribeVpcEndpointsCommand
 */
export const de_DescribeVpcEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeVpcEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcEndpointErrors != null) {
    contents.VpcEndpointErrors = de_VpcEndpointErrorList(data.VpcEndpointErrors, context);
  }
  if (data.VpcEndpoints != null) {
    contents.VpcEndpoints = de_VpcEndpoints(data.VpcEndpoints, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVpcEndpointsCommandError
 */
const de_DescribeVpcEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1DissociatePackageCommand
 */
export const de_DissociatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DissociatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DissociatePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainPackageDetails != null) {
    contents.DomainPackageDetails = de_DomainPackageDetails(data.DomainPackageDetails, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DissociatePackageCommandError
 */
const de_DissociatePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DissociatePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.opensearch#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.opensearch#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1GetCompatibleVersionsCommand
 */
export const de_GetCompatibleVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCompatibleVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CompatibleVersions != null) {
    contents.CompatibleVersions = de_CompatibleVersionsList(data.CompatibleVersions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCompatibleVersionsCommandError
 */
const de_GetCompatibleVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1GetPackageVersionHistoryCommand
 */
export const de_GetPackageVersionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPackageVersionHistoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PackageID != null) {
    contents.PackageID = __expectString(data.PackageID);
  }
  if (data.PackageVersionHistoryList != null) {
    contents.PackageVersionHistoryList = de_PackageVersionHistoryList(data.PackageVersionHistoryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPackageVersionHistoryCommandError
 */
const de_GetPackageVersionHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.opensearch#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1GetUpgradeHistoryCommand
 */
export const de_GetUpgradeHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetUpgradeHistoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.UpgradeHistories != null) {
    contents.UpgradeHistories = de_UpgradeHistoryList(data.UpgradeHistories, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetUpgradeHistoryCommandError
 */
const de_GetUpgradeHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1GetUpgradeStatusCommand
 */
export const de_GetUpgradeStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetUpgradeStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StepStatus != null) {
    contents.StepStatus = __expectString(data.StepStatus);
  }
  if (data.UpgradeName != null) {
    contents.UpgradeName = __expectString(data.UpgradeName);
  }
  if (data.UpgradeStep != null) {
    contents.UpgradeStep = __expectString(data.UpgradeStep);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetUpgradeStatusCommandError
 */
const de_GetUpgradeStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1ListDomainNamesCommand
 */
export const de_ListDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDomainNamesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainNames != null) {
    contents.DomainNames = de_DomainInfoList(data.DomainNames, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainNamesCommandError
 */
const de_ListDomainNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1ListDomainsForPackageCommand
 */
export const de_ListDomainsForPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsForPackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDomainsForPackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainPackageDetailsList != null) {
    contents.DomainPackageDetailsList = de_DomainPackageDetailsList(data.DomainPackageDetailsList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainsForPackageCommandError
 */
const de_ListDomainsForPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsForPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.opensearch#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1ListInstanceTypeDetailsCommand
 */
export const de_ListInstanceTypeDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceTypeDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInstanceTypeDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InstanceTypeDetails != null) {
    contents.InstanceTypeDetails = de_InstanceTypeDetailsList(data.InstanceTypeDetails, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListInstanceTypeDetailsCommandError
 */
const de_ListInstanceTypeDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceTypeDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1ListPackagesForDomainCommand
 */
export const de_ListPackagesForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesForDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPackagesForDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainPackageDetailsList != null) {
    contents.DomainPackageDetailsList = de_DomainPackageDetailsList(data.DomainPackageDetailsList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPackagesForDomainCommandError
 */
const de_ListPackagesForDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesForDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.opensearch#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1ListScheduledActionsCommand
 */
export const de_ListScheduledActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScheduledActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListScheduledActionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ScheduledActions != null) {
    contents.ScheduledActions = de_ScheduledActionsList(data.ScheduledActions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListScheduledActionsCommandError
 */
const de_ListScheduledActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScheduledActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.opensearch#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TagList != null) {
    contents.TagList = de_TagList(data.TagList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsCommandError
 */
const de_ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1ListVersionsCommand
 */
export const de_ListVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = de_VersionList(data.Versions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListVersionsCommandError
 */
const de_ListVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1ListVpcEndpointAccessCommand
 */
export const de_ListVpcEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointAccessCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVpcEndpointAccessCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AuthorizedPrincipalList != null) {
    contents.AuthorizedPrincipalList = de_AuthorizedPrincipalList(data.AuthorizedPrincipalList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListVpcEndpointAccessCommandError
 */
const de_ListVpcEndpointAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListVpcEndpointsCommand
 */
export const de_ListVpcEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVpcEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.VpcEndpointSummaryList != null) {
    contents.VpcEndpointSummaryList = de_VpcEndpointSummaryList(data.VpcEndpointSummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListVpcEndpointsCommandError
 */
const de_ListVpcEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListVpcEndpointsForDomainCommand
 */
export const de_ListVpcEndpointsForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointsForDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVpcEndpointsForDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.VpcEndpointSummaryList != null) {
    contents.VpcEndpointSummaryList = de_VpcEndpointSummaryList(data.VpcEndpointSummaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListVpcEndpointsForDomainCommandError
 */
const de_ListVpcEndpointsForDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointsForDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PurchaseReservedInstanceOfferingCommand
 */
export const de_PurchaseReservedInstanceOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedInstanceOfferingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PurchaseReservedInstanceOfferingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ReservationName != null) {
    contents.ReservationName = __expectString(data.ReservationName);
  }
  if (data.ReservedInstanceId != null) {
    contents.ReservedInstanceId = __expectString(data.ReservedInstanceId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PurchaseReservedInstanceOfferingCommandError
 */
const de_PurchaseReservedInstanceOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedInstanceOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.opensearch#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1RejectInboundConnectionCommand
 */
export const de_RejectInboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RejectInboundConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection != null) {
    contents.Connection = de_InboundConnection(data.Connection, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RejectInboundConnectionCommandError
 */
const de_RejectInboundConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInboundConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RemoveTagsCommand
 */
export const de_RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RemoveTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveTagsCommandError
 */
const de_RemoveTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1RevokeVpcEndpointAccessCommand
 */
export const de_RevokeVpcEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeVpcEndpointAccessCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RevokeVpcEndpointAccessCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RevokeVpcEndpointAccessCommandError
 */
const de_RevokeVpcEndpointAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeVpcEndpointAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1StartServiceSoftwareUpdateCommand
 */
export const de_StartServiceSoftwareUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartServiceSoftwareUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartServiceSoftwareUpdateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ServiceSoftwareOptions != null) {
    contents.ServiceSoftwareOptions = de_ServiceSoftwareOptions(data.ServiceSoftwareOptions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartServiceSoftwareUpdateCommandError
 */
const de_StartServiceSoftwareUpdateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartServiceSoftwareUpdateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1UpdateDomainConfigCommand
 */
export const de_UpdateDomainConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDomainConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainConfig != null) {
    contents.DomainConfig = de_DomainConfig(data.DomainConfig, context);
  }
  if (data.DryRunProgressStatus != null) {
    contents.DryRunProgressStatus = de_DryRunProgressStatus(data.DryRunProgressStatus, context);
  }
  if (data.DryRunResults != null) {
    contents.DryRunResults = de_DryRunResults(data.DryRunResults, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDomainConfigCommandError
 */
const de_UpdateDomainConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidTypeException":
    case "com.amazonaws.opensearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1UpdatePackageCommand
 */
export const de_UpdatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PackageDetails != null) {
    contents.PackageDetails = de_PackageDetails(data.PackageDetails, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePackageCommandError
 */
const de_UpdatePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.opensearch#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1UpdateScheduledActionCommand
 */
export const de_UpdateScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScheduledActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateScheduledActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ScheduledAction != null) {
    contents.ScheduledAction = de_ScheduledAction(data.ScheduledAction, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateScheduledActionCommandError
 */
const de_UpdateScheduledActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScheduledActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.opensearch#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "SlotNotAvailableException":
    case "com.amazonaws.opensearch#SlotNotAvailableException":
      throw await de_SlotNotAvailableExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1UpdateVpcEndpointCommand
 */
export const de_UpdateVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateVpcEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcEndpoint != null) {
    contents.VpcEndpoint = de_VpcEndpoint(data.VpcEndpoint, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVpcEndpointCommandError
 */
const de_UpdateVpcEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.opensearch#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
 * deserializeAws_restJson1UpgradeDomainCommand
 */
export const de_UpgradeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpgradeDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdvancedOptions != null) {
    contents.AdvancedOptions = de_AdvancedOptions(data.AdvancedOptions, context);
  }
  if (data.ChangeProgressDetails != null) {
    contents.ChangeProgressDetails = de_ChangeProgressDetails(data.ChangeProgressDetails, context);
  }
  if (data.DomainName != null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.PerformCheckOnly != null) {
    contents.PerformCheckOnly = __expectBoolean(data.PerformCheckOnly);
  }
  if (data.TargetVersion != null) {
    contents.TargetVersion = __expectString(data.TargetVersion);
  }
  if (data.UpgradeId != null) {
    contents.UpgradeId = __expectString(data.UpgradeId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpgradeDomainCommandError
 */
const de_UpgradeDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.opensearch#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BaseExceptionRes
 */
const de_BaseExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BaseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new BaseException({
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
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DisabledOperationExceptionRes
 */
const de_DisabledOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DisabledOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new DisabledOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalExceptionRes
 */
const de_InternalExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidPaginationTokenExceptionRes
 */
const de_InvalidPaginationTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidPaginationTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidTypeExceptionRes
 */
const de_InvalidTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTypeException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidTypeException({
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
 * deserializeAws_restJson1SlotNotAvailableExceptionRes
 */
const de_SlotNotAvailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SlotNotAvailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.SlotSuggestions != null) {
    contents.SlotSuggestions = de_SlotList(data.SlotSuggestions, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new SlotNotAvailableException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AdvancedOptions
 */
const se_AdvancedOptions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1AdvancedSecurityOptionsInput
 */
const se_AdvancedSecurityOptionsInput = (input: AdvancedSecurityOptionsInput, context: __SerdeContext): any => {
  return {
    ...(input.AnonymousAuthEnabled != null && { AnonymousAuthEnabled: input.AnonymousAuthEnabled }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.InternalUserDatabaseEnabled != null && {
      InternalUserDatabaseEnabled: input.InternalUserDatabaseEnabled,
    }),
    ...(input.MasterUserOptions != null && {
      MasterUserOptions: se_MasterUserOptions(input.MasterUserOptions, context),
    }),
    ...(input.SAMLOptions != null && { SAMLOptions: se_SAMLOptionsInput(input.SAMLOptions, context) }),
  };
};

/**
 * serializeAws_restJson1AutoTuneMaintenanceSchedule
 */
const se_AutoTuneMaintenanceSchedule = (input: AutoTuneMaintenanceSchedule, context: __SerdeContext): any => {
  return {
    ...(input.CronExpressionForRecurrence != null && {
      CronExpressionForRecurrence: input.CronExpressionForRecurrence,
    }),
    ...(input.Duration != null && { Duration: se_Duration(input.Duration, context) }),
    ...(input.StartAt != null && { StartAt: Math.round(input.StartAt.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1AutoTuneMaintenanceScheduleList
 */
const se_AutoTuneMaintenanceScheduleList = (input: AutoTuneMaintenanceSchedule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AutoTuneMaintenanceSchedule(entry, context);
    });
};

/**
 * serializeAws_restJson1AutoTuneOptions
 */
const se_AutoTuneOptions = (input: AutoTuneOptions, context: __SerdeContext): any => {
  return {
    ...(input.DesiredState != null && { DesiredState: input.DesiredState }),
    ...(input.MaintenanceSchedules != null && {
      MaintenanceSchedules: se_AutoTuneMaintenanceScheduleList(input.MaintenanceSchedules, context),
    }),
    ...(input.RollbackOnDisable != null && { RollbackOnDisable: input.RollbackOnDisable }),
    ...(input.UseOffPeakWindow != null && { UseOffPeakWindow: input.UseOffPeakWindow }),
  };
};

/**
 * serializeAws_restJson1AutoTuneOptionsInput
 */
const se_AutoTuneOptionsInput = (input: AutoTuneOptionsInput, context: __SerdeContext): any => {
  return {
    ...(input.DesiredState != null && { DesiredState: input.DesiredState }),
    ...(input.MaintenanceSchedules != null && {
      MaintenanceSchedules: se_AutoTuneMaintenanceScheduleList(input.MaintenanceSchedules, context),
    }),
    ...(input.UseOffPeakWindow != null && { UseOffPeakWindow: input.UseOffPeakWindow }),
  };
};

/**
 * serializeAws_restJson1AWSDomainInformation
 */
const se_AWSDomainInformation = (input: AWSDomainInformation, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.OwnerId != null && { OwnerId: input.OwnerId }),
    ...(input.Region != null && { Region: input.Region }),
  };
};

/**
 * serializeAws_restJson1ClusterConfig
 */
const se_ClusterConfig = (input: ClusterConfig, context: __SerdeContext): any => {
  return {
    ...(input.ColdStorageOptions != null && {
      ColdStorageOptions: se_ColdStorageOptions(input.ColdStorageOptions, context),
    }),
    ...(input.DedicatedMasterCount != null && { DedicatedMasterCount: input.DedicatedMasterCount }),
    ...(input.DedicatedMasterEnabled != null && { DedicatedMasterEnabled: input.DedicatedMasterEnabled }),
    ...(input.DedicatedMasterType != null && { DedicatedMasterType: input.DedicatedMasterType }),
    ...(input.InstanceCount != null && { InstanceCount: input.InstanceCount }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.WarmCount != null && { WarmCount: input.WarmCount }),
    ...(input.WarmEnabled != null && { WarmEnabled: input.WarmEnabled }),
    ...(input.WarmType != null && { WarmType: input.WarmType }),
    ...(input.ZoneAwarenessConfig != null && {
      ZoneAwarenessConfig: se_ZoneAwarenessConfig(input.ZoneAwarenessConfig, context),
    }),
    ...(input.ZoneAwarenessEnabled != null && { ZoneAwarenessEnabled: input.ZoneAwarenessEnabled }),
  };
};

/**
 * serializeAws_restJson1CognitoOptions
 */
const se_CognitoOptions = (input: CognitoOptions, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_restJson1ColdStorageOptions
 */
const se_ColdStorageOptions = (input: ColdStorageOptions, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

/**
 * serializeAws_restJson1DescribePackagesFilter
 */
const se_DescribePackagesFilter = (input: DescribePackagesFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: se_DescribePackagesFilterValues(input.Value, context) }),
  };
};

/**
 * serializeAws_restJson1DescribePackagesFilterList
 */
const se_DescribePackagesFilterList = (input: DescribePackagesFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DescribePackagesFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1DescribePackagesFilterValues
 */
const se_DescribePackagesFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DomainEndpointOptions
 */
const se_DomainEndpointOptions = (input: DomainEndpointOptions, context: __SerdeContext): any => {
  return {
    ...(input.CustomEndpoint != null && { CustomEndpoint: input.CustomEndpoint }),
    ...(input.CustomEndpointCertificateArn != null && {
      CustomEndpointCertificateArn: input.CustomEndpointCertificateArn,
    }),
    ...(input.CustomEndpointEnabled != null && { CustomEndpointEnabled: input.CustomEndpointEnabled }),
    ...(input.EnforceHTTPS != null && { EnforceHTTPS: input.EnforceHTTPS }),
    ...(input.TLSSecurityPolicy != null && { TLSSecurityPolicy: input.TLSSecurityPolicy }),
  };
};

/**
 * serializeAws_restJson1DomainInformationContainer
 */
const se_DomainInformationContainer = (input: DomainInformationContainer, context: __SerdeContext): any => {
  return {
    ...(input.AWSDomainInformation != null && {
      AWSDomainInformation: se_AWSDomainInformation(input.AWSDomainInformation, context),
    }),
  };
};

/**
 * serializeAws_restJson1DomainNameList
 */
const se_DomainNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Duration
 */
const se_Duration = (input: Duration, context: __SerdeContext): any => {
  return {
    ...(input.Unit != null && { Unit: input.Unit }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1EBSOptions
 */
const se_EBSOptions = (input: EBSOptions, context: __SerdeContext): any => {
  return {
    ...(input.EBSEnabled != null && { EBSEnabled: input.EBSEnabled }),
    ...(input.Iops != null && { Iops: input.Iops }),
    ...(input.Throughput != null && { Throughput: input.Throughput }),
    ...(input.VolumeSize != null && { VolumeSize: input.VolumeSize }),
    ...(input.VolumeType != null && { VolumeType: input.VolumeType }),
  };
};

/**
 * serializeAws_restJson1EncryptionAtRestOptions
 */
const se_EncryptionAtRestOptions = (input: EncryptionAtRestOptions, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
  };
};

/**
 * serializeAws_restJson1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_ValueStringList(input.Values, context) }),
  };
};

/**
 * serializeAws_restJson1FilterList
 */
const se_FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_restJson1LogPublishingOption
 */
const se_LogPublishingOption = (input: LogPublishingOption, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogsLogGroupArn != null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

/**
 * serializeAws_restJson1LogPublishingOptions
 */
const se_LogPublishingOptions = (input: Record<string, LogPublishingOption>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [LogType | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_LogPublishingOption(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1MasterUserOptions
 */
const se_MasterUserOptions = (input: MasterUserOptions, context: __SerdeContext): any => {
  return {
    ...(input.MasterUserARN != null && { MasterUserARN: input.MasterUserARN }),
    ...(input.MasterUserName != null && { MasterUserName: input.MasterUserName }),
    ...(input.MasterUserPassword != null && { MasterUserPassword: input.MasterUserPassword }),
  };
};

/**
 * serializeAws_restJson1NodeToNodeEncryptionOptions
 */
const se_NodeToNodeEncryptionOptions = (input: NodeToNodeEncryptionOptions, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

/**
 * serializeAws_restJson1OffPeakWindow
 */
const se_OffPeakWindow = (input: OffPeakWindow, context: __SerdeContext): any => {
  return {
    ...(input.WindowStartTime != null && { WindowStartTime: se_WindowStartTime(input.WindowStartTime, context) }),
  };
};

/**
 * serializeAws_restJson1OffPeakWindowOptions
 */
const se_OffPeakWindowOptions = (input: OffPeakWindowOptions, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.OffPeakWindow != null && { OffPeakWindow: se_OffPeakWindow(input.OffPeakWindow, context) }),
  };
};

/**
 * serializeAws_restJson1PackageSource
 */
const se_PackageSource = (input: PackageSource, context: __SerdeContext): any => {
  return {
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
  };
};

/**
 * serializeAws_restJson1SAMLIdp
 */
const se_SAMLIdp = (input: SAMLIdp, context: __SerdeContext): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.MetadataContent != null && { MetadataContent: input.MetadataContent }),
  };
};

/**
 * serializeAws_restJson1SAMLOptionsInput
 */
const se_SAMLOptionsInput = (input: SAMLOptionsInput, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.Idp != null && { Idp: se_SAMLIdp(input.Idp, context) }),
    ...(input.MasterBackendRole != null && { MasterBackendRole: input.MasterBackendRole }),
    ...(input.MasterUserName != null && { MasterUserName: input.MasterUserName }),
    ...(input.RolesKey != null && { RolesKey: input.RolesKey }),
    ...(input.SessionTimeoutMinutes != null && { SessionTimeoutMinutes: input.SessionTimeoutMinutes }),
    ...(input.SubjectKey != null && { SubjectKey: input.SubjectKey }),
  };
};

/**
 * serializeAws_restJson1SnapshotOptions
 */
const se_SnapshotOptions = (input: SnapshotOptions, context: __SerdeContext): any => {
  return {
    ...(input.AutomatedSnapshotStartHour != null && { AutomatedSnapshotStartHour: input.AutomatedSnapshotStartHour }),
  };
};

/**
 * serializeAws_restJson1SoftwareUpdateOptions
 */
const se_SoftwareUpdateOptions = (input: SoftwareUpdateOptions, context: __SerdeContext): any => {
  return {
    ...(input.AutoSoftwareUpdateEnabled != null && { AutoSoftwareUpdateEnabled: input.AutoSoftwareUpdateEnabled }),
  };
};

/**
 * serializeAws_restJson1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1ValueStringList
 */
const se_ValueStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1VpcEndpointIdList
 */
const se_VpcEndpointIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1VPCOptions
 */
const se_VPCOptions = (input: VPCOptions, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && { SecurityGroupIds: se_StringList(input.SecurityGroupIds, context) }),
    ...(input.SubnetIds != null && { SubnetIds: se_StringList(input.SubnetIds, context) }),
  };
};

/**
 * serializeAws_restJson1WindowStartTime
 */
const se_WindowStartTime = (input: WindowStartTime, context: __SerdeContext): any => {
  return {
    ...(input.Hours != null && { Hours: input.Hours }),
    ...(input.Minutes != null && { Minutes: input.Minutes }),
  };
};

/**
 * serializeAws_restJson1ZoneAwarenessConfig
 */
const se_ZoneAwarenessConfig = (input: ZoneAwarenessConfig, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZoneCount != null && { AvailabilityZoneCount: input.AvailabilityZoneCount }),
  };
};

/**
 * deserializeAws_restJson1AccessPoliciesStatus
 */
const de_AccessPoliciesStatus = (output: any, context: __SerdeContext): AccessPoliciesStatus => {
  return {
    Options: __expectString(output.Options),
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AdditionalLimit
 */
const de_AdditionalLimit = (output: any, context: __SerdeContext): AdditionalLimit => {
  return {
    LimitName: __expectString(output.LimitName),
    LimitValues: output.LimitValues != null ? de_LimitValueList(output.LimitValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AdditionalLimitList
 */
const de_AdditionalLimitList = (output: any, context: __SerdeContext): AdditionalLimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AdditionalLimit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AdvancedOptions
 */
const de_AdvancedOptions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AdvancedOptionsStatus
 */
const de_AdvancedOptionsStatus = (output: any, context: __SerdeContext): AdvancedOptionsStatus => {
  return {
    Options: output.Options != null ? de_AdvancedOptions(output.Options, context) : undefined,
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AdvancedSecurityOptions
 */
const de_AdvancedSecurityOptions = (output: any, context: __SerdeContext): AdvancedSecurityOptions => {
  return {
    AnonymousAuthDisableDate:
      output.AnonymousAuthDisableDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AnonymousAuthDisableDate)))
        : undefined,
    AnonymousAuthEnabled: __expectBoolean(output.AnonymousAuthEnabled),
    Enabled: __expectBoolean(output.Enabled),
    InternalUserDatabaseEnabled: __expectBoolean(output.InternalUserDatabaseEnabled),
    SAMLOptions: output.SAMLOptions != null ? de_SAMLOptionsOutput(output.SAMLOptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AdvancedSecurityOptionsStatus
 */
const de_AdvancedSecurityOptionsStatus = (output: any, context: __SerdeContext): AdvancedSecurityOptionsStatus => {
  return {
    Options: output.Options != null ? de_AdvancedSecurityOptions(output.Options, context) : undefined,
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AuthorizedPrincipal
 */
const de_AuthorizedPrincipal = (output: any, context: __SerdeContext): AuthorizedPrincipal => {
  return {
    Principal: __expectString(output.Principal),
    PrincipalType: __expectString(output.PrincipalType),
  } as any;
};

/**
 * deserializeAws_restJson1AuthorizedPrincipalList
 */
const de_AuthorizedPrincipalList = (output: any, context: __SerdeContext): AuthorizedPrincipal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AuthorizedPrincipal(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AutoTune
 */
const de_AutoTune = (output: any, context: __SerdeContext): AutoTune => {
  return {
    AutoTuneDetails: output.AutoTuneDetails != null ? de_AutoTuneDetails(output.AutoTuneDetails, context) : undefined,
    AutoTuneType: __expectString(output.AutoTuneType),
  } as any;
};

/**
 * deserializeAws_restJson1AutoTuneDetails
 */
const de_AutoTuneDetails = (output: any, context: __SerdeContext): AutoTuneDetails => {
  return {
    ScheduledAutoTuneDetails:
      output.ScheduledAutoTuneDetails != null
        ? de_ScheduledAutoTuneDetails(output.ScheduledAutoTuneDetails, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AutoTuneList
 */
const de_AutoTuneList = (output: any, context: __SerdeContext): AutoTune[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AutoTune(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AutoTuneMaintenanceSchedule
 */
const de_AutoTuneMaintenanceSchedule = (output: any, context: __SerdeContext): AutoTuneMaintenanceSchedule => {
  return {
    CronExpressionForRecurrence: __expectString(output.CronExpressionForRecurrence),
    Duration: output.Duration != null ? de_Duration(output.Duration, context) : undefined,
    StartAt:
      output.StartAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AutoTuneMaintenanceScheduleList
 */
const de_AutoTuneMaintenanceScheduleList = (output: any, context: __SerdeContext): AutoTuneMaintenanceSchedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AutoTuneMaintenanceSchedule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AutoTuneOptions
 */
const de_AutoTuneOptions = (output: any, context: __SerdeContext): AutoTuneOptions => {
  return {
    DesiredState: __expectString(output.DesiredState),
    MaintenanceSchedules:
      output.MaintenanceSchedules != null
        ? de_AutoTuneMaintenanceScheduleList(output.MaintenanceSchedules, context)
        : undefined,
    RollbackOnDisable: __expectString(output.RollbackOnDisable),
    UseOffPeakWindow: __expectBoolean(output.UseOffPeakWindow),
  } as any;
};

/**
 * deserializeAws_restJson1AutoTuneOptionsOutput
 */
const de_AutoTuneOptionsOutput = (output: any, context: __SerdeContext): AutoTuneOptionsOutput => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    State: __expectString(output.State),
    UseOffPeakWindow: __expectBoolean(output.UseOffPeakWindow),
  } as any;
};

/**
 * deserializeAws_restJson1AutoTuneOptionsStatus
 */
const de_AutoTuneOptionsStatus = (output: any, context: __SerdeContext): AutoTuneOptionsStatus => {
  return {
    Options: output.Options != null ? de_AutoTuneOptions(output.Options, context) : undefined,
    Status: output.Status != null ? de_AutoTuneStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AutoTuneStatus
 */
const de_AutoTuneStatus = (output: any, context: __SerdeContext): AutoTuneStatus => {
  return {
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    PendingDeletion: __expectBoolean(output.PendingDeletion),
    State: __expectString(output.State),
    UpdateDate:
      output.UpdateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateDate))) : undefined,
    UpdateVersion: __expectInt32(output.UpdateVersion),
  } as any;
};

/**
 * deserializeAws_restJson1AWSDomainInformation
 */
const de_AWSDomainInformation = (output: any, context: __SerdeContext): AWSDomainInformation => {
  return {
    DomainName: __expectString(output.DomainName),
    OwnerId: __expectString(output.OwnerId),
    Region: __expectString(output.Region),
  } as any;
};

/**
 * deserializeAws_restJson1ChangeProgressDetails
 */
const de_ChangeProgressDetails = (output: any, context: __SerdeContext): ChangeProgressDetails => {
  return {
    ChangeId: __expectString(output.ChangeId),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_restJson1ChangeProgressStage
 */
const de_ChangeProgressStage = (output: any, context: __SerdeContext): ChangeProgressStage => {
  return {
    Description: __expectString(output.Description),
    LastUpdated:
      output.LastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdated)))
        : undefined,
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1ChangeProgressStageList
 */
const de_ChangeProgressStageList = (output: any, context: __SerdeContext): ChangeProgressStage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChangeProgressStage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChangeProgressStatusDetails
 */
const de_ChangeProgressStatusDetails = (output: any, context: __SerdeContext): ChangeProgressStatusDetails => {
  return {
    ChangeId: __expectString(output.ChangeId),
    ChangeProgressStages:
      output.ChangeProgressStages != null
        ? de_ChangeProgressStageList(output.ChangeProgressStages, context)
        : undefined,
    CompletedProperties:
      output.CompletedProperties != null ? de_StringList(output.CompletedProperties, context) : undefined,
    PendingProperties: output.PendingProperties != null ? de_StringList(output.PendingProperties, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    TotalNumberOfStages: __expectInt32(output.TotalNumberOfStages),
  } as any;
};

/**
 * deserializeAws_restJson1ClusterConfig
 */
const de_ClusterConfig = (output: any, context: __SerdeContext): ClusterConfig => {
  return {
    ColdStorageOptions:
      output.ColdStorageOptions != null ? de_ColdStorageOptions(output.ColdStorageOptions, context) : undefined,
    DedicatedMasterCount: __expectInt32(output.DedicatedMasterCount),
    DedicatedMasterEnabled: __expectBoolean(output.DedicatedMasterEnabled),
    DedicatedMasterType: __expectString(output.DedicatedMasterType),
    InstanceCount: __expectInt32(output.InstanceCount),
    InstanceType: __expectString(output.InstanceType),
    WarmCount: __expectInt32(output.WarmCount),
    WarmEnabled: __expectBoolean(output.WarmEnabled),
    WarmType: __expectString(output.WarmType),
    ZoneAwarenessConfig:
      output.ZoneAwarenessConfig != null ? de_ZoneAwarenessConfig(output.ZoneAwarenessConfig, context) : undefined,
    ZoneAwarenessEnabled: __expectBoolean(output.ZoneAwarenessEnabled),
  } as any;
};

/**
 * deserializeAws_restJson1ClusterConfigStatus
 */
const de_ClusterConfigStatus = (output: any, context: __SerdeContext): ClusterConfigStatus => {
  return {
    Options: output.Options != null ? de_ClusterConfig(output.Options, context) : undefined,
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CognitoOptions
 */
const de_CognitoOptions = (output: any, context: __SerdeContext): CognitoOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    IdentityPoolId: __expectString(output.IdentityPoolId),
    RoleArn: __expectString(output.RoleArn),
    UserPoolId: __expectString(output.UserPoolId),
  } as any;
};

/**
 * deserializeAws_restJson1CognitoOptionsStatus
 */
const de_CognitoOptionsStatus = (output: any, context: __SerdeContext): CognitoOptionsStatus => {
  return {
    Options: output.Options != null ? de_CognitoOptions(output.Options, context) : undefined,
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ColdStorageOptions
 */
const de_ColdStorageOptions = (output: any, context: __SerdeContext): ColdStorageOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

/**
 * deserializeAws_restJson1CompatibleVersionsList
 */
const de_CompatibleVersionsList = (output: any, context: __SerdeContext): CompatibleVersionsMap[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CompatibleVersionsMap(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CompatibleVersionsMap
 */
const de_CompatibleVersionsMap = (output: any, context: __SerdeContext): CompatibleVersionsMap => {
  return {
    SourceVersion: __expectString(output.SourceVersion),
    TargetVersions: output.TargetVersions != null ? de_VersionList(output.TargetVersions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConnectionProperties
 */
const de_ConnectionProperties = (output: any, context: __SerdeContext): ConnectionProperties => {
  return {
    Endpoint: __expectString(output.Endpoint),
  } as any;
};

/**
 * deserializeAws_restJson1DomainConfig
 */
const de_DomainConfig = (output: any, context: __SerdeContext): DomainConfig => {
  return {
    AccessPolicies: output.AccessPolicies != null ? de_AccessPoliciesStatus(output.AccessPolicies, context) : undefined,
    AdvancedOptions:
      output.AdvancedOptions != null ? de_AdvancedOptionsStatus(output.AdvancedOptions, context) : undefined,
    AdvancedSecurityOptions:
      output.AdvancedSecurityOptions != null
        ? de_AdvancedSecurityOptionsStatus(output.AdvancedSecurityOptions, context)
        : undefined,
    AutoTuneOptions:
      output.AutoTuneOptions != null ? de_AutoTuneOptionsStatus(output.AutoTuneOptions, context) : undefined,
    ChangeProgressDetails:
      output.ChangeProgressDetails != null
        ? de_ChangeProgressDetails(output.ChangeProgressDetails, context)
        : undefined,
    ClusterConfig: output.ClusterConfig != null ? de_ClusterConfigStatus(output.ClusterConfig, context) : undefined,
    CognitoOptions: output.CognitoOptions != null ? de_CognitoOptionsStatus(output.CognitoOptions, context) : undefined,
    DomainEndpointOptions:
      output.DomainEndpointOptions != null
        ? de_DomainEndpointOptionsStatus(output.DomainEndpointOptions, context)
        : undefined,
    EBSOptions: output.EBSOptions != null ? de_EBSOptionsStatus(output.EBSOptions, context) : undefined,
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions != null
        ? de_EncryptionAtRestOptionsStatus(output.EncryptionAtRestOptions, context)
        : undefined,
    EngineVersion: output.EngineVersion != null ? de_VersionStatus(output.EngineVersion, context) : undefined,
    LogPublishingOptions:
      output.LogPublishingOptions != null
        ? de_LogPublishingOptionsStatus(output.LogPublishingOptions, context)
        : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions != null
        ? de_NodeToNodeEncryptionOptionsStatus(output.NodeToNodeEncryptionOptions, context)
        : undefined,
    OffPeakWindowOptions:
      output.OffPeakWindowOptions != null
        ? de_OffPeakWindowOptionsStatus(output.OffPeakWindowOptions, context)
        : undefined,
    SnapshotOptions:
      output.SnapshotOptions != null ? de_SnapshotOptionsStatus(output.SnapshotOptions, context) : undefined,
    SoftwareUpdateOptions:
      output.SoftwareUpdateOptions != null
        ? de_SoftwareUpdateOptionsStatus(output.SoftwareUpdateOptions, context)
        : undefined,
    VPCOptions: output.VPCOptions != null ? de_VPCDerivedInfoStatus(output.VPCOptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DomainEndpointOptions
 */
const de_DomainEndpointOptions = (output: any, context: __SerdeContext): DomainEndpointOptions => {
  return {
    CustomEndpoint: __expectString(output.CustomEndpoint),
    CustomEndpointCertificateArn: __expectString(output.CustomEndpointCertificateArn),
    CustomEndpointEnabled: __expectBoolean(output.CustomEndpointEnabled),
    EnforceHTTPS: __expectBoolean(output.EnforceHTTPS),
    TLSSecurityPolicy: __expectString(output.TLSSecurityPolicy),
  } as any;
};

/**
 * deserializeAws_restJson1DomainEndpointOptionsStatus
 */
const de_DomainEndpointOptionsStatus = (output: any, context: __SerdeContext): DomainEndpointOptionsStatus => {
  return {
    Options: output.Options != null ? de_DomainEndpointOptions(output.Options, context) : undefined,
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DomainInfo
 */
const de_DomainInfo = (output: any, context: __SerdeContext): DomainInfo => {
  return {
    DomainName: __expectString(output.DomainName),
    EngineType: __expectString(output.EngineType),
  } as any;
};

/**
 * deserializeAws_restJson1DomainInfoList
 */
const de_DomainInfoList = (output: any, context: __SerdeContext): DomainInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DomainInformationContainer
 */
const de_DomainInformationContainer = (output: any, context: __SerdeContext): DomainInformationContainer => {
  return {
    AWSDomainInformation:
      output.AWSDomainInformation != null ? de_AWSDomainInformation(output.AWSDomainInformation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DomainPackageDetails
 */
const de_DomainPackageDetails = (output: any, context: __SerdeContext): DomainPackageDetails => {
  return {
    DomainName: __expectString(output.DomainName),
    DomainPackageStatus: __expectString(output.DomainPackageStatus),
    ErrorDetails: output.ErrorDetails != null ? de_ErrorDetails(output.ErrorDetails, context) : undefined,
    LastUpdated:
      output.LastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdated)))
        : undefined,
    PackageID: __expectString(output.PackageID),
    PackageName: __expectString(output.PackageName),
    PackageType: __expectString(output.PackageType),
    PackageVersion: __expectString(output.PackageVersion),
    ReferencePath: __expectString(output.ReferencePath),
  } as any;
};

/**
 * deserializeAws_restJson1DomainPackageDetailsList
 */
const de_DomainPackageDetailsList = (output: any, context: __SerdeContext): DomainPackageDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainPackageDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DomainStatus
 */
const de_DomainStatus = (output: any, context: __SerdeContext): DomainStatus => {
  return {
    ARN: __expectString(output.ARN),
    AccessPolicies: __expectString(output.AccessPolicies),
    AdvancedOptions: output.AdvancedOptions != null ? de_AdvancedOptions(output.AdvancedOptions, context) : undefined,
    AdvancedSecurityOptions:
      output.AdvancedSecurityOptions != null
        ? de_AdvancedSecurityOptions(output.AdvancedSecurityOptions, context)
        : undefined,
    AutoTuneOptions:
      output.AutoTuneOptions != null ? de_AutoTuneOptionsOutput(output.AutoTuneOptions, context) : undefined,
    ChangeProgressDetails:
      output.ChangeProgressDetails != null
        ? de_ChangeProgressDetails(output.ChangeProgressDetails, context)
        : undefined,
    ClusterConfig: output.ClusterConfig != null ? de_ClusterConfig(output.ClusterConfig, context) : undefined,
    CognitoOptions: output.CognitoOptions != null ? de_CognitoOptions(output.CognitoOptions, context) : undefined,
    Created: __expectBoolean(output.Created),
    Deleted: __expectBoolean(output.Deleted),
    DomainEndpointOptions:
      output.DomainEndpointOptions != null
        ? de_DomainEndpointOptions(output.DomainEndpointOptions, context)
        : undefined,
    DomainId: __expectString(output.DomainId),
    DomainName: __expectString(output.DomainName),
    EBSOptions: output.EBSOptions != null ? de_EBSOptions(output.EBSOptions, context) : undefined,
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions != null
        ? de_EncryptionAtRestOptions(output.EncryptionAtRestOptions, context)
        : undefined,
    Endpoint: __expectString(output.Endpoint),
    Endpoints: output.Endpoints != null ? de_EndpointsMap(output.Endpoints, context) : undefined,
    EngineVersion: __expectString(output.EngineVersion),
    LogPublishingOptions:
      output.LogPublishingOptions != null ? de_LogPublishingOptions(output.LogPublishingOptions, context) : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions != null
        ? de_NodeToNodeEncryptionOptions(output.NodeToNodeEncryptionOptions, context)
        : undefined,
    OffPeakWindowOptions:
      output.OffPeakWindowOptions != null ? de_OffPeakWindowOptions(output.OffPeakWindowOptions, context) : undefined,
    Processing: __expectBoolean(output.Processing),
    ServiceSoftwareOptions:
      output.ServiceSoftwareOptions != null
        ? de_ServiceSoftwareOptions(output.ServiceSoftwareOptions, context)
        : undefined,
    SnapshotOptions: output.SnapshotOptions != null ? de_SnapshotOptions(output.SnapshotOptions, context) : undefined,
    SoftwareUpdateOptions:
      output.SoftwareUpdateOptions != null
        ? de_SoftwareUpdateOptions(output.SoftwareUpdateOptions, context)
        : undefined,
    UpgradeProcessing: __expectBoolean(output.UpgradeProcessing),
    VPCOptions: output.VPCOptions != null ? de_VPCDerivedInfo(output.VPCOptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DomainStatusList
 */
const de_DomainStatusList = (output: any, context: __SerdeContext): DomainStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DryRunProgressStatus
 */
const de_DryRunProgressStatus = (output: any, context: __SerdeContext): DryRunProgressStatus => {
  return {
    CreationDate: __expectString(output.CreationDate),
    DryRunId: __expectString(output.DryRunId),
    DryRunStatus: __expectString(output.DryRunStatus),
    UpdateDate: __expectString(output.UpdateDate),
    ValidationFailures:
      output.ValidationFailures != null ? de_ValidationFailures(output.ValidationFailures, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DryRunResults
 */
const de_DryRunResults = (output: any, context: __SerdeContext): DryRunResults => {
  return {
    DeploymentType: __expectString(output.DeploymentType),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_restJson1Duration
 */
const de_Duration = (output: any, context: __SerdeContext): Duration => {
  return {
    Unit: __expectString(output.Unit),
    Value: __expectLong(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1EBSOptions
 */
const de_EBSOptions = (output: any, context: __SerdeContext): EBSOptions => {
  return {
    EBSEnabled: __expectBoolean(output.EBSEnabled),
    Iops: __expectInt32(output.Iops),
    Throughput: __expectInt32(output.Throughput),
    VolumeSize: __expectInt32(output.VolumeSize),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

/**
 * deserializeAws_restJson1EBSOptionsStatus
 */
const de_EBSOptionsStatus = (output: any, context: __SerdeContext): EBSOptionsStatus => {
  return {
    Options: output.Options != null ? de_EBSOptions(output.Options, context) : undefined,
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EncryptionAtRestOptions
 */
const de_EncryptionAtRestOptions = (output: any, context: __SerdeContext): EncryptionAtRestOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    KmsKeyId: __expectString(output.KmsKeyId),
  } as any;
};

/**
 * deserializeAws_restJson1EncryptionAtRestOptionsStatus
 */
const de_EncryptionAtRestOptionsStatus = (output: any, context: __SerdeContext): EncryptionAtRestOptionsStatus => {
  return {
    Options: output.Options != null ? de_EncryptionAtRestOptions(output.Options, context) : undefined,
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EndpointsMap
 */
const de_EndpointsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ErrorDetails
 */
const de_ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    ErrorType: __expectString(output.ErrorType),
  } as any;
};

/**
 * deserializeAws_restJson1InboundConnection
 */
const de_InboundConnection = (output: any, context: __SerdeContext): InboundConnection => {
  return {
    ConnectionId: __expectString(output.ConnectionId),
    ConnectionMode: __expectString(output.ConnectionMode),
    ConnectionStatus:
      output.ConnectionStatus != null ? de_InboundConnectionStatus(output.ConnectionStatus, context) : undefined,
    LocalDomainInfo:
      output.LocalDomainInfo != null ? de_DomainInformationContainer(output.LocalDomainInfo, context) : undefined,
    RemoteDomainInfo:
      output.RemoteDomainInfo != null ? de_DomainInformationContainer(output.RemoteDomainInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InboundConnections
 */
const de_InboundConnections = (output: any, context: __SerdeContext): InboundConnection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InboundConnection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InboundConnectionStatus
 */
const de_InboundConnectionStatus = (output: any, context: __SerdeContext): InboundConnectionStatus => {
  return {
    Message: __expectString(output.Message),
    StatusCode: __expectString(output.StatusCode),
  } as any;
};

/**
 * deserializeAws_restJson1InstanceCountLimits
 */
const de_InstanceCountLimits = (output: any, context: __SerdeContext): InstanceCountLimits => {
  return {
    MaximumInstanceCount: __expectInt32(output.MaximumInstanceCount),
    MinimumInstanceCount: __expectInt32(output.MinimumInstanceCount),
  } as any;
};

/**
 * deserializeAws_restJson1InstanceLimits
 */
const de_InstanceLimits = (output: any, context: __SerdeContext): InstanceLimits => {
  return {
    InstanceCountLimits:
      output.InstanceCountLimits != null ? de_InstanceCountLimits(output.InstanceCountLimits, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InstanceRoleList
 */
const de_InstanceRoleList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1InstanceTypeDetails
 */
const de_InstanceTypeDetails = (output: any, context: __SerdeContext): InstanceTypeDetails => {
  return {
    AdvancedSecurityEnabled: __expectBoolean(output.AdvancedSecurityEnabled),
    AppLogsEnabled: __expectBoolean(output.AppLogsEnabled),
    CognitoEnabled: __expectBoolean(output.CognitoEnabled),
    EncryptionEnabled: __expectBoolean(output.EncryptionEnabled),
    InstanceRole: output.InstanceRole != null ? de_InstanceRoleList(output.InstanceRole, context) : undefined,
    InstanceType: __expectString(output.InstanceType),
    WarmEnabled: __expectBoolean(output.WarmEnabled),
  } as any;
};

/**
 * deserializeAws_restJson1InstanceTypeDetailsList
 */
const de_InstanceTypeDetailsList = (output: any, context: __SerdeContext): InstanceTypeDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceTypeDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Issues
 */
const de_Issues = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Limits
 */
const de_Limits = (output: any, context: __SerdeContext): Limits => {
  return {
    AdditionalLimits:
      output.AdditionalLimits != null ? de_AdditionalLimitList(output.AdditionalLimits, context) : undefined,
    InstanceLimits: output.InstanceLimits != null ? de_InstanceLimits(output.InstanceLimits, context) : undefined,
    StorageTypes: output.StorageTypes != null ? de_StorageTypeList(output.StorageTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LimitsByRole
 */
const de_LimitsByRole = (output: any, context: __SerdeContext): Record<string, Limits> => {
  return Object.entries(output).reduce((acc: Record<string, Limits>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Limits(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1LimitValueList
 */
const de_LimitValueList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1LogPublishingOption
 */
const de_LogPublishingOption = (output: any, context: __SerdeContext): LogPublishingOption => {
  return {
    CloudWatchLogsLogGroupArn: __expectString(output.CloudWatchLogsLogGroupArn),
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

/**
 * deserializeAws_restJson1LogPublishingOptions
 */
const de_LogPublishingOptions = (output: any, context: __SerdeContext): Record<string, LogPublishingOption> => {
  return Object.entries(output).reduce(
    (acc: Record<string, LogPublishingOption>, [key, value]: [LogType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_LogPublishingOption(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1LogPublishingOptionsStatus
 */
const de_LogPublishingOptionsStatus = (output: any, context: __SerdeContext): LogPublishingOptionsStatus => {
  return {
    Options: output.Options != null ? de_LogPublishingOptions(output.Options, context) : undefined,
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NodeToNodeEncryptionOptions
 */
const de_NodeToNodeEncryptionOptions = (output: any, context: __SerdeContext): NodeToNodeEncryptionOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

/**
 * deserializeAws_restJson1NodeToNodeEncryptionOptionsStatus
 */
const de_NodeToNodeEncryptionOptionsStatus = (
  output: any,
  context: __SerdeContext
): NodeToNodeEncryptionOptionsStatus => {
  return {
    Options: output.Options != null ? de_NodeToNodeEncryptionOptions(output.Options, context) : undefined,
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OffPeakWindow
 */
const de_OffPeakWindow = (output: any, context: __SerdeContext): OffPeakWindow => {
  return {
    WindowStartTime: output.WindowStartTime != null ? de_WindowStartTime(output.WindowStartTime, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OffPeakWindowOptions
 */
const de_OffPeakWindowOptions = (output: any, context: __SerdeContext): OffPeakWindowOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    OffPeakWindow: output.OffPeakWindow != null ? de_OffPeakWindow(output.OffPeakWindow, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OffPeakWindowOptionsStatus
 */
const de_OffPeakWindowOptionsStatus = (output: any, context: __SerdeContext): OffPeakWindowOptionsStatus => {
  return {
    Options: output.Options != null ? de_OffPeakWindowOptions(output.Options, context) : undefined,
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OptionStatus
 */
const de_OptionStatus = (output: any, context: __SerdeContext): OptionStatus => {
  return {
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    PendingDeletion: __expectBoolean(output.PendingDeletion),
    State: __expectString(output.State),
    UpdateDate:
      output.UpdateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateDate))) : undefined,
    UpdateVersion: __expectInt32(output.UpdateVersion),
  } as any;
};

/**
 * deserializeAws_restJson1OutboundConnection
 */
const de_OutboundConnection = (output: any, context: __SerdeContext): OutboundConnection => {
  return {
    ConnectionAlias: __expectString(output.ConnectionAlias),
    ConnectionId: __expectString(output.ConnectionId),
    ConnectionMode: __expectString(output.ConnectionMode),
    ConnectionProperties:
      output.ConnectionProperties != null ? de_ConnectionProperties(output.ConnectionProperties, context) : undefined,
    ConnectionStatus:
      output.ConnectionStatus != null ? de_OutboundConnectionStatus(output.ConnectionStatus, context) : undefined,
    LocalDomainInfo:
      output.LocalDomainInfo != null ? de_DomainInformationContainer(output.LocalDomainInfo, context) : undefined,
    RemoteDomainInfo:
      output.RemoteDomainInfo != null ? de_DomainInformationContainer(output.RemoteDomainInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OutboundConnections
 */
const de_OutboundConnections = (output: any, context: __SerdeContext): OutboundConnection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OutboundConnection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OutboundConnectionStatus
 */
const de_OutboundConnectionStatus = (output: any, context: __SerdeContext): OutboundConnectionStatus => {
  return {
    Message: __expectString(output.Message),
    StatusCode: __expectString(output.StatusCode),
  } as any;
};

/**
 * deserializeAws_restJson1PackageDetails
 */
const de_PackageDetails = (output: any, context: __SerdeContext): PackageDetails => {
  return {
    AvailablePackageVersion: __expectString(output.AvailablePackageVersion),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    ErrorDetails: output.ErrorDetails != null ? de_ErrorDetails(output.ErrorDetails, context) : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    PackageDescription: __expectString(output.PackageDescription),
    PackageID: __expectString(output.PackageID),
    PackageName: __expectString(output.PackageName),
    PackageStatus: __expectString(output.PackageStatus),
    PackageType: __expectString(output.PackageType),
  } as any;
};

/**
 * deserializeAws_restJson1PackageDetailsList
 */
const de_PackageDetailsList = (output: any, context: __SerdeContext): PackageDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PackageDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PackageVersionHistory
 */
const de_PackageVersionHistory = (output: any, context: __SerdeContext): PackageVersionHistory => {
  return {
    CommitMessage: __expectString(output.CommitMessage),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    PackageVersion: __expectString(output.PackageVersion),
  } as any;
};

/**
 * deserializeAws_restJson1PackageVersionHistoryList
 */
const de_PackageVersionHistoryList = (output: any, context: __SerdeContext): PackageVersionHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PackageVersionHistory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecurringCharge
 */
const de_RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  return {
    RecurringChargeAmount: __limitedParseDouble(output.RecurringChargeAmount),
    RecurringChargeFrequency: __expectString(output.RecurringChargeFrequency),
  } as any;
};

/**
 * deserializeAws_restJson1RecurringChargeList
 */
const de_RecurringChargeList = (output: any, context: __SerdeContext): RecurringCharge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecurringCharge(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReservedInstance
 */
const de_ReservedInstance = (output: any, context: __SerdeContext): ReservedInstance => {
  return {
    BillingSubscriptionId: __expectLong(output.BillingSubscriptionId),
    CurrencyCode: __expectString(output.CurrencyCode),
    Duration: __expectInt32(output.Duration),
    FixedPrice: __limitedParseDouble(output.FixedPrice),
    InstanceCount: __expectInt32(output.InstanceCount),
    InstanceType: __expectString(output.InstanceType),
    PaymentOption: __expectString(output.PaymentOption),
    RecurringCharges:
      output.RecurringCharges != null ? de_RecurringChargeList(output.RecurringCharges, context) : undefined,
    ReservationName: __expectString(output.ReservationName),
    ReservedInstanceId: __expectString(output.ReservedInstanceId),
    ReservedInstanceOfferingId: __expectString(output.ReservedInstanceOfferingId),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
    UsagePrice: __limitedParseDouble(output.UsagePrice),
  } as any;
};

/**
 * deserializeAws_restJson1ReservedInstanceList
 */
const de_ReservedInstanceList = (output: any, context: __SerdeContext): ReservedInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReservedInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReservedInstanceOffering
 */
const de_ReservedInstanceOffering = (output: any, context: __SerdeContext): ReservedInstanceOffering => {
  return {
    CurrencyCode: __expectString(output.CurrencyCode),
    Duration: __expectInt32(output.Duration),
    FixedPrice: __limitedParseDouble(output.FixedPrice),
    InstanceType: __expectString(output.InstanceType),
    PaymentOption: __expectString(output.PaymentOption),
    RecurringCharges:
      output.RecurringCharges != null ? de_RecurringChargeList(output.RecurringCharges, context) : undefined,
    ReservedInstanceOfferingId: __expectString(output.ReservedInstanceOfferingId),
    UsagePrice: __limitedParseDouble(output.UsagePrice),
  } as any;
};

/**
 * deserializeAws_restJson1ReservedInstanceOfferingList
 */
const de_ReservedInstanceOfferingList = (output: any, context: __SerdeContext): ReservedInstanceOffering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReservedInstanceOffering(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SAMLIdp
 */
const de_SAMLIdp = (output: any, context: __SerdeContext): SAMLIdp => {
  return {
    EntityId: __expectString(output.EntityId),
    MetadataContent: __expectString(output.MetadataContent),
  } as any;
};

/**
 * deserializeAws_restJson1SAMLOptionsOutput
 */
const de_SAMLOptionsOutput = (output: any, context: __SerdeContext): SAMLOptionsOutput => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    Idp: output.Idp != null ? de_SAMLIdp(output.Idp, context) : undefined,
    RolesKey: __expectString(output.RolesKey),
    SessionTimeoutMinutes: __expectInt32(output.SessionTimeoutMinutes),
    SubjectKey: __expectString(output.SubjectKey),
  } as any;
};

/**
 * deserializeAws_restJson1ScheduledAction
 */
const de_ScheduledAction = (output: any, context: __SerdeContext): ScheduledAction => {
  return {
    Cancellable: __expectBoolean(output.Cancellable),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Mandatory: __expectBoolean(output.Mandatory),
    ScheduledBy: __expectString(output.ScheduledBy),
    ScheduledTime: __expectLong(output.ScheduledTime),
    Severity: __expectString(output.Severity),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ScheduledActionsList
 */
const de_ScheduledActionsList = (output: any, context: __SerdeContext): ScheduledAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ScheduledAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ScheduledAutoTuneDetails
 */
const de_ScheduledAutoTuneDetails = (output: any, context: __SerdeContext): ScheduledAutoTuneDetails => {
  return {
    Action: __expectString(output.Action),
    ActionType: __expectString(output.ActionType),
    Date: output.Date != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Date))) : undefined,
    Severity: __expectString(output.Severity),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceSoftwareOptions
 */
const de_ServiceSoftwareOptions = (output: any, context: __SerdeContext): ServiceSoftwareOptions => {
  return {
    AutomatedUpdateDate:
      output.AutomatedUpdateDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AutomatedUpdateDate)))
        : undefined,
    Cancellable: __expectBoolean(output.Cancellable),
    CurrentVersion: __expectString(output.CurrentVersion),
    Description: __expectString(output.Description),
    NewVersion: __expectString(output.NewVersion),
    OptionalDeployment: __expectBoolean(output.OptionalDeployment),
    UpdateAvailable: __expectBoolean(output.UpdateAvailable),
    UpdateStatus: __expectString(output.UpdateStatus),
  } as any;
};

/**
 * deserializeAws_restJson1SlotList
 */
const de_SlotList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectLong(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SnapshotOptions
 */
const de_SnapshotOptions = (output: any, context: __SerdeContext): SnapshotOptions => {
  return {
    AutomatedSnapshotStartHour: __expectInt32(output.AutomatedSnapshotStartHour),
  } as any;
};

/**
 * deserializeAws_restJson1SnapshotOptionsStatus
 */
const de_SnapshotOptionsStatus = (output: any, context: __SerdeContext): SnapshotOptionsStatus => {
  return {
    Options: output.Options != null ? de_SnapshotOptions(output.Options, context) : undefined,
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SoftwareUpdateOptions
 */
const de_SoftwareUpdateOptions = (output: any, context: __SerdeContext): SoftwareUpdateOptions => {
  return {
    AutoSoftwareUpdateEnabled: __expectBoolean(output.AutoSoftwareUpdateEnabled),
  } as any;
};

/**
 * deserializeAws_restJson1SoftwareUpdateOptionsStatus
 */
const de_SoftwareUpdateOptionsStatus = (output: any, context: __SerdeContext): SoftwareUpdateOptionsStatus => {
  return {
    Options: output.Options != null ? de_SoftwareUpdateOptions(output.Options, context) : undefined,
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1StorageType
 */
const de_StorageType = (output: any, context: __SerdeContext): StorageType => {
  return {
    StorageSubTypeName: __expectString(output.StorageSubTypeName),
    StorageTypeLimits:
      output.StorageTypeLimits != null ? de_StorageTypeLimitList(output.StorageTypeLimits, context) : undefined,
    StorageTypeName: __expectString(output.StorageTypeName),
  } as any;
};

/**
 * deserializeAws_restJson1StorageTypeLimit
 */
const de_StorageTypeLimit = (output: any, context: __SerdeContext): StorageTypeLimit => {
  return {
    LimitName: __expectString(output.LimitName),
    LimitValues: output.LimitValues != null ? de_LimitValueList(output.LimitValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1StorageTypeLimitList
 */
const de_StorageTypeLimitList = (output: any, context: __SerdeContext): StorageTypeLimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StorageTypeLimit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StorageTypeList
 */
const de_StorageTypeList = (output: any, context: __SerdeContext): StorageType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StorageType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UpgradeHistory
 */
const de_UpgradeHistory = (output: any, context: __SerdeContext): UpgradeHistory => {
  return {
    StartTimestamp:
      output.StartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTimestamp)))
        : undefined,
    StepsList: output.StepsList != null ? de_UpgradeStepsList(output.StepsList, context) : undefined,
    UpgradeName: __expectString(output.UpgradeName),
    UpgradeStatus: __expectString(output.UpgradeStatus),
  } as any;
};

/**
 * deserializeAws_restJson1UpgradeHistoryList
 */
const de_UpgradeHistoryList = (output: any, context: __SerdeContext): UpgradeHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UpgradeHistory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UpgradeStepItem
 */
const de_UpgradeStepItem = (output: any, context: __SerdeContext): UpgradeStepItem => {
  return {
    Issues: output.Issues != null ? de_Issues(output.Issues, context) : undefined,
    ProgressPercent: __limitedParseDouble(output.ProgressPercent),
    UpgradeStep: __expectString(output.UpgradeStep),
    UpgradeStepStatus: __expectString(output.UpgradeStepStatus),
  } as any;
};

/**
 * deserializeAws_restJson1UpgradeStepsList
 */
const de_UpgradeStepsList = (output: any, context: __SerdeContext): UpgradeStepItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UpgradeStepItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValidationFailure
 */
const de_ValidationFailure = (output: any, context: __SerdeContext): ValidationFailure => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationFailures
 */
const de_ValidationFailures = (output: any, context: __SerdeContext): ValidationFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationFailure(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VersionList
 */
const de_VersionList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1VersionStatus
 */
const de_VersionStatus = (output: any, context: __SerdeContext): VersionStatus => {
  return {
    Options: __expectString(output.Options),
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VPCDerivedInfo
 */
const de_VPCDerivedInfo = (output: any, context: __SerdeContext): VPCDerivedInfo => {
  return {
    AvailabilityZones: output.AvailabilityZones != null ? de_StringList(output.AvailabilityZones, context) : undefined,
    SecurityGroupIds: output.SecurityGroupIds != null ? de_StringList(output.SecurityGroupIds, context) : undefined,
    SubnetIds: output.SubnetIds != null ? de_StringList(output.SubnetIds, context) : undefined,
    VPCId: __expectString(output.VPCId),
  } as any;
};

/**
 * deserializeAws_restJson1VPCDerivedInfoStatus
 */
const de_VPCDerivedInfoStatus = (output: any, context: __SerdeContext): VPCDerivedInfoStatus => {
  return {
    Options: output.Options != null ? de_VPCDerivedInfo(output.Options, context) : undefined,
    Status: output.Status != null ? de_OptionStatus(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VpcEndpoint
 */
const de_VpcEndpoint = (output: any, context: __SerdeContext): VpcEndpoint => {
  return {
    DomainArn: __expectString(output.DomainArn),
    Endpoint: __expectString(output.Endpoint),
    Status: __expectString(output.Status),
    VpcEndpointId: __expectString(output.VpcEndpointId),
    VpcEndpointOwner: __expectString(output.VpcEndpointOwner),
    VpcOptions: output.VpcOptions != null ? de_VPCDerivedInfo(output.VpcOptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VpcEndpointError
 */
const de_VpcEndpointError = (output: any, context: __SerdeContext): VpcEndpointError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    VpcEndpointId: __expectString(output.VpcEndpointId),
  } as any;
};

/**
 * deserializeAws_restJson1VpcEndpointErrorList
 */
const de_VpcEndpointErrorList = (output: any, context: __SerdeContext): VpcEndpointError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcEndpointError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VpcEndpoints
 */
const de_VpcEndpoints = (output: any, context: __SerdeContext): VpcEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcEndpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VpcEndpointSummary
 */
const de_VpcEndpointSummary = (output: any, context: __SerdeContext): VpcEndpointSummary => {
  return {
    DomainArn: __expectString(output.DomainArn),
    Status: __expectString(output.Status),
    VpcEndpointId: __expectString(output.VpcEndpointId),
    VpcEndpointOwner: __expectString(output.VpcEndpointOwner),
  } as any;
};

/**
 * deserializeAws_restJson1VpcEndpointSummaryList
 */
const de_VpcEndpointSummaryList = (output: any, context: __SerdeContext): VpcEndpointSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcEndpointSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WindowStartTime
 */
const de_WindowStartTime = (output: any, context: __SerdeContext): WindowStartTime => {
  return {
    Hours: __expectLong(output.Hours),
    Minutes: __expectLong(output.Minutes),
  } as any;
};

/**
 * deserializeAws_restJson1ZoneAwarenessConfig
 */
const de_ZoneAwarenessConfig = (output: any, context: __SerdeContext): ZoneAwarenessConfig => {
  return {
    AvailabilityZoneCount: __expectInt32(output.AvailabilityZoneCount),
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
