// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SupplyChainServiceException as __BaseException } from "./SupplyChainServiceException";

/**
 * @public
 * <p>You do not have the required privileges to perform this action.</p>
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
 * @public
 * <p>The BillOfMaterialsImportJob details.</p>
 */
export interface BillOfMaterialsImportJob {
  /**
   * @public
   * <p>The BillOfMaterialsImportJob instanceId.</p>
   */
  instanceId: string | undefined;

  /**
   * @public
   * <p>The BillOfMaterialsImportJob jobId.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The BillOfMaterialsImportJob ConfigurationJobStatus.</p>
   */
  status: ConfigurationJobStatus | undefined;

  /**
   * @public
   * <p>The S3 URI from which the CSV is read.</p>
   */
  s3uri: string | undefined;

  /**
   * @public
   * <p>When the BillOfMaterialsImportJob has reached a terminal state, there will be a message.</p>
   */
  message?: string;
}

/**
 * @public
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
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
 * @public
 * <p>The request parameters for CreateBillOfMaterialsImportJob.</p>
 */
export interface CreateBillOfMaterialsImportJobRequest {
  /**
   * @public
   * <p>The AWS Supply Chain instance identifier.</p>
   */
  instanceId: string | undefined;

  /**
   * @public
   * <p>The S3 URI of the CSV file to be imported. The bucket must grant permissions for AWS Supply Chain to read the file.</p>
   */
  s3uri: string | undefined;

  /**
   * @public
   * <p>An idempotency token.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>The response parameters of CreateBillOfMaterialsImportJob.</p>
 */
export interface CreateBillOfMaterialsImportJobResponse {
  /**
   * @public
   * <p>The new BillOfMaterialsImportJob identifier.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * <p>Unexpected error during processing of request.</p>
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
 * @public
 * <p>Request references a resource which does not exist.</p>
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
 * @public
 * <p>Request would cause a service quota to be exceeded.</p>
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
 * @public
 * <p>Request was denied due to request throttling.</p>
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
 * @public
 * <p>The input does not satisfy the constraints specified by an AWS service.</p>
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
 * @public
 * <p>The request parameters for GetBillOfMaterialsImportJob.</p>
 */
export interface GetBillOfMaterialsImportJobRequest {
  /**
   * @public
   * <p>The AWS Supply Chain instance identifier.</p>
   */
  instanceId: string | undefined;

  /**
   * @public
   * <p>The BillOfMaterialsImportJob identifier.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 * <p>The response parameters for GetBillOfMaterialsImportJob.</p>
 */
export interface GetBillOfMaterialsImportJobResponse {
  /**
   * @public
   * <p>The BillOfMaterialsImportJob.</p>
   */
  job: BillOfMaterialsImportJob | undefined;
}
