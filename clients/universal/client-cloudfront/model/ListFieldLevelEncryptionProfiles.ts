import { ListFieldLevelEncryptionProfilesInput } from "./ListFieldLevelEncryptionProfilesInput";
import { ListFieldLevelEncryptionProfilesOutput } from "./ListFieldLevelEncryptionProfilesOutput";
import { InvalidArgument } from "./InvalidArgument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListFieldLevelEncryptionProfiles2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFieldLevelEncryptionProfiles2019_03_26",
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
