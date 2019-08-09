import { _ReservationPlanSettings } from "./_ReservationPlanSettings";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateQueueInput shape
 */
export interface CreateQueueInput {
  /**
   * Optional. A description of the queue that you are creating.
   */
  Description?: string;

  /**
   * The name of the queue that you are creating.
   */
  Name: string;

  /**
   * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. When you use the API to create a queue, the default is on-demand.
   */
  PricingPlan?: "ON_DEMAND" | "RESERVED" | string;

  /**
   * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
   */
  ReservationPlanSettings?: _ReservationPlanSettings;

  /**
   * The tags that you want to add to the resource. You can tag resources with a key-value pair or with only a key.
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

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
