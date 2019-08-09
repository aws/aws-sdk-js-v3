/**
 * <p>An object that contains information about a system.</p>
 */
export interface _SystemTemplateSummary {
  /**
   * <p>The ID of the system.</p>
   */
  id?: string;

  /**
   * <p>The ARN of the system.</p>
   */
  arn?: string;

  /**
   * <p>The revision number of the system.</p>
   */
  revisionNumber?: number;

  /**
   * <p>The date when the system was created.</p>
   */
  createdAt?: Date | string | number;
}

export interface _UnmarshalledSystemTemplateSummary
  extends _SystemTemplateSummary {
  /**
   * <p>The date when the system was created.</p>
   */
  createdAt?: Date;
}
