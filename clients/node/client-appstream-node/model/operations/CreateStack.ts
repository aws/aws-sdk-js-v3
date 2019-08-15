import { CreateStackInput } from "../shapes/CreateStackInput";
import { CreateStackOutput } from "../shapes/CreateStackOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InvalidRoleException } from "../shapes/InvalidRoleException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateStack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateStack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateStackInput
  },
  output: {
    shape: CreateStackOutput
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
      shape: ConcurrentModificationException
    },
    {
      shape: InvalidRoleException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
