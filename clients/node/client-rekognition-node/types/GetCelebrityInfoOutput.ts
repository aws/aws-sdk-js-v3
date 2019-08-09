import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCelebrityInfoOutput shape
 */
export interface GetCelebrityInfoOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of URLs pointing to additional celebrity information. </p>
   */
  Urls?: Array<string>;

  /**
   * <p>The name of the celebrity.</p>
   */
  Name?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
