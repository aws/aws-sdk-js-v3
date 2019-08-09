import { AccessDenied } from "./AccessDenied";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { NoSuchFieldLevelEncryptionProfile } from "./NoSuchFieldLevelEncryptionProfile";
import { PreconditionFailed } from "./PreconditionFailed";
import { FieldLevelEncryptionProfileInUse } from "./FieldLevelEncryptionProfileInUse";
export type DeleteFieldLevelEncryptionProfileExceptionsUnion =
  | AccessDenied
  | InvalidIfMatchVersion
  | NoSuchFieldLevelEncryptionProfile
  | PreconditionFailed
  | FieldLevelEncryptionProfileInUse;
