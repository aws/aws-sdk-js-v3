import { GetDomainNameInput } from "../shapes/GetDomainNameInput";
import { GetDomainNameOutput } from "../shapes/GetDomainNameOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
