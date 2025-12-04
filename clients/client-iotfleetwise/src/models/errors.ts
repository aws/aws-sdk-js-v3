// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ValidationExceptionReason } from "./enums";
import { IoTFleetWiseServiceException as __BaseException } from "./IoTFleetWiseServiceException";
import {
  InvalidNetworkInterface,
  InvalidSignal,
  InvalidSignalDecoder,
  Node,
  ValidationExceptionField,
} from "./models_0";

/**
 * <p>You don't have sufficient permission to perform this action.</p>
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
 * <p>The request couldn't be completed because the server temporarily failed.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The number of seconds to wait before retrying the command.</p>
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
 * <p>A service quota was exceeded. </p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The identifier of the resource that was exceeded.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of resource that was exceeded.</p>
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
 * <p>The resource wasn't found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The identifier of the resource that wasn't found.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of resource that wasn't found.</p>
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
 * <p>The request couldn't be completed due to throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The quota identifier of the applied throttling rules for this request.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>The code for the service that couldn't be completed due to throttling.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The number of seconds to wait before retrying the command.</p>
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
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The reason the input failed to satisfy the constraints specified by an Amazon Web Services
   *             service.</p>
   * @public
   */
  reason?: ValidationExceptionReason | undefined;

  /**
   * <p>The list of fields that fail to satisfy the constraints specified by an Amazon Web Services
   *             service.</p>
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
 * <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The resource on which there are conflicting operations.</p>
   * @public
   */
  resource: string | undefined;

  /**
   * <p>The type of resource on which there are conflicting operations..</p>
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
 * <p>The request couldn't be completed because it contains signal decoders with one or more
 *             validation errors.</p>
 * @public
 */
export class DecoderManifestValidationException extends __BaseException {
  readonly name = "DecoderManifestValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The request couldn't be completed because of invalid signals in the request.</p>
   * @public
   */
  invalidSignals?: InvalidSignalDecoder[] | undefined;

  /**
   * <p>The request couldn't be completed because of invalid network interfaces in the
   *             request.</p>
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
 * <p>The request couldn't be completed because it contains signals that aren't
 *             valid.</p>
 * @public
 */
export class InvalidSignalsException extends __BaseException {
  readonly name = "InvalidSignalsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The signals which caused the exception.</p>
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
 * <p>The specified node type doesn't match the expected node type for a node. You can
 *             specify the node type as branch, sensor, actuator, or attribute.</p>
 * @public
 */
export class InvalidNodeException extends __BaseException {
  readonly name = "InvalidNodeException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The specified node type isn't valid.</p>
   * @public
   */
  invalidNodes?: Node[] | undefined;

  /**
   * <p>The reason the node validation failed.</p>
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
