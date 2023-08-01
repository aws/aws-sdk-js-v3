// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudTrailDataServiceException as __BaseException } from "./CloudTrailDataServiceException";

/**
 * @public
 * <p>An event from a source outside of Amazon Web Services that you want CloudTrail
 *       to log.</p>
 */
export interface AuditEvent {
  /**
   * @public
   * <p>The original event ID from the source event.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The content of an audit event that comes from the event, such as <code>userIdentity</code>,
   *          <code>userAgent</code>, and <code>eventSource</code>.</p>
   */
  eventData: string | undefined;

  /**
   * @public
   * <p>A checksum is a base64-SHA256 algorithm that helps you verify that CloudTrail receives the event that matches
   *          with the checksum. Calculate the checksum by running a command like the following:</p>
   *          <p>
   *             <code>printf %s <i>$eventdata</i> | openssl dgst -binary -sha256 | base64</code>
   *          </p>
   */
  eventDataChecksum?: string;
}

/**
 * @public
 * <p>A response that includes successful and failed event results.</p>
 */
export interface AuditEventResultEntry {
  /**
   * @public
   * <p>The original event ID from the source event.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The event ID assigned by CloudTrail.</p>
   */
  eventID: string | undefined;
}

/**
 * @public
 * <p>The caller's account ID must be the same as the channel owner's account ID.</p>
 */
export class ChannelInsufficientPermission extends __BaseException {
  readonly name: "ChannelInsufficientPermission" = "ChannelInsufficientPermission";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ChannelInsufficientPermission, __BaseException>) {
    super({
      name: "ChannelInsufficientPermission",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ChannelInsufficientPermission.prototype);
  }
}

/**
 * @public
 * <p>The channel could not be found.</p>
 */
export class ChannelNotFound extends __BaseException {
  readonly name: "ChannelNotFound" = "ChannelNotFound";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ChannelNotFound, __BaseException>) {
    super({
      name: "ChannelNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ChannelNotFound.prototype);
  }
}

/**
 * @public
 * <p>The schema type of the event is not supported.</p>
 */
export class ChannelUnsupportedSchema extends __BaseException {
  readonly name: "ChannelUnsupportedSchema" = "ChannelUnsupportedSchema";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ChannelUnsupportedSchema, __BaseException>) {
    super({
      name: "ChannelUnsupportedSchema",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ChannelUnsupportedSchema.prototype);
  }
}

/**
 * @public
 * <p>Two or more entries in the request have the same event ID.</p>
 */
export class DuplicatedAuditEventId extends __BaseException {
  readonly name: "DuplicatedAuditEventId" = "DuplicatedAuditEventId";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicatedAuditEventId, __BaseException>) {
    super({
      name: "DuplicatedAuditEventId",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicatedAuditEventId.prototype);
  }
}

/**
 * @public
 * <p>The specified channel ARN is not a valid
 *          channel ARN.</p>
 */
export class InvalidChannelARN extends __BaseException {
  readonly name: "InvalidChannelARN" = "InvalidChannelARN";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidChannelARN, __BaseException>) {
    super({
      name: "InvalidChannelARN",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidChannelARN.prototype);
  }
}

/**
 * @public
 */
export interface PutAuditEventsRequest {
  /**
   * @public
   * <p>The JSON payload of events that you want to ingest. You can also point to the JSON event
   *          payload in a file.</p>
   */
  auditEvents: AuditEvent[] | undefined;

  /**
   * @public
   * <p>The ARN or ID (the ARN suffix) of a channel.</p>
   */
  channelArn: string | undefined;

  /**
   * @public
   * <p>A unique identifier that is conditionally required when the channel's resource policy includes an external
   *          ID. This value can be any string,
   *          such as a passphrase or account number.</p>
   */
  externalId?: string;
}

/**
 * @public
 * <p>Includes the error code and error message for events that could not be ingested by CloudTrail.</p>
 */
export interface ResultErrorEntry {
  /**
   * @public
   * <p>The original event ID from the source event that could not be ingested by CloudTrail.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The error code for events that could not be ingested by CloudTrail. Possible error codes include: <code>FieldTooLong</code>, <code>FieldNotFound</code>,
   *          <code>InvalidChecksum</code>, <code>InvalidData</code>, <code>InvalidRecipient</code>, <code>InvalidEventSource</code>, <code>AccountNotSubscribed</code>,
   *          <code>Throttling</code>, and <code>InternalFailure</code>.</p>
   */
  errorCode: string | undefined;

  /**
   * @public
   * <p>The message that describes the error for events that could not be ingested by CloudTrail.</p>
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface PutAuditEventsResponse {
  /**
   * @public
   * <p>Lists events in the provided event payload that were successfully ingested
   *       into CloudTrail.</p>
   */
  successful: AuditEventResultEntry[] | undefined;

  /**
   * @public
   * <p>Lists events in the provided event payload that could not be
   *          ingested into CloudTrail, and includes the error code and error message
   *          returned for events that could not be ingested.</p>
   */
  failed: ResultErrorEntry[] | undefined;
}

/**
 * @public
 * <p>The operation requested is not supported in this region or account.</p>
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
  }
}
