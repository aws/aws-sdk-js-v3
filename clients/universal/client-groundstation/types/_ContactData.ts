import { _Elevation, _UnmarshalledElevation } from "./_Elevation";

/**
 * <p>Data describing a contact.</p>
 */
export interface _ContactData {
  /**
   * <p>UUID of a contact.</p>
   */
  contactId?: string;

  /**
   * <p>Status of a contact.</p>
   */
  contactStatus?:
    | "AVAILABLE"
    | "AWS_CANCELLED"
    | "CANCELLED"
    | "COMPLETED"
    | "FAILED"
    | "FAILED_TO_SCHEDULE"
    | "PASS"
    | "POSTPASS"
    | "PREPASS"
    | "SCHEDULED"
    | "SCHEDULING"
    | string;

  /**
   * <p>End time of a contact.</p>
   */
  endTime?: Date | string | number;

  /**
   * <p>Error message of a contact.</p>
   */
  errorMessage?: string;

  /**
   * <p>Name of a ground station.</p>
   */
  groundStation?: string;

  /**
   * <p>Maximum elevation angle of a contact.</p>
   */
  maximumElevation?: _Elevation;

  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  postPassEndTime?: Date | string | number;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   */
  prePassStartTime?: Date | string | number;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>Start time of a contact.</p>
   */
  startTime?: Date | string | number;

  /**
   * <p>Tags assigned to a contact.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledContactData extends _ContactData {
  /**
   * <p>End time of a contact.</p>
   */
  endTime?: Date;

  /**
   * <p>Maximum elevation angle of a contact.</p>
   */
  maximumElevation?: _UnmarshalledElevation;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  postPassEndTime?: Date;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   */
  prePassStartTime?: Date;

  /**
   * <p>Start time of a contact.</p>
   */
  startTime?: Date;

  /**
   * <p>Tags assigned to a contact.</p>
   */
  tags?: { [key: string]: string };
}
