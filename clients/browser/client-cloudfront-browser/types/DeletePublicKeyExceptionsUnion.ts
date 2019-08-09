import { AccessDenied } from "./AccessDenied";
import { PublicKeyInUse } from "./PublicKeyInUse";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { NoSuchPublicKey } from "./NoSuchPublicKey";
import { PreconditionFailed } from "./PreconditionFailed";
export type DeletePublicKeyExceptionsUnion =
  | AccessDenied
  | PublicKeyInUse
  | InvalidIfMatchVersion
  | NoSuchPublicKey
  | PreconditionFailed;
