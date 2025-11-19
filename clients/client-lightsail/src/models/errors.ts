// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { LightsailServiceException as __BaseException } from "./LightsailServiceException";

/**
 * <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  docs?: string | undefined;
  tip?: string | undefined;
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
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}

/**
 * <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 * @public
 */
export class AccountSetupInProgressException extends __BaseException {
  readonly name = "AccountSetupInProgressException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  docs?: string | undefined;
  tip?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountSetupInProgressException, __BaseException>) {
    super({
      name: "AccountSetupInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountSetupInProgressException.prototype);
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}

/**
 * <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name = "InvalidInputException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  docs?: string | undefined;
  tip?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}

/**
 * <p>Lightsail throws this exception when it cannot find a resource.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name = "NotFoundException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  docs?: string | undefined;
  tip?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}

/**
 * <p>Lightsail throws this exception when an operation fails to execute.</p>
 * @public
 */
export class OperationFailureException extends __BaseException {
  readonly name = "OperationFailureException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  docs?: string | undefined;
  tip?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationFailureException, __BaseException>) {
    super({
      name: "OperationFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationFailureException.prototype);
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}

/**
 * <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
 * @public
 */
export class RegionSetupInProgressException extends __BaseException {
  readonly name = "RegionSetupInProgressException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  /**
   * <p>
   *             <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/understanding-regions-and-availability-zones-in-amazon-lightsail.html">Regions
   *       and Availability Zones for Lightsail</a>
   *          </p>
   * @public
   */
  docs?: string | undefined;

  /**
   * <p>Opt-in Regions typically take a few minutes to finish setting up before you can work with them. Wait a few minutes and try again.</p>
   * @public
   */
  tip?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RegionSetupInProgressException, __BaseException>) {
    super({
      name: "RegionSetupInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RegionSetupInProgressException.prototype);
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}

/**
 * <p>A general service exception.</p>
 * @public
 */
export class ServiceException extends __BaseException {
  readonly name = "ServiceException" as const;
  readonly $fault = "server" as const;
  code?: string | undefined;
  docs?: string | undefined;
  tip?: string | undefined;
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
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}

/**
 * <p>Lightsail throws this exception when the user has not been authenticated.</p>
 * @public
 */
export class UnauthenticatedException extends __BaseException {
  readonly name = "UnauthenticatedException" as const;
  readonly $fault = "client" as const;
  code?: string | undefined;
  docs?: string | undefined;
  tip?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthenticatedException, __BaseException>) {
    super({
      name: "UnauthenticatedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthenticatedException.prototype);
    this.code = opts.code;
    this.docs = opts.docs;
    this.tip = opts.tip;
  }
}
