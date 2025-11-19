// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { HealthServiceException as __BaseException } from "./HealthServiceException";

/**
 * <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 * @public
 */
export class InvalidPaginationToken extends __BaseException {
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
 * <p>The specified locale is not supported.</p>
 * @public
 */
export class UnsupportedLocale extends __BaseException {
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
 * <p>
 *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> is already in progress. Wait for the
 *          action to complete before trying again. To get the current status, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeHealthServiceStatusForOrganization.html">DescribeHealthServiceStatusForOrganization</a> operation.</p>
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
