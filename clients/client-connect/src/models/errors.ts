// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";
import { ResourceType } from "./enums";
import {
  InvalidRequestExceptionReason,
  ProblemDetail,
  PropertyValidationExceptionProperty,
  ServiceQuotaExceededExceptionReason,
} from "./models_0";

/**
 * <p>You do not have sufficient permissions to perform this action.</p>
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
 * <p>Request processing failed because of an error or failure with the service.</p>
 * @public
 */
export class InternalServiceException extends __BaseException {
  readonly name = "InternalServiceException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of the specified parameters are not valid.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message about the parameters.</p>
   * @public
   */
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
 * <p>A resource already has that name.</p>
 * @public
 */
export class ResourceConflictException extends __BaseException {
  readonly name = "ResourceConflictException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message about the resource.</p>
   * @public
   */
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
 * <p>The throttling limit has been exceeded.</p>
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
 * <p>The request is not valid.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message about the request.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Reason why the request was invalid.</p>
   * @public
   */
  Reason?: InvalidRequestExceptionReason | undefined;
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
    this.Reason = opts.Reason;
  }
}

/**
 * <p>The service quota has been exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The reason for the exception.</p>
   * @public
   */
  Reason?: ServiceQuotaExceededExceptionReason | undefined;
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
    this.Reason = opts.Reason;
  }
}

/**
 * <p>The allowed limit for the resource has been exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message about the limit.</p>
   * @public
   */
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
 * <p>An entity with the same name already exists.</p>
 * @public
 */
export class IdempotencyException extends __BaseException {
  readonly name = "IdempotencyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotencyException, __BaseException>) {
    super({
      name: "IdempotencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotencyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Request processing failed because dependent condition failed.</p>
 * @public
 */
export class ConditionalOperationFailedException extends __BaseException {
  readonly name = "ConditionalOperationFailedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConditionalOperationFailedException, __BaseException>) {
    super({
      name: "ConditionalOperationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConditionalOperationFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource with the specified name already exists.</p>
 * @public
 */
export class DuplicateResourceException extends __BaseException {
  readonly name = "DuplicateResourceException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateResourceException, __BaseException>) {
    super({
      name: "DuplicateResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateResourceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Operation cannot be performed at this time as there is a conflict with another operation or contact
 *    state.</p>
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
 * <p>The flow is not valid.</p>
 * @public
 */
export class InvalidContactFlowException extends __BaseException {
  readonly name = "InvalidContactFlowException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The problems with the flow. Please fix before trying again.</p>
   * @public
   */
  problems?: ProblemDetail[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidContactFlowException, __BaseException>) {
    super({
      name: "InvalidContactFlowException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidContactFlowException.prototype);
    this.problems = opts.problems;
  }
}

/**
 * <p>The problems with the module. Please fix before trying again.</p>
 * @public
 */
export class InvalidContactFlowModuleException extends __BaseException {
  readonly name = "InvalidContactFlowModuleException" as const;
  readonly $fault = "client" as const;
  Problems?: ProblemDetail[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidContactFlowModuleException, __BaseException>) {
    super({
      name: "InvalidContactFlowModuleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidContactFlowModuleException.prototype);
    this.Problems = opts.Problems;
  }
}

/**
 * <p>The property is not valid.</p>
 * @public
 */
export class PropertyValidationException extends __BaseException {
  readonly name = "PropertyValidationException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  PropertyList?: PropertyValidationExceptionProperty[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PropertyValidationException, __BaseException>) {
    super({
      name: "PropertyValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PropertyValidationException.prototype);
    this.Message = opts.Message;
    this.PropertyList = opts.PropertyList;
  }
}

/**
 * <p>The resource is not ready.</p>
 * @public
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name = "ResourceNotReadyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * <p>That resource is already in use (for example, you're trying to add a record with the same name as an existing
 *    record). If you are trying to delete a resource (for example, DeleteHoursOfOperation or DeletePredefinedAttribute),
 *    remove its reference from related resources and then try again.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The type of resource.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The identifier for the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;
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
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * <p>Displayed when rate-related API limits are exceeded.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The flow has not been published.</p>
 * @public
 */
export class ContactFlowNotPublishedException extends __BaseException {
  readonly name = "ContactFlowNotPublishedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContactFlowNotPublishedException, __BaseException>) {
    super({
      name: "ContactFlowNotPublishedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContactFlowNotPublishedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No user with the specified credentials was found in the Amazon Connect instance.</p>
 * @public
 */
export class UserNotFoundException extends __BaseException {
  readonly name = "UserNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserNotFoundException, __BaseException>) {
    super({
      name: "UserNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Thrown for analyzed content when requested OutputType was not enabled for a given contact. For example, if an
 *    OutputType.Raw was requested for a contact that had `RedactedOnly` Redaction policy set in the flow.</p>
 * @public
 */
export class OutputTypeNotFoundException extends __BaseException {
  readonly name = "OutputTypeNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OutputTypeNotFoundException, __BaseException>) {
    super({
      name: "OutputTypeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OutputTypeNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Maximum number (1000) of tags have been returned with current request. Consider changing request parameters to
 *    get more tags.</p>
 * @public
 */
export class MaximumResultReturnedException extends __BaseException {
  readonly name = "MaximumResultReturnedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumResultReturnedException, __BaseException>) {
    super({
      name: "MaximumResultReturnedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumResultReturnedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Outbound calls to the destination number are not allowed.</p>
 * @public
 */
export class DestinationNotAllowedException extends __BaseException {
  readonly name = "DestinationNotAllowedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message about the outbound calls.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DestinationNotAllowedException, __BaseException>) {
    super({
      name: "DestinationNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DestinationNotAllowedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The contact is not permitted.</p>
 * @public
 */
export class OutboundContactNotPermittedException extends __BaseException {
  readonly name = "OutboundContactNotPermittedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message about the contact.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OutboundContactNotPermittedException, __BaseException>) {
    super({
      name: "OutboundContactNotPermittedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OutboundContactNotPermittedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The contact with the specified ID does not exist.</p>
 * @public
 */
export class ContactNotFoundException extends __BaseException {
  readonly name = "ContactNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContactNotFoundException, __BaseException>) {
    super({
      name: "ContactNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContactNotFoundException.prototype);
    this.Message = opts.Message;
  }
}
