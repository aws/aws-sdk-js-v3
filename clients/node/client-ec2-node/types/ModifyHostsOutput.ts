import { _UnmarshalledUnsuccessfulItem } from "./_UnsuccessfulItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyHostsOutput shape
 */
export interface ModifyHostsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The IDs of the Dedicated Hosts that were successfully modified.</p>
   */
  Successful?: Array<string>;

  /**
   * <p>The IDs of the Dedicated Hosts that could not be modified. Check whether the setting you requested can be used.</p>
   */
  Unsuccessful?: Array<_UnmarshalledUnsuccessfulItem>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
