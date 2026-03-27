// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultCloudFrontHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AssociateAliasCommandInput, AssociateAliasCommandOutput } from "./commands/AssociateAliasCommand";
import type {
  AssociateDistributionTenantWebACLCommandInput,
  AssociateDistributionTenantWebACLCommandOutput,
} from "./commands/AssociateDistributionTenantWebACLCommand";
import type {
  AssociateDistributionWebACLCommandInput,
  AssociateDistributionWebACLCommandOutput,
} from "./commands/AssociateDistributionWebACLCommand";
import type { CopyDistributionCommandInput, CopyDistributionCommandOutput } from "./commands/CopyDistributionCommand";
import type {
  CreateAnycastIpListCommandInput,
  CreateAnycastIpListCommandOutput,
} from "./commands/CreateAnycastIpListCommand";
import type {
  CreateCachePolicyCommandInput,
  CreateCachePolicyCommandOutput,
} from "./commands/CreateCachePolicyCommand";
import type {
  CreateCloudFrontOriginAccessIdentityCommandInput,
  CreateCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/CreateCloudFrontOriginAccessIdentityCommand";
import type {
  CreateConnectionFunctionCommandInput,
  CreateConnectionFunctionCommandOutput,
} from "./commands/CreateConnectionFunctionCommand";
import type {
  CreateConnectionGroupCommandInput,
  CreateConnectionGroupCommandOutput,
} from "./commands/CreateConnectionGroupCommand";
import type {
  CreateContinuousDeploymentPolicyCommandInput,
  CreateContinuousDeploymentPolicyCommandOutput,
} from "./commands/CreateContinuousDeploymentPolicyCommand";
import type {
  CreateDistributionCommandInput,
  CreateDistributionCommandOutput,
} from "./commands/CreateDistributionCommand";
import type {
  CreateDistributionTenantCommandInput,
  CreateDistributionTenantCommandOutput,
} from "./commands/CreateDistributionTenantCommand";
import type {
  CreateDistributionWithTagsCommandInput,
  CreateDistributionWithTagsCommandOutput,
} from "./commands/CreateDistributionWithTagsCommand";
import type {
  CreateFieldLevelEncryptionConfigCommandInput,
  CreateFieldLevelEncryptionConfigCommandOutput,
} from "./commands/CreateFieldLevelEncryptionConfigCommand";
import type {
  CreateFieldLevelEncryptionProfileCommandInput,
  CreateFieldLevelEncryptionProfileCommandOutput,
} from "./commands/CreateFieldLevelEncryptionProfileCommand";
import type { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "./commands/CreateFunctionCommand";
import type {
  CreateInvalidationCommandInput,
  CreateInvalidationCommandOutput,
} from "./commands/CreateInvalidationCommand";
import type {
  CreateInvalidationForDistributionTenantCommandInput,
  CreateInvalidationForDistributionTenantCommandOutput,
} from "./commands/CreateInvalidationForDistributionTenantCommand";
import type { CreateKeyGroupCommandInput, CreateKeyGroupCommandOutput } from "./commands/CreateKeyGroupCommand";
import type {
  CreateKeyValueStoreCommandInput,
  CreateKeyValueStoreCommandOutput,
} from "./commands/CreateKeyValueStoreCommand";
import type {
  CreateMonitoringSubscriptionCommandInput,
  CreateMonitoringSubscriptionCommandOutput,
} from "./commands/CreateMonitoringSubscriptionCommand";
import type {
  CreateOriginAccessControlCommandInput,
  CreateOriginAccessControlCommandOutput,
} from "./commands/CreateOriginAccessControlCommand";
import type {
  CreateOriginRequestPolicyCommandInput,
  CreateOriginRequestPolicyCommandOutput,
} from "./commands/CreateOriginRequestPolicyCommand";
import type { CreatePublicKeyCommandInput, CreatePublicKeyCommandOutput } from "./commands/CreatePublicKeyCommand";
import type {
  CreateRealtimeLogConfigCommandInput,
  CreateRealtimeLogConfigCommandOutput,
} from "./commands/CreateRealtimeLogConfigCommand";
import type {
  CreateResponseHeadersPolicyCommandInput,
  CreateResponseHeadersPolicyCommandOutput,
} from "./commands/CreateResponseHeadersPolicyCommand";
import type {
  CreateStreamingDistributionCommandInput,
  CreateStreamingDistributionCommandOutput,
} from "./commands/CreateStreamingDistributionCommand";
import type {
  CreateStreamingDistributionWithTagsCommandInput,
  CreateStreamingDistributionWithTagsCommandOutput,
} from "./commands/CreateStreamingDistributionWithTagsCommand";
import type { CreateTrustStoreCommandInput, CreateTrustStoreCommandOutput } from "./commands/CreateTrustStoreCommand";
import type { CreateVpcOriginCommandInput, CreateVpcOriginCommandOutput } from "./commands/CreateVpcOriginCommand";
import type {
  DeleteAnycastIpListCommandInput,
  DeleteAnycastIpListCommandOutput,
} from "./commands/DeleteAnycastIpListCommand";
import type {
  DeleteCachePolicyCommandInput,
  DeleteCachePolicyCommandOutput,
} from "./commands/DeleteCachePolicyCommand";
import type {
  DeleteCloudFrontOriginAccessIdentityCommandInput,
  DeleteCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/DeleteCloudFrontOriginAccessIdentityCommand";
import type {
  DeleteConnectionFunctionCommandInput,
  DeleteConnectionFunctionCommandOutput,
} from "./commands/DeleteConnectionFunctionCommand";
import type {
  DeleteConnectionGroupCommandInput,
  DeleteConnectionGroupCommandOutput,
} from "./commands/DeleteConnectionGroupCommand";
import type {
  DeleteContinuousDeploymentPolicyCommandInput,
  DeleteContinuousDeploymentPolicyCommandOutput,
} from "./commands/DeleteContinuousDeploymentPolicyCommand";
import type {
  DeleteDistributionCommandInput,
  DeleteDistributionCommandOutput,
} from "./commands/DeleteDistributionCommand";
import type {
  DeleteDistributionTenantCommandInput,
  DeleteDistributionTenantCommandOutput,
} from "./commands/DeleteDistributionTenantCommand";
import type {
  DeleteFieldLevelEncryptionConfigCommandInput,
  DeleteFieldLevelEncryptionConfigCommandOutput,
} from "./commands/DeleteFieldLevelEncryptionConfigCommand";
import type {
  DeleteFieldLevelEncryptionProfileCommandInput,
  DeleteFieldLevelEncryptionProfileCommandOutput,
} from "./commands/DeleteFieldLevelEncryptionProfileCommand";
import type { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "./commands/DeleteFunctionCommand";
import type { DeleteKeyGroupCommandInput, DeleteKeyGroupCommandOutput } from "./commands/DeleteKeyGroupCommand";
import type {
  DeleteKeyValueStoreCommandInput,
  DeleteKeyValueStoreCommandOutput,
} from "./commands/DeleteKeyValueStoreCommand";
import type {
  DeleteMonitoringSubscriptionCommandInput,
  DeleteMonitoringSubscriptionCommandOutput,
} from "./commands/DeleteMonitoringSubscriptionCommand";
import type {
  DeleteOriginAccessControlCommandInput,
  DeleteOriginAccessControlCommandOutput,
} from "./commands/DeleteOriginAccessControlCommand";
import type {
  DeleteOriginRequestPolicyCommandInput,
  DeleteOriginRequestPolicyCommandOutput,
} from "./commands/DeleteOriginRequestPolicyCommand";
import type { DeletePublicKeyCommandInput, DeletePublicKeyCommandOutput } from "./commands/DeletePublicKeyCommand";
import type {
  DeleteRealtimeLogConfigCommandInput,
  DeleteRealtimeLogConfigCommandOutput,
} from "./commands/DeleteRealtimeLogConfigCommand";
import type {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import type {
  DeleteResponseHeadersPolicyCommandInput,
  DeleteResponseHeadersPolicyCommandOutput,
} from "./commands/DeleteResponseHeadersPolicyCommand";
import type {
  DeleteStreamingDistributionCommandInput,
  DeleteStreamingDistributionCommandOutput,
} from "./commands/DeleteStreamingDistributionCommand";
import type { DeleteTrustStoreCommandInput, DeleteTrustStoreCommandOutput } from "./commands/DeleteTrustStoreCommand";
import type { DeleteVpcOriginCommandInput, DeleteVpcOriginCommandOutput } from "./commands/DeleteVpcOriginCommand";
import type {
  DescribeConnectionFunctionCommandInput,
  DescribeConnectionFunctionCommandOutput,
} from "./commands/DescribeConnectionFunctionCommand";
import type { DescribeFunctionCommandInput, DescribeFunctionCommandOutput } from "./commands/DescribeFunctionCommand";
import type {
  DescribeKeyValueStoreCommandInput,
  DescribeKeyValueStoreCommandOutput,
} from "./commands/DescribeKeyValueStoreCommand";
import type {
  DisassociateDistributionTenantWebACLCommandInput,
  DisassociateDistributionTenantWebACLCommandOutput,
} from "./commands/DisassociateDistributionTenantWebACLCommand";
import type {
  DisassociateDistributionWebACLCommandInput,
  DisassociateDistributionWebACLCommandOutput,
} from "./commands/DisassociateDistributionWebACLCommand";
import type { GetAnycastIpListCommandInput, GetAnycastIpListCommandOutput } from "./commands/GetAnycastIpListCommand";
import type { GetCachePolicyCommandInput, GetCachePolicyCommandOutput } from "./commands/GetCachePolicyCommand";
import type {
  GetCachePolicyConfigCommandInput,
  GetCachePolicyConfigCommandOutput,
} from "./commands/GetCachePolicyConfigCommand";
import type {
  GetCloudFrontOriginAccessIdentityCommandInput,
  GetCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/GetCloudFrontOriginAccessIdentityCommand";
import type {
  GetCloudFrontOriginAccessIdentityConfigCommandInput,
  GetCloudFrontOriginAccessIdentityConfigCommandOutput,
} from "./commands/GetCloudFrontOriginAccessIdentityConfigCommand";
import type {
  GetConnectionFunctionCommandInput,
  GetConnectionFunctionCommandOutput,
} from "./commands/GetConnectionFunctionCommand";
import type {
  GetConnectionGroupByRoutingEndpointCommandInput,
  GetConnectionGroupByRoutingEndpointCommandOutput,
} from "./commands/GetConnectionGroupByRoutingEndpointCommand";
import type {
  GetConnectionGroupCommandInput,
  GetConnectionGroupCommandOutput,
} from "./commands/GetConnectionGroupCommand";
import type {
  GetContinuousDeploymentPolicyCommandInput,
  GetContinuousDeploymentPolicyCommandOutput,
} from "./commands/GetContinuousDeploymentPolicyCommand";
import type {
  GetContinuousDeploymentPolicyConfigCommandInput,
  GetContinuousDeploymentPolicyConfigCommandOutput,
} from "./commands/GetContinuousDeploymentPolicyConfigCommand";
import type { GetDistributionCommandInput, GetDistributionCommandOutput } from "./commands/GetDistributionCommand";
import type {
  GetDistributionConfigCommandInput,
  GetDistributionConfigCommandOutput,
} from "./commands/GetDistributionConfigCommand";
import type {
  GetDistributionTenantByDomainCommandInput,
  GetDistributionTenantByDomainCommandOutput,
} from "./commands/GetDistributionTenantByDomainCommand";
import type {
  GetDistributionTenantCommandInput,
  GetDistributionTenantCommandOutput,
} from "./commands/GetDistributionTenantCommand";
import type {
  GetFieldLevelEncryptionCommandInput,
  GetFieldLevelEncryptionCommandOutput,
} from "./commands/GetFieldLevelEncryptionCommand";
import type {
  GetFieldLevelEncryptionConfigCommandInput,
  GetFieldLevelEncryptionConfigCommandOutput,
} from "./commands/GetFieldLevelEncryptionConfigCommand";
import type {
  GetFieldLevelEncryptionProfileCommandInput,
  GetFieldLevelEncryptionProfileCommandOutput,
} from "./commands/GetFieldLevelEncryptionProfileCommand";
import type {
  GetFieldLevelEncryptionProfileConfigCommandInput,
  GetFieldLevelEncryptionProfileConfigCommandOutput,
} from "./commands/GetFieldLevelEncryptionProfileConfigCommand";
import type { GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import type { GetInvalidationCommandInput, GetInvalidationCommandOutput } from "./commands/GetInvalidationCommand";
import type {
  GetInvalidationForDistributionTenantCommandInput,
  GetInvalidationForDistributionTenantCommandOutput,
} from "./commands/GetInvalidationForDistributionTenantCommand";
import type { GetKeyGroupCommandInput, GetKeyGroupCommandOutput } from "./commands/GetKeyGroupCommand";
import type {
  GetKeyGroupConfigCommandInput,
  GetKeyGroupConfigCommandOutput,
} from "./commands/GetKeyGroupConfigCommand";
import type {
  GetManagedCertificateDetailsCommandInput,
  GetManagedCertificateDetailsCommandOutput,
} from "./commands/GetManagedCertificateDetailsCommand";
import type {
  GetMonitoringSubscriptionCommandInput,
  GetMonitoringSubscriptionCommandOutput,
} from "./commands/GetMonitoringSubscriptionCommand";
import type {
  GetOriginAccessControlCommandInput,
  GetOriginAccessControlCommandOutput,
} from "./commands/GetOriginAccessControlCommand";
import type {
  GetOriginAccessControlConfigCommandInput,
  GetOriginAccessControlConfigCommandOutput,
} from "./commands/GetOriginAccessControlConfigCommand";
import type {
  GetOriginRequestPolicyCommandInput,
  GetOriginRequestPolicyCommandOutput,
} from "./commands/GetOriginRequestPolicyCommand";
import type {
  GetOriginRequestPolicyConfigCommandInput,
  GetOriginRequestPolicyConfigCommandOutput,
} from "./commands/GetOriginRequestPolicyConfigCommand";
import type { GetPublicKeyCommandInput, GetPublicKeyCommandOutput } from "./commands/GetPublicKeyCommand";
import type {
  GetPublicKeyConfigCommandInput,
  GetPublicKeyConfigCommandOutput,
} from "./commands/GetPublicKeyConfigCommand";
import type {
  GetRealtimeLogConfigCommandInput,
  GetRealtimeLogConfigCommandOutput,
} from "./commands/GetRealtimeLogConfigCommand";
import type {
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import type {
  GetResponseHeadersPolicyCommandInput,
  GetResponseHeadersPolicyCommandOutput,
} from "./commands/GetResponseHeadersPolicyCommand";
import type {
  GetResponseHeadersPolicyConfigCommandInput,
  GetResponseHeadersPolicyConfigCommandOutput,
} from "./commands/GetResponseHeadersPolicyConfigCommand";
import type {
  GetStreamingDistributionCommandInput,
  GetStreamingDistributionCommandOutput,
} from "./commands/GetStreamingDistributionCommand";
import type {
  GetStreamingDistributionConfigCommandInput,
  GetStreamingDistributionConfigCommandOutput,
} from "./commands/GetStreamingDistributionConfigCommand";
import type { GetTrustStoreCommandInput, GetTrustStoreCommandOutput } from "./commands/GetTrustStoreCommand";
import type { GetVpcOriginCommandInput, GetVpcOriginCommandOutput } from "./commands/GetVpcOriginCommand";
import type {
  ListAnycastIpListsCommandInput,
  ListAnycastIpListsCommandOutput,
} from "./commands/ListAnycastIpListsCommand";
import type {
  ListCachePoliciesCommandInput,
  ListCachePoliciesCommandOutput,
} from "./commands/ListCachePoliciesCommand";
import type {
  ListCloudFrontOriginAccessIdentitiesCommandInput,
  ListCloudFrontOriginAccessIdentitiesCommandOutput,
} from "./commands/ListCloudFrontOriginAccessIdentitiesCommand";
import type {
  ListConflictingAliasesCommandInput,
  ListConflictingAliasesCommandOutput,
} from "./commands/ListConflictingAliasesCommand";
import type {
  ListConnectionFunctionsCommandInput,
  ListConnectionFunctionsCommandOutput,
} from "./commands/ListConnectionFunctionsCommand";
import type {
  ListConnectionGroupsCommandInput,
  ListConnectionGroupsCommandOutput,
} from "./commands/ListConnectionGroupsCommand";
import type {
  ListContinuousDeploymentPoliciesCommandInput,
  ListContinuousDeploymentPoliciesCommandOutput,
} from "./commands/ListContinuousDeploymentPoliciesCommand";
import type {
  ListDistributionsByAnycastIpListIdCommandInput,
  ListDistributionsByAnycastIpListIdCommandOutput,
} from "./commands/ListDistributionsByAnycastIpListIdCommand";
import type {
  ListDistributionsByCachePolicyIdCommandInput,
  ListDistributionsByCachePolicyIdCommandOutput,
} from "./commands/ListDistributionsByCachePolicyIdCommand";
import type {
  ListDistributionsByConnectionFunctionCommandInput,
  ListDistributionsByConnectionFunctionCommandOutput,
} from "./commands/ListDistributionsByConnectionFunctionCommand";
import type {
  ListDistributionsByConnectionModeCommandInput,
  ListDistributionsByConnectionModeCommandOutput,
} from "./commands/ListDistributionsByConnectionModeCommand";
import type {
  ListDistributionsByKeyGroupCommandInput,
  ListDistributionsByKeyGroupCommandOutput,
} from "./commands/ListDistributionsByKeyGroupCommand";
import type {
  ListDistributionsByOriginRequestPolicyIdCommandInput,
  ListDistributionsByOriginRequestPolicyIdCommandOutput,
} from "./commands/ListDistributionsByOriginRequestPolicyIdCommand";
import type {
  ListDistributionsByOwnedResourceCommandInput,
  ListDistributionsByOwnedResourceCommandOutput,
} from "./commands/ListDistributionsByOwnedResourceCommand";
import type {
  ListDistributionsByRealtimeLogConfigCommandInput,
  ListDistributionsByRealtimeLogConfigCommandOutput,
} from "./commands/ListDistributionsByRealtimeLogConfigCommand";
import type {
  ListDistributionsByResponseHeadersPolicyIdCommandInput,
  ListDistributionsByResponseHeadersPolicyIdCommandOutput,
} from "./commands/ListDistributionsByResponseHeadersPolicyIdCommand";
import type {
  ListDistributionsByTrustStoreCommandInput,
  ListDistributionsByTrustStoreCommandOutput,
} from "./commands/ListDistributionsByTrustStoreCommand";
import type {
  ListDistributionsByVpcOriginIdCommandInput,
  ListDistributionsByVpcOriginIdCommandOutput,
} from "./commands/ListDistributionsByVpcOriginIdCommand";
import type {
  ListDistributionsByWebACLIdCommandInput,
  ListDistributionsByWebACLIdCommandOutput,
} from "./commands/ListDistributionsByWebACLIdCommand";
import type {
  ListDistributionsCommandInput,
  ListDistributionsCommandOutput,
} from "./commands/ListDistributionsCommand";
import type {
  ListDistributionTenantsByCustomizationCommandInput,
  ListDistributionTenantsByCustomizationCommandOutput,
} from "./commands/ListDistributionTenantsByCustomizationCommand";
import type {
  ListDistributionTenantsCommandInput,
  ListDistributionTenantsCommandOutput,
} from "./commands/ListDistributionTenantsCommand";
import type {
  ListDomainConflictsCommandInput,
  ListDomainConflictsCommandOutput,
} from "./commands/ListDomainConflictsCommand";
import type {
  ListFieldLevelEncryptionConfigsCommandInput,
  ListFieldLevelEncryptionConfigsCommandOutput,
} from "./commands/ListFieldLevelEncryptionConfigsCommand";
import type {
  ListFieldLevelEncryptionProfilesCommandInput,
  ListFieldLevelEncryptionProfilesCommandOutput,
} from "./commands/ListFieldLevelEncryptionProfilesCommand";
import type { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "./commands/ListFunctionsCommand";
import type {
  ListInvalidationsCommandInput,
  ListInvalidationsCommandOutput,
} from "./commands/ListInvalidationsCommand";
import type {
  ListInvalidationsForDistributionTenantCommandInput,
  ListInvalidationsForDistributionTenantCommandOutput,
} from "./commands/ListInvalidationsForDistributionTenantCommand";
import type { ListKeyGroupsCommandInput, ListKeyGroupsCommandOutput } from "./commands/ListKeyGroupsCommand";
import type {
  ListKeyValueStoresCommandInput,
  ListKeyValueStoresCommandOutput,
} from "./commands/ListKeyValueStoresCommand";
import type {
  ListOriginAccessControlsCommandInput,
  ListOriginAccessControlsCommandOutput,
} from "./commands/ListOriginAccessControlsCommand";
import type {
  ListOriginRequestPoliciesCommandInput,
  ListOriginRequestPoliciesCommandOutput,
} from "./commands/ListOriginRequestPoliciesCommand";
import type { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "./commands/ListPublicKeysCommand";
import type {
  ListRealtimeLogConfigsCommandInput,
  ListRealtimeLogConfigsCommandOutput,
} from "./commands/ListRealtimeLogConfigsCommand";
import type {
  ListResponseHeadersPoliciesCommandInput,
  ListResponseHeadersPoliciesCommandOutput,
} from "./commands/ListResponseHeadersPoliciesCommand";
import type {
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput,
} from "./commands/ListStreamingDistributionsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListTrustStoresCommandInput, ListTrustStoresCommandOutput } from "./commands/ListTrustStoresCommand";
import type { ListVpcOriginsCommandInput, ListVpcOriginsCommandOutput } from "./commands/ListVpcOriginsCommand";
import type {
  PublishConnectionFunctionCommandInput,
  PublishConnectionFunctionCommandOutput,
} from "./commands/PublishConnectionFunctionCommand";
import type { PublishFunctionCommandInput, PublishFunctionCommandOutput } from "./commands/PublishFunctionCommand";
import type {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type {
  TestConnectionFunctionCommandInput,
  TestConnectionFunctionCommandOutput,
} from "./commands/TestConnectionFunctionCommand";
import type { TestFunctionCommandInput, TestFunctionCommandOutput } from "./commands/TestFunctionCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAnycastIpListCommandInput,
  UpdateAnycastIpListCommandOutput,
} from "./commands/UpdateAnycastIpListCommand";
import type {
  UpdateCachePolicyCommandInput,
  UpdateCachePolicyCommandOutput,
} from "./commands/UpdateCachePolicyCommand";
import type {
  UpdateCloudFrontOriginAccessIdentityCommandInput,
  UpdateCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/UpdateCloudFrontOriginAccessIdentityCommand";
import type {
  UpdateConnectionFunctionCommandInput,
  UpdateConnectionFunctionCommandOutput,
} from "./commands/UpdateConnectionFunctionCommand";
import type {
  UpdateConnectionGroupCommandInput,
  UpdateConnectionGroupCommandOutput,
} from "./commands/UpdateConnectionGroupCommand";
import type {
  UpdateContinuousDeploymentPolicyCommandInput,
  UpdateContinuousDeploymentPolicyCommandOutput,
} from "./commands/UpdateContinuousDeploymentPolicyCommand";
import type {
  UpdateDistributionCommandInput,
  UpdateDistributionCommandOutput,
} from "./commands/UpdateDistributionCommand";
import type {
  UpdateDistributionTenantCommandInput,
  UpdateDistributionTenantCommandOutput,
} from "./commands/UpdateDistributionTenantCommand";
import type {
  UpdateDistributionWithStagingConfigCommandInput,
  UpdateDistributionWithStagingConfigCommandOutput,
} from "./commands/UpdateDistributionWithStagingConfigCommand";
import type {
  UpdateDomainAssociationCommandInput,
  UpdateDomainAssociationCommandOutput,
} from "./commands/UpdateDomainAssociationCommand";
import type {
  UpdateFieldLevelEncryptionConfigCommandInput,
  UpdateFieldLevelEncryptionConfigCommandOutput,
} from "./commands/UpdateFieldLevelEncryptionConfigCommand";
import type {
  UpdateFieldLevelEncryptionProfileCommandInput,
  UpdateFieldLevelEncryptionProfileCommandOutput,
} from "./commands/UpdateFieldLevelEncryptionProfileCommand";
import type { UpdateFunctionCommandInput, UpdateFunctionCommandOutput } from "./commands/UpdateFunctionCommand";
import type { UpdateKeyGroupCommandInput, UpdateKeyGroupCommandOutput } from "./commands/UpdateKeyGroupCommand";
import type {
  UpdateKeyValueStoreCommandInput,
  UpdateKeyValueStoreCommandOutput,
} from "./commands/UpdateKeyValueStoreCommand";
import type {
  UpdateOriginAccessControlCommandInput,
  UpdateOriginAccessControlCommandOutput,
} from "./commands/UpdateOriginAccessControlCommand";
import type {
  UpdateOriginRequestPolicyCommandInput,
  UpdateOriginRequestPolicyCommandOutput,
} from "./commands/UpdateOriginRequestPolicyCommand";
import type { UpdatePublicKeyCommandInput, UpdatePublicKeyCommandOutput } from "./commands/UpdatePublicKeyCommand";
import type {
  UpdateRealtimeLogConfigCommandInput,
  UpdateRealtimeLogConfigCommandOutput,
} from "./commands/UpdateRealtimeLogConfigCommand";
import type {
  UpdateResponseHeadersPolicyCommandInput,
  UpdateResponseHeadersPolicyCommandOutput,
} from "./commands/UpdateResponseHeadersPolicyCommand";
import type {
  UpdateStreamingDistributionCommandInput,
  UpdateStreamingDistributionCommandOutput,
} from "./commands/UpdateStreamingDistributionCommand";
import type { UpdateTrustStoreCommandInput, UpdateTrustStoreCommandOutput } from "./commands/UpdateTrustStoreCommand";
import type { UpdateVpcOriginCommandInput, UpdateVpcOriginCommandOutput } from "./commands/UpdateVpcOriginCommand";
import type {
  VerifyDnsConfigurationCommandInput,
  VerifyDnsConfigurationCommandOutput,
} from "./commands/VerifyDnsConfigurationCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateAliasCommandInput
  | AssociateDistributionTenantWebACLCommandInput
  | AssociateDistributionWebACLCommandInput
  | CopyDistributionCommandInput
  | CreateAnycastIpListCommandInput
  | CreateCachePolicyCommandInput
  | CreateCloudFrontOriginAccessIdentityCommandInput
  | CreateConnectionFunctionCommandInput
  | CreateConnectionGroupCommandInput
  | CreateContinuousDeploymentPolicyCommandInput
  | CreateDistributionCommandInput
  | CreateDistributionTenantCommandInput
  | CreateDistributionWithTagsCommandInput
  | CreateFieldLevelEncryptionConfigCommandInput
  | CreateFieldLevelEncryptionProfileCommandInput
  | CreateFunctionCommandInput
  | CreateInvalidationCommandInput
  | CreateInvalidationForDistributionTenantCommandInput
  | CreateKeyGroupCommandInput
  | CreateKeyValueStoreCommandInput
  | CreateMonitoringSubscriptionCommandInput
  | CreateOriginAccessControlCommandInput
  | CreateOriginRequestPolicyCommandInput
  | CreatePublicKeyCommandInput
  | CreateRealtimeLogConfigCommandInput
  | CreateResponseHeadersPolicyCommandInput
  | CreateStreamingDistributionCommandInput
  | CreateStreamingDistributionWithTagsCommandInput
  | CreateTrustStoreCommandInput
  | CreateVpcOriginCommandInput
  | DeleteAnycastIpListCommandInput
  | DeleteCachePolicyCommandInput
  | DeleteCloudFrontOriginAccessIdentityCommandInput
  | DeleteConnectionFunctionCommandInput
  | DeleteConnectionGroupCommandInput
  | DeleteContinuousDeploymentPolicyCommandInput
  | DeleteDistributionCommandInput
  | DeleteDistributionTenantCommandInput
  | DeleteFieldLevelEncryptionConfigCommandInput
  | DeleteFieldLevelEncryptionProfileCommandInput
  | DeleteFunctionCommandInput
  | DeleteKeyGroupCommandInput
  | DeleteKeyValueStoreCommandInput
  | DeleteMonitoringSubscriptionCommandInput
  | DeleteOriginAccessControlCommandInput
  | DeleteOriginRequestPolicyCommandInput
  | DeletePublicKeyCommandInput
  | DeleteRealtimeLogConfigCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteResponseHeadersPolicyCommandInput
  | DeleteStreamingDistributionCommandInput
  | DeleteTrustStoreCommandInput
  | DeleteVpcOriginCommandInput
  | DescribeConnectionFunctionCommandInput
  | DescribeFunctionCommandInput
  | DescribeKeyValueStoreCommandInput
  | DisassociateDistributionTenantWebACLCommandInput
  | DisassociateDistributionWebACLCommandInput
  | GetAnycastIpListCommandInput
  | GetCachePolicyCommandInput
  | GetCachePolicyConfigCommandInput
  | GetCloudFrontOriginAccessIdentityCommandInput
  | GetCloudFrontOriginAccessIdentityConfigCommandInput
  | GetConnectionFunctionCommandInput
  | GetConnectionGroupByRoutingEndpointCommandInput
  | GetConnectionGroupCommandInput
  | GetContinuousDeploymentPolicyCommandInput
  | GetContinuousDeploymentPolicyConfigCommandInput
  | GetDistributionCommandInput
  | GetDistributionConfigCommandInput
  | GetDistributionTenantByDomainCommandInput
  | GetDistributionTenantCommandInput
  | GetFieldLevelEncryptionCommandInput
  | GetFieldLevelEncryptionConfigCommandInput
  | GetFieldLevelEncryptionProfileCommandInput
  | GetFieldLevelEncryptionProfileConfigCommandInput
  | GetFunctionCommandInput
  | GetInvalidationCommandInput
  | GetInvalidationForDistributionTenantCommandInput
  | GetKeyGroupCommandInput
  | GetKeyGroupConfigCommandInput
  | GetManagedCertificateDetailsCommandInput
  | GetMonitoringSubscriptionCommandInput
  | GetOriginAccessControlCommandInput
  | GetOriginAccessControlConfigCommandInput
  | GetOriginRequestPolicyCommandInput
  | GetOriginRequestPolicyConfigCommandInput
  | GetPublicKeyCommandInput
  | GetPublicKeyConfigCommandInput
  | GetRealtimeLogConfigCommandInput
  | GetResourcePolicyCommandInput
  | GetResponseHeadersPolicyCommandInput
  | GetResponseHeadersPolicyConfigCommandInput
  | GetStreamingDistributionCommandInput
  | GetStreamingDistributionConfigCommandInput
  | GetTrustStoreCommandInput
  | GetVpcOriginCommandInput
  | ListAnycastIpListsCommandInput
  | ListCachePoliciesCommandInput
  | ListCloudFrontOriginAccessIdentitiesCommandInput
  | ListConflictingAliasesCommandInput
  | ListConnectionFunctionsCommandInput
  | ListConnectionGroupsCommandInput
  | ListContinuousDeploymentPoliciesCommandInput
  | ListDistributionTenantsByCustomizationCommandInput
  | ListDistributionTenantsCommandInput
  | ListDistributionsByAnycastIpListIdCommandInput
  | ListDistributionsByCachePolicyIdCommandInput
  | ListDistributionsByConnectionFunctionCommandInput
  | ListDistributionsByConnectionModeCommandInput
  | ListDistributionsByKeyGroupCommandInput
  | ListDistributionsByOriginRequestPolicyIdCommandInput
  | ListDistributionsByOwnedResourceCommandInput
  | ListDistributionsByRealtimeLogConfigCommandInput
  | ListDistributionsByResponseHeadersPolicyIdCommandInput
  | ListDistributionsByTrustStoreCommandInput
  | ListDistributionsByVpcOriginIdCommandInput
  | ListDistributionsByWebACLIdCommandInput
  | ListDistributionsCommandInput
  | ListDomainConflictsCommandInput
  | ListFieldLevelEncryptionConfigsCommandInput
  | ListFieldLevelEncryptionProfilesCommandInput
  | ListFunctionsCommandInput
  | ListInvalidationsCommandInput
  | ListInvalidationsForDistributionTenantCommandInput
  | ListKeyGroupsCommandInput
  | ListKeyValueStoresCommandInput
  | ListOriginAccessControlsCommandInput
  | ListOriginRequestPoliciesCommandInput
  | ListPublicKeysCommandInput
  | ListRealtimeLogConfigsCommandInput
  | ListResponseHeadersPoliciesCommandInput
  | ListStreamingDistributionsCommandInput
  | ListTagsForResourceCommandInput
  | ListTrustStoresCommandInput
  | ListVpcOriginsCommandInput
  | PublishConnectionFunctionCommandInput
  | PublishFunctionCommandInput
  | PutResourcePolicyCommandInput
  | TagResourceCommandInput
  | TestConnectionFunctionCommandInput
  | TestFunctionCommandInput
  | UntagResourceCommandInput
  | UpdateAnycastIpListCommandInput
  | UpdateCachePolicyCommandInput
  | UpdateCloudFrontOriginAccessIdentityCommandInput
  | UpdateConnectionFunctionCommandInput
  | UpdateConnectionGroupCommandInput
  | UpdateContinuousDeploymentPolicyCommandInput
  | UpdateDistributionCommandInput
  | UpdateDistributionTenantCommandInput
  | UpdateDistributionWithStagingConfigCommandInput
  | UpdateDomainAssociationCommandInput
  | UpdateFieldLevelEncryptionConfigCommandInput
  | UpdateFieldLevelEncryptionProfileCommandInput
  | UpdateFunctionCommandInput
  | UpdateKeyGroupCommandInput
  | UpdateKeyValueStoreCommandInput
  | UpdateOriginAccessControlCommandInput
  | UpdateOriginRequestPolicyCommandInput
  | UpdatePublicKeyCommandInput
  | UpdateRealtimeLogConfigCommandInput
  | UpdateResponseHeadersPolicyCommandInput
  | UpdateStreamingDistributionCommandInput
  | UpdateTrustStoreCommandInput
  | UpdateVpcOriginCommandInput
  | VerifyDnsConfigurationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateAliasCommandOutput
  | AssociateDistributionTenantWebACLCommandOutput
  | AssociateDistributionWebACLCommandOutput
  | CopyDistributionCommandOutput
  | CreateAnycastIpListCommandOutput
  | CreateCachePolicyCommandOutput
  | CreateCloudFrontOriginAccessIdentityCommandOutput
  | CreateConnectionFunctionCommandOutput
  | CreateConnectionGroupCommandOutput
  | CreateContinuousDeploymentPolicyCommandOutput
  | CreateDistributionCommandOutput
  | CreateDistributionTenantCommandOutput
  | CreateDistributionWithTagsCommandOutput
  | CreateFieldLevelEncryptionConfigCommandOutput
  | CreateFieldLevelEncryptionProfileCommandOutput
  | CreateFunctionCommandOutput
  | CreateInvalidationCommandOutput
  | CreateInvalidationForDistributionTenantCommandOutput
  | CreateKeyGroupCommandOutput
  | CreateKeyValueStoreCommandOutput
  | CreateMonitoringSubscriptionCommandOutput
  | CreateOriginAccessControlCommandOutput
  | CreateOriginRequestPolicyCommandOutput
  | CreatePublicKeyCommandOutput
  | CreateRealtimeLogConfigCommandOutput
  | CreateResponseHeadersPolicyCommandOutput
  | CreateStreamingDistributionCommandOutput
  | CreateStreamingDistributionWithTagsCommandOutput
  | CreateTrustStoreCommandOutput
  | CreateVpcOriginCommandOutput
  | DeleteAnycastIpListCommandOutput
  | DeleteCachePolicyCommandOutput
  | DeleteCloudFrontOriginAccessIdentityCommandOutput
  | DeleteConnectionFunctionCommandOutput
  | DeleteConnectionGroupCommandOutput
  | DeleteContinuousDeploymentPolicyCommandOutput
  | DeleteDistributionCommandOutput
  | DeleteDistributionTenantCommandOutput
  | DeleteFieldLevelEncryptionConfigCommandOutput
  | DeleteFieldLevelEncryptionProfileCommandOutput
  | DeleteFunctionCommandOutput
  | DeleteKeyGroupCommandOutput
  | DeleteKeyValueStoreCommandOutput
  | DeleteMonitoringSubscriptionCommandOutput
  | DeleteOriginAccessControlCommandOutput
  | DeleteOriginRequestPolicyCommandOutput
  | DeletePublicKeyCommandOutput
  | DeleteRealtimeLogConfigCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteResponseHeadersPolicyCommandOutput
  | DeleteStreamingDistributionCommandOutput
  | DeleteTrustStoreCommandOutput
  | DeleteVpcOriginCommandOutput
  | DescribeConnectionFunctionCommandOutput
  | DescribeFunctionCommandOutput
  | DescribeKeyValueStoreCommandOutput
  | DisassociateDistributionTenantWebACLCommandOutput
  | DisassociateDistributionWebACLCommandOutput
  | GetAnycastIpListCommandOutput
  | GetCachePolicyCommandOutput
  | GetCachePolicyConfigCommandOutput
  | GetCloudFrontOriginAccessIdentityCommandOutput
  | GetCloudFrontOriginAccessIdentityConfigCommandOutput
  | GetConnectionFunctionCommandOutput
  | GetConnectionGroupByRoutingEndpointCommandOutput
  | GetConnectionGroupCommandOutput
  | GetContinuousDeploymentPolicyCommandOutput
  | GetContinuousDeploymentPolicyConfigCommandOutput
  | GetDistributionCommandOutput
  | GetDistributionConfigCommandOutput
  | GetDistributionTenantByDomainCommandOutput
  | GetDistributionTenantCommandOutput
  | GetFieldLevelEncryptionCommandOutput
  | GetFieldLevelEncryptionConfigCommandOutput
  | GetFieldLevelEncryptionProfileCommandOutput
  | GetFieldLevelEncryptionProfileConfigCommandOutput
  | GetFunctionCommandOutput
  | GetInvalidationCommandOutput
  | GetInvalidationForDistributionTenantCommandOutput
  | GetKeyGroupCommandOutput
  | GetKeyGroupConfigCommandOutput
  | GetManagedCertificateDetailsCommandOutput
  | GetMonitoringSubscriptionCommandOutput
  | GetOriginAccessControlCommandOutput
  | GetOriginAccessControlConfigCommandOutput
  | GetOriginRequestPolicyCommandOutput
  | GetOriginRequestPolicyConfigCommandOutput
  | GetPublicKeyCommandOutput
  | GetPublicKeyConfigCommandOutput
  | GetRealtimeLogConfigCommandOutput
  | GetResourcePolicyCommandOutput
  | GetResponseHeadersPolicyCommandOutput
  | GetResponseHeadersPolicyConfigCommandOutput
  | GetStreamingDistributionCommandOutput
  | GetStreamingDistributionConfigCommandOutput
  | GetTrustStoreCommandOutput
  | GetVpcOriginCommandOutput
  | ListAnycastIpListsCommandOutput
  | ListCachePoliciesCommandOutput
  | ListCloudFrontOriginAccessIdentitiesCommandOutput
  | ListConflictingAliasesCommandOutput
  | ListConnectionFunctionsCommandOutput
  | ListConnectionGroupsCommandOutput
  | ListContinuousDeploymentPoliciesCommandOutput
  | ListDistributionTenantsByCustomizationCommandOutput
  | ListDistributionTenantsCommandOutput
  | ListDistributionsByAnycastIpListIdCommandOutput
  | ListDistributionsByCachePolicyIdCommandOutput
  | ListDistributionsByConnectionFunctionCommandOutput
  | ListDistributionsByConnectionModeCommandOutput
  | ListDistributionsByKeyGroupCommandOutput
  | ListDistributionsByOriginRequestPolicyIdCommandOutput
  | ListDistributionsByOwnedResourceCommandOutput
  | ListDistributionsByRealtimeLogConfigCommandOutput
  | ListDistributionsByResponseHeadersPolicyIdCommandOutput
  | ListDistributionsByTrustStoreCommandOutput
  | ListDistributionsByVpcOriginIdCommandOutput
  | ListDistributionsByWebACLIdCommandOutput
  | ListDistributionsCommandOutput
  | ListDomainConflictsCommandOutput
  | ListFieldLevelEncryptionConfigsCommandOutput
  | ListFieldLevelEncryptionProfilesCommandOutput
  | ListFunctionsCommandOutput
  | ListInvalidationsCommandOutput
  | ListInvalidationsForDistributionTenantCommandOutput
  | ListKeyGroupsCommandOutput
  | ListKeyValueStoresCommandOutput
  | ListOriginAccessControlsCommandOutput
  | ListOriginRequestPoliciesCommandOutput
  | ListPublicKeysCommandOutput
  | ListRealtimeLogConfigsCommandOutput
  | ListResponseHeadersPoliciesCommandOutput
  | ListStreamingDistributionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTrustStoresCommandOutput
  | ListVpcOriginsCommandOutput
  | PublishConnectionFunctionCommandOutput
  | PublishFunctionCommandOutput
  | PutResourcePolicyCommandOutput
  | TagResourceCommandOutput
  | TestConnectionFunctionCommandOutput
  | TestFunctionCommandOutput
  | UntagResourceCommandOutput
  | UpdateAnycastIpListCommandOutput
  | UpdateCachePolicyCommandOutput
  | UpdateCloudFrontOriginAccessIdentityCommandOutput
  | UpdateConnectionFunctionCommandOutput
  | UpdateConnectionGroupCommandOutput
  | UpdateContinuousDeploymentPolicyCommandOutput
  | UpdateDistributionCommandOutput
  | UpdateDistributionTenantCommandOutput
  | UpdateDistributionWithStagingConfigCommandOutput
  | UpdateDomainAssociationCommandOutput
  | UpdateFieldLevelEncryptionConfigCommandOutput
  | UpdateFieldLevelEncryptionProfileCommandOutput
  | UpdateFunctionCommandOutput
  | UpdateKeyGroupCommandOutput
  | UpdateKeyValueStoreCommandOutput
  | UpdateOriginAccessControlCommandOutput
  | UpdateOriginRequestPolicyCommandOutput
  | UpdatePublicKeyCommandOutput
  | UpdateRealtimeLogConfigCommandOutput
  | UpdateResponseHeadersPolicyCommandOutput
  | UpdateStreamingDistributionCommandOutput
  | UpdateTrustStoreCommandOutput
  | UpdateVpcOriginCommandOutput
  | VerifyDnsConfigurationCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type CloudFrontClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of CloudFrontClient class constructor that set the region, credentials and other options.
 */
export interface CloudFrontClientConfig extends CloudFrontClientConfigType {}

/**
 * @public
 */
export type CloudFrontClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CloudFrontClient class. This is resolved and normalized from the {@link CloudFrontClientConfig | constructor configuration interface}.
 */
export interface CloudFrontClientResolvedConfig extends CloudFrontClientResolvedConfigType {}

/**
 * <fullname>Amazon CloudFront</fullname> <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html">Amazon CloudFront Developer Guide</a>.</p>
 * @public
 */
export class CloudFrontClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudFrontClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudFrontClient class. This is resolved and normalized from the {@link CloudFrontClientConfig | constructor configuration interface}.
   */
  readonly config: CloudFrontClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CloudFrontClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultCloudFrontHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CloudFrontClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
