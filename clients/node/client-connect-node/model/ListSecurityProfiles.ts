import { ListSecurityProfilesInput } from "./ListSecurityProfilesInput";
import { ListSecurityProfilesOutput } from "./ListSecurityProfilesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSecurityProfiles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSecurityProfiles",
  http: {
    method: "GET",
    requestUri: "/security-profiles-summary/{InstanceId}"
  },
  input: {
    shape: ListSecurityProfilesInput
  },
  output: {
    shape: ListSecurityProfilesOutput
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
