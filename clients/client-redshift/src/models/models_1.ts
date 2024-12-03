// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActionType,
  AquaConfiguration,
  AquaConfigurationStatus,
  AuthenticationProfile,
  AuthorizedTokenIssuer,
  AvailabilityZone,
  Cluster,
  ClusterFilterSensitiveLog,
  ClusterSecurityGroup,
  ClusterSubnetGroup,
  DataShare,
  DataShareStatusForConsumer,
  DataShareStatusForProducer,
  DefaultClusterParameters,
  EndpointAccess,
  EndpointAuthorization,
  EventSubscription,
  HsmClientCertificate,
  HsmConfiguration,
  Integration,
  IntegrationError,
  NamespaceIdentifierUnion,
  Parameter,
  RecurringCharge,
  RedshiftIdcApplication,
  ReservedNode,
  ReservedNodeExchangeStatus,
  ReservedNodeOfferingType,
  ScheduledAction,
  ScheduledActionType,
  ServiceIntegrationsUnion,
  Snapshot,
  SnapshotCopyGrant,
  SnapshotSchedule,
  Tag,
  UsageLimit,
  UsageLimitBreachAction,
  UsageLimitFeatureType,
  ZeroETLIntegrationStatus,
} from "./models_0";

import { RedshiftServiceException as __BaseException } from "./RedshiftServiceException";

/**
 * @public
 * @enum
 */
export const NamespaceRegistrationStatus = {
  DEREGISTERING: "Deregistering",
  REGISTERING: "Registering",
} as const;

/**
 * @public
 */
export type NamespaceRegistrationStatus =
  (typeof NamespaceRegistrationStatus)[keyof typeof NamespaceRegistrationStatus];

/**
 * @public
 */
