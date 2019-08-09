import { _AwsSecurityFindingFilters } from "./_AwsSecurityFindingFilters";
import { _NoteUpdate } from "./_NoteUpdate";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFindingsInput shape
 */
export interface UpdateFindingsInput {
  /**
   * <p>A collection of attributes that specify which findings you want to update.</p>
   */
  Filters: _AwsSecurityFindingFilters;

  /**
   * <p>The updated note for the finding.</p>
   */
  Note?: _NoteUpdate;

  /**
   * <p>The updated record state for the finding.</p>
   */
  RecordState?: "ACTIVE" | "ARCHIVED" | string;

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
