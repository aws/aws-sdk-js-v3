// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { CloudFrontKeyValueStoreServiceException as __BaseException } from "./CloudFrontKeyValueStoreServiceException";

/**
 * <p>Access denied.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Resource is not in expected state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteKeyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Key Value Store.</p>
   * @public
   */
  KvsARN: string | undefined;

  /**
   * <p>The key to delete.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The current version (ETag) of the Key Value Store that you are deleting keys from, which you can get using DescribeKeyValueStore.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * <p>Metadata information about a Key Value Store.</p>
 * @public
 */
export interface DeleteKeyResponse {
  /**
   * <p>Number of key value pairs in the Key Value Store after the successful delete.</p>
   * @public
   */
  ItemCount: number | undefined;

  /**
   * <p>Total size of the Key Value Store after the successful delete, in bytes.</p>
   * @public
   */
  TotalSizeInBytes: number | undefined;

  /**
   * <p>The current version identifier of the Key Value Store after the successful delete.</p>
   * @public
   */
  ETag: string | undefined;
}

/**
 * <p>Internal server error.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Limit exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Validation failed.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeKeyValueStoreRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Key Value Store.</p>
   * @public
   */
  KvsARN: string | undefined;
}

/**
 * <p>Metadata information about a Key Value Store.</p>
 * @public
 */
export interface DescribeKeyValueStoreResponse {
  /**
   * <p>Number of key value pairs in the Key Value Store.</p>
   * @public
   */
  ItemCount: number | undefined;

  /**
   * <p>Total size of the Key Value Store in bytes.</p>
   * @public
   */
  TotalSizeInBytes: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Value Store.</p>
   * @public
   */
  KvsARN: string | undefined;

  /**
   * <p>Date and time when the Key Value Store was created.</p>
   * @public
   */
  Created: Date | undefined;

  /**
   * <p>The version identifier for the current version of the Key Value Store.</p>
   * @public
   */
  ETag: string | undefined;

  /**
   * <p>Date and time when the key value pairs in the Key Value Store was last modified.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>The current status of the Key Value Store.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The reason for Key Value Store creation failure.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetKeyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Key Value Store.</p>
   * @public
   */
  KvsARN: string | undefined;

  /**
   * <p>The key to get.</p>
   * @public
   */
  Key: string | undefined;
}

/**
 * <p>A key value pair.</p>
 * @public
 */
export interface GetKeyResponse {
  /**
   * <p>The key of the key value pair.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the key value pair.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>Number of key value pairs in the Key Value Store.</p>
   * @public
   */
  ItemCount: number | undefined;

  /**
   * <p>Total size of the Key Value Store in bytes.</p>
   * @public
   */
  TotalSizeInBytes: number | undefined;
}

/**
 * @public
 */
export interface ListKeysRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Key Value Store.</p>
   * @public
   */
  KvsARN: string | undefined;

  /**
   * <p>If nextToken is returned in the response, there are more results available. Make the next call using the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of results that are returned per call. The default is 10 and maximum allowed page is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A key value pair.</p>
 * @public
 */
export interface ListKeysResponseListItem {
  /**
   * <p>The key of the key value pair.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the key value pair.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListKeysResponse {
  /**
   * <p>If nextToken is returned in the response, there are more results available. Make the next call using the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Key value pairs</p>
   * @public
   */
  Items?: ListKeysResponseListItem[] | undefined;
}

/**
 * <p>A key value pair.</p>
 * @public
 */
export interface PutKeyRequest {
  /**
   * <p>The key to put.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value to put.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Value Store.</p>
   * @public
   */
  KvsARN: string | undefined;

  /**
   * <p>The current version (ETag) of the Key Value Store that you are putting keys into, which you can get using DescribeKeyValueStore.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * <p>Metadata information about a Key Value Store.</p>
 * @public
 */
export interface PutKeyResponse {
  /**
   * <p>Number of key value pairs in the Key Value Store after the successful put.</p>
   * @public
   */
  ItemCount: number | undefined;

  /**
   * <p>Total size of the Key Value Store after the successful put, in bytes.</p>
   * @public
   */
  TotalSizeInBytes: number | undefined;

  /**
   * <p>The current version identifier of the Key Value Store after the successful put.</p>
   * @public
   */
  ETag: string | undefined;
}

/**
 * <p>List item for keys to delete.</p>
 * @public
 */
export interface DeleteKeyRequestListItem {
  /**
   * <p>The key of the key value pair to be deleted.</p>
   * @public
   */
  Key: string | undefined;
}

/**
 * <p>List item for key value pair to put.</p>
 * @public
 */
export interface PutKeyRequestListItem {
  /**
   * <p>The key of the key value pair list item to put.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value for the key value pair to put.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeysRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Key Value Store.</p>
   * @public
   */
  KvsARN: string | undefined;

  /**
   * <p>The current version (ETag) of the Key Value Store that you are updating keys of, which you can get using DescribeKeyValueStore.</p>
   * @public
   */
  IfMatch: string | undefined;

  /**
   * <p>List of key value pairs to put.</p>
   * @public
   */
  Puts?: PutKeyRequestListItem[] | undefined;

  /**
   * <p>List of keys to delete.</p>
   * @public
   */
  Deletes?: DeleteKeyRequestListItem[] | undefined;
}

/**
 * <p>Metadata information about a Key Value Store.</p>
 * @public
 */
export interface UpdateKeysResponse {
  /**
   * <p>Number of key value pairs in the Key Value Store after the successful update.</p>
   * @public
   */
  ItemCount: number | undefined;

  /**
   * <p>Total size of the Key Value Store after the successful update, in bytes.</p>
   * @public
   */
  TotalSizeInBytes: number | undefined;

  /**
   * <p>The current version identifier of the Key Value Store after the successful update.</p>
   * @public
   */
  ETag: string | undefined;
}
