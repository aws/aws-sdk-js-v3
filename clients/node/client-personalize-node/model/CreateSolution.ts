import { CreateSolutionInput } from "./CreateSolutionInput";
import { CreateSolutionOutput } from "./CreateSolutionOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSolution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSolution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSolutionInput
  },
  output: {
    shape: CreateSolutionOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceInUseException
    }
  ]
};
