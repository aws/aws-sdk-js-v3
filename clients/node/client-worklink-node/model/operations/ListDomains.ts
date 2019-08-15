import { ListDomainsInput } from "../shapes/ListDomainsInput";
import { ListDomainsOutput } from "../shapes/ListDomainsOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDomains: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDomains",
  http: {
    method: "POST",
    requestUri: "/listDomains"
  },
  input: {
    shape: ListDomainsInput
  },
  output: {
    shape: ListDomainsOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
