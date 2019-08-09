/**
 * <p>Used as one of the elements of the <a>AssessmentRun</a> data type.</p>
 */
export interface _AssessmentRunStateChange {
  /**
   * <p>The last time the assessment run state changed.</p>
   */
  stateChangedAt: Date | string | number;

  /**
   * <p>The assessment run state.</p>
   */
  state:
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
    | string;
}

export interface _UnmarshalledAssessmentRunStateChange
  extends _AssessmentRunStateChange {
  /**
   * <p>The last time the assessment run state changed.</p>
   */
  stateChangedAt: Date;
}
