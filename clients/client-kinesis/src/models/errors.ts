// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { KinesisServiceException as __BaseException } from "./KinesisServiceException";

/**
 * Specifies that you do not have the permissions required to perform this operation.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message.
 *
 * @public
 */
export class InvalidArgumentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#InvalidArgumentException";
  readonly name = "InvalidArgumentException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
  }
}

/**
 * The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * The resource is not available for this operation. For successful operation, the resource must be in the `ACTIVE` state.
 *
 * @public
 */
export class ResourceInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#ResourceInUseException";
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * The requested resource could not be found. The stream might not be specified correctly.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#ResourceNotFoundException";
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
 * The ciphertext references a key that doesn't exist or that you don't have access to.
 *
 * @public
 */
export class KMSAccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#KMSAccessDeniedException";
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
 * The request was rejected because the specified customer master key (CMK) isn't enabled.
 *
 * @public
 */
export class KMSDisabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#KMSDisabledException";
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
 * The request was rejected because the state of the specified resource isn't valid for this request. For more information, see [How Key State Affects Use of a Customer Master Key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Amazon Web Services Key Management Service Developer Guide*.
 *
 * @public
 */
export class KMSInvalidStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#KMSInvalidStateException";
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
  public static readonly shapeId: string = "com.amazonaws.kinesis#KMSNotFoundException";
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
  public static readonly shapeId: string = "com.amazonaws.kinesis#KMSOptInRequired";
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
 * The request was denied due to request throttling. For more information about throttling, see [Limits](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second) in the *Amazon Web Services Key Management Service Developer Guide*.
 *
 * @public
 */
export class KMSThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#KMSThrottlingException";
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
 * Specifies that you tried to invoke this API for a data stream with the on-demand capacity mode. This API is only supported for data streams with the provisioned capacity mode.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * The request was rejected because the DryRun parameter was specified.
 *
 * @public
 */
export class DryRunOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#DryRunOperationException";
  readonly name = "DryRunOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DryRunOperationException, __BaseException>) {
    super({
      name: "DryRunOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DryRunOperationException.prototype);
  }
}

/**
 * The provided iterator exceeds the maximum age allowed.
 *
 * @public
 */
export class ExpiredIteratorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#ExpiredIteratorException";
  readonly name = "ExpiredIteratorException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredIteratorException, __BaseException>) {
    super({
      name: "ExpiredIteratorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredIteratorException.prototype);
  }
}

/**
 * The pagination token passed to the operation is expired.
 *
 * @public
 */
export class ExpiredNextTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#ExpiredNextTokenException";
  readonly name = "ExpiredNextTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredNextTokenException, __BaseException>) {
    super({
      name: "ExpiredNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredNextTokenException.prototype);
  }
}

/**
 * The processing of the request failed because of an unknown error, exception, or failure.
 *
 * @public
 */
export class InternalFailureException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#InternalFailureException";
  readonly name = "InternalFailureException" as const;
  readonly $fault = "server" as const;
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
  }
}

/**
 * The request rate for the stream is too high, or the requested data is too large for the available throughput. Reduce the frequency or size of your requests. For more information, see [Streams Limits](https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html) in the *Amazon Kinesis Data Streams Developer Guide*, and [Error Retries and Exponential Backoff in Amazon Web Services](https://docs.aws.amazon.com/general/latest/gr/api-retries.html) in the *Amazon Web Services General Reference*.
 *
 * @public
 */
export class ProvisionedThroughputExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.kinesis#ProvisionedThroughputExceededException";
  readonly name = "ProvisionedThroughputExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProvisionedThroughputExceededException, __BaseException>) {
    super({
      name: "ProvisionedThroughputExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProvisionedThroughputExceededException.prototype);
  }
}
