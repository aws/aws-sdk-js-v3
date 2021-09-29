import {
  ActivityStreamMode,
  ActivityStreamStatus,
  AvailabilityZone,
  Certificate,
  DBCluster,
  DBClusterSnapshotAttributesResult,
  DBInstance,
  DBInstanceAutomatedBackup,
  DBProxy,
  DBProxyEndpoint,
  DBProxyTarget,
  DBProxyTargetGroup,
  DBSecurityGroup,
  DBSnapshot,
  DBSubnetGroup,
  EventSubscription,
  ExportTask,
  Filter,
  GlobalCluster,
  InstallationMedia,
  OptionGroup,
  OptionSetting,
  Parameter,
  ProcessorFeature,
  ReplicaMode,
  ResourcePendingMaintenanceActions,
  ScalingConfiguration,
  Tag,
  UserAuthConfig,
} from "./models_0";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeDBSecurityGroups</code> action.
 *         </p>
 */
export interface DBSecurityGroupMessage {
  /**
   * <p>
   *             An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         A list of <code>DBSecurityGroup</code> instances.
   *         </p>
   */
  DBSecurityGroups?: DBSecurityGroup[];
}

export namespace DBSecurityGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSecurityGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBSecurityGroupsMessage {
  /**
   * <p>The name of the DB security group to return details for.</p>
   */
  DBSecurityGroupName?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         <code>DescribeDBSecurityGroups</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace DescribeDBSecurityGroupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBSecurityGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBSnapshotAttributesMessage {
  /**
   * <p>The identifier for the DB snapshot to describe the attributes for.</p>
   */
  DBSnapshotIdentifier: string | undefined;
}

export namespace DescribeDBSnapshotAttributesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBSnapshotAttributesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the name and values of a manual DB snapshot attribute</p>
 *          <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts
 *     to restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
 *     API.</p>
 */
export interface DBSnapshotAttribute {
  /**
   * <p>The name of the manual DB snapshot attribute.</p>
   *          <p>The attribute named <code>restore</code> refers to the list of Amazon Web Services accounts that
   *           have permission to copy or restore the manual DB cluster snapshot. For more information,
   *           see the <code>ModifyDBSnapshotAttribute</code>
   *           API action.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value or values for the manual DB snapshot attribute.</p>
   *          <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element
   *       returns a list of IDs of the Amazon Web Services accounts that are authorized to copy or restore the manual
   *       DB snapshot. If a value of <code>all</code> is in the list, then the manual DB snapshot
   *       is public and available for any Amazon Web Services account to copy or restore.</p>
   */
  AttributeValues?: string[];
}

export namespace DBSnapshotAttribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSnapshotAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code>
 *     API action.</p>
 *          <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts
 *       to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
 *       API action.</p>
 */
export interface DBSnapshotAttributesResult {
  /**
   * <p>The identifier of the manual DB snapshot that the attributes apply to.</p>
   */
  DBSnapshotIdentifier?: string;

  /**
   * <p>The list of attributes and values for the manual DB snapshot.</p>
   */
  DBSnapshotAttributes?: DBSnapshotAttribute[];
}

export namespace DBSnapshotAttributesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSnapshotAttributesResult): any => ({
    ...obj,
  });
}

export interface DescribeDBSnapshotAttributesResult {
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code>
   *     API action.</p>
   *          <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts
   *       to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
   *       API action.</p>
   */
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
}

export namespace DescribeDBSnapshotAttributesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBSnapshotAttributesResult): any => ({
    ...obj,
  });
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action.
 *         </p>
 */
export interface DBSnapshotMessage {
  /**
   * <p>
   *             An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         A list of <code>DBSnapshot</code> instances.
   *         </p>
   */
  DBSnapshots?: DBSnapshot[];
}

export namespace DBSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSnapshotMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBSnapshotsMessage {
  /**
   * <p>The ID of the DB instance to retrieve the list of DB snapshots for.
   *         This parameter can't be used in conjunction with <code>DBSnapshotIdentifier</code>.
   *         This parameter isn't case-sensitive.
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>
   *         A specific DB snapshot identifier to describe. This parameter can't be used in conjunction with <code>DBInstanceIdentifier</code>.
   *             This value is stored as a lowercase string.
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBSnapshot.</p>
   *             </li>
   *             <li>
   *                <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p>
   *             </li>
   *          </ul>
   */
  DBSnapshotIdentifier?: string;

  /**
   * <p>The type of snapshots to be returned. You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>automated</code> - Return all DB snapshots that have been automatically taken by
   *       Amazon RDS for my Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manual</code> - Return all DB snapshots that have been taken by my Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>shared</code> - Return all manual DB snapshots that have been shared to my Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public</code> - Return all DB snapshots that have been marked as public.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>awsbackup</code> - Return the DB snapshots managed by the Amazon Web Services Backup service.</p>
   *               <p>For information about Amazon Web Services Backup, see the
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html">
   *                       <i>Amazon Web Services Backup Developer Guide.</i>
   *                   </a>
   *                </p>
   *               <p>The <code>awsbackup</code> type does not apply to Aurora.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual snapshots are
   *       returned. Shared and public DB snapshots are not included in the returned results by default.
   *       You can include shared snapshots with these results by enabling the <code>IncludeShared</code>
   *       parameter. You can include public snapshots with these results by enabling the
   *       <code>IncludePublic</code> parameter.</p>
   *          <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values
   *       of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is
   *       set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to
   *       <code>public</code>.</p>
   */
  SnapshotType?: string;

  /**
   * <p>A filter that specifies one or more DB snapshots to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-instance-id</code> - Accepts DB instance identifiers and DB
   *               instance Amazon Resource Names (ARNs).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-snapshot-id</code> - Accepts DB snapshot identifiers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dbi-resource-id</code> - Accepts identifiers of source DB instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-type</code> - Accepts types of DB snapshots.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>engine</code> - Accepts names of database engines.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         <code>DescribeDBSnapshots</code> request.
   *             If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>A value that indicates whether to include shared manual DB cluster snapshots
   *           from other Amazon Web Services accounts that this Amazon Web Services account has been given
   *           permission to copy or restore. By default, these snapshots are not included.</p>
   *          <p>You can give an Amazon Web Services account permission to restore a manual DB snapshot from
   *     another Amazon Web Services account by using the <code>ModifyDBSnapshotAttribute</code> API action.</p>
   */
  IncludeShared?: boolean;

  /**
   * <p>A value that indicates whether to include manual DB cluster snapshots that are public and can be copied
   *           or restored by any Amazon Web Services account. By default, the public snapshots are not included.</p>
   *          <p>You can share a manual DB snapshot as public by using the <a>ModifyDBSnapshotAttribute</a> API.</p>
   */
  IncludePublic?: boolean;

  /**
   * <p>A specific DB resource ID to describe.</p>
   */
  DbiResourceId?: string;
}

export namespace DescribeDBSnapshotsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBSnapshotsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action.
 *         </p>
 */
export interface DBSubnetGroupMessage {
  /**
   * <p>
   *             An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         A list of <code>DBSubnetGroup</code> instances.
   *         </p>
   */
  DBSubnetGroups?: DBSubnetGroup[];
}

export namespace DBSubnetGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBSubnetGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeDBSubnetGroupsMessage {
  /**
   * <p>The name of the DB subnet group to return details for.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>
   *             An optional pagination token provided by a previous DescribeDBSubnetGroups request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace DescribeDBSubnetGroupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDBSubnetGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEngineDefaultClusterParametersMessage {
  /**
   * <p>The name of the DB cluster parameter group family to return engine parameter information for.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *       The maximum number of records to include in the response.
   *       If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *     </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>
   *       An optional pagination token provided by a previous
   *       <code>DescribeEngineDefaultClusterParameters</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;
}

export namespace DescribeEngineDefaultClusterParametersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEngineDefaultClusterParametersMessage): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action.
 *         </p>
 */
export interface EngineDefaults {
  /**
   * <p>Specifies the name of the DB parameter group family that the engine default parameters apply to.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             EngineDefaults request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;

  /**
   * <p>Contains a list of engine default parameters.</p>
   */
  Parameters?: Parameter[];
}

export namespace EngineDefaults {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EngineDefaults): any => ({
    ...obj,
  });
}

export interface DescribeEngineDefaultClusterParametersResult {
  /**
   * <p>
   *             Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action.
   *         </p>
   */
  EngineDefaults?: EngineDefaults;
}

export namespace DescribeEngineDefaultClusterParametersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEngineDefaultClusterParametersResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEngineDefaultParametersMessage {
  /**
   * <p>The name of the DB parameter group family.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         <code>DescribeEngineDefaultParameters</code> request.
   *             If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace DescribeEngineDefaultParametersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEngineDefaultParametersMessage): any => ({
    ...obj,
  });
}

export interface DescribeEngineDefaultParametersResult {
  /**
   * <p>
   *             Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action.
   *         </p>
   */
  EngineDefaults?: EngineDefaults;
}

export namespace DescribeEngineDefaultParametersResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEngineDefaultParametersResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEventCategoriesMessage {
  /**
   * <p>The type of source that is generating the events.</p>
   *          <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> | <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> | <code>db-cluster-snapshot</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];
}

export namespace DescribeEventCategoriesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventCategoriesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the results of a successful invocation of the <code>DescribeEventCategories</code> operation.</p>
 */
export interface EventCategoriesMap {
  /**
   * <p>The source type that the returned categories belong to</p>
   */
  SourceType?: string;

  /**
   * <p>The event categories for the specified source type</p>
   */
  EventCategories?: string[];
}

export namespace EventCategoriesMap {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventCategoriesMap): any => ({
    ...obj,
  });
}

/**
 * <p>Data returned from the <code>DescribeEventCategories</code> operation.</p>
 */
export interface EventCategoriesMessage {
  /**
   * <p>A list of EventCategoriesMap data types.</p>
   */
  EventCategoriesMapList?: EventCategoriesMap[];
}

export namespace EventCategoriesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventCategoriesMessage): any => ({
    ...obj,
  });
}

export type SourceType =
  | "db-cluster"
  | "db-cluster-snapshot"
  | "db-instance"
  | "db-parameter-group"
  | "db-security-group"
  | "db-snapshot";

/**
 * <p></p>
 */
export interface DescribeEventsMessage {
  /**
   * <p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>SourceIdentifier</code> is supplied, <code>SourceType</code> must also be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB instance, a <code>DBInstanceIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB cluster, a <code>DBClusterIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB cluster snapshot, a <code>DBClusterSnapshotIdentifier</code> value must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  SourceIdentifier?: string;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are returned.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>
   *         The beginning of the time interval to retrieve events for,
   *         specified in ISO 8601 format. For more information about ISO 8601,
   *         go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: 2009-07-08T18:00Z</p>
   */
  StartTime?: Date;

  /**
   * <p>
   *         The end of the time interval for which to retrieve events,
   *         specified in ISO 8601 format. For more information about ISO 8601,
   *         go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: 2009-07-08T18:00Z</p>
   */
  EndTime?: Date;

  /**
   * <p>The number of minutes to retrieve events for.</p>
   *          <p>Default: 60</p>
   */
  Duration?: number;

  /**
   * <p>A list of event categories that trigger notifications for a event notification subscription.</p>
   */
  EventCategories?: string[];

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         DescribeEvents request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace DescribeEventsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>
 *         This data type is used as a response element in the <code>DescribeEvents</code> action.
 *         </p>
 */
export interface Event {
  /**
   * <p>Provides the identifier for the source of the event.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>Specifies the source type for this event.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>Provides the text of this event.</p>
   */
  Message?: string;

  /**
   * <p>Specifies the category for the event.</p>
   */
  EventCategories?: string[];

  /**
   * <p>Specifies the date and time of the event.</p>
   */
  Date?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for the event.</p>
   */
  SourceArn?: string;
}

export namespace Event {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeEvents</code> action.
 *         </p>
 */
export interface EventsMessage {
  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             Events request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         A list of <code>Event</code> instances.
   *         </p>
   */
  Events?: Event[];
}

export namespace EventsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * <p>The name of the RDS event notification subscription you want to describe.</p>
   */
  SubscriptionName?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *             The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             DescribeOrderableDBInstanceOptions request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;
}

export namespace DescribeEventSubscriptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEventSubscriptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Data returned by the <b>DescribeEventSubscriptions</b> action.</p>
 */
export interface EventSubscriptionsMessage {
  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             DescribeOrderableDBInstanceOptions request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>A list of EventSubscriptions data types.</p>
   */
  EventSubscriptionsList?: EventSubscription[];
}

export namespace EventSubscriptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventSubscriptionsMessage): any => ({
    ...obj,
  });
}

export interface DescribeExportTasksMessage {
  /**
   * <p>The identifier of the snapshot export task to be described.</p>
   */
  ExportTaskIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot exported to Amazon S3.</p>
   */
  SourceArn?: string;

  /**
   * <p>Filters specify one or more snapshot exports to describe. The filters are specified as name-value pairs that define what to
   *             include in the output. Filter names and values are case-sensitive.</p>
   *         <p>Supported filters include the following: </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>export-task-identifier</code> - An identifier for the snapshot export task.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3-bucket</code> - The Amazon S3 bucket the snapshot is exported to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source-arn</code> - The Amazon Resource Name (ARN) of the snapshot exported to Amazon S3</p>
   *             </li>
   *             <li>
   *                <p>
   *                     <code>status</code> - The status of the export task. Must be lowercase, for example, <code>complete</code>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>
   *             An optional pagination token provided by a previous <code>DescribeExportTasks</code> request.
   *             If you specify this parameter, the response includes only records beyond the marker,
   *             up to the value specified by the <code>MaxRecords</code> parameter.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *             The maximum number of records to include in the response. If more records exist than the
   *             specified value, a pagination token called a marker is included in the response.
   *             You can use the marker in a later <code>DescribeExportTasks</code> request
   *             to retrieve the remaining results.
   *         </p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeExportTasksMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExportTasksMessage): any => ({
    ...obj,
  });
}

export interface ExportTasksMessage {
  /**
   * <p>A pagination token that can be used in a later <code>DescribeExportTasks</code>
   *             request. A marker is used for pagination to identify the location to begin output for
   *             the next response of <code>DescribeExportTasks</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Information about an export of a snapshot to Amazon S3.</p>
   */
  ExportTasks?: ExportTask[];
}

export namespace ExportTasksMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportTasksMessage): any => ({
    ...obj,
  });
}

export interface DescribeGlobalClustersMessage {
  /**
   * <p>
   *         The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.
   *       </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *         The maximum number of records to include in the response. If more records exist than the specified
   *         <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that
   *        you can retrieve the remaining results.
   *       </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>
   *         An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request. If
   *         this parameter is specified, the response includes only records beyond the marker, up to the value
   *         specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;
}

export namespace DescribeGlobalClustersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGlobalClustersMessage): any => ({
    ...obj,
  });
}

export interface GlobalClustersMessage {
  /**
   * <p>
   *         An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The list of global clusters returned by this request.
   *       </p>
   */
  GlobalClusters?: GlobalCluster[];
}

export namespace GlobalClustersMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlobalClustersMessage): any => ({
    ...obj,
  });
}

export interface DescribeInstallationMediaMessage {
  /**
   * <p>The installation medium ID.</p>
   */
  InstallationMediaId?: string;

  /**
   * <p>A filter that specifies one or more installation media to describe. Supported filters
   *           include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                     <code>custom-availability-zone-id</code> - Accepts custom Availability Zone (AZ)
   *                     identifiers. The results list includes information about only the custom AZs
   *                     identified by these identifiers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>engine</code> - Accepts database engines. The results list includes information about
   *               only the database engines identified by these identifiers.</p>
   *               <p>For more information about the valid engines for installation media, see <a>ImportInstallationMedia</a>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>An optional pagination token provided by a previous DescribeInstallationMedia request.
   *           If this parameter is specified, the response includes
   *           only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request.
   *           If this parameter is specified, the response includes
   *           only records beyond the marker,
   *           up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeInstallationMediaMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstallationMediaMessage): any => ({
    ...obj,
  });
}

export interface InstallationMediaMessage {
  /**
   * <p>An optional pagination token provided by a previous
   *           <a>DescribeInstallationMedia</a> request.
   *           If this parameter is specified, the response includes
   *           only records beyond the marker,
   *           up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The list of <a>InstallationMedia</a> objects for the Amazon Web Services account.</p>
   */
  InstallationMedia?: InstallationMedia[];
}

export namespace InstallationMediaMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstallationMediaMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeOptionGroupOptionsMessage {
  /**
   * <p>A required parameter. Options available for the given engine name are described.</p>
   *          <p>Valid Values:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  EngineName: string | undefined;

  /**
   * <p>If specified, filters the results to include only options for the specified major engine version.</p>
   */
  MajorEngineVersion?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *             The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeOptionGroupOptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOptionGroupOptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The minimum DB engine version required for each corresponding allowed value for an option setting.</p>
 */
export interface MinimumEngineVersionPerAllowedValue {
  /**
   * <p>The allowed value for an option setting.</p>
   */
  AllowedValue?: string;

  /**
   * <p>The minimum DB engine version required for the allowed value.</p>
   */
  MinimumEngineVersion?: string;
}

export namespace MinimumEngineVersionPerAllowedValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MinimumEngineVersionPerAllowedValue): any => ({
    ...obj,
  });
}

/**
 * <p>Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.</p>
 */
export interface OptionGroupOptionSetting {
  /**
   * <p>The name of the option group option.</p>
   */
  SettingName?: string;

  /**
   * <p>The description of the option group option.</p>
   */
  SettingDescription?: string;

  /**
   * <p>The default value for the option group option.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The DB engine specific parameter type for the option group option.</p>
   */
  ApplyType?: string;

  /**
   * <p>Indicates the acceptable values for the option group option.</p>
   */
  AllowedValues?: string;

  /**
   * <p>Boolean value where true indicates that this option group option can be changed from the default value.</p>
   */
  IsModifiable?: boolean;

  /**
   * <p>Boolean value where true indicates that a value must be specified for this option setting of the option group option.</p>
   */
  IsRequired?: boolean;

