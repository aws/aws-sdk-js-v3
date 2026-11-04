// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { AutoScalingServiceException as __BaseException } from "./AutoScalingServiceException";

/**
 * The request failed because an active instance refresh or rollback for the specified Auto Scaling group was not found.
 *
 * @public
 */
export class ActiveInstanceRefreshNotFoundFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.autoscaling#ActiveInstanceRefreshNotFoundFault";
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
 * You already have an Auto Scaling group or launch configuration with this name.
 *
 * @public
 */
export class AlreadyExistsFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.autoscaling#AlreadyExistsFault";
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
 * You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group, instance, or load balancer).
 *
 * @public
 */
export class ResourceContentionFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.autoscaling#ResourceContentionFault";
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
 * The service-linked role is not yet ready for use.
 *
 * @public
 */
export class ServiceLinkedRoleFailure extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.autoscaling#ServiceLinkedRoleFailure";
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
 * The request failed because an active instance refresh already exists for the specified Auto Scaling group.
 *
 * @public
 */
export class InstanceRefreshInProgressFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.autoscaling#InstanceRefreshInProgressFault";
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
 * You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For more information, see [DescribeAccountLimits](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html) in the *Amazon EC2 Auto Scaling API Reference*.
 *
 * @public
 */
export class LimitExceededFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.autoscaling#LimitExceededFault";
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
 * The operation can't be performed because the resource is in use.
 *
 * @public
 */
export class ResourceInUseFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.autoscaling#ResourceInUseFault";
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
 * The operation can't be performed because there are scaling activities in progress.
 *
 * @public
 */
export class ScalingActivityInProgressFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.autoscaling#ScalingActivityInProgressFault";
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
 * The `NextToken` value is not valid.
 *
 * @public
 */
export class InvalidNextToken extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.autoscaling#InvalidNextToken";
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
 * The service is currently processing another request with the same client token. Retry the request with the same client token—the in-flight operation will complete and return its result.
 *
 * @public
 */
export class IdempotentCallInProgressFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.autoscaling#IdempotentCallInProgressFault";
  readonly name = "IdempotentCallInProgressFault" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentCallInProgressFault, __BaseException>) {
    super({
      name: "IdempotentCallInProgressFault",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentCallInProgressFault.prototype);
    this.Message = opts.Message;
  }
}

/**
 * Indicates that the parameters in the current request do not match the parameters from a previous request with the same client token within the idempotency window.
 *
 * @public
 */
export class IdempotentParameterMismatchError extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.autoscaling#IdempotentParameterMismatchError";
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
 * The request failed because a desired configuration was not found or an incompatible launch template (uses a Systems Manager parameter instead of an AMI ID) or launch template version (`$Latest` or `$Default`) is present on the Auto Scaling group.
 *
 * @public
 */
export class IrreversibleInstanceRefreshFault extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.autoscaling#IrreversibleInstanceRefreshFault";
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
