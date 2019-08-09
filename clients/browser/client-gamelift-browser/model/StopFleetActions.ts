import { StopFleetActionsInput } from "./StopFleetActionsInput";
import { StopFleetActionsOutput } from "./StopFleetActionsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
