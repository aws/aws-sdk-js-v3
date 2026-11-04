// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { CostExplorerServiceException as __BaseException } from "./CostExplorerServiceException";

/**
 * The requested analysis can't be found.
 *
 * @public
 */
export class AnalysisNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#AnalysisNotFoundException";
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
 * You made too many calls in a short period of time. Try again later.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#LimitExceededException";
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
 * The cost anomaly monitor does not exist for the account.
 *
 * @public
 */
export class UnknownMonitorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#UnknownMonitorException";
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
 * You've reached the limit on the number of resources you can create, or exceeded the size of an individual resource.
 *
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#ServiceQuotaExceededException";
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
 * The cost anomaly subscription does not exist for the account.
 *
 * @public
 */
export class UnknownSubscriptionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#UnknownSubscriptionException";
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
 * The specified ARN in the request doesn't exist.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#ResourceNotFoundException";
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
 * The pagination token is invalid. Try again without a pagination token.
 *
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#InvalidNextTokenException";
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
 * The requested data is unavailable.
 *
 * @public
 */
export class DataUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#DataUnavailableException";
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
 * The requested report expired. Update the date interval and try again.
 *
 * @public
 */
export class BillExpirationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#BillExpirationException";
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
 * The billing view status must be `HEALTHY` to perform this action. Try again when the status is `HEALTHY`.
 *
 * @public
 */
export class BillingViewHealthStatusException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#BillingViewHealthStatusException";
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
 * Your request parameters changed between pages. Try again with the old parameters or without a pagination token.
 *
 * @public
 */
export class RequestChangedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#RequestChangedException";
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
 * Cost Explorer was unable to identify the usage unit. Provide `UsageType/UsageTypeGroup` filter selections that contain matching units, for example: `hours`.
 *
 * @public
 */
export class UnresolvableUsageUnitException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#UnresolvableUsageUnitException";
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
 * A request to generate a recommendation or analysis is already in progress.
 *
 * @public
 */
export class GenerationExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#GenerationExistsException";
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
 * A request to backfill is already in progress. Once the previous request is complete, you can create another request.
 *
 * @public
 */
export class BackfillLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#BackfillLimitExceededException";
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
 * Can occur if you specify a number of tags for a resource greater than the maximum 50 user tags per resource.
 *
 * @public
 */
export class TooManyTagsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.costexplorer#TooManyTagsException";
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
