import { ListProblemsInput } from "../shapes/ListProblemsInput";
import { ListProblemsOutput } from "../shapes/ListProblemsOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
