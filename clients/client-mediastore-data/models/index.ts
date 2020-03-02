import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * <p>The specified container was not found for the specified account.</p>
 */
export interface ContainerNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ContainerNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ContainerNotFoundException {
  export function isa(o: any): o is ContainerNotFoundException {
    return __isa(o, "ContainerNotFoundException");
  }
}

export interface DeleteObjectRequest {
  __type?: "DeleteObjectRequest";
  /**
   * <p>The path (including the file name) where the object is stored in the container.
   *          Format: <folder name>/<folder name>/<file name></p>
   */
  Path: string | undefined;
}

export namespace DeleteObjectRequest {
  export function isa(o: any): o is DeleteObjectRequest {
    return __isa(o, "DeleteObjectRequest");
  }
}

export interface DeleteObjectResponse {
  __type?: "DeleteObjectResponse";
}

export namespace DeleteObjectResponse {
  export function isa(o: any): o is DeleteObjectResponse {
    return __isa(o, "DeleteObjectResponse");
  }
}

export interface DescribeObjectRequest {
  __type?: "DescribeObjectRequest";
  /**
   * <p>The path (including the file name) where the object is stored in the container.
   *          Format: <folder name>/<folder name>/<file name></p>
   */
  Path: string | undefined;
}

export namespace DescribeObjectRequest {
  export function isa(o: any): o is DescribeObjectRequest {
    return __isa(o, "DescribeObjectRequest");
  }
}

export interface DescribeObjectResponse {
  __type?: "DescribeObjectResponse";
  /**
   * <p>An optional <code>CacheControl</code> header that allows the caller to control the
   *          object's cache behavior. Headers can be passed in as specified in the HTTP at <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p>
   *          <p>Headers with a custom user-defined value are also accepted.</p>
   */
  CacheControl?: string;

  /**
   * <p>The length of the object in bytes.</p>
   */
  ContentLength?: number;

  /**
   * <p>The content type of the object.</p>
   */
  ContentType?: string;

  /**
   * <p>The ETag that represents a unique instance of the object.</p>
   */
  ETag?: string;

  /**
   * <p>The date and time that the object was last modified.</p>
   */
  LastModified?: Date;
}

export namespace DescribeObjectResponse {
  export function isa(o: any): o is DescribeObjectResponse {
    return __isa(o, "DescribeObjectResponse");
  }
}

export interface GetObjectRequest {
  __type?: "GetObjectRequest";
  /**
   * <p>The path (including the file name) where the object is stored in the container.
   *          Format: <folder name>/<folder name>/<file name></p>
   *          <p>For example, to upload the file <code>mlaw.avi</code> to the folder path
   *             <code>premium\canada</code> in the container <code>movies</code>, enter the path
   *             <code>premium/canada/mlaw.avi</code>.</p>
   *          <p>Do not include the container name in this path.</p>
   *          <p>If the path includes any folders that don't exist yet, the service creates them. For
   *          example, suppose you have an existing <code>premium/usa</code> subfolder. If you specify
   *             <code>premium/canada</code>, the service creates a <code>canada</code> subfolder in the
   *             <code>premium</code> folder. You then have two subfolders, <code>usa</code> and
   *             <code>canada</code>, in the <code>premium</code> folder. </p>
   *          <p>There is no correlation between the path to the source and the path (folders) in the
   *          container in AWS Elemental MediaStore.</p>
   *          <p>For more information about folders and how they exist in a container, see the <a href="http://docs.aws.amazon.com/mediastore/latest/ug/">AWS Elemental MediaStore User
   *             Guide</a>.</p>
   *          <p>The file name is the name that is assigned to the file that you upload. The file can
   *          have the same name inside and outside of AWS Elemental MediaStore, or it can have the same
   *          name. The file name can include or omit an extension. </p>
   */
  Path: string | undefined;

  /**
   * <p>The range bytes of an object to retrieve. For more information about the
   *             <code>Range</code> header, go to <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35</a>.</p>
   */
  Range?: string;
}

