// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/core/client";

import { CloudWatchLogsServiceException as __BaseException } from "./CloudWatchLogsServiceException";
import type { QueryCompileError } from "./models_0";

/**
 * You don't have sufficient permissions to perform this action.
 *
 * @public
 */
export class AccessDeniedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#AccessDeniedException";
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
 * A parameter is specified incorrectly.
 *
 * @public
 */
export class InvalidParameterException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#InvalidParameterException";
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
 * Multiple concurrent requests to update the same resource were in conflict.
 *
 * @public
 */
export class OperationAbortedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#OperationAbortedException";
  readonly name = "OperationAbortedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationAbortedException, __BaseException>) {
    super({
      name: "OperationAbortedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationAbortedException.prototype);
  }
}

/**
 * The specified resource does not exist.
 *
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#ResourceNotFoundException";
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
 * The service cannot complete the request.
 *
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#ServiceUnavailableException";
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
 * An internal server error occurred while processing the request. This exception is returned when the service encounters an unexpected condition that prevents it from fulfilling the request.
 *
 * @public
 */
export class InternalServerException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#InternalServerException";
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
 * The request was throttled because of quota limits.
 *
 * @public
 */
export class ThrottlingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#ThrottlingException";
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
 * One of the parameters for the request is not valid.
 *
 * @public
 */
export class ValidationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#ValidationException";
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
 * The operation is not valid on the specified resource.
 *
 * @public
 */
export class InvalidOperationException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#InvalidOperationException";
  readonly name = "InvalidOperationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOperationException, __BaseException>) {
    super({
      name: "InvalidOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOperationException.prototype);
  }
}

/**
 * This operation attempted to create a resource that already exists.
 *
 * @public
 */
export class ConflictException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#ConflictException";
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
 * This request exceeds a service quota.
 *
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#ServiceQuotaExceededException";
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
 * You have reached the maximum number of resources that can be created.
 *
 * @public
 */
export class LimitExceededException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#LimitExceededException";
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * The specified resource already exists.
 *
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException";
  readonly name = "ResourceAlreadyExistsException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * The event was already logged.
 *
 * > **Important:** `PutLogEvents` actions are now always accepted and never return `DataAlreadyAcceptedException` regardless of whether a given batch of log events has already been accepted.
 *
 * @public
 */
export class DataAlreadyAcceptedException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#DataAlreadyAcceptedException";
  readonly name = "DataAlreadyAcceptedException" as const;
  readonly $fault = "client" as const;
  expectedSequenceToken?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataAlreadyAcceptedException, __BaseException>) {
    super({
      name: "DataAlreadyAcceptedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataAlreadyAcceptedException.prototype);
    this.expectedSequenceToken = opts.expectedSequenceToken;
  }
}

/**
 * An internal error occurred during the streaming of log data. This exception is thrown when there's an issue with the internal streaming mechanism used by the GetLogObject operation.
 *
 * @public
 */
export class InternalStreamingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#InternalStreamingException";
  readonly name = "InternalStreamingException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalStreamingException, __BaseException>) {
    super({
      name: "InternalStreamingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalStreamingException.prototype);
  }
}

/**
 * The sequence token is not valid. You can get the correct sequence token in the `expectedSequenceToken` field in the `InvalidSequenceTokenException` message.
 *
 * > **Important:** `PutLogEvents` actions are now always accepted and never return `InvalidSequenceTokenException` regardless of receiving an invalid sequence token.
 *
 * @public
 */
export class InvalidSequenceTokenException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#InvalidSequenceTokenException";
  readonly name = "InvalidSequenceTokenException" as const;
  readonly $fault = "client" as const;
  expectedSequenceToken?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSequenceTokenException, __BaseException>) {
    super({
      name: "InvalidSequenceTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSequenceTokenException.prototype);
    this.expectedSequenceToken = opts.expectedSequenceToken;
  }
}

/**
 * The most likely cause is an Amazon Web Services access key ID or secret key that's not valid.
 *
 * @public
 */
export class UnrecognizedClientException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#UnrecognizedClientException";
  readonly name = "UnrecognizedClientException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnrecognizedClientException, __BaseException>) {
    super({
      name: "UnrecognizedClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnrecognizedClientException.prototype);
  }
}

/**
 * This exception is returned if an unknown error occurs during a Live Tail session.
 *
 * @public
 */
export class SessionStreamingException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#SessionStreamingException";
  readonly name = "SessionStreamingException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionStreamingException, __BaseException>) {
    super({
      name: "SessionStreamingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionStreamingException.prototype);
  }
}

/**
 * This exception is returned in a Live Tail stream when the Live Tail session times out. Live Tail sessions time out after three hours.
 *
 * @public
 */
export class SessionTimeoutException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#SessionTimeoutException";
  readonly name = "SessionTimeoutException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SessionTimeoutException, __BaseException>) {
    super({
      name: "SessionTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SessionTimeoutException.prototype);
  }
}

/**
 * The query string is not valid. Details about this error are displayed in a `QueryCompileError` object. For more information, see [QueryCompileError](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_QueryCompileError.html).
 *
 * For more information about valid query syntax, see [CloudWatch Logs Insights Query Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html).
 *
 * @public
 */
export class MalformedQueryException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#MalformedQueryException";
  readonly name = "MalformedQueryException" as const;
  readonly $fault = "client" as const;
  /**
   * Reserved.
   *
   * @public
   */
  queryCompileError?: QueryCompileError | undefined;

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
    this.queryCompileError = opts.queryCompileError;
  }
}

/**
 * A resource can have no more than 50 tags.
 *
 * @public
 */
export class TooManyTagsException extends __BaseException {
  public static readonly shapeId: string = "com.amazonaws.cloudwatchlogs#TooManyTagsException";
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
  /**
   * The name of the resource.
   *
   * @public
   */
  resourceName?: string | undefined;

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
    this.resourceName = opts.resourceName;
  }
}
