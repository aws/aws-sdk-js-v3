import { AccessDenied } from "./AccessDenied";
import { CannotChangeImmutablePublicKeyFields } from "./CannotChangeImmutablePublicKeyFields";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidIfMatchVersion } from "./InvalidIfMatchVersion";
import { IllegalUpdate } from "./IllegalUpdate";
import { NoSuchPublicKey } from "./NoSuchPublicKey";
import { PreconditionFailed } from "./PreconditionFailed";
export type UpdatePublicKeyExceptionsUnion =
  | AccessDenied
  | CannotChangeImmutablePublicKeyFields
  | InvalidArgument
  | InvalidIfMatchVersion
  | IllegalUpdate
  | NoSuchPublicKey
  | PreconditionFailed;
