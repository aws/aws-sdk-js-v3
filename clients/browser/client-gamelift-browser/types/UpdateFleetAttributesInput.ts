import { _ResourceCreationLimitPolicy } from "./_ResourceCreationLimitPolicy";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input for a request action.</p>
 */
export interface UpdateFleetAttributesInput {
  /**
   * <p>Unique identifier for a fleet to update attribute metadata for.</p>
   */
  FleetId: string;

  /**
   * <p>Descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>Human-readable description of a fleet.</p>
   */
  Description?: string;

  /**
   * <p>Game session protection policy to apply to all new instances created in this fleet. Instances that already exist are not affected. You can set protection for individual instances using <a>UpdateGameSession</a>.</p> <ul> <li> <p> <b>NoProtection</b> -- The game session can be terminated during a scale-down event.</p> </li> <li> <p> <b>FullProtection</b> -- If the game session is in an <code>ACTIVE</code> status, it cannot be terminated during a scale-down event.</p> </li> </ul>
   */
  NewGameSessionProtectionPolicy?: "NoProtection" | "FullProtection" | string;

  /**
   * <p>Policy that limits the number of game sessions an individual player can create over a span of time. </p>
   */
  ResourceCreationLimitPolicy?: _ResourceCreationLimitPolicy;

  /**
   * <p>Names of metric groups to include this fleet in. Amazon CloudWatch uses a fleet metric group is to aggregate metrics from multiple fleets. Use an existing metric group name to add this fleet to the group. Or use a new name to create a new metric group. A fleet can only be included in one metric group at a time.</p>
   */
  MetricGroups?: Array<string> | Iterable<string>;

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
