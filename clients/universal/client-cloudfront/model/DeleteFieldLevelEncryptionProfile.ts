import { DeleteFieldLevelEncryptionProfileInput } from "./DeleteFieldLevelEncryptionProfileInput";
import { DeleteFieldLevelEncryptionProfileOutput } from "./DeleteFieldLevelEncryptionProfileOutput";
import { AccessDenied } from "./AccessDenied";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { NoSuchFieldLevelEncryptionProfile } from "./NoSuchFieldLevelEncryptionProfile";
import { PreconditionFailed } from "./PreconditionFailed";
import { FieldLevelEncryptionProfileInUse } from "./FieldLevelEncryptionProfileInUse";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteFieldLevelEncryptionProfile2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFieldLevelEncryptionProfile2019_03_26",
  http: {
    method: "DELETE",
    requestUri: "/2019-03-26/field-level-encryption-profile/{Id}"
  },
  input: {
    shape: DeleteFieldLevelEncryptionProfileInput
  },
  output: {
    shape: DeleteFieldLevelEncryptionProfileOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: InvalidIfMatchVersion
    },
    {
      shape: NoSuchFieldLevelEncryptionProfile
    },
    {
      shape: PreconditionFailed
    },
    {
      shape: FieldLevelEncryptionProfileInUse
    }
  ]
};
