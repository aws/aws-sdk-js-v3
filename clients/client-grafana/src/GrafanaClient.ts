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
  defaultGrafanaHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AssociateLicenseCommandInput, AssociateLicenseCommandOutput } from "./commands/AssociateLicenseCommand";
import {
  CreateWorkspaceApiKeyCommandInput,
  CreateWorkspaceApiKeyCommandOutput,
} from "./commands/CreateWorkspaceApiKeyCommand";
import { CreateWorkspaceCommandInput, CreateWorkspaceCommandOutput } from "./commands/CreateWorkspaceCommand";
import {
  CreateWorkspaceServiceAccountCommandInput,
  CreateWorkspaceServiceAccountCommandOutput,
} from "./commands/CreateWorkspaceServiceAccountCommand";
import {
  CreateWorkspaceServiceAccountTokenCommandInput,
  CreateWorkspaceServiceAccountTokenCommandOutput,
} from "./commands/CreateWorkspaceServiceAccountTokenCommand";
import {
  DeleteWorkspaceApiKeyCommandInput,
  DeleteWorkspaceApiKeyCommandOutput,
} from "./commands/DeleteWorkspaceApiKeyCommand";
import { DeleteWorkspaceCommandInput, DeleteWorkspaceCommandOutput } from "./commands/DeleteWorkspaceCommand";
import {
  DeleteWorkspaceServiceAccountCommandInput,
  DeleteWorkspaceServiceAccountCommandOutput,
} from "./commands/DeleteWorkspaceServiceAccountCommand";
import {
  DeleteWorkspaceServiceAccountTokenCommandInput,
  DeleteWorkspaceServiceAccountTokenCommandOutput,
} from "./commands/DeleteWorkspaceServiceAccountTokenCommand";
import {
  DescribeWorkspaceAuthenticationCommandInput,
  DescribeWorkspaceAuthenticationCommandOutput,
} from "./commands/DescribeWorkspaceAuthenticationCommand";
import { DescribeWorkspaceCommandInput, DescribeWorkspaceCommandOutput } from "./commands/DescribeWorkspaceCommand";
import {
  DescribeWorkspaceConfigurationCommandInput,
  DescribeWorkspaceConfigurationCommandOutput,
} from "./commands/DescribeWorkspaceConfigurationCommand";
import {
  DisassociateLicenseCommandInput,
  DisassociateLicenseCommandOutput,
} from "./commands/DisassociateLicenseCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "./commands/ListPermissionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListVersionsCommandInput, ListVersionsCommandOutput } from "./commands/ListVersionsCommand";
import { ListWorkspacesCommandInput, ListWorkspacesCommandOutput } from "./commands/ListWorkspacesCommand";
import {
  ListWorkspaceServiceAccountsCommandInput,
  ListWorkspaceServiceAccountsCommandOutput,
} from "./commands/ListWorkspaceServiceAccountsCommand";
import {
  ListWorkspaceServiceAccountTokensCommandInput,
  ListWorkspaceServiceAccountTokensCommandOutput,
} from "./commands/ListWorkspaceServiceAccountTokensCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdatePermissionsCommandInput, UpdatePermissionsCommandOutput } from "./commands/UpdatePermissionsCommand";
import {
  UpdateWorkspaceAuthenticationCommandInput,
  UpdateWorkspaceAuthenticationCommandOutput,
} from "./commands/UpdateWorkspaceAuthenticationCommand";
import { UpdateWorkspaceCommandInput, UpdateWorkspaceCommandOutput } from "./commands/UpdateWorkspaceCommand";
import {
  UpdateWorkspaceConfigurationCommandInput,
  UpdateWorkspaceConfigurationCommandOutput,
} from "./commands/UpdateWorkspaceConfigurationCommand";
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
  | AssociateLicenseCommandInput
  | CreateWorkspaceApiKeyCommandInput
  | CreateWorkspaceCommandInput
  | CreateWorkspaceServiceAccountCommandInput
  | CreateWorkspaceServiceAccountTokenCommandInput
  | DeleteWorkspaceApiKeyCommandInput
  | DeleteWorkspaceCommandInput
  | DeleteWorkspaceServiceAccountCommandInput
  | DeleteWorkspaceServiceAccountTokenCommandInput
  | DescribeWorkspaceAuthenticationCommandInput
  | DescribeWorkspaceCommandInput
  | DescribeWorkspaceConfigurationCommandInput
  | DisassociateLicenseCommandInput
  | ListPermissionsCommandInput
  | ListTagsForResourceCommandInput
  | ListVersionsCommandInput
  | ListWorkspaceServiceAccountTokensCommandInput
  | ListWorkspaceServiceAccountsCommandInput
  | ListWorkspacesCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdatePermissionsCommandInput
  | UpdateWorkspaceAuthenticationCommandInput
  | UpdateWorkspaceCommandInput
  | UpdateWorkspaceConfigurationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateLicenseCommandOutput
  | CreateWorkspaceApiKeyCommandOutput
  | CreateWorkspaceCommandOutput
  | CreateWorkspaceServiceAccountCommandOutput
  | CreateWorkspaceServiceAccountTokenCommandOutput
  | DeleteWorkspaceApiKeyCommandOutput
  | DeleteWorkspaceCommandOutput
  | DeleteWorkspaceServiceAccountCommandOutput
  | DeleteWorkspaceServiceAccountTokenCommandOutput
  | DescribeWorkspaceAuthenticationCommandOutput
  | DescribeWorkspaceCommandOutput
  | DescribeWorkspaceConfigurationCommandOutput
  | DisassociateLicenseCommandOutput
  | ListPermissionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVersionsCommandOutput
  | ListWorkspaceServiceAccountTokensCommandOutput
  | ListWorkspaceServiceAccountsCommandOutput
  | ListWorkspacesCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdatePermissionsCommandOutput
  | UpdateWorkspaceAuthenticationCommandOutput
  | UpdateWorkspaceCommandOutput
  | UpdateWorkspaceConfigurationCommandOutput;

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
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

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
export type GrafanaClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of GrafanaClient class constructor that set the region, credentials and other options.
 */
