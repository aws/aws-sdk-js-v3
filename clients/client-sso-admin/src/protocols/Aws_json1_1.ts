// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
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
  AccountAssignment,
  AccountAssignmentOperationStatus,
  AccountAssignmentOperationStatusMetadata,
  AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  AttachCustomerManagedPolicyReferenceToPermissionSetResponse,
  AttachedManagedPolicy,
  AttachManagedPolicyToPermissionSetRequest,
  AttachManagedPolicyToPermissionSetResponse,
  ConflictException,
  CreateAccountAssignmentRequest,
  CreateAccountAssignmentResponse,
  CreateInstanceAccessControlAttributeConfigurationRequest,
  CreateInstanceAccessControlAttributeConfigurationResponse,
  CreatePermissionSetRequest,
  CreatePermissionSetResponse,
  CustomerManagedPolicyReference,
  DeleteAccountAssignmentRequest,
  DeleteAccountAssignmentResponse,
  DeleteInlinePolicyFromPermissionSetRequest,
  DeleteInlinePolicyFromPermissionSetResponse,
  DeleteInstanceAccessControlAttributeConfigurationRequest,
  DeleteInstanceAccessControlAttributeConfigurationResponse,
  DeletePermissionsBoundaryFromPermissionSetRequest,
  DeletePermissionsBoundaryFromPermissionSetResponse,
  DeletePermissionSetRequest,
  DeletePermissionSetResponse,
  DescribeAccountAssignmentCreationStatusRequest,
  DescribeAccountAssignmentCreationStatusResponse,
  DescribeAccountAssignmentDeletionStatusRequest,
  DescribeAccountAssignmentDeletionStatusResponse,
  DescribeInstanceAccessControlAttributeConfigurationRequest,
  DescribeInstanceAccessControlAttributeConfigurationResponse,
  DescribePermissionSetProvisioningStatusRequest,
  DescribePermissionSetProvisioningStatusResponse,
  DescribePermissionSetRequest,
  DescribePermissionSetResponse,
  DetachCustomerManagedPolicyReferenceFromPermissionSetRequest,
  DetachCustomerManagedPolicyReferenceFromPermissionSetResponse,
  DetachManagedPolicyFromPermissionSetRequest,
  DetachManagedPolicyFromPermissionSetResponse,
  GetInlinePolicyForPermissionSetRequest,
  GetInlinePolicyForPermissionSetResponse,
  GetPermissionsBoundaryForPermissionSetRequest,
  GetPermissionsBoundaryForPermissionSetResponse,
  InstanceAccessControlAttributeConfiguration,
  InstanceMetadata,
  InternalServerException,
  ListAccountAssignmentCreationStatusRequest,
  ListAccountAssignmentCreationStatusResponse,
  ListAccountAssignmentDeletionStatusRequest,
  ListAccountAssignmentDeletionStatusResponse,
  ListAccountAssignmentsRequest,
  ListAccountAssignmentsResponse,
  ListAccountsForProvisionedPermissionSetRequest,
  ListAccountsForProvisionedPermissionSetResponse,
  ListCustomerManagedPolicyReferencesInPermissionSetRequest,
  ListCustomerManagedPolicyReferencesInPermissionSetResponse,
  ListInstancesRequest,
  ListInstancesResponse,
  ListManagedPoliciesInPermissionSetRequest,
  ListManagedPoliciesInPermissionSetResponse,
  ListPermissionSetProvisioningStatusRequest,
  ListPermissionSetProvisioningStatusResponse,
  ListPermissionSetsProvisionedToAccountRequest,
  ListPermissionSetsProvisionedToAccountResponse,
  ListPermissionSetsRequest,
  ListPermissionSetsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  OperationStatusFilter,
  PermissionsBoundary,
  PermissionSet,
  PermissionSetProvisioningStatus,
  PermissionSetProvisioningStatusMetadata,
  ProvisionPermissionSetRequest,
  ProvisionPermissionSetResponse,
  PutInlinePolicyToPermissionSetRequest,
  PutInlinePolicyToPermissionSetResponse,
  PutPermissionsBoundaryToPermissionSetRequest,
  PutPermissionsBoundaryToPermissionSetResponse,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  ThrottlingException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateInstanceAccessControlAttributeConfigurationRequest,
  UpdateInstanceAccessControlAttributeConfigurationResponse,
  UpdatePermissionSetRequest,
  UpdatePermissionSetResponse,
  ValidationException,
} from "../models/models_0";
import { SSOAdminServiceException as __BaseException } from "../models/SSOAdminServiceException";

