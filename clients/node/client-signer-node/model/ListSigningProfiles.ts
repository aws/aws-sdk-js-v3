import { ListSigningProfilesInput } from "./ListSigningProfilesInput";
import { ListSigningProfilesOutput } from "./ListSigningProfilesOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
