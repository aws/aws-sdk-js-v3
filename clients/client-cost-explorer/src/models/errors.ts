// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CostExplorerServiceException as __BaseException } from "./CostExplorerServiceException";

/**
 * <p>The requested analysis can't be found.</p>
 * @public
 */
export class AnalysisNotFoundException extends __BaseException {
  readonly name = "AnalysisNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AnalysisNotFoundException, __BaseException>) {
    super({
      name: "AnalysisNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AnalysisNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You made too many calls in a short period of time. Try again later.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The cost anomaly monitor does not exist for the account. </p>
 * @public
 */
export class UnknownMonitorException extends __BaseException {
  readonly name = "UnknownMonitorException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnknownMonitorException, __BaseException>) {
    super({
      name: "UnknownMonitorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnknownMonitorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> You've reached the limit on the number of resources you can create, or exceeded the
 *             size of an individual resource. </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The cost anomaly subscription does not exist for the account. </p>
 * @public
 */
export class UnknownSubscriptionException extends __BaseException {
  readonly name = "UnknownSubscriptionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnknownSubscriptionException, __BaseException>) {
    super({
      name: "UnknownSubscriptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnknownSubscriptionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> The specified ARN in the request doesn't exist. </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  ResourceName?: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * <p>The pagination token is invalid. Try again without a pagination token.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested data is unavailable.</p>
 * @public
 */
export class DataUnavailableException extends __BaseException {
  readonly name = "DataUnavailableException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataUnavailableException, __BaseException>) {
    super({
      name: "DataUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested report expired. Update the date interval and try again.</p>
 * @public
 */
export class BillExpirationException extends __BaseException {
  readonly name = "BillExpirationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BillExpirationException, __BaseException>) {
    super({
      name: "BillExpirationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BillExpirationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>
 *             The billing view status must be <code>HEALTHY</code> to perform this action. Try again when the status is <code>HEALTHY</code>.
 *         </p>
 * @public
 */
export class BillingViewHealthStatusException extends __BaseException {
  readonly name = "BillingViewHealthStatusException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BillingViewHealthStatusException, __BaseException>) {
    super({
      name: "BillingViewHealthStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BillingViewHealthStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Your request parameters changed between pages. Try again with the old parameters or
 *             without a pagination token.</p>
 * @public
 */
export class RequestChangedException extends __BaseException {
  readonly name = "RequestChangedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestChangedException, __BaseException>) {
    super({
      name: "RequestChangedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestChangedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Cost Explorer was unable to identify the usage unit. Provide
 *                 <code>UsageType/UsageTypeGroup</code> filter selections that contain matching units,
 *             for example: <code>hours</code>.</p>
 * @public
 */
export class UnresolvableUsageUnitException extends __BaseException {
  readonly name = "UnresolvableUsageUnitException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnresolvableUsageUnitException, __BaseException>) {
    super({
      name: "UnresolvableUsageUnitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnresolvableUsageUnitException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A request to generate a recommendation or analysis is already in progress.</p>
 * @public
 */
export class GenerationExistsException extends __BaseException {
  readonly name = "GenerationExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GenerationExistsException, __BaseException>) {
    super({
      name: "GenerationExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GenerationExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>
 *             A request to backfill is already in progress. Once the previous request is complete, you can create another request.
 *         </p>
 * @public
 */
export class BackfillLimitExceededException extends __BaseException {
  readonly name = "BackfillLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BackfillLimitExceededException, __BaseException>) {
    super({
      name: "BackfillLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BackfillLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Can occur if you specify a number of tags for a resource greater than the maximum 50
 *             user tags per resource.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  ResourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}
