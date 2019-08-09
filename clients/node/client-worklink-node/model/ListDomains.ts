import { ListDomainsInput } from "./ListDomainsInput";
import { ListDomainsOutput } from "./ListDomainsOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
