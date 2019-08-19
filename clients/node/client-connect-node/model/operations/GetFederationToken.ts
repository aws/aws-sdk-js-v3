import { GetFederationTokenInput } from "../shapes/GetFederationTokenInput";
import { GetFederationTokenOutput } from "../shapes/GetFederationTokenOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { DuplicateResourceException } from "../shapes/DuplicateResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