export namespace GetObjectRequest {
  export function isa(o: any): o is GetObjectRequest {
    return __isa(o, "GetObjectRequest");
  }
}

export interface GetObjectResponse {
  __type?: "GetObjectResponse";
  /**
   * <p>The bytes of the object. </p>
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * <p>An optional <code>CacheControl</code> header that allows the caller to control the
   *          object's cache behavior. Headers can be passed in as specified in the HTTP spec at <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p>
   *          <p>Headers with a custom user-defined value are also accepted.</p>
   */
  CacheControl?: string;

  /**
   * <p>The length of the object in bytes.</p>
   */
  ContentLength?: number;

  /**
   * <p>The range of bytes to retrieve.</p>
   */
  ContentRange?: string;

  /**
   * <p>The content type of the object.</p>
   */
  ContentType?: string;

  /**
   * <p>The ETag that represents a unique instance of the object.</p>
   */
  ETag?: string;

  /**
   * <p>The date and time that the object was last modified.</p>
   */
  LastModified?: Date;
}

export namespace GetObjectResponse {
  export function isa(o: any): o is GetObjectResponse {
    return __isa(o, "GetObjectResponse");
  }
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface InternalServerError
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerError {
  export function isa(o: any): o is InternalServerError {
    return __isa(o, "InternalServerError");
  }
}

/**
 * <p>A metadata entry for a folder or object.</p>
 */
export interface Item {
  __type?: "Item";
  /**
   * <p>The length of the item in bytes.</p>
   */
  ContentLength?: number;

  /**
   * <p>The content type of the item.</p>
   */
  ContentType?: string;

  /**
   * <p>The ETag that represents a unique instance of the item.</p>
   */
  ETag?: string;

  /**
   * <p>The date and time that the item was last modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>The name of the item.</p>
   */
  Name?: string;

  /**
   * <p>The item type (folder or object).</p>
   */
  Type?: ItemType | string;
}

export namespace Item {
  export function isa(o: any): o is Item {
    return __isa(o, "Item");
  }
}

export enum ItemType {
  FOLDER = "FOLDER",
  OBJECT = "OBJECT"
}

export interface ListItemsRequest {
  __type?: "ListItemsRequest";
  /**
   * <p>The maximum number of results to return per API request. For example, you submit a
   *             <code>ListItems</code> request with <code>MaxResults</code> set at 500. Although 2,000
   *          items match your request, the service returns no more than the first 500 items. (The
   *          service also returns a <code>NextToken</code> value that you can use to fetch the next
   *          batch of results.) The service might return fewer results than the <code>MaxResults</code>
   *          value.</p>
   *          <p>If <code>MaxResults</code> is not included in the request, the service defaults to
   *          pagination with a maximum of 1,000 results per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that identifies which batch of results that you want to see. For example,
   *          you submit a <code>ListItems</code> request with <code>MaxResults</code> set at 500. The
   *          service returns the first batch of results (up to 500) and a <code>NextToken</code> value.
   *          To see the next batch of results, you can submit the <code>ListItems</code> request a
   *          second time and specify the <code>NextToken</code> value.</p>
   *          <p>Tokens expire after 15 minutes.</p>
   */
  NextToken?: string;

  /**
   * <p>The path in the container from which to retrieve items. Format: <folder
   *          name>/<folder name>/<file name></p>
   */
  Path?: string;
}

export namespace ListItemsRequest {
  export function isa(o: any): o is ListItemsRequest {
    return __isa(o, "ListItemsRequest");
  }
}

export interface ListItemsResponse {
  __type?: "ListItemsResponse";
  /**
   * <p>The metadata entries for the folders and objects at the requested path.</p>
   */
  Items?: Array<Item>;

