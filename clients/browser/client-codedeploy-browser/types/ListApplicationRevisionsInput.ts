import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Represents the input of a ListApplicationRevisions operation. </p>
 */
export interface ListApplicationRevisionsInput {
  /**
   * <p> The name of an AWS CodeDeploy application associated with the IAM user or AWS account. </p>
   */
  applicationName: string;

  /**
   * <p>The column name to use to sort the list results:</p> <ul> <li> <p>registerTime: Sort by the time the revisions were registered with AWS CodeDeploy.</p> </li> <li> <p>firstUsedTime: Sort by the time the revisions were first used in a deployment.</p> </li> <li> <p>lastUsedTime: Sort by the time the revisions were last used in a deployment.</p> </li> </ul> <p> If not specified or set to null, the results are returned in an arbitrary order. </p>
   */
  sortBy?: "registerTime" | "firstUsedTime" | "lastUsedTime" | string;

  /**
   * <p> The order in which to sort the list results: </p> <ul> <li> <p>ascending: ascending order.</p> </li> <li> <p>descending: descending order.</p> </li> </ul> <p>If not specified, the results are sorted in ascending order.</p> <p>If set to null, the results are sorted in an arbitrary order.</p>
   */
  sortOrder?: "ascending" | "descending" | string;

  /**
   * <p> An Amazon S3 bucket name to limit the search for revisions. </p> <p> If set to null, all of the user's buckets are searched. </p>
   */
  s3Bucket?: string;

  /**
   * <p> A key prefix for the set of Amazon S3 objects to limit the search for revisions. </p>
   */
  s3KeyPrefix?: string;

  /**
   * <p> Whether to list revisions based on whether the revision is the target revision of an deployment group: </p> <ul> <li> <p>include: List revisions that are target revisions of a deployment group.</p> </li> <li> <p>exclude: Do not list revisions that are target revisions of a deployment group.</p> </li> <li> <p>ignore: List all revisions.</p> </li> </ul>
   */
  deployed?: "include" | "exclude" | "ignore" | string;

  /**
   * <p>An identifier returned from the previous <code>ListApplicationRevisions</code> call. It can be used to return the next set of applications in the list.</p>
   */
  nextToken?: string;

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
