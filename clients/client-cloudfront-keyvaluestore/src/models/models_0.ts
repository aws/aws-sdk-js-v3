// smithy-typescript generated code
/**
 * @public
 */
export interface DeleteKeyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the key value store.</p>
   * @public
   */
  KvsARN: string | undefined;

  /**
   * <p>The key to delete.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The current version (<code>ETag</code>) of the key value store that you are deleting keys from, which you can get by using the <code>DescribeKeyValueStore</code> API operation.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * <p>Metadata information about a key value store.</p>
 * @public
 */
export interface DeleteKeyResponse {
  /**
   * <p>Number of key-value pairs in the key value store after the successful delete.</p>
   * @public
   */
  ItemCount: number | undefined;

  /**
   * <p>Total size of the key value store after the successful delete, in bytes.</p>
   * @public
   */
  TotalSizeInBytes: number | undefined;

  /**
   * <p>The current version identifier of the key value store after the successful delete.</p>
   * @public
   */
  ETag: string | undefined;
}

/**
 * @public
 */
export interface DescribeKeyValueStoreRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the key value store.</p>
   * @public
   */
  KvsARN: string | undefined;
}

/**
 * <p>Metadata information about a key value store.</p>
 * @public
 */
export interface DescribeKeyValueStoreResponse {
  /**
   * <p>Number of key-value pairs in the key value store.</p>
   * @public
   */
  ItemCount: number | undefined;

  /**
   * <p>Total size of the key value store in bytes.</p>
   * @public
   */
  TotalSizeInBytes: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the key value store.</p>
   * @public
   */
  KvsARN: string | undefined;

  /**
   * <p>Date and time when the key value store was created.</p>
   * @public
   */
  Created: Date | undefined;

  /**
   * <p>The version identifier for the current version of the key value store.</p>
   * @public
   */
  ETag: string | undefined;

  /**
   * <p>Date and time when the key-value pairs in the key value store was last modified.</p>
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * <p>The current status of the key value store.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The reason why the key value store wasn't created.</p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetKeyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the key value store.</p>
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
 * <p>A key-value pair.</p>
 * @public
 */
export interface GetKeyResponse {
  /**
   * <p>The key of the key-value pair.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the key-value pair.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>Number of key-value pairs in the key value store.</p>
   * @public
   */
  ItemCount: number | undefined;

  /**
   * <p>Total size of the key value store in bytes.</p>
   * @public
   */
  TotalSizeInBytes: number | undefined;
}

/**
 * @public
 */
export interface ListKeysRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the key value store.</p>
   * @public
   */
  KvsARN: string | undefined;

  /**
   * <p>If <code>nextToken</code> is returned in the response, there are more results available. Make the next call using the returned token to retrieve the next page.</p>
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
 * <p>A key-value pair.</p>
 * @public
 */
export interface ListKeysResponseListItem {
  /**
   * <p>The key of the key-value pair.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the key-value pair.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListKeysResponse {
  /**
   * <p>If <code>nextToken</code> is returned in the response, there are more results available. Make the next call using the returned token to retrieve the next page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The key-value pairs.</p>
   * @public
   */
  Items?: ListKeysResponseListItem[] | undefined;
}

/**
 * <p>A key-value pair.</p>
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
   * <p>The Amazon Resource Name (ARN) of the key value store.</p>
   * @public
   */
  KvsARN: string | undefined;

  /**
   * <p>The current version (<code>ETag</code>) of the key value store that you are putting keys into, which you can get by using the <code>DescribeKeyValueStore</code> API operation.</p>
   * @public
   */
  IfMatch: string | undefined;
}

/**
 * <p>Metadata information about a key value store.</p>
 * @public
 */
export interface PutKeyResponse {
  /**
   * <p>Number of key-value pairs in the key value store after the successful put.</p>
   * @public
   */
  ItemCount: number | undefined;

  /**
   * <p>Total size of the key value store after the successful put, in bytes.</p>
   * @public
   */
  TotalSizeInBytes: number | undefined;

  /**
   * <p>The current version identifier of the key value store after the successful put.</p>
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
   * <p>The key of the key-value pair to be deleted.</p>
   * @public
   */
  Key: string | undefined;
}

/**
 * <p>List item for key-value pair to put.</p>
 * @public
 */
export interface PutKeyRequestListItem {
  /**
   * <p>The key of the key-value pair list item to put.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value for the key-value pair to put.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface UpdateKeysRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the key value store.</p>
   * @public
   */
  KvsARN: string | undefined;

  /**
   * <p>The current version (<code>ETag</code>) of the key value store that you are updating keys of, which you can get by using the <code>DescribeKeyValueStore</code> API operation.</p>
   * @public
   */
  IfMatch: string | undefined;

  /**
   * <p>List of key-value pairs to put.</p>
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
 * <p>Metadata information about a key value store.</p>
 * @public
 */
export interface UpdateKeysResponse {
  /**
   * <p>Number of key-value pairs in the key value store after the successful update.</p>
   * @public
   */
  ItemCount: number | undefined;

  /**
   * <p>Total size of the key value store after the successful update, in bytes.</p>
   * @public
   */
  TotalSizeInBytes: number | undefined;

  /**
   * <p>The current version identifier of the key value store after the successful update.</p>
   * @public
   */
  ETag: string | undefined;
}
