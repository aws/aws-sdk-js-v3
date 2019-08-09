import { _SuggestionQuery } from "./_SuggestionQuery";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSearchSuggestionsInput shape
 */
export interface GetSearchSuggestionsInput {
  /**
   * <p>The name of the Amazon SageMaker resource to Search for. The only valid <code>Resource</code> value is <code>TrainingJob</code>.</p>
   */
  Resource: "TrainingJob" | string;

  /**
   * <p>Limits the property names that are included in the response.</p>
   */
  SuggestionQuery?: _SuggestionQuery;

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
