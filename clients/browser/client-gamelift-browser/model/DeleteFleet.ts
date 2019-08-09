import { DeleteFleetInput } from "./DeleteFleetInput";
import { DeleteFleetOutput } from "./DeleteFleetOutput";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidFleetStatusException } from "./InvalidFleetStatusException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
