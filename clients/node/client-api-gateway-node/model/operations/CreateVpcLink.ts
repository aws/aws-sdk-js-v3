import { CreateVpcLinkInput } from "../shapes/CreateVpcLinkInput";
import { CreateVpcLinkOutput } from "../shapes/CreateVpcLinkOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateVpcLink: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVpcLink",
  http: {
    method: "POST",
    requestUri: "/vpclinks"
  },
  input: {
    shape: CreateVpcLinkInput
  },
  output: {
    shape: CreateVpcLinkOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
