import { CreateSolutionVersionInput } from "../shapes/CreateSolutionVersionInput";
import { CreateSolutionVersionOutput } from "../shapes/CreateSolutionVersionOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSolutionVersion: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSolutionVersion",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSolutionVersionInput
  },
  output: {
    shape: CreateSolutionVersionOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
