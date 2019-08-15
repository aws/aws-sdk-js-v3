import { ListActionExecutionsInput } from "../shapes/ListActionExecutionsInput";
import { ListActionExecutionsOutput } from "../shapes/ListActionExecutionsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { PipelineExecutionNotFoundException } from "../shapes/PipelineExecutionNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListActionExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListActionExecutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListActionExecutionsInput
  },
  output: {
    shape: ListActionExecutionsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: PipelineNotFoundException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: PipelineExecutionNotFoundException
    }
  ]
};
