import { _UnmarshalledBot } from "./_Bot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegenerateSecurityTokenOutput shape
 */
export interface RegenerateSecurityTokenOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
   */
  Bot?: _UnmarshalledBot;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
