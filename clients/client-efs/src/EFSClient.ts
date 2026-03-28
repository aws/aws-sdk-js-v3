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
  defaultEFSHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateAccessPointCommandInput,
  CreateAccessPointCommandOutput,
} from "./commands/CreateAccessPointCommand";
import type { CreateFileSystemCommandInput, CreateFileSystemCommandOutput } from "./commands/CreateFileSystemCommand";
import type {
  CreateMountTargetCommandInput,
  CreateMountTargetCommandOutput,
} from "./commands/CreateMountTargetCommand";
import type {
  CreateReplicationConfigurationCommandInput,
  CreateReplicationConfigurationCommandOutput,
} from "./commands/CreateReplicationConfigurationCommand";
import type { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import type {
  DeleteAccessPointCommandInput,
  DeleteAccessPointCommandOutput,
} from "./commands/DeleteAccessPointCommand";
import type { DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput } from "./commands/DeleteFileSystemCommand";
import type {
  DeleteFileSystemPolicyCommandInput,
  DeleteFileSystemPolicyCommandOutput,
} from "./commands/DeleteFileSystemPolicyCommand";
import type {
  DeleteMountTargetCommandInput,
  DeleteMountTargetCommandOutput,
} from "./commands/DeleteMountTargetCommand";
import type {
  DeleteReplicationConfigurationCommandInput,
  DeleteReplicationConfigurationCommandOutput,
} from "./commands/DeleteReplicationConfigurationCommand";
import type { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import type {
  DescribeAccessPointsCommandInput,
  DescribeAccessPointsCommandOutput,
} from "./commands/DescribeAccessPointsCommand";
import type {
  DescribeAccountPreferencesCommandInput,
  DescribeAccountPreferencesCommandOutput,
} from "./commands/DescribeAccountPreferencesCommand";
import type {
  DescribeBackupPolicyCommandInput,
  DescribeBackupPolicyCommandOutput,
} from "./commands/DescribeBackupPolicyCommand";
import type {
  DescribeFileSystemPolicyCommandInput,
  DescribeFileSystemPolicyCommandOutput,
} from "./commands/DescribeFileSystemPolicyCommand";
import type {
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "./commands/DescribeFileSystemsCommand";
import type {
  DescribeLifecycleConfigurationCommandInput,
  DescribeLifecycleConfigurationCommandOutput,
} from "./commands/DescribeLifecycleConfigurationCommand";
import type {
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput,
} from "./commands/DescribeMountTargetsCommand";
import type {
  DescribeMountTargetSecurityGroupsCommandInput,
  DescribeMountTargetSecurityGroupsCommandOutput,
} from "./commands/DescribeMountTargetSecurityGroupsCommand";
import type {
  DescribeReplicationConfigurationsCommandInput,
  DescribeReplicationConfigurationsCommandOutput,
} from "./commands/DescribeReplicationConfigurationsCommand";
import type { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ModifyMountTargetSecurityGroupsCommandInput,
  ModifyMountTargetSecurityGroupsCommandOutput,
} from "./commands/ModifyMountTargetSecurityGroupsCommand";
import type {
  PutAccountPreferencesCommandInput,
  PutAccountPreferencesCommandOutput,
} from "./commands/PutAccountPreferencesCommand";
import type { PutBackupPolicyCommandInput, PutBackupPolicyCommandOutput } from "./commands/PutBackupPolicyCommand";
import type {
  PutFileSystemPolicyCommandInput,
  PutFileSystemPolicyCommandOutput,
} from "./commands/PutFileSystemPolicyCommand";
import type {
  PutLifecycleConfigurationCommandInput,
  PutLifecycleConfigurationCommandOutput,
} from "./commands/PutLifecycleConfigurationCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput } from "./commands/UpdateFileSystemCommand";
import type {
  UpdateFileSystemProtectionCommandInput,
  UpdateFileSystemProtectionCommandOutput,
} from "./commands/UpdateFileSystemProtectionCommand";
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
  | CreateAccessPointCommandInput
  | CreateFileSystemCommandInput
  | CreateMountTargetCommandInput
  | CreateReplicationConfigurationCommandInput
  | CreateTagsCommandInput
  | DeleteAccessPointCommandInput
  | DeleteFileSystemCommandInput
  | DeleteFileSystemPolicyCommandInput
  | DeleteMountTargetCommandInput
  | DeleteReplicationConfigurationCommandInput
  | DeleteTagsCommandInput
  | DescribeAccessPointsCommandInput
  | DescribeAccountPreferencesCommandInput
  | DescribeBackupPolicyCommandInput
  | DescribeFileSystemPolicyCommandInput
  | DescribeFileSystemsCommandInput
  | DescribeLifecycleConfigurationCommandInput
  | DescribeMountTargetSecurityGroupsCommandInput
  | DescribeMountTargetsCommandInput
  | DescribeReplicationConfigurationsCommandInput
  | DescribeTagsCommandInput
  | ListTagsForResourceCommandInput
  | ModifyMountTargetSecurityGroupsCommandInput
  | PutAccountPreferencesCommandInput
  | PutBackupPolicyCommandInput
  | PutFileSystemPolicyCommandInput
  | PutLifecycleConfigurationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateFileSystemCommandInput
  | UpdateFileSystemProtectionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateAccessPointCommandOutput
  | CreateFileSystemCommandOutput
  | CreateMountTargetCommandOutput
  | CreateReplicationConfigurationCommandOutput
  | CreateTagsCommandOutput
  | DeleteAccessPointCommandOutput
  | DeleteFileSystemCommandOutput
  | DeleteFileSystemPolicyCommandOutput
  | DeleteMountTargetCommandOutput
  | DeleteReplicationConfigurationCommandOutput
  | DeleteTagsCommandOutput
  | DescribeAccessPointsCommandOutput
  | DescribeAccountPreferencesCommandOutput
  | DescribeBackupPolicyCommandOutput
  | DescribeFileSystemPolicyCommandOutput
  | DescribeFileSystemsCommandOutput
  | DescribeLifecycleConfigurationCommandOutput
  | DescribeMountTargetSecurityGroupsCommandOutput
  | DescribeMountTargetsCommandOutput
  | DescribeReplicationConfigurationsCommandOutput
  | DescribeTagsCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyMountTargetSecurityGroupsCommandOutput
  | PutAccountPreferencesCommandOutput
  | PutBackupPolicyCommandOutput
  | PutFileSystemPolicyCommandOutput
  | PutLifecycleConfigurationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateFileSystemCommandOutput
  | UpdateFileSystemProtectionCommandOutput;

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
export type EFSClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of EFSClient class constructor that set the region, credentials and other options.
 */
export interface EFSClientConfig extends EFSClientConfigType {}

/**
 * @public
 */
export type EFSClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of EFSClient class. This is resolved and normalized from the {@link EFSClientConfig | constructor configuration interface}.
 */
export interface EFSClientResolvedConfig extends EFSClientResolvedConfigType {}

/**
 * <fullname>Amazon Elastic File System</fullname>
 *          <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for
 *       use with Amazon EC2 Linux and Mac instances in the Amazon Web Services Cloud. With
 *         Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you
 *       add and remove files, so that your applications have the storage they need, when they need it.
 *       For more information, see the <a href="https://docs.aws.amazon.com/efs/latest/ug/api-reference.html">Amazon Elastic File System API Reference</a> and
 *       the <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">Amazon Elastic File System
 *         User Guide</a>.</p>
 * @public
 */
export class EFSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EFSClientResolvedConfig
> {
  /**
   * The resolved configuration of EFSClient class. This is resolved and normalized from the {@link EFSClientConfig | constructor configuration interface}.
   */
  readonly config: EFSClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<EFSClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultEFSHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: EFSClientResolvedConfig) =>
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
