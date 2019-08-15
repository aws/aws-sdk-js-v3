import { StartFleetActionsInput } from "../shapes/StartFleetActionsInput";
import { StartFleetActionsOutput } from "../shapes/StartFleetActionsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartFleetActions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartFleetActions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartFleetActionsInput
  },
  output: {
    shape: StartFleetActionsOutput
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
