import { _UnmarshalledEmailChannelResponse } from "./_EmailChannelResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetEmailChannelOutput shape
 */
export interface GetEmailChannelOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about the status and settings of the email channel for an application.</p>
   */
  EmailChannelResponse: _UnmarshalledEmailChannelResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
