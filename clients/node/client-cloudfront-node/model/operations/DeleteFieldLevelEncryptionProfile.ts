import { DeleteFieldLevelEncryptionProfileInput } from "../shapes/DeleteFieldLevelEncryptionProfileInput";
import { DeleteFieldLevelEncryptionProfileOutput } from "../shapes/DeleteFieldLevelEncryptionProfileOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { InvalidIfMatchVersion } from "../shapes/InvalidIfMatchVersion";
import { NoSuchFieldLevelEncryptionProfile } from "../shapes/NoSuchFieldLevelEncryptionProfile";
import { PreconditionFailed } from "../shapes/PreconditionFailed";
import { FieldLevelEncryptionProfileInUse } from "../shapes/FieldLevelEncryptionProfileInUse";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFieldLevelEncryptionProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFieldLevelEncryptionProfile",
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
