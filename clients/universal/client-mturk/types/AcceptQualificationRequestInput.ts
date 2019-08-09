import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AcceptQualificationRequestInput shape
 */
export interface AcceptQualificationRequestInput {
  /**
   * <p>The ID of the Qualification request, as returned by the <code>GetQualificationRequests</code> operation.</p>
   */
  QualificationRequestId: string;

  /**
   * <p> The value of the Qualification. You can omit this value if you are using the presence or absence of the Qualification as the basis for a HIT requirement. </p>
   */
  IntegerValue?: number;

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
