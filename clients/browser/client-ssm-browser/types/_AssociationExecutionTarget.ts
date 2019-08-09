import { _OutputSource, _UnmarshalledOutputSource } from "./_OutputSource";

/**
 * <p>Includes information about the specified association execution.</p>
 */
export interface _AssociationExecutionTarget {
  /**
   * <p>The association ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The association version.</p>
   */
  AssociationVersion?: string;

  /**
   * <p>The execution ID.</p>
   */
  ExecutionId?: string;

  /**
   * <p>The resource ID, for example, the instance ID where the association ran.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource type, for example, instance.</p>
   */
  ResourceType?: string;

  /**
   * <p>The association execution status.</p>
   */
  Status?: string;

  /**
   * <p>Detailed information about the execution status.</p>
   */
  DetailedStatus?: string;

  /**
   * <p>The date of the last execution.</p>
   */
  LastExecutionDate?: Date | string | number;

  /**
   * <p>The location where the association details are saved.</p>
   */
  OutputSource?: _OutputSource;
}

export interface _UnmarshalledAssociationExecutionTarget
  extends _AssociationExecutionTarget {
  /**
   * <p>The date of the last execution.</p>
   */
  LastExecutionDate?: Date;

  /**
   * <p>The location where the association details are saved.</p>
   */
  OutputSource?: _UnmarshalledOutputSource;
}
