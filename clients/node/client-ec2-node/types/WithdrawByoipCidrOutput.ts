import { _UnmarshalledByoipCidr } from "./_ByoipCidr";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * WithdrawByoipCidrOutput shape
 */
export interface WithdrawByoipCidrOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the address pool.</p>
   */
  ByoipCidr?: _UnmarshalledByoipCidr;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
