import { SetCognitoEventsInput } from "../shapes/SetCognitoEventsInput";
import { SetCognitoEventsOutput } from "../shapes/SetCognitoEventsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetCognitoEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetCognitoEvents",
  http: {
    method: "POST",
    requestUri: "/identitypools/{IdentityPoolId}/events"
  },
  input: {
    shape: SetCognitoEventsInput
  },
  output: {
    shape: SetCognitoEventsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
