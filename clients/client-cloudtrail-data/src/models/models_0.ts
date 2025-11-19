// smithy-typescript generated code
/**
 * <p>An event from a source outside of Amazon Web Services that you want CloudTrail
 *       to log.</p>
 * @public
 */
export interface AuditEvent {
  /**
   * <p>The original event ID from the source event.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The content of an audit event that comes from the event, such as <code>userIdentity</code>,
   *          <code>userAgent</code>, and <code>eventSource</code>.</p>
   * @public
   */
  eventData: string | undefined;

  /**
   * <p>A checksum is a base64-SHA256 algorithm that helps you verify that CloudTrail receives the event that matches
   *          with the checksum. Calculate the checksum by running a command like the following:</p>
   *          <p>
   *             <code>printf %s <i>$eventdata</i> | openssl dgst -binary -sha256 | base64</code>
   *          </p>
   * @public
   */
  eventDataChecksum?: string | undefined;
}

/**
 * <p>A response that includes successful and failed event results.</p>
 * @public
 */
export interface AuditEventResultEntry {
  /**
   * <p>The original event ID from the source event.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The event ID assigned by CloudTrail.</p>
   * @public
   */
  eventID: string | undefined;
}

/**
 * @public
 */
export interface PutAuditEventsRequest {
  /**
   * <p>The JSON payload of events that you want to ingest. You can also point to the JSON event
   *          payload in a file.</p>
   * @public
   */
  auditEvents: AuditEvent[] | undefined;

  /**
   * <p>The ARN or ID (the ARN suffix) of a channel.</p>
   * @public
   */
  channelArn: string | undefined;

  /**
   * <p>A unique identifier that is conditionally required when the channel's resource policy includes an external
   *          ID. This value can be any string,
   *          such as a passphrase or account number.</p>
   * @public
   */
  externalId?: string | undefined;
}

/**
 * <p>Includes the error code and error message for events that could not be ingested by CloudTrail.</p>
 * @public
 */
export interface ResultErrorEntry {
  /**
   * <p>The original event ID from the source event that could not be ingested by CloudTrail.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The error code for events that could not be ingested by CloudTrail. Possible error codes include: <code>FieldTooLong</code>, <code>FieldNotFound</code>,
   *          <code>InvalidChecksum</code>, <code>InvalidData</code>, <code>InvalidRecipient</code>, <code>InvalidEventSource</code>, <code>AccountNotSubscribed</code>,
   *          <code>Throttling</code>, and <code>InternalFailure</code>.</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * <p>The message that describes the error for events that could not be ingested by CloudTrail.</p>
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface PutAuditEventsResponse {
  /**
   * <p>Lists events in the provided event payload that were successfully ingested
   *       into CloudTrail.</p>
   * @public
   */
  successful: AuditEventResultEntry[] | undefined;

  /**
   * <p>Lists events in the provided event payload that could not be
   *          ingested into CloudTrail, and includes the error code and error message
   *          returned for events that could not be ingested.</p>
   * @public
   */
  failed: ResultErrorEntry[] | undefined;
}
