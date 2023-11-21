// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CloudFrontKeyValueStoreServiceException as __BaseException } from "./CloudFrontKeyValueStoreServiceException";

/**
 * @public
 * <p>Access denied.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>Resource is not in expected state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the Key Value Store.</p>
   */
  KvsARN: string | undefined;

  /**
   * @public
   * <p>The key to delete.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The current version (ETag) of the Key Value Store that you are deleting keys from, which you can get using DescribeKeyValueStore.</p>
   */
  IfMatch: string | undefined;
}

/**
 * @public
 * <p>Metadata information about a Key Value Store.</p>
 */
export interface DeleteKeyResponse {
  /**
   * @public
   * <p>Number of key value pairs in the Key Value Store after the successful delete.</p>
   */
  ItemCount: number | undefined;

  /**
   * @public
   * <p>Total size of the Key Value Store after the successful delete, in bytes.</p>
   */
  TotalSizeInBytes: number | undefined;

  /**
   * @public
   * <p>The current version identifier of the Key Value Store after the successful delete.</p>
   */
  ETag: string | undefined;
}

/**
 * @public
 * <p>Internal server error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * @public
 * <p>Resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>Limit exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>Validation failed.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the Key Value Store.</p>
   */
  KvsARN: string | undefined;
}

/**
 * @public
 * <p>Metadata information about a Key Value Store.</p>
 */
export interface DescribeKeyValueStoreResponse {
  /**
   * @public
   * <p>Number of key value pairs in the Key Value Store.</p>
   */
  ItemCount: number | undefined;

  /**
   * @public
   * <p>Total size of the Key Value Store in bytes.</p>
   */
  TotalSizeInBytes: number | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Key Value Store.</p>
   */
  KvsARN: string | undefined;

  /**
   * @public
   * <p>Date and time when the Key Value Store was created.</p>
   */
  Created: Date | undefined;

  /**
   * @public
   * <p>The version identifier for the current version of the Key Value Store.</p>
   */
  ETag: string | undefined;

  /**
   * @public
   * <p>Date and time when the key value pairs in the Key Value Store was last modified.</p>
   */
  LastModified?: Date;
}

/**
 * @public
 */
export interface GetKeyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Key Value Store.</p>
   */
  KvsARN: string | undefined;

  /**
   * @public
   * <p>The key to get.</p>
   */
  Key: string | undefined;
}

/**
 * @public
 * <p>A key value pair.</p>
 */
export interface GetKeyResponse {
  /**
   * @public
   * <p>The key of the key value pair.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value of the key value pair.</p>
   */
  Value: string | undefined;

  /**
   * @public
   * <p>Number of key value pairs in the Key Value Store.</p>
   */
  ItemCount: number | undefined;

  /**
   * @public
   * <p>Total size of the Key Value Store in bytes.</p>
   */
  TotalSizeInBytes: number | undefined;
}

/**
 * @public
 */
export interface ListKeysRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Key Value Store.</p>
   */
  KvsARN: string | undefined;

  /**
   * @public
   * <p>If nextToken is returned in the response, there are more results available. Make the next call using the returned token to retrieve the next page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of results that are returned per call. The default is 10 and maximum allowed page is 50.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A key value pair.</p>
 */
export interface ListKeysResponseListItem {
  /**
   * @public
   * <p>The key of the key value pair.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value of the key value pair.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListKeysResponse {
  /**
   * @public
   * <p>If nextToken is returned in the response, there are more results available. Make the next call using the returned token to retrieve the next page.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Key value pairs</p>
   */
  Items?: ListKeysResponseListItem[];
}

/**
 * @public
 * <p>A key value pair.</p>
 */
export interface PutKeyRequest {
  /**
   * @public
   * <p>The key to put.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value to put.</p>
   */
  Value: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Key Value Store.</p>
   */
  KvsARN: string | undefined;

  /**
   * @public
   * <p>The current version (ETag) of the Key Value Store that you are putting keys into, which you can get using DescribeKeyValueStore.</p>
   */
  IfMatch: string | undefined;
}

/**
 * @public
 * <p>Metadata information about a Key Value Store.</p>
 */
export interface PutKeyResponse {
  /**
   * @public
   * <p>Number of key value pairs in the Key Value Store after the successful put.</p>
   */
  ItemCount: number | undefined;

  /**
   * @public
   * <p>Total size of the Key Value Store after the successful put, in bytes.</p>
   */
  TotalSizeInBytes: number | undefined;

  /**
   * @public
   * <p>The current version identifier of the Key Value Store after the successful put.</p>
   */
  ETag: string | undefined;
}

/**
 * @public
 * <p>List item for keys to delete.</p>
 */
export interface DeleteKeyRequestListItem {
  /**
   * @public
   * <p>The key of the key value pair to be deleted.</p>
   */
  Key: string | undefined;
}

/**
 * @public
 * <p>List item for key value pair to put.</p>
 */
export interface PutKeyRequestListItem {
  /**
   * @public
   * <p>The key of the key value pair list item to put.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value for the key value pair to put.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeysRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Key Value Store.</p>
   */
  KvsARN: string | undefined;

  /**
   * @public
   * <p>The current version (ETag) of the Key Value Store that you are updating keys of, which you can get using DescribeKeyValueStore.</p>
   */
  IfMatch: string | undefined;

  /**
   * @public
   * <p>List of key value pairs to put.</p>
   */
  Puts?: PutKeyRequestListItem[];

  /**
   * @public
   * <p>List of keys to delete.</p>
   */
  Deletes?: DeleteKeyRequestListItem[];
}

/**
 * @public
 * <p>Metadata information about a Key Value Store.</p>
 */
export interface UpdateKeysResponse {
  /**
   * @public
   * <p>Number of key value pairs in the Key Value Store after the successful update.</p>
   */
  ItemCount: number | undefined;

  /**
   * @public
   * <p>Total size of the Key Value Store after the successful update, in bytes.</p>
   */
  TotalSizeInBytes: number | undefined;

  /**
   * @public
   * <p>The current version identifier of the Key Value Store after the successful update.</p>
   */
  ETag: string | undefined;
}

/**
 * @internal
 */
export const GetKeyResponseFilterSensitiveLog = (obj: GetKeyResponse): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListKeysResponseListItemFilterSensitiveLog = (obj: ListKeysResponseListItem): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListKeysResponseFilterSensitiveLog = (obj: ListKeysResponse): any => ({
  ...obj,
  ...(obj.Items && { Items: obj.Items.map((item) => ListKeysResponseListItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PutKeyRequestFilterSensitiveLog = (obj: PutKeyRequest): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutKeyRequestListItemFilterSensitiveLog = (obj: PutKeyRequestListItem): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateKeysRequestFilterSensitiveLog = (obj: UpdateKeysRequest): any => ({
  ...obj,
  ...(obj.Puts && { Puts: obj.Puts.map((item) => PutKeyRequestListItemFilterSensitiveLog(item)) }),
});
