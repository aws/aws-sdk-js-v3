import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>StorageType</i> specified cannot be associated with the DB Instance.</p>
 */
export interface StorageTypeNotSupportedFault
  extends __ServiceException__<_StorageTypeNotSupportedFaultDetails> {
  name: "StorageTypeNotSupportedFault";
}

export interface _StorageTypeNotSupportedFaultDetails {}
