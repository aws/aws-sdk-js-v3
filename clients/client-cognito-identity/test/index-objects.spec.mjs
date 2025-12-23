import {
  AmbiguousRoleResolutionType,
  CognitoIdentity,
  CognitoIdentityClient,
  CognitoIdentityProvider$,
  CognitoIdentityServiceException,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  CreateIdentityPool$,
  CreateIdentityPoolCommand,
  CreateIdentityPoolInput$,
  Credentials$,
  DeleteIdentities$,
  DeleteIdentitiesCommand,
  DeleteIdentitiesInput$,
  DeleteIdentitiesResponse$,
  DeleteIdentityPool$,
  DeleteIdentityPoolCommand,
  DeleteIdentityPoolInput$,
  DescribeIdentity$,
  DescribeIdentityCommand,
  DescribeIdentityInput$,
  DescribeIdentityPool$,
  DescribeIdentityPoolCommand,
  DescribeIdentityPoolInput$,
  DeveloperUserAlreadyRegisteredException,
  DeveloperUserAlreadyRegisteredException$,
  ErrorCode,
  ExternalServiceException,
  ExternalServiceException$,
  GetCredentialsForIdentity$,
  GetCredentialsForIdentityCommand,
  GetCredentialsForIdentityInput$,
  GetCredentialsForIdentityResponse$,
  GetId$,
  GetIdCommand,
  GetIdentityPoolRoles$,
  GetIdentityPoolRolesCommand,
  GetIdentityPoolRolesInput$,
  GetIdentityPoolRolesResponse$,
  GetIdInput$,
  GetIdResponse$,
  GetOpenIdToken$,
  GetOpenIdTokenCommand,
  GetOpenIdTokenForDeveloperIdentity$,
  GetOpenIdTokenForDeveloperIdentityCommand,
  GetOpenIdTokenForDeveloperIdentityInput$,
  GetOpenIdTokenForDeveloperIdentityResponse$,
  GetOpenIdTokenInput$,
  GetOpenIdTokenResponse$,
  GetPrincipalTagAttributeMap$,
  GetPrincipalTagAttributeMapCommand,
  GetPrincipalTagAttributeMapInput$,
  GetPrincipalTagAttributeMapResponse$,
  IdentityDescription$,
  IdentityPool$,
  IdentityPoolShortDescription$,
  InternalErrorException,
  InternalErrorException$,
  InvalidIdentityPoolConfigurationException,
  InvalidIdentityPoolConfigurationException$,
  InvalidParameterException,
  InvalidParameterException$,
  LimitExceededException,
  LimitExceededException$,
  ListIdentities$,
  ListIdentitiesCommand,
  ListIdentitiesInput$,
  ListIdentitiesResponse$,
  ListIdentityPools$,
  ListIdentityPoolsCommand,
  ListIdentityPoolsInput$,
  ListIdentityPoolsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceResponse$,
  LookupDeveloperIdentity$,
  LookupDeveloperIdentityCommand,
  LookupDeveloperIdentityInput$,
  LookupDeveloperIdentityResponse$,
  MappingRule$,
  MappingRuleMatchType,
  MergeDeveloperIdentities$,
  MergeDeveloperIdentitiesCommand,
  MergeDeveloperIdentitiesInput$,
  MergeDeveloperIdentitiesResponse$,
  NotAuthorizedException,
  NotAuthorizedException$,
  paginateListIdentityPools,
  ResourceConflictException,
  ResourceConflictException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RoleMapping$,
  RoleMappingType,
  RulesConfigurationType$,
  SetIdentityPoolRoles$,
  SetIdentityPoolRolesCommand,
  SetIdentityPoolRolesInput$,
  SetPrincipalTagAttributeMap$,
  SetPrincipalTagAttributeMapCommand,
  SetPrincipalTagAttributeMapInput$,
  SetPrincipalTagAttributeMapResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceResponse$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UnlinkDeveloperIdentity$,
  UnlinkDeveloperIdentityCommand,
  UnlinkDeveloperIdentityInput$,
  UnlinkIdentity$,
  UnlinkIdentityCommand,
  UnlinkIdentityInput$,
  UnprocessedIdentityId$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceResponse$,
  UpdateIdentityPool$,
  UpdateIdentityPoolCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CognitoIdentityClient === "function");
