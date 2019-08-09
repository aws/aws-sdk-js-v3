import { CreateActionTargetInput } from "./CreateActionTargetInput";
import { CreateActionTargetOutput } from "./CreateActionTargetOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceConflictException } from "./ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
