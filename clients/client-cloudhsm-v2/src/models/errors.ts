// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudHSMV2ServiceException as __BaseException } from "./CloudHSMV2ServiceException";

/**
 * <p>The request was rejected because the requester does not have permission to perform the
 *       requested operation.</p>
 * @public
 */
export class CloudHsmAccessDeniedException extends __BaseException {
  readonly name = "CloudHsmAccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmAccessDeniedException, __BaseException>) {
    super({
      name: "CloudHsmAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmAccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because of an CloudHSM internal failure. The request can
 *       be retried.</p>
 * @public
 */
export class CloudHsmInternalFailureException extends __BaseException {
  readonly name = "CloudHsmInternalFailureException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmInternalFailureException, __BaseException>) {
    super({
      name: "CloudHsmInternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmInternalFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because it is not a valid request.</p>
 * @public
 */
export class CloudHsmInvalidRequestException extends __BaseException {
  readonly name = "CloudHsmInvalidRequestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmInvalidRequestException, __BaseException>) {
    super({
      name: "CloudHsmInvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmInvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because it refers to a resource that cannot be
 *       found.</p>
 * @public
 */
export class CloudHsmResourceNotFoundException extends __BaseException {
  readonly name = "CloudHsmResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmResourceNotFoundException, __BaseException>) {
    super({
      name: "CloudHsmResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because an error occurred.</p>
 * @public
 */
export class CloudHsmServiceException extends __BaseException {
  readonly name = "CloudHsmServiceException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmServiceException, __BaseException>) {
    super({
      name: "CloudHsmServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because of a tagging failure. Verify the tag conditions in all applicable policies, and then retry the request.</p>
 * @public
 */
export class CloudHsmTagException extends __BaseException {
  readonly name = "CloudHsmTagException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmTagException, __BaseException>) {
    super({
      name: "CloudHsmTagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmTagException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because it exceeds an CloudHSM limit.</p>
 * @public
 */
export class CloudHsmResourceLimitExceededException extends __BaseException {
  readonly name = "CloudHsmResourceLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CloudHsmResourceLimitExceededException, __BaseException>) {
    super({
      name: "CloudHsmResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CloudHsmResourceLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}
