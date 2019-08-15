import { UpdateUserRoutingProfileInput } from "../shapes/UpdateUserRoutingProfileInput";
import { UpdateUserRoutingProfileOutput } from "../shapes/UpdateUserRoutingProfileOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
