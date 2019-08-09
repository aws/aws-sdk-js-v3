import { UpdateFieldLevelEncryptionConfigInput } from "./UpdateFieldLevelEncryptionConfigInput";
import { UpdateFieldLevelEncryptionConfigOutput } from "./UpdateFieldLevelEncryptionConfigOutput";
import { AccessDenied } from "./AccessDenied";
import { IllegalUpdate } from "./IllegalUpdate";
import { InconsistentQuantities } from "./InconsistentQuantities";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { NoSuchFieldLevelEncryptionProfile } from "./NoSuchFieldLevelEncryptionProfile";
import { NoSuchFieldLevelEncryptionConfig } from "./NoSuchFieldLevelEncryptionConfig";
import { PreconditionFailed } from "./PreconditionFailed";
import { TooManyFieldLevelEncryptionQueryArgProfiles } from "./TooManyFieldLevelEncryptionQueryArgProfiles";
import { TooManyFieldLevelEncryptionContentTypeProfiles } from "./TooManyFieldLevelEncryptionContentTypeProfiles";
import { QueryArgProfileEmpty } from "./QueryArgProfileEmpty";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateFieldLevelEncryptionConfig2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFieldLevelEncryptionConfig2019_03_26",
  http: {
    method: "PUT",
    requestUri: "/2019-03-26/field-level-encryption/{Id}/config"
  },
  input: {
    shape: UpdateFieldLevelEncryptionConfigInput
  },
  output: {
    shape: UpdateFieldLevelEncryptionConfigOutput
  },
  errors: [
    {
      shape: AccessDenied
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
      shape: NoSuchFieldLevelEncryptionProfile
    },
    {
      shape: NoSuchFieldLevelEncryptionConfig
    },
    {
      shape: PreconditionFailed
    },
    {
      shape: TooManyFieldLevelEncryptionQueryArgProfiles
    },
    {
      shape: TooManyFieldLevelEncryptionContentTypeProfiles
    },
    {
      shape: QueryArgProfileEmpty
    }
  ]
};
