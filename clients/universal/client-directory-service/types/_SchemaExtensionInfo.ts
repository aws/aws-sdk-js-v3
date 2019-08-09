/**
 * <p>Information about a schema extension.</p>
 */
export interface _SchemaExtensionInfo {
  /**
   * <p>The identifier of the directory to which the schema extension is applied.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The identifier of the schema extension.</p>
   */
  SchemaExtensionId?: string;

  /**
   * <p>A description of the schema extension.</p>
   */
  Description?: string;

  /**
   * <p>The current status of the schema extension.</p>
   */
  SchemaExtensionStatus?:
    | "Initializing"
    | "CreatingSnapshot"
    | "UpdatingSchema"
    | "Replicating"
    | "CancelInProgress"
    | "RollbackInProgress"
    | "Cancelled"
    | "Failed"
    | "Completed"
    | string;

  /**
   * <p>The reason for the <code>SchemaExtensionStatus</code>.</p>
   */
  SchemaExtensionStatusReason?: string;

  /**
   * <p>The date and time that the schema extension started being applied to the directory.</p>
   */
  StartDateTime?: Date | string | number;

  /**
   * <p>The date and time that the schema extension was completed.</p>
   */
  EndDateTime?: Date | string | number;
}

export interface _UnmarshalledSchemaExtensionInfo extends _SchemaExtensionInfo {
  /**
   * <p>The date and time that the schema extension started being applied to the directory.</p>
   */
  StartDateTime?: Date;

  /**
   * <p>The date and time that the schema extension was completed.</p>
   */
  EndDateTime?: Date;
}
