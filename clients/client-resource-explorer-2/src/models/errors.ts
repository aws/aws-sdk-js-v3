// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ValidationExceptionField } from "./models_0";
import { ResourceExplorer2ServiceException as __BaseException } from "./ResourceExplorer2ServiceException";

/**
 * <p>The credentials that you used to call this operation don't have the minimum required permissions.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * <p>The request failed because of internal service error. Try your request again later.</p>
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
 * <p>You specified a resource that doesn't exist. Check the ID or ARN that you used to identity the resource, and try again.</p>
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
 * <p>The request failed because you exceeded a rate limit for this operation. For more information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html">Quotas for Resource Explorer</a>.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You provided an invalid value for one of the operation's parameters. Check the syntax for the operation, and try again.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>An array of the request fields that had validation errors.</p>
   * @public
   */
  FieldList?: ValidationExceptionField[] | undefined;
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
    this.Message = opts.Message;
    this.FieldList = opts.FieldList;
  }
}

/**
 * <p>The principal making the request isn't permitted to perform the operation.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name = "UnauthorizedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>If you attempted to create a view, then the request failed because either you specified parameters that didn’t match the original request, or you attempted to create a view with a name that already exists in this Amazon Web Services Region.</p> <p>If you attempted to create an index, then the request failed because either you specified parameters that didn't match the original request, or an index already exists in the current Amazon Web Services Region.</p> <p>If you attempted to update an index type to <code>AGGREGATOR</code>, then the request failed because you already have an <code>AGGREGATOR</code> index in a different Amazon Web Services Region.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
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
 * <p>The request failed because it exceeds a service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>The name of the service quota that was exceeded by the request.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The current value for the quota that the request tried to exceed.</p>
   * @public
   */
  Value: string | undefined;
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
    this.Name = opts.Name;
    this.Value = opts.Value;
  }
}
