import { _UnmarshalledService } from "./_Service";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeServicesOutput shape
 */
export interface DescribeServicesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The service metadata for the service or services in the response.</p>
   */
  Services?: Array<_UnmarshalledService>;

  /**
   * <p>The format version of the response. For example, <code>aws_v1</code>.</p>
   */
  FormatVersion?: string;

  /**
   * <p>The pagination token for the next set of retreivable results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
