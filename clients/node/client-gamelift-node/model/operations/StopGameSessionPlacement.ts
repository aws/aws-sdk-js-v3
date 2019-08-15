import { StopGameSessionPlacementInput } from "../shapes/StopGameSessionPlacementInput";
import { StopGameSessionPlacementOutput } from "../shapes/StopGameSessionPlacementOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopGameSessionPlacement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopGameSessionPlacement",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopGameSessionPlacementInput
  },
  output: {
    shape: StopGameSessionPlacementOutput
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
