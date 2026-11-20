// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { ValidationExceptionReason } from "./enums";
import { MarketplaceDiscoveryServiceException as __BaseException } from "./MarketplaceDiscoveryServiceException";

/**
 * <p>You don't have sufficient access to perform this action. Verify that you have the required permissions.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.marketplacediscovery#AccessDeniedException";
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
 * <p>Unexpected error during processing of the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.marketplacediscovery#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
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
  }
}

/**
 * <p>The specified resource doesn't exist. Verify that the identifier is correct.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.marketplacediscovery#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling. Reduce the frequency of your requests and retry.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.marketplacediscovery#ThrottlingException";
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

/**
 * <p>The input fails to satisfy the constraints specified by the service. Check the <code>reason</code> field for the constraint that failed.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.marketplacediscovery#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The reason that the input fails to satisfy the constraints that the Discovery API specifies. This field has one of the following values:</p> <dl> <dt>INVALID_PAGINATION_TOKEN</dt> <dd> <p>The <code>nextToken</code> value is malformed, expired, or belongs to a different request. Start the pagination again from the first page.</p> </dd> <dt>MALFORMED_REQUEST_PARAMETERS</dt> <dd> <p>One or more request parameters have an invalid value. Correct the parameters that you specified, and then resubmit your request.</p> </dd> <dt>PAGINATION_LIMIT_EXCEEDED</dt> <dd> <p>The request asks for results beyond the deepest page that the operation returns. Narrow your request with filters or a more specific search.</p> </dd> </dl>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

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
    this.reason = opts.reason;
  }
}