  /**
   * <p>The minimum DB engine version required for the corresponding allowed value for this option setting.</p>
   */
  MinimumEngineVersionPerAllowedValue?: MinimumEngineVersionPerAllowedValue[];
}

export namespace OptionGroupOptionSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionGroupOptionSetting): any => ({
    ...obj,
  });
}

/**
 * <p>The version for an option. Option group option versions are returned by
 *             the <code>DescribeOptionGroupOptions</code> action.</p>
 */
export interface OptionVersion {
  /**
   * <p>The version of the option.</p>
   */
  Version?: string;

  /**
   * <p>True if the version is the default version of the option, and otherwise false.</p>
   */
  IsDefault?: boolean;
}

export namespace OptionVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionVersion): any => ({
    ...obj,
  });
}

/**
 * <p>Available option.</p>
 */
export interface OptionGroupOption {
  /**
   * <p>The name of the option.</p>
   */
  Name?: string;

  /**
   * <p>The description of the option.</p>
   */
  Description?: string;

  /**
   * <p>The name of the engine that this option can be applied to.</p>
   */
  EngineName?: string;

  /**
   * <p>Indicates the major engine version that the option is available for.</p>
   */
  MajorEngineVersion?: string;

  /**
   * <p>The minimum required engine version for the option to be applied.</p>
   */
  MinimumRequiredMinorEngineVersion?: string;

  /**
   * <p>Specifies whether the option requires a port.</p>
   */
  PortRequired?: boolean;

  /**
   * <p>If the option requires a port, specifies the default port for the option.</p>
   */
  DefaultPort?: number;

  /**
   * <p>The options that are prerequisites for this option.</p>
   */
  OptionsDependedOn?: string[];

  /**
   * <p>The options that conflict with this option.</p>
   */
  OptionsConflictsWith?: string[];

  /**
   * <p>Persistent options can't be removed from an option group while DB instances are associated with the option group. If you disassociate all DB instances from the option group, your can remove the persistent option from the option group.</p>
   */
  Persistent?: boolean;

  /**
   * <p>Permanent options can never be removed from an option group. An option group containing a permanent option can't be removed from a DB instance.</p>
   */
  Permanent?: boolean;

  /**
   * <p>If true, you must enable the Auto Minor Version Upgrade setting for your DB instance
   *             before you can use this option.
   *             You can enable Auto Minor Version Upgrade when you first create your DB instance,
   *             or by modifying your DB instance later.
   *         </p>
   */
  RequiresAutoMinorEngineVersionUpgrade?: boolean;

  /**
   * <p>If true, you can only use this option with a DB instance that is in a VPC.
   *         </p>
   */
  VpcOnly?: boolean;

  /**
   * <p>If true, you can change the option to an earlier version of the option.
   *             This only applies to options that have different versions available.
   *         </p>
   */
  SupportsOptionVersionDowngrade?: boolean;

  /**
   * <p>The option settings that are available (and the default value) for each option in an option group.</p>
   */
  OptionGroupOptionSettings?: OptionGroupOptionSetting[];

  /**
   * <p>The versions that are available for the option.</p>
   */
  OptionGroupOptionVersions?: OptionVersion[];
}

export namespace OptionGroupOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionGroupOption): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface OptionGroupOptionsMessage {
  /**
   * <p>List of available option group options.</p>
   */
  OptionGroupOptions?: OptionGroupOption[];

  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace OptionGroupOptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionGroupOptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeOptionGroupsMessage {
  /**
   * <p>The name of the option group to describe. Can't be supplied together with EngineName or MajorEngineVersion.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *             An optional pagination token provided by a previous DescribeOptionGroups request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *             The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>Filters the list of option groups to only include groups associated with a specific database engine.</p>
   *          <p>Valid Values:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  EngineName?: string;

  /**
   * <p>Filters the list of option groups to only include groups associated with a specific database engine version. If specified, then EngineName must also be specified.</p>
   */
  MajorEngineVersion?: string;
}

export namespace DescribeOptionGroupsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOptionGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>List of option groups.</p>
 */
export interface OptionGroups {
  /**
   * <p>List of option groups.</p>
   */
  OptionGroupsList?: OptionGroup[];

  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace OptionGroups {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionGroups): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeOrderableDBInstanceOptionsMessage {
  /**
   * <p>The name of the engine to retrieve DB instance options for.</p>
   *          <p>Valid Values:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aurora</code> (for MySQL 5.6-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine: string | undefined;

  /**
   * <p>The engine version filter value. Specify this parameter to show only the available offerings matching the specified engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The license model filter value. Specify this parameter to show only the available offerings matching the specified license model.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The Availability Zone group associated with a Local Zone. Specify this parameter to retrieve available offerings for the Local Zones in the group.</p>
   *         <p>Omit this parameter to show the available offerings in the specified Amazon Web Services Region.</p>
   */
  AvailabilityZoneGroup?: string;

  /**
   * <p>A value that indicates whether to show only VPC or non-VPC offerings.</p>
   */
  Vpc?: boolean;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *             The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             DescribeOrderableDBInstanceOptions request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;
}

export namespace DescribeOrderableDBInstanceOptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrderableDBInstanceOptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the available processor feature information for the DB instance class of a DB instance.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">Configuring the
 *                 Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide.
 *             </i>
 *          </p>
 */
export interface AvailableProcessorFeature {
  /**
   * <p>The name of the processor feature. Valid names are <code>coreCount</code>
   *             and <code>threadsPerCore</code>.</p>
   */
  Name?: string;

  /**
   * <p>The default value for the processor feature of the DB instance class.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The allowed values for the processor feature of the DB instance class.</p>
   */
  AllowedValues?: string;
}

export namespace AvailableProcessorFeature {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailableProcessorFeature): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a list of available options for a DB instance.</p>
 *          <p>
 *           This data type is used as a response element in the <code>DescribeOrderableDBInstanceOptions</code> action.
 *         </p>
 */
export interface OrderableDBInstanceOption {
  /**
   * <p>The engine type of a DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>The engine version of a DB instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The DB instance class for a DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The license model for a DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The Availability Zone group for a DB instance.</p>
   */
  AvailabilityZoneGroup?: string;

  /**
   * <p>A list of Availability Zones for a DB instance.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>Indicates whether a DB instance is Multi-AZ capable.</p>
   */
  MultiAZCapable?: boolean;

  /**
   * <p>Indicates whether a DB instance can have a read replica.</p>
   */
  ReadReplicaCapable?: boolean;

  /**
   * <p>Indicates whether a DB instance is in a VPC.</p>
   */
  Vpc?: boolean;

  /**
   * <p>Indicates whether a DB instance supports encrypted storage.</p>
   */
  SupportsStorageEncryption?: boolean;

  /**
   * <p>Indicates the storage type for a DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>Indicates whether a DB instance supports provisioned IOPS.</p>
   */
  SupportsIops?: boolean;

  /**
   * <p>Indicates whether a DB instance supports Enhanced Monitoring at intervals from 1 to 60 seconds.</p>
   */
  SupportsEnhancedMonitoring?: boolean;

  /**
   * <p>Indicates whether a DB instance supports IAM database authentication.</p>
   */
  SupportsIAMDatabaseAuthentication?: boolean;

  /**
   * <p>True if a DB instance supports Performance Insights, otherwise false.</p>
   */
  SupportsPerformanceInsights?: boolean;

  /**
   * <p>Minimum storage size for a DB instance.</p>
   */
  MinStorageSize?: number;

  /**
   * <p>Maximum storage size for a DB instance.</p>
   */
  MaxStorageSize?: number;

  /**
   * <p>Minimum total provisioned IOPS for a DB instance.</p>
   */
  MinIopsPerDbInstance?: number;

  /**
   * <p>Maximum total provisioned IOPS for a DB instance.</p>
   */
  MaxIopsPerDbInstance?: number;

  /**
   * <p>Minimum provisioned IOPS per GiB for a DB instance.</p>
   */
  MinIopsPerGib?: number;

  /**
   * <p>Maximum provisioned IOPS per GiB for a DB instance.</p>
   */
  MaxIopsPerGib?: number;

  /**
   * <p>A list of the available processor features for the DB instance class of a DB instance.</p>
   */
  AvailableProcessorFeatures?: AvailableProcessorFeature[];

  /**
   * <p>A list of the supported DB engine modes.</p>
   */
  SupportedEngineModes?: string[];

  /**
   * <p>Whether Amazon RDS can automatically scale storage for DB instances that use the specified DB instance class.</p>
   */
  SupportsStorageAutoscaling?: boolean;

  /**
   * <p>Whether a DB instance supports Kerberos Authentication.</p>
   */
  SupportsKerberosAuthentication?: boolean;

  /**
   * <p>Whether a DB instance supports RDS on Outposts.</p>
   *         <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  OutpostCapable?: boolean;

  /**
   * <p>The list of supported modes for Database Activity Streams. Aurora PostgreSQL returns the value <code>[sync,
   *           async]</code>. Aurora MySQL and RDS for Oracle return <code>[async]</code> only. If Database Activity Streams
   *           isn't supported, the return value is an empty list.</p>
   */
  SupportedActivityStreamModes?: string[];

  /**
   * <p>A value that indicates whether you can use Aurora global databases with a specific combination of other DB engine attributes.</p>
   */
  SupportsGlobalDatabases?: boolean;
}

export namespace OrderableDBInstanceOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrderableDBInstanceOption): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Contains the result of a successful invocation of the <code>DescribeOrderableDBInstanceOptions</code> action.
 *         </p>
 */
export interface OrderableDBInstanceOptionsMessage {
  /**
   * <p>An <code>OrderableDBInstanceOption</code> structure containing information about orderable options for the DB instance.</p>
   */
  OrderableDBInstanceOptions?: OrderableDBInstanceOption[];

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             OrderableDBInstanceOptions request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;
}

export namespace OrderableDBInstanceOptionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrderableDBInstanceOptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribePendingMaintenanceActionsMessage {
  /**
   * <p>The ARN of a resource to return pending maintenance actions for.</p>
   */
  ResourceIdentifier?: string;

  /**
   * <p>A filter that specifies one or more resources to return pending maintenance actions for.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs). The results list will only include pending maintenance
   *               actions for the DB clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-instance-id</code> - Accepts DB instance identifiers and DB
   *             instance ARNs. The results list will only include pending maintenance
   *             actions for the DB instances identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Filter[];

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             <code>DescribePendingMaintenanceActions</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to a number of records specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *             The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribePendingMaintenanceActionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePendingMaintenanceActionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Data returned from the <b>DescribePendingMaintenanceActions</b> action.</p>
 */
export interface PendingMaintenanceActionsMessage {
  /**
   * <p>A list of the pending maintenance actions for the resource.</p>
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[];

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             <code>DescribePendingMaintenanceActions</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to a number of records specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace PendingMaintenanceActionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingMaintenanceActionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReservedDBInstancesMessage {
  /**
   * <p>The reserved DB instance identifier filter value. Specify this parameter to show only the reservation that matches the specified reservation ID.</p>
   */
  ReservedDBInstanceId?: string;

  /**
   * <p>The offering identifier filter value. Specify this parameter to show only purchased reservations matching the specified offering identifier.</p>
   */
  ReservedDBInstancesOfferingId?: string;

  /**
   * <p>The DB instance class filter value. Specify this parameter to show only those reservations matching the specified DB instances class.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration.</p>
   *          <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code>
   *          </p>
   */
  Duration?: string;

  /**
   * <p>The product description filter value. Specify this parameter to show only those reservations matching the specified product description.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type.</p>
   *          <p>Valid Values: <code>"Partial Upfront" | "All Upfront" | "No Upfront" </code>
   *          </p>
   */
  OfferingType?: string;

  /**
   * <p>A value that indicates whether to show only those reservations that support Multi-AZ.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The lease identifier filter value. Specify this parameter to show only the reservation that matches the specified lease ID.</p>
   *          <note>
   *             <p>Amazon Web Services Support might request the lease ID for an issue related to a reserved DB instance.</p>
   *          </note>
   */
  LeaseId?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *     The maximum number of records to include in the response.
   *     If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is
   *           included in the response so you can retrieve the remaining results.
   *     </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;
}

export namespace DescribeReservedDBInstancesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservedDBInstancesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             This data type is used as a response element in the
 *             <code>DescribeReservedDBInstances</code> and <code>DescribeReservedDBInstancesOfferings</code> actions.
 *         </p>
 */
export interface RecurringCharge {
  /**
   * <p>The amount of the recurring charge.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * <p>The frequency of the recurring charge.</p>
   */
  RecurringChargeFrequency?: string;
}

export namespace RecurringCharge {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecurringCharge): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             This data type is used as a response element in the
 *             <code>DescribeReservedDBInstances</code> and
 *             <code>PurchaseReservedDBInstancesOffering</code> actions.
 *         </p>
 */
export interface ReservedDBInstance {
  /**
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedDBInstanceId?: string;

  /**
   * <p>The offering identifier.</p>
   */
  ReservedDBInstancesOfferingId?: string;

  /**
   * <p>The DB instance class for the reserved DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The time the reservation started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The duration of the reservation in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed price charged for this reserved DB instance.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The hourly price charged for this reserved DB instance.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the reserved DB instance.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The number of reserved DB instances.</p>
   */
  DBInstanceCount?: number;

  /**
   * <p>The description of the reserved DB instance.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The offering type of this reserved DB instance.</p>
   */
  OfferingType?: string;

  /**
   * <p>Indicates if the reservation applies to Multi-AZ deployments.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The state of the reserved DB instance.</p>
   */
  State?: string;

  /**
   * <p>The recurring price charged to run this reserved DB instance.</p>
   */
  RecurringCharges?: RecurringCharge[];

  /**
   * <p>The Amazon Resource Name (ARN) for the reserved DB instance.</p>
   */
  ReservedDBInstanceArn?: string;

  /**
   * <p>The unique identifier for the lease associated with the reserved DB instance.</p>
   *          <note>
   *             <p>Amazon Web Services Support might request the lease ID for an issue related to a reserved DB instance.</p>
   *          </note>
   */
  LeaseId?: string;
}

export namespace ReservedDBInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedDBInstance): any => ({
    ...obj,
  });
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeReservedDBInstances</code> action.
 *         </p>
 */
export interface ReservedDBInstanceMessage {
  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;

  /**
   * <p>A list of reserved DB instances.</p>
   */
  ReservedDBInstances?: ReservedDBInstance[];
}

export namespace ReservedDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedDBInstanceMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The specified reserved DB Instance not found.</p>
 */
export interface ReservedDBInstanceNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ReservedDBInstanceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedDBInstanceNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedDBInstanceNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReservedDBInstancesOfferingsMessage {
  /**
   * <p>The offering identifier filter value. Specify this parameter to show only the available offering that matches the specified reservation identifier.</p>
   *          <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code>
   *          </p>
   */
  ReservedDBInstancesOfferingId?: string;

  /**
   * <p>The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration.</p>
   *          <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code>
   *          </p>
   */
  Duration?: string;

  /**
   * <p>Product description filter value. Specify this parameter to show only the available offerings that contain the specified product description.</p>
   *          <note>
   *             <p>The results show offerings that partially match the filter value.</p>
   *          </note>
   */
  ProductDescription?: string;

  /**
   * <p>The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type.</p>
   *          <p>Valid Values: <code>"Partial Upfront" | "All Upfront" | "No Upfront" </code>
   *          </p>
   */
  OfferingType?: string;

  /**
   * <p>A value that indicates whether to show only those reservations that support Multi-AZ.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];

  /**
   * <p>
   *     The maximum number of records to include in the response.
   *     If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is
   *     included in the response so you can retrieve the remaining results.
   *     </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;
}

export namespace DescribeReservedDBInstancesOfferingsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeReservedDBInstancesOfferingsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             This data type is used as a response element in the <code>DescribeReservedDBInstancesOfferings</code> action.
 *         </p>
 */
export interface ReservedDBInstancesOffering {
  /**
   * <p>The offering identifier.</p>
   */
  ReservedDBInstancesOfferingId?: string;

  /**
   * <p>The DB instance class for the reserved DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The duration of the offering in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed price charged for this offering.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The hourly price charged for this offering.</p>
   */
  UsagePrice?: number;

  /**
   * <p>The currency code for the reserved DB instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The database engine used by the offering.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The offering type.</p>
   */
  OfferingType?: string;

  /**
   * <p>Indicates if the offering applies to Multi-AZ deployments.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The recurring price charged to run this reserved DB instance.</p>
   */
  RecurringCharges?: RecurringCharge[];
}

export namespace ReservedDBInstancesOffering {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedDBInstancesOffering): any => ({
    ...obj,
  });
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeReservedDBInstancesOfferings</code> action.
 *         </p>
 */
export interface ReservedDBInstancesOfferingMessage {
  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;

  /**
   * <p>A list of reserved DB instance offerings.</p>
   */
  ReservedDBInstancesOfferings?: ReservedDBInstancesOffering[];
}

export namespace ReservedDBInstancesOfferingMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedDBInstancesOfferingMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Specified offering does not exist.</p>
 */
export interface ReservedDBInstancesOfferingNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ReservedDBInstancesOfferingNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedDBInstancesOfferingNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedDBInstancesOfferingNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeSourceRegionsMessage {
  /**
   * <p>The source Amazon Web Services Region name. For example, <code>us-east-1</code>.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must specify a valid Amazon Web Services Region name.</p>
   *             </li>
   *          </ul>
   */
  RegionName?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a marker is
   *             included in the response so you can retrieve the remaining results. </p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeSourceRegions</code> request. If this parameter is specified, the response
   *             includes only records beyond the marker, up to the value specified by
   *             <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];
}

export namespace DescribeSourceRegionsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSourceRegionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an Amazon Web Services Region name as the result of a successful call to the <code>DescribeSourceRegions</code> action.</p>
 */
export interface SourceRegion {
  /**
   * <p>The name of the source Amazon Web Services Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The endpoint for the source Amazon Web Services Region endpoint.</p>
   */
  Endpoint?: string;

