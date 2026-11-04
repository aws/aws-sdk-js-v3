// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { CloudFormationServiceException as __BaseException } from "./CloudFormationServiceException";

/**
 * The specified operation isn't valid.
 *
 * @public
 */
export class InvalidOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#InvalidOperationException";
  readonly name = "InvalidOperationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationException, __BaseException>) {
    super({
      name: "InvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified ID refers to an operation that doesn't exist.
 *
 * @public
 */
export class OperationNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#OperationNotFoundException";
  readonly name = "OperationNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotFoundException, __BaseException>) {
    super({
      name: "OperationNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * An error occurred during a CloudFormation registry operation.
 *
 * @public
 */
export class CFNRegistryException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#CFNRegistryException";
  readonly name = "CFNRegistryException" as const;
  readonly $fault = "client" as const;
  /**
   * A message with details about the error that occurred.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CFNRegistryException, __BaseException>) {
    super({
      name: "CFNRegistryException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CFNRegistryException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified extension doesn't exist in the CloudFormation registry.
 *
 * @public
 */
export class TypeNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#TypeNotFoundException";
  readonly name = "TypeNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * A message with details about the error that occurred.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TypeNotFoundException, __BaseException>) {
    super({
      name: "TypeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TypeNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The resource with the name requested already exists.
 *
 * @public
 */
export class AlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#AlreadyExistsException";
  readonly name = "AlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified extension configuration can't be found.
 *
 * @public
 */
export class TypeConfigurationNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#TypeConfigurationNotFoundException";
  readonly name = "TypeConfigurationNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * A message with details about the error that occurred.
   *
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TypeConfigurationNotFoundException, __BaseException>) {
    super({
      name: "TypeConfigurationNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TypeConfigurationNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * A client request token already exists.
 *
 * @public
 */
export class TokenAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#TokenAlreadyExistsException";
  readonly name = "TokenAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TokenAlreadyExistsException, __BaseException>) {
    super({
      name: "TokenAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TokenAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the `ListChangeSets` operation.
 *
 * @public
 */
export class ChangeSetNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#ChangeSetNotFoundException";
  readonly name = "ChangeSetNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ChangeSetNotFoundException, __BaseException>) {
    super({
      name: "ChangeSetNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ChangeSetNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The template contains resources with capabilities that weren't specified in the Capabilities parameter.
 *
 * @public
 */
export class InsufficientCapabilitiesException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#InsufficientCapabilitiesException";
  readonly name = "InsufficientCapabilitiesException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientCapabilitiesException, __BaseException>) {
    super({
      name: "InsufficientCapabilitiesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientCapabilitiesException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The quota for the resource has already been reached.
 *
 * For information about resource and stack limitations, see [CloudFormation quotas](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html) in the *CloudFormation User Guide*.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#LimitExceededException";
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
 * No more than 5 generated templates can be in an `InProgress` or `Pending` status at one time. This error is also returned if a generated template that is in an `InProgress` or `Pending` status is attempted to be updated or deleted.
 *
 * @public
 */
export class ConcurrentResourcesLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#ConcurrentResourcesLimitExceededException";
  readonly name = "ConcurrentResourcesLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentResourcesLimitExceededException, __BaseException>) {
    super({
      name: "ConcurrentResourcesLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentResourcesLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified operation ID already exists.
 *
 * @public
 */
export class OperationIdAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#OperationIdAlreadyExistsException";
  readonly name = "OperationIdAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationIdAlreadyExistsException, __BaseException>) {
    super({
      name: "OperationIdAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationIdAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Another operation is currently in progress for this StackSet. Only one operation can be performed for a stack set at a given time.
 *
 * @public
 */
export class OperationInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#OperationInProgressException";
  readonly name = "OperationInProgressException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * The specified StackSet doesn't exist.
 *
 * @public
 */
export class StackSetNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#StackSetNotFoundException";
  readonly name = "StackSetNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StackSetNotFoundException, __BaseException>) {
    super({
      name: "StackSetNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StackSetNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Another operation has been performed on this StackSet since the specified operation was performed.
 *
 * @public
 */
export class StaleRequestException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#StaleRequestException";
  readonly name = "StaleRequestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StaleRequestException, __BaseException>) {
    super({
      name: "StaleRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StaleRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified resource exists, but has been changed.
 *
 * @public
 */
export class CreatedButModifiedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#CreatedButModifiedException";
  readonly name = "CreatedButModifiedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreatedButModifiedException, __BaseException>) {
    super({
      name: "CreatedButModifiedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CreatedButModifiedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified name is already in use.
 *
 * @public
 */
export class NameAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#NameAlreadyExistsException";
  readonly name = "NameAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NameAlreadyExistsException, __BaseException>) {
    super({
      name: "NameAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NameAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified change set can't be used to update the stack. For example, the change set status might be `CREATE_IN_PROGRESS`, or the stack status might be `UPDATE_IN_PROGRESS`.
 *
 * @public
 */
export class InvalidChangeSetStatusException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#InvalidChangeSetStatusException";
  readonly name = "InvalidChangeSetStatusException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidChangeSetStatusException, __BaseException>) {
    super({
      name: "InvalidChangeSetStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidChangeSetStatusException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The generated template was not found.
 *
 * @public
 */
export class GeneratedTemplateNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#GeneratedTemplateNotFoundException";
  readonly name = "GeneratedTemplateNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GeneratedTemplateNotFoundException, __BaseException>) {
    super({
      name: "GeneratedTemplateNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GeneratedTemplateNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * You can't yet delete this StackSet, because it still contains one or more stack instances. Delete all stack instances from the StackSet before deleting the StackSet.
 *
 * @public
 */
export class StackSetNotEmptyException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#StackSetNotEmptyException";
  readonly name = "StackSetNotEmptyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StackSetNotEmptyException, __BaseException>) {
    super({
      name: "StackSetNotEmptyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StackSetNotEmptyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The resource scan was not found.
 *
 * @public
 */
export class ResourceScanNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#ResourceScanNotFoundException";
  readonly name = "ResourceScanNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceScanNotFoundException, __BaseException>) {
    super({
      name: "ResourceScanNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceScanNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified stack instance doesn't exist.
 *
 * @public
 */
export class StackInstanceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#StackInstanceNotFoundException";
  readonly name = "StackInstanceNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StackInstanceNotFoundException, __BaseException>) {
    super({
      name: "StackInstanceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StackInstanceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified stack refactor can't be found.
 *
 * @public
 */
export class StackRefactorNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#StackRefactorNotFoundException";
  readonly name = "StackRefactorNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StackRefactorNotFoundException, __BaseException>) {
    super({
      name: "StackRefactorNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StackRefactorNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified target doesn't have any requested Hook invocations.
 *
 * @public
 */
export class HookResultNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#HookResultNotFoundException";
  readonly name = "HookResultNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HookResultNotFoundException, __BaseException>) {
    super({
      name: "HookResultNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HookResultNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The specified stack ARN doesn't exist or stack doesn't exist corresponding to the ARN in input.
 *
 * @public
 */
export class StackNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#StackNotFoundException";
  readonly name = "StackNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StackNotFoundException, __BaseException>) {
    super({
      name: "StackNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StackNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * A resource scan is currently in progress. Only one can be run at a time for an account in a Region.
 *
 * @public
 */
export class ResourceScanInProgressException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#ResourceScanInProgressException";
  readonly name = "ResourceScanInProgressException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceScanInProgressException, __BaseException>) {
    super({
      name: "ResourceScanInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceScanInProgressException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Error reserved for use by the [CloudFormation CLI](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html). CloudFormation doesn't return this error to users.
 *
 * @public
 */
export class InvalidStateTransitionException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#InvalidStateTransitionException";
  readonly name = "InvalidStateTransitionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateTransitionException, __BaseException>) {
    super({
      name: "InvalidStateTransitionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateTransitionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Error reserved for use by the [CloudFormation CLI](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html). CloudFormation doesn't return this error to users.
 *
 * @public
 */
export class OperationStatusCheckFailedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#OperationStatusCheckFailedException";
  readonly name = "OperationStatusCheckFailedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationStatusCheckFailedException, __BaseException>) {
    super({
      name: "OperationStatusCheckFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationStatusCheckFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * The limit on resource scans has been exceeded. Reasons include:
 *
 * - Exceeded the daily quota for resource scans.
 * - A resource scan recently failed. You must wait 10 minutes before starting a new resource scan.
 * - The last resource scan failed after exceeding 100,000 resources. When this happens, you must wait 24 hours before starting a new resource scan.
 *
 * @public
 */
export class ResourceScanLimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudformation#ResourceScanLimitExceededException";
  readonly name = "ResourceScanLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceScanLimitExceededException, __BaseException>) {
    super({
      name: "ResourceScanLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceScanLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}
