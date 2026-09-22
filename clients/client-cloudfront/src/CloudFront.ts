// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import { CloudFrontClient } from "./CloudFrontClient";
import {
  type AssociateAliasCommandInput,
  type AssociateAliasCommandOutput,
  AssociateAliasCommand,
} from "./commands/AssociateAliasCommand";
import {
  type AssociateDistributionTenantWebACLCommandInput,
  type AssociateDistributionTenantWebACLCommandOutput,
  AssociateDistributionTenantWebACLCommand,
} from "./commands/AssociateDistributionTenantWebACLCommand";
import {
  type AssociateDistributionWebACLCommandInput,
  type AssociateDistributionWebACLCommandOutput,
  AssociateDistributionWebACLCommand,
} from "./commands/AssociateDistributionWebACLCommand";
import {
  type CopyDistributionCommandInput,
  type CopyDistributionCommandOutput,
  CopyDistributionCommand,
} from "./commands/CopyDistributionCommand";
import {
  type CreateAnycastIpListCommandInput,
  type CreateAnycastIpListCommandOutput,
  CreateAnycastIpListCommand,
} from "./commands/CreateAnycastIpListCommand";
import {
  type CreateCachePolicyCommandInput,
  type CreateCachePolicyCommandOutput,
  CreateCachePolicyCommand,
} from "./commands/CreateCachePolicyCommand";
import {
  type CreateCloudFrontOriginAccessIdentityCommandInput,
  type CreateCloudFrontOriginAccessIdentityCommandOutput,
  CreateCloudFrontOriginAccessIdentityCommand,
} from "./commands/CreateCloudFrontOriginAccessIdentityCommand";
import {
  type CreateConnectionFunctionCommandInput,
  type CreateConnectionFunctionCommandOutput,
  CreateConnectionFunctionCommand,
} from "./commands/CreateConnectionFunctionCommand";
import {
  type CreateConnectionGroupCommandInput,
  type CreateConnectionGroupCommandOutput,
  CreateConnectionGroupCommand,
} from "./commands/CreateConnectionGroupCommand";
import {
  type CreateContinuousDeploymentPolicyCommandInput,
  type CreateContinuousDeploymentPolicyCommandOutput,
  CreateContinuousDeploymentPolicyCommand,
} from "./commands/CreateContinuousDeploymentPolicyCommand";
import {
  type CreateDistributionCommandInput,
  type CreateDistributionCommandOutput,
  CreateDistributionCommand,
} from "./commands/CreateDistributionCommand";
import {
  type CreateDistributionTenantCommandInput,
  type CreateDistributionTenantCommandOutput,
  CreateDistributionTenantCommand,
} from "./commands/CreateDistributionTenantCommand";
import {
  type CreateDistributionWithTagsCommandInput,
  type CreateDistributionWithTagsCommandOutput,
  CreateDistributionWithTagsCommand,
} from "./commands/CreateDistributionWithTagsCommand";
import {
  type CreateFieldLevelEncryptionConfigCommandInput,
  type CreateFieldLevelEncryptionConfigCommandOutput,
  CreateFieldLevelEncryptionConfigCommand,
} from "./commands/CreateFieldLevelEncryptionConfigCommand";
import {
  type CreateFieldLevelEncryptionProfileCommandInput,
  type CreateFieldLevelEncryptionProfileCommandOutput,
  CreateFieldLevelEncryptionProfileCommand,
} from "./commands/CreateFieldLevelEncryptionProfileCommand";
import {
  type CreateFunctionCommandInput,
  type CreateFunctionCommandOutput,
  CreateFunctionCommand,
} from "./commands/CreateFunctionCommand";
import {
  type CreateInvalidationCommandInput,
  type CreateInvalidationCommandOutput,
  CreateInvalidationCommand,
} from "./commands/CreateInvalidationCommand";
import {
  type CreateInvalidationForDistributionTenantCommandInput,
  type CreateInvalidationForDistributionTenantCommandOutput,
  CreateInvalidationForDistributionTenantCommand,
} from "./commands/CreateInvalidationForDistributionTenantCommand";
import {
  type CreateKeyGroupCommandInput,
  type CreateKeyGroupCommandOutput,
  CreateKeyGroupCommand,
} from "./commands/CreateKeyGroupCommand";
import {
  type CreateKeyValueStoreCommandInput,
  type CreateKeyValueStoreCommandOutput,
  CreateKeyValueStoreCommand,
} from "./commands/CreateKeyValueStoreCommand";
import {
  type CreateMonitoringSubscriptionCommandInput,
  type CreateMonitoringSubscriptionCommandOutput,
  CreateMonitoringSubscriptionCommand,
} from "./commands/CreateMonitoringSubscriptionCommand";
import {
  type CreateOriginAccessControlCommandInput,
  type CreateOriginAccessControlCommandOutput,
  CreateOriginAccessControlCommand,
} from "./commands/CreateOriginAccessControlCommand";
import {
  type CreateOriginRequestPolicyCommandInput,
  type CreateOriginRequestPolicyCommandOutput,
  CreateOriginRequestPolicyCommand,
} from "./commands/CreateOriginRequestPolicyCommand";
import {
  type CreatePublicKeyCommandInput,
  type CreatePublicKeyCommandOutput,
  CreatePublicKeyCommand,
} from "./commands/CreatePublicKeyCommand";
import {
  type CreateRealtimeLogConfigCommandInput,
  type CreateRealtimeLogConfigCommandOutput,
  CreateRealtimeLogConfigCommand,
} from "./commands/CreateRealtimeLogConfigCommand";
import {
  type CreateResponseHeadersPolicyCommandInput,
  type CreateResponseHeadersPolicyCommandOutput,
  CreateResponseHeadersPolicyCommand,
} from "./commands/CreateResponseHeadersPolicyCommand";
import {
  type CreateStreamingDistributionCommandInput,
  type CreateStreamingDistributionCommandOutput,
  CreateStreamingDistributionCommand,
} from "./commands/CreateStreamingDistributionCommand";
import {
  type CreateStreamingDistributionWithTagsCommandInput,
  type CreateStreamingDistributionWithTagsCommandOutput,
  CreateStreamingDistributionWithTagsCommand,
} from "./commands/CreateStreamingDistributionWithTagsCommand";
import {
  type CreateTrustStoreCommandInput,
  type CreateTrustStoreCommandOutput,
  CreateTrustStoreCommand,
} from "./commands/CreateTrustStoreCommand";
import {
  type CreateVpcOriginCommandInput,
  type CreateVpcOriginCommandOutput,
  CreateVpcOriginCommand,
} from "./commands/CreateVpcOriginCommand";
import {
  type DeleteAnycastIpListCommandInput,
  type DeleteAnycastIpListCommandOutput,
  DeleteAnycastIpListCommand,
} from "./commands/DeleteAnycastIpListCommand";
import {
  type DeleteCachePolicyCommandInput,
  type DeleteCachePolicyCommandOutput,
  DeleteCachePolicyCommand,
} from "./commands/DeleteCachePolicyCommand";
import {
  type DeleteCloudFrontOriginAccessIdentityCommandInput,
  type DeleteCloudFrontOriginAccessIdentityCommandOutput,
  DeleteCloudFrontOriginAccessIdentityCommand,
} from "./commands/DeleteCloudFrontOriginAccessIdentityCommand";
import {
  type DeleteConnectionFunctionCommandInput,
  type DeleteConnectionFunctionCommandOutput,
  DeleteConnectionFunctionCommand,
} from "./commands/DeleteConnectionFunctionCommand";
import {
  type DeleteConnectionGroupCommandInput,
  type DeleteConnectionGroupCommandOutput,
  DeleteConnectionGroupCommand,
} from "./commands/DeleteConnectionGroupCommand";
import {
  type DeleteContinuousDeploymentPolicyCommandInput,
  type DeleteContinuousDeploymentPolicyCommandOutput,
  DeleteContinuousDeploymentPolicyCommand,
} from "./commands/DeleteContinuousDeploymentPolicyCommand";
import {
  type DeleteDistributionCommandInput,
  type DeleteDistributionCommandOutput,
  DeleteDistributionCommand,
} from "./commands/DeleteDistributionCommand";
import {
  type DeleteDistributionTenantCommandInput,
  type DeleteDistributionTenantCommandOutput,
  DeleteDistributionTenantCommand,
} from "./commands/DeleteDistributionTenantCommand";
import {
  type DeleteFieldLevelEncryptionConfigCommandInput,
  type DeleteFieldLevelEncryptionConfigCommandOutput,
  DeleteFieldLevelEncryptionConfigCommand,
} from "./commands/DeleteFieldLevelEncryptionConfigCommand";
import {
  type DeleteFieldLevelEncryptionProfileCommandInput,
  type DeleteFieldLevelEncryptionProfileCommandOutput,
  DeleteFieldLevelEncryptionProfileCommand,
} from "./commands/DeleteFieldLevelEncryptionProfileCommand";
import {
  type DeleteFunctionCommandInput,
  type DeleteFunctionCommandOutput,
  DeleteFunctionCommand,
} from "./commands/DeleteFunctionCommand";
import {
  type DeleteKeyGroupCommandInput,
  type DeleteKeyGroupCommandOutput,
  DeleteKeyGroupCommand,
} from "./commands/DeleteKeyGroupCommand";
import {
  type DeleteKeyValueStoreCommandInput,
  type DeleteKeyValueStoreCommandOutput,
  DeleteKeyValueStoreCommand,
} from "./commands/DeleteKeyValueStoreCommand";
import {
  type DeleteMonitoringSubscriptionCommandInput,
  type DeleteMonitoringSubscriptionCommandOutput,
  DeleteMonitoringSubscriptionCommand,
} from "./commands/DeleteMonitoringSubscriptionCommand";
import {
  type DeleteOriginAccessControlCommandInput,
  type DeleteOriginAccessControlCommandOutput,
  DeleteOriginAccessControlCommand,
} from "./commands/DeleteOriginAccessControlCommand";
import {
  type DeleteOriginRequestPolicyCommandInput,
  type DeleteOriginRequestPolicyCommandOutput,
  DeleteOriginRequestPolicyCommand,
} from "./commands/DeleteOriginRequestPolicyCommand";
import {
  type DeletePublicKeyCommandInput,
  type DeletePublicKeyCommandOutput,
  DeletePublicKeyCommand,
} from "./commands/DeletePublicKeyCommand";
import {
  type DeleteRealtimeLogConfigCommandInput,
  type DeleteRealtimeLogConfigCommandOutput,
  DeleteRealtimeLogConfigCommand,
} from "./commands/DeleteRealtimeLogConfigCommand";
import {
  type DeleteResourcePolicyCommandInput,
  type DeleteResourcePolicyCommandOutput,
  DeleteResourcePolicyCommand,
} from "./commands/DeleteResourcePolicyCommand";
import {
  type DeleteResponseHeadersPolicyCommandInput,
  type DeleteResponseHeadersPolicyCommandOutput,
  DeleteResponseHeadersPolicyCommand,
} from "./commands/DeleteResponseHeadersPolicyCommand";
import {
  type DeleteStreamingDistributionCommandInput,
  type DeleteStreamingDistributionCommandOutput,
  DeleteStreamingDistributionCommand,
} from "./commands/DeleteStreamingDistributionCommand";
import {
  type DeleteTrustStoreCommandInput,
  type DeleteTrustStoreCommandOutput,
  DeleteTrustStoreCommand,
} from "./commands/DeleteTrustStoreCommand";
import {
  type DeleteVpcOriginCommandInput,
  type DeleteVpcOriginCommandOutput,
  DeleteVpcOriginCommand,
} from "./commands/DeleteVpcOriginCommand";
import {
  type DescribeConnectionFunctionCommandInput,
  type DescribeConnectionFunctionCommandOutput,
  DescribeConnectionFunctionCommand,
} from "./commands/DescribeConnectionFunctionCommand";
import {
  type DescribeFunctionCommandInput,
  type DescribeFunctionCommandOutput,
  DescribeFunctionCommand,
} from "./commands/DescribeFunctionCommand";
import {
  type DescribeKeyValueStoreCommandInput,
  type DescribeKeyValueStoreCommandOutput,
  DescribeKeyValueStoreCommand,
} from "./commands/DescribeKeyValueStoreCommand";
import {
  type DisassociateDistributionTenantWebACLCommandInput,
  type DisassociateDistributionTenantWebACLCommandOutput,
  DisassociateDistributionTenantWebACLCommand,
} from "./commands/DisassociateDistributionTenantWebACLCommand";
import {
  type DisassociateDistributionWebACLCommandInput,
  type DisassociateDistributionWebACLCommandOutput,
  DisassociateDistributionWebACLCommand,
} from "./commands/DisassociateDistributionWebACLCommand";
import {
  type GetAnycastIpListCommandInput,
  type GetAnycastIpListCommandOutput,
  GetAnycastIpListCommand,
} from "./commands/GetAnycastIpListCommand";
import {
  type GetCachePolicyCommandInput,
  type GetCachePolicyCommandOutput,
  GetCachePolicyCommand,
} from "./commands/GetCachePolicyCommand";
import {
  type GetCachePolicyConfigCommandInput,
  type GetCachePolicyConfigCommandOutput,
  GetCachePolicyConfigCommand,
} from "./commands/GetCachePolicyConfigCommand";
import {
  type GetCloudFrontOriginAccessIdentityCommandInput,
  type GetCloudFrontOriginAccessIdentityCommandOutput,
  GetCloudFrontOriginAccessIdentityCommand,
} from "./commands/GetCloudFrontOriginAccessIdentityCommand";
import {
  type GetCloudFrontOriginAccessIdentityConfigCommandInput,
  type GetCloudFrontOriginAccessIdentityConfigCommandOutput,
  GetCloudFrontOriginAccessIdentityConfigCommand,
} from "./commands/GetCloudFrontOriginAccessIdentityConfigCommand";
import {
  type GetConnectionFunctionCommandInput,
  type GetConnectionFunctionCommandOutput,
  GetConnectionFunctionCommand,
} from "./commands/GetConnectionFunctionCommand";
import {
  type GetConnectionGroupByRoutingEndpointCommandInput,
  type GetConnectionGroupByRoutingEndpointCommandOutput,
  GetConnectionGroupByRoutingEndpointCommand,
} from "./commands/GetConnectionGroupByRoutingEndpointCommand";
import {
  type GetConnectionGroupCommandInput,
  type GetConnectionGroupCommandOutput,
  GetConnectionGroupCommand,
} from "./commands/GetConnectionGroupCommand";
import {
  type GetContinuousDeploymentPolicyCommandInput,
  type GetContinuousDeploymentPolicyCommandOutput,
  GetContinuousDeploymentPolicyCommand,
} from "./commands/GetContinuousDeploymentPolicyCommand";
import {
  type GetContinuousDeploymentPolicyConfigCommandInput,
  type GetContinuousDeploymentPolicyConfigCommandOutput,
  GetContinuousDeploymentPolicyConfigCommand,
} from "./commands/GetContinuousDeploymentPolicyConfigCommand";
import {
  type GetDistributionCommandInput,
  type GetDistributionCommandOutput,
  GetDistributionCommand,
} from "./commands/GetDistributionCommand";
import {
  type GetDistributionConfigCommandInput,
  type GetDistributionConfigCommandOutput,
  GetDistributionConfigCommand,
} from "./commands/GetDistributionConfigCommand";
import {
  type GetDistributionTenantByDomainCommandInput,
  type GetDistributionTenantByDomainCommandOutput,
  GetDistributionTenantByDomainCommand,
} from "./commands/GetDistributionTenantByDomainCommand";
import {
  type GetDistributionTenantCommandInput,
  type GetDistributionTenantCommandOutput,
  GetDistributionTenantCommand,
} from "./commands/GetDistributionTenantCommand";
import {
  type GetFieldLevelEncryptionCommandInput,
  type GetFieldLevelEncryptionCommandOutput,
  GetFieldLevelEncryptionCommand,
} from "./commands/GetFieldLevelEncryptionCommand";
import {
  type GetFieldLevelEncryptionConfigCommandInput,
  type GetFieldLevelEncryptionConfigCommandOutput,
  GetFieldLevelEncryptionConfigCommand,
} from "./commands/GetFieldLevelEncryptionConfigCommand";
import {
  type GetFieldLevelEncryptionProfileCommandInput,
  type GetFieldLevelEncryptionProfileCommandOutput,
  GetFieldLevelEncryptionProfileCommand,
} from "./commands/GetFieldLevelEncryptionProfileCommand";
import {
  type GetFieldLevelEncryptionProfileConfigCommandInput,
  type GetFieldLevelEncryptionProfileConfigCommandOutput,
  GetFieldLevelEncryptionProfileConfigCommand,
} from "./commands/GetFieldLevelEncryptionProfileConfigCommand";
import {
  type GetFunctionCommandInput,
  type GetFunctionCommandOutput,
  GetFunctionCommand,
} from "./commands/GetFunctionCommand";
import {
  type GetInvalidationCommandInput,
  type GetInvalidationCommandOutput,
  GetInvalidationCommand,
} from "./commands/GetInvalidationCommand";
import {
  type GetInvalidationForDistributionTenantCommandInput,
  type GetInvalidationForDistributionTenantCommandOutput,
  GetInvalidationForDistributionTenantCommand,
} from "./commands/GetInvalidationForDistributionTenantCommand";
import {
  type GetKeyGroupCommandInput,
  type GetKeyGroupCommandOutput,
  GetKeyGroupCommand,
} from "./commands/GetKeyGroupCommand";
import {
  type GetKeyGroupConfigCommandInput,
  type GetKeyGroupConfigCommandOutput,
  GetKeyGroupConfigCommand,
} from "./commands/GetKeyGroupConfigCommand";
import {
  type GetManagedCertificateDetailsCommandInput,
  type GetManagedCertificateDetailsCommandOutput,
  GetManagedCertificateDetailsCommand,
} from "./commands/GetManagedCertificateDetailsCommand";
import {
  type GetMonitoringSubscriptionCommandInput,
  type GetMonitoringSubscriptionCommandOutput,
  GetMonitoringSubscriptionCommand,
} from "./commands/GetMonitoringSubscriptionCommand";
import {
  type GetOriginAccessControlCommandInput,
  type GetOriginAccessControlCommandOutput,
  GetOriginAccessControlCommand,
} from "./commands/GetOriginAccessControlCommand";
import {
  type GetOriginAccessControlConfigCommandInput,
  type GetOriginAccessControlConfigCommandOutput,
  GetOriginAccessControlConfigCommand,
} from "./commands/GetOriginAccessControlConfigCommand";
import {
  type GetOriginRequestPolicyCommandInput,
  type GetOriginRequestPolicyCommandOutput,
  GetOriginRequestPolicyCommand,
} from "./commands/GetOriginRequestPolicyCommand";
import {
  type GetOriginRequestPolicyConfigCommandInput,
  type GetOriginRequestPolicyConfigCommandOutput,
  GetOriginRequestPolicyConfigCommand,
} from "./commands/GetOriginRequestPolicyConfigCommand";
import {
  type GetPublicKeyCommandInput,
  type GetPublicKeyCommandOutput,
  GetPublicKeyCommand,
} from "./commands/GetPublicKeyCommand";
import {
  type GetPublicKeyConfigCommandInput,
  type GetPublicKeyConfigCommandOutput,
  GetPublicKeyConfigCommand,
} from "./commands/GetPublicKeyConfigCommand";
import {
  type GetRealtimeLogConfigCommandInput,
  type GetRealtimeLogConfigCommandOutput,
  GetRealtimeLogConfigCommand,
} from "./commands/GetRealtimeLogConfigCommand";
import {
  type GetResourcePolicyCommandInput,
  type GetResourcePolicyCommandOutput,
  GetResourcePolicyCommand,
} from "./commands/GetResourcePolicyCommand";
import {
  type GetResponseHeadersPolicyCommandInput,
  type GetResponseHeadersPolicyCommandOutput,
  GetResponseHeadersPolicyCommand,
} from "./commands/GetResponseHeadersPolicyCommand";
import {
  type GetResponseHeadersPolicyConfigCommandInput,
  type GetResponseHeadersPolicyConfigCommandOutput,
  GetResponseHeadersPolicyConfigCommand,
} from "./commands/GetResponseHeadersPolicyConfigCommand";
import {
  type GetStreamingDistributionCommandInput,
  type GetStreamingDistributionCommandOutput,
  GetStreamingDistributionCommand,
} from "./commands/GetStreamingDistributionCommand";
import {
  type GetStreamingDistributionConfigCommandInput,
  type GetStreamingDistributionConfigCommandOutput,
  GetStreamingDistributionConfigCommand,
} from "./commands/GetStreamingDistributionConfigCommand";
import {
  type GetTrustStoreCommandInput,
  type GetTrustStoreCommandOutput,
  GetTrustStoreCommand,
} from "./commands/GetTrustStoreCommand";
import {
  type GetVpcOriginCommandInput,
  type GetVpcOriginCommandOutput,
  GetVpcOriginCommand,
} from "./commands/GetVpcOriginCommand";
import {
  type ListAnycastIpListsCommandInput,
  type ListAnycastIpListsCommandOutput,
  ListAnycastIpListsCommand,
} from "./commands/ListAnycastIpListsCommand";
import {
  type ListCachePoliciesCommandInput,
  type ListCachePoliciesCommandOutput,
  ListCachePoliciesCommand,
} from "./commands/ListCachePoliciesCommand";
import {
  type ListCloudFrontOriginAccessIdentitiesCommandInput,
  type ListCloudFrontOriginAccessIdentitiesCommandOutput,
  ListCloudFrontOriginAccessIdentitiesCommand,
} from "./commands/ListCloudFrontOriginAccessIdentitiesCommand";
import {
  type ListConflictingAliasesCommandInput,
  type ListConflictingAliasesCommandOutput,
  ListConflictingAliasesCommand,
} from "./commands/ListConflictingAliasesCommand";
import {
  type ListConnectionFunctionsCommandInput,
  type ListConnectionFunctionsCommandOutput,
  ListConnectionFunctionsCommand,
} from "./commands/ListConnectionFunctionsCommand";
import {
  type ListConnectionGroupsCommandInput,
  type ListConnectionGroupsCommandOutput,
  ListConnectionGroupsCommand,
} from "./commands/ListConnectionGroupsCommand";
import {
  type ListContinuousDeploymentPoliciesCommandInput,
  type ListContinuousDeploymentPoliciesCommandOutput,
  ListContinuousDeploymentPoliciesCommand,
} from "./commands/ListContinuousDeploymentPoliciesCommand";
import {
  type ListDistributionsByAnycastIpListIdCommandInput,
  type ListDistributionsByAnycastIpListIdCommandOutput,
  ListDistributionsByAnycastIpListIdCommand,
} from "./commands/ListDistributionsByAnycastIpListIdCommand";
import {
  type ListDistributionsByCachePolicyIdCommandInput,
  type ListDistributionsByCachePolicyIdCommandOutput,
  ListDistributionsByCachePolicyIdCommand,
} from "./commands/ListDistributionsByCachePolicyIdCommand";
import {
  type ListDistributionsByConnectionFunctionCommandInput,
  type ListDistributionsByConnectionFunctionCommandOutput,
  ListDistributionsByConnectionFunctionCommand,
} from "./commands/ListDistributionsByConnectionFunctionCommand";
import {
  type ListDistributionsByConnectionModeCommandInput,
  type ListDistributionsByConnectionModeCommandOutput,
  ListDistributionsByConnectionModeCommand,
} from "./commands/ListDistributionsByConnectionModeCommand";
import {
  type ListDistributionsByKeyGroupCommandInput,
  type ListDistributionsByKeyGroupCommandOutput,
  ListDistributionsByKeyGroupCommand,
} from "./commands/ListDistributionsByKeyGroupCommand";
import {
  type ListDistributionsByOriginRequestPolicyIdCommandInput,
  type ListDistributionsByOriginRequestPolicyIdCommandOutput,
  ListDistributionsByOriginRequestPolicyIdCommand,
} from "./commands/ListDistributionsByOriginRequestPolicyIdCommand";
import {
  type ListDistributionsByOwnedResourceCommandInput,
  type ListDistributionsByOwnedResourceCommandOutput,
  ListDistributionsByOwnedResourceCommand,
} from "./commands/ListDistributionsByOwnedResourceCommand";
import {
  type ListDistributionsByRealtimeLogConfigCommandInput,
  type ListDistributionsByRealtimeLogConfigCommandOutput,
  ListDistributionsByRealtimeLogConfigCommand,
} from "./commands/ListDistributionsByRealtimeLogConfigCommand";
import {
  type ListDistributionsByResponseHeadersPolicyIdCommandInput,
  type ListDistributionsByResponseHeadersPolicyIdCommandOutput,
  ListDistributionsByResponseHeadersPolicyIdCommand,
} from "./commands/ListDistributionsByResponseHeadersPolicyIdCommand";
import {
  type ListDistributionsByTrustStoreCommandInput,
  type ListDistributionsByTrustStoreCommandOutput,
  ListDistributionsByTrustStoreCommand,
} from "./commands/ListDistributionsByTrustStoreCommand";
import {
  type ListDistributionsByVpcOriginIdCommandInput,
  type ListDistributionsByVpcOriginIdCommandOutput,
  ListDistributionsByVpcOriginIdCommand,
} from "./commands/ListDistributionsByVpcOriginIdCommand";
import {
  type ListDistributionsByWebACLIdCommandInput,
  type ListDistributionsByWebACLIdCommandOutput,
  ListDistributionsByWebACLIdCommand,
} from "./commands/ListDistributionsByWebACLIdCommand";
import {
  type ListDistributionsCommandInput,
  type ListDistributionsCommandOutput,
  ListDistributionsCommand,
} from "./commands/ListDistributionsCommand";
import {
  type ListDistributionTenantsByCustomizationCommandInput,
  type ListDistributionTenantsByCustomizationCommandOutput,
  ListDistributionTenantsByCustomizationCommand,
} from "./commands/ListDistributionTenantsByCustomizationCommand";
import {
  type ListDistributionTenantsCommandInput,
  type ListDistributionTenantsCommandOutput,
  ListDistributionTenantsCommand,
} from "./commands/ListDistributionTenantsCommand";
import {
  type ListDomainConflictsCommandInput,
  type ListDomainConflictsCommandOutput,
  ListDomainConflictsCommand,
} from "./commands/ListDomainConflictsCommand";
import {
  type ListFieldLevelEncryptionConfigsCommandInput,
  type ListFieldLevelEncryptionConfigsCommandOutput,
  ListFieldLevelEncryptionConfigsCommand,
} from "./commands/ListFieldLevelEncryptionConfigsCommand";
import {
  type ListFieldLevelEncryptionProfilesCommandInput,
  type ListFieldLevelEncryptionProfilesCommandOutput,
  ListFieldLevelEncryptionProfilesCommand,
} from "./commands/ListFieldLevelEncryptionProfilesCommand";
import {
  type ListFunctionsCommandInput,
  type ListFunctionsCommandOutput,
  ListFunctionsCommand,
} from "./commands/ListFunctionsCommand";
import {
  type ListInvalidationsCommandInput,
  type ListInvalidationsCommandOutput,
  ListInvalidationsCommand,
} from "./commands/ListInvalidationsCommand";
import {
  type ListInvalidationsForDistributionTenantCommandInput,
  type ListInvalidationsForDistributionTenantCommandOutput,
  ListInvalidationsForDistributionTenantCommand,
} from "./commands/ListInvalidationsForDistributionTenantCommand";
import {
  type ListKeyGroupsCommandInput,
  type ListKeyGroupsCommandOutput,
  ListKeyGroupsCommand,
} from "./commands/ListKeyGroupsCommand";
import {
  type ListKeyValueStoresCommandInput,
  type ListKeyValueStoresCommandOutput,
  ListKeyValueStoresCommand,
} from "./commands/ListKeyValueStoresCommand";
import {
  type ListOriginAccessControlsCommandInput,
  type ListOriginAccessControlsCommandOutput,
  ListOriginAccessControlsCommand,
} from "./commands/ListOriginAccessControlsCommand";
import {
  type ListOriginRequestPoliciesCommandInput,
  type ListOriginRequestPoliciesCommandOutput,
  ListOriginRequestPoliciesCommand,
} from "./commands/ListOriginRequestPoliciesCommand";
import {
  type ListPublicKeysCommandInput,
  type ListPublicKeysCommandOutput,
  ListPublicKeysCommand,
} from "./commands/ListPublicKeysCommand";
import {
  type ListRealtimeLogConfigsCommandInput,
  type ListRealtimeLogConfigsCommandOutput,
  ListRealtimeLogConfigsCommand,
} from "./commands/ListRealtimeLogConfigsCommand";
import {
  type ListResponseHeadersPoliciesCommandInput,
  type ListResponseHeadersPoliciesCommandOutput,
  ListResponseHeadersPoliciesCommand,
} from "./commands/ListResponseHeadersPoliciesCommand";
import {
  type ListStreamingDistributionsCommandInput,
  type ListStreamingDistributionsCommandOutput,
  ListStreamingDistributionsCommand,
} from "./commands/ListStreamingDistributionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTrustStoresCommandInput,
  type ListTrustStoresCommandOutput,
  ListTrustStoresCommand,
} from "./commands/ListTrustStoresCommand";
import {
  type ListVpcOriginsCommandInput,
  type ListVpcOriginsCommandOutput,
  ListVpcOriginsCommand,
} from "./commands/ListVpcOriginsCommand";
import {
  type PublishConnectionFunctionCommandInput,
  type PublishConnectionFunctionCommandOutput,
  PublishConnectionFunctionCommand,
} from "./commands/PublishConnectionFunctionCommand";
import {
  type PublishFunctionCommandInput,
  type PublishFunctionCommandOutput,
  PublishFunctionCommand,
} from "./commands/PublishFunctionCommand";
import {
  type PutResourcePolicyCommandInput,
  type PutResourcePolicyCommandOutput,
  PutResourcePolicyCommand,
} from "./commands/PutResourcePolicyCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TestConnectionFunctionCommandInput,
  type TestConnectionFunctionCommandOutput,
  TestConnectionFunctionCommand,
} from "./commands/TestConnectionFunctionCommand";
import {
  type TestFunctionCommandInput,
  type TestFunctionCommandOutput,
  TestFunctionCommand,
} from "./commands/TestFunctionCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAnycastIpListCommandInput,
  type UpdateAnycastIpListCommandOutput,
  UpdateAnycastIpListCommand,
} from "./commands/UpdateAnycastIpListCommand";
import {
  type UpdateCachePolicyCommandInput,
  type UpdateCachePolicyCommandOutput,
  UpdateCachePolicyCommand,
} from "./commands/UpdateCachePolicyCommand";
import {
  type UpdateCloudFrontOriginAccessIdentityCommandInput,
  type UpdateCloudFrontOriginAccessIdentityCommandOutput,
  UpdateCloudFrontOriginAccessIdentityCommand,
} from "./commands/UpdateCloudFrontOriginAccessIdentityCommand";
import {
  type UpdateConnectionFunctionCommandInput,
  type UpdateConnectionFunctionCommandOutput,
  UpdateConnectionFunctionCommand,
} from "./commands/UpdateConnectionFunctionCommand";
import {
  type UpdateConnectionGroupCommandInput,
  type UpdateConnectionGroupCommandOutput,
  UpdateConnectionGroupCommand,
} from "./commands/UpdateConnectionGroupCommand";
import {
  type UpdateContinuousDeploymentPolicyCommandInput,
  type UpdateContinuousDeploymentPolicyCommandOutput,
  UpdateContinuousDeploymentPolicyCommand,
} from "./commands/UpdateContinuousDeploymentPolicyCommand";
import {
  type UpdateDistributionCommandInput,
  type UpdateDistributionCommandOutput,
  UpdateDistributionCommand,
} from "./commands/UpdateDistributionCommand";
import {
  type UpdateDistributionTenantCommandInput,
  type UpdateDistributionTenantCommandOutput,
  UpdateDistributionTenantCommand,
} from "./commands/UpdateDistributionTenantCommand";
import {
  type UpdateDistributionWithStagingConfigCommandInput,
  type UpdateDistributionWithStagingConfigCommandOutput,
  UpdateDistributionWithStagingConfigCommand,
} from "./commands/UpdateDistributionWithStagingConfigCommand";
import {
  type UpdateDomainAssociationCommandInput,
  type UpdateDomainAssociationCommandOutput,
  UpdateDomainAssociationCommand,
} from "./commands/UpdateDomainAssociationCommand";
import {
  type UpdateFieldLevelEncryptionConfigCommandInput,
  type UpdateFieldLevelEncryptionConfigCommandOutput,
  UpdateFieldLevelEncryptionConfigCommand,
} from "./commands/UpdateFieldLevelEncryptionConfigCommand";
import {
  type UpdateFieldLevelEncryptionProfileCommandInput,
  type UpdateFieldLevelEncryptionProfileCommandOutput,
  UpdateFieldLevelEncryptionProfileCommand,
} from "./commands/UpdateFieldLevelEncryptionProfileCommand";
import {
  type UpdateFunctionCommandInput,
  type UpdateFunctionCommandOutput,
  UpdateFunctionCommand,
} from "./commands/UpdateFunctionCommand";
import {
  type UpdateKeyGroupCommandInput,
  type UpdateKeyGroupCommandOutput,
  UpdateKeyGroupCommand,
} from "./commands/UpdateKeyGroupCommand";
import {
  type UpdateKeyValueStoreCommandInput,
  type UpdateKeyValueStoreCommandOutput,
  UpdateKeyValueStoreCommand,
} from "./commands/UpdateKeyValueStoreCommand";
import {
  type UpdateOriginAccessControlCommandInput,
  type UpdateOriginAccessControlCommandOutput,
  UpdateOriginAccessControlCommand,
} from "./commands/UpdateOriginAccessControlCommand";
import {
  type UpdateOriginRequestPolicyCommandInput,
  type UpdateOriginRequestPolicyCommandOutput,
  UpdateOriginRequestPolicyCommand,
} from "./commands/UpdateOriginRequestPolicyCommand";
import {
  type UpdatePublicKeyCommandInput,
  type UpdatePublicKeyCommandOutput,
  UpdatePublicKeyCommand,
} from "./commands/UpdatePublicKeyCommand";
import {
  type UpdateRealtimeLogConfigCommandInput,
  type UpdateRealtimeLogConfigCommandOutput,
  UpdateRealtimeLogConfigCommand,
} from "./commands/UpdateRealtimeLogConfigCommand";
import {
  type UpdateResponseHeadersPolicyCommandInput,
  type UpdateResponseHeadersPolicyCommandOutput,
  UpdateResponseHeadersPolicyCommand,
} from "./commands/UpdateResponseHeadersPolicyCommand";
import {
  type UpdateStreamingDistributionCommandInput,
  type UpdateStreamingDistributionCommandOutput,
  UpdateStreamingDistributionCommand,
} from "./commands/UpdateStreamingDistributionCommand";
import {
  type UpdateTrustStoreCommandInput,
  type UpdateTrustStoreCommandOutput,
  UpdateTrustStoreCommand,
} from "./commands/UpdateTrustStoreCommand";
import {
  type UpdateVpcOriginCommandInput,
  type UpdateVpcOriginCommandOutput,
  UpdateVpcOriginCommand,
} from "./commands/UpdateVpcOriginCommand";
import {
  type VerifyDnsConfigurationCommandInput,
  type VerifyDnsConfigurationCommandOutput,
  VerifyDnsConfigurationCommand,
} from "./commands/VerifyDnsConfigurationCommand";
import type { CloudFrontServiceException } from "./models/CloudFrontServiceException";
import {
  paginateListCloudFrontOriginAccessIdentities,
} from "./pagination/ListCloudFrontOriginAccessIdentitiesPaginator";
import { paginateListConnectionFunctions } from "./pagination/ListConnectionFunctionsPaginator";
import { paginateListConnectionGroups } from "./pagination/ListConnectionGroupsPaginator";
import {
  paginateListDistributionsByConnectionFunction,
} from "./pagination/ListDistributionsByConnectionFunctionPaginator";
import { paginateListDistributionsByConnectionMode } from "./pagination/ListDistributionsByConnectionModePaginator";
import { paginateListDistributionsByTrustStore } from "./pagination/ListDistributionsByTrustStorePaginator";
import { paginateListDistributions } from "./pagination/ListDistributionsPaginator";
import {
  paginateListDistributionTenantsByCustomization,
} from "./pagination/ListDistributionTenantsByCustomizationPaginator";
import { paginateListDistributionTenants } from "./pagination/ListDistributionTenantsPaginator";
import { paginateListDomainConflicts } from "./pagination/ListDomainConflictsPaginator";
import {
  paginateListInvalidationsForDistributionTenant,
} from "./pagination/ListInvalidationsForDistributionTenantPaginator";
import { paginateListInvalidations } from "./pagination/ListInvalidationsPaginator";
import { paginateListKeyValueStores } from "./pagination/ListKeyValueStoresPaginator";
import { paginateListOriginAccessControls } from "./pagination/ListOriginAccessControlsPaginator";
import { paginateListPublicKeys } from "./pagination/ListPublicKeysPaginator";
import { paginateListStreamingDistributions } from "./pagination/ListStreamingDistributionsPaginator";
import { paginateListTrustStores } from "./pagination/ListTrustStoresPaginator";
import { waitUntilDistributionDeployed } from "./waiters/waitForDistributionDeployed";
import { waitUntilInvalidationCompleted } from "./waiters/waitForInvalidationCompleted";
import {
  waitUntilInvalidationForDistributionTenantCompleted,
} from "./waiters/waitForInvalidationForDistributionTenantCompleted";
import { waitUntilStreamingDistributionDeployed } from "./waiters/waitForStreamingDistributionDeployed";

