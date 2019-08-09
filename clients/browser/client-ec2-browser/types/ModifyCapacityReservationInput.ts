import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyCapacityReservationInput shape
 */
export interface ModifyCapacityReservationInput {
  /**
   * <p>The ID of the Capacity Reservation.</p>
   */
  CapacityReservationId: string;

  /**
   * <p>The number of instances for which to reserve capacity.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. The Capacity Reservation's state changes to <code>expired</code> when it reaches its end date and time.</p> <p>The Capacity Reservation is cancelled within an hour from the specified time. For example, if you specify 5/31/2019, 13:30:55, the Capacity Reservation is guaranteed to end between 13:30:55 and 14:30:55 on 5/31/2019.</p> <p>You must provide an <code>EndDate</code> value if <code>EndDateType</code> is <code>limited</code>. Omit <code>EndDate</code> if <code>EndDateType</code> is <code>unlimited</code>.</p>
   */
  EndDate?: Date | string | number;

  /**
   * <p>Indicates the way in which the Capacity Reservation ends. A Capacity Reservation can have one of the following end types:</p> <ul> <li> <p> <code>unlimited</code> - The Capacity Reservation remains active until you explicitly cancel it. Do not provide an <code>EndDate</code> value if <code>EndDateType</code> is <code>unlimited</code>.</p> </li> <li> <p> <code>limited</code> - The Capacity Reservation expires automatically at a specified date and time. You must provide an <code>EndDate</code> value if <code>EndDateType</code> is <code>limited</code>.</p> </li> </ul>
   */
  EndDateType?: "unlimited" | "limited" | string;

  /**
   * <p>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.</p>
   */
  DryRun?: boolean;

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
