import { DeleteVpcPeeringAuthorizationInput } from "../shapes/DeleteVpcPeeringAuthorizationInput";
import { DeleteVpcPeeringAuthorizationOutput } from "../shapes/DeleteVpcPeeringAuthorizationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVpcPeeringAuthorization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVpcPeeringAuthorization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVpcPeeringAuthorizationInput
  },
  output: {
    shape: DeleteVpcPeeringAuthorizationOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    }
  ]
};
