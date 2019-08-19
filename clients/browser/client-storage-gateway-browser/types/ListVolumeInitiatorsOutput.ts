import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>ListVolumeInitiatorsOutput</p>
 */
export interface ListVolumeInitiatorsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The host names and port numbers of all iSCSI initiators that are connected to the gateway.</p>
   */
  Initiators?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
