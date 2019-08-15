import { CreateVpcPeeringConnectionInput } from "../shapes/CreateVpcPeeringConnectionInput";
import { CreateVpcPeeringConnectionOutput } from "../shapes/CreateVpcPeeringConnectionOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateVpcPeeringConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVpcPeeringConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateVpcPeeringConnectionInput
  },
  output: {
    shape: CreateVpcPeeringConnectionOutput
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
