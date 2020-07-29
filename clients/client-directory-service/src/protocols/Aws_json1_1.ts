import {
  AcceptSharedDirectoryCommandInput,
  AcceptSharedDirectoryCommandOutput,
} from "../commands/AcceptSharedDirectoryCommand";
import { AddIpRoutesCommandInput, AddIpRoutesCommandOutput } from "../commands/AddIpRoutesCommand";
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
import {
  DescribeSharedDirectoriesCommandInput,
  DescribeSharedDirectoriesCommandOutput,
} from "../commands/DescribeSharedDirectoriesCommand";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "../commands/DescribeSnapshotsCommand";
import { DescribeTrustsCommandInput, DescribeTrustsCommandOutput } from "../commands/DescribeTrustsCommand";
import { DisableLDAPSCommandInput, DisableLDAPSCommandOutput } from "../commands/DisableLDAPSCommand";
import { DisableRadiusCommandInput, DisableRadiusCommandOutput } from "../commands/DisableRadiusCommand";
import { DisableSsoCommandInput, DisableSsoCommandOutput } from "../commands/DisableSsoCommand";
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
  DescribeSharedDirectoriesRequest,
  DescribeSharedDirectoriesResult,
  DescribeSnapshotsRequest,
  DescribeSnapshotsResult,
  DescribeTrustsRequest,
  DescribeTrustsResult,
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
  DisableLDAPSRequest,
  DisableLDAPSResult,
  DisableRadiusRequest,
  DisableRadiusResult,
  DisableSsoRequest,
  DisableSsoResult,
  DomainController,
  DomainControllerLimitExceededException,
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
  RegisterCertificateRequest,
  RegisterCertificateResult,
  RegisterEventTopicRequest,
  RegisterEventTopicResult,
  RejectSharedDirectoryRequest,
  RejectSharedDirectoryResult,
  RemoveIpRoutesRequest,
  RemoveIpRoutesResult,
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
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1AcceptSharedDirectoryCommand = async (
  input: AcceptSharedDirectoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.AcceptSharedDirectory",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.AddIpRoutes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddIpRoutesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.AddTagsToResource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.CancelSchemaExtension",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.ConnectDirectory",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.CreateAlias",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.CreateComputer",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.CreateConditionalForwarder",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.CreateDirectory",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.CreateLogSubscription",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.CreateMicrosoftAD",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.CreateSnapshot",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.CreateTrust",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DeleteConditionalForwarder",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DeleteDirectory",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DeleteLogSubscription",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DeleteSnapshot",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DeleteTrust",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DeregisterCertificate",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DeregisterEventTopic",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DescribeCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConditionalForwardersCommand = async (
  input: DescribeConditionalForwardersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DescribeConditionalForwarders",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DescribeDirectories",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DescribeDomainControllers",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DescribeEventTopics",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DescribeLDAPSSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLDAPSSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSharedDirectoriesCommand = async (
  input: DescribeSharedDirectoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DescribeSharedDirectories",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DescribeSnapshots",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DescribeTrusts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTrustsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableLDAPSCommand = async (
  input: DisableLDAPSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DisableLDAPS",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DisableRadius",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.DisableSso",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableSsoRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableLDAPSCommand = async (
  input: EnableLDAPSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.EnableLDAPS",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.EnableRadius",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.EnableSso",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.GetDirectoryLimits",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.GetSnapshotLimits",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.ListCertificates",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.ListIpRoutes",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.ListLogSubscriptions",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.ListSchemaExtensions",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.ListTagsForResource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.RegisterCertificate",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.RegisterEventTopic",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.RejectSharedDirectory",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.RemoveIpRoutes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveIpRoutesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.RemoveTagsFromResource",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.ResetUserPassword",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.RestoreFromSnapshot",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.ShareDirectory",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.StartSchemaExtension",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.UnshareDirectory",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.UpdateConditionalForwarder",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.UpdateNumberOfDomainControllers",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.UpdateRadius",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.UpdateTrust",
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DirectoryService_20150416.VerifyTrust",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1VerifyTrustRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AcceptSharedDirectoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptSharedDirectoryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AcceptSharedDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcceptSharedDirectoryResult(data, context);
  const response: AcceptSharedDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AcceptSharedDirectoryResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddIpRoutesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddIpRoutesResult(data, context);
  const response: AddIpRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddIpRoutesResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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

export const deserializeAws_json1_1AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsToResourceResult(data, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddTagsToResourceResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CancelSchemaExtensionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelSchemaExtensionResult(data, context);
  const response: CancelSchemaExtensionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelSchemaExtensionResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ConnectDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ConnectDirectoryResult(data, context);
  const response: ConnectDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConnectDirectoryResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAliasResult(data, context);
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAliasResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateComputerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateComputerResult(data, context);
  const response: CreateComputerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateComputerResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateConditionalForwarderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateConditionalForwarderResult(data, context);
  const response: CreateConditionalForwarderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateConditionalForwarderResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDirectoryResult(data, context);
  const response: CreateDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDirectoryResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLogSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLogSubscriptionResult(data, context);
  const response: CreateLogSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLogSubscriptionResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateMicrosoftADCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMicrosoftADResult(data, context);
  const response: CreateMicrosoftADCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateMicrosoftADResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSnapshotResult(data, context);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSnapshotResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateTrustCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTrustResult(data, context);
  const response: CreateTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTrustResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteConditionalForwarderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteConditionalForwarderResult(data, context);
  const response: DeleteConditionalForwarderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteConditionalForwarderResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDirectoryResult(data, context);
  const response: DeleteDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDirectoryResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLogSubscriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLogSubscriptionResult(data, context);
  const response: DeleteLogSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLogSubscriptionResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSnapshotResult(data, context);
  const response: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSnapshotResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTrustCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTrustResult(data, context);
  const response: DeleteTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTrustResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterCertificateResult(data, context);
  const response: DeregisterCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterCertificateResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterEventTopicCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterEventTopicResult(data, context);
  const response: DeregisterEventTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterEventTopicResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCertificateResult(data, context);
  const response: DescribeCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCertificateResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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

export const deserializeAws_json1_1DescribeConditionalForwardersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConditionalForwardersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeConditionalForwardersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConditionalForwardersResult(data, context);
  const response: DescribeConditionalForwardersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeConditionalForwardersResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDirectoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDirectoriesResult(data, context);
  const response: DescribeDirectoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDirectoriesResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDomainControllersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDomainControllersResult(data, context);
  const response: DescribeDomainControllersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDomainControllersResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEventTopicsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventTopicsResult(data, context);
  const response: DescribeEventTopicsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEventTopicsResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeLDAPSSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLDAPSSettingsResult(data, context);
  const response: DescribeLDAPSSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLDAPSSettingsResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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

export const deserializeAws_json1_1DescribeSharedDirectoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSharedDirectoriesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSharedDirectoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSharedDirectoriesResult(data, context);
  const response: DescribeSharedDirectoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSharedDirectoriesResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSnapshotsResult(data, context);
  const response: DescribeSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSnapshotsResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTrustsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTrustsResult(data, context);
  const response: DescribeTrustsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTrustsResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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

export const deserializeAws_json1_1DisableLDAPSCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableLDAPSCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableLDAPSCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableLDAPSResult(data, context);
  const response: DisableLDAPSCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableLDAPSResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableRadiusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableRadiusResult(data, context);
  const response: DisableRadiusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableRadiusResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableSsoCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableSsoResult(data, context);
  const response: DisableSsoCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableSsoResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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

export const deserializeAws_json1_1EnableLDAPSCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableLDAPSCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableLDAPSCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableLDAPSResult(data, context);
  const response: EnableLDAPSCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableLDAPSResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableRadiusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableRadiusResult(data, context);
  const response: EnableRadiusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableRadiusResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableSsoCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableSsoResult(data, context);
  const response: EnableSsoCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableSsoResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDirectoryLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDirectoryLimitsResult(data, context);
  const response: GetDirectoryLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDirectoryLimitsResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSnapshotLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSnapshotLimitsResult(data, context);
  const response: GetSnapshotLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSnapshotLimitsResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCertificatesResult(data, context);
  const response: ListCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCertificatesResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListIpRoutesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListIpRoutesResult(data, context);
  const response: ListIpRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListIpRoutesResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListLogSubscriptionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLogSubscriptionsResult(data, context);
  const response: ListLogSubscriptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLogSubscriptionsResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListSchemaExtensionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSchemaExtensionsResult(data, context);
  const response: ListSchemaExtensionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSchemaExtensionsResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResult(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterCertificateResult(data, context);
  const response: RegisterCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterCertificateResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterEventTopicCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterEventTopicResult(data, context);
  const response: RegisterEventTopicCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterEventTopicResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RejectSharedDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RejectSharedDirectoryResult(data, context);
  const response: RejectSharedDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RejectSharedDirectoryResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveIpRoutesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveIpRoutesResult(data, context);
  const response: RemoveIpRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveIpRoutesResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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

export const deserializeAws_json1_1RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveTagsFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTagsFromResourceResult(data, context);
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveTagsFromResourceResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ResetUserPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResetUserPasswordResult(data, context);
  const response: ResetUserPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ResetUserPasswordResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RestoreFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreFromSnapshotResult(data, context);
  const response: RestoreFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RestoreFromSnapshotResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ShareDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ShareDirectoryResult(data, context);
  const response: ShareDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ShareDirectoryResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartSchemaExtensionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartSchemaExtensionResult(data, context);
  const response: StartSchemaExtensionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartSchemaExtensionResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UnshareDirectoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UnshareDirectoryResult(data, context);
  const response: UnshareDirectoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UnshareDirectoryResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateConditionalForwarderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateConditionalForwarderResult(data, context);
  const response: UpdateConditionalForwarderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateConditionalForwarderResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateNumberOfDomainControllersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNumberOfDomainControllersResult(data, context);
  const response: UpdateNumberOfDomainControllersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateNumberOfDomainControllersResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateRadiusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRadiusResult(data, context);
  const response: UpdateRadiusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRadiusResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateTrustCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTrustResult(data, context);
  const response: UpdateTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTrustResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1VerifyTrustCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1VerifyTrustResult(data, context);
  const response: VerifyTrustCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "VerifyTrustResult",
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
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
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
    ...(input.SharedDirectoryId !== undefined && { SharedDirectoryId: input.SharedDirectoryId }),
  };
};

const serializeAws_json1_1AddIpRoutesRequest = (input: AddIpRoutesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.IpRoutes !== undefined && { IpRoutes: serializeAws_json1_1IpRoutes(input.IpRoutes, context) }),
    ...(input.UpdateSecurityGroupForDirectoryControllers !== undefined && {
      UpdateSecurityGroupForDirectoryControllers: input.UpdateSecurityGroupForDirectoryControllers,
    }),
  };
};

const serializeAws_json1_1AddTagsToResourceRequest = (
  input: AddTagsToResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1Attribute = (input: Attribute, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1Attributes = (input: Attribute[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Attribute(entry, context));
};

const serializeAws_json1_1CancelSchemaExtensionRequest = (
  input: CancelSchemaExtensionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.SchemaExtensionId !== undefined && { SchemaExtensionId: input.SchemaExtensionId }),
  };
};

const serializeAws_json1_1CidrIps = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1ConnectDirectoryRequest = (input: ConnectDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectSettings !== undefined && {
      ConnectSettings: serializeAws_json1_1DirectoryConnectSettings(input.ConnectSettings, context),
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Password !== undefined && { Password: input.Password }),
    ...(input.ShortName !== undefined && { ShortName: input.ShortName }),
    ...(input.Size !== undefined && { Size: input.Size }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateAliasRequest = (input: CreateAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.Alias !== undefined && { Alias: input.Alias }),
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1CreateComputerRequest = (input: CreateComputerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ComputerAttributes !== undefined && {
      ComputerAttributes: serializeAws_json1_1Attributes(input.ComputerAttributes, context),
    }),
    ...(input.ComputerName !== undefined && { ComputerName: input.ComputerName }),
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.OrganizationalUnitDistinguishedName !== undefined && {
      OrganizationalUnitDistinguishedName: input.OrganizationalUnitDistinguishedName,
    }),
    ...(input.Password !== undefined && { Password: input.Password }),
  };
};

const serializeAws_json1_1CreateConditionalForwarderRequest = (
  input: CreateConditionalForwarderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.DnsIpAddrs !== undefined && { DnsIpAddrs: serializeAws_json1_1DnsIpAddrs(input.DnsIpAddrs, context) }),
    ...(input.RemoteDomainName !== undefined && { RemoteDomainName: input.RemoteDomainName }),
  };
};

