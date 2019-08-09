import { _UnmarshalledKeyPairInfo } from "./_KeyPairInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeKeyPairsOutput shape
 */
export interface DescribeKeyPairsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the key pairs.</p>
   */
  KeyPairs?: Array<_UnmarshalledKeyPairInfo>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
