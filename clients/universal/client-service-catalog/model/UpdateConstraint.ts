import { UpdateConstraintInput } from "./UpdateConstraintInput";
import { UpdateConstraintOutput } from "./UpdateConstraintOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
