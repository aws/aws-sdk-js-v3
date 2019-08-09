import { _UnmarshalledUnsuccessfulItem } from "./_UnsuccessfulItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ReleaseHostsOutput shape
 */
export interface ReleaseHostsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The IDs of the Dedicated Hosts that were successfully released.</p>
   */
  Successful?: Array<string>;

  /**
   * <p>The IDs of the Dedicated Hosts that could not be released, including an error message.</p>
   */
  Unsuccessful?: Array<_UnmarshalledUnsuccessfulItem>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
