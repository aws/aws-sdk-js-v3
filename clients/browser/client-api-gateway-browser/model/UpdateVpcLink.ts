import { UpdateVpcLinkInput } from "./UpdateVpcLinkInput";
import { UpdateVpcLinkOutput } from "./UpdateVpcLinkOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateVpcLink: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateVpcLink",
  http: {
    method: "PATCH",
    requestUri: "/vpclinks/{vpclink_id}"
  },
  input: {
    shape: UpdateVpcLinkInput
  },
  output: {
    shape: UpdateVpcLinkOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
