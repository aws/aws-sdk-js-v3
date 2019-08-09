import { ScheduleRunInput } from "./ScheduleRunInput";
import { ScheduleRunOutput } from "./ScheduleRunOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { IdempotencyException } from "./IdempotencyException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ScheduleRun: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ScheduleRun",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ScheduleRunInput
  },
  output: {
    shape: ScheduleRunOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: IdempotencyException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
