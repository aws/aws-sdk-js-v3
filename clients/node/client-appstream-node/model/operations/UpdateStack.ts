import { UpdateStackInput } from "../shapes/UpdateStackInput";
import { UpdateStackOutput } from "../shapes/UpdateStackOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidRoleException } from "../shapes/InvalidRoleException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { IncompatibleImageException } from "../shapes/IncompatibleImageException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateStack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateStack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateStackInput
  },
  output: {
    shape: UpdateStackOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidRoleException
    },
    {
      shape: InvalidParameterCombinationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidAccountStatusException
    },
    {
      shape: IncompatibleImageException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
