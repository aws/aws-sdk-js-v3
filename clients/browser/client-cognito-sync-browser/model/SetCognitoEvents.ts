import { SetCognitoEventsInput } from "./SetCognitoEventsInput";
import { SetCognitoEventsOutput } from "./SetCognitoEventsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
