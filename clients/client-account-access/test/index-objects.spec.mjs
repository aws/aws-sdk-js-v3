import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountAccess,
  AccountAccessClient,
  AccountAccessServiceException,
  AlreadyCreatedException,
  AlreadyCreatedException$,
  ApplicationSummary$,
  ConflictException,
  ConflictException$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  CreateEntitlement$,
  CreateEntitlementCommand,
  CreateEntitlementRequest$,
  CreateEntitlementResponse$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  DeleteApplicationResponse$,
  DeleteEntitlement$,
  DeleteEntitlementCommand,
  DeleteEntitlementRequest$,
  DeleteEntitlementResponse$,
  Entitlement$,
  EntitlementDetails$,
  EntitlementFilter$,
  EntitlementsListMember$,
  EntitlementSummary$,
  ErrorCode,
  ErrorDetails$,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationRequest$,
  GetApplicationResponse$,
  GetEntitlement$,
  GetEntitlementCommand,
  GetEntitlementRequest$,
  GetEntitlementResponse$,
  IdentityCenter$,
  IdentityCenterDetails$,
  IdentityCenterPrincipal$,
  IdentityCenterPrincipalFilter$,
  IdentitySource$,
  IdentitySourceDetails$,
  InternalServerException,
  InternalServerException$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  ListEntitlements$,
  ListEntitlementsCommand,
  ListEntitlementsRequest$,
  ListEntitlementsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateListApplications,
  paginateListEntitlements,
  Principal$,
  PrincipalFilter$,
  PrincipalRoleEntitlement$,
  PrincipalRoleEntitlementDetails$,
  PrincipalRoleEntitlementFilter$,
  PrincipalRoleEntitlementSummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Status,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ValidationException,
  ValidationException$,
  waitForApplicationActive,
  waitUntilApplicationActive,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AccountAccessClient === "function");
assert(typeof AccountAccess === "function");
// commands
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateEntitlementCommand === "function");
assert(typeof CreateEntitlement$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteEntitlementCommand === "function");
assert(typeof DeleteEntitlement$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetEntitlementCommand === "function");
assert(typeof GetEntitlement$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListEntitlementsCommand === "function");
assert(typeof ListEntitlements$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof ApplicationSummary$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CreateEntitlementRequest$ === "object");
assert(typeof CreateEntitlementResponse$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteApplicationResponse$ === "object");
assert(typeof DeleteEntitlementRequest$ === "object");
assert(typeof DeleteEntitlementResponse$ === "object");
assert(typeof Entitlement$ === "object");
assert(typeof EntitlementDetails$ === "object");
assert(typeof EntitlementFilter$ === "object");
assert(typeof EntitlementsListMember$ === "object");
assert(typeof EntitlementSummary$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof GetApplicationRequest$ === "object");
assert(typeof GetApplicationResponse$ === "object");
assert(typeof GetEntitlementRequest$ === "object");
assert(typeof GetEntitlementResponse$ === "object");
assert(typeof IdentityCenter$ === "object");
assert(typeof IdentityCenterDetails$ === "object");
assert(typeof IdentityCenterPrincipal$ === "object");
assert(typeof IdentityCenterPrincipalFilter$ === "object");
assert(typeof IdentitySource$ === "object");
assert(typeof IdentitySourceDetails$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListEntitlementsRequest$ === "object");
assert(typeof ListEntitlementsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Principal$ === "object");
assert(typeof PrincipalFilter$ === "object");
assert(typeof PrincipalRoleEntitlement$ === "object");
assert(typeof PrincipalRoleEntitlementDetails$ === "object");
assert(typeof PrincipalRoleEntitlementFilter$ === "object");
assert(typeof PrincipalRoleEntitlementSummary$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
// enums
assert(typeof ErrorCode === "object");
assert(typeof Status === "object");
// errors
assert(AccessDeniedException.prototype instanceof AccountAccessServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(AlreadyCreatedException.prototype instanceof AccountAccessServiceException);
assert(typeof AlreadyCreatedException$ === "object");
assert(ConflictException.prototype instanceof AccountAccessServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof AccountAccessServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AccountAccessServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof AccountAccessServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof AccountAccessServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof AccountAccessServiceException);
assert(typeof ValidationException$ === "object");
assert(AccountAccessServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForApplicationActive === "function");
assert(typeof waitUntilApplicationActive === "function");
// paginators
assert(typeof paginateListApplications === "function");
assert(typeof paginateListEntitlements === "function");
console.log(`AccountAccess index test passed.`);
