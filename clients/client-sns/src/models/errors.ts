// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SNSServiceException as __BaseException } from "./SNSServiceException";

/**
 * <p>Indicates that the user has been denied access to the requested resource.</p>
 * @public
 */
export class AuthorizationErrorException extends __BaseException {
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
 * <p>Indicates an internal service error.</p>
 * @public
 */
export class InternalErrorException extends __BaseException {
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
 * <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
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
 * <p>Indicates that the requested resource does not exist.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
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
 * <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.</p>
 * @public
 */
export class ThrottledException extends __BaseException {
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
 * <p>Indicates that the number of filter polices in your Amazon Web Services account exceeds the limit. To
 *             add more filter polices, submit an Amazon SNS Limit Increase case in the Amazon Web ServicesSupport
 *             Center.</p>
 * @public
 */
export class FilterPolicyLimitExceededException extends __BaseException {
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
 * <p>Indicates that the request parameter has exceeded the maximum number of concurrent message replays.</p>
 * @public
 */
export class ReplayLimitExceededException extends __BaseException {
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
 * <p>Indicates that the customer already owns the maximum allowed number of
 *             subscriptions.</p>
 * @public
 */
export class SubscriptionLimitExceededException extends __BaseException {
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
 * <p>Indicates that the specified phone number opted out of receiving SMS messages from
 *             your Amazon Web Services account. You can't send SMS messages to phone numbers that opt out.</p>
 * @public
 */
export class OptedOutException extends __BaseException {
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
 * <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 * @public
 */
export class UserErrorException extends __BaseException {
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
 * <p>Can't perform multiple operations on a tag simultaneously. Perform the operations
 *             sequentially.</p>
 * @public
 */
export class ConcurrentAccessException extends __BaseException {
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
 * <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your
 *             request using Signature Version 4.</p>
 * @public
 */
export class InvalidSecurityException extends __BaseException {
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
 * <p>A tag has been added to a resource with the same ARN as a deleted resource. Wait a
 *             short while and then retry the operation.</p>
 * @public
 */
export class StaleTagException extends __BaseException {
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
 * <p>Can't add more than 50 tags to a topic.</p>
 * @public
 */
export class TagLimitExceededException extends __BaseException {
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
 * <p>The request doesn't comply with the IAM tag policy. Correct your request and then
 *             retry it.</p>
 * @public
 */
export class TagPolicyException extends __BaseException {
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
 * <p>Indicates that the customer already owns the maximum allowed number of topics.</p>
 * @public
 */
export class TopicLimitExceededException extends __BaseException {
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
 * <p>Can’t perform the action on the specified resource. Make sure that the resource
 *             exists.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
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
 * <p>Indicates that the specified state is not a valid state for an event source.</p>
 * @public
 */
export class InvalidStateException extends __BaseException {
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
 * <p>Indicates that a parameter in the request is invalid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
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
 * <p>Exception error indicating endpoint disabled.</p>
 * @public
 */
export class EndpointDisabledException extends __BaseException {
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
 * <p>Indicates that a request parameter does not comply with the associated constraints.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
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
 * <p>The ciphertext references a key that doesn't exist or that you don't have access
 *             to.</p>
 * @public
 */
export class KMSAccessDeniedException extends __BaseException {
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
 * <p>The request was rejected because the specified Amazon Web Services KMS key isn't
 *             enabled.</p>
 * @public
 */
export class KMSDisabledException extends __BaseException {
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
 * <p>The request was rejected because the state of the specified resource isn't valid for
 *             this request. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of Amazon Web Services KMS keys</a> in the <i>Key Management Service Developer
 *                 Guide</i>.</p>
 * @public
 */
export class KMSInvalidStateException extends __BaseException {
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
 * <p>The request was rejected because the specified entity or resource can't be
 *             found.</p>
 * @public
 */
export class KMSNotFoundException extends __BaseException {
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
 * <p>The Amazon Web Services access key ID needs a subscription for the service.</p>
 * @public
 */
export class KMSOptInRequired extends __BaseException {
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
 * <p>The request was denied due to request throttling. For more information about
 *             throttling, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in
 *             the <i>Key Management Service Developer Guide.</i>
 *          </p>
 * @public
 */
export class KMSThrottlingException extends __BaseException {
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
 * <p>Exception error indicating platform application disabled.</p>
 * @public
 */
export class PlatformApplicationDisabledException extends __BaseException {
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
 * <p>Two or more batch entries in the request have the same <code>Id</code>.</p>
 * @public
 */
export class BatchEntryIdsNotDistinctException extends __BaseException {
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
 * <p>The length of all the batch messages put together is more than the limit.</p>
 * @public
 */
export class BatchRequestTooLongException extends __BaseException {
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
 * <p>The batch request doesn't contain any entries.</p>
 * @public
 */
export class EmptyBatchRequestException extends __BaseException {
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
 * <p>The <code>Id</code> of a batch entry in a batch request doesn't abide by the specification. </p>
 * @public
 */
export class InvalidBatchEntryIdException extends __BaseException {
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
 * <p> The batch request contains more entries than permissible (more than 10).</p>
 * @public
 */
export class TooManyEntriesInBatchRequestException extends __BaseException {
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
 * <p>Indicates that the one-time password (OTP) used for verification is invalid.</p>
 * @public
 */
export class VerificationException extends __BaseException {
  readonly name = "VerificationException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The status of the verification error.</p>
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
