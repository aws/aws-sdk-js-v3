import {
  _ReservationPlan,
  _UnmarshalledReservationPlan
} from "./_ReservationPlan";

/**
 * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
 */
export interface _Queue {
  /**
   * An identifier for this resource that is unique within all of AWS.
   */
  Arn?: string;

  /**
   * The timestamp in epoch seconds for when you created the queue.
   */
  CreatedAt?: Date | string | number;

  /**
   * An optional description that you create for each queue.
   */
  Description?: string;

  /**
   * The timestamp in epoch seconds for when you most recently updated the queue.
   */
  LastUpdated?: Date | string | number;

  /**
   * A name that you create for each queue. Each name must be unique within your account.
   */
  Name: string;

  /**
   * Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment.
   */
  PricingPlan?: "ON_DEMAND" | "RESERVED" | string;

  /**
   * The estimated number of jobs with a PROGRESSING status.
   */
  ProgressingJobsCount?: number;

  /**
   * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
   */
  ReservationPlan?: _ReservationPlan;

  /**
   * Queues can be ACTIVE or PAUSED. If you pause a queue, the service won't begin processing jobs in that queue. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
   */
  Status?: "ACTIVE" | "PAUSED" | string;

  /**
   * The estimated number of jobs with a SUBMITTED status.
   */
  SubmittedJobsCount?: number;

  /**
   * Specifies whether this on-demand queue is system or custom. System queues are built in. You can't modify or delete system queues. You can create and modify custom queues.
   */
  Type?: "SYSTEM" | "CUSTOM" | string;
}

export interface _UnmarshalledQueue extends _Queue {
  /**
   * The timestamp in epoch seconds for when you created the queue.
   */
  CreatedAt?: Date;

  /**
   * The timestamp in epoch seconds for when you most recently updated the queue.
   */
  LastUpdated?: Date;

  /**
   * Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
   */
  ReservationPlan?: _UnmarshalledReservationPlan;
}
