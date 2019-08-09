/**
 * <p>Describes an association status.</p>
 */
export interface _AssociationStatus {
  /**
   * <p>The date when the status changed.</p>
   */
  Date: Date | string | number;

  /**
   * <p>The status.</p>
   */
  Name: "Pending" | "Success" | "Failed" | string;

  /**
   * <p>The reason for the status.</p>
   */
  Message: string;

  /**
   * <p>A user-defined string.</p>
   */
  AdditionalInfo?: string;
}

export interface _UnmarshalledAssociationStatus extends _AssociationStatus {
  /**
   * <p>The date when the status changed.</p>
   */
  Date: Date;
}
