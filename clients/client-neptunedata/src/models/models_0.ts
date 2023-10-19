// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

import { NeptunedataServiceException as __BaseException } from "./NeptunedataServiceException";

/**
 * @public
 * <p>Raised in case of an authentication or authorization failure.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * @enum
 */
export const Action = {
  INITIALIZE_RESET: "initiateDatabaseReset",
  PERFORM_RESET: "performDatabaseReset",
} as const;

/**
 * @public
 */
export type Action = (typeof Action)[keyof typeof Action];

/**
 * @public
 * <p>Raised when a request is submitted that cannot be processed.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the bad request.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 */
export interface CancelGremlinQueryInput {
  /**
   * @public
   * <p>The unique identifier that identifies the query to be canceled.</p>
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface CancelGremlinQueryOutput {
  /**
   * @public
   * <p>The status of the cancelation</p>
   */
  status?: string;
}

/**
 * @public
 * <p>Raised when a request timed out in the client.</p>
 */
export class ClientTimeoutException extends __BaseException {
  readonly name: "ClientTimeoutException" = "ClientTimeoutException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when a request attempts to modify data that is concurrently being
 *       modified by another process.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when a value in a request field did not satisfy required constraints.</p>
 */
export class ConstraintViolationException extends __BaseException {
  readonly name: "ConstraintViolationException" = "ConstraintViolationException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when a request fails.</p>
 */
export class FailureByQueryException extends __BaseException {
  readonly name: "FailureByQueryException" = "FailureByQueryException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when an argument in a request is not supported.</p>
 */
export class IllegalArgumentException extends __BaseException {
  readonly name: "IllegalArgumentException" = "IllegalArgumentException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when an argument in a request has an invalid value.</p>
 */
export class InvalidArgumentException extends __BaseException {
  readonly name: "InvalidArgumentException" = "InvalidArgumentException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when a parameter value is not valid.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request that includes an invalid parameter.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when a required parameter is missing.</p>
 */
export class MissingParameterException extends __BaseException {
  readonly name: "MissingParameterException" = "MissingParameterException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in which the parameter is missing.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when a parsing issue is encountered.</p>
 */
export class ParsingException extends __BaseException {
  readonly name: "ParsingException" = "ParsingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when a precondition for processing a request is not satisfied.</p>
 */
export class PreconditionsFailedException extends __BaseException {
  readonly name: "PreconditionsFailedException" = "PreconditionsFailedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when the an operation exceeds the time limit allowed for it.</p>
 */
export class TimeLimitExceededException extends __BaseException {
  readonly name: "TimeLimitExceededException" = "TimeLimitExceededException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request that could not be processed for this reason.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when the number of requests being processed exceeds the limit.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request that could not be processed for this reason.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when a specified bulk-load job ID cannot be found.</p>
 */
export class BulkLoadIdNotFoundException extends __BaseException {
  readonly name: "BulkLoadIdNotFoundException" = "BulkLoadIdNotFoundException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The bulk-load job ID that could not be found.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 */
export interface CancelLoaderJobInput {
  /**
   * @public
   * <p>The ID of the load job to be deleted.</p>
   */
  loadId: string | undefined;
}

/**
 * @public
 */
export interface CancelLoaderJobOutput {
  /**
   * @public
   * <p>The cancellation status.</p>
   */
  status?: string;
}

/**
 * @public
 * <p>Raised when the processing of the request failed unexpectedly.</p>
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when access is denied to a specified load URL.</p>
 */
export class LoadUrlAccessDeniedException extends __BaseException {
  readonly name: "LoadUrlAccessDeniedException" = "LoadUrlAccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 */
export interface CancelMLDataProcessingJobInput {
  /**
   * @public
   * <p>The unique identifier of the data-processing job.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role that provides Neptune access to SageMaker
   *     and Amazon S3 resources. This must be listed in your DB cluster
   *     parameter group or an error will occur.</p>
   */
  neptuneIamRoleArn?: string;

  /**
   * @public
   * <p>If set to <code>TRUE</code>, this flag specifies that all
   *       Neptune ML S3 artifacts should be deleted when the job is stopped.
   *       The default is <code>FALSE</code>.</p>
   */
  clean?: boolean;
}

/**
 * @public
 */
export interface CancelMLDataProcessingJobOutput {
  /**
   * @public
   * <p>The status of the cancellation request.</p>
   */
  status?: string;
}

/**
 * @public
 * <p>Raised when a specified machine-learning resource could not be found.</p>
 */
export class MLResourceNotFoundException extends __BaseException {
  readonly name: "MLResourceNotFoundException" = "MLResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 */
export interface CancelMLModelTrainingJobInput {
  /**
   * @public
   * <p>The unique identifier of the model-training job to be canceled.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role that provides Neptune access to SageMaker
   *       and Amazon S3 resources. This must be listed in your DB cluster
   *       parameter group or an error will occur.</p>
   */
  neptuneIamRoleArn?: string;

  /**
   * @public
   * <p>If set to <code>TRUE</code>, this flag specifies that all
   *     Amazon S3 artifacts should be deleted when the job is stopped.
   *     The default is <code>FALSE</code>.</p>
   */
  clean?: boolean;
}

/**
 * @public
 */
export interface CancelMLModelTrainingJobOutput {
  /**
   * @public
   * <p>The status of the cancellation.</p>
   */
  status?: string;
}

/**
 * @public
 */
export interface CancelMLModelTransformJobInput {
  /**
   * @public
   * <p>The unique ID of the model transform job to be canceled.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role that provides Neptune access to SageMaker
   *       and Amazon S3 resources. This must be listed in your DB cluster
   *       parameter group or an error will occur.</p>
   */
  neptuneIamRoleArn?: string;

  /**
   * @public
   * <p>If this flag is set to <code>TRUE</code>, all Neptune ML S3 artifacts
   *       should be deleted when the job is stopped. The default is <code>FALSE</code>.</p>
   */
  clean?: boolean;
}

/**
 * @public
 */
export interface CancelMLModelTransformJobOutput {
  /**
   * @public
   * <p>the status of the cancelation.</p>
   */
  status?: string;
}

/**
 * @public
 */
export interface CancelOpenCypherQueryInput {
  /**
   * @public
   * <p>The unique ID of the openCypher query to cancel.</p>
   */
  queryId: string | undefined;

  /**
   * @public
   * <p>If set to <code>TRUE</code>, causes the cancelation of the
   *       openCypher query to happen silently.</p>
   */
  silent?: boolean;
}

/**
 * @public
 */
export interface CancelOpenCypherQueryOutput {
  /**
   * @public
   * <p>The cancellation status of the openCypher query.</p>
   */
  status?: string;

  /**
   * @public
   * <p>The cancelation payload for the openCypher query.</p>
   */
  payload?: boolean;
}

/**
 * @public
 * <p>Raised when invalid numerical data is encountered when servicing a request.</p>
 */
export class InvalidNumericDataException extends __BaseException {
  readonly name: "InvalidNumericDataException" = "InvalidNumericDataException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 */
export interface CreateMLEndpointInput {
  /**
   * @public
   * <p>A unique identifier for the new inference endpoint. The default
   *       is an autogenerated timestamped name.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The job Id of the completed model-training job that has created the
   *       model that the inference endpoint will point to. You must supply either
   *       the <code>mlModelTrainingJobId</code> or the <code>mlModelTransformJobId</code>.</p>
   */
  mlModelTrainingJobId?: string;

  /**
   * @public
   * <p>The job Id of the completed model-transform job. You must supply
   *       either the <code>mlModelTrainingJobId</code> or the <code>mlModelTransformJobId</code>.</p>
   */
  mlModelTransformJobId?: string;

  /**
   * @public
   * <p>If set to <code>true</code>, <code>update</code> indicates that this
   *       is an update request. The default is <code>false</code>. You must supply
   *       either the <code>mlModelTrainingJobId</code> or the <code>mlModelTransformJobId</code>.</p>
   */
  update?: boolean;

  /**
   * @public
   * <p>The ARN of an IAM role providing Neptune access to SageMaker and
   *       Amazon S3 resources. This must be listed in your DB cluster parameter
   *       group or an error will be thrown.</p>
   */
  neptuneIamRoleArn?: string;

  /**
   * @public
   * <p>Model type for training. By default the Neptune ML model is
   *       automatically based on the <code>modelType</code> used in data processing,
   *       but you can specify a different model type here. The default is
   *       <code>rgcn</code> for heterogeneous graphs and <code>kge</code> for
   *       knowledge graphs. The only valid value for heterogeneous graphs is
   *       <code>rgcn</code>. Valid values for knowledge graphs are: <code>kge</code>,
   *       <code>transe</code>, <code>distmult</code>, and <code>rotate</code>.</p>
   */
  modelName?: string;

  /**
   * @public
   * <p>The type of Neptune ML instance to use for online servicing.
   *     The default is <code>ml.m5.xlarge</code>. Choosing the ML instance
   *     for an inference endpoint depends on the task type, the graph size,
   *     and your budget.</p>
   */
  instanceType?: string;

  /**
   * @public
   * <p>The minimum number of Amazon EC2 instances to deploy to an endpoint
   *       for prediction. The default is 1</p>
   */
  instanceCount?: number;

  /**
   * @public
   * <p>The Amazon Key Management Service (Amazon KMS) key that SageMaker uses
   *       to encrypt data on the storage volume attached to the ML compute instances
   *       that run the training job. The default is None.</p>
   */
  volumeEncryptionKMSKey?: string;
}

/**
 * @public
 */
export interface CreateMLEndpointOutput {
  /**
   * @public
   * <p>The unique ID of the new inference endpoint.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The ARN for the new inference endpoint.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The endpoint creation time, in milliseconds.</p>
   */
  creationTimeInMillis?: number;
}

/**
 * @public
 */
export interface DeleteMLEndpointInput {
  /**
   * @public
   * <p>The unique identifier of the inference endpoint.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role providing Neptune access to SageMaker and
   *       Amazon S3 resources. This must be listed in your DB cluster parameter
   *       group or an error will be thrown.</p>
   */
  neptuneIamRoleArn?: string;

  /**
   * @public
   * <p>If this flag is set to <code>TRUE</code>, all Neptune ML S3 artifacts
   *       should be deleted when the job is stopped. The default is
   *       <code>FALSE</code>.</p>
   */
  clean?: boolean;
}

/**
 * @public
 */
export interface DeleteMLEndpointOutput {
  /**
   * @public
   * <p>The status of the cancellation.</p>
   */
  status?: string;
}

/**
 * @public
 * <p>The payload for DeleteStatistics.</p>
 */
export interface DeleteStatisticsValueMap {
  /**
   * @public
   * <p>The current status of the statistics.</p>
   */
  active?: boolean;

  /**
   * @public
   * <p>The ID of the statistics generation run that is currently occurring.</p>
   */
  statisticsId?: string;
}

/**
 * @public
 */
export interface DeletePropertygraphStatisticsOutput {
  /**
   * @public
   * <p>The HTTP response code: 200 if the delete was successful, or
   *       204 if there were no statistics to delete.</p>
   */
  statusCode?: number;

  /**
   * @public
   * <p>The cancel status.</p>
   */
  status?: string;

