import { StartGameSessionPlacementInput } from "../shapes/StartGameSessionPlacementInput";
import { StartGameSessionPlacementOutput } from "../shapes/StartGameSessionPlacementOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
