import { _UnmarshalledShareResult } from "./_ShareResult";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AddResourcePermissionsOutput shape
 */
export interface AddResourcePermissionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The share results.</p>
   */
  ShareResults?: Array<_UnmarshalledShareResult>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
