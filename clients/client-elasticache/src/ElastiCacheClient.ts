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
  defaultElastiCacheHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import {
  AuthorizeCacheSecurityGroupIngressCommandInput,
  AuthorizeCacheSecurityGroupIngressCommandOutput,
} from "./commands/AuthorizeCacheSecurityGroupIngressCommand";
import {
  BatchApplyUpdateActionCommandInput,
  BatchApplyUpdateActionCommandOutput,
} from "./commands/BatchApplyUpdateActionCommand";
import {
  BatchStopUpdateActionCommandInput,
  BatchStopUpdateActionCommandOutput,
} from "./commands/BatchStopUpdateActionCommand";
import { CompleteMigrationCommandInput, CompleteMigrationCommandOutput } from "./commands/CompleteMigrationCommand";
import {
  CopyServerlessCacheSnapshotCommandInput,
  CopyServerlessCacheSnapshotCommandOutput,
} from "./commands/CopyServerlessCacheSnapshotCommand";
import { CopySnapshotCommandInput, CopySnapshotCommandOutput } from "./commands/CopySnapshotCommand";
import { CreateCacheClusterCommandInput, CreateCacheClusterCommandOutput } from "./commands/CreateCacheClusterCommand";
import {
  CreateCacheParameterGroupCommandInput,
  CreateCacheParameterGroupCommandOutput,
} from "./commands/CreateCacheParameterGroupCommand";
import {
  CreateCacheSecurityGroupCommandInput,
  CreateCacheSecurityGroupCommandOutput,
} from "./commands/CreateCacheSecurityGroupCommand";
import {
  CreateCacheSubnetGroupCommandInput,
  CreateCacheSubnetGroupCommandOutput,
} from "./commands/CreateCacheSubnetGroupCommand";
import {
  CreateGlobalReplicationGroupCommandInput,
  CreateGlobalReplicationGroupCommandOutput,
} from "./commands/CreateGlobalReplicationGroupCommand";
import {
  CreateReplicationGroupCommandInput,
  CreateReplicationGroupCommandOutput,
} from "./commands/CreateReplicationGroupCommand";
import {
  CreateServerlessCacheCommandInput,
  CreateServerlessCacheCommandOutput,
} from "./commands/CreateServerlessCacheCommand";
import {
  CreateServerlessCacheSnapshotCommandInput,
  CreateServerlessCacheSnapshotCommandOutput,
} from "./commands/CreateServerlessCacheSnapshotCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { CreateUserGroupCommandInput, CreateUserGroupCommandOutput } from "./commands/CreateUserGroupCommand";
import {
  DecreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
} from "./commands/DecreaseNodeGroupsInGlobalReplicationGroupCommand";
import {
  DecreaseReplicaCountCommandInput,
  DecreaseReplicaCountCommandOutput,
} from "./commands/DecreaseReplicaCountCommand";
import { DeleteCacheClusterCommandInput, DeleteCacheClusterCommandOutput } from "./commands/DeleteCacheClusterCommand";
import {
  DeleteCacheParameterGroupCommandInput,
  DeleteCacheParameterGroupCommandOutput,
} from "./commands/DeleteCacheParameterGroupCommand";
import {
  DeleteCacheSecurityGroupCommandInput,
  DeleteCacheSecurityGroupCommandOutput,
} from "./commands/DeleteCacheSecurityGroupCommand";
import {
  DeleteCacheSubnetGroupCommandInput,
  DeleteCacheSubnetGroupCommandOutput,
} from "./commands/DeleteCacheSubnetGroupCommand";
import {
  DeleteGlobalReplicationGroupCommandInput,
  DeleteGlobalReplicationGroupCommandOutput,
} from "./commands/DeleteGlobalReplicationGroupCommand";
import {
  DeleteReplicationGroupCommandInput,
  DeleteReplicationGroupCommandOutput,
} from "./commands/DeleteReplicationGroupCommand";
import {
  DeleteServerlessCacheCommandInput,
  DeleteServerlessCacheCommandOutput,
} from "./commands/DeleteServerlessCacheCommand";
import {
  DeleteServerlessCacheSnapshotCommandInput,
  DeleteServerlessCacheSnapshotCommandOutput,
} from "./commands/DeleteServerlessCacheSnapshotCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DeleteUserGroupCommandInput, DeleteUserGroupCommandOutput } from "./commands/DeleteUserGroupCommand";
import {
  DescribeCacheClustersCommandInput,
  DescribeCacheClustersCommandOutput,
} from "./commands/DescribeCacheClustersCommand";
import {
  DescribeCacheEngineVersionsCommandInput,
  DescribeCacheEngineVersionsCommandOutput,
} from "./commands/DescribeCacheEngineVersionsCommand";
import {
  DescribeCacheParameterGroupsCommandInput,
  DescribeCacheParameterGroupsCommandOutput,
} from "./commands/DescribeCacheParameterGroupsCommand";
import {
  DescribeCacheParametersCommandInput,
  DescribeCacheParametersCommandOutput,
} from "./commands/DescribeCacheParametersCommand";
import {
  DescribeCacheSecurityGroupsCommandInput,
  DescribeCacheSecurityGroupsCommandOutput,
} from "./commands/DescribeCacheSecurityGroupsCommand";
import {
  DescribeCacheSubnetGroupsCommandInput,
  DescribeCacheSubnetGroupsCommandOutput,
} from "./commands/DescribeCacheSubnetGroupsCommand";
import {
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput,
} from "./commands/DescribeEngineDefaultParametersCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import {
  DescribeGlobalReplicationGroupsCommandInput,
  DescribeGlobalReplicationGroupsCommandOutput,
} from "./commands/DescribeGlobalReplicationGroupsCommand";
import {
  DescribeReplicationGroupsCommandInput,
  DescribeReplicationGroupsCommandOutput,
} from "./commands/DescribeReplicationGroupsCommand";
import {
  DescribeReservedCacheNodesCommandInput,
  DescribeReservedCacheNodesCommandOutput,
} from "./commands/DescribeReservedCacheNodesCommand";
import {
  DescribeReservedCacheNodesOfferingsCommandInput,
  DescribeReservedCacheNodesOfferingsCommandOutput,
} from "./commands/DescribeReservedCacheNodesOfferingsCommand";
import {
  DescribeServerlessCachesCommandInput,
  DescribeServerlessCachesCommandOutput,
} from "./commands/DescribeServerlessCachesCommand";
import {
  DescribeServerlessCacheSnapshotsCommandInput,
  DescribeServerlessCacheSnapshotsCommandOutput,
} from "./commands/DescribeServerlessCacheSnapshotsCommand";
import {
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput,
} from "./commands/DescribeServiceUpdatesCommand";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "./commands/DescribeSnapshotsCommand";
import {
  DescribeUpdateActionsCommandInput,
  DescribeUpdateActionsCommandOutput,
} from "./commands/DescribeUpdateActionsCommand";
import { DescribeUserGroupsCommandInput, DescribeUserGroupsCommandOutput } from "./commands/DescribeUserGroupsCommand";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "./commands/DescribeUsersCommand";
import {
  DisassociateGlobalReplicationGroupCommandInput,
  DisassociateGlobalReplicationGroupCommandOutput,
} from "./commands/DisassociateGlobalReplicationGroupCommand";
import {
  ExportServerlessCacheSnapshotCommandInput,
  ExportServerlessCacheSnapshotCommandOutput,
} from "./commands/ExportServerlessCacheSnapshotCommand";
import {
  FailoverGlobalReplicationGroupCommandInput,
  FailoverGlobalReplicationGroupCommandOutput,
} from "./commands/FailoverGlobalReplicationGroupCommand";
import {
  IncreaseNodeGroupsInGlobalReplicationGroupCommandInput,
  IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput,
} from "./commands/IncreaseNodeGroupsInGlobalReplicationGroupCommand";
import {
  IncreaseReplicaCountCommandInput,
  IncreaseReplicaCountCommandOutput,
} from "./commands/IncreaseReplicaCountCommand";
import {
  ListAllowedNodeTypeModificationsCommandInput,
  ListAllowedNodeTypeModificationsCommandOutput,
} from "./commands/ListAllowedNodeTypeModificationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ModifyCacheClusterCommandInput, ModifyCacheClusterCommandOutput } from "./commands/ModifyCacheClusterCommand";
import {
  ModifyCacheParameterGroupCommandInput,
  ModifyCacheParameterGroupCommandOutput,
} from "./commands/ModifyCacheParameterGroupCommand";
import {
  ModifyCacheSubnetGroupCommandInput,
  ModifyCacheSubnetGroupCommandOutput,
} from "./commands/ModifyCacheSubnetGroupCommand";
import {
  ModifyGlobalReplicationGroupCommandInput,
  ModifyGlobalReplicationGroupCommandOutput,
} from "./commands/ModifyGlobalReplicationGroupCommand";
import {
  ModifyReplicationGroupCommandInput,
  ModifyReplicationGroupCommandOutput,
} from "./commands/ModifyReplicationGroupCommand";
import {
  ModifyReplicationGroupShardConfigurationCommandInput,
  ModifyReplicationGroupShardConfigurationCommandOutput,
} from "./commands/ModifyReplicationGroupShardConfigurationCommand";
import {
  ModifyServerlessCacheCommandInput,
  ModifyServerlessCacheCommandOutput,
} from "./commands/ModifyServerlessCacheCommand";
import { ModifyUserCommandInput, ModifyUserCommandOutput } from "./commands/ModifyUserCommand";
import { ModifyUserGroupCommandInput, ModifyUserGroupCommandOutput } from "./commands/ModifyUserGroupCommand";
import {
  PurchaseReservedCacheNodesOfferingCommandInput,
  PurchaseReservedCacheNodesOfferingCommandOutput,
} from "./commands/PurchaseReservedCacheNodesOfferingCommand";
import {
  RebalanceSlotsInGlobalReplicationGroupCommandInput,
  RebalanceSlotsInGlobalReplicationGroupCommandOutput,
} from "./commands/RebalanceSlotsInGlobalReplicationGroupCommand";
import { RebootCacheClusterCommandInput, RebootCacheClusterCommandOutput } from "./commands/RebootCacheClusterCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";
import {
  ResetCacheParameterGroupCommandInput,
  ResetCacheParameterGroupCommandOutput,
} from "./commands/ResetCacheParameterGroupCommand";
import {
  RevokeCacheSecurityGroupIngressCommandInput,
  RevokeCacheSecurityGroupIngressCommandOutput,
} from "./commands/RevokeCacheSecurityGroupIngressCommand";
import { StartMigrationCommandInput, StartMigrationCommandOutput } from "./commands/StartMigrationCommand";
import { TestFailoverCommandInput, TestFailoverCommandOutput } from "./commands/TestFailoverCommand";
import { TestMigrationCommandInput, TestMigrationCommandOutput } from "./commands/TestMigrationCommand";
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
  | AddTagsToResourceCommandInput
  | AuthorizeCacheSecurityGroupIngressCommandInput
  | BatchApplyUpdateActionCommandInput
  | BatchStopUpdateActionCommandInput
  | CompleteMigrationCommandInput
  | CopyServerlessCacheSnapshotCommandInput
  | CopySnapshotCommandInput
  | CreateCacheClusterCommandInput
  | CreateCacheParameterGroupCommandInput
  | CreateCacheSecurityGroupCommandInput
  | CreateCacheSubnetGroupCommandInput
  | CreateGlobalReplicationGroupCommandInput
  | CreateReplicationGroupCommandInput
  | CreateServerlessCacheCommandInput
  | CreateServerlessCacheSnapshotCommandInput
  | CreateSnapshotCommandInput
  | CreateUserCommandInput
  | CreateUserGroupCommandInput
  | DecreaseNodeGroupsInGlobalReplicationGroupCommandInput
  | DecreaseReplicaCountCommandInput
  | DeleteCacheClusterCommandInput
  | DeleteCacheParameterGroupCommandInput
  | DeleteCacheSecurityGroupCommandInput
  | DeleteCacheSubnetGroupCommandInput
  | DeleteGlobalReplicationGroupCommandInput
  | DeleteReplicationGroupCommandInput
  | DeleteServerlessCacheCommandInput
  | DeleteServerlessCacheSnapshotCommandInput
  | DeleteSnapshotCommandInput
  | DeleteUserCommandInput
  | DeleteUserGroupCommandInput
  | DescribeCacheClustersCommandInput
  | DescribeCacheEngineVersionsCommandInput
  | DescribeCacheParameterGroupsCommandInput
  | DescribeCacheParametersCommandInput
  | DescribeCacheSecurityGroupsCommandInput
  | DescribeCacheSubnetGroupsCommandInput
  | DescribeEngineDefaultParametersCommandInput
  | DescribeEventsCommandInput
  | DescribeGlobalReplicationGroupsCommandInput
  | DescribeReplicationGroupsCommandInput
  | DescribeReservedCacheNodesCommandInput
  | DescribeReservedCacheNodesOfferingsCommandInput
  | DescribeServerlessCacheSnapshotsCommandInput
  | DescribeServerlessCachesCommandInput
  | DescribeServiceUpdatesCommandInput
  | DescribeSnapshotsCommandInput
  | DescribeUpdateActionsCommandInput
  | DescribeUserGroupsCommandInput
  | DescribeUsersCommandInput
  | DisassociateGlobalReplicationGroupCommandInput
  | ExportServerlessCacheSnapshotCommandInput
  | FailoverGlobalReplicationGroupCommandInput
  | IncreaseNodeGroupsInGlobalReplicationGroupCommandInput
  | IncreaseReplicaCountCommandInput
  | ListAllowedNodeTypeModificationsCommandInput
  | ListTagsForResourceCommandInput
  | ModifyCacheClusterCommandInput
  | ModifyCacheParameterGroupCommandInput
  | ModifyCacheSubnetGroupCommandInput
  | ModifyGlobalReplicationGroupCommandInput
  | ModifyReplicationGroupCommandInput
  | ModifyReplicationGroupShardConfigurationCommandInput
  | ModifyServerlessCacheCommandInput
  | ModifyUserCommandInput
  | ModifyUserGroupCommandInput
  | PurchaseReservedCacheNodesOfferingCommandInput
  | RebalanceSlotsInGlobalReplicationGroupCommandInput
  | RebootCacheClusterCommandInput
  | RemoveTagsFromResourceCommandInput
  | ResetCacheParameterGroupCommandInput
  | RevokeCacheSecurityGroupIngressCommandInput
  | StartMigrationCommandInput
  | TestFailoverCommandInput
  | TestMigrationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddTagsToResourceCommandOutput
  | AuthorizeCacheSecurityGroupIngressCommandOutput
  | BatchApplyUpdateActionCommandOutput
  | BatchStopUpdateActionCommandOutput
  | CompleteMigrationCommandOutput
  | CopyServerlessCacheSnapshotCommandOutput
  | CopySnapshotCommandOutput
  | CreateCacheClusterCommandOutput
  | CreateCacheParameterGroupCommandOutput
  | CreateCacheSecurityGroupCommandOutput
  | CreateCacheSubnetGroupCommandOutput
  | CreateGlobalReplicationGroupCommandOutput
  | CreateReplicationGroupCommandOutput
  | CreateServerlessCacheCommandOutput
  | CreateServerlessCacheSnapshotCommandOutput
  | CreateSnapshotCommandOutput
  | CreateUserCommandOutput
  | CreateUserGroupCommandOutput
  | DecreaseNodeGroupsInGlobalReplicationGroupCommandOutput
  | DecreaseReplicaCountCommandOutput
  | DeleteCacheClusterCommandOutput
  | DeleteCacheParameterGroupCommandOutput
  | DeleteCacheSecurityGroupCommandOutput
  | DeleteCacheSubnetGroupCommandOutput
  | DeleteGlobalReplicationGroupCommandOutput
  | DeleteReplicationGroupCommandOutput
  | DeleteServerlessCacheCommandOutput
  | DeleteServerlessCacheSnapshotCommandOutput
  | DeleteSnapshotCommandOutput
  | DeleteUserCommandOutput
  | DeleteUserGroupCommandOutput
  | DescribeCacheClustersCommandOutput
  | DescribeCacheEngineVersionsCommandOutput
  | DescribeCacheParameterGroupsCommandOutput
  | DescribeCacheParametersCommandOutput
  | DescribeCacheSecurityGroupsCommandOutput
  | DescribeCacheSubnetGroupsCommandOutput
  | DescribeEngineDefaultParametersCommandOutput
  | DescribeEventsCommandOutput
  | DescribeGlobalReplicationGroupsCommandOutput
  | DescribeReplicationGroupsCommandOutput
  | DescribeReservedCacheNodesCommandOutput
  | DescribeReservedCacheNodesOfferingsCommandOutput
  | DescribeServerlessCacheSnapshotsCommandOutput
  | DescribeServerlessCachesCommandOutput
  | DescribeServiceUpdatesCommandOutput
  | DescribeSnapshotsCommandOutput
  | DescribeUpdateActionsCommandOutput
  | DescribeUserGroupsCommandOutput
  | DescribeUsersCommandOutput
  | DisassociateGlobalReplicationGroupCommandOutput
  | ExportServerlessCacheSnapshotCommandOutput
  | FailoverGlobalReplicationGroupCommandOutput
  | IncreaseNodeGroupsInGlobalReplicationGroupCommandOutput
  | IncreaseReplicaCountCommandOutput
  | ListAllowedNodeTypeModificationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyCacheClusterCommandOutput
  | ModifyCacheParameterGroupCommandOutput
  | ModifyCacheSubnetGroupCommandOutput
  | ModifyGlobalReplicationGroupCommandOutput
  | ModifyReplicationGroupCommandOutput
  | ModifyReplicationGroupShardConfigurationCommandOutput
  | ModifyServerlessCacheCommandOutput
  | ModifyUserCommandOutput
  | ModifyUserGroupCommandOutput
  | PurchaseReservedCacheNodesOfferingCommandOutput
  | RebalanceSlotsInGlobalReplicationGroupCommandOutput
  | RebootCacheClusterCommandOutput
  | RemoveTagsFromResourceCommandOutput
  | ResetCacheParameterGroupCommandOutput
  | RevokeCacheSecurityGroupIngressCommandOutput
  | StartMigrationCommandOutput
  | TestFailoverCommandOutput
  | TestMigrationCommandOutput;

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
export type ElastiCacheClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ElastiCacheClient class constructor that set the region, credentials and other options.
 */
