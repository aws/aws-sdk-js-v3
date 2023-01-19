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
  ScheduledAutoTuneDetails,
  ServiceSoftwareOptions,
  SnapshotOptions,
  SnapshotOptionsStatus,
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
  ZoneAwarenessConfig,
} from "../models/models_0";
import { OpenSearchServiceException as __BaseException } from "../models/OpenSearchServiceException";

export const serializeAws_restJson1AcceptInboundConnectionCommand = async (
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

export const serializeAws_restJson1AddTagsCommand = async (
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
    ...(input.TagList != null && { TagList: serializeAws_restJson1TagList(input.TagList, context) }),
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

export const serializeAws_restJson1AssociatePackageCommand = async (
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

export const serializeAws_restJson1AuthorizeVpcEndpointAccessCommand = async (
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

export const serializeAws_restJson1CancelServiceSoftwareUpdateCommand = async (
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

export const serializeAws_restJson1CreateDomainCommand = async (
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
    ...(input.AdvancedOptions != null && {
      AdvancedOptions: serializeAws_restJson1AdvancedOptions(input.AdvancedOptions, context),
    }),
    ...(input.AdvancedSecurityOptions != null && {
      AdvancedSecurityOptions: serializeAws_restJson1AdvancedSecurityOptionsInput(
        input.AdvancedSecurityOptions,
        context
      ),
    }),
    ...(input.AutoTuneOptions != null && {
      AutoTuneOptions: serializeAws_restJson1AutoTuneOptionsInput(input.AutoTuneOptions, context),
    }),
    ...(input.ClusterConfig != null && {
      ClusterConfig: serializeAws_restJson1ClusterConfig(input.ClusterConfig, context),
    }),
    ...(input.CognitoOptions != null && {
      CognitoOptions: serializeAws_restJson1CognitoOptions(input.CognitoOptions, context),
    }),
    ...(input.DomainEndpointOptions != null && {
      DomainEndpointOptions: serializeAws_restJson1DomainEndpointOptions(input.DomainEndpointOptions, context),
    }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.EBSOptions != null && { EBSOptions: serializeAws_restJson1EBSOptions(input.EBSOptions, context) }),
    ...(input.EncryptionAtRestOptions != null && {
      EncryptionAtRestOptions: serializeAws_restJson1EncryptionAtRestOptions(input.EncryptionAtRestOptions, context),
    }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.LogPublishingOptions != null && {
      LogPublishingOptions: serializeAws_restJson1LogPublishingOptions(input.LogPublishingOptions, context),
    }),
    ...(input.NodeToNodeEncryptionOptions != null && {
      NodeToNodeEncryptionOptions: serializeAws_restJson1NodeToNodeEncryptionOptions(
        input.NodeToNodeEncryptionOptions,
        context
      ),
    }),
    ...(input.SnapshotOptions != null && {
      SnapshotOptions: serializeAws_restJson1SnapshotOptions(input.SnapshotOptions, context),
    }),
    ...(input.TagList != null && { TagList: serializeAws_restJson1TagList(input.TagList, context) }),
    ...(input.VPCOptions != null && { VPCOptions: serializeAws_restJson1VPCOptions(input.VPCOptions, context) }),
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

export const serializeAws_restJson1CreateOutboundConnectionCommand = async (
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
    ...(input.LocalDomainInfo != null && {
      LocalDomainInfo: serializeAws_restJson1DomainInformationContainer(input.LocalDomainInfo, context),
    }),
    ...(input.RemoteDomainInfo != null && {
      RemoteDomainInfo: serializeAws_restJson1DomainInformationContainer(input.RemoteDomainInfo, context),
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

export const serializeAws_restJson1CreatePackageCommand = async (
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
    ...(input.PackageSource != null && {
      PackageSource: serializeAws_restJson1PackageSource(input.PackageSource, context),
    }),
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

export const serializeAws_restJson1CreateVpcEndpointCommand = async (
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
    ...(input.VpcOptions != null && { VpcOptions: serializeAws_restJson1VPCOptions(input.VpcOptions, context) }),
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

export const serializeAws_restJson1DeleteDomainCommand = async (
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

export const serializeAws_restJson1DeleteInboundConnectionCommand = async (
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

export const serializeAws_restJson1DeleteOutboundConnectionCommand = async (
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

export const serializeAws_restJson1DeletePackageCommand = async (
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

export const serializeAws_restJson1DeleteVpcEndpointCommand = async (
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

export const serializeAws_restJson1DescribeDomainCommand = async (
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

export const serializeAws_restJson1DescribeDomainAutoTunesCommand = async (
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

export const serializeAws_restJson1DescribeDomainChangeProgressCommand = async (
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

export const serializeAws_restJson1DescribeDomainConfigCommand = async (
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

export const serializeAws_restJson1DescribeDomainsCommand = async (
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
    ...(input.DomainNames != null && { DomainNames: serializeAws_restJson1DomainNameList(input.DomainNames, context) }),
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

export const serializeAws_restJson1DescribeDryRunProgressCommand = async (
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

export const serializeAws_restJson1DescribeInboundConnectionsCommand = async (
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
    ...(input.Filters != null && { Filters: serializeAws_restJson1FilterList(input.Filters, context) }),
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

export const serializeAws_restJson1DescribeInstanceTypeLimitsCommand = async (
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

export const serializeAws_restJson1DescribeOutboundConnectionsCommand = async (
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
    ...(input.Filters != null && { Filters: serializeAws_restJson1FilterList(input.Filters, context) }),
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

export const serializeAws_restJson1DescribePackagesCommand = async (
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
    ...(input.Filters != null && { Filters: serializeAws_restJson1DescribePackagesFilterList(input.Filters, context) }),
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

export const serializeAws_restJson1DescribeReservedInstanceOfferingsCommand = async (
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

export const serializeAws_restJson1DescribeReservedInstancesCommand = async (
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

export const serializeAws_restJson1DescribeVpcEndpointsCommand = async (
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
    ...(input.VpcEndpointIds != null && {
      VpcEndpointIds: serializeAws_restJson1VpcEndpointIdList(input.VpcEndpointIds, context),
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

export const serializeAws_restJson1DissociatePackageCommand = async (
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

export const serializeAws_restJson1GetCompatibleVersionsCommand = async (
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

export const serializeAws_restJson1GetPackageVersionHistoryCommand = async (
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

export const serializeAws_restJson1GetUpgradeHistoryCommand = async (
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

export const serializeAws_restJson1GetUpgradeStatusCommand = async (
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

export const serializeAws_restJson1ListDomainNamesCommand = async (
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

export const serializeAws_restJson1ListDomainsForPackageCommand = async (
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

export const serializeAws_restJson1ListInstanceTypeDetailsCommand = async (
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

export const serializeAws_restJson1ListPackagesForDomainCommand = async (
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

export const serializeAws_restJson1ListTagsCommand = async (
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

export const serializeAws_restJson1ListVersionsCommand = async (
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

export const serializeAws_restJson1ListVpcEndpointAccessCommand = async (
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

export const serializeAws_restJson1ListVpcEndpointsCommand = async (
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

export const serializeAws_restJson1ListVpcEndpointsForDomainCommand = async (
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

export const serializeAws_restJson1PurchaseReservedInstanceOfferingCommand = async (
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

export const serializeAws_restJson1RejectInboundConnectionCommand = async (
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

export const serializeAws_restJson1RemoveTagsCommand = async (
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
    ...(input.TagKeys != null && { TagKeys: serializeAws_restJson1StringList(input.TagKeys, context) }),
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

export const serializeAws_restJson1RevokeVpcEndpointAccessCommand = async (
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

export const serializeAws_restJson1StartServiceSoftwareUpdateCommand = async (
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

export const serializeAws_restJson1UpdateDomainConfigCommand = async (
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
    ...(input.AdvancedOptions != null && {
      AdvancedOptions: serializeAws_restJson1AdvancedOptions(input.AdvancedOptions, context),
    }),
    ...(input.AdvancedSecurityOptions != null && {
      AdvancedSecurityOptions: serializeAws_restJson1AdvancedSecurityOptionsInput(
        input.AdvancedSecurityOptions,
        context
      ),
    }),
    ...(input.AutoTuneOptions != null && {
      AutoTuneOptions: serializeAws_restJson1AutoTuneOptions(input.AutoTuneOptions, context),
    }),
    ...(input.ClusterConfig != null && {
      ClusterConfig: serializeAws_restJson1ClusterConfig(input.ClusterConfig, context),
    }),
    ...(input.CognitoOptions != null && {
      CognitoOptions: serializeAws_restJson1CognitoOptions(input.CognitoOptions, context),
    }),
    ...(input.DomainEndpointOptions != null && {
      DomainEndpointOptions: serializeAws_restJson1DomainEndpointOptions(input.DomainEndpointOptions, context),
    }),
    ...(input.DryRun != null && { DryRun: input.DryRun }),
    ...(input.DryRunMode != null && { DryRunMode: input.DryRunMode }),
    ...(input.EBSOptions != null && { EBSOptions: serializeAws_restJson1EBSOptions(input.EBSOptions, context) }),
    ...(input.EncryptionAtRestOptions != null && {
      EncryptionAtRestOptions: serializeAws_restJson1EncryptionAtRestOptions(input.EncryptionAtRestOptions, context),
    }),
    ...(input.LogPublishingOptions != null && {
      LogPublishingOptions: serializeAws_restJson1LogPublishingOptions(input.LogPublishingOptions, context),
    }),
    ...(input.NodeToNodeEncryptionOptions != null && {
      NodeToNodeEncryptionOptions: serializeAws_restJson1NodeToNodeEncryptionOptions(
        input.NodeToNodeEncryptionOptions,
        context
      ),
    }),
    ...(input.SnapshotOptions != null && {
      SnapshotOptions: serializeAws_restJson1SnapshotOptions(input.SnapshotOptions, context),
    }),
    ...(input.VPCOptions != null && { VPCOptions: serializeAws_restJson1VPCOptions(input.VPCOptions, context) }),
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

export const serializeAws_restJson1UpdatePackageCommand = async (
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
    ...(input.PackageSource != null && {
      PackageSource: serializeAws_restJson1PackageSource(input.PackageSource, context),
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

export const serializeAws_restJson1UpdateVpcEndpointCommand = async (
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
    ...(input.VpcOptions != null && { VpcOptions: serializeAws_restJson1VPCOptions(input.VpcOptions, context) }),
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

export const serializeAws_restJson1UpgradeDomainCommand = async (
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
    ...(input.AdvancedOptions != null && {
      AdvancedOptions: serializeAws_restJson1AdvancedOptions(input.AdvancedOptions, context),
    }),
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

export const deserializeAws_restJson1AcceptInboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AcceptInboundConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection != null) {
    contents.Connection = deserializeAws_restJson1InboundConnection(data.Connection, context);
  }
  return contents;
};

const deserializeAws_restJson1AcceptInboundConnectionCommandError = async (
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
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AddTagsCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1AssociatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociatePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainPackageDetails != null) {
    contents.DomainPackageDetails = deserializeAws_restJson1DomainPackageDetails(data.DomainPackageDetails, context);
  }
  return contents;
};

const deserializeAws_restJson1AssociatePackageCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.opensearch#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1AuthorizeVpcEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeVpcEndpointAccessCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AuthorizeVpcEndpointAccessCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AuthorizedPrincipal != null) {
    contents.AuthorizedPrincipal = deserializeAws_restJson1AuthorizedPrincipal(data.AuthorizedPrincipal, context);
  }
  return contents;
};

const deserializeAws_restJson1AuthorizeVpcEndpointAccessCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1CancelServiceSoftwareUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelServiceSoftwareUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelServiceSoftwareUpdateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ServiceSoftwareOptions != null) {
    contents.ServiceSoftwareOptions = deserializeAws_restJson1ServiceSoftwareOptions(
      data.ServiceSoftwareOptions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1CancelServiceSoftwareUpdateCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainStatus != null) {
    contents.DomainStatus = deserializeAws_restJson1DomainStatus(data.DomainStatus, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateDomainCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidTypeException":
    case "com.amazonaws.opensearch#InvalidTypeException":
      throw await deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.opensearch#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1CreateOutboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateOutboundConnectionCommandError(output, context);
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
  if (data.ConnectionStatus != null) {
    contents.ConnectionStatus = deserializeAws_restJson1OutboundConnectionStatus(data.ConnectionStatus, context);
  }
  if (data.LocalDomainInfo != null) {
    contents.LocalDomainInfo = deserializeAws_restJson1DomainInformationContainer(data.LocalDomainInfo, context);
  }
  if (data.RemoteDomainInfo != null) {
    contents.RemoteDomainInfo = deserializeAws_restJson1DomainInformationContainer(data.RemoteDomainInfo, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateOutboundConnectionCommandError = async (
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
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.opensearch#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PackageDetails != null) {
    contents.PackageDetails = deserializeAws_restJson1PackageDetails(data.PackageDetails, context);
  }
  return contents;
};

const deserializeAws_restJson1CreatePackageCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidTypeException":
    case "com.amazonaws.opensearch#InvalidTypeException":
      throw await deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.opensearch#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1CreateVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVpcEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcEndpoint != null) {
    contents.VpcEndpoint = deserializeAws_restJson1VpcEndpoint(data.VpcEndpoint, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateVpcEndpointCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.opensearch#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainStatus != null) {
    contents.DomainStatus = deserializeAws_restJson1DomainStatus(data.DomainStatus, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteDomainCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1DeleteInboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInboundConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection != null) {
    contents.Connection = deserializeAws_restJson1InboundConnection(data.Connection, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteInboundConnectionCommandError = async (
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
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteOutboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteOutboundConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection != null) {
    contents.Connection = deserializeAws_restJson1OutboundConnection(data.Connection, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteOutboundConnectionCommandError = async (
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
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeletePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PackageDetails != null) {
    contents.PackageDetails = deserializeAws_restJson1PackageDetails(data.PackageDetails, context);
  }
  return contents;
};

const deserializeAws_restJson1DeletePackageCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.opensearch#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1DeleteVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVpcEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcEndpointSummary != null) {
    contents.VpcEndpointSummary = deserializeAws_restJson1VpcEndpointSummary(data.VpcEndpointSummary, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteVpcEndpointCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainStatus != null) {
    contents.DomainStatus = deserializeAws_restJson1DomainStatus(data.DomainStatus, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDomainCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1DescribeDomainAutoTunesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainAutoTunesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDomainAutoTunesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AutoTunes != null) {
    contents.AutoTunes = deserializeAws_restJson1AutoTuneList(data.AutoTunes, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDomainAutoTunesCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1DescribeDomainChangeProgressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainChangeProgressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDomainChangeProgressCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ChangeProgressStatus != null) {
    contents.ChangeProgressStatus = deserializeAws_restJson1ChangeProgressStatusDetails(
      data.ChangeProgressStatus,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeDomainChangeProgressCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1DescribeDomainConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDomainConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainConfig != null) {
    contents.DomainConfig = deserializeAws_restJson1DomainConfig(data.DomainConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDomainConfigCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1DescribeDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDomainsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainStatusList != null) {
    contents.DomainStatusList = deserializeAws_restJson1DomainStatusList(data.DomainStatusList, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDomainsCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1DescribeDryRunProgressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDryRunProgressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDryRunProgressCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DryRunConfig != null) {
    contents.DryRunConfig = deserializeAws_restJson1DomainStatus(data.DryRunConfig, context);
  }
  if (data.DryRunProgressStatus != null) {
    contents.DryRunProgressStatus = deserializeAws_restJson1DryRunProgressStatus(data.DryRunProgressStatus, context);
  }
  if (data.DryRunResults != null) {
    contents.DryRunResults = deserializeAws_restJson1DryRunResults(data.DryRunResults, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDryRunProgressCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1DescribeInboundConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInboundConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeInboundConnectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connections != null) {
    contents.Connections = deserializeAws_restJson1InboundConnections(data.Connections, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeInboundConnectionsCommandError = async (
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
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.opensearch#InvalidPaginationTokenException":
      throw await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeInstanceTypeLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceTypeLimitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeInstanceTypeLimitsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LimitsByRole != null) {
    contents.LimitsByRole = deserializeAws_restJson1LimitsByRole(data.LimitsByRole, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeInstanceTypeLimitsCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidTypeException":
    case "com.amazonaws.opensearch#InvalidTypeException":
      throw await deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1DescribeOutboundConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOutboundConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeOutboundConnectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connections != null) {
    contents.Connections = deserializeAws_restJson1OutboundConnections(data.Connections, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeOutboundConnectionsCommandError = async (
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
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.opensearch#InvalidPaginationTokenException":
      throw await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribePackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePackagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PackageDetailsList != null) {
    contents.PackageDetailsList = deserializeAws_restJson1PackageDetailsList(data.PackageDetailsList, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribePackagesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1DescribeReservedInstanceOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedInstanceOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeReservedInstanceOfferingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ReservedInstanceOfferings != null) {
    contents.ReservedInstanceOfferings = deserializeAws_restJson1ReservedInstanceOfferingList(
      data.ReservedInstanceOfferings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeReservedInstanceOfferingsCommandError = async (
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
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1DescribeReservedInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeReservedInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ReservedInstances != null) {
    contents.ReservedInstances = deserializeAws_restJson1ReservedInstanceList(data.ReservedInstances, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeReservedInstancesCommandError = async (
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
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1DescribeVpcEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVpcEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcEndpointErrors != null) {
    contents.VpcEndpointErrors = deserializeAws_restJson1VpcEndpointErrorList(data.VpcEndpointErrors, context);
  }
  if (data.VpcEndpoints != null) {
    contents.VpcEndpoints = deserializeAws_restJson1VpcEndpoints(data.VpcEndpoints, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeVpcEndpointsCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1DissociatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DissociatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DissociatePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainPackageDetails != null) {
    contents.DomainPackageDetails = deserializeAws_restJson1DomainPackageDetails(data.DomainPackageDetails, context);
  }
  return contents;
};

const deserializeAws_restJson1DissociatePackageCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.opensearch#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1GetCompatibleVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCompatibleVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CompatibleVersions != null) {
    contents.CompatibleVersions = deserializeAws_restJson1CompatibleVersionsList(data.CompatibleVersions, context);
  }
  return contents;
};

const deserializeAws_restJson1GetCompatibleVersionsCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1GetPackageVersionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPackageVersionHistoryCommandError(output, context);
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
    contents.PackageVersionHistoryList = deserializeAws_restJson1PackageVersionHistoryList(
      data.PackageVersionHistoryList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetPackageVersionHistoryCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1GetUpgradeHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUpgradeHistoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.UpgradeHistories != null) {
    contents.UpgradeHistories = deserializeAws_restJson1UpgradeHistoryList(data.UpgradeHistories, context);
  }
  return contents;
};

const deserializeAws_restJson1GetUpgradeHistoryCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1GetUpgradeStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUpgradeStatusCommandError(output, context);
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

const deserializeAws_restJson1GetUpgradeStatusCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1ListDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDomainNamesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainNames != null) {
    contents.DomainNames = deserializeAws_restJson1DomainInfoList(data.DomainNames, context);
  }
  return contents;
};

const deserializeAws_restJson1ListDomainNamesCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1ListDomainsForPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsForPackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDomainsForPackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainPackageDetailsList != null) {
    contents.DomainPackageDetailsList = deserializeAws_restJson1DomainPackageDetailsList(
      data.DomainPackageDetailsList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDomainsForPackageCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1ListInstanceTypeDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceTypeDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInstanceTypeDetailsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InstanceTypeDetails != null) {
    contents.InstanceTypeDetails = deserializeAws_restJson1InstanceTypeDetailsList(data.InstanceTypeDetails, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListInstanceTypeDetailsCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1ListPackagesForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesForDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPackagesForDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainPackageDetailsList != null) {
    contents.DomainPackageDetailsList = deserializeAws_restJson1DomainPackageDetailsList(
      data.DomainPackageDetailsList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListPackagesForDomainCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TagList != null) {
    contents.TagList = deserializeAws_restJson1TagList(data.TagList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1ListVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Versions != null) {
    contents.Versions = deserializeAws_restJson1VersionList(data.Versions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListVersionsCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1ListVpcEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointAccessCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVpcEndpointAccessCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AuthorizedPrincipalList != null) {
    contents.AuthorizedPrincipalList = deserializeAws_restJson1AuthorizedPrincipalList(
      data.AuthorizedPrincipalList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListVpcEndpointAccessCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListVpcEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVpcEndpointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.VpcEndpointSummaryList != null) {
    contents.VpcEndpointSummaryList = deserializeAws_restJson1VpcEndpointSummaryList(
      data.VpcEndpointSummaryList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListVpcEndpointsCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListVpcEndpointsForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointsForDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVpcEndpointsForDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.VpcEndpointSummaryList != null) {
    contents.VpcEndpointSummaryList = deserializeAws_restJson1VpcEndpointSummaryList(
      data.VpcEndpointSummaryList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListVpcEndpointsForDomainCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PurchaseReservedInstanceOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedInstanceOfferingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PurchaseReservedInstanceOfferingCommandError(output, context);
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

const deserializeAws_restJson1PurchaseReservedInstanceOfferingCommandError = async (
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
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.opensearch#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1RejectInboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RejectInboundConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connection != null) {
    contents.Connection = deserializeAws_restJson1InboundConnection(data.Connection, context);
  }
  return contents;
};

const deserializeAws_restJson1RejectInboundConnectionCommandError = async (
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
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RemoveTagsCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1RevokeVpcEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeVpcEndpointAccessCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RevokeVpcEndpointAccessCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RevokeVpcEndpointAccessCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1StartServiceSoftwareUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartServiceSoftwareUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartServiceSoftwareUpdateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ServiceSoftwareOptions != null) {
    contents.ServiceSoftwareOptions = deserializeAws_restJson1ServiceSoftwareOptions(
      data.ServiceSoftwareOptions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1StartServiceSoftwareUpdateCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1UpdateDomainConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDomainConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainConfig != null) {
    contents.DomainConfig = deserializeAws_restJson1DomainConfig(data.DomainConfig, context);
  }
  if (data.DryRunProgressStatus != null) {
    contents.DryRunProgressStatus = deserializeAws_restJson1DryRunProgressStatus(data.DryRunProgressStatus, context);
  }
  if (data.DryRunResults != null) {
    contents.DryRunResults = deserializeAws_restJson1DryRunResults(data.DryRunResults, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateDomainConfigCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidTypeException":
    case "com.amazonaws.opensearch#InvalidTypeException":
      throw await deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1UpdatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PackageDetails != null) {
    contents.PackageDetails = deserializeAws_restJson1PackageDetails(data.PackageDetails, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdatePackageCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1UpdateVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVpcEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.VpcEndpoint != null) {
    contents.VpcEndpoint = deserializeAws_restJson1VpcEndpoint(data.VpcEndpoint, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateVpcEndpointCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.opensearch#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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

export const deserializeAws_restJson1UpgradeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpgradeDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdvancedOptions != null) {
    contents.AdvancedOptions = deserializeAws_restJson1AdvancedOptions(data.AdvancedOptions, context);
  }
  if (data.ChangeProgressDetails != null) {
    contents.ChangeProgressDetails = deserializeAws_restJson1ChangeProgressDetails(data.ChangeProgressDetails, context);
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

const deserializeAws_restJson1UpgradeDomainCommandError = async (
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
      throw await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context);
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.opensearch#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
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
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1BaseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BaseException> => {
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1DisabledOperationExceptionResponse = async (
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

const deserializeAws_restJson1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
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

const deserializeAws_restJson1InvalidPaginationTokenExceptionResponse = async (
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

const deserializeAws_restJson1InvalidTypeExceptionResponse = async (
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

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
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

const serializeAws_restJson1AdvancedOptions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1AdvancedSecurityOptionsInput = (
  input: AdvancedSecurityOptionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AnonymousAuthEnabled != null && { AnonymousAuthEnabled: input.AnonymousAuthEnabled }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.InternalUserDatabaseEnabled != null && {
      InternalUserDatabaseEnabled: input.InternalUserDatabaseEnabled,
    }),
    ...(input.MasterUserOptions != null && {
      MasterUserOptions: serializeAws_restJson1MasterUserOptions(input.MasterUserOptions, context),
    }),
    ...(input.SAMLOptions != null && {
      SAMLOptions: serializeAws_restJson1SAMLOptionsInput(input.SAMLOptions, context),
    }),
  };
};

const serializeAws_restJson1AutoTuneMaintenanceSchedule = (
  input: AutoTuneMaintenanceSchedule,
  context: __SerdeContext
): any => {
  return {
    ...(input.CronExpressionForRecurrence != null && {
      CronExpressionForRecurrence: input.CronExpressionForRecurrence,
    }),
    ...(input.Duration != null && { Duration: serializeAws_restJson1Duration(input.Duration, context) }),
    ...(input.StartAt != null && { StartAt: Math.round(input.StartAt.getTime() / 1000) }),
  };
};

const serializeAws_restJson1AutoTuneMaintenanceScheduleList = (
  input: AutoTuneMaintenanceSchedule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AutoTuneMaintenanceSchedule(entry, context);
    });
};

const serializeAws_restJson1AutoTuneOptions = (input: AutoTuneOptions, context: __SerdeContext): any => {
  return {
    ...(input.DesiredState != null && { DesiredState: input.DesiredState }),
    ...(input.MaintenanceSchedules != null && {
      MaintenanceSchedules: serializeAws_restJson1AutoTuneMaintenanceScheduleList(input.MaintenanceSchedules, context),
    }),
    ...(input.RollbackOnDisable != null && { RollbackOnDisable: input.RollbackOnDisable }),
  };
};

const serializeAws_restJson1AutoTuneOptionsInput = (input: AutoTuneOptionsInput, context: __SerdeContext): any => {
  return {
    ...(input.DesiredState != null && { DesiredState: input.DesiredState }),
    ...(input.MaintenanceSchedules != null && {
      MaintenanceSchedules: serializeAws_restJson1AutoTuneMaintenanceScheduleList(input.MaintenanceSchedules, context),
    }),
  };
};

const serializeAws_restJson1AWSDomainInformation = (input: AWSDomainInformation, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.OwnerId != null && { OwnerId: input.OwnerId }),
    ...(input.Region != null && { Region: input.Region }),
  };
};

const serializeAws_restJson1ClusterConfig = (input: ClusterConfig, context: __SerdeContext): any => {
  return {
    ...(input.ColdStorageOptions != null && {
      ColdStorageOptions: serializeAws_restJson1ColdStorageOptions(input.ColdStorageOptions, context),
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
      ZoneAwarenessConfig: serializeAws_restJson1ZoneAwarenessConfig(input.ZoneAwarenessConfig, context),
    }),
    ...(input.ZoneAwarenessEnabled != null && { ZoneAwarenessEnabled: input.ZoneAwarenessEnabled }),
  };
};

const serializeAws_restJson1CognitoOptions = (input: CognitoOptions, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

const serializeAws_restJson1ColdStorageOptions = (input: ColdStorageOptions, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1DescribePackagesFilter = (input: DescribePackagesFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: serializeAws_restJson1DescribePackagesFilterValues(input.Value, context) }),
  };
};

const serializeAws_restJson1DescribePackagesFilterList = (
  input: DescribePackagesFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DescribePackagesFilter(entry, context);
    });
};

const serializeAws_restJson1DescribePackagesFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DomainEndpointOptions = (input: DomainEndpointOptions, context: __SerdeContext): any => {
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

const serializeAws_restJson1DomainInformationContainer = (
  input: DomainInformationContainer,
  context: __SerdeContext
): any => {
  return {
    ...(input.AWSDomainInformation != null && {
      AWSDomainInformation: serializeAws_restJson1AWSDomainInformation(input.AWSDomainInformation, context),
    }),
  };
};

const serializeAws_restJson1DomainNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Duration = (input: Duration, context: __SerdeContext): any => {
  return {
    ...(input.Unit != null && { Unit: input.Unit }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1EBSOptions = (input: EBSOptions, context: __SerdeContext): any => {
  return {
    ...(input.EBSEnabled != null && { EBSEnabled: input.EBSEnabled }),
    ...(input.Iops != null && { Iops: input.Iops }),
    ...(input.Throughput != null && { Throughput: input.Throughput }),
    ...(input.VolumeSize != null && { VolumeSize: input.VolumeSize }),
    ...(input.VolumeType != null && { VolumeType: input.VolumeType }),
  };
};

const serializeAws_restJson1EncryptionAtRestOptions = (
  input: EncryptionAtRestOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
  };
};

const serializeAws_restJson1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_restJson1ValueStringList(input.Values, context) }),
  };
};

const serializeAws_restJson1FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Filter(entry, context);
    });
};

const serializeAws_restJson1LogPublishingOption = (input: LogPublishingOption, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogsLogGroupArn != null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1LogPublishingOptions = (
  input: Record<string, LogPublishingOption>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [LogType | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1LogPublishingOption(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1MasterUserOptions = (input: MasterUserOptions, context: __SerdeContext): any => {
  return {
    ...(input.MasterUserARN != null && { MasterUserARN: input.MasterUserARN }),
    ...(input.MasterUserName != null && { MasterUserName: input.MasterUserName }),
    ...(input.MasterUserPassword != null && { MasterUserPassword: input.MasterUserPassword }),
  };
};

const serializeAws_restJson1NodeToNodeEncryptionOptions = (
  input: NodeToNodeEncryptionOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1PackageSource = (input: PackageSource, context: __SerdeContext): any => {
  return {
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
  };
};

const serializeAws_restJson1SAMLIdp = (input: SAMLIdp, context: __SerdeContext): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.MetadataContent != null && { MetadataContent: input.MetadataContent }),
  };
};

const serializeAws_restJson1SAMLOptionsInput = (input: SAMLOptionsInput, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.Idp != null && { Idp: serializeAws_restJson1SAMLIdp(input.Idp, context) }),
    ...(input.MasterBackendRole != null && { MasterBackendRole: input.MasterBackendRole }),
    ...(input.MasterUserName != null && { MasterUserName: input.MasterUserName }),
    ...(input.RolesKey != null && { RolesKey: input.RolesKey }),
    ...(input.SessionTimeoutMinutes != null && { SessionTimeoutMinutes: input.SessionTimeoutMinutes }),
    ...(input.SubjectKey != null && { SubjectKey: input.SubjectKey }),
  };
};

const serializeAws_restJson1SnapshotOptions = (input: SnapshotOptions, context: __SerdeContext): any => {
  return {
    ...(input.AutomatedSnapshotStartHour != null && { AutomatedSnapshotStartHour: input.AutomatedSnapshotStartHour }),
  };
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1ValueStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1VpcEndpointIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1VPCOptions = (input: VPCOptions, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_restJson1StringList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_restJson1StringList(input.SubnetIds, context) }),
  };
};

const serializeAws_restJson1ZoneAwarenessConfig = (input: ZoneAwarenessConfig, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZoneCount != null && { AvailabilityZoneCount: input.AvailabilityZoneCount }),
  };
};

const deserializeAws_restJson1AccessPoliciesStatus = (output: any, context: __SerdeContext): AccessPoliciesStatus => {
  return {
    Options: __expectString(output.Options),
    Status: output.Status != null ? deserializeAws_restJson1OptionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AdditionalLimit = (output: any, context: __SerdeContext): AdditionalLimit => {
  return {
    LimitName: __expectString(output.LimitName),
    LimitValues:
      output.LimitValues != null ? deserializeAws_restJson1LimitValueList(output.LimitValues, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AdditionalLimitList = (output: any, context: __SerdeContext): AdditionalLimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AdditionalLimit(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AdvancedOptions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1AdvancedOptionsStatus = (output: any, context: __SerdeContext): AdvancedOptionsStatus => {
  return {
    Options: output.Options != null ? deserializeAws_restJson1AdvancedOptions(output.Options, context) : undefined,
    Status: output.Status != null ? deserializeAws_restJson1OptionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AdvancedSecurityOptions = (
  output: any,
  context: __SerdeContext
): AdvancedSecurityOptions => {
  return {
    AnonymousAuthDisableDate:
      output.AnonymousAuthDisableDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AnonymousAuthDisableDate)))
        : undefined,
    AnonymousAuthEnabled: __expectBoolean(output.AnonymousAuthEnabled),
    Enabled: __expectBoolean(output.Enabled),
    InternalUserDatabaseEnabled: __expectBoolean(output.InternalUserDatabaseEnabled),
    SAMLOptions:
      output.SAMLOptions != null ? deserializeAws_restJson1SAMLOptionsOutput(output.SAMLOptions, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AdvancedSecurityOptionsStatus = (
  output: any,
  context: __SerdeContext
): AdvancedSecurityOptionsStatus => {
  return {
    Options:
      output.Options != null ? deserializeAws_restJson1AdvancedSecurityOptions(output.Options, context) : undefined,
    Status: output.Status != null ? deserializeAws_restJson1OptionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AuthorizedPrincipal = (output: any, context: __SerdeContext): AuthorizedPrincipal => {
  return {
    Principal: __expectString(output.Principal),
    PrincipalType: __expectString(output.PrincipalType),
  } as any;
};

const deserializeAws_restJson1AuthorizedPrincipalList = (
  output: any,
  context: __SerdeContext
): AuthorizedPrincipal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AuthorizedPrincipal(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AutoTune = (output: any, context: __SerdeContext): AutoTune => {
  return {
    AutoTuneDetails:
      output.AutoTuneDetails != null
        ? deserializeAws_restJson1AutoTuneDetails(output.AutoTuneDetails, context)
        : undefined,
    AutoTuneType: __expectString(output.AutoTuneType),
  } as any;
};

const deserializeAws_restJson1AutoTuneDetails = (output: any, context: __SerdeContext): AutoTuneDetails => {
  return {
    ScheduledAutoTuneDetails:
      output.ScheduledAutoTuneDetails != null
        ? deserializeAws_restJson1ScheduledAutoTuneDetails(output.ScheduledAutoTuneDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AutoTuneList = (output: any, context: __SerdeContext): AutoTune[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AutoTune(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AutoTuneMaintenanceSchedule = (
  output: any,
  context: __SerdeContext
): AutoTuneMaintenanceSchedule => {
  return {
    CronExpressionForRecurrence: __expectString(output.CronExpressionForRecurrence),
    Duration: output.Duration != null ? deserializeAws_restJson1Duration(output.Duration, context) : undefined,
    StartAt:
      output.StartAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartAt))) : undefined,
  } as any;
};

const deserializeAws_restJson1AutoTuneMaintenanceScheduleList = (
  output: any,
  context: __SerdeContext
): AutoTuneMaintenanceSchedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AutoTuneMaintenanceSchedule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AutoTuneOptions = (output: any, context: __SerdeContext): AutoTuneOptions => {
  return {
    DesiredState: __expectString(output.DesiredState),
    MaintenanceSchedules:
      output.MaintenanceSchedules != null
        ? deserializeAws_restJson1AutoTuneMaintenanceScheduleList(output.MaintenanceSchedules, context)
        : undefined,
    RollbackOnDisable: __expectString(output.RollbackOnDisable),
  } as any;
};

const deserializeAws_restJson1AutoTuneOptionsOutput = (output: any, context: __SerdeContext): AutoTuneOptionsOutput => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1AutoTuneOptionsStatus = (output: any, context: __SerdeContext): AutoTuneOptionsStatus => {
  return {
    Options: output.Options != null ? deserializeAws_restJson1AutoTuneOptions(output.Options, context) : undefined,
    Status: output.Status != null ? deserializeAws_restJson1AutoTuneStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AutoTuneStatus = (output: any, context: __SerdeContext): AutoTuneStatus => {
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

const deserializeAws_restJson1AWSDomainInformation = (output: any, context: __SerdeContext): AWSDomainInformation => {
  return {
    DomainName: __expectString(output.DomainName),
    OwnerId: __expectString(output.OwnerId),
    Region: __expectString(output.Region),
  } as any;
};

const deserializeAws_restJson1ChangeProgressDetails = (output: any, context: __SerdeContext): ChangeProgressDetails => {
  return {
    ChangeId: __expectString(output.ChangeId),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1ChangeProgressStage = (output: any, context: __SerdeContext): ChangeProgressStage => {
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

const deserializeAws_restJson1ChangeProgressStageList = (
  output: any,
  context: __SerdeContext
): ChangeProgressStage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ChangeProgressStage(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ChangeProgressStatusDetails = (
  output: any,
  context: __SerdeContext
): ChangeProgressStatusDetails => {
  return {
    ChangeId: __expectString(output.ChangeId),
    ChangeProgressStages:
      output.ChangeProgressStages != null
        ? deserializeAws_restJson1ChangeProgressStageList(output.ChangeProgressStages, context)
        : undefined,
    CompletedProperties:
      output.CompletedProperties != null
        ? deserializeAws_restJson1StringList(output.CompletedProperties, context)
        : undefined,
    PendingProperties:
      output.PendingProperties != null
        ? deserializeAws_restJson1StringList(output.PendingProperties, context)
        : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    TotalNumberOfStages: __expectInt32(output.TotalNumberOfStages),
  } as any;
};

const deserializeAws_restJson1ClusterConfig = (output: any, context: __SerdeContext): ClusterConfig => {
  return {
    ColdStorageOptions:
      output.ColdStorageOptions != null
        ? deserializeAws_restJson1ColdStorageOptions(output.ColdStorageOptions, context)
        : undefined,
    DedicatedMasterCount: __expectInt32(output.DedicatedMasterCount),
    DedicatedMasterEnabled: __expectBoolean(output.DedicatedMasterEnabled),
    DedicatedMasterType: __expectString(output.DedicatedMasterType),
    InstanceCount: __expectInt32(output.InstanceCount),
    InstanceType: __expectString(output.InstanceType),
    WarmCount: __expectInt32(output.WarmCount),
    WarmEnabled: __expectBoolean(output.WarmEnabled),
    WarmType: __expectString(output.WarmType),
    ZoneAwarenessConfig:
      output.ZoneAwarenessConfig != null
        ? deserializeAws_restJson1ZoneAwarenessConfig(output.ZoneAwarenessConfig, context)
        : undefined,
    ZoneAwarenessEnabled: __expectBoolean(output.ZoneAwarenessEnabled),
  } as any;
};

const deserializeAws_restJson1ClusterConfigStatus = (output: any, context: __SerdeContext): ClusterConfigStatus => {
  return {
    Options: output.Options != null ? deserializeAws_restJson1ClusterConfig(output.Options, context) : undefined,
    Status: output.Status != null ? deserializeAws_restJson1OptionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CognitoOptions = (output: any, context: __SerdeContext): CognitoOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    IdentityPoolId: __expectString(output.IdentityPoolId),
    RoleArn: __expectString(output.RoleArn),
    UserPoolId: __expectString(output.UserPoolId),
  } as any;
};

const deserializeAws_restJson1CognitoOptionsStatus = (output: any, context: __SerdeContext): CognitoOptionsStatus => {
  return {
    Options: output.Options != null ? deserializeAws_restJson1CognitoOptions(output.Options, context) : undefined,
    Status: output.Status != null ? deserializeAws_restJson1OptionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ColdStorageOptions = (output: any, context: __SerdeContext): ColdStorageOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1CompatibleVersionsList = (
  output: any,
  context: __SerdeContext
): CompatibleVersionsMap[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CompatibleVersionsMap(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CompatibleVersionsMap = (output: any, context: __SerdeContext): CompatibleVersionsMap => {
  return {
    SourceVersion: __expectString(output.SourceVersion),
    TargetVersions:
      output.TargetVersions != null ? deserializeAws_restJson1VersionList(output.TargetVersions, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DomainConfig = (output: any, context: __SerdeContext): DomainConfig => {
  return {
    AccessPolicies:
      output.AccessPolicies != null
        ? deserializeAws_restJson1AccessPoliciesStatus(output.AccessPolicies, context)
        : undefined,
    AdvancedOptions:
      output.AdvancedOptions != null
        ? deserializeAws_restJson1AdvancedOptionsStatus(output.AdvancedOptions, context)
        : undefined,
    AdvancedSecurityOptions:
      output.AdvancedSecurityOptions != null
        ? deserializeAws_restJson1AdvancedSecurityOptionsStatus(output.AdvancedSecurityOptions, context)
        : undefined,
    AutoTuneOptions:
      output.AutoTuneOptions != null
        ? deserializeAws_restJson1AutoTuneOptionsStatus(output.AutoTuneOptions, context)
        : undefined,
    ChangeProgressDetails:
      output.ChangeProgressDetails != null
        ? deserializeAws_restJson1ChangeProgressDetails(output.ChangeProgressDetails, context)
        : undefined,
    ClusterConfig:
      output.ClusterConfig != null
        ? deserializeAws_restJson1ClusterConfigStatus(output.ClusterConfig, context)
        : undefined,
    CognitoOptions:
      output.CognitoOptions != null
        ? deserializeAws_restJson1CognitoOptionsStatus(output.CognitoOptions, context)
        : undefined,
    DomainEndpointOptions:
      output.DomainEndpointOptions != null
        ? deserializeAws_restJson1DomainEndpointOptionsStatus(output.DomainEndpointOptions, context)
        : undefined,
    EBSOptions:
      output.EBSOptions != null ? deserializeAws_restJson1EBSOptionsStatus(output.EBSOptions, context) : undefined,
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions != null
        ? deserializeAws_restJson1EncryptionAtRestOptionsStatus(output.EncryptionAtRestOptions, context)
        : undefined,
    EngineVersion:
      output.EngineVersion != null ? deserializeAws_restJson1VersionStatus(output.EngineVersion, context) : undefined,
    LogPublishingOptions:
      output.LogPublishingOptions != null
        ? deserializeAws_restJson1LogPublishingOptionsStatus(output.LogPublishingOptions, context)
        : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions != null
        ? deserializeAws_restJson1NodeToNodeEncryptionOptionsStatus(output.NodeToNodeEncryptionOptions, context)
        : undefined,
    SnapshotOptions:
      output.SnapshotOptions != null
        ? deserializeAws_restJson1SnapshotOptionsStatus(output.SnapshotOptions, context)
        : undefined,
    VPCOptions:
      output.VPCOptions != null ? deserializeAws_restJson1VPCDerivedInfoStatus(output.VPCOptions, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DomainEndpointOptions = (output: any, context: __SerdeContext): DomainEndpointOptions => {
  return {
    CustomEndpoint: __expectString(output.CustomEndpoint),
    CustomEndpointCertificateArn: __expectString(output.CustomEndpointCertificateArn),
    CustomEndpointEnabled: __expectBoolean(output.CustomEndpointEnabled),
    EnforceHTTPS: __expectBoolean(output.EnforceHTTPS),
    TLSSecurityPolicy: __expectString(output.TLSSecurityPolicy),
  } as any;
};

const deserializeAws_restJson1DomainEndpointOptionsStatus = (
  output: any,
  context: __SerdeContext
): DomainEndpointOptionsStatus => {
  return {
    Options:
      output.Options != null ? deserializeAws_restJson1DomainEndpointOptions(output.Options, context) : undefined,
    Status: output.Status != null ? deserializeAws_restJson1OptionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DomainInfo = (output: any, context: __SerdeContext): DomainInfo => {
  return {
    DomainName: __expectString(output.DomainName),
    EngineType: __expectString(output.EngineType),
  } as any;
};

const deserializeAws_restJson1DomainInfoList = (output: any, context: __SerdeContext): DomainInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DomainInformationContainer = (
  output: any,
  context: __SerdeContext
): DomainInformationContainer => {
  return {
    AWSDomainInformation:
      output.AWSDomainInformation != null
        ? deserializeAws_restJson1AWSDomainInformation(output.AWSDomainInformation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DomainPackageDetails = (output: any, context: __SerdeContext): DomainPackageDetails => {
  return {
    DomainName: __expectString(output.DomainName),
    DomainPackageStatus: __expectString(output.DomainPackageStatus),
    ErrorDetails:
      output.ErrorDetails != null ? deserializeAws_restJson1ErrorDetails(output.ErrorDetails, context) : undefined,
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

const deserializeAws_restJson1DomainPackageDetailsList = (
  output: any,
  context: __SerdeContext
): DomainPackageDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainPackageDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DomainStatus = (output: any, context: __SerdeContext): DomainStatus => {
  return {
    ARN: __expectString(output.ARN),
    AccessPolicies: __expectString(output.AccessPolicies),
    AdvancedOptions:
      output.AdvancedOptions != null
        ? deserializeAws_restJson1AdvancedOptions(output.AdvancedOptions, context)
        : undefined,
    AdvancedSecurityOptions:
      output.AdvancedSecurityOptions != null
        ? deserializeAws_restJson1AdvancedSecurityOptions(output.AdvancedSecurityOptions, context)
        : undefined,
    AutoTuneOptions:
      output.AutoTuneOptions != null
        ? deserializeAws_restJson1AutoTuneOptionsOutput(output.AutoTuneOptions, context)
        : undefined,
    ChangeProgressDetails:
      output.ChangeProgressDetails != null
        ? deserializeAws_restJson1ChangeProgressDetails(output.ChangeProgressDetails, context)
        : undefined,
    ClusterConfig:
      output.ClusterConfig != null ? deserializeAws_restJson1ClusterConfig(output.ClusterConfig, context) : undefined,
    CognitoOptions:
      output.CognitoOptions != null
        ? deserializeAws_restJson1CognitoOptions(output.CognitoOptions, context)
        : undefined,
    Created: __expectBoolean(output.Created),
    Deleted: __expectBoolean(output.Deleted),
    DomainEndpointOptions:
      output.DomainEndpointOptions != null
        ? deserializeAws_restJson1DomainEndpointOptions(output.DomainEndpointOptions, context)
        : undefined,
    DomainId: __expectString(output.DomainId),
    DomainName: __expectString(output.DomainName),
    EBSOptions: output.EBSOptions != null ? deserializeAws_restJson1EBSOptions(output.EBSOptions, context) : undefined,
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions != null
        ? deserializeAws_restJson1EncryptionAtRestOptions(output.EncryptionAtRestOptions, context)
        : undefined,
    Endpoint: __expectString(output.Endpoint),
    Endpoints: output.Endpoints != null ? deserializeAws_restJson1EndpointsMap(output.Endpoints, context) : undefined,
    EngineVersion: __expectString(output.EngineVersion),
    LogPublishingOptions:
      output.LogPublishingOptions != null
        ? deserializeAws_restJson1LogPublishingOptions(output.LogPublishingOptions, context)
        : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions != null
        ? deserializeAws_restJson1NodeToNodeEncryptionOptions(output.NodeToNodeEncryptionOptions, context)
        : undefined,
    Processing: __expectBoolean(output.Processing),
    ServiceSoftwareOptions:
      output.ServiceSoftwareOptions != null
        ? deserializeAws_restJson1ServiceSoftwareOptions(output.ServiceSoftwareOptions, context)
        : undefined,
    SnapshotOptions:
      output.SnapshotOptions != null
        ? deserializeAws_restJson1SnapshotOptions(output.SnapshotOptions, context)
        : undefined,
    UpgradeProcessing: __expectBoolean(output.UpgradeProcessing),
    VPCOptions:
      output.VPCOptions != null ? deserializeAws_restJson1VPCDerivedInfo(output.VPCOptions, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DomainStatusList = (output: any, context: __SerdeContext): DomainStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DryRunProgressStatus = (output: any, context: __SerdeContext): DryRunProgressStatus => {
  return {
    CreationDate: __expectString(output.CreationDate),
    DryRunId: __expectString(output.DryRunId),
    DryRunStatus: __expectString(output.DryRunStatus),
    UpdateDate: __expectString(output.UpdateDate),
    ValidationFailures:
      output.ValidationFailures != null
        ? deserializeAws_restJson1ValidationFailures(output.ValidationFailures, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DryRunResults = (output: any, context: __SerdeContext): DryRunResults => {
  return {
    DeploymentType: __expectString(output.DeploymentType),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1Duration = (output: any, context: __SerdeContext): Duration => {
  return {
    Unit: __expectString(output.Unit),
    Value: __expectLong(output.Value),
  } as any;
};

const deserializeAws_restJson1EBSOptions = (output: any, context: __SerdeContext): EBSOptions => {
  return {
    EBSEnabled: __expectBoolean(output.EBSEnabled),
    Iops: __expectInt32(output.Iops),
    Throughput: __expectInt32(output.Throughput),
    VolumeSize: __expectInt32(output.VolumeSize),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

const deserializeAws_restJson1EBSOptionsStatus = (output: any, context: __SerdeContext): EBSOptionsStatus => {
  return {
    Options: output.Options != null ? deserializeAws_restJson1EBSOptions(output.Options, context) : undefined,
    Status: output.Status != null ? deserializeAws_restJson1OptionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EncryptionAtRestOptions = (
  output: any,
  context: __SerdeContext
): EncryptionAtRestOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    KmsKeyId: __expectString(output.KmsKeyId),
  } as any;
};

const deserializeAws_restJson1EncryptionAtRestOptionsStatus = (
  output: any,
  context: __SerdeContext
): EncryptionAtRestOptionsStatus => {
  return {
    Options:
      output.Options != null ? deserializeAws_restJson1EncryptionAtRestOptions(output.Options, context) : undefined,
    Status: output.Status != null ? deserializeAws_restJson1OptionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    ErrorType: __expectString(output.ErrorType),
  } as any;
};

const deserializeAws_restJson1InboundConnection = (output: any, context: __SerdeContext): InboundConnection => {
  return {
    ConnectionId: __expectString(output.ConnectionId),
    ConnectionStatus:
      output.ConnectionStatus != null
        ? deserializeAws_restJson1InboundConnectionStatus(output.ConnectionStatus, context)
        : undefined,
    LocalDomainInfo:
      output.LocalDomainInfo != null
        ? deserializeAws_restJson1DomainInformationContainer(output.LocalDomainInfo, context)
        : undefined,
    RemoteDomainInfo:
      output.RemoteDomainInfo != null
        ? deserializeAws_restJson1DomainInformationContainer(output.RemoteDomainInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InboundConnections = (output: any, context: __SerdeContext): InboundConnection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InboundConnection(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InboundConnectionStatus = (
  output: any,
  context: __SerdeContext
): InboundConnectionStatus => {
  return {
    Message: __expectString(output.Message),
    StatusCode: __expectString(output.StatusCode),
  } as any;
};

const deserializeAws_restJson1InstanceCountLimits = (output: any, context: __SerdeContext): InstanceCountLimits => {
  return {
    MaximumInstanceCount: __expectInt32(output.MaximumInstanceCount),
    MinimumInstanceCount: __expectInt32(output.MinimumInstanceCount),
  } as any;
};

const deserializeAws_restJson1InstanceLimits = (output: any, context: __SerdeContext): InstanceLimits => {
  return {
    InstanceCountLimits:
      output.InstanceCountLimits != null
        ? deserializeAws_restJson1InstanceCountLimits(output.InstanceCountLimits, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InstanceRoleList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1InstanceTypeDetails = (output: any, context: __SerdeContext): InstanceTypeDetails => {
  return {
    AdvancedSecurityEnabled: __expectBoolean(output.AdvancedSecurityEnabled),
    AppLogsEnabled: __expectBoolean(output.AppLogsEnabled),
    CognitoEnabled: __expectBoolean(output.CognitoEnabled),
    EncryptionEnabled: __expectBoolean(output.EncryptionEnabled),
    InstanceRole:
      output.InstanceRole != null ? deserializeAws_restJson1InstanceRoleList(output.InstanceRole, context) : undefined,
    InstanceType: __expectString(output.InstanceType),
    WarmEnabled: __expectBoolean(output.WarmEnabled),
  } as any;
};

const deserializeAws_restJson1InstanceTypeDetailsList = (
  output: any,
  context: __SerdeContext
): InstanceTypeDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InstanceTypeDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Issues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Limits = (output: any, context: __SerdeContext): Limits => {
  return {
    AdditionalLimits:
      output.AdditionalLimits != null
        ? deserializeAws_restJson1AdditionalLimitList(output.AdditionalLimits, context)
        : undefined,
    InstanceLimits:
      output.InstanceLimits != null
        ? deserializeAws_restJson1InstanceLimits(output.InstanceLimits, context)
        : undefined,
    StorageTypes:
      output.StorageTypes != null ? deserializeAws_restJson1StorageTypeList(output.StorageTypes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LimitsByRole = (output: any, context: __SerdeContext): Record<string, Limits> => {
  return Object.entries(output).reduce((acc: Record<string, Limits>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1Limits(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1LimitValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1LogPublishingOption = (output: any, context: __SerdeContext): LogPublishingOption => {
  return {
    CloudWatchLogsLogGroupArn: __expectString(output.CloudWatchLogsLogGroupArn),
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1LogPublishingOptions = (
  output: any,
  context: __SerdeContext
): Record<string, LogPublishingOption> => {
  return Object.entries(output).reduce(
    (acc: Record<string, LogPublishingOption>, [key, value]: [LogType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1LogPublishingOption(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1LogPublishingOptionsStatus = (
  output: any,
  context: __SerdeContext
): LogPublishingOptionsStatus => {
  return {
    Options: output.Options != null ? deserializeAws_restJson1LogPublishingOptions(output.Options, context) : undefined,
    Status: output.Status != null ? deserializeAws_restJson1OptionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NodeToNodeEncryptionOptions = (
  output: any,
  context: __SerdeContext
): NodeToNodeEncryptionOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1NodeToNodeEncryptionOptionsStatus = (
  output: any,
  context: __SerdeContext
): NodeToNodeEncryptionOptionsStatus => {
  return {
    Options:
      output.Options != null ? deserializeAws_restJson1NodeToNodeEncryptionOptions(output.Options, context) : undefined,
    Status: output.Status != null ? deserializeAws_restJson1OptionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1OptionStatus = (output: any, context: __SerdeContext): OptionStatus => {
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

const deserializeAws_restJson1OutboundConnection = (output: any, context: __SerdeContext): OutboundConnection => {
  return {
    ConnectionAlias: __expectString(output.ConnectionAlias),
    ConnectionId: __expectString(output.ConnectionId),
    ConnectionStatus:
      output.ConnectionStatus != null
        ? deserializeAws_restJson1OutboundConnectionStatus(output.ConnectionStatus, context)
        : undefined,
    LocalDomainInfo:
      output.LocalDomainInfo != null
        ? deserializeAws_restJson1DomainInformationContainer(output.LocalDomainInfo, context)
        : undefined,
    RemoteDomainInfo:
      output.RemoteDomainInfo != null
        ? deserializeAws_restJson1DomainInformationContainer(output.RemoteDomainInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OutboundConnections = (output: any, context: __SerdeContext): OutboundConnection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OutboundConnection(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OutboundConnectionStatus = (
  output: any,
  context: __SerdeContext
): OutboundConnectionStatus => {
  return {
    Message: __expectString(output.Message),
    StatusCode: __expectString(output.StatusCode),
  } as any;
};

const deserializeAws_restJson1PackageDetails = (output: any, context: __SerdeContext): PackageDetails => {
  return {
    AvailablePackageVersion: __expectString(output.AvailablePackageVersion),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    ErrorDetails:
      output.ErrorDetails != null ? deserializeAws_restJson1ErrorDetails(output.ErrorDetails, context) : undefined,
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

const deserializeAws_restJson1PackageDetailsList = (output: any, context: __SerdeContext): PackageDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PackageDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PackageVersionHistory = (output: any, context: __SerdeContext): PackageVersionHistory => {
  return {
    CommitMessage: __expectString(output.CommitMessage),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    PackageVersion: __expectString(output.PackageVersion),
  } as any;
};

const deserializeAws_restJson1PackageVersionHistoryList = (
  output: any,
  context: __SerdeContext
): PackageVersionHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PackageVersionHistory(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  return {
    RecurringChargeAmount: __limitedParseDouble(output.RecurringChargeAmount),
    RecurringChargeFrequency: __expectString(output.RecurringChargeFrequency),
  } as any;
};

const deserializeAws_restJson1RecurringChargeList = (output: any, context: __SerdeContext): RecurringCharge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecurringCharge(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReservedInstance = (output: any, context: __SerdeContext): ReservedInstance => {
  return {
    BillingSubscriptionId: __expectLong(output.BillingSubscriptionId),
    CurrencyCode: __expectString(output.CurrencyCode),
    Duration: __expectInt32(output.Duration),
    FixedPrice: __limitedParseDouble(output.FixedPrice),
    InstanceCount: __expectInt32(output.InstanceCount),
    InstanceType: __expectString(output.InstanceType),
    PaymentOption: __expectString(output.PaymentOption),
    RecurringCharges:
      output.RecurringCharges != null
        ? deserializeAws_restJson1RecurringChargeList(output.RecurringCharges, context)
        : undefined,
    ReservationName: __expectString(output.ReservationName),
    ReservedInstanceId: __expectString(output.ReservedInstanceId),
    ReservedInstanceOfferingId: __expectString(output.ReservedInstanceOfferingId),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
    UsagePrice: __limitedParseDouble(output.UsagePrice),
  } as any;
};

const deserializeAws_restJson1ReservedInstanceList = (output: any, context: __SerdeContext): ReservedInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReservedInstance(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReservedInstanceOffering = (
  output: any,
  context: __SerdeContext
): ReservedInstanceOffering => {
  return {
    CurrencyCode: __expectString(output.CurrencyCode),
    Duration: __expectInt32(output.Duration),
    FixedPrice: __limitedParseDouble(output.FixedPrice),
    InstanceType: __expectString(output.InstanceType),
    PaymentOption: __expectString(output.PaymentOption),
    RecurringCharges:
      output.RecurringCharges != null
        ? deserializeAws_restJson1RecurringChargeList(output.RecurringCharges, context)
        : undefined,
    ReservedInstanceOfferingId: __expectString(output.ReservedInstanceOfferingId),
    UsagePrice: __limitedParseDouble(output.UsagePrice),
  } as any;
};

const deserializeAws_restJson1ReservedInstanceOfferingList = (
  output: any,
  context: __SerdeContext
): ReservedInstanceOffering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReservedInstanceOffering(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SAMLIdp = (output: any, context: __SerdeContext): SAMLIdp => {
  return {
    EntityId: __expectString(output.EntityId),
    MetadataContent: __expectString(output.MetadataContent),
  } as any;
};

const deserializeAws_restJson1SAMLOptionsOutput = (output: any, context: __SerdeContext): SAMLOptionsOutput => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    Idp: output.Idp != null ? deserializeAws_restJson1SAMLIdp(output.Idp, context) : undefined,
    RolesKey: __expectString(output.RolesKey),
    SessionTimeoutMinutes: __expectInt32(output.SessionTimeoutMinutes),
    SubjectKey: __expectString(output.SubjectKey),
  } as any;
};

const deserializeAws_restJson1ScheduledAutoTuneDetails = (
  output: any,
  context: __SerdeContext
): ScheduledAutoTuneDetails => {
  return {
    Action: __expectString(output.Action),
    ActionType: __expectString(output.ActionType),
    Date: output.Date != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Date))) : undefined,
    Severity: __expectString(output.Severity),
  } as any;
};

const deserializeAws_restJson1ServiceSoftwareOptions = (
  output: any,
  context: __SerdeContext
): ServiceSoftwareOptions => {
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

const deserializeAws_restJson1SnapshotOptions = (output: any, context: __SerdeContext): SnapshotOptions => {
  return {
    AutomatedSnapshotStartHour: __expectInt32(output.AutomatedSnapshotStartHour),
  } as any;
};

const deserializeAws_restJson1SnapshotOptionsStatus = (output: any, context: __SerdeContext): SnapshotOptionsStatus => {
  return {
    Options: output.Options != null ? deserializeAws_restJson1SnapshotOptions(output.Options, context) : undefined,
    Status: output.Status != null ? deserializeAws_restJson1OptionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1StorageType = (output: any, context: __SerdeContext): StorageType => {
  return {
    StorageSubTypeName: __expectString(output.StorageSubTypeName),
    StorageTypeLimits:
      output.StorageTypeLimits != null
        ? deserializeAws_restJson1StorageTypeLimitList(output.StorageTypeLimits, context)
        : undefined,
    StorageTypeName: __expectString(output.StorageTypeName),
  } as any;
};

const deserializeAws_restJson1StorageTypeLimit = (output: any, context: __SerdeContext): StorageTypeLimit => {
  return {
    LimitName: __expectString(output.LimitName),
    LimitValues:
      output.LimitValues != null ? deserializeAws_restJson1LimitValueList(output.LimitValues, context) : undefined,
  } as any;
};

const deserializeAws_restJson1StorageTypeLimitList = (output: any, context: __SerdeContext): StorageTypeLimit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StorageTypeLimit(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StorageTypeList = (output: any, context: __SerdeContext): StorageType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StorageType(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UpgradeHistory = (output: any, context: __SerdeContext): UpgradeHistory => {
  return {
    StartTimestamp:
      output.StartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTimestamp)))
        : undefined,
    StepsList:
      output.StepsList != null ? deserializeAws_restJson1UpgradeStepsList(output.StepsList, context) : undefined,
    UpgradeName: __expectString(output.UpgradeName),
    UpgradeStatus: __expectString(output.UpgradeStatus),
  } as any;
};

const deserializeAws_restJson1UpgradeHistoryList = (output: any, context: __SerdeContext): UpgradeHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UpgradeHistory(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UpgradeStepItem = (output: any, context: __SerdeContext): UpgradeStepItem => {
  return {
    Issues: output.Issues != null ? deserializeAws_restJson1Issues(output.Issues, context) : undefined,
    ProgressPercent: __limitedParseDouble(output.ProgressPercent),
    UpgradeStep: __expectString(output.UpgradeStep),
    UpgradeStepStatus: __expectString(output.UpgradeStepStatus),
  } as any;
};

const deserializeAws_restJson1UpgradeStepsList = (output: any, context: __SerdeContext): UpgradeStepItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UpgradeStepItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ValidationFailure = (output: any, context: __SerdeContext): ValidationFailure => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1ValidationFailures = (output: any, context: __SerdeContext): ValidationFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationFailure(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VersionList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1VersionStatus = (output: any, context: __SerdeContext): VersionStatus => {
  return {
    Options: __expectString(output.Options),
    Status: output.Status != null ? deserializeAws_restJson1OptionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VPCDerivedInfo = (output: any, context: __SerdeContext): VPCDerivedInfo => {
  return {
    AvailabilityZones:
      output.AvailabilityZones != null
        ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
        : undefined,
    SecurityGroupIds:
      output.SecurityGroupIds != null
        ? deserializeAws_restJson1StringList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds: output.SubnetIds != null ? deserializeAws_restJson1StringList(output.SubnetIds, context) : undefined,
    VPCId: __expectString(output.VPCId),
  } as any;
};

const deserializeAws_restJson1VPCDerivedInfoStatus = (output: any, context: __SerdeContext): VPCDerivedInfoStatus => {
  return {
    Options: output.Options != null ? deserializeAws_restJson1VPCDerivedInfo(output.Options, context) : undefined,
    Status: output.Status != null ? deserializeAws_restJson1OptionStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VpcEndpoint = (output: any, context: __SerdeContext): VpcEndpoint => {
  return {
    DomainArn: __expectString(output.DomainArn),
    Endpoint: __expectString(output.Endpoint),
    Status: __expectString(output.Status),
    VpcEndpointId: __expectString(output.VpcEndpointId),
    VpcEndpointOwner: __expectString(output.VpcEndpointOwner),
    VpcOptions:
      output.VpcOptions != null ? deserializeAws_restJson1VPCDerivedInfo(output.VpcOptions, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VpcEndpointError = (output: any, context: __SerdeContext): VpcEndpointError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    VpcEndpointId: __expectString(output.VpcEndpointId),
  } as any;
};

const deserializeAws_restJson1VpcEndpointErrorList = (output: any, context: __SerdeContext): VpcEndpointError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VpcEndpointError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VpcEndpoints = (output: any, context: __SerdeContext): VpcEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VpcEndpoint(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VpcEndpointSummary = (output: any, context: __SerdeContext): VpcEndpointSummary => {
  return {
    DomainArn: __expectString(output.DomainArn),
    Status: __expectString(output.Status),
    VpcEndpointId: __expectString(output.VpcEndpointId),
    VpcEndpointOwner: __expectString(output.VpcEndpointOwner),
  } as any;
};

const deserializeAws_restJson1VpcEndpointSummaryList = (output: any, context: __SerdeContext): VpcEndpointSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VpcEndpointSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ZoneAwarenessConfig = (output: any, context: __SerdeContext): ZoneAwarenessConfig => {
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
