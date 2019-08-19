import { DeleteFleetInput } from "../shapes/DeleteFleetInput";
import { DeleteFleetOutput } from "../shapes/DeleteFleetOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFleet",
  http: {
    method: "POST",
    requestUri: "/deleteFleet"
  },
  input: {
    shape: DeleteFleetInput
  },
  output: {
    shape: DeleteFleetOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