export interface GrafanaClientConfig extends GrafanaClientConfigType {}

/**
 * @public
 */
export type GrafanaClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of GrafanaClient class. This is resolved and normalized from the {@link GrafanaClientConfig | constructor configuration interface}.
 */
export interface GrafanaClientResolvedConfig extends GrafanaClientResolvedConfigType {}

/**
 * <p>Amazon Managed Grafana is a fully managed and secure data visualization service that
 *             you can use to instantly query, correlate, and visualize operational metrics, logs, and
 *             traces from multiple sources. Amazon Managed Grafana makes it easy to deploy, operate, and
 *             scale Grafana, a widely deployed data visualization tool that is popular for its
 *             extensible data support.</p>
 *          <p>With Amazon Managed Grafana, you create logically isolated Grafana servers called
 *                 <i>workspaces</i>. In a workspace, you can create Grafana dashboards
 *             and visualizations to analyze your metrics, logs, and traces without having to build,
 *             package, or deploy any hardware to run Grafana servers. </p>
 * @public
 */
export class GrafanaClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GrafanaClientResolvedConfig
> {
  /**
   * The resolved configuration of GrafanaClient class. This is resolved and normalized from the {@link GrafanaClientConfig | constructor configuration interface}.
   */
  readonly config: GrafanaClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<GrafanaClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
        identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
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
  private getDefaultHttpAuthSchemeParametersProvider() {
    return defaultGrafanaHttpAuthSchemeParametersProvider;
  }
  private getIdentityProviderConfigProvider() {
    return async (config: GrafanaClientResolvedConfig) =>
      new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
      });
  }
}
