import { ListSecurityProfilesInput } from "./ListSecurityProfilesInput";
import { ListSecurityProfilesOutput } from "./ListSecurityProfilesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSecurityProfiles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSecurityProfiles",
  http: {
    method: "GET",
    requestUri: "/security-profiles"
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
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    }
  ]
};
