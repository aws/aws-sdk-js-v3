import { CreateFieldLevelEncryptionConfigInput } from "./CreateFieldLevelEncryptionConfigInput";
import { CreateFieldLevelEncryptionConfigOutput } from "./CreateFieldLevelEncryptionConfigOutput";
import { InconsistentQuantities } from "./InconsistentQuantities";
import { InvalidArgument } from "./InvalidArgument";
import { NoSuchFieldLevelEncryptionProfile } from "./NoSuchFieldLevelEncryptionProfile";
import { FieldLevelEncryptionConfigAlreadyExists } from "./FieldLevelEncryptionConfigAlreadyExists";
import { TooManyFieldLevelEncryptionConfigs } from "./TooManyFieldLevelEncryptionConfigs";
import { TooManyFieldLevelEncryptionQueryArgProfiles } from "./TooManyFieldLevelEncryptionQueryArgProfiles";
import { TooManyFieldLevelEncryptionContentTypeProfiles } from "./TooManyFieldLevelEncryptionContentTypeProfiles";
import { QueryArgProfileEmpty } from "./QueryArgProfileEmpty";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateFieldLevelEncryptionConfig2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFieldLevelEncryptionConfig2019_03_26",
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
