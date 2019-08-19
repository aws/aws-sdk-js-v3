/**
 * <p>Describes an event.</p>
 */
export interface _EventDescription {
  /**
   * <p>The date when the event occurred.</p>
   */
  EventDate?: Date | string | number;

  /**
   * <p>The event message.</p>
   */
  Message?: string;

  /**
   * <p>The application associated with the event.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The release label for the application version associated with this event.</p>
   */
  VersionLabel?: string;

  /**
   * <p>The name of the configuration associated with this event.</p>
   */
  TemplateName?: string;

  /**
   * <p>The name of the environment associated with this event.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The ARN of the platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The web service request ID for the activity of this event.</p>
   */
  RequestId?: string;

  /**
   * <p>The severity level of this event.</p>
   */
  Severity?: "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL" | string;
}

export interface _UnmarshalledEventDescription extends _EventDescription {
  /**
   * <p>The date when the event occurred.</p>
   */
  EventDate?: Date;
}
