import { AttachThingPrincipalInput } from "./AttachThingPrincipalInput";
import { AttachThingPrincipalOutput } from "./AttachThingPrincipalOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AttachThingPrincipal: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachThingPrincipal",
  http: {
    method: "PUT",
    requestUri: "/things/{thingName}/principals"
  },
  input: {
    shape: AttachThingPrincipalInput
  },
  output: {
    shape: AttachThingPrincipalOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
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
    }
  ]
};
