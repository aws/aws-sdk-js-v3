import { GetFieldLevelEncryptionConfigInput } from "./GetFieldLevelEncryptionConfigInput";
import { GetFieldLevelEncryptionConfigOutput } from "./GetFieldLevelEncryptionConfigOutput";
import { AccessDenied } from "./AccessDenied";
import { NoSuchFieldLevelEncryptionConfig } from "./NoSuchFieldLevelEncryptionConfig";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetFieldLevelEncryptionConfig2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFieldLevelEncryptionConfig2019_03_26",
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
