// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import type { ValidationExceptionReason } from "./enums";
import { IoTFleetWiseServiceException as __BaseException } from "./IoTFleetWiseServiceException";
import type {
  InvalidNetworkInterface,
  InvalidSignal,
  InvalidSignalDecoder,
  Node,
  ValidationExceptionField,
} from "./models_0";

/**
 * You don't have sufficient permission to perform this action.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotfleetwise#AccessDeniedException";
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
 * The request couldn't be completed because the server temporarily failed.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotfleetwise#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * The number of seconds to wait before retrying the command.
   *
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * A service quota was exceeded.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotfleetwise#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * The identifier of the resource that was exceeded.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The type of resource that was exceeded.
   *
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * The resource wasn't found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotfleetwise#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * The identifier of the resource that wasn't found.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The type of resource that wasn't found.
   *
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * The request couldn't be completed due to throttling.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotfleetwise#ThrottlingException";
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * The quota identifier of the applied throttling rules for this request.
   *
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * The code for the service that couldn't be completed due to throttling.
   *
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * The number of seconds to wait before retrying the command.
   *
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.quotaCode = opts.quotaCode;
    this.serviceCode = opts.serviceCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotfleetwise#ValidationException";
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * The reason the input failed to satisfy the constraints specified by an Amazon Web Services service.
   *
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * The list of fields that fail to satisfy the constraints specified by an Amazon Web Services service.
   *
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * The request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotfleetwise#ConflictException";
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * The resource on which there are conflicting operations.
   *
   * @public
   */
  resource: string | undefined;

  /**
   * The type of resource on which there are conflicting operations..
   *
   * @public
   */
  resourceType: string | undefined;

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
    this.resource = opts.resource;
    this.resourceType = opts.resourceType;
  }
}

/**
 * The request couldn't be completed because it contains signal decoders with one or more validation errors.
 *
 * @public
 */
export class DecoderManifestValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotfleetwise#DecoderManifestValidationException";
  readonly name = "DecoderManifestValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * The request couldn't be completed because of invalid signals in the request.
   *
   * @public
   */
  invalidSignals?: InvalidSignalDecoder[] | undefined;

  /**
   * The request couldn't be completed because of invalid network interfaces in the request.
   *
   * @public
   */
  invalidNetworkInterfaces?: InvalidNetworkInterface[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DecoderManifestValidationException, __BaseException>) {
    super({
      name: "DecoderManifestValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DecoderManifestValidationException.prototype);
    this.invalidSignals = opts.invalidSignals;
    this.invalidNetworkInterfaces = opts.invalidNetworkInterfaces;
  }
}

/**
 * The request couldn't be completed because it contains signals that aren't valid.
 *
 * @public
 */
export class InvalidSignalsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotfleetwise#InvalidSignalsException";
  readonly name = "InvalidSignalsException" as const;
  readonly $fault = "client" as const;
  /**
   * The signals which caused the exception.
   *
   * @public
   */
  invalidSignals?: InvalidSignal[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSignalsException, __BaseException>) {
    super({
      name: "InvalidSignalsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSignalsException.prototype);
    this.invalidSignals = opts.invalidSignals;
  }
}

/**
 * The specified node type doesn't match the expected node type for a node. You can specify the node type as branch, sensor, actuator, or attribute.
 *
 * @public
 */
export class InvalidNodeException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.iotfleetwise#InvalidNodeException";
  readonly name = "InvalidNodeException" as const;
  readonly $fault = "client" as const;
  /**
   * The specified node type isn't valid.
   *
   * @public
   */
  invalidNodes?: Node[] | undefined;

  /**
   * The reason the node validation failed.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNodeException, __BaseException>) {
    super({
      name: "InvalidNodeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNodeException.prototype);
    this.invalidNodes = opts.invalidNodes;
    this.reason = opts.reason;
  }
}
