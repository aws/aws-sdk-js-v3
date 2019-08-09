import { CustomKeyStoreInvalidStateException } from "./CustomKeyStoreInvalidStateException";
import { CustomKeyStoreNotFoundException } from "./CustomKeyStoreNotFoundException";
import { KMSInternalException } from "./KMSInternalException";
export type DisconnectCustomKeyStoreExceptionsUnion =
  | CustomKeyStoreInvalidStateException
  | CustomKeyStoreNotFoundException
  | KMSInternalException;
