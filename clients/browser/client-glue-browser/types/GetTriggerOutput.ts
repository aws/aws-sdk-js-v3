import { _UnmarshalledTrigger } from "./_Trigger";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTriggerOutput shape
 */
export interface GetTriggerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested trigger definition.</p>
   */
  Trigger?: _UnmarshalledTrigger;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