const serializeAws_json1_1CreateDirectoryRequest = (input: CreateDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Password !== undefined && { Password: input.Password }),
    ...(input.ShortName !== undefined && { ShortName: input.ShortName }),
    ...(input.Size !== undefined && { Size: input.Size }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VpcSettings !== undefined && {
      VpcSettings: serializeAws_json1_1DirectoryVpcSettings(input.VpcSettings, context),
    }),
  };
};

const serializeAws_json1_1CreateLogSubscriptionRequest = (
  input: CreateLogSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.LogGroupName !== undefined && { LogGroupName: input.LogGroupName }),
  };
};

const serializeAws_json1_1CreateMicrosoftADRequest = (
  input: CreateMicrosoftADRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Edition !== undefined && { Edition: input.Edition }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Password !== undefined && { Password: input.Password }),
    ...(input.ShortName !== undefined && { ShortName: input.ShortName }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VpcSettings !== undefined && {
      VpcSettings: serializeAws_json1_1DirectoryVpcSettings(input.VpcSettings, context),
    }),
  };
};

const serializeAws_json1_1CreateSnapshotRequest = (input: CreateSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.Name !== undefined && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateTrustRequest = (input: CreateTrustRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConditionalForwarderIpAddrs !== undefined && {
      ConditionalForwarderIpAddrs: serializeAws_json1_1DnsIpAddrs(input.ConditionalForwarderIpAddrs, context),
    }),
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.RemoteDomainName !== undefined && { RemoteDomainName: input.RemoteDomainName }),
    ...(input.SelectiveAuth !== undefined && { SelectiveAuth: input.SelectiveAuth }),
    ...(input.TrustDirection !== undefined && { TrustDirection: input.TrustDirection }),
    ...(input.TrustPassword !== undefined && { TrustPassword: input.TrustPassword }),
    ...(input.TrustType !== undefined && { TrustType: input.TrustType }),
  };
};

const serializeAws_json1_1DeleteConditionalForwarderRequest = (
  input: DeleteConditionalForwarderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.RemoteDomainName !== undefined && { RemoteDomainName: input.RemoteDomainName }),
  };
};

const serializeAws_json1_1DeleteDirectoryRequest = (input: DeleteDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1DeleteLogSubscriptionRequest = (
  input: DeleteLogSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1DeleteSnapshotRequest = (input: DeleteSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.SnapshotId !== undefined && { SnapshotId: input.SnapshotId }),
  };
};

const serializeAws_json1_1DeleteTrustRequest = (input: DeleteTrustRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeleteAssociatedConditionalForwarder !== undefined && {
      DeleteAssociatedConditionalForwarder: input.DeleteAssociatedConditionalForwarder,
    }),
    ...(input.TrustId !== undefined && { TrustId: input.TrustId }),
  };
};

const serializeAws_json1_1DeregisterCertificateRequest = (
  input: DeregisterCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateId !== undefined && { CertificateId: input.CertificateId }),
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1DeregisterEventTopicRequest = (
  input: DeregisterEventTopicRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.TopicName !== undefined && { TopicName: input.TopicName }),
  };
};

const serializeAws_json1_1DescribeCertificateRequest = (
  input: DescribeCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateId !== undefined && { CertificateId: input.CertificateId }),
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1DescribeConditionalForwardersRequest = (
  input: DescribeConditionalForwardersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.RemoteDomainNames !== undefined && {
      RemoteDomainNames: serializeAws_json1_1RemoteDomainNames(input.RemoteDomainNames, context),
    }),
  };
};

