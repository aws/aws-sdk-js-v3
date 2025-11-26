// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SWFServiceException as __BaseException } from "./SWFServiceException";

/**
 * <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 * @public
 */
export class OperationNotPermittedFault extends __BaseException {
  readonly name = "OperationNotPermittedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotPermittedFault, __BaseException>) {
    super({
      name: "OperationNotPermittedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotPermittedFault.prototype);
  }
}

/**
 * <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
 * @public
 */
export class UnknownResourceFault extends __BaseException {
  readonly name = "UnknownResourceFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnknownResourceFault, __BaseException>) {
    super({
      name: "UnknownResourceFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnknownResourceFault.prototype);
  }
}

/**
 * <p>The <code>StartWorkflowExecution</code> API action was called without the required
 *       parameters set.</p>
 *          <p>Some workflow execution parameters, such as the decision <code>taskList</code>, must be
 *       set to start the execution. However, these parameters might have been set as defaults when the
 *       workflow type was registered. In this case, you can omit these parameters from the
 *         <code>StartWorkflowExecution</code> call and Amazon SWF uses the values defined in the workflow
 *       type.</p>
 *          <note>
 *             <p>If these parameters aren't set and no default parameters were defined in the workflow
 *         type, this error is displayed.</p>
 *          </note>
 * @public
 */
export class DefaultUndefinedFault extends __BaseException {
  readonly name = "DefaultUndefinedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DefaultUndefinedFault, __BaseException>) {
    super({
      name: "DefaultUndefinedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DefaultUndefinedFault.prototype);
  }
}

/**
 * <p>Returned when the resource type has not been deprecated.</p>
 * @public
 */
export class TypeNotDeprecatedFault extends __BaseException {
  readonly name = "TypeNotDeprecatedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TypeNotDeprecatedFault, __BaseException>) {
    super({
      name: "TypeNotDeprecatedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TypeNotDeprecatedFault.prototype);
  }
}

/**
 * <p>Returned when the specified activity or workflow type was already deprecated.</p>
 * @public
 */
export class TypeDeprecatedFault extends __BaseException {
  readonly name = "TypeDeprecatedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TypeDeprecatedFault, __BaseException>) {
    super({
      name: "TypeDeprecatedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TypeDeprecatedFault.prototype);
  }
}

/**
 * <p>Returned when the specified domain has been deprecated.</p>
 * @public
 */
export class DomainDeprecatedFault extends __BaseException {
  readonly name = "DomainDeprecatedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DomainDeprecatedFault, __BaseException>) {
    super({
      name: "DomainDeprecatedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DomainDeprecatedFault.prototype);
  }
}

/**
 * <p>Returned if the domain already exists. You may get this fault if you are registering a domain that is either already registered or deprecated, or if you undeprecate a domain that is currently registered.</p>
 * @public
 */
export class DomainAlreadyExistsFault extends __BaseException {
  readonly name = "DomainAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DomainAlreadyExistsFault, __BaseException>) {
    super({
      name: "DomainAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DomainAlreadyExistsFault.prototype);
  }
}

/**
 * <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
 * @public
 */
export class LimitExceededFault extends __BaseException {
  readonly name = "LimitExceededFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededFault, __BaseException>) {
    super({
      name: "LimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededFault.prototype);
  }
}

/**
 * <p>Returned if the type already exists in the specified domain. You may get this fault if you are registering a type that is either already registered or deprecated, or if you undeprecate a type that is currently registered.</p>
 * @public
 */
export class TypeAlreadyExistsFault extends __BaseException {
  readonly name = "TypeAlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TypeAlreadyExistsFault, __BaseException>) {
    super({
      name: "TypeAlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TypeAlreadyExistsFault.prototype);
  }
}

/**
 * <p>You've exceeded the number of tags allowed for a domain.</p>
 * @public
 */
export class TooManyTagsFault extends __BaseException {
  readonly name = "TooManyTagsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsFault, __BaseException>) {
    super({
      name: "TooManyTagsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsFault.prototype);
  }
}

/**
 * <p>Returned by <a>StartWorkflowExecution</a> when an open execution with the same workflowId is already running in
 *       the specified domain.</p>
 * @public
 */
export class WorkflowExecutionAlreadyStartedFault extends __BaseException {
  readonly name = "WorkflowExecutionAlreadyStartedFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WorkflowExecutionAlreadyStartedFault, __BaseException>) {
    super({
      name: "WorkflowExecutionAlreadyStartedFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WorkflowExecutionAlreadyStartedFault.prototype);
  }
}
