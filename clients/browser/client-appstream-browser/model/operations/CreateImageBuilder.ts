import { CreateImageBuilderInput } from "../shapes/CreateImageBuilderInput";
import { CreateImageBuilderOutput } from "../shapes/CreateImageBuilderOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotAvailableException } from "../shapes/ResourceNotAvailableException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRoleException } from "../shapes/InvalidRoleException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { IncompatibleImageException } from "../shapes/IncompatibleImageException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateImageBuilder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateImageBuilder",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateImageBuilderInput
  },
  output: {
    shape: CreateImageBuilderOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccountStatusException
    },
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
