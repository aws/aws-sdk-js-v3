import { GetFieldLevelEncryptionInput } from "../shapes/GetFieldLevelEncryptionInput";
import { GetFieldLevelEncryptionOutput } from "../shapes/GetFieldLevelEncryptionOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { NoSuchFieldLevelEncryptionConfig } from "../shapes/NoSuchFieldLevelEncryptionConfig";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFieldLevelEncryption: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFieldLevelEncryption",
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
