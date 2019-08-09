import { GetFieldLevelEncryptionInput } from "./GetFieldLevelEncryptionInput";
import { GetFieldLevelEncryptionOutput } from "./GetFieldLevelEncryptionOutput";
import { AccessDenied } from "./AccessDenied";
import { NoSuchFieldLevelEncryptionConfig } from "./NoSuchFieldLevelEncryptionConfig";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetFieldLevelEncryption2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFieldLevelEncryption2019_03_26",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/field-level-encryption/{Id}"
  },
  input: {
    shape: GetFieldLevelEncryptionInput
  },
  output: {
    shape: GetFieldLevelEncryptionOutput
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
