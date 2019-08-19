import { TagResourceInput } from "../shapes/TagResourceInput";
import { TagResourceOutput } from "../shapes/TagResourceOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource",
  http: {
    method: "POST",
    requestUri: "/v1/tags/{resourceArn}"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: AccessDeniedException
    }
  ]
};
