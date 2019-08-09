import { GetVpcLinkInput } from "./GetVpcLinkInput";
import { GetVpcLinkOutput } from "./GetVpcLinkOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
