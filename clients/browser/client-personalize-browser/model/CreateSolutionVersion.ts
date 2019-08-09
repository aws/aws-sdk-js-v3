import { CreateSolutionVersionInput } from "./CreateSolutionVersionInput";
import { CreateSolutionVersionOutput } from "./CreateSolutionVersionOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
