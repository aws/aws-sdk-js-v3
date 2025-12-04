import {
  BatchGetPolicyCommand,
  BatchGetPolicyErrorCode,
  BatchIsAuthorizedCommand,
  BatchIsAuthorizedWithTokenCommand,
  CedarVersion,
  CreateIdentitySourceCommand,
  CreatePolicyCommand,
  CreatePolicyStoreCommand,
  CreatePolicyTemplateCommand,
  Decision,
  DeleteIdentitySourceCommand,
  DeletePolicyCommand,
  DeletePolicyStoreCommand,
  DeletePolicyTemplateCommand,
  DeletionProtection,
  GetIdentitySourceCommand,
  GetPolicyCommand,
  GetPolicyStoreCommand,
  GetPolicyTemplateCommand,
  GetSchemaCommand,
  IsAuthorizedCommand,
  IsAuthorizedWithTokenCommand,
  ListIdentitySourcesCommand,
  ListPoliciesCommand,
  ListPolicyStoresCommand,
  ListPolicyTemplatesCommand,
  ListTagsForResourceCommand,
  OpenIdIssuer,
  PolicyEffect,
  PolicyType,
  PutSchemaCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateIdentitySourceCommand,
  UpdatePolicyCommand,
  UpdatePolicyStoreCommand,
  UpdatePolicyTemplateCommand,
  ValidationMode,
  VerifiedPermissions,
  VerifiedPermissionsClient,
  VerifiedPermissionsServiceException,
  paginateListIdentitySources,
  paginateListPolicies,
  paginateListPolicyStores,
  paginateListPolicyTemplates,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof VerifiedPermissionsClient === "function");
assert(typeof VerifiedPermissions === "function");
// commands
assert(typeof BatchGetPolicyCommand === "function");
assert(typeof BatchIsAuthorizedCommand === "function");
assert(typeof BatchIsAuthorizedWithTokenCommand === "function");
assert(typeof CreateIdentitySourceCommand === "function");
assert(typeof CreatePolicyCommand === "function");
assert(typeof CreatePolicyStoreCommand === "function");
assert(typeof CreatePolicyTemplateCommand === "function");
assert(typeof DeleteIdentitySourceCommand === "function");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePolicyStoreCommand === "function");
assert(typeof DeletePolicyTemplateCommand === "function");
assert(typeof GetIdentitySourceCommand === "function");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicyStoreCommand === "function");
assert(typeof GetPolicyTemplateCommand === "function");
assert(typeof GetSchemaCommand === "function");
assert(typeof IsAuthorizedCommand === "function");
assert(typeof IsAuthorizedWithTokenCommand === "function");
assert(typeof ListIdentitySourcesCommand === "function");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPolicyStoresCommand === "function");
assert(typeof ListPolicyTemplatesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutSchemaCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateIdentitySourceCommand === "function");
assert(typeof UpdatePolicyCommand === "function");
assert(typeof UpdatePolicyStoreCommand === "function");
assert(typeof UpdatePolicyTemplateCommand === "function");
// enums
assert(typeof BatchGetPolicyErrorCode === "object");
assert(typeof CedarVersion === "object");
assert(typeof Decision === "object");
assert(typeof DeletionProtection === "object");
assert(typeof OpenIdIssuer === "object");
assert(typeof PolicyEffect === "object");
assert(typeof PolicyType === "object");
assert(typeof ValidationMode === "object");
// errors
assert(VerifiedPermissionsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListIdentitySources === "function");
assert(typeof paginateListPolicies === "function");
assert(typeof paginateListPolicyStores === "function");
assert(typeof paginateListPolicyTemplates === "function");
console.log(`VerifiedPermissions index test passed.`);
