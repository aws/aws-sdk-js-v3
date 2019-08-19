import { _UnmarshalledOperation } from "./_Operation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AllocateStaticIpOutput shape
 */
export interface AllocateStaticIpOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about the static IP address you allocated.</p>
   */
  operations?: Array<_UnmarshalledOperation>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
