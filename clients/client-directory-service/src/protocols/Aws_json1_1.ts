import {
  AcceptSharedDirectoryCommandInput,
  AcceptSharedDirectoryCommandOutput,
} from "../commands/AcceptSharedDirectoryCommand";
import { AddIpRoutesCommandInput, AddIpRoutesCommandOutput } from "../commands/AddIpRoutesCommand";
import { AddRegionCommandInput, AddRegionCommandOutput } from "../commands/AddRegionCommand";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "../commands/AddTagsToResourceCommand";
import {
  CancelSchemaExtensionCommandInput,
  CancelSchemaExtensionCommandOutput,
} from "../commands/CancelSchemaExtensionCommand";
import { ConnectDirectoryCommandInput, ConnectDirectoryCommandOutput } from "../commands/ConnectDirectoryCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "../commands/CreateAliasCommand";
import { CreateComputerCommandInput, CreateComputerCommandOutput } from "../commands/CreateComputerCommand";
import {
  CreateConditionalForwarderCommandInput,
  CreateConditionalForwarderCommandOutput,
} from "../commands/CreateConditionalForwarderCommand";
import { CreateDirectoryCommandInput, CreateDirectoryCommandOutput } from "../commands/CreateDirectoryCommand";
import {
  CreateLogSubscriptionCommandInput,
  CreateLogSubscriptionCommandOutput,
} from "../commands/CreateLogSubscriptionCommand";
import { CreateMicrosoftADCommandInput, CreateMicrosoftADCommandOutput } from "../commands/CreateMicrosoftADCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "../commands/CreateSnapshotCommand";
import { CreateTrustCommandInput, CreateTrustCommandOutput } from "../commands/CreateTrustCommand";
import {
  DeleteConditionalForwarderCommandInput,
  DeleteConditionalForwarderCommandOutput,
} from "../commands/DeleteConditionalForwarderCommand";
import { DeleteDirectoryCommandInput, DeleteDirectoryCommandOutput } from "../commands/DeleteDirectoryCommand";
import {
  DeleteLogSubscriptionCommandInput,
  DeleteLogSubscriptionCommandOutput,
} from "../commands/DeleteLogSubscriptionCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "../commands/DeleteSnapshotCommand";
import { DeleteTrustCommandInput, DeleteTrustCommandOutput } from "../commands/DeleteTrustCommand";
import {
  DeregisterCertificateCommandInput,
  DeregisterCertificateCommandOutput,
} from "../commands/DeregisterCertificateCommand";
import {
  DeregisterEventTopicCommandInput,
  DeregisterEventTopicCommandOutput,
} from "../commands/DeregisterEventTopicCommand";
import {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "../commands/DescribeCertificateCommand";
import {
  DescribeClientAuthenticationSettingsCommandInput,
  DescribeClientAuthenticationSettingsCommandOutput,
} from "../commands/DescribeClientAuthenticationSettingsCommand";
import {
  DescribeConditionalForwardersCommandInput,
  DescribeConditionalForwardersCommandOutput,
} from "../commands/DescribeConditionalForwardersCommand";
import {
  DescribeDirectoriesCommandInput,
  DescribeDirectoriesCommandOutput,
} from "../commands/DescribeDirectoriesCommand";
import {
  DescribeDomainControllersCommandInput,
  DescribeDomainControllersCommandOutput,
} from "../commands/DescribeDomainControllersCommand";
import {
  DescribeEventTopicsCommandInput,
  DescribeEventTopicsCommandOutput,
} from "../commands/DescribeEventTopicsCommand";
import {
  DescribeLDAPSSettingsCommandInput,
  DescribeLDAPSSettingsCommandOutput,
} from "../commands/DescribeLDAPSSettingsCommand";
import { DescribeRegionsCommandInput, DescribeRegionsCommandOutput } from "../commands/DescribeRegionsCommand";
import {
  DescribeSharedDirectoriesCommandInput,
  DescribeSharedDirectoriesCommandOutput,
} from "../commands/DescribeSharedDirectoriesCommand";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "../commands/DescribeSnapshotsCommand";
import { DescribeTrustsCommandInput, DescribeTrustsCommandOutput } from "../commands/DescribeTrustsCommand";
import {
  DisableClientAuthenticationCommandInput,
  DisableClientAuthenticationCommandOutput,
} from "../commands/DisableClientAuthenticationCommand";
import { DisableLDAPSCommandInput, DisableLDAPSCommandOutput } from "../commands/DisableLDAPSCommand";
import { DisableRadiusCommandInput, DisableRadiusCommandOutput } from "../commands/DisableRadiusCommand";
import { DisableSsoCommandInput, DisableSsoCommandOutput } from "../commands/DisableSsoCommand";
import {
  EnableClientAuthenticationCommandInput,
  EnableClientAuthenticationCommandOutput,
} from "../commands/EnableClientAuthenticationCommand";
import { EnableLDAPSCommandInput, EnableLDAPSCommandOutput } from "../commands/EnableLDAPSCommand";
import { EnableRadiusCommandInput, EnableRadiusCommandOutput } from "../commands/EnableRadiusCommand";
import { EnableSsoCommandInput, EnableSsoCommandOutput } from "../commands/EnableSsoCommand";
import { GetDirectoryLimitsCommandInput, GetDirectoryLimitsCommandOutput } from "../commands/GetDirectoryLimitsCommand";
import { GetSnapshotLimitsCommandInput, GetSnapshotLimitsCommandOutput } from "../commands/GetSnapshotLimitsCommand";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "../commands/ListCertificatesCommand";
import { ListIpRoutesCommandInput, ListIpRoutesCommandOutput } from "../commands/ListIpRoutesCommand";
import {
  ListLogSubscriptionsCommandInput,
  ListLogSubscriptionsCommandOutput,
} from "../commands/ListLogSubscriptionsCommand";
import {
  ListSchemaExtensionsCommandInput,
  ListSchemaExtensionsCommandOutput,
} from "../commands/ListSchemaExtensionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  RegisterCertificateCommandInput,
  RegisterCertificateCommandOutput,
} from "../commands/RegisterCertificateCommand";
import { RegisterEventTopicCommandInput, RegisterEventTopicCommandOutput } from "../commands/RegisterEventTopicCommand";
import {
  RejectSharedDirectoryCommandInput,
  RejectSharedDirectoryCommandOutput,
} from "../commands/RejectSharedDirectoryCommand";
import { RemoveIpRoutesCommandInput, RemoveIpRoutesCommandOutput } from "../commands/RemoveIpRoutesCommand";
import { RemoveRegionCommandInput, RemoveRegionCommandOutput } from "../commands/RemoveRegionCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "../commands/RemoveTagsFromResourceCommand";
import { ResetUserPasswordCommandInput, ResetUserPasswordCommandOutput } from "../commands/ResetUserPasswordCommand";
import {
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
} from "../commands/RestoreFromSnapshotCommand";
import { ShareDirectoryCommandInput, ShareDirectoryCommandOutput } from "../commands/ShareDirectoryCommand";
import {
  StartSchemaExtensionCommandInput,
  StartSchemaExtensionCommandOutput,
} from "../commands/StartSchemaExtensionCommand";
import { UnshareDirectoryCommandInput, UnshareDirectoryCommandOutput } from "../commands/UnshareDirectoryCommand";
import {
  UpdateConditionalForwarderCommandInput,
  UpdateConditionalForwarderCommandOutput,
} from "../commands/UpdateConditionalForwarderCommand";
import {
  UpdateNumberOfDomainControllersCommandInput,
  UpdateNumberOfDomainControllersCommandOutput,
} from "../commands/UpdateNumberOfDomainControllersCommand";
import { UpdateRadiusCommandInput, UpdateRadiusCommandOutput } from "../commands/UpdateRadiusCommand";
import { UpdateTrustCommandInput, UpdateTrustCommandOutput } from "../commands/UpdateTrustCommand";
import { VerifyTrustCommandInput, VerifyTrustCommandOutput } from "../commands/VerifyTrustCommand";
import {
  AcceptSharedDirectoryRequest,
  AcceptSharedDirectoryResult,
  AccessDeniedException,
  AddIpRoutesRequest,
  AddIpRoutesResult,
  AddRegionRequest,
  AddRegionResult,
  AddTagsToResourceRequest,
  AddTagsToResourceResult,
  Attribute,
  AuthenticationFailedException,
  CancelSchemaExtensionRequest,
  CancelSchemaExtensionResult,
  Certificate,
  CertificateAlreadyExistsException,
  CertificateDoesNotExistException,
  CertificateInUseException,
  CertificateInfo,
  CertificateLimitExceededException,
  ClientAuthenticationSettingInfo,
  ClientCertAuthSettings,
  ClientException,
  Computer,
  ConditionalForwarder,
  ConnectDirectoryRequest,
  ConnectDirectoryResult,
  CreateAliasRequest,
  CreateAliasResult,
  CreateComputerRequest,
  CreateComputerResult,
  CreateConditionalForwarderRequest,
  CreateConditionalForwarderResult,
  CreateDirectoryRequest,
  CreateDirectoryResult,
  CreateLogSubscriptionRequest,
  CreateLogSubscriptionResult,
  CreateMicrosoftADRequest,
  CreateMicrosoftADResult,
  CreateSnapshotRequest,
  CreateSnapshotResult,
  CreateTrustRequest,
  CreateTrustResult,
  DeleteConditionalForwarderRequest,
  DeleteConditionalForwarderResult,
  DeleteDirectoryRequest,
  DeleteDirectoryResult,
  DeleteLogSubscriptionRequest,
  DeleteLogSubscriptionResult,
  DeleteSnapshotRequest,
  DeleteSnapshotResult,
  DeleteTrustRequest,
  DeleteTrustResult,
  DeregisterCertificateRequest,
  DeregisterCertificateResult,
  DeregisterEventTopicRequest,
  DeregisterEventTopicResult,
  DescribeCertificateRequest,
  DescribeCertificateResult,
  DescribeClientAuthenticationSettingsRequest,
  DescribeClientAuthenticationSettingsResult,
  DescribeConditionalForwardersRequest,
  DescribeConditionalForwardersResult,
  DescribeDirectoriesRequest,
  DescribeDirectoriesResult,
  DescribeDomainControllersRequest,
  DescribeDomainControllersResult,
  DescribeEventTopicsRequest,
  DescribeEventTopicsResult,
  DescribeLDAPSSettingsRequest,
  DescribeLDAPSSettingsResult,
  DescribeRegionsRequest,
  DescribeRegionsResult,
  DescribeSharedDirectoriesRequest,
  DescribeSharedDirectoriesResult,
  DescribeSnapshotsRequest,
  DescribeSnapshotsResult,
  DescribeTrustsRequest,
  DescribeTrustsResult,
  DirectoryAlreadyInRegionException,
  DirectoryAlreadySharedException,
  DirectoryConnectSettings,
  DirectoryConnectSettingsDescription,
  DirectoryDescription,
  DirectoryDoesNotExistException,
  DirectoryLimitExceededException,
  DirectoryLimits,
  DirectoryNotSharedException,
  DirectoryUnavailableException,
  DirectoryVpcSettings,
  DirectoryVpcSettingsDescription,
  DisableClientAuthenticationRequest,
  DisableClientAuthenticationResult,
  DisableLDAPSRequest,
  DisableLDAPSResult,
  DisableRadiusRequest,
  DisableRadiusResult,
  DisableSsoRequest,
  DisableSsoResult,
  DomainController,
  DomainControllerLimitExceededException,
  EnableClientAuthenticationRequest,
  EnableClientAuthenticationResult,
  EnableLDAPSRequest,
  EnableLDAPSResult,
  EnableRadiusRequest,
  EnableRadiusResult,
  EnableSsoRequest,
  EnableSsoResult,
  EntityAlreadyExistsException,
  EntityDoesNotExistException,
  EventTopic,
  GetDirectoryLimitsRequest,
  GetDirectoryLimitsResult,
  GetSnapshotLimitsRequest,
  GetSnapshotLimitsResult,
  InsufficientPermissionsException,
  InvalidCertificateException,
  InvalidClientAuthStatusException,
  InvalidLDAPSStatusException,
  InvalidNextTokenException,
  InvalidParameterException,
  InvalidPasswordException,
  InvalidTargetException,
  IpRoute,
  IpRouteInfo,
  IpRouteLimitExceededException,
  LDAPSSettingInfo,
  ListCertificatesRequest,
  ListCertificatesResult,
  ListIpRoutesRequest,
  ListIpRoutesResult,
  ListLogSubscriptionsRequest,
  ListLogSubscriptionsResult,
  ListSchemaExtensionsRequest,
  ListSchemaExtensionsResult,
  ListTagsForResourceRequest,
  ListTagsForResourceResult,
  LogSubscription,
  NoAvailableCertificateException,
  OrganizationsException,
  OwnerDirectoryDescription,
  RadiusSettings,
  RegionDescription,
  RegionLimitExceededException,
  RegionsInfo,
  RegisterCertificateRequest,
  RegisterCertificateResult,
  RegisterEventTopicRequest,
  RegisterEventTopicResult,
  RejectSharedDirectoryRequest,
  RejectSharedDirectoryResult,
  RemoveIpRoutesRequest,
  RemoveIpRoutesResult,
  RemoveRegionRequest,
  RemoveRegionResult,
  RemoveTagsFromResourceRequest,
  RemoveTagsFromResourceResult,
  ResetUserPasswordRequest,
  ResetUserPasswordResult,
  RestoreFromSnapshotRequest,
  RestoreFromSnapshotResult,
  SchemaExtensionInfo,
  ServiceException,
  ShareDirectoryRequest,
  ShareDirectoryResult,
  ShareLimitExceededException,
  ShareTarget,
  SharedDirectory,
  Snapshot,
  SnapshotLimitExceededException,
  SnapshotLimits,
  StartSchemaExtensionRequest,
  StartSchemaExtensionResult,
  Tag,
  TagLimitExceededException,
  Trust,
  UnshareDirectoryRequest,
  UnshareDirectoryResult,
  UnshareTarget,
  UnsupportedOperationException,
  UpdateConditionalForwarderRequest,
  UpdateConditionalForwarderResult,
  UpdateNumberOfDomainControllersRequest,
  UpdateNumberOfDomainControllersResult,
  UpdateRadiusRequest,
  UpdateRadiusResult,
  UpdateTrustRequest,
  UpdateTrustResult,
  UserDoesNotExistException,
  VerifyTrustRequest,
  VerifyTrustResult,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1AcceptSharedDirectoryCommand = async (
  input: AcceptSharedDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.AcceptSharedDirectory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AcceptSharedDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddIpRoutesCommand = async (
  input: AddIpRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.AddIpRoutes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddIpRoutesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddRegionCommand = async (
  input: AddRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.AddRegion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddRegionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.AddTagsToResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsToResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelSchemaExtensionCommand = async (
  input: CancelSchemaExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CancelSchemaExtension",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelSchemaExtensionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ConnectDirectoryCommand = async (
  input: ConnectDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ConnectDirectory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ConnectDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateComputerCommand = async (
  input: CreateComputerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateComputer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateComputerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateConditionalForwarderCommand = async (
  input: CreateConditionalForwarderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateConditionalForwarder",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateConditionalForwarderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDirectoryCommand = async (
  input: CreateDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateDirectory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLogSubscriptionCommand = async (
  input: CreateLogSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateLogSubscription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLogSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateMicrosoftADCommand = async (
  input: CreateMicrosoftADCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateMicrosoftAD",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateMicrosoftADRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTrustCommand = async (
  input: CreateTrustCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateTrust",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTrustRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConditionalForwarderCommand = async (
  input: DeleteConditionalForwarderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DeleteConditionalForwarder",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConditionalForwarderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDirectoryCommand = async (
  input: DeleteDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DeleteDirectory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLogSubscriptionCommand = async (
  input: DeleteLogSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DeleteLogSubscription",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLogSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSnapshotCommand = async (
  input: DeleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DeleteSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTrustCommand = async (
  input: DeleteTrustCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DeleteTrust",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTrustRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterCertificateCommand = async (
  input: DeregisterCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DeregisterCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterEventTopicCommand = async (
  input: DeregisterEventTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DeregisterEventTopic",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterEventTopicRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCertificateCommand = async (
  input: DescribeCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeClientAuthenticationSettingsCommand = async (
  input: DescribeClientAuthenticationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeClientAuthenticationSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeClientAuthenticationSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConditionalForwardersCommand = async (
  input: DescribeConditionalForwardersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeConditionalForwarders",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConditionalForwardersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDirectoriesCommand = async (
  input: DescribeDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeDirectories",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDirectoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDomainControllersCommand = async (
  input: DescribeDomainControllersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeDomainControllers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDomainControllersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventTopicsCommand = async (
  input: DescribeEventTopicsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeEventTopics",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventTopicsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLDAPSSettingsCommand = async (
  input: DescribeLDAPSSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeLDAPSSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLDAPSSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRegionsCommand = async (
  input: DescribeRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeRegions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRegionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSharedDirectoriesCommand = async (
  input: DescribeSharedDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeSharedDirectories",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSharedDirectoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSnapshotsCommand = async (
  input: DescribeSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTrustsCommand = async (
  input: DescribeTrustsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeTrusts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTrustsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableClientAuthenticationCommand = async (
  input: DisableClientAuthenticationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DisableClientAuthentication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableClientAuthenticationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableLDAPSCommand = async (
  input: DisableLDAPSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DisableLDAPS",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableLDAPSRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableRadiusCommand = async (
  input: DisableRadiusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DisableRadius",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableRadiusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableSsoCommand = async (
  input: DisableSsoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DisableSso",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableSsoRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableClientAuthenticationCommand = async (
  input: EnableClientAuthenticationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.EnableClientAuthentication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableClientAuthenticationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableLDAPSCommand = async (
  input: EnableLDAPSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.EnableLDAPS",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableLDAPSRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableRadiusCommand = async (
  input: EnableRadiusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.EnableRadius",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableRadiusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableSsoCommand = async (
  input: EnableSsoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.EnableSso",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableSsoRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDirectoryLimitsCommand = async (
  input: GetDirectoryLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.GetDirectoryLimits",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDirectoryLimitsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSnapshotLimitsCommand = async (
  input: GetSnapshotLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.GetSnapshotLimits",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSnapshotLimitsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCertificatesCommand = async (
  input: ListCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ListCertificates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCertificatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListIpRoutesCommand = async (
  input: ListIpRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ListIpRoutes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListIpRoutesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLogSubscriptionsCommand = async (
  input: ListLogSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ListLogSubscriptions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListLogSubscriptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSchemaExtensionsCommand = async (
  input: ListSchemaExtensionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ListSchemaExtensions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSchemaExtensionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterCertificateCommand = async (
  input: RegisterCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.RegisterCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterEventTopicCommand = async (
  input: RegisterEventTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.RegisterEventTopic",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterEventTopicRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RejectSharedDirectoryCommand = async (
  input: RejectSharedDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.RejectSharedDirectory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RejectSharedDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveIpRoutesCommand = async (
  input: RemoveIpRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.RemoveIpRoutes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveIpRoutesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveRegionCommand = async (
  input: RemoveRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.RemoveRegion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveRegionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.RemoveTagsFromResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsFromResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResetUserPasswordCommand = async (
  input: ResetUserPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ResetUserPassword",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResetUserPasswordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RestoreFromSnapshotCommand = async (
  input: RestoreFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.RestoreFromSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RestoreFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ShareDirectoryCommand = async (
  input: ShareDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ShareDirectory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ShareDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartSchemaExtensionCommand = async (
  input: StartSchemaExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.StartSchemaExtension",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartSchemaExtensionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UnshareDirectoryCommand = async (
  input: UnshareDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.UnshareDirectory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UnshareDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateConditionalForwarderCommand = async (
  input: UpdateConditionalForwarderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.UpdateConditionalForwarder",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateConditionalForwarderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateNumberOfDomainControllersCommand = async (
  input: UpdateNumberOfDomainControllersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.UpdateNumberOfDomainControllers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateNumberOfDomainControllersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRadiusCommand = async (
  input: UpdateRadiusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.UpdateRadius",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRadiusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTrustCommand = async (
  input: UpdateTrustCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.UpdateTrust",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTrustRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1VerifyTrustCommand = async (
  input: VerifyTrustCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.VerifyTrust",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1VerifyTrustRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AcceptSharedDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptSharedDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AcceptSharedDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcceptSharedDirectoryResult(data, context);
  const response: AcceptSharedDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AcceptSharedDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptSharedDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryAlreadySharedException":
    case "com.amazonaws.directoryservice#DirectoryAlreadySharedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryAlreadySharedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1AddIpRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddIpRoutesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddIpRoutesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddIpRoutesResult(data, context);
  const response: AddIpRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddIpRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddIpRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IpRouteLimitExceededException":
    case "com.amazonaws.directoryservice#IpRouteLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1IpRouteLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1AddRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRegionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddRegionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddRegionResult(data, context);
  const response: AddRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddRegionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRegionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryAlreadyInRegionException":
    case "com.amazonaws.directoryservice#DirectoryAlreadyInRegionException":
      response = {
        ...(await deserializeAws_json1_1DirectoryAlreadyInRegionExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RegionLimitExceededException":
    case "com.amazonaws.directoryservice#RegionLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1RegionLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsToResourceResult(data, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagLimitExceededException":
    case "com.amazonaws.directoryservice#TagLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TagLimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CancelSchemaExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSchemaExtensionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelSchemaExtensionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelSchemaExtensionResult(data, context);
  const response: CancelSchemaExtensionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelSchemaExtensionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSchemaExtensionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ConnectDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConnectDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ConnectDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ConnectDirectoryResult(data, context);
  const response: ConnectDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ConnectDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConnectDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryLimitExceededException":
    case "com.amazonaws.directoryservice#DirectoryLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1DirectoryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAliasResult(data, context);
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateComputerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComputerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateComputerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateComputerResult(data, context);
  const response: CreateComputerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateComputerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComputerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthenticationFailedException":
    case "com.amazonaws.directoryservice#AuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1AuthenticationFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateConditionalForwarderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConditionalForwarderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateConditionalForwarderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateConditionalForwarderResult(data, context);
  const response: CreateConditionalForwarderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateConditionalForwarderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConditionalForwarderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDirectoryResult(data, context);
  const response: CreateDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryLimitExceededException":
    case "com.amazonaws.directoryservice#DirectoryLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1DirectoryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateLogSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLogSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLogSubscriptionResult(data, context);
  const response: CreateLogSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLogSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InsufficientPermissionsException":
    case "com.amazonaws.directoryservice#InsufficientPermissionsException":
      response = {
        ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateMicrosoftADCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMicrosoftADCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateMicrosoftADCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMicrosoftADResult(data, context);
  const response: CreateMicrosoftADCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateMicrosoftADCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMicrosoftADCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryLimitExceededException":
    case "com.amazonaws.directoryservice#DirectoryLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1DirectoryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSnapshotResult(data, context);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SnapshotLimitExceededException":
    case "com.amazonaws.directoryservice#SnapshotLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1SnapshotLimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateTrustCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTrustCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTrustResult(data, context);
  const response: CreateTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTrustCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteConditionalForwarderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConditionalForwarderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConditionalForwarderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteConditionalForwarderResult(data, context);
  const response: DeleteConditionalForwarderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConditionalForwarderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConditionalForwarderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDirectoryResult(data, context);
  const response: DeleteDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteLogSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLogSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLogSubscriptionResult(data, context);
  const response: DeleteLogSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLogSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSnapshotResult(data, context);
  const response: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteTrustCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTrustCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTrustResult(data, context);
  const response: DeleteTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTrustCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeregisterCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterCertificateResult(data, context);
  const response: DeregisterCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateDoesNotExistException":
    case "com.amazonaws.directoryservice#CertificateDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CertificateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CertificateInUseException":
    case "com.amazonaws.directoryservice#CertificateInUseException":
      response = {
        ...(await deserializeAws_json1_1CertificateInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeregisterEventTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterEventTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterEventTopicCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterEventTopicResult(data, context);
  const response: DeregisterEventTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterEventTopicCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterEventTopicCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCertificateResult(data, context);
  const response: DescribeCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateDoesNotExistException":
    case "com.amazonaws.directoryservice#CertificateDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1CertificateDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeClientAuthenticationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientAuthenticationSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeClientAuthenticationSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClientAuthenticationSettingsResult(data, context);
  const response: DescribeClientAuthenticationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeClientAuthenticationSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientAuthenticationSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeConditionalForwardersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConditionalForwardersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConditionalForwardersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConditionalForwardersResult(data, context);
  const response: DescribeConditionalForwardersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConditionalForwardersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConditionalForwardersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeDirectoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDirectoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDirectoriesResult(data, context);
  const response: DescribeDirectoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDirectoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeDomainControllersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainControllersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDomainControllersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDomainControllersResult(data, context);
  const response: DescribeDomainControllersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDomainControllersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainControllersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeEventTopicsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTopicsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventTopicsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventTopicsResult(data, context);
  const response: DescribeEventTopicsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventTopicsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTopicsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeLDAPSSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLDAPSSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLDAPSSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLDAPSSettingsResult(data, context);
  const response: DescribeLDAPSSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLDAPSSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLDAPSSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeRegionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRegionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRegionsResult(data, context);
  const response: DescribeRegionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRegionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeSharedDirectoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSharedDirectoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSharedDirectoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSharedDirectoriesResult(data, context);
  const response: DescribeSharedDirectoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSharedDirectoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSharedDirectoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSnapshotsResult(data, context);
  const response: DescribeSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DescribeTrustsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTrustsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTrustsResult(data, context);
  const response: DescribeTrustsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTrustsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DisableClientAuthenticationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableClientAuthenticationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableClientAuthenticationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableClientAuthenticationResult(data, context);
  const response: DisableClientAuthenticationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableClientAuthenticationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableClientAuthenticationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidClientAuthStatusException":
    case "com.amazonaws.directoryservice#InvalidClientAuthStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidClientAuthStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DisableLDAPSCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableLDAPSCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableLDAPSCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableLDAPSResult(data, context);
  const response: DisableLDAPSCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableLDAPSCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableLDAPSCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLDAPSStatusException":
    case "com.amazonaws.directoryservice#InvalidLDAPSStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidLDAPSStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DisableRadiusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRadiusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableRadiusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableRadiusResult(data, context);
  const response: DisableRadiusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableRadiusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRadiusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DisableSsoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSsoCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableSsoCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableSsoResult(data, context);
  const response: DisableSsoCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableSsoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSsoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthenticationFailedException":
    case "com.amazonaws.directoryservice#AuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1AuthenticationFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InsufficientPermissionsException":
    case "com.amazonaws.directoryservice#InsufficientPermissionsException":
      response = {
        ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1EnableClientAuthenticationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableClientAuthenticationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableClientAuthenticationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableClientAuthenticationResult(data, context);
  const response: EnableClientAuthenticationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableClientAuthenticationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableClientAuthenticationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidClientAuthStatusException":
    case "com.amazonaws.directoryservice#InvalidClientAuthStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidClientAuthStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoAvailableCertificateException":
    case "com.amazonaws.directoryservice#NoAvailableCertificateException":
      response = {
        ...(await deserializeAws_json1_1NoAvailableCertificateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1EnableLDAPSCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableLDAPSCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableLDAPSCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableLDAPSResult(data, context);
  const response: EnableLDAPSCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableLDAPSCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableLDAPSCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidLDAPSStatusException":
    case "com.amazonaws.directoryservice#InvalidLDAPSStatusException":
      response = {
        ...(await deserializeAws_json1_1InvalidLDAPSStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoAvailableCertificateException":
    case "com.amazonaws.directoryservice#NoAvailableCertificateException":
      response = {
        ...(await deserializeAws_json1_1NoAvailableCertificateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1EnableRadiusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRadiusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableRadiusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableRadiusResult(data, context);
  const response: EnableRadiusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableRadiusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRadiusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1EnableSsoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSsoCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableSsoCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableSsoResult(data, context);
  const response: EnableSsoCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableSsoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSsoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthenticationFailedException":
    case "com.amazonaws.directoryservice#AuthenticationFailedException":
      response = {
        ...(await deserializeAws_json1_1AuthenticationFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InsufficientPermissionsException":
    case "com.amazonaws.directoryservice#InsufficientPermissionsException":
      response = {
        ...(await deserializeAws_json1_1InsufficientPermissionsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDirectoryLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDirectoryLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDirectoryLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDirectoryLimitsResult(data, context);
  const response: GetDirectoryLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDirectoryLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDirectoryLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetSnapshotLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSnapshotLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSnapshotLimitsResult(data, context);
  const response: GetSnapshotLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSnapshotLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCertificatesResult(data, context);
  const response: ListCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListIpRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIpRoutesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListIpRoutesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListIpRoutesResult(data, context);
  const response: ListIpRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListIpRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIpRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListLogSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListLogSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLogSubscriptionsResult(data, context);
  const response: ListLogSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLogSubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogSubscriptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListSchemaExtensionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaExtensionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSchemaExtensionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSchemaExtensionsResult(data, context);
  const response: ListSchemaExtensionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSchemaExtensionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaExtensionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResult(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RegisterCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterCertificateResult(data, context);
  const response: RegisterCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateAlreadyExistsException":
    case "com.amazonaws.directoryservice#CertificateAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1CertificateAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CertificateLimitExceededException":
    case "com.amazonaws.directoryservice#CertificateLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1CertificateLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCertificateException":
    case "com.amazonaws.directoryservice#InvalidCertificateException":
      response = {
        ...(await deserializeAws_json1_1InvalidCertificateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RegisterEventTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterEventTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterEventTopicCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterEventTopicResult(data, context);
  const response: RegisterEventTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterEventTopicCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterEventTopicCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RejectSharedDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectSharedDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RejectSharedDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RejectSharedDirectoryResult(data, context);
  const response: RejectSharedDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RejectSharedDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectSharedDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryAlreadySharedException":
    case "com.amazonaws.directoryservice#DirectoryAlreadySharedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryAlreadySharedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RemoveIpRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveIpRoutesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveIpRoutesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveIpRoutesResult(data, context);
  const response: RemoveIpRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveIpRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveIpRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RemoveRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRegionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveRegionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveRegionResult(data, context);
  const response: RemoveRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveRegionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRegionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTagsFromResourceResult(data, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ResetUserPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetUserPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResetUserPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResetUserPasswordResult(data, context);
  const response: ResetUserPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResetUserPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetUserPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPasswordException":
    case "com.amazonaws.directoryservice#InvalidPasswordException":
      response = {
        ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UserDoesNotExistException":
    case "com.amazonaws.directoryservice#UserDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1UserDoesNotExistExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RestoreFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RestoreFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreFromSnapshotResult(data, context);
  const response: RestoreFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RestoreFromSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ShareDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ShareDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ShareDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ShareDirectoryResult(data, context);
  const response: ShareDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ShareDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ShareDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryAlreadySharedException":
    case "com.amazonaws.directoryservice#DirectoryAlreadySharedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryAlreadySharedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTargetException":
    case "com.amazonaws.directoryservice#InvalidTargetException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OrganizationsException":
    case "com.amazonaws.directoryservice#OrganizationsException":
      response = {
        ...(await deserializeAws_json1_1OrganizationsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ShareLimitExceededException":
    case "com.amazonaws.directoryservice#ShareLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1ShareLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StartSchemaExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaExtensionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartSchemaExtensionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartSchemaExtensionResult(data, context);
  const response: StartSchemaExtensionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartSchemaExtensionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaExtensionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "SnapshotLimitExceededException":
    case "com.amazonaws.directoryservice#SnapshotLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1SnapshotLimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UnshareDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnshareDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UnshareDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UnshareDirectoryResult(data, context);
  const response: UnshareDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UnshareDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnshareDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryNotSharedException":
    case "com.amazonaws.directoryservice#DirectoryNotSharedException":
      response = {
        ...(await deserializeAws_json1_1DirectoryNotSharedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidTargetException":
    case "com.amazonaws.directoryservice#InvalidTargetException":
      response = {
        ...(await deserializeAws_json1_1InvalidTargetExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateConditionalForwarderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConditionalForwarderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateConditionalForwarderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateConditionalForwarderResult(data, context);
  const response: UpdateConditionalForwarderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateConditionalForwarderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConditionalForwarderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateNumberOfDomainControllersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNumberOfDomainControllersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateNumberOfDomainControllersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNumberOfDomainControllersResult(data, context);
  const response: UpdateNumberOfDomainControllersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateNumberOfDomainControllersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNumberOfDomainControllersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DomainControllerLimitExceededException":
    case "com.amazonaws.directoryservice#DomainControllerLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1DomainControllerLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateRadiusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRadiusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRadiusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRadiusResult(data, context);
  const response: UpdateRadiusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRadiusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRadiusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateTrustCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrustCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateTrustCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTrustResult(data, context);
  const response: UpdateTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTrustCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrustCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1VerifyTrustCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyTrustCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1VerifyTrustCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1VerifyTrustResult(data, context);
  const response: VerifyTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1VerifyTrustCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyTrustCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      response = {
        ...(await deserializeAws_json1_1ClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1EntityDoesNotExistExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1AuthenticationFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthenticationFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AuthenticationFailedException(body, context);
  const contents: AuthenticationFailedException = {
    name: "AuthenticationFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CertificateAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CertificateAlreadyExistsException(body, context);
  const contents: CertificateAlreadyExistsException = {
    name: "CertificateAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CertificateDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CertificateDoesNotExistException(body, context);
  const contents: CertificateDoesNotExistException = {
    name: "CertificateDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CertificateInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CertificateInUseException(body, context);
  const contents: CertificateInUseException = {
    name: "CertificateInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CertificateLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CertificateLimitExceededException(body, context);
  const contents: CertificateLimitExceededException = {
    name: "CertificateLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ClientException(body, context);
  const contents: ClientException = {
    name: "ClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DirectoryAlreadyInRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryAlreadyInRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectoryAlreadyInRegionException(body, context);
  const contents: DirectoryAlreadyInRegionException = {
    name: "DirectoryAlreadyInRegionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DirectoryAlreadySharedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryAlreadySharedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectoryAlreadySharedException(body, context);
  const contents: DirectoryAlreadySharedException = {
    name: "DirectoryAlreadySharedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DirectoryDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectoryDoesNotExistException(body, context);
  const contents: DirectoryDoesNotExistException = {
    name: "DirectoryDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DirectoryLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectoryLimitExceededException(body, context);
  const contents: DirectoryLimitExceededException = {
    name: "DirectoryLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DirectoryNotSharedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryNotSharedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectoryNotSharedException(body, context);
  const contents: DirectoryNotSharedException = {
    name: "DirectoryNotSharedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DirectoryUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectoryUnavailableException(body, context);
  const contents: DirectoryUnavailableException = {
    name: "DirectoryUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DomainControllerLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DomainControllerLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DomainControllerLimitExceededException(body, context);
  const contents: DomainControllerLimitExceededException = {
    name: "DomainControllerLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EntityAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntityAlreadyExistsException(body, context);
  const contents: EntityAlreadyExistsException = {
    name: "EntityAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1EntityDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntityDoesNotExistException(body, context);
  const contents: EntityDoesNotExistException = {
    name: "EntityDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InsufficientPermissionsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientPermissionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientPermissionsException(body, context);
  const contents: InsufficientPermissionsException = {
    name: "InsufficientPermissionsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidCertificateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCertificateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCertificateException(body, context);
  const contents: InvalidCertificateException = {
    name: "InvalidCertificateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidClientAuthStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientAuthStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidClientAuthStatusException(body, context);
  const contents: InvalidClientAuthStatusException = {
    name: "InvalidClientAuthStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidLDAPSStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLDAPSStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLDAPSStatusException(body, context);
  const contents: InvalidLDAPSStatusException = {
    name: "InvalidLDAPSStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidPasswordExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPasswordException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPasswordException(body, context);
  const contents: InvalidPasswordException = {
    name: "InvalidPasswordException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidTargetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTargetException(body, context);
  const contents: InvalidTargetException = {
    name: "InvalidTargetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IpRouteLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IpRouteLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IpRouteLimitExceededException(body, context);
  const contents: IpRouteLimitExceededException = {
    name: "IpRouteLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NoAvailableCertificateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoAvailableCertificateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoAvailableCertificateException(body, context);
  const contents: NoAvailableCertificateException = {
    name: "NoAvailableCertificateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OrganizationsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationsException(body, context);
  const contents: OrganizationsException = {
    name: "OrganizationsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RegionLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RegionLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RegionLimitExceededException(body, context);
  const contents: RegionLimitExceededException = {
    name: "RegionLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceException(body, context);
  const contents: ServiceException = {
    name: "ServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ShareLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ShareLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ShareLimitExceededException(body, context);
  const contents: ShareLimitExceededException = {
    name: "ShareLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1SnapshotLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SnapshotLimitExceededException(body, context);
  const contents: SnapshotLimitExceededException = {
    name: "SnapshotLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TagLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagLimitExceededException(body, context);
  const contents: TagLimitExceededException = {
    name: "TagLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedOperationException(body, context);
  const contents: UnsupportedOperationException = {
    name: "UnsupportedOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UserDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UserDoesNotExistException(body, context);
  const contents: UserDoesNotExistException = {
    name: "UserDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AcceptSharedDirectoryRequest = (
  input: AcceptSharedDirectoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SharedDirectoryId !== undefined &&
      input.SharedDirectoryId !== null && { SharedDirectoryId: input.SharedDirectoryId }),
  };
};

const serializeAws_json1_1AddIpRoutesRequest = (input: AddIpRoutesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.IpRoutes !== undefined &&
      input.IpRoutes !== null && { IpRoutes: serializeAws_json1_1IpRoutes(input.IpRoutes, context) }),
    ...(input.UpdateSecurityGroupForDirectoryControllers !== undefined &&
      input.UpdateSecurityGroupForDirectoryControllers !== null && {
        UpdateSecurityGroupForDirectoryControllers: input.UpdateSecurityGroupForDirectoryControllers,
      }),
  };
};

const serializeAws_json1_1AddRegionRequest = (input: AddRegionRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }),
    ...(input.VPCSettings !== undefined &&
      input.VPCSettings !== null && {
        VPCSettings: serializeAws_json1_1DirectoryVpcSettings(input.VPCSettings, context),
      }),
  };
};

const serializeAws_json1_1AddTagsToResourceRequest = (
  input: AddTagsToResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1Attribute = (input: Attribute, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1Attributes = (input: Attribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Attribute(entry, context);
    });
};

const serializeAws_json1_1CancelSchemaExtensionRequest = (
  input: CancelSchemaExtensionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.SchemaExtensionId !== undefined &&
      input.SchemaExtensionId !== null && { SchemaExtensionId: input.SchemaExtensionId }),
  };
};

const serializeAws_json1_1CidrIps = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ClientCertAuthSettings = (input: ClientCertAuthSettings, context: __SerdeContext): any => {
  return {
    ...(input.OCSPUrl !== undefined && input.OCSPUrl !== null && { OCSPUrl: input.OCSPUrl }),
  };
};

const serializeAws_json1_1ConnectDirectoryRequest = (input: ConnectDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectSettings !== undefined &&
      input.ConnectSettings !== null && {
        ConnectSettings: serializeAws_json1_1DirectoryConnectSettings(input.ConnectSettings, context),
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    ...(input.ShortName !== undefined && input.ShortName !== null && { ShortName: input.ShortName }),
    ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateAliasRequest = (input: CreateAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.Alias !== undefined && input.Alias !== null && { Alias: input.Alias }),
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1CreateComputerRequest = (input: CreateComputerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ComputerAttributes !== undefined &&
      input.ComputerAttributes !== null && {
        ComputerAttributes: serializeAws_json1_1Attributes(input.ComputerAttributes, context),
      }),
    ...(input.ComputerName !== undefined && input.ComputerName !== null && { ComputerName: input.ComputerName }),
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.OrganizationalUnitDistinguishedName !== undefined &&
      input.OrganizationalUnitDistinguishedName !== null && {
        OrganizationalUnitDistinguishedName: input.OrganizationalUnitDistinguishedName,
      }),
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
  };
};

const serializeAws_json1_1CreateConditionalForwarderRequest = (
  input: CreateConditionalForwarderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.DnsIpAddrs !== undefined &&
      input.DnsIpAddrs !== null && { DnsIpAddrs: serializeAws_json1_1DnsIpAddrs(input.DnsIpAddrs, context) }),
    ...(input.RemoteDomainName !== undefined &&
      input.RemoteDomainName !== null && { RemoteDomainName: input.RemoteDomainName }),
  };
};

const serializeAws_json1_1CreateDirectoryRequest = (input: CreateDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    ...(input.ShortName !== undefined && input.ShortName !== null && { ShortName: input.ShortName }),
    ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VpcSettings !== undefined &&
      input.VpcSettings !== null && {
        VpcSettings: serializeAws_json1_1DirectoryVpcSettings(input.VpcSettings, context),
      }),
  };
};

const serializeAws_json1_1CreateLogSubscriptionRequest = (
  input: CreateLogSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.LogGroupName !== undefined && input.LogGroupName !== null && { LogGroupName: input.LogGroupName }),
  };
};

const serializeAws_json1_1CreateMicrosoftADRequest = (
  input: CreateMicrosoftADRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Edition !== undefined && input.Edition !== null && { Edition: input.Edition }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    ...(input.ShortName !== undefined && input.ShortName !== null && { ShortName: input.ShortName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VpcSettings !== undefined &&
      input.VpcSettings !== null && {
        VpcSettings: serializeAws_json1_1DirectoryVpcSettings(input.VpcSettings, context),
      }),
  };
};

const serializeAws_json1_1CreateSnapshotRequest = (input: CreateSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateTrustRequest = (input: CreateTrustRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConditionalForwarderIpAddrs !== undefined &&
      input.ConditionalForwarderIpAddrs !== null && {
        ConditionalForwarderIpAddrs: serializeAws_json1_1DnsIpAddrs(input.ConditionalForwarderIpAddrs, context),
      }),
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.RemoteDomainName !== undefined &&
      input.RemoteDomainName !== null && { RemoteDomainName: input.RemoteDomainName }),
    ...(input.SelectiveAuth !== undefined && input.SelectiveAuth !== null && { SelectiveAuth: input.SelectiveAuth }),
    ...(input.TrustDirection !== undefined &&
      input.TrustDirection !== null && { TrustDirection: input.TrustDirection }),
    ...(input.TrustPassword !== undefined && input.TrustPassword !== null && { TrustPassword: input.TrustPassword }),
    ...(input.TrustType !== undefined && input.TrustType !== null && { TrustType: input.TrustType }),
  };
};

const serializeAws_json1_1DeleteConditionalForwarderRequest = (
  input: DeleteConditionalForwarderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.RemoteDomainName !== undefined &&
      input.RemoteDomainName !== null && { RemoteDomainName: input.RemoteDomainName }),
  };
};

const serializeAws_json1_1DeleteDirectoryRequest = (input: DeleteDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1DeleteLogSubscriptionRequest = (
  input: DeleteLogSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1DeleteSnapshotRequest = (input: DeleteSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId }),
  };
};

const serializeAws_json1_1DeleteTrustRequest = (input: DeleteTrustRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeleteAssociatedConditionalForwarder !== undefined &&
      input.DeleteAssociatedConditionalForwarder !== null && {
        DeleteAssociatedConditionalForwarder: input.DeleteAssociatedConditionalForwarder,
      }),
    ...(input.TrustId !== undefined && input.TrustId !== null && { TrustId: input.TrustId }),
  };
};

const serializeAws_json1_1DeregisterCertificateRequest = (
  input: DeregisterCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateId !== undefined && input.CertificateId !== null && { CertificateId: input.CertificateId }),
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1DeregisterEventTopicRequest = (
  input: DeregisterEventTopicRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.TopicName !== undefined && input.TopicName !== null && { TopicName: input.TopicName }),
  };
};

const serializeAws_json1_1DescribeCertificateRequest = (
  input: DescribeCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateId !== undefined && input.CertificateId !== null && { CertificateId: input.CertificateId }),
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1DescribeClientAuthenticationSettingsRequest = (
  input: DescribeClientAuthenticationSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DescribeConditionalForwardersRequest = (
  input: DescribeConditionalForwardersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.RemoteDomainNames !== undefined &&
      input.RemoteDomainNames !== null && {
        RemoteDomainNames: serializeAws_json1_1RemoteDomainNames(input.RemoteDomainNames, context),
      }),
  };
};

const serializeAws_json1_1DescribeDirectoriesRequest = (
  input: DescribeDirectoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryIds !== undefined &&
      input.DirectoryIds !== null && { DirectoryIds: serializeAws_json1_1DirectoryIds(input.DirectoryIds, context) }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeDomainControllersRequest = (
  input: DescribeDomainControllersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.DomainControllerIds !== undefined &&
      input.DomainControllerIds !== null && {
        DomainControllerIds: serializeAws_json1_1DomainControllerIds(input.DomainControllerIds, context),
      }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeEventTopicsRequest = (
  input: DescribeEventTopicsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.TopicNames !== undefined &&
      input.TopicNames !== null && { TopicNames: serializeAws_json1_1TopicNames(input.TopicNames, context) }),
  };
};

const serializeAws_json1_1DescribeLDAPSSettingsRequest = (
  input: DescribeLDAPSSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DescribeRegionsRequest = (input: DescribeRegionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }),
  };
};

const serializeAws_json1_1DescribeSharedDirectoriesRequest = (
  input: DescribeSharedDirectoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.OwnerDirectoryId !== undefined &&
      input.OwnerDirectoryId !== null && { OwnerDirectoryId: input.OwnerDirectoryId }),
    ...(input.SharedDirectoryIds !== undefined &&
      input.SharedDirectoryIds !== null && {
        SharedDirectoryIds: serializeAws_json1_1DirectoryIds(input.SharedDirectoryIds, context),
      }),
  };
};

const serializeAws_json1_1DescribeSnapshotsRequest = (
  input: DescribeSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.SnapshotIds !== undefined &&
      input.SnapshotIds !== null && { SnapshotIds: serializeAws_json1_1SnapshotIds(input.SnapshotIds, context) }),
  };
};

const serializeAws_json1_1DescribeTrustsRequest = (input: DescribeTrustsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TrustIds !== undefined &&
      input.TrustIds !== null && { TrustIds: serializeAws_json1_1TrustIds(input.TrustIds, context) }),
  };
};

const serializeAws_json1_1DirectoryConnectSettings = (
  input: DirectoryConnectSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomerDnsIps !== undefined &&
      input.CustomerDnsIps !== null && {
        CustomerDnsIps: serializeAws_json1_1DnsIpAddrs(input.CustomerDnsIps, context),
      }),
    ...(input.CustomerUserName !== undefined &&
      input.CustomerUserName !== null && { CustomerUserName: input.CustomerUserName }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const serializeAws_json1_1DirectoryIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DirectoryVpcSettings = (input: DirectoryVpcSettings, context: __SerdeContext): any => {
  return {
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    ...(input.VpcId !== undefined && input.VpcId !== null && { VpcId: input.VpcId }),
  };
};

const serializeAws_json1_1DisableClientAuthenticationRequest = (
  input: DisableClientAuthenticationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DisableLDAPSRequest = (input: DisableLDAPSRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DisableRadiusRequest = (input: DisableRadiusRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1DisableSsoRequest = (input: DisableSsoRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DnsIpAddrs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DomainControllerIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1EnableClientAuthenticationRequest = (
  input: EnableClientAuthenticationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1EnableLDAPSRequest = (input: EnableLDAPSRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1EnableRadiusRequest = (input: EnableRadiusRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.RadiusSettings !== undefined &&
      input.RadiusSettings !== null && {
        RadiusSettings: serializeAws_json1_1RadiusSettings(input.RadiusSettings, context),
      }),
  };
};

const serializeAws_json1_1EnableSsoRequest = (input: EnableSsoRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1GetDirectoryLimitsRequest = (
  input: GetDirectoryLimitsRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetSnapshotLimitsRequest = (
  input: GetSnapshotLimitsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1IpRoute = (input: IpRoute, context: __SerdeContext): any => {
  return {
    ...(input.CidrIp !== undefined && input.CidrIp !== null && { CidrIp: input.CidrIp }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
  };
};

const serializeAws_json1_1IpRoutes = (input: IpRoute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1IpRoute(entry, context);
    });
};

const serializeAws_json1_1ListCertificatesRequest = (input: ListCertificatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListIpRoutesRequest = (input: ListIpRoutesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListLogSubscriptionsRequest = (
  input: ListLogSubscriptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListSchemaExtensionsRequest = (
  input: ListSchemaExtensionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1RadiusSettings = (input: RadiusSettings, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationProtocol !== undefined &&
      input.AuthenticationProtocol !== null && { AuthenticationProtocol: input.AuthenticationProtocol }),
    ...(input.DisplayLabel !== undefined && input.DisplayLabel !== null && { DisplayLabel: input.DisplayLabel }),
    ...(input.RadiusPort !== undefined && input.RadiusPort !== null && { RadiusPort: input.RadiusPort }),
    ...(input.RadiusRetries !== undefined && input.RadiusRetries !== null && { RadiusRetries: input.RadiusRetries }),
    ...(input.RadiusServers !== undefined &&
      input.RadiusServers !== null && { RadiusServers: serializeAws_json1_1Servers(input.RadiusServers, context) }),
    ...(input.RadiusTimeout !== undefined && input.RadiusTimeout !== null && { RadiusTimeout: input.RadiusTimeout }),
    ...(input.SharedSecret !== undefined && input.SharedSecret !== null && { SharedSecret: input.SharedSecret }),
    ...(input.UseSameUsername !== undefined &&
      input.UseSameUsername !== null && { UseSameUsername: input.UseSameUsername }),
  };
};

const serializeAws_json1_1RegisterCertificateRequest = (
  input: RegisterCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateData !== undefined &&
      input.CertificateData !== null && { CertificateData: input.CertificateData }),
    ...(input.ClientCertAuthSettings !== undefined &&
      input.ClientCertAuthSettings !== null && {
        ClientCertAuthSettings: serializeAws_json1_1ClientCertAuthSettings(input.ClientCertAuthSettings, context),
      }),
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1RegisterEventTopicRequest = (
  input: RegisterEventTopicRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.TopicName !== undefined && input.TopicName !== null && { TopicName: input.TopicName }),
  };
};

const serializeAws_json1_1RejectSharedDirectoryRequest = (
  input: RejectSharedDirectoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SharedDirectoryId !== undefined &&
      input.SharedDirectoryId !== null && { SharedDirectoryId: input.SharedDirectoryId }),
  };
};

const serializeAws_json1_1RemoteDomainNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1RemoveIpRoutesRequest = (input: RemoveIpRoutesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CidrIps !== undefined &&
      input.CidrIps !== null && { CidrIps: serializeAws_json1_1CidrIps(input.CidrIps, context) }),
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1RemoveRegionRequest = (input: RemoveRegionRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1RemoveTagsFromResourceRequest = (
  input: RemoveTagsFromResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1ResetUserPasswordRequest = (
  input: ResetUserPasswordRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.NewPassword !== undefined && input.NewPassword !== null && { NewPassword: input.NewPassword }),
    ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1RestoreFromSnapshotRequest = (
  input: RestoreFromSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId }),
  };
};

const serializeAws_json1_1Servers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ShareDirectoryRequest = (input: ShareDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.ShareMethod !== undefined && input.ShareMethod !== null && { ShareMethod: input.ShareMethod }),
    ...(input.ShareNotes !== undefined && input.ShareNotes !== null && { ShareNotes: input.ShareNotes }),
    ...(input.ShareTarget !== undefined &&
      input.ShareTarget !== null && { ShareTarget: serializeAws_json1_1ShareTarget(input.ShareTarget, context) }),
  };
};

const serializeAws_json1_1ShareTarget = (input: ShareTarget, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1SnapshotIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1StartSchemaExtensionRequest = (
  input: StartSchemaExtensionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreateSnapshotBeforeSchemaExtension !== undefined &&
      input.CreateSnapshotBeforeSchemaExtension !== null && {
        CreateSnapshotBeforeSchemaExtension: input.CreateSnapshotBeforeSchemaExtension,
      }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.LdifContent !== undefined && input.LdifContent !== null && { LdifContent: input.LdifContent }),
  };
};

const serializeAws_json1_1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TopicNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TrustIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1UnshareDirectoryRequest = (input: UnshareDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.UnshareTarget !== undefined &&
      input.UnshareTarget !== null && {
        UnshareTarget: serializeAws_json1_1UnshareTarget(input.UnshareTarget, context),
      }),
  };
};

const serializeAws_json1_1UnshareTarget = (input: UnshareTarget, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1UpdateConditionalForwarderRequest = (
  input: UpdateConditionalForwarderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.DnsIpAddrs !== undefined &&
      input.DnsIpAddrs !== null && { DnsIpAddrs: serializeAws_json1_1DnsIpAddrs(input.DnsIpAddrs, context) }),
    ...(input.RemoteDomainName !== undefined &&
      input.RemoteDomainName !== null && { RemoteDomainName: input.RemoteDomainName }),
  };
};

const serializeAws_json1_1UpdateNumberOfDomainControllersRequest = (
  input: UpdateNumberOfDomainControllersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DesiredNumber !== undefined && input.DesiredNumber !== null && { DesiredNumber: input.DesiredNumber }),
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1UpdateRadiusRequest = (input: UpdateRadiusRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    ...(input.RadiusSettings !== undefined &&
      input.RadiusSettings !== null && {
        RadiusSettings: serializeAws_json1_1RadiusSettings(input.RadiusSettings, context),
      }),
  };
};

const serializeAws_json1_1UpdateTrustRequest = (input: UpdateTrustRequest, context: __SerdeContext): any => {
  return {
    ...(input.SelectiveAuth !== undefined && input.SelectiveAuth !== null && { SelectiveAuth: input.SelectiveAuth }),
    ...(input.TrustId !== undefined && input.TrustId !== null && { TrustId: input.TrustId }),
  };
};

const serializeAws_json1_1VerifyTrustRequest = (input: VerifyTrustRequest, context: __SerdeContext): any => {
  return {
    ...(input.TrustId !== undefined && input.TrustId !== null && { TrustId: input.TrustId }),
  };
};

const deserializeAws_json1_1AcceptSharedDirectoryResult = (
  output: any,
  context: __SerdeContext
): AcceptSharedDirectoryResult => {
  return {
    SharedDirectory:
      output.SharedDirectory !== undefined && output.SharedDirectory !== null
        ? deserializeAws_json1_1SharedDirectory(output.SharedDirectory, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1AddIpRoutesResult = (output: any, context: __SerdeContext): AddIpRoutesResult => {
  return {} as any;
};

const deserializeAws_json1_1AdditionalRegions = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1AddRegionResult = (output: any, context: __SerdeContext): AddRegionResult => {
  return {} as any;
};

const deserializeAws_json1_1AddTagsToResourceResult = (
  output: any,
  context: __SerdeContext
): AddTagsToResourceResult => {
  return {} as any;
};

const deserializeAws_json1_1Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1Attributes = (output: any, context: __SerdeContext): Attribute[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Attribute(entry, context);
    });
};

const deserializeAws_json1_1AuthenticationFailedException = (
  output: any,
  context: __SerdeContext
): AuthenticationFailedException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1AvailabilityZones = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1CancelSchemaExtensionResult = (
  output: any,
  context: __SerdeContext
): CancelSchemaExtensionResult => {
  return {} as any;
};

const deserializeAws_json1_1Certificate = (output: any, context: __SerdeContext): Certificate => {
  return {
    CertificateId: __expectString(output.CertificateId),
    ClientCertAuthSettings:
      output.ClientCertAuthSettings !== undefined && output.ClientCertAuthSettings !== null
        ? deserializeAws_json1_1ClientCertAuthSettings(output.ClientCertAuthSettings, context)
        : undefined,
    CommonName: __expectString(output.CommonName),
    ExpiryDateTime:
      output.ExpiryDateTime !== undefined && output.ExpiryDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpiryDateTime)))
        : undefined,
    RegisteredDateTime:
      output.RegisteredDateTime !== undefined && output.RegisteredDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RegisteredDateTime)))
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1CertificateAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): CertificateAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1CertificateDoesNotExistException = (
  output: any,
  context: __SerdeContext
): CertificateDoesNotExistException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1CertificateInfo = (output: any, context: __SerdeContext): CertificateInfo => {
  return {
    CertificateId: __expectString(output.CertificateId),
    CommonName: __expectString(output.CommonName),
    ExpiryDateTime:
      output.ExpiryDateTime !== undefined && output.ExpiryDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpiryDateTime)))
        : undefined,
    State: __expectString(output.State),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1CertificateInUseException = (
  output: any,
  context: __SerdeContext
): CertificateInUseException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1CertificateLimitExceededException = (
  output: any,
  context: __SerdeContext
): CertificateLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1CertificatesInfo = (output: any, context: __SerdeContext): CertificateInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CertificateInfo(entry, context);
    });
};

const deserializeAws_json1_1ClientAuthenticationSettingInfo = (
  output: any,
  context: __SerdeContext
): ClientAuthenticationSettingInfo => {
  return {
    LastUpdatedDateTime:
      output.LastUpdatedDateTime !== undefined && output.LastUpdatedDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedDateTime)))
        : undefined,
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ClientAuthenticationSettingsInfo = (
  output: any,
  context: __SerdeContext
): ClientAuthenticationSettingInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ClientAuthenticationSettingInfo(entry, context);
    });
};

const deserializeAws_json1_1ClientCertAuthSettings = (output: any, context: __SerdeContext): ClientCertAuthSettings => {
  return {
    OCSPUrl: __expectString(output.OCSPUrl),
  } as any;
};

const deserializeAws_json1_1ClientException = (output: any, context: __SerdeContext): ClientException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1Computer = (output: any, context: __SerdeContext): Computer => {
  return {
    ComputerAttributes:
      output.ComputerAttributes !== undefined && output.ComputerAttributes !== null
        ? deserializeAws_json1_1Attributes(output.ComputerAttributes, context)
        : undefined,
    ComputerId: __expectString(output.ComputerId),
    ComputerName: __expectString(output.ComputerName),
  } as any;
};

const deserializeAws_json1_1ConditionalForwarder = (output: any, context: __SerdeContext): ConditionalForwarder => {
  return {
    DnsIpAddrs:
      output.DnsIpAddrs !== undefined && output.DnsIpAddrs !== null
        ? deserializeAws_json1_1DnsIpAddrs(output.DnsIpAddrs, context)
        : undefined,
    RemoteDomainName: __expectString(output.RemoteDomainName),
    ReplicationScope: __expectString(output.ReplicationScope),
  } as any;
};

const deserializeAws_json1_1ConditionalForwarders = (output: any, context: __SerdeContext): ConditionalForwarder[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConditionalForwarder(entry, context);
    });
};

const deserializeAws_json1_1ConnectDirectoryResult = (output: any, context: __SerdeContext): ConnectDirectoryResult => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
  } as any;
};

const deserializeAws_json1_1CreateAliasResult = (output: any, context: __SerdeContext): CreateAliasResult => {
  return {
    Alias: __expectString(output.Alias),
    DirectoryId: __expectString(output.DirectoryId),
  } as any;
};

const deserializeAws_json1_1CreateComputerResult = (output: any, context: __SerdeContext): CreateComputerResult => {
  return {
    Computer:
      output.Computer !== undefined && output.Computer !== null
        ? deserializeAws_json1_1Computer(output.Computer, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateConditionalForwarderResult = (
  output: any,
  context: __SerdeContext
): CreateConditionalForwarderResult => {
  return {} as any;
};

const deserializeAws_json1_1CreateDirectoryResult = (output: any, context: __SerdeContext): CreateDirectoryResult => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
  } as any;
};

const deserializeAws_json1_1CreateLogSubscriptionResult = (
  output: any,
  context: __SerdeContext
): CreateLogSubscriptionResult => {
  return {} as any;
};

const deserializeAws_json1_1CreateMicrosoftADResult = (
  output: any,
  context: __SerdeContext
): CreateMicrosoftADResult => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
  } as any;
};

const deserializeAws_json1_1CreateSnapshotResult = (output: any, context: __SerdeContext): CreateSnapshotResult => {
  return {
    SnapshotId: __expectString(output.SnapshotId),
  } as any;
};

const deserializeAws_json1_1CreateTrustResult = (output: any, context: __SerdeContext): CreateTrustResult => {
  return {
    TrustId: __expectString(output.TrustId),
  } as any;
};

const deserializeAws_json1_1DeleteConditionalForwarderResult = (
  output: any,
  context: __SerdeContext
): DeleteConditionalForwarderResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteDirectoryResult = (output: any, context: __SerdeContext): DeleteDirectoryResult => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
  } as any;
};

const deserializeAws_json1_1DeleteLogSubscriptionResult = (
  output: any,
  context: __SerdeContext
): DeleteLogSubscriptionResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteSnapshotResult = (output: any, context: __SerdeContext): DeleteSnapshotResult => {
  return {
    SnapshotId: __expectString(output.SnapshotId),
  } as any;
};

const deserializeAws_json1_1DeleteTrustResult = (output: any, context: __SerdeContext): DeleteTrustResult => {
  return {
    TrustId: __expectString(output.TrustId),
  } as any;
};

const deserializeAws_json1_1DeregisterCertificateResult = (
  output: any,
  context: __SerdeContext
): DeregisterCertificateResult => {
  return {} as any;
};

const deserializeAws_json1_1DeregisterEventTopicResult = (
  output: any,
  context: __SerdeContext
): DeregisterEventTopicResult => {
  return {} as any;
};

const deserializeAws_json1_1DescribeCertificateResult = (
  output: any,
  context: __SerdeContext
): DescribeCertificateResult => {
  return {
    Certificate:
      output.Certificate !== undefined && output.Certificate !== null
        ? deserializeAws_json1_1Certificate(output.Certificate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeClientAuthenticationSettingsResult = (
  output: any,
  context: __SerdeContext
): DescribeClientAuthenticationSettingsResult => {
  return {
    ClientAuthenticationSettingsInfo:
      output.ClientAuthenticationSettingsInfo !== undefined && output.ClientAuthenticationSettingsInfo !== null
        ? deserializeAws_json1_1ClientAuthenticationSettingsInfo(output.ClientAuthenticationSettingsInfo, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeConditionalForwardersResult = (
  output: any,
  context: __SerdeContext
): DescribeConditionalForwardersResult => {
  return {
    ConditionalForwarders:
      output.ConditionalForwarders !== undefined && output.ConditionalForwarders !== null
        ? deserializeAws_json1_1ConditionalForwarders(output.ConditionalForwarders, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDirectoriesResult = (
  output: any,
  context: __SerdeContext
): DescribeDirectoriesResult => {
  return {
    DirectoryDescriptions:
      output.DirectoryDescriptions !== undefined && output.DirectoryDescriptions !== null
        ? deserializeAws_json1_1DirectoryDescriptions(output.DirectoryDescriptions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeDomainControllersResult = (
  output: any,
  context: __SerdeContext
): DescribeDomainControllersResult => {
  return {
    DomainControllers:
      output.DomainControllers !== undefined && output.DomainControllers !== null
        ? deserializeAws_json1_1DomainControllers(output.DomainControllers, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeEventTopicsResult = (
  output: any,
  context: __SerdeContext
): DescribeEventTopicsResult => {
  return {
    EventTopics:
      output.EventTopics !== undefined && output.EventTopics !== null
        ? deserializeAws_json1_1EventTopics(output.EventTopics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeLDAPSSettingsResult = (
  output: any,
  context: __SerdeContext
): DescribeLDAPSSettingsResult => {
  return {
    LDAPSSettingsInfo:
      output.LDAPSSettingsInfo !== undefined && output.LDAPSSettingsInfo !== null
        ? deserializeAws_json1_1LDAPSSettingsInfo(output.LDAPSSettingsInfo, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeRegionsResult = (output: any, context: __SerdeContext): DescribeRegionsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    RegionsDescription:
      output.RegionsDescription !== undefined && output.RegionsDescription !== null
        ? deserializeAws_json1_1RegionsDescription(output.RegionsDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSharedDirectoriesResult = (
  output: any,
  context: __SerdeContext
): DescribeSharedDirectoriesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    SharedDirectories:
      output.SharedDirectories !== undefined && output.SharedDirectories !== null
        ? deserializeAws_json1_1SharedDirectories(output.SharedDirectories, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSnapshotsResult = (
  output: any,
  context: __SerdeContext
): DescribeSnapshotsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Snapshots:
      output.Snapshots !== undefined && output.Snapshots !== null
        ? deserializeAws_json1_1Snapshots(output.Snapshots, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTrustsResult = (output: any, context: __SerdeContext): DescribeTrustsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Trusts:
      output.Trusts !== undefined && output.Trusts !== null
        ? deserializeAws_json1_1Trusts(output.Trusts, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryAlreadyInRegionException = (
  output: any,
  context: __SerdeContext
): DirectoryAlreadyInRegionException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1DirectoryAlreadySharedException = (
  output: any,
  context: __SerdeContext
): DirectoryAlreadySharedException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1DirectoryConnectSettingsDescription = (
  output: any,
  context: __SerdeContext
): DirectoryConnectSettingsDescription => {
  return {
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_json1_1AvailabilityZones(output.AvailabilityZones, context)
        : undefined,
    ConnectIps:
      output.ConnectIps !== undefined && output.ConnectIps !== null
        ? deserializeAws_json1_1IpAddrs(output.ConnectIps, context)
        : undefined,
    CustomerUserName: __expectString(output.CustomerUserName),
    SecurityGroupId: __expectString(output.SecurityGroupId),
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1DirectoryDescription = (output: any, context: __SerdeContext): DirectoryDescription => {
  return {
    AccessUrl: __expectString(output.AccessUrl),
    Alias: __expectString(output.Alias),
    ConnectSettings:
      output.ConnectSettings !== undefined && output.ConnectSettings !== null
        ? deserializeAws_json1_1DirectoryConnectSettingsDescription(output.ConnectSettings, context)
        : undefined,
    Description: __expectString(output.Description),
    DesiredNumberOfDomainControllers: __expectInt32(output.DesiredNumberOfDomainControllers),
    DirectoryId: __expectString(output.DirectoryId),
    DnsIpAddrs:
      output.DnsIpAddrs !== undefined && output.DnsIpAddrs !== null
        ? deserializeAws_json1_1DnsIpAddrs(output.DnsIpAddrs, context)
        : undefined,
    Edition: __expectString(output.Edition),
    LaunchTime:
      output.LaunchTime !== undefined && output.LaunchTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LaunchTime)))
        : undefined,
    Name: __expectString(output.Name),
    OwnerDirectoryDescription:
      output.OwnerDirectoryDescription !== undefined && output.OwnerDirectoryDescription !== null
        ? deserializeAws_json1_1OwnerDirectoryDescription(output.OwnerDirectoryDescription, context)
        : undefined,
    RadiusSettings:
      output.RadiusSettings !== undefined && output.RadiusSettings !== null
        ? deserializeAws_json1_1RadiusSettings(output.RadiusSettings, context)
        : undefined,
    RadiusStatus: __expectString(output.RadiusStatus),
    RegionsInfo:
      output.RegionsInfo !== undefined && output.RegionsInfo !== null
        ? deserializeAws_json1_1RegionsInfo(output.RegionsInfo, context)
        : undefined,
    ShareMethod: __expectString(output.ShareMethod),
    ShareNotes: __expectString(output.ShareNotes),
    ShareStatus: __expectString(output.ShareStatus),
    ShortName: __expectString(output.ShortName),
    Size: __expectString(output.Size),
    SsoEnabled: __expectBoolean(output.SsoEnabled),
    Stage: __expectString(output.Stage),
    StageLastUpdatedDateTime:
      output.StageLastUpdatedDateTime !== undefined && output.StageLastUpdatedDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StageLastUpdatedDateTime)))
        : undefined,
    StageReason: __expectString(output.StageReason),
    Type: __expectString(output.Type),
    VpcSettings:
      output.VpcSettings !== undefined && output.VpcSettings !== null
        ? deserializeAws_json1_1DirectoryVpcSettingsDescription(output.VpcSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryDescriptions = (output: any, context: __SerdeContext): DirectoryDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DirectoryDescription(entry, context);
    });
};

const deserializeAws_json1_1DirectoryDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DirectoryDoesNotExistException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1DirectoryLimitExceededException = (
  output: any,
  context: __SerdeContext
): DirectoryLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1DirectoryLimits = (output: any, context: __SerdeContext): DirectoryLimits => {
  return {
    CloudOnlyDirectoriesCurrentCount: __expectInt32(output.CloudOnlyDirectoriesCurrentCount),
    CloudOnlyDirectoriesLimit: __expectInt32(output.CloudOnlyDirectoriesLimit),
    CloudOnlyDirectoriesLimitReached: __expectBoolean(output.CloudOnlyDirectoriesLimitReached),
    CloudOnlyMicrosoftADCurrentCount: __expectInt32(output.CloudOnlyMicrosoftADCurrentCount),
    CloudOnlyMicrosoftADLimit: __expectInt32(output.CloudOnlyMicrosoftADLimit),
    CloudOnlyMicrosoftADLimitReached: __expectBoolean(output.CloudOnlyMicrosoftADLimitReached),
    ConnectedDirectoriesCurrentCount: __expectInt32(output.ConnectedDirectoriesCurrentCount),
    ConnectedDirectoriesLimit: __expectInt32(output.ConnectedDirectoriesLimit),
    ConnectedDirectoriesLimitReached: __expectBoolean(output.ConnectedDirectoriesLimitReached),
  } as any;
};

const deserializeAws_json1_1DirectoryNotSharedException = (
  output: any,
  context: __SerdeContext
): DirectoryNotSharedException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1DirectoryUnavailableException = (
  output: any,
  context: __SerdeContext
): DirectoryUnavailableException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1DirectoryVpcSettings = (output: any, context: __SerdeContext): DirectoryVpcSettings => {
  return {
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1DirectoryVpcSettingsDescription = (
  output: any,
  context: __SerdeContext
): DirectoryVpcSettingsDescription => {
  return {
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_json1_1AvailabilityZones(output.AvailabilityZones, context)
        : undefined,
    SecurityGroupId: __expectString(output.SecurityGroupId),
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1DisableClientAuthenticationResult = (
  output: any,
  context: __SerdeContext
): DisableClientAuthenticationResult => {
  return {} as any;
};

const deserializeAws_json1_1DisableLDAPSResult = (output: any, context: __SerdeContext): DisableLDAPSResult => {
  return {} as any;
};

const deserializeAws_json1_1DisableRadiusResult = (output: any, context: __SerdeContext): DisableRadiusResult => {
  return {} as any;
};

const deserializeAws_json1_1DisableSsoResult = (output: any, context: __SerdeContext): DisableSsoResult => {
  return {} as any;
};

const deserializeAws_json1_1DnsIpAddrs = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DomainController = (output: any, context: __SerdeContext): DomainController => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    DirectoryId: __expectString(output.DirectoryId),
    DnsIpAddr: __expectString(output.DnsIpAddr),
    DomainControllerId: __expectString(output.DomainControllerId),
    LaunchTime:
      output.LaunchTime !== undefined && output.LaunchTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LaunchTime)))
        : undefined,
    Status: __expectString(output.Status),
    StatusLastUpdatedDateTime:
      output.StatusLastUpdatedDateTime !== undefined && output.StatusLastUpdatedDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StatusLastUpdatedDateTime)))
        : undefined,
    StatusReason: __expectString(output.StatusReason),
    SubnetId: __expectString(output.SubnetId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1DomainControllerLimitExceededException = (
  output: any,
  context: __SerdeContext
): DomainControllerLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1DomainControllers = (output: any, context: __SerdeContext): DomainController[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DomainController(entry, context);
    });
};

const deserializeAws_json1_1EnableClientAuthenticationResult = (
  output: any,
  context: __SerdeContext
): EnableClientAuthenticationResult => {
  return {} as any;
};

const deserializeAws_json1_1EnableLDAPSResult = (output: any, context: __SerdeContext): EnableLDAPSResult => {
  return {} as any;
};

const deserializeAws_json1_1EnableRadiusResult = (output: any, context: __SerdeContext): EnableRadiusResult => {
  return {} as any;
};

const deserializeAws_json1_1EnableSsoResult = (output: any, context: __SerdeContext): EnableSsoResult => {
  return {} as any;
};

const deserializeAws_json1_1EntityAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): EntityAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1EntityDoesNotExistException = (
  output: any,
  context: __SerdeContext
): EntityDoesNotExistException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1EventTopic = (output: any, context: __SerdeContext): EventTopic => {
  return {
    CreatedDateTime:
      output.CreatedDateTime !== undefined && output.CreatedDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDateTime)))
        : undefined,
    DirectoryId: __expectString(output.DirectoryId),
    Status: __expectString(output.Status),
    TopicArn: __expectString(output.TopicArn),
    TopicName: __expectString(output.TopicName),
  } as any;
};

const deserializeAws_json1_1EventTopics = (output: any, context: __SerdeContext): EventTopic[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventTopic(entry, context);
    });
};

const deserializeAws_json1_1GetDirectoryLimitsResult = (
  output: any,
  context: __SerdeContext
): GetDirectoryLimitsResult => {
  return {
    DirectoryLimits:
      output.DirectoryLimits !== undefined && output.DirectoryLimits !== null
        ? deserializeAws_json1_1DirectoryLimits(output.DirectoryLimits, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetSnapshotLimitsResult = (
  output: any,
  context: __SerdeContext
): GetSnapshotLimitsResult => {
  return {
    SnapshotLimits:
      output.SnapshotLimits !== undefined && output.SnapshotLimits !== null
        ? deserializeAws_json1_1SnapshotLimits(output.SnapshotLimits, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InsufficientPermissionsException = (
  output: any,
  context: __SerdeContext
): InsufficientPermissionsException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1InvalidCertificateException = (
  output: any,
  context: __SerdeContext
): InvalidCertificateException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1InvalidClientAuthStatusException = (
  output: any,
  context: __SerdeContext
): InvalidClientAuthStatusException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1InvalidLDAPSStatusException = (
  output: any,
  context: __SerdeContext
): InvalidLDAPSStatusException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1InvalidPasswordException = (
  output: any,
  context: __SerdeContext
): InvalidPasswordException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1InvalidTargetException = (output: any, context: __SerdeContext): InvalidTargetException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1IpAddrs = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1IpRouteInfo = (output: any, context: __SerdeContext): IpRouteInfo => {
  return {
    AddedDateTime:
      output.AddedDateTime !== undefined && output.AddedDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AddedDateTime)))
        : undefined,
    CidrIp: __expectString(output.CidrIp),
    Description: __expectString(output.Description),
    DirectoryId: __expectString(output.DirectoryId),
    IpRouteStatusMsg: __expectString(output.IpRouteStatusMsg),
    IpRouteStatusReason: __expectString(output.IpRouteStatusReason),
  } as any;
};

const deserializeAws_json1_1IpRouteLimitExceededException = (
  output: any,
  context: __SerdeContext
): IpRouteLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1IpRoutesInfo = (output: any, context: __SerdeContext): IpRouteInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IpRouteInfo(entry, context);
    });
};

const deserializeAws_json1_1LDAPSSettingInfo = (output: any, context: __SerdeContext): LDAPSSettingInfo => {
  return {
    LDAPSStatus: __expectString(output.LDAPSStatus),
    LDAPSStatusReason: __expectString(output.LDAPSStatusReason),
    LastUpdatedDateTime:
      output.LastUpdatedDateTime !== undefined && output.LastUpdatedDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedDateTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1LDAPSSettingsInfo = (output: any, context: __SerdeContext): LDAPSSettingInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LDAPSSettingInfo(entry, context);
    });
};

const deserializeAws_json1_1ListCertificatesResult = (output: any, context: __SerdeContext): ListCertificatesResult => {
  return {
    CertificatesInfo:
      output.CertificatesInfo !== undefined && output.CertificatesInfo !== null
        ? deserializeAws_json1_1CertificatesInfo(output.CertificatesInfo, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListIpRoutesResult = (output: any, context: __SerdeContext): ListIpRoutesResult => {
  return {
    IpRoutesInfo:
      output.IpRoutesInfo !== undefined && output.IpRoutesInfo !== null
        ? deserializeAws_json1_1IpRoutesInfo(output.IpRoutesInfo, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListLogSubscriptionsResult = (
  output: any,
  context: __SerdeContext
): ListLogSubscriptionsResult => {
  return {
    LogSubscriptions:
      output.LogSubscriptions !== undefined && output.LogSubscriptions !== null
        ? deserializeAws_json1_1LogSubscriptions(output.LogSubscriptions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListSchemaExtensionsResult = (
  output: any,
  context: __SerdeContext
): ListSchemaExtensionsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    SchemaExtensionsInfo:
      output.SchemaExtensionsInfo !== undefined && output.SchemaExtensionsInfo !== null
        ? deserializeAws_json1_1SchemaExtensionsInfo(output.SchemaExtensionsInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResult = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LogSubscription = (output: any, context: __SerdeContext): LogSubscription => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
    LogGroupName: __expectString(output.LogGroupName),
    SubscriptionCreatedDateTime:
      output.SubscriptionCreatedDateTime !== undefined && output.SubscriptionCreatedDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubscriptionCreatedDateTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1LogSubscriptions = (output: any, context: __SerdeContext): LogSubscription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LogSubscription(entry, context);
    });
};

const deserializeAws_json1_1NoAvailableCertificateException = (
  output: any,
  context: __SerdeContext
): NoAvailableCertificateException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1OrganizationsException = (output: any, context: __SerdeContext): OrganizationsException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1OwnerDirectoryDescription = (
  output: any,
  context: __SerdeContext
): OwnerDirectoryDescription => {
  return {
    AccountId: __expectString(output.AccountId),
    DirectoryId: __expectString(output.DirectoryId),
    DnsIpAddrs:
      output.DnsIpAddrs !== undefined && output.DnsIpAddrs !== null
        ? deserializeAws_json1_1DnsIpAddrs(output.DnsIpAddrs, context)
        : undefined,
    RadiusSettings:
      output.RadiusSettings !== undefined && output.RadiusSettings !== null
        ? deserializeAws_json1_1RadiusSettings(output.RadiusSettings, context)
        : undefined,
    RadiusStatus: __expectString(output.RadiusStatus),
    VpcSettings:
      output.VpcSettings !== undefined && output.VpcSettings !== null
        ? deserializeAws_json1_1DirectoryVpcSettingsDescription(output.VpcSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RadiusSettings = (output: any, context: __SerdeContext): RadiusSettings => {
  return {
    AuthenticationProtocol: __expectString(output.AuthenticationProtocol),
    DisplayLabel: __expectString(output.DisplayLabel),
    RadiusPort: __expectInt32(output.RadiusPort),
    RadiusRetries: __expectInt32(output.RadiusRetries),
    RadiusServers:
      output.RadiusServers !== undefined && output.RadiusServers !== null
        ? deserializeAws_json1_1Servers(output.RadiusServers, context)
        : undefined,
    RadiusTimeout: __expectInt32(output.RadiusTimeout),
    SharedSecret: __expectString(output.SharedSecret),
    UseSameUsername: __expectBoolean(output.UseSameUsername),
  } as any;
};

const deserializeAws_json1_1RegionDescription = (output: any, context: __SerdeContext): RegionDescription => {
  return {
    DesiredNumberOfDomainControllers: __expectInt32(output.DesiredNumberOfDomainControllers),
    DirectoryId: __expectString(output.DirectoryId),
    LastUpdatedDateTime:
      output.LastUpdatedDateTime !== undefined && output.LastUpdatedDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedDateTime)))
        : undefined,
    LaunchTime:
      output.LaunchTime !== undefined && output.LaunchTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LaunchTime)))
        : undefined,
    RegionName: __expectString(output.RegionName),
    RegionType: __expectString(output.RegionType),
    Status: __expectString(output.Status),
    StatusLastUpdatedDateTime:
      output.StatusLastUpdatedDateTime !== undefined && output.StatusLastUpdatedDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StatusLastUpdatedDateTime)))
        : undefined,
    VpcSettings:
      output.VpcSettings !== undefined && output.VpcSettings !== null
        ? deserializeAws_json1_1DirectoryVpcSettings(output.VpcSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RegionLimitExceededException = (
  output: any,
  context: __SerdeContext
): RegionLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1RegionsDescription = (output: any, context: __SerdeContext): RegionDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RegionDescription(entry, context);
    });
};

const deserializeAws_json1_1RegionsInfo = (output: any, context: __SerdeContext): RegionsInfo => {
  return {
    AdditionalRegions:
      output.AdditionalRegions !== undefined && output.AdditionalRegions !== null
        ? deserializeAws_json1_1AdditionalRegions(output.AdditionalRegions, context)
        : undefined,
    PrimaryRegion: __expectString(output.PrimaryRegion),
  } as any;
};

const deserializeAws_json1_1RegisterCertificateResult = (
  output: any,
  context: __SerdeContext
): RegisterCertificateResult => {
  return {
    CertificateId: __expectString(output.CertificateId),
  } as any;
};

const deserializeAws_json1_1RegisterEventTopicResult = (
  output: any,
  context: __SerdeContext
): RegisterEventTopicResult => {
  return {} as any;
};

const deserializeAws_json1_1RejectSharedDirectoryResult = (
  output: any,
  context: __SerdeContext
): RejectSharedDirectoryResult => {
  return {
    SharedDirectoryId: __expectString(output.SharedDirectoryId),
  } as any;
};

const deserializeAws_json1_1RemoveIpRoutesResult = (output: any, context: __SerdeContext): RemoveIpRoutesResult => {
  return {} as any;
};

const deserializeAws_json1_1RemoveRegionResult = (output: any, context: __SerdeContext): RemoveRegionResult => {
  return {} as any;
};

const deserializeAws_json1_1RemoveTagsFromResourceResult = (
  output: any,
  context: __SerdeContext
): RemoveTagsFromResourceResult => {
  return {} as any;
};

const deserializeAws_json1_1ResetUserPasswordResult = (
  output: any,
  context: __SerdeContext
): ResetUserPasswordResult => {
  return {} as any;
};

const deserializeAws_json1_1RestoreFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): RestoreFromSnapshotResult => {
  return {} as any;
};

const deserializeAws_json1_1SchemaExtensionInfo = (output: any, context: __SerdeContext): SchemaExtensionInfo => {
  return {
    Description: __expectString(output.Description),
    DirectoryId: __expectString(output.DirectoryId),
    EndDateTime:
      output.EndDateTime !== undefined && output.EndDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndDateTime)))
        : undefined,
    SchemaExtensionId: __expectString(output.SchemaExtensionId),
    SchemaExtensionStatus: __expectString(output.SchemaExtensionStatus),
    SchemaExtensionStatusReason: __expectString(output.SchemaExtensionStatusReason),
    StartDateTime:
      output.StartDateTime !== undefined && output.StartDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartDateTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1SchemaExtensionsInfo = (output: any, context: __SerdeContext): SchemaExtensionInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SchemaExtensionInfo(entry, context);
    });
};

const deserializeAws_json1_1Servers = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ServiceException = (output: any, context: __SerdeContext): ServiceException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1SharedDirectories = (output: any, context: __SerdeContext): SharedDirectory[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SharedDirectory(entry, context);
    });
};

const deserializeAws_json1_1SharedDirectory = (output: any, context: __SerdeContext): SharedDirectory => {
  return {
    CreatedDateTime:
      output.CreatedDateTime !== undefined && output.CreatedDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDateTime)))
        : undefined,
    LastUpdatedDateTime:
      output.LastUpdatedDateTime !== undefined && output.LastUpdatedDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedDateTime)))
        : undefined,
    OwnerAccountId: __expectString(output.OwnerAccountId),
    OwnerDirectoryId: __expectString(output.OwnerDirectoryId),
    ShareMethod: __expectString(output.ShareMethod),
    ShareNotes: __expectString(output.ShareNotes),
    ShareStatus: __expectString(output.ShareStatus),
    SharedAccountId: __expectString(output.SharedAccountId),
    SharedDirectoryId: __expectString(output.SharedDirectoryId),
  } as any;
};

const deserializeAws_json1_1ShareDirectoryResult = (output: any, context: __SerdeContext): ShareDirectoryResult => {
  return {
    SharedDirectoryId: __expectString(output.SharedDirectoryId),
  } as any;
};

const deserializeAws_json1_1ShareLimitExceededException = (
  output: any,
  context: __SerdeContext
): ShareLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
    Name: __expectString(output.Name),
    SnapshotId: __expectString(output.SnapshotId),
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime)))
        : undefined,
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1SnapshotLimitExceededException = (
  output: any,
  context: __SerdeContext
): SnapshotLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1SnapshotLimits = (output: any, context: __SerdeContext): SnapshotLimits => {
  return {
    ManualSnapshotsCurrentCount: __expectInt32(output.ManualSnapshotsCurrentCount),
    ManualSnapshotsLimit: __expectInt32(output.ManualSnapshotsLimit),
    ManualSnapshotsLimitReached: __expectBoolean(output.ManualSnapshotsLimitReached),
  } as any;
};

const deserializeAws_json1_1Snapshots = (output: any, context: __SerdeContext): Snapshot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Snapshot(entry, context);
    });
};

const deserializeAws_json1_1StartSchemaExtensionResult = (
  output: any,
  context: __SerdeContext
): StartSchemaExtensionResult => {
  return {
    SchemaExtensionId: __expectString(output.SchemaExtensionId),
  } as any;
};

const deserializeAws_json1_1SubnetIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1Trust = (output: any, context: __SerdeContext): Trust => {
  return {
    CreatedDateTime:
      output.CreatedDateTime !== undefined && output.CreatedDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDateTime)))
        : undefined,
    DirectoryId: __expectString(output.DirectoryId),
    LastUpdatedDateTime:
      output.LastUpdatedDateTime !== undefined && output.LastUpdatedDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedDateTime)))
        : undefined,
    RemoteDomainName: __expectString(output.RemoteDomainName),
    SelectiveAuth: __expectString(output.SelectiveAuth),
    StateLastUpdatedDateTime:
      output.StateLastUpdatedDateTime !== undefined && output.StateLastUpdatedDateTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StateLastUpdatedDateTime)))
        : undefined,
    TrustDirection: __expectString(output.TrustDirection),
    TrustId: __expectString(output.TrustId),
    TrustState: __expectString(output.TrustState),
    TrustStateReason: __expectString(output.TrustStateReason),
    TrustType: __expectString(output.TrustType),
  } as any;
};

const deserializeAws_json1_1Trusts = (output: any, context: __SerdeContext): Trust[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Trust(entry, context);
    });
};

const deserializeAws_json1_1UnshareDirectoryResult = (output: any, context: __SerdeContext): UnshareDirectoryResult => {
  return {
    SharedDirectoryId: __expectString(output.SharedDirectoryId),
  } as any;
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1UpdateConditionalForwarderResult = (
  output: any,
  context: __SerdeContext
): UpdateConditionalForwarderResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateNumberOfDomainControllersResult = (
  output: any,
  context: __SerdeContext
): UpdateNumberOfDomainControllersResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateRadiusResult = (output: any, context: __SerdeContext): UpdateRadiusResult => {
  return {} as any;
};

const deserializeAws_json1_1UpdateTrustResult = (output: any, context: __SerdeContext): UpdateTrustResult => {
  return {
    RequestId: __expectString(output.RequestId),
    TrustId: __expectString(output.TrustId),
  } as any;
};

const deserializeAws_json1_1UserDoesNotExistException = (
  output: any,
  context: __SerdeContext
): UserDoesNotExistException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

const deserializeAws_json1_1VerifyTrustResult = (output: any, context: __SerdeContext): VerifyTrustResult => {
  return {
    TrustId: __expectString(output.TrustId),
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

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