  /**
   * @public
   * <p>The deletion payload.</p>
   */
  payload?: DeleteStatisticsValueMap;
}

/**
 * @public
 * <p>Raised when a request attempts to write to a read-only resource.</p>
 */
export class ReadOnlyViolationException extends __BaseException {
  readonly name: "ReadOnlyViolationException" = "ReadOnlyViolationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in which the parameter is missing.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when statistics needed to satisfy a request are not available.</p>
 */
export class StatisticsNotAvailableException extends __BaseException {
  readonly name: "StatisticsNotAvailableException" = "StatisticsNotAvailableException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 */
export interface DeleteSparqlStatisticsOutput {
  /**
   * @public
   * <p>The HTTP response code: 200 if the delete was successful, or
   *       204 if there were no statistics to delete.</p>
   */
  statusCode?: number;

  /**
   * @public
   * <p>The cancel status.</p>
   */
  status?: string;

  /**
   * @public
   * <p>The deletion payload.</p>
   */
  payload?: DeleteStatisticsValueMap;
}

/**
 * @public
 */
export interface ExecuteFastResetInput {
  /**
   * @public
   * <p>The fast reset action. One of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>initiateDatabaseReset</code>
   *                   </b>   –
   *           This action generates a unique token needed to actually perform the
   *           fast reset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>performDatabaseReset</code>
   *                   </b>   –
   *           This action uses the token generated by the <code>initiateDatabaseReset</code> action
   *           to actually perform the fast reset.</p>
   *                <p/>
   *             </li>
   *          </ul>
   */
  action: Action | undefined;

  /**
   * @public
   * <p>The fast-reset token to initiate the reset.</p>
   */
  token?: string;
}

/**
 * @public
 * <p>A structure containing the fast reset token used to initiate
 *       a fast reset.</p>
 */
export interface FastResetToken {
  /**
   * @public
   * <p>A UUID generated by the database in the <code>initiateDatabaseReset</code> action,
   *       and then consumed by the <code>performDatabaseReset</code> to reset the database.</p>
   */
  token?: string;
}

/**
 * @public
 */
export interface ExecuteFastResetOutput {
  /**
   * @public
   * <p>The <code>status</code> is only returned for the <code>performDatabaseReset</code>
   *       action, and indicates whether or not the fast reset rquest is accepted.</p>
   */
  status: string | undefined;

  /**
   * @public
   * <p>The <code>payload</code> is only returned by the <code>initiateDatabaseReset</code>
   *       action, and contains the unique token to use with the <code>performDatabaseReset</code>
   *       action to make the reset occur.</p>
   */
  payload?: FastResetToken;
}

/**
 * @public
 * <p>Raised when the HTTP method used by a request is not supported by the endpoint
 *       being used.</p>
 */
export class MethodNotAllowedException extends __BaseException {
  readonly name: "MethodNotAllowedException" = "MethodNotAllowedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when the server shuts down while processing a request.</p>
 */
export class ServerShutdownException extends __BaseException {
  readonly name: "ServerShutdownException" = "ServerShutdownException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when a user cancelled a request.</p>
 */
export class CancelledByUserException extends __BaseException {
  readonly name: "CancelledByUserException" = "CancelledByUserException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 */
export interface ExecuteGremlinExplainQueryInput {
  /**
   * @public
   * <p>The Gremlin explain query string.</p>
   */
  gremlinQuery: string | undefined;
}

/**
 * @public
 */
export interface ExecuteGremlinExplainQueryOutput {
  /**
   * @public
   * <p>A text blob containing the Gremlin explain result, as described
   *       in <a href="https://docs.aws.amazon.com/neptune/latest/userguide/gremlin-traversal-tuning.html">Tuning
   *       Gremlin queries</a>.</p>
   */
  output?: Uint8Array;
}

/**
 * @public
 * <p>Raised when a query is submitted that is syntactically incorrect or does not
 *       pass additional validation.</p>
 */
export class MalformedQueryException extends __BaseException {
  readonly name: "MalformedQueryException" = "MalformedQueryException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the malformed query request.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when a request fails because of insufficient memory resources. The
 *       request can be retried.</p>
 */
export class MemoryLimitExceededException extends __BaseException {
  readonly name: "MemoryLimitExceededException" = "MemoryLimitExceededException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request that failed.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when the number of active queries exceeds what the server can process.
 *       The query in question can be retried when the system is less busy.</p>
 */
export class QueryLimitExceededException extends __BaseException {
  readonly name: "QueryLimitExceededException" = "QueryLimitExceededException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request which exceeded the limit.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when the size of a query exceeds the system limit.</p>
 */
export class QueryLimitException extends __BaseException {
  readonly name: "QueryLimitException" = "QueryLimitException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request that exceeded the limit.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when the body of a query is too large.</p>
 */
export class QueryTooLargeException extends __BaseException {
  readonly name: "QueryTooLargeException" = "QueryTooLargeException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request that is too large.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 */
export interface ExecuteGremlinProfileQueryInput {
  /**
   * @public
   * <p>The Gremlin query string to profile.</p>
   */
  gremlinQuery: string | undefined;

  /**
   * @public
   * <p>If this flag is set to <code>TRUE</code>, the query results are
   *       gathered and displayed as part of the profile report.
   *       If <code>FALSE</code>, only the result count is displayed.</p>
   */
  results?: boolean;

  /**
   * @public
   * <p>If non-zero, causes the results string to be truncated at that
   *       number of characters. If set to zero, the string contains all the results.</p>
   */
  chop?: number;

  /**
   * @public
   * <p>If non-null, the gathered results are returned in a serialized response
   *       message in the format specified by this parameter. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/gremlin-profile-api.html">Gremlin profile
   *       API in Neptune</a> for more information.</p>
   */
  serializer?: string;

  /**
   * @public
   * <p>If this flag is set to <code>TRUE</code>, the results include a
   *       detailed report of all index operations that took place during query
   *       execution and serialization.</p>
   */
  indexOps?: boolean;
}

/**
 * @public
 */
export interface ExecuteGremlinProfileQueryOutput {
  /**
   * @public
   * <p>A text blob containing the Gremlin Profile result. See
   *       <a href="https://docs.aws.amazon.com/neptune/latest/userguide/gremlin-profile-api.html">Gremlin
   *       profile API in Neptune</a> for details.</p>
   */
  output?: Uint8Array;
}

/**
 * @public
 */
export interface ExecuteGremlinQueryInput {
  /**
   * @public
   * <p>Using this API, you can run Gremlin queries in string format
   *       much as you can using the HTTP endpoint. The interface is
   *       compatible with whatever Gremlin version your DB cluster is using
   *       (see the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/access-graph-gremlin-client.html#best-practices-gremlin-java-latest">Tinkerpop
   *       client section</a> to determine which Gremlin releases your
   *       engine version supports).</p>
   */
  gremlinQuery: string | undefined;

  /**
   * @public
   * <p>If non-null, the query results are returned in a serialized response
   *     message in the format specified by this parameter. See the <a href="https://tinkerpop.apache.org/docs/current/reference/#_graphson">GraphSON</a>
   *     section in the TinkerPop documentation for a list of the formats that
   *     are currently supported.</p>
   */
  serializer?: string;
}

/**
 * @public
 * <p>Contains status components of a Gremlin query.</p>
 */
export interface GremlinQueryStatusAttributes {
  /**
   * @public
   * <p>The status message.</p>
   */
  message?: string;

  /**
   * @public
   * <p>The HTTP response code returned fro the Gremlin query request..</p>
   */
  code?: number;

  /**
   * @public
   * <p>Attributes of the Gremlin query status.</p>
   */
  attributes?: __DocumentType;
}

/**
 * @public
 */
export interface ExecuteGremlinQueryOutput {
  /**
   * @public
   * <p>The unique identifier of the Gremlin query.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>The status of the Gremlin query.</p>
   */
  status?: GremlinQueryStatusAttributes;

  /**
   * @public
   * <p>The Gremlin query output from the server.</p>
   */
  result?: __DocumentType;

  /**
   * @public
   * <p>Metadata about the Gremlin query.</p>
   */
  meta?: __DocumentType;
}

/**
 * @public
 * @enum
 */
export const OpenCypherExplainMode = {
  DETAILS: "details",
  DYNAMIC: "dynamic",
  STATIC: "static",
} as const;

/**
 * @public
 */
export type OpenCypherExplainMode = (typeof OpenCypherExplainMode)[keyof typeof OpenCypherExplainMode];

/**
 * @public
 */
export interface ExecuteOpenCypherExplainQueryInput {
  /**
   * @public
   * <p>The openCypher query string.</p>
   */
  openCypherQuery: string | undefined;

  /**
   * @public
   * <p>The openCypher query parameters.</p>
   */
  parameters?: string;

  /**
   * @public
   * <p>The openCypher <code>explain</code> mode. Can be one of:
   *       <code>static</code>, <code>dynamic</code>, or <code>details</code>.</p>
   */
  explainMode: OpenCypherExplainMode | undefined;
}

/**
 * @public
 */
export interface ExecuteOpenCypherExplainQueryOutput {
  /**
   * @public
   * <p>A text blob containing the openCypher <code>explain</code> results.</p>
   */
  results: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ExecuteOpenCypherQueryInput {
  /**
   * @public
   * <p>The openCypher query string to be executed.</p>
   */
  openCypherQuery: string | undefined;

  /**
   * @public
   * <p>The openCypher query parameters for query execution.
   *       See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/opencypher-parameterized-queries.html">Examples
   *       of openCypher parameterized queries</a> for more information.</p>
   */
  parameters?: string;
}

/**
 * @public
 */
export interface ExecuteOpenCypherQueryOutput {
  /**
   * @public
   * <p>The openCypherquery results.</p>
   */
  results: __DocumentType | undefined;
}

/**
 * @public
 * <p>Structure for expressing the query language version.</p>
 */
export interface QueryLanguageVersion {
  /**
   * @public
   * <p>The version of the query language.</p>
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface GetEngineStatusOutput {
  /**
   * @public
   * <p>Set to <code>healthy</code> if the instance is not experiencing problems.
   *       If the instance is recovering from a crash or from being rebooted and there
   *       are active transactions running from the latest server shutdown, status is set
   *       to <code>recovery</code>.</p>
   */
  status?: string;

  /**
   * @public
   * <p>Set to the UTC time at which the current server process started.</p>
   */
  startTime?: string;

  /**
   * @public
   * <p>Set to the Neptune engine version running on your DB cluster.
   *     If this engine version has been manually patched since it was released,
   *     the version number is prefixed by <code>Patch-</code>.</p>
   */
  dbEngineVersion?: string;

  /**
   * @public
   * <p>Set to <code>reader</code> if the instance is a read-replica,
   *       or to <code>writer</code> if the instance is the primary instance.</p>
   */
  role?: string;

  /**
   * @public
   * <p>Set to <code>enabled</code> if the DFE engine is fully enabled,
   *       or to <code>viaQueryHint</code> (the default) if the DFE engine is
   *       only used with queries that have the <code>useDFE</code> query hint
   *       set to <code>true</code>.</p>
   */
  dfeQueryEngine?: string;

