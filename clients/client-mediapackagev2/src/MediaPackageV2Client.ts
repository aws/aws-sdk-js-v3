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
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
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
  defaultMediaPackageV2HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CancelHarvestJobCommandInput, CancelHarvestJobCommandOutput } from "./commands/CancelHarvestJobCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import { CreateChannelGroupCommandInput, CreateChannelGroupCommandOutput } from "./commands/CreateChannelGroupCommand";
import { CreateHarvestJobCommandInput, CreateHarvestJobCommandOutput } from "./commands/CreateHarvestJobCommand";
import {
  CreateOriginEndpointCommandInput,
  CreateOriginEndpointCommandOutput,
} from "./commands/CreateOriginEndpointCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import { DeleteChannelGroupCommandInput, DeleteChannelGroupCommandOutput } from "./commands/DeleteChannelGroupCommand";
import {
  DeleteChannelPolicyCommandInput,
  DeleteChannelPolicyCommandOutput,
} from "./commands/DeleteChannelPolicyCommand";
import {
  DeleteOriginEndpointCommandInput,
  DeleteOriginEndpointCommandOutput,
} from "./commands/DeleteOriginEndpointCommand";
import {
  DeleteOriginEndpointPolicyCommandInput,
  DeleteOriginEndpointPolicyCommandOutput,
} from "./commands/DeleteOriginEndpointPolicyCommand";
import { GetChannelCommandInput, GetChannelCommandOutput } from "./commands/GetChannelCommand";
import { GetChannelGroupCommandInput, GetChannelGroupCommandOutput } from "./commands/GetChannelGroupCommand";
import { GetChannelPolicyCommandInput, GetChannelPolicyCommandOutput } from "./commands/GetChannelPolicyCommand";
import { GetHarvestJobCommandInput, GetHarvestJobCommandOutput } from "./commands/GetHarvestJobCommand";
import { GetOriginEndpointCommandInput, GetOriginEndpointCommandOutput } from "./commands/GetOriginEndpointCommand";
import {
  GetOriginEndpointPolicyCommandInput,
  GetOriginEndpointPolicyCommandOutput,
} from "./commands/GetOriginEndpointPolicyCommand";
import { ListChannelGroupsCommandInput, ListChannelGroupsCommandOutput } from "./commands/ListChannelGroupsCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import { ListHarvestJobsCommandInput, ListHarvestJobsCommandOutput } from "./commands/ListHarvestJobsCommand";
import {
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput,
} from "./commands/ListOriginEndpointsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutChannelPolicyCommandInput, PutChannelPolicyCommandOutput } from "./commands/PutChannelPolicyCommand";
import {
  PutOriginEndpointPolicyCommandInput,
  PutOriginEndpointPolicyCommandOutput,
} from "./commands/PutOriginEndpointPolicyCommand";
import { ResetChannelStateCommandInput, ResetChannelStateCommandOutput } from "./commands/ResetChannelStateCommand";
import {
  ResetOriginEndpointStateCommandInput,
  ResetOriginEndpointStateCommandOutput,
} from "./commands/ResetOriginEndpointStateCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import { UpdateChannelGroupCommandInput, UpdateChannelGroupCommandOutput } from "./commands/UpdateChannelGroupCommand";
import {
  UpdateOriginEndpointCommandInput,
  UpdateOriginEndpointCommandOutput,
} from "./commands/UpdateOriginEndpointCommand";
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
  | CancelHarvestJobCommandInput
  | CreateChannelCommandInput
  | CreateChannelGroupCommandInput
  | CreateHarvestJobCommandInput
  | CreateOriginEndpointCommandInput
  | DeleteChannelCommandInput
  | DeleteChannelGroupCommandInput
  | DeleteChannelPolicyCommandInput
  | DeleteOriginEndpointCommandInput
  | DeleteOriginEndpointPolicyCommandInput
  | GetChannelCommandInput
  | GetChannelGroupCommandInput
  | GetChannelPolicyCommandInput
  | GetHarvestJobCommandInput
  | GetOriginEndpointCommandInput
  | GetOriginEndpointPolicyCommandInput
  | ListChannelGroupsCommandInput
  | ListChannelsCommandInput
  | ListHarvestJobsCommandInput
  | ListOriginEndpointsCommandInput
  | ListTagsForResourceCommandInput
  | PutChannelPolicyCommandInput
  | PutOriginEndpointPolicyCommandInput
  | ResetChannelStateCommandInput
  | ResetOriginEndpointStateCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateChannelCommandInput
  | UpdateChannelGroupCommandInput
  | UpdateOriginEndpointCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CancelHarvestJobCommandOutput
  | CreateChannelCommandOutput
  | CreateChannelGroupCommandOutput
  | CreateHarvestJobCommandOutput
  | CreateOriginEndpointCommandOutput
  | DeleteChannelCommandOutput
  | DeleteChannelGroupCommandOutput
  | DeleteChannelPolicyCommandOutput
  | DeleteOriginEndpointCommandOutput
  | DeleteOriginEndpointPolicyCommandOutput
  | GetChannelCommandOutput
  | GetChannelGroupCommandOutput
  | GetChannelPolicyCommandOutput
  | GetHarvestJobCommandOutput
  | GetOriginEndpointCommandOutput
  | GetOriginEndpointPolicyCommandOutput
  | ListChannelGroupsCommandOutput
  | ListChannelsCommandOutput
  | ListHarvestJobsCommandOutput
  | ListOriginEndpointsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutChannelPolicyCommandOutput
  | PutOriginEndpointPolicyCommandOutput
  | ResetChannelStateCommandOutput
  | ResetOriginEndpointStateCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateChannelCommandOutput
  | UpdateChannelGroupCommandOutput
  | UpdateOriginEndpointCommandOutput;

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
export type MediaPackageV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of MediaPackageV2Client class constructor that set the region, credentials and other options.
 */
