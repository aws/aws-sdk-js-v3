// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SupportServiceException as __BaseException } from "./SupportServiceException";

/**
 * <p>The limit for the number of attachment sets created in a short period of time has been
 *             exceeded.</p>
 * @public
 */
export class AttachmentLimitExceeded extends __BaseException {
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
 * <p>The expiration time of the attachment set has passed. The set expires 1 hour after it
 *             is created.</p>
 * @public
 */
export class AttachmentSetExpired extends __BaseException {
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
 * <p>An attachment set with the specified ID could not be found.</p>
 * @public
 */
export class AttachmentSetIdNotFound extends __BaseException {
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
 * <p>A limit for the size of an attachment set has been exceeded. The limits are three
 *             attachments and 5 MB per attachment.</p>
 * @public
 */
export class AttachmentSetSizeLimitExceeded extends __BaseException {
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
 * <p>An internal server error occurred.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
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
 * <p>The requested <code>caseId</code> couldn't be located.</p>
 * @public
 */
export class CaseIdNotFound extends __BaseException {
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
 * <p>An attachment with the specified ID could not be found.</p>
 * @public
 */
export class AttachmentIdNotFound extends __BaseException {
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
 * <p>The case creation limit for the account has been exceeded.</p>
 * @public
 */
export class CaseCreationLimitExceeded extends __BaseException {
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
 * <p>The limit for the number of <a>DescribeAttachment</a> requests in a short
 *             period of time has been exceeded.</p>
 * @public
 */
export class DescribeAttachmentLimitExceeded extends __BaseException {
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
 * <p>
 *         You have exceeded the maximum allowed TPS (Transactions Per Second) for the operations.
 *         </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
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
  }
}
