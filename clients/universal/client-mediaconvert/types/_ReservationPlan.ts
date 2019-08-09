/**
 * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
 */
export interface _ReservationPlan {
  /**
   * The length of the term of your reserved queue pricing plan commitment.
   */
  Commitment?: "ONE_YEAR" | string;

  /**
   * The timestamp in epoch seconds for when the current pricing plan term for this reserved queue expires.
   */
  ExpiresAt?: Date | string | number;

  /**
   * The timestamp in epoch seconds for when you set up the current pricing plan for this reserved queue.
   */
  PurchasedAt?: Date | string | number;

  /**
   * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term.
   */
  RenewalType?: "AUTO_RENEW" | "EXPIRE" | string;

  /**
   * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. When you increase this number, you extend your existing commitment with a new 12-month commitment for a larger number of RTS. The new commitment begins when you purchase the additional capacity. You can't decrease the number of RTS in your reserved queue.
   */
  ReservedSlots?: number;

  /**
   * Specifies whether the pricing plan for your reserved queue is ACTIVE or EXPIRED.
   */
  Status?: "ACTIVE" | "EXPIRED" | string;
}

export interface _UnmarshalledReservationPlan extends _ReservationPlan {
  /**
   * The timestamp in epoch seconds for when the current pricing plan term for this reserved queue expires.
   */
  ExpiresAt?: Date;

  /**
   * The timestamp in epoch seconds for when you set up the current pricing plan for this reserved queue.
   */
  PurchasedAt?: Date;
}
