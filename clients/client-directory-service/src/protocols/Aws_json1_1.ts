// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
import { DescribeSettingsCommandInput, DescribeSettingsCommandOutput } from "../commands/DescribeSettingsCommand";
import {
  DescribeSharedDirectoriesCommandInput,
  DescribeSharedDirectoriesCommandOutput,
} from "../commands/DescribeSharedDirectoriesCommand";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "../commands/DescribeSnapshotsCommand";
import { DescribeTrustsCommandInput, DescribeTrustsCommandOutput } from "../commands/DescribeTrustsCommand";
import {
  DescribeUpdateDirectoryCommandInput,
  DescribeUpdateDirectoryCommandOutput,
} from "../commands/DescribeUpdateDirectoryCommand";
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
  UpdateDirectorySetupCommandInput,
  UpdateDirectorySetupCommandOutput,
} from "../commands/UpdateDirectorySetupCommand";
import {
  UpdateNumberOfDomainControllersCommandInput,
  UpdateNumberOfDomainControllersCommandOutput,
} from "../commands/UpdateNumberOfDomainControllersCommand";
import { UpdateRadiusCommandInput, UpdateRadiusCommandOutput } from "../commands/UpdateRadiusCommand";
import { UpdateSettingsCommandInput, UpdateSettingsCommandOutput } from "../commands/UpdateSettingsCommand";
import { UpdateTrustCommandInput, UpdateTrustCommandOutput } from "../commands/UpdateTrustCommand";
import { VerifyTrustCommandInput, VerifyTrustCommandOutput } from "../commands/VerifyTrustCommand";
import { DirectoryServiceServiceException as __BaseException } from "../models/DirectoryServiceServiceException";
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
  CertificateInfo,
  CertificateInUseException,
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
  DescribeSettingsRequest,
  DescribeSettingsResult,
  DescribeSharedDirectoriesRequest,
  DescribeSharedDirectoriesResult,
  DescribeSnapshotsRequest,
  DescribeSnapshotsResult,
  DescribeTrustsRequest,
  DescribeTrustsResult,
  DescribeUpdateDirectoryRequest,
  DescribeUpdateDirectoryResult,
  DirectoryAlreadyInRegionException,
  DirectoryAlreadySharedException,
  DirectoryConfigurationStatus,
  DirectoryConnectSettings,
  DirectoryConnectSettingsDescription,
  DirectoryDescription,
  DirectoryDoesNotExistException,
  DirectoryInDesiredStateException,
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
  IncompatibleSettingsException,
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
  OSUpdateSettings,
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
  Setting,
  SettingEntry,
  SharedDirectory,
  ShareDirectoryRequest,
  ShareDirectoryResult,
  ShareLimitExceededException,
  ShareTarget,
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
  UnsupportedSettingsException,
  UpdateConditionalForwarderRequest,
  UpdateConditionalForwarderResult,
  UpdateDirectorySetupRequest,
  UpdateDirectorySetupResult,
  UpdateInfoEntry,
  UpdateNumberOfDomainControllersRequest,
  UpdateNumberOfDomainControllersResult,
  UpdateRadiusRequest,
  UpdateRadiusResult,
  UpdateSettingsRequest,
  UpdateSettingsResult,
  UpdateTrustRequest,
  UpdateTrustResult,
  UpdateValue,
  UserDoesNotExistException,
  VerifyTrustRequest,
  VerifyTrustResult,
} from "../models/models_0";

/**
 * serializeAws_json1_1AcceptSharedDirectoryCommand
 */
