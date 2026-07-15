// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { HealthLakeServiceException as __BaseException } from "./HealthLakeServiceException";

/**
 * <p>Access is denied. Your account is not authorized to perform this operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * A general-purpose string value.
   * @public
   */
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
 * <p>An unknown internal error occurred in the service.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * A general-purpose string value.
   * @public
   */
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
 * <p>The requested data store was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * A general-purpose string value.
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
 * <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * A general-purpose string value.
   * @public
   */
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
 * <p>The user input parameter was invalid.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * A general-purpose string value.
   * @public
   */
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
 * <p>The data store is in a transition state and the user requested action cannot be performed.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * A general-purpose string value.
   * @public
   */
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
 * The request exceeds the service quota.
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the error.
   * @public
   */
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
 * <p>The agent message does not fit within the current conversation context. Start a new conversation or provide a message that relates to the current profile customization session.</p>
 * @public
 */
export class AgentMessageOutOfContextException extends __BaseException {
  readonly name = "AgentMessageOutOfContextException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AgentMessageOutOfContextException, __BaseException>) {
    super({
      name: "AgentMessageOutOfContextException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AgentMessageOutOfContextException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified conversation identifier does not exist. Verify the conversation ID or omit it to start a new conversation.</p>
 * @public
 */
export class ConversationNotFoundException extends __BaseException {
  readonly name = "ConversationNotFoundException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConversationNotFoundException, __BaseException>) {
    super({
      name: "ConversationNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConversationNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested operation is not yet available. Check the service documentation for a list of supported operations.</p>
 * @public
 */
export class NotImplementedOperationException extends __BaseException {
  readonly name = "NotImplementedOperationException" as const;
  readonly $fault = "server" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotImplementedOperationException, __BaseException>) {
    super({
      name: "NotImplementedOperationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, NotImplementedOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You are not authorized to make this request. Verify that your AWS credentials are valid and that you have the required permissions.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name = "UnauthorizedException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
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
 * <p>The content type in your request is not supported. Use a supported content type for this operation.</p>
 * @public
 */
export class UnsupportedMIMETypeException extends __BaseException {
  readonly name = "UnsupportedMIMETypeException" as const;
  readonly $fault = "client" as const;
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedMIMETypeException, __BaseException>) {
    super({
      name: "UnsupportedMIMETypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedMIMETypeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * A dependent service failed to fulfill the request.
 * @public
 */
export class FailedDependencyException extends __BaseException {
  readonly name = "FailedDependencyException" as const;
  readonly $fault = "client" as const;
  /**
   * A message describing the error.
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FailedDependencyException, __BaseException>) {
    super({
      name: "FailedDependencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FailedDependencyException.prototype);
    this.Message = opts.Message;
  }
}
