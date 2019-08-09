import { _UnmarshalledDisk } from "./_Disk";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListLocalDisksOutput shape
 */
export interface ListLocalDisksOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>A JSON object containing the following fields:</p> <ul> <li> <p> <a>ListLocalDisksOutput$Disks</a> </p> </li> </ul>
   */
  Disks?: Array<_UnmarshalledDisk>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
