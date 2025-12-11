// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { WorkSpacesServiceException as __BaseException } from "./WorkSpacesServiceException";

/**
 * <p>The user is not authorized to access a resource.</p>
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
 * <p>The <code>TargetAccountId</code> is already linked or invited.</p>
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
 * <p>Unexpected server error occured.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
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
 * <p>The resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The ID of the resource that could not be found.</p>
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
 * <p>You either haven't provided a <code>TargetAccountId</code> or
 *          are using the same value for <code>TargetAccountId</code> and <code>SourceAccountId</code>.</p>
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
 * <p>The specified application is not supported.</p>
 * @public
 */
export class ApplicationNotSupportedException extends __BaseException {
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
 * <p>One or more parameter values are not valid.</p>
 * @public
 */
export class InvalidParameterValuesException extends __BaseException {
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
 * <p>The state of the resource is not valid for this operation.</p>
 * @public
 */
export class InvalidResourceStateException extends __BaseException {
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
 * <p>This operation is not supported.</p>
 * @public
 */
export class OperationNotSupportedException extends __BaseException {
  readonly name = "OperationNotSupportedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception error reason.</p>
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
 * <p>The resource is associated with a directory.</p>
 * @public
 */
export class ResourceAssociatedException extends __BaseException {
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
 * <p>Your resource limits have been exceeded.</p>
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
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
 * <p>The compute type of the WorkSpace is not compatible with the application.</p>
 * @public
 */
export class ComputeNotCompatibleException extends __BaseException {
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
 * <p>The specified application is not compatible with the resource.</p>
 * @public
 */
export class IncompatibleApplicationsException extends __BaseException {
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
 * <p>The operating system of the WorkSpace is not compatible with the application.</p>
 * @public
 */
export class OperatingSystemNotCompatibleException extends __BaseException {
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
 * <p>The specified resource already exists.</p>
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
 * <p>The specified resource is currently in use.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The ID of the resource that is in use.</p>
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
 * <p>The specified resource is not available.</p>
 * @public
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name = "ResourceUnavailableException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The identifier of the resource that is not available.</p>
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
 * <p>The resource could not be created.</p>
 * @public
 */
export class ResourceCreationFailedException extends __BaseException {
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
 * <p>Two or more of the selected parameter values cannot be used together.</p>
 * @public
 */
export class InvalidParameterCombinationException extends __BaseException {
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
 * <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 * @public
 */
export class OperationInProgressException extends __BaseException {
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
 * <p>The configuration of this WorkSpace is not supported for this operation. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/required-service-components.html">Required
 *             Configuration and Service Components for WorkSpaces </a>.</p>
 * @public
 */
export class UnsupportedWorkspaceConfigurationException extends __BaseException {
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
 * <p>The configuration of this network is not supported for this operation, or your network configuration
 *          conflicts with the Amazon WorkSpaces management network IP range. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html">
 *             Configure a VPC for Amazon WorkSpaces</a>.</p>
 * @public
 */
export class UnsupportedNetworkConfigurationException extends __BaseException {
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
 * <p>The workspaces_DefaultRole role could not be found. If this is the first time you are registering a directory, you
 *          will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role">Creating the workspaces_DefaultRole Role</a>.</p>
 * @public
 */
export class WorkspacesDefaultRoleNotFoundException extends __BaseException {
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
