// smithy-typescript generated code
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
  CreateOrganizationRequest,
  CreatePolicyRequest,
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
  DescribePolicyRequest,
  DestinationParentNotFoundException,
  DetachPolicyRequest,
  DisableAWSServiceAccessRequest,
  DisablePolicyTypeRequest,
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
  ListParentsRequest,
  ListPoliciesForTargetRequest,
  ListPoliciesRequest,
  ListRootsRequest,
  ListTagsForResourceRequest,
  ListTargetsForPolicyRequest,
  MalformedPolicyDocumentException,
  MasterCannotLeaveOrganizationException,
  MoveAccountRequest,
  OrganizationalUnitNotEmptyException,
  OrganizationalUnitNotFoundException,
  OrganizationNotEmptyException,
  ParentNotFoundException,
  PolicyChangesInProgressException,
  PolicyInUseException,
  PolicyNotAttachedException,
  PolicyNotFoundException,
  PolicyTypeAlreadyEnabledException,
  PolicyTypeNotAvailableForOrganizationException,
  PolicyTypeNotEnabledException,
  PutResourcePolicyRequest,
  RegisterDelegatedAdministratorRequest,
  RemoveAccountFromOrganizationRequest,
  ResourcePolicyNotFoundException,
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
  UpdatePolicyRequest,
} from "../models/models_0";
import { OrganizationsServiceException as __BaseException } from "../models/OrganizationsServiceException";

/**
 * serializeAws_json1_1AcceptHandshakeCommand
 */
