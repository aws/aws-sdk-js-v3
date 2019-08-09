import { DeleteGameSessionQueueInput } from "./DeleteGameSessionQueueInput";
import { DeleteGameSessionQueueOutput } from "./DeleteGameSessionQueueOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
