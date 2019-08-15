import { UpdateFieldLevelEncryptionConfigInput } from "../shapes/UpdateFieldLevelEncryptionConfigInput";
import { UpdateFieldLevelEncryptionConfigOutput } from "../shapes/UpdateFieldLevelEncryptionConfigOutput";
import { AccessDenied } from "../shapes/AccessDenied";
import { IllegalUpdate } from "../shapes/IllegalUpdate";
import { InconsistentQuantities } from "../shapes/InconsistentQuantities";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { InvalidIfMatchVersion } from "../shapes/InvalidIfMatchVersion";
import { NoSuchFieldLevelEncryptionProfile } from "../shapes/NoSuchFieldLevelEncryptionProfile";
import { NoSuchFieldLevelEncryptionConfig } from "../shapes/NoSuchFieldLevelEncryptionConfig";
import { PreconditionFailed } from "../shapes/PreconditionFailed";
import { TooManyFieldLevelEncryptionQueryArgProfiles } from "../shapes/TooManyFieldLevelEncryptionQueryArgProfiles";
import { TooManyFieldLevelEncryptionContentTypeProfiles } from "../shapes/TooManyFieldLevelEncryptionContentTypeProfiles";
import { QueryArgProfileEmpty } from "../shapes/QueryArgProfileEmpty";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFieldLevelEncryptionConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFieldLevelEncryptionConfig",
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
