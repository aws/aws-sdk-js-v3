// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getHostHeaderPlugin,
  getLoggerPlugin,
  getRecursionDetectionPlugin,
  getUserAgentPlugin,
  resolveHostHeaderConfig,
  resolveUserAgentConfig,
} from "@aws-sdk/core/client";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/core/client";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/core/config";
import { type EndpointInputConfig, type EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/core/endpoints";
import { type HttpHandlerUserInput as __HttpHandlerUserInput, getContentLengthPlugin } from "@smithy/core/protocols";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/core/retry";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  defaultNetworkSecurityManagerHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import type {
  CreateDeploymentSnapshotCommandInput,
  CreateDeploymentSnapshotCommandOutput,
} from "./commands/CreateDeploymentSnapshotCommand";
import type { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand";
import type {
  CreatePolicySnapshotCommandInput,
  CreatePolicySnapshotCommandOutput,
} from "./commands/CreatePolicySnapshotCommand";
import type { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import type {
  CreateRuleSnapshotCommandInput,
  CreateRuleSnapshotCommandOutput,
} from "./commands/CreateRuleSnapshotCommand";
import type { CreateScopeCommandInput, CreateScopeCommandOutput } from "./commands/CreateScopeCommand";
import type {
  CreateScopeSnapshotCommandInput,
  CreateScopeSnapshotCommandOutput,
} from "./commands/CreateScopeSnapshotCommand";
import type { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "./commands/CreateTemplateCommand";
import type {
  CreateTemplateSnapshotCommandInput,
  CreateTemplateSnapshotCommandOutput,
} from "./commands/CreateTemplateSnapshotCommand";
import type {
  DeleteAdminAccountCommandInput,
  DeleteAdminAccountCommandOutput,
} from "./commands/DeleteAdminAccountCommand";
import type { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "./commands/DeleteDeploymentCommand";
import type { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import type { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import type { DeleteScopeCommandInput, DeleteScopeCommandOutput } from "./commands/DeleteScopeCommand";
import type { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "./commands/DeleteTemplateCommand";
import type {
  GenerateRuleConfigurationCommandInput,
  GenerateRuleConfigurationCommandOutput,
} from "./commands/GenerateRuleConfigurationCommand";
import type { GetAdminAccountCommandInput, GetAdminAccountCommandOutput } from "./commands/GetAdminAccountCommand";
import type { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import type { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import type { GetRuleCommandInput, GetRuleCommandOutput } from "./commands/GetRuleCommand";
import type { GetScopeCommandInput, GetScopeCommandOutput } from "./commands/GetScopeCommand";
import type { GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import type {
  ListAdminAccountsCommandInput,
  ListAdminAccountsCommandOutput,
} from "./commands/ListAdminAccountsCommand";
import type {
  ListAggregateResourceSynchronizationStatusesCommandInput,
  ListAggregateResourceSynchronizationStatusesCommandOutput,
} from "./commands/ListAggregateResourceSynchronizationStatusesCommand";
import type { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand";
import type {
  ListDeploymentSnapshotsCommandInput,
  ListDeploymentSnapshotsCommandOutput,
} from "./commands/ListDeploymentSnapshotsCommand";
import type { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import type {
  ListPolicySnapshotsCommandInput,
  ListPolicySnapshotsCommandOutput,
} from "./commands/ListPolicySnapshotsCommand";
import type {
  ListResourceAssociationsCommandInput,
  ListResourceAssociationsCommandOutput,
} from "./commands/ListResourceAssociationsCommand";
import type {
  ListResourceSynchronizationStatusesCommandInput,
  ListResourceSynchronizationStatusesCommandOutput,
} from "./commands/ListResourceSynchronizationStatusesCommand";
import type { ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import type {
  ListRuleSnapshotsCommandInput,
  ListRuleSnapshotsCommandOutput,
} from "./commands/ListRuleSnapshotsCommand";
import type { ListScopesCommandInput, ListScopesCommandOutput } from "./commands/ListScopesCommand";
import type {
  ListScopeSnapshotsCommandInput,
  ListScopeSnapshotsCommandOutput,
} from "./commands/ListScopeSnapshotsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "./commands/ListTemplatesCommand";
import type {
  ListTemplateSnapshotsCommandInput,
  ListTemplateSnapshotsCommandOutput,
} from "./commands/ListTemplateSnapshotsCommand";
import type { PutAdminAccountCommandInput, PutAdminAccountCommandOutput } from "./commands/PutAdminAccountCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateDeploymentCommandInput, UpdateDeploymentCommandOutput } from "./commands/UpdateDeploymentCommand";
import type { UpdatePolicyCommandInput, UpdatePolicyCommandOutput } from "./commands/UpdatePolicyCommand";
import type { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand";
import type { UpdateScopeCommandInput, UpdateScopeCommandOutput } from "./commands/UpdateScopeCommand";
import type { UpdateTemplateCommandInput, UpdateTemplateCommandOutput } from "./commands/UpdateTemplateCommand";
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
  | CreateDeploymentCommandInput
  | CreateDeploymentSnapshotCommandInput
  | CreatePolicyCommandInput
  | CreatePolicySnapshotCommandInput
  | CreateRuleCommandInput
  | CreateRuleSnapshotCommandInput
  | CreateScopeCommandInput
  | CreateScopeSnapshotCommandInput
  | CreateTemplateCommandInput
  | CreateTemplateSnapshotCommandInput
  | DeleteAdminAccountCommandInput
  | DeleteDeploymentCommandInput
  | DeletePolicyCommandInput
  | DeleteRuleCommandInput
  | DeleteScopeCommandInput
  | DeleteTemplateCommandInput
  | GenerateRuleConfigurationCommandInput
  | GetAdminAccountCommandInput
  | GetDeploymentCommandInput
  | GetPolicyCommandInput
  | GetRuleCommandInput
  | GetScopeCommandInput
  | GetTemplateCommandInput
  | ListAdminAccountsCommandInput
  | ListAggregateResourceSynchronizationStatusesCommandInput
  | ListDeploymentSnapshotsCommandInput
  | ListDeploymentsCommandInput
  | ListPoliciesCommandInput
  | ListPolicySnapshotsCommandInput
  | ListResourceAssociationsCommandInput
  | ListResourceSynchronizationStatusesCommandInput
  | ListRuleSnapshotsCommandInput
  | ListRulesCommandInput
  | ListScopeSnapshotsCommandInput
  | ListScopesCommandInput
  | ListTagsForResourceCommandInput
  | ListTemplateSnapshotsCommandInput
  | ListTemplatesCommandInput
  | PutAdminAccountCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDeploymentCommandInput
  | UpdatePolicyCommandInput
  | UpdateRuleCommandInput
  | UpdateScopeCommandInput
  | UpdateTemplateCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateDeploymentCommandOutput
  | CreateDeploymentSnapshotCommandOutput
  | CreatePolicyCommandOutput
  | CreatePolicySnapshotCommandOutput
  | CreateRuleCommandOutput
  | CreateRuleSnapshotCommandOutput
  | CreateScopeCommandOutput
  | CreateScopeSnapshotCommandOutput
  | CreateTemplateCommandOutput
  | CreateTemplateSnapshotCommandOutput
  | DeleteAdminAccountCommandOutput
  | DeleteDeploymentCommandOutput
  | DeletePolicyCommandOutput
  | DeleteRuleCommandOutput
  | DeleteScopeCommandOutput
  | DeleteTemplateCommandOutput
  | GenerateRuleConfigurationCommandOutput
  | GetAdminAccountCommandOutput
  | GetDeploymentCommandOutput
  | GetPolicyCommandOutput
  | GetRuleCommandOutput
  | GetScopeCommandOutput
  | GetTemplateCommandOutput
  | ListAdminAccountsCommandOutput
  | ListAggregateResourceSynchronizationStatusesCommandOutput
  | ListDeploymentSnapshotsCommandOutput
  | ListDeploymentsCommandOutput
  | ListPoliciesCommandOutput
  | ListPolicySnapshotsCommandOutput
  | ListResourceAssociationsCommandOutput
  | ListResourceSynchronizationStatusesCommandOutput
  | ListRuleSnapshotsCommandOutput
  | ListRulesCommandOutput
  | ListScopeSnapshotsCommandOutput
  | ListScopesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTemplateSnapshotsCommandOutput
  | ListTemplatesCommandOutput
  | PutAdminAccountCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDeploymentCommandOutput
  | UpdatePolicyCommandOutput
  | UpdateRuleCommandOutput
  | UpdateScopeCommandOutput
  | UpdateTemplateCommandOutput;

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
export type NetworkSecurityManagerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of NetworkSecurityManagerClient class constructor that set the region, credentials and other options.
 */
export interface NetworkSecurityManagerClientConfig extends NetworkSecurityManagerClientConfigType {}

/**
 * @public
 */
export type NetworkSecurityManagerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of NetworkSecurityManagerClient class. This is resolved and normalized from the {@link NetworkSecurityManagerClientConfig | constructor configuration interface}.
 */
export interface NetworkSecurityManagerClientResolvedConfig extends NetworkSecurityManagerClientResolvedConfigType {}

/**
 * <p>AWS Network Security Manager helps you centrally configure and deploy network security protections across your organization. Supported protections include AWS WAF and AWS Shield Advanced. This centralized approach reduces the overhead of managing protections individually across accounts and ensures consistent security at scale.</p> <p>You define reusable <i>rules</i> and <i>templates</i>, then combine them into <i>policies</i>. Next, you select the accounts and resources to protect with <i>scopes</i> and roll the protections out with <i>deployments</i>. For example, you can define a set of AWS WAF rules and group them into a policy. Then deploy that policy across all accounts in your organization with a single deployment.</p> <p>This API reference describes the operations and data types for AWS Network Security Manager.</p> <p>For conceptual information, tutorials, and guidance on writing rule configurations, see the <a href="https://docs.aws.amazon.com/network-security-manager/latest/devguide/what-is.html">AWS Network Security Manager Developer Guide</a>. For the default quotas that apply to your account, see <a href="https://docs.aws.amazon.com/network-security-manager/latest/devguide/quotas.html">Quotas</a>. For the service endpoints available in each Region, see <a href="https://docs.aws.amazon.com/general/latest/gr/network-security-manager.html">AWS Network Security Manager endpoints and quotas</a> in the <i>AWS General Reference</i>.</p>
 * @public
 */
export class NetworkSecurityManagerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  NetworkSecurityManagerClientResolvedConfig
> {
  /**
   * The resolved configuration of NetworkSecurityManagerClient class. This is resolved and normalized from the {@link NetworkSecurityManagerClientConfig | constructor configuration interface}.
   */
  readonly config: NetworkSecurityManagerClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<NetworkSecurityManagerClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultNetworkSecurityManagerHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: NetworkSecurityManagerClientResolvedConfig) =>
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
