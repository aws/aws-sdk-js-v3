import { UpdateFleetInput } from "./UpdateFleetInput";
import { UpdateFleetOutput } from "./UpdateFleetOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { InvalidRoleException } from "./InvalidRoleException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceNotAvailableException } from "./ResourceNotAvailableException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { IncompatibleImageException } from "./IncompatibleImageException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
