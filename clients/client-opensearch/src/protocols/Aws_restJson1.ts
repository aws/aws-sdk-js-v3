// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
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
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AcceptInboundConnectionCommandInput,
  AcceptInboundConnectionCommandOutput,
} from "../commands/AcceptInboundConnectionCommand";
import { AddDataSourceCommandInput, AddDataSourceCommandOutput } from "../commands/AddDataSourceCommand";
import {
  AddDirectQueryDataSourceCommandInput,
  AddDirectQueryDataSourceCommandOutput,
} from "../commands/AddDirectQueryDataSourceCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import { AssociatePackageCommandInput, AssociatePackageCommandOutput } from "../commands/AssociatePackageCommand";
import { AssociatePackagesCommandInput, AssociatePackagesCommandOutput } from "../commands/AssociatePackagesCommand";
import {
  AuthorizeVpcEndpointAccessCommandInput,
  AuthorizeVpcEndpointAccessCommandOutput,
} from "../commands/AuthorizeVpcEndpointAccessCommand";
import {
  CancelDomainConfigChangeCommandInput,
  CancelDomainConfigChangeCommandOutput,
} from "../commands/CancelDomainConfigChangeCommand";
import {
  CancelServiceSoftwareUpdateCommandInput,
  CancelServiceSoftwareUpdateCommandOutput,
} from "../commands/CancelServiceSoftwareUpdateCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import {
  CreateOutboundConnectionCommandInput,
  CreateOutboundConnectionCommandOutput,
} from "../commands/CreateOutboundConnectionCommand";
import { CreatePackageCommandInput, CreatePackageCommandOutput } from "../commands/CreatePackageCommand";
import { CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput } from "../commands/CreateVpcEndpointCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
import {
  DeleteDirectQueryDataSourceCommandInput,
  DeleteDirectQueryDataSourceCommandOutput,
} from "../commands/DeleteDirectQueryDataSourceCommand";
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
import {
  DescribeDomainHealthCommandInput,
  DescribeDomainHealthCommandOutput,
} from "../commands/DescribeDomainHealthCommand";
import {
  DescribeDomainNodesCommandInput,
  DescribeDomainNodesCommandOutput,
} from "../commands/DescribeDomainNodesCommand";
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
import { DissociatePackagesCommandInput, DissociatePackagesCommandOutput } from "../commands/DissociatePackagesCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "../commands/GetApplicationCommand";
import {
  GetCompatibleVersionsCommandInput,
  GetCompatibleVersionsCommandOutput,
} from "../commands/GetCompatibleVersionsCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "../commands/GetDataSourceCommand";
import {
  GetDirectQueryDataSourceCommandInput,
  GetDirectQueryDataSourceCommandOutput,
} from "../commands/GetDirectQueryDataSourceCommand";
import {
  GetDomainMaintenanceStatusCommandInput,
  GetDomainMaintenanceStatusCommandOutput,
} from "../commands/GetDomainMaintenanceStatusCommand";
import {
  GetPackageVersionHistoryCommandInput,
  GetPackageVersionHistoryCommandOutput,
} from "../commands/GetPackageVersionHistoryCommand";
import { GetUpgradeHistoryCommandInput, GetUpgradeHistoryCommandOutput } from "../commands/GetUpgradeHistoryCommand";
import { GetUpgradeStatusCommandInput, GetUpgradeStatusCommandOutput } from "../commands/GetUpgradeStatusCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "../commands/ListDataSourcesCommand";
import {
  ListDirectQueryDataSourcesCommandInput,
  ListDirectQueryDataSourcesCommandOutput,
} from "../commands/ListDirectQueryDataSourcesCommand";
import {
  ListDomainMaintenancesCommandInput,
  ListDomainMaintenancesCommandOutput,
} from "../commands/ListDomainMaintenancesCommand";
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
  StartDomainMaintenanceCommandInput,
  StartDomainMaintenanceCommandOutput,
} from "../commands/StartDomainMaintenanceCommand";
import {
  StartServiceSoftwareUpdateCommandInput,
  StartServiceSoftwareUpdateCommandOutput,
} from "../commands/StartServiceSoftwareUpdateCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "../commands/UpdateDataSourceCommand";
import {
  UpdateDirectQueryDataSourceCommandInput,
  UpdateDirectQueryDataSourceCommandOutput,
} from "../commands/UpdateDirectQueryDataSourceCommand";
import { UpdateDomainConfigCommandInput, UpdateDomainConfigCommandOutput } from "../commands/UpdateDomainConfigCommand";
import { UpdatePackageCommandInput, UpdatePackageCommandOutput } from "../commands/UpdatePackageCommand";
import { UpdatePackageScopeCommandInput, UpdatePackageScopeCommandOutput } from "../commands/UpdatePackageScopeCommand";
import {
  UpdateScheduledActionCommandInput,
  UpdateScheduledActionCommandOutput,
} from "../commands/UpdateScheduledActionCommand";
import { UpdateVpcEndpointCommandInput, UpdateVpcEndpointCommandOutput } from "../commands/UpdateVpcEndpointCommand";
import { UpgradeDomainCommandInput, UpgradeDomainCommandOutput } from "../commands/UpgradeDomainCommand";
import {
  AccessDeniedException,
  AccessPoliciesStatus,
  AdvancedOptionsStatus,
  AdvancedSecurityOptions,
  AdvancedSecurityOptionsInput,
  AdvancedSecurityOptionsStatus,
  AIMLOptionsInput,
  AIMLOptionsStatus,
  AppConfig,
  ApplicationSummary,
  AutoTune,
  AutoTuneDetails,
  AutoTuneMaintenanceSchedule,
  AutoTuneOptions,
  AutoTuneOptionsInput,
  AutoTuneOptionsStatus,
  AutoTuneStatus,
  AWSDomainInformation,
  BaseException,
  ChangeProgressDetails,
  ChangeProgressStage,
  ChangeProgressStatusDetails,
  CloudWatchDirectQueryDataSource,
  ClusterConfig,
  ClusterConfigStatus,
  CognitoOptions,
  CognitoOptionsStatus,
  ColdStorageOptions,
  ConflictException,
  ConnectionProperties,
  CrossClusterSearchConnectionProperties,
  DataSource,
  DataSourceType,
  DependencyFailureException,
  DescribePackagesFilter,
  DirectQueryDataSourceType,
  DisabledOperationException,
  DomainConfig,
  DomainEndpointOptions,
  DomainEndpointOptionsStatus,
  DomainInformationContainer,
  DomainMaintenanceDetails,
  DomainPackageDetails,
  DomainStatus,
  Duration,
  EBSOptions,
  EBSOptionsStatus,
  EncryptionAtRestOptions,
  EncryptionAtRestOptionsStatus,
  Filter,
  IamIdentityCenterOptionsInput,
  IdentityCenterOptionsInput,
  IdentityCenterOptionsStatus,
  InternalException,
  InvalidPaginationTokenException,
  InvalidTypeException,
  IPAddressTypeStatus,
  JWTOptionsInput,
  KeyStoreAccessOption,
  LimitExceededException,
  LogPublishingOption,
  LogPublishingOptionsStatus,
  LogType,
  MasterUserOptions,
  NaturalLanguageQueryGenerationOptionsInput,
  NodeConfig,
  NodeOption,
  NodeToNodeEncryptionOptions,
  NodeToNodeEncryptionOptionsStatus,
  OffPeakWindow,
  OffPeakWindowOptions,
  OffPeakWindowOptionsStatus,
  OptionStatus,
  PackageAssociationConfiguration,
  PackageConfiguration,
  PackageDetails,
  PackageDetailsForAssociation,
  PackageEncryptionOptions,
  PackageSource,
  PackageVendingOptions,
  PackageVersionHistory,
  RecurringCharge,
  ReservedInstance,
  ReservedInstanceOffering,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  S3GlueDataCatalog,
  S3VectorsEngine,
  SAMLIdp,
  SAMLOptionsInput,
  ScheduledAutoTuneDetails,
  SecurityLakeDirectQueryDataSource,
  ServiceSoftwareOptions,
  SnapshotOptions,
  SnapshotOptionsStatus,
  SoftwareUpdateOptions,
  SoftwareUpdateOptionsStatus,
  Tag,
  UpgradeHistory,
  UpgradeStepItem,
  ValidationException,
  VersionStatus,
  VPCDerivedInfoStatus,
  VPCOptions,
  WindowStartTime,
  ZoneAwarenessConfig,
} from "../models/models_0";
import { SlotNotAvailableException } from "../models/models_1";
import { OpenSearchServiceException as __BaseException } from "../models/OpenSearchServiceException";

