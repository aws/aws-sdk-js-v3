import { UpdateGameSessionInput } from "../shapes/UpdateGameSessionInput";
import { UpdateGameSessionOutput } from "../shapes/UpdateGameSessionOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConflictException } from "../shapes/ConflictException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidGameSessionStatusException } from "../shapes/InvalidGameSessionStatusException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
