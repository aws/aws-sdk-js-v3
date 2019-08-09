import { UpdateFieldLevelEncryptionProfileInput } from "./UpdateFieldLevelEncryptionProfileInput";
import { UpdateFieldLevelEncryptionProfileOutput } from "./UpdateFieldLevelEncryptionProfileOutput";
import { AccessDenied } from "./AccessDenied";
import { FieldLevelEncryptionProfileAlreadyExists } from "./FieldLevelEncryptionProfileAlreadyExists";
import { IllegalUpdate } from "./IllegalUpdate";
import { InconsistentQuantities } from "./InconsistentQuantities";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { NoSuchPublicKey } from "./NoSuchPublicKey";
import { NoSuchFieldLevelEncryptionProfile } from "./NoSuchFieldLevelEncryptionProfile";
import { PreconditionFailed } from "./PreconditionFailed";
import { FieldLevelEncryptionProfileSizeExceeded } from "./FieldLevelEncryptionProfileSizeExceeded";
import { TooManyFieldLevelEncryptionEncryptionEntities } from "./TooManyFieldLevelEncryptionEncryptionEntities";
import { TooManyFieldLevelEncryptionFieldPatterns } from "./TooManyFieldLevelEncryptionFieldPatterns";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateFieldLevelEncryptionProfile2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFieldLevelEncryptionProfile2019_03_26",
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
