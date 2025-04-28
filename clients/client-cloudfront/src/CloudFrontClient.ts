// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultCloudFrontHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AssociateAliasCommandInput, AssociateAliasCommandOutput } from "./commands/AssociateAliasCommand";
import {
  AssociateDistributionTenantWebACLCommandInput,
  AssociateDistributionTenantWebACLCommandOutput,
} from "./commands/AssociateDistributionTenantWebACLCommand";
import {
  AssociateDistributionWebACLCommandInput,
  AssociateDistributionWebACLCommandOutput,
} from "./commands/AssociateDistributionWebACLCommand";
import { CopyDistributionCommandInput, CopyDistributionCommandOutput } from "./commands/CopyDistributionCommand";
import {
  CreateAnycastIpListCommandInput,
  CreateAnycastIpListCommandOutput,
} from "./commands/CreateAnycastIpListCommand";
import { CreateCachePolicyCommandInput, CreateCachePolicyCommandOutput } from "./commands/CreateCachePolicyCommand";
import {
  CreateCloudFrontOriginAccessIdentityCommandInput,
  CreateCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/CreateCloudFrontOriginAccessIdentityCommand";
import {
  CreateConnectionGroupCommandInput,
  CreateConnectionGroupCommandOutput,
} from "./commands/CreateConnectionGroupCommand";
import {
  CreateContinuousDeploymentPolicyCommandInput,
  CreateContinuousDeploymentPolicyCommandOutput,
} from "./commands/CreateContinuousDeploymentPolicyCommand";
import { CreateDistributionCommandInput, CreateDistributionCommandOutput } from "./commands/CreateDistributionCommand";
import {
  CreateDistributionTenantCommandInput,
  CreateDistributionTenantCommandOutput,
} from "./commands/CreateDistributionTenantCommand";
import {
  CreateDistributionWithTagsCommandInput,
  CreateDistributionWithTagsCommandOutput,
} from "./commands/CreateDistributionWithTagsCommand";
import {
  CreateFieldLevelEncryptionConfigCommandInput,
  CreateFieldLevelEncryptionConfigCommandOutput,
} from "./commands/CreateFieldLevelEncryptionConfigCommand";
import {
  CreateFieldLevelEncryptionProfileCommandInput,
  CreateFieldLevelEncryptionProfileCommandOutput,
} from "./commands/CreateFieldLevelEncryptionProfileCommand";
import { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "./commands/CreateFunctionCommand";
import { CreateInvalidationCommandInput, CreateInvalidationCommandOutput } from "./commands/CreateInvalidationCommand";
import {
  CreateInvalidationForDistributionTenantCommandInput,
  CreateInvalidationForDistributionTenantCommandOutput,
} from "./commands/CreateInvalidationForDistributionTenantCommand";
import { CreateKeyGroupCommandInput, CreateKeyGroupCommandOutput } from "./commands/CreateKeyGroupCommand";
import {
  CreateKeyValueStoreCommandInput,
  CreateKeyValueStoreCommandOutput,
} from "./commands/CreateKeyValueStoreCommand";
import {
  CreateMonitoringSubscriptionCommandInput,
  CreateMonitoringSubscriptionCommandOutput,
} from "./commands/CreateMonitoringSubscriptionCommand";
import {
  CreateOriginAccessControlCommandInput,
  CreateOriginAccessControlCommandOutput,
} from "./commands/CreateOriginAccessControlCommand";
import {
  CreateOriginRequestPolicyCommandInput,
  CreateOriginRequestPolicyCommandOutput,
} from "./commands/CreateOriginRequestPolicyCommand";
import { CreatePublicKeyCommandInput, CreatePublicKeyCommandOutput } from "./commands/CreatePublicKeyCommand";
import {
  CreateRealtimeLogConfigCommandInput,
  CreateRealtimeLogConfigCommandOutput,
} from "./commands/CreateRealtimeLogConfigCommand";
import {
  CreateResponseHeadersPolicyCommandInput,
  CreateResponseHeadersPolicyCommandOutput,
} from "./commands/CreateResponseHeadersPolicyCommand";
import {
  CreateStreamingDistributionCommandInput,
  CreateStreamingDistributionCommandOutput,
} from "./commands/CreateStreamingDistributionCommand";
import {
  CreateStreamingDistributionWithTagsCommandInput,
  CreateStreamingDistributionWithTagsCommandOutput,
} from "./commands/CreateStreamingDistributionWithTagsCommand";
import { CreateVpcOriginCommandInput, CreateVpcOriginCommandOutput } from "./commands/CreateVpcOriginCommand";
import {
  DeleteAnycastIpListCommandInput,
  DeleteAnycastIpListCommandOutput,
} from "./commands/DeleteAnycastIpListCommand";
import { DeleteCachePolicyCommandInput, DeleteCachePolicyCommandOutput } from "./commands/DeleteCachePolicyCommand";
import {
  DeleteCloudFrontOriginAccessIdentityCommandInput,
  DeleteCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/DeleteCloudFrontOriginAccessIdentityCommand";
import {
  DeleteConnectionGroupCommandInput,
  DeleteConnectionGroupCommandOutput,
} from "./commands/DeleteConnectionGroupCommand";
import {
  DeleteContinuousDeploymentPolicyCommandInput,
  DeleteContinuousDeploymentPolicyCommandOutput,
} from "./commands/DeleteContinuousDeploymentPolicyCommand";
import { DeleteDistributionCommandInput, DeleteDistributionCommandOutput } from "./commands/DeleteDistributionCommand";
import {
  DeleteDistributionTenantCommandInput,
  DeleteDistributionTenantCommandOutput,
} from "./commands/DeleteDistributionTenantCommand";
import {
  DeleteFieldLevelEncryptionConfigCommandInput,
  DeleteFieldLevelEncryptionConfigCommandOutput,
} from "./commands/DeleteFieldLevelEncryptionConfigCommand";
import {
  DeleteFieldLevelEncryptionProfileCommandInput,
  DeleteFieldLevelEncryptionProfileCommandOutput,
} from "./commands/DeleteFieldLevelEncryptionProfileCommand";
import { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "./commands/DeleteFunctionCommand";
import { DeleteKeyGroupCommandInput, DeleteKeyGroupCommandOutput } from "./commands/DeleteKeyGroupCommand";
import {
  DeleteKeyValueStoreCommandInput,
  DeleteKeyValueStoreCommandOutput,
} from "./commands/DeleteKeyValueStoreCommand";
import {
  DeleteMonitoringSubscriptionCommandInput,
  DeleteMonitoringSubscriptionCommandOutput,
} from "./commands/DeleteMonitoringSubscriptionCommand";
import {
  DeleteOriginAccessControlCommandInput,
  DeleteOriginAccessControlCommandOutput,
} from "./commands/DeleteOriginAccessControlCommand";
import {
  DeleteOriginRequestPolicyCommandInput,
  DeleteOriginRequestPolicyCommandOutput,
} from "./commands/DeleteOriginRequestPolicyCommand";
import { DeletePublicKeyCommandInput, DeletePublicKeyCommandOutput } from "./commands/DeletePublicKeyCommand";
import {
  DeleteRealtimeLogConfigCommandInput,
  DeleteRealtimeLogConfigCommandOutput,
} from "./commands/DeleteRealtimeLogConfigCommand";
import {
  DeleteResponseHeadersPolicyCommandInput,
  DeleteResponseHeadersPolicyCommandOutput,
} from "./commands/DeleteResponseHeadersPolicyCommand";
import {
  DeleteStreamingDistributionCommandInput,
  DeleteStreamingDistributionCommandOutput,
} from "./commands/DeleteStreamingDistributionCommand";
import { DeleteVpcOriginCommandInput, DeleteVpcOriginCommandOutput } from "./commands/DeleteVpcOriginCommand";
import { DescribeFunctionCommandInput, DescribeFunctionCommandOutput } from "./commands/DescribeFunctionCommand";
import {
  DescribeKeyValueStoreCommandInput,
  DescribeKeyValueStoreCommandOutput,
} from "./commands/DescribeKeyValueStoreCommand";
import {
  DisassociateDistributionTenantWebACLCommandInput,
  DisassociateDistributionTenantWebACLCommandOutput,
} from "./commands/DisassociateDistributionTenantWebACLCommand";
import {
  DisassociateDistributionWebACLCommandInput,
  DisassociateDistributionWebACLCommandOutput,
} from "./commands/DisassociateDistributionWebACLCommand";
import { GetAnycastIpListCommandInput, GetAnycastIpListCommandOutput } from "./commands/GetAnycastIpListCommand";
import { GetCachePolicyCommandInput, GetCachePolicyCommandOutput } from "./commands/GetCachePolicyCommand";
import {
  GetCachePolicyConfigCommandInput,
  GetCachePolicyConfigCommandOutput,
} from "./commands/GetCachePolicyConfigCommand";
import {
  GetCloudFrontOriginAccessIdentityCommandInput,
  GetCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/GetCloudFrontOriginAccessIdentityCommand";
import {
  GetCloudFrontOriginAccessIdentityConfigCommandInput,
  GetCloudFrontOriginAccessIdentityConfigCommandOutput,
} from "./commands/GetCloudFrontOriginAccessIdentityConfigCommand";
import {
  GetConnectionGroupByRoutingEndpointCommandInput,
  GetConnectionGroupByRoutingEndpointCommandOutput,
} from "./commands/GetConnectionGroupByRoutingEndpointCommand";
import { GetConnectionGroupCommandInput, GetConnectionGroupCommandOutput } from "./commands/GetConnectionGroupCommand";
import {
  GetContinuousDeploymentPolicyCommandInput,
  GetContinuousDeploymentPolicyCommandOutput,
} from "./commands/GetContinuousDeploymentPolicyCommand";
import {
  GetContinuousDeploymentPolicyConfigCommandInput,
  GetContinuousDeploymentPolicyConfigCommandOutput,
} from "./commands/GetContinuousDeploymentPolicyConfigCommand";
import { GetDistributionCommandInput, GetDistributionCommandOutput } from "./commands/GetDistributionCommand";
import {
  GetDistributionConfigCommandInput,
  GetDistributionConfigCommandOutput,
} from "./commands/GetDistributionConfigCommand";
import {
  GetDistributionTenantByDomainCommandInput,
  GetDistributionTenantByDomainCommandOutput,
} from "./commands/GetDistributionTenantByDomainCommand";
import {
  GetDistributionTenantCommandInput,
  GetDistributionTenantCommandOutput,
} from "./commands/GetDistributionTenantCommand";
import {
  GetFieldLevelEncryptionCommandInput,
  GetFieldLevelEncryptionCommandOutput,
} from "./commands/GetFieldLevelEncryptionCommand";
import {
  GetFieldLevelEncryptionConfigCommandInput,
  GetFieldLevelEncryptionConfigCommandOutput,
} from "./commands/GetFieldLevelEncryptionConfigCommand";
import {
  GetFieldLevelEncryptionProfileCommandInput,
  GetFieldLevelEncryptionProfileCommandOutput,
} from "./commands/GetFieldLevelEncryptionProfileCommand";
import {
  GetFieldLevelEncryptionProfileConfigCommandInput,
  GetFieldLevelEncryptionProfileConfigCommandOutput,
} from "./commands/GetFieldLevelEncryptionProfileConfigCommand";
import { GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import { GetInvalidationCommandInput, GetInvalidationCommandOutput } from "./commands/GetInvalidationCommand";
import {
  GetInvalidationForDistributionTenantCommandInput,
  GetInvalidationForDistributionTenantCommandOutput,
} from "./commands/GetInvalidationForDistributionTenantCommand";
import { GetKeyGroupCommandInput, GetKeyGroupCommandOutput } from "./commands/GetKeyGroupCommand";
import { GetKeyGroupConfigCommandInput, GetKeyGroupConfigCommandOutput } from "./commands/GetKeyGroupConfigCommand";
import {
  GetManagedCertificateDetailsCommandInput,
  GetManagedCertificateDetailsCommandOutput,
} from "./commands/GetManagedCertificateDetailsCommand";
import {
  GetMonitoringSubscriptionCommandInput,
  GetMonitoringSubscriptionCommandOutput,
} from "./commands/GetMonitoringSubscriptionCommand";
import {
  GetOriginAccessControlCommandInput,
  GetOriginAccessControlCommandOutput,
} from "./commands/GetOriginAccessControlCommand";
import {
  GetOriginAccessControlConfigCommandInput,
  GetOriginAccessControlConfigCommandOutput,
} from "./commands/GetOriginAccessControlConfigCommand";
import {
  GetOriginRequestPolicyCommandInput,
  GetOriginRequestPolicyCommandOutput,
} from "./commands/GetOriginRequestPolicyCommand";
import {
  GetOriginRequestPolicyConfigCommandInput,
  GetOriginRequestPolicyConfigCommandOutput,
} from "./commands/GetOriginRequestPolicyConfigCommand";
import { GetPublicKeyCommandInput, GetPublicKeyCommandOutput } from "./commands/GetPublicKeyCommand";
import { GetPublicKeyConfigCommandInput, GetPublicKeyConfigCommandOutput } from "./commands/GetPublicKeyConfigCommand";
import {
  GetRealtimeLogConfigCommandInput,
  GetRealtimeLogConfigCommandOutput,
} from "./commands/GetRealtimeLogConfigCommand";
import {
  GetResponseHeadersPolicyCommandInput,
  GetResponseHeadersPolicyCommandOutput,
} from "./commands/GetResponseHeadersPolicyCommand";
import {
  GetResponseHeadersPolicyConfigCommandInput,
  GetResponseHeadersPolicyConfigCommandOutput,
} from "./commands/GetResponseHeadersPolicyConfigCommand";
import {
  GetStreamingDistributionCommandInput,
  GetStreamingDistributionCommandOutput,
} from "./commands/GetStreamingDistributionCommand";
import {
  GetStreamingDistributionConfigCommandInput,
  GetStreamingDistributionConfigCommandOutput,
} from "./commands/GetStreamingDistributionConfigCommand";
import { GetVpcOriginCommandInput, GetVpcOriginCommandOutput } from "./commands/GetVpcOriginCommand";
import { ListAnycastIpListsCommandInput, ListAnycastIpListsCommandOutput } from "./commands/ListAnycastIpListsCommand";
import { ListCachePoliciesCommandInput, ListCachePoliciesCommandOutput } from "./commands/ListCachePoliciesCommand";
import {
  ListCloudFrontOriginAccessIdentitiesCommandInput,
  ListCloudFrontOriginAccessIdentitiesCommandOutput,
} from "./commands/ListCloudFrontOriginAccessIdentitiesCommand";
import {
  ListConflictingAliasesCommandInput,
  ListConflictingAliasesCommandOutput,
} from "./commands/ListConflictingAliasesCommand";
import {
  ListConnectionGroupsCommandInput,
  ListConnectionGroupsCommandOutput,
} from "./commands/ListConnectionGroupsCommand";
import {
  ListContinuousDeploymentPoliciesCommandInput,
  ListContinuousDeploymentPoliciesCommandOutput,
} from "./commands/ListContinuousDeploymentPoliciesCommand";
import {
  ListDistributionsByAnycastIpListIdCommandInput,
  ListDistributionsByAnycastIpListIdCommandOutput,
} from "./commands/ListDistributionsByAnycastIpListIdCommand";
import {
  ListDistributionsByCachePolicyIdCommandInput,
  ListDistributionsByCachePolicyIdCommandOutput,
} from "./commands/ListDistributionsByCachePolicyIdCommand";
import {
  ListDistributionsByConnectionModeCommandInput,
  ListDistributionsByConnectionModeCommandOutput,
} from "./commands/ListDistributionsByConnectionModeCommand";
import {
  ListDistributionsByKeyGroupCommandInput,
  ListDistributionsByKeyGroupCommandOutput,
} from "./commands/ListDistributionsByKeyGroupCommand";
import {
  ListDistributionsByOriginRequestPolicyIdCommandInput,
  ListDistributionsByOriginRequestPolicyIdCommandOutput,
} from "./commands/ListDistributionsByOriginRequestPolicyIdCommand";
import {
  ListDistributionsByRealtimeLogConfigCommandInput,
  ListDistributionsByRealtimeLogConfigCommandOutput,
} from "./commands/ListDistributionsByRealtimeLogConfigCommand";
import {
  ListDistributionsByResponseHeadersPolicyIdCommandInput,
  ListDistributionsByResponseHeadersPolicyIdCommandOutput,
} from "./commands/ListDistributionsByResponseHeadersPolicyIdCommand";
import {
  ListDistributionsByVpcOriginIdCommandInput,
  ListDistributionsByVpcOriginIdCommandOutput,
} from "./commands/ListDistributionsByVpcOriginIdCommand";
import {
  ListDistributionsByWebACLIdCommandInput,
  ListDistributionsByWebACLIdCommandOutput,
} from "./commands/ListDistributionsByWebACLIdCommand";
import { ListDistributionsCommandInput, ListDistributionsCommandOutput } from "./commands/ListDistributionsCommand";
import {
  ListDistributionTenantsByCustomizationCommandInput,
  ListDistributionTenantsByCustomizationCommandOutput,
} from "./commands/ListDistributionTenantsByCustomizationCommand";
import {
  ListDistributionTenantsCommandInput,
  ListDistributionTenantsCommandOutput,
} from "./commands/ListDistributionTenantsCommand";
import {
  ListDomainConflictsCommandInput,
  ListDomainConflictsCommandOutput,
} from "./commands/ListDomainConflictsCommand";
import {
  ListFieldLevelEncryptionConfigsCommandInput,
  ListFieldLevelEncryptionConfigsCommandOutput,
} from "./commands/ListFieldLevelEncryptionConfigsCommand";
import {
  ListFieldLevelEncryptionProfilesCommandInput,
  ListFieldLevelEncryptionProfilesCommandOutput,
} from "./commands/ListFieldLevelEncryptionProfilesCommand";
import { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "./commands/ListFunctionsCommand";
import { ListInvalidationsCommandInput, ListInvalidationsCommandOutput } from "./commands/ListInvalidationsCommand";
import {
  ListInvalidationsForDistributionTenantCommandInput,
  ListInvalidationsForDistributionTenantCommandOutput,
} from "./commands/ListInvalidationsForDistributionTenantCommand";
import { ListKeyGroupsCommandInput, ListKeyGroupsCommandOutput } from "./commands/ListKeyGroupsCommand";
import { ListKeyValueStoresCommandInput, ListKeyValueStoresCommandOutput } from "./commands/ListKeyValueStoresCommand";
import {
  ListOriginAccessControlsCommandInput,
  ListOriginAccessControlsCommandOutput,
} from "./commands/ListOriginAccessControlsCommand";
import {
  ListOriginRequestPoliciesCommandInput,
  ListOriginRequestPoliciesCommandOutput,
} from "./commands/ListOriginRequestPoliciesCommand";
import { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "./commands/ListPublicKeysCommand";
import {
  ListRealtimeLogConfigsCommandInput,
  ListRealtimeLogConfigsCommandOutput,
} from "./commands/ListRealtimeLogConfigsCommand";
import {
  ListResponseHeadersPoliciesCommandInput,
  ListResponseHeadersPoliciesCommandOutput,
} from "./commands/ListResponseHeadersPoliciesCommand";
import {
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput,
} from "./commands/ListStreamingDistributionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListVpcOriginsCommandInput, ListVpcOriginsCommandOutput } from "./commands/ListVpcOriginsCommand";
import { PublishFunctionCommandInput, PublishFunctionCommandOutput } from "./commands/PublishFunctionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestFunctionCommandInput, TestFunctionCommandOutput } from "./commands/TestFunctionCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateCachePolicyCommandInput, UpdateCachePolicyCommandOutput } from "./commands/UpdateCachePolicyCommand";
import {
  UpdateCloudFrontOriginAccessIdentityCommandInput,
  UpdateCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/UpdateCloudFrontOriginAccessIdentityCommand";
import {
  UpdateConnectionGroupCommandInput,
  UpdateConnectionGroupCommandOutput,
} from "./commands/UpdateConnectionGroupCommand";
import {
  UpdateContinuousDeploymentPolicyCommandInput,
  UpdateContinuousDeploymentPolicyCommandOutput,
} from "./commands/UpdateContinuousDeploymentPolicyCommand";
import { UpdateDistributionCommandInput, UpdateDistributionCommandOutput } from "./commands/UpdateDistributionCommand";
import {
  UpdateDistributionTenantCommandInput,
  UpdateDistributionTenantCommandOutput,
} from "./commands/UpdateDistributionTenantCommand";
import {
  UpdateDistributionWithStagingConfigCommandInput,
  UpdateDistributionWithStagingConfigCommandOutput,
} from "./commands/UpdateDistributionWithStagingConfigCommand";
import {
  UpdateDomainAssociationCommandInput,
  UpdateDomainAssociationCommandOutput,
} from "./commands/UpdateDomainAssociationCommand";
import {
  UpdateFieldLevelEncryptionConfigCommandInput,
  UpdateFieldLevelEncryptionConfigCommandOutput,
} from "./commands/UpdateFieldLevelEncryptionConfigCommand";
import {
  UpdateFieldLevelEncryptionProfileCommandInput,
  UpdateFieldLevelEncryptionProfileCommandOutput,
} from "./commands/UpdateFieldLevelEncryptionProfileCommand";
import { UpdateFunctionCommandInput, UpdateFunctionCommandOutput } from "./commands/UpdateFunctionCommand";
import { UpdateKeyGroupCommandInput, UpdateKeyGroupCommandOutput } from "./commands/UpdateKeyGroupCommand";
import {
  UpdateKeyValueStoreCommandInput,
  UpdateKeyValueStoreCommandOutput,
} from "./commands/UpdateKeyValueStoreCommand";
import {
  UpdateOriginAccessControlCommandInput,
  UpdateOriginAccessControlCommandOutput,
} from "./commands/UpdateOriginAccessControlCommand";
import {
  UpdateOriginRequestPolicyCommandInput,
  UpdateOriginRequestPolicyCommandOutput,
} from "./commands/UpdateOriginRequestPolicyCommand";
import { UpdatePublicKeyCommandInput, UpdatePublicKeyCommandOutput } from "./commands/UpdatePublicKeyCommand";
import {
  UpdateRealtimeLogConfigCommandInput,
  UpdateRealtimeLogConfigCommandOutput,
} from "./commands/UpdateRealtimeLogConfigCommand";
import {
  UpdateResponseHeadersPolicyCommandInput,
  UpdateResponseHeadersPolicyCommandOutput,
} from "./commands/UpdateResponseHeadersPolicyCommand";
import {
  UpdateStreamingDistributionCommandInput,
  UpdateStreamingDistributionCommandOutput,
} from "./commands/UpdateStreamingDistributionCommand";
import { UpdateVpcOriginCommandInput, UpdateVpcOriginCommandOutput } from "./commands/UpdateVpcOriginCommand";
import {
  VerifyDnsConfigurationCommandInput,
  VerifyDnsConfigurationCommandOutput,
} from "./commands/VerifyDnsConfigurationCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

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
  | CreateVpcOriginCommandInput
  | DeleteAnycastIpListCommandInput
  | DeleteCachePolicyCommandInput
  | DeleteCloudFrontOriginAccessIdentityCommandInput
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
  | DeleteResponseHeadersPolicyCommandInput
  | DeleteStreamingDistributionCommandInput
  | DeleteVpcOriginCommandInput
  | DescribeFunctionCommandInput
  | DescribeKeyValueStoreCommandInput
  | DisassociateDistributionTenantWebACLCommandInput
  | DisassociateDistributionWebACLCommandInput
  | GetAnycastIpListCommandInput
  | GetCachePolicyCommandInput
  | GetCachePolicyConfigCommandInput
  | GetCloudFrontOriginAccessIdentityCommandInput
  | GetCloudFrontOriginAccessIdentityConfigCommandInput
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
  | GetResponseHeadersPolicyCommandInput
  | GetResponseHeadersPolicyConfigCommandInput
  | GetStreamingDistributionCommandInput
  | GetStreamingDistributionConfigCommandInput
  | GetVpcOriginCommandInput
  | ListAnycastIpListsCommandInput
  | ListCachePoliciesCommandInput
  | ListCloudFrontOriginAccessIdentitiesCommandInput
  | ListConflictingAliasesCommandInput
  | ListConnectionGroupsCommandInput
  | ListContinuousDeploymentPoliciesCommandInput
  | ListDistributionTenantsByCustomizationCommandInput
  | ListDistributionTenantsCommandInput
  | ListDistributionsByAnycastIpListIdCommandInput
  | ListDistributionsByCachePolicyIdCommandInput
  | ListDistributionsByConnectionModeCommandInput
  | ListDistributionsByKeyGroupCommandInput
  | ListDistributionsByOriginRequestPolicyIdCommandInput
  | ListDistributionsByRealtimeLogConfigCommandInput
  | ListDistributionsByResponseHeadersPolicyIdCommandInput
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
  | ListVpcOriginsCommandInput
  | PublishFunctionCommandInput
  | TagResourceCommandInput
  | TestFunctionCommandInput
  | UntagResourceCommandInput
  | UpdateCachePolicyCommandInput
  | UpdateCloudFrontOriginAccessIdentityCommandInput
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
  | CreateVpcOriginCommandOutput
  | DeleteAnycastIpListCommandOutput
  | DeleteCachePolicyCommandOutput
  | DeleteCloudFrontOriginAccessIdentityCommandOutput
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
  | DeleteResponseHeadersPolicyCommandOutput
  | DeleteStreamingDistributionCommandOutput
  | DeleteVpcOriginCommandOutput
  | DescribeFunctionCommandOutput
  | DescribeKeyValueStoreCommandOutput
  | DisassociateDistributionTenantWebACLCommandOutput
  | DisassociateDistributionWebACLCommandOutput
  | GetAnycastIpListCommandOutput
  | GetCachePolicyCommandOutput
  | GetCachePolicyConfigCommandOutput
  | GetCloudFrontOriginAccessIdentityCommandOutput
  | GetCloudFrontOriginAccessIdentityConfigCommandOutput
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
  | GetResponseHeadersPolicyCommandOutput
  | GetResponseHeadersPolicyConfigCommandOutput
  | GetStreamingDistributionCommandOutput
  | GetStreamingDistributionConfigCommandOutput
  | GetVpcOriginCommandOutput
  | ListAnycastIpListsCommandOutput
  | ListCachePoliciesCommandOutput
  | ListCloudFrontOriginAccessIdentitiesCommandOutput
  | ListConflictingAliasesCommandOutput
  | ListConnectionGroupsCommandOutput
  | ListContinuousDeploymentPoliciesCommandOutput
  | ListDistributionTenantsByCustomizationCommandOutput
  | ListDistributionTenantsCommandOutput
  | ListDistributionsByAnycastIpListIdCommandOutput
  | ListDistributionsByCachePolicyIdCommandOutput
  | ListDistributionsByConnectionModeCommandOutput
  | ListDistributionsByKeyGroupCommandOutput
  | ListDistributionsByOriginRequestPolicyIdCommandOutput
  | ListDistributionsByRealtimeLogConfigCommandOutput
  | ListDistributionsByResponseHeadersPolicyIdCommandOutput
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
  | ListVpcOriginsCommandOutput
  | PublishFunctionCommandOutput
  | TagResourceCommandOutput
  | TestFunctionCommandOutput
  | UntagResourceCommandOutput
  | UpdateCachePolicyCommandOutput
  | UpdateCloudFrontOriginAccessIdentityCommandOutput
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
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
 * <fullname>Amazon CloudFront</fullname>
 *          <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers
 * 			who need detailed information about CloudFront API actions, data types, and errors. For
 * 			detailed information about CloudFront features, see the
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html">Amazon CloudFront Developer Guide</a>.</p>
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
