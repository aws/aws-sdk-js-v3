import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>LogFileName</i> doesn't refer to an existing DB log file.</p>
 */
export interface DBLogFileNotFoundFault
  extends __ServiceException__<_DBLogFileNotFoundFaultDetails> {
  name: "DBLogFileNotFoundFault";
}

export interface _DBLogFileNotFoundFaultDetails {}
