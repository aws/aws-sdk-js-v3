import { UpdateFleetInput } from "../shapes/UpdateFleetInput";
import { UpdateFleetOutput } from "../shapes/UpdateFleetOutput";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { InvalidRoleException } from "../shapes/InvalidRoleException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceNotAvailableException } from "../shapes/ResourceNotAvailableException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { IncompatibleImageException } from "../shapes/IncompatibleImageException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFleet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateFleetInput
  },
  output: {
    shape: UpdateFleetOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccountStatusException
    },
    {
      shape: InvalidRoleException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceNotAvailableException
    },
    {
      shape: InvalidParameterCombinationException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: IncompatibleImageException
    },
    {
      shape: OperationNotPermittedException
    }
  ]
};
