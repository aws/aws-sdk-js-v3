import { GetJobRunsInput } from "./GetJobRunsInput";
import { GetJobRunsOutput } from "./GetJobRunsOutput";
import { InvalidInputException } from "./InvalidInputException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
