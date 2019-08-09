import { DeleteVpcLinkInput } from "./DeleteVpcLinkInput";
import { DeleteVpcLinkOutput } from "./DeleteVpcLinkOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
