import {
  AccessControlAttribute$,
  AccessControlAttributeValue$,
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedExceptionReason,
  AccountAssignment$,
  AccountAssignmentForPrincipal$,
  AccountAssignmentOperationStatus$,
  AccountAssignmentOperationStatusMetadata$,
  Application$,
  ApplicationAssignment$,
  ApplicationAssignmentForPrincipal$,
  ApplicationProvider$,
  ApplicationStatus,
  ApplicationVisibility,
  AttachCustomerManagedPolicyReferenceToPermissionSet$,
  AttachCustomerManagedPolicyReferenceToPermissionSetCommand,
  AttachCustomerManagedPolicyReferenceToPermissionSetRequest$,
  AttachCustomerManagedPolicyReferenceToPermissionSetResponse$,
  AttachManagedPolicyToPermissionSet$,
  AttachManagedPolicyToPermissionSetCommand,
  AttachManagedPolicyToPermissionSetRequest$,
  AttachManagedPolicyToPermissionSetResponse$,
  AttachedManagedPolicy$,
  AuthenticationMethod$,
  AuthenticationMethodItem$,
  AuthenticationMethodType,
  AuthorizationCodeGrant$,
  AuthorizedTokenIssuer$,
  ConflictException,
  ConflictException$,
  CreateAccountAssignment$,
  CreateAccountAssignmentCommand,
  CreateAccountAssignmentRequest$,
  CreateAccountAssignmentResponse$,
  CreateApplication$,
  CreateApplicationAssignment$,
  CreateApplicationAssignmentCommand,
  CreateApplicationAssignmentRequest$,
  CreateApplicationAssignmentResponse$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  CreateInstance$,
  CreateInstanceAccessControlAttributeConfiguration$,
  CreateInstanceAccessControlAttributeConfigurationCommand,
  CreateInstanceAccessControlAttributeConfigurationRequest$,
  CreateInstanceAccessControlAttributeConfigurationResponse$,
  CreateInstanceCommand,
  CreateInstanceRequest$,
  CreateInstanceResponse$,
  CreatePermissionSet$,
  CreatePermissionSetCommand,
  CreatePermissionSetRequest$,
  CreatePermissionSetResponse$,
  CreateTrustedTokenIssuer$,
  CreateTrustedTokenIssuerCommand,
  CreateTrustedTokenIssuerRequest$,
  CreateTrustedTokenIssuerResponse$,
  CustomerManagedPolicyReference$,
  DeleteAccountAssignment$,
  DeleteAccountAssignmentCommand,
  DeleteAccountAssignmentRequest$,
  DeleteAccountAssignmentResponse$,
  DeleteApplication$,
  DeleteApplicationAccessScope$,
  DeleteApplicationAccessScopeCommand,
  DeleteApplicationAccessScopeRequest$,
  DeleteApplicationAssignment$,
  DeleteApplicationAssignmentCommand,
  DeleteApplicationAssignmentRequest$,
  DeleteApplicationAssignmentResponse$,
  DeleteApplicationAuthenticationMethod$,
  DeleteApplicationAuthenticationMethodCommand,
  DeleteApplicationAuthenticationMethodRequest$,
  DeleteApplicationCommand,
  DeleteApplicationGrant$,
  DeleteApplicationGrantCommand,
  DeleteApplicationGrantRequest$,
  DeleteApplicationRequest$,
  DeleteApplicationResponse$,
  DeleteInlinePolicyFromPermissionSet$,
  DeleteInlinePolicyFromPermissionSetCommand,
  DeleteInlinePolicyFromPermissionSetRequest$,
  DeleteInlinePolicyFromPermissionSetResponse$,
  DeleteInstance$,
  DeleteInstanceAccessControlAttributeConfiguration$,
  DeleteInstanceAccessControlAttributeConfigurationCommand,
  DeleteInstanceAccessControlAttributeConfigurationRequest$,
  DeleteInstanceAccessControlAttributeConfigurationResponse$,
  DeleteInstanceCommand,
  DeleteInstanceRequest$,
  DeleteInstanceResponse$,
  DeletePermissionSet$,
  DeletePermissionSetCommand,
  DeletePermissionSetRequest$,
  DeletePermissionSetResponse$,
  DeletePermissionsBoundaryFromPermissionSet$,
  DeletePermissionsBoundaryFromPermissionSetCommand,
  DeletePermissionsBoundaryFromPermissionSetRequest$,
  DeletePermissionsBoundaryFromPermissionSetResponse$,
  DeleteTrustedTokenIssuer$,
  DeleteTrustedTokenIssuerCommand,
  DeleteTrustedTokenIssuerRequest$,
  DeleteTrustedTokenIssuerResponse$,
  DescribeAccountAssignmentCreationStatus$,
  DescribeAccountAssignmentCreationStatusCommand,
  DescribeAccountAssignmentCreationStatusRequest$,
  DescribeAccountAssignmentCreationStatusResponse$,
  DescribeAccountAssignmentDeletionStatus$,
  DescribeAccountAssignmentDeletionStatusCommand,
  DescribeAccountAssignmentDeletionStatusRequest$,
  DescribeAccountAssignmentDeletionStatusResponse$,
  DescribeApplication$,
  DescribeApplicationAssignment$,
  DescribeApplicationAssignmentCommand,
  DescribeApplicationAssignmentRequest$,
  DescribeApplicationAssignmentResponse$,
  DescribeApplicationCommand,
  DescribeApplicationProvider$,
  DescribeApplicationProviderCommand,
  DescribeApplicationProviderRequest$,
  DescribeApplicationProviderResponse$,
  DescribeApplicationRequest$,
  DescribeApplicationResponse$,
  DescribeInstance$,
  DescribeInstanceAccessControlAttributeConfiguration$,
  DescribeInstanceAccessControlAttributeConfigurationCommand,
  DescribeInstanceAccessControlAttributeConfigurationRequest$,
  DescribeInstanceAccessControlAttributeConfigurationResponse$,
  DescribeInstanceCommand,
  DescribeInstanceRequest$,
  DescribeInstanceResponse$,
  DescribePermissionSet$,
  DescribePermissionSetCommand,
  DescribePermissionSetProvisioningStatus$,
  DescribePermissionSetProvisioningStatusCommand,
  DescribePermissionSetProvisioningStatusRequest$,
  DescribePermissionSetProvisioningStatusResponse$,
  DescribePermissionSetRequest$,
  DescribePermissionSetResponse$,
  DescribeTrustedTokenIssuer$,
  DescribeTrustedTokenIssuerCommand,
  DescribeTrustedTokenIssuerRequest$,
  DescribeTrustedTokenIssuerResponse$,
  DetachCustomerManagedPolicyReferenceFromPermissionSet$,
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommand,
  DetachCustomerManagedPolicyReferenceFromPermissionSetRequest$,
  DetachCustomerManagedPolicyReferenceFromPermissionSetResponse$,
  DetachManagedPolicyFromPermissionSet$,
  DetachManagedPolicyFromPermissionSetCommand,
  DetachManagedPolicyFromPermissionSetRequest$,
  DetachManagedPolicyFromPermissionSetResponse$,
  DisplayData$,
  EncryptionConfiguration$,
  EncryptionConfigurationDetails$,
  FederationProtocol,
  GetApplicationAccessScope$,
  GetApplicationAccessScopeCommand,
  GetApplicationAccessScopeRequest$,
  GetApplicationAccessScopeResponse$,
  GetApplicationAssignmentConfiguration$,
  GetApplicationAssignmentConfigurationCommand,
  GetApplicationAssignmentConfigurationRequest$,
  GetApplicationAssignmentConfigurationResponse$,
  GetApplicationAuthenticationMethod$,
  GetApplicationAuthenticationMethodCommand,
  GetApplicationAuthenticationMethodRequest$,
  GetApplicationAuthenticationMethodResponse$,
  GetApplicationGrant$,
  GetApplicationGrantCommand,
  GetApplicationGrantRequest$,
  GetApplicationGrantResponse$,
  GetApplicationSessionConfiguration$,
  GetApplicationSessionConfigurationCommand,
  GetApplicationSessionConfigurationRequest$,
  GetApplicationSessionConfigurationResponse$,
  GetInlinePolicyForPermissionSet$,
  GetInlinePolicyForPermissionSetCommand,
  GetInlinePolicyForPermissionSetRequest$,
  GetInlinePolicyForPermissionSetResponse$,
  GetPermissionsBoundaryForPermissionSet$,
  GetPermissionsBoundaryForPermissionSetCommand,
  GetPermissionsBoundaryForPermissionSetRequest$,
  GetPermissionsBoundaryForPermissionSetResponse$,
  Grant$,
  GrantItem$,
  GrantType,
  IamAuthenticationMethod$,
  InstanceAccessControlAttributeConfiguration$,
  InstanceAccessControlAttributeConfigurationStatus,
  InstanceMetadata$,
  InstanceStatus,
  InternalServerException,
  InternalServerException$,
  JwksRetrievalOption,
  JwtBearerGrant$,
  KmsKeyStatus,
  KmsKeyType,
  ListAccountAssignmentCreationStatus$,
  ListAccountAssignmentCreationStatusCommand,
  ListAccountAssignmentCreationStatusRequest$,
  ListAccountAssignmentCreationStatusResponse$,
  ListAccountAssignmentDeletionStatus$,
  ListAccountAssignmentDeletionStatusCommand,
  ListAccountAssignmentDeletionStatusRequest$,
  ListAccountAssignmentDeletionStatusResponse$,
  ListAccountAssignments$,
  ListAccountAssignmentsCommand,
  ListAccountAssignmentsFilter$,
  ListAccountAssignmentsForPrincipal$,
  ListAccountAssignmentsForPrincipalCommand,
  ListAccountAssignmentsForPrincipalRequest$,
  ListAccountAssignmentsForPrincipalResponse$,
  ListAccountAssignmentsRequest$,
  ListAccountAssignmentsResponse$,
  ListAccountsForProvisionedPermissionSet$,
  ListAccountsForProvisionedPermissionSetCommand,
  ListAccountsForProvisionedPermissionSetRequest$,
  ListAccountsForProvisionedPermissionSetResponse$,
  ListApplicationAccessScopes$,
  ListApplicationAccessScopesCommand,
  ListApplicationAccessScopesRequest$,
  ListApplicationAccessScopesResponse$,
  ListApplicationAssignments$,
  ListApplicationAssignmentsCommand,
  ListApplicationAssignmentsFilter$,
  ListApplicationAssignmentsForPrincipal$,
  ListApplicationAssignmentsForPrincipalCommand,
  ListApplicationAssignmentsForPrincipalRequest$,
  ListApplicationAssignmentsForPrincipalResponse$,
  ListApplicationAssignmentsRequest$,
  ListApplicationAssignmentsResponse$,
  ListApplicationAuthenticationMethods$,
  ListApplicationAuthenticationMethodsCommand,
  ListApplicationAuthenticationMethodsRequest$,
  ListApplicationAuthenticationMethodsResponse$,
  ListApplicationGrants$,
  ListApplicationGrantsCommand,
  ListApplicationGrantsRequest$,
  ListApplicationGrantsResponse$,
  ListApplicationProviders$,
  ListApplicationProvidersCommand,
  ListApplicationProvidersRequest$,
  ListApplicationProvidersResponse$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsFilter$,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  ListCustomerManagedPolicyReferencesInPermissionSet$,
  ListCustomerManagedPolicyReferencesInPermissionSetCommand,
  ListCustomerManagedPolicyReferencesInPermissionSetRequest$,
  ListCustomerManagedPolicyReferencesInPermissionSetResponse$,
  ListInstances$,
  ListInstancesCommand,
  ListInstancesRequest$,
  ListInstancesResponse$,
  ListManagedPoliciesInPermissionSet$,
  ListManagedPoliciesInPermissionSetCommand,
  ListManagedPoliciesInPermissionSetRequest$,
  ListManagedPoliciesInPermissionSetResponse$,
  ListPermissionSetProvisioningStatus$,
  ListPermissionSetProvisioningStatusCommand,
  ListPermissionSetProvisioningStatusRequest$,
  ListPermissionSetProvisioningStatusResponse$,
  ListPermissionSets$,
  ListPermissionSetsCommand,
  ListPermissionSetsProvisionedToAccount$,
  ListPermissionSetsProvisionedToAccountCommand,
  ListPermissionSetsProvisionedToAccountRequest$,
  ListPermissionSetsProvisionedToAccountResponse$,
  ListPermissionSetsRequest$,
  ListPermissionSetsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTrustedTokenIssuers$,
  ListTrustedTokenIssuersCommand,
  ListTrustedTokenIssuersRequest$,
  ListTrustedTokenIssuersResponse$,
  OidcJwtConfiguration$,
  OidcJwtUpdateConfiguration$,
  OperationStatusFilter$,
  PermissionSet$,
  PermissionSetProvisioningStatus$,
  PermissionSetProvisioningStatusMetadata$,
  PermissionsBoundary$,
  PortalOptions$,
  PrincipalType,
  ProvisionPermissionSet$,
  ProvisionPermissionSetCommand,
  ProvisionPermissionSetRequest$,
  ProvisionPermissionSetResponse$,
  ProvisionTargetType,
  ProvisioningStatus,
  PutApplicationAccessScope$,
  PutApplicationAccessScopeCommand,
  PutApplicationAccessScopeRequest$,
  PutApplicationAssignmentConfiguration$,
  PutApplicationAssignmentConfigurationCommand,
  PutApplicationAssignmentConfigurationRequest$,
  PutApplicationAssignmentConfigurationResponse$,
  PutApplicationAuthenticationMethod$,
  PutApplicationAuthenticationMethodCommand,
  PutApplicationAuthenticationMethodRequest$,
  PutApplicationGrant$,
  PutApplicationGrantCommand,
  PutApplicationGrantRequest$,
  PutApplicationSessionConfiguration$,
  PutApplicationSessionConfigurationCommand,
  PutApplicationSessionConfigurationRequest$,
  PutApplicationSessionConfigurationResponse$,
  PutInlinePolicyToPermissionSet$,
  PutInlinePolicyToPermissionSetCommand,
  PutInlinePolicyToPermissionSetRequest$,
  PutInlinePolicyToPermissionSetResponse$,
  PutPermissionsBoundaryToPermissionSet$,
  PutPermissionsBoundaryToPermissionSetCommand,
  PutPermissionsBoundaryToPermissionSetRequest$,
  PutPermissionsBoundaryToPermissionSetResponse$,
  RefreshTokenGrant$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceNotFoundExceptionReason,
  ResourceServerConfig$,
  ResourceServerScopeDetails$,
  SSOAdmin,
  SSOAdminClient,
  SSOAdminServiceException,
  ScopeDetails$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SignInOptions$,
  SignInOrigin,
  StatusValues,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetType,
  ThrottlingException,
  ThrottlingException$,
  ThrottlingExceptionReason,
  TokenExchangeGrant$,
  TrustedTokenIssuerConfiguration$,
  TrustedTokenIssuerMetadata$,
  TrustedTokenIssuerType,
  TrustedTokenIssuerUpdateConfiguration$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationPortalOptions$,
  UpdateApplicationRequest$,
  UpdateApplicationResponse$,
  UpdateInstance$,
  UpdateInstanceAccessControlAttributeConfiguration$,
  UpdateInstanceAccessControlAttributeConfigurationCommand,
  UpdateInstanceAccessControlAttributeConfigurationRequest$,
  UpdateInstanceAccessControlAttributeConfigurationResponse$,
  UpdateInstanceCommand,
  UpdateInstanceRequest$,
  UpdateInstanceResponse$,
  UpdatePermissionSet$,
  UpdatePermissionSetCommand,
  UpdatePermissionSetRequest$,
  UpdatePermissionSetResponse$,
  UpdateTrustedTokenIssuer$,
  UpdateTrustedTokenIssuerCommand,
  UpdateTrustedTokenIssuerRequest$,
  UpdateTrustedTokenIssuerResponse$,
  UserBackgroundSessionApplicationStatus,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
  paginateListAccountAssignmentCreationStatus,
  paginateListAccountAssignmentDeletionStatus,
  paginateListAccountAssignments,
  paginateListAccountAssignmentsForPrincipal,
  paginateListAccountsForProvisionedPermissionSet,
  paginateListApplicationAccessScopes,
  paginateListApplicationAssignments,
  paginateListApplicationAssignmentsForPrincipal,
  paginateListApplicationAuthenticationMethods,
  paginateListApplicationGrants,
  paginateListApplicationProviders,
  paginateListApplications,
  paginateListCustomerManagedPolicyReferencesInPermissionSet,
  paginateListInstances,
  paginateListManagedPoliciesInPermissionSet,
  paginateListPermissionSetProvisioningStatus,
  paginateListPermissionSets,
  paginateListPermissionSetsProvisionedToAccount,
  paginateListTagsForResource,
  paginateListTrustedTokenIssuers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSOAdminClient === "function");
