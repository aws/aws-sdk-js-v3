import { InvalidAddressException } from "./InvalidAddressException";
import { UnsupportedAddressException } from "./UnsupportedAddressException";
export type CreateAddressExceptionsUnion =
  | InvalidAddressException
  | UnsupportedAddressException;
