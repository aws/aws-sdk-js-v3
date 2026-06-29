// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { CloudWatchServiceException as __BaseException } from "./CloudWatchServiceException";
import type { DashboardValidationMessage } from "./models_0";

/**
 * <p>This operation attempted to create a resource that already exists.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * <p>The operation was denied because either the calling principal lacks the required
 *             Amazon Web Services Key Management Service (Amazon Web Services KMS) permission on the
 *             key, or the key policy does not grant Amazon CloudWatch the permissions it needs
 *             to use the key. Verify that the caller has <code>kms:Decrypt</code> permission on the
 *             key, and that the key policy grants the CloudWatch service principal the
 *             <code>kms:DescribeKey</code>, <code>kms:GenerateDataKey</code>,
 *             <code>kms:Encrypt</code>, <code>kms:Decrypt</code>, and <code>kms:ReEncrypt*</code>
 *             permissions described in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_AssociateDatasetKmsKey.html">AssociateDatasetKmsKey</a>.</p>
 * @public
 */
export class KmsAccessDeniedException extends __BaseException {
  readonly name = "KmsAccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsAccessDeniedException, __BaseException>) {
    super({
      name: "KmsAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsAccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified Amazon Web Services Key Management Service (Amazon Web Services KMS) key
 *             is disabled or pending deletion. Re-enable the key (or restore it, if it is pending
 *             deletion) and retry the operation.</p>
 * @public
 */
export class KmsKeyDisabledException extends __BaseException {
  readonly name = "KmsKeyDisabledException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsKeyDisabledException, __BaseException>) {
    super({
      name: "KmsKeyDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsKeyDisabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified Amazon Web Services Key Management Service (Amazon Web Services KMS) key
 *             could not be found. Verify that the key Amazon Resource Name (ARN) is correct, that
 *             the key exists, and that it is in the same Amazon Web Services Region as the
 *             resource.</p>
 * @public
 */
export class KmsKeyNotFoundException extends __BaseException {
  readonly name = "KmsKeyNotFoundException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsKeyNotFoundException, __BaseException>) {
    super({
      name: "KmsKeyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsKeyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The named resource does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  ResourceType?: string | undefined;
  ResourceId?: string | undefined;
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
    this.ResourceType = opts.ResourceType;
    this.ResourceId = opts.ResourceId;
    this.Message = opts.Message;
  }
}

/**
 * <p>More than one process tried to modify a resource at the same time.</p>
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
 * <p>Some part of the dashboard data is invalid.</p>
 * @public
 */
export class DashboardInvalidInputError extends __BaseException {
  readonly name = "DashboardInvalidInputError" as const;
  readonly $fault = "client" as const;
  dashboardValidationMessages?: DashboardValidationMessage[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DashboardInvalidInputError, __BaseException>) {
    super({
      name: "DashboardInvalidInputError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DashboardInvalidInputError.prototype);
    this.dashboardValidationMessages = opts.dashboardValidationMessages;
  }
}

/**
 * <p>The specified dashboard does not exist.</p>
 * @public
 */
export class DashboardNotFoundError extends __BaseException {
  readonly name = "DashboardNotFoundError" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DashboardNotFoundError, __BaseException>) {
    super({
      name: "DashboardNotFoundError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DashboardNotFoundError.prototype);
  }
}

/**
 * <p>The operation could not be completed because the request conflicts with the current state of the alarm or its underlying scheduled query resource.</p>
 * @public
 */
export class ResourceConflict extends __BaseException {
  readonly name = "ResourceConflict" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflict, __BaseException>) {
    super({
      name: "ResourceConflict",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflict.prototype);
  }
}

/**
 * <p>The named resource does not exist.</p>
 * @public
 */
export class ResourceNotFound extends __BaseException {
  readonly name = "ResourceNotFound" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFound, __BaseException>) {
    super({
      name: "ResourceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFound.prototype);
  }
}

/**
 * <p>Request processing has failed due to some unknown error, exception, or
 *             failure.</p>
 * @public
 */
export class InternalServiceFault extends __BaseException {
  readonly name = "InternalServiceFault" as const;
  readonly $fault = "server" as const;
  /**
   * <p></p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceFault, __BaseException>) {
    super({
      name: "InternalServiceFault",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceFault.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Parameters were used together that cannot be used together.</p>
 * @public
 */
export class InvalidParameterCombinationException extends __BaseException {
  readonly name = "InvalidParameterCombinationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterCombinationException, __BaseException>) {
    super({
      name: "InvalidParameterCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterCombinationException.prototype);
  }
}

/**
 * <p>The value of an input parameter is bad or out-of-range.</p>
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
 * <p>An input parameter that is required is missing.</p>
 * @public
 */
export class MissingRequiredParameterException extends __BaseException {
  readonly name = "MissingRequiredParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingRequiredParameterException, __BaseException>) {
    super({
      name: "MissingRequiredParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingRequiredParameterException.prototype);
  }
}

/**
 * <p>The next token specified is invalid.</p>
 * @public
 */
export class InvalidNextToken extends __BaseException {
  readonly name = "InvalidNextToken" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextToken, __BaseException>) {
    super({
      name: "InvalidNextToken",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextToken.prototype);
  }
}

/**
 * <p>The operation exceeded one or more limits.</p>
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
 * <p>The quota for alarms for this customer has already been reached.</p>
 * @public
 */
export class LimitExceededFault extends __BaseException {
  readonly name = "LimitExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededFault, __BaseException>) {
    super({
      name: "LimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededFault.prototype);
  }
}

/**
 * <p>Data was not syntactically valid JSON.</p>
 * @public
 */
export class InvalidFormatFault extends __BaseException {
  readonly name = "InvalidFormatFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidFormatFault, __BaseException>) {
    super({
      name: "InvalidFormatFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidFormatFault.prototype);
  }
}
