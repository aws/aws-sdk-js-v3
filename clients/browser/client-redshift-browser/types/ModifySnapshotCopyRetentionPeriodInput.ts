import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ModifySnapshotCopyRetentionPeriodInput {
  /**
   * <p>The unique identifier of the cluster for which you want to change the retention period for either automated or manual snapshots that are copied to a destination AWS Region.</p> <p>Constraints: Must be the valid name of an existing cluster that has cross-region snapshot copy enabled.</p>
   */
  ClusterIdentifier: string;

  /**
   * <p>The number of days to retain automated snapshots in the destination AWS Region after they are copied from the source AWS Region.</p> <p>By default, this only changes the retention period of copied automated snapshots. </p> <p>If you decrease the retention period for automated snapshots that are copied to a destination AWS Region, Amazon Redshift deletes any existing automated snapshots that were copied to the destination AWS Region and that fall outside of the new retention period.</p> <p>Constraints: Must be at least 1 and no more than 35 for automated snapshots. </p> <p>If you specify the <code>manual</code> option, only newly copied manual snapshots will have the new retention period. </p> <p>If you specify the value of -1 newly copied manual snapshots are retained indefinitely.</p> <p>Constraints: The number of days must be either -1 or an integer between 1 and 3,653 for manual snapshots.</p>
   */
  RetentionPeriod: number;

  /**
   * <p>Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.</p>
   */
  Manual?: boolean;

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
