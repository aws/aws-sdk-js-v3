import { _UnmarshalledTrigger } from "./_Trigger";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetTriggersOutput shape
 */
export interface BatchGetTriggersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of trigger definitions.</p>
   */
  Triggers?: Array<_UnmarshalledTrigger>;

  /**
   * <p>A list of names of triggers not found.</p>
   */
  TriggersNotFound?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
