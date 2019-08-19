import { _UnmarshalledInstancePortState } from "./_InstancePortState";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInstancePortStatesOutput shape
 */
export interface GetInstancePortStatesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the port states resulting from your request.</p>
   */
  portStates?: Array<_UnmarshalledInstancePortState>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
