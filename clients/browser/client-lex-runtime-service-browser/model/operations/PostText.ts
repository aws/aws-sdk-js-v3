import { PostTextInput } from "../shapes/PostTextInput";
import { PostTextOutput } from "../shapes/PostTextOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ConflictException } from "../shapes/ConflictException";
import { DependencyFailedException } from "../shapes/DependencyFailedException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { LoopDetectedException } from "../shapes/LoopDetectedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PostText: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PostText",
  http: {
    method: "POST",
    requestUri: "/bot/{botName}/alias/{botAlias}/user/{userId}/text"
  },
  input: {
    shape: PostTextInput
  },
  output: {
    shape: PostTextOutput
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
