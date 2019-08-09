import { _UnmarshalledAttributeValue } from "./_AttributeValue";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAttributeValuesOutput shape
 */
export interface GetAttributeValuesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of values for an attribute. For example, <code>Throughput Optimized HDD</code> and <code>Provisioned IOPS</code> are two available values for the <code>AmazonEC2</code> <code>volumeType</code>.</p>
   */
  AttributeValues?: Array<_UnmarshalledAttributeValue>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
