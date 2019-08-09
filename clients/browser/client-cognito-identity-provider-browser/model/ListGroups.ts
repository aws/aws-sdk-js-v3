import { ListGroupsInput } from "./ListGroupsInput";
import { ListGroupsOutput } from "./ListGroupsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListGroupsInput
  },
  output: {
    shape: ListGroupsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InternalErrorException
    }
  ]
};
