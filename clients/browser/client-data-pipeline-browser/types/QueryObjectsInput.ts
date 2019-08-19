import { _Query } from "./_Query";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the parameters for QueryObjects.</p>
 */
export interface QueryObjectsInput {
  /**
   * <p>The ID of the pipeline.</p>
   */
  pipelineId: string;

  /**
   * <p>The query that defines the objects to be returned. The <code>Query</code> object can contain a maximum of ten selectors. The conditions in the query are limited to top-level String fields in the object. These filters can be applied to components, instances, and attempts.</p>
   */
  query?: _Query;

  /**
   * <p>Indicates whether the query applies to components or instances. The possible values are: <code>COMPONENT</code>, <code>INSTANCE</code>, and <code>ATTEMPT</code>.</p>
   */
  sphere: string;

  /**
   * <p>The starting point for the results to be returned. For the first call, this value should be empty. As long as there are more results, continue to call <code>QueryObjects</code> with the marker value from the previous call to retrieve the next set of results.</p>
   */
  marker?: string;

  /**
   * <p>The maximum number of object names that <code>QueryObjects</code> will return in a single call. The default value is 100. </p>
   */
  limit?: number;

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