  /**
   * @public
   * <p>Contains information about the Gremlin query language available
   *       on your cluster. Specifically, it contains a version field that specifies
   *       the current TinkerPop version being used by the engine.</p>
   */
  gremlin?: QueryLanguageVersion;

  /**
   * @public
   * <p>Contains information about the SPARQL query language available
   *       on your cluster. Specifically, it contains a version field that
   *       specifies the current SPARQL version being used by the engine.</p>
   */
  sparql?: QueryLanguageVersion;

  /**
   * @public
   * <p>Contains information about the openCypher query language available
   *       on your cluster. Specifically, it contains a version field that
   *       specifies the current operCypher version being used by the engine.</p>
   */
  opencypher?: QueryLanguageVersion;

  /**
   * @public
   * <p>Contains Lab Mode settings being used by the engine.</p>
   */
  labMode?: Record<string, string>;

  /**
   * @public
   * <p>If there are transactions being rolled back, this field is set
   *       to the number of such transactions.  If there are none, the field
   *       doesn't appear at all.</p>
   */
  rollingBackTrxCount?: number;

  /**
   * @public
   * <p>Set to the start time of the earliest transaction being rolled back.
   *       If no transactions are being rolled back, the field doesn't appear at all.</p>
   */
  rollingBackTrxEarliestStartTime?: string;

  /**
   * @public
   * <p>Contains status information about the features enabled on your DB cluster.</p>
   */
  features?: Record<string, __DocumentType>;

  /**
   * @public
   * <p>Contains information about the current settings on your DB cluster.
   *       For example, contains the current cluster query timeout setting
   *       (<code>clusterQueryTimeoutInMs</code>).</p>
   */
  settings?: Record<string, string>;
}

/**
 * @public
 */
export interface GetGremlinQueryStatusInput {
  /**
   * @public
   * <p>The unique identifier that identifies the Gremlin query.</p>
   */
  queryId: string | undefined;
}

/**
 * @public
 * <p>Structure to capture query statistics such as how many queries
 *       are running, accepted or waiting and their details.</p>
 */
export interface QueryEvalStats {
  /**
   * @public
   * <p>Indicates how long the query waited, in milliseconds.</p>
   */
  waited?: number;

  /**
   * @public
   * <p>The number of milliseconds the query has been running so far.</p>
   */
  elapsed?: number;

  /**
   * @public
   * <p>Set to <code>TRUE</code> if the query was cancelled, or FALSE
   *       otherwise.</p>
   */
  cancelled?: boolean;

  /**
   * @public
   * <p>The number of subqueries in this query.</p>
   */
  subqueries?: __DocumentType;
}

/**
 * @public
 */
export interface GetGremlinQueryStatusOutput {
  /**
   * @public
   * <p>The ID of the query for which status is being returned.</p>
   */
  queryId?: string;

  /**
   * @public
   * <p>The Gremlin query string.</p>
   */
  queryString?: string;

  /**
   * @public
   * <p>The evaluation status of the Gremlin query.</p>
   */
  queryEvalStats?: QueryEvalStats;
}

/**
 * @public
 */
export interface GetLoaderJobStatusInput {
  /**
   * @public
   * <p>The load ID of the load job to get the status of.</p>
   */
  loadId: string | undefined;

  /**
   * @public
   * <p>Flag indicating whether or not to include details beyond the
   *        overall status (<code>TRUE</code> or <code>FALSE</code>; the default
   *        is <code>FALSE</code>).</p>
   */
  details?: boolean;

  /**
   * @public
   * <p>Flag indicating whether or not to include a list of errors
   *       encountered (<code>TRUE</code> or <code>FALSE</code>; the default
   *        is <code>FALSE</code>).</p>
   *          <p>The list of errors is paged. The <code>page</code> and <code>errorsPerPage</code>
   *       parameters allow you to page through all the errors.</p>
   */
  errors?: boolean;

  /**
   * @public
   * <p>The error page number (a positive integer; the default is <code>1</code>).
   *       Only valid when the <code>errors</code> parameter is set to
   *       <code>TRUE</code>.</p>
   */
  page?: number;

  /**
   * @public
   * <p>The number of errors returned in each page (a positive integer; the
   *       default is <code>10</code>). Only valid when the <code>errors</code>
   *       parameter set to <code>TRUE</code>.</p>
   */
  errorsPerPage?: number;
}

/**
 * @public
 */
export interface GetLoaderJobStatusOutput {
  /**
   * @public
   * <p>The HTTP response code for the request.</p>
   */
  status: string | undefined;

  /**
   * @public
   * <p>Status information about the load job, in a layout
   *       that could look like this:</p>
   */
  payload: __DocumentType | undefined;
}

/**
 * @public
 */
export interface GetMLDataProcessingJobInput {
  /**
   * @public
   * <p>The unique identifier of the data-processing job to be retrieved.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role that provides Neptune access to SageMaker
   *       and Amazon S3 resources. This must be listed in your DB cluster
   *       parameter group or an error will occur.</p>
   */
  neptuneIamRoleArn?: string;
}

/**
 * @public
 * <p>Defines a Neptune ML resource.</p>
 */
export interface MlResourceDefinition {
  /**
   * @public
   * <p>The resource name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The resource ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The resource status.</p>
   */
  status?: string;

  /**
   * @public
   * <p>The output location.</p>
   */
  outputLocation?: string;

  /**
   * @public
   * <p>The failure reason, in case of a failure.</p>
   */
  failureReason?: string;

  /**
   * @public
   * <p>The CloudWatch log URL for the resource.</p>
   */
  cloudwatchLogUrl?: string;
}

/**
 * @public
 */
export interface GetMLDataProcessingJobOutput {
  /**
   * @public
   * <p>Status of the data processing job.</p>
   */
  status?: string;

  /**
   * @public
   * <p>The unique identifier of this data-processing job.</p>
   */
  id?: string;

  /**
   * @public
   * <p>Definition of the data processing job.</p>
   */
  processingJob?: MlResourceDefinition;
}

/**
 * @public
 */
export interface GetMLEndpointInput {
  /**
   * @public
   * <p>The unique identifier of the inference endpoint.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role that provides Neptune access to SageMaker
   *     and Amazon S3 resources. This must be listed in your DB cluster parameter
   *     group or an error will occur.</p>
   */
  neptuneIamRoleArn?: string;
}

/**
 * @public
 * <p>Contains a Neptune ML configuration.</p>
 */
export interface MlConfigDefinition {
  /**
   * @public
   * <p>The configuration name.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The ARN for the configuration.</p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface GetMLEndpointOutput {
  /**
   * @public
   * <p>The status of the inference endpoint.</p>
   */
  status?: string;

  /**
   * @public
   * <p>The unique identifier of the inference endpoint.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The endpoint definition.</p>
   */
  endpoint?: MlResourceDefinition;

  /**
   * @public
   * <p>The endpoint configuration</p>
   */
  endpointConfig?: MlConfigDefinition;
}

/**
 * @public
 */
export interface GetMLModelTrainingJobInput {
  /**
   * @public
   * <p>The unique identifier of the model-training job to retrieve.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role that provides Neptune access to SageMaker
   *       and Amazon S3 resources. This must be listed in your DB cluster
   *       parameter group or an error will occur.</p>
   */
  neptuneIamRoleArn?: string;
}

/**
 * @public
 */
export interface GetMLModelTrainingJobOutput {
  /**
   * @public
   * <p>The status of the model training job.</p>
   */
  status?: string;

  /**
   * @public
   * <p>The unique identifier of this model-training job.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The data processing job.</p>
   */
  processingJob?: MlResourceDefinition;

  /**
   * @public
   * <p>The HPO job.</p>
   */
  hpoJob?: MlResourceDefinition;

  /**
   * @public
   * <p>The model transform job.</p>
   */
  modelTransformJob?: MlResourceDefinition;

  /**
   * @public
   * <p>A list of the configurations of the ML models being used.</p>
   */
  mlModels?: MlConfigDefinition[];
}

/**
 * @public
 */
export interface GetMLModelTransformJobInput {
  /**
   * @public
   * <p>The unique identifier of the model-transform job to be reetrieved.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role that provides Neptune access to SageMaker
   *       and Amazon S3 resources. This must be listed in your DB cluster
   *       parameter group or an error will occur.</p>
   */
  neptuneIamRoleArn?: string;
}

/**
 * @public
 */
export interface GetMLModelTransformJobOutput {
  /**
   * @public
   * <p>The status of the model-transform job.</p>
   */
  status?: string;

  /**
   * @public
   * <p>The unique identifier of the model-transform job to be retrieved.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The base data processing job.</p>
   */
  baseProcessingJob?: MlResourceDefinition;

  /**
   * @public
   * <p>The remote model transform job.</p>
   */
  remoteModelTransformJob?: MlResourceDefinition;

  /**
   * @public
   * <p>A list of the configuration information for the models being used.</p>
   */
  models?: MlConfigDefinition[];
}

/**
 * @public
 */
export interface GetOpenCypherQueryStatusInput {
  /**
   * @public
   * <p>The unique ID of the openCypher query for which to retrieve
   *       the query status.</p>
   */
  queryId: string | undefined;
}

/**
 * @public
 */
export interface GetOpenCypherQueryStatusOutput {
  /**
   * @public
   * <p>The unique ID of the query for which status is being returned.</p>
   */
  queryId?: string;

  /**
   * @public
   * <p>The openCypher query string.</p>
   */
  queryString?: string;

  /**
   * @public
   * <p>The openCypher query evaluation status.</p>
   */
  queryEvalStats?: QueryEvalStats;
}

/**
 * @public
 * <p>Information about the characteristic sets generated in the statistics.</p>
 */
export interface StatisticsSummary {
  /**
   * @public
   * <p>The total number of signatures across all characteristic sets.</p>
   */
  signatureCount?: number;

  /**
   * @public
   * <p>The total number of characteristic-set instances.</p>
   */
  instanceCount?: number;

  /**
   * @public
   * <p>The total number of unique predicates.</p>
   */
  predicateCount?: number;
}

/**
 * @public
 * <p>Contains statistics information. The DFE engine uses information
 *       about the data in your Neptune graph to make effective trade-offs when
 *       planning query execution. This information takes the form of statistics
 *       that include so-called characteristic sets and predicate statistics
 *       that can guide query planning. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-dfe-statistics.html">Managing
 *       statistics for the Neptune DFE to use</a>.</p>
 */
export interface Statistics {
  /**
   * @public
   * <p>Indicates whether or not automatic statistics generation is enabled.</p>
   */
  autoCompute?: boolean;

  /**
   * @public
   * <p>Indicates whether or not DFE statistics generation is enabled at all.</p>
   */
  active?: boolean;

  /**
   * @public
   * <p>Reports the ID of the current statistics generation run.
   *       A value of -1 indicates that no statistics have been generated.</p>
   */
  statisticsId?: string;

  /**
   * @public
   * <p>The UTC time at which DFE statistics have most recently been generated.</p>
   */
  date?: Date;

  /**
   * @public
   * <p>A note about problems in the case where statistics are invalid.</p>
   */
  note?: string;

