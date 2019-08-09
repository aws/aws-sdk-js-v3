import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The user already has a DB instance with the given identifier.</p>
 */
export interface DBInstanceAlreadyExistsFault
  extends __ServiceException__<_DBInstanceAlreadyExistsFaultDetails> {
  name: "DBInstanceAlreadyExistsFault";
}

export interface _DBInstanceAlreadyExistsFaultDetails {}