const commands = {
  AssociateAliasCommand,
  AssociateDistributionTenantWebACLCommand,
  AssociateDistributionWebACLCommand,
  CopyDistributionCommand,
  CreateAnycastIpListCommand,
  CreateCachePolicyCommand,
  CreateCloudFrontOriginAccessIdentityCommand,
  CreateConnectionFunctionCommand,
  CreateConnectionGroupCommand,
  CreateContinuousDeploymentPolicyCommand,
  CreateDistributionCommand,
  CreateDistributionTenantCommand,
  CreateDistributionWithTagsCommand,
  CreateFieldLevelEncryptionConfigCommand,
  CreateFieldLevelEncryptionProfileCommand,
  CreateFunctionCommand,
  CreateInvalidationCommand,
  CreateInvalidationForDistributionTenantCommand,
  CreateKeyGroupCommand,
  CreateKeyValueStoreCommand,
  CreateMonitoringSubscriptionCommand,
  CreateOriginAccessControlCommand,
  CreateOriginRequestPolicyCommand,
  CreatePublicKeyCommand,
  CreateRealtimeLogConfigCommand,
  CreateResponseHeadersPolicyCommand,
  CreateStreamingDistributionCommand,
  CreateStreamingDistributionWithTagsCommand,
  CreateTrustStoreCommand,
  CreateVpcOriginCommand,
  DeleteAnycastIpListCommand,
  DeleteCachePolicyCommand,
  DeleteCloudFrontOriginAccessIdentityCommand,
  DeleteConnectionFunctionCommand,
  DeleteConnectionGroupCommand,
  DeleteContinuousDeploymentPolicyCommand,
  DeleteDistributionCommand,
  DeleteDistributionTenantCommand,
  DeleteFieldLevelEncryptionConfigCommand,
  DeleteFieldLevelEncryptionProfileCommand,
  DeleteFunctionCommand,
  DeleteKeyGroupCommand,
  DeleteKeyValueStoreCommand,
  DeleteMonitoringSubscriptionCommand,
  DeleteOriginAccessControlCommand,
  DeleteOriginRequestPolicyCommand,
  DeletePublicKeyCommand,
  DeleteRealtimeLogConfigCommand,
  DeleteResourcePolicyCommand,
  DeleteResponseHeadersPolicyCommand,
  DeleteStreamingDistributionCommand,
  DeleteTrustStoreCommand,
  DeleteVpcOriginCommand,
  DescribeConnectionFunctionCommand,
  DescribeFunctionCommand,
  DescribeKeyValueStoreCommand,
  DisassociateDistributionTenantWebACLCommand,
  DisassociateDistributionWebACLCommand,
  GetAnycastIpListCommand,
  GetCachePolicyCommand,
  GetCachePolicyConfigCommand,
  GetCloudFrontOriginAccessIdentityCommand,
  GetCloudFrontOriginAccessIdentityConfigCommand,
  GetConnectionFunctionCommand,
  GetConnectionGroupCommand,
  GetConnectionGroupByRoutingEndpointCommand,
  GetContinuousDeploymentPolicyCommand,
  GetContinuousDeploymentPolicyConfigCommand,
  GetDistributionCommand,
  GetDistributionConfigCommand,
  GetDistributionTenantCommand,
  GetDistributionTenantByDomainCommand,
  GetFieldLevelEncryptionCommand,
  GetFieldLevelEncryptionConfigCommand,
  GetFieldLevelEncryptionProfileCommand,
  GetFieldLevelEncryptionProfileConfigCommand,
  GetFunctionCommand,
  GetInvalidationCommand,
  GetInvalidationForDistributionTenantCommand,
  GetKeyGroupCommand,
  GetKeyGroupConfigCommand,
  GetManagedCertificateDetailsCommand,
  GetMonitoringSubscriptionCommand,
  GetOriginAccessControlCommand,
  GetOriginAccessControlConfigCommand,
  GetOriginRequestPolicyCommand,
  GetOriginRequestPolicyConfigCommand,
  GetPublicKeyCommand,
  GetPublicKeyConfigCommand,
  GetRealtimeLogConfigCommand,
  GetResourcePolicyCommand,
  GetResponseHeadersPolicyCommand,
  GetResponseHeadersPolicyConfigCommand,
  GetStreamingDistributionCommand,
  GetStreamingDistributionConfigCommand,
  GetTrustStoreCommand,
  GetVpcOriginCommand,
  ListAnycastIpListsCommand,
  ListCachePoliciesCommand,
  ListCloudFrontOriginAccessIdentitiesCommand,
  ListConflictingAliasesCommand,
  ListConnectionFunctionsCommand,
  ListConnectionGroupsCommand,
  ListContinuousDeploymentPoliciesCommand,
  ListDistributionsCommand,
  ListDistributionsByAnycastIpListIdCommand,
  ListDistributionsByCachePolicyIdCommand,
  ListDistributionsByConnectionFunctionCommand,
  ListDistributionsByConnectionModeCommand,
  ListDistributionsByKeyGroupCommand,
  ListDistributionsByOriginRequestPolicyIdCommand,
  ListDistributionsByOwnedResourceCommand,
  ListDistributionsByRealtimeLogConfigCommand,
  ListDistributionsByResponseHeadersPolicyIdCommand,
  ListDistributionsByTrustStoreCommand,
  ListDistributionsByVpcOriginIdCommand,
  ListDistributionsByWebACLIdCommand,
  ListDistributionTenantsCommand,
  ListDistributionTenantsByCustomizationCommand,
  ListDomainConflictsCommand,
  ListFieldLevelEncryptionConfigsCommand,
  ListFieldLevelEncryptionProfilesCommand,
  ListFunctionsCommand,
  ListInvalidationsCommand,
  ListInvalidationsForDistributionTenantCommand,
  ListKeyGroupsCommand,
  ListKeyValueStoresCommand,
  ListOriginAccessControlsCommand,
  ListOriginRequestPoliciesCommand,
  ListPublicKeysCommand,
  ListRealtimeLogConfigsCommand,
  ListResponseHeadersPoliciesCommand,
  ListStreamingDistributionsCommand,
  ListTagsForResourceCommand,
  ListTrustStoresCommand,
  ListVpcOriginsCommand,
  PublishConnectionFunctionCommand,
  PublishFunctionCommand,
  PutResourcePolicyCommand,
  TagResourceCommand,
  TestConnectionFunctionCommand,
  TestFunctionCommand,
  UntagResourceCommand,
  UpdateAnycastIpListCommand,
  UpdateCachePolicyCommand,
  UpdateCloudFrontOriginAccessIdentityCommand,
  UpdateConnectionFunctionCommand,
  UpdateConnectionGroupCommand,
  UpdateContinuousDeploymentPolicyCommand,
  UpdateDistributionCommand,
  UpdateDistributionTenantCommand,
  UpdateDistributionWithStagingConfigCommand,
  UpdateDomainAssociationCommand,
  UpdateFieldLevelEncryptionConfigCommand,
  UpdateFieldLevelEncryptionProfileCommand,
  UpdateFunctionCommand,
  UpdateKeyGroupCommand,
  UpdateKeyValueStoreCommand,
  UpdateOriginAccessControlCommand,
  UpdateOriginRequestPolicyCommand,
  UpdatePublicKeyCommand,
  UpdateRealtimeLogConfigCommand,
  UpdateResponseHeadersPolicyCommand,
  UpdateStreamingDistributionCommand,
  UpdateTrustStoreCommand,
  UpdateVpcOriginCommand,
  VerifyDnsConfigurationCommand,
};
const paginators = {
  paginateListCloudFrontOriginAccessIdentities,
  paginateListConnectionFunctions,
  paginateListConnectionGroups,
  paginateListDistributions,
  paginateListDistributionsByConnectionFunction,
  paginateListDistributionsByConnectionMode,
  paginateListDistributionsByTrustStore,
  paginateListDistributionTenants,
  paginateListDistributionTenantsByCustomization,
  paginateListDomainConflicts,
  paginateListInvalidations,
  paginateListInvalidationsForDistributionTenant,
  paginateListKeyValueStores,
  paginateListOriginAccessControls,
  paginateListPublicKeys,
  paginateListStreamingDistributions,
  paginateListTrustStores,
};
const waiters = {
  waitUntilDistributionDeployed,
  waitUntilInvalidationCompleted,
  waitUntilInvalidationForDistributionTenantCompleted,
  waitUntilStreamingDistributionDeployed,
};

