import { CreateGroupInput } from "./CreateGroupInput";
import { CreateGroupOutput } from "./CreateGroupOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { GroupExistsException } from "./GroupExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateGroupInput
  },
  output: {
    shape: CreateGroupOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: GroupExistsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InternalErrorException
    }
  ]
};
