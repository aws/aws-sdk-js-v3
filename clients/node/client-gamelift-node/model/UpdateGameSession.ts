import { UpdateGameSessionInput } from "./UpdateGameSessionInput";
import { UpdateGameSessionOutput } from "./UpdateGameSessionOutput";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { InternalServiceException } from "./InternalServiceException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidGameSessionStatusException } from "./InvalidGameSessionStatusException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateGameSession: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGameSession",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateGameSessionInput
  },
  output: {
    shape: UpdateGameSessionOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConflictException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidGameSessionStatusException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
