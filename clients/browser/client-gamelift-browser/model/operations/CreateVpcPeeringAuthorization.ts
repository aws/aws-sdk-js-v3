import { CreateVpcPeeringAuthorizationInput } from "../shapes/CreateVpcPeeringAuthorizationInput";
import { CreateVpcPeeringAuthorizationOutput } from "../shapes/CreateVpcPeeringAuthorizationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
