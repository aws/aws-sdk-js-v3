// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { ThrottlingReason } from "./models_0";
import { SupportServiceException as __BaseException } from "./SupportServiceException";

/**
 * The limit for the number of attachment sets created in a short period of time has been exceeded.
 *
 * @public
 */
export class AttachmentLimitExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.support#AttachmentLimitExceeded";
  readonly name = "AttachmentLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttachmentLimitExceeded, __BaseException>) {
    super({
      name: "AttachmentLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttachmentLimitExceeded.prototype);
  }
}

/**
 * The expiration time of the attachment set has passed. The set expires 1 hour after it is created.
 *
 * @public
 */
export class AttachmentSetExpired extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.support#AttachmentSetExpired";
  readonly name = "AttachmentSetExpired" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttachmentSetExpired, __BaseException>) {
    super({
      name: "AttachmentSetExpired",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttachmentSetExpired.prototype);
  }
}

/**
 * An attachment set with the specified ID could not be found.
 *
 * @public
 */
export class AttachmentSetIdNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.support#AttachmentSetIdNotFound";
  readonly name = "AttachmentSetIdNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttachmentSetIdNotFound, __BaseException>) {
    super({
      name: "AttachmentSetIdNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttachmentSetIdNotFound.prototype);
  }
}

/**
 * A limit for the size of an attachment set has been exceeded. The limits are three attachments and 5 MB per attachment.
 *
 * @public
 */
export class AttachmentSetSizeLimitExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.support#AttachmentSetSizeLimitExceeded";
  readonly name = "AttachmentSetSizeLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttachmentSetSizeLimitExceeded, __BaseException>) {
    super({
      name: "AttachmentSetSizeLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttachmentSetSizeLimitExceeded.prototype);
  }
}

/**
 * The request was valid, but the operation wasn't performed because `dryRun` was set to `true`.
 *
 * @public
 */
export class DryRunOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.support#DryRunOperationException";
  readonly name = "DryRunOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DryRunOperationException, __BaseException>) {
    super({
      name: "DryRunOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DryRunOperationException.prototype);
  }
}

/**
 * An internal server error occurred.
 *
 * @public
 */
export class InternalServerError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.support#InternalServerError";
  readonly name = "InternalServerError" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

/**
 * The requested `caseId` couldn't be located.
 *
 * @public
 */
export class CaseIdNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.support#CaseIdNotFound";
  readonly name = "CaseIdNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CaseIdNotFound, __BaseException>) {
    super({
      name: "CaseIdNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CaseIdNotFound.prototype);
  }
}

/**
 * An attachment with the specified ID could not be found.
 *
 * @public
 */
export class AttachmentIdNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.support#AttachmentIdNotFound";
  readonly name = "AttachmentIdNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttachmentIdNotFound, __BaseException>) {
    super({
      name: "AttachmentIdNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttachmentIdNotFound.prototype);
  }
}

/**
 * The specified `uploadId` couldn't be located.
 *
 * @public
 */
export class UploadIdNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.support#UploadIdNotFound";
  readonly name = "UploadIdNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UploadIdNotFound, __BaseException>) {
    super({
      name: "UploadIdNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UploadIdNotFound.prototype);
  }
}

/**
 * The case creation limit for the account has been exceeded.
 *
 * @public
 */
export class CaseCreationLimitExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.support#CaseCreationLimitExceeded";
  readonly name = "CaseCreationLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CaseCreationLimitExceeded, __BaseException>) {
    super({
      name: "CaseCreationLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CaseCreationLimitExceeded.prototype);
  }
}

/**
 * The limit for the number of DescribeAttachment requests in a short period of time has been exceeded.
 *
 * @public
 */
export class DescribeAttachmentLimitExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.support#DescribeAttachmentLimitExceeded";
  readonly name = "DescribeAttachmentLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DescribeAttachmentLimitExceeded, __BaseException>) {
    super({
      name: "DescribeAttachmentLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DescribeAttachmentLimitExceeded.prototype);
  }
}

/**
 * You have exceeded the maximum allowed TPS (Transactions Per Second) for the operations.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.support#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * A list of one or more reasons that the request was throttled.
   *
   * @public
   */
  throttlingReasons?: ThrottlingReason[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.throttlingReasons = opts.throttlingReasons;
  }
}
