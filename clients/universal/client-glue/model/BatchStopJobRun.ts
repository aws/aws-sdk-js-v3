import { BatchStopJobRunInput } from "./BatchStopJobRunInput";
import { BatchStopJobRunOutput } from "./BatchStopJobRunOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
