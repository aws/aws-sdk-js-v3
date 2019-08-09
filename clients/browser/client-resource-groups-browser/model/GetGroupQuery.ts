import { GetGroupQueryInput } from "./GetGroupQueryInput";
import { GetGroupQueryOutput } from "./GetGroupQueryOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetGroupQuery: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGroupQuery",
  http: {
    method: "GET",
    requestUri: "/groups/{GroupName}/query"
  },
  input: {
    shape: GetGroupQueryInput
  },
  output: {
    shape: GetGroupQueryOutput
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
