// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { DirectoryServiceServiceException as __BaseException } from "./DirectoryServiceServiceException";

/**
 * A client exception has occurred.
 *
 * @public
 */
export class ClientException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#ClientException";
  readonly name = "ClientException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClientException, __BaseException>) {
    super({
      name: "ClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClientException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The specified directory has already been shared with this Amazon Web Services account.
 *
 * @public
 */
export class DirectoryAlreadySharedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#DirectoryAlreadySharedException";
  readonly name = "DirectoryAlreadySharedException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryAlreadySharedException, __BaseException>) {
    super({
      name: "DirectoryAlreadySharedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryAlreadySharedException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The specified entity could not be found.
 *
 * @public
 */
export class EntityDoesNotExistException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#EntityDoesNotExistException";
  readonly name = "EntityDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityDoesNotExistException, __BaseException>) {
    super({
      name: "EntityDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityDoesNotExistException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * One or more parameters are not valid.
 *
 * @public
 */
export class InvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#InvalidParameterException";
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.RequestId = opts.RequestId;
  }
}

/**
 * An exception has occurred in Directory Service.
 *
 * @public
 */
export class ServiceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#ServiceException";
  readonly name = "ServiceException" as const;
  readonly $fault = "server" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceException, __BaseException>) {
    super({
      name: "ServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * You do not have sufficient access to perform this action.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#AccessDeniedException";
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.RequestId = opts.RequestId;
  }
}

/**
 * A directory assessment is automatically created when you create a hybrid directory. There are two types of assessments: `CUSTOMER` and `SYSTEM`. Your Amazon Web Services account has a limit of 100 `CUSTOMER` directory assessments.
 *
 * If you attempt to create a hybrid directory; and you already have 100 `CUSTOMER` directory assessments;, you will encounter an error. Delete assessments to free up capacity before trying again.
 *
 * You can request an increase to your `CUSTOMER` directory assessment quota by contacting customer support or delete existing CUSTOMER directory assessments; to free up capacity.
 *
 * @public
 */
export class ADAssessmentLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#ADAssessmentLimitExceededException";
  readonly name = "ADAssessmentLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ADAssessmentLimitExceededException, __BaseException>) {
    super({
      name: "ADAssessmentLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ADAssessmentLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The specified directory is unavailable.
 *
 * @public
 */
export class DirectoryUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#DirectoryUnavailableException";
  readonly name = "DirectoryUnavailableException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryUnavailableException, __BaseException>) {
    super({
      name: "DirectoryUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryUnavailableException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The specified entity already exists.
 *
 * @public
 */
export class EntityAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#EntityAlreadyExistsException";
  readonly name = "EntityAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityAlreadyExistsException, __BaseException>) {
    super({
      name: "EntityAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The maximum allowed number of IP addresses was exceeded. The default limit is 100 IP address blocks.
 *
 * @public
 */
export class IpRouteLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#IpRouteLimitExceededException";
  readonly name = "IpRouteLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IpRouteLimitExceededException, __BaseException>) {
    super({
      name: "IpRouteLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IpRouteLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The Region you specified is the same Region where the Managed Microsoft AD directory was created. Specify a different Region and try again.
 *
 * @public
 */
export class DirectoryAlreadyInRegionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#DirectoryAlreadyInRegionException";
  readonly name = "DirectoryAlreadyInRegionException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryAlreadyInRegionException, __BaseException>) {
    super({
      name: "DirectoryAlreadyInRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryAlreadyInRegionException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The specified directory does not exist in the system.
 *
 * @public
 */
export class DirectoryDoesNotExistException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#DirectoryDoesNotExistException";
  readonly name = "DirectoryDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryDoesNotExistException, __BaseException>) {
    super({
      name: "DirectoryDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryDoesNotExistException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * You have reached the limit for maximum number of simultaneous Region replications per directory.
 *
 * @public
 */
export class RegionLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#RegionLimitExceededException";
  readonly name = "RegionLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RegionLimitExceededException, __BaseException>) {
    super({
      name: "RegionLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RegionLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The operation is not supported.
 *
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#UnsupportedOperationException";
  readonly name = "UnsupportedOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The maximum allowed number of tags was exceeded.
 *
 * @public
 */
export class TagLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#TagLimitExceededException";
  readonly name = "TagLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * An authentication error occurred.
 *
 * @public
 */
export class AuthenticationFailedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#AuthenticationFailedException";
  readonly name = "AuthenticationFailedException" as const;
  readonly $fault = "client" as const;
  /**
   * The textual message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The identifier of the request that caused the exception.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AuthenticationFailedException, __BaseException>) {
    super({
      name: "AuthenticationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AuthenticationFailedException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The certificate has already been registered into the system.
 *
 * @public
 */
export class CertificateAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#CertificateAlreadyExistsException";
  readonly name = "CertificateAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateAlreadyExistsException, __BaseException>) {
    super({
      name: "CertificateAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateAlreadyExistsException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The certificate is not present in the system for describe or deregister activities.
 *
 * @public
 */
export class CertificateDoesNotExistException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#CertificateDoesNotExistException";
  readonly name = "CertificateDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateDoesNotExistException, __BaseException>) {
    super({
      name: "CertificateDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateDoesNotExistException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The certificate is being used for the LDAP security connection and cannot be removed without disabling LDAP security.
 *
 * @public
 */
export class CertificateInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#CertificateInUseException";
  readonly name = "CertificateInUseException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateInUseException, __BaseException>) {
    super({
      name: "CertificateInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateInUseException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The certificate could not be added because the certificate limit has been reached.
 *
 * @public
 */
export class CertificateLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#CertificateLimitExceededException";
  readonly name = "CertificateLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateLimitExceededException, __BaseException>) {
    super({
      name: "CertificateLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The maximum number of directories in the region has been reached. You can use the GetDirectoryLimits operation to determine your directory limits in the region.
 *
 * @public
 */
export class DirectoryLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#DirectoryLimitExceededException";
  readonly name = "DirectoryLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryLimitExceededException, __BaseException>) {
    super({
      name: "DirectoryLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The account does not have sufficient permission to perform the operation.
 *
 * @public
 */
export class InsufficientPermissionsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#InsufficientPermissionsException";
  readonly name = "InsufficientPermissionsException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientPermissionsException, __BaseException>) {
    super({
      name: "InsufficientPermissionsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientPermissionsException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The maximum number of manual snapshots for the directory has been reached. You can use the GetSnapshotLimits operation to determine the snapshot limits for a directory.
 *
 * @public
 */
export class SnapshotLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#SnapshotLimitExceededException";
  readonly name = "SnapshotLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapshotLimitExceededException, __BaseException>) {
    super({
      name: "SnapshotLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapshotLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The `NextToken` value is not valid.
 *
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#InvalidNextTokenException";
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
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
    this.RequestId = opts.RequestId;
  }
}

/**
 * The directory is already updated to desired update type settings.
 *
 * @public
 */
export class DirectoryInDesiredStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#DirectoryInDesiredStateException";
  readonly name = "DirectoryInDesiredStateException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryInDesiredStateException, __BaseException>) {
    super({
      name: "DirectoryInDesiredStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryInDesiredStateException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The specified directory has not been shared with this Amazon Web Services account.
 *
 * @public
 */
export class DirectoryNotSharedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#DirectoryNotSharedException";
  readonly name = "DirectoryNotSharedException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryNotSharedException, __BaseException>) {
    super({
      name: "DirectoryNotSharedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryNotSharedException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * A disable operation for CA enrollment policy is already in progress for this directory.
 *
 * @public
 */
export class DisableAlreadyInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#DisableAlreadyInProgressException";
  readonly name = "DisableAlreadyInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DisableAlreadyInProgressException, __BaseException>) {
    super({
      name: "DisableAlreadyInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DisableAlreadyInProgressException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * Client authentication is already enabled.
 *
 * @public
 */
export class InvalidClientAuthStatusException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#InvalidClientAuthStatusException";
  readonly name = "InvalidClientAuthStatusException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClientAuthStatusException, __BaseException>) {
    super({
      name: "InvalidClientAuthStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClientAuthStatusException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The LDAP activities could not be performed because they are limited by the LDAPS status.
 *
 * @public
 */
export class InvalidLDAPSStatusException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#InvalidLDAPSStatusException";
  readonly name = "InvalidLDAPSStatusException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLDAPSStatusException, __BaseException>) {
    super({
      name: "InvalidLDAPSStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLDAPSStatusException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * An enable operation for CA enrollment policy is already in progress for this directory.
 *
 * @public
 */
export class EnableAlreadyInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#EnableAlreadyInProgressException";
  readonly name = "EnableAlreadyInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EnableAlreadyInProgressException, __BaseException>) {
    super({
      name: "EnableAlreadyInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EnableAlreadyInProgressException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * Client authentication setup could not be completed because at least one valid certificate must be registered in the system.
 *
 * @public
 */
export class NoAvailableCertificateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#NoAvailableCertificateException";
  readonly name = "NoAvailableCertificateException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoAvailableCertificateException, __BaseException>) {
    super({
      name: "NoAvailableCertificateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoAvailableCertificateException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The certificate PEM that was provided has incorrect encoding.
 *
 * @public
 */
export class InvalidCertificateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#InvalidCertificateException";
  readonly name = "InvalidCertificateException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCertificateException, __BaseException>) {
    super({
      name: "InvalidCertificateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCertificateException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The new password provided by the user does not meet the password complexity requirements defined in your directory.
 *
 * @public
 */
export class InvalidPasswordException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#InvalidPasswordException";
  readonly name = "InvalidPasswordException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPasswordException, __BaseException>) {
    super({
      name: "InvalidPasswordException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPasswordException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The user provided a username that does not exist in your directory.
 *
 * @public
 */
export class UserDoesNotExistException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#UserDoesNotExistException";
  readonly name = "UserDoesNotExistException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserDoesNotExistException, __BaseException>) {
    super({
      name: "UserDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserDoesNotExistException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The specified shared target is not valid.
 *
 * @public
 */
export class InvalidTargetException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#InvalidTargetException";
  readonly name = "InvalidTargetException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetException, __BaseException>) {
    super({
      name: "InvalidTargetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * Exception encountered while trying to access your Amazon Web Services organization.
 *
 * @public
 */
export class OrganizationsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#OrganizationsException";
  readonly name = "OrganizationsException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationsException, __BaseException>) {
    super({
      name: "OrganizationsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationsException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The maximum number of Amazon Web Services accounts that you can share with this directory has been reached.
 *
 * @public
 */
export class ShareLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#ShareLimitExceededException";
  readonly name = "ShareLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ShareLimitExceededException, __BaseException>) {
    super({
      name: "ShareLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ShareLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The maximum allowed number of domain controllers per directory was exceeded. The default limit per directory is 20 domain controllers.
 *
 * @public
 */
export class DomainControllerLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#DomainControllerLimitExceededException";
  readonly name = "DomainControllerLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DomainControllerLimitExceededException, __BaseException>) {
    super({
      name: "DomainControllerLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DomainControllerLimitExceededException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The specified directory setting is not compatible with other settings.
 *
 * @public
 */
export class IncompatibleSettingsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#IncompatibleSettingsException";
  readonly name = "IncompatibleSettingsException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleSettingsException, __BaseException>) {
    super({
      name: "IncompatibleSettingsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleSettingsException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}

/**
 * The specified directory setting is not supported.
 *
 * @public
 */
export class UnsupportedSettingsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.directoryservice#UnsupportedSettingsException";
  readonly name = "UnsupportedSettingsException" as const;
  readonly $fault = "client" as const;
  /**
   * The descriptive message for the exception.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services request identifier.
   *
   * @public
   */
  RequestId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedSettingsException, __BaseException>) {
    super({
      name: "UnsupportedSettingsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedSettingsException.prototype);
    this.Message = opts.Message;
    this.RequestId = opts.RequestId;
  }
}