const serializeAws_json1_1DescribeDirectoriesRequest = (
  input: DescribeDirectoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryIds !== undefined && {
      DirectoryIds: serializeAws_json1_1DirectoryIds(input.DirectoryIds, context),
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeDomainControllersRequest = (
  input: DescribeDomainControllersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.DomainControllerIds !== undefined && {
      DomainControllerIds: serializeAws_json1_1DomainControllerIds(input.DomainControllerIds, context),
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeEventTopicsRequest = (
  input: DescribeEventTopicsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.TopicNames !== undefined && { TopicNames: serializeAws_json1_1TopicNames(input.TopicNames, context) }),
  };
};

const serializeAws_json1_1DescribeLDAPSSettingsRequest = (
  input: DescribeLDAPSSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_json1_1DescribeSharedDirectoriesRequest = (
  input: DescribeSharedDirectoriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.OwnerDirectoryId !== undefined && { OwnerDirectoryId: input.OwnerDirectoryId }),
    ...(input.SharedDirectoryIds !== undefined && {
      SharedDirectoryIds: serializeAws_json1_1DirectoryIds(input.SharedDirectoryIds, context),
    }),
  };
};

const serializeAws_json1_1DescribeSnapshotsRequest = (
  input: DescribeSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SnapshotIds !== undefined && {
      SnapshotIds: serializeAws_json1_1SnapshotIds(input.SnapshotIds, context),
    }),
  };
};

const serializeAws_json1_1DescribeTrustsRequest = (input: DescribeTrustsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.TrustIds !== undefined && { TrustIds: serializeAws_json1_1TrustIds(input.TrustIds, context) }),
  };
};

const serializeAws_json1_1DirectoryConnectSettings = (
  input: DirectoryConnectSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomerDnsIps !== undefined && {
      CustomerDnsIps: serializeAws_json1_1DnsIpAddrs(input.CustomerDnsIps, context),
    }),
    ...(input.CustomerUserName !== undefined && { CustomerUserName: input.CustomerUserName }),
    ...(input.SubnetIds !== undefined && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    ...(input.VpcId !== undefined && { VpcId: input.VpcId }),
  };
};

const serializeAws_json1_1DirectoryIds = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1DirectoryVpcSettings = (input: DirectoryVpcSettings, context: __SerdeContext): any => {
  return {
    ...(input.SubnetIds !== undefined && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    ...(input.VpcId !== undefined && { VpcId: input.VpcId }),
  };
};

const serializeAws_json1_1DisableLDAPSRequest = (input: DisableLDAPSRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_json1_1DisableRadiusRequest = (input: DisableRadiusRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1DisableSsoRequest = (input: DisableSsoRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.Password !== undefined && { Password: input.Password }),
    ...(input.UserName !== undefined && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DnsIpAddrs = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1DomainControllerIds = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1EnableLDAPSRequest = (input: EnableLDAPSRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_json1_1EnableRadiusRequest = (input: EnableRadiusRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.RadiusSettings !== undefined && {
      RadiusSettings: serializeAws_json1_1RadiusSettings(input.RadiusSettings, context),
    }),
  };
};

const serializeAws_json1_1EnableSsoRequest = (input: EnableSsoRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.Password !== undefined && { Password: input.Password }),
    ...(input.UserName !== undefined && { UserName: input.UserName }),
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
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1IpRoute = (input: IpRoute, context: __SerdeContext): any => {
  return {
    ...(input.CidrIp !== undefined && { CidrIp: input.CidrIp }),
    ...(input.Description !== undefined && { Description: input.Description }),
  };
};

const serializeAws_json1_1IpRoutes = (input: IpRoute[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1IpRoute(entry, context));
};

const serializeAws_json1_1ListCertificatesRequest = (input: ListCertificatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListIpRoutesRequest = (input: ListIpRoutesRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListLogSubscriptionsRequest = (
  input: ListLogSubscriptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListSchemaExtensionsRequest = (
  input: ListSchemaExtensionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1RadiusSettings = (input: RadiusSettings, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationProtocol !== undefined && { AuthenticationProtocol: input.AuthenticationProtocol }),
    ...(input.DisplayLabel !== undefined && { DisplayLabel: input.DisplayLabel }),
    ...(input.RadiusPort !== undefined && { RadiusPort: input.RadiusPort }),
    ...(input.RadiusRetries !== undefined && { RadiusRetries: input.RadiusRetries }),
    ...(input.RadiusServers !== undefined && {
      RadiusServers: serializeAws_json1_1Servers(input.RadiusServers, context),
    }),
    ...(input.RadiusTimeout !== undefined && { RadiusTimeout: input.RadiusTimeout }),
    ...(input.SharedSecret !== undefined && { SharedSecret: input.SharedSecret }),
    ...(input.UseSameUsername !== undefined && { UseSameUsername: input.UseSameUsername }),
  };
};

const serializeAws_json1_1RegisterCertificateRequest = (
  input: RegisterCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateData !== undefined && { CertificateData: input.CertificateData }),
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1RegisterEventTopicRequest = (
  input: RegisterEventTopicRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.TopicName !== undefined && { TopicName: input.TopicName }),
  };
};

const serializeAws_json1_1RejectSharedDirectoryRequest = (
  input: RejectSharedDirectoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SharedDirectoryId !== undefined && { SharedDirectoryId: input.SharedDirectoryId }),
  };
};

const serializeAws_json1_1RemoteDomainNames = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1RemoveIpRoutesRequest = (input: RemoveIpRoutesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CidrIps !== undefined && { CidrIps: serializeAws_json1_1CidrIps(input.CidrIps, context) }),
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1RemoveTagsFromResourceRequest = (
  input: RemoveTagsFromResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId }),
    ...(input.TagKeys !== undefined && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1ResetUserPasswordRequest = (
  input: ResetUserPasswordRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.NewPassword !== undefined && { NewPassword: input.NewPassword }),
    ...(input.UserName !== undefined && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1RestoreFromSnapshotRequest = (
  input: RestoreFromSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnapshotId !== undefined && { SnapshotId: input.SnapshotId }),
  };
};

const serializeAws_json1_1Servers = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1ShareDirectoryRequest = (input: ShareDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.ShareMethod !== undefined && { ShareMethod: input.ShareMethod }),
    ...(input.ShareNotes !== undefined && { ShareNotes: input.ShareNotes }),
    ...(input.ShareTarget !== undefined && {
      ShareTarget: serializeAws_json1_1ShareTarget(input.ShareTarget, context),
    }),
  };
};

const serializeAws_json1_1ShareTarget = (input: ShareTarget, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_json1_1SnapshotIds = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1StartSchemaExtensionRequest = (
  input: StartSchemaExtensionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreateSnapshotBeforeSchemaExtension !== undefined && {
      CreateSnapshotBeforeSchemaExtension: input.CreateSnapshotBeforeSchemaExtension,
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.LdifContent !== undefined && { LdifContent: input.LdifContent }),
  };
};

const serializeAws_json1_1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TopicNames = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1TrustIds = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1UnshareDirectoryRequest = (input: UnshareDirectoryRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.UnshareTarget !== undefined && {
      UnshareTarget: serializeAws_json1_1UnshareTarget(input.UnshareTarget, context),
    }),
  };
};

const serializeAws_json1_1UnshareTarget = (input: UnshareTarget, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_json1_1UpdateConditionalForwarderRequest = (
  input: UpdateConditionalForwarderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.DnsIpAddrs !== undefined && { DnsIpAddrs: serializeAws_json1_1DnsIpAddrs(input.DnsIpAddrs, context) }),
    ...(input.RemoteDomainName !== undefined && { RemoteDomainName: input.RemoteDomainName }),
  };
};

const serializeAws_json1_1UpdateNumberOfDomainControllersRequest = (
  input: UpdateNumberOfDomainControllersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DesiredNumber !== undefined && { DesiredNumber: input.DesiredNumber }),
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
  };
};

const serializeAws_json1_1UpdateRadiusRequest = (input: UpdateRadiusRequest, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId !== undefined && { DirectoryId: input.DirectoryId }),
    ...(input.RadiusSettings !== undefined && {
      RadiusSettings: serializeAws_json1_1RadiusSettings(input.RadiusSettings, context),
    }),
  };
};

