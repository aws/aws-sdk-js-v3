import { CreateConstraintInput } from "./CreateConstraintInput";
import { CreateConstraintOutput } from "./CreateConstraintOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { LimitExceededException } from "./LimitExceededException";
import { DuplicateResourceException } from "./DuplicateResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
