// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
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

import {
  AcceptInboundCrossClusterSearchConnectionCommandInput,
  AcceptInboundCrossClusterSearchConnectionCommandOutput,
} from "../commands/AcceptInboundCrossClusterSearchConnectionCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import { AssociatePackageCommandInput, AssociatePackageCommandOutput } from "../commands/AssociatePackageCommand";
import {
  AuthorizeVpcEndpointAccessCommandInput,
  AuthorizeVpcEndpointAccessCommandOutput,
} from "../commands/AuthorizeVpcEndpointAccessCommand";
import {
  CancelDomainConfigChangeCommandInput,
  CancelDomainConfigChangeCommandOutput,
} from "../commands/CancelDomainConfigChangeCommand";
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
import { CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput } from "../commands/CreateVpcEndpointCommand";
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
import { DeleteVpcEndpointCommandInput, DeleteVpcEndpointCommandOutput } from "../commands/DeleteVpcEndpointCommand";
import {
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput,
} from "../commands/DescribeDomainAutoTunesCommand";
import {
  DescribeDomainChangeProgressCommandInput,
  DescribeDomainChangeProgressCommandOutput,
} from "../commands/DescribeDomainChangeProgressCommand";
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
import {
  DescribeVpcEndpointsCommandInput,
  DescribeVpcEndpointsCommandOutput,
} from "../commands/DescribeVpcEndpointsCommand";
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
  ListVpcEndpointAccessCommandInput,
  ListVpcEndpointAccessCommandOutput,
} from "../commands/ListVpcEndpointAccessCommand";
import { ListVpcEndpointsCommandInput, ListVpcEndpointsCommandOutput } from "../commands/ListVpcEndpointsCommand";
import {
  ListVpcEndpointsForDomainCommandInput,
  ListVpcEndpointsForDomainCommandOutput,
} from "../commands/ListVpcEndpointsForDomainCommand";
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
  RevokeVpcEndpointAccessCommandInput,
  RevokeVpcEndpointAccessCommandOutput,
} from "../commands/RevokeVpcEndpointAccessCommand";
import {
  StartElasticsearchServiceSoftwareUpdateCommandInput,
  StartElasticsearchServiceSoftwareUpdateCommandOutput,
} from "../commands/StartElasticsearchServiceSoftwareUpdateCommand";
import {
  UpdateElasticsearchDomainConfigCommandInput,
  UpdateElasticsearchDomainConfigCommandOutput,
} from "../commands/UpdateElasticsearchDomainConfigCommand";
import { UpdatePackageCommandInput, UpdatePackageCommandOutput } from "../commands/UpdatePackageCommand";
import { UpdateVpcEndpointCommandInput, UpdateVpcEndpointCommandOutput } from "../commands/UpdateVpcEndpointCommand";
import {
  UpgradeElasticsearchDomainCommandInput,
  UpgradeElasticsearchDomainCommandOutput,
} from "../commands/UpgradeElasticsearchDomainCommand";
import { ElasticsearchServiceServiceException as __BaseException } from "../models/ElasticsearchServiceServiceException";
import {
  AccessDeniedException,
  AccessPoliciesStatus,
  AdvancedOptionsStatus,
  AdvancedSecurityOptions,
  AdvancedSecurityOptionsInput,
  AdvancedSecurityOptionsStatus,
  AutoTune,
  AutoTuneDetails,
  AutoTuneMaintenanceSchedule,
  AutoTuneOptions,
  AutoTuneOptionsInput,
  AutoTuneOptionsStatus,
  AutoTuneStatus,
  BaseException,
  ChangeProgressDetails,
  ChangeProgressStage,
  ChangeProgressStatusDetails,
  CognitoOptions,
  CognitoOptionsStatus,
  ColdStorageOptions,
  ConflictException,
  DescribePackagesFilter,
  DisabledOperationException,
  DomainEndpointOptions,
  DomainEndpointOptionsStatus,
  DomainInformation,
  DomainPackageDetails,
  Duration,
  EBSOptions,
  EBSOptionsStatus,
  ElasticsearchClusterConfig,
  ElasticsearchClusterConfigStatus,
  ElasticsearchDomainConfig,
  ElasticsearchDomainStatus,
  ElasticsearchVersionStatus,
  EncryptionAtRestOptions,
  EncryptionAtRestOptionsStatus,
  Filter,
  InternalException,
  InvalidPaginationTokenException,
  InvalidTypeException,
  LimitExceededException,
  LogPublishingOption,
  LogPublishingOptionsStatus,
  LogType,
  MasterUserOptions,
  NodeToNodeEncryptionOptions,
  NodeToNodeEncryptionOptionsStatus,
  OptionStatus,
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
  ScheduledAutoTuneDetails,
  ServiceSoftwareOptions,
  SnapshotOptions,
  SnapshotOptionsStatus,
  Tag,
  UpgradeHistory,
  UpgradeStepItem,
  ValidationException,
  VPCDerivedInfoStatus,
  VPCOptions,
  ZoneAwarenessConfig,
} from "../models/models_0";

