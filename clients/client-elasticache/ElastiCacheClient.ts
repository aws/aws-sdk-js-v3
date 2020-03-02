import {
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput
} from "./commands/AddTagsToResourceCommand";
import {
  AuthorizeCacheSecurityGroupIngressCommandInput,
  AuthorizeCacheSecurityGroupIngressCommandOutput
} from "./commands/AuthorizeCacheSecurityGroupIngressCommand";
import {
  BatchApplyUpdateActionCommandInput,
  BatchApplyUpdateActionCommandOutput
} from "./commands/BatchApplyUpdateActionCommand";
import {
  BatchStopUpdateActionCommandInput,
  BatchStopUpdateActionCommandOutput
} from "./commands/BatchStopUpdateActionCommand";
import {
  CompleteMigrationCommandInput,
  CompleteMigrationCommandOutput
} from "./commands/CompleteMigrationCommand";
import {
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput
} from "./commands/CopySnapshotCommand";
import {
  CreateCacheClusterCommandInput,
  CreateCacheClusterCommandOutput
} from "./commands/CreateCacheClusterCommand";
import {
  CreateCacheParameterGroupCommandInput,
  CreateCacheParameterGroupCommandOutput
} from "./commands/CreateCacheParameterGroupCommand";
import {
  CreateCacheSecurityGroupCommandInput,
  CreateCacheSecurityGroupCommandOutput
} from "./commands/CreateCacheSecurityGroupCommand";
import {
  CreateCacheSubnetGroupCommandInput,
  CreateCacheSubnetGroupCommandOutput
} from "./commands/CreateCacheSubnetGroupCommand";
import {
  CreateReplicationGroupCommandInput,
  CreateReplicationGroupCommandOutput
} from "./commands/CreateReplicationGroupCommand";
import {
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput
} from "./commands/CreateSnapshotCommand";
import {
  DecreaseReplicaCountCommandInput,
  DecreaseReplicaCountCommandOutput
} from "./commands/DecreaseReplicaCountCommand";
import {
  DeleteCacheClusterCommandInput,
  DeleteCacheClusterCommandOutput
} from "./commands/DeleteCacheClusterCommand";
import {
  DeleteCacheParameterGroupCommandInput,
  DeleteCacheParameterGroupCommandOutput
} from "./commands/DeleteCacheParameterGroupCommand";
import {
  DeleteCacheSecurityGroupCommandInput,
  DeleteCacheSecurityGroupCommandOutput
} from "./commands/DeleteCacheSecurityGroupCommand";
import {
  DeleteCacheSubnetGroupCommandInput,
  DeleteCacheSubnetGroupCommandOutput
} from "./commands/DeleteCacheSubnetGroupCommand";
import {
  DeleteReplicationGroupCommandInput,
  DeleteReplicationGroupCommandOutput
} from "./commands/DeleteReplicationGroupCommand";
import {
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput
} from "./commands/DeleteSnapshotCommand";
import {
  DescribeCacheClustersCommandInput,
  DescribeCacheClustersCommandOutput
} from "./commands/DescribeCacheClustersCommand";
import {
  DescribeCacheEngineVersionsCommandInput,
  DescribeCacheEngineVersionsCommandOutput
} from "./commands/DescribeCacheEngineVersionsCommand";
import {
  DescribeCacheParameterGroupsCommandInput,
  DescribeCacheParameterGroupsCommandOutput
} from "./commands/DescribeCacheParameterGroupsCommand";
import {
  DescribeCacheParametersCommandInput,
  DescribeCacheParametersCommandOutput
} from "./commands/DescribeCacheParametersCommand";
import {
  DescribeCacheSecurityGroupsCommandInput,
  DescribeCacheSecurityGroupsCommandOutput
} from "./commands/DescribeCacheSecurityGroupsCommand";
import {
  DescribeCacheSubnetGroupsCommandInput,
  DescribeCacheSubnetGroupsCommandOutput
} from "./commands/DescribeCacheSubnetGroupsCommand";
import {
  DescribeEngineDefaultParametersCommandInput,
  DescribeEngineDefaultParametersCommandOutput
} from "./commands/DescribeEngineDefaultParametersCommand";
import {
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput
} from "./commands/DescribeEventsCommand";
import {
  DescribeReplicationGroupsCommandInput,
  DescribeReplicationGroupsCommandOutput
} from "./commands/DescribeReplicationGroupsCommand";
import {
  DescribeReservedCacheNodesCommandInput,
  DescribeReservedCacheNodesCommandOutput
} from "./commands/DescribeReservedCacheNodesCommand";
import {
  DescribeReservedCacheNodesOfferingsCommandInput,
  DescribeReservedCacheNodesOfferingsCommandOutput
} from "./commands/DescribeReservedCacheNodesOfferingsCommand";
import {
  DescribeServiceUpdatesCommandInput,
  DescribeServiceUpdatesCommandOutput
} from "./commands/DescribeServiceUpdatesCommand";
import {
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput
} from "./commands/DescribeSnapshotsCommand";
import {
  DescribeUpdateActionsCommandInput,
  DescribeUpdateActionsCommandOutput
} from "./commands/DescribeUpdateActionsCommand";
import {
  IncreaseReplicaCountCommandInput,
  IncreaseReplicaCountCommandOutput
} from "./commands/IncreaseReplicaCountCommand";
import {
  ListAllowedNodeTypeModificationsCommandInput,
  ListAllowedNodeTypeModificationsCommandOutput
} from "./commands/ListAllowedNodeTypeModificationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyCacheClusterCommandInput,
  ModifyCacheClusterCommandOutput
} from "./commands/ModifyCacheClusterCommand";
import {
  ModifyCacheParameterGroupCommandInput,
  ModifyCacheParameterGroupCommandOutput
} from "./commands/ModifyCacheParameterGroupCommand";
import {
  ModifyCacheSubnetGroupCommandInput,
  ModifyCacheSubnetGroupCommandOutput
} from "./commands/ModifyCacheSubnetGroupCommand";
import {
  ModifyReplicationGroupCommandInput,
  ModifyReplicationGroupCommandOutput
} from "./commands/ModifyReplicationGroupCommand";
import {
  ModifyReplicationGroupShardConfigurationCommandInput,
  ModifyReplicationGroupShardConfigurationCommandOutput
} from "./commands/ModifyReplicationGroupShardConfigurationCommand";
import {
  PurchaseReservedCacheNodesOfferingCommandInput,
  PurchaseReservedCacheNodesOfferingCommandOutput
} from "./commands/PurchaseReservedCacheNodesOfferingCommand";
import {
  RebootCacheClusterCommandInput,
  RebootCacheClusterCommandOutput
} from "./commands/RebootCacheClusterCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput
} from "./commands/RemoveTagsFromResourceCommand";
import {
  ResetCacheParameterGroupCommandInput,
  ResetCacheParameterGroupCommandOutput
} from "./commands/ResetCacheParameterGroupCommand";
import {
  RevokeCacheSecurityGroupIngressCommandInput,
  RevokeCacheSecurityGroupIngressCommandOutput
} from "./commands/RevokeCacheSecurityGroupIngressCommand";
import {
  StartMigrationCommandInput,
  StartMigrationCommandOutput
} from "./commands/StartMigrationCommand";
import {
  TestFailoverCommandInput,
  TestFailoverCommandOutput
} from "./commands/TestFailoverCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddTagsToResourceCommandInput
  | AuthorizeCacheSecurityGroupIngressCommandInput
  | BatchApplyUpdateActionCommandInput
  | BatchStopUpdateActionCommandInput
  | CompleteMigrationCommandInput
  | CopySnapshotCommandInput
  | CreateCacheClusterCommandInput
  | CreateCacheParameterGroupCommandInput
  | CreateCacheSecurityGroupCommandInput
  | CreateCacheSubnetGroupCommandInput
  | CreateReplicationGroupCommandInput
  | CreateSnapshotCommandInput
  | DecreaseReplicaCountCommandInput
  | DeleteCacheClusterCommandInput
  | DeleteCacheParameterGroupCommandInput
  | DeleteCacheSecurityGroupCommandInput
  | DeleteCacheSubnetGroupCommandInput
  | DeleteReplicationGroupCommandInput
  | DeleteSnapshotCommandInput
  | DescribeCacheClustersCommandInput
  | DescribeCacheEngineVersionsCommandInput
  | DescribeCacheParameterGroupsCommandInput
  | DescribeCacheParametersCommandInput
  | DescribeCacheSecurityGroupsCommandInput
  | DescribeCacheSubnetGroupsCommandInput
  | DescribeEngineDefaultParametersCommandInput
  | DescribeEventsCommandInput
  | DescribeReplicationGroupsCommandInput
  | DescribeReservedCacheNodesCommandInput
  | DescribeReservedCacheNodesOfferingsCommandInput
  | DescribeServiceUpdatesCommandInput
  | DescribeSnapshotsCommandInput
  | DescribeUpdateActionsCommandInput
  | IncreaseReplicaCountCommandInput
  | ListAllowedNodeTypeModificationsCommandInput
  | ListTagsForResourceCommandInput
  | ModifyCacheClusterCommandInput
  | ModifyCacheParameterGroupCommandInput
  | ModifyCacheSubnetGroupCommandInput
  | ModifyReplicationGroupCommandInput
  | ModifyReplicationGroupShardConfigurationCommandInput
  | PurchaseReservedCacheNodesOfferingCommandInput
  | RebootCacheClusterCommandInput
  | RemoveTagsFromResourceCommandInput
  | ResetCacheParameterGroupCommandInput
  | RevokeCacheSecurityGroupIngressCommandInput
  | StartMigrationCommandInput
  | TestFailoverCommandInput;

