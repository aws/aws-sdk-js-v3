import { DeleteFieldLevelEncryptionConfigInput } from "./DeleteFieldLevelEncryptionConfigInput";
import { DeleteFieldLevelEncryptionConfigOutput } from "./DeleteFieldLevelEncryptionConfigOutput";
import { AccessDenied } from "./AccessDenied";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { NoSuchFieldLevelEncryptionConfig } from "./NoSuchFieldLevelEncryptionConfig";
import { PreconditionFailed } from "./PreconditionFailed";
import { FieldLevelEncryptionConfigInUse } from "./FieldLevelEncryptionConfigInUse";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteFieldLevelEncryptionConfig2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFieldLevelEncryptionConfig2019_03_26",
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
