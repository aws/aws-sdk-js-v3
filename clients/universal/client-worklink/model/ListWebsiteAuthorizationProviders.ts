import { ListWebsiteAuthorizationProvidersInput } from "./ListWebsiteAuthorizationProvidersInput";
import { ListWebsiteAuthorizationProvidersOutput } from "./ListWebsiteAuthorizationProvidersOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
