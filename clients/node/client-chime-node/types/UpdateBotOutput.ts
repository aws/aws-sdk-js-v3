import { _UnmarshalledBot } from "./_Bot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateBotOutput shape
 */
export interface UpdateBotOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The updated bot details.</p>
   */
  Bot?: _UnmarshalledBot;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
