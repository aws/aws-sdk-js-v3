import { RetryStageExecutionInput } from "../shapes/RetryStageExecutionInput";
import { RetryStageExecutionOutput } from "../shapes/RetryStageExecutionOutput";
import { ValidationException } from "../shapes/ValidationException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { StageNotFoundException } from "../shapes/StageNotFoundException";
import { StageNotRetryableException } from "../shapes/StageNotRetryableException";
import { NotLatestPipelineExecutionException } from "../shapes/NotLatestPipelineExecutionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RetryStageExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RetryStageExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RetryStageExecutionInput
  },
  output: {
    shape: RetryStageExecutionOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: PipelineNotFoundException
    },
    {
      shape: StageNotFoundException
    },
    {
      shape: StageNotRetryableException
    },
    {
      shape: NotLatestPipelineExecutionException
    }
  ]
};