export const se_AcceptHandshakeCommand = async (
  input: AcceptHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AcceptHandshake");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachPolicyCommand
 */
export const se_AttachPolicyCommand = async (
  input: AttachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AttachPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelHandshakeCommand
 */
export const se_CancelHandshakeCommand = async (
  input: CancelHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelHandshake");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CloseAccountCommand
 */
export const se_CloseAccountCommand = async (
  input: CloseAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CloseAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAccountCommand
 */
export const se_CreateAccountCommand = async (
  input: CreateAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGovCloudAccountCommand
 */
export const se_CreateGovCloudAccountCommand = async (
  input: CreateGovCloudAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGovCloudAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateOrganizationCommand
 */
export const se_CreateOrganizationCommand = async (
  input: CreateOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateOrganization");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateOrganizationalUnitCommand
 */
export const se_CreateOrganizationalUnitCommand = async (
  input: CreateOrganizationalUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateOrganizationalUnit");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePolicyCommand
 */
export const se_CreatePolicyCommand = async (
  input: CreatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeclineHandshakeCommand
 */
export const se_DeclineHandshakeCommand = async (
  input: DeclineHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeclineHandshake");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteOrganizationCommand
 */
export const se_DeleteOrganizationCommand = async (
  input: DeleteOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteOrganization");
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
  const headers: __HeaderBag = sharedHeaders("DeleteOrganizationalUnit");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePolicyCommand
 */
export const se_DeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourcePolicy");
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
  const headers: __HeaderBag = sharedHeaders("DeregisterDelegatedAdministrator");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccountCommand
 */
export const se_DescribeAccountCommand = async (
  input: DescribeAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCreateAccountStatusCommand
 */
export const se_DescribeCreateAccountStatusCommand = async (
  input: DescribeCreateAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCreateAccountStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEffectivePolicyCommand
 */
export const se_DescribeEffectivePolicyCommand = async (
  input: DescribeEffectivePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEffectivePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHandshakeCommand
 */
export const se_DescribeHandshakeCommand = async (
  input: DescribeHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHandshake");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeOrganizationCommand
 */
export const se_DescribeOrganizationCommand = async (
  input: DescribeOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeOrganization");
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
  const headers: __HeaderBag = sharedHeaders("DescribeOrganizationalUnit");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePolicyCommand
 */
export const se_DescribePolicyCommand = async (
  input: DescribePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeResourcePolicyCommand
 */
export const se_DescribeResourcePolicyCommand = async (
  input: DescribeResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeResourcePolicy");
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
  const headers: __HeaderBag = sharedHeaders("DetachPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableAWSServiceAccessCommand
 */
export const se_DisableAWSServiceAccessCommand = async (
  input: DisableAWSServiceAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableAWSServiceAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisablePolicyTypeCommand
 */
export const se_DisablePolicyTypeCommand = async (
  input: DisablePolicyTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisablePolicyType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableAllFeaturesCommand
 */
export const se_EnableAllFeaturesCommand = async (
  input: EnableAllFeaturesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableAllFeatures");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableAWSServiceAccessCommand
 */
export const se_EnableAWSServiceAccessCommand = async (
  input: EnableAWSServiceAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableAWSServiceAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnablePolicyTypeCommand
 */
export const se_EnablePolicyTypeCommand = async (
  input: EnablePolicyTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnablePolicyType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1InviteAccountToOrganizationCommand
 */
export const se_InviteAccountToOrganizationCommand = async (
  input: InviteAccountToOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("InviteAccountToOrganization");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1LeaveOrganizationCommand
 */
export const se_LeaveOrganizationCommand = async (
  input: LeaveOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("LeaveOrganization");
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
  const headers: __HeaderBag = sharedHeaders("ListAccounts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccountsForParentCommand
 */
export const se_ListAccountsForParentCommand = async (
  input: ListAccountsForParentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAccountsForParent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand
 */
export const se_ListAWSServiceAccessForOrganizationCommand = async (
  input: ListAWSServiceAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAWSServiceAccessForOrganization");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListChildrenCommand
 */
export const se_ListChildrenCommand = async (
  input: ListChildrenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListChildren");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCreateAccountStatusCommand
 */
export const se_ListCreateAccountStatusCommand = async (
  input: ListCreateAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCreateAccountStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDelegatedAdministratorsCommand
 */
export const se_ListDelegatedAdministratorsCommand = async (
  input: ListDelegatedAdministratorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDelegatedAdministrators");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDelegatedServicesForAccountCommand
 */
export const se_ListDelegatedServicesForAccountCommand = async (
  input: ListDelegatedServicesForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDelegatedServicesForAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHandshakesForAccountCommand
 */
export const se_ListHandshakesForAccountCommand = async (
  input: ListHandshakesForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHandshakesForAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHandshakesForOrganizationCommand
 */
export const se_ListHandshakesForOrganizationCommand = async (
  input: ListHandshakesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHandshakesForOrganization");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOrganizationalUnitsForParentCommand
 */
export const se_ListOrganizationalUnitsForParentCommand = async (
  input: ListOrganizationalUnitsForParentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOrganizationalUnitsForParent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListParentsCommand
 */
export const se_ListParentsCommand = async (
  input: ListParentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListParents");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPoliciesCommand
 */
export const se_ListPoliciesCommand = async (
  input: ListPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPoliciesForTargetCommand
 */
export const se_ListPoliciesForTargetCommand = async (
  input: ListPoliciesForTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPoliciesForTarget");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRootsCommand
 */
export const se_ListRootsCommand = async (
  input: ListRootsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRoots");
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
 * serializeAws_json1_1ListTargetsForPolicyCommand
 */
export const se_ListTargetsForPolicyCommand = async (
  input: ListTargetsForPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTargetsForPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MoveAccountCommand
 */
export const se_MoveAccountCommand = async (
  input: MoveAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("MoveAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterDelegatedAdministratorCommand
 */
export const se_RegisterDelegatedAdministratorCommand = async (
  input: RegisterDelegatedAdministratorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterDelegatedAdministrator");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveAccountFromOrganizationCommand
 */
export const se_RemoveAccountFromOrganizationCommand = async (
  input: RemoveAccountFromOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveAccountFromOrganization");
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
 * serializeAws_json1_1UpdateOrganizationalUnitCommand
 */
export const se_UpdateOrganizationalUnitCommand = async (
  input: UpdateOrganizationalUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateOrganizationalUnit");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePolicyCommand
 */
export const se_UpdatePolicyCommand = async (
  input: UpdatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisablePolicyTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: EnablePolicyTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListChildrenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListOrganizationalUnitsForParentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListParentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListPoliciesForTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListRootsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTargetsForPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
 * deserializeAws_json1_1AccessDeniedForDependencyExceptionRes
 */
const de_AccessDeniedForDependencyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedForDependencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnsupportedAPIEndpointException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AcceptHandshakeRequest omitted.

// se_AttachPolicyRequest omitted.

// se_CancelHandshakeRequest omitted.

// se_CloseAccountRequest omitted.

// se_CreateAccountRequest omitted.

// se_CreateAccountStates omitted.

// se_CreateGovCloudAccountRequest omitted.

// se_CreateOrganizationalUnitRequest omitted.

// se_CreateOrganizationRequest omitted.

// se_CreatePolicyRequest omitted.

// se_DeclineHandshakeRequest omitted.

// se_DeleteOrganizationalUnitRequest omitted.

// se_DeletePolicyRequest omitted.

// se_DeregisterDelegatedAdministratorRequest omitted.

// se_DescribeAccountRequest omitted.

// se_DescribeCreateAccountStatusRequest omitted.

// se_DescribeEffectivePolicyRequest omitted.

// se_DescribeHandshakeRequest omitted.

// se_DescribeOrganizationalUnitRequest omitted.

// se_DescribePolicyRequest omitted.

// se_DetachPolicyRequest omitted.

// se_DisableAWSServiceAccessRequest omitted.

// se_DisablePolicyTypeRequest omitted.

// se_EnableAllFeaturesRequest omitted.

// se_EnableAWSServiceAccessRequest omitted.

// se_EnablePolicyTypeRequest omitted.

// se_HandshakeFilter omitted.

// se_HandshakeParty omitted.

// se_InviteAccountToOrganizationRequest omitted.

// se_ListAccountsForParentRequest omitted.

// se_ListAccountsRequest omitted.

// se_ListAWSServiceAccessForOrganizationRequest omitted.

// se_ListChildrenRequest omitted.

// se_ListCreateAccountStatusRequest omitted.

// se_ListDelegatedAdministratorsRequest omitted.

// se_ListDelegatedServicesForAccountRequest omitted.

// se_ListHandshakesForAccountRequest omitted.

// se_ListHandshakesForOrganizationRequest omitted.

// se_ListOrganizationalUnitsForParentRequest omitted.

// se_ListParentsRequest omitted.

// se_ListPoliciesForTargetRequest omitted.

// se_ListPoliciesRequest omitted.

// se_ListRootsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTargetsForPolicyRequest omitted.

// se_MoveAccountRequest omitted.

// se_PutResourcePolicyRequest omitted.

// se_RegisterDelegatedAdministratorRequest omitted.

// se_RemoveAccountFromOrganizationRequest omitted.

// se_Tag omitted.

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_UntagResourceRequest omitted.

// se_UpdateOrganizationalUnitRequest omitted.

// se_UpdatePolicyRequest omitted.

/**
 * deserializeAws_json1_1AcceptHandshakeResponse
 */
const de_AcceptHandshakeResponse = (output: any, context: __SerdeContext): AcceptHandshakeResponse => {
  return take(output, {
    Handshake: (_: any) => de_Handshake(_, context),
  }) as any;
};

// de_AccessDeniedException omitted.

// de_AccessDeniedForDependencyException omitted.

/**
 * deserializeAws_json1_1Account
 */
const de_Account = (output: any, context: __SerdeContext): Account => {
  return take(output, {
    Arn: __expectString,
    Email: __expectString,
    Id: __expectString,
    JoinedMethod: __expectString,
    JoinedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

// de_AccountAlreadyClosedException omitted.

// de_AccountAlreadyRegisteredException omitted.

// de_AccountNotFoundException omitted.

// de_AccountNotRegisteredException omitted.

// de_AccountOwnerNotVerifiedException omitted.

/**
 * deserializeAws_json1_1Accounts
 */
const de_Accounts = (output: any, context: __SerdeContext): Account[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Account(entry, context);
    });
  return retVal;
};

// de_AlreadyInOrganizationException omitted.

// de_AWSOrganizationsNotInUseException omitted.

/**
 * deserializeAws_json1_1CancelHandshakeResponse
 */
const de_CancelHandshakeResponse = (output: any, context: __SerdeContext): CancelHandshakeResponse => {
  return take(output, {
    Handshake: (_: any) => de_Handshake(_, context),
  }) as any;
};

// de_Child omitted.

// de_ChildNotFoundException omitted.

// de_Children omitted.

// de_ConcurrentModificationException omitted.

// de_ConflictException omitted.

// de_ConstraintViolationException omitted.

/**
 * deserializeAws_json1_1CreateAccountResponse
 */
const de_CreateAccountResponse = (output: any, context: __SerdeContext): CreateAccountResponse => {
  return take(output, {
    CreateAccountStatus: (_: any) => de_CreateAccountStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateAccountStatus
 */
const de_CreateAccountStatus = (output: any, context: __SerdeContext): CreateAccountStatus => {
  return take(output, {
    AccountId: __expectString,
    AccountName: __expectString,
    CompletedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    GovCloudAccountId: __expectString,
    Id: __expectString,
    RequestedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateAccountStatuses
 */
const de_CreateAccountStatuses = (output: any, context: __SerdeContext): CreateAccountStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CreateAccountStatus(entry, context);
    });
  return retVal;
};

// de_CreateAccountStatusNotFoundException omitted.

/**
 * deserializeAws_json1_1CreateGovCloudAccountResponse
 */
const de_CreateGovCloudAccountResponse = (output: any, context: __SerdeContext): CreateGovCloudAccountResponse => {
  return take(output, {
    CreateAccountStatus: (_: any) => de_CreateAccountStatus(_, context),
  }) as any;
};

// de_CreateOrganizationalUnitResponse omitted.

// de_CreateOrganizationResponse omitted.

// de_CreatePolicyResponse omitted.

/**
 * deserializeAws_json1_1DeclineHandshakeResponse
 */
const de_DeclineHandshakeResponse = (output: any, context: __SerdeContext): DeclineHandshakeResponse => {
  return take(output, {
    Handshake: (_: any) => de_Handshake(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DelegatedAdministrator
 */
const de_DelegatedAdministrator = (output: any, context: __SerdeContext): DelegatedAdministrator => {
  return take(output, {
    Arn: __expectString,
    DelegationEnabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Email: __expectString,
    Id: __expectString,
    JoinedMethod: __expectString,
    JoinedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DelegatedAdministrators
 */
const de_DelegatedAdministrators = (output: any, context: __SerdeContext): DelegatedAdministrator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DelegatedAdministrator(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DelegatedService
 */
const de_DelegatedService = (output: any, context: __SerdeContext): DelegatedService => {
  return take(output, {
    DelegationEnabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ServicePrincipal: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DelegatedServices
 */
const de_DelegatedServices = (output: any, context: __SerdeContext): DelegatedService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DelegatedService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeAccountResponse
 */
const de_DescribeAccountResponse = (output: any, context: __SerdeContext): DescribeAccountResponse => {
  return take(output, {
    Account: (_: any) => de_Account(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeCreateAccountStatusResponse
 */
const de_DescribeCreateAccountStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeCreateAccountStatusResponse => {
  return take(output, {
    CreateAccountStatus: (_: any) => de_CreateAccountStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEffectivePolicyResponse
 */
const de_DescribeEffectivePolicyResponse = (output: any, context: __SerdeContext): DescribeEffectivePolicyResponse => {
  return take(output, {
    EffectivePolicy: (_: any) => de_EffectivePolicy(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeHandshakeResponse
 */
const de_DescribeHandshakeResponse = (output: any, context: __SerdeContext): DescribeHandshakeResponse => {
  return take(output, {
    Handshake: (_: any) => de_Handshake(_, context),
  }) as any;
};

// de_DescribeOrganizationalUnitResponse omitted.

// de_DescribeOrganizationResponse omitted.

// de_DescribePolicyResponse omitted.

// de_DescribeResourcePolicyResponse omitted.

// de_DestinationParentNotFoundException omitted.

// de_DisablePolicyTypeResponse omitted.

// de_DuplicateAccountException omitted.

// de_DuplicateHandshakeException omitted.

// de_DuplicateOrganizationalUnitException omitted.

// de_DuplicatePolicyAttachmentException omitted.

// de_DuplicatePolicyException omitted.

/**
 * deserializeAws_json1_1EffectivePolicy
 */
const de_EffectivePolicy = (output: any, context: __SerdeContext): EffectivePolicy => {
  return take(output, {
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PolicyContent: __expectString,
    PolicyType: __expectString,
    TargetId: __expectString,
  }) as any;
};

// de_EffectivePolicyNotFoundException omitted.

/**
 * deserializeAws_json1_1EnableAllFeaturesResponse
 */
const de_EnableAllFeaturesResponse = (output: any, context: __SerdeContext): EnableAllFeaturesResponse => {
  return take(output, {
    Handshake: (_: any) => de_Handshake(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1EnabledServicePrincipal
 */
const de_EnabledServicePrincipal = (output: any, context: __SerdeContext): EnabledServicePrincipal => {
  return take(output, {
    DateEnabled: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ServicePrincipal: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EnabledServicePrincipals
 */
const de_EnabledServicePrincipals = (output: any, context: __SerdeContext): EnabledServicePrincipal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnabledServicePrincipal(entry, context);
    });
  return retVal;
};

// de_EnablePolicyTypeResponse omitted.

// de_FinalizingOrganizationException omitted.

/**
 * deserializeAws_json1_1Handshake
 */
const de_Handshake = (output: any, context: __SerdeContext): Handshake => {
  return take(output, {
    Action: __expectString,
    Arn: __expectString,
    ExpirationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    Parties: _json,
    RequestedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Resources: (_: any) => de_HandshakeResources(_, context),
    State: __expectString,
  }) as any;
};

// de_HandshakeAlreadyInStateException omitted.

// de_HandshakeConstraintViolationException omitted.

// de_HandshakeNotFoundException omitted.

// de_HandshakeParties omitted.

// de_HandshakeParty omitted.

/**
 * deserializeAws_json1_1HandshakeResource
 */
const de_HandshakeResource = (output: any, context: __SerdeContext): HandshakeResource => {
  return take(output, {
    Resources: (_: any) => de_HandshakeResources(_, context),
    Type: __expectString,
    Value: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HandshakeResources
 */
const de_HandshakeResources = (output: any, context: __SerdeContext): HandshakeResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Handshake(entry, context);
    });
  return retVal;
};

// de_InvalidHandshakeTransitionException omitted.

// de_InvalidInputException omitted.

/**
 * deserializeAws_json1_1InviteAccountToOrganizationResponse
 */
const de_InviteAccountToOrganizationResponse = (
  output: any,
  context: __SerdeContext
): InviteAccountToOrganizationResponse => {
  return take(output, {
    Handshake: (_: any) => de_Handshake(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListAccountsForParentResponse
 */
const de_ListAccountsForParentResponse = (output: any, context: __SerdeContext): ListAccountsForParentResponse => {
  return take(output, {
    Accounts: (_: any) => de_Accounts(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAccountsResponse
 */
const de_ListAccountsResponse = (output: any, context: __SerdeContext): ListAccountsResponse => {
  return take(output, {
    Accounts: (_: any) => de_Accounts(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAWSServiceAccessForOrganizationResponse
 */
const de_ListAWSServiceAccessForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): ListAWSServiceAccessForOrganizationResponse => {
  return take(output, {
    EnabledServicePrincipals: (_: any) => de_EnabledServicePrincipals(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListChildrenResponse omitted.

/**
 * deserializeAws_json1_1ListCreateAccountStatusResponse
 */
const de_ListCreateAccountStatusResponse = (output: any, context: __SerdeContext): ListCreateAccountStatusResponse => {
  return take(output, {
    CreateAccountStatuses: (_: any) => de_CreateAccountStatuses(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDelegatedAdministratorsResponse
 */
const de_ListDelegatedAdministratorsResponse = (
  output: any,
  context: __SerdeContext
): ListDelegatedAdministratorsResponse => {
  return take(output, {
    DelegatedAdministrators: (_: any) => de_DelegatedAdministrators(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDelegatedServicesForAccountResponse
 */
const de_ListDelegatedServicesForAccountResponse = (
  output: any,
  context: __SerdeContext
): ListDelegatedServicesForAccountResponse => {
  return take(output, {
    DelegatedServices: (_: any) => de_DelegatedServices(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListHandshakesForAccountResponse
 */
const de_ListHandshakesForAccountResponse = (
  output: any,
  context: __SerdeContext
): ListHandshakesForAccountResponse => {
  return take(output, {
    Handshakes: (_: any) => de_Handshakes(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListHandshakesForOrganizationResponse
 */
const de_ListHandshakesForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): ListHandshakesForOrganizationResponse => {
  return take(output, {
    Handshakes: (_: any) => de_Handshakes(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListOrganizationalUnitsForParentResponse omitted.

// de_ListParentsResponse omitted.

// de_ListPoliciesForTargetResponse omitted.

// de_ListPoliciesResponse omitted.

// de_ListRootsResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListTargetsForPolicyResponse omitted.

// de_MalformedPolicyDocumentException omitted.

// de_MasterCannotLeaveOrganizationException omitted.

// de_Organization omitted.

// de_OrganizationalUnit omitted.

// de_OrganizationalUnitNotEmptyException omitted.

// de_OrganizationalUnitNotFoundException omitted.

// de_OrganizationalUnits omitted.

// de_OrganizationNotEmptyException omitted.

// de_Parent omitted.

// de_ParentNotFoundException omitted.

// de_Parents omitted.

// de_Policies omitted.

// de_Policy omitted.

// de_PolicyChangesInProgressException omitted.

// de_PolicyInUseException omitted.

// de_PolicyNotAttachedException omitted.

// de_PolicyNotFoundException omitted.

// de_PolicySummary omitted.

// de_PolicyTargets omitted.

// de_PolicyTargetSummary omitted.

// de_PolicyTypeAlreadyEnabledException omitted.

// de_PolicyTypeNotAvailableForOrganizationException omitted.

// de_PolicyTypeNotEnabledException omitted.

// de_PolicyTypes omitted.

// de_PolicyTypeSummary omitted.

// de_PutResourcePolicyResponse omitted.

// de_ResourcePolicy omitted.

// de_ResourcePolicyNotFoundException omitted.

// de_ResourcePolicySummary omitted.

// de_Root omitted.

// de_RootNotFoundException omitted.

// de_Roots omitted.

// de_ServiceException omitted.

// de_SourceParentNotFoundException omitted.

// de_Tag omitted.

// de_Tags omitted.

// de_TargetNotFoundException omitted.

// de_TooManyRequestsException omitted.

// de_UnsupportedAPIEndpointException omitted.

// de_UpdateOrganizationalUnitResponse omitted.

// de_UpdatePolicyResponse omitted.

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
    "x-amz-target": `AWSOrganizationsV20161128.${operation}`,
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
