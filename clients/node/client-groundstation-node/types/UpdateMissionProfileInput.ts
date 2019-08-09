import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface UpdateMissionProfileInput {
  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  contactPostPassDurationSeconds?: number;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  contactPrePassDurationSeconds?: number;

  /**
   * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a from <code>Config</code> and a to
   *          <code>Config</code>.</p>
   */
  dataflowEdges?:
    | Array<Array<string> | Iterable<string>>
    | Iterable<Array<string> | Iterable<string>>;

  /**
   * <p>Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</p>
   */
  minimumViableContactDurationSeconds?: number;

  /**
   * <p>ID of a mission profile.</p>
   */
  missionProfileId: string;

  /**
   * <p>Name of a mission profile.</p>
   */
  name?: string;

  /**
   * <p>ARN of a tracking <code>Config</code>.</p>
   */
  trackingConfigArn?: string;

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
