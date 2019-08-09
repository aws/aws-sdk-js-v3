import { _UnmarshalledChangeInfo } from "./_ChangeInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type containing the response for the request.</p>
 */
export interface ChangeResourceRecordSetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains information about changes made to your hosted zone.</p> <p>This element contains an ID that you use when performing a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html">GetChange</a> action to get detailed information about the change.</p>
   */
  ChangeInfo: _UnmarshalledChangeInfo;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
