import { GetVpcLinkInput } from "../shapes/GetVpcLinkInput";
import { GetVpcLinkOutput } from "../shapes/GetVpcLinkOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetVpcLink: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetVpcLink",
  http: {
    method: "GET",
    requestUri: "/vpclinks/{vpclink_id}"
  },
  input: {
    shape: GetVpcLinkInput
  },
  output: {
    shape: GetVpcLinkOutput
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
    }
  ]
};
