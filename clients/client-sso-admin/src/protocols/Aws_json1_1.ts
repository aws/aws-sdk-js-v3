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

import {
  AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
  AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput,
} from "../commands/AttachCustomerManagedPolicyReferenceToPermissionSetCommand";
import {
  AttachManagedPolicyToPermissionSetCommandInput,
  AttachManagedPolicyToPermissionSetCommandOutput,
} from "../commands/AttachManagedPolicyToPermissionSetCommand";
import {
  CreateAccountAssignmentCommandInput,
  CreateAccountAssignmentCommandOutput,
} from "../commands/CreateAccountAssignmentCommand";
import {
  CreateInstanceAccessControlAttributeConfigurationCommandInput,
  CreateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "../commands/CreateInstanceAccessControlAttributeConfigurationCommand";
import {
  CreatePermissionSetCommandInput,
  CreatePermissionSetCommandOutput,
} from "../commands/CreatePermissionSetCommand";
import {
  DeleteAccountAssignmentCommandInput,
  DeleteAccountAssignmentCommandOutput,
} from "../commands/DeleteAccountAssignmentCommand";
import {
  DeleteInlinePolicyFromPermissionSetCommandInput,
  DeleteInlinePolicyFromPermissionSetCommandOutput,
} from "../commands/DeleteInlinePolicyFromPermissionSetCommand";
import {
  DeleteInstanceAccessControlAttributeConfigurationCommandInput,
  DeleteInstanceAccessControlAttributeConfigurationCommandOutput,
} from "../commands/DeleteInstanceAccessControlAttributeConfigurationCommand";
import {
  DeletePermissionsBoundaryFromPermissionSetCommandInput,
  DeletePermissionsBoundaryFromPermissionSetCommandOutput,
} from "../commands/DeletePermissionsBoundaryFromPermissionSetCommand";
import {
  DeletePermissionSetCommandInput,
  DeletePermissionSetCommandOutput,
} from "../commands/DeletePermissionSetCommand";
import {
  DescribeAccountAssignmentCreationStatusCommandInput,
  DescribeAccountAssignmentCreationStatusCommandOutput,
} from "../commands/DescribeAccountAssignmentCreationStatusCommand";
import {
  DescribeAccountAssignmentDeletionStatusCommandInput,
  DescribeAccountAssignmentDeletionStatusCommandOutput,
} from "../commands/DescribeAccountAssignmentDeletionStatusCommand";
import {
  DescribeInstanceAccessControlAttributeConfigurationCommandInput,
  DescribeInstanceAccessControlAttributeConfigurationCommandOutput,
} from "../commands/DescribeInstanceAccessControlAttributeConfigurationCommand";
import {
  DescribePermissionSetCommandInput,
  DescribePermissionSetCommandOutput,
} from "../commands/DescribePermissionSetCommand";
import {
  DescribePermissionSetProvisioningStatusCommandInput,
  DescribePermissionSetProvisioningStatusCommandOutput,
} from "../commands/DescribePermissionSetProvisioningStatusCommand";
import {
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput,
} from "../commands/DetachCustomerManagedPolicyReferenceFromPermissionSetCommand";
import {
  DetachManagedPolicyFromPermissionSetCommandInput,
  DetachManagedPolicyFromPermissionSetCommandOutput,
} from "../commands/DetachManagedPolicyFromPermissionSetCommand";
import {
  GetInlinePolicyForPermissionSetCommandInput,
  GetInlinePolicyForPermissionSetCommandOutput,
} from "../commands/GetInlinePolicyForPermissionSetCommand";
import {
  GetPermissionsBoundaryForPermissionSetCommandInput,
  GetPermissionsBoundaryForPermissionSetCommandOutput,
} from "../commands/GetPermissionsBoundaryForPermissionSetCommand";
import {
  ListAccountAssignmentCreationStatusCommandInput,
  ListAccountAssignmentCreationStatusCommandOutput,
} from "../commands/ListAccountAssignmentCreationStatusCommand";
import {
  ListAccountAssignmentDeletionStatusCommandInput,
  ListAccountAssignmentDeletionStatusCommandOutput,
} from "../commands/ListAccountAssignmentDeletionStatusCommand";
import {
  ListAccountAssignmentsCommandInput,
  ListAccountAssignmentsCommandOutput,
} from "../commands/ListAccountAssignmentsCommand";
import {
  ListAccountsForProvisionedPermissionSetCommandInput,
  ListAccountsForProvisionedPermissionSetCommandOutput,
} from "../commands/ListAccountsForProvisionedPermissionSetCommand";
import {
  ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput,
} from "../commands/ListCustomerManagedPolicyReferencesInPermissionSetCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "../commands/ListInstancesCommand";
import {
  ListManagedPoliciesInPermissionSetCommandInput,
  ListManagedPoliciesInPermissionSetCommandOutput,
} from "../commands/ListManagedPoliciesInPermissionSetCommand";
import {
  ListPermissionSetProvisioningStatusCommandInput,
  ListPermissionSetProvisioningStatusCommandOutput,
} from "../commands/ListPermissionSetProvisioningStatusCommand";
import { ListPermissionSetsCommandInput, ListPermissionSetsCommandOutput } from "../commands/ListPermissionSetsCommand";
import {
  ListPermissionSetsProvisionedToAccountCommandInput,
  ListPermissionSetsProvisionedToAccountCommandOutput,
} from "../commands/ListPermissionSetsProvisionedToAccountCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ProvisionPermissionSetCommandInput,
  ProvisionPermissionSetCommandOutput,
} from "../commands/ProvisionPermissionSetCommand";
import {
  PutInlinePolicyToPermissionSetCommandInput,
  PutInlinePolicyToPermissionSetCommandOutput,
} from "../commands/PutInlinePolicyToPermissionSetCommand";
import {
  PutPermissionsBoundaryToPermissionSetCommandInput,
  PutPermissionsBoundaryToPermissionSetCommandOutput,
} from "../commands/PutPermissionsBoundaryToPermissionSetCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  UpdateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "../commands/UpdateInstanceAccessControlAttributeConfigurationCommand";
import {
  UpdatePermissionSetCommandInput,
  UpdatePermissionSetCommandOutput,
} from "../commands/UpdatePermissionSetCommand";
import {
  AccessControlAttribute,
  AccessControlAttributeValue,
  AccessDeniedException,
  AccountAssignmentOperationStatus,
  AccountAssignmentOperationStatusMetadata,
  AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  AttachManagedPolicyToPermissionSetRequest,
  ConflictException,
  CreateAccountAssignmentRequest,
  CreateAccountAssignmentResponse,
  CreateInstanceAccessControlAttributeConfigurationRequest,
  CreatePermissionSetRequest,
  CreatePermissionSetResponse,
  CustomerManagedPolicyReference,
  DeleteAccountAssignmentRequest,
  DeleteAccountAssignmentResponse,
  DeleteInlinePolicyFromPermissionSetRequest,
  DeleteInstanceAccessControlAttributeConfigurationRequest,
  DeletePermissionsBoundaryFromPermissionSetRequest,
  DeletePermissionSetRequest,
  DescribeAccountAssignmentCreationStatusRequest,
  DescribeAccountAssignmentCreationStatusResponse,
  DescribeAccountAssignmentDeletionStatusRequest,
  DescribeAccountAssignmentDeletionStatusResponse,
  DescribeInstanceAccessControlAttributeConfigurationRequest,
  DescribePermissionSetProvisioningStatusRequest,
  DescribePermissionSetProvisioningStatusResponse,
  DescribePermissionSetRequest,
  DescribePermissionSetResponse,
  DetachCustomerManagedPolicyReferenceFromPermissionSetRequest,
  DetachManagedPolicyFromPermissionSetRequest,
  GetInlinePolicyForPermissionSetRequest,
  GetPermissionsBoundaryForPermissionSetRequest,
  InstanceAccessControlAttributeConfiguration,
  InternalServerException,
  ListAccountAssignmentCreationStatusRequest,
  ListAccountAssignmentCreationStatusResponse,
  ListAccountAssignmentDeletionStatusRequest,
  ListAccountAssignmentDeletionStatusResponse,
  ListAccountAssignmentsRequest,
  ListAccountsForProvisionedPermissionSetRequest,
  ListCustomerManagedPolicyReferencesInPermissionSetRequest,
  ListInstancesRequest,
  ListManagedPoliciesInPermissionSetRequest,
  ListPermissionSetProvisioningStatusRequest,
  ListPermissionSetProvisioningStatusResponse,
  ListPermissionSetsProvisionedToAccountRequest,
  ListPermissionSetsRequest,
  ListTagsForResourceRequest,
  OperationStatusFilter,
  PermissionsBoundary,
  PermissionSet,
  PermissionSetProvisioningStatus,
  PermissionSetProvisioningStatusMetadata,
  ProvisionPermissionSetRequest,
  ProvisionPermissionSetResponse,
  PutInlinePolicyToPermissionSetRequest,
  PutPermissionsBoundaryToPermissionSetRequest,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Tag,
  TagResourceRequest,
  ThrottlingException,
  UntagResourceRequest,
  UpdateInstanceAccessControlAttributeConfigurationRequest,
  UpdatePermissionSetRequest,
  ValidationException,
} from "../models/models_0";
import { SSOAdminServiceException as __BaseException } from "../models/SSOAdminServiceException";

