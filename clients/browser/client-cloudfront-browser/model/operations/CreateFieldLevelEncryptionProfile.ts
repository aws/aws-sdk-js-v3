import { CreateFieldLevelEncryptionProfileInput } from "../shapes/CreateFieldLevelEncryptionProfileInput";
import { CreateFieldLevelEncryptionProfileOutput } from "../shapes/CreateFieldLevelEncryptionProfileOutput";
import { InconsistentQuantities } from "../shapes/InconsistentQuantities";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { NoSuchPublicKey } from "../shapes/NoSuchPublicKey";
import { FieldLevelEncryptionProfileAlreadyExists } from "../shapes/FieldLevelEncryptionProfileAlreadyExists";
import { FieldLevelEncryptionProfileSizeExceeded } from "../shapes/FieldLevelEncryptionProfileSizeExceeded";
import { TooManyFieldLevelEncryptionProfiles } from "../shapes/TooManyFieldLevelEncryptionProfiles";
import { TooManyFieldLevelEncryptionEncryptionEntities } from "../shapes/TooManyFieldLevelEncryptionEncryptionEntities";
import { TooManyFieldLevelEncryptionFieldPatterns } from "../shapes/TooManyFieldLevelEncryptionFieldPatterns";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateFieldLevelEncryptionProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFieldLevelEncryptionProfile",
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
