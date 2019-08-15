import { CreateSolutionInput } from "../shapes/CreateSolutionInput";
import { CreateSolutionOutput } from "../shapes/CreateSolutionOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
