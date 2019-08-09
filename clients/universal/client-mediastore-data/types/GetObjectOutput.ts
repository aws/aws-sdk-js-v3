import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetObjectOutput shape
 */
export interface GetObjectOutput<StreamType = Uint8Array>
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The bytes of the object. </p>
   */
  Body?: StreamType;

  /**
   * <p>An optional <code>CacheControl</code> header that allows the caller to control the object's cache behavior. Headers can be passed in as specified in the HTTP spec at <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p> <p>Headers with a custom user-defined value are also accepted.</p>
   */
  CacheControl?: string;

  /**
   * <p>The range of bytes to retrieve.</p>
   */
  ContentRange?: string;

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

  /**
   * <p>The HTML status code of the request. Status codes ranging from 200 to 299 indicate success. All other status codes indicate the type of error that occurred.</p>
   */
  StatusCode: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
