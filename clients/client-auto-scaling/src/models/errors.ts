// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AutoScalingServiceException as __BaseException } from "./AutoScalingServiceException";

/**
 * <p>The request failed because an active instance refresh or rollback for the specified
 *             Auto Scaling group was not found.</p>
 * @public
 */
export class ActiveInstanceRefreshNotFoundFault extends __BaseException {
  readonly name = "ActiveInstanceRefreshNotFoundFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActiveInstanceRefreshNotFoundFault, __BaseException>) {
    super({
      name: "ActiveInstanceRefreshNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActiveInstanceRefreshNotFoundFault.prototype);
  }
}

/**
 * <p>You already have an Auto Scaling group or launch configuration with this name.</p>
 * @public
 */
export class AlreadyExistsFault extends __BaseException {
  readonly name = "AlreadyExistsFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsFault, __BaseException>) {
    super({
      name: "AlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsFault.prototype);
  }
}

/**
 * <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 * @public
 */
export class ResourceContentionFault extends __BaseException {
  readonly name = "ResourceContentionFault" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceContentionFault, __BaseException>) {
    super({
      name: "ResourceContentionFault",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceContentionFault.prototype);
  }
}

/**
 * <p>The service-linked role is not yet ready for use.</p>
 * @public
 */
export class ServiceLinkedRoleFailure extends __BaseException {
  readonly name = "ServiceLinkedRoleFailure" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLinkedRoleFailure, __BaseException>) {
    super({
      name: "ServiceLinkedRoleFailure",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLinkedRoleFailure.prototype);
  }
}

/**
 * <p>The request failed because an active instance refresh already exists for the specified
 *             Auto Scaling group.</p>
 * @public
 */
export class InstanceRefreshInProgressFault extends __BaseException {
  readonly name = "InstanceRefreshInProgressFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceRefreshInProgressFault, __BaseException>) {
    super({
      name: "InstanceRefreshInProgressFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceRefreshInProgressFault.prototype);
  }
}

/**
 * <p>You have already reached a limit for your Amazon EC2 Auto Scaling
 *             resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For
 *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html">DescribeAccountLimits</a> in the <i>Amazon EC2 Auto Scaling API
 *             Reference</i>.</p>
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
 * <p>The operation can't be performed because the resource is in use.</p>
 * @public
 */
export class ResourceInUseFault extends __BaseException {
  readonly name = "ResourceInUseFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseFault, __BaseException>) {
    super({
      name: "ResourceInUseFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseFault.prototype);
  }
}

/**
 * <p>The operation can't be performed because there are scaling activities in
 *             progress.</p>
 * @public
 */
export class ScalingActivityInProgressFault extends __BaseException {
  readonly name = "ScalingActivityInProgressFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScalingActivityInProgressFault, __BaseException>) {
    super({
      name: "ScalingActivityInProgressFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScalingActivityInProgressFault.prototype);
  }
}

/**
 * <p>The <code>NextToken</code> value is not valid.</p>
 * @public
 */
export class InvalidNextToken extends __BaseException {
  readonly name = "InvalidNextToken" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextToken, __BaseException>) {
    super({
      name: "InvalidNextToken",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextToken.prototype);
  }
}

/**
 * <p>
 *             Indicates that the parameters in the current request do not match the parameters from a previous request with the same client token within the idempotency window.
 *         </p>
 * @public
 */
export class IdempotentParameterMismatchError extends __BaseException {
  readonly name = "IdempotentParameterMismatchError" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchError, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request failed because a desired configuration was not found or an incompatible
 *             launch template (uses a Systems Manager parameter instead of an AMI ID) or launch
 *             template version (<code>$Latest</code> or <code>$Default</code>) is present on the Auto Scaling
 *             group.</p>
 * @public
 */
export class IrreversibleInstanceRefreshFault extends __BaseException {
  readonly name = "IrreversibleInstanceRefreshFault" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IrreversibleInstanceRefreshFault, __BaseException>) {
    super({
      name: "IrreversibleInstanceRefreshFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IrreversibleInstanceRefreshFault.prototype);
  }
}
