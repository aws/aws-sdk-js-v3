import { StopGameSessionPlacementInput } from "./StopGameSessionPlacementInput";
import { StopGameSessionPlacementOutput } from "./StopGameSessionPlacementOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
