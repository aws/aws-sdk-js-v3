// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { NeptunedataServiceException as __BaseException } from "./NeptunedataServiceException";

/**
 * <p>Raised in case of an authentication or authorization failure.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name = "AccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
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
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a request is submitted that cannot be processed.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name = "BadRequestException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the bad request.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a request timed out in the client.</p>
 * @public
 */
export class ClientTimeoutException extends __BaseException {
  readonly name = "ClientTimeoutException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClientTimeoutException, __BaseException>) {
    super({
      name: "ClientTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClientTimeoutException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a request attempts to modify data that is concurrently being modified by another process.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a value in a request field did not satisfy required constraints.</p>
 * @public
 */
export class ConstraintViolationException extends __BaseException {
  readonly name = "ConstraintViolationException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConstraintViolationException, __BaseException>) {
    super({
      name: "ConstraintViolationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConstraintViolationException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a request fails.</p>
 * @public
 */
export class FailureByQueryException extends __BaseException {
  readonly name = "FailureByQueryException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FailureByQueryException, __BaseException>) {
    super({
      name: "FailureByQueryException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, FailureByQueryException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when an argument in a request is not supported.</p>
 * @public
 */
export class IllegalArgumentException extends __BaseException {
  readonly name = "IllegalArgumentException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
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
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when an argument in a request has an invalid value.</p>
 * @public
 */
export class InvalidArgumentException extends __BaseException {
  readonly name = "InvalidArgumentException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a parameter value is not valid.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request that includes an invalid parameter.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
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
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a required parameter is missing.</p>
 * @public
 */
export class MissingParameterException extends __BaseException {
  readonly name = "MissingParameterException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in which the parameter is missing.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MissingParameterException, __BaseException>) {
    super({
      name: "MissingParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MissingParameterException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a parsing issue is encountered.</p>
 * @public
 */
export class ParsingException extends __BaseException {
  readonly name = "ParsingException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ParsingException, __BaseException>) {
    super({
      name: "ParsingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ParsingException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a precondition for processing a request is not satisfied.</p>
 * @public
 */
export class PreconditionsFailedException extends __BaseException {
  readonly name = "PreconditionsFailedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionsFailedException, __BaseException>) {
    super({
      name: "PreconditionsFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionsFailedException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when the an operation exceeds the time limit allowed for it.</p>
 * @public
 */
export class TimeLimitExceededException extends __BaseException {
  readonly name = "TimeLimitExceededException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request that could not be processed for this reason.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TimeLimitExceededException, __BaseException>) {
    super({
      name: "TimeLimitExceededException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, TimeLimitExceededException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when the number of requests being processed exceeds the limit.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request that could not be processed for this reason.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
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
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name = "UnsupportedOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
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
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a specified bulk-load job ID cannot be found.</p>
 * @public
 */
export class BulkLoadIdNotFoundException extends __BaseException {
  readonly name = "BulkLoadIdNotFoundException" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The bulk-load job ID that could not be found.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BulkLoadIdNotFoundException, __BaseException>) {
    super({
      name: "BulkLoadIdNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BulkLoadIdNotFoundException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when the processing of the request failed unexpectedly.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name = "InternalFailureException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when access is denied to a specified load URL.</p>
 * @public
 */
export class LoadUrlAccessDeniedException extends __BaseException {
  readonly name = "LoadUrlAccessDeniedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LoadUrlAccessDeniedException, __BaseException>) {
    super({
      name: "LoadUrlAccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LoadUrlAccessDeniedException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a specified machine-learning resource could not be found.</p>
 * @public
 */
export class MLResourceNotFoundException extends __BaseException {
  readonly name = "MLResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MLResourceNotFoundException, __BaseException>) {
    super({
      name: "MLResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MLResourceNotFoundException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when invalid numerical data is encountered when servicing a request.</p>
 * @public
 */
export class InvalidNumericDataException extends __BaseException {
  readonly name = "InvalidNumericDataException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNumericDataException, __BaseException>) {
    super({
      name: "InvalidNumericDataException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNumericDataException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a request attempts to write to a read-only resource.</p>
 * @public
 */
export class ReadOnlyViolationException extends __BaseException {
  readonly name = "ReadOnlyViolationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in which the parameter is missing.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ReadOnlyViolationException, __BaseException>) {
    super({
      name: "ReadOnlyViolationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ReadOnlyViolationException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when statistics needed to satisfy a request are not available.</p>
 * @public
 */
export class StatisticsNotAvailableException extends __BaseException {
  readonly name = "StatisticsNotAvailableException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StatisticsNotAvailableException, __BaseException>) {
    super({
      name: "StatisticsNotAvailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StatisticsNotAvailableException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when the HTTP method used by a request is not supported by the endpoint being used.</p>
 * @public
 */
export class MethodNotAllowedException extends __BaseException {
  readonly name = "MethodNotAllowedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MethodNotAllowedException, __BaseException>) {
    super({
      name: "MethodNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MethodNotAllowedException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when the server shuts down while processing a request.</p>
 * @public
 */
export class ServerShutdownException extends __BaseException {
  readonly name = "ServerShutdownException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerShutdownException, __BaseException>) {
    super({
      name: "ServerShutdownException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerShutdownException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a user cancelled a request.</p>
 * @public
 */
export class CancelledByUserException extends __BaseException {
  readonly name = "CancelledByUserException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CancelledByUserException, __BaseException>) {
    super({
      name: "CancelledByUserException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, CancelledByUserException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a query is submitted that is syntactically incorrect or does not pass additional validation.</p>
 * @public
 */
export class MalformedQueryException extends __BaseException {
  readonly name = "MalformedQueryException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the malformed query request.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedQueryException, __BaseException>) {
    super({
      name: "MalformedQueryException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedQueryException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a request fails because of insufficient memory resources. The request can be retried.</p>
 * @public
 */
export class MemoryLimitExceededException extends __BaseException {
  readonly name = "MemoryLimitExceededException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request that failed.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MemoryLimitExceededException, __BaseException>) {
    super({
      name: "MemoryLimitExceededException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, MemoryLimitExceededException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when the number of active queries exceeds what the server can process. The query in question can be retried when the system is less busy.</p>
 * @public
 */
export class QueryLimitExceededException extends __BaseException {
  readonly name = "QueryLimitExceededException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request which exceeded the limit.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueryLimitExceededException, __BaseException>) {
    super({
      name: "QueryLimitExceededException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, QueryLimitExceededException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when the size of a query exceeds the system limit.</p>
 * @public
 */
export class QueryLimitException extends __BaseException {
  readonly name = "QueryLimitException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request that exceeded the limit.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueryLimitException, __BaseException>) {
    super({
      name: "QueryLimitException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueryLimitException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when the body of a query is too large.</p>
 * @public
 */
export class QueryTooLargeException extends __BaseException {
  readonly name = "QueryTooLargeException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request that is too large.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueryTooLargeException, __BaseException>) {
    super({
      name: "QueryTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueryTooLargeException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when a request attempts to access an stream that has expired.</p>
 * @public
 */
export class ExpiredStreamException extends __BaseException {
  readonly name = "ExpiredStreamException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredStreamException, __BaseException>) {
    super({
      name: "ExpiredStreamException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredStreamException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when stream records requested by a query cannot be found.</p>
 * @public
 */
export class StreamRecordsNotFoundException extends __BaseException {
  readonly name = "StreamRecordsNotFoundException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<StreamRecordsNotFoundException, __BaseException>) {
    super({
      name: "StreamRecordsNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, StreamRecordsNotFoundException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when the rate of requests exceeds the maximum throughput. Requests can be retried after encountering this exception.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name = "ThrottlingException" as const;
  readonly $fault = "server" as const;
  $retryable = {};
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request that could not be processed for this reason.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}

/**
 * <p>Raised when there is a problem accessing Amazon S3.</p>
 * @public
 */
export class S3Exception extends __BaseException {
  readonly name = "S3Exception" as const;
  readonly $fault = "client" as const;
  $retryable = {};
  /**
   * <p>A detailed message describing the problem.</p>
   * @public
   */
  detailedMessage: string | undefined;

  /**
   * <p>The ID of the request in question.</p>
   * @public
   */
  requestId: string | undefined;

  /**
   * <p>The HTTP status code returned with the exception.</p>
   * @public
   */
  code: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<S3Exception, __BaseException>) {
    super({
      name: "S3Exception",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, S3Exception.prototype);
    this.detailedMessage = opts.detailedMessage;
    this.requestId = opts.requestId;
    this.code = opts.code;
  }
}
