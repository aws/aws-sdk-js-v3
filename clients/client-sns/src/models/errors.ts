// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { SNSServiceException as __BaseException } from "./SNSServiceException";

/**
 * Indicates that the user has been denied access to the requested resource.
 *
 * @public
 */
export class AuthorizationErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#AuthorizationErrorException";
  readonly name = "AuthorizationErrorException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthorizationErrorException, __BaseException>) {
    super({
      name: "AuthorizationErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthorizationErrorException.prototype);
  }
}

/**
 * Indicates an internal service error.
 *
 * @public
 */
export class InternalErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#InternalErrorException";
  readonly name = "InternalErrorException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
  }
}

/**
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @public
 */
export class InvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#InvalidParameterException";
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * Indicates that the requested resource does not exist.
 *
 * @public
 */
export class NotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#NotFoundException";
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
 * Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.
 *
 * @public
 */
export class ThrottledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#ThrottledException";
  readonly name = "ThrottledException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * Indicates that the number of filter polices in your Amazon Web Services account exceeds the limit. To add more filter polices, submit an Amazon SNS Limit Increase case in the Amazon Web Services Support Center.
 *
 * @public
 */
export class FilterPolicyLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#FilterPolicyLimitExceededException";
  readonly name = "FilterPolicyLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FilterPolicyLimitExceededException, __BaseException>) {
    super({
      name: "FilterPolicyLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FilterPolicyLimitExceededException.prototype);
  }
}

/**
 * Indicates that the request parameter has exceeded the maximum number of concurrent message replays.
 *
 * @public
 */
export class ReplayLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#ReplayLimitExceededException";
  readonly name = "ReplayLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReplayLimitExceededException, __BaseException>) {
    super({
      name: "ReplayLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReplayLimitExceededException.prototype);
  }
}

/**
 * Indicates that the customer already owns the maximum allowed number of subscriptions.
 *
 * @public
 */
export class SubscriptionLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#SubscriptionLimitExceededException";
  readonly name = "SubscriptionLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubscriptionLimitExceededException, __BaseException>) {
    super({
      name: "SubscriptionLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubscriptionLimitExceededException.prototype);
  }
}

/**
 * Indicates that the specified phone number opted out of receiving SMS messages from your Amazon Web Services account. You can't send SMS messages to phone numbers that opt out.
 *
 * @public
 */
export class OptedOutException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#OptedOutException";
  readonly name = "OptedOutException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OptedOutException, __BaseException>) {
    super({
      name: "OptedOutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OptedOutException.prototype);
  }
}

/**
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @public
 */
export class UserErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#UserErrorException";
  readonly name = "UserErrorException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserErrorException, __BaseException>) {
    super({
      name: "UserErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserErrorException.prototype);
  }
}

/**
 * Can't perform multiple operations on a tag simultaneously. Perform the operations sequentially.
 *
 * @public
 */
export class ConcurrentAccessException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#ConcurrentAccessException";
  readonly name = "ConcurrentAccessException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentAccessException, __BaseException>) {
    super({
      name: "ConcurrentAccessException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentAccessException.prototype);
  }
}

/**
 * The credential signature isn't valid. You must use an HTTPS endpoint and sign your request using Signature Version 4.
 *
 * @public
 */
export class InvalidSecurityException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#InvalidSecurityException";
  readonly name = "InvalidSecurityException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSecurityException, __BaseException>) {
    super({
      name: "InvalidSecurityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSecurityException.prototype);
  }
}

/**
 * A tag has been added to a resource with the same ARN as a deleted resource. Wait a short while and then retry the operation.
 *
 * @public
 */
export class StaleTagException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#StaleTagException";
  readonly name = "StaleTagException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StaleTagException, __BaseException>) {
    super({
      name: "StaleTagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StaleTagException.prototype);
  }
}

/**
 * Can't add more than 50 tags to a topic.
 *
 * @public
 */
export class TagLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#TagLimitExceededException";
  readonly name = "TagLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagLimitExceededException, __BaseException>) {
    super({
      name: "TagLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagLimitExceededException.prototype);
  }
}

/**
 * The request doesn't comply with the IAM tag policy. Correct your request and then retry it.
 *
 * @public
 */
export class TagPolicyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#TagPolicyException";
  readonly name = "TagPolicyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagPolicyException, __BaseException>) {
    super({
      name: "TagPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagPolicyException.prototype);
  }
}

/**
 * Indicates that the customer already owns the maximum allowed number of topics.
 *
 * @public
 */
export class TopicLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#TopicLimitExceededException";
  readonly name = "TopicLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TopicLimitExceededException, __BaseException>) {
    super({
      name: "TopicLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TopicLimitExceededException.prototype);
  }
}

/**
 * Can’t perform the action on the specified resource. Make sure that the resource exists.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#ResourceNotFoundException";
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
 * Indicates that the specified state is not a valid state for an event source.
 *
 * @public
 */
export class InvalidStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#InvalidStateException";
  readonly name = "InvalidStateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateException, __BaseException>) {
    super({
      name: "InvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateException.prototype);
  }
}

