import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Storage of the specified <code>StorageType</code> can't be associated with the DB instance. </p>
 */
export interface StorageTypeNotSupportedFault
  extends __ServiceException__<_StorageTypeNotSupportedFaultDetails> {
  name: "StorageTypeNotSupportedFault";
}

export interface _StorageTypeNotSupportedFaultDetails {}
