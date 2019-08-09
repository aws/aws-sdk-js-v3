import { GetFieldLevelEncryptionProfileInput } from "./GetFieldLevelEncryptionProfileInput";
import { GetFieldLevelEncryptionProfileOutput } from "./GetFieldLevelEncryptionProfileOutput";
import { AccessDenied } from "./AccessDenied";
import { NoSuchFieldLevelEncryptionProfile } from "./NoSuchFieldLevelEncryptionProfile";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetFieldLevelEncryptionProfile2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFieldLevelEncryptionProfile2019_03_26",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/field-level-encryption-profile/{Id}"
  },
  input: {
    shape: GetFieldLevelEncryptionProfileInput
  },
  output: {
    shape: GetFieldLevelEncryptionProfileOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: NoSuchFieldLevelEncryptionProfile
    }
  ]
};
