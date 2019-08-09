/**
 * <p>Contains information about an Amazon Inspector application. This data type is used as the response element in the <a>DescribeAssessmentTargets</a> action.</p>
 */
export interface _AssessmentTarget {
  /**
   * <p>The ARN that specifies the Amazon Inspector assessment target.</p>
   */
  arn: string;

  /**
   * <p>The name of the Amazon Inspector assessment target.</p>
   */
  name: string;

  /**
   * <p>The ARN that specifies the resource group that is associated with the assessment target.</p>
   */
  resourceGroupArn?: string;

  /**
   * <p>The time at which the assessment target is created.</p>
   */
  createdAt: Date | string | number;

  /**
   * <p>The time at which <a>UpdateAssessmentTarget</a> is called.</p>
   */
  updatedAt: Date | string | number;
}

export interface _UnmarshalledAssessmentTarget extends _AssessmentTarget {
  /**
   * <p>The time at which the assessment target is created.</p>
   */
  createdAt: Date;

  /**
   * <p>The time at which <a>UpdateAssessmentTarget</a> is called.</p>
   */
  updatedAt: Date;
}
