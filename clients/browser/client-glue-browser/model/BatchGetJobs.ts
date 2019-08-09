import { BatchGetJobsInput } from "./BatchGetJobsInput";
import { BatchGetJobsOutput } from "./BatchGetJobsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
