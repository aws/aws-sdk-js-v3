// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ACMPCAServiceException as __BaseException } from "./ACMPCAServiceException";

/**
 * <p>One or more of the specified arguments was not valid.</p>
 * @public
 */
export class InvalidArgsException extends __BaseException {
  readonly name = "InvalidArgsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgsException, __BaseException>) {
    super({
      name: "InvalidArgsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgsException.prototype);
  }
}

/**
 * <p>The resource policy is invalid or is missing a required statement. For general information about IAM policy and statement structure, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json">Overview of JSON Policies</a>.</p>
 * @public
 */
export class InvalidPolicyException extends __BaseException {
  readonly name = "InvalidPolicyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyException, __BaseException>) {
    super({
      name: "InvalidPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyException.prototype);
  }
}

/**
 * <p>The tag associated with the CA is not valid. The invalid argument is contained in the message field.</p>
 * @public
 */
export class InvalidTagException extends __BaseException {
  readonly name = "InvalidTagException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTagException, __BaseException>) {
    super({
      name: "InvalidTagException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTagException.prototype);
  }
}

/**
 * <p>An Amazon Web Services Private CA quota has been exceeded. See the exception message returned to determine the quota that was exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
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
 * <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 * @public
 */
export class InvalidArnException extends __BaseException {
  readonly name = "InvalidArnException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArnException, __BaseException>) {
    super({
      name: "InvalidArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArnException.prototype);
  }
}

/**
 * <p>The state of the private CA does not allow this action to occur.</p>
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
 * <p>The request has failed for an unspecified reason.</p>
 * @public
 */
export class RequestFailedException extends __BaseException {
  readonly name = "RequestFailedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestFailedException, __BaseException>) {
    super({
      name: "RequestFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestFailedException.prototype);
  }
}

/**
 * <p>Your request is already in progress.</p>
 * @public
 */
export class RequestInProgressException extends __BaseException {
  readonly name = "RequestInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestInProgressException, __BaseException>) {
    super({
      name: "RequestInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestInProgressException.prototype);
  }
}

/**
 * <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy cannot be found.</p>
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
 * <p>The designated permission has already been given to the user.</p>
 * @public
 */
export class PermissionAlreadyExistsException extends __BaseException {
  readonly name = "PermissionAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PermissionAlreadyExistsException, __BaseException>) {
    super({
      name: "PermissionAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PermissionAlreadyExistsException.prototype);
  }
}

/**
 * <p>A previous update to your private CA is still ongoing.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The current action was prevented because it would lock the caller out from performing subsequent actions. Verify that the specified parameters would not result in the caller being denied access to the resource. </p>
 * @public
 */
export class LockoutPreventedException extends __BaseException {
  readonly name = "LockoutPreventedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LockoutPreventedException, __BaseException>) {
    super({
      name: "LockoutPreventedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LockoutPreventedException.prototype);
  }
}

/**
 * <p>The certificate authority certificate you are importing does not comply with conditions specified in the certificate that signed it.</p>
 * @public
 */
export class CertificateMismatchException extends __BaseException {
  readonly name = "CertificateMismatchException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateMismatchException, __BaseException>) {
    super({
      name: "CertificateMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateMismatchException.prototype);
  }
}

/**
 * <p>The request action cannot be performed or is prohibited.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>One or more fields in the certificate are invalid.</p>
 * @public
 */
export class MalformedCertificateException extends __BaseException {
  readonly name = "MalformedCertificateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedCertificateException, __BaseException>) {
    super({
      name: "MalformedCertificateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedCertificateException.prototype);
  }
}

/**
 * <p>The certificate signing request is invalid.</p>
 * @public
 */
export class MalformedCSRException extends __BaseException {
  readonly name = "MalformedCSRException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedCSRException, __BaseException>) {
    super({
      name: "MalformedCSRException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedCSRException.prototype);
  }
}

/**
 * <p>The token specified in the <code>NextToken</code> argument is not valid. Use the token returned from your previous call to <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html">ListCertificateAuthorities</a>.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>Your request has already been completed.</p>
 * @public
 */
export class RequestAlreadyProcessedException extends __BaseException {
  readonly name = "RequestAlreadyProcessedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestAlreadyProcessedException, __BaseException>) {
    super({
      name: "RequestAlreadyProcessedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestAlreadyProcessedException.prototype);
  }
}

/**
 * <p>You can associate up to 50 tags with a private CA. Exception information is contained in the exception message field.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
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
  }
}
