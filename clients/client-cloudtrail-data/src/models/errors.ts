// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudTrailDataServiceException as __BaseException } from "./CloudTrailDataServiceException";

/**
 * <p>The caller's account ID must be the same as the channel owner's account ID.</p>
 * @public
 */
export class ChannelInsufficientPermission extends __BaseException {
  readonly name = "ChannelInsufficientPermission" as const;
  readonly $fault = "client" as const;
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
 * <p>The channel could not be found.</p>
 * @public
 */
export class ChannelNotFound extends __BaseException {
  readonly name = "ChannelNotFound" as const;
  readonly $fault = "client" as const;
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
 * <p>The schema type of the event is not supported.</p>
 * @public
 */
export class ChannelUnsupportedSchema extends __BaseException {
  readonly name = "ChannelUnsupportedSchema" as const;
  readonly $fault = "client" as const;
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
 * <p>Two or more entries in the request have the same event ID.</p>
 * @public
 */
export class DuplicatedAuditEventId extends __BaseException {
  readonly name = "DuplicatedAuditEventId" as const;
  readonly $fault = "client" as const;
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
 * <p>The specified channel ARN is not a valid
 *          channel ARN.</p>
 * @public
 */
export class InvalidChannelARN extends __BaseException {
  readonly name = "InvalidChannelARN" as const;
  readonly $fault = "client" as const;
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
 * <p>The operation requested is not supported in this region or account.</p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name = "UnsupportedOperationException" as const;
  readonly $fault = "client" as const;
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
