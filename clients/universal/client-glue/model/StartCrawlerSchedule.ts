import { StartCrawlerScheduleInput } from "./StartCrawlerScheduleInput";
import { StartCrawlerScheduleOutput } from "./StartCrawlerScheduleOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { SchedulerRunningException } from "./SchedulerRunningException";
import { SchedulerTransitioningException } from "./SchedulerTransitioningException";
import { NoScheduleException } from "./NoScheduleException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartCrawlerSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartCrawlerSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartCrawlerScheduleInput
  },
  output: {
    shape: StartCrawlerScheduleOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: SchedulerRunningException
    },
    {
      shape: SchedulerTransitioningException
    },
    {
      shape: NoScheduleException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
