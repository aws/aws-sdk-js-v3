import { CreateFleetInput } from "../shapes/CreateFleetInput";
import { CreateFleetOutput } from "../shapes/CreateFleetOutput";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotAvailableException } from "../shapes/ResourceNotAvailableException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { InvalidRoleException } from "../shapes/InvalidRoleException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { IncompatibleImageException } from "../shapes/IncompatibleImageException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFleet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateFleetInput
  },
  output: {
    shape: CreateFleetOutput
  },
  errors: [
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ResourceNotAvailableException
    },
    {
      shape: ResourceNotFoundException
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
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidParameterCombinationException
    },
    {
      shape: IncompatibleImageException
    },
    {
      shape: OperationNotPermittedException
    }
  ]
};
