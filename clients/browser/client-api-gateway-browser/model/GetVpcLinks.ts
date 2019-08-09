import { GetVpcLinksInput } from "./GetVpcLinksInput";
import { GetVpcLinksOutput } from "./GetVpcLinksOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetVpcLinks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetVpcLinks",
  http: {
    method: "GET",
    requestUri: "/vpclinks"
  },
  input: {
    shape: GetVpcLinksInput
  },
  output: {
    shape: GetVpcLinksOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
