import { DeleteVpcLinkInput } from "../shapes/DeleteVpcLinkInput";
import { DeleteVpcLinkOutput } from "../shapes/DeleteVpcLinkOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVpcLink: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVpcLink",
  http: {
    method: "DELETE",
    requestUri: "/vpclinks/{vpclink_id}"
  },
  input: {
    shape: DeleteVpcLinkInput
  },
  output: {
    shape: DeleteVpcLinkOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