export interface DeregisterNamespaceOutputMessage {
  /**
   * <p>The registration status of the cluster or
   *             serverless namespace.</p>
   * @public
   */
  Status?: NamespaceRegistrationStatus | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAttributesMessage {
  /**
   * <p>A list of attribute names.</p>
   * @public
   */
  AttributeNames?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAuthenticationProfilesMessage {
  /**
   * <p>The name of the authentication profile to describe. If not specified then all authentication profiles owned by the account are listed.</p>
   * @public
   */
  AuthenticationProfileName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAuthenticationProfilesResult {
  /**
   * <p>The list of authentication profiles.</p>
   * @public
   */
  AuthenticationProfiles?: AuthenticationProfile[] | undefined;
}

/**
 * @public
 */
export interface DescribeClusterDbRevisionsMessage {
  /**
   * <p>A unique identifier for a cluster whose <code>ClusterDbRevisions</code> you are
   *             requesting. This parameter is case sensitive. All clusters defined for an account are
   *             returned by default.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified MaxRecords value, a value is returned
   *             in the <code>marker</code> field of the response. You can retrieve the next set of
   *             response records by providing the returned <code>marker</code> value in the
   *                 <code>marker</code> parameter and retrying the request. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point for returning a set of
   *             response records. When the results of a <code>DescribeClusterDbRevisions</code> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Redshift returns a value
   *             in the <code>marker</code> field of the response. You can retrieve the next set of
   *             response records by providing the returned <code>marker</code> value in the
   *                 <code>marker</code> parameter and retrying the request. </p>
   *          <p>Constraints: You can specify either the <code>ClusterIdentifier</code> parameter, or
   *             the <code>marker</code> parameter, but not both.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeClusterParameterGroupsMessage {
  /**
   * <p>The name of a specific parameter group for which to return details. By default,
   *             details about all parameter groups and the default parameter group are
   *             returned.</p>
   * @public
   */
  ParameterGroupName?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterParameterGroups</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster parameter
   *             groups that are associated with the specified key or keys. For example, suppose that you
   *             have parameter groups that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the parameter groups that have either or both of these
   *             tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching cluster parameter
   *             groups that are associated with the specified tag value or values. For example, suppose
   *             that you have parameter groups that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the parameter groups that have either or both of these tag
   *             values associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeClusterParametersMessage {
  /**
   * <p>The name of a cluster parameter group for which to return details.</p>
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>The parameter types to return. Specify <code>user</code> to show parameters that
   *             are different form the default. Similarly, specify <code>engine-default</code> to show
   *             parameters that are the same as the default parameter group. </p>
   *          <p>Default: All parameter types returned.</p>
   *          <p>Valid Values: <code>user</code> | <code>engine-default</code>
   *          </p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterParameters</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeClustersMessage {
  /**
   * <p>The unique identifier of a cluster whose properties you are requesting. This
   *             parameter is case sensitive.</p>
   *          <p>The default is that all clusters defined for an account are returned.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusters</a> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *          <p>Constraints: You can specify either the <b>ClusterIdentifier</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching clusters that are
   *             associated with the specified key or keys. For example, suppose that you have clusters
   *             that are tagged with keys called <code>owner</code> and <code>environment</code>. If you
   *             specify both of these tag keys in the request, Amazon Redshift returns a response with the
   *             clusters that have either or both of these tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching clusters that are
   *             associated with the specified tag value or values. For example, suppose that you have
   *             clusters that are tagged with values called <code>admin</code> and <code>test</code>. If
   *             you specify both of these tag values in the request, Amazon Redshift returns a response with
   *             the clusters that have either or both of these tag values associated with
   *             them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeClusterSecurityGroupsMessage {
  /**
   * <p>The name of a cluster security group for which you are requesting details. You must
   *             specify either the <b>Marker</b> parameter or a <b>ClusterSecurityGroupName</b> parameter, but not both. </p>
   *          <p> Example: <code>securitygroup1</code>
   *          </p>
   * @public
   */
  ClusterSecurityGroupName?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterSecurityGroups</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *          <p>Constraints: You must specify either the <b>ClusterSecurityGroupName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster security groups
   *             that are associated with the specified key or keys. For example, suppose that you have
   *             security groups that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the security groups that have either or both of these
   *             tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching cluster security
   *             groups that are associated with the specified tag value or values. For example, suppose
   *             that you have security groups that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the security groups that have either or both of these tag values
   *             associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SnapshotAttributeToSortBy = {
  CREATE_TIME: "CREATE_TIME",
  SOURCE_TYPE: "SOURCE_TYPE",
  TOTAL_SIZE: "TOTAL_SIZE",
} as const;

/**
 * @public
 */
export type SnapshotAttributeToSortBy = (typeof SnapshotAttributeToSortBy)[keyof typeof SnapshotAttributeToSortBy];

/**
 * @public
 * @enum
 */
export const SortByOrder = {
  ASCENDING: "ASC",
  DESCENDING: "DESC",
} as const;

/**
 * @public
 */
export type SortByOrder = (typeof SortByOrder)[keyof typeof SortByOrder];

/**
 * <p>Describes a sorting entity</p>
 * @public
 */
export interface SnapshotSortingEntity {
  /**
   * <p>The category for sorting the snapshots.</p>
   * @public
   */
  Attribute: SnapshotAttributeToSortBy | undefined;

  /**
   * <p>The order for listing the attributes.</p>
   * @public
   */
  SortOrder?: SortByOrder | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeClusterSnapshotsMessage {
  /**
   * <p>The identifier of the cluster which generated the requested snapshots.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The snapshot identifier of the snapshot about which to return
   *             information.</p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot associated with the message to describe cluster snapshots.</p>
   * @public
   */
  SnapshotArn?: string | undefined;

  /**
   * <p>The type of snapshots for which you are requesting information. By default,
   *             snapshots of all types are returned.</p>
   *          <p>Valid Values: <code>automated</code> | <code>manual</code>
   *          </p>
   * @public
   */
  SnapshotType?: string | undefined;

  /**
   * <p>A value that requests only snapshots created at or after the specified time. The
   *             time value is specified in ISO 8601 format. For more information about ISO 8601, go to
   *             the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: <code>2012-07-16T18:00:00Z</code>
   *          </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>A time value that requests only snapshots created at or before the specified time.
   *             The time value is specified in ISO 8601 format. For more information about ISO 8601, go
   *             to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia
   *                 page.</a>
   *          </p>
   *          <p>Example: <code>2012-07-16T18:00:00Z</code>
   *          </p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterSnapshots</a> request exceed
   *             the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The Amazon Web Services account used to create or copy the snapshot. Use this field to
   *             filter the results to snapshots owned by a particular account. To describe snapshots you
   *             own, either specify your Amazon Web Services account, or do not specify the
   *             parameter.</p>
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster snapshots that
   *             are associated with the specified key or keys. For example, suppose that you have
   *             snapshots that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the snapshots that have either or both of these tag
   *             keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching cluster snapshots
   *             that are associated with the specified tag value or values. For example, suppose that
   *             you have snapshots that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the snapshots that have either or both of these tag values
   *             associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;

  /**
   * <p>A value that indicates whether to return snapshots only for an existing cluster.
   *             You can perform table-level restore only by using a snapshot of an existing cluster,
   *             that is, a cluster that has not been deleted. Values for this parameter work as follows: </p>
   *          <ul>
   *             <li>
   *                <p>If <code>ClusterExists</code> is set to <code>true</code>,
   *                         <code>ClusterIdentifier</code> is required.</p>
   *             </li>
   *             <li>
   *                <p>If <code>ClusterExists</code> is set to <code>false</code> and
   *                         <code>ClusterIdentifier</code> isn't specified, all snapshots
   *                     associated with deleted clusters (orphaned snapshots) are returned. </p>
   *             </li>
   *             <li>
   *                <p>If <code>ClusterExists</code> is set to <code>false</code> and
   *                         <code>ClusterIdentifier</code> is specified for a deleted cluster, snapshots
   *                     associated with that cluster are returned.</p>
   *             </li>
   *             <li>
   *                <p>If <code>ClusterExists</code> is set to <code>false</code> and
   *                         <code>ClusterIdentifier</code> is specified for an existing cluster, no
   *                     snapshots are returned. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterExists?: boolean | undefined;

  /**
   * <p></p>
   * @public
   */
  SortingEntities?: SnapshotSortingEntity[] | undefined;
}

/**
 * <p>Contains the output from the <a>DescribeClusterSnapshots</a> action.
 *         </p>
 * @public
 */
export interface SnapshotMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <a>Snapshot</a> instances. </p>
   * @public
   */
  Snapshots?: Snapshot[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeClusterSubnetGroupsMessage {
  /**
   * <p>The name of the cluster subnet group for which information is requested.</p>
   * @public
   */
  ClusterSubnetGroupName?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterSubnetGroups</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching cluster subnet groups
   *             that are associated with the specified key or keys. For example, suppose that you have
   *             subnet groups that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the subnet groups that have either or both of these
   *             tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching cluster subnet
   *             groups that are associated with the specified tag value or values. For example, suppose
   *             that you have subnet groups that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the subnet groups that have either or both of these tag values
   *             associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeClusterTracksMessage {
  /**
   * <p>The name of the maintenance track. </p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>An integer value for the maximum number of maintenance tracks to return.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <code>DescribeClusterTracks</code> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Redshift returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Describes the operations that are allowed on a maintenance track.</p>
 * @public
 */
export interface SupportedOperation {
  /**
   * <p>A list of the supported operations.</p>
   * @public
   */
  OperationName?: string | undefined;
}

/**
 * <p>A maintenance track that you can switch the current track to.</p>
 * @public
 */
export interface UpdateTarget {
  /**
   * <p>The name of the new maintenance track.</p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>The cluster version for the new maintenance track.</p>
   * @public
   */
  DatabaseVersion?: string | undefined;

  /**
   * <p>A list of operations supported by the maintenance track.</p>
   * @public
   */
  SupportedOperations?: SupportedOperation[] | undefined;
}

/**
 * <p>Defines a maintenance track that determines which Amazon Redshift version to apply
 *             during a maintenance window. If the value for <code>MaintenanceTrack</code> is
 *                 <code>current</code>, the cluster is updated to the most recently certified
 *             maintenance release. If the value is <code>trailing</code>, the cluster is updated to
 *             the previously certified maintenance release. </p>
 * @public
 */
export interface MaintenanceTrack {
  /**
   * <p>The name of the maintenance track. Possible values are <code>current</code> and
   *                 <code>trailing</code>.</p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>The version number for the cluster release.</p>
   * @public
   */
  DatabaseVersion?: string | undefined;

  /**
   * <p>An array of <a>UpdateTarget</a> objects to update with the maintenance
   *             track. </p>
   * @public
   */
  UpdateTargets?: UpdateTarget[] | undefined;
}

/**
 * @public
 */
export interface TrackListMessage {
  /**
   * <p>A list of maintenance tracks output by the <code>DescribeClusterTracks</code>
   *             operation. </p>
   * @public
   */
  MaintenanceTracks?: MaintenanceTrack[] | undefined;

  /**
   * <p>The starting point to return a set of response tracklist records. You can retrieve the
   *             next set of response records by providing the returned marker value in the
   *                 <code>Marker</code> parameter and retrying the request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeClusterVersionsMessage {
  /**
   * <p>The specific cluster version to return.</p>
   *          <p>Example: <code>1.0</code>
   *          </p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>The name of a specific cluster parameter group family to return details
   *             for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 alphanumeric characters</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterParameterGroupFamily?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeClusterVersions</a> request exceed
   *             the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomDomainAssociationsMessage {
  /**
   * <p>The custom domain name for the custom domain association.</p>
   * @public
   */
  CustomDomainName?: string | undefined;

  /**
   * <p>The certificate Amazon Resource Name (ARN) for the custom domain association.</p>
   * @public
   */
  CustomDomainCertificateArn?: string | undefined;

  /**
   * <p>The maximum records setting for the associated custom domain.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>The marker for the custom domain association.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesMessage {
  /**
   * <p>The Amazon resource name (ARN) of the datashare to describe details of.</p>
   * @public
   */
  DataShareArn?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeDataShares</a> request exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesResult {
  /**
   * <p>The results returned from describing datashares.</p>
   * @public
   */
  DataShares?: DataShare[] | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response records. When the results of a <a>DescribeDataShares</a> request exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code> field of the response. You can retrieve the next set of response records by providing the returned marker value in the <code>Marker</code> parameter and retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesForConsumerMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the consumer namespace that returns in the list of datashares.</p>
   * @public
   */
  ConsumerArn?: string | undefined;

  /**
   * <p>An identifier giving the status of a datashare in the consumer cluster. If this field is specified, Amazon
   *             Redshift returns the list of datashares that have the specified status.</p>
   * @public
   */
  Status?: DataShareStatusForConsumer | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDataSharesForConsumer</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesForConsumerResult {
  /**
   * <p>Shows the results of datashares available for consumers.</p>
   * @public
   */
  DataShares?: DataShare[] | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDataSharesForConsumer</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesForProducerMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the producer namespace that returns in the list of datashares.</p>
   * @public
   */
  ProducerArn?: string | undefined;

  /**
   * <p>An identifier giving the status of a datashare in the producer. If this field is specified, Amazon
   *             Redshift returns the list of datashares that have the specified status.</p>
   * @public
   */
  Status?: DataShareStatusForProducer | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDataSharesForProducer</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSharesForProducerResult {
  /**
   * <p>Shows the results of datashares available for producers.</p>
   * @public
   */
  DataShares?: DataShare[] | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDataSharesForProducer</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeDefaultClusterParametersMessage {
  /**
   * <p>The name of the cluster parameter group family.</p>
   * @public
   */
  ParameterGroupFamily: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeDefaultClusterParameters</a>
   *             request exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in
   *             the <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultClusterParametersResult {
  /**
   * <p>Describes the default cluster parameters for a parameter group family.</p>
   * @public
   */
  DefaultClusterParameters?: DefaultClusterParameters | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointAccessMessage {
  /**
   * <p>The cluster identifier associated with the described endpoint.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the owner of the cluster.</p>
   * @public
   */
  ResourceOwner?: string | undefined;

  /**
   * <p>The name of the endpoint to be described.</p>
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * <p>The virtual private cloud (VPC) identifier with access to the cluster.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a <code>Marker</code> is
   *             included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeEndpointAccess</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *             <code>MaxRecords</code> parameter.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface EndpointAccessList {
  /**
   * <p>The list of endpoints with access to the cluster.</p>
   * @public
   */
  EndpointAccessList?: EndpointAccess[] | undefined;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeEndpointAccess</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *             <code>MaxRecords</code> parameter.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointAuthorizationMessage {
  /**
   * <p>The cluster identifier of the cluster to access.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of either the cluster owner (grantor) or grantee.
   *        If <code>Grantee</code> parameter is true, then the <code>Account</code> value is of the grantor.</p>
   * @public
   */
  Account?: string | undefined;

  /**
   * <p>Indicates whether to check authorization from a grantor or grantee point of view.
   *            If true, Amazon Redshift returns endpoint authorizations that you've been granted.
   *            If false (default), checks authorization from a grantor point of view.</p>
   * @public
   */
  Grantee?: boolean | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a <code>Marker</code> is
   *             included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeEndpointAuthorization</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *             <code>MaxRecords</code> parameter.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface EndpointAuthorizationList {
  /**
   * <p>The authorizations to an endpoint.</p>
   * @public
   */
  EndpointAuthorizationList?: EndpointAuthorization[] | undefined;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeEndpointAuthorization</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *             <code>MaxRecords</code> parameter.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeEventCategoriesMessage {
  /**
   * <p>The source type, such as cluster or parameter group, to which the described event
   *             categories apply.</p>
   *          <p>Valid values: cluster, cluster-snapshot, cluster-parameter-group, cluster-security-group, and scheduled-action.</p>
   * @public
   */
  SourceType?: string | undefined;
}

/**
 * <p>Describes event information.</p>
 * @public
 */
export interface EventInfoMap {
  /**
   * <p>The identifier of an Amazon Redshift event.</p>
   * @public
   */
  EventId?: string | undefined;

  /**
   * <p>The category of an Amazon Redshift event.</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>The description of an Amazon Redshift event.</p>
   * @public
   */
  EventDescription?: string | undefined;

  /**
   * <p>The severity of the event.</p>
   *          <p>Values: ERROR, INFO</p>
   * @public
   */
  Severity?: string | undefined;
}

/**
 * <p>Describes event categories.</p>
 * @public
 */
export interface EventCategoriesMap {
  /**
   * <p>The source type, such as cluster or cluster-snapshot, that the returned categories
   *             belong to.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>The events in the event category.</p>
   * @public
   */
  Events?: EventInfoMap[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface EventCategoriesMessage {
  /**
   * <p>A list of event categories descriptions.</p>
   * @public
   */
  EventCategoriesMapList?: EventCategoriesMap[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SourceType = {
  cluster: "cluster",
  cluster_parameter_group: "cluster-parameter-group",
  cluster_security_group: "cluster-security-group",
  cluster_snapshot: "cluster-snapshot",
  scheduled_action: "scheduled-action",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * <p></p>
 * @public
 */
export interface DescribeEventsMessage {
  /**
   * <p>The identifier of the event source for which events will be returned. If this
   *             parameter is not specified, then all sources are included in the response.</p>
   *          <p>Constraints:</p>
   *          <p>If <i>SourceIdentifier</i> is supplied,
   *                 <i>SourceType</i> must also be provided.</p>
   *          <ul>
   *             <li>
   *                <p>Specify a cluster identifier when <i>SourceType</i> is
   *                         <code>cluster</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify a cluster security group name when <i>SourceType</i>
   *                     is <code>cluster-security-group</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify a cluster parameter group name when <i>SourceType</i>
   *                     is <code>cluster-parameter-group</code>.</p>
   *             </li>
   *             <li>
   *                <p>Specify a cluster snapshot identifier when <i>SourceType</i>
   *                     is <code>cluster-snapshot</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are
   *             returned.</p>
   *          <p>Constraints:</p>
   *          <p>If <i>SourceType</i> is supplied,
   *                 <i>SourceIdentifier</i> must also be provided.</p>
   *          <ul>
   *             <li>
   *                <p>Specify <code>cluster</code> when <i>SourceIdentifier</i> is
   *                     a cluster identifier.</p>
   *             </li>
   *             <li>
   *                <p>Specify <code>cluster-security-group</code> when
   *                         <i>SourceIdentifier</i> is a cluster security group
   *                     name.</p>
   *             </li>
   *             <li>
   *                <p>Specify <code>cluster-parameter-group</code> when
   *                         <i>SourceIdentifier</i> is a cluster parameter group
   *                     name.</p>
   *             </li>
   *             <li>
   *                <p>Specify <code>cluster-snapshot</code> when
   *                         <i>SourceIdentifier</i> is a cluster snapshot
   *                     identifier.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>The beginning of the time interval to retrieve events for, specified in ISO 8601
   *             format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: <code>2009-07-08T18:00Z</code>
   *          </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end of the time interval for which to retrieve events, specified in ISO 8601
   *             format. For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: <code>2009-07-08T18:00Z</code>
   *          </p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The number of minutes prior to the time of the request for which to retrieve
   *             events. For example, if the request is sent at 18:00 and you specify a duration of 60,
   *             then only events which have occurred after 17:00 will be returned.</p>
   *          <p>Default: <code>60</code>
   *          </p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeEvents</a> request exceed the value
   *             specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code>
   *             field of the response. You can retrieve the next set of response records by providing
   *             the returned marker value in the <code>Marker</code> parameter and retrying the request.
   *         </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Describes an event.</p>
 * @public
 */
export interface Event {
  /**
   * <p>The identifier for the source of the event.</p>
   * @public
   */
  SourceIdentifier?: string | undefined;

  /**
   * <p>The source type for this event.</p>
   * @public
   */
  SourceType?: SourceType | undefined;

  /**
   * <p>The text of this event.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>A list of the event categories.</p>
   *          <p>Values: Configuration, Management, Monitoring, Security, Pending</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>The severity of the event.</p>
   *          <p>Values: ERROR, INFO</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>The date and time of the event.</p>
   * @public
   */
  Date?: Date | undefined;

  /**
   * <p>The identifier of the event.</p>
   * @public
   */
  EventId?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface EventsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <code>Event</code> instances. </p>
   * @public
   */
  Events?: Event[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * <p>The name of the Amazon Redshift event notification subscription to be
   *             described.</p>
   * @public
   */
  SubscriptionName?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a DescribeEventSubscriptions request exceed the value
   *             specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the <code>Marker</code>
   *             field of the response. You can retrieve the next set of response records by providing
   *             the returned marker value in the <code>Marker</code> parameter and retrying the request.
   *         </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching event notification
   *             subscriptions that are associated with the specified key or keys. For example, suppose
   *             that you have subscriptions that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the subscriptions that have either or both of these
   *             tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching event notification
   *             subscriptions that are associated with the specified tag value or values. For example,
   *             suppose that you have subscriptions that are tagged with values called
   *                 <code>admin</code> and <code>test</code>. If you specify both of these tag values in
   *             the request, Amazon Redshift returns a response with the subscriptions that have either or
   *             both of these tag values associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface EventSubscriptionsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of event subscriptions.</p>
   * @public
   */
  EventSubscriptionsList?: EventSubscription[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeHsmClientCertificatesMessage {
  /**
   * <p>The identifier of a specific HSM client certificate for which you want information.
   *             If no identifier is specified, information is returned for all HSM client certificates
   *             owned by your Amazon Web Services account.</p>
   * @public
   */
  HsmClientCertificateIdentifier?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeHsmClientCertificates</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching HSM client certificates
   *             that are associated with the specified key or keys. For example, suppose that you have
   *             HSM client certificates that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the HSM client certificates that have either or both
   *             of these tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching HSM client
   *             certificates that are associated with the specified tag value or values. For example,
   *             suppose that you have HSM client certificates that are tagged with values called
   *                 <code>admin</code> and <code>test</code>. If you specify both of these tag values in
   *             the request, Amazon Redshift returns a response with the HSM client certificates that have
   *             either or both of these tag values associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface HsmClientCertificateMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of the identifiers for one or more HSM client certificates used by Amazon Redshift
   *             clusters to store and retrieve database encryption keys in an HSM.</p>
   * @public
   */
  HsmClientCertificates?: HsmClientCertificate[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeHsmConfigurationsMessage {
  /**
   * <p>The identifier of a specific Amazon Redshift HSM configuration to be described. If no
   *             identifier is specified, information is returned for all HSM configurations owned by
   *             your Amazon Web Services account.</p>
   * @public
   */
  HsmConfigurationIdentifier?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeHsmConfigurations</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching HSM configurations that
   *             are associated with the specified key or keys. For example, suppose that you have HSM
   *             configurations that are tagged with keys called <code>owner</code> and
   *                 <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the HSM configurations that have either or both of
   *             these tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching HSM configurations
   *             that are associated with the specified tag value or values. For example, suppose that
   *             you have HSM configurations that are tagged with values called <code>admin</code> and
   *                 <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the HSM configurations that have either or both of these tag
   *             values associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface HsmConfigurationMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <code>HsmConfiguration</code> objects.</p>
   * @public
   */
  HsmConfigurations?: HsmConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DescribeInboundIntegrationsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the inbound integration.</p>
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target of an inbound integration.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeInboundIntegrations</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>The content of an inbound integration.</p>
 * @public
 */
export interface InboundIntegration {
  /**
   * <p>The Amazon Resource Name (ARN) of an inbound integration.</p>
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source of an inbound integration.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target of an inbound integration.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The status of an inbound integration.</p>
   * @public
   */
  Status?: ZeroETLIntegrationStatus | undefined;

  /**
   * <p>The outstanding errors of an inbound  integration. Each item is an "IntegrationError". This is null if there is no error.</p>
   * @public
   */
  Errors?: IntegrationError[] | undefined;

  /**
   * <p>The creation time of an inbound integration.</p>
   * @public
   */
  CreateTime?: Date | undefined;
}

/**
 * @public
 */
export interface InboundIntegrationsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <a>InboundIntegration</a> instances.</p>
   * @public
   */
  InboundIntegrations?: InboundIntegration[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DescribeIntegrationsFilterName = {
  INTEGRATION_ARN: "integration-arn",
  SOURCE_ARN: "source-arn",
  SOURCE_TYPES: "source-types",
  STATUS: "status",
} as const;

/**
 * @public
 */
export type DescribeIntegrationsFilterName =
  (typeof DescribeIntegrationsFilterName)[keyof typeof DescribeIntegrationsFilterName];

/**
 * <p>A set of elements to filter the returned integrations.</p>
 * @public
 */
export interface DescribeIntegrationsFilter {
  /**
   * <p>Specifies the type of integration filter.</p>
   * @public
   */
  Name: DescribeIntegrationsFilterName | undefined;

  /**
   * <p>Specifies the values to filter on.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeIntegrationsMessage {
  /**
   * <p>The unique identifier of the integration.</p>
   * @public
   */
  IntegrationArn?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeIntegrations</code>
   *             request. If this parameter is specified, the response includes only records beyond the
   *             marker, up to the value specified by <code>MaxRecords</code>.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A filter that specifies one or more resources to return.</p>
   * @public
   */
  Filters?: DescribeIntegrationsFilter[] | undefined;
}

/**
 * @public
 */
export interface IntegrationsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request.
   *             If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the <code>Marker</code> parameter and retrying the command.
   *             If the <code>Marker</code> field is empty, all response records have been retrieved for the request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>List of integrations that are described.</p>
   * @public
   */
  Integrations?: Integration[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeLoggingStatusMessage {
  /**
   * <p>The identifier of the cluster from which to get the logging status.</p>
   *          <p>Example: <code>examplecluster</code>
   *          </p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LogDestinationType = {
  CLOUDWATCH: "cloudwatch",
  S3: "s3",
} as const;

/**
 * @public
 */
export type LogDestinationType = (typeof LogDestinationType)[keyof typeof LogDestinationType];

/**
 * <p>Describes the status of logging for a cluster.</p>
 * @public
 */
export interface LoggingStatus {
  /**
   * <p>
   *             <code>true</code> if logging is on, <code>false</code> if logging is off.</p>
   * @public
   */
  LoggingEnabled?: boolean | undefined;

  /**
   * <p>The name of the S3 bucket where the log files are stored.</p>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p>The prefix applied to the log file names.</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * <p>The last time that logs were delivered.</p>
   * @public
   */
  LastSuccessfulDeliveryTime?: Date | undefined;

  /**
   * <p>The last time when logs failed to be delivered.</p>
   * @public
   */
  LastFailureTime?: Date | undefined;

  /**
   * <p>The message indicating that logs failed to be delivered.</p>
   * @public
   */
  LastFailureMessage?: string | undefined;

  /**
   * <p>The log destination type. An enum with possible values of <code>s3</code> and <code>cloudwatch</code>.</p>
   * @public
   */
  LogDestinationType?: LogDestinationType | undefined;

  /**
   * <p>The collection of exported log types. Possible values are <code>connectionlog</code>, <code>useractivitylog</code>, and
   *             <code>userlog</code>.</p>
   * @public
   */
  LogExports?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const NodeConfigurationOptionsFilterName = {
  ESTIMATED_DISK_UTILIZATION_PERCENT: "EstimatedDiskUtilizationPercent",
  MODE: "Mode",
  NODE_TYPE: "NodeType",
  NUM_NODES: "NumberOfNodes",
} as const;

/**
 * @public
 */
export type NodeConfigurationOptionsFilterName =
  (typeof NodeConfigurationOptionsFilterName)[keyof typeof NodeConfigurationOptionsFilterName];

/**
 * @public
 * @enum
 */
export const OperatorType = {
  BETWEEN: "between",
  EQ: "eq",
  GE: "ge",
  GT: "gt",
  IN: "in",
  LE: "le",
  LT: "lt",
} as const;

/**
 * @public
 */
export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

/**
 * <p>A set of elements to filter the returned node configurations.</p>
 * @public
 */
export interface NodeConfigurationOptionsFilter {
  /**
   * <p>The name of the element to filter.</p>
   * @public
   */
  Name?: NodeConfigurationOptionsFilterName | undefined;

  /**
   * <p>The filter operator.
   *             If filter Name is NodeType only the 'in' operator is supported.
   *             Provide one value to evaluate for 'eq', 'lt', 'le', 'gt', and 'ge'.
   *             Provide two values to evaluate for 'between'.
   *             Provide a list of values for 'in'.</p>
   * @public
   */
  Operator?: OperatorType | undefined;

  /**
   * <p>List of values. Compare Name using Operator to Values.
   *             If filter Name is NumberOfNodes, then values can range from 0 to 200.
   *             If filter Name is EstimatedDiskUtilizationPercent, then values can range from 0 to 100.
   *             For example, filter NumberOfNodes (name) GT (operator) 3 (values).</p>
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeNodeConfigurationOptionsMessage {
  /**
   * <p>The action type to evaluate for possible node configurations.
   *             Specify "restore-cluster" to get configuration combinations based on an existing snapshot.
   *             Specify "recommend-node-config" to get configuration recommendations based on an existing cluster or snapshot.
   *             Specify "resize-cluster" to get configuration combinations for elastic resize based on an existing cluster.
   *         </p>
   * @public
   */
  ActionType: ActionType | undefined;

  /**
   * <p>The identifier of the cluster to evaluate for possible node configurations.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The identifier of the snapshot to evaluate for possible node configurations.</p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot associated with the message to describe node configuration.</p>
   * @public
   */
  SnapshotArn?: string | undefined;

  /**
   * <p>The Amazon Web Services account used to create or copy the snapshot.
   *             Required if you are restoring a snapshot you do not own,
   *             optional if you own the snapshot.</p>
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * <p>A set of name, operator, and value items to filter the results.</p>
   * @public
   */
  Filters?: NodeConfigurationOptionsFilter[] | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeNodeConfigurationOptions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>500</code>
   *          </p>
   *          <p>Constraints: minimum 100, maximum 500.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const Mode = {
  HIGH_PERFORMANCE: "high-performance",
  STANDARD: "standard",
} as const;

/**
 * @public
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

/**
 * <p>A list of node configurations.</p>
 * @public
 */
export interface NodeConfigurationOption {
  /**
   * <p>The node type, such as, "ra3.4xlarge".</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The number of nodes.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>The estimated disk utilizaton percentage.</p>
   * @public
   */
  EstimatedDiskUtilizationPercent?: number | undefined;

  /**
   * <p>The category of the node configuration recommendation.</p>
   * @public
   */
  Mode?: Mode | undefined;
}

/**
 * @public
 */
export interface NodeConfigurationOptionsMessage {
  /**
   * <p>A list of valid node configurations.</p>
   * @public
   */
  NodeConfigurationOptionList?: NodeConfigurationOption[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeOrderableClusterOptionsMessage {
  /**
   * <p>The version filter value. Specify this parameter to show only the available
   *             offerings matching the specified version.</p>
   *          <p>Default: All versions.</p>
   *          <p>Constraints: Must be one of the version returned from <a>DescribeClusterVersions</a>.</p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>The node type filter value. Specify this parameter to show only the available
   *             offerings matching the specified node type.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeOrderableClusterOptions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Describes an orderable cluster option.</p>
 * @public
 */
export interface OrderableClusterOption {
  /**
   * <p>The version of the orderable cluster.</p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>The cluster type, for example <code>multi-node</code>. </p>
   * @public
   */
  ClusterType?: string | undefined;

  /**
   * <p>The node type for the orderable cluster.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>A list of availability zones for the orderable cluster.</p>
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;
}

/**
 * <p>Contains the output from the <a>DescribeOrderableClusterOptions</a>
 *             action. </p>
 * @public
 */
export interface OrderableClusterOptionsMessage {
  /**
   * <p>An <code>OrderableClusterOption</code> structure containing information about
   *             orderable options for the cluster.</p>
   * @public
   */
  OrderableClusterOptions?: OrderableClusterOption[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribePartnersInputMessage {
  /**
   * <p>The Amazon Web Services account ID that owns the cluster.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The cluster identifier of the cluster whose partner integration is being described.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the database whose partner integration is being described. If database name is not specified, then all databases in the cluster are described.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the partner that is being described. If partner name is not specified, then all partner integrations are described.</p>
   * @public
   */
  PartnerName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PartnerIntegrationStatus = {
  Active: "Active",
  ConnectionFailure: "ConnectionFailure",
  Inactive: "Inactive",
  RuntimeFailure: "RuntimeFailure",
} as const;

/**
 * @public
 */
export type PartnerIntegrationStatus = (typeof PartnerIntegrationStatus)[keyof typeof PartnerIntegrationStatus];

/**
 * <p>Describes a partner integration.</p>
 * @public
 */
export interface PartnerIntegrationInfo {
  /**
   * <p>The name of the database that receives data from a partner.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The name of the partner.</p>
   * @public
   */
  PartnerName?: string | undefined;

  /**
   * <p>The partner integration status.</p>
   * @public
   */
  Status?: PartnerIntegrationStatus | undefined;

  /**
   * <p>The status message provided by the partner.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The date (UTC) that the partner integration was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The date (UTC) that the partner integration status was last updated by the partner.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribePartnersOutputMessage {
  /**
   * <p>A list of partner integrations.</p>
   * @public
   */
  PartnerIntegrationInfoList?: PartnerIntegrationInfo[] | undefined;
}

/**
 * @public
 */
export interface DescribeRedshiftIdcApplicationsMessage {
  /**
   * <p>The ARN for the Redshift application that integrates with IAM Identity Center.</p>
   * @public
   */
  RedshiftIdcApplicationArn?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of remaining response records
   *             exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve
   *             the next set of records by retrying the command with the returned marker value.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a
   *             value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the Marker parameter
   *             and retrying the command. If the Marker field is empty, all response
   *             records have been retrieved for the request.
   *         </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRedshiftIdcApplicationsResult {
  /**
   * <p>The list of Amazon Redshift IAM Identity Center applications.</p>
   * @public
   */
  RedshiftIdcApplications?: RedshiftIdcApplication[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent
   *             request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the Marker parameter
   *             and retrying the command. If the Marker field is empty, all response
   *             records have been retrieved for the request.
   *         </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodeExchangeStatusInputMessage {
  /**
   * <p>The identifier of the source reserved node in a reserved-node exchange request.</p>
   * @public
   */
  ReservedNodeId?: string | undefined;

  /**
   * <p>The identifier of the reserved-node exchange request.</p>
   * @public
   */
  ReservedNodeExchangeRequestId?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>Marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeReservedNodeExchangeStatus</code> request. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the value
   *             specified by the <code>MaxRecords</code> parameter. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReservedNodeExchangeStatusOutputMessage {
  /**
   * <p>The details of the reserved-node exchange request, including the status, request
   *             time, source reserved-node identifier, and additional details.</p>
   * @public
   */
  ReservedNodeExchangeStatusDetails?: ReservedNodeExchangeStatus[] | undefined;

  /**
   * <p>A pagination token provided by a previous <code>DescribeReservedNodeExchangeStatus</code> request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>The reserved-node exchange status wasn't found.</p>
 * @public
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
 * @public
 */
export interface DescribeReservedNodeOfferingsMessage {
  /**
   * <p>The unique identifier for the offering.</p>
   * @public
   */
  ReservedNodeOfferingId?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeReservedNodeOfferings</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Describes a reserved node offering.</p>
 * @public
 */
export interface ReservedNodeOffering {
  /**
   * <p>The offering identifier.</p>
   * @public
   */
  ReservedNodeOfferingId?: string | undefined;

  /**
   * <p>The node type offered by the reserved node offering.</p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The duration, in seconds, for which the offering will reserve the node.</p>
   * @public
   */
  Duration?: number | undefined;

  /**
   * <p>The upfront fixed charge you will pay to purchase the specific reserved node
   *             offering.</p>
   * @public
   */
  FixedPrice?: number | undefined;

  /**
   * <p>The rate you are charged for each hour the cluster that is using the offering is
   *             running.</p>
   * @public
   */
  UsagePrice?: number | undefined;

  /**
   * <p>The currency code for the compute nodes offering.</p>
   * @public
   */
  CurrencyCode?: string | undefined;

  /**
   * <p>The anticipated utilization of the reserved node, as defined in the reserved node
   *             offering.</p>
   * @public
   */
  OfferingType?: string | undefined;

  /**
   * <p>The charge to your account regardless of whether you are creating any clusters
   *             using the node offering. Recurring charges are only in effect for heavy-utilization
   *             reserved nodes.</p>
   * @public
   */
  RecurringCharges?: RecurringCharge[] | undefined;

  /**
   * <p></p>
   * @public
   */
  ReservedNodeOfferingType?: ReservedNodeOfferingType | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ReservedNodeOfferingsMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A list of <code>ReservedNodeOffering</code> objects.</p>
   * @public
   */
  ReservedNodeOfferings?: ReservedNodeOffering[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeReservedNodesMessage {
  /**
   * <p>Identifier for the node reservation.</p>
   * @public
   */
  ReservedNodeId?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeReservedNodes</a> request exceed
   *             the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ReservedNodesMessage {
  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The list of <code>ReservedNode</code> objects.</p>
   * @public
   */
  ReservedNodes?: ReservedNode[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeResizeMessage {
  /**
   * <p>The unique identifier of a cluster whose resize progress you are requesting. This
   *             parameter is case-sensitive.</p>
   *          <p>By default, resize operations for all clusters defined for an Amazon Web Services account are
   *             returned.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ScheduledActionFilterName = {
  CLUSTER_IDENTIFIER: "cluster-identifier",
  IAM_ROLE: "iam-role",
} as const;

/**
 * @public
 */
export type ScheduledActionFilterName = (typeof ScheduledActionFilterName)[keyof typeof ScheduledActionFilterName];

/**
 * <p>A set of elements to filter the returned scheduled actions. </p>
 * @public
 */
export interface ScheduledActionFilter {
  /**
   * <p>The type of element to filter. </p>
   * @public
   */
  Name: ScheduledActionFilterName | undefined;

  /**
   * <p>List of values. Compare if the value (of type defined by <code>Name</code>) equals an item in the list of scheduled actions. </p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ScheduledActionTypeValues = {
  PAUSE_CLUSTER: "PauseCluster",
  RESIZE_CLUSTER: "ResizeCluster",
  RESUME_CLUSTER: "ResumeCluster",
} as const;

/**
 * @public
 */
export type ScheduledActionTypeValues = (typeof ScheduledActionTypeValues)[keyof typeof ScheduledActionTypeValues];

/**
 * @public
 */
export interface DescribeScheduledActionsMessage {
  /**
   * <p>The name of the scheduled action to retrieve. </p>
   * @public
   */
  ScheduledActionName?: string | undefined;

  /**
   * <p>The type of the scheduled actions to retrieve. </p>
   * @public
   */
  TargetActionType?: ScheduledActionTypeValues | undefined;

  /**
   * <p>The start time in UTC of the scheduled actions to retrieve.
   *             Only active scheduled actions that have invocations after this time are retrieved.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time in UTC of the scheduled action to retrieve.
   *             Only active scheduled actions that have invocations before this time are retrieved.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>If true, retrieve only active scheduled actions.
   *            If false, retrieve only disabled scheduled actions. </p>
   * @public
   */
  Active?: boolean | undefined;

  /**
   * <p>List of scheduled action filters. </p>
   * @public
   */
  Filters?: ScheduledActionFilter[] | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeScheduledActions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface ScheduledActionsMessage {
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeScheduledActions</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>List of retrieved scheduled actions. </p>
   * @public
   */
  ScheduledActions?: ScheduledAction[] | undefined;
}

/**
 * <p>The result of the <code>DescribeSnapshotCopyGrants</code> action.</p>
 * @public
 */
export interface DescribeSnapshotCopyGrantsMessage {
  /**
   * <p>The name of the snapshot copy grant.</p>
   * @public
   */
  SnapshotCopyGrantName?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <code>DescribeSnapshotCopyGrant</code> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *          <p>Constraints: You can specify either the <b>SnapshotCopyGrantName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching resources that are
   *             associated with the specified key or keys. For example, suppose that you have resources
   *             tagged with keys called <code>owner</code> and <code>environment</code>. If you specify
   *             both of these tag keys in the request, Amazon Redshift returns a response with all resources
   *             that have either or both of these tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching resources that are
   *             associated with the specified value or values. For example, suppose that you have
   *             resources tagged with values called <code>admin</code> and <code>test</code>. If you
   *             specify both of these tag values in the request, Amazon Redshift returns a response with all
   *             resources that have either or both of these tag values associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface SnapshotCopyGrantMessage {
  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <code>DescribeSnapshotCopyGrant</code> request exceed the
   *             value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *                 <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   *          <p>Constraints: You can specify either the <b>SnapshotCopyGrantName</b> parameter or the <b>Marker</b> parameter, but not both. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The list of <code>SnapshotCopyGrant</code> objects.</p>
   * @public
   */
  SnapshotCopyGrants?: SnapshotCopyGrant[] | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotSchedulesMessage {
  /**
   * <p>The unique identifier for the cluster whose snapshot schedules you want to
   *             view.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>A unique identifier for a snapshot schedule.</p>
   * @public
   */
  ScheduleIdentifier?: string | undefined;

  /**
   * <p>The key value for a snapshot schedule tag.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>The value corresponding to the key of the snapshot schedule tag.</p>
   * @public
   */
  TagValues?: string[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The maximum number or response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned <code>marker</code>
   *             value.</p>
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeSnapshotSchedulesOutputMessage {
  /**
   * <p>A list of SnapshotSchedules.</p>
   * @public
   */
  SnapshotSchedules?: SnapshotSchedule[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeTableRestoreStatusMessage {
  /**
   * <p>The Amazon Redshift cluster that the table is being restored to.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The identifier of the table restore request to return status for. If you don't
   *             specify a <code>TableRestoreRequestId</code> value, then
   *                 <code>DescribeTableRestoreStatus</code> returns the status of all in-progress table
   *             restore requests.</p>
   * @public
   */
  TableRestoreRequestId?: string | undefined;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a marker is
   *             included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous
   *                 <code>DescribeTableRestoreStatus</code> request. If this parameter is specified, the
   *             response includes only records beyond the marker, up to the value specified by the
   *                 <code>MaxRecords</code> parameter.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>The specified <code>TableRestoreRequestId</code> value was not found.</p>
 * @public
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

/**
 * @public
 * @enum
 */
export const TableRestoreStatusType = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type TableRestoreStatusType = (typeof TableRestoreStatusType)[keyof typeof TableRestoreStatusType];

/**
 * <p>Describes the status of a <a>RestoreTableFromClusterSnapshot</a>
 *             operation.</p>
 * @public
 */
export interface TableRestoreStatus {
  /**
   * <p>The unique identifier for the table restore request.</p>
   * @public
   */
  TableRestoreRequestId?: string | undefined;

  /**
   * <p>A value that describes the current state of the table restore request.</p>
   *          <p>Valid Values: <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>,
   *                 <code>PENDING</code>, <code>IN_PROGRESS</code>
   *          </p>
   * @public
   */
  Status?: TableRestoreStatusType | undefined;

  /**
   * <p>A description of the status of the table restore request. Status values include
   *                 <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>,
   *                 <code>PENDING</code>, <code>IN_PROGRESS</code>.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The time that the table restore request was made, in Universal Coordinated Time
   *             (UTC).</p>
   * @public
   */
  RequestTime?: Date | undefined;

  /**
   * <p>The amount of data restored to the new table so far, in megabytes (MB).</p>
   * @public
   */
  ProgressInMegaBytes?: number | undefined;

  /**
   * <p>The total amount of data to restore to the new table, in megabytes (MB).</p>
   * @public
   */
  TotalDataInMegaBytes?: number | undefined;

  /**
   * <p>The identifier of the Amazon Redshift cluster that the table is being restored
   *             to.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The identifier of the snapshot that the table is being restored from.</p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>The name of the source database that contains the table being restored.</p>
   * @public
   */
  SourceDatabaseName?: string | undefined;

  /**
   * <p>The name of the source schema that contains the table being restored.</p>
   * @public
   */
  SourceSchemaName?: string | undefined;

  /**
   * <p>The name of the source table being restored.</p>
   * @public
   */
  SourceTableName?: string | undefined;

  /**
   * <p>The name of the database to restore the table to.</p>
   * @public
   */
  TargetDatabaseName?: string | undefined;

  /**
   * <p>The name of the schema to restore the table to.</p>
   * @public
   */
  TargetSchemaName?: string | undefined;

  /**
   * <p>The name of the table to create as a result of the table restore request.</p>
   * @public
   */
  NewTableName?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface TableRestoreStatusMessage {
  /**
   * <p>A list of status details for one or more table restore requests.</p>
   * @public
   */
  TableRestoreStatusDetails?: TableRestoreStatus[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent <a>DescribeTableRestoreStatus</a> request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeTagsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) for which you want to describe the tag or tags. For
   *             example, <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>. </p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The type of resource with which you want to view tags. Valid resource types are: </p>
   *          <ul>
   *             <li>
   *                <p>Cluster</p>
   *             </li>
   *             <li>
   *                <p>CIDR/IP</p>
   *             </li>
   *             <li>
   *                <p>EC2 security group</p>
   *             </li>
   *             <li>
   *                <p>Snapshot</p>
   *             </li>
   *             <li>
   *                <p>Cluster security group</p>
   *             </li>
   *             <li>
   *                <p>Subnet group</p>
   *             </li>
   *             <li>
   *                <p>HSM connection</p>
   *             </li>
   *             <li>
   *                <p>HSM certificate</p>
   *             </li>
   *             <li>
   *                <p>Parameter group</p>
   *             </li>
   *             <li>
   *                <p>Snapshot copy grant</p>
   *             </li>
   *             <li>
   *                <p>Integration (zero-ETL integration or S3 event integration)</p>
   *                <note>
   *                   <p>To describe the tags associated with an <code>integration</code>, don't specify <code>ResourceType</code>,
   *                     instead specify the <code>ResourceName</code> of the integration.</p>
   *                </note>
   *             </li>
   *          </ul>
   *          <p>For more information about Amazon Redshift resource types and constructing ARNs, go to
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-iam-access-control-specify-actions">Specifying Policy Elements: Actions, Effects, Resources, and Principals</a> in
   *             the Amazon Redshift Cluster Management Guide. </p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The maximum number or response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned <code>marker</code> value.
   *         </p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>marker</code> parameter
   *             and retrying the command. If the <code>marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching resources that are
   *             associated with the specified key or keys. For example, suppose that you have resources
   *             tagged with keys called <code>owner</code> and <code>environment</code>. If you specify
   *             both of these tag keys in the request, Amazon Redshift returns a response with all resources
   *             that have either or both of these tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching resources that are
   *             associated with the specified value or values. For example, suppose that you have
   *             resources tagged with values called <code>admin</code> and <code>test</code>. If you
   *             specify both of these tag values in the request, Amazon Redshift returns a response with all
   *             resources that have either or both of these tag values associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * <p>A tag and its associated resource.</p>
 * @public
 */
export interface TaggedResource {
  /**
   * <p>The tag for the resource.</p>
   * @public
   */
  Tag?: Tag | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) with which the tag is associated, for example:
   *                 <code>arn:aws:redshift:us-east-2:123456789:cluster:t1</code>.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The type of resource with which the tag is associated. Valid resource types are: </p>
   *          <ul>
   *             <li>
   *                <p>Cluster</p>
   *             </li>
   *             <li>
   *                <p>CIDR/IP</p>
   *             </li>
   *             <li>
   *                <p>EC2 security group</p>
   *             </li>
   *             <li>
   *                <p>Snapshot</p>
   *             </li>
   *             <li>
   *                <p>Cluster security group</p>
   *             </li>
   *             <li>
   *                <p>Subnet group</p>
   *             </li>
   *             <li>
   *                <p>HSM connection</p>
   *             </li>
   *             <li>
   *                <p>HSM certificate</p>
   *             </li>
   *             <li>
   *                <p>Parameter group</p>
   *             </li>
   *          </ul>
   *          <p>For more information about Amazon Redshift resource types and constructing ARNs, go to
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-overview.html#redshift-iam-access-control-specify-actions">Constructing an Amazon Redshift Amazon Resource Name (ARN)</a> in the
   *             Amazon Redshift Cluster Management Guide. </p>
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface TaggedResourceListMessage {
  /**
   * <p>A list of tags with their associated resources.</p>
   * @public
   */
  TaggedResources?: TaggedResource[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUsageLimitsMessage {
  /**
   * <p>The identifier of the usage limit to describe.</p>
   * @public
   */
  UsageLimitId?: string | undefined;

  /**
   * <p>The identifier of the cluster for which you want to describe usage limits.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The feature type for which you want to describe usage limits.</p>
   * @public
   */
  FeatureType?: UsageLimitFeatureType | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <p>Constraints: minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional parameter that specifies the starting point to return a set of response
   *             records. When the results of a <a>DescribeUsageLimits</a> request
   *             exceed the value specified in <code>MaxRecords</code>, Amazon Web Services returns a value in the
   *             <code>Marker</code> field of the response. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>A tag key or keys for which you want to return all matching usage limit objects
   *             that are associated with the specified key or keys. For example, suppose that you
   *             have parameter groups that are tagged with keys called <code>owner</code> and
   *             <code>environment</code>. If you specify both of these tag keys in the request,
   *             Amazon Redshift returns a response with the usage limit objects have either or both of these
   *             tag keys associated with them.</p>
   * @public
   */
  TagKeys?: string[] | undefined;

  /**
   * <p>A tag value or values for which you want to return all matching usage limit objects
   *             that are associated with the specified tag value or values. For example, suppose
   *             that you have parameter groups that are tagged with values called <code>admin</code> and
   *             <code>test</code>. If you specify both of these tag values in the request, Amazon Redshift
   *             returns a response with the usage limit objects that have either or both of these tag
   *             values associated with them.</p>
   * @public
   */
  TagValues?: string[] | undefined;
}

/**
 * @public
 */
export interface UsageLimitList {
  /**
   * <p>Contains the output from the <a>DescribeUsageLimits</a>
   *             action. </p>
   * @public
   */
  UsageLimits?: UsageLimit[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a
   *             subsequent request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the <code>Marker</code> parameter
   *             and retrying the command. If the <code>Marker</code> field is empty, all response
   *             records have been retrieved for the request. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DisableLoggingMessage {
  /**
   * <p>The identifier of the cluster on which logging is to be stopped.</p>
   *          <p>Example: <code>examplecluster</code>
   *          </p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DisableSnapshotCopyMessage {
  /**
   * <p>The unique identifier of the source cluster that you want to disable copying of
   *             snapshots to a destination region.</p>
   *          <p>Constraints: Must be the valid name of an existing cluster that has cross-region
   *             snapshot copy enabled.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DisableSnapshotCopyResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p>The cluster already has cross-region snapshot copy disabled.</p>
 * @public
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

/**
 * @public
 */
export interface DisassociateDataShareConsumerMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare to remove association for.</p>
   * @public
   */
  DataShareArn: string | undefined;

  /**
   * <p>A value that specifies whether association for the datashare is removed from the
   *             entire account.</p>
   * @public
   */
  DisassociateEntireAccount?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the consumer namespace that association for
   *             the datashare is removed from.</p>
   * @public
   */
  ConsumerArn?: string | undefined;

  /**
   * <p>From a datashare consumer account, removes association of a datashare from all the existing and future namespaces in the specified Amazon Web Services Region.</p>
   * @public
   */
  ConsumerRegion?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface EnableLoggingMessage {
  /**
   * <p>The identifier of the cluster on which logging is to be started.</p>
   *          <p>Example: <code>examplecluster</code>
   *          </p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of an existing S3 bucket where the log files are to be stored.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the same region as the cluster</p>
   *             </li>
   *             <li>
   *                <p>The cluster must have read bucket and put object permissions</p>
   *             </li>
   *          </ul>
   * @public
   */
  BucketName?: string | undefined;

  /**
   * <p>The prefix applied to the log file names.</p>
   *          <p>Valid characters are any letter from any language, any whitespace character, any numeric character, and the following characters:
   *             underscore (<code>_</code>), period (<code>.</code>), colon (<code>:</code>), slash (<code>/</code>), equal (<code>=</code>), plus (<code>+</code>), backslash (<code>\</code>),
   *             hyphen (<code>-</code>), at symbol (<code>@</code>).</p>
   * @public
   */
  S3KeyPrefix?: string | undefined;

  /**
   * <p>The log destination type. An enum with possible values of <code>s3</code> and <code>cloudwatch</code>.</p>
   * @public
   */
  LogDestinationType?: LogDestinationType | undefined;

  /**
   * <p>The collection of exported log types. Possible values are <code>connectionlog</code>, <code>useractivitylog</code>, and <code>userlog</code>.</p>
   * @public
   */
  LogExports?: string[] | undefined;
}

/**
 * <p>The cluster does not have read bucket or put object permissions on the S3 bucket
 *             specified when enabling logging.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface EnableSnapshotCopyMessage {
  /**
   * <p>The unique identifier of the source cluster to copy snapshots from.</p>
   *          <p>Constraints: Must be the valid name of an existing cluster that does not already
   *             have cross-region snapshot copy enabled.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The destination Amazon Web Services Region that you want to copy snapshots to.</p>
   *          <p>Constraints: Must be the name of a valid Amazon Web Services Region. For more information, see
   *                 <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region">Regions and Endpoints</a> in the Amazon Web Services General Reference.
   *         </p>
   * @public
   */
  DestinationRegion: string | undefined;

  /**
   * <p>The number of days to retain automated snapshots in the destination region after
   *             they are copied from the source region.</p>
   *          <p>Default: 7.</p>
   *          <p>Constraints: Must be at least 1 and no more than 35.</p>
   * @public
   */
  RetentionPeriod?: number | undefined;

  /**
   * <p>The name of the snapshot copy grant to use when snapshots of an Amazon Web Services KMS-encrypted
   *             cluster are copied to the destination region.</p>
   * @public
   */
  SnapshotCopyGrantName?: string | undefined;

  /**
   * <p>The number of days to retain newly copied snapshots in the destination Amazon Web Services Region
   *             after they are copied from the source Amazon Web Services Region. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;
}

/**
 * @public
 */
export interface EnableSnapshotCopyResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p>The specified options are incompatible.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface FailoverPrimaryComputeInputMessage {
  /**
   * <p>The unique identifier of the cluster for which the primary compute unit will be failed over to another Availability Zone.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface FailoverPrimaryComputeResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p>The request parameters to get cluster credentials.</p>
 * @public
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">CREATE USER</a> in the Amazon
   *             Redshift Database Developer Guide. </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 64 alphanumeric characters or hyphens. The user name can't be
   *                         <code>PUBLIC</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must contain uppercase or lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DbUser: string | undefined;

  /**
   * <p>The name of a database that <code>DbUser</code> is authorized to log on to. If
   *                 <code>DbName</code> is not specified, <code>DbUser</code> can log on to any existing
   *             database.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 64 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                <p>Must contain uppercase or lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DbName?: string | undefined;

  /**
   * <p>The unique identifier of the cluster that contains the database for which you are
   *             requesting credentials. This parameter is case sensitive.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The number of seconds until the returned temporary password expires.</p>
   *          <p>Constraint: minimum 900, maximum 3600.</p>
   *          <p>Default: 900</p>
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * <p>Create a database user with the name specified for the user named in
   *                 <code>DbUser</code> if one does not exist.</p>
   * @public
   */
  AutoCreate?: boolean | undefined;

  /**
   * <p>A list of the names of existing database groups that the user named in
   *                 <code>DbUser</code> will join for the current session, in addition to any group
   *             memberships for an existing user. If not specified, a new user is added only to
   *             PUBLIC.</p>
   *          <p>Database group name constraints</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 64 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                <p>Must contain only lowercase letters, numbers, underscore, plus sign, period
   *                     (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Must not contain a colon ( : ) or slash ( / ). </p>
   *             </li>
   *             <li>
   *                <p>Cannot be a reserved word. A list of reserved words can be found in <a href="http://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon
   *                     Redshift Database Developer Guide.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DbGroups?: string[] | undefined;

  /**
   * <p>The custom domain name for the cluster credentials.</p>
   * @public
   */
  CustomDomainName?: string | undefined;
}

/**
 * @public
 */
export interface GetClusterCredentialsWithIAMMessage {
  /**
   * <p>The name of the database for which you are requesting credentials.
   *             If the database name is specified, the IAM policy must allow access to the resource <code>dbname</code> for the specified database name.
   *             If the database name is not specified, access to all databases is allowed.</p>
   * @public
   */
  DbName?: string | undefined;

  /**
   * <p>The unique identifier of the cluster that contains the database for which you are
   *             requesting credentials. </p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The number of seconds until the returned temporary password expires.</p>
   *          <p>Range: 900-3600. Default: 900.</p>
   * @public
   */
  DurationSeconds?: number | undefined;

  /**
   * <p>The custom domain name for the IAM message cluster credentials.</p>
   * @public
   */
  CustomDomainName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ReservedNodeExchangeActionType = {
  RESIZE_CLUSTER: "resize-cluster",
  RESTORE_CLUSTER: "restore-cluster",
} as const;

/**
 * @public
 */
export type ReservedNodeExchangeActionType =
  (typeof ReservedNodeExchangeActionType)[keyof typeof ReservedNodeExchangeActionType];

/**
 * @public
 */
export interface GetReservedNodeExchangeConfigurationOptionsInputMessage {
  /**
   * <p>The action type of the reserved-node configuration. The action type can be an exchange initiated from either a snapshot or a resize.</p>
   * @public
   */
  ActionType: ReservedNodeExchangeActionType | undefined;

  /**
   * <p>The identifier for the cluster that is the source for a reserved-node exchange.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The identifier for the snapshot that is the source for the reserved-node exchange.</p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of
   *             remaining response records exceeds the specified <code>MaxRecords</code> value, a value
   *             is returned in a <code>Marker</code> field of the response. You can retrieve the next
   *             set of records by retrying the command with the returned marker value.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>An optional pagination token provided by a previous <code>GetReservedNodeExchangeConfigurationOptions</code> request. If this
   *             parameter is specified, the response includes only records beyond the marker, up to the value
   *             specified by the <code>MaxRecords</code> parameter. You can retrieve the next set of response
   *             records by providing the returned marker value in the <code>Marker</code> parameter and
   *             retrying the request.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p>Details for a reserved-node exchange. Examples include the node type for a
 *             reserved node, the price for a node, the node's state, and other details.</p>
 * @public
 */
export interface ReservedNodeConfigurationOption {
  /**
   * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node
   *             offerings. </p>
   * @public
   */
  SourceReservedNode?: ReservedNode | undefined;

  /**
   * <p>The target reserved-node count.</p>
   * @public
   */
  TargetReservedNodeCount?: number | undefined;

  /**
   * <p>Describes a reserved node offering.</p>
   * @public
   */
  TargetReservedNodeOffering?: ReservedNodeOffering | undefined;
}

/**
 * @public
 */
export interface GetReservedNodeExchangeConfigurationOptionsOutputMessage {
  /**
   * <p>A pagination token provided by a previous <code>GetReservedNodeExchangeConfigurationOptions</code> request.</p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>the configuration options for the reserved-node
   *             exchange. These options include information about the source reserved node and target reserved
   *             node. Details include the node type, the price, the node count, and the offering
   *             type.</p>
   * @public
   */
  ReservedNodeConfigurationOptionList?: ReservedNodeConfigurationOption[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface GetReservedNodeExchangeOfferingsInputMessage {
  /**
   * <p>A string representing the node identifier for the DC1 Reserved Node to be
   *             exchanged.</p>
   * @public
   */
  ReservedNodeId: string | undefined;

  /**
   * <p>An integer setting the maximum number of ReservedNodeOfferings to
   *             retrieve.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of
   *             ReservedNodeOfferings.</p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface GetReservedNodeExchangeOfferingsOutputMessage {
  /**
   * <p>An optional parameter that specifies the starting point for returning a set of
   *             response records. When the results of a <code>GetReservedNodeExchangeOfferings</code>
   *             request exceed the value specified in MaxRecords, Amazon Redshift returns a value in the
   *             marker field of the response. You can retrieve the next set of response records by
   *             providing the returned marker value in the marker parameter and retrying the request.
   *         </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Returns an array of <a>ReservedNodeOffering</a> objects.</p>
   * @public
   */
  ReservedNodeOfferings?: ReservedNodeOffering[] | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource of which its resource policy is fetched.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * <p>The policy that is attached to a resource.</p>
 * @public
 */
export interface ResourcePolicy {
  /**
   * <p>The resources that a policy is attached to.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The content of a resource policy.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResult {
  /**
   * <p>The content of the resource policy.</p>
   * @public
   */
  ResourcePolicy?: ResourcePolicy | undefined;
}

/**
 * <p>The resource policy isn't valid.</p>
 * @public
 */
export class InvalidPolicyFault extends __BaseException {
  readonly name: "InvalidPolicyFault" = "InvalidPolicyFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyFault, __BaseException>) {
    super({
      name: "InvalidPolicyFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyFault.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ImpactRankingType = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type ImpactRankingType = (typeof ImpactRankingType)[keyof typeof ImpactRankingType];

/**
 * <p>You have exceeded the allowed number of table restore requests. Wait for your
 *             current table restore requests to complete before making a new request.</p>
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface ListRecommendationsMessage {
  /**
   * <p>The unique identifier of the Amazon Redshift cluster for which the list of Advisor recommendations is returned.
   *           If the neither the cluster identifier and the cluster namespace ARN parameters are specified, then recommendations for all clusters in the account are returned.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Redshift cluster namespace Amazon Resource Name (ARN) for which the list of Advisor recommendations is returned.
   *             If the neither the cluster identifier and the cluster namespace ARN parameters are specified, then recommendations for all clusters in the account are returned.</p>
   * @public
   */
  NamespaceArn?: string | undefined;

  /**
   * <p>The maximum number of response records to return in each call. If the number of remaining response records
   *             exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve
   *             the next set of records by retrying the command with the returned marker value.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent request. If a
   *             value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the Marker parameter
   *             and retrying the command. If the Marker field is empty, all response
   *             records have been retrieved for the request.
   *         </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RecommendedActionType = {
  CLI: "CLI",
  SQL: "SQL",
} as const;

/**
 * @public
 */
export type RecommendedActionType = (typeof RecommendedActionType)[keyof typeof RecommendedActionType];

/**
 * <p>The recommended action from the Amazon Redshift Advisor recommendation.</p>
 * @public
 */
export interface RecommendedAction {
  /**
   * <p>The specific instruction about the command.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The database name to perform the action on. Only applicable if the type of command is SQL.</p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>The command to run.</p>
   * @public
   */
  Command?: string | undefined;

  /**
   * <p>The type of command.</p>
   * @public
   */
  Type?: RecommendedActionType | undefined;
}

/**
 * <p>A link to an Amazon Redshift Advisor reference for more information about a recommendation.</p>
 * @public
 */
export interface ReferenceLink {
  /**
   * <p>The hyperlink text that describes the link to more information.</p>
   * @public
   */
  Text?: string | undefined;

  /**
   * <p>The URL address to find more information.</p>
   * @public
   */
  Link?: string | undefined;
}

/**
 * <p>An Amazon Redshift Advisor recommended action on the Amazon Redshift cluster.</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>A unique identifier of the Advisor recommendation.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The unique identifier of the cluster for which the recommendation is returned.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Redshift cluster namespace ARN for which the recommendations is returned.</p>
   * @public
   */
  NamespaceArn?: string | undefined;

  /**
   * <p>The date and time (UTC) that the recommendation was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The type of Advisor recommendation.</p>
   * @public
   */
  RecommendationType?: string | undefined;

  /**
   * <p>The title of the recommendation.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The description of the recommendation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The description of what was observed about your cluster.</p>
   * @public
   */
  Observation?: string | undefined;

  /**
   * <p>The scale of the impact that the Advisor recommendation has to the performance and cost of the cluster.</p>
   * @public
   */
  ImpactRanking?: ImpactRankingType | undefined;

  /**
   * <p>The description of the recommendation.</p>
   * @public
   */
  RecommendationText?: string | undefined;

  /**
   * <p>List of Amazon Redshift recommended actions.</p>
   * @public
   */
  RecommendedActions?: RecommendedAction[] | undefined;

  /**
   * <p>List of helpful links for more information about the Advisor recommendation.</p>
   * @public
   */
  ReferenceLinks?: ReferenceLink[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendationsResult {
  /**
   * <p>The Advisor recommendations for action on the Amazon Redshift cluster.</p>
   * @public
   */
  Recommendations?: Recommendation[] | undefined;

  /**
   * <p>A value that indicates the starting point for the next set of response records in a subsequent
   *             request. If a value is returned in a response, you can retrieve the next set
   *             of records by providing this returned marker value in the Marker parameter
   *             and retrying the command. If the Marker field is empty, all response
   *             records have been retrieved for the request.
   *         </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ModifyAquaInputMessage {
  /**
   * <p>The identifier of the cluster to be modified.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>This parameter is retired. Amazon Redshift automatically  determines whether to use AQUA (Advanced Query Accelerator).</p>
   * @public
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface ModifyAquaOutputMessage {
  /**
   * <p>This parameter is retired. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). </p>
   * @public
   */
  AquaConfiguration?: AquaConfiguration | undefined;
}

/**
 * @public
 */
export interface ModifyAuthenticationProfileMessage {
  /**
   * <p>The name of the authentication profile to replace.</p>
   * @public
   */
  AuthenticationProfileName: string | undefined;

  /**
   * <p>The new content of the authentication profile in JSON format.
   *             The maximum length of the JSON string is determined by a quota for your account.</p>
   * @public
   */
  AuthenticationProfileContent: string | undefined;
}

/**
 * @public
 */
export interface ModifyAuthenticationProfileResult {
  /**
   * <p>The name of the authentication profile that was replaced.</p>
   * @public
   */
  AuthenticationProfileName?: string | undefined;

  /**
   * <p>The updated content of the authentication profile in JSON format.</p>
   * @public
   */
  AuthenticationProfileContent?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyClusterMessage {
  /**
   * <p>The unique identifier of the cluster to be modified.</p>
   *          <p>Example: <code>examplecluster</code>
   *          </p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The new cluster type.</p>
   *          <p>When you submit your cluster resize request, your existing cluster goes into a
   *             read-only mode. After Amazon Redshift provisions a new cluster based on your resize
   *             requirements, there will be outage for a period while the old cluster is deleted and
   *             your connection is switched to the new cluster. You can use <a>DescribeResize</a> to track the progress of the resize request. </p>
   *          <p>Valid Values: <code> multi-node | single-node </code>
   *          </p>
   * @public
   */
  ClusterType?: string | undefined;

  /**
   * <p>The new node type of the cluster. If you specify a new node type, you must also
   *             specify the number of nodes parameter.</p>
   *          <p>
   * For more information about resizing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html">Resizing Clusters in Amazon Redshift</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *          <p>Valid Values:
   *             <code>dc2.large</code> | <code>dc2.8xlarge</code> |
   *             <code>ra3.large</code> |  <code>ra3.xlplus</code> |  <code>ra3.4xlarge</code> | <code>ra3.16xlarge</code>
   *          </p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>The new number of nodes of the cluster. If you specify a new number of nodes, you
   *             must also specify the node type parameter.</p>
   *          <p>
   * For more information about resizing clusters, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/rs-resize-tutorial.html">Resizing Clusters in Amazon Redshift</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *          <p>Valid Values: Integer greater than <code>0</code>.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>A list of cluster security groups to be authorized on this cluster. This change is
   *             asynchronously applied as soon as possible.</p>
   *          <p>Security groups currently associated with the cluster, and not in the list of
   *             groups to apply, will be revoked from the cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 alphanumeric characters or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterSecurityGroups?: string[] | undefined;

  /**
   * <p>A list of virtual private cloud (VPC) security groups to be associated with the
   *             cluster. This change is asynchronously applied as soon as possible.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The new password for the cluster admin user. This change is asynchronously applied
   *             as soon as possible. Between the time of the request and the completion of the request,
   *             the <code>MasterUserPassword</code> element exists in the
   *                 <code>PendingModifiedValues</code> element of the operation response. </p>
   *          <p>You can't use <code>MasterUserPassword</code> if <code>ManageMasterPassword</code> is <code>true</code>.</p>
   *          <note>
   *             <p>Operations never return the password, so this operation provides a way to
   *                 regain access to the admin user account for a cluster if the password is
   *                 lost.</p>
   *          </note>
   *          <p>Default: Uses existing setting.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be between 8 and 64 characters in length.</p>
   *             </li>
   *             <li>
   *                <p>Must contain at least one uppercase letter.</p>
   *             </li>
   *             <li>
   *                <p>Must contain at least one lowercase letter.</p>
   *             </li>
   *             <li>
   *                <p>Must contain one number.</p>
   *             </li>
   *             <li>
   *                <p>Can be any printable ASCII character (ASCII code 33-126) except <code>'</code>
   *                     (single quote), <code>"</code> (double quote), <code>\</code>, <code>/</code>, or <code>@</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MasterUserPassword?: string | undefined;

  /**
   * <p>The name of the cluster parameter group to apply to this cluster. This change is
   *             applied only after the cluster is rebooted. To reboot a cluster use <a>RebootCluster</a>. </p>
   *          <p>Default: Uses existing setting.</p>
   *          <p>Constraints: The cluster parameter group must be in the same parameter group family
   *             that matches the cluster version.</p>
   * @public
   */
  ClusterParameterGroupName?: string | undefined;

  /**
   * <p>The number of days that automated snapshots are retained. If the value is 0,
   *             automated snapshots are disabled. Even if automated snapshots are disabled, you can
   *             still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p>
   *          <p>If you decrease the automated snapshot retention period from its current value,
   *             existing automated snapshots that fall outside of the new retention period will be
   *             immediately deleted.</p>
   *          <p>You can't disable automated snapshots for RA3 node types. Set the automated retention period from 1-35 days.</p>
   *          <p>Default: Uses existing setting.</p>
   *          <p>Constraints: Must be a value from 0 to 35.</p>
   * @public
   */
  AutomatedSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The default for number of days that a newly created manual snapshot is retained. If
   *             the value is -1, the manual snapshot is retained indefinitely. This value doesn't
   *             retroactively change the retention periods of existing manual snapshots.</p>
   *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   *          <p>The default value is -1.</p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The weekly time range (in UTC) during which system maintenance can occur, if
   *             necessary. If system maintenance is necessary during the window, it may result in an
   *             outage.</p>
   *          <p>This maintenance window change is made immediately. If the new maintenance window
   *             indicates the current time, there must be at least 120 minutes between the current time
   *             and end of the window in order to ensure that pending changes are applied.</p>
   *          <p>Default: Uses existing setting.</p>
   *          <p>Format: ddd:hh24:mi-ddd:hh24:mi, for example
   *             <code>wed:07:30-wed:08:00</code>.</p>
   *          <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *          <p>Constraints: Must be at least 30 minutes.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The new version number of the Amazon Redshift engine to upgrade to.</p>
   *          <p>For major version upgrades, if a non-default cluster parameter group is currently
   *             in use, a new cluster parameter group in the cluster parameter group family for the new
   *             version must be specified. The new cluster parameter group can be the default for that
   *             cluster parameter group family.
   * For more information about parameters and parameter groups, go to
   * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
   * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   *          <p>Example: <code>1.0</code>
   *          </p>
   * @public
   */
  ClusterVersion?: string | undefined;

  /**
   * <p>If <code>true</code>, major version upgrades will be applied automatically to the
   *             cluster during the maintenance window. </p>
   *          <p>Default: <code>false</code>
   *          </p>
   * @public
   */
  AllowVersionUpgrade?: boolean | undefined;

  /**
   * <p>Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to
   *             retrieve the data encryption keys stored in an HSM.</p>
   * @public
   */
  HsmClientCertificateIdentifier?: string | undefined;

  /**
   * <p>Specifies the name of the HSM configuration that contains the information the
   *             Amazon Redshift cluster can use to retrieve and store keys in an HSM.</p>
   * @public
   */
  HsmConfigurationIdentifier?: string | undefined;

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
   *          <p>Example: <code>examplecluster</code>
   *          </p>
   * @public
   */
  NewClusterIdentifier?: string | undefined;

  /**
   * <p>If <code>true</code>, the cluster can be accessed from a public network. Only
   *             clusters in VPCs can be set to be publicly available.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The Elastic IP (EIP) address for the cluster.</p>
   *          <p>Constraints: The cluster must be provisioned in EC2-VPC and publicly-accessible
   *             through an Internet gateway. For more information about provisioning clusters in
   *             EC2-VPC, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#cluster-platforms">Supported
   *                 Platforms to Launch Your Cluster</a> in the Amazon Redshift Cluster Management Guide.</p>
   * @public
   */
  ElasticIp?: string | undefined;

  /**
   * <p>An option that specifies whether to create the cluster with enhanced VPC routing
   *             enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a
   *             VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in
   *             the Amazon Redshift Cluster Management Guide.</p>
   *          <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p>
   *          <p>Default: false</p>
   * @public
   */
  EnhancedVpcRouting?: boolean | undefined;

  /**
   * <p>The name for the maintenance track that you want to assign for the cluster. This name
   *             change is asynchronous. The new track name stays in the
   *                 <code>PendingModifiedValues</code> for the cluster until the next maintenance
   *             window. When the maintenance track changes, the cluster is switched to the latest
   *             cluster release available for the maintenance track. At this point, the maintenance
   *             track name is applied.</p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>Indicates whether the cluster is encrypted. If the value is encrypted (true) and you
   *             provide a value for the <code>KmsKeyId</code> parameter, we encrypt the cluster
   *             with the provided <code>KmsKeyId</code>. If you don't provide a <code>KmsKeyId</code>,
   *             we encrypt with the default key. </p>
   *          <p>If the value is not encrypted (false), then the cluster is decrypted. </p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>The Key Management Service (KMS) key ID of the encryption key that you want to use
   *             to encrypt data in the cluster.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.</p>
   * @public
   */
  AvailabilityZoneRelocation?: boolean | undefined;

  /**
   * <p>The option to initiate relocation for an Amazon Redshift cluster to the target Availability Zone.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The option to change the port of an Amazon Redshift cluster.</p>
   *          <p>Valid Values:
   *         </p>
   *          <ul>
   *             <li>
   *                <p>For clusters with ra3 nodes - Select a port within the ranges <code>5431-5455</code> or <code>8191-8215</code>. (If you have an existing cluster
   *                 with ra3 nodes, it isn't required that you change the port to these ranges.)</p>
   *             </li>
   *             <li>
   *                <p>For clusters with dc2 nodes - Select a port within the range <code>1150-65535</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>If <code>true</code>, Amazon Redshift uses Secrets Manager to manage this cluster's admin credentials.
   *             You can't use <code>MasterUserPassword</code> if <code>ManageMasterPassword</code> is true.
   *             If <code>ManageMasterPassword</code> is false or not set, Amazon Redshift uses
   *             <code>MasterUserPassword</code> for the admin user account's password.
   *         </p>
   * @public
   */
  ManageMasterPassword?: boolean | undefined;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret.
   *             You can only use this parameter if <code>ManageMasterPassword</code> is true.</p>
   * @public
   */
  MasterPasswordSecretKmsKeyId?: string | undefined;

  /**
   * <p>The IP address types that the cluster supports. Possible values are <code>ipv4</code> and <code>dualstack</code>.</p>
   * @public
   */
  IpAddressType?: string | undefined;

  /**
   * <p>If true and the cluster is currently only deployed in a single Availability Zone, the cluster will be modified to be deployed in two Availability Zones.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyClusterResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p>The number of tables in the cluster exceeds the limit for the requested new cluster
 *             node type. </p>
 * @public
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
 * @public
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

/**
 * @public
 */
export interface ModifyClusterDbRevisionMessage {
  /**
   * <p>The unique identifier of a cluster whose database revision you want to modify. </p>
   *          <p>Example: <code>examplecluster</code>
   *          </p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the database revision. You can retrieve this value from the
   *             response to the <a>DescribeClusterDbRevisions</a> request.</p>
   * @public
   */
  RevisionTarget: string | undefined;
}

/**
 * @public
 */
export interface ModifyClusterDbRevisionResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyClusterIamRolesMessage {
  /**
   * <p>The unique identifier of the cluster for which you want to associate or
   *             disassociate IAM roles.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>Zero or more IAM roles to associate with the cluster. The roles must be in their
   *             Amazon Resource Name (ARN) format. </p>
   * @public
   */
  AddIamRoles?: string[] | undefined;

  /**
   * <p>Zero or more IAM roles in ARN format to disassociate from the cluster. </p>
   * @public
   */
  RemoveIamRoles?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was last modified.</p>
   * @public
   */
  DefaultIamRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface ModifyClusterIamRolesResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface ModifyClusterMaintenanceMessage {
  /**
   * <p>A unique identifier for the cluster.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>A boolean indicating whether to enable the deferred maintenance window. </p>
   * @public
   */
  DeferMaintenance?: boolean | undefined;

  /**
   * <p>A unique identifier for the deferred maintenance window.</p>
   * @public
   */
  DeferMaintenanceIdentifier?: string | undefined;

  /**
   * <p>A timestamp indicating the start time for the deferred maintenance window.</p>
   * @public
   */
  DeferMaintenanceStartTime?: Date | undefined;

  /**
   * <p>A timestamp indicating end time for the deferred maintenance window. If you specify an
   *             end time, you can't specify a duration.</p>
   * @public
   */
  DeferMaintenanceEndTime?: Date | undefined;

  /**
   * <p>An integer indicating the duration of the maintenance window in days. If you specify a
   *             duration, you can't specify an end time. The duration must be 45 days or less.</p>
   * @public
   */
  DeferMaintenanceDuration?: number | undefined;
}

/**
 * @public
 */
export interface ModifyClusterMaintenanceResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p>Describes a modify cluster parameter group operation. </p>
 * @public
 */
export interface ModifyClusterParameterGroupMessage {
  /**
   * <p>The name of the parameter group to be modified.</p>
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>An array of parameters to be modified. A maximum of 20 parameters can be modified
   *             in a single request.</p>
   *          <p>For each parameter to be modified, you must supply at least the parameter name and
   *             parameter value; other name-value pairs of the parameter are optional.</p>
   *          <p>For the workload management (WLM) configuration, you must supply all the name-value
   *             pairs in the wlm_json_configuration parameter.</p>
   * @public
   */
  Parameters: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ModifyClusterSnapshotMessage {
  /**
   * <p>The identifier of the snapshot whose setting you want to modify.</p>
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The number of days that a manual snapshot is retained. If the value is -1, the manual
   *             snapshot is retained indefinitely.</p>
   *          <p>If the manual snapshot falls outside of the new retention period, you can specify the
   *             force option to immediately delete the snapshot.</p>
   *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>A Boolean option to override an exception if the retention period has already
   *             passed.</p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyClusterSnapshotResult {
  /**
   * <p>Describes a snapshot.</p>
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface ModifyClusterSnapshotScheduleMessage {
  /**
   * <p>A unique identifier for the cluster whose snapshot schedule you want to modify.
   *         </p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>A unique alphanumeric identifier for the schedule that you want to associate with the
   *             cluster.</p>
   * @public
   */
  ScheduleIdentifier?: string | undefined;

  /**
   * <p>A boolean to indicate whether to remove the assoiciation between the cluster and the
   *             schedule.</p>
   * @public
   */
  DisassociateSchedule?: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyClusterSubnetGroupMessage {
  /**
   * <p>The name of the subnet group to be modified.</p>
   * @public
   */
  ClusterSubnetGroupName: string | undefined;

  /**
   * <p>A text description of the subnet group to be modified.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>An array of VPC subnet IDs. A maximum of 20 subnets can be modified in a single
   *             request.</p>
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyClusterSubnetGroupResult {
  /**
   * <p>Describes a subnet group.</p>
   * @public
   */
  ClusterSubnetGroup?: ClusterSubnetGroup | undefined;
}

/**
 * <p>A specified subnet is already in use by another cluster.</p>
 * @public
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

/**
 * @public
 */
export interface ModifyCustomDomainAssociationMessage {
  /**
   * <p>The custom domain name for a changed custom domain association.</p>
   * @public
   */
  CustomDomainName: string | undefined;

  /**
   * <p>The certificate Amazon Resource Name (ARN) for the changed custom domain association.</p>
   * @public
   */
  CustomDomainCertificateArn: string | undefined;

  /**
   * <p>The identifier of the cluster to change a custom domain association for.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ModifyCustomDomainAssociationResult {
  /**
   * <p>The custom domain name associated with the result for the changed custom domain association.</p>
   * @public
   */
  CustomDomainName?: string | undefined;

  /**
   * <p>The certificate Amazon Resource Name (ARN) associated with the result for the changed custom domain association.</p>
   * @public
   */
  CustomDomainCertificateArn?: string | undefined;

  /**
   * <p>The identifier of the cluster associated with the result for the changed custom domain association.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The certificate expiration time associated with the result for the changed custom domain association.</p>
   * @public
   */
  CustomDomainCertExpiryTime?: string | undefined;
}

/**
 * @public
 */
export interface ModifyEndpointAccessMessage {
  /**
   * <p>The endpoint to be modified.</p>
   * @public
   */
  EndpointName: string | undefined;

  /**
   * <p>The complete list of VPC security groups associated with the endpoint after the endpoint is modified.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * <p>The name of the modified Amazon Redshift event notification subscription.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic to be used by the event
   *             notification subscription.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The type of source that will be generating the events. For example, if you want to
   *             be notified of events generated by a cluster, you would set this parameter to cluster.
   *             If this value is not specified, events are returned for all Amazon Redshift objects in your
   *             Amazon Web Services account. You must specify a source type in order to specify source IDs.</p>
   *          <p>Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p>A list of one or more identifiers of Amazon Redshift source objects. All of the objects
   *             must be of the same type as was specified in the source type parameter. The event
   *             subscription will return only events generated by the specified objects. If not
   *             specified, then events are returned for all objects within the source type
   *             specified.</p>
   *          <p>Example: my-cluster-1, my-cluster-2</p>
   *          <p>Example: my-snapshot-20131010</p>
   * @public
   */
  SourceIds?: string[] | undefined;

  /**
   * <p>Specifies the Amazon Redshift event categories to be published by the event notification
   *             subscription.</p>
   *          <p>Values: configuration, management, monitoring, security, pending</p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p>Specifies the Amazon Redshift event severity to be published by the event notification
   *             subscription.</p>
   *          <p>Values: ERROR, INFO</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>A Boolean value indicating if the subscription is enabled. <code>true</code>
   *             indicates the subscription is enabled </p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyEventSubscriptionResult {
  /**
   * <p>Describes event subscriptions.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface ModifyIntegrationMessage {
  /**
   * <p>The unique identifier of the integration to modify.</p>
   * @public
   */
  IntegrationArn: string | undefined;

  /**
   * <p>A new description for the integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A new name for the integration.</p>
   * @public
   */
  IntegrationName?: string | undefined;
}

/**
 * @public
 */
export interface ModifyRedshiftIdcApplicationMessage {
  /**
   * <p>The ARN for the Redshift application that integrates with IAM Identity Center.</p>
   * @public
   */
  RedshiftIdcApplicationArn: string | undefined;

  /**
   * <p>The namespace for the Amazon Redshift IAM Identity Center application to change. It determines which managed application
   *             verifies the connection token.</p>
   * @public
   */
  IdentityNamespace?: string | undefined;

  /**
   * <p>The IAM role ARN associated with the Amazon Redshift IAM Identity Center application to change. It has the required permissions
   *             to be assumed and invoke the IDC Identity Center API.</p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>The display name for the Amazon Redshift IAM Identity Center application to change. It appears on the console.</p>
   * @public
   */
  IdcDisplayName?: string | undefined;

  /**
   * <p>The authorized token issuer list for the Amazon Redshift IAM Identity Center application to change.</p>
   * @public
   */
  AuthorizedTokenIssuerList?: AuthorizedTokenIssuer[] | undefined;

  /**
   * <p>A collection of service integrations associated with the application.</p>
   * @public
   */
  ServiceIntegrations?: ServiceIntegrationsUnion[] | undefined;
}

/**
 * @public
 */
export interface ModifyRedshiftIdcApplicationResult {
  /**
   * <p>Contains properties for the Redshift IDC application.</p>
   * @public
   */
  RedshiftIdcApplication?: RedshiftIdcApplication | undefined;
}

/**
 * @public
 */
export interface ModifyScheduledActionMessage {
  /**
   * <p>The name of the scheduled action to modify. </p>
   * @public
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>A modified JSON format of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   * @public
   */
  TargetAction?: ScheduledActionType | undefined;

  /**
   * <p>A modified schedule in either <code>at( )</code> or <code>cron( )</code> format.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   * @public
   */
  Schedule?: string | undefined;

  /**
   * <p>A different IAM role to assume to run the target action.
   *             For more information about this parameter, see <a>ScheduledAction</a>.</p>
   * @public
   */
  IamRole?: string | undefined;

  /**
   * <p>A modified description of the scheduled action. </p>
   * @public
   */
  ScheduledActionDescription?: string | undefined;

  /**
   * <p>A modified start time of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>A modified end time of the scheduled action.
   *             For more information about this parameter, see <a>ScheduledAction</a>. </p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>A modified enable flag of the scheduled action. If true, the scheduled action is active. If false, the scheduled action is disabled. </p>
   * @public
   */
  Enable?: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifySnapshotCopyRetentionPeriodMessage {
  /**
   * <p>The unique identifier of the cluster for which you want to change the retention
   *             period for either automated or manual snapshots that are copied to a destination Amazon Web Services Region.</p>
   *          <p>Constraints: Must be the valid name of an existing cluster that has cross-region
   *             snapshot copy enabled.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The number of days to retain automated snapshots in the destination Amazon Web Services Region
   *             after they are copied from the source Amazon Web Services Region.</p>
   *          <p>By default, this only changes the retention period of copied automated snapshots. </p>
   *          <p>If you decrease the retention period for automated snapshots that are copied to a
   *             destination Amazon Web Services Region, Amazon Redshift deletes any existing automated snapshots that were
   *             copied to the destination Amazon Web Services Region and that fall outside of the new retention
   *             period.</p>
   *          <p>Constraints: Must be at least 1 and no more than 35 for automated snapshots. </p>
   *          <p>If you specify the <code>manual</code> option, only newly copied manual snapshots will
   *             have the new retention period. </p>
   *          <p>If you specify the value of -1 newly copied manual snapshots are retained
   *             indefinitely.</p>
   *          <p>Constraints: The number of days must be either -1 or an integer between 1 and 3,653
   *             for manual snapshots.</p>
   * @public
   */
  RetentionPeriod: number | undefined;

  /**
   * <p>Indicates whether to apply the snapshot retention period to newly copied manual
   *             snapshots instead of automated snapshots.</p>
   * @public
   */
  Manual?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifySnapshotCopyRetentionPeriodResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p>Cross-region snapshot copy was temporarily disabled. Try your request
 *             again.</p>
 * @public
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

/**
 * @public
 */
export interface ModifySnapshotScheduleMessage {
  /**
   * <p>A unique alphanumeric identifier of the schedule to modify.</p>
   * @public
   */
  ScheduleIdentifier: string | undefined;

  /**
   * <p>An updated list of schedule definitions. A schedule definition is made up of schedule
   *             expressions, for example, "cron(30 12 *)" or "rate(12 hours)".</p>
   * @public
   */
  ScheduleDefinitions: string[] | undefined;
}

/**
 * <p>The specified snapshot schedule is already being updated.</p>
 * @public
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

/**
 * @public
 */
export interface ModifyUsageLimitMessage {
  /**
   * <p>The identifier of the usage limit to modify.</p>
   * @public
   */
  UsageLimitId: string | undefined;

  /**
   * <p>The new limit amount.
   *             For more information about this parameter, see <a>UsageLimit</a>. </p>
   * @public
   */
  Amount?: number | undefined;

  /**
   * <p>The new action that Amazon Redshift takes when the limit is reached.
   *             For more information about this parameter, see <a>UsageLimit</a>. </p>
   * @public
   */
  BreachAction?: UsageLimitBreachAction | undefined;
}

/**
 * @public
 */
export interface PauseClusterResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface PurchaseReservedNodeOfferingMessage {
  /**
   * <p>The unique identifier of the reserved node offering you want to purchase.</p>
   * @public
   */
  ReservedNodeOfferingId: string | undefined;

  /**
   * <p>The number of reserved nodes that you want to purchase.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   * @public
   */
  NodeCount?: number | undefined;
}

/**
 * @public
 */
export interface PurchaseReservedNodeOfferingResult {
  /**
   * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node
   *             offerings. </p>
   * @public
   */
  ReservedNode?: ReservedNode | undefined;
}

/**
 * <p>Request would exceed the user's compute node quota.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @public
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
 * @public
 */
export interface PutResourcePolicyMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource of which its resource policy is updated.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The content of the resource policy being updated.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResult {
  /**
   * <p>The content of the updated resource policy.</p>
   * @public
   */
  ResourcePolicy?: ResourcePolicy | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RebootClusterMessage {
  /**
   * <p>The cluster identifier.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RebootClusterResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface RegisterNamespaceInputMessage {
  /**
   * <p>The unique identifier of the cluster or
   *             serverless namespace that you want to register. </p>
   * @public
   */
  NamespaceIdentifier: NamespaceIdentifierUnion | undefined;

  /**
   * <p>An array containing the ID of the consumer account
   *             that you want to register the namespace to.</p>
   * @public
   */
  ConsumerIdentifiers: string[] | undefined;
}

/**
 * @public
 */
export interface RegisterNamespaceOutputMessage {
  /**
   * <p>The registration status of the cluster or
   *             serverless namespace.</p>
   * @public
   */
  Status?: NamespaceRegistrationStatus | undefined;
}

/**
 * @public
 */
export interface RejectDataShareMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the datashare to reject.</p>
   * @public
   */
  DataShareArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ResetClusterParameterGroupMessage {
  /**
   * <p>The name of the cluster parameter group to be reset.</p>
   * @public
   */
  ParameterGroupName: string | undefined;

  /**
   * <p>If <code>true</code>, all parameters in the specified parameter group will be reset
   *             to their default values. </p>
   *          <p>Default: <code>true</code>
   *          </p>
   * @public
   */
  ResetAllParameters?: boolean | undefined;

  /**
   * <p>An array of names of parameters to be reset. If
   *                 <i>ResetAllParameters</i> option is not used, then at least one
   *             parameter name must be supplied. </p>
   *          <p>Constraints: A maximum of 20 parameters can be reset in a single request.</p>
   * @public
   */
  Parameters?: Parameter[] | undefined;
}

/**
 * @public
 */
export interface ResizeClusterResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p></p>
 * @public
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
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the snapshot from which to create the new cluster. This parameter isn't
   *             case sensitive. You must specify this parameter or <code>snapshotArn</code>, but not both.</p>
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot associated with the message to restore from a cluster. You must specify
   *             this parameter or <code>snapshotIdentifier</code>, but not both.</p>
   * @public
   */
  SnapshotArn?: string | undefined;

  /**
   * <p>The name of the cluster the source snapshot was created from. This parameter is
   *             required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   * @public
   */
  SnapshotClusterIdentifier?: string | undefined;

  /**
   * <p>The port number on which the cluster accepts connections.</p>
   *          <p>Default: The same port as the original cluster.</p>
   *          <p>Valid values: For clusters with DC2 nodes, must be within the range <code>1150</code>-<code>65535</code>. For clusters with ra3 nodes, must be
   *             within the ranges <code>5431</code>-<code>5455</code> or <code>8191</code>-<code>8215</code>.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The Amazon EC2 Availability Zone in which to restore the cluster.</p>
   *          <p>Default: A random, system-chosen Availability Zone.</p>
   *          <p>Example: <code>us-east-2a</code>
   *          </p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>If <code>true</code>, major version upgrades can be applied during the maintenance
   *             window to the Amazon Redshift engine that is running on the cluster. </p>
   *          <p>Default: <code>true</code>
   *          </p>
   * @public
   */
  AllowVersionUpgrade?: boolean | undefined;

  /**
   * <p>The name of the subnet group where you want to cluster restored.</p>
   *          <p>A snapshot of cluster in VPC can be restored only in VPC. Therefore, you must
   *             provide subnet group name where you want the cluster restored.</p>
   * @public
   */
  ClusterSubnetGroupName?: string | undefined;

  /**
   * <p>If <code>true</code>, the cluster can be accessed from a public network. </p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The Amazon Web Services account used to create or copy the snapshot. Required if you are
   *             restoring a snapshot you do not own, optional if you own the snapshot.</p>
   * @public
   */
  OwnerAccount?: string | undefined;

  /**
   * <p>Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to
   *             retrieve the data encryption keys stored in an HSM.</p>
   * @public
   */
  HsmClientCertificateIdentifier?: string | undefined;

  /**
   * <p>Specifies the name of the HSM configuration that contains the information the
   *             Amazon Redshift cluster can use to retrieve and store keys in an HSM.</p>
   * @public
   */
  HsmConfigurationIdentifier?: string | undefined;

  /**
   * <p>The Elastic IP (EIP) address for the cluster. Don't specify the Elastic IP address for a publicly
   *             accessible cluster with availability zone relocation turned on.</p>
   * @public
   */
  ElasticIp?: string | undefined;

  /**
   * <p>The name of the parameter group to be associated with this cluster.</p>
   *          <p>Default: The default Amazon Redshift cluster parameter group. For information about the
   *             default parameter group, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Working with Amazon
   *                 Redshift Parameter Groups</a>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ClusterParameterGroupName?: string | undefined;

  /**
   * <p>A list of security groups to be associated with this cluster.</p>
   *          <p>Default: The default cluster security group for Amazon Redshift.</p>
   *          <p>Cluster security groups only apply to clusters outside of VPCs.</p>
   * @public
   */
  ClusterSecurityGroups?: string[] | undefined;

  /**
   * <p>A list of Virtual Private Cloud (VPC) security groups to be associated with the
   *             cluster.</p>
   *          <p>Default: The default VPC security group is associated with the cluster.</p>
   *          <p>VPC security groups only apply to clusters in VPCs.</p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The weekly time range (in UTC) during which automated cluster maintenance can
   *             occur.</p>
   *          <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p> Default: The value selected for the cluster from which the snapshot was taken. For
   *             more information about the time blocks for each region, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-maintenance-windows">Maintenance Windows</a> in Amazon Redshift Cluster Management Guide. </p>
   *          <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p>The number of days that automated snapshots are retained. If the value is 0,
   *             automated snapshots are disabled. Even if automated snapshots are disabled, you can
   *             still create manual snapshots when you want with <a>CreateClusterSnapshot</a>. </p>
   *          <p>You can't disable automated snapshots for RA3 node types. Set the automated retention period from 1-35 days.</p>
   *          <p>Default: The value selected for the cluster from which the snapshot was
   *             taken.</p>
   *          <p>Constraints: Must be a value from 0 to 35.</p>
   * @public
   */
  AutomatedSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The default number of days to retain a manual snapshot. If the value is -1, the
   *             snapshot is retained indefinitely. This setting doesn't change the retention period
   *             of existing snapshots.</p>
   *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   * @public
   */
  ManualSnapshotRetentionPeriod?: number | undefined;

  /**
   * <p>The Key Management Service (KMS) key ID of the encryption key that encrypts data in the cluster
   *             restored from a shared snapshot. You can also provide
   *             the key ID when you restore from an unencrypted snapshot to an encrypted cluster in
   *             the same account. Additionally, you can specify a new KMS key ID when you restore from an encrypted
   *             snapshot in the same account in order to change it. In that case, the restored cluster is encrypted
   *             with the new KMS key ID.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>The node type that the restored cluster will be provisioned with.</p>
   *          <p>If you have a DC instance type, you
   *             must restore into that same instance type and size. In other words, you can only restore
   *             a dc2.large node type into another dc2 type. For more information about node types, see
   *                 <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html#rs-about-clusters-and-nodes">
   *                 About Clusters and Nodes</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
   * @public
   */
  NodeType?: string | undefined;

  /**
   * <p>An option that specifies whether to create the cluster with enhanced VPC routing
   *             enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a
   *             VPC. For more information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/enhanced-vpc-routing.html">Enhanced VPC Routing</a> in
   *             the Amazon Redshift Cluster Management Guide.</p>
   *          <p>If this option is <code>true</code>, enhanced VPC routing is enabled. </p>
   *          <p>Default: false</p>
   * @public
   */
  EnhancedVpcRouting?: boolean | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * <p>A list of Identity and Access Management (IAM) roles that can be used by the
   *             cluster to access other Amazon Web Services services. You must supply the IAM roles in their Amazon
   *             Resource Name (ARN) format. </p>
   *          <p>The maximum number of IAM roles that you can associate is subject to a quota.
   *             For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Quotas and limits</a>
   *             in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
   * @public
   */
  IamRoles?: string[] | undefined;

  /**
   * <p>The name of the maintenance track for the restored cluster. When you take a snapshot,
   *             the snapshot inherits the <code>MaintenanceTrack</code> value from the cluster. The
   *             snapshot might be on a different track than the cluster that was the source for the
   *             snapshot. For example, suppose that you take a snapshot of a cluster that is on the
   *             current track and then change the cluster to be on the trailing track. In this case, the
   *             snapshot and the source cluster are on different tracks.</p>
   * @public
   */
  MaintenanceTrackName?: string | undefined;

  /**
   * <p>A unique identifier for the snapshot schedule.</p>
   * @public
   */
  SnapshotScheduleIdentifier?: string | undefined;

  /**
   * <p>The number of nodes specified when provisioning the restored cluster.</p>
   * @public
   */
  NumberOfNodes?: number | undefined;

  /**
   * <p>The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster is restored.</p>
   * @public
   */
  AvailabilityZoneRelocation?: boolean | undefined;

  /**
   * <p>This parameter is retired. It does not set the AQUA configuration status. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).</p>
   * @public
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that was set as default for the cluster when the cluster was last modified while it was restored from a snapshot.</p>
   * @public
   */
  DefaultIamRoleArn?: string | undefined;

  /**
   * <p>The identifier of the target reserved node offering.</p>
   * @public
   */
  ReservedNodeId?: string | undefined;

  /**
   * <p>The identifier of the target reserved node offering.</p>
   * @public
   */
  TargetReservedNodeOfferingId?: string | undefined;

  /**
   * <p>Enables support for restoring an unencrypted snapshot to a cluster encrypted
   *             with Key Management Service (KMS) and a customer managed key.</p>
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * <p>If <code>true</code>, Amazon Redshift uses Secrets Manager to manage the restored
   *             cluster's admin credentials. If <code>ManageMasterPassword</code> is false or not set,
   *             Amazon Redshift uses the admin credentials the cluster had at the time the snapshot was taken.</p>
   * @public
   */
  ManageMasterPassword?: boolean | undefined;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin credentials secret.
   *             You can only use this parameter if <code>ManageMasterPassword</code> is true.</p>
   * @public
   */
  MasterPasswordSecretKmsKeyId?: string | undefined;

  /**
   * <p>The IP address type for the cluster. Possible values are <code>ipv4</code> and <code>dualstack</code>.</p>
   * @public
   */
  IpAddressType?: string | undefined;

  /**
   * <p>If true, the snapshot will be restored to a cluster deployed in two Availability Zones.</p>
   * @public
   */
  MultiAZ?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreFromClusterSnapshotResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RestoreTableFromClusterSnapshotMessage {
  /**
   * <p>The identifier of the Amazon Redshift cluster to restore the table to.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the snapshot to restore the table from. This snapshot must have
   *             been created from the Amazon Redshift cluster specified by the
   *                 <code>ClusterIdentifier</code> parameter.</p>
   * @public
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the source database that contains the table to restore from.</p>
   * @public
   */
  SourceDatabaseName: string | undefined;

  /**
   * <p>The name of the source schema that contains the table to restore from. If you do
   *             not specify a <code>SourceSchemaName</code> value, the default is
   *             <code>public</code>.</p>
   * @public
   */
  SourceSchemaName?: string | undefined;

  /**
   * <p>The name of the source table to restore from.</p>
   * @public
   */
  SourceTableName: string | undefined;

  /**
   * <p>The name of the database to restore the table to.</p>
   * @public
   */
  TargetDatabaseName?: string | undefined;

  /**
   * <p>The name of the schema to restore the table to.</p>
   * @public
   */
  TargetSchemaName?: string | undefined;

  /**
   * <p>The name of the table to create as a result of the current request.</p>
   * @public
   */
  NewTableName: string | undefined;

  /**
   * <p>Indicates whether name identifiers for database, schema, and table are case sensitive.
   *             If <code>true</code>, the names are case sensitive.
   *             If <code>false</code> (default), the names are not case sensitive.</p>
   * @public
   */
  EnableCaseSensitiveIdentifier?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreTableFromClusterSnapshotResult {
  /**
   * <p>Describes the status of a <a>RestoreTableFromClusterSnapshot</a>
   *             operation.</p>
   * @public
   */
  TableRestoreStatus?: TableRestoreStatus | undefined;
}

/**
 * @public
 */
export interface ResumeClusterResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RevokeClusterSecurityGroupIngressMessage {
  /**
   * <p>The name of the security Group from which to revoke the ingress rule.</p>
   * @public
   */
  ClusterSecurityGroupName: string | undefined;

  /**
   * <p>The IP range for which to revoke access. This range must be a valid Classless
   *             Inter-Domain Routing (CIDR) block of IP addresses. If <code>CIDRIP</code> is specified,
   *                 <code>EC2SecurityGroupName</code> and <code>EC2SecurityGroupOwnerId</code> cannot be
   *             provided. </p>
   * @public
   */
  CIDRIP?: string | undefined;

  /**
   * <p>The name of the EC2 Security Group whose access is to be revoked. If
   *                 <code>EC2SecurityGroupName</code> is specified, <code>EC2SecurityGroupOwnerId</code>
   *             must also be provided and <code>CIDRIP</code> cannot be provided. </p>
   * @public
   */
  EC2SecurityGroupName?: string | undefined;

  /**
   * <p>The Amazon Web Services account number of the owner of the security group specified in the
   *                 <code>EC2SecurityGroupName</code> parameter. The Amazon Web Services access key ID is not an
   *             acceptable value. If <code>EC2SecurityGroupOwnerId</code> is specified,
   *                 <code>EC2SecurityGroupName</code> must also be provided. and <code>CIDRIP</code>
   *             cannot be provided. </p>
   *          <p>Example: <code>111122223333</code>
   *          </p>
   * @public
   */
  EC2SecurityGroupOwnerId?: string | undefined;
}

/**
 * @public
 */
export interface RevokeClusterSecurityGroupIngressResult {
  /**
   * <p>Describes a security group.</p>
   * @public
   */
  ClusterSecurityGroup?: ClusterSecurityGroup | undefined;
}

/**
 * @public
 */
export interface RevokeEndpointAccessMessage {
  /**
   * <p>The cluster to revoke access from.</p>
   * @public
   */
  ClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID whose access is to be revoked.</p>
   * @public
   */
  Account?: string | undefined;

  /**
   * <p>The virtual private cloud (VPC) identifiers for which access is to be revoked.</p>
   * @public
   */
  VpcIds?: string[] | undefined;

  /**
   * <p>Indicates whether to force the revoke action.
   *            If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.</p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RevokeSnapshotAccessMessage {
  /**
   * <p>The identifier of the snapshot that the account can no longer access.</p>
   * @public
   */
  SnapshotIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot associated with the message to revoke access.</p>
   * @public
   */
  SnapshotArn?: string | undefined;

  /**
   * <p>The identifier of the cluster the snapshot was created from. This parameter is
   *             required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   * @public
   */
  SnapshotClusterIdentifier?: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account that can no longer restore the specified
   *             snapshot.</p>
   * @public
   */
  AccountWithRestoreAccess: string | undefined;
}

/**
 * @public
 */
export interface RevokeSnapshotAccessResult {
  /**
   * <p>Describes a snapshot.</p>
   * @public
   */
  Snapshot?: Snapshot | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RotateEncryptionKeyMessage {
  /**
   * <p>The unique identifier of the cluster that you want to rotate the encryption keys
   *             for.</p>
   *          <p>Constraints: Must be the name of valid cluster that has encryption
   *             enabled.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * @public
 */
export interface RotateEncryptionKeyResult {
  /**
   * <p>Describes a cluster.</p>
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface UpdatePartnerStatusInputMessage {
  /**
   * <p>The Amazon Web Services account ID that owns the cluster.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The cluster identifier of the cluster whose partner integration status is being updated.</p>
   * @public
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the database whose partner integration status is being updated.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partner whose integration status is being updated.</p>
   * @public
   */
  PartnerName: string | undefined;

  /**
   * <p>The value of the updated status.</p>
   * @public
   */
  Status: PartnerIntegrationStatus | undefined;

  /**
   * <p>The status message provided by the partner.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * @internal
 */
export const DisableSnapshotCopyResultFilterSensitiveLog = (obj: DisableSnapshotCopyResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});

/**
 * @internal
 */
export const EnableSnapshotCopyResultFilterSensitiveLog = (obj: EnableSnapshotCopyResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});

/**
 * @internal
 */
export const FailoverPrimaryComputeResultFilterSensitiveLog = (obj: FailoverPrimaryComputeResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});

/**
 * @internal
 */
export const ModifyClusterMessageFilterSensitiveLog = (obj: ModifyClusterMessage): any => ({
  ...obj,
  ...(obj.MasterUserPassword && { MasterUserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyClusterResultFilterSensitiveLog = (obj: ModifyClusterResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});

/**
 * @internal
 */
export const ModifyClusterDbRevisionResultFilterSensitiveLog = (obj: ModifyClusterDbRevisionResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});

/**
 * @internal
 */
export const ModifyClusterIamRolesResultFilterSensitiveLog = (obj: ModifyClusterIamRolesResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});

/**
 * @internal
 */
export const ModifyClusterMaintenanceResultFilterSensitiveLog = (obj: ModifyClusterMaintenanceResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});

/**
 * @internal
 */
export const ModifySnapshotCopyRetentionPeriodResultFilterSensitiveLog = (
  obj: ModifySnapshotCopyRetentionPeriodResult
): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});

/**
 * @internal
 */
export const PauseClusterResultFilterSensitiveLog = (obj: PauseClusterResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});

/**
 * @internal
 */
export const RebootClusterResultFilterSensitiveLog = (obj: RebootClusterResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});

/**
 * @internal
 */
export const ResizeClusterResultFilterSensitiveLog = (obj: ResizeClusterResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});

/**
 * @internal
 */
export const RestoreFromClusterSnapshotResultFilterSensitiveLog = (obj: RestoreFromClusterSnapshotResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});

/**
 * @internal
 */
export const ResumeClusterResultFilterSensitiveLog = (obj: ResumeClusterResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});

/**
 * @internal
 */
export const RotateEncryptionKeyResultFilterSensitiveLog = (obj: RotateEncryptionKeyResult): any => ({
  ...obj,
  ...(obj.Cluster && { Cluster: ClusterFilterSensitiveLog(obj.Cluster) }),
});
