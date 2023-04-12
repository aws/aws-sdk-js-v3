// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
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

import { CreateAccessCommandInput, CreateAccessCommandOutput } from "../commands/CreateAccessCommand";
import { CreateAgreementCommandInput, CreateAgreementCommandOutput } from "../commands/CreateAgreementCommand";
import { CreateConnectorCommandInput, CreateConnectorCommandOutput } from "../commands/CreateConnectorCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "../commands/CreateProfileCommand";
import { CreateServerCommandInput, CreateServerCommandOutput } from "../commands/CreateServerCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
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
import { DescribeWorkflowCommandInput, DescribeWorkflowCommandOutput } from "../commands/DescribeWorkflowCommand";
import { ImportCertificateCommandInput, ImportCertificateCommandOutput } from "../commands/ImportCertificateCommand";
import { ImportHostKeyCommandInput, ImportHostKeyCommandOutput } from "../commands/ImportHostKeyCommand";
import { ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput } from "../commands/ImportSshPublicKeyCommand";
import { ListAccessesCommandInput, ListAccessesCommandOutput } from "../commands/ListAccessesCommand";
import { ListAgreementsCommandInput, ListAgreementsCommandOutput } from "../commands/ListAgreementsCommand";
import { ListCertificatesCommandInput, ListCertificatesCommandOutput } from "../commands/ListCertificatesCommand";
import { ListConnectorsCommandInput, ListConnectorsCommandOutput } from "../commands/ListConnectorsCommand";
import { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "../commands/ListExecutionsCommand";
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
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "../commands/ListWorkflowsCommand";
import {
  SendWorkflowStepStateCommandInput,
  SendWorkflowStepStateCommandOutput,
} from "../commands/SendWorkflowStepStateCommand";
import { StartFileTransferCommandInput, StartFileTransferCommandOutput } from "../commands/StartFileTransferCommand";
import { StartServerCommandInput, StartServerCommandOutput } from "../commands/StartServerCommand";
import { StopServerCommandInput, StopServerCommandOutput } from "../commands/StopServerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
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
import {
  AccessDeniedException,
  As2ConnectorConfig,
  As2Transport,
  ConflictException,
  CopyStepDetails,
  CreateAccessRequest,
  CreateAccessResponse,
  CreateAgreementRequest,
  CreateAgreementResponse,
  CreateConnectorRequest,
  CreateConnectorResponse,
  CreateProfileRequest,
  CreateProfileResponse,
  CreateServerRequest,
  CreateServerResponse,
  CreateUserRequest,
  CreateUserResponse,
  CreateWorkflowRequest,
  CreateWorkflowResponse,
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
  DeleteWorkflowRequest,
  DescribeAccessRequest,
  DescribeAccessResponse,
  DescribeAgreementRequest,
  DescribeAgreementResponse,
  DescribeCertificateRequest,
  DescribeCertificateResponse,
  DescribeConnectorRequest,
  DescribeConnectorResponse,
  DescribedAccess,
  DescribedAgreement,
  DescribedCertificate,
  DescribedConnector,
  DescribedExecution,
  DescribedHostKey,
  DescribedProfile,
  DescribedSecurityPolicy,
  DescribedServer,
  DescribedUser,
  DescribedWorkflow,
  DescribeExecutionRequest,
  DescribeExecutionResponse,
  DescribeHostKeyRequest,
  DescribeHostKeyResponse,
  DescribeProfileRequest,
  DescribeProfileResponse,
  DescribeSecurityPolicyRequest,
  DescribeSecurityPolicyResponse,
  DescribeServerRequest,
  DescribeServerResponse,
  DescribeUserRequest,
  DescribeUserResponse,
  DescribeWorkflowRequest,
  DescribeWorkflowResponse,
  EfsFileLocation,
  EndpointDetails,
  ExecutionError,
  ExecutionResults,
  ExecutionStepResult,
  FileLocation,
  HomeDirectoryMapEntry,
  IdentityProviderDetails,
  ImportCertificateRequest,
  ImportCertificateResponse,
  ImportHostKeyRequest,
  ImportHostKeyResponse,
  ImportSshPublicKeyRequest,
  ImportSshPublicKeyResponse,
  InputFileLocation,
  InternalServiceError,
  InvalidNextTokenException,
  InvalidRequestException,
  ListAccessesRequest,
  ListAccessesResponse,
  ListAgreementsRequest,
  ListAgreementsResponse,
  ListCertificatesRequest,
  ListCertificatesResponse,
  ListConnectorsRequest,
  ListConnectorsResponse,
  ListedAccess,
  ListedAgreement,
  ListedCertificate,
  ListedConnector,
  ListedExecution,
  ListedHostKey,
  ListedProfile,
  ListedServer,
  ListedUser,
  ListedWorkflow,
  ListExecutionsRequest,
  ListExecutionsResponse,
  ListHostKeysRequest,
  ListHostKeysResponse,
  ListProfilesRequest,
  ListProfilesResponse,
  ListSecurityPoliciesRequest,
  ListSecurityPoliciesResponse,
  ListServersRequest,
  ListServersResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListUsersRequest,
  ListUsersResponse,
  ListWorkflowsRequest,
  ListWorkflowsResponse,
  LoggingConfiguration,
  PosixProfile,
  Protocol,
  ProtocolDetails,
  ResourceExistsException,
  ResourceNotFoundException,
  S3FileLocation,
  S3InputFileLocation,
  S3Tag,
  SendWorkflowStepStateRequest,
  SendWorkflowStepStateResponse,
  ServiceMetadata,
  ServiceUnavailableException,
  SshPublicKey,
  StartFileTransferRequest,
  StartFileTransferResponse,
  StartServerRequest,
  StopServerRequest,
  Tag,
  TagResourceRequest,
  TagStepDetails,
  TestIdentityProviderRequest,
  TestIdentityProviderResponse,
  ThrottlingException,
  UntagResourceRequest,
  UpdateAccessRequest,
  UpdateAccessResponse,
  UpdateAgreementRequest,
  UpdateAgreementResponse,
  UpdateCertificateRequest,
  UpdateCertificateResponse,
  UpdateConnectorRequest,
  UpdateConnectorResponse,
  UpdateHostKeyRequest,
  UpdateHostKeyResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  UpdateServerRequest,
  UpdateServerResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  UserDetails,
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
  body = JSON.stringify(se_CreateAccessRequest(input, context));
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
  body = JSON.stringify(se_CreateAgreementRequest(input, context));
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
  body = JSON.stringify(se_CreateConnectorRequest(input, context));
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
  body = JSON.stringify(se_CreateProfileRequest(input, context));
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
  body = JSON.stringify(se_CreateServerRequest(input, context));
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
  body = JSON.stringify(se_CreateUserRequest(input, context));
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
  body = JSON.stringify(se_CreateWorkflowRequest(input, context));
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
  body = JSON.stringify(se_DeleteAccessRequest(input, context));
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
  body = JSON.stringify(se_DeleteAgreementRequest(input, context));
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
  body = JSON.stringify(se_DeleteCertificateRequest(input, context));
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
  body = JSON.stringify(se_DeleteConnectorRequest(input, context));
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
  body = JSON.stringify(se_DeleteHostKeyRequest(input, context));
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
  body = JSON.stringify(se_DeleteProfileRequest(input, context));
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
  body = JSON.stringify(se_DeleteServerRequest(input, context));
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
  body = JSON.stringify(se_DeleteSshPublicKeyRequest(input, context));
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
  body = JSON.stringify(se_DeleteUserRequest(input, context));
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
  body = JSON.stringify(se_DeleteWorkflowRequest(input, context));
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
  body = JSON.stringify(se_DescribeAccessRequest(input, context));
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
  body = JSON.stringify(se_DescribeAgreementRequest(input, context));
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
  body = JSON.stringify(se_DescribeCertificateRequest(input, context));
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
  body = JSON.stringify(se_DescribeConnectorRequest(input, context));
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
  body = JSON.stringify(se_DescribeExecutionRequest(input, context));
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
  body = JSON.stringify(se_DescribeHostKeyRequest(input, context));
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
  body = JSON.stringify(se_DescribeProfileRequest(input, context));
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
  body = JSON.stringify(se_DescribeSecurityPolicyRequest(input, context));
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
  body = JSON.stringify(se_DescribeServerRequest(input, context));
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
  body = JSON.stringify(se_DescribeUserRequest(input, context));
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
  body = JSON.stringify(se_DescribeWorkflowRequest(input, context));
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
  body = JSON.stringify(se_ImportHostKeyRequest(input, context));
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
  body = JSON.stringify(se_ImportSshPublicKeyRequest(input, context));
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
  body = JSON.stringify(se_ListAccessesRequest(input, context));
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
  body = JSON.stringify(se_ListAgreementsRequest(input, context));
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
  body = JSON.stringify(se_ListCertificatesRequest(input, context));
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
  body = JSON.stringify(se_ListConnectorsRequest(input, context));
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
  body = JSON.stringify(se_ListExecutionsRequest(input, context));
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
  body = JSON.stringify(se_ListHostKeysRequest(input, context));
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
  body = JSON.stringify(se_ListProfilesRequest(input, context));
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
  body = JSON.stringify(se_ListSecurityPoliciesRequest(input, context));
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
  body = JSON.stringify(se_ListServersRequest(input, context));
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
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
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
  body = JSON.stringify(se_ListUsersRequest(input, context));
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
  body = JSON.stringify(se_ListWorkflowsRequest(input, context));
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
  body = JSON.stringify(se_SendWorkflowStepStateRequest(input, context));
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
  body = JSON.stringify(se_StartFileTransferRequest(input, context));
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
  body = JSON.stringify(se_StartServerRequest(input, context));
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
  body = JSON.stringify(se_StopServerRequest(input, context));
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
  body = JSON.stringify(se_TagResourceRequest(input, context));
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
  body = JSON.stringify(se_TestIdentityProviderRequest(input, context));
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
  body = JSON.stringify(se_UntagResourceRequest(input, context));
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
  body = JSON.stringify(se_UpdateAccessRequest(input, context));
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
  body = JSON.stringify(se_UpdateAgreementRequest(input, context));
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
  body = JSON.stringify(se_UpdateConnectorRequest(input, context));
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
  body = JSON.stringify(se_UpdateHostKeyRequest(input, context));
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
  body = JSON.stringify(se_UpdateProfileRequest(input, context));
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
  body = JSON.stringify(se_UpdateServerRequest(input, context));
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
  body = JSON.stringify(se_UpdateUserRequest(input, context));
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
    return de_CreateAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAccessResponse(data, context);
  const response: CreateAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAccessCommandError
 */
const de_CreateAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessCommandOutput> => {
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
 * deserializeAws_json1_1CreateAgreementCommand
 */
export const de_CreateAgreementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgreementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAgreementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAgreementResponse(data, context);
  const response: CreateAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAgreementCommandError
 */
const de_CreateAgreementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgreementCommandOutput> => {
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
 * deserializeAws_json1_1CreateConnectorCommand
 */
export const de_CreateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConnectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateConnectorResponse(data, context);
  const response: CreateConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateConnectorCommandError
 */
const de_CreateConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorCommandOutput> => {
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
 * deserializeAws_json1_1CreateProfileCommand
 */
export const de_CreateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProfileResponse(data, context);
  const response: CreateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateProfileCommandError
 */
const de_CreateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateServerCommand
 */
export const de_CreateServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateServerResponse(data, context);
  const response: CreateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateServerCommandError
 */
const de_CreateServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.transfer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserResponse(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUserCommandError
 */
const de_CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
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
 * deserializeAws_json1_1CreateWorkflowCommand
 */
export const de_CreateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkflowResponse(data, context);
  const response: CreateWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateWorkflowCommandError
 */
const de_CreateWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.transfer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      throw await de_ResourceExistsExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteAccessCommand
 */
export const de_DeleteAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAccessCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAccessCommandError
 */
const de_DeleteAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteAgreementCommand
 */
export const de_DeleteAgreementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgreementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAgreementCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAgreementCommandError
 */
const de_DeleteAgreementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgreementCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteCertificateCommand
 */
export const de_DeleteCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCertificateCommandError
 */
const de_DeleteCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteConnectorCommand
 */
export const de_DeleteConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConnectorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteConnectorCommandError
 */
const de_DeleteConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteHostKeyCommand
 */
export const de_DeleteHostKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteHostKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteHostKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteHostKeyCommandError
 */
const de_DeleteHostKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostKeyCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteProfileCommand
 */
export const de_DeleteProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteProfileCommandError
 */
const de_DeleteProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteServerCommand
 */
export const de_DeleteServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteServerCommandError
 */
const de_DeleteServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.transfer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteSshPublicKeyCommand
 */
export const de_DeleteSshPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSshPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSshPublicKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSshPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSshPublicKeyCommandError
 */
const de_DeleteSshPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSshPublicKeyCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteUserCommandError
 */
const de_DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteWorkflowCommand
 */
export const de_DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWorkflowCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteWorkflowCommandError
 */
const de_DeleteWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.transfer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAccessCommand
 */
export const de_DescribeAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccessResponse(data, context);
  const response: DescribeAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAccessCommandError
 */
const de_DescribeAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAgreementCommand
 */
export const de_DescribeAgreementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgreementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAgreementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAgreementResponse(data, context);
  const response: DescribeAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAgreementCommandError
 */
const de_DescribeAgreementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgreementCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
  contents = de_DescribeCertificateResponse(data, context);
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
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeConnectorCommand
 */
export const de_DescribeConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConnectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConnectorResponse(data, context);
  const response: DescribeConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConnectorCommandError
 */
const de_DescribeConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeExecutionCommand
 */
export const de_DescribeExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeExecutionResponse(data, context);
  const response: DescribeExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeExecutionCommandError
 */
const de_DescribeExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExecutionCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeHostKeyCommand
 */
export const de_DescribeHostKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHostKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeHostKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHostKeyResponse(data, context);
  const response: DescribeHostKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeHostKeyCommandError
 */
const de_DescribeHostKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHostKeyCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeProfileCommand
 */
export const de_DescribeProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProfileResponse(data, context);
  const response: DescribeProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeProfileCommandError
 */
const de_DescribeProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProfileCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeSecurityPolicyCommand
 */
export const de_DescribeSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSecurityPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSecurityPolicyResponse(data, context);
  const response: DescribeSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSecurityPolicyCommandError
 */
const de_DescribeSecurityPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityPolicyCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeServerCommand
 */
export const de_DescribeServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServerResponse(data, context);
  const response: DescribeServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeServerCommandError
 */
const de_DescribeServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServerCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeUserCommand
 */
export const de_DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserResponse(data, context);
  const response: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeUserCommandError
 */
const de_DescribeUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeWorkflowCommand
 */
export const de_DescribeWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkflowResponse(data, context);
  const response: DescribeWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeWorkflowCommandError
 */
const de_DescribeWorkflowCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ImportCertificateCommand
 */
export const de_ImportCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportCertificateResponse(data, context);
  const response: ImportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportCertificateCommandError
 */
const de_ImportCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ImportHostKeyCommand
 */
export const de_ImportHostKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportHostKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportHostKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportHostKeyResponse(data, context);
  const response: ImportHostKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportHostKeyCommandError
 */
const de_ImportHostKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportHostKeyCommandOutput> => {
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
 * deserializeAws_json1_1ImportSshPublicKeyCommand
 */
export const de_ImportSshPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSshPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportSshPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportSshPublicKeyResponse(data, context);
  const response: ImportSshPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportSshPublicKeyCommandError
 */
const de_ImportSshPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSshPublicKeyCommandOutput> => {
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
 * deserializeAws_json1_1ListAccessesCommand
 */
export const de_ListAccessesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccessesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccessesResponse(data, context);
  const response: ListAccessesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAccessesCommandError
 */
const de_ListAccessesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAgreementsCommand
 */
export const de_ListAgreementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgreementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAgreementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAgreementsResponse(data, context);
  const response: ListAgreementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAgreementsCommandError
 */
const de_ListAgreementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgreementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
  contents = de_ListCertificatesResponse(data, context);
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
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListConnectorsCommand
 */
export const de_ListConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListConnectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListConnectorsResponse(data, context);
  const response: ListConnectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListConnectorsCommandError
 */
const de_ListConnectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListExecutionsCommand
 */
export const de_ListExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListExecutionsResponse(data, context);
  const response: ListExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListExecutionsCommandError
 */
const de_ListExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListHostKeysCommand
 */
export const de_ListHostKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListHostKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHostKeysResponse(data, context);
  const response: ListHostKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListHostKeysCommandError
 */
const de_ListHostKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListProfilesCommand
 */
export const de_ListProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProfilesResponse(data, context);
  const response: ListProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListProfilesCommandError
 */
const de_ListProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListSecurityPoliciesCommand
 */
export const de_ListSecurityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSecurityPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSecurityPoliciesResponse(data, context);
  const response: ListSecurityPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSecurityPoliciesCommandError
 */
const de_ListSecurityPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListServersCommand
 */
export const de_ListServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServersResponse(data, context);
  const response: ListServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListServersCommandError
 */
const de_ListServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
  contents = de_ListTagsForResourceResponse(data, context);
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
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListUsersCommand
 */
export const de_ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUsersResponse(data, context);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListUsersCommandError
 */
const de_ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListWorkflowsCommand
 */
export const de_ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWorkflowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWorkflowsResponse(data, context);
  const response: ListWorkflowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListWorkflowsCommandError
 */
const de_ListWorkflowsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SendWorkflowStepStateCommand
 */
export const de_SendWorkflowStepStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendWorkflowStepStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendWorkflowStepStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SendWorkflowStepStateResponse(data, context);
  const response: SendWorkflowStepStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SendWorkflowStepStateCommandError
 */
const de_SendWorkflowStepStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendWorkflowStepStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.transfer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartFileTransferCommand
 */
export const de_StartFileTransferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFileTransferCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartFileTransferCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartFileTransferResponse(data, context);
  const response: StartFileTransferCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartFileTransferCommandError
 */
const de_StartFileTransferCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFileTransferCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartServerCommand
 */
export const de_StartServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartServerCommandError
 */
const de_StartServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartServerCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopServerCommand
 */
export const de_StopServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopServerCommandError
 */
const de_StopServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopServerCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1TestIdentityProviderCommand
 */
export const de_TestIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestIdentityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TestIdentityProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TestIdentityProviderResponse(data, context);
  const response: TestIdentityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TestIdentityProviderCommandError
 */
const de_TestIdentityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestIdentityProviderCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateAccessCommand
 */
export const de_UpdateAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAccessResponse(data, context);
  const response: UpdateAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAccessCommandError
 */
const de_UpdateAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessCommandOutput> => {
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
 * deserializeAws_json1_1UpdateAgreementCommand
 */
export const de_UpdateAgreementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgreementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAgreementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAgreementResponse(data, context);
  const response: UpdateAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAgreementCommandError
 */
const de_UpdateAgreementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgreementCommandOutput> => {
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
 * deserializeAws_json1_1UpdateCertificateCommand
 */
export const de_UpdateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCertificateResponse(data, context);
  const response: UpdateCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateCertificateCommandError
 */
const de_UpdateCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateConnectorCommand
 */
export const de_UpdateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateConnectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateConnectorResponse(data, context);
  const response: UpdateConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateConnectorCommandError
 */
const de_UpdateConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorCommandOutput> => {
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
 * deserializeAws_json1_1UpdateHostKeyCommand
 */
export const de_UpdateHostKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHostKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateHostKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateHostKeyResponse(data, context);
  const response: UpdateHostKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateHostKeyCommandError
 */
const de_UpdateHostKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHostKeyCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateProfileCommand
 */
export const de_UpdateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateProfileResponse(data, context);
  const response: UpdateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateProfileCommandError
 */
const de_UpdateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateServerCommand
 */
export const de_UpdateServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServerResponse(data, context);
  const response: UpdateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateServerCommandError
 */
const de_UpdateServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.transfer#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transfer#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateUserCommand
 */
export const de_UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateUserResponse(data, context);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateUserCommandError
 */
const de_UpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body, context);
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
  const deserialized: any = de_InternalServiceError(body, context);
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
  const deserialized: any = de_InvalidNextTokenException(body, context);
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
  const deserialized: any = de_InvalidRequestException(body, context);
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
  const deserialized: any = de_ResourceExistsException(body, context);
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
  const deserialized: any = de_ResourceNotFoundException(body, context);
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
  const deserialized: any = de_ServiceUnavailableException(body, context);
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
  const deserialized: any = de_ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AddressAllocationIds
 */
const se_AddressAllocationIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1As2ConnectorConfig
 */
const se_As2ConnectorConfig = (input: As2ConnectorConfig, context: __SerdeContext): any => {
  return {
    ...(input.Compression != null && { Compression: input.Compression }),
    ...(input.EncryptionAlgorithm != null && { EncryptionAlgorithm: input.EncryptionAlgorithm }),
    ...(input.LocalProfileId != null && { LocalProfileId: input.LocalProfileId }),
    ...(input.MdnResponse != null && { MdnResponse: input.MdnResponse }),
    ...(input.MdnSigningAlgorithm != null && { MdnSigningAlgorithm: input.MdnSigningAlgorithm }),
    ...(input.MessageSubject != null && { MessageSubject: input.MessageSubject }),
    ...(input.PartnerProfileId != null && { PartnerProfileId: input.PartnerProfileId }),
    ...(input.SigningAlgorithm != null && { SigningAlgorithm: input.SigningAlgorithm }),
  };
};

/**
 * serializeAws_json1_1As2Transports
 */
const se_As2Transports = (input: (As2Transport | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CertificateIds
 */
const se_CertificateIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CopyStepDetails
 */
const se_CopyStepDetails = (input: CopyStepDetails, context: __SerdeContext): any => {
  return {
    ...(input.DestinationFileLocation != null && {
      DestinationFileLocation: se_InputFileLocation(input.DestinationFileLocation, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OverwriteExisting != null && { OverwriteExisting: input.OverwriteExisting }),
    ...(input.SourceFileLocation != null && { SourceFileLocation: input.SourceFileLocation }),
  };
};

/**
 * serializeAws_json1_1CreateAccessRequest
 */
const se_CreateAccessRequest = (input: CreateAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExternalId != null && { ExternalId: input.ExternalId }),
    ...(input.HomeDirectory != null && { HomeDirectory: input.HomeDirectory }),
    ...(input.HomeDirectoryMappings != null && {
      HomeDirectoryMappings: se_HomeDirectoryMappings(input.HomeDirectoryMappings, context),
    }),
    ...(input.HomeDirectoryType != null && { HomeDirectoryType: input.HomeDirectoryType }),
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.PosixProfile != null && { PosixProfile: se_PosixProfile(input.PosixProfile, context) }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1CreateAgreementRequest
 */
const se_CreateAgreementRequest = (input: CreateAgreementRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessRole != null && { AccessRole: input.AccessRole }),
    ...(input.BaseDirectory != null && { BaseDirectory: input.BaseDirectory }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LocalProfileId != null && { LocalProfileId: input.LocalProfileId }),
    ...(input.PartnerProfileId != null && { PartnerProfileId: input.PartnerProfileId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateConnectorRequest
 */
const se_CreateConnectorRequest = (input: CreateConnectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessRole != null && { AccessRole: input.AccessRole }),
    ...(input.As2Config != null && { As2Config: se_As2ConnectorConfig(input.As2Config, context) }),
    ...(input.LoggingRole != null && { LoggingRole: input.LoggingRole }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

/**
 * serializeAws_json1_1CreateProfileRequest
 */
const se_CreateProfileRequest = (input: CreateProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.As2Id != null && { As2Id: input.As2Id }),
    ...(input.CertificateIds != null && { CertificateIds: se_CertificateIds(input.CertificateIds, context) }),
    ...(input.ProfileType != null && { ProfileType: input.ProfileType }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateServerRequest
 */
const se_CreateServerRequest = (input: CreateServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.EndpointDetails != null && { EndpointDetails: se_EndpointDetails(input.EndpointDetails, context) }),
    ...(input.EndpointType != null && { EndpointType: input.EndpointType }),
    ...(input.HostKey != null && { HostKey: input.HostKey }),
    ...(input.IdentityProviderDetails != null && {
      IdentityProviderDetails: se_IdentityProviderDetails(input.IdentityProviderDetails, context),
    }),
    ...(input.IdentityProviderType != null && { IdentityProviderType: input.IdentityProviderType }),
    ...(input.LoggingRole != null && { LoggingRole: input.LoggingRole }),
    ...(input.PostAuthenticationLoginBanner != null && {
      PostAuthenticationLoginBanner: input.PostAuthenticationLoginBanner,
    }),
    ...(input.PreAuthenticationLoginBanner != null && {
      PreAuthenticationLoginBanner: input.PreAuthenticationLoginBanner,
    }),
    ...(input.ProtocolDetails != null && { ProtocolDetails: se_ProtocolDetails(input.ProtocolDetails, context) }),
    ...(input.Protocols != null && { Protocols: se_Protocols(input.Protocols, context) }),
    ...(input.SecurityPolicyName != null && { SecurityPolicyName: input.SecurityPolicyName }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.WorkflowDetails != null && { WorkflowDetails: se_WorkflowDetails(input.WorkflowDetails, context) }),
  };
};

/**
 * serializeAws_json1_1CreateUserRequest
 */
const se_CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.HomeDirectory != null && { HomeDirectory: input.HomeDirectory }),
    ...(input.HomeDirectoryMappings != null && {
      HomeDirectoryMappings: se_HomeDirectoryMappings(input.HomeDirectoryMappings, context),
    }),
    ...(input.HomeDirectoryType != null && { HomeDirectoryType: input.HomeDirectoryType }),
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.PosixProfile != null && { PosixProfile: se_PosixProfile(input.PosixProfile, context) }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.SshPublicKeyBody != null && { SshPublicKeyBody: input.SshPublicKeyBody }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1CreateWorkflowRequest
 */
const se_CreateWorkflowRequest = (input: CreateWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.OnExceptionSteps != null && { OnExceptionSteps: se_WorkflowSteps(input.OnExceptionSteps, context) }),
    ...(input.Steps != null && { Steps: se_WorkflowSteps(input.Steps, context) }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CustomStepDetails
 */
const se_CustomStepDetails = (input: CustomStepDetails, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SourceFileLocation != null && { SourceFileLocation: input.SourceFileLocation }),
    ...(input.Target != null && { Target: input.Target }),
    ...(input.TimeoutSeconds != null && { TimeoutSeconds: input.TimeoutSeconds }),
  };
};

/**
 * serializeAws_json1_1DecryptStepDetails
 */
const se_DecryptStepDetails = (input: DecryptStepDetails, context: __SerdeContext): any => {
  return {
    ...(input.DestinationFileLocation != null && {
      DestinationFileLocation: se_InputFileLocation(input.DestinationFileLocation, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OverwriteExisting != null && { OverwriteExisting: input.OverwriteExisting }),
    ...(input.SourceFileLocation != null && { SourceFileLocation: input.SourceFileLocation }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1DeleteAccessRequest
 */
const se_DeleteAccessRequest = (input: DeleteAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExternalId != null && { ExternalId: input.ExternalId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1DeleteAgreementRequest
 */
const se_DeleteAgreementRequest = (input: DeleteAgreementRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgreementId != null && { AgreementId: input.AgreementId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1DeleteCertificateRequest
 */
const se_DeleteCertificateRequest = (input: DeleteCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateId != null && { CertificateId: input.CertificateId }),
  };
};

/**
 * serializeAws_json1_1DeleteConnectorRequest
 */
const se_DeleteConnectorRequest = (input: DeleteConnectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectorId != null && { ConnectorId: input.ConnectorId }),
  };
};

/**
 * serializeAws_json1_1DeleteHostKeyRequest
 */
const se_DeleteHostKeyRequest = (input: DeleteHostKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.HostKeyId != null && { HostKeyId: input.HostKeyId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1DeleteProfileRequest
 */
const se_DeleteProfileRequest = (input: DeleteProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProfileId != null && { ProfileId: input.ProfileId }),
  };
};

/**
 * serializeAws_json1_1DeleteServerRequest
 */
const se_DeleteServerRequest = (input: DeleteServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1DeleteSshPublicKeyRequest
 */
const se_DeleteSshPublicKeyRequest = (input: DeleteSshPublicKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.SshPublicKeyId != null && { SshPublicKeyId: input.SshPublicKeyId }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1DeleteStepDetails
 */
const se_DeleteStepDetails = (input: DeleteStepDetails, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SourceFileLocation != null && { SourceFileLocation: input.SourceFileLocation }),
  };
};

/**
 * serializeAws_json1_1DeleteUserRequest
 */
const se_DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1DeleteWorkflowRequest
 */
const se_DeleteWorkflowRequest = (input: DeleteWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkflowId != null && { WorkflowId: input.WorkflowId }),
  };
};

/**
 * serializeAws_json1_1DescribeAccessRequest
 */
const se_DescribeAccessRequest = (input: DescribeAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExternalId != null && { ExternalId: input.ExternalId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1DescribeAgreementRequest
 */
const se_DescribeAgreementRequest = (input: DescribeAgreementRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgreementId != null && { AgreementId: input.AgreementId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1DescribeCertificateRequest
 */
const se_DescribeCertificateRequest = (input: DescribeCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateId != null && { CertificateId: input.CertificateId }),
  };
};

/**
 * serializeAws_json1_1DescribeConnectorRequest
 */
const se_DescribeConnectorRequest = (input: DescribeConnectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectorId != null && { ConnectorId: input.ConnectorId }),
  };
};

/**
 * serializeAws_json1_1DescribeExecutionRequest
 */
const se_DescribeExecutionRequest = (input: DescribeExecutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExecutionId != null && { ExecutionId: input.ExecutionId }),
    ...(input.WorkflowId != null && { WorkflowId: input.WorkflowId }),
  };
};

/**
 * serializeAws_json1_1DescribeHostKeyRequest
 */
const se_DescribeHostKeyRequest = (input: DescribeHostKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.HostKeyId != null && { HostKeyId: input.HostKeyId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1DescribeProfileRequest
 */
const se_DescribeProfileRequest = (input: DescribeProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProfileId != null && { ProfileId: input.ProfileId }),
  };
};

/**
 * serializeAws_json1_1DescribeSecurityPolicyRequest
 */
const se_DescribeSecurityPolicyRequest = (input: DescribeSecurityPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecurityPolicyName != null && { SecurityPolicyName: input.SecurityPolicyName }),
  };
};

/**
 * serializeAws_json1_1DescribeServerRequest
 */
const se_DescribeServerRequest = (input: DescribeServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1DescribeUserRequest
 */
const se_DescribeUserRequest = (input: DescribeUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1DescribeWorkflowRequest
 */
const se_DescribeWorkflowRequest = (input: DescribeWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkflowId != null && { WorkflowId: input.WorkflowId }),
  };
};

/**
 * serializeAws_json1_1EfsFileLocation
 */
const se_EfsFileLocation = (input: EfsFileLocation, context: __SerdeContext): any => {
  return {
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.Path != null && { Path: input.Path }),
  };
};

/**
 * serializeAws_json1_1EndpointDetails
 */
const se_EndpointDetails = (input: EndpointDetails, context: __SerdeContext): any => {
  return {
    ...(input.AddressAllocationIds != null && {
      AddressAllocationIds: se_AddressAllocationIds(input.AddressAllocationIds, context),
    }),
    ...(input.SecurityGroupIds != null && { SecurityGroupIds: se_SecurityGroupIds(input.SecurityGroupIds, context) }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIds(input.SubnetIds, context) }),
    ...(input.VpcEndpointId != null && { VpcEndpointId: input.VpcEndpointId }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

/**
 * serializeAws_json1_1FilePaths
 */
const se_FilePaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1HomeDirectoryMapEntry
 */
const se_HomeDirectoryMapEntry = (input: HomeDirectoryMapEntry, context: __SerdeContext): any => {
  return {
    ...(input.Entry != null && { Entry: input.Entry }),
    ...(input.Target != null && { Target: input.Target }),
  };
};

/**
 * serializeAws_json1_1HomeDirectoryMappings
 */
const se_HomeDirectoryMappings = (input: HomeDirectoryMapEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HomeDirectoryMapEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1IdentityProviderDetails
 */
const se_IdentityProviderDetails = (input: IdentityProviderDetails, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Function != null && { Function: input.Function }),
    ...(input.InvocationRole != null && { InvocationRole: input.InvocationRole }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

/**
 * serializeAws_json1_1ImportCertificateRequest
 */
const se_ImportCertificateRequest = (input: ImportCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.ActiveDate != null && { ActiveDate: Math.round(input.ActiveDate.getTime() / 1000) }),
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.CertificateChain != null && { CertificateChain: input.CertificateChain }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InactiveDate != null && { InactiveDate: Math.round(input.InactiveDate.getTime() / 1000) }),
    ...(input.PrivateKey != null && { PrivateKey: input.PrivateKey }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.Usage != null && { Usage: input.Usage }),
  };
};

/**
 * serializeAws_json1_1ImportHostKeyRequest
 */
const se_ImportHostKeyRequest = (input: ImportHostKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HostKeyBody != null && { HostKeyBody: input.HostKeyBody }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1ImportSshPublicKeyRequest
 */
const se_ImportSshPublicKeyRequest = (input: ImportSshPublicKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.SshPublicKeyBody != null && { SshPublicKeyBody: input.SshPublicKeyBody }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1InputFileLocation
 */
const se_InputFileLocation = (input: InputFileLocation, context: __SerdeContext): any => {
  return {
    ...(input.EfsFileLocation != null && { EfsFileLocation: se_EfsFileLocation(input.EfsFileLocation, context) }),
    ...(input.S3FileLocation != null && { S3FileLocation: se_S3InputFileLocation(input.S3FileLocation, context) }),
  };
};

/**
 * serializeAws_json1_1ListAccessesRequest
 */
const se_ListAccessesRequest = (input: ListAccessesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1ListAgreementsRequest
 */
const se_ListAgreementsRequest = (input: ListAgreementsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1ListCertificatesRequest
 */
const se_ListCertificatesRequest = (input: ListCertificatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListConnectorsRequest
 */
const se_ListConnectorsRequest = (input: ListConnectorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListExecutionsRequest
 */
const se_ListExecutionsRequest = (input: ListExecutionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WorkflowId != null && { WorkflowId: input.WorkflowId }),
  };
};

/**
 * serializeAws_json1_1ListHostKeysRequest
 */
const se_ListHostKeysRequest = (input: ListHostKeysRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1ListProfilesRequest
 */
const se_ListProfilesRequest = (input: ListProfilesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProfileType != null && { ProfileType: input.ProfileType }),
  };
};

/**
 * serializeAws_json1_1ListSecurityPoliciesRequest
 */
const se_ListSecurityPoliciesRequest = (input: ListSecurityPoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListServersRequest
 */
const se_ListServersRequest = (input: ListServersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListUsersRequest
 */
const se_ListUsersRequest = (input: ListUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1ListWorkflowsRequest
 */
const se_ListWorkflowsRequest = (input: ListWorkflowsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1OnPartialUploadWorkflowDetails
 */
const se_OnPartialUploadWorkflowDetails = (input: WorkflowDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WorkflowDetail(entry, context);
    });
};

/**
 * serializeAws_json1_1OnUploadWorkflowDetails
 */
const se_OnUploadWorkflowDetails = (input: WorkflowDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WorkflowDetail(entry, context);
    });
};

/**
 * serializeAws_json1_1PosixProfile
 */
const se_PosixProfile = (input: PosixProfile, context: __SerdeContext): any => {
  return {
    ...(input.Gid != null && { Gid: input.Gid }),
    ...(input.SecondaryGids != null && { SecondaryGids: se_SecondaryGids(input.SecondaryGids, context) }),
    ...(input.Uid != null && { Uid: input.Uid }),
  };
};

/**
 * serializeAws_json1_1ProtocolDetails
 */
const se_ProtocolDetails = (input: ProtocolDetails, context: __SerdeContext): any => {
  return {
    ...(input.As2Transports != null && { As2Transports: se_As2Transports(input.As2Transports, context) }),
    ...(input.PassiveIp != null && { PassiveIp: input.PassiveIp }),
    ...(input.SetStatOption != null && { SetStatOption: input.SetStatOption }),
    ...(input.TlsSessionResumptionMode != null && { TlsSessionResumptionMode: input.TlsSessionResumptionMode }),
  };
};

/**
 * serializeAws_json1_1Protocols
 */
const se_Protocols = (input: (Protocol | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1S3InputFileLocation
 */
const se_S3InputFileLocation = (input: S3InputFileLocation, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Key != null && { Key: input.Key }),
  };
};

/**
 * serializeAws_json1_1S3Tag
 */
const se_S3Tag = (input: S3Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1S3Tags
 */
const se_S3Tags = (input: S3Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_S3Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1SecondaryGids
 */
const se_SecondaryGids = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SecurityGroupIds
 */
const se_SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SendWorkflowStepStateRequest
 */
const se_SendWorkflowStepStateRequest = (input: SendWorkflowStepStateRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExecutionId != null && { ExecutionId: input.ExecutionId }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Token != null && { Token: input.Token }),
    ...(input.WorkflowId != null && { WorkflowId: input.WorkflowId }),
  };
};

/**
 * serializeAws_json1_1StartFileTransferRequest
 */
const se_StartFileTransferRequest = (input: StartFileTransferRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectorId != null && { ConnectorId: input.ConnectorId }),
    ...(input.SendFilePaths != null && { SendFilePaths: se_FilePaths(input.SendFilePaths, context) }),
  };
};

/**
 * serializeAws_json1_1StartServerRequest
 */
const se_StartServerRequest = (input: StartServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1StopServerRequest
 */
const se_StopServerRequest = (input: StopServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
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
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
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
 * serializeAws_json1_1TagStepDetails
 */
const se_TagStepDetails = (input: TagStepDetails, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SourceFileLocation != null && { SourceFileLocation: input.SourceFileLocation }),
    ...(input.Tags != null && { Tags: se_S3Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TestIdentityProviderRequest
 */
const se_TestIdentityProviderRequest = (input: TestIdentityProviderRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.ServerProtocol != null && { ServerProtocol: input.ServerProtocol }),
    ...(input.SourceIp != null && { SourceIp: input.SourceIp }),
    ...(input.UserName != null && { UserName: input.UserName }),
    ...(input.UserPassword != null && { UserPassword: input.UserPassword }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeys(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateAccessRequest
 */
const se_UpdateAccessRequest = (input: UpdateAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExternalId != null && { ExternalId: input.ExternalId }),
    ...(input.HomeDirectory != null && { HomeDirectory: input.HomeDirectory }),
    ...(input.HomeDirectoryMappings != null && {
      HomeDirectoryMappings: se_HomeDirectoryMappings(input.HomeDirectoryMappings, context),
    }),
    ...(input.HomeDirectoryType != null && { HomeDirectoryType: input.HomeDirectoryType }),
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.PosixProfile != null && { PosixProfile: se_PosixProfile(input.PosixProfile, context) }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1UpdateAgreementRequest
 */
const se_UpdateAgreementRequest = (input: UpdateAgreementRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessRole != null && { AccessRole: input.AccessRole }),
    ...(input.AgreementId != null && { AgreementId: input.AgreementId }),
    ...(input.BaseDirectory != null && { BaseDirectory: input.BaseDirectory }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LocalProfileId != null && { LocalProfileId: input.LocalProfileId }),
    ...(input.PartnerProfileId != null && { PartnerProfileId: input.PartnerProfileId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1UpdateCertificateRequest
 */
const se_UpdateCertificateRequest = (input: UpdateCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.ActiveDate != null && { ActiveDate: Math.round(input.ActiveDate.getTime() / 1000) }),
    ...(input.CertificateId != null && { CertificateId: input.CertificateId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InactiveDate != null && { InactiveDate: Math.round(input.InactiveDate.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1UpdateConnectorRequest
 */
const se_UpdateConnectorRequest = (input: UpdateConnectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessRole != null && { AccessRole: input.AccessRole }),
    ...(input.As2Config != null && { As2Config: se_As2ConnectorConfig(input.As2Config, context) }),
    ...(input.ConnectorId != null && { ConnectorId: input.ConnectorId }),
    ...(input.LoggingRole != null && { LoggingRole: input.LoggingRole }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

/**
 * serializeAws_json1_1UpdateHostKeyRequest
 */
const se_UpdateHostKeyRequest = (input: UpdateHostKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HostKeyId != null && { HostKeyId: input.HostKeyId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

/**
 * serializeAws_json1_1UpdateProfileRequest
 */
const se_UpdateProfileRequest = (input: UpdateProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateIds != null && { CertificateIds: se_CertificateIds(input.CertificateIds, context) }),
    ...(input.ProfileId != null && { ProfileId: input.ProfileId }),
  };
};

/**
 * serializeAws_json1_1UpdateServerRequest
 */
const se_UpdateServerRequest = (input: UpdateServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.EndpointDetails != null && { EndpointDetails: se_EndpointDetails(input.EndpointDetails, context) }),
    ...(input.EndpointType != null && { EndpointType: input.EndpointType }),
    ...(input.HostKey != null && { HostKey: input.HostKey }),
    ...(input.IdentityProviderDetails != null && {
      IdentityProviderDetails: se_IdentityProviderDetails(input.IdentityProviderDetails, context),
    }),
    ...(input.LoggingRole != null && { LoggingRole: input.LoggingRole }),
    ...(input.PostAuthenticationLoginBanner != null && {
      PostAuthenticationLoginBanner: input.PostAuthenticationLoginBanner,
    }),
    ...(input.PreAuthenticationLoginBanner != null && {
      PreAuthenticationLoginBanner: input.PreAuthenticationLoginBanner,
    }),
    ...(input.ProtocolDetails != null && { ProtocolDetails: se_ProtocolDetails(input.ProtocolDetails, context) }),
    ...(input.Protocols != null && { Protocols: se_Protocols(input.Protocols, context) }),
    ...(input.SecurityPolicyName != null && { SecurityPolicyName: input.SecurityPolicyName }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.WorkflowDetails != null && { WorkflowDetails: se_WorkflowDetails(input.WorkflowDetails, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateUserRequest
 */
const se_UpdateUserRequest = (input: UpdateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.HomeDirectory != null && { HomeDirectory: input.HomeDirectory }),
    ...(input.HomeDirectoryMappings != null && {
      HomeDirectoryMappings: se_HomeDirectoryMappings(input.HomeDirectoryMappings, context),
    }),
    ...(input.HomeDirectoryType != null && { HomeDirectoryType: input.HomeDirectoryType }),
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.PosixProfile != null && { PosixProfile: se_PosixProfile(input.PosixProfile, context) }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1WorkflowDetail
 */
const se_WorkflowDetail = (input: WorkflowDetail, context: __SerdeContext): any => {
  return {
    ...(input.ExecutionRole != null && { ExecutionRole: input.ExecutionRole }),
    ...(input.WorkflowId != null && { WorkflowId: input.WorkflowId }),
  };
};

/**
 * serializeAws_json1_1WorkflowDetails
 */
const se_WorkflowDetails = (input: WorkflowDetails, context: __SerdeContext): any => {
  return {
    ...(input.OnPartialUpload != null && {
      OnPartialUpload: se_OnPartialUploadWorkflowDetails(input.OnPartialUpload, context),
    }),
    ...(input.OnUpload != null && { OnUpload: se_OnUploadWorkflowDetails(input.OnUpload, context) }),
  };
};

/**
 * serializeAws_json1_1WorkflowStep
 */
const se_WorkflowStep = (input: WorkflowStep, context: __SerdeContext): any => {
  return {
    ...(input.CopyStepDetails != null && { CopyStepDetails: se_CopyStepDetails(input.CopyStepDetails, context) }),
    ...(input.CustomStepDetails != null && {
      CustomStepDetails: se_CustomStepDetails(input.CustomStepDetails, context),
    }),
    ...(input.DecryptStepDetails != null && {
      DecryptStepDetails: se_DecryptStepDetails(input.DecryptStepDetails, context),
    }),
    ...(input.DeleteStepDetails != null && {
      DeleteStepDetails: se_DeleteStepDetails(input.DeleteStepDetails, context),
    }),
    ...(input.TagStepDetails != null && { TagStepDetails: se_TagStepDetails(input.TagStepDetails, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1WorkflowSteps
 */
const se_WorkflowSteps = (input: WorkflowStep[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WorkflowStep(entry, context);
    });
};

/**
 * deserializeAws_json1_1AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AddressAllocationIds
 */
const de_AddressAllocationIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1As2ConnectorConfig
 */
const de_As2ConnectorConfig = (output: any, context: __SerdeContext): As2ConnectorConfig => {
  return {
    Compression: __expectString(output.Compression),
    EncryptionAlgorithm: __expectString(output.EncryptionAlgorithm),
    LocalProfileId: __expectString(output.LocalProfileId),
    MdnResponse: __expectString(output.MdnResponse),
    MdnSigningAlgorithm: __expectString(output.MdnSigningAlgorithm),
    MessageSubject: __expectString(output.MessageSubject),
    PartnerProfileId: __expectString(output.PartnerProfileId),
    SigningAlgorithm: __expectString(output.SigningAlgorithm),
  } as any;
};

/**
 * deserializeAws_json1_1As2Transports
 */
const de_As2Transports = (output: any, context: __SerdeContext): (As2Transport | string)[] => {
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
 * deserializeAws_json1_1CertificateIds
 */
const de_CertificateIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CopyStepDetails
 */
const de_CopyStepDetails = (output: any, context: __SerdeContext): CopyStepDetails => {
  return {
    DestinationFileLocation:
      output.DestinationFileLocation != null
        ? de_InputFileLocation(output.DestinationFileLocation, context)
        : undefined,
    Name: __expectString(output.Name),
    OverwriteExisting: __expectString(output.OverwriteExisting),
    SourceFileLocation: __expectString(output.SourceFileLocation),
  } as any;
};

/**
 * deserializeAws_json1_1CreateAccessResponse
 */
const de_CreateAccessResponse = (output: any, context: __SerdeContext): CreateAccessResponse => {
  return {
    ExternalId: __expectString(output.ExternalId),
    ServerId: __expectString(output.ServerId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateAgreementResponse
 */
const de_CreateAgreementResponse = (output: any, context: __SerdeContext): CreateAgreementResponse => {
  return {
    AgreementId: __expectString(output.AgreementId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateConnectorResponse
 */
const de_CreateConnectorResponse = (output: any, context: __SerdeContext): CreateConnectorResponse => {
  return {
    ConnectorId: __expectString(output.ConnectorId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateProfileResponse
 */
const de_CreateProfileResponse = (output: any, context: __SerdeContext): CreateProfileResponse => {
  return {
    ProfileId: __expectString(output.ProfileId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateServerResponse
 */
const de_CreateServerResponse = (output: any, context: __SerdeContext): CreateServerResponse => {
  return {
    ServerId: __expectString(output.ServerId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateUserResponse
 */
const de_CreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  return {
    ServerId: __expectString(output.ServerId),
    UserName: __expectString(output.UserName),
  } as any;
};

/**
 * deserializeAws_json1_1CreateWorkflowResponse
 */
const de_CreateWorkflowResponse = (output: any, context: __SerdeContext): CreateWorkflowResponse => {
  return {
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

/**
 * deserializeAws_json1_1CustomStepDetails
 */
const de_CustomStepDetails = (output: any, context: __SerdeContext): CustomStepDetails => {
  return {
    Name: __expectString(output.Name),
    SourceFileLocation: __expectString(output.SourceFileLocation),
    Target: __expectString(output.Target),
    TimeoutSeconds: __expectInt32(output.TimeoutSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1DecryptStepDetails
 */
const de_DecryptStepDetails = (output: any, context: __SerdeContext): DecryptStepDetails => {
  return {
    DestinationFileLocation:
      output.DestinationFileLocation != null
        ? de_InputFileLocation(output.DestinationFileLocation, context)
        : undefined,
    Name: __expectString(output.Name),
    OverwriteExisting: __expectString(output.OverwriteExisting),
    SourceFileLocation: __expectString(output.SourceFileLocation),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteStepDetails
 */
const de_DeleteStepDetails = (output: any, context: __SerdeContext): DeleteStepDetails => {
  return {
    Name: __expectString(output.Name),
    SourceFileLocation: __expectString(output.SourceFileLocation),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAccessResponse
 */
const de_DescribeAccessResponse = (output: any, context: __SerdeContext): DescribeAccessResponse => {
  return {
    Access: output.Access != null ? de_DescribedAccess(output.Access, context) : undefined,
    ServerId: __expectString(output.ServerId),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAgreementResponse
 */
const de_DescribeAgreementResponse = (output: any, context: __SerdeContext): DescribeAgreementResponse => {
  return {
    Agreement: output.Agreement != null ? de_DescribedAgreement(output.Agreement, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCertificateResponse
 */
const de_DescribeCertificateResponse = (output: any, context: __SerdeContext): DescribeCertificateResponse => {
  return {
    Certificate: output.Certificate != null ? de_DescribedCertificate(output.Certificate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConnectorResponse
 */
const de_DescribeConnectorResponse = (output: any, context: __SerdeContext): DescribeConnectorResponse => {
  return {
    Connector: output.Connector != null ? de_DescribedConnector(output.Connector, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribedAccess
 */
const de_DescribedAccess = (output: any, context: __SerdeContext): DescribedAccess => {
  return {
    ExternalId: __expectString(output.ExternalId),
    HomeDirectory: __expectString(output.HomeDirectory),
    HomeDirectoryMappings:
      output.HomeDirectoryMappings != null
        ? de_HomeDirectoryMappings(output.HomeDirectoryMappings, context)
        : undefined,
    HomeDirectoryType: __expectString(output.HomeDirectoryType),
    Policy: __expectString(output.Policy),
    PosixProfile: output.PosixProfile != null ? de_PosixProfile(output.PosixProfile, context) : undefined,
    Role: __expectString(output.Role),
  } as any;
};

/**
 * deserializeAws_json1_1DescribedAgreement
 */
const de_DescribedAgreement = (output: any, context: __SerdeContext): DescribedAgreement => {
  return {
    AccessRole: __expectString(output.AccessRole),
    AgreementId: __expectString(output.AgreementId),
    Arn: __expectString(output.Arn),
    BaseDirectory: __expectString(output.BaseDirectory),
    Description: __expectString(output.Description),
    LocalProfileId: __expectString(output.LocalProfileId),
    PartnerProfileId: __expectString(output.PartnerProfileId),
    ServerId: __expectString(output.ServerId),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribedCertificate
 */
const de_DescribedCertificate = (output: any, context: __SerdeContext): DescribedCertificate => {
  return {
    ActiveDate:
      output.ActiveDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ActiveDate))) : undefined,
    Arn: __expectString(output.Arn),
    Certificate: __expectString(output.Certificate),
    CertificateChain: __expectString(output.CertificateChain),
    CertificateId: __expectString(output.CertificateId),
    Description: __expectString(output.Description),
    InactiveDate:
      output.InactiveDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InactiveDate)))
        : undefined,
    NotAfterDate:
      output.NotAfterDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NotAfterDate)))
        : undefined,
    NotBeforeDate:
      output.NotBeforeDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.NotBeforeDate)))
        : undefined,
    Serial: __expectString(output.Serial),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
    Usage: __expectString(output.Usage),
  } as any;
};

/**
 * deserializeAws_json1_1DescribedConnector
 */
const de_DescribedConnector = (output: any, context: __SerdeContext): DescribedConnector => {
  return {
    AccessRole: __expectString(output.AccessRole),
    Arn: __expectString(output.Arn),
    As2Config: output.As2Config != null ? de_As2ConnectorConfig(output.As2Config, context) : undefined,
    ConnectorId: __expectString(output.ConnectorId),
    LoggingRole: __expectString(output.LoggingRole),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_json1_1DescribedExecution
 */
const de_DescribedExecution = (output: any, context: __SerdeContext): DescribedExecution => {
  return {
    ExecutionId: __expectString(output.ExecutionId),
    ExecutionRole: __expectString(output.ExecutionRole),
    InitialFileLocation:
      output.InitialFileLocation != null ? de_FileLocation(output.InitialFileLocation, context) : undefined,
    LoggingConfiguration:
      output.LoggingConfiguration != null ? de_LoggingConfiguration(output.LoggingConfiguration, context) : undefined,
    PosixProfile: output.PosixProfile != null ? de_PosixProfile(output.PosixProfile, context) : undefined,
    Results: output.Results != null ? de_ExecutionResults(output.Results, context) : undefined,
    ServiceMetadata: output.ServiceMetadata != null ? de_ServiceMetadata(output.ServiceMetadata, context) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribedHostKey
 */
const de_DescribedHostKey = (output: any, context: __SerdeContext): DescribedHostKey => {
  return {
    Arn: __expectString(output.Arn),
    DateImported:
      output.DateImported != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateImported)))
        : undefined,
    Description: __expectString(output.Description),
    HostKeyFingerprint: __expectString(output.HostKeyFingerprint),
    HostKeyId: __expectString(output.HostKeyId),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1DescribedProfile
 */
const de_DescribedProfile = (output: any, context: __SerdeContext): DescribedProfile => {
  return {
    Arn: __expectString(output.Arn),
    As2Id: __expectString(output.As2Id),
    CertificateIds: output.CertificateIds != null ? de_CertificateIds(output.CertificateIds, context) : undefined,
    ProfileId: __expectString(output.ProfileId),
    ProfileType: __expectString(output.ProfileType),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribedSecurityPolicy
 */
const de_DescribedSecurityPolicy = (output: any, context: __SerdeContext): DescribedSecurityPolicy => {
  return {
    Fips: __expectBoolean(output.Fips),
    SecurityPolicyName: __expectString(output.SecurityPolicyName),
    SshCiphers: output.SshCiphers != null ? de_SecurityPolicyOptions(output.SshCiphers, context) : undefined,
    SshKexs: output.SshKexs != null ? de_SecurityPolicyOptions(output.SshKexs, context) : undefined,
    SshMacs: output.SshMacs != null ? de_SecurityPolicyOptions(output.SshMacs, context) : undefined,
    TlsCiphers: output.TlsCiphers != null ? de_SecurityPolicyOptions(output.TlsCiphers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribedServer
 */
const de_DescribedServer = (output: any, context: __SerdeContext): DescribedServer => {
  return {
    Arn: __expectString(output.Arn),
    Certificate: __expectString(output.Certificate),
    Domain: __expectString(output.Domain),
    EndpointDetails: output.EndpointDetails != null ? de_EndpointDetails(output.EndpointDetails, context) : undefined,
    EndpointType: __expectString(output.EndpointType),
    HostKeyFingerprint: __expectString(output.HostKeyFingerprint),
    IdentityProviderDetails:
      output.IdentityProviderDetails != null
        ? de_IdentityProviderDetails(output.IdentityProviderDetails, context)
        : undefined,
    IdentityProviderType: __expectString(output.IdentityProviderType),
    LoggingRole: __expectString(output.LoggingRole),
    PostAuthenticationLoginBanner: __expectString(output.PostAuthenticationLoginBanner),
    PreAuthenticationLoginBanner: __expectString(output.PreAuthenticationLoginBanner),
    ProtocolDetails: output.ProtocolDetails != null ? de_ProtocolDetails(output.ProtocolDetails, context) : undefined,
    Protocols: output.Protocols != null ? de_Protocols(output.Protocols, context) : undefined,
    SecurityPolicyName: __expectString(output.SecurityPolicyName),
    ServerId: __expectString(output.ServerId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    UserCount: __expectInt32(output.UserCount),
    WorkflowDetails: output.WorkflowDetails != null ? de_WorkflowDetails(output.WorkflowDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribedUser
 */
const de_DescribedUser = (output: any, context: __SerdeContext): DescribedUser => {
  return {
    Arn: __expectString(output.Arn),
    HomeDirectory: __expectString(output.HomeDirectory),
    HomeDirectoryMappings:
      output.HomeDirectoryMappings != null
        ? de_HomeDirectoryMappings(output.HomeDirectoryMappings, context)
        : undefined,
    HomeDirectoryType: __expectString(output.HomeDirectoryType),
    Policy: __expectString(output.Policy),
    PosixProfile: output.PosixProfile != null ? de_PosixProfile(output.PosixProfile, context) : undefined,
    Role: __expectString(output.Role),
    SshPublicKeys: output.SshPublicKeys != null ? de_SshPublicKeys(output.SshPublicKeys, context) : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    UserName: __expectString(output.UserName),
  } as any;
};

/**
 * deserializeAws_json1_1DescribedWorkflow
 */
const de_DescribedWorkflow = (output: any, context: __SerdeContext): DescribedWorkflow => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    OnExceptionSteps: output.OnExceptionSteps != null ? de_WorkflowSteps(output.OnExceptionSteps, context) : undefined,
    Steps: output.Steps != null ? de_WorkflowSteps(output.Steps, context) : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeExecutionResponse
 */
const de_DescribeExecutionResponse = (output: any, context: __SerdeContext): DescribeExecutionResponse => {
  return {
    Execution: output.Execution != null ? de_DescribedExecution(output.Execution, context) : undefined,
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeHostKeyResponse
 */
const de_DescribeHostKeyResponse = (output: any, context: __SerdeContext): DescribeHostKeyResponse => {
  return {
    HostKey: output.HostKey != null ? de_DescribedHostKey(output.HostKey, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeProfileResponse
 */
const de_DescribeProfileResponse = (output: any, context: __SerdeContext): DescribeProfileResponse => {
  return {
    Profile: output.Profile != null ? de_DescribedProfile(output.Profile, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSecurityPolicyResponse
 */
const de_DescribeSecurityPolicyResponse = (output: any, context: __SerdeContext): DescribeSecurityPolicyResponse => {
  return {
    SecurityPolicy:
      output.SecurityPolicy != null ? de_DescribedSecurityPolicy(output.SecurityPolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeServerResponse
 */
const de_DescribeServerResponse = (output: any, context: __SerdeContext): DescribeServerResponse => {
  return {
    Server: output.Server != null ? de_DescribedServer(output.Server, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUserResponse
 */
const de_DescribeUserResponse = (output: any, context: __SerdeContext): DescribeUserResponse => {
  return {
    ServerId: __expectString(output.ServerId),
    User: output.User != null ? de_DescribedUser(output.User, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeWorkflowResponse
 */
const de_DescribeWorkflowResponse = (output: any, context: __SerdeContext): DescribeWorkflowResponse => {
  return {
    Workflow: output.Workflow != null ? de_DescribedWorkflow(output.Workflow, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EfsFileLocation
 */
const de_EfsFileLocation = (output: any, context: __SerdeContext): EfsFileLocation => {
  return {
    FileSystemId: __expectString(output.FileSystemId),
    Path: __expectString(output.Path),
  } as any;
};

/**
 * deserializeAws_json1_1EndpointDetails
 */
const de_EndpointDetails = (output: any, context: __SerdeContext): EndpointDetails => {
  return {
    AddressAllocationIds:
      output.AddressAllocationIds != null ? de_AddressAllocationIds(output.AddressAllocationIds, context) : undefined,
    SecurityGroupIds:
      output.SecurityGroupIds != null ? de_SecurityGroupIds(output.SecurityGroupIds, context) : undefined,
    SubnetIds: output.SubnetIds != null ? de_SubnetIds(output.SubnetIds, context) : undefined,
    VpcEndpointId: __expectString(output.VpcEndpointId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1ExecutionError
 */
const de_ExecutionError = (output: any, context: __SerdeContext): ExecutionError => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ExecutionResults
 */
const de_ExecutionResults = (output: any, context: __SerdeContext): ExecutionResults => {
  return {
    OnExceptionSteps:
      output.OnExceptionSteps != null ? de_ExecutionStepResults(output.OnExceptionSteps, context) : undefined,
    Steps: output.Steps != null ? de_ExecutionStepResults(output.Steps, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ExecutionStepResult
 */
const de_ExecutionStepResult = (output: any, context: __SerdeContext): ExecutionStepResult => {
  return {
    Error: output.Error != null ? de_ExecutionError(output.Error, context) : undefined,
    Outputs: __expectString(output.Outputs),
    StepType: __expectString(output.StepType),
  } as any;
};

/**
 * deserializeAws_json1_1ExecutionStepResults
 */
const de_ExecutionStepResults = (output: any, context: __SerdeContext): ExecutionStepResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExecutionStepResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FileLocation
 */
const de_FileLocation = (output: any, context: __SerdeContext): FileLocation => {
  return {
    EfsFileLocation: output.EfsFileLocation != null ? de_EfsFileLocation(output.EfsFileLocation, context) : undefined,
    S3FileLocation: output.S3FileLocation != null ? de_S3FileLocation(output.S3FileLocation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HomeDirectoryMapEntry
 */
const de_HomeDirectoryMapEntry = (output: any, context: __SerdeContext): HomeDirectoryMapEntry => {
  return {
    Entry: __expectString(output.Entry),
    Target: __expectString(output.Target),
  } as any;
};

/**
 * deserializeAws_json1_1HomeDirectoryMappings
 */
const de_HomeDirectoryMappings = (output: any, context: __SerdeContext): HomeDirectoryMapEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HomeDirectoryMapEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IdentityProviderDetails
 */
const de_IdentityProviderDetails = (output: any, context: __SerdeContext): IdentityProviderDetails => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
    Function: __expectString(output.Function),
    InvocationRole: __expectString(output.InvocationRole),
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_json1_1ImportCertificateResponse
 */
const de_ImportCertificateResponse = (output: any, context: __SerdeContext): ImportCertificateResponse => {
  return {
    CertificateId: __expectString(output.CertificateId),
  } as any;
};

/**
 * deserializeAws_json1_1ImportHostKeyResponse
 */
const de_ImportHostKeyResponse = (output: any, context: __SerdeContext): ImportHostKeyResponse => {
  return {
    HostKeyId: __expectString(output.HostKeyId),
    ServerId: __expectString(output.ServerId),
  } as any;
};

/**
 * deserializeAws_json1_1ImportSshPublicKeyResponse
 */
const de_ImportSshPublicKeyResponse = (output: any, context: __SerdeContext): ImportSshPublicKeyResponse => {
  return {
    ServerId: __expectString(output.ServerId),
    SshPublicKeyId: __expectString(output.SshPublicKeyId),
    UserName: __expectString(output.UserName),
  } as any;
};

/**
 * deserializeAws_json1_1InputFileLocation
 */
const de_InputFileLocation = (output: any, context: __SerdeContext): InputFileLocation => {
  return {
    EfsFileLocation: output.EfsFileLocation != null ? de_EfsFileLocation(output.EfsFileLocation, context) : undefined,
    S3FileLocation: output.S3FileLocation != null ? de_S3InputFileLocation(output.S3FileLocation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InternalServiceError
 */
const de_InternalServiceError = (output: any, context: __SerdeContext): InternalServiceError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAccessesResponse
 */
const de_ListAccessesResponse = (output: any, context: __SerdeContext): ListAccessesResponse => {
  return {
    Accesses: output.Accesses != null ? de_ListedAccesses(output.Accesses, context) : undefined,
    NextToken: __expectString(output.NextToken),
    ServerId: __expectString(output.ServerId),
  } as any;
};

/**
 * deserializeAws_json1_1ListAgreementsResponse
 */
const de_ListAgreementsResponse = (output: any, context: __SerdeContext): ListAgreementsResponse => {
  return {
    Agreements: output.Agreements != null ? de_ListedAgreements(output.Agreements, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCertificatesResponse
 */
const de_ListCertificatesResponse = (output: any, context: __SerdeContext): ListCertificatesResponse => {
  return {
    Certificates: output.Certificates != null ? de_ListedCertificates(output.Certificates, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListConnectorsResponse
 */
const de_ListConnectorsResponse = (output: any, context: __SerdeContext): ListConnectorsResponse => {
  return {
    Connectors: output.Connectors != null ? de_ListedConnectors(output.Connectors, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListedAccess
 */
const de_ListedAccess = (output: any, context: __SerdeContext): ListedAccess => {
  return {
    ExternalId: __expectString(output.ExternalId),
    HomeDirectory: __expectString(output.HomeDirectory),
    HomeDirectoryType: __expectString(output.HomeDirectoryType),
    Role: __expectString(output.Role),
  } as any;
};

/**
 * deserializeAws_json1_1ListedAccesses
 */
const de_ListedAccesses = (output: any, context: __SerdeContext): ListedAccess[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedAccess(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListedAgreement
 */
const de_ListedAgreement = (output: any, context: __SerdeContext): ListedAgreement => {
  return {
    AgreementId: __expectString(output.AgreementId),
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    LocalProfileId: __expectString(output.LocalProfileId),
    PartnerProfileId: __expectString(output.PartnerProfileId),
    ServerId: __expectString(output.ServerId),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ListedAgreements
 */
const de_ListedAgreements = (output: any, context: __SerdeContext): ListedAgreement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedAgreement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListedCertificate
 */
const de_ListedCertificate = (output: any, context: __SerdeContext): ListedCertificate => {
  return {
    ActiveDate:
      output.ActiveDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ActiveDate))) : undefined,
    Arn: __expectString(output.Arn),
    CertificateId: __expectString(output.CertificateId),
    Description: __expectString(output.Description),
    InactiveDate:
      output.InactiveDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.InactiveDate)))
        : undefined,
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
    Usage: __expectString(output.Usage),
  } as any;
};

/**
 * deserializeAws_json1_1ListedCertificates
 */
const de_ListedCertificates = (output: any, context: __SerdeContext): ListedCertificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedCertificate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListedConnector
 */
const de_ListedConnector = (output: any, context: __SerdeContext): ListedConnector => {
  return {
    Arn: __expectString(output.Arn),
    ConnectorId: __expectString(output.ConnectorId),
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_json1_1ListedConnectors
 */
const de_ListedConnectors = (output: any, context: __SerdeContext): ListedConnector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedConnector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListedExecution
 */
const de_ListedExecution = (output: any, context: __SerdeContext): ListedExecution => {
  return {
    ExecutionId: __expectString(output.ExecutionId),
    InitialFileLocation:
      output.InitialFileLocation != null ? de_FileLocation(output.InitialFileLocation, context) : undefined,
    ServiceMetadata: output.ServiceMetadata != null ? de_ServiceMetadata(output.ServiceMetadata, context) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ListedExecutions
 */
const de_ListedExecutions = (output: any, context: __SerdeContext): ListedExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedExecution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListedHostKey
 */
const de_ListedHostKey = (output: any, context: __SerdeContext): ListedHostKey => {
  return {
    Arn: __expectString(output.Arn),
    DateImported:
      output.DateImported != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateImported)))
        : undefined,
    Description: __expectString(output.Description),
    Fingerprint: __expectString(output.Fingerprint),
    HostKeyId: __expectString(output.HostKeyId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ListedHostKeys
 */
const de_ListedHostKeys = (output: any, context: __SerdeContext): ListedHostKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedHostKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListedProfile
 */
const de_ListedProfile = (output: any, context: __SerdeContext): ListedProfile => {
  return {
    Arn: __expectString(output.Arn),
    As2Id: __expectString(output.As2Id),
    ProfileId: __expectString(output.ProfileId),
    ProfileType: __expectString(output.ProfileType),
  } as any;
};

/**
 * deserializeAws_json1_1ListedProfiles
 */
const de_ListedProfiles = (output: any, context: __SerdeContext): ListedProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedProfile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListedServer
 */
const de_ListedServer = (output: any, context: __SerdeContext): ListedServer => {
  return {
    Arn: __expectString(output.Arn),
    Domain: __expectString(output.Domain),
    EndpointType: __expectString(output.EndpointType),
    IdentityProviderType: __expectString(output.IdentityProviderType),
    LoggingRole: __expectString(output.LoggingRole),
    ServerId: __expectString(output.ServerId),
    State: __expectString(output.State),
    UserCount: __expectInt32(output.UserCount),
  } as any;
};

/**
 * deserializeAws_json1_1ListedServers
 */
const de_ListedServers = (output: any, context: __SerdeContext): ListedServer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedServer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListedUser
 */
const de_ListedUser = (output: any, context: __SerdeContext): ListedUser => {
  return {
    Arn: __expectString(output.Arn),
    HomeDirectory: __expectString(output.HomeDirectory),
    HomeDirectoryType: __expectString(output.HomeDirectoryType),
    Role: __expectString(output.Role),
    SshPublicKeyCount: __expectInt32(output.SshPublicKeyCount),
    UserName: __expectString(output.UserName),
  } as any;
};

/**
 * deserializeAws_json1_1ListedUsers
 */
const de_ListedUsers = (output: any, context: __SerdeContext): ListedUser[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedUser(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListedWorkflow
 */
const de_ListedWorkflow = (output: any, context: __SerdeContext): ListedWorkflow => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

/**
 * deserializeAws_json1_1ListedWorkflows
 */
const de_ListedWorkflows = (output: any, context: __SerdeContext): ListedWorkflow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListedWorkflow(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListExecutionsResponse
 */
const de_ListExecutionsResponse = (output: any, context: __SerdeContext): ListExecutionsResponse => {
  return {
    Executions: output.Executions != null ? de_ListedExecutions(output.Executions, context) : undefined,
    NextToken: __expectString(output.NextToken),
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

/**
 * deserializeAws_json1_1ListHostKeysResponse
 */
const de_ListHostKeysResponse = (output: any, context: __SerdeContext): ListHostKeysResponse => {
  return {
    HostKeys: output.HostKeys != null ? de_ListedHostKeys(output.HostKeys, context) : undefined,
    NextToken: __expectString(output.NextToken),
    ServerId: __expectString(output.ServerId),
  } as any;
};

/**
 * deserializeAws_json1_1ListProfilesResponse
 */
const de_ListProfilesResponse = (output: any, context: __SerdeContext): ListProfilesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Profiles: output.Profiles != null ? de_ListedProfiles(output.Profiles, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSecurityPoliciesResponse
 */
const de_ListSecurityPoliciesResponse = (output: any, context: __SerdeContext): ListSecurityPoliciesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SecurityPolicyNames:
      output.SecurityPolicyNames != null ? de_SecurityPolicyNames(output.SecurityPolicyNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListServersResponse
 */
const de_ListServersResponse = (output: any, context: __SerdeContext): ListServersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Servers: output.Servers != null ? de_ListedServers(output.Servers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Arn: __expectString(output.Arn),
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListUsersResponse
 */
const de_ListUsersResponse = (output: any, context: __SerdeContext): ListUsersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ServerId: __expectString(output.ServerId),
    Users: output.Users != null ? de_ListedUsers(output.Users, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListWorkflowsResponse
 */
const de_ListWorkflowsResponse = (output: any, context: __SerdeContext): ListWorkflowsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Workflows: output.Workflows != null ? de_ListedWorkflows(output.Workflows, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LoggingConfiguration
 */
const de_LoggingConfiguration = (output: any, context: __SerdeContext): LoggingConfiguration => {
  return {
    LogGroupName: __expectString(output.LogGroupName),
    LoggingRole: __expectString(output.LoggingRole),
  } as any;
};

/**
 * deserializeAws_json1_1OnPartialUploadWorkflowDetails
 */
const de_OnPartialUploadWorkflowDetails = (output: any, context: __SerdeContext): WorkflowDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkflowDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OnUploadWorkflowDetails
 */
const de_OnUploadWorkflowDetails = (output: any, context: __SerdeContext): WorkflowDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkflowDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PosixProfile
 */
const de_PosixProfile = (output: any, context: __SerdeContext): PosixProfile => {
  return {
    Gid: __expectLong(output.Gid),
    SecondaryGids: output.SecondaryGids != null ? de_SecondaryGids(output.SecondaryGids, context) : undefined,
    Uid: __expectLong(output.Uid),
  } as any;
};

/**
 * deserializeAws_json1_1ProtocolDetails
 */
const de_ProtocolDetails = (output: any, context: __SerdeContext): ProtocolDetails => {
  return {
    As2Transports: output.As2Transports != null ? de_As2Transports(output.As2Transports, context) : undefined,
    PassiveIp: __expectString(output.PassiveIp),
    SetStatOption: __expectString(output.SetStatOption),
    TlsSessionResumptionMode: __expectString(output.TlsSessionResumptionMode),
  } as any;
};

/**
 * deserializeAws_json1_1Protocols
 */
const de_Protocols = (output: any, context: __SerdeContext): (Protocol | string)[] => {
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
 * deserializeAws_json1_1ResourceExistsException
 */
const de_ResourceExistsException = (output: any, context: __SerdeContext): ResourceExistsException => {
  return {
    Message: __expectString(output.Message),
    Resource: __expectString(output.Resource),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    Resource: __expectString(output.Resource),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1S3FileLocation
 */
const de_S3FileLocation = (output: any, context: __SerdeContext): S3FileLocation => {
  return {
    Bucket: __expectString(output.Bucket),
    Etag: __expectString(output.Etag),
    Key: __expectString(output.Key),
    VersionId: __expectString(output.VersionId),
  } as any;
};

/**
 * deserializeAws_json1_1S3InputFileLocation
 */
const de_S3InputFileLocation = (output: any, context: __SerdeContext): S3InputFileLocation => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
  } as any;
};

/**
 * deserializeAws_json1_1S3Tag
 */
const de_S3Tag = (output: any, context: __SerdeContext): S3Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1S3Tags
 */
const de_S3Tags = (output: any, context: __SerdeContext): S3Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_S3Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SecondaryGids
 */
const de_SecondaryGids = (output: any, context: __SerdeContext): number[] => {
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
 * deserializeAws_json1_1SecurityGroupIds
 */
const de_SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1SecurityPolicyNames
 */
const de_SecurityPolicyNames = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1SecurityPolicyOptions
 */
const de_SecurityPolicyOptions = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1SendWorkflowStepStateResponse
 */
const de_SendWorkflowStepStateResponse = (output: any, context: __SerdeContext): SendWorkflowStepStateResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ServiceMetadata
 */
const de_ServiceMetadata = (output: any, context: __SerdeContext): ServiceMetadata => {
  return {
    UserDetails: output.UserDetails != null ? de_UserDetails(output.UserDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServiceUnavailableException
 */
const de_ServiceUnavailableException = (output: any, context: __SerdeContext): ServiceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1SshPublicKey
 */
const de_SshPublicKey = (output: any, context: __SerdeContext): SshPublicKey => {
  return {
    DateImported:
      output.DateImported != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateImported)))
        : undefined,
    SshPublicKeyBody: __expectString(output.SshPublicKeyBody),
    SshPublicKeyId: __expectString(output.SshPublicKeyId),
  } as any;
};

/**
 * deserializeAws_json1_1SshPublicKeys
 */
const de_SshPublicKeys = (output: any, context: __SerdeContext): SshPublicKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SshPublicKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartFileTransferResponse
 */
const de_StartFileTransferResponse = (output: any, context: __SerdeContext): StartFileTransferResponse => {
  return {
    TransferId: __expectString(output.TransferId),
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
 * deserializeAws_json1_1TagStepDetails
 */
const de_TagStepDetails = (output: any, context: __SerdeContext): TagStepDetails => {
  return {
    Name: __expectString(output.Name),
    SourceFileLocation: __expectString(output.SourceFileLocation),
    Tags: output.Tags != null ? de_S3Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TestIdentityProviderResponse
 */
const de_TestIdentityProviderResponse = (output: any, context: __SerdeContext): TestIdentityProviderResponse => {
  return {
    Message: __expectString(output.Message),
    Response: __expectString(output.Response),
    StatusCode: __expectInt32(output.StatusCode),
    Url: __expectString(output.Url),
  } as any;
};

/**
 * deserializeAws_json1_1ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    RetryAfterSeconds: __expectString(output.RetryAfterSeconds),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateAccessResponse
 */
const de_UpdateAccessResponse = (output: any, context: __SerdeContext): UpdateAccessResponse => {
  return {
    ExternalId: __expectString(output.ExternalId),
    ServerId: __expectString(output.ServerId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateAgreementResponse
 */
const de_UpdateAgreementResponse = (output: any, context: __SerdeContext): UpdateAgreementResponse => {
  return {
    AgreementId: __expectString(output.AgreementId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateCertificateResponse
 */
const de_UpdateCertificateResponse = (output: any, context: __SerdeContext): UpdateCertificateResponse => {
  return {
    CertificateId: __expectString(output.CertificateId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateConnectorResponse
 */
const de_UpdateConnectorResponse = (output: any, context: __SerdeContext): UpdateConnectorResponse => {
  return {
    ConnectorId: __expectString(output.ConnectorId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateHostKeyResponse
 */
const de_UpdateHostKeyResponse = (output: any, context: __SerdeContext): UpdateHostKeyResponse => {
  return {
    HostKeyId: __expectString(output.HostKeyId),
    ServerId: __expectString(output.ServerId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateProfileResponse
 */
const de_UpdateProfileResponse = (output: any, context: __SerdeContext): UpdateProfileResponse => {
  return {
    ProfileId: __expectString(output.ProfileId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateServerResponse
 */
const de_UpdateServerResponse = (output: any, context: __SerdeContext): UpdateServerResponse => {
  return {
    ServerId: __expectString(output.ServerId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateUserResponse
 */
const de_UpdateUserResponse = (output: any, context: __SerdeContext): UpdateUserResponse => {
  return {
    ServerId: __expectString(output.ServerId),
    UserName: __expectString(output.UserName),
  } as any;
};

/**
 * deserializeAws_json1_1UserDetails
 */
const de_UserDetails = (output: any, context: __SerdeContext): UserDetails => {
  return {
    ServerId: __expectString(output.ServerId),
    SessionId: __expectString(output.SessionId),
    UserName: __expectString(output.UserName),
  } as any;
};

/**
 * deserializeAws_json1_1WorkflowDetail
 */
const de_WorkflowDetail = (output: any, context: __SerdeContext): WorkflowDetail => {
  return {
    ExecutionRole: __expectString(output.ExecutionRole),
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

/**
 * deserializeAws_json1_1WorkflowDetails
 */
const de_WorkflowDetails = (output: any, context: __SerdeContext): WorkflowDetails => {
  return {
    OnPartialUpload:
      output.OnPartialUpload != null ? de_OnPartialUploadWorkflowDetails(output.OnPartialUpload, context) : undefined,
    OnUpload: output.OnUpload != null ? de_OnUploadWorkflowDetails(output.OnUpload, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1WorkflowStep
 */
const de_WorkflowStep = (output: any, context: __SerdeContext): WorkflowStep => {
  return {
    CopyStepDetails: output.CopyStepDetails != null ? de_CopyStepDetails(output.CopyStepDetails, context) : undefined,
    CustomStepDetails:
      output.CustomStepDetails != null ? de_CustomStepDetails(output.CustomStepDetails, context) : undefined,
    DecryptStepDetails:
      output.DecryptStepDetails != null ? de_DecryptStepDetails(output.DecryptStepDetails, context) : undefined,
    DeleteStepDetails:
      output.DeleteStepDetails != null ? de_DeleteStepDetails(output.DeleteStepDetails, context) : undefined,
    TagStepDetails: output.TagStepDetails != null ? de_TagStepDetails(output.TagStepDetails, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1WorkflowSteps
 */
const de_WorkflowSteps = (output: any, context: __SerdeContext): WorkflowStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkflowStep(entry, context);
    });
  return retVal;
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `TransferService.${operation}`,
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
