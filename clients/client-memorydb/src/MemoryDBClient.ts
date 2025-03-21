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
  defaultMemoryDBHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { BatchUpdateClusterCommandInput, BatchUpdateClusterCommandOutput } from "./commands/BatchUpdateClusterCommand";
import { CopySnapshotCommandInput, CopySnapshotCommandOutput } from "./commands/CopySnapshotCommand";
import { CreateACLCommandInput, CreateACLCommandOutput } from "./commands/CreateACLCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import {
  CreateMultiRegionClusterCommandInput,
  CreateMultiRegionClusterCommandOutput,
} from "./commands/CreateMultiRegionClusterCommand";
import {
  CreateParameterGroupCommandInput,
  CreateParameterGroupCommandOutput,
} from "./commands/CreateParameterGroupCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import { CreateSubnetGroupCommandInput, CreateSubnetGroupCommandOutput } from "./commands/CreateSubnetGroupCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteACLCommandInput, DeleteACLCommandOutput } from "./commands/DeleteACLCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import {
  DeleteMultiRegionClusterCommandInput,
  DeleteMultiRegionClusterCommandOutput,
} from "./commands/DeleteMultiRegionClusterCommand";
import {
  DeleteParameterGroupCommandInput,
  DeleteParameterGroupCommandOutput,
} from "./commands/DeleteParameterGroupCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand";
import { DeleteSubnetGroupCommandInput, DeleteSubnetGroupCommandOutput } from "./commands/DeleteSubnetGroupCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DescribeACLsCommandInput, DescribeACLsCommandOutput } from "./commands/DescribeACLsCommand";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "./commands/DescribeClustersCommand";
import {
  DescribeEngineVersionsCommandInput,
  DescribeEngineVersionsCommandOutput,
} from "./commands/DescribeEngineVersionsCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import {
  DescribeMultiRegionClustersCommandInput,
  DescribeMultiRegionClustersCommandOutput,
} from "./commands/DescribeMultiRegionClustersCommand";
import {
  DescribeParameterGroupsCommandInput,
  DescribeParameterGroupsCommandOutput,
} from "./commands/DescribeParameterGroupsCommand";
import { DescribeParametersCommandInput, DescribeParametersCommandOutput } from "./commands/DescribeParametersCommand";
import {
  DescribeReservedNodesCommandInput,
  DescribeReservedNodesCommandOutput,
} from "./commands/DescribeReservedNodesCommand";
import {
  DescribeReservedNodesOfferingsCommandInput,
  DescribeReservedNodesOfferingsCommandOutput,
} from "./commands/DescribeReservedNodesOfferingsCommand";
import {
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
} from "./commands/DescribeServiceUpdatesCommand";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "./commands/DescribeSnapshotsCommand";
import {
  DescribeSubnetGroupsCommandInput,
  DescribeSubnetGroupsCommandOutput,
} from "./commands/DescribeSubnetGroupsCommand";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "./commands/DescribeUsersCommand";
import { FailoverShardCommandInput, FailoverShardCommandOutput } from "./commands/FailoverShardCommand";
import {
  ListAllowedMultiRegionClusterUpdatesCommandInput,
  ListAllowedMultiRegionClusterUpdatesCommandOutput,
} from "./commands/ListAllowedMultiRegionClusterUpdatesCommand";
import {
  ListAllowedNodeTypeUpdatesCommandInput,
  ListAllowedNodeTypeUpdatesCommandOutput,
} from "./commands/ListAllowedNodeTypeUpdatesCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  PurchaseReservedNodesOfferingCommandInput,
  PurchaseReservedNodesOfferingCommandOutput,
} from "./commands/PurchaseReservedNodesOfferingCommand";
import {
  ResetParameterGroupCommandInput,
  ResetParameterGroupCommandOutput,
} from "./commands/ResetParameterGroupCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateACLCommandInput, UpdateACLCommandOutput } from "./commands/UpdateACLCommand";
import { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "./commands/UpdateClusterCommand";
import {
  UpdateMultiRegionClusterCommandInput,
  UpdateMultiRegionClusterCommandOutput,
} from "./commands/UpdateMultiRegionClusterCommand";
import {
  UpdateParameterGroupCommandInput,
  UpdateParameterGroupCommandOutput,
} from "./commands/UpdateParameterGroupCommand";
import { UpdateSubnetGroupCommandInput, UpdateSubnetGroupCommandOutput } from "./commands/UpdateSubnetGroupCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
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
  | BatchUpdateClusterCommandInput
  | CopySnapshotCommandInput
  | CreateACLCommandInput
  | CreateClusterCommandInput
  | CreateMultiRegionClusterCommandInput
  | CreateParameterGroupCommandInput
  | CreateSnapshotCommandInput
  | CreateSubnetGroupCommandInput
  | CreateUserCommandInput
  | DeleteACLCommandInput
  | DeleteClusterCommandInput
  | DeleteMultiRegionClusterCommandInput
  | DeleteParameterGroupCommandInput
  | DeleteSnapshotCommandInput
  | DeleteSubnetGroupCommandInput
  | DeleteUserCommandInput
  | DescribeACLsCommandInput
  | DescribeClustersCommandInput
  | DescribeEngineVersionsCommandInput
  | DescribeEventsCommandInput
  | DescribeMultiRegionClustersCommandInput
  | DescribeParameterGroupsCommandInput
  | DescribeParametersCommandInput
  | DescribeReservedNodesCommandInput
  | DescribeReservedNodesOfferingsCommandInput
  | DescribeServiceUpdatesCommandInput
  | DescribeSnapshotsCommandInput
  | DescribeSubnetGroupsCommandInput
  | DescribeUsersCommandInput
  | FailoverShardCommandInput
  | ListAllowedMultiRegionClusterUpdatesCommandInput
  | ListAllowedNodeTypeUpdatesCommandInput
  | ListTagsCommandInput
  | PurchaseReservedNodesOfferingCommandInput
  | ResetParameterGroupCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateACLCommandInput
  | UpdateClusterCommandInput
  | UpdateMultiRegionClusterCommandInput
  | UpdateParameterGroupCommandInput
  | UpdateSubnetGroupCommandInput
  | UpdateUserCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchUpdateClusterCommandOutput
  | CopySnapshotCommandOutput
  | CreateACLCommandOutput
  | CreateClusterCommandOutput
  | CreateMultiRegionClusterCommandOutput
  | CreateParameterGroupCommandOutput
  | CreateSnapshotCommandOutput
  | CreateSubnetGroupCommandOutput
  | CreateUserCommandOutput
  | DeleteACLCommandOutput
  | DeleteClusterCommandOutput
  | DeleteMultiRegionClusterCommandOutput
  | DeleteParameterGroupCommandOutput
  | DeleteSnapshotCommandOutput
  | DeleteSubnetGroupCommandOutput
  | DeleteUserCommandOutput
  | DescribeACLsCommandOutput
  | DescribeClustersCommandOutput
  | DescribeEngineVersionsCommandOutput
  | DescribeEventsCommandOutput
  | DescribeMultiRegionClustersCommandOutput
  | DescribeParameterGroupsCommandOutput
  | DescribeParametersCommandOutput
  | DescribeReservedNodesCommandOutput
  | DescribeReservedNodesOfferingsCommandOutput
  | DescribeServiceUpdatesCommandOutput
  | DescribeSnapshotsCommandOutput
  | DescribeSubnetGroupsCommandOutput
  | DescribeUsersCommandOutput
  | FailoverShardCommandOutput
  | ListAllowedMultiRegionClusterUpdatesCommandOutput
  | ListAllowedNodeTypeUpdatesCommandOutput
  | ListTagsCommandOutput
  | PurchaseReservedNodesOfferingCommandOutput
  | ResetParameterGroupCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateACLCommandOutput
  | UpdateClusterCommandOutput
  | UpdateMultiRegionClusterCommandOutput
  | UpdateParameterGroupCommandOutput
  | UpdateSubnetGroupCommandOutput
  | UpdateUserCommandOutput;

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
export type MemoryDBClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of MemoryDBClient class constructor that set the region, credentials and other options.
 */
export interface MemoryDBClientConfig extends MemoryDBClientConfigType {}

/**
 * @public
 */
export type MemoryDBClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of MemoryDBClient class. This is resolved and normalized from the {@link MemoryDBClientConfig | constructor configuration interface}.
 */
export interface MemoryDBClientResolvedConfig extends MemoryDBClientResolvedConfigType {}

/**
 * <p>MemoryDB is a fully managed, Redis OSS-compatible, in-memory database that delivers ultra-fast performance and Multi-AZ durability for modern applications built using microservices architectures.
 *
 *        MemoryDB stores the entire database in-memory, enabling low latency and high throughput data access. It is compatible with Redis OSS, a popular open source data store, enabling you to leverage Redis OSS’ flexible and friendly data structures, APIs, and commands.</p>
 * @public
 */
export class MemoryDBClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MemoryDBClientResolvedConfig
> {
  /**
   * The resolved configuration of MemoryDBClient class. This is resolved and normalized from the {@link MemoryDBClientConfig | constructor configuration interface}.
   */
  readonly config: MemoryDBClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<MemoryDBClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6, { client: () => this });
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
        httpAuthSchemeParametersProvider: defaultMemoryDBHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: MemoryDBClientResolvedConfig) =>
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