export const se_AcceptSharedDirectoryCommand = async (
  input: AcceptSharedDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.AcceptSharedDirectory",
  };
  let body: any;
  body = JSON.stringify(se_AcceptSharedDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddIpRoutesCommand
 */
export const se_AddIpRoutesCommand = async (
  input: AddIpRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.AddIpRoutes",
  };
  let body: any;
  body = JSON.stringify(se_AddIpRoutesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddRegionCommand
 */
export const se_AddRegionCommand = async (
  input: AddRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.AddRegion",
  };
  let body: any;
  body = JSON.stringify(se_AddRegionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddTagsToResourceCommand
 */
export const se_AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.AddTagsToResource",
  };
  let body: any;
  body = JSON.stringify(se_AddTagsToResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelSchemaExtensionCommand
 */
export const se_CancelSchemaExtensionCommand = async (
  input: CancelSchemaExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CancelSchemaExtension",
  };
  let body: any;
  body = JSON.stringify(se_CancelSchemaExtensionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConnectDirectoryCommand
 */
export const se_ConnectDirectoryCommand = async (
  input: ConnectDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ConnectDirectory",
  };
  let body: any;
  body = JSON.stringify(se_ConnectDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAliasCommand
 */
export const se_CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateAlias",
  };
  let body: any;
  body = JSON.stringify(se_CreateAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateComputerCommand
 */
export const se_CreateComputerCommand = async (
  input: CreateComputerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateComputer",
  };
  let body: any;
  body = JSON.stringify(se_CreateComputerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateConditionalForwarderCommand
 */
export const se_CreateConditionalForwarderCommand = async (
  input: CreateConditionalForwarderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateConditionalForwarder",
  };
  let body: any;
  body = JSON.stringify(se_CreateConditionalForwarderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDirectoryCommand
 */
export const se_CreateDirectoryCommand = async (
  input: CreateDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateDirectory",
  };
  let body: any;
  body = JSON.stringify(se_CreateDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLogSubscriptionCommand
 */
export const se_CreateLogSubscriptionCommand = async (
  input: CreateLogSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateLogSubscription",
  };
  let body: any;
  body = JSON.stringify(se_CreateLogSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMicrosoftADCommand
 */
export const se_CreateMicrosoftADCommand = async (
  input: CreateMicrosoftADCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateMicrosoftAD",
  };
  let body: any;
  body = JSON.stringify(se_CreateMicrosoftADRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSnapshotCommand
 */
export const se_CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_CreateSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTrustCommand
 */
export const se_CreateTrustCommand = async (
  input: CreateTrustCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.CreateTrust",
  };
  let body: any;
  body = JSON.stringify(se_CreateTrustRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConditionalForwarderCommand
 */
export const se_DeleteConditionalForwarderCommand = async (
  input: DeleteConditionalForwarderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DeleteConditionalForwarder",
  };
  let body: any;
  body = JSON.stringify(se_DeleteConditionalForwarderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDirectoryCommand
 */
export const se_DeleteDirectoryCommand = async (
  input: DeleteDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DeleteDirectory",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLogSubscriptionCommand
 */
export const se_DeleteLogSubscriptionCommand = async (
  input: DeleteLogSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DeleteLogSubscription",
  };
  let body: any;
  body = JSON.stringify(se_DeleteLogSubscriptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSnapshotCommand
 */
export const se_DeleteSnapshotCommand = async (
  input: DeleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DeleteSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_DeleteSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTrustCommand
 */
export const se_DeleteTrustCommand = async (
  input: DeleteTrustCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DeleteTrust",
  };
  let body: any;
  body = JSON.stringify(se_DeleteTrustRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterCertificateCommand
 */
export const se_DeregisterCertificateCommand = async (
  input: DeregisterCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DeregisterCertificate",
  };
  let body: any;
  body = JSON.stringify(se_DeregisterCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterEventTopicCommand
 */
export const se_DeregisterEventTopicCommand = async (
  input: DeregisterEventTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DeregisterEventTopic",
  };
  let body: any;
  body = JSON.stringify(se_DeregisterEventTopicRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCertificateCommand
 */
export const se_DescribeCertificateCommand = async (
  input: DescribeCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeCertificate",
  };
  let body: any;
  body = JSON.stringify(se_DescribeCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClientAuthenticationSettingsCommand
 */
export const se_DescribeClientAuthenticationSettingsCommand = async (
  input: DescribeClientAuthenticationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeClientAuthenticationSettings",
  };
  let body: any;
  body = JSON.stringify(se_DescribeClientAuthenticationSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConditionalForwardersCommand
 */
export const se_DescribeConditionalForwardersCommand = async (
  input: DescribeConditionalForwardersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeConditionalForwarders",
  };
  let body: any;
  body = JSON.stringify(se_DescribeConditionalForwardersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDirectoriesCommand
 */
export const se_DescribeDirectoriesCommand = async (
  input: DescribeDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeDirectories",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDirectoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDomainControllersCommand
 */
export const se_DescribeDomainControllersCommand = async (
  input: DescribeDomainControllersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeDomainControllers",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDomainControllersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventTopicsCommand
 */
export const se_DescribeEventTopicsCommand = async (
  input: DescribeEventTopicsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeEventTopics",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEventTopicsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLDAPSSettingsCommand
 */
export const se_DescribeLDAPSSettingsCommand = async (
  input: DescribeLDAPSSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeLDAPSSettings",
  };
  let body: any;
  body = JSON.stringify(se_DescribeLDAPSSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRegionsCommand
 */
export const se_DescribeRegionsCommand = async (
  input: DescribeRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeRegions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeRegionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSettingsCommand
 */
export const se_DescribeSettingsCommand = async (
  input: DescribeSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeSettings",
  };
  let body: any;
  body = JSON.stringify(se_DescribeSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSharedDirectoriesCommand
 */
export const se_DescribeSharedDirectoriesCommand = async (
  input: DescribeSharedDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeSharedDirectories",
  };
  let body: any;
  body = JSON.stringify(se_DescribeSharedDirectoriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSnapshotsCommand
 */
export const se_DescribeSnapshotsCommand = async (
  input: DescribeSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeSnapshots",
  };
  let body: any;
  body = JSON.stringify(se_DescribeSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTrustsCommand
 */
export const se_DescribeTrustsCommand = async (
  input: DescribeTrustsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeTrusts",
  };
  let body: any;
  body = JSON.stringify(se_DescribeTrustsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUpdateDirectoryCommand
 */
export const se_DescribeUpdateDirectoryCommand = async (
  input: DescribeUpdateDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DescribeUpdateDirectory",
  };
  let body: any;
  body = JSON.stringify(se_DescribeUpdateDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableClientAuthenticationCommand
 */
export const se_DisableClientAuthenticationCommand = async (
  input: DisableClientAuthenticationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DisableClientAuthentication",
  };
  let body: any;
  body = JSON.stringify(se_DisableClientAuthenticationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableLDAPSCommand
 */
export const se_DisableLDAPSCommand = async (
  input: DisableLDAPSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DisableLDAPS",
  };
  let body: any;
  body = JSON.stringify(se_DisableLDAPSRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableRadiusCommand
 */
export const se_DisableRadiusCommand = async (
  input: DisableRadiusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DisableRadius",
  };
  let body: any;
  body = JSON.stringify(se_DisableRadiusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableSsoCommand
 */
export const se_DisableSsoCommand = async (
  input: DisableSsoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.DisableSso",
  };
  let body: any;
  body = JSON.stringify(se_DisableSsoRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableClientAuthenticationCommand
 */
export const se_EnableClientAuthenticationCommand = async (
  input: EnableClientAuthenticationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.EnableClientAuthentication",
  };
  let body: any;
  body = JSON.stringify(se_EnableClientAuthenticationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableLDAPSCommand
 */
export const se_EnableLDAPSCommand = async (
  input: EnableLDAPSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.EnableLDAPS",
  };
  let body: any;
  body = JSON.stringify(se_EnableLDAPSRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableRadiusCommand
 */
export const se_EnableRadiusCommand = async (
  input: EnableRadiusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.EnableRadius",
  };
  let body: any;
  body = JSON.stringify(se_EnableRadiusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableSsoCommand
 */
export const se_EnableSsoCommand = async (
  input: EnableSsoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.EnableSso",
  };
  let body: any;
  body = JSON.stringify(se_EnableSsoRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDirectoryLimitsCommand
 */
export const se_GetDirectoryLimitsCommand = async (
  input: GetDirectoryLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.GetDirectoryLimits",
  };
  let body: any;
  body = JSON.stringify(se_GetDirectoryLimitsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSnapshotLimitsCommand
 */
export const se_GetSnapshotLimitsCommand = async (
  input: GetSnapshotLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.GetSnapshotLimits",
  };
  let body: any;
  body = JSON.stringify(se_GetSnapshotLimitsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCertificatesCommand
 */
export const se_ListCertificatesCommand = async (
  input: ListCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ListCertificates",
  };
  let body: any;
  body = JSON.stringify(se_ListCertificatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListIpRoutesCommand
 */
export const se_ListIpRoutesCommand = async (
  input: ListIpRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ListIpRoutes",
  };
  let body: any;
  body = JSON.stringify(se_ListIpRoutesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLogSubscriptionsCommand
 */
export const se_ListLogSubscriptionsCommand = async (
  input: ListLogSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ListLogSubscriptions",
  };
  let body: any;
  body = JSON.stringify(se_ListLogSubscriptionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSchemaExtensionsCommand
 */
export const se_ListSchemaExtensionsCommand = async (
  input: ListSchemaExtensionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ListSchemaExtensions",
  };
  let body: any;
  body = JSON.stringify(se_ListSchemaExtensionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterCertificateCommand
 */
export const se_RegisterCertificateCommand = async (
  input: RegisterCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.RegisterCertificate",
  };
  let body: any;
  body = JSON.stringify(se_RegisterCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterEventTopicCommand
 */
export const se_RegisterEventTopicCommand = async (
  input: RegisterEventTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.RegisterEventTopic",
  };
  let body: any;
  body = JSON.stringify(se_RegisterEventTopicRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RejectSharedDirectoryCommand
 */
export const se_RejectSharedDirectoryCommand = async (
  input: RejectSharedDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.RejectSharedDirectory",
  };
  let body: any;
  body = JSON.stringify(se_RejectSharedDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveIpRoutesCommand
 */
export const se_RemoveIpRoutesCommand = async (
  input: RemoveIpRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.RemoveIpRoutes",
  };
  let body: any;
  body = JSON.stringify(se_RemoveIpRoutesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveRegionCommand
 */
export const se_RemoveRegionCommand = async (
  input: RemoveRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.RemoveRegion",
  };
  let body: any;
  body = JSON.stringify(se_RemoveRegionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTagsFromResourceCommand
 */
export const se_RemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.RemoveTagsFromResource",
  };
  let body: any;
  body = JSON.stringify(se_RemoveTagsFromResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResetUserPasswordCommand
 */
export const se_ResetUserPasswordCommand = async (
  input: ResetUserPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ResetUserPassword",
  };
  let body: any;
  body = JSON.stringify(se_ResetUserPasswordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreFromSnapshotCommand
 */
export const se_RestoreFromSnapshotCommand = async (
  input: RestoreFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.RestoreFromSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_RestoreFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ShareDirectoryCommand
 */
export const se_ShareDirectoryCommand = async (
  input: ShareDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.ShareDirectory",
  };
  let body: any;
  body = JSON.stringify(se_ShareDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartSchemaExtensionCommand
 */
export const se_StartSchemaExtensionCommand = async (
  input: StartSchemaExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.StartSchemaExtension",
  };
  let body: any;
  body = JSON.stringify(se_StartSchemaExtensionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UnshareDirectoryCommand
 */
export const se_UnshareDirectoryCommand = async (
  input: UnshareDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.UnshareDirectory",
  };
  let body: any;
  body = JSON.stringify(se_UnshareDirectoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateConditionalForwarderCommand
 */
export const se_UpdateConditionalForwarderCommand = async (
  input: UpdateConditionalForwarderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.UpdateConditionalForwarder",
  };
  let body: any;
  body = JSON.stringify(se_UpdateConditionalForwarderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDirectorySetupCommand
 */
export const se_UpdateDirectorySetupCommand = async (
  input: UpdateDirectorySetupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.UpdateDirectorySetup",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDirectorySetupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNumberOfDomainControllersCommand
 */
export const se_UpdateNumberOfDomainControllersCommand = async (
  input: UpdateNumberOfDomainControllersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.UpdateNumberOfDomainControllers",
  };
  let body: any;
  body = JSON.stringify(se_UpdateNumberOfDomainControllersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRadiusCommand
 */
export const se_UpdateRadiusCommand = async (
  input: UpdateRadiusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.UpdateRadius",
  };
  let body: any;
  body = JSON.stringify(se_UpdateRadiusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSettingsCommand
 */
export const se_UpdateSettingsCommand = async (
  input: UpdateSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.UpdateSettings",
  };
  let body: any;
  body = JSON.stringify(se_UpdateSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTrustCommand
 */
export const se_UpdateTrustCommand = async (
  input: UpdateTrustCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.UpdateTrust",
  };
  let body: any;
  body = JSON.stringify(se_UpdateTrustRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1VerifyTrustCommand
 */
export const se_VerifyTrustCommand = async (
  input: VerifyTrustCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DirectoryService_20150416.VerifyTrust",
  };
  let body: any;
  body = JSON.stringify(se_VerifyTrustRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AcceptSharedDirectoryCommand
 */
export const de_AcceptSharedDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptSharedDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AcceptSharedDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AcceptSharedDirectoryResult(data, context);
  const response: AcceptSharedDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AcceptSharedDirectoryCommandError
 */
const de_AcceptSharedDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptSharedDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryAlreadySharedException":
    case "com.amazonaws.directoryservice#DirectoryAlreadySharedException":
      throw await de_DirectoryAlreadySharedExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AddIpRoutesCommand
 */
export const de_AddIpRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddIpRoutesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddIpRoutesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddIpRoutesResult(data, context);
  const response: AddIpRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddIpRoutesCommandError
 */
const de_AddIpRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddIpRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "IpRouteLimitExceededException":
    case "com.amazonaws.directoryservice#IpRouteLimitExceededException":
      throw await de_IpRouteLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AddRegionCommand
 */
export const de_AddRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRegionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddRegionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddRegionResult(data, context);
  const response: AddRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddRegionCommandError
 */
const de_AddRegionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRegionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryAlreadyInRegionException":
    case "com.amazonaws.directoryservice#DirectoryAlreadyInRegionException":
      throw await de_DirectoryAlreadyInRegionExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "RegionLimitExceededException":
    case "com.amazonaws.directoryservice#RegionLimitExceededException":
      throw await de_RegionLimitExceededExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AddTagsToResourceCommand
 */
export const de_AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddTagsToResourceResult(data, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddTagsToResourceCommandError
 */
const de_AddTagsToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TagLimitExceededException":
    case "com.amazonaws.directoryservice#TagLimitExceededException":
      throw await de_TagLimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CancelSchemaExtensionCommand
 */
export const de_CancelSchemaExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSchemaExtensionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelSchemaExtensionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelSchemaExtensionResult(data, context);
  const response: CancelSchemaExtensionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelSchemaExtensionCommandError
 */
const de_CancelSchemaExtensionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSchemaExtensionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ConnectDirectoryCommand
 */
export const de_ConnectDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConnectDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ConnectDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConnectDirectoryResult(data, context);
  const response: ConnectDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ConnectDirectoryCommandError
 */
const de_ConnectDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConnectDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryLimitExceededException":
    case "com.amazonaws.directoryservice#DirectoryLimitExceededException":
      throw await de_DirectoryLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateAliasCommand
 */
export const de_CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAliasResult(data, context);
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAliasCommandError
 */
const de_CreateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateComputerCommand
 */
export const de_CreateComputerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComputerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateComputerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateComputerResult(data, context);
  const response: CreateComputerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateComputerCommandError
 */
const de_CreateComputerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComputerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthenticationFailedException":
    case "com.amazonaws.directoryservice#AuthenticationFailedException":
      throw await de_AuthenticationFailedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateConditionalForwarderCommand
 */
export const de_CreateConditionalForwarderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConditionalForwarderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConditionalForwarderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateConditionalForwarderResult(data, context);
  const response: CreateConditionalForwarderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateConditionalForwarderCommandError
 */
const de_CreateConditionalForwarderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConditionalForwarderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateDirectoryCommand
 */
export const de_CreateDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDirectoryResult(data, context);
  const response: CreateDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDirectoryCommandError
 */
const de_CreateDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryLimitExceededException":
    case "com.amazonaws.directoryservice#DirectoryLimitExceededException":
      throw await de_DirectoryLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateLogSubscriptionCommand
 */
export const de_CreateLogSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLogSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLogSubscriptionResult(data, context);
  const response: CreateLogSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLogSubscriptionCommandError
 */
const de_CreateLogSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InsufficientPermissionsException":
    case "com.amazonaws.directoryservice#InsufficientPermissionsException":
      throw await de_InsufficientPermissionsExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateMicrosoftADCommand
 */
export const de_CreateMicrosoftADCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMicrosoftADCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateMicrosoftADCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateMicrosoftADResult(data, context);
  const response: CreateMicrosoftADCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateMicrosoftADCommandError
 */
const de_CreateMicrosoftADCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMicrosoftADCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryLimitExceededException":
    case "com.amazonaws.directoryservice#DirectoryLimitExceededException":
      throw await de_DirectoryLimitExceededExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateSnapshotCommand
 */
export const de_CreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSnapshotResult(data, context);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSnapshotCommandError
 */
const de_CreateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "SnapshotLimitExceededException":
    case "com.amazonaws.directoryservice#SnapshotLimitExceededException":
      throw await de_SnapshotLimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateTrustCommand
 */
export const de_CreateTrustCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTrustCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTrustResult(data, context);
  const response: CreateTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateTrustCommandError
 */
const de_CreateTrustCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteConditionalForwarderCommand
 */
export const de_DeleteConditionalForwarderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConditionalForwarderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConditionalForwarderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteConditionalForwarderResult(data, context);
  const response: DeleteConditionalForwarderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteConditionalForwarderCommandError
 */
const de_DeleteConditionalForwarderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConditionalForwarderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteDirectoryCommand
 */
export const de_DeleteDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDirectoryResult(data, context);
  const response: DeleteDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDirectoryCommandError
 */
const de_DeleteDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteLogSubscriptionCommand
 */
export const de_DeleteLogSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogSubscriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLogSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteLogSubscriptionResult(data, context);
  const response: DeleteLogSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLogSubscriptionCommandError
 */
const de_DeleteLogSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogSubscriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteSnapshotCommand
 */
export const de_DeleteSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSnapshotResult(data, context);
  const response: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSnapshotCommandError
 */
const de_DeleteSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteTrustCommand
 */
export const de_DeleteTrustCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTrustCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTrustResult(data, context);
  const response: DeleteTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTrustCommandError
 */
const de_DeleteTrustCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeregisterCertificateCommand
 */
export const de_DeregisterCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterCertificateResult(data, context);
  const response: DeregisterCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterCertificateCommandError
 */
const de_DeregisterCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateDoesNotExistException":
    case "com.amazonaws.directoryservice#CertificateDoesNotExistException":
      throw await de_CertificateDoesNotExistExceptionRes(parsedOutput, context);
    case "CertificateInUseException":
    case "com.amazonaws.directoryservice#CertificateInUseException":
      throw await de_CertificateInUseExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeregisterEventTopicCommand
 */
export const de_DeregisterEventTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterEventTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterEventTopicCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterEventTopicResult(data, context);
  const response: DeregisterEventTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterEventTopicCommandError
 */
const de_DeregisterEventTopicCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterEventTopicCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeCertificateCommand
 */
export const de_DescribeCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCertificateResult(data, context);
  const response: DescribeCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCertificateCommandError
 */
const de_DescribeCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateDoesNotExistException":
    case "com.amazonaws.directoryservice#CertificateDoesNotExistException":
      throw await de_CertificateDoesNotExistExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeClientAuthenticationSettingsCommand
 */
export const de_DescribeClientAuthenticationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientAuthenticationSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeClientAuthenticationSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeClientAuthenticationSettingsResult(data, context);
  const response: DescribeClientAuthenticationSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeClientAuthenticationSettingsCommandError
 */
const de_DescribeClientAuthenticationSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClientAuthenticationSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeConditionalForwardersCommand
 */
export const de_DescribeConditionalForwardersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConditionalForwardersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConditionalForwardersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConditionalForwardersResult(data, context);
  const response: DescribeConditionalForwardersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConditionalForwardersCommandError
 */
const de_DescribeConditionalForwardersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConditionalForwardersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeDirectoriesCommand
 */
export const de_DescribeDirectoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDirectoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDirectoriesResult(data, context);
  const response: DescribeDirectoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDirectoriesCommandError
 */
const de_DescribeDirectoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDirectoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeDomainControllersCommand
 */
export const de_DescribeDomainControllersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainControllersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDomainControllersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDomainControllersResult(data, context);
  const response: DescribeDomainControllersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDomainControllersCommandError
 */
const de_DescribeDomainControllersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainControllersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEventTopicsCommand
 */
export const de_DescribeEventTopicsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTopicsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventTopicsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventTopicsResult(data, context);
  const response: DescribeEventTopicsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEventTopicsCommandError
 */
const de_DescribeEventTopicsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTopicsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeLDAPSSettingsCommand
 */
export const de_DescribeLDAPSSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLDAPSSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLDAPSSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLDAPSSettingsResult(data, context);
  const response: DescribeLDAPSSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLDAPSSettingsCommandError
 */
const de_DescribeLDAPSSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLDAPSSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeRegionsCommand
 */
export const de_DescribeRegionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRegionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRegionsResult(data, context);
  const response: DescribeRegionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRegionsCommandError
 */
const de_DescribeRegionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeSettingsCommand
 */
export const de_DescribeSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSettingsResult(data, context);
  const response: DescribeSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSettingsCommandError
 */
const de_DescribeSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeSharedDirectoriesCommand
 */
export const de_DescribeSharedDirectoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSharedDirectoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSharedDirectoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSharedDirectoriesResult(data, context);
  const response: DescribeSharedDirectoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSharedDirectoriesCommandError
 */
const de_DescribeSharedDirectoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSharedDirectoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeSnapshotsCommand
 */
export const de_DescribeSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSnapshotsResult(data, context);
  const response: DescribeSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSnapshotsCommandError
 */
const de_DescribeSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeTrustsCommand
 */
export const de_DescribeTrustsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTrustsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrustsResult(data, context);
  const response: DescribeTrustsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTrustsCommandError
 */
const de_DescribeTrustsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeUpdateDirectoryCommand
 */
export const de_DescribeUpdateDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUpdateDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUpdateDirectoryResult(data, context);
  const response: DescribeUpdateDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeUpdateDirectoryCommandError
 */
const de_DescribeUpdateDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisableClientAuthenticationCommand
 */
export const de_DisableClientAuthenticationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableClientAuthenticationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableClientAuthenticationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableClientAuthenticationResult(data, context);
  const response: DisableClientAuthenticationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableClientAuthenticationCommandError
 */
const de_DisableClientAuthenticationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableClientAuthenticationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidClientAuthStatusException":
    case "com.amazonaws.directoryservice#InvalidClientAuthStatusException":
      throw await de_InvalidClientAuthStatusExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisableLDAPSCommand
 */
export const de_DisableLDAPSCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableLDAPSCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableLDAPSCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableLDAPSResult(data, context);
  const response: DisableLDAPSCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableLDAPSCommandError
 */
const de_DisableLDAPSCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableLDAPSCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "InvalidLDAPSStatusException":
    case "com.amazonaws.directoryservice#InvalidLDAPSStatusException":
      throw await de_InvalidLDAPSStatusExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisableRadiusCommand
 */
export const de_DisableRadiusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRadiusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableRadiusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableRadiusResult(data, context);
  const response: DisableRadiusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableRadiusCommandError
 */
const de_DisableRadiusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRadiusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisableSsoCommand
 */
export const de_DisableSsoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSsoCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableSsoCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableSsoResult(data, context);
  const response: DisableSsoCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableSsoCommandError
 */
const de_DisableSsoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSsoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthenticationFailedException":
    case "com.amazonaws.directoryservice#AuthenticationFailedException":
      throw await de_AuthenticationFailedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InsufficientPermissionsException":
    case "com.amazonaws.directoryservice#InsufficientPermissionsException":
      throw await de_InsufficientPermissionsExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1EnableClientAuthenticationCommand
 */
export const de_EnableClientAuthenticationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableClientAuthenticationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableClientAuthenticationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableClientAuthenticationResult(data, context);
  const response: EnableClientAuthenticationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableClientAuthenticationCommandError
 */
const de_EnableClientAuthenticationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableClientAuthenticationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidClientAuthStatusException":
    case "com.amazonaws.directoryservice#InvalidClientAuthStatusException":
      throw await de_InvalidClientAuthStatusExceptionRes(parsedOutput, context);
    case "NoAvailableCertificateException":
    case "com.amazonaws.directoryservice#NoAvailableCertificateException":
      throw await de_NoAvailableCertificateExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1EnableLDAPSCommand
 */
export const de_EnableLDAPSCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableLDAPSCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableLDAPSCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableLDAPSResult(data, context);
  const response: EnableLDAPSCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableLDAPSCommandError
 */
const de_EnableLDAPSCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableLDAPSCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "InvalidLDAPSStatusException":
    case "com.amazonaws.directoryservice#InvalidLDAPSStatusException":
      throw await de_InvalidLDAPSStatusExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NoAvailableCertificateException":
    case "com.amazonaws.directoryservice#NoAvailableCertificateException":
      throw await de_NoAvailableCertificateExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1EnableRadiusCommand
 */
export const de_EnableRadiusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRadiusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableRadiusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableRadiusResult(data, context);
  const response: EnableRadiusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableRadiusCommandError
 */
const de_EnableRadiusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRadiusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityAlreadyExistsException":
    case "com.amazonaws.directoryservice#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1EnableSsoCommand
 */
export const de_EnableSsoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSsoCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableSsoCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableSsoResult(data, context);
  const response: EnableSsoCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableSsoCommandError
 */
const de_EnableSsoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSsoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AuthenticationFailedException":
    case "com.amazonaws.directoryservice#AuthenticationFailedException":
      throw await de_AuthenticationFailedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InsufficientPermissionsException":
    case "com.amazonaws.directoryservice#InsufficientPermissionsException":
      throw await de_InsufficientPermissionsExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetDirectoryLimitsCommand
 */
export const de_GetDirectoryLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDirectoryLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDirectoryLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDirectoryLimitsResult(data, context);
  const response: GetDirectoryLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDirectoryLimitsCommandError
 */
const de_GetDirectoryLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDirectoryLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSnapshotLimitsCommand
 */
export const de_GetSnapshotLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSnapshotLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSnapshotLimitsResult(data, context);
  const response: GetSnapshotLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSnapshotLimitsCommandError
 */
const de_GetSnapshotLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListCertificatesCommand
 */
export const de_ListCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCertificatesResult(data, context);
  const response: ListCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCertificatesCommandError
 */
const de_ListCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListIpRoutesCommand
 */
export const de_ListIpRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIpRoutesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListIpRoutesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListIpRoutesResult(data, context);
  const response: ListIpRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListIpRoutesCommandError
 */
const de_ListIpRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIpRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListLogSubscriptionsCommand
 */
export const de_ListLogSubscriptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogSubscriptionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLogSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLogSubscriptionsResult(data, context);
  const response: ListLogSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListLogSubscriptionsCommandError
 */
const de_ListLogSubscriptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogSubscriptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListSchemaExtensionsCommand
 */
export const de_ListSchemaExtensionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaExtensionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSchemaExtensionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSchemaExtensionsResult(data, context);
  const response: ListSchemaExtensionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSchemaExtensionsCommandError
 */
const de_ListSchemaExtensionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaExtensionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResult(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.directoryservice#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RegisterCertificateCommand
 */
export const de_RegisterCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterCertificateResult(data, context);
  const response: RegisterCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterCertificateCommandError
 */
const de_RegisterCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CertificateAlreadyExistsException":
    case "com.amazonaws.directoryservice#CertificateAlreadyExistsException":
      throw await de_CertificateAlreadyExistsExceptionRes(parsedOutput, context);
    case "CertificateLimitExceededException":
    case "com.amazonaws.directoryservice#CertificateLimitExceededException":
      throw await de_CertificateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "InvalidCertificateException":
    case "com.amazonaws.directoryservice#InvalidCertificateException":
      throw await de_InvalidCertificateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RegisterEventTopicCommand
 */
export const de_RegisterEventTopicCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterEventTopicCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterEventTopicCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterEventTopicResult(data, context);
  const response: RegisterEventTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterEventTopicCommandError
 */
const de_RegisterEventTopicCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterEventTopicCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RejectSharedDirectoryCommand
 */
export const de_RejectSharedDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectSharedDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RejectSharedDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RejectSharedDirectoryResult(data, context);
  const response: RejectSharedDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RejectSharedDirectoryCommandError
 */
const de_RejectSharedDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectSharedDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryAlreadySharedException":
    case "com.amazonaws.directoryservice#DirectoryAlreadySharedException":
      throw await de_DirectoryAlreadySharedExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RemoveIpRoutesCommand
 */
export const de_RemoveIpRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveIpRoutesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveIpRoutesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveIpRoutesResult(data, context);
  const response: RemoveIpRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveIpRoutesCommandError
 */
const de_RemoveIpRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveIpRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RemoveRegionCommand
 */
export const de_RemoveRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRegionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveRegionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveRegionResult(data, context);
  const response: RemoveRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveRegionCommandError
 */
const de_RemoveRegionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRegionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RemoveTagsFromResourceCommand
 */
export const de_RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTagsFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveTagsFromResourceResult(data, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveTagsFromResourceCommandError
 */
const de_RemoveTagsFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ResetUserPasswordCommand
 */
export const de_ResetUserPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetUserPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResetUserPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResetUserPasswordResult(data, context);
  const response: ResetUserPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ResetUserPasswordCommandError
 */
const de_ResetUserPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetUserPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.directoryservice#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    case "UserDoesNotExistException":
    case "com.amazonaws.directoryservice#UserDoesNotExistException":
      throw await de_UserDoesNotExistExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RestoreFromSnapshotCommand
 */
export const de_RestoreFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreFromSnapshotResult(data, context);
  const response: RestoreFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RestoreFromSnapshotCommandError
 */
const de_RestoreFromSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ShareDirectoryCommand
 */
export const de_ShareDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ShareDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ShareDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ShareDirectoryResult(data, context);
  const response: ShareDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ShareDirectoryCommandError
 */
const de_ShareDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ShareDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryAlreadySharedException":
    case "com.amazonaws.directoryservice#DirectoryAlreadySharedException":
      throw await de_DirectoryAlreadySharedExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidTargetException":
    case "com.amazonaws.directoryservice#InvalidTargetException":
      throw await de_InvalidTargetExceptionRes(parsedOutput, context);
    case "OrganizationsException":
    case "com.amazonaws.directoryservice#OrganizationsException":
      throw await de_OrganizationsExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ShareLimitExceededException":
    case "com.amazonaws.directoryservice#ShareLimitExceededException":
      throw await de_ShareLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartSchemaExtensionCommand
 */
export const de_StartSchemaExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaExtensionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartSchemaExtensionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartSchemaExtensionResult(data, context);
  const response: StartSchemaExtensionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartSchemaExtensionCommandError
 */
const de_StartSchemaExtensionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSchemaExtensionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "SnapshotLimitExceededException":
    case "com.amazonaws.directoryservice#SnapshotLimitExceededException":
      throw await de_SnapshotLimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UnshareDirectoryCommand
 */
export const de_UnshareDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnshareDirectoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UnshareDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UnshareDirectoryResult(data, context);
  const response: UnshareDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UnshareDirectoryCommandError
 */
const de_UnshareDirectoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnshareDirectoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryNotSharedException":
    case "com.amazonaws.directoryservice#DirectoryNotSharedException":
      throw await de_DirectoryNotSharedExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidTargetException":
    case "com.amazonaws.directoryservice#InvalidTargetException":
      throw await de_InvalidTargetExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateConditionalForwarderCommand
 */
export const de_UpdateConditionalForwarderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConditionalForwarderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateConditionalForwarderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateConditionalForwarderResult(data, context);
  const response: UpdateConditionalForwarderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateConditionalForwarderCommandError
 */
const de_UpdateConditionalForwarderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConditionalForwarderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateDirectorySetupCommand
 */
export const de_UpdateDirectorySetupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectorySetupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDirectorySetupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDirectorySetupResult(data, context);
  const response: UpdateDirectorySetupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDirectorySetupCommandError
 */
const de_UpdateDirectorySetupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectorySetupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.directoryservice#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "DirectoryInDesiredStateException":
    case "com.amazonaws.directoryservice#DirectoryInDesiredStateException":
      throw await de_DirectoryInDesiredStateExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "SnapshotLimitExceededException":
    case "com.amazonaws.directoryservice#SnapshotLimitExceededException":
      throw await de_SnapshotLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateNumberOfDomainControllersCommand
 */
export const de_UpdateNumberOfDomainControllersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNumberOfDomainControllersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateNumberOfDomainControllersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateNumberOfDomainControllersResult(data, context);
  const response: UpdateNumberOfDomainControllersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateNumberOfDomainControllersCommandError
 */
const de_UpdateNumberOfDomainControllersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNumberOfDomainControllersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "DomainControllerLimitExceededException":
    case "com.amazonaws.directoryservice#DomainControllerLimitExceededException":
      throw await de_DomainControllerLimitExceededExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateRadiusCommand
 */
export const de_UpdateRadiusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRadiusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRadiusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRadiusResult(data, context);
  const response: UpdateRadiusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateRadiusCommandError
 */
const de_UpdateRadiusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRadiusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateSettingsCommand
 */
export const de_UpdateSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSettingsResult(data, context);
  const response: UpdateSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateSettingsCommandError
 */
const de_UpdateSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "DirectoryDoesNotExistException":
    case "com.amazonaws.directoryservice#DirectoryDoesNotExistException":
      throw await de_DirectoryDoesNotExistExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.directoryservice#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "IncompatibleSettingsException":
    case "com.amazonaws.directoryservice#IncompatibleSettingsException":
      throw await de_IncompatibleSettingsExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    case "UnsupportedSettingsException":
    case "com.amazonaws.directoryservice#UnsupportedSettingsException":
      throw await de_UnsupportedSettingsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateTrustCommand
 */
export const de_UpdateTrustCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrustCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTrustCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTrustResult(data, context);
  const response: UpdateTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateTrustCommandError
 */
const de_UpdateTrustCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrustCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1VerifyTrustCommand
 */
export const de_VerifyTrustCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyTrustCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_VerifyTrustCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VerifyTrustResult(data, context);
  const response: VerifyTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1VerifyTrustCommandError
 */
const de_VerifyTrustCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyTrustCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.directoryservice#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "EntityDoesNotExistException":
    case "com.amazonaws.directoryservice#EntityDoesNotExistException":
      throw await de_EntityDoesNotExistExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.directoryservice#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.directoryservice#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.directoryservice#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AuthenticationFailedExceptionRes
 */
const de_AuthenticationFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AuthenticationFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AuthenticationFailedException(body, context);
  const exception = new AuthenticationFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CertificateAlreadyExistsExceptionRes
 */
const de_CertificateAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CertificateAlreadyExistsException(body, context);
  const exception = new CertificateAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CertificateDoesNotExistExceptionRes
 */
const de_CertificateDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CertificateDoesNotExistException(body, context);
  const exception = new CertificateDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CertificateInUseExceptionRes
 */
const de_CertificateInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CertificateInUseException(body, context);
  const exception = new CertificateInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CertificateLimitExceededExceptionRes
 */
const de_CertificateLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CertificateLimitExceededException(body, context);
  const exception = new CertificateLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ClientExceptionRes
 */
const de_ClientExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ClientException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ClientException(body, context);
  const exception = new ClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DirectoryAlreadyInRegionExceptionRes
 */
const de_DirectoryAlreadyInRegionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryAlreadyInRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DirectoryAlreadyInRegionException(body, context);
  const exception = new DirectoryAlreadyInRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DirectoryAlreadySharedExceptionRes
 */
const de_DirectoryAlreadySharedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryAlreadySharedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DirectoryAlreadySharedException(body, context);
  const exception = new DirectoryAlreadySharedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DirectoryDoesNotExistExceptionRes
 */
const de_DirectoryDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DirectoryDoesNotExistException(body, context);
  const exception = new DirectoryDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DirectoryInDesiredStateExceptionRes
 */
const de_DirectoryInDesiredStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryInDesiredStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DirectoryInDesiredStateException(body, context);
  const exception = new DirectoryInDesiredStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DirectoryLimitExceededExceptionRes
 */
const de_DirectoryLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DirectoryLimitExceededException(body, context);
  const exception = new DirectoryLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DirectoryNotSharedExceptionRes
 */
const de_DirectoryNotSharedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryNotSharedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DirectoryNotSharedException(body, context);
  const exception = new DirectoryNotSharedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DirectoryUnavailableExceptionRes
 */
const de_DirectoryUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DirectoryUnavailableException(body, context);
  const exception = new DirectoryUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DomainControllerLimitExceededExceptionRes
 */
const de_DomainControllerLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DomainControllerLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DomainControllerLimitExceededException(body, context);
  const exception = new DomainControllerLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EntityAlreadyExistsExceptionRes
 */
const de_EntityAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EntityAlreadyExistsException(body, context);
  const exception = new EntityAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EntityDoesNotExistExceptionRes
 */
const de_EntityDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EntityDoesNotExistException(body, context);
  const exception = new EntityDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IncompatibleSettingsExceptionRes
 */
const de_IncompatibleSettingsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleSettingsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IncompatibleSettingsException(body, context);
  const exception = new IncompatibleSettingsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InsufficientPermissionsExceptionRes
 */
const de_InsufficientPermissionsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientPermissionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientPermissionsException(body, context);
  const exception = new InsufficientPermissionsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidCertificateExceptionRes
 */
const de_InvalidCertificateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCertificateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCertificateException(body, context);
  const exception = new InvalidCertificateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidClientAuthStatusExceptionRes
 */
const de_InvalidClientAuthStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidClientAuthStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidClientAuthStatusException(body, context);
  const exception = new InvalidClientAuthStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidLDAPSStatusExceptionRes
 */
const de_InvalidLDAPSStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLDAPSStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidLDAPSStatusException(body, context);
  const exception = new InvalidLDAPSStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPasswordExceptionRes
 */
const de_InvalidPasswordExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPasswordException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPasswordException(body, context);
  const exception = new InvalidPasswordException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTargetExceptionRes
 */
const de_InvalidTargetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTargetException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTargetException(body, context);
  const exception = new InvalidTargetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IpRouteLimitExceededExceptionRes
 */
const de_IpRouteLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IpRouteLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IpRouteLimitExceededException(body, context);
  const exception = new IpRouteLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoAvailableCertificateExceptionRes
 */
const de_NoAvailableCertificateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoAvailableCertificateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoAvailableCertificateException(body, context);
  const exception = new NoAvailableCertificateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OrganizationsExceptionRes
 */
const de_OrganizationsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OrganizationsException(body, context);
  const exception = new OrganizationsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RegionLimitExceededExceptionRes
 */
const de_RegionLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RegionLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RegionLimitExceededException(body, context);
  const exception = new RegionLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceExceptionRes
 */
const de_ServiceExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceException(body, context);
  const exception = new ServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ShareLimitExceededExceptionRes
 */
const de_ShareLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ShareLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ShareLimitExceededException(body, context);
  const exception = new ShareLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SnapshotLimitExceededExceptionRes
 */
const de_SnapshotLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SnapshotLimitExceededException(body, context);
  const exception = new SnapshotLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagLimitExceededExceptionRes
 */
const de_TagLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagLimitExceededException(body, context);
  const exception = new TagLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedOperationException(body, context);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedSettingsExceptionRes
 */
const de_UnsupportedSettingsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedSettingsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedSettingsException(body, context);
  const exception = new UnsupportedSettingsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UserDoesNotExistExceptionRes
 */
const de_UserDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UserDoesNotExistException(body, context);
  const exception = new UserDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AcceptSharedDirectoryRequest
 */
const se_AcceptSharedDirectoryRequest = (input: AcceptSharedDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.SharedDirectoryId != null && { SharedDirectoryId: input.SharedDirectoryId }),
  };
};

/**
 * serializeAws_json1_1AddIpRoutesRequest
 */
const se_AddIpRoutesRequest = (input: AddIpRoutesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.IpRoutes != null && { IpRoutes: se_IpRoutes(input.IpRoutes, context) }),
    ...(input.UpdateSecurityGroupForDirectoryControllers != null && {
      UpdateSecurityGroupForDirectoryControllers: input.UpdateSecurityGroupForDirectoryControllers,
    }),
  };
};

/**
 * serializeAws_json1_1AddRegionRequest
 */
const se_AddRegionRequest = (input: AddRegionRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.RegionName != null && { RegionName: input.RegionName }),
    ...(input.VPCSettings != null && { VPCSettings: se_DirectoryVpcSettings(input.VPCSettings, context) }),
  };
};

/**
 * serializeAws_json1_1AddTagsToResourceRequest
 */
const se_AddTagsToResourceRequest = (input: AddTagsToResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1Attribute
 */
const se_Attribute = (input: Attribute, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1Attributes
 */
const se_Attributes = (input: Attribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Attribute(entry, context);
    });
};

/**
 * serializeAws_json1_1CancelSchemaExtensionRequest
 */
const se_CancelSchemaExtensionRequest = (input: CancelSchemaExtensionRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.SchemaExtensionId != null && { SchemaExtensionId: input.SchemaExtensionId }),
  };
};

/**
 * serializeAws_json1_1CidrIps
 */
const se_CidrIps = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ClientCertAuthSettings
 */
const se_ClientCertAuthSettings = (input: ClientCertAuthSettings, context: __SerdeContext): any => {
  return {
    ...(input.OCSPUrl != null && { OCSPUrl: input.OCSPUrl }),
  };
};

/**
 * serializeAws_json1_1ConnectDirectoryRequest
 */
const se_ConnectDirectoryRequest = (input: ConnectDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectSettings != null && {
      ConnectSettings: se_DirectoryConnectSettings(input.ConnectSettings, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.ShortName != null && { ShortName: input.ShortName }),
    ...(input.Size != null && { Size: input.Size }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateAliasRequest
 */
const se_CreateAliasRequest = (input: CreateAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.Alias != null && { Alias: input.Alias }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
  };
};

/**
 * serializeAws_json1_1CreateComputerRequest
 */
const se_CreateComputerRequest = (input: CreateComputerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ComputerAttributes != null && { ComputerAttributes: se_Attributes(input.ComputerAttributes, context) }),
    ...(input.ComputerName != null && { ComputerName: input.ComputerName }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.OrganizationalUnitDistinguishedName != null && {
      OrganizationalUnitDistinguishedName: input.OrganizationalUnitDistinguishedName,
    }),
    ...(input.Password != null && { Password: input.Password }),
  };
};

/**
 * serializeAws_json1_1CreateConditionalForwarderRequest
 */
const se_CreateConditionalForwarderRequest = (
  input: CreateConditionalForwarderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.DnsIpAddrs != null && { DnsIpAddrs: se_DnsIpAddrs(input.DnsIpAddrs, context) }),
    ...(input.RemoteDomainName != null && { RemoteDomainName: input.RemoteDomainName }),
  };
};

/**
 * serializeAws_json1_1CreateDirectoryRequest
 */
const se_CreateDirectoryRequest = (input: CreateDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.ShortName != null && { ShortName: input.ShortName }),
    ...(input.Size != null && { Size: input.Size }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.VpcSettings != null && { VpcSettings: se_DirectoryVpcSettings(input.VpcSettings, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLogSubscriptionRequest
 */
const se_CreateLogSubscriptionRequest = (input: CreateLogSubscriptionRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.LogGroupName != null && { LogGroupName: input.LogGroupName }),
  };
};

/**
 * serializeAws_json1_1CreateMicrosoftADRequest
 */
const se_CreateMicrosoftADRequest = (input: CreateMicrosoftADRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Edition != null && { Edition: input.Edition }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.ShortName != null && { ShortName: input.ShortName }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.VpcSettings != null && { VpcSettings: se_DirectoryVpcSettings(input.VpcSettings, context) }),
  };
};

/**
 * serializeAws_json1_1CreateSnapshotRequest
 */
const se_CreateSnapshotRequest = (input: CreateSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1CreateTrustRequest
 */
const se_CreateTrustRequest = (input: CreateTrustRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConditionalForwarderIpAddrs != null && {
      ConditionalForwarderIpAddrs: se_DnsIpAddrs(input.ConditionalForwarderIpAddrs, context),
    }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.RemoteDomainName != null && { RemoteDomainName: input.RemoteDomainName }),
    ...(input.SelectiveAuth != null && { SelectiveAuth: input.SelectiveAuth }),
    ...(input.TrustDirection != null && { TrustDirection: input.TrustDirection }),
    ...(input.TrustPassword != null && { TrustPassword: input.TrustPassword }),
    ...(input.TrustType != null && { TrustType: input.TrustType }),
  };
};

/**
 * serializeAws_json1_1DeleteConditionalForwarderRequest
 */
const se_DeleteConditionalForwarderRequest = (
  input: DeleteConditionalForwarderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.RemoteDomainName != null && { RemoteDomainName: input.RemoteDomainName }),
  };
};

/**
 * serializeAws_json1_1DeleteDirectoryRequest
 */
const se_DeleteDirectoryRequest = (input: DeleteDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
  };
};

/**
 * serializeAws_json1_1DeleteLogSubscriptionRequest
 */
const se_DeleteLogSubscriptionRequest = (input: DeleteLogSubscriptionRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
  };
};

/**
 * serializeAws_json1_1DeleteSnapshotRequest
 */
const se_DeleteSnapshotRequest = (input: DeleteSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
  };
};

/**
 * serializeAws_json1_1DeleteTrustRequest
 */
const se_DeleteTrustRequest = (input: DeleteTrustRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeleteAssociatedConditionalForwarder != null && {
      DeleteAssociatedConditionalForwarder: input.DeleteAssociatedConditionalForwarder,
    }),
    ...(input.TrustId != null && { TrustId: input.TrustId }),
  };
};

/**
 * serializeAws_json1_1DeregisterCertificateRequest
 */
const se_DeregisterCertificateRequest = (input: DeregisterCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateId != null && { CertificateId: input.CertificateId }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
  };
};

/**
 * serializeAws_json1_1DeregisterEventTopicRequest
 */
const se_DeregisterEventTopicRequest = (input: DeregisterEventTopicRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.TopicName != null && { TopicName: input.TopicName }),
  };
};

/**
 * serializeAws_json1_1DescribeCertificateRequest
 */
const se_DescribeCertificateRequest = (input: DescribeCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateId != null && { CertificateId: input.CertificateId }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
  };
};

/**
 * serializeAws_json1_1DescribeClientAuthenticationSettingsRequest
 */
const se_DescribeClientAuthenticationSettingsRequest = (
  input: DescribeClientAuthenticationSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1DescribeConditionalForwardersRequest
 */
const se_DescribeConditionalForwardersRequest = (
  input: DescribeConditionalForwardersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.RemoteDomainNames != null && {
      RemoteDomainNames: se_RemoteDomainNames(input.RemoteDomainNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeDirectoriesRequest
 */
const se_DescribeDirectoriesRequest = (input: DescribeDirectoriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryIds != null && { DirectoryIds: se_DirectoryIds(input.DirectoryIds, context) }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeDomainControllersRequest
 */
const se_DescribeDomainControllersRequest = (input: DescribeDomainControllersRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.DomainControllerIds != null && {
      DomainControllerIds: se_DomainControllerIds(input.DomainControllerIds, context),
    }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeEventTopicsRequest
 */
const se_DescribeEventTopicsRequest = (input: DescribeEventTopicsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.TopicNames != null && { TopicNames: se_TopicNames(input.TopicNames, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeLDAPSSettingsRequest
 */
const se_DescribeLDAPSSettingsRequest = (input: DescribeLDAPSSettingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1DescribeRegionsRequest
 */
const se_DescribeRegionsRequest = (input: DescribeRegionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RegionName != null && { RegionName: input.RegionName }),
  };
};

/**
 * serializeAws_json1_1DescribeSettingsRequest
 */
const se_DescribeSettingsRequest = (input: DescribeSettingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1DescribeSharedDirectoriesRequest
 */
const se_DescribeSharedDirectoriesRequest = (input: DescribeSharedDirectoriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OwnerDirectoryId != null && { OwnerDirectoryId: input.OwnerDirectoryId }),
    ...(input.SharedDirectoryIds != null && { SharedDirectoryIds: se_DirectoryIds(input.SharedDirectoryIds, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeSnapshotsRequest
 */
const se_DescribeSnapshotsRequest = (input: DescribeSnapshotsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SnapshotIds != null && { SnapshotIds: se_SnapshotIds(input.SnapshotIds, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeTrustsRequest
 */
const se_DescribeTrustsRequest = (input: DescribeTrustsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TrustIds != null && { TrustIds: se_TrustIds(input.TrustIds, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeUpdateDirectoryRequest
 */
const se_DescribeUpdateDirectoryRequest = (input: DescribeUpdateDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RegionName != null && { RegionName: input.RegionName }),
    ...(input.UpdateType != null && { UpdateType: input.UpdateType }),
  };
};

/**
 * serializeAws_json1_1DirectoryConnectSettings
 */
const se_DirectoryConnectSettings = (input: DirectoryConnectSettings, context: __SerdeContext): any => {
  return {
    ...(input.CustomerDnsIps != null && { CustomerDnsIps: se_DnsIpAddrs(input.CustomerDnsIps, context) }),
    ...(input.CustomerUserName != null && { CustomerUserName: input.CustomerUserName }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIds(input.SubnetIds, context) }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

/**
 * serializeAws_json1_1DirectoryIds
 */
const se_DirectoryIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DirectoryVpcSettings
 */
const se_DirectoryVpcSettings = (input: DirectoryVpcSettings, context: __SerdeContext): any => {
  return {
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIds(input.SubnetIds, context) }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

/**
 * serializeAws_json1_1DisableClientAuthenticationRequest
 */
const se_DisableClientAuthenticationRequest = (
  input: DisableClientAuthenticationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1DisableLDAPSRequest
 */
const se_DisableLDAPSRequest = (input: DisableLDAPSRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1DisableRadiusRequest
 */
const se_DisableRadiusRequest = (input: DisableRadiusRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
  };
};

/**
 * serializeAws_json1_1DisableSsoRequest
 */
const se_DisableSsoRequest = (input: DisableSsoRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1DnsIpAddrs
 */
const se_DnsIpAddrs = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DomainControllerIds
 */
const se_DomainControllerIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EnableClientAuthenticationRequest
 */
const se_EnableClientAuthenticationRequest = (
  input: EnableClientAuthenticationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1EnableLDAPSRequest
 */
const se_EnableLDAPSRequest = (input: EnableLDAPSRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1EnableRadiusRequest
 */
const se_EnableRadiusRequest = (input: EnableRadiusRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.RadiusSettings != null && { RadiusSettings: se_RadiusSettings(input.RadiusSettings, context) }),
  };
};

/**
 * serializeAws_json1_1EnableSsoRequest
 */
const se_EnableSsoRequest = (input: EnableSsoRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1GetDirectoryLimitsRequest
 */
const se_GetDirectoryLimitsRequest = (input: GetDirectoryLimitsRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetSnapshotLimitsRequest
 */
const se_GetSnapshotLimitsRequest = (input: GetSnapshotLimitsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
  };
};

/**
 * serializeAws_json1_1IpRoute
 */
const se_IpRoute = (input: IpRoute, context: __SerdeContext): any => {
  return {
    ...(input.CidrIp != null && { CidrIp: input.CidrIp }),
    ...(input.Description != null && { Description: input.Description }),
  };
};

/**
 * serializeAws_json1_1IpRoutes
 */
const se_IpRoutes = (input: IpRoute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_IpRoute(entry, context);
    });
};

/**
 * serializeAws_json1_1ListCertificatesRequest
 */
const se_ListCertificatesRequest = (input: ListCertificatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListIpRoutesRequest
 */
const se_ListIpRoutesRequest = (input: ListIpRoutesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListLogSubscriptionsRequest
 */
const se_ListLogSubscriptionsRequest = (input: ListLogSubscriptionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListSchemaExtensionsRequest
 */
const se_ListSchemaExtensionsRequest = (input: ListSchemaExtensionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1OSUpdateSettings
 */
const se_OSUpdateSettings = (input: OSUpdateSettings, context: __SerdeContext): any => {
  return {
    ...(input.OSVersion != null && { OSVersion: input.OSVersion }),
  };
};

/**
 * serializeAws_json1_1RadiusSettings
 */
const se_RadiusSettings = (input: RadiusSettings, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationProtocol != null && { AuthenticationProtocol: input.AuthenticationProtocol }),
    ...(input.DisplayLabel != null && { DisplayLabel: input.DisplayLabel }),
    ...(input.RadiusPort != null && { RadiusPort: input.RadiusPort }),
    ...(input.RadiusRetries != null && { RadiusRetries: input.RadiusRetries }),
    ...(input.RadiusServers != null && { RadiusServers: se_Servers(input.RadiusServers, context) }),
    ...(input.RadiusTimeout != null && { RadiusTimeout: input.RadiusTimeout }),
    ...(input.SharedSecret != null && { SharedSecret: input.SharedSecret }),
    ...(input.UseSameUsername != null && { UseSameUsername: input.UseSameUsername }),
  };
};

/**
 * serializeAws_json1_1RegisterCertificateRequest
 */
const se_RegisterCertificateRequest = (input: RegisterCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateData != null && { CertificateData: input.CertificateData }),
    ...(input.ClientCertAuthSettings != null && {
      ClientCertAuthSettings: se_ClientCertAuthSettings(input.ClientCertAuthSettings, context),
    }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1RegisterEventTopicRequest
 */
const se_RegisterEventTopicRequest = (input: RegisterEventTopicRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.TopicName != null && { TopicName: input.TopicName }),
  };
};

/**
 * serializeAws_json1_1RejectSharedDirectoryRequest
 */
const se_RejectSharedDirectoryRequest = (input: RejectSharedDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.SharedDirectoryId != null && { SharedDirectoryId: input.SharedDirectoryId }),
  };
};

/**
 * serializeAws_json1_1RemoteDomainNames
 */
const se_RemoteDomainNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RemoveIpRoutesRequest
 */
const se_RemoveIpRoutesRequest = (input: RemoveIpRoutesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CidrIps != null && { CidrIps: se_CidrIps(input.CidrIps, context) }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
  };
};

/**
 * serializeAws_json1_1RemoveRegionRequest
 */
const se_RemoveRegionRequest = (input: RemoveRegionRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
  };
};

/**
 * serializeAws_json1_1RemoveTagsFromResourceRequest
 */
const se_RemoveTagsFromResourceRequest = (input: RemoveTagsFromResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeys(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1ResetUserPasswordRequest
 */
const se_ResetUserPasswordRequest = (input: ResetUserPasswordRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.NewPassword != null && { NewPassword: input.NewPassword }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1RestoreFromSnapshotRequest
 */
const se_RestoreFromSnapshotRequest = (input: RestoreFromSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
  };
};

/**
 * serializeAws_json1_1Servers
 */
const se_Servers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Setting
 */
const se_Setting = (input: Setting, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1Settings
 */
const se_Settings = (input: Setting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Setting(entry, context);
    });
};

/**
 * serializeAws_json1_1ShareDirectoryRequest
 */
const se_ShareDirectoryRequest = (input: ShareDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.ShareMethod != null && { ShareMethod: input.ShareMethod }),
    ...(input.ShareNotes != null && { ShareNotes: input.ShareNotes }),
    ...(input.ShareTarget != null && { ShareTarget: se_ShareTarget(input.ShareTarget, context) }),
  };
};

/**
 * serializeAws_json1_1ShareTarget
 */
const se_ShareTarget = (input: ShareTarget, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1SnapshotIds
 */
const se_SnapshotIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StartSchemaExtensionRequest
 */
const se_StartSchemaExtensionRequest = (input: StartSchemaExtensionRequest, context: __SerdeContext): any => {
  return {
    ...(input.CreateSnapshotBeforeSchemaExtension != null && {
      CreateSnapshotBeforeSchemaExtension: input.CreateSnapshotBeforeSchemaExtension,
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.LdifContent != null && { LdifContent: input.LdifContent }),
  };
};

/**
 * serializeAws_json1_1SubnetIds
 */
const se_SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TopicNames
 */
const se_TopicNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TrustIds
 */
const se_TrustIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1UnshareDirectoryRequest
 */
const se_UnshareDirectoryRequest = (input: UnshareDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.UnshareTarget != null && { UnshareTarget: se_UnshareTarget(input.UnshareTarget, context) }),
  };
};

/**
 * serializeAws_json1_1UnshareTarget
 */
const se_UnshareTarget = (input: UnshareTarget, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1UpdateConditionalForwarderRequest
 */
const se_UpdateConditionalForwarderRequest = (
  input: UpdateConditionalForwarderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.DnsIpAddrs != null && { DnsIpAddrs: se_DnsIpAddrs(input.DnsIpAddrs, context) }),
    ...(input.RemoteDomainName != null && { RemoteDomainName: input.RemoteDomainName }),
  };
};

/**
 * serializeAws_json1_1UpdateDirectorySetupRequest
 */
const se_UpdateDirectorySetupRequest = (input: UpdateDirectorySetupRequest, context: __SerdeContext): any => {
  return {
    ...(input.CreateSnapshotBeforeUpdate != null && { CreateSnapshotBeforeUpdate: input.CreateSnapshotBeforeUpdate }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.OSUpdateSettings != null && { OSUpdateSettings: se_OSUpdateSettings(input.OSUpdateSettings, context) }),
    ...(input.UpdateType != null && { UpdateType: input.UpdateType }),
  };
};

/**
 * serializeAws_json1_1UpdateNumberOfDomainControllersRequest
 */
const se_UpdateNumberOfDomainControllersRequest = (
  input: UpdateNumberOfDomainControllersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DesiredNumber != null && { DesiredNumber: input.DesiredNumber }),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
  };
};

/**
 * serializeAws_json1_1UpdateRadiusRequest
 */
const se_UpdateRadiusRequest = (input: UpdateRadiusRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.RadiusSettings != null && { RadiusSettings: se_RadiusSettings(input.RadiusSettings, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateSettingsRequest
 */
const se_UpdateSettingsRequest = (input: UpdateSettingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Settings != null && { Settings: se_Settings(input.Settings, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateTrustRequest
 */
const se_UpdateTrustRequest = (input: UpdateTrustRequest, context: __SerdeContext): any => {
  return {
    ...(input.SelectiveAuth != null && { SelectiveAuth: input.SelectiveAuth }),
    ...(input.TrustId != null && { TrustId: input.TrustId }),
  };
};

/**
 * serializeAws_json1_1VerifyTrustRequest
 */
const se_VerifyTrustRequest = (input: VerifyTrustRequest, context: __SerdeContext): any => {
  return {
    ...(input.TrustId != null && { TrustId: input.TrustId }),
  };
};

/**
 * deserializeAws_json1_1AcceptSharedDirectoryResult
 */
const de_AcceptSharedDirectoryResult = (output: any, context: __SerdeContext): AcceptSharedDirectoryResult => {
  return {
    SharedDirectory: output.SharedDirectory != null ? de_SharedDirectory(output.SharedDirectory, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1AddIpRoutesResult
 */
const de_AddIpRoutesResult = (output: any, context: __SerdeContext): AddIpRoutesResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdditionalRegions
 */
const de_AdditionalRegions = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1AddRegionResult
 */
const de_AddRegionResult = (output: any, context: __SerdeContext): AddRegionResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AddTagsToResourceResult
 */
const de_AddTagsToResourceResult = (output: any, context: __SerdeContext): AddTagsToResourceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Attribute
 */
const de_Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1Attributes
 */
const de_Attributes = (output: any, context: __SerdeContext): Attribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Attribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AuthenticationFailedException
 */
const de_AuthenticationFailedException = (output: any, context: __SerdeContext): AuthenticationFailedException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1AvailabilityZones
 */
const de_AvailabilityZones = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1CancelSchemaExtensionResult
 */
const de_CancelSchemaExtensionResult = (output: any, context: __SerdeContext): CancelSchemaExtensionResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Certificate
 */
const de_Certificate = (output: any, context: __SerdeContext): Certificate => {
  return {
    CertificateId: __expectString(output.CertificateId),
    ClientCertAuthSettings:
      output.ClientCertAuthSettings != null
        ? de_ClientCertAuthSettings(output.ClientCertAuthSettings, context)
        : undefined,
    CommonName: __expectString(output.CommonName),
    ExpiryDateTime:
      output.ExpiryDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpiryDateTime)))
        : undefined,
    RegisteredDateTime:
      output.RegisteredDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RegisteredDateTime)))
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1CertificateAlreadyExistsException
 */
const de_CertificateAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): CertificateAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1CertificateDoesNotExistException
 */
const de_CertificateDoesNotExistException = (
  output: any,
  context: __SerdeContext
): CertificateDoesNotExistException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1CertificateInfo
 */
const de_CertificateInfo = (output: any, context: __SerdeContext): CertificateInfo => {
  return {
    CertificateId: __expectString(output.CertificateId),
    CommonName: __expectString(output.CommonName),
    ExpiryDateTime:
      output.ExpiryDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpiryDateTime)))
        : undefined,
    State: __expectString(output.State),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1CertificateInUseException
 */
const de_CertificateInUseException = (output: any, context: __SerdeContext): CertificateInUseException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1CertificateLimitExceededException
 */
const de_CertificateLimitExceededException = (
  output: any,
  context: __SerdeContext
): CertificateLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1CertificatesInfo
 */
const de_CertificatesInfo = (output: any, context: __SerdeContext): CertificateInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CertificateInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClientAuthenticationSettingInfo
 */
const de_ClientAuthenticationSettingInfo = (output: any, context: __SerdeContext): ClientAuthenticationSettingInfo => {
  return {
    LastUpdatedDateTime:
      output.LastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedDateTime)))
        : undefined,
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ClientAuthenticationSettingsInfo
 */
const de_ClientAuthenticationSettingsInfo = (
  output: any,
  context: __SerdeContext
): ClientAuthenticationSettingInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ClientAuthenticationSettingInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClientCertAuthSettings
 */
const de_ClientCertAuthSettings = (output: any, context: __SerdeContext): ClientCertAuthSettings => {
  return {
    OCSPUrl: __expectString(output.OCSPUrl),
  } as any;
};

/**
 * deserializeAws_json1_1ClientException
 */
const de_ClientException = (output: any, context: __SerdeContext): ClientException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1Computer
 */
const de_Computer = (output: any, context: __SerdeContext): Computer => {
  return {
    ComputerAttributes:
      output.ComputerAttributes != null ? de_Attributes(output.ComputerAttributes, context) : undefined,
    ComputerId: __expectString(output.ComputerId),
    ComputerName: __expectString(output.ComputerName),
  } as any;
};

/**
 * deserializeAws_json1_1ConditionalForwarder
 */
const de_ConditionalForwarder = (output: any, context: __SerdeContext): ConditionalForwarder => {
  return {
    DnsIpAddrs: output.DnsIpAddrs != null ? de_DnsIpAddrs(output.DnsIpAddrs, context) : undefined,
    RemoteDomainName: __expectString(output.RemoteDomainName),
    ReplicationScope: __expectString(output.ReplicationScope),
  } as any;
};

/**
 * deserializeAws_json1_1ConditionalForwarders
 */
const de_ConditionalForwarders = (output: any, context: __SerdeContext): ConditionalForwarder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConditionalForwarder(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConnectDirectoryResult
 */
const de_ConnectDirectoryResult = (output: any, context: __SerdeContext): ConnectDirectoryResult => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateAliasResult
 */
const de_CreateAliasResult = (output: any, context: __SerdeContext): CreateAliasResult => {
  return {
    Alias: __expectString(output.Alias),
    DirectoryId: __expectString(output.DirectoryId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateComputerResult
 */
const de_CreateComputerResult = (output: any, context: __SerdeContext): CreateComputerResult => {
  return {
    Computer: output.Computer != null ? de_Computer(output.Computer, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateConditionalForwarderResult
 */
const de_CreateConditionalForwarderResult = (
  output: any,
  context: __SerdeContext
): CreateConditionalForwarderResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateDirectoryResult
 */
const de_CreateDirectoryResult = (output: any, context: __SerdeContext): CreateDirectoryResult => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateLogSubscriptionResult
 */
const de_CreateLogSubscriptionResult = (output: any, context: __SerdeContext): CreateLogSubscriptionResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateMicrosoftADResult
 */
const de_CreateMicrosoftADResult = (output: any, context: __SerdeContext): CreateMicrosoftADResult => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateSnapshotResult
 */
const de_CreateSnapshotResult = (output: any, context: __SerdeContext): CreateSnapshotResult => {
  return {
    SnapshotId: __expectString(output.SnapshotId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateTrustResult
 */
const de_CreateTrustResult = (output: any, context: __SerdeContext): CreateTrustResult => {
  return {
    TrustId: __expectString(output.TrustId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteConditionalForwarderResult
 */
const de_DeleteConditionalForwarderResult = (
  output: any,
  context: __SerdeContext
): DeleteConditionalForwarderResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteDirectoryResult
 */
const de_DeleteDirectoryResult = (output: any, context: __SerdeContext): DeleteDirectoryResult => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteLogSubscriptionResult
 */
const de_DeleteLogSubscriptionResult = (output: any, context: __SerdeContext): DeleteLogSubscriptionResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteSnapshotResult
 */
const de_DeleteSnapshotResult = (output: any, context: __SerdeContext): DeleteSnapshotResult => {
  return {
    SnapshotId: __expectString(output.SnapshotId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteTrustResult
 */
const de_DeleteTrustResult = (output: any, context: __SerdeContext): DeleteTrustResult => {
  return {
    TrustId: __expectString(output.TrustId),
  } as any;
};

/**
 * deserializeAws_json1_1DeregisterCertificateResult
 */
const de_DeregisterCertificateResult = (output: any, context: __SerdeContext): DeregisterCertificateResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeregisterEventTopicResult
 */
const de_DeregisterEventTopicResult = (output: any, context: __SerdeContext): DeregisterEventTopicResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeCertificateResult
 */
const de_DescribeCertificateResult = (output: any, context: __SerdeContext): DescribeCertificateResult => {
  return {
    Certificate: output.Certificate != null ? de_Certificate(output.Certificate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeClientAuthenticationSettingsResult
 */
const de_DescribeClientAuthenticationSettingsResult = (
  output: any,
  context: __SerdeContext
): DescribeClientAuthenticationSettingsResult => {
  return {
    ClientAuthenticationSettingsInfo:
      output.ClientAuthenticationSettingsInfo != null
        ? de_ClientAuthenticationSettingsInfo(output.ClientAuthenticationSettingsInfo, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConditionalForwardersResult
 */
const de_DescribeConditionalForwardersResult = (
  output: any,
  context: __SerdeContext
): DescribeConditionalForwardersResult => {
  return {
    ConditionalForwarders:
      output.ConditionalForwarders != null
        ? de_ConditionalForwarders(output.ConditionalForwarders, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDirectoriesResult
 */
const de_DescribeDirectoriesResult = (output: any, context: __SerdeContext): DescribeDirectoriesResult => {
  return {
    DirectoryDescriptions:
      output.DirectoryDescriptions != null
        ? de_DirectoryDescriptions(output.DirectoryDescriptions, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDomainControllersResult
 */
const de_DescribeDomainControllersResult = (output: any, context: __SerdeContext): DescribeDomainControllersResult => {
  return {
    DomainControllers:
      output.DomainControllers != null ? de_DomainControllers(output.DomainControllers, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventTopicsResult
 */
const de_DescribeEventTopicsResult = (output: any, context: __SerdeContext): DescribeEventTopicsResult => {
  return {
    EventTopics: output.EventTopics != null ? de_EventTopics(output.EventTopics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLDAPSSettingsResult
 */
const de_DescribeLDAPSSettingsResult = (output: any, context: __SerdeContext): DescribeLDAPSSettingsResult => {
  return {
    LDAPSSettingsInfo:
      output.LDAPSSettingsInfo != null ? de_LDAPSSettingsInfo(output.LDAPSSettingsInfo, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRegionsResult
 */
const de_DescribeRegionsResult = (output: any, context: __SerdeContext): DescribeRegionsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    RegionsDescription:
      output.RegionsDescription != null ? de_RegionsDescription(output.RegionsDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSettingsResult
 */
const de_DescribeSettingsResult = (output: any, context: __SerdeContext): DescribeSettingsResult => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
    NextToken: __expectString(output.NextToken),
    SettingEntries: output.SettingEntries != null ? de_SettingEntries(output.SettingEntries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSharedDirectoriesResult
 */
const de_DescribeSharedDirectoriesResult = (output: any, context: __SerdeContext): DescribeSharedDirectoriesResult => {
  return {
    NextToken: __expectString(output.NextToken),
    SharedDirectories:
      output.SharedDirectories != null ? de_SharedDirectories(output.SharedDirectories, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSnapshotsResult
 */
const de_DescribeSnapshotsResult = (output: any, context: __SerdeContext): DescribeSnapshotsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Snapshots: output.Snapshots != null ? de_Snapshots(output.Snapshots, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTrustsResult
 */
const de_DescribeTrustsResult = (output: any, context: __SerdeContext): DescribeTrustsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Trusts: output.Trusts != null ? de_Trusts(output.Trusts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUpdateDirectoryResult
 */
const de_DescribeUpdateDirectoryResult = (output: any, context: __SerdeContext): DescribeUpdateDirectoryResult => {
  return {
    NextToken: __expectString(output.NextToken),
    UpdateActivities:
      output.UpdateActivities != null ? de_UpdateActivities(output.UpdateActivities, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryAlreadyInRegionException
 */
const de_DirectoryAlreadyInRegionException = (
  output: any,
  context: __SerdeContext
): DirectoryAlreadyInRegionException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryAlreadySharedException
 */
const de_DirectoryAlreadySharedException = (output: any, context: __SerdeContext): DirectoryAlreadySharedException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryConfigurationSettingRequestDetailedStatus
 */
const de_DirectoryConfigurationSettingRequestDetailedStatus = (
  output: any,
  context: __SerdeContext
): Record<string, DirectoryConfigurationStatus | string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, DirectoryConfigurationStatus | string>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1DirectoryConnectSettingsDescription
 */
const de_DirectoryConnectSettingsDescription = (
  output: any,
  context: __SerdeContext
): DirectoryConnectSettingsDescription => {
  return {
    AvailabilityZones:
      output.AvailabilityZones != null ? de_AvailabilityZones(output.AvailabilityZones, context) : undefined,
    ConnectIps: output.ConnectIps != null ? de_IpAddrs(output.ConnectIps, context) : undefined,
    CustomerUserName: __expectString(output.CustomerUserName),
    SecurityGroupId: __expectString(output.SecurityGroupId),
    SubnetIds: output.SubnetIds != null ? de_SubnetIds(output.SubnetIds, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryDescription
 */
const de_DirectoryDescription = (output: any, context: __SerdeContext): DirectoryDescription => {
  return {
    AccessUrl: __expectString(output.AccessUrl),
    Alias: __expectString(output.Alias),
    ConnectSettings:
      output.ConnectSettings != null
        ? de_DirectoryConnectSettingsDescription(output.ConnectSettings, context)
        : undefined,
    Description: __expectString(output.Description),
    DesiredNumberOfDomainControllers: __expectInt32(output.DesiredNumberOfDomainControllers),
    DirectoryId: __expectString(output.DirectoryId),
    DnsIpAddrs: output.DnsIpAddrs != null ? de_DnsIpAddrs(output.DnsIpAddrs, context) : undefined,
    Edition: __expectString(output.Edition),
    LaunchTime:
      output.LaunchTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LaunchTime))) : undefined,
    Name: __expectString(output.Name),
    OsVersion: __expectString(output.OsVersion),
    OwnerDirectoryDescription:
      output.OwnerDirectoryDescription != null
        ? de_OwnerDirectoryDescription(output.OwnerDirectoryDescription, context)
        : undefined,
    RadiusSettings: output.RadiusSettings != null ? de_RadiusSettings(output.RadiusSettings, context) : undefined,
    RadiusStatus: __expectString(output.RadiusStatus),
    RegionsInfo: output.RegionsInfo != null ? de_RegionsInfo(output.RegionsInfo, context) : undefined,
    ShareMethod: __expectString(output.ShareMethod),
    ShareNotes: __expectString(output.ShareNotes),
    ShareStatus: __expectString(output.ShareStatus),
    ShortName: __expectString(output.ShortName),
    Size: __expectString(output.Size),
    SsoEnabled: __expectBoolean(output.SsoEnabled),
    Stage: __expectString(output.Stage),
    StageLastUpdatedDateTime:
      output.StageLastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StageLastUpdatedDateTime)))
        : undefined,
    StageReason: __expectString(output.StageReason),
    Type: __expectString(output.Type),
    VpcSettings:
      output.VpcSettings != null ? de_DirectoryVpcSettingsDescription(output.VpcSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryDescriptions
 */
const de_DirectoryDescriptions = (output: any, context: __SerdeContext): DirectoryDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DirectoryDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DirectoryDoesNotExistException
 */
const de_DirectoryDoesNotExistException = (output: any, context: __SerdeContext): DirectoryDoesNotExistException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryInDesiredStateException
 */
const de_DirectoryInDesiredStateException = (
  output: any,
  context: __SerdeContext
): DirectoryInDesiredStateException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryLimitExceededException
 */
const de_DirectoryLimitExceededException = (output: any, context: __SerdeContext): DirectoryLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryLimits
 */
const de_DirectoryLimits = (output: any, context: __SerdeContext): DirectoryLimits => {
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

/**
 * deserializeAws_json1_1DirectoryNotSharedException
 */
const de_DirectoryNotSharedException = (output: any, context: __SerdeContext): DirectoryNotSharedException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryUnavailableException
 */
const de_DirectoryUnavailableException = (output: any, context: __SerdeContext): DirectoryUnavailableException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryVpcSettings
 */
const de_DirectoryVpcSettings = (output: any, context: __SerdeContext): DirectoryVpcSettings => {
  return {
    SubnetIds: output.SubnetIds != null ? de_SubnetIds(output.SubnetIds, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryVpcSettingsDescription
 */
const de_DirectoryVpcSettingsDescription = (output: any, context: __SerdeContext): DirectoryVpcSettingsDescription => {
  return {
    AvailabilityZones:
      output.AvailabilityZones != null ? de_AvailabilityZones(output.AvailabilityZones, context) : undefined,
    SecurityGroupId: __expectString(output.SecurityGroupId),
    SubnetIds: output.SubnetIds != null ? de_SubnetIds(output.SubnetIds, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1DisableClientAuthenticationResult
 */
const de_DisableClientAuthenticationResult = (
  output: any,
  context: __SerdeContext
): DisableClientAuthenticationResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisableLDAPSResult
 */
const de_DisableLDAPSResult = (output: any, context: __SerdeContext): DisableLDAPSResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisableRadiusResult
 */
const de_DisableRadiusResult = (output: any, context: __SerdeContext): DisableRadiusResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisableSsoResult
 */
const de_DisableSsoResult = (output: any, context: __SerdeContext): DisableSsoResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DnsIpAddrs
 */
const de_DnsIpAddrs = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1DomainController
 */
const de_DomainController = (output: any, context: __SerdeContext): DomainController => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    DirectoryId: __expectString(output.DirectoryId),
    DnsIpAddr: __expectString(output.DnsIpAddr),
    DomainControllerId: __expectString(output.DomainControllerId),
    LaunchTime:
      output.LaunchTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LaunchTime))) : undefined,
    Status: __expectString(output.Status),
    StatusLastUpdatedDateTime:
      output.StatusLastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StatusLastUpdatedDateTime)))
        : undefined,
    StatusReason: __expectString(output.StatusReason),
    SubnetId: __expectString(output.SubnetId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1DomainControllerLimitExceededException
 */
const de_DomainControllerLimitExceededException = (
  output: any,
  context: __SerdeContext
): DomainControllerLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1DomainControllers
 */
const de_DomainControllers = (output: any, context: __SerdeContext): DomainController[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainController(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EnableClientAuthenticationResult
 */
const de_EnableClientAuthenticationResult = (
  output: any,
  context: __SerdeContext
): EnableClientAuthenticationResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1EnableLDAPSResult
 */
const de_EnableLDAPSResult = (output: any, context: __SerdeContext): EnableLDAPSResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1EnableRadiusResult
 */
const de_EnableRadiusResult = (output: any, context: __SerdeContext): EnableRadiusResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1EnableSsoResult
 */
const de_EnableSsoResult = (output: any, context: __SerdeContext): EnableSsoResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1EntityAlreadyExistsException
 */
const de_EntityAlreadyExistsException = (output: any, context: __SerdeContext): EntityAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1EntityDoesNotExistException
 */
const de_EntityDoesNotExistException = (output: any, context: __SerdeContext): EntityDoesNotExistException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1EventTopic
 */
const de_EventTopic = (output: any, context: __SerdeContext): EventTopic => {
  return {
    CreatedDateTime:
      output.CreatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDateTime)))
        : undefined,
    DirectoryId: __expectString(output.DirectoryId),
    Status: __expectString(output.Status),
    TopicArn: __expectString(output.TopicArn),
    TopicName: __expectString(output.TopicName),
  } as any;
};

/**
 * deserializeAws_json1_1EventTopics
 */
const de_EventTopics = (output: any, context: __SerdeContext): EventTopic[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventTopic(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetDirectoryLimitsResult
 */
const de_GetDirectoryLimitsResult = (output: any, context: __SerdeContext): GetDirectoryLimitsResult => {
  return {
    DirectoryLimits: output.DirectoryLimits != null ? de_DirectoryLimits(output.DirectoryLimits, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSnapshotLimitsResult
 */
const de_GetSnapshotLimitsResult = (output: any, context: __SerdeContext): GetSnapshotLimitsResult => {
  return {
    SnapshotLimits: output.SnapshotLimits != null ? de_SnapshotLimits(output.SnapshotLimits, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IncompatibleSettingsException
 */
const de_IncompatibleSettingsException = (output: any, context: __SerdeContext): IncompatibleSettingsException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1InsufficientPermissionsException
 */
const de_InsufficientPermissionsException = (
  output: any,
  context: __SerdeContext
): InsufficientPermissionsException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidCertificateException
 */
const de_InvalidCertificateException = (output: any, context: __SerdeContext): InvalidCertificateException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidClientAuthStatusException
 */
const de_InvalidClientAuthStatusException = (
  output: any,
  context: __SerdeContext
): InvalidClientAuthStatusException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidLDAPSStatusException
 */
const de_InvalidLDAPSStatusException = (output: any, context: __SerdeContext): InvalidLDAPSStatusException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPasswordException
 */
const de_InvalidPasswordException = (output: any, context: __SerdeContext): InvalidPasswordException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTargetException
 */
const de_InvalidTargetException = (output: any, context: __SerdeContext): InvalidTargetException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1IpAddrs
 */
const de_IpAddrs = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1IpRouteInfo
 */
const de_IpRouteInfo = (output: any, context: __SerdeContext): IpRouteInfo => {
  return {
    AddedDateTime:
      output.AddedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.AddedDateTime)))
        : undefined,
    CidrIp: __expectString(output.CidrIp),
    Description: __expectString(output.Description),
    DirectoryId: __expectString(output.DirectoryId),
    IpRouteStatusMsg: __expectString(output.IpRouteStatusMsg),
    IpRouteStatusReason: __expectString(output.IpRouteStatusReason),
  } as any;
};

/**
 * deserializeAws_json1_1IpRouteLimitExceededException
 */
const de_IpRouteLimitExceededException = (output: any, context: __SerdeContext): IpRouteLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1IpRoutesInfo
 */
const de_IpRoutesInfo = (output: any, context: __SerdeContext): IpRouteInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IpRouteInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LDAPSSettingInfo
 */
const de_LDAPSSettingInfo = (output: any, context: __SerdeContext): LDAPSSettingInfo => {
  return {
    LDAPSStatus: __expectString(output.LDAPSStatus),
    LDAPSStatusReason: __expectString(output.LDAPSStatusReason),
    LastUpdatedDateTime:
      output.LastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LDAPSSettingsInfo
 */
const de_LDAPSSettingsInfo = (output: any, context: __SerdeContext): LDAPSSettingInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LDAPSSettingInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListCertificatesResult
 */
const de_ListCertificatesResult = (output: any, context: __SerdeContext): ListCertificatesResult => {
  return {
    CertificatesInfo:
      output.CertificatesInfo != null ? de_CertificatesInfo(output.CertificatesInfo, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListIpRoutesResult
 */
const de_ListIpRoutesResult = (output: any, context: __SerdeContext): ListIpRoutesResult => {
  return {
    IpRoutesInfo: output.IpRoutesInfo != null ? de_IpRoutesInfo(output.IpRoutesInfo, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListLogSubscriptionsResult
 */
const de_ListLogSubscriptionsResult = (output: any, context: __SerdeContext): ListLogSubscriptionsResult => {
  return {
    LogSubscriptions:
      output.LogSubscriptions != null ? de_LogSubscriptions(output.LogSubscriptions, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListSchemaExtensionsResult
 */
const de_ListSchemaExtensionsResult = (output: any, context: __SerdeContext): ListSchemaExtensionsResult => {
  return {
    NextToken: __expectString(output.NextToken),
    SchemaExtensionsInfo:
      output.SchemaExtensionsInfo != null ? de_SchemaExtensionsInfo(output.SchemaExtensionsInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResult
 */
const de_ListTagsForResourceResult = (output: any, context: __SerdeContext): ListTagsForResourceResult => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LogSubscription
 */
const de_LogSubscription = (output: any, context: __SerdeContext): LogSubscription => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
    LogGroupName: __expectString(output.LogGroupName),
    SubscriptionCreatedDateTime:
      output.SubscriptionCreatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubscriptionCreatedDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LogSubscriptions
 */
const de_LogSubscriptions = (output: any, context: __SerdeContext): LogSubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LogSubscription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NoAvailableCertificateException
 */
const de_NoAvailableCertificateException = (output: any, context: __SerdeContext): NoAvailableCertificateException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationsException
 */
const de_OrganizationsException = (output: any, context: __SerdeContext): OrganizationsException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1OSUpdateSettings
 */
const de_OSUpdateSettings = (output: any, context: __SerdeContext): OSUpdateSettings => {
  return {
    OSVersion: __expectString(output.OSVersion),
  } as any;
};

/**
 * deserializeAws_json1_1OwnerDirectoryDescription
 */
const de_OwnerDirectoryDescription = (output: any, context: __SerdeContext): OwnerDirectoryDescription => {
  return {
    AccountId: __expectString(output.AccountId),
    DirectoryId: __expectString(output.DirectoryId),
    DnsIpAddrs: output.DnsIpAddrs != null ? de_DnsIpAddrs(output.DnsIpAddrs, context) : undefined,
    RadiusSettings: output.RadiusSettings != null ? de_RadiusSettings(output.RadiusSettings, context) : undefined,
    RadiusStatus: __expectString(output.RadiusStatus),
    VpcSettings:
      output.VpcSettings != null ? de_DirectoryVpcSettingsDescription(output.VpcSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RadiusSettings
 */
const de_RadiusSettings = (output: any, context: __SerdeContext): RadiusSettings => {
  return {
    AuthenticationProtocol: __expectString(output.AuthenticationProtocol),
    DisplayLabel: __expectString(output.DisplayLabel),
    RadiusPort: __expectInt32(output.RadiusPort),
    RadiusRetries: __expectInt32(output.RadiusRetries),
    RadiusServers: output.RadiusServers != null ? de_Servers(output.RadiusServers, context) : undefined,
    RadiusTimeout: __expectInt32(output.RadiusTimeout),
    SharedSecret: __expectString(output.SharedSecret),
    UseSameUsername: __expectBoolean(output.UseSameUsername),
  } as any;
};

/**
 * deserializeAws_json1_1RegionDescription
 */
const de_RegionDescription = (output: any, context: __SerdeContext): RegionDescription => {
  return {
    DesiredNumberOfDomainControllers: __expectInt32(output.DesiredNumberOfDomainControllers),
    DirectoryId: __expectString(output.DirectoryId),
    LastUpdatedDateTime:
      output.LastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedDateTime)))
        : undefined,
    LaunchTime:
      output.LaunchTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LaunchTime))) : undefined,
    RegionName: __expectString(output.RegionName),
    RegionType: __expectString(output.RegionType),
    Status: __expectString(output.Status),
    StatusLastUpdatedDateTime:
      output.StatusLastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StatusLastUpdatedDateTime)))
        : undefined,
    VpcSettings: output.VpcSettings != null ? de_DirectoryVpcSettings(output.VpcSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RegionLimitExceededException
 */
const de_RegionLimitExceededException = (output: any, context: __SerdeContext): RegionLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1RegionsDescription
 */
const de_RegionsDescription = (output: any, context: __SerdeContext): RegionDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RegionDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RegionsInfo
 */
const de_RegionsInfo = (output: any, context: __SerdeContext): RegionsInfo => {
  return {
    AdditionalRegions:
      output.AdditionalRegions != null ? de_AdditionalRegions(output.AdditionalRegions, context) : undefined,
    PrimaryRegion: __expectString(output.PrimaryRegion),
  } as any;
};

/**
 * deserializeAws_json1_1RegisterCertificateResult
 */
const de_RegisterCertificateResult = (output: any, context: __SerdeContext): RegisterCertificateResult => {
  return {
    CertificateId: __expectString(output.CertificateId),
  } as any;
};

/**
 * deserializeAws_json1_1RegisterEventTopicResult
 */
const de_RegisterEventTopicResult = (output: any, context: __SerdeContext): RegisterEventTopicResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RejectSharedDirectoryResult
 */
const de_RejectSharedDirectoryResult = (output: any, context: __SerdeContext): RejectSharedDirectoryResult => {
  return {
    SharedDirectoryId: __expectString(output.SharedDirectoryId),
  } as any;
};

/**
 * deserializeAws_json1_1RemoveIpRoutesResult
 */
const de_RemoveIpRoutesResult = (output: any, context: __SerdeContext): RemoveIpRoutesResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RemoveRegionResult
 */
const de_RemoveRegionResult = (output: any, context: __SerdeContext): RemoveRegionResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RemoveTagsFromResourceResult
 */
const de_RemoveTagsFromResourceResult = (output: any, context: __SerdeContext): RemoveTagsFromResourceResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ResetUserPasswordResult
 */
const de_ResetUserPasswordResult = (output: any, context: __SerdeContext): ResetUserPasswordResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RestoreFromSnapshotResult
 */
const de_RestoreFromSnapshotResult = (output: any, context: __SerdeContext): RestoreFromSnapshotResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1SchemaExtensionInfo
 */
const de_SchemaExtensionInfo = (output: any, context: __SerdeContext): SchemaExtensionInfo => {
  return {
    Description: __expectString(output.Description),
    DirectoryId: __expectString(output.DirectoryId),
    EndDateTime:
      output.EndDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndDateTime)))
        : undefined,
    SchemaExtensionId: __expectString(output.SchemaExtensionId),
    SchemaExtensionStatus: __expectString(output.SchemaExtensionStatus),
    SchemaExtensionStatusReason: __expectString(output.SchemaExtensionStatusReason),
    StartDateTime:
      output.StartDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SchemaExtensionsInfo
 */
const de_SchemaExtensionsInfo = (output: any, context: __SerdeContext): SchemaExtensionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SchemaExtensionInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Servers
 */
const de_Servers = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ServiceException
 */
const de_ServiceException = (output: any, context: __SerdeContext): ServiceException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1SettingEntries
 */
const de_SettingEntries = (output: any, context: __SerdeContext): SettingEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SettingEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SettingEntry
 */
const de_SettingEntry = (output: any, context: __SerdeContext): SettingEntry => {
  return {
    AllowedValues: __expectString(output.AllowedValues),
    AppliedValue: __expectString(output.AppliedValue),
    LastRequestedDateTime:
      output.LastRequestedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastRequestedDateTime)))
        : undefined,
    LastUpdatedDateTime:
      output.LastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedDateTime)))
        : undefined,
    Name: __expectString(output.Name),
    RequestDetailedStatus:
      output.RequestDetailedStatus != null
        ? de_DirectoryConfigurationSettingRequestDetailedStatus(output.RequestDetailedStatus, context)
        : undefined,
    RequestStatus: __expectString(output.RequestStatus),
    RequestStatusMessage: __expectString(output.RequestStatusMessage),
    RequestedValue: __expectString(output.RequestedValue),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1SharedDirectories
 */
const de_SharedDirectories = (output: any, context: __SerdeContext): SharedDirectory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SharedDirectory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SharedDirectory
 */
const de_SharedDirectory = (output: any, context: __SerdeContext): SharedDirectory => {
  return {
    CreatedDateTime:
      output.CreatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDateTime)))
        : undefined,
    LastUpdatedDateTime:
      output.LastUpdatedDateTime != null
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

/**
 * deserializeAws_json1_1ShareDirectoryResult
 */
const de_ShareDirectoryResult = (output: any, context: __SerdeContext): ShareDirectoryResult => {
  return {
    SharedDirectoryId: __expectString(output.SharedDirectoryId),
  } as any;
};

/**
 * deserializeAws_json1_1ShareLimitExceededException
 */
const de_ShareLimitExceededException = (output: any, context: __SerdeContext): ShareLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1Snapshot
 */
const de_Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
    Name: __expectString(output.Name),
    SnapshotId: __expectString(output.SnapshotId),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1SnapshotLimitExceededException
 */
const de_SnapshotLimitExceededException = (output: any, context: __SerdeContext): SnapshotLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1SnapshotLimits
 */
const de_SnapshotLimits = (output: any, context: __SerdeContext): SnapshotLimits => {
  return {
    ManualSnapshotsCurrentCount: __expectInt32(output.ManualSnapshotsCurrentCount),
    ManualSnapshotsLimit: __expectInt32(output.ManualSnapshotsLimit),
    ManualSnapshotsLimitReached: __expectBoolean(output.ManualSnapshotsLimitReached),
  } as any;
};

/**
 * deserializeAws_json1_1Snapshots
 */
const de_Snapshots = (output: any, context: __SerdeContext): Snapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Snapshot(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartSchemaExtensionResult
 */
const de_StartSchemaExtensionResult = (output: any, context: __SerdeContext): StartSchemaExtensionResult => {
  return {
    SchemaExtensionId: __expectString(output.SchemaExtensionId),
  } as any;
};

/**
 * deserializeAws_json1_1SubnetIds
 */
const de_SubnetIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagLimitExceededException
 */
const de_TagLimitExceededException = (output: any, context: __SerdeContext): TagLimitExceededException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
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
 * deserializeAws_json1_1Trust
 */
const de_Trust = (output: any, context: __SerdeContext): Trust => {
  return {
    CreatedDateTime:
      output.CreatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDateTime)))
        : undefined,
    DirectoryId: __expectString(output.DirectoryId),
    LastUpdatedDateTime:
      output.LastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedDateTime)))
        : undefined,
    RemoteDomainName: __expectString(output.RemoteDomainName),
    SelectiveAuth: __expectString(output.SelectiveAuth),
    StateLastUpdatedDateTime:
      output.StateLastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StateLastUpdatedDateTime)))
        : undefined,
    TrustDirection: __expectString(output.TrustDirection),
    TrustId: __expectString(output.TrustId),
    TrustState: __expectString(output.TrustState),
    TrustStateReason: __expectString(output.TrustStateReason),
    TrustType: __expectString(output.TrustType),
  } as any;
};

/**
 * deserializeAws_json1_1Trusts
 */
const de_Trusts = (output: any, context: __SerdeContext): Trust[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Trust(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnshareDirectoryResult
 */
const de_UnshareDirectoryResult = (output: any, context: __SerdeContext): UnshareDirectoryResult => {
  return {
    SharedDirectoryId: __expectString(output.SharedDirectoryId),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedOperationException
 */
const de_UnsupportedOperationException = (output: any, context: __SerdeContext): UnsupportedOperationException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedSettingsException
 */
const de_UnsupportedSettingsException = (output: any, context: __SerdeContext): UnsupportedSettingsException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateActivities
 */
const de_UpdateActivities = (output: any, context: __SerdeContext): UpdateInfoEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UpdateInfoEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UpdateConditionalForwarderResult
 */
const de_UpdateConditionalForwarderResult = (
  output: any,
  context: __SerdeContext
): UpdateConditionalForwarderResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDirectorySetupResult
 */
const de_UpdateDirectorySetupResult = (output: any, context: __SerdeContext): UpdateDirectorySetupResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateInfoEntry
 */
const de_UpdateInfoEntry = (output: any, context: __SerdeContext): UpdateInfoEntry => {
  return {
    InitiatedBy: __expectString(output.InitiatedBy),
    LastUpdatedDateTime:
      output.LastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedDateTime)))
        : undefined,
    NewValue: output.NewValue != null ? de_UpdateValue(output.NewValue, context) : undefined,
    PreviousValue: output.PreviousValue != null ? de_UpdateValue(output.PreviousValue, context) : undefined,
    Region: __expectString(output.Region),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateNumberOfDomainControllersResult
 */
const de_UpdateNumberOfDomainControllersResult = (
  output: any,
  context: __SerdeContext
): UpdateNumberOfDomainControllersResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateRadiusResult
 */
const de_UpdateRadiusResult = (output: any, context: __SerdeContext): UpdateRadiusResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateSettingsResult
 */
const de_UpdateSettingsResult = (output: any, context: __SerdeContext): UpdateSettingsResult => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateTrustResult
 */
const de_UpdateTrustResult = (output: any, context: __SerdeContext): UpdateTrustResult => {
  return {
    RequestId: __expectString(output.RequestId),
    TrustId: __expectString(output.TrustId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateValue
 */
const de_UpdateValue = (output: any, context: __SerdeContext): UpdateValue => {
  return {
    OSUpdateSettings:
      output.OSUpdateSettings != null ? de_OSUpdateSettings(output.OSUpdateSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UserDoesNotExistException
 */
const de_UserDoesNotExistException = (output: any, context: __SerdeContext): UserDoesNotExistException => {
  return {
    Message: __expectString(output.Message),
    RequestId: __expectString(output.RequestId),
  } as any;
};

/**
 * deserializeAws_json1_1VerifyTrustResult
 */
const de_VerifyTrustResult = (output: any, context: __SerdeContext): VerifyTrustResult => {
  return {
    TrustId: __expectString(output.TrustId),
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
