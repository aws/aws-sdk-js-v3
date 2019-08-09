/**
 * <p>Used as the request parameter in the <a>ListAssessmentTargets</a> action.</p>
 */
export interface _AssessmentTargetFilter {
  /**
   * <p>For a record to match a filter, an explicit value or a string that contains a wildcard that is specified for this data type property must match the value of the <b>assessmentTargetName</b> property of the <a>AssessmentTarget</a> data type.</p>
   */
  assessmentTargetNamePattern?: string;
}

export type _UnmarshalledAssessmentTargetFilter = _AssessmentTargetFilter;
