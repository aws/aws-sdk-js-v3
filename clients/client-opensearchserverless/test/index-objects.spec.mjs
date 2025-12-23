import {
  AccessPolicyDetail$,
  AccessPolicyStats$,
  AccessPolicySummary$,
  AccessPolicyType,
  AccountSettingsDetail$,
  BatchGetCollection$,
  BatchGetCollectionCommand,
  BatchGetCollectionRequest$,
  BatchGetCollectionResponse$,
  BatchGetEffectiveLifecyclePolicy$,
  BatchGetEffectiveLifecyclePolicyCommand,
  BatchGetEffectiveLifecyclePolicyRequest$,
  BatchGetEffectiveLifecyclePolicyResponse$,
  BatchGetLifecyclePolicy$,
  BatchGetLifecyclePolicyCommand,
  BatchGetLifecyclePolicyRequest$,
  BatchGetLifecyclePolicyResponse$,
  BatchGetVpcEndpoint$,
  BatchGetVpcEndpointCommand,
  BatchGetVpcEndpointRequest$,
  BatchGetVpcEndpointResponse$,
  CapacityLimits$,
  CollectionDetail$,
  CollectionErrorDetail$,
  CollectionFilters$,
  CollectionStatus,
  CollectionSummary$,
  CollectionType,
  ConflictException,
  ConflictException$,
  CreateAccessPolicy$,
  CreateAccessPolicyCommand,
  CreateAccessPolicyRequest$,
  CreateAccessPolicyResponse$,
  CreateCollection$,
  CreateCollectionCommand,
  CreateCollectionDetail$,
  CreateCollectionRequest$,
  CreateCollectionResponse$,
  CreateIamIdentityCenterConfigOptions$,
  CreateIndex$,
  CreateIndexCommand,
  CreateIndexRequest$,
  CreateIndexResponse$,
  CreateLifecyclePolicy$,
  CreateLifecyclePolicyCommand,
  CreateLifecyclePolicyRequest$,
  CreateLifecyclePolicyResponse$,
  CreateSecurityConfig$,
  CreateSecurityConfigCommand,
  CreateSecurityConfigRequest$,
  CreateSecurityConfigResponse$,
  CreateSecurityPolicy$,
  CreateSecurityPolicyCommand,
  CreateSecurityPolicyRequest$,
  CreateSecurityPolicyResponse$,
  CreateVpcEndpoint$,
  CreateVpcEndpointCommand,
  CreateVpcEndpointDetail$,
  CreateVpcEndpointRequest$,
  CreateVpcEndpointResponse$,
  DeleteAccessPolicy$,
  DeleteAccessPolicyCommand,
  DeleteAccessPolicyRequest$,
  DeleteAccessPolicyResponse$,
  DeleteCollection$,
  DeleteCollectionCommand,
  DeleteCollectionDetail$,
  DeleteCollectionRequest$,
  DeleteCollectionResponse$,
  DeleteIndex$,
  DeleteIndexCommand,
  DeleteIndexRequest$,
  DeleteIndexResponse$,
  DeleteLifecyclePolicy$,
  DeleteLifecyclePolicyCommand,
  DeleteLifecyclePolicyRequest$,
  DeleteLifecyclePolicyResponse$,
  DeleteSecurityConfig$,
  DeleteSecurityConfigCommand,
  DeleteSecurityConfigRequest$,
  DeleteSecurityConfigResponse$,
  DeleteSecurityPolicy$,
  DeleteSecurityPolicyCommand,
  DeleteSecurityPolicyRequest$,
  DeleteSecurityPolicyResponse$,
  DeleteVpcEndpoint$,
  DeleteVpcEndpointCommand,
  DeleteVpcEndpointDetail$,
  DeleteVpcEndpointRequest$,
  DeleteVpcEndpointResponse$,
  EffectiveLifecyclePolicyDetail$,
  EffectiveLifecyclePolicyErrorDetail$,
  FipsEndpoints$,
  GetAccessPolicy$,
  GetAccessPolicyCommand,
  GetAccessPolicyRequest$,
  GetAccessPolicyResponse$,
  GetAccountSettings$,
  GetAccountSettingsCommand,
  GetAccountSettingsRequest$,
  GetAccountSettingsResponse$,
  GetIndex$,
  GetIndexCommand,
  GetIndexRequest$,
  GetIndexResponse$,
  GetPoliciesStats$,
  GetPoliciesStatsCommand,
  GetPoliciesStatsRequest$,
  GetPoliciesStatsResponse$,
  GetSecurityConfig$,
  GetSecurityConfigCommand,
  GetSecurityConfigRequest$,
  GetSecurityConfigResponse$,
  GetSecurityPolicy$,
  GetSecurityPolicyCommand,
  GetSecurityPolicyRequest$,
  GetSecurityPolicyResponse$,
  IamFederationConfigOptions$,
  IamIdentityCenterConfigOptions$,
  IamIdentityCenterGroupAttribute,
  IamIdentityCenterUserAttribute,
  InternalServerException,
  InternalServerException$,
  LifecyclePolicyDetail$,
  LifecyclePolicyErrorDetail$,
  LifecyclePolicyIdentifier$,
  LifecyclePolicyResourceIdentifier$,
  LifecyclePolicyStats$,
  LifecyclePolicySummary$,
  LifecyclePolicyType,
  ListAccessPolicies$,
  ListAccessPoliciesCommand,
  ListAccessPoliciesRequest$,
  ListAccessPoliciesResponse$,
  ListCollections$,
  ListCollectionsCommand,
  ListCollectionsRequest$,
  ListCollectionsResponse$,
  ListLifecyclePolicies$,
  ListLifecyclePoliciesCommand,
  ListLifecyclePoliciesRequest$,
  ListLifecyclePoliciesResponse$,
  ListSecurityConfigs$,
  ListSecurityConfigsCommand,
  ListSecurityConfigsRequest$,
  ListSecurityConfigsResponse$,
  ListSecurityPolicies$,
  ListSecurityPoliciesCommand,
  ListSecurityPoliciesRequest$,
  ListSecurityPoliciesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListVpcEndpoints$,
  ListVpcEndpointsCommand,
  ListVpcEndpointsRequest$,
  ListVpcEndpointsResponse$,
  OcuLimitExceededException,
  OcuLimitExceededException$,
  OpenSearchServerless,
  OpenSearchServerlessClient,
  OpenSearchServerlessServiceException,
  paginateListAccessPolicies,
  paginateListCollections,
  paginateListLifecyclePolicies,
  paginateListSecurityConfigs,
  paginateListSecurityPolicies,
  paginateListVpcEndpoints,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  SamlConfigOptions$,
  SecurityConfigDetail$,
  SecurityConfigStats$,
  SecurityConfigSummary$,
  SecurityConfigType,
  SecurityPolicyDetail$,
  SecurityPolicyStats$,
  SecurityPolicySummary$,
  SecurityPolicyType,
  ServerlessVectorAccelerationStatus,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StandbyReplicas,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAccessPolicy$,
  UpdateAccessPolicyCommand,
  UpdateAccessPolicyRequest$,
  UpdateAccessPolicyResponse$,
  UpdateAccountSettings$,
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsRequest$,
  UpdateAccountSettingsResponse$,
  UpdateCollection$,
  UpdateCollectionCommand,
  UpdateCollectionDetail$,
  UpdateCollectionRequest$,
  UpdateCollectionResponse$,
  UpdateIamIdentityCenterConfigOptions$,
  UpdateIndex$,
  UpdateIndexCommand,
  UpdateIndexRequest$,
  UpdateIndexResponse$,
  UpdateLifecyclePolicy$,
  UpdateLifecyclePolicyCommand,
  UpdateLifecyclePolicyRequest$,
  UpdateLifecyclePolicyResponse$,
  UpdateSecurityConfig$,
  UpdateSecurityConfigCommand,
  UpdateSecurityConfigRequest$,
  UpdateSecurityConfigResponse$,
  UpdateSecurityPolicy$,
  UpdateSecurityPolicyCommand,
  UpdateSecurityPolicyRequest$,
  UpdateSecurityPolicyResponse$,
  UpdateVpcEndpoint$,
  UpdateVpcEndpointCommand,
  UpdateVpcEndpointDetail$,
  UpdateVpcEndpointRequest$,
  UpdateVpcEndpointResponse$,
  ValidationException,
  ValidationException$,
  VectorOptions$,
  VpcEndpointDetail$,
  VpcEndpointErrorDetail$,
  VpcEndpointFilters$,
  VpcEndpointStatus,
  VpcEndpointSummary$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OpenSearchServerlessClient === "function");
