// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ElasticLoadBalancingServiceException as __BaseException } from "./ElasticLoadBalancingServiceException";

/**
 * <p>The specified load balancer does not exist.</p>
 * @public
 */
export class AccessPointNotFoundException extends __BaseException {
  readonly name = "AccessPointNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessPointNotFoundException, __BaseException>) {
    super({
      name: "AccessPointNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessPointNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A tag key was specified more than once.</p>
 * @public
 */
export class DuplicateTagKeysException extends __BaseException {
  readonly name = "DuplicateTagKeysException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateTagKeysException, __BaseException>) {
    super({
      name: "DuplicateTagKeysException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateTagKeysException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The quota for the number of tags that can be assigned to a load balancer has been reached.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
  }
}

/**
 * <p>The requested configuration change is not valid.</p>
 * @public
 */
export class InvalidConfigurationRequestException extends __BaseException {
  readonly name = "InvalidConfigurationRequestException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidConfigurationRequestException, __BaseException>) {
    super({
      name: "InvalidConfigurationRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidConfigurationRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of the specified security groups do not exist.</p>
 * @public
 */
export class InvalidSecurityGroupException extends __BaseException {
  readonly name = "InvalidSecurityGroupException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSecurityGroupException, __BaseException>) {
    super({
      name: "InvalidSecurityGroupException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSecurityGroupException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified VPC has no associated Internet gateway.</p>
 * @public
 */
export class InvalidSubnetException extends __BaseException {
  readonly name = "InvalidSubnetException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSubnetException, __BaseException>) {
    super({
      name: "InvalidSubnetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSubnetException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of the specified subnets do not exist.</p>
 * @public
 */
export class SubnetNotFoundException extends __BaseException {
  readonly name = "SubnetNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetNotFoundException, __BaseException>) {
    super({
      name: "SubnetNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified ARN does not refer to a valid SSL certificate in AWS Identity and Access Management (IAM)
 *             or AWS Certificate Manager (ACM). Note that if you recently uploaded the certificate to IAM, this error might
 *             indicate that the certificate is not fully available yet.</p>
 * @public
 */
export class CertificateNotFoundException extends __BaseException {
  readonly name = "CertificateNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateNotFoundException, __BaseException>) {
    super({
      name: "CertificateNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A policy with the specified name already exists for this load balancer.</p>
 * @public
 */
export class DuplicatePolicyNameException extends __BaseException {
  readonly name = "DuplicatePolicyNameException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicatePolicyNameException, __BaseException>) {
    super({
      name: "DuplicatePolicyNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicatePolicyNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The quota for the number of policies for this load balancer has been reached.</p>
 * @public
 */
export class TooManyPoliciesException extends __BaseException {
  readonly name = "TooManyPoliciesException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyPoliciesException, __BaseException>) {
    super({
      name: "TooManyPoliciesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyPoliciesException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified load balancer name already exists for this account.</p>
 * @public
 */
export class DuplicateAccessPointNameException extends __BaseException {
  readonly name = "DuplicateAccessPointNameException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateAccessPointNameException, __BaseException>) {
    super({
      name: "DuplicateAccessPointNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateAccessPointNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified value for the schema is not valid. You can only specify a scheme for load balancers in a VPC.</p>
 * @public
 */
export class InvalidSchemeException extends __BaseException {
  readonly name = "InvalidSchemeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSchemeException, __BaseException>) {
    super({
      name: "InvalidSchemeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSchemeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This operation is not allowed.</p>
 * @public
 */
export class OperationNotPermittedException extends __BaseException {
  readonly name = "OperationNotPermittedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotPermittedException, __BaseException>) {
    super({
      name: "OperationNotPermittedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotPermittedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The quota for the number of load balancers has been reached.</p>
 * @public
 */
export class TooManyAccessPointsException extends __BaseException {
  readonly name = "TooManyAccessPointsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyAccessPointsException, __BaseException>) {
    super({
      name: "TooManyAccessPointsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyAccessPointsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified protocol or signature version is not supported.</p>
 * @public
 */
export class UnsupportedProtocolException extends __BaseException {
  readonly name = "UnsupportedProtocolException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedProtocolException, __BaseException>) {
    super({
      name: "UnsupportedProtocolException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedProtocolException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A listener already exists for the specified load balancer name and port, but with a different instance port, protocol, or SSL certificate.</p>
 * @public
 */
export class DuplicateListenerException extends __BaseException {
  readonly name = "DuplicateListenerException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateListenerException, __BaseException>) {
    super({
      name: "DuplicateListenerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateListenerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of the specified policy types do not exist.</p>
 * @public
 */
export class PolicyTypeNotFoundException extends __BaseException {
  readonly name = "PolicyTypeNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyTypeNotFoundException, __BaseException>) {
    super({
      name: "PolicyTypeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyTypeNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A request made by Elastic Load Balancing to another service exceeds the maximum request rate permitted for your account.</p>
 * @public
 */
export class DependencyThrottleException extends __BaseException {
  readonly name = "DependencyThrottleException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyThrottleException, __BaseException>) {
    super({
      name: "DependencyThrottleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyThrottleException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified endpoint is not valid.</p>
 * @public
 */
export class InvalidEndPointException extends __BaseException {
  readonly name = "InvalidEndPointException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEndPointException, __BaseException>) {
    super({
      name: "InvalidEndPointException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEndPointException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified load balancer attribute does not exist.</p>
 * @public
 */
export class LoadBalancerAttributeNotFoundException extends __BaseException {
  readonly name = "LoadBalancerAttributeNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LoadBalancerAttributeNotFoundException, __BaseException>) {
    super({
      name: "LoadBalancerAttributeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LoadBalancerAttributeNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of the specified policies do not exist.</p>
 * @public
 */
export class PolicyNotFoundException extends __BaseException {
  readonly name = "PolicyNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyNotFoundException, __BaseException>) {
    super({
      name: "PolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The load balancer does not have a listener configured at the specified port.</p>
 * @public
 */
export class ListenerNotFoundException extends __BaseException {
  readonly name = "ListenerNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ListenerNotFoundException, __BaseException>) {
    super({
      name: "ListenerNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ListenerNotFoundException.prototype);
    this.Message = opts.Message;
  }
}
