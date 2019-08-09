import { PostTextInput } from "./PostTextInput";
import { PostTextOutput } from "./PostTextOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { ConflictException } from "./ConflictException";
import { DependencyFailedException } from "./DependencyFailedException";
import { BadGatewayException } from "./BadGatewayException";
import { LoopDetectedException } from "./LoopDetectedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
