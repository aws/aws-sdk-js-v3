import { DeleteVpcPeeringConnectionInput } from "../shapes/DeleteVpcPeeringConnectionInput";
import { DeleteVpcPeeringConnectionOutput } from "../shapes/DeleteVpcPeeringConnectionOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVpcPeeringConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVpcPeeringConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVpcPeeringConnectionInput
  },
  output: {
    shape: DeleteVpcPeeringConnectionOutput
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
