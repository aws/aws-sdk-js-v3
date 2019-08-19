import { CreateConstraintInput } from "../shapes/CreateConstraintInput";
import { CreateConstraintOutput } from "../shapes/CreateConstraintOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { DuplicateResourceException } from "../shapes/DuplicateResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateConstraint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConstraint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateConstraintInput
  },
  output: {
    shape: CreateConstraintOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: DuplicateResourceException
    }
  ]
};
