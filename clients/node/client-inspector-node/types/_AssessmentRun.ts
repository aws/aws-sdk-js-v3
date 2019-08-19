import { _Attribute, _UnmarshalledAttribute } from "./_Attribute";
import {
  _AssessmentRunStateChange,
  _UnmarshalledAssessmentRunStateChange
} from "./_AssessmentRunStateChange";
import {
  _AssessmentRunNotification,
  _UnmarshalledAssessmentRunNotification
} from "./_AssessmentRunNotification";

/**
 * <p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p>
 */
export interface _AssessmentRun {
  /**
   * <p>The ARN of the assessment run.</p>
   */
  arn: string;

  /**
   * <p>The auto-generated name for the assessment run.</p>
   */
  name: string;

  /**
   * <p>The ARN of the assessment template that is associated with the assessment run.</p>
   */
  assessmentTemplateArn: string;

  /**
   * <p>The state of the assessment run.</p>
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

  /**
   * <p>The duration of the assessment run.</p>
   */
  durationInSeconds: number;

  /**
   * <p>The rules packages selected for the assessment run.</p>
   */
  rulesPackageArns: Array<string> | Iterable<string>;

  /**
   * <p>The user-defined attributes that are assigned to every generated finding.</p>
   */
  userAttributesForFindings: Array<_Attribute> | Iterable<_Attribute>;

  /**
   * <p>The time when <a>StartAssessmentRun</a> was called.</p>
   */
  createdAt: Date | string | number;

  /**
   * <p>The time when <a>StartAssessmentRun</a> was called.</p>
   */
  startedAt?: Date | string | number;

  /**
   * <p>The assessment run completion time that corresponds to the rules packages evaluation completion time or failure.</p>
   */
  completedAt?: Date | string | number;

  /**
   * <p>The last time when the assessment run's state changed.</p>
   */
  stateChangedAt: Date | string | number;

  /**
   * <p>A Boolean value (true or false) that specifies whether the process of collecting data from the agents is completed.</p>
   */
  dataCollected: boolean;

  /**
   * <p>A list of the assessment run state changes.</p>
   */
  stateChanges:
    | Array<_AssessmentRunStateChange>
    | Iterable<_AssessmentRunStateChange>;

  /**
   * <p>A list of notifications for the event subscriptions. A notification about a particular generated finding is added to this list only once.</p>
   */
  notifications:
    | Array<_AssessmentRunNotification>
    | Iterable<_AssessmentRunNotification>;

  /**
   * <p>Provides a total count of generated findings per severity.</p>
   */
  findingCounts:
    | {
        [key in
          | "Low"
          | "Medium"
          | "High"
          | "Informational"
          | "Undefined"
          | string]: number
      }
    | Iterable<
        [
          "Low" | "Medium" | "High" | "Informational" | "Undefined" | string,
          number
        ]
      >;
}

export interface _UnmarshalledAssessmentRun extends _AssessmentRun {
  /**
   * <p>The rules packages selected for the assessment run.</p>
   */
  rulesPackageArns: Array<string>;

  /**
   * <p>The user-defined attributes that are assigned to every generated finding.</p>
   */
  userAttributesForFindings: Array<_UnmarshalledAttribute>;

  /**
   * <p>The time when <a>StartAssessmentRun</a> was called.</p>
   */
  createdAt: Date;

  /**
   * <p>The time when <a>StartAssessmentRun</a> was called.</p>
   */
  startedAt?: Date;

  /**
   * <p>The assessment run completion time that corresponds to the rules packages evaluation completion time or failure.</p>
   */
  completedAt?: Date;

  /**
   * <p>The last time when the assessment run's state changed.</p>
   */
  stateChangedAt: Date;

  /**
   * <p>A list of the assessment run state changes.</p>
   */
  stateChanges: Array<_UnmarshalledAssessmentRunStateChange>;

  /**
   * <p>A list of notifications for the event subscriptions. A notification about a particular generated finding is added to this list only once.</p>
   */
  notifications: Array<_UnmarshalledAssessmentRunNotification>;

  /**
   * <p>Provides a total count of generated findings per severity.</p>
   */
  findingCounts: {
    [key in
      | "Low"
      | "Medium"
      | "High"
      | "Informational"
      | "Undefined"
      | string]: number
  };
}
