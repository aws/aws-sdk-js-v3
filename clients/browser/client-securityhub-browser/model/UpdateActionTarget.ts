import { UpdateActionTargetInput } from "./UpdateActionTargetInput";
import { UpdateActionTargetOutput } from "./UpdateActionTargetOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidAccessException } from "./InvalidAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateActionTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateActionTarget",
  http: {
    method: "PATCH",
    requestUri: "/actionTargets/{ActionTargetArn+}"
  },
  input: {
    shape: UpdateActionTargetInput
  },
  output: {
    shape: UpdateActionTargetOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidAccessException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
