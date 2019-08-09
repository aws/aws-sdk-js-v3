import { ListProblemsInput } from "./ListProblemsInput";
import { ListProblemsOutput } from "./ListProblemsOutput";
import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListProblems: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListProblems",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListProblemsInput
  },
  output: {
    shape: ListProblemsOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
