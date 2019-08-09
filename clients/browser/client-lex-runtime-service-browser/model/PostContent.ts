import { PostContentInput } from "./PostContentInput";
import { PostContentOutput } from "./PostContentOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { ConflictException } from "./ConflictException";
import { UnsupportedMediaTypeException } from "./UnsupportedMediaTypeException";
import { NotAcceptableException } from "./NotAcceptableException";
import { RequestTimeoutException } from "./RequestTimeoutException";
import { DependencyFailedException } from "./DependencyFailedException";
import { BadGatewayException } from "./BadGatewayException";
import { LoopDetectedException } from "./LoopDetectedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
