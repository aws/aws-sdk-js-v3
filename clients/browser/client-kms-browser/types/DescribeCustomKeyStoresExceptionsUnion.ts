import { CustomKeyStoreNotFoundException } from "./CustomKeyStoreNotFoundException";
import { KMSInternalException } from "./KMSInternalException";
export type DescribeCustomKeyStoresExceptionsUnion =
  | CustomKeyStoreNotFoundException
  | KMSInternalException;
