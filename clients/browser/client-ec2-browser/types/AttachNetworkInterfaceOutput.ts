import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of AttachNetworkInterface.</p>
 */
export interface AttachNetworkInterfaceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the network interface attachment.</p>
   */
  AttachmentId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
