import { UpdateGroupQueryInput } from "../shapes/UpdateGroupQueryInput";
import { UpdateGroupQueryOutput } from "../shapes/UpdateGroupQueryOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateGroupQuery: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGroupQuery",
  http: {
    method: "PUT",
    requestUri: "/groups/{GroupName}/query"
  },
  input: {
    shape: UpdateGroupQueryInput
  },
  output: {
    shape: UpdateGroupQueryOutput
  },
  errors: [
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
