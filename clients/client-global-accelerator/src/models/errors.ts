// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { GlobalAcceleratorServiceException as __BaseException } from "./GlobalAcceleratorServiceException";

/**
 * <p>The accelerator that you specified could not be disabled.</p>
 * @public
 */
export class AcceleratorNotDisabledException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#AcceleratorNotDisabledException";
  readonly name = "AcceleratorNotDisabledException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AcceleratorNotDisabledException, __BaseException>) {
    super({
      name: "AcceleratorNotDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AcceleratorNotDisabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The accelerator that you specified doesn't exist.</p>
 * @public
 */
export class AcceleratorNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#AcceleratorNotFoundException";
  readonly name = "AcceleratorNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AcceleratorNotFoundException, __BaseException>) {
    super({
      name: "AcceleratorNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AcceleratorNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You don't have access permission.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#AccessDeniedException";
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
 * <p>You can't use both of those options.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#ConflictException";
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
 * <p>The endpoint that you specified doesn't exist.</p>
 * @public
 */
export class EndpointAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#EndpointAlreadyExistsException";
  readonly name = "EndpointAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointAlreadyExistsException, __BaseException>) {
    super({
      name: "EndpointAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The endpoint group that you specified doesn't exist.</p>
 * @public
 */
export class EndpointGroupNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#EndpointGroupNotFoundException";
  readonly name = "EndpointGroupNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointGroupNotFoundException, __BaseException>) {
    super({
      name: "EndpointGroupNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointGroupNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There was an internal error for Global Accelerator.</p>
 * @public
 */
export class InternalServiceErrorException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#InternalServiceErrorException";
  readonly name = "InternalServiceErrorException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An argument that you specified is invalid.</p>
 * @public
 */
export class InvalidArgumentException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#InvalidArgumentException";
  readonly name = "InvalidArgumentException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Processing your request would cause you to exceed an Global Accelerator limit.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#LimitExceededException";
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
 * <p>There's already a transaction in progress. Another transaction can't be processed.</p>
 * @public
 */
export class TransactionInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#TransactionInProgressException";
  readonly name = "TransactionInProgressException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TransactionInProgressException, __BaseException>) {
    super({
      name: "TransactionInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TransactionInProgressException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The CIDR that you specified was not found or is incorrect.</p>
 * @public
 */
export class ByoipCidrNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#ByoipCidrNotFoundException";
  readonly name = "ByoipCidrNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ByoipCidrNotFoundException, __BaseException>) {
    super({
      name: "ByoipCidrNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ByoipCidrNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The CIDR that you specified is not valid for this action. For example, the state of the CIDR might be
 * 		incorrect for this action.</p>
 * @public
 */
export class IncorrectCidrStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#IncorrectCidrStateException";
  readonly name = "IncorrectCidrStateException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncorrectCidrStateException, __BaseException>) {
    super({
      name: "IncorrectCidrStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncorrectCidrStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The listener that you specified has an endpoint group associated with it. You must remove all dependent resources
 * 			from a listener before you can delete it.</p>
 * @public
 */
export class AssociatedEndpointGroupFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#AssociatedEndpointGroupFoundException";
  readonly name = "AssociatedEndpointGroupFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociatedEndpointGroupFoundException, __BaseException>) {
    super({
      name: "AssociatedEndpointGroupFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociatedEndpointGroupFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The accelerator that you specified has a listener associated with it. You must remove all dependent resources from an
 * 			accelerator before you can delete it.</p>
 * @public
 */
export class AssociatedListenerFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#AssociatedListenerFoundException";
  readonly name = "AssociatedListenerFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AssociatedListenerFoundException, __BaseException>) {
    super({
      name: "AssociatedListenerFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AssociatedListenerFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No cross-account attachment was found.</p>
 * @public
 */
export class AttachmentNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#AttachmentNotFoundException";
  readonly name = "AttachmentNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AttachmentNotFoundException, __BaseException>) {
    super({
      name: "AttachmentNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AttachmentNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The endpoint group that you specified already exists.</p>
 * @public
 */
export class EndpointGroupAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#EndpointGroupAlreadyExistsException";
  readonly name = "EndpointGroupAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointGroupAlreadyExistsException, __BaseException>) {
    super({
      name: "EndpointGroupAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointGroupAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The port numbers that you specified are not valid numbers or are not unique for this accelerator.</p>
 * @public
 */
export class InvalidPortRangeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#InvalidPortRangeException";
  readonly name = "InvalidPortRangeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPortRangeException, __BaseException>) {
    super({
      name: "InvalidPortRangeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPortRangeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The listener that you specified doesn't exist.</p>
 * @public
 */
export class ListenerNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#ListenerNotFoundException";
  readonly name = "ListenerNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ListenerNotFoundException, __BaseException>) {
    super({
      name: "ListenerNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ListenerNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The endpoint that you specified doesn't exist.</p>
 * @public
 */
export class EndpointNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#EndpointNotFoundException";
  readonly name = "EndpointNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EndpointNotFoundException, __BaseException>) {
    super({
      name: "EndpointNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EndpointNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There isn't another item to return.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.globalaccelerator#InvalidNextTokenException";
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
