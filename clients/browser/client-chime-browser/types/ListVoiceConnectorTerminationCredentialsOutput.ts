import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListVoiceConnectorTerminationCredentialsOutput shape
 */
export interface ListVoiceConnectorTerminationCredentialsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of user names.</p>
   */
  Usernames?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
