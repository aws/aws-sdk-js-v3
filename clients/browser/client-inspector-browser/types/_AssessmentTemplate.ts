import { _Attribute, _UnmarshalledAttribute } from "./_Attribute";

/**
 * <p>Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action.</p>
 */
export interface _AssessmentTemplate {
  /**
   * <p>The ARN of the assessment template.</p>
   */
  arn: string;

  /**
   * <p>The name of the assessment template.</p>
   */
  name: string;

  /**
   * <p>The ARN of the assessment target that corresponds to this assessment template.</p>
   */
  assessmentTargetArn: string;

  /**
   * <p>The duration in seconds specified for this assessment template. The default value is 3600 seconds (one hour). The maximum value is 86400 seconds (one day).</p>
   */
  durationInSeconds: number;

  /**
   * <p>The rules packages that are specified for this assessment template.</p>
   */
  rulesPackageArns: Array<string> | Iterable<string>;

  /**
   * <p>The user-defined attributes that are assigned to every generated finding from the assessment run that uses this assessment template.</p>
   */
  userAttributesForFindings: Array<_Attribute> | Iterable<_Attribute>;

  /**
   * <p>The Amazon Resource Name (ARN) of the most recent assessment run associated with this assessment template. This value exists only when the value of assessmentRunCount is greaterpa than zero.</p>
   */
  lastAssessmentRunArn?: string;

  /**
   * <p>The number of existing assessment runs associated with this assessment template. This value can be zero or a positive integer.</p>
   */
  assessmentRunCount: number;

  /**
   * <p>The time at which the assessment template is created.</p>
   */
  createdAt: Date | string | number;
}

export interface _UnmarshalledAssessmentTemplate extends _AssessmentTemplate {
  /**
   * <p>The rules packages that are specified for this assessment template.</p>
   */
  rulesPackageArns: Array<string>;

  /**
   * <p>The user-defined attributes that are assigned to every generated finding from the assessment run that uses this assessment template.</p>
   */
  userAttributesForFindings: Array<_UnmarshalledAttribute>;

  /**
   * <p>The time at which the assessment template is created.</p>
   */
  createdAt: Date;
}
