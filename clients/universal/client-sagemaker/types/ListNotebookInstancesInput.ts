import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListNotebookInstancesInput shape
 */
export interface ListNotebookInstancesInput {
  /**
   * <p> If the previous call to the <code>ListNotebookInstances</code> is truncated, the response includes a <code>NextToken</code>. You can use this token in your subsequent <code>ListNotebookInstances</code> request to fetch the next set of notebook instances. </p> <note> <p>You might specify a filter or a sort order in your request. When response is truncated, you must use the same values for the filer and sort order in the next request. </p> </note>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of notebook instances to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The field to sort results by. The default is <code>Name</code>.</p>
   */
  SortBy?: "Name" | "CreationTime" | "Status" | string;

  /**
   * <p>The sort order for results. </p>
   */
  SortOrder?: "Ascending" | "Descending" | string;

  /**
   * <p>A string in the notebook instances' name. This filter returns only notebook instances whose name contains the specified string.</p>
   */
  NameContains?: string;

  /**
   * <p>A filter that returns only notebook instances that were created before the specified time (timestamp). </p>
   */
  CreationTimeBefore?: Date | string | number;

  /**
   * <p>A filter that returns only notebook instances that were created after the specified time (timestamp).</p>
   */
  CreationTimeAfter?: Date | string | number;

  /**
   * <p>A filter that returns only notebook instances that were modified before the specified time (timestamp).</p>
   */
  LastModifiedTimeBefore?: Date | string | number;

  /**
   * <p>A filter that returns only notebook instances that were modified after the specified time (timestamp).</p>
   */
  LastModifiedTimeAfter?: Date | string | number;

  /**
   * <p>A filter that returns only notebook instances with the specified status.</p>
   */
  StatusEquals?:
    | "Pending"
    | "InService"
    | "Stopping"
    | "Stopped"
    | "Failed"
    | "Deleting"
    | "Updating"
    | string;

  /**
   * <p>A string in the name of a notebook instances lifecycle configuration associated with this notebook instance. This filter returns only notebook instances associated with a lifecycle configuration with a name that contains the specified string.</p>
   */
  NotebookInstanceLifecycleConfigNameContains?: string;

  /**
   * <p>A string in the name or URL of a Git repository associated with this notebook instance. This filter returns only notebook instances associated with a git repository with a name that contains the specified string.</p>
   */
  DefaultCodeRepositoryContains?: string;

  /**
   * <p>A filter that returns only notebook instances with associated with the specified git repository.</p>
   */
  AdditionalCodeRepositoryEquals?: string;

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
