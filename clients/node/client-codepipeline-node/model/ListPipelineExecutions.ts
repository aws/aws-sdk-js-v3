import { ListPipelineExecutionsInput } from "./ListPipelineExecutionsInput";
import { ListPipelineExecutionsOutput } from "./ListPipelineExecutionsOutput";
import { ValidationException } from "./ValidationException";
import { PipelineNotFoundException } from "./PipelineNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
