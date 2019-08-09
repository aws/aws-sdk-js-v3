import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The value specified for the <code>sourceDatabaseName</code>, <code>sourceSchemaName</code>, or <code>sourceTableName</code> parameter, or a combination of these, doesn't exist in the snapshot.</p>
 */
export interface InvalidTableRestoreArgumentFault
  extends __ServiceException__<_InvalidTableRestoreArgumentFaultDetails> {
  name: "InvalidTableRestoreArgumentFault";
}

export interface _InvalidTableRestoreArgumentFaultDetails {}
