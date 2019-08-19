import { TagInput } from "../shapes/TagInput";
import { TagOutput } from "../shapes/TagOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const Tag: _Operation_ = {
  metadata: ServiceMetadata,
  name: "Tag",
  http: {
    method: "PUT",
    requestUri: "/resources/{Arn}/tags"
  },
  input: {
    shape: TagInput
  },
  output: {
    shape: TagOutput
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
