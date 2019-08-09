import { RetryStageExecutionInput } from "./RetryStageExecutionInput";
import { RetryStageExecutionOutput } from "./RetryStageExecutionOutput";
import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { StageNotFoundException } from "./StageNotFoundException";
import { StageNotRetryableException } from "./StageNotRetryableException";
import { NotLatestPipelineExecutionException } from "./NotLatestPipelineExecutionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
