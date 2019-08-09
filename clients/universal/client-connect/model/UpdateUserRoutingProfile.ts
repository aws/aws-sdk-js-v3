import { UpdateUserRoutingProfileInput } from "./UpdateUserRoutingProfileInput";
import { UpdateUserRoutingProfileOutput } from "./UpdateUserRoutingProfileOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateUserRoutingProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUserRoutingProfile",
  http: {
    method: "POST",
    requestUri: "/users/{InstanceId}/{UserId}/routing-profile"
  },
  input: {
    shape: UpdateUserRoutingProfileInput
  },
  output: {
    shape: UpdateUserRoutingProfileOutput
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
