// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import {
  ActionType,
  AquaConfiguration,
  AquaConfigurationStatus,
  AvailabilityZone,
  Cluster,
  ClusterSecurityGroup,
  ClusterSubnetGroup,
  EventSubscription,
  HsmConfiguration,
  Parameter,
  RecurringCharge,
  ReservedNode,
  ReservedNodeExchangeStatus,
  ReservedNodeOfferingType,
  ScheduledAction,
  ScheduledActionType,
  Snapshot,
  SnapshotCopyGrant,
  SnapshotSchedule,
  Tag,
  UsageLimit,
  UsageLimitBreachAction,
  UsageLimitFeatureType,
} from "./models_0";
import { RedshiftServiceException as __BaseException } from "./RedshiftServiceException";

/**
 * <p></p>
 */
export interface DescribeHsmConfigurationsMessage {
  /**
   * <p>The identifier of a specific Amazon Redshift HSM configuration to be described. If no
   *             identifier is specified, information is returned for all HSM configurations owned by
   *             your Amazon Web Services account.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeHsmConfigurations</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching HSM configurations that
   *             are associated with the specified key or keys. For example, suppose that you have HSM
   *             configurations that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the HSM configurations that have either or both of
   *             these tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching HSM configurations
   *             that are associated with the specified tag value or values. For example, suppose that
   *             you have HSM configurations that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the HSM configurations that have either or both of these tag
   *             values associated with them.</p>
   */
  TagValues?: string[];
}

/**
 * <p></p>
 */
export interface HsmConfigurationMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>HsmConfiguration</code> objects.</p>
   */
  HsmConfigurations?: HsmConfiguration[];
}

/**
 * <p></p>
 */
export interface DescribeLoggingStatusMessage {
  /**
   * <p>The identifier of the cluster from which to get the logging status.</p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;
}

export enum LogDestinationType {
  CLOUDWATCH = "cloudwatch",
  S3 = "s3",
}

/**
 * <p>Describes the status of logging for a cluster.</p>
 */
export interface LoggingStatus {
  /**
   * <p>
   *             <code>true</code> if logging is on, <code>false</code> if logging is off.</p>
   */
  LoggingEnabled?: boolean;

  /**
   * <p>The name of the S3 bucket where the log files are stored.</p>
   */
  BucketName?: string;

  /**
   * <p>The prefix applied to the log file names.</p>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The last time that logs were delivered.</p>
   */
  LastSuccessfulDeliveryTime?: Date;

  /**
   * <p>The last time when logs failed to be delivered.</p>
   */
  LastFailureTime?: Date;

  /**
   * <p>The message indicating that logs failed to be delivered.</p>
   */
  LastFailureMessage?: string;

  /**
   * <p>The log destination type. An enum with possible values of <code>s3</code> and <code>cloudwatch</code>.</p>
   */
  LogDestinationType?: LogDestinationType | string;

  /**
   * <p>The collection of exported log types. Log types include the connection log, user log and user activity log.</p>
   */
  LogExports?: string[];
}

export enum NodeConfigurationOptionsFilterName {
  ESTIMATED_DISK_UTILIZATION_PERCENT = "EstimatedDiskUtilizationPercent",
  MODE = "Mode",
  NODE_TYPE = "NodeType",
  NUM_NODES = "NumberOfNodes",
}

export enum OperatorType {
  BETWEEN = "between",
  EQ = "eq",
  GE = "ge",
  GT = "gt",
  IN = "in",
  LE = "le",
  LT = "lt",
}

/**
 * <p>A set of elements to filter the returned node configurations.</p>
 */
export interface NodeConfigurationOptionsFilter {
  /**
   * <p>The name of the element to filter.</p>
   */
  Name?: NodeConfigurationOptionsFilterName | string;

  /**
   * <p>The filter operator.
   *             If filter Name is NodeType only the 'in' operator is supported.
   *             Provide one value to evaluate for 'eq', 'lt', 'le', 'gt', and 'ge'.
   *             Provide two values to evaluate for 'between'.
   *             Provide a list of values for 'in'.</p>
   */
  Operator?: OperatorType | string;

  /**
   * <p>List of values. Compare Name using Operator to Values.
   *             If filter Name is NumberOfNodes, then values can range from 0 to 200.
   *             If filter Name is EstimatedDiskUtilizationPercent, then values can range from 0 to 100.
   *             For example, filter NumberOfNodes (name) GT (operator) 3 (values).</p>
   */
  Values?: string[];
}

export interface DescribeNodeConfigurationOptionsMessage {
  /**
   * <p>The action type to evaluate for possible node configurations.
   *             Specify "restore-cluster" to get configuration combinations based on an existing snapshot.
   *             Specify "recommend-node-config" to get configuration recommendations based on an existing cluster or snapshot.
   *             Specify "resize-cluster" to get configuration combinations for elastic resize based on an existing cluster.
   *         </p>
   */
  ActionType: ActionType | string | undefined;

  /**
   * <p>The identifier of the cluster to evaluate for possible node configurations.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The identifier of the snapshot to evaluate for possible node configurations.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot associated with the message to describe node configuration.</p>
   */
  SnapshotArn?: string;

  /**
   * <p>The Amazon Web Services account used to create or copy the snapshot.
   *             Required if you are restoring a snapshot you do not own,
   *             optional if you own the snapshot.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>A set of name, operator, and value items to filter the results.</p>
   */
  Filters?: NodeConfigurationOptionsFilter[];

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeNodeConfigurationOptions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>500</code>
   *         </p>
   *         <p>Constraints: minimum 100, maximum 500.</p>
   */
  MaxRecords?: number;
}

export enum Mode {
  HIGH_PERFORMANCE = "high-performance",
  STANDARD = "standard",
}

/**
 * <p>A list of node configurations.</p>
 */
export interface NodeConfigurationOption {
  /**
   * <p>The node type, such as, "ds2.8xlarge".</p>
   */
  NodeType?: string;

  /**
   * <p>The number of nodes.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The estimated disk utilizaton percentage.</p>
   */
  EstimatedDiskUtilizationPercent?: number;

