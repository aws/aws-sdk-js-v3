import { _DurationRange, _UnmarshalledDurationRange } from "./_DurationRange";

/**
 * <p>Used as the request parameter in the <a>ListAssessmentTemplates</a> action.</p>
 */
export interface _AssessmentTemplateFilter {
  /**
   * <p>For a record to match a filter, an explicit value or a string that contains a wildcard that is specified for this data type property must match the value of the <b>assessmentTemplateName</b> property of the <a>AssessmentTemplate</a> data type.</p>
   */
  namePattern?: string;

  /**
   * <p>For a record to match a filter, the value specified for this data type property must inclusively match any value between the specified minimum and maximum values of the <b>durationInSeconds</b> property of the <a>AssessmentTemplate</a> data type.</p>
   */
  durationRange?: _DurationRange;

  /**
   * <p>For a record to match a filter, the values that are specified for this data type property must be contained in the list of values of the <b>rulesPackageArns</b> property of the <a>AssessmentTemplate</a> data type.</p>
   */
  rulesPackageArns?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledAssessmentTemplateFilter
  extends _AssessmentTemplateFilter {
  /**
   * <p>For a record to match a filter, the value specified for this data type property must inclusively match any value between the specified minimum and maximum values of the <b>durationInSeconds</b> property of the <a>AssessmentTemplate</a> data type.</p>
   */
  durationRange?: _UnmarshalledDurationRange;

  /**
   * <p>For a record to match a filter, the values that are specified for this data type property must be contained in the list of values of the <b>rulesPackageArns</b> property of the <a>AssessmentTemplate</a> data type.</p>
   */
  rulesPackageArns?: Array<string>;
}
