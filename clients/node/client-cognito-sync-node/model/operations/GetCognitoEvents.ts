import { GetCognitoEventsInput } from "../shapes/GetCognitoEventsInput";
import { GetCognitoEventsOutput } from "../shapes/GetCognitoEventsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