  /**
   * @public
   * <p>A StatisticsSummary structure that contains:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>signatureCount</code> - The total number of signatures
   *         across all characteristic sets.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instanceCount</code> - The total number of
   *         characteristic-set instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>predicateCount</code> - The total number of unique predicates.</p>
   *             </li>
   *          </ul>
   */
  signatureInfo?: StatisticsSummary;
}

/**
 * @public
 */
export interface GetPropertygraphStatisticsOutput {
  /**
   * @public
   * <p>The HTTP return code of the request. If the request succeeded,
   *       the code is 200. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-dfe-statistics.html#neptune-dfe-statistics-errors">Common
   *       error codes for DFE statistics request</a> for a list of common errors.</p>
   */
  status: string | undefined;

  /**
   * @public
   * <p>Statistics for property-graph data.</p>
   */
  payload: Statistics | undefined;
}

/**
 * @public
 * <p>Raised when a request attempts to access an stream that has expired.</p>
 */
export class ExpiredStreamException extends __BaseException {
  readonly name: "ExpiredStreamException" = "ExpiredStreamException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * @enum
 */
export const Encoding = {
  GZIP: "gzip",
} as const;

/**
 * @public
 */
export type Encoding = (typeof Encoding)[keyof typeof Encoding];

/**
 * @public
 * @enum
 */
export const IteratorType = {
  AFTER_SEQUENCE_NUMBER: "AFTER_SEQUENCE_NUMBER",
  AT_SEQUENCE_NUMBER: "AT_SEQUENCE_NUMBER",
  LATEST: "LATEST",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;

/**
 * @public
 */
export type IteratorType = (typeof IteratorType)[keyof typeof IteratorType];

/**
 * @public
 */
export interface GetPropertygraphStreamInput {
  /**
   * @public
   * <p>Specifies the maximum number of records to return. There
   *       is also a size limit of 10 MB on the response that can't be modified
   *       and that takes precedence over the number of records specified in
   *       the <code>limit</code> parameter. The response does include a
   *       threshold-breaching record if the 10 MB limit was reached.</p>
   *          <p>The range for <code>limit</code> is 1 to 100,000, with a
   *       default of 10.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>Can be one of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AT_SEQUENCE_NUMBER</code>   –
   *           Indicates that reading should start from the event sequence number
   *           specified jointly by the <code>commitNum</code> and
   *           <code>opNum</code> parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AFTER_SEQUENCE_NUMBER</code>   –
   *           Indicates that reading should start right after the event sequence number
   *           specified jointly by the <code>commitNum</code> and <code>opNum</code>
   *           parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRIM_HORIZON</code>   –
   *           Indicates that reading should start at the last untrimmed record in the system,
   *           which is the oldest unexpired (not yet deleted) record in the change-log stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LATEST</code>   –
   *           Indicates that reading should start at the most recent record in the system,
   *           which is the latest unexpired (not yet deleted) record in the change-log stream.</p>
   *             </li>
   *          </ul>
   */
  iteratorType?: IteratorType;

  /**
   * @public
   * <p>The commit number of the starting record to read from the
   *       change-log stream. This parameter is required when <code>iteratorType</code>
   *       is<code>AT_SEQUENCE_NUMBER</code> or <code>AFTER_SEQUENCE_NUMBER</code>, and
   *       ignored when <code>iteratorType</code> is <code>TRIM_HORIZON</code> or
   *       <code>LATEST</code>.</p>
   */
  commitNum?: number;

  /**
   * @public
   * <p>The operation sequence number within the specified commit to
   *       start reading from in the change-log stream data. The default is <code>1</code>.</p>
   */
  opNum?: number;

  /**
   * @public
   * <p>If set to TRUE, Neptune compresses the response using gzip encoding.</p>
   */
  encoding?: Encoding;
}

/**
 * @public
 * <p>A Gremlin or openCypher change record.</p>
 */
export interface PropertygraphData {
  /**
   * @public
   * <p>The ID of the Gremlin or openCypher element.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The type of this Gremlin or openCypher element. Must be one of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>v1</code>
   *                   </b>   -
   *           Vertex label for Gremlin, or node label for openCypher.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>vp</code>
   *                   </b>   -
   *           Vertex properties for Gremlin, or node properties for openCypher.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>e</code>
   *                   </b>   -
   *           Edge and edge label for Gremlin, or relationship and relationship type
   *           for openCypher.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ep</code>
   *                   </b>   -
   *           Edge properties for Gremlin, or relationship properties for openCypher.</p>
   *             </li>
   *          </ul>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The property name. For element labels, this is <code>label</code>.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>This is a JSON object that contains a value field for the value itself,
   *       and a datatype field for the JSON data type of that value:</p>
   */
  value: __DocumentType | undefined;

  /**
   * @public
   * <p>If this is an edge (type = <code>e</code>), the ID of the
   *       corresponding <code>from</code> vertex or source node.</p>
   */
  from?: string;

  /**
   * @public
   * <p>If this is an edge (type = <code>e</code>), the ID of the
   *       corresponding <code>to</code> vertex or target node.</p>
   */
  to?: string;
}

/**
 * @public
 * <p>Structure of a property graph record.</p>
 */
export interface PropertygraphRecord {
  /**
   * @public
   * <p>The time at which the commit for the transaction was requested,
   *       in milliseconds from the Unix epoch.</p>
   */
  commitTimestampInMillis: number | undefined;

  /**
   * @public
   * <p>The sequence identifier of the stream change record.</p>
   */
  eventId: Record<string, string> | undefined;

  /**
   * @public
   * <p>The serialized Gremlin or openCypher change record.</p>
   */
  data: PropertygraphData | undefined;

  /**
   * @public
   * <p>The operation that created the change.</p>
   */
  op: string | undefined;

  /**
   * @public
   * <p>Only present if this operation is the last one in its transaction.
   *       If present, it is set to true. It is useful for ensuring that an
   *       entire transaction is consumed.</p>
   */
  isLastOp?: boolean;
}

/**
 * @public
 */
export interface GetPropertygraphStreamOutput {
  /**
   * @public
   * <p>Sequence identifier of the last change in the stream response.</p>
   *          <p>An event ID is composed of two fields: a <code>commitNum</code>, which
   *       identifies a transaction that changed the graph, and an <code>opNum</code>,
   *       which identifies a specific operation within that transaction:</p>
   */
  lastEventId: Record<string, string> | undefined;

  /**
   * @public
   * <p>The time at which the commit for the transaction was requested,
   *       in milliseconds from the Unix epoch.</p>
   */
  lastTrxTimestampInMillis: number | undefined;

  /**
   * @public
   * <p>Serialization format for the change records being returned.
   *       Currently, the only supported value is <code>PG_JSON</code>.</p>
   */
  format: string | undefined;

  /**
   * @public
   * <p>An array of serialized change-log stream records included in the response.</p>
   */
  records: PropertygraphRecord[] | undefined;

  /**
   * @public
   * <p>The total number of records in the response.</p>
   */
  totalRecords: number | undefined;
}

/**
 * @public
 * <p>Raised when stream records requested by a query cannot be found.</p>
 */
export class StreamRecordsNotFoundException extends __BaseException {
  readonly name: "StreamRecordsNotFoundException" = "StreamRecordsNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * <p>Raised when the rate of requests exceeds the maximum throughput. Requests can
 *       be retried after encountering this exception.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request that could not be processed for this reason.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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
 * @public
 * @enum
 */
export const GraphSummaryType = {
  BASIC: "basic",
  DETAILED: "detailed",
} as const;

/**
 * @public
 */
export type GraphSummaryType = (typeof GraphSummaryType)[keyof typeof GraphSummaryType];

/**
 * @public
 */
export interface GetPropertygraphSummaryInput {
  /**
   * @public
   * <p>Mode can take one of two values: <code>BASIC</code> (the default),
   *       and <code>DETAILED</code>.</p>
   */
  mode?: GraphSummaryType;
}

/**
 * @public
 * <p>An edge structure.</p>
 */
export interface EdgeStructure {
  /**
   * @public
   * <p>The number of edges that have this specific structure.</p>
   */
  count?: number;

  /**
   * @public
   * <p>A list of edge properties present in this specific structure.</p>
   */
  edgeProperties?: string[];
}

/**
 * @public
 * <p>A node structure.</p>
 */
export interface NodeStructure {
  /**
   * @public
   * <p>Number of nodes that have this specific structure.</p>
   */
  count?: number;

  /**
   * @public
   * <p>A list of the node properties present in this specific structure.</p>
   */
  nodeProperties?: string[];

  /**
   * @public
   * <p>A list of distinct outgoing edge labels present in this specific structure.</p>
   */
  distinctOutgoingEdgeLabels?: string[];
}

/**
 * @public
 * <p>The graph summary API returns a read-only list of node and edge
 *       labels and property keys, along with counts of nodes, edges, and
 *       properties. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-graph-summary.html#neptune-graph-summary-pg-response">Graph
 *       summary response for a property graph (PG)</a>.</p>
 */
export interface PropertygraphSummary {
  /**
   * @public
   * <p>The number of nodes in the graph.</p>
   */
  numNodes?: number;

  /**
   * @public
   * <p>The number of edges in the graph.</p>
   */
  numEdges?: number;

  /**
   * @public
   * <p>The number of distinct node labels in the graph.</p>
   */
  numNodeLabels?: number;

  /**
   * @public
   * <p>The number of distinct edge labels in the graph.</p>
   */
  numEdgeLabels?: number;

  /**
   * @public
   * <p>A list of the distinct node labels in the graph.</p>
   */
  nodeLabels?: string[];

  /**
   * @public
   * <p>A list of the distinct edge labels in the graph.</p>
   */
  edgeLabels?: string[];

  /**
   * @public
   * <p>A list of the distinct node properties in the graph, along
   *       with the count of nodes where each property is used.</p>
   */
  numNodeProperties?: number;

  /**
   * @public
   * <p>The number of distinct edge properties in the graph.</p>
   */
  numEdgeProperties?: number;

  /**
   * @public
   * <p>The number of distinct node properties in the graph.</p>
   */
  nodeProperties?: Record<string, number>[];

  /**
   * @public
   * <p>A list of the distinct edge properties in the graph, along
   *       with the count of edges where each property is used.</p>
   */
  edgeProperties?: Record<string, number>[];

  /**
   * @public
   * <p>The total number of usages of all node properties.</p>
   */
  totalNodePropertyValues?: number;

  /**
   * @public
   * <p>The total number of usages of all edge properties.</p>
   */
  totalEdgePropertyValues?: number;

  /**
   * @public
   * <p>This field is only present when the requested mode is
   *       <code>DETAILED</code>. It contains a list of node structures.</p>
   */
  nodeStructures?: NodeStructure[];

  /**
   * @public
   * <p>This field is only present when the requested mode is
   *       <code>DETAILED</code>. It contains a list of edge structures.</p>
   */
  edgeStructures?: EdgeStructure[];
}

/**
 * @public
 * <p>Payload for the property graph summary response.</p>
 */
export interface PropertygraphSummaryValueMap {
  /**
   * @public
   * <p>The version of this graph summary response.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The timestamp, in ISO 8601 format, of the time at which Neptune last computed statistics.</p>
   */
  lastStatisticsComputationTime?: Date;

  /**
   * @public
   * <p>The graph summary.</p>
   */
  graphSummary?: PropertygraphSummary;
}

/**
 * @public
 */
export interface GetPropertygraphSummaryOutput {
  /**
   * @public
   * <p>The HTTP return code of the request. If the request succeeded,
   *       the code is 200.</p>
   */
  statusCode?: number;

  /**
   * @public
   * <p>Payload containing the property graph summary response.</p>
   */
  payload?: PropertygraphSummaryValueMap;
}

/**
 * @public
 */
export interface GetRDFGraphSummaryInput {
  /**
   * @public
   * <p>Mode can take one of two values: <code>BASIC</code> (the default),
   *       and <code>DETAILED</code>.</p>
   */
  mode?: GraphSummaryType;
}

/**
 * @public
 * <p>A subject structure.</p>
 */
export interface SubjectStructure {
  /**
   * @public
   * <p>Number of occurrences of this specific structure.</p>
   */
  count?: number;

  /**
   * @public
   * <p>A list of predicates present in this specific structure.</p>
   */
  predicates?: string[];
}

/**
 * @public
 * <p>The RDF graph summary API returns a read-only list of classes and
 *       predicate keys, along with counts of quads, subjects, and predicates.</p>
 */
export interface RDFGraphSummary {
  /**
   * @public
   * <p>The number of distinct subjects in the graph.</p>
   */
  numDistinctSubjects?: number;

  /**
   * @public
   * <p>The number of distinct predicates in the graph.</p>
   */
  numDistinctPredicates?: number;

  /**
   * @public
   * <p>The number of quads in the graph.</p>
   */
  numQuads?: number;

  /**
   * @public
   * <p>The number of classes in the graph.</p>
   */
  numClasses?: number;

  /**
   * @public
   * <p>A list of the classes in the graph.</p>
   */
  classes?: string[];

  /**
   * @public
   * <p>"A list of predicates in the graph, along with the predicate counts.</p>
   */
  predicates?: Record<string, number>[];

  /**
   * @public
   * <p>This field is only present when the request mode is
   *       <code>DETAILED</code>. It contains a list of subject structures.</p>
   */
  subjectStructures?: SubjectStructure[];
}

/**
 * @public
 * <p>Payload for an RDF graph summary response.</p>
 */
export interface RDFGraphSummaryValueMap {
  /**
   * @public
   * <p>The version of this graph summary response.</p>
   */
  version?: string;

  /**
   * @public
   * <p>The timestamp, in ISO 8601 format, of the time at which Neptune
   *       last computed statistics.</p>
   */
  lastStatisticsComputationTime?: Date;

  /**
   * @public
   * <p>The graph summary of an RDF graph. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-graph-summary.html#neptune-graph-summary-rdf-response">Graph
   *       summary response for an RDF graph</a>.</p>
   */
  graphSummary?: RDFGraphSummary;
}

/**
 * @public
 */
export interface GetRDFGraphSummaryOutput {
  /**
   * @public
   * <p>The HTTP return code of the request. If the request succeeded,
   *       the code is 200.</p>
   */
  statusCode?: number;

  /**
   * @public
   * <p>Payload for an RDF graph summary response</p>
   */
  payload?: RDFGraphSummaryValueMap;
}

/**
 * @public
 */
export interface GetSparqlStatisticsOutput {
  /**
   * @public
   * <p>The HTTP return code of the request. If the request succeeded,
   *       the code is 200. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/neptune-dfe-statistics.html#neptune-dfe-statistics-errors">Common
   *       error codes for DFE statistics request</a> for a list of common errors.</p>
   *          <p>When invoking this operation in a Neptune cluster that has IAM
   *       authentication enabled, the IAM user or role making the request must
   *       have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getstatisticsstatus">neptune-db:GetStatisticsStatus</a>
   *       IAM action in that cluster.</p>
   */
  status: string | undefined;

  /**
   * @public
   * <p>Statistics for RDF data.</p>
   */
  payload: Statistics | undefined;
}

/**
 * @public
 */
export interface GetSparqlStreamInput {
  /**
   * @public
   * <p>Specifies the maximum number of records to return. There
   *       is also a size limit of 10 MB on the response that can't be modified
   *       and that takes precedence over the number of records specified in
   *       the <code>limit</code> parameter. The response does include a
   *       threshold-breaching record if the 10 MB limit was reached.</p>
   *          <p>The range for <code>limit</code> is 1 to 100,000, with a
   *       default of 10.</p>
   */
  limit?: number;

  /**
   * @public
   * <p>Can be one of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AT_SEQUENCE_NUMBER</code>   –
   *           Indicates that reading should start from the event sequence number
   *           specified jointly by the <code>commitNum</code> and
   *           <code>opNum</code> parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AFTER_SEQUENCE_NUMBER</code>   –
   *           Indicates that reading should start right after the event sequence number
   *           specified jointly by the <code>commitNum</code> and <code>opNum</code>
   *           parameters.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRIM_HORIZON</code>   –
   *           Indicates that reading should start at the last untrimmed record in the system,
   *           which is the oldest unexpired (not yet deleted) record in the change-log stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LATEST</code>   –
   *           Indicates that reading should start at the most recent record in the system,
   *           which is the latest unexpired (not yet deleted) record in the change-log stream.</p>
   *             </li>
   *          </ul>
   */
  iteratorType?: IteratorType;

  /**
   * @public
   * <p>The commit number of the starting record to read from the
   *       change-log stream. This parameter is required when <code>iteratorType</code>
   *       is<code>AT_SEQUENCE_NUMBER</code> or <code>AFTER_SEQUENCE_NUMBER</code>, and
   *       ignored when <code>iteratorType</code> is <code>TRIM_HORIZON</code> or
   *       <code>LATEST</code>.</p>
   */
  commitNum?: number;

  /**
   * @public
   * <p>The operation sequence number within the specified commit to
   *       start reading from in the change-log stream data. The default is <code>1</code>.</p>
   */
  opNum?: number;

  /**
   * @public
   * <p>If set to TRUE, Neptune compresses the response using gzip encoding.</p>
   */
  encoding?: Encoding;
}

/**
 * @public
 * <p>Neptune logs are converted to SPARQL quads in the graph using the
 *       Resource Description Framework (RDF) <a href="https://www.w3.org/TR/n-quads/">N-QUADS</a> language defined
 *       in the W3C RDF 1.1 N-Quads specification</p>
 */
export interface SparqlData {
  /**
   * @public
   * <p>Holds an <a href="https://www.w3.org/TR/n-quads/">N-QUADS</a>
   *       statement expressing the changed quad.</p>
   */
  stmt: string | undefined;
}

/**
 * @public
 * <p>A serialized SPARQL stream record capturing a change-log entry
 *       for the RDF graph.</p>
 */
export interface SparqlRecord {
  /**
   * @public
   * <p>The time at which the commit for the transaction was requested,
   *       in milliseconds from the Unix epoch.</p>
   */
  commitTimestampInMillis: number | undefined;

  /**
   * @public
   * <p>The sequence identifier of the stream change record.</p>
   */
  eventId: Record<string, string> | undefined;

  /**
   * @public
   * <p>The serialized SPARQL change record. The serialization formats
   *       of each record are described in more detail in <a href="https://docs.aws.amazon.com/neptune/latest/userguide/streams-change-formats.html">Serialization
   *       Formats in Neptune Streams</a>.</p>
   */
  data: SparqlData | undefined;

  /**
   * @public
   * <p>The operation that created the change.</p>
   */
  op: string | undefined;

  /**
   * @public
   * <p>Only present if this operation is the last one in its transaction.
   *       If present, it is set to true. It is useful for ensuring that an
   *       entire transaction is consumed.</p>
   */
  isLastOp?: boolean;
}

/**
 * @public
 */
export interface GetSparqlStreamOutput {
  /**
   * @public
   * <p>Sequence identifier of the last change in the stream response.</p>
   *          <p>An event ID is composed of two fields: a <code>commitNum</code>, which
   *       identifies a transaction that changed the graph, and an <code>opNum</code>,
   *       which identifies a specific operation within that transaction:</p>
   */
  lastEventId: Record<string, string> | undefined;

  /**
   * @public
   * <p>The time at which the commit for the transaction was requested,
   *       in milliseconds from the Unix epoch.</p>
   */
  lastTrxTimestampInMillis: number | undefined;

  /**
   * @public
   * <p>Serialization format for the change records being returned.
   *       Currently, the only supported value is <code>NQUADS</code>.</p>
   */
  format: string | undefined;

  /**
   * @public
   * <p>An array of serialized change-log stream records included in the response.</p>
   */
  records: SparqlRecord[] | undefined;

  /**
   * @public
   * <p>The total number of records in the response.</p>
   */
  totalRecords: number | undefined;
}

/**
 * @public
 */
export interface ListGremlinQueriesInput {
  /**
   * @public
   * <p>If set to <code>TRUE</code>, the list returned includes waiting
   *       queries. The default is <code>FALSE</code>;</p>
   */
  includeWaiting?: boolean;
}

/**
 * @public
 * <p>Captures the status of a Gremlin query (see the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/gremlin-api-status.html">Gremlin query
 *       status API</a> page).</p>
 */
export interface GremlinQueryStatus {
  /**
   * @public
   * <p>The ID of the Gremlin query.</p>
   */
  queryId?: string;

  /**
   * @public
   * <p>The query string of the Gremlin query.</p>
   */
  queryString?: string;

  /**
   * @public
   * <p>The query statistics of the Gremlin query.</p>
   */
  queryEvalStats?: QueryEvalStats;
}

/**
 * @public
 */
export interface ListGremlinQueriesOutput {
  /**
   * @public
   * <p>The number of queries that have been accepted but not yet
   *       completed, including queries in the queue.</p>
   */
  acceptedQueryCount?: number;

  /**
   * @public
   * <p>The number of Gremlin queries currently running.</p>
   */
  runningQueryCount?: number;

  /**
   * @public
   * <p>A list of the current queries.</p>
   */
  queries?: GremlinQueryStatus[];
}

/**
 * @public
 */
export interface ListLoaderJobsInput {
  /**
   * @public
   * <p>The number of load IDs to list. Must be a positive integer
   *       greater than zero and not more than <code>100</code> (which is the default).</p>
   */
  limit?: number;

  /**
   * @public
   * <p>An optional parameter that can be used to exclude the load
   *       IDs of queued load requests when requesting a list of load IDs by
   *       setting the parameter to <code>FALSE</code>. The default value
   *       is <code>TRUE</code>.</p>
   */
  includeQueuedLoads?: boolean;
}

/**
 * @public
 * <p>Contains a list of load IDs.</p>
 */
export interface LoaderIdResult {
  /**
   * @public
   * <p>A list of load IDs.</p>
   */
  loadIds?: string[];
}

/**
 * @public
 */
export interface ListLoaderJobsOutput {
  /**
   * @public
   * <p>Returns the status of the job list request.</p>
   */
  status: string | undefined;

  /**
   * @public
   * <p>The requested list of job IDs.</p>
   */
  payload: LoaderIdResult | undefined;
}

/**
 * @public
 */
export interface ListMLDataProcessingJobsInput {
  /**
   * @public
   * <p>The maximum number of items to return (from 1 to 1024; the default is 10).</p>
   */
  maxItems?: number;

  /**
   * @public
   * <p>The ARN of an IAM role that provides Neptune access to SageMaker
   *       and Amazon S3 resources. This must be listed in your DB cluster
   *       parameter group or an error will occur.</p>
   */
  neptuneIamRoleArn?: string;
}

/**
 * @public
 */
export interface ListMLDataProcessingJobsOutput {
  /**
   * @public
   * <p>A page listing data processing job IDs.</p>
   */
  ids?: string[];
}

/**
 * @public
 */
export interface ListMLEndpointsInput {
  /**
   * @public
   * <p>The maximum number of items to return (from 1 to 1024; the default
   *       is 10.</p>
   */
  maxItems?: number;

  /**
   * @public
   * <p>The ARN of an IAM role that provides Neptune access to SageMaker
   *       and Amazon S3 resources. This must be listed in your DB cluster
   *       parameter group or an error will occur.</p>
   */
  neptuneIamRoleArn?: string;
}

/**
 * @public
 */
export interface ListMLEndpointsOutput {
  /**
   * @public
   * <p>A page from the list of inference endpoint IDs.</p>
   */
  ids?: string[];
}

/**
 * @public
 */
export interface ListMLModelTrainingJobsInput {
  /**
   * @public
   * <p>The maximum number of items to return (from 1 to 1024; the default
   *     is 10).</p>
   */
  maxItems?: number;

  /**
   * @public
   * <p>The ARN of an IAM role that provides Neptune access to SageMaker
   *       and Amazon S3 resources. This must be listed in your DB cluster
   *       parameter group or an error will occur.</p>
   */
  neptuneIamRoleArn?: string;
}

/**
 * @public
 */
export interface ListMLModelTrainingJobsOutput {
  /**
   * @public
   * <p>A page of the list of model training job IDs.</p>
   */
  ids?: string[];
}

/**
 * @public
 */
export interface ListMLModelTransformJobsInput {
  /**
   * @public
   * <p>The maximum number of items to return (from 1 to 1024; the
   *       default is 10).</p>
   */
  maxItems?: number;

  /**
   * @public
   * <p>The ARN of an IAM role that provides Neptune access to SageMaker
   *       and Amazon S3 resources. This must be listed in your DB cluster
   *       parameter group or an error will occur.</p>
   */
  neptuneIamRoleArn?: string;
}

/**
 * @public
 */
export interface ListMLModelTransformJobsOutput {
  /**
   * @public
   * <p>A page from the list of model transform IDs.</p>
   */
  ids?: string[];
}

/**
 * @public
 */
export interface ListOpenCypherQueriesInput {
  /**
   * @public
   * <p> When set to <code>TRUE</code> and other parameters are not
   *       present, causes status information to be returned for waiting
   *       queries as well as for running queries.</p>
   */
  includeWaiting?: boolean;
}

/**
 * @public
 */
export interface ListOpenCypherQueriesOutput {
  /**
   * @public
   * <p>The number of queries that have been accepted but not yet completed,
   *       including queries in the queue.</p>
   */
  acceptedQueryCount?: number;

  /**
   * @public
   * <p>The number of currently running openCypher queries.</p>
   */
  runningQueryCount?: number;

  /**
   * @public
   * <p>A list of current openCypher queries.</p>
   */
  queries?: GremlinQueryStatus[];
}

/**
 * @public
 * @enum
 */
export const StatisticsAutoGenerationMode = {
  DISABLE_AUTOCOMPUTE: "disableAutoCompute",
  ENABLE_AUTOCOMPUTE: "enableAutoCompute",
  REFRESH: "refresh",
} as const;

/**
 * @public
 */
export type StatisticsAutoGenerationMode =
  (typeof StatisticsAutoGenerationMode)[keyof typeof StatisticsAutoGenerationMode];

/**
 * @public
 */
export interface ManagePropertygraphStatisticsInput {
  /**
   * @public
   * <p>The statistics generation mode. One of: <code>DISABLE_AUTOCOMPUTE</code>,
   *       <code>ENABLE_AUTOCOMPUTE</code>, or <code>REFRESH</code>, the last of
   *       which manually triggers DFE statistics generation.</p>
   */
  mode?: StatisticsAutoGenerationMode;
}

/**
 * @public
 * <p>Statistics for <code>REFRESH</code> mode.</p>
 */
export interface RefreshStatisticsIdMap {
  /**
   * @public
   * <p>The ID of the statistics generation run that is currently occurring.</p>
   */
  statisticsId?: string;
}

/**
 * @public
 */
export interface ManagePropertygraphStatisticsOutput {
  /**
   * @public
   * <p>The HTTP return code of the request. If the request succeeded,
   *       the code is 200.</p>
   */
  status: string | undefined;

  /**
   * @public
   * <p>This is only returned for refresh mode.</p>
   */
  payload?: RefreshStatisticsIdMap;
}

/**
 * @public
 */
export interface ManageSparqlStatisticsInput {
  /**
   * @public
   * <p>The statistics generation mode. One of: <code>DISABLE_AUTOCOMPUTE</code>,
   *       <code>ENABLE_AUTOCOMPUTE</code>, or <code>REFRESH</code>, the last of
   *       which manually triggers DFE statistics generation.</p>
   */
  mode?: StatisticsAutoGenerationMode;
}

/**
 * @public
 */
export interface ManageSparqlStatisticsOutput {
  /**
   * @public
   * <p>The HTTP return code of the request. If the request succeeded,
   *       the code is 200.</p>
   */
  status: string | undefined;

  /**
   * @public
   * <p>This is only returned for refresh mode.</p>
   */
  payload?: RefreshStatisticsIdMap;
}

/**
 * @public
 * <p>Raised when there is a problem accessing Amazon S3.</p>
 */
export class S3Exception extends __BaseException {
  readonly name: "S3Exception" = "S3Exception";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @public
   * <p>A detailed message describing the problem.</p>
   */
  detailedMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the request in question.</p>
   */
  requestId: string | undefined;

  /**
   * @public
   * <p>The HTTP status code returned with the exception.</p>
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

/**
 * @public
 * @enum
 */
export const Format = {
  CSV: "csv",
  NQUADS: "nquads",
  NTRIPLES: "ntriples",
  OPENCYPHER: "opencypher",
  RDFXML: "rdfxml",
  TURTLE: "turtle",
} as const;

/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const Mode = {
  AUTO: "AUTO",
  NEW: "NEW",
  RESUME: "RESUME",
} as const;

/**
 * @public
 */
export type Mode = (typeof Mode)[keyof typeof Mode];

/**
 * @public
 * @enum
 */
export const Parallelism = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  OVERSUBSCRIBE: "OVERSUBSCRIBE",
} as const;

/**
 * @public
 */
export type Parallelism = (typeof Parallelism)[keyof typeof Parallelism];

/**
 * @public
 * @enum
 */
export const S3BucketRegion = {
  AF_SOUTH_1: "af-south-1",
  AP_EAST_1: "ap-east-1",
  AP_NORTHEAST_1: "ap-northeast-1",
  AP_NORTHEAST_2: "ap-northeast-2",
  AP_SOUTHEAST_1: "ap-southeast-1",
  AP_SOUTHEAST_2: "ap-southeast-2",
  AP_SOUTH_1: "ap-south-1",
  CA_CENTRAL_1: "ca-central-1",
  CN_NORTHWEST_1: "cn-northwest-1",
  CN_NORTH_1: "cn-north-1",
  EU_CENTRAL_1: "eu-central-1",
  EU_NORTH_1: "eu-north-1",
  EU_WEST_1: "eu-west-1",
  EU_WEST_2: "eu-west-2",
  EU_WEST_3: "eu-west-3",
  ME_SOUTH_1: "me-south-1",
  SA_EAST_1: "sa-east-1",
  US_EAST_1: "us-east-1",
  US_EAST_2: "us-east-2",
  US_GOV_EAST_1: "us-gov-east-1",
  US_GOV_WEST_1: "us-gov-west-1",
  US_WEST_1: "us-west-1",
  US_WEST_2: "us-west-2",
} as const;

/**
 * @public
 */
export type S3BucketRegion = (typeof S3BucketRegion)[keyof typeof S3BucketRegion];

/**
 * @public
 */
export interface StartLoaderJobInput {
  /**
   * @public
   * <p>The <code>source</code> parameter accepts an S3 URI that identifies a single
   *       file, multiple files, a folder, or multiple folders. Neptune loads every data file
   *       in any folder that is specified.</p>
   *          <p>The URI can be in any of the following formats.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>s3://(bucket_name)/(object-key-name)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>https://s3.amazonaws.com/(bucket_name)/(object-key-name)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>https://s3.us-east-1.amazonaws.com/(bucket_name)/(object-key-name)</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The <code>object-key-name</code> element of the URI is equivalent to the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html#API_ListObjects_RequestParameters">prefix</a>
   *       parameter in an S3 <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html">ListObjects</a>
   *       API call.  It identifies all the objects in the specified S3 bucket whose names begin with
   *       that prefix.  That can be a single file or folder, or multiple files and/or folders.</p>
   *          <p>The specified folder or folders can contain multiple vertex files and multiple edge files.</p>
   */
  source: string | undefined;

  /**
   * @public
   * <p>The format of the data. For more information about data formats for the Neptune
   *           <code>Loader</code> command, see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format.html">Load Data Formats</a>.</p>
   *          <p class="title">
   *             <b>Allowed values</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>csv</code>
   *                   </b> for the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-gremlin.html">Gremlin CSV data format</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>opencypher</code>
   *                   </b> for the
   *         <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-format-opencypher.html">openCypher CSV data format</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>ntriples</code>
   *                   </b> for the
   *         <a href="https://www.w3.org/TR/n-triples/">N-Triples RDF data format</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>nquads</code>
   *                   </b> for the
   *         <a href="https://www.w3.org/TR/n-quads/">N-Quads RDF data format</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>rdfxml</code>
   *                   </b> for the
   *         <a href="https://www.w3.org/TR/rdf-syntax-grammar/">RDF\XML RDF data format</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>turtle</code>
   *                   </b> for the
   *         <a href="https://www.w3.org/TR/turtle/">Turtle RDF data format</a>.</p>
   *             </li>
   *          </ul>
   */
  format: Format | undefined;

  /**
   * @public
   * <p>The Amazon region of the S3 bucket. This must match the Amazon Region of the DB cluster.</p>
   */
  s3BucketRegion: S3BucketRegion | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for an IAM role to be assumed by
   *       the Neptune DB instance for access to the S3 bucket. The IAM role ARN provided
   *       here should be attached to the DB cluster (see <a href="https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load-tutorial-IAM-add-role-cluster.html">Adding
   *       the IAM Role to an Amazon Neptune Cluster</a>.</p>
   */
  iamRoleArn: string | undefined;

  /**
   * @public
   * <p>The load job mode.</p>
   *          <p>
   *             <i>Allowed values</i>: <code>RESUME</code>, <code>NEW</code>,
   *       <code>AUTO</code>.</p>
   *          <p>
   *             <i>Default value</i>: <code>AUTO</code>.</p>
   *          <p class="title">
   *             <b/>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RESUME</code>   –   In RESUME mode,
   *           the loader looks for a previous load from this source, and if it finds
   *           one, resumes that load job. If no previous load job is  found, the loader stops.</p>
   *                <p>The loader avoids reloading files that were successfully loaded in
   *           a previous job. It only tries to process failed files. If you dropped
   *           previously loaded data from your Neptune cluster, that data is not
   *           reloaded in this mode. If a previous load job loaded all files from the
   *           same source successfully, nothing is reloaded, and the loader returns
   *           success.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW</code>   –   In NEW mode, the
   *         creates a new load request regardless of any previous loads. You
   *         can use this mode to reload all the data from a source after dropping
   *         previously loaded data from your Neptune cluster, or to load new data
   *         available at the same source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTO</code>   –   In AUTO mode,
   *           the loader looks for a previous load job from the same source, and if it
   *           finds one, resumes that job, just as in <code>RESUME</code> mode.</p>
   *                <p>If the loader doesn't find a previous load job from the same
   *           source, it loads all data from the source, just as in <code>NEW</code>
   *           mode.</p>
   *             </li>
   *          </ul>
   */
  mode?: Mode;

  /**
   * @public
   * <p>
   *             <b>
   *                <code>failOnError</code>
   *             </b>   –   A flag to toggle a
   *       complete stop on an error.</p>
   *          <p>
   *             <i>Allowed values</i>: <code>"TRUE"</code>, <code>"FALSE"</code>.</p>
   *          <p>
   *             <i>Default value</i>: <code>"TRUE"</code>.</p>
   *          <p>When this parameter is set to <code>"FALSE"</code>, the loader tries to load all
   *       the data in the location specified, skipping any entries with errors.</p>
   *          <p>When this parameter is set to <code>"TRUE"</code>, the loader stops
   *       as soon as it encounters an error.  Data loaded up to that point persists.</p>
   */
  failOnError?: boolean;

  /**
   * @public
   * <p>The optional <code>parallelism</code> parameter can be set
   *       to reduce the number of threads used by the bulk load process.</p>
   *          <p>
   *             <i>Allowed values</i>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LOW</code> –   The number of threads used is the
   *         number of available vCPUs divided by 8.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MEDIUM</code> –   The number of threads used is the
   *         number of available vCPUs divided by 2.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HIGH</code> –   The number of threads used is the
   *         same as the number of available vCPUs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OVERSUBSCRIBE</code> –   The number of threads used is the
   *           number of available vCPUs multiplied by 2. If this value is used, the bulk loader takes up all
   *           available resources.</p>
   *                <p>This does not mean, however, that the <code>OVERSUBSCRIBE</code> setting
   *           results in 100% CPU utilization. Because the load operation is I/O bound, the
   *           highest CPU utilization to expect is in the 60% to 70% range.</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <i>Default value</i>: <code>HIGH</code>
   *          </p>
   *          <p>The <code>parallelism</code> setting can sometimes result in a deadlock
   *       between threads when loading openCypher data. When this happens, Neptune returns the
   *       <code>LOAD_DATA_DEADLOCK</code> error. You can generally fix the issue by setting
   *       <code>parallelism</code> to a lower setting and retrying the load command.</p>
   */
  parallelism?: Parallelism;

  /**
   * @public
   * <p>
   *             <b>
   *                <code>parserConfiguration</code>
   *             </b>
   *       –   An optional object with additional parser configuration values.
   *       Each of the child parameters is also optional:</p>
   *          <p class="title">
   *             <b/>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>namedGraphUri</code>
   *                   </b>   –
   *           The default graph for all RDF formats when no graph is specified (for non-quads
   *           formats and NQUAD entries with no graph).</p>
   *                <p>The default is <code>https://aws.amazon.com/neptune/vocab/v01/DefaultNamedGraph</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>baseUri</code>
   *                   </b>   –
   *           The base URI for RDF/XML and Turtle formats.</p>
   *                <p>The default is <code>https://aws.amazon.com/neptune/default</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>allowEmptyStrings</code>
   *                   </b>   –
   *           Gremlin users need to be able to pass empty string values("") as node
   *           and edge properties when loading CSV data. If <code>allowEmptyStrings</code>
   *           is set to <code>false</code> (the default), such empty strings are treated
   *           as nulls and are not loaded.</p>
   *                <p>If <code>allowEmptyStrings</code> is set to <code>true</code>,
   *           the loader treats empty strings as valid property values and loads
   *           them accordingly.</p>
   *             </li>
   *          </ul>
   */
  parserConfiguration?: Record<string, string>;

  /**
   * @public
   * <p>
   *             <code>updateSingleCardinalityProperties</code>
   *           is an optional parameter that controls how the bulk loader treats a new
   *           value for single-cardinality vertex or edge properties. This is not supported for
   *           loading openCypher data.</p>
   *          <p>
   *             <i>Allowed values</i>: <code>"TRUE"</code>, <code>"FALSE"</code>.</p>
   *          <p>
   *             <i>Default value</i>: <code>"FALSE"</code>.</p>
   *          <p>By default, or when <code>updateSingleCardinalityProperties</code> is explicitly
   *           set to <code>"FALSE"</code>, the loader treats a new value as an error, because it
   *           violates single cardinality.</p>
   *          <p>When <code>updateSingleCardinalityProperties</code> is set to <code>"TRUE"</code>,
   *           on the other hand, the bulk loader replaces the existing value with the new one.
   *           If multiple edge or single-cardinality vertex property values are provided in the
   *           source file(s) being loaded, the final value at the end of the bulk load could be
   *           any one of those new values. The loader only guarantees that the existing value
   *           has been replaced by one of the new ones.</p>
   */
  updateSingleCardinalityProperties?: boolean;

  /**
   * @public
   * <p>This is an optional flag parameter
   *           that indicates whether the load request can be queued up or not. </p>
   *          <p>You don't have to wait for one load job to complete before issuing the next one,
   *           because Neptune can queue up as many as 64 jobs at a time, provided that their
   *           <code>queueRequest</code> parameters are all set to <code>"TRUE"</code>.</p>
   *          <p>If the <code>queueRequest</code> parameter is omitted or set to <code>"FALSE"</code>,
   *           the load request will fail if another load job is already running.</p>
   *          <p>
   *             <i>Allowed values</i>: <code>"TRUE"</code>, <code>"FALSE"</code>.</p>
   *          <p>
   *             <i>Default value</i>: <code>"FALSE"</code>.</p>
   */
  queueRequest?: boolean;

  /**
   * @public
   * <p>This is an optional parameter that can make a queued load request
   *       contingent on the successful completion of one or more previous jobs
   *       in the queue.</p>
   *          <p>Neptune can queue up as many as 64 load requests at a time, if their
   *       <code>queueRequest</code> parameters are set to <code>"TRUE"</code>. The
   *       <code>dependencies</code> parameter lets you make execution of such a queued request
   *       dependent on the successful completion of one or more specified previous requests
   *       in the queue.</p>
   *          <p>For example, if load <code>Job-A</code> and <code>Job-B</code> are independent
   *       of each other, but load <code>Job-C</code> needs <code>Job-A</code> and <code>Job-B</code>
   *       to be finished before it begins, proceed as follows:</p>
   *          <ol>
   *             <li>
   *                <p>Submit  <code>load-job-A</code> and <code>load-job-B</code> one after
   *         another in any order, and save their load-ids.</p>
   *             </li>
   *             <li>
   *                <p>Submit <code>load-job-C</code> with the load-ids of the
   *         two jobs in its <code>dependencies</code> field:</p>
   *             </li>
   *          </ol>
   *          <p>Because of the <code>dependencies</code> parameter, the bulk loader will not start
   *       <code>Job-C</code> until <code>Job-A</code> and <code>Job-B</code> have completed
   *       successfully. If either one of them fails, Job-C will not be executed, and its
   *       status will be set to <code>LOAD_FAILED_BECAUSE_DEPENDENCY_NOT_SATISFIED</code>.</p>
   *          <p>You can set up multiple levels of dependency in this way, so that the failure of one job
   *       will cause all requests that are directly or indirectly dependent on it to be cancelled.</p>
   */
  dependencies?: string[];

  /**
   * @public
   * <p>This parameter is required only when loading openCypher data that contains relationship
   *           IDs. It must be included and set to <code>True</code> when openCypher relationship IDs
   *           are explicitly provided in the load data (recommended).</p>
   *          <p>When <code>userProvidedEdgeIds</code> is absent or set to <code>True</code>,
   *           an <code>:ID</code> column must be present in every relationship file in the load.</p>
   *          <p>When <code>userProvidedEdgeIds</code> is present and set to <code>False</code>,
   *           relationship files in the load <b>must not</b> contain an
   *           <code>:ID</code> column. Instead, the Neptune loader automatically generates an
   *           ID for each relationship.</p>
   *          <p>It's useful to provide relationship IDs explicitly so that the loader can resume
   *           loading after error in the CSV data have been fixed, without having to reload any
   *           relationships that have already been loaded. If relationship IDs have not been
   *           explicitly assigned, the loader cannot resume a failed load if any relationship file
   *           has had to be corrected, and must instead reload all the relationships.</p>
   */
  userProvidedEdgeIds?: boolean;
}

/**
 * @public
 */
export interface StartLoaderJobOutput {
  /**
   * @public
   * <p>The HTTP return code indicating the status of the load job.</p>
   */
  status: string | undefined;

  /**
   * @public
   * <p>Contains a <code>loadId</code> name-value pair that provides an identifier
   *       for the load operation.</p>
   */
  payload: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartMLDataProcessingJobInput {
  /**
   * @public
   * <p>A unique identifier for the new job. The default is an autogenerated UUID.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The job ID of a completed data processing job run on an earlier version of the data.</p>
   */
  previousDataProcessingJobId?: string;

  /**
   * @public
   * <p>The URI of the Amazon S3 location where you want SageMaker to download
   *       the data needed to run the data processing job.</p>
   */
  inputDataS3Location: string | undefined;

  /**
   * @public
   * <p>The URI of the Amazon S3 location where you want SageMaker to save the
   *     results of a data processing job.</p>
   */
  processedDataS3Location: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role for SageMaker execution.
   *     This must be listed in your DB cluster parameter group or an error will occur.</p>
   */
  sagemakerIamRoleArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an IAM role that SageMaker can assume
   *       to perform tasks on your behalf. This must be listed in your DB cluster
   *       parameter group or an error will occur.</p>
   */
  neptuneIamRoleArn?: string;

  /**
   * @public
   * <p>The type of ML instance used during data processing. Its memory
   *       should be large enough to hold the processed dataset. The default is
   *       the smallest ml.r5 type whose memory is ten times larger than the size
   *       of the exported graph data on disk.</p>
   */
  processingInstanceType?: string;

  /**
   * @public
   * <p>The disk volume size of the processing instance. Both input data
   *       and processed data are stored on disk, so the volume size must be large
   *       enough to hold both data sets. The default is 0. If not specified or 0,
   *       Neptune ML chooses the volume size automatically based on the data size.</p>
   */
  processingInstanceVolumeSizeInGB?: number;

  /**
   * @public
   * <p>Timeout in seconds for the data processing job. The default is 86,400 (1 day).</p>
   */
  processingTimeOutInSeconds?: number;

  /**
   * @public
   * <p>One of the two model types that Neptune ML currently supports:
   *       heterogeneous graph models (<code>heterogeneous</code>), and knowledge
   *       graph (<code>kge</code>). The default is none. If not specified,
   *       Neptune ML chooses the model type automatically based on the data.</p>
   */
  modelType?: string;

  /**
   * @public
   * <p>A data specification file that describes how to load the exported
   *       graph data for training. The file is automatically generated by the
   *       Neptune export toolkit. The default is
   *       <code>training-data-configuration.json</code>.</p>
   */
  configFileName?: string;

  /**
   * @public
   * <p>The IDs of the subnets in the Neptune VPC. The default is None.</p>
   */
  subnets?: string[];

  /**
   * @public
   * <p>The VPC security group IDs. The default is None.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>The Amazon Key Management Service (Amazon KMS) key that SageMaker uses to
   *       encrypt data on the storage volume attached to the ML compute instances
   *       that run the training job. The default is None.</p>
   */
  volumeEncryptionKMSKey?: string;

  /**
   * @public
   * <p>The Amazon Key Management Service (Amazon KMS) key that SageMaker uses
   *       to encrypt the output of the processing job. The default is none.</p>
   */
  s3OutputEncryptionKMSKey?: string;
}

/**
 * @public
 */
export interface StartMLDataProcessingJobOutput {
  /**
   * @public
   * <p>The unique ID of the new data processing job.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The ARN of the data processing job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The time it took to create the new processing job, in milliseconds.</p>
   */
  creationTimeInMillis?: number;
}

/**
 * @public
 * <p>Contains custom model training parameters. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/machine-learning-custom-models.html">Custom
 *       models in Neptune ML</a>.</p>
 */
export interface CustomModelTrainingParameters {
  /**
   * @public
   * <p>The path to the Amazon S3 location where the Python module
   *       implementing your model is located. This must point to a valid
   *       existing Amazon S3 location that contains, at a minimum, a training
   *       script, a transform script, and a <code>model-hpo-configuration.json</code>
   *       file.</p>
   */
  sourceS3DirectoryPath: string | undefined;

  /**
   * @public
   * <p>The name of the entry point in your module of a script that performs
   *       model training and takes hyperparameters as command-line arguments,
   *       including fixed hyperparameters. The default is <code>training.py</code>.</p>
   */
  trainingEntryPointScript?: string;

  /**
   * @public
   * <p>The name of the entry point in your module of a script that should
   *       be run after the best model from the hyperparameter search has been
   *       identified, to compute the model artifacts necessary for model deployment.
   *       It should be able to run with no command-line arguments.The default is
   *       <code>transform.py</code>.</p>
   */
  transformEntryPointScript?: string;
}

/**
 * @public
 */
export interface StartMLModelTrainingJobInput {
  /**
   * @public
   * <p>A unique identifier for the new job. The default is An autogenerated UUID.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The job ID of a completed model-training job that you want to update
   *       incrementally based on updated data.</p>
   */
  previousModelTrainingJobId?: string;

  /**
   * @public
   * <p>The job ID of the completed data-processing job that has created
   *       the data that the training will work with.</p>
   */
  dataProcessingJobId: string | undefined;

  /**
   * @public
   * <p>The location in Amazon S3 where the model artifacts are to be stored.</p>
   */
  trainModelS3Location: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role for SageMaker execution.This must be listed
   *       in your DB cluster parameter group or an error will occur.</p>
   */
  sagemakerIamRoleArn?: string;

  /**
   * @public
   * <p>The ARN of an IAM role that provides Neptune access to SageMaker
   *       and Amazon S3 resources. This must be listed in your DB cluster
   *       parameter group or an error will occur.</p>
   */
  neptuneIamRoleArn?: string;

  /**
   * @public
   * <p>The type of ML instance used in preparing and managing training
   *       of ML models. This is a CPU instance chosen based on memory requirements
   *       for processing the training data and model.</p>
   */
  baseProcessingInstanceType?: string;

  /**
   * @public
   * <p>The type of ML instance used for model training. All Neptune ML
   *       models support CPU, GPU, and multiGPU training. The default is
   *       <code>ml.p3.2xlarge</code>. Choosing the right instance type for
   *       training depends on the task type, graph size, and your budget.</p>
   */
  trainingInstanceType?: string;

  /**
   * @public
   * <p>The disk volume size of the training instance. Both input data
   *       and the output model are stored on disk, so the volume size must be
   *       large enough to hold both data sets. The default is 0. If not specified
   *       or 0, Neptune ML selects a disk volume size based on the recommendation
   *       generated in the data processing step.</p>
   */
  trainingInstanceVolumeSizeInGB?: number;

  /**
   * @public
   * <p>Timeout in seconds for the training job. The default is 86,400 (1 day).</p>
   */
  trainingTimeOutInSeconds?: number;

  /**
   * @public
   * <p>Maximum total number of training jobs to start for the hyperparameter
   *     tuning job. The default is 2. Neptune ML automatically tunes the hyperparameters
   *     of the machine learning model.  To obtain a model that performs well, use at
   *     least 10 jobs (in other words, set <code>maxHPONumberOfTrainingJobs</code> to 10).
   *     In general, the more tuning runs, the better the results.</p>
   */
  maxHPONumberOfTrainingJobs?: number;

  /**
   * @public
   * <p>Maximum number of parallel training jobs to start for the hyperparameter
   *       tuning job. The default is 2. The number of parallel jobs you can run is
   *       limited by the available resources on your training instance.</p>
   */
  maxHPOParallelTrainingJobs?: number;

  /**
   * @public
   * <p>The IDs of the subnets in the Neptune VPC. The default is None.</p>
   */
  subnets?: string[];

  /**
   * @public
   * <p>The VPC security group IDs. The default is None.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>The Amazon Key Management Service (KMS) key that SageMaker uses to
   *       encrypt data on the storage volume attached to the ML compute instances
   *       that run the training job. The default is None.</p>
   */
  volumeEncryptionKMSKey?: string;

  /**
   * @public
   * <p>The Amazon Key Management Service (KMS) key that SageMaker uses
   *       to encrypt the output of the processing job. The default is none.</p>
   */
  s3OutputEncryptionKMSKey?: string;

  /**
   * @public
   * <p>Optimizes the cost of training machine-learning models by using
   *       Amazon Elastic Compute Cloud spot instances. The default is <code>False</code>.</p>
   */
  enableManagedSpotTraining?: boolean;

  /**
   * @public
   * <p>The configuration for custom model training. This is a JSON object.</p>
   */
  customModelTrainingParameters?: CustomModelTrainingParameters;
}

/**
 * @public
 */
export interface StartMLModelTrainingJobOutput {
  /**
   * @public
   * <p>The unique ID of the new model training job.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The ARN of the new model training job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The model training job creation time, in milliseconds.</p>
   */
  creationTimeInMillis?: number;
}

/**
 * @public
 * <p>Contains custom model transform parameters. See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/machine-learning-model-transform.html">Use
 *       a trained model to generate new model artifacts</a>.</p>
 */
export interface CustomModelTransformParameters {
  /**
   * @public
   * <p>The path to the Amazon S3 location where the Python module
   *       implementing your model is located. This must point to a valid
   *       existing Amazon S3 location that contains, at a minimum, a training
   *       script, a transform script, and a <code>model-hpo-configuration.json</code>
   *       file.</p>
   */
  sourceS3DirectoryPath: string | undefined;

  /**
   * @public
   * <p>The name of the entry point in your module of a script that should
   *       be run after the best model from the hyperparameter search has been
   *       identified, to compute the model artifacts necessary for model deployment.
   *       It should be able to run with no command-line arguments. The default
   *       is <code>transform.py</code>.</p>
   */
  transformEntryPointScript?: string;
}

/**
 * @public
 */
export interface StartMLModelTransformJobInput {
  /**
   * @public
   * <p>A unique identifier for the new job. The default is an autogenerated UUID.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The job ID of a completed data-processing job. You must include either
   *       <code>dataProcessingJobId</code> and a <code>mlModelTrainingJobId</code>,
   *       or a <code>trainingJobName</code>.</p>
   */
  dataProcessingJobId?: string;

  /**
   * @public
   * <p>The job ID of a completed model-training job. You must include either
   *       <code>dataProcessingJobId</code> and a <code>mlModelTrainingJobId</code>,
   *       or a <code>trainingJobName</code>.</p>
   */
  mlModelTrainingJobId?: string;

  /**
   * @public
   * <p>The name of a completed SageMaker training job. You must include either
   *       <code>dataProcessingJobId</code> and a <code>mlModelTrainingJobId</code>,
   *       or a <code>trainingJobName</code>.</p>
   */
  trainingJobName?: string;

  /**
   * @public
   * <p>The location in Amazon S3 where the model artifacts are to be stored.</p>
   */
  modelTransformOutputS3Location: string | undefined;

  /**
   * @public
   * <p>The ARN of an IAM role for SageMaker execution. This must be listed
   *     in your DB cluster parameter group or an error will occur.</p>
   */
  sagemakerIamRoleArn?: string;

  /**
   * @public
   * <p>The ARN of an IAM role that provides Neptune access to SageMaker
   *       and Amazon S3 resources. This must be listed in your DB cluster
   *       parameter group or an error will occur.</p>
   */
  neptuneIamRoleArn?: string;

  /**
   * @public
   * <p>Configuration information for a model transform using a custom model.
   *     The <code>customModelTransformParameters</code> object contains the following
   *     fields, which must have values compatible with the saved model parameters from
   *     the training job:</p>
   */
  customModelTransformParameters?: CustomModelTransformParameters;

  /**
   * @public
   * <p>The type of ML instance used in preparing and managing training of ML models.
   *     This is an ML compute instance chosen based on memory requirements for processing
   *     the training data and model.</p>
   */
  baseProcessingInstanceType?: string;

  /**
   * @public
   * <p>The disk volume size of the training instance in gigabytes. The default is 0.
   *       Both input data and the output model are stored on disk, so the volume size must
   *       be large enough to hold both data sets. If not specified or 0, Neptune ML selects
   *       a disk volume size based on the recommendation generated in the data processing step.</p>
   */
  baseProcessingInstanceVolumeSizeInGB?: number;

  /**
   * @public
   * <p>The IDs of the subnets in the Neptune VPC. The default is None.</p>
   */
  subnets?: string[];

  /**
   * @public
   * <p>The VPC security group IDs. The default is None.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>The Amazon Key Management Service (KMS) key that SageMaker uses to encrypt data
   *     on the storage volume attached to the ML compute instances that run the training job.
   *     The default is None.</p>
   */
  volumeEncryptionKMSKey?: string;

  /**
   * @public
   * <p>The Amazon Key Management Service (KMS) key that SageMaker uses to
   *       encrypt the output of the processing job. The default is none.</p>
   */
  s3OutputEncryptionKMSKey?: string;
}

/**
 * @public
 */
export interface StartMLModelTransformJobOutput {
  /**
   * @public
   * <p>The unique ID of the new model transform job.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The ARN of the model transform job.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The creation time of the model transform job, in milliseconds.</p>
   */
  creationTimeInMillis?: number;
}
