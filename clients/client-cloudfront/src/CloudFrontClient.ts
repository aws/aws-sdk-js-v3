// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { AssociateAliasCommandInput, AssociateAliasCommandOutput } from "./commands/AssociateAliasCommand";
import { CopyDistributionCommandInput, CopyDistributionCommandOutput } from "./commands/CopyDistributionCommand";
import { CreateCachePolicyCommandInput, CreateCachePolicyCommandOutput } from "./commands/CreateCachePolicyCommand";
import {
  CreateCloudFrontOriginAccessIdentityCommandInput,
  CreateCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/CreateCloudFrontOriginAccessIdentityCommand";
import {
  CreateContinuousDeploymentPolicyCommandInput,
  CreateContinuousDeploymentPolicyCommandOutput,
} from "./commands/CreateContinuousDeploymentPolicyCommand";
import { CreateDistributionCommandInput, CreateDistributionCommandOutput } from "./commands/CreateDistributionCommand";
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
import { CreateKeyGroupCommandInput, CreateKeyGroupCommandOutput } from "./commands/CreateKeyGroupCommand";
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
import { DeleteCachePolicyCommandInput, DeleteCachePolicyCommandOutput } from "./commands/DeleteCachePolicyCommand";
import {
  DeleteCloudFrontOriginAccessIdentityCommandInput,
  DeleteCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/DeleteCloudFrontOriginAccessIdentityCommand";
import {
  DeleteContinuousDeploymentPolicyCommandInput,
  DeleteContinuousDeploymentPolicyCommandOutput,
} from "./commands/DeleteContinuousDeploymentPolicyCommand";
import { DeleteDistributionCommandInput, DeleteDistributionCommandOutput } from "./commands/DeleteDistributionCommand";
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
import { DescribeFunctionCommandInput, DescribeFunctionCommandOutput } from "./commands/DescribeFunctionCommand";
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
import { GetKeyGroupCommandInput, GetKeyGroupCommandOutput } from "./commands/GetKeyGroupCommand";
import { GetKeyGroupConfigCommandInput, GetKeyGroupConfigCommandOutput } from "./commands/GetKeyGroupConfigCommand";
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
  ListContinuousDeploymentPoliciesCommandInput,
  ListContinuousDeploymentPoliciesCommandOutput,
} from "./commands/ListContinuousDeploymentPoliciesCommand";
import {
  ListDistributionsByCachePolicyIdCommandInput,
  ListDistributionsByCachePolicyIdCommandOutput,
} from "./commands/ListDistributionsByCachePolicyIdCommand";
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
  ListDistributionsByWebACLIdCommandInput,
  ListDistributionsByWebACLIdCommandOutput,
} from "./commands/ListDistributionsByWebACLIdCommand";
import { ListDistributionsCommandInput, ListDistributionsCommandOutput } from "./commands/ListDistributionsCommand";
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
import { ListKeyGroupsCommandInput, ListKeyGroupsCommandOutput } from "./commands/ListKeyGroupsCommand";
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
  UpdateContinuousDeploymentPolicyCommandInput,
  UpdateContinuousDeploymentPolicyCommandOutput,
} from "./commands/UpdateContinuousDeploymentPolicyCommand";
import { UpdateDistributionCommandInput, UpdateDistributionCommandOutput } from "./commands/UpdateDistributionCommand";
import {
  UpdateDistributionWithStagingConfigCommandInput,
  UpdateDistributionWithStagingConfigCommandOutput,
} from "./commands/UpdateDistributionWithStagingConfigCommand";
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
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateAliasCommandInput
  | CopyDistributionCommandInput
  | CreateCachePolicyCommandInput
  | CreateCloudFrontOriginAccessIdentityCommandInput
  | CreateContinuousDeploymentPolicyCommandInput
  | CreateDistributionCommandInput
  | CreateDistributionWithTagsCommandInput
  | CreateFieldLevelEncryptionConfigCommandInput
  | CreateFieldLevelEncryptionProfileCommandInput
  | CreateFunctionCommandInput
  | CreateInvalidationCommandInput
  | CreateKeyGroupCommandInput
  | CreateMonitoringSubscriptionCommandInput
  | CreateOriginAccessControlCommandInput
  | CreateOriginRequestPolicyCommandInput
  | CreatePublicKeyCommandInput
  | CreateRealtimeLogConfigCommandInput
  | CreateResponseHeadersPolicyCommandInput
  | CreateStreamingDistributionCommandInput
  | CreateStreamingDistributionWithTagsCommandInput
  | DeleteCachePolicyCommandInput
  | DeleteCloudFrontOriginAccessIdentityCommandInput
  | DeleteContinuousDeploymentPolicyCommandInput
  | DeleteDistributionCommandInput
  | DeleteFieldLevelEncryptionConfigCommandInput
  | DeleteFieldLevelEncryptionProfileCommandInput
  | DeleteFunctionCommandInput
  | DeleteKeyGroupCommandInput
  | DeleteMonitoringSubscriptionCommandInput
  | DeleteOriginAccessControlCommandInput
  | DeleteOriginRequestPolicyCommandInput
  | DeletePublicKeyCommandInput
  | DeleteRealtimeLogConfigCommandInput
  | DeleteResponseHeadersPolicyCommandInput
  | DeleteStreamingDistributionCommandInput
  | DescribeFunctionCommandInput
  | GetCachePolicyCommandInput
  | GetCachePolicyConfigCommandInput
  | GetCloudFrontOriginAccessIdentityCommandInput
  | GetCloudFrontOriginAccessIdentityConfigCommandInput
  | GetContinuousDeploymentPolicyCommandInput
  | GetContinuousDeploymentPolicyConfigCommandInput
  | GetDistributionCommandInput
  | GetDistributionConfigCommandInput
  | GetFieldLevelEncryptionCommandInput
  | GetFieldLevelEncryptionConfigCommandInput
  | GetFieldLevelEncryptionProfileCommandInput
  | GetFieldLevelEncryptionProfileConfigCommandInput
  | GetFunctionCommandInput
  | GetInvalidationCommandInput
  | GetKeyGroupCommandInput
  | GetKeyGroupConfigCommandInput
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
  | ListCachePoliciesCommandInput
  | ListCloudFrontOriginAccessIdentitiesCommandInput
  | ListConflictingAliasesCommandInput
  | ListContinuousDeploymentPoliciesCommandInput
  | ListDistributionsByCachePolicyIdCommandInput
  | ListDistributionsByKeyGroupCommandInput
  | ListDistributionsByOriginRequestPolicyIdCommandInput
  | ListDistributionsByRealtimeLogConfigCommandInput
  | ListDistributionsByResponseHeadersPolicyIdCommandInput
  | ListDistributionsByWebACLIdCommandInput
  | ListDistributionsCommandInput
  | ListFieldLevelEncryptionConfigsCommandInput
  | ListFieldLevelEncryptionProfilesCommandInput
  | ListFunctionsCommandInput
  | ListInvalidationsCommandInput
  | ListKeyGroupsCommandInput
  | ListOriginAccessControlsCommandInput
  | ListOriginRequestPoliciesCommandInput
  | ListPublicKeysCommandInput
  | ListRealtimeLogConfigsCommandInput
  | ListResponseHeadersPoliciesCommandInput
  | ListStreamingDistributionsCommandInput
  | ListTagsForResourceCommandInput
  | PublishFunctionCommandInput
  | TagResourceCommandInput
  | TestFunctionCommandInput
  | UntagResourceCommandInput
  | UpdateCachePolicyCommandInput
  | UpdateCloudFrontOriginAccessIdentityCommandInput
  | UpdateContinuousDeploymentPolicyCommandInput
  | UpdateDistributionCommandInput
  | UpdateDistributionWithStagingConfigCommandInput
  | UpdateFieldLevelEncryptionConfigCommandInput
  | UpdateFieldLevelEncryptionProfileCommandInput
  | UpdateFunctionCommandInput
  | UpdateKeyGroupCommandInput
  | UpdateOriginAccessControlCommandInput
  | UpdateOriginRequestPolicyCommandInput
  | UpdatePublicKeyCommandInput
  | UpdateRealtimeLogConfigCommandInput
  | UpdateResponseHeadersPolicyCommandInput
  | UpdateStreamingDistributionCommandInput;

