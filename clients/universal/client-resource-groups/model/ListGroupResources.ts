import { ListGroupResourcesInput } from "./ListGroupResourcesInput";
import { ListGroupResourcesOutput } from "./ListGroupResourcesOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListGroupResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGroupResources",
  http: {
    method: "POST",
    requestUri: "/groups/{GroupName}/resource-identifiers-list"
  },
  input: {
    shape: ListGroupResourcesInput
  },
  output: {
    shape: ListGroupResourcesOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
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
