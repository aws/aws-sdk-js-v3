import { RegisterThingInput } from "./RegisterThingInput";
import { RegisterThingOutput } from "./RegisterThingOutput";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ThrottlingException } from "./ThrottlingException";
import { ConflictingResourceUpdateException } from "./ConflictingResourceUpdateException";
import { ResourceRegistrationFailureException } from "./ResourceRegistrationFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
