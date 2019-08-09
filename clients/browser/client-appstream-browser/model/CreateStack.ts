import { CreateStackInput } from "./CreateStackInput";
import { CreateStackOutput } from "./CreateStackOutput";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidRoleException } from "./InvalidRoleException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
