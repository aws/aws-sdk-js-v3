import { CreateGameSessionQueueInput } from "./CreateGameSessionQueueInput";
import { CreateGameSessionQueueOutput } from "./CreateGameSessionQueueOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
