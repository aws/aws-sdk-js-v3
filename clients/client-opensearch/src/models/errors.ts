// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { OpenSearchServiceException as __BaseException } from "./OpenSearchServiceException";

/**
 * <p>An error occured because the client wanted to access an unsupported operation.</p>
 * @public
 */
export class DisabledOperationException extends __BaseException {
  readonly name = "DisabledOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DisabledOperationException, __BaseException>) {
    super({
      name: "DisabledOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DisabledOperationException.prototype);
  }
}

/**
 * <p>An exception for trying to create more than the allowed number of resources or sub-resources.</p>
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
 * <p>An exception for accessing or deleting a resource that doesn't exist.</p>
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
 * <p>An error occurred because you don't have permissions to access the resource.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
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
 * <p>An error occurred while processing the request.</p>
 * @public
 */
export class BaseException extends __BaseException {
  readonly name = "BaseException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BaseException, __BaseException>) {
    super({
      name: "BaseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BaseException.prototype);
  }
}

/**
 * <p>An exception for when a failure in one of the dependencies results in the service being unable to fetch details about the resource.</p>
 * @public
 */
export class DependencyFailureException extends __BaseException {
  readonly name = "DependencyFailureException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyFailureException, __BaseException>) {
    super({
      name: "DependencyFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyFailureException.prototype);
  }
}

/**
 * <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 * @public
 */
export class InternalException extends __BaseException {
  readonly name = "InternalException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
  }
}

/**
 * <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>An error occurred because the client attempts to remove a resource that is currently in use.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>An exception for trying to create or access a sub-resource that's either invalid or not supported.</p>
 * @public
 */
export class InvalidTypeException extends __BaseException {
  readonly name = "InvalidTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTypeException, __BaseException>) {
    super({
      name: "InvalidTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTypeException.prototype);
  }
}

/**
 * <p>An exception for creating a resource that already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
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
 * <p>The request was denied due to request throttling. Reduce the frequency of your requests and try again.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>Request processing failed because you provided an invalid pagination token.</p>
 * @public
 */
export class InvalidPaginationTokenException extends __BaseException {
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
 * <p>An exception for attempting to schedule a domain action during an unavailable time slot.</p>
 * @public
 */
export class SlotNotAvailableException extends __BaseException {
  readonly name = "SlotNotAvailableException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>Alternate time slots during which OpenSearch Service has available capacity to schedule a domain action.</p>
   * @public
   */
  SlotSuggestions?: number[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SlotNotAvailableException, __BaseException>) {
    super({
      name: "SlotNotAvailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SlotNotAvailableException.prototype);
    this.SlotSuggestions = opts.SlotSuggestions;
  }
}
