import {
  AcceptReservedNodeExchangeInputMessage,
  AcceptReservedNodeExchangeOutputMessage,
  AccountAttributeList,
  AuthorizeClusterSecurityGroupIngressMessage,
  AuthorizeSnapshotAccessMessage,
  BatchDeleteClusterSnapshotsRequest,
  BatchDeleteClusterSnapshotsResult,
  BatchModifyClusterSnapshotsMessage,
  BatchModifyClusterSnapshotsOutputMessage,
  CancelResizeMessage,
  Cluster,
  ClusterCredentials,
  ClusterDbRevisionsMessage,
  ClusterParameterGroup,
  ClusterParameterGroupDetails,
  ClusterParameterGroupNameMessage,
  ClusterParameterGroupsMessage,
  ClusterSecurityGroup,
  ClusterSecurityGroupMessage,
  ClusterSubnetGroup,
  ClusterSubnetGroupMessage,
  ClusterVersionsMessage,
  ClustersMessage,
  CopyClusterSnapshotMessage,
  CreateClusterMessage,
  CreateClusterParameterGroupMessage,
  CreateClusterSecurityGroupMessage,
  CreateClusterSnapshotMessage,
  CreateClusterSubnetGroupMessage,
  CreateEventSubscriptionMessage,
  CreateHsmClientCertificateMessage,
  CreateHsmConfigurationMessage,
  CreateScheduledActionMessage,
  CreateSnapshotCopyGrantMessage,
  CreateSnapshotScheduleMessage,
  CreateTagsMessage,
  CustomerStorageMessage,
  DefaultClusterParameters,
  DeleteClusterMessage,
  DeleteClusterParameterGroupMessage,
  DeleteClusterSecurityGroupMessage,
  DeleteClusterSnapshotMessage,
  DeleteClusterSubnetGroupMessage,
  DeleteEventSubscriptionMessage,
  DeleteHsmClientCertificateMessage,
  DeleteHsmConfigurationMessage,
  DeleteScheduledActionMessage,
  DeleteSnapshotCopyGrantMessage,
  DeleteSnapshotScheduleMessage,
  DeleteTagsMessage,
  DescribeAccountAttributesMessage,
  DescribeClusterDbRevisionsMessage,
  DescribeClusterParameterGroupsMessage,
  DescribeClusterParametersMessage,
  DescribeClusterSecurityGroupsMessage,
  DescribeClusterSnapshotsMessage,
  DescribeClusterSubnetGroupsMessage,
  DescribeClusterTracksMessage,
  DescribeClusterVersionsMessage,
  DescribeClustersMessage,
  DescribeDefaultClusterParametersMessage,
  DescribeEventCategoriesMessage,
  DescribeEventSubscriptionsMessage,
  DescribeEventsMessage,
  DescribeHsmClientCertificatesMessage,
  DescribeHsmConfigurationsMessage,
  DescribeLoggingStatusMessage,
  DescribeNodeConfigurationOptionsMessage,
  DescribeOrderableClusterOptionsMessage,
  DescribeReservedNodeOfferingsMessage,
  DescribeReservedNodesMessage,
  DescribeResizeMessage,
  DescribeScheduledActionsMessage,
  DescribeSnapshotCopyGrantsMessage,
  DescribeSnapshotSchedulesMessage,
  DescribeSnapshotSchedulesOutputMessage,
  DescribeTableRestoreStatusMessage,
  DescribeTagsMessage,
  DisableLoggingMessage,
  DisableSnapshotCopyMessage,
  EnableLoggingMessage,
  EnableSnapshotCopyMessage,
  EventCategoriesMessage,
  EventSubscription,
  EventSubscriptionsMessage,
  EventsMessage,
  GetClusterCredentialsMessage,
  GetReservedNodeExchangeOfferingsInputMessage,
  GetReservedNodeExchangeOfferingsOutputMessage,
  HsmClientCertificate,
  HsmClientCertificateMessage,
  HsmConfiguration,
  HsmConfigurationMessage,
  LoggingStatus,
  ModifyClusterDbRevisionMessage,
  ModifyClusterIamRolesMessage,
  ModifyClusterMaintenanceMessage,
  ModifyClusterMessage,
  ModifyClusterParameterGroupMessage,
  ModifyClusterSnapshotMessage,
  ModifyClusterSnapshotScheduleMessage,
  ModifyClusterSubnetGroupMessage,
  ModifyEventSubscriptionMessage,
  ModifyScheduledActionMessage,
  ModifySnapshotCopyRetentionPeriodMessage,
  ModifySnapshotScheduleMessage,
  NodeConfigurationOptionsMessage,
  OrderableClusterOptionsMessage,
  PurchaseReservedNodeOfferingMessage,
  RebootClusterMessage,
  ReservedNode,
  ReservedNodeOfferingsMessage,
  ReservedNodesMessage,
  ResetClusterParameterGroupMessage,
  ResizeClusterMessage,
  ResizeProgressMessage,
  RestoreFromClusterSnapshotMessage,
  RestoreTableFromClusterSnapshotMessage,
  RevokeClusterSecurityGroupIngressMessage,
  RevokeSnapshotAccessMessage,
  RotateEncryptionKeyMessage,
  ScheduledAction,
  ScheduledActionsMessage,
  Snapshot,
  SnapshotCopyGrant,
  SnapshotCopyGrantMessage,
  SnapshotMessage,
  SnapshotSchedule,
  TableRestoreStatus,
  TableRestoreStatusMessage,
  TaggedResourceListMessage,
  TrackListMessage
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
  | {}
  | AcceptReservedNodeExchangeInputMessage
  | AuthorizeClusterSecurityGroupIngressMessage
  | AuthorizeSnapshotAccessMessage
  | BatchDeleteClusterSnapshotsRequest
  | BatchModifyClusterSnapshotsMessage
  | CancelResizeMessage
  | CopyClusterSnapshotMessage
  | CreateClusterMessage
  | CreateClusterParameterGroupMessage
  | CreateClusterSecurityGroupMessage
  | CreateClusterSnapshotMessage
  | CreateClusterSubnetGroupMessage
  | CreateEventSubscriptionMessage
  | CreateHsmClientCertificateMessage
  | CreateHsmConfigurationMessage
  | CreateScheduledActionMessage
  | CreateSnapshotCopyGrantMessage
  | CreateSnapshotScheduleMessage
  | CreateTagsMessage
  | DeleteClusterMessage
  | DeleteClusterParameterGroupMessage
  | DeleteClusterSecurityGroupMessage
  | DeleteClusterSnapshotMessage
  | DeleteClusterSubnetGroupMessage
  | DeleteEventSubscriptionMessage
  | DeleteHsmClientCertificateMessage
  | DeleteHsmConfigurationMessage
  | DeleteScheduledActionMessage
  | DeleteSnapshotCopyGrantMessage
  | DeleteSnapshotScheduleMessage
  | DeleteTagsMessage
  | DescribeAccountAttributesMessage
  | DescribeClusterDbRevisionsMessage
  | DescribeClusterParameterGroupsMessage
  | DescribeClusterParametersMessage
  | DescribeClusterSecurityGroupsMessage
  | DescribeClusterSnapshotsMessage
  | DescribeClusterSubnetGroupsMessage
  | DescribeClusterTracksMessage
  | DescribeClusterVersionsMessage
  | DescribeClustersMessage
  | DescribeDefaultClusterParametersMessage
  | DescribeEventCategoriesMessage
  | DescribeEventSubscriptionsMessage
  | DescribeEventsMessage
  | DescribeHsmClientCertificatesMessage
  | DescribeHsmConfigurationsMessage
  | DescribeLoggingStatusMessage
  | DescribeNodeConfigurationOptionsMessage
  | DescribeOrderableClusterOptionsMessage
  | DescribeReservedNodeOfferingsMessage
  | DescribeReservedNodesMessage
  | DescribeResizeMessage
  | DescribeScheduledActionsMessage
  | DescribeSnapshotCopyGrantsMessage
  | DescribeSnapshotSchedulesMessage
  | DescribeTableRestoreStatusMessage
  | DescribeTagsMessage
  | DisableLoggingMessage
  | DisableSnapshotCopyMessage
  | EnableLoggingMessage
  | EnableSnapshotCopyMessage
  | GetClusterCredentialsMessage
  | GetReservedNodeExchangeOfferingsInputMessage
  | ModifyClusterDbRevisionMessage
  | ModifyClusterIamRolesMessage
  | ModifyClusterMaintenanceMessage
  | ModifyClusterMessage
  | ModifyClusterParameterGroupMessage
  | ModifyClusterSnapshotMessage
  | ModifyClusterSnapshotScheduleMessage
  | ModifyClusterSubnetGroupMessage
  | ModifyEventSubscriptionMessage
  | ModifyScheduledActionMessage
  | ModifySnapshotCopyRetentionPeriodMessage
  | ModifySnapshotScheduleMessage
  | PurchaseReservedNodeOfferingMessage
  | RebootClusterMessage
  | ResetClusterParameterGroupMessage
  | ResizeClusterMessage
  | RestoreFromClusterSnapshotMessage
  | RestoreTableFromClusterSnapshotMessage
  | RevokeClusterSecurityGroupIngressMessage
  | RevokeSnapshotAccessMessage
  | RotateEncryptionKeyMessage;

export type ServiceOutputTypes =
  | __MetadataBearer
  | AcceptReservedNodeExchangeOutputMessage
  | AccountAttributeList
  | BatchDeleteClusterSnapshotsResult
  | BatchModifyClusterSnapshotsOutputMessage
  | Cluster
  | Cluster
  | Cluster
  | Cluster
  | Cluster
  | Cluster
  | Cluster
  | Cluster
  | Cluster
  | Cluster
  | Cluster
  | Cluster
  | Cluster
  | ClusterCredentials
  | ClusterDbRevisionsMessage
  | ClusterParameterGroup
  | ClusterParameterGroupDetails
  | ClusterParameterGroupNameMessage
  | ClusterParameterGroupNameMessage
  | ClusterParameterGroupsMessage
  | ClusterSecurityGroup
  | ClusterSecurityGroup
  | ClusterSecurityGroup
  | ClusterSecurityGroupMessage
  | ClusterSubnetGroup
  | ClusterSubnetGroup
  | ClusterSubnetGroupMessage
  | ClusterVersionsMessage
  | ClustersMessage
  | CustomerStorageMessage
  | DefaultClusterParameters
  | DescribeSnapshotSchedulesOutputMessage
  | EventCategoriesMessage
  | EventSubscription
  | EventSubscription
  | EventSubscriptionsMessage
  | EventsMessage
  | GetReservedNodeExchangeOfferingsOutputMessage
  | HsmClientCertificate
  | HsmClientCertificateMessage
  | HsmConfiguration
  | HsmConfigurationMessage
  | LoggingStatus
  | LoggingStatus
  | LoggingStatus
  | NodeConfigurationOptionsMessage
  | OrderableClusterOptionsMessage
  | ReservedNode
  | ReservedNodeOfferingsMessage
  | ReservedNodesMessage
  | ResizeProgressMessage
  | ResizeProgressMessage
  | ScheduledAction
  | ScheduledAction
  | ScheduledActionsMessage
  | Snapshot
  | Snapshot
  | Snapshot
  | Snapshot
  | Snapshot
  | Snapshot
  | SnapshotCopyGrant
  | SnapshotCopyGrantMessage
  | SnapshotMessage
  | SnapshotSchedule
  | SnapshotSchedule
  | TableRestoreStatus
  | TableRestoreStatusMessage
  | TaggedResourceListMessage
  | TrackListMessage;

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

export type RedshiftClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type RedshiftClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *         <fullname>Amazon Redshift</fullname>
 *         <p>
 *             <b>Overview</b>
 *         </p>
 *         <p>This is an interface reference for Amazon Redshift. It contains documentation for one of
 *             the programming or command line interfaces you can use to manage Amazon Redshift clusters.
 *             Note that Amazon Redshift is asynchronous, which means that some interfaces may require
 *             techniques, such as polling or asynchronous callback handlers, to determine when a
 *             command has been applied. In this reference, the parameter descriptions indicate whether
 *             a change is applied immediately, on the next instance reboot, or during the next
 *             maintenance window. For a summary of the Amazon Redshift cluster management interfaces, go to
 *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/using-aws-sdk.html">Using the
 *                 Amazon Redshift Management Interfaces</a>.</p>
 *         <p>Amazon Redshift manages all the work of setting up, operating, and scaling a data
 *             warehouse: provisioning capacity, monitoring and backing up the cluster, and applying
 *             patches and upgrades to the Amazon Redshift engine. You can focus on using your data to
 *             acquire new insights for your business and customers.</p>
 *         <p>If you are a first-time user of Amazon Redshift, we recommend that you begin by reading
 *             the <a href="https://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html">Amazon Redshift Getting Started Guide</a>.</p>
 *
 *         <p>If you are a database developer, the <a href="https://docs.aws.amazon.com/redshift/latest/dg/welcome.html">Amazon Redshift Database Developer Guide</a> explains how to design,
 *             build, query, and maintain the databases that make up your data warehouse. </p>
 *
 *
 */
export class RedshiftClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RedshiftClientResolvedConfig
> {
  readonly config: RedshiftClientResolvedConfig;

  constructor(configuration: RedshiftClientConfig) {
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
