import { _UnmarshalledAccountAttribute } from "./_AccountAttribute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAccountAttributesOutput shape
 */
export interface DescribeAccountAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of attributes assigned to an account.</p>
   */
  AccountAttributes?: Array<_UnmarshalledAccountAttribute>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
