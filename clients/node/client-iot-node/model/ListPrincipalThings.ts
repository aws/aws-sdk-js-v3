import { ListPrincipalThingsInput } from "./ListPrincipalThingsInput";
import { ListPrincipalThingsOutput } from "./ListPrincipalThingsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListPrincipalThings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPrincipalThings",
  http: {
    method: "GET",
    requestUri: "/principals/things"
  },
  input: {
    shape: ListPrincipalThingsInput
  },
  output: {
    shape: ListPrincipalThingsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
