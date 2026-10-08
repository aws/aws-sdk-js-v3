// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { ImagebuilderServiceException as __BaseException } from "./ImagebuilderServiceException";

/**
 * <p>You do not have permissions to perform the requested operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#AccessDeniedException";
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
 * <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 * @public
 */
export class CallRateLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#CallRateLimitExceededException";
  readonly name = "CallRateLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CallRateLimitExceededException, __BaseException>) {
    super({
      name: "CallRateLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CallRateLimitExceededException.prototype);
  }
}

/**
 * <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 * @public
 */
export class ClientException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#ClientException";
  readonly name = "ClientException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>You are not authorized to perform the requested operation.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#ForbiddenException";
  readonly name = "ForbiddenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
  }
}

/**
 * <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#IdempotentParameterMismatchException";
  readonly name = "IdempotentParameterMismatchException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#InvalidRequestException";
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
 * <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#ResourceInUseException";
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
 * <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 * @public
 */
export class ServiceException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#ServiceException";
  readonly name = "ServiceException" as const;
  readonly $fault = "server" as const;
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
  }
}

/**
 * <p>The service is unable to process your request at this time.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#ServiceUnavailableException";
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
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
 * <p>The dry run operation of the resource was successful, and no resources or mutations were actually performed due to the dry run flag in the request.</p>
 * @public
 */
export class DryRunOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#DryRunOperationException";
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
 * <p>You have specified a combination of parameters that isn't valid. For
 * 			example, two mutually exclusive parameters, or a parameter without its
 * 			required companion parameter. Review the error message for details.</p>
 * @public
 */
export class InvalidParameterCombinationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#InvalidParameterCombinationException";
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
 * <p>Your version number is out of bounds or does not follow the required syntax.</p>
 * @public
 */
export class InvalidVersionNumberException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#InvalidVersionNumberException";
  readonly name = "InvalidVersionNumberException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidVersionNumberException, __BaseException>) {
    super({
      name: "InvalidVersionNumberException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidVersionNumberException.prototype);
  }
}

/**
 * <p>You have exceeded the number of permitted resources or operations for this service.
 * 			For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and
 * 				quotas</a>.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#ServiceQuotaExceededException";
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
 * <p>The resource that you are trying to create already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#ResourceAlreadyExistsException";
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>You have attempted to mutate or delete a resource with a dependency that prohibits
 * 			this action. See the error message for more details.</p>
 * @public
 */
export class ResourceDependencyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#ResourceDependencyException";
  readonly name = "ResourceDependencyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceDependencyException, __BaseException>) {
    super({
      name: "ResourceDependencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceDependencyException.prototype);
  }
}

/**
 * <p>At least one of the resources referenced by your request does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#ResourceNotFoundException";
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
 * <p>You have attempted too many requests for the specific operation.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#TooManyRequestsException";
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
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
 * <p>You have provided an invalid pagination token in your request.</p>
 * @public
 */
export class InvalidPaginationTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#InvalidPaginationTokenException";
  readonly name = "InvalidPaginationTokenException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API
 * 			request.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#InvalidParameterException";
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The value that you provided for the specified parameter is invalid.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.imagebuilder#InvalidParameterValueException";
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