const serializeAws_json1_1UpdateTrustRequest = (input: UpdateTrustRequest, context: __SerdeContext): any => {
  return {
    ...(input.SelectiveAuth !== undefined && { SelectiveAuth: input.SelectiveAuth }),
    ...(input.TrustId !== undefined && { TrustId: input.TrustId }),
  };
};

const serializeAws_json1_1VerifyTrustRequest = (input: VerifyTrustRequest, context: __SerdeContext): any => {
  return {
    ...(input.TrustId !== undefined && { TrustId: input.TrustId }),
  };
};

const deserializeAws_json1_1AcceptSharedDirectoryResult = (
  output: any,
  context: __SerdeContext
): AcceptSharedDirectoryResult => {
  return {
    __type: "AcceptSharedDirectoryResult",
    SharedDirectory:
      output.SharedDirectory !== undefined && output.SharedDirectory !== null
        ? deserializeAws_json1_1SharedDirectory(output.SharedDirectory, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    __type: "AccessDeniedException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1AddIpRoutesResult = (output: any, context: __SerdeContext): AddIpRoutesResult => {
  return {
    __type: "AddIpRoutesResult",
  } as any;
};

const deserializeAws_json1_1AddTagsToResourceResult = (
  output: any,
  context: __SerdeContext
): AddTagsToResourceResult => {
  return {
    __type: "AddTagsToResourceResult",
  } as any;
};

const deserializeAws_json1_1Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    __type: "Attribute",
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1Attributes = (output: any, context: __SerdeContext): Attribute[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Attribute(entry, context));
};

const deserializeAws_json1_1AuthenticationFailedException = (
  output: any,
  context: __SerdeContext
): AuthenticationFailedException => {
  return {
    __type: "AuthenticationFailedException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1AvailabilityZones = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1CancelSchemaExtensionResult = (
  output: any,
  context: __SerdeContext
): CancelSchemaExtensionResult => {
  return {
    __type: "CancelSchemaExtensionResult",
  } as any;
};

const deserializeAws_json1_1Certificate = (output: any, context: __SerdeContext): Certificate => {
  return {
    __type: "Certificate",
    CertificateId:
      output.CertificateId !== undefined && output.CertificateId !== null ? output.CertificateId : undefined,
    CommonName: output.CommonName !== undefined && output.CommonName !== null ? output.CommonName : undefined,
    ExpiryDateTime:
      output.ExpiryDateTime !== undefined && output.ExpiryDateTime !== null
        ? new Date(Math.round(output.ExpiryDateTime * 1000))
        : undefined,
    RegisteredDateTime:
      output.RegisteredDateTime !== undefined && output.RegisteredDateTime !== null
        ? new Date(Math.round(output.RegisteredDateTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
  } as any;
};

const deserializeAws_json1_1CertificateAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): CertificateAlreadyExistsException => {
  return {
    __type: "CertificateAlreadyExistsException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1CertificateDoesNotExistException = (
  output: any,
  context: __SerdeContext
): CertificateDoesNotExistException => {
  return {
    __type: "CertificateDoesNotExistException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1CertificateInfo = (output: any, context: __SerdeContext): CertificateInfo => {
  return {
    __type: "CertificateInfo",
    CertificateId:
      output.CertificateId !== undefined && output.CertificateId !== null ? output.CertificateId : undefined,
    CommonName: output.CommonName !== undefined && output.CommonName !== null ? output.CommonName : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
  } as any;
};

const deserializeAws_json1_1CertificateInUseException = (
  output: any,
  context: __SerdeContext
): CertificateInUseException => {
  return {
    __type: "CertificateInUseException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1CertificateLimitExceededException = (
  output: any,
  context: __SerdeContext
): CertificateLimitExceededException => {
  return {
    __type: "CertificateLimitExceededException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1CertificatesInfo = (output: any, context: __SerdeContext): CertificateInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1CertificateInfo(entry, context));
};

const deserializeAws_json1_1ClientException = (output: any, context: __SerdeContext): ClientException => {
  return {
    __type: "ClientException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1Computer = (output: any, context: __SerdeContext): Computer => {
  return {
    __type: "Computer",
    ComputerAttributes:
      output.ComputerAttributes !== undefined && output.ComputerAttributes !== null
        ? deserializeAws_json1_1Attributes(output.ComputerAttributes, context)
        : undefined,
    ComputerId: output.ComputerId !== undefined && output.ComputerId !== null ? output.ComputerId : undefined,
    ComputerName: output.ComputerName !== undefined && output.ComputerName !== null ? output.ComputerName : undefined,
  } as any;
};

const deserializeAws_json1_1ConditionalForwarder = (output: any, context: __SerdeContext): ConditionalForwarder => {
  return {
    __type: "ConditionalForwarder",
    DnsIpAddrs:
      output.DnsIpAddrs !== undefined && output.DnsIpAddrs !== null
        ? deserializeAws_json1_1DnsIpAddrs(output.DnsIpAddrs, context)
        : undefined,
    RemoteDomainName:
      output.RemoteDomainName !== undefined && output.RemoteDomainName !== null ? output.RemoteDomainName : undefined,
    ReplicationScope:
      output.ReplicationScope !== undefined && output.ReplicationScope !== null ? output.ReplicationScope : undefined,
  } as any;
};

const deserializeAws_json1_1ConditionalForwarders = (output: any, context: __SerdeContext): ConditionalForwarder[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1ConditionalForwarder(entry, context));
};

const deserializeAws_json1_1ConnectDirectoryResult = (output: any, context: __SerdeContext): ConnectDirectoryResult => {
  return {
    __type: "ConnectDirectoryResult",
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
  } as any;
};

const deserializeAws_json1_1CreateAliasResult = (output: any, context: __SerdeContext): CreateAliasResult => {
  return {
    __type: "CreateAliasResult",
    Alias: output.Alias !== undefined && output.Alias !== null ? output.Alias : undefined,
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
  } as any;
};

const deserializeAws_json1_1CreateComputerResult = (output: any, context: __SerdeContext): CreateComputerResult => {
  return {
    __type: "CreateComputerResult",
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
  return {
    __type: "CreateConditionalForwarderResult",
  } as any;
};

const deserializeAws_json1_1CreateDirectoryResult = (output: any, context: __SerdeContext): CreateDirectoryResult => {
  return {
    __type: "CreateDirectoryResult",
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
  } as any;
};

const deserializeAws_json1_1CreateLogSubscriptionResult = (
  output: any,
  context: __SerdeContext
): CreateLogSubscriptionResult => {
  return {
    __type: "CreateLogSubscriptionResult",
  } as any;
};

const deserializeAws_json1_1CreateMicrosoftADResult = (
  output: any,
  context: __SerdeContext
): CreateMicrosoftADResult => {
  return {
    __type: "CreateMicrosoftADResult",
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
  } as any;
};

const deserializeAws_json1_1CreateSnapshotResult = (output: any, context: __SerdeContext): CreateSnapshotResult => {
  return {
    __type: "CreateSnapshotResult",
    SnapshotId: output.SnapshotId !== undefined && output.SnapshotId !== null ? output.SnapshotId : undefined,
  } as any;
};

const deserializeAws_json1_1CreateTrustResult = (output: any, context: __SerdeContext): CreateTrustResult => {
  return {
    __type: "CreateTrustResult",
    TrustId: output.TrustId !== undefined && output.TrustId !== null ? output.TrustId : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteConditionalForwarderResult = (
  output: any,
  context: __SerdeContext
): DeleteConditionalForwarderResult => {
  return {
    __type: "DeleteConditionalForwarderResult",
  } as any;
};

const deserializeAws_json1_1DeleteDirectoryResult = (output: any, context: __SerdeContext): DeleteDirectoryResult => {
  return {
    __type: "DeleteDirectoryResult",
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteLogSubscriptionResult = (
  output: any,
  context: __SerdeContext
): DeleteLogSubscriptionResult => {
  return {
    __type: "DeleteLogSubscriptionResult",
  } as any;
};

const deserializeAws_json1_1DeleteSnapshotResult = (output: any, context: __SerdeContext): DeleteSnapshotResult => {
  return {
    __type: "DeleteSnapshotResult",
    SnapshotId: output.SnapshotId !== undefined && output.SnapshotId !== null ? output.SnapshotId : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteTrustResult = (output: any, context: __SerdeContext): DeleteTrustResult => {
  return {
    __type: "DeleteTrustResult",
    TrustId: output.TrustId !== undefined && output.TrustId !== null ? output.TrustId : undefined,
  } as any;
};

const deserializeAws_json1_1DeregisterCertificateResult = (
  output: any,
  context: __SerdeContext
): DeregisterCertificateResult => {
  return {
    __type: "DeregisterCertificateResult",
  } as any;
};

const deserializeAws_json1_1DeregisterEventTopicResult = (
  output: any,
  context: __SerdeContext
): DeregisterEventTopicResult => {
  return {
    __type: "DeregisterEventTopicResult",
  } as any;
};

const deserializeAws_json1_1DescribeCertificateResult = (
  output: any,
  context: __SerdeContext
): DescribeCertificateResult => {
  return {
    __type: "DescribeCertificateResult",
    Certificate:
      output.Certificate !== undefined && output.Certificate !== null
        ? deserializeAws_json1_1Certificate(output.Certificate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeConditionalForwardersResult = (
  output: any,
  context: __SerdeContext
): DescribeConditionalForwardersResult => {
  return {
    __type: "DescribeConditionalForwardersResult",
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
    __type: "DescribeDirectoriesResult",
    DirectoryDescriptions:
      output.DirectoryDescriptions !== undefined && output.DirectoryDescriptions !== null
        ? deserializeAws_json1_1DirectoryDescriptions(output.DirectoryDescriptions, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDomainControllersResult = (
  output: any,
  context: __SerdeContext
): DescribeDomainControllersResult => {
  return {
    __type: "DescribeDomainControllersResult",
    DomainControllers:
      output.DomainControllers !== undefined && output.DomainControllers !== null
        ? deserializeAws_json1_1DomainControllers(output.DomainControllers, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEventTopicsResult = (
  output: any,
  context: __SerdeContext
): DescribeEventTopicsResult => {
  return {
    __type: "DescribeEventTopicsResult",
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
    __type: "DescribeLDAPSSettingsResult",
    LDAPSSettingsInfo:
      output.LDAPSSettingsInfo !== undefined && output.LDAPSSettingsInfo !== null
        ? deserializeAws_json1_1LDAPSSettingsInfo(output.LDAPSSettingsInfo, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSharedDirectoriesResult = (
  output: any,
  context: __SerdeContext
): DescribeSharedDirectoriesResult => {
  return {
    __type: "DescribeSharedDirectoriesResult",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
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
    __type: "DescribeSnapshotsResult",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Snapshots:
      output.Snapshots !== undefined && output.Snapshots !== null
        ? deserializeAws_json1_1Snapshots(output.Snapshots, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTrustsResult = (output: any, context: __SerdeContext): DescribeTrustsResult => {
  return {
    __type: "DescribeTrustsResult",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Trusts:
      output.Trusts !== undefined && output.Trusts !== null
        ? deserializeAws_json1_1Trusts(output.Trusts, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryAlreadySharedException = (
  output: any,
  context: __SerdeContext
): DirectoryAlreadySharedException => {
  return {
    __type: "DirectoryAlreadySharedException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryConnectSettingsDescription = (
  output: any,
  context: __SerdeContext
): DirectoryConnectSettingsDescription => {
  return {
    __type: "DirectoryConnectSettingsDescription",
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_json1_1AvailabilityZones(output.AvailabilityZones, context)
        : undefined,
    ConnectIps:
      output.ConnectIps !== undefined && output.ConnectIps !== null
        ? deserializeAws_json1_1IpAddrs(output.ConnectIps, context)
        : undefined,
    CustomerUserName:
      output.CustomerUserName !== undefined && output.CustomerUserName !== null ? output.CustomerUserName : undefined,
    SecurityGroupId:
      output.SecurityGroupId !== undefined && output.SecurityGroupId !== null ? output.SecurityGroupId : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
        : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryDescription = (output: any, context: __SerdeContext): DirectoryDescription => {
  return {
    __type: "DirectoryDescription",
    AccessUrl: output.AccessUrl !== undefined && output.AccessUrl !== null ? output.AccessUrl : undefined,
    Alias: output.Alias !== undefined && output.Alias !== null ? output.Alias : undefined,
    ConnectSettings:
      output.ConnectSettings !== undefined && output.ConnectSettings !== null
        ? deserializeAws_json1_1DirectoryConnectSettingsDescription(output.ConnectSettings, context)
        : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    DesiredNumberOfDomainControllers:
      output.DesiredNumberOfDomainControllers !== undefined && output.DesiredNumberOfDomainControllers !== null
        ? output.DesiredNumberOfDomainControllers
        : undefined,
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    DnsIpAddrs:
      output.DnsIpAddrs !== undefined && output.DnsIpAddrs !== null
        ? deserializeAws_json1_1DnsIpAddrs(output.DnsIpAddrs, context)
        : undefined,
    Edition: output.Edition !== undefined && output.Edition !== null ? output.Edition : undefined,
    LaunchTime:
      output.LaunchTime !== undefined && output.LaunchTime !== null
        ? new Date(Math.round(output.LaunchTime * 1000))
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    OwnerDirectoryDescription:
      output.OwnerDirectoryDescription !== undefined && output.OwnerDirectoryDescription !== null
        ? deserializeAws_json1_1OwnerDirectoryDescription(output.OwnerDirectoryDescription, context)
        : undefined,
    RadiusSettings:
      output.RadiusSettings !== undefined && output.RadiusSettings !== null
        ? deserializeAws_json1_1RadiusSettings(output.RadiusSettings, context)
        : undefined,
    RadiusStatus: output.RadiusStatus !== undefined && output.RadiusStatus !== null ? output.RadiusStatus : undefined,
    ShareMethod: output.ShareMethod !== undefined && output.ShareMethod !== null ? output.ShareMethod : undefined,
    ShareNotes: output.ShareNotes !== undefined && output.ShareNotes !== null ? output.ShareNotes : undefined,
    ShareStatus: output.ShareStatus !== undefined && output.ShareStatus !== null ? output.ShareStatus : undefined,
    ShortName: output.ShortName !== undefined && output.ShortName !== null ? output.ShortName : undefined,
    Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
    SsoEnabled: output.SsoEnabled !== undefined && output.SsoEnabled !== null ? output.SsoEnabled : undefined,
    Stage: output.Stage !== undefined && output.Stage !== null ? output.Stage : undefined,
    StageLastUpdatedDateTime:
      output.StageLastUpdatedDateTime !== undefined && output.StageLastUpdatedDateTime !== null
        ? new Date(Math.round(output.StageLastUpdatedDateTime * 1000))
        : undefined,
    StageReason: output.StageReason !== undefined && output.StageReason !== null ? output.StageReason : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    VpcSettings:
      output.VpcSettings !== undefined && output.VpcSettings !== null
        ? deserializeAws_json1_1DirectoryVpcSettingsDescription(output.VpcSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryDescriptions = (output: any, context: __SerdeContext): DirectoryDescription[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DirectoryDescription(entry, context));
};

const deserializeAws_json1_1DirectoryDoesNotExistException = (
  output: any,
  context: __SerdeContext
): DirectoryDoesNotExistException => {
  return {
    __type: "DirectoryDoesNotExistException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryLimitExceededException = (
  output: any,
  context: __SerdeContext
): DirectoryLimitExceededException => {
  return {
    __type: "DirectoryLimitExceededException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryLimits = (output: any, context: __SerdeContext): DirectoryLimits => {
  return {
    __type: "DirectoryLimits",
    CloudOnlyDirectoriesCurrentCount:
      output.CloudOnlyDirectoriesCurrentCount !== undefined && output.CloudOnlyDirectoriesCurrentCount !== null
        ? output.CloudOnlyDirectoriesCurrentCount
        : undefined,
    CloudOnlyDirectoriesLimit:
      output.CloudOnlyDirectoriesLimit !== undefined && output.CloudOnlyDirectoriesLimit !== null
        ? output.CloudOnlyDirectoriesLimit
        : undefined,
    CloudOnlyDirectoriesLimitReached:
      output.CloudOnlyDirectoriesLimitReached !== undefined && output.CloudOnlyDirectoriesLimitReached !== null
        ? output.CloudOnlyDirectoriesLimitReached
        : undefined,
    CloudOnlyMicrosoftADCurrentCount:
      output.CloudOnlyMicrosoftADCurrentCount !== undefined && output.CloudOnlyMicrosoftADCurrentCount !== null
        ? output.CloudOnlyMicrosoftADCurrentCount
        : undefined,
    CloudOnlyMicrosoftADLimit:
      output.CloudOnlyMicrosoftADLimit !== undefined && output.CloudOnlyMicrosoftADLimit !== null
        ? output.CloudOnlyMicrosoftADLimit
        : undefined,
    CloudOnlyMicrosoftADLimitReached:
      output.CloudOnlyMicrosoftADLimitReached !== undefined && output.CloudOnlyMicrosoftADLimitReached !== null
        ? output.CloudOnlyMicrosoftADLimitReached
        : undefined,
    ConnectedDirectoriesCurrentCount:
      output.ConnectedDirectoriesCurrentCount !== undefined && output.ConnectedDirectoriesCurrentCount !== null
        ? output.ConnectedDirectoriesCurrentCount
        : undefined,
    ConnectedDirectoriesLimit:
      output.ConnectedDirectoriesLimit !== undefined && output.ConnectedDirectoriesLimit !== null
        ? output.ConnectedDirectoriesLimit
        : undefined,
    ConnectedDirectoriesLimitReached:
      output.ConnectedDirectoriesLimitReached !== undefined && output.ConnectedDirectoriesLimitReached !== null
        ? output.ConnectedDirectoriesLimitReached
        : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryNotSharedException = (
  output: any,
  context: __SerdeContext
): DirectoryNotSharedException => {
  return {
    __type: "DirectoryNotSharedException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryUnavailableException = (
  output: any,
  context: __SerdeContext
): DirectoryUnavailableException => {
  return {
    __type: "DirectoryUnavailableException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1DirectoryVpcSettingsDescription = (
  output: any,
  context: __SerdeContext
): DirectoryVpcSettingsDescription => {
  return {
    __type: "DirectoryVpcSettingsDescription",
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_json1_1AvailabilityZones(output.AvailabilityZones, context)
        : undefined,
    SecurityGroupId:
      output.SecurityGroupId !== undefined && output.SecurityGroupId !== null ? output.SecurityGroupId : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
        : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_json1_1DisableLDAPSResult = (output: any, context: __SerdeContext): DisableLDAPSResult => {
  return {
    __type: "DisableLDAPSResult",
  } as any;
};

const deserializeAws_json1_1DisableRadiusResult = (output: any, context: __SerdeContext): DisableRadiusResult => {
  return {
    __type: "DisableRadiusResult",
  } as any;
};

const deserializeAws_json1_1DisableSsoResult = (output: any, context: __SerdeContext): DisableSsoResult => {
  return {
    __type: "DisableSsoResult",
  } as any;
};

const deserializeAws_json1_1DnsIpAddrs = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DomainController = (output: any, context: __SerdeContext): DomainController => {
  return {
    __type: "DomainController",
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null ? output.AvailabilityZone : undefined,
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    DnsIpAddr: output.DnsIpAddr !== undefined && output.DnsIpAddr !== null ? output.DnsIpAddr : undefined,
    DomainControllerId:
      output.DomainControllerId !== undefined && output.DomainControllerId !== null
        ? output.DomainControllerId
        : undefined,
    LaunchTime:
      output.LaunchTime !== undefined && output.LaunchTime !== null
        ? new Date(Math.round(output.LaunchTime * 1000))
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    StatusLastUpdatedDateTime:
      output.StatusLastUpdatedDateTime !== undefined && output.StatusLastUpdatedDateTime !== null
        ? new Date(Math.round(output.StatusLastUpdatedDateTime * 1000))
        : undefined,
    StatusReason: output.StatusReason !== undefined && output.StatusReason !== null ? output.StatusReason : undefined,
    SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
    VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
  } as any;
};

const deserializeAws_json1_1DomainControllerLimitExceededException = (
  output: any,
  context: __SerdeContext
): DomainControllerLimitExceededException => {
  return {
    __type: "DomainControllerLimitExceededException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1DomainControllers = (output: any, context: __SerdeContext): DomainController[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1DomainController(entry, context));
};

const deserializeAws_json1_1EnableLDAPSResult = (output: any, context: __SerdeContext): EnableLDAPSResult => {
  return {
    __type: "EnableLDAPSResult",
  } as any;
};

const deserializeAws_json1_1EnableRadiusResult = (output: any, context: __SerdeContext): EnableRadiusResult => {
  return {
    __type: "EnableRadiusResult",
  } as any;
};

const deserializeAws_json1_1EnableSsoResult = (output: any, context: __SerdeContext): EnableSsoResult => {
  return {
    __type: "EnableSsoResult",
  } as any;
};

const deserializeAws_json1_1EntityAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): EntityAlreadyExistsException => {
  return {
    __type: "EntityAlreadyExistsException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1EntityDoesNotExistException = (
  output: any,
  context: __SerdeContext
): EntityDoesNotExistException => {
  return {
    __type: "EntityDoesNotExistException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1EventTopic = (output: any, context: __SerdeContext): EventTopic => {
  return {
    __type: "EventTopic",
    CreatedDateTime:
      output.CreatedDateTime !== undefined && output.CreatedDateTime !== null
        ? new Date(Math.round(output.CreatedDateTime * 1000))
        : undefined,
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    TopicArn: output.TopicArn !== undefined && output.TopicArn !== null ? output.TopicArn : undefined,
    TopicName: output.TopicName !== undefined && output.TopicName !== null ? output.TopicName : undefined,
  } as any;
};

const deserializeAws_json1_1EventTopics = (output: any, context: __SerdeContext): EventTopic[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1EventTopic(entry, context));
};

const deserializeAws_json1_1GetDirectoryLimitsResult = (
  output: any,
  context: __SerdeContext
): GetDirectoryLimitsResult => {
  return {
    __type: "GetDirectoryLimitsResult",
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
    __type: "GetSnapshotLimitsResult",
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
    __type: "InsufficientPermissionsException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidCertificateException = (
  output: any,
  context: __SerdeContext
): InvalidCertificateException => {
  return {
    __type: "InvalidCertificateException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidLDAPSStatusException = (
  output: any,
  context: __SerdeContext
): InvalidLDAPSStatusException => {
  return {
    __type: "InvalidLDAPSStatusException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    __type: "InvalidNextTokenException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    __type: "InvalidParameterException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidPasswordException = (
  output: any,
  context: __SerdeContext
): InvalidPasswordException => {
  return {
    __type: "InvalidPasswordException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidTargetException = (output: any, context: __SerdeContext): InvalidTargetException => {
  return {
    __type: "InvalidTargetException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1IpAddrs = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1IpRouteInfo = (output: any, context: __SerdeContext): IpRouteInfo => {
  return {
    __type: "IpRouteInfo",
    AddedDateTime:
      output.AddedDateTime !== undefined && output.AddedDateTime !== null
        ? new Date(Math.round(output.AddedDateTime * 1000))
        : undefined,
    CidrIp: output.CidrIp !== undefined && output.CidrIp !== null ? output.CidrIp : undefined,
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    IpRouteStatusMsg:
      output.IpRouteStatusMsg !== undefined && output.IpRouteStatusMsg !== null ? output.IpRouteStatusMsg : undefined,
    IpRouteStatusReason:
      output.IpRouteStatusReason !== undefined && output.IpRouteStatusReason !== null
        ? output.IpRouteStatusReason
        : undefined,
  } as any;
};

const deserializeAws_json1_1IpRouteLimitExceededException = (
  output: any,
  context: __SerdeContext
): IpRouteLimitExceededException => {
  return {
    __type: "IpRouteLimitExceededException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1IpRoutesInfo = (output: any, context: __SerdeContext): IpRouteInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1IpRouteInfo(entry, context));
};

const deserializeAws_json1_1LDAPSSettingInfo = (output: any, context: __SerdeContext): LDAPSSettingInfo => {
  return {
    __type: "LDAPSSettingInfo",
    LDAPSStatus: output.LDAPSStatus !== undefined && output.LDAPSStatus !== null ? output.LDAPSStatus : undefined,
    LDAPSStatusReason:
      output.LDAPSStatusReason !== undefined && output.LDAPSStatusReason !== null
        ? output.LDAPSStatusReason
        : undefined,
    LastUpdatedDateTime:
      output.LastUpdatedDateTime !== undefined && output.LastUpdatedDateTime !== null
        ? new Date(Math.round(output.LastUpdatedDateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1LDAPSSettingsInfo = (output: any, context: __SerdeContext): LDAPSSettingInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1LDAPSSettingInfo(entry, context));
};

const deserializeAws_json1_1ListCertificatesResult = (output: any, context: __SerdeContext): ListCertificatesResult => {
  return {
    __type: "ListCertificatesResult",
    CertificatesInfo:
      output.CertificatesInfo !== undefined && output.CertificatesInfo !== null
        ? deserializeAws_json1_1CertificatesInfo(output.CertificatesInfo, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListIpRoutesResult = (output: any, context: __SerdeContext): ListIpRoutesResult => {
  return {
    __type: "ListIpRoutesResult",
    IpRoutesInfo:
      output.IpRoutesInfo !== undefined && output.IpRoutesInfo !== null
        ? deserializeAws_json1_1IpRoutesInfo(output.IpRoutesInfo, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListLogSubscriptionsResult = (
  output: any,
  context: __SerdeContext
): ListLogSubscriptionsResult => {
  return {
    __type: "ListLogSubscriptionsResult",
    LogSubscriptions:
      output.LogSubscriptions !== undefined && output.LogSubscriptions !== null
        ? deserializeAws_json1_1LogSubscriptions(output.LogSubscriptions, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListSchemaExtensionsResult = (
  output: any,
  context: __SerdeContext
): ListSchemaExtensionsResult => {
  return {
    __type: "ListSchemaExtensionsResult",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
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
    __type: "ListTagsForResourceResult",
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LogSubscription = (output: any, context: __SerdeContext): LogSubscription => {
  return {
    __type: "LogSubscription",
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    LogGroupName: output.LogGroupName !== undefined && output.LogGroupName !== null ? output.LogGroupName : undefined,
    SubscriptionCreatedDateTime:
      output.SubscriptionCreatedDateTime !== undefined && output.SubscriptionCreatedDateTime !== null
        ? new Date(Math.round(output.SubscriptionCreatedDateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1LogSubscriptions = (output: any, context: __SerdeContext): LogSubscription[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1LogSubscription(entry, context));
};

const deserializeAws_json1_1NoAvailableCertificateException = (
  output: any,
  context: __SerdeContext
): NoAvailableCertificateException => {
  return {
    __type: "NoAvailableCertificateException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1OrganizationsException = (output: any, context: __SerdeContext): OrganizationsException => {
  return {
    __type: "OrganizationsException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1OwnerDirectoryDescription = (
  output: any,
  context: __SerdeContext
): OwnerDirectoryDescription => {
  return {
    __type: "OwnerDirectoryDescription",
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    DnsIpAddrs:
      output.DnsIpAddrs !== undefined && output.DnsIpAddrs !== null
        ? deserializeAws_json1_1DnsIpAddrs(output.DnsIpAddrs, context)
        : undefined,
    RadiusSettings:
      output.RadiusSettings !== undefined && output.RadiusSettings !== null
        ? deserializeAws_json1_1RadiusSettings(output.RadiusSettings, context)
        : undefined,
    RadiusStatus: output.RadiusStatus !== undefined && output.RadiusStatus !== null ? output.RadiusStatus : undefined,
    VpcSettings:
      output.VpcSettings !== undefined && output.VpcSettings !== null
        ? deserializeAws_json1_1DirectoryVpcSettingsDescription(output.VpcSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RadiusSettings = (output: any, context: __SerdeContext): RadiusSettings => {
  return {
    __type: "RadiusSettings",
    AuthenticationProtocol:
      output.AuthenticationProtocol !== undefined && output.AuthenticationProtocol !== null
        ? output.AuthenticationProtocol
        : undefined,
    DisplayLabel: output.DisplayLabel !== undefined && output.DisplayLabel !== null ? output.DisplayLabel : undefined,
    RadiusPort: output.RadiusPort !== undefined && output.RadiusPort !== null ? output.RadiusPort : undefined,
    RadiusRetries:
      output.RadiusRetries !== undefined && output.RadiusRetries !== null ? output.RadiusRetries : undefined,
    RadiusServers:
      output.RadiusServers !== undefined && output.RadiusServers !== null
        ? deserializeAws_json1_1Servers(output.RadiusServers, context)
        : undefined,
    RadiusTimeout:
      output.RadiusTimeout !== undefined && output.RadiusTimeout !== null ? output.RadiusTimeout : undefined,
    SharedSecret: output.SharedSecret !== undefined && output.SharedSecret !== null ? output.SharedSecret : undefined,
    UseSameUsername:
      output.UseSameUsername !== undefined && output.UseSameUsername !== null ? output.UseSameUsername : undefined,
  } as any;
};

const deserializeAws_json1_1RegisterCertificateResult = (
  output: any,
  context: __SerdeContext
): RegisterCertificateResult => {
  return {
    __type: "RegisterCertificateResult",
    CertificateId:
      output.CertificateId !== undefined && output.CertificateId !== null ? output.CertificateId : undefined,
  } as any;
};

const deserializeAws_json1_1RegisterEventTopicResult = (
  output: any,
  context: __SerdeContext
): RegisterEventTopicResult => {
  return {
    __type: "RegisterEventTopicResult",
  } as any;
};

const deserializeAws_json1_1RejectSharedDirectoryResult = (
  output: any,
  context: __SerdeContext
): RejectSharedDirectoryResult => {
  return {
    __type: "RejectSharedDirectoryResult",
    SharedDirectoryId:
      output.SharedDirectoryId !== undefined && output.SharedDirectoryId !== null
        ? output.SharedDirectoryId
        : undefined,
  } as any;
};

const deserializeAws_json1_1RemoveIpRoutesResult = (output: any, context: __SerdeContext): RemoveIpRoutesResult => {
  return {
    __type: "RemoveIpRoutesResult",
  } as any;
};

const deserializeAws_json1_1RemoveTagsFromResourceResult = (
  output: any,
  context: __SerdeContext
): RemoveTagsFromResourceResult => {
  return {
    __type: "RemoveTagsFromResourceResult",
  } as any;
};

const deserializeAws_json1_1ResetUserPasswordResult = (
  output: any,
  context: __SerdeContext
): ResetUserPasswordResult => {
  return {
    __type: "ResetUserPasswordResult",
  } as any;
};

const deserializeAws_json1_1RestoreFromSnapshotResult = (
  output: any,
  context: __SerdeContext
): RestoreFromSnapshotResult => {
  return {
    __type: "RestoreFromSnapshotResult",
  } as any;
};

const deserializeAws_json1_1SchemaExtensionInfo = (output: any, context: __SerdeContext): SchemaExtensionInfo => {
  return {
    __type: "SchemaExtensionInfo",
    Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    EndDateTime:
      output.EndDateTime !== undefined && output.EndDateTime !== null
        ? new Date(Math.round(output.EndDateTime * 1000))
        : undefined,
    SchemaExtensionId:
      output.SchemaExtensionId !== undefined && output.SchemaExtensionId !== null
        ? output.SchemaExtensionId
        : undefined,
    SchemaExtensionStatus:
      output.SchemaExtensionStatus !== undefined && output.SchemaExtensionStatus !== null
        ? output.SchemaExtensionStatus
        : undefined,
    SchemaExtensionStatusReason:
      output.SchemaExtensionStatusReason !== undefined && output.SchemaExtensionStatusReason !== null
        ? output.SchemaExtensionStatusReason
        : undefined,
    StartDateTime:
      output.StartDateTime !== undefined && output.StartDateTime !== null
        ? new Date(Math.round(output.StartDateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1SchemaExtensionsInfo = (output: any, context: __SerdeContext): SchemaExtensionInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1SchemaExtensionInfo(entry, context));
};

const deserializeAws_json1_1Servers = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ServiceException = (output: any, context: __SerdeContext): ServiceException => {
  return {
    __type: "ServiceException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1SharedDirectories = (output: any, context: __SerdeContext): SharedDirectory[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1SharedDirectory(entry, context));
};

const deserializeAws_json1_1SharedDirectory = (output: any, context: __SerdeContext): SharedDirectory => {
  return {
    __type: "SharedDirectory",
    CreatedDateTime:
      output.CreatedDateTime !== undefined && output.CreatedDateTime !== null
        ? new Date(Math.round(output.CreatedDateTime * 1000))
        : undefined,
    LastUpdatedDateTime:
      output.LastUpdatedDateTime !== undefined && output.LastUpdatedDateTime !== null
        ? new Date(Math.round(output.LastUpdatedDateTime * 1000))
        : undefined,
    OwnerAccountId:
      output.OwnerAccountId !== undefined && output.OwnerAccountId !== null ? output.OwnerAccountId : undefined,
    OwnerDirectoryId:
      output.OwnerDirectoryId !== undefined && output.OwnerDirectoryId !== null ? output.OwnerDirectoryId : undefined,
    ShareMethod: output.ShareMethod !== undefined && output.ShareMethod !== null ? output.ShareMethod : undefined,
    ShareNotes: output.ShareNotes !== undefined && output.ShareNotes !== null ? output.ShareNotes : undefined,
    ShareStatus: output.ShareStatus !== undefined && output.ShareStatus !== null ? output.ShareStatus : undefined,
    SharedAccountId:
      output.SharedAccountId !== undefined && output.SharedAccountId !== null ? output.SharedAccountId : undefined,
    SharedDirectoryId:
      output.SharedDirectoryId !== undefined && output.SharedDirectoryId !== null
        ? output.SharedDirectoryId
        : undefined,
  } as any;
};

const deserializeAws_json1_1ShareDirectoryResult = (output: any, context: __SerdeContext): ShareDirectoryResult => {
  return {
    __type: "ShareDirectoryResult",
    SharedDirectoryId:
      output.SharedDirectoryId !== undefined && output.SharedDirectoryId !== null
        ? output.SharedDirectoryId
        : undefined,
  } as any;
};

const deserializeAws_json1_1ShareLimitExceededException = (
  output: any,
  context: __SerdeContext
): ShareLimitExceededException => {
  return {
    __type: "ShareLimitExceededException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return {
    __type: "Snapshot",
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    SnapshotId: output.SnapshotId !== undefined && output.SnapshotId !== null ? output.SnapshotId : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1SnapshotLimitExceededException = (
  output: any,
  context: __SerdeContext
): SnapshotLimitExceededException => {
  return {
    __type: "SnapshotLimitExceededException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1SnapshotLimits = (output: any, context: __SerdeContext): SnapshotLimits => {
  return {
    __type: "SnapshotLimits",
    ManualSnapshotsCurrentCount:
      output.ManualSnapshotsCurrentCount !== undefined && output.ManualSnapshotsCurrentCount !== null
        ? output.ManualSnapshotsCurrentCount
        : undefined,
    ManualSnapshotsLimit:
      output.ManualSnapshotsLimit !== undefined && output.ManualSnapshotsLimit !== null
        ? output.ManualSnapshotsLimit
        : undefined,
    ManualSnapshotsLimitReached:
      output.ManualSnapshotsLimitReached !== undefined && output.ManualSnapshotsLimitReached !== null
        ? output.ManualSnapshotsLimitReached
        : undefined,
  } as any;
};

const deserializeAws_json1_1Snapshots = (output: any, context: __SerdeContext): Snapshot[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Snapshot(entry, context));
};

const deserializeAws_json1_1StartSchemaExtensionResult = (
  output: any,
  context: __SerdeContext
): StartSchemaExtensionResult => {
  return {
    __type: "StartSchemaExtensionResult",
    SchemaExtensionId:
      output.SchemaExtensionId !== undefined && output.SchemaExtensionId !== null
        ? output.SchemaExtensionId
        : undefined,
  } as any;
};

const deserializeAws_json1_1SubnetIds = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    __type: "Tag",
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1TagLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagLimitExceededException => {
  return {
    __type: "TagLimitExceededException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Tag(entry, context));
};

const deserializeAws_json1_1Trust = (output: any, context: __SerdeContext): Trust => {
  return {
    __type: "Trust",
    CreatedDateTime:
      output.CreatedDateTime !== undefined && output.CreatedDateTime !== null
        ? new Date(Math.round(output.CreatedDateTime * 1000))
        : undefined,
    DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
    LastUpdatedDateTime:
      output.LastUpdatedDateTime !== undefined && output.LastUpdatedDateTime !== null
        ? new Date(Math.round(output.LastUpdatedDateTime * 1000))
        : undefined,
    RemoteDomainName:
      output.RemoteDomainName !== undefined && output.RemoteDomainName !== null ? output.RemoteDomainName : undefined,
    SelectiveAuth:
      output.SelectiveAuth !== undefined && output.SelectiveAuth !== null ? output.SelectiveAuth : undefined,
    StateLastUpdatedDateTime:
      output.StateLastUpdatedDateTime !== undefined && output.StateLastUpdatedDateTime !== null
        ? new Date(Math.round(output.StateLastUpdatedDateTime * 1000))
        : undefined,
    TrustDirection:
      output.TrustDirection !== undefined && output.TrustDirection !== null ? output.TrustDirection : undefined,
    TrustId: output.TrustId !== undefined && output.TrustId !== null ? output.TrustId : undefined,
    TrustState: output.TrustState !== undefined && output.TrustState !== null ? output.TrustState : undefined,
    TrustStateReason:
      output.TrustStateReason !== undefined && output.TrustStateReason !== null ? output.TrustStateReason : undefined,
    TrustType: output.TrustType !== undefined && output.TrustType !== null ? output.TrustType : undefined,
  } as any;
};

const deserializeAws_json1_1Trusts = (output: any, context: __SerdeContext): Trust[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1Trust(entry, context));
};

const deserializeAws_json1_1UnshareDirectoryResult = (output: any, context: __SerdeContext): UnshareDirectoryResult => {
  return {
    __type: "UnshareDirectoryResult",
    SharedDirectoryId:
      output.SharedDirectoryId !== undefined && output.SharedDirectoryId !== null
        ? output.SharedDirectoryId
        : undefined,
  } as any;
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  return {
    __type: "UnsupportedOperationException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateConditionalForwarderResult = (
  output: any,
  context: __SerdeContext
): UpdateConditionalForwarderResult => {
  return {
    __type: "UpdateConditionalForwarderResult",
  } as any;
};

const deserializeAws_json1_1UpdateNumberOfDomainControllersResult = (
  output: any,
  context: __SerdeContext
): UpdateNumberOfDomainControllersResult => {
  return {
    __type: "UpdateNumberOfDomainControllersResult",
  } as any;
};

const deserializeAws_json1_1UpdateRadiusResult = (output: any, context: __SerdeContext): UpdateRadiusResult => {
  return {
    __type: "UpdateRadiusResult",
  } as any;
};

const deserializeAws_json1_1UpdateTrustResult = (output: any, context: __SerdeContext): UpdateTrustResult => {
  return {
    __type: "UpdateTrustResult",
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
    TrustId: output.TrustId !== undefined && output.TrustId !== null ? output.TrustId : undefined,
  } as any;
};

const deserializeAws_json1_1UserDoesNotExistException = (
  output: any,
  context: __SerdeContext
): UserDoesNotExistException => {
  return {
    __type: "UserDoesNotExistException",
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RequestId: output.RequestId !== undefined && output.RequestId !== null ? output.RequestId : undefined,
  } as any;
};

const deserializeAws_json1_1VerifyTrustResult = (output: any, context: __SerdeContext): VerifyTrustResult => {
  return {
    __type: "VerifyTrustResult",
    TrustId: output.TrustId !== undefined && output.TrustId !== null ? output.TrustId : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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
