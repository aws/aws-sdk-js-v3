import { CreateVpcLinkInput } from "./CreateVpcLinkInput";
import { CreateVpcLinkOutput } from "./CreateVpcLinkOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