assert(typeof SSOAdmin === "function");
// commands
assert(typeof AttachCustomerManagedPolicyReferenceToPermissionSetCommand === "function");
assert(typeof AttachCustomerManagedPolicyReferenceToPermissionSet$ === "object");
assert(typeof AttachManagedPolicyToPermissionSetCommand === "function");
assert(typeof AttachManagedPolicyToPermissionSet$ === "object");
assert(typeof CreateAccountAssignmentCommand === "function");
assert(typeof CreateAccountAssignment$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateApplicationAssignmentCommand === "function");
assert(typeof CreateApplicationAssignment$ === "object");
assert(typeof CreateInstanceCommand === "function");
assert(typeof CreateInstance$ === "object");
assert(typeof CreateInstanceAccessControlAttributeConfigurationCommand === "function");
assert(typeof CreateInstanceAccessControlAttributeConfiguration$ === "object");
assert(typeof CreatePermissionSetCommand === "function");
assert(typeof CreatePermissionSet$ === "object");
assert(typeof CreateTrustedTokenIssuerCommand === "function");
assert(typeof CreateTrustedTokenIssuer$ === "object");
assert(typeof DeleteAccountAssignmentCommand === "function");
assert(typeof DeleteAccountAssignment$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteApplicationAccessScopeCommand === "function");
assert(typeof DeleteApplicationAccessScope$ === "object");
assert(typeof DeleteApplicationAssignmentCommand === "function");
assert(typeof DeleteApplicationAssignment$ === "object");
assert(typeof DeleteApplicationAuthenticationMethodCommand === "function");
assert(typeof DeleteApplicationAuthenticationMethod$ === "object");
assert(typeof DeleteApplicationGrantCommand === "function");
assert(typeof DeleteApplicationGrant$ === "object");
assert(typeof DeleteInlinePolicyFromPermissionSetCommand === "function");
assert(typeof DeleteInlinePolicyFromPermissionSet$ === "object");
assert(typeof DeleteInstanceCommand === "function");
assert(typeof DeleteInstance$ === "object");
assert(typeof DeleteInstanceAccessControlAttributeConfigurationCommand === "function");
assert(typeof DeleteInstanceAccessControlAttributeConfiguration$ === "object");
assert(typeof DeletePermissionsBoundaryFromPermissionSetCommand === "function");
assert(typeof DeletePermissionsBoundaryFromPermissionSet$ === "object");
assert(typeof DeletePermissionSetCommand === "function");
assert(typeof DeletePermissionSet$ === "object");
assert(typeof DeleteTrustedTokenIssuerCommand === "function");
assert(typeof DeleteTrustedTokenIssuer$ === "object");
assert(typeof DescribeAccountAssignmentCreationStatusCommand === "function");
assert(typeof DescribeAccountAssignmentCreationStatus$ === "object");
assert(typeof DescribeAccountAssignmentDeletionStatusCommand === "function");
assert(typeof DescribeAccountAssignmentDeletionStatus$ === "object");
assert(typeof DescribeApplicationCommand === "function");
assert(typeof DescribeApplication$ === "object");
assert(typeof DescribeApplicationAssignmentCommand === "function");
assert(typeof DescribeApplicationAssignment$ === "object");
assert(typeof DescribeApplicationProviderCommand === "function");
assert(typeof DescribeApplicationProvider$ === "object");
assert(typeof DescribeInstanceCommand === "function");
assert(typeof DescribeInstance$ === "object");
assert(typeof DescribeInstanceAccessControlAttributeConfigurationCommand === "function");
assert(typeof DescribeInstanceAccessControlAttributeConfiguration$ === "object");
assert(typeof DescribePermissionSetCommand === "function");
assert(typeof DescribePermissionSet$ === "object");
assert(typeof DescribePermissionSetProvisioningStatusCommand === "function");
assert(typeof DescribePermissionSetProvisioningStatus$ === "object");
assert(typeof DescribeTrustedTokenIssuerCommand === "function");
assert(typeof DescribeTrustedTokenIssuer$ === "object");
assert(typeof DetachCustomerManagedPolicyReferenceFromPermissionSetCommand === "function");
assert(typeof DetachCustomerManagedPolicyReferenceFromPermissionSet$ === "object");
assert(typeof DetachManagedPolicyFromPermissionSetCommand === "function");
assert(typeof DetachManagedPolicyFromPermissionSet$ === "object");
assert(typeof GetApplicationAccessScopeCommand === "function");
assert(typeof GetApplicationAccessScope$ === "object");
assert(typeof GetApplicationAssignmentConfigurationCommand === "function");
assert(typeof GetApplicationAssignmentConfiguration$ === "object");
assert(typeof GetApplicationAuthenticationMethodCommand === "function");
assert(typeof GetApplicationAuthenticationMethod$ === "object");
assert(typeof GetApplicationGrantCommand === "function");
assert(typeof GetApplicationGrant$ === "object");
assert(typeof GetApplicationSessionConfigurationCommand === "function");
assert(typeof GetApplicationSessionConfiguration$ === "object");
assert(typeof GetInlinePolicyForPermissionSetCommand === "function");
assert(typeof GetInlinePolicyForPermissionSet$ === "object");
assert(typeof GetPermissionsBoundaryForPermissionSetCommand === "function");
assert(typeof GetPermissionsBoundaryForPermissionSet$ === "object");
assert(typeof ListAccountAssignmentCreationStatusCommand === "function");
assert(typeof ListAccountAssignmentCreationStatus$ === "object");
assert(typeof ListAccountAssignmentDeletionStatusCommand === "function");
assert(typeof ListAccountAssignmentDeletionStatus$ === "object");
assert(typeof ListAccountAssignmentsCommand === "function");
assert(typeof ListAccountAssignments$ === "object");
assert(typeof ListAccountAssignmentsForPrincipalCommand === "function");
assert(typeof ListAccountAssignmentsForPrincipal$ === "object");
assert(typeof ListAccountsForProvisionedPermissionSetCommand === "function");
assert(typeof ListAccountsForProvisionedPermissionSet$ === "object");
assert(typeof ListApplicationAccessScopesCommand === "function");
assert(typeof ListApplicationAccessScopes$ === "object");
assert(typeof ListApplicationAssignmentsCommand === "function");
assert(typeof ListApplicationAssignments$ === "object");
assert(typeof ListApplicationAssignmentsForPrincipalCommand === "function");
assert(typeof ListApplicationAssignmentsForPrincipal$ === "object");
assert(typeof ListApplicationAuthenticationMethodsCommand === "function");
assert(typeof ListApplicationAuthenticationMethods$ === "object");
assert(typeof ListApplicationGrantsCommand === "function");
assert(typeof ListApplicationGrants$ === "object");
assert(typeof ListApplicationProvidersCommand === "function");
assert(typeof ListApplicationProviders$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListCustomerManagedPolicyReferencesInPermissionSetCommand === "function");
assert(typeof ListCustomerManagedPolicyReferencesInPermissionSet$ === "object");
assert(typeof ListInstancesCommand === "function");
assert(typeof ListInstances$ === "object");
assert(typeof ListManagedPoliciesInPermissionSetCommand === "function");
assert(typeof ListManagedPoliciesInPermissionSet$ === "object");
assert(typeof ListPermissionSetProvisioningStatusCommand === "function");
assert(typeof ListPermissionSetProvisioningStatus$ === "object");
assert(typeof ListPermissionSetsCommand === "function");
assert(typeof ListPermissionSets$ === "object");
assert(typeof ListPermissionSetsProvisionedToAccountCommand === "function");
assert(typeof ListPermissionSetsProvisionedToAccount$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTrustedTokenIssuersCommand === "function");
assert(typeof ListTrustedTokenIssuers$ === "object");
assert(typeof ProvisionPermissionSetCommand === "function");
assert(typeof ProvisionPermissionSet$ === "object");
assert(typeof PutApplicationAccessScopeCommand === "function");
assert(typeof PutApplicationAccessScope$ === "object");
assert(typeof PutApplicationAssignmentConfigurationCommand === "function");
assert(typeof PutApplicationAssignmentConfiguration$ === "object");
assert(typeof PutApplicationAuthenticationMethodCommand === "function");
assert(typeof PutApplicationAuthenticationMethod$ === "object");
assert(typeof PutApplicationGrantCommand === "function");
assert(typeof PutApplicationGrant$ === "object");
assert(typeof PutApplicationSessionConfigurationCommand === "function");
assert(typeof PutApplicationSessionConfiguration$ === "object");
assert(typeof PutInlinePolicyToPermissionSetCommand === "function");
assert(typeof PutInlinePolicyToPermissionSet$ === "object");
assert(typeof PutPermissionsBoundaryToPermissionSetCommand === "function");
assert(typeof PutPermissionsBoundaryToPermissionSet$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateInstanceCommand === "function");
assert(typeof UpdateInstance$ === "object");
assert(typeof UpdateInstanceAccessControlAttributeConfigurationCommand === "function");
assert(typeof UpdateInstanceAccessControlAttributeConfiguration$ === "object");
assert(typeof UpdatePermissionSetCommand === "function");
assert(typeof UpdatePermissionSet$ === "object");
assert(typeof UpdateTrustedTokenIssuerCommand === "function");
assert(typeof UpdateTrustedTokenIssuer$ === "object");
// structural schemas
assert(typeof AccessControlAttribute$ === "object");
assert(typeof AccessControlAttributeValue$ === "object");
assert(typeof AccountAssignment$ === "object");
assert(typeof AccountAssignmentForPrincipal$ === "object");
assert(typeof AccountAssignmentOperationStatus$ === "object");
assert(typeof AccountAssignmentOperationStatusMetadata$ === "object");
assert(typeof Application$ === "object");
assert(typeof ApplicationAssignment$ === "object");
assert(typeof ApplicationAssignmentForPrincipal$ === "object");
assert(typeof ApplicationProvider$ === "object");
assert(typeof AttachCustomerManagedPolicyReferenceToPermissionSetRequest$ === "object");
assert(typeof AttachCustomerManagedPolicyReferenceToPermissionSetResponse$ === "object");
assert(typeof AttachedManagedPolicy$ === "object");
assert(typeof AttachManagedPolicyToPermissionSetRequest$ === "object");
assert(typeof AttachManagedPolicyToPermissionSetResponse$ === "object");
assert(typeof AuthenticationMethod$ === "object");
assert(typeof AuthenticationMethodItem$ === "object");
assert(typeof AuthorizationCodeGrant$ === "object");
assert(typeof AuthorizedTokenIssuer$ === "object");
assert(typeof CreateAccountAssignmentRequest$ === "object");
assert(typeof CreateAccountAssignmentResponse$ === "object");
assert(typeof CreateApplicationAssignmentRequest$ === "object");
assert(typeof CreateApplicationAssignmentResponse$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CreateInstanceAccessControlAttributeConfigurationRequest$ === "object");
assert(typeof CreateInstanceAccessControlAttributeConfigurationResponse$ === "object");
assert(typeof CreateInstanceRequest$ === "object");
assert(typeof CreateInstanceResponse$ === "object");
assert(typeof CreatePermissionSetRequest$ === "object");
assert(typeof CreatePermissionSetResponse$ === "object");
assert(typeof CreateTrustedTokenIssuerRequest$ === "object");
assert(typeof CreateTrustedTokenIssuerResponse$ === "object");
assert(typeof CustomerManagedPolicyReference$ === "object");
assert(typeof DeleteAccountAssignmentRequest$ === "object");
assert(typeof DeleteAccountAssignmentResponse$ === "object");
assert(typeof DeleteApplicationAccessScopeRequest$ === "object");
assert(typeof DeleteApplicationAssignmentRequest$ === "object");
assert(typeof DeleteApplicationAssignmentResponse$ === "object");
assert(typeof DeleteApplicationAuthenticationMethodRequest$ === "object");
assert(typeof DeleteApplicationGrantRequest$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteApplicationResponse$ === "object");
assert(typeof DeleteInlinePolicyFromPermissionSetRequest$ === "object");
assert(typeof DeleteInlinePolicyFromPermissionSetResponse$ === "object");
assert(typeof DeleteInstanceAccessControlAttributeConfigurationRequest$ === "object");
assert(typeof DeleteInstanceAccessControlAttributeConfigurationResponse$ === "object");
assert(typeof DeleteInstanceRequest$ === "object");
assert(typeof DeleteInstanceResponse$ === "object");
assert(typeof DeletePermissionsBoundaryFromPermissionSetRequest$ === "object");
assert(typeof DeletePermissionsBoundaryFromPermissionSetResponse$ === "object");
assert(typeof DeletePermissionSetRequest$ === "object");
assert(typeof DeletePermissionSetResponse$ === "object");
assert(typeof DeleteTrustedTokenIssuerRequest$ === "object");
assert(typeof DeleteTrustedTokenIssuerResponse$ === "object");
assert(typeof DescribeAccountAssignmentCreationStatusRequest$ === "object");
assert(typeof DescribeAccountAssignmentCreationStatusResponse$ === "object");
assert(typeof DescribeAccountAssignmentDeletionStatusRequest$ === "object");
assert(typeof DescribeAccountAssignmentDeletionStatusResponse$ === "object");
assert(typeof DescribeApplicationAssignmentRequest$ === "object");
assert(typeof DescribeApplicationAssignmentResponse$ === "object");
assert(typeof DescribeApplicationProviderRequest$ === "object");
assert(typeof DescribeApplicationProviderResponse$ === "object");
assert(typeof DescribeApplicationRequest$ === "object");
assert(typeof DescribeApplicationResponse$ === "object");
assert(typeof DescribeInstanceAccessControlAttributeConfigurationRequest$ === "object");
assert(typeof DescribeInstanceAccessControlAttributeConfigurationResponse$ === "object");
assert(typeof DescribeInstanceRequest$ === "object");
assert(typeof DescribeInstanceResponse$ === "object");
assert(typeof DescribePermissionSetProvisioningStatusRequest$ === "object");
assert(typeof DescribePermissionSetProvisioningStatusResponse$ === "object");
assert(typeof DescribePermissionSetRequest$ === "object");
assert(typeof DescribePermissionSetResponse$ === "object");
assert(typeof DescribeTrustedTokenIssuerRequest$ === "object");
assert(typeof DescribeTrustedTokenIssuerResponse$ === "object");
assert(typeof DetachCustomerManagedPolicyReferenceFromPermissionSetRequest$ === "object");
assert(typeof DetachCustomerManagedPolicyReferenceFromPermissionSetResponse$ === "object");
assert(typeof DetachManagedPolicyFromPermissionSetRequest$ === "object");
assert(typeof DetachManagedPolicyFromPermissionSetResponse$ === "object");
assert(typeof DisplayData$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof EncryptionConfigurationDetails$ === "object");
assert(typeof GetApplicationAccessScopeRequest$ === "object");
assert(typeof GetApplicationAccessScopeResponse$ === "object");
assert(typeof GetApplicationAssignmentConfigurationRequest$ === "object");
assert(typeof GetApplicationAssignmentConfigurationResponse$ === "object");
assert(typeof GetApplicationAuthenticationMethodRequest$ === "object");
assert(typeof GetApplicationAuthenticationMethodResponse$ === "object");
assert(typeof GetApplicationGrantRequest$ === "object");
assert(typeof GetApplicationGrantResponse$ === "object");
assert(typeof GetApplicationSessionConfigurationRequest$ === "object");
assert(typeof GetApplicationSessionConfigurationResponse$ === "object");
assert(typeof GetInlinePolicyForPermissionSetRequest$ === "object");
assert(typeof GetInlinePolicyForPermissionSetResponse$ === "object");
assert(typeof GetPermissionsBoundaryForPermissionSetRequest$ === "object");
assert(typeof GetPermissionsBoundaryForPermissionSetResponse$ === "object");
assert(typeof Grant$ === "object");
assert(typeof GrantItem$ === "object");
assert(typeof IamAuthenticationMethod$ === "object");
assert(typeof InstanceAccessControlAttributeConfiguration$ === "object");
assert(typeof InstanceMetadata$ === "object");
assert(typeof JwtBearerGrant$ === "object");
assert(typeof ListAccountAssignmentCreationStatusRequest$ === "object");
assert(typeof ListAccountAssignmentCreationStatusResponse$ === "object");
assert(typeof ListAccountAssignmentDeletionStatusRequest$ === "object");
assert(typeof ListAccountAssignmentDeletionStatusResponse$ === "object");
assert(typeof ListAccountAssignmentsFilter$ === "object");
assert(typeof ListAccountAssignmentsForPrincipalRequest$ === "object");
assert(typeof ListAccountAssignmentsForPrincipalResponse$ === "object");
assert(typeof ListAccountAssignmentsRequest$ === "object");
assert(typeof ListAccountAssignmentsResponse$ === "object");
assert(typeof ListAccountsForProvisionedPermissionSetRequest$ === "object");
assert(typeof ListAccountsForProvisionedPermissionSetResponse$ === "object");
assert(typeof ListApplicationAccessScopesRequest$ === "object");
assert(typeof ListApplicationAccessScopesResponse$ === "object");
assert(typeof ListApplicationAssignmentsFilter$ === "object");
assert(typeof ListApplicationAssignmentsForPrincipalRequest$ === "object");
assert(typeof ListApplicationAssignmentsForPrincipalResponse$ === "object");
assert(typeof ListApplicationAssignmentsRequest$ === "object");
assert(typeof ListApplicationAssignmentsResponse$ === "object");
assert(typeof ListApplicationAuthenticationMethodsRequest$ === "object");
assert(typeof ListApplicationAuthenticationMethodsResponse$ === "object");
assert(typeof ListApplicationGrantsRequest$ === "object");
assert(typeof ListApplicationGrantsResponse$ === "object");
assert(typeof ListApplicationProvidersRequest$ === "object");
assert(typeof ListApplicationProvidersResponse$ === "object");
assert(typeof ListApplicationsFilter$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListCustomerManagedPolicyReferencesInPermissionSetRequest$ === "object");
assert(typeof ListCustomerManagedPolicyReferencesInPermissionSetResponse$ === "object");
assert(typeof ListInstancesRequest$ === "object");
assert(typeof ListInstancesResponse$ === "object");
assert(typeof ListManagedPoliciesInPermissionSetRequest$ === "object");
assert(typeof ListManagedPoliciesInPermissionSetResponse$ === "object");
assert(typeof ListPermissionSetProvisioningStatusRequest$ === "object");
assert(typeof ListPermissionSetProvisioningStatusResponse$ === "object");
assert(typeof ListPermissionSetsProvisionedToAccountRequest$ === "object");
assert(typeof ListPermissionSetsProvisionedToAccountResponse$ === "object");
assert(typeof ListPermissionSetsRequest$ === "object");
assert(typeof ListPermissionSetsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTrustedTokenIssuersRequest$ === "object");
assert(typeof ListTrustedTokenIssuersResponse$ === "object");
assert(typeof OidcJwtConfiguration$ === "object");
assert(typeof OidcJwtUpdateConfiguration$ === "object");
assert(typeof OperationStatusFilter$ === "object");
assert(typeof PermissionsBoundary$ === "object");
assert(typeof PermissionSet$ === "object");
assert(typeof PermissionSetProvisioningStatus$ === "object");
assert(typeof PermissionSetProvisioningStatusMetadata$ === "object");
assert(typeof PortalOptions$ === "object");
assert(typeof ProvisionPermissionSetRequest$ === "object");
assert(typeof ProvisionPermissionSetResponse$ === "object");
assert(typeof PutApplicationAccessScopeRequest$ === "object");
assert(typeof PutApplicationAssignmentConfigurationRequest$ === "object");
assert(typeof PutApplicationAssignmentConfigurationResponse$ === "object");
assert(typeof PutApplicationAuthenticationMethodRequest$ === "object");
assert(typeof PutApplicationGrantRequest$ === "object");
assert(typeof PutApplicationSessionConfigurationRequest$ === "object");
assert(typeof PutApplicationSessionConfigurationResponse$ === "object");
assert(typeof PutInlinePolicyToPermissionSetRequest$ === "object");
assert(typeof PutInlinePolicyToPermissionSetResponse$ === "object");
assert(typeof PutPermissionsBoundaryToPermissionSetRequest$ === "object");
assert(typeof PutPermissionsBoundaryToPermissionSetResponse$ === "object");
assert(typeof RefreshTokenGrant$ === "object");
assert(typeof ResourceServerConfig$ === "object");
assert(typeof ResourceServerScopeDetails$ === "object");
assert(typeof ScopeDetails$ === "object");
assert(typeof SignInOptions$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TokenExchangeGrant$ === "object");
assert(typeof TrustedTokenIssuerConfiguration$ === "object");
assert(typeof TrustedTokenIssuerMetadata$ === "object");
assert(typeof TrustedTokenIssuerUpdateConfiguration$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateApplicationPortalOptions$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateApplicationResponse$ === "object");
assert(typeof UpdateInstanceAccessControlAttributeConfigurationRequest$ === "object");
assert(typeof UpdateInstanceAccessControlAttributeConfigurationResponse$ === "object");
assert(typeof UpdateInstanceRequest$ === "object");
assert(typeof UpdateInstanceResponse$ === "object");
assert(typeof UpdatePermissionSetRequest$ === "object");
assert(typeof UpdatePermissionSetResponse$ === "object");
assert(typeof UpdateTrustedTokenIssuerRequest$ === "object");
assert(typeof UpdateTrustedTokenIssuerResponse$ === "object");
// enums
assert(typeof AccessDeniedExceptionReason === "object");
assert(typeof ApplicationStatus === "object");
assert(typeof ApplicationVisibility === "object");
assert(typeof AuthenticationMethodType === "object");
assert(typeof FederationProtocol === "object");
assert(typeof GrantType === "object");
assert(typeof InstanceAccessControlAttributeConfigurationStatus === "object");
assert(typeof InstanceStatus === "object");
assert(typeof JwksRetrievalOption === "object");
assert(typeof KmsKeyStatus === "object");
assert(typeof KmsKeyType === "object");
assert(typeof PrincipalType === "object");
assert(typeof ProvisioningStatus === "object");
assert(typeof ProvisionTargetType === "object");
assert(typeof ResourceNotFoundExceptionReason === "object");
assert(typeof SignInOrigin === "object");
assert(typeof StatusValues === "object");
assert(typeof TargetType === "object");
assert(typeof ThrottlingExceptionReason === "object");
assert(typeof TrustedTokenIssuerType === "object");
assert(typeof UserBackgroundSessionApplicationStatus === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof SSOAdminServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SSOAdminServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SSOAdminServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SSOAdminServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SSOAdminServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SSOAdminServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SSOAdminServiceException);
assert(typeof ValidationException$ === "object");
assert(SSOAdminServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccountAssignmentCreationStatus === "function");
assert(typeof paginateListAccountAssignmentDeletionStatus === "function");
assert(typeof paginateListAccountAssignments === "function");
assert(typeof paginateListAccountAssignmentsForPrincipal === "function");
assert(typeof paginateListAccountsForProvisionedPermissionSet === "function");
assert(typeof paginateListApplicationAccessScopes === "function");
assert(typeof paginateListApplicationAssignments === "function");
assert(typeof paginateListApplicationAssignmentsForPrincipal === "function");
assert(typeof paginateListApplicationAuthenticationMethods === "function");
assert(typeof paginateListApplicationGrants === "function");
assert(typeof paginateListApplicationProviders === "function");
assert(typeof paginateListApplications === "function");
assert(typeof paginateListCustomerManagedPolicyReferencesInPermissionSet === "function");
assert(typeof paginateListInstances === "function");
assert(typeof paginateListManagedPoliciesInPermissionSet === "function");
assert(typeof paginateListPermissionSetProvisioningStatus === "function");
assert(typeof paginateListPermissionSets === "function");
assert(typeof paginateListPermissionSetsProvisionedToAccount === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListTrustedTokenIssuers === "function");
console.log(`SSOAdmin index test passed.`);
