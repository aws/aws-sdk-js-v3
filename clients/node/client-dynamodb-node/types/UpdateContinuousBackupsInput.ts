import { _PointInTimeRecoverySpecification } from "./_PointInTimeRecoverySpecification";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateContinuousBackupsInput shape
 */
export interface UpdateContinuousBackupsInput {
  /**
   * <p>The name of the table.</p>
   */
  TableName: string;

  /**
   * <p>Represents the settings used to enable point in time recovery.</p>
   */
  PointInTimeRecoverySpecification: _PointInTimeRecoverySpecification;

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
