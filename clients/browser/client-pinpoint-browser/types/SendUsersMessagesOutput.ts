import { _UnmarshalledSendUsersMessageResponse } from "./_SendUsersMessageResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SendUsersMessagesOutput shape
 */
export interface SendUsersMessagesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * User send message response.
   */
  SendUsersMessageResponse: _UnmarshalledSendUsersMessageResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
