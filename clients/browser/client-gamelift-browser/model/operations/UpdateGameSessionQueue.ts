import { UpdateGameSessionQueueInput } from "../shapes/UpdateGameSessionQueueInput";
import { UpdateGameSessionQueueOutput } from "../shapes/UpdateGameSessionQueueOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
