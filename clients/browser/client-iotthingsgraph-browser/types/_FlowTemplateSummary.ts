/**
 * <p>An object that contains summary information about a workflow.</p>
 */
export interface _FlowTemplateSummary {
  /**
   * <p>The ID of the workflow.</p>
   */
  id?: string;

  /**
   * <p>The ARN of the workflow.</p>
   */
  arn?: string;

  /**
   * <p>The revision number of the workflow.</p>
   */
  revisionNumber?: number;

  /**
   * <p>The date when the workflow was created.</p>
   */
  createdAt?: Date | string | number;
}

export interface _UnmarshalledFlowTemplateSummary extends _FlowTemplateSummary {
  /**
   * <p>The date when the workflow was created.</p>
   */
  createdAt?: Date;
}
