import { _UnmarshalledResourceServerType } from "./_ResourceServerType";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeResourceServerOutput shape
 */
export interface DescribeResourceServerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The resource server.</p>
   */
  ResourceServer: _UnmarshalledResourceServerType;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
