import { CreateThingInput } from "../shapes/CreateThingInput";
import { CreateThingOutput } from "../shapes/CreateThingOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateThing: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateThing",
  http: {
    method: "POST",
    requestUri: "/things/{thingName}"
  },
  input: {
    shape: CreateThingInput
  },
  output: {
    shape: CreateThingOutput
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
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
