import { GetTagsInput } from "../shapes/GetTagsInput";
import { GetTagsOutput } from "../shapes/GetTagsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTags",
  http: {
    method: "GET",
    requestUri: "/resources/{Arn}/tags"
  },
  input: {
    shape: GetTagsInput
  },
  output: {
    shape: GetTagsOutput
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
