import { DeleteFleetInput } from "../shapes/DeleteFleetInput";
import { DeleteFleetOutput } from "../shapes/DeleteFleetOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidFleetStatusException } from "../shapes/InvalidFleetStatusException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFleet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFleet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteFleetInput
  },
  output: {
    shape: DeleteFleetOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidFleetStatusException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
