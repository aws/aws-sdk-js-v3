import { UpdateGameSessionQueueInput } from "./UpdateGameSessionQueueInput";
import { UpdateGameSessionQueueOutput } from "./UpdateGameSessionQueueOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateGameSessionQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGameSessionQueue",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateGameSessionQueueInput
  },
  output: {
    shape: UpdateGameSessionQueueOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    }
  ]
};
