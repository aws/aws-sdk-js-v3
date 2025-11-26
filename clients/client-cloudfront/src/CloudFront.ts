// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CloudFrontClient } from "./CloudFrontClient";
import {
  AssociateAliasCommand,
  AssociateAliasCommandInput,
  AssociateAliasCommandOutput,
} from "./commands/AssociateAliasCommand";
import {
  AssociateDistributionTenantWebACLCommand,
  AssociateDistributionTenantWebACLCommandInput,
  AssociateDistributionTenantWebACLCommandOutput,
} from "./commands/AssociateDistributionTenantWebACLCommand";
import {
  AssociateDistributionWebACLCommand,
  AssociateDistributionWebACLCommandInput,
  AssociateDistributionWebACLCommandOutput,
} from "./commands/AssociateDistributionWebACLCommand";
import {
  CopyDistributionCommand,
  CopyDistributionCommandInput,
  CopyDistributionCommandOutput,
} from "./commands/CopyDistributionCommand";
import {
  CreateAnycastIpListCommand,
  CreateAnycastIpListCommandInput,
  CreateAnycastIpListCommandOutput,
} from "./commands/CreateAnycastIpListCommand";
import {
  CreateCachePolicyCommand,
  CreateCachePolicyCommandInput,
  CreateCachePolicyCommandOutput,
} from "./commands/CreateCachePolicyCommand";
import {
  CreateCloudFrontOriginAccessIdentityCommand,
  CreateCloudFrontOriginAccessIdentityCommandInput,
  CreateCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/CreateCloudFrontOriginAccessIdentityCommand";
import {
  CreateConnectionFunctionCommand,
  CreateConnectionFunctionCommandInput,
  CreateConnectionFunctionCommandOutput,
} from "./commands/CreateConnectionFunctionCommand";
import {
  CreateConnectionGroupCommand,
  CreateConnectionGroupCommandInput,
  CreateConnectionGroupCommandOutput,
} from "./commands/CreateConnectionGroupCommand";
import {
  CreateContinuousDeploymentPolicyCommand,
  CreateContinuousDeploymentPolicyCommandInput,
  CreateContinuousDeploymentPolicyCommandOutput,
} from "./commands/CreateContinuousDeploymentPolicyCommand";
import {
  CreateDistributionCommand,
  CreateDistributionCommandInput,
  CreateDistributionCommandOutput,
} from "./commands/CreateDistributionCommand";
import {
  CreateDistributionTenantCommand,
  CreateDistributionTenantCommandInput,
  CreateDistributionTenantCommandOutput,
} from "./commands/CreateDistributionTenantCommand";
import {
  CreateDistributionWithTagsCommand,
  CreateDistributionWithTagsCommandInput,
  CreateDistributionWithTagsCommandOutput,
} from "./commands/CreateDistributionWithTagsCommand";
import {
  CreateFieldLevelEncryptionConfigCommand,
  CreateFieldLevelEncryptionConfigCommandInput,
  CreateFieldLevelEncryptionConfigCommandOutput,
} from "./commands/CreateFieldLevelEncryptionConfigCommand";
import {
  CreateFieldLevelEncryptionProfileCommand,
  CreateFieldLevelEncryptionProfileCommandInput,
  CreateFieldLevelEncryptionProfileCommandOutput,
} from "./commands/CreateFieldLevelEncryptionProfileCommand";
import {
  CreateFunctionCommand,
  CreateFunctionCommandInput,
  CreateFunctionCommandOutput,
} from "./commands/CreateFunctionCommand";
import {
  CreateInvalidationCommand,
  CreateInvalidationCommandInput,
  CreateInvalidationCommandOutput,
} from "./commands/CreateInvalidationCommand";
import {
  CreateInvalidationForDistributionTenantCommand,
  CreateInvalidationForDistributionTenantCommandInput,
  CreateInvalidationForDistributionTenantCommandOutput,
} from "./commands/CreateInvalidationForDistributionTenantCommand";
import {
  CreateKeyGroupCommand,
  CreateKeyGroupCommandInput,
  CreateKeyGroupCommandOutput,
} from "./commands/CreateKeyGroupCommand";
import {
  CreateKeyValueStoreCommand,
  CreateKeyValueStoreCommandInput,
  CreateKeyValueStoreCommandOutput,
} from "./commands/CreateKeyValueStoreCommand";
import {
  CreateMonitoringSubscriptionCommand,
  CreateMonitoringSubscriptionCommandInput,
  CreateMonitoringSubscriptionCommandOutput,
} from "./commands/CreateMonitoringSubscriptionCommand";
import {
  CreateOriginAccessControlCommand,
  CreateOriginAccessControlCommandInput,
  CreateOriginAccessControlCommandOutput,
} from "./commands/CreateOriginAccessControlCommand";
import {
  CreateOriginRequestPolicyCommand,
  CreateOriginRequestPolicyCommandInput,
  CreateOriginRequestPolicyCommandOutput,
} from "./commands/CreateOriginRequestPolicyCommand";
import {
  CreatePublicKeyCommand,
  CreatePublicKeyCommandInput,
  CreatePublicKeyCommandOutput,
} from "./commands/CreatePublicKeyCommand";
import {
  CreateRealtimeLogConfigCommand,
  CreateRealtimeLogConfigCommandInput,
  CreateRealtimeLogConfigCommandOutput,
} from "./commands/CreateRealtimeLogConfigCommand";
import {
  CreateResponseHeadersPolicyCommand,
  CreateResponseHeadersPolicyCommandInput,
  CreateResponseHeadersPolicyCommandOutput,
} from "./commands/CreateResponseHeadersPolicyCommand";
import {
  CreateStreamingDistributionCommand,
  CreateStreamingDistributionCommandInput,
  CreateStreamingDistributionCommandOutput,
} from "./commands/CreateStreamingDistributionCommand";
import {
  CreateStreamingDistributionWithTagsCommand,
  CreateStreamingDistributionWithTagsCommandInput,
  CreateStreamingDistributionWithTagsCommandOutput,
} from "./commands/CreateStreamingDistributionWithTagsCommand";
import {
  CreateTrustStoreCommand,
  CreateTrustStoreCommandInput,
  CreateTrustStoreCommandOutput,
} from "./commands/CreateTrustStoreCommand";
import {
  CreateVpcOriginCommand,
  CreateVpcOriginCommandInput,
  CreateVpcOriginCommandOutput,
} from "./commands/CreateVpcOriginCommand";
import {
  DeleteAnycastIpListCommand,
  DeleteAnycastIpListCommandInput,
  DeleteAnycastIpListCommandOutput,
} from "./commands/DeleteAnycastIpListCommand";
import {
  DeleteCachePolicyCommand,
  DeleteCachePolicyCommandInput,
  DeleteCachePolicyCommandOutput,
} from "./commands/DeleteCachePolicyCommand";
import {
  DeleteCloudFrontOriginAccessIdentityCommand,
  DeleteCloudFrontOriginAccessIdentityCommandInput,
  DeleteCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/DeleteCloudFrontOriginAccessIdentityCommand";
import {
  DeleteConnectionFunctionCommand,
  DeleteConnectionFunctionCommandInput,
  DeleteConnectionFunctionCommandOutput,
} from "./commands/DeleteConnectionFunctionCommand";
import {
  DeleteConnectionGroupCommand,
  DeleteConnectionGroupCommandInput,
  DeleteConnectionGroupCommandOutput,
} from "./commands/DeleteConnectionGroupCommand";
import {
  DeleteContinuousDeploymentPolicyCommand,
  DeleteContinuousDeploymentPolicyCommandInput,
  DeleteContinuousDeploymentPolicyCommandOutput,
} from "./commands/DeleteContinuousDeploymentPolicyCommand";
import {
  DeleteDistributionCommand,
  DeleteDistributionCommandInput,
  DeleteDistributionCommandOutput,
} from "./commands/DeleteDistributionCommand";
import {
  DeleteDistributionTenantCommand,
  DeleteDistributionTenantCommandInput,
  DeleteDistributionTenantCommandOutput,
} from "./commands/DeleteDistributionTenantCommand";
import {
  DeleteFieldLevelEncryptionConfigCommand,
  DeleteFieldLevelEncryptionConfigCommandInput,
  DeleteFieldLevelEncryptionConfigCommandOutput,
} from "./commands/DeleteFieldLevelEncryptionConfigCommand";
import {
  DeleteFieldLevelEncryptionProfileCommand,
  DeleteFieldLevelEncryptionProfileCommandInput,
  DeleteFieldLevelEncryptionProfileCommandOutput,
} from "./commands/DeleteFieldLevelEncryptionProfileCommand";
import {
  DeleteFunctionCommand,
  DeleteFunctionCommandInput,
  DeleteFunctionCommandOutput,
} from "./commands/DeleteFunctionCommand";
import {
  DeleteKeyGroupCommand,
  DeleteKeyGroupCommandInput,
  DeleteKeyGroupCommandOutput,
} from "./commands/DeleteKeyGroupCommand";
import {
  DeleteKeyValueStoreCommand,
  DeleteKeyValueStoreCommandInput,
  DeleteKeyValueStoreCommandOutput,
} from "./commands/DeleteKeyValueStoreCommand";
import {
  DeleteMonitoringSubscriptionCommand,
  DeleteMonitoringSubscriptionCommandInput,
  DeleteMonitoringSubscriptionCommandOutput,
} from "./commands/DeleteMonitoringSubscriptionCommand";
import {
  DeleteOriginAccessControlCommand,
  DeleteOriginAccessControlCommandInput,
  DeleteOriginAccessControlCommandOutput,
} from "./commands/DeleteOriginAccessControlCommand";
import {
  DeleteOriginRequestPolicyCommand,
  DeleteOriginRequestPolicyCommandInput,
  DeleteOriginRequestPolicyCommandOutput,
} from "./commands/DeleteOriginRequestPolicyCommand";
import {
  DeletePublicKeyCommand,
  DeletePublicKeyCommandInput,
  DeletePublicKeyCommandOutput,
} from "./commands/DeletePublicKeyCommand";
import {
  DeleteRealtimeLogConfigCommand,
  DeleteRealtimeLogConfigCommandInput,
  DeleteRealtimeLogConfigCommandOutput,
} from "./commands/DeleteRealtimeLogConfigCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteResponseHeadersPolicyCommand,
  DeleteResponseHeadersPolicyCommandInput,
  DeleteResponseHeadersPolicyCommandOutput,
} from "./commands/DeleteResponseHeadersPolicyCommand";
import {
  DeleteStreamingDistributionCommand,
  DeleteStreamingDistributionCommandInput,
  DeleteStreamingDistributionCommandOutput,
} from "./commands/DeleteStreamingDistributionCommand";
import {
  DeleteTrustStoreCommand,
  DeleteTrustStoreCommandInput,
  DeleteTrustStoreCommandOutput,
} from "./commands/DeleteTrustStoreCommand";
import {
  DeleteVpcOriginCommand,
  DeleteVpcOriginCommandInput,
  DeleteVpcOriginCommandOutput,
} from "./commands/DeleteVpcOriginCommand";
import {
  DescribeConnectionFunctionCommand,
  DescribeConnectionFunctionCommandInput,
  DescribeConnectionFunctionCommandOutput,
} from "./commands/DescribeConnectionFunctionCommand";
import {
  DescribeFunctionCommand,
  DescribeFunctionCommandInput,
  DescribeFunctionCommandOutput,
} from "./commands/DescribeFunctionCommand";
import {
  DescribeKeyValueStoreCommand,
  DescribeKeyValueStoreCommandInput,
  DescribeKeyValueStoreCommandOutput,
} from "./commands/DescribeKeyValueStoreCommand";
import {
  DisassociateDistributionTenantWebACLCommand,
  DisassociateDistributionTenantWebACLCommandInput,
  DisassociateDistributionTenantWebACLCommandOutput,
} from "./commands/DisassociateDistributionTenantWebACLCommand";
import {
  DisassociateDistributionWebACLCommand,
  DisassociateDistributionWebACLCommandInput,
  DisassociateDistributionWebACLCommandOutput,
} from "./commands/DisassociateDistributionWebACLCommand";
import {
  GetAnycastIpListCommand,
  GetAnycastIpListCommandInput,
  GetAnycastIpListCommandOutput,
} from "./commands/GetAnycastIpListCommand";
import {
  GetCachePolicyCommand,
  GetCachePolicyCommandInput,
  GetCachePolicyCommandOutput,
} from "./commands/GetCachePolicyCommand";
import {
  GetCachePolicyConfigCommand,
  GetCachePolicyConfigCommandInput,
  GetCachePolicyConfigCommandOutput,
} from "./commands/GetCachePolicyConfigCommand";
import {
  GetCloudFrontOriginAccessIdentityCommand,
  GetCloudFrontOriginAccessIdentityCommandInput,
  GetCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/GetCloudFrontOriginAccessIdentityCommand";
import {
  GetCloudFrontOriginAccessIdentityConfigCommand,
  GetCloudFrontOriginAccessIdentityConfigCommandInput,
  GetCloudFrontOriginAccessIdentityConfigCommandOutput,
} from "./commands/GetCloudFrontOriginAccessIdentityConfigCommand";
import {
  GetConnectionFunctionCommand,
  GetConnectionFunctionCommandInput,
  GetConnectionFunctionCommandOutput,
} from "./commands/GetConnectionFunctionCommand";
import {
  GetConnectionGroupByRoutingEndpointCommand,
  GetConnectionGroupByRoutingEndpointCommandInput,
  GetConnectionGroupByRoutingEndpointCommandOutput,
} from "./commands/GetConnectionGroupByRoutingEndpointCommand";
import {
  GetConnectionGroupCommand,
  GetConnectionGroupCommandInput,
  GetConnectionGroupCommandOutput,
} from "./commands/GetConnectionGroupCommand";
import {
  GetContinuousDeploymentPolicyCommand,
  GetContinuousDeploymentPolicyCommandInput,
  GetContinuousDeploymentPolicyCommandOutput,
} from "./commands/GetContinuousDeploymentPolicyCommand";
import {
  GetContinuousDeploymentPolicyConfigCommand,
  GetContinuousDeploymentPolicyConfigCommandInput,
  GetContinuousDeploymentPolicyConfigCommandOutput,
} from "./commands/GetContinuousDeploymentPolicyConfigCommand";
import {
  GetDistributionCommand,
  GetDistributionCommandInput,
  GetDistributionCommandOutput,
} from "./commands/GetDistributionCommand";
import {
  GetDistributionConfigCommand,
  GetDistributionConfigCommandInput,
  GetDistributionConfigCommandOutput,
} from "./commands/GetDistributionConfigCommand";
import {
  GetDistributionTenantByDomainCommand,
  GetDistributionTenantByDomainCommandInput,
  GetDistributionTenantByDomainCommandOutput,
} from "./commands/GetDistributionTenantByDomainCommand";
import {
  GetDistributionTenantCommand,
  GetDistributionTenantCommandInput,
  GetDistributionTenantCommandOutput,
} from "./commands/GetDistributionTenantCommand";
import {
  GetFieldLevelEncryptionCommand,
  GetFieldLevelEncryptionCommandInput,
  GetFieldLevelEncryptionCommandOutput,
} from "./commands/GetFieldLevelEncryptionCommand";
import {
  GetFieldLevelEncryptionConfigCommand,
  GetFieldLevelEncryptionConfigCommandInput,
  GetFieldLevelEncryptionConfigCommandOutput,
} from "./commands/GetFieldLevelEncryptionConfigCommand";
import {
  GetFieldLevelEncryptionProfileCommand,
  GetFieldLevelEncryptionProfileCommandInput,
  GetFieldLevelEncryptionProfileCommandOutput,
} from "./commands/GetFieldLevelEncryptionProfileCommand";
import {
  GetFieldLevelEncryptionProfileConfigCommand,
  GetFieldLevelEncryptionProfileConfigCommandInput,
  GetFieldLevelEncryptionProfileConfigCommandOutput,
} from "./commands/GetFieldLevelEncryptionProfileConfigCommand";
import { GetFunctionCommand, GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import {
  GetInvalidationCommand,
  GetInvalidationCommandInput,
  GetInvalidationCommandOutput,
} from "./commands/GetInvalidationCommand";
import {
  GetInvalidationForDistributionTenantCommand,
  GetInvalidationForDistributionTenantCommandInput,
  GetInvalidationForDistributionTenantCommandOutput,
} from "./commands/GetInvalidationForDistributionTenantCommand";
import { GetKeyGroupCommand, GetKeyGroupCommandInput, GetKeyGroupCommandOutput } from "./commands/GetKeyGroupCommand";
import {
  GetKeyGroupConfigCommand,
  GetKeyGroupConfigCommandInput,
  GetKeyGroupConfigCommandOutput,
} from "./commands/GetKeyGroupConfigCommand";
import {
  GetManagedCertificateDetailsCommand,
  GetManagedCertificateDetailsCommandInput,
  GetManagedCertificateDetailsCommandOutput,
} from "./commands/GetManagedCertificateDetailsCommand";
import {
  GetMonitoringSubscriptionCommand,
  GetMonitoringSubscriptionCommandInput,
  GetMonitoringSubscriptionCommandOutput,
} from "./commands/GetMonitoringSubscriptionCommand";
import {
  GetOriginAccessControlCommand,
  GetOriginAccessControlCommandInput,
  GetOriginAccessControlCommandOutput,
} from "./commands/GetOriginAccessControlCommand";
import {
  GetOriginAccessControlConfigCommand,
  GetOriginAccessControlConfigCommandInput,
  GetOriginAccessControlConfigCommandOutput,
} from "./commands/GetOriginAccessControlConfigCommand";
import {
  GetOriginRequestPolicyCommand,
  GetOriginRequestPolicyCommandInput,
  GetOriginRequestPolicyCommandOutput,
} from "./commands/GetOriginRequestPolicyCommand";
import {
  GetOriginRequestPolicyConfigCommand,
  GetOriginRequestPolicyConfigCommandInput,
  GetOriginRequestPolicyConfigCommandOutput,
} from "./commands/GetOriginRequestPolicyConfigCommand";
import {
  GetPublicKeyCommand,
  GetPublicKeyCommandInput,
  GetPublicKeyCommandOutput,
} from "./commands/GetPublicKeyCommand";
import {
  GetPublicKeyConfigCommand,
  GetPublicKeyConfigCommandInput,
  GetPublicKeyConfigCommandOutput,
} from "./commands/GetPublicKeyConfigCommand";
import {
  GetRealtimeLogConfigCommand,
  GetRealtimeLogConfigCommandInput,
  GetRealtimeLogConfigCommandOutput,
} from "./commands/GetRealtimeLogConfigCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import {
  GetResponseHeadersPolicyCommand,
  GetResponseHeadersPolicyCommandInput,
  GetResponseHeadersPolicyCommandOutput,
} from "./commands/GetResponseHeadersPolicyCommand";
import {
  GetResponseHeadersPolicyConfigCommand,
  GetResponseHeadersPolicyConfigCommandInput,
  GetResponseHeadersPolicyConfigCommandOutput,
} from "./commands/GetResponseHeadersPolicyConfigCommand";
import {
  GetStreamingDistributionCommand,
  GetStreamingDistributionCommandInput,
  GetStreamingDistributionCommandOutput,
} from "./commands/GetStreamingDistributionCommand";
import {
  GetStreamingDistributionConfigCommand,
  GetStreamingDistributionConfigCommandInput,
  GetStreamingDistributionConfigCommandOutput,
} from "./commands/GetStreamingDistributionConfigCommand";
import {
  GetTrustStoreCommand,
  GetTrustStoreCommandInput,
  GetTrustStoreCommandOutput,
} from "./commands/GetTrustStoreCommand";
import {
  GetVpcOriginCommand,
  GetVpcOriginCommandInput,
  GetVpcOriginCommandOutput,
} from "./commands/GetVpcOriginCommand";
import {
  ListAnycastIpListsCommand,
  ListAnycastIpListsCommandInput,
  ListAnycastIpListsCommandOutput,
} from "./commands/ListAnycastIpListsCommand";
import {
  ListCachePoliciesCommand,
  ListCachePoliciesCommandInput,
  ListCachePoliciesCommandOutput,
} from "./commands/ListCachePoliciesCommand";
import {
  ListCloudFrontOriginAccessIdentitiesCommand,
  ListCloudFrontOriginAccessIdentitiesCommandInput,
  ListCloudFrontOriginAccessIdentitiesCommandOutput,
} from "./commands/ListCloudFrontOriginAccessIdentitiesCommand";
import {
  ListConflictingAliasesCommand,
  ListConflictingAliasesCommandInput,
  ListConflictingAliasesCommandOutput,
} from "./commands/ListConflictingAliasesCommand";
import {
  ListConnectionFunctionsCommand,
  ListConnectionFunctionsCommandInput,
  ListConnectionFunctionsCommandOutput,
} from "./commands/ListConnectionFunctionsCommand";
import {
  ListConnectionGroupsCommand,
  ListConnectionGroupsCommandInput,
  ListConnectionGroupsCommandOutput,
} from "./commands/ListConnectionGroupsCommand";
import {
  ListContinuousDeploymentPoliciesCommand,
  ListContinuousDeploymentPoliciesCommandInput,
  ListContinuousDeploymentPoliciesCommandOutput,
} from "./commands/ListContinuousDeploymentPoliciesCommand";
import {
  ListDistributionsByAnycastIpListIdCommand,
  ListDistributionsByAnycastIpListIdCommandInput,
  ListDistributionsByAnycastIpListIdCommandOutput,
} from "./commands/ListDistributionsByAnycastIpListIdCommand";
import {
  ListDistributionsByCachePolicyIdCommand,
  ListDistributionsByCachePolicyIdCommandInput,
  ListDistributionsByCachePolicyIdCommandOutput,
} from "./commands/ListDistributionsByCachePolicyIdCommand";
import {
  ListDistributionsByConnectionFunctionCommand,
  ListDistributionsByConnectionFunctionCommandInput,
  ListDistributionsByConnectionFunctionCommandOutput,
} from "./commands/ListDistributionsByConnectionFunctionCommand";
import {
  ListDistributionsByConnectionModeCommand,
  ListDistributionsByConnectionModeCommandInput,
  ListDistributionsByConnectionModeCommandOutput,
} from "./commands/ListDistributionsByConnectionModeCommand";
import {
  ListDistributionsByKeyGroupCommand,
  ListDistributionsByKeyGroupCommandInput,
  ListDistributionsByKeyGroupCommandOutput,
} from "./commands/ListDistributionsByKeyGroupCommand";
import {
  ListDistributionsByOriginRequestPolicyIdCommand,
  ListDistributionsByOriginRequestPolicyIdCommandInput,
  ListDistributionsByOriginRequestPolicyIdCommandOutput,
} from "./commands/ListDistributionsByOriginRequestPolicyIdCommand";
import {
  ListDistributionsByOwnedResourceCommand,
  ListDistributionsByOwnedResourceCommandInput,
  ListDistributionsByOwnedResourceCommandOutput,
} from "./commands/ListDistributionsByOwnedResourceCommand";
import {
  ListDistributionsByRealtimeLogConfigCommand,
  ListDistributionsByRealtimeLogConfigCommandInput,
  ListDistributionsByRealtimeLogConfigCommandOutput,
} from "./commands/ListDistributionsByRealtimeLogConfigCommand";
import {
  ListDistributionsByResponseHeadersPolicyIdCommand,
  ListDistributionsByResponseHeadersPolicyIdCommandInput,
  ListDistributionsByResponseHeadersPolicyIdCommandOutput,
} from "./commands/ListDistributionsByResponseHeadersPolicyIdCommand";
import {
  ListDistributionsByTrustStoreCommand,
  ListDistributionsByTrustStoreCommandInput,
  ListDistributionsByTrustStoreCommandOutput,
} from "./commands/ListDistributionsByTrustStoreCommand";
import {
  ListDistributionsByVpcOriginIdCommand,
  ListDistributionsByVpcOriginIdCommandInput,
  ListDistributionsByVpcOriginIdCommandOutput,
} from "./commands/ListDistributionsByVpcOriginIdCommand";
import {
  ListDistributionsByWebACLIdCommand,
  ListDistributionsByWebACLIdCommandInput,
  ListDistributionsByWebACLIdCommandOutput,
} from "./commands/ListDistributionsByWebACLIdCommand";
import {
  ListDistributionsCommand,
  ListDistributionsCommandInput,
  ListDistributionsCommandOutput,
} from "./commands/ListDistributionsCommand";
import {
  ListDistributionTenantsByCustomizationCommand,
  ListDistributionTenantsByCustomizationCommandInput,
  ListDistributionTenantsByCustomizationCommandOutput,
} from "./commands/ListDistributionTenantsByCustomizationCommand";
import {
  ListDistributionTenantsCommand,
  ListDistributionTenantsCommandInput,
  ListDistributionTenantsCommandOutput,
} from "./commands/ListDistributionTenantsCommand";
import {
  ListDomainConflictsCommand,
  ListDomainConflictsCommandInput,
  ListDomainConflictsCommandOutput,
} from "./commands/ListDomainConflictsCommand";
import {
  ListFieldLevelEncryptionConfigsCommand,
  ListFieldLevelEncryptionConfigsCommandInput,
  ListFieldLevelEncryptionConfigsCommandOutput,
} from "./commands/ListFieldLevelEncryptionConfigsCommand";
import {
  ListFieldLevelEncryptionProfilesCommand,
  ListFieldLevelEncryptionProfilesCommandInput,
  ListFieldLevelEncryptionProfilesCommandOutput,
} from "./commands/ListFieldLevelEncryptionProfilesCommand";
import {
  ListFunctionsCommand,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
} from "./commands/ListFunctionsCommand";
import {
  ListInvalidationsCommand,
  ListInvalidationsCommandInput,
  ListInvalidationsCommandOutput,
} from "./commands/ListInvalidationsCommand";
import {
  ListInvalidationsForDistributionTenantCommand,
  ListInvalidationsForDistributionTenantCommandInput,
  ListInvalidationsForDistributionTenantCommandOutput,
} from "./commands/ListInvalidationsForDistributionTenantCommand";
import {
  ListKeyGroupsCommand,
  ListKeyGroupsCommandInput,
  ListKeyGroupsCommandOutput,
} from "./commands/ListKeyGroupsCommand";
import {
  ListKeyValueStoresCommand,
  ListKeyValueStoresCommandInput,
  ListKeyValueStoresCommandOutput,
} from "./commands/ListKeyValueStoresCommand";
import {
  ListOriginAccessControlsCommand,
  ListOriginAccessControlsCommandInput,
  ListOriginAccessControlsCommandOutput,
} from "./commands/ListOriginAccessControlsCommand";
import {
  ListOriginRequestPoliciesCommand,
  ListOriginRequestPoliciesCommandInput,
  ListOriginRequestPoliciesCommandOutput,
} from "./commands/ListOriginRequestPoliciesCommand";
import {
  ListPublicKeysCommand,
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput,
} from "./commands/ListPublicKeysCommand";
import {
  ListRealtimeLogConfigsCommand,
  ListRealtimeLogConfigsCommandInput,
  ListRealtimeLogConfigsCommandOutput,
} from "./commands/ListRealtimeLogConfigsCommand";
import {
  ListResponseHeadersPoliciesCommand,
  ListResponseHeadersPoliciesCommandInput,
  ListResponseHeadersPoliciesCommandOutput,
} from "./commands/ListResponseHeadersPoliciesCommand";
import {
  ListStreamingDistributionsCommand,
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput,
} from "./commands/ListStreamingDistributionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTrustStoresCommand,
  ListTrustStoresCommandInput,
  ListTrustStoresCommandOutput,
} from "./commands/ListTrustStoresCommand";
import {
  ListVpcOriginsCommand,
  ListVpcOriginsCommandInput,
  ListVpcOriginsCommandOutput,
} from "./commands/ListVpcOriginsCommand";
import {
  PublishConnectionFunctionCommand,
  PublishConnectionFunctionCommandInput,
  PublishConnectionFunctionCommandOutput,
} from "./commands/PublishConnectionFunctionCommand";
import {
  PublishFunctionCommand,
  PublishFunctionCommandInput,
  PublishFunctionCommandOutput,
} from "./commands/PublishFunctionCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestConnectionFunctionCommand,
  TestConnectionFunctionCommandInput,
  TestConnectionFunctionCommandOutput,
} from "./commands/TestConnectionFunctionCommand";
import {
  TestFunctionCommand,
  TestFunctionCommandInput,
  TestFunctionCommandOutput,
} from "./commands/TestFunctionCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAnycastIpListCommand,
  UpdateAnycastIpListCommandInput,
  UpdateAnycastIpListCommandOutput,
} from "./commands/UpdateAnycastIpListCommand";
import {
  UpdateCachePolicyCommand,
  UpdateCachePolicyCommandInput,
  UpdateCachePolicyCommandOutput,
} from "./commands/UpdateCachePolicyCommand";
import {
  UpdateCloudFrontOriginAccessIdentityCommand,
  UpdateCloudFrontOriginAccessIdentityCommandInput,
  UpdateCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/UpdateCloudFrontOriginAccessIdentityCommand";
import {
  UpdateConnectionFunctionCommand,
  UpdateConnectionFunctionCommandInput,
  UpdateConnectionFunctionCommandOutput,
} from "./commands/UpdateConnectionFunctionCommand";
import {
  UpdateConnectionGroupCommand,
  UpdateConnectionGroupCommandInput,
  UpdateConnectionGroupCommandOutput,
} from "./commands/UpdateConnectionGroupCommand";
import {
  UpdateContinuousDeploymentPolicyCommand,
  UpdateContinuousDeploymentPolicyCommandInput,
  UpdateContinuousDeploymentPolicyCommandOutput,
} from "./commands/UpdateContinuousDeploymentPolicyCommand";
import {
  UpdateDistributionCommand,
  UpdateDistributionCommandInput,
  UpdateDistributionCommandOutput,
} from "./commands/UpdateDistributionCommand";
import {
  UpdateDistributionTenantCommand,
  UpdateDistributionTenantCommandInput,
  UpdateDistributionTenantCommandOutput,
} from "./commands/UpdateDistributionTenantCommand";
import {
  UpdateDistributionWithStagingConfigCommand,
  UpdateDistributionWithStagingConfigCommandInput,
  UpdateDistributionWithStagingConfigCommandOutput,
} from "./commands/UpdateDistributionWithStagingConfigCommand";
import {
  UpdateDomainAssociationCommand,
  UpdateDomainAssociationCommandInput,
  UpdateDomainAssociationCommandOutput,
} from "./commands/UpdateDomainAssociationCommand";
import {
  UpdateFieldLevelEncryptionConfigCommand,
  UpdateFieldLevelEncryptionConfigCommandInput,
  UpdateFieldLevelEncryptionConfigCommandOutput,
} from "./commands/UpdateFieldLevelEncryptionConfigCommand";
import {
  UpdateFieldLevelEncryptionProfileCommand,
  UpdateFieldLevelEncryptionProfileCommandInput,
  UpdateFieldLevelEncryptionProfileCommandOutput,
} from "./commands/UpdateFieldLevelEncryptionProfileCommand";
import {
  UpdateFunctionCommand,
  UpdateFunctionCommandInput,
  UpdateFunctionCommandOutput,
} from "./commands/UpdateFunctionCommand";
import {
  UpdateKeyGroupCommand,
  UpdateKeyGroupCommandInput,
  UpdateKeyGroupCommandOutput,
} from "./commands/UpdateKeyGroupCommand";
import {
  UpdateKeyValueStoreCommand,
  UpdateKeyValueStoreCommandInput,
  UpdateKeyValueStoreCommandOutput,
} from "./commands/UpdateKeyValueStoreCommand";
import {
  UpdateOriginAccessControlCommand,
  UpdateOriginAccessControlCommandInput,
  UpdateOriginAccessControlCommandOutput,
} from "./commands/UpdateOriginAccessControlCommand";
import {
  UpdateOriginRequestPolicyCommand,
  UpdateOriginRequestPolicyCommandInput,
  UpdateOriginRequestPolicyCommandOutput,
} from "./commands/UpdateOriginRequestPolicyCommand";
import {
  UpdatePublicKeyCommand,
  UpdatePublicKeyCommandInput,
  UpdatePublicKeyCommandOutput,
} from "./commands/UpdatePublicKeyCommand";
import {
  UpdateRealtimeLogConfigCommand,
  UpdateRealtimeLogConfigCommandInput,
  UpdateRealtimeLogConfigCommandOutput,
} from "./commands/UpdateRealtimeLogConfigCommand";
import {
  UpdateResponseHeadersPolicyCommand,
  UpdateResponseHeadersPolicyCommandInput,
  UpdateResponseHeadersPolicyCommandOutput,
} from "./commands/UpdateResponseHeadersPolicyCommand";
import {
  UpdateStreamingDistributionCommand,
  UpdateStreamingDistributionCommandInput,
  UpdateStreamingDistributionCommandOutput,
} from "./commands/UpdateStreamingDistributionCommand";
import {
  UpdateTrustStoreCommand,
  UpdateTrustStoreCommandInput,
  UpdateTrustStoreCommandOutput,
} from "./commands/UpdateTrustStoreCommand";
import {
  UpdateVpcOriginCommand,
  UpdateVpcOriginCommandInput,
  UpdateVpcOriginCommandOutput,
} from "./commands/UpdateVpcOriginCommand";
import {
  VerifyDnsConfigurationCommand,
  VerifyDnsConfigurationCommandInput,
  VerifyDnsConfigurationCommandOutput,
} from "./commands/VerifyDnsConfigurationCommand";

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

export interface CloudFront {
  /**
   * @see {@link AssociateAliasCommand}
   */
  associateAlias(
    args: AssociateAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAliasCommandOutput>;
  associateAlias(args: AssociateAliasCommandInput, cb: (err: any, data?: AssociateAliasCommandOutput) => void): void;
  associateAlias(
    args: AssociateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDistributionTenantWebACLCommand}
   */
  associateDistributionTenantWebACL(
    args: AssociateDistributionTenantWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDistributionTenantWebACLCommandOutput>;
  associateDistributionTenantWebACL(
    args: AssociateDistributionTenantWebACLCommandInput,
    cb: (err: any, data?: AssociateDistributionTenantWebACLCommandOutput) => void
  ): void;
  associateDistributionTenantWebACL(
    args: AssociateDistributionTenantWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDistributionTenantWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateDistributionWebACLCommand}
   */
  associateDistributionWebACL(
    args: AssociateDistributionWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDistributionWebACLCommandOutput>;
  associateDistributionWebACL(
    args: AssociateDistributionWebACLCommandInput,
    cb: (err: any, data?: AssociateDistributionWebACLCommandOutput) => void
  ): void;
  associateDistributionWebACL(
    args: AssociateDistributionWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDistributionWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyDistributionCommand}
   */
  copyDistribution(
    args: CopyDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDistributionCommandOutput>;
  copyDistribution(
    args: CopyDistributionCommandInput,
    cb: (err: any, data?: CopyDistributionCommandOutput) => void
  ): void;
  copyDistribution(
    args: CopyDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnycastIpListCommand}
   */
  createAnycastIpList(
    args: CreateAnycastIpListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnycastIpListCommandOutput>;
  createAnycastIpList(
    args: CreateAnycastIpListCommandInput,
    cb: (err: any, data?: CreateAnycastIpListCommandOutput) => void
  ): void;
  createAnycastIpList(
    args: CreateAnycastIpListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnycastIpListCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCachePolicyCommand}
   */
  createCachePolicy(
    args: CreateCachePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCachePolicyCommandOutput>;
  createCachePolicy(
    args: CreateCachePolicyCommandInput,
    cb: (err: any, data?: CreateCachePolicyCommandOutput) => void
  ): void;
  createCachePolicy(
    args: CreateCachePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCachePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCloudFrontOriginAccessIdentityCommand}
   */
  createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudFrontOriginAccessIdentityCommandOutput>;
  createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: CreateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionFunctionCommand}
   */
  createConnectionFunction(
    args: CreateConnectionFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionFunctionCommandOutput>;
  createConnectionFunction(
    args: CreateConnectionFunctionCommandInput,
    cb: (err: any, data?: CreateConnectionFunctionCommandOutput) => void
  ): void;
  createConnectionFunction(
    args: CreateConnectionFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionGroupCommand}
   */
  createConnectionGroup(
    args: CreateConnectionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionGroupCommandOutput>;
  createConnectionGroup(
    args: CreateConnectionGroupCommandInput,
    cb: (err: any, data?: CreateConnectionGroupCommandOutput) => void
  ): void;
  createConnectionGroup(
    args: CreateConnectionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContinuousDeploymentPolicyCommand}
   */
  createContinuousDeploymentPolicy(
    args: CreateContinuousDeploymentPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContinuousDeploymentPolicyCommandOutput>;
  createContinuousDeploymentPolicy(
    args: CreateContinuousDeploymentPolicyCommandInput,
    cb: (err: any, data?: CreateContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  createContinuousDeploymentPolicy(
    args: CreateContinuousDeploymentPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContinuousDeploymentPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDistributionCommand}
   */
  createDistribution(
    args: CreateDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDistributionCommandOutput>;
  createDistribution(
    args: CreateDistributionCommandInput,
    cb: (err: any, data?: CreateDistributionCommandOutput) => void
  ): void;
  createDistribution(
    args: CreateDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDistributionTenantCommand}
   */
  createDistributionTenant(
    args: CreateDistributionTenantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDistributionTenantCommandOutput>;
  createDistributionTenant(
    args: CreateDistributionTenantCommandInput,
    cb: (err: any, data?: CreateDistributionTenantCommandOutput) => void
  ): void;
  createDistributionTenant(
    args: CreateDistributionTenantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDistributionTenantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDistributionWithTagsCommand}
   */
  createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDistributionWithTagsCommandOutput>;
  createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    cb: (err: any, data?: CreateDistributionWithTagsCommandOutput) => void
  ): void;
  createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDistributionWithTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFieldLevelEncryptionConfigCommand}
   */
  createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFieldLevelEncryptionConfigCommandOutput>;
  createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: CreateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFieldLevelEncryptionProfileCommand}
   */
  createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFieldLevelEncryptionProfileCommandOutput>;
  createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: CreateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFunctionCommand}
   */
  createFunction(
    args: CreateFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFunctionCommandOutput>;
  createFunction(args: CreateFunctionCommandInput, cb: (err: any, data?: CreateFunctionCommandOutput) => void): void;
  createFunction(
    args: CreateFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInvalidationCommand}
   */
  createInvalidation(
    args: CreateInvalidationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInvalidationCommandOutput>;
  createInvalidation(
    args: CreateInvalidationCommandInput,
    cb: (err: any, data?: CreateInvalidationCommandOutput) => void
  ): void;
  createInvalidation(
    args: CreateInvalidationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInvalidationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInvalidationForDistributionTenantCommand}
   */
  createInvalidationForDistributionTenant(
    args: CreateInvalidationForDistributionTenantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInvalidationForDistributionTenantCommandOutput>;
  createInvalidationForDistributionTenant(
    args: CreateInvalidationForDistributionTenantCommandInput,
    cb: (err: any, data?: CreateInvalidationForDistributionTenantCommandOutput) => void
  ): void;
  createInvalidationForDistributionTenant(
    args: CreateInvalidationForDistributionTenantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInvalidationForDistributionTenantCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKeyGroupCommand}
   */
  createKeyGroup(
    args: CreateKeyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKeyGroupCommandOutput>;
  createKeyGroup(args: CreateKeyGroupCommandInput, cb: (err: any, data?: CreateKeyGroupCommandOutput) => void): void;
  createKeyGroup(
    args: CreateKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeyGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateKeyValueStoreCommand}
   */
  createKeyValueStore(
    args: CreateKeyValueStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKeyValueStoreCommandOutput>;
  createKeyValueStore(
    args: CreateKeyValueStoreCommandInput,
    cb: (err: any, data?: CreateKeyValueStoreCommandOutput) => void
  ): void;
  createKeyValueStore(
    args: CreateKeyValueStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeyValueStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMonitoringSubscriptionCommand}
   */
  createMonitoringSubscription(
    args: CreateMonitoringSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMonitoringSubscriptionCommandOutput>;
  createMonitoringSubscription(
    args: CreateMonitoringSubscriptionCommandInput,
    cb: (err: any, data?: CreateMonitoringSubscriptionCommandOutput) => void
  ): void;
  createMonitoringSubscription(
    args: CreateMonitoringSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMonitoringSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOriginAccessControlCommand}
   */
  createOriginAccessControl(
    args: CreateOriginAccessControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOriginAccessControlCommandOutput>;
  createOriginAccessControl(
    args: CreateOriginAccessControlCommandInput,
    cb: (err: any, data?: CreateOriginAccessControlCommandOutput) => void
  ): void;
  createOriginAccessControl(
    args: CreateOriginAccessControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOriginAccessControlCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOriginRequestPolicyCommand}
   */
  createOriginRequestPolicy(
    args: CreateOriginRequestPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOriginRequestPolicyCommandOutput>;
  createOriginRequestPolicy(
    args: CreateOriginRequestPolicyCommandInput,
    cb: (err: any, data?: CreateOriginRequestPolicyCommandOutput) => void
  ): void;
  createOriginRequestPolicy(
    args: CreateOriginRequestPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOriginRequestPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePublicKeyCommand}
   */
  createPublicKey(
    args: CreatePublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePublicKeyCommandOutput>;
  createPublicKey(args: CreatePublicKeyCommandInput, cb: (err: any, data?: CreatePublicKeyCommandOutput) => void): void;
  createPublicKey(
    args: CreatePublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRealtimeLogConfigCommand}
   */
  createRealtimeLogConfig(
    args: CreateRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRealtimeLogConfigCommandOutput>;
  createRealtimeLogConfig(
    args: CreateRealtimeLogConfigCommandInput,
    cb: (err: any, data?: CreateRealtimeLogConfigCommandOutput) => void
  ): void;
  createRealtimeLogConfig(
    args: CreateRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRealtimeLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResponseHeadersPolicyCommand}
   */
  createResponseHeadersPolicy(
    args: CreateResponseHeadersPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResponseHeadersPolicyCommandOutput>;
  createResponseHeadersPolicy(
    args: CreateResponseHeadersPolicyCommandInput,
    cb: (err: any, data?: CreateResponseHeadersPolicyCommandOutput) => void
  ): void;
  createResponseHeadersPolicy(
    args: CreateResponseHeadersPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResponseHeadersPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamingDistributionCommand}
   */
  createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingDistributionCommandOutput>;
  createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    cb: (err: any, data?: CreateStreamingDistributionCommandOutput) => void
  ): void;
  createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStreamingDistributionWithTagsCommand}
   */
  createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingDistributionWithTagsCommandOutput>;
  createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    cb: (err: any, data?: CreateStreamingDistributionWithTagsCommandOutput) => void
  ): void;
  createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingDistributionWithTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrustStoreCommand}
   */
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrustStoreCommandOutput>;
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    cb: (err: any, data?: CreateTrustStoreCommandOutput) => void
  ): void;
  createTrustStore(
    args: CreateTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVpcOriginCommand}
   */
  createVpcOrigin(
    args: CreateVpcOriginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcOriginCommandOutput>;
  createVpcOrigin(args: CreateVpcOriginCommandInput, cb: (err: any, data?: CreateVpcOriginCommandOutput) => void): void;
  createVpcOrigin(
    args: CreateVpcOriginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcOriginCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnycastIpListCommand}
   */
  deleteAnycastIpList(
    args: DeleteAnycastIpListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnycastIpListCommandOutput>;
  deleteAnycastIpList(
    args: DeleteAnycastIpListCommandInput,
    cb: (err: any, data?: DeleteAnycastIpListCommandOutput) => void
  ): void;
  deleteAnycastIpList(
    args: DeleteAnycastIpListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnycastIpListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCachePolicyCommand}
   */
  deleteCachePolicy(
    args: DeleteCachePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCachePolicyCommandOutput>;
  deleteCachePolicy(
    args: DeleteCachePolicyCommandInput,
    cb: (err: any, data?: DeleteCachePolicyCommandOutput) => void
  ): void;
  deleteCachePolicy(
    args: DeleteCachePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCachePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCloudFrontOriginAccessIdentityCommand}
   */
  deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCloudFrontOriginAccessIdentityCommandOutput>;
  deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: DeleteCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionFunctionCommand}
   */
  deleteConnectionFunction(
    args: DeleteConnectionFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionFunctionCommandOutput>;
  deleteConnectionFunction(
    args: DeleteConnectionFunctionCommandInput,
    cb: (err: any, data?: DeleteConnectionFunctionCommandOutput) => void
  ): void;
  deleteConnectionFunction(
    args: DeleteConnectionFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionGroupCommand}
   */
  deleteConnectionGroup(
    args: DeleteConnectionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionGroupCommandOutput>;
  deleteConnectionGroup(
    args: DeleteConnectionGroupCommandInput,
    cb: (err: any, data?: DeleteConnectionGroupCommandOutput) => void
  ): void;
  deleteConnectionGroup(
    args: DeleteConnectionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContinuousDeploymentPolicyCommand}
   */
  deleteContinuousDeploymentPolicy(
    args: DeleteContinuousDeploymentPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContinuousDeploymentPolicyCommandOutput>;
  deleteContinuousDeploymentPolicy(
    args: DeleteContinuousDeploymentPolicyCommandInput,
    cb: (err: any, data?: DeleteContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  deleteContinuousDeploymentPolicy(
    args: DeleteContinuousDeploymentPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContinuousDeploymentPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDistributionCommand}
   */
  deleteDistribution(
    args: DeleteDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDistributionCommandOutput>;
  deleteDistribution(
    args: DeleteDistributionCommandInput,
    cb: (err: any, data?: DeleteDistributionCommandOutput) => void
  ): void;
  deleteDistribution(
    args: DeleteDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDistributionTenantCommand}
   */
  deleteDistributionTenant(
    args: DeleteDistributionTenantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDistributionTenantCommandOutput>;
  deleteDistributionTenant(
    args: DeleteDistributionTenantCommandInput,
    cb: (err: any, data?: DeleteDistributionTenantCommandOutput) => void
  ): void;
  deleteDistributionTenant(
    args: DeleteDistributionTenantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDistributionTenantCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFieldLevelEncryptionConfigCommand}
   */
  deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFieldLevelEncryptionConfigCommandOutput>;
  deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: DeleteFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFieldLevelEncryptionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFieldLevelEncryptionProfileCommand}
   */
  deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFieldLevelEncryptionProfileCommandOutput>;
  deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: DeleteFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFieldLevelEncryptionProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFunctionCommand}
   */
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionCommandOutput>;
  deleteFunction(args: DeleteFunctionCommandInput, cb: (err: any, data?: DeleteFunctionCommandOutput) => void): void;
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKeyGroupCommand}
   */
  deleteKeyGroup(
    args: DeleteKeyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKeyGroupCommandOutput>;
  deleteKeyGroup(args: DeleteKeyGroupCommandInput, cb: (err: any, data?: DeleteKeyGroupCommandOutput) => void): void;
  deleteKeyGroup(
    args: DeleteKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeyGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteKeyValueStoreCommand}
   */
  deleteKeyValueStore(
    args: DeleteKeyValueStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKeyValueStoreCommandOutput>;
  deleteKeyValueStore(
    args: DeleteKeyValueStoreCommandInput,
    cb: (err: any, data?: DeleteKeyValueStoreCommandOutput) => void
  ): void;
  deleteKeyValueStore(
    args: DeleteKeyValueStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeyValueStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMonitoringSubscriptionCommand}
   */
  deleteMonitoringSubscription(
    args: DeleteMonitoringSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMonitoringSubscriptionCommandOutput>;
  deleteMonitoringSubscription(
    args: DeleteMonitoringSubscriptionCommandInput,
    cb: (err: any, data?: DeleteMonitoringSubscriptionCommandOutput) => void
  ): void;
  deleteMonitoringSubscription(
    args: DeleteMonitoringSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMonitoringSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOriginAccessControlCommand}
   */
  deleteOriginAccessControl(
    args: DeleteOriginAccessControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOriginAccessControlCommandOutput>;
  deleteOriginAccessControl(
    args: DeleteOriginAccessControlCommandInput,
    cb: (err: any, data?: DeleteOriginAccessControlCommandOutput) => void
  ): void;
  deleteOriginAccessControl(
    args: DeleteOriginAccessControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOriginAccessControlCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOriginRequestPolicyCommand}
   */
  deleteOriginRequestPolicy(
    args: DeleteOriginRequestPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOriginRequestPolicyCommandOutput>;
  deleteOriginRequestPolicy(
    args: DeleteOriginRequestPolicyCommandInput,
    cb: (err: any, data?: DeleteOriginRequestPolicyCommandOutput) => void
  ): void;
  deleteOriginRequestPolicy(
    args: DeleteOriginRequestPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOriginRequestPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePublicKeyCommand}
   */
  deletePublicKey(
    args: DeletePublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePublicKeyCommandOutput>;
  deletePublicKey(args: DeletePublicKeyCommandInput, cb: (err: any, data?: DeletePublicKeyCommandOutput) => void): void;
  deletePublicKey(
    args: DeletePublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRealtimeLogConfigCommand}
   */
  deleteRealtimeLogConfig(): Promise<DeleteRealtimeLogConfigCommandOutput>;
  deleteRealtimeLogConfig(
    args: DeleteRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRealtimeLogConfigCommandOutput>;
  deleteRealtimeLogConfig(
    args: DeleteRealtimeLogConfigCommandInput,
    cb: (err: any, data?: DeleteRealtimeLogConfigCommandOutput) => void
  ): void;
  deleteRealtimeLogConfig(
    args: DeleteRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRealtimeLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResponseHeadersPolicyCommand}
   */
  deleteResponseHeadersPolicy(
    args: DeleteResponseHeadersPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResponseHeadersPolicyCommandOutput>;
  deleteResponseHeadersPolicy(
    args: DeleteResponseHeadersPolicyCommandInput,
    cb: (err: any, data?: DeleteResponseHeadersPolicyCommandOutput) => void
  ): void;
  deleteResponseHeadersPolicy(
    args: DeleteResponseHeadersPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResponseHeadersPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStreamingDistributionCommand}
   */
  deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamingDistributionCommandOutput>;
  deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    cb: (err: any, data?: DeleteStreamingDistributionCommandOutput) => void
  ): void;
  deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamingDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrustStoreCommand}
   */
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrustStoreCommandOutput>;
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    cb: (err: any, data?: DeleteTrustStoreCommandOutput) => void
  ): void;
  deleteTrustStore(
    args: DeleteTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVpcOriginCommand}
   */
  deleteVpcOrigin(
    args: DeleteVpcOriginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcOriginCommandOutput>;
  deleteVpcOrigin(args: DeleteVpcOriginCommandInput, cb: (err: any, data?: DeleteVpcOriginCommandOutput) => void): void;
  deleteVpcOrigin(
    args: DeleteVpcOriginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcOriginCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectionFunctionCommand}
   */
  describeConnectionFunction(
    args: DescribeConnectionFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionFunctionCommandOutput>;
  describeConnectionFunction(
    args: DescribeConnectionFunctionCommandInput,
    cb: (err: any, data?: DescribeConnectionFunctionCommandOutput) => void
  ): void;
  describeConnectionFunction(
    args: DescribeConnectionFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFunctionCommand}
   */
  describeFunction(
    args: DescribeFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFunctionCommandOutput>;
  describeFunction(
    args: DescribeFunctionCommandInput,
    cb: (err: any, data?: DescribeFunctionCommandOutput) => void
  ): void;
  describeFunction(
    args: DescribeFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeKeyValueStoreCommand}
   */
  describeKeyValueStore(
    args: DescribeKeyValueStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeKeyValueStoreCommandOutput>;
  describeKeyValueStore(
    args: DescribeKeyValueStoreCommandInput,
    cb: (err: any, data?: DescribeKeyValueStoreCommandOutput) => void
  ): void;
  describeKeyValueStore(
    args: DescribeKeyValueStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeKeyValueStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDistributionTenantWebACLCommand}
   */
  disassociateDistributionTenantWebACL(
    args: DisassociateDistributionTenantWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDistributionTenantWebACLCommandOutput>;
  disassociateDistributionTenantWebACL(
    args: DisassociateDistributionTenantWebACLCommandInput,
    cb: (err: any, data?: DisassociateDistributionTenantWebACLCommandOutput) => void
  ): void;
  disassociateDistributionTenantWebACL(
    args: DisassociateDistributionTenantWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDistributionTenantWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDistributionWebACLCommand}
   */
  disassociateDistributionWebACL(
    args: DisassociateDistributionWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDistributionWebACLCommandOutput>;
  disassociateDistributionWebACL(
    args: DisassociateDistributionWebACLCommandInput,
    cb: (err: any, data?: DisassociateDistributionWebACLCommandOutput) => void
  ): void;
  disassociateDistributionWebACL(
    args: DisassociateDistributionWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDistributionWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnycastIpListCommand}
   */
  getAnycastIpList(
    args: GetAnycastIpListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnycastIpListCommandOutput>;
  getAnycastIpList(
    args: GetAnycastIpListCommandInput,
    cb: (err: any, data?: GetAnycastIpListCommandOutput) => void
  ): void;
  getAnycastIpList(
    args: GetAnycastIpListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnycastIpListCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCachePolicyCommand}
   */
  getCachePolicy(
    args: GetCachePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCachePolicyCommandOutput>;
  getCachePolicy(args: GetCachePolicyCommandInput, cb: (err: any, data?: GetCachePolicyCommandOutput) => void): void;
  getCachePolicy(
    args: GetCachePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCachePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCachePolicyConfigCommand}
   */
  getCachePolicyConfig(
    args: GetCachePolicyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCachePolicyConfigCommandOutput>;
  getCachePolicyConfig(
    args: GetCachePolicyConfigCommandInput,
    cb: (err: any, data?: GetCachePolicyConfigCommandOutput) => void
  ): void;
  getCachePolicyConfig(
    args: GetCachePolicyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCachePolicyConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudFrontOriginAccessIdentityCommand}
   */
  getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudFrontOriginAccessIdentityCommandOutput>;
  getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCloudFrontOriginAccessIdentityConfigCommand}
   */
  getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudFrontOriginAccessIdentityConfigCommandOutput>;
  getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput) => void
  ): void;
  getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionFunctionCommand}
   */
  getConnectionFunction(
    args: GetConnectionFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionFunctionCommandOutput>;
  getConnectionFunction(
    args: GetConnectionFunctionCommandInput,
    cb: (err: any, data?: GetConnectionFunctionCommandOutput) => void
  ): void;
  getConnectionFunction(
    args: GetConnectionFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionGroupCommand}
   */
  getConnectionGroup(
    args: GetConnectionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionGroupCommandOutput>;
  getConnectionGroup(
    args: GetConnectionGroupCommandInput,
    cb: (err: any, data?: GetConnectionGroupCommandOutput) => void
  ): void;
  getConnectionGroup(
    args: GetConnectionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionGroupByRoutingEndpointCommand}
   */
  getConnectionGroupByRoutingEndpoint(
    args: GetConnectionGroupByRoutingEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConnectionGroupByRoutingEndpointCommandOutput>;
  getConnectionGroupByRoutingEndpoint(
    args: GetConnectionGroupByRoutingEndpointCommandInput,
    cb: (err: any, data?: GetConnectionGroupByRoutingEndpointCommandOutput) => void
  ): void;
  getConnectionGroupByRoutingEndpoint(
    args: GetConnectionGroupByRoutingEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectionGroupByRoutingEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContinuousDeploymentPolicyCommand}
   */
  getContinuousDeploymentPolicy(
    args: GetContinuousDeploymentPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContinuousDeploymentPolicyCommandOutput>;
  getContinuousDeploymentPolicy(
    args: GetContinuousDeploymentPolicyCommandInput,
    cb: (err: any, data?: GetContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  getContinuousDeploymentPolicy(
    args: GetContinuousDeploymentPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContinuousDeploymentPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContinuousDeploymentPolicyConfigCommand}
   */
  getContinuousDeploymentPolicyConfig(
    args: GetContinuousDeploymentPolicyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContinuousDeploymentPolicyConfigCommandOutput>;
  getContinuousDeploymentPolicyConfig(
    args: GetContinuousDeploymentPolicyConfigCommandInput,
    cb: (err: any, data?: GetContinuousDeploymentPolicyConfigCommandOutput) => void
  ): void;
  getContinuousDeploymentPolicyConfig(
    args: GetContinuousDeploymentPolicyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContinuousDeploymentPolicyConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDistributionCommand}
   */
  getDistribution(
    args: GetDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionCommandOutput>;
  getDistribution(args: GetDistributionCommandInput, cb: (err: any, data?: GetDistributionCommandOutput) => void): void;
  getDistribution(
    args: GetDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDistributionConfigCommand}
   */
  getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionConfigCommandOutput>;
  getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    cb: (err: any, data?: GetDistributionConfigCommandOutput) => void
  ): void;
  getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDistributionTenantCommand}
   */
  getDistributionTenant(
    args: GetDistributionTenantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionTenantCommandOutput>;
  getDistributionTenant(
    args: GetDistributionTenantCommandInput,
    cb: (err: any, data?: GetDistributionTenantCommandOutput) => void
  ): void;
  getDistributionTenant(
    args: GetDistributionTenantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionTenantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDistributionTenantByDomainCommand}
   */
  getDistributionTenantByDomain(
    args: GetDistributionTenantByDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionTenantByDomainCommandOutput>;
  getDistributionTenantByDomain(
    args: GetDistributionTenantByDomainCommandInput,
    cb: (err: any, data?: GetDistributionTenantByDomainCommandOutput) => void
  ): void;
  getDistributionTenantByDomain(
    args: GetDistributionTenantByDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionTenantByDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFieldLevelEncryptionCommand}
   */
  getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionCommandOutput>;
  getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionCommandOutput) => void
  ): void;
  getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFieldLevelEncryptionConfigCommand}
   */
  getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionConfigCommandOutput>;
  getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFieldLevelEncryptionProfileCommand}
   */
  getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionProfileCommandOutput>;
  getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFieldLevelEncryptionProfileConfigCommand}
   */
  getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput>;
  getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileConfigCommandOutput) => void
  ): void;
  getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFunctionCommand}
   */
  getFunction(args: GetFunctionCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionCommandOutput>;
  getFunction(args: GetFunctionCommandInput, cb: (err: any, data?: GetFunctionCommandOutput) => void): void;
  getFunction(
    args: GetFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInvalidationCommand}
   */
  getInvalidation(
    args: GetInvalidationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvalidationCommandOutput>;
  getInvalidation(args: GetInvalidationCommandInput, cb: (err: any, data?: GetInvalidationCommandOutput) => void): void;
  getInvalidation(
    args: GetInvalidationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvalidationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInvalidationForDistributionTenantCommand}
   */
  getInvalidationForDistributionTenant(
    args: GetInvalidationForDistributionTenantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvalidationForDistributionTenantCommandOutput>;
  getInvalidationForDistributionTenant(
    args: GetInvalidationForDistributionTenantCommandInput,
    cb: (err: any, data?: GetInvalidationForDistributionTenantCommandOutput) => void
  ): void;
  getInvalidationForDistributionTenant(
    args: GetInvalidationForDistributionTenantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvalidationForDistributionTenantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKeyGroupCommand}
   */
  getKeyGroup(args: GetKeyGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetKeyGroupCommandOutput>;
  getKeyGroup(args: GetKeyGroupCommandInput, cb: (err: any, data?: GetKeyGroupCommandOutput) => void): void;
  getKeyGroup(
    args: GetKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetKeyGroupConfigCommand}
   */
  getKeyGroupConfig(
    args: GetKeyGroupConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKeyGroupConfigCommandOutput>;
  getKeyGroupConfig(
    args: GetKeyGroupConfigCommandInput,
    cb: (err: any, data?: GetKeyGroupConfigCommandOutput) => void
  ): void;
  getKeyGroupConfig(
    args: GetKeyGroupConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyGroupConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedCertificateDetailsCommand}
   */
  getManagedCertificateDetails(
    args: GetManagedCertificateDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedCertificateDetailsCommandOutput>;
  getManagedCertificateDetails(
    args: GetManagedCertificateDetailsCommandInput,
    cb: (err: any, data?: GetManagedCertificateDetailsCommandOutput) => void
  ): void;
  getManagedCertificateDetails(
    args: GetManagedCertificateDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedCertificateDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMonitoringSubscriptionCommand}
   */
  getMonitoringSubscription(
    args: GetMonitoringSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMonitoringSubscriptionCommandOutput>;
  getMonitoringSubscription(
    args: GetMonitoringSubscriptionCommandInput,
    cb: (err: any, data?: GetMonitoringSubscriptionCommandOutput) => void
  ): void;
  getMonitoringSubscription(
    args: GetMonitoringSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMonitoringSubscriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOriginAccessControlCommand}
   */
  getOriginAccessControl(
    args: GetOriginAccessControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOriginAccessControlCommandOutput>;
  getOriginAccessControl(
    args: GetOriginAccessControlCommandInput,
    cb: (err: any, data?: GetOriginAccessControlCommandOutput) => void
  ): void;
  getOriginAccessControl(
    args: GetOriginAccessControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOriginAccessControlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOriginAccessControlConfigCommand}
   */
  getOriginAccessControlConfig(
    args: GetOriginAccessControlConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOriginAccessControlConfigCommandOutput>;
  getOriginAccessControlConfig(
    args: GetOriginAccessControlConfigCommandInput,
    cb: (err: any, data?: GetOriginAccessControlConfigCommandOutput) => void
  ): void;
  getOriginAccessControlConfig(
    args: GetOriginAccessControlConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOriginAccessControlConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOriginRequestPolicyCommand}
   */
  getOriginRequestPolicy(
    args: GetOriginRequestPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOriginRequestPolicyCommandOutput>;
  getOriginRequestPolicy(
    args: GetOriginRequestPolicyCommandInput,
    cb: (err: any, data?: GetOriginRequestPolicyCommandOutput) => void
  ): void;
  getOriginRequestPolicy(
    args: GetOriginRequestPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOriginRequestPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOriginRequestPolicyConfigCommand}
   */
  getOriginRequestPolicyConfig(
    args: GetOriginRequestPolicyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOriginRequestPolicyConfigCommandOutput>;
  getOriginRequestPolicyConfig(
    args: GetOriginRequestPolicyConfigCommandInput,
    cb: (err: any, data?: GetOriginRequestPolicyConfigCommandOutput) => void
  ): void;
  getOriginRequestPolicyConfig(
    args: GetOriginRequestPolicyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOriginRequestPolicyConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPublicKeyCommand}
   */
  getPublicKey(args: GetPublicKeyCommandInput, options?: __HttpHandlerOptions): Promise<GetPublicKeyCommandOutput>;
  getPublicKey(args: GetPublicKeyCommandInput, cb: (err: any, data?: GetPublicKeyCommandOutput) => void): void;
  getPublicKey(
    args: GetPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPublicKeyConfigCommand}
   */
  getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPublicKeyConfigCommandOutput>;
  getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    cb: (err: any, data?: GetPublicKeyConfigCommandOutput) => void
  ): void;
  getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicKeyConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRealtimeLogConfigCommand}
   */
  getRealtimeLogConfig(): Promise<GetRealtimeLogConfigCommandOutput>;
  getRealtimeLogConfig(
    args: GetRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRealtimeLogConfigCommandOutput>;
  getRealtimeLogConfig(
    args: GetRealtimeLogConfigCommandInput,
    cb: (err: any, data?: GetRealtimeLogConfigCommandOutput) => void
  ): void;
  getRealtimeLogConfig(
    args: GetRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRealtimeLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResponseHeadersPolicyCommand}
   */
  getResponseHeadersPolicy(
    args: GetResponseHeadersPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResponseHeadersPolicyCommandOutput>;
  getResponseHeadersPolicy(
    args: GetResponseHeadersPolicyCommandInput,
    cb: (err: any, data?: GetResponseHeadersPolicyCommandOutput) => void
  ): void;
  getResponseHeadersPolicy(
    args: GetResponseHeadersPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResponseHeadersPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResponseHeadersPolicyConfigCommand}
   */
  getResponseHeadersPolicyConfig(
    args: GetResponseHeadersPolicyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResponseHeadersPolicyConfigCommandOutput>;
  getResponseHeadersPolicyConfig(
    args: GetResponseHeadersPolicyConfigCommandInput,
    cb: (err: any, data?: GetResponseHeadersPolicyConfigCommandOutput) => void
  ): void;
  getResponseHeadersPolicyConfig(
    args: GetResponseHeadersPolicyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResponseHeadersPolicyConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamingDistributionCommand}
   */
  getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingDistributionCommandOutput>;
  getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    cb: (err: any, data?: GetStreamingDistributionCommandOutput) => void
  ): void;
  getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStreamingDistributionConfigCommand}
   */
  getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingDistributionConfigCommandOutput>;
  getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    cb: (err: any, data?: GetStreamingDistributionConfigCommandOutput) => void
  ): void;
  getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingDistributionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrustStoreCommand}
   */
  getTrustStore(args: GetTrustStoreCommandInput, options?: __HttpHandlerOptions): Promise<GetTrustStoreCommandOutput>;
  getTrustStore(args: GetTrustStoreCommandInput, cb: (err: any, data?: GetTrustStoreCommandOutput) => void): void;
  getTrustStore(
    args: GetTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVpcOriginCommand}
   */
  getVpcOrigin(args: GetVpcOriginCommandInput, options?: __HttpHandlerOptions): Promise<GetVpcOriginCommandOutput>;
  getVpcOrigin(args: GetVpcOriginCommandInput, cb: (err: any, data?: GetVpcOriginCommandOutput) => void): void;
  getVpcOrigin(
    args: GetVpcOriginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcOriginCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnycastIpListsCommand}
   */
  listAnycastIpLists(): Promise<ListAnycastIpListsCommandOutput>;
  listAnycastIpLists(
    args: ListAnycastIpListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnycastIpListsCommandOutput>;
  listAnycastIpLists(
    args: ListAnycastIpListsCommandInput,
    cb: (err: any, data?: ListAnycastIpListsCommandOutput) => void
  ): void;
  listAnycastIpLists(
    args: ListAnycastIpListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnycastIpListsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCachePoliciesCommand}
   */
  listCachePolicies(): Promise<ListCachePoliciesCommandOutput>;
  listCachePolicies(
    args: ListCachePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCachePoliciesCommandOutput>;
  listCachePolicies(
    args: ListCachePoliciesCommandInput,
    cb: (err: any, data?: ListCachePoliciesCommandOutput) => void
  ): void;
  listCachePolicies(
    args: ListCachePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCachePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCloudFrontOriginAccessIdentitiesCommand}
   */
  listCloudFrontOriginAccessIdentities(): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput>;
  listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput>;
  listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    cb: (err: any, data?: ListCloudFrontOriginAccessIdentitiesCommandOutput) => void
  ): void;
  listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCloudFrontOriginAccessIdentitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConflictingAliasesCommand}
   */
  listConflictingAliases(
    args: ListConflictingAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConflictingAliasesCommandOutput>;
  listConflictingAliases(
    args: ListConflictingAliasesCommandInput,
    cb: (err: any, data?: ListConflictingAliasesCommandOutput) => void
  ): void;
  listConflictingAliases(
    args: ListConflictingAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConflictingAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionFunctionsCommand}
   */
  listConnectionFunctions(): Promise<ListConnectionFunctionsCommandOutput>;
  listConnectionFunctions(
    args: ListConnectionFunctionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectionFunctionsCommandOutput>;
  listConnectionFunctions(
    args: ListConnectionFunctionsCommandInput,
    cb: (err: any, data?: ListConnectionFunctionsCommandOutput) => void
  ): void;
  listConnectionFunctions(
    args: ListConnectionFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectionFunctionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionGroupsCommand}
   */
  listConnectionGroups(): Promise<ListConnectionGroupsCommandOutput>;
  listConnectionGroups(
    args: ListConnectionGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectionGroupsCommandOutput>;
  listConnectionGroups(
    args: ListConnectionGroupsCommandInput,
    cb: (err: any, data?: ListConnectionGroupsCommandOutput) => void
  ): void;
  listConnectionGroups(
    args: ListConnectionGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectionGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContinuousDeploymentPoliciesCommand}
   */
  listContinuousDeploymentPolicies(): Promise<ListContinuousDeploymentPoliciesCommandOutput>;
  listContinuousDeploymentPolicies(
    args: ListContinuousDeploymentPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContinuousDeploymentPoliciesCommandOutput>;
  listContinuousDeploymentPolicies(
    args: ListContinuousDeploymentPoliciesCommandInput,
    cb: (err: any, data?: ListContinuousDeploymentPoliciesCommandOutput) => void
  ): void;
  listContinuousDeploymentPolicies(
    args: ListContinuousDeploymentPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContinuousDeploymentPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsCommand}
   */
  listDistributions(): Promise<ListDistributionsCommandOutput>;
  listDistributions(
    args: ListDistributionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsCommandOutput>;
  listDistributions(
    args: ListDistributionsCommandInput,
    cb: (err: any, data?: ListDistributionsCommandOutput) => void
  ): void;
  listDistributions(
    args: ListDistributionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByAnycastIpListIdCommand}
   */
  listDistributionsByAnycastIpListId(
    args: ListDistributionsByAnycastIpListIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByAnycastIpListIdCommandOutput>;
  listDistributionsByAnycastIpListId(
    args: ListDistributionsByAnycastIpListIdCommandInput,
    cb: (err: any, data?: ListDistributionsByAnycastIpListIdCommandOutput) => void
  ): void;
  listDistributionsByAnycastIpListId(
    args: ListDistributionsByAnycastIpListIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByAnycastIpListIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByCachePolicyIdCommand}
   */
  listDistributionsByCachePolicyId(
    args: ListDistributionsByCachePolicyIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByCachePolicyIdCommandOutput>;
  listDistributionsByCachePolicyId(
    args: ListDistributionsByCachePolicyIdCommandInput,
    cb: (err: any, data?: ListDistributionsByCachePolicyIdCommandOutput) => void
  ): void;
  listDistributionsByCachePolicyId(
    args: ListDistributionsByCachePolicyIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByCachePolicyIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByConnectionFunctionCommand}
   */
  listDistributionsByConnectionFunction(
    args: ListDistributionsByConnectionFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByConnectionFunctionCommandOutput>;
  listDistributionsByConnectionFunction(
    args: ListDistributionsByConnectionFunctionCommandInput,
    cb: (err: any, data?: ListDistributionsByConnectionFunctionCommandOutput) => void
  ): void;
  listDistributionsByConnectionFunction(
    args: ListDistributionsByConnectionFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByConnectionModeCommand}
   */
  listDistributionsByConnectionMode(
    args: ListDistributionsByConnectionModeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByConnectionModeCommandOutput>;
  listDistributionsByConnectionMode(
    args: ListDistributionsByConnectionModeCommandInput,
    cb: (err: any, data?: ListDistributionsByConnectionModeCommandOutput) => void
  ): void;
  listDistributionsByConnectionMode(
    args: ListDistributionsByConnectionModeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByConnectionModeCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByKeyGroupCommand}
   */
  listDistributionsByKeyGroup(
    args: ListDistributionsByKeyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByKeyGroupCommandOutput>;
  listDistributionsByKeyGroup(
    args: ListDistributionsByKeyGroupCommandInput,
    cb: (err: any, data?: ListDistributionsByKeyGroupCommandOutput) => void
  ): void;
  listDistributionsByKeyGroup(
    args: ListDistributionsByKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByKeyGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByOriginRequestPolicyIdCommand}
   */
  listDistributionsByOriginRequestPolicyId(
    args: ListDistributionsByOriginRequestPolicyIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByOriginRequestPolicyIdCommandOutput>;
  listDistributionsByOriginRequestPolicyId(
    args: ListDistributionsByOriginRequestPolicyIdCommandInput,
    cb: (err: any, data?: ListDistributionsByOriginRequestPolicyIdCommandOutput) => void
  ): void;
  listDistributionsByOriginRequestPolicyId(
    args: ListDistributionsByOriginRequestPolicyIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByOriginRequestPolicyIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByOwnedResourceCommand}
   */
  listDistributionsByOwnedResource(
    args: ListDistributionsByOwnedResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByOwnedResourceCommandOutput>;
  listDistributionsByOwnedResource(
    args: ListDistributionsByOwnedResourceCommandInput,
    cb: (err: any, data?: ListDistributionsByOwnedResourceCommandOutput) => void
  ): void;
  listDistributionsByOwnedResource(
    args: ListDistributionsByOwnedResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByOwnedResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByRealtimeLogConfigCommand}
   */
  listDistributionsByRealtimeLogConfig(): Promise<ListDistributionsByRealtimeLogConfigCommandOutput>;
  listDistributionsByRealtimeLogConfig(
    args: ListDistributionsByRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByRealtimeLogConfigCommandOutput>;
  listDistributionsByRealtimeLogConfig(
    args: ListDistributionsByRealtimeLogConfigCommandInput,
    cb: (err: any, data?: ListDistributionsByRealtimeLogConfigCommandOutput) => void
  ): void;
  listDistributionsByRealtimeLogConfig(
    args: ListDistributionsByRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByRealtimeLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByResponseHeadersPolicyIdCommand}
   */
  listDistributionsByResponseHeadersPolicyId(
    args: ListDistributionsByResponseHeadersPolicyIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByResponseHeadersPolicyIdCommandOutput>;
  listDistributionsByResponseHeadersPolicyId(
    args: ListDistributionsByResponseHeadersPolicyIdCommandInput,
    cb: (err: any, data?: ListDistributionsByResponseHeadersPolicyIdCommandOutput) => void
  ): void;
  listDistributionsByResponseHeadersPolicyId(
    args: ListDistributionsByResponseHeadersPolicyIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByResponseHeadersPolicyIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByTrustStoreCommand}
   */
  listDistributionsByTrustStore(
    args: ListDistributionsByTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByTrustStoreCommandOutput>;
  listDistributionsByTrustStore(
    args: ListDistributionsByTrustStoreCommandInput,
    cb: (err: any, data?: ListDistributionsByTrustStoreCommandOutput) => void
  ): void;
  listDistributionsByTrustStore(
    args: ListDistributionsByTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByVpcOriginIdCommand}
   */
  listDistributionsByVpcOriginId(
    args: ListDistributionsByVpcOriginIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByVpcOriginIdCommandOutput>;
  listDistributionsByVpcOriginId(
    args: ListDistributionsByVpcOriginIdCommandInput,
    cb: (err: any, data?: ListDistributionsByVpcOriginIdCommandOutput) => void
  ): void;
  listDistributionsByVpcOriginId(
    args: ListDistributionsByVpcOriginIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByVpcOriginIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionsByWebACLIdCommand}
   */
  listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByWebACLIdCommandOutput>;
  listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    cb: (err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void
  ): void;
  listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionTenantsCommand}
   */
  listDistributionTenants(): Promise<ListDistributionTenantsCommandOutput>;
  listDistributionTenants(
    args: ListDistributionTenantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionTenantsCommandOutput>;
  listDistributionTenants(
    args: ListDistributionTenantsCommandInput,
    cb: (err: any, data?: ListDistributionTenantsCommandOutput) => void
  ): void;
  listDistributionTenants(
    args: ListDistributionTenantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionTenantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionTenantsByCustomizationCommand}
   */
  listDistributionTenantsByCustomization(): Promise<ListDistributionTenantsByCustomizationCommandOutput>;
  listDistributionTenantsByCustomization(
    args: ListDistributionTenantsByCustomizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionTenantsByCustomizationCommandOutput>;
  listDistributionTenantsByCustomization(
    args: ListDistributionTenantsByCustomizationCommandInput,
    cb: (err: any, data?: ListDistributionTenantsByCustomizationCommandOutput) => void
  ): void;
  listDistributionTenantsByCustomization(
    args: ListDistributionTenantsByCustomizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionTenantsByCustomizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainConflictsCommand}
   */
  listDomainConflicts(
    args: ListDomainConflictsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainConflictsCommandOutput>;
  listDomainConflicts(
    args: ListDomainConflictsCommandInput,
    cb: (err: any, data?: ListDomainConflictsCommandOutput) => void
  ): void;
  listDomainConflicts(
    args: ListDomainConflictsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainConflictsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFieldLevelEncryptionConfigsCommand}
   */
  listFieldLevelEncryptionConfigs(): Promise<ListFieldLevelEncryptionConfigsCommandOutput>;
  listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFieldLevelEncryptionConfigsCommandOutput>;
  listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    cb: (err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void
  ): void;
  listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFieldLevelEncryptionProfilesCommand}
   */
  listFieldLevelEncryptionProfiles(): Promise<ListFieldLevelEncryptionProfilesCommandOutput>;
  listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFieldLevelEncryptionProfilesCommandOutput>;
  listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    cb: (err: any, data?: ListFieldLevelEncryptionProfilesCommandOutput) => void
  ): void;
  listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFieldLevelEncryptionProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFunctionsCommand}
   */
  listFunctions(): Promise<ListFunctionsCommandOutput>;
  listFunctions(args: ListFunctionsCommandInput, options?: __HttpHandlerOptions): Promise<ListFunctionsCommandOutput>;
  listFunctions(args: ListFunctionsCommandInput, cb: (err: any, data?: ListFunctionsCommandOutput) => void): void;
  listFunctions(
    args: ListFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvalidationsCommand}
   */
  listInvalidations(
    args: ListInvalidationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvalidationsCommandOutput>;
  listInvalidations(
    args: ListInvalidationsCommandInput,
    cb: (err: any, data?: ListInvalidationsCommandOutput) => void
  ): void;
  listInvalidations(
    args: ListInvalidationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvalidationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvalidationsForDistributionTenantCommand}
   */
  listInvalidationsForDistributionTenant(
    args: ListInvalidationsForDistributionTenantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvalidationsForDistributionTenantCommandOutput>;
  listInvalidationsForDistributionTenant(
    args: ListInvalidationsForDistributionTenantCommandInput,
    cb: (err: any, data?: ListInvalidationsForDistributionTenantCommandOutput) => void
  ): void;
  listInvalidationsForDistributionTenant(
    args: ListInvalidationsForDistributionTenantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvalidationsForDistributionTenantCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKeyGroupsCommand}
   */
  listKeyGroups(): Promise<ListKeyGroupsCommandOutput>;
  listKeyGroups(args: ListKeyGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListKeyGroupsCommandOutput>;
  listKeyGroups(args: ListKeyGroupsCommandInput, cb: (err: any, data?: ListKeyGroupsCommandOutput) => void): void;
  listKeyGroups(
    args: ListKeyGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeyGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKeyValueStoresCommand}
   */
  listKeyValueStores(): Promise<ListKeyValueStoresCommandOutput>;
  listKeyValueStores(
    args: ListKeyValueStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKeyValueStoresCommandOutput>;
  listKeyValueStores(
    args: ListKeyValueStoresCommandInput,
    cb: (err: any, data?: ListKeyValueStoresCommandOutput) => void
  ): void;
  listKeyValueStores(
    args: ListKeyValueStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeyValueStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOriginAccessControlsCommand}
   */
  listOriginAccessControls(): Promise<ListOriginAccessControlsCommandOutput>;
  listOriginAccessControls(
    args: ListOriginAccessControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOriginAccessControlsCommandOutput>;
  listOriginAccessControls(
    args: ListOriginAccessControlsCommandInput,
    cb: (err: any, data?: ListOriginAccessControlsCommandOutput) => void
  ): void;
  listOriginAccessControls(
    args: ListOriginAccessControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOriginAccessControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOriginRequestPoliciesCommand}
   */
  listOriginRequestPolicies(): Promise<ListOriginRequestPoliciesCommandOutput>;
  listOriginRequestPolicies(
    args: ListOriginRequestPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOriginRequestPoliciesCommandOutput>;
  listOriginRequestPolicies(
    args: ListOriginRequestPoliciesCommandInput,
    cb: (err: any, data?: ListOriginRequestPoliciesCommandOutput) => void
  ): void;
  listOriginRequestPolicies(
    args: ListOriginRequestPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOriginRequestPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPublicKeysCommand}
   */
  listPublicKeys(): Promise<ListPublicKeysCommandOutput>;
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPublicKeysCommandOutput>;
  listPublicKeys(args: ListPublicKeysCommandInput, cb: (err: any, data?: ListPublicKeysCommandOutput) => void): void;
  listPublicKeys(
    args: ListPublicKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRealtimeLogConfigsCommand}
   */
  listRealtimeLogConfigs(): Promise<ListRealtimeLogConfigsCommandOutput>;
  listRealtimeLogConfigs(
    args: ListRealtimeLogConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRealtimeLogConfigsCommandOutput>;
  listRealtimeLogConfigs(
    args: ListRealtimeLogConfigsCommandInput,
    cb: (err: any, data?: ListRealtimeLogConfigsCommandOutput) => void
  ): void;
  listRealtimeLogConfigs(
    args: ListRealtimeLogConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRealtimeLogConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResponseHeadersPoliciesCommand}
   */
  listResponseHeadersPolicies(): Promise<ListResponseHeadersPoliciesCommandOutput>;
  listResponseHeadersPolicies(
    args: ListResponseHeadersPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResponseHeadersPoliciesCommandOutput>;
  listResponseHeadersPolicies(
    args: ListResponseHeadersPoliciesCommandInput,
    cb: (err: any, data?: ListResponseHeadersPoliciesCommandOutput) => void
  ): void;
  listResponseHeadersPolicies(
    args: ListResponseHeadersPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResponseHeadersPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamingDistributionsCommand}
   */
  listStreamingDistributions(): Promise<ListStreamingDistributionsCommandOutput>;
  listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamingDistributionsCommandOutput>;
  listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    cb: (err: any, data?: ListStreamingDistributionsCommandOutput) => void
  ): void;
  listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamingDistributionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrustStoresCommand}
   */
  listTrustStores(): Promise<ListTrustStoresCommandOutput>;
  listTrustStores(
    args: ListTrustStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrustStoresCommandOutput>;
  listTrustStores(args: ListTrustStoresCommandInput, cb: (err: any, data?: ListTrustStoresCommandOutput) => void): void;
  listTrustStores(
    args: ListTrustStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrustStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVpcOriginsCommand}
   */
  listVpcOrigins(): Promise<ListVpcOriginsCommandOutput>;
  listVpcOrigins(
    args: ListVpcOriginsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVpcOriginsCommandOutput>;
  listVpcOrigins(args: ListVpcOriginsCommandInput, cb: (err: any, data?: ListVpcOriginsCommandOutput) => void): void;
  listVpcOrigins(
    args: ListVpcOriginsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVpcOriginsCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishConnectionFunctionCommand}
   */
  publishConnectionFunction(
    args: PublishConnectionFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishConnectionFunctionCommandOutput>;
  publishConnectionFunction(
    args: PublishConnectionFunctionCommandInput,
    cb: (err: any, data?: PublishConnectionFunctionCommandOutput) => void
  ): void;
  publishConnectionFunction(
    args: PublishConnectionFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishFunctionCommand}
   */
  publishFunction(
    args: PublishFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishFunctionCommandOutput>;
  publishFunction(args: PublishFunctionCommandInput, cb: (err: any, data?: PublishFunctionCommandOutput) => void): void;
  publishFunction(
    args: PublishFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestConnectionFunctionCommand}
   */
  testConnectionFunction(
    args: TestConnectionFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestConnectionFunctionCommandOutput>;
  testConnectionFunction(
    args: TestConnectionFunctionCommandInput,
    cb: (err: any, data?: TestConnectionFunctionCommandOutput) => void
  ): void;
  testConnectionFunction(
    args: TestConnectionFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link TestFunctionCommand}
   */
  testFunction(args: TestFunctionCommandInput, options?: __HttpHandlerOptions): Promise<TestFunctionCommandOutput>;
  testFunction(args: TestFunctionCommandInput, cb: (err: any, data?: TestFunctionCommandOutput) => void): void;
  testFunction(
    args: TestFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAnycastIpListCommand}
   */
  updateAnycastIpList(
    args: UpdateAnycastIpListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnycastIpListCommandOutput>;
  updateAnycastIpList(
    args: UpdateAnycastIpListCommandInput,
    cb: (err: any, data?: UpdateAnycastIpListCommandOutput) => void
  ): void;
  updateAnycastIpList(
    args: UpdateAnycastIpListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnycastIpListCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCachePolicyCommand}
   */
  updateCachePolicy(
    args: UpdateCachePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCachePolicyCommandOutput>;
  updateCachePolicy(
    args: UpdateCachePolicyCommandInput,
    cb: (err: any, data?: UpdateCachePolicyCommandOutput) => void
  ): void;
  updateCachePolicy(
    args: UpdateCachePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCachePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCloudFrontOriginAccessIdentityCommand}
   */
  updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput>;
  updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: UpdateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectionFunctionCommand}
   */
  updateConnectionFunction(
    args: UpdateConnectionFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionFunctionCommandOutput>;
  updateConnectionFunction(
    args: UpdateConnectionFunctionCommandInput,
    cb: (err: any, data?: UpdateConnectionFunctionCommandOutput) => void
  ): void;
  updateConnectionFunction(
    args: UpdateConnectionFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectionGroupCommand}
   */
  updateConnectionGroup(
    args: UpdateConnectionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionGroupCommandOutput>;
  updateConnectionGroup(
    args: UpdateConnectionGroupCommandInput,
    cb: (err: any, data?: UpdateConnectionGroupCommandOutput) => void
  ): void;
  updateConnectionGroup(
    args: UpdateConnectionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContinuousDeploymentPolicyCommand}
   */
  updateContinuousDeploymentPolicy(
    args: UpdateContinuousDeploymentPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContinuousDeploymentPolicyCommandOutput>;
  updateContinuousDeploymentPolicy(
    args: UpdateContinuousDeploymentPolicyCommandInput,
    cb: (err: any, data?: UpdateContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  updateContinuousDeploymentPolicy(
    args: UpdateContinuousDeploymentPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContinuousDeploymentPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDistributionCommand}
   */
  updateDistribution(
    args: UpdateDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDistributionCommandOutput>;
  updateDistribution(
    args: UpdateDistributionCommandInput,
    cb: (err: any, data?: UpdateDistributionCommandOutput) => void
  ): void;
  updateDistribution(
    args: UpdateDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDistributionTenantCommand}
   */
  updateDistributionTenant(
    args: UpdateDistributionTenantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDistributionTenantCommandOutput>;
  updateDistributionTenant(
    args: UpdateDistributionTenantCommandInput,
    cb: (err: any, data?: UpdateDistributionTenantCommandOutput) => void
  ): void;
  updateDistributionTenant(
    args: UpdateDistributionTenantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDistributionTenantCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDistributionWithStagingConfigCommand}
   */
  updateDistributionWithStagingConfig(
    args: UpdateDistributionWithStagingConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDistributionWithStagingConfigCommandOutput>;
  updateDistributionWithStagingConfig(
    args: UpdateDistributionWithStagingConfigCommandInput,
    cb: (err: any, data?: UpdateDistributionWithStagingConfigCommandOutput) => void
  ): void;
  updateDistributionWithStagingConfig(
    args: UpdateDistributionWithStagingConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDistributionWithStagingConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainAssociationCommand}
   */
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainAssociationCommandOutput>;
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    cb: (err: any, data?: UpdateDomainAssociationCommandOutput) => void
  ): void;
  updateDomainAssociation(
    args: UpdateDomainAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFieldLevelEncryptionConfigCommand}
   */
  updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFieldLevelEncryptionConfigCommandOutput>;
  updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: UpdateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFieldLevelEncryptionProfileCommand}
   */
  updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFieldLevelEncryptionProfileCommandOutput>;
  updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: UpdateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFunctionCommand}
   */
  updateFunction(
    args: UpdateFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionCommandOutput>;
  updateFunction(args: UpdateFunctionCommandInput, cb: (err: any, data?: UpdateFunctionCommandOutput) => void): void;
  updateFunction(
    args: UpdateFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKeyGroupCommand}
   */
  updateKeyGroup(
    args: UpdateKeyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKeyGroupCommandOutput>;
  updateKeyGroup(args: UpdateKeyGroupCommandInput, cb: (err: any, data?: UpdateKeyGroupCommandOutput) => void): void;
  updateKeyGroup(
    args: UpdateKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKeyGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateKeyValueStoreCommand}
   */
  updateKeyValueStore(
    args: UpdateKeyValueStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKeyValueStoreCommandOutput>;
  updateKeyValueStore(
    args: UpdateKeyValueStoreCommandInput,
    cb: (err: any, data?: UpdateKeyValueStoreCommandOutput) => void
  ): void;
  updateKeyValueStore(
    args: UpdateKeyValueStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKeyValueStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOriginAccessControlCommand}
   */
  updateOriginAccessControl(
    args: UpdateOriginAccessControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOriginAccessControlCommandOutput>;
  updateOriginAccessControl(
    args: UpdateOriginAccessControlCommandInput,
    cb: (err: any, data?: UpdateOriginAccessControlCommandOutput) => void
  ): void;
  updateOriginAccessControl(
    args: UpdateOriginAccessControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOriginAccessControlCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOriginRequestPolicyCommand}
   */
  updateOriginRequestPolicy(
    args: UpdateOriginRequestPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOriginRequestPolicyCommandOutput>;
  updateOriginRequestPolicy(
    args: UpdateOriginRequestPolicyCommandInput,
    cb: (err: any, data?: UpdateOriginRequestPolicyCommandOutput) => void
  ): void;
  updateOriginRequestPolicy(
    args: UpdateOriginRequestPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOriginRequestPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePublicKeyCommand}
   */
  updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePublicKeyCommandOutput>;
  updatePublicKey(args: UpdatePublicKeyCommandInput, cb: (err: any, data?: UpdatePublicKeyCommandOutput) => void): void;
  updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRealtimeLogConfigCommand}
   */
  updateRealtimeLogConfig(): Promise<UpdateRealtimeLogConfigCommandOutput>;
  updateRealtimeLogConfig(
    args: UpdateRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRealtimeLogConfigCommandOutput>;
  updateRealtimeLogConfig(
    args: UpdateRealtimeLogConfigCommandInput,
    cb: (err: any, data?: UpdateRealtimeLogConfigCommandOutput) => void
  ): void;
  updateRealtimeLogConfig(
    args: UpdateRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRealtimeLogConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResponseHeadersPolicyCommand}
   */
  updateResponseHeadersPolicy(
    args: UpdateResponseHeadersPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResponseHeadersPolicyCommandOutput>;
  updateResponseHeadersPolicy(
    args: UpdateResponseHeadersPolicyCommandInput,
    cb: (err: any, data?: UpdateResponseHeadersPolicyCommandOutput) => void
  ): void;
  updateResponseHeadersPolicy(
    args: UpdateResponseHeadersPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResponseHeadersPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStreamingDistributionCommand}
   */
  updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStreamingDistributionCommandOutput>;
  updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    cb: (err: any, data?: UpdateStreamingDistributionCommandOutput) => void
  ): void;
  updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamingDistributionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrustStoreCommand}
   */
  updateTrustStore(
    args: UpdateTrustStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrustStoreCommandOutput>;
  updateTrustStore(
    args: UpdateTrustStoreCommandInput,
    cb: (err: any, data?: UpdateTrustStoreCommandOutput) => void
  ): void;
  updateTrustStore(
    args: UpdateTrustStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrustStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVpcOriginCommand}
   */
  updateVpcOrigin(
    args: UpdateVpcOriginCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVpcOriginCommandOutput>;
  updateVpcOrigin(args: UpdateVpcOriginCommandInput, cb: (err: any, data?: UpdateVpcOriginCommandOutput) => void): void;
  updateVpcOrigin(
    args: UpdateVpcOriginCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcOriginCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyDnsConfigurationCommand}
   */
  verifyDnsConfiguration(
    args: VerifyDnsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyDnsConfigurationCommandOutput>;
  verifyDnsConfiguration(
    args: VerifyDnsConfigurationCommandInput,
    cb: (err: any, data?: VerifyDnsConfigurationCommandOutput) => void
  ): void;
  verifyDnsConfiguration(
    args: VerifyDnsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyDnsConfigurationCommandOutput) => void
  ): void;
}

/**
 * <fullname>Amazon CloudFront</fullname> <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html">Amazon CloudFront Developer Guide</a>.</p>
 * @public
 */
export class CloudFront extends CloudFrontClient implements CloudFront {}
createAggregatedClient(commands, CloudFront);
