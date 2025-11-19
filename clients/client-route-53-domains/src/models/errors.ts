// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { Route53DomainsServiceException as __BaseException } from "./Route53DomainsServiceException";

/**
 * <p>The number of domains has exceeded the allowed threshold for the account.</p>
 * @public
 */
export class DomainLimitExceeded extends __BaseException {
  readonly name = "DomainLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DomainLimitExceeded, __BaseException>) {
    super({
      name: "DomainLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DomainLimitExceeded.prototype);
  }
}

/**
 * <p>The requested item is not acceptable. For example, for APIs that accept a domain name,
 * 			the request might specify a domain name that doesn't belong to the account that
 * 			submitted the request. For <code>AcceptDomainTransferFromAnotherAwsAccount</code>, the
 * 			password might be invalid.</p>
 * @public
 */
export class InvalidInput extends __BaseException {
  readonly name = "InvalidInput" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInput, __BaseException>) {
    super({
      name: "InvalidInput",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInput.prototype);
  }
}

/**
 * <p>The number of operations or jobs running exceeded the allowed threshold for the
 * 			account.</p>
 * @public
 */
export class OperationLimitExceeded extends __BaseException {
  readonly name = "OperationLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationLimitExceeded, __BaseException>) {
    super({
      name: "OperationLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationLimitExceeded.prototype);
  }
}

/**
 * <p>Amazon Route 53 does not support this top-level domain (TLD).</p>
 * @public
 */
export class UnsupportedTLD extends __BaseException {
  readonly name = "UnsupportedTLD" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedTLD, __BaseException>) {
    super({
      name: "UnsupportedTLD",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedTLD.prototype);
  }
}

/**
 * <p> This error is returned if you call <code>AssociateDelegationSignerToDomain</code>
 * 			when the specified domain has reached the maximum number of DS records. You can't add
 * 			any additional DS records unless you delete an existing one first. </p>
 * @public
 */
export class DnssecLimitExceeded extends __BaseException {
  readonly name = "DnssecLimitExceeded" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DnssecLimitExceeded, __BaseException>) {
    super({
      name: "DnssecLimitExceeded",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DnssecLimitExceeded.prototype);
  }
}

/**
 * <p>The request is already in progress for the domain.</p>
 * @public
 */
export class DuplicateRequest extends __BaseException {
  readonly name = "DuplicateRequest" as const;
  readonly $fault = "client" as const;
  /**
   * <p>ID of the request operation.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateRequest, __BaseException>) {
    super({
      name: "DuplicateRequest",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateRequest.prototype);
    this.requestId = opts.requestId;
  }
}

/**
 * <p>The top-level domain does not support this operation.</p>
 * @public
 */
export class TLDRulesViolation extends __BaseException {
  readonly name = "TLDRulesViolation" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TLDRulesViolation, __BaseException>) {
    super({
      name: "TLDRulesViolation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TLDRulesViolation.prototype);
  }
}
