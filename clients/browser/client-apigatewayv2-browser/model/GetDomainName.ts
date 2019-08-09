import { GetDomainNameInput } from "./GetDomainNameInput";
import { GetDomainNameOutput } from "./GetDomainNameOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDomainName: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDomainName",
  http: {
    method: "GET",
    requestUri: "/v2/domainnames/{domainName}"
  },
  input: {
    shape: GetDomainNameInput
  },
  output: {
    shape: GetDomainNameOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
