import { _UnmarshalledService } from "./_Service";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteServiceOutput shape
 */
export interface DeleteServiceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The full description of the deleted service.</p>
   */
  service?: _UnmarshalledService;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
