import { DeleteSolutionInput } from "../shapes/DeleteSolutionInput";
import { DeleteSolutionOutput } from "../shapes/DeleteSolutionOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSolution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSolution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteSolutionInput
  },
  output: {
    shape: DeleteSolutionOutput
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
