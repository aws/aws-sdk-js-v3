// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { ACMPCAServiceException as __BaseException } from "./ACMPCAServiceException";

/**
 * One or more of the specified arguments was not valid.
 *
 * @public
 */
export class InvalidArgsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#InvalidArgsException";
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
 * The resource policy is invalid or is missing a required statement. For general information about IAM policy and statement structure, see [Overview of JSON Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json).
 *
 * @public
 */
export class InvalidPolicyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#InvalidPolicyException";
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
 * The tag associated with the CA is not valid. The invalid argument is contained in the message field.
 *
 * @public
 */
export class InvalidTagException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#InvalidTagException";
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
 * An Amazon Web Services Private CA quota has been exceeded. See the exception message returned to determine the quota that was exceeded.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#LimitExceededException";
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
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
 *
 * @public
 */
export class InvalidArnException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#InvalidArnException";
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
 * The state of the private CA does not allow this action to occur.
 *
 * @public
 */
export class InvalidStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#InvalidStateException";
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
 * The request has failed for an unspecified reason.
 *
 * @public
 */
export class RequestFailedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#RequestFailedException";
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
 * Your request is already in progress.
 *
 * @public
 */
export class RequestInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#RequestInProgressException";
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
 * A resource such as a private CA, S3 bucket, certificate, audit report, or policy cannot be found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#ResourceNotFoundException";
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
 * The designated permission has already been given to the user.
 *
 * @public
 */
export class PermissionAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#PermissionAlreadyExistsException";
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
 * A previous update to your private CA is still ongoing.
 *
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#ConcurrentModificationException";
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
 * The current action was prevented because it would lock the caller out from performing subsequent actions. Verify that the specified parameters would not result in the caller being denied access to the resource.
 *
 * @public
 */
export class LockoutPreventedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#LockoutPreventedException";
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
 * The certificate authority certificate you are importing does not comply with conditions specified in the certificate that signed it.
 *
 * @public
 */
export class CertificateMismatchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#CertificateMismatchException";
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
 * The request action cannot be performed or is prohibited.
 *
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#InvalidRequestException";
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
 * One or more fields in the certificate are invalid.
 *
 * @public
 */
export class MalformedCertificateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#MalformedCertificateException";
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
 * The certificate signing request is invalid.
 *
 * @public
 */
export class MalformedCSRException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#MalformedCSRException";
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
 * The token specified in the `NextToken` argument is not valid. Use the token returned from your previous call to [ListCertificateAuthorities](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html).
 *
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#InvalidNextTokenException";
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
 * Your request has already been completed.
 *
 * @public
 */
export class RequestAlreadyProcessedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#RequestAlreadyProcessedException";
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
 * You can associate up to 50 tags with a private CA. Exception information is contained in the exception message field.
 *
 * @public
 */
export class TooManyTagsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.acmpca#TooManyTagsException";
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
