// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
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

import { AcceptHandshakeCommandInput, AcceptHandshakeCommandOutput } from "../commands/AcceptHandshakeCommand";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput } from "../commands/AttachPolicyCommand";
import { CancelHandshakeCommandInput, CancelHandshakeCommandOutput } from "../commands/CancelHandshakeCommand";
import { CloseAccountCommandInput, CloseAccountCommandOutput } from "../commands/CloseAccountCommand";
import { CreateAccountCommandInput, CreateAccountCommandOutput } from "../commands/CreateAccountCommand";
import {
  CreateGovCloudAccountCommandInput,
  CreateGovCloudAccountCommandOutput,
} from "../commands/CreateGovCloudAccountCommand";
import {
  CreateOrganizationalUnitCommandInput,
  CreateOrganizationalUnitCommandOutput,
} from "../commands/CreateOrganizationalUnitCommand";
import { CreateOrganizationCommandInput, CreateOrganizationCommandOutput } from "../commands/CreateOrganizationCommand";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "../commands/CreatePolicyCommand";
import { DeclineHandshakeCommandInput, DeclineHandshakeCommandOutput } from "../commands/DeclineHandshakeCommand";
import {
  DeleteOrganizationalUnitCommandInput,
  DeleteOrganizationalUnitCommandOutput,
} from "../commands/DeleteOrganizationalUnitCommand";
import { DeleteOrganizationCommandInput, DeleteOrganizationCommandOutput } from "../commands/DeleteOrganizationCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "../commands/DeletePolicyCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import {
  DeregisterDelegatedAdministratorCommandInput,
  DeregisterDelegatedAdministratorCommandOutput,
} from "../commands/DeregisterDelegatedAdministratorCommand";
import { DescribeAccountCommandInput, DescribeAccountCommandOutput } from "../commands/DescribeAccountCommand";
import {
  DescribeCreateAccountStatusCommandInput,
  DescribeCreateAccountStatusCommandOutput,
} from "../commands/DescribeCreateAccountStatusCommand";
import {
  DescribeEffectivePolicyCommandInput,
  DescribeEffectivePolicyCommandOutput,
} from "../commands/DescribeEffectivePolicyCommand";
import { DescribeHandshakeCommandInput, DescribeHandshakeCommandOutput } from "../commands/DescribeHandshakeCommand";
import {
  DescribeOrganizationalUnitCommandInput,
  DescribeOrganizationalUnitCommandOutput,
} from "../commands/DescribeOrganizationalUnitCommand";
import {
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
} from "../commands/DescribeOrganizationCommand";
import { DescribePolicyCommandInput, DescribePolicyCommandOutput } from "../commands/DescribePolicyCommand";
import {
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "../commands/DescribeResourcePolicyCommand";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput } from "../commands/DetachPolicyCommand";
import {
  DisableAWSServiceAccessCommandInput,
  DisableAWSServiceAccessCommandOutput,
} from "../commands/DisableAWSServiceAccessCommand";
import { DisablePolicyTypeCommandInput, DisablePolicyTypeCommandOutput } from "../commands/DisablePolicyTypeCommand";
import { EnableAllFeaturesCommandInput, EnableAllFeaturesCommandOutput } from "../commands/EnableAllFeaturesCommand";
import {
  EnableAWSServiceAccessCommandInput,
  EnableAWSServiceAccessCommandOutput,
} from "../commands/EnableAWSServiceAccessCommand";
import { EnablePolicyTypeCommandInput, EnablePolicyTypeCommandOutput } from "../commands/EnablePolicyTypeCommand";
import {
  InviteAccountToOrganizationCommandInput,
  InviteAccountToOrganizationCommandOutput,
} from "../commands/InviteAccountToOrganizationCommand";
import { LeaveOrganizationCommandInput, LeaveOrganizationCommandOutput } from "../commands/LeaveOrganizationCommand";
import { ListAccountsCommandInput, ListAccountsCommandOutput } from "../commands/ListAccountsCommand";
import {
  ListAccountsForParentCommandInput,
  ListAccountsForParentCommandOutput,
} from "../commands/ListAccountsForParentCommand";
import {
  ListAWSServiceAccessForOrganizationCommandInput,
  ListAWSServiceAccessForOrganizationCommandOutput,
} from "../commands/ListAWSServiceAccessForOrganizationCommand";
import { ListChildrenCommandInput, ListChildrenCommandOutput } from "../commands/ListChildrenCommand";
import {
  ListCreateAccountStatusCommandInput,
  ListCreateAccountStatusCommandOutput,
} from "../commands/ListCreateAccountStatusCommand";
import {
  ListDelegatedAdministratorsCommandInput,
  ListDelegatedAdministratorsCommandOutput,
} from "../commands/ListDelegatedAdministratorsCommand";
import {
  ListDelegatedServicesForAccountCommandInput,
  ListDelegatedServicesForAccountCommandOutput,
} from "../commands/ListDelegatedServicesForAccountCommand";
import {
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput,
} from "../commands/ListHandshakesForAccountCommand";
import {
  ListHandshakesForOrganizationCommandInput,
  ListHandshakesForOrganizationCommandOutput,
} from "../commands/ListHandshakesForOrganizationCommand";
import {
  ListOrganizationalUnitsForParentCommandInput,
  ListOrganizationalUnitsForParentCommandOutput,
} from "../commands/ListOrganizationalUnitsForParentCommand";
import { ListParentsCommandInput, ListParentsCommandOutput } from "../commands/ListParentsCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "../commands/ListPoliciesCommand";
import {
  ListPoliciesForTargetCommandInput,
  ListPoliciesForTargetCommandOutput,
} from "../commands/ListPoliciesForTargetCommand";
import { ListRootsCommandInput, ListRootsCommandOutput } from "../commands/ListRootsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "../commands/ListTargetsForPolicyCommand";
import { MoveAccountCommandInput, MoveAccountCommandOutput } from "../commands/MoveAccountCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import {
  RegisterDelegatedAdministratorCommandInput,
  RegisterDelegatedAdministratorCommandOutput,
} from "../commands/RegisterDelegatedAdministratorCommand";
import {
  RemoveAccountFromOrganizationCommandInput,
  RemoveAccountFromOrganizationCommandOutput,
} from "../commands/RemoveAccountFromOrganizationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateOrganizationalUnitCommandInput,
  UpdateOrganizationalUnitCommandOutput,
} from "../commands/UpdateOrganizationalUnitCommand";
import { UpdatePolicyCommandInput, UpdatePolicyCommandOutput } from "../commands/UpdatePolicyCommand";
import {
  AcceptHandshakeRequest,
  AcceptHandshakeResponse,
  AccessDeniedException,
  AccessDeniedForDependencyException,
  Account,
  AccountAlreadyClosedException,
  AccountAlreadyRegisteredException,
  AccountNotFoundException,
  AccountNotRegisteredException,
  AccountOwnerNotVerifiedException,
  AlreadyInOrganizationException,
  AttachPolicyRequest,
  AWSOrganizationsNotInUseException,
  CancelHandshakeRequest,
  CancelHandshakeResponse,
  Child,
  ChildNotFoundException,
  CloseAccountRequest,
  ConcurrentModificationException,
  ConflictException,
  ConstraintViolationException,
  CreateAccountRequest,
  CreateAccountResponse,
  CreateAccountState,
  CreateAccountStatus,
  CreateAccountStatusNotFoundException,
  CreateGovCloudAccountRequest,
  CreateGovCloudAccountResponse,
  CreateOrganizationalUnitRequest,
  CreateOrganizationalUnitResponse,
  CreateOrganizationRequest,
  CreateOrganizationResponse,
  CreatePolicyRequest,
  CreatePolicyResponse,
  DeclineHandshakeRequest,
  DeclineHandshakeResponse,
  DelegatedAdministrator,
  DelegatedService,
  DeleteOrganizationalUnitRequest,
  DeletePolicyRequest,
  DeregisterDelegatedAdministratorRequest,
  DescribeAccountRequest,
  DescribeAccountResponse,
  DescribeCreateAccountStatusRequest,
  DescribeCreateAccountStatusResponse,
  DescribeEffectivePolicyRequest,
  DescribeEffectivePolicyResponse,
  DescribeHandshakeRequest,
  DescribeHandshakeResponse,
  DescribeOrganizationalUnitRequest,
  DescribeOrganizationalUnitResponse,
  DescribeOrganizationResponse,
  DescribePolicyRequest,
  DescribePolicyResponse,
  DescribeResourcePolicyResponse,
  DestinationParentNotFoundException,
  DetachPolicyRequest,
  DisableAWSServiceAccessRequest,
  DisablePolicyTypeRequest,
  DisablePolicyTypeResponse,
  DuplicateAccountException,
  DuplicateHandshakeException,
  DuplicateOrganizationalUnitException,
  DuplicatePolicyAttachmentException,
  DuplicatePolicyException,
  EffectivePolicy,
  EffectivePolicyNotFoundException,
  EnableAllFeaturesRequest,
  EnableAllFeaturesResponse,
  EnableAWSServiceAccessRequest,
  EnabledServicePrincipal,
  EnablePolicyTypeRequest,
  EnablePolicyTypeResponse,
  FinalizingOrganizationException,
  Handshake,
  HandshakeAlreadyInStateException,
  HandshakeConstraintViolationException,
  HandshakeFilter,
  HandshakeNotFoundException,
  HandshakeParty,
  HandshakeResource,
  InvalidHandshakeTransitionException,
  InvalidInputException,
  InviteAccountToOrganizationRequest,
  InviteAccountToOrganizationResponse,
  ListAccountsForParentRequest,
  ListAccountsForParentResponse,
  ListAccountsRequest,
  ListAccountsResponse,
  ListAWSServiceAccessForOrganizationRequest,
  ListAWSServiceAccessForOrganizationResponse,
  ListChildrenRequest,
  ListChildrenResponse,
  ListCreateAccountStatusRequest,
  ListCreateAccountStatusResponse,
  ListDelegatedAdministratorsRequest,
  ListDelegatedAdministratorsResponse,
  ListDelegatedServicesForAccountRequest,
  ListDelegatedServicesForAccountResponse,
  ListHandshakesForAccountRequest,
  ListHandshakesForAccountResponse,
  ListHandshakesForOrganizationRequest,
  ListHandshakesForOrganizationResponse,
  ListOrganizationalUnitsForParentRequest,
  ListOrganizationalUnitsForParentResponse,
  ListParentsRequest,
  ListParentsResponse,
  ListPoliciesForTargetRequest,
  ListPoliciesForTargetResponse,
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListRootsRequest,
  ListRootsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTargetsForPolicyRequest,
  ListTargetsForPolicyResponse,
  MalformedPolicyDocumentException,
  MasterCannotLeaveOrganizationException,
  MoveAccountRequest,
  Organization,
  OrganizationalUnit,
  OrganizationalUnitNotEmptyException,
  OrganizationalUnitNotFoundException,
  OrganizationNotEmptyException,
  Parent,
  ParentNotFoundException,
  Policy,
  PolicyChangesInProgressException,
  PolicyInUseException,
  PolicyNotAttachedException,
  PolicyNotFoundException,
  PolicySummary,
  PolicyTargetSummary,
  PolicyTypeAlreadyEnabledException,
  PolicyTypeNotAvailableForOrganizationException,
  PolicyTypeNotEnabledException,
  PolicyTypeSummary,
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  RegisterDelegatedAdministratorRequest,
  RemoveAccountFromOrganizationRequest,
  ResourcePolicy,
  ResourcePolicyNotFoundException,
  ResourcePolicySummary,
  Root,
  RootNotFoundException,
  ServiceException,
  SourceParentNotFoundException,
  Tag,
  TagResourceRequest,
  TargetNotFoundException,
  TooManyRequestsException,
  UnsupportedAPIEndpointException,
  UntagResourceRequest,
  UpdateOrganizationalUnitRequest,
  UpdateOrganizationalUnitResponse,
  UpdatePolicyRequest,
  UpdatePolicyResponse,
} from "../models/models_0";
import { OrganizationsServiceException as __BaseException } from "../models/OrganizationsServiceException";

