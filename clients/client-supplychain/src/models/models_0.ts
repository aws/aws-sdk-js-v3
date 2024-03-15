// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SupplyChainServiceException as __BaseException } from "./SupplyChainServiceException";

/**
 * <p>You do not have the required privileges to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
 * @public
 * @enum
 */
export const ConfigurationJobStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NEW: "NEW",
  QUEUED: "QUEUED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type ConfigurationJobStatus = (typeof ConfigurationJobStatus)[keyof typeof ConfigurationJobStatus];

/**
 * <p>The BillOfMaterialsImportJob details.</p>
 * @public
 */
export interface BillOfMaterialsImportJob {
  /**
   * <p>The BillOfMaterialsImportJob instanceId.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The BillOfMaterialsImportJob jobId.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The BillOfMaterialsImportJob ConfigurationJobStatus.</p>
   * @public
   */
  status: ConfigurationJobStatus | undefined;

  /**
   * <p>The S3 URI from which the CSV is read.</p>
   * @public
   */
  s3uri: string | undefined;

  /**
   * <p>When the BillOfMaterialsImportJob has reached a terminal state, there will be a message.</p>
   * @public
   */
  message?: string;
}

/**
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
 * <p>The request parameters for CreateBillOfMaterialsImportJob.</p>
 * @public
 */
export interface CreateBillOfMaterialsImportJobRequest {
  /**
   * <p>The AWS Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The S3 URI of the CSV file to be imported. The bucket must grant permissions for AWS Supply Chain to read the file.</p>
   * @public
   */
  s3uri: string | undefined;

  /**
   * <p>An idempotency token.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * <p>The response parameters of CreateBillOfMaterialsImportJob.</p>
 * @public
 */
export interface CreateBillOfMaterialsImportJobResponse {
  /**
   * <p>The new BillOfMaterialsImportJob identifier.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>Unexpected error during processing of request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
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
 * <p>Request references a resource which does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
 * <p>Request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
 * <p>Request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
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
 * <p>The input does not satisfy the constraints specified by an AWS service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
 * <p>The request parameters for GetBillOfMaterialsImportJob.</p>
 * @public
 */
export interface GetBillOfMaterialsImportJobRequest {
  /**
   * <p>The AWS Supply Chain instance identifier.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The BillOfMaterialsImportJob identifier.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>The response parameters for GetBillOfMaterialsImportJob.</p>
 * @public
 */
export interface GetBillOfMaterialsImportJobResponse {
  /**
   * <p>The BillOfMaterialsImportJob.</p>
   * @public
   */
  job: BillOfMaterialsImportJob | undefined;
}
