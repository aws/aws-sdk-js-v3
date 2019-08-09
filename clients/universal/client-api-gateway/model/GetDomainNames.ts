import { GetDomainNamesInput } from "./GetDomainNamesInput";
import { GetDomainNamesOutput } from "./GetDomainNamesOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
