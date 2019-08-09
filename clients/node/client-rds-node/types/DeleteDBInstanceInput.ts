import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DeleteDBInstanceInput {
  /**
   * <p>The DB instance identifier for the DB instance to be deleted. This parameter isn't case-sensitive.</p> <p>Constraints:</p> <ul> <li> <p>Must match the name of an existing DB instance.</p> </li> </ul>
   */
  DBInstanceIdentifier: string;

  /**
   * <p>A value that indicates whether to skip the creation of a final DB snapshot before the DB instance is deleted. If skip is specified, no DB snapshot is created. If skip is not specified, a DB snapshot is created before the DB instance is deleted. By default, skip is not specified, and the DB snapshot is created.</p> <p>Note that when a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when skip is specified.</p> <p>Specify skip when deleting a Read Replica.</p> <note> <p>The FinalDBSnapshotIdentifier parameter must be specified if skip is not specified.</p> </note>
   */
  SkipFinalSnapshot?: boolean;

  /**
   * <p> The <code>DBSnapshotIdentifier</code> of the new <code>DBSnapshot</code> created when the <code>SkipFinalSnapshot</code> parameter is disabled. </p> <note> <p>Specifying this parameter and also specifying to skip final DB snapshot creation in SkipFinalShapshot results in an error.</p> </note> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> <li> <p>Can't be specified when deleting a Read Replica.</p> </li> </ul>
   */
  FinalDBSnapshotIdentifier?: string;

  /**
   * <p>A value that indicates whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.</p>
   */
  DeleteAutomatedBackups?: boolean;

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
