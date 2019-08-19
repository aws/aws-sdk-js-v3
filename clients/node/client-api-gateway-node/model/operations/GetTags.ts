import { GetTagsInput } from "../shapes/GetTagsInput";
import { GetTagsOutput } from "../shapes/GetTagsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetTags: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTags",
  http: {
    method: "GET",
    requestUri: "/tags/{resource_arn}"
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
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    }
  ]
};
