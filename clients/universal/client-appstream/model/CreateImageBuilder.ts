import { CreateImageBuilderInput } from "./CreateImageBuilderInput";
import { CreateImageBuilderOutput } from "./CreateImageBuilderOutput";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotAvailableException } from "./ResourceNotAvailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRoleException } from "./InvalidRoleException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { IncompatibleImageException } from "./IncompatibleImageException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
