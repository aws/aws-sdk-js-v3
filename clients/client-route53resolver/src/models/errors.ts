// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { Route53ResolverServiceException as __BaseException } from "./Route53ResolverServiceException";

/**
 * <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *          <p>This error can also be thrown when a customer has reached the 5120 character limit for a
 * 			resource policy for CloudWatch Logs.</p>
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
 * <p>The requested state transition isn't valid. For example, you can't delete a firewall
 * 			domain list if it is in the process of being deleted, or you can't import domains into a
 * 			domain list that is in the process of being deleted.</p>
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
 * <p>We encountered an unknown error. Try again in a few minutes.</p>
 * @public
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name = "InternalServiceErrorException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request caused one or more limits to be exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>For a <code>LimitExceededException</code> error, the type of resource that exceeded the current limit.</p>
   * @public
   */
  ResourceType?: string | undefined;
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
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The specified resource doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>For a <code>ResourceNotFoundException</code> error, the type of resource that doesn't exist.</p>
   * @public
   */
  ResourceType?: string | undefined;
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
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The request was throttled. Try again in a few minutes.</p>
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
 * <p>You have provided an invalid command. If you ran the <code>UpdateFirewallDomains</code> request. supported values are <code>ADD</code>,
 * 			<code>REMOVE</code>, or <code>REPLACE</code> a domain.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * <p>One or more parameters in this request are not valid.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * <p>For an <code>InvalidParameterException</code> error, the name of the parameter that's invalid.</p>
   * @public
   */
  FieldName?: string | undefined;
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
    this.FieldName = opts.FieldName;
  }
}

/**
 * <p>The request is invalid.</p>
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
 * <p>The resource that you tried to create already exists.</p>
 * @public
 */
export class ResourceExistsException extends __BaseException {
  readonly name = "ResourceExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>For a <code>ResourceExistsException</code> error, the type of resource that the error applies to.</p>
   * @public
   */
  ResourceType?: string | undefined;
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
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The specified resource isn't available.</p>
 * @public
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name = "ResourceUnavailableException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>For a <code>ResourceUnavailableException</code> error, the type of resource that isn't available.</p>
   * @public
   */
  ResourceType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>Fulfilling the request would cause one or more quotas to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * <p>The resource that you tried to update or delete is currently in use.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>For a <code>ResourceInUseException</code> error, the type of resource that is currently in use.</p>
   * @public
   */
  ResourceType?: string | undefined;
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
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The specified resource doesn't exist.</p>
 * @public
 */
export class UnknownResourceException extends __BaseException {
  readonly name = "UnknownResourceException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnknownResourceException, __BaseException>) {
    super({
      name: "UnknownResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnknownResourceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The value that you specified for <code>NextToken</code> in a <code>List</code> request isn't valid.</p>
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
 * <p>The specified Resolver rule policy is invalid.</p>
 * @public
 */
export class InvalidPolicyDocument extends __BaseException {
  readonly name = "InvalidPolicyDocument" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyDocument, __BaseException>) {
    super({
      name: "InvalidPolicyDocument",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyDocument.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified tag is invalid.</p>
 * @public
 */
export class InvalidTagException extends __BaseException {
  readonly name = "InvalidTagException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}
