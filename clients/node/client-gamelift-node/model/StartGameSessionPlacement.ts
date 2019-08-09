import { StartGameSessionPlacementInput } from "./StartGameSessionPlacementInput";
import { StartGameSessionPlacementOutput } from "./StartGameSessionPlacementOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartGameSessionPlacement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartGameSessionPlacement",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartGameSessionPlacementInput
  },
  output: {
    shape: StartGameSessionPlacementOutput
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
