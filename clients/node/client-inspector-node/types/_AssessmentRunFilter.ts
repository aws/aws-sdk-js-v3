import { _DurationRange, _UnmarshalledDurationRange } from "./_DurationRange";
import {
  _TimestampRange,
  _UnmarshalledTimestampRange
} from "./_TimestampRange";

/**
 * <p>Used as the request parameter in the <a>ListAssessmentRuns</a> action.</p>
 */
export interface _AssessmentRunFilter {
  /**
   * <p>For a record to match a filter, an explicit value or a string containing a wildcard that is specified for this data type property must match the value of the <b>assessmentRunName</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  namePattern?: string;

  /**
   * <p>For a record to match a filter, one of the values specified for this data type property must be the exact match of the value of the <b>assessmentRunState</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  states?:
    | Array<
        | "CREATED"
        | "START_DATA_COLLECTION_PENDING"
        | "START_DATA_COLLECTION_IN_PROGRESS"
        | "COLLECTING_DATA"
        | "STOP_DATA_COLLECTION_PENDING"
        | "DATA_COLLECTED"
        | "START_EVALUATING_RULES_PENDING"
        | "EVALUATING_RULES"
        | "FAILED"
        | "ERROR"
        | "COMPLETED"
        | "COMPLETED_WITH_ERRORS"
        | "CANCELED"
        | string
      >
    | Iterable<
        | "CREATED"
        | "START_DATA_COLLECTION_PENDING"
        | "START_DATA_COLLECTION_IN_PROGRESS"
        | "COLLECTING_DATA"
        | "STOP_DATA_COLLECTION_PENDING"
        | "DATA_COLLECTED"
        | "START_EVALUATING_RULES_PENDING"
        | "EVALUATING_RULES"
        | "FAILED"
        | "ERROR"
        | "COMPLETED"
        | "COMPLETED_WITH_ERRORS"
        | "CANCELED"
        | string
      >;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type property must inclusively match any value between the specified minimum and maximum values of the <b>durationInSeconds</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  durationRange?: _DurationRange;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type property must be contained in the list of values of the <b>rulesPackages</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  rulesPackageArns?: Array<string> | Iterable<string>;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type property must inclusively match any value between the specified minimum and maximum values of the <b>startTime</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  startTimeRange?: _TimestampRange;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type property must inclusively match any value between the specified minimum and maximum values of the <b>completedAt</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  completionTimeRange?: _TimestampRange;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type property must match the <b>stateChangedAt</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  stateChangeTimeRange?: _TimestampRange;
}

export interface _UnmarshalledAssessmentRunFilter extends _AssessmentRunFilter {
  /**
   * <p>For a record to match a filter, one of the values specified for this data type property must be the exact match of the value of the <b>assessmentRunState</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  states?: Array<
    | "CREATED"
    | "START_DATA_COLLECTION_PENDING"
    | "START_DATA_COLLECTION_IN_PROGRESS"
    | "COLLECTING_DATA"
    | "STOP_DATA_COLLECTION_PENDING"
    | "DATA_COLLECTED"
    | "START_EVALUATING_RULES_PENDING"
    | "EVALUATING_RULES"
    | "FAILED"
    | "ERROR"
    | "COMPLETED"
    | "COMPLETED_WITH_ERRORS"
    | "CANCELED"
    | string
  >;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type property must inclusively match any value between the specified minimum and maximum values of the <b>durationInSeconds</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  durationRange?: _UnmarshalledDurationRange;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type property must be contained in the list of values of the <b>rulesPackages</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  rulesPackageArns?: Array<string>;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type property must inclusively match any value between the specified minimum and maximum values of the <b>startTime</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  startTimeRange?: _UnmarshalledTimestampRange;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type property must inclusively match any value between the specified minimum and maximum values of the <b>completedAt</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  completionTimeRange?: _UnmarshalledTimestampRange;

  /**
   * <p>For a record to match a filter, the value that is specified for this data type property must match the <b>stateChangedAt</b> property of the <a>AssessmentRun</a> data type.</p>
   */
  stateChangeTimeRange?: _UnmarshalledTimestampRange;
}
