import { ListSecurityProfilesInput } from "../shapes/ListSecurityProfilesInput";
import { ListSecurityProfilesOutput } from "../shapes/ListSecurityProfilesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
