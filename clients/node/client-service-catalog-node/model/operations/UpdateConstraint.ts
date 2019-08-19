import { UpdateConstraintInput } from "../shapes/UpdateConstraintInput";
import { UpdateConstraintOutput } from "../shapes/UpdateConstraintOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateConstraint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConstraint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateConstraintInput
  },
  output: {
    shape: UpdateConstraintOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    }
  ]
};
