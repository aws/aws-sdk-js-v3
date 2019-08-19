import { DeleteActionTargetInput } from "../shapes/DeleteActionTargetInput";
import { DeleteActionTargetOutput } from "../shapes/DeleteActionTargetOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InvalidAccessException } from "../shapes/InvalidAccessException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteActionTarget: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteActionTarget",
  http: {
    method: "DELETE",
    requestUri: "/actionTargets/{ActionTargetArn+}"
  },
  input: {
    shape: DeleteActionTargetInput
  },
  output: {
    shape: DeleteActionTargetOutput
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
      shape: ResourceNotFoundException
    }
  ]
};
