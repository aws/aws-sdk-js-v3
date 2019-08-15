import { GetFieldLevelEncryptionProfileConfigInput } from "../shapes/GetFieldLevelEncryptionProfileConfigInput";
import { GetFieldLevelEncryptionProfileConfigOutput } from "../shapes/GetFieldLevelEncryptionProfileConfigOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { NoSuchFieldLevelEncryptionProfile } from "../shapes/NoSuchFieldLevelEncryptionProfile";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFieldLevelEncryptionProfileConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFieldLevelEncryptionProfileConfig",
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
