import { AccessDenied } from "./AccessDenied";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { NoSuchFieldLevelEncryptionConfig } from "./NoSuchFieldLevelEncryptionConfig";
import { PreconditionFailed } from "./PreconditionFailed";
import { FieldLevelEncryptionConfigInUse } from "./FieldLevelEncryptionConfigInUse";
export type DeleteFieldLevelEncryptionConfigExceptionsUnion =
  | AccessDenied
  | InvalidIfMatchVersion
  | NoSuchFieldLevelEncryptionConfig
  | PreconditionFailed
  | FieldLevelEncryptionConfigInUse;
