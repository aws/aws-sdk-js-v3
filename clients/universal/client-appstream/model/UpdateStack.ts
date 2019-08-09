import { UpdateStackInput } from "./UpdateStackInput";
import { UpdateStackOutput } from "./UpdateStackOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidRoleException } from "./InvalidRoleException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { IncompatibleImageException } from "./IncompatibleImageException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
