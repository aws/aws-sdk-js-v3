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

/**
 * serializeAws_json1_1AcceptHandshakeCommand
 */
export const se_AcceptHandshakeCommand = async (
  input: AcceptHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.AcceptHandshake",
  };
  let body: any;
  body = JSON.stringify(se_AcceptHandshakeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachPolicyCommand
 */
export const se_AttachPolicyCommand = async (
  input: AttachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.AttachPolicy",
  };
  let body: any;
  body = JSON.stringify(se_AttachPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelHandshakeCommand
 */
export const se_CancelHandshakeCommand = async (
  input: CancelHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.CancelHandshake",
  };
  let body: any;
  body = JSON.stringify(se_CancelHandshakeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CloseAccountCommand
 */
export const se_CloseAccountCommand = async (
  input: CloseAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.CloseAccount",
  };
  let body: any;
  body = JSON.stringify(se_CloseAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAccountCommand
 */
export const se_CreateAccountCommand = async (
  input: CreateAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.CreateAccount",
  };
  let body: any;
  body = JSON.stringify(se_CreateAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGovCloudAccountCommand
 */
export const se_CreateGovCloudAccountCommand = async (
  input: CreateGovCloudAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.CreateGovCloudAccount",
  };
  let body: any;
  body = JSON.stringify(se_CreateGovCloudAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateOrganizationCommand
 */
export const se_CreateOrganizationCommand = async (
  input: CreateOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.CreateOrganization",
  };
  let body: any;
  body = JSON.stringify(se_CreateOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateOrganizationalUnitCommand
 */
export const se_CreateOrganizationalUnitCommand = async (
  input: CreateOrganizationalUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.CreateOrganizationalUnit",
  };
  let body: any;
  body = JSON.stringify(se_CreateOrganizationalUnitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePolicyCommand
 */
export const se_CreatePolicyCommand = async (
  input: CreatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.CreatePolicy",
  };
  let body: any;
  body = JSON.stringify(se_CreatePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeclineHandshakeCommand
 */
export const se_DeclineHandshakeCommand = async (
  input: DeclineHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DeclineHandshake",
  };
  let body: any;
  body = JSON.stringify(se_DeclineHandshakeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteOrganizationCommand
 */
export const se_DeleteOrganizationCommand = async (
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

/**
 * serializeAws_json1_1DeleteOrganizationalUnitCommand
 */
export const se_DeleteOrganizationalUnitCommand = async (
  input: DeleteOrganizationalUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DeleteOrganizationalUnit",
  };
  let body: any;
  body = JSON.stringify(se_DeleteOrganizationalUnitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePolicyCommand
 */
export const se_DeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DeletePolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeletePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
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

/**
 * serializeAws_json1_1DeregisterDelegatedAdministratorCommand
 */
export const se_DeregisterDelegatedAdministratorCommand = async (
  input: DeregisterDelegatedAdministratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DeregisterDelegatedAdministrator",
  };
  let body: any;
  body = JSON.stringify(se_DeregisterDelegatedAdministratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccountCommand
 */
export const se_DescribeAccountCommand = async (
  input: DescribeAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DescribeAccount",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCreateAccountStatusCommand
 */
export const se_DescribeCreateAccountStatusCommand = async (
  input: DescribeCreateAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DescribeCreateAccountStatus",
  };
  let body: any;
  body = JSON.stringify(se_DescribeCreateAccountStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEffectivePolicyCommand
 */
export const se_DescribeEffectivePolicyCommand = async (
  input: DescribeEffectivePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DescribeEffectivePolicy",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEffectivePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHandshakeCommand
 */
export const se_DescribeHandshakeCommand = async (
  input: DescribeHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DescribeHandshake",
  };
  let body: any;
  body = JSON.stringify(se_DescribeHandshakeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeOrganizationCommand
 */
export const se_DescribeOrganizationCommand = async (
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

/**
 * serializeAws_json1_1DescribeOrganizationalUnitCommand
 */
export const se_DescribeOrganizationalUnitCommand = async (
  input: DescribeOrganizationalUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DescribeOrganizationalUnit",
  };
  let body: any;
  body = JSON.stringify(se_DescribeOrganizationalUnitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePolicyCommand
 */
export const se_DescribePolicyCommand = async (
  input: DescribePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DescribePolicy",
  };
  let body: any;
  body = JSON.stringify(se_DescribePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeResourcePolicyCommand
 */
export const se_DescribeResourcePolicyCommand = async (
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

/**
 * serializeAws_json1_1DetachPolicyCommand
 */
export const se_DetachPolicyCommand = async (
  input: DetachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DetachPolicy",
  };
  let body: any;
  body = JSON.stringify(se_DetachPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableAWSServiceAccessCommand
 */
export const se_DisableAWSServiceAccessCommand = async (
  input: DisableAWSServiceAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DisableAWSServiceAccess",
  };
  let body: any;
  body = JSON.stringify(se_DisableAWSServiceAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisablePolicyTypeCommand
 */
export const se_DisablePolicyTypeCommand = async (
  input: DisablePolicyTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.DisablePolicyType",
  };
  let body: any;
  body = JSON.stringify(se_DisablePolicyTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableAllFeaturesCommand
 */
export const se_EnableAllFeaturesCommand = async (
  input: EnableAllFeaturesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.EnableAllFeatures",
  };
  let body: any;
  body = JSON.stringify(se_EnableAllFeaturesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableAWSServiceAccessCommand
 */
export const se_EnableAWSServiceAccessCommand = async (
  input: EnableAWSServiceAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.EnableAWSServiceAccess",
  };
  let body: any;
  body = JSON.stringify(se_EnableAWSServiceAccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnablePolicyTypeCommand
 */
export const se_EnablePolicyTypeCommand = async (
  input: EnablePolicyTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.EnablePolicyType",
  };
  let body: any;
  body = JSON.stringify(se_EnablePolicyTypeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1InviteAccountToOrganizationCommand
 */
export const se_InviteAccountToOrganizationCommand = async (
  input: InviteAccountToOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.InviteAccountToOrganization",
  };
  let body: any;
  body = JSON.stringify(se_InviteAccountToOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1LeaveOrganizationCommand
 */
export const se_LeaveOrganizationCommand = async (
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

/**
 * serializeAws_json1_1ListAccountsCommand
 */
export const se_ListAccountsCommand = async (
  input: ListAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListAccounts",
  };
  let body: any;
  body = JSON.stringify(se_ListAccountsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccountsForParentCommand
 */
export const se_ListAccountsForParentCommand = async (
  input: ListAccountsForParentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListAccountsForParent",
  };
  let body: any;
  body = JSON.stringify(se_ListAccountsForParentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand
 */
export const se_ListAWSServiceAccessForOrganizationCommand = async (
  input: ListAWSServiceAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization",
  };
  let body: any;
  body = JSON.stringify(se_ListAWSServiceAccessForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListChildrenCommand
 */
export const se_ListChildrenCommand = async (
  input: ListChildrenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListChildren",
  };
  let body: any;
  body = JSON.stringify(se_ListChildrenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCreateAccountStatusCommand
 */
export const se_ListCreateAccountStatusCommand = async (
  input: ListCreateAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListCreateAccountStatus",
  };
  let body: any;
  body = JSON.stringify(se_ListCreateAccountStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDelegatedAdministratorsCommand
 */
export const se_ListDelegatedAdministratorsCommand = async (
  input: ListDelegatedAdministratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListDelegatedAdministrators",
  };
  let body: any;
  body = JSON.stringify(se_ListDelegatedAdministratorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDelegatedServicesForAccountCommand
 */
export const se_ListDelegatedServicesForAccountCommand = async (
  input: ListDelegatedServicesForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListDelegatedServicesForAccount",
  };
  let body: any;
  body = JSON.stringify(se_ListDelegatedServicesForAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHandshakesForAccountCommand
 */
export const se_ListHandshakesForAccountCommand = async (
  input: ListHandshakesForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListHandshakesForAccount",
  };
  let body: any;
  body = JSON.stringify(se_ListHandshakesForAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHandshakesForOrganizationCommand
 */
export const se_ListHandshakesForOrganizationCommand = async (
  input: ListHandshakesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListHandshakesForOrganization",
  };
  let body: any;
  body = JSON.stringify(se_ListHandshakesForOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOrganizationalUnitsForParentCommand
 */
export const se_ListOrganizationalUnitsForParentCommand = async (
  input: ListOrganizationalUnitsForParentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListOrganizationalUnitsForParent",
  };
  let body: any;
  body = JSON.stringify(se_ListOrganizationalUnitsForParentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListParentsCommand
 */
export const se_ListParentsCommand = async (
  input: ListParentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListParents",
  };
  let body: any;
  body = JSON.stringify(se_ListParentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPoliciesCommand
 */
export const se_ListPoliciesCommand = async (
  input: ListPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListPolicies",
  };
  let body: any;
  body = JSON.stringify(se_ListPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPoliciesForTargetCommand
 */
export const se_ListPoliciesForTargetCommand = async (
  input: ListPoliciesForTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListPoliciesForTarget",
  };
  let body: any;
  body = JSON.stringify(se_ListPoliciesForTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRootsCommand
 */
export const se_ListRootsCommand = async (
  input: ListRootsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListRoots",
  };
  let body: any;
  body = JSON.stringify(se_ListRootsRequest(input, context));
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
    "x-amz-target": "AWSOrganizationsV20161128.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTargetsForPolicyCommand
 */
export const se_ListTargetsForPolicyCommand = async (
  input: ListTargetsForPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.ListTargetsForPolicy",
  };
  let body: any;
  body = JSON.stringify(se_ListTargetsForPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MoveAccountCommand
 */
export const se_MoveAccountCommand = async (
  input: MoveAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.MoveAccount",
  };
  let body: any;
  body = JSON.stringify(se_MoveAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterDelegatedAdministratorCommand
 */
export const se_RegisterDelegatedAdministratorCommand = async (
  input: RegisterDelegatedAdministratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.RegisterDelegatedAdministrator",
  };
  let body: any;
  body = JSON.stringify(se_RegisterDelegatedAdministratorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveAccountFromOrganizationCommand
 */
export const se_RemoveAccountFromOrganizationCommand = async (
  input: RemoveAccountFromOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.RemoveAccountFromOrganization",
  };
  let body: any;
  body = JSON.stringify(se_RemoveAccountFromOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateOrganizationalUnitCommand
 */
export const se_UpdateOrganizationalUnitCommand = async (
  input: UpdateOrganizationalUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.UpdateOrganizationalUnit",
  };
  let body: any;
  body = JSON.stringify(se_UpdateOrganizationalUnitRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePolicyCommand
 */
export const se_UpdatePolicyCommand = async (
  input: UpdatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSOrganizationsV20161128.UpdatePolicy",
  };
  let body: any;
  body = JSON.stringify(se_UpdatePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AcceptHandshakeCommand
 */
export const de_AcceptHandshakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptHandshakeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AcceptHandshakeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AcceptHandshakeResponse(data, context);
  const response: AcceptHandshakeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AcceptHandshakeCommandError
 */
const de_AcceptHandshakeCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.organizations#AccessDeniedForDependencyException":
      throw await de_AccessDeniedForDependencyExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "HandshakeAlreadyInStateException":
    case "com.amazonaws.organizations#HandshakeAlreadyInStateException":
      throw await de_HandshakeAlreadyInStateExceptionRes(parsedOutput, context);
    case "HandshakeConstraintViolationException":
    case "com.amazonaws.organizations#HandshakeConstraintViolationException":
      throw await de_HandshakeConstraintViolationExceptionRes(parsedOutput, context);
    case "HandshakeNotFoundException":
    case "com.amazonaws.organizations#HandshakeNotFoundException":
      throw await de_HandshakeNotFoundExceptionRes(parsedOutput, context);
    case "InvalidHandshakeTransitionException":
    case "com.amazonaws.organizations#InvalidHandshakeTransitionException":
      throw await de_InvalidHandshakeTransitionExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AttachPolicyCommand
 */
export const de_AttachPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AttachPolicyCommandError
 */
const de_AttachPolicyCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "DuplicatePolicyAttachmentException":
    case "com.amazonaws.organizations#DuplicatePolicyAttachmentException":
      throw await de_DuplicatePolicyAttachmentExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "PolicyChangesInProgressException":
    case "com.amazonaws.organizations#PolicyChangesInProgressException":
      throw await de_PolicyChangesInProgressExceptionRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.organizations#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
    case "PolicyTypeNotEnabledException":
    case "com.amazonaws.organizations#PolicyTypeNotEnabledException":
      throw await de_PolicyTypeNotEnabledExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.organizations#TargetNotFoundException":
      throw await de_TargetNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CancelHandshakeCommand
 */
export const de_CancelHandshakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelHandshakeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelHandshakeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelHandshakeResponse(data, context);
  const response: CancelHandshakeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelHandshakeCommandError
 */
const de_CancelHandshakeCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "HandshakeAlreadyInStateException":
    case "com.amazonaws.organizations#HandshakeAlreadyInStateException":
      throw await de_HandshakeAlreadyInStateExceptionRes(parsedOutput, context);
    case "HandshakeNotFoundException":
    case "com.amazonaws.organizations#HandshakeNotFoundException":
      throw await de_HandshakeNotFoundExceptionRes(parsedOutput, context);
    case "InvalidHandshakeTransitionException":
    case "com.amazonaws.organizations#InvalidHandshakeTransitionException":
      throw await de_InvalidHandshakeTransitionExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CloseAccountCommand
 */
export const de_CloseAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CloseAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CloseAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CloseAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CloseAccountCommandError
 */
const de_CloseAccountCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountAlreadyClosedException":
    case "com.amazonaws.organizations#AccountAlreadyClosedException":
      throw await de_AccountAlreadyClosedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.organizations#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateAccountCommand
 */
export const de_CreateAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAccountResponse(data, context);
  const response: CreateAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAccountCommandError
 */
const de_CreateAccountCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "FinalizingOrganizationException":
    case "com.amazonaws.organizations#FinalizingOrganizationException":
      throw await de_FinalizingOrganizationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateGovCloudAccountCommand
 */
export const de_CreateGovCloudAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGovCloudAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGovCloudAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGovCloudAccountResponse(data, context);
  const response: CreateGovCloudAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateGovCloudAccountCommandError
 */
const de_CreateGovCloudAccountCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "FinalizingOrganizationException":
    case "com.amazonaws.organizations#FinalizingOrganizationException":
      throw await de_FinalizingOrganizationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateOrganizationCommand
 */
export const de_CreateOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateOrganizationResponse(data, context);
  const response: CreateOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateOrganizationCommandError
 */
const de_CreateOrganizationCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.organizations#AccessDeniedForDependencyException":
      throw await de_AccessDeniedForDependencyExceptionRes(parsedOutput, context);
    case "AlreadyInOrganizationException":
    case "com.amazonaws.organizations#AlreadyInOrganizationException":
      throw await de_AlreadyInOrganizationExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateOrganizationalUnitCommand
 */
export const de_CreateOrganizationalUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrganizationalUnitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateOrganizationalUnitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateOrganizationalUnitResponse(data, context);
  const response: CreateOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateOrganizationalUnitCommandError
 */
const de_CreateOrganizationalUnitCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "DuplicateOrganizationalUnitException":
    case "com.amazonaws.organizations#DuplicateOrganizationalUnitException":
      throw await de_DuplicateOrganizationalUnitExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ParentNotFoundException":
    case "com.amazonaws.organizations#ParentNotFoundException":
      throw await de_ParentNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreatePolicyCommand
 */
export const de_CreatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePolicyResponse(data, context);
  const response: CreatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePolicyCommandError
 */
const de_CreatePolicyCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "DuplicatePolicyException":
    case "com.amazonaws.organizations#DuplicatePolicyException":
      throw await de_DuplicatePolicyExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.organizations#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PolicyTypeNotAvailableForOrganizationException":
    case "com.amazonaws.organizations#PolicyTypeNotAvailableForOrganizationException":
      throw await de_PolicyTypeNotAvailableForOrganizationExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeclineHandshakeCommand
 */
export const de_DeclineHandshakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineHandshakeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeclineHandshakeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeclineHandshakeResponse(data, context);
  const response: DeclineHandshakeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeclineHandshakeCommandError
 */
const de_DeclineHandshakeCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "HandshakeAlreadyInStateException":
    case "com.amazonaws.organizations#HandshakeAlreadyInStateException":
      throw await de_HandshakeAlreadyInStateExceptionRes(parsedOutput, context);
    case "HandshakeNotFoundException":
    case "com.amazonaws.organizations#HandshakeNotFoundException":
      throw await de_HandshakeNotFoundExceptionRes(parsedOutput, context);
    case "InvalidHandshakeTransitionException":
    case "com.amazonaws.organizations#InvalidHandshakeTransitionException":
      throw await de_InvalidHandshakeTransitionExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteOrganizationCommand
 */
export const de_DeleteOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteOrganizationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteOrganizationCommandError
 */
const de_DeleteOrganizationCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OrganizationNotEmptyException":
    case "com.amazonaws.organizations#OrganizationNotEmptyException":
      throw await de_OrganizationNotEmptyExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteOrganizationalUnitCommand
 */
export const de_DeleteOrganizationalUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationalUnitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteOrganizationalUnitCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteOrganizationalUnitCommandError
 */
const de_DeleteOrganizationalUnitCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OrganizationalUnitNotEmptyException":
    case "com.amazonaws.organizations#OrganizationalUnitNotEmptyException":
      throw await de_OrganizationalUnitNotEmptyExceptionRes(parsedOutput, context);
    case "OrganizationalUnitNotFoundException":
    case "com.amazonaws.organizations#OrganizationalUnitNotFoundException":
      throw await de_OrganizationalUnitNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeletePolicyCommand
 */
export const de_DeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePolicyCommandError
 */
const de_DeletePolicyCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "PolicyInUseException":
    case "com.amazonaws.organizations#PolicyInUseException":
      throw await de_PolicyInUseExceptionRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.organizations#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourcePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommandError
 */
const de_DeleteResourcePolicyCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "ResourcePolicyNotFoundException":
    case "com.amazonaws.organizations#ResourcePolicyNotFoundException":
      throw await de_ResourcePolicyNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeregisterDelegatedAdministratorCommand
 */
export const de_DeregisterDelegatedAdministratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterDelegatedAdministratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterDelegatedAdministratorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterDelegatedAdministratorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterDelegatedAdministratorCommandError
 */
const de_DeregisterDelegatedAdministratorCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "AccountNotRegisteredException":
    case "com.amazonaws.organizations#AccountNotRegisteredException":
      throw await de_AccountNotRegisteredExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAccountCommand
 */
export const de_DescribeAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountResponse(data, context);
  const response: DescribeAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAccountCommandError
 */
const de_DescribeAccountCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeCreateAccountStatusCommand
 */
export const de_DescribeCreateAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCreateAccountStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCreateAccountStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCreateAccountStatusResponse(data, context);
  const response: DescribeCreateAccountStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCreateAccountStatusCommandError
 */
const de_DescribeCreateAccountStatusCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "CreateAccountStatusNotFoundException":
    case "com.amazonaws.organizations#CreateAccountStatusNotFoundException":
      throw await de_CreateAccountStatusNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEffectivePolicyCommand
 */
export const de_DescribeEffectivePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEffectivePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEffectivePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEffectivePolicyResponse(data, context);
  const response: DescribeEffectivePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEffectivePolicyCommandError
 */
const de_DescribeEffectivePolicyCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "EffectivePolicyNotFoundException":
    case "com.amazonaws.organizations#EffectivePolicyNotFoundException":
      throw await de_EffectivePolicyNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.organizations#TargetNotFoundException":
      throw await de_TargetNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeHandshakeCommand
 */
export const de_DescribeHandshakeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHandshakeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeHandshakeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHandshakeResponse(data, context);
  const response: DescribeHandshakeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeHandshakeCommandError
 */
const de_DescribeHandshakeCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "HandshakeNotFoundException":
    case "com.amazonaws.organizations#HandshakeNotFoundException":
      throw await de_HandshakeNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeOrganizationCommand
 */
export const de_DescribeOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeOrganizationResponse(data, context);
  const response: DescribeOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeOrganizationCommandError
 */
const de_DescribeOrganizationCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeOrganizationalUnitCommand
 */
export const de_DescribeOrganizationalUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationalUnitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOrganizationalUnitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeOrganizationalUnitResponse(data, context);
  const response: DescribeOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeOrganizationalUnitCommandError
 */
const de_DescribeOrganizationalUnitCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OrganizationalUnitNotFoundException":
    case "com.amazonaws.organizations#OrganizationalUnitNotFoundException":
      throw await de_OrganizationalUnitNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribePolicyCommand
 */
export const de_DescribePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePolicyResponse(data, context);
  const response: DescribePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePolicyCommandError
 */
const de_DescribePolicyCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.organizations#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeResourcePolicyCommand
 */
export const de_DescribeResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeResourcePolicyResponse(data, context);
  const response: DescribeResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeResourcePolicyCommandError
 */
const de_DescribeResourcePolicyCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "ResourcePolicyNotFoundException":
    case "com.amazonaws.organizations#ResourcePolicyNotFoundException":
      throw await de_ResourcePolicyNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DetachPolicyCommand
 */
export const de_DetachPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DetachPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DetachPolicyCommandError
 */
const de_DetachPolicyCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "PolicyChangesInProgressException":
    case "com.amazonaws.organizations#PolicyChangesInProgressException":
      throw await de_PolicyChangesInProgressExceptionRes(parsedOutput, context);
    case "PolicyNotAttachedException":
    case "com.amazonaws.organizations#PolicyNotAttachedException":
      throw await de_PolicyNotAttachedExceptionRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.organizations#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.organizations#TargetNotFoundException":
      throw await de_TargetNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisableAWSServiceAccessCommand
 */
export const de_DisableAWSServiceAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAWSServiceAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableAWSServiceAccessCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableAWSServiceAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableAWSServiceAccessCommandError
 */
const de_DisableAWSServiceAccessCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisablePolicyTypeCommand
 */
export const de_DisablePolicyTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisablePolicyTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisablePolicyTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisablePolicyTypeResponse(data, context);
  const response: DisablePolicyTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisablePolicyTypeCommandError
 */
const de_DisablePolicyTypeCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "PolicyChangesInProgressException":
    case "com.amazonaws.organizations#PolicyChangesInProgressException":
      throw await de_PolicyChangesInProgressExceptionRes(parsedOutput, context);
    case "PolicyTypeNotEnabledException":
    case "com.amazonaws.organizations#PolicyTypeNotEnabledException":
      throw await de_PolicyTypeNotEnabledExceptionRes(parsedOutput, context);
    case "RootNotFoundException":
    case "com.amazonaws.organizations#RootNotFoundException":
      throw await de_RootNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1EnableAllFeaturesCommand
 */
export const de_EnableAllFeaturesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAllFeaturesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableAllFeaturesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableAllFeaturesResponse(data, context);
  const response: EnableAllFeaturesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableAllFeaturesCommandError
 */
const de_EnableAllFeaturesCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "HandshakeConstraintViolationException":
    case "com.amazonaws.organizations#HandshakeConstraintViolationException":
      throw await de_HandshakeConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1EnableAWSServiceAccessCommand
 */
export const de_EnableAWSServiceAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAWSServiceAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableAWSServiceAccessCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableAWSServiceAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableAWSServiceAccessCommandError
 */
const de_EnableAWSServiceAccessCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1EnablePolicyTypeCommand
 */
export const de_EnablePolicyTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnablePolicyTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnablePolicyTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnablePolicyTypeResponse(data, context);
  const response: EnablePolicyTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnablePolicyTypeCommandError
 */
const de_EnablePolicyTypeCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "PolicyChangesInProgressException":
    case "com.amazonaws.organizations#PolicyChangesInProgressException":
      throw await de_PolicyChangesInProgressExceptionRes(parsedOutput, context);
    case "PolicyTypeAlreadyEnabledException":
    case "com.amazonaws.organizations#PolicyTypeAlreadyEnabledException":
      throw await de_PolicyTypeAlreadyEnabledExceptionRes(parsedOutput, context);
    case "PolicyTypeNotAvailableForOrganizationException":
    case "com.amazonaws.organizations#PolicyTypeNotAvailableForOrganizationException":
      throw await de_PolicyTypeNotAvailableForOrganizationExceptionRes(parsedOutput, context);
    case "RootNotFoundException":
    case "com.amazonaws.organizations#RootNotFoundException":
      throw await de_RootNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InviteAccountToOrganizationCommand
 */
export const de_InviteAccountToOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteAccountToOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_InviteAccountToOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_InviteAccountToOrganizationResponse(data, context);
  const response: InviteAccountToOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1InviteAccountToOrganizationCommandError
 */
const de_InviteAccountToOrganizationCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountOwnerNotVerifiedException":
    case "com.amazonaws.organizations#AccountOwnerNotVerifiedException":
      throw await de_AccountOwnerNotVerifiedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "DuplicateHandshakeException":
    case "com.amazonaws.organizations#DuplicateHandshakeException":
      throw await de_DuplicateHandshakeExceptionRes(parsedOutput, context);
    case "FinalizingOrganizationException":
    case "com.amazonaws.organizations#FinalizingOrganizationException":
      throw await de_FinalizingOrganizationExceptionRes(parsedOutput, context);
    case "HandshakeConstraintViolationException":
    case "com.amazonaws.organizations#HandshakeConstraintViolationException":
      throw await de_HandshakeConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1LeaveOrganizationCommand
 */
export const de_LeaveOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LeaveOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_LeaveOrganizationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: LeaveOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1LeaveOrganizationCommandError
 */
const de_LeaveOrganizationCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "MasterCannotLeaveOrganizationException":
    case "com.amazonaws.organizations#MasterCannotLeaveOrganizationException":
      throw await de_MasterCannotLeaveOrganizationExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAccountsCommand
 */
export const de_ListAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccountsResponse(data, context);
  const response: ListAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAccountsCommandError
 */
const de_ListAccountsCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAccountsForParentCommand
 */
export const de_ListAccountsForParentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsForParentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccountsForParentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccountsForParentResponse(data, context);
  const response: ListAccountsForParentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAccountsForParentCommandError
 */
const de_ListAccountsForParentCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ParentNotFoundException":
    case "com.amazonaws.organizations#ParentNotFoundException":
      throw await de_ParentNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand
 */
export const de_ListAWSServiceAccessForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAWSServiceAccessForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAWSServiceAccessForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAWSServiceAccessForOrganizationResponse(data, context);
  const response: ListAWSServiceAccessForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommandError
 */
const de_ListAWSServiceAccessForOrganizationCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListChildrenCommand
 */
export const de_ListChildrenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChildrenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListChildrenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListChildrenResponse(data, context);
  const response: ListChildrenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListChildrenCommandError
 */
const de_ListChildrenCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ParentNotFoundException":
    case "com.amazonaws.organizations#ParentNotFoundException":
      throw await de_ParentNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListCreateAccountStatusCommand
 */
export const de_ListCreateAccountStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCreateAccountStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCreateAccountStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCreateAccountStatusResponse(data, context);
  const response: ListCreateAccountStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCreateAccountStatusCommandError
 */
const de_ListCreateAccountStatusCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListDelegatedAdministratorsCommand
 */
export const de_ListDelegatedAdministratorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDelegatedAdministratorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDelegatedAdministratorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDelegatedAdministratorsResponse(data, context);
  const response: ListDelegatedAdministratorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDelegatedAdministratorsCommandError
 */
const de_ListDelegatedAdministratorsCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListDelegatedServicesForAccountCommand
 */
export const de_ListDelegatedServicesForAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDelegatedServicesForAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDelegatedServicesForAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDelegatedServicesForAccountResponse(data, context);
  const response: ListDelegatedServicesForAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDelegatedServicesForAccountCommandError
 */
const de_ListDelegatedServicesForAccountCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "AccountNotRegisteredException":
    case "com.amazonaws.organizations#AccountNotRegisteredException":
      throw await de_AccountNotRegisteredExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListHandshakesForAccountCommand
 */
export const de_ListHandshakesForAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHandshakesForAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListHandshakesForAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHandshakesForAccountResponse(data, context);
  const response: ListHandshakesForAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListHandshakesForAccountCommandError
 */
const de_ListHandshakesForAccountCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListHandshakesForOrganizationCommand
 */
export const de_ListHandshakesForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHandshakesForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListHandshakesForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHandshakesForOrganizationResponse(data, context);
  const response: ListHandshakesForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListHandshakesForOrganizationCommandError
 */
const de_ListHandshakesForOrganizationCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListOrganizationalUnitsForParentCommand
 */
export const de_ListOrganizationalUnitsForParentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationalUnitsForParentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOrganizationalUnitsForParentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOrganizationalUnitsForParentResponse(data, context);
  const response: ListOrganizationalUnitsForParentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListOrganizationalUnitsForParentCommandError
 */
const de_ListOrganizationalUnitsForParentCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ParentNotFoundException":
    case "com.amazonaws.organizations#ParentNotFoundException":
      throw await de_ParentNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListParentsCommand
 */
export const de_ListParentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListParentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListParentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListParentsResponse(data, context);
  const response: ListParentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListParentsCommandError
 */
const de_ListParentsCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ChildNotFoundException":
    case "com.amazonaws.organizations#ChildNotFoundException":
      throw await de_ChildNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListPoliciesCommand
 */
export const de_ListPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPoliciesResponse(data, context);
  const response: ListPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPoliciesCommandError
 */
const de_ListPoliciesCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListPoliciesForTargetCommand
 */
export const de_ListPoliciesForTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesForTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPoliciesForTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPoliciesForTargetResponse(data, context);
  const response: ListPoliciesForTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPoliciesForTargetCommandError
 */
const de_ListPoliciesForTargetCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.organizations#TargetNotFoundException":
      throw await de_TargetNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListRootsCommand
 */
export const de_ListRootsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRootsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRootsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRootsResponse(data, context);
  const response: ListRootsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRootsCommandError
 */
const de_ListRootsCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.organizations#TargetNotFoundException":
      throw await de_TargetNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTargetsForPolicyCommand
 */
export const de_ListTargetsForPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsForPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTargetsForPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTargetsForPolicyResponse(data, context);
  const response: ListTargetsForPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTargetsForPolicyCommandError
 */
const de_ListTargetsForPolicyCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.organizations#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1MoveAccountCommand
 */
export const de_MoveAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MoveAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_MoveAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: MoveAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1MoveAccountCommandError
 */
const de_MoveAccountCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "DestinationParentNotFoundException":
    case "com.amazonaws.organizations#DestinationParentNotFoundException":
      throw await de_DestinationParentNotFoundExceptionRes(parsedOutput, context);
    case "DuplicateAccountException":
    case "com.amazonaws.organizations#DuplicateAccountException":
      throw await de_DuplicateAccountExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "SourceParentNotFoundException":
    case "com.amazonaws.organizations#SourceParentNotFoundException":
      throw await de_SourceParentNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommandError
 */
const de_PutResourcePolicyCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RegisterDelegatedAdministratorCommand
 */
export const de_RegisterDelegatedAdministratorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDelegatedAdministratorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterDelegatedAdministratorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterDelegatedAdministratorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterDelegatedAdministratorCommandError
 */
const de_RegisterDelegatedAdministratorCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountAlreadyRegisteredException":
    case "com.amazonaws.organizations#AccountAlreadyRegisteredException":
      throw await de_AccountAlreadyRegisteredExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RemoveAccountFromOrganizationCommand
 */
export const de_RemoveAccountFromOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAccountFromOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveAccountFromOrganizationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveAccountFromOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveAccountFromOrganizationCommandError
 */
const de_RemoveAccountFromOrganizationCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AccountNotFoundException":
    case "com.amazonaws.organizations#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "MasterCannotLeaveOrganizationException":
    case "com.amazonaws.organizations#MasterCannotLeaveOrganizationException":
      throw await de_MasterCannotLeaveOrganizationExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.organizations#TargetNotFoundException":
      throw await de_TargetNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
    case "AWSOrganizationsNotInUseException":
    case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TargetNotFoundException":
    case "com.amazonaws.organizations#TargetNotFoundException":
      throw await de_TargetNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateOrganizationalUnitCommand
 */
export const de_UpdateOrganizationalUnitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationalUnitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateOrganizationalUnitCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateOrganizationalUnitResponse(data, context);
  const response: UpdateOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateOrganizationalUnitCommandError
 */
const de_UpdateOrganizationalUnitCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "DuplicateOrganizationalUnitException":
    case "com.amazonaws.organizations#DuplicateOrganizationalUnitException":
      throw await de_DuplicateOrganizationalUnitExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OrganizationalUnitNotFoundException":
    case "com.amazonaws.organizations#OrganizationalUnitNotFoundException":
      throw await de_OrganizationalUnitNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdatePolicyCommand
 */
export const de_UpdatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePolicyResponse(data, context);
  const response: UpdatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdatePolicyCommandError
 */
const de_UpdatePolicyCommandError = async (
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
      throw await de_AWSOrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.organizations#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.organizations#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConstraintViolationException":
    case "com.amazonaws.organizations#ConstraintViolationException":
      throw await de_ConstraintViolationExceptionRes(parsedOutput, context);
    case "DuplicatePolicyException":
    case "com.amazonaws.organizations#DuplicatePolicyException":
      throw await de_DuplicatePolicyExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.organizations#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.organizations#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PolicyChangesInProgressException":
    case "com.amazonaws.organizations#PolicyChangesInProgressException":
      throw await de_PolicyChangesInProgressExceptionRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.organizations#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.organizations#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.organizations#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnsupportedAPIEndpointException":
    case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
      throw await de_UnsupportedAPIEndpointExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AccessDeniedForDependencyExceptionRes
 */
const de_AccessDeniedForDependencyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedForDependencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccessDeniedForDependencyException(body, context);
  const exception = new AccessDeniedForDependencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AccountAlreadyClosedExceptionRes
 */
const de_AccountAlreadyClosedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountAlreadyClosedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccountAlreadyClosedException(body, context);
  const exception = new AccountAlreadyClosedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AccountAlreadyRegisteredExceptionRes
 */
const de_AccountAlreadyRegisteredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccountAlreadyRegisteredException(body, context);
  const exception = new AccountAlreadyRegisteredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AccountNotFoundExceptionRes
 */
const de_AccountNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccountNotFoundException(body, context);
  const exception = new AccountNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AccountNotRegisteredExceptionRes
 */
const de_AccountNotRegisteredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountNotRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccountNotRegisteredException(body, context);
  const exception = new AccountNotRegisteredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AccountOwnerNotVerifiedExceptionRes
 */
const de_AccountOwnerNotVerifiedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountOwnerNotVerifiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccountOwnerNotVerifiedException(body, context);
  const exception = new AccountOwnerNotVerifiedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AlreadyInOrganizationExceptionRes
 */
const de_AlreadyInOrganizationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyInOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AlreadyInOrganizationException(body, context);
  const exception = new AlreadyInOrganizationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AWSOrganizationsNotInUseExceptionRes
 */
const de_AWSOrganizationsNotInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AWSOrganizationsNotInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AWSOrganizationsNotInUseException(body, context);
  const exception = new AWSOrganizationsNotInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ChildNotFoundExceptionRes
 */
const de_ChildNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChildNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ChildNotFoundException(body, context);
  const exception = new ChildNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
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
 * deserializeAws_json1_1ConstraintViolationExceptionRes
 */
const de_ConstraintViolationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConstraintViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConstraintViolationException(body, context);
  const exception = new ConstraintViolationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CreateAccountStatusNotFoundExceptionRes
 */
const de_CreateAccountStatusNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreateAccountStatusNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CreateAccountStatusNotFoundException(body, context);
  const exception = new CreateAccountStatusNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DestinationParentNotFoundExceptionRes
 */
const de_DestinationParentNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DestinationParentNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DestinationParentNotFoundException(body, context);
  const exception = new DestinationParentNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicateAccountExceptionRes
 */
const de_DuplicateAccountExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateAccountException(body, context);
  const exception = new DuplicateAccountException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicateHandshakeExceptionRes
 */
const de_DuplicateHandshakeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateHandshakeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateHandshakeException(body, context);
  const exception = new DuplicateHandshakeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicateOrganizationalUnitExceptionRes
 */
const de_DuplicateOrganizationalUnitExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateOrganizationalUnitException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateOrganizationalUnitException(body, context);
  const exception = new DuplicateOrganizationalUnitException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicatePolicyAttachmentExceptionRes
 */
const de_DuplicatePolicyAttachmentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatePolicyAttachmentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicatePolicyAttachmentException(body, context);
  const exception = new DuplicatePolicyAttachmentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicatePolicyExceptionRes
 */
const de_DuplicatePolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatePolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicatePolicyException(body, context);
  const exception = new DuplicatePolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EffectivePolicyNotFoundExceptionRes
 */
const de_EffectivePolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EffectivePolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EffectivePolicyNotFoundException(body, context);
  const exception = new EffectivePolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FinalizingOrganizationExceptionRes
 */
const de_FinalizingOrganizationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FinalizingOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_FinalizingOrganizationException(body, context);
  const exception = new FinalizingOrganizationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1HandshakeAlreadyInStateExceptionRes
 */
const de_HandshakeAlreadyInStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HandshakeAlreadyInStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HandshakeAlreadyInStateException(body, context);
  const exception = new HandshakeAlreadyInStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1HandshakeConstraintViolationExceptionRes
 */
const de_HandshakeConstraintViolationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HandshakeConstraintViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HandshakeConstraintViolationException(body, context);
  const exception = new HandshakeConstraintViolationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1HandshakeNotFoundExceptionRes
 */
const de_HandshakeNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HandshakeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_HandshakeNotFoundException(body, context);
  const exception = new HandshakeNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidHandshakeTransitionExceptionRes
 */
const de_InvalidHandshakeTransitionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidHandshakeTransitionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidHandshakeTransitionException(body, context);
  const exception = new InvalidHandshakeTransitionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MalformedPolicyDocumentExceptionRes
 */
const de_MalformedPolicyDocumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MalformedPolicyDocumentException(body, context);
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MasterCannotLeaveOrganizationExceptionRes
 */
const de_MasterCannotLeaveOrganizationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MasterCannotLeaveOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MasterCannotLeaveOrganizationException(body, context);
  const exception = new MasterCannotLeaveOrganizationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OrganizationalUnitNotEmptyExceptionRes
 */
const de_OrganizationalUnitNotEmptyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationalUnitNotEmptyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OrganizationalUnitNotEmptyException(body, context);
  const exception = new OrganizationalUnitNotEmptyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OrganizationalUnitNotFoundExceptionRes
 */
const de_OrganizationalUnitNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationalUnitNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OrganizationalUnitNotFoundException(body, context);
  const exception = new OrganizationalUnitNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OrganizationNotEmptyExceptionRes
 */
const de_OrganizationNotEmptyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationNotEmptyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OrganizationNotEmptyException(body, context);
  const exception = new OrganizationNotEmptyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ParentNotFoundExceptionRes
 */
const de_ParentNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParentNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ParentNotFoundException(body, context);
  const exception = new ParentNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PolicyChangesInProgressExceptionRes
 */
const de_PolicyChangesInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyChangesInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PolicyChangesInProgressException(body, context);
  const exception = new PolicyChangesInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PolicyInUseExceptionRes
 */
const de_PolicyInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PolicyInUseException(body, context);
  const exception = new PolicyInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PolicyNotAttachedExceptionRes
 */
const de_PolicyNotAttachedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotAttachedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PolicyNotAttachedException(body, context);
  const exception = new PolicyNotAttachedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PolicyNotFoundExceptionRes
 */
const de_PolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PolicyNotFoundException(body, context);
  const exception = new PolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PolicyTypeAlreadyEnabledExceptionRes
 */
const de_PolicyTypeAlreadyEnabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyTypeAlreadyEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PolicyTypeAlreadyEnabledException(body, context);
  const exception = new PolicyTypeAlreadyEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationExceptionRes
 */
const de_PolicyTypeNotAvailableForOrganizationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyTypeNotAvailableForOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PolicyTypeNotAvailableForOrganizationException(body, context);
  const exception = new PolicyTypeNotAvailableForOrganizationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PolicyTypeNotEnabledExceptionRes
 */
const de_PolicyTypeNotEnabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyTypeNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PolicyTypeNotEnabledException(body, context);
  const exception = new PolicyTypeNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourcePolicyNotFoundExceptionRes
 */
const de_ResourcePolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourcePolicyNotFoundException(body, context);
  const exception = new ResourcePolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RootNotFoundExceptionRes
 */
const de_RootNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RootNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RootNotFoundException(body, context);
  const exception = new RootNotFoundException({
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
 * deserializeAws_json1_1SourceParentNotFoundExceptionRes
 */
const de_SourceParentNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceParentNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_SourceParentNotFoundException(body, context);
  const exception = new SourceParentNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TargetNotFoundExceptionRes
 */
const de_TargetNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TargetNotFoundException(body, context);
  const exception = new TargetNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyRequestsException(body, context);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedAPIEndpointExceptionRes
 */
const de_UnsupportedAPIEndpointExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedAPIEndpointException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedAPIEndpointException(body, context);
  const exception = new UnsupportedAPIEndpointException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AcceptHandshakeRequest
 */
const se_AcceptHandshakeRequest = (input: AcceptHandshakeRequest, context: __SerdeContext): any => {
  return {
    ...(input.HandshakeId != null && { HandshakeId: input.HandshakeId }),
  };
};

/**
 * serializeAws_json1_1AttachPolicyRequest
 */
const se_AttachPolicyRequest = (input: AttachPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
  };
};

/**
 * serializeAws_json1_1CancelHandshakeRequest
 */
const se_CancelHandshakeRequest = (input: CancelHandshakeRequest, context: __SerdeContext): any => {
  return {
    ...(input.HandshakeId != null && { HandshakeId: input.HandshakeId }),
  };
};

/**
 * serializeAws_json1_1CloseAccountRequest
 */
const se_CloseAccountRequest = (input: CloseAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
  };
};

/**
 * serializeAws_json1_1CreateAccountRequest
 */
const se_CreateAccountRequest = (input: CreateAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountName != null && { AccountName: input.AccountName }),
    ...(input.Email != null && { Email: input.Email }),
    ...(input.IamUserAccessToBilling != null && { IamUserAccessToBilling: input.IamUserAccessToBilling }),
    ...(input.RoleName != null && { RoleName: input.RoleName }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateAccountStates
 */
const se_CreateAccountStates = (input: (CreateAccountState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CreateGovCloudAccountRequest
 */
const se_CreateGovCloudAccountRequest = (input: CreateGovCloudAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountName != null && { AccountName: input.AccountName }),
    ...(input.Email != null && { Email: input.Email }),
    ...(input.IamUserAccessToBilling != null && { IamUserAccessToBilling: input.IamUserAccessToBilling }),
    ...(input.RoleName != null && { RoleName: input.RoleName }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateOrganizationalUnitRequest
 */
const se_CreateOrganizationalUnitRequest = (input: CreateOrganizationalUnitRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParentId != null && { ParentId: input.ParentId }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateOrganizationRequest
 */
const se_CreateOrganizationRequest = (input: CreateOrganizationRequest, context: __SerdeContext): any => {
  return {
    ...(input.FeatureSet != null && { FeatureSet: input.FeatureSet }),
  };
};

/**
 * serializeAws_json1_1CreatePolicyRequest
 */
const se_CreatePolicyRequest = (input: CreatePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1DeclineHandshakeRequest
 */
const se_DeclineHandshakeRequest = (input: DeclineHandshakeRequest, context: __SerdeContext): any => {
  return {
    ...(input.HandshakeId != null && { HandshakeId: input.HandshakeId }),
  };
};

/**
 * serializeAws_json1_1DeleteOrganizationalUnitRequest
 */
const se_DeleteOrganizationalUnitRequest = (input: DeleteOrganizationalUnitRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationalUnitId != null && { OrganizationalUnitId: input.OrganizationalUnitId }),
  };
};

/**
 * serializeAws_json1_1DeletePolicyRequest
 */
const se_DeletePolicyRequest = (input: DeletePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
  };
};

/**
 * serializeAws_json1_1DeregisterDelegatedAdministratorRequest
 */
const se_DeregisterDelegatedAdministratorRequest = (
  input: DeregisterDelegatedAdministratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ServicePrincipal != null && { ServicePrincipal: input.ServicePrincipal }),
  };
};

/**
 * serializeAws_json1_1DescribeAccountRequest
 */
const se_DescribeAccountRequest = (input: DescribeAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
  };
};

/**
 * serializeAws_json1_1DescribeCreateAccountStatusRequest
 */
const se_DescribeCreateAccountStatusRequest = (
  input: DescribeCreateAccountStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreateAccountRequestId != null && { CreateAccountRequestId: input.CreateAccountRequestId }),
  };
};

/**
 * serializeAws_json1_1DescribeEffectivePolicyRequest
 */
const se_DescribeEffectivePolicyRequest = (input: DescribeEffectivePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyType != null && { PolicyType: input.PolicyType }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
  };
};

/**
 * serializeAws_json1_1DescribeHandshakeRequest
 */
const se_DescribeHandshakeRequest = (input: DescribeHandshakeRequest, context: __SerdeContext): any => {
  return {
    ...(input.HandshakeId != null && { HandshakeId: input.HandshakeId }),
  };
};

/**
 * serializeAws_json1_1DescribeOrganizationalUnitRequest
 */
const se_DescribeOrganizationalUnitRequest = (
  input: DescribeOrganizationalUnitRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationalUnitId != null && { OrganizationalUnitId: input.OrganizationalUnitId }),
  };
};

/**
 * serializeAws_json1_1DescribePolicyRequest
 */
const se_DescribePolicyRequest = (input: DescribePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
  };
};

/**
 * serializeAws_json1_1DetachPolicyRequest
 */
const se_DetachPolicyRequest = (input: DetachPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
  };
};

/**
 * serializeAws_json1_1DisableAWSServiceAccessRequest
 */
const se_DisableAWSServiceAccessRequest = (input: DisableAWSServiceAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServicePrincipal != null && { ServicePrincipal: input.ServicePrincipal }),
  };
};

/**
 * serializeAws_json1_1DisablePolicyTypeRequest
 */
const se_DisablePolicyTypeRequest = (input: DisablePolicyTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyType != null && { PolicyType: input.PolicyType }),
    ...(input.RootId != null && { RootId: input.RootId }),
  };
};

/**
 * serializeAws_json1_1EnableAllFeaturesRequest
 */
const se_EnableAllFeaturesRequest = (input: EnableAllFeaturesRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1EnableAWSServiceAccessRequest
 */
const se_EnableAWSServiceAccessRequest = (input: EnableAWSServiceAccessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServicePrincipal != null && { ServicePrincipal: input.ServicePrincipal }),
  };
};

/**
 * serializeAws_json1_1EnablePolicyTypeRequest
 */
const se_EnablePolicyTypeRequest = (input: EnablePolicyTypeRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyType != null && { PolicyType: input.PolicyType }),
    ...(input.RootId != null && { RootId: input.RootId }),
  };
};

/**
 * serializeAws_json1_1HandshakeFilter
 */
const se_HandshakeFilter = (input: HandshakeFilter, context: __SerdeContext): any => {
  return {
    ...(input.ActionType != null && { ActionType: input.ActionType }),
    ...(input.ParentHandshakeId != null && { ParentHandshakeId: input.ParentHandshakeId }),
  };
};

/**
 * serializeAws_json1_1HandshakeParty
 */
const se_HandshakeParty = (input: HandshakeParty, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1InviteAccountToOrganizationRequest
 */
const se_InviteAccountToOrganizationRequest = (
  input: InviteAccountToOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Notes != null && { Notes: input.Notes }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.Target != null && { Target: se_HandshakeParty(input.Target, context) }),
  };
};

/**
 * serializeAws_json1_1ListAccountsForParentRequest
 */
const se_ListAccountsForParentRequest = (input: ListAccountsForParentRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParentId != null && { ParentId: input.ParentId }),
  };
};

/**
 * serializeAws_json1_1ListAccountsRequest
 */
const se_ListAccountsRequest = (input: ListAccountsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListAWSServiceAccessForOrganizationRequest
 */
const se_ListAWSServiceAccessForOrganizationRequest = (
  input: ListAWSServiceAccessForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListChildrenRequest
 */
const se_ListChildrenRequest = (input: ListChildrenRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChildType != null && { ChildType: input.ChildType }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParentId != null && { ParentId: input.ParentId }),
  };
};

/**
 * serializeAws_json1_1ListCreateAccountStatusRequest
 */
const se_ListCreateAccountStatusRequest = (input: ListCreateAccountStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.States != null && { States: se_CreateAccountStates(input.States, context) }),
  };
};

/**
 * serializeAws_json1_1ListDelegatedAdministratorsRequest
 */
const se_ListDelegatedAdministratorsRequest = (
  input: ListDelegatedAdministratorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServicePrincipal != null && { ServicePrincipal: input.ServicePrincipal }),
  };
};

/**
 * serializeAws_json1_1ListDelegatedServicesForAccountRequest
 */
const se_ListDelegatedServicesForAccountRequest = (
  input: ListDelegatedServicesForAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListHandshakesForAccountRequest
 */
const se_ListHandshakesForAccountRequest = (input: ListHandshakesForAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_HandshakeFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListHandshakesForOrganizationRequest
 */
const se_ListHandshakesForOrganizationRequest = (
  input: ListHandshakesForOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: se_HandshakeFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListOrganizationalUnitsForParentRequest
 */
const se_ListOrganizationalUnitsForParentRequest = (
  input: ListOrganizationalUnitsForParentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ParentId != null && { ParentId: input.ParentId }),
  };
};

/**
 * serializeAws_json1_1ListParentsRequest
 */
const se_ListParentsRequest = (input: ListParentsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ChildId != null && { ChildId: input.ChildId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListPoliciesForTargetRequest
 */
const se_ListPoliciesForTargetRequest = (input: ListPoliciesForTargetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: input.Filter }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
  };
};

/**
 * serializeAws_json1_1ListPoliciesRequest
 */
const se_ListPoliciesRequest = (input: ListPoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: input.Filter }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListRootsRequest
 */
const se_ListRootsRequest = (input: ListRootsRequest, context: __SerdeContext): any => {
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
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1ListTargetsForPolicyRequest
 */
const se_ListTargetsForPolicyRequest = (input: ListTargetsForPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
  };
};

/**
 * serializeAws_json1_1MoveAccountRequest
 */
const se_MoveAccountRequest = (input: MoveAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.DestinationParentId != null && { DestinationParentId: input.DestinationParentId }),
    ...(input.SourceParentId != null && { SourceParentId: input.SourceParentId }),
  };
};

/**
 * serializeAws_json1_1PutResourcePolicyRequest
 */
const se_PutResourcePolicyRequest = (input: PutResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1RegisterDelegatedAdministratorRequest
 */
const se_RegisterDelegatedAdministratorRequest = (
  input: RegisterDelegatedAdministratorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.ServicePrincipal != null && { ServicePrincipal: input.ServicePrincipal }),
  };
};

/**
 * serializeAws_json1_1RemoveAccountFromOrganizationRequest
 */
const se_RemoveAccountFromOrganizationRequest = (
  input: RemoveAccountFromOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
  };
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
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
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
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeys(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateOrganizationalUnitRequest
 */
const se_UpdateOrganizationalUnitRequest = (input: UpdateOrganizationalUnitRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationalUnitId != null && { OrganizationalUnitId: input.OrganizationalUnitId }),
  };
};

/**
 * serializeAws_json1_1UpdatePolicyRequest
 */
const se_UpdatePolicyRequest = (input: UpdatePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Content != null && { Content: input.Content }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
  };
};

/**
 * deserializeAws_json1_1AcceptHandshakeResponse
 */
const de_AcceptHandshakeResponse = (output: any, context: __SerdeContext): AcceptHandshakeResponse => {
  return {
    Handshake: output.Handshake != null ? de_Handshake(output.Handshake, context) : undefined,
  } as any;
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
 * deserializeAws_json1_1AccessDeniedForDependencyException
 */
const de_AccessDeniedForDependencyException = (
  output: any,
  context: __SerdeContext
): AccessDeniedForDependencyException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_json1_1Account
 */
const de_Account = (output: any, context: __SerdeContext): Account => {
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

/**
 * deserializeAws_json1_1AccountAlreadyClosedException
 */
const de_AccountAlreadyClosedException = (output: any, context: __SerdeContext): AccountAlreadyClosedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AccountAlreadyRegisteredException
 */
const de_AccountAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): AccountAlreadyRegisteredException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AccountNotFoundException
 */
const de_AccountNotFoundException = (output: any, context: __SerdeContext): AccountNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AccountNotRegisteredException
 */
const de_AccountNotRegisteredException = (output: any, context: __SerdeContext): AccountNotRegisteredException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AccountOwnerNotVerifiedException
 */
const de_AccountOwnerNotVerifiedException = (
  output: any,
  context: __SerdeContext
): AccountOwnerNotVerifiedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Accounts
 */
const de_Accounts = (output: any, context: __SerdeContext): Account[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Account(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AlreadyInOrganizationException
 */
const de_AlreadyInOrganizationException = (output: any, context: __SerdeContext): AlreadyInOrganizationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AWSOrganizationsNotInUseException
 */
const de_AWSOrganizationsNotInUseException = (
  output: any,
  context: __SerdeContext
): AWSOrganizationsNotInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CancelHandshakeResponse
 */
const de_CancelHandshakeResponse = (output: any, context: __SerdeContext): CancelHandshakeResponse => {
  return {
    Handshake: output.Handshake != null ? de_Handshake(output.Handshake, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Child
 */
const de_Child = (output: any, context: __SerdeContext): Child => {
  return {
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ChildNotFoundException
 */
const de_ChildNotFoundException = (output: any, context: __SerdeContext): ChildNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Children
 */
const de_Children = (output: any, context: __SerdeContext): Child[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Child(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
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
 * deserializeAws_json1_1ConstraintViolationException
 */
const de_ConstraintViolationException = (output: any, context: __SerdeContext): ConstraintViolationException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_json1_1CreateAccountResponse
 */
const de_CreateAccountResponse = (output: any, context: __SerdeContext): CreateAccountResponse => {
  return {
    CreateAccountStatus:
      output.CreateAccountStatus != null ? de_CreateAccountStatus(output.CreateAccountStatus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateAccountStatus
 */
const de_CreateAccountStatus = (output: any, context: __SerdeContext): CreateAccountStatus => {
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

/**
 * deserializeAws_json1_1CreateAccountStatuses
 */
const de_CreateAccountStatuses = (output: any, context: __SerdeContext): CreateAccountStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CreateAccountStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateAccountStatusNotFoundException
 */
const de_CreateAccountStatusNotFoundException = (
  output: any,
  context: __SerdeContext
): CreateAccountStatusNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateGovCloudAccountResponse
 */
const de_CreateGovCloudAccountResponse = (output: any, context: __SerdeContext): CreateGovCloudAccountResponse => {
  return {
    CreateAccountStatus:
      output.CreateAccountStatus != null ? de_CreateAccountStatus(output.CreateAccountStatus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateOrganizationalUnitResponse
 */
const de_CreateOrganizationalUnitResponse = (
  output: any,
  context: __SerdeContext
): CreateOrganizationalUnitResponse => {
  return {
    OrganizationalUnit:
      output.OrganizationalUnit != null ? de_OrganizationalUnit(output.OrganizationalUnit, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateOrganizationResponse
 */
const de_CreateOrganizationResponse = (output: any, context: __SerdeContext): CreateOrganizationResponse => {
  return {
    Organization: output.Organization != null ? de_Organization(output.Organization, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreatePolicyResponse
 */
const de_CreatePolicyResponse = (output: any, context: __SerdeContext): CreatePolicyResponse => {
  return {
    Policy: output.Policy != null ? de_Policy(output.Policy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeclineHandshakeResponse
 */
const de_DeclineHandshakeResponse = (output: any, context: __SerdeContext): DeclineHandshakeResponse => {
  return {
    Handshake: output.Handshake != null ? de_Handshake(output.Handshake, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DelegatedAdministrator
 */
const de_DelegatedAdministrator = (output: any, context: __SerdeContext): DelegatedAdministrator => {
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

/**
 * deserializeAws_json1_1DelegatedAdministrators
 */
const de_DelegatedAdministrators = (output: any, context: __SerdeContext): DelegatedAdministrator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DelegatedAdministrator(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DelegatedService
 */
const de_DelegatedService = (output: any, context: __SerdeContext): DelegatedService => {
  return {
    DelegationEnabledDate:
      output.DelegationEnabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DelegationEnabledDate)))
        : undefined,
    ServicePrincipal: __expectString(output.ServicePrincipal),
  } as any;
};

/**
 * deserializeAws_json1_1DelegatedServices
 */
const de_DelegatedServices = (output: any, context: __SerdeContext): DelegatedService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DelegatedService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeAccountResponse
 */
const de_DescribeAccountResponse = (output: any, context: __SerdeContext): DescribeAccountResponse => {
  return {
    Account: output.Account != null ? de_Account(output.Account, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCreateAccountStatusResponse
 */
const de_DescribeCreateAccountStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeCreateAccountStatusResponse => {
  return {
    CreateAccountStatus:
      output.CreateAccountStatus != null ? de_CreateAccountStatus(output.CreateAccountStatus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEffectivePolicyResponse
 */
const de_DescribeEffectivePolicyResponse = (output: any, context: __SerdeContext): DescribeEffectivePolicyResponse => {
  return {
    EffectivePolicy: output.EffectivePolicy != null ? de_EffectivePolicy(output.EffectivePolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeHandshakeResponse
 */
const de_DescribeHandshakeResponse = (output: any, context: __SerdeContext): DescribeHandshakeResponse => {
  return {
    Handshake: output.Handshake != null ? de_Handshake(output.Handshake, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeOrganizationalUnitResponse
 */
const de_DescribeOrganizationalUnitResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationalUnitResponse => {
  return {
    OrganizationalUnit:
      output.OrganizationalUnit != null ? de_OrganizationalUnit(output.OrganizationalUnit, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeOrganizationResponse
 */
const de_DescribeOrganizationResponse = (output: any, context: __SerdeContext): DescribeOrganizationResponse => {
  return {
    Organization: output.Organization != null ? de_Organization(output.Organization, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribePolicyResponse
 */
const de_DescribePolicyResponse = (output: any, context: __SerdeContext): DescribePolicyResponse => {
  return {
    Policy: output.Policy != null ? de_Policy(output.Policy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeResourcePolicyResponse
 */
const de_DescribeResourcePolicyResponse = (output: any, context: __SerdeContext): DescribeResourcePolicyResponse => {
  return {
    ResourcePolicy: output.ResourcePolicy != null ? de_ResourcePolicy(output.ResourcePolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DestinationParentNotFoundException
 */
const de_DestinationParentNotFoundException = (
  output: any,
  context: __SerdeContext
): DestinationParentNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DisablePolicyTypeResponse
 */
const de_DisablePolicyTypeResponse = (output: any, context: __SerdeContext): DisablePolicyTypeResponse => {
  return {
    Root: output.Root != null ? de_Root(output.Root, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DuplicateAccountException
 */
const de_DuplicateAccountException = (output: any, context: __SerdeContext): DuplicateAccountException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DuplicateHandshakeException
 */
const de_DuplicateHandshakeException = (output: any, context: __SerdeContext): DuplicateHandshakeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DuplicateOrganizationalUnitException
 */
const de_DuplicateOrganizationalUnitException = (
  output: any,
  context: __SerdeContext
): DuplicateOrganizationalUnitException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DuplicatePolicyAttachmentException
 */
const de_DuplicatePolicyAttachmentException = (
  output: any,
  context: __SerdeContext
): DuplicatePolicyAttachmentException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DuplicatePolicyException
 */
const de_DuplicatePolicyException = (output: any, context: __SerdeContext): DuplicatePolicyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EffectivePolicy
 */
const de_EffectivePolicy = (output: any, context: __SerdeContext): EffectivePolicy => {
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

/**
 * deserializeAws_json1_1EffectivePolicyNotFoundException
 */
const de_EffectivePolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): EffectivePolicyNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EnableAllFeaturesResponse
 */
const de_EnableAllFeaturesResponse = (output: any, context: __SerdeContext): EnableAllFeaturesResponse => {
  return {
    Handshake: output.Handshake != null ? de_Handshake(output.Handshake, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EnabledServicePrincipal
 */
const de_EnabledServicePrincipal = (output: any, context: __SerdeContext): EnabledServicePrincipal => {
  return {
    DateEnabled:
      output.DateEnabled != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateEnabled)))
        : undefined,
    ServicePrincipal: __expectString(output.ServicePrincipal),
  } as any;
};

/**
 * deserializeAws_json1_1EnabledServicePrincipals
 */
const de_EnabledServicePrincipals = (output: any, context: __SerdeContext): EnabledServicePrincipal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EnabledServicePrincipal(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EnablePolicyTypeResponse
 */
const de_EnablePolicyTypeResponse = (output: any, context: __SerdeContext): EnablePolicyTypeResponse => {
  return {
    Root: output.Root != null ? de_Root(output.Root, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FinalizingOrganizationException
 */
const de_FinalizingOrganizationException = (output: any, context: __SerdeContext): FinalizingOrganizationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Handshake
 */
const de_Handshake = (output: any, context: __SerdeContext): Handshake => {
  return {
    Action: __expectString(output.Action),
    Arn: __expectString(output.Arn),
    ExpirationTimestamp:
      output.ExpirationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationTimestamp)))
        : undefined,
    Id: __expectString(output.Id),
    Parties: output.Parties != null ? de_HandshakeParties(output.Parties, context) : undefined,
    RequestedTimestamp:
      output.RequestedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RequestedTimestamp)))
        : undefined,
    Resources: output.Resources != null ? de_HandshakeResources(output.Resources, context) : undefined,
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1HandshakeAlreadyInStateException
 */
const de_HandshakeAlreadyInStateException = (
  output: any,
  context: __SerdeContext
): HandshakeAlreadyInStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1HandshakeConstraintViolationException
 */
const de_HandshakeConstraintViolationException = (
  output: any,
  context: __SerdeContext
): HandshakeConstraintViolationException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_json1_1HandshakeNotFoundException
 */
const de_HandshakeNotFoundException = (output: any, context: __SerdeContext): HandshakeNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1HandshakeParties
 */
const de_HandshakeParties = (output: any, context: __SerdeContext): HandshakeParty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HandshakeParty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HandshakeParty
 */
const de_HandshakeParty = (output: any, context: __SerdeContext): HandshakeParty => {
  return {
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1HandshakeResource
 */
const de_HandshakeResource = (output: any, context: __SerdeContext): HandshakeResource => {
  return {
    Resources: output.Resources != null ? de_HandshakeResources(output.Resources, context) : undefined,
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1HandshakeResources
 */
const de_HandshakeResources = (output: any, context: __SerdeContext): HandshakeResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HandshakeResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Handshakes
 */
const de_Handshakes = (output: any, context: __SerdeContext): Handshake[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Handshake(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InvalidHandshakeTransitionException
 */
const de_InvalidHandshakeTransitionException = (
  output: any,
  context: __SerdeContext
): InvalidHandshakeTransitionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInputException
 */
const de_InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    Message: __expectString(output.Message),
    Reason: __expectString(output.Reason),
  } as any;
};

/**
 * deserializeAws_json1_1InviteAccountToOrganizationResponse
 */
const de_InviteAccountToOrganizationResponse = (
  output: any,
  context: __SerdeContext
): InviteAccountToOrganizationResponse => {
  return {
    Handshake: output.Handshake != null ? de_Handshake(output.Handshake, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListAccountsForParentResponse
 */
const de_ListAccountsForParentResponse = (output: any, context: __SerdeContext): ListAccountsForParentResponse => {
  return {
    Accounts: output.Accounts != null ? de_Accounts(output.Accounts, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListAccountsResponse
 */
const de_ListAccountsResponse = (output: any, context: __SerdeContext): ListAccountsResponse => {
  return {
    Accounts: output.Accounts != null ? de_Accounts(output.Accounts, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListAWSServiceAccessForOrganizationResponse
 */
const de_ListAWSServiceAccessForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): ListAWSServiceAccessForOrganizationResponse => {
  return {
    EnabledServicePrincipals:
      output.EnabledServicePrincipals != null
        ? de_EnabledServicePrincipals(output.EnabledServicePrincipals, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListChildrenResponse
 */
const de_ListChildrenResponse = (output: any, context: __SerdeContext): ListChildrenResponse => {
  return {
    Children: output.Children != null ? de_Children(output.Children, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCreateAccountStatusResponse
 */
const de_ListCreateAccountStatusResponse = (output: any, context: __SerdeContext): ListCreateAccountStatusResponse => {
  return {
    CreateAccountStatuses:
      output.CreateAccountStatuses != null
        ? de_CreateAccountStatuses(output.CreateAccountStatuses, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDelegatedAdministratorsResponse
 */
const de_ListDelegatedAdministratorsResponse = (
  output: any,
  context: __SerdeContext
): ListDelegatedAdministratorsResponse => {
  return {
    DelegatedAdministrators:
      output.DelegatedAdministrators != null
        ? de_DelegatedAdministrators(output.DelegatedAdministrators, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDelegatedServicesForAccountResponse
 */
const de_ListDelegatedServicesForAccountResponse = (
  output: any,
  context: __SerdeContext
): ListDelegatedServicesForAccountResponse => {
  return {
    DelegatedServices:
      output.DelegatedServices != null ? de_DelegatedServices(output.DelegatedServices, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListHandshakesForAccountResponse
 */
const de_ListHandshakesForAccountResponse = (
  output: any,
  context: __SerdeContext
): ListHandshakesForAccountResponse => {
  return {
    Handshakes: output.Handshakes != null ? de_Handshakes(output.Handshakes, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListHandshakesForOrganizationResponse
 */
const de_ListHandshakesForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): ListHandshakesForOrganizationResponse => {
  return {
    Handshakes: output.Handshakes != null ? de_Handshakes(output.Handshakes, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListOrganizationalUnitsForParentResponse
 */
const de_ListOrganizationalUnitsForParentResponse = (
  output: any,
  context: __SerdeContext
): ListOrganizationalUnitsForParentResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationalUnits:
      output.OrganizationalUnits != null ? de_OrganizationalUnits(output.OrganizationalUnits, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListParentsResponse
 */
const de_ListParentsResponse = (output: any, context: __SerdeContext): ListParentsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Parents: output.Parents != null ? de_Parents(output.Parents, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPoliciesForTargetResponse
 */
const de_ListPoliciesForTargetResponse = (output: any, context: __SerdeContext): ListPoliciesForTargetResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Policies: output.Policies != null ? de_Policies(output.Policies, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPoliciesResponse
 */
const de_ListPoliciesResponse = (output: any, context: __SerdeContext): ListPoliciesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Policies: output.Policies != null ? de_Policies(output.Policies, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRootsResponse
 */
const de_ListRootsResponse = (output: any, context: __SerdeContext): ListRootsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Roots: output.Roots != null ? de_Roots(output.Roots, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTargetsForPolicyResponse
 */
const de_ListTargetsForPolicyResponse = (output: any, context: __SerdeContext): ListTargetsForPolicyResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Targets: output.Targets != null ? de_PolicyTargets(output.Targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MalformedPolicyDocumentException
 */
const de_MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1MasterCannotLeaveOrganizationException
 */
const de_MasterCannotLeaveOrganizationException = (
  output: any,
  context: __SerdeContext
): MasterCannotLeaveOrganizationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Organization
 */
const de_Organization = (output: any, context: __SerdeContext): Organization => {
  return {
    Arn: __expectString(output.Arn),
    AvailablePolicyTypes:
      output.AvailablePolicyTypes != null ? de_PolicyTypes(output.AvailablePolicyTypes, context) : undefined,
    FeatureSet: __expectString(output.FeatureSet),
    Id: __expectString(output.Id),
    MasterAccountArn: __expectString(output.MasterAccountArn),
    MasterAccountEmail: __expectString(output.MasterAccountEmail),
    MasterAccountId: __expectString(output.MasterAccountId),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationalUnit
 */
const de_OrganizationalUnit = (output: any, context: __SerdeContext): OrganizationalUnit => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationalUnitNotEmptyException
 */
const de_OrganizationalUnitNotEmptyException = (
  output: any,
  context: __SerdeContext
): OrganizationalUnitNotEmptyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationalUnitNotFoundException
 */
const de_OrganizationalUnitNotFoundException = (
  output: any,
  context: __SerdeContext
): OrganizationalUnitNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationalUnits
 */
const de_OrganizationalUnits = (output: any, context: __SerdeContext): OrganizationalUnit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrganizationalUnit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OrganizationNotEmptyException
 */
const de_OrganizationNotEmptyException = (output: any, context: __SerdeContext): OrganizationNotEmptyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Parent
 */
const de_Parent = (output: any, context: __SerdeContext): Parent => {
  return {
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ParentNotFoundException
 */
const de_ParentNotFoundException = (output: any, context: __SerdeContext): ParentNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Parents
 */
const de_Parents = (output: any, context: __SerdeContext): Parent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Parent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Policies
 */
const de_Policies = (output: any, context: __SerdeContext): PolicySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PolicySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Policy
 */
const de_Policy = (output: any, context: __SerdeContext): Policy => {
  return {
    Content: __expectString(output.Content),
    PolicySummary: output.PolicySummary != null ? de_PolicySummary(output.PolicySummary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PolicyChangesInProgressException
 */
const de_PolicyChangesInProgressException = (
  output: any,
  context: __SerdeContext
): PolicyChangesInProgressException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PolicyInUseException
 */
const de_PolicyInUseException = (output: any, context: __SerdeContext): PolicyInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PolicyNotAttachedException
 */
const de_PolicyNotAttachedException = (output: any, context: __SerdeContext): PolicyNotAttachedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PolicyNotFoundException
 */
const de_PolicyNotFoundException = (output: any, context: __SerdeContext): PolicyNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PolicySummary
 */
const de_PolicySummary = (output: any, context: __SerdeContext): PolicySummary => {
  return {
    Arn: __expectString(output.Arn),
    AwsManaged: __expectBoolean(output.AwsManaged),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1PolicyTargets
 */
const de_PolicyTargets = (output: any, context: __SerdeContext): PolicyTargetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PolicyTargetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PolicyTargetSummary
 */
const de_PolicyTargetSummary = (output: any, context: __SerdeContext): PolicyTargetSummary => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
    TargetId: __expectString(output.TargetId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1PolicyTypeAlreadyEnabledException
 */
const de_PolicyTypeAlreadyEnabledException = (
  output: any,
  context: __SerdeContext
): PolicyTypeAlreadyEnabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationException
 */
const de_PolicyTypeNotAvailableForOrganizationException = (
  output: any,
  context: __SerdeContext
): PolicyTypeNotAvailableForOrganizationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PolicyTypeNotEnabledException
 */
const de_PolicyTypeNotEnabledException = (output: any, context: __SerdeContext): PolicyTypeNotEnabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PolicyTypes
 */
const de_PolicyTypes = (output: any, context: __SerdeContext): PolicyTypeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PolicyTypeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PolicyTypeSummary
 */
const de_PolicyTypeSummary = (output: any, context: __SerdeContext): PolicyTypeSummary => {
  return {
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1PutResourcePolicyResponse
 */
const de_PutResourcePolicyResponse = (output: any, context: __SerdeContext): PutResourcePolicyResponse => {
  return {
    ResourcePolicy: output.ResourcePolicy != null ? de_ResourcePolicy(output.ResourcePolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourcePolicy
 */
const de_ResourcePolicy = (output: any, context: __SerdeContext): ResourcePolicy => {
  return {
    Content: __expectString(output.Content),
    ResourcePolicySummary:
      output.ResourcePolicySummary != null
        ? de_ResourcePolicySummary(output.ResourcePolicySummary, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourcePolicyNotFoundException
 */
const de_ResourcePolicyNotFoundException = (output: any, context: __SerdeContext): ResourcePolicyNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourcePolicySummary
 */
const de_ResourcePolicySummary = (output: any, context: __SerdeContext): ResourcePolicySummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1Root
 */
const de_Root = (output: any, context: __SerdeContext): Root => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    PolicyTypes: output.PolicyTypes != null ? de_PolicyTypes(output.PolicyTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RootNotFoundException
 */
const de_RootNotFoundException = (output: any, context: __SerdeContext): RootNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Roots
 */
const de_Roots = (output: any, context: __SerdeContext): Root[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Root(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceException
 */
const de_ServiceException = (output: any, context: __SerdeContext): ServiceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1SourceParentNotFoundException
 */
const de_SourceParentNotFoundException = (output: any, context: __SerdeContext): SourceParentNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
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
 * deserializeAws_json1_1TargetNotFoundException
 */
const de_TargetNotFoundException = (output: any, context: __SerdeContext): TargetNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyRequestsException
 */
const de_TooManyRequestsException = (output: any, context: __SerdeContext): TooManyRequestsException => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedAPIEndpointException
 */
const de_UnsupportedAPIEndpointException = (output: any, context: __SerdeContext): UnsupportedAPIEndpointException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateOrganizationalUnitResponse
 */
const de_UpdateOrganizationalUnitResponse = (
  output: any,
  context: __SerdeContext
): UpdateOrganizationalUnitResponse => {
  return {
    OrganizationalUnit:
      output.OrganizationalUnit != null ? de_OrganizationalUnit(output.OrganizationalUnit, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdatePolicyResponse
 */
const de_UpdatePolicyResponse = (output: any, context: __SerdeContext): UpdatePolicyResponse => {
  return {
    Policy: output.Policy != null ? de_Policy(output.Policy, context) : undefined,
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
