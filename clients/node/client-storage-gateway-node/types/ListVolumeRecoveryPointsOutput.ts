import { _UnmarshalledVolumeRecoveryPointInfo } from "./_VolumeRecoveryPointInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListVolumeRecoveryPointsOutput shape
 */
export interface ListVolumeRecoveryPointsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>An array of <a>VolumeRecoveryPointInfo</a> objects.</p>
   */
  VolumeRecoveryPointInfos?: Array<_UnmarshalledVolumeRecoveryPointInfo>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
