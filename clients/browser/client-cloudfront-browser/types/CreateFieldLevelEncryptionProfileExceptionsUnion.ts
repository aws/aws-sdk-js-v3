import { InconsistentQuantities } from "./InconsistentQuantities";
import { InvalidArgument } from "./InvalidArgument";
import { NoSuchPublicKey } from "./NoSuchPublicKey";
import { FieldLevelEncryptionProfileAlreadyExists } from "./FieldLevelEncryptionProfileAlreadyExists";
import { FieldLevelEncryptionProfileSizeExceeded } from "./FieldLevelEncryptionProfileSizeExceeded";
import { TooManyFieldLevelEncryptionProfiles } from "./TooManyFieldLevelEncryptionProfiles";
import { TooManyFieldLevelEncryptionEncryptionEntities } from "./TooManyFieldLevelEncryptionEncryptionEntities";
import { TooManyFieldLevelEncryptionFieldPatterns } from "./TooManyFieldLevelEncryptionFieldPatterns";
export type CreateFieldLevelEncryptionProfileExceptionsUnion =
  | InconsistentQuantities
  | InvalidArgument
  | NoSuchPublicKey
  | FieldLevelEncryptionProfileAlreadyExists
  | FieldLevelEncryptionProfileSizeExceeded
  | TooManyFieldLevelEncryptionProfiles
  | TooManyFieldLevelEncryptionEncryptionEntities
  | TooManyFieldLevelEncryptionFieldPatterns;
