import { _UnmarshalledEmailChannelResponse } from "./_EmailChannelResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteEmailChannelOutput shape
 */
export interface DeleteEmailChannelOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Email Channel Response.
   */
  EmailChannelResponse: _UnmarshalledEmailChannelResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
