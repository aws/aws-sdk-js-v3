import {
  AmbiguousRoleResolutionType,
  CognitoIdentity,
  CognitoIdentityClient,
  CognitoIdentityServiceException,
  CreateIdentityPoolCommand,
  DeleteIdentitiesCommand,
  DeleteIdentityPoolCommand,
  DescribeIdentityCommand,
  DescribeIdentityPoolCommand,
  ErrorCode,
  GetCredentialsForIdentityCommand,
  GetIdCommand,
  GetIdentityPoolRolesCommand,
  GetOpenIdTokenCommand,
  GetOpenIdTokenForDeveloperIdentityCommand,
  GetPrincipalTagAttributeMapCommand,
  ListIdentitiesCommand,
  ListIdentityPoolsCommand,
  ListTagsForResourceCommand,
  LookupDeveloperIdentityCommand,
  MappingRuleMatchType,
  MergeDeveloperIdentitiesCommand,
  RoleMappingType,
  SetIdentityPoolRolesCommand,
  SetPrincipalTagAttributeMapCommand,
  TagResourceCommand,
  UnlinkDeveloperIdentityCommand,
  UnlinkIdentityCommand,
  UntagResourceCommand,
  UpdateIdentityPoolCommand,
  paginateListIdentityPools,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CognitoIdentityClient === "function")
assert(typeof CognitoIdentity === "function")
// commands
assert(typeof CreateIdentityPoolCommand === "function")
assert(typeof DeleteIdentitiesCommand === "function")
assert(typeof DeleteIdentityPoolCommand === "function")
assert(typeof DescribeIdentityCommand === "function")
assert(typeof DescribeIdentityPoolCommand === "function")
assert(typeof GetCredentialsForIdentityCommand === "function")
assert(typeof GetIdCommand === "function")
assert(typeof GetIdentityPoolRolesCommand === "function")
assert(typeof GetOpenIdTokenCommand === "function")
assert(typeof GetOpenIdTokenForDeveloperIdentityCommand === "function")
assert(typeof GetPrincipalTagAttributeMapCommand === "function")
assert(typeof ListIdentitiesCommand === "function")
assert(typeof ListIdentityPoolsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof LookupDeveloperIdentityCommand === "function")
assert(typeof MergeDeveloperIdentitiesCommand === "function")
assert(typeof SetIdentityPoolRolesCommand === "function")
assert(typeof SetPrincipalTagAttributeMapCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UnlinkDeveloperIdentityCommand === "function")
assert(typeof UnlinkIdentityCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateIdentityPoolCommand === "function")
// enums
assert(typeof AmbiguousRoleResolutionType === "object");
assert(typeof ErrorCode === "object");
assert(typeof MappingRuleMatchType === "object");
assert(typeof RoleMappingType === "object");
// errors
assert(CognitoIdentityServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListIdentityPools === "function")
console.log(`CognitoIdentity index test passed.`);
