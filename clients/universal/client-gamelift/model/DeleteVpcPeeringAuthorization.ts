import { DeleteVpcPeeringAuthorizationInput } from "./DeleteVpcPeeringAuthorizationInput";
import { DeleteVpcPeeringAuthorizationOutput } from "./DeleteVpcPeeringAuthorizationOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