  /**
   * <p>The status of the source Amazon Web Services Region.</p>
   */
  Status?: string;

  /**
   * <p>Whether the source Amazon Web Services Region supports replicating automated backups to the current Amazon Web Services Region.</p>
   */
  SupportsDBInstanceAutomatedBackupsReplication?: boolean;
}

export namespace SourceRegion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceRegion): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeSourceRegions</code> action.</p>
 */
export interface SourceRegionMessage {
  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>A list of SourceRegion instances that contains each source Amazon Web Services Region that the
   *             current Amazon Web Services Region can get a read replica or a DB snapshot from.</p>
   */
  SourceRegions?: SourceRegion[];
}

export namespace SourceRegionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceRegionMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeValidDBInstanceModificationsMessage {
  /**
   * <p>The customer identifier or the ARN of your DB instance.
   *         </p>
   */
  DBInstanceIdentifier: string | undefined;
}

export namespace DescribeValidDBInstanceModificationsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeValidDBInstanceModificationsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>A range of double values.</p>
 */
export interface DoubleRange {
  /**
   * <p>The minimum value in the range.</p>
   */
  From?: number;

  /**
   * <p>The maximum value in the range.</p>
   */
  To?: number;
}

export namespace DoubleRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DoubleRange): any => ({
    ...obj,
  });
}

/**
 * <p>A range of integer values.</p>
 */
export interface Range {
  /**
   * <p>The minimum value in the range.</p>
   */
  From?: number;

  /**
   * <p>The maximum value in the range.</p>
   */
  To?: number;

  /**
   * <p>The step value for the range.
   *             For example, if you have a range of 5,000 to 10,000,
   *             with a step value of 1,000,
   *             the valid values start at 5,000 and step up by 1,000.
   *             Even though 7,500 is within the range,
   *             it isn't a valid value for the range.
   *             The valid values are 5,000, 6,000, 7,000, 8,000...
   *         </p>
   */
  Step?: number;
}

export namespace Range {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Range): any => ({
    ...obj,
  });
}

/**
 * <p>Information about valid modifications that you can make to your DB instance.
 *             Contains the result of a successful call to the
 *             <code>DescribeValidDBInstanceModifications</code> action.
 *         </p>
 */
export interface ValidStorageOptions {
  /**
   * <p>The valid storage types for your DB instance.
   *             For example, gp2, io1.
   *         </p>
   */
  StorageType?: string;

  /**
   * <p>The valid range of storage in gibibytes (GiB).
   *             For example, 100 to 16384.
   *         </p>
   */
  StorageSize?: Range[];

  /**
   * <p>The valid range of provisioned IOPS.
   *             For example, 1000-20000.
   *         </p>
   */
  ProvisionedIops?: Range[];

  /**
   * <p>The valid range of Provisioned IOPS to gibibytes of storage multiplier.
   *             For example, 3-10,
   *             which means that provisioned IOPS can be between 3 and 10 times storage.
   *         </p>
   */
  IopsToStorageRatio?: DoubleRange[];

  /**
   * <p>Whether or not Amazon RDS can automatically scale storage for DB instances that use the new instance class.</p>
   */
  SupportsStorageAutoscaling?: boolean;
}

export namespace ValidStorageOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidStorageOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Information about valid modifications that you can make to your DB instance.
 *             Contains the result of a successful call to the
 *             <code>DescribeValidDBInstanceModifications</code> action.
 *             You can use this information when you call
 *             <code>ModifyDBInstance</code>.
 *         </p>
 */
export interface ValidDBInstanceModificationsMessage {
  /**
   * <p>Valid storage options for your DB instance.
   *         </p>
   */
  Storage?: ValidStorageOptions[];

  /**
   * <p>Valid processor features for your DB instance.
   *         </p>
   */
  ValidProcessorFeatures?: AvailableProcessorFeature[];
}

export namespace ValidDBInstanceModificationsMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidDBInstanceModificationsMessage): any => ({
    ...obj,
  });
}

export interface DescribeValidDBInstanceModificationsResult {
  /**
   * <p>Information about valid modifications that you can make to your DB instance.
   *             Contains the result of a successful call to the
   *             <code>DescribeValidDBInstanceModifications</code> action.
   *             You can use this information when you call
   *             <code>ModifyDBInstance</code>.
   *         </p>
   */
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage;
}

export namespace DescribeValidDBInstanceModificationsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeValidDBInstanceModificationsResult): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>LogFileName</code> doesn't refer to an existing DB log file.</p>
 */
export interface DBLogFileNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBLogFileNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBLogFileNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBLogFileNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>This data type is used as a response element to <code>DownloadDBLogFilePortion</code>.</p>
 */
export interface DownloadDBLogFilePortionDetails {
  /**
   * <p>Entries from the specified log file.</p>
   */
  LogFileData?: string;

  /**
   * <p>A pagination token that can be used in a later DownloadDBLogFilePortion request.</p>
   */
  Marker?: string;

  /**
   * <p>Boolean value that if true, indicates there is more data to be downloaded.</p>
   */
  AdditionalDataPending?: boolean;
}

export namespace DownloadDBLogFilePortionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DownloadDBLogFilePortionDetails): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DownloadDBLogFilePortionMessage {
  /**
   * <p>The customer-assigned name of the DB instance that contains the log files you want to list.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The name of the log file to be downloaded.</p>
   */
  LogFileName: string | undefined;

  /**
   * <p>The pagination token provided in the previous request or "0". If the Marker parameter is specified the response includes only records beyond the marker until the end of the file or up to NumberOfLines.</p>
   */
  Marker?: string;

  /**
   * <p>The number of lines to download. If the number of lines specified results in a file over 1 MB in size, the file is truncated at 1 MB in size.</p>
   *          <p>If the NumberOfLines parameter is specified, then the block of lines returned can be from the beginning
   *             or the end of the log file, depending on the value of the Marker parameter.</p>
   *             <ul>
   *             <li>
   *                <p>If neither Marker or NumberOfLines are specified, the entire log file is returned up to a
   *               maximum of 10000 lines, starting with the most recent log entries first.</p>
   *             </li>
   *             <li>
   *                <p>If
   *               NumberOfLines is specified and Marker isn't specified, then the most recent lines from the end
   *                     of the log file are returned.</p>
   *             </li>
   *             <li>
   *                <p>If Marker is specified as "0", then the specified
   *                       number of lines from the beginning of the log file are returned.</p>
   *             </li>
   *             <li>
   *                <p>You can
   *                         download the log file in blocks of lines by specifying the size of the block using
   *                     the NumberOfLines parameter, and by specifying a value of "0" for the Marker parameter in your
   *                     first request. Include the Marker value returned in the response as the Marker value for the next
   *                     request, continuing until the AdditionalDataPending response element returns false.</p>
   *             </li>
   *          </ul>
   */
  NumberOfLines?: number;
}

export namespace DownloadDBLogFilePortionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DownloadDBLogFilePortionMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface FailoverDBClusterMessage {
  /**
   * <p>A DB cluster identifier to force a failover for. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the instance to promote to the primary instance.</p>
   *         <p>You must specify the instance identifier for an Aurora Replica in the DB cluster.
   *         For example, <code>mydbcluster-replica1</code>.</p>
   */
  TargetDBInstanceIdentifier?: string;
}

export namespace FailoverDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailoverDBClusterMessage): any => ({
    ...obj,
  });
}

export interface FailoverDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace FailoverDBClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailoverDBClusterResult): any => ({
    ...obj,
  });
}

export interface FailoverGlobalClusterMessage {
  /**
   * <p>Identifier of the Aurora global database (<a>GlobalCluster</a>)
   *     that should be failed over. The identifier is the unique key assigned by
   *     the user when the Aurora global database was created. In other words,
   *     it's the name of the Aurora global database that you want to fail over. </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing
   *       <a>GlobalCluster</a> (Aurora global database).</p>
   *             </li>
   *          </ul>
   */
  GlobalClusterIdentifier: string | undefined;

  /**
   * <p>Identifier of the secondary Aurora DB cluster that you want to promote to primary for the Aurora
   *        global database (<a>GlobalCluster</a>.) Use the Amazon Resource Name (ARN) for the identifier so that
   *        Aurora can locate the cluster in its Amazon Web Services Region.
   *  </p>
   */
  TargetDbClusterIdentifier: string | undefined;
}

export namespace FailoverGlobalClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailoverGlobalClusterMessage): any => ({
    ...obj,
  });
}

export interface FailoverGlobalClusterResult {
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace FailoverGlobalClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailoverGlobalClusterResult): any => ({
    ...obj,
  });
}

export interface ImportInstallationMediaMessage {
  /**
   * <p>The identifier of the custom Availability Zone (AZ) to import the installation media to.</p>
   */
  CustomAvailabilityZoneId: string | undefined;

  /**
   * <p>The name of the database engine to be used for this instance.
   *       </p>
   *
   *          <p>The list only includes supported DB engines that require an on-premises
   *           customer provided license.
   *       </p>
   *
   *          <p>Valid Values:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use.</p>
   *          <p>For a list of valid engine versions, call <a>DescribeDBEngineVersions</a>.</p>
   *          <p>The following are the database engines and links to information about the major and minor
   *           versions. The list only includes DB engines that require an on-premises
   *           customer provided license.</p>
   *
   *          <p>
   *             <b>Microsoft SQL Server</b>
   *          </p>
   *
   *          <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.VersionSupport">
   *           Microsoft SQL Server Versions on Amazon RDS</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EngineVersion: string | undefined;

  /**
   * <p>The path to the installation medium for the specified DB engine.</p>
   *          <p>Example: <code>SQLServerISO/en_sql_server_2016_enterprise_x64_dvd_8701793.iso</code>
   *          </p>
   */
  EngineInstallationMediaPath: string | undefined;

  /**
   * <p>The path to the installation medium for the operating system associated with the specified DB engine.</p>
   *         <p>Example: <code>WindowsISO/en_windows_server_2016_x64_dvd_9327751.iso</code>
   *          </p>
   */
  OSInstallationMediaPath: string | undefined;
}

export namespace ImportInstallationMediaMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportInstallationMediaMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The specified installation medium has already been imported.</p>
 */
export interface InstallationMediaAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "InstallationMediaAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace InstallationMediaAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstallationMediaAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ListTagsForResourceMessage {
  /**
   * <p>The Amazon RDS resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about
   *             creating an ARN,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Filter[];
}

export namespace ListTagsForResourceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface TagListMessage {
  /**
   * <p>List of tags returned by the ListTagsForResource operation.</p>
   */
  TagList?: Tag[];
}

export namespace TagListMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagListMessage): any => ({
    ...obj,
  });
}

export interface ModifyCertificatesMessage {
  /**
   * <p>The new default certificate identifier to override the current one with.</p>
   *          <p>To determine the valid values, use the <code>describe-certificates</code> CLI
   *             command or the <code>DescribeCertificates</code> API operation.</p>
   */
  CertificateIdentifier?: string;

  /**
   * <p>A value that indicates whether to remove the override for the default certificate.
   *             If the override is removed, the default certificate is the system
   *             default.</p>
   */
  RemoveCustomerOverride?: boolean;
}

export namespace ModifyCertificatesMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyCertificatesMessage): any => ({
    ...obj,
  });
}

export interface ModifyCertificatesResult {
  /**
   * <p>A CA certificate for an Amazon Web Services account.</p>
   */
  Certificate?: Certificate;
}

export namespace ModifyCertificatesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyCertificatesResult): any => ({
    ...obj,
  });
}

export interface DBClusterCapacityInfo {
  /**
   * <p>A user-supplied DB cluster identifier. This identifier is the unique key that
   *             identifies a DB cluster. </p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A value that specifies the capacity that the DB cluster scales to next.</p>
   */
  PendingCapacity?: number;

  /**
   * <p>The current capacity of the DB cluster.</p>
   */
  CurrentCapacity?: number;

  /**
   * <p>The number of seconds before a call to <code>ModifyCurrentDBClusterCapacity</code> times out.</p>
   */
  SecondsBeforeTimeout?: number;

  /**
   * <p>The timeout action of a call to <code>ModifyCurrentDBClusterCapacity</code>, either
   *             <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   */
  TimeoutAction?: string;
}

export namespace DBClusterCapacityInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterCapacityInfo): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>Capacity</code> isn't a valid Aurora Serverless DB cluster
 *             capacity. Valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>,
 *             <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
 */
export interface InvalidDBClusterCapacityFault extends __SmithyException, $MetadataBearer {
  name: "InvalidDBClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBClusterCapacityFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidDBClusterCapacityFault): any => ({
    ...obj,
  });
}

export interface ModifyCurrentDBClusterCapacityMessage {
  /**
   * <p>The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DB cluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The DB cluster capacity.</p>
   *         <p>When you change the capacity of a paused Aurora Serverless DB cluster, it automatically resumes.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.</p>
   *             </li>
   *          </ul>
   */
  Capacity?: number;

  /**
   * <p>The amount of time, in seconds, that Aurora Serverless tries to find a scaling point
   *             to perform seamless scaling before enforcing the timeout action. The default is
   *             300.</p>
   *         <p>Specify a value between 10 and 600 seconds.</p>
   */
  SecondsBeforeTimeout?: number;

  /**
   * <p>The action to take when the timeout is reached, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   *         <p>
   *             <code>ForceApplyCapacityChange</code>, the default, sets the capacity to the specified value as soon as possible.</p>
   *         <p>
   *             <code>RollbackCapacityChange</code> ignores the capacity change if a scaling point isn't found in the timeout period.</p>
   */
  TimeoutAction?: string;
}

export namespace ModifyCurrentDBClusterCapacityMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyCurrentDBClusterCapacityMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration setting for the log types to be enabled for export to CloudWatch
 *             Logs for a specific DB instance or DB cluster.</p>
 *         <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported
 *             (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB
 *             engine being used.</p>
 *         <p>For more information about exporting CloudWatch Logs for Amazon RDS DB instances, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p>
 *         <p>For more information about exporting CloudWatch Logs for Amazon Aurora DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
 */
export interface CloudwatchLogsExportConfiguration {
  /**
   * <p>The list of log types to enable.</p>
   */
  EnableLogTypes?: string[];

  /**
   * <p>The list of log types to disable.</p>
   */
  DisableLogTypes?: string[];
}

export namespace CloudwatchLogsExportConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudwatchLogsExportConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyDBClusterMessage {
  /**
   * <p>The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive.</p>
   *          <p>Constraints: This identifier must match the identifier of an existing DB
   *             cluster.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster2</code>
   *          </p>
   */
  NewDBClusterIdentifier?: string;

  /**
   * <p>A value that indicates whether the modifications in this request and
   *       any pending modifications are asynchronously applied
   *       as soon as possible, regardless of the
   *       <code>PreferredMaintenanceWindow</code> setting for the DB cluster.
   *       If this parameter is disabled, changes to the
   *       DB cluster are applied during the next maintenance window.</p>
   *          <p>The <code>ApplyImmediately</code> parameter only affects the <code>EnableIAMDatabaseAuthentication</code>,
   *       <code>MasterUserPassword</code>, and <code>NewDBClusterIdentifier</code> values. If the <code>ApplyImmediately</code>
   *       parameter is disabled, then changes to the <code>EnableIAMDatabaseAuthentication</code>, <code>MasterUserPassword</code>,
   *       and <code>NewDBClusterIdentifier</code> values are applied during the next maintenance window. All other changes are
   *       applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p>
   *          <p>By default, this parameter is disabled.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The name of the DB cluster parameter group to use for the DB cluster.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A list of VPC security groups that the DB cluster will belong to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The port number on which the DB cluster accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>The new password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>A value that indicates that the DB cluster should be associated with the specified option group.
   *             Changing this parameter doesn't result in an outage except in the following case, and the change
   *             is applied during the next maintenance window
   *             unless the <code>ApplyImmediately</code> is enabled for this request. If the parameter change results in an option group that
   *             enables OEM, this change can cause a brief (sub-second) period during which new connections
   *             are rejected but existing connections are not interrupted.
   *         </p>
   *          <p>Permanent options can't be removed from an option group. The option group can't be removed from a DB cluster once it is associated with a DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The daily time range during which automated backups are created
   *             if automated backups are enabled,
   *             using the <code>BackupRetentionPeriod</code> parameter.
   *         </p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region.
   *             To view the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow">
   *                 Backup window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region, occurring on a random day of the
   *             week. To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <note>
   *             <p>Currently, Backtrack is only supported for Aurora MySQL DB clusters.</p>
   *         </note>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * <p>The version number of the database engine to which you want to upgrade.
   *             Changing this parameter results in an outage. The change is applied during
   *             the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p>
   *         <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether major version upgrades are allowed.</p>
   *          <p>Constraints: You must allow major version upgrades when specifying a value for the
   *                 <code>EngineVersion</code> parameter that is a different major version than the DB
   *             cluster's current version.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * <p>The name of the DB parameter group to apply to all instances of the DB cluster. </p>
   *          <note>
   *             <p>When you apply a parameter group using the <code>DBInstanceParameterGroupName</code> parameter, the DB
   *                 cluster isn't rebooted automatically. Also, parameter changes aren't
   *                 applied during the next maintenance window but instead are applied immediately.</p>
   *          </note>
   *          <p>Default: The existing name setting</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>The DB parameter group must be in the same DB parameter group family as this DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>The <code>DBInstanceParameterGroupName</code> parameter is only valid in combination with
   *               the <code>AllowMajorVersionUpgrade</code> parameter.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceParameterGroupName?: string;

  /**
   * <p>The Active Directory directory ID to move the DB cluster to.
   *           Specify <code>none</code> to remove the cluster from its current domain.
   *           The domain must be created prior to this operation.
   *       </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html">Kerberos Authentication</a>
   *             in the <i>Amazon Aurora User Guide</i>.
   *       </p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>The scaling properties of the DB cluster. You can only modify scaling properties for DB clusters in <code>serverless</code> DB engine mode.</p>
   */
  ScalingConfiguration?: ScalingConfiguration;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint
   *             is disabled.</p>
   *         <p>When enabled, the HTTP endpoint provides a connectionless web service API for running
   *             SQL queries on the Aurora Serverless DB cluster. You can also query your database
   *             from inside the RDS console with the query editor.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableHttpEndpoint?: boolean;

  /**
   * <p>A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.
   *             The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>A value that indicates whether to enable this DB cluster to forward write operations to the primary cluster of an
   *       Aurora global database (<a>GlobalCluster</a>). By default, write operations are not allowed on Aurora DB clusters that
   *       are secondary clusters in an Aurora global database.</p>
   *          <p>You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter
   *       enabled, a secondary cluster can forward writes to the current primary cluster and the resulting changes are replicated back to
   *       this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is
   *       demoted by the <a>FailoverGlobalCluster</a> API operation, but it does nothing until then.
   *     </p>
   */
  EnableGlobalWriteForwarding?: boolean;
}

export namespace ModifyDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBClusterMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace ModifyDBClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBClusterResult): any => ({
    ...obj,
  });
}

