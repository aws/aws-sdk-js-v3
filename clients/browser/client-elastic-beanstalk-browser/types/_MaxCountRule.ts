/**
 * <p>A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.</p>
 */
export interface _MaxCountRule {
  /**
   * <p>Specify <code>true</code> to apply the rule, or <code>false</code> to disable it.</p>
   */
  Enabled: boolean;

  /**
   * <p>Specify the maximum number of application versions to retain.</p>
   */
  MaxCount?: number;

  /**
   * <p>Set to <code>true</code> to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.</p>
   */
  DeleteSourceFromS3?: boolean;
}

export type _UnmarshalledMaxCountRule = _MaxCountRule;