assert(typeof OpenSearchServerless === "function");
// commands
assert(typeof BatchGetCollectionCommand === "function");
assert(typeof BatchGetCollection$ === "object");
assert(typeof BatchGetEffectiveLifecyclePolicyCommand === "function");
assert(typeof BatchGetEffectiveLifecyclePolicy$ === "object");
assert(typeof BatchGetLifecyclePolicyCommand === "function");
assert(typeof BatchGetLifecyclePolicy$ === "object");
assert(typeof BatchGetVpcEndpointCommand === "function");
assert(typeof BatchGetVpcEndpoint$ === "object");
assert(typeof CreateAccessPolicyCommand === "function");
assert(typeof CreateAccessPolicy$ === "object");
assert(typeof CreateCollectionCommand === "function");
assert(typeof CreateCollection$ === "object");
assert(typeof CreateIndexCommand === "function");
assert(typeof CreateIndex$ === "object");
assert(typeof CreateLifecyclePolicyCommand === "function");
assert(typeof CreateLifecyclePolicy$ === "object");
assert(typeof CreateSecurityConfigCommand === "function");
assert(typeof CreateSecurityConfig$ === "object");
assert(typeof CreateSecurityPolicyCommand === "function");
assert(typeof CreateSecurityPolicy$ === "object");
assert(typeof CreateVpcEndpointCommand === "function");
assert(typeof CreateVpcEndpoint$ === "object");
assert(typeof DeleteAccessPolicyCommand === "function");
assert(typeof DeleteAccessPolicy$ === "object");
assert(typeof DeleteCollectionCommand === "function");
assert(typeof DeleteCollection$ === "object");
assert(typeof DeleteIndexCommand === "function");
assert(typeof DeleteIndex$ === "object");
assert(typeof DeleteLifecyclePolicyCommand === "function");
assert(typeof DeleteLifecyclePolicy$ === "object");
assert(typeof DeleteSecurityConfigCommand === "function");
assert(typeof DeleteSecurityConfig$ === "object");
assert(typeof DeleteSecurityPolicyCommand === "function");
assert(typeof DeleteSecurityPolicy$ === "object");
assert(typeof DeleteVpcEndpointCommand === "function");
assert(typeof DeleteVpcEndpoint$ === "object");
assert(typeof GetAccessPolicyCommand === "function");
assert(typeof GetAccessPolicy$ === "object");
assert(typeof GetAccountSettingsCommand === "function");
assert(typeof GetAccountSettings$ === "object");
assert(typeof GetIndexCommand === "function");
assert(typeof GetIndex$ === "object");
assert(typeof GetPoliciesStatsCommand === "function");
assert(typeof GetPoliciesStats$ === "object");
assert(typeof GetSecurityConfigCommand === "function");
assert(typeof GetSecurityConfig$ === "object");
assert(typeof GetSecurityPolicyCommand === "function");
assert(typeof GetSecurityPolicy$ === "object");
assert(typeof ListAccessPoliciesCommand === "function");
assert(typeof ListAccessPolicies$ === "object");
assert(typeof ListCollectionsCommand === "function");
assert(typeof ListCollections$ === "object");
assert(typeof ListLifecyclePoliciesCommand === "function");
assert(typeof ListLifecyclePolicies$ === "object");
assert(typeof ListSecurityConfigsCommand === "function");
assert(typeof ListSecurityConfigs$ === "object");
assert(typeof ListSecurityPoliciesCommand === "function");
assert(typeof ListSecurityPolicies$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListVpcEndpointsCommand === "function");
assert(typeof ListVpcEndpoints$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccessPolicyCommand === "function");
assert(typeof UpdateAccessPolicy$ === "object");
assert(typeof UpdateAccountSettingsCommand === "function");
assert(typeof UpdateAccountSettings$ === "object");
assert(typeof UpdateCollectionCommand === "function");
assert(typeof UpdateCollection$ === "object");
assert(typeof UpdateIndexCommand === "function");
assert(typeof UpdateIndex$ === "object");
assert(typeof UpdateLifecyclePolicyCommand === "function");
assert(typeof UpdateLifecyclePolicy$ === "object");
assert(typeof UpdateSecurityConfigCommand === "function");
assert(typeof UpdateSecurityConfig$ === "object");
assert(typeof UpdateSecurityPolicyCommand === "function");
assert(typeof UpdateSecurityPolicy$ === "object");
assert(typeof UpdateVpcEndpointCommand === "function");
assert(typeof UpdateVpcEndpoint$ === "object");
// structural schemas
assert(typeof AccessPolicyDetail$ === "object");
assert(typeof AccessPolicyStats$ === "object");
assert(typeof AccessPolicySummary$ === "object");
assert(typeof AccountSettingsDetail$ === "object");
assert(typeof BatchGetCollectionRequest$ === "object");
assert(typeof BatchGetCollectionResponse$ === "object");
assert(typeof BatchGetEffectiveLifecyclePolicyRequest$ === "object");
assert(typeof BatchGetEffectiveLifecyclePolicyResponse$ === "object");
assert(typeof BatchGetLifecyclePolicyRequest$ === "object");
assert(typeof BatchGetLifecyclePolicyResponse$ === "object");
assert(typeof BatchGetVpcEndpointRequest$ === "object");
assert(typeof BatchGetVpcEndpointResponse$ === "object");
assert(typeof CapacityLimits$ === "object");
assert(typeof CollectionDetail$ === "object");
assert(typeof CollectionErrorDetail$ === "object");
assert(typeof CollectionFilters$ === "object");
assert(typeof CollectionSummary$ === "object");
assert(typeof CreateAccessPolicyRequest$ === "object");
assert(typeof CreateAccessPolicyResponse$ === "object");
assert(typeof CreateCollectionDetail$ === "object");
assert(typeof CreateCollectionRequest$ === "object");
assert(typeof CreateCollectionResponse$ === "object");
assert(typeof CreateIamIdentityCenterConfigOptions$ === "object");
assert(typeof CreateIndexRequest$ === "object");
assert(typeof CreateIndexResponse$ === "object");
assert(typeof CreateLifecyclePolicyRequest$ === "object");
assert(typeof CreateLifecyclePolicyResponse$ === "object");
assert(typeof CreateSecurityConfigRequest$ === "object");
assert(typeof CreateSecurityConfigResponse$ === "object");
assert(typeof CreateSecurityPolicyRequest$ === "object");
assert(typeof CreateSecurityPolicyResponse$ === "object");
assert(typeof CreateVpcEndpointDetail$ === "object");
assert(typeof CreateVpcEndpointRequest$ === "object");
assert(typeof CreateVpcEndpointResponse$ === "object");
assert(typeof DeleteAccessPolicyRequest$ === "object");
assert(typeof DeleteAccessPolicyResponse$ === "object");
assert(typeof DeleteCollectionDetail$ === "object");
assert(typeof DeleteCollectionRequest$ === "object");
assert(typeof DeleteCollectionResponse$ === "object");
assert(typeof DeleteIndexRequest$ === "object");
assert(typeof DeleteIndexResponse$ === "object");
assert(typeof DeleteLifecyclePolicyRequest$ === "object");
assert(typeof DeleteLifecyclePolicyResponse$ === "object");
assert(typeof DeleteSecurityConfigRequest$ === "object");
assert(typeof DeleteSecurityConfigResponse$ === "object");
assert(typeof DeleteSecurityPolicyRequest$ === "object");
assert(typeof DeleteSecurityPolicyResponse$ === "object");
assert(typeof DeleteVpcEndpointDetail$ === "object");
assert(typeof DeleteVpcEndpointRequest$ === "object");
assert(typeof DeleteVpcEndpointResponse$ === "object");
assert(typeof EffectiveLifecyclePolicyDetail$ === "object");
assert(typeof EffectiveLifecyclePolicyErrorDetail$ === "object");
assert(typeof FipsEndpoints$ === "object");
assert(typeof GetAccessPolicyRequest$ === "object");
assert(typeof GetAccessPolicyResponse$ === "object");
assert(typeof GetAccountSettingsRequest$ === "object");
assert(typeof GetAccountSettingsResponse$ === "object");
assert(typeof GetIndexRequest$ === "object");
assert(typeof GetIndexResponse$ === "object");
assert(typeof GetPoliciesStatsRequest$ === "object");
assert(typeof GetPoliciesStatsResponse$ === "object");
assert(typeof GetSecurityConfigRequest$ === "object");
assert(typeof GetSecurityConfigResponse$ === "object");
assert(typeof GetSecurityPolicyRequest$ === "object");
assert(typeof GetSecurityPolicyResponse$ === "object");
assert(typeof IamFederationConfigOptions$ === "object");
assert(typeof IamIdentityCenterConfigOptions$ === "object");
assert(typeof LifecyclePolicyDetail$ === "object");
assert(typeof LifecyclePolicyErrorDetail$ === "object");
assert(typeof LifecyclePolicyIdentifier$ === "object");
assert(typeof LifecyclePolicyResourceIdentifier$ === "object");
assert(typeof LifecyclePolicyStats$ === "object");
assert(typeof LifecyclePolicySummary$ === "object");
assert(typeof ListAccessPoliciesRequest$ === "object");
assert(typeof ListAccessPoliciesResponse$ === "object");
assert(typeof ListCollectionsRequest$ === "object");
assert(typeof ListCollectionsResponse$ === "object");
assert(typeof ListLifecyclePoliciesRequest$ === "object");
assert(typeof ListLifecyclePoliciesResponse$ === "object");
assert(typeof ListSecurityConfigsRequest$ === "object");
assert(typeof ListSecurityConfigsResponse$ === "object");
assert(typeof ListSecurityPoliciesRequest$ === "object");
assert(typeof ListSecurityPoliciesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListVpcEndpointsRequest$ === "object");
assert(typeof ListVpcEndpointsResponse$ === "object");
assert(typeof SamlConfigOptions$ === "object");
assert(typeof SecurityConfigDetail$ === "object");
assert(typeof SecurityConfigStats$ === "object");
assert(typeof SecurityConfigSummary$ === "object");
assert(typeof SecurityPolicyDetail$ === "object");
assert(typeof SecurityPolicyStats$ === "object");
assert(typeof SecurityPolicySummary$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAccessPolicyRequest$ === "object");
assert(typeof UpdateAccessPolicyResponse$ === "object");
assert(typeof UpdateAccountSettingsRequest$ === "object");
assert(typeof UpdateAccountSettingsResponse$ === "object");
assert(typeof UpdateCollectionDetail$ === "object");
assert(typeof UpdateCollectionRequest$ === "object");
assert(typeof UpdateCollectionResponse$ === "object");
assert(typeof UpdateIamIdentityCenterConfigOptions$ === "object");
assert(typeof UpdateIndexRequest$ === "object");
assert(typeof UpdateIndexResponse$ === "object");
assert(typeof UpdateLifecyclePolicyRequest$ === "object");
assert(typeof UpdateLifecyclePolicyResponse$ === "object");
assert(typeof UpdateSecurityConfigRequest$ === "object");
assert(typeof UpdateSecurityConfigResponse$ === "object");
assert(typeof UpdateSecurityPolicyRequest$ === "object");
assert(typeof UpdateSecurityPolicyResponse$ === "object");
assert(typeof UpdateVpcEndpointDetail$ === "object");
assert(typeof UpdateVpcEndpointRequest$ === "object");
assert(typeof UpdateVpcEndpointResponse$ === "object");
assert(typeof VectorOptions$ === "object");
assert(typeof VpcEndpointDetail$ === "object");
assert(typeof VpcEndpointErrorDetail$ === "object");
assert(typeof VpcEndpointFilters$ === "object");
assert(typeof VpcEndpointSummary$ === "object");
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
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof OpenSearchServerlessServiceException);
assert(typeof InternalServerException$ === "object");
assert(OcuLimitExceededException.prototype instanceof OpenSearchServerlessServiceException);
assert(typeof OcuLimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof OpenSearchServerlessServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof OpenSearchServerlessServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ValidationException.prototype instanceof OpenSearchServerlessServiceException);
assert(typeof ValidationException$ === "object");
assert(OpenSearchServerlessServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccessPolicies === "function");
assert(typeof paginateListCollections === "function");
assert(typeof paginateListLifecyclePolicies === "function");
assert(typeof paginateListSecurityConfigs === "function");
assert(typeof paginateListSecurityPolicies === "function");
assert(typeof paginateListVpcEndpoints === "function");
console.log(`OpenSearchServerless index test passed.`);