export interface ModifyDBClusterEndpointMessage {
  /**
   * <p>The identifier of the endpoint to modify. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.</p>
   */
  EndpointType?: string;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: string[];

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *        All other eligible instances are reachable through the custom endpoint.
   *        Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: string[];
}

export namespace ModifyDBClusterEndpointMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBClusterEndpointMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DBClusterParameterGroupNameMessage {
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lowercase string.</p>
   *          </note>
   */
  DBClusterParameterGroupName?: string;
}

export namespace DBClusterParameterGroupNameMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterParameterGroupNameMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group to modify.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A list of parameters in the DB cluster parameter group to modify.</p>
   *          <p>Valid Values (for the application method): <code>immediate | pending-reboot</code>
   *          </p>
   *          <note>
   *             <p>You can use the <code>immediate</code> value with dynamic parameters only. You can use the
   *               <code>pending-reboot</code> value for both dynamic and static parameters.</p>
   *             <p>When the application method is <code>immediate</code>, changes to dynamic parameters are applied immediately
   *           to the DB clusters associated with the parameter group. When the application method is <code>pending-reboot</code>,
   *           changes to dynamic and static parameters are applied after a reboot without failover to the DB clusters associated with the
   *           parameter group.</p>
   *          </note>
   */
  Parameters: Parameter[] | undefined;
}

export namespace ModifyDBClusterParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyDBClusterSnapshotAttributeMessage {
  /**
   * <p>The identifier for the DB cluster snapshot to modify the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster snapshot attribute to modify.</p>
   *         <p>To manage authorization for other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot,
   *             set this value to <code>restore</code>.</p>
   *         <note>
   *             <p>To view the list of attributes available to modify, use the
   *                 <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
   *         </note>
   */
  AttributeName: string | undefined;

  /**
   * <p>A list of DB cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p>
   *         <p>To authorize other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon Web Services account
   *             IDs, or <code>all</code> to make the manual DB cluster snapshot restorable by
   *             any Amazon Web Services account. Do not add the <code>all</code> value for any
   *             manual DB cluster snapshots that contain private information that you don't want available
   *             to all Amazon Web Services accounts.</p>
   */
  ValuesToAdd?: string[];

  /**
   * <p>A list of DB cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p>
   *         <p>To remove authorization for other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this list to include
   *             one or more Amazon Web Services account
   *             identifiers, or <code>all</code> to remove authorization for any Amazon Web Services account to copy or
   *             restore the DB cluster snapshot. If you specify <code>all</code>, an Amazon Web Services account whose account ID is
   *             explicitly added to the <code>restore</code> attribute
   *             can still copy or restore a manual DB cluster snapshot.</p>
   */
  ValuesToRemove?: string[];
}

export namespace ModifyDBClusterSnapshotAttributeMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBClusterSnapshotAttributeMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBClusterSnapshotAttributeResult {
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code>
   *             API action.</p>
   *         <p>Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts
   *             to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code>
   *             API action.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

export namespace ModifyDBClusterSnapshotAttributeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBClusterSnapshotAttributeResult): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
 */
export interface SharedSnapshotQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "SharedSnapshotQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SharedSnapshotQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SharedSnapshotQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The DB upgrade failed because a resource the DB depends on can't be
 *             modified.</p>
 */
export interface DBUpgradeDependencyFailureFault extends __SmithyException, $MetadataBearer {
  name: "DBUpgradeDependencyFailureFault";
  $fault: "client";
  message?: string;
}

export namespace DBUpgradeDependencyFailureFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBUpgradeDependencyFailureFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyDBInstanceMessage {
  /**
   * <p>The DB instance identifier. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The new amount of storage in gibibytes (GiB) to allocate for the DB instance.
   *       </p>
   *
   *          <p>For MariaDB, MySQL, Oracle, and PostgreSQL,
   *           the value supplied must be at least 10% greater than the current value.
   *           Values that are not at least 10% greater than the existing value are rounded up
   *           so that they are 10% greater than the current value.
   *       </p>
   *
   *          <p>For the valid values for allocated storage for each engine,
   *           see <code>CreateDBInstance</code>.
   *       </p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The new compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>.
   *           Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.
   *           For the full list of DB instance classes,
   *           and availability for your engine, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>If you modify the DB instance class, an outage occurs during the change.
   *         The change is applied during the next maintenance window,
   *         unless <code>ApplyImmediately</code> is enabled for this request.
   *         </p>
   *          <p>Default: Uses existing setting</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The new DB subnet group for the DB instance.
   *           You can use this parameter to move your DB instance to a different VPC.
   *
   *           If your DB instance isn't in a VPC, you can also use this parameter to move your DB instance into a VPC.
   *           For more information, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html#USER_VPC.Non-VPC2VPC">Working with a DB instance in a VPC</a>
   *           in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Changing the subnet group causes an outage during the change.
   *         The change is applied during the next maintenance window,
   *         unless you enable <code>ApplyImmediately</code>.
   *     </p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetGroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match existing DBSecurityGroups.</p>
   *             </li>
   *          </ul>
   */
  DBSecurityGroups?: string[];

  /**
   * <p>A list of EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible.</p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. The associated list of EC2 VPC security groups is managed by
   *           the DB cluster. For more information, see <code>ModifyDBCluster</code>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match existing VpcSecurityGroupIds.</p>
   *             </li>
   *          </ul>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>A value that indicates whether the modifications in this request and
   *         any pending modifications are asynchronously applied
   *         as soon as possible, regardless of the
   *         <code>PreferredMaintenanceWindow</code> setting for the DB instance. By default, this parameter is
   *           disabled.
   *         </p>
   *          <p>
   *         If this parameter is disabled, changes to the
   *         DB instance are applied during the next maintenance window. Some parameter changes can cause an outage
   *         and are applied on the next call to <a>RebootDBInstance</a>, or the next failure reboot.
   *         Review the table of parameters in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html">Modifying a DB Instance</a>
   *           in the <i>Amazon RDS User Guide.</i> to see the impact of enabling
   *           or disabling <code>ApplyImmediately</code> for each modified parameter and to determine when the changes are applied.
   *         </p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The new password for the master user. The password can include any printable ASCII character except "/", """, or "@".</p>
   *          <p>
   *         Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
   *         Between the time of the request and the completion of the request,
   *         the <code>MasterUserPassword</code> element exists in the
   *         <code>PendingModifiedValues</code> element of the operation response.
   *         </p>
   *
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The password for the master user is managed by the DB cluster. For
   *             more information, see <code>ModifyDBCluster</code>.
   *         </p>
   *
   *          <p>Default: Uses existing setting</p>
   *
   *          <p>
   *             <b>MariaDB</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   *
   *          <p>
   *             <b>Microsoft SQL Server</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 128 characters.</p>
   *
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   *
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 30 characters.</p>
   *
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 128 characters.</p>
   *
   *          <note>
   *             <p>Amazon RDS API actions never return the password,
   *               so this action provides a way to regain access to a primary instance user if the password is lost.
   *               This includes restoring privileges that might have been accidentally revoked.
   *           </p>
   *          </note>
   */
  MasterUserPassword?: string;

  /**
   * <p>The name of the DB parameter group to apply to the DB instance. Changing this
   *             setting doesn't result in an outage. The parameter group name itself is changed
   *             immediately, but the actual parameter changes are not applied until you reboot the
   *             instance without failover. In this case, the DB instance isn't rebooted automatically and the
   *             parameter changes isn't applied during the next maintenance window.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Constraints: The DB parameter group must be in the same DB parameter group family as this DB instance.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p>
   *         <note>
   *             <p>Enabling and disabling backups can result in a brief I/O suspension that lasts from a few seconds to a few minutes, depending on the size and class of your DB instance.</p>
   *         </note>
   *         <p>These changes are applied during the next maintenance window unless the <code>ApplyImmediately</code> parameter is enabled
   *             for this request. If you change the parameter from one non-zero value to another non-zero value, the change is asynchronously
   *             applied as soon as possible.</p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The retention period for automated backups is managed by the DB
   *             cluster. For more information, see <code>ModifyDBCluster</code>.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 0 to 35</p>
   *             </li>
   *             <li>
   *                <p>Can be specified for a MySQL read replica only if the source is running MySQL 5.6 or
   *                     later</p>
   *             </li>
   *             <li>
   *                <p>Can be specified for a PostgreSQL read replica only if the source is running PostgreSQL
   *                     9.3.5</p>
   *             </li>
   *             <li>
   *                <p>Can't be set to 0 if the DB instance is a source to read replicas</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>
   *         The daily time range during which automated backups are created
   *         if automated backups are enabled,
   *         as determined by the <code>BackupRetentionPeriod</code> parameter.
   *         Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
   *         The default is a 30-minute window selected at random from an
   *         8-hour block of time for each Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">Backup window</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The daily time range for creating automated backups is managed by
   *             the DB cluster. For more information, see <code>ModifyDBCluster</code>.</p>
   *
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format hh24:mi-hh24:mi</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Time Coordinated (UTC)</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range (in UTC) during which system maintenance can occur, which
   *             might result in an outage. Changing this parameter doesn't result in an outage, except
   *             in the following situation, and the change is asynchronously applied as soon as
   *             possible. If there are pending actions that cause a reboot, and the maintenance window
   *             is changed to include the current time, then changing this parameter will cause a reboot
   *             of the DB instance. If moving this window to the current time, there must be at least 30
   *             minutes between the current time and end of the window to ensure pending changes are
   *             applied.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Format: ddd:hh24:mi-ddd:hh24:mi</p>
   *          <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *          <p>Constraints: Must be at least 30 minutes</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment.
   *     Changing this parameter doesn't result in an outage and the change
   *     is applied during the next maintenance window
   *     unless the <code>ApplyImmediately</code> parameter is
   *         enabled for this request.
   *     </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>
   *     The version number of the database engine to upgrade to.
   *     Changing this parameter results in an outage and the change
   *     is applied during the next maintenance window
   *     unless the <code>ApplyImmediately</code> parameter is enabled for this request.
   *     </p>
   *          <p>For major version upgrades, if a nondefault DB parameter group is currently in use, a
   *             new DB parameter group in the DB parameter group family for the new engine version must
   *             be specified. The new DB parameter group can be the default for that DB parameter group
   *             family.</p>
   *          <p>If you specify only a major version, Amazon RDS will update the DB instance to the
   *           default minor version if the current minor version is lower.
   *           For information about valid engine versions, see <code>CreateDBInstance</code>,
   *           or call <code>DescribeDBEngineVersions</code>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.</p>
   *          <p>Constraints: Major version upgrades must be allowed when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * <p>
   *     A value that indicates whether minor version upgrades are applied automatically
   *     to the DB instance during the maintenance window.
   *     Changing this parameter doesn't result in an outage except in the following case
   *     and the change is asynchronously applied as soon as possible.
   *     An outage results if this parameter is enabled during the maintenance window,
   *     and a newer minor version is available, and RDS has enabled auto patching for that engine version.
   *     </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The license model for the DB instance.</p>
   *         <p>Valid values: <code>license-included</code> | <code>bring-your-own-license</code> |
   *             <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>The new Provisioned IOPS (I/O operations per second) value for the RDS instance.
   *       </p>
   *          <p>Changing this setting doesn't result in an outage and
   *             the change is applied during the next maintenance window
   *             unless the <code>ApplyImmediately</code> parameter is enabled for this request.
   *           If you are migrating from Provisioned IOPS to standard storage, set this value to 0.
   *           The DB instance will require a reboot for the change in storage type to take effect.
   *       </p>
   *          <p>If you choose to migrate your DB instance from using standard storage to using
   *             Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process
   *             can take time. The duration of the migration depends on several factors such as database
   *             load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS
   *             provisioned (if any), and the number of prior scale storage operations. Typical
   *             migration times are under 24 hours, but the process can take up to several days in some
   *             cases. During the migration, the DB instance is available for use, but might experience
   *             performance degradation. While the migration takes place, nightly backups for the
   *             instance are suspended. No other Amazon RDS operations can take place for the instance,
   *             including modifying the instance, rebooting the instance, deleting the instance,
   *             creating a read replica for the instance, and creating a DB snapshot of the instance. </p>
   *          <p>Constraints: For MariaDB, MySQL, Oracle, and PostgreSQL,
   *           the value supplied must be at least 10% greater than the current value.
   *           Values that are not at least 10% greater than the existing value are rounded up so that they are 10% greater than the current value.
   *       </p>
   *          <p>Default: Uses existing setting</p>
   */
  Iops?: number;

  /**
   * <p>
   *             A value that indicates the DB instance should be associated with the specified option group.
   *             Changing this parameter doesn't result in an outage except in the following case and the change
   *             is applied during the next maintenance window
   *             unless the <code>ApplyImmediately</code> parameter is enabled
   *             for this request. If the parameter change results in an option group that
   *             enables OEM, this change can cause a brief (sub-second) period during which new connections
   *             are rejected but existing connections are not interrupted.
   *         </p>
   *          <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
   */
  OptionGroupName?: string;

  /**
   * <p>
   *             The new DB instance identifier for the DB instance when renaming a DB
   *             instance. When you change the DB instance identifier, an instance
   *             reboot occurs immediately if you enable <code>ApplyImmediately</code>, or will occur
   *             during the next maintenance window if you disable Apply Immediately. This value is stored
   *             as a lowercase string.
   *         </p>
   *
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbinstance</code>
   *          </p>
   */
  NewDBInstanceIdentifier?: string;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.
   *       </p>
   *          <p>If you specify Provisioned IOPS (<code>io1</code>),
   *           you must also include a value for the <code>Iops</code> parameter.
   *       </p>
   *          <p>If you choose to migrate your DB instance from using standard storage to using
   *             Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process
   *             can take time. The duration of the migration depends on several factors such as database
   *             load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS
   *             provisioned (if any), and the number of prior scale storage operations. Typical
   *             migration times are under 24 hours, but the process can take up to several days in some
   *             cases. During the migration, the DB instance is available for use, but might experience
   *             performance degradation. While the migration takes place, nightly backups for the
   *             instance are suspended. No other Amazon RDS operations can take place for the instance,
   *             including modifying the instance, rebooting the instance, deleting the instance,
   *             creating a read replica for the instance, and creating a DB snapshot of the instance. </p>
   *          <p>
   *           Valid values: <code>standard | gp2 | io1</code>
   *          </p>
   *          <p>Default: <code>io1</code> if the <code>Iops</code> parameter
   *           is specified, otherwise <code>gp2</code>
   *          </p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * <p>Indicates the certificate that needs to be associated with the instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>The Active Directory directory ID to move the DB instance to.
   *           Specify <code>none</code> to remove the instance from its current domain.
   *           The domain must be created prior to this operation. Currently, only MySQL, Microsoft SQL
   *           Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *           Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  Domain?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this
   *           value for an Aurora DB instance has no effect on the DB cluster setting. For more
   *           information, see <code>ModifyDBCluster</code>.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code>
   *       to a value other than 0.</p>
   *          <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values specified for options in the option
   *       group for the DB instance.</p>
   *          <p>Your database will restart when you change the <code>DBPortNumber</code> value regardless of the value of the <code>ApplyImmediately</code>
   *       parameter.</p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>
   *       Default: <code>3306</code>
   *          </p>
   *          <p> Valid values: <code>1150-65535</code>
   *         </p>
   *          <p>
   *             <b>MariaDB</b>
   *          </p>
   *          <p>
   *       Default: <code>3306</code>
   *          </p>
   *          <p> Valid values: <code>1150-65535</code>
   *         </p>
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>
   *       Default: <code>5432</code>
   *          </p>
   *          <p> Valid values: <code>1150-65535</code>
   *         </p>
   *          <p>Type: Integer</p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>
   *       Default: <code>1521</code>
   *          </p>
   *          <p> Valid values: <code>1150-65535</code>
   *         </p>
   *          <p>
   *             <b>SQL Server</b>
   *          </p>
   *          <p>
   *       Default: <code>1433</code>
   *          </p>
   *         <p> Valid values: <code>1150-65535</code> except <code>1234</code>, <code>1434</code>,
   *                 <code>3260</code>, <code>3343</code>, <code>3389</code>, <code>47001</code>, and
   *                 <code>49152-49156</code>.</p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>
   *       Default: <code>3306</code>
   *          </p>
   *          <p> Valid values: <code>1150-65535</code>
   *         </p>
   */
  DBPortNumber?: number;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible.
   *       </p>
   *          <p>When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC,
   *           and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses,
   *           and that public access is not permitted if the security group assigned to the DB instance doesn't permit it.</p>
   *          <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *          <p>
   *             <code>PubliclyAccessible</code> only applies to DB instances in a VPC.
   *       The DB instance must be part of a public subnet and
   *       <code>PubliclyAccessible</code> must be enabled for it to be publicly accessible.
   *       </p>
   *          <p>Changes to the <code>PubliclyAccessible</code> parameter are applied immediately regardless
   *       of the value of the <code>ApplyImmediately</code> parameter.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For
   *       example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role,
   *       go to <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole">To
   *           create an IAM role for Amazon RDS Enhanced Monitoring</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>The name of the IAM role to use when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance
   *       after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.
   *     </p>
   *          <p>Default: 1</p>
   *          <p>Valid Values: 0 - 15</p>
   */
  PromotionTier?: number;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access
   *           Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *          <p>This setting doesn't apply to Amazon Aurora. Mapping Amazon Web Services IAM accounts to database accounts is managed by the DB
   *           cluster.</p>
   *
   *          <p>For more information about IAM database authentication, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *               IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the DB instance.</p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon Relational Database Service
   *                     User Guide</i>.
   *         </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the Amazon Web Services KMS customer master key (CMK).</p>
   *         <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default CMK. There is a default CMK for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default CMK for each Amazon Web Services Region.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance.</p>
   *         <p>A change to the <code>CloudwatchLogsExportConfiguration</code> parameter is always applied to the DB instance
   *             immediately. Therefore, the <code>ApplyImmediately</code> parameter has no effect.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   *         <p>For more information about this setting, including limitations that apply to it, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling">
   *                 Managing capacity automatically with Amazon RDS storage autoscaling</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   */
  MaxAllocatedStorage?: number;

