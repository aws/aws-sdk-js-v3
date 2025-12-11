import {
  AccessPolicyType,
  BatchGetCollectionCommand,
  BatchGetEffectiveLifecyclePolicyCommand,
  BatchGetLifecyclePolicyCommand,
  BatchGetVpcEndpointCommand,
  CollectionStatus,
  CollectionType,
  ConflictException,
  CreateAccessPolicyCommand,
  CreateCollectionCommand,
  CreateIndexCommand,
  CreateLifecyclePolicyCommand,
  CreateSecurityConfigCommand,
  CreateSecurityPolicyCommand,
  CreateVpcEndpointCommand,
  DeleteAccessPolicyCommand,
  DeleteCollectionCommand,
  DeleteIndexCommand,
  DeleteLifecyclePolicyCommand,
  DeleteSecurityConfigCommand,
  DeleteSecurityPolicyCommand,
  DeleteVpcEndpointCommand,
  GetAccessPolicyCommand,
  GetAccountSettingsCommand,
  GetIndexCommand,
  GetPoliciesStatsCommand,
  GetSecurityConfigCommand,
  GetSecurityPolicyCommand,
  IamIdentityCenterGroupAttribute,
  IamIdentityCenterUserAttribute,
  InternalServerException,
  LifecyclePolicyType,
  ListAccessPoliciesCommand,
  ListCollectionsCommand,
  ListLifecyclePoliciesCommand,
  ListSecurityConfigsCommand,
  ListSecurityPoliciesCommand,
  ListTagsForResourceCommand,
  ListVpcEndpointsCommand,
  OcuLimitExceededException,
  OpenSearchServerless,
  OpenSearchServerlessClient,
  OpenSearchServerlessServiceException,
  ResourceNotFoundException,
  ResourceType,
  SecurityConfigType,
  SecurityPolicyType,
  ServerlessVectorAccelerationStatus,
  ServiceQuotaExceededException,
  StandbyReplicas,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccessPolicyCommand,
  UpdateAccountSettingsCommand,
  UpdateCollectionCommand,
  UpdateIndexCommand,
  UpdateLifecyclePolicyCommand,
  UpdateSecurityConfigCommand,
  UpdateSecurityPolicyCommand,
  UpdateVpcEndpointCommand,
  ValidationException,
  VpcEndpointStatus,
  paginateListAccessPolicies,
  paginateListCollections,
  paginateListLifecyclePolicies,
  paginateListSecurityConfigs,
  paginateListSecurityPolicies,
  paginateListVpcEndpoints,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OpenSearchServerlessClient === "function");
assert(typeof OpenSearchServerless === "function");
// commands
assert(typeof BatchGetCollectionCommand === "function");
assert(typeof BatchGetEffectiveLifecyclePolicyCommand === "function");
assert(typeof BatchGetLifecyclePolicyCommand === "function");
assert(typeof BatchGetVpcEndpointCommand === "function");
assert(typeof CreateAccessPolicyCommand === "function");
assert(typeof CreateCollectionCommand === "function");
assert(typeof CreateIndexCommand === "function");
assert(typeof CreateLifecyclePolicyCommand === "function");
assert(typeof CreateSecurityConfigCommand === "function");
assert(typeof CreateSecurityPolicyCommand === "function");
assert(typeof CreateVpcEndpointCommand === "function");
assert(typeof DeleteAccessPolicyCommand === "function");
assert(typeof DeleteCollectionCommand === "function");
assert(typeof DeleteIndexCommand === "function");
assert(typeof DeleteLifecyclePolicyCommand === "function");
assert(typeof DeleteSecurityConfigCommand === "function");
assert(typeof DeleteSecurityPolicyCommand === "function");
assert(typeof DeleteVpcEndpointCommand === "function");
assert(typeof GetAccessPolicyCommand === "function");
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetIndexCommand === "function");
assert(typeof GetPoliciesStatsCommand === "function");
assert(typeof GetSecurityConfigCommand === "function");
assert(typeof GetSecurityPolicyCommand === "function");
assert(typeof ListAccessPoliciesCommand === "function");
assert(typeof ListCollectionsCommand === "function");
assert(typeof ListLifecyclePoliciesCommand === "function");
assert(typeof ListSecurityConfigsCommand === "function");
assert(typeof ListSecurityPoliciesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListVpcEndpointsCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccessPolicyCommand === "function");
assert(typeof UpdateAccountSettingsCommand === "function");
assert(typeof UpdateCollectionCommand === "function");
assert(typeof UpdateIndexCommand === "function");
assert(typeof UpdateLifecyclePolicyCommand === "function");
assert(typeof UpdateSecurityConfigCommand === "function");
assert(typeof UpdateSecurityPolicyCommand === "function");
assert(typeof UpdateVpcEndpointCommand === "function");
// enums
assert(typeof AccessPolicyType === "object");
assert(typeof CollectionStatus === "object");
assert(typeof CollectionType === "object");
assert(typeof IamIdentityCenterGroupAttribute === "object");
assert(typeof IamIdentityCenterUserAttribute === "object");
assert(typeof LifecyclePolicyType === "object");
assert(typeof ResourceType === "object");
assert(typeof SecurityConfigType === "object");
assert(typeof SecurityPolicyType === "object");
assert(typeof ServerlessVectorAccelerationStatus === "object");
assert(typeof StandbyReplicas === "object");
assert(typeof VpcEndpointStatus === "object");
// errors
assert(ConflictException.prototype instanceof OpenSearchServerlessServiceException);
assert(InternalServerException.prototype instanceof OpenSearchServerlessServiceException);
assert(OcuLimitExceededException.prototype instanceof OpenSearchServerlessServiceException);
assert(ResourceNotFoundException.prototype instanceof OpenSearchServerlessServiceException);
assert(ServiceQuotaExceededException.prototype instanceof OpenSearchServerlessServiceException);
assert(ValidationException.prototype instanceof OpenSearchServerlessServiceException);
assert(OpenSearchServerlessServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccessPolicies === "function");
assert(typeof paginateListCollections === "function");
assert(typeof paginateListLifecyclePolicies === "function");
assert(typeof paginateListSecurityConfigs === "function");
assert(typeof paginateListSecurityPolicies === "function");
assert(typeof paginateListVpcEndpoints === "function");
console.log(`OpenSearchServerless index test passed.`);
