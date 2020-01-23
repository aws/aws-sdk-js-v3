import {
  AddRoleToDBClusterMessage,
  AddSourceIdentifierToSubscriptionMessage,
  AddTagsToResourceMessage,
  ApplyPendingMaintenanceActionMessage,
  CopyDBClusterParameterGroupMessage,
  CopyDBClusterSnapshotMessage,
  CopyDBParameterGroupMessage,
  CreateDBClusterMessage,
  CreateDBClusterParameterGroupMessage,
  CreateDBClusterSnapshotMessage,
  CreateDBInstanceMessage,
  CreateDBParameterGroupMessage,
  CreateDBSubnetGroupMessage,
  CreateEventSubscriptionMessage,
  DBCluster,
  DBClusterMessage,
  DBClusterParameterGroup,
  DBClusterParameterGroupDetails,
  DBClusterParameterGroupNameMessage,
  DBClusterParameterGroupsMessage,
  DBClusterSnapshot,
  DBClusterSnapshotAttributesResult,
  DBClusterSnapshotMessage,
  DBEngineVersionMessage,
  DBInstance,
  DBInstanceMessage,
  DBParameterGroup,
  DBParameterGroupDetails,
  DBParameterGroupNameMessage,
  DBParameterGroupsMessage,
  DBSubnetGroup,
  DBSubnetGroupMessage,
  DeleteDBClusterMessage,
  DeleteDBClusterParameterGroupMessage,
  DeleteDBClusterSnapshotMessage,
  DeleteDBInstanceMessage,
  DeleteDBParameterGroupMessage,
  DeleteDBSubnetGroupMessage,
  DeleteEventSubscriptionMessage,
  DescribeDBClusterParameterGroupsMessage,
  DescribeDBClusterParametersMessage,
  DescribeDBClusterSnapshotAttributesMessage,
  DescribeDBClusterSnapshotsMessage,
  DescribeDBClustersMessage,
  DescribeDBEngineVersionsMessage,
  DescribeDBInstancesMessage,
  DescribeDBParameterGroupsMessage,
  DescribeDBParametersMessage,
  DescribeDBSubnetGroupsMessage,
  DescribeEngineDefaultClusterParametersMessage,
  DescribeEngineDefaultParametersMessage,
  DescribeEventCategoriesMessage,
  DescribeEventSubscriptionsMessage,
  DescribeEventsMessage,
  DescribeOrderableDBInstanceOptionsMessage,
  DescribePendingMaintenanceActionsMessage,
  DescribeValidDBInstanceModificationsMessage,
  EngineDefaults,
  EventCategoriesMessage,
  EventSubscription,
  EventSubscriptionsMessage,
  EventsMessage,
  FailoverDBClusterMessage,
  ListTagsForResourceMessage,
  ModifyDBClusterMessage,
  ModifyDBClusterParameterGroupMessage,
  ModifyDBClusterSnapshotAttributeMessage,
  ModifyDBInstanceMessage,
  ModifyDBParameterGroupMessage,
  ModifyDBSubnetGroupMessage,
  ModifyEventSubscriptionMessage,
  OrderableDBInstanceOptionsMessage,
  PendingMaintenanceActionsMessage,
  PromoteReadReplicaDBClusterMessage,
  RebootDBInstanceMessage,
  RemoveRoleFromDBClusterMessage,
  RemoveSourceIdentifierFromSubscriptionMessage,
  RemoveTagsFromResourceMessage,
  ResetDBClusterParameterGroupMessage,
  ResetDBParameterGroupMessage,
  ResourcePendingMaintenanceActions,
  RestoreDBClusterFromSnapshotMessage,
  RestoreDBClusterToPointInTimeMessage,
  TagListMessage,
  ValidDBInstanceModificationsMessage
} from "./models/index";
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
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddRoleToDBClusterMessage
  | AddSourceIdentifierToSubscriptionMessage
  | AddTagsToResourceMessage
  | ApplyPendingMaintenanceActionMessage
  | CopyDBClusterParameterGroupMessage
  | CopyDBClusterSnapshotMessage
  | CopyDBParameterGroupMessage
  | CreateDBClusterMessage
  | CreateDBClusterParameterGroupMessage
  | CreateDBClusterSnapshotMessage
  | CreateDBInstanceMessage
  | CreateDBParameterGroupMessage
  | CreateDBSubnetGroupMessage
  | CreateEventSubscriptionMessage
  | DeleteDBClusterMessage
  | DeleteDBClusterParameterGroupMessage
  | DeleteDBClusterSnapshotMessage
  | DeleteDBInstanceMessage
  | DeleteDBParameterGroupMessage
  | DeleteDBSubnetGroupMessage
  | DeleteEventSubscriptionMessage
  | DescribeDBClusterParameterGroupsMessage
  | DescribeDBClusterParametersMessage
  | DescribeDBClusterSnapshotAttributesMessage
  | DescribeDBClusterSnapshotsMessage
  | DescribeDBClustersMessage
  | DescribeDBEngineVersionsMessage
  | DescribeDBInstancesMessage
  | DescribeDBParameterGroupsMessage
  | DescribeDBParametersMessage
  | DescribeDBSubnetGroupsMessage
  | DescribeEngineDefaultClusterParametersMessage
  | DescribeEngineDefaultParametersMessage
  | DescribeEventCategoriesMessage
  | DescribeEventSubscriptionsMessage
  | DescribeEventsMessage
  | DescribeOrderableDBInstanceOptionsMessage
  | DescribePendingMaintenanceActionsMessage
  | DescribeValidDBInstanceModificationsMessage
  | FailoverDBClusterMessage
  | ListTagsForResourceMessage
  | ModifyDBClusterMessage
  | ModifyDBClusterParameterGroupMessage
  | ModifyDBClusterSnapshotAttributeMessage
  | ModifyDBInstanceMessage
  | ModifyDBParameterGroupMessage
  | ModifyDBSubnetGroupMessage
  | ModifyEventSubscriptionMessage
  | PromoteReadReplicaDBClusterMessage
  | RebootDBInstanceMessage
  | RemoveRoleFromDBClusterMessage
  | RemoveSourceIdentifierFromSubscriptionMessage
  | RemoveTagsFromResourceMessage
  | ResetDBClusterParameterGroupMessage
  | ResetDBParameterGroupMessage
  | RestoreDBClusterFromSnapshotMessage
  | RestoreDBClusterToPointInTimeMessage;

