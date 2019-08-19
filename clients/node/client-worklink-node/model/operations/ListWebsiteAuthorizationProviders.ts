import { ListWebsiteAuthorizationProvidersInput } from "../shapes/ListWebsiteAuthorizationProvidersInput";
import { ListWebsiteAuthorizationProvidersOutput } from "../shapes/ListWebsiteAuthorizationProvidersOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListWebsiteAuthorizationProviders: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListWebsiteAuthorizationProviders",
  http: {
    method: "POST",
    requestUri: "/listWebsiteAuthorizationProviders"
  },
  input: {
    shape: ListWebsiteAuthorizationProvidersInput
  },
  output: {
    shape: ListWebsiteAuthorizationProvidersOutput
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
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
