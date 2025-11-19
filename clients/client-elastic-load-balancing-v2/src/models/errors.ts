// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ElasticLoadBalancingV2ServiceException as __BaseException } from "./ElasticLoadBalancingV2ServiceException";

/**
 * <p>The specified certificate does not exist.</p>
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
 * <p>The specified listener does not exist.</p>
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

/**
 * <p>You've reached the limit on the number of certificates per load balancer.</p>
 * @public
 */
export class TooManyCertificatesException extends __BaseException {
  readonly name = "TooManyCertificatesException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyCertificatesException, __BaseException>) {
    super({
      name: "TooManyCertificatesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyCertificatesException.prototype);
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
 * <p>The specified load balancer does not exist.</p>
 * @public
 */
export class LoadBalancerNotFoundException extends __BaseException {
  readonly name = "LoadBalancerNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LoadBalancerNotFoundException, __BaseException>) {
    super({
      name: "LoadBalancerNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LoadBalancerNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified rule does not exist.</p>
 * @public
 */
export class RuleNotFoundException extends __BaseException {
  readonly name = "RuleNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RuleNotFoundException, __BaseException>) {
    super({
      name: "RuleNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RuleNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified target group does not exist.</p>
 * @public
 */
export class TargetGroupNotFoundException extends __BaseException {
  readonly name = "TargetGroupNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetGroupNotFoundException, __BaseException>) {
    super({
      name: "TargetGroupNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetGroupNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of tags for this resource.</p>
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
 * <p>The specified trust store does not exist.</p>
 * @public
 */
export class TrustStoreNotFoundException extends __BaseException {
  readonly name = "TrustStoreNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrustStoreNotFoundException, __BaseException>) {
    super({
      name: "TrustStoreNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrustStoreNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The provided revocation file is an invalid format, or uses an incorrect algorithm.</p>
 * @public
 */
export class InvalidRevocationContentException extends __BaseException {
  readonly name = "InvalidRevocationContentException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRevocationContentException, __BaseException>) {
    super({
      name: "InvalidRevocationContentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRevocationContentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified revocation file does not exist.</p>
 * @public
 */
export class RevocationContentNotFoundException extends __BaseException {
  readonly name = "RevocationContentNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RevocationContentNotFoundException, __BaseException>) {
    super({
      name: "RevocationContentNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RevocationContentNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified trust store has too many revocation entries.</p>
 * @public
 */
export class TooManyTrustStoreRevocationEntriesException extends __BaseException {
  readonly name = "TooManyTrustStoreRevocationEntriesException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTrustStoreRevocationEntriesException, __BaseException>) {
    super({
      name: "TooManyTrustStoreRevocationEntriesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTrustStoreRevocationEntriesException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified allocation ID does not exist.</p>
 * @public
 */
export class AllocationIdNotFoundException extends __BaseException {
  readonly name = "AllocationIdNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AllocationIdNotFoundException, __BaseException>) {
    super({
      name: "AllocationIdNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AllocationIdNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified ALPN policy is not supported.</p>
 * @public
 */
export class ALPNPolicyNotSupportedException extends __BaseException {
  readonly name = "ALPNPolicyNotSupportedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ALPNPolicyNotSupportedException, __BaseException>) {
    super({
      name: "ALPNPolicyNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ALPNPolicyNotSupportedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified Availability Zone is not supported.</p>
 * @public
 */
export class AvailabilityZoneNotSupportedException extends __BaseException {
  readonly name = "AvailabilityZoneNotSupportedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AvailabilityZoneNotSupportedException, __BaseException>) {
    super({
      name: "AvailabilityZoneNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AvailabilityZoneNotSupportedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified ca certificate bundle does not exist.</p>
 * @public
 */
export class CaCertificatesBundleNotFoundException extends __BaseException {
  readonly name = "CaCertificatesBundleNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CaCertificatesBundleNotFoundException, __BaseException>) {
    super({
      name: "CaCertificatesBundleNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CaCertificatesBundleNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've exceeded the daily capacity decrease limit for this reservation.</p>
 * @public
 */
export class CapacityDecreaseRequestsLimitExceededException extends __BaseException {
  readonly name = "CapacityDecreaseRequestsLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CapacityDecreaseRequestsLimitExceededException, __BaseException>) {
    super({
      name: "CapacityDecreaseRequestsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CapacityDecreaseRequestsLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There is a pending capacity reservation.</p>
 * @public
 */
export class CapacityReservationPendingException extends __BaseException {
  readonly name = "CapacityReservationPendingException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CapacityReservationPendingException, __BaseException>) {
    super({
      name: "CapacityReservationPendingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CapacityReservationPendingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've exceeded the capacity units limit.</p>
 * @public
 */
export class CapacityUnitsLimitExceededException extends __BaseException {
  readonly name = "CapacityUnitsLimitExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CapacityUnitsLimitExceededException, __BaseException>) {
    super({
      name: "CapacityUnitsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CapacityUnitsLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A listener with the specified port already exists.</p>
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
 * <p>The specified configuration is not valid with this protocol.</p>
 * @public
 */
export class IncompatibleProtocolsException extends __BaseException {
  readonly name = "IncompatibleProtocolsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IncompatibleProtocolsException, __BaseException>) {
    super({
      name: "IncompatibleProtocolsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IncompatibleProtocolsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested configuration is not valid.</p>
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
 * <p>The requested action is not valid.</p>
 * @public
 */
export class InvalidLoadBalancerActionException extends __BaseException {
  readonly name = "InvalidLoadBalancerActionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLoadBalancerActionException, __BaseException>) {
    super({
      name: "InvalidLoadBalancerActionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLoadBalancerActionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified SSL policy does not exist.</p>
 * @public
 */
export class SSLPolicyNotFoundException extends __BaseException {
  readonly name = "SSLPolicyNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SSLPolicyNotFoundException, __BaseException>) {
    super({
      name: "SSLPolicyNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SSLPolicyNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of load balancers per target group.</p>
 * @public
 */
export class TargetGroupAssociationLimitException extends __BaseException {
  readonly name = "TargetGroupAssociationLimitException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TargetGroupAssociationLimitException, __BaseException>) {
    super({
      name: "TargetGroupAssociationLimitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TargetGroupAssociationLimitException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of actions per rule.</p>
 * @public
 */
export class TooManyActionsException extends __BaseException {
  readonly name = "TooManyActionsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyActionsException, __BaseException>) {
    super({
      name: "TooManyActionsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyActionsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of listeners per load balancer.</p>
 * @public
 */
export class TooManyListenersException extends __BaseException {
  readonly name = "TooManyListenersException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyListenersException, __BaseException>) {
    super({
      name: "TooManyListenersException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyListenersException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of times a target can be registered with a load
 *       balancer.</p>
 * @public
 */
export class TooManyRegistrationsForTargetIdException extends __BaseException {
  readonly name = "TooManyRegistrationsForTargetIdException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRegistrationsForTargetIdException, __BaseException>) {
    super({
      name: "TooManyRegistrationsForTargetIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRegistrationsForTargetIdException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of targets.</p>
 * @public
 */
export class TooManyTargetsException extends __BaseException {
  readonly name = "TooManyTargetsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTargetsException, __BaseException>) {
    super({
      name: "TooManyTargetsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTargetsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of unique target groups per load balancer across
 *       all listeners. If a target group is used by multiple actions for a load balancer, it is
 *       counted as only one use.</p>
 * @public
 */
export class TooManyUniqueTargetGroupsPerLoadBalancerException extends __BaseException {
  readonly name = "TooManyUniqueTargetGroupsPerLoadBalancerException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyUniqueTargetGroupsPerLoadBalancerException, __BaseException>) {
    super({
      name: "TooManyUniqueTargetGroupsPerLoadBalancerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyUniqueTargetGroupsPerLoadBalancerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified trust store is not active.</p>
 * @public
 */
export class TrustStoreNotReadyException extends __BaseException {
  readonly name = "TrustStoreNotReadyException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrustStoreNotReadyException, __BaseException>) {
    super({
      name: "TrustStoreNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrustStoreNotReadyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified protocol is not supported.</p>
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
 * <p>A load balancer with the specified name already exists.</p>
 * @public
 */
export class DuplicateLoadBalancerNameException extends __BaseException {
  readonly name = "DuplicateLoadBalancerNameException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateLoadBalancerNameException, __BaseException>) {
    super({
      name: "DuplicateLoadBalancerNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateLoadBalancerNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested scheme is not valid.</p>
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
 * <p>The specified security group does not exist.</p>
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
 * <p>The specified subnet is out of available addresses.</p>
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
 * <p>A specified resource is in use.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified subnet does not exist.</p>
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
 * <p>You've reached the limit on the number of load balancers for your Amazon Web Services
 *       account.</p>
 * @public
 */
export class TooManyLoadBalancersException extends __BaseException {
  readonly name = "TooManyLoadBalancersException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyLoadBalancersException, __BaseException>) {
    super({
      name: "TooManyLoadBalancersException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyLoadBalancersException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified priority is in use.</p>
 * @public
 */
export class PriorityInUseException extends __BaseException {
  readonly name = "PriorityInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PriorityInUseException, __BaseException>) {
    super({
      name: "PriorityInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PriorityInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of rules per load balancer.</p>
 * @public
 */
export class TooManyRulesException extends __BaseException {
  readonly name = "TooManyRulesException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRulesException, __BaseException>) {
    super({
      name: "TooManyRulesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRulesException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of target groups for your Amazon Web Services
 *       account.</p>
 * @public
 */
export class TooManyTargetGroupsException extends __BaseException {
  readonly name = "TooManyTargetGroupsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTargetGroupsException, __BaseException>) {
    super({
      name: "TooManyTargetGroupsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTargetGroupsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A target group with the specified name already exists.</p>
 * @public
 */
export class DuplicateTargetGroupNameException extends __BaseException {
  readonly name = "DuplicateTargetGroupNameException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateTargetGroupNameException, __BaseException>) {
    super({
      name: "DuplicateTargetGroupNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateTargetGroupNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A trust store with the specified name already exists.</p>
 * @public
 */
export class DuplicateTrustStoreNameException extends __BaseException {
  readonly name = "DuplicateTrustStoreNameException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateTrustStoreNameException, __BaseException>) {
    super({
      name: "DuplicateTrustStoreNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateTrustStoreNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified ca certificate bundle is in an invalid format, or corrupt.</p>
 * @public
 */
export class InvalidCaCertificatesBundleException extends __BaseException {
  readonly name = "InvalidCaCertificatesBundleException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCaCertificatesBundleException, __BaseException>) {
    super({
      name: "InvalidCaCertificatesBundleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCaCertificatesBundleException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You've reached the limit on the number of trust stores for your Amazon Web Services account.</p>
 * @public
 */
export class TooManyTrustStoresException extends __BaseException {
  readonly name = "TooManyTrustStoresException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTrustStoresException, __BaseException>) {
    super({
      name: "TooManyTrustStoresException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTrustStoresException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified association can't be within the same account.</p>
 * @public
 */
export class DeleteAssociationSameAccountException extends __BaseException {
  readonly name = "DeleteAssociationSameAccountException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeleteAssociationSameAccountException, __BaseException>) {
    super({
      name: "DeleteAssociationSameAccountException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeleteAssociationSameAccountException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified association does not exist.</p>
 * @public
 */
export class TrustStoreAssociationNotFoundException extends __BaseException {
  readonly name = "TrustStoreAssociationNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrustStoreAssociationNotFoundException, __BaseException>) {
    super({
      name: "TrustStoreAssociationNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrustStoreAssociationNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified trust store is currently in use.</p>
 * @public
 */
export class TrustStoreInUseException extends __BaseException {
  readonly name = "TrustStoreInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TrustStoreInUseException, __BaseException>) {
    super({
      name: "TrustStoreInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TrustStoreInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified target does not exist, is not in the same VPC as the target group, or has an
 *       unsupported instance type.</p>
 * @public
 */
export class InvalidTargetException extends __BaseException {
  readonly name = "InvalidTargetException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTargetException, __BaseException>) {
    super({
      name: "InvalidTargetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTargetException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The health of the specified targets could not be retrieved due to an internal
 *       error.</p>
 * @public
 */
export class HealthUnavailableException extends __BaseException {
  readonly name = "HealthUnavailableException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HealthUnavailableException, __BaseException>) {
    super({
      name: "HealthUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, HealthUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified revocation ID does not exist.</p>
 * @public
 */
export class RevocationIdNotFoundException extends __BaseException {
  readonly name = "RevocationIdNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RevocationIdNotFoundException, __BaseException>) {
    super({
      name: "RevocationIdNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RevocationIdNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource does not exist.</p>
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
 * <p>There is insufficient capacity to reserve.</p>
 * @public
 */
export class InsufficientCapacityException extends __BaseException {
  readonly name = "InsufficientCapacityException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientCapacityException, __BaseException>) {
    super({
      name: "InsufficientCapacityException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientCapacityException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This operation is not allowed while a prior request has not been completed.</p>
 * @public
 */
export class PriorRequestNotCompleteException extends __BaseException {
  readonly name = "PriorRequestNotCompleteException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PriorRequestNotCompleteException, __BaseException>) {
    super({
      name: "PriorRequestNotCompleteException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PriorRequestNotCompleteException.prototype);
    this.Message = opts.Message;
  }
}
