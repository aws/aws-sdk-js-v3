// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { AccessDeniedExceptionReason, ValidationExceptionReason } from "./enums";
import type { ValidationExceptionField } from "./models_0";
import { PaymentsServiceException as __BaseException } from "./PaymentsServiceException";

/**
 * <p>The request is denied because you don't have sufficient access to perform this operation. Verify that you have the required permissions and try again. This error is also returned, instead of <code>ResourceNotFoundException</code>, when you aren't authorized for the resource, so the response doesn't reveal whether the resource exists.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.payments#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The reason that access was denied. The following values are valid:</p> <ul> <li> <p> <code>NOT_AUTHORIZED</code> – Your IAM policies don't allow this action.</p> </li> <li> <p> <code>INVALID_ACCOUNT_STATE</code> – Your Amazon Web Services account isn't in a state that allows this action, for example because registration isn't complete or the account is suspended.</p> </li> <li> <p> <code>OTHER</code> – Access was denied for another reason.</p> </li> </ul>
   * @public
   */
  reason?: AccessDeniedExceptionReason | undefined;

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
    this.reason = opts.reason;
  }
}

/**
 * <p>The request processing failed because of an unknown error, exception, or failure. Retry your request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.payments#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * <p>The suggested number of seconds to wait before retrying the request.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The request was denied due to request throttling. Reduce the frequency of your requests and try again.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.payments#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The suggested number of seconds to wait before retrying the request.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The request isn't valid. Check <code>reason</code> and <code>fieldList</code> for the cause, correct the request, and try again.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.payments#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The reason that validation failed. The following values are valid:</p> <ul> <li> <p> <code>CANNOT_PARSE</code> – The request body couldn't be parsed, or a value isn't of the expected type.</p> </li> <li> <p> <code>FIELD_VALIDATION_FAILED</code> – One or more members failed validation. <code>fieldList</code> names them.</p> </li> <li> <p> <code>INVALID_PAGINATION_TOKEN</code> – The <code>nextToken</code> is malformed or expired, or doesn't match the original request. Start again from the first page.</p> </li> <li> <p> <code>UNSUPPORTED_ACTION</code> – The request is well formed, but the action isn't supported for your account, Region, or resource.</p> </li> <li> <p> <code>OTHER</code> – The request isn't valid for another reason.</p> </li> </ul>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>The request members that failed validation. This member is populated when <code>reason</code> is <code>FIELD_VALIDATION_FAILED</code>.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.fieldList = opts.fieldList;
  }
}

/**
 * <p>The requested resource couldn't be found. Verify that the resource ID is correct. This error is returned only when you're authorized for the resource.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.payments#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The ID of the resource that wasn't found.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of the resource that wasn't found.</p>
   * @public
   */
  resourceType?: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}
