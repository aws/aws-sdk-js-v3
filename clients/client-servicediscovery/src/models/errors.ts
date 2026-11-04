// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { ServiceDiscoveryServiceException as __BaseException } from "./ServiceDiscoveryServiceException";

/**
 * The operation is already in progress.
 *
 * @public
 */
export class DuplicateRequest extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#DuplicateRequest";
  readonly name = "DuplicateRequest" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The ID of the operation that's already in progress.
   *
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
 * One or more specified values aren't valid. For example, a required value might be missing, a numeric value might be outside the allowed range, or a string value might exceed length constraints.
 *
 * @public
 */
export class InvalidInput extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#InvalidInput";
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
 * The namespace that you're trying to create already exists.
 *
 * @public
 */
export class NamespaceAlreadyExists extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#NamespaceAlreadyExists";
  readonly name = "NamespaceAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The `CreatorRequestId` that was used to create the namespace.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The ID of the existing namespace.
   *
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
 * The resource can't be created because you've reached the quota on the number of resources.
 *
 * @public
 */
export class ResourceLimitExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#ResourceLimitExceeded";
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
 * The list of tags on the resource is over the quota. The maximum number of tags that can be applied to a resource is 50.
 *
 * @public
 */
export class TooManyTagsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#TooManyTagsException";
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The name of the resource.
   *
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
 * No namespace exists with the specified ID.
 *
 * @public
 */
export class NamespaceNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#NamespaceNotFound";
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
 * The service can't be created because a service with the same name already exists.
 *
 * @public
 */
export class ServiceAlreadyExists extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#ServiceAlreadyExists";
  readonly name = "ServiceAlreadyExists" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * The `CreatorRequestId` that was used to create the service.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * The ID of the existing service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The ARN of the existing service.
   *
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
 * The health check for the instance that's specified by `ServiceId` and `InstanceId` isn't a custom health check.
 *
 * @public
 */
export class CustomHealthNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#CustomHealthNotFound";
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
 * The specified resource can't be deleted because it contains other resources. For example, you can't delete a service that contains any instances.
 *
 * @public
 */
export class ResourceInUse extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#ResourceInUse";
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
 * No service exists with the specified ID.
 *
 * @public
 */
export class ServiceNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#ServiceNotFound";
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
 * No instance exists with the specified ID, or the instance was recently registered, and information about the instance hasn't propagated yet.
 *
 * @public
 */
export class InstanceNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#InstanceNotFound";
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
 * The operation can't be completed because you've reached the quota for the number of requests. For more information, see [Cloud Map API request throttling quota](https://docs.aws.amazon.com/cloud-map/latest/dg/throttling.html) in the *Cloud Map Developer Guide*.
 *
 * @public
 */
export class RequestLimitExceeded extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#RequestLimitExceeded";
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
 * No operation exists with the specified ID.
 *
 * @public
 */
export class OperationNotFound extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#OperationNotFound";
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
 * The operation can't be completed because the resource was not found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#ResourceNotFoundException";
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
 * The attribute can't be added to the service because you've exceeded the quota for the number of attributes you can add to a service.
 *
 * @public
 */
export class ServiceAttributesLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.servicediscovery#ServiceAttributesLimitExceededException";
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
