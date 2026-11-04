// smithy-typescript generated code
/**
 * @public
 */
export interface DeleteKeyRequest {
  /**
   * The Amazon Resource Name (ARN) of the Key Value Store.
   *
   * @public
   */
  KvsARN: string | undefined;

  /**
   * The key to delete.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The current version (ETag) of the Key Value Store that you are deleting keys from, which you can get using DescribeKeyValueStore.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * Metadata information about a Key Value Store.
 *
 * @public
 */
export interface DeleteKeyResponse {
  /**
   * Number of key value pairs in the Key Value Store after the successful delete.
   *
   * @public
   */
  ItemCount: number | undefined;

  /**
   * Total size of the Key Value Store after the successful delete, in bytes.
   *
   * @public
   */
  TotalSizeInBytes: number | undefined;

  /**
   * The current version identifier of the Key Value Store after the successful delete.
   *
   * @public
   */
  ETag: string | undefined;
}

/**
 * @public
 */
export interface DescribeKeyValueStoreRequest {
  /**
   * The Amazon Resource Name (ARN) of the Key Value Store.
   *
   * @public
   */
  KvsARN: string | undefined;
}

/**
 * Metadata information about a Key Value Store.
 *
 * @public
 */
export interface DescribeKeyValueStoreResponse {
  /**
   * Number of key value pairs in the Key Value Store.
   *
   * @public
   */
  ItemCount: number | undefined;

  /**
   * Total size of the Key Value Store in bytes.
   *
   * @public
   */
  TotalSizeInBytes: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Key Value Store.
   *
   * @public
   */
  KvsARN: string | undefined;

  /**
   * Date and time when the Key Value Store was created.
   *
   * @public
   */
  Created: Date | undefined;

  /**
   * The version identifier for the current version of the Key Value Store.
   *
   * @public
   */
  ETag: string | undefined;

  /**
   * Date and time when the key value pairs in the Key Value Store was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The current status of the Key Value Store.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The reason for Key Value Store creation failure.
   *
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetKeyRequest {
  /**
   * The Amazon Resource Name (ARN) of the Key Value Store.
   *
   * @public
   */
  KvsARN: string | undefined;

  /**
   * The key to get.
   *
   * @public
   */
  Key: string | undefined;
}

/**
 * A key value pair.
 *
 * @public
 */
export interface GetKeyResponse {
  /**
   * The key of the key value pair.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the key value pair.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * Number of key value pairs in the Key Value Store.
   *
   * @public
   */
  ItemCount: number | undefined;

  /**
   * Total size of the Key Value Store in bytes.
   *
   * @public
   */
  TotalSizeInBytes: number | undefined;
}

/**
 * @public
 */
export interface ListKeysRequest {
  /**
   * The Amazon Resource Name (ARN) of the Key Value Store.
   *
   * @public
   */
  KvsARN: string | undefined;

  /**
   * If nextToken is returned in the response, there are more results available. Make the next call using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results that are returned per call. The default is 10 and maximum allowed page is 50.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A key value pair.
 *
 * @public
 */
export interface ListKeysResponseListItem {
  /**
   * The key of the key value pair.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the key value pair.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListKeysResponse {
  /**
   * If nextToken is returned in the response, there are more results available. Make the next call using the returned token to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Key value pairs
   *
   * @public
   */
  Items?: ListKeysResponseListItem[] | undefined;
}

/**
 * A key value pair.
 *
 * @public
 */
export interface PutKeyRequest {
  /**
   * The key to put.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value to put.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Key Value Store.
   *
   * @public
   */
  KvsARN: string | undefined;

  /**
   * The current version (ETag) of the Key Value Store that you are putting keys into, which you can get using DescribeKeyValueStore.
   *
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * Metadata information about a Key Value Store.
 *
 * @public
 */
export interface PutKeyResponse {
  /**
   * Number of key value pairs in the Key Value Store after the successful put.
   *
   * @public
   */
  ItemCount: number | undefined;

  /**
   * Total size of the Key Value Store after the successful put, in bytes.
   *
   * @public
   */
  TotalSizeInBytes: number | undefined;

  /**
   * The current version identifier of the Key Value Store after the successful put.
   *
   * @public
   */
  ETag: string | undefined;
}

/**
 * List item for keys to delete.
 *
 * @public
 */
export interface DeleteKeyRequestListItem {
  /**
   * The key of the key value pair to be deleted.
   *
   * @public
   */
  Key: string | undefined;
}

/**
 * List item for key value pair to put.
 *
 * @public
 */
export interface PutKeyRequestListItem {
  /**
   * The key of the key value pair list item to put.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value for the key value pair to put.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeysRequest {
  /**
   * The Amazon Resource Name (ARN) of the Key Value Store.
   *
   * @public
   */
  KvsARN: string | undefined;

  /**
   * The current version (ETag) of the Key Value Store that you are updating keys of, which you can get using DescribeKeyValueStore.
   *
   * @public
   */
  IfMatch: string | undefined;

  /**
   * List of key value pairs to put.
   *
   * @public
   */
  Puts?: PutKeyRequestListItem[] | undefined;

  /**
   * List of keys to delete.
   *
   * @public
   */
  Deletes?: DeleteKeyRequestListItem[] | undefined;
}

/**
 * Metadata information about a Key Value Store.
 *
 * @public
 */
export interface UpdateKeysResponse {
  /**
   * Number of key value pairs in the Key Value Store after the successful update.
   *
   * @public
   */
  ItemCount: number | undefined;

  /**
   * Total size of the Key Value Store after the successful update, in bytes.
   *
   * @public
   */
  TotalSizeInBytes: number | undefined;

  /**
   * The current version identifier of the Key Value Store after the successful update.
   *
   * @public
   */
  ETag: string | undefined;
}
