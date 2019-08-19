import { GetFieldLevelEncryptionConfigInput } from "../shapes/GetFieldLevelEncryptionConfigInput";
import { GetFieldLevelEncryptionConfigOutput } from "../shapes/GetFieldLevelEncryptionConfigOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { NoSuchFieldLevelEncryptionConfig } from "../shapes/NoSuchFieldLevelEncryptionConfig";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFieldLevelEncryptionConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFieldLevelEncryptionConfig",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/field-level-encryption/{Id}/config"
  },
  input: {
    shape: GetFieldLevelEncryptionConfigInput
  },
  output: {
    shape: GetFieldLevelEncryptionConfigOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: NoSuchFieldLevelEncryptionConfig
    }
  ]
};
