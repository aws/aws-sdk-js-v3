// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { LexRuntimeServiceServiceException as __BaseException } from "./LexRuntimeServiceServiceException";

/**
 * <p> Request validation failed, there is no usable message in the context,
 *       or the bot build failed, is still in progress, or contains unbuilt
 *       changes. </p>
 * @public
 */
export class BadRequestException extends __BaseException {
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
 * <p> Two clients are using the same AWS account, Amazon Lex bot, and user
 *       ID. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>Internal service error. Retry the call.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name = "InternalFailureException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * <p>Exceeded a limit.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  retryAfterSeconds?: string | undefined;
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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The resource (such as the Amazon Lex bot or an alias) that is referred
 *       to is not found.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
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
 * <p>Either the Amazon Lex bot is still building, or one of the dependent
 *       services (Amazon Polly, AWS Lambda) failed with an internal service
 *       error.</p>
 * @public
 */
export class BadGatewayException extends __BaseException {
  readonly name = "BadGatewayException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadGatewayException, __BaseException>) {
    super({
      name: "BadGatewayException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, BadGatewayException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> One of the dependencies, such as AWS Lambda or Amazon Polly, threw an
 *       exception. For example, </p>
 *          <ul>
 *             <li>
 *                <p>If Amazon Lex does not have sufficient permissions to call a Lambda
 *           function.</p>
 *             </li>
 *             <li>
 *                <p>If a Lambda function takes longer than 30 seconds to
 *           execute.</p>
 *             </li>
 *             <li>
 *                <p>If a fulfillment Lambda function returns a <code>Delegate</code>
 *           dialog action without removing any slot values.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class DependencyFailedException extends __BaseException {
  readonly name = "DependencyFailedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyFailedException, __BaseException>) {
    super({
      name: "DependencyFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This exception is not used.</p>
 * @public
 */
export class LoopDetectedException extends __BaseException {
  readonly name = "LoopDetectedException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LoopDetectedException, __BaseException>) {
    super({
      name: "LoopDetectedException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, LoopDetectedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The accept header in the request does not have a valid value.</p>
 * @public
 */
export class NotAcceptableException extends __BaseException {
  readonly name = "NotAcceptableException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotAcceptableException, __BaseException>) {
    super({
      name: "NotAcceptableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotAcceptableException.prototype);
  }
}

/**
 * <p>The input speech is too long.</p>
 * @public
 */
export class RequestTimeoutException extends __BaseException {
  readonly name = "RequestTimeoutException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTimeoutException, __BaseException>) {
    super({
      name: "RequestTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTimeoutException.prototype);
  }
}

/**
 * <p>The Content-Type header (<code>PostContent</code> API) has an invalid
 *       value. </p>
 * @public
 */
export class UnsupportedMediaTypeException extends __BaseException {
  readonly name = "UnsupportedMediaTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedMediaTypeException, __BaseException>) {
    super({
      name: "UnsupportedMediaTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedMediaTypeException.prototype);
  }
}