  /**
   * <p>A value that indicates whether the DB instance is restarted when you rotate your
   *             SSL/TLS certificate.</p>
   *         <p>By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate
   *             is not updated until the DB instance is restarted.</p>
   *         <important>
   *             <p>Set this parameter only if you are <i>not</i> using SSL/TLS to connect to the DB instance.</p>
   *         </important>
   *         <p>If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your
   *             DB engine to rotate your SSL/TLS certificate:</p>
   *         <ul>
   *             <li>
   *                 <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see
   *                     <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html">
   *                         Rotating Your SSL/TLS Certificate.</a> in the <i>Amazon RDS User Guide.</i>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see
   *                     <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html">
   *                         Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide.</i>
   *                </p>
   *             </li>
   *          </ul>
   */
  CertificateRotationRestart?: boolean;

  /**
   * <p>A value that sets the open mode of a replica database to either mounted or read-only.</p>
   *         <note>
   *             <p>Currently, this parameter is only supported for Oracle DB instances.</p>
   *         </note>
   *         <p>Mounted DB replicas are included in Oracle Enterprise Edition. The main use case for
   *             mounted replicas is cross-Region disaster recovery. The primary database doesn't use
   *             Active Data Guard to transmit information to the mounted replica. Because it doesn't
   *             accept user connections, a mounted replica can't serve a read-only workload.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html">Working with Oracle Read Replicas for Amazon RDS</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   */
  ReplicaMode?: ReplicaMode | string;

  /**
   * <p>A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance.</p>
   *         <p>A <i>CoIP</i> provides local or external connectivity to resources in
   *             your Outpost subnets through your on-premises network. For some use cases, a CoIP can
   *             provide lower latency for connections to the DB instance from outside of its virtual
   *             private cloud (VPC) on your local network.</p>
   *         <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working with Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>For more information about CoIPs, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#ip-addressing">Customer-owned IP addresses</a>
   *             in the <i>Amazon Web Services Outposts User Guide</i>.</p>
   */
  EnableCustomerOwnedIp?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the recovery point in Amazon Web Services Backup.</p>
   */
  AwsBackupRecoveryPointArn?: string;
}

export namespace ModifyDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBInstanceMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace ModifyDBInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBInstanceResult): any => ({
    ...obj,
  });
}

/**
 * <p>
 *         Contains the result of a successful invocation of the
 *         <code>ModifyDBParameterGroup</code> or <code>ResetDBParameterGroup</code> action.
 *         </p>
 */
export interface DBParameterGroupNameMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   */
  DBParameterGroupName?: string;
}

export namespace DBParameterGroupNameMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBParameterGroupNameMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyDBParameterGroupMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing <code>DBParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>An array of parameter names, values, and the application methods for the parameter update. At least one parameter name, value, and
   *           application method method must be supplied; later arguments are optional. A maximum of 20 parameters can be modified in a single request.</p>
   *          <p>Valid Values (for the application method): <code>immediate | pending-reboot</code>
   *          </p>
   *          <note>
   *             <p>You can use the <code>immediate</code> value with dynamic parameters only. You can use the
   *               <code>pending-reboot</code> value for both dynamic and static parameters.</p>
   *             <p>When the application method is <code>immediate</code>, changes to dynamic parameters are applied immediately
   *           to the DB instances associated with the parameter group. When the application method is <code>pending-reboot</code>,
   *           changes to dynamic and static parameters are applied after a reboot without failover to the DB instances associated with the
   *           parameter group.</p>
   *          </note>
   */
  Parameters: Parameter[] | undefined;
}

export namespace ModifyDBParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBParameterGroupMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBProxyRequest {
  /**
   * <p>The identifier for the <code>DBProxy</code> to modify.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The new identifier for the <code>DBProxy</code>. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   */
  NewDBProxyName?: string;

  /**
   * <p>The new authentication settings for the <code>DBProxy</code>.</p>
   */
  Auth?: UserAuthConfig[];

  /**
   * <p>Whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
   *         By enabling this setting, you can enforce encrypted TLS connections to the proxy, even if the associated database doesn't
   *         use TLS.</p>
   */
  RequireTLS?: boolean;

  /**
   * <p>The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this
   *         value higher or lower than the connection timeout limit for the associated database.</p>
   */
  IdleClientTimeout?: number;

  /**
   * <p>Whether the proxy includes detailed information about SQL statements in its logs.
   *         This information helps you to debug issues involving SQL behavior or the performance
   *         and scalability of the proxy connections. The debug information includes the text of
   *         SQL statements that you submit through the proxy. Thus, only enable this setting
   *         when needed for debugging, and only when you have security measures in place to
   *         safeguard any sensitive information that appears in the logs.</p>
   */
  DebugLogging?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in Amazon Web Services Secrets Manager.</p>
   */
  RoleArn?: string;

  /**
   * <p>The new list of security groups for the <code>DBProxy</code>.</p>
   */
  SecurityGroups?: string[];
}

export namespace ModifyDBProxyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBProxyRequest): any => ({
    ...obj,
  });
}

export interface ModifyDBProxyResponse {
  /**
   * <p>The <code>DBProxy</code> object representing the new settings for the proxy.</p>
   */
  DBProxy?: DBProxy;
}

export namespace ModifyDBProxyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBProxyResponse): any => ({
    ...obj,
  });
}

export interface ModifyDBProxyEndpointRequest {
  /**
   * <p>The name of the DB proxy sociated with the DB proxy endpoint that you want to modify.</p>
   */
  DBProxyEndpointName: string | undefined;

  /**
   * <p>The new identifier for the <code>DBProxyEndpoint</code>. An identifier must
   *         begin with a letter and must contain only ASCII letters, digits, and hyphens; it
   *         can't end with a hyphen or contain two consecutive hyphens.</p>
   */
  NewDBProxyEndpointName?: string;

  /**
   * <p>The VPC security group IDs for the DB proxy endpoint. When the DB proxy endpoint
   *         uses a different VPC than the original proxy, you also specify a different
   *         set of security group IDs than for the original proxy.</p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace ModifyDBProxyEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBProxyEndpointRequest): any => ({
    ...obj,
  });
}

export interface ModifyDBProxyEndpointResponse {
  /**
   * <p>The <code>DBProxyEndpoint</code> object representing the new settings for the DB proxy endpoint.</p>
   */
  DBProxyEndpoint?: DBProxyEndpoint;
}

export namespace ModifyDBProxyEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBProxyEndpointResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.</p>
 */
export interface ConnectionPoolConfiguration {
  /**
   * <p>The maximum size of the connection pool for each target in a target group. For Aurora MySQL, it is expressed as a percentage of the
   *         <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: between 1 and 100</p>
   */
  MaxConnectionsPercent?: number;

  /**
   * <p>
   *         Controls how actively the proxy closes idle database connections in the connection pool.
   *         A high value enables the proxy to leave a high percentage of idle connections open.
   *         A low value causes the proxy to close idle client connections and return the underlying
   *         database connections to the connection pool. For Aurora MySQL, it is expressed as a percentage of the
   *         <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.
   *       </p>
   *          <p>Default: 50</p>
   *          <p>Constraints: between 0 and <code>MaxConnectionsPercent</code>
   *          </p>
   */
  MaxIdleConnectionsPercent?: number;

  /**
   * <p>The number of seconds for a proxy to wait for a connection to become available in the connection pool. Only applies when the
   *         proxy has opened its maximum number of connections and all connections are busy with client sessions.</p>
   *          <p>Default: 120</p>
   *          <p>Constraints: between 1 and 3600, or 0 representing unlimited</p>
   */
  ConnectionBorrowTimeout?: number;

  /**
   * <p>Each item in the list represents a class of SQL operations that normally cause all later statements
   *         in a session using a proxy to be pinned to the same underlying database connection. Including an item
   *         in the list exempts that class of SQL operations from the pinning behavior.</p>
   *          <p>Default: no session pinning filters</p>
   */
  SessionPinningFilters?: string[];

  /**
   * <p>
   *         One or more SQL statements for the proxy to run when opening each new database connection.
   *         Typically used with <code>SET</code> statements to make sure that each connection has identical
   *         settings such as time zone and character set. For multiple statements, use semicolons as the separator.
   *         You can also include multiple variables in a single <code>SET</code> statement, such as
   *         <code>SET x=1, y=2</code>.
   *       </p>
   *          <p>Default: no initialization query</p>
   */
  InitQuery?: string;
}

export namespace ConnectionPoolConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionPoolConfiguration): any => ({
    ...obj,
  });
}

export interface ModifyDBProxyTargetGroupRequest {
  /**
   * <p>The name of the new target group to assign to the proxy.</p>
   */
  TargetGroupName: string | undefined;

  /**
   * <p>The name of the new proxy to which to assign the target group.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The settings that determine the size and behavior of the connection pool for the target group.</p>
   */
  ConnectionPoolConfig?: ConnectionPoolConfiguration;

  /**
   * <p>The new name for the modified <code>DBProxyTarget</code>. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   */
  NewName?: string;
}

export namespace ModifyDBProxyTargetGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBProxyTargetGroupRequest): any => ({
    ...obj,
  });
}

export interface ModifyDBProxyTargetGroupResponse {
  /**
   * <p>The settings of the modified <code>DBProxyTarget</code>.</p>
   */
  DBProxyTargetGroup?: DBProxyTargetGroup;
}

export namespace ModifyDBProxyTargetGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBProxyTargetGroupResponse): any => ({
    ...obj,
  });
}

export interface ModifyDBSnapshotMessage {
  /**
   * <p>The identifier of the DB snapshot to modify.</p>
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>The engine version to upgrade the DB snapshot to.
   *       </p>
   *
   *          <p>The following are the database engines and engine versions that are available when you upgrade a DB snapshot.
   *       </p>
   *
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>5.5.46</code> (supported for 5.1 DB snapshots)</p>
   *             </li>
   *          </ul>
   *
   *
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>12.1.0.2.v8</code>  (supported for 12.1.0.1 DB snapshots)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>11.2.0.4.v12</code> (supported for 11.2.0.2 DB snapshots)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>11.2.0.4.v11</code> (supported for 11.2.0.3 DB snapshots)</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>For the list of engine versions that are available for upgrading a DB snapshot, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.PostgreSQL.html#USER_UpgradeDBInstance.PostgreSQL.MajorVersion">
   *               Upgrading the PostgreSQL DB Engine for Amazon RDS</a>.
   *       </p>
   */
  EngineVersion?: string;

  /**
   * <p>The option group to identify with the upgraded DB snapshot.
   *         </p>
   *
   *         <p>You can specify this parameter when you upgrade an Oracle DB snapshot.
   *             The same option group considerations apply when upgrading a DB snapshot as when upgrading a DB instance.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Oracle.html#USER_UpgradeDBInstance.Oracle.OGPG.OG">Option group considerations</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   */
  OptionGroupName?: string;
}

export namespace ModifyDBSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBSnapshotMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBSnapshotResult {
  /**
   * <p>Contains the details of an Amazon RDS DB snapshot.
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSnapshots</code> action.
   *       </p>
   */
  DBSnapshot?: DBSnapshot;
}

export namespace ModifyDBSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyDBSnapshotAttributeMessage {
  /**
   * <p>The identifier for the DB snapshot to modify the attributes for.</p>
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>The name of the DB snapshot attribute to modify.</p>
   *          <p>To manage authorization for other Amazon Web Services accounts to copy or restore a manual DB snapshot,
   *       set this value to <code>restore</code>.</p>
   *          <note>
   *             <p>To view the list of attributes available to modify, use the
   *               <a>DescribeDBSnapshotAttributes</a> API action.</p>
   *          </note>
   */
  AttributeName: string | undefined;

  /**
   * <p>A list of DB snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p>
   *          <p>To authorize other Amazon Web Services accounts to copy or restore a manual snapshot, set this list to include one or more Amazon Web Services account
   *       IDs, or <code>all</code> to make the manual DB snapshot restorable by
   *       any Amazon Web Services account. Do not add the <code>all</code> value for any
   *       manual DB snapshots that contain private information that you don't want available
   *       to all Amazon Web Services accounts.</p>
   */
  ValuesToAdd?: string[];

  /**
   * <p>A list of DB snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p>
   *          <p>To remove authorization for other Amazon Web Services accounts to copy or restore a manual snapshot, set this list to include
   *       one or more Amazon Web Services account
   *       identifiers, or <code>all</code> to remove authorization for any Amazon Web Services account to copy or
   *       restore the DB snapshot. If you specify <code>all</code>, an Amazon Web Services account whose
   *       account ID is explicitly added to the <code>restore</code> attribute
   *       can still copy or restore the manual DB snapshot.</p>
   */
  ValuesToRemove?: string[];
}

export namespace ModifyDBSnapshotAttributeMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBSnapshotAttributeMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBSnapshotAttributeResult {
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code>
   *     API action.</p>
   *          <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts
   *       to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
   *       API action.</p>
   */
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
}

export namespace ModifyDBSnapshotAttributeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBSnapshotAttributeResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyDBSubnetGroupMessage {
  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string.
   *           You can't modify the default subnet group.
   *       </p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The description for the DB subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * <p>The EC2 subnet IDs for the DB subnet group.</p>
   */
  SubnetIds: string[] | undefined;
}

export namespace ModifyDBSubnetGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBSubnetGroupMessage): any => ({
    ...obj,
  });
}

export interface ModifyDBSubnetGroupResult {
  /**
   * <p>Contains the details of an Amazon RDS DB subnet group.
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSubnetGroups</code> action.
   *       </p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

export namespace ModifyDBSubnetGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyDBSubnetGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>The DB subnet is already in use in the Availability Zone.</p>
 */
export interface SubnetAlreadyInUse extends __SmithyException, $MetadataBearer {
  name: "SubnetAlreadyInUse";
  $fault: "client";
  message?: string;
}

export namespace SubnetAlreadyInUse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SubnetAlreadyInUse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * <p>The name of the RDS event notification subscription.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. If this value isn't specified, all events are returned.</p>
   *          <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> | <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> | <code>db-cluster-snapshot</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * <p>
   *             A list of event categories for a source type (<code>SourceType</code>) that you want to subscribe to.
   *             You can see a list of the categories for a given source type
   *             in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i>
   *             or by using the <code>DescribeEventCategories</code> operation.
   *         </p>
   */
  EventCategories?: string[];

  /**
   * <p>
   *             A value that indicates whether to activate the subscription.
   *       </p>
   */
  Enabled?: boolean;
}

export namespace ModifyEventSubscriptionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyEventSubscriptionMessage): any => ({
    ...obj,
  });
}

export interface ModifyEventSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace ModifyEventSubscriptionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyEventSubscriptionResult): any => ({
    ...obj,
  });
}

export interface ModifyGlobalClusterMessage {
  /**
   * <p>
   *         The DB cluster identifier for the global cluster being modified. This parameter isn't case-sensitive.
   *       </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing global database cluster.</p>
   *             </li>
   *          </ul>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>
   *         The new cluster identifier for the global database cluster when modifying a global database cluster.
   *         This value is stored as a lowercase string.
   *       </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster2</code>
   *          </p>
   */
  NewGlobalClusterIdentifier?: string;

  /**
   * <p>
   *         Indicates if the global database cluster has deletion protection enabled. The global database cluster
   *         can't be deleted when deletion protection is enabled.
   *       </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The version number of the database engine to which you want to upgrade.
   *           Changing this parameter results in an outage. The change is applied during
   *           the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p>
   *          <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'</code>
   *          </p>
   *          <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'</code>
   *          </p>
   *          <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query '*[]|[?SupportsGlobalDatabases == `true`].[EngineVersion]'</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether major version upgrades are allowed.</p>
   *          <p>Constraints: You must allow major version upgrades when specifying a value for the
   *                 <code>EngineVersion</code> parameter that is a different major version than the DB
   *             cluster's current version.</p>
   *          <p>If you upgrade the major version of a global database, the cluster and DB instance parameter
   *         groups are set to the default parameter groups for the new version. Apply any custom parameter
   *         groups after completing the upgrade.</p>
   */
  AllowMajorVersionUpgrade?: boolean;
}

export namespace ModifyGlobalClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyGlobalClusterMessage): any => ({
    ...obj,
  });
}

export interface ModifyGlobalClusterResult {
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace ModifyGlobalClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyGlobalClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p>A list of all available options</p>
 */
export interface OptionConfiguration {
  /**
   * <p>The configuration of options to include in a group.</p>
   */
  OptionName: string | undefined;

  /**
   * <p>The optional port for the option.</p>
   */
  Port?: number;

  /**
   * <p>The version for the option.</p>
   */
  OptionVersion?: string;

  /**
   * <p>A list of DBSecurityGroupMembership name strings used for this option.</p>
   */
  DBSecurityGroupMemberships?: string[];

  /**
   * <p>A list of VpcSecurityGroupMembership name strings used for this option.</p>
   */
  VpcSecurityGroupMemberships?: string[];

