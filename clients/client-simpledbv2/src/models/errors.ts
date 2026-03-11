// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SimpleDBv2ServiceException as __BaseException } from "./SimpleDBv2ServiceException";

/**
 * Indicates a conflict with one or more parameters of the request.
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * The specified parameter value is not valid.
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValueException, __BaseException>) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValueException.prototype);
  }
}

/**
 * Export with specified ARN does not exist.
 * @public
 */
export class NoSuchExportException extends __BaseException {
  readonly name = "NoSuchExportException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchExportException, __BaseException>) {
    super({
      name: "NoSuchExportException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchExportException.prototype);
  }
}

/**
 * The specified next token is not valid.
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
 * Parameters that must not be used together were used together in the request.
 * @public
 */
export class InvalidParameterCombinationException extends __BaseException {
  readonly name = "InvalidParameterCombinationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterCombinationException, __BaseException>) {
    super({
      name: "InvalidParameterCombinationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterCombinationException.prototype);
  }
}

/**
 * The specified domain does not exist.
 * @public
 */
export class NoSuchDomainException extends __BaseException {
  readonly name = "NoSuchDomainException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoSuchDomainException, __BaseException>) {
    super({
      name: "NoSuchDomainException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoSuchDomainException.prototype);
  }
}

/**
 * Cannot start export as export quota limit was exceeded
 * @public
 */
export class NumberExportsLimitExceeded extends __BaseException {
  readonly name = "NumberExportsLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NumberExportsLimitExceeded, __BaseException>) {
    super({
      name: "NumberExportsLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NumberExportsLimitExceeded.prototype);
  }
}
