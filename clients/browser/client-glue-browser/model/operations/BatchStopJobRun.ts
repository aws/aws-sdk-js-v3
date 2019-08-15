import { BatchStopJobRunInput } from "../shapes/BatchStopJobRunInput";
import { BatchStopJobRunOutput } from "../shapes/BatchStopJobRunOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchStopJobRun: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchStopJobRun",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BatchStopJobRunInput
  },
  output: {
    shape: BatchStopJobRunOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
