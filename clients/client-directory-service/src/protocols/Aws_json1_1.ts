// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  AddRegionRequest,
  AddTagsToResourceRequest,
  Attribute,
  AuthenticationFailedException,
  CancelSchemaExtensionRequest,
  Certificate,
  CertificateAlreadyExistsException,
  CertificateDoesNotExistException,
  CertificateInfo,
  CertificateInUseException,
  CertificateLimitExceededException,
  ClientAuthenticationSettingInfo,
  ClientCertAuthSettings,
  ClientException,
  ConnectDirectoryRequest,
  CreateAliasRequest,
  CreateComputerRequest,
  CreateConditionalForwarderRequest,
  CreateDirectoryRequest,
  CreateLogSubscriptionRequest,
  CreateMicrosoftADRequest,
  CreateSnapshotRequest,
  CreateTrustRequest,
  DeleteConditionalForwarderRequest,
  DeleteDirectoryRequest,
  DeleteLogSubscriptionRequest,
  DeleteSnapshotRequest,
  DeleteTrustRequest,
  DeregisterCertificateRequest,
  DeregisterEventTopicRequest,
  DescribeCertificateRequest,
  DescribeCertificateResult,
  DescribeClientAuthenticationSettingsRequest,
  DescribeClientAuthenticationSettingsResult,
  DescribeConditionalForwardersRequest,
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
  DirectoryConnectSettings,
  DirectoryDescription,
  DirectoryDoesNotExistException,
  DirectoryInDesiredStateException,
  DirectoryLimitExceededException,
  DirectoryNotSharedException,
  DirectoryUnavailableException,
  DirectoryVpcSettings,
  DisableClientAuthenticationRequest,
  DisableLDAPSRequest,
  DisableRadiusRequest,
  DisableSsoRequest,
  DomainController,
  DomainControllerLimitExceededException,
  EnableClientAuthenticationRequest,
  EnableLDAPSRequest,
  EnableRadiusRequest,
  EnableSsoRequest,
  EntityAlreadyExistsException,
  EntityDoesNotExistException,
  EventTopic,
  GetDirectoryLimitsRequest,
  GetSnapshotLimitsRequest,
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
  LogSubscription,
  NoAvailableCertificateException,
  OrganizationsException,
  OSUpdateSettings,
  RadiusSettings,
  RegionDescription,
  RegionLimitExceededException,
  RegisterCertificateRequest,
  RegisterEventTopicRequest,
  RejectSharedDirectoryRequest,
  RemoveIpRoutesRequest,
  RemoveRegionRequest,
  RemoveTagsFromResourceRequest,
  ResetUserPasswordRequest,
  RestoreFromSnapshotRequest,
  SchemaExtensionInfo,
  ServiceException,
  Setting,
  SettingEntry,
  SharedDirectory,
  ShareDirectoryRequest,
  ShareLimitExceededException,
  ShareTarget,
  Snapshot,
  SnapshotLimitExceededException,
  StartSchemaExtensionRequest,
  Tag,
  TagLimitExceededException,
  Trust,
  UnshareDirectoryRequest,
  UnshareTarget,
  UnsupportedOperationException,
  UnsupportedSettingsException,
  UpdateConditionalForwarderRequest,
  UpdateDirectorySetupRequest,
  UpdateInfoEntry,
  UpdateNumberOfDomainControllersRequest,
  UpdateRadiusRequest,
  UpdateSettingsRequest,
  UpdateTrustRequest,
  UserDoesNotExistException,
  VerifyTrustRequest,
} from "../models/models_0";

/**
 * serializeAws_json1_1AcceptSharedDirectoryCommand
 */