  /**
   * <p>The token that can be used in a request to view the next set of results. For example,
   *          you submit a <code>ListItems</code> request that matches 2,000 items with
   *             <code>MaxResults</code> set at 500. The service returns the first batch of results (up
   *          to 500) and a <code>NextToken</code> value that can be used to fetch the next batch of
   *          results.</p>
   */
  NextToken?: string;
}

export namespace ListItemsResponse {
  export function isa(o: any): o is ListItemsResponse {
    return __isa(o, "ListItemsResponse");
  }
}

/**
 * <p>Could not perform an operation on an object that does not exist.</p>
 */
export interface ObjectNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ObjectNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ObjectNotFoundException {
  export function isa(o: any): o is ObjectNotFoundException {
    return __isa(o, "ObjectNotFoundException");
  }
}

export interface PutObjectRequest {
  __type?: "PutObjectRequest";
  /**
   * <p>The bytes to be stored. </p>
   */
  Body: Readable | ReadableStream | Blob | undefined;

  /**
   * <p>An optional <code>CacheControl</code> header that allows the caller to control the
   *          object's cache behavior. Headers can be passed in as specified in the HTTP at <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p>
   *          <p>Headers with a custom user-defined value are also accepted.</p>
   */
  CacheControl?: string;

  /**
   * <p>The content type of the object.</p>
   */
  ContentType?: string;

  /**
   * <p>The path (including the file name) where the object is stored in the container.
   *          Format: <folder name>/<folder name>/<file name></p>
   *          <p>For example, to upload the file <code>mlaw.avi</code> to the folder path
   *             <code>premium\canada</code> in the container <code>movies</code>, enter the path
   *             <code>premium/canada/mlaw.avi</code>.</p>
   *          <p>Do not include the container name in this path.</p>
   *          <p>If the path includes any folders that don't exist yet, the service creates them. For
   *          example, suppose you have an existing <code>premium/usa</code> subfolder. If you specify
   *             <code>premium/canada</code>, the service creates a <code>canada</code> subfolder in the
   *             <code>premium</code> folder. You then have two subfolders, <code>usa</code> and
   *             <code>canada</code>, in the <code>premium</code> folder. </p>
   *          <p>There is no correlation between the path to the source and the path (folders) in the
   *          container in AWS Elemental MediaStore.</p>
   *          <p>For more information about folders and how they exist in a container, see the <a href="http://docs.aws.amazon.com/mediastore/latest/ug/">AWS Elemental MediaStore User
   *             Guide</a>.</p>
   *          <p>The file name is the name that is assigned to the file that you upload. The file can
   *          have the same name inside and outside of AWS Elemental MediaStore, or it can have the same
   *          name. The file name can include or omit an extension. </p>
   */
  Path: string | undefined;

  /**
   * <p>Indicates the storage class of a <code>Put</code> request. Defaults to
   *          high-performance temporal storage class, and objects are persisted into durable storage
   *          shortly after being received.</p>
   */
  StorageClass?: StorageClass | string;
}

export namespace PutObjectRequest {
  export function isa(o: any): o is PutObjectRequest {
    return __isa(o, "PutObjectRequest");
  }
}

export interface PutObjectResponse {
  __type?: "PutObjectResponse";
  /**
   * <p>The SHA256 digest of the object that is persisted.</p>
   */
  ContentSHA256?: string;

  /**
   * <p>Unique identifier of the object in the container.</p>
   */
  ETag?: string;

  /**
   * <p>The storage class where the object was persisted. The class should be
   *          “Temporal”.</p>
   */
  StorageClass?: StorageClass | string;
}

export namespace PutObjectResponse {
  export function isa(o: any): o is PutObjectResponse {
    return __isa(o, "PutObjectResponse");
  }
}

/**
 * <p>The requested content range is not valid.</p>
 */
export interface RequestedRangeNotSatisfiableException
  extends __SmithyException,
    $MetadataBearer {
  name: "RequestedRangeNotSatisfiableException";
  $fault: "client";
  Message?: string;
}

export namespace RequestedRangeNotSatisfiableException {
  export function isa(o: any): o is RequestedRangeNotSatisfiableException {
    return __isa(o, "RequestedRangeNotSatisfiableException");
  }
}

export enum StorageClass {
  TEMPORAL = "TEMPORAL"
}
