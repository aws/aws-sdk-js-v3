/**
 * <p>A lifecycle rule that deletes application versions after the specified number of days.</p>
 */
export interface _MaxAgeRule {
  /**
   * <p>Specify <code>true</code> to apply the rule, or <code>false</code> to disable it.</p>
   */
  Enabled: boolean;

  /**
   * <p>Specify the number of days to retain an application versions.</p>
   */
  MaxAgeInDays?: number;

  /**
   * <p>Set to <code>true</code> to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.</p>
   */
  DeleteSourceFromS3?: boolean;
}

export type _UnmarshalledMaxAgeRule = _MaxAgeRule;
