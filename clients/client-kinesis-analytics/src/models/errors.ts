// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KinesisAnalyticsServiceException as __BaseException } from "./KinesisAnalyticsServiceException";

/**
 * <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name = "ConcurrentModificationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * <p>Specified input parameter value is invalid.</p>
 * @public
 */
export class InvalidArgumentException extends __BaseException {
  readonly name = "InvalidArgumentException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>Application is not available for this operation.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * <p>Specified application can't be found.</p>
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
 * <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
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

/**
 * <p>User-provided application code (query) is invalid. This can be a simple syntax error.</p>
 * @public
 */
export class CodeValidationException extends __BaseException {
  readonly name = "CodeValidationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CodeValidationException, __BaseException>) {
    super({
      name: "CodeValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CodeValidationException.prototype);
  }
}

/**
 * <p>Exceeded the number of applications allowed.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
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
 * <p>Application created with too many tags, or too many tags added to an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
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
  }
}

/**
 * <p>Discovery failed to get a record from the
 *             streaming source because of the Amazon Kinesis Streams
 *             ProvisionedThroughputExceededException. For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html">GetRecords</a>
 *             in the Amazon Kinesis Streams API Reference.</p>
 * @public
 */
export class ResourceProvisionedThroughputExceededException extends __BaseException {
  readonly name = "ResourceProvisionedThroughputExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceProvisionedThroughputExceededException, __BaseException>) {
    super({
      name: "ResourceProvisionedThroughputExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceProvisionedThroughputExceededException.prototype);
  }
}

/**
 * <p>The service is unavailable. Back off and retry the operation. </p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
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
 * <p>Data format is not valid. Amazon Kinesis Analytics is not able to detect schema for
 *             the given streaming source.</p>
 * @public
 */
export class UnableToDetectSchemaException extends __BaseException {
  readonly name = "UnableToDetectSchemaException" as const;
  readonly $fault = "client" as const;
  RawInputRecords?: string[] | undefined;
  ProcessedInputRecords?: string[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnableToDetectSchemaException, __BaseException>) {
    super({
      name: "UnableToDetectSchemaException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnableToDetectSchemaException.prototype);
    this.RawInputRecords = opts.RawInputRecords;
    this.ProcessedInputRecords = opts.ProcessedInputRecords;
  }
}

/**
 * <p>User-provided application configuration is not valid.</p>
 * @public
 */
export class InvalidApplicationConfigurationException extends __BaseException {
  readonly name = "InvalidApplicationConfigurationException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidApplicationConfigurationException, __BaseException>) {
    super({
      name: "InvalidApplicationConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidApplicationConfigurationException.prototype);
  }
}
