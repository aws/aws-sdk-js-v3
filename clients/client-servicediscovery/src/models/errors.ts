// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ServiceDiscoveryServiceException as __BaseException } from "./ServiceDiscoveryServiceException";

/**
 * <p>The operation is already in progress.</p>
 * @public
 */
export class DuplicateRequest extends __BaseException {
  readonly name = "DuplicateRequest" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The ID of the operation that's already in progress.</p>
   * @public
   */
  DuplicateOperationId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateRequest, __BaseException>) {
    super({
      name: "DuplicateRequest",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateRequest.prototype);
    this.Message = opts.Message;
    this.DuplicateOperationId = opts.DuplicateOperationId;
  }
}

/**
 * <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 * @public
 */
export class InvalidInput extends __BaseException {
  readonly name = "InvalidInput" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInput, __BaseException>) {
    super({
      name: "InvalidInput",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInput.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The namespace that you're trying to create already exists.</p>
 * @public
 */
export class NamespaceAlreadyExists extends __BaseException {
  readonly name = "NamespaceAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The <code>CreatorRequestId</code> that was used to create the namespace.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The ID of the existing namespace.</p>
   * @public
   */
  NamespaceId?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NamespaceAlreadyExists, __BaseException>) {
    super({
      name: "NamespaceAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NamespaceAlreadyExists.prototype);
    this.Message = opts.Message;
    this.CreatorRequestId = opts.CreatorRequestId;
    this.NamespaceId = opts.NamespaceId;
  }
}

/**
 * <p>The resource can't be created because you've reached the quota on the number of
 *    resources.</p>
 * @public
 */
export class ResourceLimitExceeded extends __BaseException {
  readonly name = "ResourceLimitExceeded" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceeded, __BaseException>) {
    super({
      name: "ResourceLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The list of tags on the resource is over the quota. The maximum number of tags that can be
 *    applied to a resource is 50.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The name of the resource.</p>
   * @public
   */
  ResourceName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

/**
 * <p>No namespace exists with the specified ID.</p>
 * @public
 */
export class NamespaceNotFound extends __BaseException {
  readonly name = "NamespaceNotFound" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NamespaceNotFound, __BaseException>) {
    super({
      name: "NamespaceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NamespaceNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The service can't be created because a service with the same name already exists.</p>
 * @public
 */
export class ServiceAlreadyExists extends __BaseException {
  readonly name = "ServiceAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * <p>The <code>CreatorRequestId</code> that was used to create the service.</p>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>The ID of the existing service.</p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The ARN of the existing service.</p>
   * @public
   */
  ServiceArn?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceAlreadyExists, __BaseException>) {
    super({
      name: "ServiceAlreadyExists",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceAlreadyExists.prototype);
    this.Message = opts.Message;
    this.CreatorRequestId = opts.CreatorRequestId;
    this.ServiceId = opts.ServiceId;
    this.ServiceArn = opts.ServiceArn;
  }
}

/**
 * <p>The health check for the instance that's specified by <code>ServiceId</code> and
 *     <code>InstanceId</code> isn't a custom health check. </p>
 * @public
 */
export class CustomHealthNotFound extends __BaseException {
  readonly name = "CustomHealthNotFound" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CustomHealthNotFound, __BaseException>) {
    super({
      name: "CustomHealthNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CustomHealthNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource can't be deleted because it contains other resources. For example,
 *    you can't delete a service that contains any instances.</p>
 * @public
 */
export class ResourceInUse extends __BaseException {
  readonly name = "ResourceInUse" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUse, __BaseException>) {
    super({
      name: "ResourceInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUse.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No service exists with the specified ID.</p>
 * @public
 */
export class ServiceNotFound extends __BaseException {
  readonly name = "ServiceNotFound" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceNotFound, __BaseException>) {
    super({
      name: "ServiceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No instance exists with the specified ID, or the instance was recently registered, and
 *    information about the instance hasn't propagated yet.</p>
 * @public
 */
export class InstanceNotFound extends __BaseException {
  readonly name = "InstanceNotFound" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceNotFound, __BaseException>) {
    super({
      name: "InstanceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation can't be completed because you've reached the quota for the number of
 *    requests. For more information, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/throttling.html">Cloud Map API request throttling quota</a> in the
 *     <i>Cloud Map Developer Guide</i>.</p>
 * @public
 */
export class RequestLimitExceeded extends __BaseException {
  readonly name = "RequestLimitExceeded" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestLimitExceeded, __BaseException>) {
    super({
      name: "RequestLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestLimitExceeded.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>No operation exists with the specified ID.</p>
 * @public
 */
export class OperationNotFound extends __BaseException {
  readonly name = "OperationNotFound" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotFound, __BaseException>) {
    super({
      name: "OperationNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotFound.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation can't be completed because the resource was not found.</p>
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
 * <p>The attribute can't be added to the service because you've exceeded the quota for the number
 *    of attributes you can add to a service.</p>
 * @public
 */
export class ServiceAttributesLimitExceededException extends __BaseException {
  readonly name = "ServiceAttributesLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceAttributesLimitExceededException, __BaseException>) {
    super({
      name: "ServiceAttributesLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceAttributesLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}
