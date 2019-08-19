import { ListSigningProfilesInput } from "../shapes/ListSigningProfilesInput";
import { ListSigningProfilesOutput } from "../shapes/ListSigningProfilesOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSigningProfiles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSigningProfiles",
  http: {
    method: "GET",
    requestUri: "/signing-profiles"
  },
  input: {
    shape: ListSigningProfilesInput
  },
  output: {
    shape: ListSigningProfilesOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
