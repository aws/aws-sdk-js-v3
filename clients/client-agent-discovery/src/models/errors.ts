// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { AgentDiscoveryServiceException as __BaseException } from "./AgentDiscoveryServiceException";
import type { ArdErrorCode } from "./enums";

/**
 * Thrown on an internal defect — a bug or malformed state, not a failed dependency.
 *
 * <p>⚠️ Deliberately a **permanent** failure. Repeating a request that failed to serialize will fail
 * identically, so treating a 500 as retryable would spin a poison message through redelivery forever
 * instead of letting it reach a dead-letter queue. Dependency failures that *are* worth retrying use
 * `ServiceUnavailableException` and its 503 instead.
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.agentdiscovery#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * ARD's Appendix B code on the ARD surface, `INTERNAL_ERROR`.
   * @public
   */
  errorCode?: ArdErrorCode | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.errorCode = opts.errorCode;
  }
}

/**
 * Thrown when the caller exceeds a rate/burst limit (D-9). ARD's code for it is `RATE_LIMIT_EXCEEDED`.
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.agentdiscovery#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * ARD's error classification (Appendix B). Values are ARD's, uppercase on the wire.
   * @public
   */
  errorCode?: ArdErrorCode | undefined;

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
    this.errorCode = opts.errorCode;
  }
}

/**
 * Thrown when a request fails input validation.
 *
 * <p>`errorCode` carries ARD's Appendix B code, `INVALID_ARGUMENT`, which ARD's OpenAPI makes a required
 * member of every error body on the ARD surface. The Amazon-shaped and internal surfaces leave it unset.
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.agentdiscovery#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * ARD's error classification (Appendix B). Values are ARD's, uppercase on the wire.
   * @public
   */
  errorCode?: ArdErrorCode | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.errorCode = opts.errorCode;
  }
}
