import { EvaluateExpressionInput } from "../shapes/EvaluateExpressionInput";
import { EvaluateExpressionOutput } from "../shapes/EvaluateExpressionOutput";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { TaskNotFoundException } from "../shapes/TaskNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { PipelineDeletedException } from "../shapes/PipelineDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
