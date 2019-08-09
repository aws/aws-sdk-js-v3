import { _UnmarshalledAccountAttribute } from "./_AccountAttribute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAccountAttributesOutput shape
 */
export interface DescribeAccountAttributesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the account attributes.</p>
   */
  AccountAttributes?: Array<_UnmarshalledAccountAttribute>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
