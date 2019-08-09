import { UpdateCrawlerScheduleInput } from "./UpdateCrawlerScheduleInput";
import { UpdateCrawlerScheduleOutput } from "./UpdateCrawlerScheduleOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { VersionMismatchException } from "./VersionMismatchException";
import { SchedulerTransitioningException } from "./SchedulerTransitioningException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateCrawlerSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateCrawlerSchedule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateCrawlerScheduleInput
  },
  output: {
    shape: UpdateCrawlerScheduleOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: VersionMismatchException
    },
    {
      shape: SchedulerTransitioningException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
