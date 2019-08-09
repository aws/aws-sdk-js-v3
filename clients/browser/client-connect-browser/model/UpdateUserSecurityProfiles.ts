import { UpdateUserSecurityProfilesInput } from "./UpdateUserSecurityProfilesInput";
import { UpdateUserSecurityProfilesOutput } from "./UpdateUserSecurityProfilesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