  /**
   * <p>The option settings to include in an option group.</p>
   */
  OptionSettings?: OptionSetting[];
}

export namespace OptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OptionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyOptionGroupMessage {
  /**
   * <p>The name of the option group to be modified.</p>
   *          <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
   */
  OptionGroupName: string | undefined;

  /**
   * <p>Options in this list are added to the option group or, if already present, the specified configuration is used to update the existing configuration.</p>
   */
  OptionsToInclude?: OptionConfiguration[];

  /**
   * <p>Options in this list are removed from the option group.</p>
   */
  OptionsToRemove?: string[];

  /**
   * <p>A value that indicates whether to apply the change immediately or during the next maintenance window for each instance associated with the option group.</p>
   */
  ApplyImmediately?: boolean;
}

export namespace ModifyOptionGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyOptionGroupMessage): any => ({
    ...obj,
  });
}

export interface ModifyOptionGroupResult {
  /**
   * <p></p>
   */
  OptionGroup?: OptionGroup;
}

export namespace ModifyOptionGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ModifyOptionGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface PromoteReadReplicaMessage {
  /**
   * <p>The DB instance identifier. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing read replica DB instance.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbinstance</code>
   *          </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 0 to 35.</p>
   *             </li>
   *             <li>
   *                <p>Can't be set to 0 if the DB instance is a source to read replicas.</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>
   *         The daily time range during which automated backups are created
   *         if automated backups are enabled,
   *         using the <code>BackupRetentionPeriod</code> parameter.
   *         </p>
   *          <p>
   *             The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region.
   *             To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html">
   *             Adjusting the Preferred Maintenance Window</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;
}

export namespace PromoteReadReplicaMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PromoteReadReplicaMessage): any => ({
    ...obj,
  });
}

export interface PromoteReadReplicaResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace PromoteReadReplicaResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PromoteReadReplicaResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface PromoteReadReplicaDBClusterMessage {
  /**
   * <p>The identifier of the DB cluster read replica to promote. This parameter isn't
   *             case-sensitive. </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DB cluster read replica.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-replica1</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace PromoteReadReplicaDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PromoteReadReplicaDBClusterMessage): any => ({
    ...obj,
  });
}

export interface PromoteReadReplicaDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace PromoteReadReplicaDBClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PromoteReadReplicaDBClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface PurchaseReservedDBInstancesOfferingMessage {
  /**
   * <p>The ID of the Reserved DB instance offering to purchase.</p>
   *          <p>Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706</p>
   */
  ReservedDBInstancesOfferingId: string | undefined;

  /**
   * <p>Customer-specified identifier to track this reservation.</p>
   *          <p>Example: myreservationID</p>
   */
  ReservedDBInstanceId?: string;

  /**
   * <p>The number of instances to reserve.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   */
  DBInstanceCount?: number;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];
}

export namespace PurchaseReservedDBInstancesOfferingMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseReservedDBInstancesOfferingMessage): any => ({
    ...obj,
  });
}

export interface PurchaseReservedDBInstancesOfferingResult {
  /**
   * <p>
   *             This data type is used as a response element in the
   *             <code>DescribeReservedDBInstances</code> and
   *             <code>PurchaseReservedDBInstancesOffering</code> actions.
   *         </p>
   */
  ReservedDBInstance?: ReservedDBInstance;
}

export namespace PurchaseReservedDBInstancesOfferingResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PurchaseReservedDBInstancesOfferingResult): any => ({
    ...obj,
  });
}

/**
 * <p>User already has a reservation with the given identifier.</p>
 */
export interface ReservedDBInstanceAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ReservedDBInstanceAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedDBInstanceAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedDBInstanceAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>Request would exceed the user's DB Instance quota.</p>
 */
export interface ReservedDBInstanceQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ReservedDBInstanceQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedDBInstanceQuotaExceededFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReservedDBInstanceQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RebootDBInstanceMessage {
  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>
   *           A value that indicates whether the reboot is conducted through a Multi-AZ failover.
   *       </p>
   *          <p>Constraint: You can't enable force failover if the instance isn't configured for Multi-AZ.</p>
   */
  ForceFailover?: boolean;
}

export namespace RebootDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootDBInstanceMessage): any => ({
    ...obj,
  });
}

export interface RebootDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace RebootDBInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootDBInstanceResult): any => ({
    ...obj,
  });
}

/**
 * <p>The proxy is already associated with the specified RDS DB instance or Aurora DB cluster.</p>
 */
export interface DBProxyTargetAlreadyRegisteredFault extends __SmithyException, $MetadataBearer {
  name: "DBProxyTargetAlreadyRegisteredFault";
  $fault: "client";
  message?: string;
}

export namespace DBProxyTargetAlreadyRegisteredFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBProxyTargetAlreadyRegisteredFault): any => ({
    ...obj,
  });
}

/**
 * <p>The requested operation can't be performed because there aren't enough available IP addresses
 *            in the proxy's subnets. Add more CIDR blocks to the VPC or remove IP address that aren't required
 *            from the subnets.</p>
 */
export interface InsufficientAvailableIPsInSubnetFault extends __SmithyException, $MetadataBearer {
  name: "InsufficientAvailableIPsInSubnetFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientAvailableIPsInSubnetFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientAvailableIPsInSubnetFault): any => ({
    ...obj,
  });
}

export interface RegisterDBProxyTargetsRequest {
  /**
   * <p>The identifier of the <code>DBProxy</code> that is associated with the <code>DBProxyTargetGroup</code>.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The identifier of the <code>DBProxyTargetGroup</code>.</p>
   */
  TargetGroupName?: string;

  /**
   * <p>One or more DB instance identifiers.</p>
   */
  DBInstanceIdentifiers?: string[];

  /**
   * <p>One or more DB cluster identifiers.</p>
   */
  DBClusterIdentifiers?: string[];
}

export namespace RegisterDBProxyTargetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterDBProxyTargetsRequest): any => ({
    ...obj,
  });
}

export interface RegisterDBProxyTargetsResponse {
  /**
   * <p>One or more <code>DBProxyTarget</code> objects that are created when you register targets with a target group.</p>
   */
  DBProxyTargets?: DBProxyTarget[];
}

export namespace RegisterDBProxyTargetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegisterDBProxyTargetsResponse): any => ({
    ...obj,
  });
}

export interface RemoveFromGlobalClusterMessage {
  /**
   * <p>
   *         The cluster identifier to detach from the Aurora global database cluster.
   *       </p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>
   *         The Amazon Resource Name (ARN) identifying the cluster that was detached from the Aurora global database cluster.
   *       </p>
   */
  DbClusterIdentifier?: string;
}

export namespace RemoveFromGlobalClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveFromGlobalClusterMessage): any => ({
    ...obj,
  });
}

export interface RemoveFromGlobalClusterResult {
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace RemoveFromGlobalClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveFromGlobalClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified IAM role Amazon Resource Name (ARN) isn't associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBClusterRoleNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterRoleNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBClusterRoleNotFoundFault): any => ({
    ...obj,
  });
}

export interface RemoveRoleFromDBClusterMessage {
  /**
   * <p>The name of the DB cluster to disassociate the IAM role from.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the Aurora DB cluster, for example
   *         <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the feature for the DB cluster that the IAM role is to be disassociated from.
   *             For the list of supported feature names, see <a>DBEngineVersion</a>.</p>
   */
  FeatureName?: string;
}

export namespace RemoveRoleFromDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveRoleFromDBClusterMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The specified <code>RoleArn</code> value doesn't match the specified feature for
 *             the DB instance.</p>
 */
export interface DBInstanceRoleNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "DBInstanceRoleNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceRoleNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DBInstanceRoleNotFoundFault): any => ({
    ...obj,
  });
}

export interface RemoveRoleFromDBInstanceMessage {
  /**
   * <p>The name of the DB instance to disassociate the IAM role from.</p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB instance,
   *             for example, <code>arn:aws:iam::123456789012:role/AccessRole</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the feature for the DB instance that the IAM role is to be disassociated from.
   *             For the list of supported feature names, see <code>DBEngineVersion</code>.
   *         </p>
   */
  FeatureName: string | undefined;
}

export namespace RemoveRoleFromDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveRoleFromDBInstanceMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * <p>The name of the RDS event notification subscription you want to remove a source identifier from.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>
   *             The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b>
   *             for a DB instance or the name of a security group.
   *         </p>
   */
  SourceIdentifier: string | undefined;
}

export namespace RemoveSourceIdentifierFromSubscriptionMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveSourceIdentifierFromSubscriptionMessage): any => ({
    ...obj,
  });
}

export interface RemoveSourceIdentifierFromSubscriptionResult {
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace RemoveSourceIdentifierFromSubscriptionResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveSourceIdentifierFromSubscriptionResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * <p>The Amazon RDS resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about
   *             creating an ARN,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The tag key (name) of the tag to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsFromResourceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveTagsFromResourceMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ResetDBClusterParameterGroupMessage {
  /**
   * <p>The name of the DB cluster parameter group to reset.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A value that indicates whether to reset all parameters in the DB cluster parameter group
   *         to their default values. You can't use this parameter if there
   *         is a list of parameter names specified for the <code>Parameters</code> parameter.</p>
   */
  ResetAllParameters?: boolean;

  /**
   * <p>A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this
   *         parameter if the <code>ResetAllParameters</code> parameter is enabled.</p>
   */
  Parameters?: Parameter[];
}

export namespace ResetDBClusterParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetDBClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ResetDBParameterGroupMessage {
  /**
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing <code>DBParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>
   *           A value that indicates whether to reset all parameters in the DB parameter group to default values.
   *           By default, all parameters in the DB parameter group are reset to default values.
   *         </p>
   */
  ResetAllParameters?: boolean;

  /**
   * <p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code>
   *             name and <code>ResetAllParameters</code> parameters. To reset specific parameters,
   *             provide a list of the following: <code>ParameterName</code> and
   *             <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single
   *             request.</p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>Valid Values (for Apply method): <code>immediate</code> | <code>pending-reboot</code>
   *          </p>
   *          <p>You can use the immediate value with dynamic parameters only. You can use
   *             the <code>pending-reboot</code> value for both dynamic and static parameters, and changes
   *             are applied when DB instance reboots.</p>
   *          <p>
   *             <b>MariaDB</b>
   *          </p>
   *          <p>Valid Values (for Apply method): <code>immediate</code> | <code>pending-reboot</code>
   *          </p>
   *          <p>You can use the immediate value with dynamic parameters only. You can use
   *       the <code>pending-reboot</code> value for both dynamic and static parameters, and changes
   *       are applied when DB instance reboots.</p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Valid Values (for Apply method): <code>pending-reboot</code>
   *          </p>
   */
  Parameters?: Parameter[];
}

export namespace ResetDBParameterGroupMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResetDBParameterGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The specified Amazon S3 bucket name can't be found or Amazon RDS isn't
 *             authorized to access the specified Amazon S3 bucket. Verify the <b>SourceS3BucketName</b> and <b>S3IngestionRoleArn</b> values and try again.</p>
 */
export interface InvalidS3BucketFault extends __SmithyException, $MetadataBearer {
  name: "InvalidS3BucketFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidS3BucketFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidS3BucketFault): any => ({
    ...obj,
  });
}

export interface RestoreDBClusterFromS3Message {
  /**
   * <p>A list of Availability Zones (AZs) where instances in the restored DB cluster can be created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The number of days for which automated backups of the restored DB cluster are retained. You must specify a minimum value of 1.</p>
   *         <p>Default: 1</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A value that indicates that the restored DB cluster should be associated with the specified CharacterSet.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>The database name for the restored DB cluster.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the DB cluster to create from the source data in the Amazon S3 bucket. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster1</code>
   *         </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate
   *             with the restored DB cluster. If this argument is omitted, <code>default.aurora5.6</code> is used.
   *         </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A list of EC2 VPC security groups to associate with the restored DB cluster.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>A DB subnet group to associate with the restored DB cluster.</p>
   *         <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.
   *         </p>
   *         <p>Example: <code>mySubnetgroup</code>
   *         </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The name of the database engine to be used for this DB cluster.</p>
   *         <p>Valid Values: <code>aurora</code> (for MySQL 5.6-compatible Aurora), <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), and <code>aurora-postgresql</code>
   *         </p>
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use.</p>
   *         <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>
   *             <b>Aurora MySQL</b>
   *         </p>
   *         <p>Example: <code>5.6.10a</code>, <code>5.6.mysql_aurora.1.19.2</code>, <code>5.7.12</code>, <code>5.7.mysql_aurora.2.04.5</code>
   *         </p>
   *         <p>
   *             <b>Aurora PostgreSQL</b>
   *         </p>
   *         <p>Example: <code>9.6.3</code>, <code>10.7</code>
   *         </p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the instances in the restored DB cluster accept connections.</p>
   *         <p>
   *             Default: <code>3306</code>
   *         </p>
   */
  Port?: number;

  /**
   * <p>The name of the master user for the restored DB cluster.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   */
  MasterUsername: string | undefined;

  /**
   * <p>The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p>
   *         <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword: string | undefined;

  /**
   * <p>A value that indicates that the restored DB cluster should be associated with the specified option group.</p>
   *         <p>Permanent options can't be removed from an option group. An option group can't be removed from a
   *             DB cluster once it is associated with a DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The daily time range during which automated backups are created
   *             if automated backups are enabled
   *             using the <code>BackupRetentionPeriod</code> parameter.
   *         </p>
   *         <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region.
   *             To view the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow">
   *                 Backup window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *         <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *         </p>
   *         <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each Amazon Web Services Region, occurring on a random day of the
   *             week. To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
   *         <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];

  /**
   * <p>A value that indicates whether the restored DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted DB cluster.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the Amazon Web Services KMS customer master key (CMK).
   *             To use a CMK in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *         <p>If the StorageEncrypted parameter is enabled, and you do
   *             not specify a value for the <code>KmsKeyId</code> parameter, then
   *             Amazon RDS will use your default CMK. There is a
   *             default CMK for your Amazon Web Services account. Your Amazon Web Services account has a different
   *             default CMK for each Amazon Web Services Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The identifier for the database engine that was backed up to create the files stored in the
   *             Amazon S3 bucket.
   *         </p>
   *         <p>Valid values: <code>mysql</code>
   *          </p>
   */
  SourceEngine: string | undefined;

  /**
   * <p>The version of the database that the backup files were created from.</p>
   *         <p>MySQL versions 5.5, 5.6, and 5.7 are supported.
   *         </p>
   *         <p>Example: <code>5.6.40</code>, <code>5.7.28</code>
   *          </p>
   */
  SourceEngineVersion: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket that contains the data used to create the Amazon Aurora DB cluster.</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>The prefix for all of the file names that contain the data used to create the Amazon Aurora DB cluster.
   *         If you do not specify a <b>SourceS3Prefix</b> value, then the Amazon Aurora DB cluster is
   *         created by using all of the files in the Amazon S3 bucket.</p>
   */
  S3Prefix?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Identity and Access Management (IAM) role that authorizes
   *         Amazon RDS to access the Amazon S3 bucket on your behalf.</p>
   */
  S3IngestionRoleArn: string | undefined;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <note>
   *             <p>Currently, Backtrack is only supported for Aurora MySQL DB clusters.</p>
   *         </note>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Specify the Active Directory directory ID to restore the DB cluster in.
   *           The domain must be created prior to this operation.
   *       </p>
   *          <p>
   *         For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster.
   *         For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html">Kerberos Authentication</a>
   *         in the <i>Amazon Aurora User Guide</i>.
   *       </p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;
}

export namespace RestoreDBClusterFromS3Message {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBClusterFromS3Message): any => ({
    ...obj,
  });
}

export interface RestoreDBClusterFromS3Result {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterFromS3Result {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBClusterFromS3Result): any => ({
    ...obj,
  });
}

/**
 * <p>The DB cluster doesn't have enough capacity for the current operation.</p>
 */
export interface InsufficientDBClusterCapacityFault extends __SmithyException, $MetadataBearer {
  name: "InsufficientDBClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientDBClusterCapacityFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsufficientDBClusterCapacityFault): any => ({
    ...obj,
  });
}

/**
 * <p>Cannot restore from VPC backup to non-VPC DB instance.</p>
 */
export interface InvalidRestoreFault extends __SmithyException, $MetadataBearer {
  name: "InvalidRestoreFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidRestoreFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRestoreFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RestoreDBClusterFromSnapshotMessage {
  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the restored DB
   *             cluster can be created.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot.
   *             This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p>
   *         <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB
   *             cluster snapshot. However, you can use only the ARN to specify a DB snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing Snapshot.</p>
   *             </li>
   *          </ul>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The database engine to use for the new DB cluster.</p>
   *          <p>Default: The same as source</p>
   *          <p>Constraint: Must be compatible with the engine of the source</p>
   */
  Engine: string | undefined;

  /**
   * <p>The version of the database engine to use for the new DB cluster.</p>
   *          <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <note>
   *             <p>If you aren't using the default engine version, then you must specify the engine version.</p>
   *          </note>
   *          <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *          <p>Example: <code>5.6.10a</code>, <code>5.6.mysql_aurora.1.19.2</code>, <code>5.7.12</code>, <code>5.7.mysql_aurora.2.04.5</code>
   *          </p>
   *          <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *          <p>Example: <code>9.6.3</code>, <code>10.7</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: This value must be <code>1150-65535</code>
   *         </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>The name of the DB subnet group to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DB subnet group.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The database name for the restored DB cluster.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the option group to use for the restored DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>A list of VPC security groups that the new DB cluster will belong to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The tags to be assigned to the restored DB cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Web Services KMS key identifier to use when restoring an encrypted DB cluster from a DB
   *             snapshot or DB cluster snapshot.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the Amazon Web Services KMS customer master key (CMK).
   *           To use a CMK in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *         <p>When you don't specify a value for the <code>KmsKeyId</code> parameter, then the
   *             following occurs:</p>
   *         <ul>
   *             <li>
   *                 <p>If the DB snapshot or DB cluster snapshot in
   *                         <code>SnapshotIdentifier</code> is encrypted, then the restored DB cluster
   *                     is encrypted using the Amazon Web Services KMS CMK that was used to encrypt the DB snapshot or DB
   *                     cluster snapshot.</p>
   *             </li>
   *             <li>
   *                 <p>If the DB snapshot or DB cluster snapshot in
   *                     <code>SnapshotIdentifier</code> isn't encrypted, then the restored DB cluster
   *                     isn't encrypted.</p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <note>
   *             <p>Currently, Backtrack is only supported for Aurora MySQL DB clusters.</p>
   *         </note>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.
   *             The values in the list depend on the DB engine being used. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon
   *                 Aurora User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>,
   *             <code>parallelquery</code>, <code>global</code>, or <code>multimaster</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBCluster.html">
   *             CreateDBCluster</a>.</p>
   */
  EngineMode?: string;

