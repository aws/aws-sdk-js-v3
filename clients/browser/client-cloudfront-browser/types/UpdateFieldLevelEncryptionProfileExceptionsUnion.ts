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
export type UpdateFieldLevelEncryptionProfileExceptionsUnion =
  | AccessDenied
  | FieldLevelEncryptionProfileAlreadyExists
  | IllegalUpdate
  | InconsistentQuantities
  | InvalidArgument
  | InvalidIfMatchVersion
  | NoSuchPublicKey
  | NoSuchFieldLevelEncryptionProfile
  | PreconditionFailed
  | FieldLevelEncryptionProfileSizeExceeded
  | TooManyFieldLevelEncryptionEncryptionEntities
  | TooManyFieldLevelEncryptionFieldPatterns;
