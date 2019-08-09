import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListObjectChildrenOutput shape
 */
export interface ListObjectChildrenOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Children structure, which is a map with key as the <code>LinkName</code> and <code>ObjectIdentifier</code> as the value.</p>
   */
  Children?: { [key: string]: string };

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
