import { PollForJobsInput } from "./PollForJobsInput";
import { PollForJobsOutput } from "./PollForJobsOutput";
import { ValidationException } from "./ValidationException";
import { ActionTypeNotFoundException } from "./ActionTypeNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PollForJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PollForJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PollForJobsInput
  },
  output: {
    shape: PollForJobsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ActionTypeNotFoundException
    }
  ]
};
