import { GetFieldLevelEncryptionProfileInput } from "../shapes/GetFieldLevelEncryptionProfileInput";
import { GetFieldLevelEncryptionProfileOutput } from "../shapes/GetFieldLevelEncryptionProfileOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { NoSuchFieldLevelEncryptionProfile } from "../shapes/NoSuchFieldLevelEncryptionProfile";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFieldLevelEncryptionProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFieldLevelEncryptionProfile",
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
