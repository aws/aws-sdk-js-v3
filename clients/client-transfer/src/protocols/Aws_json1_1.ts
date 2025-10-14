// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
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

import { CreateAccessCommandInput, CreateAccessCommandOutput } from "../commands/CreateAccessCommand";
import { CreateAgreementCommandInput, CreateAgreementCommandOutput } from "../commands/CreateAgreementCommand";
import { CreateConnectorCommandInput, CreateConnectorCommandOutput } from "../commands/CreateConnectorCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "../commands/CreateProfileCommand";
import { CreateServerCommandInput, CreateServerCommandOutput } from "../commands/CreateServerCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import { CreateWebAppCommandInput, CreateWebAppCommandOutput } from "../commands/CreateWebAppCommand";
import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "../commands/CreateWorkflowCommand";
import { DeleteAccessCommandInput, DeleteAccessCommandOutput } from "../commands/DeleteAccessCommand";
import { DeleteAgreementCommandInput, DeleteAgreementCommandOutput } from "../commands/DeleteAgreementCommand";
import { DeleteCertificateCommandInput, DeleteCertificateCommandOutput } from "../commands/DeleteCertificateCommand";
import { DeleteConnectorCommandInput, DeleteConnectorCommandOutput } from "../commands/DeleteConnectorCommand";
import { DeleteHostKeyCommandInput, DeleteHostKeyCommandOutput } from "../commands/DeleteHostKeyCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "../commands/DeleteProfileCommand";
import { DeleteServerCommandInput, DeleteServerCommandOutput } from "../commands/DeleteServerCommand";
import { DeleteSshPublicKeyCommandInput, DeleteSshPublicKeyCommandOutput } from "../commands/DeleteSshPublicKeyCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import { DeleteWebAppCommandInput, DeleteWebAppCommandOutput } from "../commands/DeleteWebAppCommand";
import {
  DeleteWebAppCustomizationCommandInput,
  DeleteWebAppCustomizationCommandOutput,
} from "../commands/DeleteWebAppCustomizationCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "../commands/DeleteWorkflowCommand";
import { DescribeAccessCommandInput, DescribeAccessCommandOutput } from "../commands/DescribeAccessCommand";
import { DescribeAgreementCommandInput, DescribeAgreementCommandOutput } from "../commands/DescribeAgreementCommand";
import {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput,
} from "../commands/DescribeCertificateCommand";
import { DescribeConnectorCommandInput, DescribeConnectorCommandOutput } from "../commands/DescribeConnectorCommand";
import { DescribeExecutionCommandInput, DescribeExecutionCommandOutput } from "../commands/DescribeExecutionCommand";
import { DescribeHostKeyCommandInput, DescribeHostKeyCommandOutput } from "../commands/DescribeHostKeyCommand";
import { DescribeProfileCommandInput, DescribeProfileCommandOutput } from "../commands/DescribeProfileCommand";
import {
  DescribeSecurityPolicyCommandInput,
  DescribeSecurityPolicyCommandOutput,
} from "../commands/DescribeSecurityPolicyCommand";
import { DescribeServerCommandInput, DescribeServerCommandOutput } from "../commands/DescribeServerCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "../commands/DescribeUserCommand";
import { DescribeWebAppCommandInput, DescribeWebAppCommandOutput } from "../commands/DescribeWebAppCommand";
import {
  DescribeWebAppCustomizationCommandInput,
  DescribeWebAppCustomizationCommandOutput,
} from "../commands/DescribeWebAppCustomizationCommand";
import { DescribeWorkflowCommandInput, DescribeWorkflowCommandOutput } from "../commands/DescribeWorkflowCommand";
import { ImportCertificateCommandInput, ImportCertificateCommandOutput } from "../commands/ImportCertificateCommand";
import { ImportHostKeyCommandInput, ImportHostKeyCommandOutput } from "../commands/ImportHostKeyCommand";
import { ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput } from "../commands/ImportSshPublicKeyCommand";
import { ListAccessesCommandInput, ListAccessesCommandOutput } from "../commands/ListAccessesCommand";
import { ListAgreementsCommandInput, ListAgreementsCommandOutput } from "../commands/ListAgreementsCommand";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "../commands/ListCertificatesCommand";
import { ListConnectorsCommandInput, ListConnectorsCommandOutput } from "../commands/ListConnectorsCommand";
import { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "../commands/ListExecutionsCommand";
import {
  ListFileTransferResultsCommandInput,
  ListFileTransferResultsCommandOutput,
} from "../commands/ListFileTransferResultsCommand";
import { ListHostKeysCommandInput, ListHostKeysCommandOutput } from "../commands/ListHostKeysCommand";
import { ListProfilesCommandInput, ListProfilesCommandOutput } from "../commands/ListProfilesCommand";
import {
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "../commands/ListSecurityPoliciesCommand";
import { ListServersCommandInput, ListServersCommandOutput } from "../commands/ListServersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { ListWebAppsCommandInput, ListWebAppsCommandOutput } from "../commands/ListWebAppsCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "../commands/ListWorkflowsCommand";
import {
  SendWorkflowStepStateCommandInput,
  SendWorkflowStepStateCommandOutput,
} from "../commands/SendWorkflowStepStateCommand";
import {
  StartDirectoryListingCommandInput,
  StartDirectoryListingCommandOutput,
} from "../commands/StartDirectoryListingCommand";
import { StartFileTransferCommandInput, StartFileTransferCommandOutput } from "../commands/StartFileTransferCommand";
import { StartRemoteDeleteCommandInput, StartRemoteDeleteCommandOutput } from "../commands/StartRemoteDeleteCommand";
import { StartRemoteMoveCommandInput, StartRemoteMoveCommandOutput } from "../commands/StartRemoteMoveCommand";
import { StartServerCommandInput, StartServerCommandOutput } from "../commands/StartServerCommand";
import { StopServerCommandInput, StopServerCommandOutput } from "../commands/StopServerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TestConnectionCommandInput, TestConnectionCommandOutput } from "../commands/TestConnectionCommand";
import {
  TestIdentityProviderCommandInput,
  TestIdentityProviderCommandOutput,
} from "../commands/TestIdentityProviderCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAccessCommandInput, UpdateAccessCommandOutput } from "../commands/UpdateAccessCommand";
import { UpdateAgreementCommandInput, UpdateAgreementCommandOutput } from "../commands/UpdateAgreementCommand";
import { UpdateCertificateCommandInput, UpdateCertificateCommandOutput } from "../commands/UpdateCertificateCommand";
import { UpdateConnectorCommandInput, UpdateConnectorCommandOutput } from "../commands/UpdateConnectorCommand";
import { UpdateHostKeyCommandInput, UpdateHostKeyCommandOutput } from "../commands/UpdateHostKeyCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "../commands/UpdateProfileCommand";
import { UpdateServerCommandInput, UpdateServerCommandOutput } from "../commands/UpdateServerCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import { UpdateWebAppCommandInput, UpdateWebAppCommandOutput } from "../commands/UpdateWebAppCommand";
import {
  UpdateWebAppCustomizationCommandInput,
  UpdateWebAppCustomizationCommandOutput,
} from "../commands/UpdateWebAppCustomizationCommand";
import {
  AccessDeniedException,
  As2ConnectorConfig,
  As2Transport,
  ConflictException,
  ConnectorEgressConfig,
  ConnectorVpcLatticeEgressConfig,
  CopyStepDetails,
  CreateAccessRequest,
  CreateAgreementRequest,
  CreateConnectorRequest,
  CreateProfileRequest,
  CreateServerRequest,
  CreateUserRequest,
  CreateWebAppRequest,
  CreateWorkflowRequest,
  CustomDirectoriesType,
  CustomStepDetails,
  DecryptStepDetails,
  DeleteAccessRequest,
  DeleteAgreementRequest,
  DeleteCertificateRequest,
  DeleteConnectorRequest,
  DeleteHostKeyRequest,
  DeleteProfileRequest,
  DeleteServerRequest,
  DeleteSshPublicKeyRequest,
  DeleteStepDetails,
  DeleteUserRequest,
  DeleteWebAppCustomizationRequest,
  DeleteWebAppRequest,
  DeleteWorkflowRequest,
  DescribeAccessRequest,
  DescribeAgreementRequest,
  DescribeCertificateRequest,
  DescribeCertificateResponse,
  DescribeConnectorRequest,
  DescribedCertificate,
  DescribedHostKey,
  DescribedUser,
  DescribedWebAppCustomization,
  DescribeExecutionRequest,
  DescribeHostKeyRequest,
  DescribeHostKeyResponse,
  DescribeProfileRequest,
  DescribeSecurityPolicyRequest,
  DescribeServerRequest,
  DescribeUserRequest,
  DescribeUserResponse,
  DescribeWebAppCustomizationRequest,
  DescribeWebAppCustomizationResponse,
  DescribeWebAppRequest,
  DescribeWorkflowRequest,
  EfsFileLocation,
  EndpointDetails,
  HomeDirectoryMapEntry,
  IdentityCenterConfig,
  IdentityProviderDetails,
  ImportCertificateRequest,
  ImportHostKeyRequest,
  ImportSshPublicKeyRequest,
  InputFileLocation,
  InternalServiceError,
  InvalidNextTokenException,
  InvalidRequestException,
  ListAccessesRequest,
  ListAgreementsRequest,
  ListCertificatesRequest,
  ListCertificatesResponse,
  ListConnectorsRequest,
  ListedCertificate,
  ListedHostKey,
  ListExecutionsRequest,
  ListFileTransferResultsRequest,
  ListHostKeysRequest,
  ListHostKeysResponse,
  ListProfilesRequest,
  ListSecurityPoliciesRequest,
  ListServersRequest,
  ListTagsForResourceRequest,
  ListUsersRequest,
  ListWebAppsRequest,
  ListWorkflowsRequest,
  PosixProfile,
  Protocol,
  ProtocolDetails,
  ResourceExistsException,
  ResourceNotFoundException,
  S3InputFileLocation,
  S3StorageOptions,
  S3Tag,
  SendWorkflowStepStateRequest,
  ServiceUnavailableException,
  SftpConnectorConfig,
  SshPublicKey,
  StartDirectoryListingRequest,
  StartFileTransferRequest,
  StartRemoteDeleteRequest,
  StartRemoteMoveRequest,
  StartServerRequest,
  StopServerRequest,
  Tag,
  TagResourceRequest,
  TagStepDetails,
  TestConnectionRequest,
  TestIdentityProviderRequest,
  ThrottlingException,
  UntagResourceRequest,
  UpdateAccessRequest,
  UpdateAgreementRequest,
  UpdateCertificateRequest,
  UpdateConnectorEgressConfig,
  UpdateConnectorRequest,
  UpdateConnectorVpcLatticeEgressConfig,
  UpdateHostKeyRequest,
  UpdateProfileRequest,
  UpdateServerRequest,
  UpdateUserRequest,
  UpdateWebAppCustomizationRequest,
  UpdateWebAppIdentityCenterConfig,
  UpdateWebAppIdentityProviderDetails,
  UpdateWebAppRequest,
  WebAppIdentityProviderDetails,
  WebAppUnits,
  WorkflowDetail,
  WorkflowDetails,
  WorkflowStep,
} from "../models/models_0";
import { TransferServiceException as __BaseException } from "../models/TransferServiceException";

/**
 * serializeAws_json1_1CreateAccessCommand
 */
export const se_CreateAccessCommand = async (
  input: CreateAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAgreementCommand
 */
export const se_CreateAgreementCommand = async (
  input: CreateAgreementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAgreement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateConnectorCommand
 */
export const se_CreateConnectorCommand = async (
  input: CreateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateConnector");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProfileCommand
 */
export const se_CreateProfileCommand = async (
  input: CreateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateServerCommand
 */
export const se_CreateServerCommand = async (
  input: CreateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWebAppCommand
 */
export const se_CreateWebAppCommand = async (
  input: CreateWebAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWebApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkflowCommand
 */
export const se_CreateWorkflowCommand = async (
  input: CreateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkflow");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAccessCommand
 */
export const se_DeleteAccessCommand = async (
  input: DeleteAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAgreementCommand
 */
export const se_DeleteAgreementCommand = async (
  input: DeleteAgreementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAgreement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCertificateCommand
 */
export const se_DeleteCertificateCommand = async (
  input: DeleteCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCertificate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConnectorCommand
 */
export const se_DeleteConnectorCommand = async (
  input: DeleteConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConnector");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteHostKeyCommand
 */
export const se_DeleteHostKeyCommand = async (
  input: DeleteHostKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteHostKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProfileCommand
 */
export const se_DeleteProfileCommand = async (
  input: DeleteProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteServerCommand
 */
export const se_DeleteServerCommand = async (
  input: DeleteServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSshPublicKeyCommand
 */
export const se_DeleteSshPublicKeyCommand = async (
  input: DeleteSshPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSshPublicKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWebAppCommand
 */
export const se_DeleteWebAppCommand = async (
  input: DeleteWebAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWebApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWebAppCustomizationCommand
 */
export const se_DeleteWebAppCustomizationCommand = async (
  input: DeleteWebAppCustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWebAppCustomization");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWorkflowCommand
 */
export const se_DeleteWorkflowCommand = async (
  input: DeleteWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWorkflow");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccessCommand
 */
export const se_DescribeAccessCommand = async (
  input: DescribeAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAgreementCommand
 */
export const se_DescribeAgreementCommand = async (
  input: DescribeAgreementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAgreement");
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
 * serializeAws_json1_1DescribeConnectorCommand
 */
export const se_DescribeConnectorCommand = async (
  input: DescribeConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConnector");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeExecutionCommand
 */
export const se_DescribeExecutionCommand = async (
  input: DescribeExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHostKeyCommand
 */
export const se_DescribeHostKeyCommand = async (
  input: DescribeHostKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHostKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProfileCommand
 */
export const se_DescribeProfileCommand = async (
  input: DescribeProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSecurityPolicyCommand
 */
export const se_DescribeSecurityPolicyCommand = async (
  input: DescribeSecurityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSecurityPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeServerCommand
 */
export const se_DescribeServerCommand = async (
  input: DescribeServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserCommand
 */
export const se_DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWebAppCommand
 */
export const se_DescribeWebAppCommand = async (
  input: DescribeWebAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWebApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWebAppCustomizationCommand
 */
export const se_DescribeWebAppCustomizationCommand = async (
  input: DescribeWebAppCustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWebAppCustomization");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkflowCommand
 */
export const se_DescribeWorkflowCommand = async (
  input: DescribeWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkflow");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportCertificateCommand
 */
export const se_ImportCertificateCommand = async (
  input: ImportCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportCertificate");
  let body: any;
  body = JSON.stringify(se_ImportCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportHostKeyCommand
 */
export const se_ImportHostKeyCommand = async (
  input: ImportHostKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportHostKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportSshPublicKeyCommand
 */
export const se_ImportSshPublicKeyCommand = async (
  input: ImportSshPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportSshPublicKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccessesCommand
 */
export const se_ListAccessesCommand = async (
  input: ListAccessesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAccesses");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAgreementsCommand
 */
export const se_ListAgreementsCommand = async (
  input: ListAgreementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAgreements");
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
 * serializeAws_json1_1ListConnectorsCommand
 */
export const se_ListConnectorsCommand = async (
  input: ListConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListConnectors");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListExecutionsCommand
 */
export const se_ListExecutionsCommand = async (
  input: ListExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListExecutions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFileTransferResultsCommand
 */
export const se_ListFileTransferResultsCommand = async (
  input: ListFileTransferResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFileTransferResults");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHostKeysCommand
 */
export const se_ListHostKeysCommand = async (
  input: ListHostKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHostKeys");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProfilesCommand
 */
export const se_ListProfilesCommand = async (
  input: ListProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProfiles");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSecurityPoliciesCommand
 */
export const se_ListSecurityPoliciesCommand = async (
  input: ListSecurityPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSecurityPolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServersCommand
 */
export const se_ListServersCommand = async (
  input: ListServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServers");
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
 * serializeAws_json1_1ListUsersCommand
 */
export const se_ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUsers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWebAppsCommand
 */
export const se_ListWebAppsCommand = async (
  input: ListWebAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWebApps");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWorkflowsCommand
 */
export const se_ListWorkflowsCommand = async (
  input: ListWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkflows");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendWorkflowStepStateCommand
 */
export const se_SendWorkflowStepStateCommand = async (
  input: SendWorkflowStepStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendWorkflowStepState");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDirectoryListingCommand
 */
export const se_StartDirectoryListingCommand = async (
  input: StartDirectoryListingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDirectoryListing");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartFileTransferCommand
 */
export const se_StartFileTransferCommand = async (
  input: StartFileTransferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartFileTransfer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartRemoteDeleteCommand
 */
export const se_StartRemoteDeleteCommand = async (
  input: StartRemoteDeleteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartRemoteDelete");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartRemoteMoveCommand
 */
export const se_StartRemoteMoveCommand = async (
  input: StartRemoteMoveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartRemoteMove");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartServerCommand
 */
export const se_StartServerCommand = async (
  input: StartServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopServerCommand
 */
export const se_StopServerCommand = async (
  input: StopServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TestConnectionCommand
 */
export const se_TestConnectionCommand = async (
  input: TestConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TestConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TestIdentityProviderCommand
 */
export const se_TestIdentityProviderCommand = async (
  input: TestIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TestIdentityProvider");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAccessCommand
 */
export const se_UpdateAccessCommand = async (
  input: UpdateAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAgreementCommand
 */
export const se_UpdateAgreementCommand = async (
  input: UpdateAgreementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAgreement");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCertificateCommand
 */
export const se_UpdateCertificateCommand = async (
  input: UpdateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCertificate");
  let body: any;
  body = JSON.stringify(se_UpdateCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateConnectorCommand
 */
export const se_UpdateConnectorCommand = async (
  input: UpdateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateConnector");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateHostKeyCommand
 */
export const se_UpdateHostKeyCommand = async (
  input: UpdateHostKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateHostKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProfileCommand
 */
export const se_UpdateProfileCommand = async (
  input: UpdateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateServerCommand
 */
export const se_UpdateServerCommand = async (
  input: UpdateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserCommand
 */
export const se_UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWebAppCommand
 */
export const se_UpdateWebAppCommand = async (
  input: UpdateWebAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWebApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWebAppCustomizationCommand
 */
export const se_UpdateWebAppCustomizationCommand = async (
  input: UpdateWebAppCustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWebAppCustomization");
  let body: any;
  body = JSON.stringify(se_UpdateWebAppCustomizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateAccessCommand
 */
export const de_CreateAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAgreementCommand
 */
export const de_CreateAgreementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgreementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateConnectorCommand
 */
export const de_CreateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateProfileCommand
 */
export const de_CreateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateServerCommand
 */
export const de_CreateServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateWebAppCommand
 */
export const de_CreateWebAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWebAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateWebAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateWorkflowCommand
 */
export const de_CreateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAccessCommand
 */
export const de_DeleteAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAgreementCommand
 */
export const de_DeleteAgreementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgreementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCertificateCommand
 */
export const de_DeleteCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteConnectorCommand
 */
export const de_DeleteConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteHostKeyCommand
 */
export const de_DeleteHostKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteHostKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteProfileCommand
 */
export const de_DeleteProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteServerCommand
 */
export const de_DeleteServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSshPublicKeyCommand
 */
export const de_DeleteSshPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSshPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSshPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteWebAppCommand
 */
export const de_DeleteWebAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteWebAppCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteWebAppCustomizationCommand
 */
export const de_DeleteWebAppCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebAppCustomizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteWebAppCustomizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteWorkflowCommand
 */
export const de_DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAccessCommand
 */
export const de_DescribeAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAgreementCommand
 */
export const de_DescribeAgreementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgreementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCertificateCommand
 */
export const de_DescribeCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCertificateResponse(data, context);
  const response: DescribeCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeConnectorCommand
 */
export const de_DescribeConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeExecutionCommand
 */
export const de_DescribeExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeHostKeyCommand
 */
export const de_DescribeHostKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHostKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHostKeyResponse(data, context);
  const response: DescribeHostKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeProfileCommand
 */
export const de_DescribeProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSecurityPolicyCommand
 */
export const de_DescribeSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeServerCommand
 */
export const de_DescribeServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeUserCommand
 */
export const de_DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserResponse(data, context);
  const response: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWebAppCommand
 */
export const de_DescribeWebAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWebAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeWebAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWebAppCustomizationCommand
 */
export const de_DescribeWebAppCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWebAppCustomizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWebAppCustomizationResponse(data, context);
  const response: DescribeWebAppCustomizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkflowCommand
 */
export const de_DescribeWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportCertificateCommand
 */
export const de_ImportCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ImportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportHostKeyCommand
 */
export const de_ImportHostKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportHostKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ImportHostKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportSshPublicKeyCommand
 */
export const de_ImportSshPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSshPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ImportSshPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAccessesCommand
 */
export const de_ListAccessesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAccessesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAgreementsCommand
 */
export const de_ListAgreementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgreementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAgreementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCertificatesCommand
 */
export const de_ListCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCertificatesResponse(data, context);
  const response: ListCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListConnectorsCommand
 */
export const de_ListConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListConnectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListExecutionsCommand
 */
export const de_ListExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFileTransferResultsCommand
 */
export const de_ListFileTransferResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFileTransferResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListFileTransferResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListHostKeysCommand
 */
export const de_ListHostKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHostKeysResponse(data, context);
  const response: ListHostKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListProfilesCommand
 */
export const de_ListProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSecurityPoliciesCommand
 */
export const de_ListSecurityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSecurityPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListServersCommand
 */
export const de_ListServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListUsersCommand
 */
export const de_ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListWebAppsCommand
 */
export const de_ListWebAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebAppsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListWebAppsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListWorkflowsCommand
 */
export const de_ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListWorkflowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SendWorkflowStepStateCommand
 */
export const de_SendWorkflowStepStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendWorkflowStepStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SendWorkflowStepStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartDirectoryListingCommand
 */
export const de_StartDirectoryListingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDirectoryListingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartDirectoryListingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartFileTransferCommand
 */
export const de_StartFileTransferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFileTransferCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartFileTransferCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartRemoteDeleteCommand
 */
export const de_StartRemoteDeleteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRemoteDeleteCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartRemoteDeleteCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartRemoteMoveCommand
 */
export const de_StartRemoteMoveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRemoteMoveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartRemoteMoveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartServerCommand
 */
export const de_StartServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopServerCommand
 */
export const de_StopServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1TestConnectionCommand
 */
export const de_TestConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TestConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TestIdentityProviderCommand
 */
export const de_TestIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestIdentityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TestIdentityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAccessCommand
 */
export const de_UpdateAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAgreementCommand
 */
export const de_UpdateAgreementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgreementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateCertificateCommand
 */
export const de_UpdateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateConnectorCommand
 */
export const de_UpdateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateHostKeyCommand
 */
export const de_UpdateHostKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHostKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateHostKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateProfileCommand
 */
export const de_UpdateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateServerCommand
 */
export const de_UpdateServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateUserCommand
 */
export const de_UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateWebAppCommand
 */
export const de_UpdateWebAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateWebAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateWebAppCustomizationCommand
 */
export const de_UpdateWebAppCustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWebAppCustomizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateWebAppCustomizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      throw await de_ResourceExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.transfer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transfer#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServiceErrorRes
 */
const de_InternalServiceErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServiceError({
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
 * deserializeAws_json1_1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceExistsExceptionRes
 */
const de_ResourceExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AddressAllocationIds omitted.

// se_As2ConnectorConfig omitted.

// se_As2Transports omitted.

// se_CertificateIds omitted.

// se_ConnectorEgressConfig omitted.

// se_ConnectorVpcLatticeEgressConfig omitted.

// se_CopyStepDetails omitted.

// se_CreateAccessRequest omitted.

// se_CreateAgreementRequest omitted.

// se_CreateConnectorRequest omitted.

// se_CreateProfileRequest omitted.

// se_CreateServerRequest omitted.

// se_CreateUserRequest omitted.

// se_CreateWebAppRequest omitted.

// se_CreateWorkflowRequest omitted.

// se_CustomDirectoriesType omitted.

// se_CustomStepDetails omitted.

// se_DecryptStepDetails omitted.

// se_DeleteAccessRequest omitted.

// se_DeleteAgreementRequest omitted.

// se_DeleteCertificateRequest omitted.

// se_DeleteConnectorRequest omitted.

// se_DeleteHostKeyRequest omitted.

// se_DeleteProfileRequest omitted.

// se_DeleteServerRequest omitted.

// se_DeleteSshPublicKeyRequest omitted.

// se_DeleteStepDetails omitted.

// se_DeleteUserRequest omitted.

// se_DeleteWebAppCustomizationRequest omitted.

// se_DeleteWebAppRequest omitted.

// se_DeleteWorkflowRequest omitted.

// se_DescribeAccessRequest omitted.

// se_DescribeAgreementRequest omitted.

// se_DescribeCertificateRequest omitted.

// se_DescribeConnectorRequest omitted.

// se_DescribeExecutionRequest omitted.

// se_DescribeHostKeyRequest omitted.

// se_DescribeProfileRequest omitted.

// se_DescribeSecurityPolicyRequest omitted.

// se_DescribeServerRequest omitted.

// se_DescribeUserRequest omitted.

// se_DescribeWebAppCustomizationRequest omitted.

// se_DescribeWebAppRequest omitted.

// se_DescribeWorkflowRequest omitted.

// se_EfsFileLocation omitted.

// se_EndpointDetails omitted.

// se_FilePaths omitted.

// se_HomeDirectoryMapEntry omitted.

// se_HomeDirectoryMappings omitted.

// se_IdentityCenterConfig omitted.

// se_IdentityProviderDetails omitted.

/**
 * serializeAws_json1_1ImportCertificateRequest
 */
const se_ImportCertificateRequest = (input: ImportCertificateRequest, context: __SerdeContext): any => {
  return take(input, {
    ActiveDate: (_) => _.getTime() / 1_000,
    Certificate: [],
    CertificateChain: [],
    Description: [],
    InactiveDate: (_) => _.getTime() / 1_000,
    PrivateKey: [],
    Tags: _json,
    Usage: [],
  });
};

// se_ImportHostKeyRequest omitted.

// se_ImportSshPublicKeyRequest omitted.

// se_InputFileLocation omitted.

// se_ListAccessesRequest omitted.

// se_ListAgreementsRequest omitted.

// se_ListCertificatesRequest omitted.

// se_ListConnectorsRequest omitted.

// se_ListExecutionsRequest omitted.

// se_ListFileTransferResultsRequest omitted.

// se_ListHostKeysRequest omitted.

// se_ListProfilesRequest omitted.

// se_ListSecurityPoliciesRequest omitted.

// se_ListServersRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListUsersRequest omitted.

// se_ListWebAppsRequest omitted.

// se_ListWorkflowsRequest omitted.

// se_OnPartialUploadWorkflowDetails omitted.

// se_OnUploadWorkflowDetails omitted.

// se_PosixProfile omitted.

// se_ProtocolDetails omitted.

// se_Protocols omitted.

// se_S3InputFileLocation omitted.

// se_S3StorageOptions omitted.

// se_S3Tag omitted.

// se_S3Tags omitted.

// se_SecondaryGids omitted.

// se_SecurityGroupIds omitted.

// se_SendWorkflowStepStateRequest omitted.

// se_SftpConnectorConfig omitted.

// se_SftpConnectorTrustedHostKeyList omitted.

// se_StartDirectoryListingRequest omitted.

// se_StartFileTransferRequest omitted.

// se_StartRemoteDeleteRequest omitted.

// se_StartRemoteMoveRequest omitted.

// se_StartServerRequest omitted.

// se_StopServerRequest omitted.

// se_StructuredLogDestinations omitted.

// se_SubnetIds omitted.

// se_Tag omitted.

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_TagStepDetails omitted.

// se_TestConnectionRequest omitted.

// se_TestIdentityProviderRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateAccessRequest omitted.

// se_UpdateAgreementRequest omitted.

/**
 * serializeAws_json1_1UpdateCertificateRequest
 */
const se_UpdateCertificateRequest = (input: UpdateCertificateRequest, context: __SerdeContext): any => {
  return take(input, {
    ActiveDate: (_) => _.getTime() / 1_000,
    CertificateId: [],
    Description: [],
    InactiveDate: (_) => _.getTime() / 1_000,
  });
};

// se_UpdateConnectorEgressConfig omitted.

// se_UpdateConnectorRequest omitted.

// se_UpdateConnectorVpcLatticeEgressConfig omitted.

// se_UpdateHostKeyRequest omitted.

// se_UpdateProfileRequest omitted.

// se_UpdateServerRequest omitted.

// se_UpdateUserRequest omitted.

/**
 * serializeAws_json1_1UpdateWebAppCustomizationRequest
 */
const se_UpdateWebAppCustomizationRequest = (input: UpdateWebAppCustomizationRequest, context: __SerdeContext): any => {
  return take(input, {
    FaviconFile: context.base64Encoder,
    LogoFile: context.base64Encoder,
    Title: [],
    WebAppId: [],
  });
};

// se_UpdateWebAppIdentityCenterConfig omitted.

// se_UpdateWebAppIdentityProviderDetails omitted.

// se_UpdateWebAppRequest omitted.

// se_WebAppIdentityProviderDetails omitted.

// se_WebAppUnits omitted.

// se_WorkflowDetail omitted.

// se_WorkflowDetails omitted.

// se_WorkflowStep omitted.

// se_WorkflowSteps omitted.

// de_AccessDeniedException omitted.

// de_AddressAllocationIds omitted.

// de_As2ConnectorConfig omitted.

// de_As2Transports omitted.

// de_CertificateIds omitted.

// de_ConflictException omitted.

// de_ConnectorFileTransferResult omitted.

// de_ConnectorFileTransferResults omitted.

// de_CopyStepDetails omitted.

// de_CreateAccessResponse omitted.

// de_CreateAgreementResponse omitted.

// de_CreateConnectorResponse omitted.

// de_CreateProfileResponse omitted.

// de_CreateServerResponse omitted.

// de_CreateUserResponse omitted.

// de_CreateWebAppResponse omitted.

// de_CreateWorkflowResponse omitted.

// de_CustomDirectoriesType omitted.

// de_CustomStepDetails omitted.

// de_DecryptStepDetails omitted.

// de_DeleteStepDetails omitted.

// de_DescribeAccessResponse omitted.

// de_DescribeAgreementResponse omitted.

/**
 * deserializeAws_json1_1DescribeCertificateResponse
 */
const de_DescribeCertificateResponse = (output: any, context: __SerdeContext): DescribeCertificateResponse => {
  return take(output, {
    Certificate: (_: any) => de_DescribedCertificate(_, context),
  }) as any;
};

// de_DescribeConnectorResponse omitted.

// de_DescribedAccess omitted.

// de_DescribedAgreement omitted.

/**
 * deserializeAws_json1_1DescribedCertificate
 */
const de_DescribedCertificate = (output: any, context: __SerdeContext): DescribedCertificate => {
  return take(output, {
    ActiveDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Arn: __expectString,
    Certificate: __expectString,
    CertificateChain: __expectString,
    CertificateId: __expectString,
    Description: __expectString,
    InactiveDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotAfterDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotBeforeDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Serial: __expectString,
    Status: __expectString,
    Tags: _json,
    Type: __expectString,
    Usage: __expectString,
  }) as any;
};

// de_DescribedConnector omitted.

// de_DescribedConnectorEgressConfig omitted.

// de_DescribedConnectorVpcLatticeEgressConfig omitted.

// de_DescribedExecution omitted.

/**
 * deserializeAws_json1_1DescribedHostKey
 */
const de_DescribedHostKey = (output: any, context: __SerdeContext): DescribedHostKey => {
  return take(output, {
    Arn: __expectString,
    DateImported: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    HostKeyFingerprint: __expectString,
    HostKeyId: __expectString,
    Tags: _json,
    Type: __expectString,
  }) as any;
};

// de_DescribedIdentityCenterConfig omitted.

// de_DescribedProfile omitted.

// de_DescribedSecurityPolicy omitted.

// de_DescribedServer omitted.

/**
 * deserializeAws_json1_1DescribedUser
 */
const de_DescribedUser = (output: any, context: __SerdeContext): DescribedUser => {
  return take(output, {
    Arn: __expectString,
    HomeDirectory: __expectString,
    HomeDirectoryMappings: _json,
    HomeDirectoryType: __expectString,
    Policy: __expectString,
    PosixProfile: _json,
    Role: __expectString,
    SshPublicKeys: (_: any) => de_SshPublicKeys(_, context),
    Tags: _json,
    UserName: __expectString,
  }) as any;
};

// de_DescribedWebApp omitted.

/**
 * deserializeAws_json1_1DescribedWebAppCustomization
 */
const de_DescribedWebAppCustomization = (output: any, context: __SerdeContext): DescribedWebAppCustomization => {
  return take(output, {
    Arn: __expectString,
    FaviconFile: context.base64Decoder,
    LogoFile: context.base64Decoder,
    Title: __expectString,
    WebAppId: __expectString,
  }) as any;
};

// de_DescribedWebAppIdentityProviderDetails omitted.

// de_DescribedWorkflow omitted.

// de_DescribeExecutionResponse omitted.

/**
 * deserializeAws_json1_1DescribeHostKeyResponse
 */
const de_DescribeHostKeyResponse = (output: any, context: __SerdeContext): DescribeHostKeyResponse => {
  return take(output, {
    HostKey: (_: any) => de_DescribedHostKey(_, context),
  }) as any;
};

// de_DescribeProfileResponse omitted.

// de_DescribeSecurityPolicyResponse omitted.

// de_DescribeServerResponse omitted.

/**
 * deserializeAws_json1_1DescribeUserResponse
 */
const de_DescribeUserResponse = (output: any, context: __SerdeContext): DescribeUserResponse => {
  return take(output, {
    ServerId: __expectString,
    User: (_: any) => de_DescribedUser(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeWebAppCustomizationResponse
 */
const de_DescribeWebAppCustomizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeWebAppCustomizationResponse => {
  return take(output, {
    WebAppCustomization: (_: any) => de_DescribedWebAppCustomization(_, context),
  }) as any;
};

// de_DescribeWebAppResponse omitted.

// de_DescribeWorkflowResponse omitted.

// de_EfsFileLocation omitted.

// de_EndpointDetails omitted.

// de_ExecutionError omitted.

// de_ExecutionResults omitted.

// de_ExecutionStepResult omitted.

// de_ExecutionStepResults omitted.

// de_FileLocation omitted.

// de_HomeDirectoryMapEntry omitted.

// de_HomeDirectoryMappings omitted.

// de_IdentityProviderDetails omitted.

// de_ImportCertificateResponse omitted.

// de_ImportHostKeyResponse omitted.

// de_ImportSshPublicKeyResponse omitted.

// de_InputFileLocation omitted.

// de_InternalServiceError omitted.

// de_InvalidNextTokenException omitted.

// de_InvalidRequestException omitted.

// de_ListAccessesResponse omitted.

// de_ListAgreementsResponse omitted.

/**
 * deserializeAws_json1_1ListCertificatesResponse
 */
const de_ListCertificatesResponse = (output: any, context: __SerdeContext): ListCertificatesResponse => {
  return take(output, {
    Certificates: (_: any) => de_ListedCertificates(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListConnectorsResponse omitted.

// de_ListedAccess omitted.

// de_ListedAccesses omitted.

// de_ListedAgreement omitted.

// de_ListedAgreements omitted.

/**
 * deserializeAws_json1_1ListedCertificate
 */
const de_ListedCertificate = (output: any, context: __SerdeContext): ListedCertificate => {
  return take(output, {
    ActiveDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Arn: __expectString,
    CertificateId: __expectString,
    Description: __expectString,
    InactiveDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Type: __expectString,
    Usage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListedCertificates
 */
const de_ListedCertificates = (output: any, context: __SerdeContext): ListedCertificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListedCertificate(entry, context);
    });
  return retVal;
};

// de_ListedConnector omitted.

// de_ListedConnectors omitted.

// de_ListedExecution omitted.

// de_ListedExecutions omitted.

/**
 * deserializeAws_json1_1ListedHostKey
 */
const de_ListedHostKey = (output: any, context: __SerdeContext): ListedHostKey => {
  return take(output, {
    Arn: __expectString,
    DateImported: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Fingerprint: __expectString,
    HostKeyId: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListedHostKeys
 */
const de_ListedHostKeys = (output: any, context: __SerdeContext): ListedHostKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListedHostKey(entry, context);
    });
  return retVal;
};

// de_ListedProfile omitted.

// de_ListedProfiles omitted.

// de_ListedServer omitted.

// de_ListedServers omitted.

// de_ListedUser omitted.

// de_ListedUsers omitted.

// de_ListedWebApp omitted.

// de_ListedWebApps omitted.

// de_ListedWorkflow omitted.

// de_ListedWorkflows omitted.

// de_ListExecutionsResponse omitted.

// de_ListFileTransferResultsResponse omitted.

/**
 * deserializeAws_json1_1ListHostKeysResponse
 */
const de_ListHostKeysResponse = (output: any, context: __SerdeContext): ListHostKeysResponse => {
  return take(output, {
    HostKeys: (_: any) => de_ListedHostKeys(_, context),
    NextToken: __expectString,
    ServerId: __expectString,
  }) as any;
};

// de_ListProfilesResponse omitted.

// de_ListSecurityPoliciesResponse omitted.

// de_ListServersResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListUsersResponse omitted.

// de_ListWebAppsResponse omitted.

// de_ListWorkflowsResponse omitted.

// de_LoggingConfiguration omitted.

// de_OnPartialUploadWorkflowDetails omitted.

// de_OnUploadWorkflowDetails omitted.

// de_PosixProfile omitted.

// de_ProtocolDetails omitted.

// de_Protocols omitted.

// de_ResourceExistsException omitted.

// de_ResourceNotFoundException omitted.

// de_S3FileLocation omitted.

// de_S3InputFileLocation omitted.

// de_S3StorageOptions omitted.

// de_S3Tag omitted.

// de_S3Tags omitted.

// de_SecondaryGids omitted.

// de_SecurityGroupIds omitted.

// de_SecurityPolicyNames omitted.

// de_SecurityPolicyOptions omitted.

// de_SecurityPolicyProtocols omitted.

// de_SendWorkflowStepStateResponse omitted.

// de_ServiceManagedEgressIpAddresses omitted.

// de_ServiceMetadata omitted.

// de_ServiceUnavailableException omitted.

// de_SftpConnectorConfig omitted.

// de_SftpConnectorConnectionDetails omitted.

// de_SftpConnectorTrustedHostKeyList omitted.

/**
 * deserializeAws_json1_1SshPublicKey
 */
const de_SshPublicKey = (output: any, context: __SerdeContext): SshPublicKey => {
  return take(output, {
    DateImported: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SshPublicKeyBody: __expectString,
    SshPublicKeyId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SshPublicKeys
 */
const de_SshPublicKeys = (output: any, context: __SerdeContext): SshPublicKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SshPublicKey(entry, context);
    });
  return retVal;
};

// de_StartDirectoryListingResponse omitted.

// de_StartFileTransferResponse omitted.

// de_StartRemoteDeleteResponse omitted.

// de_StartRemoteMoveResponse omitted.

// de_StructuredLogDestinations omitted.

// de_SubnetIds omitted.

// de_Tag omitted.

// de_Tags omitted.

// de_TagStepDetails omitted.

// de_TestConnectionResponse omitted.

// de_TestIdentityProviderResponse omitted.

// de_ThrottlingException omitted.

// de_UpdateAccessResponse omitted.

// de_UpdateAgreementResponse omitted.

// de_UpdateCertificateResponse omitted.

// de_UpdateConnectorResponse omitted.

// de_UpdateHostKeyResponse omitted.

// de_UpdateProfileResponse omitted.

// de_UpdateServerResponse omitted.

// de_UpdateUserResponse omitted.

// de_UpdateWebAppCustomizationResponse omitted.

// de_UpdateWebAppResponse omitted.

// de_UserDetails omitted.

// de_WebAppUnits omitted.

// de_WorkflowDetail omitted.

// de_WorkflowDetails omitted.

// de_WorkflowStep omitted.

// de_WorkflowSteps omitted.

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
    "x-amz-target": `TransferService.${operation}`,
  };
}
