import { DeleteFieldLevelEncryptionConfigInput } from "../shapes/DeleteFieldLevelEncryptionConfigInput";
import { DeleteFieldLevelEncryptionConfigOutput } from "../shapes/DeleteFieldLevelEncryptionConfigOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { InvalidIfMatchVersion } from "../shapes/InvalidIfMatchVersion";
import { NoSuchFieldLevelEncryptionConfig } from "../shapes/NoSuchFieldLevelEncryptionConfig";
import { PreconditionFailed } from "../shapes/PreconditionFailed";
import { FieldLevelEncryptionConfigInUse } from "../shapes/FieldLevelEncryptionConfigInUse";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFieldLevelEncryptionConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFieldLevelEncryptionConfig",
  http: {
    method: "DELETE",
    requestUri: "/2019-03-26/field-level-encryption/{Id}"
  },
  input: {
    shape: DeleteFieldLevelEncryptionConfigInput
  },
  output: {
    shape: DeleteFieldLevelEncryptionConfigOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: InvalidIfMatchVersion
    },
    {
      shape: NoSuchFieldLevelEncryptionConfig
    },
    {
      shape: PreconditionFailed
    },
    {
      shape: FieldLevelEncryptionConfigInUse
    }
  ]
};
