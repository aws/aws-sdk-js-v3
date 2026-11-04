// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type { ItemType, StorageClass, UploadAvailability } from "./enums";

/**
 * @public
 */
export interface DeleteObjectRequest {
  /**
   * The path (including the file name) where the object is stored in the container. Format: <folder name>/<folder name>/<file name>
   *
   * @public
   */
  Path: string | undefined;
}

/**
 * @public
 */
export interface DeleteObjectResponse {}

/**
 * @public
 */
export interface DescribeObjectRequest {
  /**
   * The path (including the file name) where the object is stored in the container. Format: <folder name>/<folder name>/<file name>
   *
   * @public
   */
  Path: string | undefined;
}

/**
 * @public
 */
export interface DescribeObjectResponse {
  /**
   * The ETag that represents a unique instance of the object.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The content type of the object.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The length of the object in bytes.
   *
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * An optional `CacheControl` header that allows the caller to control the object's cache behavior. Headers can be passed in as specified in the HTTP at [https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9).
   *
   * Headers with a custom user-defined value are also accepted.
   *
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * The date and time that the object was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;
}

/**
 * @public
 */
export interface GetObjectRequest {
  /**
   * The path (including the file name) where the object is stored in the container. Format: <folder name>/<folder name>/<file name>
   *
   * For example, to upload the file `mlaw.avi` to the folder path `premium\canada` in the container `movies`, enter the path `premium/canada/mlaw.avi`.
   *
   * Do not include the container name in this path.
   *
   * If the path includes any folders that don't exist yet, the service creates them. For example, suppose you have an existing `premium/usa` subfolder. If you specify `premium/canada`, the service creates a `canada` subfolder in the `premium` folder. You then have two subfolders, `usa` and `canada`, in the `premium` folder.
   *
   * There is no correlation between the path to the source and the path (folders) in the container in AWS Elemental MediaStore.
   *
   * For more information about folders and how they exist in a container, see the [AWS Elemental MediaStore User Guide](http://docs.aws.amazon.com/mediastore/latest/ug/).
   *
   * The file name is the name that is assigned to the file that you upload. The file can have the same name inside and outside of AWS Elemental MediaStore, or it can have the same name. The file name can include or omit an extension.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The range bytes of an object to retrieve. For more information about the `Range` header, see [http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35). AWS Elemental MediaStore ignores this header for partially uploaded objects that have streaming upload availability.
   *
   * @public
   */
  Range?: string | undefined;
}

/**
 * @public
 */
export interface GetObjectResponse {
  /**
   * The bytes of the object.
   *
   * @public
   */
  Body?: StreamingBlobTypes | undefined;

  /**
   * An optional `CacheControl` header that allows the caller to control the object's cache behavior. Headers can be passed in as specified in the HTTP spec at [https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9).
   *
   * Headers with a custom user-defined value are also accepted.
   *
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * The range of bytes to retrieve.
   *
   * @public
   */
  ContentRange?: string | undefined;

  /**
   * The length of the object in bytes.
   *
   * @public
   */
  ContentLength?: number | undefined;

  /**
   * The content type of the object.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The ETag that represents a unique instance of the object.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The date and time that the object was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The HTML status code of the request. Status codes ranging from 200 to 299 indicate success. All other status codes indicate the type of error that occurred.
   *
   * @public
   */
  StatusCode: number | undefined;
}

/**
 * A metadata entry for a folder or object.
 *
 * @public
 */
export interface Item {
  /**
   * The name of the item.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The item type (folder or object).
   *
   * @public
   */
  Type?: ItemType | undefined;

  /**
   * The ETag that represents a unique instance of the item.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The date and time that the item was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The content type of the item.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The length of the item in bytes.
   *
   * @public
   */
  ContentLength?: number | undefined;
}

/**
 * @public
 */
export interface ListItemsRequest {
  /**
   * The path in the container from which to retrieve items. Format: <folder
   *          name>/<folder name>/<file name>
   *
   * @public
   */
  Path?: string | undefined;

  /**
   * The maximum number of results to return per API request. For example, you submit a `ListItems` request with `MaxResults` set at 500. Although 2,000 items match your request, the service returns no more than the first 500 items. (The service also returns a `NextToken` value that you can use to fetch the next batch of results.) The service might return fewer results than the `MaxResults` value.
   *
   * If `MaxResults` is not included in the request, the service defaults to pagination with a maximum of 1,000 results per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that identifies which batch of results that you want to see. For example, you submit a `ListItems` request with `MaxResults` set at 500. The service returns the first batch of results (up to 500) and a `NextToken` value. To see the next batch of results, you can submit the `ListItems` request a second time and specify the `NextToken` value.
   *
   * Tokens expire after 15 minutes.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListItemsResponse {
  /**
   * The metadata entries for the folders and objects at the requested path.
   *
   * @public
   */
  Items?: Item[] | undefined;

  /**
   * The token that can be used in a request to view the next set of results. For example, you submit a `ListItems` request that matches 2,000 items with `MaxResults` set at 500. The service returns the first batch of results (up to 500) and a `NextToken` value that can be used to fetch the next batch of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutObjectRequest {
  /**
   * The bytes to be stored.
   *
   * @public
   */
  Body: StreamingBlobTypes | undefined;

  /**
   * The path (including the file name) where the object is stored in the container. Format: <folder name>/<folder name>/<file name>
   *
   * For example, to upload the file `mlaw.avi` to the folder path `premium\canada` in the container `movies`, enter the path `premium/canada/mlaw.avi`.
   *
   * Do not include the container name in this path.
   *
   * If the path includes any folders that don't exist yet, the service creates them. For example, suppose you have an existing `premium/usa` subfolder. If you specify `premium/canada`, the service creates a `canada` subfolder in the `premium` folder. You then have two subfolders, `usa` and `canada`, in the `premium` folder.
   *
   * There is no correlation between the path to the source and the path (folders) in the container in AWS Elemental MediaStore.
   *
   * For more information about folders and how they exist in a container, see the [AWS Elemental MediaStore User Guide](http://docs.aws.amazon.com/mediastore/latest/ug/).
   *
   * The file name is the name that is assigned to the file that you upload. The file can have the same name inside and outside of AWS Elemental MediaStore, or it can have the same name. The file name can include or omit an extension.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The content type of the object.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * An optional `CacheControl` header that allows the caller to control the object's cache behavior. Headers can be passed in as specified in the HTTP at [https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9).
   *
   * Headers with a custom user-defined value are also accepted.
   *
   * @public
   */
  CacheControl?: string | undefined;

  /**
   * Indicates the storage class of a `Put` request. Defaults to high-performance temporal storage class, and objects are persisted into durable storage shortly after being received.
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;

  /**
   * Indicates the availability of an object while it is still uploading. If the value is set to `streaming`, the object is available for downloading after some initial buffering but before the object is uploaded completely. If the value is set to `standard`, the object is available for downloading only when it is uploaded completely. The default value for this header is `standard`.
   *
   * To use this header, you must also set the HTTP `Transfer-Encoding` header to `chunked`.
   *
   * @public
   */
  UploadAvailability?: UploadAvailability | undefined;
}

/**
 * @public
 */
export interface PutObjectResponse {
  /**
   * The SHA256 digest of the object that is persisted.
   *
   * @public
   */
  ContentSHA256?: string | undefined;

  /**
   * Unique identifier of the object in the container.
   *
   * @public
   */
  ETag?: string | undefined;

  /**
   * The storage class where the object was persisted. The class should be “Temporal”.
   *
   * @public
   */
  StorageClass?: StorageClass | undefined;
}
