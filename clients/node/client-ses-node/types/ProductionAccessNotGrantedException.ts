import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the account has not been granted production access.</p>
 */
export interface ProductionAccessNotGrantedException
  extends __ServiceException__<_ProductionAccessNotGrantedExceptionDetails> {
  name: "ProductionAccessNotGrantedException";
}

export interface _ProductionAccessNotGrantedExceptionDetails {}
