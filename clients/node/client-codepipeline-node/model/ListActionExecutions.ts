import { ListActionExecutionsInput } from "./ListActionExecutionsInput";
import { ListActionExecutionsOutput } from "./ListActionExecutionsOutput";
import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { PipelineExecutionNotFoundException } from "./PipelineExecutionNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
