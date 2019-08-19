import { DeleteGameSessionQueueInput } from "../shapes/DeleteGameSessionQueueInput";
import { DeleteGameSessionQueueOutput } from "../shapes/DeleteGameSessionQueueOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteGameSessionQueue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteGameSessionQueue",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteGameSessionQueueInput
  },
  output: {
    shape: DeleteGameSessionQueueOutput
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
