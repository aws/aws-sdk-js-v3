import { GetFieldLevelEncryptionProfileConfigInput } from "./GetFieldLevelEncryptionProfileConfigInput";
import { GetFieldLevelEncryptionProfileConfigOutput } from "./GetFieldLevelEncryptionProfileConfigOutput";
import { AccessDenied } from "./AccessDenied";
import { NoSuchFieldLevelEncryptionProfile } from "./NoSuchFieldLevelEncryptionProfile";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetFieldLevelEncryptionProfileConfig2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFieldLevelEncryptionProfileConfig2019_03_26",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/field-level-encryption-profile/{Id}/config"
  },
  input: {
    shape: GetFieldLevelEncryptionProfileConfigInput
  },
  output: {
    shape: GetFieldLevelEncryptionProfileConfigOutput
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
