import { RegisterThingInput } from "../shapes/RegisterThingInput";
import { RegisterThingOutput } from "../shapes/RegisterThingOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { ConflictingResourceUpdateException } from "../shapes/ConflictingResourceUpdateException";
import { ResourceRegistrationFailureException } from "../shapes/ResourceRegistrationFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterThing: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterThing",
  http: {
    method: "POST",
    requestUri: "/things"
  },
  input: {
    shape: RegisterThingInput
  },
  output: {
    shape: RegisterThingOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: ConflictingResourceUpdateException
    },
    {
      shape: ResourceRegistrationFailureException
    }
  ]
};
