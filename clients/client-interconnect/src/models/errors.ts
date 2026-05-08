// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { InterconnectServiceException as __BaseException } from "./InterconnectServiceException";

/**
 * <p>The calling principal is not allowed to access the specified resource, or the resource does not exist.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The request was denied due to incorrect client supplied parameters.</p>
 * @public
 */
export class InterconnectClientException extends __BaseException {
  readonly name = "InterconnectClientException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InterconnectClientException, __BaseException>) {
    super({
      name: "InterconnectClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InterconnectClientException.prototype);
  }
}

/**
 * <p>The request resulted in an exception internal to the service.</p>
 * @public
 */
export class InterconnectServerException extends __BaseException {
  readonly name = "InterconnectServerException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InterconnectServerException, __BaseException>) {
    super({
      name: "InterconnectServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InterconnectServerException.prototype);
  }
}

/**
 * <p>The input fails to satisfy the constraints specified.</p>
 * @public
 */
export class InterconnectValidationException extends __BaseException {
  readonly name = "InterconnectValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InterconnectValidationException, __BaseException>) {
    super({
      name: "InterconnectValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InterconnectValidationException.prototype);
  }
}

/**
 * <p>The request specifies a resource that does not exist on the server.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>The requested operation would result in the calling principal exceeding their allotted quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name = "ServiceQuotaExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
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
