import { UpdateUserIdentityInfoInput } from "../shapes/UpdateUserIdentityInfoInput";
import { UpdateUserIdentityInfoOutput } from "../shapes/UpdateUserIdentityInfoOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
