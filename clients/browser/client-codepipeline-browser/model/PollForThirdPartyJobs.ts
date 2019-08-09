import { PollForThirdPartyJobsInput } from "./PollForThirdPartyJobsInput";
import { PollForThirdPartyJobsOutput } from "./PollForThirdPartyJobsOutput";
import { ActionTypeNotFoundException } from "./ActionTypeNotFoundException";
import { ValidationException } from "./ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PollForThirdPartyJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PollForThirdPartyJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PollForThirdPartyJobsInput
  },
  output: {
    shape: PollForThirdPartyJobsOutput
  },
  errors: [
    {
      shape: ActionTypeNotFoundException
    },
    {
      shape: ValidationException
    }
  ]
};
