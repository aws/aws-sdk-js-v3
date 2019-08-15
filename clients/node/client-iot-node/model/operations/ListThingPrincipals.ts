import { ListThingPrincipalsInput } from "../shapes/ListThingPrincipalsInput";
import { ListThingPrincipalsOutput } from "../shapes/ListThingPrincipalsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
