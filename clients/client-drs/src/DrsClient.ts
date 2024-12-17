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
  defaultDrsHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateSourceNetworkStackCommandInput,
  AssociateSourceNetworkStackCommandOutput,
} from "./commands/AssociateSourceNetworkStackCommand";
import {
  CreateExtendedSourceServerCommandInput,
  CreateExtendedSourceServerCommandOutput,
} from "./commands/CreateExtendedSourceServerCommand";
import {
  CreateLaunchConfigurationTemplateCommandInput,
  CreateLaunchConfigurationTemplateCommandOutput,
} from "./commands/CreateLaunchConfigurationTemplateCommand";
import {
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "./commands/CreateReplicationConfigurationTemplateCommand";
import {
  CreateSourceNetworkCommandInput,
  CreateSourceNetworkCommandOutput,
} from "./commands/CreateSourceNetworkCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import { DeleteLaunchActionCommandInput, DeleteLaunchActionCommandOutput } from "./commands/DeleteLaunchActionCommand";
import {
  DeleteLaunchConfigurationTemplateCommandInput,
  DeleteLaunchConfigurationTemplateCommandOutput,
} from "./commands/DeleteLaunchConfigurationTemplateCommand";
import {
  DeleteRecoveryInstanceCommandInput,
  DeleteRecoveryInstanceCommandOutput,
} from "./commands/DeleteRecoveryInstanceCommand";
import {
  DeleteReplicationConfigurationTemplateCommandInput,
  DeleteReplicationConfigurationTemplateCommandOutput,
} from "./commands/DeleteReplicationConfigurationTemplateCommand";
import {
  DeleteSourceNetworkCommandInput,
  DeleteSourceNetworkCommandOutput,
} from "./commands/DeleteSourceNetworkCommand";
import { DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput } from "./commands/DeleteSourceServerCommand";
import {
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
} from "./commands/DescribeJobLogItemsCommand";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "./commands/DescribeJobsCommand";
import {
  DescribeLaunchConfigurationTemplatesCommandInput,
  DescribeLaunchConfigurationTemplatesCommandOutput,
} from "./commands/DescribeLaunchConfigurationTemplatesCommand";
import {
  DescribeRecoveryInstancesCommandInput,
  DescribeRecoveryInstancesCommandOutput,
} from "./commands/DescribeRecoveryInstancesCommand";
import {
  DescribeRecoverySnapshotsCommandInput,
  DescribeRecoverySnapshotsCommandOutput,
} from "./commands/DescribeRecoverySnapshotsCommand";
import {
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "./commands/DescribeReplicationConfigurationTemplatesCommand";
import {
  DescribeSourceNetworksCommandInput,
  DescribeSourceNetworksCommandOutput,
} from "./commands/DescribeSourceNetworksCommand";
import {
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "./commands/DescribeSourceServersCommand";
import {
  DisconnectRecoveryInstanceCommandInput,
  DisconnectRecoveryInstanceCommandOutput,
} from "./commands/DisconnectRecoveryInstanceCommand";
import {
  DisconnectSourceServerCommandInput,
  DisconnectSourceServerCommandOutput,
} from "./commands/DisconnectSourceServerCommand";
import {
  ExportSourceNetworkCfnTemplateCommandInput,
  ExportSourceNetworkCfnTemplateCommandOutput,
} from "./commands/ExportSourceNetworkCfnTemplateCommand";
import {
  GetFailbackReplicationConfigurationCommandInput,
  GetFailbackReplicationConfigurationCommandOutput,
} from "./commands/GetFailbackReplicationConfigurationCommand";
import {
  GetLaunchConfigurationCommandInput,
  GetLaunchConfigurationCommandOutput,
} from "./commands/GetLaunchConfigurationCommand";
import {
  GetReplicationConfigurationCommandInput,
  GetReplicationConfigurationCommandOutput,
} from "./commands/GetReplicationConfigurationCommand";
import { InitializeServiceCommandInput, InitializeServiceCommandOutput } from "./commands/InitializeServiceCommand";
import {
  ListExtensibleSourceServersCommandInput,
  ListExtensibleSourceServersCommandOutput,
} from "./commands/ListExtensibleSourceServersCommand";
import { ListLaunchActionsCommandInput, ListLaunchActionsCommandOutput } from "./commands/ListLaunchActionsCommand";
import {
  ListStagingAccountsCommandInput,
  ListStagingAccountsCommandOutput,
} from "./commands/ListStagingAccountsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutLaunchActionCommandInput, PutLaunchActionCommandOutput } from "./commands/PutLaunchActionCommand";
import {
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "./commands/RetryDataReplicationCommand";
import { ReverseReplicationCommandInput, ReverseReplicationCommandOutput } from "./commands/ReverseReplicationCommand";
import {
  StartFailbackLaunchCommandInput,
  StartFailbackLaunchCommandOutput,
} from "./commands/StartFailbackLaunchCommand";
import { StartRecoveryCommandInput, StartRecoveryCommandOutput } from "./commands/StartRecoveryCommand";
import { StartReplicationCommandInput, StartReplicationCommandOutput } from "./commands/StartReplicationCommand";
import {
  StartSourceNetworkRecoveryCommandInput,
  StartSourceNetworkRecoveryCommandOutput,
} from "./commands/StartSourceNetworkRecoveryCommand";
import {
  StartSourceNetworkReplicationCommandInput,
  StartSourceNetworkReplicationCommandOutput,
} from "./commands/StartSourceNetworkReplicationCommand";
import { StopFailbackCommandInput, StopFailbackCommandOutput } from "./commands/StopFailbackCommand";
import { StopReplicationCommandInput, StopReplicationCommandOutput } from "./commands/StopReplicationCommand";
import {
  StopSourceNetworkReplicationCommandInput,
  StopSourceNetworkReplicationCommandOutput,
} from "./commands/StopSourceNetworkReplicationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateRecoveryInstancesCommandInput,
  TerminateRecoveryInstancesCommandOutput,
} from "./commands/TerminateRecoveryInstancesCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateFailbackReplicationConfigurationCommandInput,
  UpdateFailbackReplicationConfigurationCommandOutput,
} from "./commands/UpdateFailbackReplicationConfigurationCommand";
import {
  UpdateLaunchConfigurationCommandInput,
  UpdateLaunchConfigurationCommandOutput,
} from "./commands/UpdateLaunchConfigurationCommand";
import {
  UpdateLaunchConfigurationTemplateCommandInput,
  UpdateLaunchConfigurationTemplateCommandOutput,
} from "./commands/UpdateLaunchConfigurationTemplateCommand";
import {
  UpdateReplicationConfigurationCommandInput,
  UpdateReplicationConfigurationCommandOutput,
} from "./commands/UpdateReplicationConfigurationCommand";
import {
  UpdateReplicationConfigurationTemplateCommandInput,
  UpdateReplicationConfigurationTemplateCommandOutput,
} from "./commands/UpdateReplicationConfigurationTemplateCommand";
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
  | AssociateSourceNetworkStackCommandInput
  | CreateExtendedSourceServerCommandInput
  | CreateLaunchConfigurationTemplateCommandInput
  | CreateReplicationConfigurationTemplateCommandInput
  | CreateSourceNetworkCommandInput
  | DeleteJobCommandInput
  | DeleteLaunchActionCommandInput
  | DeleteLaunchConfigurationTemplateCommandInput
  | DeleteRecoveryInstanceCommandInput
  | DeleteReplicationConfigurationTemplateCommandInput
  | DeleteSourceNetworkCommandInput
  | DeleteSourceServerCommandInput
  | DescribeJobLogItemsCommandInput
  | DescribeJobsCommandInput
  | DescribeLaunchConfigurationTemplatesCommandInput
  | DescribeRecoveryInstancesCommandInput
  | DescribeRecoverySnapshotsCommandInput
  | DescribeReplicationConfigurationTemplatesCommandInput
  | DescribeSourceNetworksCommandInput
  | DescribeSourceServersCommandInput
  | DisconnectRecoveryInstanceCommandInput
  | DisconnectSourceServerCommandInput
  | ExportSourceNetworkCfnTemplateCommandInput
  | GetFailbackReplicationConfigurationCommandInput
  | GetLaunchConfigurationCommandInput
  | GetReplicationConfigurationCommandInput
  | InitializeServiceCommandInput
  | ListExtensibleSourceServersCommandInput
  | ListLaunchActionsCommandInput
  | ListStagingAccountsCommandInput
  | ListTagsForResourceCommandInput
  | PutLaunchActionCommandInput
  | RetryDataReplicationCommandInput
  | ReverseReplicationCommandInput
  | StartFailbackLaunchCommandInput
  | StartRecoveryCommandInput
  | StartReplicationCommandInput
  | StartSourceNetworkRecoveryCommandInput
  | StartSourceNetworkReplicationCommandInput
  | StopFailbackCommandInput
  | StopReplicationCommandInput
  | StopSourceNetworkReplicationCommandInput
  | TagResourceCommandInput
  | TerminateRecoveryInstancesCommandInput
  | UntagResourceCommandInput
  | UpdateFailbackReplicationConfigurationCommandInput
  | UpdateLaunchConfigurationCommandInput
  | UpdateLaunchConfigurationTemplateCommandInput
  | UpdateReplicationConfigurationCommandInput
  | UpdateReplicationConfigurationTemplateCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateSourceNetworkStackCommandOutput
  | CreateExtendedSourceServerCommandOutput
  | CreateLaunchConfigurationTemplateCommandOutput
  | CreateReplicationConfigurationTemplateCommandOutput
  | CreateSourceNetworkCommandOutput
  | DeleteJobCommandOutput
  | DeleteLaunchActionCommandOutput
  | DeleteLaunchConfigurationTemplateCommandOutput
  | DeleteRecoveryInstanceCommandOutput
  | DeleteReplicationConfigurationTemplateCommandOutput
  | DeleteSourceNetworkCommandOutput
  | DeleteSourceServerCommandOutput
  | DescribeJobLogItemsCommandOutput
  | DescribeJobsCommandOutput
  | DescribeLaunchConfigurationTemplatesCommandOutput
  | DescribeRecoveryInstancesCommandOutput
  | DescribeRecoverySnapshotsCommandOutput
  | DescribeReplicationConfigurationTemplatesCommandOutput
  | DescribeSourceNetworksCommandOutput
  | DescribeSourceServersCommandOutput
  | DisconnectRecoveryInstanceCommandOutput
  | DisconnectSourceServerCommandOutput
  | ExportSourceNetworkCfnTemplateCommandOutput
  | GetFailbackReplicationConfigurationCommandOutput
  | GetLaunchConfigurationCommandOutput
  | GetReplicationConfigurationCommandOutput
  | InitializeServiceCommandOutput
  | ListExtensibleSourceServersCommandOutput
  | ListLaunchActionsCommandOutput
  | ListStagingAccountsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutLaunchActionCommandOutput
  | RetryDataReplicationCommandOutput
  | ReverseReplicationCommandOutput
  | StartFailbackLaunchCommandOutput
  | StartRecoveryCommandOutput
  | StartReplicationCommandOutput
  | StartSourceNetworkRecoveryCommandOutput
  | StartSourceNetworkReplicationCommandOutput
  | StopFailbackCommandOutput
  | StopReplicationCommandOutput
  | StopSourceNetworkReplicationCommandOutput
  | TagResourceCommandOutput
  | TerminateRecoveryInstancesCommandOutput
  | UntagResourceCommandOutput
  | UpdateFailbackReplicationConfigurationCommandOutput
  | UpdateLaunchConfigurationCommandOutput
  | UpdateLaunchConfigurationTemplateCommandOutput
  | UpdateReplicationConfigurationCommandOutput
  | UpdateReplicationConfigurationTemplateCommandOutput;

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
export type DrsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of DrsClient class constructor that set the region, credentials and other options.
 */
export interface DrsClientConfig extends DrsClientConfigType {}

/**
 * @public
 */
export type DrsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of DrsClient class. This is resolved and normalized from the {@link DrsClientConfig | constructor configuration interface}.
 */
export interface DrsClientResolvedConfig extends DrsClientResolvedConfigType {}

/**
 * <p>AWS Elastic Disaster Recovery Service.</p>
 * @public
 */
export class DrsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DrsClientResolvedConfig
> {
  /**
   * The resolved configuration of DrsClient class. This is resolved and normalized from the {@link DrsClientConfig | constructor configuration interface}.
   */
  readonly config: DrsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<DrsClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultDrsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: DrsClientResolvedConfig) =>
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
