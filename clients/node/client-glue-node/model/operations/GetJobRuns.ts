import { GetJobRunsInput } from "../shapes/GetJobRunsInput";
import { GetJobRunsOutput } from "../shapes/GetJobRunsOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetJobRuns: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetJobRuns",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetJobRunsInput
  },
  output: {
    shape: GetJobRunsOutput
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
