import { CreateFieldLevelEncryptionProfileInput } from "./CreateFieldLevelEncryptionProfileInput";
import { CreateFieldLevelEncryptionProfileOutput } from "./CreateFieldLevelEncryptionProfileOutput";
import { InconsistentQuantities } from "./InconsistentQuantities";
import { InvalidArgument } from "./InvalidArgument";
import { NoSuchPublicKey } from "./NoSuchPublicKey";
import { FieldLevelEncryptionProfileAlreadyExists } from "./FieldLevelEncryptionProfileAlreadyExists";
import { FieldLevelEncryptionProfileSizeExceeded } from "./FieldLevelEncryptionProfileSizeExceeded";
import { TooManyFieldLevelEncryptionProfiles } from "./TooManyFieldLevelEncryptionProfiles";
import { TooManyFieldLevelEncryptionEncryptionEntities } from "./TooManyFieldLevelEncryptionEncryptionEntities";
import { TooManyFieldLevelEncryptionFieldPatterns } from "./TooManyFieldLevelEncryptionFieldPatterns";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateFieldLevelEncryptionProfile2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFieldLevelEncryptionProfile2019_03_26",
  http: {
    method: "POST",
    requestUri: "/2019-03-26/field-level-encryption-profile"
  },
  input: {
    shape: CreateFieldLevelEncryptionProfileInput
  },
  output: {
    shape: CreateFieldLevelEncryptionProfileOutput
  },
  errors: [
    {
      shape: InconsistentQuantities
    },
    {
      shape: InvalidArgument
    },
    {
      shape: NoSuchPublicKey
    },
    {
      shape: FieldLevelEncryptionProfileAlreadyExists
    },
    {
      shape: FieldLevelEncryptionProfileSizeExceeded
    },
    {
      shape: TooManyFieldLevelEncryptionProfiles
    },
    {
      shape: TooManyFieldLevelEncryptionEncryptionEntities
    },
    {
      shape: TooManyFieldLevelEncryptionFieldPatterns
    }
  ]
};
