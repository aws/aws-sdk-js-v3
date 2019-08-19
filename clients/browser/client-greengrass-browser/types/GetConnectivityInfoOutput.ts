import { _UnmarshalledConnectivityInfo } from "./_ConnectivityInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetConnectivityInfoOutput shape
 */
export interface GetConnectivityInfoOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Connectivity info list.
   */
  ConnectivityInfo?: Array<_UnmarshalledConnectivityInfo>;

  /**
   * A message about the connectivity info request.
   */
  Message?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
