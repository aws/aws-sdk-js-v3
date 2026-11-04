// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import {
  ResourceGroupsTaggingAPIServiceException as __BaseException,
} from "./ResourceGroupsTaggingAPIServiceException";

/**
 * The request failed because the target of the operation is currently being modified by a different request. Try again later.
 *
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.resourcegroupstaggingapi#ConcurrentModificationException";
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * The request failed because performing the operation would violate a constraint.
 *
 * Some of the reasons in the following list might not apply to this specific operation.
 *
 * - You must meet the prerequisites for using tag policies. For information, see [Prerequisites and permissions](https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#tag-policies-prereqs) in the *Tagging Amazon Web Services resources and Tag Editor* user guide.
 * - You must enable the tag policies service principal (`tagpolicies.tag.amazonaws.com`) to integrate with Organizations For information, see [EnableAWSServiceAccess](https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html).
 * - You must have a tag policy attached to the organization root, an OU, or an account.
 *
 * @public
 */
export class ConstraintViolationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.resourcegroupstaggingapi#ConstraintViolationException";
  readonly name = "ConstraintViolationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConstraintViolationException, __BaseException>) {
    super({
      name: "ConstraintViolationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConstraintViolationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request processing failed because of an unknown error, exception, or failure. You can retry the request.
 *
 * @public
 */
export class InternalServiceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.resourcegroupstaggingapi#InternalServiceException";
  readonly name = "InternalServiceException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request failed because of one of the following reasons:
 *
 * - A required parameter is missing.
 * - A provided string parameter is malformed.
 * - An provided parameter value is out of range.
 * - The target ID is invalid, unsupported, or doesn't exist.
 * - You can't access the Amazon S3 bucket for report storage. For more information, see [Amazon S3 bucket policy for report storage](https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#bucket-policy) in the *Tagging Amazon Web Services resources and Tag Editor* user guide.
 * - The partition specified in an ARN parameter in the request doesn't match the partition where you invoked the operation. The partition is specified by the second field of the ARN.
 *
 * @public
 */
export class InvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.resourcegroupstaggingapi#InvalidParameterException";
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request failed because it exceeded the allowed frequency of submitted requests.
 *
 * @public
 */
export class ThrottledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.resourcegroupstaggingapi#ThrottledException";
  readonly name = "ThrottledException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledException, __BaseException>) {
    super({
      name: "ThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request failed because the specified `PaginationToken` has expired. A `PaginationToken` is valid for a maximum of 15 minutes.
 *
 * @public
 */
export class PaginationTokenExpiredException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.resourcegroupstaggingapi#PaginationTokenExpiredException";
  readonly name = "PaginationTokenExpiredException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PaginationTokenExpiredException, __BaseException>) {
    super({
      name: "PaginationTokenExpiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PaginationTokenExpiredException.prototype);
    this.Message = opts.Message;
  }
}
