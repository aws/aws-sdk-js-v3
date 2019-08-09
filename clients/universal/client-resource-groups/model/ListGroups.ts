import { ListGroupsInput } from "./ListGroupsInput";
import { ListGroupsOutput } from "./ListGroupsOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGroups",
  http: {
    method: "POST",
    requestUri: "/groups-list"
  },
  input: {
    shape: ListGroupsInput
  },
  output: {
    shape: ListGroupsOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
