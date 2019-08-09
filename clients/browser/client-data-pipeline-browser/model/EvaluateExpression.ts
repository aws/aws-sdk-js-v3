import { EvaluateExpressionInput } from "./EvaluateExpressionInput";
import { EvaluateExpressionOutput } from "./EvaluateExpressionOutput";
import { InternalServiceError } from "./InternalServiceError";
import { TaskNotFoundException } from "./TaskNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { PipelineDeletedException } from "./PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const EvaluateExpression: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EvaluateExpression",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EvaluateExpressionInput
  },
  output: {
    shape: EvaluateExpressionOutput
  },
  errors: [
    {
      shape: InternalServiceError
    },
    {
      shape: TaskNotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: PipelineNotFoundException
    },
    {
      shape: PipelineDeletedException
    }
  ]
};
