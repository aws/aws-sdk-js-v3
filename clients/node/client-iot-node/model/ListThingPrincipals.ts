import { ListThingPrincipalsInput } from "./ListThingPrincipalsInput";
import { ListThingPrincipalsOutput } from "./ListThingPrincipalsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListThingPrincipals: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListThingPrincipals",
  http: {
    method: "GET",
    requestUri: "/things/{thingName}/principals"
  },
  input: {
    shape: ListThingPrincipalsInput
  },
  output: {
    shape: ListThingPrincipalsOutput
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