/**
 * Indicates that a parameter in the request is invalid.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * Exception error indicating endpoint disabled.
 *
 * @public
 */
export class EndpointDisabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#EndpointDisabledException";
  readonly name = "EndpointDisabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointDisabledException, __BaseException>) {
    super({
      name: "EndpointDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointDisabledException.prototype);
  }
}

/**
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#InvalidParameterValueException";
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * The ciphertext references a key that doesn't exist or that you don't have access to.
 *
 * @public
 */
export class KMSAccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#KMSAccessDeniedException";
  readonly name = "KMSAccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSAccessDeniedException, __BaseException>) {
    super({
      name: "KMSAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSAccessDeniedException.prototype);
  }
}

/**
 * The request was rejected because the specified Amazon Web Services KMS key isn't enabled.
 *
 * @public
 */
export class KMSDisabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#KMSDisabledException";
  readonly name = "KMSDisabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSDisabledException, __BaseException>) {
    super({
      name: "KMSDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSDisabledException.prototype);
  }
}

/**
 * The request was rejected because the state of the specified resource isn't valid for this request. For more information, see [Key states of Amazon Web Services KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * @public
 */
export class KMSInvalidStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#KMSInvalidStateException";
  readonly name = "KMSInvalidStateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSInvalidStateException, __BaseException>) {
    super({
      name: "KMSInvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSInvalidStateException.prototype);
  }
}

/**
 * The request was rejected because the specified entity or resource can't be found.
 *
 * @public
 */
export class KMSNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#KMSNotFoundException";
  readonly name = "KMSNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSNotFoundException, __BaseException>) {
    super({
      name: "KMSNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSNotFoundException.prototype);
  }
}

/**
 * The Amazon Web Services access key ID needs a subscription for the service.
 *
 * @public
 */
export class KMSOptInRequired extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#KMSOptInRequired";
  readonly name = "KMSOptInRequired" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSOptInRequired, __BaseException>) {
    super({
      name: "KMSOptInRequired",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSOptInRequired.prototype);
  }
}

/**
 * The request was denied due to request throttling. For more information about throttling, see [Limits](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second) in the *Key Management Service Developer Guide.*
 *
 * @public
 */
export class KMSThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#KMSThrottlingException";
  readonly name = "KMSThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSThrottlingException, __BaseException>) {
    super({
      name: "KMSThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSThrottlingException.prototype);
  }
}

/**
 * Exception error indicating platform application disabled.
 *
 * @public
 */
export class PlatformApplicationDisabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#PlatformApplicationDisabledException";
  readonly name = "PlatformApplicationDisabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PlatformApplicationDisabledException, __BaseException>) {
    super({
      name: "PlatformApplicationDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PlatformApplicationDisabledException.prototype);
  }
}

/**
 * Two or more batch entries in the request have the same `Id`.
 *
 * @public
 */
export class BatchEntryIdsNotDistinctException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#BatchEntryIdsNotDistinctException";
  readonly name = "BatchEntryIdsNotDistinctException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchEntryIdsNotDistinctException, __BaseException>) {
    super({
      name: "BatchEntryIdsNotDistinctException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchEntryIdsNotDistinctException.prototype);
  }
}

/**
 * The length of all the batch messages put together is more than the limit.
 *
 * @public
 */
export class BatchRequestTooLongException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#BatchRequestTooLongException";
  readonly name = "BatchRequestTooLongException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchRequestTooLongException, __BaseException>) {
    super({
      name: "BatchRequestTooLongException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchRequestTooLongException.prototype);
  }
}

/**
 * The batch request doesn't contain any entries.
 *
 * @public
 */
export class EmptyBatchRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#EmptyBatchRequestException";
  readonly name = "EmptyBatchRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EmptyBatchRequestException, __BaseException>) {
    super({
      name: "EmptyBatchRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EmptyBatchRequestException.prototype);
  }
}

/**
 * The `Id` of a batch entry in a batch request doesn't abide by the specification.
 *
 * @public
 */
export class InvalidBatchEntryIdException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#InvalidBatchEntryIdException";
  readonly name = "InvalidBatchEntryIdException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidBatchEntryIdException, __BaseException>) {
    super({
      name: "InvalidBatchEntryIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidBatchEntryIdException.prototype);
  }
}

/**
 * The batch request contains more entries than permissible (more than 10).
 *
 * @public
 */
export class TooManyEntriesInBatchRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#TooManyEntriesInBatchRequestException";
  readonly name = "TooManyEntriesInBatchRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyEntriesInBatchRequestException, __BaseException>) {
    super({
      name: "TooManyEntriesInBatchRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyEntriesInBatchRequestException.prototype);
  }
}

/**
 * Indicates that the one-time password (OTP) used for verification is invalid.
 *
 * @public
 */
export class VerificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.sns#VerificationException";
  readonly name = "VerificationException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * The status of the verification error.
   *
   * @public
   */
  Status: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VerificationException, __BaseException>) {
    super({
      name: "VerificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VerificationException.prototype);
    this.Message = opts.Message;
    this.Status = opts.Status;
  }
}
