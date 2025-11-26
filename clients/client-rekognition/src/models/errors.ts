// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RekognitionServiceException as __BaseException } from "./RekognitionServiceException";

/**
 * <p>You are not authorized to perform the action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
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
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p> A User with the same Id already exists within the collection, or the update or deletion
 *       of the User caused an inconsistent state. ** </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
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
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at least one of the other input
 *         parameters is different from the previous call to the operation.</p>
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name = "IdempotentParameterMismatchException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name = "InternalServerError" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
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
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 * @public
 */
export class ProvisionedThroughputExceededException extends __BaseException {
  readonly name = "ProvisionedThroughputExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
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
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The resource specified in the request cannot be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
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
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p></p>
 *          <p>The size of the collection exceeds the allowed limit. For more information,
 *       see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide. </p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
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
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The input image size exceeds the allowed limit. If you are calling
 *       DetectProtectiveEquipment, the image size or resolution exceeds the allowed limit. For more
 *       information, see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide.
 *     </p>
 * @public
 */
export class ImageTooLargeException extends __BaseException {
  readonly name = "ImageTooLargeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ImageTooLargeException, __BaseException>) {
    super({
      name: "ImageTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ImageTooLargeException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The provided image format is not supported. </p>
 * @public
 */
export class InvalidImageFormatException extends __BaseException {
  readonly name = "InvalidImageFormatException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidImageFormatException, __BaseException>) {
    super({
      name: "InvalidImageFormatException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidImageFormatException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>Amazon Rekognition is unable to access the S3 object specified in the request.</p>
 * @public
 */
export class InvalidS3ObjectException extends __BaseException {
  readonly name = "InvalidS3ObjectException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidS3ObjectException, __BaseException>) {
    super({
      name: "InvalidS3ObjectException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidS3ObjectException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>An Amazon Rekognition service limit was exceeded. For example, if you start too many jobs
 *             concurrently, subsequent calls to start operations (ex:
 *             <code>StartLabelDetection</code>) will raise a <code>LimitExceededException</code>
 *             exception (HTTP status code: 400) until the number of concurrently running jobs is below
 *             the Amazon Rekognition service limit. </p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
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
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The specified resource is already being used.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
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
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>A resource with the specified ID already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The supplied revision id for the project policy is invalid.</p>
 * @public
 */
export class InvalidPolicyRevisionIdException extends __BaseException {
  readonly name = "InvalidPolicyRevisionIdException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyRevisionIdException, __BaseException>) {
    super({
      name: "InvalidPolicyRevisionIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyRevisionIdException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>Pagination token in the request is not valid.</p>
 * @public
 */
export class InvalidPaginationTokenException extends __BaseException {
  readonly name = "InvalidPaginationTokenException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPaginationTokenException, __BaseException>) {
    super({
      name: "InvalidPaginationTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPaginationTokenException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The requested resource isn't ready. For example,
 *          this exception occurs when you call <code>DetectCustomLabels</code> with a
 *          model version that isn't deployed. </p>
 * @public
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name = "ResourceNotReadyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotReadyException, __BaseException>) {
    super({
      name: "ResourceNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotReadyException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The number of in-progress human reviews you have has exceeded the number allowed.</p>
 * @public
 */
export class HumanLoopQuotaExceededException extends __BaseException {
  readonly name = "HumanLoopQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The quota code.</p>
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * <p>The service code.</p>
   * @public
   */
  ServiceCode?: string | undefined;

  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HumanLoopQuotaExceededException, __BaseException>) {
    super({
      name: "HumanLoopQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HumanLoopQuotaExceededException.prototype);
    this.ResourceType = opts.ResourceType;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>Occurs when a given sessionId is not found.</p>
 * @public
 */
export class SessionNotFoundException extends __BaseException {
  readonly name = "SessionNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionNotFoundException, __BaseException>) {
    super({
      name: "SessionNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionNotFoundException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>Indicates that a provided manifest file is empty or larger than the allowed limit.</p>
 * @public
 */
export class InvalidManifestException extends __BaseException {
  readonly name = "InvalidManifestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidManifestException, __BaseException>) {
    super({
      name: "InvalidManifestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidManifestException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The format of the project policy document that you supplied to
 *       <code>PutProjectPolicy</code> is incorrect. </p>
 * @public
 */
export class MalformedPolicyDocumentException extends __BaseException {
  readonly name = "MalformedPolicyDocumentException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedPolicyDocumentException, __BaseException>) {
    super({
      name: "MalformedPolicyDocumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}

/**
 * <p>The file size or duration of the supplied media is too large. The maximum file size is 10GB.
 *         The maximum duration is 6 hours. </p>
 * @public
 */
export class VideoTooLargeException extends __BaseException {
  readonly name = "VideoTooLargeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  Code?: string | undefined;
  /**
   * <p>A universally unique identifier (UUID) for the request.</p>
   * @public
   */
  Logref?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VideoTooLargeException, __BaseException>) {
    super({
      name: "VideoTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VideoTooLargeException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.Logref = opts.Logref;
  }
}
