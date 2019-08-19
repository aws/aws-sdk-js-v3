import { StopFleetActionsInput } from "../shapes/StopFleetActionsInput";
import { StopFleetActionsOutput } from "../shapes/StopFleetActionsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopFleetActions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopFleetActions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopFleetActionsInput
  },
  output: {
    shape: StopFleetActionsOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    }
  ]
};
