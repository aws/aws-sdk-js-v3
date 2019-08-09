import { _UnmarshalledService } from "./_Service";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The list of AWS services returned by the <a>DescribeServices</a> operation.</p>
 */
export interface DescribeServicesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A JSON-formatted list of AWS services.</p>
   */
  services?: Array<_UnmarshalledService>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
