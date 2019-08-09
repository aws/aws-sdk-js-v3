import { _Action, _UnmarshalledAction } from "./_Action";

/**
 * _Service shape
 */
export interface _Service {
  /**
   * <p>Information about the activity described in a finding.</p>
   */
  Action?: _Action;

  /**
   * <p>Indicates whether this finding is archived.</p>
   */
  Archived?: boolean;

  /**
   * <p>Total count of the occurrences of this finding type.</p>
   */
  Count?: number;

  /**
   * <p>Detector ID for the GuardDuty service.</p>
   */
  DetectorId?: string;

  /**
   * <p>First seen timestamp of the activity that prompted GuardDuty to generate this finding.</p>
   */
  EventFirstSeen?: string;

  /**
   * <p>Last seen timestamp of the activity that prompted GuardDuty to generate this finding.</p>
   */
  EventLastSeen?: string;

  /**
   * <p>Resource role information for this finding.</p>
   */
  ResourceRole?: string;

  /**
   * <p>The name of the AWS service (GuardDuty) that generated a finding.</p>
   */
  ServiceName?: string;

  /**
   * <p>Feedback left about the finding.</p>
   */
  UserFeedback?: string;
}

export interface _UnmarshalledService extends _Service {
  /**
   * <p>Information about the activity described in a finding.</p>
   */
  Action?: _UnmarshalledAction;
}
