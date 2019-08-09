import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of AllocateHosts.</p>
 */
export interface AllocateHostsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the allocated Dedicated Host. This is used to launch an instance onto a specific host.</p>
   */
  HostIds?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
