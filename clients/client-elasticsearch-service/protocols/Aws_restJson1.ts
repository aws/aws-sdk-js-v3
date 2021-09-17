import {
  AcceptInboundCrossClusterSearchConnectionCommandInput,
  AcceptInboundCrossClusterSearchConnectionCommandOutput,
} from "../commands/AcceptInboundCrossClusterSearchConnectionCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import { AssociatePackageCommandInput, AssociatePackageCommandOutput } from "../commands/AssociatePackageCommand";
import {
  CancelElasticsearchServiceSoftwareUpdateCommandInput,
  CancelElasticsearchServiceSoftwareUpdateCommandOutput,
} from "../commands/CancelElasticsearchServiceSoftwareUpdateCommand";
import {
  CreateElasticsearchDomainCommandInput,
  CreateElasticsearchDomainCommandOutput,
} from "../commands/CreateElasticsearchDomainCommand";
import {
  CreateOutboundCrossClusterSearchConnectionCommandInput,
  CreateOutboundCrossClusterSearchConnectionCommandOutput,
} from "../commands/CreateOutboundCrossClusterSearchConnectionCommand";
import { CreatePackageCommandInput, CreatePackageCommandOutput } from "../commands/CreatePackageCommand";
import {
  DeleteElasticsearchDomainCommandInput,
  DeleteElasticsearchDomainCommandOutput,
} from "../commands/DeleteElasticsearchDomainCommand";
import {
  DeleteElasticsearchServiceRoleCommandInput,
  DeleteElasticsearchServiceRoleCommandOutput,
} from "../commands/DeleteElasticsearchServiceRoleCommand";
import {
  DeleteInboundCrossClusterSearchConnectionCommandInput,
  DeleteInboundCrossClusterSearchConnectionCommandOutput,
} from "../commands/DeleteInboundCrossClusterSearchConnectionCommand";
import {
  DeleteOutboundCrossClusterSearchConnectionCommandInput,
  DeleteOutboundCrossClusterSearchConnectionCommandOutput,
} from "../commands/DeleteOutboundCrossClusterSearchConnectionCommand";
import { DeletePackageCommandInput, DeletePackageCommandOutput } from "../commands/DeletePackageCommand";
import {
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput,
} from "../commands/DescribeDomainAutoTunesCommand";
import {
  DescribeElasticsearchDomainCommandInput,
  DescribeElasticsearchDomainCommandOutput,
} from "../commands/DescribeElasticsearchDomainCommand";
import {
  DescribeElasticsearchDomainConfigCommandInput,
  DescribeElasticsearchDomainConfigCommandOutput,
} from "../commands/DescribeElasticsearchDomainConfigCommand";
import {
  DescribeElasticsearchDomainsCommandInput,
  DescribeElasticsearchDomainsCommandOutput,
} from "../commands/DescribeElasticsearchDomainsCommand";
import {
  DescribeElasticsearchInstanceTypeLimitsCommandInput,
  DescribeElasticsearchInstanceTypeLimitsCommandOutput,
} from "../commands/DescribeElasticsearchInstanceTypeLimitsCommand";
import {
  DescribeInboundCrossClusterSearchConnectionsCommandInput,
  DescribeInboundCrossClusterSearchConnectionsCommandOutput,
} from "../commands/DescribeInboundCrossClusterSearchConnectionsCommand";
import {
  DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  DescribeOutboundCrossClusterSearchConnectionsCommandOutput,
} from "../commands/DescribeOutboundCrossClusterSearchConnectionsCommand";
import { DescribePackagesCommandInput, DescribePackagesCommandOutput } from "../commands/DescribePackagesCommand";
import {
  DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  DescribeReservedElasticsearchInstanceOfferingsCommandOutput,
} from "../commands/DescribeReservedElasticsearchInstanceOfferingsCommand";
import {
  DescribeReservedElasticsearchInstancesCommandInput,
  DescribeReservedElasticsearchInstancesCommandOutput,
} from "../commands/DescribeReservedElasticsearchInstancesCommand";
import { DissociatePackageCommandInput, DissociatePackageCommandOutput } from "../commands/DissociatePackageCommand";
import {
  GetCompatibleElasticsearchVersionsCommandInput,
  GetCompatibleElasticsearchVersionsCommandOutput,
} from "../commands/GetCompatibleElasticsearchVersionsCommand";
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
  ListElasticsearchInstanceTypesCommandInput,
  ListElasticsearchInstanceTypesCommandOutput,
} from "../commands/ListElasticsearchInstanceTypesCommand";
import {
  ListElasticsearchVersionsCommandInput,
  ListElasticsearchVersionsCommandOutput,
} from "../commands/ListElasticsearchVersionsCommand";
import {
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput,
} from "../commands/ListPackagesForDomainCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import {
  PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  PurchaseReservedElasticsearchInstanceOfferingCommandOutput,
} from "../commands/PurchaseReservedElasticsearchInstanceOfferingCommand";
import {
  RejectInboundCrossClusterSearchConnectionCommandInput,
  RejectInboundCrossClusterSearchConnectionCommandOutput,
} from "../commands/RejectInboundCrossClusterSearchConnectionCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "../commands/RemoveTagsCommand";
import {
  StartElasticsearchServiceSoftwareUpdateCommandInput,
  StartElasticsearchServiceSoftwareUpdateCommandOutput,
} from "../commands/StartElasticsearchServiceSoftwareUpdateCommand";
import {
  UpdateElasticsearchDomainConfigCommandInput,
  UpdateElasticsearchDomainConfigCommandOutput,
} from "../commands/UpdateElasticsearchDomainConfigCommand";
import { UpdatePackageCommandInput, UpdatePackageCommandOutput } from "../commands/UpdatePackageCommand";
import {
  UpgradeElasticsearchDomainCommandInput,
  UpgradeElasticsearchDomainCommandOutput,
} from "../commands/UpgradeElasticsearchDomainCommand";
import {
  AccessDeniedException,
  AccessPoliciesStatus,
  AdditionalLimit,
  AdvancedOptionsStatus,
  AdvancedSecurityOptions,
  AdvancedSecurityOptionsInput,
  AdvancedSecurityOptionsStatus,
  AutoTune,
  AutoTuneDetails,
  AutoTuneMaintenanceSchedule,
  AutoTuneOptions,
  AutoTuneOptionsInput,
  AutoTuneOptionsOutput,
  AutoTuneOptionsStatus,
  AutoTuneStatus,
  BaseException,
  CognitoOptions,
  CognitoOptionsStatus,
  ColdStorageOptions,
  CompatibleVersionsMap,
  ConflictException,
  DescribePackagesFilter,
  DisabledOperationException,
  DomainEndpointOptions,
  DomainEndpointOptionsStatus,
  DomainInfo,
  DomainInformation,
  DomainPackageDetails,
  Duration,
  EBSOptions,
  EBSOptionsStatus,
  ESPartitionInstanceType,
  ElasticsearchClusterConfig,
  ElasticsearchClusterConfigStatus,
  ElasticsearchDomainConfig,
  ElasticsearchDomainStatus,
  ElasticsearchVersionStatus,
  EncryptionAtRestOptions,
  EncryptionAtRestOptionsStatus,
  ErrorDetails,
  Filter,
  InboundCrossClusterSearchConnection,
  InboundCrossClusterSearchConnectionStatus,
  InstanceCountLimits,
  InstanceLimits,
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
  OutboundCrossClusterSearchConnection,
  OutboundCrossClusterSearchConnectionStatus,
  PackageDetails,
  PackageSource,
  PackageVersionHistory,
  RecurringCharge,
  ReservedElasticsearchInstance,
  ReservedElasticsearchInstanceOffering,
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
  VPCDerivedInfo,
  VPCDerivedInfoStatus,
  VPCOptions,
  ValidationException,
  ZoneAwarenessConfig,
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
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand = async (
  input: AcceptInboundCrossClusterSearchConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/accept";
  if (input.CrossClusterSearchConnectionId !== undefined) {
    const labelValue: string = input.CrossClusterSearchConnectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CrossClusterSearchConnectionId.");
    }
    resolvedPath = resolvedPath.replace("{CrossClusterSearchConnectionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CrossClusterSearchConnectionId.");
  }
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/tags";
  let body: any;
  body = JSON.stringify({
    ...(input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN }),
    ...(input.TagList !== undefined &&
      input.TagList !== null && { TagList: serializeAws_restJson1TagList(input.TagList, context) }),
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
    "/2015-01-01/packages/associate/{PackageID}/{DomainName}";
  if (input.PackageID !== undefined) {
    const labelValue: string = input.PackageID;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PackageID.");
    }
    resolvedPath = resolvedPath.replace("{PackageID}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PackageID.");
  }
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
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

export const serializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand = async (
  input: CancelElasticsearchServiceSoftwareUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-01-01/es/serviceSoftwareUpdate/cancel";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
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

export const serializeAws_restJson1CreateElasticsearchDomainCommand = async (
  input: CreateElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/es/domain";
  let body: any;
  body = JSON.stringify({
    ...(input.AccessPolicies !== undefined &&
      input.AccessPolicies !== null && { AccessPolicies: input.AccessPolicies }),
    ...(input.AdvancedOptions !== undefined &&
      input.AdvancedOptions !== null && {
        AdvancedOptions: serializeAws_restJson1AdvancedOptions(input.AdvancedOptions, context),
      }),
    ...(input.AdvancedSecurityOptions !== undefined &&
      input.AdvancedSecurityOptions !== null && {
        AdvancedSecurityOptions: serializeAws_restJson1AdvancedSecurityOptionsInput(
          input.AdvancedSecurityOptions,
          context
        ),
      }),
    ...(input.AutoTuneOptions !== undefined &&
      input.AutoTuneOptions !== null && {
        AutoTuneOptions: serializeAws_restJson1AutoTuneOptionsInput(input.AutoTuneOptions, context),
      }),
    ...(input.CognitoOptions !== undefined &&
      input.CognitoOptions !== null && {
        CognitoOptions: serializeAws_restJson1CognitoOptions(input.CognitoOptions, context),
      }),
    ...(input.DomainEndpointOptions !== undefined &&
      input.DomainEndpointOptions !== null && {
        DomainEndpointOptions: serializeAws_restJson1DomainEndpointOptions(input.DomainEndpointOptions, context),
      }),
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.EBSOptions !== undefined &&
      input.EBSOptions !== null && { EBSOptions: serializeAws_restJson1EBSOptions(input.EBSOptions, context) }),
    ...(input.ElasticsearchClusterConfig !== undefined &&
      input.ElasticsearchClusterConfig !== null && {
        ElasticsearchClusterConfig: serializeAws_restJson1ElasticsearchClusterConfig(
          input.ElasticsearchClusterConfig,
          context
        ),
      }),
    ...(input.ElasticsearchVersion !== undefined &&
      input.ElasticsearchVersion !== null && { ElasticsearchVersion: input.ElasticsearchVersion }),
    ...(input.EncryptionAtRestOptions !== undefined &&
      input.EncryptionAtRestOptions !== null && {
        EncryptionAtRestOptions: serializeAws_restJson1EncryptionAtRestOptions(input.EncryptionAtRestOptions, context),
      }),
    ...(input.LogPublishingOptions !== undefined &&
      input.LogPublishingOptions !== null && {
        LogPublishingOptions: serializeAws_restJson1LogPublishingOptions(input.LogPublishingOptions, context),
      }),
    ...(input.NodeToNodeEncryptionOptions !== undefined &&
      input.NodeToNodeEncryptionOptions !== null && {
        NodeToNodeEncryptionOptions: serializeAws_restJson1NodeToNodeEncryptionOptions(
          input.NodeToNodeEncryptionOptions,
          context
        ),
      }),
    ...(input.SnapshotOptions !== undefined &&
      input.SnapshotOptions !== null && {
        SnapshotOptions: serializeAws_restJson1SnapshotOptions(input.SnapshotOptions, context),
      }),
    ...(input.TagList !== undefined &&
      input.TagList !== null && { TagList: serializeAws_restJson1TagList(input.TagList, context) }),
    ...(input.VPCOptions !== undefined &&
      input.VPCOptions !== null && { VPCOptions: serializeAws_restJson1VPCOptions(input.VPCOptions, context) }),
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

export const serializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand = async (
  input: CreateOutboundCrossClusterSearchConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/es/ccs/outboundConnection";
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectionAlias !== undefined &&
      input.ConnectionAlias !== null && { ConnectionAlias: input.ConnectionAlias }),
    ...(input.DestinationDomainInfo !== undefined &&
      input.DestinationDomainInfo !== null && {
        DestinationDomainInfo: serializeAws_restJson1DomainInformation(input.DestinationDomainInfo, context),
      }),
    ...(input.SourceDomainInfo !== undefined &&
      input.SourceDomainInfo !== null && {
        SourceDomainInfo: serializeAws_restJson1DomainInformation(input.SourceDomainInfo, context),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/packages";
  let body: any;
  body = JSON.stringify({
    ...(input.PackageDescription !== undefined &&
      input.PackageDescription !== null && { PackageDescription: input.PackageDescription }),
    ...(input.PackageName !== undefined && input.PackageName !== null && { PackageName: input.PackageName }),
    ...(input.PackageSource !== undefined &&
      input.PackageSource !== null && {
        PackageSource: serializeAws_restJson1PackageSource(input.PackageSource, context),
      }),
    ...(input.PackageType !== undefined && input.PackageType !== null && { PackageType: input.PackageType }),
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

export const serializeAws_restJson1DeleteElasticsearchDomainCommand = async (
  input: DeleteElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/es/domain/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
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

export const serializeAws_restJson1DeleteElasticsearchServiceRoleCommand = async (
  input: DeleteElasticsearchServiceRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/es/role";
  let body: any;
  body = "";
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

export const serializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand = async (
  input: DeleteInboundCrossClusterSearchConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}";
  if (input.CrossClusterSearchConnectionId !== undefined) {
    const labelValue: string = input.CrossClusterSearchConnectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CrossClusterSearchConnectionId.");
    }
    resolvedPath = resolvedPath.replace("{CrossClusterSearchConnectionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CrossClusterSearchConnectionId.");
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

export const serializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand = async (
  input: DeleteOutboundCrossClusterSearchConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-01-01/es/ccs/outboundConnection/{CrossClusterSearchConnectionId}";
  if (input.CrossClusterSearchConnectionId !== undefined) {
    const labelValue: string = input.CrossClusterSearchConnectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CrossClusterSearchConnectionId.");
    }
    resolvedPath = resolvedPath.replace("{CrossClusterSearchConnectionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CrossClusterSearchConnectionId.");
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

export const serializeAws_restJson1DeletePackageCommand = async (
  input: DeletePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/packages/{PackageID}";
  if (input.PackageID !== undefined) {
    const labelValue: string = input.PackageID;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PackageID.");
    }
    resolvedPath = resolvedPath.replace("{PackageID}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PackageID.");
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
    "/2015-01-01/es/domain/{DomainName}/autoTunes";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1DescribeElasticsearchDomainCommand = async (
  input: DescribeElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/es/domain/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
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

export const serializeAws_restJson1DescribeElasticsearchDomainConfigCommand = async (
  input: DescribeElasticsearchDomainConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/es/domain/{DomainName}/config";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
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

export const serializeAws_restJson1DescribeElasticsearchDomainsCommand = async (
  input: DescribeElasticsearchDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/es/domain-info";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainNames !== undefined &&
      input.DomainNames !== null && { DomainNames: serializeAws_restJson1DomainNameList(input.DomainNames, context) }),
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

export const serializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand = async (
  input: DescribeElasticsearchInstanceTypeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}";
  if (input.InstanceType !== undefined) {
    const labelValue: string = input.InstanceType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: InstanceType.");
    }
    resolvedPath = resolvedPath.replace("{InstanceType}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: InstanceType.");
  }
  if (input.ElasticsearchVersion !== undefined) {
    const labelValue: string = input.ElasticsearchVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ElasticsearchVersion.");
    }
    resolvedPath = resolvedPath.replace("{ElasticsearchVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ElasticsearchVersion.");
  }
  const query: any = {
    ...(input.DomainName !== undefined && { domainName: input.DomainName }),
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

export const serializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand = async (
  input: DescribeInboundCrossClusterSearchConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-01-01/es/ccs/inboundConnection/search";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand = async (
  input: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-01-01/es/ccs/outboundConnection/search";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1FilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/packages/describe";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_restJson1DescribePackagesFilterList(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand = async (
  input: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/es/reservedInstanceOfferings";
  const query: any = {
    ...(input.ReservedElasticsearchInstanceOfferingId !== undefined && {
      offeringId: input.ReservedElasticsearchInstanceOfferingId,
    }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1DescribeReservedElasticsearchInstancesCommand = async (
  input: DescribeReservedElasticsearchInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/es/reservedInstances";
  const query: any = {
    ...(input.ReservedElasticsearchInstanceId !== undefined && {
      reservationId: input.ReservedElasticsearchInstanceId,
    }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1DissociatePackageCommand = async (
  input: DissociatePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-01-01/packages/dissociate/{PackageID}/{DomainName}";
  if (input.PackageID !== undefined) {
    const labelValue: string = input.PackageID;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PackageID.");
    }
    resolvedPath = resolvedPath.replace("{PackageID}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PackageID.");
  }
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
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

export const serializeAws_restJson1GetCompatibleElasticsearchVersionsCommand = async (
  input: GetCompatibleElasticsearchVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/es/compatibleVersions";
  const query: any = {
    ...(input.DomainName !== undefined && { domainName: input.DomainName }),
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

export const serializeAws_restJson1GetPackageVersionHistoryCommand = async (
  input: GetPackageVersionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/packages/{PackageID}/history";
  if (input.PackageID !== undefined) {
    const labelValue: string = input.PackageID;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PackageID.");
    }
    resolvedPath = resolvedPath.replace("{PackageID}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PackageID.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1GetUpgradeHistoryCommand = async (
  input: GetUpgradeHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-01-01/es/upgradeDomain/{DomainName}/history";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1GetUpgradeStatusCommand = async (
  input: GetUpgradeStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-01-01/es/upgradeDomain/{DomainName}/status";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
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

export const serializeAws_restJson1ListDomainNamesCommand = async (
  input: ListDomainNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/domain";
  const query: any = {
    ...(input.EngineType !== undefined && { engineType: input.EngineType }),
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

export const serializeAws_restJson1ListDomainsForPackageCommand = async (
  input: ListDomainsForPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/packages/{PackageID}/domains";
  if (input.PackageID !== undefined) {
    const labelValue: string = input.PackageID;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PackageID.");
    }
    resolvedPath = resolvedPath.replace("{PackageID}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PackageID.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListElasticsearchInstanceTypesCommand = async (
  input: ListElasticsearchInstanceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-01-01/es/instanceTypes/{ElasticsearchVersion}";
  if (input.ElasticsearchVersion !== undefined) {
    const labelValue: string = input.ElasticsearchVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ElasticsearchVersion.");
    }
    resolvedPath = resolvedPath.replace("{ElasticsearchVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ElasticsearchVersion.");
  }
  const query: any = {
    ...(input.DomainName !== undefined && { domainName: input.DomainName }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListElasticsearchVersionsCommand = async (
  input: ListElasticsearchVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/es/versions";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListPackagesForDomainCommand = async (
  input: ListPackagesForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/domain/{DomainName}/packages";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/tags";
  const query: any = {
    ...(input.ARN !== undefined && { arn: input.ARN }),
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

export const serializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand = async (
  input: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-01-01/es/purchaseReservedInstanceOffering";
  let body: any;
  body = JSON.stringify({
    ...(input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount }),
    ...(input.ReservationName !== undefined &&
      input.ReservationName !== null && { ReservationName: input.ReservationName }),
    ...(input.ReservedElasticsearchInstanceOfferingId !== undefined &&
      input.ReservedElasticsearchInstanceOfferingId !== null && {
        ReservedElasticsearchInstanceOfferingId: input.ReservedElasticsearchInstanceOfferingId,
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

export const serializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand = async (
  input: RejectInboundCrossClusterSearchConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/reject";
  if (input.CrossClusterSearchConnectionId !== undefined) {
    const labelValue: string = input.CrossClusterSearchConnectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CrossClusterSearchConnectionId.");
    }
    resolvedPath = resolvedPath.replace("{CrossClusterSearchConnectionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CrossClusterSearchConnectionId.");
  }
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/tags-removal";
  let body: any;
  body = JSON.stringify({
    ...(input.ARN !== undefined && input.ARN !== null && { ARN: input.ARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_restJson1StringList(input.TagKeys, context) }),
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

export const serializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand = async (
  input: StartElasticsearchServiceSoftwareUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-01-01/es/serviceSoftwareUpdate/start";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
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

export const serializeAws_restJson1UpdateElasticsearchDomainConfigCommand = async (
  input: UpdateElasticsearchDomainConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/es/domain/{DomainName}/config";
  if (input.DomainName !== undefined) {
    const labelValue: string = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AccessPolicies !== undefined &&
      input.AccessPolicies !== null && { AccessPolicies: input.AccessPolicies }),
    ...(input.AdvancedOptions !== undefined &&
      input.AdvancedOptions !== null && {
        AdvancedOptions: serializeAws_restJson1AdvancedOptions(input.AdvancedOptions, context),
      }),
    ...(input.AdvancedSecurityOptions !== undefined &&
      input.AdvancedSecurityOptions !== null && {
        AdvancedSecurityOptions: serializeAws_restJson1AdvancedSecurityOptionsInput(
          input.AdvancedSecurityOptions,
          context
        ),
      }),
    ...(input.AutoTuneOptions !== undefined &&
      input.AutoTuneOptions !== null && {
        AutoTuneOptions: serializeAws_restJson1AutoTuneOptions(input.AutoTuneOptions, context),
      }),
    ...(input.CognitoOptions !== undefined &&
      input.CognitoOptions !== null && {
        CognitoOptions: serializeAws_restJson1CognitoOptions(input.CognitoOptions, context),
      }),
    ...(input.DomainEndpointOptions !== undefined &&
      input.DomainEndpointOptions !== null && {
        DomainEndpointOptions: serializeAws_restJson1DomainEndpointOptions(input.DomainEndpointOptions, context),
      }),
    ...(input.EBSOptions !== undefined &&
      input.EBSOptions !== null && { EBSOptions: serializeAws_restJson1EBSOptions(input.EBSOptions, context) }),
    ...(input.ElasticsearchClusterConfig !== undefined &&
      input.ElasticsearchClusterConfig !== null && {
        ElasticsearchClusterConfig: serializeAws_restJson1ElasticsearchClusterConfig(
          input.ElasticsearchClusterConfig,
          context
        ),
      }),
    ...(input.EncryptionAtRestOptions !== undefined &&
      input.EncryptionAtRestOptions !== null && {
        EncryptionAtRestOptions: serializeAws_restJson1EncryptionAtRestOptions(input.EncryptionAtRestOptions, context),
      }),
    ...(input.LogPublishingOptions !== undefined &&
      input.LogPublishingOptions !== null && {
        LogPublishingOptions: serializeAws_restJson1LogPublishingOptions(input.LogPublishingOptions, context),
      }),
    ...(input.NodeToNodeEncryptionOptions !== undefined &&
      input.NodeToNodeEncryptionOptions !== null && {
        NodeToNodeEncryptionOptions: serializeAws_restJson1NodeToNodeEncryptionOptions(
          input.NodeToNodeEncryptionOptions,
          context
        ),
      }),
    ...(input.SnapshotOptions !== undefined &&
      input.SnapshotOptions !== null && {
        SnapshotOptions: serializeAws_restJson1SnapshotOptions(input.SnapshotOptions, context),
      }),
    ...(input.VPCOptions !== undefined &&
      input.VPCOptions !== null && { VPCOptions: serializeAws_restJson1VPCOptions(input.VPCOptions, context) }),
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/packages/update";
  let body: any;
  body = JSON.stringify({
    ...(input.CommitMessage !== undefined && input.CommitMessage !== null && { CommitMessage: input.CommitMessage }),
    ...(input.PackageDescription !== undefined &&
      input.PackageDescription !== null && { PackageDescription: input.PackageDescription }),
    ...(input.PackageID !== undefined && input.PackageID !== null && { PackageID: input.PackageID }),
    ...(input.PackageSource !== undefined &&
      input.PackageSource !== null && {
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

export const serializeAws_restJson1UpgradeElasticsearchDomainCommand = async (
  input: UpgradeElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-01-01/es/upgradeDomain";
  let body: any;
  body = JSON.stringify({
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.PerformCheckOnly !== undefined &&
      input.PerformCheckOnly !== null && { PerformCheckOnly: input.PerformCheckOnly }),
    ...(input.TargetVersion !== undefined && input.TargetVersion !== null && { TargetVersion: input.TargetVersion }),
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

export const deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInboundCrossClusterSearchConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommandError(output, context);
  }
  const contents: AcceptInboundCrossClusterSearchConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    CrossClusterSearchConnection: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CrossClusterSearchConnection !== undefined && data.CrossClusterSearchConnection !== null) {
    contents.CrossClusterSearchConnection = deserializeAws_restJson1InboundCrossClusterSearchConnection(
      data.CrossClusterSearchConnection,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInboundCrossClusterSearchConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
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

export const deserializeAws_restJson1AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddTagsCommandError(output, context);
  }
  const contents: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1AssociatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociatePackageCommandError(output, context);
  }
  const contents: AssociatePackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainPackageDetails: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainPackageDetails !== undefined && data.DomainPackageDetails !== null) {
    contents.DomainPackageDetails = deserializeAws_restJson1DomainPackageDetails(data.DomainPackageDetails, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociatePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elasticsearchservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.elasticsearchservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommandError(output, context);
  }
  const contents: CancelElasticsearchServiceSoftwareUpdateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ServiceSoftwareOptions: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ServiceSoftwareOptions !== undefined && data.ServiceSoftwareOptions !== null) {
    contents.ServiceSoftwareOptions = deserializeAws_restJson1ServiceSoftwareOptions(
      data.ServiceSoftwareOptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1CreateElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateElasticsearchDomainCommandError(output, context);
  }
  const contents: CreateElasticsearchDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainStatus: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
    contents.DomainStatus = deserializeAws_restJson1ElasticsearchDomainStatus(data.DomainStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateElasticsearchDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateElasticsearchDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.elasticsearchservice#InvalidTypeException":
      response = {
        ...(await deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutboundCrossClusterSearchConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommandError(output, context);
  }
  const contents: CreateOutboundCrossClusterSearchConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConnectionAlias: undefined,
    ConnectionStatus: undefined,
    CrossClusterSearchConnectionId: undefined,
    DestinationDomainInfo: undefined,
    SourceDomainInfo: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectionAlias !== undefined && data.ConnectionAlias !== null) {
    contents.ConnectionAlias = __expectString(data.ConnectionAlias);
  }
  if (data.ConnectionStatus !== undefined && data.ConnectionStatus !== null) {
    contents.ConnectionStatus = deserializeAws_restJson1OutboundCrossClusterSearchConnectionStatus(
      data.ConnectionStatus,
      context
    );
  }
  if (data.CrossClusterSearchConnectionId !== undefined && data.CrossClusterSearchConnectionId !== null) {
    contents.CrossClusterSearchConnectionId = __expectString(data.CrossClusterSearchConnectionId);
  }
  if (data.DestinationDomainInfo !== undefined && data.DestinationDomainInfo !== null) {
    contents.DestinationDomainInfo = deserializeAws_restJson1DomainInformation(data.DestinationDomainInfo, context);
  }
  if (data.SourceDomainInfo !== undefined && data.SourceDomainInfo !== null) {
    contents.SourceDomainInfo = deserializeAws_restJson1DomainInformation(data.SourceDomainInfo, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutboundCrossClusterSearchConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePackageCommandError(output, context);
  }
  const contents: CreatePackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    PackageDetails: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PackageDetails !== undefined && data.PackageDetails !== null) {
    contents.PackageDetails = deserializeAws_restJson1PackageDetails(data.PackageDetails, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elasticsearchservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.elasticsearchservice#InvalidTypeException":
      response = {
        ...(await deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1DeleteElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteElasticsearchDomainCommandError(output, context);
  }
  const contents: DeleteElasticsearchDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainStatus: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
    contents.DomainStatus = deserializeAws_restJson1ElasticsearchDomainStatus(data.DomainStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteElasticsearchDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1DeleteElasticsearchServiceRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchServiceRoleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteElasticsearchServiceRoleCommandError(output, context);
  }
  const contents: DeleteElasticsearchServiceRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteElasticsearchServiceRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchServiceRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInboundCrossClusterSearchConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommandError(output, context);
  }
  const contents: DeleteInboundCrossClusterSearchConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    CrossClusterSearchConnection: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CrossClusterSearchConnection !== undefined && data.CrossClusterSearchConnection !== null) {
    contents.CrossClusterSearchConnection = deserializeAws_restJson1InboundCrossClusterSearchConnection(
      data.CrossClusterSearchConnection,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInboundCrossClusterSearchConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
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

export const deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutboundCrossClusterSearchConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommandError(output, context);
  }
  const contents: DeleteOutboundCrossClusterSearchConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    CrossClusterSearchConnection: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CrossClusterSearchConnection !== undefined && data.CrossClusterSearchConnection !== null) {
    contents.CrossClusterSearchConnection = deserializeAws_restJson1OutboundCrossClusterSearchConnection(
      data.CrossClusterSearchConnection,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutboundCrossClusterSearchConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
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

export const deserializeAws_restJson1DeletePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePackageCommandError(output, context);
  }
  const contents: DeletePackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    PackageDetails: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PackageDetails !== undefined && data.PackageDetails !== null) {
    contents.PackageDetails = deserializeAws_restJson1PackageDetails(data.PackageDetails, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elasticsearchservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.elasticsearchservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1DescribeDomainAutoTunesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainAutoTunesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDomainAutoTunesCommandError(output, context);
  }
  const contents: DescribeDomainAutoTunesCommandOutput = {
    $metadata: deserializeMetadata(output),
    AutoTunes: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AutoTunes !== undefined && data.AutoTunes !== null) {
    contents.AutoTunes = deserializeAws_restJson1AutoTuneList(data.AutoTunes, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDomainAutoTunesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainAutoTunesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1DescribeElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeElasticsearchDomainCommandError(output, context);
  }
  const contents: DescribeElasticsearchDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainStatus: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainStatus !== undefined && data.DomainStatus !== null) {
    contents.DomainStatus = deserializeAws_restJson1ElasticsearchDomainStatus(data.DomainStatus, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeElasticsearchDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1DescribeElasticsearchDomainConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeElasticsearchDomainConfigCommandError(output, context);
  }
  const contents: DescribeElasticsearchDomainConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainConfig: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainConfig !== undefined && data.DomainConfig !== null) {
    contents.DomainConfig = deserializeAws_restJson1ElasticsearchDomainConfig(data.DomainConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeElasticsearchDomainConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1DescribeElasticsearchDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeElasticsearchDomainsCommandError(output, context);
  }
  const contents: DescribeElasticsearchDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainStatusList: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainStatusList !== undefined && data.DomainStatusList !== null) {
    contents.DomainStatusList = deserializeAws_restJson1ElasticsearchDomainStatusList(data.DomainStatusList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeElasticsearchDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommandError(output, context);
  }
  const contents: DescribeElasticsearchInstanceTypeLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    LimitsByRole: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LimitsByRole !== undefined && data.LimitsByRole !== null) {
    contents.LimitsByRole = deserializeAws_restJson1LimitsByRole(data.LimitsByRole, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.elasticsearchservice#InvalidTypeException":
      response = {
        ...(await deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInboundCrossClusterSearchConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommandError(output, context);
  }
  const contents: DescribeInboundCrossClusterSearchConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CrossClusterSearchConnections: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CrossClusterSearchConnections !== undefined && data.CrossClusterSearchConnections !== null) {
    contents.CrossClusterSearchConnections = deserializeAws_restJson1InboundCrossClusterSearchConnections(
      data.CrossClusterSearchConnections,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInboundCrossClusterSearchConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.elasticsearchservice#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOutboundCrossClusterSearchConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommandError(output, context);
  }
  const contents: DescribeOutboundCrossClusterSearchConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CrossClusterSearchConnections: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CrossClusterSearchConnections !== undefined && data.CrossClusterSearchConnections !== null) {
    contents.CrossClusterSearchConnections = deserializeAws_restJson1OutboundCrossClusterSearchConnections(
      data.CrossClusterSearchConnections,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOutboundCrossClusterSearchConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.elasticsearchservice#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribePackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePackagesCommandError(output, context);
  }
  const contents: DescribePackagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    PackageDetailsList: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PackageDetailsList !== undefined && data.PackageDetailsList !== null) {
    contents.PackageDetailsList = deserializeAws_restJson1PackageDetailsList(data.PackageDetailsList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribePackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elasticsearchservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommandError(output, context);
  }
  const contents: DescribeReservedElasticsearchInstanceOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ReservedElasticsearchInstanceOfferings: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (
    data.ReservedElasticsearchInstanceOfferings !== undefined &&
    data.ReservedElasticsearchInstanceOfferings !== null
  ) {
    contents.ReservedElasticsearchInstanceOfferings = deserializeAws_restJson1ReservedElasticsearchInstanceOfferingList(
      data.ReservedElasticsearchInstanceOfferings,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommandError(output, context);
  }
  const contents: DescribeReservedElasticsearchInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ReservedElasticsearchInstances: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ReservedElasticsearchInstances !== undefined && data.ReservedElasticsearchInstances !== null) {
    contents.ReservedElasticsearchInstances = deserializeAws_restJson1ReservedElasticsearchInstanceList(
      data.ReservedElasticsearchInstances,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1DissociatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DissociatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DissociatePackageCommandError(output, context);
  }
  const contents: DissociatePackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainPackageDetails: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainPackageDetails !== undefined && data.DomainPackageDetails !== null) {
    contents.DomainPackageDetails = deserializeAws_restJson1DomainPackageDetails(data.DomainPackageDetails, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DissociatePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DissociatePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elasticsearchservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.elasticsearchservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleElasticsearchVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommandError(output, context);
  }
  const contents: GetCompatibleElasticsearchVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CompatibleElasticsearchVersions: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CompatibleElasticsearchVersions !== undefined && data.CompatibleElasticsearchVersions !== null) {
    contents.CompatibleElasticsearchVersions = deserializeAws_restJson1CompatibleElasticsearchVersionsList(
      data.CompatibleElasticsearchVersions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleElasticsearchVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1GetPackageVersionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPackageVersionHistoryCommandError(output, context);
  }
  const contents: GetPackageVersionHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    PackageID: undefined,
    PackageVersionHistoryList: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PackageID !== undefined && data.PackageID !== null) {
    contents.PackageID = __expectString(data.PackageID);
  }
  if (data.PackageVersionHistoryList !== undefined && data.PackageVersionHistoryList !== null) {
    contents.PackageVersionHistoryList = deserializeAws_restJson1PackageVersionHistoryList(
      data.PackageVersionHistoryList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPackageVersionHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elasticsearchservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1GetUpgradeHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUpgradeHistoryCommandError(output, context);
  }
  const contents: GetUpgradeHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    UpgradeHistories: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.UpgradeHistories !== undefined && data.UpgradeHistories !== null) {
    contents.UpgradeHistories = deserializeAws_restJson1UpgradeHistoryList(data.UpgradeHistories, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetUpgradeHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1GetUpgradeStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUpgradeStatusCommandError(output, context);
  }
  const contents: GetUpgradeStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    StepStatus: undefined,
    UpgradeName: undefined,
    UpgradeStep: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StepStatus !== undefined && data.StepStatus !== null) {
    contents.StepStatus = __expectString(data.StepStatus);
  }
  if (data.UpgradeName !== undefined && data.UpgradeName !== null) {
    contents.UpgradeName = __expectString(data.UpgradeName);
  }
  if (data.UpgradeStep !== undefined && data.UpgradeStep !== null) {
    contents.UpgradeStep = __expectString(data.UpgradeStep);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetUpgradeStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1ListDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDomainNamesCommandError(output, context);
  }
  const contents: ListDomainNamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainNames: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainNames !== undefined && data.DomainNames !== null) {
    contents.DomainNames = deserializeAws_restJson1DomainInfoList(data.DomainNames, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDomainNamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1ListDomainsForPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsForPackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDomainsForPackageCommandError(output, context);
  }
  const contents: ListDomainsForPackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainPackageDetailsList: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainPackageDetailsList !== undefined && data.DomainPackageDetailsList !== null) {
    contents.DomainPackageDetailsList = deserializeAws_restJson1DomainPackageDetailsList(
      data.DomainPackageDetailsList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDomainsForPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsForPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elasticsearchservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1ListElasticsearchInstanceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchInstanceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListElasticsearchInstanceTypesCommandError(output, context);
  }
  const contents: ListElasticsearchInstanceTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ElasticsearchInstanceTypes: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ElasticsearchInstanceTypes !== undefined && data.ElasticsearchInstanceTypes !== null) {
    contents.ElasticsearchInstanceTypes = deserializeAws_restJson1ElasticsearchInstanceTypeList(
      data.ElasticsearchInstanceTypes,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListElasticsearchInstanceTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchInstanceTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1ListElasticsearchVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListElasticsearchVersionsCommandError(output, context);
  }
  const contents: ListElasticsearchVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ElasticsearchVersions: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ElasticsearchVersions !== undefined && data.ElasticsearchVersions !== null) {
    contents.ElasticsearchVersions = deserializeAws_restJson1ElasticsearchVersionList(
      data.ElasticsearchVersions,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListElasticsearchVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1ListPackagesForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesForDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPackagesForDomainCommandError(output, context);
  }
  const contents: ListPackagesForDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainPackageDetailsList: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainPackageDetailsList !== undefined && data.DomainPackageDetailsList !== null) {
    contents.DomainPackageDetailsList = deserializeAws_restJson1DomainPackageDetailsList(
      data.DomainPackageDetailsList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPackagesForDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesForDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elasticsearchservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsCommandError(output, context);
  }
  const contents: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    TagList: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TagList !== undefined && data.TagList !== null) {
    contents.TagList = deserializeAws_restJson1TagList(data.TagList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommandError(output, context);
  }
  const contents: PurchaseReservedElasticsearchInstanceOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ReservationName: undefined,
    ReservedElasticsearchInstanceId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ReservationName !== undefined && data.ReservationName !== null) {
    contents.ReservationName = __expectString(data.ReservationName);
  }
  if (data.ReservedElasticsearchInstanceId !== undefined && data.ReservedElasticsearchInstanceId !== null) {
    contents.ReservedElasticsearchInstanceId = __expectString(data.ReservedElasticsearchInstanceId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInboundCrossClusterSearchConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommandError(output, context);
  }
  const contents: RejectInboundCrossClusterSearchConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    CrossClusterSearchConnection: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CrossClusterSearchConnection !== undefined && data.CrossClusterSearchConnection !== null) {
    contents.CrossClusterSearchConnection = deserializeAws_restJson1InboundCrossClusterSearchConnection(
      data.CrossClusterSearchConnection,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInboundCrossClusterSearchConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
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

export const deserializeAws_restJson1RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveTagsCommandError(output, context);
  }
  const contents: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommandError(output, context);
  }
  const contents: StartElasticsearchServiceSoftwareUpdateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ServiceSoftwareOptions: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ServiceSoftwareOptions !== undefined && data.ServiceSoftwareOptions !== null) {
    contents.ServiceSoftwareOptions = deserializeAws_restJson1ServiceSoftwareOptions(
      data.ServiceSoftwareOptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1UpdateElasticsearchDomainConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateElasticsearchDomainConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateElasticsearchDomainConfigCommandError(output, context);
  }
  const contents: UpdateElasticsearchDomainConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainConfig: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainConfig !== undefined && data.DomainConfig !== null) {
    contents.DomainConfig = deserializeAws_restJson1ElasticsearchDomainConfig(data.DomainConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateElasticsearchDomainConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateElasticsearchDomainConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTypeException":
    case "com.amazonaws.elasticsearchservice#InvalidTypeException":
      response = {
        ...(await deserializeAws_restJson1InvalidTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1UpdatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePackageCommandError(output, context);
  }
  const contents: UpdatePackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    PackageDetails: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.PackageDetails !== undefined && data.PackageDetails !== null) {
    contents.PackageDetails = deserializeAws_restJson1PackageDetails(data.PackageDetails, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdatePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.elasticsearchservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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

export const deserializeAws_restJson1UpgradeElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpgradeElasticsearchDomainCommandError(output, context);
  }
  const contents: UpgradeElasticsearchDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    DomainName: undefined,
    PerformCheckOnly: undefined,
    TargetVersion: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DomainName !== undefined && data.DomainName !== null) {
    contents.DomainName = __expectString(data.DomainName);
  }
  if (data.PerformCheckOnly !== undefined && data.PerformCheckOnly !== null) {
    contents.PerformCheckOnly = __expectBoolean(data.PerformCheckOnly);
  }
  if (data.TargetVersion !== undefined && data.TargetVersion !== null) {
    contents.TargetVersion = __expectString(data.TargetVersion);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpgradeElasticsearchDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeElasticsearchDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      response = {
        ...(await deserializeAws_restJson1BaseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DisabledOperationException":
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      response = {
        ...(await deserializeAws_restJson1DisabledOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      response = {
        ...(await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
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
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1BaseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BaseException> => {
  const contents: BaseException = {
    name: "BaseException",
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
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

const deserializeAws_restJson1DisabledOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DisabledOperationException> => {
  const contents: DisabledOperationException = {
    name: "DisabledOperationException",
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

const deserializeAws_restJson1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const contents: InternalException = {
    name: "InternalException",
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

const deserializeAws_restJson1InvalidPaginationTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const contents: InvalidPaginationTokenException = {
    name: "InvalidPaginationTokenException",
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

const deserializeAws_restJson1InvalidTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTypeException> => {
  const contents: InvalidTypeException = {
    name: "InvalidTypeException",
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
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

const serializeAws_restJson1AdvancedOptions = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1AdvancedSecurityOptionsInput = (
  input: AdvancedSecurityOptionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.InternalUserDatabaseEnabled !== undefined &&
      input.InternalUserDatabaseEnabled !== null && { InternalUserDatabaseEnabled: input.InternalUserDatabaseEnabled }),
    ...(input.MasterUserOptions !== undefined &&
      input.MasterUserOptions !== null && {
        MasterUserOptions: serializeAws_restJson1MasterUserOptions(input.MasterUserOptions, context),
      }),
    ...(input.SAMLOptions !== undefined &&
      input.SAMLOptions !== null && {
        SAMLOptions: serializeAws_restJson1SAMLOptionsInput(input.SAMLOptions, context),
      }),
  };
};

const serializeAws_restJson1AutoTuneMaintenanceSchedule = (
  input: AutoTuneMaintenanceSchedule,
  context: __SerdeContext
): any => {
  return {
    ...(input.CronExpressionForRecurrence !== undefined &&
      input.CronExpressionForRecurrence !== null && { CronExpressionForRecurrence: input.CronExpressionForRecurrence }),
    ...(input.Duration !== undefined &&
      input.Duration !== null && { Duration: serializeAws_restJson1Duration(input.Duration, context) }),
    ...(input.StartAt !== undefined &&
      input.StartAt !== null && { StartAt: Math.round(input.StartAt.getTime() / 1000) }),
  };
};

const serializeAws_restJson1AutoTuneMaintenanceScheduleList = (
  input: AutoTuneMaintenanceSchedule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AutoTuneMaintenanceSchedule(entry, context);
    });
};

const serializeAws_restJson1AutoTuneOptions = (input: AutoTuneOptions, context: __SerdeContext): any => {
  return {
    ...(input.DesiredState !== undefined && input.DesiredState !== null && { DesiredState: input.DesiredState }),
    ...(input.MaintenanceSchedules !== undefined &&
      input.MaintenanceSchedules !== null && {
        MaintenanceSchedules: serializeAws_restJson1AutoTuneMaintenanceScheduleList(
          input.MaintenanceSchedules,
          context
        ),
      }),
    ...(input.RollbackOnDisable !== undefined &&
      input.RollbackOnDisable !== null && { RollbackOnDisable: input.RollbackOnDisable }),
  };
};

const serializeAws_restJson1AutoTuneOptionsInput = (input: AutoTuneOptionsInput, context: __SerdeContext): any => {
  return {
    ...(input.DesiredState !== undefined && input.DesiredState !== null && { DesiredState: input.DesiredState }),
    ...(input.MaintenanceSchedules !== undefined &&
      input.MaintenanceSchedules !== null && {
        MaintenanceSchedules: serializeAws_restJson1AutoTuneMaintenanceScheduleList(
          input.MaintenanceSchedules,
          context
        ),
      }),
  };
};

const serializeAws_restJson1CognitoOptions = (input: CognitoOptions, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.IdentityPoolId !== undefined &&
      input.IdentityPoolId !== null && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.UserPoolId !== undefined && input.UserPoolId !== null && { UserPoolId: input.UserPoolId }),
  };
};

const serializeAws_restJson1ColdStorageOptions = (input: ColdStorageOptions, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1DescribePackagesFilter = (input: DescribePackagesFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined &&
      input.Value !== null && { Value: serializeAws_restJson1DescribePackagesFilterValues(input.Value, context) }),
  };
};

const serializeAws_restJson1DescribePackagesFilterList = (
  input: DescribePackagesFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DescribePackagesFilter(entry, context);
    });
};

const serializeAws_restJson1DescribePackagesFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1DomainEndpointOptions = (input: DomainEndpointOptions, context: __SerdeContext): any => {
  return {
    ...(input.CustomEndpoint !== undefined &&
      input.CustomEndpoint !== null && { CustomEndpoint: input.CustomEndpoint }),
    ...(input.CustomEndpointCertificateArn !== undefined &&
      input.CustomEndpointCertificateArn !== null && {
        CustomEndpointCertificateArn: input.CustomEndpointCertificateArn,
      }),
    ...(input.CustomEndpointEnabled !== undefined &&
      input.CustomEndpointEnabled !== null && { CustomEndpointEnabled: input.CustomEndpointEnabled }),
    ...(input.EnforceHTTPS !== undefined && input.EnforceHTTPS !== null && { EnforceHTTPS: input.EnforceHTTPS }),
    ...(input.TLSSecurityPolicy !== undefined &&
      input.TLSSecurityPolicy !== null && { TLSSecurityPolicy: input.TLSSecurityPolicy }),
  };
};

const serializeAws_restJson1DomainInformation = (input: DomainInformation, context: __SerdeContext): any => {
  return {
    ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
    ...(input.OwnerId !== undefined && input.OwnerId !== null && { OwnerId: input.OwnerId }),
    ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
  };
};

const serializeAws_restJson1DomainNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Duration = (input: Duration, context: __SerdeContext): any => {
  return {
    ...(input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1EBSOptions = (input: EBSOptions, context: __SerdeContext): any => {
  return {
    ...(input.EBSEnabled !== undefined && input.EBSEnabled !== null && { EBSEnabled: input.EBSEnabled }),
    ...(input.Iops !== undefined && input.Iops !== null && { Iops: input.Iops }),
    ...(input.VolumeSize !== undefined && input.VolumeSize !== null && { VolumeSize: input.VolumeSize }),
    ...(input.VolumeType !== undefined && input.VolumeType !== null && { VolumeType: input.VolumeType }),
  };
};

const serializeAws_restJson1ElasticsearchClusterConfig = (
  input: ElasticsearchClusterConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.ColdStorageOptions !== undefined &&
      input.ColdStorageOptions !== null && {
        ColdStorageOptions: serializeAws_restJson1ColdStorageOptions(input.ColdStorageOptions, context),
      }),
    ...(input.DedicatedMasterCount !== undefined &&
      input.DedicatedMasterCount !== null && { DedicatedMasterCount: input.DedicatedMasterCount }),
    ...(input.DedicatedMasterEnabled !== undefined &&
      input.DedicatedMasterEnabled !== null && { DedicatedMasterEnabled: input.DedicatedMasterEnabled }),
    ...(input.DedicatedMasterType !== undefined &&
      input.DedicatedMasterType !== null && { DedicatedMasterType: input.DedicatedMasterType }),
    ...(input.InstanceCount !== undefined && input.InstanceCount !== null && { InstanceCount: input.InstanceCount }),
    ...(input.InstanceType !== undefined && input.InstanceType !== null && { InstanceType: input.InstanceType }),
    ...(input.WarmCount !== undefined && input.WarmCount !== null && { WarmCount: input.WarmCount }),
    ...(input.WarmEnabled !== undefined && input.WarmEnabled !== null && { WarmEnabled: input.WarmEnabled }),
    ...(input.WarmType !== undefined && input.WarmType !== null && { WarmType: input.WarmType }),
    ...(input.ZoneAwarenessConfig !== undefined &&
      input.ZoneAwarenessConfig !== null && {
        ZoneAwarenessConfig: serializeAws_restJson1ZoneAwarenessConfig(input.ZoneAwarenessConfig, context),
      }),
    ...(input.ZoneAwarenessEnabled !== undefined &&
      input.ZoneAwarenessEnabled !== null && { ZoneAwarenessEnabled: input.ZoneAwarenessEnabled }),
  };
};

const serializeAws_restJson1EncryptionAtRestOptions = (
  input: EncryptionAtRestOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
  };
};

const serializeAws_restJson1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_restJson1ValueStringList(input.Values, context) }),
  };
};

const serializeAws_restJson1FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Filter(entry, context);
    });
};

const serializeAws_restJson1LogPublishingOption = (input: LogPublishingOption, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogsLogGroupArn !== undefined &&
      input.CloudWatchLogsLogGroupArn !== null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1LogPublishingOptions = (
  input: { [key: string]: LogPublishingOption },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [LogType | string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1LogPublishingOption(value, context),
    };
  }, {});
};

const serializeAws_restJson1MasterUserOptions = (input: MasterUserOptions, context: __SerdeContext): any => {
  return {
    ...(input.MasterUserARN !== undefined && input.MasterUserARN !== null && { MasterUserARN: input.MasterUserARN }),
    ...(input.MasterUserName !== undefined &&
      input.MasterUserName !== null && { MasterUserName: input.MasterUserName }),
    ...(input.MasterUserPassword !== undefined &&
      input.MasterUserPassword !== null && { MasterUserPassword: input.MasterUserPassword }),
  };
};

const serializeAws_restJson1NodeToNodeEncryptionOptions = (
  input: NodeToNodeEncryptionOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1PackageSource = (input: PackageSource, context: __SerdeContext): any => {
  return {
    ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
    ...(input.S3Key !== undefined && input.S3Key !== null && { S3Key: input.S3Key }),
  };
};

const serializeAws_restJson1SAMLIdp = (input: SAMLIdp, context: __SerdeContext): any => {
  return {
    ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
    ...(input.MetadataContent !== undefined &&
      input.MetadataContent !== null && { MetadataContent: input.MetadataContent }),
  };
};

const serializeAws_restJson1SAMLOptionsInput = (input: SAMLOptionsInput, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.Idp !== undefined && input.Idp !== null && { Idp: serializeAws_restJson1SAMLIdp(input.Idp, context) }),
    ...(input.MasterBackendRole !== undefined &&
      input.MasterBackendRole !== null && { MasterBackendRole: input.MasterBackendRole }),
    ...(input.MasterUserName !== undefined &&
      input.MasterUserName !== null && { MasterUserName: input.MasterUserName }),
    ...(input.RolesKey !== undefined && input.RolesKey !== null && { RolesKey: input.RolesKey }),
    ...(input.SessionTimeoutMinutes !== undefined &&
      input.SessionTimeoutMinutes !== null && { SessionTimeoutMinutes: input.SessionTimeoutMinutes }),
    ...(input.SubjectKey !== undefined && input.SubjectKey !== null && { SubjectKey: input.SubjectKey }),
  };
};

const serializeAws_restJson1SnapshotOptions = (input: SnapshotOptions, context: __SerdeContext): any => {
  return {
    ...(input.AutomatedSnapshotStartHour !== undefined &&
      input.AutomatedSnapshotStartHour !== null && { AutomatedSnapshotStartHour: input.AutomatedSnapshotStartHour }),
  };
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1ValueStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1VPCOptions = (input: VPCOptions, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1StringList(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1StringList(input.SubnetIds, context) }),
  };
};

const serializeAws_restJson1ZoneAwarenessConfig = (input: ZoneAwarenessConfig, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZoneCount !== undefined &&
      input.AvailabilityZoneCount !== null && { AvailabilityZoneCount: input.AvailabilityZoneCount }),
  };
};

const deserializeAws_restJson1AccessPoliciesStatus = (output: any, context: __SerdeContext): AccessPoliciesStatus => {
  return {
    Options: __expectString(output.Options),
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AdditionalLimit = (output: any, context: __SerdeContext): AdditionalLimit => {
  return {
    LimitName: __expectString(output.LimitName),
    LimitValues:
      output.LimitValues !== undefined && output.LimitValues !== null
        ? deserializeAws_restJson1LimitValueList(output.LimitValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AdditionalLimitList = (output: any, context: __SerdeContext): AdditionalLimit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AdditionalLimit(entry, context);
    });
};

const deserializeAws_restJson1AdvancedOptions = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1AdvancedOptionsStatus = (output: any, context: __SerdeContext): AdvancedOptionsStatus => {
  return {
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1AdvancedOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AdvancedSecurityOptions = (
  output: any,
  context: __SerdeContext
): AdvancedSecurityOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    InternalUserDatabaseEnabled: __expectBoolean(output.InternalUserDatabaseEnabled),
    SAMLOptions:
      output.SAMLOptions !== undefined && output.SAMLOptions !== null
        ? deserializeAws_restJson1SAMLOptionsOutput(output.SAMLOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AdvancedSecurityOptionsStatus = (
  output: any,
  context: __SerdeContext
): AdvancedSecurityOptionsStatus => {
  return {
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1AdvancedSecurityOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AutoTune = (output: any, context: __SerdeContext): AutoTune => {
  return {
    AutoTuneDetails:
      output.AutoTuneDetails !== undefined && output.AutoTuneDetails !== null
        ? deserializeAws_restJson1AutoTuneDetails(output.AutoTuneDetails, context)
        : undefined,
    AutoTuneType: __expectString(output.AutoTuneType),
  } as any;
};

const deserializeAws_restJson1AutoTuneDetails = (output: any, context: __SerdeContext): AutoTuneDetails => {
  return {
    ScheduledAutoTuneDetails:
      output.ScheduledAutoTuneDetails !== undefined && output.ScheduledAutoTuneDetails !== null
        ? deserializeAws_restJson1ScheduledAutoTuneDetails(output.ScheduledAutoTuneDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AutoTuneList = (output: any, context: __SerdeContext): AutoTune[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AutoTune(entry, context);
    });
};

const deserializeAws_restJson1AutoTuneMaintenanceSchedule = (
  output: any,
  context: __SerdeContext
): AutoTuneMaintenanceSchedule => {
  return {
    CronExpressionForRecurrence: __expectString(output.CronExpressionForRecurrence),
    Duration:
      output.Duration !== undefined && output.Duration !== null
        ? deserializeAws_restJson1Duration(output.Duration, context)
        : undefined,
    StartAt:
      output.StartAt !== undefined && output.StartAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartAt)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1AutoTuneMaintenanceScheduleList = (
  output: any,
  context: __SerdeContext
): AutoTuneMaintenanceSchedule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AutoTuneMaintenanceSchedule(entry, context);
    });
};

const deserializeAws_restJson1AutoTuneOptions = (output: any, context: __SerdeContext): AutoTuneOptions => {
  return {
    DesiredState: __expectString(output.DesiredState),
    MaintenanceSchedules:
      output.MaintenanceSchedules !== undefined && output.MaintenanceSchedules !== null
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
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1AutoTuneOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1AutoTuneStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AutoTuneStatus = (output: any, context: __SerdeContext): AutoTuneStatus => {
  return {
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    PendingDeletion: __expectBoolean(output.PendingDeletion),
    State: __expectString(output.State),
    UpdateDate:
      output.UpdateDate !== undefined && output.UpdateDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateDate)))
        : undefined,
    UpdateVersion: __expectInt32(output.UpdateVersion),
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
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1CognitoOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ColdStorageOptions = (output: any, context: __SerdeContext): ColdStorageOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1CompatibleElasticsearchVersionsList = (
  output: any,
  context: __SerdeContext
): CompatibleVersionsMap[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CompatibleVersionsMap(entry, context);
    });
};

const deserializeAws_restJson1CompatibleVersionsMap = (output: any, context: __SerdeContext): CompatibleVersionsMap => {
  return {
    SourceVersion: __expectString(output.SourceVersion),
    TargetVersions:
      output.TargetVersions !== undefined && output.TargetVersions !== null
        ? deserializeAws_restJson1ElasticsearchVersionList(output.TargetVersions, context)
        : undefined,
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
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1DomainEndpointOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DomainInfo = (output: any, context: __SerdeContext): DomainInfo => {
  return {
    DomainName: __expectString(output.DomainName),
    EngineType: __expectString(output.EngineType),
  } as any;
};

const deserializeAws_restJson1DomainInfoList = (output: any, context: __SerdeContext): DomainInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainInfo(entry, context);
    });
};

const deserializeAws_restJson1DomainInformation = (output: any, context: __SerdeContext): DomainInformation => {
  return {
    DomainName: __expectString(output.DomainName),
    OwnerId: __expectString(output.OwnerId),
    Region: __expectString(output.Region),
  } as any;
};

const deserializeAws_restJson1DomainPackageDetails = (output: any, context: __SerdeContext): DomainPackageDetails => {
  return {
    DomainName: __expectString(output.DomainName),
    DomainPackageStatus: __expectString(output.DomainPackageStatus),
    ErrorDetails:
      output.ErrorDetails !== undefined && output.ErrorDetails !== null
        ? deserializeAws_restJson1ErrorDetails(output.ErrorDetails, context)
        : undefined,
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainPackageDetails(entry, context);
    });
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
    VolumeSize: __expectInt32(output.VolumeSize),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

const deserializeAws_restJson1EBSOptionsStatus = (output: any, context: __SerdeContext): EBSOptionsStatus => {
  return {
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1EBSOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ElasticsearchClusterConfig = (
  output: any,
  context: __SerdeContext
): ElasticsearchClusterConfig => {
  return {
    ColdStorageOptions:
      output.ColdStorageOptions !== undefined && output.ColdStorageOptions !== null
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
      output.ZoneAwarenessConfig !== undefined && output.ZoneAwarenessConfig !== null
        ? deserializeAws_restJson1ZoneAwarenessConfig(output.ZoneAwarenessConfig, context)
        : undefined,
    ZoneAwarenessEnabled: __expectBoolean(output.ZoneAwarenessEnabled),
  } as any;
};

const deserializeAws_restJson1ElasticsearchClusterConfigStatus = (
  output: any,
  context: __SerdeContext
): ElasticsearchClusterConfigStatus => {
  return {
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1ElasticsearchClusterConfig(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ElasticsearchDomainConfig = (
  output: any,
  context: __SerdeContext
): ElasticsearchDomainConfig => {
  return {
    AccessPolicies:
      output.AccessPolicies !== undefined && output.AccessPolicies !== null
        ? deserializeAws_restJson1AccessPoliciesStatus(output.AccessPolicies, context)
        : undefined,
    AdvancedOptions:
      output.AdvancedOptions !== undefined && output.AdvancedOptions !== null
        ? deserializeAws_restJson1AdvancedOptionsStatus(output.AdvancedOptions, context)
        : undefined,
    AdvancedSecurityOptions:
      output.AdvancedSecurityOptions !== undefined && output.AdvancedSecurityOptions !== null
        ? deserializeAws_restJson1AdvancedSecurityOptionsStatus(output.AdvancedSecurityOptions, context)
        : undefined,
    AutoTuneOptions:
      output.AutoTuneOptions !== undefined && output.AutoTuneOptions !== null
        ? deserializeAws_restJson1AutoTuneOptionsStatus(output.AutoTuneOptions, context)
        : undefined,
    CognitoOptions:
      output.CognitoOptions !== undefined && output.CognitoOptions !== null
        ? deserializeAws_restJson1CognitoOptionsStatus(output.CognitoOptions, context)
        : undefined,
    DomainEndpointOptions:
      output.DomainEndpointOptions !== undefined && output.DomainEndpointOptions !== null
        ? deserializeAws_restJson1DomainEndpointOptionsStatus(output.DomainEndpointOptions, context)
        : undefined,
    EBSOptions:
      output.EBSOptions !== undefined && output.EBSOptions !== null
        ? deserializeAws_restJson1EBSOptionsStatus(output.EBSOptions, context)
        : undefined,
    ElasticsearchClusterConfig:
      output.ElasticsearchClusterConfig !== undefined && output.ElasticsearchClusterConfig !== null
        ? deserializeAws_restJson1ElasticsearchClusterConfigStatus(output.ElasticsearchClusterConfig, context)
        : undefined,
    ElasticsearchVersion:
      output.ElasticsearchVersion !== undefined && output.ElasticsearchVersion !== null
        ? deserializeAws_restJson1ElasticsearchVersionStatus(output.ElasticsearchVersion, context)
        : undefined,
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions !== undefined && output.EncryptionAtRestOptions !== null
        ? deserializeAws_restJson1EncryptionAtRestOptionsStatus(output.EncryptionAtRestOptions, context)
        : undefined,
    LogPublishingOptions:
      output.LogPublishingOptions !== undefined && output.LogPublishingOptions !== null
        ? deserializeAws_restJson1LogPublishingOptionsStatus(output.LogPublishingOptions, context)
        : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions !== undefined && output.NodeToNodeEncryptionOptions !== null
        ? deserializeAws_restJson1NodeToNodeEncryptionOptionsStatus(output.NodeToNodeEncryptionOptions, context)
        : undefined,
    SnapshotOptions:
      output.SnapshotOptions !== undefined && output.SnapshotOptions !== null
        ? deserializeAws_restJson1SnapshotOptionsStatus(output.SnapshotOptions, context)
        : undefined,
    VPCOptions:
      output.VPCOptions !== undefined && output.VPCOptions !== null
        ? deserializeAws_restJson1VPCDerivedInfoStatus(output.VPCOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ElasticsearchDomainStatus = (
  output: any,
  context: __SerdeContext
): ElasticsearchDomainStatus => {
  return {
    ARN: __expectString(output.ARN),
    AccessPolicies: __expectString(output.AccessPolicies),
    AdvancedOptions:
      output.AdvancedOptions !== undefined && output.AdvancedOptions !== null
        ? deserializeAws_restJson1AdvancedOptions(output.AdvancedOptions, context)
        : undefined,
    AdvancedSecurityOptions:
      output.AdvancedSecurityOptions !== undefined && output.AdvancedSecurityOptions !== null
        ? deserializeAws_restJson1AdvancedSecurityOptions(output.AdvancedSecurityOptions, context)
        : undefined,
    AutoTuneOptions:
      output.AutoTuneOptions !== undefined && output.AutoTuneOptions !== null
        ? deserializeAws_restJson1AutoTuneOptionsOutput(output.AutoTuneOptions, context)
        : undefined,
    CognitoOptions:
      output.CognitoOptions !== undefined && output.CognitoOptions !== null
        ? deserializeAws_restJson1CognitoOptions(output.CognitoOptions, context)
        : undefined,
    Created: __expectBoolean(output.Created),
    Deleted: __expectBoolean(output.Deleted),
    DomainEndpointOptions:
      output.DomainEndpointOptions !== undefined && output.DomainEndpointOptions !== null
        ? deserializeAws_restJson1DomainEndpointOptions(output.DomainEndpointOptions, context)
        : undefined,
    DomainId: __expectString(output.DomainId),
    DomainName: __expectString(output.DomainName),
    EBSOptions:
      output.EBSOptions !== undefined && output.EBSOptions !== null
        ? deserializeAws_restJson1EBSOptions(output.EBSOptions, context)
        : undefined,
    ElasticsearchClusterConfig:
      output.ElasticsearchClusterConfig !== undefined && output.ElasticsearchClusterConfig !== null
        ? deserializeAws_restJson1ElasticsearchClusterConfig(output.ElasticsearchClusterConfig, context)
        : undefined,
    ElasticsearchVersion: __expectString(output.ElasticsearchVersion),
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions !== undefined && output.EncryptionAtRestOptions !== null
        ? deserializeAws_restJson1EncryptionAtRestOptions(output.EncryptionAtRestOptions, context)
        : undefined,
    Endpoint: __expectString(output.Endpoint),
    Endpoints:
      output.Endpoints !== undefined && output.Endpoints !== null
        ? deserializeAws_restJson1EndpointsMap(output.Endpoints, context)
        : undefined,
    LogPublishingOptions:
      output.LogPublishingOptions !== undefined && output.LogPublishingOptions !== null
        ? deserializeAws_restJson1LogPublishingOptions(output.LogPublishingOptions, context)
        : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions !== undefined && output.NodeToNodeEncryptionOptions !== null
        ? deserializeAws_restJson1NodeToNodeEncryptionOptions(output.NodeToNodeEncryptionOptions, context)
        : undefined,
    Processing: __expectBoolean(output.Processing),
    ServiceSoftwareOptions:
      output.ServiceSoftwareOptions !== undefined && output.ServiceSoftwareOptions !== null
        ? deserializeAws_restJson1ServiceSoftwareOptions(output.ServiceSoftwareOptions, context)
        : undefined,
    SnapshotOptions:
      output.SnapshotOptions !== undefined && output.SnapshotOptions !== null
        ? deserializeAws_restJson1SnapshotOptions(output.SnapshotOptions, context)
        : undefined,
    UpgradeProcessing: __expectBoolean(output.UpgradeProcessing),
    VPCOptions:
      output.VPCOptions !== undefined && output.VPCOptions !== null
        ? deserializeAws_restJson1VPCDerivedInfo(output.VPCOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ElasticsearchDomainStatusList = (
  output: any,
  context: __SerdeContext
): ElasticsearchDomainStatus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ElasticsearchDomainStatus(entry, context);
    });
};

const deserializeAws_restJson1ElasticsearchInstanceTypeList = (
  output: any,
  context: __SerdeContext
): (ESPartitionInstanceType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ElasticsearchVersionList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ElasticsearchVersionStatus = (
  output: any,
  context: __SerdeContext
): ElasticsearchVersionStatus => {
  return {
    Options: __expectString(output.Options),
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined,
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
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1EncryptionAtRestOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    ErrorType: __expectString(output.ErrorType),
  } as any;
};

const deserializeAws_restJson1InboundCrossClusterSearchConnection = (
  output: any,
  context: __SerdeContext
): InboundCrossClusterSearchConnection => {
  return {
    ConnectionStatus:
      output.ConnectionStatus !== undefined && output.ConnectionStatus !== null
        ? deserializeAws_restJson1InboundCrossClusterSearchConnectionStatus(output.ConnectionStatus, context)
        : undefined,
    CrossClusterSearchConnectionId: __expectString(output.CrossClusterSearchConnectionId),
    DestinationDomainInfo:
      output.DestinationDomainInfo !== undefined && output.DestinationDomainInfo !== null
        ? deserializeAws_restJson1DomainInformation(output.DestinationDomainInfo, context)
        : undefined,
    SourceDomainInfo:
      output.SourceDomainInfo !== undefined && output.SourceDomainInfo !== null
        ? deserializeAws_restJson1DomainInformation(output.SourceDomainInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InboundCrossClusterSearchConnections = (
  output: any,
  context: __SerdeContext
): InboundCrossClusterSearchConnection[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InboundCrossClusterSearchConnection(entry, context);
    });
};

const deserializeAws_restJson1InboundCrossClusterSearchConnectionStatus = (
  output: any,
  context: __SerdeContext
): InboundCrossClusterSearchConnectionStatus => {
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
      output.InstanceCountLimits !== undefined && output.InstanceCountLimits !== null
        ? deserializeAws_restJson1InstanceCountLimits(output.InstanceCountLimits, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Issues = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Limits = (output: any, context: __SerdeContext): Limits => {
  return {
    AdditionalLimits:
      output.AdditionalLimits !== undefined && output.AdditionalLimits !== null
        ? deserializeAws_restJson1AdditionalLimitList(output.AdditionalLimits, context)
        : undefined,
    InstanceLimits:
      output.InstanceLimits !== undefined && output.InstanceLimits !== null
        ? deserializeAws_restJson1InstanceLimits(output.InstanceLimits, context)
        : undefined,
    StorageTypes:
      output.StorageTypes !== undefined && output.StorageTypes !== null
        ? deserializeAws_restJson1StorageTypeList(output.StorageTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LimitsByRole = (output: any, context: __SerdeContext): { [key: string]: Limits } => {
  return Object.entries(output).reduce((acc: { [key: string]: Limits }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1Limits(value, context),
    };
  }, {});
};

const deserializeAws_restJson1LimitValueList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
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
): { [key: string]: LogPublishingOption } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: LogPublishingOption }, [key, value]: [LogType | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_restJson1LogPublishingOption(value, context),
      };
    },
    {}
  );
};

const deserializeAws_restJson1LogPublishingOptionsStatus = (
  output: any,
  context: __SerdeContext
): LogPublishingOptionsStatus => {
  return {
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1LogPublishingOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined,
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
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1NodeToNodeEncryptionOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OptionStatus = (output: any, context: __SerdeContext): OptionStatus => {
  return {
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    PendingDeletion: __expectBoolean(output.PendingDeletion),
    State: __expectString(output.State),
    UpdateDate:
      output.UpdateDate !== undefined && output.UpdateDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateDate)))
        : undefined,
    UpdateVersion: __expectInt32(output.UpdateVersion),
  } as any;
};

const deserializeAws_restJson1OutboundCrossClusterSearchConnection = (
  output: any,
  context: __SerdeContext
): OutboundCrossClusterSearchConnection => {
  return {
    ConnectionAlias: __expectString(output.ConnectionAlias),
    ConnectionStatus:
      output.ConnectionStatus !== undefined && output.ConnectionStatus !== null
        ? deserializeAws_restJson1OutboundCrossClusterSearchConnectionStatus(output.ConnectionStatus, context)
        : undefined,
    CrossClusterSearchConnectionId: __expectString(output.CrossClusterSearchConnectionId),
    DestinationDomainInfo:
      output.DestinationDomainInfo !== undefined && output.DestinationDomainInfo !== null
        ? deserializeAws_restJson1DomainInformation(output.DestinationDomainInfo, context)
        : undefined,
    SourceDomainInfo:
      output.SourceDomainInfo !== undefined && output.SourceDomainInfo !== null
        ? deserializeAws_restJson1DomainInformation(output.SourceDomainInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OutboundCrossClusterSearchConnections = (
  output: any,
  context: __SerdeContext
): OutboundCrossClusterSearchConnection[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OutboundCrossClusterSearchConnection(entry, context);
    });
};

const deserializeAws_restJson1OutboundCrossClusterSearchConnectionStatus = (
  output: any,
  context: __SerdeContext
): OutboundCrossClusterSearchConnectionStatus => {
  return {
    Message: __expectString(output.Message),
    StatusCode: __expectString(output.StatusCode),
  } as any;
};

const deserializeAws_restJson1PackageDetails = (output: any, context: __SerdeContext): PackageDetails => {
  return {
    AvailablePackageVersion: __expectString(output.AvailablePackageVersion),
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    ErrorDetails:
      output.ErrorDetails !== undefined && output.ErrorDetails !== null
        ? deserializeAws_restJson1ErrorDetails(output.ErrorDetails, context)
        : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PackageDetails(entry, context);
    });
};

const deserializeAws_restJson1PackageVersionHistory = (output: any, context: __SerdeContext): PackageVersionHistory => {
  return {
    CommitMessage: __expectString(output.CommitMessage),
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    PackageVersion: __expectString(output.PackageVersion),
  } as any;
};

const deserializeAws_restJson1PackageVersionHistoryList = (
  output: any,
  context: __SerdeContext
): PackageVersionHistory[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PackageVersionHistory(entry, context);
    });
};

const deserializeAws_restJson1RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  return {
    RecurringChargeAmount: __limitedParseDouble(output.RecurringChargeAmount),
    RecurringChargeFrequency: __expectString(output.RecurringChargeFrequency),
  } as any;
};

const deserializeAws_restJson1RecurringChargeList = (output: any, context: __SerdeContext): RecurringCharge[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecurringCharge(entry, context);
    });
};

const deserializeAws_restJson1ReservedElasticsearchInstance = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstance => {
  return {
    CurrencyCode: __expectString(output.CurrencyCode),
    Duration: __expectInt32(output.Duration),
    ElasticsearchInstanceCount: __expectInt32(output.ElasticsearchInstanceCount),
    ElasticsearchInstanceType: __expectString(output.ElasticsearchInstanceType),
    FixedPrice: __limitedParseDouble(output.FixedPrice),
    PaymentOption: __expectString(output.PaymentOption),
    RecurringCharges:
      output.RecurringCharges !== undefined && output.RecurringCharges !== null
        ? deserializeAws_restJson1RecurringChargeList(output.RecurringCharges, context)
        : undefined,
    ReservationName: __expectString(output.ReservationName),
    ReservedElasticsearchInstanceId: __expectString(output.ReservedElasticsearchInstanceId),
    ReservedElasticsearchInstanceOfferingId: __expectString(output.ReservedElasticsearchInstanceOfferingId),
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime)))
        : undefined,
    State: __expectString(output.State),
    UsagePrice: __limitedParseDouble(output.UsagePrice),
  } as any;
};

const deserializeAws_restJson1ReservedElasticsearchInstanceList = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReservedElasticsearchInstance(entry, context);
    });
};

const deserializeAws_restJson1ReservedElasticsearchInstanceOffering = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstanceOffering => {
  return {
    CurrencyCode: __expectString(output.CurrencyCode),
    Duration: __expectInt32(output.Duration),
    ElasticsearchInstanceType: __expectString(output.ElasticsearchInstanceType),
    FixedPrice: __limitedParseDouble(output.FixedPrice),
    PaymentOption: __expectString(output.PaymentOption),
    RecurringCharges:
      output.RecurringCharges !== undefined && output.RecurringCharges !== null
        ? deserializeAws_restJson1RecurringChargeList(output.RecurringCharges, context)
        : undefined,
    ReservedElasticsearchInstanceOfferingId: __expectString(output.ReservedElasticsearchInstanceOfferingId),
    UsagePrice: __limitedParseDouble(output.UsagePrice),
  } as any;
};

const deserializeAws_restJson1ReservedElasticsearchInstanceOfferingList = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstanceOffering[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReservedElasticsearchInstanceOffering(entry, context);
    });
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
    Idp:
      output.Idp !== undefined && output.Idp !== null
        ? deserializeAws_restJson1SAMLIdp(output.Idp, context)
        : undefined,
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
    Date:
      output.Date !== undefined && output.Date !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Date)))
        : undefined,
    Severity: __expectString(output.Severity),
  } as any;
};

const deserializeAws_restJson1ServiceSoftwareOptions = (
  output: any,
  context: __SerdeContext
): ServiceSoftwareOptions => {
  return {
    AutomatedUpdateDate:
      output.AutomatedUpdateDate !== undefined && output.AutomatedUpdateDate !== null
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
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1SnapshotOptions(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StorageType = (output: any, context: __SerdeContext): StorageType => {
  return {
    StorageSubTypeName: __expectString(output.StorageSubTypeName),
    StorageTypeLimits:
      output.StorageTypeLimits !== undefined && output.StorageTypeLimits !== null
        ? deserializeAws_restJson1StorageTypeLimitList(output.StorageTypeLimits, context)
        : undefined,
    StorageTypeName: __expectString(output.StorageTypeName),
  } as any;
};

const deserializeAws_restJson1StorageTypeLimit = (output: any, context: __SerdeContext): StorageTypeLimit => {
  return {
    LimitName: __expectString(output.LimitName),
    LimitValues:
      output.LimitValues !== undefined && output.LimitValues !== null
        ? deserializeAws_restJson1LimitValueList(output.LimitValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StorageTypeLimitList = (output: any, context: __SerdeContext): StorageTypeLimit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StorageTypeLimit(entry, context);
    });
};

const deserializeAws_restJson1StorageTypeList = (output: any, context: __SerdeContext): StorageType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StorageType(entry, context);
    });
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1UpgradeHistory = (output: any, context: __SerdeContext): UpgradeHistory => {
  return {
    StartTimestamp:
      output.StartTimestamp !== undefined && output.StartTimestamp !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTimestamp)))
        : undefined,
    StepsList:
      output.StepsList !== undefined && output.StepsList !== null
        ? deserializeAws_restJson1UpgradeStepsList(output.StepsList, context)
        : undefined,
    UpgradeName: __expectString(output.UpgradeName),
    UpgradeStatus: __expectString(output.UpgradeStatus),
  } as any;
};

const deserializeAws_restJson1UpgradeHistoryList = (output: any, context: __SerdeContext): UpgradeHistory[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UpgradeHistory(entry, context);
    });
};

const deserializeAws_restJson1UpgradeStepItem = (output: any, context: __SerdeContext): UpgradeStepItem => {
  return {
    Issues:
      output.Issues !== undefined && output.Issues !== null
        ? deserializeAws_restJson1Issues(output.Issues, context)
        : undefined,
    ProgressPercent: __limitedParseDouble(output.ProgressPercent),
    UpgradeStep: __expectString(output.UpgradeStep),
    UpgradeStepStatus: __expectString(output.UpgradeStepStatus),
  } as any;
};

const deserializeAws_restJson1UpgradeStepsList = (output: any, context: __SerdeContext): UpgradeStepItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UpgradeStepItem(entry, context);
    });
};

const deserializeAws_restJson1VPCDerivedInfo = (output: any, context: __SerdeContext): VPCDerivedInfo => {
  return {
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
        : undefined,
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_restJson1StringList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_restJson1StringList(output.SubnetIds, context)
        : undefined,
    VPCId: __expectString(output.VPCId),
  } as any;
};

const deserializeAws_restJson1VPCDerivedInfoStatus = (output: any, context: __SerdeContext): VPCDerivedInfoStatus => {
  return {
    Options:
      output.Options !== undefined && output.Options !== null
        ? deserializeAws_restJson1VPCDerivedInfo(output.Options, context)
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_restJson1OptionStatus(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ZoneAwarenessConfig = (output: any, context: __SerdeContext): ZoneAwarenessConfig => {
  return {
    AvailabilityZoneCount: __expectInt32(output.AvailabilityZoneCount),
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
