import {
  AcceptHandshakeCommandInput,
  AcceptHandshakeCommandOutput
} from "../commands/AcceptHandshakeCommand";
import {
  AttachPolicyCommandInput,
  AttachPolicyCommandOutput
} from "../commands/AttachPolicyCommand";
import {
  CancelHandshakeCommandInput,
  CancelHandshakeCommandOutput
} from "../commands/CancelHandshakeCommand";
import {
  CreateAccountCommandInput,
  CreateAccountCommandOutput
} from "../commands/CreateAccountCommand";
import {
  CreateGovCloudAccountCommandInput,
  CreateGovCloudAccountCommandOutput
} from "../commands/CreateGovCloudAccountCommand";
import {
  CreateOrganizationCommandInput,
  CreateOrganizationCommandOutput
} from "../commands/CreateOrganizationCommand";
import {
  CreateOrganizationalUnitCommandInput,
  CreateOrganizationalUnitCommandOutput
} from "../commands/CreateOrganizationalUnitCommand";
import {
  CreatePolicyCommandInput,
  CreatePolicyCommandOutput
} from "../commands/CreatePolicyCommand";
import {
  DeclineHandshakeCommandInput,
  DeclineHandshakeCommandOutput
} from "../commands/DeclineHandshakeCommand";
import {
  DeleteOrganizationCommandInput,
  DeleteOrganizationCommandOutput
} from "../commands/DeleteOrganizationCommand";
import {
  DeleteOrganizationalUnitCommandInput,
  DeleteOrganizationalUnitCommandOutput
} from "../commands/DeleteOrganizationalUnitCommand";
import {
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput
} from "../commands/DeletePolicyCommand";
import {
  DescribeAccountCommandInput,
  DescribeAccountCommandOutput
} from "../commands/DescribeAccountCommand";
import {
  DescribeCreateAccountStatusCommandInput,
  DescribeCreateAccountStatusCommandOutput
} from "../commands/DescribeCreateAccountStatusCommand";
import {
  DescribeEffectivePolicyCommandInput,
  DescribeEffectivePolicyCommandOutput
} from "../commands/DescribeEffectivePolicyCommand";
import {
  DescribeHandshakeCommandInput,
  DescribeHandshakeCommandOutput
} from "../commands/DescribeHandshakeCommand";
import {
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput
} from "../commands/DescribeOrganizationCommand";
import {
  DescribeOrganizationalUnitCommandInput,
  DescribeOrganizationalUnitCommandOutput
} from "../commands/DescribeOrganizationalUnitCommand";
import {
  DescribePolicyCommandInput,
  DescribePolicyCommandOutput
} from "../commands/DescribePolicyCommand";
import {
  DetachPolicyCommandInput,
  DetachPolicyCommandOutput
} from "../commands/DetachPolicyCommand";
import {
  DisableAWSServiceAccessCommandInput,
  DisableAWSServiceAccessCommandOutput
} from "../commands/DisableAWSServiceAccessCommand";
import {
  DisablePolicyTypeCommandInput,
  DisablePolicyTypeCommandOutput
} from "../commands/DisablePolicyTypeCommand";
import {
  EnableAWSServiceAccessCommandInput,
  EnableAWSServiceAccessCommandOutput
} from "../commands/EnableAWSServiceAccessCommand";
import {
  EnableAllFeaturesCommandInput,
  EnableAllFeaturesCommandOutput
} from "../commands/EnableAllFeaturesCommand";
import {
  EnablePolicyTypeCommandInput,
  EnablePolicyTypeCommandOutput
} from "../commands/EnablePolicyTypeCommand";
import {
  InviteAccountToOrganizationCommandInput,
  InviteAccountToOrganizationCommandOutput
} from "../commands/InviteAccountToOrganizationCommand";
import {
  LeaveOrganizationCommandInput,
  LeaveOrganizationCommandOutput
} from "../commands/LeaveOrganizationCommand";
import {
  ListAWSServiceAccessForOrganizationCommandInput,
  ListAWSServiceAccessForOrganizationCommandOutput
} from "../commands/ListAWSServiceAccessForOrganizationCommand";
import {
  ListAccountsCommandInput,
  ListAccountsCommandOutput
} from "../commands/ListAccountsCommand";
import {
  ListAccountsForParentCommandInput,
  ListAccountsForParentCommandOutput
} from "../commands/ListAccountsForParentCommand";
import {
  ListChildrenCommandInput,
  ListChildrenCommandOutput
} from "../commands/ListChildrenCommand";
import {
  ListCreateAccountStatusCommandInput,
  ListCreateAccountStatusCommandOutput
} from "../commands/ListCreateAccountStatusCommand";
import {
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput
} from "../commands/ListHandshakesForAccountCommand";
import {
  ListHandshakesForOrganizationCommandInput,
  ListHandshakesForOrganizationCommandOutput
} from "../commands/ListHandshakesForOrganizationCommand";
import {
  ListOrganizationalUnitsForParentCommandInput,
  ListOrganizationalUnitsForParentCommandOutput
} from "../commands/ListOrganizationalUnitsForParentCommand";
import {
  ListParentsCommandInput,
  ListParentsCommandOutput
} from "../commands/ListParentsCommand";
import {
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput
} from "../commands/ListPoliciesCommand";
import {
  ListPoliciesForTargetCommandInput,
  ListPoliciesForTargetCommandOutput
} from "../commands/ListPoliciesForTargetCommand";
import {
  ListRootsCommandInput,
  ListRootsCommandOutput
} from "../commands/ListRootsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput
} from "../commands/ListTargetsForPolicyCommand";
import {
  MoveAccountCommandInput,
  MoveAccountCommandOutput
} from "../commands/MoveAccountCommand";
import {
  RemoveAccountFromOrganizationCommandInput,
  RemoveAccountFromOrganizationCommandOutput
} from "../commands/RemoveAccountFromOrganizationCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateOrganizationalUnitCommandInput,
  UpdateOrganizationalUnitCommandOutput
} from "../commands/UpdateOrganizationalUnitCommand";
import {
  UpdatePolicyCommandInput,
  UpdatePolicyCommandOutput
} from "../commands/UpdatePolicyCommand";
import {
  AWSOrganizationsNotInUseException,
  AcceptHandshakeRequest,
  AcceptHandshakeResponse,
  AccessDeniedException,
  AccessDeniedForDependencyException,
  Account,
  AccountNotFoundException,
  AccountOwnerNotVerifiedException,
  AlreadyInOrganizationException,
  AttachPolicyRequest,
  CancelHandshakeRequest,
  CancelHandshakeResponse,
  Child,
  ChildNotFoundException,
  ConcurrentModificationException,
  ConstraintViolationException,
  CreateAccountRequest,
  CreateAccountResponse,
  CreateAccountState,
  CreateAccountStatus,
  CreateAccountStatusNotFoundException,
  CreateGovCloudAccountRequest,
  CreateGovCloudAccountResponse,
  CreateOrganizationRequest,
  CreateOrganizationResponse,
  CreateOrganizationalUnitRequest,
  CreateOrganizationalUnitResponse,
  CreatePolicyRequest,
  CreatePolicyResponse,
  DeclineHandshakeRequest,
  DeclineHandshakeResponse,
  DeleteOrganizationalUnitRequest,
  DeletePolicyRequest,
  DescribeAccountRequest,
  DescribeAccountResponse,
  DescribeCreateAccountStatusRequest,
  DescribeCreateAccountStatusResponse,
  DescribeEffectivePolicyRequest,
  DescribeEffectivePolicyResponse,
  DescribeHandshakeRequest,
  DescribeHandshakeResponse,
  DescribeOrganizationResponse,
  DescribeOrganizationalUnitRequest,
  DescribeOrganizationalUnitResponse,
  DescribePolicyRequest,
  DescribePolicyResponse,
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
  EnableAWSServiceAccessRequest,
  EnableAllFeaturesRequest,
  EnableAllFeaturesResponse,
  EnablePolicyTypeRequest,
  EnablePolicyTypeResponse,
  EnabledServicePrincipal,
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
  ListAWSServiceAccessForOrganizationRequest,
  ListAWSServiceAccessForOrganizationResponse,
  ListAccountsForParentRequest,
  ListAccountsForParentResponse,
  ListAccountsRequest,
  ListAccountsResponse,
  ListChildrenRequest,
  ListChildrenResponse,
  ListCreateAccountStatusRequest,
  ListCreateAccountStatusResponse,
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
  OrganizationNotEmptyException,
  OrganizationalUnit,
  OrganizationalUnitNotEmptyException,
  OrganizationalUnitNotFoundException,
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
  RemoveAccountFromOrganizationRequest,
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
  UpdatePolicyResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1AcceptHandshakeCommand(
  input: AcceptHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.AcceptHandshake";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1AcceptHandshakeRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AcceptHandshake",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1AttachPolicyCommand(
  input: AttachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.AttachPolicy";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1AttachPolicyRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AttachPolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CancelHandshakeCommand(
  input: CancelHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.CancelHandshake";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1CancelHandshakeRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CancelHandshake",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateAccountCommand(
  input: CreateAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.CreateAccount";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1CreateAccountRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateAccount",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateGovCloudAccountCommand(
  input: CreateGovCloudAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.CreateGovCloudAccount";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1CreateGovCloudAccountRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateGovCloudAccount",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateOrganizationCommand(
  input: CreateOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.CreateOrganization";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1CreateOrganizationRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateOrganization",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateOrganizationalUnitCommand(
  input: CreateOrganizationalUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrganizationsV20161128.CreateOrganizationalUnit";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1CreateOrganizationalUnitRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateOrganizationalUnit",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreatePolicyCommand(
  input: CreatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.CreatePolicy";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1CreatePolicyRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreatePolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeclineHandshakeCommand(
  input: DeclineHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DeclineHandshake";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DeclineHandshakeRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeclineHandshake",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteOrganizationCommand(
  input: DeleteOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DeleteOrganization";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteOrganization",
    headers: headers
  });
}

export async function serializeAws_json1_1DeleteOrganizationalUnitCommand(
  input: DeleteOrganizationalUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrganizationsV20161128.DeleteOrganizationalUnit";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DeleteOrganizationalUnitRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteOrganizationalUnit",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeletePolicyCommand(
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DeletePolicy";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DeletePolicyRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeletePolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeAccountCommand(
  input: DescribeAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DescribeAccount";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeAccountRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeAccount",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeCreateAccountStatusCommand(
  input: DescribeCreateAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrganizationsV20161128.DescribeCreateAccountStatus";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeCreateAccountStatusRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeCreateAccountStatus",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeEffectivePolicyCommand(
  input: DescribeEffectivePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DescribeEffectivePolicy";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeEffectivePolicyRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeEffectivePolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeHandshakeCommand(
  input: DescribeHandshakeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DescribeHandshake";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeHandshakeRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeHandshake",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeOrganizationCommand(
  input: DescribeOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DescribeOrganization";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeOrganization",
    headers: headers
  });
}

export async function serializeAws_json1_1DescribeOrganizationalUnitCommand(
  input: DescribeOrganizationalUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrganizationsV20161128.DescribeOrganizationalUnit";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribeOrganizationalUnitRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeOrganizationalUnit",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribePolicyCommand(
  input: DescribePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DescribePolicy";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DescribePolicyRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribePolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DetachPolicyCommand(
  input: DetachPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DetachPolicy";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DetachPolicyRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DetachPolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DisableAWSServiceAccessCommand(
  input: DisableAWSServiceAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DisableAWSServiceAccess";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DisableAWSServiceAccessRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DisableAWSServiceAccess",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DisablePolicyTypeCommand(
  input: DisablePolicyTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.DisablePolicyType";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1DisablePolicyTypeRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DisablePolicyType",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1EnableAWSServiceAccessCommand(
  input: EnableAWSServiceAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.EnableAWSServiceAccess";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1EnableAWSServiceAccessRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/EnableAWSServiceAccess",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1EnableAllFeaturesCommand(
  input: EnableAllFeaturesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.EnableAllFeatures";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1EnableAllFeaturesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/EnableAllFeatures",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1EnablePolicyTypeCommand(
  input: EnablePolicyTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.EnablePolicyType";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1EnablePolicyTypeRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/EnablePolicyType",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1InviteAccountToOrganizationCommand(
  input: InviteAccountToOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrganizationsV20161128.InviteAccountToOrganization";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1InviteAccountToOrganizationRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/InviteAccountToOrganization",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1LeaveOrganizationCommand(
  input: LeaveOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.LeaveOrganization";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/LeaveOrganization",
    headers: headers
  });
}

export async function serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand(
  input: ListAWSServiceAccessForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListAWSServiceAccessForOrganizationRequest(
      input,
      context
    )
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListAWSServiceAccessForOrganization",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListAccountsCommand(
  input: ListAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListAccounts";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListAccountsRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListAccounts",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListAccountsForParentCommand(
  input: ListAccountsForParentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListAccountsForParent";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListAccountsForParentRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListAccountsForParent",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListChildrenCommand(
  input: ListChildrenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListChildren";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListChildrenRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListChildren",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListCreateAccountStatusCommand(
  input: ListCreateAccountStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListCreateAccountStatus";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListCreateAccountStatusRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListCreateAccountStatus",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListHandshakesForAccountCommand(
  input: ListHandshakesForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrganizationsV20161128.ListHandshakesForAccount";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListHandshakesForAccountRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListHandshakesForAccount",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListHandshakesForOrganizationCommand(
  input: ListHandshakesForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrganizationsV20161128.ListHandshakesForOrganization";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListHandshakesForOrganizationRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListHandshakesForOrganization",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListOrganizationalUnitsForParentCommand(
  input: ListOrganizationalUnitsForParentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrganizationsV20161128.ListOrganizationalUnitsForParent";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListOrganizationalUnitsForParentRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListOrganizationalUnitsForParent",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListParentsCommand(
  input: ListParentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListParents";
  let body: any = {};
  body = JSON.stringify(serializeAws_json1_1ListParentsRequest(input, context));
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListParents",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListPoliciesCommand(
  input: ListPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListPolicies";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListPoliciesRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListPolicies",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListPoliciesForTargetCommand(
  input: ListPoliciesForTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListPoliciesForTarget";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListPoliciesForTargetRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListPoliciesForTarget",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListRootsCommand(
  input: ListRootsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListRoots";
  let body: any = {};
  body = JSON.stringify(serializeAws_json1_1ListRootsRequest(input, context));
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListRoots",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListTagsForResource";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTagsForResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTargetsForPolicyCommand(
  input: ListTargetsForPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.ListTargetsForPolicy";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1ListTargetsForPolicyRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTargetsForPolicy",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1MoveAccountCommand(
  input: MoveAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.MoveAccount";
  let body: any = {};
  body = JSON.stringify(serializeAws_json1_1MoveAccountRequest(input, context));
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/MoveAccount",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RemoveAccountFromOrganizationCommand(
  input: RemoveAccountFromOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrganizationsV20161128.RemoveAccountFromOrganization";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1RemoveAccountFromOrganizationRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RemoveAccountFromOrganization",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.TagResource";
  let body: any = {};
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.UntagResource";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateOrganizationalUnitCommand(
  input: UpdateOrganizationalUnitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrganizationsV20161128.UpdateOrganizationalUnit";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1UpdateOrganizationalUnitRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateOrganizationalUnit",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdatePolicyCommand(
  input: UpdatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSOrganizationsV20161128.UpdatePolicy";
  let body: any = {};
  body = JSON.stringify(
    serializeAws_json1_1UpdatePolicyRequest(input, context)
  );
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdatePolicy",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1AcceptHandshakeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptHandshakeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AcceptHandshakeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcceptHandshakeResponse(data, context);
  const response: AcceptHandshakeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AcceptHandshakeResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AcceptHandshakeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptHandshakeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedForDependencyException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedForDependencyException":
      response = await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HandshakeAlreadyInStateException":
    case "com.amazon.awsorganizations.v20161128#HandshakeAlreadyInStateException":
      response = await deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HandshakeConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#HandshakeConstraintViolationException":
      response = await deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HandshakeNotFoundException":
    case "com.amazon.awsorganizations.v20161128#HandshakeNotFoundException":
      response = await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidHandshakeTransitionException":
    case "com.amazon.awsorganizations.v20161128#InvalidHandshakeTransitionException":
      response = await deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1AttachPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AttachPolicyCommandError(output, context);
  }
  const response: AttachPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AttachPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DuplicatePolicyAttachmentException":
    case "com.amazon.awsorganizations.v20161128#DuplicatePolicyAttachmentException":
      response = await deserializeAws_json1_1DuplicatePolicyAttachmentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyChangesInProgressException":
    case "com.amazon.awsorganizations.v20161128#PolicyChangesInProgressException":
      response = await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyNotFoundException":
    case "com.amazon.awsorganizations.v20161128#PolicyNotFoundException":
      response = await deserializeAws_json1_1PolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyTypeNotEnabledException":
    case "com.amazon.awsorganizations.v20161128#PolicyTypeNotEnabledException":
      response = await deserializeAws_json1_1PolicyTypeNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TargetNotFoundException":
    case "com.amazon.awsorganizations.v20161128#TargetNotFoundException":
      response = await deserializeAws_json1_1TargetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CancelHandshakeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelHandshakeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CancelHandshakeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelHandshakeResponse(data, context);
  const response: CancelHandshakeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelHandshakeResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CancelHandshakeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelHandshakeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HandshakeAlreadyInStateException":
    case "com.amazon.awsorganizations.v20161128#HandshakeAlreadyInStateException":
      response = await deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HandshakeNotFoundException":
    case "com.amazon.awsorganizations.v20161128#HandshakeNotFoundException":
      response = await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidHandshakeTransitionException":
    case "com.amazon.awsorganizations.v20161128#InvalidHandshakeTransitionException":
      response = await deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreateAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAccountResponse(data, context);
  const response: CreateAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAccountResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FinalizingOrganizationException":
    case "com.amazon.awsorganizations.v20161128#FinalizingOrganizationException":
      response = await deserializeAws_json1_1FinalizingOrganizationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreateGovCloudAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGovCloudAccountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateGovCloudAccountCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGovCloudAccountResponse(data, context);
  const response: CreateGovCloudAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateGovCloudAccountResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateGovCloudAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGovCloudAccountCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FinalizingOrganizationException":
    case "com.amazon.awsorganizations.v20161128#FinalizingOrganizationException":
      response = await deserializeAws_json1_1FinalizingOrganizationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreateOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrganizationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateOrganizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateOrganizationResponse(data, context);
  const response: CreateOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateOrganizationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedForDependencyException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedForDependencyException":
      response = await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AlreadyInOrganizationException":
    case "com.amazon.awsorganizations.v20161128#AlreadyInOrganizationException":
      response = await deserializeAws_json1_1AlreadyInOrganizationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreateOrganizationalUnitCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrganizationalUnitCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateOrganizationalUnitCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateOrganizationalUnitResponse(
    data,
    context
  );
  const response: CreateOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateOrganizationalUnitResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateOrganizationalUnitCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrganizationalUnitCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DuplicateOrganizationalUnitException":
    case "com.amazon.awsorganizations.v20161128#DuplicateOrganizationalUnitException":
      response = await deserializeAws_json1_1DuplicateOrganizationalUnitExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ParentNotFoundException":
    case "com.amazon.awsorganizations.v20161128#ParentNotFoundException":
      response = await deserializeAws_json1_1ParentNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreatePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreatePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePolicyResponse(data, context);
  const response: CreatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreatePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DuplicatePolicyException":
    case "com.amazon.awsorganizations.v20161128#DuplicatePolicyException":
      response = await deserializeAws_json1_1DuplicatePolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazon.awsorganizations.v20161128#MalformedPolicyDocumentException":
      response = await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyTypeNotAvailableForOrganizationException":
    case "com.amazon.awsorganizations.v20161128#PolicyTypeNotAvailableForOrganizationException":
      response = await deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeclineHandshakeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineHandshakeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeclineHandshakeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeclineHandshakeResponse(data, context);
  const response: DeclineHandshakeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeclineHandshakeResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeclineHandshakeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineHandshakeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HandshakeAlreadyInStateException":
    case "com.amazon.awsorganizations.v20161128#HandshakeAlreadyInStateException":
      response = await deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HandshakeNotFoundException":
    case "com.amazon.awsorganizations.v20161128#HandshakeNotFoundException":
      response = await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidHandshakeTransitionException":
    case "com.amazon.awsorganizations.v20161128#InvalidHandshakeTransitionException":
      response = await deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteOrganizationCommandError(
      output,
      context
    );
  }
  const response: DeleteOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OrganizationNotEmptyException":
    case "com.amazon.awsorganizations.v20161128#OrganizationNotEmptyException":
      response = await deserializeAws_json1_1OrganizationNotEmptyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteOrganizationalUnitCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationalUnitCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteOrganizationalUnitCommandError(
      output,
      context
    );
  }
  const response: DeleteOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteOrganizationalUnitCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationalUnitCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OrganizationalUnitNotEmptyException":
    case "com.amazon.awsorganizations.v20161128#OrganizationalUnitNotEmptyException":
      response = await deserializeAws_json1_1OrganizationalUnitNotEmptyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OrganizationalUnitNotFoundException":
    case "com.amazon.awsorganizations.v20161128#OrganizationalUnitNotFoundException":
      response = await deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeletePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePolicyCommandError(output, context);
  }
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeletePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyInUseException":
    case "com.amazon.awsorganizations.v20161128#PolicyInUseException":
      response = await deserializeAws_json1_1PolicyInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyNotFoundException":
    case "com.amazon.awsorganizations.v20161128#PolicyNotFoundException":
      response = await deserializeAws_json1_1PolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccountResponse(data, context);
  const response: DescribeAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAccountResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountNotFoundException":
    case "com.amazon.awsorganizations.v20161128#AccountNotFoundException":
      response = await deserializeAws_json1_1AccountNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeCreateAccountStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCreateAccountStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCreateAccountStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCreateAccountStatusResponse(
    data,
    context
  );
  const response: DescribeCreateAccountStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCreateAccountStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeCreateAccountStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCreateAccountStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CreateAccountStatusNotFoundException":
    case "com.amazon.awsorganizations.v20161128#CreateAccountStatusNotFoundException":
      response = await deserializeAws_json1_1CreateAccountStatusNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeEffectivePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEffectivePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEffectivePolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEffectivePolicyResponse(
    data,
    context
  );
  const response: DescribeEffectivePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEffectivePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeEffectivePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEffectivePolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "EffectivePolicyNotFoundException":
    case "com.amazon.awsorganizations.v20161128#EffectivePolicyNotFoundException":
      response = await deserializeAws_json1_1EffectivePolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TargetNotFoundException":
    case "com.amazon.awsorganizations.v20161128#TargetNotFoundException":
      response = await deserializeAws_json1_1TargetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeHandshakeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHandshakeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeHandshakeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeHandshakeResponse(data, context);
  const response: DescribeHandshakeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeHandshakeResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeHandshakeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHandshakeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HandshakeNotFoundException":
    case "com.amazon.awsorganizations.v20161128#HandshakeNotFoundException":
      response = await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeOrganizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeOrganizationResponse(data, context);
  const response: DescribeOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeOrganizationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeOrganizationalUnitCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationalUnitCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeOrganizationalUnitCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeOrganizationalUnitResponse(
    data,
    context
  );
  const response: DescribeOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeOrganizationalUnitResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeOrganizationalUnitCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationalUnitCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OrganizationalUnitNotFoundException":
    case "com.amazon.awsorganizations.v20161128#OrganizationalUnitNotFoundException":
      response = await deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePolicyResponse(data, context);
  const response: DescribePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyNotFoundException":
    case "com.amazon.awsorganizations.v20161128#PolicyNotFoundException":
      response = await deserializeAws_json1_1PolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DetachPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DetachPolicyCommandError(output, context);
  }
  const response: DetachPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DetachPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyChangesInProgressException":
    case "com.amazon.awsorganizations.v20161128#PolicyChangesInProgressException":
      response = await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyNotAttachedException":
    case "com.amazon.awsorganizations.v20161128#PolicyNotAttachedException":
      response = await deserializeAws_json1_1PolicyNotAttachedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyNotFoundException":
    case "com.amazon.awsorganizations.v20161128#PolicyNotFoundException":
      response = await deserializeAws_json1_1PolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TargetNotFoundException":
    case "com.amazon.awsorganizations.v20161128#TargetNotFoundException":
      response = await deserializeAws_json1_1TargetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DisableAWSServiceAccessCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAWSServiceAccessCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableAWSServiceAccessCommandError(
      output,
      context
    );
  }
  const response: DisableAWSServiceAccessCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisableAWSServiceAccessCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAWSServiceAccessCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DisablePolicyTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisablePolicyTypeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisablePolicyTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisablePolicyTypeResponse(data, context);
  const response: DisablePolicyTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisablePolicyTypeResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisablePolicyTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisablePolicyTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyChangesInProgressException":
    case "com.amazon.awsorganizations.v20161128#PolicyChangesInProgressException":
      response = await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyTypeNotEnabledException":
    case "com.amazon.awsorganizations.v20161128#PolicyTypeNotEnabledException":
      response = await deserializeAws_json1_1PolicyTypeNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RootNotFoundException":
    case "com.amazon.awsorganizations.v20161128#RootNotFoundException":
      response = await deserializeAws_json1_1RootNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1EnableAWSServiceAccessCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAWSServiceAccessCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableAWSServiceAccessCommandError(
      output,
      context
    );
  }
  const response: EnableAWSServiceAccessCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1EnableAWSServiceAccessCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAWSServiceAccessCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1EnableAllFeaturesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAllFeaturesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableAllFeaturesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableAllFeaturesResponse(data, context);
  const response: EnableAllFeaturesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableAllFeaturesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1EnableAllFeaturesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAllFeaturesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HandshakeConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#HandshakeConstraintViolationException":
      response = await deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1EnablePolicyTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnablePolicyTypeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnablePolicyTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnablePolicyTypeResponse(data, context);
  const response: EnablePolicyTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnablePolicyTypeResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1EnablePolicyTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnablePolicyTypeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyChangesInProgressException":
    case "com.amazon.awsorganizations.v20161128#PolicyChangesInProgressException":
      response = await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyTypeAlreadyEnabledException":
    case "com.amazon.awsorganizations.v20161128#PolicyTypeAlreadyEnabledException":
      response = await deserializeAws_json1_1PolicyTypeAlreadyEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyTypeNotAvailableForOrganizationException":
    case "com.amazon.awsorganizations.v20161128#PolicyTypeNotAvailableForOrganizationException":
      response = await deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RootNotFoundException":
    case "com.amazon.awsorganizations.v20161128#RootNotFoundException":
      response = await deserializeAws_json1_1RootNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1InviteAccountToOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteAccountToOrganizationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1InviteAccountToOrganizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InviteAccountToOrganizationResponse(
    data,
    context
  );
  const response: InviteAccountToOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InviteAccountToOrganizationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1InviteAccountToOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteAccountToOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountOwnerNotVerifiedException":
    case "com.amazon.awsorganizations.v20161128#AccountOwnerNotVerifiedException":
      response = await deserializeAws_json1_1AccountOwnerNotVerifiedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DuplicateHandshakeException":
    case "com.amazon.awsorganizations.v20161128#DuplicateHandshakeException":
      response = await deserializeAws_json1_1DuplicateHandshakeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "FinalizingOrganizationException":
    case "com.amazon.awsorganizations.v20161128#FinalizingOrganizationException":
      response = await deserializeAws_json1_1FinalizingOrganizationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "HandshakeConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#HandshakeConstraintViolationException":
      response = await deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1LeaveOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LeaveOrganizationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1LeaveOrganizationCommandError(output, context);
  }
  const response: LeaveOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1LeaveOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LeaveOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountNotFoundException":
    case "com.amazon.awsorganizations.v20161128#AccountNotFoundException":
      response = await deserializeAws_json1_1AccountNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MasterCannotLeaveOrganizationException":
    case "com.amazon.awsorganizations.v20161128#MasterCannotLeaveOrganizationException":
      response = await deserializeAws_json1_1MasterCannotLeaveOrganizationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAWSServiceAccessForOrganizationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAWSServiceAccessForOrganizationResponse(
    data,
    context
  );
  const response: ListAWSServiceAccessForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAWSServiceAccessForOrganizationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAWSServiceAccessForOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListAccountsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAccountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAccountsResponse(data, context);
  const response: ListAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAccountsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAccountsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListAccountsForParentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsForParentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAccountsForParentCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAccountsForParentResponse(data, context);
  const response: ListAccountsForParentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAccountsForParentResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAccountsForParentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsForParentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ParentNotFoundException":
    case "com.amazon.awsorganizations.v20161128#ParentNotFoundException":
      response = await deserializeAws_json1_1ParentNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListChildrenCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChildrenCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListChildrenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListChildrenResponse(data, context);
  const response: ListChildrenCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListChildrenResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListChildrenCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChildrenCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ParentNotFoundException":
    case "com.amazon.awsorganizations.v20161128#ParentNotFoundException":
      response = await deserializeAws_json1_1ParentNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListCreateAccountStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCreateAccountStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListCreateAccountStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCreateAccountStatusResponse(
    data,
    context
  );
  const response: ListCreateAccountStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCreateAccountStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListCreateAccountStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCreateAccountStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListHandshakesForAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHandshakesForAccountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListHandshakesForAccountCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListHandshakesForAccountResponse(
    data,
    context
  );
  const response: ListHandshakesForAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListHandshakesForAccountResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListHandshakesForAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHandshakesForAccountCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListHandshakesForOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHandshakesForOrganizationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListHandshakesForOrganizationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListHandshakesForOrganizationResponse(
    data,
    context
  );
  const response: ListHandshakesForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListHandshakesForOrganizationResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListHandshakesForOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHandshakesForOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListOrganizationalUnitsForParentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationalUnitsForParentCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListOrganizationalUnitsForParentCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOrganizationalUnitsForParentResponse(
    data,
    context
  );
  const response: ListOrganizationalUnitsForParentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOrganizationalUnitsForParentResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListOrganizationalUnitsForParentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationalUnitsForParentCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ParentNotFoundException":
    case "com.amazon.awsorganizations.v20161128#ParentNotFoundException":
      response = await deserializeAws_json1_1ParentNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListParentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListParentsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListParentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListParentsResponse(data, context);
  const response: ListParentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListParentsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListParentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListParentsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ChildNotFoundException":
    case "com.amazon.awsorganizations.v20161128#ChildNotFoundException":
      response = await deserializeAws_json1_1ChildNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListPoliciesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPoliciesResponse(data, context);
  const response: ListPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPoliciesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListPoliciesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListPoliciesForTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesForTargetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPoliciesForTargetCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPoliciesForTargetResponse(data, context);
  const response: ListPoliciesForTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPoliciesForTargetResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListPoliciesForTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesForTargetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TargetNotFoundException":
    case "com.amazon.awsorganizations.v20161128#TargetNotFoundException":
      response = await deserializeAws_json1_1TargetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListRootsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRootsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRootsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRootsResponse(data, context);
  const response: ListRootsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRootsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListRootsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRootsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TargetNotFoundException":
    case "com.amazon.awsorganizations.v20161128#TargetNotFoundException":
      response = await deserializeAws_json1_1TargetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListTargetsForPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsForPolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTargetsForPolicyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTargetsForPolicyResponse(data, context);
  const response: ListTargetsForPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTargetsForPolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTargetsForPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsForPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyNotFoundException":
    case "com.amazon.awsorganizations.v20161128#PolicyNotFoundException":
      response = await deserializeAws_json1_1PolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1MoveAccountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MoveAccountCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1MoveAccountCommandError(output, context);
  }
  const response: MoveAccountCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1MoveAccountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MoveAccountCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountNotFoundException":
    case "com.amazon.awsorganizations.v20161128#AccountNotFoundException":
      response = await deserializeAws_json1_1AccountNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DestinationParentNotFoundException":
    case "com.amazon.awsorganizations.v20161128#DestinationParentNotFoundException":
      response = await deserializeAws_json1_1DestinationParentNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DuplicateAccountException":
    case "com.amazon.awsorganizations.v20161128#DuplicateAccountException":
      response = await deserializeAws_json1_1DuplicateAccountExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "SourceParentNotFoundException":
    case "com.amazon.awsorganizations.v20161128#SourceParentNotFoundException":
      response = await deserializeAws_json1_1SourceParentNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1RemoveAccountFromOrganizationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAccountFromOrganizationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveAccountFromOrganizationCommandError(
      output,
      context
    );
  }
  const response: RemoveAccountFromOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RemoveAccountFromOrganizationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveAccountFromOrganizationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccountNotFoundException":
    case "com.amazon.awsorganizations.v20161128#AccountNotFoundException":
      response = await deserializeAws_json1_1AccountNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MasterCannotLeaveOrganizationException":
    case "com.amazon.awsorganizations.v20161128#MasterCannotLeaveOrganizationException":
      response = await deserializeAws_json1_1MasterCannotLeaveOrganizationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TargetNotFoundException":
    case "com.amazon.awsorganizations.v20161128#TargetNotFoundException":
      response = await deserializeAws_json1_1TargetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TargetNotFoundException":
    case "com.amazon.awsorganizations.v20161128#TargetNotFoundException":
      response = await deserializeAws_json1_1TargetNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1UpdateOrganizationalUnitCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationalUnitCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateOrganizationalUnitCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateOrganizationalUnitResponse(
    data,
    context
  );
  const response: UpdateOrganizationalUnitCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateOrganizationalUnitResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateOrganizationalUnitCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationalUnitCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DuplicateOrganizationalUnitException":
    case "com.amazon.awsorganizations.v20161128#DuplicateOrganizationalUnitException":
      response = await deserializeAws_json1_1DuplicateOrganizationalUnitExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OrganizationalUnitNotFoundException":
    case "com.amazon.awsorganizations.v20161128#OrganizationalUnitNotFoundException":
      response = await deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1UpdatePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePolicyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdatePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePolicyResponse(data, context);
  const response: UpdatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdatePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdatePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "AWSOrganizationsNotInUseException":
    case "com.amazon.awsorganizations.v20161128#AWSOrganizationsNotInUseException":
      response = await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "AccessDeniedException":
    case "com.amazon.awsorganizations.v20161128#AccessDeniedException":
      response = await deserializeAws_json1_1AccessDeniedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConcurrentModificationException":
    case "com.amazon.awsorganizations.v20161128#ConcurrentModificationException":
      response = await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConstraintViolationException":
    case "com.amazon.awsorganizations.v20161128#ConstraintViolationException":
      response = await deserializeAws_json1_1ConstraintViolationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "DuplicatePolicyException":
    case "com.amazon.awsorganizations.v20161128#DuplicatePolicyException":
      response = await deserializeAws_json1_1DuplicatePolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInputException":
    case "com.amazon.awsorganizations.v20161128#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazon.awsorganizations.v20161128#MalformedPolicyDocumentException":
      response = await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyChangesInProgressException":
    case "com.amazon.awsorganizations.v20161128#PolicyChangesInProgressException":
      response = await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PolicyNotFoundException":
    case "com.amazon.awsorganizations.v20161128#PolicyNotFoundException":
      response = await deserializeAws_json1_1PolicyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceException":
    case "com.amazon.awsorganizations.v20161128#ServiceException":
      response = await deserializeAws_json1_1ServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazon.awsorganizations.v20161128#TooManyRequestsException":
      response = await deserializeAws_json1_1TooManyRequestsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedAPIEndpointException":
    case "com.amazon.awsorganizations.v20161128#UnsupportedAPIEndpointException":
      response = await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazon.awsorganizations.v20161128#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AWSOrganizationsNotInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AWSOrganizationsNotInUseException(
    body,
    context
  );
  const contents: AWSOrganizationsNotInUseException = {
    name: "AWSOrganizationsNotInUseException",
    __type: "AWSOrganizationsNotInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    body,
    context
  );
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedForDependencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedForDependencyException(
    body,
    context
  );
  const contents: AccessDeniedForDependencyException = {
    name: "AccessDeniedForDependencyException",
    __type: "AccessDeniedForDependencyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AccountNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccountNotFoundException(
    body,
    context
  );
  const contents: AccountNotFoundException = {
    name: "AccountNotFoundException",
    __type: "AccountNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AccountOwnerNotVerifiedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountOwnerNotVerifiedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccountOwnerNotVerifiedException(
    body,
    context
  );
  const contents: AccountOwnerNotVerifiedException = {
    name: "AccountOwnerNotVerifiedException",
    __type: "AccountOwnerNotVerifiedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AlreadyInOrganizationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyInOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AlreadyInOrganizationException(
    body,
    context
  );
  const contents: AlreadyInOrganizationException = {
    name: "AlreadyInOrganizationException",
    __type: "AlreadyInOrganizationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ChildNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChildNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ChildNotFoundException(
    body,
    context
  );
  const contents: ChildNotFoundException = {
    name: "ChildNotFoundException",
    __type: "ChildNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(
    body,
    context
  );
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    __type: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ConstraintViolationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConstraintViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConstraintViolationException(
    body,
    context
  );
  const contents: ConstraintViolationException = {
    name: "ConstraintViolationException",
    __type: "ConstraintViolationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CreateAccountStatusNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CreateAccountStatusNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CreateAccountStatusNotFoundException(
    body,
    context
  );
  const contents: CreateAccountStatusNotFoundException = {
    name: "CreateAccountStatusNotFoundException",
    __type: "CreateAccountStatusNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DestinationParentNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DestinationParentNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DestinationParentNotFoundException(
    body,
    context
  );
  const contents: DestinationParentNotFoundException = {
    name: "DestinationParentNotFoundException",
    __type: "DestinationParentNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DuplicateAccountExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateAccountException(
    body,
    context
  );
  const contents: DuplicateAccountException = {
    name: "DuplicateAccountException",
    __type: "DuplicateAccountException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DuplicateHandshakeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateHandshakeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateHandshakeException(
    body,
    context
  );
  const contents: DuplicateHandshakeException = {
    name: "DuplicateHandshakeException",
    __type: "DuplicateHandshakeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DuplicateOrganizationalUnitExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateOrganizationalUnitException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateOrganizationalUnitException(
    body,
    context
  );
  const contents: DuplicateOrganizationalUnitException = {
    name: "DuplicateOrganizationalUnitException",
    __type: "DuplicateOrganizationalUnitException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DuplicatePolicyAttachmentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatePolicyAttachmentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicatePolicyAttachmentException(
    body,
    context
  );
  const contents: DuplicatePolicyAttachmentException = {
    name: "DuplicatePolicyAttachmentException",
    __type: "DuplicatePolicyAttachmentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DuplicatePolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicatePolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicatePolicyException(
    body,
    context
  );
  const contents: DuplicatePolicyException = {
    name: "DuplicatePolicyException",
    __type: "DuplicatePolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1EffectivePolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EffectivePolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EffectivePolicyNotFoundException(
    body,
    context
  );
  const contents: EffectivePolicyNotFoundException = {
    name: "EffectivePolicyNotFoundException",
    __type: "EffectivePolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1FinalizingOrganizationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FinalizingOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FinalizingOrganizationException(
    body,
    context
  );
  const contents: FinalizingOrganizationException = {
    name: "FinalizingOrganizationException",
    __type: "FinalizingOrganizationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HandshakeAlreadyInStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HandshakeAlreadyInStateException(
    body,
    context
  );
  const contents: HandshakeAlreadyInStateException = {
    name: "HandshakeAlreadyInStateException",
    __type: "HandshakeAlreadyInStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HandshakeConstraintViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HandshakeConstraintViolationException(
    body,
    context
  );
  const contents: HandshakeConstraintViolationException = {
    name: "HandshakeConstraintViolationException",
    __type: "HandshakeConstraintViolationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1HandshakeNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<HandshakeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1HandshakeNotFoundException(
    body,
    context
  );
  const contents: HandshakeNotFoundException = {
    name: "HandshakeNotFoundException",
    __type: "HandshakeNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidHandshakeTransitionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidHandshakeTransitionException(
    body,
    context
  );
  const contents: InvalidHandshakeTransitionException = {
    name: "InvalidHandshakeTransitionException",
    __type: "InvalidHandshakeTransitionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    body,
    context
  );
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    __type: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MalformedPolicyDocumentException(
    body,
    context
  );
  const contents: MalformedPolicyDocumentException = {
    name: "MalformedPolicyDocumentException",
    __type: "MalformedPolicyDocumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MasterCannotLeaveOrganizationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MasterCannotLeaveOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MasterCannotLeaveOrganizationException(
    body,
    context
  );
  const contents: MasterCannotLeaveOrganizationException = {
    name: "MasterCannotLeaveOrganizationException",
    __type: "MasterCannotLeaveOrganizationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OrganizationNotEmptyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationNotEmptyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationNotEmptyException(
    body,
    context
  );
  const contents: OrganizationNotEmptyException = {
    name: "OrganizationNotEmptyException",
    __type: "OrganizationNotEmptyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OrganizationalUnitNotEmptyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationalUnitNotEmptyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationalUnitNotEmptyException(
    body,
    context
  );
  const contents: OrganizationalUnitNotEmptyException = {
    name: "OrganizationalUnitNotEmptyException",
    __type: "OrganizationalUnitNotEmptyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationalUnitNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationalUnitNotFoundException(
    body,
    context
  );
  const contents: OrganizationalUnitNotFoundException = {
    name: "OrganizationalUnitNotFoundException",
    __type: "OrganizationalUnitNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ParentNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ParentNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ParentNotFoundException(
    body,
    context
  );
  const contents: ParentNotFoundException = {
    name: "ParentNotFoundException",
    __type: "ParentNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PolicyChangesInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyChangesInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyChangesInProgressException(
    body,
    context
  );
  const contents: PolicyChangesInProgressException = {
    name: "PolicyChangesInProgressException",
    __type: "PolicyChangesInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PolicyInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyInUseException(
    body,
    context
  );
  const contents: PolicyInUseException = {
    name: "PolicyInUseException",
    __type: "PolicyInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PolicyNotAttachedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotAttachedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyNotAttachedException(
    body,
    context
  );
  const contents: PolicyNotAttachedException = {
    name: "PolicyNotAttachedException",
    __type: "PolicyNotAttachedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PolicyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyNotFoundException(
    body,
    context
  );
  const contents: PolicyNotFoundException = {
    name: "PolicyNotFoundException",
    __type: "PolicyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PolicyTypeAlreadyEnabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyTypeAlreadyEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyTypeAlreadyEnabledException(
    body,
    context
  );
  const contents: PolicyTypeAlreadyEnabledException = {
    name: "PolicyTypeAlreadyEnabledException",
    __type: "PolicyTypeAlreadyEnabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyTypeNotAvailableForOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationException(
    body,
    context
  );
  const contents: PolicyTypeNotAvailableForOrganizationException = {
    name: "PolicyTypeNotAvailableForOrganizationException",
    __type: "PolicyTypeNotAvailableForOrganizationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PolicyTypeNotEnabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyTypeNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyTypeNotEnabledException(
    body,
    context
  );
  const contents: PolicyTypeNotEnabledException = {
    name: "PolicyTypeNotEnabledException",
    __type: "PolicyTypeNotEnabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RootNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RootNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RootNotFoundException(
    body,
    context
  );
  const contents: RootNotFoundException = {
    name: "RootNotFoundException",
    __type: "RootNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceException(
    body,
    context
  );
  const contents: ServiceException = {
    name: "ServiceException",
    __type: "ServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1SourceParentNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceParentNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SourceParentNotFoundException(
    body,
    context
  );
  const contents: SourceParentNotFoundException = {
    name: "SourceParentNotFoundException",
    __type: "SourceParentNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TargetNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TargetNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TargetNotFoundException(
    body,
    context
  );
  const contents: TargetNotFoundException = {
    name: "TargetNotFoundException",
    __type: "TargetNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(
    body,
    context
  );
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    __type: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedAPIEndpointException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedAPIEndpointException(
    body,
    context
  );
  const contents: UnsupportedAPIEndpointException = {
    name: "UnsupportedAPIEndpointException",
    __type: "UnsupportedAPIEndpointException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AcceptHandshakeRequest = (
  input: AcceptHandshakeRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.HandshakeId !== undefined) {
    bodyParams["HandshakeId"] = input.HandshakeId;
  }
  return bodyParams;
};

const serializeAws_json1_1AttachPolicyRequest = (
  input: AttachPolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PolicyId !== undefined) {
    bodyParams["PolicyId"] = input.PolicyId;
  }
  if (input.TargetId !== undefined) {
    bodyParams["TargetId"] = input.TargetId;
  }
  return bodyParams;
};

const serializeAws_json1_1CancelHandshakeRequest = (
  input: CancelHandshakeRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.HandshakeId !== undefined) {
    bodyParams["HandshakeId"] = input.HandshakeId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateAccountRequest = (
  input: CreateAccountRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountName !== undefined) {
    bodyParams["AccountName"] = input.AccountName;
  }
  if (input.Email !== undefined) {
    bodyParams["Email"] = input.Email;
  }
  if (input.IamUserAccessToBilling !== undefined) {
    bodyParams["IamUserAccessToBilling"] = input.IamUserAccessToBilling;
  }
  if (input.RoleName !== undefined) {
    bodyParams["RoleName"] = input.RoleName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateAccountStates = (
  input: Array<CreateAccountState | string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1CreateGovCloudAccountRequest = (
  input: CreateGovCloudAccountRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountName !== undefined) {
    bodyParams["AccountName"] = input.AccountName;
  }
  if (input.Email !== undefined) {
    bodyParams["Email"] = input.Email;
  }
  if (input.IamUserAccessToBilling !== undefined) {
    bodyParams["IamUserAccessToBilling"] = input.IamUserAccessToBilling;
  }
  if (input.RoleName !== undefined) {
    bodyParams["RoleName"] = input.RoleName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateOrganizationRequest = (
  input: CreateOrganizationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.FeatureSet !== undefined) {
    bodyParams["FeatureSet"] = input.FeatureSet;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateOrganizationalUnitRequest = (
  input: CreateOrganizationalUnitRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ParentId !== undefined) {
    bodyParams["ParentId"] = input.ParentId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreatePolicyRequest = (
  input: CreatePolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Content !== undefined) {
    bodyParams["Content"] = input.Content;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1DeclineHandshakeRequest = (
  input: DeclineHandshakeRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.HandshakeId !== undefined) {
    bodyParams["HandshakeId"] = input.HandshakeId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteOrganizationalUnitRequest = (
  input: DeleteOrganizationalUnitRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.OrganizationalUnitId !== undefined) {
    bodyParams["OrganizationalUnitId"] = input.OrganizationalUnitId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeletePolicyRequest = (
  input: DeletePolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PolicyId !== undefined) {
    bodyParams["PolicyId"] = input.PolicyId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAccountRequest = (
  input: DescribeAccountRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCreateAccountStatusRequest = (
  input: DescribeCreateAccountStatusRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CreateAccountRequestId !== undefined) {
    bodyParams["CreateAccountRequestId"] = input.CreateAccountRequestId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEffectivePolicyRequest = (
  input: DescribeEffectivePolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PolicyType !== undefined) {
    bodyParams["PolicyType"] = input.PolicyType;
  }
  if (input.TargetId !== undefined) {
    bodyParams["TargetId"] = input.TargetId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeHandshakeRequest = (
  input: DescribeHandshakeRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.HandshakeId !== undefined) {
    bodyParams["HandshakeId"] = input.HandshakeId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeOrganizationalUnitRequest = (
  input: DescribeOrganizationalUnitRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.OrganizationalUnitId !== undefined) {
    bodyParams["OrganizationalUnitId"] = input.OrganizationalUnitId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribePolicyRequest = (
  input: DescribePolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PolicyId !== undefined) {
    bodyParams["PolicyId"] = input.PolicyId;
  }
  return bodyParams;
};

const serializeAws_json1_1DetachPolicyRequest = (
  input: DetachPolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PolicyId !== undefined) {
    bodyParams["PolicyId"] = input.PolicyId;
  }
  if (input.TargetId !== undefined) {
    bodyParams["TargetId"] = input.TargetId;
  }
  return bodyParams;
};

const serializeAws_json1_1DisableAWSServiceAccessRequest = (
  input: DisableAWSServiceAccessRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ServicePrincipal !== undefined) {
    bodyParams["ServicePrincipal"] = input.ServicePrincipal;
  }
  return bodyParams;
};

const serializeAws_json1_1DisablePolicyTypeRequest = (
  input: DisablePolicyTypeRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PolicyType !== undefined) {
    bodyParams["PolicyType"] = input.PolicyType;
  }
  if (input.RootId !== undefined) {
    bodyParams["RootId"] = input.RootId;
  }
  return bodyParams;
};

const serializeAws_json1_1EnableAWSServiceAccessRequest = (
  input: EnableAWSServiceAccessRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ServicePrincipal !== undefined) {
    bodyParams["ServicePrincipal"] = input.ServicePrincipal;
  }
  return bodyParams;
};

const serializeAws_json1_1EnableAllFeaturesRequest = (
  input: EnableAllFeaturesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1EnablePolicyTypeRequest = (
  input: EnablePolicyTypeRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PolicyType !== undefined) {
    bodyParams["PolicyType"] = input.PolicyType;
  }
  if (input.RootId !== undefined) {
    bodyParams["RootId"] = input.RootId;
  }
  return bodyParams;
};

const serializeAws_json1_1HandshakeFilter = (
  input: HandshakeFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ActionType !== undefined) {
    bodyParams["ActionType"] = input.ActionType;
  }
  if (input.ParentHandshakeId !== undefined) {
    bodyParams["ParentHandshakeId"] = input.ParentHandshakeId;
  }
  return bodyParams;
};

const serializeAws_json1_1HandshakeParty = (
  input: HandshakeParty,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1InviteAccountToOrganizationRequest = (
  input: InviteAccountToOrganizationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Notes !== undefined) {
    bodyParams["Notes"] = input.Notes;
  }
  if (input.Target !== undefined) {
    bodyParams["Target"] = serializeAws_json1_1HandshakeParty(
      input.Target,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListAWSServiceAccessForOrganizationRequest = (
  input: ListAWSServiceAccessForOrganizationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListAccountsForParentRequest = (
  input: ListAccountsForParentRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ParentId !== undefined) {
    bodyParams["ParentId"] = input.ParentId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListAccountsRequest = (
  input: ListAccountsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListChildrenRequest = (
  input: ListChildrenRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ChildType !== undefined) {
    bodyParams["ChildType"] = input.ChildType;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ParentId !== undefined) {
    bodyParams["ParentId"] = input.ParentId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListCreateAccountStatusRequest = (
  input: ListCreateAccountStatusRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.States !== undefined) {
    bodyParams["States"] = serializeAws_json1_1CreateAccountStates(
      input.States,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListHandshakesForAccountRequest = (
  input: ListHandshakesForAccountRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1HandshakeFilter(
      input.Filter,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListHandshakesForOrganizationRequest = (
  input: ListHandshakesForOrganizationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1HandshakeFilter(
      input.Filter,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListOrganizationalUnitsForParentRequest = (
  input: ListOrganizationalUnitsForParentRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ParentId !== undefined) {
    bodyParams["ParentId"] = input.ParentId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListParentsRequest = (
  input: ListParentsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ChildId !== undefined) {
    bodyParams["ChildId"] = input.ChildId;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListPoliciesForTargetRequest = (
  input: ListPoliciesForTargetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = input.Filter;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.TargetId !== undefined) {
    bodyParams["TargetId"] = input.TargetId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListPoliciesRequest = (
  input: ListPoliciesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = input.Filter;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListRootsRequest = (
  input: ListRootsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTargetsForPolicyRequest = (
  input: ListTargetsForPolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.PolicyId !== undefined) {
    bodyParams["PolicyId"] = input.PolicyId;
  }
  return bodyParams;
};

const serializeAws_json1_1MoveAccountRequest = (
  input: MoveAccountRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  if (input.DestinationParentId !== undefined) {
    bodyParams["DestinationParentId"] = input.DestinationParentId;
  }
  if (input.SourceParentId !== undefined) {
    bodyParams["SourceParentId"] = input.SourceParentId;
  }
  return bodyParams;
};

const serializeAws_json1_1RemoveAccountFromOrganizationRequest = (
  input: RemoveAccountFromOrganizationRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AccountId !== undefined) {
    bodyParams["AccountId"] = input.AccountId;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeys = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1Tags = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeys(input.TagKeys, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateOrganizationalUnitRequest = (
  input: UpdateOrganizationalUnitRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.OrganizationalUnitId !== undefined) {
    bodyParams["OrganizationalUnitId"] = input.OrganizationalUnitId;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdatePolicyRequest = (
  input: UpdatePolicyRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Content !== undefined) {
    bodyParams["Content"] = input.Content;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.PolicyId !== undefined) {
    bodyParams["PolicyId"] = input.PolicyId;
  }
  return bodyParams;
};

const deserializeAws_json1_1AWSOrganizationsNotInUseException = (
  output: any,
  context: __SerdeContext
): AWSOrganizationsNotInUseException => {
  let contents: any = {
    __type: "AWSOrganizationsNotInUseException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1AcceptHandshakeResponse = (
  output: any,
  context: __SerdeContext
): AcceptHandshakeResponse => {
  let contents: any = {
    __type: "AcceptHandshakeResponse",
    Handshake: undefined
  };
  if (output.Handshake !== undefined) {
    contents.Handshake = deserializeAws_json1_1Handshake(
      output.Handshake,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1AccessDeniedForDependencyException = (
  output: any,
  context: __SerdeContext
): AccessDeniedForDependencyException => {
  let contents: any = {
    __type: "AccessDeniedForDependencyException",
    Message: undefined,
    Reason: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Reason !== undefined) {
    contents.Reason = output.Reason;
  }
  return contents;
};

const deserializeAws_json1_1Account = (
  output: any,
  context: __SerdeContext
): Account => {
  let contents: any = {
    __type: "Account",
    Arn: undefined,
    Email: undefined,
    Id: undefined,
    JoinedMethod: undefined,
    JoinedTimestamp: undefined,
    Name: undefined,
    Status: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.Email !== undefined) {
    contents.Email = output.Email;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.JoinedMethod !== undefined) {
    contents.JoinedMethod = output.JoinedMethod;
  }
  if (output.JoinedTimestamp !== undefined) {
    contents.JoinedTimestamp = new Date(
      output.JoinedTimestamp % 1 != 0
        ? Math.round(output.JoinedTimestamp * 1000)
        : output.JoinedTimestamp
    );
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1AccountNotFoundException = (
  output: any,
  context: __SerdeContext
): AccountNotFoundException => {
  let contents: any = {
    __type: "AccountNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1AccountOwnerNotVerifiedException = (
  output: any,
  context: __SerdeContext
): AccountOwnerNotVerifiedException => {
  let contents: any = {
    __type: "AccountOwnerNotVerifiedException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Accounts = (
  output: any,
  context: __SerdeContext
): Array<Account> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Account(entry, context)
  );
};

const deserializeAws_json1_1AlreadyInOrganizationException = (
  output: any,
  context: __SerdeContext
): AlreadyInOrganizationException => {
  let contents: any = {
    __type: "AlreadyInOrganizationException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CancelHandshakeResponse = (
  output: any,
  context: __SerdeContext
): CancelHandshakeResponse => {
  let contents: any = {
    __type: "CancelHandshakeResponse",
    Handshake: undefined
  };
  if (output.Handshake !== undefined) {
    contents.Handshake = deserializeAws_json1_1Handshake(
      output.Handshake,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Child = (
  output: any,
  context: __SerdeContext
): Child => {
  let contents: any = {
    __type: "Child",
    Id: undefined,
    Type: undefined
  };
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1ChildNotFoundException = (
  output: any,
  context: __SerdeContext
): ChildNotFoundException => {
  let contents: any = {
    __type: "ChildNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Children = (
  output: any,
  context: __SerdeContext
): Array<Child> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Child(entry, context)
  );
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ConstraintViolationException = (
  output: any,
  context: __SerdeContext
): ConstraintViolationException => {
  let contents: any = {
    __type: "ConstraintViolationException",
    Message: undefined,
    Reason: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Reason !== undefined) {
    contents.Reason = output.Reason;
  }
  return contents;
};

const deserializeAws_json1_1CreateAccountResponse = (
  output: any,
  context: __SerdeContext
): CreateAccountResponse => {
  let contents: any = {
    __type: "CreateAccountResponse",
    CreateAccountStatus: undefined
  };
  if (output.CreateAccountStatus !== undefined) {
    contents.CreateAccountStatus = deserializeAws_json1_1CreateAccountStatus(
      output.CreateAccountStatus,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateAccountStatus = (
  output: any,
  context: __SerdeContext
): CreateAccountStatus => {
  let contents: any = {
    __type: "CreateAccountStatus",
    AccountId: undefined,
    AccountName: undefined,
    CompletedTimestamp: undefined,
    FailureReason: undefined,
    GovCloudAccountId: undefined,
    Id: undefined,
    RequestedTimestamp: undefined,
    State: undefined
  };
  if (output.AccountId !== undefined) {
    contents.AccountId = output.AccountId;
  }
  if (output.AccountName !== undefined) {
    contents.AccountName = output.AccountName;
  }
  if (output.CompletedTimestamp !== undefined) {
    contents.CompletedTimestamp = new Date(
      output.CompletedTimestamp % 1 != 0
        ? Math.round(output.CompletedTimestamp * 1000)
        : output.CompletedTimestamp
    );
  }
  if (output.FailureReason !== undefined) {
    contents.FailureReason = output.FailureReason;
  }
  if (output.GovCloudAccountId !== undefined) {
    contents.GovCloudAccountId = output.GovCloudAccountId;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.RequestedTimestamp !== undefined) {
    contents.RequestedTimestamp = new Date(
      output.RequestedTimestamp % 1 != 0
        ? Math.round(output.RequestedTimestamp * 1000)
        : output.RequestedTimestamp
    );
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1CreateAccountStatusNotFoundException = (
  output: any,
  context: __SerdeContext
): CreateAccountStatusNotFoundException => {
  let contents: any = {
    __type: "CreateAccountStatusNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CreateAccountStatuses = (
  output: any,
  context: __SerdeContext
): Array<CreateAccountStatus> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CreateAccountStatus(entry, context)
  );
};

const deserializeAws_json1_1CreateGovCloudAccountResponse = (
  output: any,
  context: __SerdeContext
): CreateGovCloudAccountResponse => {
  let contents: any = {
    __type: "CreateGovCloudAccountResponse",
    CreateAccountStatus: undefined
  };
  if (output.CreateAccountStatus !== undefined) {
    contents.CreateAccountStatus = deserializeAws_json1_1CreateAccountStatus(
      output.CreateAccountStatus,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateOrganizationResponse = (
  output: any,
  context: __SerdeContext
): CreateOrganizationResponse => {
  let contents: any = {
    __type: "CreateOrganizationResponse",
    Organization: undefined
  };
  if (output.Organization !== undefined) {
    contents.Organization = deserializeAws_json1_1Organization(
      output.Organization,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateOrganizationalUnitResponse = (
  output: any,
  context: __SerdeContext
): CreateOrganizationalUnitResponse => {
  let contents: any = {
    __type: "CreateOrganizationalUnitResponse",
    OrganizationalUnit: undefined
  };
  if (output.OrganizationalUnit !== undefined) {
    contents.OrganizationalUnit = deserializeAws_json1_1OrganizationalUnit(
      output.OrganizationalUnit,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreatePolicyResponse = (
  output: any,
  context: __SerdeContext
): CreatePolicyResponse => {
  let contents: any = {
    __type: "CreatePolicyResponse",
    Policy: undefined
  };
  if (output.Policy !== undefined) {
    contents.Policy = deserializeAws_json1_1Policy(output.Policy, context);
  }
  return contents;
};

const deserializeAws_json1_1DeclineHandshakeResponse = (
  output: any,
  context: __SerdeContext
): DeclineHandshakeResponse => {
  let contents: any = {
    __type: "DeclineHandshakeResponse",
    Handshake: undefined
  };
  if (output.Handshake !== undefined) {
    contents.Handshake = deserializeAws_json1_1Handshake(
      output.Handshake,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeAccountResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccountResponse => {
  let contents: any = {
    __type: "DescribeAccountResponse",
    Account: undefined
  };
  if (output.Account !== undefined) {
    contents.Account = deserializeAws_json1_1Account(output.Account, context);
  }
  return contents;
};

const deserializeAws_json1_1DescribeCreateAccountStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeCreateAccountStatusResponse => {
  let contents: any = {
    __type: "DescribeCreateAccountStatusResponse",
    CreateAccountStatus: undefined
  };
  if (output.CreateAccountStatus !== undefined) {
    contents.CreateAccountStatus = deserializeAws_json1_1CreateAccountStatus(
      output.CreateAccountStatus,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeEffectivePolicyResponse = (
  output: any,
  context: __SerdeContext
): DescribeEffectivePolicyResponse => {
  let contents: any = {
    __type: "DescribeEffectivePolicyResponse",
    EffectivePolicy: undefined
  };
  if (output.EffectivePolicy !== undefined) {
    contents.EffectivePolicy = deserializeAws_json1_1EffectivePolicy(
      output.EffectivePolicy,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeHandshakeResponse = (
  output: any,
  context: __SerdeContext
): DescribeHandshakeResponse => {
  let contents: any = {
    __type: "DescribeHandshakeResponse",
    Handshake: undefined
  };
  if (output.Handshake !== undefined) {
    contents.Handshake = deserializeAws_json1_1Handshake(
      output.Handshake,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationResponse => {
  let contents: any = {
    __type: "DescribeOrganizationResponse",
    Organization: undefined
  };
  if (output.Organization !== undefined) {
    contents.Organization = deserializeAws_json1_1Organization(
      output.Organization,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeOrganizationalUnitResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationalUnitResponse => {
  let contents: any = {
    __type: "DescribeOrganizationalUnitResponse",
    OrganizationalUnit: undefined
  };
  if (output.OrganizationalUnit !== undefined) {
    contents.OrganizationalUnit = deserializeAws_json1_1OrganizationalUnit(
      output.OrganizationalUnit,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribePolicyResponse = (
  output: any,
  context: __SerdeContext
): DescribePolicyResponse => {
  let contents: any = {
    __type: "DescribePolicyResponse",
    Policy: undefined
  };
  if (output.Policy !== undefined) {
    contents.Policy = deserializeAws_json1_1Policy(output.Policy, context);
  }
  return contents;
};

const deserializeAws_json1_1DestinationParentNotFoundException = (
  output: any,
  context: __SerdeContext
): DestinationParentNotFoundException => {
  let contents: any = {
    __type: "DestinationParentNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1DisablePolicyTypeResponse = (
  output: any,
  context: __SerdeContext
): DisablePolicyTypeResponse => {
  let contents: any = {
    __type: "DisablePolicyTypeResponse",
    Root: undefined
  };
  if (output.Root !== undefined) {
    contents.Root = deserializeAws_json1_1Root(output.Root, context);
  }
  return contents;
};

const deserializeAws_json1_1DuplicateAccountException = (
  output: any,
  context: __SerdeContext
): DuplicateAccountException => {
  let contents: any = {
    __type: "DuplicateAccountException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1DuplicateHandshakeException = (
  output: any,
  context: __SerdeContext
): DuplicateHandshakeException => {
  let contents: any = {
    __type: "DuplicateHandshakeException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1DuplicateOrganizationalUnitException = (
  output: any,
  context: __SerdeContext
): DuplicateOrganizationalUnitException => {
  let contents: any = {
    __type: "DuplicateOrganizationalUnitException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1DuplicatePolicyAttachmentException = (
  output: any,
  context: __SerdeContext
): DuplicatePolicyAttachmentException => {
  let contents: any = {
    __type: "DuplicatePolicyAttachmentException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1DuplicatePolicyException = (
  output: any,
  context: __SerdeContext
): DuplicatePolicyException => {
  let contents: any = {
    __type: "DuplicatePolicyException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1EffectivePolicy = (
  output: any,
  context: __SerdeContext
): EffectivePolicy => {
  let contents: any = {
    __type: "EffectivePolicy",
    LastUpdatedTimestamp: undefined,
    PolicyContent: undefined,
    PolicyType: undefined,
    TargetId: undefined
  };
  if (output.LastUpdatedTimestamp !== undefined) {
    contents.LastUpdatedTimestamp = new Date(
      output.LastUpdatedTimestamp % 1 != 0
        ? Math.round(output.LastUpdatedTimestamp * 1000)
        : output.LastUpdatedTimestamp
    );
  }
  if (output.PolicyContent !== undefined) {
    contents.PolicyContent = output.PolicyContent;
  }
  if (output.PolicyType !== undefined) {
    contents.PolicyType = output.PolicyType;
  }
  if (output.TargetId !== undefined) {
    contents.TargetId = output.TargetId;
  }
  return contents;
};

const deserializeAws_json1_1EffectivePolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): EffectivePolicyNotFoundException => {
  let contents: any = {
    __type: "EffectivePolicyNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1EnableAllFeaturesResponse = (
  output: any,
  context: __SerdeContext
): EnableAllFeaturesResponse => {
  let contents: any = {
    __type: "EnableAllFeaturesResponse",
    Handshake: undefined
  };
  if (output.Handshake !== undefined) {
    contents.Handshake = deserializeAws_json1_1Handshake(
      output.Handshake,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EnablePolicyTypeResponse = (
  output: any,
  context: __SerdeContext
): EnablePolicyTypeResponse => {
  let contents: any = {
    __type: "EnablePolicyTypeResponse",
    Root: undefined
  };
  if (output.Root !== undefined) {
    contents.Root = deserializeAws_json1_1Root(output.Root, context);
  }
  return contents;
};

const deserializeAws_json1_1EnabledServicePrincipal = (
  output: any,
  context: __SerdeContext
): EnabledServicePrincipal => {
  let contents: any = {
    __type: "EnabledServicePrincipal",
    DateEnabled: undefined,
    ServicePrincipal: undefined
  };
  if (output.DateEnabled !== undefined) {
    contents.DateEnabled = new Date(
      output.DateEnabled % 1 != 0
        ? Math.round(output.DateEnabled * 1000)
        : output.DateEnabled
    );
  }
  if (output.ServicePrincipal !== undefined) {
    contents.ServicePrincipal = output.ServicePrincipal;
  }
  return contents;
};

const deserializeAws_json1_1EnabledServicePrincipals = (
  output: any,
  context: __SerdeContext
): Array<EnabledServicePrincipal> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EnabledServicePrincipal(entry, context)
  );
};

const deserializeAws_json1_1FinalizingOrganizationException = (
  output: any,
  context: __SerdeContext
): FinalizingOrganizationException => {
  let contents: any = {
    __type: "FinalizingOrganizationException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Handshake = (
  output: any,
  context: __SerdeContext
): Handshake => {
  let contents: any = {
    __type: "Handshake",
    Action: undefined,
    Arn: undefined,
    ExpirationTimestamp: undefined,
    Id: undefined,
    Parties: undefined,
    RequestedTimestamp: undefined,
    Resources: undefined,
    State: undefined
  };
  if (output.Action !== undefined) {
    contents.Action = output.Action;
  }
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.ExpirationTimestamp !== undefined) {
    contents.ExpirationTimestamp = new Date(
      output.ExpirationTimestamp % 1 != 0
        ? Math.round(output.ExpirationTimestamp * 1000)
        : output.ExpirationTimestamp
    );
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Parties !== undefined) {
    contents.Parties = deserializeAws_json1_1HandshakeParties(
      output.Parties,
      context
    );
  }
  if (output.RequestedTimestamp !== undefined) {
    contents.RequestedTimestamp = new Date(
      output.RequestedTimestamp % 1 != 0
        ? Math.round(output.RequestedTimestamp * 1000)
        : output.RequestedTimestamp
    );
  }
  if (output.Resources !== undefined) {
    contents.Resources = deserializeAws_json1_1HandshakeResources(
      output.Resources,
      context
    );
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1HandshakeAlreadyInStateException = (
  output: any,
  context: __SerdeContext
): HandshakeAlreadyInStateException => {
  let contents: any = {
    __type: "HandshakeAlreadyInStateException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1HandshakeConstraintViolationException = (
  output: any,
  context: __SerdeContext
): HandshakeConstraintViolationException => {
  let contents: any = {
    __type: "HandshakeConstraintViolationException",
    Message: undefined,
    Reason: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Reason !== undefined) {
    contents.Reason = output.Reason;
  }
  return contents;
};

const deserializeAws_json1_1HandshakeNotFoundException = (
  output: any,
  context: __SerdeContext
): HandshakeNotFoundException => {
  let contents: any = {
    __type: "HandshakeNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1HandshakeParties = (
  output: any,
  context: __SerdeContext
): Array<HandshakeParty> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1HandshakeParty(entry, context)
  );
};

const deserializeAws_json1_1HandshakeParty = (
  output: any,
  context: __SerdeContext
): HandshakeParty => {
  let contents: any = {
    __type: "HandshakeParty",
    Id: undefined,
    Type: undefined
  };
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1HandshakeResource = (
  output: any,
  context: __SerdeContext
): HandshakeResource => {
  let contents: any = {
    __type: "HandshakeResource",
    Resources: undefined,
    Type: undefined,
    Value: undefined
  };
  if (output.Resources !== undefined) {
    contents.Resources = deserializeAws_json1_1HandshakeResources(
      output.Resources,
      context
    );
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1HandshakeResources = (
  output: any,
  context: __SerdeContext
): Array<HandshakeResource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1HandshakeResource(entry, context)
  );
};

const deserializeAws_json1_1Handshakes = (
  output: any,
  context: __SerdeContext
): Array<Handshake> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Handshake(entry, context)
  );
};

const deserializeAws_json1_1InvalidHandshakeTransitionException = (
  output: any,
  context: __SerdeContext
): InvalidHandshakeTransitionException => {
  let contents: any = {
    __type: "InvalidHandshakeTransitionException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    Message: undefined,
    Reason: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Reason !== undefined) {
    contents.Reason = output.Reason;
  }
  return contents;
};

const deserializeAws_json1_1InviteAccountToOrganizationResponse = (
  output: any,
  context: __SerdeContext
): InviteAccountToOrganizationResponse => {
  let contents: any = {
    __type: "InviteAccountToOrganizationResponse",
    Handshake: undefined
  };
  if (output.Handshake !== undefined) {
    contents.Handshake = deserializeAws_json1_1Handshake(
      output.Handshake,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListAWSServiceAccessForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): ListAWSServiceAccessForOrganizationResponse => {
  let contents: any = {
    __type: "ListAWSServiceAccessForOrganizationResponse",
    EnabledServicePrincipals: undefined,
    NextToken: undefined
  };
  if (output.EnabledServicePrincipals !== undefined) {
    contents.EnabledServicePrincipals = deserializeAws_json1_1EnabledServicePrincipals(
      output.EnabledServicePrincipals,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListAccountsForParentResponse = (
  output: any,
  context: __SerdeContext
): ListAccountsForParentResponse => {
  let contents: any = {
    __type: "ListAccountsForParentResponse",
    Accounts: undefined,
    NextToken: undefined
  };
  if (output.Accounts !== undefined) {
    contents.Accounts = deserializeAws_json1_1Accounts(
      output.Accounts,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListAccountsResponse = (
  output: any,
  context: __SerdeContext
): ListAccountsResponse => {
  let contents: any = {
    __type: "ListAccountsResponse",
    Accounts: undefined,
    NextToken: undefined
  };
  if (output.Accounts !== undefined) {
    contents.Accounts = deserializeAws_json1_1Accounts(
      output.Accounts,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListChildrenResponse = (
  output: any,
  context: __SerdeContext
): ListChildrenResponse => {
  let contents: any = {
    __type: "ListChildrenResponse",
    Children: undefined,
    NextToken: undefined
  };
  if (output.Children !== undefined) {
    contents.Children = deserializeAws_json1_1Children(
      output.Children,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListCreateAccountStatusResponse = (
  output: any,
  context: __SerdeContext
): ListCreateAccountStatusResponse => {
  let contents: any = {
    __type: "ListCreateAccountStatusResponse",
    CreateAccountStatuses: undefined,
    NextToken: undefined
  };
  if (output.CreateAccountStatuses !== undefined) {
    contents.CreateAccountStatuses = deserializeAws_json1_1CreateAccountStatuses(
      output.CreateAccountStatuses,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListHandshakesForAccountResponse = (
  output: any,
  context: __SerdeContext
): ListHandshakesForAccountResponse => {
  let contents: any = {
    __type: "ListHandshakesForAccountResponse",
    Handshakes: undefined,
    NextToken: undefined
  };
  if (output.Handshakes !== undefined) {
    contents.Handshakes = deserializeAws_json1_1Handshakes(
      output.Handshakes,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListHandshakesForOrganizationResponse = (
  output: any,
  context: __SerdeContext
): ListHandshakesForOrganizationResponse => {
  let contents: any = {
    __type: "ListHandshakesForOrganizationResponse",
    Handshakes: undefined,
    NextToken: undefined
  };
  if (output.Handshakes !== undefined) {
    contents.Handshakes = deserializeAws_json1_1Handshakes(
      output.Handshakes,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListOrganizationalUnitsForParentResponse = (
  output: any,
  context: __SerdeContext
): ListOrganizationalUnitsForParentResponse => {
  let contents: any = {
    __type: "ListOrganizationalUnitsForParentResponse",
    NextToken: undefined,
    OrganizationalUnits: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.OrganizationalUnits !== undefined) {
    contents.OrganizationalUnits = deserializeAws_json1_1OrganizationalUnits(
      output.OrganizationalUnits,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListParentsResponse = (
  output: any,
  context: __SerdeContext
): ListParentsResponse => {
  let contents: any = {
    __type: "ListParentsResponse",
    NextToken: undefined,
    Parents: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Parents !== undefined) {
    contents.Parents = deserializeAws_json1_1Parents(output.Parents, context);
  }
  return contents;
};

const deserializeAws_json1_1ListPoliciesForTargetResponse = (
  output: any,
  context: __SerdeContext
): ListPoliciesForTargetResponse => {
  let contents: any = {
    __type: "ListPoliciesForTargetResponse",
    NextToken: undefined,
    Policies: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Policies !== undefined) {
    contents.Policies = deserializeAws_json1_1Policies(
      output.Policies,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListPoliciesResponse => {
  let contents: any = {
    __type: "ListPoliciesResponse",
    NextToken: undefined,
    Policies: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Policies !== undefined) {
    contents.Policies = deserializeAws_json1_1Policies(
      output.Policies,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListRootsResponse = (
  output: any,
  context: __SerdeContext
): ListRootsResponse => {
  let contents: any = {
    __type: "ListRootsResponse",
    NextToken: undefined,
    Roots: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Roots !== undefined) {
    contents.Roots = deserializeAws_json1_1Roots(output.Roots, context);
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    NextToken: undefined,
    Tags: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ListTargetsForPolicyResponse = (
  output: any,
  context: __SerdeContext
): ListTargetsForPolicyResponse => {
  let contents: any = {
    __type: "ListTargetsForPolicyResponse",
    NextToken: undefined,
    Targets: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Targets !== undefined) {
    contents.Targets = deserializeAws_json1_1PolicyTargets(
      output.Targets,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  let contents: any = {
    __type: "MalformedPolicyDocumentException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1MasterCannotLeaveOrganizationException = (
  output: any,
  context: __SerdeContext
): MasterCannotLeaveOrganizationException => {
  let contents: any = {
    __type: "MasterCannotLeaveOrganizationException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Organization = (
  output: any,
  context: __SerdeContext
): Organization => {
  let contents: any = {
    __type: "Organization",
    Arn: undefined,
    AvailablePolicyTypes: undefined,
    FeatureSet: undefined,
    Id: undefined,
    MasterAccountArn: undefined,
    MasterAccountEmail: undefined,
    MasterAccountId: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.AvailablePolicyTypes !== undefined) {
    contents.AvailablePolicyTypes = deserializeAws_json1_1PolicyTypes(
      output.AvailablePolicyTypes,
      context
    );
  }
  if (output.FeatureSet !== undefined) {
    contents.FeatureSet = output.FeatureSet;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.MasterAccountArn !== undefined) {
    contents.MasterAccountArn = output.MasterAccountArn;
  }
  if (output.MasterAccountEmail !== undefined) {
    contents.MasterAccountEmail = output.MasterAccountEmail;
  }
  if (output.MasterAccountId !== undefined) {
    contents.MasterAccountId = output.MasterAccountId;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationNotEmptyException = (
  output: any,
  context: __SerdeContext
): OrganizationNotEmptyException => {
  let contents: any = {
    __type: "OrganizationNotEmptyException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationalUnit = (
  output: any,
  context: __SerdeContext
): OrganizationalUnit => {
  let contents: any = {
    __type: "OrganizationalUnit",
    Arn: undefined,
    Id: undefined,
    Name: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationalUnitNotEmptyException = (
  output: any,
  context: __SerdeContext
): OrganizationalUnitNotEmptyException => {
  let contents: any = {
    __type: "OrganizationalUnitNotEmptyException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationalUnitNotFoundException = (
  output: any,
  context: __SerdeContext
): OrganizationalUnitNotFoundException => {
  let contents: any = {
    __type: "OrganizationalUnitNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationalUnits = (
  output: any,
  context: __SerdeContext
): Array<OrganizationalUnit> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OrganizationalUnit(entry, context)
  );
};

const deserializeAws_json1_1Parent = (
  output: any,
  context: __SerdeContext
): Parent => {
  let contents: any = {
    __type: "Parent",
    Id: undefined,
    Type: undefined
  };
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1ParentNotFoundException = (
  output: any,
  context: __SerdeContext
): ParentNotFoundException => {
  let contents: any = {
    __type: "ParentNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Parents = (
  output: any,
  context: __SerdeContext
): Array<Parent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Parent(entry, context)
  );
};

const deserializeAws_json1_1Policies = (
  output: any,
  context: __SerdeContext
): Array<PolicySummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PolicySummary(entry, context)
  );
};

const deserializeAws_json1_1Policy = (
  output: any,
  context: __SerdeContext
): Policy => {
  let contents: any = {
    __type: "Policy",
    Content: undefined,
    PolicySummary: undefined
  };
  if (output.Content !== undefined) {
    contents.Content = output.Content;
  }
  if (output.PolicySummary !== undefined) {
    contents.PolicySummary = deserializeAws_json1_1PolicySummary(
      output.PolicySummary,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PolicyChangesInProgressException = (
  output: any,
  context: __SerdeContext
): PolicyChangesInProgressException => {
  let contents: any = {
    __type: "PolicyChangesInProgressException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1PolicyInUseException = (
  output: any,
  context: __SerdeContext
): PolicyInUseException => {
  let contents: any = {
    __type: "PolicyInUseException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1PolicyNotAttachedException = (
  output: any,
  context: __SerdeContext
): PolicyNotAttachedException => {
  let contents: any = {
    __type: "PolicyNotAttachedException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1PolicyNotFoundException = (
  output: any,
  context: __SerdeContext
): PolicyNotFoundException => {
  let contents: any = {
    __type: "PolicyNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1PolicySummary = (
  output: any,
  context: __SerdeContext
): PolicySummary => {
  let contents: any = {
    __type: "PolicySummary",
    Arn: undefined,
    AwsManaged: undefined,
    Description: undefined,
    Id: undefined,
    Name: undefined,
    Type: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.AwsManaged !== undefined) {
    contents.AwsManaged = output.AwsManaged;
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1PolicyTargetSummary = (
  output: any,
  context: __SerdeContext
): PolicyTargetSummary => {
  let contents: any = {
    __type: "PolicyTargetSummary",
    Arn: undefined,
    Name: undefined,
    TargetId: undefined,
    Type: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.TargetId !== undefined) {
    contents.TargetId = output.TargetId;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1PolicyTargets = (
  output: any,
  context: __SerdeContext
): Array<PolicyTargetSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PolicyTargetSummary(entry, context)
  );
};

const deserializeAws_json1_1PolicyTypeAlreadyEnabledException = (
  output: any,
  context: __SerdeContext
): PolicyTypeAlreadyEnabledException => {
  let contents: any = {
    __type: "PolicyTypeAlreadyEnabledException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationException = (
  output: any,
  context: __SerdeContext
): PolicyTypeNotAvailableForOrganizationException => {
  let contents: any = {
    __type: "PolicyTypeNotAvailableForOrganizationException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1PolicyTypeNotEnabledException = (
  output: any,
  context: __SerdeContext
): PolicyTypeNotEnabledException => {
  let contents: any = {
    __type: "PolicyTypeNotEnabledException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1PolicyTypeSummary = (
  output: any,
  context: __SerdeContext
): PolicyTypeSummary => {
  let contents: any = {
    __type: "PolicyTypeSummary",
    Status: undefined,
    Type: undefined
  };
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1PolicyTypes = (
  output: any,
  context: __SerdeContext
): Array<PolicyTypeSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PolicyTypeSummary(entry, context)
  );
};

const deserializeAws_json1_1Root = (
  output: any,
  context: __SerdeContext
): Root => {
  let contents: any = {
    __type: "Root",
    Arn: undefined,
    Id: undefined,
    Name: undefined,
    PolicyTypes: undefined
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.PolicyTypes !== undefined) {
    contents.PolicyTypes = deserializeAws_json1_1PolicyTypes(
      output.PolicyTypes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RootNotFoundException = (
  output: any,
  context: __SerdeContext
): RootNotFoundException => {
  let contents: any = {
    __type: "RootNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Roots = (
  output: any,
  context: __SerdeContext
): Array<Root> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Root(entry, context)
  );
};

const deserializeAws_json1_1ServiceException = (
  output: any,
  context: __SerdeContext
): ServiceException => {
  let contents: any = {
    __type: "ServiceException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1SourceParentNotFoundException = (
  output: any,
  context: __SerdeContext
): SourceParentNotFoundException => {
  let contents: any = {
    __type: "SourceParentNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TargetNotFoundException = (
  output: any,
  context: __SerdeContext
): TargetNotFoundException => {
  let contents: any = {
    __type: "TargetNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  let contents: any = {
    __type: "TooManyRequestsException",
    Message: undefined,
    Type: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1UnsupportedAPIEndpointException = (
  output: any,
  context: __SerdeContext
): UnsupportedAPIEndpointException => {
  let contents: any = {
    __type: "UnsupportedAPIEndpointException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1UpdateOrganizationalUnitResponse = (
  output: any,
  context: __SerdeContext
): UpdateOrganizationalUnitResponse => {
  let contents: any = {
    __type: "UpdateOrganizationalUnitResponse",
    OrganizationalUnit: undefined
  };
  if (output.OrganizationalUnit !== undefined) {
    contents.OrganizationalUnit = deserializeAws_json1_1OrganizationalUnit(
      output.OrganizationalUnit,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdatePolicyResponse = (
  output: any,
  context: __SerdeContext
): UpdatePolicyResponse => {
  let contents: any = {
    __type: "UpdatePolicyResponse",
    Policy: undefined
  };
  if (output.Policy !== undefined) {
    contents.Policy = deserializeAws_json1_1Policy(output.Policy, context);
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
