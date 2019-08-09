import { PublicKeyAlreadyExists } from "./PublicKeyAlreadyExists";
import { InvalidArgument } from "./InvalidArgument";
import { TooManyPublicKeys } from "./TooManyPublicKeys";
export type CreatePublicKeyExceptionsUnion =
  | PublicKeyAlreadyExists
  | InvalidArgument
  | TooManyPublicKeys;