/**
 * @public
 */
export interface CloudFrontRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface CloudFront {
  /**
   * @see {@link AssociateAliasCommand}
   */
  associateAlias(
    args: AssociateAliasCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<AssociateAliasCommandOutput>;
  associateAlias(
    args: AssociateAliasCommandInput,
    cb: (err: any, data?: AssociateAliasCommandOutput) => void
  ): void;
  associateAlias(
    args: AssociateAliasCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: AssociateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDistributionTenantWebACLCommand}
   */
  associateDistributionTenantWebACL(
    args: AssociateDistributionTenantWebACLCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<AssociateDistributionTenantWebACLCommandOutput>;
  associateDistributionTenantWebACL(
    args: AssociateDistributionTenantWebACLCommandInput,
    cb: (err: any, data?: AssociateDistributionTenantWebACLCommandOutput) => void
  ): void;
  associateDistributionTenantWebACL(
    args: AssociateDistributionTenantWebACLCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: AssociateDistributionTenantWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDistributionWebACLCommand}
   */
  associateDistributionWebACL(
    args: AssociateDistributionWebACLCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<AssociateDistributionWebACLCommandOutput>;
  associateDistributionWebACL(
    args: AssociateDistributionWebACLCommandInput,
    cb: (err: any, data?: AssociateDistributionWebACLCommandOutput) => void
  ): void;
  associateDistributionWebACL(
    args: AssociateDistributionWebACLCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: AssociateDistributionWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDistributionCommand}
   */
  copyDistribution(
    args: CopyDistributionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CopyDistributionCommandOutput>;
  copyDistribution(
    args: CopyDistributionCommandInput,
    cb: (err: any, data?: CopyDistributionCommandOutput) => void
  ): void;
  copyDistribution(
    args: CopyDistributionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CopyDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnycastIpListCommand}
   */
  createAnycastIpList(
    args: CreateAnycastIpListCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateAnycastIpListCommandOutput>;
  createAnycastIpList(
    args: CreateAnycastIpListCommandInput,
    cb: (err: any, data?: CreateAnycastIpListCommandOutput) => void
  ): void;
  createAnycastIpList(
    args: CreateAnycastIpListCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateAnycastIpListCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCachePolicyCommand}
   */
  createCachePolicy(
    args: CreateCachePolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateCachePolicyCommandOutput>;
  createCachePolicy(
    args: CreateCachePolicyCommandInput,
    cb: (err: any, data?: CreateCachePolicyCommandOutput) => void
  ): void;
  createCachePolicy(
    args: CreateCachePolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateCachePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCloudFrontOriginAccessIdentityCommand}
   */
  createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateCloudFrontOriginAccessIdentityCommandOutput>;
  createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: CreateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionFunctionCommand}
   */
  createConnectionFunction(
    args: CreateConnectionFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateConnectionFunctionCommandOutput>;
  createConnectionFunction(
    args: CreateConnectionFunctionCommandInput,
    cb: (err: any, data?: CreateConnectionFunctionCommandOutput) => void
  ): void;
  createConnectionFunction(
    args: CreateConnectionFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionGroupCommand}
   */
  createConnectionGroup(
    args: CreateConnectionGroupCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateConnectionGroupCommandOutput>;
  createConnectionGroup(
    args: CreateConnectionGroupCommandInput,
    cb: (err: any, data?: CreateConnectionGroupCommandOutput) => void
  ): void;
  createConnectionGroup(
    args: CreateConnectionGroupCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateConnectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContinuousDeploymentPolicyCommand}
   */
  createContinuousDeploymentPolicy(
    args: CreateContinuousDeploymentPolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateContinuousDeploymentPolicyCommandOutput>;
  createContinuousDeploymentPolicy(
    args: CreateContinuousDeploymentPolicyCommandInput,
    cb: (err: any, data?: CreateContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  createContinuousDeploymentPolicy(
    args: CreateContinuousDeploymentPolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateContinuousDeploymentPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDistributionCommand}
   */
  createDistribution(
    args: CreateDistributionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateDistributionCommandOutput>;
  createDistribution(
    args: CreateDistributionCommandInput,
    cb: (err: any, data?: CreateDistributionCommandOutput) => void
  ): void;
  createDistribution(
    args: CreateDistributionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDistributionTenantCommand}
   */
  createDistributionTenant(
    args: CreateDistributionTenantCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateDistributionTenantCommandOutput>;
  createDistributionTenant(
    args: CreateDistributionTenantCommandInput,
    cb: (err: any, data?: CreateDistributionTenantCommandOutput) => void
  ): void;
  createDistributionTenant(
    args: CreateDistributionTenantCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateDistributionTenantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDistributionWithTagsCommand}
   */
  createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateDistributionWithTagsCommandOutput>;
  createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    cb: (err: any, data?: CreateDistributionWithTagsCommandOutput) => void
  ): void;
  createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateDistributionWithTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFieldLevelEncryptionConfigCommand}
   */
  createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateFieldLevelEncryptionConfigCommandOutput>;
  createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: CreateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFieldLevelEncryptionProfileCommand}
   */
  createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateFieldLevelEncryptionProfileCommandOutput>;
  createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: CreateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFunctionCommand}
   */
  createFunction(
    args: CreateFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateFunctionCommandOutput>;
  createFunction(
    args: CreateFunctionCommandInput,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;
  createFunction(
    args: CreateFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInvalidationCommand}
   */
  createInvalidation(
    args: CreateInvalidationCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateInvalidationCommandOutput>;
  createInvalidation(
    args: CreateInvalidationCommandInput,
    cb: (err: any, data?: CreateInvalidationCommandOutput) => void
  ): void;
  createInvalidation(
    args: CreateInvalidationCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateInvalidationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInvalidationForDistributionTenantCommand}
   */
  createInvalidationForDistributionTenant(
    args: CreateInvalidationForDistributionTenantCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateInvalidationForDistributionTenantCommandOutput>;
  createInvalidationForDistributionTenant(
    args: CreateInvalidationForDistributionTenantCommandInput,
    cb: (err: any, data?: CreateInvalidationForDistributionTenantCommandOutput) => void
  ): void;
  createInvalidationForDistributionTenant(
    args: CreateInvalidationForDistributionTenantCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateInvalidationForDistributionTenantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKeyGroupCommand}
   */
  createKeyGroup(
    args: CreateKeyGroupCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateKeyGroupCommandOutput>;
  createKeyGroup(
    args: CreateKeyGroupCommandInput,
    cb: (err: any, data?: CreateKeyGroupCommandOutput) => void
  ): void;
  createKeyGroup(
    args: CreateKeyGroupCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateKeyGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKeyValueStoreCommand}
   */
  createKeyValueStore(
    args: CreateKeyValueStoreCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateKeyValueStoreCommandOutput>;
  createKeyValueStore(
    args: CreateKeyValueStoreCommandInput,
    cb: (err: any, data?: CreateKeyValueStoreCommandOutput) => void
  ): void;
  createKeyValueStore(
    args: CreateKeyValueStoreCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateKeyValueStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMonitoringSubscriptionCommand}
   */
  createMonitoringSubscription(
    args: CreateMonitoringSubscriptionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateMonitoringSubscriptionCommandOutput>;
  createMonitoringSubscription(
    args: CreateMonitoringSubscriptionCommandInput,
    cb: (err: any, data?: CreateMonitoringSubscriptionCommandOutput) => void
  ): void;
  createMonitoringSubscription(
    args: CreateMonitoringSubscriptionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateMonitoringSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOriginAccessControlCommand}
   */
  createOriginAccessControl(
    args: CreateOriginAccessControlCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateOriginAccessControlCommandOutput>;
  createOriginAccessControl(
    args: CreateOriginAccessControlCommandInput,
    cb: (err: any, data?: CreateOriginAccessControlCommandOutput) => void
  ): void;
  createOriginAccessControl(
    args: CreateOriginAccessControlCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateOriginAccessControlCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOriginRequestPolicyCommand}
   */
  createOriginRequestPolicy(
    args: CreateOriginRequestPolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateOriginRequestPolicyCommandOutput>;
  createOriginRequestPolicy(
    args: CreateOriginRequestPolicyCommandInput,
    cb: (err: any, data?: CreateOriginRequestPolicyCommandOutput) => void
  ): void;
  createOriginRequestPolicy(
    args: CreateOriginRequestPolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateOriginRequestPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePublicKeyCommand}
   */
  createPublicKey(
    args: CreatePublicKeyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreatePublicKeyCommandOutput>;
  createPublicKey(
    args: CreatePublicKeyCommandInput,
    cb: (err: any, data?: CreatePublicKeyCommandOutput) => void
  ): void;
  createPublicKey(
    args: CreatePublicKeyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreatePublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRealtimeLogConfigCommand}
   */
  createRealtimeLogConfig(
    args: CreateRealtimeLogConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateRealtimeLogConfigCommandOutput>;
  createRealtimeLogConfig(
    args: CreateRealtimeLogConfigCommandInput,
    cb: (err: any, data?: CreateRealtimeLogConfigCommandOutput) => void
  ): void;
  createRealtimeLogConfig(
    args: CreateRealtimeLogConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateRealtimeLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResponseHeadersPolicyCommand}
   */
  createResponseHeadersPolicy(
    args: CreateResponseHeadersPolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateResponseHeadersPolicyCommandOutput>;
  createResponseHeadersPolicy(
    args: CreateResponseHeadersPolicyCommandInput,
    cb: (err: any, data?: CreateResponseHeadersPolicyCommandOutput) => void
  ): void;
  createResponseHeadersPolicy(
    args: CreateResponseHeadersPolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateResponseHeadersPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamingDistributionCommand}
   */
  createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateStreamingDistributionCommandOutput>;
  createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    cb: (err: any, data?: CreateStreamingDistributionCommandOutput) => void
  ): void;
  createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateStreamingDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamingDistributionWithTagsCommand}
   */
  createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateStreamingDistributionWithTagsCommandOutput>;
  createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    cb: (err: any, data?: CreateStreamingDistributionWithTagsCommandOutput) => void
  ): void;
  createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateStreamingDistributionWithTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrustStoreCommand}
   */
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateTrustStoreCommandOutput>;
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    cb: (err: any, data?: CreateTrustStoreCommandOutput) => void
  ): void;
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcOriginCommand}
   */
  createVpcOrigin(
    args: CreateVpcOriginCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<CreateVpcOriginCommandOutput>;
  createVpcOrigin(
    args: CreateVpcOriginCommandInput,
    cb: (err: any, data?: CreateVpcOriginCommandOutput) => void
  ): void;
  createVpcOrigin(
    args: CreateVpcOriginCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: CreateVpcOriginCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnycastIpListCommand}
   */
  deleteAnycastIpList(
    args: DeleteAnycastIpListCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteAnycastIpListCommandOutput>;
  deleteAnycastIpList(
    args: DeleteAnycastIpListCommandInput,
    cb: (err: any, data?: DeleteAnycastIpListCommandOutput) => void
  ): void;
  deleteAnycastIpList(
    args: DeleteAnycastIpListCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteAnycastIpListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCachePolicyCommand}
   */
  deleteCachePolicy(
    args: DeleteCachePolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteCachePolicyCommandOutput>;
  deleteCachePolicy(
    args: DeleteCachePolicyCommandInput,
    cb: (err: any, data?: DeleteCachePolicyCommandOutput) => void
  ): void;
  deleteCachePolicy(
    args: DeleteCachePolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteCachePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCloudFrontOriginAccessIdentityCommand}
   */
  deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteCloudFrontOriginAccessIdentityCommandOutput>;
  deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: DeleteCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionFunctionCommand}
   */
  deleteConnectionFunction(
    args: DeleteConnectionFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteConnectionFunctionCommandOutput>;
  deleteConnectionFunction(
    args: DeleteConnectionFunctionCommandInput,
    cb: (err: any, data?: DeleteConnectionFunctionCommandOutput) => void
  ): void;
  deleteConnectionFunction(
    args: DeleteConnectionFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionGroupCommand}
   */
  deleteConnectionGroup(
    args: DeleteConnectionGroupCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteConnectionGroupCommandOutput>;
  deleteConnectionGroup(
    args: DeleteConnectionGroupCommandInput,
    cb: (err: any, data?: DeleteConnectionGroupCommandOutput) => void
  ): void;
  deleteConnectionGroup(
    args: DeleteConnectionGroupCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteConnectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContinuousDeploymentPolicyCommand}
   */
  deleteContinuousDeploymentPolicy(
    args: DeleteContinuousDeploymentPolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteContinuousDeploymentPolicyCommandOutput>;
  deleteContinuousDeploymentPolicy(
    args: DeleteContinuousDeploymentPolicyCommandInput,
    cb: (err: any, data?: DeleteContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  deleteContinuousDeploymentPolicy(
    args: DeleteContinuousDeploymentPolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteContinuousDeploymentPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDistributionCommand}
   */
  deleteDistribution(
    args: DeleteDistributionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteDistributionCommandOutput>;
  deleteDistribution(
    args: DeleteDistributionCommandInput,
    cb: (err: any, data?: DeleteDistributionCommandOutput) => void
  ): void;
  deleteDistribution(
    args: DeleteDistributionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDistributionTenantCommand}
   */
  deleteDistributionTenant(
    args: DeleteDistributionTenantCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteDistributionTenantCommandOutput>;
  deleteDistributionTenant(
    args: DeleteDistributionTenantCommandInput,
    cb: (err: any, data?: DeleteDistributionTenantCommandOutput) => void
  ): void;
  deleteDistributionTenant(
    args: DeleteDistributionTenantCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteDistributionTenantCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFieldLevelEncryptionConfigCommand}
   */
  deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteFieldLevelEncryptionConfigCommandOutput>;
  deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: DeleteFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteFieldLevelEncryptionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFieldLevelEncryptionProfileCommand}
   */
  deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteFieldLevelEncryptionProfileCommandOutput>;
  deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: DeleteFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteFieldLevelEncryptionProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFunctionCommand}
   */
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteFunctionCommandOutput>;
  deleteFunction(
    args: DeleteFunctionCommandInput,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKeyGroupCommand}
   */
  deleteKeyGroup(
    args: DeleteKeyGroupCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteKeyGroupCommandOutput>;
  deleteKeyGroup(
    args: DeleteKeyGroupCommandInput,
    cb: (err: any, data?: DeleteKeyGroupCommandOutput) => void
  ): void;
  deleteKeyGroup(
    args: DeleteKeyGroupCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteKeyGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKeyValueStoreCommand}
   */
  deleteKeyValueStore(
    args: DeleteKeyValueStoreCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteKeyValueStoreCommandOutput>;
  deleteKeyValueStore(
    args: DeleteKeyValueStoreCommandInput,
    cb: (err: any, data?: DeleteKeyValueStoreCommandOutput) => void
  ): void;
  deleteKeyValueStore(
    args: DeleteKeyValueStoreCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteKeyValueStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMonitoringSubscriptionCommand}
   */
  deleteMonitoringSubscription(
    args: DeleteMonitoringSubscriptionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteMonitoringSubscriptionCommandOutput>;
  deleteMonitoringSubscription(
    args: DeleteMonitoringSubscriptionCommandInput,
    cb: (err: any, data?: DeleteMonitoringSubscriptionCommandOutput) => void
  ): void;
  deleteMonitoringSubscription(
    args: DeleteMonitoringSubscriptionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteMonitoringSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOriginAccessControlCommand}
   */
  deleteOriginAccessControl(
    args: DeleteOriginAccessControlCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteOriginAccessControlCommandOutput>;
  deleteOriginAccessControl(
    args: DeleteOriginAccessControlCommandInput,
    cb: (err: any, data?: DeleteOriginAccessControlCommandOutput) => void
  ): void;
  deleteOriginAccessControl(
    args: DeleteOriginAccessControlCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteOriginAccessControlCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOriginRequestPolicyCommand}
   */
  deleteOriginRequestPolicy(
    args: DeleteOriginRequestPolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteOriginRequestPolicyCommandOutput>;
  deleteOriginRequestPolicy(
    args: DeleteOriginRequestPolicyCommandInput,
    cb: (err: any, data?: DeleteOriginRequestPolicyCommandOutput) => void
  ): void;
  deleteOriginRequestPolicy(
    args: DeleteOriginRequestPolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteOriginRequestPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePublicKeyCommand}
   */
  deletePublicKey(
    args: DeletePublicKeyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeletePublicKeyCommandOutput>;
  deletePublicKey(
    args: DeletePublicKeyCommandInput,
    cb: (err: any, data?: DeletePublicKeyCommandOutput) => void
  ): void;
  deletePublicKey(
    args: DeletePublicKeyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeletePublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRealtimeLogConfigCommand}
   */
  deleteRealtimeLogConfig(): Promise<DeleteRealtimeLogConfigCommandOutput>;
  deleteRealtimeLogConfig(
    args: DeleteRealtimeLogConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteRealtimeLogConfigCommandOutput>;
  deleteRealtimeLogConfig(
    args: DeleteRealtimeLogConfigCommandInput,
    cb: (err: any, data?: DeleteRealtimeLogConfigCommandOutput) => void
  ): void;
  deleteRealtimeLogConfig(
    args: DeleteRealtimeLogConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteRealtimeLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResponseHeadersPolicyCommand}
   */
  deleteResponseHeadersPolicy(
    args: DeleteResponseHeadersPolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteResponseHeadersPolicyCommandOutput>;
  deleteResponseHeadersPolicy(
    args: DeleteResponseHeadersPolicyCommandInput,
    cb: (err: any, data?: DeleteResponseHeadersPolicyCommandOutput) => void
  ): void;
  deleteResponseHeadersPolicy(
    args: DeleteResponseHeadersPolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteResponseHeadersPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStreamingDistributionCommand}
   */
  deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteStreamingDistributionCommandOutput>;
  deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    cb: (err: any, data?: DeleteStreamingDistributionCommandOutput) => void
  ): void;
  deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteStreamingDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrustStoreCommand}
   */
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteTrustStoreCommandOutput>;
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    cb: (err: any, data?: DeleteTrustStoreCommandOutput) => void
  ): void;
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcOriginCommand}
   */
  deleteVpcOrigin(
    args: DeleteVpcOriginCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DeleteVpcOriginCommandOutput>;
  deleteVpcOrigin(
    args: DeleteVpcOriginCommandInput,
    cb: (err: any, data?: DeleteVpcOriginCommandOutput) => void
  ): void;
  deleteVpcOrigin(
    args: DeleteVpcOriginCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DeleteVpcOriginCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectionFunctionCommand}
   */
  describeConnectionFunction(
    args: DescribeConnectionFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DescribeConnectionFunctionCommandOutput>;
  describeConnectionFunction(
    args: DescribeConnectionFunctionCommandInput,
    cb: (err: any, data?: DescribeConnectionFunctionCommandOutput) => void
  ): void;
  describeConnectionFunction(
    args: DescribeConnectionFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DescribeConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFunctionCommand}
   */
  describeFunction(
    args: DescribeFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DescribeFunctionCommandOutput>;
  describeFunction(
    args: DescribeFunctionCommandInput,
    cb: (err: any, data?: DescribeFunctionCommandOutput) => void
  ): void;
  describeFunction(
    args: DescribeFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DescribeFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeKeyValueStoreCommand}
   */
  describeKeyValueStore(
    args: DescribeKeyValueStoreCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DescribeKeyValueStoreCommandOutput>;
  describeKeyValueStore(
    args: DescribeKeyValueStoreCommandInput,
    cb: (err: any, data?: DescribeKeyValueStoreCommandOutput) => void
  ): void;
  describeKeyValueStore(
    args: DescribeKeyValueStoreCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DescribeKeyValueStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDistributionTenantWebACLCommand}
   */
  disassociateDistributionTenantWebACL(
    args: DisassociateDistributionTenantWebACLCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DisassociateDistributionTenantWebACLCommandOutput>;
  disassociateDistributionTenantWebACL(
    args: DisassociateDistributionTenantWebACLCommandInput,
    cb: (err: any, data?: DisassociateDistributionTenantWebACLCommandOutput) => void
  ): void;
  disassociateDistributionTenantWebACL(
    args: DisassociateDistributionTenantWebACLCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DisassociateDistributionTenantWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDistributionWebACLCommand}
   */
  disassociateDistributionWebACL(
    args: DisassociateDistributionWebACLCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<DisassociateDistributionWebACLCommandOutput>;
  disassociateDistributionWebACL(
    args: DisassociateDistributionWebACLCommandInput,
    cb: (err: any, data?: DisassociateDistributionWebACLCommandOutput) => void
  ): void;
  disassociateDistributionWebACL(
    args: DisassociateDistributionWebACLCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: DisassociateDistributionWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnycastIpListCommand}
   */
  getAnycastIpList(
    args: GetAnycastIpListCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetAnycastIpListCommandOutput>;
  getAnycastIpList(
    args: GetAnycastIpListCommandInput,
    cb: (err: any, data?: GetAnycastIpListCommandOutput) => void
  ): void;
  getAnycastIpList(
    args: GetAnycastIpListCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetAnycastIpListCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCachePolicyCommand}
   */
  getCachePolicy(
    args: GetCachePolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetCachePolicyCommandOutput>;
  getCachePolicy(
    args: GetCachePolicyCommandInput,
    cb: (err: any, data?: GetCachePolicyCommandOutput) => void
  ): void;
  getCachePolicy(
    args: GetCachePolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetCachePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCachePolicyConfigCommand}
   */
  getCachePolicyConfig(
    args: GetCachePolicyConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetCachePolicyConfigCommandOutput>;
  getCachePolicyConfig(
    args: GetCachePolicyConfigCommandInput,
    cb: (err: any, data?: GetCachePolicyConfigCommandOutput) => void
  ): void;
  getCachePolicyConfig(
    args: GetCachePolicyConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetCachePolicyConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudFrontOriginAccessIdentityCommand}
   */
  getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetCloudFrontOriginAccessIdentityCommandOutput>;
  getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudFrontOriginAccessIdentityConfigCommand}
   */
  getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetCloudFrontOriginAccessIdentityConfigCommandOutput>;
  getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput) => void
  ): void;
  getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionFunctionCommand}
   */
  getConnectionFunction(
    args: GetConnectionFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetConnectionFunctionCommandOutput>;
  getConnectionFunction(
    args: GetConnectionFunctionCommandInput,
    cb: (err: any, data?: GetConnectionFunctionCommandOutput) => void
  ): void;
  getConnectionFunction(
    args: GetConnectionFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionGroupCommand}
   */
  getConnectionGroup(
    args: GetConnectionGroupCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetConnectionGroupCommandOutput>;
  getConnectionGroup(
    args: GetConnectionGroupCommandInput,
    cb: (err: any, data?: GetConnectionGroupCommandOutput) => void
  ): void;
  getConnectionGroup(
    args: GetConnectionGroupCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetConnectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionGroupByRoutingEndpointCommand}
   */
  getConnectionGroupByRoutingEndpoint(
    args: GetConnectionGroupByRoutingEndpointCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetConnectionGroupByRoutingEndpointCommandOutput>;
  getConnectionGroupByRoutingEndpoint(
    args: GetConnectionGroupByRoutingEndpointCommandInput,
    cb: (err: any, data?: GetConnectionGroupByRoutingEndpointCommandOutput) => void
  ): void;
  getConnectionGroupByRoutingEndpoint(
    args: GetConnectionGroupByRoutingEndpointCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetConnectionGroupByRoutingEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContinuousDeploymentPolicyCommand}
   */
  getContinuousDeploymentPolicy(
    args: GetContinuousDeploymentPolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetContinuousDeploymentPolicyCommandOutput>;
  getContinuousDeploymentPolicy(
    args: GetContinuousDeploymentPolicyCommandInput,
    cb: (err: any, data?: GetContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  getContinuousDeploymentPolicy(
    args: GetContinuousDeploymentPolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetContinuousDeploymentPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContinuousDeploymentPolicyConfigCommand}
   */
  getContinuousDeploymentPolicyConfig(
    args: GetContinuousDeploymentPolicyConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetContinuousDeploymentPolicyConfigCommandOutput>;
  getContinuousDeploymentPolicyConfig(
    args: GetContinuousDeploymentPolicyConfigCommandInput,
    cb: (err: any, data?: GetContinuousDeploymentPolicyConfigCommandOutput) => void
  ): void;
  getContinuousDeploymentPolicyConfig(
    args: GetContinuousDeploymentPolicyConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetContinuousDeploymentPolicyConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDistributionCommand}
   */
  getDistribution(
    args: GetDistributionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetDistributionCommandOutput>;
  getDistribution(
    args: GetDistributionCommandInput,
    cb: (err: any, data?: GetDistributionCommandOutput) => void
  ): void;
  getDistribution(
    args: GetDistributionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDistributionConfigCommand}
   */
  getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetDistributionConfigCommandOutput>;
  getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    cb: (err: any, data?: GetDistributionConfigCommandOutput) => void
  ): void;
  getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetDistributionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDistributionTenantCommand}
   */
  getDistributionTenant(
    args: GetDistributionTenantCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetDistributionTenantCommandOutput>;
  getDistributionTenant(
    args: GetDistributionTenantCommandInput,
    cb: (err: any, data?: GetDistributionTenantCommandOutput) => void
  ): void;
  getDistributionTenant(
    args: GetDistributionTenantCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetDistributionTenantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDistributionTenantByDomainCommand}
   */
  getDistributionTenantByDomain(
    args: GetDistributionTenantByDomainCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetDistributionTenantByDomainCommandOutput>;
  getDistributionTenantByDomain(
    args: GetDistributionTenantByDomainCommandInput,
    cb: (err: any, data?: GetDistributionTenantByDomainCommandOutput) => void
  ): void;
  getDistributionTenantByDomain(
    args: GetDistributionTenantByDomainCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetDistributionTenantByDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFieldLevelEncryptionCommand}
   */
  getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetFieldLevelEncryptionCommandOutput>;
  getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionCommandOutput) => void
  ): void;
  getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFieldLevelEncryptionConfigCommand}
   */
  getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetFieldLevelEncryptionConfigCommandOutput>;
  getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFieldLevelEncryptionProfileCommand}
   */
  getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetFieldLevelEncryptionProfileCommandOutput>;
  getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFieldLevelEncryptionProfileConfigCommand}
   */
  getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput>;
  getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileConfigCommandOutput) => void
  ): void;
  getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFunctionCommand}
   */
  getFunction(
    args: GetFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetFunctionCommandOutput>;
  getFunction(
    args: GetFunctionCommandInput,
    cb: (err: any, data?: GetFunctionCommandOutput) => void
  ): void;
  getFunction(
    args: GetFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInvalidationCommand}
   */
  getInvalidation(
    args: GetInvalidationCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetInvalidationCommandOutput>;
  getInvalidation(
    args: GetInvalidationCommandInput,
    cb: (err: any, data?: GetInvalidationCommandOutput) => void
  ): void;
  getInvalidation(
    args: GetInvalidationCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetInvalidationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInvalidationForDistributionTenantCommand}
   */
  getInvalidationForDistributionTenant(
    args: GetInvalidationForDistributionTenantCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetInvalidationForDistributionTenantCommandOutput>;
  getInvalidationForDistributionTenant(
    args: GetInvalidationForDistributionTenantCommandInput,
    cb: (err: any, data?: GetInvalidationForDistributionTenantCommandOutput) => void
  ): void;
  getInvalidationForDistributionTenant(
    args: GetInvalidationForDistributionTenantCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetInvalidationForDistributionTenantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKeyGroupCommand}
   */
  getKeyGroup(
    args: GetKeyGroupCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetKeyGroupCommandOutput>;
  getKeyGroup(
    args: GetKeyGroupCommandInput,
    cb: (err: any, data?: GetKeyGroupCommandOutput) => void
  ): void;
  getKeyGroup(
    args: GetKeyGroupCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetKeyGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKeyGroupConfigCommand}
   */
  getKeyGroupConfig(
    args: GetKeyGroupConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetKeyGroupConfigCommandOutput>;
  getKeyGroupConfig(
    args: GetKeyGroupConfigCommandInput,
    cb: (err: any, data?: GetKeyGroupConfigCommandOutput) => void
  ): void;
  getKeyGroupConfig(
    args: GetKeyGroupConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetKeyGroupConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedCertificateDetailsCommand}
   */
  getManagedCertificateDetails(
    args: GetManagedCertificateDetailsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetManagedCertificateDetailsCommandOutput>;
  getManagedCertificateDetails(
    args: GetManagedCertificateDetailsCommandInput,
    cb: (err: any, data?: GetManagedCertificateDetailsCommandOutput) => void
  ): void;
  getManagedCertificateDetails(
    args: GetManagedCertificateDetailsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetManagedCertificateDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMonitoringSubscriptionCommand}
   */
  getMonitoringSubscription(
    args: GetMonitoringSubscriptionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetMonitoringSubscriptionCommandOutput>;
  getMonitoringSubscription(
    args: GetMonitoringSubscriptionCommandInput,
    cb: (err: any, data?: GetMonitoringSubscriptionCommandOutput) => void
  ): void;
  getMonitoringSubscription(
    args: GetMonitoringSubscriptionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetMonitoringSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOriginAccessControlCommand}
   */
  getOriginAccessControl(
    args: GetOriginAccessControlCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetOriginAccessControlCommandOutput>;
  getOriginAccessControl(
    args: GetOriginAccessControlCommandInput,
    cb: (err: any, data?: GetOriginAccessControlCommandOutput) => void
  ): void;
  getOriginAccessControl(
    args: GetOriginAccessControlCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetOriginAccessControlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOriginAccessControlConfigCommand}
   */
  getOriginAccessControlConfig(
    args: GetOriginAccessControlConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetOriginAccessControlConfigCommandOutput>;
  getOriginAccessControlConfig(
    args: GetOriginAccessControlConfigCommandInput,
    cb: (err: any, data?: GetOriginAccessControlConfigCommandOutput) => void
  ): void;
  getOriginAccessControlConfig(
    args: GetOriginAccessControlConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetOriginAccessControlConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOriginRequestPolicyCommand}
   */
  getOriginRequestPolicy(
    args: GetOriginRequestPolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetOriginRequestPolicyCommandOutput>;
  getOriginRequestPolicy(
    args: GetOriginRequestPolicyCommandInput,
    cb: (err: any, data?: GetOriginRequestPolicyCommandOutput) => void
  ): void;
  getOriginRequestPolicy(
    args: GetOriginRequestPolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetOriginRequestPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOriginRequestPolicyConfigCommand}
   */
  getOriginRequestPolicyConfig(
    args: GetOriginRequestPolicyConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetOriginRequestPolicyConfigCommandOutput>;
  getOriginRequestPolicyConfig(
    args: GetOriginRequestPolicyConfigCommandInput,
    cb: (err: any, data?: GetOriginRequestPolicyConfigCommandOutput) => void
  ): void;
  getOriginRequestPolicyConfig(
    args: GetOriginRequestPolicyConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetOriginRequestPolicyConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPublicKeyCommand}
   */
  getPublicKey(
    args: GetPublicKeyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetPublicKeyCommandOutput>;
  getPublicKey(
    args: GetPublicKeyCommandInput,
    cb: (err: any, data?: GetPublicKeyCommandOutput) => void
  ): void;
  getPublicKey(
    args: GetPublicKeyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPublicKeyConfigCommand}
   */
  getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetPublicKeyConfigCommandOutput>;
  getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    cb: (err: any, data?: GetPublicKeyConfigCommandOutput) => void
  ): void;
  getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetPublicKeyConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRealtimeLogConfigCommand}
   */
  getRealtimeLogConfig(): Promise<GetRealtimeLogConfigCommandOutput>;
  getRealtimeLogConfig(
    args: GetRealtimeLogConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetRealtimeLogConfigCommandOutput>;
  getRealtimeLogConfig(
    args: GetRealtimeLogConfigCommandInput,
    cb: (err: any, data?: GetRealtimeLogConfigCommandOutput) => void
  ): void;
  getRealtimeLogConfig(
    args: GetRealtimeLogConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetRealtimeLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResponseHeadersPolicyCommand}
   */
  getResponseHeadersPolicy(
    args: GetResponseHeadersPolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetResponseHeadersPolicyCommandOutput>;
  getResponseHeadersPolicy(
    args: GetResponseHeadersPolicyCommandInput,
    cb: (err: any, data?: GetResponseHeadersPolicyCommandOutput) => void
  ): void;
  getResponseHeadersPolicy(
    args: GetResponseHeadersPolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetResponseHeadersPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResponseHeadersPolicyConfigCommand}
   */
  getResponseHeadersPolicyConfig(
    args: GetResponseHeadersPolicyConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetResponseHeadersPolicyConfigCommandOutput>;
  getResponseHeadersPolicyConfig(
    args: GetResponseHeadersPolicyConfigCommandInput,
    cb: (err: any, data?: GetResponseHeadersPolicyConfigCommandOutput) => void
  ): void;
  getResponseHeadersPolicyConfig(
    args: GetResponseHeadersPolicyConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetResponseHeadersPolicyConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamingDistributionCommand}
   */
  getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetStreamingDistributionCommandOutput>;
  getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    cb: (err: any, data?: GetStreamingDistributionCommandOutput) => void
  ): void;
  getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetStreamingDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamingDistributionConfigCommand}
   */
  getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetStreamingDistributionConfigCommandOutput>;
  getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    cb: (err: any, data?: GetStreamingDistributionConfigCommandOutput) => void
  ): void;
  getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetStreamingDistributionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrustStoreCommand}
   */
  getTrustStore(
    args: GetTrustStoreCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetTrustStoreCommandOutput>;
  getTrustStore(
    args: GetTrustStoreCommandInput,
    cb: (err: any, data?: GetTrustStoreCommandOutput) => void
  ): void;
  getTrustStore(
    args: GetTrustStoreCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVpcOriginCommand}
   */
  getVpcOrigin(
    args: GetVpcOriginCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<GetVpcOriginCommandOutput>;
  getVpcOrigin(
    args: GetVpcOriginCommandInput,
    cb: (err: any, data?: GetVpcOriginCommandOutput) => void
  ): void;
  getVpcOrigin(
    args: GetVpcOriginCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: GetVpcOriginCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnycastIpListsCommand}
   */
  listAnycastIpLists(): Promise<ListAnycastIpListsCommandOutput>;
  listAnycastIpLists(
    args: ListAnycastIpListsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListAnycastIpListsCommandOutput>;
  listAnycastIpLists(
    args: ListAnycastIpListsCommandInput,
    cb: (err: any, data?: ListAnycastIpListsCommandOutput) => void
  ): void;
  listAnycastIpLists(
    args: ListAnycastIpListsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListAnycastIpListsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCachePoliciesCommand}
   */
  listCachePolicies(): Promise<ListCachePoliciesCommandOutput>;
  listCachePolicies(
    args: ListCachePoliciesCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListCachePoliciesCommandOutput>;
  listCachePolicies(
    args: ListCachePoliciesCommandInput,
    cb: (err: any, data?: ListCachePoliciesCommandOutput) => void
  ): void;
  listCachePolicies(
    args: ListCachePoliciesCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListCachePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCloudFrontOriginAccessIdentitiesCommand}
   */
  listCloudFrontOriginAccessIdentities(): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput>;
  listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput>;
  listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    cb: (err: any, data?: ListCloudFrontOriginAccessIdentitiesCommandOutput) => void
  ): void;
  listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListCloudFrontOriginAccessIdentitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConflictingAliasesCommand}
   */
  listConflictingAliases(
    args: ListConflictingAliasesCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListConflictingAliasesCommandOutput>;
  listConflictingAliases(
    args: ListConflictingAliasesCommandInput,
    cb: (err: any, data?: ListConflictingAliasesCommandOutput) => void
  ): void;
  listConflictingAliases(
    args: ListConflictingAliasesCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListConflictingAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionFunctionsCommand}
   */
  listConnectionFunctions(): Promise<ListConnectionFunctionsCommandOutput>;
  listConnectionFunctions(
    args: ListConnectionFunctionsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListConnectionFunctionsCommandOutput>;
  listConnectionFunctions(
    args: ListConnectionFunctionsCommandInput,
    cb: (err: any, data?: ListConnectionFunctionsCommandOutput) => void
  ): void;
  listConnectionFunctions(
    args: ListConnectionFunctionsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListConnectionFunctionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionGroupsCommand}
   */
  listConnectionGroups(): Promise<ListConnectionGroupsCommandOutput>;
  listConnectionGroups(
    args: ListConnectionGroupsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListConnectionGroupsCommandOutput>;
  listConnectionGroups(
    args: ListConnectionGroupsCommandInput,
    cb: (err: any, data?: ListConnectionGroupsCommandOutput) => void
  ): void;
  listConnectionGroups(
    args: ListConnectionGroupsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListConnectionGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContinuousDeploymentPoliciesCommand}
   */
  listContinuousDeploymentPolicies(): Promise<ListContinuousDeploymentPoliciesCommandOutput>;
  listContinuousDeploymentPolicies(
    args: ListContinuousDeploymentPoliciesCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListContinuousDeploymentPoliciesCommandOutput>;
  listContinuousDeploymentPolicies(
    args: ListContinuousDeploymentPoliciesCommandInput,
    cb: (err: any, data?: ListContinuousDeploymentPoliciesCommandOutput) => void
  ): void;
  listContinuousDeploymentPolicies(
    args: ListContinuousDeploymentPoliciesCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListContinuousDeploymentPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsCommand}
   */
  listDistributions(): Promise<ListDistributionsCommandOutput>;
  listDistributions(
    args: ListDistributionsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionsCommandOutput>;
  listDistributions(
    args: ListDistributionsCommandInput,
    cb: (err: any, data?: ListDistributionsCommandOutput) => void
  ): void;
  listDistributions(
    args: ListDistributionsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByAnycastIpListIdCommand}
   */
  listDistributionsByAnycastIpListId(
    args: ListDistributionsByAnycastIpListIdCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionsByAnycastIpListIdCommandOutput>;
  listDistributionsByAnycastIpListId(
    args: ListDistributionsByAnycastIpListIdCommandInput,
    cb: (err: any, data?: ListDistributionsByAnycastIpListIdCommandOutput) => void
  ): void;
  listDistributionsByAnycastIpListId(
    args: ListDistributionsByAnycastIpListIdCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionsByAnycastIpListIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByCachePolicyIdCommand}
   */
  listDistributionsByCachePolicyId(
    args: ListDistributionsByCachePolicyIdCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionsByCachePolicyIdCommandOutput>;
  listDistributionsByCachePolicyId(
    args: ListDistributionsByCachePolicyIdCommandInput,
    cb: (err: any, data?: ListDistributionsByCachePolicyIdCommandOutput) => void
  ): void;
  listDistributionsByCachePolicyId(
    args: ListDistributionsByCachePolicyIdCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionsByCachePolicyIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByConnectionFunctionCommand}
   */
  listDistributionsByConnectionFunction(
    args: ListDistributionsByConnectionFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionsByConnectionFunctionCommandOutput>;
  listDistributionsByConnectionFunction(
    args: ListDistributionsByConnectionFunctionCommandInput,
    cb: (err: any, data?: ListDistributionsByConnectionFunctionCommandOutput) => void
  ): void;
  listDistributionsByConnectionFunction(
    args: ListDistributionsByConnectionFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionsByConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByConnectionModeCommand}
   */
  listDistributionsByConnectionMode(
    args: ListDistributionsByConnectionModeCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionsByConnectionModeCommandOutput>;
  listDistributionsByConnectionMode(
    args: ListDistributionsByConnectionModeCommandInput,
    cb: (err: any, data?: ListDistributionsByConnectionModeCommandOutput) => void
  ): void;
  listDistributionsByConnectionMode(
    args: ListDistributionsByConnectionModeCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionsByConnectionModeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByKeyGroupCommand}
   */
  listDistributionsByKeyGroup(
    args: ListDistributionsByKeyGroupCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionsByKeyGroupCommandOutput>;
  listDistributionsByKeyGroup(
    args: ListDistributionsByKeyGroupCommandInput,
    cb: (err: any, data?: ListDistributionsByKeyGroupCommandOutput) => void
  ): void;
  listDistributionsByKeyGroup(
    args: ListDistributionsByKeyGroupCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionsByKeyGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByOriginRequestPolicyIdCommand}
   */
  listDistributionsByOriginRequestPolicyId(
    args: ListDistributionsByOriginRequestPolicyIdCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionsByOriginRequestPolicyIdCommandOutput>;
  listDistributionsByOriginRequestPolicyId(
    args: ListDistributionsByOriginRequestPolicyIdCommandInput,
    cb: (err: any, data?: ListDistributionsByOriginRequestPolicyIdCommandOutput) => void
  ): void;
  listDistributionsByOriginRequestPolicyId(
    args: ListDistributionsByOriginRequestPolicyIdCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionsByOriginRequestPolicyIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByOwnedResourceCommand}
   */
  listDistributionsByOwnedResource(
    args: ListDistributionsByOwnedResourceCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionsByOwnedResourceCommandOutput>;
  listDistributionsByOwnedResource(
    args: ListDistributionsByOwnedResourceCommandInput,
    cb: (err: any, data?: ListDistributionsByOwnedResourceCommandOutput) => void
  ): void;
  listDistributionsByOwnedResource(
    args: ListDistributionsByOwnedResourceCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionsByOwnedResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByRealtimeLogConfigCommand}
   */
  listDistributionsByRealtimeLogConfig(): Promise<ListDistributionsByRealtimeLogConfigCommandOutput>;
  listDistributionsByRealtimeLogConfig(
    args: ListDistributionsByRealtimeLogConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionsByRealtimeLogConfigCommandOutput>;
  listDistributionsByRealtimeLogConfig(
    args: ListDistributionsByRealtimeLogConfigCommandInput,
    cb: (err: any, data?: ListDistributionsByRealtimeLogConfigCommandOutput) => void
  ): void;
  listDistributionsByRealtimeLogConfig(
    args: ListDistributionsByRealtimeLogConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionsByRealtimeLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByResponseHeadersPolicyIdCommand}
   */
  listDistributionsByResponseHeadersPolicyId(
    args: ListDistributionsByResponseHeadersPolicyIdCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionsByResponseHeadersPolicyIdCommandOutput>;
  listDistributionsByResponseHeadersPolicyId(
    args: ListDistributionsByResponseHeadersPolicyIdCommandInput,
    cb: (err: any, data?: ListDistributionsByResponseHeadersPolicyIdCommandOutput) => void
  ): void;
  listDistributionsByResponseHeadersPolicyId(
    args: ListDistributionsByResponseHeadersPolicyIdCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionsByResponseHeadersPolicyIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByTrustStoreCommand}
   */
  listDistributionsByTrustStore(
    args: ListDistributionsByTrustStoreCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionsByTrustStoreCommandOutput>;
  listDistributionsByTrustStore(
    args: ListDistributionsByTrustStoreCommandInput,
    cb: (err: any, data?: ListDistributionsByTrustStoreCommandOutput) => void
  ): void;
  listDistributionsByTrustStore(
    args: ListDistributionsByTrustStoreCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionsByTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByVpcOriginIdCommand}
   */
  listDistributionsByVpcOriginId(
    args: ListDistributionsByVpcOriginIdCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionsByVpcOriginIdCommandOutput>;
  listDistributionsByVpcOriginId(
    args: ListDistributionsByVpcOriginIdCommandInput,
    cb: (err: any, data?: ListDistributionsByVpcOriginIdCommandOutput) => void
  ): void;
  listDistributionsByVpcOriginId(
    args: ListDistributionsByVpcOriginIdCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionsByVpcOriginIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByWebACLIdCommand}
   */
  listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionsByWebACLIdCommandOutput>;
  listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    cb: (err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void
  ): void;
  listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionTenantsCommand}
   */
  listDistributionTenants(): Promise<ListDistributionTenantsCommandOutput>;
  listDistributionTenants(
    args: ListDistributionTenantsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionTenantsCommandOutput>;
  listDistributionTenants(
    args: ListDistributionTenantsCommandInput,
    cb: (err: any, data?: ListDistributionTenantsCommandOutput) => void
  ): void;
  listDistributionTenants(
    args: ListDistributionTenantsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionTenantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionTenantsByCustomizationCommand}
   */
  listDistributionTenantsByCustomization(): Promise<ListDistributionTenantsByCustomizationCommandOutput>;
  listDistributionTenantsByCustomization(
    args: ListDistributionTenantsByCustomizationCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDistributionTenantsByCustomizationCommandOutput>;
  listDistributionTenantsByCustomization(
    args: ListDistributionTenantsByCustomizationCommandInput,
    cb: (err: any, data?: ListDistributionTenantsByCustomizationCommandOutput) => void
  ): void;
  listDistributionTenantsByCustomization(
    args: ListDistributionTenantsByCustomizationCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDistributionTenantsByCustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainConflictsCommand}
   */
  listDomainConflicts(
    args: ListDomainConflictsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListDomainConflictsCommandOutput>;
  listDomainConflicts(
    args: ListDomainConflictsCommandInput,
    cb: (err: any, data?: ListDomainConflictsCommandOutput) => void
  ): void;
  listDomainConflicts(
    args: ListDomainConflictsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListDomainConflictsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFieldLevelEncryptionConfigsCommand}
   */
  listFieldLevelEncryptionConfigs(): Promise<ListFieldLevelEncryptionConfigsCommandOutput>;
  listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListFieldLevelEncryptionConfigsCommandOutput>;
  listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    cb: (err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void
  ): void;
  listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFieldLevelEncryptionProfilesCommand}
   */
  listFieldLevelEncryptionProfiles(): Promise<ListFieldLevelEncryptionProfilesCommandOutput>;
  listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListFieldLevelEncryptionProfilesCommandOutput>;
  listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    cb: (err: any, data?: ListFieldLevelEncryptionProfilesCommandOutput) => void
  ): void;
  listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListFieldLevelEncryptionProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFunctionsCommand}
   */
  listFunctions(): Promise<ListFunctionsCommandOutput>;
  listFunctions(
    args: ListFunctionsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListFunctionsCommandOutput>;
  listFunctions(
    args: ListFunctionsCommandInput,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;
  listFunctions(
    args: ListFunctionsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvalidationsCommand}
   */
  listInvalidations(
    args: ListInvalidationsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListInvalidationsCommandOutput>;
  listInvalidations(
    args: ListInvalidationsCommandInput,
    cb: (err: any, data?: ListInvalidationsCommandOutput) => void
  ): void;
  listInvalidations(
    args: ListInvalidationsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListInvalidationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvalidationsForDistributionTenantCommand}
   */
  listInvalidationsForDistributionTenant(
    args: ListInvalidationsForDistributionTenantCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListInvalidationsForDistributionTenantCommandOutput>;
  listInvalidationsForDistributionTenant(
    args: ListInvalidationsForDistributionTenantCommandInput,
    cb: (err: any, data?: ListInvalidationsForDistributionTenantCommandOutput) => void
  ): void;
  listInvalidationsForDistributionTenant(
    args: ListInvalidationsForDistributionTenantCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListInvalidationsForDistributionTenantCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKeyGroupsCommand}
   */
  listKeyGroups(): Promise<ListKeyGroupsCommandOutput>;
  listKeyGroups(
    args: ListKeyGroupsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListKeyGroupsCommandOutput>;
  listKeyGroups(
    args: ListKeyGroupsCommandInput,
    cb: (err: any, data?: ListKeyGroupsCommandOutput) => void
  ): void;
  listKeyGroups(
    args: ListKeyGroupsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListKeyGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKeyValueStoresCommand}
   */
  listKeyValueStores(): Promise<ListKeyValueStoresCommandOutput>;
  listKeyValueStores(
    args: ListKeyValueStoresCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListKeyValueStoresCommandOutput>;
  listKeyValueStores(
    args: ListKeyValueStoresCommandInput,
    cb: (err: any, data?: ListKeyValueStoresCommandOutput) => void
  ): void;
  listKeyValueStores(
    args: ListKeyValueStoresCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListKeyValueStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOriginAccessControlsCommand}
   */
  listOriginAccessControls(): Promise<ListOriginAccessControlsCommandOutput>;
  listOriginAccessControls(
    args: ListOriginAccessControlsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListOriginAccessControlsCommandOutput>;
  listOriginAccessControls(
    args: ListOriginAccessControlsCommandInput,
    cb: (err: any, data?: ListOriginAccessControlsCommandOutput) => void
  ): void;
  listOriginAccessControls(
    args: ListOriginAccessControlsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListOriginAccessControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOriginRequestPoliciesCommand}
   */
  listOriginRequestPolicies(): Promise<ListOriginRequestPoliciesCommandOutput>;
  listOriginRequestPolicies(
    args: ListOriginRequestPoliciesCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListOriginRequestPoliciesCommandOutput>;
  listOriginRequestPolicies(
    args: ListOriginRequestPoliciesCommandInput,
    cb: (err: any, data?: ListOriginRequestPoliciesCommandOutput) => void
  ): void;
  listOriginRequestPolicies(
    args: ListOriginRequestPoliciesCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListOriginRequestPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPublicKeysCommand}
   */
  listPublicKeys(): Promise<ListPublicKeysCommandOutput>;
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListPublicKeysCommandOutput>;
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    cb: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): void;
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRealtimeLogConfigsCommand}
   */
  listRealtimeLogConfigs(): Promise<ListRealtimeLogConfigsCommandOutput>;
  listRealtimeLogConfigs(
    args: ListRealtimeLogConfigsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListRealtimeLogConfigsCommandOutput>;
  listRealtimeLogConfigs(
    args: ListRealtimeLogConfigsCommandInput,
    cb: (err: any, data?: ListRealtimeLogConfigsCommandOutput) => void
  ): void;
  listRealtimeLogConfigs(
    args: ListRealtimeLogConfigsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListRealtimeLogConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResponseHeadersPoliciesCommand}
   */
  listResponseHeadersPolicies(): Promise<ListResponseHeadersPoliciesCommandOutput>;
  listResponseHeadersPolicies(
    args: ListResponseHeadersPoliciesCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListResponseHeadersPoliciesCommandOutput>;
  listResponseHeadersPolicies(
    args: ListResponseHeadersPoliciesCommandInput,
    cb: (err: any, data?: ListResponseHeadersPoliciesCommandOutput) => void
  ): void;
  listResponseHeadersPolicies(
    args: ListResponseHeadersPoliciesCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListResponseHeadersPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamingDistributionsCommand}
   */
  listStreamingDistributions(): Promise<ListStreamingDistributionsCommandOutput>;
  listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListStreamingDistributionsCommandOutput>;
  listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    cb: (err: any, data?: ListStreamingDistributionsCommandOutput) => void
  ): void;
  listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListStreamingDistributionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrustStoresCommand}
   */
  listTrustStores(): Promise<ListTrustStoresCommandOutput>;
  listTrustStores(
    args: ListTrustStoresCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListTrustStoresCommandOutput>;
  listTrustStores(
    args: ListTrustStoresCommandInput,
    cb: (err: any, data?: ListTrustStoresCommandOutput) => void
  ): void;
  listTrustStores(
    args: ListTrustStoresCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListTrustStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVpcOriginsCommand}
   */
  listVpcOrigins(): Promise<ListVpcOriginsCommandOutput>;
  listVpcOrigins(
    args: ListVpcOriginsCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<ListVpcOriginsCommandOutput>;
  listVpcOrigins(
    args: ListVpcOriginsCommandInput,
    cb: (err: any, data?: ListVpcOriginsCommandOutput) => void
  ): void;
  listVpcOrigins(
    args: ListVpcOriginsCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: ListVpcOriginsCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishConnectionFunctionCommand}
   */
  publishConnectionFunction(
    args: PublishConnectionFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<PublishConnectionFunctionCommandOutput>;
  publishConnectionFunction(
    args: PublishConnectionFunctionCommandInput,
    cb: (err: any, data?: PublishConnectionFunctionCommandOutput) => void
  ): void;
  publishConnectionFunction(
    args: PublishConnectionFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: PublishConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishFunctionCommand}
   */
  publishFunction(
    args: PublishFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<PublishFunctionCommandOutput>;
  publishFunction(
    args: PublishFunctionCommandInput,
    cb: (err: any, data?: PublishFunctionCommandOutput) => void
  ): void;
  publishFunction(
    args: PublishFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: PublishFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestConnectionFunctionCommand}
   */
  testConnectionFunction(
    args: TestConnectionFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<TestConnectionFunctionCommandOutput>;
  testConnectionFunction(
    args: TestConnectionFunctionCommandInput,
    cb: (err: any, data?: TestConnectionFunctionCommandOutput) => void
  ): void;
  testConnectionFunction(
    args: TestConnectionFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: TestConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link TestFunctionCommand}
   */
  testFunction(
    args: TestFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<TestFunctionCommandOutput>;
  testFunction(
    args: TestFunctionCommandInput,
    cb: (err: any, data?: TestFunctionCommandOutput) => void
  ): void;
  testFunction(
    args: TestFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: TestFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnycastIpListCommand}
   */
  updateAnycastIpList(
    args: UpdateAnycastIpListCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateAnycastIpListCommandOutput>;
  updateAnycastIpList(
    args: UpdateAnycastIpListCommandInput,
    cb: (err: any, data?: UpdateAnycastIpListCommandOutput) => void
  ): void;
  updateAnycastIpList(
    args: UpdateAnycastIpListCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateAnycastIpListCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCachePolicyCommand}
   */
  updateCachePolicy(
    args: UpdateCachePolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateCachePolicyCommandOutput>;
  updateCachePolicy(
    args: UpdateCachePolicyCommandInput,
    cb: (err: any, data?: UpdateCachePolicyCommandOutput) => void
  ): void;
  updateCachePolicy(
    args: UpdateCachePolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateCachePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCloudFrontOriginAccessIdentityCommand}
   */
  updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput>;
  updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: UpdateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectionFunctionCommand}
   */
  updateConnectionFunction(
    args: UpdateConnectionFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateConnectionFunctionCommandOutput>;
  updateConnectionFunction(
    args: UpdateConnectionFunctionCommandInput,
    cb: (err: any, data?: UpdateConnectionFunctionCommandOutput) => void
  ): void;
  updateConnectionFunction(
    args: UpdateConnectionFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectionGroupCommand}
   */
  updateConnectionGroup(
    args: UpdateConnectionGroupCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateConnectionGroupCommandOutput>;
  updateConnectionGroup(
    args: UpdateConnectionGroupCommandInput,
    cb: (err: any, data?: UpdateConnectionGroupCommandOutput) => void
  ): void;
  updateConnectionGroup(
    args: UpdateConnectionGroupCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateConnectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContinuousDeploymentPolicyCommand}
   */
  updateContinuousDeploymentPolicy(
    args: UpdateContinuousDeploymentPolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateContinuousDeploymentPolicyCommandOutput>;
  updateContinuousDeploymentPolicy(
    args: UpdateContinuousDeploymentPolicyCommandInput,
    cb: (err: any, data?: UpdateContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  updateContinuousDeploymentPolicy(
    args: UpdateContinuousDeploymentPolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateContinuousDeploymentPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDistributionCommand}
   */
  updateDistribution(
    args: UpdateDistributionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateDistributionCommandOutput>;
  updateDistribution(
    args: UpdateDistributionCommandInput,
    cb: (err: any, data?: UpdateDistributionCommandOutput) => void
  ): void;
  updateDistribution(
    args: UpdateDistributionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDistributionTenantCommand}
   */
  updateDistributionTenant(
    args: UpdateDistributionTenantCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateDistributionTenantCommandOutput>;
  updateDistributionTenant(
    args: UpdateDistributionTenantCommandInput,
    cb: (err: any, data?: UpdateDistributionTenantCommandOutput) => void
  ): void;
  updateDistributionTenant(
    args: UpdateDistributionTenantCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateDistributionTenantCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDistributionWithStagingConfigCommand}
   */
  updateDistributionWithStagingConfig(
    args: UpdateDistributionWithStagingConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateDistributionWithStagingConfigCommandOutput>;
  updateDistributionWithStagingConfig(
    args: UpdateDistributionWithStagingConfigCommandInput,
    cb: (err: any, data?: UpdateDistributionWithStagingConfigCommandOutput) => void
  ): void;
  updateDistributionWithStagingConfig(
    args: UpdateDistributionWithStagingConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateDistributionWithStagingConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainAssociationCommand}
   */
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateDomainAssociationCommandOutput>;
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    cb: (err: any, data?: UpdateDomainAssociationCommandOutput) => void
  ): void;
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFieldLevelEncryptionConfigCommand}
   */
  updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateFieldLevelEncryptionConfigCommandOutput>;
  updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: UpdateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFieldLevelEncryptionProfileCommand}
   */
  updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateFieldLevelEncryptionProfileCommandOutput>;
  updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: UpdateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFunctionCommand}
   */
  updateFunction(
    args: UpdateFunctionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateFunctionCommandOutput>;
  updateFunction(
    args: UpdateFunctionCommandInput,
    cb: (err: any, data?: UpdateFunctionCommandOutput) => void
  ): void;
  updateFunction(
    args: UpdateFunctionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKeyGroupCommand}
   */
  updateKeyGroup(
    args: UpdateKeyGroupCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateKeyGroupCommandOutput>;
  updateKeyGroup(
    args: UpdateKeyGroupCommandInput,
    cb: (err: any, data?: UpdateKeyGroupCommandOutput) => void
  ): void;
  updateKeyGroup(
    args: UpdateKeyGroupCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateKeyGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKeyValueStoreCommand}
   */
  updateKeyValueStore(
    args: UpdateKeyValueStoreCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateKeyValueStoreCommandOutput>;
  updateKeyValueStore(
    args: UpdateKeyValueStoreCommandInput,
    cb: (err: any, data?: UpdateKeyValueStoreCommandOutput) => void
  ): void;
  updateKeyValueStore(
    args: UpdateKeyValueStoreCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateKeyValueStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOriginAccessControlCommand}
   */
  updateOriginAccessControl(
    args: UpdateOriginAccessControlCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateOriginAccessControlCommandOutput>;
  updateOriginAccessControl(
    args: UpdateOriginAccessControlCommandInput,
    cb: (err: any, data?: UpdateOriginAccessControlCommandOutput) => void
  ): void;
  updateOriginAccessControl(
    args: UpdateOriginAccessControlCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateOriginAccessControlCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOriginRequestPolicyCommand}
   */
  updateOriginRequestPolicy(
    args: UpdateOriginRequestPolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateOriginRequestPolicyCommandOutput>;
  updateOriginRequestPolicy(
    args: UpdateOriginRequestPolicyCommandInput,
    cb: (err: any, data?: UpdateOriginRequestPolicyCommandOutput) => void
  ): void;
  updateOriginRequestPolicy(
    args: UpdateOriginRequestPolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateOriginRequestPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePublicKeyCommand}
   */
  updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdatePublicKeyCommandOutput>;
  updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    cb: (err: any, data?: UpdatePublicKeyCommandOutput) => void
  ): void;
  updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdatePublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRealtimeLogConfigCommand}
   */
  updateRealtimeLogConfig(): Promise<UpdateRealtimeLogConfigCommandOutput>;
  updateRealtimeLogConfig(
    args: UpdateRealtimeLogConfigCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateRealtimeLogConfigCommandOutput>;
  updateRealtimeLogConfig(
    args: UpdateRealtimeLogConfigCommandInput,
    cb: (err: any, data?: UpdateRealtimeLogConfigCommandOutput) => void
  ): void;
  updateRealtimeLogConfig(
    args: UpdateRealtimeLogConfigCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateRealtimeLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResponseHeadersPolicyCommand}
   */
  updateResponseHeadersPolicy(
    args: UpdateResponseHeadersPolicyCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateResponseHeadersPolicyCommandOutput>;
  updateResponseHeadersPolicy(
    args: UpdateResponseHeadersPolicyCommandInput,
    cb: (err: any, data?: UpdateResponseHeadersPolicyCommandOutput) => void
  ): void;
  updateResponseHeadersPolicy(
    args: UpdateResponseHeadersPolicyCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateResponseHeadersPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStreamingDistributionCommand}
   */
  updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateStreamingDistributionCommandOutput>;
  updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    cb: (err: any, data?: UpdateStreamingDistributionCommandOutput) => void
  ): void;
  updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateStreamingDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrustStoreCommand}
   */
  updateTrustStore(
    args: UpdateTrustStoreCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateTrustStoreCommandOutput>;
  updateTrustStore(
    args: UpdateTrustStoreCommandInput,
    cb: (err: any, data?: UpdateTrustStoreCommandOutput) => void
  ): void;
  updateTrustStore(
    args: UpdateTrustStoreCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVpcOriginCommand}
   */
  updateVpcOrigin(
    args: UpdateVpcOriginCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<UpdateVpcOriginCommandOutput>;
  updateVpcOrigin(
    args: UpdateVpcOriginCommandInput,
    cb: (err: any, data?: UpdateVpcOriginCommandOutput) => void
  ): void;
  updateVpcOrigin(
    args: UpdateVpcOriginCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: UpdateVpcOriginCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyDnsConfigurationCommand}
   */
  verifyDnsConfiguration(
    args: VerifyDnsConfigurationCommandInput,
    options?: CloudFrontRequestOptions
  ): Promise<VerifyDnsConfigurationCommandOutput>;
  verifyDnsConfiguration(
    args: VerifyDnsConfigurationCommandInput,
    cb: (err: any, data?: VerifyDnsConfigurationCommandOutput) => void
  ): void;
  verifyDnsConfiguration(
    args: VerifyDnsConfigurationCommandInput,
    options: CloudFrontRequestOptions,
    cb: (err: any, data?: VerifyDnsConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCloudFrontOriginAccessIdentitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCloudFrontOriginAccessIdentitiesCommandOutput}.
   */
  paginateListCloudFrontOriginAccessIdentities(
    args?: ListCloudFrontOriginAccessIdentitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCloudFrontOriginAccessIdentitiesCommandOutput>;

  /**
   * @see {@link ListConnectionFunctionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConnectionFunctionsCommandOutput}.
   */
  paginateListConnectionFunctions(
    args?: ListConnectionFunctionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConnectionFunctionsCommandOutput>;

  /**
   * @see {@link ListConnectionGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConnectionGroupsCommandOutput}.
   */
  paginateListConnectionGroups(
    args?: ListConnectionGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConnectionGroupsCommandOutput>;

  /**
   * @see {@link ListDistributionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDistributionsCommandOutput}.
   */
  paginateListDistributions(
    args?: ListDistributionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDistributionsCommandOutput>;

  /**
   * @see {@link ListDistributionsByConnectionFunctionCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDistributionsByConnectionFunctionCommandOutput}.
   */
  paginateListDistributionsByConnectionFunction(
    args: ListDistributionsByConnectionFunctionCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDistributionsByConnectionFunctionCommandOutput>;

  /**
   * @see {@link ListDistributionsByConnectionModeCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDistributionsByConnectionModeCommandOutput}.
   */
  paginateListDistributionsByConnectionMode(
    args: ListDistributionsByConnectionModeCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDistributionsByConnectionModeCommandOutput>;

  /**
   * @see {@link ListDistributionsByTrustStoreCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDistributionsByTrustStoreCommandOutput}.
   */
  paginateListDistributionsByTrustStore(
    args: ListDistributionsByTrustStoreCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDistributionsByTrustStoreCommandOutput>;

  /**
   * @see {@link ListDistributionTenantsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDistributionTenantsCommandOutput}.
   */
  paginateListDistributionTenants(
    args?: ListDistributionTenantsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDistributionTenantsCommandOutput>;

  /**
   * @see {@link ListDistributionTenantsByCustomizationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDistributionTenantsByCustomizationCommandOutput}.
   */
  paginateListDistributionTenantsByCustomization(
    args?: ListDistributionTenantsByCustomizationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDistributionTenantsByCustomizationCommandOutput>;

  /**
   * @see {@link ListDomainConflictsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainConflictsCommandOutput}.
   */
  paginateListDomainConflicts(
    args: ListDomainConflictsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainConflictsCommandOutput>;

  /**
   * @see {@link ListInvalidationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInvalidationsCommandOutput}.
   */
  paginateListInvalidations(
    args: ListInvalidationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInvalidationsCommandOutput>;

  /**
   * @see {@link ListInvalidationsForDistributionTenantCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInvalidationsForDistributionTenantCommandOutput}.
   */
  paginateListInvalidationsForDistributionTenant(
    args: ListInvalidationsForDistributionTenantCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInvalidationsForDistributionTenantCommandOutput>;

  /**
   * @see {@link ListKeyValueStoresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKeyValueStoresCommandOutput}.
   */
  paginateListKeyValueStores(
    args?: ListKeyValueStoresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKeyValueStoresCommandOutput>;

  /**
   * @see {@link ListOriginAccessControlsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOriginAccessControlsCommandOutput}.
   */
  paginateListOriginAccessControls(
    args?: ListOriginAccessControlsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOriginAccessControlsCommandOutput>;

  /**
   * @see {@link ListPublicKeysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPublicKeysCommandOutput}.
   */
  paginateListPublicKeys(
    args?: ListPublicKeysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPublicKeysCommandOutput>;

  /**
   * @see {@link ListStreamingDistributionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListStreamingDistributionsCommandOutput}.
   */
  paginateListStreamingDistributions(
    args?: ListStreamingDistributionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListStreamingDistributionsCommandOutput>;

  /**
   * @see {@link ListTrustStoresCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTrustStoresCommandOutput}.
   */
  paginateListTrustStores(
    args?: ListTrustStoresCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTrustStoresCommandOutput>;

  /**
   * @see {@link GetDistributionCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilDistributionDeployed(
    args: GetDistributionCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<CloudFront>, "client">
  ): Promise<WaiterResult<GetDistributionCommandOutput>>;

  /**
   * @see {@link GetInvalidationCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilInvalidationCompleted(
    args: GetInvalidationCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<CloudFront>, "client">
  ): Promise<WaiterResult<GetInvalidationCommandOutput>>;

  /**
   * @see {@link GetInvalidationForDistributionTenantCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilInvalidationForDistributionTenantCompleted(
    args: GetInvalidationForDistributionTenantCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<CloudFront>, "client">
  ): Promise<WaiterResult<GetInvalidationForDistributionTenantCommandOutput>>;

  /**
   * @see {@link GetStreamingDistributionCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilStreamingDistributionDeployed(
    args: GetStreamingDistributionCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<CloudFront>, "client">
  ): Promise<WaiterResult<GetStreamingDistributionCommandOutput>>;
}

/**
 * <fullname>Amazon CloudFront</fullname> <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html">Amazon CloudFront Developer Guide</a>.</p>
 * @public
 */
export class CloudFront extends CloudFrontClient implements CloudFront {}
createAggregatedClient(commands, CloudFront, { paginators, waiters });
