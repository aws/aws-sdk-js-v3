import { _UnmarshalledOTAUpdateInfo } from "./_OTAUpdateInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetOTAUpdateOutput shape
 */
export interface GetOTAUpdateOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The OTA update info.</p>
   */
  otaUpdateInfo?: _UnmarshalledOTAUpdateInfo;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
