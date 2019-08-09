import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of tables in the cluster exceeds the limit for the requested new cluster node type. </p>
 */
export interface TableLimitExceededFault
  extends __ServiceException__<_TableLimitExceededFaultDetails> {
  name: "TableLimitExceededFault";
}

export interface _TableLimitExceededFaultDetails {}
