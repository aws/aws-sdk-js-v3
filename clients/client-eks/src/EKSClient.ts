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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultEKSHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateAccessPolicyCommandInput,
  AssociateAccessPolicyCommandOutput,
} from "./commands/AssociateAccessPolicyCommand";
import {
  AssociateEncryptionConfigCommandInput,
  AssociateEncryptionConfigCommandOutput,
} from "./commands/AssociateEncryptionConfigCommand";
import {
  AssociateIdentityProviderConfigCommandInput,
  AssociateIdentityProviderConfigCommandOutput,
} from "./commands/AssociateIdentityProviderConfigCommand";
import { CreateAccessEntryCommandInput, CreateAccessEntryCommandOutput } from "./commands/CreateAccessEntryCommand";
import { CreateAddonCommandInput, CreateAddonCommandOutput } from "./commands/CreateAddonCommand";
import { CreateCapabilityCommandInput, CreateCapabilityCommandOutput } from "./commands/CreateCapabilityCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import {
  CreateEksAnywhereSubscriptionCommandInput,
  CreateEksAnywhereSubscriptionCommandOutput,
} from "./commands/CreateEksAnywhereSubscriptionCommand";
import {
  CreateFargateProfileCommandInput,
  CreateFargateProfileCommandOutput,
} from "./commands/CreateFargateProfileCommand";
import { CreateNodegroupCommandInput, CreateNodegroupCommandOutput } from "./commands/CreateNodegroupCommand";
import {
  CreatePodIdentityAssociationCommandInput,
  CreatePodIdentityAssociationCommandOutput,
} from "./commands/CreatePodIdentityAssociationCommand";
import { DeleteAccessEntryCommandInput, DeleteAccessEntryCommandOutput } from "./commands/DeleteAccessEntryCommand";
import { DeleteAddonCommandInput, DeleteAddonCommandOutput } from "./commands/DeleteAddonCommand";
import { DeleteCapabilityCommandInput, DeleteCapabilityCommandOutput } from "./commands/DeleteCapabilityCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import {
  DeleteEksAnywhereSubscriptionCommandInput,
  DeleteEksAnywhereSubscriptionCommandOutput,
} from "./commands/DeleteEksAnywhereSubscriptionCommand";
import {
  DeleteFargateProfileCommandInput,
  DeleteFargateProfileCommandOutput,
} from "./commands/DeleteFargateProfileCommand";
import { DeleteNodegroupCommandInput, DeleteNodegroupCommandOutput } from "./commands/DeleteNodegroupCommand";
import {
  DeletePodIdentityAssociationCommandInput,
  DeletePodIdentityAssociationCommandOutput,
} from "./commands/DeletePodIdentityAssociationCommand";
import { DeregisterClusterCommandInput, DeregisterClusterCommandOutput } from "./commands/DeregisterClusterCommand";
import {
  DescribeAccessEntryCommandInput,
  DescribeAccessEntryCommandOutput,
} from "./commands/DescribeAccessEntryCommand";
import { DescribeAddonCommandInput, DescribeAddonCommandOutput } from "./commands/DescribeAddonCommand";
import {
  DescribeAddonConfigurationCommandInput,
  DescribeAddonConfigurationCommandOutput,
} from "./commands/DescribeAddonConfigurationCommand";
import {
  DescribeAddonVersionsCommandInput,
  DescribeAddonVersionsCommandOutput,
} from "./commands/DescribeAddonVersionsCommand";
import { DescribeCapabilityCommandInput, DescribeCapabilityCommandOutput } from "./commands/DescribeCapabilityCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
import {
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput,
} from "./commands/DescribeClusterVersionsCommand";
import {
  DescribeEksAnywhereSubscriptionCommandInput,
  DescribeEksAnywhereSubscriptionCommandOutput,
} from "./commands/DescribeEksAnywhereSubscriptionCommand";
import {
  DescribeFargateProfileCommandInput,
  DescribeFargateProfileCommandOutput,
} from "./commands/DescribeFargateProfileCommand";
import {
  DescribeIdentityProviderConfigCommandInput,
  DescribeIdentityProviderConfigCommandOutput,
} from "./commands/DescribeIdentityProviderConfigCommand";
import { DescribeInsightCommandInput, DescribeInsightCommandOutput } from "./commands/DescribeInsightCommand";
import {
  DescribeInsightsRefreshCommandInput,
  DescribeInsightsRefreshCommandOutput,
} from "./commands/DescribeInsightsRefreshCommand";
import { DescribeNodegroupCommandInput, DescribeNodegroupCommandOutput } from "./commands/DescribeNodegroupCommand";
import {
  DescribePodIdentityAssociationCommandInput,
  DescribePodIdentityAssociationCommandOutput,
} from "./commands/DescribePodIdentityAssociationCommand";
import { DescribeUpdateCommandInput, DescribeUpdateCommandOutput } from "./commands/DescribeUpdateCommand";
import {
  DisassociateAccessPolicyCommandInput,
  DisassociateAccessPolicyCommandOutput,
} from "./commands/DisassociateAccessPolicyCommand";
import {
  DisassociateIdentityProviderConfigCommandInput,
  DisassociateIdentityProviderConfigCommandOutput,
} from "./commands/DisassociateIdentityProviderConfigCommand";
import { ListAccessEntriesCommandInput, ListAccessEntriesCommandOutput } from "./commands/ListAccessEntriesCommand";
import { ListAccessPoliciesCommandInput, ListAccessPoliciesCommandOutput } from "./commands/ListAccessPoliciesCommand";
import { ListAddonsCommandInput, ListAddonsCommandOutput } from "./commands/ListAddonsCommand";
import {
  ListAssociatedAccessPoliciesCommandInput,
  ListAssociatedAccessPoliciesCommandOutput,
} from "./commands/ListAssociatedAccessPoliciesCommand";
import { ListCapabilitiesCommandInput, ListCapabilitiesCommandOutput } from "./commands/ListCapabilitiesCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import {
  ListEksAnywhereSubscriptionsCommandInput,
  ListEksAnywhereSubscriptionsCommandOutput,
} from "./commands/ListEksAnywhereSubscriptionsCommand";
import {
  ListFargateProfilesCommandInput,
  ListFargateProfilesCommandOutput,
} from "./commands/ListFargateProfilesCommand";
import {
  ListIdentityProviderConfigsCommandInput,
  ListIdentityProviderConfigsCommandOutput,
} from "./commands/ListIdentityProviderConfigsCommand";
import { ListInsightsCommandInput, ListInsightsCommandOutput } from "./commands/ListInsightsCommand";
import { ListNodegroupsCommandInput, ListNodegroupsCommandOutput } from "./commands/ListNodegroupsCommand";
import {
  ListPodIdentityAssociationsCommandInput,
  ListPodIdentityAssociationsCommandOutput,
} from "./commands/ListPodIdentityAssociationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUpdatesCommandInput, ListUpdatesCommandOutput } from "./commands/ListUpdatesCommand";
import { RegisterClusterCommandInput, RegisterClusterCommandOutput } from "./commands/RegisterClusterCommand";
import {
  StartInsightsRefreshCommandInput,
  StartInsightsRefreshCommandOutput,
} from "./commands/StartInsightsRefreshCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAccessEntryCommandInput, UpdateAccessEntryCommandOutput } from "./commands/UpdateAccessEntryCommand";
import { UpdateAddonCommandInput, UpdateAddonCommandOutput } from "./commands/UpdateAddonCommand";
import { UpdateCapabilityCommandInput, UpdateCapabilityCommandOutput } from "./commands/UpdateCapabilityCommand";
import {
  UpdateClusterConfigCommandInput,
  UpdateClusterConfigCommandOutput,
} from "./commands/UpdateClusterConfigCommand";
import {
  UpdateClusterVersionCommandInput,
  UpdateClusterVersionCommandOutput,
} from "./commands/UpdateClusterVersionCommand";
import {
  UpdateEksAnywhereSubscriptionCommandInput,
  UpdateEksAnywhereSubscriptionCommandOutput,
} from "./commands/UpdateEksAnywhereSubscriptionCommand";
import {
  UpdateNodegroupConfigCommandInput,
  UpdateNodegroupConfigCommandOutput,
} from "./commands/UpdateNodegroupConfigCommand";
import {
  UpdateNodegroupVersionCommandInput,
  UpdateNodegroupVersionCommandOutput,
} from "./commands/UpdateNodegroupVersionCommand";
import {
  UpdatePodIdentityAssociationCommandInput,
  UpdatePodIdentityAssociationCommandOutput,
} from "./commands/UpdatePodIdentityAssociationCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateAccessPolicyCommandInput
  | AssociateEncryptionConfigCommandInput
  | AssociateIdentityProviderConfigCommandInput
  | CreateAccessEntryCommandInput
  | CreateAddonCommandInput
  | CreateCapabilityCommandInput
  | CreateClusterCommandInput
  | CreateEksAnywhereSubscriptionCommandInput
  | CreateFargateProfileCommandInput
  | CreateNodegroupCommandInput
  | CreatePodIdentityAssociationCommandInput
  | DeleteAccessEntryCommandInput
  | DeleteAddonCommandInput
  | DeleteCapabilityCommandInput
  | DeleteClusterCommandInput
  | DeleteEksAnywhereSubscriptionCommandInput
  | DeleteFargateProfileCommandInput
  | DeleteNodegroupCommandInput
  | DeletePodIdentityAssociationCommandInput
  | DeregisterClusterCommandInput
  | DescribeAccessEntryCommandInput
  | DescribeAddonCommandInput
  | DescribeAddonConfigurationCommandInput
  | DescribeAddonVersionsCommandInput
  | DescribeCapabilityCommandInput
  | DescribeClusterCommandInput
  | DescribeClusterVersionsCommandInput
  | DescribeEksAnywhereSubscriptionCommandInput
  | DescribeFargateProfileCommandInput
  | DescribeIdentityProviderConfigCommandInput
  | DescribeInsightCommandInput
  | DescribeInsightsRefreshCommandInput
  | DescribeNodegroupCommandInput
  | DescribePodIdentityAssociationCommandInput
  | DescribeUpdateCommandInput
  | DisassociateAccessPolicyCommandInput
  | DisassociateIdentityProviderConfigCommandInput
  | ListAccessEntriesCommandInput
  | ListAccessPoliciesCommandInput
  | ListAddonsCommandInput
  | ListAssociatedAccessPoliciesCommandInput
  | ListCapabilitiesCommandInput
  | ListClustersCommandInput
  | ListEksAnywhereSubscriptionsCommandInput
  | ListFargateProfilesCommandInput
  | ListIdentityProviderConfigsCommandInput
  | ListInsightsCommandInput
  | ListNodegroupsCommandInput
  | ListPodIdentityAssociationsCommandInput
  | ListTagsForResourceCommandInput
  | ListUpdatesCommandInput
  | RegisterClusterCommandInput
  | StartInsightsRefreshCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccessEntryCommandInput
  | UpdateAddonCommandInput
  | UpdateCapabilityCommandInput
  | UpdateClusterConfigCommandInput
  | UpdateClusterVersionCommandInput
  | UpdateEksAnywhereSubscriptionCommandInput
  | UpdateNodegroupConfigCommandInput
  | UpdateNodegroupVersionCommandInput
  | UpdatePodIdentityAssociationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateAccessPolicyCommandOutput
  | AssociateEncryptionConfigCommandOutput
  | AssociateIdentityProviderConfigCommandOutput
  | CreateAccessEntryCommandOutput
  | CreateAddonCommandOutput
  | CreateCapabilityCommandOutput
  | CreateClusterCommandOutput
  | CreateEksAnywhereSubscriptionCommandOutput
  | CreateFargateProfileCommandOutput
  | CreateNodegroupCommandOutput
  | CreatePodIdentityAssociationCommandOutput
  | DeleteAccessEntryCommandOutput
  | DeleteAddonCommandOutput
  | DeleteCapabilityCommandOutput
  | DeleteClusterCommandOutput
  | DeleteEksAnywhereSubscriptionCommandOutput
  | DeleteFargateProfileCommandOutput
  | DeleteNodegroupCommandOutput
  | DeletePodIdentityAssociationCommandOutput
  | DeregisterClusterCommandOutput
  | DescribeAccessEntryCommandOutput
  | DescribeAddonCommandOutput
  | DescribeAddonConfigurationCommandOutput
  | DescribeAddonVersionsCommandOutput
  | DescribeCapabilityCommandOutput
  | DescribeClusterCommandOutput
  | DescribeClusterVersionsCommandOutput
  | DescribeEksAnywhereSubscriptionCommandOutput
  | DescribeFargateProfileCommandOutput
  | DescribeIdentityProviderConfigCommandOutput
  | DescribeInsightCommandOutput
  | DescribeInsightsRefreshCommandOutput
  | DescribeNodegroupCommandOutput
  | DescribePodIdentityAssociationCommandOutput
  | DescribeUpdateCommandOutput
  | DisassociateAccessPolicyCommandOutput
  | DisassociateIdentityProviderConfigCommandOutput
  | ListAccessEntriesCommandOutput
  | ListAccessPoliciesCommandOutput
  | ListAddonsCommandOutput
  | ListAssociatedAccessPoliciesCommandOutput
  | ListCapabilitiesCommandOutput
  | ListClustersCommandOutput
  | ListEksAnywhereSubscriptionsCommandOutput
  | ListFargateProfilesCommandOutput
  | ListIdentityProviderConfigsCommandOutput
  | ListInsightsCommandOutput
  | ListNodegroupsCommandOutput
  | ListPodIdentityAssociationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUpdatesCommandOutput
  | RegisterClusterCommandOutput
  | StartInsightsRefreshCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccessEntryCommandOutput
  | UpdateAddonCommandOutput
  | UpdateCapabilityCommandOutput
  | UpdateClusterConfigCommandOutput
  | UpdateClusterVersionCommandOutput
  | UpdateEksAnywhereSubscriptionCommandOutput
  | UpdateNodegroupConfigCommandOutput
  | UpdateNodegroupVersionCommandOutput
  | UpdatePodIdentityAssociationCommandOutput;

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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type EKSClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of EKSClient class constructor that set the region, credentials and other options.
 */
export interface EKSClientConfig extends EKSClientConfigType {}

/**
 * @public
 */
export type EKSClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of EKSClient class. This is resolved and normalized from the {@link EKSClientConfig | constructor configuration interface}.
 */
export interface EKSClientResolvedConfig extends EKSClientResolvedConfigType {}

/**
 * <p>Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on
 *             Amazon Web Services without needing to setup or maintain your own Kubernetes control plane. Kubernetes is an
 *             open-source system for automating the deployment, scaling, and management of
 *             containerized applications.</p>
 *          <p>Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use all
 *             the existing plugins and tooling from the Kubernetes community. Applications running on Amazon EKS
 *             are fully compatible with applications running on any standard Kubernetes environment,
 *             whether running in on-premises data centers or public clouds. This means that you can
 *             easily migrate any standard Kubernetes application to Amazon EKS without any code modification
 *             required.</p>
 * @public
 */
export class EKSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EKSClientResolvedConfig
> {
  /**
   * The resolved configuration of EKSClient class. This is resolved and normalized from the {@link EKSClientConfig | constructor configuration interface}.
   */
  readonly config: EKSClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<EKSClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultEKSHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: EKSClientResolvedConfig) =>
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
