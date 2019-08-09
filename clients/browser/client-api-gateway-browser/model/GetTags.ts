import { GetTagsInput } from "./GetTagsInput";
import { GetTagsOutput } from "./GetTagsOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
