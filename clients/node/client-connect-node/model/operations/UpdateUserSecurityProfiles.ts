import { UpdateUserSecurityProfilesInput } from "../shapes/UpdateUserSecurityProfilesInput";
import { UpdateUserSecurityProfilesOutput } from "../shapes/UpdateUserSecurityProfilesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUserSecurityProfiles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUserSecurityProfiles",
  http: {
    method: "POST",
    requestUri: "/users/{InstanceId}/{UserId}/security-profiles"
  },
  input: {
    shape: UpdateUserSecurityProfilesInput
  },
  output: {
    shape: UpdateUserSecurityProfilesOutput
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
