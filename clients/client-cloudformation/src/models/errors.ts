// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudFormationServiceException as __BaseException } from "./CloudFormationServiceException";

/**
 * <p>The specified operation isn't valid.</p>
 * @public
 */
export class InvalidOperationException extends __BaseException {
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
 * <p>The specified ID refers to an operation that doesn't exist.</p>
 * @public
 */
export class OperationNotFoundException extends __BaseException {
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
 * <p>An error occurred during a CloudFormation registry operation.</p>
 * @public
 */
export class CFNRegistryException extends __BaseException {
  readonly name = "CFNRegistryException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message with details about the error that occurred.</p>
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
 * <p>The specified extension doesn't exist in the CloudFormation registry.</p>
 * @public
 */
export class TypeNotFoundException extends __BaseException {
  readonly name = "TypeNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message with details about the error that occurred.</p>
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
 * <p>The resource with the name requested already exists.</p>
 * @public
 */
export class AlreadyExistsException extends __BaseException {
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
 * <p>The specified extension configuration can't be found.</p>
 * @public
 */
export class TypeConfigurationNotFoundException extends __BaseException {
  readonly name = "TypeConfigurationNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A message with details about the error that occurred.</p>
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
 * <p>A client request token already exists.</p>
 * @public
 */
export class TokenAlreadyExistsException extends __BaseException {
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
 * <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the
 *    <code>ListChangeSets</code> operation.</p>
 * @public
 */
export class ChangeSetNotFoundException extends __BaseException {
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
 * <p>The template contains resources with capabilities that weren't specified in the Capabilities parameter.</p>
 * @public
 */
export class InsufficientCapabilitiesException extends __BaseException {
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
 * <p>The quota for the resource has already been reached.</p>
 *          <p>For information about resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation quotas</a> in the
 *    <i>CloudFormation User Guide</i>.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
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
 * <p>No more than 5 generated templates can be in an <code>InProgress</code> or <code>Pending</code> status at one
 *    time. This error is also returned if a generated template that is in an <code>InProgress</code> or
 *    <code>Pending</code> status is attempted to be updated or deleted.</p>
 * @public
 */
export class ConcurrentResourcesLimitExceededException extends __BaseException {
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
 * <p>The specified operation ID already exists.</p>
 * @public
 */
export class OperationIdAlreadyExistsException extends __BaseException {
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
 * <p>Another operation is currently in progress for this StackSet. Only one operation can be performed for a stack
 *    set at a given time.</p>
 * @public
 */
export class OperationInProgressException extends __BaseException {
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
 * <p>The specified StackSet doesn't exist.</p>
 * @public
 */
export class StackSetNotFoundException extends __BaseException {
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
 * <p>Another operation has been performed on this StackSet since the specified operation was performed.</p>
 * @public
 */
export class StaleRequestException extends __BaseException {
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
 * <p>The specified resource exists, but has been changed.</p>
 * @public
 */
export class CreatedButModifiedException extends __BaseException {
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
 * <p>The specified name is already in use.</p>
 * @public
 */
export class NameAlreadyExistsException extends __BaseException {
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
 * <p>The specified change set can't be used to update the stack. For example, the change set status might be
 *    <code>CREATE_IN_PROGRESS</code>, or the stack status might be <code>UPDATE_IN_PROGRESS</code>.</p>
 * @public
 */
export class InvalidChangeSetStatusException extends __BaseException {
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
 * <p>The generated template was not found.</p>
 * @public
 */
export class GeneratedTemplateNotFoundException extends __BaseException {
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
 * <p>You can't yet delete this StackSet, because it still contains one or more stack instances. Delete all stack
 *    instances from the StackSet before deleting the StackSet.</p>
 * @public
 */
export class StackSetNotEmptyException extends __BaseException {
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
 * <p>The resource scan was not found.</p>
 * @public
 */
export class ResourceScanNotFoundException extends __BaseException {
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
 * <p>The specified stack instance doesn't exist.</p>
 * @public
 */
export class StackInstanceNotFoundException extends __BaseException {
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
 * <p>The specified stack refactor can't be found.</p>
 * @public
 */
export class StackRefactorNotFoundException extends __BaseException {
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
 * <p>The specified target doesn't have any requested Hook invocations.</p>
 * @public
 */
export class HookResultNotFoundException extends __BaseException {
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
 * <p>The specified stack ARN doesn't exist or stack doesn't exist corresponding to the ARN in input.</p>
 * @public
 */
export class StackNotFoundException extends __BaseException {
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
 * <p>A resource scan is currently in progress. Only one can be run at a time for an account in a Region.</p>
 * @public
 */
export class ResourceScanInProgressException extends __BaseException {
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
 * <p>Error reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. CloudFormation doesn't
 *    return this error to users.</p>
 * @public
 */
export class InvalidStateTransitionException extends __BaseException {
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
 * <p>Error reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. CloudFormation doesn't
 *    return this error to users.</p>
 * @public
 */
export class OperationStatusCheckFailedException extends __BaseException {
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
 * <p>The limit on resource scans has been exceeded. Reasons include:</p>
 *          <ul>
 *             <li>
 *                <p>Exceeded the daily quota for resource scans.</p>
 *             </li>
 *             <li>
 *                <p>A resource scan recently failed. You must wait 10 minutes before starting a new resource scan.</p>
 *             </li>
 *             <li>
 *                <p>The last resource scan failed after exceeding 100,000 resources. When this happens, you must wait 24 hours
 *      before starting a new resource scan.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ResourceScanLimitExceededException extends __BaseException {
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
