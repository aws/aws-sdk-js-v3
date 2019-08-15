import { GetVpcLinksInput } from "../shapes/GetVpcLinksInput";
import { GetVpcLinksOutput } from "../shapes/GetVpcLinksOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