export type ServiceOutputTypes =
  | AddTagsToResourceCommandOutput
  | AuthorizeCacheSecurityGroupIngressCommandOutput
  | BatchApplyUpdateActionCommandOutput
  | BatchStopUpdateActionCommandOutput
  | CompleteMigrationCommandOutput
  | CopySnapshotCommandOutput
  | CreateCacheClusterCommandOutput
  | CreateCacheParameterGroupCommandOutput
  | CreateCacheSecurityGroupCommandOutput
  | CreateCacheSubnetGroupCommandOutput
  | CreateReplicationGroupCommandOutput
  | CreateSnapshotCommandOutput
  | DecreaseReplicaCountCommandOutput
  | DeleteCacheClusterCommandOutput
  | DeleteCacheParameterGroupCommandOutput
  | DeleteCacheSecurityGroupCommandOutput
  | DeleteCacheSubnetGroupCommandOutput
  | DeleteReplicationGroupCommandOutput
  | DeleteSnapshotCommandOutput
  | DescribeCacheClustersCommandOutput
  | DescribeCacheEngineVersionsCommandOutput
  | DescribeCacheParameterGroupsCommandOutput
  | DescribeCacheParametersCommandOutput
  | DescribeCacheSecurityGroupsCommandOutput
  | DescribeCacheSubnetGroupsCommandOutput
  | DescribeEngineDefaultParametersCommandOutput
  | DescribeEventsCommandOutput
  | DescribeReplicationGroupsCommandOutput
  | DescribeReservedCacheNodesCommandOutput
  | DescribeReservedCacheNodesOfferingsCommandOutput
  | DescribeServiceUpdatesCommandOutput
  | DescribeSnapshotsCommandOutput
  | DescribeUpdateActionsCommandOutput
  | IncreaseReplicaCountCommandOutput
  | ListAllowedNodeTypeModificationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyCacheClusterCommandOutput
  | ModifyCacheParameterGroupCommandOutput
  | ModifyCacheSubnetGroupCommandOutput
  | ModifyReplicationGroupCommandOutput
  | ModifyReplicationGroupShardConfigurationCommandOutput
  | PurchaseReservedCacheNodesOfferingCommandOutput
  | RebootCacheClusterCommandOutput
  | RemoveTagsFromResourceCommandOutput
  | ResetCacheParameterGroupCommandOutput
  | RevokeCacheSecurityGroupIngressCommandOutput
  | StartMigrationCommandOutput
  | TestFailoverCommandOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ElastiCacheClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ElastiCacheClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>Amazon ElastiCache</fullname>
 *         <p>Amazon ElastiCache is a web service that makes it easier to set up, operate,
 *             and scale a distributed cache in the cloud.</p>
 *         <p>With ElastiCache, customers get all of the benefits of a high-performance,
 *             in-memory cache with less of the administrative burden involved in launching and managing a distributed cache.
 *             The service makes setup, scaling,
 *             and cluster failure handling much simpler than in a self-managed cache deployment.</p>
 *         <p>In addition, through integration with Amazon CloudWatch,
 *             customers get enhanced visibility into the key performance statistics
 *             associated with their cache and can receive alarms if a part of their cache runs hot.</p>
 */
export class ElastiCacheClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ElastiCacheClientResolvedConfig
> {
  readonly config: ElastiCacheClientResolvedConfig;

  constructor(configuration: ElastiCacheClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
