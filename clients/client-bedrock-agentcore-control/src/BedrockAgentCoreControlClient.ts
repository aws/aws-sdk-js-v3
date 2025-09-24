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
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  ClientProtocol,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultBedrockAgentCoreControlHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CreateAgentRuntimeCommandInput, CreateAgentRuntimeCommandOutput } from "./commands/CreateAgentRuntimeCommand";
import {
  CreateAgentRuntimeEndpointCommandInput,
  CreateAgentRuntimeEndpointCommandOutput,
} from "./commands/CreateAgentRuntimeEndpointCommand";
import {
  CreateApiKeyCredentialProviderCommandInput,
  CreateApiKeyCredentialProviderCommandOutput,
} from "./commands/CreateApiKeyCredentialProviderCommand";
import { CreateBrowserCommandInput, CreateBrowserCommandOutput } from "./commands/CreateBrowserCommand";
import {
  CreateCodeInterpreterCommandInput,
  CreateCodeInterpreterCommandOutput,
} from "./commands/CreateCodeInterpreterCommand";
import { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "./commands/CreateGatewayCommand";
import {
  CreateGatewayTargetCommandInput,
  CreateGatewayTargetCommandOutput,
} from "./commands/CreateGatewayTargetCommand";
import { CreateMemoryCommandInput, CreateMemoryCommandOutput } from "./commands/CreateMemoryCommand";
import {
  CreateOauth2CredentialProviderCommandInput,
  CreateOauth2CredentialProviderCommandOutput,
} from "./commands/CreateOauth2CredentialProviderCommand";
import {
  CreateWorkloadIdentityCommandInput,
  CreateWorkloadIdentityCommandOutput,
} from "./commands/CreateWorkloadIdentityCommand";
import { DeleteAgentRuntimeCommandInput, DeleteAgentRuntimeCommandOutput } from "./commands/DeleteAgentRuntimeCommand";
import {
  DeleteAgentRuntimeEndpointCommandInput,
  DeleteAgentRuntimeEndpointCommandOutput,
} from "./commands/DeleteAgentRuntimeEndpointCommand";
import {
  DeleteApiKeyCredentialProviderCommandInput,
  DeleteApiKeyCredentialProviderCommandOutput,
} from "./commands/DeleteApiKeyCredentialProviderCommand";
import { DeleteBrowserCommandInput, DeleteBrowserCommandOutput } from "./commands/DeleteBrowserCommand";
import {
  DeleteCodeInterpreterCommandInput,
  DeleteCodeInterpreterCommandOutput,
} from "./commands/DeleteCodeInterpreterCommand";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "./commands/DeleteGatewayCommand";
import {
  DeleteGatewayTargetCommandInput,
  DeleteGatewayTargetCommandOutput,
} from "./commands/DeleteGatewayTargetCommand";
import { DeleteMemoryCommandInput, DeleteMemoryCommandOutput } from "./commands/DeleteMemoryCommand";
import {
  DeleteOauth2CredentialProviderCommandInput,
  DeleteOauth2CredentialProviderCommandOutput,
} from "./commands/DeleteOauth2CredentialProviderCommand";
import {
  DeleteWorkloadIdentityCommandInput,
  DeleteWorkloadIdentityCommandOutput,
} from "./commands/DeleteWorkloadIdentityCommand";
import { GetAgentRuntimeCommandInput, GetAgentRuntimeCommandOutput } from "./commands/GetAgentRuntimeCommand";
import {
  GetAgentRuntimeEndpointCommandInput,
  GetAgentRuntimeEndpointCommandOutput,
} from "./commands/GetAgentRuntimeEndpointCommand";
import {
  GetApiKeyCredentialProviderCommandInput,
  GetApiKeyCredentialProviderCommandOutput,
} from "./commands/GetApiKeyCredentialProviderCommand";
import { GetBrowserCommandInput, GetBrowserCommandOutput } from "./commands/GetBrowserCommand";
import { GetCodeInterpreterCommandInput, GetCodeInterpreterCommandOutput } from "./commands/GetCodeInterpreterCommand";
import { GetGatewayCommandInput, GetGatewayCommandOutput } from "./commands/GetGatewayCommand";
import { GetGatewayTargetCommandInput, GetGatewayTargetCommandOutput } from "./commands/GetGatewayTargetCommand";
import { GetMemoryCommandInput, GetMemoryCommandOutput } from "./commands/GetMemoryCommand";
import {
  GetOauth2CredentialProviderCommandInput,
  GetOauth2CredentialProviderCommandOutput,
} from "./commands/GetOauth2CredentialProviderCommand";
import { GetTokenVaultCommandInput, GetTokenVaultCommandOutput } from "./commands/GetTokenVaultCommand";
import {
  GetWorkloadIdentityCommandInput,
  GetWorkloadIdentityCommandOutput,
} from "./commands/GetWorkloadIdentityCommand";
import {
  ListAgentRuntimeEndpointsCommandInput,
  ListAgentRuntimeEndpointsCommandOutput,
} from "./commands/ListAgentRuntimeEndpointsCommand";
import { ListAgentRuntimesCommandInput, ListAgentRuntimesCommandOutput } from "./commands/ListAgentRuntimesCommand";
import {
  ListAgentRuntimeVersionsCommandInput,
  ListAgentRuntimeVersionsCommandOutput,
} from "./commands/ListAgentRuntimeVersionsCommand";
import {
  ListApiKeyCredentialProvidersCommandInput,
  ListApiKeyCredentialProvidersCommandOutput,
} from "./commands/ListApiKeyCredentialProvidersCommand";
import { ListBrowsersCommandInput, ListBrowsersCommandOutput } from "./commands/ListBrowsersCommand";
import {
  ListCodeInterpretersCommandInput,
  ListCodeInterpretersCommandOutput,
} from "./commands/ListCodeInterpretersCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand";
import { ListGatewayTargetsCommandInput, ListGatewayTargetsCommandOutput } from "./commands/ListGatewayTargetsCommand";
import { ListMemoriesCommandInput, ListMemoriesCommandOutput } from "./commands/ListMemoriesCommand";
import {
  ListOauth2CredentialProvidersCommandInput,
  ListOauth2CredentialProvidersCommandOutput,
} from "./commands/ListOauth2CredentialProvidersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkloadIdentitiesCommandInput,
  ListWorkloadIdentitiesCommandOutput,
} from "./commands/ListWorkloadIdentitiesCommand";
import { SetTokenVaultCMKCommandInput, SetTokenVaultCMKCommandOutput } from "./commands/SetTokenVaultCMKCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAgentRuntimeCommandInput, UpdateAgentRuntimeCommandOutput } from "./commands/UpdateAgentRuntimeCommand";
import {
  UpdateAgentRuntimeEndpointCommandInput,
  UpdateAgentRuntimeEndpointCommandOutput,
} from "./commands/UpdateAgentRuntimeEndpointCommand";
import {
  UpdateApiKeyCredentialProviderCommandInput,
  UpdateApiKeyCredentialProviderCommandOutput,
} from "./commands/UpdateApiKeyCredentialProviderCommand";
import { UpdateGatewayCommandInput, UpdateGatewayCommandOutput } from "./commands/UpdateGatewayCommand";
import {
  UpdateGatewayTargetCommandInput,
  UpdateGatewayTargetCommandOutput,
} from "./commands/UpdateGatewayTargetCommand";
import { UpdateMemoryCommandInput, UpdateMemoryCommandOutput } from "./commands/UpdateMemoryCommand";
import {
  UpdateOauth2CredentialProviderCommandInput,
  UpdateOauth2CredentialProviderCommandOutput,
} from "./commands/UpdateOauth2CredentialProviderCommand";
import {
  UpdateWorkloadIdentityCommandInput,
  UpdateWorkloadIdentityCommandOutput,
} from "./commands/UpdateWorkloadIdentityCommand";
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
  | CreateAgentRuntimeCommandInput
  | CreateAgentRuntimeEndpointCommandInput
  | CreateApiKeyCredentialProviderCommandInput
  | CreateBrowserCommandInput
  | CreateCodeInterpreterCommandInput
  | CreateGatewayCommandInput
  | CreateGatewayTargetCommandInput
  | CreateMemoryCommandInput
  | CreateOauth2CredentialProviderCommandInput
  | CreateWorkloadIdentityCommandInput
  | DeleteAgentRuntimeCommandInput
  | DeleteAgentRuntimeEndpointCommandInput
  | DeleteApiKeyCredentialProviderCommandInput
  | DeleteBrowserCommandInput
  | DeleteCodeInterpreterCommandInput
  | DeleteGatewayCommandInput
  | DeleteGatewayTargetCommandInput
  | DeleteMemoryCommandInput
  | DeleteOauth2CredentialProviderCommandInput
  | DeleteWorkloadIdentityCommandInput
  | GetAgentRuntimeCommandInput
  | GetAgentRuntimeEndpointCommandInput
  | GetApiKeyCredentialProviderCommandInput
  | GetBrowserCommandInput
  | GetCodeInterpreterCommandInput
  | GetGatewayCommandInput
  | GetGatewayTargetCommandInput
  | GetMemoryCommandInput
  | GetOauth2CredentialProviderCommandInput
  | GetTokenVaultCommandInput
  | GetWorkloadIdentityCommandInput
  | ListAgentRuntimeEndpointsCommandInput
  | ListAgentRuntimeVersionsCommandInput
  | ListAgentRuntimesCommandInput
  | ListApiKeyCredentialProvidersCommandInput
  | ListBrowsersCommandInput
  | ListCodeInterpretersCommandInput
  | ListGatewayTargetsCommandInput
  | ListGatewaysCommandInput
  | ListMemoriesCommandInput
  | ListOauth2CredentialProvidersCommandInput
  | ListTagsForResourceCommandInput
  | ListWorkloadIdentitiesCommandInput
  | SetTokenVaultCMKCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAgentRuntimeCommandInput
  | UpdateAgentRuntimeEndpointCommandInput
  | UpdateApiKeyCredentialProviderCommandInput
  | UpdateGatewayCommandInput
  | UpdateGatewayTargetCommandInput
  | UpdateMemoryCommandInput
  | UpdateOauth2CredentialProviderCommandInput
  | UpdateWorkloadIdentityCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateAgentRuntimeCommandOutput
  | CreateAgentRuntimeEndpointCommandOutput
  | CreateApiKeyCredentialProviderCommandOutput
  | CreateBrowserCommandOutput
  | CreateCodeInterpreterCommandOutput
  | CreateGatewayCommandOutput
  | CreateGatewayTargetCommandOutput
  | CreateMemoryCommandOutput
  | CreateOauth2CredentialProviderCommandOutput
  | CreateWorkloadIdentityCommandOutput
  | DeleteAgentRuntimeCommandOutput
  | DeleteAgentRuntimeEndpointCommandOutput
  | DeleteApiKeyCredentialProviderCommandOutput
  | DeleteBrowserCommandOutput
  | DeleteCodeInterpreterCommandOutput
  | DeleteGatewayCommandOutput
  | DeleteGatewayTargetCommandOutput
  | DeleteMemoryCommandOutput
  | DeleteOauth2CredentialProviderCommandOutput
  | DeleteWorkloadIdentityCommandOutput
  | GetAgentRuntimeCommandOutput
  | GetAgentRuntimeEndpointCommandOutput
  | GetApiKeyCredentialProviderCommandOutput
  | GetBrowserCommandOutput
  | GetCodeInterpreterCommandOutput
  | GetGatewayCommandOutput
  | GetGatewayTargetCommandOutput
  | GetMemoryCommandOutput
  | GetOauth2CredentialProviderCommandOutput
  | GetTokenVaultCommandOutput
  | GetWorkloadIdentityCommandOutput
  | ListAgentRuntimeEndpointsCommandOutput
  | ListAgentRuntimeVersionsCommandOutput
  | ListAgentRuntimesCommandOutput
  | ListApiKeyCredentialProvidersCommandOutput
  | ListBrowsersCommandOutput
  | ListCodeInterpretersCommandOutput
  | ListGatewayTargetsCommandOutput
  | ListGatewaysCommandOutput
  | ListMemoriesCommandOutput
  | ListOauth2CredentialProvidersCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorkloadIdentitiesCommandOutput
  | SetTokenVaultCMKCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAgentRuntimeCommandOutput
  | UpdateAgentRuntimeEndpointCommandOutput
  | UpdateApiKeyCredentialProviderCommandOutput
  | UpdateGatewayCommandOutput
  | UpdateGatewayTargetCommandOutput
  | UpdateMemoryCommandOutput
  | UpdateOauth2CredentialProviderCommandOutput
  | UpdateWorkloadIdentityCommandOutput;

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
export type BedrockAgentCoreControlClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of BedrockAgentCoreControlClient class constructor that set the region, credentials and other options.
 */
export interface BedrockAgentCoreControlClientConfig extends BedrockAgentCoreControlClientConfigType {}

/**
 * @public
 */
export type BedrockAgentCoreControlClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of BedrockAgentCoreControlClient class. This is resolved and normalized from the {@link BedrockAgentCoreControlClientConfig | constructor configuration interface}.
 */
export interface BedrockAgentCoreControlClientResolvedConfig extends BedrockAgentCoreControlClientResolvedConfigType {}

/**
 * <note> <p> is in preview release and is subject to change.</p> </note> <p>Welcome to the Amazon Bedrock AgentCore Control plane API reference. Control plane actions configure, create, modify, and monitor Amazon Web Services resources.</p>
 * @public
 */
export class BedrockAgentCoreControlClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  BedrockAgentCoreControlClientResolvedConfig
> {
  /**
   * The resolved configuration of BedrockAgentCoreControlClient class. This is resolved and normalized from the {@link BedrockAgentCoreControlClientConfig | constructor configuration interface}.
   */
  readonly config: BedrockAgentCoreControlClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<BedrockAgentCoreControlClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultBedrockAgentCoreControlHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: BedrockAgentCoreControlClientResolvedConfig) =>
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