  /**
   * <p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>
   */
  ScalingConfiguration?: ScalingConfiguration;

  /**
   * <p>The name of the DB cluster parameter group to associate with this DB cluster. If this
   *             argument is omitted, the default DB cluster parameter group for the specified engine is
   *             used.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing default DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Specify the Active Directory directory ID to restore the DB cluster in.
   *            The domain must be created prior to this operation. Currently, only MySQL, Microsoft SQL
   *            Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *             Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.
   *        </p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;
}

export namespace RestoreDBClusterFromSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBClusterFromSnapshotMessage): any => ({
    ...obj,
  });
}

export interface RestoreDBClusterFromSnapshotResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterFromSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBClusterFromSnapshotResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RestoreDBClusterToPointInTimeMessage {
  /**
   * <p>The name of the new DB cluster to be created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The type of restore to be performed. You can specify one of the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>full-copy</code> - The new DB cluster is restored as a full copy of the
   *                 source DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>copy-on-write</code> - The new DB cluster is restored as a clone of the
   *                 source DB cluster.</p>
   *             </li>
   *          </ul>
   *         <p>Constraints: You can't specify <code>copy-on-write</code> if the engine version of the source DB cluster is earlier than 1.11.</p>
   *         <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is
   *             restored as a full copy of the source DB cluster.</p>
   */
  RestoreType?: string;

  /**
   * <p>The identifier of the source DB cluster from which to restore.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  SourceDBClusterIdentifier: string | undefined;

  /**
   * <p>The date and time to restore the DB cluster to.</p>
   *          <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be before the latest restorable time for the DB instance</p>
   *             </li>
   *             <li>
   *                <p>Must be specified if <code>UseLatestRestorableTime</code> parameter isn't provided</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if the <code>UseLatestRestorableTime</code> parameter is enabled</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if the <code>RestoreType</code> parameter is <code>copy-on-write</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>2015-03-07T23:45:00Z</code>
   *          </p>
   */
  RestoreToTime?: Date;

  /**
   * <p>A value that indicates whether to restore the DB cluster to the latest
   *             restorable backup time. By default, the DB cluster isn't restored to the latest
   *             restorable backup time.
   *       </p>
   *          <p>Constraints: Can't be specified if <code>RestoreToTime</code> parameter is provided.</p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: A value from <code>1150-65535</code>.
   *       </p>
   *          <p>Default: The default port for the engine.</p>
   */
  Port?: number;

  /**
   * <p>The DB subnet group name to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The name of the option group for the new DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>A list of VPC security groups that the new DB cluster belongs to.</p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Web Services KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster.</p>
   *          <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the Amazon Web Services KMS customer master key (CMK).
   *           To use a CMK in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *          <p>You can restore to a new DB cluster and encrypt the new DB cluster with a Amazon Web Services KMS CMK that is different than the
   *       Amazon Web Services KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the Amazon Web Services KMS CMK
   *       identified by the <code>KmsKeyId</code> parameter.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p>
   *          <ul>
   *             <li>
   *                <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted using the Amazon Web Services KMS CMK that was used to encrypt the source DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>If the DB cluster isn't encrypted, then the restored DB cluster isn't encrypted.</p>
   *             </li>
   *          </ul>
   *
   *          <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that isn't encrypted, then the restore request
   *       is rejected.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <note>
   *             <p>Currently, Backtrack is only supported for Aurora MySQL DB clusters.</p>
   *         </note>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The name of the DB cluster parameter group to associate with this DB cluster.
   *             If this argument is omitted, the default DB cluster parameter group for the specified engine is used.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Specify the Active Directory directory ID to restore the DB cluster in.
   *           The domain must be created prior to this operation.
   *       </p>
   *          <p>
   *         For Amazon Aurora DB clusters, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB cluster.
   *         For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html">Kerberos Authentication</a>
   *         in the <i>Amazon Aurora User Guide</i>.
   *       </p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>
   */
  ScalingConfiguration?: ScalingConfiguration;

  /**
   * <p>The engine mode of the new cluster. Specify <code>provisioned</code> or <code>serverless</code>,
   *       depending on the type of the cluster you are creating. You can create an Aurora Serverless clone
   *       from a provisioned cluster, or a provisioned clone from an Aurora Serverless cluster. To create a clone
   *       that is an Aurora Serverless cluster, the original cluster must be an Aurora Serverless cluster or
   *       an encrypted provisioned cluster.</p>
   */
  EngineMode?: string;
}

export namespace RestoreDBClusterToPointInTimeMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBClusterToPointInTimeMessage): any => ({
    ...obj,
  });
}

export interface RestoreDBClusterToPointInTimeResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterToPointInTimeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBClusterToPointInTimeResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RestoreDBInstanceFromDBSnapshotMessage {
  /**
   * <p>Name of the DB instance to create from the DB snapshot. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 numbers, letters, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The identifier for the DB snapshot to restore from.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *               <p>Must match the identifier of an existing DBSnapshot.</p>
   *             </li>
   *             <li>
   *               <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code>
   *               must be the ARN of the shared DB snapshot.</p>
   *             </li>
   *          </ul>
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>The compute and memory capacity of the Amazon RDS DB instance, for example, <code>db.m4.large</code>.
   *           Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.
   *           For the full list of DB instance classes,
   *           and availability for your engine, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Default: The same DBInstanceClass as the original DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>Default: The same port as the original DB instance</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   */
  Port?: number;

  /**
   * <p>The Availability Zone (AZ) where the DB instance will be created.</p>
   *          <p>Default: A random, system-chosen Availability Zone.</p>
   *          <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   *          <p>Example: <code>us-east-1a</code>
   *          </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The DB subnet group name to use for the new instance.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment.</p>
   *          <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible.</p>
   *          <p>When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC,
   *           and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses,
   *           and that public access is not permitted if the security group assigned to the DB instance doesn't permit it.</p>
   *          <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *          <p>For more information, see <a>CreateDBInstance</a>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>License model information for the restored DB instance.</p>
   *          <p>Default: Same as source.</p>
   *          <p>
   *             Valid values:  <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>The database name for the restored DB instance.</p>
   *          <note>
   *             <p>This parameter doesn't apply to the MySQL, PostgreSQL, or MariaDB engines.</p>
   *          </note>
   */
  DBName?: string;

  /**
   * <p>The database engine to use for the new instance.</p>
   *          <p>Default: The same as source</p>
   *          <p>Constraint: Must be compatible with the engine of the source. For example, you can restore a MariaDB 10.1 DB instance from a MySQL 5.6 snapshot.</p>
   *
   *          <p>Valid Values:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine?: string;

  /**
   * <p>Specifies the amount of provisioned IOPS for the DB instance, expressed in I/O operations per second.
   *           If this parameter isn't specified, the IOPS value is taken from the backup.
   *           If this parameter is set to 0, the new instance is converted to a non-PIOPS instance.
   *           The conversion takes additional time, though your DB instance is available for connections before the conversion starts.
   *       </p>
   *          <p>The provisioned IOPS value must follow the requirements for your database engine.
   *           For more information, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a>
   *           in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Constraints: Must be an integer greater than 1000.</p>
   */
  Iops?: number;

  /**
   * <p>The name of the option group to be used for the restored DB instance.</p>
   *
   *          <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
   */
  OptionGroupName?: string;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *          <p>
   *             Valid values: <code>standard | gp2 | io1</code>
   *          </p>
   *          <p>
   *             If you specify <code>io1</code>, you must also include a value for the
   *             <code>Iops</code> parameter.
   *         </p>
   *          <p>
   *             Default: <code>io1</code> if the <code>Iops</code> parameter
   *             is specified, otherwise <code>gp2</code>
   *          </p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * <p>
   *             A list of EC2 VPC security groups to associate with this DB instance.
   *         </p>
   *         <p>
   *             Default: The default EC2 VPC security group for the DB subnet group's VPC.
   *         </p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>Specify the Active Directory directory ID to restore the DB instance in.
   *            The domain must be created prior to this operation. Currently, only MySQL, Microsoft SQL
   *            Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *            Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  Domain?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access
   *           Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *          <p>For more information about IAM database authentication, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *               IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *         <p>If you do not specify a value for <code>DBParameterGroupName</code>, then the default <code>DBParameterGroup</code>
   *             for the specified DB engine is used.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance.</p>
   *         <p>A <i>CoIP</i> provides local or external connectivity to resources in
   *             your Outpost subnets through your on-premises network. For some use cases, a CoIP can
   *             provide lower latency for connections to the DB instance from outside of its virtual
   *             private cloud (VPC) on your local network.</p>
   *         <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working with Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>For more information about CoIPs, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#ip-addressing">Customer-owned IP addresses</a>
   *             in the <i>Amazon Web Services Outposts User Guide</i>.</p>
   */
  EnableCustomerOwnedIp?: boolean;
}

export namespace RestoreDBInstanceFromDBSnapshotMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBInstanceFromDBSnapshotMessage): any => ({
    ...obj,
  });
}

export interface RestoreDBInstanceFromDBSnapshotResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace RestoreDBInstanceFromDBSnapshotResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBInstanceFromDBSnapshotResult): any => ({
    ...obj,
  });
}

export interface RestoreDBInstanceFromS3Message {
  /**
   * <p>The name of the database to create when the DB instance is created.
   *             Follow the naming rules specified in <code>CreateDBInstance</code>.
   *         </p>
   */
  DBName?: string;

  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.
   *         </p>
   *
   *         <p>Constraints:</p>
   *
   *         <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *
   *         <p>Example: <code>mydbinstance</code>
   *         </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The amount of storage (in gigabytes) to allocate initially for the DB instance.
   *             Follow the allocation rules specified in <code>CreateDBInstance</code>.
   *         </p>
   *
   *         <note>
   *             <p>Be sure to allocate enough memory for your new DB instance
   *                 so that the restore operation can succeed.
   *                 You can also allocate additional memory for future growth.
   *             </p>
   *         </note>
   */
  AllocatedStorage?: number;

  /**
   * <p>The compute and memory capacity of the DB instance,
   *             for example, <code>db.m4.large</code>.
   *             Not all DB instance classes are available in all Amazon Web Services Regions,
   *             or for all database engines.
   *             For the full list of DB instance classes,
   *             and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *         <p>Importing from Amazon S3 isn't supported on the db.t2.micro DB instance class.
   *         </p>
   */
  DBInstanceClass: string | undefined;

  /**
   * <p>The name of the database engine to be used for this instance.
   *         </p>
   *
   *         <p>Valid Values:  <code>mysql</code>
   *         </p>
   */
  Engine: string | undefined;

  /**
   * <p>The name for the master user.
   *         </p>
   *
   *         <p>Constraints:
   *         </p>
   *         <ul>
   *             <li>
   *                <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   */
  MasterUsername?: string;

  /**
   * <p>The password for the master user.
   *             The password can include any printable ASCII character except "/", """, or "@".
   *         </p>
   *
   *         <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>A list of DB security groups to associate with this DB instance.</p>
   *         <p>Default: The default DB security group for the database engine.</p>
   */
  DBSecurityGroups?: string[];

  /**
   * <p>A list of VPC security groups to associate with this DB instance.
   *         </p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>The Availability Zone that the DB instance is created in.
   *             For information about Amazon Web Services Regions and Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions and Availability Zones</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *         <p>Default: A random, system-chosen Availability Zone in the endpoint's Amazon Web Services Region.
   *         </p>
   *         <p>
   *             Example: <code>us-east-1d</code>
   *         </p>
   *         <p>Constraint: The <code>AvailabilityZone</code> parameter can't be specified if the DB instance is a Multi-AZ deployment.
   *             The specified Availability Zone must be in the same Amazon Web Services Region as the current endpoint.
   *         </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A DB subnet group to associate with this DB instance.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The time range each week during which system maintenance can occur,
   *             in Universal Coordinated Time (UTC).
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be in the format <code>ddd:hh24:mi-ddd:hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred backup window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *         <p>If you do not specify a value for <code>DBParameterGroupName</code>, then the default <code>DBParameterGroup</code>
   *             for the specified DB engine is used.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The number of days for which automated backups are retained.
   *             Setting this parameter to a positive number enables backups.
   *             For more information, see <code>CreateDBInstance</code>.
   *         </p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The time range each day
   *             during which automated backups are created
   *             if automated backups are enabled.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">Backup window</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The port number on which the database accepts connections.
   *         </p>
   *         <p>Type: Integer
   *         </p>
   *         <p>Valid Values: <code>1150</code>-<code>65535</code>
   *         </p>
   *         <p>Default: <code>3306</code>
   *         </p>
   */
  Port?: number;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment.
   *             If the DB instance is a Multi-AZ deployment, you can't set the <code>AvailabilityZone</code> parameter.
   *         </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The version number of the database engine to use.
   *             Choose the latest minor version of your database engine.
   *             For information about engine versions, see <code>CreateDBInstance</code>, or call <code>DescribeDBEngineVersions</code>.
   *         </p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically
   *             to the DB instance during the maintenance window. By default, minor engine upgrades
   *             are not applied automatically.
   *         </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The license model for this DB instance.
   *             Use <code>general-public-license</code>.
   *         </p>
   */
  LicenseModel?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second)
   *             to allocate initially for the DB instance.
   *             For information about valid Iops values, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *         </p>
   */
  Iops?: number;

  /**
   * <p>The name of the option group to associate with this DB instance.
   *             If this argument is omitted, the default option group for the specified engine is used.
   *         </p>
   */
  OptionGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible.</p>
   *         <p>When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC,
   *             and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses,
   *             and that public access is not permitted if the security group assigned to the DB instance doesn't permit it.</p>
   *         <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *         <p>For more information, see <a>CreateDBInstance</a>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A list of tags to associate with this DB instance.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the storage type to be associated with the DB instance.
   *         </p>
   *         <p>Valid values: <code>standard</code> | <code>gp2</code> | <code>io1</code>
   *         </p>
   *         <p>If you specify <code>io1</code>,
   *             you must also include a value for the <code>Iops</code> parameter.
   *         </p>
   *         <p>Default: <code>io1</code>
   *             if the <code>Iops</code> parameter is specified;
   *             otherwise <code>gp2</code>
   *         </p>
   */
  StorageType?: string;

  /**
   * <p>A value that indicates whether the new DB instance is encrypted or not.
   *         </p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for an encrypted DB instance.
   *         </p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the Amazon Web Services KMS customer master key (CMK).
   *             To use a CMK in a different Amazon Web Services account, specify the key ARN or alias ARN.</p>
   *         <p>If the <code>StorageEncrypted</code> parameter is enabled,
   *             and you do not specify a value for the <code>KmsKeyId</code> parameter,
   *             then Amazon RDS will use your default CMK.
   *             There is a default CMK for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default CMK for each Amazon Web Services Region.
   *         </p>
   */
  KmsKeyId?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
   *         </p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds,
   *             between points when Enhanced Monitoring metrics are collected for the DB instance.
   *             To disable collecting Enhanced Monitoring metrics, specify 0.
   *         </p>
   *
   *         <p>If <code>MonitoringRoleArn</code> is specified,
   *             then you must also set <code>MonitoringInterval</code> to a value other than 0.
   *         </p>
   *
   *         <p>Valid Values: 0, 1, 5, 10, 15, 30, 60
   *         </p>
   *         <p>Default: <code>0</code>
   *         </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS
   *             to send enhanced monitoring metrics to Amazon CloudWatch Logs.
   *             For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.
   *             For information on creating a monitoring role, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling">Setting Up and Enabling Enhanced Monitoring</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *         <p>If <code>MonitoringInterval</code> is set to a value other than 0,
   *             then you must supply a <code>MonitoringRoleArn</code> value.
   *         </p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *          <p>For more information about IAM database authentication, see
   *          <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *              IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The name of the engine of your source database.
   *         </p>
   *
   *         <p>Valid Values:  <code>mysql</code>
   *         </p>
   */
  SourceEngine: string | undefined;

  /**
   * <p>The version of the database that the backup files were created from.</p>
   *         <p>MySQL versions 5.6 and 5.7 are supported.
   *         </p>
   *         <p>Example: <code>5.6.40</code>
   *          </p>
   */
  SourceEngineVersion: string | undefined;

  /**
   * <p>The name of your Amazon S3 bucket
   *             that contains your database backup file.
   *         </p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>The prefix of your Amazon S3 bucket.
   *         </p>
   */
  S3Prefix?: string;

  /**
   * <p>An Amazon Web Services Identity and Access Management (IAM) role to allow Amazon RDS to access your Amazon S3 bucket.
   *         </p>
   */
  S3IngestionRoleArn: string | undefined;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the DB instance.
   *         </p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon Relational Database Service
   *                     User Guide</i>.
   *         </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of Performance Insights data.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the Amazon Web Services KMS customer master key (CMK).</p>
   *         <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default CMK. There is a default CMK for your Amazon Web Services account.
   *             Your Amazon Web Services account has a different default CMK for each Amazon Web Services Region.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   *         <p>For more information about this setting, including limitations that apply to it, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling">
   *                 Managing capacity automatically with Amazon RDS storage autoscaling</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   */
  MaxAllocatedStorage?: number;
}

export namespace RestoreDBInstanceFromS3Message {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBInstanceFromS3Message): any => ({
    ...obj,
  });
}

