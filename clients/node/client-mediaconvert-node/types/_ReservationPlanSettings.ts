/**
 * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
 */
export interface _ReservationPlanSettings {
  /**
   * The length of the term of your reserved queue pricing plan commitment.
   */
  Commitment: "ONE_YEAR" | string;

  /**
   * Specifies whether the term of your reserved queue pricing plan is automatically extended (AUTO_RENEW) or expires (EXPIRE) at the end of the term. When your term is auto renewed, you extend your commitment by 12 months from the auto renew date. You can cancel this commitment.
   */
  RenewalType: "AUTO_RENEW" | "EXPIRE" | string;

  /**
   * Specifies the number of reserved transcode slots (RTS) for this queue. The number of RTS determines how many jobs the queue can process in parallel; each RTS can process one job at a time. You can't decrease the number of RTS in your reserved queue. You can increase the number of RTS by extending your existing commitment with a new 12-month commitment for the larger number. The new commitment begins when you purchase the additional capacity. You can't cancel your commitment or revert to your original commitment after you increase the capacity.
   */
  ReservedSlots: number;
}

export type _UnmarshalledReservationPlanSettings = _ReservationPlanSettings;
