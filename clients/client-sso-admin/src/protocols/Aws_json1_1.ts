// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
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
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

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
  CreateApplicationAssignmentCommandInput,
  CreateApplicationAssignmentCommandOutput,
} from "../commands/CreateApplicationAssignmentCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import {
  CreateInstanceAccessControlAttributeConfigurationCommandInput,
  CreateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "../commands/CreateInstanceAccessControlAttributeConfigurationCommand";
import { CreateInstanceCommandInput, CreateInstanceCommandOutput } from "../commands/CreateInstanceCommand";
import {
  CreatePermissionSetCommandInput,
  CreatePermissionSetCommandOutput,
} from "../commands/CreatePermissionSetCommand";
import {
  CreateTrustedTokenIssuerCommandInput,
  CreateTrustedTokenIssuerCommandOutput,
} from "../commands/CreateTrustedTokenIssuerCommand";
import {
  DeleteAccountAssignmentCommandInput,
  DeleteAccountAssignmentCommandOutput,
} from "../commands/DeleteAccountAssignmentCommand";
import {
  DeleteApplicationAccessScopeCommandInput,
  DeleteApplicationAccessScopeCommandOutput,
} from "../commands/DeleteApplicationAccessScopeCommand";
import {
  DeleteApplicationAssignmentCommandInput,
  DeleteApplicationAssignmentCommandOutput,
} from "../commands/DeleteApplicationAssignmentCommand";
import {
  DeleteApplicationAuthenticationMethodCommandInput,
  DeleteApplicationAuthenticationMethodCommandOutput,
} from "../commands/DeleteApplicationAuthenticationMethodCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import {
  DeleteApplicationGrantCommandInput,
  DeleteApplicationGrantCommandOutput,
} from "../commands/DeleteApplicationGrantCommand";
import {
  DeleteInlinePolicyFromPermissionSetCommandInput,
  DeleteInlinePolicyFromPermissionSetCommandOutput,
} from "../commands/DeleteInlinePolicyFromPermissionSetCommand";
import {
  DeleteInstanceAccessControlAttributeConfigurationCommandInput,
  DeleteInstanceAccessControlAttributeConfigurationCommandOutput,
} from "../commands/DeleteInstanceAccessControlAttributeConfigurationCommand";
import { DeleteInstanceCommandInput, DeleteInstanceCommandOutput } from "../commands/DeleteInstanceCommand";
import {
  DeletePermissionsBoundaryFromPermissionSetCommandInput,
  DeletePermissionsBoundaryFromPermissionSetCommandOutput,
} from "../commands/DeletePermissionsBoundaryFromPermissionSetCommand";
import {
  DeletePermissionSetCommandInput,
  DeletePermissionSetCommandOutput,
} from "../commands/DeletePermissionSetCommand";
import {
  DeleteTrustedTokenIssuerCommandInput,
  DeleteTrustedTokenIssuerCommandOutput,
} from "../commands/DeleteTrustedTokenIssuerCommand";
import {
  DescribeAccountAssignmentCreationStatusCommandInput,
  DescribeAccountAssignmentCreationStatusCommandOutput,
} from "../commands/DescribeAccountAssignmentCreationStatusCommand";
import {
  DescribeAccountAssignmentDeletionStatusCommandInput,
  DescribeAccountAssignmentDeletionStatusCommandOutput,
} from "../commands/DescribeAccountAssignmentDeletionStatusCommand";
import {
  DescribeApplicationAssignmentCommandInput,
  DescribeApplicationAssignmentCommandOutput,
} from "../commands/DescribeApplicationAssignmentCommand";
import {
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
} from "../commands/DescribeApplicationCommand";
import {
  DescribeApplicationProviderCommandInput,
  DescribeApplicationProviderCommandOutput,
} from "../commands/DescribeApplicationProviderCommand";
import {
  DescribeInstanceAccessControlAttributeConfigurationCommandInput,
  DescribeInstanceAccessControlAttributeConfigurationCommandOutput,
} from "../commands/DescribeInstanceAccessControlAttributeConfigurationCommand";
import { DescribeInstanceCommandInput, DescribeInstanceCommandOutput } from "../commands/DescribeInstanceCommand";
import {
  DescribePermissionSetCommandInput,
  DescribePermissionSetCommandOutput,
} from "../commands/DescribePermissionSetCommand";
import {
  DescribePermissionSetProvisioningStatusCommandInput,
  DescribePermissionSetProvisioningStatusCommandOutput,
} from "../commands/DescribePermissionSetProvisioningStatusCommand";
import {
  DescribeTrustedTokenIssuerCommandInput,
  DescribeTrustedTokenIssuerCommandOutput,
} from "../commands/DescribeTrustedTokenIssuerCommand";
import {
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput,
} from "../commands/DetachCustomerManagedPolicyReferenceFromPermissionSetCommand";
import {
  DetachManagedPolicyFromPermissionSetCommandInput,
  DetachManagedPolicyFromPermissionSetCommandOutput,
} from "../commands/DetachManagedPolicyFromPermissionSetCommand";
import {
  GetApplicationAccessScopeCommandInput,
  GetApplicationAccessScopeCommandOutput,
} from "../commands/GetApplicationAccessScopeCommand";
import {
  GetApplicationAssignmentConfigurationCommandInput,
  GetApplicationAssignmentConfigurationCommandOutput,
} from "../commands/GetApplicationAssignmentConfigurationCommand";
import {
  GetApplicationAuthenticationMethodCommandInput,
  GetApplicationAuthenticationMethodCommandOutput,
} from "../commands/GetApplicationAuthenticationMethodCommand";
import {
  GetApplicationGrantCommandInput,
  GetApplicationGrantCommandOutput,
} from "../commands/GetApplicationGrantCommand";
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
  ListAccountAssignmentsForPrincipalCommandInput,
  ListAccountAssignmentsForPrincipalCommandOutput,
} from "../commands/ListAccountAssignmentsForPrincipalCommand";
import {
  ListAccountsForProvisionedPermissionSetCommandInput,
  ListAccountsForProvisionedPermissionSetCommandOutput,
} from "../commands/ListAccountsForProvisionedPermissionSetCommand";
import {
  ListApplicationAccessScopesCommandInput,
  ListApplicationAccessScopesCommandOutput,
} from "../commands/ListApplicationAccessScopesCommand";
import {
  ListApplicationAssignmentsCommandInput,
  ListApplicationAssignmentsCommandOutput,
} from "../commands/ListApplicationAssignmentsCommand";
import {
  ListApplicationAssignmentsForPrincipalCommandInput,
  ListApplicationAssignmentsForPrincipalCommandOutput,
} from "../commands/ListApplicationAssignmentsForPrincipalCommand";
import {
  ListApplicationAuthenticationMethodsCommandInput,
  ListApplicationAuthenticationMethodsCommandOutput,
} from "../commands/ListApplicationAuthenticationMethodsCommand";
import {
  ListApplicationGrantsCommandInput,
  ListApplicationGrantsCommandOutput,
} from "../commands/ListApplicationGrantsCommand";
import {
  ListApplicationProvidersCommandInput,
  ListApplicationProvidersCommandOutput,
} from "../commands/ListApplicationProvidersCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
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
  ListTrustedTokenIssuersCommandInput,
  ListTrustedTokenIssuersCommandOutput,
} from "../commands/ListTrustedTokenIssuersCommand";
import {
  ProvisionPermissionSetCommandInput,
  ProvisionPermissionSetCommandOutput,
} from "../commands/ProvisionPermissionSetCommand";
import {
  PutApplicationAccessScopeCommandInput,
  PutApplicationAccessScopeCommandOutput,
} from "../commands/PutApplicationAccessScopeCommand";
import {
  PutApplicationAssignmentConfigurationCommandInput,
  PutApplicationAssignmentConfigurationCommandOutput,
} from "../commands/PutApplicationAssignmentConfigurationCommand";
import {
  PutApplicationAuthenticationMethodCommandInput,
  PutApplicationAuthenticationMethodCommandOutput,
} from "../commands/PutApplicationAuthenticationMethodCommand";
import {
  PutApplicationGrantCommandInput,
  PutApplicationGrantCommandOutput,
} from "../commands/PutApplicationGrantCommand";
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
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import {
  UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  UpdateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "../commands/UpdateInstanceAccessControlAttributeConfigurationCommand";
import { UpdateInstanceCommandInput, UpdateInstanceCommandOutput } from "../commands/UpdateInstanceCommand";
import {
  UpdatePermissionSetCommandInput,
  UpdatePermissionSetCommandOutput,
} from "../commands/UpdatePermissionSetCommand";
import {
  UpdateTrustedTokenIssuerCommandInput,
  UpdateTrustedTokenIssuerCommandOutput,
} from "../commands/UpdateTrustedTokenIssuerCommand";
import {
  AccessControlAttribute,
  AccessControlAttributeValue,
  AccessDeniedException,
  AccountAssignmentOperationStatus,
  AccountAssignmentOperationStatusMetadata,
  Application,
  AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  AttachManagedPolicyToPermissionSetRequest,
  AuthenticationMethod,
  AuthenticationMethodItem,
  AuthorizationCodeGrant,
  AuthorizedTokenIssuer,
  ConflictException,
  CreateAccountAssignmentRequest,
  CreateAccountAssignmentResponse,
  CreateApplicationAssignmentRequest,
  CreateApplicationRequest,
  CreateInstanceAccessControlAttributeConfigurationRequest,
  CreateInstanceRequest,
  CreatePermissionSetRequest,
  CreatePermissionSetResponse,
  CreateTrustedTokenIssuerRequest,
  CustomerManagedPolicyReference,
  DeleteAccountAssignmentRequest,
  DeleteAccountAssignmentResponse,
  DeleteApplicationAccessScopeRequest,
  DeleteApplicationAssignmentRequest,
  DeleteApplicationAuthenticationMethodRequest,
  DeleteApplicationGrantRequest,
  DeleteApplicationRequest,
  DeleteInlinePolicyFromPermissionSetRequest,
  DeleteInstanceAccessControlAttributeConfigurationRequest,
  DeleteInstanceRequest,
  DeletePermissionsBoundaryFromPermissionSetRequest,
  DeletePermissionSetRequest,
  DeleteTrustedTokenIssuerRequest,
  DescribeAccountAssignmentCreationStatusRequest,
  DescribeAccountAssignmentCreationStatusResponse,
  DescribeAccountAssignmentDeletionStatusRequest,
  DescribeAccountAssignmentDeletionStatusResponse,
  DescribeApplicationAssignmentRequest,
  DescribeApplicationProviderRequest,
  DescribeApplicationRequest,
  DescribeApplicationResponse,
  DescribeInstanceAccessControlAttributeConfigurationRequest,
  DescribeInstanceRequest,
  DescribeInstanceResponse,
  DescribePermissionSetProvisioningStatusRequest,
  DescribePermissionSetProvisioningStatusResponse,
  DescribePermissionSetRequest,
  DescribePermissionSetResponse,
  DescribeTrustedTokenIssuerRequest,
  DetachCustomerManagedPolicyReferenceFromPermissionSetRequest,
  DetachManagedPolicyFromPermissionSetRequest,
  GetApplicationAccessScopeRequest,
  GetApplicationAssignmentConfigurationRequest,
  GetApplicationAuthenticationMethodRequest,
  GetApplicationAuthenticationMethodResponse,
  GetApplicationGrantRequest,
  GetInlinePolicyForPermissionSetRequest,
  GetPermissionsBoundaryForPermissionSetRequest,
  Grant,
  IamAuthenticationMethod,
  InstanceAccessControlAttributeConfiguration,
  InstanceMetadata,
  InternalServerException,
  JwtBearerGrant,
  ListAccountAssignmentCreationStatusRequest,
  ListAccountAssignmentCreationStatusResponse,
  ListAccountAssignmentDeletionStatusRequest,
  ListAccountAssignmentDeletionStatusResponse,
  ListAccountAssignmentsFilter,
  ListAccountAssignmentsForPrincipalRequest,
  ListAccountAssignmentsRequest,
  ListAccountsForProvisionedPermissionSetRequest,
  ListApplicationAccessScopesRequest,
  ListApplicationAssignmentsFilter,
  ListApplicationAssignmentsForPrincipalRequest,
  ListApplicationAssignmentsRequest,
  ListApplicationAuthenticationMethodsRequest,
  ListApplicationAuthenticationMethodsResponse,
  ListApplicationGrantsRequest,
  ListApplicationProvidersRequest,
  ListApplicationsFilter,
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListCustomerManagedPolicyReferencesInPermissionSetRequest,
  ListInstancesRequest,
  ListInstancesResponse,
  ListManagedPoliciesInPermissionSetRequest,
  ListPermissionSetProvisioningStatusRequest,
  ListPermissionSetProvisioningStatusResponse,
  ListPermissionSetsProvisionedToAccountRequest,
  ListPermissionSetsRequest,
  ListTagsForResourceRequest,
  ListTrustedTokenIssuersRequest,
  OidcJwtConfiguration,
  OidcJwtUpdateConfiguration,
  OperationStatusFilter,
  PermissionsBoundary,
  PermissionSet,
  PermissionSetProvisioningStatus,
  PermissionSetProvisioningStatusMetadata,
  PortalOptions,
  ProvisionPermissionSetRequest,
  ProvisionPermissionSetResponse,
  PutApplicationAccessScopeRequest,
  PutApplicationAssignmentConfigurationRequest,
  PutApplicationAuthenticationMethodRequest,
  PutApplicationGrantRequest,
  PutInlinePolicyToPermissionSetRequest,
  PutPermissionsBoundaryToPermissionSetRequest,
  RefreshTokenGrant,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SignInOptions,
  Tag,
  TagResourceRequest,
  ThrottlingException,
  TokenExchangeGrant,
  TrustedTokenIssuerConfiguration,
  TrustedTokenIssuerUpdateConfiguration,
  UntagResourceRequest,
  UpdateApplicationPortalOptions,
  UpdateApplicationRequest,
  UpdateInstanceAccessControlAttributeConfigurationRequest,
  UpdateInstanceRequest,
  UpdatePermissionSetRequest,
  UpdateTrustedTokenIssuerRequest,
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
 * serializeAws_json1_1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApplication");
  let body: any;
  body = JSON.stringify(se_CreateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApplicationAssignmentCommand
 */
export const se_CreateApplicationAssignmentCommand = async (
  input: CreateApplicationAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApplicationAssignment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInstanceCommand
 */
export const se_CreateInstanceCommand = async (
  input: CreateInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInstance");
  let body: any;
  body = JSON.stringify(se_CreateInstanceRequest(input, context));
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
 * serializeAws_json1_1CreateTrustedTokenIssuerCommand
 */
export const se_CreateTrustedTokenIssuerCommand = async (
  input: CreateTrustedTokenIssuerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTrustedTokenIssuer");
  let body: any;
  body = JSON.stringify(se_CreateTrustedTokenIssuerRequest(input, context));
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
 * serializeAws_json1_1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationAccessScopeCommand
 */
export const se_DeleteApplicationAccessScopeCommand = async (
  input: DeleteApplicationAccessScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplicationAccessScope");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationAssignmentCommand
 */
export const se_DeleteApplicationAssignmentCommand = async (
  input: DeleteApplicationAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplicationAssignment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationAuthenticationMethodCommand
 */
export const se_DeleteApplicationAuthenticationMethodCommand = async (
  input: DeleteApplicationAuthenticationMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplicationAuthenticationMethod");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationGrantCommand
 */
export const se_DeleteApplicationGrantCommand = async (
  input: DeleteApplicationGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplicationGrant");
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
 * serializeAws_json1_1DeleteInstanceCommand
 */
export const se_DeleteInstanceCommand = async (
  input: DeleteInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInstance");
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
 * serializeAws_json1_1DeleteTrustedTokenIssuerCommand
 */
export const se_DeleteTrustedTokenIssuerCommand = async (
  input: DeleteTrustedTokenIssuerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTrustedTokenIssuer");
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
 * serializeAws_json1_1DescribeApplicationCommand
 */
export const se_DescribeApplicationCommand = async (
  input: DescribeApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationAssignmentCommand
 */
export const se_DescribeApplicationAssignmentCommand = async (
  input: DescribeApplicationAssignmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApplicationAssignment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationProviderCommand
 */
export const se_DescribeApplicationProviderCommand = async (
  input: DescribeApplicationProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApplicationProvider");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInstanceCommand
 */
export const se_DescribeInstanceCommand = async (
  input: DescribeInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInstance");
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
 * serializeAws_json1_1DescribeTrustedTokenIssuerCommand
 */
export const se_DescribeTrustedTokenIssuerCommand = async (
  input: DescribeTrustedTokenIssuerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTrustedTokenIssuer");
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
 * serializeAws_json1_1GetApplicationAccessScopeCommand
 */
export const se_GetApplicationAccessScopeCommand = async (
  input: GetApplicationAccessScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetApplicationAccessScope");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetApplicationAssignmentConfigurationCommand
 */
export const se_GetApplicationAssignmentConfigurationCommand = async (
  input: GetApplicationAssignmentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetApplicationAssignmentConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetApplicationAuthenticationMethodCommand
 */
export const se_GetApplicationAuthenticationMethodCommand = async (
  input: GetApplicationAuthenticationMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetApplicationAuthenticationMethod");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetApplicationGrantCommand
 */
export const se_GetApplicationGrantCommand = async (
  input: GetApplicationGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetApplicationGrant");
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
 * serializeAws_json1_1ListAccountAssignmentsForPrincipalCommand
 */
export const se_ListAccountAssignmentsForPrincipalCommand = async (
  input: ListAccountAssignmentsForPrincipalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAccountAssignmentsForPrincipal");
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
 * serializeAws_json1_1ListApplicationAccessScopesCommand
 */
export const se_ListApplicationAccessScopesCommand = async (
  input: ListApplicationAccessScopesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplicationAccessScopes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationAssignmentsCommand
 */
export const se_ListApplicationAssignmentsCommand = async (
  input: ListApplicationAssignmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplicationAssignments");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationAssignmentsForPrincipalCommand
 */
export const se_ListApplicationAssignmentsForPrincipalCommand = async (
  input: ListApplicationAssignmentsForPrincipalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplicationAssignmentsForPrincipal");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationAuthenticationMethodsCommand
 */
export const se_ListApplicationAuthenticationMethodsCommand = async (
  input: ListApplicationAuthenticationMethodsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplicationAuthenticationMethods");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationGrantsCommand
 */
export const se_ListApplicationGrantsCommand = async (
  input: ListApplicationGrantsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplicationGrants");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationProvidersCommand
 */
export const se_ListApplicationProvidersCommand = async (
  input: ListApplicationProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplicationProviders");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplications");
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
 * serializeAws_json1_1ListTrustedTokenIssuersCommand
 */
export const se_ListTrustedTokenIssuersCommand = async (
  input: ListTrustedTokenIssuersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTrustedTokenIssuers");
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
 * serializeAws_json1_1PutApplicationAccessScopeCommand
 */
export const se_PutApplicationAccessScopeCommand = async (
  input: PutApplicationAccessScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutApplicationAccessScope");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutApplicationAssignmentConfigurationCommand
 */
export const se_PutApplicationAssignmentConfigurationCommand = async (
  input: PutApplicationAssignmentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutApplicationAssignmentConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutApplicationAuthenticationMethodCommand
 */
export const se_PutApplicationAuthenticationMethodCommand = async (
  input: PutApplicationAuthenticationMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutApplicationAuthenticationMethod");
  let body: any;
  body = JSON.stringify(se_PutApplicationAuthenticationMethodRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutApplicationGrantCommand
 */
export const se_PutApplicationGrantCommand = async (
  input: PutApplicationGrantCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutApplicationGrant");
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
 * serializeAws_json1_1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateInstanceCommand
 */
export const se_UpdateInstanceCommand = async (
  input: UpdateInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateInstance");
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
 * serializeAws_json1_1UpdateTrustedTokenIssuerCommand
 */
export const se_UpdateTrustedTokenIssuerCommand = async (
  input: UpdateTrustedTokenIssuerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTrustedTokenIssuer");
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
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1AttachManagedPolicyToPermissionSetCommand
 */
export const de_AttachManagedPolicyToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachManagedPolicyToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1CreateAccountAssignmentCommand
 */
export const de_CreateAccountAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateApplicationAssignmentCommand
 */
export const de_CreateApplicationAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateApplicationAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateInstanceCommand
 */
export const de_CreateInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateInstanceAccessControlAttributeConfigurationCommand
 */
export const de_CreateInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1CreatePermissionSetCommand
 */
export const de_CreatePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1CreateTrustedTokenIssuerCommand
 */
export const de_CreateTrustedTokenIssuerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustedTokenIssuerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTrustedTokenIssuerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAccountAssignmentCommand
 */
export const de_DeleteAccountAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApplicationAccessScopeCommand
 */
export const de_DeleteApplicationAccessScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationAccessScopeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationAccessScopeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApplicationAssignmentCommand
 */
export const de_DeleteApplicationAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteApplicationAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApplicationAuthenticationMethodCommand
 */
export const de_DeleteApplicationAuthenticationMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationAuthenticationMethodCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationAuthenticationMethodCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApplicationGrantCommand
 */
export const de_DeleteApplicationGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteApplicationGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteInlinePolicyFromPermissionSetCommand
 */
export const de_DeleteInlinePolicyFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInlinePolicyFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DeleteInstanceCommand
 */
export const de_DeleteInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteInstanceAccessControlAttributeConfigurationCommand
 */
export const de_DeleteInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DeletePermissionsBoundaryFromPermissionSetCommand
 */
export const de_DeletePermissionsBoundaryFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionsBoundaryFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DeletePermissionSetCommand
 */
export const de_DeletePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DeleteTrustedTokenIssuerCommand
 */
export const de_DeleteTrustedTokenIssuerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustedTokenIssuerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTrustedTokenIssuerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand
 */
export const de_DescribeAccountAssignmentCreationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAssignmentCreationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommand
 */
export const de_DescribeAccountAssignmentDeletionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountAssignmentDeletionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeApplicationCommand
 */
export const de_DescribeApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeApplicationResponse(data, context);
  const response: DescribeApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeApplicationAssignmentCommand
 */
export const de_DescribeApplicationAssignmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationAssignmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeApplicationAssignmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeApplicationProviderCommand
 */
export const de_DescribeApplicationProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeApplicationProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeInstanceCommand
 */
export const de_DescribeInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInstanceResponse(data, context);
  const response: DescribeInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeInstanceAccessControlAttributeConfigurationCommand
 */
export const de_DescribeInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribePermissionSetCommand
 */
export const de_DescribePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribePermissionSetProvisioningStatusCommand
 */
export const de_DescribePermissionSetProvisioningStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePermissionSetProvisioningStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeTrustedTokenIssuerCommand
 */
export const de_DescribeTrustedTokenIssuerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrustedTokenIssuerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeTrustedTokenIssuerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommand
 */
export const de_DetachCustomerManagedPolicyReferenceFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DetachManagedPolicyFromPermissionSetCommand
 */
export const de_DetachManagedPolicyFromPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachManagedPolicyFromPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1GetApplicationAccessScopeCommand
 */
export const de_GetApplicationAccessScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationAccessScopeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetApplicationAccessScopeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetApplicationAssignmentConfigurationCommand
 */
export const de_GetApplicationAssignmentConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationAssignmentConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetApplicationAssignmentConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetApplicationAuthenticationMethodCommand
 */
export const de_GetApplicationAuthenticationMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationAuthenticationMethodCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetApplicationAuthenticationMethodResponse(data, context);
  const response: GetApplicationAuthenticationMethodCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetApplicationGrantCommand
 */
export const de_GetApplicationGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetApplicationGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetApplicationGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetInlinePolicyForPermissionSetCommand
 */
export const de_GetInlinePolicyForPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInlinePolicyForPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1GetPermissionsBoundaryForPermissionSetCommand
 */
export const de_GetPermissionsBoundaryForPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPermissionsBoundaryForPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListAccountAssignmentCreationStatusCommand
 */
export const de_ListAccountAssignmentCreationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentCreationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListAccountAssignmentDeletionStatusCommand
 */
export const de_ListAccountAssignmentDeletionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentDeletionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListAccountAssignmentsCommand
 */
export const de_ListAccountAssignmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListAccountAssignmentsForPrincipalCommand
 */
export const de_ListAccountAssignmentsForPrincipalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAssignmentsForPrincipalCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAccountAssignmentsForPrincipalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAccountsForProvisionedPermissionSetCommand
 */
export const de_ListAccountsForProvisionedPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountsForProvisionedPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListApplicationAccessScopesCommand
 */
export const de_ListApplicationAccessScopesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationAccessScopesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListApplicationAccessScopesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListApplicationAssignmentsCommand
 */
export const de_ListApplicationAssignmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationAssignmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListApplicationAssignmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListApplicationAssignmentsForPrincipalCommand
 */
export const de_ListApplicationAssignmentsForPrincipalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationAssignmentsForPrincipalCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListApplicationAssignmentsForPrincipalCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListApplicationAuthenticationMethodsCommand
 */
export const de_ListApplicationAuthenticationMethodsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationAuthenticationMethodsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListApplicationAuthenticationMethodsResponse(data, context);
  const response: ListApplicationAuthenticationMethodsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListApplicationGrantsCommand
 */
export const de_ListApplicationGrantsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationGrantsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListApplicationGrantsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListApplicationProvidersCommand
 */
export const de_ListApplicationProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListApplicationProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListApplicationsResponse(data, context);
  const response: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommand
 */
export const de_ListCustomerManagedPolicyReferencesInPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListInstancesCommand
 */
export const de_ListInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInstancesResponse(data, context);
  const response: ListInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListManagedPoliciesInPermissionSetCommand
 */
export const de_ListManagedPoliciesInPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedPoliciesInPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListPermissionSetProvisioningStatusCommand
 */
export const de_ListPermissionSetProvisioningStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetProvisioningStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListPermissionSetsCommand
 */
export const de_ListPermissionSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListPermissionSetsProvisionedToAccountCommand
 */
export const de_ListPermissionSetsProvisionedToAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionSetsProvisionedToAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListTrustedTokenIssuersCommand
 */
export const de_ListTrustedTokenIssuersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrustedTokenIssuersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTrustedTokenIssuersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ProvisionPermissionSetCommand
 */
export const de_ProvisionPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1PutApplicationAccessScopeCommand
 */
export const de_PutApplicationAccessScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApplicationAccessScopeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutApplicationAccessScopeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1PutApplicationAssignmentConfigurationCommand
 */
export const de_PutApplicationAssignmentConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApplicationAssignmentConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutApplicationAssignmentConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutApplicationAuthenticationMethodCommand
 */
export const de_PutApplicationAuthenticationMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApplicationAuthenticationMethodCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutApplicationAuthenticationMethodCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1PutApplicationGrantCommand
 */
export const de_PutApplicationGrantCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutApplicationGrantCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutApplicationGrantCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1PutInlinePolicyToPermissionSetCommand
 */
export const de_PutInlinePolicyToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInlinePolicyToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1PutPermissionsBoundaryToPermissionSetCommand
 */
export const de_PutPermissionsBoundaryToPermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionsBoundaryToPermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateInstanceCommand
 */
export const de_UpdateInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateInstanceAccessControlAttributeConfigurationCommand
 */
export const de_UpdateInstanceAccessControlAttributeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceAccessControlAttributeConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1UpdatePermissionSetCommand
 */
export const de_UpdatePermissionSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePermissionSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1UpdateTrustedTokenIssuerCommand
 */
export const de_UpdateTrustedTokenIssuerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrustedTokenIssuerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateTrustedTokenIssuerCommandOutput = {
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

/**
 * serializeAws_json1_1ActorPolicyDocument
 */
const se_ActorPolicyDocument = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_AttachCustomerManagedPolicyReferenceToPermissionSetRequest omitted.

// se_AttachManagedPolicyToPermissionSetRequest omitted.

/**
 * serializeAws_json1_1AuthenticationMethod
 */
const se_AuthenticationMethod = (input: AuthenticationMethod, context: __SerdeContext): any => {
  return AuthenticationMethod.visit(input, {
    Iam: (value) => ({ Iam: se_IamAuthenticationMethod(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_AuthorizationCodeGrant omitted.

// se_AuthorizedTokenIssuer omitted.

// se_AuthorizedTokenIssuers omitted.

// se_CreateAccountAssignmentRequest omitted.

// se_CreateApplicationAssignmentRequest omitted.

/**
 * serializeAws_json1_1CreateApplicationRequest
 */
const se_CreateApplicationRequest = (input: CreateApplicationRequest, context: __SerdeContext): any => {
  return take(input, {
    ApplicationProviderArn: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    InstanceArn: [],
    Name: [],
    PortalOptions: _json,
    Status: [],
    Tags: _json,
  });
};

// se_CreateInstanceAccessControlAttributeConfigurationRequest omitted.

/**
 * serializeAws_json1_1CreateInstanceRequest
 */
const se_CreateInstanceRequest = (input: CreateInstanceRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Name: [],
    Tags: _json,
  });
};

// se_CreatePermissionSetRequest omitted.

/**
 * serializeAws_json1_1CreateTrustedTokenIssuerRequest
 */
const se_CreateTrustedTokenIssuerRequest = (input: CreateTrustedTokenIssuerRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    InstanceArn: [],
    Name: [],
    Tags: _json,
    TrustedTokenIssuerConfiguration: _json,
    TrustedTokenIssuerType: [],
  });
};

// se_CustomerManagedPolicyReference omitted.

// se_DeleteAccountAssignmentRequest omitted.

// se_DeleteApplicationAccessScopeRequest omitted.

// se_DeleteApplicationAssignmentRequest omitted.

// se_DeleteApplicationAuthenticationMethodRequest omitted.

// se_DeleteApplicationGrantRequest omitted.

// se_DeleteApplicationRequest omitted.

// se_DeleteInlinePolicyFromPermissionSetRequest omitted.

// se_DeleteInstanceAccessControlAttributeConfigurationRequest omitted.

// se_DeleteInstanceRequest omitted.

// se_DeletePermissionsBoundaryFromPermissionSetRequest omitted.

// se_DeletePermissionSetRequest omitted.

// se_DeleteTrustedTokenIssuerRequest omitted.

// se_DescribeAccountAssignmentCreationStatusRequest omitted.

// se_DescribeAccountAssignmentDeletionStatusRequest omitted.

// se_DescribeApplicationAssignmentRequest omitted.

// se_DescribeApplicationProviderRequest omitted.

// se_DescribeApplicationRequest omitted.

// se_DescribeInstanceAccessControlAttributeConfigurationRequest omitted.

// se_DescribeInstanceRequest omitted.

// se_DescribePermissionSetProvisioningStatusRequest omitted.

// se_DescribePermissionSetRequest omitted.

// se_DescribeTrustedTokenIssuerRequest omitted.

// se_DetachCustomerManagedPolicyReferenceFromPermissionSetRequest omitted.

// se_DetachManagedPolicyFromPermissionSetRequest omitted.

// se_GetApplicationAccessScopeRequest omitted.

// se_GetApplicationAssignmentConfigurationRequest omitted.

// se_GetApplicationAuthenticationMethodRequest omitted.

// se_GetApplicationGrantRequest omitted.

// se_GetInlinePolicyForPermissionSetRequest omitted.

// se_GetPermissionsBoundaryForPermissionSetRequest omitted.

// se_Grant omitted.

/**
 * serializeAws_json1_1IamAuthenticationMethod
 */
const se_IamAuthenticationMethod = (input: IamAuthenticationMethod, context: __SerdeContext): any => {
  return take(input, {
    ActorPolicy: (_) => se_ActorPolicyDocument(_, context),
  });
};

// se_InstanceAccessControlAttributeConfiguration omitted.

// se_JwtBearerGrant omitted.

// se_ListAccountAssignmentCreationStatusRequest omitted.

// se_ListAccountAssignmentDeletionStatusRequest omitted.

// se_ListAccountAssignmentsFilter omitted.

// se_ListAccountAssignmentsForPrincipalRequest omitted.

// se_ListAccountAssignmentsRequest omitted.

// se_ListAccountsForProvisionedPermissionSetRequest omitted.

// se_ListApplicationAccessScopesRequest omitted.

// se_ListApplicationAssignmentsFilter omitted.

// se_ListApplicationAssignmentsForPrincipalRequest omitted.

// se_ListApplicationAssignmentsRequest omitted.

// se_ListApplicationAuthenticationMethodsRequest omitted.

// se_ListApplicationGrantsRequest omitted.

// se_ListApplicationProvidersRequest omitted.

// se_ListApplicationsFilter omitted.

// se_ListApplicationsRequest omitted.

// se_ListCustomerManagedPolicyReferencesInPermissionSetRequest omitted.

// se_ListInstancesRequest omitted.

// se_ListManagedPoliciesInPermissionSetRequest omitted.

// se_ListPermissionSetProvisioningStatusRequest omitted.

// se_ListPermissionSetsProvisionedToAccountRequest omitted.

// se_ListPermissionSetsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTrustedTokenIssuersRequest omitted.

// se_OidcJwtConfiguration omitted.

// se_OidcJwtUpdateConfiguration omitted.

// se_OperationStatusFilter omitted.

// se_PermissionsBoundary omitted.

// se_PortalOptions omitted.

// se_ProvisionPermissionSetRequest omitted.

// se_PutApplicationAccessScopeRequest omitted.

// se_PutApplicationAssignmentConfigurationRequest omitted.

/**
 * serializeAws_json1_1PutApplicationAuthenticationMethodRequest
 */
const se_PutApplicationAuthenticationMethodRequest = (
  input: PutApplicationAuthenticationMethodRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ApplicationArn: [],
    AuthenticationMethod: (_) => se_AuthenticationMethod(_, context),
    AuthenticationMethodType: [],
  });
};

// se_PutApplicationGrantRequest omitted.

// se_PutInlinePolicyToPermissionSetRequest omitted.

// se_PutPermissionsBoundaryToPermissionSetRequest omitted.

// se_RedirectUris omitted.

// se_RefreshTokenGrant omitted.

// se_ScopeTargets omitted.

// se_SignInOptions omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TokenExchangeGrant omitted.

// se_TokenIssuerAudiences omitted.

// se_TrustedTokenIssuerConfiguration omitted.

// se_TrustedTokenIssuerUpdateConfiguration omitted.

// se_UntagResourceRequest omitted.

// se_UpdateApplicationPortalOptions omitted.

// se_UpdateApplicationRequest omitted.

// se_UpdateInstanceAccessControlAttributeConfigurationRequest omitted.

// se_UpdateInstanceRequest omitted.

// se_UpdatePermissionSetRequest omitted.

// se_UpdateTrustedTokenIssuerRequest omitted.

// de_AccessControlAttribute omitted.

// de_AccessControlAttributeList omitted.

// de_AccessControlAttributeValue omitted.

// de_AccessControlAttributeValueSourceList omitted.

// de_AccessDeniedException omitted.

// de_AccountAssignment omitted.

// de_AccountAssignmentForPrincipal omitted.

// de_AccountAssignmentList omitted.

// de_AccountAssignmentListForPrincipal omitted.

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

/**
 * deserializeAws_json1_1ActorPolicyDocument
 */
const de_ActorPolicyDocument = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

/**
 * deserializeAws_json1_1Application
 */
const de_Application = (output: any, context: __SerdeContext): Application => {
  return take(output, {
    ApplicationAccount: __expectString,
    ApplicationArn: __expectString,
    ApplicationProviderArn: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    InstanceArn: __expectString,
    Name: __expectString,
    PortalOptions: _json,
    Status: __expectString,
  }) as any;
};

// de_ApplicationAssignment omitted.

// de_ApplicationAssignmentForPrincipal omitted.

// de_ApplicationAssignmentListForPrincipal omitted.

// de_ApplicationAssignmentsList omitted.

/**
 * deserializeAws_json1_1ApplicationList
 */
const de_ApplicationList = (output: any, context: __SerdeContext): Application[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Application(entry, context);
    });
  return retVal;
};

// de_ApplicationProvider omitted.

// de_ApplicationProviderList omitted.

// de_AttachCustomerManagedPolicyReferenceToPermissionSetResponse omitted.

// de_AttachedManagedPolicy omitted.

// de_AttachedManagedPolicyList omitted.

// de_AttachManagedPolicyToPermissionSetResponse omitted.

/**
 * deserializeAws_json1_1AuthenticationMethod
 */
const de_AuthenticationMethod = (output: any, context: __SerdeContext): AuthenticationMethod => {
  if (output.Iam != null) {
    return {
      Iam: de_IamAuthenticationMethod(output.Iam, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_1AuthenticationMethodItem
 */
const de_AuthenticationMethodItem = (output: any, context: __SerdeContext): AuthenticationMethodItem => {
  return take(output, {
    AuthenticationMethod: (_: any) => de_AuthenticationMethod(__expectUnion(_), context),
    AuthenticationMethodType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AuthenticationMethods
 */
const de_AuthenticationMethods = (output: any, context: __SerdeContext): AuthenticationMethodItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AuthenticationMethodItem(entry, context);
    });
  return retVal;
};

// de_AuthorizationCodeGrant omitted.

// de_AuthorizedTokenIssuer omitted.

// de_AuthorizedTokenIssuers omitted.

// de_ConflictException omitted.

/**
 * deserializeAws_json1_1CreateAccountAssignmentResponse
 */
const de_CreateAccountAssignmentResponse = (output: any, context: __SerdeContext): CreateAccountAssignmentResponse => {
  return take(output, {
    AccountAssignmentCreationStatus: (_: any) => de_AccountAssignmentOperationStatus(_, context),
  }) as any;
};

// de_CreateApplicationAssignmentResponse omitted.

// de_CreateApplicationResponse omitted.

// de_CreateInstanceAccessControlAttributeConfigurationResponse omitted.

// de_CreateInstanceResponse omitted.

/**
 * deserializeAws_json1_1CreatePermissionSetResponse
 */
const de_CreatePermissionSetResponse = (output: any, context: __SerdeContext): CreatePermissionSetResponse => {
  return take(output, {
    PermissionSet: (_: any) => de_PermissionSet(_, context),
  }) as any;
};

// de_CreateTrustedTokenIssuerResponse omitted.

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

// de_DeleteApplicationAssignmentResponse omitted.

// de_DeleteApplicationResponse omitted.

// de_DeleteInlinePolicyFromPermissionSetResponse omitted.

// de_DeleteInstanceAccessControlAttributeConfigurationResponse omitted.

// de_DeleteInstanceResponse omitted.

// de_DeletePermissionsBoundaryFromPermissionSetResponse omitted.

// de_DeletePermissionSetResponse omitted.

// de_DeleteTrustedTokenIssuerResponse omitted.

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

// de_DescribeApplicationAssignmentResponse omitted.

// de_DescribeApplicationProviderResponse omitted.

/**
 * deserializeAws_json1_1DescribeApplicationResponse
 */
const de_DescribeApplicationResponse = (output: any, context: __SerdeContext): DescribeApplicationResponse => {
  return take(output, {
    ApplicationAccount: __expectString,
    ApplicationArn: __expectString,
    ApplicationProviderArn: __expectString,
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    InstanceArn: __expectString,
    Name: __expectString,
    PortalOptions: _json,
    Status: __expectString,
  }) as any;
};

// de_DescribeInstanceAccessControlAttributeConfigurationResponse omitted.

/**
 * deserializeAws_json1_1DescribeInstanceResponse
 */
const de_DescribeInstanceResponse = (output: any, context: __SerdeContext): DescribeInstanceResponse => {
  return take(output, {
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IdentityStoreId: __expectString,
    InstanceArn: __expectString,
    Name: __expectString,
    OwnerAccountId: __expectString,
    Status: __expectString,
  }) as any;
};

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

// de_DescribeTrustedTokenIssuerResponse omitted.

// de_DetachCustomerManagedPolicyReferenceFromPermissionSetResponse omitted.

// de_DetachManagedPolicyFromPermissionSetResponse omitted.

// de_DisplayData omitted.

// de_GetApplicationAccessScopeResponse omitted.

// de_GetApplicationAssignmentConfigurationResponse omitted.

/**
 * deserializeAws_json1_1GetApplicationAuthenticationMethodResponse
 */
const de_GetApplicationAuthenticationMethodResponse = (
  output: any,
  context: __SerdeContext
): GetApplicationAuthenticationMethodResponse => {
  return take(output, {
    AuthenticationMethod: (_: any) => de_AuthenticationMethod(__expectUnion(_), context),
  }) as any;
};

// de_GetApplicationGrantResponse omitted.

// de_GetInlinePolicyForPermissionSetResponse omitted.

// de_GetPermissionsBoundaryForPermissionSetResponse omitted.

// de_Grant omitted.

// de_GrantItem omitted.

// de_Grants omitted.

/**
 * deserializeAws_json1_1IamAuthenticationMethod
 */
const de_IamAuthenticationMethod = (output: any, context: __SerdeContext): IamAuthenticationMethod => {
  return take(output, {
    ActorPolicy: (_: any) => de_ActorPolicyDocument(_, context),
  }) as any;
};

// de_InstanceAccessControlAttributeConfiguration omitted.

/**
 * deserializeAws_json1_1InstanceList
 */
const de_InstanceList = (output: any, context: __SerdeContext): InstanceMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstanceMetadata
 */
const de_InstanceMetadata = (output: any, context: __SerdeContext): InstanceMetadata => {
  return take(output, {
    CreatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IdentityStoreId: __expectString,
    InstanceArn: __expectString,
    Name: __expectString,
    OwnerAccountId: __expectString,
    Status: __expectString,
  }) as any;
};

// de_InternalServerException omitted.

// de_JwtBearerGrant omitted.

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

// de_ListAccountAssignmentsForPrincipalResponse omitted.

// de_ListAccountAssignmentsResponse omitted.

// de_ListAccountsForProvisionedPermissionSetResponse omitted.

// de_ListApplicationAccessScopesResponse omitted.

// de_ListApplicationAssignmentsForPrincipalResponse omitted.

// de_ListApplicationAssignmentsResponse omitted.

/**
 * deserializeAws_json1_1ListApplicationAuthenticationMethodsResponse
 */
const de_ListApplicationAuthenticationMethodsResponse = (
  output: any,
  context: __SerdeContext
): ListApplicationAuthenticationMethodsResponse => {
  return take(output, {
    AuthenticationMethods: (_: any) => de_AuthenticationMethods(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListApplicationGrantsResponse omitted.

// de_ListApplicationProvidersResponse omitted.

/**
 * deserializeAws_json1_1ListApplicationsResponse
 */
const de_ListApplicationsResponse = (output: any, context: __SerdeContext): ListApplicationsResponse => {
  return take(output, {
    Applications: (_: any) => de_ApplicationList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListCustomerManagedPolicyReferencesInPermissionSetResponse omitted.

/**
 * deserializeAws_json1_1ListInstancesResponse
 */
const de_ListInstancesResponse = (output: any, context: __SerdeContext): ListInstancesResponse => {
  return take(output, {
    Instances: (_: any) => de_InstanceList(_, context),
    NextToken: __expectString,
  }) as any;
};

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

// de_ListTrustedTokenIssuersResponse omitted.

// de_OidcJwtConfiguration omitted.

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

// de_PortalOptions omitted.

/**
 * deserializeAws_json1_1ProvisionPermissionSetResponse
 */
const de_ProvisionPermissionSetResponse = (output: any, context: __SerdeContext): ProvisionPermissionSetResponse => {
  return take(output, {
    PermissionSetProvisioningStatus: (_: any) => de_PermissionSetProvisioningStatus(_, context),
  }) as any;
};

// de_PutApplicationAssignmentConfigurationResponse omitted.

// de_PutInlinePolicyToPermissionSetResponse omitted.

// de_PutPermissionsBoundaryToPermissionSetResponse omitted.

// de_RedirectUris omitted.

// de_RefreshTokenGrant omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceServerConfig omitted.

// de_ResourceServerScopeDetails omitted.

// de_ResourceServerScopes omitted.

// de_ScopeDetails omitted.

// de_Scopes omitted.

// de_ScopeTargets omitted.

// de_ServiceQuotaExceededException omitted.

// de_SignInOptions omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_ThrottlingException omitted.

// de_TokenExchangeGrant omitted.

// de_TokenIssuerAudiences omitted.

// de_TrustedTokenIssuerConfiguration omitted.

// de_TrustedTokenIssuerList omitted.

// de_TrustedTokenIssuerMetadata omitted.

// de_UntagResourceResponse omitted.

// de_UpdateApplicationResponse omitted.

// de_UpdateInstanceAccessControlAttributeConfigurationResponse omitted.

// de_UpdateInstanceResponse omitted.

// de_UpdatePermissionSetResponse omitted.

// de_UpdateTrustedTokenIssuerResponse omitted.

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
