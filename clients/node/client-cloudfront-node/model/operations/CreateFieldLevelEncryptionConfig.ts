import { CreateFieldLevelEncryptionConfigInput } from "../shapes/CreateFieldLevelEncryptionConfigInput";
import { CreateFieldLevelEncryptionConfigOutput } from "../shapes/CreateFieldLevelEncryptionConfigOutput";
import { InconsistentQuantities } from "../shapes/InconsistentQuantities";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { NoSuchFieldLevelEncryptionProfile } from "../shapes/NoSuchFieldLevelEncryptionProfile";
import { FieldLevelEncryptionConfigAlreadyExists } from "../shapes/FieldLevelEncryptionConfigAlreadyExists";
import { TooManyFieldLevelEncryptionConfigs } from "../shapes/TooManyFieldLevelEncryptionConfigs";
import { TooManyFieldLevelEncryptionQueryArgProfiles } from "../shapes/TooManyFieldLevelEncryptionQueryArgProfiles";
import { TooManyFieldLevelEncryptionContentTypeProfiles } from "../shapes/TooManyFieldLevelEncryptionContentTypeProfiles";
import { QueryArgProfileEmpty } from "../shapes/QueryArgProfileEmpty";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateFieldLevelEncryptionConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFieldLevelEncryptionConfig",
  http: {
    method: "POST",
    requestUri: "/2019-03-26/field-level-encryption"
  },
  input: {
    shape: CreateFieldLevelEncryptionConfigInput
  },
  output: {
    shape: CreateFieldLevelEncryptionConfigOutput
  },
  errors: [
    {
      shape: InconsistentQuantities
    },
    {
      shape: InvalidArgument
    },
    {
      shape: NoSuchFieldLevelEncryptionProfile
    },
    {
      shape: FieldLevelEncryptionConfigAlreadyExists
    },
    {
      shape: TooManyFieldLevelEncryptionConfigs
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
