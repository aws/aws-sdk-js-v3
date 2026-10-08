// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { PinpointEmailServiceException as __BaseException } from "./PinpointEmailServiceException";

/**
 * <p>The message can't be sent because the account's ability to send email has been
 *             permanently restricted.</p>
 * @public
 */
export class AccountSuspendedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.pinpointemail#AccountSuspendedException";
  readonly name = "AccountSuspendedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountSuspendedException, __BaseException>) {
    super({
      name: "AccountSuspendedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountSuspendedException.prototype);
  }
}

/**
 * <p>The resource specified in your request already exists.</p>
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.pinpointemail#AlreadyExistsException";
  readonly name = "AlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
  }
}

/**
 * <p>The input you provided is invalid.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.pinpointemail#BadRequestException";
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * <p>The resource is being modified by another operation or thread.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.pinpointemail#ConcurrentModificationException";
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * <p>There are too many instances of the specified resource type.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.pinpointemail#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The resource you attempted to access doesn't exist.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.pinpointemail#NotFoundException";
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * <p>Too many requests have been made to the operation.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.pinpointemail#TooManyRequestsException";
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
  }
}

/**
 * <p>The message can't be sent because the sending domain isn't verified.</p>
 * @public
 */
export class MailFromDomainNotVerifiedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.pinpointemail#MailFromDomainNotVerifiedException";
  readonly name = "MailFromDomainNotVerifiedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MailFromDomainNotVerifiedException, __BaseException>) {
    super({
      name: "MailFromDomainNotVerifiedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MailFromDomainNotVerifiedException.prototype);
  }
}

/**
 * <p>The message can't be sent because it contains invalid content.</p>
 * @public
 */
export class MessageRejected extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.pinpointemail#MessageRejected";
  readonly name = "MessageRejected" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MessageRejected, __BaseException>) {
    super({
      name: "MessageRejected",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MessageRejected.prototype);
  }
}

/**
 * <p>The message can't be sent because the account's ability to send email is currently
 *             paused.</p>
 * @public
 */
export class SendingPausedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.pinpointemail#SendingPausedException";
  readonly name = "SendingPausedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SendingPausedException, __BaseException>) {
    super({
      name: "SendingPausedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SendingPausedException.prototype);
  }
}
