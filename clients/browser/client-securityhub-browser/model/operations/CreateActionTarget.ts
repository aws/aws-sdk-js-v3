import { CreateActionTargetInput } from "../shapes/CreateActionTargetInput";
import { CreateActionTargetOutput } from "../shapes/CreateActionTargetOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateActionTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateActionTarget",
  http: {
    method: "POST",
    requestUri: "/actionTargets"
  },
  input: {
    shape: CreateActionTargetInput
  },
  output: {
    shape: CreateActionTargetOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceConflictException
    }
  ]
};
