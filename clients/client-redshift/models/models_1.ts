import {
  AquaConfiguration,
  AquaConfigurationStatus,
  Cluster,
  ClusterSecurityGroup,
  ClusterSubnetGroup,
  EventSubscription,
  Parameter,
  ReservedNode,
  ReservedNodeOffering,
  ScheduledActionType,
  Snapshot,
  TableRestoreStatus,
  Tag,
  UsageLimit,
  UsageLimitBreachAction,
  UsageLimitFeatureType,
} from "./models_0";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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

export namespace DescribeTagsMessage {
  export const filterSensitiveLog = (obj: DescribeTagsMessage): any => ({
    ...obj,
  });
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

export namespace TaggedResource {
  export const filterSensitiveLog = (obj: TaggedResource): any => ({
    ...obj,
  });
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

export namespace TaggedResourceListMessage {
  export const filterSensitiveLog = (obj: TaggedResourceListMessage): any => ({
    ...obj,
  });
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
   *             exceed the value specified in <code>MaxRecords</code>, AWS returns a value in the
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

export namespace DescribeUsageLimitsMessage {
  export const filterSensitiveLog = (obj: DescribeUsageLimitsMessage): any => ({
    ...obj,
  });
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

export namespace UsageLimitList {
  export const filterSensitiveLog = (obj: UsageLimitList): any => ({
    ...obj,
  });
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

export namespace DisableLoggingMessage {
  export const filterSensitiveLog = (obj: DisableLoggingMessage): any => ({
    ...obj,
  });
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

export namespace DisableSnapshotCopyMessage {
  export const filterSensitiveLog = (obj: DisableSnapshotCopyMessage): any => ({
    ...obj,
  });
}

export interface DisableSnapshotCopyResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace DisableSnapshotCopyResult {
  export const filterSensitiveLog = (obj: DisableSnapshotCopyResult): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster already has cross-region snapshot copy disabled.</p>
 */
export interface SnapshotCopyAlreadyDisabledFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotCopyAlreadyDisabledFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotCopyAlreadyDisabledFault {
  export const filterSensitiveLog = (obj: SnapshotCopyAlreadyDisabledFault): any => ({
    ...obj,
  });
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
  BucketName: string | undefined;

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
}

export namespace EnableLoggingMessage {
  export const filterSensitiveLog = (obj: EnableLoggingMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster does not have read bucket or put object permissions on the S3 bucket
 *             specified when enabling logging.</p>
 */
export interface InsufficientS3BucketPolicyFault extends __SmithyException, $MetadataBearer {
  name: "InsufficientS3BucketPolicyFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientS3BucketPolicyFault {
  export const filterSensitiveLog = (obj: InsufficientS3BucketPolicyFault): any => ({
    ...obj,
  });
}

/**
 * <p>The S3 bucket name is invalid. For more information about naming rules, go to
 *                 <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket
 *                 Restrictions and Limitations</a> in the Amazon Simple Storage Service (S3)
 *             Developer Guide.</p>
 */
export interface InvalidS3BucketNameFault extends __SmithyException, $MetadataBearer {
  name: "InvalidS3BucketNameFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidS3BucketNameFault {
  export const filterSensitiveLog = (obj: InvalidS3BucketNameFault): any => ({
    ...obj,
  });
}

/**
 * <p>The string specified for the logging S3 key prefix does not comply with the
 *             documented constraints.</p>
 */
export interface InvalidS3KeyPrefixFault extends __SmithyException, $MetadataBearer {
  name: "InvalidS3KeyPrefixFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidS3KeyPrefixFault {
  export const filterSensitiveLog = (obj: InvalidS3KeyPrefixFault): any => ({
    ...obj,
  });
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
   * <p>The destination AWS Region that you want to copy snapshots to.</p>
   *         <p>Constraints: Must be the name of a valid AWS Region. For more information, see
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
   * <p>The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted
   *             cluster are copied to the destination region.</p>
   */
  SnapshotCopyGrantName?: string;

  /**
   * <p>The number of days to retain newly copied snapshots in the destination AWS Region
   *             after they are copied from the source AWS Region. If the value is -1, the manual
   *             snapshot is retained indefinitely. </p>
   *         <p>The value must be either -1 or an integer between 1 and 3,653.</p>
   */
  ManualSnapshotRetentionPeriod?: number;
}

export namespace EnableSnapshotCopyMessage {
  export const filterSensitiveLog = (obj: EnableSnapshotCopyMessage): any => ({
    ...obj,
  });
}

export interface EnableSnapshotCopyResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace EnableSnapshotCopyResult {
  export const filterSensitiveLog = (obj: EnableSnapshotCopyResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified options are incompatible.</p>
 */
export interface IncompatibleOrderableOptions extends __SmithyException, $MetadataBearer {
  name: "IncompatibleOrderableOptions";
  $fault: "client";
  message?: string;
}

export namespace IncompatibleOrderableOptions {
  export const filterSensitiveLog = (obj: IncompatibleOrderableOptions): any => ({
    ...obj,
  });
}

/**
 * <p>The cluster already has cross-region snapshot copy enabled.</p>
 */
export interface SnapshotCopyAlreadyEnabledFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotCopyAlreadyEnabledFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotCopyAlreadyEnabledFault {
  export const filterSensitiveLog = (obj: SnapshotCopyAlreadyEnabledFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified region is incorrect or does not exist.</p>
 */
export interface UnknownSnapshotCopyRegionFault extends __SmithyException, $MetadataBearer {
  name: "UnknownSnapshotCopyRegionFault";
  $fault: "client";
  message?: string;
}

export namespace UnknownSnapshotCopyRegionFault {
  export const filterSensitiveLog = (obj: UnknownSnapshotCopyRegionFault): any => ({
    ...obj,
  });
}

/**
 * <p>The authorization for this endpoint can't be found.</p>
 */
export interface EndpointAuthorizationNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "EndpointAuthorizationNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace EndpointAuthorizationNotFoundFault {
  export const filterSensitiveLog = (obj: EndpointAuthorizationNotFoundFault): any => ({
    ...obj,
  });
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
  DbName?: string;

  /**
   * <p>The unique identifier of the cluster that contains the database for which your are
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

export namespace GetClusterCredentialsMessage {
  export const filterSensitiveLog = (obj: GetClusterCredentialsMessage): any => ({
    ...obj,
  });
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

export namespace GetReservedNodeExchangeOfferingsInputMessage {
  export const filterSensitiveLog = (obj: GetReservedNodeExchangeOfferingsInputMessage): any => ({
    ...obj,
  });
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

export namespace GetReservedNodeExchangeOfferingsOutputMessage {
  export const filterSensitiveLog = (obj: GetReservedNodeExchangeOfferingsOutputMessage): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the allowed number of table restore requests. Wait for your
 *             current table restore requests to complete before making a new request.</p>
 */
export interface InProgressTableRestoreQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "InProgressTableRestoreQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace InProgressTableRestoreQuotaExceededFault {
  export const filterSensitiveLog = (obj: InProgressTableRestoreQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>The restore is invalid.</p>
 */
export interface InvalidRestoreFault extends __SmithyException, $MetadataBearer {
  name: "InvalidRestoreFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidRestoreFault {
  export const filterSensitiveLog = (obj: InvalidRestoreFault): any => ({
    ...obj,
  });
}

/**
 * <p>The value specified for the <code>sourceDatabaseName</code>,
 *                 <code>sourceSchemaName</code>, or <code>sourceTableName</code> parameter, or a
 *             combination of these, doesn't exist in the snapshot.</p>
 */
export interface InvalidTableRestoreArgumentFault extends __SmithyException, $MetadataBearer {
  name: "InvalidTableRestoreArgumentFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidTableRestoreArgumentFault {
  export const filterSensitiveLog = (obj: InvalidTableRestoreArgumentFault): any => ({
    ...obj,
  });
}

export interface ModifyAquaInputMessage {
  /**
   * <p>The identifier of the cluster to be modified.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The new value of AQUA configuration status. Possible values include the following.</p>
   *         <ul>
   *             <li>
   *                <p>enabled - Use AQUA if it is available for the current AWS Region and Amazon Redshift node type.</p>
   *             </li>
   *             <li>
   *                <p>disabled - Don't use AQUA. </p>
   *             </li>
   *             <li>
   *                <p>auto - Amazon Redshift determines whether to use AQUA.</p>
   *             </li>
   *          </ul>
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | string;
}

export namespace ModifyAquaInputMessage {
  export const filterSensitiveLog = (obj: ModifyAquaInputMessage): any => ({
    ...obj,
  });
}

export interface ModifyAquaOutputMessage {
  /**
   * <p>The updated AQUA configuration of the cluster. </p>
   */
  AquaConfiguration?: AquaConfiguration;
}

export namespace ModifyAquaOutputMessage {
  export const filterSensitiveLog = (obj: ModifyAquaOutputMessage): any => ({
    ...obj,
  });
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
   * <p>The new password for the cluster master user. This change is asynchronously applied
   *             as soon as possible. Between the time of the request and the completion of the request,
   *             the <code>MasterUserPassword</code> element exists in the
   *                 <code>PendingModifiedValues</code> element of the operation response. </p>
   *         <note>
   *             <p>Operations never return the password, so this operation provides a way to
   *                 regain access to the master user account for a cluster if the password is
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
   *                 <p>Can be any printable ASCII character (ASCII code 33 to 126) except '
   *                     (single quote), " (double quote), \, /, @, or space.</p>
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
   *                <p>Must be unique for all clusters within an AWS account.</p>
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
   * <p>The AWS Key Management Service (KMS) key ID of the encryption key that you want to use
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

export namespace ModifyClusterMessage {
  export const filterSensitiveLog = (obj: ModifyClusterMessage): any => ({
    ...obj,
  });
}

export interface ModifyClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifyClusterResult {
  export const filterSensitiveLog = (obj: ModifyClusterResult): any => ({
    ...obj,
  });
}

/**
 * <p>The number of tables in the cluster exceeds the limit for the requested new cluster
 *             node type. </p>
 */
export interface TableLimitExceededFault extends __SmithyException, $MetadataBearer {
  name: "TableLimitExceededFault";
  $fault: "client";
  message?: string;
}

export namespace TableLimitExceededFault {
  export const filterSensitiveLog = (obj: TableLimitExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p>A request option was specified that is not supported.</p>
 */
export interface UnsupportedOptionFault extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOptionFault";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedOptionFault {
  export const filterSensitiveLog = (obj: UnsupportedOptionFault): any => ({
    ...obj,
  });
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

export namespace ModifyClusterDbRevisionMessage {
  export const filterSensitiveLog = (obj: ModifyClusterDbRevisionMessage): any => ({
    ...obj,
  });
}

export interface ModifyClusterDbRevisionResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifyClusterDbRevisionResult {
  export const filterSensitiveLog = (obj: ModifyClusterDbRevisionResult): any => ({
    ...obj,
  });
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
   *             Amazon Resource Name (ARN) format. You can associate up to 10 IAM roles with a single
   *             cluster in a single request.</p>
   */
  AddIamRoles?: string[];

  /**
   * <p>Zero or more IAM roles in ARN format to disassociate from the cluster. You can
   *             disassociate up to 10 IAM roles from a single cluster in a single request.</p>
   */
  RemoveIamRoles?: string[];
}

export namespace ModifyClusterIamRolesMessage {
  export const filterSensitiveLog = (obj: ModifyClusterIamRolesMessage): any => ({
    ...obj,
  });
}

export interface ModifyClusterIamRolesResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifyClusterIamRolesResult {
  export const filterSensitiveLog = (obj: ModifyClusterIamRolesResult): any => ({
    ...obj,
  });
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

export namespace ModifyClusterMaintenanceMessage {
  export const filterSensitiveLog = (obj: ModifyClusterMaintenanceMessage): any => ({
    ...obj,
  });
}

export interface ModifyClusterMaintenanceResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifyClusterMaintenanceResult {
  export const filterSensitiveLog = (obj: ModifyClusterMaintenanceResult): any => ({
    ...obj,
  });
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

export namespace ModifyClusterParameterGroupMessage {
  export const filterSensitiveLog = (obj: ModifyClusterParameterGroupMessage): any => ({
    ...obj,
  });
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

export namespace ModifyClusterSnapshotMessage {
  export const filterSensitiveLog = (obj: ModifyClusterSnapshotMessage): any => ({
    ...obj,
  });
}

export interface ModifyClusterSnapshotResult {
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace ModifyClusterSnapshotResult {
  export const filterSensitiveLog = (obj: ModifyClusterSnapshotResult): any => ({
    ...obj,
  });
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

export namespace ModifyClusterSnapshotScheduleMessage {
  export const filterSensitiveLog = (obj: ModifyClusterSnapshotScheduleMessage): any => ({
    ...obj,
  });
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

export namespace ModifyClusterSubnetGroupMessage {
  export const filterSensitiveLog = (obj: ModifyClusterSubnetGroupMessage): any => ({
    ...obj,
  });
}

export interface ModifyClusterSubnetGroupResult {
  /**
   * <p>Describes a subnet group.</p>
   */
  ClusterSubnetGroup?: ClusterSubnetGroup;
}

export namespace ModifyClusterSubnetGroupResult {
  export const filterSensitiveLog = (obj: ModifyClusterSubnetGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>A specified subnet is already in use by another cluster.</p>
 */
export interface SubnetAlreadyInUse extends __SmithyException, $MetadataBearer {
  name: "SubnetAlreadyInUse";
  $fault: "client";
  message?: string;
}

export namespace SubnetAlreadyInUse {
  export const filterSensitiveLog = (obj: SubnetAlreadyInUse): any => ({
    ...obj,
  });
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

export namespace ModifyEndpointAccessMessage {
  export const filterSensitiveLog = (obj: ModifyEndpointAccessMessage): any => ({
    ...obj,
  });
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
   *             AWS account. You must specify a source type in order to specify source IDs.</p>
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
   *         <p>Values: configuration, management, monitoring, security</p>
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

export namespace ModifyEventSubscriptionMessage {
  export const filterSensitiveLog = (obj: ModifyEventSubscriptionMessage): any => ({
    ...obj,
  });
}

export interface ModifyEventSubscriptionResult {
  /**
   * <p>Describes event subscriptions.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace ModifyEventSubscriptionResult {
  export const filterSensitiveLog = (obj: ModifyEventSubscriptionResult): any => ({
    ...obj,
  });
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

export namespace ModifyScheduledActionMessage {
  export const filterSensitiveLog = (obj: ModifyScheduledActionMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifySnapshotCopyRetentionPeriodMessage {
  /**
   * <p>The unique identifier of the cluster for which you want to change the retention
   *             period for either automated or manual snapshots that are copied to a destination AWS
   *             Region.</p>
   *         <p>Constraints: Must be the valid name of an existing cluster that has cross-region
   *             snapshot copy enabled.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The number of days to retain automated snapshots in the destination AWS Region
   *             after they are copied from the source AWS Region.</p>
   *         <p>By default, this only changes the retention period of copied automated snapshots. </p>
   *         <p>If you decrease the retention period for automated snapshots that are copied to a
   *             destination AWS Region, Amazon Redshift deletes any existing automated snapshots that were
   *             copied to the destination AWS Region and that fall outside of the new retention
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

export namespace ModifySnapshotCopyRetentionPeriodMessage {
  export const filterSensitiveLog = (obj: ModifySnapshotCopyRetentionPeriodMessage): any => ({
    ...obj,
  });
}

export interface ModifySnapshotCopyRetentionPeriodResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ModifySnapshotCopyRetentionPeriodResult {
  export const filterSensitiveLog = (obj: ModifySnapshotCopyRetentionPeriodResult): any => ({
    ...obj,
  });
}

/**
 * <p>Cross-region snapshot copy was temporarily disabled. Try your request
 *             again.</p>
 */
export interface SnapshotCopyDisabledFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotCopyDisabledFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotCopyDisabledFault {
  export const filterSensitiveLog = (obj: SnapshotCopyDisabledFault): any => ({
    ...obj,
  });
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

export namespace ModifySnapshotScheduleMessage {
  export const filterSensitiveLog = (obj: ModifySnapshotScheduleMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The specified snapshot schedule is already being updated.</p>
 */
export interface SnapshotScheduleUpdateInProgressFault extends __SmithyException, $MetadataBearer {
  name: "SnapshotScheduleUpdateInProgressFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotScheduleUpdateInProgressFault {
  export const filterSensitiveLog = (obj: SnapshotScheduleUpdateInProgressFault): any => ({
    ...obj,
  });
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

export namespace ModifyUsageLimitMessage {
  export const filterSensitiveLog = (obj: ModifyUsageLimitMessage): any => ({
    ...obj,
  });
}

export interface PauseClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace PauseClusterResult {
  export const filterSensitiveLog = (obj: PauseClusterResult): any => ({
    ...obj,
  });
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

export namespace PurchaseReservedNodeOfferingMessage {
  export const filterSensitiveLog = (obj: PurchaseReservedNodeOfferingMessage): any => ({
    ...obj,
  });
}

export interface PurchaseReservedNodeOfferingResult {
  /**
   * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node
   *             offerings. </p>
   */
  ReservedNode?: ReservedNode;
}

export namespace PurchaseReservedNodeOfferingResult {
  export const filterSensitiveLog = (obj: PurchaseReservedNodeOfferingResult): any => ({
    ...obj,
  });
}

/**
 * <p>Request would exceed the user's compute node quota.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 */
export interface ReservedNodeQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ReservedNodeQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedNodeQuotaExceededFault {
  export const filterSensitiveLog = (obj: ReservedNodeQuotaExceededFault): any => ({
    ...obj,
  });
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

export namespace RebootClusterMessage {
  export const filterSensitiveLog = (obj: RebootClusterMessage): any => ({
    ...obj,
  });
}

export interface RebootClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace RebootClusterResult {
  export const filterSensitiveLog = (obj: RebootClusterResult): any => ({
    ...obj,
  });
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

export namespace ResetClusterParameterGroupMessage {
  export const filterSensitiveLog = (obj: ResetClusterParameterGroupMessage): any => ({
    ...obj,
  });
}

export interface ResizeClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ResizeClusterResult {
  export const filterSensitiveLog = (obj: ResizeClusterResult): any => ({
    ...obj,
  });
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
   *                <p>Must be unique for all clusters within an AWS account.</p>
   *             </li>
   *          </ul>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of the snapshot from which to create the new cluster. This parameter isn't
   *             case sensitive.</p>
   *         <p>Example: <code>my-snapshot-id</code>
   *         </p>
   */
  SnapshotIdentifier: string | undefined;

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
   * <p>The AWS customer account used to create or copy the snapshot. Required if you are
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
   * <p>The elastic IP (EIP) address for the cluster.</p>
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
   * <p>The AWS Key Management Service (KMS) key ID of the encryption key that you want to
   *             use to encrypt data in the cluster that you restore from a shared snapshot.</p>
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
   * <p>A list of AWS Identity and Access Management (IAM) roles that can be used by the
   *             cluster to access other AWS services. You must supply the IAM roles in their Amazon
   *             Resource Name (ARN) format. You can supply up to 10 IAM roles in a single
   *             request.</p>
   *         <p>A cluster can have up to 10 IAM roles associated at any time.</p>
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
   * <p>The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored. Possible values include the following.</p>
   *         <ul>
   *             <li>
   *                <p>enabled - Use AQUA if it is available for the current AWS Region and Amazon Redshift node type.</p>
   *             </li>
   *             <li>
   *                <p>disabled - Don't use AQUA. </p>
   *             </li>
   *             <li>
   *                <p>auto - Amazon Redshift determines whether to use AQUA.</p>
   *             </li>
   *          </ul>
   */
  AquaConfigurationStatus?: AquaConfigurationStatus | string;
}

export namespace RestoreFromClusterSnapshotMessage {
  export const filterSensitiveLog = (obj: RestoreFromClusterSnapshotMessage): any => ({
    ...obj,
  });
}

export interface RestoreFromClusterSnapshotResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace RestoreFromClusterSnapshotResult {
  export const filterSensitiveLog = (obj: RestoreFromClusterSnapshotResult): any => ({
    ...obj,
  });
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

export namespace RestoreTableFromClusterSnapshotMessage {
  export const filterSensitiveLog = (obj: RestoreTableFromClusterSnapshotMessage): any => ({
    ...obj,
  });
}

export interface RestoreTableFromClusterSnapshotResult {
  /**
   * <p>Describes the status of a <a>RestoreTableFromClusterSnapshot</a>
   *             operation.</p>
   */
  TableRestoreStatus?: TableRestoreStatus;
}

export namespace RestoreTableFromClusterSnapshotResult {
  export const filterSensitiveLog = (obj: RestoreTableFromClusterSnapshotResult): any => ({
    ...obj,
  });
}

export interface ResumeClusterResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace ResumeClusterResult {
  export const filterSensitiveLog = (obj: ResumeClusterResult): any => ({
    ...obj,
  });
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
   * <p>The AWS account number of the owner of the security group specified in the
   *                 <code>EC2SecurityGroupName</code> parameter. The AWS access key ID is not an
   *             acceptable value. If <code>EC2SecurityGroupOwnerId</code> is specified,
   *                 <code>EC2SecurityGroupName</code> must also be provided. and <code>CIDRIP</code>
   *             cannot be provided. </p>
   *         <p>Example: <code>111122223333</code>
   *         </p>
   */
  EC2SecurityGroupOwnerId?: string;
}

export namespace RevokeClusterSecurityGroupIngressMessage {
  export const filterSensitiveLog = (obj: RevokeClusterSecurityGroupIngressMessage): any => ({
    ...obj,
  });
}

export interface RevokeClusterSecurityGroupIngressResult {
  /**
   * <p>Describes a security group.</p>
   */
  ClusterSecurityGroup?: ClusterSecurityGroup;
}

export namespace RevokeClusterSecurityGroupIngressResult {
  export const filterSensitiveLog = (obj: RevokeClusterSecurityGroupIngressResult): any => ({
    ...obj,
  });
}

export interface RevokeEndpointAccessMessage {
  /**
   * <p>The cluster to revoke access from.</p>
   */
  ClusterIdentifier?: string;

  /**
   * <p>The AWS account ID whose access is to be revoked.</p>
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

export namespace RevokeEndpointAccessMessage {
  export const filterSensitiveLog = (obj: RevokeEndpointAccessMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RevokeSnapshotAccessMessage {
  /**
   * <p>The identifier of the snapshot that the account can no longer access.</p>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The identifier of the cluster the snapshot was created from. This parameter is
   *             required if your IAM user has a policy containing a snapshot resource element that
   *             specifies anything other than * for the cluster name.</p>
   */
  SnapshotClusterIdentifier?: string;

  /**
   * <p>The identifier of the AWS customer account that can no longer restore the specified
   *             snapshot.</p>
   */
  AccountWithRestoreAccess: string | undefined;
}

export namespace RevokeSnapshotAccessMessage {
  export const filterSensitiveLog = (obj: RevokeSnapshotAccessMessage): any => ({
    ...obj,
  });
}

export interface RevokeSnapshotAccessResult {
  /**
   * <p>Describes a snapshot.</p>
   */
  Snapshot?: Snapshot;
}

export namespace RevokeSnapshotAccessResult {
  export const filterSensitiveLog = (obj: RevokeSnapshotAccessResult): any => ({
    ...obj,
  });
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

export namespace RotateEncryptionKeyMessage {
  export const filterSensitiveLog = (obj: RotateEncryptionKeyMessage): any => ({
    ...obj,
  });
}

export interface RotateEncryptionKeyResult {
  /**
   * <p>Describes a cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace RotateEncryptionKeyResult {
  export const filterSensitiveLog = (obj: RotateEncryptionKeyResult): any => ({
    ...obj,
  });
}
