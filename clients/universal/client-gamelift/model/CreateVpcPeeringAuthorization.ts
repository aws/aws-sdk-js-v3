import { CreateVpcPeeringAuthorizationInput } from "./CreateVpcPeeringAuthorizationInput";
import { CreateVpcPeeringAuthorizationOutput } from "./CreateVpcPeeringAuthorizationOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateVpcPeeringAuthorization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVpcPeeringAuthorization",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateVpcPeeringAuthorizationInput
  },
  output: {
    shape: CreateVpcPeeringAuthorizationOutput
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