export type ServiceOutputTypes =
  | AssociateAliasCommandOutput
  | CopyDistributionCommandOutput
  | CreateCachePolicyCommandOutput
  | CreateCloudFrontOriginAccessIdentityCommandOutput
  | CreateContinuousDeploymentPolicyCommandOutput
  | CreateDistributionCommandOutput
  | CreateDistributionWithTagsCommandOutput
  | CreateFieldLevelEncryptionConfigCommandOutput
  | CreateFieldLevelEncryptionProfileCommandOutput
  | CreateFunctionCommandOutput
  | CreateInvalidationCommandOutput
  | CreateKeyGroupCommandOutput
  | CreateMonitoringSubscriptionCommandOutput
  | CreateOriginAccessControlCommandOutput
  | CreateOriginRequestPolicyCommandOutput
  | CreatePublicKeyCommandOutput
  | CreateRealtimeLogConfigCommandOutput
  | CreateResponseHeadersPolicyCommandOutput
  | CreateStreamingDistributionCommandOutput
  | CreateStreamingDistributionWithTagsCommandOutput
  | DeleteCachePolicyCommandOutput
  | DeleteCloudFrontOriginAccessIdentityCommandOutput
  | DeleteContinuousDeploymentPolicyCommandOutput
  | DeleteDistributionCommandOutput
  | DeleteFieldLevelEncryptionConfigCommandOutput
  | DeleteFieldLevelEncryptionProfileCommandOutput
  | DeleteFunctionCommandOutput
  | DeleteKeyGroupCommandOutput
  | DeleteMonitoringSubscriptionCommandOutput
  | DeleteOriginAccessControlCommandOutput
  | DeleteOriginRequestPolicyCommandOutput
  | DeletePublicKeyCommandOutput
  | DeleteRealtimeLogConfigCommandOutput
  | DeleteResponseHeadersPolicyCommandOutput
  | DeleteStreamingDistributionCommandOutput
  | DescribeFunctionCommandOutput
  | GetCachePolicyCommandOutput
  | GetCachePolicyConfigCommandOutput
  | GetCloudFrontOriginAccessIdentityCommandOutput
  | GetCloudFrontOriginAccessIdentityConfigCommandOutput
  | GetContinuousDeploymentPolicyCommandOutput
  | GetContinuousDeploymentPolicyConfigCommandOutput
  | GetDistributionCommandOutput
  | GetDistributionConfigCommandOutput
  | GetFieldLevelEncryptionCommandOutput
  | GetFieldLevelEncryptionConfigCommandOutput
  | GetFieldLevelEncryptionProfileCommandOutput
  | GetFieldLevelEncryptionProfileConfigCommandOutput
  | GetFunctionCommandOutput
  | GetInvalidationCommandOutput
  | GetKeyGroupCommandOutput
  | GetKeyGroupConfigCommandOutput
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
  | ListCachePoliciesCommandOutput
  | ListCloudFrontOriginAccessIdentitiesCommandOutput
  | ListConflictingAliasesCommandOutput
  | ListContinuousDeploymentPoliciesCommandOutput
  | ListDistributionsByCachePolicyIdCommandOutput
  | ListDistributionsByKeyGroupCommandOutput
  | ListDistributionsByOriginRequestPolicyIdCommandOutput
  | ListDistributionsByRealtimeLogConfigCommandOutput
  | ListDistributionsByResponseHeadersPolicyIdCommandOutput
  | ListDistributionsByWebACLIdCommandOutput
  | ListDistributionsCommandOutput
  | ListFieldLevelEncryptionConfigsCommandOutput
  | ListFieldLevelEncryptionProfilesCommandOutput
  | ListFunctionsCommandOutput
  | ListInvalidationsCommandOutput
  | ListKeyGroupsCommandOutput
  | ListOriginAccessControlsCommandOutput
  | ListOriginRequestPoliciesCommandOutput
  | ListPublicKeysCommandOutput
  | ListRealtimeLogConfigsCommandOutput
  | ListResponseHeadersPoliciesCommandOutput
  | ListStreamingDistributionsCommandOutput
  | ListTagsForResourceCommandOutput
  | PublishFunctionCommandOutput
  | TagResourceCommandOutput
  | TestFunctionCommandOutput
  | UntagResourceCommandOutput
  | UpdateCachePolicyCommandOutput
  | UpdateCloudFrontOriginAccessIdentityCommandOutput
  | UpdateContinuousDeploymentPolicyCommandOutput
  | UpdateDistributionCommandOutput
  | UpdateDistributionWithStagingConfigCommandOutput
  | UpdateFieldLevelEncryptionConfigCommandOutput
  | UpdateFieldLevelEncryptionProfileCommandOutput
  | UpdateFunctionCommandOutput
  | UpdateKeyGroupCommandOutput
  | UpdateOriginAccessControlCommandOutput
  | UpdateOriginRequestPolicyCommandOutput
  | UpdatePublicKeyCommandOutput
  | UpdateRealtimeLogConfigCommandOutput
  | UpdateResponseHeadersPolicyCommandOutput
  | UpdateStreamingDistributionCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type CloudFrontClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of CloudFrontClient class constructor that set the region, credentials and other options.
 */
export interface CloudFrontClientConfig extends CloudFrontClientConfigType {}

type CloudFrontClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of CloudFrontClient class. This is resolved and normalized from the {@link CloudFrontClientConfig | constructor configuration interface}.
 */
export interface CloudFrontClientResolvedConfig extends CloudFrontClientResolvedConfigType {}

/**
 * <fullname>Amazon CloudFront</fullname>
 *          <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers
 * 			who need detailed information about CloudFront API actions, data types, and errors. For
 * 			detailed information about CloudFront features, see the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
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

  constructor(configuration: CloudFrontClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
