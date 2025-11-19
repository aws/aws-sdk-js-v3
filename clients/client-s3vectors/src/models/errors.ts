// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ValidationExceptionField } from "./models_0";
import { S3VectorsServiceException as __BaseException } from "./S3VectorsServiceException";

/**
 * <p>Access denied.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
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
 * <p>The request failed because a vector bucket name or a vector index name already exists. Vector bucket names must be unique within your Amazon Web Services account for each Amazon Web Services Region. Vector index names must be unique within your vector bucket. Choose a different vector bucket name or vector index name, and try again.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The request failed due to an internal server error.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
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
  }
}

/**
 * <p>The request was rejected because the specified resource can't be found.</p>
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
 * <p>The request timed out. Retry your request.</p>
 * @public
 */
export class RequestTimeoutException extends __BaseException {
  readonly name = "RequestTimeoutException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTimeoutException, __BaseException>) {
    super({
      name: "RequestTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTimeoutException.prototype);
  }
}

/**
 * <p>Your request exceeds a service quota. </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The service is unavailable. Wait briefly and retry your request. If it continues to fail, increase your waiting time between retries.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  $retryable = {
    throttling: true,
  };
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
  }
}

/**
 * <p>The requested action isn't valid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A list of specific validation failures that are encountered during input processing. Each entry in the list contains a path to the field that failed validation and a detailed message that explains why the validation failed. To satisfy multiple constraints, a field can appear multiple times in this list if it failed. You can use the information to identify and fix the specific validation issues in your request.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.fieldList = opts.fieldList;
  }
}

/**
 * <p>The specified Amazon Web Services KMS key isn't enabled.</p>
 * @public
 */
export class KmsDisabledException extends __BaseException {
  readonly name = "KmsDisabledException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsDisabledException, __BaseException>) {
    super({
      name: "KmsDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsDisabledException.prototype);
  }
}

/**
 * <p>The request was rejected for one of the following reasons: </p> <ul> <li> <p>The <code>KeyUsage</code> value of the KMS key is incompatible with the API operation.</p> </li> <li> <p>The encryption algorithm or signing algorithm specified for the operation is incompatible with the type of key material in the KMS key (<code>KeySpec</code>).</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html#API_Encrypt_Errors">InvalidKeyUsageException</a> in the <i>Amazon Web Services Key Management Service API Reference</i>.</p>
 * @public
 */
export class KmsInvalidKeyUsageException extends __BaseException {
  readonly name = "KmsInvalidKeyUsageException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsInvalidKeyUsageException, __BaseException>) {
    super({
      name: "KmsInvalidKeyUsageException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsInvalidKeyUsageException.prototype);
  }
}

/**
 * <p>The key state of the KMS key isn't compatible with the operation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_Encrypt.html#API_Encrypt_Errors">KMSInvalidStateException</a> in the <i>Amazon Web Services Key Management Service API Reference</i>.</p>
 * @public
 */
export class KmsInvalidStateException extends __BaseException {
  readonly name = "KmsInvalidStateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsInvalidStateException, __BaseException>) {
    super({
      name: "KmsInvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsInvalidStateException.prototype);
  }
}

/**
 * <p>The KMS key can't be found.</p>
 * @public
 */
export class KmsNotFoundException extends __BaseException {
  readonly name = "KmsNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KmsNotFoundException, __BaseException>) {
    super({
      name: "KmsNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KmsNotFoundException.prototype);
  }
}
