import { DependencyTimeoutException } from "./DependencyTimeoutException";
import { KMSInternalException } from "./KMSInternalException";
import { CustomKeyStoreNotFoundException } from "./CustomKeyStoreNotFoundException";
import { CustomKeyStoreInvalidStateException } from "./CustomKeyStoreInvalidStateException";
export type GenerateRandomExceptionsUnion =
  | DependencyTimeoutException
  | KMSInternalException
  | CustomKeyStoreNotFoundException
  | CustomKeyStoreInvalidStateException;
