import { UpdateFieldLevelEncryptionProfileInput } from "../shapes/UpdateFieldLevelEncryptionProfileInput";
import { UpdateFieldLevelEncryptionProfileOutput } from "../shapes/UpdateFieldLevelEncryptionProfileOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { FieldLevelEncryptionProfileAlreadyExists } from "../shapes/FieldLevelEncryptionProfileAlreadyExists";
import { IllegalUpdate } from "../shapes/IllegalUpdate";
import { InconsistentQuantities } from "../shapes/InconsistentQuantities";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { InvalidIfMatchVersion } from "../shapes/InvalidIfMatchVersion";
import { NoSuchPublicKey } from "../shapes/NoSuchPublicKey";
import { NoSuchFieldLevelEncryptionProfile } from "../shapes/NoSuchFieldLevelEncryptionProfile";
import { PreconditionFailed } from "../shapes/PreconditionFailed";
import { FieldLevelEncryptionProfileSizeExceeded } from "../shapes/FieldLevelEncryptionProfileSizeExceeded";
import { TooManyFieldLevelEncryptionEncryptionEntities } from "../shapes/TooManyFieldLevelEncryptionEncryptionEntities";
import { TooManyFieldLevelEncryptionFieldPatterns } from "../shapes/TooManyFieldLevelEncryptionFieldPatterns";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFieldLevelEncryptionProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFieldLevelEncryptionProfile",
  http: {
    method: "PUT",
    requestUri: "/2019-03-26/field-level-encryption-profile/{Id}/config"
  },
  input: {
    shape: UpdateFieldLevelEncryptionProfileInput
  },
  output: {
    shape: UpdateFieldLevelEncryptionProfileOutput
  },
  errors: [
    {
      shape: AccessDenied
    },
    {
      shape: FieldLevelEncryptionProfileAlreadyExists
    },
    {
      shape: IllegalUpdate
    },
    {
      shape: InconsistentQuantities
    },
    {
      shape: InvalidArgument
    },
    {
      shape: InvalidIfMatchVersion
    },
    {
      shape: NoSuchPublicKey
    },
    {
      shape: NoSuchFieldLevelEncryptionProfile
    },
    {
      shape: PreconditionFailed
    },
    {
      shape: FieldLevelEncryptionProfileSizeExceeded
    },
    {
      shape: TooManyFieldLevelEncryptionEncryptionEntities
    },
    {
      shape: TooManyFieldLevelEncryptionFieldPatterns
    }
  ]
};
