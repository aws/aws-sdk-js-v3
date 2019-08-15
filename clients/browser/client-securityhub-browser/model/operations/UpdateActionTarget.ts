import { UpdateActionTargetInput } from "../shapes/UpdateActionTargetInput";
import { UpdateActionTargetOutput } from "../shapes/UpdateActionTargetOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