  /**
   * <p>The category of the node configuration recommendation.</p>
   */
  Mode?: Mode | string;
}

export interface NodeConfigurationOptionsMessage {
  /**
   * <p>A list of valid node configurations.</p>
   */
  NodeConfigurationOptionList?: NodeConfigurationOption[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

/**
 * <p></p>
 */
export interface DescribeOrderableClusterOptionsMessage {
  /**
   * <p>The version filter value. Specify this parameter to show only the available
   *             offerings matching the specified version.</p>
   *         <p>Default: All versions.</p>
   *         <p>Constraints: Must be one of the version returned from <a>DescribeClusterVersions</a>.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The node type filter value. Specify this parameter to show only the available
   *             offerings matching the specified node type.</p>
   */
  NodeType?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeOrderableClusterOptions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;
}

/**
 * <p>Describes an orderable cluster option.</p>
 */
export interface OrderableClusterOption {
  /**
   * <p>The version of the orderable cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The cluster type, for example <code>multi-node</code>. </p>
   */
  ClusterType?: string;

  /**
   * <p>The node type for the orderable cluster.</p>
   */
  NodeType?: string;

  /**
   * <p>A list of availability zones for the orderable cluster.</p>
   */
  AvailabilityZones?: AvailabilityZone[];
}

/**
 * <p>Contains the output from the <a>DescribeOrderableClusterOptions</a>
 *             action. </p>
 */
export interface OrderableClusterOptionsMessage {
  /**
   * <p>An <code>OrderableClusterOption</code> structure containing information about
   *             orderable options for the cluster.</p>
   */
  OrderableClusterOptions?: OrderableClusterOption[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export interface DescribePartnersInputMessage {
  /**
   * <p>The Amazon Web Services account ID that owns the cluster.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The cluster identifier of the cluster whose partner integration is being described.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the database whose partner integration is being described. If database name is not specified, then all databases in the cluster are described.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the partner that is being described. If partner name is not specified, then all partner integrations are described.</p>
   */
  PartnerName?: string;
}

export enum PartnerIntegrationStatus {
  Active = "Active",
  ConnectionFailure = "ConnectionFailure",
  Inactive = "Inactive",
  RuntimeFailure = "RuntimeFailure",
}

/**
 * <p>Describes a partner integration.</p>
 */
export interface PartnerIntegrationInfo {
  /**
   * <p>The name of the database that receives data from a partner.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the partner.</p>
   */
  PartnerName?: string;

  /**
   * <p>The partner integration status.</p>
   */
  Status?: PartnerIntegrationStatus | string;

  /**
   * <p>The status message provided by the partner.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The date (UTC) that the partner integration was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The date (UTC) that the partner integration status was last updated by the partner.</p>
   */
  UpdatedAt?: Date;
}

export interface DescribePartnersOutputMessage {
  /**
   * <p>A list of partner integrations.</p>
   */
  PartnerIntegrationInfoList?: PartnerIntegrationInfo[];
}

export interface DescribeReservedNodeExchangeStatusInputMessage {
  /**
   * <p>The identifier of the source reserved node in a reserved-node exchange request.</p>
   */
  ReservedNodeId?: string;

  /**
   * <p>The identifier of the reserved-node exchange request.</p>
   */
  ReservedNodeExchangeRequestId?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>Marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeReservedNodeExchangeStatus</code> request. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the value
   *             specified by the <code>MaxRecords</code> parameter. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request.</p>
   */
  Marker?: string;
}

export interface DescribeReservedNodeExchangeStatusOutputMessage {
  /**
   * <p>The details of the reserved-node exchange request, including the status, request
   *             time, source reserved-node identifier, and additional details.</p>
   */
  ReservedNodeExchangeStatusDetails?: ReservedNodeExchangeStatus[];

  /**
   * <p>A pagination token provided by a previous <code>DescribeReservedNodeExchangeStatus</code> request.</p>
   */
  Marker?: string;
}

/**
 * <p>The reserved-node exchange status wasn't found.</p>
 */
export class ReservedNodeExchangeNotFoundFault extends __BaseException {
  readonly name: "ReservedNodeExchangeNotFoundFault" = "ReservedNodeExchangeNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeExchangeNotFoundFault, __BaseException>) {
    super({
      name: "ReservedNodeExchangeNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeExchangeNotFoundFault.prototype);
  }
}

/**
 * <p></p>
 */
export interface DescribeReservedNodeOfferingsMessage {
  /**
   * <p>The unique identifier for the offering.</p>
   */
  ReservedNodeOfferingId?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeReservedNodeOfferings</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;
}

/**
 * <p>Describes a reserved node offering.</p>
 */
export interface ReservedNodeOffering {
  /**
   * <p>The offering identifier.</p>
   */
  ReservedNodeOfferingId?: string;

  /**
   * <p>The node type offered by the reserved node offering.</p>
   */
  NodeType?: string;

  /**
   * <p>The duration, in seconds, for which the offering will reserve the node.</p>
   */
  Duration?: number;

  /**
   * <p>The upfront fixed charge you will pay to purchase the specific reserved node
   *             offering.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The rate you are charged for each hour the cluster that is using the offering is
   *             running.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the compute nodes offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The anticipated utilization of the reserved node, as defined in the reserved node
   *             offering.</p>
   */
  OfferingType?: string;

  /**
   * <p>The charge to your account regardless of whether you are creating any clusters
   *             using the node offering. Recurring charges are only in effect for heavy-utilization
   *             reserved nodes.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p></p>
   */
  ReservedNodeOfferingType?: ReservedNodeOfferingType | string;
}

/**
 * <p></p>
 */
export interface ReservedNodeOfferingsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A list of <code>ReservedNodeOffering</code> objects.</p>
   */
  ReservedNodeOfferings?: ReservedNodeOffering[];
}

/**
 * <p></p>
 */
export interface DescribeReservedNodesMessage {
  /**
   * <p>Identifier for the node reservation.</p>
   */
  ReservedNodeId?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeReservedNodes</a> request exceed
   *             the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;
}

/**
 * <p></p>
 */
export interface ReservedNodesMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>The list of <code>ReservedNode</code> objects.</p>
   */
  ReservedNodes?: ReservedNode[];
}

/**
 * <p></p>
 */
export interface DescribeResizeMessage {
  /**
   * <p>The unique identifier of a cluster whose resize progress you are requesting. This
   *             parameter is case-sensitive.</p>
   *         <p>By default, resize operations for all clusters defined for an Amazon Web Services account are
   *             returned.</p>
   */
  ClusterIdentifier: string | undefined;
}

export enum ScheduledActionFilterName {
  CLUSTER_IDENTIFIER = "cluster-identifier",
  IAM_ROLE = "iam-role",
}

/**
 * <p>A set of elements to filter the returned scheduled actions. </p>
 */
export interface ScheduledActionFilter {
  /**
   * <p>The type of element to filter. </p>
   */
  Name: ScheduledActionFilterName | string | undefined;

  /**
   * <p>List of values. Compare if the value (of type defined by <code>Name</code>) equals an item in the list of scheduled actions. </p>
   */
  Values: string[] | undefined;
}

export enum ScheduledActionTypeValues {
  PAUSE_CLUSTER = "PauseCluster",
  RESIZE_CLUSTER = "ResizeCluster",
  RESUME_CLUSTER = "ResumeCluster",
}

export interface DescribeScheduledActionsMessage {
  /**
   * <p>The name of the scheduled action to retrieve. </p>
   */
  ScheduledActionName?: string;

  /**
   * <p>The type of the scheduled actions to retrieve. </p>
   */
  TargetActionType?: ScheduledActionTypeValues | string;

  /**
   * <p>The start time in UTC of the scheduled actions to retrieve.
   *             Only active scheduled actions that have invocations after this time are retrieved.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end time in UTC of the scheduled action to retrieve.
   *             Only active scheduled actions that have invocations before this time are retrieved.</p>
   */
  EndTime?: Date;

  /**
   * <p>If true, retrieve only active scheduled actions.
   *            If false, retrieve only disabled scheduled actions. </p>
   */
  Active?: boolean;

  /**
   * <p>List of scheduled action filters. </p>
   */
  Filters?: ScheduledActionFilter[];

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeScheduledActions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *             <p>Default: <code>100</code>
   *             </p>
   *             <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export interface ScheduledActionsMessage {
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeScheduledActions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>List of retrieved scheduled actions. </p>
   */
  ScheduledActions?: ScheduledAction[];
}

/**
 * <p>The result of the <code>DescribeSnapshotCopyGrants</code> action.</p>
 */
export interface DescribeSnapshotCopyGrantsMessage {
  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <code>DescribeSnapshotCopyGrant</code> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *         <p>Constraints: You can specify either the <b>SnapshotCopyGrantName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   */
  Marker?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching resources that are
   *             associated with the specified key or keys. For example, suppose that you have resources
   *             tagged with keys called <code>owner</code> and <code>environment</code>. If you specify
   *             both of these tag keys in the request, Amazon Redshift returns a response with all resources
   *             that have either or both of these tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching resources that are
   *             associated with the specified value or values. For example, suppose that you have
   *             resources tagged with values called <code>admin</code> and <code>test</code>. If you
   *             specify both of these tag values in the request, Amazon Redshift returns a response with all
   *             resources that have either or both of these tag values associated with them.</p>
   */
  TagValues?: string[];
}

/**
 * <p></p>
 */
export interface SnapshotCopyGrantMessage {
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <code>DescribeSnapshotCopyGrant</code> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *         <p>Constraints: You can specify either the <b>SnapshotCopyGrantName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   */
  Marker?: string;

  /**
   * <p>The list of <code>SnapshotCopyGrant</code> objects.</p>
   */
  SnapshotCopyGrants?: SnapshotCopyGrant[];
}

export interface DescribeSnapshotSchedulesMessage {
  /**
   * <p>The unique identifier for the cluster whose snapshot schedules you want to
   *             view.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>A unique identifier for a snapshot schedule.</p>
   */
  ScheduleIdentifier?: string;

  /**
   * <p>The key value for a snapshot schedule tag.</p>
   */
  TagKeys?: string[];

  /**
   * <p>The value corresponding to the key of the snapshot schedule tag.</p>
   */
  TagValues?: string[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number or response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned <code>marker</code>
   *             value.</p>
   */
  MaxRecords?: number;
}

export interface DescribeSnapshotSchedulesOutputMessage {
  /**
   * <p>A list of SnapshotSchedules.</p>
   */
  SnapshotSchedules?: SnapshotSchedule[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request.</p>
   */
  Marker?: string;
}

/**
 * <p></p>
 */
export interface DescribeTableRestoreStatusMessage {
  /**
   * <p>The Amazon Redshift cluster that the table is being restored to.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The identifier of the table restore request to return status for. If you don't
   *             specify a <code>TableRestoreRequestId</code> value, then
   *                 <code>DescribeTableRestoreStatus</code> returns the status of all in-progress table
   *             restore requests.</p>
   */
  TableRestoreRequestId?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a marker is
   *             included in the response so that the remaining results can be retrieved.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous
   *                 <code>DescribeTableRestoreStatus</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *                 <code>MaxRecords</code> parameter.</p>
   */
  Marker?: string;
}

/**
 * <p>The specified <code>TableRestoreRequestId</code> value was not found.</p>
 */
export class TableRestoreNotFoundFault extends __BaseException {
  readonly name: "TableRestoreNotFoundFault" = "TableRestoreNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TableRestoreNotFoundFault, __BaseException>) {
    super({
      name: "TableRestoreNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TableRestoreNotFoundFault.prototype);
  }
}

export enum TableRestoreStatusType {
  CANCELED = "CANCELED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Describes the status of a <a>RestoreTableFromClusterSnapshot</a>
 *             operation.</p>
 */
export interface TableRestoreStatus {
  /**
   * <p>The unique identifier for the table restore request.</p>
   */
  TableRestoreRequestId?: string;

  /**
   * <p>A value that describes the current state of the table restore request.</p>
   *         <p>Valid Values: <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>,
   *                 <code>PENDING</code>, <code>IN_PROGRESS</code>
   *         </p>
   */
  Status?: TableRestoreStatusType | string;

  /**
   * <p>A description of the status of the table restore request. Status values include
   *                 <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>,
   *                 <code>PENDING</code>, <code>IN_PROGRESS</code>.</p>
   */
  Message?: string;

  /**
   * <p>The time that the table restore request was made, in Universal Coordinated Time
   *             (UTC).</p>
   */
  RequestTime?: Date;

  /**
   * <p>The amount of data restored to the new table so far, in megabytes (MB).</p>
   */
  ProgressInMegaBytes?: number;

  /**
   * <p>The total amount of data to restore to the new table, in megabytes (MB).</p>
   */
  TotalDataInMegaBytes?: number;

  /**
   * <p>The identifier of the Amazon Redshift cluster that the table is being restored
   *             to.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The identifier of the snapshot that the table is being restored from.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>The name of the source database that contains the table being restored.</p>
   */
  SourceDatabaseName?: string;

  /**
   * <p>The name of the source schema that contains the table being restored.</p>
   */
  SourceSchemaName?: string;

  /**
   * <p>The name of the source table being restored.</p>
   */
  SourceTableName?: string;

  /**
   * <p>The name of the database to restore the table to.</p>
   */
  TargetDatabaseName?: string;

  /**
   * <p>The name of the schema to restore the table to.</p>
   */
  TargetSchemaName?: string;

  /**
   * <p>The name of the table to create as a result of the table restore request.</p>
   */
  NewTableName?: string;
}

/**
 * <p></p>
 */
export interface TableRestoreStatusMessage {
  /**
   * <p>A list of status details for one or more table restore requests.</p>
   */
  TableRestoreStatusDetails?: TableRestoreStatus[];

  /**
   * <p>A pagination token that can be used in a subsequent <a>DescribeTableRestoreStatus</a> request.</p>
   */
  Marker?: string;
}

/**
 * <p></p>
 */
export interface DescribeTagsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) for which you want to describe the tag or tags. For
   *             example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. </p>
   */
  ResourceName?: string;

  /**
   * <p>The type of resource with which you want to view tags. Valid resource types are: </p>
   *         <ul>
   *             <li>
   *                 <p>Cluster</p>
   *             </li>
   *             <li>
   *                 <p>CIDR/IP</p>
   *             </li>
   *             <li>
   *                 <p>EC2 security group</p>
   *             </li>
   *             <li>
   *                 <p>Snapshot</p>
   *             </li>
   *             <li>
   *                 <p>Cluster security group</p>
   *             </li>
   *             <li>
   *                 <p>Subnet group</p>
   *             </li>
   *             <li>
   *                 <p>HSM connection</p>
   *             </li>
   *             <li>
   *                 <p>HSM certificate</p>
   *             </li>
   *             <li>
   *                 <p>Parameter group</p>
   *             </li>
   *             <li>
   *                 <p>Snapshot copy grant</p>
   *             </li>
   *          </ul>
   *         <p>For more information about Amazon Redshift resource types and constructing ARNs, go to
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-iam-access-control-specify-actions">Specifying Policy Elements: Actions, Effects, Resources, and Principals</a> in
   *             the Amazon Redshift Cluster Management Guide. </p>
   */
  ResourceType?: string;

  /**
   * <p>The maximum number or response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned <code>marker</code> value.
   *         </p>
   */
  MaxRecords?: number;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching resources that are
   *             associated with the specified key or keys. For example, suppose that you have resources
   *             tagged with keys called <code>owner</code> and <code>environment</code>. If you specify
   *             both of these tag keys in the request, Amazon Redshift returns a response with all resources
   *             that have either or both of these tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching resources that are
   *             associated with the specified value or values. For example, suppose that you have
   *             resources tagged with values called <code>admin</code> and <code>test</code>. If you
   *             specify both of these tag values in the request, Amazon Redshift returns a response with all
   *             resources that have either or both of these tag values associated with them.</p>
   */
  TagValues?: string[];
}

/**
 * <p>A tag and its associated resource.</p>
 */
export interface TaggedResource {
  /**
   * <p>The tag for the resource.</p>
   */
  Tag?: Tag;

  /**
   * <p>The Amazon Resource Name (ARN) with which the tag is associated, for example:
   *                 <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>.</p>
   */
  ResourceName?: string;

  /**
   * <p>The type of resource with which the tag is associated. Valid resource types are: </p>
   *         <ul>
   *             <li>
   *                 <p>Cluster</p>
   *             </li>
   *             <li>
   *                 <p>CIDR/IP</p>
   *             </li>
   *             <li>
   *                 <p>EC2 security group</p>
   *             </li>
   *             <li>
   *                 <p>Snapshot</p>
   *             </li>
   *             <li>
   *                 <p>Cluster security group</p>
   *             </li>
   *             <li>
   *                 <p>Subnet group</p>
   *             </li>
   *             <li>
   *                 <p>HSM connection</p>
   *             </li>
   *             <li>
   *                 <p>HSM certificate</p>
   *             </li>
   *             <li>
   *                 <p>Parameter group</p>
   *             </li>
   *          </ul>
   *         <p>For more information about Amazon Redshift resource types and constructing ARNs, go to
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-iam-access-control-specify-actions">Constructing an Amazon Redshift Amazon Resource Name (ARN)</a> in the
   *             Amazon Redshift Cluster Management Guide. </p>
   */
  ResourceType?: string;
}

/**
 * <p></p>
 */
export interface TaggedResourceListMessage {
  /**
   * <p>A list of tags with their associated resources.</p>
   */
  TaggedResources?: TaggedResource[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

export interface DescribeUsageLimitsMessage {
  /**
   * <p>The identifier of the usage limit to describe.</p>
   */
  UsageLimitId?: string;

  /**
   * <p>The identifier of the cluster for which you want to describe usage limits.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The feature type for which you want to describe usage limits.</p>
   */
  FeatureType?: UsageLimitFeatureType | string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *         <p>Default: <code>100</code>
   *         </p>
   *         <p>Constraints: minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeUsageLimits</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>A tag key or keys for which you want to return all matching usage limit objects
   *             that are associated with the specified key or keys. For example, suppose that you
   *             have parameter groups that are tagged with keys called <code>owner</code> and
   *             <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the usage limit objects have either or both of these
   *             tag keys associated with them.</p>
   */
  TagKeys?: string[];

  /**
   * <p>A tag value or values for which you want to return all matching usage limit objects
   *             that are associated with the specified tag value or values. For example, suppose
   *             that you have parameter groups that are tagged with values called <code>admin</code> and
   *             <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the usage limit objects that have either or both of these tag
   *             values associated with them.</p>
   */
  TagValues?: string[];
}

export interface UsageLimitList {
  /**
   * <p>Contains the output from the <a>DescribeUsageLimits</a>
   *             action. </p>
   */
  UsageLimits?: UsageLimit[];

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   */
  Marker?: string;
}

/**
 * <p></p>
 */
export interface DisableLoggingMessage {
  /**
   * <p>The identifier of the cluster on which logging is to be stopped.</p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;
}

/**
 * <p></p>
 */
export interface DisableSnapshotCopyMessage {
  /**
   * <p>The unique identifier of the source cluster that you want to disable copying of
   *             snapshots to a destination region.</p>
   *         <p>Constraints: Must be the valid name of an existing cluster that has cross-region
   *             snapshot copy enabled.</p>
   */
  ClusterIdentifier: string | undefined;
}

export interface DisableSnapshotCopyResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p>The cluster already has cross-region snapshot copy disabled.</p>
 */
export class SnapshotCopyAlreadyDisabledFault extends __BaseException {
  readonly name: "SnapshotCopyAlreadyDisabledFault" = "SnapshotCopyAlreadyDisabledFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyAlreadyDisabledFault, __BaseException>) {
    super({
      name: "SnapshotCopyAlreadyDisabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyAlreadyDisabledFault.prototype);
  }
}

export interface DisassociateDataShareConsumerMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare to remove association for. </p>
   */
  DataShareArn: string | undefined;

  /**
   * <p>A value that specifies whether association for the datashare is removed from the
   *             entire account.</p>
   */
  DisassociateEntireAccount?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the consumer that association for
   *             the datashare is removed from.</p>
   */
  ConsumerArn?: string;

  /**
   * <p>From a datashare consumer account, removes association of a datashare from all the existing and future namespaces in the specified Amazon Web Services Region.</p>
   */
  ConsumerRegion?: string;
}

/**
 * <p></p>
 */
export interface EnableLoggingMessage {
  /**
   * <p>The identifier of the cluster on which logging is to be started.</p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of an existing S3 bucket where the log files are to be stored.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be in the same region as the cluster</p>
   *             </li>
   *             <li>
   *                 <p>The cluster must have read bucket and put object permissions</p>
   *             </li>
   *          </ul>
   */
  BucketName?: string;

  /**
   * <p>The prefix applied to the log file names.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Cannot exceed 512 characters</p>
   *             </li>
   *             <li>
   *                 <p>Cannot contain spaces( ), double quotes ("), single quotes ('), a backslash
   *                     (\), or control characters. The hexadecimal codes for invalid characters are: </p>
   *                 <ul>
   *                   <li>
   *                         <p>x00 to x20</p>
   *                     </li>
   *                   <li>
   *                         <p>x22</p>
   *                     </li>
   *                   <li>
   *                         <p>x27</p>
   *                     </li>
   *                   <li>
   *                         <p>x5c</p>
   *                     </li>
   *                   <li>
   *                         <p>x7f or larger</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  S3KeyPrefix?: string;

  /**
   * <p>The log destination type. An enum with possible values of <code>s3</code> and <code>cloudwatch</code>.</p>
   */
  LogDestinationType?: LogDestinationType | string;

  /**
   * <p>The collection of exported log types. Log types include the connection log, user log and user activity log.</p>
   */
  LogExports?: string[];
}

/**
 * <p>The cluster does not have read bucket or put object permissions on the S3 bucket
 *             specified when enabling logging.</p>
 */
export class InsufficientS3BucketPolicyFault extends __BaseException {
  readonly name: "InsufficientS3BucketPolicyFault" = "InsufficientS3BucketPolicyFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientS3BucketPolicyFault, __BaseException>) {
    super({
      name: "InsufficientS3BucketPolicyFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientS3BucketPolicyFault.prototype);
  }
}

/**
 * <p>The S3 bucket name is invalid. For more information about naming rules, go to
 *                 <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket
 *                 Restrictions and Limitations</a> in the Amazon Simple Storage Service (S3)
 *             Developer Guide.</p>
 */
export class InvalidS3BucketNameFault extends __BaseException {
  readonly name: "InvalidS3BucketNameFault" = "InvalidS3BucketNameFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3BucketNameFault, __BaseException>) {
    super({
      name: "InvalidS3BucketNameFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3BucketNameFault.prototype);
  }
}

/**
 * <p>The string specified for the logging S3 key prefix does not comply with the
 *             documented constraints.</p>
 */
export class InvalidS3KeyPrefixFault extends __BaseException {
  readonly name: "InvalidS3KeyPrefixFault" = "InvalidS3KeyPrefixFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3KeyPrefixFault, __BaseException>) {
    super({
      name: "InvalidS3KeyPrefixFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3KeyPrefixFault.prototype);
  }
}

/**
 * <p></p>
 */
export interface EnableSnapshotCopyMessage {
  /**
   * <p>The unique identifier of the source cluster to copy snapshots from.</p>
   *         <p>Constraints: Must be the valid name of an existing cluster that does not already
   *             have cross-region snapshot copy enabled.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The destination Amazon Web Services Region that you want to copy snapshots to.</p>
   *         <p>Constraints: Must be the name of a valid Amazon Web Services Region. For more information, see
   *                 <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region">Regions and Endpoints</a> in the Amazon Web Services General Reference.
   *         </p>
   */
  DestinationRegion: string | undefined;

  /**
   * <p>The number of days to retain automated snapshots in the destination region after
   *             they are copied from the source region.</p>
   *         <p>Default: 7.</p>
   *         <p>Constraints: Must be at least 1 and no more than 35.</p>
   */
  RetentionPeriod?: number;

  /**
   * <p>The name of the snapshot copy grant to use when snapshots of an Amazon Web Services KMS-encrypted
   *             cluster are copied to the destination region.</p>
   */
  SnapshotCopyGrantName?: string;

  /**
   * <p>The number of days to retain newly copied snapshots in the destination Amazon Web Services Region
   *             after they are copied from the source Amazon Web Services Region. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;
}

export interface EnableSnapshotCopyResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p>The specified options are incompatible.</p>
 */
export class IncompatibleOrderableOptions extends __BaseException {
  readonly name: "IncompatibleOrderableOptions" = "IncompatibleOrderableOptions";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleOrderableOptions, __BaseException>) {
    super({
      name: "IncompatibleOrderableOptions",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleOrderableOptions.prototype);
  }
}

/**
 * <p>The cluster already has cross-region snapshot copy enabled.</p>
 */
export class SnapshotCopyAlreadyEnabledFault extends __BaseException {
  readonly name: "SnapshotCopyAlreadyEnabledFault" = "SnapshotCopyAlreadyEnabledFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyAlreadyEnabledFault, __BaseException>) {
    super({
      name: "SnapshotCopyAlreadyEnabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyAlreadyEnabledFault.prototype);
  }
}

/**
 * <p>The specified region is incorrect or does not exist.</p>
 */
export class UnknownSnapshotCopyRegionFault extends __BaseException {
  readonly name: "UnknownSnapshotCopyRegionFault" = "UnknownSnapshotCopyRegionFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnknownSnapshotCopyRegionFault, __BaseException>) {
    super({
      name: "UnknownSnapshotCopyRegionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnknownSnapshotCopyRegionFault.prototype);
  }
}

/**
 * <p>The authorization for this endpoint can't be found.</p>
 */
export class EndpointAuthorizationNotFoundFault extends __BaseException {
  readonly name: "EndpointAuthorizationNotFoundFault" = "EndpointAuthorizationNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointAuthorizationNotFoundFault, __BaseException>) {
    super({
      name: "EndpointAuthorizationNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointAuthorizationNotFoundFault.prototype);
  }
}

/**
 * <p>The request parameters to get cluster credentials.</p>
 */
export interface GetClusterCredentialsMessage {
  /**
   * <p>The name of a database user. If a user name matching <code>DbUser</code> exists in
   *             the database, the temporary user credentials have the same permissions as the existing
   *             user. If <code>DbUser</code> doesn't exist in the database and <code>Autocreate</code>
   *             is <code>True</code>, a new user is created using the value for <code>DbUser</code> with
   *             PUBLIC permissions. If a database user matching the value for <code>DbUser</code>
   *             doesn't exist and <code>Autocreate</code> is <code>False</code>, then the command
   *             succeeds but the connection attempt will fail because the user doesn't exist in the
   *             database.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">CREATE USER</a> in the Amazon
   *             Redshift Database Developer Guide. </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 64 alphanumeric characters or hyphens. The user name can't be
   *                         <code>PUBLIC</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain uppercase or lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                 <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   */
  DbUser: string | undefined;

  /**
   * <p>The name of a database that <code>DbUser</code> is authorized to log on to. If
   *                 <code>DbName</code> is not specified, <code>DbUser</code> can log on to any existing
   *             database.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 64 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>Must contain uppercase or lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                 <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   */
  DbName?: string;

  /**
   * <p>The unique identifier of the cluster that contains the database for which you are
   *             requesting credentials. This parameter is case sensitive.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The number of seconds until the returned temporary password expires.</p>
   *         <p>Constraint: minimum 900, maximum 3600.</p>
   *         <p>Default: 900</p>
   */
  DurationSeconds?: number;

  /**
   * <p>Create a database user with the name specified for the user named in
   *                 <code>DbUser</code> if one does not exist.</p>
   */
  AutoCreate?: boolean;

  /**
   * <p>A list of the names of existing database groups that the user named in
   *                 <code>DbUser</code> will join for the current session, in addition to any group
   *             memberships for an existing user. If not specified, a new user is added only to
   *             PUBLIC.</p>
   *         <p>Database group name constraints</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 64 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>Must contain only lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                 <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   */
  DbGroups?: string[];
}

export interface GetClusterCredentialsWithIAMMessage {
  /**
   * <p>The name of the database for which you are requesting credentials.
   *             If the database name is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name.
   *             If the database name is not specified, access to all databases is allowed.</p>
   */
  DbName?: string;

  /**
   * <p>The unique identifier of the cluster that contains the database for which you are
   *             requesting credentials. </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The number of seconds until the returned temporary password expires.</p>
   *         <p>Range: 900-3600. Default: 900.</p>
   */
  DurationSeconds?: number;
}

export enum ReservedNodeExchangeActionType {
  RESIZE_CLUSTER = "resize-cluster",
  RESTORE_CLUSTER = "restore-cluster",
}

export interface GetReservedNodeExchangeConfigurationOptionsInputMessage {
  /**
   * <p>The action type of the reserved-node configuration. The action type can be an exchange initiated from either a snapshot or a resize.</p>
   */
  ActionType: ReservedNodeExchangeActionType | string | undefined;

  /**
   * <p>The identifier for the cluster that is the source for a reserved-node exchange.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The identifier for the snapshot that is the source for the reserved-node exchange.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>Marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous <code>GetReservedNodeExchangeConfigurationOptions</code> request. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the value
   *             specified by the <code>MaxRecords</code> parameter. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request.</p>
   */
  Marker?: string;
}

/**
 * <p>Details for a reserved-node exchange. Examples include the node type for a
 *             reserved node, the price for a node, the node's state, and other details.</p>
 */
export interface ReservedNodeConfigurationOption {
  /**
   * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node
   *             offerings. </p>
   */
  SourceReservedNode?: ReservedNode;

  /**
   * <p>The target reserved-node count.</p>
   */
  TargetReservedNodeCount?: number;

  /**
   * <p>Describes a reserved node offering.</p>
   */
  TargetReservedNodeOffering?: ReservedNodeOffering;
}

export interface GetReservedNodeExchangeConfigurationOptionsOutputMessage {
  /**
   * <p>A pagination token provided by a previous <code>GetReservedNodeExchangeConfigurationOptions</code> request.</p>
   */
  Marker?: string;

  /**
   * <p>the configuration options for the reserved-node
   *             exchange. These options include information about the source reserved node and target reserved
   *             node. Details include the node type, the price, the node count, and the offering
   *             type.</p>
   */
  ReservedNodeConfigurationOptionList?: ReservedNodeConfigurationOption[];
}

/**
 * <p></p>
 */
export interface GetReservedNodeExchangeOfferingsInputMessage {
  /**
   * <p>A string representing the node identifier for the DC1 Reserved Node to be
   *             exchanged.</p>
   */
  ReservedNodeId: string | undefined;

  /**
   * <p>An integer setting the maximum number of ReservedNodeOfferings to
   *             retrieve.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A value that indicates the starting point for the next set of
   *             ReservedNodeOfferings.</p>
   */
  Marker?: string;
}

export interface GetReservedNodeExchangeOfferingsOutputMessage {
  /**
   * <p>An optional parameter that specifies the starting point for returning a set of
   *             response records. When the results of a <code>GetReservedNodeExchangeOfferings</code>
   *             request exceed the value specified in MaxRecords, Amazon Redshift returns a value in the
   *             marker field of the response. You can retrieve the next set of response records by
   *             providing the returned marker value in the marker parameter and retrying the request.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>Returns an array of <a>ReservedNodeOffering</a> objects.</p>
   */
  ReservedNodeOfferings?: ReservedNodeOffering[];
}

/**
 * <p>You have exceeded the allowed number of table restore requests. Wait for your
 *             current table restore requests to complete before making a new request.</p>
 */
export class InProgressTableRestoreQuotaExceededFault extends __BaseException {
  readonly name: "InProgressTableRestoreQuotaExceededFault" = "InProgressTableRestoreQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InProgressTableRestoreQuotaExceededFault, __BaseException>) {
    super({
      name: "InProgressTableRestoreQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InProgressTableRestoreQuotaExceededFault.prototype);
  }
}

/**
 * <p>The restore is invalid.</p>
 */
export class InvalidRestoreFault extends __BaseException {
  readonly name: "InvalidRestoreFault" = "InvalidRestoreFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRestoreFault, __BaseException>) {
    super({
      name: "InvalidRestoreFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRestoreFault.prototype);
  }
}

/**
 * <p>The value specified for the <code>sourceDatabaseName</code>,
 *                 <code>sourceSchemaName</code>, or <code>sourceTableName</code> parameter, or a
 *             combination of these, doesn't exist in the snapshot.</p>
 */
export class InvalidTableRestoreArgumentFault extends __BaseException {
  readonly name: "InvalidTableRestoreArgumentFault" = "InvalidTableRestoreArgumentFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTableRestoreArgumentFault, __BaseException>) {
    super({
      name: "InvalidTableRestoreArgumentFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTableRestoreArgumentFault.prototype);
  }
}

export interface ModifyAquaInputMessage {
  /**
   * <p>The identifier of the cluster to be modified.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>This parameter is retired. Amazon Redshift automatically  determines whether to use AQUA (Advanced Query Accelerator).</p>
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | string;
}

export interface ModifyAquaOutputMessage {
  /**
   * <p>This parameter is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). </p>
   */
  AquaConfiguration?: AquaConfiguration;
}

export interface ModifyAuthenticationProfileMessage {
  /**
   * <p>The name of the authentication profile to replace.</p>
   */
  AuthenticationProfileName: string | undefined;

  /**
   * <p>The new content of the authentication profile in JSON format.
   *             The maximum length of the JSON string is determined by a quota for your account.</p>
   */
  AuthenticationProfileContent: string | undefined;
}

export interface ModifyAuthenticationProfileResult {
  /**
   * <p>The name of the authentication profile that was replaced.</p>
   */
  AuthenticationProfileName?: string;

  /**
   * <p>The updated content of the authentication profile in JSON format.</p>
   */
  AuthenticationProfileContent?: string;
}

/**
 * <p></p>
 */
export interface ModifyClusterMessage {
  /**
   * <p>The unique identifier of the cluster to be modified.</p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The new cluster type.</p>
   *         <p>When you submit your cluster resize request, your existing cluster goes into a
   *             read-only mode. After Amazon Redshift provisions a new cluster based on your resize
   *             requirements, there will be outage for a period while the old cluster is deleted and
   *             your connection is switched to the new cluster. You can use <a>DescribeResize</a> to track the progress of the resize request. </p>
   *         <p>Valid Values: <code> multi-node | single-node </code>
   *         </p>
   */
  ClusterType?: string;

  /**
   * <p>The new node type of the cluster. If you specify a new node type, you must also
   *             specify the number of nodes parameter.</p>
   *         <p>
   * For more information about resizing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html">Resizing Clusters in Amazon Redshift</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   *         <p>Valid Values: <code>ds2.xlarge</code> | <code>ds2.8xlarge</code> |
   *             <code>dc1.large</code> | <code>dc1.8xlarge</code> |
   *             <code>dc2.large</code> | <code>dc2.8xlarge</code> |
   *             <code>ra3.xlplus</code> |  <code>ra3.4xlarge</code> | <code>ra3.16xlarge</code>
   *          </p>
   */
  NodeType?: string;

  /**
   * <p>The new number of nodes of the cluster. If you specify a new number of nodes, you
   *             must also specify the node type parameter.</p>
   *         <p>
   * For more information about resizing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html">Resizing Clusters in Amazon Redshift</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *
   *         <p>Valid Values: Integer greater than <code>0</code>.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>A list of cluster security groups to be authorized on this cluster. This change is
   *             asynchronously applied as soon as possible.</p>
   *         <p>Security groups currently associated with the cluster, and not in the list of
   *             groups to apply, will be revoked from the cluster.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  ClusterSecurityGroups?: string[];

  /**
   * <p>A list of virtual private cloud (VPC) security groups to be associated with the
   *             cluster. This change is asynchronously applied as soon as possible.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The new password for the cluster admin user. This change is asynchronously applied
   *             as soon as possible. Between the time of the request and the completion of the request,
   *             the <code>MasterUserPassword</code> element exists in the
   *                 <code>PendingModifiedValues</code> element of the operation response. </p>
   *         <note>
   *             <p>Operations never return the password, so this operation provides a way to
   *                 regain access to the admin user account for a cluster if the password is
   *                 lost.</p>
   *         </note>
   *         <p>Default: Uses existing setting.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be between 8 and 64 characters in length.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain at least one uppercase letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain at least one lowercase letter.</p>
   *             </li>
   *             <li>
   *                 <p>Must contain one number.</p>
   *             </li>
   *             <li>
   *                 <p>Can be any printable ASCII character (ASCII code 33-126) except <code>'</code>
   *                     (single quote), <code>"</code> (double quote), <code>\</code>, <code>/</code>, or <code>@</code>.</p>
   *             </li>
   *          </ul>
   */
  MasterUserPassword?: string;

  /**
   * <p>The name of the cluster parameter group to apply to this cluster. This change is
   *             applied only after the cluster is rebooted. To reboot a cluster use <a>RebootCluster</a>. </p>
   *         <p>Default: Uses existing setting.</p>
   *         <p>Constraints: The cluster parameter group must be in the same parameter group family
   *             that matches the cluster version.</p>
   */
  ClusterParameterGroupName?: string;

  /**
   * <p>The number of days that automated snapshots are retained. If the value is 0,
   *             automated snapshots are disabled. Even if automated snapshots are disabled, you can
   *             still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p>
   *         <p>If you decrease the automated snapshot retention period from its current value,
   *             existing automated snapshots that fall outside of the new retention period will be
   *             immediately deleted.</p>
   *
   *         <p>You can't disable automated snapshots for RA3 node types. Set the automated retention period from 1-35 days.</p>
   *         <p>Default: Uses existing setting.</p>
   *         <p>Constraints: Must be a value from 0 to 35.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The default for number of days that a newly created manual snapshot is retained. If
   *             the value is -1, the manual snapshot is retained indefinitely. This value doesn't
   *             retroactively change the retention periods of existing manual snapshots.</p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *         <p>The default value is -1.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The weekly time range (in UTC) during which system maintenance can occur, if
   *             necessary. If system maintenance is necessary during the window, it may result in an
   *             outage.</p>
   *         <p>This maintenance window change is made immediately. If the new maintenance window
   *             indicates the current time, there must be at least 120 minutes between the current time
   *             and end of the window in order to ensure that pending changes are applied.</p>
   *         <p>Default: Uses existing setting.</p>
   *         <p>Format: ddd:hh24:mi-ddd:hh24:mi, for example
   *             <code>wed:07:30-wed:08:00</code>.</p>
   *         <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *         <p>Constraints: Must be at least 30 minutes.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The new version number of the Amazon Redshift engine to upgrade to.</p>
   *         <p>For major version upgrades, if a non-default cluster parameter group is currently
   *             in use, a new cluster parameter group in the cluster parameter group family for the new
   *             version must be specified. The new cluster parameter group can be the default for that
   *             cluster parameter group family.
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *         <p>Example: <code>1.0</code>
   *         </p>
   */
  ClusterVersion?: string;

  /**
   * <p>If <code>true</code>, major version upgrades will be applied automatically to the
   *             cluster during the maintenance window. </p>
   *         <p>Default: <code>false</code>
   *         </p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to
   *             retrieve the data encryption keys stored in an HSM.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>Specifies the name of the HSM configuration that contains the information the
   *             Amazon Redshift cluster can use to retrieve and store keys in an HSM.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>The new identifier for the cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Alphabetic characters must be lowercase.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Must be unique for all clusters within an Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   *
   *             <p>Example: <code>examplecluster</code>
   *         </p>
   */
  NewClusterIdentifier?: string;

  /**
   * <p>If <code>true</code>, the cluster can be accessed from a public network. Only
   *             clusters in VPCs can be set to be publicly available.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The Elastic IP (EIP) address for the cluster.</p>
   *         <p>Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible
   *             through an Internet gateway. For more information about provisioning clusters in
   *             EC2-VPC, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms">Supported
   *                 Platforms to Launch Your Cluster</a> in the Amazon Redshift Cluster Management Guide.</p>
   */
  ElasticIp?: string;

  /**
   * <p>An option that specifies whether to create the cluster with enhanced VPC routing
   *             enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a
   *             VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in
   *             the Amazon Redshift Cluster Management Guide.</p>
   *         <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p>
   *         <p>Default: false</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>The name for the maintenance track that you want to assign for the cluster. This name
   *             change is asynchronous. The new track name stays in the
   *                 <code>PendingModifiedValues</code> for the cluster until the next maintenance
   *             window. When the maintenance track changes, the cluster is switched to the latest
   *             cluster release available for the maintenance track. At this point, the maintenance
   *             track name is applied.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>Indicates whether the cluster is encrypted. If the value is encrypted (true) and you
   *             provide a value for the <code>KmsKeyId</code> parameter, we encrypt the cluster
   *             with the provided <code>KmsKeyId</code>. If you don't provide a <code>KmsKeyId</code>,
   *             we encrypt with the default key. </p>
   *             <p>If the value is not encrypted (false), then the cluster is decrypted. </p>
   */
  Encrypted?: boolean;

  /**
   * <p>The Key Management Service (KMS) key ID of the encryption key that you want to use
   *             to encrypt data in the cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.</p>
   */
  AvailabilityZoneRelocation?: boolean;

  /**
   * <p>The option to initiate relocation for an Amazon Redshift cluster to the target Availability Zone.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The option to change the port of an Amazon Redshift cluster.</p>
   */
  Port?: number;
}

export interface ModifyClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p>The number of tables in the cluster exceeds the limit for the requested new cluster
 *             node type. </p>
 */
export class TableLimitExceededFault extends __BaseException {
  readonly name: "TableLimitExceededFault" = "TableLimitExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TableLimitExceededFault, __BaseException>) {
    super({
      name: "TableLimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TableLimitExceededFault.prototype);
  }
}

/**
 * <p>A request option was specified that is not supported.</p>
 */
export class UnsupportedOptionFault extends __BaseException {
  readonly name: "UnsupportedOptionFault" = "UnsupportedOptionFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOptionFault, __BaseException>) {
    super({
      name: "UnsupportedOptionFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOptionFault.prototype);
  }
}

export interface ModifyClusterDbRevisionMessage {
  /**
   * <p>The unique identifier of a cluster whose database revision you want to modify. </p>
   *         <p>Example: <code>examplecluster</code>
   *         </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the database revision. You can retrieve this value from the
   *             response to the <a>DescribeClusterDbRevisions</a> request.</p>
   */
  RevisionTarget: string | undefined;
}

export interface ModifyClusterDbRevisionResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p></p>
 */
export interface ModifyClusterIamRolesMessage {
  /**
   * <p>The unique identifier of the cluster for which you want to associate or
   *             disassociate IAM roles.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>Zero or more IAM roles to associate with the cluster. The roles must be in their
   *             Amazon Resource Name (ARN) format. </p>
   */
  AddIamRoles?: string[];

  /**
   * <p>Zero or more IAM roles in ARN format to disassociate from the cluster. </p>
   */
  RemoveIamRoles?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was last modified.</p>
   */
  DefaultIamRoleArn?: string;
}

export interface ModifyClusterIamRolesResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export interface ModifyClusterMaintenanceMessage {
  /**
   * <p>A unique identifier for the cluster.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>A boolean indicating whether to enable the deferred maintenance window. </p>
   */
  DeferMaintenance?: boolean;

  /**
   * <p>A unique identifier for the deferred maintenance window.</p>
   */
  DeferMaintenanceIdentifier?: string;

  /**
   * <p>A timestamp indicating the start time for the deferred maintenance window.</p>
   */
  DeferMaintenanceStartTime?: Date;

  /**
   * <p>A timestamp indicating end time for the deferred maintenance window. If you specify an
   *             end time, you can't specify a duration.</p>
   */
  DeferMaintenanceEndTime?: Date;

  /**
   * <p>An integer indicating the duration of the maintenance window in days. If you specify a
   *             duration, you can't specify an end time. The duration must be 45 days or less.</p>
   */
  DeferMaintenanceDuration?: number;
}

export interface ModifyClusterMaintenanceResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p>Describes a modify cluster parameter group operation. </p>
 */
export interface ModifyClusterParameterGroupMessage {
  /**
   * <p>The name of the parameter group to be modified.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>An array of parameters to be modified. A maximum of 20 parameters can be modified
   *             in a single request.</p>
   *         <p>For each parameter to be modified, you must supply at least the parameter name and
   *             parameter value; other name-value pairs of the parameter are optional.</p>
   *         <p>For the workload management (WLM) configuration, you must supply all the name-value
   *             pairs in the wlm_json_configuration parameter.</p>
   */
  Parameters: Parameter[] | undefined;
}

export interface ModifyClusterSnapshotMessage {
  /**
   * <p>The identifier of the snapshot whose setting you want to modify.</p>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely.</p>
   *         <p>If the manual snapshot falls outside of the new retention period, you can specify the
   *             force option to immediately delete the snapshot.</p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>A Boolean option to override an exception if the retention period has already
   *             passed.</p>
   */
  Force?: boolean;
}

export interface ModifyClusterSnapshotResult {
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export interface ModifyClusterSnapshotScheduleMessage {
  /**
   * <p>A unique identifier for the cluster whose snapshot schedule you want to modify.
   *         </p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>A unique alphanumeric identifier for the schedule that you want to associate with the
   *             cluster.</p>
   */
  ScheduleIdentifier?: string;

  /**
   * <p>A boolean to indicate whether to remove the assoiciation between the cluster and the
   *             schedule.</p>
   */
  DisassociateSchedule?: boolean;
}

/**
 * <p></p>
 */
export interface ModifyClusterSubnetGroupMessage {
  /**
   * <p>The name of the subnet group to be modified.</p>
   */
  ClusterSubnetGroupName: string | undefined;

  /**
   * <p>A text description of the subnet group to be modified.</p>
   */
  Description?: string;

  /**
   * <p>An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single
   *             request.</p>
   */
  SubnetIds: string[] | undefined;
}

export interface ModifyClusterSubnetGroupResult {
  /**
   * <p>Describes a subnet group.</p>
   */
  ClusterSubnetGroup?: ClusterSubnetGroup;
}

/**
 * <p>A specified subnet is already in use by another cluster.</p>
 */
export class SubnetAlreadyInUse extends __BaseException {
  readonly name: "SubnetAlreadyInUse" = "SubnetAlreadyInUse";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetAlreadyInUse, __BaseException>) {
    super({
      name: "SubnetAlreadyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetAlreadyInUse.prototype);
  }
}

export interface ModifyEndpointAccessMessage {
  /**
   * <p>The endpoint to be modified.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The complete list of VPC security groups associated with the endpoint after the endpoint is modified.</p>
   */
  VpcSecurityGroupIds?: string[];
}

/**
 * <p></p>
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * <p>The name of the modified Amazon Redshift event notification subscription.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic to be used by the event
   *             notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The type of source that will be generating the events. For example, if you want to
   *             be notified of events generated by a cluster, you would set this parameter to cluster.
   *             If this value is not specified, events are returned for all Amazon Redshift objects in your
   *             Amazon Web Services account. You must specify a source type in order to specify source IDs.</p>
   *         <p>Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.</p>
   */
  SourceType?: string;

  /**
   * <p>A list of one or more identifiers of Amazon Redshift source objects. All of the objects
   *             must be of the same type as was specified in the source type parameter. The event
   *             subscription will return only events generated by the specified objects. If not
   *             specified, then events are returned for all objects within the source type
   *             specified.</p>
   *         <p>Example: my-cluster-1, my-cluster-2</p>
   *         <p>Example: my-snapshot-20131010</p>
   */
  SourceIds?: string[];

  /**
   * <p>Specifies the Amazon Redshift event categories to be published by the event notification
   *             subscription.</p>
   *         <p>Values: configuration, management, monitoring, security, pending</p>
   */
  EventCategories?: string[];

  /**
   * <p>Specifies the Amazon Redshift event severity to be published by the event notification
   *             subscription.</p>
   *         <p>Values: ERROR, INFO</p>
   */
  Severity?: string;

  /**
   * <p>A Boolean value indicating if the subscription is enabled. <code>true</code>
   *             indicates the subscription is enabled </p>
   */
  Enabled?: boolean;
}

export interface ModifyEventSubscriptionResult {
  /**
   * <p>Describes event subscriptions.</p>
   */
  EventSubscription?: EventSubscription;
}

export interface ModifyScheduledActionMessage {
  /**
   * <p>The name of the scheduled action to modify. </p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>A modified JSON format of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  TargetAction?: ScheduledActionType;

  /**
   * <p>A modified schedule in either <code>at( )</code> or <code>cron( )</code> format.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   */
  Schedule?: string;

  /**
   * <p>A different IAM role to assume to run the target action.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   */
  IamRole?: string;

  /**
   * <p>A modified description of the scheduled action. </p>
   */
  ScheduledActionDescription?: string;

  /**
   * <p>A modified start time of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  StartTime?: Date;

  /**
   * <p>A modified end time of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   */
  EndTime?: Date;

  /**
   * <p>A modified enable flag of the scheduled action. If true, the scheduled action is active. If false, the scheduled action is disabled. </p>
   */
  Enable?: boolean;
}

/**
 * <p></p>
 */
export interface ModifySnapshotCopyRetentionPeriodMessage {
  /**
   * <p>The unique identifier of the cluster for which you want to change the retention
   *             period for either automated or manual snapshots that are copied to a destination Amazon Web Services Region.</p>
   *         <p>Constraints: Must be the valid name of an existing cluster that has cross-region
   *             snapshot copy enabled.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The number of days to retain automated snapshots in the destination Amazon Web Services Region
   *             after they are copied from the source Amazon Web Services Region.</p>
   *         <p>By default, this only changes the retention period of copied automated snapshots. </p>
   *         <p>If you decrease the retention period for automated snapshots that are copied to a
   *             destination Amazon Web Services Region, Amazon Redshift deletes any existing automated snapshots that were
   *             copied to the destination Amazon Web Services Region and that fall outside of the new retention
   *             period.</p>
   *         <p>Constraints: Must be at least 1 and no more than 35 for automated snapshots. </p>
   *         <p>If you specify the <code>manual</code> option, only newly copied manual snapshots will
   *             have the new retention period. </p>
   *         <p>If you specify the value of -1 newly copied manual snapshots are retained
   *             indefinitely.</p>
   *         <p>Constraints: The number of days must be either -1 or an integer between 1 and 3,653
   *             for manual snapshots.</p>
   */
  RetentionPeriod: number | undefined;

  /**
   * <p>Indicates whether to apply the snapshot retention period to newly copied manual
   *             snapshots instead of automated snapshots.</p>
   */
  Manual?: boolean;
}

export interface ModifySnapshotCopyRetentionPeriodResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p>Cross-region snapshot copy was temporarily disabled. Try your request
 *             again.</p>
 */
export class SnapshotCopyDisabledFault extends __BaseException {
  readonly name: "SnapshotCopyDisabledFault" = "SnapshotCopyDisabledFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotCopyDisabledFault, __BaseException>) {
    super({
      name: "SnapshotCopyDisabledFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotCopyDisabledFault.prototype);
  }
}

export interface ModifySnapshotScheduleMessage {
  /**
   * <p>A unique alphanumeric identifier of the schedule to modify.</p>
   */
  ScheduleIdentifier: string | undefined;

  /**
   * <p>An updated list of schedule definitions. A schedule definition is made up of schedule
   *             expressions, for example, "cron(30 12 *)" or "rate(12 hours)".</p>
   */
  ScheduleDefinitions: string[] | undefined;
}

/**
 * <p>The specified snapshot schedule is already being updated.</p>
 */
export class SnapshotScheduleUpdateInProgressFault extends __BaseException {
  readonly name: "SnapshotScheduleUpdateInProgressFault" = "SnapshotScheduleUpdateInProgressFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotScheduleUpdateInProgressFault, __BaseException>) {
    super({
      name: "SnapshotScheduleUpdateInProgressFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotScheduleUpdateInProgressFault.prototype);
  }
}

export interface ModifyUsageLimitMessage {
  /**
   * <p>The identifier of the usage limit to modify.</p>
   */
  UsageLimitId: string | undefined;

  /**
   * <p>The new limit amount.
   *             For more information about this parameter, see <a>UsageLimit</a>. </p>
   */
  Amount?: number;

  /**
   * <p>The new action that Amazon Redshift takes when the limit is reached.
   *             For more information about this parameter, see <a>UsageLimit</a>. </p>
   */
  BreachAction?: UsageLimitBreachAction | string;
}

export interface PauseClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p></p>
 */
export interface PurchaseReservedNodeOfferingMessage {
  /**
   * <p>The unique identifier of the reserved node offering you want to purchase.</p>
   */
  ReservedNodeOfferingId: string | undefined;

  /**
   * <p>The number of reserved nodes that you want to purchase.</p>
   *         <p>Default: <code>1</code>
   *         </p>
   */
  NodeCount?: number;
}

export interface PurchaseReservedNodeOfferingResult {
  /**
   * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node
   *             offerings. </p>
   */
  ReservedNode?: ReservedNode;
}

/**
 * <p>Request would exceed the user's compute node quota.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export class ReservedNodeQuotaExceededFault extends __BaseException {
  readonly name: "ReservedNodeQuotaExceededFault" = "ReservedNodeQuotaExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNodeQuotaExceededFault, __BaseException>) {
    super({
      name: "ReservedNodeQuotaExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNodeQuotaExceededFault.prototype);
  }
}

/**
 * <p></p>
 */
export interface RebootClusterMessage {
  /**
   * <p>The cluster identifier.</p>
   */
  ClusterIdentifier: string | undefined;
}

export interface RebootClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export interface RejectDataShareMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare to reject.</p>
   */
  DataShareArn: string | undefined;
}

/**
 * <p></p>
 */
export interface ResetClusterParameterGroupMessage {
  /**
   * <p>The name of the cluster parameter group to be reset.</p>
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>If <code>true</code>, all parameters in the specified parameter group will be reset
   *             to their default values. </p>
   *         <p>Default: <code>true</code>
   *         </p>
   */
  ResetAllParameters?: boolean;

  /**
   * <p>An array of names of parameters to be reset. If
   *                 <i>ResetAllParameters</i> option is not used, then at least one
   *             parameter name must be supplied. </p>
   *         <p>Constraints: A maximum of 20 parameters can be reset in a single request.</p>
   */
  Parameters?: Parameter[];
}

export interface ResizeClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p></p>
 */
export interface RestoreFromClusterSnapshotMessage {
  /**
   * <p>The identifier of the cluster that will be created from restoring the
   *             snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Alphabetic characters must be lowercase.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Must be unique for all clusters within an Amazon Web Services account.</p>
   *             </li>
   *          </ul>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the snapshot from which to create the new cluster. This parameter isn't
   *             case sensitive. You can specify this parameter or <code>snapshotArn</code>, but not both.</p>
   *         <p>Example: <code>my-snapshot-id</code>
   *         </p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot associated with the message to restore from a cluster. You can specify
   *             this parameter or <code>snapshotIdentifier</code>, but not both.</p>
   */
  SnapshotArn?: string;

  /**
   * <p>The name of the cluster the source snapshot was created from. This parameter is
   *             required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   */
  SnapshotClusterIdentifier?: string;

  /**
   * <p>The port number on which the cluster accepts connections.</p>
   *         <p>Default: The same port as the original cluster.</p>
   *         <p>Constraints: Must be between <code>1115</code> and <code>65535</code>.</p>
   */
  Port?: number;

  /**
   * <p>The Amazon EC2 Availability Zone in which to restore the cluster.</p>
   *         <p>Default: A random, system-chosen Availability Zone.</p>
   *         <p>Example: <code>us-east-2a</code>
   *         </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>If <code>true</code>, major version upgrades can be applied during the maintenance
   *             window to the Amazon Redshift engine that is running on the cluster. </p>
   *         <p>Default: <code>true</code>
   *         </p>
   */
  AllowVersionUpgrade?: boolean;

  /**
   * <p>The name of the subnet group where you want to cluster restored.</p>
   *         <p>A snapshot of cluster in VPC can be restored only in VPC. Therefore, you must
   *             provide subnet group name where you want the cluster restored.</p>
   */
  ClusterSubnetGroupName?: string;

  /**
   * <p>If <code>true</code>, the cluster can be accessed from a public network. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The Amazon Web Services account used to create or copy the snapshot. Required if you are
   *             restoring a snapshot you do not own, optional if you own the snapshot.</p>
   */
  OwnerAccount?: string;

  /**
   * <p>Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to
   *             retrieve the data encryption keys stored in an HSM.</p>
   */
  HsmClientCertificateIdentifier?: string;

  /**
   * <p>Specifies the name of the HSM configuration that contains the information the
   *             Amazon Redshift cluster can use to retrieve and store keys in an HSM.</p>
   */
  HsmConfigurationIdentifier?: string;

  /**
   * <p>The Elastic IP (EIP) address for the cluster. Don't specify the Elastic IP address for a publicly
   *             accessible cluster with availability zone relocation turned on.</p>
   */
  ElasticIp?: string;

  /**
   * <p>The name of the parameter group to be associated with this cluster.</p>
   *         <p>Default: The default Amazon Redshift cluster parameter group. For information about the
   *             default parameter group, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Working with Amazon
   *                 Redshift Parameter Groups</a>.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must be 1 to 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  ClusterParameterGroupName?: string;

  /**
   * <p>A list of security groups to be associated with this cluster.</p>
   *         <p>Default: The default cluster security group for Amazon Redshift.</p>
   *         <p>Cluster security groups only apply to clusters outside of VPCs.</p>
   */
  ClusterSecurityGroups?: string[];

  /**
   * <p>A list of Virtual Private Cloud (VPC) security groups to be associated with the
   *             cluster.</p>
   *         <p>Default: The default VPC security group is associated with the cluster.</p>
   *         <p>VPC security groups only apply to clusters in VPCs.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The weekly time range (in UTC) during which automated cluster maintenance can
   *             occur.</p>
   *         <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *         </p>
   *         <p> Default: The value selected for the cluster from which the snapshot was taken. For
   *             more information about the time blocks for each region, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows">Maintenance Windows</a> in Amazon Redshift Cluster Management Guide. </p>
   *         <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The number of days that automated snapshots are retained. If the value is 0,
   *             automated snapshots are disabled. Even if automated snapshots are disabled, you can
   *             still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p>
   *
   *         <p>You can't disable automated snapshots for RA3 node types. Set the automated retention period from 1-35 days.</p>
   *         <p>Default: The value selected for the cluster from which the snapshot was
   *             taken.</p>
   *         <p>Constraints: Must be a value from 0 to 35.</p>
   */
  AutomatedSnapshotRetentionPeriod?: number;

  /**
   * <p>The default number of days to retain a manual snapshot. If the value is -1, the
   *             snapshot is retained indefinitely. This setting doesn't change the retention period
   *             of existing snapshots.</p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;

  /**
   * <p>The Key Management Service (KMS) key ID of the encryption key that encrypts data in the cluster
   *             restored from a shared snapshot. You can also provide
   *             the key ID when you restore from an unencrypted snapshot to an encrypted cluster in
   *             the same account. Additionally, you can specify a new KMS key ID when you restore from an encrypted
   *             snapshot in the same account in order to change it. In that case, the restored cluster is encrypted
   *             with the new KMS key ID.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The node type that the restored cluster will be provisioned with.</p>
   *         <p>Default: The node type of the cluster from which the snapshot was taken. You can
   *             modify this if you are using any DS node type. In that case, you can choose to restore
   *             into another DS node type of the same size. For example, you can restore ds1.8xlarge
   *             into ds2.8xlarge, or ds1.xlarge into ds2.xlarge. If you have a DC instance type, you
   *             must restore into that same instance type and size. In other words, you can only restore
   *             a dc1.large instance type into another dc1.large instance type or dc2.large instance
   *             type. You can't restore dc1.8xlarge to dc2.8xlarge. First restore to a dc1.8xlarge
   *             cluster, then resize to a dc2.8large cluster. For more information about node types, see
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-about-clusters-and-nodes">
   *                 About Clusters and Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   */
  NodeType?: string;

  /**
   * <p>An option that specifies whether to create the cluster with enhanced VPC routing
   *             enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a
   *             VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in
   *             the Amazon Redshift Cluster Management Guide.</p>
   *         <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p>
   *         <p>Default: false</p>
   */
  EnhancedVpcRouting?: boolean;

  /**
   * <p>Reserved.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>A list of Identity and Access Management (IAM) roles that can be used by the
   *             cluster to access other Amazon Web Services services. You must supply the IAM roles in their Amazon
   *             Resource Name (ARN) format. </p>
   *         <p>The maximum number of IAM roles that you can associate is subject to a quota.
   *             For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a>
   *             in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   */
  IamRoles?: string[];

  /**
   * <p>The name of the maintenance track for the restored cluster. When you take a snapshot,
   *             the snapshot inherits the <code>MaintenanceTrack</code> value from the cluster. The
   *             snapshot might be on a different track than the cluster that was the source for the
   *             snapshot. For example, suppose that you take a snapshot of a cluster that is on the
   *             current track and then change the cluster to be on the trailing track. In this case, the
   *             snapshot and the source cluster are on different tracks.</p>
   */
  MaintenanceTrackName?: string;

  /**
   * <p>A unique identifier for the snapshot schedule.</p>
   */
  SnapshotScheduleIdentifier?: string;

  /**
   * <p>The number of nodes specified when provisioning the restored cluster.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster is restored.</p>
   */
  AvailabilityZoneRelocation?: boolean;

  /**
   * <p>This parameter is retired. It does not set the AQUA configuration status. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).</p>
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was last modified while it was restored from a snapshot.</p>
   */
  DefaultIamRoleArn?: string;

  /**
   * <p>The identifier of the target reserved node offering.</p>
   */
  ReservedNodeId?: string;

  /**
   * <p>The identifier of the target reserved node offering.</p>
   */
  TargetReservedNodeOfferingId?: string;

  /**
   * <p>Enables support for restoring an unencrypted snapshot to a cluster encrypted
   *             with Key Management Service (KMS) and a customer managed key.</p>
   */
  Encrypted?: boolean;
}

export interface RestoreFromClusterSnapshotResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p></p>
 */
export interface RestoreTableFromClusterSnapshotMessage {
  /**
   * <p>The identifier of the Amazon Redshift cluster to restore the table to.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the snapshot to restore the table from. This snapshot must have
   *             been created from the Amazon Redshift cluster specified by the
   *                 <code>ClusterIdentifier</code> parameter.</p>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the source database that contains the table to restore from.</p>
   */
  SourceDatabaseName: string | undefined;

  /**
   * <p>The name of the source schema that contains the table to restore from. If you do
   *             not specify a <code>SourceSchemaName</code> value, the default is
   *             <code>public</code>.</p>
   */
  SourceSchemaName?: string;

  /**
   * <p>The name of the source table to restore from.</p>
   */
  SourceTableName: string | undefined;

  /**
   * <p>The name of the database to restore the table to.</p>
   */
  TargetDatabaseName?: string;

  /**
   * <p>The name of the schema to restore the table to.</p>
   */
  TargetSchemaName?: string;

  /**
   * <p>The name of the table to create as a result of the current request.</p>
   */
  NewTableName: string | undefined;

  /**
   * <p>Indicates whether name identifiers for database, schema, and table are case sensitive.
   *             If <code>true</code>, the names are case sensitive.
   *             If <code>false</code> (default), the names are not case sensitive.</p>
   */
  EnableCaseSensitiveIdentifier?: boolean;
}

export interface RestoreTableFromClusterSnapshotResult {
  /**
   * <p>Describes the status of a <a>RestoreTableFromClusterSnapshot</a>
   *             operation.</p>
   */
  TableRestoreStatus?: TableRestoreStatus;
}

export interface ResumeClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

/**
 * <p></p>
 */
export interface RevokeClusterSecurityGroupIngressMessage {
  /**
   * <p>The name of the security Group from which to revoke the ingress rule.</p>
   */
  ClusterSecurityGroupName: string | undefined;

  /**
   * <p>The IP range for which to revoke access. This range must be a valid Classless
   *             Inter-Domain Routing (CIDR) block of IP addresses. If <code>CIDRIP</code> is specified,
   *                 <code>EC2SecurityGroupName</code> and <code>EC2SecurityGroupOwnerId</code> cannot be
   *             provided. </p>
   */
  CIDRIP?: string;

  /**
   * <p>The name of the EC2 Security Group whose access is to be revoked. If
   *                 <code>EC2SecurityGroupName</code> is specified, <code>EC2SecurityGroupOwnerId</code>
   *             must also be provided and <code>CIDRIP</code> cannot be provided. </p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>The Amazon Web Services account number of the owner of the security group specified in the
   *                 <code>EC2SecurityGroupName</code> parameter. The Amazon Web Services access key ID is not an
   *             acceptable value. If <code>EC2SecurityGroupOwnerId</code> is specified,
   *                 <code>EC2SecurityGroupName</code> must also be provided. and <code>CIDRIP</code>
   *             cannot be provided. </p>
   *         <p>Example: <code>111122223333</code>
   *         </p>
   */
  EC2SecurityGroupOwnerId?: string;
}

export interface RevokeClusterSecurityGroupIngressResult {
  /**
   * <p>Describes a security group.</p>
   */
  ClusterSecurityGroup?: ClusterSecurityGroup;
}

export interface RevokeEndpointAccessMessage {
  /**
   * <p>The cluster to revoke access from.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The Amazon Web Services account ID whose access is to be revoked.</p>
   */
  Account?: string;

  /**
   * <p>The virtual private cloud (VPC) identifiers for which access is to be revoked.</p>
   */
  VpcIds?: string[];

  /**
   * <p>Indicates whether to force the revoke action.
   *            If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.</p>
   */
  Force?: boolean;
}

/**
 * <p></p>
 */
export interface RevokeSnapshotAccessMessage {
  /**
   * <p>The identifier of the snapshot that the account can no longer access.</p>
   */
  SnapshotIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot associated with the message to revoke access.</p>
   */
  SnapshotArn?: string;

  /**
   * <p>The identifier of the cluster the snapshot was created from. This parameter is
   *             required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   */
  SnapshotClusterIdentifier?: string;

  /**
   * <p>The identifier of the Amazon Web Services account that can no longer restore the specified
   *             snapshot.</p>
   */
  AccountWithRestoreAccess: string | undefined;
}

export interface RevokeSnapshotAccessResult {
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

/**
 * <p></p>
 */
export interface RotateEncryptionKeyMessage {
  /**
   * <p>The unique identifier of the cluster that you want to rotate the encryption keys
   *             for.</p>
   *         <p>Constraints: Must be the name of valid cluster that has encryption
   *             enabled.</p>
   */
  ClusterIdentifier: string | undefined;
}

export interface RotateEncryptionKeyResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export interface UpdatePartnerStatusInputMessage {
  /**
   * <p>The Amazon Web Services account ID that owns the cluster.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The cluster identifier of the cluster whose partner integration status is being updated.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the database whose partner integration status is being updated.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partner whose integration status is being updated.</p>
   */
  PartnerName: string | undefined;

  /**
   * <p>The value of the updated status.</p>
   */
  Status: PartnerIntegrationStatus | string | undefined;

  /**
   * <p>The status message provided by the partner.</p>
   */
  StatusMessage?: string;
}

/**
 * @internal
 */
export const DescribeHsmConfigurationsMessageFilterSensitiveLog = (obj: DescribeHsmConfigurationsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HsmConfigurationMessageFilterSensitiveLog = (obj: HsmConfigurationMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoggingStatusMessageFilterSensitiveLog = (obj: DescribeLoggingStatusMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingStatusFilterSensitiveLog = (obj: LoggingStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeConfigurationOptionsFilterFilterSensitiveLog = (obj: NodeConfigurationOptionsFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNodeConfigurationOptionsMessageFilterSensitiveLog = (
  obj: DescribeNodeConfigurationOptionsMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeConfigurationOptionFilterSensitiveLog = (obj: NodeConfigurationOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodeConfigurationOptionsMessageFilterSensitiveLog = (obj: NodeConfigurationOptionsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeOrderableClusterOptionsMessageFilterSensitiveLog = (
  obj: DescribeOrderableClusterOptionsMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrderableClusterOptionFilterSensitiveLog = (obj: OrderableClusterOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrderableClusterOptionsMessageFilterSensitiveLog = (obj: OrderableClusterOptionsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePartnersInputMessageFilterSensitiveLog = (obj: DescribePartnersInputMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PartnerIntegrationInfoFilterSensitiveLog = (obj: PartnerIntegrationInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePartnersOutputMessageFilterSensitiveLog = (obj: DescribePartnersOutputMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedNodeExchangeStatusInputMessageFilterSensitiveLog = (
  obj: DescribeReservedNodeExchangeStatusInputMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedNodeExchangeStatusOutputMessageFilterSensitiveLog = (
  obj: DescribeReservedNodeExchangeStatusOutputMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedNodeOfferingsMessageFilterSensitiveLog = (
  obj: DescribeReservedNodeOfferingsMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedNodeOfferingFilterSensitiveLog = (obj: ReservedNodeOffering): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedNodeOfferingsMessageFilterSensitiveLog = (obj: ReservedNodeOfferingsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReservedNodesMessageFilterSensitiveLog = (obj: DescribeReservedNodesMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedNodesMessageFilterSensitiveLog = (obj: ReservedNodesMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResizeMessageFilterSensitiveLog = (obj: DescribeResizeMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledActionFilterFilterSensitiveLog = (obj: ScheduledActionFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScheduledActionsMessageFilterSensitiveLog = (obj: DescribeScheduledActionsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledActionsMessageFilterSensitiveLog = (obj: ScheduledActionsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotCopyGrantsMessageFilterSensitiveLog = (obj: DescribeSnapshotCopyGrantsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotCopyGrantMessageFilterSensitiveLog = (obj: SnapshotCopyGrantMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotSchedulesMessageFilterSensitiveLog = (obj: DescribeSnapshotSchedulesMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSnapshotSchedulesOutputMessageFilterSensitiveLog = (
  obj: DescribeSnapshotSchedulesOutputMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTableRestoreStatusMessageFilterSensitiveLog = (obj: DescribeTableRestoreStatusMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableRestoreStatusFilterSensitiveLog = (obj: TableRestoreStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableRestoreStatusMessageFilterSensitiveLog = (obj: TableRestoreStatusMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTagsMessageFilterSensitiveLog = (obj: DescribeTagsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaggedResourceFilterSensitiveLog = (obj: TaggedResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaggedResourceListMessageFilterSensitiveLog = (obj: TaggedResourceListMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUsageLimitsMessageFilterSensitiveLog = (obj: DescribeUsageLimitsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UsageLimitListFilterSensitiveLog = (obj: UsageLimitList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableLoggingMessageFilterSensitiveLog = (obj: DisableLoggingMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableSnapshotCopyMessageFilterSensitiveLog = (obj: DisableSnapshotCopyMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableSnapshotCopyResultFilterSensitiveLog = (obj: DisableSnapshotCopyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateDataShareConsumerMessageFilterSensitiveLog = (
  obj: DisassociateDataShareConsumerMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableLoggingMessageFilterSensitiveLog = (obj: EnableLoggingMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableSnapshotCopyMessageFilterSensitiveLog = (obj: EnableSnapshotCopyMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableSnapshotCopyResultFilterSensitiveLog = (obj: EnableSnapshotCopyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetClusterCredentialsMessageFilterSensitiveLog = (obj: GetClusterCredentialsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetClusterCredentialsWithIAMMessageFilterSensitiveLog = (
  obj: GetClusterCredentialsWithIAMMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReservedNodeExchangeConfigurationOptionsInputMessageFilterSensitiveLog = (
  obj: GetReservedNodeExchangeConfigurationOptionsInputMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReservedNodeConfigurationOptionFilterSensitiveLog = (obj: ReservedNodeConfigurationOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReservedNodeExchangeConfigurationOptionsOutputMessageFilterSensitiveLog = (
  obj: GetReservedNodeExchangeConfigurationOptionsOutputMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReservedNodeExchangeOfferingsInputMessageFilterSensitiveLog = (
  obj: GetReservedNodeExchangeOfferingsInputMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetReservedNodeExchangeOfferingsOutputMessageFilterSensitiveLog = (
  obj: GetReservedNodeExchangeOfferingsOutputMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyAquaInputMessageFilterSensitiveLog = (obj: ModifyAquaInputMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyAquaOutputMessageFilterSensitiveLog = (obj: ModifyAquaOutputMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyAuthenticationProfileMessageFilterSensitiveLog = (obj: ModifyAuthenticationProfileMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyAuthenticationProfileResultFilterSensitiveLog = (obj: ModifyAuthenticationProfileResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClusterMessageFilterSensitiveLog = (obj: ModifyClusterMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClusterResultFilterSensitiveLog = (obj: ModifyClusterResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClusterDbRevisionMessageFilterSensitiveLog = (obj: ModifyClusterDbRevisionMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClusterDbRevisionResultFilterSensitiveLog = (obj: ModifyClusterDbRevisionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClusterIamRolesMessageFilterSensitiveLog = (obj: ModifyClusterIamRolesMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClusterIamRolesResultFilterSensitiveLog = (obj: ModifyClusterIamRolesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClusterMaintenanceMessageFilterSensitiveLog = (obj: ModifyClusterMaintenanceMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClusterMaintenanceResultFilterSensitiveLog = (obj: ModifyClusterMaintenanceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClusterParameterGroupMessageFilterSensitiveLog = (obj: ModifyClusterParameterGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClusterSnapshotMessageFilterSensitiveLog = (obj: ModifyClusterSnapshotMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClusterSnapshotResultFilterSensitiveLog = (obj: ModifyClusterSnapshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClusterSnapshotScheduleMessageFilterSensitiveLog = (
  obj: ModifyClusterSnapshotScheduleMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClusterSubnetGroupMessageFilterSensitiveLog = (obj: ModifyClusterSubnetGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClusterSubnetGroupResultFilterSensitiveLog = (obj: ModifyClusterSubnetGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyEndpointAccessMessageFilterSensitiveLog = (obj: ModifyEndpointAccessMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyEventSubscriptionMessageFilterSensitiveLog = (obj: ModifyEventSubscriptionMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyEventSubscriptionResultFilterSensitiveLog = (obj: ModifyEventSubscriptionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyScheduledActionMessageFilterSensitiveLog = (obj: ModifyScheduledActionMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySnapshotCopyRetentionPeriodMessageFilterSensitiveLog = (
  obj: ModifySnapshotCopyRetentionPeriodMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySnapshotCopyRetentionPeriodResultFilterSensitiveLog = (
  obj: ModifySnapshotCopyRetentionPeriodResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySnapshotScheduleMessageFilterSensitiveLog = (obj: ModifySnapshotScheduleMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyUsageLimitMessageFilterSensitiveLog = (obj: ModifyUsageLimitMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PauseClusterResultFilterSensitiveLog = (obj: PauseClusterResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseReservedNodeOfferingMessageFilterSensitiveLog = (
  obj: PurchaseReservedNodeOfferingMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PurchaseReservedNodeOfferingResultFilterSensitiveLog = (obj: PurchaseReservedNodeOfferingResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebootClusterMessageFilterSensitiveLog = (obj: RebootClusterMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebootClusterResultFilterSensitiveLog = (obj: RebootClusterResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectDataShareMessageFilterSensitiveLog = (obj: RejectDataShareMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResetClusterParameterGroupMessageFilterSensitiveLog = (obj: ResetClusterParameterGroupMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResizeClusterResultFilterSensitiveLog = (obj: ResizeClusterResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreFromClusterSnapshotMessageFilterSensitiveLog = (obj: RestoreFromClusterSnapshotMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreFromClusterSnapshotResultFilterSensitiveLog = (obj: RestoreFromClusterSnapshotResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreTableFromClusterSnapshotMessageFilterSensitiveLog = (
  obj: RestoreTableFromClusterSnapshotMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreTableFromClusterSnapshotResultFilterSensitiveLog = (
  obj: RestoreTableFromClusterSnapshotResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResumeClusterResultFilterSensitiveLog = (obj: ResumeClusterResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeClusterSecurityGroupIngressMessageFilterSensitiveLog = (
  obj: RevokeClusterSecurityGroupIngressMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeClusterSecurityGroupIngressResultFilterSensitiveLog = (
  obj: RevokeClusterSecurityGroupIngressResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeEndpointAccessMessageFilterSensitiveLog = (obj: RevokeEndpointAccessMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeSnapshotAccessMessageFilterSensitiveLog = (obj: RevokeSnapshotAccessMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeSnapshotAccessResultFilterSensitiveLog = (obj: RevokeSnapshotAccessResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RotateEncryptionKeyMessageFilterSensitiveLog = (obj: RotateEncryptionKeyMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RotateEncryptionKeyResultFilterSensitiveLog = (obj: RotateEncryptionKeyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePartnerStatusInputMessageFilterSensitiveLog = (obj: UpdatePartnerStatusInputMessage): any => ({
  ...obj,
});
