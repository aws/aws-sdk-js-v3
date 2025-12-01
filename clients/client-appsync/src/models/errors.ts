// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AppSyncServiceException as __BaseException } from "./AppSyncServiceException";
import { BadRequestReason } from "./enums";
import { BadRequestDetail } from "./models_0";

/**
 * <p>You don't have access to perform this operation on this resource.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>The API key exceeded a limit. Try your request again.</p>
 * @public
 */
export class ApiKeyLimitExceededException extends __BaseException {
  readonly name = "ApiKeyLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApiKeyLimitExceededException, __BaseException>) {
    super({
      name: "ApiKeyLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApiKeyLimitExceededException.prototype);
  }
}

/**
 * <p>The API key expiration must be set to a value between 1 and 365 days from creation (for
 *             <code>CreateApiKey</code>) or from update (for <code>UpdateApiKey</code>).</p>
 * @public
 */
export class ApiKeyValidityOutOfBoundsException extends __BaseException {
  readonly name = "ApiKeyValidityOutOfBoundsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApiKeyValidityOutOfBoundsException, __BaseException>) {
    super({
      name: "ApiKeyValidityOutOfBoundsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApiKeyValidityOutOfBoundsException.prototype);
  }
}

/**
 * <p>The GraphQL API exceeded a limit. Try your request again.</p>
 * @public
 */
export class ApiLimitExceededException extends __BaseException {
  readonly name = "ApiLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApiLimitExceededException, __BaseException>) {
    super({
      name: "ApiLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApiLimitExceededException.prototype);
  }
}

/**
 * <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Provides context for the cause of the bad request. The only supported value is
   *             <code>CODE_ERROR</code>.</p>
   * @public
   */
  reason?: BadRequestReason | undefined;

  /**
   * <p>Provides further details for the reason behind the bad request. For reason type
   *             <code>CODE_ERROR</code>, the detail will contain a list of code errors.</p>
   * @public
   */
  detail?: BadRequestDetail | undefined;

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
    this.reason = opts.reason;
    this.detail = opts.detail;
  }
}

/**
 * <p>An internal AppSync error occurred. Try your request again.</p>
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
 * <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
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
 * <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * <p>The request exceeded a limit. Try your request again.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
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
 * <p>You aren't authorized to perform this operation.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name = "UnauthorizedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * <p>The operation exceeded the service quota for this resource.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>A conflict with a previous successful update is detected. This typically occurs when the
 *          previous update did not have time to propagate before the next update was made. A retry
 *          (with appropriate backoff logic) is the recommended response to this exception.</p>
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
 * <p>The GraphQL schema is not valid.</p>
 * @public
 */
export class GraphQLSchemaException extends __BaseException {
  readonly name = "GraphQLSchemaException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GraphQLSchemaException, __BaseException>) {
    super({
      name: "GraphQLSchemaException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GraphQLSchemaException.prototype);
  }
}
