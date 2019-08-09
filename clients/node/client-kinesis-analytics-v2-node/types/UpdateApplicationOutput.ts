import { _UnmarshalledApplicationDetail } from "./_ApplicationDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateApplicationOutput shape
 */
export interface UpdateApplicationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes application updates.</p>
   */
  ApplicationDetail: _UnmarshalledApplicationDetail;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
