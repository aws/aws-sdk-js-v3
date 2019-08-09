import { _UnmarshalledService } from "./_Service";
import { _UnmarshalledFailure } from "./_Failure";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeServicesOutput shape
 */
export interface DescribeServicesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of services described.</p>
   */
  services?: Array<_UnmarshalledService>;

  /**
   * <p>Any failures associated with the call.</p>
   */
  failures?: Array<_UnmarshalledFailure>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
