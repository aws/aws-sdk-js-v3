/**
 * <p>Includes information about the specified association.</p>
 */
export interface _AssociationExecution {
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The association version.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The execution ID for the association.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The status of the association execution.</p>
   */
  Status?: string;

  /**
   * <p>Detailed status information about the execution.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>The time the execution started.</p>
   */
  CreatedTime?: Date | string | number;

  /**
   * <p>The date of the last execution.</p>
   */
  LastExecutionDate?: Date | string | number;

  /**
   * <p>An aggregate status of the resources in the execution based on the status type.</p>
   */
  ResourceCountByStatus?: string;
}

export interface _UnmarshalledAssociationExecution
  extends _AssociationExecution {
  /**
   * <p>The time the execution started.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The date of the last execution.</p>
   */
  LastExecutionDate?: Date;
}
