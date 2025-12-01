// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { WorkMailServiceException as __BaseException } from "./WorkMailServiceException";

/**
 * <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 * @public
 */
export class EntityNotFoundException extends __BaseException {
  readonly name = "EntityNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityNotFoundException, __BaseException>) {
    super({
      name: "EntityNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You are performing an operation on a user, group, or resource that isn't in the
 *          expected state, such as trying to delete an active user.</p>
 * @public
 */
export class EntityStateException extends __BaseException {
  readonly name = "EntityStateException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityStateException, __BaseException>) {
    super({
      name: "EntityStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of the input parameters don't match the service's restrictions.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 * @public
 */
export class OrganizationNotFoundException extends __BaseException {
  readonly name = "OrganizationNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationNotFoundException, __BaseException>) {
    super({
      name: "OrganizationNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 * @public
 */
export class OrganizationStateException extends __BaseException {
  readonly name = "OrganizationStateException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OrganizationStateException, __BaseException>) {
    super({
      name: "OrganizationStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OrganizationStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You can't perform a write operation against a read-only directory.</p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name = "UnsupportedOperationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
 * @public
 */
export class DirectoryServiceAuthenticationFailedException extends __BaseException {
  readonly name = "DirectoryServiceAuthenticationFailedException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryServiceAuthenticationFailedException, __BaseException>) {
    super({
      name: "DirectoryServiceAuthenticationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryServiceAuthenticationFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The directory is unavailable. It might be located in another Region or deleted.</p>
 * @public
 */
export class DirectoryUnavailableException extends __BaseException {
  readonly name = "DirectoryUnavailableException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryUnavailableException, __BaseException>) {
    super({
      name: "DirectoryUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource cannot be found.</p>
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
 * <p>The email address that you're trying to assign is already created for a different
 *          user, group, or resource.</p>
 * @public
 */
export class EmailAddressInUseException extends __BaseException {
  readonly name = "EmailAddressInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EmailAddressInUseException, __BaseException>) {
    super({
      name: "EmailAddressInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EmailAddressInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request exceeds the limit of the resource.</p>
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
 * <p>The domain specified is not found in your organization.</p>
 * @public
 */
export class MailDomainNotFoundException extends __BaseException {
  readonly name = "MailDomainNotFoundException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MailDomainNotFoundException, __BaseException>) {
    super({
      name: "MailDomainNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MailDomainNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>After a domain has been added to the organization, it must be verified. The domain is
 *          not yet verified.</p>
 * @public
 */
export class MailDomainStateException extends __BaseException {
  readonly name = "MailDomainStateException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MailDomainStateException, __BaseException>) {
    super({
      name: "MailDomainStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MailDomainStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The user, group, or resource name isn't unique in WorkMail.</p>
 * @public
 */
export class NameAvailabilityException extends __BaseException {
  readonly name = "NameAvailabilityException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NameAvailabilityException, __BaseException>) {
    super({
      name: "NameAvailabilityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NameAvailabilityException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>This user, group, or resource name is not allowed in WorkMail.</p>
 * @public
 */
export class ReservedNameException extends __BaseException {
  readonly name = "ReservedNameException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReservedNameException, __BaseException>) {
    super({
      name: "ReservedNameException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReservedNameException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The directory is already in use by another WorkMail organization in the same account and Region.</p>
 * @public
 */
export class DirectoryInUseException extends __BaseException {
  readonly name = "DirectoryInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DirectoryInUseException, __BaseException>) {
    super({
      name: "DirectoryInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DirectoryInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The supplied password doesn't match the minimum security constraints, such as length
 *          or use of special characters.</p>
 * @public
 */
export class InvalidPasswordException extends __BaseException {
  readonly name = "InvalidPasswordException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPasswordException, __BaseException>) {
    super({
      name: "InvalidPasswordException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPasswordException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>You SES configuration has customizations that WorkMail cannot save. The error message lists the invalid setting. For examples of invalid settings, refer to
 *          <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRule.html">CreateReceiptRule</a>.</p>
 * @public
 */
export class InvalidCustomSesConfigurationException extends __BaseException {
  readonly name = "InvalidCustomSesConfigurationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCustomSesConfigurationException, __BaseException>) {
    super({
      name: "InvalidCustomSesConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCustomSesConfigurationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The domain you're trying to change is in use by another user or organization in your account. See the error message for details.</p>
 * @public
 */
export class MailDomainInUseException extends __BaseException {
  readonly name = "MailDomainInUseException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MailDomainInUseException, __BaseException>) {
    super({
      name: "MailDomainInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MailDomainInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The user, group, or resource that you're trying to register is already
 *          registered.</p>
 * @public
 */
export class EntityAlreadyRegisteredException extends __BaseException {
  readonly name = "EntityAlreadyRegisteredException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EntityAlreadyRegisteredException, __BaseException>) {
    super({
      name: "EntityAlreadyRegisteredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EntityAlreadyRegisteredException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The configuration for a resource isn't valid. A resource must either be able to
 *          auto-respond to requests or have at least one delegate associated that can do so on its
 *          behalf.</p>
 * @public
 */
export class InvalidConfigurationException extends __BaseException {
  readonly name = "InvalidConfigurationException" as const;
  readonly $fault = "client" as const;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidConfigurationException, __BaseException>) {
    super({
      name: "InvalidConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidConfigurationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource can have up to 50 user-applied tags.</p>
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
