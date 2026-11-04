// smithy-typescript generated code
/**
 * An event from a source outside of Amazon Web Services that you want CloudTrail to log.
 *
 * @public
 */
export interface AuditEvent {
  /**
   * The original event ID from the source event.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The content of an audit event that comes from the event, such as `userIdentity`, `userAgent`, and `eventSource`.
   *
   * @public
   */
  eventData: string | undefined;

  /**
   * A checksum is a base64-SHA256 algorithm that helps you verify that CloudTrail receives the event that matches with the checksum. Calculate the checksum by running a command like the following:
   *
   * `printf %s $eventdata | openssl dgst -binary -sha256 | base64`
   *
   * @public
   */
  eventDataChecksum?: string | undefined;
}

/**
 * A response that includes successful and failed event results.
 *
 * @public
 */
export interface AuditEventResultEntry {
  /**
   * The original event ID from the source event.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The event ID assigned by CloudTrail.
   *
   * @public
   */
  eventID: string | undefined;
}

/**
 * @public
 */
export interface PutAuditEventsRequest {
  /**
   * The JSON payload of events that you want to ingest. You can also point to the JSON event payload in a file.
   *
   * @public
   */
  auditEvents: AuditEvent[] | undefined;

  /**
   * The ARN or ID (the ARN suffix) of a channel.
   *
   * @public
   */
  channelArn: string | undefined;

  /**
   * A unique identifier that is conditionally required when the channel's resource policy includes an external ID. This value can be any string, such as a passphrase or account number.
   *
   * @public
   */
  externalId?: string | undefined;
}

/**
 * Includes the error code and error message for events that could not be ingested by CloudTrail.
 *
 * @public
 */
export interface ResultErrorEntry {
  /**
   * The original event ID from the source event that could not be ingested by CloudTrail.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The error code for events that could not be ingested by CloudTrail. Possible error codes include: `FieldTooLong`, `FieldNotFound`, `InvalidChecksum`, `InvalidData`, `InvalidRecipient`, `InvalidEventSource`, `AccountNotSubscribed`, `Throttling`, and `InternalFailure`.
   *
   * @public
   */
  errorCode: string | undefined;

  /**
   * The message that describes the error for events that could not be ingested by CloudTrail.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface PutAuditEventsResponse {
  /**
   * Lists events in the provided event payload that were successfully ingested into CloudTrail.
   *
   * @public
   */
  successful: AuditEventResultEntry[] | undefined;

  /**
   * Lists events in the provided event payload that could not be ingested into CloudTrail, and includes the error code and error message returned for events that could not be ingested.
   *
   * @public
   */
  failed: ResultErrorEntry[] | undefined;
}
