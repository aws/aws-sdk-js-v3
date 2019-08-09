import { GetDomainNamesInput } from "./GetDomainNamesInput";
import { GetDomainNamesOutput } from "./GetDomainNamesOutput";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