export const serializeAws_json1_1AcceptHandshakeCommand = async (
  input: AcceptHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.AcceptHandshake",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AcceptHandshakeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachPolicyCommand = async (
  input: AttachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.AttachPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelHandshakeCommand = async (
  input: CancelHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.CancelHandshake",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelHandshakeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CloseAccountCommand = async (
  input: CloseAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.CloseAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CloseAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAccountCommand = async (
  input: CreateAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.CreateAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateGovCloudAccountCommand = async (
  input: CreateGovCloudAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.CreateGovCloudAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGovCloudAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateOrganizationCommand = async (
  input: CreateOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.CreateOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateOrganizationalUnitCommand = async (
  input: CreateOrganizationalUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.CreateOrganizationalUnit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateOrganizationalUnitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePolicyCommand = async (
  input: CreatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.CreatePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeclineHandshakeCommand = async (
  input: DeclineHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DeclineHandshake",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeclineHandshakeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteOrganizationCommand = async (
  input: DeleteOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DeleteOrganization",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteOrganizationalUnitCommand = async (
  input: DeleteOrganizationalUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DeleteOrganizationalUnit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteOrganizationalUnitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DeletePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DeleteResourcePolicy",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterDelegatedAdministratorCommand = async (
  input: DeregisterDelegatedAdministratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DeregisterDelegatedAdministrator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterDelegatedAdministratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAccountCommand = async (
  input: DescribeAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DescribeAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCreateAccountStatusCommand = async (
  input: DescribeCreateAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DescribeCreateAccountStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCreateAccountStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEffectivePolicyCommand = async (
  input: DescribeEffectivePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DescribeEffectivePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEffectivePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeHandshakeCommand = async (
  input: DescribeHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DescribeHandshake",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeHandshakeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeOrganizationCommand = async (
  input: DescribeOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DescribeOrganization",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeOrganizationalUnitCommand = async (
  input: DescribeOrganizationalUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DescribeOrganizationalUnit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeOrganizationalUnitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePolicyCommand = async (
  input: DescribePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DescribePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeResourcePolicyCommand = async (
  input: DescribeResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DescribeResourcePolicy",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetachPolicyCommand = async (
  input: DetachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DetachPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetachPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableAWSServiceAccessCommand = async (
  input: DisableAWSServiceAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DisableAWSServiceAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableAWSServiceAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisablePolicyTypeCommand = async (
  input: DisablePolicyTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DisablePolicyType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisablePolicyTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableAllFeaturesCommand = async (
  input: EnableAllFeaturesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.EnableAllFeatures",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableAllFeaturesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableAWSServiceAccessCommand = async (
  input: EnableAWSServiceAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.EnableAWSServiceAccess",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableAWSServiceAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnablePolicyTypeCommand = async (
  input: EnablePolicyTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.EnablePolicyType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnablePolicyTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1InviteAccountToOrganizationCommand = async (
  input: InviteAccountToOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.InviteAccountToOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1InviteAccountToOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1LeaveOrganizationCommand = async (
  input: LeaveOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.LeaveOrganization",
  };
  const body = "{}";
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAccountsCommand = async (
  input: ListAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListAccounts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAccountsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAccountsForParentCommand = async (
  input: ListAccountsForParentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListAccountsForParent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAccountsForParentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand = async (
  input: ListAWSServiceAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAWSServiceAccessForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListChildrenCommand = async (
  input: ListChildrenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListChildren",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListChildrenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCreateAccountStatusCommand = async (
  input: ListCreateAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListCreateAccountStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCreateAccountStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDelegatedAdministratorsCommand = async (
  input: ListDelegatedAdministratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListDelegatedAdministrators",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDelegatedAdministratorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDelegatedServicesForAccountCommand = async (
  input: ListDelegatedServicesForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListDelegatedServicesForAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDelegatedServicesForAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListHandshakesForAccountCommand = async (
  input: ListHandshakesForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListHandshakesForAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListHandshakesForAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListHandshakesForOrganizationCommand = async (
  input: ListHandshakesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListHandshakesForOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListHandshakesForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListOrganizationalUnitsForParentCommand = async (
  input: ListOrganizationalUnitsForParentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListOrganizationalUnitsForParent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListOrganizationalUnitsForParentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListParentsCommand = async (
  input: ListParentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListParents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListParentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPoliciesCommand = async (
  input: ListPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListPolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPoliciesForTargetCommand = async (
  input: ListPoliciesForTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListPoliciesForTarget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPoliciesForTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRootsCommand = async (
  input: ListRootsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListRoots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRootsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTargetsForPolicyCommand = async (
  input: ListTargetsForPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListTargetsForPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTargetsForPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1MoveAccountCommand = async (
  input: MoveAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.MoveAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1MoveAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterDelegatedAdministratorCommand = async (
  input: RegisterDelegatedAdministratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.RegisterDelegatedAdministrator",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterDelegatedAdministratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveAccountFromOrganizationCommand = async (
  input: RemoveAccountFromOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.RemoveAccountFromOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveAccountFromOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateOrganizationalUnitCommand = async (
  input: UpdateOrganizationalUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.UpdateOrganizationalUnit",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateOrganizationalUnitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePolicyCommand = async (
  input: UpdatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.UpdatePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AcceptHandshakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptHandshakeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AcceptHandshakeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcceptHandshakeResponse(data, context);
  const response: AcceptHandshakeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AcceptHandshakeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptHandshakeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.organizations#AccessDeniedForDependencyException":
      throw await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "HandshakeAlreadyInStateException":
    case "com.amazonaws.organizations#HandshakeAlreadyInStateException":
      throw await deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse(parsedOutput, context);
    case "HandshakeConstraintViolationException":
    case "com.amazonaws.organizations#HandshakeConstraintViolationException":
      throw await deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse(parsedOutput, context);
    case "HandshakeNotFoundException":
    case "com.amazonaws.organizations#HandshakeNotFoundException":
      throw await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidHandshakeTransitionException":
    case "com.amazonaws.organizations#InvalidHandshakeTransitionException":
      throw await deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AttachPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AttachPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "DuplicatePolicyAttachmentException":
    case "com.amazonaws.organizations#DuplicatePolicyAttachmentException":
      throw await deserializeAws_json1_1DuplicatePolicyAttachmentExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "PolicyChangesInProgressException":
    case "com.amazonaws.organizations#PolicyChangesInProgressException":
      throw await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.organizations#PolicyNotFoundException":
      throw await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context);
    case "PolicyTypeNotEnabledException":
    case "com.amazonaws.organizations#PolicyTypeNotEnabledException":
      throw await deserializeAws_json1_1PolicyTypeNotEnabledExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.organizations#TargetNotFoundException":
      throw await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CancelHandshakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelHandshakeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelHandshakeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelHandshakeResponse(data, context);
  const response: CancelHandshakeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelHandshakeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelHandshakeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "HandshakeAlreadyInStateException":
    case "com.amazonaws.organizations#HandshakeAlreadyInStateException":
      throw await deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse(parsedOutput, context);
    case "HandshakeNotFoundException":
    case "com.amazonaws.organizations#HandshakeNotFoundException":
      throw await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidHandshakeTransitionException":
    case "com.amazonaws.organizations#InvalidHandshakeTransitionException":
      throw await deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CloseAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CloseAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CloseAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CloseAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountAlreadyClosedException":
    case "com.amazonaws.organizations#AccountAlreadyClosedException":
      throw await deserializeAws_json1_1AccountAlreadyClosedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.organizations#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAccountResponse(data, context);
  const response: CreateAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "FinalizingOrganizationException":
    case "com.amazonaws.organizations#FinalizingOrganizationException":
      throw await deserializeAws_json1_1FinalizingOrganizationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateGovCloudAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGovCloudAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateGovCloudAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGovCloudAccountResponse(data, context);
  const response: CreateGovCloudAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateGovCloudAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGovCloudAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "FinalizingOrganizationException":
    case "com.amazonaws.organizations#FinalizingOrganizationException":
      throw await deserializeAws_json1_1FinalizingOrganizationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateOrganizationResponse(data, context);
  const response: CreateOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.organizations#AccessDeniedForDependencyException":
      throw await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context);
    case "AlreadyInOrganizationException":
    case "com.amazonaws.organizations#AlreadyInOrganizationException":
      throw await deserializeAws_json1_1AlreadyInOrganizationExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateOrganizationalUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrganizationalUnitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateOrganizationalUnitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateOrganizationalUnitResponse(data, context);
  const response: CreateOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateOrganizationalUnitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrganizationalUnitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "DuplicateOrganizationalUnitException":
    case "com.amazonaws.organizations#DuplicateOrganizationalUnitException":
      throw await deserializeAws_json1_1DuplicateOrganizationalUnitExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ParentNotFoundException":
    case "com.amazonaws.organizations#ParentNotFoundException":
      throw await deserializeAws_json1_1ParentNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePolicyResponse(data, context);
  const response: CreatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "DuplicatePolicyException":
    case "com.amazonaws.organizations#DuplicatePolicyException":
      throw await deserializeAws_json1_1DuplicatePolicyExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.organizations#MalformedPolicyDocumentException":
      throw await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context);
    case "PolicyTypeNotAvailableForOrganizationException":
    case "com.amazonaws.organizations#PolicyTypeNotAvailableForOrganizationException":
      throw await deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeclineHandshakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineHandshakeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeclineHandshakeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeclineHandshakeResponse(data, context);
  const response: DeclineHandshakeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeclineHandshakeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineHandshakeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "HandshakeAlreadyInStateException":
    case "com.amazonaws.organizations#HandshakeAlreadyInStateException":
      throw await deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse(parsedOutput, context);
    case "HandshakeNotFoundException":
    case "com.amazonaws.organizations#HandshakeNotFoundException":
      throw await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidHandshakeTransitionException":
    case "com.amazonaws.organizations#InvalidHandshakeTransitionException":
      throw await deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteOrganizationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OrganizationNotEmptyException":
    case "com.amazonaws.organizations#OrganizationNotEmptyException":
      throw await deserializeAws_json1_1OrganizationNotEmptyExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteOrganizationalUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationalUnitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteOrganizationalUnitCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteOrganizationalUnitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationalUnitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OrganizationalUnitNotEmptyException":
    case "com.amazonaws.organizations#OrganizationalUnitNotEmptyException":
      throw await deserializeAws_json1_1OrganizationalUnitNotEmptyExceptionResponse(parsedOutput, context);
    case "OrganizationalUnitNotFoundException":
    case "com.amazonaws.organizations#OrganizationalUnitNotFoundException":
      throw await deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "PolicyInUseException":
    case "com.amazonaws.organizations#PolicyInUseException":
      throw await deserializeAws_json1_1PolicyInUseExceptionResponse(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.organizations#PolicyNotFoundException":
      throw await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "ResourcePolicyNotFoundException":
    case "com.amazonaws.organizations#ResourcePolicyNotFoundException":
      throw await deserializeAws_json1_1ResourcePolicyNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterDelegatedAdministratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterDelegatedAdministratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterDelegatedAdministratorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterDelegatedAdministratorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterDelegatedAdministratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterDelegatedAdministratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "AccountNotRegisteredException":
    case "com.amazonaws.organizations#AccountNotRegisteredException":
      throw await deserializeAws_json1_1AccountNotRegisteredExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccountResponse(data, context);
  const response: DescribeAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeCreateAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCreateAccountStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCreateAccountStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCreateAccountStatusResponse(data, context);
  const response: DescribeCreateAccountStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCreateAccountStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCreateAccountStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "CreateAccountStatusNotFoundException":
    case "com.amazonaws.organizations#CreateAccountStatusNotFoundException":
      throw await deserializeAws_json1_1CreateAccountStatusNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEffectivePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEffectivePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEffectivePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEffectivePolicyResponse(data, context);
  const response: DescribeEffectivePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEffectivePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEffectivePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "EffectivePolicyNotFoundException":
    case "com.amazonaws.organizations#EffectivePolicyNotFoundException":
      throw await deserializeAws_json1_1EffectivePolicyNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.organizations#TargetNotFoundException":
      throw await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeHandshakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHandshakeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeHandshakeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeHandshakeResponse(data, context);
  const response: DescribeHandshakeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeHandshakeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHandshakeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "HandshakeNotFoundException":
    case "com.amazonaws.organizations#HandshakeNotFoundException":
      throw await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeOrganizationResponse(data, context);
  const response: DescribeOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeOrganizationalUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationalUnitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeOrganizationalUnitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeOrganizationalUnitResponse(data, context);
  const response: DescribeOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeOrganizationalUnitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationalUnitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OrganizationalUnitNotFoundException":
    case "com.amazonaws.organizations#OrganizationalUnitNotFoundException":
      throw await deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePolicyResponse(data, context);
  const response: DescribePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.organizations#PolicyNotFoundException":
      throw await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeResourcePolicyResponse(data, context);
  const response: DescribeResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "ResourcePolicyNotFoundException":
    case "com.amazonaws.organizations#ResourcePolicyNotFoundException":
      throw await deserializeAws_json1_1ResourcePolicyNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DetachPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetachPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DetachPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetachPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "PolicyChangesInProgressException":
    case "com.amazonaws.organizations#PolicyChangesInProgressException":
      throw await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context);
    case "PolicyNotAttachedException":
    case "com.amazonaws.organizations#PolicyNotAttachedException":
      throw await deserializeAws_json1_1PolicyNotAttachedExceptionResponse(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.organizations#PolicyNotFoundException":
      throw await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.organizations#TargetNotFoundException":
      throw await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisableAWSServiceAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAWSServiceAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableAWSServiceAccessCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableAWSServiceAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableAWSServiceAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAWSServiceAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisablePolicyTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisablePolicyTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisablePolicyTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisablePolicyTypeResponse(data, context);
  const response: DisablePolicyTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisablePolicyTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisablePolicyTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "PolicyChangesInProgressException":
    case "com.amazonaws.organizations#PolicyChangesInProgressException":
      throw await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context);
    case "PolicyTypeNotEnabledException":
    case "com.amazonaws.organizations#PolicyTypeNotEnabledException":
      throw await deserializeAws_json1_1PolicyTypeNotEnabledExceptionResponse(parsedOutput, context);
    case "RootNotFoundException":
    case "com.amazonaws.organizations#RootNotFoundException":
      throw await deserializeAws_json1_1RootNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1EnableAllFeaturesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAllFeaturesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableAllFeaturesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableAllFeaturesResponse(data, context);
  const response: EnableAllFeaturesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableAllFeaturesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAllFeaturesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "HandshakeConstraintViolationException":
    case "com.amazonaws.organizations#HandshakeConstraintViolationException":
      throw await deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1EnableAWSServiceAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAWSServiceAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableAWSServiceAccessCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableAWSServiceAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableAWSServiceAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAWSServiceAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1EnablePolicyTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnablePolicyTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnablePolicyTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnablePolicyTypeResponse(data, context);
  const response: EnablePolicyTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnablePolicyTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnablePolicyTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "PolicyChangesInProgressException":
    case "com.amazonaws.organizations#PolicyChangesInProgressException":
      throw await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context);
    case "PolicyTypeAlreadyEnabledException":
    case "com.amazonaws.organizations#PolicyTypeAlreadyEnabledException":
      throw await deserializeAws_json1_1PolicyTypeAlreadyEnabledExceptionResponse(parsedOutput, context);
    case "PolicyTypeNotAvailableForOrganizationException":
    case "com.amazonaws.organizations#PolicyTypeNotAvailableForOrganizationException":
      throw await deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationExceptionResponse(parsedOutput, context);
    case "RootNotFoundException":
    case "com.amazonaws.organizations#RootNotFoundException":
      throw await deserializeAws_json1_1RootNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1InviteAccountToOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteAccountToOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1InviteAccountToOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InviteAccountToOrganizationResponse(data, context);
  const response: InviteAccountToOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1InviteAccountToOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteAccountToOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountOwnerNotVerifiedException":
    case "com.amazonaws.organizations#AccountOwnerNotVerifiedException":
      throw await deserializeAws_json1_1AccountOwnerNotVerifiedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "DuplicateHandshakeException":
    case "com.amazonaws.organizations#DuplicateHandshakeException":
      throw await deserializeAws_json1_1DuplicateHandshakeExceptionResponse(parsedOutput, context);
    case "FinalizingOrganizationException":
    case "com.amazonaws.organizations#FinalizingOrganizationException":
      throw await deserializeAws_json1_1FinalizingOrganizationExceptionResponse(parsedOutput, context);
    case "HandshakeConstraintViolationException":
    case "com.amazonaws.organizations#HandshakeConstraintViolationException":
      throw await deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1LeaveOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LeaveOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1LeaveOrganizationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: LeaveOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1LeaveOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LeaveOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "MasterCannotLeaveOrganizationException":
    case "com.amazonaws.organizations#MasterCannotLeaveOrganizationException":
      throw await deserializeAws_json1_1MasterCannotLeaveOrganizationExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAccountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAccountsResponse(data, context);
  const response: ListAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAccountsForParentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsForParentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAccountsForParentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAccountsForParentResponse(data, context);
  const response: ListAccountsForParentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAccountsForParentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsForParentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ParentNotFoundException":
    case "com.amazonaws.organizations#ParentNotFoundException":
      throw await deserializeAws_json1_1ParentNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAWSServiceAccessForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAWSServiceAccessForOrganizationResponse(data, context);
  const response: ListAWSServiceAccessForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAWSServiceAccessForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListChildrenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChildrenCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListChildrenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListChildrenResponse(data, context);
  const response: ListChildrenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListChildrenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChildrenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ParentNotFoundException":
    case "com.amazonaws.organizations#ParentNotFoundException":
      throw await deserializeAws_json1_1ParentNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListCreateAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCreateAccountStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCreateAccountStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCreateAccountStatusResponse(data, context);
  const response: ListCreateAccountStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCreateAccountStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCreateAccountStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDelegatedAdministratorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDelegatedAdministratorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDelegatedAdministratorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDelegatedAdministratorsResponse(data, context);
  const response: ListDelegatedAdministratorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDelegatedAdministratorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDelegatedAdministratorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDelegatedServicesForAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDelegatedServicesForAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDelegatedServicesForAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDelegatedServicesForAccountResponse(data, context);
  const response: ListDelegatedServicesForAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDelegatedServicesForAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDelegatedServicesForAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "AccountNotRegisteredException":
    case "com.amazonaws.organizations#AccountNotRegisteredException":
      throw await deserializeAws_json1_1AccountNotRegisteredExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListHandshakesForAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHandshakesForAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListHandshakesForAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListHandshakesForAccountResponse(data, context);
  const response: ListHandshakesForAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListHandshakesForAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHandshakesForAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListHandshakesForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHandshakesForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListHandshakesForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListHandshakesForOrganizationResponse(data, context);
  const response: ListHandshakesForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListHandshakesForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHandshakesForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListOrganizationalUnitsForParentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationalUnitsForParentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListOrganizationalUnitsForParentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOrganizationalUnitsForParentResponse(data, context);
  const response: ListOrganizationalUnitsForParentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOrganizationalUnitsForParentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationalUnitsForParentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ParentNotFoundException":
    case "com.amazonaws.organizations#ParentNotFoundException":
      throw await deserializeAws_json1_1ParentNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListParentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListParentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListParentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListParentsResponse(data, context);
  const response: ListParentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListParentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListParentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ChildNotFoundException":
    case "com.amazonaws.organizations#ChildNotFoundException":
      throw await deserializeAws_json1_1ChildNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPoliciesResponse(data, context);
  const response: ListPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPoliciesForTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesForTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPoliciesForTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPoliciesForTargetResponse(data, context);
  const response: ListPoliciesForTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPoliciesForTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesForTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.organizations#TargetNotFoundException":
      throw await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListRootsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRootsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRootsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRootsResponse(data, context);
  const response: ListRootsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRootsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRootsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.organizations#TargetNotFoundException":
      throw await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTargetsForPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsForPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTargetsForPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTargetsForPolicyResponse(data, context);
  const response: ListTargetsForPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTargetsForPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsForPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.organizations#PolicyNotFoundException":
      throw await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1MoveAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MoveAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1MoveAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: MoveAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1MoveAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MoveAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "DestinationParentNotFoundException":
    case "com.amazonaws.organizations#DestinationParentNotFoundException":
      throw await deserializeAws_json1_1DestinationParentNotFoundExceptionResponse(parsedOutput, context);
    case "DuplicateAccountException":
    case "com.amazonaws.organizations#DuplicateAccountException":
      throw await deserializeAws_json1_1DuplicateAccountExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "SourceParentNotFoundException":
    case "com.amazonaws.organizations#SourceParentNotFoundException":
      throw await deserializeAws_json1_1SourceParentNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterDelegatedAdministratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDelegatedAdministratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterDelegatedAdministratorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterDelegatedAdministratorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterDelegatedAdministratorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDelegatedAdministratorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountAlreadyRegisteredException":
    case "com.amazonaws.organizations#AccountAlreadyRegisteredException":
      throw await deserializeAws_json1_1AccountAlreadyRegisteredExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RemoveAccountFromOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAccountFromOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveAccountFromOrganizationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveAccountFromOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveAccountFromOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAccountFromOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "MasterCannotLeaveOrganizationException":
    case "com.amazonaws.organizations#MasterCannotLeaveOrganizationException":
      throw await deserializeAws_json1_1MasterCannotLeaveOrganizationExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.organizations#TargetNotFoundException":
      throw await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.organizations#TargetNotFoundException":
      throw await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateOrganizationalUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationalUnitCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateOrganizationalUnitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateOrganizationalUnitResponse(data, context);
  const response: UpdateOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateOrganizationalUnitCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationalUnitCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "DuplicateOrganizationalUnitException":
    case "com.amazonaws.organizations#DuplicateOrganizationalUnitException":
      throw await deserializeAws_json1_1DuplicateOrganizationalUnitExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "OrganizationalUnitNotFoundException":
    case "com.amazonaws.organizations#OrganizationalUnitNotFoundException":
      throw await deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePolicyResponse(data, context);
  const response: UpdatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context);
    case "DuplicatePolicyException":
    case "com.amazonaws.organizations#DuplicatePolicyException":
      throw await deserializeAws_json1_1DuplicatePolicyExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.organizations#MalformedPolicyDocumentException":
      throw await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context);
    case "PolicyChangesInProgressException":
    case "com.amazonaws.organizations#PolicyChangesInProgressException":
      throw await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.organizations#PolicyNotFoundException":
      throw await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedForDependencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedForDependencyException(body, context);
  const exception = new AccessDeniedForDependencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AccountAlreadyClosedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountAlreadyClosedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccountAlreadyClosedException(body, context);
  const exception = new AccountAlreadyClosedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AccountAlreadyRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccountAlreadyRegisteredException(body, context);
  const exception = new AccountAlreadyRegisteredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AccountNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccountNotFoundException(body, context);
  const exception = new AccountNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AccountNotRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountNotRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccountNotRegisteredException(body, context);
  const exception = new AccountNotRegisteredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AccountOwnerNotVerifiedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountOwnerNotVerifiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccountOwnerNotVerifiedException(body, context);
  const exception = new AccountOwnerNotVerifiedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AlreadyInOrganizationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyInOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AlreadyInOrganizationException(body, context);
  const exception = new AlreadyInOrganizationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AWSOrganizationsNotInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AWSOrganizationsNotInUseException(body, context);
  const exception = new AWSOrganizationsNotInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ChildNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChildNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ChildNotFoundException(body, context);
  const exception = new ChildNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
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

const deserializeAws_json1_1ConstraintViolationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConstraintViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConstraintViolationException(body, context);
  const exception = new ConstraintViolationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1CreateAccountStatusNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreateAccountStatusNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CreateAccountStatusNotFoundException(body, context);
  const exception = new CreateAccountStatusNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DestinationParentNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DestinationParentNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DestinationParentNotFoundException(body, context);
  const exception = new DestinationParentNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DuplicateAccountExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateAccountException(body, context);
  const exception = new DuplicateAccountException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DuplicateHandshakeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateHandshakeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateHandshakeException(body, context);
  const exception = new DuplicateHandshakeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DuplicateOrganizationalUnitExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateOrganizationalUnitException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateOrganizationalUnitException(body, context);
  const exception = new DuplicateOrganizationalUnitException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DuplicatePolicyAttachmentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatePolicyAttachmentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicatePolicyAttachmentException(body, context);
  const exception = new DuplicatePolicyAttachmentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DuplicatePolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatePolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicatePolicyException(body, context);
  const exception = new DuplicatePolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EffectivePolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EffectivePolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EffectivePolicyNotFoundException(body, context);
  const exception = new EffectivePolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FinalizingOrganizationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FinalizingOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FinalizingOrganizationException(body, context);
  const exception = new FinalizingOrganizationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HandshakeAlreadyInStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HandshakeAlreadyInStateException(body, context);
  const exception = new HandshakeAlreadyInStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HandshakeConstraintViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HandshakeConstraintViolationException(body, context);
  const exception = new HandshakeConstraintViolationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1HandshakeNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HandshakeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HandshakeNotFoundException(body, context);
  const exception = new HandshakeNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidHandshakeTransitionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidHandshakeTransitionException(body, context);
  const exception = new InvalidHandshakeTransitionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MalformedPolicyDocumentException(body, context);
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MasterCannotLeaveOrganizationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MasterCannotLeaveOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MasterCannotLeaveOrganizationException(body, context);
  const exception = new MasterCannotLeaveOrganizationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OrganizationalUnitNotEmptyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationalUnitNotEmptyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationalUnitNotEmptyException(body, context);
  const exception = new OrganizationalUnitNotEmptyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationalUnitNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationalUnitNotFoundException(body, context);
  const exception = new OrganizationalUnitNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OrganizationNotEmptyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationNotEmptyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationNotEmptyException(body, context);
  const exception = new OrganizationNotEmptyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ParentNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParentNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParentNotFoundException(body, context);
  const exception = new ParentNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PolicyChangesInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyChangesInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyChangesInProgressException(body, context);
  const exception = new PolicyChangesInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PolicyInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyInUseException(body, context);
  const exception = new PolicyInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PolicyNotAttachedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotAttachedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyNotAttachedException(body, context);
  const exception = new PolicyNotAttachedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyNotFoundException(body, context);
  const exception = new PolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PolicyTypeAlreadyEnabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyTypeAlreadyEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyTypeAlreadyEnabledException(body, context);
  const exception = new PolicyTypeAlreadyEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyTypeNotAvailableForOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationException(body, context);
  const exception = new PolicyTypeNotAvailableForOrganizationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PolicyTypeNotEnabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyTypeNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyTypeNotEnabledException(body, context);
  const exception = new PolicyTypeNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourcePolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourcePolicyNotFoundException(body, context);
  const exception = new ResourcePolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1RootNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RootNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RootNotFoundException(body, context);
  const exception = new RootNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceException(body, context);
  const exception = new ServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SourceParentNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceParentNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SourceParentNotFoundException(body, context);
  const exception = new SourceParentNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TargetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TargetNotFoundException(body, context);
  const exception = new TargetNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(body, context);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedAPIEndpointException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedAPIEndpointException(body, context);
  const exception = new UnsupportedAPIEndpointException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AcceptHandshakeRequest = (input: AcceptHandshakeRequest, context: __SerdeContext): any => {
  return {
    ...(input.HandshakeId != null && { HandshakeId: input.HandshakeId }),
  };
};

const serializeAws_json1_1AttachPolicyRequest = (input: AttachPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
  };
};

const serializeAws_json1_1CancelHandshakeRequest = (input: CancelHandshakeRequest, context: __SerdeContext): any => {
  return {
    ...(input.HandshakeId != null && { HandshakeId: input.HandshakeId }),
  };
};

const serializeAws_json1_1CloseAccountRequest = (input: CloseAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
  };
};

const serializeAws_json1_1CreateAccountRequest = (input: CreateAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountName != null && { AccountName: input.AccountName }),
    ...(input.Email != null && { Email: input.Email }),
    ...(input.IamUserAccessToBilling != null && { IamUserAccessToBilling: input.IamUserAccessToBilling }),
    ...(input.RoleName != null && { RoleName: input.RoleName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateAccountStates = (
  input: (CreateAccountState | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CreateGovCloudAccountRequest = (
  input: CreateGovCloudAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountName != null && { AccountName: input.AccountName }),
    ...(input.Email != null && { Email: input.Email }),
    ...(input.IamUserAccessToBilling != null && { IamUserAccessToBilling: input.IamUserAccessToBilling }),
    ...(input.RoleName != null && { RoleName: input.RoleName }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateOrganizationalUnitRequest = (
  input: CreateOrganizationalUnitRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParentId != null && { ParentId: input.ParentId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateOrganizationRequest = (
  input: CreateOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FeatureSet != null && { FeatureSet: input.FeatureSet }),
  };
};

const serializeAws_json1_1CreatePolicyRequest = (input: CreatePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DeclineHandshakeRequest = (input: DeclineHandshakeRequest, context: __SerdeContext): any => {
  return {
    ...(input.HandshakeId != null && { HandshakeId: input.HandshakeId }),
  };
};

const serializeAws_json1_1DeleteOrganizationalUnitRequest = (
  input: DeleteOrganizationalUnitRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationalUnitId != null && { OrganizationalUnitId: input.OrganizationalUnitId }),
  };
};

const serializeAws_json1_1DeletePolicyRequest = (input: DeletePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
  };
};

const serializeAws_json1_1DeregisterDelegatedAdministratorRequest = (
  input: DeregisterDelegatedAdministratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ServicePrincipal != null && { ServicePrincipal: input.ServicePrincipal }),
  };
};

const serializeAws_json1_1DescribeAccountRequest = (input: DescribeAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
  };
};

const serializeAws_json1_1DescribeCreateAccountStatusRequest = (
  input: DescribeCreateAccountStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreateAccountRequestId != null && { CreateAccountRequestId: input.CreateAccountRequestId }),
  };
};

const serializeAws_json1_1DescribeEffectivePolicyRequest = (
  input: DescribeEffectivePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PolicyType != null && { PolicyType: input.PolicyType }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
  };
};

const serializeAws_json1_1DescribeHandshakeRequest = (
  input: DescribeHandshakeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HandshakeId != null && { HandshakeId: input.HandshakeId }),
  };
};

const serializeAws_json1_1DescribeOrganizationalUnitRequest = (
  input: DescribeOrganizationalUnitRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationalUnitId != null && { OrganizationalUnitId: input.OrganizationalUnitId }),
  };
};

const serializeAws_json1_1DescribePolicyRequest = (input: DescribePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
  };
};

const serializeAws_json1_1DetachPolicyRequest = (input: DetachPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
  };
};

const serializeAws_json1_1DisableAWSServiceAccessRequest = (
  input: DisableAWSServiceAccessRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ServicePrincipal != null && { ServicePrincipal: input.ServicePrincipal }),
  };
};

const serializeAws_json1_1DisablePolicyTypeRequest = (
  input: DisablePolicyTypeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PolicyType != null && { PolicyType: input.PolicyType }),
    ...(input.RootId != null && { RootId: input.RootId }),
  };
};

const serializeAws_json1_1EnableAllFeaturesRequest = (
  input: EnableAllFeaturesRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1EnableAWSServiceAccessRequest = (
  input: EnableAWSServiceAccessRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ServicePrincipal != null && { ServicePrincipal: input.ServicePrincipal }),
  };
};

const serializeAws_json1_1EnablePolicyTypeRequest = (input: EnablePolicyTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyType != null && { PolicyType: input.PolicyType }),
    ...(input.RootId != null && { RootId: input.RootId }),
  };
};

const serializeAws_json1_1HandshakeFilter = (input: HandshakeFilter, context: __SerdeContext): any => {
  return {
    ...(input.ActionType != null && { ActionType: input.ActionType }),
    ...(input.ParentHandshakeId != null && { ParentHandshakeId: input.ParentHandshakeId }),
  };
};

const serializeAws_json1_1HandshakeParty = (input: HandshakeParty, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1InviteAccountToOrganizationRequest = (
  input: InviteAccountToOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Notes != null && { Notes: input.Notes }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.Target != null && { Target: serializeAws_json1_1HandshakeParty(input.Target, context) }),
  };
};

const serializeAws_json1_1ListAccountsForParentRequest = (
  input: ListAccountsForParentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParentId != null && { ParentId: input.ParentId }),
  };
};

const serializeAws_json1_1ListAccountsRequest = (input: ListAccountsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListAWSServiceAccessForOrganizationRequest = (
  input: ListAWSServiceAccessForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListChildrenRequest = (input: ListChildrenRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChildType != null && { ChildType: input.ChildType }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParentId != null && { ParentId: input.ParentId }),
  };
};

const serializeAws_json1_1ListCreateAccountStatusRequest = (
  input: ListCreateAccountStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.States != null && { States: serializeAws_json1_1CreateAccountStates(input.States, context) }),
  };
};

const serializeAws_json1_1ListDelegatedAdministratorsRequest = (
  input: ListDelegatedAdministratorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServicePrincipal != null && { ServicePrincipal: input.ServicePrincipal }),
  };
};

const serializeAws_json1_1ListDelegatedServicesForAccountRequest = (
  input: ListDelegatedServicesForAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListHandshakesForAccountRequest = (
  input: ListHandshakesForAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1HandshakeFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListHandshakesForOrganizationRequest = (
  input: ListHandshakesForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1HandshakeFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListOrganizationalUnitsForParentRequest = (
  input: ListOrganizationalUnitsForParentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParentId != null && { ParentId: input.ParentId }),
  };
};

const serializeAws_json1_1ListParentsRequest = (input: ListParentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChildId != null && { ChildId: input.ChildId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListPoliciesForTargetRequest = (
  input: ListPoliciesForTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: input.Filter }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
  };
};

const serializeAws_json1_1ListPoliciesRequest = (input: ListPoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: input.Filter }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListRootsRequest = (input: ListRootsRequest, context: __SerdeContext): any => {
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
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1ListTargetsForPolicyRequest = (
  input: ListTargetsForPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
  };
};

const serializeAws_json1_1MoveAccountRequest = (input: MoveAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.DestinationParentId != null && { DestinationParentId: input.DestinationParentId }),
    ...(input.SourceParentId != null && { SourceParentId: input.SourceParentId }),
  };
};

const serializeAws_json1_1PutResourcePolicyRequest = (
  input: PutResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1RegisterDelegatedAdministratorRequest = (
  input: RegisterDelegatedAdministratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ServicePrincipal != null && { ServicePrincipal: input.ServicePrincipal }),
  };
};

const serializeAws_json1_1RemoveAccountFromOrganizationRequest = (
  input: RemoveAccountFromOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
  };
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
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
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

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateOrganizationalUnitRequest = (
  input: UpdateOrganizationalUnitRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationalUnitId != null && { OrganizationalUnitId: input.OrganizationalUnitId }),
  };
};

