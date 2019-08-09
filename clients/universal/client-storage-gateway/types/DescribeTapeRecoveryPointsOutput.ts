import { _UnmarshalledTapeRecoveryPointInfo } from "./_TapeRecoveryPointInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>DescribeTapeRecoveryPointsOutput</p>
 */
export interface DescribeTapeRecoveryPointsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>An array of TapeRecoveryPointInfos that are available for the specified gateway.</p>
   */
  TapeRecoveryPointInfos?: Array<_UnmarshalledTapeRecoveryPointInfo>;

  /**
   * <p>An opaque string that indicates the position at which the virtual tape recovery points that were listed for description ended.</p> <p>Use this marker in your next request to list the next set of virtual tape recovery points in the list. If there are no more recovery points to describe, this field does not appear in the response.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
