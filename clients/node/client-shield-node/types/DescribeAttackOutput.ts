import { _UnmarshalledAttackDetail } from "./_AttackDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAttackOutput shape
 */
export interface DescribeAttackOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The attack that is described.</p>
   */
  Attack?: _UnmarshalledAttackDetail;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
