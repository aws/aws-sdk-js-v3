import { GetGroupQueryInput } from "../shapes/GetGroupQueryInput";
import { GetGroupQueryOutput } from "../shapes/GetGroupQueryOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
