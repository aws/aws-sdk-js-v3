import { UpdateUserIdentityInfoInput } from "./UpdateUserIdentityInfoInput";
import { UpdateUserIdentityInfoOutput } from "./UpdateUserIdentityInfoOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateUserIdentityInfo: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUserIdentityInfo",
  http: {
    method: "POST",
    requestUri: "/users/{InstanceId}/{UserId}/identity-info"
  },
  input: {
    shape: UpdateUserIdentityInfoInput
  },
  output: {
    shape: UpdateUserIdentityInfoOutput
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
      shape: ThrottlingException
    },
    {
      shape: InternalServiceException
    }
  ]
};
