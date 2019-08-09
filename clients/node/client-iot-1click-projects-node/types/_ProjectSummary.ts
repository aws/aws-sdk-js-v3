/**
 * <p>An object providing summary information for a particular project for an associated AWS account and region.</p>
 */
export interface _ProjectSummary {
  /**
   * <p>The ARN of the project.</p>
   */
  arn?: string;

  /**
   * <p>The name of the project being summarized.</p>
   */
  projectName: string;

  /**
   * <p>The date when the project was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date | string | number;

  /**
   * <p>The date when the project was last updated, in UNIX epoch time format. If the project was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   */
  updatedDate: Date | string | number;

  /**
   * <p>The tags (metadata key/value pairs) associated with the project.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledProjectSummary extends _ProjectSummary {
  /**
   * <p>The date when the project was originally created, in UNIX epoch time format.</p>
   */
  createdDate: Date;

  /**
   * <p>The date when the project was last updated, in UNIX epoch time format. If the project was not updated, then <code>createdDate</code> and <code>updatedDate</code> are the same.</p>
   */
  updatedDate: Date;

  /**
   * <p>The tags (metadata key/value pairs) associated with the project.</p>
   */
  tags?: { [key: string]: string };
}
