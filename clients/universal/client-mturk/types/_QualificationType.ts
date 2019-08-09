/**
 * <p> The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test. </p>
 */
export interface _QualificationType {
  /**
   * <p> A unique identifier for the Qualification type. A Qualification type is given a Qualification type ID when you call the CreateQualificationType operation. </p>
   */
  QualificationTypeId?: string;

  /**
   * <p> The date and time the Qualification type was created. </p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p> The name of the Qualification type. The type name is used to identify the type, and to find the type using a Qualification type search. </p>
   */
  Name?: string;

  /**
   * <p> A long description for the Qualification type. </p>
   */
  Description?: string;

  /**
   * <p> One or more words or phrases that describe theQualification type, separated by commas. The Keywords make the type easier to find using a search. </p>
   */
  Keywords?: string;

  /**
   * <p> The status of the Qualification type. A Qualification type's status determines if users can apply to receive a Qualification of this type, and if HITs can be created with requirements based on this type. Valid values are Active | Inactive. </p>
   */
  QualificationTypeStatus?: "Active" | "Inactive" | string;

  /**
   * <p> The questions for a Qualification test associated with this Qualification type that a user can take to obtain a Qualification of this type. This parameter must be specified if AnswerKey is present. A Qualification type cannot have both a specified Test parameter and an AutoGranted value of true. </p>
   */
  Test?: string;

  /**
   * <p> The amount of time, in seconds, given to a Worker to complete the Qualification test, beginning from the time the Worker requests the Qualification. </p>
   */
  TestDurationInSeconds?: number;

  /**
   * <p>The answers to the Qualification test specified in the Test parameter.</p>
   */
  AnswerKey?: string;

  /**
   * <p> The amount of time, in seconds, Workers must wait after taking the Qualification test before they can take it again. Workers can take a Qualification test multiple times if they were not granted the Qualification from a previous attempt, or if the test offers a gradient score and they want a better score. If not specified, retries are disabled and Workers can request a Qualification only once. </p>
   */
  RetryDelayInSeconds?: number;

  /**
   * <p> Specifies whether the Qualification type is one that a user can request through the Amazon Mechanical Turk web site, such as by taking a Qualification test. This value is False for Qualifications assigned automatically by the system. Valid values are True | False. </p>
   */
  IsRequestable?: boolean;

  /**
   * <p>Specifies that requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test. Valid values are True | False.</p>
   */
  AutoGranted?: boolean;

  /**
   * <p> The Qualification integer value to use for automatically granted Qualifications, if AutoGranted is true. This is 1 by default. </p>
   */
  AutoGrantedValue?: number;
}

export interface _UnmarshalledQualificationType extends _QualificationType {
  /**
   * <p> The date and time the Qualification type was created. </p>
   */
  CreationTime?: Date;
}
