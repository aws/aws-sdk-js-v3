import { Preset, Queue, QueueStatus, ReservationPlanSettings } from "./models_1";

export interface UpdatePresetResponse {
  /**
   * A preset is a collection of preconfigured media conversion settings that you want MediaConvert to apply to the output during the conversion process.
   */
  Preset?: Preset;
}

export namespace UpdatePresetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePresetResponse): any => ({
    ...obj,
  });
}

export interface UpdateQueueRequest {
  /**
   * The new description for the queue, if you are changing it.
   */
  Description?: string;

  /**
   * The name of the queue that you are modifying.
   */
  Name: string | undefined;

  /**
   * The new details of your pricing plan for your reserved queue. When you set up a new pricing plan to replace an expired one, you enter into another 12-month commitment. When you add capacity to your queue by increasing the number of RTS, you extend the term of your commitment to 12 months from when you add capacity. After you make these commitments, you can't cancel them.
   */
  ReservationPlanSettings?: ReservationPlanSettings;

  /**
   * Pause or activate a queue by changing its status between ACTIVE and PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause the queue continue to run until they finish or result in an error.
   */
  Status?: QueueStatus | string;
}

export namespace UpdateQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueRequest): any => ({
    ...obj,
  });
}

export interface UpdateQueueResponse {
  /**
   * You can use queues to manage the resources that are available to your AWS account for running multiple transcoding jobs at the same time. If you don't specify a queue, the service sends all jobs through the default queue. For more information, see https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html.
   */
  Queue?: Queue;
}

export namespace UpdateQueueResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueResponse): any => ({
    ...obj,
  });
}
