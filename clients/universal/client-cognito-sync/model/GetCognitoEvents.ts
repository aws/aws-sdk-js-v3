import { GetCognitoEventsInput } from "./GetCognitoEventsInput";
import { GetCognitoEventsOutput } from "./GetCognitoEventsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCognitoEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCognitoEvents",
  http: {
    method: "GET",
    requestUri: "/identitypools/{IdentityPoolId}/events"
  },
  input: {
    shape: GetCognitoEventsInput
  },
  output: {
    shape: GetCognitoEventsOutput
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
