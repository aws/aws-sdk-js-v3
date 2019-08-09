import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteRelationalDatabaseInput shape
 */
export interface DeleteRelationalDatabaseInput {
  /**
   * <p>The name of the database that you are deleting.</p>
   */
  relationalDatabaseName: string;

  /**
   * <p>Determines whether a final database snapshot is created before your database is deleted. If <code>true</code> is specified, no database snapshot is created. If <code>false</code> is specified, a database snapshot is created before your database is deleted.</p> <p>You must specify the <code>final relational database snapshot name</code> parameter if the <code>skip final snapshot</code> parameter is <code>false</code>.</p> <p>Default: <code>false</code> </p>
   */
  skipFinalSnapshot?: boolean;

  /**
   * <p>The name of the database snapshot created if <code>skip final snapshot</code> is <code>false</code>, which is the default value for that parameter.</p> <note> <p>Specifying this parameter and also specifying the <code>skip final snapshot</code> parameter to <code>true</code> results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p> </li> <li> <p>The first and last character must be a letter or number.</p> </li> </ul>
   */
  finalRelationalDatabaseSnapshotName?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