/**
 * serializeAws_restJson1AcceptInboundConnectionCommand
 */
export const se_AcceptInboundConnectionCommand = async (
  input: AcceptInboundConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/accept");
  b.p("ConnectionId", () => input.ConnectionId!, "{ConnectionId}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AddDataSourceCommand
 */
export const se_AddDataSourceCommand = async (
  input: AddDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/dataSource");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DataSourceType: (_) => _json(_),
      Description: [],
      Name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AddDirectQueryDataSourceCommand
 */
export const se_AddDirectQueryDataSourceCommand = async (
  input: AddDirectQueryDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/directQueryDataSource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DataSourceName: [],
      DataSourceType: (_) => _json(_),
      Description: [],
      OpenSearchArns: (_) => _json(_),
      TagList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AddTagsCommand
 */
export const se_AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/tags");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ARN: [],
      TagList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociatePackageCommand
 */
export const se_AssociatePackageCommand = async (
  input: AssociatePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/packages/associate/{PackageID}/{DomainName}");
  b.p("PackageID", () => input.PackageID!, "{PackageID}", false);
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AssociationConfiguration: (_) => _json(_),
      PrerequisitePackageIDList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociatePackagesCommand
 */
export const se_AssociatePackagesCommand = async (
  input: AssociatePackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/packages/associateMultiple");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DomainName: [],
      PackageList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AuthorizeVpcEndpointAccessCommand
 */
export const se_AuthorizeVpcEndpointAccessCommand = async (
  input: AuthorizeVpcEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/authorizeVpcEndpointAccess");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Account: [],
      Service: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelDomainConfigChangeCommand
 */
export const se_CancelDomainConfigChangeCommand = async (
  input: CancelDomainConfigChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/config/cancel");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DryRun: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelServiceSoftwareUpdateCommand
 */
export const se_CancelServiceSoftwareUpdateCommand = async (
  input: CancelServiceSoftwareUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/serviceSoftwareUpdate/cancel");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DomainName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/application");
  let body: any;
  body = JSON.stringify(
    take(input, {
      appConfigs: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      dataSources: (_) => _json(_),
      iamIdentityCenterOptions: (_) => _json(_),
      name: [],
      tagList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/domain");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AIMLOptions: (_) => _json(_),
      AccessPolicies: [],
      AdvancedOptions: (_) => _json(_),
      AdvancedSecurityOptions: (_) => _json(_),
      AutoTuneOptions: (_) => se_AutoTuneOptionsInput(_, context),
      ClusterConfig: (_) => _json(_),
      CognitoOptions: (_) => _json(_),
      DomainEndpointOptions: (_) => _json(_),
      DomainName: [],
      EBSOptions: (_) => _json(_),
      EncryptionAtRestOptions: (_) => _json(_),
      EngineVersion: [],
      IPAddressType: [],
      IdentityCenterOptions: (_) => _json(_),
      LogPublishingOptions: (_) => _json(_),
      NodeToNodeEncryptionOptions: (_) => _json(_),
      OffPeakWindowOptions: (_) => _json(_),
      SnapshotOptions: (_) => _json(_),
      SoftwareUpdateOptions: (_) => _json(_),
      TagList: (_) => _json(_),
      VPCOptions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateOutboundConnectionCommand
 */
export const se_CreateOutboundConnectionCommand = async (
  input: CreateOutboundConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/cc/outboundConnection");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConnectionAlias: [],
      ConnectionMode: [],
      ConnectionProperties: (_) => _json(_),
      LocalDomainInfo: (_) => _json(_),
      RemoteDomainInfo: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePackageCommand
 */
export const se_CreatePackageCommand = async (
  input: CreatePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/packages");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EngineVersion: [],
      PackageConfiguration: (_) => _json(_),
      PackageDescription: [],
      PackageEncryptionOptions: (_) => _json(_),
      PackageName: [],
      PackageSource: (_) => _json(_),
      PackageType: [],
      PackageVendingOptions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateVpcEndpointCommand
 */
export const se_CreateVpcEndpointCommand = async (
  input: CreateVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/vpcEndpoints");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [],
      DomainArn: [],
      VpcOptions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/application/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataSourceCommand
 */
export const se_DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDirectQueryDataSourceCommand
 */
export const se_DeleteDirectQueryDataSourceCommand = async (
  input: DeleteDirectQueryDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/directQueryDataSource/{DataSourceName}");
  b.p("DataSourceName", () => input.DataSourceName!, "{DataSourceName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteInboundConnectionCommand
 */
export const se_DeleteInboundConnectionCommand = async (
  input: DeleteInboundConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}");
  b.p("ConnectionId", () => input.ConnectionId!, "{ConnectionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteOutboundConnectionCommand
 */
export const se_DeleteOutboundConnectionCommand = async (
  input: DeleteOutboundConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/cc/outboundConnection/{ConnectionId}");
  b.p("ConnectionId", () => input.ConnectionId!, "{ConnectionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePackageCommand
 */
export const se_DeletePackageCommand = async (
  input: DeletePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/packages/{PackageID}");
  b.p("PackageID", () => input.PackageID!, "{PackageID}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVpcEndpointCommand
 */
export const se_DeleteVpcEndpointCommand = async (
  input: DeleteVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/vpcEndpoints/{VpcEndpointId}");
  b.p("VpcEndpointId", () => input.VpcEndpointId!, "{VpcEndpointId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDomainCommand
 */
export const se_DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDomainAutoTunesCommand
 */
export const se_DescribeDomainAutoTunesCommand = async (
  input: DescribeDomainAutoTunesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/autoTunes");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDomainChangeProgressCommand
 */
export const se_DescribeDomainChangeProgressCommand = async (
  input: DescribeDomainChangeProgressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/progress");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_c]: [, input[_CI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDomainConfigCommand
 */
export const se_DescribeDomainConfigCommand = async (
  input: DescribeDomainConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/config");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDomainHealthCommand
 */
export const se_DescribeDomainHealthCommand = async (
  input: DescribeDomainHealthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/health");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDomainNodesCommand
 */
export const se_DescribeDomainNodesCommand = async (
  input: DescribeDomainNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/nodes");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDomainsCommand
 */
export const se_DescribeDomainsCommand = async (
  input: DescribeDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/domain-info");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DomainNames: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDryRunProgressCommand
 */
export const se_DescribeDryRunProgressCommand = async (
  input: DescribeDryRunProgressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/dryRun");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_dRI]: [, input[_DRI]!],
    [_lDRC]: [() => input.LoadDryRunConfig !== void 0, () => input[_LDRC]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeInboundConnectionsCommand
 */
export const se_DescribeInboundConnectionsCommand = async (
  input: DescribeInboundConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/cc/inboundConnection/search");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeInstanceTypeLimitsCommand
 */
export const se_DescribeInstanceTypeLimitsCommand = async (
  input: DescribeInstanceTypeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/instanceTypeLimits/{EngineVersion}/{InstanceType}");
  b.p("InstanceType", () => input.InstanceType!, "{InstanceType}", false);
  b.p("EngineVersion", () => input.EngineVersion!, "{EngineVersion}", false);
  const query: any = map({
    [_dN]: [, input[_DN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeOutboundConnectionsCommand
 */
export const se_DescribeOutboundConnectionsCommand = async (
  input: DescribeOutboundConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/cc/outboundConnection/search");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribePackagesCommand
 */
export const se_DescribePackagesCommand = async (
  input: DescribePackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/packages/describe");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeReservedInstanceOfferingsCommand
 */
export const se_DescribeReservedInstanceOfferingsCommand = async (
  input: DescribeReservedInstanceOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/reservedInstanceOfferings");
  const query: any = map({
    [_oI]: [, input[_RIOI]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeReservedInstancesCommand
 */
export const se_DescribeReservedInstancesCommand = async (
  input: DescribeReservedInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/reservedInstances");
  const query: any = map({
    [_rI]: [, input[_RII]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeVpcEndpointsCommand
 */
export const se_DescribeVpcEndpointsCommand = async (
  input: DescribeVpcEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/vpcEndpoints/describe");
  let body: any;
  body = JSON.stringify(
    take(input, {
      VpcEndpointIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DissociatePackageCommand
 */
export const se_DissociatePackageCommand = async (
  input: DissociatePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/packages/dissociate/{PackageID}/{DomainName}");
  b.p("PackageID", () => input.PackageID!, "{PackageID}", false);
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DissociatePackagesCommand
 */
export const se_DissociatePackagesCommand = async (
  input: DissociatePackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/packages/dissociateMultiple");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DomainName: [],
      PackageList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetApplicationCommand
 */
export const se_GetApplicationCommand = async (
  input: GetApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/application/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCompatibleVersionsCommand
 */
export const se_GetCompatibleVersionsCommand = async (
  input: GetCompatibleVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/compatibleVersions");
  const query: any = map({
    [_dN]: [, input[_DN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataSourceCommand
 */
export const se_GetDataSourceCommand = async (
  input: GetDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDirectQueryDataSourceCommand
 */
export const se_GetDirectQueryDataSourceCommand = async (
  input: GetDirectQueryDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/directQueryDataSource/{DataSourceName}");
  b.p("DataSourceName", () => input.DataSourceName!, "{DataSourceName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDomainMaintenanceStatusCommand
 */
export const se_GetDomainMaintenanceStatusCommand = async (
  input: GetDomainMaintenanceStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/domainMaintenance");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_mI]: [, __expectNonNull(input[_MI]!, `MaintenanceId`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPackageVersionHistoryCommand
 */
export const se_GetPackageVersionHistoryCommand = async (
  input: GetPackageVersionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/packages/{PackageID}/history");
  b.p("PackageID", () => input.PackageID!, "{PackageID}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUpgradeHistoryCommand
 */
export const se_GetUpgradeHistoryCommand = async (
  input: GetUpgradeHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/upgradeDomain/{DomainName}/history");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetUpgradeStatusCommand
 */
export const se_GetUpgradeStatusCommand = async (
  input: GetUpgradeStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/upgradeDomain/{DomainName}/status");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/list-applications");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_s]: [() => input.statuses !== void 0, () => input[_s]! || []],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataSourcesCommand
 */
export const se_ListDataSourcesCommand = async (
  input: ListDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/dataSource");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDirectQueryDataSourcesCommand
 */
export const se_ListDirectQueryDataSourcesCommand = async (
  input: ListDirectQueryDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/directQueryDataSource");
  const query: any = map({
    [_n]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDomainMaintenancesCommand
 */
export const se_ListDomainMaintenancesCommand = async (
  input: ListDomainMaintenancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/domainMaintenances");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_a]: [, input[_A]!],
    [_st]: [, input[_S]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDomainNamesCommand
 */
export const se_ListDomainNamesCommand = async (
  input: ListDomainNamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/domain");
  const query: any = map({
    [_eT]: [, input[_ET]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDomainsForPackageCommand
 */
export const se_ListDomainsForPackageCommand = async (
  input: ListDomainsForPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/packages/{PackageID}/domains");
  b.p("PackageID", () => input.PackageID!, "{PackageID}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInstanceTypeDetailsCommand
 */
export const se_ListInstanceTypeDetailsCommand = async (
  input: ListInstanceTypeDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/instanceTypeDetails/{EngineVersion}");
  b.p("EngineVersion", () => input.EngineVersion!, "{EngineVersion}", false);
  const query: any = map({
    [_dN]: [, input[_DN]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
    [_rAZ]: [() => input.RetrieveAZs !== void 0, () => input[_RAZ]!.toString()],
    [_iT]: [, input[_IT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPackagesForDomainCommand
 */
export const se_ListPackagesForDomainCommand = async (
  input: ListPackagesForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/domain/{DomainName}/packages");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListScheduledActionsCommand
 */
export const se_ListScheduledActionsCommand = async (
  input: ListScheduledActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/scheduledActions");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/tags");
  const query: any = map({
    [_ar]: [, __expectNonNull(input[_ARN]!, `ARN`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVersionsCommand
 */
export const se_ListVersionsCommand = async (
  input: ListVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/versions");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVpcEndpointAccessCommand
 */
export const se_ListVpcEndpointAccessCommand = async (
  input: ListVpcEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/listVpcEndpointAccess");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVpcEndpointsCommand
 */
export const se_ListVpcEndpointsCommand = async (
  input: ListVpcEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/vpcEndpoints");
  const query: any = map({
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVpcEndpointsForDomainCommand
 */
export const se_ListVpcEndpointsForDomainCommand = async (
  input: ListVpcEndpointsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/vpcEndpoints");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PurchaseReservedInstanceOfferingCommand
 */
export const se_PurchaseReservedInstanceOfferingCommand = async (
  input: PurchaseReservedInstanceOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/purchaseReservedInstanceOffering");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceCount: [],
      ReservationName: [],
      ReservedInstanceOfferingId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RejectInboundConnectionCommand
 */
export const se_RejectInboundConnectionCommand = async (
  input: RejectInboundConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2021-01-01/opensearch/cc/inboundConnection/{ConnectionId}/reject");
  b.p("ConnectionId", () => input.ConnectionId!, "{ConnectionId}", false);
  let body: any;
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveTagsCommand
 */
export const se_RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/tags-removal");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ARN: [],
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RevokeVpcEndpointAccessCommand
 */
export const se_RevokeVpcEndpointAccessCommand = async (
  input: RevokeVpcEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/revokeVpcEndpointAccess");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Account: [],
      Service: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDomainMaintenanceCommand
 */
export const se_StartDomainMaintenanceCommand = async (
  input: StartDomainMaintenanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/domainMaintenance");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Action: [],
      NodeId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartServiceSoftwareUpdateCommand
 */
export const se_StartServiceSoftwareUpdateCommand = async (
  input: StartServiceSoftwareUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/serviceSoftwareUpdate/start");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DesiredStartTime: [],
      DomainName: [],
      ScheduleAt: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/application/{id}");
  b.p("id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      appConfigs: (_) => _json(_),
      dataSources: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDataSourceCommand
 */
export const se_UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/dataSource/{Name}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DataSourceType: (_) => _json(_),
      Description: [],
      Status: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDirectQueryDataSourceCommand
 */
export const se_UpdateDirectQueryDataSourceCommand = async (
  input: UpdateDirectQueryDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/directQueryDataSource/{DataSourceName}");
  b.p("DataSourceName", () => input.DataSourceName!, "{DataSourceName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DataSourceType: (_) => _json(_),
      Description: [],
      OpenSearchArns: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDomainConfigCommand
 */
export const se_UpdateDomainConfigCommand = async (
  input: UpdateDomainConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/config");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AIMLOptions: (_) => _json(_),
      AccessPolicies: [],
      AdvancedOptions: (_) => _json(_),
      AdvancedSecurityOptions: (_) => _json(_),
      AutoTuneOptions: (_) => se_AutoTuneOptions(_, context),
      ClusterConfig: (_) => _json(_),
      CognitoOptions: (_) => _json(_),
      DomainEndpointOptions: (_) => _json(_),
      DryRun: [],
      DryRunMode: [],
      EBSOptions: (_) => _json(_),
      EncryptionAtRestOptions: (_) => _json(_),
      IPAddressType: [],
      IdentityCenterOptions: (_) => _json(_),
      LogPublishingOptions: (_) => _json(_),
      NodeToNodeEncryptionOptions: (_) => _json(_),
      OffPeakWindowOptions: (_) => _json(_),
      SnapshotOptions: (_) => _json(_),
      SoftwareUpdateOptions: (_) => _json(_),
      VPCOptions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePackageCommand
 */
export const se_UpdatePackageCommand = async (
  input: UpdatePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/packages/update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CommitMessage: [],
      PackageConfiguration: (_) => _json(_),
      PackageDescription: [],
      PackageEncryptionOptions: (_) => _json(_),
      PackageID: [],
      PackageSource: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePackageScopeCommand
 */
export const se_UpdatePackageScopeCommand = async (
  input: UpdatePackageScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/packages/updateScope");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Operation: [],
      PackageID: [],
      PackageUserList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateScheduledActionCommand
 */
export const se_UpdateScheduledActionCommand = async (
  input: UpdateScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/domain/{DomainName}/scheduledAction/update");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ActionID: [],
      ActionType: [],
      DesiredStartTime: [],
      ScheduleAt: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateVpcEndpointCommand
 */
export const se_UpdateVpcEndpointCommand = async (
  input: UpdateVpcEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/vpcEndpoints/update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      VpcEndpointId: [],
      VpcOptions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpgradeDomainCommand
 */
export const se_UpgradeDomainCommand = async (
  input: UpgradeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2021-01-01/opensearch/upgradeDomain");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AdvancedOptions: (_) => _json(_),
      DomainName: [],
      PerformCheckOnly: [],
      TargetVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AcceptInboundConnectionCommand
 */
export const de_AcceptInboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Connection: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AddDataSourceCommand
 */
export const de_AddDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AddDirectQueryDataSourceCommand
 */
export const de_AddDirectQueryDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddDirectQueryDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSourceArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AddTagsCommand
 */
export const de_AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
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
 * deserializeAws_restJson1AssociatePackageCommand
 */
export const de_AssociatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainPackageDetails: (_) => de_DomainPackageDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociatePackagesCommand
 */
export const de_AssociatePackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociatePackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainPackageDetailsList: (_) => de_DomainPackageDetailsList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AuthorizeVpcEndpointAccessCommand
 */
export const de_AuthorizeVpcEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AuthorizeVpcEndpointAccessCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AuthorizedPrincipal: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelDomainConfigChangeCommand
 */
export const de_CancelDomainConfigChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDomainConfigChangeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CancelledChangeIds: _json,
    CancelledChangeProperties: _json,
    DryRun: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelServiceSoftwareUpdateCommand
 */
export const de_CancelServiceSoftwareUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelServiceSoftwareUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ServiceSoftwareOptions: (_) => de_ServiceSoftwareOptions(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appConfigs: _json,
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataSources: _json,
    iamIdentityCenterOptions: _json,
    id: __expectString,
    name: __expectString,
    tagList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainCommand
 */
export const de_CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainStatus: (_) => de_DomainStatus(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateOutboundConnectionCommand
 */
export const de_CreateOutboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectionAlias: __expectString,
    ConnectionId: __expectString,
    ConnectionMode: __expectString,
    ConnectionProperties: _json,
    ConnectionStatus: _json,
    LocalDomainInfo: _json,
    RemoteDomainInfo: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePackageCommand
 */
export const de_CreatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PackageDetails: (_) => de_PackageDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVpcEndpointCommand
 */
export const de_CreateVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VpcEndpoint: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDataSourceCommand
 */
export const de_DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDirectQueryDataSourceCommand
 */
export const de_DeleteDirectQueryDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectQueryDataSourceCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainStatus: (_) => de_DomainStatus(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInboundConnectionCommand
 */
export const de_DeleteInboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Connection: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteOutboundConnectionCommand
 */
export const de_DeleteOutboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Connection: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePackageCommand
 */
export const de_DeletePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PackageDetails: (_) => de_PackageDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVpcEndpointCommand
 */
export const de_DeleteVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VpcEndpointSummary: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainCommand
 */
export const de_DescribeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainStatus: (_) => de_DomainStatus(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainAutoTunesCommand
 */
export const de_DescribeDomainAutoTunesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainAutoTunesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AutoTunes: (_) => de_AutoTuneList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainChangeProgressCommand
 */
export const de_DescribeDomainChangeProgressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainChangeProgressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChangeProgressStatus: (_) => de_ChangeProgressStatusDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainConfigCommand
 */
export const de_DescribeDomainConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainConfig: (_) => de_DomainConfig(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainHealthCommand
 */
export const de_DescribeDomainHealthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainHealthCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ActiveAvailabilityZoneCount: __expectString,
    AvailabilityZoneCount: __expectString,
    ClusterHealth: __expectString,
    DataNodeCount: __expectString,
    DedicatedMaster: __expectBoolean,
    DomainState: __expectString,
    EnvironmentInformation: _json,
    MasterEligibleNodeCount: __expectString,
    MasterNode: __expectString,
    StandByAvailabilityZoneCount: __expectString,
    TotalShards: __expectString,
    TotalUnAssignedShards: __expectString,
    WarmNodeCount: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainNodesCommand
 */
export const de_DescribeDomainNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainNodesStatusList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainsCommand
 */
export const de_DescribeDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainStatusList: (_) => de_DomainStatusList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDryRunProgressCommand
 */
export const de_DescribeDryRunProgressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDryRunProgressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DryRunConfig: (_) => de_DomainStatus(_, context),
    DryRunProgressStatus: _json,
    DryRunResults: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInboundConnectionsCommand
 */
export const de_DescribeInboundConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInboundConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Connections: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInstanceTypeLimitsCommand
 */
export const de_DescribeInstanceTypeLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceTypeLimitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LimitsByRole: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeOutboundConnectionsCommand
 */
export const de_DescribeOutboundConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOutboundConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Connections: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackagesCommand
 */
export const de_DescribePackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PackageDetailsList: (_) => de_PackageDetailsList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeReservedInstanceOfferingsCommand
 */
export const de_DescribeReservedInstanceOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedInstanceOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ReservedInstanceOfferings: (_) => de_ReservedInstanceOfferingList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeReservedInstancesCommand
 */
export const de_DescribeReservedInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ReservedInstances: (_) => de_ReservedInstanceList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVpcEndpointsCommand
 */
export const de_DescribeVpcEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VpcEndpointErrors: _json,
    VpcEndpoints: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DissociatePackageCommand
 */
export const de_DissociatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DissociatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainPackageDetails: (_) => de_DomainPackageDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DissociatePackagesCommand
 */
export const de_DissociatePackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DissociatePackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainPackageDetailsList: (_) => de_DomainPackageDetailsList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetApplicationCommand
 */
export const de_GetApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appConfigs: _json,
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataSources: _json,
    endpoint: __expectString,
    iamIdentityCenterOptions: _json,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCompatibleVersionsCommand
 */
export const de_GetCompatibleVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CompatibleVersions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataSourceCommand
 */
export const de_GetDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSourceType: (_) => _json(__expectUnion(_)),
    Description: __expectString,
    Name: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDirectQueryDataSourceCommand
 */
export const de_GetDirectQueryDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDirectQueryDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSourceArn: __expectString,
    DataSourceName: __expectString,
    DataSourceType: (_) => _json(__expectUnion(_)),
    Description: __expectString,
    OpenSearchArns: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainMaintenanceStatusCommand
 */
export const de_GetDomainMaintenanceStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainMaintenanceStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Action: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NodeId: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
    UpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPackageVersionHistoryCommand
 */
export const de_GetPackageVersionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PackageID: __expectString,
    PackageVersionHistoryList: (_) => de_PackageVersionHistoryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUpgradeHistoryCommand
 */
export const de_GetUpgradeHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeHistoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    UpgradeHistories: (_) => de_UpgradeHistoryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetUpgradeStatusCommand
 */
export const de_GetUpgradeStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUpgradeStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    StepStatus: __expectString,
    UpgradeName: __expectString,
    UpgradeStep: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationSummaries: (_) => de_ApplicationSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataSourcesCommand
 */
export const de_ListDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSources: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDirectQueryDataSourcesCommand
 */
export const de_ListDirectQueryDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDirectQueryDataSourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DirectQueryDataSources: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainMaintenancesCommand
 */
export const de_ListDomainMaintenancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainMaintenancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainMaintenances: (_) => de_DomainMaintenanceList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainNamesCommand
 */
export const de_ListDomainNamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainNamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainNames: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainsForPackageCommand
 */
export const de_ListDomainsForPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsForPackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainPackageDetailsList: (_) => de_DomainPackageDetailsList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInstanceTypeDetailsCommand
 */
export const de_ListInstanceTypeDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceTypeDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InstanceTypeDetails: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPackagesForDomainCommand
 */
export const de_ListPackagesForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesForDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainPackageDetailsList: (_) => de_DomainPackageDetailsList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListScheduledActionsCommand
 */
export const de_ListScheduledActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScheduledActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ScheduledActions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TagList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVersionsCommand
 */
export const de_ListVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Versions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVpcEndpointAccessCommand
 */
export const de_ListVpcEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointAccessCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AuthorizedPrincipalList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVpcEndpointsCommand
 */
export const de_ListVpcEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    VpcEndpointSummaryList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVpcEndpointsForDomainCommand
 */
export const de_ListVpcEndpointsForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcEndpointsForDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    VpcEndpointSummaryList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PurchaseReservedInstanceOfferingCommand
 */
export const de_PurchaseReservedInstanceOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedInstanceOfferingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ReservationName: __expectString,
    ReservedInstanceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RejectInboundConnectionCommand
 */
export const de_RejectInboundConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInboundConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Connection: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveTagsCommand
 */
export const de_RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
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
 * deserializeAws_restJson1RevokeVpcEndpointAccessCommand
 */
export const de_RevokeVpcEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeVpcEndpointAccessCommandOutput> => {
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
 * deserializeAws_restJson1StartDomainMaintenanceCommand
 */
export const de_StartDomainMaintenanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDomainMaintenanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MaintenanceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartServiceSoftwareUpdateCommand
 */
export const de_StartServiceSoftwareUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartServiceSoftwareUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ServiceSoftwareOptions: (_) => de_ServiceSoftwareOptions(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appConfigs: _json,
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataSources: _json,
    iamIdentityCenterOptions: _json,
    id: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataSourceCommand
 */
export const de_UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDirectQueryDataSourceCommand
 */
export const de_UpdateDirectQueryDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectQueryDataSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DataSourceArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDomainConfigCommand
 */
export const de_UpdateDomainConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainConfig: (_) => de_DomainConfig(_, context),
    DryRunProgressStatus: _json,
    DryRunResults: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePackageCommand
 */
export const de_UpdatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PackageDetails: (_) => de_PackageDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePackageScopeCommand
 */
export const de_UpdatePackageScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageScopeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Operation: __expectString,
    PackageID: __expectString,
    PackageUserList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateScheduledActionCommand
 */
export const de_UpdateScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScheduledActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ScheduledAction: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVpcEndpointCommand
 */
export const de_UpdateVpcEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VpcEndpoint: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpgradeDomainCommand
 */
export const de_UpgradeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdvancedOptions: _json,
    ChangeProgressDetails: (_) => de_ChangeProgressDetails(_, context),
    DomainName: __expectString,
    PerformCheckOnly: __expectBoolean,
    TargetVersion: __expectString,
    UpgradeId: __expectString,
  });
  Object.assign(contents, doc);
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
    case "DisabledOperationException":
    case "com.amazonaws.opensearch#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.opensearch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.opensearch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.opensearch#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "DependencyFailureException":
    case "com.amazonaws.opensearch#DependencyFailureException":
      throw await de_DependencyFailureExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.opensearch#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.opensearch#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.opensearch#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.opensearch#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidTypeException":
    case "com.amazonaws.opensearch#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.opensearch#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.opensearch#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "SlotNotAvailableException":
    case "com.amazonaws.opensearch#SlotNotAvailableException":
      throw await de_SlotNotAvailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BaseExceptionRes
 */
const de_BaseExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BaseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DependencyFailureExceptionRes
 */
const de_DependencyFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DependencyFailureException({
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1SlotNotAvailableExceptionRes
 */
const de_SlotNotAvailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SlotNotAvailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    SlotSuggestions: _json,
    message: __expectString,
  });
  Object.assign(contents, doc);
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

// se_AdvancedOptions omitted.

// se_AdvancedSecurityOptionsInput omitted.

// se_AIMLOptionsInput omitted.

// se_AppConfig omitted.

// se_AppConfigs omitted.

/**
 * serializeAws_restJson1AutoTuneMaintenanceSchedule
 */
const se_AutoTuneMaintenanceSchedule = (input: AutoTuneMaintenanceSchedule, context: __SerdeContext): any => {
  return take(input, {
    CronExpressionForRecurrence: [],
    Duration: _json,
    StartAt: (_) => _.getTime() / 1_000,
  });
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
  return take(input, {
    DesiredState: [],
    MaintenanceSchedules: (_) => se_AutoTuneMaintenanceScheduleList(_, context),
    RollbackOnDisable: [],
    UseOffPeakWindow: [],
  });
};

/**
 * serializeAws_restJson1AutoTuneOptionsInput
 */
const se_AutoTuneOptionsInput = (input: AutoTuneOptionsInput, context: __SerdeContext): any => {
  return take(input, {
    DesiredState: [],
    MaintenanceSchedules: (_) => se_AutoTuneMaintenanceScheduleList(_, context),
    UseOffPeakWindow: [],
  });
};

// se_AWSDomainInformation omitted.

// se_CloudWatchDirectQueryDataSource omitted.

// se_ClusterConfig omitted.

// se_CognitoOptions omitted.

// se_ColdStorageOptions omitted.

// se_ConnectionProperties omitted.

// se_CrossClusterSearchConnectionProperties omitted.

// se_DataSource omitted.

// se_DataSources omitted.

// se_DataSourceType omitted.

// se_DescribePackagesFilter omitted.

// se_DescribePackagesFilterList omitted.

// se_DescribePackagesFilterValues omitted.

// se_DirectQueryDataSourceType omitted.

// se_DirectQueryOpenSearchARNList omitted.

// se_DomainEndpointOptions omitted.

// se_DomainInformationContainer omitted.

// se_DomainNameList omitted.

// se_Duration omitted.

// se_EBSOptions omitted.

// se_EncryptionAtRestOptions omitted.

// se_Filter omitted.

// se_FilterList omitted.

// se_IamIdentityCenterOptionsInput omitted.

// se_IdentityCenterOptionsInput omitted.

// se_JWTOptionsInput omitted.

// se_KeyStoreAccessOption omitted.

// se_LogPublishingOption omitted.

// se_LogPublishingOptions omitted.

// se_MasterUserOptions omitted.

// se_NaturalLanguageQueryGenerationOptionsInput omitted.

// se_NodeConfig omitted.

// se_NodeOption omitted.

// se_NodeOptionsList omitted.

// se_NodeToNodeEncryptionOptions omitted.

// se_OffPeakWindow omitted.

// se_OffPeakWindowOptions omitted.

// se_PackageAssociationConfiguration omitted.

// se_PackageConfiguration omitted.

// se_PackageDetailsForAssociation omitted.

// se_PackageDetailsForAssociationList omitted.

// se_PackageEncryptionOptions omitted.

// se_PackageIDList omitted.

// se_PackageSource omitted.

// se_PackageUserList omitted.

// se_PackageVendingOptions omitted.

// se_S3GlueDataCatalog omitted.

// se_S3VectorsEngine omitted.

// se_SAMLIdp omitted.

// se_SAMLOptionsInput omitted.

// se_SecurityLakeDirectQueryDataSource omitted.

// se_SnapshotOptions omitted.

// se_SoftwareUpdateOptions omitted.

// se_StringList omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_ValueStringList omitted.

// se_VpcEndpointIdList omitted.

// se_VPCOptions omitted.

// se_WindowStartTime omitted.

// se_ZoneAwarenessConfig omitted.

/**
 * deserializeAws_restJson1AccessPoliciesStatus
 */
const de_AccessPoliciesStatus = (output: any, context: __SerdeContext): AccessPoliciesStatus => {
  return take(output, {
    Options: __expectString,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_AdditionalLimit omitted.

// de_AdditionalLimitList omitted.

// de_AdvancedOptions omitted.

/**
 * deserializeAws_restJson1AdvancedOptionsStatus
 */
const de_AdvancedOptionsStatus = (output: any, context: __SerdeContext): AdvancedOptionsStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AdvancedSecurityOptions
 */
const de_AdvancedSecurityOptions = (output: any, context: __SerdeContext): AdvancedSecurityOptions => {
  return take(output, {
    AnonymousAuthDisableDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    AnonymousAuthEnabled: __expectBoolean,
    Enabled: __expectBoolean,
    InternalUserDatabaseEnabled: __expectBoolean,
    JWTOptions: _json,
    SAMLOptions: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AdvancedSecurityOptionsStatus
 */
const de_AdvancedSecurityOptionsStatus = (output: any, context: __SerdeContext): AdvancedSecurityOptionsStatus => {
  return take(output, {
    Options: (_: any) => de_AdvancedSecurityOptions(_, context),
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_AIMLOptionsOutput omitted.

/**
 * deserializeAws_restJson1AIMLOptionsStatus
 */
const de_AIMLOptionsStatus = (output: any, context: __SerdeContext): AIMLOptionsStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_AppConfig omitted.

// de_AppConfigs omitted.

/**
 * deserializeAws_restJson1ApplicationSummaries
 */
const de_ApplicationSummaries = (output: any, context: __SerdeContext): ApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ApplicationSummary
 */
const de_ApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    endpoint: __expectString,
    id: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_AuthorizedPrincipal omitted.

// de_AuthorizedPrincipalList omitted.

/**
 * deserializeAws_restJson1AutoTune
 */
const de_AutoTune = (output: any, context: __SerdeContext): AutoTune => {
  return take(output, {
    AutoTuneDetails: (_: any) => de_AutoTuneDetails(_, context),
    AutoTuneType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AutoTuneDetails
 */
const de_AutoTuneDetails = (output: any, context: __SerdeContext): AutoTuneDetails => {
  return take(output, {
    ScheduledAutoTuneDetails: (_: any) => de_ScheduledAutoTuneDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AutoTuneList
 */
const de_AutoTuneList = (output: any, context: __SerdeContext): AutoTune[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoTune(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AutoTuneMaintenanceSchedule
 */
const de_AutoTuneMaintenanceSchedule = (output: any, context: __SerdeContext): AutoTuneMaintenanceSchedule => {
  return take(output, {
    CronExpressionForRecurrence: __expectString,
    Duration: _json,
    StartAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1AutoTuneMaintenanceScheduleList
 */
const de_AutoTuneMaintenanceScheduleList = (output: any, context: __SerdeContext): AutoTuneMaintenanceSchedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoTuneMaintenanceSchedule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AutoTuneOptions
 */
const de_AutoTuneOptions = (output: any, context: __SerdeContext): AutoTuneOptions => {
  return take(output, {
    DesiredState: __expectString,
    MaintenanceSchedules: (_: any) => de_AutoTuneMaintenanceScheduleList(_, context),
    RollbackOnDisable: __expectString,
    UseOffPeakWindow: __expectBoolean,
  }) as any;
};

// de_AutoTuneOptionsOutput omitted.

/**
 * deserializeAws_restJson1AutoTuneOptionsStatus
 */
const de_AutoTuneOptionsStatus = (output: any, context: __SerdeContext): AutoTuneOptionsStatus => {
  return take(output, {
    Options: (_: any) => de_AutoTuneOptions(_, context),
    Status: (_: any) => de_AutoTuneStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AutoTuneStatus
 */
const de_AutoTuneStatus = (output: any, context: __SerdeContext): AutoTuneStatus => {
  return take(output, {
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorMessage: __expectString,
    PendingDeletion: __expectBoolean,
    State: __expectString,
    UpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UpdateVersion: __expectInt32,
  }) as any;
};

// de_AvailabilityZoneInfo omitted.

// de_AvailabilityZoneInfoList omitted.

// de_AvailabilityZoneList omitted.

// de_AWSDomainInformation omitted.

// de_CancelledChangeProperty omitted.

// de_CancelledChangePropertyList omitted.

/**
 * deserializeAws_restJson1ChangeProgressDetails
 */
const de_ChangeProgressDetails = (output: any, context: __SerdeContext): ChangeProgressDetails => {
  return take(output, {
    ChangeId: __expectString,
    ConfigChangeStatus: __expectString,
    InitiatedBy: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ChangeProgressStage
 */
const de_ChangeProgressStage = (output: any, context: __SerdeContext): ChangeProgressStage => {
  return take(output, {
    Description: __expectString,
    LastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ChangeProgressStageList
 */
const de_ChangeProgressStageList = (output: any, context: __SerdeContext): ChangeProgressStage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ChangeProgressStage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ChangeProgressStatusDetails
 */
const de_ChangeProgressStatusDetails = (output: any, context: __SerdeContext): ChangeProgressStatusDetails => {
  return take(output, {
    ChangeId: __expectString,
    ChangeProgressStages: (_: any) => de_ChangeProgressStageList(_, context),
    CompletedProperties: _json,
    ConfigChangeStatus: __expectString,
    InitiatedBy: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PendingProperties: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    TotalNumberOfStages: __expectInt32,
  }) as any;
};

// de_CloudWatchDirectQueryDataSource omitted.

// de_ClusterConfig omitted.

/**
 * deserializeAws_restJson1ClusterConfigStatus
 */
const de_ClusterConfigStatus = (output: any, context: __SerdeContext): ClusterConfigStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_CognitoOptions omitted.

/**
 * deserializeAws_restJson1CognitoOptionsStatus
 */
const de_CognitoOptionsStatus = (output: any, context: __SerdeContext): CognitoOptionsStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_ColdStorageOptions omitted.

// de_CompatibleVersionsList omitted.

// de_CompatibleVersionsMap omitted.

// de_ConnectionProperties omitted.

// de_CrossClusterSearchConnectionProperties omitted.

// de_DataSource omitted.

// de_DataSourceDetails omitted.

// de_DataSourceList omitted.

// de_DataSources omitted.

// de_DataSourceType omitted.

// de_DirectQueryDataSource omitted.

// de_DirectQueryDataSourceList omitted.

// de_DirectQueryDataSourceType omitted.

// de_DirectQueryOpenSearchARNList omitted.

/**
 * deserializeAws_restJson1DomainConfig
 */
const de_DomainConfig = (output: any, context: __SerdeContext): DomainConfig => {
  return take(output, {
    AIMLOptions: (_: any) => de_AIMLOptionsStatus(_, context),
    AccessPolicies: (_: any) => de_AccessPoliciesStatus(_, context),
    AdvancedOptions: (_: any) => de_AdvancedOptionsStatus(_, context),
    AdvancedSecurityOptions: (_: any) => de_AdvancedSecurityOptionsStatus(_, context),
    AutoTuneOptions: (_: any) => de_AutoTuneOptionsStatus(_, context),
    ChangeProgressDetails: (_: any) => de_ChangeProgressDetails(_, context),
    ClusterConfig: (_: any) => de_ClusterConfigStatus(_, context),
    CognitoOptions: (_: any) => de_CognitoOptionsStatus(_, context),
    DomainEndpointOptions: (_: any) => de_DomainEndpointOptionsStatus(_, context),
    EBSOptions: (_: any) => de_EBSOptionsStatus(_, context),
    EncryptionAtRestOptions: (_: any) => de_EncryptionAtRestOptionsStatus(_, context),
    EngineVersion: (_: any) => de_VersionStatus(_, context),
    IPAddressType: (_: any) => de_IPAddressTypeStatus(_, context),
    IdentityCenterOptions: (_: any) => de_IdentityCenterOptionsStatus(_, context),
    LogPublishingOptions: (_: any) => de_LogPublishingOptionsStatus(_, context),
    ModifyingProperties: _json,
    NodeToNodeEncryptionOptions: (_: any) => de_NodeToNodeEncryptionOptionsStatus(_, context),
    OffPeakWindowOptions: (_: any) => de_OffPeakWindowOptionsStatus(_, context),
    SnapshotOptions: (_: any) => de_SnapshotOptionsStatus(_, context),
    SoftwareUpdateOptions: (_: any) => de_SoftwareUpdateOptionsStatus(_, context),
    VPCOptions: (_: any) => de_VPCDerivedInfoStatus(_, context),
  }) as any;
};

// de_DomainEndpointOptions omitted.

/**
 * deserializeAws_restJson1DomainEndpointOptionsStatus
 */
const de_DomainEndpointOptionsStatus = (output: any, context: __SerdeContext): DomainEndpointOptionsStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_DomainInfo omitted.

// de_DomainInfoList omitted.

// de_DomainInformationContainer omitted.

/**
 * deserializeAws_restJson1DomainMaintenanceDetails
 */
const de_DomainMaintenanceDetails = (output: any, context: __SerdeContext): DomainMaintenanceDetails => {
  return take(output, {
    Action: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainName: __expectString,
    MaintenanceId: __expectString,
    NodeId: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1DomainMaintenanceList
 */
const de_DomainMaintenanceList = (output: any, context: __SerdeContext): DomainMaintenanceDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainMaintenanceDetails(entry, context);
    });
  return retVal;
};

// de_DomainNodesStatus omitted.

// de_DomainNodesStatusList omitted.

/**
 * deserializeAws_restJson1DomainPackageDetails
 */
const de_DomainPackageDetails = (output: any, context: __SerdeContext): DomainPackageDetails => {
  return take(output, {
    AssociationConfiguration: _json,
    DomainName: __expectString,
    DomainPackageStatus: __expectString,
    ErrorDetails: _json,
    LastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PackageID: __expectString,
    PackageName: __expectString,
    PackageType: __expectString,
    PackageVersion: __expectString,
    PrerequisitePackageIDList: _json,
    ReferencePath: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DomainPackageDetailsList
 */
const de_DomainPackageDetailsList = (output: any, context: __SerdeContext): DomainPackageDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainPackageDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DomainStatus
 */
const de_DomainStatus = (output: any, context: __SerdeContext): DomainStatus => {
  return take(output, {
    AIMLOptions: _json,
    ARN: __expectString,
    AccessPolicies: __expectString,
    AdvancedOptions: _json,
    AdvancedSecurityOptions: (_: any) => de_AdvancedSecurityOptions(_, context),
    AutoTuneOptions: _json,
    ChangeProgressDetails: (_: any) => de_ChangeProgressDetails(_, context),
    ClusterConfig: _json,
    CognitoOptions: _json,
    Created: __expectBoolean,
    Deleted: __expectBoolean,
    DomainEndpointOptions: _json,
    DomainEndpointV2HostedZoneId: __expectString,
    DomainId: __expectString,
    DomainName: __expectString,
    DomainProcessingStatus: __expectString,
    EBSOptions: _json,
    EncryptionAtRestOptions: _json,
    Endpoint: __expectString,
    EndpointV2: __expectString,
    Endpoints: _json,
    EngineVersion: __expectString,
    IPAddressType: __expectString,
    IdentityCenterOptions: _json,
    LogPublishingOptions: _json,
    ModifyingProperties: _json,
    NodeToNodeEncryptionOptions: _json,
    OffPeakWindowOptions: _json,
    Processing: __expectBoolean,
    ServiceSoftwareOptions: (_: any) => de_ServiceSoftwareOptions(_, context),
    SnapshotOptions: _json,
    SoftwareUpdateOptions: _json,
    UpgradeProcessing: __expectBoolean,
    VPCOptions: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1DomainStatusList
 */
const de_DomainStatusList = (output: any, context: __SerdeContext): DomainStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainStatus(entry, context);
    });
  return retVal;
};

// de_DryRunProgressStatus omitted.

// de_DryRunResults omitted.

// de_Duration omitted.

// de_EBSOptions omitted.

/**
 * deserializeAws_restJson1EBSOptionsStatus
 */
const de_EBSOptionsStatus = (output: any, context: __SerdeContext): EBSOptionsStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_EncryptionAtRestOptions omitted.

/**
 * deserializeAws_restJson1EncryptionAtRestOptionsStatus
 */
const de_EncryptionAtRestOptionsStatus = (output: any, context: __SerdeContext): EncryptionAtRestOptionsStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_EndpointsMap omitted.

// de_EnvironmentInfo omitted.

// de_EnvironmentInfoList omitted.

// de_ErrorDetails omitted.

// de_GUIDList omitted.

// de_IamIdentityCenterOptions omitted.

// de_IdentityCenterOptions omitted.

/**
 * deserializeAws_restJson1IdentityCenterOptionsStatus
 */
const de_IdentityCenterOptionsStatus = (output: any, context: __SerdeContext): IdentityCenterOptionsStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_InboundConnection omitted.

// de_InboundConnections omitted.

// de_InboundConnectionStatus omitted.

// de_InstanceCountLimits omitted.

// de_InstanceLimits omitted.

// de_InstanceRoleList omitted.

// de_InstanceTypeDetails omitted.

// de_InstanceTypeDetailsList omitted.

/**
 * deserializeAws_restJson1IPAddressTypeStatus
 */
const de_IPAddressTypeStatus = (output: any, context: __SerdeContext): IPAddressTypeStatus => {
  return take(output, {
    Options: __expectString,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_Issues omitted.

// de_JWTOptionsOutput omitted.

// de_KeyStoreAccessOption omitted.

// de_Limits omitted.

// de_LimitsByRole omitted.

// de_LimitValueList omitted.

// de_LogPublishingOption omitted.

// de_LogPublishingOptions omitted.

/**
 * deserializeAws_restJson1LogPublishingOptionsStatus
 */
const de_LogPublishingOptionsStatus = (output: any, context: __SerdeContext): LogPublishingOptionsStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_ModifyingProperties omitted.

// de_ModifyingPropertiesList omitted.

// de_NaturalLanguageQueryGenerationOptionsOutput omitted.

// de_NodeConfig omitted.

// de_NodeOption omitted.

// de_NodeOptionsList omitted.

// de_NodeToNodeEncryptionOptions omitted.

/**
 * deserializeAws_restJson1NodeToNodeEncryptionOptionsStatus
 */
const de_NodeToNodeEncryptionOptionsStatus = (
  output: any,
  context: __SerdeContext
): NodeToNodeEncryptionOptionsStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_OffPeakWindow omitted.

// de_OffPeakWindowOptions omitted.

/**
 * deserializeAws_restJson1OffPeakWindowOptionsStatus
 */
const de_OffPeakWindowOptionsStatus = (output: any, context: __SerdeContext): OffPeakWindowOptionsStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1OptionStatus
 */
const de_OptionStatus = (output: any, context: __SerdeContext): OptionStatus => {
  return take(output, {
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PendingDeletion: __expectBoolean,
    State: __expectString,
    UpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UpdateVersion: __expectInt32,
  }) as any;
};

// de_OutboundConnection omitted.

// de_OutboundConnections omitted.

// de_OutboundConnectionStatus omitted.

// de_PackageAssociationConfiguration omitted.

// de_PackageConfiguration omitted.

/**
 * deserializeAws_restJson1PackageDetails
 */
const de_PackageDetails = (output: any, context: __SerdeContext): PackageDetails => {
  return take(output, {
    AllowListedUserList: _json,
    AvailablePackageConfiguration: _json,
    AvailablePackageVersion: __expectString,
    AvailablePluginProperties: _json,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EngineVersion: __expectString,
    ErrorDetails: _json,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PackageDescription: __expectString,
    PackageEncryptionOptions: _json,
    PackageID: __expectString,
    PackageName: __expectString,
    PackageOwner: __expectString,
    PackageStatus: __expectString,
    PackageType: __expectString,
    PackageVendingOptions: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1PackageDetailsList
 */
const de_PackageDetailsList = (output: any, context: __SerdeContext): PackageDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PackageDetails(entry, context);
    });
  return retVal;
};

// de_PackageEncryptionOptions omitted.

// de_PackageIDList omitted.

// de_PackageUserList omitted.

// de_PackageVendingOptions omitted.

/**
 * deserializeAws_restJson1PackageVersionHistory
 */
const de_PackageVersionHistory = (output: any, context: __SerdeContext): PackageVersionHistory => {
  return take(output, {
    CommitMessage: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PackageConfiguration: _json,
    PackageVersion: __expectString,
    PluginProperties: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1PackageVersionHistoryList
 */
const de_PackageVersionHistoryList = (output: any, context: __SerdeContext): PackageVersionHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PackageVersionHistory(entry, context);
    });
  return retVal;
};

// de_PluginProperties omitted.

/**
 * deserializeAws_restJson1RecurringCharge
 */
const de_RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  return take(output, {
    RecurringChargeAmount: __limitedParseDouble,
    RecurringChargeFrequency: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RecurringChargeList
 */
const de_RecurringChargeList = (output: any, context: __SerdeContext): RecurringCharge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecurringCharge(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReservedInstance
 */
const de_ReservedInstance = (output: any, context: __SerdeContext): ReservedInstance => {
  return take(output, {
    BillingSubscriptionId: __expectLong,
    CurrencyCode: __expectString,
    Duration: __expectInt32,
    FixedPrice: __limitedParseDouble,
    InstanceCount: __expectInt32,
    InstanceType: __expectString,
    PaymentOption: __expectString,
    RecurringCharges: (_: any) => de_RecurringChargeList(_, context),
    ReservationName: __expectString,
    ReservedInstanceId: __expectString,
    ReservedInstanceOfferingId: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    UsagePrice: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ReservedInstanceList
 */
const de_ReservedInstanceList = (output: any, context: __SerdeContext): ReservedInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservedInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReservedInstanceOffering
 */
const de_ReservedInstanceOffering = (output: any, context: __SerdeContext): ReservedInstanceOffering => {
  return take(output, {
    CurrencyCode: __expectString,
    Duration: __expectInt32,
    FixedPrice: __limitedParseDouble,
    InstanceType: __expectString,
    PaymentOption: __expectString,
    RecurringCharges: (_: any) => de_RecurringChargeList(_, context),
    ReservedInstanceOfferingId: __expectString,
    UsagePrice: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ReservedInstanceOfferingList
 */
const de_ReservedInstanceOfferingList = (output: any, context: __SerdeContext): ReservedInstanceOffering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservedInstanceOffering(entry, context);
    });
  return retVal;
};

// de_S3GlueDataCatalog omitted.

// de_S3VectorsEngine omitted.

// de_SAMLIdp omitted.

// de_SAMLOptionsOutput omitted.

// de_ScheduledAction omitted.

// de_ScheduledActionsList omitted.

/**
 * deserializeAws_restJson1ScheduledAutoTuneDetails
 */
const de_ScheduledAutoTuneDetails = (output: any, context: __SerdeContext): ScheduledAutoTuneDetails => {
  return take(output, {
    Action: __expectString,
    ActionType: __expectString,
    Date: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Severity: __expectString,
  }) as any;
};

// de_SecurityLakeDirectQueryDataSource omitted.

/**
 * deserializeAws_restJson1ServiceSoftwareOptions
 */
const de_ServiceSoftwareOptions = (output: any, context: __SerdeContext): ServiceSoftwareOptions => {
  return take(output, {
    AutomatedUpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Cancellable: __expectBoolean,
    CurrentVersion: __expectString,
    Description: __expectString,
    NewVersion: __expectString,
    OptionalDeployment: __expectBoolean,
    UpdateAvailable: __expectBoolean,
    UpdateStatus: __expectString,
  }) as any;
};

// de_SlotList omitted.

// de_SnapshotOptions omitted.

/**
 * deserializeAws_restJson1SnapshotOptionsStatus
 */
const de_SnapshotOptionsStatus = (output: any, context: __SerdeContext): SnapshotOptionsStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_SoftwareUpdateOptions omitted.

/**
 * deserializeAws_restJson1SoftwareUpdateOptionsStatus
 */
const de_SoftwareUpdateOptionsStatus = (output: any, context: __SerdeContext): SoftwareUpdateOptionsStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_StorageType omitted.

// de_StorageTypeLimit omitted.

// de_StorageTypeLimitList omitted.

// de_StorageTypeList omitted.

// de_StringList omitted.

// de_Tag omitted.

// de_TagList omitted.

/**
 * deserializeAws_restJson1UpgradeHistory
 */
const de_UpgradeHistory = (output: any, context: __SerdeContext): UpgradeHistory => {
  return take(output, {
    StartTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StepsList: (_: any) => de_UpgradeStepsList(_, context),
    UpgradeName: __expectString,
    UpgradeStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1UpgradeHistoryList
 */
const de_UpgradeHistoryList = (output: any, context: __SerdeContext): UpgradeHistory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UpgradeHistory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UpgradeStepItem
 */
const de_UpgradeStepItem = (output: any, context: __SerdeContext): UpgradeStepItem => {
  return take(output, {
    Issues: _json,
    ProgressPercent: __limitedParseDouble,
    UpgradeStep: __expectString,
    UpgradeStepStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1UpgradeStepsList
 */
const de_UpgradeStepsList = (output: any, context: __SerdeContext): UpgradeStepItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UpgradeStepItem(entry, context);
    });
  return retVal;
};

// de_ValidationFailure omitted.

// de_ValidationFailures omitted.

// de_VersionList omitted.

/**
 * deserializeAws_restJson1VersionStatus
 */
const de_VersionStatus = (output: any, context: __SerdeContext): VersionStatus => {
  return take(output, {
    Options: __expectString,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_VPCDerivedInfo omitted.

/**
 * deserializeAws_restJson1VPCDerivedInfoStatus
 */
const de_VPCDerivedInfoStatus = (output: any, context: __SerdeContext): VPCDerivedInfoStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

// de_VpcEndpoint omitted.

// de_VpcEndpointError omitted.

// de_VpcEndpointErrorList omitted.

// de_VpcEndpoints omitted.

// de_VpcEndpointSummary omitted.

// de_VpcEndpointSummaryList omitted.

// de_WindowStartTime omitted.

// de_ZoneAwarenessConfig omitted.

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

const _A = "Action";
const _ARN = "ARN";
const _CI = "ChangeId";
const _DN = "DomainName";
const _DRI = "DryRunId";
const _ET = "EngineType";
const _IT = "InstanceType";
const _LDRC = "LoadDryRunConfig";
const _MI = "MaintenanceId";
const _MR = "MaxResults";
const _NT = "NextToken";
const _RAZ = "RetrieveAZs";
const _RII = "ReservedInstanceId";
const _RIOI = "ReservedInstanceOfferingId";
const _S = "Status";
const _a = "action";
const _ar = "arn";
const _c = "changeid";
const _dN = "domainName";
const _dRI = "dryRunId";
const _eT = "engineType";
const _iT = "instanceType";
const _lDRC = "loadDryRunConfig";
const _mI = "maintenanceId";
const _mR = "maxResults";
const _n = "nexttoken";
const _nT = "nextToken";
const _oI = "offeringId";
const _rAZ = "retrieveAZs";
const _rI = "reservationId";
const _s = "statuses";
const _st = "status";
