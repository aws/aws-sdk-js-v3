// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ServiceQuotasServiceException as __BaseException } from "./ServiceQuotasServiceException";

/**
 * <p>You do not have sufficient permission to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The action you attempted is not allowed unless Service Access with Service Quotas is enabled in
 *             your organization.</p>
 * @public
 */
export class AWSServiceAccessNotEnabledException extends __BaseException {
  readonly name = "AWSServiceAccessNotEnabledException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AWSServiceAccessNotEnabledException, __BaseException>) {
    super({
      name: "AWSServiceAccessNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AWSServiceAccessNotEnabledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You can't perform this action because a dependency does not have access.</p>
 * @public
 */
export class DependencyAccessDeniedException extends __BaseException {
  readonly name = "DependencyAccessDeniedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyAccessDeniedException, __BaseException>) {
    super({
      name: "DependencyAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyAccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Amazon Web Services account making this call is not a member of an organization.</p>
 * @public
 */
export class NoAvailableOrganizationException extends __BaseException {
  readonly name = "NoAvailableOrganizationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoAvailableOrganizationException, __BaseException>) {
    super({
      name: "NoAvailableOrganizationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoAvailableOrganizationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The organization that your Amazon Web Services account belongs to is not in All Features
 *             mode.</p>
 * @public
 */
export class OrganizationNotInAllFeaturesModeException extends __BaseException {
  readonly name = "OrganizationNotInAllFeaturesModeException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationNotInAllFeaturesModeException, __BaseException>) {
    super({
      name: "OrganizationNotInAllFeaturesModeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationNotInAllFeaturesModeException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Something went wrong.</p>
 * @public
 */
export class ServiceException extends __BaseException {
  readonly name = "ServiceException" as const;
  readonly $fault = "server" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceException, __BaseException>) {
    super({
      name: "ServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The Service Quotas template is not available in this Amazon Web Services Region.</p>
 * @public
 */
export class TemplatesNotAvailableInRegionException extends __BaseException {
  readonly name = "TemplatesNotAvailableInRegionException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TemplatesNotAvailableInRegionException, __BaseException>) {
    super({
      name: "TemplatesNotAvailableInRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TemplatesNotAvailableInRegionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Due to throttling, the request was denied. Slow down the rate of request calls, or
 *             request an increase for this quota.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Invalid input was provided.</p>
 * @public
 */
export class IllegalArgumentException extends __BaseException {
  readonly name = "IllegalArgumentException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalArgumentException, __BaseException>) {
    super({
      name: "IllegalArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalArgumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource is in an invalid state.</p>
 * @public
 */
export class InvalidResourceStateException extends __BaseException {
  readonly name = "InvalidResourceStateException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource does not exist.</p>
 * @public
 */
export class NoSuchResourceException extends __BaseException {
  readonly name = "NoSuchResourceException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchResourceException, __BaseException>) {
    super({
      name: "NoSuchResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchResourceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The quota request template is not associated with your organization.</p>
 * @public
 */
export class ServiceQuotaTemplateNotInUseException extends __BaseException {
  readonly name = "ServiceQuotaTemplateNotInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaTemplateNotInUseException, __BaseException>) {
    super({
      name: "ServiceQuotaTemplateNotInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaTemplateNotInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Invalid input was provided.</p>
 * @public
 */
export class InvalidPaginationTokenException extends __BaseException {
  readonly name = "InvalidPaginationTokenException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPaginationTokenException, __BaseException>) {
    super({
      name: "InvalidPaginationTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPaginationTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You have exceeded your service quota. To perform the requested action, remove some of
 *             the relevant resources, or use Service Quotas to request a service quota increase.</p>
 * @public
 */
export class QuotaExceededException extends __BaseException {
  readonly name = "QuotaExceededException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QuotaExceededException, __BaseException>) {
    super({
      name: "QuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified tag is a reserved word and cannot be used.</p>
 * @public
 */
export class TagPolicyViolationException extends __BaseException {
  readonly name = "TagPolicyViolationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>You've exceeded the number of tags allowed for a resource. For more information, see
 *                 <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/sq-tagging.html#sq-tagging-restrictions">Tag
 *                 restrictions</a> in the <i>Service Quotas User Guide</i>.</p>
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
