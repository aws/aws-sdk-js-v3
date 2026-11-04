// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { WorkSpacesServiceException as __BaseException } from "./WorkSpacesServiceException";

/**
 * The user is not authorized to access a resource.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#AccessDeniedException";
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
 * The `TargetAccountId` is already linked or invited.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#ConflictException";
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
 * Unexpected server error occured.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#InternalServerException";
  readonly name = "InternalServerException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * The resource could not be found.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#ResourceNotFoundException";
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * The ID of the resource that could not be found.
   *
   * @public
   */
  ResourceId?: string | undefined;

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
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * You either haven't provided a `TargetAccountId` or are using the same value for `TargetAccountId` and `SourceAccountId`.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#ValidationException";
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
 * The specified application is not supported.
 *
 * @public
 */
export class ApplicationNotSupportedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#ApplicationNotSupportedException";
  readonly name = "ApplicationNotSupportedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ApplicationNotSupportedException, __BaseException>) {
    super({
      name: "ApplicationNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ApplicationNotSupportedException.prototype);
  }
}

/**
 * One or more parameter values are not valid.
 *
 * @public
 */
export class InvalidParameterValuesException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#InvalidParameterValuesException";
  readonly name = "InvalidParameterValuesException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValuesException, __BaseException>) {
    super({
      name: "InvalidParameterValuesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValuesException.prototype);
  }
}

/**
 * The state of the resource is not valid for this operation.
 *
 * @public
 */
export class InvalidResourceStateException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#InvalidResourceStateException";
  readonly name = "InvalidResourceStateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateException, __BaseException>) {
    super({
      name: "InvalidResourceStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateException.prototype);
  }
}

/**
 * This operation is not supported.
 *
 * @public
 */
export class OperationNotSupportedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#OperationNotSupportedException";
  readonly name = "OperationNotSupportedException" as const;
  readonly $fault = "client" as const;
  /**
   * The exception error reason.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotSupportedException, __BaseException>) {
    super({
      name: "OperationNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotSupportedException.prototype);
    this.reason = opts.reason;
  }
}

/**
 * The resource is associated with a directory.
 *
 * @public
 */
export class ResourceAssociatedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#ResourceAssociatedException";
  readonly name = "ResourceAssociatedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAssociatedException, __BaseException>) {
    super({
      name: "ResourceAssociatedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAssociatedException.prototype);
  }
}

/**
 * Your resource limits have been exceeded.
 *
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#ResourceLimitExceededException";
  readonly name = "ResourceLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
  }
}

/**
 * The compute type of the WorkSpace is not compatible with the application.
 *
 * @public
 */
export class ComputeNotCompatibleException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#ComputeNotCompatibleException";
  readonly name = "ComputeNotCompatibleException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ComputeNotCompatibleException, __BaseException>) {
    super({
      name: "ComputeNotCompatibleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ComputeNotCompatibleException.prototype);
  }
}

/**
 * The specified application is not compatible with the resource.
 *
 * @public
 */
export class IncompatibleApplicationsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#IncompatibleApplicationsException";
  readonly name = "IncompatibleApplicationsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleApplicationsException, __BaseException>) {
    super({
      name: "IncompatibleApplicationsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleApplicationsException.prototype);
  }
}

/**
 * The operating system of the WorkSpace is not compatible with the application.
 *
 * @public
 */
export class OperatingSystemNotCompatibleException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#OperatingSystemNotCompatibleException";
  readonly name = "OperatingSystemNotCompatibleException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperatingSystemNotCompatibleException, __BaseException>) {
    super({
      name: "OperatingSystemNotCompatibleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperatingSystemNotCompatibleException.prototype);
  }
}

/**
 * The specified resource already exists.
 *
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#ResourceAlreadyExistsException";
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
 * The specified resource is currently in use.
 *
 * @public
 */
export class ResourceInUseException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#ResourceInUseException";
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  /**
   * The ID of the resource that is in use.
   *
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
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * The specified resource is not available.
 *
 * @public
 */
export class ResourceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#ResourceUnavailableException";
  readonly name = "ResourceUnavailableException" as const;
  readonly $fault = "client" as const;
  /**
   * The identifier of the resource that is not available.
   *
   * @public
   */
  ResourceId?: string | undefined;

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
    this.ResourceId = opts.ResourceId;
  }
}

/**
 * The resource could not be created.
 *
 * @public
 */
export class ResourceCreationFailedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#ResourceCreationFailedException";
  readonly name = "ResourceCreationFailedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceCreationFailedException, __BaseException>) {
    super({
      name: "ResourceCreationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceCreationFailedException.prototype);
  }
}

/**
 * Two or more of the selected parameter values cannot be used together.
 *
 * @public
 */
export class InvalidParameterCombinationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#InvalidParameterCombinationException";
  readonly name = "InvalidParameterCombinationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterCombinationException, __BaseException>) {
    super({
      name: "InvalidParameterCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterCombinationException.prototype);
  }
}

/**
 * The properties of this WorkSpace are currently being modified. Try again in a moment.
 *
 * @public
 */
export class OperationInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#OperationInProgressException";
  readonly name = "OperationInProgressException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationInProgressException, __BaseException>) {
    super({
      name: "OperationInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationInProgressException.prototype);
  }
}

/**
 * The configuration of this WorkSpace is not supported for this operation. For more information, see [Required Configuration and Service Components for WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/required-service-components.html).
 *
 * @public
 */
export class UnsupportedWorkspaceConfigurationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#UnsupportedWorkspaceConfigurationException";
  readonly name = "UnsupportedWorkspaceConfigurationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedWorkspaceConfigurationException, __BaseException>) {
    super({
      name: "UnsupportedWorkspaceConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedWorkspaceConfigurationException.prototype);
  }
}

/**
 * The configuration of this network is not supported for this operation, or your network configuration conflicts with the Amazon WorkSpaces management network IP range. For more information, see [Configure a VPC for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html).
 *
 * @public
 */
export class UnsupportedNetworkConfigurationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#UnsupportedNetworkConfigurationException";
  readonly name = "UnsupportedNetworkConfigurationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedNetworkConfigurationException, __BaseException>) {
    super({
      name: "UnsupportedNetworkConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedNetworkConfigurationException.prototype);
  }
}

/**
 * The workspaces_DefaultRole role could not be found. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see [Creating the workspaces_DefaultRole Role](https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role).
 *
 * @public
 */
export class WorkspacesDefaultRoleNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.workspaces#WorkspacesDefaultRoleNotFoundException";
  readonly name = "WorkspacesDefaultRoleNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WorkspacesDefaultRoleNotFoundException, __BaseException>) {
    super({
      name: "WorkspacesDefaultRoleNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WorkspacesDefaultRoleNotFoundException.prototype);
  }
}