export const serializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetCommand = async (
  input: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.AttachCustomerManagedPolicyReferenceToPermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AttachManagedPolicyToPermissionSetCommand = async (
  input: AttachManagedPolicyToPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.AttachManagedPolicyToPermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AttachManagedPolicyToPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAccountAssignmentCommand = async (
  input: CreateAccountAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.CreateAccountAssignment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAccountAssignmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand = async (
  input: CreateInstanceAccessControlAttributeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.CreateInstanceAccessControlAttributeConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePermissionSetCommand = async (
  input: CreatePermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.CreatePermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAccountAssignmentCommand = async (
  input: DeleteAccountAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DeleteAccountAssignment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAccountAssignmentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommand = async (
  input: DeleteInlinePolicyFromPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DeleteInlinePolicyFromPermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteInlinePolicyFromPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand = async (
  input: DeleteInstanceAccessControlAttributeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommand = async (
  input: DeletePermissionsBoundaryFromPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DeletePermissionsBoundaryFromPermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePermissionSetCommand = async (
  input: DeletePermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DeletePermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand = async (
  input: DescribeAccountAssignmentCreationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DescribeAccountAssignmentCreationStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAccountAssignmentCreationStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommand = async (
  input: DescribeAccountAssignmentDeletionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DescribeAccountAssignmentDeletionStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAccountAssignmentDeletionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommand = async (
  input: DescribeInstanceAccessControlAttributeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DescribeInstanceAccessControlAttributeConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePermissionSetCommand = async (
  input: DescribePermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DescribePermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePermissionSetProvisioningStatusCommand = async (
  input: DescribePermissionSetProvisioningStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DescribePermissionSetProvisioningStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePermissionSetProvisioningStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommand = async (
  input: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DetachCustomerManagedPolicyReferenceFromPermissionSet",
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand = async (
  input: DetachManagedPolicyFromPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.DetachManagedPolicyFromPermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DetachManagedPolicyFromPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInlinePolicyForPermissionSetCommand = async (
  input: GetInlinePolicyForPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.GetInlinePolicyForPermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInlinePolicyForPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommand = async (
  input: GetPermissionsBoundaryForPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.GetPermissionsBoundaryForPermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPermissionsBoundaryForPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAccountAssignmentCreationStatusCommand = async (
  input: ListAccountAssignmentCreationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListAccountAssignmentCreationStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAccountAssignmentCreationStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAccountAssignmentDeletionStatusCommand = async (
  input: ListAccountAssignmentDeletionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListAccountAssignmentDeletionStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAccountAssignmentDeletionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAccountAssignmentsCommand = async (
  input: ListAccountAssignmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListAccountAssignments",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAccountAssignmentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAccountsForProvisionedPermissionSetCommand = async (
  input: ListAccountsForProvisionedPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListAccountsForProvisionedPermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAccountsForProvisionedPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommand = async (
  input: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListCustomerManagedPolicyReferencesInPermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListInstancesCommand = async (
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListManagedPoliciesInPermissionSetCommand = async (
  input: ListManagedPoliciesInPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListManagedPoliciesInPermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListManagedPoliciesInPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPermissionSetProvisioningStatusCommand = async (
  input: ListPermissionSetProvisioningStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListPermissionSetProvisioningStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPermissionSetProvisioningStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPermissionSetsCommand = async (
  input: ListPermissionSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListPermissionSets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPermissionSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand = async (
  input: ListPermissionSetsProvisionedToAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListPermissionSetsProvisionedToAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPermissionSetsProvisionedToAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ProvisionPermissionSetCommand = async (
  input: ProvisionPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.ProvisionPermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ProvisionPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutInlinePolicyToPermissionSetCommand = async (
  input: PutInlinePolicyToPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.PutInlinePolicyToPermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutInlinePolicyToPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommand = async (
  input: PutPermissionsBoundaryToPermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.PutPermissionsBoundaryToPermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutPermissionsBoundaryToPermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.TagResource",
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
    "x-amz-target": "SWBExternalService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand = async (
  input: UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePermissionSetCommand = async (
  input: UpdatePermissionSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "SWBExternalService.UpdatePermissionSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePermissionSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetResponse(data, context);
  const response: AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AttachManagedPolicyToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachManagedPolicyToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AttachManagedPolicyToPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AttachManagedPolicyToPermissionSetResponse(data, context);
  const response: AttachManagedPolicyToPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AttachManagedPolicyToPermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateAccountAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAccountAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAccountAssignmentResponse(data, context);
  const response: CreateAccountAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAccountAssignmentCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationResponse(data, context);
  const response: CreateInstanceAccessControlAttributeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreatePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePermissionSetResponse(data, context);
  const response: CreatePermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAccountAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAccountAssignmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAccountAssignmentResponse(data, context);
  const response: DeleteAccountAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAccountAssignmentCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInlinePolicyFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteInlinePolicyFromPermissionSetResponse(data, context);
  const response: DeleteInlinePolicyFromPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationResponse(data, context);
  const response: DeleteInstanceAccessControlAttributeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionsBoundaryFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetResponse(data, context);
  const response: DeletePermissionsBoundaryFromPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeletePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeletePermissionSetResponse(data, context);
  const response: DeletePermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAssignmentCreationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAccountAssignmentCreationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccountAssignmentCreationStatusResponse(data, context);
  const response: DescribeAccountAssignmentCreationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAccountAssignmentCreationStatusCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAssignmentDeletionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAccountAssignmentDeletionStatusResponse(data, context);
  const response: DescribeAccountAssignmentDeletionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationResponse(data, context);
  const response: DescribeInstanceAccessControlAttributeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePermissionSetResponse(data, context);
  const response: DescribePermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePermissionSetProvisioningStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionSetProvisioningStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePermissionSetProvisioningStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePermissionSetProvisioningStatusResponse(data, context);
  const response: DescribePermissionSetProvisioningStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePermissionSetProvisioningStatusCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetResponse(data, context);
  const response: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachManagedPolicyFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DetachManagedPolicyFromPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DetachManagedPolicyFromPermissionSetResponse(data, context);
  const response: DetachManagedPolicyFromPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DetachManagedPolicyFromPermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetInlinePolicyForPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInlinePolicyForPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInlinePolicyForPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInlinePolicyForPermissionSetResponse(data, context);
  const response: GetInlinePolicyForPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInlinePolicyForPermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionsBoundaryForPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPermissionsBoundaryForPermissionSetResponse(data, context);
  const response: GetPermissionsBoundaryForPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAccountAssignmentCreationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentCreationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAccountAssignmentCreationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAccountAssignmentCreationStatusResponse(data, context);
  const response: ListAccountAssignmentCreationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAccountAssignmentCreationStatusCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAccountAssignmentDeletionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentDeletionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAccountAssignmentDeletionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAccountAssignmentDeletionStatusResponse(data, context);
  const response: ListAccountAssignmentDeletionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAccountAssignmentDeletionStatusCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAccountAssignmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAccountAssignmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAccountAssignmentsResponse(data, context);
  const response: ListAccountAssignmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAccountAssignmentsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAccountsForProvisionedPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsForProvisionedPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAccountsForProvisionedPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAccountsForProvisionedPermissionSetResponse(data, context);
  const response: ListAccountsForProvisionedPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAccountsForProvisionedPermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetResponse(data, context);
  const response: ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListInstancesResponse(data, context);
  const response: ListInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListInstancesCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListManagedPoliciesInPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedPoliciesInPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListManagedPoliciesInPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListManagedPoliciesInPermissionSetResponse(data, context);
  const response: ListManagedPoliciesInPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListManagedPoliciesInPermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPermissionSetProvisioningStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetProvisioningStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPermissionSetProvisioningStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPermissionSetProvisioningStatusResponse(data, context);
  const response: ListPermissionSetProvisioningStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPermissionSetProvisioningStatusCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPermissionSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPermissionSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPermissionSetsResponse(data, context);
  const response: ListPermissionSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPermissionSetsCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetsProvisionedToAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPermissionSetsProvisionedToAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPermissionSetsProvisionedToAccountResponse(data, context);
  const response: ListPermissionSetsProvisionedToAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPermissionSetsProvisionedToAccountCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ProvisionPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ProvisionPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ProvisionPermissionSetResponse(data, context);
  const response: ProvisionPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ProvisionPermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutInlinePolicyToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInlinePolicyToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutInlinePolicyToPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutInlinePolicyToPermissionSetResponse(data, context);
  const response: PutInlinePolicyToPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutInlinePolicyToPermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionsBoundaryToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutPermissionsBoundaryToPermissionSetResponse(data, context);
  const response: PutPermissionsBoundaryToPermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.ssoadmin#ServiceQuotaExceededException":
      throw await deserializeAws_json1_1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
    case "AccessDeniedException":
    case "com.amazonaws.ssoadmin#AccessDeniedException":
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationResponse(data, context);
  const response: UpdateInstanceAccessControlAttributeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdatePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePermissionSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePermissionSetResponse(data, context);
  const response: UpdatePermissionSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePermissionSetCommandError = async (
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
      throw await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.ssoadmin#ConflictException":
      throw await deserializeAws_json1_1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.ssoadmin#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ssoadmin#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ssoadmin#ThrottlingException":
      throw await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.ssoadmin#ValidationException":
      throw await deserializeAws_json1_1ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const exception = new InternalServerException({
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

const deserializeAws_json1_1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
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

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AccessControlAttribute = (input: AccessControlAttribute, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: serializeAws_json1_1AccessControlAttributeValue(input.Value, context) }),
  };
};

const serializeAws_json1_1AccessControlAttributeList = (
  input: AccessControlAttribute[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AccessControlAttribute(entry, context);
    });
};

const serializeAws_json1_1AccessControlAttributeValue = (
  input: AccessControlAttributeValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.Source != null && {
      Source: serializeAws_json1_1AccessControlAttributeValueSourceList(input.Source, context),
    }),
  };
};

const serializeAws_json1_1AccessControlAttributeValueSourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetRequest = (
  input: AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomerManagedPolicyReference != null && {
      CustomerManagedPolicyReference: serializeAws_json1_1CustomerManagedPolicyReference(
        input.CustomerManagedPolicyReference,
        context
      ),
    }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

const serializeAws_json1_1AttachManagedPolicyToPermissionSetRequest = (
  input: AttachManagedPolicyToPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.ManagedPolicyArn != null && { ManagedPolicyArn: input.ManagedPolicyArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

const serializeAws_json1_1CreateAccountAssignmentRequest = (
  input: CreateAccountAssignmentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
    ...(input.PrincipalId != null && { PrincipalId: input.PrincipalId }),
    ...(input.PrincipalType != null && { PrincipalType: input.PrincipalType }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
    ...(input.TargetType != null && { TargetType: input.TargetType }),
  };
};

const serializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationRequest = (
  input: CreateInstanceAccessControlAttributeConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceAccessControlAttributeConfiguration != null && {
      InstanceAccessControlAttributeConfiguration: serializeAws_json1_1InstanceAccessControlAttributeConfiguration(
        input.InstanceAccessControlAttributeConfiguration,
        context
      ),
    }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
  };
};

const serializeAws_json1_1CreatePermissionSetRequest = (
  input: CreatePermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RelayState != null && { RelayState: input.RelayState }),
    ...(input.SessionDuration != null && { SessionDuration: input.SessionDuration }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CustomerManagedPolicyReference = (
  input: CustomerManagedPolicyReference,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Path != null && { Path: input.Path }),
  };
};

const serializeAws_json1_1DeleteAccountAssignmentRequest = (
  input: DeleteAccountAssignmentRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
    ...(input.PrincipalId != null && { PrincipalId: input.PrincipalId }),
    ...(input.PrincipalType != null && { PrincipalType: input.PrincipalType }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
    ...(input.TargetType != null && { TargetType: input.TargetType }),
  };
};

const serializeAws_json1_1DeleteInlinePolicyFromPermissionSetRequest = (
  input: DeleteInlinePolicyFromPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

const serializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationRequest = (
  input: DeleteInstanceAccessControlAttributeConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
  };
};

const serializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetRequest = (
  input: DeletePermissionsBoundaryFromPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

const serializeAws_json1_1DeletePermissionSetRequest = (
  input: DeletePermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

const serializeAws_json1_1DescribeAccountAssignmentCreationStatusRequest = (
  input: DescribeAccountAssignmentCreationStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountAssignmentCreationRequestId != null && {
      AccountAssignmentCreationRequestId: input.AccountAssignmentCreationRequestId,
    }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
  };
};

const serializeAws_json1_1DescribeAccountAssignmentDeletionStatusRequest = (
  input: DescribeAccountAssignmentDeletionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountAssignmentDeletionRequestId != null && {
      AccountAssignmentDeletionRequestId: input.AccountAssignmentDeletionRequestId,
    }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
  };
};

const serializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationRequest = (
  input: DescribeInstanceAccessControlAttributeConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
  };
};

const serializeAws_json1_1DescribePermissionSetProvisioningStatusRequest = (
  input: DescribePermissionSetProvisioningStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.ProvisionPermissionSetRequestId != null && {
      ProvisionPermissionSetRequestId: input.ProvisionPermissionSetRequestId,
    }),
  };
};

const serializeAws_json1_1DescribePermissionSetRequest = (
  input: DescribePermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

const serializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetRequest = (
  input: DetachCustomerManagedPolicyReferenceFromPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomerManagedPolicyReference != null && {
      CustomerManagedPolicyReference: serializeAws_json1_1CustomerManagedPolicyReference(
        input.CustomerManagedPolicyReference,
        context
      ),
    }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

const serializeAws_json1_1DetachManagedPolicyFromPermissionSetRequest = (
  input: DetachManagedPolicyFromPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.ManagedPolicyArn != null && { ManagedPolicyArn: input.ManagedPolicyArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

const serializeAws_json1_1GetInlinePolicyForPermissionSetRequest = (
  input: GetInlinePolicyForPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

const serializeAws_json1_1GetPermissionsBoundaryForPermissionSetRequest = (
  input: GetPermissionsBoundaryForPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

const serializeAws_json1_1InstanceAccessControlAttributeConfiguration = (
  input: InstanceAccessControlAttributeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessControlAttributes != null && {
      AccessControlAttributes: serializeAws_json1_1AccessControlAttributeList(input.AccessControlAttributes, context),
    }),
  };
};

const serializeAws_json1_1ListAccountAssignmentCreationStatusRequest = (
  input: ListAccountAssignmentCreationStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1OperationStatusFilter(input.Filter, context) }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListAccountAssignmentDeletionStatusRequest = (
  input: ListAccountAssignmentDeletionStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1OperationStatusFilter(input.Filter, context) }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListAccountAssignmentsRequest = (
  input: ListAccountAssignmentsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

const serializeAws_json1_1ListAccountsForProvisionedPermissionSetRequest = (
  input: ListAccountsForProvisionedPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
    ...(input.ProvisioningStatus != null && { ProvisioningStatus: input.ProvisioningStatus }),
  };
};

const serializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetRequest = (
  input: ListCustomerManagedPolicyReferencesInPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

const serializeAws_json1_1ListInstancesRequest = (input: ListInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListManagedPoliciesInPermissionSetRequest = (
  input: ListManagedPoliciesInPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

const serializeAws_json1_1ListPermissionSetProvisioningStatusRequest = (
  input: ListPermissionSetProvisioningStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter != null && { Filter: serializeAws_json1_1OperationStatusFilter(input.Filter, context) }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListPermissionSetsProvisionedToAccountRequest = (
  input: ListPermissionSetsProvisionedToAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ProvisioningStatus != null && { ProvisioningStatus: input.ProvisioningStatus }),
  };
};

const serializeAws_json1_1ListPermissionSetsRequest = (
  input: ListPermissionSetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1OperationStatusFilter = (input: OperationStatusFilter, context: __SerdeContext): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_json1_1PermissionsBoundary = (input: PermissionsBoundary, context: __SerdeContext): any => {
  return {
    ...(input.CustomerManagedPolicyReference != null && {
      CustomerManagedPolicyReference: serializeAws_json1_1CustomerManagedPolicyReference(
        input.CustomerManagedPolicyReference,
        context
      ),
    }),
    ...(input.ManagedPolicyArn != null && { ManagedPolicyArn: input.ManagedPolicyArn }),
  };
};

const serializeAws_json1_1ProvisionPermissionSetRequest = (
  input: ProvisionPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
    ...(input.TargetId != null && { TargetId: input.TargetId }),
    ...(input.TargetType != null && { TargetType: input.TargetType }),
  };
};

const serializeAws_json1_1PutInlinePolicyToPermissionSetRequest = (
  input: PutInlinePolicyToPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InlinePolicy != null && { InlinePolicy: input.InlinePolicy }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
  };
};

const serializeAws_json1_1PutPermissionsBoundaryToPermissionSetRequest = (
  input: PutPermissionsBoundaryToPermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
    ...(input.PermissionsBoundary != null && {
      PermissionsBoundary: serializeAws_json1_1PermissionsBoundary(input.PermissionsBoundary, context),
    }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationRequest = (
  input: UpdateInstanceAccessControlAttributeConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceAccessControlAttributeConfiguration != null && {
      InstanceAccessControlAttributeConfiguration: serializeAws_json1_1InstanceAccessControlAttributeConfiguration(
        input.InstanceAccessControlAttributeConfiguration,
        context
      ),
    }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
  };
};

const serializeAws_json1_1UpdatePermissionSetRequest = (
  input: UpdatePermissionSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.InstanceArn != null && { InstanceArn: input.InstanceArn }),
    ...(input.PermissionSetArn != null && { PermissionSetArn: input.PermissionSetArn }),
    ...(input.RelayState != null && { RelayState: input.RelayState }),
    ...(input.SessionDuration != null && { SessionDuration: input.SessionDuration }),
  };
};

const deserializeAws_json1_1AccessControlAttribute = (output: any, context: __SerdeContext): AccessControlAttribute => {
  return {
    Key: __expectString(output.Key),
    Value: output.Value != null ? deserializeAws_json1_1AccessControlAttributeValue(output.Value, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AccessControlAttributeList = (
  output: any,
  context: __SerdeContext
): AccessControlAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AccessControlAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AccessControlAttributeValue = (
  output: any,
  context: __SerdeContext
): AccessControlAttributeValue => {
  return {
    Source:
      output.Source != null
        ? deserializeAws_json1_1AccessControlAttributeValueSourceList(output.Source, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AccessControlAttributeValueSourceList = (
  output: any,
  context: __SerdeContext
): string[] => {
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

const deserializeAws_json1_1AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AccountAssignment = (output: any, context: __SerdeContext): AccountAssignment => {
  return {
    AccountId: __expectString(output.AccountId),
    PermissionSetArn: __expectString(output.PermissionSetArn),
    PrincipalId: __expectString(output.PrincipalId),
    PrincipalType: __expectString(output.PrincipalType),
  } as any;
};

const deserializeAws_json1_1AccountAssignmentList = (output: any, context: __SerdeContext): AccountAssignment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AccountAssignment(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AccountAssignmentOperationStatus = (
  output: any,
  context: __SerdeContext
): AccountAssignmentOperationStatus => {
  return {
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    PermissionSetArn: __expectString(output.PermissionSetArn),
    PrincipalId: __expectString(output.PrincipalId),
    PrincipalType: __expectString(output.PrincipalType),
    RequestId: __expectString(output.RequestId),
    Status: __expectString(output.Status),
    TargetId: __expectString(output.TargetId),
    TargetType: __expectString(output.TargetType),
  } as any;
};

const deserializeAws_json1_1AccountAssignmentOperationStatusList = (
  output: any,
  context: __SerdeContext
): AccountAssignmentOperationStatusMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AccountAssignmentOperationStatusMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AccountAssignmentOperationStatusMetadata = (
  output: any,
  context: __SerdeContext
): AccountAssignmentOperationStatusMetadata => {
  return {
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    RequestId: __expectString(output.RequestId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1AccountList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1AttachCustomerManagedPolicyReferenceToPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): AttachCustomerManagedPolicyReferenceToPermissionSetResponse => {
  return {} as any;
};

const deserializeAws_json1_1AttachedManagedPolicy = (output: any, context: __SerdeContext): AttachedManagedPolicy => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1AttachedManagedPolicyList = (
  output: any,
  context: __SerdeContext
): AttachedManagedPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AttachedManagedPolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AttachManagedPolicyToPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): AttachManagedPolicyToPermissionSetResponse => {
  return {} as any;
};

const deserializeAws_json1_1ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CreateAccountAssignmentResponse = (
  output: any,
  context: __SerdeContext
): CreateAccountAssignmentResponse => {
  return {
    AccountAssignmentCreationStatus:
      output.AccountAssignmentCreationStatus != null
        ? deserializeAws_json1_1AccountAssignmentOperationStatus(output.AccountAssignmentCreationStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateInstanceAccessControlAttributeConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreatePermissionSetResponse = (
  output: any,
  context: __SerdeContext
): CreatePermissionSetResponse => {
  return {
    PermissionSet:
      output.PermissionSet != null ? deserializeAws_json1_1PermissionSet(output.PermissionSet, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CustomerManagedPolicyReference = (
  output: any,
  context: __SerdeContext
): CustomerManagedPolicyReference => {
  return {
    Name: __expectString(output.Name),
    Path: __expectString(output.Path),
  } as any;
};

const deserializeAws_json1_1CustomerManagedPolicyReferenceList = (
  output: any,
  context: __SerdeContext
): CustomerManagedPolicyReference[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CustomerManagedPolicyReference(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DeleteAccountAssignmentResponse = (
  output: any,
  context: __SerdeContext
): DeleteAccountAssignmentResponse => {
  return {
    AccountAssignmentDeletionStatus:
      output.AccountAssignmentDeletionStatus != null
        ? deserializeAws_json1_1AccountAssignmentOperationStatus(output.AccountAssignmentDeletionStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteInlinePolicyFromPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): DeleteInlinePolicyFromPermissionSetResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteInstanceAccessControlAttributeConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): DeletePermissionsBoundaryFromPermissionSetResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeletePermissionSetResponse = (
  output: any,
  context: __SerdeContext
): DeletePermissionSetResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeAccountAssignmentCreationStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccountAssignmentCreationStatusResponse => {
  return {
    AccountAssignmentCreationStatus:
      output.AccountAssignmentCreationStatus != null
        ? deserializeAws_json1_1AccountAssignmentOperationStatus(output.AccountAssignmentCreationStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeAccountAssignmentDeletionStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribeAccountAssignmentDeletionStatusResponse => {
  return {
    AccountAssignmentDeletionStatus:
      output.AccountAssignmentDeletionStatus != null
        ? deserializeAws_json1_1AccountAssignmentOperationStatus(output.AccountAssignmentDeletionStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeInstanceAccessControlAttributeConfigurationResponse => {
  return {
    InstanceAccessControlAttributeConfiguration:
      output.InstanceAccessControlAttributeConfiguration != null
        ? deserializeAws_json1_1InstanceAccessControlAttributeConfiguration(
            output.InstanceAccessControlAttributeConfiguration,
            context
          )
        : undefined,
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
  } as any;
};

const deserializeAws_json1_1DescribePermissionSetProvisioningStatusResponse = (
  output: any,
  context: __SerdeContext
): DescribePermissionSetProvisioningStatusResponse => {
  return {
    PermissionSetProvisioningStatus:
      output.PermissionSetProvisioningStatus != null
        ? deserializeAws_json1_1PermissionSetProvisioningStatus(output.PermissionSetProvisioningStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePermissionSetResponse = (
  output: any,
  context: __SerdeContext
): DescribePermissionSetResponse => {
  return {
    PermissionSet:
      output.PermissionSet != null ? deserializeAws_json1_1PermissionSet(output.PermissionSet, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): DetachCustomerManagedPolicyReferenceFromPermissionSetResponse => {
  return {} as any;
};

const deserializeAws_json1_1DetachManagedPolicyFromPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): DetachManagedPolicyFromPermissionSetResponse => {
  return {} as any;
};

const deserializeAws_json1_1GetInlinePolicyForPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): GetInlinePolicyForPermissionSetResponse => {
  return {
    InlinePolicy: __expectString(output.InlinePolicy),
  } as any;
};

const deserializeAws_json1_1GetPermissionsBoundaryForPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): GetPermissionsBoundaryForPermissionSetResponse => {
  return {
    PermissionsBoundary:
      output.PermissionsBoundary != null
        ? deserializeAws_json1_1PermissionsBoundary(output.PermissionsBoundary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceAccessControlAttributeConfiguration = (
  output: any,
  context: __SerdeContext
): InstanceAccessControlAttributeConfiguration => {
  return {
    AccessControlAttributes:
      output.AccessControlAttributes != null
        ? deserializeAws_json1_1AccessControlAttributeList(output.AccessControlAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceList = (output: any, context: __SerdeContext): InstanceMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InstanceMetadata = (output: any, context: __SerdeContext): InstanceMetadata => {
  return {
    IdentityStoreId: __expectString(output.IdentityStoreId),
    InstanceArn: __expectString(output.InstanceArn),
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListAccountAssignmentCreationStatusResponse = (
  output: any,
  context: __SerdeContext
): ListAccountAssignmentCreationStatusResponse => {
  return {
    AccountAssignmentsCreationStatus:
      output.AccountAssignmentsCreationStatus != null
        ? deserializeAws_json1_1AccountAssignmentOperationStatusList(output.AccountAssignmentsCreationStatus, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListAccountAssignmentDeletionStatusResponse = (
  output: any,
  context: __SerdeContext
): ListAccountAssignmentDeletionStatusResponse => {
  return {
    AccountAssignmentsDeletionStatus:
      output.AccountAssignmentsDeletionStatus != null
        ? deserializeAws_json1_1AccountAssignmentOperationStatusList(output.AccountAssignmentsDeletionStatus, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListAccountAssignmentsResponse = (
  output: any,
  context: __SerdeContext
): ListAccountAssignmentsResponse => {
  return {
    AccountAssignments:
      output.AccountAssignments != null
        ? deserializeAws_json1_1AccountAssignmentList(output.AccountAssignments, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListAccountsForProvisionedPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): ListAccountsForProvisionedPermissionSetResponse => {
  return {
    AccountIds: output.AccountIds != null ? deserializeAws_json1_1AccountList(output.AccountIds, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): ListCustomerManagedPolicyReferencesInPermissionSetResponse => {
  return {
    CustomerManagedPolicyReferences:
      output.CustomerManagedPolicyReferences != null
        ? deserializeAws_json1_1CustomerManagedPolicyReferenceList(output.CustomerManagedPolicyReferences, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListInstancesResponse = (output: any, context: __SerdeContext): ListInstancesResponse => {
  return {
    Instances: output.Instances != null ? deserializeAws_json1_1InstanceList(output.Instances, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListManagedPoliciesInPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): ListManagedPoliciesInPermissionSetResponse => {
  return {
    AttachedManagedPolicies:
      output.AttachedManagedPolicies != null
        ? deserializeAws_json1_1AttachedManagedPolicyList(output.AttachedManagedPolicies, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListPermissionSetProvisioningStatusResponse = (
  output: any,
  context: __SerdeContext
): ListPermissionSetProvisioningStatusResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PermissionSetsProvisioningStatus:
      output.PermissionSetsProvisioningStatus != null
        ? deserializeAws_json1_1PermissionSetProvisioningStatusList(output.PermissionSetsProvisioningStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListPermissionSetsProvisionedToAccountResponse = (
  output: any,
  context: __SerdeContext
): ListPermissionSetsProvisionedToAccountResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PermissionSets:
      output.PermissionSets != null
        ? deserializeAws_json1_1PermissionSetList(output.PermissionSets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListPermissionSetsResponse = (
  output: any,
  context: __SerdeContext
): ListPermissionSetsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PermissionSets:
      output.PermissionSets != null
        ? deserializeAws_json1_1PermissionSetList(output.PermissionSets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PermissionsBoundary = (output: any, context: __SerdeContext): PermissionsBoundary => {
  return {
    CustomerManagedPolicyReference:
      output.CustomerManagedPolicyReference != null
        ? deserializeAws_json1_1CustomerManagedPolicyReference(output.CustomerManagedPolicyReference, context)
        : undefined,
    ManagedPolicyArn: __expectString(output.ManagedPolicyArn),
  } as any;
};

const deserializeAws_json1_1PermissionSet = (output: any, context: __SerdeContext): PermissionSet => {
  return {
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    PermissionSetArn: __expectString(output.PermissionSetArn),
    RelayState: __expectString(output.RelayState),
    SessionDuration: __expectString(output.SessionDuration),
  } as any;
};

const deserializeAws_json1_1PermissionSetList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1PermissionSetProvisioningStatus = (
  output: any,
  context: __SerdeContext
): PermissionSetProvisioningStatus => {
  return {
    AccountId: __expectString(output.AccountId),
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    PermissionSetArn: __expectString(output.PermissionSetArn),
    RequestId: __expectString(output.RequestId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1PermissionSetProvisioningStatusList = (
  output: any,
  context: __SerdeContext
): PermissionSetProvisioningStatusMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PermissionSetProvisioningStatusMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PermissionSetProvisioningStatusMetadata = (
  output: any,
  context: __SerdeContext
): PermissionSetProvisioningStatusMetadata => {
  return {
    CreatedDate:
      output.CreatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedDate)))
        : undefined,
    RequestId: __expectString(output.RequestId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ProvisionPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): ProvisionPermissionSetResponse => {
  return {
    PermissionSetProvisioningStatus:
      output.PermissionSetProvisioningStatus != null
        ? deserializeAws_json1_1PermissionSetProvisioningStatus(output.PermissionSetProvisioningStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutInlinePolicyToPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): PutInlinePolicyToPermissionSetResponse => {
  return {} as any;
};

const deserializeAws_json1_1PutPermissionsBoundaryToPermissionSetResponse = (
  output: any,
  context: __SerdeContext
): PutPermissionsBoundaryToPermissionSetResponse => {
  return {} as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
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

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
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

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateInstanceAccessControlAttributeConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdatePermissionSetResponse = (
  output: any,
  context: __SerdeContext
): UpdatePermissionSetResponse => {
  return {} as any;
};

const deserializeAws_json1_1ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    Message: __expectString(output.Message),
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
