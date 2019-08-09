import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action.</p>
 */
export interface BacktrackDBClusterOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Contains the backtrack identifier.</p>
   */
  BacktrackIdentifier?: string;

  /**
   * <p>The timestamp of the time to which the DB cluster was backtracked.</p>
   */
  BacktrackTo?: Date;

  /**
   * <p>The timestamp of the time from which the DB cluster was backtracked.</p>
   */
  BacktrackedFrom?: Date;

  /**
   * <p>The timestamp of the time at which the backtrack was requested.</p>
   */
  BacktrackRequestCreationTime?: Date;

  /**
   * <p>The status of the backtrack. This property returns one of the following values:</p> <ul> <li> <p> <code>applying</code> - The backtrack is currently being applied to or rolled back from the DB cluster.</p> </li> <li> <p> <code>completed</code> - The backtrack has successfully been applied to or rolled back from the DB cluster.</p> </li> <li> <p> <code>failed</code> - An error occurred while the backtrack was applied to or rolled back from the DB cluster.</p> </li> <li> <p> <code>pending</code> - The backtrack is currently pending application to or rollback from the DB cluster.</p> </li> </ul>
   */
  Status?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
