import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Inventory item type schema version has to match supported versions in the service. Check output of GetInventorySchema to see the available schema version for each type.</p>
 */
export interface UnsupportedInventorySchemaVersionException
  extends __ServiceException__<
    _UnsupportedInventorySchemaVersionExceptionDetails
  > {
  name: "UnsupportedInventorySchemaVersionException";
}

export interface _UnsupportedInventorySchemaVersionExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
