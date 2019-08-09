import { CreateFleetInput } from "./CreateFleetInput";
import { CreateFleetOutput } from "./CreateFleetOutput";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotAvailableException } from "./ResourceNotAvailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { InvalidRoleException } from "./InvalidRoleException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { IncompatibleImageException } from "./IncompatibleImageException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
