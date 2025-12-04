// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { RAMServiceException as __BaseException } from "./RAMServiceException";

/**
 * <p>The operation failed because the client token input parameter matched one that was
 *             used with a previous call to the operation, but at least one of the other input
 *             parameters is different from the previous call.</p>
 * @public
 */
export class IdempotentParameterMismatchException extends __BaseException {
  readonly name = "IdempotentParameterMismatchException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotentParameterMismatchException, __BaseException>) {
    super({
      name: "IdempotentParameterMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
  }
}

/**
 * <p>The operation failed because the specified client token isn't valid.</p>
 * @public
 */
export class InvalidClientTokenException extends __BaseException {
  readonly name = "InvalidClientTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidClientTokenException, __BaseException>) {
    super({
      name: "InvalidClientTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidClientTokenException.prototype);
  }
}

/**
 * <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> has a format that isn't
 *             valid.</p>
 * @public
 */
export class MalformedArnException extends __BaseException {
  readonly name = "MalformedArnException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedArnException, __BaseException>) {
    super({
      name: "MalformedArnException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedArnException.prototype);
  }
}

/**
 * <p>The operation failed because the requested operation isn't permitted.</p>
 * @public
 */
export class OperationNotPermittedException extends __BaseException {
  readonly name = "OperationNotPermittedException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The operation failed because the specified invitation was already accepted.</p>
 * @public
 */
export class ResourceShareInvitationAlreadyAcceptedException extends __BaseException {
  readonly name = "ResourceShareInvitationAlreadyAcceptedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceShareInvitationAlreadyAcceptedException, __BaseException>) {
    super({
      name: "ResourceShareInvitationAlreadyAcceptedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceShareInvitationAlreadyAcceptedException.prototype);
  }
}

/**
 * <p>The operation failed because the specified invitation was already rejected.</p>
 * @public
 */
export class ResourceShareInvitationAlreadyRejectedException extends __BaseException {
  readonly name = "ResourceShareInvitationAlreadyRejectedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceShareInvitationAlreadyRejectedException, __BaseException>) {
    super({
      name: "ResourceShareInvitationAlreadyRejectedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceShareInvitationAlreadyRejectedException.prototype);
  }
}

/**
 * <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> for an invitation was not
 *             found.</p>
 * @public
 */
export class ResourceShareInvitationArnNotFoundException extends __BaseException {
  readonly name = "ResourceShareInvitationArnNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceShareInvitationArnNotFoundException, __BaseException>) {
    super({
      name: "ResourceShareInvitationArnNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceShareInvitationArnNotFoundException.prototype);
  }
}

/**
 * <p>The operation failed because the specified invitation is past its expiration date and
 *             time.</p>
 * @public
 */
export class ResourceShareInvitationExpiredException extends __BaseException {
  readonly name = "ResourceShareInvitationExpiredException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceShareInvitationExpiredException, __BaseException>) {
    super({
      name: "ResourceShareInvitationExpiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceShareInvitationExpiredException.prototype);
  }
}

/**
 * <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 * @public
 */
export class ServerInternalException extends __BaseException {
  readonly name = "ServerInternalException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerInternalException, __BaseException>) {
    super({
      name: "ServerInternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerInternalException.prototype);
  }
}

/**
 * <p>The operation failed because the service isn't available. Try again later.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * <p>The operation failed because a parameter you specified isn't valid.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>The operation failed because the requested operation isn't valid for the resource
 *             share in its current state.</p>
 * @public
 */
export class InvalidStateTransitionException extends __BaseException {
  readonly name = "InvalidStateTransitionException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The operation failed because it would exceed the limit for resource shares for your account. To
 *             view the limits for your Amazon Web Services account, see the <a href="https://console.aws.amazon.com/servicequotas/home/services/ram/quotas">RAM page in the Service Quotas
 *                 console</a>.</p>
 * @public
 */
export class ResourceShareLimitExceededException extends __BaseException {
  readonly name = "ResourceShareLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceShareLimitExceededException, __BaseException>) {
    super({
      name: "ResourceShareLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceShareLimitExceededException.prototype);
  }
}

/**
 * <p>The operation failed because it exceeded the rate at which you are allowed to perform
 *             this operation. Please try again later.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>The operation failed because a specified resource couldn't be found.</p>
 * @public
 */
export class UnknownResourceException extends __BaseException {
  readonly name = "UnknownResourceException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnknownResourceException, __BaseException>) {
    super({
      name: "UnknownResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnknownResourceException.prototype);
  }
}

/**
 * <p>The operation failed because a policy you specified isn't valid.</p>
 * @public
 */
export class InvalidPolicyException extends __BaseException {
  readonly name = "InvalidPolicyException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyException, __BaseException>) {
    super({
      name: "InvalidPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyException.prototype);
  }
}

/**
 * <p>The operation failed because the policy template that you provided isn't valid.</p>
 * @public
 */
export class MalformedPolicyTemplateException extends __BaseException {
  readonly name = "MalformedPolicyTemplateException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedPolicyTemplateException, __BaseException>) {
    super({
      name: "MalformedPolicyTemplateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedPolicyTemplateException.prototype);
  }
}

/**
 * <p>The operation failed because a permission with the specified name already exists in
 *             the requested Amazon Web Services Region. Choose a different name.</p>
 * @public
 */
export class PermissionAlreadyExistsException extends __BaseException {
  readonly name = "PermissionAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PermissionAlreadyExistsException, __BaseException>) {
    super({
      name: "PermissionAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PermissionAlreadyExistsException.prototype);
  }
}

/**
 * <p>The operation failed because it would exceed the maximum number of permissions you can
 *             create in each Amazon Web Services Region. To view the limits for your Amazon Web Services account, see the <a href="https://console.aws.amazon.com/servicequotas/home/services/ram/quotas">RAM page in the
 *                 Service Quotas console</a>.</p>
 * @public
 */
export class PermissionLimitExceededException extends __BaseException {
  readonly name = "PermissionLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PermissionLimitExceededException, __BaseException>) {
    super({
      name: "PermissionLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PermissionLimitExceededException.prototype);
  }
}

/**
 * <p>The operation failed because it would exceed the limit for the number of versions you
 *             can have for a permission. To view the limits for your Amazon Web Services account, see the <a href="https://console.aws.amazon.com/servicequotas/home/services/ram/quotas">RAM page in the
 *                 Service Quotas console</a>.</p>
 * @public
 */
export class PermissionVersionsLimitExceededException extends __BaseException {
  readonly name = "PermissionVersionsLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PermissionVersionsLimitExceededException, __BaseException>) {
    super({
      name: "PermissionVersionsLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PermissionVersionsLimitExceededException.prototype);
  }
}

/**
 * <p>The operation failed because it would exceed the limit for tags for your
 *             Amazon Web Services account.</p>
 * @public
 */
export class TagLimitExceededException extends __BaseException {
  readonly name = "TagLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagLimitExceededException, __BaseException>) {
    super({
      name: "TagLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagLimitExceededException.prototype);
  }
}

/**
 * <p>The operation failed because the specified tag key is a reserved word and can't be
 *             used.</p>
 * @public
 */
export class TagPolicyViolationException extends __BaseException {
  readonly name = "TagPolicyViolationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TagPolicyViolationException, __BaseException>) {
    super({
      name: "TagPolicyViolationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TagPolicyViolationException.prototype);
  }
}

/**
 * <p>The operation failed because the specified value for <code>NextToken</code> isn't
 *             valid. You must specify a value you received in the <code>NextToken</code> response of a
 *             previous call to this operation.</p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name = "InvalidNextTokenException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
  }
}

/**
 * <p>The operation failed because the specified <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> was not found.</p>
 * @public
 */
export class ResourceArnNotFoundException extends __BaseException {
  readonly name = "ResourceArnNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceArnNotFoundException, __BaseException>) {
    super({
      name: "ResourceArnNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceArnNotFoundException.prototype);
  }
}

/**
 * <p>The operation failed because the specified value for <code>MaxResults</code> isn't
 *             valid.</p>
 * @public
 */
export class InvalidMaxResultsException extends __BaseException {
  readonly name = "InvalidMaxResultsException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidMaxResultsException, __BaseException>) {
    super({
      name: "InvalidMaxResultsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidMaxResultsException.prototype);
  }
}

/**
 * <p>The operation failed because a required input parameter is missing.</p>
 * @public
 */
export class MissingRequiredParameterException extends __BaseException {
  readonly name = "MissingRequiredParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingRequiredParameterException, __BaseException>) {
    super({
      name: "MissingRequiredParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingRequiredParameterException.prototype);
  }
}

/**
 * <p>The operation failed because the specified resource type isn't valid.</p>
 * @public
 */
export class InvalidResourceTypeException extends __BaseException {
  readonly name = "InvalidResourceTypeException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceTypeException, __BaseException>) {
    super({
      name: "InvalidResourceTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceTypeException.prototype);
  }
}

/**
 * <p>There isn't an existing managed permission defined in RAM that has the same IAM permissions as
 *             the resource-based policy attached to the resource. You should first run <a>PromotePermissionCreatedFromPolicy</a> to create that managed permission.</p>
 * @public
 */
export class UnmatchedPolicyPermissionException extends __BaseException {
  readonly name = "UnmatchedPolicyPermissionException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnmatchedPolicyPermissionException, __BaseException>) {
    super({
      name: "UnmatchedPolicyPermissionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnmatchedPolicyPermissionException.prototype);
  }
}
