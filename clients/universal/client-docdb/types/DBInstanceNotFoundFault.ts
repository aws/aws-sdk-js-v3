import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance. </p>
 */
export interface DBInstanceNotFoundFault
  extends __ServiceException__<_DBInstanceNotFoundFaultDetails> {
  name: "DBInstanceNotFoundFault";
}

export interface _DBInstanceNotFoundFaultDetails {}
