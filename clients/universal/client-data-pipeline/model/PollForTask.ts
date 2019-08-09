import { PollForTaskInput } from "./PollForTaskInput";
import { PollForTaskOutput } from "./PollForTaskOutput";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { TaskNotFoundException } from "./TaskNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PollForTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PollForTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PollForTaskInput
  },
  output: {
    shape: PollForTaskOutput
  },
  errors: [
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: TaskNotFoundException
    }
  ]
};
