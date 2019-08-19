import { _UnmarshalledTrigger } from "./_Trigger";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetTriggersOutput shape
 */
export interface GetTriggersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of triggers for the specified job.</p>
   */
  Triggers?: Array<_UnmarshalledTrigger>;

  /**
   * <p>A continuation token, if not all the requested triggers have yet been returned.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
