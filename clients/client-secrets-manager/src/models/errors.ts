// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { SecretsManagerServiceException as __BaseException } from "./SecretsManagerServiceException";

/**
 * Secrets Manager can't decrypt the protected secret text using the provided KMS key.
 *
 * @public
 */
export class DecryptionFailure extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.secretsmanager#DecryptionFailure";
  readonly name = "DecryptionFailure" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DecryptionFailure, __BaseException>) {
    super({
      name: "DecryptionFailure",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DecryptionFailure.prototype);
    this.Message = opts.Message;
  }
}

/**
 * An error occurred on the server side.
 *
 * @public
 */
export class InternalServiceError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.secretsmanager#InternalServiceError";
  readonly name = "InternalServiceError" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceError, __BaseException>) {
    super({
      name: "InternalServiceError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The `NextToken` value is invalid.
 *
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.secretsmanager#InvalidNextTokenException";
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
 * The parameter name or value is invalid.
 *
 * @public
 */
export class InvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.secretsmanager#InvalidParameterException";
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * A parameter value is not valid for the current state of the resource.
 *
 * Possible causes:
 *
 * - The secret is scheduled for deletion.
 * - You tried to enable rotation on a secret that doesn't already have a Lambda function ARN configured and you didn't include such an ARN as a parameter in this call.
 * - The secret is managed by another service, and you must use that service to update it. For more information, see [Secrets managed by other Amazon Web Services services](https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html).
 *
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.secretsmanager#InvalidRequestException";
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * Secrets Manager can't find the resource that you asked for.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.secretsmanager#ResourceNotFoundException";
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
 * Secrets Manager can't encrypt the protected secret text using the provided KMS key. Check that the KMS key is available, enabled, and not in an invalid state. For more information, see [Key state: Effect on your KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html).
 *
 * @public
 */
export class EncryptionFailure extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.secretsmanager#EncryptionFailure";
  readonly name = "EncryptionFailure" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EncryptionFailure, __BaseException>) {
    super({
      name: "EncryptionFailure",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EncryptionFailure.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The request failed because it would exceed one of the Secrets Manager quotas.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.secretsmanager#LimitExceededException";
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
 * The resource policy has syntax errors.
 *
 * @public
 */
export class MalformedPolicyDocumentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.secretsmanager#MalformedPolicyDocumentException";
  readonly name = "MalformedPolicyDocumentException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * The request failed because you did not complete all the prerequisite steps.
 *
 * @public
 */
export class PreconditionNotMetException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.secretsmanager#PreconditionNotMetException";
  readonly name = "PreconditionNotMetException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * A resource with the ID you requested already exists.
 *
 * @public
 */
export class ResourceExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.secretsmanager#ResourceExistsException";
  readonly name = "ResourceExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * The `BlockPublicPolicy` parameter is set to true, and the resource policy did not prevent broad access to the secret.
 *
 * @public
 */
export class PublicPolicyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.secretsmanager#PublicPolicyException";
  readonly name = "PublicPolicyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PublicPolicyException, __BaseException>) {
    super({
      name: "PublicPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PublicPolicyException.prototype);
    this.Message = opts.Message;
  }
}
