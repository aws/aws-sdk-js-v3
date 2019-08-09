import { _UnmarshalledProduct } from "./_Product";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeProductsOutput shape
 */
export interface DescribeProductsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of products, including details for each product.</p>
   */
  Products: Array<_UnmarshalledProduct>;

  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
