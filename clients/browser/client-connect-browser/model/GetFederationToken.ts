import { GetFederationTokenInput } from "./GetFederationTokenInput";
import { GetFederationTokenOutput } from "./GetFederationTokenOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { DuplicateResourceException } from "./DuplicateResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetFederationToken: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFederationToken",
  http: {
    method: "GET",
    requestUri: "/user/federate/{InstanceId}"
  },
  input: {
    shape: GetFederationTokenInput
  },
  output: {
    shape: GetFederationTokenOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: DuplicateResourceException
    }
  ]
};
