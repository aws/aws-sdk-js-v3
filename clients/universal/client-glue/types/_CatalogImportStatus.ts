/**
 * <p>A structure containing migration status information.</p>
 */
export interface _CatalogImportStatus {
  /**
   * <p>True if the migration has completed, or False otherwise.</p>
   */
  ImportCompleted?: boolean;

  /**
   * <p>The time that the migration was started.</p>
   */
  ImportTime?: Date | string | number;

  /**
   * <p>The name of the person who initiated the migration.</p>
   */
  ImportedBy?: string;
}

export interface _UnmarshalledCatalogImportStatus extends _CatalogImportStatus {
  /**
   * <p>The time that the migration was started.</p>
   */
  ImportTime?: Date;
}
