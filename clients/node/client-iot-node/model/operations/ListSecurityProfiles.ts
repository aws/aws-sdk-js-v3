import { ListSecurityProfilesInput } from "../shapes/ListSecurityProfilesInput";
import { ListSecurityProfilesOutput } from "../shapes/ListSecurityProfilesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
