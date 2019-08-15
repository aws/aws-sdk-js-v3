import { BatchGetJobsInput } from "../shapes/BatchGetJobsInput";
import { BatchGetJobsOutput } from "../shapes/BatchGetJobsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchGetJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchGetJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchGetJobsInput
  },
  output: {
    shape: BatchGetJobsOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: InvalidInputException
    }
  ]
};