/**
 * serializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetCommand
 */
export const se_AttachCustomerManagedPolicyReferenceToPermissionSetCommand = async (
  input: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AttachCustomerManagedPolicyReferenceToPermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AttachManagedPolicyToPermissionSetCommand
 */
export const se_AttachManagedPolicyToPermissionSetCommand = async (
  input: AttachManagedPolicyToPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AttachManagedPolicyToPermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAccountAssignmentCommand
 */
export const se_CreateAccountAssignmentCommand = async (
  input: CreateAccountAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAccountAssignment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand
 */
export const se_CreateInstanceAccessControlAttributeConfigurationCommand = async (
  input: CreateInstanceAccessControlAttributeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInstanceAccessControlAttributeConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePermissionSetCommand
 */
export const se_CreatePermissionSetCommand = async (
  input: CreatePermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAccountAssignmentCommand
 */
export const se_DeleteAccountAssignmentCommand = async (
  input: DeleteAccountAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAccountAssignment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommand
 */
export const se_DeleteInlinePolicyFromPermissionSetCommand = async (
  input: DeleteInlinePolicyFromPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInlinePolicyFromPermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand
 */
export const se_DeleteInstanceAccessControlAttributeConfigurationCommand = async (
  input: DeleteInstanceAccessControlAttributeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInstanceAccessControlAttributeConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommand
 */
export const se_DeletePermissionsBoundaryFromPermissionSetCommand = async (
  input: DeletePermissionsBoundaryFromPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePermissionsBoundaryFromPermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePermissionSetCommand
 */
export const se_DeletePermissionSetCommand = async (
  input: DeletePermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand
 */
export const se_DescribeAccountAssignmentCreationStatusCommand = async (
  input: DescribeAccountAssignmentCreationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAccountAssignmentCreationStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommand
 */
export const se_DescribeAccountAssignmentDeletionStatusCommand = async (
  input: DescribeAccountAssignmentDeletionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAccountAssignmentDeletionStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommand
 */
export const se_DescribeInstanceAccessControlAttributeConfigurationCommand = async (
  input: DescribeInstanceAccessControlAttributeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInstanceAccessControlAttributeConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePermissionSetCommand
 */
export const se_DescribePermissionSetCommand = async (
  input: DescribePermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePermissionSetProvisioningStatusCommand
 */
export const se_DescribePermissionSetProvisioningStatusCommand = async (
  input: DescribePermissionSetProvisioningStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePermissionSetProvisioningStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommand
 */
export const se_DetachCustomerManagedPolicyReferenceFromPermissionSetCommand = async (
  input: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetachCustomerManagedPolicyReferenceFromPermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand
 */
export const se_DetachManagedPolicyFromPermissionSetCommand = async (
  input: DetachManagedPolicyFromPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DetachManagedPolicyFromPermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInlinePolicyForPermissionSetCommand
 */
export const se_GetInlinePolicyForPermissionSetCommand = async (
  input: GetInlinePolicyForPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInlinePolicyForPermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommand
 */
export const se_GetPermissionsBoundaryForPermissionSetCommand = async (
  input: GetPermissionsBoundaryForPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPermissionsBoundaryForPermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccountAssignmentCreationStatusCommand
 */
export const se_ListAccountAssignmentCreationStatusCommand = async (
  input: ListAccountAssignmentCreationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAccountAssignmentCreationStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccountAssignmentDeletionStatusCommand
 */
export const se_ListAccountAssignmentDeletionStatusCommand = async (
  input: ListAccountAssignmentDeletionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAccountAssignmentDeletionStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccountAssignmentsCommand
 */
export const se_ListAccountAssignmentsCommand = async (
  input: ListAccountAssignmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAccountAssignments");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccountsForProvisionedPermissionSetCommand
 */
export const se_ListAccountsForProvisionedPermissionSetCommand = async (
  input: ListAccountsForProvisionedPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAccountsForProvisionedPermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommand
 */
export const se_ListCustomerManagedPolicyReferencesInPermissionSetCommand = async (
  input: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCustomerManagedPolicyReferencesInPermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInstancesCommand
 */
export const se_ListInstancesCommand = async (
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListManagedPoliciesInPermissionSetCommand
 */
export const se_ListManagedPoliciesInPermissionSetCommand = async (
  input: ListManagedPoliciesInPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListManagedPoliciesInPermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPermissionSetProvisioningStatusCommand
 */
export const se_ListPermissionSetProvisioningStatusCommand = async (
  input: ListPermissionSetProvisioningStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPermissionSetProvisioningStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPermissionSetsCommand
 */
export const se_ListPermissionSetsCommand = async (
  input: ListPermissionSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPermissionSets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand
 */
export const se_ListPermissionSetsProvisionedToAccountCommand = async (
  input: ListPermissionSetsProvisionedToAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPermissionSetsProvisionedToAccount");
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
 * serializeAws_json1_1ProvisionPermissionSetCommand
 */
export const se_ProvisionPermissionSetCommand = async (
  input: ProvisionPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ProvisionPermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutInlinePolicyToPermissionSetCommand
 */
export const se_PutInlinePolicyToPermissionSetCommand = async (
  input: PutInlinePolicyToPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutInlinePolicyToPermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommand
 */
export const se_PutPermissionsBoundaryToPermissionSetCommand = async (
  input: PutPermissionsBoundaryToPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutPermissionsBoundaryToPermissionSet");
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
 * serializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand
 */
export const se_UpdateInstanceAccessControlAttributeConfigurationCommand = async (
  input: UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateInstanceAccessControlAttributeConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePermissionSetCommand
 */
export const se_UpdatePermissionSetCommand = async (
  input: UpdatePermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePermissionSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetCommand
 */
export const de_AttachCustomerManagedPolicyReferenceToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachCustomerManagedPolicyReferenceToPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetCommandError
 */
const de_AttachCustomerManagedPolicyReferenceToPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AttachManagedPolicyToPermissionSetCommand
 */
export const de_AttachManagedPolicyToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachManagedPolicyToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachManagedPolicyToPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AttachManagedPolicyToPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AttachManagedPolicyToPermissionSetCommandError
 */
const de_AttachManagedPolicyToPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachManagedPolicyToPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateAccountAssignmentCommand
 */
export const de_CreateAccountAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAccountAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAccountAssignmentResponse(data, context);
  const response: CreateAccountAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAccountAssignmentCommandError
 */
const de_CreateAccountAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand
 */
export const de_CreateInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateInstanceAccessControlAttributeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateInstanceAccessControlAttributeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommandError
 */
const de_CreateInstanceAccessControlAttributeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceAccessControlAttributeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreatePermissionSetCommand
 */
export const de_CreatePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePermissionSetResponse(data, context);
  const response: CreatePermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePermissionSetCommandError
 */
const de_CreatePermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteAccountAssignmentCommand
 */
export const de_DeleteAccountAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAccountAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAccountAssignmentResponse(data, context);
  const response: DeleteAccountAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAccountAssignmentCommandError
 */
const de_DeleteAccountAssignmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAssignmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommand
 */
export const de_DeleteInlinePolicyFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInlinePolicyFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInlinePolicyFromPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteInlinePolicyFromPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommandError
 */
const de_DeleteInlinePolicyFromPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInlinePolicyFromPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand
 */
export const de_DeleteInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInstanceAccessControlAttributeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteInstanceAccessControlAttributeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommandError
 */
const de_DeleteInstanceAccessControlAttributeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceAccessControlAttributeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommand
 */
export const de_DeletePermissionsBoundaryFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionsBoundaryFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePermissionsBoundaryFromPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeletePermissionsBoundaryFromPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommandError
 */
const de_DeletePermissionsBoundaryFromPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionsBoundaryFromPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeletePermissionSetCommand
 */
export const de_DeletePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeletePermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeletePermissionSetCommandError
 */
const de_DeletePermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand
 */
export const de_DescribeAccountAssignmentCreationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAssignmentCreationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountAssignmentCreationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountAssignmentCreationStatusResponse(data, context);
  const response: DescribeAccountAssignmentCreationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAccountAssignmentCreationStatusCommandError
 */
const de_DescribeAccountAssignmentCreationStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAssignmentCreationStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommand
 */
export const de_DescribeAccountAssignmentDeletionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAssignmentDeletionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountAssignmentDeletionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAccountAssignmentDeletionStatusResponse(data, context);
  const response: DescribeAccountAssignmentDeletionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommandError
 */
const de_DescribeAccountAssignmentDeletionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAssignmentDeletionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommand
 */
export const de_DescribeInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInstanceAccessControlAttributeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeInstanceAccessControlAttributeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommandError
 */
const de_DescribeInstanceAccessControlAttributeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceAccessControlAttributeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribePermissionSetCommand
 */
export const de_DescribePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePermissionSetResponse(data, context);
  const response: DescribePermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePermissionSetCommandError
 */
const de_DescribePermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribePermissionSetProvisioningStatusCommand
 */
export const de_DescribePermissionSetProvisioningStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionSetProvisioningStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePermissionSetProvisioningStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePermissionSetProvisioningStatusResponse(data, context);
  const response: DescribePermissionSetProvisioningStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePermissionSetProvisioningStatusCommandError
 */
const de_DescribePermissionSetProvisioningStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionSetProvisioningStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommand
 */
export const de_DetachCustomerManagedPolicyReferenceFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachCustomerManagedPolicyReferenceFromPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommandError
 */
const de_DetachCustomerManagedPolicyReferenceFromPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand
 */
export const de_DetachManagedPolicyFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachManagedPolicyFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachManagedPolicyFromPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DetachManagedPolicyFromPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DetachManagedPolicyFromPermissionSetCommandError
 */
const de_DetachManagedPolicyFromPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachManagedPolicyFromPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetInlinePolicyForPermissionSetCommand
 */
export const de_GetInlinePolicyForPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInlinePolicyForPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInlinePolicyForPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetInlinePolicyForPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetInlinePolicyForPermissionSetCommandError
 */
const de_GetInlinePolicyForPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInlinePolicyForPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommand
 */
export const de_GetPermissionsBoundaryForPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionsBoundaryForPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPermissionsBoundaryForPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetPermissionsBoundaryForPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommandError
 */
const de_GetPermissionsBoundaryForPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionsBoundaryForPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAccountAssignmentCreationStatusCommand
 */
export const de_ListAccountAssignmentCreationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentCreationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccountAssignmentCreationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccountAssignmentCreationStatusResponse(data, context);
  const response: ListAccountAssignmentCreationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAccountAssignmentCreationStatusCommandError
 */
const de_ListAccountAssignmentCreationStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentCreationStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAccountAssignmentDeletionStatusCommand
 */
export const de_ListAccountAssignmentDeletionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentDeletionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccountAssignmentDeletionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccountAssignmentDeletionStatusResponse(data, context);
  const response: ListAccountAssignmentDeletionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAccountAssignmentDeletionStatusCommandError
 */
const de_ListAccountAssignmentDeletionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentDeletionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAccountAssignmentsCommand
 */
export const de_ListAccountAssignmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccountAssignmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAccountAssignmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAccountAssignmentsCommandError
 */
const de_ListAccountAssignmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAccountsForProvisionedPermissionSetCommand
 */
export const de_ListAccountsForProvisionedPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsForProvisionedPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccountsForProvisionedPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAccountsForProvisionedPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAccountsForProvisionedPermissionSetCommandError
 */
const de_ListAccountsForProvisionedPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsForProvisionedPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommand
 */
export const de_ListCustomerManagedPolicyReferencesInPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCustomerManagedPolicyReferencesInPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommandError
 */
const de_ListCustomerManagedPolicyReferencesInPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListInstancesCommand
 */
export const de_ListInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListInstancesCommandError
 */
const de_ListInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListManagedPoliciesInPermissionSetCommand
 */
export const de_ListManagedPoliciesInPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedPoliciesInPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListManagedPoliciesInPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListManagedPoliciesInPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListManagedPoliciesInPermissionSetCommandError
 */
const de_ListManagedPoliciesInPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedPoliciesInPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListPermissionSetProvisioningStatusCommand
 */
export const de_ListPermissionSetProvisioningStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetProvisioningStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPermissionSetProvisioningStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPermissionSetProvisioningStatusResponse(data, context);
  const response: ListPermissionSetProvisioningStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPermissionSetProvisioningStatusCommandError
 */
const de_ListPermissionSetProvisioningStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetProvisioningStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListPermissionSetsCommand
 */
export const de_ListPermissionSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPermissionSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListPermissionSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPermissionSetsCommandError
 */
const de_ListPermissionSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand
 */
export const de_ListPermissionSetsProvisionedToAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetsProvisionedToAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPermissionSetsProvisionedToAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListPermissionSetsProvisionedToAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPermissionSetsProvisionedToAccountCommandError
 */
const de_ListPermissionSetsProvisionedToAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetsProvisionedToAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ProvisionPermissionSetCommand
 */
export const de_ProvisionPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ProvisionPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ProvisionPermissionSetResponse(data, context);
  const response: ProvisionPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ProvisionPermissionSetCommandError
 */
const de_ProvisionPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutInlinePolicyToPermissionSetCommand
 */
export const de_PutInlinePolicyToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInlinePolicyToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutInlinePolicyToPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutInlinePolicyToPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutInlinePolicyToPermissionSetCommandError
 */
const de_PutInlinePolicyToPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInlinePolicyToPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommand
 */
export const de_PutPermissionsBoundaryToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionsBoundaryToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutPermissionsBoundaryToPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutPermissionsBoundaryToPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommandError
 */
const de_PutPermissionsBoundaryToPermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionsBoundaryToPermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand
 */
export const de_UpdateInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateInstanceAccessControlAttributeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateInstanceAccessControlAttributeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommandError
 */
const de_UpdateInstanceAccessControlAttributeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceAccessControlAttributeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdatePermissionSetCommand
 */
export const de_UpdatePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdatePermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdatePermissionSetCommandError
 */
const de_UpdatePermissionSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePermissionSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
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
 * deserializeAws_json1_1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
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

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AccessControlAttribute omitted.

// se_AccessControlAttributeList omitted.

// se_AccessControlAttributeValue omitted.

// se_AccessControlAttributeValueSourceList omitted.

// se_AttachCustomerManagedPolicyReferenceToPermissionSetRequest omitted.

// se_AttachManagedPolicyToPermissionSetRequest omitted.

// se_CreateAccountAssignmentRequest omitted.

// se_CreateInstanceAccessControlAttributeConfigurationRequest omitted.

// se_CreatePermissionSetRequest omitted.

// se_CustomerManagedPolicyReference omitted.

// se_DeleteAccountAssignmentRequest omitted.

// se_DeleteInlinePolicyFromPermissionSetRequest omitted.

// se_DeleteInstanceAccessControlAttributeConfigurationRequest omitted.

// se_DeletePermissionsBoundaryFromPermissionSetRequest omitted.

// se_DeletePermissionSetRequest omitted.

// se_DescribeAccountAssignmentCreationStatusRequest omitted.

// se_DescribeAccountAssignmentDeletionStatusRequest omitted.

// se_DescribeInstanceAccessControlAttributeConfigurationRequest omitted.

// se_DescribePermissionSetProvisioningStatusRequest omitted.

// se_DescribePermissionSetRequest omitted.

// se_DetachCustomerManagedPolicyReferenceFromPermissionSetRequest omitted.

// se_DetachManagedPolicyFromPermissionSetRequest omitted.

// se_GetInlinePolicyForPermissionSetRequest omitted.

// se_GetPermissionsBoundaryForPermissionSetRequest omitted.

// se_InstanceAccessControlAttributeConfiguration omitted.

// se_ListAccountAssignmentCreationStatusRequest omitted.

// se_ListAccountAssignmentDeletionStatusRequest omitted.

// se_ListAccountAssignmentsRequest omitted.

// se_ListAccountsForProvisionedPermissionSetRequest omitted.

// se_ListCustomerManagedPolicyReferencesInPermissionSetRequest omitted.

// se_ListInstancesRequest omitted.

// se_ListManagedPoliciesInPermissionSetRequest omitted.

// se_ListPermissionSetProvisioningStatusRequest omitted.

// se_ListPermissionSetsProvisionedToAccountRequest omitted.

// se_ListPermissionSetsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_OperationStatusFilter omitted.

// se_PermissionsBoundary omitted.

// se_ProvisionPermissionSetRequest omitted.

// se_PutInlinePolicyToPermissionSetRequest omitted.

// se_PutPermissionsBoundaryToPermissionSetRequest omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateInstanceAccessControlAttributeConfigurationRequest omitted.

// se_UpdatePermissionSetRequest omitted.

// de_AccessControlAttribute omitted.

// de_AccessControlAttributeList omitted.

// de_AccessControlAttributeValue omitted.

// de_AccessControlAttributeValueSourceList omitted.

// de_AccessDeniedException omitted.

// de_AccountAssignment omitted.

// de_AccountAssignmentList omitted.

/**
 * deserializeAws_json1_1AccountAssignmentOperationStatus
 */
const de_AccountAssignmentOperationStatus = (
  output: any,
  context: __SerdeContext
): AccountAssignmentOperationStatus => {
  return take(output, {
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    PermissionSetArn: __expectString,
    PrincipalId: __expectString,
    PrincipalType: __expectString,
    RequestId: __expectString,
    Status: __expectString,
    TargetId: __expectString,
    TargetType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AccountAssignmentOperationStatusList
 */
const de_AccountAssignmentOperationStatusList = (
  output: any,
  context: __SerdeContext
): AccountAssignmentOperationStatusMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccountAssignmentOperationStatusMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AccountAssignmentOperationStatusMetadata
 */
const de_AccountAssignmentOperationStatusMetadata = (
  output: any,
  context: __SerdeContext
): AccountAssignmentOperationStatusMetadata => {
  return take(output, {
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RequestId: __expectString,
    Status: __expectString,
  }) as any;
};

// de_AccountList omitted.

// de_AttachCustomerManagedPolicyReferenceToPermissionSetResponse omitted.

// de_AttachedManagedPolicy omitted.

// de_AttachedManagedPolicyList omitted.

// de_AttachManagedPolicyToPermissionSetResponse omitted.

// de_ConflictException omitted.

/**
 * deserializeAws_json1_1CreateAccountAssignmentResponse
 */
const de_CreateAccountAssignmentResponse = (output: any, context: __SerdeContext): CreateAccountAssignmentResponse => {
  return take(output, {
    AccountAssignmentCreationStatus: (_: any) => de_AccountAssignmentOperationStatus(_, context),
  }) as any;
};

// de_CreateInstanceAccessControlAttributeConfigurationResponse omitted.

/**
 * deserializeAws_json1_1CreatePermissionSetResponse
 */
const de_CreatePermissionSetResponse = (output: any, context: __SerdeContext): CreatePermissionSetResponse => {
  return take(output, {
    PermissionSet: (_: any) => de_PermissionSet(_, context),
  }) as any;
};

// de_CustomerManagedPolicyReference omitted.

// de_CustomerManagedPolicyReferenceList omitted.

/**
 * deserializeAws_json1_1DeleteAccountAssignmentResponse
 */
const de_DeleteAccountAssignmentResponse = (output: any, context: __SerdeContext): DeleteAccountAssignmentResponse => {
  return take(output, {
    AccountAssignmentDeletionStatus: (_: any) => de_AccountAssignmentOperationStatus(_, context),
  }) as any;
};

// de_DeleteInlinePolicyFromPermissionSetResponse omitted.

// de_DeleteInstanceAccessControlAttributeConfigurationResponse omitted.

// de_DeletePermissionsBoundaryFromPermissionSetResponse omitted.

// de_DeletePermissionSetResponse omitted.

/**
 * deserializeAws_json1_1DescribeAccountAssignmentCreationStatusResponse
 */
const de_DescribeAccountAssignmentCreationStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccountAssignmentCreationStatusResponse => {
  return take(output, {
    AccountAssignmentCreationStatus: (_: any) => de_AccountAssignmentOperationStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAccountAssignmentDeletionStatusResponse
 */
const de_DescribeAccountAssignmentDeletionStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccountAssignmentDeletionStatusResponse => {
  return take(output, {
    AccountAssignmentDeletionStatus: (_: any) => de_AccountAssignmentOperationStatus(_, context),
  }) as any;
};

// de_DescribeInstanceAccessControlAttributeConfigurationResponse omitted.

/**
 * deserializeAws_json1_1DescribePermissionSetProvisioningStatusResponse
 */
const de_DescribePermissionSetProvisioningStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribePermissionSetProvisioningStatusResponse => {
  return take(output, {
    PermissionSetProvisioningStatus: (_: any) => de_PermissionSetProvisioningStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribePermissionSetResponse
 */
const de_DescribePermissionSetResponse = (output: any, context: __SerdeContext): DescribePermissionSetResponse => {
  return take(output, {
    PermissionSet: (_: any) => de_PermissionSet(_, context),
  }) as any;
};

// de_DetachCustomerManagedPolicyReferenceFromPermissionSetResponse omitted.

// de_DetachManagedPolicyFromPermissionSetResponse omitted.

// de_GetInlinePolicyForPermissionSetResponse omitted.

// de_GetPermissionsBoundaryForPermissionSetResponse omitted.

// de_InstanceAccessControlAttributeConfiguration omitted.

// de_InstanceList omitted.

// de_InstanceMetadata omitted.

// de_InternalServerException omitted.

/**
 * deserializeAws_json1_1ListAccountAssignmentCreationStatusResponse
 */
const de_ListAccountAssignmentCreationStatusResponse = (
  output: any,
  context: __SerdeContext
): ListAccountAssignmentCreationStatusResponse => {
  return take(output, {
    AccountAssignmentsCreationStatus: (_: any) => de_AccountAssignmentOperationStatusList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAccountAssignmentDeletionStatusResponse
 */
const de_ListAccountAssignmentDeletionStatusResponse = (
  output: any,
  context: __SerdeContext
): ListAccountAssignmentDeletionStatusResponse => {
  return take(output, {
    AccountAssignmentsDeletionStatus: (_: any) => de_AccountAssignmentOperationStatusList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListAccountAssignmentsResponse omitted.

// de_ListAccountsForProvisionedPermissionSetResponse omitted.

// de_ListCustomerManagedPolicyReferencesInPermissionSetResponse omitted.

// de_ListInstancesResponse omitted.

// de_ListManagedPoliciesInPermissionSetResponse omitted.

/**
 * deserializeAws_json1_1ListPermissionSetProvisioningStatusResponse
 */
const de_ListPermissionSetProvisioningStatusResponse = (
  output: any,
  context: __SerdeContext
): ListPermissionSetProvisioningStatusResponse => {
  return take(output, {
    NextToken: __expectString,
    PermissionSetsProvisioningStatus: (_: any) => de_PermissionSetProvisioningStatusList(_, context),
  }) as any;
};

// de_ListPermissionSetsProvisionedToAccountResponse omitted.

// de_ListPermissionSetsResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_PermissionsBoundary omitted.

/**
 * deserializeAws_json1_1PermissionSet
 */
const de_PermissionSet = (output: any, context: __SerdeContext): PermissionSet => {
  return take(output, {
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Name: __expectString,
    PermissionSetArn: __expectString,
    RelayState: __expectString,
    SessionDuration: __expectString,
  }) as any;
};

// de_PermissionSetList omitted.

/**
 * deserializeAws_json1_1PermissionSetProvisioningStatus
 */
const de_PermissionSetProvisioningStatus = (output: any, context: __SerdeContext): PermissionSetProvisioningStatus => {
  return take(output, {
    AccountId: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    PermissionSetArn: __expectString,
    RequestId: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PermissionSetProvisioningStatusList
 */
const de_PermissionSetProvisioningStatusList = (
  output: any,
  context: __SerdeContext
): PermissionSetProvisioningStatusMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PermissionSetProvisioningStatusMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PermissionSetProvisioningStatusMetadata
 */
const de_PermissionSetProvisioningStatusMetadata = (
  output: any,
  context: __SerdeContext
): PermissionSetProvisioningStatusMetadata => {
  return take(output, {
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RequestId: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProvisionPermissionSetResponse
 */
const de_ProvisionPermissionSetResponse = (output: any, context: __SerdeContext): ProvisionPermissionSetResponse => {
  return take(output, {
    PermissionSetProvisioningStatus: (_: any) => de_PermissionSetProvisioningStatus(_, context),
  }) as any;
};

// de_PutInlinePolicyToPermissionSetResponse omitted.

// de_PutPermissionsBoundaryToPermissionSetResponse omitted.

// de_ResourceNotFoundException omitted.

// de_ServiceQuotaExceededException omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_ThrottlingException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateInstanceAccessControlAttributeConfigurationResponse omitted.

// de_UpdatePermissionSetResponse omitted.

// de_ValidationException omitted.

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
    "x-amz-target": `SWBExternalService.${operation}`,
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