export interface ElastiCacheClientConfig extends ElastiCacheClientConfigType {}

/**
 * @public
 */
export type ElastiCacheClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ElastiCacheClient class. This is resolved and normalized from the {@link ElastiCacheClientConfig | constructor configuration interface}.
 */
export interface ElastiCacheClientResolvedConfig extends ElastiCacheClientResolvedConfigType {}

/**
 * <fullname>Amazon ElastiCache</fullname>
 *          <p>Amazon ElastiCache is a web service that makes it easier to set up, operate, and scale
 *             a distributed cache in the cloud.</p>
 *          <p>With ElastiCache, customers get all of the benefits of a high-performance, in-memory
 *             cache with less of the administrative burden involved in launching and managing a
 *             distributed cache. The service makes setup, scaling, and cluster failure handling much
 *             simpler than in a self-managed cache deployment.</p>
 *          <p>In addition, through integration with Amazon CloudWatch, customers get enhanced
 *             visibility into the key performance statistics associated with their cache and can
 *             receive alarms if a part of their cache runs hot.</p>
 * @public
 */
export class ElastiCacheClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ElastiCacheClientResolvedConfig
> {
  /**
   * The resolved configuration of ElastiCacheClient class. This is resolved and normalized from the {@link ElastiCacheClientConfig | constructor configuration interface}.
   */
  readonly config: ElastiCacheClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ElastiCacheClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultElastiCacheHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ElastiCacheClientResolvedConfig) =>
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
