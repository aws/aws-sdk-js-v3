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
export type UpdateFieldLevelEncryptionConfigExceptionsUnion =
  | AccessDenied
  | IllegalUpdate
  | InconsistentQuantities
  | InvalidArgument
  | InvalidIfMatchVersion
  | NoSuchFieldLevelEncryptionProfile
  | NoSuchFieldLevelEncryptionConfig
  | PreconditionFailed
  | TooManyFieldLevelEncryptionQueryArgProfiles
  | TooManyFieldLevelEncryptionContentTypeProfiles
  | QueryArgProfileEmpty;