export interface RestoreDBInstanceFromS3Result {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace RestoreDBInstanceFromS3Result {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBInstanceFromS3Result): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <code>SourceDBInstanceIdentifier</code>
 *         refers to a DB instance with
 *         <code>BackupRetentionPeriod</code> equal to 0.
 *         </p>
 */
export interface PointInTimeRestoreNotEnabledFault extends __SmithyException, $MetadataBearer {
  name: "PointInTimeRestoreNotEnabledFault";
  $fault: "client";
  message?: string;
}

export namespace PointInTimeRestoreNotEnabledFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PointInTimeRestoreNotEnabledFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RestoreDBInstanceToPointInTimeMessage {
  /**
   * <p>The identifier of the source DB instance from which to restore.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DB instance.</p>
   *             </li>
   *          </ul>
   */
  SourceDBInstanceIdentifier?: string;

  /**
   * <p>The name of the new DB instance to be created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  TargetDBInstanceIdentifier: string | undefined;

  /**
   * <p>The date and time to restore from.</p>
   *          <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be before the latest restorable time for the DB instance</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if the <code>UseLatestRestorableTime</code> parameter is enabled</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>2009-09-07T23:45:00Z</code>
   *          </p>
   */
  RestoreTime?: Date;

  /**
   * <p>
   *           A value that indicates whether the DB instance is restored from the latest backup time. By default, the DB instance
   *           isn't restored from the latest backup time.
   *         </p>
   *          <p>Constraints: Can't be specified if the <code>RestoreTime</code> parameter is provided.</p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * <p>The compute and memory capacity of the Amazon RDS DB instance, for example, <code>db.m4.large</code>.
   *           Not all DB instance classes are available in all Amazon Web Services Regions, or for all database engines.
   *           For the full list of DB instance classes,
   *           and availability for your engine, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Default: The same DBInstanceClass as the original DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB instance.</p>
   */
  Port?: number;

  /**
   * <p>The Availability Zone (AZ) where the DB instance will be created.</p>
   *          <p>Default: A random, system-chosen Availability Zone.</p>
   *          <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   *          <p>Example: <code>us-east-1a</code>
   *          </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The DB subnet group name to use for the new instance.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment.</p>
   *          <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible.</p>
   *          <p>When the DB instance is publicly accessible, its DNS endpoint resolves to the private IP address from within the DB instance's VPC,
   *           and to the public IP address from outside of the DB instance's VPC. Access to the DB instance is ultimately controlled by the security group it uses,
   *           and that public access is not permitted if the security group assigned to the DB instance doesn't permit it.</p>
   *          <p>When the DB instance isn't publicly accessible, it is an internal DB instance with a DNS name that resolves to a private IP address.</p>
   *          <p>For more information, see <a>CreateDBInstance</a>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>License model information for the restored DB instance.</p>
   *          <p>Default: Same as source.</p>
   *          <p>
   *             Valid values:  <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>The database name for the restored DB instance.</p>
   *          <note>
   *             <p>This parameter isn't used for the MySQL or MariaDB engines.</p>
   *          </note>
   */
  DBName?: string;

  /**
   * <p>The database engine to use for the new instance.</p>
   *          <p>Default: The same as source</p>
   *          <p>Constraint: Must be compatible with the engine of the source</p>
   *
   *          <p>Valid Values:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2-cdb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.</p>
   *          <p>Constraints: Must be an integer greater than 1000.</p>
   *          <p>
   *             <b>SQL Server</b>
   *          </p>
   *          <p>Setting the IOPS value for the SQL Server database engine isn't supported.</p>
   */
  Iops?: number;

  /**
   * <p>The name of the option group to be used for the restored DB instance.</p>
   *
   *          <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
   */
  OptionGroupName?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Tag[];

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *          <p>
   *             Valid values: <code>standard | gp2 | io1</code>
   *          </p>
   *          <p>
   *             If you specify <code>io1</code>, you must also include a value for the
   *             <code>Iops</code> parameter.
   *         </p>
   *          <p>
   *             Default: <code>io1</code> if the <code>Iops</code> parameter
   *             is specified, otherwise <code>gp2</code>
   *          </p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * <p>
   *             A list of EC2 VPC security groups to associate with this DB instance.
   *         </p>
   *         <p>
   *             Default: The default EC2 VPC security group for the DB subnet group's VPC.
   *         </p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>Specify the Active Directory directory ID to restore the DB instance in.
   *           The domain must be created prior to this operation. Currently, only MySQL, Microsoft SQL
   *           Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html">
   *           Kerberos Authentication</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>A value that indicates whether to enable mapping of Amazon Web Services Identity and Access
   *           Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *          <p>For more information about IAM database authentication, see
   *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *             IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: string[];

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: ProcessorFeature[];

  /**
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default processor features.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *         <p>If you do not specify a value for <code>DBParameterGroupName</code>, then the default <code>DBParameterGroup</code>
   *                 for the specified DB engine is used.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The resource ID of the source DB instance from which to restore.</p>
   */
  SourceDbiResourceId?: string;

  /**
   * <p>The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   *          <p>For more information about this setting, including limitations that apply to it, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling">
   *               Managing capacity automatically with Amazon RDS storage autoscaling</a>
   *           in the <i>Amazon RDS User Guide</i>.</p>
   */
  MaxAllocatedStorage?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example,
   *             <code>arn:aws:rds:useast-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE</code>.</p>
   */
  SourceDBInstanceAutomatedBackupsArn?: string;

  /**
   * <p>A value that indicates whether to enable a customer-owned IP address (CoIP) for an RDS on Outposts DB instance.</p>
   *         <p>A <i>CoIP</i> provides local or external connectivity to resources in
   *             your Outpost subnets through your on-premises network. For some use cases, a CoIP can
   *             provide lower latency for connections to the DB instance from outside of its virtual
   *             private cloud (VPC) on your local network.</p>
   *         <p>For more information about RDS on Outposts, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html">Working with Amazon RDS on Amazon Web Services Outposts</a>
   *             in the <i>Amazon RDS User Guide</i>.</p>
   *         <p>For more information about CoIPs, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#ip-addressing">Customer-owned IP addresses</a>
   *             in the <i>Amazon Web Services Outposts User Guide</i>.</p>
   */
  EnableCustomerOwnedIp?: boolean;
}

export namespace RestoreDBInstanceToPointInTimeMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBInstanceToPointInTimeMessage): any => ({
    ...obj,
  });
}

export interface RestoreDBInstanceToPointInTimeResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace RestoreDBInstanceToPointInTimeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RestoreDBInstanceToPointInTimeResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RevokeDBSecurityGroupIngressMessage {
  /**
   * <p>The name of the DB security group to revoke ingress from.</p>
   */
  DBSecurityGroupName: string | undefined;

  /**
   * <p>
   *         The IP range to revoke access from.
   *         Must be a valid CIDR range. If <code>CIDRIP</code> is specified,
   *         <code>EC2SecurityGroupName</code>, <code>EC2SecurityGroupId</code> and <code>EC2SecurityGroupOwnerId</code>
   *         can't be provided.
   *         </p>
   */
  CIDRIP?: string;

  /**
   * <p>
   *         The name of the EC2 security group to revoke access from.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.
   *         </p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>
   *         The id of the EC2 security group to revoke access from.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.
   *         </p>
   */
  EC2SecurityGroupId?: string;

  /**
   * <p>
   *         The Amazon Web Services account number of the owner of the EC2 security group
   *         specified in the <code>EC2SecurityGroupName</code> parameter.
   *         The Amazon Web Services access key ID isn't an acceptable value.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.
   *         </p>
   */
  EC2SecurityGroupOwnerId?: string;
}

export namespace RevokeDBSecurityGroupIngressMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeDBSecurityGroupIngressMessage): any => ({
    ...obj,
  });
}

export interface RevokeDBSecurityGroupIngressResult {
  /**
   * <p>Contains the details for an Amazon RDS DB security group.
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSecurityGroups</code> action.
   *       </p>
   */
  DBSecurityGroup?: DBSecurityGroup;
}

export namespace RevokeDBSecurityGroupIngressResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RevokeDBSecurityGroupIngressResult): any => ({
    ...obj,
  });
}

export interface StartActivityStreamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster,
   *             for example, <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies the mode of the database activity stream.
   *             Database events such as a change or access generate an activity stream event.
   *             The database session can handle these events either synchronously or asynchronously.
   *         </p>
   */
  Mode: ActivityStreamMode | string | undefined;

  /**
   * <p>The Amazon Web Services KMS key identifier for encrypting messages in the database activity stream.
   *             The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the Amazon Web Services KMS customer master key (CMK).</p>
   */
  KmsKeyId: string | undefined;

  /**
   * <p>Specifies whether or not the database activity stream is to start as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>Specifies whether the database activity stream includes engine-native audit fields. This option only applies
   *         to an Oracle DB instance. By default, no engine-native audit fields are included.</p>
   */
  EngineNativeAuditFieldsIncluded?: boolean;
}

export namespace StartActivityStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartActivityStreamRequest): any => ({
    ...obj,
  });
}

export interface StartActivityStreamResponse {
  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of messages in the database activity stream.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the Amazon Kinesis data stream to be used for the database activity stream.</p>
   */
  KinesisStreamName?: string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  Status?: ActivityStreamStatus | string;

  /**
   * <p>The mode of the database activity stream.</p>
   */
  Mode?: ActivityStreamMode | string;

  /**
   * <p>Indicates whether or not the database activity stream will start as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>Indicates whether engine-native audit fields are included in the database activity stream.</p>
   */
  EngineNativeAuditFieldsIncluded?: boolean;
}

export namespace StartActivityStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartActivityStreamResponse): any => ({
    ...obj,
  });
}

export interface StartDBClusterMessage {
  /**
   * <p>The DB cluster identifier of the Amazon Aurora DB cluster to be started. This parameter is stored as
   *         a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace StartDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDBClusterMessage): any => ({
    ...obj,
  });
}

export interface StartDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace StartDBClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDBClusterResult): any => ({
    ...obj,
  });
}

export interface StartDBInstanceMessage {
  /**
   * <p>
   *             The user-supplied instance identifier.
   *         </p>
   */
  DBInstanceIdentifier: string | undefined;
}

export namespace StartDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDBInstanceMessage): any => ({
    ...obj,
  });
}

export interface StartDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace StartDBInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDBInstanceResult): any => ({
    ...obj,
  });
}

export interface StartDBInstanceAutomatedBackupsReplicationMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the source DB instance for the replicated automated backups, for example,
   *             <code>arn:aws:rds:us-west-2:123456789012:db:mydatabase</code>.</p>
   */
  SourceDBInstanceArn: string | undefined;

  /**
   * <p>The retention period for the replicated automated backups.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The Amazon Web Services KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the
   *             Amazon Resource Name (ARN) for the KMS encryption key in the destination Amazon Web Services Region, for example,
   *             <code>arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE</code>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A URL that contains a Signature Version 4 signed request for the StartDBInstanceAutomatedBackupsReplication action to be
   *             called in the Amazon Web Services Region of the source DB instance. The presigned URL must be a valid request for the
   *             StartDBInstanceAutomatedBackupsReplication API action that can be executed in the Amazon Web Services Region that contains
   *             the source DB instance.</p>
   */
  PreSignedUrl?: string;
}

export namespace StartDBInstanceAutomatedBackupsReplicationMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDBInstanceAutomatedBackupsReplicationMessage): any => ({
    ...obj,
  });
}

export interface StartDBInstanceAutomatedBackupsReplicationResult {
  /**
   * <p>An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that
   *             existed at the time you deleted the source instance.</p>
   */
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup;
}

export namespace StartDBInstanceAutomatedBackupsReplicationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartDBInstanceAutomatedBackupsReplicationResult): any => ({
    ...obj,
  });
}

/**
 * <p>You can't start an export task that's already running.</p>
 */
export interface ExportTaskAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ExportTaskAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ExportTaskAlreadyExistsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportTaskAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The IAM role requires additional permissions to export to an Amazon S3 bucket.</p>
 */
export interface IamRoleMissingPermissionsFault extends __SmithyException, $MetadataBearer {
  name: "IamRoleMissingPermissionsFault";
  $fault: "client";
  message?: string;
}

export namespace IamRoleMissingPermissionsFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IamRoleMissingPermissionsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The IAM role is missing for exporting to an Amazon S3 bucket.</p>
 */
export interface IamRoleNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "IamRoleNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace IamRoleNotFoundFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IamRoleNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>The export is invalid for exporting to an Amazon S3 bucket.</p>
 */
export interface InvalidExportOnlyFault extends __SmithyException, $MetadataBearer {
  name: "InvalidExportOnlyFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidExportOnlyFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidExportOnlyFault): any => ({
    ...obj,
  });
}

/**
 * <p>The state of the export snapshot is invalid for exporting to an Amazon S3 bucket.</p>
 */
export interface InvalidExportSourceStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidExportSourceStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidExportSourceStateFault {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidExportSourceStateFault): any => ({
    ...obj,
  });
}

export interface StartExportTaskMessage {
  /**
   * <p>A unique identifier for the snapshot export task. This ID isn't an identifier for
   *             the Amazon S3 bucket where the snapshot is to be exported to. </p>
   */
  ExportTaskIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot to export to Amazon S3.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket to export the snapshot to.</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>The name of the IAM role to use for writing to the Amazon S3 bucket
   *             when exporting a snapshot. </p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services KMS customer master key (CMK) to use to encrypt the snapshot exported to Amazon S3. The Amazon Web Services KMS
   *             key identifier is the key ARN, key ID, alias ARN, or alias name for the Amazon Web Services KMS customer master key (CMK).
   *             The caller of this operation must be authorized to
   *             execute the following operations. These can be set in the Amazon Web Services KMS key policy: </p>
   *         <ul>
   *             <li>
   *                <p>GrantOperation.Encrypt</p>
   *             </li>
   *             <li>
   *                <p>GrantOperation.Decrypt</p>
   *             </li>
   *             <li>
   *                <p>GrantOperation.GenerateDataKey</p>
   *             </li>
   *             <li>
   *                <p>GrantOperation.GenerateDataKeyWithoutPlaintext</p>
   *             </li>
   *             <li>
   *                <p>GrantOperation.ReEncryptFrom</p>
   *             </li>
   *             <li>
   *                <p>GrantOperation.ReEncryptTo</p>
   *             </li>
   *             <li>
   *                <p>GrantOperation.CreateGrant</p>
   *             </li>
   *             <li>
   *                <p>GrantOperation.DescribeKey</p>
   *             </li>
   *             <li>
   *                <p>GrantOperation.RetireGrant</p>
   *             </li>
   *          </ul>
   */
  KmsKeyId: string | undefined;

  /**
   * <p>The Amazon S3 bucket prefix to use as the file name and path of the exported snapshot.</p>
   */
  S3Prefix?: string;

  /**
   * <p>The data to be exported from the snapshot.
   *             If this parameter is not provided, all the snapshot data is exported.
   *             Valid values are the following:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>database</code> - Export all the data from a specified database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database.table</code>
   *                   <i>table-name</i> -
   *                 Export a table of the snapshot. This format is valid only for RDS for MySQL, RDS for MariaDB, and Aurora MySQL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database.schema</code>
   *                   <i>schema-name</i> - Export a database schema of the snapshot.
   *                 This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>database.schema.table</code>
   *                   <i>table-name</i> - Export a table of the database schema.
   *                 This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</p>
   *             </li>
   *          </ul>
   */
  ExportOnly?: string[];
}

export namespace StartExportTaskMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartExportTaskMessage): any => ({
    ...obj,
  });
}

export interface StopActivityStreamRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster for the database activity stream.
   *             For example, <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.
   *         </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Specifies whether or not the database activity stream is to stop as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   */
  ApplyImmediately?: boolean;
}

export namespace StopActivityStreamRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopActivityStreamRequest): any => ({
    ...obj,
  });
}

export interface StopActivityStreamResponse {
  /**
   * <p>The Amazon Web Services KMS key identifier used for encrypting messages in the database activity stream.</p>
   *         <p>The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the Amazon Web Services KMS customer master key (CMK).</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the Amazon Kinesis data stream used for the database activity stream.</p>
   */
  KinesisStreamName?: string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  Status?: ActivityStreamStatus | string;
}

export namespace StopActivityStreamResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopActivityStreamResponse): any => ({
    ...obj,
  });
}

export interface StopDBClusterMessage {
  /**
   * <p>The DB cluster identifier of the Amazon Aurora DB cluster to be stopped. This parameter is stored as
   *         a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace StopDBClusterMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDBClusterMessage): any => ({
    ...obj,
  });
}

export interface StopDBClusterResult {
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace StopDBClusterResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDBClusterResult): any => ({
    ...obj,
  });
}

export interface StopDBInstanceMessage {
  /**
   * <p>
   *             The user-supplied instance identifier.
   *         </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>
   *             The user-supplied instance identifier of the DB Snapshot created immediately before the DB instance is stopped.
   *         </p>
   */
  DBSnapshotIdentifier?: string;
}

export namespace StopDBInstanceMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDBInstanceMessage): any => ({
    ...obj,
  });
}

export interface StopDBInstanceResult {
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace StopDBInstanceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDBInstanceResult): any => ({
    ...obj,
  });
}

export interface StopDBInstanceAutomatedBackupsReplicationMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the source DB instance for which to stop replicating automated backups, for example,
   *             <code>arn:aws:rds:us-west-2:123456789012:db:mydatabase</code>.</p>
   */
  SourceDBInstanceArn: string | undefined;
}

export namespace StopDBInstanceAutomatedBackupsReplicationMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDBInstanceAutomatedBackupsReplicationMessage): any => ({
    ...obj,
  });
}

export interface StopDBInstanceAutomatedBackupsReplicationResult {
  /**
   * <p>An automated backup of a DB instance. It consists of system backups, transaction logs, and the database instance properties that
   *             existed at the time you deleted the source instance.</p>
   */
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup;
}

export namespace StopDBInstanceAutomatedBackupsReplicationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopDBInstanceAutomatedBackupsReplicationResult): any => ({
    ...obj,
  });
}
