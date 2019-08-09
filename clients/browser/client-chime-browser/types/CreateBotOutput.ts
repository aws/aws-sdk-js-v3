import { _UnmarshalledBot } from "./_Bot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateBotOutput shape
 */
export interface CreateBotOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The bot details.</p>
   */
  Bot?: _UnmarshalledBot;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