export interface MediaPackageV2ClientConfig extends MediaPackageV2ClientConfigType {}

/**
 * @public
 */
export type MediaPackageV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of MediaPackageV2Client class. This is resolved and normalized from the {@link MediaPackageV2ClientConfig | constructor configuration interface}.
 */
export interface MediaPackageV2ClientResolvedConfig extends MediaPackageV2ClientResolvedConfigType {}

/**
 * <note> <p>This guide is intended for creating AWS Elemental MediaPackage resources in MediaPackage Version 2 (v2) starting from May 2023. To get started with MediaPackage v2, create your MediaPackage resources. There isn't an automated process to migrate your resources from MediaPackage v1 to MediaPackage v2. </p> <p>The names of the entities that you use to access this API, like URLs and ARNs, all have the versioning information added, like "v2", to distinguish from the prior version. If you used MediaPackage prior to this release, you can't use the MediaPackage v2 CLI or the MediaPackage v2 API to access any MediaPackage v1 resources.</p> <p>If you created resources in MediaPackage v1, use video on demand (VOD) workflows, and aren't looking to migrate to MediaPackage v2 yet, see the <a href="https://docs.aws.amazon.com/mediapackage/latest/apireference/what-is.html">MediaPackage v1 Live API Reference</a>.</p> </note> <p>This is the AWS Elemental MediaPackage v2 Live REST API Reference. It describes all the MediaPackage API operations for live content in detail, and provides sample requests, responses, and errors for the supported web services protocols.</p> <p>We assume that you have the IAM permissions that you need to use MediaPackage via the REST API. We also assume that you are familiar with the features and operations of MediaPackage, as described in the AWS Elemental MediaPackage User Guide.</p>
 * @public
 */
export class MediaPackageV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MediaPackageV2ClientResolvedConfig
> {
  /**
   * The resolved configuration of MediaPackageV2Client class. This is resolved and normalized from the {@link MediaPackageV2ClientConfig | constructor configuration interface}.
   */
  readonly config: MediaPackageV2ClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<MediaPackageV2ClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultMediaPackageV2HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: MediaPackageV2ClientResolvedConfig) =>
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
