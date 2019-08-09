import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface GetMinuteUsageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Estimated number of minutes remaining for an account, specific to the month being requested.</p>
   */
  estimatedMinutesRemaining?: number;

  /**
   * <p>Returns whether or not an account has signed up for the reserved minutes pricing plan, specific to the month being requested.</p>
   */
  isReservedMinutesCustomer?: boolean;

  /**
   * <p>Total number of reserved minutes allocated, specific to the month being requested.</p>
   */
  totalReservedMinuteAllocation?: number;

  /**
   * <p>Total scheduled minutes for an account, specific to the month being requested.</p>
   */
  totalScheduledMinutes?: number;

  /**
   * <p>Upcoming minutes scheduled for an account, specific to the month being requested.</p>
   */
  upcomingMinutesScheduled?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
