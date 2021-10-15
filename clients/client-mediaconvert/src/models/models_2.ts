import { Queue } from "./models_1";

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
