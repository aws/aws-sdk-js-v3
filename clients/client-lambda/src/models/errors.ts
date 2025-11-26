// smithy-typescript generated code
import type { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ThrottleReason } from "./enums";
import { LambdaServiceException as __BaseException } from "./LambdaServiceException";

/**
 * <p>One of the parameters in the request is not valid.</p>
 * @public
 */
export class InvalidParameterValueException extends __BaseException {
  readonly name = "InvalidParameterValueException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

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
    this.Type = opts.Type;
  }
}

/**
 * <p>The permissions policy for the resource is too large. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 * @public
 */
export class PolicyLengthExceededException extends __BaseException {
  readonly name = "PolicyLengthExceededException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyLengthExceededException, __BaseException>) {
    super({
      name: "PolicyLengthExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyLengthExceededException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias.</p> <ul> <li> <p> <b>For AddPermission and RemovePermission API operations:</b> Call <code>GetPolicy</code> to retrieve the latest RevisionId for your resource.</p> </li> <li> <p> <b>For all other API operations:</b> Call <code>GetFunction</code> or <code>GetAlias</code> to retrieve the latest RevisionId for your resource.</p> </li> </ul>
 * @public
 */
export class PreconditionFailedException extends __BaseException {
  readonly name = "PreconditionFailedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionFailedException, __BaseException>) {
    super({
      name: "PreconditionFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionFailedException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>The resource already exists, or another operation is in progress.</p>
 * @public
 */
export class ResourceConflictException extends __BaseException {
  readonly name = "ResourceConflictException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>The resource specified in the request does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
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
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The Lambda service encountered an internal error.</p>
 * @public
 */
export class ServiceException extends __BaseException {
  readonly name = "ServiceException" as const;
  readonly $fault = "server" as const;
  Type?: string | undefined;
  Message?: string | undefined;
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
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name = "TooManyRequestsException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The number of seconds the caller should wait before retrying.</p>
   * @public
   */
  retryAfterSeconds?: string | undefined;

  Type?: string | undefined;
  Reason?: ThrottleReason | undefined;
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
    this.retryAfterSeconds = opts.retryAfterSeconds;
    this.Type = opts.Type;
    this.Reason = opts.Reason;
  }
}

/**
 * <p>The maximum number of capacity providers for your account has been exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a> </p>
 * @public
 */
export class CapacityProviderLimitExceededException extends __BaseException {
  readonly name = "CapacityProviderLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CapacityProviderLimitExceededException, __BaseException>) {
    super({
      name: "CapacityProviderLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CapacityProviderLimitExceededException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>The operation conflicts with the resource's availability. For example, you tried to update an event source mapping in the CREATING state, or you tried to delete an event source mapping currently UPDATING.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name = "ResourceInUseException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  Message?: string | undefined;
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
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified code signing configuration does not exist.</p>
 * @public
 */
export class CodeSigningConfigNotFoundException extends __BaseException {
  readonly name = "CodeSigningConfigNotFoundException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CodeSigningConfigNotFoundException, __BaseException>) {
    super({
      name: "CodeSigningConfigNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CodeSigningConfigNotFoundException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Your Amazon Web Services account has exceeded its maximum total code size. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 * @public
 */
export class CodeStorageExceededException extends __BaseException {
  readonly name = "CodeStorageExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CodeStorageExceededException, __BaseException>) {
    super({
      name: "CodeStorageExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CodeStorageExceededException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>The code signature failed one or more of the validation checks for signature mismatch or expiry, and the code signing policy is set to ENFORCE. Lambda blocks the deployment.</p>
 * @public
 */
export class CodeVerificationFailedException extends __BaseException {
  readonly name = "CodeVerificationFailedException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CodeVerificationFailedException, __BaseException>) {
    super({
      name: "CodeVerificationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CodeVerificationFailedException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The maximum number of function versions that can be associated with a single capacity provider has been exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 * @public
 */
export class FunctionVersionsPerCapacityProviderLimitExceededException extends __BaseException {
  readonly name = "FunctionVersionsPerCapacityProviderLimitExceededException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FunctionVersionsPerCapacityProviderLimitExceededException, __BaseException>) {
    super({
      name: "FunctionVersionsPerCapacityProviderLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FunctionVersionsPerCapacityProviderLimitExceededException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>The code signature failed the integrity check. If the integrity check fails, then Lambda blocks deployment, even if the code signing policy is set to WARN.</p>
 * @public
 */
export class InvalidCodeSignatureException extends __BaseException {
  readonly name = "InvalidCodeSignatureException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCodeSignatureException, __BaseException>) {
    super({
      name: "InvalidCodeSignatureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCodeSignatureException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The durable execution with the specified name has already been started. Each durable execution name must be unique within the function. Use a different name or check the status of the existing execution.</p>
 * @public
 */
export class DurableExecutionAlreadyStartedException extends __BaseException {
  readonly name = "DurableExecutionAlreadyStartedException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DurableExecutionAlreadyStartedException, __BaseException>) {
    super({
      name: "DurableExecutionAlreadyStartedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DurableExecutionAlreadyStartedException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Need additional permissions to configure VPC settings.</p>
 * @public
 */
export class EC2AccessDeniedException extends __BaseException {
  readonly name = "EC2AccessDeniedException" as const;
  readonly $fault = "server" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EC2AccessDeniedException, __BaseException>) {
    super({
      name: "EC2AccessDeniedException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, EC2AccessDeniedException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Amazon EC2 throttled Lambda during Lambda function initialization using the execution role provided for the function.</p>
 * @public
 */
export class EC2ThrottledException extends __BaseException {
  readonly name = "EC2ThrottledException" as const;
  readonly $fault = "server" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EC2ThrottledException, __BaseException>) {
    super({
      name: "EC2ThrottledException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, EC2ThrottledException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Lambda received an unexpected Amazon EC2 client exception while setting up for the Lambda function.</p>
 * @public
 */
export class EC2UnexpectedException extends __BaseException {
  readonly name = "EC2UnexpectedException" as const;
  readonly $fault = "server" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  EC2ErrorCode?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EC2UnexpectedException, __BaseException>) {
    super({
      name: "EC2UnexpectedException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, EC2UnexpectedException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
    this.EC2ErrorCode = opts.EC2ErrorCode;
  }
}

/**
 * <p>An error occurred when reading from or writing to a connected file system.</p>
 * @public
 */
export class EFSIOException extends __BaseException {
  readonly name = "EFSIOException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EFSIOException, __BaseException>) {
    super({
      name: "EFSIOException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EFSIOException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The Lambda function couldn't make a network connection to the configured file system.</p>
 * @public
 */
export class EFSMountConnectivityException extends __BaseException {
  readonly name = "EFSMountConnectivityException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EFSMountConnectivityException, __BaseException>) {
    super({
      name: "EFSMountConnectivityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EFSMountConnectivityException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The Lambda function couldn't mount the configured file system due to a permission or configuration issue.</p>
 * @public
 */
export class EFSMountFailureException extends __BaseException {
  readonly name = "EFSMountFailureException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EFSMountFailureException, __BaseException>) {
    super({
      name: "EFSMountFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EFSMountFailureException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The Lambda function made a network connection to the configured file system, but the mount operation timed out.</p>
 * @public
 */
export class EFSMountTimeoutException extends __BaseException {
  readonly name = "EFSMountTimeoutException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EFSMountTimeoutException, __BaseException>) {
    super({
      name: "EFSMountTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EFSMountTimeoutException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Lambda couldn't create an elastic network interface in the VPC, specified as part of Lambda function configuration, because the limit for network interfaces has been reached. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 * @public
 */
export class ENILimitReachedException extends __BaseException {
  readonly name = "ENILimitReachedException" as const;
  readonly $fault = "server" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ENILimitReachedException, __BaseException>) {
    super({
      name: "ENILimitReachedException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ENILimitReachedException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request body could not be parsed as JSON, or a request header is invalid. For example, the 'x-amzn-RequestId' header is not a valid UUID string.</p>
 * @public
 */
export class InvalidRequestContentException extends __BaseException {
  readonly name = "InvalidRequestContentException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestContentException, __BaseException>) {
    super({
      name: "InvalidRequestContentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestContentException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>The runtime or runtime version specified is not supported.</p>
 * @public
 */
export class InvalidRuntimeException extends __BaseException {
  readonly name = "InvalidRuntimeException" as const;
  readonly $fault = "server" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRuntimeException, __BaseException>) {
    super({
      name: "InvalidRuntimeException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRuntimeException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The security group ID provided in the Lambda function VPC configuration is not valid.</p>
 * @public
 */
export class InvalidSecurityGroupIDException extends __BaseException {
  readonly name = "InvalidSecurityGroupIDException" as const;
  readonly $fault = "server" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSecurityGroupIDException, __BaseException>) {
    super({
      name: "InvalidSecurityGroupIDException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSecurityGroupIDException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The subnet ID provided in the Lambda function VPC configuration is not valid.</p>
 * @public
 */
export class InvalidSubnetIDException extends __BaseException {
  readonly name = "InvalidSubnetIDException" as const;
  readonly $fault = "server" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSubnetIDException, __BaseException>) {
    super({
      name: "InvalidSubnetIDException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSubnetIDException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Lambda could not unzip the deployment package.</p>
 * @public
 */
export class InvalidZipFileException extends __BaseException {
  readonly name = "InvalidZipFileException" as const;
  readonly $fault = "server" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidZipFileException, __BaseException>) {
    super({
      name: "InvalidZipFileException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidZipFileException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Lambda couldn't decrypt the environment variables because KMS access was denied. Check the Lambda function's KMS permissions.</p>
 * @public
 */
export class KMSAccessDeniedException extends __BaseException {
  readonly name = "KMSAccessDeniedException" as const;
  readonly $fault = "server" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSAccessDeniedException, __BaseException>) {
    super({
      name: "KMSAccessDeniedException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSAccessDeniedException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Lambda couldn't decrypt the environment variables because the KMS key used is disabled. Check the Lambda function's KMS key settings.</p>
 * @public
 */
export class KMSDisabledException extends __BaseException {
  readonly name = "KMSDisabledException" as const;
  readonly $fault = "server" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSDisabledException, __BaseException>) {
    super({
      name: "KMSDisabledException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSDisabledException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Lambda couldn't decrypt the environment variables because the state of the KMS key used is not valid for Decrypt. Check the function's KMS key settings.</p>
 * @public
 */
export class KMSInvalidStateException extends __BaseException {
  readonly name = "KMSInvalidStateException" as const;
  readonly $fault = "server" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSInvalidStateException, __BaseException>) {
    super({
      name: "KMSInvalidStateException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSInvalidStateException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Lambda couldn't decrypt the environment variables because the KMS key was not found. Check the function's KMS key settings.</p>
 * @public
 */
export class KMSNotFoundException extends __BaseException {
  readonly name = "KMSNotFoundException" as const;
  readonly $fault = "server" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSNotFoundException, __BaseException>) {
    super({
      name: "KMSNotFoundException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSNotFoundException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The function has no published versions available.</p>
 * @public
 */
export class NoPublishedVersionException extends __BaseException {
  readonly name = "NoPublishedVersionException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoPublishedVersionException, __BaseException>) {
    super({
      name: "NoPublishedVersionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoPublishedVersionException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Lambda has detected your function being invoked in a recursive loop with other Amazon Web Services resources and stopped your function's invocation.</p>
 * @public
 */
export class RecursiveInvocationException extends __BaseException {
  readonly name = "RecursiveInvocationException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The exception message.</p>
   * @public
   */
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RecursiveInvocationException, __BaseException>) {
    super({
      name: "RecursiveInvocationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RecursiveInvocationException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request payload exceeded the <code>Invoke</code> request body JSON input quota. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 * @public
 */
export class RequestTooLargeException extends __BaseException {
  readonly name = "RequestTooLargeException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTooLargeException, __BaseException>) {
    super({
      name: "RequestTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTooLargeException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>The function is inactive and its VPC connection is no longer available. Wait for the VPC connection to reestablish and try again.</p>
 * @public
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name = "ResourceNotReadyException" as const;
  readonly $fault = "server" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotReadyException, __BaseException>) {
    super({
      name: "ResourceNotReadyException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotReadyException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>The request payload exceeded the maximum allowed size for serialized request entities.</p>
 * @public
 */
export class SerializedRequestEntityTooLargeException extends __BaseException {
  readonly name = "SerializedRequestEntityTooLargeException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The error type.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SerializedRequestEntityTooLargeException, __BaseException>) {
    super({
      name: "SerializedRequestEntityTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SerializedRequestEntityTooLargeException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>The <code>afterRestore()</code> <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart-runtime-hooks.html">runtime hook</a> encountered an error. For more information, check the Amazon CloudWatch logs.</p>
 * @public
 */
export class SnapStartException extends __BaseException {
  readonly name = "SnapStartException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapStartException, __BaseException>) {
    super({
      name: "SnapStartException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapStartException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Lambda is initializing your function. You can invoke the function when the <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">function state</a> becomes <code>Active</code>.</p>
 * @public
 */
export class SnapStartNotReadyException extends __BaseException {
  readonly name = "SnapStartNotReadyException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapStartNotReadyException, __BaseException>) {
    super({
      name: "SnapStartNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapStartNotReadyException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Lambda couldn't restore the snapshot within the timeout limit.</p>
 * @public
 */
export class SnapStartTimeoutException extends __BaseException {
  readonly name = "SnapStartTimeoutException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SnapStartTimeoutException, __BaseException>) {
    super({
      name: "SnapStartTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SnapStartTimeoutException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>Lambda couldn't set up VPC access for the Lambda function because one or more configured subnets has no available IP addresses.</p>
 * @public
 */
export class SubnetIPAddressLimitReachedException extends __BaseException {
  readonly name = "SubnetIPAddressLimitReachedException" as const;
  readonly $fault = "server" as const;
  Type?: string | undefined;
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetIPAddressLimitReachedException, __BaseException>) {
    super({
      name: "SubnetIPAddressLimitReachedException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetIPAddressLimitReachedException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}

/**
 * <p>The content type of the <code>Invoke</code> request body is not JSON.</p>
 * @public
 */
export class UnsupportedMediaTypeException extends __BaseException {
  readonly name = "UnsupportedMediaTypeException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedMediaTypeException, __BaseException>) {
    super({
      name: "UnsupportedMediaTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedMediaTypeException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>The specified configuration does not exist.</p>
 * @public
 */
export class ProvisionedConcurrencyConfigNotFoundException extends __BaseException {
  readonly name = "ProvisionedConcurrencyConfigNotFoundException" as const;
  readonly $fault = "client" as const;
  Type?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ProvisionedConcurrencyConfigNotFoundException, __BaseException>) {
    super({
      name: "ProvisionedConcurrencyConfigNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ProvisionedConcurrencyConfigNotFoundException.prototype);
    this.Type = opts.Type;
  }
}

/**
 * <p>The callback ID token has either expired or the callback associated with the token has already been closed.</p>
 * @public
 */
export class CallbackTimeoutException extends __BaseException {
  readonly name = "CallbackTimeoutException" as const;
  readonly $fault = "client" as const;
  /**
   * <p>The exception type.</p>
   * @public
   */
  Type?: string | undefined;

  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CallbackTimeoutException, __BaseException>) {
    super({
      name: "CallbackTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CallbackTimeoutException.prototype);
    this.Type = opts.Type;
    this.Message = opts.Message;
  }
}
