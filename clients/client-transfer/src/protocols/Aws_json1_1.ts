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

export const serializeAws_json1_1CreateAccessCommand = async (
  input: CreateAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.CreateAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAgreementCommand = async (
  input: CreateAgreementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.CreateAgreement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAgreementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateConnectorCommand = async (
  input: CreateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.CreateConnector",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateConnectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProfileCommand = async (
  input: CreateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.CreateProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateServerCommand = async (
  input: CreateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.CreateServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.CreateUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateWorkflowCommand = async (
  input: CreateWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.CreateWorkflow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateWorkflowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAccessCommand = async (
  input: DeleteAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAgreementCommand = async (
  input: DeleteAgreementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteAgreement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAgreementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCertificateCommand = async (
  input: DeleteCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConnectorCommand = async (
  input: DeleteConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteConnector",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConnectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteHostKeyCommand = async (
  input: DeleteHostKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteHostKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteHostKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProfileCommand = async (
  input: DeleteProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteServerCommand = async (
  input: DeleteServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSshPublicKeyCommand = async (
  input: DeleteSshPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteSshPublicKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSshPublicKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteWorkflowCommand = async (
  input: DeleteWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DeleteWorkflow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteWorkflowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAccessCommand = async (
  input: DescribeAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAgreementCommand = async (
  input: DescribeAgreementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeAgreement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAgreementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCertificateCommand = async (
  input: DescribeCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConnectorCommand = async (
  input: DescribeConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeConnector",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConnectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeExecutionCommand = async (
  input: DescribeExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeHostKeyCommand = async (
  input: DescribeHostKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeHostKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeHostKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProfileCommand = async (
  input: DescribeProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSecurityPolicyCommand = async (
  input: DescribeSecurityPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeSecurityPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSecurityPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeServerCommand = async (
  input: DescribeServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeWorkflowCommand = async (
  input: DescribeWorkflowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.DescribeWorkflow",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeWorkflowRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportCertificateCommand = async (
  input: ImportCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ImportCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportHostKeyCommand = async (
  input: ImportHostKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ImportHostKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportHostKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportSshPublicKeyCommand = async (
  input: ImportSshPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ImportSshPublicKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportSshPublicKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAccessesCommand = async (
  input: ListAccessesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListAccesses",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAccessesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAgreementsCommand = async (
  input: ListAgreementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListAgreements",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAgreementsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCertificatesCommand = async (
  input: ListCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListCertificates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCertificatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListConnectorsCommand = async (
  input: ListConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListConnectors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListConnectorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListExecutionsCommand = async (
  input: ListExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListHostKeysCommand = async (
  input: ListHostKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListHostKeys",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListHostKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProfilesCommand = async (
  input: ListProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListProfiles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListProfilesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSecurityPoliciesCommand = async (
  input: ListSecurityPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListSecurityPolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSecurityPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServersCommand = async (
  input: ListServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListServers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListServersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListUsers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListWorkflowsCommand = async (
  input: ListWorkflowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.ListWorkflows",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListWorkflowsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SendWorkflowStepStateCommand = async (
  input: SendWorkflowStepStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.SendWorkflowStepState",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SendWorkflowStepStateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartFileTransferCommand = async (
  input: StartFileTransferCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.StartFileTransfer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartFileTransferRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartServerCommand = async (
  input: StartServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.StartServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopServerCommand = async (
  input: StopServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.StopServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TestIdentityProviderCommand = async (
  input: TestIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.TestIdentityProvider",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TestIdentityProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAccessCommand = async (
  input: UpdateAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.UpdateAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAgreementCommand = async (
  input: UpdateAgreementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.UpdateAgreement",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAgreementRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCertificateCommand = async (
  input: UpdateCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.UpdateCertificate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateConnectorCommand = async (
  input: UpdateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.UpdateConnector",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateConnectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateHostKeyCommand = async (
  input: UpdateHostKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.UpdateHostKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateHostKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateProfileCommand = async (
  input: UpdateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.UpdateProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateServerCommand = async (
  input: UpdateServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.UpdateServer",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "TransferService.UpdateUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAccessResponse(data, context);
  const response: CreateAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAccessCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      throw await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateAgreementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAgreementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAgreementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAgreementResponse(data, context);
  const response: CreateAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAgreementCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      throw await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateConnectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateConnectorResponse(data, context);
  const response: CreateConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateConnectorCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      throw await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProfileResponse(data, context);
  const response: CreateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProfileCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateServerResponse(data, context);
  const response: CreateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateServerCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      throw await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserResponse(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUserCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      throw await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateWorkflowResponse(data, context);
  const response: CreateWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateWorkflowCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      throw await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAccessCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAccessCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAgreementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAgreementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAgreementCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAgreementCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCertificateCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConnectorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConnectorCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteHostKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHostKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteHostKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteHostKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteHostKeyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProfileCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteServerCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteSshPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSshPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSshPublicKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSshPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSshPublicKeyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUserCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUserCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteWorkflowCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteWorkflowCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccessResponse(data, context);
  const response: DescribeAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAccessCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAgreementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAgreementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAgreementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAgreementResponse(data, context);
  const response: DescribeAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAgreementCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCertificateResponse(data, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConnectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConnectorResponse(data, context);
  const response: DescribeConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConnectorCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeExecutionResponse(data, context);
  const response: DescribeExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeExecutionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeHostKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHostKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeHostKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeHostKeyResponse(data, context);
  const response: DescribeHostKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeHostKeyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProfileResponse(data, context);
  const response: DescribeProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeProfileCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeSecurityPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSecurityPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSecurityPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSecurityPolicyResponse(data, context);
  const response: DescribeSecurityPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSecurityPolicyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServerResponse(data, context);
  const response: DescribeServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeServerCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUserResponse(data, context);
  const response: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUserCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeWorkflowCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeWorkflowCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeWorkflowResponse(data, context);
  const response: DescribeWorkflowCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeWorkflowCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportCertificateResponse(data, context);
  const response: ImportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportCertificateCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportHostKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportHostKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportHostKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportHostKeyResponse(data, context);
  const response: ImportHostKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportHostKeyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      throw await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportSshPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportSshPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportSshPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportSshPublicKeyResponse(data, context);
  const response: ImportSshPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportSshPublicKeyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      throw await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAccessesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAccessesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAccessesResponse(data, context);
  const response: ListAccessesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAccessesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAgreementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAgreementsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAgreementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAgreementsResponse(data, context);
  const response: ListAgreementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAgreementsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCertificatesResponse(data, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListConnectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListConnectorsResponse(data, context);
  const response: ListConnectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListConnectorsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListExecutionsResponse(data, context);
  const response: ListExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListExecutionsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListHostKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHostKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListHostKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListHostKeysResponse(data, context);
  const response: ListHostKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListHostKeysCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProfilesResponse(data, context);
  const response: ListProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProfilesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListSecurityPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSecurityPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSecurityPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSecurityPoliciesResponse(data, context);
  const response: ListSecurityPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSecurityPoliciesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListServersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServersResponse(data, context);
  const response: ListServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListServersCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUsersResponse(data, context);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListUsersCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListWorkflowsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListWorkflowsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListWorkflowsResponse(data, context);
  const response: ListWorkflowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListWorkflowsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.transfer#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SendWorkflowStepStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendWorkflowStepStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SendWorkflowStepStateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SendWorkflowStepStateResponse(data, context);
  const response: SendWorkflowStepStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SendWorkflowStepStateCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartFileTransferCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFileTransferCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartFileTransferCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartFileTransferResponse(data, context);
  const response: StartFileTransferCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartFileTransferCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartServerCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopServerCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TestIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestIdentityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TestIdentityProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestIdentityProviderResponse(data, context);
  const response: TestIdentityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TestIdentityProviderCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAccessResponse(data, context);
  const response: UpdateAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAccessCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      throw await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateAgreementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgreementCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAgreementCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAgreementResponse(data, context);
  const response: UpdateAgreementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAgreementCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      throw await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCertificateResponse(data, context);
  const response: UpdateCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCertificateCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateConnectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateConnectorResponse(data, context);
  const response: UpdateConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateConnectorCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      throw await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateHostKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHostKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateHostKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateHostKeyResponse(data, context);
  const response: UpdateHostKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateHostKeyCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateProfileResponse(data, context);
  const response: UpdateProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateProfileCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServerResponse(data, context);
  const response: UpdateServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateServerCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.transfer#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.transfer#InternalServiceError":
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.transfer#ResourceExistsException":
      throw await deserializeAws_json1_1ResourceExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateUserResponse(data, context);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateUserCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.transfer#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.transfer#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.transfer#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.transfer#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServiceErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceError(body, context);
  const exception = new InternalServiceError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceExistsException(body, context);
  const exception = new ResourceExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(body, context);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AddressAllocationIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1As2ConnectorConfig = (input: As2ConnectorConfig, context: __SerdeContext): any => {
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

const serializeAws_json1_1As2Transports = (input: (As2Transport | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CertificateIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CopyStepDetails = (input: CopyStepDetails, context: __SerdeContext): any => {
  return {
    ...(input.DestinationFileLocation != null && {
      DestinationFileLocation: serializeAws_json1_1InputFileLocation(input.DestinationFileLocation, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OverwriteExisting != null && { OverwriteExisting: input.OverwriteExisting }),
    ...(input.SourceFileLocation != null && { SourceFileLocation: input.SourceFileLocation }),
  };
};

const serializeAws_json1_1CreateAccessRequest = (input: CreateAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExternalId != null && { ExternalId: input.ExternalId }),
    ...(input.HomeDirectory != null && { HomeDirectory: input.HomeDirectory }),
    ...(input.HomeDirectoryMappings != null && {
      HomeDirectoryMappings: serializeAws_json1_1HomeDirectoryMappings(input.HomeDirectoryMappings, context),
    }),
    ...(input.HomeDirectoryType != null && { HomeDirectoryType: input.HomeDirectoryType }),
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.PosixProfile != null && { PosixProfile: serializeAws_json1_1PosixProfile(input.PosixProfile, context) }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1CreateAgreementRequest = (input: CreateAgreementRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessRole != null && { AccessRole: input.AccessRole }),
    ...(input.BaseDirectory != null && { BaseDirectory: input.BaseDirectory }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LocalProfileId != null && { LocalProfileId: input.LocalProfileId }),
    ...(input.PartnerProfileId != null && { PartnerProfileId: input.PartnerProfileId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateConnectorRequest = (input: CreateConnectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessRole != null && { AccessRole: input.AccessRole }),
    ...(input.As2Config != null && { As2Config: serializeAws_json1_1As2ConnectorConfig(input.As2Config, context) }),
    ...(input.LoggingRole != null && { LoggingRole: input.LoggingRole }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

const serializeAws_json1_1CreateProfileRequest = (input: CreateProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.As2Id != null && { As2Id: input.As2Id }),
    ...(input.CertificateIds != null && {
      CertificateIds: serializeAws_json1_1CertificateIds(input.CertificateIds, context),
    }),
    ...(input.ProfileType != null && { ProfileType: input.ProfileType }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateServerRequest = (input: CreateServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.EndpointDetails != null && {
      EndpointDetails: serializeAws_json1_1EndpointDetails(input.EndpointDetails, context),
    }),
    ...(input.EndpointType != null && { EndpointType: input.EndpointType }),
    ...(input.HostKey != null && { HostKey: input.HostKey }),
    ...(input.IdentityProviderDetails != null && {
      IdentityProviderDetails: serializeAws_json1_1IdentityProviderDetails(input.IdentityProviderDetails, context),
    }),
    ...(input.IdentityProviderType != null && { IdentityProviderType: input.IdentityProviderType }),
    ...(input.LoggingRole != null && { LoggingRole: input.LoggingRole }),
    ...(input.PostAuthenticationLoginBanner != null && {
      PostAuthenticationLoginBanner: input.PostAuthenticationLoginBanner,
    }),
    ...(input.PreAuthenticationLoginBanner != null && {
      PreAuthenticationLoginBanner: input.PreAuthenticationLoginBanner,
    }),
    ...(input.ProtocolDetails != null && {
      ProtocolDetails: serializeAws_json1_1ProtocolDetails(input.ProtocolDetails, context),
    }),
    ...(input.Protocols != null && { Protocols: serializeAws_json1_1Protocols(input.Protocols, context) }),
    ...(input.SecurityPolicyName != null && { SecurityPolicyName: input.SecurityPolicyName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.WorkflowDetails != null && {
      WorkflowDetails: serializeAws_json1_1WorkflowDetails(input.WorkflowDetails, context),
    }),
  };
};

const serializeAws_json1_1CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.HomeDirectory != null && { HomeDirectory: input.HomeDirectory }),
    ...(input.HomeDirectoryMappings != null && {
      HomeDirectoryMappings: serializeAws_json1_1HomeDirectoryMappings(input.HomeDirectoryMappings, context),
    }),
    ...(input.HomeDirectoryType != null && { HomeDirectoryType: input.HomeDirectoryType }),
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.PosixProfile != null && { PosixProfile: serializeAws_json1_1PosixProfile(input.PosixProfile, context) }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.SshPublicKeyBody != null && { SshPublicKeyBody: input.SshPublicKeyBody }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1CreateWorkflowRequest = (input: CreateWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.OnExceptionSteps != null && {
      OnExceptionSteps: serializeAws_json1_1WorkflowSteps(input.OnExceptionSteps, context),
    }),
    ...(input.Steps != null && { Steps: serializeAws_json1_1WorkflowSteps(input.Steps, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CustomStepDetails = (input: CustomStepDetails, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SourceFileLocation != null && { SourceFileLocation: input.SourceFileLocation }),
    ...(input.Target != null && { Target: input.Target }),
    ...(input.TimeoutSeconds != null && { TimeoutSeconds: input.TimeoutSeconds }),
  };
};

const serializeAws_json1_1DecryptStepDetails = (input: DecryptStepDetails, context: __SerdeContext): any => {
  return {
    ...(input.DestinationFileLocation != null && {
      DestinationFileLocation: serializeAws_json1_1InputFileLocation(input.DestinationFileLocation, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OverwriteExisting != null && { OverwriteExisting: input.OverwriteExisting }),
    ...(input.SourceFileLocation != null && { SourceFileLocation: input.SourceFileLocation }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DeleteAccessRequest = (input: DeleteAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExternalId != null && { ExternalId: input.ExternalId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1DeleteAgreementRequest = (input: DeleteAgreementRequest, context: __SerdeContext): any => {
  return {
    ...(input.AgreementId != null && { AgreementId: input.AgreementId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1DeleteCertificateRequest = (
  input: DeleteCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateId != null && { CertificateId: input.CertificateId }),
  };
};

const serializeAws_json1_1DeleteConnectorRequest = (input: DeleteConnectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectorId != null && { ConnectorId: input.ConnectorId }),
  };
};

const serializeAws_json1_1DeleteHostKeyRequest = (input: DeleteHostKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.HostKeyId != null && { HostKeyId: input.HostKeyId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1DeleteProfileRequest = (input: DeleteProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProfileId != null && { ProfileId: input.ProfileId }),
  };
};

const serializeAws_json1_1DeleteServerRequest = (input: DeleteServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1DeleteSshPublicKeyRequest = (
  input: DeleteSshPublicKeyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.SshPublicKeyId != null && { SshPublicKeyId: input.SshPublicKeyId }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DeleteStepDetails = (input: DeleteStepDetails, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SourceFileLocation != null && { SourceFileLocation: input.SourceFileLocation }),
  };
};

const serializeAws_json1_1DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DeleteWorkflowRequest = (input: DeleteWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkflowId != null && { WorkflowId: input.WorkflowId }),
  };
};

const serializeAws_json1_1DescribeAccessRequest = (input: DescribeAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExternalId != null && { ExternalId: input.ExternalId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1DescribeAgreementRequest = (
  input: DescribeAgreementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AgreementId != null && { AgreementId: input.AgreementId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1DescribeCertificateRequest = (
  input: DescribeCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateId != null && { CertificateId: input.CertificateId }),
  };
};

const serializeAws_json1_1DescribeConnectorRequest = (
  input: DescribeConnectorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectorId != null && { ConnectorId: input.ConnectorId }),
  };
};

const serializeAws_json1_1DescribeExecutionRequest = (
  input: DescribeExecutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExecutionId != null && { ExecutionId: input.ExecutionId }),
    ...(input.WorkflowId != null && { WorkflowId: input.WorkflowId }),
  };
};

const serializeAws_json1_1DescribeHostKeyRequest = (input: DescribeHostKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.HostKeyId != null && { HostKeyId: input.HostKeyId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1DescribeProfileRequest = (input: DescribeProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProfileId != null && { ProfileId: input.ProfileId }),
  };
};

const serializeAws_json1_1DescribeSecurityPolicyRequest = (
  input: DescribeSecurityPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityPolicyName != null && { SecurityPolicyName: input.SecurityPolicyName }),
  };
};

const serializeAws_json1_1DescribeServerRequest = (input: DescribeServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1DescribeUserRequest = (input: DescribeUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1DescribeWorkflowRequest = (input: DescribeWorkflowRequest, context: __SerdeContext): any => {
  return {
    ...(input.WorkflowId != null && { WorkflowId: input.WorkflowId }),
  };
};

const serializeAws_json1_1EfsFileLocation = (input: EfsFileLocation, context: __SerdeContext): any => {
  return {
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.Path != null && { Path: input.Path }),
  };
};

const serializeAws_json1_1EndpointDetails = (input: EndpointDetails, context: __SerdeContext): any => {
  return {
    ...(input.AddressAllocationIds != null && {
      AddressAllocationIds: serializeAws_json1_1AddressAllocationIds(input.AddressAllocationIds, context),
    }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    ...(input.VpcEndpointId != null && { VpcEndpointId: input.VpcEndpointId }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_json1_1FilePaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1HomeDirectoryMapEntry = (input: HomeDirectoryMapEntry, context: __SerdeContext): any => {
  return {
    ...(input.Entry != null && { Entry: input.Entry }),
    ...(input.Target != null && { Target: input.Target }),
  };
};

const serializeAws_json1_1HomeDirectoryMappings = (input: HomeDirectoryMapEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1HomeDirectoryMapEntry(entry, context);
    });
};

const serializeAws_json1_1IdentityProviderDetails = (input: IdentityProviderDetails, context: __SerdeContext): any => {
  return {
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Function != null && { Function: input.Function }),
    ...(input.InvocationRole != null && { InvocationRole: input.InvocationRole }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

const serializeAws_json1_1ImportCertificateRequest = (
  input: ImportCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActiveDate != null && { ActiveDate: Math.round(input.ActiveDate.getTime() / 1000) }),
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.CertificateChain != null && { CertificateChain: input.CertificateChain }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InactiveDate != null && { InactiveDate: Math.round(input.InactiveDate.getTime() / 1000) }),
    ...(input.PrivateKey != null && { PrivateKey: input.PrivateKey }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.Usage != null && { Usage: input.Usage }),
  };
};

const serializeAws_json1_1ImportHostKeyRequest = (input: ImportHostKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HostKeyBody != null && { HostKeyBody: input.HostKeyBody }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1ImportSshPublicKeyRequest = (
  input: ImportSshPublicKeyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.SshPublicKeyBody != null && { SshPublicKeyBody: input.SshPublicKeyBody }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1InputFileLocation = (input: InputFileLocation, context: __SerdeContext): any => {
  return {
    ...(input.EfsFileLocation != null && {
      EfsFileLocation: serializeAws_json1_1EfsFileLocation(input.EfsFileLocation, context),
    }),
    ...(input.S3FileLocation != null && {
      S3FileLocation: serializeAws_json1_1S3InputFileLocation(input.S3FileLocation, context),
    }),
  };
};

const serializeAws_json1_1ListAccessesRequest = (input: ListAccessesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1ListAgreementsRequest = (input: ListAgreementsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1ListCertificatesRequest = (input: ListCertificatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListConnectorsRequest = (input: ListConnectorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListExecutionsRequest = (input: ListExecutionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.WorkflowId != null && { WorkflowId: input.WorkflowId }),
  };
};

const serializeAws_json1_1ListHostKeysRequest = (input: ListHostKeysRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1ListProfilesRequest = (input: ListProfilesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProfileType != null && { ProfileType: input.ProfileType }),
  };
};

const serializeAws_json1_1ListSecurityPoliciesRequest = (
  input: ListSecurityPoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListServersRequest = (input: ListServersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListUsersRequest = (input: ListUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1ListWorkflowsRequest = (input: ListWorkflowsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1OnPartialUploadWorkflowDetails = (input: WorkflowDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1WorkflowDetail(entry, context);
    });
};

const serializeAws_json1_1OnUploadWorkflowDetails = (input: WorkflowDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1WorkflowDetail(entry, context);
    });
};

const serializeAws_json1_1PosixProfile = (input: PosixProfile, context: __SerdeContext): any => {
  return {
    ...(input.Gid != null && { Gid: input.Gid }),
    ...(input.SecondaryGids != null && {
      SecondaryGids: serializeAws_json1_1SecondaryGids(input.SecondaryGids, context),
    }),
    ...(input.Uid != null && { Uid: input.Uid }),
  };
};

const serializeAws_json1_1ProtocolDetails = (input: ProtocolDetails, context: __SerdeContext): any => {
  return {
    ...(input.As2Transports != null && {
      As2Transports: serializeAws_json1_1As2Transports(input.As2Transports, context),
    }),
    ...(input.PassiveIp != null && { PassiveIp: input.PassiveIp }),
    ...(input.SetStatOption != null && { SetStatOption: input.SetStatOption }),
    ...(input.TlsSessionResumptionMode != null && { TlsSessionResumptionMode: input.TlsSessionResumptionMode }),
  };
};

const serializeAws_json1_1Protocols = (input: (Protocol | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1S3InputFileLocation = (input: S3InputFileLocation, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Key != null && { Key: input.Key }),
  };
};

const serializeAws_json1_1S3Tag = (input: S3Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1S3Tags = (input: S3Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1S3Tag(entry, context);
    });
};

const serializeAws_json1_1SecondaryGids = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SendWorkflowStepStateRequest = (
  input: SendWorkflowStepStateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExecutionId != null && { ExecutionId: input.ExecutionId }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Token != null && { Token: input.Token }),
    ...(input.WorkflowId != null && { WorkflowId: input.WorkflowId }),
  };
};

const serializeAws_json1_1StartFileTransferRequest = (
  input: StartFileTransferRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectorId != null && { ConnectorId: input.ConnectorId }),
    ...(input.SendFilePaths != null && { SendFilePaths: serializeAws_json1_1FilePaths(input.SendFilePaths, context) }),
  };
};

const serializeAws_json1_1StartServerRequest = (input: StartServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1StopServerRequest = (input: StopServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagStepDetails = (input: TagStepDetails, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SourceFileLocation != null && { SourceFileLocation: input.SourceFileLocation }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1S3Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1TestIdentityProviderRequest = (
  input: TestIdentityProviderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.ServerProtocol != null && { ServerProtocol: input.ServerProtocol }),
    ...(input.SourceIp != null && { SourceIp: input.SourceIp }),
    ...(input.UserName != null && { UserName: input.UserName }),
    ...(input.UserPassword != null && { UserPassword: input.UserPassword }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateAccessRequest = (input: UpdateAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExternalId != null && { ExternalId: input.ExternalId }),
    ...(input.HomeDirectory != null && { HomeDirectory: input.HomeDirectory }),
    ...(input.HomeDirectoryMappings != null && {
      HomeDirectoryMappings: serializeAws_json1_1HomeDirectoryMappings(input.HomeDirectoryMappings, context),
    }),
    ...(input.HomeDirectoryType != null && { HomeDirectoryType: input.HomeDirectoryType }),
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.PosixProfile != null && { PosixProfile: serializeAws_json1_1PosixProfile(input.PosixProfile, context) }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1UpdateAgreementRequest = (input: UpdateAgreementRequest, context: __SerdeContext): any => {
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

const serializeAws_json1_1UpdateCertificateRequest = (
  input: UpdateCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActiveDate != null && { ActiveDate: Math.round(input.ActiveDate.getTime() / 1000) }),
    ...(input.CertificateId != null && { CertificateId: input.CertificateId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InactiveDate != null && { InactiveDate: Math.round(input.InactiveDate.getTime() / 1000) }),
  };
};

const serializeAws_json1_1UpdateConnectorRequest = (input: UpdateConnectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessRole != null && { AccessRole: input.AccessRole }),
    ...(input.As2Config != null && { As2Config: serializeAws_json1_1As2ConnectorConfig(input.As2Config, context) }),
    ...(input.ConnectorId != null && { ConnectorId: input.ConnectorId }),
    ...(input.LoggingRole != null && { LoggingRole: input.LoggingRole }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

const serializeAws_json1_1UpdateHostKeyRequest = (input: UpdateHostKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HostKeyId != null && { HostKeyId: input.HostKeyId }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
  };
};

const serializeAws_json1_1UpdateProfileRequest = (input: UpdateProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.CertificateIds != null && {
      CertificateIds: serializeAws_json1_1CertificateIds(input.CertificateIds, context),
    }),
    ...(input.ProfileId != null && { ProfileId: input.ProfileId }),
  };
};

const serializeAws_json1_1UpdateServerRequest = (input: UpdateServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.EndpointDetails != null && {
      EndpointDetails: serializeAws_json1_1EndpointDetails(input.EndpointDetails, context),
    }),
    ...(input.EndpointType != null && { EndpointType: input.EndpointType }),
    ...(input.HostKey != null && { HostKey: input.HostKey }),
    ...(input.IdentityProviderDetails != null && {
      IdentityProviderDetails: serializeAws_json1_1IdentityProviderDetails(input.IdentityProviderDetails, context),
    }),
    ...(input.LoggingRole != null && { LoggingRole: input.LoggingRole }),
    ...(input.PostAuthenticationLoginBanner != null && {
      PostAuthenticationLoginBanner: input.PostAuthenticationLoginBanner,
    }),
    ...(input.PreAuthenticationLoginBanner != null && {
      PreAuthenticationLoginBanner: input.PreAuthenticationLoginBanner,
    }),
    ...(input.ProtocolDetails != null && {
      ProtocolDetails: serializeAws_json1_1ProtocolDetails(input.ProtocolDetails, context),
    }),
    ...(input.Protocols != null && { Protocols: serializeAws_json1_1Protocols(input.Protocols, context) }),
    ...(input.SecurityPolicyName != null && { SecurityPolicyName: input.SecurityPolicyName }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.WorkflowDetails != null && {
      WorkflowDetails: serializeAws_json1_1WorkflowDetails(input.WorkflowDetails, context),
    }),
  };
};

const serializeAws_json1_1UpdateUserRequest = (input: UpdateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.HomeDirectory != null && { HomeDirectory: input.HomeDirectory }),
    ...(input.HomeDirectoryMappings != null && {
      HomeDirectoryMappings: serializeAws_json1_1HomeDirectoryMappings(input.HomeDirectoryMappings, context),
    }),
    ...(input.HomeDirectoryType != null && { HomeDirectoryType: input.HomeDirectoryType }),
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.PosixProfile != null && { PosixProfile: serializeAws_json1_1PosixProfile(input.PosixProfile, context) }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.ServerId != null && { ServerId: input.ServerId }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1WorkflowDetail = (input: WorkflowDetail, context: __SerdeContext): any => {
  return {
    ...(input.ExecutionRole != null && { ExecutionRole: input.ExecutionRole }),
    ...(input.WorkflowId != null && { WorkflowId: input.WorkflowId }),
  };
};

const serializeAws_json1_1WorkflowDetails = (input: WorkflowDetails, context: __SerdeContext): any => {
  return {
    ...(input.OnPartialUpload != null && {
      OnPartialUpload: serializeAws_json1_1OnPartialUploadWorkflowDetails(input.OnPartialUpload, context),
    }),
    ...(input.OnUpload != null && { OnUpload: serializeAws_json1_1OnUploadWorkflowDetails(input.OnUpload, context) }),
  };
};

const serializeAws_json1_1WorkflowStep = (input: WorkflowStep, context: __SerdeContext): any => {
  return {
    ...(input.CopyStepDetails != null && {
      CopyStepDetails: serializeAws_json1_1CopyStepDetails(input.CopyStepDetails, context),
    }),
    ...(input.CustomStepDetails != null && {
      CustomStepDetails: serializeAws_json1_1CustomStepDetails(input.CustomStepDetails, context),
    }),
    ...(input.DecryptStepDetails != null && {
      DecryptStepDetails: serializeAws_json1_1DecryptStepDetails(input.DecryptStepDetails, context),
    }),
    ...(input.DeleteStepDetails != null && {
      DeleteStepDetails: serializeAws_json1_1DeleteStepDetails(input.DeleteStepDetails, context),
    }),
    ...(input.TagStepDetails != null && {
      TagStepDetails: serializeAws_json1_1TagStepDetails(input.TagStepDetails, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1WorkflowSteps = (input: WorkflowStep[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1WorkflowStep(entry, context);
    });
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AddressAllocationIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1As2ConnectorConfig = (output: any, context: __SerdeContext): As2ConnectorConfig => {
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

const deserializeAws_json1_1As2Transports = (output: any, context: __SerdeContext): (As2Transport | string)[] => {
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

const deserializeAws_json1_1CertificateIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CopyStepDetails = (output: any, context: __SerdeContext): CopyStepDetails => {
  return {
    DestinationFileLocation:
      output.DestinationFileLocation != null
        ? deserializeAws_json1_1InputFileLocation(output.DestinationFileLocation, context)
        : undefined,
    Name: __expectString(output.Name),
    OverwriteExisting: __expectString(output.OverwriteExisting),
    SourceFileLocation: __expectString(output.SourceFileLocation),
  } as any;
};

const deserializeAws_json1_1CreateAccessResponse = (output: any, context: __SerdeContext): CreateAccessResponse => {
  return {
    ExternalId: __expectString(output.ExternalId),
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1CreateAgreementResponse = (
  output: any,
  context: __SerdeContext
): CreateAgreementResponse => {
  return {
    AgreementId: __expectString(output.AgreementId),
  } as any;
};

const deserializeAws_json1_1CreateConnectorResponse = (
  output: any,
  context: __SerdeContext
): CreateConnectorResponse => {
  return {
    ConnectorId: __expectString(output.ConnectorId),
  } as any;
};

const deserializeAws_json1_1CreateProfileResponse = (output: any, context: __SerdeContext): CreateProfileResponse => {
  return {
    ProfileId: __expectString(output.ProfileId),
  } as any;
};

const deserializeAws_json1_1CreateServerResponse = (output: any, context: __SerdeContext): CreateServerResponse => {
  return {
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1CreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  return {
    ServerId: __expectString(output.ServerId),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1CreateWorkflowResponse = (output: any, context: __SerdeContext): CreateWorkflowResponse => {
  return {
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

const deserializeAws_json1_1CustomStepDetails = (output: any, context: __SerdeContext): CustomStepDetails => {
  return {
    Name: __expectString(output.Name),
    SourceFileLocation: __expectString(output.SourceFileLocation),
    Target: __expectString(output.Target),
    TimeoutSeconds: __expectInt32(output.TimeoutSeconds),
  } as any;
};

const deserializeAws_json1_1DecryptStepDetails = (output: any, context: __SerdeContext): DecryptStepDetails => {
  return {
    DestinationFileLocation:
      output.DestinationFileLocation != null
        ? deserializeAws_json1_1InputFileLocation(output.DestinationFileLocation, context)
        : undefined,
    Name: __expectString(output.Name),
    OverwriteExisting: __expectString(output.OverwriteExisting),
    SourceFileLocation: __expectString(output.SourceFileLocation),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1DeleteStepDetails = (output: any, context: __SerdeContext): DeleteStepDetails => {
  return {
    Name: __expectString(output.Name),
    SourceFileLocation: __expectString(output.SourceFileLocation),
  } as any;
};

const deserializeAws_json1_1DescribeAccessResponse = (output: any, context: __SerdeContext): DescribeAccessResponse => {
  return {
    Access: output.Access != null ? deserializeAws_json1_1DescribedAccess(output.Access, context) : undefined,
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1DescribeAgreementResponse = (
  output: any,
  context: __SerdeContext
): DescribeAgreementResponse => {
  return {
    Agreement:
      output.Agreement != null ? deserializeAws_json1_1DescribedAgreement(output.Agreement, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCertificateResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateResponse => {
  return {
    Certificate:
      output.Certificate != null ? deserializeAws_json1_1DescribedCertificate(output.Certificate, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeConnectorResponse = (
  output: any,
  context: __SerdeContext
): DescribeConnectorResponse => {
  return {
    Connector:
      output.Connector != null ? deserializeAws_json1_1DescribedConnector(output.Connector, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribedAccess = (output: any, context: __SerdeContext): DescribedAccess => {
  return {
    ExternalId: __expectString(output.ExternalId),
    HomeDirectory: __expectString(output.HomeDirectory),
    HomeDirectoryMappings:
      output.HomeDirectoryMappings != null
        ? deserializeAws_json1_1HomeDirectoryMappings(output.HomeDirectoryMappings, context)
        : undefined,
    HomeDirectoryType: __expectString(output.HomeDirectoryType),
    Policy: __expectString(output.Policy),
    PosixProfile:
      output.PosixProfile != null ? deserializeAws_json1_1PosixProfile(output.PosixProfile, context) : undefined,
    Role: __expectString(output.Role),
  } as any;
};

const deserializeAws_json1_1DescribedAgreement = (output: any, context: __SerdeContext): DescribedAgreement => {
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
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribedCertificate = (output: any, context: __SerdeContext): DescribedCertificate => {
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
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
    Usage: __expectString(output.Usage),
  } as any;
};

const deserializeAws_json1_1DescribedConnector = (output: any, context: __SerdeContext): DescribedConnector => {
  return {
    AccessRole: __expectString(output.AccessRole),
    Arn: __expectString(output.Arn),
    As2Config:
      output.As2Config != null ? deserializeAws_json1_1As2ConnectorConfig(output.As2Config, context) : undefined,
    ConnectorId: __expectString(output.ConnectorId),
    LoggingRole: __expectString(output.LoggingRole),
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_json1_1DescribedExecution = (output: any, context: __SerdeContext): DescribedExecution => {
  return {
    ExecutionId: __expectString(output.ExecutionId),
    ExecutionRole: __expectString(output.ExecutionRole),
    InitialFileLocation:
      output.InitialFileLocation != null
        ? deserializeAws_json1_1FileLocation(output.InitialFileLocation, context)
        : undefined,
    LoggingConfiguration:
      output.LoggingConfiguration != null
        ? deserializeAws_json1_1LoggingConfiguration(output.LoggingConfiguration, context)
        : undefined,
    PosixProfile:
      output.PosixProfile != null ? deserializeAws_json1_1PosixProfile(output.PosixProfile, context) : undefined,
    Results: output.Results != null ? deserializeAws_json1_1ExecutionResults(output.Results, context) : undefined,
    ServiceMetadata:
      output.ServiceMetadata != null
        ? deserializeAws_json1_1ServiceMetadata(output.ServiceMetadata, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribedHostKey = (output: any, context: __SerdeContext): DescribedHostKey => {
  return {
    Arn: __expectString(output.Arn),
    DateImported:
      output.DateImported != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateImported)))
        : undefined,
    Description: __expectString(output.Description),
    HostKeyFingerprint: __expectString(output.HostKeyFingerprint),
    HostKeyId: __expectString(output.HostKeyId),
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1DescribedProfile = (output: any, context: __SerdeContext): DescribedProfile => {
  return {
    Arn: __expectString(output.Arn),
    As2Id: __expectString(output.As2Id),
    CertificateIds:
      output.CertificateIds != null ? deserializeAws_json1_1CertificateIds(output.CertificateIds, context) : undefined,
    ProfileId: __expectString(output.ProfileId),
    ProfileType: __expectString(output.ProfileType),
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribedSecurityPolicy = (
  output: any,
  context: __SerdeContext
): DescribedSecurityPolicy => {
  return {
    Fips: __expectBoolean(output.Fips),
    SecurityPolicyName: __expectString(output.SecurityPolicyName),
    SshCiphers:
      output.SshCiphers != null ? deserializeAws_json1_1SecurityPolicyOptions(output.SshCiphers, context) : undefined,
    SshKexs: output.SshKexs != null ? deserializeAws_json1_1SecurityPolicyOptions(output.SshKexs, context) : undefined,
    SshMacs: output.SshMacs != null ? deserializeAws_json1_1SecurityPolicyOptions(output.SshMacs, context) : undefined,
    TlsCiphers:
      output.TlsCiphers != null ? deserializeAws_json1_1SecurityPolicyOptions(output.TlsCiphers, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribedServer = (output: any, context: __SerdeContext): DescribedServer => {
  return {
    Arn: __expectString(output.Arn),
    Certificate: __expectString(output.Certificate),
    Domain: __expectString(output.Domain),
    EndpointDetails:
      output.EndpointDetails != null
        ? deserializeAws_json1_1EndpointDetails(output.EndpointDetails, context)
        : undefined,
    EndpointType: __expectString(output.EndpointType),
    HostKeyFingerprint: __expectString(output.HostKeyFingerprint),
    IdentityProviderDetails:
      output.IdentityProviderDetails != null
        ? deserializeAws_json1_1IdentityProviderDetails(output.IdentityProviderDetails, context)
        : undefined,
    IdentityProviderType: __expectString(output.IdentityProviderType),
    LoggingRole: __expectString(output.LoggingRole),
    PostAuthenticationLoginBanner: __expectString(output.PostAuthenticationLoginBanner),
    PreAuthenticationLoginBanner: __expectString(output.PreAuthenticationLoginBanner),
    ProtocolDetails:
      output.ProtocolDetails != null
        ? deserializeAws_json1_1ProtocolDetails(output.ProtocolDetails, context)
        : undefined,
    Protocols: output.Protocols != null ? deserializeAws_json1_1Protocols(output.Protocols, context) : undefined,
    SecurityPolicyName: __expectString(output.SecurityPolicyName),
    ServerId: __expectString(output.ServerId),
    State: __expectString(output.State),
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    UserCount: __expectInt32(output.UserCount),
    WorkflowDetails:
      output.WorkflowDetails != null
        ? deserializeAws_json1_1WorkflowDetails(output.WorkflowDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribedUser = (output: any, context: __SerdeContext): DescribedUser => {
  return {
    Arn: __expectString(output.Arn),
    HomeDirectory: __expectString(output.HomeDirectory),
    HomeDirectoryMappings:
      output.HomeDirectoryMappings != null
        ? deserializeAws_json1_1HomeDirectoryMappings(output.HomeDirectoryMappings, context)
        : undefined,
    HomeDirectoryType: __expectString(output.HomeDirectoryType),
    Policy: __expectString(output.Policy),
    PosixProfile:
      output.PosixProfile != null ? deserializeAws_json1_1PosixProfile(output.PosixProfile, context) : undefined,
    Role: __expectString(output.Role),
    SshPublicKeys:
      output.SshPublicKeys != null ? deserializeAws_json1_1SshPublicKeys(output.SshPublicKeys, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1DescribedWorkflow = (output: any, context: __SerdeContext): DescribedWorkflow => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    OnExceptionSteps:
      output.OnExceptionSteps != null
        ? deserializeAws_json1_1WorkflowSteps(output.OnExceptionSteps, context)
        : undefined,
    Steps: output.Steps != null ? deserializeAws_json1_1WorkflowSteps(output.Steps, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

const deserializeAws_json1_1DescribeExecutionResponse = (
  output: any,
  context: __SerdeContext
): DescribeExecutionResponse => {
  return {
    Execution:
      output.Execution != null ? deserializeAws_json1_1DescribedExecution(output.Execution, context) : undefined,
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

const deserializeAws_json1_1DescribeHostKeyResponse = (
  output: any,
  context: __SerdeContext
): DescribeHostKeyResponse => {
  return {
    HostKey: output.HostKey != null ? deserializeAws_json1_1DescribedHostKey(output.HostKey, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeProfileResponse = (
  output: any,
  context: __SerdeContext
): DescribeProfileResponse => {
  return {
    Profile: output.Profile != null ? deserializeAws_json1_1DescribedProfile(output.Profile, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSecurityPolicyResponse = (
  output: any,
  context: __SerdeContext
): DescribeSecurityPolicyResponse => {
  return {
    SecurityPolicy:
      output.SecurityPolicy != null
        ? deserializeAws_json1_1DescribedSecurityPolicy(output.SecurityPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeServerResponse = (output: any, context: __SerdeContext): DescribeServerResponse => {
  return {
    Server: output.Server != null ? deserializeAws_json1_1DescribedServer(output.Server, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeUserResponse = (output: any, context: __SerdeContext): DescribeUserResponse => {
  return {
    ServerId: __expectString(output.ServerId),
    User: output.User != null ? deserializeAws_json1_1DescribedUser(output.User, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeWorkflowResponse = (
  output: any,
  context: __SerdeContext
): DescribeWorkflowResponse => {
  return {
    Workflow: output.Workflow != null ? deserializeAws_json1_1DescribedWorkflow(output.Workflow, context) : undefined,
  } as any;
};

const deserializeAws_json1_1EfsFileLocation = (output: any, context: __SerdeContext): EfsFileLocation => {
  return {
    FileSystemId: __expectString(output.FileSystemId),
    Path: __expectString(output.Path),
  } as any;
};

const deserializeAws_json1_1EndpointDetails = (output: any, context: __SerdeContext): EndpointDetails => {
  return {
    AddressAllocationIds:
      output.AddressAllocationIds != null
        ? deserializeAws_json1_1AddressAllocationIds(output.AddressAllocationIds, context)
        : undefined,
    SecurityGroupIds:
      output.SecurityGroupIds != null
        ? deserializeAws_json1_1SecurityGroupIds(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds: output.SubnetIds != null ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context) : undefined,
    VpcEndpointId: __expectString(output.VpcEndpointId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1ExecutionError = (output: any, context: __SerdeContext): ExecutionError => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ExecutionResults = (output: any, context: __SerdeContext): ExecutionResults => {
  return {
    OnExceptionSteps:
      output.OnExceptionSteps != null
        ? deserializeAws_json1_1ExecutionStepResults(output.OnExceptionSteps, context)
        : undefined,
    Steps: output.Steps != null ? deserializeAws_json1_1ExecutionStepResults(output.Steps, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ExecutionStepResult = (output: any, context: __SerdeContext): ExecutionStepResult => {
  return {
    Error: output.Error != null ? deserializeAws_json1_1ExecutionError(output.Error, context) : undefined,
    Outputs: __expectString(output.Outputs),
    StepType: __expectString(output.StepType),
  } as any;
};

const deserializeAws_json1_1ExecutionStepResults = (output: any, context: __SerdeContext): ExecutionStepResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExecutionStepResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FileLocation = (output: any, context: __SerdeContext): FileLocation => {
  return {
    EfsFileLocation:
      output.EfsFileLocation != null
        ? deserializeAws_json1_1EfsFileLocation(output.EfsFileLocation, context)
        : undefined,
    S3FileLocation:
      output.S3FileLocation != null ? deserializeAws_json1_1S3FileLocation(output.S3FileLocation, context) : undefined,
  } as any;
};

const deserializeAws_json1_1HomeDirectoryMapEntry = (output: any, context: __SerdeContext): HomeDirectoryMapEntry => {
  return {
    Entry: __expectString(output.Entry),
    Target: __expectString(output.Target),
  } as any;
};

const deserializeAws_json1_1HomeDirectoryMappings = (output: any, context: __SerdeContext): HomeDirectoryMapEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1HomeDirectoryMapEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1IdentityProviderDetails = (
  output: any,
  context: __SerdeContext
): IdentityProviderDetails => {
  return {
    DirectoryId: __expectString(output.DirectoryId),
    Function: __expectString(output.Function),
    InvocationRole: __expectString(output.InvocationRole),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_json1_1ImportCertificateResponse = (
  output: any,
  context: __SerdeContext
): ImportCertificateResponse => {
  return {
    CertificateId: __expectString(output.CertificateId),
  } as any;
};

const deserializeAws_json1_1ImportHostKeyResponse = (output: any, context: __SerdeContext): ImportHostKeyResponse => {
  return {
    HostKeyId: __expectString(output.HostKeyId),
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1ImportSshPublicKeyResponse = (
  output: any,
  context: __SerdeContext
): ImportSshPublicKeyResponse => {
  return {
    ServerId: __expectString(output.ServerId),
    SshPublicKeyId: __expectString(output.SshPublicKeyId),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1InputFileLocation = (output: any, context: __SerdeContext): InputFileLocation => {
  return {
    EfsFileLocation:
      output.EfsFileLocation != null
        ? deserializeAws_json1_1EfsFileLocation(output.EfsFileLocation, context)
        : undefined,
    S3FileLocation:
      output.S3FileLocation != null
        ? deserializeAws_json1_1S3InputFileLocation(output.S3FileLocation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InternalServiceError = (output: any, context: __SerdeContext): InternalServiceError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListAccessesResponse = (output: any, context: __SerdeContext): ListAccessesResponse => {
  return {
    Accesses: output.Accesses != null ? deserializeAws_json1_1ListedAccesses(output.Accesses, context) : undefined,
    NextToken: __expectString(output.NextToken),
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1ListAgreementsResponse = (output: any, context: __SerdeContext): ListAgreementsResponse => {
  return {
    Agreements:
      output.Agreements != null ? deserializeAws_json1_1ListedAgreements(output.Agreements, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCertificatesResponse = (
  output: any,
  context: __SerdeContext
): ListCertificatesResponse => {
  return {
    Certificates:
      output.Certificates != null ? deserializeAws_json1_1ListedCertificates(output.Certificates, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListConnectorsResponse = (output: any, context: __SerdeContext): ListConnectorsResponse => {
  return {
    Connectors:
      output.Connectors != null ? deserializeAws_json1_1ListedConnectors(output.Connectors, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListedAccess = (output: any, context: __SerdeContext): ListedAccess => {
  return {
    ExternalId: __expectString(output.ExternalId),
    HomeDirectory: __expectString(output.HomeDirectory),
    HomeDirectoryType: __expectString(output.HomeDirectoryType),
    Role: __expectString(output.Role),
  } as any;
};

const deserializeAws_json1_1ListedAccesses = (output: any, context: __SerdeContext): ListedAccess[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedAccess(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListedAgreement = (output: any, context: __SerdeContext): ListedAgreement => {
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

const deserializeAws_json1_1ListedAgreements = (output: any, context: __SerdeContext): ListedAgreement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedAgreement(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListedCertificate = (output: any, context: __SerdeContext): ListedCertificate => {
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

const deserializeAws_json1_1ListedCertificates = (output: any, context: __SerdeContext): ListedCertificate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedCertificate(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListedConnector = (output: any, context: __SerdeContext): ListedConnector => {
  return {
    Arn: __expectString(output.Arn),
    ConnectorId: __expectString(output.ConnectorId),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_json1_1ListedConnectors = (output: any, context: __SerdeContext): ListedConnector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedConnector(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListedExecution = (output: any, context: __SerdeContext): ListedExecution => {
  return {
    ExecutionId: __expectString(output.ExecutionId),
    InitialFileLocation:
      output.InitialFileLocation != null
        ? deserializeAws_json1_1FileLocation(output.InitialFileLocation, context)
        : undefined,
    ServiceMetadata:
      output.ServiceMetadata != null
        ? deserializeAws_json1_1ServiceMetadata(output.ServiceMetadata, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ListedExecutions = (output: any, context: __SerdeContext): ListedExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedExecution(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListedHostKey = (output: any, context: __SerdeContext): ListedHostKey => {
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

const deserializeAws_json1_1ListedHostKeys = (output: any, context: __SerdeContext): ListedHostKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedHostKey(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListedProfile = (output: any, context: __SerdeContext): ListedProfile => {
  return {
    Arn: __expectString(output.Arn),
    As2Id: __expectString(output.As2Id),
    ProfileId: __expectString(output.ProfileId),
    ProfileType: __expectString(output.ProfileType),
  } as any;
};

const deserializeAws_json1_1ListedProfiles = (output: any, context: __SerdeContext): ListedProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedProfile(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListedServer = (output: any, context: __SerdeContext): ListedServer => {
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

const deserializeAws_json1_1ListedServers = (output: any, context: __SerdeContext): ListedServer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedServer(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListedUser = (output: any, context: __SerdeContext): ListedUser => {
  return {
    Arn: __expectString(output.Arn),
    HomeDirectory: __expectString(output.HomeDirectory),
    HomeDirectoryType: __expectString(output.HomeDirectoryType),
    Role: __expectString(output.Role),
    SshPublicKeyCount: __expectInt32(output.SshPublicKeyCount),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1ListedUsers = (output: any, context: __SerdeContext): ListedUser[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedUser(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListedWorkflow = (output: any, context: __SerdeContext): ListedWorkflow => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

const deserializeAws_json1_1ListedWorkflows = (output: any, context: __SerdeContext): ListedWorkflow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ListedWorkflow(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ListExecutionsResponse = (output: any, context: __SerdeContext): ListExecutionsResponse => {
  return {
    Executions:
      output.Executions != null ? deserializeAws_json1_1ListedExecutions(output.Executions, context) : undefined,
    NextToken: __expectString(output.NextToken),
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

const deserializeAws_json1_1ListHostKeysResponse = (output: any, context: __SerdeContext): ListHostKeysResponse => {
  return {
    HostKeys: output.HostKeys != null ? deserializeAws_json1_1ListedHostKeys(output.HostKeys, context) : undefined,
    NextToken: __expectString(output.NextToken),
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1ListProfilesResponse = (output: any, context: __SerdeContext): ListProfilesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Profiles: output.Profiles != null ? deserializeAws_json1_1ListedProfiles(output.Profiles, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListSecurityPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListSecurityPoliciesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SecurityPolicyNames:
      output.SecurityPolicyNames != null
        ? deserializeAws_json1_1SecurityPolicyNames(output.SecurityPolicyNames, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListServersResponse = (output: any, context: __SerdeContext): ListServersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Servers: output.Servers != null ? deserializeAws_json1_1ListedServers(output.Servers, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Arn: __expectString(output.Arn),
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListUsersResponse = (output: any, context: __SerdeContext): ListUsersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ServerId: __expectString(output.ServerId),
    Users: output.Users != null ? deserializeAws_json1_1ListedUsers(output.Users, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListWorkflowsResponse = (output: any, context: __SerdeContext): ListWorkflowsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Workflows: output.Workflows != null ? deserializeAws_json1_1ListedWorkflows(output.Workflows, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LoggingConfiguration = (output: any, context: __SerdeContext): LoggingConfiguration => {
  return {
    LogGroupName: __expectString(output.LogGroupName),
    LoggingRole: __expectString(output.LoggingRole),
  } as any;
};

const deserializeAws_json1_1OnPartialUploadWorkflowDetails = (
  output: any,
  context: __SerdeContext
): WorkflowDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkflowDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OnUploadWorkflowDetails = (output: any, context: __SerdeContext): WorkflowDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkflowDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PosixProfile = (output: any, context: __SerdeContext): PosixProfile => {
  return {
    Gid: __expectLong(output.Gid),
    SecondaryGids:
      output.SecondaryGids != null ? deserializeAws_json1_1SecondaryGids(output.SecondaryGids, context) : undefined,
    Uid: __expectLong(output.Uid),
  } as any;
};

const deserializeAws_json1_1ProtocolDetails = (output: any, context: __SerdeContext): ProtocolDetails => {
  return {
    As2Transports:
      output.As2Transports != null ? deserializeAws_json1_1As2Transports(output.As2Transports, context) : undefined,
    PassiveIp: __expectString(output.PassiveIp),
    SetStatOption: __expectString(output.SetStatOption),
    TlsSessionResumptionMode: __expectString(output.TlsSessionResumptionMode),
  } as any;
};

const deserializeAws_json1_1Protocols = (output: any, context: __SerdeContext): (Protocol | string)[] => {
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

const deserializeAws_json1_1ResourceExistsException = (
  output: any,
  context: __SerdeContext
): ResourceExistsException => {
  return {
    Message: __expectString(output.Message),
    Resource: __expectString(output.Resource),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
    Resource: __expectString(output.Resource),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1S3FileLocation = (output: any, context: __SerdeContext): S3FileLocation => {
  return {
    Bucket: __expectString(output.Bucket),
    Etag: __expectString(output.Etag),
    Key: __expectString(output.Key),
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_json1_1S3InputFileLocation = (output: any, context: __SerdeContext): S3InputFileLocation => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
  } as any;
};

const deserializeAws_json1_1S3Tag = (output: any, context: __SerdeContext): S3Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1S3Tags = (output: any, context: __SerdeContext): S3Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1S3Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SecondaryGids = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_json1_1SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SecurityPolicyNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SecurityPolicyOptions = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SendWorkflowStepStateResponse = (
  output: any,
  context: __SerdeContext
): SendWorkflowStepStateResponse => {
  return {} as any;
};

const deserializeAws_json1_1ServiceMetadata = (output: any, context: __SerdeContext): ServiceMetadata => {
  return {
    UserDetails:
      output.UserDetails != null ? deserializeAws_json1_1UserDetails(output.UserDetails, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SshPublicKey = (output: any, context: __SerdeContext): SshPublicKey => {
  return {
    DateImported:
      output.DateImported != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateImported)))
        : undefined,
    SshPublicKeyBody: __expectString(output.SshPublicKeyBody),
    SshPublicKeyId: __expectString(output.SshPublicKeyId),
  } as any;
};

const deserializeAws_json1_1SshPublicKeys = (output: any, context: __SerdeContext): SshPublicKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SshPublicKey(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StartFileTransferResponse = (
  output: any,
  context: __SerdeContext
): StartFileTransferResponse => {
  return {
    TransferId: __expectString(output.TransferId),
  } as any;
};

const deserializeAws_json1_1SubnetIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagStepDetails = (output: any, context: __SerdeContext): TagStepDetails => {
  return {
    Name: __expectString(output.Name),
    SourceFileLocation: __expectString(output.SourceFileLocation),
    Tags: output.Tags != null ? deserializeAws_json1_1S3Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TestIdentityProviderResponse = (
  output: any,
  context: __SerdeContext
): TestIdentityProviderResponse => {
  return {
    Message: __expectString(output.Message),
    Response: __expectString(output.Response),
    StatusCode: __expectInt32(output.StatusCode),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    RetryAfterSeconds: __expectString(output.RetryAfterSeconds),
  } as any;
};

const deserializeAws_json1_1UpdateAccessResponse = (output: any, context: __SerdeContext): UpdateAccessResponse => {
  return {
    ExternalId: __expectString(output.ExternalId),
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1UpdateAgreementResponse = (
  output: any,
  context: __SerdeContext
): UpdateAgreementResponse => {
  return {
    AgreementId: __expectString(output.AgreementId),
  } as any;
};

const deserializeAws_json1_1UpdateCertificateResponse = (
  output: any,
  context: __SerdeContext
): UpdateCertificateResponse => {
  return {
    CertificateId: __expectString(output.CertificateId),
  } as any;
};

const deserializeAws_json1_1UpdateConnectorResponse = (
  output: any,
  context: __SerdeContext
): UpdateConnectorResponse => {
  return {
    ConnectorId: __expectString(output.ConnectorId),
  } as any;
};

const deserializeAws_json1_1UpdateHostKeyResponse = (output: any, context: __SerdeContext): UpdateHostKeyResponse => {
  return {
    HostKeyId: __expectString(output.HostKeyId),
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1UpdateProfileResponse = (output: any, context: __SerdeContext): UpdateProfileResponse => {
  return {
    ProfileId: __expectString(output.ProfileId),
  } as any;
};

const deserializeAws_json1_1UpdateServerResponse = (output: any, context: __SerdeContext): UpdateServerResponse => {
  return {
    ServerId: __expectString(output.ServerId),
  } as any;
};

const deserializeAws_json1_1UpdateUserResponse = (output: any, context: __SerdeContext): UpdateUserResponse => {
  return {
    ServerId: __expectString(output.ServerId),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1UserDetails = (output: any, context: __SerdeContext): UserDetails => {
  return {
    ServerId: __expectString(output.ServerId),
    SessionId: __expectString(output.SessionId),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1WorkflowDetail = (output: any, context: __SerdeContext): WorkflowDetail => {
  return {
    ExecutionRole: __expectString(output.ExecutionRole),
    WorkflowId: __expectString(output.WorkflowId),
  } as any;
};

const deserializeAws_json1_1WorkflowDetails = (output: any, context: __SerdeContext): WorkflowDetails => {
  return {
    OnPartialUpload:
      output.OnPartialUpload != null
        ? deserializeAws_json1_1OnPartialUploadWorkflowDetails(output.OnPartialUpload, context)
        : undefined,
    OnUpload:
      output.OnUpload != null ? deserializeAws_json1_1OnUploadWorkflowDetails(output.OnUpload, context) : undefined,
  } as any;
};

const deserializeAws_json1_1WorkflowStep = (output: any, context: __SerdeContext): WorkflowStep => {
  return {
    CopyStepDetails:
      output.CopyStepDetails != null
        ? deserializeAws_json1_1CopyStepDetails(output.CopyStepDetails, context)
        : undefined,
    CustomStepDetails:
      output.CustomStepDetails != null
        ? deserializeAws_json1_1CustomStepDetails(output.CustomStepDetails, context)
        : undefined,
    DecryptStepDetails:
      output.DecryptStepDetails != null
        ? deserializeAws_json1_1DecryptStepDetails(output.DecryptStepDetails, context)
        : undefined,
    DeleteStepDetails:
      output.DeleteStepDetails != null
        ? deserializeAws_json1_1DeleteStepDetails(output.DeleteStepDetails, context)
        : undefined,
    TagStepDetails:
      output.TagStepDetails != null ? deserializeAws_json1_1TagStepDetails(output.TagStepDetails, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1WorkflowSteps = (output: any, context: __SerdeContext): WorkflowStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WorkflowStep(entry, context);
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
