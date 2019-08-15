import { GetDomainNamesInput } from "../shapes/GetDomainNamesInput";
import { GetDomainNamesOutput } from "../shapes/GetDomainNamesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDomainNames: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDomainNames",
  http: {
    method: "GET",
    requestUri: "/domainnames"
  },
  input: {
    shape: GetDomainNamesInput
  },
  output: {
    shape: GetDomainNamesOutput
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