/**
 * serializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand
 */
export const se_AcceptInboundCrossClusterSearchConnectionCommand = async (
  input: AcceptInboundCrossClusterSearchConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/accept");
  b.p(
    "CrossClusterSearchConnectionId",
    () => input.CrossClusterSearchConnectionId!,
    "{CrossClusterSearchConnectionId}",
    false
  );
  let body: any;
  b.m("PUT").h(headers).b(body);
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
  b.bp("/2015-01-01/tags");
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
  const headers: any = {};
  b.bp("/2015-01-01/packages/associate/{PackageID}/{DomainName}");
  b.p("PackageID", () => input.PackageID!, "{PackageID}", false);
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
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
  b.bp("/2015-01-01/es/domain/{DomainName}/authorizeVpcEndpointAccess");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Account: [],
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
  b.bp("/2015-01-01/es/domain/{DomainName}/config/cancel");
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
 * serializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand
 */
export const se_CancelElasticsearchServiceSoftwareUpdateCommand = async (
  input: CancelElasticsearchServiceSoftwareUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-01-01/es/serviceSoftwareUpdate/cancel");
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
 * serializeAws_restJson1CreateElasticsearchDomainCommand
 */
export const se_CreateElasticsearchDomainCommand = async (
  input: CreateElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-01-01/es/domain");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccessPolicies: [],
      AdvancedOptions: (_) => _json(_),
      AdvancedSecurityOptions: (_) => _json(_),
      AutoTuneOptions: (_) => se_AutoTuneOptionsInput(_, context),
      CognitoOptions: (_) => _json(_),
      DomainEndpointOptions: (_) => _json(_),
      DomainName: [],
      EBSOptions: (_) => _json(_),
      ElasticsearchClusterConfig: (_) => _json(_),
      ElasticsearchVersion: [],
      EncryptionAtRestOptions: (_) => _json(_),
      LogPublishingOptions: (_) => _json(_),
      NodeToNodeEncryptionOptions: (_) => _json(_),
      SnapshotOptions: (_) => _json(_),
      TagList: (_) => _json(_),
      VPCOptions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand
 */
export const se_CreateOutboundCrossClusterSearchConnectionCommand = async (
  input: CreateOutboundCrossClusterSearchConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-01-01/es/ccs/outboundConnection");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConnectionAlias: [],
      DestinationDomainInfo: (_) => _json(_),
      SourceDomainInfo: (_) => _json(_),
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
  b.bp("/2015-01-01/packages");
  let body: any;
  body = JSON.stringify(
    take(input, {
      PackageDescription: [],
      PackageName: [],
      PackageSource: (_) => _json(_),
      PackageType: [],
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
  b.bp("/2015-01-01/es/vpcEndpoints");
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
 * serializeAws_restJson1DeleteElasticsearchDomainCommand
 */
export const se_DeleteElasticsearchDomainCommand = async (
  input: DeleteElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-01-01/es/domain/{DomainName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteElasticsearchServiceRoleCommand
 */
export const se_DeleteElasticsearchServiceRoleCommand = async (
  input: DeleteElasticsearchServiceRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-01-01/es/role");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand
 */
export const se_DeleteInboundCrossClusterSearchConnectionCommand = async (
  input: DeleteInboundCrossClusterSearchConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}");
  b.p(
    "CrossClusterSearchConnectionId",
    () => input.CrossClusterSearchConnectionId!,
    "{CrossClusterSearchConnectionId}",
    false
  );
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand
 */
export const se_DeleteOutboundCrossClusterSearchConnectionCommand = async (
  input: DeleteOutboundCrossClusterSearchConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-01-01/es/ccs/outboundConnection/{CrossClusterSearchConnectionId}");
  b.p(
    "CrossClusterSearchConnectionId",
    () => input.CrossClusterSearchConnectionId!,
    "{CrossClusterSearchConnectionId}",
    false
  );
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
  b.bp("/2015-01-01/packages/{PackageID}");
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
  b.bp("/2015-01-01/es/vpcEndpoints/{VpcEndpointId}");
  b.p("VpcEndpointId", () => input.VpcEndpointId!, "{VpcEndpointId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
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
  b.bp("/2015-01-01/es/domain/{DomainName}/autoTunes");
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
  b.bp("/2015-01-01/es/domain/{DomainName}/progress");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_c]: [, input[_CI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeElasticsearchDomainCommand
 */
export const se_DescribeElasticsearchDomainCommand = async (
  input: DescribeElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-01-01/es/domain/{DomainName}");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeElasticsearchDomainConfigCommand
 */
export const se_DescribeElasticsearchDomainConfigCommand = async (
  input: DescribeElasticsearchDomainConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-01-01/es/domain/{DomainName}/config");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeElasticsearchDomainsCommand
 */
export const se_DescribeElasticsearchDomainsCommand = async (
  input: DescribeElasticsearchDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-01-01/es/domain-info");
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
 * serializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand
 */
export const se_DescribeElasticsearchInstanceTypeLimitsCommand = async (
  input: DescribeElasticsearchInstanceTypeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}");
  b.p("InstanceType", () => input.InstanceType!, "{InstanceType}", false);
  b.p("ElasticsearchVersion", () => input.ElasticsearchVersion!, "{ElasticsearchVersion}", false);
  const query: any = map({
    [_dN]: [, input[_DN]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand
 */
export const se_DescribeInboundCrossClusterSearchConnectionsCommand = async (
  input: DescribeInboundCrossClusterSearchConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-01-01/es/ccs/inboundConnection/search");
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
 * serializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand
 */
export const se_DescribeOutboundCrossClusterSearchConnectionsCommand = async (
  input: DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-01-01/es/ccs/outboundConnection/search");
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
  b.bp("/2015-01-01/packages/describe");
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
 * serializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand
 */
export const se_DescribeReservedElasticsearchInstanceOfferingsCommand = async (
  input: DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-01-01/es/reservedInstanceOfferings");
  const query: any = map({
    [_oI]: [, input[_REIOI]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeReservedElasticsearchInstancesCommand
 */
export const se_DescribeReservedElasticsearchInstancesCommand = async (
  input: DescribeReservedElasticsearchInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-01-01/es/reservedInstances");
  const query: any = map({
    [_rI]: [, input[_REII]!],
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
  b.bp("/2015-01-01/es/vpcEndpoints/describe");
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
  b.bp("/2015-01-01/packages/dissociate/{PackageID}/{DomainName}");
  b.p("PackageID", () => input.PackageID!, "{PackageID}", false);
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCompatibleElasticsearchVersionsCommand
 */
export const se_GetCompatibleElasticsearchVersionsCommand = async (
  input: GetCompatibleElasticsearchVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-01-01/es/compatibleVersions");
  const query: any = map({
    [_dN]: [, input[_DN]!],
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
  b.bp("/2015-01-01/packages/{PackageID}/history");
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
  b.bp("/2015-01-01/es/upgradeDomain/{DomainName}/history");
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
  b.bp("/2015-01-01/es/upgradeDomain/{DomainName}/status");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
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
  b.bp("/2015-01-01/domain");
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
  b.bp("/2015-01-01/packages/{PackageID}/domains");
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
 * serializeAws_restJson1ListElasticsearchInstanceTypesCommand
 */
export const se_ListElasticsearchInstanceTypesCommand = async (
  input: ListElasticsearchInstanceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-01-01/es/instanceTypes/{ElasticsearchVersion}");
  b.p("ElasticsearchVersion", () => input.ElasticsearchVersion!, "{ElasticsearchVersion}", false);
  const query: any = map({
    [_dN]: [, input[_DN]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListElasticsearchVersionsCommand
 */
export const se_ListElasticsearchVersionsCommand = async (
  input: ListElasticsearchVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-01-01/es/versions");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
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
  b.bp("/2015-01-01/domain/{DomainName}/packages");
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
  b.bp("/2015-01-01/tags");
  const query: any = map({
    [_a]: [, __expectNonNull(input[_ARN]!, `ARN`)],
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
  b.bp("/2015-01-01/es/domain/{DomainName}/listVpcEndpointAccess");
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
  b.bp("/2015-01-01/es/vpcEndpoints");
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
  b.bp("/2015-01-01/es/domain/{DomainName}/vpcEndpoints");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand
 */
export const se_PurchaseReservedElasticsearchInstanceOfferingCommand = async (
  input: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-01-01/es/purchaseReservedInstanceOffering");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InstanceCount: [],
      ReservationName: [],
      ReservedElasticsearchInstanceOfferingId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand
 */
export const se_RejectInboundCrossClusterSearchConnectionCommand = async (
  input: RejectInboundCrossClusterSearchConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/2015-01-01/es/ccs/inboundConnection/{CrossClusterSearchConnectionId}/reject");
  b.p(
    "CrossClusterSearchConnectionId",
    () => input.CrossClusterSearchConnectionId!,
    "{CrossClusterSearchConnectionId}",
    false
  );
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
  b.bp("/2015-01-01/tags-removal");
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
  b.bp("/2015-01-01/es/domain/{DomainName}/revokeVpcEndpointAccess");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Account: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand
 */
export const se_StartElasticsearchServiceSoftwareUpdateCommand = async (
  input: StartElasticsearchServiceSoftwareUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-01-01/es/serviceSoftwareUpdate/start");
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
 * serializeAws_restJson1UpdateElasticsearchDomainConfigCommand
 */
export const se_UpdateElasticsearchDomainConfigCommand = async (
  input: UpdateElasticsearchDomainConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-01-01/es/domain/{DomainName}/config");
  b.p("DomainName", () => input.DomainName!, "{DomainName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AccessPolicies: [],
      AdvancedOptions: (_) => _json(_),
      AdvancedSecurityOptions: (_) => _json(_),
      AutoTuneOptions: (_) => se_AutoTuneOptions(_, context),
      CognitoOptions: (_) => _json(_),
      DomainEndpointOptions: (_) => _json(_),
      DryRun: [],
      EBSOptions: (_) => _json(_),
      ElasticsearchClusterConfig: (_) => _json(_),
      EncryptionAtRestOptions: (_) => _json(_),
      LogPublishingOptions: (_) => _json(_),
      NodeToNodeEncryptionOptions: (_) => _json(_),
      SnapshotOptions: (_) => _json(_),
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
  b.bp("/2015-01-01/packages/update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CommitMessage: [],
      PackageDescription: [],
      PackageID: [],
      PackageSource: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/2015-01-01/es/vpcEndpoints/update");
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
 * serializeAws_restJson1UpgradeElasticsearchDomainCommand
 */
export const se_UpgradeElasticsearchDomainCommand = async (
  input: UpgradeElasticsearchDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/2015-01-01/es/upgradeDomain");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DomainName: [],
      PerformCheckOnly: [],
      TargetVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AcceptInboundCrossClusterSearchConnectionCommand
 */
export const de_AcceptInboundCrossClusterSearchConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInboundCrossClusterSearchConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CrossClusterSearchConnection: _json,
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
 * deserializeAws_restJson1CancelElasticsearchServiceSoftwareUpdateCommand
 */
export const de_CancelElasticsearchServiceSoftwareUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelElasticsearchServiceSoftwareUpdateCommandOutput> => {
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
 * deserializeAws_restJson1CreateElasticsearchDomainCommand
 */
export const de_CreateElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainStatus: (_) => de_ElasticsearchDomainStatus(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateOutboundCrossClusterSearchConnectionCommand
 */
export const de_CreateOutboundCrossClusterSearchConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutboundCrossClusterSearchConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectionAlias: __expectString,
    ConnectionStatus: _json,
    CrossClusterSearchConnectionId: __expectString,
    DestinationDomainInfo: _json,
    SourceDomainInfo: _json,
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
 * deserializeAws_restJson1DeleteElasticsearchDomainCommand
 */
export const de_DeleteElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainStatus: (_) => de_ElasticsearchDomainStatus(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteElasticsearchServiceRoleCommand
 */
export const de_DeleteElasticsearchServiceRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteElasticsearchServiceRoleCommandOutput> => {
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
 * deserializeAws_restJson1DeleteInboundCrossClusterSearchConnectionCommand
 */
export const de_DeleteInboundCrossClusterSearchConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInboundCrossClusterSearchConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CrossClusterSearchConnection: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteOutboundCrossClusterSearchConnectionCommand
 */
export const de_DeleteOutboundCrossClusterSearchConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutboundCrossClusterSearchConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CrossClusterSearchConnection: _json,
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
 * deserializeAws_restJson1DescribeElasticsearchDomainCommand
 */
export const de_DescribeElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainStatus: (_) => de_ElasticsearchDomainStatus(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeElasticsearchDomainConfigCommand
 */
export const de_DescribeElasticsearchDomainConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainConfig: (_) => de_ElasticsearchDomainConfig(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeElasticsearchDomainsCommand
 */
export const de_DescribeElasticsearchDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainStatusList: (_) => de_ElasticsearchDomainStatusList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeElasticsearchInstanceTypeLimitsCommand
 */
export const de_DescribeElasticsearchInstanceTypeLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeElasticsearchInstanceTypeLimitsCommandOutput> => {
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
 * deserializeAws_restJson1DescribeInboundCrossClusterSearchConnectionsCommand
 */
export const de_DescribeInboundCrossClusterSearchConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInboundCrossClusterSearchConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CrossClusterSearchConnections: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeOutboundCrossClusterSearchConnectionsCommand
 */
export const de_DescribeOutboundCrossClusterSearchConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOutboundCrossClusterSearchConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CrossClusterSearchConnections: _json,
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
 * deserializeAws_restJson1DescribeReservedElasticsearchInstanceOfferingsCommand
 */
export const de_DescribeReservedElasticsearchInstanceOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstanceOfferingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ReservedElasticsearchInstanceOfferings: (_) => de_ReservedElasticsearchInstanceOfferingList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeReservedElasticsearchInstancesCommand
 */
export const de_DescribeReservedElasticsearchInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReservedElasticsearchInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ReservedElasticsearchInstances: (_) => de_ReservedElasticsearchInstanceList(_, context),
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
 * deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommand
 */
export const de_GetCompatibleElasticsearchVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleElasticsearchVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CompatibleElasticsearchVersions: _json,
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
 * deserializeAws_restJson1ListElasticsearchInstanceTypesCommand
 */
export const de_ListElasticsearchInstanceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchInstanceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ElasticsearchInstanceTypes: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListElasticsearchVersionsCommand
 */
export const de_ListElasticsearchVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListElasticsearchVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ElasticsearchVersions: _json,
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
 * deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand
 */
export const de_PurchaseReservedElasticsearchInstanceOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ReservationName: __expectString,
    ReservedElasticsearchInstanceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RejectInboundCrossClusterSearchConnectionCommand
 */
export const de_RejectInboundCrossClusterSearchConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectInboundCrossClusterSearchConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CrossClusterSearchConnection: _json,
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
 * deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand
 */
export const de_StartElasticsearchServiceSoftwareUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput> => {
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
 * deserializeAws_restJson1UpdateElasticsearchDomainConfigCommand
 */
export const de_UpdateElasticsearchDomainConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateElasticsearchDomainConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DomainConfig: (_) => de_ElasticsearchDomainConfig(_, context),
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
 * deserializeAws_restJson1UpgradeElasticsearchDomainCommand
 */
export const de_UpgradeElasticsearchDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpgradeElasticsearchDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ChangeProgressDetails: (_) => de_ChangeProgressDetails(_, context),
    DomainName: __expectString,
    PerformCheckOnly: __expectBoolean,
    TargetVersion: __expectString,
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
    case "com.amazonaws.elasticsearchservice#DisabledOperationException":
      throw await de_DisabledOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.elasticsearchservice#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.elasticsearchservice#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "BaseException":
    case "com.amazonaws.elasticsearchservice#BaseException":
      throw await de_BaseExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.elasticsearchservice#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.elasticsearchservice#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.elasticsearchservice#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.elasticsearchservice#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidTypeException":
    case "com.amazonaws.elasticsearchservice#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.elasticsearchservice#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.elasticsearchservice#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
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
  });
};

/**
 * serializeAws_restJson1AutoTuneOptionsInput
 */
const se_AutoTuneOptionsInput = (input: AutoTuneOptionsInput, context: __SerdeContext): any => {
  return take(input, {
    DesiredState: [],
    MaintenanceSchedules: (_) => se_AutoTuneMaintenanceScheduleList(_, context),
  });
};

// se_CognitoOptions omitted.

// se_ColdStorageOptions omitted.

// se_DescribePackagesFilter omitted.

// se_DescribePackagesFilterList omitted.

// se_DescribePackagesFilterValues omitted.

// se_DomainEndpointOptions omitted.

// se_DomainInformation omitted.

// se_DomainNameList omitted.

// se_Duration omitted.

// se_EBSOptions omitted.

// se_ElasticsearchClusterConfig omitted.

// se_EncryptionAtRestOptions omitted.

// se_Filter omitted.

// se_FilterList omitted.

// se_LogPublishingOption omitted.

// se_LogPublishingOptions omitted.

// se_MasterUserOptions omitted.

// se_NodeToNodeEncryptionOptions omitted.

// se_PackageSource omitted.

// se_SAMLIdp omitted.

// se_SAMLOptionsInput omitted.

// se_SnapshotOptions omitted.

// se_StringList omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_ValueStringList omitted.

// se_VpcEndpointIdList omitted.

// se_VPCOptions omitted.

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

// de_CompatibleElasticsearchVersionsList omitted.

// de_CompatibleVersionsMap omitted.

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

// de_DomainInformation omitted.

/**
 * deserializeAws_restJson1DomainPackageDetails
 */
const de_DomainPackageDetails = (output: any, context: __SerdeContext): DomainPackageDetails => {
  return take(output, {
    DomainName: __expectString,
    DomainPackageStatus: __expectString,
    ErrorDetails: _json,
    LastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PackageID: __expectString,
    PackageName: __expectString,
    PackageType: __expectString,
    PackageVersion: __expectString,
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

// de_ElasticsearchClusterConfig omitted.

/**
 * deserializeAws_restJson1ElasticsearchClusterConfigStatus
 */
const de_ElasticsearchClusterConfigStatus = (
  output: any,
  context: __SerdeContext
): ElasticsearchClusterConfigStatus => {
  return take(output, {
    Options: _json,
    Status: (_: any) => de_OptionStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ElasticsearchDomainConfig
 */
const de_ElasticsearchDomainConfig = (output: any, context: __SerdeContext): ElasticsearchDomainConfig => {
  return take(output, {
    AccessPolicies: (_: any) => de_AccessPoliciesStatus(_, context),
    AdvancedOptions: (_: any) => de_AdvancedOptionsStatus(_, context),
    AdvancedSecurityOptions: (_: any) => de_AdvancedSecurityOptionsStatus(_, context),
    AutoTuneOptions: (_: any) => de_AutoTuneOptionsStatus(_, context),
    ChangeProgressDetails: (_: any) => de_ChangeProgressDetails(_, context),
    CognitoOptions: (_: any) => de_CognitoOptionsStatus(_, context),
    DomainEndpointOptions: (_: any) => de_DomainEndpointOptionsStatus(_, context),
    EBSOptions: (_: any) => de_EBSOptionsStatus(_, context),
    ElasticsearchClusterConfig: (_: any) => de_ElasticsearchClusterConfigStatus(_, context),
    ElasticsearchVersion: (_: any) => de_ElasticsearchVersionStatus(_, context),
    EncryptionAtRestOptions: (_: any) => de_EncryptionAtRestOptionsStatus(_, context),
    LogPublishingOptions: (_: any) => de_LogPublishingOptionsStatus(_, context),
    ModifyingProperties: _json,
    NodeToNodeEncryptionOptions: (_: any) => de_NodeToNodeEncryptionOptionsStatus(_, context),
    SnapshotOptions: (_: any) => de_SnapshotOptionsStatus(_, context),
    VPCOptions: (_: any) => de_VPCDerivedInfoStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ElasticsearchDomainStatus
 */
const de_ElasticsearchDomainStatus = (output: any, context: __SerdeContext): ElasticsearchDomainStatus => {
  return take(output, {
    ARN: __expectString,
    AccessPolicies: __expectString,
    AdvancedOptions: _json,
    AdvancedSecurityOptions: (_: any) => de_AdvancedSecurityOptions(_, context),
    AutoTuneOptions: _json,
    ChangeProgressDetails: (_: any) => de_ChangeProgressDetails(_, context),
    CognitoOptions: _json,
    Created: __expectBoolean,
    Deleted: __expectBoolean,
    DomainEndpointOptions: _json,
    DomainId: __expectString,
    DomainName: __expectString,
    DomainProcessingStatus: __expectString,
    EBSOptions: _json,
    ElasticsearchClusterConfig: _json,
    ElasticsearchVersion: __expectString,
    EncryptionAtRestOptions: _json,
    Endpoint: __expectString,
    Endpoints: _json,
    LogPublishingOptions: _json,
    ModifyingProperties: _json,
    NodeToNodeEncryptionOptions: _json,
    Processing: __expectBoolean,
    ServiceSoftwareOptions: (_: any) => de_ServiceSoftwareOptions(_, context),
    SnapshotOptions: _json,
    UpgradeProcessing: __expectBoolean,
    VPCOptions: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ElasticsearchDomainStatusList
 */
const de_ElasticsearchDomainStatusList = (output: any, context: __SerdeContext): ElasticsearchDomainStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ElasticsearchDomainStatus(entry, context);
    });
  return retVal;
};

// de_ElasticsearchInstanceTypeList omitted.

// de_ElasticsearchVersionList omitted.

/**
 * deserializeAws_restJson1ElasticsearchVersionStatus
 */
const de_ElasticsearchVersionStatus = (output: any, context: __SerdeContext): ElasticsearchVersionStatus => {
  return take(output, {
    Options: __expectString,
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

// de_ErrorDetails omitted.

// de_GUIDList omitted.

// de_InboundCrossClusterSearchConnection omitted.

// de_InboundCrossClusterSearchConnections omitted.

// de_InboundCrossClusterSearchConnectionStatus omitted.

// de_InstanceCountLimits omitted.

// de_InstanceLimits omitted.

// de_Issues omitted.

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

// de_OutboundCrossClusterSearchConnection omitted.

// de_OutboundCrossClusterSearchConnections omitted.

// de_OutboundCrossClusterSearchConnectionStatus omitted.

/**
 * deserializeAws_restJson1PackageDetails
 */
const de_PackageDetails = (output: any, context: __SerdeContext): PackageDetails => {
  return take(output, {
    AvailablePackageVersion: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorDetails: _json,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PackageDescription: __expectString,
    PackageID: __expectString,
    PackageName: __expectString,
    PackageStatus: __expectString,
    PackageType: __expectString,
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

/**
 * deserializeAws_restJson1PackageVersionHistory
 */
const de_PackageVersionHistory = (output: any, context: __SerdeContext): PackageVersionHistory => {
  return take(output, {
    CommitMessage: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PackageVersion: __expectString,
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
 * deserializeAws_restJson1ReservedElasticsearchInstance
 */
const de_ReservedElasticsearchInstance = (output: any, context: __SerdeContext): ReservedElasticsearchInstance => {
  return take(output, {
    CurrencyCode: __expectString,
    Duration: __expectInt32,
    ElasticsearchInstanceCount: __expectInt32,
    ElasticsearchInstanceType: __expectString,
    FixedPrice: __limitedParseDouble,
    PaymentOption: __expectString,
    RecurringCharges: (_: any) => de_RecurringChargeList(_, context),
    ReservationName: __expectString,
    ReservedElasticsearchInstanceId: __expectString,
    ReservedElasticsearchInstanceOfferingId: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    UsagePrice: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ReservedElasticsearchInstanceList
 */
const de_ReservedElasticsearchInstanceList = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservedElasticsearchInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReservedElasticsearchInstanceOffering
 */
const de_ReservedElasticsearchInstanceOffering = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstanceOffering => {
  return take(output, {
    CurrencyCode: __expectString,
    Duration: __expectInt32,
    ElasticsearchInstanceType: __expectString,
    FixedPrice: __limitedParseDouble,
    PaymentOption: __expectString,
    RecurringCharges: (_: any) => de_RecurringChargeList(_, context),
    ReservedElasticsearchInstanceOfferingId: __expectString,
    UsagePrice: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ReservedElasticsearchInstanceOfferingList
 */
const de_ReservedElasticsearchInstanceOfferingList = (
  output: any,
  context: __SerdeContext
): ReservedElasticsearchInstanceOffering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservedElasticsearchInstanceOffering(entry, context);
    });
  return retVal;
};

// de_SAMLIdp omitted.

// de_SAMLOptionsOutput omitted.

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

const _ARN = "ARN";
const _CI = "ChangeId";
const _DN = "DomainName";
const _ET = "EngineType";
const _MR = "MaxResults";
const _NT = "NextToken";
const _REII = "ReservedElasticsearchInstanceId";
const _REIOI = "ReservedElasticsearchInstanceOfferingId";
const _a = "arn";
const _c = "changeid";
const _dN = "domainName";
const _eT = "engineType";
const _mR = "maxResults";
const _nT = "nextToken";
const _oI = "offeringId";
const _rI = "reservationId";
