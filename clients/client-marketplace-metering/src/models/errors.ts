// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MarketplaceMeteringServiceException as __BaseException } from "./MarketplaceMeteringServiceException";

/**
 * <p>The API is disabled in the Region.</p>
 * @public
 */
export class DisabledApiException extends __BaseException {
  readonly name = "DisabledApiException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DisabledApiException, __BaseException>) {
    super({
      name: "DisabledApiException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DisabledApiException.prototype);
  }
}

/**
 * <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *             message with details on the Amazon Web Services forums.</p>
 * @public
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name = "InternalServiceErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
  }
}

/**
 * <p>You have metered usage for a <code>CustomerIdentifier</code> that does not
 *             exist.</p>
 * @public
 */
export class InvalidCustomerIdentifierException extends __BaseException {
  readonly name = "InvalidCustomerIdentifierException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCustomerIdentifierException, __BaseException>) {
    super({
      name: "InvalidCustomerIdentifierException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCustomerIdentifierException.prototype);
  }
}

/**
 * <p>The product code passed does not match the product code used for publishing the
 *             product.</p>
 * @public
 */
export class InvalidProductCodeException extends __BaseException {
  readonly name = "InvalidProductCodeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidProductCodeException, __BaseException>) {
    super({
      name: "InvalidProductCodeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidProductCodeException.prototype);
  }
}

/**
 * <p>The tag is invalid, or the number of tags is greater than 5.</p>
 * @public
 */
export class InvalidTagException extends __BaseException {
  readonly name = "InvalidTagException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagException, __BaseException>) {
    super({
      name: "InvalidTagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagException.prototype);
  }
}

/**
 * <p>Sum of allocated usage quantities is not equal to the usage quantity.</p>
 * @public
 */
export class InvalidUsageAllocationsException extends __BaseException {
  readonly name = "InvalidUsageAllocationsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUsageAllocationsException, __BaseException>) {
    super({
      name: "InvalidUsageAllocationsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUsageAllocationsException.prototype);
  }
}

/**
 * <p>The usage dimension does not match one of the <code>UsageDimensions</code> associated
 *             with products.</p>
 * @public
 */
export class InvalidUsageDimensionException extends __BaseException {
  readonly name = "InvalidUsageDimensionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUsageDimensionException, __BaseException>) {
    super({
      name: "InvalidUsageDimensionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUsageDimensionException.prototype);
  }
}

/**
 * <p>The calls to the API are throttled.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
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
 * <p>The <code>timestamp</code> value passed in the <code>UsageRecord</code> is out of
 *             allowed range.</p>
 *          <p>For <code>BatchMeterUsage</code>, if any of the records are outside of the allowed
 *             range, the entire batch is not processed. You must remove invalid records and try
 *             again.</p>
 * @public
 */
export class TimestampOutOfBoundsException extends __BaseException {
  readonly name = "TimestampOutOfBoundsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TimestampOutOfBoundsException, __BaseException>) {
    super({
      name: "TimestampOutOfBoundsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TimestampOutOfBoundsException.prototype);
  }
}

/**
 * <p>Exception thrown when the customer does not have a valid subscription for the
 *             product.</p>
 * @public
 */
export class CustomerNotEntitledException extends __BaseException {
  readonly name = "CustomerNotEntitledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomerNotEntitledException, __BaseException>) {
    super({
      name: "CustomerNotEntitledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomerNotEntitledException.prototype);
  }
}

/**
 * <p>A metering record has already been emitted by the same EC2 instance, ECS task, or EKS
 *             pod for the given \{<code>usageDimension</code>, <code>timestamp</code>\} with a different
 *                 <code>usageQuantity</code>.</p>
 * @public
 */
export class DuplicateRequestException extends __BaseException {
  readonly name = "DuplicateRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateRequestException, __BaseException>) {
    super({
      name: "DuplicateRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateRequestException.prototype);
  }
}

/**
 * <p>The <code>ClientToken</code> is being used for multiple requests.</p>
 * @public
 */
export class IdempotencyConflictException extends __BaseException {
  readonly name = "IdempotencyConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotencyConflictException, __BaseException>) {
    super({
      name: "IdempotencyConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotencyConflictException.prototype);
  }
}

/**
 * <p>The endpoint being called is in a Amazon Web Services Region different from your EC2 instance, ECS
 *             task, or EKS pod. The Region of the Metering Service endpoint and the Amazon Web Services Region of
 *             the resource must match.</p>
 * @public
 */
export class InvalidEndpointRegionException extends __BaseException {
  readonly name = "InvalidEndpointRegionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEndpointRegionException, __BaseException>) {
    super({
      name: "InvalidEndpointRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEndpointRegionException.prototype);
  }
}

/**
 * <p>Public Key version is invalid.</p>
 * @public
 */
export class InvalidPublicKeyVersionException extends __BaseException {
  readonly name = "InvalidPublicKeyVersionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPublicKeyVersionException, __BaseException>) {
    super({
      name: "InvalidPublicKeyVersionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPublicKeyVersionException.prototype);
  }
}

/**
 * <p>
 *             <code>RegisterUsage</code> must be called in the same Amazon Web Services Region the ECS task was
 *             launched in. This prevents a container from hardcoding a Region (e.g.
 *             withRegion(“us-east-1”) when calling <code>RegisterUsage</code>.</p>
 * @public
 */
export class InvalidRegionException extends __BaseException {
  readonly name = "InvalidRegionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRegionException, __BaseException>) {
    super({
      name: "InvalidRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRegionException.prototype);
  }
}

/**
 * <p>Amazon Web Services Marketplace does not support metering usage from the underlying platform. Currently, Amazon ECS, Amazon EKS, and Fargate are supported.</p>
 * @public
 */
export class PlatformNotSupportedException extends __BaseException {
  readonly name = "PlatformNotSupportedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PlatformNotSupportedException, __BaseException>) {
    super({
      name: "PlatformNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PlatformNotSupportedException.prototype);
  }
}

/**
 * <p>The submitted registration token has expired. This can happen if the buyer's browser
 *             takes too long to redirect to your page, the buyer has resubmitted the registration
 *             token, or your application has held on to the registration token for too long. Your SaaS
 *             registration website should redeem this token as soon as it is submitted by the buyer's
 *             browser.</p>
 * @public
 */
export class ExpiredTokenException extends __BaseException {
  readonly name = "ExpiredTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredTokenException, __BaseException>) {
    super({
      name: "ExpiredTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredTokenException.prototype);
  }
}

/**
 * <p>Registration token is invalid.</p>
 * @public
 */
export class InvalidTokenException extends __BaseException {
  readonly name = "InvalidTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTokenException, __BaseException>) {
    super({
      name: "InvalidTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTokenException.prototype);
  }
}
