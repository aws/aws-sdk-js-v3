import { _UnmarshalledConditionalForwarder } from "./_ConditionalForwarder";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a DescribeConditionalForwarder request.</p>
 */
export interface DescribeConditionalForwardersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of conditional forwarders that have been created.</p>
   */
  ConditionalForwarders?: Array<_UnmarshalledConditionalForwarder>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
