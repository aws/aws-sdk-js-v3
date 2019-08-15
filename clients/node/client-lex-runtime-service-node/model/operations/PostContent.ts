import { PostContentInput } from "../shapes/PostContentInput";
import { PostContentOutput } from "../shapes/PostContentOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ConflictException } from "../shapes/ConflictException";
import { UnsupportedMediaTypeException } from "../shapes/UnsupportedMediaTypeException";
import { NotAcceptableException } from "../shapes/NotAcceptableException";
import { RequestTimeoutException } from "../shapes/RequestTimeoutException";
import { DependencyFailedException } from "../shapes/DependencyFailedException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { LoopDetectedException } from "../shapes/LoopDetectedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PostContent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PostContent",
  http: {
    method: "POST",
    requestUri: "/bot/{botName}/alias/{botAlias}/user/{userId}/content"
  },
  input: {
    shape: PostContentInput
  },
  output: {
    shape: PostContentOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ConflictException
    },
    {
      shape: UnsupportedMediaTypeException
    },
    {
      shape: NotAcceptableException
    },
    {
      shape: RequestTimeoutException
    },
    {
      shape: DependencyFailedException
    },
    {
      shape: BadGatewayException
    },
    {
      shape: LoopDetectedException
    }
  ]
};
