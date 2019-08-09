import { _UnmarshalledStaticIp } from "./_StaticIp";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetStaticIpsOutput shape
 */
export interface GetStaticIpsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about your get static IPs request.</p>
   */
  staticIps?: Array<_UnmarshalledStaticIp>;

  /**
   * <p>A token used for advancing to the next page of results from your get static IPs request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