assert(typeof CognitoIdentity === "function");
// commands
assert(typeof CreateIdentityPoolCommand === "function");
assert(typeof CreateIdentityPool$ === "object");
assert(typeof DeleteIdentitiesCommand === "function");
assert(typeof DeleteIdentities$ === "object");
assert(typeof DeleteIdentityPoolCommand === "function");
assert(typeof DeleteIdentityPool$ === "object");
assert(typeof DescribeIdentityCommand === "function");
assert(typeof DescribeIdentity$ === "object");
assert(typeof DescribeIdentityPoolCommand === "function");
assert(typeof DescribeIdentityPool$ === "object");
assert(typeof GetCredentialsForIdentityCommand === "function");
assert(typeof GetCredentialsForIdentity$ === "object");
assert(typeof GetIdCommand === "function");
assert(typeof GetId$ === "object");
assert(typeof GetIdentityPoolRolesCommand === "function");
assert(typeof GetIdentityPoolRoles$ === "object");
assert(typeof GetOpenIdTokenCommand === "function");
assert(typeof GetOpenIdToken$ === "object");
assert(typeof GetOpenIdTokenForDeveloperIdentityCommand === "function");
assert(typeof GetOpenIdTokenForDeveloperIdentity$ === "object");
assert(typeof GetPrincipalTagAttributeMapCommand === "function");
assert(typeof GetPrincipalTagAttributeMap$ === "object");
assert(typeof ListIdentitiesCommand === "function");
assert(typeof ListIdentities$ === "object");
assert(typeof ListIdentityPoolsCommand === "function");
assert(typeof ListIdentityPools$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof LookupDeveloperIdentityCommand === "function");
assert(typeof LookupDeveloperIdentity$ === "object");
assert(typeof MergeDeveloperIdentitiesCommand === "function");
assert(typeof MergeDeveloperIdentities$ === "object");
assert(typeof SetIdentityPoolRolesCommand === "function");
assert(typeof SetIdentityPoolRoles$ === "object");
assert(typeof SetPrincipalTagAttributeMapCommand === "function");
assert(typeof SetPrincipalTagAttributeMap$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UnlinkDeveloperIdentityCommand === "function");
assert(typeof UnlinkDeveloperIdentity$ === "object");
assert(typeof UnlinkIdentityCommand === "function");
assert(typeof UnlinkIdentity$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateIdentityPoolCommand === "function");
assert(typeof UpdateIdentityPool$ === "object");
// structural schemas
assert(typeof CognitoIdentityProvider$ === "object");
assert(typeof CreateIdentityPoolInput$ === "object");
assert(typeof Credentials$ === "object");
assert(typeof DeleteIdentitiesInput$ === "object");
assert(typeof DeleteIdentitiesResponse$ === "object");
assert(typeof DeleteIdentityPoolInput$ === "object");
assert(typeof DescribeIdentityInput$ === "object");
assert(typeof DescribeIdentityPoolInput$ === "object");
assert(typeof GetCredentialsForIdentityInput$ === "object");
assert(typeof GetCredentialsForIdentityResponse$ === "object");
assert(typeof GetIdentityPoolRolesInput$ === "object");
assert(typeof GetIdentityPoolRolesResponse$ === "object");
assert(typeof GetIdInput$ === "object");
assert(typeof GetIdResponse$ === "object");
assert(typeof GetOpenIdTokenForDeveloperIdentityInput$ === "object");
assert(typeof GetOpenIdTokenForDeveloperIdentityResponse$ === "object");
assert(typeof GetOpenIdTokenInput$ === "object");
assert(typeof GetOpenIdTokenResponse$ === "object");
assert(typeof GetPrincipalTagAttributeMapInput$ === "object");
assert(typeof GetPrincipalTagAttributeMapResponse$ === "object");
assert(typeof IdentityDescription$ === "object");
assert(typeof IdentityPool$ === "object");
assert(typeof IdentityPoolShortDescription$ === "object");
assert(typeof ListIdentitiesInput$ === "object");
assert(typeof ListIdentitiesResponse$ === "object");
assert(typeof ListIdentityPoolsInput$ === "object");
assert(typeof ListIdentityPoolsResponse$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LookupDeveloperIdentityInput$ === "object");
assert(typeof LookupDeveloperIdentityResponse$ === "object");
assert(typeof MappingRule$ === "object");
assert(typeof MergeDeveloperIdentitiesInput$ === "object");
assert(typeof MergeDeveloperIdentitiesResponse$ === "object");
assert(typeof RoleMapping$ === "object");
assert(typeof RulesConfigurationType$ === "object");
assert(typeof SetIdentityPoolRolesInput$ === "object");
assert(typeof SetPrincipalTagAttributeMapInput$ === "object");
assert(typeof SetPrincipalTagAttributeMapResponse$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UnlinkDeveloperIdentityInput$ === "object");
assert(typeof UnlinkIdentityInput$ === "object");
assert(typeof UnprocessedIdentityId$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceResponse$ === "object");
// enums
assert(typeof AmbiguousRoleResolutionType === "object");
assert(typeof ErrorCode === "object");
assert(typeof MappingRuleMatchType === "object");
assert(typeof RoleMappingType === "object");
// errors
assert(ConcurrentModificationException.prototype instanceof CognitoIdentityServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(DeveloperUserAlreadyRegisteredException.prototype instanceof CognitoIdentityServiceException);
assert(typeof DeveloperUserAlreadyRegisteredException$ === "object");
assert(ExternalServiceException.prototype instanceof CognitoIdentityServiceException);
assert(typeof ExternalServiceException$ === "object");
assert(InternalErrorException.prototype instanceof CognitoIdentityServiceException);
assert(typeof InternalErrorException$ === "object");
assert(InvalidIdentityPoolConfigurationException.prototype instanceof CognitoIdentityServiceException);
assert(typeof InvalidIdentityPoolConfigurationException$ === "object");
assert(InvalidParameterException.prototype instanceof CognitoIdentityServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(LimitExceededException.prototype instanceof CognitoIdentityServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotAuthorizedException.prototype instanceof CognitoIdentityServiceException);
assert(typeof NotAuthorizedException$ === "object");
assert(ResourceConflictException.prototype instanceof CognitoIdentityServiceException);
assert(typeof ResourceConflictException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CognitoIdentityServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TooManyRequestsException.prototype instanceof CognitoIdentityServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(CognitoIdentityServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListIdentityPools === "function");
console.log(`CognitoIdentity index test passed.`);
