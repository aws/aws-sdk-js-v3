import { GetDomainNamesInput } from "../shapes/GetDomainNamesInput";
import { GetDomainNamesOutput } from "../shapes/GetDomainNamesOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDomainNames: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDomainNames",
  http: {
    method: "GET",
    requestUri: "/v2/domainnames"
  },
  input: {
    shape: GetDomainNamesInput
  },
  output: {
    shape: GetDomainNamesOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: BadRequestException
    }
  ]
};
