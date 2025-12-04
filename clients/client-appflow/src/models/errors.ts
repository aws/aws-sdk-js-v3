// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AppflowServiceException as __BaseException } from "./AppflowServiceException";

/**
 * <p>AppFlow/Requester has invalid or missing permissions.</p>
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
 * <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name = "InternalServerException" as const;
  readonly $fault = "server" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
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
 * <p>API calls have exceeded the maximum allowed API request rate per account and per Region.
 *     </p>
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
 * <p> The request has invalid or missing parameters. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name = "ValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
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
 * <p> An error occurred when authenticating with the connector endpoint. </p>
 * @public
 */
export class ConnectorAuthenticationException extends __BaseException {
  readonly name = "ConnectorAuthenticationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConnectorAuthenticationException, __BaseException>) {
    super({
      name: "ConnectorAuthenticationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConnectorAuthenticationException.prototype);
  }
}

/**
 * <p> An error occurred when retrieving data from the connector endpoint. </p>
 * @public
 */
export class ConnectorServerException extends __BaseException {
  readonly name = "ConnectorServerException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConnectorServerException, __BaseException>) {
    super({
      name: "ConnectorServerException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConnectorServerException.prototype);
  }
}

/**
 * <p> The request would cause a service quota (such as the number of flows) to be exceeded.
 *     </p>
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
 * <p> The requested operation is not supported for the current flow. </p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name = "UnsupportedOperationException" as const;
  readonly $fault = "client" as const;
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
  }
}