export const se_AcceptSharedDirectoryCommand = async (
  input: AcceptSharedDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AcceptSharedDirectory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddIpRoutesCommand
 */
export const se_AddIpRoutesCommand = async (
  input: AddIpRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddIpRoutes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddRegionCommand
 */
export const se_AddRegionCommand = async (
  input: AddRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddRegion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddTagsToResourceCommand
 */
export const se_AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddTagsToResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelSchemaExtensionCommand
 */
export const se_CancelSchemaExtensionCommand = async (
  input: CancelSchemaExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelSchemaExtension");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConnectDirectoryCommand
 */
export const se_ConnectDirectoryCommand = async (
  input: ConnectDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ConnectDirectory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAliasCommand
 */
export const se_CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAlias");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateComputerCommand
 */
export const se_CreateComputerCommand = async (
  input: CreateComputerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateComputer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateConditionalForwarderCommand
 */
export const se_CreateConditionalForwarderCommand = async (
  input: CreateConditionalForwarderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateConditionalForwarder");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDirectoryCommand
 */
export const se_CreateDirectoryCommand = async (
  input: CreateDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDirectory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLogSubscriptionCommand
 */
export const se_CreateLogSubscriptionCommand = async (
  input: CreateLogSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLogSubscription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMicrosoftADCommand
 */
export const se_CreateMicrosoftADCommand = async (
  input: CreateMicrosoftADCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateMicrosoftAD");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSnapshotCommand
 */
export const se_CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTrustCommand
 */
export const se_CreateTrustCommand = async (
  input: CreateTrustCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTrust");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConditionalForwarderCommand
 */
export const se_DeleteConditionalForwarderCommand = async (
  input: DeleteConditionalForwarderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConditionalForwarder");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDirectoryCommand
 */
export const se_DeleteDirectoryCommand = async (
  input: DeleteDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDirectory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLogSubscriptionCommand
 */
export const se_DeleteLogSubscriptionCommand = async (
  input: DeleteLogSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLogSubscription");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSnapshotCommand
 */
export const se_DeleteSnapshotCommand = async (
  input: DeleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTrustCommand
 */
export const se_DeleteTrustCommand = async (
  input: DeleteTrustCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTrust");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterCertificateCommand
 */
export const se_DeregisterCertificateCommand = async (
  input: DeregisterCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterCertificate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterEventTopicCommand
 */
export const se_DeregisterEventTopicCommand = async (
  input: DeregisterEventTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterEventTopic");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCertificateCommand
 */
export const se_DescribeCertificateCommand = async (
  input: DescribeCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCertificate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeClientAuthenticationSettingsCommand
 */
export const se_DescribeClientAuthenticationSettingsCommand = async (
  input: DescribeClientAuthenticationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeClientAuthenticationSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConditionalForwardersCommand
 */
export const se_DescribeConditionalForwardersCommand = async (
  input: DescribeConditionalForwardersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConditionalForwarders");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDirectoriesCommand
 */
export const se_DescribeDirectoriesCommand = async (
  input: DescribeDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDirectories");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDomainControllersCommand
 */
export const se_DescribeDomainControllersCommand = async (
  input: DescribeDomainControllersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDomainControllers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventTopicsCommand
 */
export const se_DescribeEventTopicsCommand = async (
  input: DescribeEventTopicsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEventTopics");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLDAPSSettingsCommand
 */
export const se_DescribeLDAPSSettingsCommand = async (
  input: DescribeLDAPSSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLDAPSSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRegionsCommand
 */
export const se_DescribeRegionsCommand = async (
  input: DescribeRegionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRegions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSettingsCommand
 */
export const se_DescribeSettingsCommand = async (
  input: DescribeSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSharedDirectoriesCommand
 */
export const se_DescribeSharedDirectoriesCommand = async (
  input: DescribeSharedDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSharedDirectories");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSnapshotsCommand
 */
export const se_DescribeSnapshotsCommand = async (
  input: DescribeSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSnapshots");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTrustsCommand
 */
export const se_DescribeTrustsCommand = async (
  input: DescribeTrustsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTrusts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUpdateDirectoryCommand
 */
export const se_DescribeUpdateDirectoryCommand = async (
  input: DescribeUpdateDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUpdateDirectory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableClientAuthenticationCommand
 */
export const se_DisableClientAuthenticationCommand = async (
  input: DisableClientAuthenticationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableClientAuthentication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableLDAPSCommand
 */
export const se_DisableLDAPSCommand = async (
  input: DisableLDAPSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableLDAPS");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableRadiusCommand
 */
export const se_DisableRadiusCommand = async (
  input: DisableRadiusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableRadius");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableSsoCommand
 */
export const se_DisableSsoCommand = async (
  input: DisableSsoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableSso");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableClientAuthenticationCommand
 */
export const se_EnableClientAuthenticationCommand = async (
  input: EnableClientAuthenticationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableClientAuthentication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableLDAPSCommand
 */
export const se_EnableLDAPSCommand = async (
  input: EnableLDAPSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableLDAPS");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableRadiusCommand
 */
export const se_EnableRadiusCommand = async (
  input: EnableRadiusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableRadius");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableSsoCommand
 */
export const se_EnableSsoCommand = async (
  input: EnableSsoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableSso");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDirectoryLimitsCommand
 */
export const se_GetDirectoryLimitsCommand = async (
  input: GetDirectoryLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDirectoryLimits");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSnapshotLimitsCommand
 */
export const se_GetSnapshotLimitsCommand = async (
  input: GetSnapshotLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSnapshotLimits");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCertificatesCommand
 */
export const se_ListCertificatesCommand = async (
  input: ListCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCertificates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListIpRoutesCommand
 */
export const se_ListIpRoutesCommand = async (
  input: ListIpRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListIpRoutes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLogSubscriptionsCommand
 */
export const se_ListLogSubscriptionsCommand = async (
  input: ListLogSubscriptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLogSubscriptions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSchemaExtensionsCommand
 */
export const se_ListSchemaExtensionsCommand = async (
  input: ListSchemaExtensionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSchemaExtensions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterCertificateCommand
 */
export const se_RegisterCertificateCommand = async (
  input: RegisterCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterCertificate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterEventTopicCommand
 */
export const se_RegisterEventTopicCommand = async (
  input: RegisterEventTopicCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterEventTopic");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RejectSharedDirectoryCommand
 */
export const se_RejectSharedDirectoryCommand = async (
  input: RejectSharedDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RejectSharedDirectory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveIpRoutesCommand
 */
export const se_RemoveIpRoutesCommand = async (
  input: RemoveIpRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveIpRoutes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveRegionCommand
 */
export const se_RemoveRegionCommand = async (
  input: RemoveRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveRegion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTagsFromResourceCommand
 */
export const se_RemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveTagsFromResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResetUserPasswordCommand
 */
export const se_ResetUserPasswordCommand = async (
  input: ResetUserPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResetUserPassword");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreFromSnapshotCommand
 */
export const se_RestoreFromSnapshotCommand = async (
  input: RestoreFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreFromSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ShareDirectoryCommand
 */
export const se_ShareDirectoryCommand = async (
  input: ShareDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ShareDirectory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartSchemaExtensionCommand
 */
export const se_StartSchemaExtensionCommand = async (
  input: StartSchemaExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartSchemaExtension");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UnshareDirectoryCommand
 */
export const se_UnshareDirectoryCommand = async (
  input: UnshareDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UnshareDirectory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateConditionalForwarderCommand
 */
export const se_UpdateConditionalForwarderCommand = async (
  input: UpdateConditionalForwarderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateConditionalForwarder");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDirectorySetupCommand
 */
export const se_UpdateDirectorySetupCommand = async (
  input: UpdateDirectorySetupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDirectorySetup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNumberOfDomainControllersCommand
 */
export const se_UpdateNumberOfDomainControllersCommand = async (
  input: UpdateNumberOfDomainControllersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNumberOfDomainControllers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRadiusCommand
 */
export const se_UpdateRadiusCommand = async (
  input: UpdateRadiusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRadius");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSettingsCommand
 */
export const se_UpdateSettingsCommand = async (
  input: UpdateSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTrustCommand
 */
export const se_UpdateTrustCommand = async (
  input: UpdateTrustCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTrust");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1VerifyTrustCommand
 */
export const se_VerifyTrustCommand = async (
  input: VerifyTrustCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("VerifyTrust");
  let body: any;
  body = JSON.stringify(_json(input));
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AddIpRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AddRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CancelSchemaExtensionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ConnectDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateComputerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateConditionalForwarderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateLogSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateMicrosoftADCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteConditionalForwarderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteLogSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeregisterCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeregisterEventTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeConditionalForwardersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisableClientAuthenticationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisableLDAPSCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisableRadiusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisableSsoCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: EnableClientAuthenticationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: EnableLDAPSCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: EnableRadiusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: EnableSsoCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetDirectoryLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetSnapshotLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RegisterCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RegisterEventTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RejectSharedDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RemoveIpRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RemoveRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ResetUserPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RestoreFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ShareDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartSchemaExtensionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UnshareDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateConditionalForwarderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDirectorySetupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateNumberOfDomainControllersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateRadiusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: VerifyTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UserDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AcceptSharedDirectoryRequest omitted.

// se_AddIpRoutesRequest omitted.

// se_AddRegionRequest omitted.

// se_AddTagsToResourceRequest omitted.

// se_Attribute omitted.

// se_Attributes omitted.

// se_CancelSchemaExtensionRequest omitted.

// se_CidrIps omitted.

// se_ClientCertAuthSettings omitted.

// se_ConnectDirectoryRequest omitted.

// se_CreateAliasRequest omitted.

// se_CreateComputerRequest omitted.

// se_CreateConditionalForwarderRequest omitted.

// se_CreateDirectoryRequest omitted.

// se_CreateLogSubscriptionRequest omitted.

// se_CreateMicrosoftADRequest omitted.

// se_CreateSnapshotRequest omitted.

// se_CreateTrustRequest omitted.

// se_DeleteConditionalForwarderRequest omitted.

// se_DeleteDirectoryRequest omitted.

// se_DeleteLogSubscriptionRequest omitted.

// se_DeleteSnapshotRequest omitted.

// se_DeleteTrustRequest omitted.

// se_DeregisterCertificateRequest omitted.

// se_DeregisterEventTopicRequest omitted.

// se_DescribeCertificateRequest omitted.

// se_DescribeClientAuthenticationSettingsRequest omitted.

// se_DescribeConditionalForwardersRequest omitted.

// se_DescribeDirectoriesRequest omitted.

// se_DescribeDomainControllersRequest omitted.

// se_DescribeEventTopicsRequest omitted.

// se_DescribeLDAPSSettingsRequest omitted.

// se_DescribeRegionsRequest omitted.

// se_DescribeSettingsRequest omitted.

// se_DescribeSharedDirectoriesRequest omitted.

// se_DescribeSnapshotsRequest omitted.

// se_DescribeTrustsRequest omitted.

// se_DescribeUpdateDirectoryRequest omitted.

// se_DirectoryConnectSettings omitted.

// se_DirectoryIds omitted.

// se_DirectoryVpcSettings omitted.

// se_DisableClientAuthenticationRequest omitted.

// se_DisableLDAPSRequest omitted.

// se_DisableRadiusRequest omitted.

// se_DisableSsoRequest omitted.

// se_DnsIpAddrs omitted.

// se_DomainControllerIds omitted.

// se_EnableClientAuthenticationRequest omitted.

// se_EnableLDAPSRequest omitted.

// se_EnableRadiusRequest omitted.

// se_EnableSsoRequest omitted.

// se_GetDirectoryLimitsRequest omitted.

// se_GetSnapshotLimitsRequest omitted.

// se_IpRoute omitted.

// se_IpRoutes omitted.

// se_ListCertificatesRequest omitted.

// se_ListIpRoutesRequest omitted.

// se_ListLogSubscriptionsRequest omitted.

// se_ListSchemaExtensionsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_OSUpdateSettings omitted.

// se_RadiusSettings omitted.

// se_RegisterCertificateRequest omitted.

// se_RegisterEventTopicRequest omitted.

// se_RejectSharedDirectoryRequest omitted.

// se_RemoteDomainNames omitted.

// se_RemoveIpRoutesRequest omitted.

// se_RemoveRegionRequest omitted.

// se_RemoveTagsFromResourceRequest omitted.

// se_ResetUserPasswordRequest omitted.

// se_RestoreFromSnapshotRequest omitted.

// se_Servers omitted.

// se_Setting omitted.

// se_Settings omitted.

// se_ShareDirectoryRequest omitted.

// se_ShareTarget omitted.

// se_SnapshotIds omitted.

// se_StartSchemaExtensionRequest omitted.

// se_SubnetIds omitted.

// se_Tag omitted.

// se_TagKeys omitted.

// se_Tags omitted.

// se_TopicNames omitted.

// se_TrustIds omitted.

// se_UnshareDirectoryRequest omitted.

// se_UnshareTarget omitted.

// se_UpdateConditionalForwarderRequest omitted.

// se_UpdateDirectorySetupRequest omitted.

// se_UpdateNumberOfDomainControllersRequest omitted.

// se_UpdateRadiusRequest omitted.

// se_UpdateSettingsRequest omitted.

// se_UpdateTrustRequest omitted.

// se_VerifyTrustRequest omitted.

/**
 * deserializeAws_json1_1AcceptSharedDirectoryResult
 */
const de_AcceptSharedDirectoryResult = (output: any, context: __SerdeContext): AcceptSharedDirectoryResult => {
  return take(output, {
    SharedDirectory: (_: any) => de_SharedDirectory(_, context),
  }) as any;
};

// de_AccessDeniedException omitted.

// de_AddIpRoutesResult omitted.

// de_AdditionalRegions omitted.

// de_AddRegionResult omitted.

// de_AddTagsToResourceResult omitted.

// de_Attribute omitted.

// de_Attributes omitted.

// de_AuthenticationFailedException omitted.

// de_AvailabilityZones omitted.

// de_CancelSchemaExtensionResult omitted.

/**
 * deserializeAws_json1_1Certificate
 */
const de_Certificate = (output: any, context: __SerdeContext): Certificate => {
  return take(output, {
    CertificateId: __expectString,
    ClientCertAuthSettings: _json,
    CommonName: __expectString,
    ExpiryDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RegisteredDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateReason: __expectString,
    Type: __expectString,
  }) as any;
};

// de_CertificateAlreadyExistsException omitted.

// de_CertificateDoesNotExistException omitted.

/**
 * deserializeAws_json1_1CertificateInfo
 */
const de_CertificateInfo = (output: any, context: __SerdeContext): CertificateInfo => {
  return take(output, {
    CertificateId: __expectString,
    CommonName: __expectString,
    ExpiryDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    Type: __expectString,
  }) as any;
};

// de_CertificateInUseException omitted.

// de_CertificateLimitExceededException omitted.

/**
 * deserializeAws_json1_1CertificatesInfo
 */
const de_CertificatesInfo = (output: any, context: __SerdeContext): CertificateInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CertificateInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ClientAuthenticationSettingInfo
 */
const de_ClientAuthenticationSettingInfo = (output: any, context: __SerdeContext): ClientAuthenticationSettingInfo => {
  return take(output, {
    LastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Type: __expectString,
  }) as any;
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
      return de_ClientAuthenticationSettingInfo(entry, context);
    });
  return retVal;
};

// de_ClientCertAuthSettings omitted.

// de_ClientException omitted.

// de_Computer omitted.

// de_ConditionalForwarder omitted.

// de_ConditionalForwarders omitted.

// de_ConnectDirectoryResult omitted.

// de_CreateAliasResult omitted.

// de_CreateComputerResult omitted.

// de_CreateConditionalForwarderResult omitted.

// de_CreateDirectoryResult omitted.

// de_CreateLogSubscriptionResult omitted.

// de_CreateMicrosoftADResult omitted.

// de_CreateSnapshotResult omitted.

// de_CreateTrustResult omitted.

// de_DeleteConditionalForwarderResult omitted.

// de_DeleteDirectoryResult omitted.

// de_DeleteLogSubscriptionResult omitted.

// de_DeleteSnapshotResult omitted.

// de_DeleteTrustResult omitted.

// de_DeregisterCertificateResult omitted.

// de_DeregisterEventTopicResult omitted.

/**
 * deserializeAws_json1_1DescribeCertificateResult
 */
const de_DescribeCertificateResult = (output: any, context: __SerdeContext): DescribeCertificateResult => {
  return take(output, {
    Certificate: (_: any) => de_Certificate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeClientAuthenticationSettingsResult
 */
const de_DescribeClientAuthenticationSettingsResult = (
  output: any,
  context: __SerdeContext
): DescribeClientAuthenticationSettingsResult => {
  return take(output, {
    ClientAuthenticationSettingsInfo: (_: any) => de_ClientAuthenticationSettingsInfo(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeConditionalForwardersResult omitted.

/**
 * deserializeAws_json1_1DescribeDirectoriesResult
 */
const de_DescribeDirectoriesResult = (output: any, context: __SerdeContext): DescribeDirectoriesResult => {
  return take(output, {
    DirectoryDescriptions: (_: any) => de_DirectoryDescriptions(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDomainControllersResult
 */
const de_DescribeDomainControllersResult = (output: any, context: __SerdeContext): DescribeDomainControllersResult => {
  return take(output, {
    DomainControllers: (_: any) => de_DomainControllers(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEventTopicsResult
 */
const de_DescribeEventTopicsResult = (output: any, context: __SerdeContext): DescribeEventTopicsResult => {
  return take(output, {
    EventTopics: (_: any) => de_EventTopics(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLDAPSSettingsResult
 */
const de_DescribeLDAPSSettingsResult = (output: any, context: __SerdeContext): DescribeLDAPSSettingsResult => {
  return take(output, {
    LDAPSSettingsInfo: (_: any) => de_LDAPSSettingsInfo(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeRegionsResult
 */
const de_DescribeRegionsResult = (output: any, context: __SerdeContext): DescribeRegionsResult => {
  return take(output, {
    NextToken: __expectString,
    RegionsDescription: (_: any) => de_RegionsDescription(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeSettingsResult
 */
const de_DescribeSettingsResult = (output: any, context: __SerdeContext): DescribeSettingsResult => {
  return take(output, {
    DirectoryId: __expectString,
    NextToken: __expectString,
    SettingEntries: (_: any) => de_SettingEntries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeSharedDirectoriesResult
 */
const de_DescribeSharedDirectoriesResult = (output: any, context: __SerdeContext): DescribeSharedDirectoriesResult => {
  return take(output, {
    NextToken: __expectString,
    SharedDirectories: (_: any) => de_SharedDirectories(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeSnapshotsResult
 */
const de_DescribeSnapshotsResult = (output: any, context: __SerdeContext): DescribeSnapshotsResult => {
  return take(output, {
    NextToken: __expectString,
    Snapshots: (_: any) => de_Snapshots(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTrustsResult
 */
const de_DescribeTrustsResult = (output: any, context: __SerdeContext): DescribeTrustsResult => {
  return take(output, {
    NextToken: __expectString,
    Trusts: (_: any) => de_Trusts(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeUpdateDirectoryResult
 */
const de_DescribeUpdateDirectoryResult = (output: any, context: __SerdeContext): DescribeUpdateDirectoryResult => {
  return take(output, {
    NextToken: __expectString,
    UpdateActivities: (_: any) => de_UpdateActivities(_, context),
  }) as any;
};

// de_DirectoryAlreadyInRegionException omitted.

// de_DirectoryAlreadySharedException omitted.

// de_DirectoryConfigurationSettingRequestDetailedStatus omitted.

// de_DirectoryConnectSettingsDescription omitted.

/**
 * deserializeAws_json1_1DirectoryDescription
 */
const de_DirectoryDescription = (output: any, context: __SerdeContext): DirectoryDescription => {
  return take(output, {
    AccessUrl: __expectString,
    Alias: __expectString,
    ConnectSettings: _json,
    Description: __expectString,
    DesiredNumberOfDomainControllers: __expectInt32,
    DirectoryId: __expectString,
    DnsIpAddrs: _json,
    Edition: __expectString,
    LaunchTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    OsVersion: __expectString,
    OwnerDirectoryDescription: _json,
    RadiusSettings: _json,
    RadiusStatus: __expectString,
    RegionsInfo: _json,
    ShareMethod: __expectString,
    ShareNotes: __expectString,
    ShareStatus: __expectString,
    ShortName: __expectString,
    Size: __expectString,
    SsoEnabled: __expectBoolean,
    Stage: __expectString,
    StageLastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StageReason: __expectString,
    Type: __expectString,
    VpcSettings: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DirectoryDescriptions
 */
const de_DirectoryDescriptions = (output: any, context: __SerdeContext): DirectoryDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DirectoryDescription(entry, context);
    });
  return retVal;
};

// de_DirectoryDoesNotExistException omitted.

// de_DirectoryInDesiredStateException omitted.

// de_DirectoryLimitExceededException omitted.

// de_DirectoryLimits omitted.

// de_DirectoryNotSharedException omitted.

// de_DirectoryUnavailableException omitted.

// de_DirectoryVpcSettings omitted.

// de_DirectoryVpcSettingsDescription omitted.

// de_DisableClientAuthenticationResult omitted.

// de_DisableLDAPSResult omitted.

// de_DisableRadiusResult omitted.

// de_DisableSsoResult omitted.

// de_DnsIpAddrs omitted.

/**
 * deserializeAws_json1_1DomainController
 */
const de_DomainController = (output: any, context: __SerdeContext): DomainController => {
  return take(output, {
    AvailabilityZone: __expectString,
    DirectoryId: __expectString,
    DnsIpAddr: __expectString,
    DomainControllerId: __expectString,
    LaunchTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusLastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StatusReason: __expectString,
    SubnetId: __expectString,
    VpcId: __expectString,
  }) as any;
};

// de_DomainControllerLimitExceededException omitted.

/**
 * deserializeAws_json1_1DomainControllers
 */
const de_DomainControllers = (output: any, context: __SerdeContext): DomainController[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainController(entry, context);
    });
  return retVal;
};

// de_EnableClientAuthenticationResult omitted.

// de_EnableLDAPSResult omitted.

// de_EnableRadiusResult omitted.

// de_EnableSsoResult omitted.

// de_EntityAlreadyExistsException omitted.

// de_EntityDoesNotExistException omitted.

/**
 * deserializeAws_json1_1EventTopic
 */
const de_EventTopic = (output: any, context: __SerdeContext): EventTopic => {
  return take(output, {
    CreatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DirectoryId: __expectString,
    Status: __expectString,
    TopicArn: __expectString,
    TopicName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EventTopics
 */
const de_EventTopics = (output: any, context: __SerdeContext): EventTopic[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventTopic(entry, context);
    });
  return retVal;
};

// de_GetDirectoryLimitsResult omitted.

// de_GetSnapshotLimitsResult omitted.

// de_IncompatibleSettingsException omitted.

// de_InsufficientPermissionsException omitted.

// de_InvalidCertificateException omitted.

// de_InvalidClientAuthStatusException omitted.

// de_InvalidLDAPSStatusException omitted.

// de_InvalidNextTokenException omitted.

// de_InvalidParameterException omitted.

// de_InvalidPasswordException omitted.

// de_InvalidTargetException omitted.

// de_IpAddrs omitted.

/**
 * deserializeAws_json1_1IpRouteInfo
 */
const de_IpRouteInfo = (output: any, context: __SerdeContext): IpRouteInfo => {
  return take(output, {
    AddedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CidrIp: __expectString,
    Description: __expectString,
    DirectoryId: __expectString,
    IpRouteStatusMsg: __expectString,
    IpRouteStatusReason: __expectString,
  }) as any;
};

// de_IpRouteLimitExceededException omitted.

/**
 * deserializeAws_json1_1IpRoutesInfo
 */
const de_IpRoutesInfo = (output: any, context: __SerdeContext): IpRouteInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IpRouteInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LDAPSSettingInfo
 */
const de_LDAPSSettingInfo = (output: any, context: __SerdeContext): LDAPSSettingInfo => {
  return take(output, {
    LDAPSStatus: __expectString,
    LDAPSStatusReason: __expectString,
    LastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1LDAPSSettingsInfo
 */
const de_LDAPSSettingsInfo = (output: any, context: __SerdeContext): LDAPSSettingInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LDAPSSettingInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListCertificatesResult
 */
const de_ListCertificatesResult = (output: any, context: __SerdeContext): ListCertificatesResult => {
  return take(output, {
    CertificatesInfo: (_: any) => de_CertificatesInfo(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListIpRoutesResult
 */
const de_ListIpRoutesResult = (output: any, context: __SerdeContext): ListIpRoutesResult => {
  return take(output, {
    IpRoutesInfo: (_: any) => de_IpRoutesInfo(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListLogSubscriptionsResult
 */
const de_ListLogSubscriptionsResult = (output: any, context: __SerdeContext): ListLogSubscriptionsResult => {
  return take(output, {
    LogSubscriptions: (_: any) => de_LogSubscriptions(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListSchemaExtensionsResult
 */
const de_ListSchemaExtensionsResult = (output: any, context: __SerdeContext): ListSchemaExtensionsResult => {
  return take(output, {
    NextToken: __expectString,
    SchemaExtensionsInfo: (_: any) => de_SchemaExtensionsInfo(_, context),
  }) as any;
};

// de_ListTagsForResourceResult omitted.

/**
 * deserializeAws_json1_1LogSubscription
 */
const de_LogSubscription = (output: any, context: __SerdeContext): LogSubscription => {
  return take(output, {
    DirectoryId: __expectString,
    LogGroupName: __expectString,
    SubscriptionCreatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1LogSubscriptions
 */
const de_LogSubscriptions = (output: any, context: __SerdeContext): LogSubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LogSubscription(entry, context);
    });
  return retVal;
};

// de_NoAvailableCertificateException omitted.

// de_OrganizationsException omitted.

// de_OSUpdateSettings omitted.

// de_OwnerDirectoryDescription omitted.

// de_RadiusSettings omitted.

/**
 * deserializeAws_json1_1RegionDescription
 */
const de_RegionDescription = (output: any, context: __SerdeContext): RegionDescription => {
  return take(output, {
    DesiredNumberOfDomainControllers: __expectInt32,
    DirectoryId: __expectString,
    LastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LaunchTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RegionName: __expectString,
    RegionType: __expectString,
    Status: __expectString,
    StatusLastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VpcSettings: _json,
  }) as any;
};

// de_RegionLimitExceededException omitted.

/**
 * deserializeAws_json1_1RegionsDescription
 */
const de_RegionsDescription = (output: any, context: __SerdeContext): RegionDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RegionDescription(entry, context);
    });
  return retVal;
};

// de_RegionsInfo omitted.

// de_RegisterCertificateResult omitted.

// de_RegisterEventTopicResult omitted.

// de_RejectSharedDirectoryResult omitted.

// de_RemoveIpRoutesResult omitted.

// de_RemoveRegionResult omitted.

// de_RemoveTagsFromResourceResult omitted.

// de_ResetUserPasswordResult omitted.

// de_RestoreFromSnapshotResult omitted.

/**
 * deserializeAws_json1_1SchemaExtensionInfo
 */
const de_SchemaExtensionInfo = (output: any, context: __SerdeContext): SchemaExtensionInfo => {
  return take(output, {
    Description: __expectString,
    DirectoryId: __expectString,
    EndDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SchemaExtensionId: __expectString,
    SchemaExtensionStatus: __expectString,
    SchemaExtensionStatusReason: __expectString,
    StartDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1SchemaExtensionsInfo
 */
const de_SchemaExtensionsInfo = (output: any, context: __SerdeContext): SchemaExtensionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SchemaExtensionInfo(entry, context);
    });
  return retVal;
};

// de_Servers omitted.

// de_ServiceException omitted.

/**
 * deserializeAws_json1_1SettingEntries
 */
const de_SettingEntries = (output: any, context: __SerdeContext): SettingEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SettingEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SettingEntry
 */
const de_SettingEntry = (output: any, context: __SerdeContext): SettingEntry => {
  return take(output, {
    AllowedValues: __expectString,
    AppliedValue: __expectString,
    DataType: __expectString,
    LastRequestedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    RequestDetailedStatus: _json,
    RequestStatus: __expectString,
    RequestStatusMessage: __expectString,
    RequestedValue: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SharedDirectories
 */
const de_SharedDirectories = (output: any, context: __SerdeContext): SharedDirectory[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SharedDirectory(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SharedDirectory
 */
const de_SharedDirectory = (output: any, context: __SerdeContext): SharedDirectory => {
  return take(output, {
    CreatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OwnerAccountId: __expectString,
    OwnerDirectoryId: __expectString,
    ShareMethod: __expectString,
    ShareNotes: __expectString,
    ShareStatus: __expectString,
    SharedAccountId: __expectString,
    SharedDirectoryId: __expectString,
  }) as any;
};

// de_ShareDirectoryResult omitted.

// de_ShareLimitExceededException omitted.

/**
 * deserializeAws_json1_1Snapshot
 */
const de_Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return take(output, {
    DirectoryId: __expectString,
    Name: __expectString,
    SnapshotId: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Type: __expectString,
  }) as any;
};

// de_SnapshotLimitExceededException omitted.

// de_SnapshotLimits omitted.

/**
 * deserializeAws_json1_1Snapshots
 */
const de_Snapshots = (output: any, context: __SerdeContext): Snapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Snapshot(entry, context);
    });
  return retVal;
};

// de_StartSchemaExtensionResult omitted.

// de_SubnetIds omitted.

// de_Tag omitted.

// de_TagLimitExceededException omitted.

// de_Tags omitted.

/**
 * deserializeAws_json1_1Trust
 */
const de_Trust = (output: any, context: __SerdeContext): Trust => {
  return take(output, {
    CreatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DirectoryId: __expectString,
    LastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RemoteDomainName: __expectString,
    SelectiveAuth: __expectString,
    StateLastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrustDirection: __expectString,
    TrustId: __expectString,
    TrustState: __expectString,
    TrustStateReason: __expectString,
    TrustType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Trusts
 */
const de_Trusts = (output: any, context: __SerdeContext): Trust[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Trust(entry, context);
    });
  return retVal;
};

// de_UnshareDirectoryResult omitted.

// de_UnsupportedOperationException omitted.

// de_UnsupportedSettingsException omitted.

/**
 * deserializeAws_json1_1UpdateActivities
 */
const de_UpdateActivities = (output: any, context: __SerdeContext): UpdateInfoEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UpdateInfoEntry(entry, context);
    });
  return retVal;
};

// de_UpdateConditionalForwarderResult omitted.

// de_UpdateDirectorySetupResult omitted.

/**
 * deserializeAws_json1_1UpdateInfoEntry
 */
const de_UpdateInfoEntry = (output: any, context: __SerdeContext): UpdateInfoEntry => {
  return take(output, {
    InitiatedBy: __expectString,
    LastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NewValue: _json,
    PreviousValue: _json,
    Region: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusReason: __expectString,
  }) as any;
};

// de_UpdateNumberOfDomainControllersResult omitted.

// de_UpdateRadiusResult omitted.

// de_UpdateSettingsResult omitted.

// de_UpdateTrustResult omitted.

// de_UpdateValue omitted.

// de_UserDoesNotExistException omitted.

// de_VerifyTrustResult omitted.

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

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `DirectoryService_20150416.${operation}`,
  };
}

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
