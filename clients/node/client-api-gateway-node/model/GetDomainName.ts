import { GetDomainNameInput } from "./GetDomainNameInput";
import { GetDomainNameOutput } from "./GetDomainNameOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDomainName: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDomainName",
  http: {
    method: "GET",
    requestUri: "/domainnames/{domain_name}"
  },
  input: {
    shape: GetDomainNameInput
  },
  output: {
    shape: GetDomainNameOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
