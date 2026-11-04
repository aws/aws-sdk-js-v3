// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { ExceptionResourceType } from "./enums";
import { QuickSightServiceException as __BaseException } from "./QuickSightServiceException";

/**
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * An internal failure occurred.
 *
 * @public
 */
export class InternalFailureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#InternalFailureException";
  readonly name = "InternalFailureException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * One or more parameters has a value that isn't valid.
 *
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#InvalidParameterValueException";
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * One or more resources can't be found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The resource type for this request.
   *
   * @public
   */
  ResourceType?: ExceptionResourceType | undefined;

  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * Access is throttled.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * You don't have this feature activated for your account. To fix this issue, contact Amazon Web Services support.
 *
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#InvalidRequestException";
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * A limit is exceeded.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * Limit exceeded.
   *
   * @public
   */
  ResourceType?: ExceptionResourceType | undefined;

  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * One or more preconditions aren't met.
 *
 * @public
 */
export class PreconditionNotMetException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#PreconditionNotMetException";
  readonly name = "PreconditionNotMetException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionNotMetException, __BaseException>) {
    super({
      name: "PreconditionNotMetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionNotMetException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The resource specified already exists.
 *
 * @public
 */
export class ResourceExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#ResourceExistsException";
  readonly name = "ResourceExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The resource type for this request.
   *
   * @public
   */
  ResourceType?: ExceptionResourceType | undefined;

  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceExistsException, __BaseException>) {
    super({
      name: "ResourceExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceExistsException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * A resource is already in a state that indicates an operation is happening that must complete before a new update can be applied.
 *
 * @public
 */
export class ConcurrentUpdatingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#ConcurrentUpdatingException";
  readonly name = "ConcurrentUpdatingException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentUpdatingException, __BaseException>) {
    super({
      name: "ConcurrentUpdatingException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentUpdatingException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * This resource is currently unavailable.
 *
 * @public
 */
export class ResourceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#ResourceUnavailableException";
  readonly name = "ResourceUnavailableException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * The resource type for this request.
   *
   * @public
   */
  ResourceType?: ExceptionResourceType | undefined;

  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.RequestId = opts.RequestId;
  }
}

/**
 * This error indicates that you are calling an operation on an Amazon Quick Suite subscription where the edition doesn't include support for that operation. Amazon Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and capability is available in every edition.
 *
 * @public
 */
export class UnsupportedUserEditionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#UnsupportedUserEditionException";
  readonly name = "UnsupportedUserEditionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedUserEditionException, __BaseException>) {
    super({
      name: "UnsupportedUserEditionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedUserEditionException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * An internal service exception.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * An exception thrown when an invalid parameter value is provided for dataset operations.
 *
 * @public
 */
export class InvalidDataSetParameterValueException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#InvalidDataSetParameterValueException";
  readonly name = "InvalidDataSetParameterValueException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidDataSetParameterValueException, __BaseException>) {
    super({
      name: "InvalidDataSetParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidDataSetParameterValueException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The customer managed key that is registered to your Amazon Quick Sight account is unavailable.
 *
 * @public
 */
export class CustomerManagedKeyUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#CustomerManagedKeyUnavailableException";
  readonly name = "CustomerManagedKeyUnavailableException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this operation.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomerManagedKeyUnavailableException, __BaseException>) {
    super({
      name: "CustomerManagedKeyUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomerManagedKeyUnavailableException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * One or more parameter has a value that isn't valid.
 *
 * @public
 */
export class InvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#InvalidParameterException";
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.RequestId = opts.RequestId;
  }
}

/**
 * The `NextToken` value isn't valid.
 *
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#InvalidNextTokenException";
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.RequestId = opts.RequestId;
  }
}

/**
 * The domain specified isn't on the allow list. All domains for embedded dashboards must be added to the approved list by an Amazon Quick Suite admin.
 *
 * @public
 */
export class DomainNotWhitelistedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#DomainNotWhitelistedException";
  readonly name = "DomainNotWhitelistedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DomainNotWhitelistedException, __BaseException>) {
    super({
      name: "DomainNotWhitelistedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DomainNotWhitelistedException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The number of minutes specified for the lifetime of a session isn't valid. The session lifetime must be 15-600 minutes.
 *
 * @public
 */
export class SessionLifetimeInMinutesInvalidException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#SessionLifetimeInMinutesInvalidException";
  readonly name = "SessionLifetimeInMinutesInvalidException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionLifetimeInMinutesInvalidException, __BaseException>) {
    super({
      name: "SessionLifetimeInMinutesInvalidException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionLifetimeInMinutesInvalidException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * This error indicates that you are calling an embedding operation in Amazon Quick Sight without the required pricing plan on your Amazon Web Services account. Before you can use embedding for anonymous users, a Quick Suite administrator needs to add capacity pricing to Quick Sight. You can do this on the **Manage Quick Suite** page.
 *
 * After capacity pricing is added, you can use the `GetDashboardEmbedUrl` API operation with the `--identity-type ANONYMOUS` option.
 *
 * @public
 */
export class UnsupportedPricingPlanException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#UnsupportedPricingPlanException";
  readonly name = "UnsupportedPricingPlanException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedPricingPlanException, __BaseException>) {
    super({
      name: "UnsupportedPricingPlanException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedPricingPlanException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The user with the provided name isn't found. This error can happen in any operation that requires finding a user based on a provided user name, such as `DeleteUser`, `DescribeUser`, and so on.
 *
 * @public
 */
export class QuickSightUserNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#QuickSightUserNotFoundException";
  readonly name = "QuickSightUserNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QuickSightUserNotFoundException, __BaseException>) {
    super({
      name: "QuickSightUserNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QuickSightUserNotFoundException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The identity type specified isn't supported. Supported identity types include `IAM` and `QUICKSIGHT`.
 *
 * @public
 */
export class IdentityTypeNotSupportedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.quicksight#IdentityTypeNotSupportedException";
  readonly name = "IdentityTypeNotSupportedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The Amazon Web Services request ID for this request.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdentityTypeNotSupportedException, __BaseException>) {
    super({
      name: "IdentityTypeNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdentityTypeNotSupportedException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}