const serializeAws_json1_1UpdatePolicyRequest = (input: UpdatePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
  };
};

const deserializeAws_json1_1AcceptHandshakeResponse = (
  output: any,
  context: __SerdeContext
): AcceptHandshakeResponse => {
  return {
    Handshake: output.Handshake != null ? deserializeAws_json1_1Handshake(output.Handshake, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AccessDeniedForDependencyException = (
  output: any,
  context: __SerdeContext
): AccessDeniedForDependencyException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_json1_1Account = (output: any, context: __SerdeContext): Account => {
  return {
    Arn: __expectString(output.Arn),
    Email: __expectString(output.Email),
    Id: __expectString(output.Id),
    JoinedMethod: __expectString(output.JoinedMethod),
    JoinedTimestamp:
      output.JoinedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.JoinedTimestamp)))
        : undefined,
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1AccountAlreadyClosedException = (
  output: any,
  context: __SerdeContext
): AccountAlreadyClosedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AccountAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): AccountAlreadyRegisteredException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AccountNotFoundException = (
  output: any,
  context: __SerdeContext
): AccountNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AccountNotRegisteredException = (
  output: any,
  context: __SerdeContext
): AccountNotRegisteredException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AccountOwnerNotVerifiedException = (
  output: any,
  context: __SerdeContext
): AccountOwnerNotVerifiedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Accounts = (output: any, context: __SerdeContext): Account[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Account(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AlreadyInOrganizationException = (
  output: any,
  context: __SerdeContext
): AlreadyInOrganizationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AWSOrganizationsNotInUseException = (
  output: any,
  context: __SerdeContext
): AWSOrganizationsNotInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CancelHandshakeResponse = (
  output: any,
  context: __SerdeContext
): CancelHandshakeResponse => {
  return {
    Handshake: output.Handshake != null ? deserializeAws_json1_1Handshake(output.Handshake, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Child = (output: any, context: __SerdeContext): Child => {
  return {
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ChildNotFoundException = (output: any, context: __SerdeContext): ChildNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Children = (output: any, context: __SerdeContext): Child[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Child(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConstraintViolationException = (
  output: any,
  context: __SerdeContext
): ConstraintViolationException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_json1_1CreateAccountResponse = (output: any, context: __SerdeContext): CreateAccountResponse => {
  return {
    CreateAccountStatus:
      output.CreateAccountStatus != null
        ? deserializeAws_json1_1CreateAccountStatus(output.CreateAccountStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateAccountStatus = (output: any, context: __SerdeContext): CreateAccountStatus => {
  return {
    AccountId: __expectString(output.AccountId),
    AccountName: __expectString(output.AccountName),
    CompletedTimestamp:
      output.CompletedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletedTimestamp)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    GovCloudAccountId: __expectString(output.GovCloudAccountId),
    Id: __expectString(output.Id),
    RequestedTimestamp:
      output.RequestedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RequestedTimestamp)))
        : undefined,
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1CreateAccountStatuses = (output: any, context: __SerdeContext): CreateAccountStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CreateAccountStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateAccountStatusNotFoundException = (
  output: any,
  context: __SerdeContext
): CreateAccountStatusNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CreateGovCloudAccountResponse = (
  output: any,
  context: __SerdeContext
): CreateGovCloudAccountResponse => {
  return {
    CreateAccountStatus:
      output.CreateAccountStatus != null
        ? deserializeAws_json1_1CreateAccountStatus(output.CreateAccountStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateOrganizationalUnitResponse = (
  output: any,
  context: __SerdeContext
): CreateOrganizationalUnitResponse => {
  return {
    OrganizationalUnit:
      output.OrganizationalUnit != null
        ? deserializeAws_json1_1OrganizationalUnit(output.OrganizationalUnit, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateOrganizationResponse = (
  output: any,
  context: __SerdeContext
): CreateOrganizationResponse => {
  return {
    Organization:
      output.Organization != null ? deserializeAws_json1_1Organization(output.Organization, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreatePolicyResponse = (output: any, context: __SerdeContext): CreatePolicyResponse => {
  return {
    Policy: output.Policy != null ? deserializeAws_json1_1Policy(output.Policy, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeclineHandshakeResponse = (
  output: any,
  context: __SerdeContext
): DeclineHandshakeResponse => {
  return {
    Handshake: output.Handshake != null ? deserializeAws_json1_1Handshake(output.Handshake, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DelegatedAdministrator = (output: any, context: __SerdeContext): DelegatedAdministrator => {
  return {
    Arn: __expectString(output.Arn),
    DelegationEnabledDate:
      output.DelegationEnabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DelegationEnabledDate)))
        : undefined,
    Email: __expectString(output.Email),
    Id: __expectString(output.Id),
    JoinedMethod: __expectString(output.JoinedMethod),
    JoinedTimestamp:
      output.JoinedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.JoinedTimestamp)))
        : undefined,
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DelegatedAdministrators = (
  output: any,
  context: __SerdeContext
): DelegatedAdministrator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DelegatedAdministrator(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DelegatedService = (output: any, context: __SerdeContext): DelegatedService => {
  return {
    DelegationEnabledDate:
      output.DelegationEnabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DelegationEnabledDate)))
        : undefined,
    ServicePrincipal: __expectString(output.ServicePrincipal),
  } as any;
};

const deserializeAws_json1_1DelegatedServices = (output: any, context: __SerdeContext): DelegatedService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DelegatedService(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DescribeAccountResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccountResponse => {
  return {
    Account: output.Account != null ? deserializeAws_json1_1Account(output.Account, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCreateAccountStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeCreateAccountStatusResponse => {
  return {
    CreateAccountStatus:
      output.CreateAccountStatus != null
        ? deserializeAws_json1_1CreateAccountStatus(output.CreateAccountStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEffectivePolicyResponse = (
  output: any,
  context: __SerdeContext
): DescribeEffectivePolicyResponse => {
  return {
    EffectivePolicy:
      output.EffectivePolicy != null
        ? deserializeAws_json1_1EffectivePolicy(output.EffectivePolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeHandshakeResponse = (
  output: any,
  context: __SerdeContext
): DescribeHandshakeResponse => {
  return {
    Handshake: output.Handshake != null ? deserializeAws_json1_1Handshake(output.Handshake, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeOrganizationalUnitResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationalUnitResponse => {
  return {
    OrganizationalUnit:
      output.OrganizationalUnit != null
        ? deserializeAws_json1_1OrganizationalUnit(output.OrganizationalUnit, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationResponse => {
  return {
    Organization:
      output.Organization != null ? deserializeAws_json1_1Organization(output.Organization, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePolicyResponse = (output: any, context: __SerdeContext): DescribePolicyResponse => {
  return {
    Policy: output.Policy != null ? deserializeAws_json1_1Policy(output.Policy, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourcePolicyResponse => {
  return {
    ResourcePolicy:
      output.ResourcePolicy != null ? deserializeAws_json1_1ResourcePolicy(output.ResourcePolicy, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DestinationParentNotFoundException = (
  output: any,
  context: __SerdeContext
): DestinationParentNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DisablePolicyTypeResponse = (
  output: any,
  context: __SerdeContext
): DisablePolicyTypeResponse => {
  return {
    Root: output.Root != null ? deserializeAws_json1_1Root(output.Root, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DuplicateAccountException = (
  output: any,
  context: __SerdeContext
): DuplicateAccountException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DuplicateHandshakeException = (
  output: any,
  context: __SerdeContext
): DuplicateHandshakeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DuplicateOrganizationalUnitException = (
  output: any,
  context: __SerdeContext
): DuplicateOrganizationalUnitException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DuplicatePolicyAttachmentException = (
  output: any,
  context: __SerdeContext
): DuplicatePolicyAttachmentException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DuplicatePolicyException = (
  output: any,
  context: __SerdeContext
): DuplicatePolicyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EffectivePolicy = (output: any, context: __SerdeContext): EffectivePolicy => {
  return {
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    PolicyContent: __expectString(output.PolicyContent),
    PolicyType: __expectString(output.PolicyType),
    TargetId: __expectString(output.TargetId),
  } as any;
};

const deserializeAws_json1_1EffectivePolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): EffectivePolicyNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EnableAllFeaturesResponse = (
  output: any,
  context: __SerdeContext
): EnableAllFeaturesResponse => {
  return {
    Handshake: output.Handshake != null ? deserializeAws_json1_1Handshake(output.Handshake, context) : undefined,
  } as any;
};

const deserializeAws_json1_1EnabledServicePrincipal = (
  output: any,
  context: __SerdeContext
): EnabledServicePrincipal => {
  return {
    DateEnabled:
      output.DateEnabled != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateEnabled)))
        : undefined,
    ServicePrincipal: __expectString(output.ServicePrincipal),
  } as any;
};

const deserializeAws_json1_1EnabledServicePrincipals = (
  output: any,
  context: __SerdeContext
): EnabledServicePrincipal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EnabledServicePrincipal(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EnablePolicyTypeResponse = (
  output: any,
  context: __SerdeContext
): EnablePolicyTypeResponse => {
  return {
    Root: output.Root != null ? deserializeAws_json1_1Root(output.Root, context) : undefined,
  } as any;
};

const deserializeAws_json1_1FinalizingOrganizationException = (
  output: any,
  context: __SerdeContext
): FinalizingOrganizationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Handshake = (output: any, context: __SerdeContext): Handshake => {
  return {
    Action: __expectString(output.Action),
    Arn: __expectString(output.Arn),
    ExpirationTimestamp:
      output.ExpirationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationTimestamp)))
        : undefined,
    Id: __expectString(output.Id),
    Parties: output.Parties != null ? deserializeAws_json1_1HandshakeParties(output.Parties, context) : undefined,
    RequestedTimestamp:
      output.RequestedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RequestedTimestamp)))
        : undefined,
    Resources:
      output.Resources != null ? deserializeAws_json1_1HandshakeResources(output.Resources, context) : undefined,
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1HandshakeAlreadyInStateException = (
  output: any,
  context: __SerdeContext
): HandshakeAlreadyInStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1HandshakeConstraintViolationException = (
  output: any,
  context: __SerdeContext
): HandshakeConstraintViolationException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_json1_1HandshakeNotFoundException = (
  output: any,
  context: __SerdeContext
): HandshakeNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1HandshakeParties = (output: any, context: __SerdeContext): HandshakeParty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1HandshakeParty(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1HandshakeParty = (output: any, context: __SerdeContext): HandshakeParty => {
  return {
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1HandshakeResource = (output: any, context: __SerdeContext): HandshakeResource => {
  return {
    Resources:
      output.Resources != null ? deserializeAws_json1_1HandshakeResources(output.Resources, context) : undefined,
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1HandshakeResources = (output: any, context: __SerdeContext): HandshakeResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1HandshakeResource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Handshakes = (output: any, context: __SerdeContext): Handshake[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Handshake(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InvalidHandshakeTransitionException = (
  output: any,
  context: __SerdeContext
): InvalidHandshakeTransitionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_json1_1InviteAccountToOrganizationResponse = (
  output: any,
  context: __SerdeContext
): InviteAccountToOrganizationResponse => {
  return {
    Handshake: output.Handshake != null ? deserializeAws_json1_1Handshake(output.Handshake, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListAccountsForParentResponse = (
  output: any,
  context: __SerdeContext
): ListAccountsForParentResponse => {
  return {
    Accounts: output.Accounts != null ? deserializeAws_json1_1Accounts(output.Accounts, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListAccountsResponse = (output: any, context: __SerdeContext): ListAccountsResponse => {
  return {
    Accounts: output.Accounts != null ? deserializeAws_json1_1Accounts(output.Accounts, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListAWSServiceAccessForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): ListAWSServiceAccessForOrganizationResponse => {
  return {
    EnabledServicePrincipals:
      output.EnabledServicePrincipals != null
        ? deserializeAws_json1_1EnabledServicePrincipals(output.EnabledServicePrincipals, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListChildrenResponse = (output: any, context: __SerdeContext): ListChildrenResponse => {
  return {
    Children: output.Children != null ? deserializeAws_json1_1Children(output.Children, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCreateAccountStatusResponse = (
  output: any,
  context: __SerdeContext
): ListCreateAccountStatusResponse => {
  return {
    CreateAccountStatuses:
      output.CreateAccountStatuses != null
        ? deserializeAws_json1_1CreateAccountStatuses(output.CreateAccountStatuses, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDelegatedAdministratorsResponse = (
  output: any,
  context: __SerdeContext
): ListDelegatedAdministratorsResponse => {
  return {
    DelegatedAdministrators:
      output.DelegatedAdministrators != null
        ? deserializeAws_json1_1DelegatedAdministrators(output.DelegatedAdministrators, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDelegatedServicesForAccountResponse = (
  output: any,
  context: __SerdeContext
): ListDelegatedServicesForAccountResponse => {
  return {
    DelegatedServices:
      output.DelegatedServices != null
        ? deserializeAws_json1_1DelegatedServices(output.DelegatedServices, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListHandshakesForAccountResponse = (
  output: any,
  context: __SerdeContext
): ListHandshakesForAccountResponse => {
  return {
    Handshakes: output.Handshakes != null ? deserializeAws_json1_1Handshakes(output.Handshakes, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListHandshakesForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): ListHandshakesForOrganizationResponse => {
  return {
    Handshakes: output.Handshakes != null ? deserializeAws_json1_1Handshakes(output.Handshakes, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListOrganizationalUnitsForParentResponse = (
  output: any,
  context: __SerdeContext
): ListOrganizationalUnitsForParentResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationalUnits:
      output.OrganizationalUnits != null
        ? deserializeAws_json1_1OrganizationalUnits(output.OrganizationalUnits, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListParentsResponse = (output: any, context: __SerdeContext): ListParentsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Parents: output.Parents != null ? deserializeAws_json1_1Parents(output.Parents, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListPoliciesForTargetResponse = (
  output: any,
  context: __SerdeContext
): ListPoliciesForTargetResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Policies: output.Policies != null ? deserializeAws_json1_1Policies(output.Policies, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListPoliciesResponse = (output: any, context: __SerdeContext): ListPoliciesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Policies: output.Policies != null ? deserializeAws_json1_1Policies(output.Policies, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListRootsResponse = (output: any, context: __SerdeContext): ListRootsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Roots: output.Roots != null ? deserializeAws_json1_1Roots(output.Roots, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTargetsForPolicyResponse = (
  output: any,
  context: __SerdeContext
): ListTargetsForPolicyResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Targets: output.Targets != null ? deserializeAws_json1_1PolicyTargets(output.Targets, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1MasterCannotLeaveOrganizationException = (
  output: any,
  context: __SerdeContext
): MasterCannotLeaveOrganizationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Organization = (output: any, context: __SerdeContext): Organization => {
  return {
    Arn: __expectString(output.Arn),
    AvailablePolicyTypes:
      output.AvailablePolicyTypes != null
        ? deserializeAws_json1_1PolicyTypes(output.AvailablePolicyTypes, context)
        : undefined,
    FeatureSet: __expectString(output.FeatureSet),
    Id: __expectString(output.Id),
    MasterAccountArn: __expectString(output.MasterAccountArn),
    MasterAccountEmail: __expectString(output.MasterAccountEmail),
    MasterAccountId: __expectString(output.MasterAccountId),
  } as any;
};

const deserializeAws_json1_1OrganizationalUnit = (output: any, context: __SerdeContext): OrganizationalUnit => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1OrganizationalUnitNotEmptyException = (
  output: any,
  context: __SerdeContext
): OrganizationalUnitNotEmptyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OrganizationalUnitNotFoundException = (
  output: any,
  context: __SerdeContext
): OrganizationalUnitNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OrganizationalUnits = (output: any, context: __SerdeContext): OrganizationalUnit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OrganizationalUnit(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OrganizationNotEmptyException = (
  output: any,
  context: __SerdeContext
): OrganizationNotEmptyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Parent = (output: any, context: __SerdeContext): Parent => {
  return {
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ParentNotFoundException = (
  output: any,
  context: __SerdeContext
): ParentNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Parents = (output: any, context: __SerdeContext): Parent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Parent(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Policies = (output: any, context: __SerdeContext): PolicySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PolicySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Policy = (output: any, context: __SerdeContext): Policy => {
  return {
    Content: __expectString(output.Content),
    PolicySummary:
      output.PolicySummary != null ? deserializeAws_json1_1PolicySummary(output.PolicySummary, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PolicyChangesInProgressException = (
  output: any,
  context: __SerdeContext
): PolicyChangesInProgressException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PolicyInUseException = (output: any, context: __SerdeContext): PolicyInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PolicyNotAttachedException = (
  output: any,
  context: __SerdeContext
): PolicyNotAttachedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): PolicyNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PolicySummary = (output: any, context: __SerdeContext): PolicySummary => {
  return {
    Arn: __expectString(output.Arn),
    AwsManaged: __expectBoolean(output.AwsManaged),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1PolicyTargets = (output: any, context: __SerdeContext): PolicyTargetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PolicyTargetSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PolicyTargetSummary = (output: any, context: __SerdeContext): PolicyTargetSummary => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
    TargetId: __expectString(output.TargetId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1PolicyTypeAlreadyEnabledException = (
  output: any,
  context: __SerdeContext
): PolicyTypeAlreadyEnabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationException = (
  output: any,
  context: __SerdeContext
): PolicyTypeNotAvailableForOrganizationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PolicyTypeNotEnabledException = (
  output: any,
  context: __SerdeContext
): PolicyTypeNotEnabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1PolicyTypes = (output: any, context: __SerdeContext): PolicyTypeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PolicyTypeSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PolicyTypeSummary = (output: any, context: __SerdeContext): PolicyTypeSummary => {
  return {
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1PutResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyResponse => {
  return {
    ResourcePolicy:
      output.ResourcePolicy != null ? deserializeAws_json1_1ResourcePolicy(output.ResourcePolicy, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ResourcePolicy = (output: any, context: __SerdeContext): ResourcePolicy => {
  return {
    Content: __expectString(output.Content),
    ResourcePolicySummary:
      output.ResourcePolicySummary != null
        ? deserializeAws_json1_1ResourcePolicySummary(output.ResourcePolicySummary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ResourcePolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourcePolicyNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourcePolicySummary = (output: any, context: __SerdeContext): ResourcePolicySummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1Root = (output: any, context: __SerdeContext): Root => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    PolicyTypes:
      output.PolicyTypes != null ? deserializeAws_json1_1PolicyTypes(output.PolicyTypes, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RootNotFoundException = (output: any, context: __SerdeContext): RootNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Roots = (output: any, context: __SerdeContext): Root[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Root(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServiceException = (output: any, context: __SerdeContext): ServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SourceParentNotFoundException = (
  output: any,
  context: __SerdeContext
): SourceParentNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
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

const deserializeAws_json1_1TargetNotFoundException = (
  output: any,
  context: __SerdeContext
): TargetNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1UnsupportedAPIEndpointException = (
  output: any,
  context: __SerdeContext
): UnsupportedAPIEndpointException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UpdateOrganizationalUnitResponse = (
  output: any,
  context: __SerdeContext
): UpdateOrganizationalUnitResponse => {
  return {
    OrganizationalUnit:
      output.OrganizationalUnit != null
        ? deserializeAws_json1_1OrganizationalUnit(output.OrganizationalUnit, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdatePolicyResponse = (output: any, context: __SerdeContext): UpdatePolicyResponse => {
  return {
    Policy: output.Policy != null ? deserializeAws_json1_1Policy(output.Policy, context) : undefined,
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
