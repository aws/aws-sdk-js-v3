import { DeleteVpcPeeringConnectionInput } from "./DeleteVpcPeeringConnectionInput";
import { DeleteVpcPeeringConnectionOutput } from "./DeleteVpcPeeringConnectionOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
