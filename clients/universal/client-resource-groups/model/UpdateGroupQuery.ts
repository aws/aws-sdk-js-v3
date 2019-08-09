import { UpdateGroupQueryInput } from "./UpdateGroupQueryInput";
import { UpdateGroupQueryOutput } from "./UpdateGroupQueryOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
