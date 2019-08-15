import { ListUserProfilesInput } from "../shapes/ListUserProfilesInput";
import { ListUserProfilesOutput } from "../shapes/ListUserProfilesOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { ValidationException } from "../shapes/ValidationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListUserProfiles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUserProfiles",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListUserProfilesInput
  },
  output: {
    shape: ListUserProfilesOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    },
    {
      shape: ValidationException
    }
  ]
};
