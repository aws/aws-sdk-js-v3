import { CreateGameSessionQueueInput } from "../shapes/CreateGameSessionQueueInput";
import { CreateGameSessionQueueOutput } from "../shapes/CreateGameSessionQueueOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateGameSessionQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateGameSessionQueue",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateGameSessionQueueInput
  },
  output: {
    shape: CreateGameSessionQueueOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: LimitExceededException
    }
  ]
};
