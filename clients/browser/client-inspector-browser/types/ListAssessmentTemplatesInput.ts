import { _AssessmentTemplateFilter } from "./_AssessmentTemplateFilter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListAssessmentTemplatesInput shape
 */
export interface ListAssessmentTemplatesInput {
  /**
   * <p>A list of ARNs that specifies the assessment targets whose assessment templates you want to list.</p>
   */
  assessmentTargetArns?: Array<string> | Iterable<string>;

  /**
   * <p>You can use this parameter to specify a subset of data to be included in the action's response.</p> <p>For a record to match a filter, all specified filter attributes must match. When multiple values are specified for a filter attribute, any of the values can match.</p>
   */
  filter?: _AssessmentTemplateFilter;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the <b>ListAssessmentTemplates</b> action. Subsequent calls to the action fill <b>nextToken</b> in the request with the value of <b>NextToken</b> from the previous response to continue listing data.</p>
   */
  nextToken?: string;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the response. The default value is 10. The maximum value is 500.</p>
   */
  maxResults?: number;

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
