// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ComprehendServiceException as __BaseException } from "./ComprehendServiceException";
import { InvalidRequestReason } from "./enums";
import { InvalidRequestDetail } from "./models_0";

/**
 * <p>The number of documents in the request exceeds the limit of 25. Try your request again
 *       with fewer documents.</p>
 * @public
 */
export class BatchSizeLimitExceededException extends __BaseException {
  readonly name = "BatchSizeLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BatchSizeLimitExceededException, __BaseException>) {
    super({
      name: "BatchSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BatchSizeLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An internal server error occurred. Retry your request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
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
 * <p>The request is invalid.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Reason?: InvalidRequestReason | undefined;
  /**
   * <p>Provides additional detail about why the request failed.</p>
   * @public
   */
  Detail?: InvalidRequestDetail | undefined;
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
    this.Reason = opts.Reason;
    this.Detail = opts.Detail;
  }
}

/**
 * <p>The size of the input text exceeds the limit. Use a smaller document.</p>
 * @public
 */
export class TextSizeLimitExceededException extends __BaseException {
  readonly name = "TextSizeLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TextSizeLimitExceededException, __BaseException>) {
    super({
      name: "TextSizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TextSizeLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Amazon Comprehend can't process the language of the input text. For a list of supported languages,
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/supported-languages.html">Supported languages</a> in the Comprehend Developer Guide.
 *     </p>
 * @public
 */
export class UnsupportedLanguageException extends __BaseException {
  readonly name = "UnsupportedLanguageException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedLanguageException, __BaseException>) {
    super({
      name: "UnsupportedLanguageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedLanguageException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource is not available. Check the resource and try your request
 *       again.</p>
 * @public
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name = "ResourceUnavailableException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource name is already in use. Use a different name and try your request
 *       again.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of resources per account has been exceeded. Review the resources, and
 *       then try your request again.</p>
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name = "ResourceLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request contains more tags than can be associated with a resource (50 tags per
 *       resource). The maximum number of tags includes both existing tags and those included in your
 *       current request. </p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and
 *       re-enter it.</p>
 * @public
 */
export class KmsKeyValidationException extends __BaseException {
  readonly name = "KmsKeyValidationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsKeyValidationException, __BaseException>) {
    super({
      name: "KmsKeyValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsKeyValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified job was not found. Check the job ID and try again.</p>
 * @public
 */
export class JobNotFoundException extends __BaseException {
  readonly name = "JobNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<JobNotFoundException, __BaseException>) {
    super({
      name: "JobNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, JobNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The filter specified for the operation is invalid. Specify a different
 *       filter.</p>
 * @public
 */
export class InvalidFilterException extends __BaseException {
  readonly name = "InvalidFilterException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFilterException, __BaseException>) {
    super({
      name: "InvalidFilterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFilterException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Concurrent modification of the tags associated with an Amazon Comprehend resource is not
 *       supported. </p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
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
 * <p>The request contains more tag keys than can be associated with a resource (50 tag keys per
 *       resource).</p>
 * @public
 */
export class TooManyTagKeysException extends __BaseException {
  readonly name = "TooManyTagKeysException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagKeysException, __BaseException>) {
    super({
      name: "TooManyTagKeysException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagKeysException.prototype);
    this.Message = opts.Message;
  }
}