export type ServiceOutputTypes =
  | __MetadataBearer
  | DBCluster
  | DBCluster
  | DBCluster
  | DBCluster
  | DBCluster
  | DBCluster
  | DBCluster
  | DBClusterMessage
  | DBClusterParameterGroup
  | DBClusterParameterGroup
  | DBClusterParameterGroupDetails
  | DBClusterParameterGroupNameMessage
  | DBClusterParameterGroupNameMessage
  | DBClusterParameterGroupsMessage
  | DBClusterSnapshot
  | DBClusterSnapshot
  | DBClusterSnapshot
  | DBClusterSnapshotAttributesResult
  | DBClusterSnapshotAttributesResult
  | DBClusterSnapshotMessage
  | DBEngineVersionMessage
  | DBInstance
  | DBInstance
  | DBInstance
  | DBInstance
  | DBInstanceMessage
  | DBParameterGroup
  | DBParameterGroup
  | DBParameterGroupDetails
  | DBParameterGroupNameMessage
  | DBParameterGroupNameMessage
  | DBParameterGroupsMessage
  | DBSubnetGroup
  | DBSubnetGroup
  | DBSubnetGroupMessage
  | EngineDefaults
  | EngineDefaults
  | EventCategoriesMessage
  | EventSubscription
  | EventSubscription
  | EventSubscription
  | EventSubscription
  | EventSubscription
  | EventSubscriptionsMessage
  | EventsMessage
  | OrderableDBInstanceOptionsMessage
  | PendingMaintenanceActionsMessage
  | ResourcePendingMaintenanceActions
  | TagListMessage
  | ValidDBInstanceModificationsMessage;

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

export type NeptuneClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type NeptuneClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *
 *          <fullname>Amazon Neptune</fullname>
 *          <p>Amazon Neptune is a fast, reliable, fully-managed graph database service that makes it
 *       easy to build and run applications that work with highly connected datasets. The core of
 *       Amazon Neptune is a purpose-built, high-performance graph database engine optimized for
 *       storing billions of relationships and querying the graph with milliseconds latency. Amazon
 *       Neptune supports popular graph models Property Graph and W3C's RDF, and their respective query
 *       languages Apache TinkerPop Gremlin and SPARQL, allowing you to easily build queries that
 *       efficiently navigate highly connected datasets. Neptune powers graph use cases such as
 *       recommendation engines, fraud detection, knowledge graphs, drug discovery, and network
 *       security.</p>
 *
 *          <p>This interface reference for Amazon Neptune contains documentation for a programming or
 *       command line interface you can use to manage Amazon Neptune. Note that Amazon Neptune is
 *       asynchronous, which means that some interfaces might require techniques such as polling or
 *       callback functions to determine when a command has been applied. In this reference, the
 *       parameter descriptions indicate whether a command is applied immediately, on the next instance
 *       reboot, or during the maintenance window. The reference structure is as follows, and we list
 *       following some related topics from the user guide.</p>
 *
 */
export class NeptuneClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  NeptuneClientResolvedConfig
> {
  readonly config: NeptuneClientResolvedConfig;

  constructor(configuration: NeptuneClientConfig) {
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
