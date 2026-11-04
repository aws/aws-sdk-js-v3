// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { HealthServiceException as __BaseException } from "./HealthServiceException";

/**
 * The specified pagination token (`nextToken`) is not valid.
 *
 * @public
 */
export class InvalidPaginationToken extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.health#InvalidPaginationToken";
  readonly name = "InvalidPaginationToken" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPaginationToken, __BaseException>) {
    super({
      name: "InvalidPaginationToken",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPaginationToken.prototype);
  }
}

/**
 * The specified locale is not supported.
 *
 * @public
 */
export class UnsupportedLocale extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.health#UnsupportedLocale";
  readonly name = "UnsupportedLocale" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedLocale, __BaseException>) {
    super({
      name: "UnsupportedLocale",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedLocale.prototype);
  }
}

/**
 * [EnableHealthServiceAccessForOrganization](https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html) is already in progress. Wait for the action to complete before trying again. To get the current status, use the [DescribeHealthServiceStatusForOrganization](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeHealthServiceStatusForOrganization.html) operation.
 *
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.health#ConcurrentModificationException";
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
