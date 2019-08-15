import { ListFieldLevelEncryptionProfilesInput } from "../shapes/ListFieldLevelEncryptionProfilesInput";
import { ListFieldLevelEncryptionProfilesOutput } from "../shapes/ListFieldLevelEncryptionProfilesOutput";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFieldLevelEncryptionProfiles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFieldLevelEncryptionProfiles",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/field-level-encryption-profile"
  },
  input: {
    shape: ListFieldLevelEncryptionProfilesInput
  },
  output: {
    shape: ListFieldLevelEncryptionProfilesOutput
  },
  errors: [
    {
      shape: InvalidArgument
    }
  ]
};
