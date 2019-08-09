/**
 * <p>At least one delegate must be associated to the resource to disable automatic replies from the resource.</p>
 */
export interface _BookingOptions {
  /**
   * <p>The resource's ability to automatically reply to requests. If disabled, delegates must be associated to the resource.</p>
   */
  AutoAcceptRequests?: boolean;

  /**
   * <p>The resource's ability to automatically decline any recurring requests.</p>
   */
  AutoDeclineRecurringRequests?: boolean;

  /**
   * <p>The resource's ability to automatically decline any conflicting requests.</p>
   */
  AutoDeclineConflictingRequests?: boolean;
}

export type _UnmarshalledBookingOptions = _BookingOptions;
