import { ListPipelineExecutionsInput } from "../shapes/ListPipelineExecutionsInput";
import { ListPipelineExecutionsOutput } from "../shapes/ListPipelineExecutionsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { PipelineNotFoundException } from "../shapes/PipelineNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListPipelineExecutions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPipelineExecutions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListPipelineExecutionsInput
  },
  output: {
    shape: ListPipelineExecutionsOutput
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
    }
  ]
};
