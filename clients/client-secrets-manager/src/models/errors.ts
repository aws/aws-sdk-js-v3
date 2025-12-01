// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SecretsManagerServiceException as __BaseException } from "./SecretsManagerServiceException";

/**
 * <p>Secrets Manager can't decrypt the protected secret text using the provided KMS key. </p>
 * @public
 */
export class DecryptionFailure extends __BaseException {
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
 * <p>An error occurred on the server side.</p>
 * @public
 */
export class InternalServiceError extends __BaseException {
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
 * <p>The <code>NextToken</code> value is invalid.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
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
 * <p>The parameter name or value is invalid.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
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
 * <p>A parameter value is not valid for the current state of the
 *       resource.</p>
 *          <p>Possible causes:</p>
 *          <ul>
 *             <li>
 *                <p>The secret is scheduled for deletion.</p>
 *             </li>
 *             <li>
 *                <p>You tried to enable rotation on a secret that doesn't already have a Lambda function
 *           ARN configured and you didn't include such an ARN as a parameter in this call. </p>
 *             </li>
 *             <li>
 *                <p>The secret is managed by another service, and you must use that service to update it.
 *           For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets managed by other Amazon Web Services services</a>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class InvalidRequestException extends __BaseException {
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
 * <p>Secrets Manager can't find the resource that you asked for.</p>
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
 * <p>Secrets Manager can't encrypt the protected secret text using the provided KMS key. Check that the
 *       KMS key is available, enabled, and not in an invalid state. For more
 *       information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a>.</p>
 * @public
 */
export class EncryptionFailure extends __BaseException {
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
 * <p>The request failed because it would exceed one of the Secrets Manager quotas.</p>
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
 * <p>The resource policy has syntax errors.</p>
 * @public
 */
export class MalformedPolicyDocumentException extends __BaseException {
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
 * <p>The request failed because you did not complete all the prerequisite steps.</p>
 * @public
 */
export class PreconditionNotMetException extends __BaseException {
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
 * <p>A resource with the ID you requested already exists.</p>
 * @public
 */
export class ResourceExistsException extends __BaseException {
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
 * <p>The <code>BlockPublicPolicy</code> parameter is set to true, and the resource policy did not prevent broad access to the secret.</p>
 * @public
 */
export class PublicPolicyException extends __BaseException {
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
