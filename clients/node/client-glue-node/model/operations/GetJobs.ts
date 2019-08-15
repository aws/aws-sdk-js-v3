import { GetJobsInput } from "../shapes/GetJobsInput";
import { GetJobsOutput } from "../shapes/GetJobsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetJobsInput
  },
  output: {
    shape: GetJobsOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
