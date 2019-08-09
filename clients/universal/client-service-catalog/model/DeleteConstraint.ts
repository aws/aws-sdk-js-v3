import { DeleteConstraintInput } from "./DeleteConstraintInput";
import { DeleteConstraintOutput } from "./DeleteConstraintOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteConstraint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConstraint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteConstraintInput
  },
  output: {
    shape: DeleteConstraintOutput
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
