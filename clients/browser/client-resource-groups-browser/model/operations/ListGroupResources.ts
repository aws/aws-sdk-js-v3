import { ListGroupResourcesInput } from "../shapes/ListGroupResourcesInput";
import { ListGroupResourcesOutput } from "../shapes/ListGroupResourcesOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
