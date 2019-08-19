import { InconsistentQuantities } from "./InconsistentQuantities";
import { InvalidArgument } from "./InvalidArgument";
import { NoSuchFieldLevelEncryptionProfile } from "./NoSuchFieldLevelEncryptionProfile";
import { FieldLevelEncryptionConfigAlreadyExists } from "./FieldLevelEncryptionConfigAlreadyExists";
import { TooManyFieldLevelEncryptionConfigs } from "./TooManyFieldLevelEncryptionConfigs";
import { TooManyFieldLevelEncryptionQueryArgProfiles } from "./TooManyFieldLevelEncryptionQueryArgProfiles";
import { TooManyFieldLevelEncryptionContentTypeProfiles } from "./TooManyFieldLevelEncryptionContentTypeProfiles";
import { QueryArgProfileEmpty } from "./QueryArgProfileEmpty";
export type CreateFieldLevelEncryptionConfigExceptionsUnion =
  | InconsistentQuantities
  | InvalidArgument
  | NoSuchFieldLevelEncryptionProfile
  | FieldLevelEncryptionConfigAlreadyExists
  | TooManyFieldLevelEncryptionConfigs
  | TooManyFieldLevelEncryptionQueryArgProfiles
  | TooManyFieldLevelEncryptionContentTypeProfiles
  | QueryArgProfileEmpty;
